"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;
var _crypto = require("crypto");
class Link {
  constructor(props, id) {
    this._id = void 0;
    this.props = void 0;
    this._id = id ?? (0, _crypto.randomUUID)();
    this.props = {
      ...props,
      created_at: props.created_at ?? new Date()
    };
  }
  get id() {
    return this._id;
  }
  set label(label) {
    this.props.label = label;
  }
  get label() {
    return this.props.label;
  }
  set url(url) {
    this.props.url = url;
  }
  get url() {
    return this.props.url;
  }
  set created_at(created_at) {
    this.props.created_at = created_at;
  }
  get created_at() {
    return this.props.created_at;
  }
  updatedAt() {
    this.props.updated_at = new Date();
  }
  get updated_at() {
    return this.props.updated_at;
  }
}
exports.Link = Link;