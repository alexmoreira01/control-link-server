"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteLinkController = void 0;
var _tsyringe = require("tsyringe");
var _deleteLink = require("../../../application/use-cases/deleteLink/delete-link");
class DeleteLinkController {
  async handle(request, response) {
    const linkId = request.params.id;
    const deleteLink = _tsyringe.container.resolve(_deleteLink.DeleteLink);
    await deleteLink.execute(linkId);
    return response.status(204).send();
  }
}
exports.DeleteLinkController = DeleteLinkController;