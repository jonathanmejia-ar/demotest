"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profile = exports.login = exports.register = void 0;

var _user = _interopRequireDefault(require("../models/user.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var register = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var {
      username,
      email,
      password
    } = req.body;
    var createdUser = new _user.default({
      username,
      email,
      password
    });
    yield createdUser.save();
    res.status(201).json({
      success: true,
      message: 'User registered successfully'
    });
  });

  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.register = register;

var login = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var {
      username,
      password
    } = req.body;
    var user = yield _user.default.findOne({
      username: username
    });
    if (!user) res.status(404).json({
      success: false,
      message: 'User not found'
    });
    if (user.password !== password) res.status(401).json({
      success: false,
      message: 'password is incorrect'
    });
    res.status(200).send({
      success: true,
      message: 'Logged In successfully',
      data: user
    });
  });

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.login = login;

var profile = (req, res) => {
  res.send('Profile');
};

exports.profile = profile;