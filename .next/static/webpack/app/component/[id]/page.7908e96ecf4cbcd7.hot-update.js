"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/component/[id]/page",{

/***/ "(app-pages-browser)/./src/app/component/[id]/page.tsx":
/*!*****************************************!*\
  !*** ./src/app/component/[id]/page.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Show = ()=>{\n    _s();\n    const param = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const [component, setComponent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const id = param.id;\n        if (id) {\n            fetch(\"/api/components/\".concat(id)).then((res)=>res.json()).then((data)=>{\n                setComponent(data);\n                setLoading(false);\n            }).catch((err)=>{\n                console.error(err);\n                setLoading(false);\n            });\n        }\n    }, [\n        param.id\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/mramiro/CompUI/src/app/component/[id]/page.tsx\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: component.title\n            }, void 0, false, {\n                fileName: \"/home/mramiro/CompUI/src/app/component/[id]/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: component.description\n            }, void 0, false, {\n                fileName: \"/home/mramiro/CompUI/src/app/component/[id]/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Copy, {}, void 0, false, {\n                    fileName: \"/home/mramiro/CompUI/src/app/component/[id]/page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/mramiro/CompUI/src/app/component/[id]/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mramiro/CompUI/src/app/component/[id]/page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Show, \"e9Jq8gSPn72oxx5fjk+n8YYw4dg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = Show;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Show);\nvar _c;\n$RefreshReg$(_c, \"Show\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L1tpZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM0QztBQUNEO0FBRTNDLE1BQU1HLE9BQU87O0lBQ1gsTUFBTUMsUUFBUUYsMERBQVNBO0lBRXZCLE1BQU0sQ0FBQ0csV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsS0FBS0wsTUFBTUssRUFBRTtRQUVuQixJQUFJQSxJQUFJO1lBQ05DLE1BQU0sbUJBQXNCLE9BQUhELEtBQ3RCRSxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksSUFDcEJGLElBQUksQ0FBQ0csQ0FBQUE7Z0JBQ0pSLGFBQWFRO2dCQUNiTixXQUFXO1lBQ2IsR0FDQ08sS0FBSyxDQUFDQyxDQUFBQTtnQkFDTEMsUUFBUUMsS0FBSyxDQUFDRjtnQkFDZFIsV0FBVztZQUNiO1FBQ0o7SUFDRixHQUFHO1FBQUNKLE1BQU1LLEVBQUU7S0FBQztJQUViLElBQUlGLFNBQVM7UUFDWCxxQkFBTyw4REFBQ1k7c0JBQUk7Ozs7OztJQUNkO0lBRUEscUJBQ0UsOERBQUNBOzswQkFDQyw4REFBQ0M7MEJBQUlmLFVBQVVnQixLQUFLOzs7Ozs7MEJBQ3BCLDhEQUFDQzswQkFBR2pCLFVBQVVrQixXQUFXOzs7Ozs7MEJBQ3pCLDhEQUFDQzswQkFDQyw0RUFBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJVDtHQXBDTXRCOztRQUNVRCxzREFBU0E7OztLQURuQkM7QUFzQ04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnQvW2lkXS9wYWdlLnRzeD8zYjMzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiOyBcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cbmNvbnN0IFNob3cgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmFtID0gdXNlUGFyYW1zKCk7XG5cbiAgY29uc3QgW2NvbXBvbmVudCwgc2V0Q29tcG9uZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkID0gcGFyYW0uaWQ7XG5cbiAgICBpZiAoaWQpIHtcbiAgICAgIGZldGNoKGAvYXBpL2NvbXBvbmVudHMvJHtpZH1gKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgc2V0Q29tcG9uZW50KGRhdGEpO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3BhcmFtLmlkXSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPntjb21wb25lbnQudGl0bGV9PC9oMT5cbiAgICAgIDxwPntjb21wb25lbnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPGNvZGU+XG4gICAgICAgIDxDb3B5PjwvQ29weT5cbiAgICAgIDwvY29kZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvdzsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJTaG93IiwicGFyYW0iLCJjb21wb25lbnQiLCJzZXRDb21wb25lbnQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlkIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImRpdiIsImgxIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwiQ29weSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/[id]/page.tsx\n"));

/***/ })

});