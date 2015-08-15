var React = require('react');
var Tweet = require('../components/Tweet');
var TweetStore = require('../stores/TweetStore');

var TweetList = React.createClass({
  render: function() {
    return (
      <div>
      <Tweet/>
      <img src="https://s3.amazonaws.com/uifaces/faces/twitter/mantia/48.jpg"/>
        <ul>
        </ul>
      </div>
    )
  }});

module.exports = TweetList;