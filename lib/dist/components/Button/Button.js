"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Button;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Button(_ref) {
  var text = _ref.text,
    width = _ref.width,
    height = _ref.height,
    backColor = _ref.backColor,
    borderColor = _ref.borderColor,
    onClick = _ref.onClick,
    href = _ref.href;
  return /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      backgroundColor: backColor,
      borderColor: borderColor
    },
    className: "w-".concat(width, " h-").concat(height, " p-2 border rounded hover:shadow-lg"),
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: href
  }, text));
}