var React = require('react');

var Tweet = React.createClass({
  render: function (){
    return (
      <div>
      <input className="input-control" placeholder="Tweet something now..."/><input type="submit" className="btn btn-primary" value="Tweet"/>
      </div>
     )
  }});

module.exports = Tweet;