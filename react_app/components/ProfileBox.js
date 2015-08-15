var React = require('react');

var ProfileBox = React.createClass({
  render: function() {
    return (
      <div>
      <img src="https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg"/>
        <h4>@nedzad</h4>
        Number of tweets: #
      </div>
    )
  }});
module.exports = ProfileBox;
    