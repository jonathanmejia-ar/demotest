"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _server = _interopRequireDefault(require("./server"));

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//app config
var app = (0, _express.default)();
var PORT = _config.default.PORT || 4000; //middlewares

app.use((0, _cors.default)());
app.use((0, _morgan.default)('dev'));
app.use(_express.default.json()); //api routes

app.use('/', _index.default);

var startApp = () => {
  (0, _server.default)();
  app.listen(PORT, () => {
    console.log("Server is running on port ".concat(PORT));
  });
};

startApp();