const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = require('../models/comment');

const wineSchema = new Schema({
  winery: String,
  wine: String,
  region: String,
  vintage: Number,
  blend: String,
  pairing: String,
  comment: { type: Comment.commentSchema }
});

const WineModel = mongoose.model('wine', wineSchema);

module.exports = {
  WineModel,
  WineSchema: wineSchema,
};