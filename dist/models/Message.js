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

var messageSchema = new _mongoose2.default.Schema({
  id: String,
  text: String,
  user: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'User'
  }
}, schemaOptions);

messageSchema.pre('save', function (next) {
  var message = this;

  if (!message.id) {
    message.id = _shortid2.default.generate() + _shortid2.default.generate();
  }
});

var Message = _mongoose2.default.model('Message', messageSchema);
exports.default = Message;