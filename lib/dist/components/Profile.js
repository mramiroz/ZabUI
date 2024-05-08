"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Profile;
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Profile(_ref) {
  var image = _ref.image,
    width = _ref.width,
    height = _ref.height,
    color = _ref.color,
    href = _ref.href;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/profile"
  }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    src: image,
    alt: "profile",
    width: width,
    height: width,
    className: "mr-4 border-2 rounded-full cursor-pointer",
    style: {
      borderColor: color
    }
  })));
}