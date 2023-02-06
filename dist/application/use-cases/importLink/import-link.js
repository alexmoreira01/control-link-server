"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportLink = void 0;
var fetch = _interopRequireWildcard(require("node-fetch"));
var cheerio = _interopRequireWildcard(require("cheerio"));
var _tsyringe = require("tsyringe");
var _linksRepositoryInterface = require("../../repositories/links-repository-interface");
var _link = require("../../entities/link");
var _dec, _dec2, _dec3, _dec4, _class;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
let ImportLink = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("LinksRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _linksRepositoryInterface.LinkRepository === "undefined" ? Object : _linksRepositoryInterface.LinkRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ImportLink {
  constructor(linksRepository) {
    this.linksRepository = linksRepository;
    this.getUrl = link => {
      if (link.includes("https")) {
        return link;
      } else if (link.startsWith("/")) {
        return `https://devgo.com.br${link}`;
      } else {
        return `https://devgo.com.br/${link}`;
      }
    };
  }
  async execute(url) {
    const seenUrls = {};
    const items = [];
    if (seenUrls[url]) return;
    console.log("crawling", url);
    seenUrls[url] = true;
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    $('.blog-article-card-title').each((i, element) => {
      const label = $(element).children('a').text();
      const link = this.getUrl($(element).children('a').attr('href'));
      items.push({
        label,
        link
      });
    });
    for (let i = 0; i < items.length; i++) {
      const linkAlreadyExists = await this.linksRepository.findLinkByLabel(items[i].label);
      if (linkAlreadyExists) {
        let linkUpdate = linkAlreadyExists;
        linkUpdate.label = items[i].label;
        linkUpdate.url = items[i].link;
        linkUpdate.updatedAt();
        await this.linksRepository.updateLink(linkUpdate);
      } else {
        const newLink = new _link.Link({
          label: items[i].label,
          url: items[i].link,
          updated_at: null
        });
        await this.linksRepository.createLink(newLink);
      }
    }
  }
}) || _class) || _class) || _class) || _class);
exports.ImportLink = ImportLink;