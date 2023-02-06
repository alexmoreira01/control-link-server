"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateLink = void 0;
var _tsyringe = require("tsyringe");
var _appError = require("../../../infra/errors/app-error");
var _linksRepositoryInterface = require("../../repositories/links-repository-interface");
var _dec, _dec2, _dec3, _dec4, _class;
let UpdateLink = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("LinksRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _linksRepositoryInterface.LinkRepository === "undefined" ? Object : _linksRepositoryInterface.LinkRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateLink {
  constructor(linksRepository) {
    this.linksRepository = linksRepository;
  }
  async execute({
    linkId,
    label,
    url
  }) {
    const linkAlreadyExists = await this.linksRepository.findLinkById(linkId);
    if (!linkAlreadyExists) {
      throw new _appError.AppError("Link not exists!");
    }
    let linkUpdate = linkAlreadyExists;
    linkUpdate.label = label;
    linkUpdate.url = url;
    linkUpdate.updatedAt();
    await this.linksRepository.updateLink(linkUpdate);
    return {
      link: linkUpdate
    };
  }
}) || _class) || _class) || _class) || _class);
exports.UpdateLink = UpdateLink;