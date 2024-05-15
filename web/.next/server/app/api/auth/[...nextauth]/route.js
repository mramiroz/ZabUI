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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

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

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

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

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fmramiroz%2FEscritorio%2FZabUI%2Fweb%2Fsrc%2Fapp&pageExtensions=js&pageExtensions=jsx&pageExtensions=ts&pageExtensions=tsx&pageExtensions=md&pageExtensions=mdx&rootDir=%2Fhome%2Fmramiroz%2FEscritorio%2FZabUI%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fmramiroz%2FEscritorio%2FZabUI%2Fweb%2Fsrc%2Fapp&pageExtensions=js&pageExtensions=jsx&pageExtensions=ts&pageExtensions=tsx&pageExtensions=md&pageExtensions=mdx&rootDir=%2Fhome%2Fmramiroz%2FEscritorio%2FZabUI%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_mramiroz_Escritorio_ZabUI_web_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _home_mramiroz_Escritorio_ZabUI_web_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGbXJhbWlyb3olMkZFc2NyaXRvcmlvJTJGWmFiVUklMkZ3ZWIlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9anMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz1tZCZwYWdlRXh0ZW5zaW9ucz1tZHgmcm9vdERpcj0lMkZob21lJTJGbXJhbWlyb3olMkZFc2NyaXRvcmlvJTJGWmFiVUklMkZ3ZWImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzJCO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemFidWkvP2NmZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvbXJhbWlyb3ovRXNjcml0b3Jpby9aYWJVSS93ZWIvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL21yYW1pcm96L0VzY3JpdG9yaW8vWmFiVUkvd2ViL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fmramiroz%2FEscritorio%2FZabUI%2Fweb%2Fsrc%2Fapp&pageExtensions=js&pageExtensions=jsx&pageExtensions=ts&pageExtensions=tsx&pageExtensions=md&pageExtensions=mdx&rootDir=%2Fhome%2Fmramiroz%2FEscritorio%2FZabUI%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/options.ts":
/*!***************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/options.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   options: () => (/* binding */ options)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./src/lib/mongodb.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst options = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                name: {\n                    label: \"Name\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n                    const { name, password } = credentials;\n                    const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                        name\n                    }).select(\"+password\");\n                    if (!user) throw new Error(\"User not found\");\n                    const isValid = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().compare(password, user.password);\n                    if (!isValid) throw new Error(\"Invalid password\");\n                    return user;\n                } catch (error) {\n                    throw new Error(\"Invalid credentials\");\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async signIn (params) {\n            const { user, account } = params;\n            if (account.provider === \"google\") {\n                await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n                let existingUser = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                    email: user.email\n                });\n                if (!existingUser) {\n                    const randomPassword = crypto__WEBPACK_IMPORTED_MODULE_4___default().randomBytes(16).toString(\"hex\");\n                    const newUser = new _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n                        name: user.name,\n                        email: user.email,\n                        password: randomPassword\n                    });\n                    await newUser.save();\n                    existingUser = newUser;\n                }\n                user.id = existingUser._id;\n            }\n            return true;\n        },\n        async jwt ({ token, user, trigger, session }) {\n            if (trigger === \"update\") {\n                return {\n                    ...token,\n                    ...session\n                };\n            }\n            if (user) {\n                token.user = user;\n            }\n            return token;\n        },\n        async session ({ session, token, trigger }) {\n            if (trigger === \"update\") {\n                return {\n                    ...session,\n                    ...token\n                };\n            }\n            session.user = token.user;\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9ucy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNrRTtBQUdoQjtBQUNqQjtBQUNMO0FBQ0E7QUFFckIsTUFBTUssVUFBMkI7SUFDdENDLFdBQVc7UUFDVE4sMkVBQW1CQSxDQUFDO1lBQ2xCTyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hELE1BQU07b0JBQUNFLE9BQU87b0JBQVFDLE1BQU07Z0JBQU07Z0JBQ2xDQyxVQUFVO29CQUFDRixPQUFPO29CQUFZQyxNQUFNO2dCQUFVO1lBQ2hEO1lBQ0EsTUFBTUUsV0FBVUosV0FBbUQ7Z0JBQ2pFLElBQUk7b0JBQ0YsTUFBTVAsK0RBQWlCQTtvQkFDdkIsTUFBTSxFQUFDTSxJQUFJLEVBQUVJLFFBQVEsRUFBQyxHQUFHSDtvQkFDekIsTUFBTUssT0FBTyxNQUFNWCxvREFBSUEsQ0FBQ1ksT0FBTyxDQUFDO3dCQUFDUDtvQkFBSSxHQUFHUSxNQUFNLENBQUM7b0JBQy9DLElBQUksQ0FBQ0YsTUFBTSxNQUFNLElBQUlHLE1BQU07b0JBQzNCLE1BQU1DLFVBQVUsTUFBTWQscURBQWMsQ0FBQ1EsVUFBVUUsS0FBS0YsUUFBUTtvQkFDNUQsSUFBSSxDQUFDTSxTQUFTLE1BQU0sSUFBSUQsTUFBTTtvQkFDOUIsT0FBT0g7Z0JBQ1QsRUFBRSxPQUFPTSxPQUFZO29CQUNuQixNQUFNLElBQUlILE1BQU07Z0JBQ2xCO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RJLFdBQVc7UUFDVCxNQUFNQyxRQUFPQyxNQUFXO1lBQ3RCLE1BQU0sRUFBRVQsSUFBSSxFQUFFVSxPQUFPLEVBQUMsR0FBR0Q7WUFDekIsSUFBSUMsUUFBUUMsUUFBUSxLQUFLLFVBQVU7Z0JBQ2pDLE1BQU12QiwrREFBaUJBO2dCQUN2QixJQUFJd0IsZUFBZSxNQUFNdkIsb0RBQUlBLENBQUNZLE9BQU8sQ0FBQztvQkFBRVksT0FBT2IsS0FBS2EsS0FBSztnQkFBQztnQkFDMUQsSUFBSSxDQUFDRCxjQUFjO29CQUNqQixNQUFNRSxpQkFBaUJ2Qix5REFBa0IsQ0FBQyxJQUFJeUIsUUFBUSxDQUFDO29CQUN2RCxNQUFNQyxVQUFVLElBQUk1QixvREFBSUEsQ0FBQzt3QkFBQ0ssTUFBTU0sS0FBS04sSUFBSTt3QkFBRW1CLE9BQU9iLEtBQUthLEtBQUs7d0JBQUVmLFVBQVVnQjtvQkFBYztvQkFDdEYsTUFBTUcsUUFBUUMsSUFBSTtvQkFDbEJOLGVBQWVLO2dCQUNqQjtnQkFDQWpCLEtBQUttQixFQUFFLEdBQUdQLGFBQWFRLEdBQUc7WUFDNUI7WUFDQSxPQUFPO1FBQ1Q7UUFDQSxNQUFNQyxLQUFJLEVBQUNDLEtBQUssRUFBRXRCLElBQUksRUFBRXVCLE9BQU8sRUFBRUMsT0FBTyxFQUFDO1lBRXZDLElBQUlELFlBQVksVUFBUztnQkFDdkIsT0FBTztvQkFBRSxHQUFHRCxLQUFLO29CQUFFLEdBQUdFLE9BQU87Z0JBQUM7WUFDaEM7WUFDQSxJQUFJeEIsTUFBSztnQkFDTHNCLE1BQU10QixJQUFJLEdBQUdBO1lBQ2pCO1lBQ0EsT0FBT3NCO1FBQ1Q7UUFDQSxNQUFNRSxTQUFRLEVBQUNBLE9BQU8sRUFBRUYsS0FBSyxFQUFFQyxPQUFPLEVBQUM7WUFDckMsSUFBSUEsWUFBWSxVQUFTO2dCQUN2QixPQUFRO29CQUFDLEdBQUdDLE9BQU87b0JBQUUsR0FBR0YsS0FBSztnQkFBQTtZQUMvQjtZQUNBRSxRQUFReEIsSUFBSSxHQUFHc0IsTUFBTXRCLElBQUk7WUFDekIsT0FBT3dCO1FBQ1Q7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96YWJ1aS8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9vcHRpb25zLnRzP2EyYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IHsgR29vZ2xlUHJvZmlsZSB9IGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL1VzZXJcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0IGNyeXB0byBmcm9tIFwiY3J5cHRvXCI7XG5cbmV4cG9ydCBjb25zdCBvcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIG5hbWU6IHtsYWJlbDogXCJOYW1lXCIsIHR5cGU6IFwidGV4dFwifSxcbiAgICAgICAgcGFzc3dvcmQ6IHtsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCJ9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFsczoge25hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZ30gfCBhbnkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAgICAgICAgIGNvbnN0IHtuYW1lLCBwYXNzd29yZH0gPSBjcmVkZW50aWFscztcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtuYW1lfSkuc2VsZWN0KFwiK3Bhc3N3b3JkXCIpO1xuICAgICAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmRcIik7XG4gICAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGFzc3dvcmRcIik7XG4gICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNyZWRlbnRpYWxzXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2lnbkluKHBhcmFtczogYW55KXtcbiAgICAgIGNvbnN0IHsgdXNlciwgYWNjb3VudH0gPSBwYXJhbXM7XG4gICAgICBpZiAoYWNjb3VudC5wcm92aWRlciA9PT0gJ2dvb2dsZScpIHtcbiAgICAgICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAgICAgbGV0IGV4aXN0aW5nVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiB1c2VyLmVtYWlsIH0pO1xuICAgICAgICBpZiAoIWV4aXN0aW5nVXNlcikge1xuICAgICAgICAgIGNvbnN0IHJhbmRvbVBhc3N3b3JkID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZygnaGV4Jyk7XG4gICAgICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHtuYW1lOiB1c2VyLm5hbWUsIGVtYWlsOiB1c2VyLmVtYWlsLCBwYXNzd29yZDogcmFuZG9tUGFzc3dvcmR9KTtcbiAgICAgICAgICBhd2FpdCBuZXdVc2VyLnNhdmUoKTtcbiAgICAgICAgICBleGlzdGluZ1VzZXIgPSBuZXdVc2VyO1xuICAgICAgICB9XG4gICAgICAgIHVzZXIuaWQgPSBleGlzdGluZ1VzZXIuX2lkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBhc3luYyBqd3Qoe3Rva2VuLCB1c2VyLCB0cmlnZ2VyLCBzZXNzaW9ufSl7XG5cbiAgICAgIGlmICh0cmlnZ2VyID09PSAndXBkYXRlJyl7XG4gICAgICAgIHJldHVybiB7IC4uLnRva2VuLCAuLi5zZXNzaW9uIH07XG4gICAgICB9XG4gICAgICBpZiAodXNlcil7XG4gICAgICAgICAgdG9rZW4udXNlciA9IHVzZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHtzZXNzaW9uLCB0b2tlbiwgdHJpZ2dlcn0pe1xuICAgICAgaWYgKHRyaWdnZXIgPT09ICd1cGRhdGUnKXtcbiAgICAgICAgcmV0dXJuICh7Li4uc2Vzc2lvbiwgLi4udG9rZW59KVxuICAgICAgfVxuICAgICAgc2Vzc2lvbi51c2VyID0gdG9rZW4udXNlciBhcyBhbnk7XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9XG4gIH0sXG59OyJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJVc2VyIiwiYmNyeXB0IiwiY3J5cHRvIiwib3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRPbmUiLCJzZWxlY3QiLCJFcnJvciIsImlzVmFsaWQiLCJjb21wYXJlIiwiZXJyb3IiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJwYXJhbXMiLCJhY2NvdW50IiwicHJvdmlkZXIiLCJleGlzdGluZ1VzZXIiLCJlbWFpbCIsInJhbmRvbVBhc3N3b3JkIiwicmFuZG9tQnl0ZXMiLCJ0b1N0cmluZyIsIm5ld1VzZXIiLCJzYXZlIiwiaWQiLCJfaWQiLCJqd3QiLCJ0b2tlbiIsInRyaWdnZXIiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/options.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ \"(rsc)/./src/app/api/auth/[...nextauth]/options.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_options__WEBPACK_IMPORTED_MODULE_1__.options);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFDRztBQUVwQyxNQUFNRSxVQUFVRixnREFBUUEsQ0FBQ0MsNkNBQU9BO0FBQ1EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96YWJ1aS8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz8wMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChvcHRpb25zKTtcbmV4cG9ydCB7aGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVH0iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJvcHRpb25zIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb.js":
/*!****************************!*\
  !*** ./src/lib/mongodb.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nconst uri = process.env.MONGODB_URI;\nif (!uri) {\n    throw new Error(\"MONGODB_URI is not defined. Please check your environment variables.\");\n}\nlet db;\nasync function connectToDatabase() {\n    if (!db) {\n        const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\n        await client.connect();\n        db = client.db(\"CompUI\");\n        await mongoose.connect(uri, {\n            dbName: \"CompUI\"\n        });\n    }\n    return db;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0M7QUFDVjtBQUM1QixNQUFNRSxXQUFXQyxtQkFBT0EsQ0FBQztBQUV6QkYsb0RBQWE7QUFFYixNQUFNSSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFFbkMsSUFBSSxDQUFDSCxLQUFLO0lBQ1IsTUFBTSxJQUFJSSxNQUFNO0FBQ2xCO0FBRUEsSUFBSUM7QUFFRyxlQUFlQztJQUNwQixJQUFJLENBQUNELElBQUk7UUFDUCxNQUFNRSxTQUFTLElBQUlaLGdEQUFXQSxDQUFDSztRQUMvQixNQUFNTyxPQUFPQyxPQUFPO1FBQ3BCSCxLQUFLRSxPQUFPRixFQUFFLENBQUM7UUFDZixNQUFNUixTQUFTVyxPQUFPLENBQUNSLEtBQUs7WUFBRVMsUUFBUTtRQUFRO0lBQ2hEO0lBQ0EsT0FBT0o7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL3phYnVpLy4vc3JjL2xpYi9tb25nb2RiLmpzPzhiMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuXG5pZiAoIXVyaSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJNT05HT0RCX1VSSSBpcyBub3QgZGVmaW5lZC4gUGxlYXNlIGNoZWNrIHlvdXIgZW52aXJvbm1lbnQgdmFyaWFibGVzLlwiKTtcbn1cblxubGV0IGRiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmICghZGIpIHtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpKTtcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuICAgIGRiID0gY2xpZW50LmRiKFwiQ29tcFVJXCIpO1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QodXJpLCB7IGRiTmFtZTogJ0NvbXBVSSd9KTtcbiAgfVxuICByZXR1cm4gZGI7XG59Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiZG90ZW52IiwibW9uZ29vc2UiLCJyZXF1aXJlIiwiY29uZmlnIiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJkYiIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY2xpZW50IiwiY29ubmVjdCIsImRiTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst UserSchema = new Schema({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Username is required\"\n        ],\n        unique: true,\n        minlength: [\n            5,\n            \"Username must be at least 5 characters long\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ],\n        select: false,\n        minlength: [\n            8,\n            \"Password must be at least 8 characters long\"\n        ]\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Email is required\"\n        ],\n        unique: true,\n        match: [\n            /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/,\n            \"Email is invalid\"\n        ]\n    },\n    role: {\n        type: String,\n        enum: [\n            \"admin\",\n            \"user\"\n        ],\n        default: \"user\"\n    },\n    favComps: {\n        type: Array,\n        default: []\n    }\n}, {\n    timestamps: true\n});\nUserSchema.pre(\"save\", async function(next) {\n    if (this.isModified(\"password\")) {\n        this.password = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(this.password, 10);\n    }\n    next();\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema, \"Users\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDSjtBQUU1QixNQUFNLEVBQUNFLE1BQU0sRUFBQyxHQUFHRixpREFBUUE7QUFFekIsTUFBTUcsYUFBYSxJQUFJRCxPQUFPO0lBQzFCRSxNQUFLO1FBQ0RDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXVCO1FBQ3hDQyxRQUFRO1FBQ1JDLFdBQVc7WUFBQztZQUFHO1NBQThDO0lBQ2pFO0lBQ0FDLFVBQVM7UUFDTEwsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBdUI7UUFDeENJLFFBQVE7UUFDUkYsV0FBVztZQUFDO1lBQUc7U0FBOEM7SUFDakU7SUFDQUcsT0FBTTtRQUNGUCxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUFvQjtRQUNyQ0MsUUFBUTtRQUNSSyxPQUFPO1lBQ0g7WUFDQTtTQUNIO0lBQ0w7SUFDQUMsTUFBSztRQUNEVCxNQUFNQztRQUNOUyxNQUFNO1lBQUM7WUFBUztTQUFPO1FBQ3ZCQyxTQUFTO0lBQ2I7SUFDQUMsVUFBVTtRQUNOWixNQUFNYTtRQUNORixTQUFTLEVBQUU7SUFDZjtBQUNKLEdBQUc7SUFBQ0csWUFBWTtBQUFJO0FBRXBCaEIsV0FBV2lCLEdBQUcsQ0FBQyxRQUFRLGVBQWVDLElBQUk7SUFDdEMsSUFBRyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxhQUFZO1FBQzNCLElBQUksQ0FBQ1osUUFBUSxHQUFHLE1BQU1ULGtEQUFXLENBQUMsSUFBSSxDQUFDUyxRQUFRLEVBQUU7SUFDckQ7SUFDQVc7QUFDSjtBQUVBLE1BQU1HLE9BQU94Qix3REFBZSxDQUFDd0IsSUFBSSxJQUFJeEIscURBQWMsQ0FBQyxRQUFRRyxZQUFZO0FBRXhFLGlFQUFlcUIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3phYnVpLy4vc3JjL21vZGVscy9Vc2VyLnRzPzA5NmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5cbmNvbnN0IHtTY2hlbWF9ID0gbW9uZ29vc2U7XG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBuYW1lOntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiVXNlcm5hbWUgaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgbWlubGVuZ3RoOiBbNSwgXCJVc2VybmFtZSBtdXN0IGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycyBsb25nXCJdXG4gICAgfSxcbiAgICBwYXNzd29yZDp7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBhc3N3b3JkIGlzIHJlcXVpcmVkXCJdLFxuICAgICAgICBzZWxlY3Q6IGZhbHNlLFxuICAgICAgICBtaW5sZW5ndGg6IFs4LCBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmdcIl1cbiAgICB9LFxuICAgIGVtYWlsOntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiRW1haWwgaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgbWF0Y2g6IFtcbiAgICAgICAgICAgIC9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8sXG4gICAgICAgICAgICBcIkVtYWlsIGlzIGludmFsaWRcIlxuICAgICAgICBdXG4gICAgfSxcbiAgICByb2xlOntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBlbnVtOiBbXCJhZG1pblwiLCBcInVzZXJcIl0sXG4gICAgICAgIGRlZmF1bHQ6IFwidXNlclwiXG4gICAgfSxcbiAgICBmYXZDb21wczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgZGVmYXVsdDogW11cbiAgICB9XG59LCB7dGltZXN0YW1wczogdHJ1ZX0pO1xuXG5Vc2VyU2NoZW1hLnByZShcInNhdmVcIiwgYXN5bmMgZnVuY3Rpb24obmV4dCl7XG4gICAgaWYodGhpcy5pc01vZGlmaWVkKFwicGFzc3dvcmRcIikpe1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2godGhpcy5wYXNzd29yZCwgMTApO1xuICAgIH1cbiAgICBuZXh0KCk7XG59KTtcblxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hLCBcIlVzZXJzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImJjcnlwdCIsIlNjaGVtYSIsIlVzZXJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwibWlubGVuZ3RoIiwicGFzc3dvcmQiLCJzZWxlY3QiLCJlbWFpbCIsIm1hdGNoIiwicm9sZSIsImVudW0iLCJkZWZhdWx0IiwiZmF2Q29tcHMiLCJBcnJheSIsInRpbWVzdGFtcHMiLCJwcmUiLCJuZXh0IiwiaXNNb2RpZmllZCIsImhhc2giLCJVc2VyIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/dotenv","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fmramiroz%2FEscritorio%2FZabUI%2Fweb%2Fsrc%2Fapp&pageExtensions=js&pageExtensions=jsx&pageExtensions=ts&pageExtensions=tsx&pageExtensions=md&pageExtensions=mdx&rootDir=%2Fhome%2Fmramiroz%2FEscritorio%2FZabUI%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();