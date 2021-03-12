"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var UserSchema = new _mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  webs: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Web'
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('User', UserSchema);

exports.default = _default;