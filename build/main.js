/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"TestPage":"TestPage"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/react-loadable.json":
/*!***********************************!*\
  !*** ./build/react-loadable.json ***!
  \***********************************/
/*! exports provided: ./pages/TestPage, ../../../build/react-loadable.json, ../../client/App, ./pages/HomePage, ./NotFoundPage, ../../client/reducers, ../client/routes, ./helpers/createStore, ./helpers/renderer.js, ./src/server/server.js, undefined, default */
/***/ (function(module) {

eval("module.exports = {\"./pages/TestPage\":[{\"id\":\"./src/client/pages/TestPage.js\",\"name\":\"./src/client/pages/TestPage.js\",\"file\":\"TestPage.js\",\"publicPath\":\"/TestPage.js\"}],\"../../../build/react-loadable.json\":[{\"id\":\"./build/react-loadable.json\",\"name\":\"./build/react-loadable.json\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"}],\"../../client/App\":[{\"id\":\"./src/client/App.js\",\"name\":\"./src/client/App.js\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"}],\"./pages/HomePage\":[{\"id\":\"./src/client/pages/HomePage.js\",\"name\":\"./src/client/pages/HomePage.js\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"}],\"./NotFoundPage\":[{\"id\":\"./src/client/pages/NotFoundPage.js\",\"name\":\"./src/client/pages/NotFoundPage.js\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"}],\"../../client/reducers\":[{\"id\":\"./src/client/reducers/index.js\",\"name\":\"./src/client/reducers/index.js\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"}],\"../client/routes\":[{\"id\":\"./src/client/routes.js\",\"name\":\"./src/client/routes.js\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"}],\"./helpers/createStore\":[{\"id\":\"./src/server/helpers/createStore.js\",\"name\":\"./src/server/helpers/createStore.js\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"}],\"./helpers/renderer.js\":[{\"id\":\"./src/server/helpers/renderer.js\",\"name\":\"./src/server/helpers/renderer.js\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"}],\"./src/server/server.js\":[{\"id\":\"./src/server/server.js\",\"name\":\"./src/server/server.js\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"}],\"undefined\":[{\"id\":\"axios\",\"name\":\"axios\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"},{\"id\":\"babel-polyfill\",\"name\":\"babel-polyfill\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"},{\"id\":\"express\",\"name\":\"express\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"},{\"id\":\"path\",\"name\":\"path\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"},{\"id\":\"react\",\"name\":\"react\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"},{\"id\":\"react-dom/server\",\"name\":\"react-dom/server\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"},{\"id\":\"react-loadable\",\"name\":\"react-loadable\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"},{\"id\":\"react-loadable/webpack\",\"name\":\"react-loadable/webpack\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"},{\"id\":\"react-redux\",\"name\":\"react-redux\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"},{\"id\":\"react-router\",\"name\":\"react-router\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"},{\"id\":\"react-router-dom\",\"name\":\"react-router-dom\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"},{\"id\":\"redux\",\"name\":\"redux\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"},{\"id\":\"redux-thunk\",\"name\":\"redux-thunk\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"},{\"id\":\"serialize-javascript\",\"name\":\"serialize-javascript\",\"file\":\"main.js\",\"publicPath\":\"/main.js\"}]};\n\n//# sourceURL=webpack:///./build/react-loadable.json?");

/***/ }),

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./src/client/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _NotFoundPage = __webpack_require__(/*! ./pages/NotFoundPage */ \"./src/client/pages/NotFoundPage.js\");\n\nvar _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar App = function App(props) {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      _reactRouter.Switch,\n      null,\n      _routes2.default.map(function (_ref) {\n        var path = _ref.path,\n            exact = _ref.exact,\n            C = _ref.component,\n            rest = _objectWithoutProperties(_ref, [\"path\", \"exact\", \"component\"]);\n\n        return _react2.default.createElement(_reactRouter.Route, {\n          key: path,\n          path: path,\n          exact: exact,\n          render: function render(props) {\n            return _react2.default.createElement(C, _extends({}, props, rest));\n          }\n        });\n      }),\n      _react2.default.createElement(_reactRouter.Route, { render: function render(props) {\n          return _react2.default.createElement(_NotFoundPage2.default, props);\n        } })\n    )\n  );\n};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/pages/HomePage.js":
/*!**************************************!*\
  !*** ./src/client/pages/HomePage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactLoadable = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import asyncComponent from \"../hoc/asyncComponent\";\n\n// const AsyncNotFoundPage = asyncComponent(() => {\n//   return import(\"./NotFoundPage\");\n// });\n\nvar LoadableNotFoundPage = (0, _reactLoadable2.default)({\n  loader: function loader() {\n    return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! ./NotFoundPage */ \"./src/client/pages/NotFoundPage.js\", 7));\n  },\n  modules: [\"./NotFoundPage\"],\n  webpack: function webpack() {\n    return [/*require.resolve*/(/*! ./NotFoundPage */ \"./src/client/pages/NotFoundPage.js\")];\n  },\n  loading: function loading() {\n    return _react2.default.createElement(\n      \"div\",\n      null,\n      \"Loading...\"\n    );\n  }\n});\n\nvar Home = function Home() {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"h3\",\n      null,\n      \"Welcome!!!!\"\n    ),\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: \"/dev\" },\n      \"Test\"\n    ),\n    _react2.default.createElement(\n      \"p\",\n      null,\n      \"Change your app here\"\n    ),\n    _react2.default.createElement(LoadableNotFoundPage, null)\n  );\n};\n\nexports.default = Home;\n\n//# sourceURL=webpack:///./src/client/pages/HomePage.js?");

/***/ }),

/***/ "./src/client/pages/NotFoundPage.js":
/*!******************************************!*\
  !*** ./src/client/pages/NotFoundPage.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NotFoundPage = function NotFoundPage(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n  staticContext.notFound = true;\n  return _react2.default.createElement(\n    \"h1\",\n    null,\n    \"Ooops, route not found.\"\n  );\n};\n\nexports.default = NotFoundPage;\n\n//# sourceURL=webpack:///./src/client/pages/NotFoundPage.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nexports.default = (0, _redux.combineReducers)({});\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/routes.js":
/*!******************************!*\
  !*** ./src/client/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HomePage = __webpack_require__(/*! ./pages/HomePage */ \"./src/client/pages/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _reactLoadable = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import asyncComponent from \"./hoc/asyncComponent\";\n\n// const AsyncTestPage = asyncComponent(() => {\n//   return import(\"./pages/TestPage\");\n// });\n\nvar LoadableTestPage = (0, _reactLoadable2.default)({\n  loader: function loader() {\n    return __webpack_require__.e(/*! import() | TestPage */ \"TestPage\").then(__webpack_require__.t.bind(null, /*! ./pages/TestPage */ \"./src/client/pages/TestPage.js\", 7));\n  },\n  modules: [\"./pages/TestPage\"],\n  webpack: function webpack() {\n    return [/*require.resolve*/(/*! ./pages/TestPage */ \"./src/client/pages/TestPage.js\")];\n  },\n  loading: function loading() {\n    return _react2.default.createElement(\n      \"div\",\n      null,\n      \"Loading...\"\n    );\n  }\n});\nexports.default = [{\n  path: \"/\",\n  exact: true,\n  component: _HomePage2.default\n}, {\n  path: \"/dev\",\n  component: LoadableTestPage\n}];\n\n//# sourceURL=webpack:///./src/client/routes.js?");

/***/ }),

/***/ "./src/server/helpers/createStore.js":
/*!*******************************************!*\
  !*** ./src/server/helpers/createStore.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reducers = __webpack_require__(/*! ../../client/reducers */ \"./src/client/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n\n  return store;\n};\n\n//# sourceURL=webpack:///./src/server/helpers/createStore.js?");

/***/ }),

/***/ "./src/server/helpers/renderer.js":
/*!****************************************!*\
  !*** ./src/server/helpers/renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactLoadable = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nvar _webpack = __webpack_require__(/*! react-loadable/webpack */ \"react-loadable/webpack\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _App = __webpack_require__(/*! ../../client/App */ \"./src/client/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _reactLoadable3 = __webpack_require__(/*! ../../../build/react-loadable.json */ \"./build/react-loadable.json\");\n\nvar _reactLoadable4 = _interopRequireDefault(_reactLoadable3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store, context) {\n  var modules = [];\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactLoadable2.default.Capture,\n      { report: function report(moduleName) {\n          return modules.push(moduleName);\n        } },\n      _react2.default.createElement(\n        _reactRouterDom.StaticRouter,\n        { location: req.path, context: context },\n        _react2.default.createElement(_App2.default, null)\n      )\n    )\n  ));\n\n  var bundles = (0, _webpack.getBundles)(_reactLoadable4.default, modules);\n\n  return \"\\n  <!DOCTYPE html>\\n   <html>\\n        <head>\\n          <title></title> \\n          </head>\\n        <body>\\n          <div id=\\\"root\\\">\" + content + \"</div>\\n         <script>window.INITIAL_STATE = \" + (0, _serializeJavascript2.default)(store.getState()) + \"</script>\\n         <script src=\\\"main.js\\\"></script>\\n         <script src=\\\"vendors.js\\\"></script>\\n      \\n           \" + bundles.map(function (bundle) {\n    console.log(\"<script src=\\\"\" + bundle.publicPath + \"\\\"></script>\");\n    return \"<script src=\\\"\" + bundle.publicPath + \"\\\"></script>\";\n    // alternatively if you are using publicPath option in webpack config\n    // you can use the publicPath value from bundle, e.g:\n    // return `<script src=\"${bundle.publicPath}\"></script>`\n  }).join(\"\\n\") + \"\\n          \\n        </body>\\n    </html>     \\n  \";\n};\n//          <script src=\"bundle.js\"></script>\n\n//# sourceURL=webpack:///./src/server/helpers/renderer.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactLoadable = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nvar _routes = __webpack_require__(/*! ../client/routes */ \"./src/client/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _renderer = __webpack_require__(/*! ./helpers/renderer.js */ \"./src/server/helpers/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _createStore = __webpack_require__(/*! ./helpers/createStore */ \"./src/server/helpers/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use(_express2.default.static(\"public\"));\n\n// app.get(\"*\", (req, res) => {\n//   res.sendFile(path.resolve(__dirname, \"..\", \"..\", \"public\", \"index.html\"));\n// });\napp.get(\"*\", function (req, res, next) {\n  var store = (0, _createStore2.default)(req);\n  var activeRoute = _routes2.default.find(function (route) {\n    return (0, _reactRouterDom.matchPath)(req.path, route);\n  }) || {};\n  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(store) : Promise.resolve();\n\n  promise.then(function () {\n    var context = {};\n    var content = (0, _renderer2.default)(req, store, context);\n    if (context.url) {\n      return res.redirect(301, context.url);\n    }\n    if (context.notFound) {\n      res.status(404);\n    }\n    res.send(content);\n  }).catch(next);\n});\n_reactLoadable2.default.preloadAll().then(function () {\n  app.listen(3000, function () {\n    console.log(\"Listening on port 3000\");\n  });\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable\");\n\n//# sourceURL=webpack:///external_%22react-loadable%22?");

/***/ }),

/***/ "react-loadable/webpack":
/*!*****************************************!*\
  !*** external "react-loadable/webpack" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable/webpack\");\n\n//# sourceURL=webpack:///external_%22react-loadable/webpack%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });