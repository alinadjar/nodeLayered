var express = require('express');
var http = require('http');
var app = express();

// Simple user controller implementation.
var users = [
  { username: 'jamsesso', age: 20, gender: 'M' },
  { username: 'bettycrocker', age: 20, gender: 'F' }
];

// Version 1 (Old)
function findUser(req, res) {
  res.json(users[req.params.id]);
}

// Version 2 (New & improved)
function findUser2(req, res) {
  if(!users.hasOwnProperty(req.params.id)) {
    res.send(404);
  }
  else {
    res.json(users[req.params.id]);
  }
}



// Set up the routing.
var v1 = express.Router();
var v2 = express.Router();

v1.use('/user', express.Router()
  .get('/:id', findUser));

v2.use('/user', express.Router()
  .get('/:id', findUser2));

app.use('/v1', v1);
app.use('/v2', v2);
app.use('/', v2); // Set the default version to latest.

// Setup server.
http.createServer(app).listen(8081, function () {
  console.log('Magic is happening on port 8081');
});