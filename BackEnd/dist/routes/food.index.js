"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _food = require("../controllers/food.controllers");
// routes/foodRoutes.js

var router = (0, _express.Router)();

// Ruta para agregar un alimento
router.post('/add-food', _food.addFood);
var _default = exports["default"] = router;