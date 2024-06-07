"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LinkButton;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function LinkButton(_ref) {
  var href = _ref.href,
    text = _ref.text,
    color = _ref.color,
    onClick = _ref.onClick;
  if (!color) color = "#1a202c";
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: href,
    className: "text-".concat(color, "-500 hover:text-").concat(color, "-700 m-4 transform hover:scale-110")
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick
  }, text));
}