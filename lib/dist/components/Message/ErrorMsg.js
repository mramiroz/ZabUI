"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ErrorMsg;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ErrorMsg(_ref) {
  var text = _ref.text,
    height = _ref.height;
  if (!height) height = 3;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex bg-red-500 items-center p-2 w-full rounded-md",
    style: {
      height: "".concat(height, "rem")
    }
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "h-full",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z",
    fill: "#fff"
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-lg font-bold"
  }, text));
}