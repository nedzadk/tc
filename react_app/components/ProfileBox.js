var React = require('react');
var TweetStore = require('../stores/TweetStore');

function getAppState() {
  return {
    tweets: TweetStore.getTweets()
  };
}

var ProfileBox = React.createClass({
  getInitialState: function() {
    return getAppState();
  },

  componentDidMount: function() {
    TweetStore.addChangeListener(this._onChange);
  },
  render: function() {
    return (
      <div>
      <img src="https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg"/>
      <h4>@nedzad</h4>
        Number of tweets <strong>{this.state.tweets.length}</strong>
      </div>
    )
  },
  _onChange: function(){
    this.setState(getAppState());
  }
});

  module.exports = ProfileBox;
