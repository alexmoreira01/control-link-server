"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindLink = void 0;
var _tsyringe = require("tsyringe");
var _appError = require("../../../infra/errors/app-error");
var _linksRepositoryInterface = require("../../repositories/links-repository-interface");
var _dec, _dec2, _dec3, _dec4, _class;
let FindLink = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("LinksRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _linksRepositoryInterface.LinkRepository === "undefined" ? Object : _linksRepositoryInterface.LinkRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class FindLink {
  constructor(linksRepository) {
    this.linksRepository = linksRepository;
  }
  async execute(linkId) {
    const linkExists = await this.linksRepository.findLinkById(linkId);
    if (!linkExists) {
      throw new _appError.AppError("Link not existing!");
    }
    return linkExists;
  }
}) || _class) || _class) || _class) || _class);
exports.FindLink = FindLink;