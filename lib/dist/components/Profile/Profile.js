"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Profile;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Profile(_ref) {
  var image = _ref.image,
    width = _ref.width,
    height = _ref.height,
    borderColor = _ref.borderColor,
    href = _ref.href,
    alt = _ref.alt;
  if (!width) width = 3;
  if (!height) height = 3;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: href,
    className: "cursor-pointer"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: image,
    alt: alt,
    style: {
      borderColor: borderColor,
      width: "".concat(width, "rem"),
      height: "".concat(height, "rem"),
      objectFit: 'cover'
    },
    className: "mr-4 border-2 rounded-full cursor-pointer"
  })));
}