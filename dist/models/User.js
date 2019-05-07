'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schemaOptions = {
  timeStamps: true,
  toJSON: {
    virtuals: true
  }
};

var userSchema = new _mongoose2.default.Schema({
  id: String,
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  picture: String,
  short_name: String,
  facebookId: String
}, schemaOptions);

userSchema.pre('save', function (next) {
  var user = this;

  if (!user.id) {
    user.id = _shortid2.default.generate() + _shortid2.default.generate();
  }
  next();
});

var User = _mongoose2.default.model('User', userSchema);
exports.default = User;