"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWebByName = exports.getWeb = exports.getWebs = exports.createWeb = void 0;

var _web = _interopRequireDefault(require("../models/web.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createWeb = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var {
      name,
      user
    } = req.body;
    console.log(user);
    var createdWeb = new _web.default({
      name,
      user: user
    });
    yield createdWeb.save();
    res.status(200).json({
      success: true,
      message: 'Web created successfully',
      data: createdWeb
    });
  });

  return function createWeb(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createWeb = createWeb;

var getWebs = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var webs = yield _web.default.find();
    res.status(200).json({
      success: true,
      data: webs
    });
  });

  return function getWebs(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getWebs = getWebs;

var getWeb = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var webId = req.params.id;
    var web = yield _web.default.findById(webId);
    res.status(200).json({
      success: true,
      data: web
    });
  });

  return function getWeb(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getWeb = getWeb;

var getWebByName = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    var page = req.params.id;
    var web = yield _web.default.findOne({
      name: page
    }).populate('user');
    console.log(web);
    res.status(200).json({
      success: true,
      data: web
    });
  });

  return function getWebByName(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getWebByName = getWebByName;