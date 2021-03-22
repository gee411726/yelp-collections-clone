const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  place_id: { type: String, required: true, default: "N/A" },
  name: { type: String, required: true },
  location: {type: Object, required: false },
  rating: { type: Number, required: false },
  comments: { type: String, required: false }
})

const collectionSchema = new Schema({
  collectionName: { type: String, required: true },
  createdBy: { type: String, required: true },
  children: [placeSchema]
}, {
  timestamps: true,
});

function dynamicCollectionModel(collectionName){ //parent schema
  return mongoose.model(collectionName, collectionSchema);
}

module.exports = { dynamicCollectionModel, placeSchema };