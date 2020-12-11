webpackHotUpdate("index",{

/***/ "./.rax/ErrorBoundary/ErrorBoundaryFallback.tsx":
/*!******************************************************!*\
  !*** ./.rax/ErrorBoundary/ErrorBoundaryFallback.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rax__WEBPACK_IMPORTED_MODULE_0__);


var toTitle = function (error) {
  return "" + error.toString();
};

var style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '100px 0',
  color: '#ed3131'
};

var ErrorBoundaryFallback = function (_ref) {
  var error = _ref.error;
  return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: style,
    title: toTitle(error)
  }, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "843",
    width: "60",
    height: "60"
  }, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M1024 512C1024 229.23 794.77 0 512 0S0 229.23 0 512s229.23 512 512 512c117.41 0 228.826-39.669 318.768-111.313 10.79-8.595 12.569-24.308 3.975-35.097-8.594-10.789-24.308-12.568-35.097-3.974C718.47 938.277 618.002 974.049 512 974.049 256.818 974.049 49.951 767.182 49.951 512S256.818 49.951 512 49.951 974.049 256.818 974.049 512c0 87.493-24.334 171.337-69.578 243.96-7.294 11.708-3.716 27.112 7.992 34.405 11.707 7.294 27.11 3.716 34.405-7.991C997.014 701.88 1024 608.898 1024 512z",
    "p-id": "844",
    fill: "#cdcdcd"
  }), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M337.17 499.512c34.485 0 62.44-27.955 62.44-62.439s-27.955-62.439-62.44-62.439c-34.483 0-62.438 27.955-62.438 62.44 0 34.483 27.955 62.438 62.439 62.438z m374.635 0c34.484 0 62.439-27.955 62.439-62.439s-27.955-62.439-62.44-62.439c-34.483 0-62.438 27.955-62.438 62.44 0 34.483 27.955 62.438 62.439 62.438zM352.788 704.785c43.377-34.702 100.364-55.425 171.7-55.425 71.336 0 128.322 20.723 171.7 55.425 26.513 21.21 42.695 42.786 50.444 58.284 6.168 12.337 1.168 27.34-11.17 33.508-12.337 6.169-27.34 1.168-33.508-11.17-0.918-1.834-3.462-6.024-7.788-11.793-7.564-10.084-17.239-20.269-29.183-29.824-34.671-27.737-80.71-44.478-140.495-44.478-59.786 0-105.824 16.74-140.496 44.478-11.944 9.555-21.619 19.74-29.182 29.824-4.327 5.769-6.87 9.959-7.788 11.794-6.169 12.337-21.171 17.338-33.509 11.17-12.337-6.17-17.338-21.172-11.169-33.509 7.75-15.498 23.931-37.074 50.444-58.284z",
    "p-id": "845",
    fill: "#cdcdcd"
  })), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Oops! Something went wrong."));
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundaryFallback);

/***/ }),

/***/ "./.rax/ErrorBoundary/index.tsx":
/*!**************************************!*\
  !*** ./.rax/ErrorBoundary/index.tsx ***!
  \**************************************/
/*! exports provided: ErrorBoundary, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return ErrorBoundary; });
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorBoundaryFallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorBoundaryFallback */ "./.rax/ErrorBoundary/ErrorBoundaryFallback.tsx");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

// reference： https://github.com/bvaughn/react-error-boundary

/* eslint @typescript-eslint/explicit-member-accessibility:0 */



var ErrorBoundary = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ErrorBoundary, _Component);

  function ErrorBoundary(props) {
    var _this = _Component.call(this, props) || this;

    _this.state = {
      error: null
    };
    return _this;
  }

  var _proto = ErrorBoundary.prototype;

  _proto.componentDidCatch = function componentDidCatch(error) {
    var onError = this.props.onError;

    if (typeof onError === 'function') {
      try {
        // can’t reproduce missing info in development environment.
        onError.call(this, error);
      } catch (ignoredError) {// ignored error
      }
    } // Update state so the next render will show the fallback UI.


    this.setState({
      error: error
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        Fallback = _this$props.Fallback;
    var error = this.state.error; // render fallback UI if there is error

    if (error !== null && typeof Fallback === 'function') {
      return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fallback, {
        error: error
      });
    }

    return children || null;
  };

  return ErrorBoundary;
}(rax__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ErrorBoundary.defaultProps = {
  Fallback: _ErrorBoundaryFallback__WEBPACK_IMPORTED_MODULE_1__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ "./.rax/index.ts":
/*!***********************!*\
  !*** ./.rax/index.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_MODE", function() { return APP_MODE; });
/* harmony import */ var _runApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./runApp */ "./.rax/runApp.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runApp", function() { return _runApp__WEBPACK_IMPORTED_MODULE_0__["runApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return _runApp__WEBPACK_IMPORTED_MODULE_0__["withRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "history", function() { return _runApp__WEBPACK_IMPORTED_MODULE_0__["history"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHistory", function() { return _runApp__WEBPACK_IMPORTED_MODULE_0__["getHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSearchParams", function() { return _runApp__WEBPACK_IMPORTED_MODULE_0__["getSearchParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageShow", function() { return _runApp__WEBPACK_IMPORTED_MODULE_0__["usePageShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageHide", function() { return _runApp__WEBPACK_IMPORTED_MODULE_0__["usePageHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPageLifeCycle", function() { return _runApp__WEBPACK_IMPORTED_MODULE_0__["withPageLifeCycle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerNativeEventListeners", function() { return _runApp__WEBPACK_IMPORTED_MODULE_0__["registerNativeEventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addNativeEventListener", function() { return _runApp__WEBPACK_IMPORTED_MODULE_0__["addNativeEventListener"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNativeEventListener", function() { return _runApp__WEBPACK_IMPORTED_MODULE_0__["removeNativeEventListener"]; });

/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorBoundary */ "./.rax/ErrorBoundary/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__["ErrorBoundary"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./.rax/types.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_2__) if(["default","ErrorBoundary","APP_MODE","createStore","store","runApp","withRouter","history","getHistory","getSearchParams","usePageShow","usePageHide","withPageLifeCycle","registerNativeEventListeners","addNativeEventListener","removeNativeEventListener"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ice_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ice/store */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/index.js");
/* harmony import */ var _ice_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ice_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return _ice_store__WEBPACK_IMPORTED_MODULE_3__["createStore"]; });

/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/index */ "./.rax/store/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _store_index__WEBPACK_IMPORTED_MODULE_4__["default"]; });




var APP_MODE = global.__app_mode__ || "start";



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.44.2@webpack/buildin/global.js */ "./node_modules/_webpack@4.44.2@webpack/buildin/global.js")))

/***/ }),

/***/ "./.rax/runApp.ts":
/*!************************!*\
  !*** ./.rax/runApp.ts ***!
  \************************/
/*! exports provided: runApp, withRouter, history, getHistory, getSearchParams, usePageShow, usePageHide, withPageLifeCycle, registerNativeEventListeners, addNativeEventListener, removeNativeEventListener, ErrorBoundary, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/_rax-platform-loader@1.0.0@rax-platform-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\bookkeeping\\.rax\\runApp.ts'");

/***/ }),

/***/ "./.rax/store/index.ts":
/*!*****************************!*\
  !*** ./.rax/store/index.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./.rax/types.ts":
/*!***********************!*\
  !*** ./.rax/types.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/_rax-platform-loader@1.0.0@rax-platform-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\bookkeeping\\.rax\\types.ts'");

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/actionTypes.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/actionTypes.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var randomString = function () {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  SET_STATE: "@@icestore_SET_STATE" + randomString()
};
exports.default = ActionTypes; //# sourceMappingURL=actionTypes.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/icestore.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/icestore.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var pluginFactory_1 = __importDefault(__webpack_require__(/*! ./pluginFactory */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/pluginFactory.js"));

var dispatch_1 = __importDefault(__webpack_require__(/*! ./plugins/dispatch */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/dispatch.js"));

var effects_1 = __importDefault(__webpack_require__(/*! ./plugins/effects */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/effects.js"));

var redux_1 = __importDefault(__webpack_require__(/*! ./redux */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/redux.js"));

var validate_1 = __importDefault(__webpack_require__(/*! ./utils/validate */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/validate.js"));

var corePlugins = [dispatch_1.default, effects_1.default];
/**
 * Icestore class
 *
 * an instance of Icestore generated by "init"
 */

var Icestore =
/** @class */
function () {
  function Icestore(config) {
    var _this = this;

    this.plugins = [];

    this.getModels = function (models) {
      return Object.keys(models).map(function (name) {
        return __assign(__assign({
          name: name
        }, models[name]), {
          reducers: models[name].reducers || {}
        });
      });
    };

    this.config = config;
    this.pluginFactory = pluginFactory_1.default(config);

    for (var _i = 0, _a = corePlugins.concat(this.config.plugins); _i < _a.length; _i++) {
      var plugin = _a[_i];
      this.plugins.push(this.pluginFactory.create(plugin));
    } // preStore: middleware, model hooks


    this.forEachPlugin('middleware', function (middleware) {
      _this.config.redux.middlewares.push(middleware);
    });
  }

  Icestore.prototype.forEachPlugin = function (method, fn) {
    for (var _i = 0, _a = this.plugins; _i < _a.length; _i++) {
      var plugin = _a[_i];

      if (plugin[method]) {
        fn(plugin[method]);
      }
    }
  };

  Icestore.prototype.addModel = function (model) {
    validate_1.default([[!model, 'model config is required'], [typeof model.name !== 'string', 'model "name" [string] is required'], [model.state === undefined && model.baseReducer === undefined, "model(" + model.name + ") \"state\" is required"], [model.baseReducer !== undefined && typeof model.baseReducer !== 'function', "model(" + model.name + ") \"baseReducer\" must be a function"]]); // run plugin model subscriptions

    this.forEachPlugin('onModel', function (onModel) {
      return onModel(model);
    });
  };

  Icestore.prototype.init = function () {
    var _this = this; // collect all models


    this.models = this.getModels(this.config.models);

    for (var _i = 0, _a = this.models; _i < _a.length; _i++) {
      var model = _a[_i];
      this.addModel(model);
    } // create a redux store with initialState
    // merge in additional extra reducers


    var redux = redux_1.default.call(this, {
      redux: this.config.redux,
      models: this.models
    });

    var icestore = __assign(__assign({
      name: this.config.name
    }, redux.store), {
      // dynamic loading of models with `replaceReducer`
      model: function (_model) {
        _this.addModel(_model);

        redux.mergeReducers(redux.createModelReducer(_model));
        redux.store.replaceReducer(redux.createRootReducer(_this.config.redux.rootReducers));
        redux.store.dispatch({
          type: '@@redux/REPLACE '
        });
      }
    });

    this.forEachPlugin('onStoreCreated', function (onStoreCreated) {
      var returned = onStoreCreated(icestore); // if onStoreCreated returns an object value
      // merge its returned value onto the store

      if (returned) {
        Object.keys(returned || {}).forEach(function (key) {
          icestore[key] = returned[key];
        });
      }
    });
    return icestore;
  };

  return Icestore;
}();

exports.default = Icestore; //# sourceMappingURL=icestore.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withModel = exports.createStore = void 0;

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/_rax@1.1.4@rax/lib/compat/index.js"));

var redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ "./node_modules/_redux-thunk@2.3.0@redux-thunk/es/index.js"));

var icestore_1 = __importDefault(__webpack_require__(/*! ./icestore */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/icestore.js"));

var mergeConfig_1 = __importDefault(__webpack_require__(/*! ./utils/mergeConfig */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/mergeConfig.js"));

var provider_1 = __importDefault(__webpack_require__(/*! ./plugins/provider */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/provider.js"));

var reduxHooks_1 = __importDefault(__webpack_require__(/*! ./plugins/reduxHooks */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/reduxHooks.js"));

var modelApis_1 = __importDefault(__webpack_require__(/*! ./plugins/modelApis */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/modelApis.js"));

var immer_1 = __importDefault(__webpack_require__(/*! ./plugins/immer */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/immer.js"));

var loading_1 = __importDefault(__webpack_require__(/*! ./plugins/loading */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/loading.js"));

var error_1 = __importDefault(__webpack_require__(/*! ./plugins/error */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/error.js"));

var converter_1 = __webpack_require__(/*! ./utils/converter */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/converter.js");

var appendReducers_1 = __importDefault(__webpack_require__(/*! ./utils/appendReducers */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/appendReducers.js")); // incrementer used to provide a store name if none exists


var count = 0;
/**
 * createOriginStore
 *
 * generates a Icestore with a set configuration
 * @param config
 */

var init = function (initConfig) {
  if (initConfig === void 0) {
    initConfig = {};
  }

  var name = initConfig.name || count.toString();
  count += 1;
  var config = mergeConfig_1.default(__assign(__assign({}, initConfig), {
    name: name
  }));
  return new icestore_1.default(config).init();
};
/**
 * createStore
 *
 * generates a preset Icestore
 * @param models
 * @param initConfig
 */


exports.createStore = function (models, initConfig) {
  var _a = initConfig || {},
      disableImmer = _a.disableImmer,
      disableLoading = _a.disableLoading,
      disableError = _a.disableError,
      _b = _a.plugins,
      plugins = _b === void 0 ? [] : _b,
      _c = _a.redux,
      redux = _c === void 0 ? {} : _c;

  var middlewares = redux.middlewares || [];
  var context = react_1.default.createContext(null); // defaults middlewares

  middlewares.push(redux_thunk_1.default); // defaults plugins

  plugins.push(provider_1.default({
    context: context
  }));
  plugins.push(reduxHooks_1.default({
    context: context
  }));
  plugins.push(modelApis_1.default()); // https://github.com/ice-lab/icestore/issues/94
  // TODO: fix error & loading plugin immer problem

  var immerBlacklist = [];

  if (!disableLoading) {
    plugins.push(loading_1.default());
    immerBlacklist.push('loading');
  }

  if (!disableError) {
    plugins.push(error_1.default());
    immerBlacklist.push('error');
  }

  if (!disableImmer) {
    plugins.push(immer_1.default({
      blacklist: immerBlacklist
    }));
  } // compatibility handling


  var wrappedModels = appendReducers_1.default(converter_1.convertEffects(converter_1.convertActions(models)));
  var store = init({
    models: wrappedModels,
    plugins: plugins,
    redux: __assign(__assign({}, redux), {
      middlewares: middlewares
    })
  });
  return store;
};

exports.withModel = function (model, mapModelToProps, initConfig) {
  var _a;

  var modelName = 'model';

  mapModelToProps = mapModelToProps || function (modelApis) {
    var _a;

    return _a = {}, _a[modelName] = modelApis, _a;
  };

  var store = exports.createStore((_a = {}, _a[modelName] = model, _a), initConfig);
  var Provider = store.Provider,
      getModelAPIs = store.getModelAPIs;
  var modelApis = getModelAPIs(modelName);
  var withProps = mapModelToProps(modelApis);
  return function (Component) {
    return function (props) {
      return react_1.default.createElement(Provider, null, react_1.default.createElement(Component, __assign({}, withProps, props)));
    };
  };
};

exports.default = exports.createStore;

__exportStar(__webpack_require__(/*! ./types */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/types.js"), exports); //# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/pluginFactory.js":
/*!************************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/pluginFactory.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var validate_1 = __importDefault(__webpack_require__(/*! ./utils/validate */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/validate.js"));
/**
 * PluginFactory
 *
 * makes Plugin objects extend and inherit from a root PluginFactory
 */


exports.default = function (config) {
  return {
    config: config,

    /**
     * validate
     *
     * bind validate to the store for easy access
     */
    validate: validate_1.default,

    /**
     * create plugin
     *
     * binds plugin properties and functions to an instance of PluginFactorys
     * @param plugin
     */
    create: function create(plugin) {
      validate_1.default([[plugin.onStoreCreated && typeof plugin.onStoreCreated !== 'function', 'Plugin onStoreCreated must be a function'], [plugin.onModel && typeof plugin.onModel !== 'function', 'Plugin onModel must be a function'], [plugin.middleware && typeof plugin.middleware !== 'function', 'Plugin middleware must be a function']]);

      if (plugin.onInit) {
        plugin.onInit.call(this);
      }

      var result = {};

      if (plugin.exposed) {
        for (var _i = 0, _a = Object.keys(plugin.exposed); _i < _a.length; _i++) {
          var key = _a[_i];
          this[key] = typeof plugin.exposed[key] === 'function' ? plugin.exposed[key].bind(this) // bind functions to plugin class
          : Object.create(plugin.exposed[key]); // add exposed to plugin class
        }
      }

      for (var _b = 0, _c = ['onModel', 'middleware', 'onStoreCreated']; _b < _c.length; _b++) {
        var method = _c[_b];

        if (plugin[method]) {
          result[method] = plugin[method].bind(this);
        }
      }

      return result;
    }
  };
}; //# sourceMappingURL=pluginFactory.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/dispatch.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/dispatch.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Dispatch Plugin
 *
 * generates dispatch[modelName][actionName]
 */

var dispatchPlugin = {
  exposed: {
    // required as a placeholder for store.dispatch
    storeDispatch: function storeDispatch() {
      console.warn('Warning: store not yet loaded');
    },
    storeGetState: function storeGetState() {
      console.warn('Warning: store not yet loaded');
    },

    /**
     * dispatch
     *
     * both a function (dispatch) and an object (dispatch[modelName][actionName])
     * @param action T.Action
     */
    dispatch: function dispatch(action) {
      return this.storeDispatch(action);
    },

    /**
     * createDispatcher
     *
     * genereates an action creator for a given model & reducer
     * @param modelName string
     * @param reducerName string
     */
    createDispatcher: function createDispatcher(modelName, reducerName) {
      var _this = this;

      return function (payload, meta) {
        return __awaiter(_this, void 0, void 0, function () {
          var action;
          return __generator(this, function () {
            action = {
              type: modelName + "/" + reducerName
            };

            if (typeof payload !== 'undefined') {
              action.payload = payload;
            }

            if (typeof meta !== 'undefined') {
              action.meta = meta;
            }

            return [2
            /*return*/
            , this.dispatch(action)];
          });
        });
      };
    }
  },
  onStoreCreated: function onStoreCreated(store) {
    this.storeDispatch = store.dispatch;
    this.storeGetState = store.getState;
    return {
      dispatch: this.dispatch
    };
  },
  // generate action creators for all model.reducers
  onModel: function onModel(model) {
    this.dispatch[model.name] = {};

    if (!model.reducers) {
      return;
    }

    for (var _i = 0, _a = Object.keys(model.reducers); _i < _a.length; _i++) {
      var reducerName = _a[_i];
      this.validate([[!!reducerName.match(/\/.+\//), "Invalid reducer name (" + model.name + "/" + reducerName + ")"], [typeof model.reducers[reducerName] !== 'function', "Invalid reducer (" + model.name + "/" + reducerName + "). Must be a function"]]);
      this.dispatch[model.name][reducerName] = this.createDispatcher.apply(this, [model.name, reducerName]);
    }
  }
};
exports.default = dispatchPlugin; //# sourceMappingURL=dispatch.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/effects.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/effects.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Effects Plugin
 *
 * Plugin for handling async actions
 */

var effectsPlugin = {
  exposed: {
    // expose effects for access from dispatch plugin
    effects: {}
  },
  // add effects to dispatch so that dispatch[modelName][effectName] calls an effect
  onModel: function onModel(model) {
    if (!model.effects) {
      return;
    }

    var effects = typeof model.effects === 'function' ? model.effects(this.dispatch) : model.effects;
    this.validate([[typeof effects !== 'object', "Invalid effects from Model(" + model.name + "), effects should return an object"]]);

    for (var _i = 0, _a = Object.keys(effects); _i < _a.length; _i++) {
      var effectName = _a[_i];
      this.validate([[!!effectName.match(/\//), "Invalid effect name (" + model.name + "/" + effectName + ")"], [typeof effects[effectName] !== 'function', "Invalid effect (" + model.name + "/" + effectName + "). Must be a function"]]); // provide this.reducer() for effects

      this.effects[model.name + "/" + effectName] = effects[effectName].bind(this.dispatch[model.name]); // add effect to dispatch
      // is assuming dispatch is available already... that the dispatch plugin is in there

      this.dispatch[model.name][effectName] = this.createDispatcher.apply(this, [model.name, effectName]); // tag effects so they can be differentiated from normal actions

      this.dispatch[model.name][effectName].isEffect = true;
    }
  },
  // process async/await actions
  middleware: function middleware(store) {
    var _this = this;

    return function (next) {
      return function (action) {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!(action.type in this.effects)) return [3
                /*break*/
                , 2]; // effects that share a name with a reducer are called after their reducer counterpart

                return [4
                /*yield*/
                , next(action)];

              case 1:
                // effects that share a name with a reducer are called after their reducer counterpart
                _a.sent();

                return [2
                /*return*/
                , this.effects[action.type](action.payload, store.getState(), action.meta)];

              case 2:
                return [2
                /*return*/
                , next(action)];
            }
          });
        });
      };
    };
  }
};
exports.default = effectsPlugin; //# sourceMappingURL=effects.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/error.js":
/*!************************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/error.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultValue = {
  error: null,
  value: 0
};
var cntState = {
  global: __assign({}, defaultValue),
  models: {},
  effects: {}
};
var nextState = {
  global: __assign({}, cntState.global),
  models: __assign({}, cntState.models),
  effects: __assign({}, cntState.effects)
};

function fallback(value) {
  return value < 0 ? 0 : value;
}

var createErrorAction = function (converter, i) {
  return function (state, _a, error) {
    var _b, _c, _d;

    var name = _a.name,
        action = _a.action;
    nextState.global = {
      value: fallback(nextState.global.value + i),
      error: error
    };

    if (typeof nextState.models[name] === 'undefined') {
      nextState.models[name] = __assign({}, defaultValue);
    }

    nextState.models[name] = {
      value: fallback(nextState.models[name].value + i),
      error: error
    };

    if (typeof nextState.effects[name] === 'undefined') {
      nextState.effects[name] = {};
    }

    if (typeof nextState.effects[name][action] === 'undefined') {
      nextState.effects[name][action] = __assign({}, defaultValue);
    }

    nextState.effects[name][action] = {
      value: fallback(nextState.effects[name][action].value + i),
      error: error
    };
    return __assign(__assign({}, state), {
      global: converter(nextState.global),
      models: __assign(__assign({}, state.models), (_b = {}, _b[name] = converter(nextState.models[name]), _b)),
      effects: __assign(__assign({}, state.effects), (_c = {}, _c[name] = __assign(__assign({}, state.effects[name]), (_d = {}, _d[action] = converter(nextState.effects[name][action]), _d)), _c))
    });
  };
};

var validateConfig = function (config) {
  if (config.name && typeof config.name !== 'string') {
    throw new Error('error plugin config name must be a string');
  }

  if (config.asNumber && typeof config.asNumber !== 'boolean') {
    throw new Error('error plugin config asNumber must be a boolean');
  }

  if (config.whitelist && !Array.isArray(config.whitelist)) {
    throw new Error('error plugin config whitelist must be an array of strings');
  }

  if (config.blacklist && !Array.isArray(config.blacklist)) {
    throw new Error('error plugin config blacklist must be an array of strings');
  }

  if (config.whitelist && config.blacklist) {
    throw new Error('error plugin config cannot have both a whitelist & a blacklist');
  }
};

exports.default = function (config) {
  if (config === void 0) {
    config = {};
  }

  validateConfig(config);
  var errorModelName = config.name || 'error';
  var converter = config.asNumber === true ? function (cnt) {
    return cnt;
  } : function (cnt) {
    return __assign(__assign({}, cnt), {
      value: cnt.value > 0
    });
  };
  var error = {
    name: errorModelName,
    reducers: {
      hide: createErrorAction(converter, -1),
      show: createErrorAction(converter, 1)
    },
    state: __assign({}, cntState)
  };
  cntState.global = __assign({}, defaultValue);
  error.state.global = converter(cntState.global);
  return {
    config: {
      models: {
        error: error
      }
    },
    onModel: function onModel(_a) {
      var _this = this;

      var name = _a.name; // do not run dispatch on 'error' model

      if (name === errorModelName) {
        return;
      }

      cntState.models[name] = __assign({}, defaultValue);
      error.state.models[name] = converter(cntState.models[name]);
      error.state.effects[name] = {};
      var modelActions = this.dispatch[name]; // map over effects within models

      Object.keys(modelActions).forEach(function (action) {
        if (_this.dispatch[name][action].isEffect !== true) {
          return;
        }

        cntState.effects[name][action] = __assign({}, defaultValue);
        error.state.effects[name][action] = converter(cntState.effects[name][action]);
        var actionType = name + "/" + action; // ignore items not in whitelist

        if (config.whitelist && !config.whitelist.includes(actionType)) {
          return;
        } // ignore items in blacklist


        if (config.blacklist && config.blacklist.includes(actionType)) {
          return;
        } // copy orig effect pointer


        var origEffect = _this.dispatch[name][action]; // create function with pre & post error calls

        var effectWrapper = function () {
          var props = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            props[_i] = arguments[_i];
          }

          return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  // only clear when there has been a error
                  if (nextState.effects[name] && nextState.effects[name][action] && nextState.effects[name][action].error) {
                    this.dispatch.error.hide({
                      name: name,
                      action: action
                    }, null);
                  }

                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 3,, 4]);

                  return [4
                  /*yield*/
                  , origEffect.apply(void 0, props)];

                case 2:
                  return [2
                  /*return*/
                  , _a.sent()];

                case 3:
                  error_1 = _a.sent(); // display error on console

                  console.error(error_1);
                  this.dispatch.error.show({
                    name: name,
                    action: action
                  }, error_1);
                  return [3
                  /*break*/
                  , 4];

                case 4:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        effectWrapper.isEffect = true; // replace existing effect with new wrapper

        _this.dispatch[name][action] = effectWrapper;
      });
    }
  };
}; //# sourceMappingURL=error.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/immer.js":
/*!************************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/immer.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var immer_1 = __importStar(__webpack_require__(/*! immer */ "./node_modules/_immer@6.0.9@immer/dist/immer.esm.js"));

var redux_1 = __webpack_require__(/*! redux */ "./node_modules/_redux@4.0.5@redux/es/redux.js"); // make it work in IE11


immer_1.enableES5();

function createCombineReducersWithImmer(blacklist) {
  if (blacklist === void 0) {
    blacklist = [];
  }

  return function (reducers) {
    var reducersWithImmer = {}; // reducer must return value because literal don't support immer

    Object.keys(reducers).forEach(function (key) {
      var reducerFn = reducers[key];

      reducersWithImmer[key] = function (state, payload) {
        return typeof state === 'object' && !blacklist.includes(key) ? immer_1.default(state, function (draft) {
          var next = reducerFn(draft, payload);
          if (typeof next === 'object') return next;
        }) : reducerFn(state, payload);
      };
    });
    return redux_1.combineReducers(reducersWithImmer);
  };
} // icestore plugin


var immerPlugin = function (config) {
  if (config === void 0) {
    config = {};
  }

  return {
    config: {
      redux: {
        combineReducers: createCombineReducersWithImmer(config.blacklist)
      }
    }
  };
};

exports.default = immerPlugin; //# sourceMappingURL=immer.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/loading.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/loading.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cntState = {
  global: 0,
  models: {},
  effects: {}
};

var nextState = __assign(__assign({}, cntState), {
  models: __assign({}, cntState.models),
  effects: __assign({}, cntState.effects)
});

var createLoadingAction = function (converter, i) {
  return function (state, _a) {
    var _b, _c, _d;

    var name = _a.name,
        action = _a.action;
    nextState.global += i;

    if (typeof nextState.models[name] === 'undefined') {
      nextState.models[name] = 0;
    }

    nextState.models[name] += i;

    if (typeof nextState.effects[name] === 'undefined') {
      nextState.effects[name] = {};
    }

    if (typeof nextState.effects[name][action] === 'undefined') {
      nextState.effects[name][action] = 0;
    }

    nextState.effects[name][action] += i;
    return __assign(__assign({}, state), {
      global: converter(nextState.global),
      models: __assign(__assign({}, state.models), (_b = {}, _b[name] = converter(nextState.models[name]), _b)),
      effects: __assign(__assign({}, state.effects), (_c = {}, _c[name] = __assign(__assign({}, state.effects[name]), (_d = {}, _d[action] = converter(nextState.effects[name][action]), _d)), _c))
    });
  };
};

var validateConfig = function (config) {
  if (config.name && typeof config.name !== 'string') {
    throw new Error('loading plugin config name must be a string');
  }

  if (config.asNumber && typeof config.asNumber !== 'boolean') {
    throw new Error('loading plugin config asNumber must be a boolean');
  }

  if (config.whitelist && !Array.isArray(config.whitelist)) {
    throw new Error('loading plugin config whitelist must be an array of strings');
  }

  if (config.blacklist && !Array.isArray(config.blacklist)) {
    throw new Error('loading plugin config blacklist must be an array of strings');
  }

  if (config.whitelist && config.blacklist) {
    throw new Error('loading plugin config cannot have both a whitelist & a blacklist');
  }
};

exports.default = function (config) {
  if (config === void 0) {
    config = {};
  }

  validateConfig(config);
  var loadingModelName = config.name || 'loading';
  var converter = config.asNumber === true ? function (cnt) {
    return cnt;
  } : function (cnt) {
    return cnt > 0;
  };
  var loading = {
    name: loadingModelName,
    reducers: {
      hide: createLoadingAction(converter, -1),
      show: createLoadingAction(converter, 1)
    },
    state: __assign({}, cntState)
  };
  cntState.global = 0;
  loading.state.global = converter(cntState.global);
  return {
    config: {
      models: {
        loading: loading
      }
    },
    onModel: function onModel(_a) {
      var _this = this;

      var name = _a.name; // do not run dispatch on 'loading' model

      if (name === loadingModelName) {
        return;
      }

      cntState.models[name] = 0;
      loading.state.models[name] = converter(cntState.models[name]);
      loading.state.effects[name] = {};
      var modelActions = this.dispatch[name]; // map over effects within models

      Object.keys(modelActions).forEach(function (action) {
        if (_this.dispatch[name][action].isEffect !== true) {
          return;
        }

        cntState.effects[name][action] = 0;
        loading.state.effects[name][action] = converter(cntState.effects[name][action]);
        var actionType = name + "/" + action; // ignore items not in whitelist

        if (config.whitelist && !config.whitelist.includes(actionType)) {
          return;
        } // ignore items in blacklist


        if (config.blacklist && config.blacklist.includes(actionType)) {
          return;
        } // copy orig effect pointer


        var origEffect = _this.dispatch[name][action]; // create function with pre & post loading calls

        var effectWrapper = function () {
          var props = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            props[_i] = arguments[_i];
          }

          return __awaiter(_this, void 0, void 0, function () {
            var effectResult, error_1;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  _a.trys.push([0, 2,, 3]);

                  this.dispatch.loading.show({
                    name: name,
                    action: action
                  });
                  return [4
                  /*yield*/
                  , origEffect.apply(void 0, props)];

                case 1:
                  effectResult = _a.sent();
                  this.dispatch.loading.hide({
                    name: name,
                    action: action
                  });
                  return [2
                  /*return*/
                  , effectResult];

                case 2:
                  error_1 = _a.sent();
                  this.dispatch.loading.hide({
                    name: name,
                    action: action
                  });
                  throw error_1;

                case 3:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        effectWrapper.isEffect = true; // replace existing effect with new wrapper

        _this.dispatch[name][action] = effectWrapper;
      });
    }
  };
}; //# sourceMappingURL=loading.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/modelApis.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/modelApis.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/_rax@1.1.4@rax/lib/compat/index.js"));

var warning_1 = __importDefault(__webpack_require__(/*! ../utils/warning */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/warning.js"));

var warnedUseModelActions = false;
var warnedWithModelActions = false;
var warnedUseModelActionsState = false;
var warnedWithModelActionsState = false;
/**
 * ModelApis Plugin
 *
 * generates hooks for store
 */

exports.default = function () {
  return {
    onStoreCreated: function onStoreCreated(store) {
      // hooks
      function useModel(name) {
        var state = useModelState(name);
        var dispatchers = useModelDispatchers(name);
        return [state, dispatchers];
      }

      function useModelState(name) {
        var selector = store.useSelector(function (state) {
          return state[name];
        });

        if (typeof selector !== "undefined") {
          return selector;
        }

        throw new Error("Not found model by namespace: " + name + ".");
      }

      function useModelDispatchers(name) {
        var dispatch = store.useDispatch();

        if (dispatch[name]) {
          return dispatch[name];
        }

        throw new Error("Not found model by namespace: " + name + ".");
      }

      function useModelEffectsState(name) {
        var dispatch = useModelDispatchers(name);
        var effectsLoading = useModelEffectsLoading(name);
        var effectsError = useModelEffectsError(name);
        var states = {};
        Object.keys(dispatch).forEach(function (key) {
          states[key] = {
            isLoading: effectsLoading[key],
            error: effectsError[key] ? effectsError[key].error : null
          };
        });
        return states;
      }

      function useModelEffectsError(name) {
        return store.useSelector(function (state) {
          return state.error ? state.error.effects[name] : undefined;
        });
      }

      function useModelEffectsLoading(name) {
        return store.useSelector(function (state) {
          return state.loading ? state.loading.effects[name] : undefined;
        });
      }
      /**
       * @deprecated use `useModelEffectsState` instead
       */


      function useModelActionsState(name) {
        if (!warnedUseModelActionsState) {
          warnedUseModelActionsState = true;
          warning_1.default('`useModelActionsState` API has been detected, please use `useModelEffectsState` instead. \n\n\n Visit https://github.com/ice-lab/icestore/blob/master/docs/upgrade-guidelines.md#usemodelactionsstate to learn about how to upgrade.');
        }

        return useModelEffectsState(name);
      }
      /**
       * @deprecated use `useModelDispatchers` instead.
       */


      function useModelActions(name) {
        if (!warnedUseModelActions) {
          warnedUseModelActions = true;
          warning_1.default('`useModelActions` API has been detected, please use `useModelDispatchers` instead. \n\n\n Visit https://github.com/ice-lab/icestore/blob/master/docs/upgrade-guidelines.md#usemodelactions to learn about how to upgrade.');
        }

        return useModelDispatchers(name);
      } // other apis


      function getModel(name) {
        return [getModelState(name), getModelDispatchers(name)];
      }

      function getModelState(name) {
        return store.getState()[name];
      }

      function getModelDispatchers(name) {
        return store.dispatch[name];
      } // class component support


      function withModel(name, mapModelToProps) {
        mapModelToProps = mapModelToProps || function (model) {
          var _a;

          return _a = {}, _a[name] = model, _a;
        };

        return function (Component) {
          return function (props) {
            var value = useModel(name);
            var withProps = mapModelToProps(value);
            return react_1.default.createElement(Component, __assign({}, withProps, props));
          };
        };
      }

      var actionsSuffix = 'Actions';

      function createWithModelDispatchers(fieldSuffix) {
        if (fieldSuffix === void 0) {
          fieldSuffix = 'Dispatchers';
        }

        return function (name, mapModelDispatchersToProps) {
          if (fieldSuffix === actionsSuffix && !warnedWithModelActions) {
            warnedWithModelActions = true;
            warning_1.default('`withModelActions` API has been detected, please use `withModelDispatchers` instead. \n\n\n Visit https://github.com/ice-lab/icestore/blob/master/docs/upgrade-guidelines.md#withmodelactions to learn about how to upgrade.');
          }

          mapModelDispatchersToProps = mapModelDispatchersToProps || function (dispatch) {
            var _a;

            return _a = {}, _a["" + name + fieldSuffix] = dispatch, _a;
          };

          return function (Component) {
            return function (props) {
              var dispatchers = useModelDispatchers(name);
              var withProps = mapModelDispatchersToProps(dispatchers);
              return react_1.default.createElement(Component, __assign({}, withProps, props));
            };
          };
        };
      }

      var withModelDispatchers = createWithModelDispatchers();
      var actionsStateSuffix = 'ActionsState';

      function createWithModelEffectsState(fieldSuffix) {
        if (fieldSuffix === void 0) {
          fieldSuffix = 'EffectsState';
        }

        return function (name, mapModelEffectsStateToProps) {
          if (fieldSuffix === actionsStateSuffix && !warnedWithModelActionsState) {
            warnedWithModelActionsState = true;
            warning_1.default('`withModelActionsState` API has been detected, please use `withModelEffectsState` instead. \n\n\n Visit https://github.com/ice-lab/icestore/blob/master/docs/upgrade-guidelines.md#withmodelactionsstate to learn about how to upgrade.');
          }

          mapModelEffectsStateToProps = mapModelEffectsStateToProps || function (effectsState) {
            var _a;

            return _a = {}, _a["" + name + fieldSuffix] = effectsState, _a;
          };

          return function (Component) {
            return function (props) {
              var value = useModelEffectsState(name);
              var withProps = mapModelEffectsStateToProps(value);
              return react_1.default.createElement(Component, __assign({}, withProps, props));
            };
          };
        };
      }

      var withModelEffectsState = createWithModelEffectsState();

      function withModelEffectsError(name, mapModelEffectsErrorToProps) {
        mapModelEffectsErrorToProps = mapModelEffectsErrorToProps || function (errors) {
          var _a;

          return _a = {}, _a[name + "EffectsError"] = errors, _a;
        };

        return function (Component) {
          return function (props) {
            var value = useModelEffectsError(name);
            var withProps = mapModelEffectsErrorToProps(value);
            return react_1.default.createElement(Component, __assign({}, withProps, props));
          };
        };
      }

      function withModelEffectsLoading(name, mapModelEffectsLoadingToProps) {
        mapModelEffectsLoadingToProps = mapModelEffectsLoadingToProps || function (loadings) {
          var _a;

          return _a = {}, _a[name + "EffectsLoading"] = loadings, _a;
        };

        return function (Component) {
          return function (props) {
            var value = useModelEffectsLoading(name);
            var withProps = mapModelEffectsLoadingToProps(value);
            return react_1.default.createElement(Component, __assign({}, withProps, props));
          };
        };
      }

      return {
        getModelAPIs: function (name) {
          return {
            useValue: function useValue() {
              return useModel(name);
            },
            useState: function useState() {
              return useModelState(name);
            },
            useDispatchers: function useDispatchers() {
              return useModelDispatchers(name);
            },
            useEffectsState: function useEffectsState() {
              return useModelEffectsState(name);
            },
            useEffectsError: function useEffectsError() {
              return useModelEffectsError(name);
            },
            useEffectsLoading: function useEffectsLoading() {
              return useModelEffectsLoading(name);
            },
            getValue: function getValue() {
              return getModel(name);
            },
            getState: function getState() {
              return getModelState(name);
            },
            getDispatchers: function getDispatchers() {
              return getModelDispatchers(name);
            },
            withValue: function withValue(mapToProps) {
              return withModel(name, mapToProps);
            },
            withDispatchers: function withDispatchers(mapToProps) {
              return withModelDispatchers(name, mapToProps);
            },
            withEffectsState: function withEffectsState(mapToProps) {
              return withModelEffectsState(name, mapToProps);
            },
            withEffectsError: function withEffectsError(mapToProps) {
              return withModelEffectsError(name, mapToProps);
            },
            withEffectsLoading: function withEffectsLoading(mapToProps) {
              return withModelEffectsLoading(name, mapToProps);
            }
          };
        },
        // Hooks
        useModel: useModel,
        useModelState: useModelState,
        useModelDispatchers: useModelDispatchers,
        useModelEffectsState: useModelEffectsState,
        useModelEffectsError: useModelEffectsError,
        useModelEffectsLoading: useModelEffectsLoading,
        useModelActions: useModelActions,
        useModelActionsState: useModelActionsState,
        // real time
        getModel: getModel,
        getModelState: getModelState,
        getModelDispatchers: getModelDispatchers,
        // Class component support
        withModel: withModel,
        withModelDispatchers: withModelDispatchers,
        withModelEffectsState: withModelEffectsState,
        withModelEffectsError: withModelEffectsError,
        withModelEffectsLoading: withModelEffectsLoading,
        withModelActions: createWithModelDispatchers(actionsSuffix),
        withModelActionsState: createWithModelEffectsState(actionsStateSuffix)
      };
    }
  };
}; //# sourceMappingURL=modelApis.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/provider.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/provider.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/_rax@1.1.4@rax/lib/compat/index.js"));

var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/index.js");

var actionTypes_1 = __importDefault(__webpack_require__(/*! ../actionTypes */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/actionTypes.js"));

var SET_STATE = actionTypes_1.default.SET_STATE;

exports.default = function (_a) {
  var context = _a.context;
  return {
    onStoreCreated: function onStoreCreated(store) {
      return {
        Provider: function Provider(props) {
          var children = props.children,
              initialStates = props.initialStates;

          if (initialStates) {
            Object.keys(initialStates).forEach(function (name) {
              var initialState = initialStates[name];

              if (initialState && store.dispatch[name][SET_STATE]) {
                store.dispatch[name][SET_STATE](initialState);
              }
            });
          }

          return react_1.default.createElement(react_redux_1.Provider, {
            store: store,
            context: context
          }, children);
        },
        context: context
      };
    }
  };
}; //# sourceMappingURL=provider.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/reduxHooks.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/plugins/reduxHooks.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/index.js");
/**
 * Redux Hooks Plugin
 *
 * generates redux hooks for store
 */


exports.default = function (_a) {
  var context = _a.context;
  var useSelector = react_redux_1.createSelectorHook(context);
  var useDispatch = react_redux_1.createDispatchHook(context);
  return {
    onStoreCreated: function onStoreCreated() {
      return {
        useSelector: useSelector,
        useDispatch: useDispatch
      };
    }
  };
}; //# sourceMappingURL=reduxHooks.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/redux.js":
/*!****************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/redux.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Redux = __importStar(__webpack_require__(/*! redux */ "./node_modules/_redux@4.0.5@redux/es/redux.js"));

var isListener_1 = __importDefault(__webpack_require__(/*! ./utils/isListener */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/isListener.js"));

var composeEnhancersWithDevtools = function (devtoolOptions) {
  if (devtoolOptions === void 0) {
    devtoolOptions = {};
  }

  var disabled = devtoolOptions.disabled,
      options = __rest(devtoolOptions, ["disabled"]);
  /* istanbul ignore next */


  return !disabled && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(options) : Redux.compose;
};

function default_1(_a) {
  var _this = this;

  var redux = _a.redux,
      models = _a.models;
  var combineReducers = redux.combineReducers || Redux.combineReducers;
  var createStore = redux.createStore || Redux.createStore;
  var initialStates = typeof redux.initialStates !== 'undefined' ? redux.initialStates : {}; // Allows passing in of reducer functions, rather than models.
  // While not recommended,
  // this can be used for migrating a Redux codebase or configuring different Redux extensions.

  this.reducers = redux.reducers; // combine models to generate reducers

  this.mergeReducers = function (nextReducers) {
    if (nextReducers === void 0) {
      nextReducers = {};
    } // merge new reducers with existing reducers


    _this.reducers = __assign(__assign({}, _this.reducers), nextReducers);

    if (!Object.keys(_this.reducers).length) {
      // no reducers, just return state
      return function (state) {
        return state;
      };
    }

    return combineReducers(_this.reducers);
  };

  this.createModelReducer = function (model) {
    var modelBaseReducer = model.baseReducer;
    var modelReducers = {};

    for (var _i = 0, _a = Object.keys(model.reducers || {}); _i < _a.length; _i++) {
      var modelReducer = _a[_i];
      var action = isListener_1.default(modelReducer) ? modelReducer : model.name + "/" + modelReducer;
      modelReducers[action] = model.reducers[modelReducer];
    } // use the `state = model.state` argument convention popularized


    var combinedReducer = function (state, action) {
      if (state === void 0) {
        state = model.state;
      }

      if (typeof modelReducers[action.type] === 'function') {
        return modelReducers[action.type](state, action.payload, action.meta);
      }

      return state;
    };

    _this.reducers[model.name] = !modelBaseReducer ? combinedReducer : function (state, action) {
      return combinedReducer(modelBaseReducer(state, action), action);
    };
  }; // initialize model reducers


  for (var _i = 0, models_1 = models; _i < models_1.length; _i++) {
    var model = models_1[_i];
    this.createModelReducer(model);
  } // rootReducers is a way to setup middleware hooks at the base of your root reducer.
  // Unlike middleware, the return value is the next state.
  // If undefined, the state will fallback to the initial state of reducers.


  this.createRootReducer = function (rootReducers) {
    if (rootReducers === void 0) {
      rootReducers = {};
    }

    var mergedReducers = _this.mergeReducers();

    if (Object.keys(rootReducers).length) {
      return function (state, action) {
        var rootReducerAction = rootReducers[action.type];

        if (rootReducerAction) {
          return mergedReducers(rootReducerAction(state, action), action);
        }

        return mergedReducers(state, action);
      };
    }

    return mergedReducers;
  };

  var rootReducer = this.createRootReducer(redux.rootReducers);
  var middlewares = Redux.applyMiddleware.apply(Redux, redux.middlewares);
  var enhancers = composeEnhancersWithDevtools(redux.devtoolOptions).apply(void 0, __spreadArrays(redux.enhancers, [middlewares]));
  this.store = createStore(rootReducer, initialStates, enhancers);
  return this;
}

exports.default = default_1; //# sourceMappingURL=redux.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/types.js":
/*!****************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/types.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); //# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/appendReducers.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/appendReducers.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var actionTypes_1 = __importDefault(__webpack_require__(/*! ../actionTypes */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/actionTypes.js"));

var SET_STATE = actionTypes_1.default.SET_STATE;

function default_1(originModels) {
  var models = {};
  Object.keys(originModels).forEach(function (name) {
    var model = originModels[name];

    if (!model.reducers) {
      model.reducers = {};
    }

    if (!model.reducers.setState) {
      model.reducers.setState = function (state, payload) {
        return __assign(__assign({}, state), payload);
      };
    }

    if (!model.reducers[SET_STATE]) {
      model.reducers[SET_STATE] = function (state, payload) {
        return payload;
      };
    }

    models[name] = model;
  });
  return models;
}

exports.default = default_1; //# sourceMappingURL=appendReducers.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/converter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/converter.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertActions = exports.convertEffects = void 0;

var lodash_isfunction_1 = __importDefault(__webpack_require__(/*! lodash.isfunction */ "./node_modules/_lodash.isfunction@3.0.9@lodash.isfunction/index.js"));

var warning_1 = __importDefault(__webpack_require__(/*! ./warning */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/warning.js"));

var actionTypes_1 = __importDefault(__webpack_require__(/*! ../actionTypes */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/actionTypes.js"));

var SET_STATE = actionTypes_1.default.SET_STATE;
/**
 * convertEffects
 *
 * Compatible with 1.1.0 ~ 1.2.0
 * effects: {} => effects: () => ({})
 * @param originModels
 */

function convertEffects(originModels) {
  var models = {};
  Object.keys(originModels).forEach(function (name) {
    var model = originModels[name];
    var originEffects = model.effects;

    if (originEffects && !lodash_isfunction_1.default(originEffects)) {
      warning_1.default("Model(" + name + "): Defining effects as objects has been detected, please use `{ effects: () => ({ effectName: () => {} }) }` instead. \n\n\n Visit https://github.com/ice-lab/icestore/blob/master/docs/upgrade-guidelines.md#define-model-effects to learn about how to upgrade.");

      model.effects = function (dispatch) {
        var effects = {};
        Object.keys(originEffects).forEach(function (key) {
          var originEffect = originEffects[key];

          effects[key] = function (payload, rootState) {
            return originEffect(rootState[name], payload, dispatch[name], dispatch);
          };
        });
        return effects;
      };
    }

    models[name] = model;
  });
  return models;
}

exports.convertEffects = convertEffects;
/**
 * convertActions
 *
 * Compatible with 1.0.0 ~ 1.1.0
 * actions: {} => effects: () => ({})
 * @param originModels
 */

function convertActions(originModels) {
  var models = {};
  Object.keys(originModels).forEach(function (name) {
    var model = originModels[name];
    var actions = model.actions;

    if (actions) {
      warning_1.default("Model(" + name + "): The actions field has been detected, please use `reducers` and `effects` instead. Visit https://github.com/ice-lab/icestore/blob/master/docs/upgrade-guidelines.md#define-model-actions to learn about how to upgrade.");

      if (!model.reducers) {
        model.reducers = {};
      }

      model.effects = function (dispatch) {
        var effects = {};
        Object.keys(actions).forEach(function (key) {
          var originAction = actions[key];

          effects[key] = function (payload, rootState) {
            return __awaiter(this, void 0, void 0, function () {
              var result;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , originAction(rootState[name], payload, dispatch[name], dispatch)];

                  case 1:
                    result = _a.sent();

                    if (dispatch[name][SET_STATE]) {
                      dispatch[name][SET_STATE](result);
                    }

                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };
        });
        return effects;
      };
    }

    models[name] = model;
  });
  return models;
}

exports.convertActions = convertActions; //# sourceMappingURL=converter.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/isListener.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/isListener.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * isListener
 *
 * determines if an action is a listener on another model
 */

exports.default = function (reducer) {
  return reducer.indexOf('/') > -1;
}; //# sourceMappingURL=isListener.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/mergeConfig.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/mergeConfig.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var validate_1 = __importDefault(__webpack_require__(/*! ./validate */ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/validate.js"));

var merge = function (original, next) {
  return next ? __assign(__assign({}, next), original || {}) : original || {};
};

var isObject = function (obj) {
  return Array.isArray(obj) || typeof obj !== 'object';
};
/**
 * mergeConfig
 *
 * merge init configs together
 */


exports.default = function (initConfig) {
  var config = __assign(__assign({
    name: initConfig.name,
    models: {},
    plugins: []
  }, initConfig), {
    redux: __assign(__assign({
      reducers: {},
      rootReducers: {},
      enhancers: [],
      middlewares: []
    }, initConfig.redux), {
      devtoolOptions: __assign({
        name: initConfig.name
      }, initConfig.redux && initConfig.redux.devtoolOptions ? initConfig.redux.devtoolOptions : {})
    })
  });

  if (true) {
    validate_1.default([[!Array.isArray(config.plugins), 'init config.plugins must be an array'], [isObject(config.models), 'init config.models must be an object'], [isObject(config.redux.reducers), 'init config.redux.reducers must be an object'], [!Array.isArray(config.redux.middlewares), 'init config.redux.middlewares must be an array'], [!Array.isArray(config.redux.enhancers), 'init config.redux.enhancers must be an array of functions'], [config.redux.combineReducers && typeof config.redux.combineReducers !== 'function', 'init config.redux.combineReducers must be a function'], [config.redux.createStore && typeof config.redux.createStore !== 'function', 'init config.redux.createStore must be a function']]);
  } // defaults


  for (var _i = 0, _a = config.plugins; _i < _a.length; _i++) {
    var plugin = _a[_i];

    if (plugin.config) {
      // models
      var models = merge(config.models, plugin.config.models);
      config.models = models; // plugins

      config.plugins = __spreadArrays(config.plugins, plugin.config.plugins || []); // redux

      if (plugin.config.redux) {
        config.redux.initialStates = merge(config.redux.initialStates, plugin.config.redux.initialStates);
        config.redux.reducers = merge(config.redux.reducers, plugin.config.redux.reducers);
        config.redux.rootReducers = merge(config.redux.rootReducers, plugin.config.redux.reducers);
        config.redux.enhancers = __spreadArrays(config.redux.enhancers, plugin.config.redux.enhancers || []);
        config.redux.middlewares = __spreadArrays(config.redux.middlewares, plugin.config.redux.middlewares || []);
        config.redux.combineReducers = config.redux.combineReducers || plugin.config.redux.combineReducers;
        config.redux.createStore = config.redux.createStore || plugin.config.redux.createStore;
      }
    }
  }

  return config;
}; //# sourceMappingURL=mergeConfig.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/validate.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/validate.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * validate
 *
 * takes an array of arrays of validations and
 * throws if an error occurs
 */

var validate = function (validations) {
  if (true) {
    for (var _i = 0, validations_1 = validations; _i < validations_1.length; _i++) {
      var validation = validations_1[_i];
      var condition = validation[0];
      var errorMessage = validation[1];

      if (condition) {
        throw new Error(errorMessage);
      }
    }
  }
};

exports.default = validate; //# sourceMappingURL=validate.js.map

/***/ }),

/***/ "./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/warning.js":
/*!************************************************************************!*\
  !*** ./node_modules/_@ice_store@1.4.2@@ice/store/lib/utils/warning.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * warning
 *
 * Prints a warning in the console if it exists.
 * @param message The warning message.
 */

function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // 'break on all exceptions' in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

exports.default = warning; //# sourceMappingURL=warning.js.map

/***/ }),

/***/ "./node_modules/_immer@6.0.9@immer/dist/immer.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/_immer@6.0.9@immer/dist/immer.esm.js ***!
  \***********************************************************/
/*! exports provided: default, Immer, applyPatches, castDraft, castImmutable, createDraft, enableAllPlugins, enableES5, enableMapSet, enablePatches, finishDraft, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immer", function() { return nn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatches", function() { return an; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castDraft", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castImmutable", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraft", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableAllPlugins", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableES5", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableMapSet", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enablePatches", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishDraft", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immerable", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraftable", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "original", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produce", function() { return rn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produceWithPatches", function() { return en; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutoFreeze", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseProxies", function() { return un; });
function n(n) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), e = 1; e < t; e++) {
    r[e - 1] = arguments[e];
  }

  if (true) {
    var i = L[n],
        o = i ? "function" == typeof i ? i.apply(null, r) : i : "unknown error nr: " + n;
    throw Error("[Immer] " + o);
  }

  throw Error("[Immer] minified error nr: " + n + (r.length ? " " + r.join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}

function t(n) {
  return !!n && !!n[G];
}

function r(n) {
  return !!n && (function (n) {
    if (!n || "object" != typeof n) return !1;
    var t = Object.getPrototypeOf(n);
    return !t || t === Object.prototype;
  }(n) || Array.isArray(n) || !!n[B] || !!n.constructor[B] || c(n) || s(n));
}

function e(n) {
  if (n && n[G]) return n[G].t;
}

function i(n, t, r) {
  void 0 === r && (r = !1), 0 === o(n) ? (r ? Object.keys : Q)(n).forEach(function (r) {
    return t(r, n[r], n);
  }) : n.forEach(function (r, e) {
    return t(e, r, n);
  });
}

function o(n) {
  var t = n[G];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(n) ? 1 : c(n) ? 2 : s(n) ? 3 : 0;
}

function u(n, t) {
  return 2 === o(n) ? n.has(t) : Object.prototype.hasOwnProperty.call(n, t);
}

function a(n, t) {
  return 2 === o(n) ? n.get(t) : n[t];
}

function f(n, t) {
  return n === t ? 0 !== n || 1 / n == 1 / t : n != n && t != t;
}

function c(n) {
  return U && n instanceof Map;
}

function s(n) {
  return W && n instanceof Set;
}

function v(n) {
  return n.o || n.t;
}

function p(t, r) {
  if (void 0 === r && (r = !1), Array.isArray(t)) return t.slice();
  var e = Object.create(Object.getPrototypeOf(t));
  return i(t, function (i) {
    if (i !== G) {
      var o = Object.getOwnPropertyDescriptor(t, i),
          u = o.value;
      o.get && (r || n(1), u = o.get.call(t)), o.enumerable ? e[i] = u : Object.defineProperty(e, i, {
        value: u,
        writable: !0,
        configurable: !0
      });
    }
  }), e;
}

function d(n, e) {
  t(n) || h(n) || !r(n) || (o(n) > 1 && (n.set = n.add = n.clear = n.delete = l), Object.freeze(n), e && i(n, function (n, t) {
    return d(t, !0);
  }, !0));
}

function l() {
  n(2);
}

function h(n) {
  return null == n || "object" != typeof n || Object.isFrozen(n);
}

function y(t) {
  var r = V[t];
  return r || n( true ? 18 : undefined, t), r;
}

function b(n, t) {
  V[n] = t;
}

function m() {
  return  false || K || n(0), K;
}

function _(n, t) {
  t && (y("Patches"), n.u = [], n.s = [], n.v = t);
}

function j(n) {
  O(n), n.p.forEach(w), n.p = null;
}

function O(n) {
  n === K && (K = n.l);
}

function g(n) {
  return K = {
    p: [],
    l: K,
    h: n,
    m: !0,
    _: 0
  };
}

function w(n) {
  var t = n[G];
  0 === t.i || 1 === t.i ? t.j() : t.O = !0;
}

function S(t, e) {
  e._ = e.p.length;
  var i = e.p[0],
      o = void 0 !== t && t !== i;
  return e.h.g || y("ES5").S(e, t, o), o ? (i[G].P && (j(e), n(4)), r(t) && (t = P(e, t), e.l || A(e, t)), e.u && y("Patches").M(i[G], t, e.u, e.s)) : t = P(e, i, []), j(e), e.u && e.v(e.u, e.s), t !== q ? t : void 0;
}

function P(n, t, r) {
  if (h(t)) return t;
  var e = t[G];
  if (!e) return i(t, function (i, o) {
    return M(n, e, t, i, o, r);
  }, !0), t;
  if (e.A !== n) return t;
  if (!e.P) return A(n, e.t, !0), e.t;

  if (!e.I) {
    e.I = !0, e.A._--;
    var o = 4 === e.i || 5 === e.i ? e.o = p(e.k, !0) : e.o;
    i(o, function (t, i) {
      return M(n, e, o, t, i, r);
    }), A(n, o, !1), r && n.u && y("Patches").R(e, r, n.u, n.s);
  }

  return e.o;
}

function M(e, i, c, s, v, p) {
  if ( true && v === c && n(5), t(v)) {
    var d = P(e, v, p && i && 3 !== i.i && !u(i.D, s) ? p.concat(s) : void 0);
    if (h = s, y = d, 2 === (b = o(l = c)) ? l.set(h, y) : 3 === b ? (l.delete(h), l.add(y)) : l[h] = y, !t(d)) return;
    e.m = !1;
  }

  var l, h, y, b;

  if ((!i || !f(v, a(i.t, s))) && r(v)) {
    if (!e.h.N && e._ < 1) return;
    P(e, v), i && i.A.l || A(e, v);
  }
}

function A(n, t, r) {
  void 0 === r && (r = !1), n.h.N && n.m && d(t, r);
}

function x(n, t) {
  var r = n[G],
      e = Reflect.getOwnPropertyDescriptor(r ? v(r) : n, t);
  return e && e.value;
}

function z(n) {
  if (!n.P) {
    if (n.P = !0, 0 === n.i || 1 === n.i) {
      var t = n.o = p(n.t);
      i(n.p, function (n, r) {
        t[n] = r;
      }), n.p = void 0;
    }

    n.l && z(n.l);
  }
}

function I(n) {
  n.o || (n.o = p(n.t));
}

function E(n, t, r) {
  var e = c(t) ? y("MapSet").T(t, r) : s(t) ? y("MapSet").F(t, r) : n.g ? function (n, t) {
    var r = Array.isArray(n),
        e = {
      i: r ? 1 : 0,
      A: t ? t.A : m(),
      P: !1,
      I: !1,
      D: {},
      l: t,
      t: n,
      k: null,
      p: {},
      o: null,
      j: null,
      C: !1
    },
        i = e,
        o = Y;
    r && (i = [e], o = Z);
    var u = Proxy.revocable(i, o),
        a = u.revoke,
        f = u.proxy;
    return e.k = f, e.j = a, f;
  }(t, r) : y("ES5").J(t, r);
  return (r ? r.A : m()).p.push(e), e;
}

function k(n, t) {
  n.g ? z(t) : y("ES5").K(t);
}

function R() {
  function e(n, t) {
    var r = n[G];

    if (r && !r.$) {
      r.$ = !0;
      var e = n[t];
      return r.$ = !1, e;
    }

    return n[t];
  }

  function o(n) {
    n.P || (n.P = !0, n.l && o(n.l));
  }

  function a(n) {
    n.o || (n.o = c(n.t));
  }

  function c(n) {
    var t = n && n[G];

    if (t) {
      t.$ = !0;
      var r = p(t.k, !0);
      return t.$ = !1, r;
    }

    return p(n);
  }

  function s(n) {
    for (var t = n.length - 1; t >= 0; t--) {
      var r = n[t][G];
      if (!r.P) switch (r.i) {
        case 5:
          l(r) && o(r);
          break;

        case 4:
          d(r) && o(r);
      }
    }
  }

  function d(n) {
    for (var t = n.t, r = n.k, e = Object.keys(r), i = e.length - 1; i >= 0; i--) {
      var o = e[i],
          a = t[o];
      if (void 0 === a && !u(t, o)) return !0;
      var c = r[o],
          s = c && c[G];
      if (s ? s.t !== a : !f(c, a)) return !0;
    }

    return e.length !== Object.keys(t).length;
  }

  function l(n) {
    var t = n.k;
    if (t.length !== n.t.length) return !0;
    var r = Object.getOwnPropertyDescriptor(t, t.length - 1);
    return !(!r || r.get);
  }

  function h(t) {
    t.O && n(3, JSON.stringify(v(t)));
  }

  var y = {};
  b("ES5", {
    J: function (n, t) {
      var u = Array.isArray(n),
          s = c(n);
      i(s, function (t) {
        !function (n, t, i) {
          var u = y[t];
          u ? u.enumerable = i : y[t] = u = {
            enumerable: i,
            get: function get() {
              return function (n, t) {
                h(n);
                var i = e(v(n), t);
                return n.$ ? i : i === e(n.t, t) && r(i) ? (a(n), n.o[t] = E(n.A.h, i, n)) : i;
              }(this[G], t);
            },
            set: function set(n) {
              !function (n, t, r) {
                if (h(n), n.D[t] = !0, !n.P) {
                  if (f(r, e(v(n), t))) return;
                  o(n), a(n);
                }

                n.o[t] = r;
              }(this[G], t, n);
            }
          }, Object.defineProperty(n, t, u);
        }(s, t, u || function (n, t) {
          var r = Object.getOwnPropertyDescriptor(n, t);
          return !(!r || !r.enumerable);
        }(n, t));
      });
      var p = {
        i: u ? 5 : 4,
        A: t ? t.A : m(),
        P: !1,
        $: !1,
        I: !1,
        D: {},
        l: t,
        t: n,
        k: s,
        o: null,
        O: !1,
        C: !1
      };
      return Object.defineProperty(s, G, {
        value: p,
        writable: !0
      }), s;
    },
    K: o,
    S: function (n, r, e) {
      n.p.forEach(function (n) {
        n[G].$ = !0;
      }), e ? t(r) && r[G].A === n && s(n.p) : (n.u && function n(t) {
        if (t && "object" == typeof t) {
          var r = t[G];

          if (r) {
            var e = r.t,
                a = r.k,
                f = r.D,
                c = r.i;
            if (4 === c) i(a, function (t) {
              t !== G && (void 0 !== e[t] || u(e, t) ? f[t] || n(a[t]) : (f[t] = !0, o(r)));
            }), i(e, function (n) {
              void 0 !== a[n] || u(a, n) || (f[n] = !1, o(r));
            });else if (5 === c) {
              if (l(r) && (o(r), f.length = !0), a.length < e.length) for (var s = a.length; s < e.length; s++) {
                f[s] = !1;
              } else for (var v = e.length; v < a.length; v++) {
                f[v] = !0;
              }

              for (var p = Math.min(a.length, e.length), d = 0; d < p; d++) {
                void 0 === f[d] && n(a[d]);
              }
            }
          }
        }
      }(n.p[0]), s(n.p));
    }
  });
}

function D() {
  function r(n) {
    if (!n || "object" != typeof n) return n;
    if (Array.isArray(n)) return n.map(r);
    if (c(n)) return new Map(Array.from(n.entries()).map(function (n) {
      return [n[0], r(n[1])];
    }));
    if (s(n)) return new Set(Array.from(n).map(r));
    var t = Object.create(Object.getPrototypeOf(n));

    for (var e in n) {
      t[e] = r(n[e]);
    }

    return t;
  }

  function e(n) {
    return t(n) ? r(n) : n;
  }

  var f = "add";
  b("Patches", {
    U: function (t, e) {
      return e.forEach(function (e) {
        for (var i = e.path, u = e.op, c = t, s = 0; s < i.length - 1; s++) {
          "object" != typeof (c = a(c, i[s])) && n(15, i.join("/"));
        }

        var v = o(c),
            p = r(e.value),
            d = i[i.length - 1];

        switch (u) {
          case "replace":
            switch (v) {
              case 2:
                return c.set(d, p);

              case 3:
                n(16);

              default:
                return c[d] = p;
            }

          case f:
            switch (v) {
              case 1:
                return c.splice(d, 0, p);

              case 2:
                return c.set(d, p);

              case 3:
                return c.add(p);

              default:
                return c[d] = p;
            }

          case "remove":
            switch (v) {
              case 1:
                return c.splice(d, 1);

              case 2:
                return c.delete(d);

              case 3:
                return c.delete(e.value);

              default:
                return delete c[d];
            }

          default:
            n(17, u);
        }
      }), t;
    },
    R: function (n, t, r, o) {
      switch (n.i) {
        case 0:
        case 4:
        case 2:
          return function (n, t, r, o) {
            var c = n.t,
                s = n.o;
            i(n.D, function (n, i) {
              var v = a(c, n),
                  p = a(s, n),
                  d = i ? u(c, n) ? "replace" : f : "remove";

              if (v !== p || "replace" !== d) {
                var l = t.concat(n);
                r.push("remove" === d ? {
                  op: d,
                  path: l
                } : {
                  op: d,
                  path: l,
                  value: p
                }), o.push(d === f ? {
                  op: "remove",
                  path: l
                } : "remove" === d ? {
                  op: f,
                  path: l,
                  value: e(v)
                } : {
                  op: "replace",
                  path: l,
                  value: e(v)
                });
              }
            });
          }(n, t, r, o);

        case 5:
        case 1:
          return function (n, t, r, i) {
            var o = n.t,
                u = n.D,
                a = n.o;

            if (a.length < o.length) {
              var c = [a, o];
              o = c[0], a = c[1];
              var s = [i, r];
              r = s[0], i = s[1];
            }

            for (var v = a.length - o.length, p = 0; o[p] === a[p] && p < o.length;) {
              ++p;
            }

            for (var d = o.length; d > p && o[d - 1] === a[d + v - 1];) {
              --d;
            }

            for (var l = p; l < d; ++l) {
              if (u[l] && a[l] !== o[l]) {
                var h = t.concat([l]);
                r.push({
                  op: "replace",
                  path: h,
                  value: e(a[l])
                }), i.push({
                  op: "replace",
                  path: h,
                  value: e(o[l])
                });
              }
            }

            for (var y = r.length, b = d + v - 1; b >= d; --b) {
              var m = t.concat([b]);
              r[y + b - d] = {
                op: f,
                path: m,
                value: e(a[b])
              }, i.push({
                op: "remove",
                path: m
              });
            }
          }(n, t, r, o);

        case 3:
          return function (n, t, r, e) {
            var i = n.t,
                o = n.o,
                u = 0;
            i.forEach(function (n) {
              if (!o.has(n)) {
                var i = t.concat([u]);
                r.push({
                  op: "remove",
                  path: i,
                  value: n
                }), e.unshift({
                  op: f,
                  path: i,
                  value: n
                });
              }

              u++;
            }), u = 0, o.forEach(function (n) {
              if (!i.has(n)) {
                var o = t.concat([u]);
                r.push({
                  op: f,
                  path: o,
                  value: n
                }), e.unshift({
                  op: "remove",
                  path: o,
                  value: n
                });
              }

              u++;
            });
          }(n, t, r, o);
      }
    },
    M: function (n, t, r, e) {
      r.push({
        op: "replace",
        path: [],
        value: t
      }), e.push({
        op: "replace",
        path: [],
        value: n.t
      });
    }
  });
}

function N() {
  function t(n, t) {
    function r() {
      this.constructor = n;
    }

    _u(n, t), n.prototype = (r.prototype = t.prototype, new r());
  }

  function e(n) {
    n.o || (n.D = new Map(), n.o = new Map(n.t));
  }

  function i(n) {
    n.o || (n.o = new Set(), n.t.forEach(function (t) {
      if (r(t)) {
        var e = E(n.A.h, t, n);
        n.p.set(t, e), n.o.add(e);
      } else n.o.add(t);
    }));
  }

  function o(t) {
    t.O && n(3, JSON.stringify(v(t)));
  }

  var _u = function (n, t) {
    return (_u = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (n, t) {
      n.__proto__ = t;
    } || function (n, t) {
      for (var r in t) {
        t.hasOwnProperty(r) && (n[r] = t[r]);
      }
    })(n, t);
  },
      a = function () {
    function n(n, t) {
      return this[G] = {
        i: 2,
        l: t,
        A: t ? t.A : m(),
        P: !1,
        I: !1,
        o: void 0,
        D: void 0,
        t: n,
        k: this,
        C: !1,
        O: !1
      }, this;
    }

    t(n, Map);
    var i = n.prototype;
    return Object.defineProperty(i, "size", {
      get: function get() {
        return v(this[G]).size;
      }
    }), i.has = function (n) {
      return v(this[G]).has(n);
    }, i.set = function (n, t) {
      var r = this[G];
      return o(r), v(r).get(n) !== t && (e(r), k(r.A.h, r), r.D.set(n, !0), r.o.set(n, t), r.D.set(n, !0)), this;
    }, i.delete = function (n) {
      if (!this.has(n)) return !1;
      var t = this[G];
      return o(t), e(t), k(t.A.h, t), t.D.set(n, !1), t.o.delete(n), !0;
    }, i.clear = function () {
      var n = this[G];
      return o(n), e(n), k(n.A.h, n), n.D = new Map(), n.o.clear();
    }, i.forEach = function (n, t) {
      var r = this;
      v(this[G]).forEach(function (e, i) {
        n.call(t, r.get(i), i, r);
      });
    }, i.get = function (n) {
      var t = this[G];
      o(t);
      var i = v(t).get(n);
      if (t.I || !r(i)) return i;
      if (i !== t.t.get(n)) return i;
      var u = E(t.A.h, i, t);
      return e(t), t.o.set(n, u), u;
    }, i.keys = function () {
      return v(this[G]).keys();
    }, i.values = function () {
      var n,
          t = this,
          r = this.keys();
      return (n = {})[H] = function () {
        return t.values();
      }, n.next = function () {
        var n = r.next();
        return n.done ? n : {
          done: !1,
          value: t.get(n.value)
        };
      }, n;
    }, i.entries = function () {
      var n,
          t = this,
          r = this.keys();
      return (n = {})[H] = function () {
        return t.entries();
      }, n.next = function () {
        var n = r.next();
        if (n.done) return n;
        var e = t.get(n.value);
        return {
          done: !1,
          value: [n.value, e]
        };
      }, n;
    }, i[H] = function () {
      return this.entries();
    }, n;
  }(),
      f = function () {
    function n(n, t) {
      return this[G] = {
        i: 3,
        l: t,
        A: t ? t.A : m(),
        P: !1,
        I: !1,
        o: void 0,
        t: n,
        k: this,
        p: new Map(),
        O: !1,
        C: !1
      }, this;
    }

    t(n, Set);
    var r = n.prototype;
    return Object.defineProperty(r, "size", {
      get: function get() {
        return v(this[G]).size;
      }
    }), r.has = function (n) {
      var t = this[G];
      return o(t), t.o ? !!t.o.has(n) || !(!t.p.has(n) || !t.o.has(t.p.get(n))) : t.t.has(n);
    }, r.add = function (n) {
      var t = this[G];
      return o(t), this.has(n) || (i(t), k(t.A.h, t), t.o.add(n)), this;
    }, r.delete = function (n) {
      if (!this.has(n)) return !1;
      var t = this[G];
      return o(t), i(t), k(t.A.h, t), t.o.delete(n) || !!t.p.has(n) && t.o.delete(t.p.get(n));
    }, r.clear = function () {
      var n = this[G];
      return o(n), i(n), k(n.A.h, n), n.o.clear();
    }, r.values = function () {
      var n = this[G];
      return o(n), i(n), n.o.values();
    }, r.entries = function () {
      var n = this[G];
      return o(n), i(n), n.o.entries();
    }, r.keys = function () {
      return this.values();
    }, r[H] = function () {
      return this.values();
    }, r.forEach = function (n, t) {
      for (var r = this.values(), e = r.next(); !e.done;) {
        n.call(t, e.value, e.value, this), e = r.next();
      }
    }, n;
  }();

  b("MapSet", {
    T: function (n, t) {
      return new a(n, t);
    },
    F: function (n, t) {
      return new f(n, t);
    }
  });
}

function T() {
  R(), N(), D();
}

function F(n) {
  return n;
}

function C(n) {
  return n;
}

var J,
    K,
    $ = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
    U = "undefined" != typeof Map,
    W = "undefined" != typeof Set,
    X = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
    q = $ ? Symbol("immer-nothing") : ((J = {})["immer-nothing"] = !0, J),
    B = $ ? Symbol("immer-draftable") : "__$immer_draftable",
    G = $ ? Symbol("immer-state") : "__$immer_state",
    H = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator",
    L = {
  0: "Illegal state",
  1: "Immer drafts cannot have computed properties",
  2: "This object has been frozen and should not be mutated",
  3: function (n) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
  },
  4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  5: "Immer forbids circular references",
  6: "The first or second argument to `produce` must be a function",
  7: "The third argument to `produce` must be a function or undefined",
  8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
  10: "The given draft is already finalized",
  11: "Object.defineProperty() cannot be used on an Immer draft",
  12: "Object.setPrototypeOf() cannot be used on an Immer draft",
  13: "Immer only supports deleting array indices",
  14: "Immer only supports setting array indices and the 'length' property",
  15: function (n) {
    return "Cannot apply patch, path doesn't resolve: " + n;
  },
  16: 'Sets cannot have "replace" patches.',
  17: function (n) {
    return "Unsupported patch operation: " + n;
  },
  18: function (n) {
    return "The plugin for '" + n + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n + "()` when initializing your application.";
  },
  19: function (n) {
    return "plugin not loaded: " + n;
  },
  20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available"
},
    Q = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (n) {
  return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
} : Object.getOwnPropertyNames,
    V = {},
    Y = {
  get: function get(n, t) {
    if (t === G) return n;
    var e = n.p;
    if (!n.P && u(e, t)) return e[t];
    var i = v(n)[t];
    if (n.I || !r(i)) return i;

    if (n.P) {
      if (i !== x(n.t, t)) return i;
      e = n.o;
    }

    return e[t] = E(n.A.h, i, n);
  },
  has: function has(n, t) {
    return t in v(n);
  },
  ownKeys: function ownKeys(n) {
    return Reflect.ownKeys(v(n));
  },
  set: function set(n, t, r) {
    if (!n.P) {
      var e = x(n.t, t);
      if (r ? f(e, r) || r === n.p[t] : f(e, r) && t in n.t) return !0;
      I(n), z(n);
    }

    return n.D[t] = !0, n.o[t] = r, !0;
  },
  deleteProperty: function deleteProperty(n, t) {
    return void 0 !== x(n.t, t) || t in n.t ? (n.D[t] = !1, I(n), z(n)) : n.D[t] && delete n.D[t], n.o && delete n.o[t], !0;
  },
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(n, t) {
    var r = v(n),
        e = Reflect.getOwnPropertyDescriptor(r, t);
    return e && (e.writable = !0, e.configurable = 1 !== n.i || "length" !== t), e;
  },
  defineProperty: function defineProperty() {
    n(11);
  },
  getPrototypeOf: function getPrototypeOf(n) {
    return Object.getPrototypeOf(n.t);
  },
  setPrototypeOf: function setPrototypeOf() {
    n(12);
  }
},
    Z = {};
i(Y, function (n, t) {
  Z[n] = function () {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Z.deleteProperty = function (t, r) {
  return  true && isNaN(parseInt(r)) && n(13), Y.deleteProperty.call(this, t[0], r);
}, Z.set = function (t, r, e) {
  return  true && "length" !== r && isNaN(parseInt(r)) && n(14), Y.set.call(this, t[0], r, e, t[0]);
};

var nn = function () {
  function e(n) {
    this.g = X, this.N = "production" !== "development", "boolean" == typeof (null == n ? void 0 : n.useProxies) && this.setUseProxies(n.useProxies), "boolean" == typeof (null == n ? void 0 : n.autoFreeze) && this.setAutoFreeze(n.autoFreeze), this.produce = this.produce.bind(this), this.produceWithPatches = this.produceWithPatches.bind(this);
  }

  var i = e.prototype;
  return i.produce = function (t, e, i) {
    if ("function" == typeof t && "function" != typeof e) {
      var o = e;
      e = t;
      var u = this;
      return function (n) {
        var t = this;
        void 0 === n && (n = o);

        for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) {
          i[a - 1] = arguments[a];
        }

        return u.produce(n, function (n) {
          var r;
          return (r = e).call.apply(r, [t, n].concat(i));
        });
      };
    }

    var a;

    if ("function" != typeof e && n(6), void 0 !== i && "function" != typeof i && n(7), r(t)) {
      var f = g(this),
          c = E(this, t, void 0),
          s = !0;

      try {
        a = e(c), s = !1;
      } finally {
        s ? j(f) : O(f);
      }

      return "undefined" != typeof Promise && a instanceof Promise ? a.then(function (n) {
        return _(f, i), S(n, f);
      }, function (n) {
        throw j(f), n;
      }) : (_(f, i), S(a, f));
    }

    if ((a = e(t)) !== q) return void 0 === a && (a = t), this.N && d(a, !0), a;
  }, i.produceWithPatches = function (n, t) {
    var r,
        e,
        i = this;
    return "function" == typeof n ? function (t) {
      for (var r = arguments.length, e = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) {
        e[o - 1] = arguments[o];
      }

      return i.produceWithPatches(t, function (t) {
        return n.apply(void 0, [t].concat(e));
      });
    } : [this.produce(n, t, function (n, t) {
      r = n, e = t;
    }), r, e];
  }, i.createDraft = function (t) {
    r(t) || n(8);
    var e = g(this),
        i = E(this, t, void 0);
    return i[G].C = !0, O(e), i;
  }, i.finishDraft = function (t, r) {
    var e = t && t[G];
     true && (e && e.C || n(9), e.I && n(10));
    var i = e.A;
    return _(i, r), S(void 0, i);
  }, i.setAutoFreeze = function (n) {
    this.N = n;
  }, i.setUseProxies = function (t) {
    X || n(20), this.g = t;
  }, i.applyPatches = function (n, r) {
    var e;

    for (e = r.length - 1; e >= 0; e--) {
      var i = r[e];

      if (0 === i.path.length && "replace" === i.op) {
        n = i.value;
        break;
      }
    }

    var o = y("Patches").U;
    return t(n) ? o(n, r) : this.produce(n, function (n) {
      return o(n, r.slice(e + 1));
    });
  }, e;
}(),
    tn = new nn(),
    rn = tn.produce,
    en = tn.produceWithPatches.bind(tn),
    on = tn.setAutoFreeze.bind(tn),
    un = tn.setUseProxies.bind(tn),
    an = tn.applyPatches.bind(tn),
    fn = tn.createDraft.bind(tn),
    cn = tn.finishDraft.bind(tn);

/* harmony default export */ __webpack_exports__["default"] = (rn);
 //# sourceMappingURL=immer.esm.js.map

/***/ }),

/***/ "./node_modules/_invariant@2.2.4@invariant/browser.js":
/*!************************************************************!*\
  !*** ./node_modules/_invariant@2.2.4@invariant/browser.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

module.exports = invariant;

/***/ }),

/***/ "./node_modules/_lodash.isfunction@3.0.9@lodash.isfunction/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_lodash.isfunction@3.0.9@lodash.isfunction/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    nullTag = '[object Null]',
    proxyTag = '[object Proxy]',
    undefinedTag = '[object Undefined]';
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var Symbol = root.Symbol,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */


function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (isOwn) {
    value[symToStringTag] = tag;
  } else {
    delete value[symToStringTag];
  }

  return result;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */


function objectToString(value) {
  return nativeObjectToString.call(value);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */


function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isFunction;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../_webpack@4.44.2@webpack/buildin/global.js */ "./node_modules/_webpack@4.44.2@webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/_prop-types@15.7.2@prop-types/checkPropTypes.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_prop-types@15.7.2@prop-types/checkPropTypes.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var printWarning = function () {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/_prop-types@15.7.2@prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/_prop-types@15.7.2@prop-types/lib/ReactPropTypesSecret.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_prop-types@15.7.2@prop-types/lib/ReactPropTypesSecret.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/_rax-children@1.0.0@rax-children/lib/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/_rax-children@1.0.0@rax-children/lib/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _rax = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");

var flattenChildren = _rax.shared.flattenChildren;

function convertChildrenToArray(children) {
  // flatten children
  children = flattenChildren(children, []);
  return Array.isArray(children) ? children : [].concat(children);
}

var Children = {
  map: function (children, fn, ctx) {
    if (children == null) return null;
    children = convertChildrenToArray(children);
    return children.map(function (child, index) {
      return fn.call(ctx, child, index);
    });
  },
  forEach: function (children, fn, ctx) {
    if (children == null) return null;
    children = convertChildrenToArray(children);
    children.forEach(function (child, index) {
      return fn.call(ctx, child, index);
    });
  },
  count: function (children) {
    if (children == null) return 0;
    return convertChildrenToArray(children).length;
  },
  only: function (children) {
    // `only` receive rax element child
    // null value is not acceptable
    children = Children.toArray(children);
    if (children.length !== 1) throw new Error('Children.only: expected to receive a single element child.');
    return children[0];
  },
  toArray: function (children) {
    if (children == null) return []; // `toArray` filter null value

    return convertChildrenToArray(children).filter(function (child) {
      return child !== null;
    });
  }
};
var _default = Children;
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax-clone-element@1.0.0@rax-clone-element/lib/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_rax-clone-element@1.0.0@rax-clone-element/lib/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = cloneElement;

var _rax = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");

var _raxIsValidElement = _interopRequireDefault(__webpack_require__(/*! rax-is-valid-element */ "./node_modules/_rax-is-valid-element@1.0.0@rax-is-valid-element/lib/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var Host = _rax.shared.Host,
    Element = _rax.shared.Element,
    flattenChildren = _rax.shared.flattenChildren;
var RESERVED_PROPS = {
  key: true,
  ref: true
};

function cloneElement(element, config) {
  if (!(0, _raxIsValidElement.default)(element)) {
    throw Error('cloneElement: not a valid element.');
  } // Original props are copied


  var props = Object.assign({}, element.props); // Reserved names are extracted

  var key = element.key;
  var ref = element.ref; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config) {
    // Should reset ref and owner if has a new ref
    if (config.ref !== undefined) {
      ref = config.ref;
      owner = Host.owner;
    }

    if (config.key !== undefined) {
      key = String(config.key);
    } // Resolve default props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    } // Remaining properties override existing props


    for (var propName in config) {
      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if (children.length) {
    props.children = flattenChildren(children);
  }

  return new Element(element.type, key, ref, props, owner);
}

/***/ }),

/***/ "./node_modules/_rax-create-factory@1.0.0@rax-create-factory/lib/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_rax-create-factory@1.0.0@rax-create-factory/lib/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createFactory;

var _rax = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");

function createFactory(type) {
  var factory = _rax.createElement.bind(null, type); // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.


  factory.type = type;
  return factory;
}

/***/ }),

/***/ "./node_modules/_rax-is-valid-element@1.0.0@rax-is-valid-element/lib/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_rax-is-valid-element@1.0.0@rax-is-valid-element/lib/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isValidElement;

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.type && object.props;
}

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/components/Context.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/components/Context.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.ReactReduxContext = void 0;

var _rax = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");

var ReactReduxContext = (0, _rax.createContext)(null);
exports.ReactReduxContext = ReactReduxContext;
var _default = ReactReduxContext;
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/components/Provider.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/components/Provider.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _rax = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");

var _Context = __webpack_require__(/*! ./Context */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/components/Context.js");

var _Subscription = _interopRequireDefault(__webpack_require__(/*! ../utils/Subscription */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/Subscription.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = (0, _rax.useMemo)(function () {
    var subscription = new _Subscription.default(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = (0, _rax.useMemo)(function () {
    return store.getState();
  }, [store]);
  (0, _rax.useEffect)(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context.ReactReduxContext;
  return (0, _rax.createElement)(Context.Provider, {
    value: contextValue
  }, children);
} // Provider.propTypes = {
//   store: PropTypes.shape({
//     subscribe: PropTypes.func.isRequired,
//     dispatch: PropTypes.func.isRequired,
//     getState: PropTypes.func.isRequired
//   }),
//   context: PropTypes.object,
//   children: PropTypes.any
// }


var _default = Provider;
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/components/connectAdvanced.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/components/connectAdvanced.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = connectAdvanced;

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./node_modules/_invariant@2.2.4@invariant/browser.js"));

var _rax = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");

var _Subscription = _interopRequireDefault(__webpack_require__(/*! ../utils/Subscription */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/Subscription.js"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! ../utils/hoistNonReactStatics */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/hoistNonReactStatics.js"));

var _Context = __webpack_require__(/*! ./Context */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/components/Context.js");

var _isValidElementType = _interopRequireDefault(__webpack_require__(/*! ../utils/isValidElementType */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/isValidElementType.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
} // Define some constant arrays just to avoid re-creating these


var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function (Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

var initStateUpdates = function () {
  return [null, 0];
}; // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect because we want
// `connect` to perform sync updates to a ref to save the latest props after
// a render is actually committed to the DOM.


var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? _rax.useLayoutEffect : _rax.useEffect;

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === void 0 ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === void 0 ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === void 0 ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === void 0 ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === void 0 ? false : _ref$withRef,
      _ref$forwardRef = _ref.forwardRef,
      forwardRef = _ref$forwardRef === void 0 ? false : _ref$forwardRef,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? _Context.ReactReduxContext : _ref$context,
      connectOptions = _objectWithoutPropertiesLoose(_ref, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  (0, _invariant.default)(renderCountProp === undefined, 'renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension');
  (0, _invariant.default)(!withRef, 'withRef is removed. To access the wrapped instance, use a ref on the connected component');
  (0, _invariant.default)(storeKey === 'store', 'storeKey has been removed and does not do anything. ' + ('To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect'));
  var Context = context;
  return function (WrappedComponent) {
    if (true) {
      (0, _invariant.default)((0, _isValidElementType.default)(WrappedComponent), 'You must pass a component to the function returned by ' + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? _rax.useMemo : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = (0, _rax.useMemo)(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var forwardedRef = props.forwardedRef,
            wrapperProps = _objectWithoutPropertiesLoose(props, ["forwardedRef"]);

        return [props.context, forwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          forwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = (0, _rax.useMemo)(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer // && isContextConsumer(<propsContext.Consumer />)
        ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = (0, _rax.useContext)(ContextToUse); // The store _must_ exist as either a prop or in context

      var didStoreComeFromProps = Boolean(props.store);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
      (0, _invariant.default)(didStoreComeFromProps || didStoreComeFromContext, 'Could not find "store" in the context of ' + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + 'or pass a custom React context provider to <Provider> and the corresponding ' + ("React context consumer to " + displayName + " in connect options."));
      var store = props.store || contextValue.store;
      var childPropsSelector = (0, _rax.useMemo)(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = (0, _rax.useMemo)(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new _Subscription.default(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = (0, _rax.useMemo)(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return _extends({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = (0, _rax.useReducer)(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = (0, _rax.useRef)();
      var lastWrapperProps = (0, _rax.useRef)(wrapperProps);
      var childPropsFromStoreUpdate = (0, _rax.useRef)();
      var renderIsScheduled = (0, _rax.useRef)(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffect(function () {
        // We want to capture the wrapper props and child props we used for later comparisons
        lastWrapperProps.current = wrapperProps;
        lastChildProps.current = actualChildProps;
        renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

        if (childPropsFromStoreUpdate.current) {
          childPropsFromStoreUpdate.current = null;
          notifyNestedSubs();
        }
      }); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffect(function () {
        // If we're not subscribed to the store, nothing to do here
        if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

        var didUnsubscribe = false;
        var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

        var checkForUpdates = function () {
          if (didUnsubscribe) {
            // Don't run stale listeners.
            // Redux doesn't guarantee unsubscriptions happen until next dispatch.
            return;
          }

          var latestStoreState = store.getState();
          var newChildProps, error;

          try {
            // Actually run the selector with the most recent store state and wrapper props
            // to determine what the child props should be
            newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
          } catch (e) {
            error = e;
            lastThrownError = e;
          }

          if (!error) {
            lastThrownError = null;
          } // If the child props haven't changed, nothing to do here - cascade the subscription update


          if (newChildProps === lastChildProps.current) {
            if (!renderIsScheduled.current) {
              notifyNestedSubs();
            }
          } else {
            // Save references to the new child props.  Note that we track the "child props from store update"
            // as a ref instead of a useState/useReducer because we need a way to determine if that value has
            // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
            // forcing another re-render, which we don't want.
            lastChildProps.current = newChildProps;
            childPropsFromStoreUpdate.current = newChildProps;
            renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

            forceComponentUpdateDispatch({
              type: 'STORE_UPDATED',
              payload: {
                error: error
              }
            });
          }
        }; // Actually subscribe to the nearest connected ancestor (or store)


        subscription.onStateChange = checkForUpdates;
        subscription.trySubscribe(); // Pull data from the store after first render in case the store has
        // changed since we began.

        checkForUpdates();

        var unsubscribeWrapper = function () {
          didUnsubscribe = true;
          subscription.tryUnsubscribe();
          subscription.onStateChange = null;

          if (lastThrownError) {
            // It's possible that we caught an error due to a bad mapState function, but the
            // parent re-rendered without this component and we're about to unmount.
            // This shouldn't happen as long as we do top-down subscriptions correctly, but
            // if we ever do those wrong, this throw will surface the error in our tests.
            // In that case, throw the error from here so it doesn't get lost.
            throw lastThrownError;
          }
        };

        return unsubscribeWrapper;
      }, [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = (0, _rax.useMemo)(function () {
        return (0, _rax.createElement)(WrappedComponent, _extends({}, actualChildProps, {
          ref: forwardedRef
        }));
      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = (0, _rax.useMemo)(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return (0, _rax.createElement)(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? (0, _rax.memo)(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = (0, _rax.forwardRef)(function (props, ref) {
        return (0, _rax.createElement)(Connect, _extends({}, props, {
          forwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return (0, _hoistNonReactStatics.default)(forwarded, WrappedComponent);
    }

    return (0, _hoistNonReactStatics.default)(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/connect.js":
/*!************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/connect.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createConnect = createConnect;
exports.default = void 0;

var _connectAdvanced = _interopRequireDefault(__webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/components/connectAdvanced.js"));

var _shallowEqual = _interopRequireDefault(__webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/shallowEqual.js"));

var _mapDispatchToProps = _interopRequireDefault(__webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/mapDispatchToProps.js"));

var _mapStateToProps = _interopRequireDefault(__webpack_require__(/*! ./mapStateToProps */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/mapStateToProps.js"));

var _mergeProps = _interopRequireDefault(__webpack_require__(/*! ./mergeProps */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/mergeProps.js"));

var _selectorFactory = _interopRequireDefault(__webpack_require__(/*! ./selectorFactory */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/selectorFactory.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps

  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */


function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _connectAdvanced.default : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps.default : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps.default : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps.default : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory.default : _ref$selectorFactory;

  return function (mapStateToProps, mapDispatchToProps, mergeProps, _temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === void 0 ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === void 0 ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === void 0 ? _shallowEqual.default : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === void 0 ? _shallowEqual.default : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === void 0 ? _shallowEqual.default : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutPropertiesLoose(_ref2, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function (name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}

var _default = createConnect();

exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/mapDispatchToProps.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/mapDispatchToProps.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "./node_modules/_redux@4.0.5@redux/es/redux.js");

var _wrapMapToProps = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/wrapMapToProps.js");

function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
  }) : undefined;
}

var _default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/mapStateToProps.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/mapStateToProps.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;
exports.default = void 0;

var _wrapMapToProps = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
    return {};
  }) : undefined;
}

var _default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/mergeProps.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/mergeProps.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMergeProps = defaultMergeProps;
exports.wrapMergePropsFunc = wrapMergePropsFunc;
exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;
exports.default = void 0;

var _verifyPlainObject = _interopRequireDefault(__webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/verifyPlainObject.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function (dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function (stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) (0, _verifyPlainObject.default)(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

var _default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/selectorFactory.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/selectorFactory.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
exports.default = finalPropsSelectorFactory;

var _verifySubselectors = _interopRequireDefault(__webpack_require__(/*! ./verifySubselectors */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/verifySubselectors.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function (state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function (nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.


function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    (0, _verifySubselectors.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/verifySubselectors.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/verifySubselectors.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = verifySubselectors;

var _warning = _interopRequireDefault(__webpack_require__(/*! ../utils/warning */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/warning.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      (0, _warning.default)("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/wrapMapToProps.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/wrapMapToProps.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
exports.getDependsOnOwnProps = getDependsOnOwnProps;
exports.wrapMapToPropsFunc = wrapMapToPropsFunc;

var _verifyPlainObject = _interopRequireDefault(__webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/verifyPlainObject.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function wrapMapToPropsConstant(getConstant) {
  return function (dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..


function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//


function wrapMapToPropsFunc(mapToProps, methodName) {
  return function (dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function (stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function (stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) (0, _verifyPlainObject.default)(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/hooks/useDispatch.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/hooks/useDispatch.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createDispatchHook = createDispatchHook;
exports.useDispatch = void 0;

var _Context = __webpack_require__(/*! ../components/Context */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/components/Context.js");

var _useStore = __webpack_require__(/*! ./useStore */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/hooks/useStore.js");
/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */


function createDispatchHook(context) {
  if (context === void 0) {
    context = _Context.ReactReduxContext;
  }

  var useStore = context === _Context.ReactReduxContext ? _useStore.useStore : (0, _useStore.createStoreHook)(context);
  return function () {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */


var useDispatch = createDispatchHook();
exports.useDispatch = useDispatch;

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/hooks/useReduxContext.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/hooks/useReduxContext.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useReduxContext = useReduxContext;

var _rax = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./node_modules/_invariant@2.2.4@invariant/browser.js"));

var _Context = __webpack_require__(/*! ../components/Context */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/components/Context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */


function useReduxContext() {
  var contextValue = (0, _rax.useContext)(_Context.ReactReduxContext);
  (0, _invariant.default)(contextValue, 'could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  return contextValue;
}

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/hooks/useSelector.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/hooks/useSelector.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createSelectorHook = createSelectorHook;
exports.useSelector = void 0;

var _rax = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./node_modules/_invariant@2.2.4@invariant/browser.js"));

var _useReduxContext2 = __webpack_require__(/*! ./useReduxContext */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/hooks/useReduxContext.js");

var _Subscription = _interopRequireDefault(__webpack_require__(/*! ../utils/Subscription */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/Subscription.js"));

var _Context = __webpack_require__(/*! ../components/Context */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/components/Context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed


var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? _rax.useLayoutEffect : _rax.useEffect;

var refEquality = function (a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = (0, _rax.useReducer)(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = (0, _rax.useMemo)(function () {
    return new _Subscription.default(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = (0, _rax.useRef)();
  var latestSelector = (0, _rax.useRef)();
  var latestSelectedState = (0, _rax.useRef)();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    var errorMessage = "An error occurred while selecting the store state: " + err.message + ".";

    if (latestSubscriptionCallbackError.current) {
      errorMessage += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\nOriginal stack trace:";
    }

    throw new Error(errorMessage);
  }

  useIsomorphicLayoutEffect(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  useIsomorphicLayoutEffect(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _Context.ReactReduxContext;
  }

  var useReduxContext = context === _Context.ReactReduxContext ? _useReduxContext2.useReduxContext : function () {
    return (0, _rax.useContext)(context);
  };
  return function (selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    (0, _invariant.default)(selector, 'You must pass a selector to useSelectors');

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */


var useSelector = createSelectorHook();
exports.useSelector = useSelector;

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/hooks/useStore.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/hooks/useStore.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createStoreHook = createStoreHook;
exports.useStore = void 0;

var _rax = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");

var _Context = __webpack_require__(/*! ../components/Context */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/components/Context.js");

var _useReduxContext2 = __webpack_require__(/*! ./useReduxContext */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/hooks/useReduxContext.js");
/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */


function createStoreHook(context) {
  if (context === void 0) {
    context = _Context.ReactReduxContext;
  }

  var useReduxContext = context === _Context.ReactReduxContext ? _useReduxContext2.useReduxContext : function () {
    return (0, _rax.useContext)(context);
  };
  return function () {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */


var useStore = createStoreHook();
exports.useStore = useStore;

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.batch = void 0;

var _Provider = _interopRequireDefault(__webpack_require__(/*! ./components/Provider */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/components/Provider.js"));

exports.Provider = _Provider.default;

var _connectAdvanced = _interopRequireDefault(__webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/components/connectAdvanced.js"));

exports.connectAdvanced = _connectAdvanced.default;

var _Context = __webpack_require__(/*! ./components/Context */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/components/Context.js");

exports.ReactReduxContext = _Context.ReactReduxContext;

var _connect = _interopRequireDefault(__webpack_require__(/*! ./connect/connect */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/connect/connect.js"));

exports.connect = _connect.default;

var _useDispatch = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/hooks/useDispatch.js");

exports.useDispatch = _useDispatch.useDispatch;
exports.createDispatchHook = _useDispatch.createDispatchHook;

var _useSelector = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/hooks/useSelector.js");

exports.useSelector = _useSelector.useSelector;
exports.createSelectorHook = _useSelector.createSelectorHook;

var _useStore = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/hooks/useStore.js");

exports.useStore = _useStore.useStore;
exports.createStoreHook = _useStore.createStoreHook;

var _batch = __webpack_require__(/*! ./utils/batch */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/batch.js");

var _shallowEqual = _interopRequireDefault(__webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/shallowEqual.js"));

exports.shallowEqual = _shallowEqual.default;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // For other renderers besides ReactDOM and React Native, use the default noop batch function


var batch = (0, _batch.getBatch)();
exports.batch = batch;

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/Subscription.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/Subscription.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _batch = __webpack_require__(/*! ./batch */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/batch.js"); // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants


var CLEARED = null;
var nullListeners = {
  notify: function () {}
};

function createListenerCollection() {
  var batch = (0, _batch.getBatch)(); // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?

  var current = [];
  var next = [];
  return {
    clear: function () {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function () {
      var listeners = current = next;
      batch(function () {
        for (var i = 0; i < listeners.length; i++) {
          listeners[i]();
        }
      });
    },
    get: function () {
      return next;
    },
    subscribe: function (listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);
      return function () {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;
        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = /*#__PURE__*/function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function (listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function () {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function () {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function () {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function () {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function () {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();

exports.default = Subscription;

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/batch.js":
/*!********************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/batch.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getBatch = exports.setBatch = void 0; // Default to a dummy "batch" implementation that just runs the callback

function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function (newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings


exports.setBatch = setBatch;

var getBatch = function () {
  return batch;
};

exports.getBatch = getBatch;

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/hoistNonReactStatics.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/hoistNonReactStatics.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hoistNonReactStatics; // Simple version of https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js

var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  // getDerivedStateFromError: true,
  // getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

function hoistNonReactStatics(targetComponent, sourceComponent) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    var keys = Object.getOwnPropertyNames(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !REACT_STATICS[key] && !targetComponent[key]) {
        targetComponent[key] = sourceComponent[key];
      }
    }
  }

  return targetComponent;
}

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/isPlainObject.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/isPlainObject.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isPlainObject;
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */

function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/isValidElementType.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/isValidElementType.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isValidElementType;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || typeof type === 'object' && type !== null;
}

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/shallowEqual.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/shallowEqual.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/verifyPlainObject.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/verifyPlainObject.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = verifyPlainObject;

var _isPlainObject = _interopRequireDefault(__webpack_require__(/*! ./isPlainObject */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/isPlainObject.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! ./warning */ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/warning.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function verifyPlainObject(value, displayName, methodName) {
  if (!(0, _isPlainObject.default)(value)) {
    (0, _warning.default)(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/warning.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_rax-redux@1.0.0@rax-redux/lib/utils/warning.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */

function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/index.js":
/*!**********************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./lib/index.js */ "./node_modules/_rax@1.1.4@rax/lib/index.js");
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/assign.js":
/*!***************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/assign.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = Object.assign;
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/compat/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/compat/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _exportNames = {
  Children: true,
  isValidElement: true,
  createFactory: true,
  cloneElement: true
};
exports.default = void 0;

var Rax = _interopRequireWildcard(__webpack_require__(/*! ../../index */ "./node_modules/_rax@1.1.4@rax/index.js"));

Object.keys(Rax).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = Rax[key];
});

var _raxChildren = _interopRequireDefault(__webpack_require__(/*! rax-children */ "./node_modules/_rax-children@1.0.0@rax-children/lib/index.js"));

exports.Children = _raxChildren.default;

var _raxIsValidElement = _interopRequireDefault(__webpack_require__(/*! rax-is-valid-element */ "./node_modules/_rax-is-valid-element@1.0.0@rax-is-valid-element/lib/index.js"));

exports.isValidElement = _raxIsValidElement.default;

var _raxCreateFactory = _interopRequireDefault(__webpack_require__(/*! rax-create-factory */ "./node_modules/_rax-create-factory@1.0.0@rax-create-factory/lib/index.js"));

exports.createFactory = _raxCreateFactory.default;

var _raxCloneElement = _interopRequireDefault(__webpack_require__(/*! rax-clone-element */ "./node_modules/_rax-clone-element@1.0.0@rax-clone-element/lib/index.js"));

exports.cloneElement = _raxCloneElement.default;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

Rax.Children = _raxChildren.default;
Rax.isValidElement = _raxIsValidElement.default;
Rax.createFactory = _raxCreateFactory.default;
Rax.cloneElement = _raxCloneElement.default;
Rax.Component.prototype.isReactComponent = {};
var _default = Rax;
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/constant.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RENDERED_COMPONENT = exports.NATIVE_NODE = exports.INSTANCE = exports.INTERNAL = void 0;
/* Common constant variables for rax */

var INTERNAL = '_internal';
exports.INTERNAL = INTERNAL;
var INSTANCE = '_instance';
exports.INSTANCE = INSTANCE;
var NATIVE_NODE = '_nativeNode';
exports.NATIVE_NODE = NATIVE_NODE;
var RENDERED_COMPONENT = '_renderedComponent';
exports.RENDERED_COMPONENT = RENDERED_COMPONENT;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/createContext.js":
/*!**********************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/createContext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createContext;

var _invokeFunctionsWithContext = _interopRequireDefault(__webpack_require__(/*! ./invokeFunctionsWithContext */ "./node_modules/_rax@1.1.4@rax/lib/invokeFunctionsWithContext.js"));

var _hooks = __webpack_require__(/*! ./hooks */ "./node_modules/_rax@1.1.4@rax/lib/hooks.js");

var _types = __webpack_require__(/*! ./types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

var _toArray = _interopRequireDefault(__webpack_require__(/*! ./toArray */ "./node_modules/_rax@1.1.4@rax/lib/toArray.js"));

var _getNearestParent = _interopRequireDefault(__webpack_require__(/*! ./vdom/getNearestParent */ "./node_modules/_rax@1.1.4@rax/lib/vdom/getNearestParent.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var id = 0;

function createContext(defaultValue) {
  var contextID = '_c' + id++; // Provider Component

  var Provider = /*#__PURE__*/function () {
    function Provider() {
      this.__contextID = contextID;
      this.__handlers = [];
    }

    var _proto = Provider.prototype;

    _proto.__on = function (handler) {
      this.__handlers.push(handler);
    };

    _proto.__off = function (handler) {
      this.__handlers = this.__handlers.filter(function (h) {
        return h !== handler;
      });
    } // Like getChildContext but called in SSR
    ;

    _proto._getChildContext = function () {
      var _ref;

      return _ref = {}, _ref[contextID] = this, _ref;
    } // `getValue()` called in rax-server-renderer
    ;

    _proto.getValue = function () {
      return this.props.value !== undefined ? this.props.value : defaultValue;
    };

    _proto.componentDidUpdate = function (prevProps) {
      if (this.props.value !== prevProps.value) {
        (0, _invokeFunctionsWithContext.default)(this.__handlers, null, this.getValue());
      }
    };

    _proto.render = function () {
      return this.props.children;
    };

    return Provider;
  }();

  function getNearestParentProvider(instance) {
    return (0, _getNearestParent.default)(instance, function (parent) {
      return parent.__contextID === contextID;
    });
  } // Consumer Component


  return {
    Provider: Provider,
    Consumer: function (props, context) {
      var _this = this; // Current `context[contextID]` only works in SSR


      var _useState = (0, _hooks.useState)(function () {
        return context[contextID] || getNearestParentProvider(_this);
      }),
          provider = _useState[0];

      var value = provider ? provider.getValue() : defaultValue;

      var _useState2 = (0, _hooks.useState)(value),
          prevValue = _useState2[0],
          setValue = _useState2[1];

      if (value !== prevValue) {
        setValue(value);
        return; // Interrupt execution of consumer.
      }

      (0, _hooks.useLayoutEffect)(function () {
        if (provider) {
          provider.__on(setValue);

          return function () {
            provider.__off(setValue);
          };
        }
      }, []); // Consumer requires a function as a child.
      // The function receives the current context value.

      var consumer = (0, _toArray.default)(props.children)[0];

      if ((0, _types.isFunction)(consumer)) {
        return consumer(value);
      }
    },
    // `_contextID` and `_defaultValue` accessed in rax-server-renderer
    _contextID: contextID,
    _defaultValue: defaultValue,
    __getNearestParentProvider: getNearestParentProvider
  };
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/createElement.js":
/*!**********************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/createElement.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createElement;

var _host = _interopRequireDefault(__webpack_require__(/*! ./vdom/host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _element = _interopRequireDefault(__webpack_require__(/*! ./vdom/element */ "./node_modules/_rax@1.1.4@rax/lib/vdom/element.js"));

var _flattenChildren = _interopRequireDefault(__webpack_require__(/*! ./vdom/flattenChildren */ "./node_modules/_rax@1.1.4@rax/lib/vdom/flattenChildren.js"));

var _error = __webpack_require__(/*! ./error */ "./node_modules/_rax@1.1.4@rax/lib/error.js");

var _types = __webpack_require__(/*! ./types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

var _validateChildKeys = _interopRequireDefault(__webpack_require__(/*! ./validateChildKeys */ "./node_modules/_rax@1.1.4@rax/lib/validateChildKeys.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var RESERVED_PROPS = {
  key: true,
  ref: true
};

function createElement(type, config, children) {
  // Reserved names are extracted
  var props = {};
  var key = null;
  var ref = null;

  if (config != null) {
    ref = config.ref === undefined ? null : config.ref;
    key = config.key === undefined ? null : '' + config.key; // Remaining properties are added to a new props object

    for (var propName in config) {
      if (!RESERVED_PROPS[propName]) {
        props[propName] = config[propName];
      }
    }
  } // Children arguments can be more than one


  var childrenLength = arguments.length - 2;

  if (childrenLength > 0) {
    if (childrenLength === 1 && !(0, _types.isArray)(children)) {
      props.children = children;
    } else {
      var childArray = children;

      if (childrenLength > 1) {
        childArray = new Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
      }

      props.children = (0, _flattenChildren.default)(childArray);
    }
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  if (type == null) {
    if (true) {
      (0, _error.throwError)("Invalid element type, expected a string or a class/function component but got \"" + type + "\".");
    } else {}
  }

  if (true) {
    if ((0, _types.isString)(ref) && !_host.default.owner) {
      (0, _error.warning)("Adding a string ref \"" + ref + "\" that was not created inside render method, or multiple copies of Rax are used.");
    }

    for (var _i = 2; _i < arguments.length; _i++) {
      (0, _validateChildKeys.default)(arguments[_i], type);
    }
  }

  return new _element.default(type, key, ref, props, _host.default.owner);
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/createRef.js":
/*!******************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/createRef.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createRef;

function createRef() {
  return {
    current: null
  };
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/devtools/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/devtools/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _instance = _interopRequireDefault(__webpack_require__(/*! ../vdom/instance */ "./node_modules/_rax@1.1.4@rax/lib/vdom/instance.js"));

var _host = _interopRequireDefault(__webpack_require__(/*! ../vdom/host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _reconciler = _interopRequireDefault(__webpack_require__(/*! ./reconciler */ "./node_modules/_rax@1.1.4@rax/lib/devtools/reconciler.js"));

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/_rax@1.1.4@rax/lib/constant.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var DevtoolsHook = {
  ComponentTree: {
    getClosestInstanceFromNode: function (node) {
      return _instance.default.get(node);
    },
    getNodeFromInstance: function (inst) {
      // inst is an internal instance (but could be a composite)
      while (inst[_constant.RENDERED_COMPONENT]) {
        inst = inst[_constant.RENDERED_COMPONENT];
      }

      if (inst) {
        return inst._nativeNode;
      } else {
        return null;
      }
    }
  },
  Mount: {
    get _instancesByReactRootID() {
      var rootComponents = {}; // Ignore display top-level root component

      for (var rootID in _host.default.rootComponents) {
        rootComponents[rootID] = _host.default.rootComponents[rootID][_constant.RENDERED_COMPONENT];
      }

      return rootComponents;
    },

    _renderNewRootComponent: _reconciler.default.renderNewRootComponent
  },
  Reconciler: _reconciler.default,
  // monitor the info of all components
  monitor: null
};
var _default = DevtoolsHook;
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/devtools/reconciler.js":
/*!****************************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/devtools/reconciler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  // Stubs - DevTools expects to find these methods and replace them
  // with wrappers in order to observe components being mounted, updated and
  // unmounted
  mountComponent: function () {},
  receiveComponent: function () {},
  unmountComponent: function () {},
  // Stub - DevTools expects to find this method and replace it
  // with a wrapper in order to observe new root components being added
  renderNewRootComponent: function () {}
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/error.js":
/*!**************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/error.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getTypeInfo = getTypeInfo;
exports.getRenderErrorInfo = getRenderErrorInfo;
exports.throwMinifiedError = throwMinifiedError;
exports.throwMinifiedWarn = throwMinifiedWarn;
exports.throwError = throwError;
exports.warning = void 0;

var _host = _interopRequireDefault(__webpack_require__(/*! ./vdom/host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _scheduler = __webpack_require__(/*! ./vdom/scheduler */ "./node_modules/_rax@1.1.4@rax/lib/vdom/scheduler.js");

var _types = __webpack_require__(/*! ./types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function createMinifiedError(type, code, obj) {
  var typeInfo = obj === undefined ? '' : ' got: ' + getTypeInfo(obj);
  return new Error(type + ": #" + code + ", " + getRenderErrorInfo() + "." + typeInfo);
}

function getTypeInfo(obj) {
  return (0, _types.isPlainObject)(obj) ? Object.keys(obj) : obj;
}

function getRenderErrorInfo() {
  var ownerComponent = _host.default.owner;
  return ownerComponent ? "check <" + ownerComponent.__getName() + ">" : 'no owner';
}
/**
 * Minified code:
 *  1: Hooks called outside a component, or multiple version of Rax are used.
 *  6: Invalid component type, expected a class or function component.
 *  4: Too many re-renders, the number of renders is limited to prevent an infinite loop.
 *  5: Rax driver not found.
 * @param code {Number}
 * @param obj {Object}
 */


function throwMinifiedError(code, obj) {
  throw createMinifiedError('Error', code, obj);
}
/**
 * Minified Code:
 * 0: Invalid element type, expected a string or a class/function component but got "null" or "undefined".
 * 2. Invalid child type, expected types: Element instance, string, boolean, array, null, undefined.
 * 3. Ref can not attach because multiple copies of Rax are used.
 * @param {number} code
 * @param {string} info
 */


function throwMinifiedWarn(code, obj) {
  var err = createMinifiedError('Warn', code, obj);
  (0, _scheduler.scheduler)(function () {
    throw err;
  }, 0);
}

function throwError(message, obj) {
  var typeInfo = obj === undefined ? '' : '(found: ' + ((0, _types.isPlainObject)(obj) ? "object with keys {" + Object.keys(obj) + "}" : obj) + ')';
  throw Error(message + " " + typeInfo);
}

var warning = _types.NOOP;
exports.warning = warning;

if (true) {
  exports.warning = warning = function (template) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + template); // Don't use spread (or .apply) directly because it breaks IE9

      Function.prototype.apply.call(console.error, console, argsWithFormat);
    } // For works in DevTools when enable `Pause on caught exceptions`
    // that can find the component where caused this warning


    try {
      var argIndex = 0;
      var message = 'Warning: ' + template.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (e) {}
  };
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/forwardRef.js":
/*!*******************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/forwardRef.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = _default;

function _default(render) {
  // _forwardRef is also use in rax server renderer
  render._forwardRef = true;
  return render;
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/fragment.js":
/*!*****************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/fragment.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = Fragment;

function Fragment(props) {
  return props.children;
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/hooks.js":
/*!**************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/hooks.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useState = useState;
exports.useContext = useContext;
exports.useEffect = useEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useRef = useRef;
exports.useCallback = useCallback;
exports.useMemo = useMemo;
exports.useReducer = useReducer;

var _host = _interopRequireDefault(__webpack_require__(/*! ./vdom/host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _scheduler = __webpack_require__(/*! ./vdom/scheduler */ "./node_modules/_rax@1.1.4@rax/lib/vdom/scheduler.js");

var _shallowEqual = __webpack_require__(/*! ./vdom/shallowEqual */ "./node_modules/_rax@1.1.4@rax/lib/vdom/shallowEqual.js");

var _types = __webpack_require__(/*! ./types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

var _error = __webpack_require__(/*! ./error */ "./node_modules/_rax@1.1.4@rax/lib/error.js");

var _constant = __webpack_require__(/*! ./constant */ "./node_modules/_rax@1.1.4@rax/lib/constant.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getCurrentInstance() {
  return _host.default.owner && _host.default.owner[_constant.INSTANCE];
}

function getCurrentRenderingInstance() {
  var currentInstance = getCurrentInstance();

  if (currentInstance) {
    return currentInstance;
  } else {
    if (true) {
      (0, _error.throwError)('Hooks called outside a component, or multiple version of Rax are used.');
    } else {}
  }
}

function areInputsEqual(inputs, prevInputs) {
  if ((0, _types.isNull)(prevInputs) || inputs.length !== prevInputs.length) {
    return false;
  }

  for (var i = 0; i < inputs.length; i++) {
    if ((0, _shallowEqual.is)(inputs[i], prevInputs[i])) {
      continue;
    }

    return false;
  }

  return true;
}

function useState(initialState) {
  var currentInstance = getCurrentRenderingInstance();
  var hookID = currentInstance.getHookID();
  var hooks = currentInstance.getHooks();

  if (!hooks[hookID]) {
    // If the initial state is the result of an expensive computation,
    // you may provide a function instead for lazy initial state.
    if ((0, _types.isFunction)(initialState)) {
      initialState = initialState();
    }

    var setState = function (newState) {
      // Flush all effects first before update state
      if (!_host.default.__isUpdating) {
        (0, _scheduler.flushEffect)();
      }

      var hook = hooks[hookID];
      var eagerState = hook[2]; // function updater

      if ((0, _types.isFunction)(newState)) {
        newState = newState(eagerState);
      }

      if (!(0, _shallowEqual.is)(newState, eagerState)) {
        // Current instance is in render update phase.
        // After this one render finish, will containue run.
        hook[2] = newState;

        if (getCurrentInstance() === currentInstance) {
          // Marked as is scheduled that could finish hooks.
          currentInstance.__isScheduled = true;
        } else {
          currentInstance.__update();
        }
      }
    };

    hooks[hookID] = [initialState, setState, initialState];
  }

  var hook = hooks[hookID];

  if (!(0, _shallowEqual.is)(hook[0], hook[2])) {
    hook[0] = hook[2];
    currentInstance.__shouldUpdate = true;
  }

  return hook;
}

function useContext(context) {
  var currentInstance = getCurrentRenderingInstance();
  return currentInstance.useContext(context);
}

function useEffect(effect, inputs) {
  useEffectImpl(effect, inputs, true);
}

function useLayoutEffect(effect, inputs) {
  useEffectImpl(effect, inputs);
}

function useEffectImpl(effect, inputs, defered) {
  var currentInstance = getCurrentRenderingInstance();
  var hookID = currentInstance.getHookID();
  var hooks = currentInstance.getHooks();
  inputs = inputs === undefined ? null : inputs;

  if (!hooks[hookID]) {
    var __create = function __create(immediately) {
      if (!immediately && defered) return (0, _scheduler.scheduleEffect)(function () {
        return __create(true);
      });
      var current = __create.current;

      if (current) {
        __destory.current = current();
        __create.current = null;

        if (true) {
          var currentDestory = __destory.current;

          if (currentDestory !== undefined && typeof currentDestory !== 'function') {
            var msg;

            if (currentDestory === null) {
              msg = ' You returned null. If your effect does not require clean ' + 'up, return undefined (or nothing).';
            } else if (typeof currentDestory.then === 'function') {
              msg = '\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. ' + 'Instead, write the async function inside your effect ' + 'and call it immediately:\n\n' + 'useEffect(() => {\n' + '  async function fetchData() {\n' + '    // You can await here\n' + '    const response = await MyAPI.getData(someId);\n' + '    // ...\n' + '  }\n' + '  fetchData();\n' + '}, [someId]); // Or [] if effect doesn\'t need props or state.';
            } else {
              msg = ' You returned: ' + currentDestory;
            }

            (0, _error.warning)('An effect function must not return anything besides a function, ' + 'which is used for clean-up.' + msg);
          }
        }
      }
    };

    var __destory = function __destory(immediately) {
      if (!immediately && defered) return (0, _scheduler.scheduleEffect)(function () {
        return __destory(true);
      });
      var current = __destory.current;

      if (current) {
        current();
        __destory.current = null;
      }
    };

    __create.current = effect;
    hooks[hookID] = {
      __create: __create,
      __destory: __destory,
      __prevInputs: inputs,
      __inputs: inputs
    };
    currentInstance.didMount.push(__create);
    currentInstance.willUnmount.push(function () {
      return __destory(true);
    });
    currentInstance.didUpdate.push(function () {
      var _hooks$hookID = hooks[hookID],
          __prevInputs = _hooks$hookID.__prevInputs,
          __inputs = _hooks$hookID.__inputs,
          __create = _hooks$hookID.__create;

      if (__inputs == null || !areInputsEqual(__inputs, __prevInputs)) {
        __destory();

        __create();
      }
    });
  } else {
    var hook = hooks[hookID];
    var _create = hook.__create,
        prevInputs = hook.__inputs;
    hook.__inputs = inputs;
    hook.__prevInputs = prevInputs;
    _create.current = effect;
  }
}

function useImperativeHandle(ref, create, inputs) {
  var nextInputs = (0, _types.isArray)(inputs) ? inputs.concat([ref]) : null;
  useLayoutEffect(function () {
    if ((0, _types.isFunction)(ref)) {
      ref(create());
      return function () {
        return ref(null);
      };
    } else if (ref != null) {
      ref.current = create();
      return function () {
        ref.current = null;
      };
    }
  }, nextInputs);
}

function useRef(initialValue) {
  var currentInstance = getCurrentRenderingInstance();
  var hookID = currentInstance.getHookID();
  var hooks = currentInstance.getHooks();

  if (!hooks[hookID]) {
    hooks[hookID] = {
      current: initialValue
    };
  }

  return hooks[hookID];
}

function useCallback(callback, inputs) {
  return useMemo(function () {
    return callback;
  }, inputs);
}

function useMemo(create, inputs) {
  var currentInstance = getCurrentRenderingInstance();
  var hookID = currentInstance.getHookID();
  var hooks = currentInstance.getHooks();
  inputs = inputs === undefined ? null : inputs;

  if (!hooks[hookID]) {
    hooks[hookID] = [create(), inputs];
  } else {
    var prevInputs = hooks[hookID][1];

    if ((0, _types.isNull)(inputs) || !areInputsEqual(inputs, prevInputs)) {
      hooks[hookID] = [create(), inputs];
    }
  }

  return hooks[hookID][0];
}

function useReducer(reducer, initialArg, init) {
  var currentInstance = getCurrentRenderingInstance();
  var hookID = currentInstance.getHookID();
  var hooks = currentInstance.getHooks();
  var hook = hooks[hookID];

  if (!hook) {
    var initialState = (0, _types.isFunction)(init) ? init(initialArg) : initialArg;

    var dispatch = function (action) {
      // Flush all effects first before update state
      if (!_host.default.__isUpdating) {
        (0, _scheduler.flushEffect)();
      }

      var hook = hooks[hookID]; // Reducer will update in the next render, before that we add all
      // actions to the queue

      var queue = hook[2];

      if (getCurrentInstance() === currentInstance) {
        queue.__actions.push(action);

        currentInstance.__isScheduled = true;
      } else {
        var currentState = queue.__eagerState;
        var eagerReducer = queue.__eagerReducer;
        var eagerState = eagerReducer(currentState, action);

        if ((0, _shallowEqual.is)(eagerState, currentState)) {
          return;
        }

        queue.__eagerState = eagerState;

        queue.__actions.push(action);

        currentInstance.__update();
      }
    };

    return hooks[hookID] = [initialState, dispatch, {
      __actions: [],
      __eagerReducer: reducer,
      __eagerState: initialState
    }];
  }

  var queue = hook[2];
  var next = hook[0];

  if (currentInstance.__reRenders > 0) {
    for (var i = 0; i < queue.__actions.length; i++) {
      next = reducer(next, queue.__actions[i]);
    }
  } else {
    next = queue.__eagerState;
  }

  if (!(0, _shallowEqual.is)(next, hook[0])) {
    hook[0] = next;
    currentInstance.__shouldUpdate = true;
  }

  queue.__eagerReducer = reducer;
  queue.__eagerState = next;
  queue.__actions.length = 0;
  return hooks[hookID];
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.shared = exports.PureComponent = exports.useImperativeHandle = exports.useReducer = exports.useMemo = exports.useCallback = exports.useRef = exports.useLayoutEffect = exports.useEffect = exports.useContext = exports.useState = void 0;

var _createElement2 = _interopRequireDefault(__webpack_require__(/*! ./createElement */ "./node_modules/_rax@1.1.4@rax/lib/createElement.js"));

exports.createElement = _createElement2.default;

var _createContext2 = _interopRequireDefault(__webpack_require__(/*! ./createContext */ "./node_modules/_rax@1.1.4@rax/lib/createContext.js"));

exports.createContext = _createContext2.default;

var _createRef2 = _interopRequireDefault(__webpack_require__(/*! ./createRef */ "./node_modules/_rax@1.1.4@rax/lib/createRef.js"));

exports.createRef = _createRef2.default;

var _forwardRef2 = _interopRequireDefault(__webpack_require__(/*! ./forwardRef */ "./node_modules/_rax@1.1.4@rax/lib/forwardRef.js"));

exports.forwardRef = _forwardRef2.default;

var _hooks = __webpack_require__(/*! ./hooks */ "./node_modules/_rax@1.1.4@rax/lib/hooks.js");

exports.useState = _hooks.useState;
exports.useContext = _hooks.useContext;
exports.useEffect = _hooks.useEffect;
exports.useLayoutEffect = _hooks.useLayoutEffect;
exports.useRef = _hooks.useRef;
exports.useCallback = _hooks.useCallback;
exports.useMemo = _hooks.useMemo;
exports.useReducer = _hooks.useReducer;
exports.useImperativeHandle = _hooks.useImperativeHandle;

var _memo2 = _interopRequireDefault(__webpack_require__(/*! ./memo */ "./node_modules/_rax@1.1.4@rax/lib/memo.js"));

exports.memo = _memo2.default;

var _fragment = _interopRequireDefault(__webpack_require__(/*! ./fragment */ "./node_modules/_rax@1.1.4@rax/lib/fragment.js"));

exports.Fragment = _fragment.default;

var _render2 = _interopRequireDefault(__webpack_require__(/*! ./render */ "./node_modules/_rax@1.1.4@rax/lib/render.js"));

exports.render = _render2.default;

var _component = _interopRequireWildcard(__webpack_require__(/*! ./vdom/component */ "./node_modules/_rax@1.1.4@rax/lib/vdom/component.js"));

exports.Component = _component.default;
exports.PureComponent = _component.PureComponent;

var _version2 = _interopRequireDefault(__webpack_require__(/*! ./version */ "./node_modules/_rax@1.1.4@rax/lib/version.js"));

exports.version = _version2.default;

var _host = _interopRequireDefault(__webpack_require__(/*! ./vdom/host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _instance = _interopRequireDefault(__webpack_require__(/*! ./vdom/instance */ "./node_modules/_rax@1.1.4@rax/lib/vdom/instance.js"));

var _element = _interopRequireDefault(__webpack_require__(/*! ./vdom/element */ "./node_modules/_rax@1.1.4@rax/lib/vdom/element.js"));

var _flattenChildren = _interopRequireDefault(__webpack_require__(/*! ./vdom/flattenChildren */ "./node_modules/_rax@1.1.4@rax/lib/vdom/flattenChildren.js"));

var _index = _interopRequireDefault(__webpack_require__(/*! ./devtools/index */ "./node_modules/_rax@1.1.4@rax/lib/devtools/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var shared = {
  Host: _host.default,
  Instance: _instance.default,
  Element: _element.default,
  flattenChildren: _flattenChildren.default
};
exports.shared = shared;

if (true) {
  /* global __RAX_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __RAX_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __RAX_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
    __RAX_DEVTOOLS_GLOBAL_HOOK__.inject(_index.default);
  }

  if (typeof window !== 'undefined') {
    if (window.__RAX_INITIALISED__) {
      console.error('Warning: more than one instance of Rax has been initialised, this could lead to unexpected behaviour.');
    }

    window.__RAX_INITIALISED__ = true;
  }
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/invokeFunctionsWithContext.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/invokeFunctionsWithContext.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = invokeFunctionsWithContext;

function invokeFunctionsWithContext(fns, context, value) {
  for (var i = 0, l = fns && fns.length; i < l; i++) {
    fns[i].call(context, value);
  }
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/memo.js":
/*!*************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/memo.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = memo;

var _shallowEqual = _interopRequireDefault(__webpack_require__(/*! ./vdom/shallowEqual */ "./node_modules/_rax@1.1.4@rax/lib/vdom/shallowEqual.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function memo(type, compare) {
  compare = compare || _shallowEqual.default; // Memo could composed

  if (type.__compares) {
    type.__compares.push(compare);
  } else {
    type.__compares = [compare];
  }

  return type;
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/render.js":
/*!***************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/render.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _inject = _interopRequireDefault(__webpack_require__(/*! ./vdom/inject */ "./node_modules/_rax@1.1.4@rax/lib/vdom/inject.js"));

var _instance = _interopRequireDefault(__webpack_require__(/*! ./vdom/instance */ "./node_modules/_rax@1.1.4@rax/lib/vdom/instance.js"));

var _types = __webpack_require__(/*! ./types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function render(element, container, options, callback) {
  // Compatible with `render(element, container, callback)`
  if ((0, _types.isFunction)(options)) {
    callback = options;
    options = null;
  }

  options = options || _types.EMPTY_OBJECT; // Init inject

  (0, _inject.default)(options);

  var rootComponent = _instance.default.mount(element, container, options);

  var componentInstance = rootComponent.__getPublicInstance();

  if (callback) {
    callback.call(componentInstance);
  }

  return componentInstance;
}

var _default = render;
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/toArray.js":
/*!****************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/toArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = toArray;

var _types = __webpack_require__(/*! ./types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

function toArray(obj) {
  return (0, _types.isArray)(obj) ? obj : [obj];
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/types.js":
/*!**************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/types.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isNull = isNull;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isPlainObject = isPlainObject;
exports.isArray = isArray;
exports.isString = isString;
exports.isNumber = isNumber;
exports.EMPTY_OBJECT = exports.NOOP = void 0;

function isNull(obj) {
  return obj === null;
}

function isFunction(obj) {
  return typeof obj === 'function';
}

function isObject(obj) {
  return typeof obj === 'object';
}

function isPlainObject(obj) {
  return EMPTY_OBJECT.toString.call(obj) === '[object Object]';
}

function isArray(array) {
  return Array.isArray(array);
}

function isString(string) {
  return typeof string === 'string';
}

function isNumber(string) {
  return typeof string === 'number';
}

var NOOP = function () {};

exports.NOOP = NOOP;
var EMPTY_OBJECT = {};
exports.EMPTY_OBJECT = EMPTY_OBJECT;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/validateChildKeys.js":
/*!**************************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/validateChildKeys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validateChildKeys;

var _host = _interopRequireDefault(__webpack_require__(/*! ./vdom/host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _error = __webpack_require__(/*! ./error */ "./node_modules/_rax@1.1.4@rax/lib/error.js");

var _types = __webpack_require__(/*! ./types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = '';
  var ownerComponent = _host.default.owner;

  if (ownerComponent) {
    var name = ownerComponent.__getName();

    if (name) {
      info = " Check the render method of <" + name + ">.";
    }
  }

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = " Check the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.type && !!object.props;
}

function validateExplicitKey(element, parentType) {
  if (element.__validated || element.key != null) {
    return;
  }

  element.__validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== _host.default.owner) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from <" + element._owner.__getName() + ">.";
  }

  (0, _error.warning)("Each child in a list should have a unique \"key\" prop." + currentComponentErrorInfo + childOwner);
}

function validateChildKeys(node, parentType) {
  // Only array or element object is valid child
  if (typeof node !== 'object') {
    return;
  }

  if ((0, _types.isArray)(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    node.__validated = true;
  } // Rax don't support iterator object as element children
  // TODO: add validate when rax support iterator object as element.

}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/base.js":
/*!******************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/base.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _host = _interopRequireDefault(__webpack_require__(/*! ./host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/_rax@1.1.4@rax/lib/constant.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * Base Component
 */


var BaseComponent = /*#__PURE__*/function () {
  function BaseComponent(element) {
    this.__currentElement = element;
  }

  var _proto = BaseComponent.prototype;

  _proto.__initComponent = function (parent, parentInstance, context) {
    this._parent = parent;
    this.__parentInstance = parentInstance;
    this._context = context;
    this._mountID = _host.default.__mountID++;
  };

  _proto.__destoryComponent = function () {
    if (true) {
      _host.default.reconciler.unmountComponent(this);
    }

    this.__currentElement = this[_constant.NATIVE_NODE] = this._parent = this.__parentInstance = this._context = null;

    if (this[_constant.INSTANCE]) {
      this[_constant.INSTANCE] = this[_constant.INSTANCE][_constant.INTERNAL] = null;
    }
  };

  _proto.__mountComponent = function (parent, parentInstance, context, nativeNodeMounter) {
    this.__initComponent(parent, parentInstance, context);

    this.__mountNativeNode(nativeNodeMounter);

    if (true) {
      _host.default.reconciler.mountComponent(this);
    }

    var instance = {};
    instance[_constant.INTERNAL] = this;
    return instance;
  };

  _proto.unmountComponent = function (shouldNotRemoveChild) {
    if (this[_constant.NATIVE_NODE] && !shouldNotRemoveChild) {
      _host.default.driver.removeChild(this[_constant.NATIVE_NODE], this._parent);
    }

    this.__destoryComponent();
  };

  _proto.__getName = function () {
    var currentElement = this.__currentElement;
    var type = currentElement && currentElement.type;
    return type && type.displayName || type && type.name || type || // Native component's name is type
    currentElement;
  };

  _proto.__mountNativeNode = function (nativeNodeMounter) {
    var nativeNode = this.__getNativeNode();

    var parent = this._parent;

    if (nativeNodeMounter) {
      nativeNodeMounter(nativeNode, parent);
    } else {
      _host.default.driver.appendChild(nativeNode, parent);
    }
  };

  _proto.__getNativeNode = function () {
    return this[_constant.NATIVE_NODE] == null ? this[_constant.NATIVE_NODE] = this.__createNativeNode() : this[_constant.NATIVE_NODE];
  };

  _proto.__getPublicInstance = function () {
    return this.__getNativeNode();
  };

  return BaseComponent;
}();

exports.default = BaseComponent;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/component.js":
/*!***********************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/component.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PureComponent = exports.default = void 0;

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/**
 * Base component class.
 */


var Component = /*#__PURE__*/function () {
  function Component(props, context) {
    this.props = props;
    this.context = context;
    this.refs = {};
  }

  var _proto = Component.prototype;

  _proto.setState = function (partialState, callback) {
    // The updater property is injected when composite component mounting
    this.updater.setState(this, partialState, callback);
  };

  _proto.forceUpdate = function (callback) {
    this.updater.forceUpdate(this, callback);
  };

  return Component;
}();
/**
 * Pure component.
 */


exports.default = Component;

var PureComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(PureComponent, _Component);

  function PureComponent(props, context) {
    var _this = _Component.call(this, props, context) || this;

    _this.__isPureComponent = true;
    return _this;
  }

  return PureComponent;
}(Component);

exports.PureComponent = PureComponent;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/composite.js":
/*!***********************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/composite.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _reactive = _interopRequireDefault(__webpack_require__(/*! ./reactive */ "./node_modules/_rax@1.1.4@rax/lib/vdom/reactive.js"));

var _updater = _interopRequireDefault(__webpack_require__(/*! ./updater */ "./node_modules/_rax@1.1.4@rax/lib/vdom/updater.js"));

var _host = _interopRequireDefault(__webpack_require__(/*! ./host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _ref = __webpack_require__(/*! ./ref */ "./node_modules/_rax@1.1.4@rax/lib/vdom/ref.js");

var _instantiateComponent = _interopRequireDefault(__webpack_require__(/*! ./instantiateComponent */ "./node_modules/_rax@1.1.4@rax/lib/vdom/instantiateComponent.js"));

var _shouldUpdateComponent = _interopRequireDefault(__webpack_require__(/*! ./shouldUpdateComponent */ "./node_modules/_rax@1.1.4@rax/lib/vdom/shouldUpdateComponent.js"));

var _shallowEqual = _interopRequireDefault(__webpack_require__(/*! ./shallowEqual */ "./node_modules/_rax@1.1.4@rax/lib/vdom/shallowEqual.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/_rax@1.1.4@rax/lib/vdom/base.js"));

var _getPrevSiblingNativeNode = _interopRequireDefault(__webpack_require__(/*! ./getPrevSiblingNativeNode */ "./node_modules/_rax@1.1.4@rax/lib/vdom/getPrevSiblingNativeNode.js"));

var _performInSandbox = _interopRequireDefault(__webpack_require__(/*! ./performInSandbox */ "./node_modules/_rax@1.1.4@rax/lib/vdom/performInSandbox.js"));

var _toArray = _interopRequireDefault(__webpack_require__(/*! ../toArray */ "./node_modules/_rax@1.1.4@rax/lib/toArray.js"));

var _scheduler = __webpack_require__(/*! ./scheduler */ "./node_modules/_rax@1.1.4@rax/lib/vdom/scheduler.js");

var _types = __webpack_require__(/*! ../types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! ../assign */ "./node_modules/_rax@1.1.4@rax/lib/assign.js"));

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/_rax@1.1.4@rax/lib/constant.js");

var _invokeFunctionsWithContext = _interopRequireDefault(__webpack_require__(/*! ../invokeFunctionsWithContext */ "./node_modules/_rax@1.1.4@rax/lib/invokeFunctionsWithContext.js"));

var _validateChildKeys = _interopRequireDefault(__webpack_require__(/*! ../validateChildKeys */ "./node_modules/_rax@1.1.4@rax/lib/validateChildKeys.js"));

var _error = __webpack_require__(/*! ../error */ "./node_modules/_rax@1.1.4@rax/lib/error.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var measureLifeCycle;

if (true) {
  measureLifeCycle = function (callback, instanceID, type) {
    _host.default.measurer && _host.default.measurer.beforeLifeCycle(instanceID, type);
    callback();
    _host.default.measurer && _host.default.measurer.afterLifeCycle(instanceID, type);
  };
}

function scheduleLayoutInSandbox(fn, instance) {
  (0, _scheduler.scheduleLayout)(function () {
    (0, _performInSandbox.default)(fn, instance);
  });
}

function scheduleLayoutCallbacksInSandbox(callbacks, instance) {
  if (callbacks) {
    scheduleLayoutInSandbox(function () {
      (0, _invokeFunctionsWithContext.default)(callbacks, instance);
    }, instance);
  }
}
/**
 * Composite Component
 */


var CompositeComponent = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(CompositeComponent, _BaseComponent);

  function CompositeComponent() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = CompositeComponent.prototype;

  _proto.__mountComponent = function (parent, parentInstance, context, nativeNodeMounter) {
    var _this = this;

    this.__initComponent(parent, parentInstance, context);

    if (true) {
      this._updateCount = 0;
      _host.default.measurer && _host.default.measurer.beforeMountComponent(this._mountID, this);
    }

    var currentElement = this.__currentElement;
    var Component = currentElement.type;
    var ref = currentElement.ref;
    var publicProps = currentElement.props;
    var componentPrototype = Component.prototype; // Context process

    var publicContext = this.__processContext(context); // Initialize the public class


    var instance;
    var renderedElement;
    (0, _performInSandbox.default)(function () {
      if (componentPrototype && componentPrototype.render) {
        // Class Component instance
        instance = new Component(publicProps, publicContext);
      } else if ((0, _types.isFunction)(Component)) {
        // Functional reactive component with hooks
        instance = new _reactive.default(Component, ref);
      } else {
        if (true) {
          (0, _error.throwError)('Invalid component type, expected a class or function component.', Component);
        } else {}
      }
    }, parentInstance);

    if (!instance) {
      return;
    } // These should be set up in the constructor, but as a convenience for
    // simpler class abstractions, we set them up after the fact.


    instance.props = publicProps;
    instance.context = publicContext;
    instance.refs = {}; // Inject the updater into instance

    instance.updater = _updater.default;
    instance[_constant.INTERNAL] = this;
    this[_constant.INSTANCE] = instance; // Init state, must be set to an object or null

    var initialState = instance.state;

    if (initialState === undefined) {
      // TODO clone the state?
      instance.state = initialState = null;
    }

    if (instance.componentWillMount) {
      (0, _performInSandbox.default)(function () {
        if (true) {
          measureLifeCycle(function () {
            instance.componentWillMount();
          }, _this._mountID, 'componentWillMount');
        } else {}
      }, instance);
    }

    _host.default.owner = this; // Process pending state when call setState in componentWillMount

    instance.state = this.__processPendingState(publicProps, publicContext);
    var callbacks = this.__pendingCallbacks;
    this.__pendingCallbacks = null;
    (0, _performInSandbox.default)(function () {
      if (true) {
        measureLifeCycle(function () {
          renderedElement = instance.render();
        }, _this._mountID, 'render');
      } else {}
    }, instance);

    if (true) {
      (0, _validateChildKeys.default)(renderedElement, this.__currentElement.type);
    }

    _host.default.owner = null;
    this[_constant.RENDERED_COMPONENT] = (0, _instantiateComponent.default)(renderedElement);

    this[_constant.RENDERED_COMPONENT].__mountComponent(this._parent, instance, this.__processChildContext(context), nativeNodeMounter);

    if (!currentElement.type._forwardRef && ref) {
      (0, _ref.attachRef)(currentElement._owner, ref, this);
    }

    if (instance.componentDidMount) {
      scheduleLayoutInSandbox(function () {
        if (true) {
          measureLifeCycle(function () {
            instance.componentDidMount();
          }, _this._mountID, 'componentDidMount');
        } else {}
      }, instance);
    } // Trigger setState callback


    scheduleLayoutCallbacksInSandbox(callbacks, instance);

    if (true) {
      (0, _scheduler.scheduleLayout)(function () {
        _host.default.reconciler.mountComponent(_this);

        _host.default.measurer && _host.default.measurer.afterMountComponent(_this._mountID);
      });
    }

    return instance;
  };

  _proto.unmountComponent = function (shouldNotRemoveChild) {
    var instance = this[_constant.INSTANCE]; // Unmounting a composite component maybe not complete mounted
    // when throw error in component constructor stage

    if (instance && instance.componentWillUnmount) {
      (0, _performInSandbox.default)(function () {
        instance.componentWillUnmount();
      }, instance);
    }

    if (this[_constant.RENDERED_COMPONENT] != null) {
      var currentElement = this.__currentElement;
      var ref = currentElement.ref;

      if (!currentElement.type._forwardRef && ref) {
        (0, _ref.detachRef)(currentElement._owner, ref, this);
      }

      this[_constant.RENDERED_COMPONENT].unmountComponent(shouldNotRemoveChild);

      this[_constant.RENDERED_COMPONENT] = null;
    } // Reset pending fields
    // Even if this component is scheduled for another async update,
    // it would still be ignored because these fields are reset.


    this.__pendingStateQueue = null;
    this.__isPendingForceUpdate = false;

    this.__destoryComponent();
  }
  /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`
   */
  ;

  _proto.__processContext = function (context) {
    var maskedContext = {};
    var Component = this.__currentElement.type;
    var contextTypes = Component.contextTypes;

    if (contextTypes) {
      for (var contextName in contextTypes) {
        maskedContext[contextName] = context[contextName];
      }
    }

    return maskedContext;
  };

  _proto.__processChildContext = function (currentContext) {
    var instance = this[_constant.INSTANCE]; // The getChildContext method context should be current instance

    var childContext = instance.getChildContext && instance.getChildContext();

    if (childContext) {
      return (0, _assign.default)({}, currentContext, childContext);
    }

    return currentContext;
  };

  _proto.__processPendingState = function (props, context) {
    var instance = this[_constant.INSTANCE];
    var queue = this.__pendingStateQueue;

    if (!queue) {
      return instance.state;
    } // Reset pending queue


    this.__pendingStateQueue = null;
    var nextState = (0, _assign.default)({}, instance.state);

    for (var i = 0; i < queue.length; i++) {
      var partial = queue[i];
      (0, _assign.default)(nextState, (0, _types.isFunction)(partial) ? partial.call(instance, nextState, props, context) : partial);
    }

    return nextState;
  };

  _proto.__updateComponent = function (prevElement, nextElement, prevUnmaskedContext, nextUnmaskedContext) {
    var _this2 = this;

    var instance = this[_constant.INSTANCE]; // Maybe update component that has already been unmounted or failed mount.

    if (!instance) {
      return;
    }

    (0, _performInSandbox.default)(function () {
      if (true) {
        _host.default.measurer && _host.default.measurer.beforeUpdateComponent(_this2._mountID, _this2);
      }

      var willReceive;
      var nextContext;
      var nextProps; // Determine if the context has changed or not

      if (_this2._context === nextUnmaskedContext) {
        nextContext = instance.context;
      } else {
        nextContext = _this2.__processContext(nextUnmaskedContext);
        willReceive = true;
      } // Distinguish between a props update versus a simple state update
      // Skip checking prop types again -- we don't read component.props to avoid
      // warning for DOM component props in this upgrade


      nextProps = nextElement.props;

      if (prevElement !== nextElement) {
        willReceive = true;
      }

      if (willReceive && instance.componentWillReceiveProps) {
        // Calling this.setState() within componentWillReceiveProps will not trigger an additional render.
        _this2.__isPendingState = true;
        instance.componentWillReceiveProps(nextProps, nextContext);
        _this2.__isPendingState = false;
      } // Update refs


      if (_this2.__currentElement.type._forwardRef) {
        instance.__prevForwardRef = prevElement.ref;
        instance._forwardRef = nextElement.ref;
      } else {
        (0, _ref.updateRef)(prevElement, nextElement, _this2);
      } // Shoud update default


      var shouldUpdate = true;
      var prevProps = instance.props;
      var prevState = instance.state; // TODO: could delay execution processPendingState

      var nextState = _this2.__processPendingState(nextProps, nextContext);

      var callbacks = _this2.__pendingCallbacks;
      _this2.__pendingCallbacks = null; // ShouldComponentUpdate is not called when forceUpdate is used

      if (!_this2.__isPendingForceUpdate) {
        if (instance.shouldComponentUpdate) {
          shouldUpdate = instance.shouldComponentUpdate(nextProps, nextState, nextContext);
        } else if (instance.__isPureComponent) {
          // Pure Component
          shouldUpdate = !(0, _shallowEqual.default)(prevProps, nextProps) || !(0, _shallowEqual.default)(prevState, nextState);
        }
      }

      if (shouldUpdate) {
        _this2.__isPendingForceUpdate = false; // Will set `this.props`, `this.state` and `this.context`.

        var prevContext = instance.context; // Cannot use this.setState() in componentWillUpdate.
        // If need to update state in response to a prop change, use componentWillReceiveProps instead.

        if (instance.componentWillUpdate) {
          instance.componentWillUpdate(nextProps, nextState, nextContext);
        } // Replace with next


        _this2.__currentElement = nextElement;
        _this2._context = nextUnmaskedContext;
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = nextContext;

        _this2.__updateRenderedComponent(nextUnmaskedContext);

        if (instance.componentDidUpdate) {
          scheduleLayoutInSandbox(function () {
            instance.componentDidUpdate(prevProps, prevState, prevContext);
          }, instance);
        }

        if (true) {
          // Calc update count.
          _this2._updateCount++;
        }
      } else {
        // If it's determined that a component should not update, we still want
        // to set props and state but we shortcut the rest of the update.
        _this2.__currentElement = nextElement;
        _this2._context = nextUnmaskedContext;
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = nextContext;
      }

      scheduleLayoutCallbacksInSandbox(callbacks, instance);

      if (true) {
        (0, _scheduler.scheduleLayout)(function () {
          _host.default.measurer && _host.default.measurer.afterUpdateComponent(_this2._mountID);

          _host.default.reconciler.receiveComponent(_this2);
        });
      }
    }, instance);
  }
  /**
   * Call the component's `render` method and update the DOM accordingly.
   */
  ;

  _proto.__updateRenderedComponent = function (context) {
    var prevRenderedComponent = this[_constant.RENDERED_COMPONENT];
    var prevRenderedElement = prevRenderedComponent.__currentElement;
    var instance = this[_constant.INSTANCE];
    var nextRenderedElement;
    _host.default.owner = this;

    if (true) {
      measureLifeCycle(function () {
        nextRenderedElement = instance.render();
      }, this._mountID, 'render');
    } else {}

    _host.default.owner = null;

    if ((0, _shouldUpdateComponent.default)(prevRenderedElement, nextRenderedElement)) {
      var prevRenderedUnmaskedContext = prevRenderedComponent._context;

      var nextRenderedUnmaskedContext = this.__processChildContext(context); // If getChildContext existed and invoked when component updated that will make
      // prevRenderedUnmaskedContext not equal nextRenderedUnmaskedContext under the tree


      if (prevRenderedElement !== nextRenderedElement || prevRenderedUnmaskedContext !== nextRenderedUnmaskedContext) {
        // If element type is illegal catch the error
        prevRenderedComponent.__updateComponent(prevRenderedElement, nextRenderedElement, prevRenderedUnmaskedContext, nextRenderedUnmaskedContext);
      }

      if (true) {
        _host.default.measurer && _host.default.measurer.recordOperation({
          instanceID: this._mountID,
          type: 'update component',
          payload: {}
        });
      }
    } else {
      var lastNativeNode = null;

      var prevNativeNode = prevRenderedComponent.__getNativeNode(); // Only prevNativeNode is empty fragment should find the prevSlibingNativeNode
      // And current root component is fragment, but not need find the prevSlibingNativeNode when init mounting


      if ((0, _types.isArray)(prevNativeNode) && prevNativeNode.length === 0 && instance.__rootID == null) {
        lastNativeNode = (0, _getPrevSiblingNativeNode.default)(prevRenderedComponent);
      }

      prevRenderedComponent.unmountComponent(true);
      this[_constant.RENDERED_COMPONENT] = (0, _instantiateComponent.default)(nextRenderedElement);

      this[_constant.RENDERED_COMPONENT].__mountComponent(this._parent, instance, this.__processChildContext(context), function (newNativeNode, parent) {
        var driver = _host.default.driver;
        prevNativeNode = (0, _toArray.default)(prevNativeNode);
        newNativeNode = (0, _toArray.default)(newNativeNode); // If the new length large then prev

        for (var i = 0; i < newNativeNode.length; i++) {
          var nativeNode = newNativeNode[i];

          if (prevNativeNode[i]) {
            driver.replaceChild(nativeNode, prevNativeNode[i]);
          } else if (lastNativeNode) {
            driver.insertAfter(nativeNode, lastNativeNode);
          } else {
            driver.appendChild(nativeNode, parent);
          }

          lastNativeNode = nativeNode;
        } // If the new length less then prev


        for (var _i = newNativeNode.length; _i < prevNativeNode.length; _i++) {
          driver.removeChild(prevNativeNode[_i]);
        }
      });
    }
  };

  _proto.__getNativeNode = function () {
    var renderedComponent = this[_constant.RENDERED_COMPONENT];

    if (renderedComponent) {
      return renderedComponent.__getNativeNode();
    }
  };

  _proto.__getPublicInstance = function () {
    var instance = this[_constant.INSTANCE]; // The functional components cannot be given refs

    if (instance.__isReactiveComponent) return null;
    return instance;
  };

  return CompositeComponent;
}(_base.default);

var _default = CompositeComponent;
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/element.js":
/*!*********************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/element.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = Element;

var _checkPropTypes = _interopRequireDefault(__webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/_prop-types@15.7.2@prop-types/checkPropTypes.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function Element(type, key, ref, props, owner) {
  var element = {
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (true) {
    var propTypes = type.propTypes; // Validate its props provided by the propTypes definition

    if (propTypes) {
      var displayName = type.displayName || type.name;
      (0, _checkPropTypes.default)(propTypes, props, 'prop', displayName);
    } // We make validation flag non-enumerable, so the test framework could ignore it


    Object.defineProperty(element, '__validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // Props is immutable

    if (Object.freeze) {
      Object.freeze(props);
    }
  }

  return element;
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/empty.js":
/*!*******************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/empty.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _host = _interopRequireDefault(__webpack_require__(/*! ./host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/_rax@1.1.4@rax/lib/vdom/base.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/**
 * Empty Component
 */


var EmptyComponent = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(EmptyComponent, _BaseComponent);

  function EmptyComponent() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = EmptyComponent.prototype;

  _proto.__createNativeNode = function () {
    return _host.default.driver.createEmpty(this);
  };

  _proto.__updateComponent = function () {};

  return EmptyComponent;
}(_base.default);

var _default = EmptyComponent;
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/flattenChildren.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/flattenChildren.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = flattenChildren;

var _types = __webpack_require__(/*! ../types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

function traverseChildren(children, result) {
  if ((0, _types.isArray)(children)) {
    for (var i = 0, l = children.length; i < l; i++) {
      traverseChildren(children[i], result);
    }
  } else {
    result.push(children);
  }
}

function flattenChildren(children) {
  if (children == null) {
    return children;
  }

  var result = [];
  traverseChildren(children, result); // If length equal 1, return the only one.

  return result.length - 1 ? result : result[0];
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/fragment.js":
/*!**********************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/fragment.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _host = _interopRequireDefault(__webpack_require__(/*! ./host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _native = _interopRequireDefault(__webpack_require__(/*! ./native */ "./node_modules/_rax@1.1.4@rax/lib/vdom/native.js"));

var _toArray = _interopRequireDefault(__webpack_require__(/*! ../toArray */ "./node_modules/_rax@1.1.4@rax/lib/toArray.js"));

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/_rax@1.1.4@rax/lib/constant.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/**
 * Fragment Component
 */


var FragmentComponent = /*#__PURE__*/function (_NativeComponent) {
  _inheritsLoose(FragmentComponent, _NativeComponent);

  function FragmentComponent() {
    return _NativeComponent.apply(this, arguments) || this;
  }

  var _proto = FragmentComponent.prototype;

  _proto.__mountComponent = function (parent, parentInstance, context, nativeNodeMounter) {
    this.__initComponent(parent, parentInstance, context);

    var instance = this[_constant.INSTANCE] = {};
    instance[_constant.INTERNAL] = this;
    var fragment = [];

    this.__mountChildrenImpl(this._parent, this.__currentElement, context, function (nativeNode) {
      nativeNode = (0, _toArray.default)(nativeNode);

      for (var i = 0; i < nativeNode.length; i++) {
        fragment.push(nativeNode[i]);
      }
    });

    if (nativeNodeMounter) {
      nativeNodeMounter(fragment, parent);
    } else {
      for (var i = 0; i < fragment.length; i++) {
        _host.default.driver.appendChild(fragment[i], parent);
      }
    }

    if (true) {
      this.__currentElement.type = FragmentComponent;

      _host.default.reconciler.mountComponent(this);
    }

    return instance;
  };

  _proto.unmountComponent = function (shouldNotRemoveChild) {
    if (!shouldNotRemoveChild) {
      var nativeNode = this.__getNativeNode();

      for (var i = 0, l = nativeNode.length; i < l; i++) {
        _host.default.driver.removeChild(nativeNode[i]);
      }
    } // Do not need remove child when their parent is removed


    this.__unmountChildren(true);

    this.__destoryComponent();
  };

  _proto.__updateComponent = function (prevElement, nextElement, prevContext, nextContext) {
    // Replace current element
    this.__currentElement = nextElement;

    this.__updateChildren(this.__currentElement, nextContext);

    if (true) {
      this.__currentElement.type = FragmentComponent;

      _host.default.reconciler.receiveComponent(this);
    }
  };

  _proto.__getNativeNode = function () {
    var renderedChildren = this.__renderedChildren || {};
    return [].concat.apply([], Object.keys(renderedChildren).map(function (key) {
      return renderedChildren[key].__getNativeNode();
    }));
  };

  return FragmentComponent;
}(_native.default);

if (true) {
  FragmentComponent.displayName = 'Fragment';
}

var _default = FragmentComponent;
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/getElementKeyName.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/getElementKeyName.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getElementKeyName;

var _types = __webpack_require__(/*! ../types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

var _error = __webpack_require__(/*! ../error */ "./node_modules/_rax@1.1.4@rax/lib/error.js");

function getElementKeyName(children, element, index) {
  var elementKey = element && element.key;
  var defaultName = '.' + index.toString(36); // Inner child name default format fallback
  // Key should must be string type

  if ((0, _types.isString)(elementKey)) {
    var keyName = '$' + elementKey; // Child keys must be unique.

    var keyUnique = children[keyName] === undefined;

    if (true) {
      if (!keyUnique) {
        // Only the first child will be used when encountered two children with the same key
        (0, _error.warning)("Encountered two children with the same key \"" + elementKey + "\".");
      }
    }

    return keyUnique ? keyName : defaultName;
  } else {
    return defaultName;
  }
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/getNearestParent.js":
/*!******************************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/getNearestParent.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getNearestParent;

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/_rax@1.1.4@rax/lib/constant.js");

function getNearestParent(instance, matcher) {
  var parent;

  while (instance && instance[_constant.INTERNAL]) {
    if (matcher(instance)) {
      parent = instance;
      break;
    }

    instance = instance[_constant.INTERNAL].__parentInstance;
  }

  return parent;
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/getPrevSiblingNativeNode.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/getPrevSiblingNativeNode.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getPrevSiblingNativeNode;

var _host = _interopRequireDefault(__webpack_require__(/*! ./host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _types = __webpack_require__(/*! ../types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/_rax@1.1.4@rax/lib/constant.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * This function is usually been used to find the closet previous sibling native node of FragmentComponent.
 * FragmentComponent does not have a native node in the DOM tree, so when it is replaced, the new node has no corresponding location to insert.
 * So we need to look forward from the current mount position of the FragmentComponent to the nearest component which have the native node.
 * @param component
 * @return nativeNode
 */


function getPrevSiblingNativeNode(component) {
  var parent = component;

  while (parent = component.__parentInstance && component.__parentInstance[_constant.INTERNAL]) {
    if (parent instanceof _host.default.__Composite) {
      component = parent;
      continue;
    }

    var keys = Object.keys(parent.__renderedChildren); // Find previous sibling native node from current mount index

    for (var i = component.__mountIndex - 1; i >= 0; i--) {
      var nativeNode = parent.__renderedChildren[keys[i]].__getNativeNode(); // Fragment component always return array


      if ((0, _types.isArray)(nativeNode)) {
        if (nativeNode.length > 0) {
          // Get the last one
          return nativeNode[nativeNode.length - 1];
        }
      } else {
        // Others maybe native node or empty node
        return nativeNode;
      }
    } // Find parent over parent


    if (parent instanceof _host.default.__Fragment) {
      component = parent;
    } else {
      return null;
    }
  }
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js":
/*!******************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/host.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
/*
 * Stateful things in runtime
 */

var _default = {
  __mountID: 1,
  __isUpdating: false,
  // Inject
  driver: null,
  // Roots
  rootComponents: {},
  rootInstances: {},
  // Current owner component
  owner: null
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/inject.js":
/*!********************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/inject.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = inject;

var _host = _interopRequireDefault(__webpack_require__(/*! ./host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ./empty */ "./node_modules/_rax@1.1.4@rax/lib/vdom/empty.js"));

var _native = _interopRequireDefault(__webpack_require__(/*! ./native */ "./node_modules/_rax@1.1.4@rax/lib/vdom/native.js"));

var _text = _interopRequireDefault(__webpack_require__(/*! ./text */ "./node_modules/_rax@1.1.4@rax/lib/vdom/text.js"));

var _composite = _interopRequireDefault(__webpack_require__(/*! ./composite */ "./node_modules/_rax@1.1.4@rax/lib/vdom/composite.js"));

var _fragment = _interopRequireDefault(__webpack_require__(/*! ./fragment */ "./node_modules/_rax@1.1.4@rax/lib/vdom/fragment.js"));

var _reconciler = _interopRequireDefault(__webpack_require__(/*! ../devtools/reconciler */ "./node_modules/_rax@1.1.4@rax/lib/devtools/reconciler.js"));

var _error = __webpack_require__(/*! ../error */ "./node_modules/_rax@1.1.4@rax/lib/error.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function inject(_ref) {
  var driver = _ref.driver,
      measurer = _ref.measurer; // Inject component class

  _host.default.__Empty = _empty.default;
  _host.default.__Native = _native.default;
  _host.default.__Text = _text.default;
  _host.default.__Fragment = _fragment.default;
  _host.default.__Composite = _composite.default; // Inject render driver

  if (!(_host.default.driver = driver || _host.default.driver)) {
    if (true) {
      (0, _error.throwError)('Rax driver not found.');
    } else {}
  }

  if (true) {
    // Inject devtool renderer hook
    _host.default.reconciler = _reconciler.default; // Inject performance measurer

    _host.default.measurer = measurer;
  }
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/instance.js":
/*!**********************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/instance.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _host = _interopRequireDefault(__webpack_require__(/*! ./host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _createElement = _interopRequireDefault(__webpack_require__(/*! ../createElement */ "./node_modules/_rax@1.1.4@rax/lib/createElement.js"));

var _instantiateComponent = _interopRequireDefault(__webpack_require__(/*! ./instantiateComponent */ "./node_modules/_rax@1.1.4@rax/lib/vdom/instantiateComponent.js"));

var _root = _interopRequireDefault(__webpack_require__(/*! ./root */ "./node_modules/_rax@1.1.4@rax/lib/vdom/root.js"));

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/_rax@1.1.4@rax/lib/constant.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * Instance manager
 * @NOTE Key should not be compressed, for that will be added to native node and cause DOM Exception.
 */


var KEY = '_r';
var _default = {
  set: function (node, instance) {
    if (!node[KEY]) {
      node[KEY] = instance; // Record root instance to roots map

      if (instance.__rootID) {
        _host.default.rootInstances[instance.__rootID] = instance;
        _host.default.rootComponents[instance.__rootID] = instance[_constant.INTERNAL];
      }
    }
  },
  get: function (node) {
    return node[KEY];
  },
  remove: function (node) {
    var instance = this.get(node);

    if (instance) {
      node[KEY] = null;

      if (instance.__rootID) {
        delete _host.default.rootComponents[instance.__rootID];
        delete _host.default.rootInstances[instance.__rootID];
      }
    }
  },
  mount: function (element, container, _ref) {
    var parent = _ref.parent,
        hydrate = _ref.hydrate;

    if (true) {
      _host.default.measurer && _host.default.measurer.beforeRender();
    }

    var driver = _host.default.driver; // Real native root node is body

    if (container == null) {
      container = driver.createBody();
    }

    var renderOptions = {
      element: element,
      container: container,
      hydrate: hydrate
    }; // Before render callback

    driver.beforeRender && driver.beforeRender(renderOptions); // Get the context from the conceptual parent component.

    var parentContext;

    if (parent) {
      var parentInternal = parent[_constant.INTERNAL];
      parentContext = parentInternal.__processChildContext(parentInternal._context);
    } // Update root component


    var prevRootInstance = this.get(container);

    if (prevRootInstance && prevRootInstance.__rootID) {
      if (parentContext) {
        // Using __penddingContext to pass new context
        prevRootInstance[_constant.INTERNAL].__penddingContext = parentContext;
      }

      prevRootInstance.__update(element); // After render callback


      driver.afterRender && driver.afterRender(renderOptions);
      return prevRootInstance;
    } // Init root component with empty children


    var renderedComponent = (0, _instantiateComponent.default)((0, _createElement.default)(_root.default));
    var defaultContext = parentContext || {};

    var rootInstance = renderedComponent.__mountComponent(container, parent, defaultContext);

    this.set(container, rootInstance); // Mount new element through update queue avoid when there is in rendering phase

    rootInstance.__update(element); // After render callback


    driver.afterRender && driver.afterRender(renderOptions);

    if (true) {
      // Devtool render new root hook
      _host.default.reconciler.renderNewRootComponent(rootInstance[_constant.INTERNAL][_constant.RENDERED_COMPONENT]);

      _host.default.measurer && _host.default.measurer.afterRender();
    }

    return rootInstance;
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/instantiateComponent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/instantiateComponent.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = instantiateComponent;

var _host = _interopRequireDefault(__webpack_require__(/*! ./host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _types = __webpack_require__(/*! ../types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

var _error = __webpack_require__(/*! ../error */ "./node_modules/_rax@1.1.4@rax/lib/error.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function instantiateComponent(element) {
  var instance;

  if ((0, _types.isPlainObject)(element) && element !== null && element.type) {
    // Special case string values
    if ((0, _types.isString)(element.type)) {
      instance = new _host.default.__Native(element);
    } else {
      instance = new _host.default.__Composite(element);
    }
  } else if ((0, _types.isString)(element) || (0, _types.isNumber)(element)) {
    instance = new _host.default.__Text(String(element));
  } else if ((0, _types.isArray)(element)) {
    instance = new _host.default.__Fragment(element);
  } else {
    if (!(element === undefined || (0, _types.isNull)(element) || element === false || element === true)) {
      if (true) {
        (0, _error.throwError)('Invalid child type, expected types: Element instance, string, boolean, array, null, undefined.', element);
      } else {}
    }

    instance = new _host.default.__Empty(element);
  }

  return instance;
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/native.js":
/*!********************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/native.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _host = _interopRequireDefault(__webpack_require__(/*! ./host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _ref = __webpack_require__(/*! ./ref */ "./node_modules/_rax@1.1.4@rax/lib/vdom/ref.js");

var _instantiateComponent = _interopRequireDefault(__webpack_require__(/*! ./instantiateComponent */ "./node_modules/_rax@1.1.4@rax/lib/vdom/instantiateComponent.js"));

var _shouldUpdateComponent = _interopRequireDefault(__webpack_require__(/*! ./shouldUpdateComponent */ "./node_modules/_rax@1.1.4@rax/lib/vdom/shouldUpdateComponent.js"));

var _getElementKeyName = _interopRequireDefault(__webpack_require__(/*! ./getElementKeyName */ "./node_modules/_rax@1.1.4@rax/lib/vdom/getElementKeyName.js"));

var _getPrevSiblingNativeNode = _interopRequireDefault(__webpack_require__(/*! ./getPrevSiblingNativeNode */ "./node_modules/_rax@1.1.4@rax/lib/vdom/getPrevSiblingNativeNode.js"));

var _instance = _interopRequireDefault(__webpack_require__(/*! ./instance */ "./node_modules/_rax@1.1.4@rax/lib/vdom/instance.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/_rax@1.1.4@rax/lib/vdom/base.js"));

var _toArray = _interopRequireDefault(__webpack_require__(/*! ../toArray */ "./node_modules/_rax@1.1.4@rax/lib/toArray.js"));

var _types = __webpack_require__(/*! ../types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! ../assign */ "./node_modules/_rax@1.1.4@rax/lib/assign.js"));

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/_rax@1.1.4@rax/lib/constant.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var STYLE = 'style';
var CHILDREN = 'children';
var TREE = 'tree';
var EVENT_PREFIX_REGEXP = /^on[A-Z]/;
/**
 * Native Component
 */

var NativeComponent = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(NativeComponent, _BaseComponent);

  function NativeComponent() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = NativeComponent.prototype;

  _proto.__mountComponent = function (parent, parentInstance, context, nativeNodeMounter) {
    this.__initComponent(parent, parentInstance, context);

    var currentElement = this.__currentElement;
    var props = currentElement.props;
    var type = currentElement.type;
    var children = props[CHILDREN];
    var appendType = props.append || TREE; // Default is tree
    // Clone a copy for style diff

    this.__prevStyleCopy = (0, _assign.default)({}, props[STYLE]);
    var instance = {
      type: type,
      props: props
    };
    instance[_constant.INTERNAL] = this;
    this[_constant.INSTANCE] = instance;

    if (appendType === TREE) {
      // Should after process children when mount by tree mode
      this.__mountChildren(children, context);

      this.__mountNativeNode(nativeNodeMounter);
    } else {
      // Should before process children when mount by node mode
      this.__mountNativeNode(nativeNodeMounter);

      this.__mountChildren(children, context);
    } // Ref acttach


    if (currentElement && currentElement.ref) {
      (0, _ref.attachRef)(currentElement._owner, currentElement.ref, this);
    }

    if (true) {
      _host.default.reconciler.mountComponent(this);
    }

    return instance;
  };

  _proto.__mountChildren = function (children, context) {
    if (children == null) return children;

    var nativeNode = this.__getNativeNode();

    return this.__mountChildrenImpl(nativeNode, (0, _toArray.default)(children), context);
  };

  _proto.__mountChildrenImpl = function (parent, children, context, nativeNodeMounter) {
    var renderedChildren = this.__renderedChildren = {};
    var renderedChildrenImage = [];

    for (var i = 0, l = children.length; i < l; i++) {
      var element = children[i];
      var renderedChild = (0, _instantiateComponent.default)(element);
      var name = (0, _getElementKeyName.default)(renderedChildren, element, i);
      renderedChildren[name] = renderedChild;
      renderedChild.__mountIndex = i; // Mount children

      var mountImage = renderedChild.__mountComponent(parent, this[_constant.INSTANCE], context, nativeNodeMounter);

      renderedChildrenImage.push(mountImage);
    }

    return renderedChildrenImage;
  };

  _proto.__unmountChildren = function (shouldNotRemoveChild) {
    var renderedChildren = this.__renderedChildren;

    if (renderedChildren) {
      for (var name in renderedChildren) {
        var renderedChild = renderedChildren[name];
        renderedChild.unmountComponent(shouldNotRemoveChild);
      }

      this.__renderedChildren = null;
    }
  };

  _proto.unmountComponent = function (shouldNotRemoveChild) {
    if (this[_constant.NATIVE_NODE]) {
      var ref = this.__currentElement.ref;

      if (ref) {
        (0, _ref.detachRef)(this.__currentElement._owner, ref, this);
      }

      _instance.default.remove(this[_constant.NATIVE_NODE]);

      if (!shouldNotRemoveChild) {
        _host.default.driver.removeChild(this[_constant.NATIVE_NODE], this._parent);
      }
    }

    this.__unmountChildren(true);

    this.__prevStyleCopy = null;

    this.__destoryComponent();
  };

  _proto.__updateComponent = function (prevElement, nextElement, prevContext, nextContext) {
    // Replace current element
    this.__currentElement = nextElement;
    (0, _ref.updateRef)(prevElement, nextElement, this);
    var prevProps = prevElement.props;
    var nextProps = nextElement.props;

    this.__updateProperties(prevProps, nextProps); // If the prevElement has no child, mount children directly


    if (prevProps[CHILDREN] == null || (0, _types.isArray)(prevProps[CHILDREN]) && prevProps[CHILDREN].length === 0) {
      this.__mountChildren(nextProps[CHILDREN], nextContext);
    } else {
      this.__updateChildren(nextProps[CHILDREN], nextContext);
    }

    if (true) {
      _host.default.reconciler.receiveComponent(this);
    }
  };

  _proto.__updateProperties = function (prevProps, nextProps) {
    var styleUpdates;
    var driver = _host.default.driver;

    var nativeNode = this.__getNativeNode();

    for (var propKey in prevProps) {
      // Continue children and null value prop or nextProps has some propKey that do noting
      if (propKey === CHILDREN || prevProps[propKey] == null || // Use hasOwnProperty here for avoid propKey name is some with method name in object proptotype
      nextProps.hasOwnProperty(propKey)) {
        continue;
      }

      if (propKey === STYLE) {
        // Remove all style
        var lastStyle = this.__prevStyleCopy;

        for (var styleName in lastStyle) {
          styleUpdates = styleUpdates || {};
          styleUpdates[styleName] = '';
        }

        this.__prevStyleCopy = null;
      } else if (EVENT_PREFIX_REGEXP.test(propKey)) {
        // Remove event
        var eventListener = prevProps[propKey];

        if ((0, _types.isFunction)(eventListener)) {
          driver.removeEventListener(nativeNode, propKey.slice(2).toLowerCase(), eventListener);
        }
      } else {
        // Remove attribute
        driver.removeAttribute(nativeNode, propKey, prevProps[propKey]);
      }
    }

    for (propKey in nextProps) {
      var nextProp = nextProps[propKey];
      var prevProp = propKey === STYLE ? this.__prevStyleCopy : prevProps != null ? prevProps[propKey] : undefined; // Continue children or prevProp equal nextProp

      if (propKey === CHILDREN || prevProp === nextProp || nextProp == null && prevProp == null) {
        continue;
      } // Update style


      if (propKey === STYLE) {
        if (nextProp) {
          // Clone property
          nextProp = this.__prevStyleCopy = (0, _assign.default)({}, nextProp);
        } else {
          this.__prevStyleCopy = null;
        }

        if (prevProp != null) {
          // Unset styles on `prevProp` but not on `nextProp`.
          for (styleName in prevProp) {
            if (!nextProp || !nextProp[styleName] && nextProp[styleName] !== 0) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = '';
            }
          } // Update styles that changed since `prevProp`.


          for (styleName in nextProp) {
            if (prevProp[styleName] !== nextProp[styleName]) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = nextProp[styleName];
            }
          }
        } else {
          // Assign next prop when prev style is null
          styleUpdates = nextProp;
        }
      } else if (EVENT_PREFIX_REGEXP.test(propKey)) {
        // Update event binding
        var eventName = propKey.slice(2).toLowerCase();

        if ((0, _types.isFunction)(prevProp)) {
          driver.removeEventListener(nativeNode, eventName, prevProp, nextProps);
        }

        if ((0, _types.isFunction)(nextProp)) {
          driver.addEventListener(nativeNode, eventName, nextProp, nextProps);
        }
      } else {
        // Update other property
        if (nextProp != null) {
          driver.setAttribute(nativeNode, propKey, nextProp);
        } else {
          driver.removeAttribute(nativeNode, propKey, prevProps[propKey]);
        }

        if (true) {
          var _payload;

          _host.default.measurer && _host.default.measurer.recordOperation({
            instanceID: this._mountID,
            type: 'update attribute',
            payload: (_payload = {}, _payload[propKey] = nextProp, _payload)
          });
        }
      }
    }

    if (styleUpdates) {
      if (true) {
        _host.default.measurer && _host.default.measurer.recordOperation({
          instanceID: this._mountID,
          type: 'update style',
          payload: styleUpdates
        });
      }

      driver.setStyle(nativeNode, styleUpdates);
    }
  };

  _proto.__updateChildren = function (nextChildrenElements, context) {
    // prev rendered children
    var prevChildren = this.__renderedChildren;
    var driver = _host.default.driver;

    if (nextChildrenElements == null && prevChildren == null) {
      return;
    }

    var nextChildren = {};

    if (nextChildrenElements != null) {
      nextChildrenElements = (0, _toArray.default)(nextChildrenElements); // Update next children elements

      for (var index = 0, length = nextChildrenElements.length; index < length; index++) {
        var nextElement = nextChildrenElements[index];
        var name = (0, _getElementKeyName.default)(nextChildren, nextElement, index);
        var prevChild = prevChildren && prevChildren[name];
        var prevElement = prevChild && prevChild.__currentElement;
        var prevContext = prevChild && prevChild._context; // Try to update between the two of some name that has some element type,
        // and move child in next children loop if need

        if (prevChild != null && (0, _shouldUpdateComponent.default)(prevElement, nextElement)) {
          if (prevElement !== nextElement || prevContext !== context) {
            // Pass the same context when updating children
            prevChild.__updateComponent(prevElement, nextElement, context, context);
          }

          nextChildren[name] = prevChild;
        } else {
          // Unmount the prevChild when some name with nextChild but different element type,
          // and move child node in next children loop
          if (prevChild) {
            prevChild.__unmount = true;
          } // The child must be instantiated before it's mounted.


          nextChildren[name] = (0, _instantiateComponent.default)(nextElement);
        }
      }
    }

    var parent = this.__getNativeNode();

    var isFragmentParent = (0, _types.isArray)(parent);
    var prevFirstChild = null;
    var prevFirstNativeNode = null;
    var isPrevFirstEmptyFragment = false;
    var shouldUnmountPrevFirstChild = false;
    var lastPlacedNode = null; // Directly remove all children from component, if nextChildren is empty (null, [], '').
    // `driver.removeChildren` is optional driver protocol.

    var shouldRemoveAllChildren = Boolean(driver.removeChildren // nextChildElements == null or nextChildElements is empty
    && ((0, _types.isNull)(nextChildrenElements) || nextChildrenElements && !nextChildrenElements.length) // Fragment parent can not remove parentNode's all child nodes directly.
    && !isFragmentParent); // Unmount children that are no longer present.

    if (prevChildren != null) {
      for (var _name in prevChildren) {
        var _prevChild = prevChildren[_name];
        var shouldUnmount = _prevChild.__unmount || !nextChildren[_name]; // Store old first child ref for append node ahead and maybe delay remove it

        if (!prevFirstChild) {
          shouldUnmountPrevFirstChild = shouldUnmount;
          prevFirstChild = _prevChild;
          prevFirstNativeNode = prevFirstChild.__getNativeNode();

          if ((0, _types.isArray)(prevFirstNativeNode)) {
            isPrevFirstEmptyFragment = prevFirstNativeNode.length === 0;
            prevFirstNativeNode = prevFirstNativeNode[0];
          }
        } else if (shouldUnmount) {
          _prevChild.unmountComponent(shouldRemoveAllChildren);
        }
      } // 1. When fragment embed fragment updated but prev fragment is empty
      // that need to get the prev sibling native node.
      // like: [ [] ] -> [ [1, 2] ]
      // 2. When prev fragment is empty and update to other type
      // like: [ [], 1 ] -> [ 1, 2 ]


      if (isFragmentParent && parent.length === 0 || isPrevFirstEmptyFragment) {
        lastPlacedNode = (0, _getPrevSiblingNativeNode.default)(this);
      }
    }

    var insertNodes = function (nativeNodes, parentNode) {
      // The nativeNodes maybe fragment, so convert to array type
      nativeNodes = (0, _toArray.default)(nativeNodes);

      for (var i = 0, l = nativeNodes.length; i < l; i++) {
        if (lastPlacedNode) {
          // Should reverse order when insert new child after lastPlacedNode:
          // [lastPlacedNode, *newChild1, *newChild2],
          // And if prev is empty fragment, lastPlacedNode is the prevSiblingNativeNode found.
          driver.insertAfter(nativeNodes[l - 1 - i], lastPlacedNode);
        } else if (prevFirstNativeNode) {
          // [*newChild1, *newChild2, prevFirstNativeNode]
          driver.insertBefore(nativeNodes[i], prevFirstNativeNode);
        } else if (parentNode) {
          // [*newChild1, *newChild2]
          driver.appendChild(nativeNodes[i], parentNode);
        }
      }
    }; // `nextIndex` will increment for each child in `nextChildren`


    var nextIndex = 0;

    for (var _name2 in nextChildren) {
      var nextChild = nextChildren[_name2];

      var _prevChild2 = prevChildren && prevChildren[_name2]; // Try to move the some key prevChild but current not at the some position


      if (_prevChild2 === nextChild) {
        var prevChildNativeNode = _prevChild2.__getNativeNode();

        if (_prevChild2.__mountIndex !== nextIndex) {
          insertNodes(prevChildNativeNode);
        }
      } else {
        // Mount nextChild that in prevChildren there has no some name
        // Fragment extended native component, so if parent is fragment should get this._parent
        if (isFragmentParent) {
          parent = this._parent;
        }

        nextChild.__mountComponent(parent, this[_constant.INSTANCE], context, insertNodes // Insert nodes mounter
        );
      } // Update to the latest mount order


      nextChild.__mountIndex = nextIndex++; // Get the last child

      lastPlacedNode = nextChild.__getNativeNode();

      if ((0, _types.isArray)(lastPlacedNode)) {
        lastPlacedNode = lastPlacedNode[lastPlacedNode.length - 1];
      }
    }

    if (shouldUnmountPrevFirstChild) {
      prevFirstChild.unmountComponent(shouldRemoveAllChildren);
    }

    if (shouldRemoveAllChildren) {
      driver.removeChildren(this[_constant.NATIVE_NODE]);
    }

    this.__renderedChildren = nextChildren;
  };

  _proto.__createNativeNode = function () {
    var instance = this[_constant.INSTANCE];

    var nativeNode = _host.default.driver.createElement(instance.type, instance.props, this);

    _instance.default.set(nativeNode, instance);

    return nativeNode;
  };

  return NativeComponent;
}(_base.default);

exports.default = NativeComponent;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/performInSandbox.js":
/*!******************************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/performInSandbox.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = performInSandbox;
exports.handleError = handleError;

var _getNearestParent = _interopRequireDefault(__webpack_require__(/*! ./getNearestParent */ "./node_modules/_rax@1.1.4@rax/lib/vdom/getNearestParent.js"));

var _scheduler = __webpack_require__(/*! ./scheduler */ "./node_modules/_rax@1.1.4@rax/lib/vdom/scheduler.js");

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/_rax@1.1.4@rax/lib/constant.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function performInSandbox(fn, instance, callback) {
  try {
    return fn();
  } catch (e) {
    if (callback) {
      callback(e);
    } else {
      handleError(instance, e);
    }
  }
}

function handleError(instance, error) {
  var boundary = (0, _getNearestParent.default)(instance, function (parent) {
    return parent.componentDidCatch;
  });

  if (boundary) {
    (0, _scheduler.scheduleLayout)(function () {
      var boundaryInternal = boundary[_constant.INTERNAL]; // Should not attempt to recover an unmounting error boundary

      if (boundaryInternal) {
        performInSandbox(function () {
          boundary.componentDidCatch(error);
        }, boundaryInternal.__parentInstance);
      }
    });
  } else {
    // Do not break when error happens
    (0, _scheduler.scheduler)(function () {
      throw error;
    }, 0);
  }
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/reactive.js":
/*!**********************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/reactive.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _host = _interopRequireDefault(__webpack_require__(/*! ./host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "./node_modules/_rax@1.1.4@rax/lib/vdom/component.js"));

var _invokeFunctionsWithContext = _interopRequireDefault(__webpack_require__(/*! ../invokeFunctionsWithContext */ "./node_modules/_rax@1.1.4@rax/lib/invokeFunctionsWithContext.js"));

var _error = __webpack_require__(/*! ../error */ "./node_modules/_rax@1.1.4@rax/lib/error.js");

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/_rax@1.1.4@rax/lib/constant.js");

var _types = __webpack_require__(/*! ../types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var RE_RENDER_LIMIT = 24;
/**
 * Functional Reactive Component Class Wrapper
 */

var ReactiveComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ReactiveComponent, _Component);

  function ReactiveComponent(pureRender, ref) {
    var _this = _Component.call(this) || this;

    // Marked ReactiveComponent.
    _this.__isReactiveComponent = true; // A pure function

    _this.__render = pureRender;
    _this.__hookID = 0; // Number of rerenders

    _this.__reRenders = 0;
    _this.__hooks = {}; // Is render scheduled

    _this.__isScheduled = false;
    _this.__shouldUpdate = false;
    _this.__children = null;
    _this.__contexts = {}; // Handles store

    _this.didMount = [];
    _this.didUpdate = [];
    _this.willUnmount = [];
    _this.state = _types.EMPTY_OBJECT;

    if (pureRender._forwardRef) {
      _this.__prevForwardRef = _this._forwardRef = ref;
    }

    var compares = pureRender.__compares;

    if (compares) {
      _this.shouldComponentUpdate = function (nextProps) {
        // Process composed compare
        var arePropsEqual = true; // Compare push in and pop out

        for (var i = compares.length - 1; i > -1; i--) {
          if (arePropsEqual = compares[i](_this.props, nextProps)) {
            break;
          }
        }

        return !arePropsEqual || _this.__prevForwardRef !== _this._forwardRef;
      };
    }

    return _this;
  }

  var _proto = ReactiveComponent.prototype;

  _proto.getHooks = function () {
    return this.__hooks;
  };

  _proto.getHookID = function () {
    return ++this.__hookID;
  };

  _proto.useContext = function (context) {
    var _this2 = this;

    var contextID = context._contextID;
    var contextItem = this.__contexts[contextID];

    if (!contextItem) {
      var provider = context.__getNearestParentProvider(this);

      contextItem = this.__contexts[contextID] = {
        __provider: provider
      };

      if (provider) {
        var handleContextChange = function (value) {
          // Check the last value that maybe alread rerender
          // avoid rerender twice when provider value changed
          if (contextItem.__lastValue !== value) {
            _this2.__shouldUpdate = true;

            _this2.__update();
          }
        };

        provider.__on(handleContextChange);

        this.willUnmount.push(function () {
          return provider.__off(handleContextChange);
        });
      }
    }

    return contextItem.__lastValue = contextItem.__provider ? contextItem.__provider.getValue() : context._defaultValue;
  };

  _proto.componentWillMount = function () {
    this.__shouldUpdate = true;
  };

  _proto.componentDidMount = function () {
    (0, _invokeFunctionsWithContext.default)(this.didMount);
  };

  _proto.componentWillReceiveProps = function () {
    this.__shouldUpdate = true;
  };

  _proto.componentDidUpdate = function () {
    (0, _invokeFunctionsWithContext.default)(this.didUpdate);
  };

  _proto.componentWillUnmount = function () {
    (0, _invokeFunctionsWithContext.default)(this.willUnmount);
  };

  _proto.__update = function () {
    this[_constant.INTERNAL].__isPendingForceUpdate = true;
    this.setState(_types.EMPTY_OBJECT);
  };

  _proto.render = function () {
    if (true) {
      _host.default.measurer && _host.default.measurer.beforeRender();
    }

    this.__hookID = 0;
    this.__reRenders = 0;
    this.__isScheduled = false;

    var children = this.__render(this.props, this._forwardRef ? this._forwardRef : this.context);

    while (this.__isScheduled) {
      this.__reRenders++;

      if (this.__reRenders > RE_RENDER_LIMIT) {
        if (true) {
          throw new Error('Too many re-renders, the number of renders is limited to prevent an infinite loop.');
        } else {}
      }

      this.__hookID = 0;
      this.__isScheduled = false;
      children = this.__render(this.props, this._forwardRef ? this._forwardRef : this.context);
    }

    if (this.__shouldUpdate) {
      this.__children = children;
      this.__shouldUpdate = false;
    }

    return this.__children;
  };

  return ReactiveComponent;
}(_component.default);

exports.default = ReactiveComponent;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/ref.js":
/*!*****************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/ref.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.updateRef = updateRef;
exports.attachRef = attachRef;
exports.detachRef = detachRef;

var _types = __webpack_require__(/*! ../types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/_rax@1.1.4@rax/lib/constant.js");

var _error = __webpack_require__(/*! ../error */ "./node_modules/_rax@1.1.4@rax/lib/error.js");
/*
 * Ref manager
 */


function updateRef(prevElement, nextElement, component) {
  var prevRef = prevElement ? prevElement.ref : null;
  var nextRef = nextElement ? nextElement.ref : null; // Update refs in owner component

  if (prevRef !== nextRef) {
    // Detach prev RenderedElement's ref
    prevRef && detachRef(prevElement._owner, prevRef, component); // Attach next RenderedElement's ref

    nextRef && attachRef(nextElement._owner, nextRef, component);
  }
}

function attachRef(ownerComponent, ref, component) {
  if (!ownerComponent) {
    if (true) {
      (0, _error.warning)('Ref can not attach because multiple copies of Rax are used.');
    } else {}

    return;
  }

  var instance = component.__getPublicInstance();

  if (true) {
    if (instance == null) {
      (0, _error.warning)('Do not attach ref to function component because they don’t have instances.');
    }
  }

  if ((0, _types.isFunction)(ref)) {
    ref(instance);
  } else if ((0, _types.isObject)(ref)) {
    ref.current = instance;
  } else {
    ownerComponent[_constant.INSTANCE].refs[ref] = instance;
  }
}

function detachRef(ownerComponent, ref, component) {
  if ((0, _types.isFunction)(ref)) {
    // When the referenced component is unmounted and whenever the ref changes, the old ref will be called with null as an argument.
    ref(null);
  } else {
    // Must match component and ref could detach the ref on owner when A's before ref is B's current ref
    var instance = component.__getPublicInstance();

    if ((0, _types.isObject)(ref) && ref.current === instance) {
      ref.current = null;
    } else if (ownerComponent[_constant.INSTANCE].refs[ref] === instance) {
      delete ownerComponent[_constant.INSTANCE].refs[ref];
    }
  }
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/root.js":
/*!******************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/root.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "./node_modules/_rax@1.1.4@rax/lib/vdom/component.js"));

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/_rax@1.1.4@rax/lib/constant.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var rootID = 1;

var Root = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Root, _Component);

  function Root() {
    var _this = _Component.call(this) || this;

    // Using fragment instead of null for avoid create a comment node when init mount
    _this.__element = [];
    _this.__rootID = rootID++;
    return _this;
  }

  var _proto = Root.prototype;

  _proto.__getPublicInstance = function () {
    return this.__getRenderedComponent().__getPublicInstance();
  };

  _proto.__getRenderedComponent = function () {
    return this[_constant.INTERNAL][_constant.RENDERED_COMPONENT];
  };

  _proto.__update = function (element) {
    this.__element = element;
    this.forceUpdate();
  };

  _proto.render = function () {
    return this.__element;
  };

  return Root;
}(_component.default);

var _default = Root;
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/scheduler.js":
/*!***********************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/scheduler.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.schedule = schedule;
exports.flush = flush;
exports.scheduleEffect = scheduleEffect;
exports.flushEffect = flushEffect;
exports.scheduleLayout = scheduleLayout;
exports.flushLayout = flushLayout;
exports.scheduler = void 0;
var updateCallbacks = [];
var effectCallbacks = [];
var layoutCallbacks = [];
var scheduler = setTimeout;
exports.scheduler = scheduler;

if (true) {
  // Wrapper timer for hijack timers in jest
  exports.scheduler = scheduler = function (callback) {
    setTimeout(callback);
  };
}

function invokeFunctionsWithClear(callbacks) {
  var callback;

  while (callback = callbacks.shift()) {
    callback();
  }
} // Schedule before next render


function schedule(callback) {
  if (updateCallbacks.length === 0) {
    scheduler(flush);
  }

  updateCallbacks.push(callback);
} // Flush before next render


function flush() {
  invokeFunctionsWithClear(updateCallbacks);
}

function scheduleEffect(callback) {
  if (effectCallbacks.length === 0) {
    scheduler(flushEffect);
  }

  effectCallbacks.push(callback);
}

function flushEffect() {
  invokeFunctionsWithClear(effectCallbacks);
}

function scheduleLayout(callback) {
  layoutCallbacks.push(callback);
}

function flushLayout() {
  invokeFunctionsWithClear(layoutCallbacks);
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/shallowEqual.js":
/*!**************************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/shallowEqual.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.is = is;
exports.default = shallowEqual;

var _types = __webpack_require__(/*! ../types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

var hasOwnProperty = _types.EMPTY_OBJECT.hasOwnProperty;
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */

function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y; // eslint-disable-line no-self-compare
  }
}
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */


function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (!(0, _types.isObject)(objA) || (0, _types.isNull)(objA) || !(0, _types.isObject)(objB) || (0, _types.isNull)(objB)) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/shouldUpdateComponent.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/shouldUpdateComponent.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _types = __webpack_require__(/*! ../types */ "./node_modules/_rax@1.1.4@rax/lib/types.js");

function shouldUpdateComponent(prevElement, nextElement) {
  var prevEmpty = (0, _types.isNull)(prevElement);
  var nextEmpty = (0, _types.isNull)(nextElement);

  if (prevEmpty || nextEmpty) {
    return prevEmpty === nextEmpty;
  }

  if ((0, _types.isArray)(prevElement) && (0, _types.isArray)(nextElement)) {
    return true;
  }

  var isPrevStringOrNumber = (0, _types.isString)(prevElement) || (0, _types.isNumber)(prevElement);

  if (isPrevStringOrNumber) {
    return (0, _types.isString)(nextElement) || (0, _types.isNumber)(nextElement);
  } else {
    // prevElement and nextElement could be array, typeof [] is "object"
    return (0, _types.isObject)(prevElement) && (0, _types.isObject)(nextElement) && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
  }
}

var _default = shouldUpdateComponent;
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/text.js":
/*!******************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/text.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _host = _interopRequireDefault(__webpack_require__(/*! ./host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/_rax@1.1.4@rax/lib/vdom/base.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/**
 * Text Component
 */


var TextComponent = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(TextComponent, _BaseComponent);

  function TextComponent() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = TextComponent.prototype;

  _proto.__updateComponent = function (prevElement, nextElement) {
    nextElement = '' + nextElement; // If text is some value that do not update even there number 1 and string "1"

    if (prevElement !== nextElement) {
      // Replace current element
      this.__currentElement = nextElement;

      _host.default.driver.updateText(this.__getNativeNode(), nextElement);

      if (true) {
        this._stringText = this.__currentElement;

        _host.default.reconciler.receiveComponent(this);
      }
    }
  };

  _proto.__createNativeNode = function () {
    if (true) {
      this._stringText = this.__currentElement;
    }

    return _host.default.driver.createText(this.__currentElement, this);
  };

  return TextComponent;
}(_base.default);

var _default = TextComponent;
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/vdom/updater.js":
/*!*********************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/vdom/updater.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _host = _interopRequireDefault(__webpack_require__(/*! ./host */ "./node_modules/_rax@1.1.4@rax/lib/vdom/host.js"));

var _scheduler = __webpack_require__(/*! ./scheduler */ "./node_modules/_rax@1.1.4@rax/lib/vdom/scheduler.js");

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/_rax@1.1.4@rax/lib/constant.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // Dirty components store


var dirtyComponents = [];

function getPendingCallbacks(internal) {
  return internal.__pendingCallbacks;
}

function setPendingCallbacks(internal, callbacks) {
  return internal.__pendingCallbacks = callbacks;
}

function getPendingStateQueue(internal) {
  return internal.__pendingStateQueue;
}

function setPendingStateQueue(internal, partialState) {
  return internal.__pendingStateQueue = partialState;
}

function enqueueCallback(internal, callback) {
  var callbackQueue = getPendingCallbacks(internal) || setPendingCallbacks(internal, []);
  callbackQueue.push(callback);
}

function enqueueState(internal, partialState) {
  var stateQueue = getPendingStateQueue(internal) || setPendingStateQueue(internal, []);
  stateQueue.push(partialState);
}

function runUpdate(component) {
  var internal = component[_constant.INTERNAL];

  if (!internal) {
    return;
  }

  _host.default.__isUpdating = true;
  var prevElement = internal.__currentElement;
  var prevUnmaskedContext = internal._context;
  var nextUnmaskedContext = internal.__penddingContext || prevUnmaskedContext;
  internal.__penddingContext = undefined;

  if (getPendingStateQueue(internal) || internal.__isPendingForceUpdate) {
    internal.__updateComponent(prevElement, prevElement, prevUnmaskedContext, nextUnmaskedContext);

    (0, _scheduler.flushLayout)();
  }

  _host.default.__isUpdating = false;
}

function mountOrderComparator(c1, c2) {
  return c2[_constant.INTERNAL]._mountID - c1[_constant.INTERNAL]._mountID;
}

function performUpdate() {
  if (_host.default.__isUpdating) {
    return (0, _scheduler.schedule)(performUpdate);
  }

  var component;
  var dirties = dirtyComponents;

  if (dirties.length > 0) {
    // Before next render, we will flush all the effects
    (0, _scheduler.flushEffect)();
    dirtyComponents = []; // Since reconciling a component higher in the owner hierarchy usually (not
    // always -- see shouldComponentUpdate()) will reconcile children, reconcile
    // them before their children by sorting the array.

    if (dirties.length > 1) {
      dirties = dirties.filter(function (c) {
        return !!c[_constant.INTERNAL];
      }).sort(mountOrderComparator);
    }

    while (component = dirties.pop()) {
      runUpdate(component);
    }
  }
}

function scheduleUpdate(component, shouldAsyncUpdate) {
  if (dirtyComponents.indexOf(component) < 0) {
    dirtyComponents.push(component);
  }

  if (shouldAsyncUpdate) {
    // If have been scheduled before, don't not need schedule again
    if (dirtyComponents.length > 1) {
      return;
    }

    (0, _scheduler.schedule)(performUpdate);
  } else {
    performUpdate();
  }
}

function requestUpdate(component, partialState, callback) {
  var internal = component[_constant.INTERNAL];

  if (!internal) {
    return;
  }

  if (callback) {
    enqueueCallback(internal, callback);
  }

  var hasComponentRendered = internal[_constant.RENDERED_COMPONENT]; // setState

  if (partialState) {
    enqueueState(internal, partialState); // State pending when request update in componentWillMount and componentWillReceiveProps,
    // isPendingState default is false value (false or null) and set to true after componentWillReceiveProps,
    // _renderedComponent is null when componentWillMount exec.

    if (!internal.__isPendingState && hasComponentRendered) {
      scheduleUpdate(component, true);
    }
  } else {
    // forceUpdate
    internal.__isPendingForceUpdate = true;

    if (hasComponentRendered) {
      scheduleUpdate(component);
    }
  }
}

var Updater = {
  setState: function (component, partialState, callback) {
    // Flush all effects first before update state
    if (!_host.default.__isUpdating) {
      (0, _scheduler.flushEffect)();
    }

    requestUpdate(component, partialState, callback);
  },
  forceUpdate: function (component, callback) {
    requestUpdate(component, null, callback);
  }
};
var _default = Updater;
exports.default = _default;

/***/ }),

/***/ "./node_modules/_rax@1.1.4@rax/lib/version.js":
/*!****************************************************!*\
  !*** ./node_modules/_rax@1.1.4@rax/lib/version.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = '1.1.0';
exports.default = _default;

/***/ }),

/***/ "./node_modules/_redux-thunk@2.3.0@redux-thunk/es/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_redux-thunk@2.3.0@redux-thunk/es/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./node_modules/_redux@4.0.5@redux/es/redux.js":
/*!*****************************************************!*\
  !*** ./node_modules/_redux@4.0.5@redux/es/redux.js ***!
  \*****************************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/_symbol-observable@1.2.0@symbol-observable/es/index.js");

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */

var randomString = function () {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function () {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */

function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}
/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */


function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function () {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: function (nextReducer) {
      if (typeof nextReducer !== 'function') {
        throw new Error('Expected the nextReducer to be a function.');
      }

      currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
      // Any reducers that existed in both the new and old rootReducer
      // will receive the previous state. This effectively populates
      // the new state tree with any relevant data from the old one.

      dispatch({
        type: ActionTypes.REPLACE
      });
    }
    /**
     * Interoperability point for observable/reactive libraries.
     * @returns {observable} A minimal observable of state changes.
     * For more information, see the observable proposal:
     * https://github.com/tc39/proposal-observable
     */

  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function (observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  }, _ref2;
}
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */


function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function (state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */


function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */


function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function () {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function () {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */


function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),

/***/ "./node_modules/_symbol-observable@1.2.0@symbol-observable/es/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_symbol-observable@1.2.0@symbol-observable/es/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/_symbol-observable@1.2.0@symbol-observable/es/ponyfill.js");
/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../_webpack@4.44.2@webpack/buildin/global.js */ "./node_modules/_webpack@4.44.2@webpack/buildin/global.js"), __webpack_require__(/*! ./../../_webpack@4.44.2@webpack/buildin/harmony-module.js */ "./node_modules/_webpack@4.44.2@webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/_symbol-observable@1.2.0@symbol-observable/es/ponyfill.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_symbol-observable@1.2.0@symbol-observable/es/ponyfill.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
  var result;
  var Symbol = root.Symbol;

  if (typeof Symbol === 'function') {
    if (Symbol.observable) {
      result = Symbol.observable;
    } else {
      result = Symbol('observable');
      Symbol.observable = result;
    }
  } else {
    result = '@@observable';
  }

  return result;
}

/***/ }),

/***/ "./node_modules/_webpack@4.44.2@webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

})
//# sourceMappingURL=index.45a2e51462b181ac6336.hot-update.js.map