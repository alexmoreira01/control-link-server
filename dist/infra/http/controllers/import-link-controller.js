"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportLinkController = void 0;
var _tsyringe = require("tsyringe");
var _importLink = require("../../../application/use-cases/importLink/import-link");
class ImportLinkController {
  async handle(request, response) {
    const {
      url
    } = request.body;
    const importLink = _tsyringe.container.resolve(_importLink.ImportLink);
    await importLink.execute(url);
    return response.status(201).send();
  }
}
exports.ImportLinkController = ImportLinkController;