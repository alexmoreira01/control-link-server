"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
var _express = require("express");
var _links = require("./links.routes");
const router = (0, _express.Router)();
exports.router = router;
router.use("/link", _links.linksRoutes);