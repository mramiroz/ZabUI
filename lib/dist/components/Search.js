"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SearchBar;
var _image = _interopRequireDefault(require("next/image"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function SearchBar(_ref) {
  var placeholder = _ref.placeholder,
    onChange = _ref.onChange,
    onSearch = _ref.onSearch,
    borderColor = _ref.borderColor,
    backColor = _ref.backColor,
    textColor = _ref.textColor;
  textColor = textColor || 'black';
  borderColor = borderColor || 'black';
  backColor = backColor || 'white';
  onChange = onChange || function () {};
  onSearch = onSearch || function () {};
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'Enter') {
      onSearch(e.target.value);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-6 py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-1/2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: placeholder,
    onChange: onChange,
    onKeyDown: handleKeyDown,
    style: {
      borderColor: borderColor,
      backgroundColor: backColor,
      color: textColor
    },
    className: "w-full p-3 pl-10 text-sm font-semibold rounded-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 flex items-center h-full p-3"
  }, /*#__PURE__*/React.createElement(_image["default"], {
    src: "/search-icon.svg",
    alt: "search",
    width: 20,
    height: 20
  }))));
}