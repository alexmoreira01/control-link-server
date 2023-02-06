"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateLinkController = void 0;
var _tsyringe = require("tsyringe");
var _updateLink = require("../../../application/use-cases/updateLink/update-link");
var _linkViewModel = require("../view-models/link-view-model");
class UpdateLinkController {
  async handle(request, response) {
    const linkId = request.params.id;
    const {
      label,
      url
    } = request.body;
    const updateLink = _tsyringe.container.resolve(_updateLink.UpdateLink);
    const {
      link
    } = await updateLink.execute({
      linkId,
      label,
      url
    });
    return response.status(200).json(_linkViewModel.LinkViewModel.toHTTP(link));
  }
}
exports.UpdateLinkController = UpdateLinkController;