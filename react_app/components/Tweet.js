var React = require('react');

var Tweet = React.createClass({
  render: function (){
    return (
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Enter your tweet here..."/>
      <span className="input-group-btn">
        <button className="btn btn-primary" type="button">Tweet!</button>
      </span>
    </div>
     )
  }});

module.exports = Tweet;