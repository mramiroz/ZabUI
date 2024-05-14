"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LinkButton;
function LinkButton(_ref) {
  var href = _ref.href,
    text = _ref.text,
    color = _ref.color;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: "text-".concat(color, "-500 hover:text-").concat(color, "-700 m-4 transform hover:scale-110")
  }, text);
}