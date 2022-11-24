"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetemplate"]("main",{

/***/ "./src/javascript/router.config.js":
/*!*****************************************!*\
  !*** ./src/javascript/router.config.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _pages_Home_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Home.vue */ \"./src/javascript/pages/Home.vue\");\n/* harmony import */ var _pages_Users_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Users.vue */ \"./src/javascript/pages/Users.vue\");\n/* harmony import */ var _pages_Posts_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Posts.vue */ \"./src/javascript/pages/Posts.vue\");\n/* harmony import */ var _components_FindUser_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FindUser.vue */ \"./src/javascript/components/FindUser.vue\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/showUser.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n\nvar routes = [{\n  path: '/',\n  component: _pages_Home_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  name: 'homePage'\n}, {\n  path: '/users',\n  component: _pages_Users_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: 'usersPage',\n  children: [{\n    path: ':id',\n    component: _components_FindUser_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    name: 'findUser'\n  }]\n}, {\n  path: '/posts',\n  component: _pages_Posts_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  name: 'postsPage'\n}];\nvar router = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.createWebHistory)(),\n  routes: routes\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://template/./src/javascript/router.config.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b01eee534bc4eb1eadb7")
/******/ })();
/******/ 
/******/ }
);