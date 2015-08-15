var express = require('express');
var bodyParser = require('body-parser')
var Tweet = require('../node_app/models/tweet.js');
var app = express();
var router = express.Router();
app.listen(process.env.PORT || 8080);

app.get('/', function(req, res) {
  res.json({ message: 'API server for twitter clone' });
});

//Enable fetching json from different domain in this case from different port :)
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// Create body parser for urlencoded form
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Set route /api/tweets
router.route('/tweets')
//Make post call to save tweet in mongodb
.post(urlencodedParser, function(req, res){
  var currentDate = new Date();
  console.log(req);
  // Create new tweet from post
  var tweet = new Tweet();
  tweet.username=req.body.username,
  tweet.tweet= req.body.tweet,
  tweet.created_at=currentDate
  // Try to save new tweet to db
  tweet.save(function(err) {
    if (err) {
      return res.send({error: 'Something went wrong!'});
    }
    res.send({message: 'Success'});
  });
})

//Making get call on /api/tweets fetches all tweet for user
.get(function(req, res){
  Tweet.find({ username: 'nedzad' }, function(err, tweets) {
    if (err) {
      return res.send({error: 'Something went wrong!'});
    }
    res.json(tweets);
  });
});

router.route('/count')
.get(function(req, res){
  Tweet.count({ username: 'nedzad'}, function(err, c) {
    if (err) {
      return res.send({error: 'Something went wrong!'});
    }
    res.send({tweet_number: c});
  })
});
// Setup express router
app.use('/api', router);
