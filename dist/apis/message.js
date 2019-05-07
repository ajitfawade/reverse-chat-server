'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/demo', function (req, res) {
  console.log('In Demo:');
  res.json('Called Demo');
});
/* 
router.post('/', (req, res) => {
	console.log('Body:', req.body);
	res.json('Hello');
});
 */
exports.default = router;