const User = require('../models/User');
const _ = require('lodash');
const express = require('express');
const constants = require('../utils/constants');

const router = express.Router();

router.post('/', function(req, res) {
  const user = new User(req.body);
  let io = req.app.get('socketio');
  let socket = _.find(io.sockets.sockets, function(currentSocket) {
    return currentSocket.id === req.headers.socketid;
  });
  user.save(function(err, savedUser) {
    if (err) {
      console.log(err);
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .send(constants.RESPONSE_MESSAGES.ERROR);
      return;
    }
    res.json(savedUser);
    socket.broadcast.emit(constants.SOCKET_EVENTS.USER_JOINED, savedUser);
  });
});

router.get('/', function(req, res) {
  User.find({}).exec(function(err, users) {
    if (!err) {
      res.json(users);
    } else {
      console.error(err);
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .send(constants.RESPONSE_MESSAGES.ERROR);
    }
  });
});

module.exports = router;
