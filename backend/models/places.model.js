const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  place_id: { type: String, required: true, default: "N/A" },
  name: { type: String, required: true },
  location: {type: Object, required: false },
  rating: { type: Number, required: false },
  url: {type: String, requied: false },
  comments: { type: String, required: false }
})

const collectionSchema = new Schema({
  collectionName: { type: String, required: true },
  createdBy: { type: String, required: false },
  children: [placeSchema]
}, {
  timestamps: true,
});

function dynamicCollectionModel(collectionName){ //parent schema
  return mongoose.model(collectionName, collectionSchema);
}

module.exports = { dynamicCollectionModel, placeSchema };