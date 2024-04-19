"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Profile;
var _image = _interopRequireDefault(require("next/image"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Profile(_ref) {
  var image = _ref.image,
    width = _ref.width,
    height = _ref.height,
    color = _ref.color;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    src: image,
    alt: "profile",
    width: width,
    height: width,
    className: "cursor-pointer mr-4 border-2 rounded-full",
    style: {
      borderColor: color
    }
  }));
}