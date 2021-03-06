var React = require('react');
var TweetInput = require('../components/TweetInput');
var TweetActions = require('../actions/TweetActions');
var TweetStore = require('../stores/TweetStore');

function getAppState() {
  return {
    tweets: TweetStore.getTweets()
  };
}

var TweetList = React.createClass({
  getInitialState: function() {
    return getAppState();
  },

  componentDidMount: function() {
    TweetStore.addChangeListener(this._onChange);
    TweetActions.getTweets();
  },

 componentWillUnmount: function() {
   TweetStore.removeChangeListener(this._onChange);
 },

  render: function() {

    return (
      <div>
      <TweetInput />
      { this.state.tweets.map(function(tweet){
        return (
        <div className="media">
        <div className="media-left">
        <img className="media-object" src="https://s3.amazonaws.com/uifaces/faces/twitter/mantia/48.jpg" alt="avatar"/>
        </div>
        <div className="media-body">
        <h4 className="media-heading">{tweet.username}</h4>
        {tweet.tweet}
        </div>
        </div>)
      })}

      </div>
    )
  },
  _onChange: function() {
   this.setState(getAppState());
 }
});

module.exports = TweetList;
