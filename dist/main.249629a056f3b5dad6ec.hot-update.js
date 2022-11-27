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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n\n/////////////////// pages\nvar Home = function Home() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Home_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Home.vue */ \"./src/javascript/pages/Home.vue\"));\n};\nvar Users = function Users() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Users_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Users.vue */ \"./src/javascript/pages/Users.vue\"));\n};\nvar Posts = function Posts() {\n  return __webpack_require__.e(/*! import() */ \"src_javascript_pages_Posts_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Posts.vue */ \"./src/javascript/pages/Posts.vue\"));\n};\n////////////////// users component\nvar FindUser = function FindUser() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_axios_lib_axios_js\"), __webpack_require__.e(\"src_javascript_components_Users_Find_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/Users/Find.vue */ \"./src/javascript/components/Users/Find.vue\"));\n};\nvar ShowUsers = function ShowUsers() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_axios_lib_axios_js\"), __webpack_require__.e(\"src_javascript_components_Users_index_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/Users/index.vue */ \"./src/javascript/components/Users/index.vue\"));\n};\n///////////////// posts component\nvar ShowPosts = function ShowPosts() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_axios_lib_axios_js\"), __webpack_require__.e(\"src_javascript_components_Posts_index_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/Posts/index.vue */ \"./src/javascript/components/Posts/index.vue\"));\n};\nvar EditPost = function EditPost() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_axios_lib_axios_js\"), __webpack_require__.e(\"src_javascript_components_Posts_Edit_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/Posts/Edit.vue */ \"./src/javascript/components/Posts/Edit.vue\"));\n};\nvar createPost = function createPost() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_axios_lib_axios_js\"), __webpack_require__.e(\"src_javascript_components_Posts_Create_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/Posts/Create.vue */ \"./src/javascript/components/Posts/Create.vue\"));\n};\nvar routes = [{\n  path: '/',\n  component: Home,\n  name: 'homePage'\n}, {\n  path: '/users',\n  component: Users,\n  name: 'usersPage',\n  redirect: {\n    name: 'showUser'\n  },\n  children: [{\n    path: '',\n    component: ShowUsers,\n    name: 'showUser'\n  }, {\n    path: ':id',\n    component: FindUser,\n    name: 'findUser'\n  }]\n}, {\n  path: '/posts',\n  component: Posts,\n  name: 'postsPage',\n  redirect: {\n    name: 'showPosts'\n  },\n  children: [{\n    path: '',\n    component: ShowPosts,\n    name: 'showPosts'\n  }, {\n    path: ':id',\n    component: EditPost,\n    name: 'editPosts'\n  }, {\n    path: 'create',\n    component: createPost,\n    name: 'createPost'\n  }]\n}];\nvar router = (0,vue_router__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_0__.createWebHashHistory)(),\n  routes: routes\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://template/./src/javascript/router.config.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + "." + {"src_javascript_pages_Home_vue":"c5c594531989a6364b7f","src_javascript_pages_Users_vue":"4d3f3721b8d5984f93fb","src_javascript_pages_Posts_vue":"ed977e692285796e6538","vendors-node_modules_axios_lib_axios_js":"bbf5bd5bf4808e78104f","src_javascript_components_Users_Find_vue":"7ff8f17182f9b127568a","src_javascript_components_Users_index_vue":"cdbc8e49f8c5482513e1","src_javascript_components_Posts_index_vue":"584a8ec4d5fec44b454d","src_javascript_components_Posts_Edit_vue":"5b9d6580b3801c571fed","src_javascript_components_Posts_Create_vue":"d3750612f567e473461f"}[chunkId] + ".js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cc19d84baf315804c27f")
/******/ })();
/******/ 
/******/ }
);