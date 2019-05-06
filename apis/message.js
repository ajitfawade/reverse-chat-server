const Message = require('../models/Message');
const _ = require('lodash');
const express = require('express');
const constants = require('../utils/constants');

const router = express.Router();

router.post('/', function(req, res) {
  const message = new Message(req.body);
  /* let io = req.app.get('socketio');
  let socket = _.find(io.sockets.sockets, function(currentSocket) {
    return currentSocket.id === req.headers.socketid;
  }); */
  message.save(function(err, savedMessage) {
    if (err) {
      console.log(err);
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .send(constants.RESPONSE_MESSAGES.ERROR);
      return;
    }
    res.json(savedMessage);
    // socket.broadcast.emit(constants.SOCKET_EVENTS.NEW_MESSAGE, savedMessage);
  });
});

router.get('/', function(req, res) {
  Message.find({}).exec(function(err, messages) {
    if (!err) {
      res.json(messages);
    } else {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .send(constants.RESPONSE_MESSAGES.ERROR);
    }
  });
});

module.exports = router;
