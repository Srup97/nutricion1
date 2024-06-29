"use strict";

var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//index.js

var port = 3001;
_app["default"].listen(port, function () {
  console.log("Ejecuntandose en el puerto:".concat(port));
});