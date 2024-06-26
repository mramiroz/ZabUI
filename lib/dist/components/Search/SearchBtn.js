"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SearchBtn;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function SearchBtn(_ref) {
  var placeholder = _ref.placeholder,
    onChange = _ref.onChange,
    borderColor = _ref.borderColor,
    backColor = _ref.backColor,
    textColor = _ref.textColor,
    onSearch = _ref.onSearch;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
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
  var handleButtonClick = function handleButtonClick() {
    setIsOpen(!isOpen);
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !isOpen && /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleButtonClick,
    className: "p-2 bg-white rounded-sm "
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/search-icon.svg",
    alt: "search",
    width: 20,
    height: 20
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative w-1/2 transition-opacity duration-500 ".concat(isOpen ? 'opacity-100' : 'opacity-0')
  }, /*#__PURE__*/_react["default"].createElement("input", {
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
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute top-0 left-0 flex items-center h-full p-3"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/search-icon.svg",
    alt: "search",
    width: 20,
    height: 20
  }))));
}