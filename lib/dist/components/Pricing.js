"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Pricing;
var _comps = require("@zabui/comps");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Pricing(_ref) {
  var price = _ref.price,
    text = _ref.text,
    features = _ref.features,
    backColor = _ref.backColor,
    btnText = _ref.btnText,
    borderColor = _ref.borderColor,
    textColor = _ref.textColor,
    heigth = _ref.heigth,
    width = _ref.width;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundColor: backColor,
      borderColor: borderColor,
      textColor: textColor
    },
    className: "max-w-sm p-8 mx-auto border rounded-lg shadow-lg w-".concat(width, " h-").concat(heigth)
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "mb-4 text-center text-8xl"
  }, price), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "mb-4 text-2xl text-center"
  }, text), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "m-10 space-y-2 "
  }, features && features.map(function (feature) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: feature,
      className: "flex items-center"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "mr-2"
    }, "\u2713"), /*#__PURE__*/_react["default"].createElement("span", {
      className: ""
    }, feature));
  })), /*#__PURE__*/_react["default"].createElement(_comps.Button, {
    href: "#",
    width: "4",
    heigth: "4",
    backColor: backColor,
    borderColor: borderColor
  }, btnText));
}