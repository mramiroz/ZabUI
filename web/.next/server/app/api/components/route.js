"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/components/route";
exports.ids = ["app/api/components/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcomponents%2Froute&page=%2Fapi%2Fcomponents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcomponents%2Froute.ts&appDir=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcomponents%2Froute&page=%2Fapi%2Fcomponents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcomponents%2Froute.ts&appDir=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_mramiroz_Escritorio_CompUI_web_src_app_api_components_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/components/route.ts */ \"(rsc)/./src/app/api/components/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/components/route\",\n        pathname: \"/api/components\",\n        filename: \"route\",\n        bundlePath: \"app/api/components/route\"\n    },\n    resolvedPagePath: \"/home/mramiroz/Escritorio/CompUI/web/src/app/api/components/route.ts\",\n    nextConfigOutput,\n    userland: _home_mramiroz_Escritorio_CompUI_web_src_app_api_components_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/components/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb21wb25lbnRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb21wb25lbnRzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29tcG9uZW50cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGbXJhbWlyb3olMkZFc2NyaXRvcmlvJTJGQ29tcFVJJTJGd2ViJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGbXJhbWlyb3olMkZFc2NyaXRvcmlvJTJGQ29tcFVJJTJGd2ViJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ29CO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tcHN1aS8/ODkzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9tcmFtaXJvei9Fc2NyaXRvcmlvL0NvbXBVSS93ZWIvc3JjL2FwcC9hcGkvY29tcG9uZW50cy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY29tcG9uZW50cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NvbXBvbmVudHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NvbXBvbmVudHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9tcmFtaXJvei9Fc2NyaXRvcmlvL0NvbXBVSS93ZWIvc3JjL2FwcC9hcGkvY29tcG9uZW50cy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jb21wb25lbnRzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcomponents%2Froute&page=%2Fapi%2Fcomponents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcomponents%2Froute.ts&appDir=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/components/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/components/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./src/lib/mongodb.js\");\n\n\nasync function POST(request) {\n    try {\n        const db = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n        const body = await request.json();\n        const resultl = await db.collection(\"Components\").insertOne(body);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"Component created\"\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"Error creating component\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function GET() {\n    try {\n        const db = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n        const components = await db.collection(\"Components\").find().toArray();\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(components, {\n            status: 200\n        });\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"Error fetching components\",\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(request) {\n    try {\n        const db = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n        const result = await db.collection(\"Components\").deleteMany({});\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"Component deleted\"\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"Error deleting component\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb21wb25lbnRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzJDO0FBQ007QUFHMUMsZUFBZUUsS0FBS0MsT0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU1DLEtBQUssTUFBTUgsK0RBQWlCQTtRQUNsQyxNQUFNSSxPQUFPLE1BQU1GLFFBQVFHLElBQUk7UUFDL0IsTUFBTUMsVUFBVSxNQUFNSCxHQUFHSSxVQUFVLENBQUMsY0FBY0MsU0FBUyxDQUFDSjtRQUM1RCxPQUFPTCxrRkFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQUVJLFNBQVM7UUFBb0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDM0UsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBT1osa0ZBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFSSxTQUFTO1FBQTJCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ2xGO0FBQ0Y7QUFFTyxlQUFlRTtJQUNwQixJQUFJO1FBQ0YsTUFBTVQsS0FBSyxNQUFNSCwrREFBaUJBO1FBQ2xDLE1BQU1hLGFBQWEsTUFBTVYsR0FBR0ksVUFBVSxDQUFDLGNBQWNPLElBQUksR0FBR0MsT0FBTztRQUNuRSxPQUFPaEIsa0ZBQVlBLENBQUNNLElBQUksQ0FBQ1EsWUFBWTtZQUFFSCxRQUFRO1FBQUk7SUFDckQsRUFBRSxPQUFPQyxPQUFZO1FBQ25CLE9BQU9aLGtGQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRUksU0FBUztZQUE2QkUsT0FBT0EsTUFBTUYsT0FBTztRQUFDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3pHO0FBQ0Y7QUFFTyxlQUFlTSxPQUFPZCxPQUFnQjtJQUMzQyxJQUFJO1FBQ0YsTUFBTUMsS0FBSyxNQUFNSCwrREFBaUJBO1FBQ2xDLE1BQU1pQixTQUFTLE1BQU1kLEdBQUdJLFVBQVUsQ0FBQyxjQUFjVyxVQUFVLENBQUMsQ0FBQztRQUM3RCxPQUFPbkIsa0ZBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFSSxTQUFTO1FBQW9CLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzNFLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU9aLGtGQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRUksU0FBUztRQUEyQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNsRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tcHN1aS8uL3NyYy9hcHAvYXBpL2NvbXBvbmVudHMvcm91dGUudHM/NDYzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7Y29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tICdAL2xpYi9tb25nb2RiJztcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGIgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCByZXN1bHRsID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIkNvbXBvbmVudHNcIikuaW5zZXJ0T25lKGJvZHkpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiQ29tcG9uZW50IGNyZWF0ZWRcIiB9LCB7IHN0YXR1czogMjAxIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiRXJyb3IgY3JlYXRpbmcgY29tcG9uZW50XCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICBjb25zdCBjb21wb25lbnRzID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIkNvbXBvbmVudHNcIikuZmluZCgpLnRvQXJyYXkoKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oY29tcG9uZW50cywgeyBzdGF0dXM6IDIwMCB9KTtcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiRXJyb3IgZmV0Y2hpbmcgY29tcG9uZW50c1wiLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxdWVzdDogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiQ29tcG9uZW50c1wiKS5kZWxldGVNYW55KHt9KTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkNvbXBvbmVudCBkZWxldGVkXCIgfSwgeyBzdGF0dXM6IDIwMCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkVycm9yIGRlbGV0aW5nIGNvbXBvbmVudFwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJQT1NUIiwicmVxdWVzdCIsImRiIiwiYm9keSIsImpzb24iLCJyZXN1bHRsIiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJlcnJvciIsIkdFVCIsImNvbXBvbmVudHMiLCJmaW5kIiwidG9BcnJheSIsIkRFTEVURSIsInJlc3VsdCIsImRlbGV0ZU1hbnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/components/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb.js":
/*!****************************!*\
  !*** ./src/lib/mongodb.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nconst uri = process.env.MONGODB_URI;\nif (!uri) {\n    throw new Error(\"MONGODB_URI is not defined. Please check your environment variables.\");\n}\nlet db;\nasync function connectToDatabase() {\n    if (!db) {\n        const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\n        await client.connect();\n        db = client.db(\"CompUI\");\n        await mongoose.connect(uri, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            dbName: \"CompUI\"\n        });\n    }\n    return db;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0M7QUFDVjtBQUM1QixNQUFNRSxXQUFXQyxtQkFBT0EsQ0FBQztBQUV6QkYsb0RBQWE7QUFFYixNQUFNSSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFFbkMsSUFBSSxDQUFDSCxLQUFLO0lBQ1IsTUFBTSxJQUFJSSxNQUFNO0FBQ2xCO0FBRUEsSUFBSUM7QUFFRyxlQUFlQztJQUNwQixJQUFJLENBQUNELElBQUk7UUFDUCxNQUFNRSxTQUFTLElBQUlaLGdEQUFXQSxDQUFDSztRQUMvQixNQUFNTyxPQUFPQyxPQUFPO1FBQ3BCSCxLQUFLRSxPQUFPRixFQUFFLENBQUM7UUFDZixNQUFNUixTQUFTVyxPQUFPLENBQUNSLEtBQUs7WUFBRVMsaUJBQWlCO1lBQU1DLG9CQUFvQjtZQUFNQyxRQUFRO1FBQVE7SUFDakc7SUFDQSxPQUFPTjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tcHN1aS8uL3NyYy9saWIvbW9uZ29kYi5qcz84YjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcblxuZG90ZW52LmNvbmZpZygpO1xuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcblxuaWYgKCF1cmkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiTU9OR09EQl9VUkkgaXMgbm90IGRlZmluZWQuIFBsZWFzZSBjaGVjayB5b3VyIGVudmlyb25tZW50IHZhcmlhYmxlcy5cIik7XG59XG5cbmxldCBkYjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuICBpZiAoIWRiKSB7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSk7XG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgICBkYiA9IGNsaWVudC5kYihcIkNvbXBVSVwiKTtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHVyaSwgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSwgZGJOYW1lOiAnQ29tcFVJJ30pO1xuICB9XG4gIHJldHVybiBkYjtcbn0iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJkb3RlbnYiLCJtb25nb29zZSIsInJlcXVpcmUiLCJjb25maWciLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsImRiIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjbGllbnQiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZGJOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcomponents%2Froute&page=%2Fapi%2Fcomponents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcomponents%2Froute.ts&appDir=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();