'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createMessage = exports.getAllMessages = undefined;

var _Message = require('../models/Message');

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllMessages = exports.getAllMessages = function getAllMessages() {
	return new Promise(function (resolve, reject) {
		_Message2.default.find().exec(function (allMessagesError, messages) {
			if (!allMessagesError) {
				resolve(messages);
			} else {
				reject(allMessagesError);
			}
		});
	});
};

var createMessage = exports.createMessage = function createMessage(messageData) {
	return new Promise(function (resolve, reject) {
		var message = new _Message2.default(messageData);
		message.save(function (saveError, newMessage) {
			if (!saveError) {
				resolve(newMessage);
			} else {
				reject(saveError);
			}
		});
	});
};