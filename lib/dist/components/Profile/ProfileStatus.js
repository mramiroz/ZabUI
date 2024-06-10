"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ProfileStatus;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ProfileStatus(_ref) {
  var image = _ref.image,
    width = _ref.width,
    height = _ref.height,
    borderColor = _ref.borderColor,
    href = _ref.href,
    alt = _ref.alt,
    status = _ref.status;
  if (!width) width = 3;
  if (!height) height = 3;
  var statusColor;
  switch (status) {
    case 'online':
      statusColor = 'bg-green-500';
      break;
    case 'offline':
      statusColor = 'bg-red-500';
      break;
    default:
      statusColor = 'bg-yellow-500';
      break;
  }
  var statusHeight = height / 4;
  var statusWidth = width / 4;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: href,
    className: "relative cursor-pointer"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: image,
    alt: alt,
    style: {
      borderColor: borderColor,
      width: "".concat(width, "rem"),
      height: "".concat(height, "rem"),
      objectFit: 'cover'
    },
    className: "mr-4 border-2 rounded-full cursor-pointer"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "absolute bottom-0 right-5 rounded-full border-2 ".concat(statusColor, " animate-pulse"),
    style: {
      width: "".concat(statusWidth, "rem"),
      height: "".concat(statusHeight, "rem"),
      borderColor: borderColor,
      animation: 'pulse 2s infinite'
    }
  })));
}