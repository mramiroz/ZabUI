"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Button;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Button(_ref) {
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
    style: {
      backgroundColor: backColor,
      borderColor: borderColor,
      color: textColor
    },
    className: "p-2 font-bold transition-all duration-200 ease-in-out transform border-2 rounded hover:shadow-lg hover:scale-110",
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: href
  }, children));
}