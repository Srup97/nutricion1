"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _food = _interopRequireDefault(require("./routes/food.routes"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// index.js

var app = (0, _express["default"])();
app.use((0, _cors["default"])({
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'PUT']
}));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));

// Ruta para manejar la raíz
app.get('/', function (req, res) {
  res.send('¡Bienvenido a mi aplicación!');
});

// Rutas
app.use('/api', _food["default"]);
var _default = exports["default"] = app;