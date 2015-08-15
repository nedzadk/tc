var React = require('react');
var ProfileBox = require('../react_app/components/ProfileBox');
var TweetList = require('../react_app/components/TweetList');

React.render(<ProfileBox/>, document.getElementById('profile_box'));
React.render(<TweetList />, document.getElementById('tweet_list'));
