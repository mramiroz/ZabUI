"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/categories/[category]/page",{

/***/ "(app-pages-browser)/./src/app/categories/[category]/page.tsx":
/*!************************************************!*\
  !*** ./src/app/categories/[category]/page.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_component_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/component/card */ \"(app-pages-browser)/./src/components/component/card.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Show = ()=>{\n    _s();\n    const param = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const [components, setComponents] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const category = param.category;\n        fetch(\"/api/categories/\".concat(category)).then((respose)=>Response.json()).then((data)=>{\n            setComponents(data);\n        }).catch((err)=>{\n            console.error(err);\n        });\n    }, [\n        param.category\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: Array.isArray(components) && components.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_component_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: item._id,\n                code: item.code,\n                title: item.title,\n                description: item.description,\n                category: item.category,\n                props: item.props\n            }, index, false, {\n                fileName: \"/home/mramiro/CompUI/src/app/categories/[category]/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/home/mramiro/CompUI/src/app/categories/[category]/page.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Show, \"shgotJ+YEOs+KQejftLXNb6bJCs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = Show;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Show);\nvar _c;\n$RefreshReg$(_c, \"Show\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2F0ZWdvcmllcy9bY2F0ZWdvcnldL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3NEO0FBRVY7QUFDQTtBQUU1QyxNQUFNSSxPQUFPOztJQUNULE1BQU1DLFFBQVFKLDBEQUFTQTtJQUV2QixNQUFNLENBQUNLLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUM7SUFFN0NELGdEQUFTQSxDQUFDO1FBQ04sTUFBTU0sV0FBV0gsTUFBTUcsUUFBUTtRQUMvQkMsTUFBTSxtQkFBNEIsT0FBVEQsV0FDeEJFLElBQUksQ0FBQ0MsQ0FBQUEsVUFBV0MsU0FBU0MsSUFBSSxJQUM3QkgsSUFBSSxDQUFDSSxDQUFBQTtZQUNGUCxjQUFjTztRQUNsQixHQUNDQyxLQUFLLENBQUNDLENBQUFBO1lBQ0hDLFFBQVFDLEtBQUssQ0FBQ0Y7UUFDbEI7SUFDSixHQUFHO1FBQUNYLE1BQU1HLFFBQVE7S0FBQztJQUVuQixxQkFDSSw4REFBQ1c7UUFBSUMsV0FBVTtrQkFDZEMsTUFBTUMsT0FBTyxDQUFDaEIsZUFBZUEsV0FBV2lCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbEQsOERBQUN6QixrRUFBSUE7Z0JBRUgwQixJQUFJRixLQUFLRyxHQUFHO2dCQUNaQyxNQUFNSixLQUFLSSxJQUFJO2dCQUNmQyxPQUFPTCxLQUFLSyxLQUFLO2dCQUNqQkMsYUFBYU4sS0FBS00sV0FBVztnQkFDN0J0QixVQUFVZ0IsS0FBS2hCLFFBQVE7Z0JBQ3ZCdUIsT0FBT1AsS0FBS08sS0FBSztlQU5aTjs7Ozs7Ozs7OztBQVdqQjtHQWhDTXJCOztRQUNZSCxzREFBU0E7OztLQURyQkc7QUFpQ04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jYXRlZ29yaWVzL1tjYXRlZ29yeV0vcGFnZS50c3g/MWQ0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudC9jYXJkXCI7XG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCJAL2xpYi9tb25nb2RiXCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFNob3cgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyYW0gPSB1c2VQYXJhbXMoKTtcblxuICAgIGNvbnN0IFtjb21wb25lbnRzLCBzZXRDb21wb25lbnRzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBwYXJhbS5jYXRlZ29yeTtcbiAgICAgICAgZmV0Y2goYC9hcGkvY2F0ZWdvcmllcy8ke2NhdGVnb3J5fWApXG4gICAgICAgIC50aGVuKHJlc3Bvc2UgPT4gUmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHNldENvbXBvbmVudHMoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KVxuICAgIH0sIFtwYXJhbS5jYXRlZ29yeV0pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICB7QXJyYXkuaXNBcnJheShjb21wb25lbnRzKSAmJiBjb21wb25lbnRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGlkPXtpdGVtLl9pZH1cbiAgICAgICAgICAgIGNvZGU9e2l0ZW0uY29kZX1cbiAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICBjYXRlZ29yeT17aXRlbS5jYXRlZ29yeX1cbiAgICAgICAgICAgIHByb3BzPXtpdGVtLnByb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgU2hvdzsiXSwibmFtZXMiOlsiQ2FyZCIsInVzZVBhcmFtcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2hvdyIsInBhcmFtIiwiY29tcG9uZW50cyIsInNldENvbXBvbmVudHMiLCJjYXRlZ29yeSIsImZldGNoIiwidGhlbiIsInJlc3Bvc2UiLCJSZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsIl9pZCIsImNvZGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/categories/[category]/page.tsx\n"));

/***/ })

});