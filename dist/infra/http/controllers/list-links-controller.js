"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListLinksController = void 0;
var _tsyringe = require("tsyringe");
var _listLinks = require("../../../application/use-cases/listLinks/list-links");
var _linkViewModel = require("../view-models/link-view-model");
class ListLinksController {
  async handle(request, response) {
    const listLinks = _tsyringe.container.resolve(_listLinks.ListLinks);
    const links = await listLinks.execute();
    return response.json(links.map(_linkViewModel.LinkViewModel.toHTTP));
  }
}
exports.ListLinksController = ListLinksController;