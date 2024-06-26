"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Bubble;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Bubble(_ref) {
  var text = _ref.text,
    image = _ref.image,
    width = _ref.width,
    height = _ref.height,
    borderColor = _ref.borderColor,
    backColor = _ref.backColor,
    textColor = _ref.textColor,
    link = _ref.link;
  if (!backColor) backColor = "#1a202c";
  if (!textColor) textColor = "white";
  if (!borderColor) borderColor = "transparent";
  if (!width) width = 24;
  if (!height) height = 24;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundColor: backColor,
      borderColor: borderColor,
      color: textColor
    },
    className: "flex items-center justify-center p-2 transition-all duration-200 transform rounded-lg hover:scale-110"
  }, link ? /*#__PURE__*/_react["default"].createElement("a", {
    href: link,
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "mx-2"
  }, text), /*#__PURE__*/_react["default"].createElement("img", {
    src: image,
    alt: "profile",
    width: width,
    height: height
  })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "mx-2"
  }, text), /*#__PURE__*/_react["default"].createElement("a", {
    href: link,
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: image,
    alt: "profile",
    width: width,
    height: height
  }))));
}