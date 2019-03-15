"use strict";

require("dotenv/config");

var _other = _interopRequireDefault(require("./other"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// init app express
var app = (0, _express.default)();
(0, _other.default)();
app.listen(3000);