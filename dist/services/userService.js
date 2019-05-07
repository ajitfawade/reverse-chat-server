'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = exports.getAllUsers = exports.getUser = undefined;

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUser = exports.getUser = function getUser(id) {
  return new Promise(function (resolve, reject) {
    _User2.default.find({ _id: id }).exec(function (userError, user) {
      if (!userError) {
        resolve(user);
      } else {
        reject(userError);
      }
    });
  });
};

var getAllUsers = exports.getAllUsers = function getAllUsers() {
  return new Promise(function (resolve, reject) {
    _User2.default.find().exec(function (allUsersError, users) {
      if (!allUsersError) {
        resolve(users);
      } else {
        reject(allUsersError);
      }
    });
  });
};

var createUser = exports.createUser = function createUser(userData) {
  return new Promise(function (resolve, reject) {
    var user = new _User2.default(userData);
    user.save(function (saveError) {
      if (!saveError) {
        resolve(user);
      } else {
        reject(saveError);
      }
    });
  });
};