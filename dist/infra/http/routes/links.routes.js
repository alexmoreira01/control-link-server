"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linksRoutes = void 0;
var _express = require("express");
var _createLinkController = require("../controllers/create-link-controller");
var _listLinksController = require("../controllers/list-links-controller");
var _findLinkController = require("../controllers/find-link-controller");
var _deleteLinkController = require("../controllers/delete-link-controller");
var _importLinkController = require("../controllers/import-link-controller");
var _updateLinkController = require("../controllers/update-link-controller");
const linksRoutes = (0, _express.Router)();
exports.linksRoutes = linksRoutes;
const createLinkController = new _createLinkController.CreateLinkController();
const listLinkController = new _listLinksController.ListLinksController();
const findLinkController = new _findLinkController.FindLinkController();
const updateLinkController = new _updateLinkController.UpdateLinkController();
const deleteLinkController = new _deleteLinkController.DeleteLinkController();
const importLinkController = new _importLinkController.ImportLinkController();
linksRoutes.post('/', createLinkController.handle);
linksRoutes.get('/', listLinkController.handle);
linksRoutes.get('/find/:id', findLinkController.handle);
linksRoutes.put('/:id', updateLinkController.handle);
linksRoutes.delete('/:id', deleteLinkController.handle);
linksRoutes.post('/import', importLinkController.handle);