'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _message = require('./apis/message');

var _message2 = _interopRequireDefault(_message);

var _user = require('./apis/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config(); /* 
                           import socketIO from 'socket.io' */


var app = (0, _express2.default)();
var server = _http2.default.createServer(app);

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use('/api/user', _user2.default);
app.use('/api/message', _message2.default);

_mongoose2.default.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(function () {
  console.log('Successfully connected to :', process.env.MONGO_URI);
}).catch(function (error) {
  console.error('Error connecting to :', process.env.MONGO_URI, '\n', error);
});
server.listen(process.env.PORT, function () {
  console.log('Server started and listening on port:', process.env.PORT);
});