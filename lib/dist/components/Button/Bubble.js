"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Bubble;
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Bubble(_ref) {
  var text = _ref.text,
    image = _ref.image,
    width = _ref.width,
    height = _ref.height,
    color = _ref.color,
    link = _ref.link;
  return /*#__PURE__*/React.createElement(React.Fragment, null, link ? /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      borderColor: color
    },
    className: "flex items-center p-2 transition-all duration-200 transform rounded-lg hover:scale-110"
  }, /*#__PURE__*/React.createElement(_link["default"], {
    href: link,
    className: "flex"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mx-2"
  }, text), /*#__PURE__*/React.createElement(_image["default"], {
    src: image,
    alt: "profile",
    width: width,
    height: width
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      borderColor: color
    },
    className: "flex items-center p-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mx-2"
  }, text), /*#__PURE__*/React.createElement(_image["default"], {
    src: image,
    alt: "profile",
    width: width,
    height: width
  })));
}