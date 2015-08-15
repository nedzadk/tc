var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/TweetConstants');

var TweetActions = {
  getTweets: function(){
    $.ajax({
      url: 'http://localhost:8080/api/tweets',
      dataType: 'json',
      cache: false,
      success: function(data) {
        AppDispatcher.handleViewAction({
          actionType:AppConstants.GET_TWEETS,
          item: data
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  }
}

module.exports = TweetActions;
