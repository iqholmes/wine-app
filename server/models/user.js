const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Wine = require('../models/wine');

const userSchema = new Schema ({
  firstName: String,
  lastName: String,
  favorites: [{ type: Wine.WineSchema }],
  email: String
})

const UserModel = mongoose.model('user', userSchema);

module.exports = {
  UserModel, 
  User: userSchema};