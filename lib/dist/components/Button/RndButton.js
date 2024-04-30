"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RndButton;
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function RndButton(_ref) {
  var width = _ref.width,
    height = _ref.height,
    backColor = _ref.backColor,
    borderColor = _ref.borderColor,
    onClick = _ref.onClick,
    href = _ref.href,
    children = _ref.children;
  return /*#__PURE__*/React.createElement("button", {
    className: "flex items-center justify-between px-6 py-4",
    onClick: onClick
  }, /*#__PURE__*/React.createElement(_link["default"], {
    href: href,
    className: "inline-block p-3 mr-2 text-sm font-semibold rounded-full",
    style: {
      backgroundColor: backColor,
      borderColor: borderColor
    }
  }, children));
}