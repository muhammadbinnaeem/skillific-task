const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var socket = require('socket.io');
const app = express();
const port = 3000;

var indexRouter = require('./routes/index');
var notificationsRouter = require('./routes/notifications');

app.use(bodyParser.json());
// cross origin handling for different port on localhost
app.use(cors());
// routes
app.use('/', indexRouter);
app.use('/api/notifications', notificationsRouter);

var server = require('http')
  .createServer(app)
  .listen(port, function() {
    console.log(`Skillific app listening on port ${port}!`);
  });

var io = socket.listen(server);
// using io in controller for event fire
app.io = io;
io.sockets.on('connection', function() {
  console.log('User is connected');
});
