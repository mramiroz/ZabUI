/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/component/[id]/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb%2Fsrc%2Fapp%2Fcomponent%2F%5Bid%5D%2Fpage.tsx&server=false!":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb%2Fsrc%2Fapp%2Fcomponent%2F%5Bid%5D%2Fpage.tsx&server=false! ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./src/app/component/[id]/page.tsx */ \"(app-pages-browser)/./src/app/component/[id]/page.tsx\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWNsaWVudC1lbnRyeS1sb2FkZXIuanM/bW9kdWxlcz0lMkZob21lJTJGbXJhbWlyb3olMkZFc2NyaXRvcmlvJTJGQ29tcFVJJTJGd2ViJTJGc3JjJTJGYXBwJTJGY29tcG9uZW50JTJGJTVCaWQlNUQlMkZwYWdlLnRzeCZzZXJ2ZXI9ZmFsc2UhIiwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/YjE1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIi9ob21lL21yYW1pcm96L0VzY3JpdG9yaW8vQ29tcFVJL3dlYi9zcmMvYXBwL2NvbXBvbmVudC9baWRdL3BhZ2UudHN4XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb%2Fsrc%2Fapp%2Fcomponent%2F%5Bid%5D%2Fpage.tsx&server=false!\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/component/[id]/page.tsx":
/*!*****************************************!*\
  !*** ./src/app/component/[id]/page.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_component_Copy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/component/Copy */ \"(app-pages-browser)/./src/components/component/Copy.tsx\");\n/* harmony import */ var _compui_comps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @compui/comps */ \"(app-pages-browser)/./node_modules/@compui/comps/src/index.js\");\n/* harmony import */ var _actions_Comps_getComponentById__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/actions/Comps/getComponentById */ \"(app-pages-browser)/./src/actions/Comps/getComponentById.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Show = ()=>{\n    _s();\n    const param = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const [component, setComponent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const res = await (0,_actions_Comps_getComponentById__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n                id: param.id\n            });\n            setComponent(res);\n        };\n        fetchData();\n    }, [\n        param.id\n    ]);\n    const Component = component && _compui_comps__WEBPACK_IMPORTED_MODULE_4__[component.title];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center\",\n        children: component && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mb-4 text-4xl font-bold\",\n                    children: component.title\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/component/[id]/page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 component-content\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...component.props\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/component/[id]/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/component/[id]/page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mb-4 text-base text-gray-200\",\n                    children: component.description\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/component/[id]/page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                    className: \"mb-4 text-sm text-gray-200\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_component_Copy__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        code: component.import,\n                        showCode: true\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/component/[id]/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/component/[id]/page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"mb-2 text-2xl font-semibold\",\n                    children: \"Props:\"\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/component/[id]/page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"list-disc list-inside\",\n                    children: Object.entries(component.props).map((param)=>{\n                        let [prop, description] = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mb-1 text-base text-gray-200\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    prop,\n                                    \":\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/component/[id]/page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, undefined)\n                        }, prop, false, {\n                            fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/component/[id]/page.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/component/[id]/page.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/component/[id]/page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Show, \"xfyFSZPlpYc2xkRfo2dfSkXtpp0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = Show;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Show);\nvar _c;\n$RefreshReg$(_c, \"Show\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L1tpZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM0QztBQUNEO0FBQ1c7QUFDZjtBQUN5QjtBQVloRSxNQUFNTSxPQUFPOztJQUNYLE1BQU1DLFFBQVFMLDBEQUFTQTtJQUV2QixNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQXVCO0lBQ2pFRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLFlBQVk7WUFDaEIsTUFBTUMsTUFBTSxNQUFNTiwyRUFBZ0JBLENBQUM7Z0JBQUNPLElBQUlMLE1BQU1LLEVBQUU7WUFBVTtZQUMxREgsYUFBYUU7UUFDZjtRQUNBRDtJQUNGLEdBQUc7UUFBQ0gsTUFBTUssRUFBRTtLQUFDO0lBRWIsTUFBTUMsWUFBWUwsYUFBYUosMENBQUssQ0FBQ0ksVUFBVU0sS0FBSyxDQUFDO0lBRXJELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaUiwyQkFDQzs7OEJBQ0UsOERBQUNTO29CQUFHRCxXQUFVOzhCQUEyQlIsVUFBVU0sS0FBSzs7Ozs7OzhCQUN4RCw4REFBQ0M7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNIO3dCQUFXLEdBQUdMLFVBQVVVLEtBQUs7Ozs7Ozs7Ozs7OzhCQUVoQyw4REFBQ0M7b0JBQUVILFdBQVU7OEJBQWdDUixVQUFVWSxXQUFXOzs7Ozs7OEJBQ2xFLDhEQUFDQztvQkFBS0wsV0FBVTs4QkFDZCw0RUFBQ2Isa0VBQUlBO3dCQUFDa0IsTUFBTWIsVUFBVWMsTUFBTTt3QkFBRUMsVUFBVTs7Ozs7Ozs7Ozs7OEJBRTFDLDhEQUFDQztvQkFBR1IsV0FBVTs4QkFBOEI7Ozs7Ozs4QkFDNUMsOERBQUNTO29CQUFHVCxXQUFVOzhCQUNYVSxPQUFPQyxPQUFPLENBQUNuQixVQUFVVSxLQUFLLEVBQUVVLEdBQUcsQ0FBQzs0QkFBQyxDQUFDQyxNQUFNVCxZQUFZOzZDQUN2RCw4REFBQ1U7NEJBQWNkLFdBQVU7c0NBQ3ZCLDRFQUFDZTs7b0NBQVFGO29DQUFLOzs7Ozs7OzJCQURQQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXZCO0dBdkNNdkI7O1FBQ1VKLHNEQUFTQTs7O0tBRG5CSTtBQXlDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9baWRdL3BhZ2UudHN4PzNiMzMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7IFxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBDb3B5ICBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudC9Db3B5J1xuaW1wb3J0ICogYXMgQ29tcHMgZnJvbSAnQGNvbXB1aS9jb21wcyc7XG5pbXBvcnQgZ2V0Q29tcG9uZW50QnlJZCBmcm9tICdAL2FjdGlvbnMvQ29tcHMvZ2V0Q29tcG9uZW50QnlJZCc7XG5cbmludGVyZmFjZSBDb21wb25lbnREYXRhIHtcbiAgX2lkOiBzdHJpbmc7XG4gIGNvZGU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgaW1wb3J0OiBzdHJpbmc7XG4gIHByb3BzOiBhbnk7XG59XG5cbmNvbnN0IFNob3cgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmFtID0gdXNlUGFyYW1zKCk7XG5cbiAgY29uc3QgW2NvbXBvbmVudCwgc2V0Q29tcG9uZW50XSA9IHVzZVN0YXRlPENvbXBvbmVudERhdGEgfCBudWxsPihudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRDb21wb25lbnRCeUlkKHtpZDogcGFyYW0uaWQgYXMgc3RyaW5nfSk7XG4gICAgICBzZXRDb21wb25lbnQocmVzKTtcbiAgICB9XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtwYXJhbS5pZF0pO1xuXG4gIGNvbnN0IENvbXBvbmVudCA9IGNvbXBvbmVudCAmJiBDb21wc1tjb21wb25lbnQudGl0bGVdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAge2NvbXBvbmVudCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nbWItNCB0ZXh0LTR4bCBmb250LWJvbGQnPntjb21wb25lbnQudGl0bGV9PC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgY29tcG9uZW50LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLmNvbXBvbmVudC5wcm9wc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtYmFzZSB0ZXh0LWdyYXktMjAwXCI+e2NvbXBvbmVudC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXNtIHRleHQtZ3JheS0yMDBcIj5cbiAgICAgICAgICAgIDxDb3B5IGNvZGU9e2NvbXBvbmVudC5pbXBvcnR9IHNob3dDb2RlPXt0cnVlfS8+XG4gICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0yIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj5Qcm9wczo8L2gyPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbGlzdC1pbnNpZGVcIj5cbiAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhjb21wb25lbnQucHJvcHMpLm1hcCgoW3Byb3AsIGRlc2NyaXB0aW9uXSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtwcm9wfSBjbGFzc05hbWU9XCJtYi0xIHRleHQtYmFzZSB0ZXh0LWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz57cHJvcH06PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvdzsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJDb3B5IiwiQ29tcHMiLCJnZXRDb21wb25lbnRCeUlkIiwiU2hvdyIsInBhcmFtIiwiY29tcG9uZW50Iiwic2V0Q29tcG9uZW50IiwiZmV0Y2hEYXRhIiwicmVzIiwiaWQiLCJDb21wb25lbnQiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicHJvcHMiLCJwIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwiaW1wb3J0Iiwic2hvd0NvZGUiLCJoMiIsInVsIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsInByb3AiLCJsaSIsInN0cm9uZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/[id]/page.tsx\n"));

/***/ })

});