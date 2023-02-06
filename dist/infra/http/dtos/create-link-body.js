"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateLinkBody = void 0;
var _classValidator = require("class-validator");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2;
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
let CreateLinkBody = (_dec = (0, _classValidator.IsNotEmpty)(), _dec2 = (0, _classValidator.Length)(5, 191), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _classValidator.IsNotEmpty)(), _dec5 = (0, _classValidator.Length)(5, 191), _dec6 = Reflect.metadata("design:type", String), (_class = class CreateLinkBody {
  constructor() {
    _initializerDefineProperty(this, "label", _descriptor, this);
    _initializerDefineProperty(this, "url", _descriptor2, this);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "label", [_dec, _dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "url", [_dec4, _dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
exports.CreateLinkBody = CreateLinkBody;