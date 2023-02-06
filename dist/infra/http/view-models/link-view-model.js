"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkViewModel = void 0;
class LinkViewModel {
  static toHTTP(link) {
    return {
      id: link.id,
      label: link.label,
      url: link.url,
      created_at: link.created_at,
      updated_at: link.updated_at
    };
  }
}
exports.LinkViewModel = LinkViewModel;