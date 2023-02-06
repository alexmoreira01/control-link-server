"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindLinkController = void 0;
var _tsyringe = require("tsyringe");
var _findLink = require("../../../application/use-cases/findLink/find-link");
var _linkViewModel = require("../view-models/link-view-model");
class FindLinkController {
  async handle(request, response) {
    const linkId = request.params.id;
    const findLink = _tsyringe.container.resolve(_findLink.FindLink);
    const link = await findLink.execute(linkId);
    return response.json(_linkViewModel.LinkViewModel.toHTTP(link));
  }
}
exports.FindLinkController = FindLinkController;