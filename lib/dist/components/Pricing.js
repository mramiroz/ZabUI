"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Pricing;
var _comps = require("@zabui/comps");
var colorPalette = {
  blue: {
    backColor: '#1E40AF',
    borderColor: 'white',
    textColor: '#1E40AF'
  },
  green: {
    backColor: '#047857',
    borderColor: '#047857',
    textColor: '#047857'
  },
  red: {
    backColor: '#DC2626',
    borderColor: '#DC2626',
    textColor: '#DC2626'
  },
  black: {
    backColor: '#262626',
    borderColor: '#FFFFFF',
    textColor: '#FFFFFF'
  },
  white: {
    backColor: '#F9FAFB',
    borderColor: '#F9FAFB',
    textColor: '#F9FAFB'
  }
};
function Pricing(_ref) {
  var price = _ref.price,
    text = _ref.text,
    features = _ref.features,
    color = _ref.color,
    btnText = _ref.btnText;
  var colorData = colorPalette[color];
  var backColor = colorData.backColor,
    borderColor = colorData.borderColor,
    textColor = colorData.textColor;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: backColor,
      borderColor: borderColor,
      textColor: textColor
    },
    className: "max-w-sm p-8 mx-auto border rounded-lg shadow-lg"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mb-4 text-center text-8xl"
  }, price), /*#__PURE__*/React.createElement("h2", {
    className: "mb-4 text-2xl text-center"
  }, text), /*#__PURE__*/React.createElement("ul", {
    className: "m-10 space-y-2 "
  }, features.map(function (feature) {
    return /*#__PURE__*/React.createElement("li", {
      key: feature,
      className: "flex items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mr-2"
    }, "\u2713"), /*#__PURE__*/React.createElement("span", {
      className: ""
    }, feature));
  })), /*#__PURE__*/React.createElement(_comps.Button, {
    href: "#",
    width: "4",
    heigth: "4",
    backColor: backColor,
    borderColor: borderColor
  }, btnText));
}