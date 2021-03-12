"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("./auth.routes"));

var _web = _interopRequireDefault(require("./web.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.use('/', _auth.default);
router.use('/webs', _web.default);
var _default = router;
exports.default = _default;