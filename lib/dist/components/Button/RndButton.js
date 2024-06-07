"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RndButton;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function RndButton(_ref) {
  var width = _ref.width,
    height = _ref.height,
    backColor = _ref.backColor,
    borderColor = _ref.borderColor,
    onClick = _ref.onClick,
    href = _ref.href,
    children = _ref.children,
    textColor = _ref.textColor;
  if (!backColor) backColor = "#1a202c";
  if (!textColor) textColor = "white";
  if (!borderColor) borderColor = "transparent";
  if (!width) width = 24;
  if (!height) height = 24;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "flex items-center justify-between px-6 py-4 transition-transform duration-200 transform hover:scale-110",
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: href,
    className: "inline-block p-3 mr-2 text-sm font-semibold transition-transform duration-200 transform rounded-full hover:scale-110",
    style: {
      backgroundColor: backColor,
      borderColor: borderColor,
      color: textColor
    }
  }, children));
}