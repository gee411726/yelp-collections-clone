const router = require('express').Router();
module.exports = router;
const mongoose = require('mongoose');
let User = require('../models/user.model');

let collections = require('../models/places.model');
let CollectionModel = collections.dynamicCollectionModel;
let placeSchema = collections.placeSchema;


router.route('/').get((req, res) => {
  results = {}
  // get all users and list of collections
  User.find()
  .then(users => results['usersList'] = users)
  .then(usersResponse => mongoose.connection.db.listCollections().toArray())
  .then(collections => results['collectionsList'] = collections)
  .then(collectionsResponse => res.json(results))
  .catch(err => res.status(400).json('Error: ' + err));

});

// Add new collection
router.route('/add').post((req, res) => {
  const collectionName = req.body.collectionName;
  
  var collectionModel = CollectionModel(collectionName);
  var newCollection = new collectionModel(req.body);

  newCollection.save()
    .then(() => res.json('Collection created!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// find collection by name
router.route('/collectionName').post((req, res) => {
  const collectionName = req.body.collectionName;
  collectionModel = CollectionModel(collectionName);
  collectionModel.find()
  .then(collection => res.json(collection));
});


// delete place from collection by placeName and collection? TODO:
router.route('/delete/place').post((req, res) => {
  const collectionName = req.body.collectionName; 
  collectionModel = CollectionModel(collectionName.toLowerCase());

  var myquery = { place_id: req.body.place_id }; // need place_id
  console.log("myquery", myquery)

  collectionModel.deleteOne(myquery)
    .then(() => res.json('Place successfully deleted from collection.'))
    .catch(err => res.status(400).json(err));
});


// add place to collection
router.route('/place/add').post((req, res) => {
  const collectionName = req.body.collectionName;

  //complie schema to model
  var placeModel = mongoose.model('Place', placeSchema, collectionName)
  var newPlace = new placeModel({
    place_id: req.body.placeId.toString().trim(),
    name: req.body.placeName,
    location: {
      lat: parseFloat(req.body.lat), 
      lng: parseFloat(req.body.lng)
    },
    rating: req.body.rating,
    comments: req.body.comments
  })


  newPlace.save(function (err, newPlace) {
    if (err) return console.error(err);
    res.json('Place successfully saved to collection!')
    console.log(newPlace.name + " saved to " + collectionName + " collection!")
  })
})




// delete collection
router.route('/delete/collection').post((req, res) => {
  const collectionName = req.body.collectionName;
  mongoose.connection.db.dropCollection(collectionName)
  .then(() => res.json('Collection successfully deleted from MongoDB Atlas cloud database.'))
  .catch(err => res.status(400).json(err));
})