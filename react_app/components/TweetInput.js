var React = require('react');

var TweetInput = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var tweet_field = React.findDOMNode(this.refs.tweet).value.trim();
    var username_field = 'nedzad';
    if (!tweet_field || !username_field) {
      return;
    }
    $.ajax({
      url: 'http://localhost:8080/api/tweets',
      type: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data:{username: username_field, tweet: tweet_field},
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });

    React.findDOMNode(this.refs.tweet).value = '';
    return;
  },
  render: function (){
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="input-group">
      <input type="text" className="form-control" placeholder="Enter your tweet here..." ref="tweet"/>
      <span className="input-group-btn">
      <input className="btn btn-primary" type="submit" onclick="" value="Tweet!"/>
      </span>

      </div>
      </form>
    )
  }});

  module.exports = TweetInput;
