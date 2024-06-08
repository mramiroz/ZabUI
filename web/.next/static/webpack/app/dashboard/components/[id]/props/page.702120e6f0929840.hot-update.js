"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/components/[id]/props/page",{

/***/ "(app-pages-browser)/./node_modules/@zabui/comps/dist/styles.css":
/*!***************************************************!*\
  !*** ./node_modules/@zabui/comps/dist/styles.css ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b2a1e1bfc02d\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AemFidWkvY29tcHMvZGlzdC9zdHlsZXMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHphYnVpL2NvbXBzL2Rpc3Qvc3R5bGVzLmNzcz84OWM5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiYjJhMWUxYmZjMDJkXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@zabui/comps/dist/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/actions/Props/updateCompProp.tsx":
/*!**********************************************!*\
  !*** ./src/actions/Props/updateCompProp.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"276e9f4e1abb24ac0bf3570eb2171fca75db482d":"default"} */ /* harmony default export */ __webpack_exports__["default"] = ((0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("276e9f4e1abb24ac0bf3570eb2171fca75db482d"));




;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/components/dashboard/LabelComponentsProps.tsx":
/*!***********************************************************!*\
  !*** ./src/components/dashboard/LabelComponentsProps.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Label; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _zabui_comps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zabui/comps */ \"(app-pages-browser)/./node_modules/@zabui/comps/dist/index.js\");\n/* harmony import */ var _actions_Props_updateCompProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/actions/Props/updateCompProp */ \"(app-pages-browser)/./src/actions/Props/updateCompProp.tsx\");\n\n\n\nfunction Label(param) {\n    let { prop, onDelete } = param;\n    const update = async ()=>{\n        await (0,_actions_Props_updateCompProp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            id: prop._id,\n            value: prop.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col mb-4 border rounded-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between p-2 flex-col md:flex-row\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 md:mb-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-xl font-bold\",\n                            children: prop.name\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-base text-gray-700\",\n                            children: prop.description\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-2 flex-wrap\",\n                    children: [\n                        prop.type === \"string\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"p-2 text-black border rounded-md mb-4 md:mb-0\",\n                            value: prop.value\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 39\n                        }, this),\n                        prop.type === \"number\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            className: \"p-2 text-black border rounded-md mb-4 md:mb-0\",\n                            value: prop.value\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 39\n                        }, this),\n                        prop.type === \"boolean\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\",\n                            className: \"p-2 text-black border rounded-md mb-4 md:mb-0\",\n                            value: prop.value\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 40\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_zabui_comps__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            onClick: update,\n                            backColor: \"darkblue\",\n                            children: \"Update\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_zabui_comps__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            onClick: onDelete,\n                            backColor: \"red\",\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, prop._id, false, {\n        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = Label;\nvar _c;\n$RefreshReg$(_c, \"Label\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9MYWJlbENvbXBvbmVudHNQcm9wcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0M7QUFDeUI7QUFFOUMsU0FBU0UsTUFBTSxLQUE0QztRQUE1QyxFQUFDQyxJQUFJLEVBQUVDLFFBQVEsRUFBNkIsR0FBNUM7SUFDNUIsTUFBTUMsU0FBUztRQUNiLE1BQU1KLHlFQUFlQSxDQUFDO1lBQUNLLElBQUlILEtBQUtJLEdBQUc7WUFBRUMsT0FBT0wsS0FBS0ssS0FBSztRQUFBO0lBQ3hEO0lBQ0EscUJBQ0UsOERBQUNDO1FBQW1CQyxXQUFVO2tCQUM1Qiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQXFCUCxLQUFLUyxJQUFJOzs7Ozs7c0NBQzVDLDhEQUFDQzs0QkFBRUgsV0FBVTtzQ0FBMkJQLEtBQUtXLFdBQVc7Ozs7Ozs7Ozs7Ozs4QkFFMUQsOERBQUNMO29CQUFJQyxXQUFVOzt3QkFDWlAsS0FBS1ksSUFBSSxLQUFLLDBCQUFhLDhEQUFDQzs0QkFBTUQsTUFBSzs0QkFBT0wsV0FBVTs0QkFBZ0RGLE9BQU9MLEtBQUtLLEtBQUs7Ozs7Ozt3QkFDekhMLEtBQUtZLElBQUksS0FBSywwQkFBYSw4REFBQ0M7NEJBQU1ELE1BQUs7NEJBQVNMLFdBQVU7NEJBQWdERixPQUFPTCxLQUFLSyxLQUFLOzs7Ozs7d0JBQzNITCxLQUFLWSxJQUFJLEtBQUssMkJBQWMsOERBQUNDOzRCQUFNRCxNQUFLOzRCQUFXTCxXQUFVOzRCQUFnREYsT0FBT0wsS0FBS0ssS0FBSzs7Ozs7O3NDQUMvSCw4REFBQ1IsZ0RBQU1BOzRCQUFDaUIsU0FBU1o7NEJBQVFhLFdBQVU7c0NBQVc7Ozs7OztzQ0FHOUMsOERBQUNsQixnREFBTUE7NEJBQUNpQixTQUFTYjs0QkFBVWMsV0FBVTtzQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BYnZDZixLQUFLSSxHQUFHOzs7OztBQW9CdEI7S0F6QndCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvTGFiZWxDb21wb25lbnRzUHJvcHMudHN4P2ZjOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCdXR0b259IGZyb20gXCJAemFidWkvY29tcHNcIjtcbmltcG9ydCB1cGRhdGVDb21wUHJvcHMgZnJvbSBcIkAvYWN0aW9ucy9Qcm9wcy91cGRhdGVDb21wUHJvcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYWJlbCh7cHJvcCwgb25EZWxldGV9OiB7cHJvcDogYW55LCBvbkRlbGV0ZTogYW55fSl7XG4gIGNvbnN0IHVwZGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB1cGRhdGVDb21wUHJvcHMoe2lkOiBwcm9wLl9pZCwgdmFsdWU6IHByb3AudmFsdWV9KTtcbiAgfVxuICByZXR1cm4oXG4gICAgPGRpdiBrZXk9e3Byb3AuX2lkfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1iLTQgYm9yZGVyIHJvdW5kZWQtbGdcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcC0yIGZsZXgtY29sIG1kOmZsZXgtcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBtZDptYi0wXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+e3Byb3AubmFtZX08L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXktNzAwXCI+e3Byb3AuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiBmbGV4LXdyYXBcIj5cbiAgICAgICAgICB7cHJvcC50eXBlID09PSAnc3RyaW5nJyAmJiAoPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwicC0yIHRleHQtYmxhY2sgYm9yZGVyIHJvdW5kZWQtbWQgbWItNCBtZDptYi0wXCIgdmFsdWU9e3Byb3AudmFsdWV9Lz4pfVxuICAgICAgICAgIHtwcm9wLnR5cGUgPT09ICdudW1iZXInICYmICg8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWJsYWNrIGJvcmRlciByb3VuZGVkLW1kIG1iLTQgbWQ6bWItMFwiIHZhbHVlPXtwcm9wLnZhbHVlfSAvPil9XG4gICAgICAgICAge3Byb3AudHlwZSA9PT0gJ2Jvb2xlYW4nICYmICg8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwicC0yIHRleHQtYmxhY2sgYm9yZGVyIHJvdW5kZWQtbWQgbWItNCBtZDptYi0wXCIgdmFsdWU9e3Byb3AudmFsdWV9IC8+KX1cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3VwZGF0ZX0gYmFja0NvbG9yPVwiZGFya2JsdWVcIj5cbiAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25EZWxldGV9IGJhY2tDb2xvcj1cInJlZFwiPlxuICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiQnV0dG9uIiwidXBkYXRlQ29tcFByb3BzIiwiTGFiZWwiLCJwcm9wIiwib25EZWxldGUiLCJ1cGRhdGUiLCJpZCIsIl9pZCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwidHlwZSIsImlucHV0Iiwib25DbGljayIsImJhY2tDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dashboard/LabelComponentsProps.tsx\n"));

/***/ })

});