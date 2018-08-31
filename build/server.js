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

/***/ "./public/manifest.json":
/*!******************************!*\
  !*** ./public/manifest.json ***!
  \******************************/
/*! exports provided: TestPage.js, main.js, vendors.js, default */
/***/ (function(module) {

eval("module.exports = {\"TestPage.js\":\"/TestPage.d15ebb42c738009dc305.js\",\"main.js\":\"/main.d15ebb42c738009dc305.js\",\"vendors.js\":\"/vendors.d15ebb42c738009dc305.js\"};\n\n//# sourceURL=webpack:///./public/manifest.json?");

/***/ }),

/***/ "./public/react-loadable.json":
/*!************************************!*\
  !*** ./public/react-loadable.json ***!
  \************************************/
/*! exports provided: ./pages/TestPage, ./App, ./src/client/index.js, ./pages/HomePage, ./pages/NotFoundPage, ./reducers, ./routes, fbjs/lib/ExecutionEnvironment, ./camelize, fbjs/lib/camelizeStyleName, fbjs/lib/containsNode, fbjs/lib/emptyFunction, fbjs/lib/emptyObject, fbjs/lib/getActiveElement, ./hyphenate, fbjs/lib/hyphenateStyleName, fbjs/lib/invariant, ./isNode, ./isTextNode, fbjs/lib/shallowEqual, fbjs/lib/warning, ./DOMUtils, ./LocationUtils, ./PathUtils, ./createBrowserHistory, ./createHashHistory, ./createMemoryHistory, ./createTransitionManager, history, warning, hoist-non-react-statics, invariant, isarray, ./_Symbol.js, ./_baseGetTag.js, ./_freeGlobal.js, ./_getPrototype.js, ./_getRawTag.js, ./_objectToString.js, ./_overArg.js, ./_root.js, ./isObjectLike.js, lodash-es/isPlainObject, object-assign, path-to-regexp, prop-types/checkPropTypes, ./factoryWithTypeCheckers, prop-types, ./lib/ReactPropTypesSecret, ./cjs/react-dom.development.js, react-dom, react-loadable, ./components/Provider, ./components/connectAdvanced, ./connect/connect, ./mapDispatchToProps, ./mapStateToProps, ./mergeProps, ./selectorFactory, ./verifySubselectors, ./wrapMapToProps, react-redux, ../utils/PropTypes, ../utils/Subscription, ../utils/shallowEqual, ../utils/verifyPlainObject, ../utils/warning, ./BrowserRouter, ./HashRouter, ./Link, ./MemoryRouter, ./NavLink, ./Prompt, ./Redirect, ./Route, ./Router, ./StaticRouter, ./Switch, ./generatePath, react-router-dom, ./matchPath, ./withRouter, react-router/es/MemoryRouter, react-router/es/Prompt, react-router/es/Redirect, react-router/es/Route, react-router/es/Router, react-router/es/StaticRouter, react-router/es/Switch, react-router/es/generatePath, react-router, react-router/es/matchPath, react-router/es/withRouter, ./cjs/react.development.js, react, redux-thunk, redux, resolve-pathname, symbol-observable, ./ponyfill.js, value-equal, ./../../webpack/buildin/global.js, ./../../webpack/buildin/harmony-module.js, default */
/***/ (function(module) {

eval("module.exports = {\"./pages/TestPage\":[{\"id\":\"./src/client/pages/TestPage.js\",\"name\":\"./src/client/pages/TestPage.js\",\"file\":\"TestPage.d15ebb42c738009dc305.js\",\"publicPath\":\"/TestPage.d15ebb42c738009dc305.js\"}],\"./App\":[{\"id\":\"./src/client/App.js\",\"name\":\"./src/client/App.js\",\"file\":\"main.d15ebb42c738009dc305.js\",\"publicPath\":\"/main.d15ebb42c738009dc305.js\"}],\"./src/client/index.js\":[{\"id\":\"./src/client/index.js\",\"name\":\"./src/client/index.js\",\"file\":\"main.d15ebb42c738009dc305.js\",\"publicPath\":\"/main.d15ebb42c738009dc305.js\"}],\"./pages/HomePage\":[{\"id\":\"./src/client/pages/HomePage.js\",\"name\":\"./src/client/pages/HomePage.js\",\"file\":\"main.d15ebb42c738009dc305.js\",\"publicPath\":\"/main.d15ebb42c738009dc305.js\"}],\"./pages/NotFoundPage\":[{\"id\":\"./src/client/pages/NotFoundPage.js\",\"name\":\"./src/client/pages/NotFoundPage.js\",\"file\":\"main.d15ebb42c738009dc305.js\",\"publicPath\":\"/main.d15ebb42c738009dc305.js\"}],\"./reducers\":[{\"id\":\"./src/client/reducers/index.js\",\"name\":\"./src/client/reducers/index.js\",\"file\":\"main.d15ebb42c738009dc305.js\",\"publicPath\":\"/main.d15ebb42c738009dc305.js\"}],\"./routes\":[{\"id\":\"./src/client/routes.js\",\"name\":\"./src/client/routes.js\",\"file\":\"main.d15ebb42c738009dc305.js\",\"publicPath\":\"/main.d15ebb42c738009dc305.js\"}],\"fbjs/lib/ExecutionEnvironment\":[{\"id\":\"./node_modules/fbjs/lib/ExecutionEnvironment.js\",\"name\":\"./node_modules/fbjs/lib/ExecutionEnvironment.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./camelize\":[{\"id\":\"./node_modules/fbjs/lib/camelize.js\",\"name\":\"./node_modules/fbjs/lib/camelize.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"fbjs/lib/camelizeStyleName\":[{\"id\":\"./node_modules/fbjs/lib/camelizeStyleName.js\",\"name\":\"./node_modules/fbjs/lib/camelizeStyleName.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"fbjs/lib/containsNode\":[{\"id\":\"./node_modules/fbjs/lib/containsNode.js\",\"name\":\"./node_modules/fbjs/lib/containsNode.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"fbjs/lib/emptyFunction\":[{\"id\":\"./node_modules/fbjs/lib/emptyFunction.js\",\"name\":\"./node_modules/fbjs/lib/emptyFunction.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"fbjs/lib/emptyObject\":[{\"id\":\"./node_modules/fbjs/lib/emptyObject.js\",\"name\":\"./node_modules/fbjs/lib/emptyObject.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"fbjs/lib/getActiveElement\":[{\"id\":\"./node_modules/fbjs/lib/getActiveElement.js\",\"name\":\"./node_modules/fbjs/lib/getActiveElement.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./hyphenate\":[{\"id\":\"./node_modules/fbjs/lib/hyphenate.js\",\"name\":\"./node_modules/fbjs/lib/hyphenate.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"fbjs/lib/hyphenateStyleName\":[{\"id\":\"./node_modules/fbjs/lib/hyphenateStyleName.js\",\"name\":\"./node_modules/fbjs/lib/hyphenateStyleName.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"fbjs/lib/invariant\":[{\"id\":\"./node_modules/fbjs/lib/invariant.js\",\"name\":\"./node_modules/fbjs/lib/invariant.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./isNode\":[{\"id\":\"./node_modules/fbjs/lib/isNode.js\",\"name\":\"./node_modules/fbjs/lib/isNode.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./isTextNode\":[{\"id\":\"./node_modules/fbjs/lib/isTextNode.js\",\"name\":\"./node_modules/fbjs/lib/isTextNode.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"fbjs/lib/shallowEqual\":[{\"id\":\"./node_modules/fbjs/lib/shallowEqual.js\",\"name\":\"./node_modules/fbjs/lib/shallowEqual.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"fbjs/lib/warning\":[{\"id\":\"./node_modules/fbjs/lib/warning.js\",\"name\":\"./node_modules/fbjs/lib/warning.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./DOMUtils\":[{\"id\":\"./node_modules/history/es/DOMUtils.js\",\"name\":\"./node_modules/history/es/DOMUtils.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./LocationUtils\":[{\"id\":\"./node_modules/history/es/LocationUtils.js\",\"name\":\"./node_modules/history/es/LocationUtils.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./PathUtils\":[{\"id\":\"./node_modules/history/es/PathUtils.js\",\"name\":\"./node_modules/history/es/PathUtils.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./createBrowserHistory\":[{\"id\":\"./node_modules/history/es/createBrowserHistory.js\",\"name\":\"./node_modules/history/es/createBrowserHistory.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./createHashHistory\":[{\"id\":\"./node_modules/history/es/createHashHistory.js\",\"name\":\"./node_modules/history/es/createHashHistory.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./createMemoryHistory\":[{\"id\":\"./node_modules/history/es/createMemoryHistory.js\",\"name\":\"./node_modules/history/es/createMemoryHistory.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./createTransitionManager\":[{\"id\":\"./node_modules/history/es/createTransitionManager.js\",\"name\":\"./node_modules/history/es/createTransitionManager.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"history\":[{\"id\":\"./node_modules/history/es/index.js\",\"name\":\"./node_modules/history/es/index.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"warning\":[{\"id\":\"./node_modules/history/node_modules/warning/browser.js\",\"name\":\"./node_modules/history/node_modules/warning/browser.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"},{\"id\":\"./node_modules/warning/warning.js\",\"name\":\"./node_modules/warning/warning.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"hoist-non-react-statics\":[{\"id\":\"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\",\"name\":\"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"invariant\":[{\"id\":\"./node_modules/invariant/browser.js\",\"name\":\"./node_modules/invariant/browser.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"isarray\":[{\"id\":\"./node_modules/isarray/index.js\",\"name\":\"./node_modules/isarray/index.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./_Symbol.js\":[{\"id\":\"./node_modules/lodash-es/_Symbol.js\",\"name\":\"./node_modules/lodash-es/_Symbol.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./_baseGetTag.js\":[{\"id\":\"./node_modules/lodash-es/_baseGetTag.js\",\"name\":\"./node_modules/lodash-es/_baseGetTag.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./_freeGlobal.js\":[{\"id\":\"./node_modules/lodash-es/_freeGlobal.js\",\"name\":\"./node_modules/lodash-es/_freeGlobal.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./_getPrototype.js\":[{\"id\":\"./node_modules/lodash-es/_getPrototype.js\",\"name\":\"./node_modules/lodash-es/_getPrototype.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./_getRawTag.js\":[{\"id\":\"./node_modules/lodash-es/_getRawTag.js\",\"name\":\"./node_modules/lodash-es/_getRawTag.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./_objectToString.js\":[{\"id\":\"./node_modules/lodash-es/_objectToString.js\",\"name\":\"./node_modules/lodash-es/_objectToString.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./_overArg.js\":[{\"id\":\"./node_modules/lodash-es/_overArg.js\",\"name\":\"./node_modules/lodash-es/_overArg.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./_root.js\":[{\"id\":\"./node_modules/lodash-es/_root.js\",\"name\":\"./node_modules/lodash-es/_root.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./isObjectLike.js\":[{\"id\":\"./node_modules/lodash-es/isObjectLike.js\",\"name\":\"./node_modules/lodash-es/isObjectLike.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"lodash-es/isPlainObject\":[{\"id\":\"./node_modules/lodash-es/isPlainObject.js\",\"name\":\"./node_modules/lodash-es/isPlainObject.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"object-assign\":[{\"id\":\"./node_modules/object-assign/index.js\",\"name\":\"./node_modules/object-assign/index.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"path-to-regexp\":[{\"id\":\"./node_modules/path-to-regexp/index.js\",\"name\":\"./node_modules/path-to-regexp/index.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"prop-types/checkPropTypes\":[{\"id\":\"./node_modules/prop-types/checkPropTypes.js\",\"name\":\"./node_modules/prop-types/checkPropTypes.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./factoryWithTypeCheckers\":[{\"id\":\"./node_modules/prop-types/factoryWithTypeCheckers.js\",\"name\":\"./node_modules/prop-types/factoryWithTypeCheckers.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"prop-types\":[{\"id\":\"./node_modules/prop-types/index.js\",\"name\":\"./node_modules/prop-types/index.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./lib/ReactPropTypesSecret\":[{\"id\":\"./node_modules/prop-types/lib/ReactPropTypesSecret.js\",\"name\":\"./node_modules/prop-types/lib/ReactPropTypesSecret.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./cjs/react-dom.development.js\":[{\"id\":\"./node_modules/react-dom/cjs/react-dom.development.js\",\"name\":\"./node_modules/react-dom/cjs/react-dom.development.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"react-dom\":[{\"id\":\"./node_modules/react-dom/index.js\",\"name\":\"./node_modules/react-dom/index.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"react-loadable\":[{\"id\":\"./node_modules/react-loadable/lib/index.js\",\"name\":\"./node_modules/react-loadable/lib/index.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./components/Provider\":[{\"id\":\"./node_modules/react-redux/es/components/Provider.js\",\"name\":\"./node_modules/react-redux/es/components/Provider.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./components/connectAdvanced\":[{\"id\":\"./node_modules/react-redux/es/components/connectAdvanced.js\",\"name\":\"./node_modules/react-redux/es/components/connectAdvanced.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./connect/connect\":[{\"id\":\"./node_modules/react-redux/es/connect/connect.js\",\"name\":\"./node_modules/react-redux/es/connect/connect.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./mapDispatchToProps\":[{\"id\":\"./node_modules/react-redux/es/connect/mapDispatchToProps.js\",\"name\":\"./node_modules/react-redux/es/connect/mapDispatchToProps.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./mapStateToProps\":[{\"id\":\"./node_modules/react-redux/es/connect/mapStateToProps.js\",\"name\":\"./node_modules/react-redux/es/connect/mapStateToProps.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./mergeProps\":[{\"id\":\"./node_modules/react-redux/es/connect/mergeProps.js\",\"name\":\"./node_modules/react-redux/es/connect/mergeProps.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./selectorFactory\":[{\"id\":\"./node_modules/react-redux/es/connect/selectorFactory.js\",\"name\":\"./node_modules/react-redux/es/connect/selectorFactory.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./verifySubselectors\":[{\"id\":\"./node_modules/react-redux/es/connect/verifySubselectors.js\",\"name\":\"./node_modules/react-redux/es/connect/verifySubselectors.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./wrapMapToProps\":[{\"id\":\"./node_modules/react-redux/es/connect/wrapMapToProps.js\",\"name\":\"./node_modules/react-redux/es/connect/wrapMapToProps.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"react-redux\":[{\"id\":\"./node_modules/react-redux/es/index.js\",\"name\":\"./node_modules/react-redux/es/index.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"../utils/PropTypes\":[{\"id\":\"./node_modules/react-redux/es/utils/PropTypes.js\",\"name\":\"./node_modules/react-redux/es/utils/PropTypes.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"../utils/Subscription\":[{\"id\":\"./node_modules/react-redux/es/utils/Subscription.js\",\"name\":\"./node_modules/react-redux/es/utils/Subscription.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"../utils/shallowEqual\":[{\"id\":\"./node_modules/react-redux/es/utils/shallowEqual.js\",\"name\":\"./node_modules/react-redux/es/utils/shallowEqual.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"../utils/verifyPlainObject\":[{\"id\":\"./node_modules/react-redux/es/utils/verifyPlainObject.js\",\"name\":\"./node_modules/react-redux/es/utils/verifyPlainObject.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"../utils/warning\":[{\"id\":\"./node_modules/react-redux/es/utils/warning.js\",\"name\":\"./node_modules/react-redux/es/utils/warning.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./BrowserRouter\":[{\"id\":\"./node_modules/react-router-dom/es/BrowserRouter.js\",\"name\":\"./node_modules/react-router-dom/es/BrowserRouter.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./HashRouter\":[{\"id\":\"./node_modules/react-router-dom/es/HashRouter.js\",\"name\":\"./node_modules/react-router-dom/es/HashRouter.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./Link\":[{\"id\":\"./node_modules/react-router-dom/es/Link.js\",\"name\":\"./node_modules/react-router-dom/es/Link.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./MemoryRouter\":[{\"id\":\"./node_modules/react-router-dom/es/MemoryRouter.js\",\"name\":\"./node_modules/react-router-dom/es/MemoryRouter.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./NavLink\":[{\"id\":\"./node_modules/react-router-dom/es/NavLink.js\",\"name\":\"./node_modules/react-router-dom/es/NavLink.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./Prompt\":[{\"id\":\"./node_modules/react-router-dom/es/Prompt.js\",\"name\":\"./node_modules/react-router-dom/es/Prompt.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./Redirect\":[{\"id\":\"./node_modules/react-router-dom/es/Redirect.js\",\"name\":\"./node_modules/react-router-dom/es/Redirect.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./Route\":[{\"id\":\"./node_modules/react-router-dom/es/Route.js\",\"name\":\"./node_modules/react-router-dom/es/Route.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./Router\":[{\"id\":\"./node_modules/react-router-dom/es/Router.js\",\"name\":\"./node_modules/react-router-dom/es/Router.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./StaticRouter\":[{\"id\":\"./node_modules/react-router-dom/es/StaticRouter.js\",\"name\":\"./node_modules/react-router-dom/es/StaticRouter.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./Switch\":[{\"id\":\"./node_modules/react-router-dom/es/Switch.js\",\"name\":\"./node_modules/react-router-dom/es/Switch.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./generatePath\":[{\"id\":\"./node_modules/react-router-dom/es/generatePath.js\",\"name\":\"./node_modules/react-router-dom/es/generatePath.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"react-router-dom\":[{\"id\":\"./node_modules/react-router-dom/es/index.js\",\"name\":\"./node_modules/react-router-dom/es/index.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./matchPath\":[{\"id\":\"./node_modules/react-router-dom/es/matchPath.js\",\"name\":\"./node_modules/react-router-dom/es/matchPath.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./withRouter\":[{\"id\":\"./node_modules/react-router-dom/es/withRouter.js\",\"name\":\"./node_modules/react-router-dom/es/withRouter.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"react-router/es/MemoryRouter\":[{\"id\":\"./node_modules/react-router/es/MemoryRouter.js\",\"name\":\"./node_modules/react-router/es/MemoryRouter.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"react-router/es/Prompt\":[{\"id\":\"./node_modules/react-router/es/Prompt.js\",\"name\":\"./node_modules/react-router/es/Prompt.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"react-router/es/Redirect\":[{\"id\":\"./node_modules/react-router/es/Redirect.js\",\"name\":\"./node_modules/react-router/es/Redirect.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"react-router/es/Route\":[{\"id\":\"./node_modules/react-router/es/Route.js\",\"name\":\"./node_modules/react-router/es/Route.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"react-router/es/Router\":[{\"id\":\"./node_modules/react-router/es/Router.js\",\"name\":\"./node_modules/react-router/es/Router.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"react-router/es/StaticRouter\":[{\"id\":\"./node_modules/react-router/es/StaticRouter.js\",\"name\":\"./node_modules/react-router/es/StaticRouter.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"react-router/es/Switch\":[{\"id\":\"./node_modules/react-router/es/Switch.js\",\"name\":\"./node_modules/react-router/es/Switch.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"react-router/es/generatePath\":[{\"id\":\"./node_modules/react-router/es/generatePath.js\",\"name\":\"./node_modules/react-router/es/generatePath.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"react-router\":[{\"id\":\"./node_modules/react-router/es/index.js\",\"name\":\"./node_modules/react-router/es/index.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"react-router/es/matchPath\":[{\"id\":\"./node_modules/react-router/es/matchPath.js\",\"name\":\"./node_modules/react-router/es/matchPath.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"react-router/es/withRouter\":[{\"id\":\"./node_modules/react-router/es/withRouter.js\",\"name\":\"./node_modules/react-router/es/withRouter.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./cjs/react.development.js\":[{\"id\":\"./node_modules/react/cjs/react.development.js\",\"name\":\"./node_modules/react/cjs/react.development.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"react\":[{\"id\":\"./node_modules/react/index.js\",\"name\":\"./node_modules/react/index.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"redux-thunk\":[{\"id\":\"./node_modules/redux-thunk/es/index.js\",\"name\":\"./node_modules/redux-thunk/es/index.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"redux\":[{\"id\":\"./node_modules/redux/es/redux.js\",\"name\":\"./node_modules/redux/es/redux.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"resolve-pathname\":[{\"id\":\"./node_modules/resolve-pathname/index.js\",\"name\":\"./node_modules/resolve-pathname/index.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"symbol-observable\":[{\"id\":\"./node_modules/symbol-observable/es/index.js\",\"name\":\"./node_modules/symbol-observable/es/index.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./ponyfill.js\":[{\"id\":\"./node_modules/symbol-observable/es/ponyfill.js\",\"name\":\"./node_modules/symbol-observable/es/ponyfill.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"value-equal\":[{\"id\":\"./node_modules/value-equal/index.js\",\"name\":\"./node_modules/value-equal/index.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./../../webpack/buildin/global.js\":[{\"id\":\"./node_modules/webpack/buildin/global.js\",\"name\":\"./node_modules/webpack/buildin/global.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}],\"./../../webpack/buildin/harmony-module.js\":[{\"id\":\"./node_modules/webpack/buildin/harmony-module.js\",\"name\":\"./node_modules/webpack/buildin/harmony-module.js\",\"file\":\"vendors.d15ebb42c738009dc305.js\",\"publicPath\":\"/vendors.d15ebb42c738009dc305.js\"}]};\n\n//# sourceURL=webpack:///./public/react-loadable.json?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"h3\",\n      null,\n      \"Welcome!!!!\"\n    ),\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: \"/dev\" },\n      \"Test\"\n    ),\n    _react2.default.createElement(\n      \"p\",\n      null,\n      \"Change your app here\"\n    )\n  );\n};\n\nexports.default = Home;\n\n//# sourceURL=webpack:///./src/client/pages/HomePage.js?");

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

/***/ "./src/client/pages/TestPage.js":
/*!**************************************!*\
  !*** ./src/client/pages/TestPage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar TestPage = function TestPage(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n  staticContext.Test = true;\n  return _react2.default.createElement(\n    \"h1\",\n    null,\n    \"TEST!\"\n  );\n};\n\nexports.default = TestPage;\n\n//# sourceURL=webpack:///./src/client/pages/TestPage.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HomePage = __webpack_require__(/*! ./pages/HomePage */ \"./src/client/pages/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _reactLoadable = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import asyncComponent from \"./hoc/asyncComponent\";\n\n// const AsyncTestPage = asyncComponent(() => {\n//   return import(\"./pages/TestPage\");\n// });\n\nvar LoadableTestPage = (0, _reactLoadable2.default)({\n  loader: function loader() {\n    return Promise.resolve(/*! import() | TestPage */).then(__webpack_require__.t.bind(null, /*! ./pages/TestPage */ \"./src/client/pages/TestPage.js\", 7));\n  },\n  modules: [\"./pages/TestPage\"],\n  webpack: function webpack() {\n    return [/*require.resolve*/(/*! ./pages/TestPage */ \"./src/client/pages/TestPage.js\")];\n  },\n  loading: function loading() {\n    return _react2.default.createElement(\n      \"div\",\n      null,\n      \"Loading...\"\n    );\n  }\n});\nexports.default = [{\n  path: \"/\",\n  exact: true,\n  component: _HomePage2.default\n}, {\n  path: \"/dev\",\n  component: LoadableTestPage\n}];\n\n//# sourceURL=webpack:///./src/client/routes.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactLoadable = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nvar _webpack = __webpack_require__(/*! react-loadable/webpack */ \"react-loadable/webpack\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _App = __webpack_require__(/*! ../../client/App */ \"./src/client/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _reactLoadable3 = __webpack_require__(/*! ../../../public/react-loadable.json */ \"./public/react-loadable.json\");\n\nvar _reactLoadable4 = _interopRequireDefault(_reactLoadable3);\n\nvar _manifest = __webpack_require__(/*! ../../../public/manifest.json */ \"./public/manifest.json\");\n\nvar _manifest2 = _interopRequireDefault(_manifest);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store, context) {\n  var modules = [];\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactLoadable2.default.Capture,\n      { report: function report(moduleName) {\n          return modules.push(moduleName);\n        } },\n      _react2.default.createElement(\n        _reactRouterDom.StaticRouter,\n        { location: req.path, context: context },\n        _react2.default.createElement(_App2.default, null)\n      )\n    )\n  ));\n\n  var bundles = (0, _webpack.getBundles)(_reactLoadable4.default, modules);\n\n  return \"\\n  <!DOCTYPE html>\\n   <html>\\n        <head>\\n          <title></title> \\n          </head>\\n        <body>\\n          <div id=\\\"root\\\">\" + content + \"</div>\\n         <script>window.INITIAL_STATE = \" + (0, _serializeJavascript2.default)(store.getState()) + \"</script>\\n         <script src=\\\"\" + _manifest2.default[\"main.js\"] + \"\\\"></script>\\n         <script src=\\\"\" + _manifest2.default[\"vendors.js\"] + \"\\\"></script>\\n      \\n           \" + bundles.map(function (bundle) {\n    return \"<script src=\\\"\" + bundle.publicPath + \"\\\"></script>\";\n  }).join(\"\\n\") + \"\\n          \\n        </body>\\n    </html>     \\n  \";\n};\n\n//# sourceURL=webpack:///./src/server/helpers/renderer.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactLoadable = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nvar _routes = __webpack_require__(/*! ../client/routes */ \"./src/client/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _renderer = __webpack_require__(/*! ./helpers/renderer.js */ \"./src/server/helpers/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _createStore = __webpack_require__(/*! ./helpers/createStore */ \"./src/server/helpers/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use(_express2.default.static(\"public\"));\napp.get(\"*\", function (req, res, next) {\n  var store = (0, _createStore2.default)(req);\n  var activeRoutes = _routes2.default.filter(function (route) {\n    return (0, _reactRouterDom.matchPath)(req.path, route);\n  }) || [];\n\n  var promise = activeRoutes.fetchInitialData ? activeRoute.fetchInitialData(store) : Promise.resolve();\n\n  promise.then(function () {\n    var context = {};\n    var content = (0, _renderer2.default)(req, store, context);\n    if (context.url) {\n      return res.redirect(301, context.url);\n    }\n    if (context.notFound) {\n      res.status(404);\n    }\n    res.send(content);\n  }).catch(next);\n});\n_reactLoadable2.default.preloadAll().then(function () {\n  app.listen(3000, function () {\n    console.log(\"Listening on port 3000\");\n  });\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

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