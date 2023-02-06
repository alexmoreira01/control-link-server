"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaLinkMapper = void 0;
var _link = require("../../../../application/entities/link");
class PrismaLinkMapper {
  static toPrisma(link) {
    return {
      id: link.id,
      label: link.label,
      url: link.url,
      created_at: link.created_at,
      updated_at: link.updated_at
    };
  }
  static toDomain(raw) {
    return new _link.Link({
      label: raw.label,
      url: raw.url,
      created_at: raw.created_at,
      updated_at: raw.updated_at
    }, raw.id);
  }
}
exports.PrismaLinkMapper = PrismaLinkMapper;