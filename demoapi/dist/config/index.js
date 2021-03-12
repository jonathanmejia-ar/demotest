"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  DB: process.env.MONGODB_URI,
  PORT: process.env.PORT
};
exports.default = _default;