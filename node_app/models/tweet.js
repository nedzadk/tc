var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;

var tweetSchema = new Schema({
  username: { type: String, required: true},
  tweet: {type: String, required: true},
  created_at: {type: Date, required: true}
});

var Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;

