var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _tweets = [{username:'Dummy username', tweet: 'Dummy data'},{username:'Dummy username', tweet: 'Dummy data'}];

function load_tweets(data){
  _tweets = data.item
}

var TweetStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  getTweets: function(){
    return _tweets;
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;

  if (action.actionType = 'GET_TWEETS') {
    load_tweets(action);
    TweetStore.getTweets();
    TweetStore.emitChange();
  }

  return true;
});

module.exports = TweetStore;
