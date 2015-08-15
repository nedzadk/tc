var React = require('react');
var Tweet = require('../components/Tweet');
var TweetStore = require('../stores/TweetStore');

var TweetList = React.createClass({
  render: function() {
    return (
  
  <div>
  <Tweet />    
      <div className="media">
        <div className="media-left">
          <img className="media-object" src="https://s3.amazonaws.com/uifaces/faces/twitter/mantia/48.jpg" alt="avatar"/>
        </div>
        <div className="media-body">
          <h4 className="media-heading">@username</h4>
          This is sample tweet that should show up on page!
        </div>
      </div>
      <div className="media">
        <div className="media-left">
          <img className="media-object" src="https://s3.amazonaws.com/uifaces/faces/twitter/mantia/48.jpg" alt="avatar"/>
        </div>
        <div className="media-body">
          <h4 className="media-heading">@username</h4>
          This is sample tweet that should show up on page!
        </div>
      </div>
      <div className="media">
        <div className="media-left">
          <img className="media-object" src="https://s3.amazonaws.com/uifaces/faces/twitter/mantia/48.jpg" alt="avatar"/>
        </div>
        <div className="media-body">
          <h4 className="media-heading">@username</h4>
          This is sample tweet that should show up on page!
        </div>
      </div>
</div>

      )
  }});

module.exports = TweetList;