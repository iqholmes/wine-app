const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user');

const commentSchema = new Schema ({
  user: {type: User.userSchema},
  comment: String,
})

const CommentModel = mongoose.model('comment', commentSchema);

module.exports = {
  CommentModel, 
  Comment: commentSchema
};