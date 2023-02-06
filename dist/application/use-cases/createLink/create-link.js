"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateLink = void 0;
var _tsyringe = require("tsyringe");
var _appError = require("../../../infra/errors/app-error");
var _link = require("../../entities/link");
var _linksRepositoryInterface = require("../../repositories/links-repository-interface");
var _dec, _dec2, _dec3, _dec4, _class;
let CreateLink = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("LinksRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _linksRepositoryInterface.LinkRepository === "undefined" ? Object : _linksRepositoryInterface.LinkRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateLink {
  constructor(linksRepository) {
    this.linksRepository = linksRepository;
  }
  async execute({
    label,
    url
  }) {
    const linkAlreadyExists = await this.linksRepository.findLinkByLabel(label);
    if (linkAlreadyExists) {
      throw new _appError.AppError("Title already exists!");
    }
    const link = new _link.Link({
      label: label,
      url: url,
      updated_at: null
    });
    await this.linksRepository.createLink(link);
    return {
      link
    };
  }
}) || _class) || _class) || _class) || _class);
exports.CreateLink = CreateLink;