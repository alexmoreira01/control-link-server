"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateLinkController = void 0;
var _tsyringe = require("tsyringe");
var _createLink = require("../../../application/use-cases/createLink/create-link");
var _linkViewModel = require("../view-models/link-view-model");
class CreateLinkController {
  async handle(request, response) {
    const {
      label,
      url
    } = request.body;
    const createLink = _tsyringe.container.resolve(_createLink.CreateLink);
    const {
      link
    } = await createLink.execute({
      label,
      url
    });
    return response.status(201).json(_linkViewModel.LinkViewModel.toHTTP(link));
  }
}
exports.CreateLinkController = CreateLinkController;