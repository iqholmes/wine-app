const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Wine = require('./wine');

const userSchema = new Schema ({
  firstName: String,
  lastName: String,
  favorites: [{ type: Schema.Types.ObjectId, ref: "wine" }],
  email: String
})

const User = mongoose.model('user', userSchema);

module.exports = User;