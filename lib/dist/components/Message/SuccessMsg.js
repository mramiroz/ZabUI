"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SuccessMsg;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function SuccessMsg(_ref) {
  var text = _ref.text,
    height = _ref.height,
    textColor = _ref.textColor,
    backColor = _ref.backColor;
  if (!height) height = 3;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center p-2 w-full animate-fade-down rounded-md",
    style: {
      height: "".concat(height, "rem"),
      backgroundColor: backColor
    }
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "h-full mr-2",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.89163 13.2687L9.16582 17.5427L18.7085 8",
    stroke: textColor,
    "stroke-width": "2.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-lg font-bold",
    style: {
      textColor: textColor
    }
  }, text));
}