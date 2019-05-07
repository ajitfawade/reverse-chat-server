'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

var _userService = require('../services/userService');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', async function (req, res) {
  console.log('Body:', req.body);
  try {
    var savedUser = await (0, _userService.createUser)(req.body);
    res.json(savedUser);
  } catch (error) {
    res.status(500).send('Unable to create user');
  }
});

exports.default = router;