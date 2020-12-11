webpackHotUpdate("index",{

/***/ "./.rax/appConfig.ts":
/*!***************************!*\
  !*** ./.rax/appConfig.ts ***!
  \***************************/
/*! exports provided: setAppConfig, getAppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAppConfig", function() { return setAppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppConfig", function() { return getAppConfig; });
var appConfig;

function setAppConfig(config) {
  appConfig = config;
}

function getAppConfig() {
  return appConfig;
}



/***/ }),

/***/ "./.rax/loadRuntimeModules.ts":
/*!************************************!*\
  !*** ./.rax/loadRuntimeModules.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function loadRuntimeModules(runtime) {
  runtime.loadModule(__webpack_require__(/*! ./node_modules/_build-plugin-app-core@0.1.27@build-plugin-app-core/lib/runtime.js */ "./node_modules/_build-plugin-app-core@0.1.27@build-plugin-app-core/lib/runtime.js"));
  runtime.loadModule(__webpack_require__(/*! ./node_modules/_build-plugin-ice-store@1.7.10@build-plugin-ice-store/lib/runtime.js */ "./node_modules/_build-plugin-ice-store@1.7.10@build-plugin-ice-store/lib/runtime.js"));
}

/* harmony default export */ __webpack_exports__["default"] = (loadRuntimeModules);

/***/ }),

/***/ "./.rax/loadStaticModules.ts":
/*!***********************************!*\
  !*** ./.rax/loadStaticModules.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function loadStaticModules() {}

/* harmony default export */ __webpack_exports__["default"] = (loadStaticModules);

/***/ }),

/***/ "./.rax/render.ts":
/*!************************!*\
  !*** ./.rax/render.ts ***!
  \************************/
/*! exports provided: mount, unmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount", function() { return mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmount", function() { return unmount; });
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var driver_universal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! driver-universal */ "./node_modules/_driver-universal@3.1.5@driver-universal/es/index.js");


function mount(appInstance, rootEl) {
  return Object(rax__WEBPACK_IMPORTED_MODULE_0__["render"])(appInstance, rootEl, {
    driver: driver_universal__WEBPACK_IMPORTED_MODULE_1__["default"]
  });
}
function unmount(appInstance) {
  return appInstance._internal.unmountComponent.bind(appInstance._internal);
}

/***/ }),

/***/ "./.rax/runApp.ts":
/*!************************!*\
  !*** ./.rax/runApp.ts ***!
  \************************/
/*! exports provided: runApp, withRouter, history, getHistory, getSearchParams, usePageShow, usePageHide, withPageLifeCycle, registerNativeEventListeners, addNativeEventListener, removeNativeEventListener, ErrorBoundary, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runApp", function() { return runApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return withRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistory", function() { return getHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchParams", function() { return getSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageShow", function() { return usePageShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageHide", function() { return usePageHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPageLifeCycle", function() { return withPageLifeCycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerNativeEventListeners", function() { return registerNativeEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNativeEventListener", function() { return addNativeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNativeEventListener", function() { return removeNativeEventListener; });
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var miniapp_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! miniapp-renderer */ "./node_modules/_miniapp-renderer@0.1.5@miniapp-renderer/lib/index.js");
/* harmony import */ var miniapp_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(miniapp_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var create_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! create-app-shared */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/index.js");
/* harmony import */ var create_app_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(create_app_shared__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "history", function() { return create_app_shared__WEBPACK_IMPORTED_MODULE_2__["history"]; });

/* harmony import */ var rax_app_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rax-app-renderer */ "./node_modules/_rax-app-renderer@0.1.5@rax-app-renderer/lib/index.js");
/* harmony import */ var create_use_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! create-use-router */ "./node_modules/_create-use-router@0.1.2@create-use-router/lib/index.js");
/* harmony import */ var create_use_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(create_use_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loadRuntimeModules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadRuntimeModules */ "./.rax/loadRuntimeModules.ts");
/* harmony import */ var _loadStaticModules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadStaticModules */ "./.rax/loadStaticModules.ts");
/* harmony import */ var _staticConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./staticConfig */ "./.rax/staticConfig.ts");
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./appConfig */ "./.rax/appConfig.ts");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./render */ "./.rax/render.ts");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ErrorBoundary */ "./.rax/ErrorBoundary/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return _ErrorBoundary__WEBPACK_IMPORTED_MODULE_10__["default"]; });


var isWeb = true;
var isByteDanceMicroApp = false;
var isWeChatMiniProgram = false;
var isMiniApp = false;




var defaultWithRouter = Object(create_use_router__WEBPACK_IMPORTED_MODULE_4__["createWithRouter"])({
  createElement: rax__WEBPACK_IMPORTED_MODULE_0__["createElement"]
});







var _createShareAPI = create_app_shared__WEBPACK_IMPORTED_MODULE_2___default()({
  createElement: rax__WEBPACK_IMPORTED_MODULE_0__["createElement"],
  useEffect: rax__WEBPACK_IMPORTED_MODULE_0__["useEffect"],
  withRouter: defaultWithRouter
}, _loadRuntimeModules__WEBPACK_IMPORTED_MODULE_5__["default"]),
    createBaseApp = _createShareAPI.createBaseApp,
    withRouter = _createShareAPI.withRouter,
    createHistory = _createShareAPI.createHistory,
    getHistory = _createShareAPI.getHistory,
    emitLifeCycles = _createShareAPI.emitLifeCycles,
    usePageShow = _createShareAPI.usePageShow,
    usePageHide = _createShareAPI.usePageHide,
    withPageLifeCycle = _createShareAPI.withPageLifeCycle,
    pathRedirect = _createShareAPI.pathRedirect,
    registerNativeEventListeners = _createShareAPI.registerNativeEventListeners,
    addNativeEventListener = _createShareAPI.addNativeEventListener,
    removeNativeEventListener = _createShareAPI.removeNativeEventListener,
    getSearchParams = _createShareAPI.getSearchParams;

function runApp(appConfig, staticConfig) {
  var renderer = rax_app_renderer__WEBPACK_IMPORTED_MODULE_3__["default"];
  renderer({
    appConfig: appConfig,
    staticConfig: staticConfig || _staticConfig__WEBPACK_IMPORTED_MODULE_7__["default"],
    buildConfig: {
      icestarkUMD: false
    },
    setAppConfig: _appConfig__WEBPACK_IMPORTED_MODULE_8__["setAppConfig"],
    createBaseApp: createBaseApp,
    createHistory: createHistory,
    getHistory: getHistory,
    emitLifeCycles: emitLifeCycles,
    pathRedirect: pathRedirect,
    loadStaticModules: _loadStaticModules__WEBPACK_IMPORTED_MODULE_6__["default"],
    ErrorBoundary: _ErrorBoundary__WEBPACK_IMPORTED_MODULE_10__["default"]
  }, {
    createElement: rax__WEBPACK_IMPORTED_MODULE_0__["createElement"],
    mount: _render__WEBPACK_IMPORTED_MODULE_9__["mount"],
    unmount: _render__WEBPACK_IMPORTED_MODULE_9__["unmount"],
    Component: rax__WEBPACK_IMPORTED_MODULE_0__["Component"]
  });
} // Public API

 // Private API

/* harmony default export */ __webpack_exports__["default"] = ({
  createBaseApp: createBaseApp,
  emitLifeCycles: emitLifeCycles
});

/***/ }),

/***/ "./.rax/staticConfig.ts":
/*!******************************!*\
  !*** ./.rax/staticConfig.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var staticConfig = {};

try {
  staticConfig = __webpack_require__(/*! ../src/app.json */ "./src/app.json");
} catch (error) {// ignore error
} // @ts-ignore


/* harmony default export */ __webpack_exports__["default"] = (staticConfig.__esModule ? staticConfig.default : staticConfig);

/***/ }),

/***/ "./.rax/store/types.ts":
/*!*****************************!*\
  !*** ./.rax/store/types.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./.rax/types.ts":
/*!***********************!*\
  !*** ./.rax/types.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/types */ "./.rax/store/types.ts");
/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_store_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _store_types__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _store_types__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/extends.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/extends.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
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

/***/ }),

/***/ "./node_modules/_build-plugin-app-core@0.1.27@build-plugin-app-core/lib/runtime.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_build-plugin-app-core@0.1.27@build-plugin-app-core/lib/runtime.js ***!
  \*****************************************************************************************/
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var module = function (_a) {
  var addProvider = _a.addProvider,
      appConfig = _a.appConfig,
      wrapperRouteComponent = _a.wrapperRouteComponent,
      getSearchParams = _a.getSearchParams,
      createElement = _a.context.createElement;
  var _b = appConfig.app,
      app = _b === void 0 ? {} : _b;
  var _c = app.parseSearchParams,
      parseSearchParams = _c === void 0 ? true : _c;
  wrapperRouteComponent(function wrapperPageComponent(PageComponent) {
    var WrapperedPageComponent = function (props) {
      var searchParams = parseSearchParams && getSearchParams();
      return createElement(PageComponent, __assign({}, Object.assign({}, props, {
        searchParams: searchParams
      })));
    };

    return WrapperedPageComponent;
  });

  if (appConfig.app && appConfig.app.addProvider) {
    addProvider(appConfig.app.addProvider);
  }
};

exports.default = module;

/***/ }),

/***/ "./node_modules/_build-plugin-ice-store@1.7.10@build-plugin-ice-store/lib/runtime.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_build-plugin-ice-store@1.7.10@build-plugin-ice-store/lib/runtime.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store_1 = __webpack_require__(/*! $store */ "./.rax/store/index.ts");

exports.default = function (_a) {
  var addProvider = _a.addProvider,
      appConfig = _a.appConfig,
      _b = _a.context,
      _c = _b.initialData,
      initialData = _c === void 0 ? {} : _c,
      createElement = _b.createElement;

  var StoreProvider = function (_a) {
    var children = _a.children;
    var storeConfig = appConfig.store || {};
    var initialStates = {};

    if (storeConfig.getInitialStates) {
      // @deprecated
      console.warn('Detected that you are using store.getInitialStates, please use app.getInitialData method, Visit https://ice.work/docs/guide/basic/store.');
      initialStates = storeConfig.getInitialStates(initialData);
    } else if (initialData.initialStates) {
      initialStates = initialData.initialStates;
    } else if (storeConfig.initialStates) {
      initialStates = storeConfig.initialStates;
    }

    return createElement(_store_1.default.Provider, {
      initialStates: initialStates,
      children: children
    });
  };

  if (_store_1.default && _store_1.default.Provider) {
    addProvider(StoreProvider);
  }
};

/***/ }),

/***/ "./node_modules/_create-app-container@0.1.3@create-app-container/lib/createNavigation.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/_create-app-container@0.1.3@create-app-container/lib/createNavigation.js ***!
  \***********************************************************************************************/
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createTabBar_1 = __webpack_require__(/*! ./createTabBar */ "./node_modules/_create-app-container@0.1.3@create-app-container/lib/createTabBar.js");

var styles = {
  container: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  },
  alivePage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch'
  }
};

var _updatePageTrigger = function () {};

var alivePages = [];
var alivePagesCache = {};
var config = {
  maxAlivePageNum: 3,
  pageProps: {},
  routes: []
};

var activatePageComponent = function (route, _a) {
  var createElement = _a.createElement;
  route.component().then(function (fn) {
    return fn();
  }).then(function (Page) {
    if (!route.keepAlive) {
      // ignore page without keepAlive
      return false;
    }

    alivePagesCache[route.path] = createElement(Page, __assign({}, config.pageProps)); // Prevent cache from being too large

    if (Object.keys(alivePagesCache).length > config.maxAlivePageNum) {
      delete alivePagesCache[Object.keys(alivePagesCache)[0]];
    } // @ts-ignore


    _updatePageTrigger(Date.now());
  });
}; // eslint-disable-next-line


var renderAlivePages = function (routes, _a) {
  var alivePages = _a.alivePages,
      currentPage = _a.currentPage,
      isAlivePage = _a.isAlivePage,
      createElement = _a.createElement;

  if (alivePages.length > 0) {
    return createElement('div', {
      style: __assign(__assign({}, styles.container), {
        display: isAlivePage ? 'block' : 'none'
      })
    }, alivePages.map(function (alivePage, index) {
      var alivePageRoute = routes.find(function (route) {
        return route.path === alivePage.path;
      });
      var isCurrentPage = alivePageRoute.path === currentPage.path;
      var alivePageComponent = alivePagesCache[alivePageRoute.path] || null;

      if (isCurrentPage && !alivePageComponent) {
        activatePageComponent(alivePageRoute, {
          createElement: createElement
        });
      }

      return createElement('div', {
        key: "alivePage" + index,
        style: __assign(__assign({}, styles.alivePage), {
          display: isCurrentPage ? 'block' : 'none'
        })
      }, alivePageComponent);
    }));
  }

  return null;
};

var createNavigation = function (api) {
  var TabBar = createTabBar_1.default(api);
  return function (props) {
    var createElement = api.createElement,
        useEffect = api.useEffect,
        useState = api.useState,
        Fragment = api.Fragment;
    var staticConfig = props.staticConfig,
        component = props.component,
        history = props.history,
        routes = props.routes;
    var maxAlivePageNum = staticConfig.maxAlivePageNum,
        tabBar = staticConfig.tabBar;

    var _a = useState(null),
        setUpdateTemp = _a[1];

    var currentPathname = history.location.pathname;
    var currentPage = routes.find(function (route) {
      return route.path === currentPathname;
    }) || {};
    var isAlivePage = currentPage.keepAlive;
    useEffect(function () {
      // Use display control alive page, need get alive page list.
      routes.forEach(function (route) {
        if (route.keepAlive) {
          alivePages.push(route);
        }
      }); // If current page is alive page, need update routes.

      if (isAlivePage) {
        // @ts-ignore
        _updatePageTrigger(Date.now());
      } // eslint-disable-next-line

    }, []); // Props to page component

    var pageProps = {};
    Object.keys(props).forEach(function (key) {
      if (key !== 'staticConfig' && key !== 'component') {
        pageProps[key] = props[key];
      }
    });
    config.pageProps = pageProps;
    config.routes = routes;
    _updatePageTrigger = setUpdateTemp; // eslint-disable-next-line

    maxAlivePageNum && (config.maxAlivePageNum = maxAlivePageNum);
    return createElement(Fragment, null, isAlivePage ? null : createElement(component, pageProps), renderAlivePages(routes, {
      alivePages: alivePages,
      currentPage: currentPage,
      isAlivePage: isAlivePage,
      createElement: createElement
    }), createElement(TabBar, {
      config: tabBar,
      history: history
    }));
  };
};

exports.default = createNavigation;

/***/ }),

/***/ "./node_modules/_create-app-container@0.1.3@create-app-container/lib/createTabBar.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_create-app-container@0.1.3@create-app-container/lib/createTabBar.js ***!
  \*******************************************************************************************/
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
var universal_env_1 = {
  isWeex: false,
  isWeb: true,
  isKraken: false,
  isNode: false,
  isMiniApp: false,
  isWeChatMiniProgram: false,
  isWeChatMiniprogram: false
};

var transformToVw_1 = __webpack_require__(/*! ./transformToVw */ "./node_modules/_create-app-container@0.1.3@create-app-container/lib/transformToVw.js");

var getSafeAreaInsetBottom_1 = __webpack_require__(/*! ./getSafeAreaInsetBottom */ "./node_modules/_create-app-container@0.1.3@create-app-container/lib/getSafeAreaInsetBottom.js");

var MAPING = {
  tarBarHeight: 98 + getSafeAreaInsetBottom_1.default(),
  tarBarPaddingBottom: getSafeAreaInsetBottom_1.default(),
  tarBarItemText: 24,
  TarBarItemImgWidth: 30,
  TarBarItemImgHight: 30,
  TarBarItemMarginBottom: 8
};
Object.keys(MAPING).forEach(function (key) {
  if (!universal_env_1.isWeex) {
    MAPING[key] = transformToVw_1.default(MAPING[key]);
  }
});
var styles = {
  tabBar: {
    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '0',
    height: MAPING.tarBarHeight,
    paddingBottom: MAPING.tarBarPaddingBottom,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1rpx solid #eee',
    backgroundColor: '#fff'
  },
  tabBarItem: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabBarItemText: {
    fontSize: MAPING.tarBarItemText
  },
  tabBarItemImg: {
    marginBottom: MAPING.TarBarItemMarginBottom,
    width: MAPING.TarBarItemImgWidth,
    height: MAPING.TarBarItemImgHight
  }
};

var createTabBar = function (api) {
  return function (props) {
    var createElement = api.createElement,
        useEffect = api.useEffect,
        useState = api.useState,
        Fragment = api.Fragment;

    var _a = useState(''),
        pathname = _a[0],
        setPathname = _a[1];

    var _b = props.config,
        config = _b === void 0 ? {} : _b,
        history = props.history,
        _onClick = props.onClick;

    if (!history || !history.location) {
      throw new Error('TabBar should have a props of "history". See https://github.com/ReactTraining/history.');
    }

    var showTabBar = // Have tabBar config
    typeof config === 'object' && Array.isArray(config.items) // Current page need show tabBar
    && config.items.find(function (item) {
      return item.path === pathname;
    });

    var _c = config || {},
        _d = _c.backgroundColor,
        backgroundColor = _d === void 0 ? '#FFF' : _d,
        _e = _c.items,
        items = _e === void 0 ? [] : _e,
        _f = _c.selectedColor,
        selectedColor = _f === void 0 ? '#333' : _f,
        _g = _c.textColor,
        textColor = _g === void 0 ? '#666' : _g;

    useEffect(function () {
      setPathname(history.location.pathname);
      history.listen(function (location) {
        setPathname(location.pathname);
      }); // eslint-disable-next-line
    }, []);
    return createElement(Fragment, null, showTabBar ? createElement('div', {
      style: __assign(__assign({}, styles.tabBar), {
        backgroundColor: backgroundColor
      })
    }, items.map(function (item, index) {
      var selected = item.path === pathname;
      var itemTextColor = item.textColor || textColor;
      var itemSelectedColor = item.selectedColor || selectedColor;
      return createElement('div', {
        key: "tab-" + index,
        style: styles.tabBarItem,
        onClick: function onClick() {
          if (_onClick) {
            _onClick(item);
          }

          if (!item.path) {
            console.warn("TabBar item " + item.name + " need set path");
          } else {
            history.push(item.path);
          }
        }
      }, selected && item.activeIcon ? createElement('img', {
        style: styles.tabBarItemImg,
        src: item.activeIcon
      }) : null, !selected && item.icon ? createElement('img', {
        style: styles.tabBarItemImg,
        src: item.icon
      }) : null, createElement('span', {
        style: __assign(__assign({}, styles.tabBarItemText), {
          color: selected ? itemSelectedColor : itemTextColor
        })
      }, item.name));
    })) : null);
  };
};

exports.default = createTabBar;

/***/ }),

/***/ "./node_modules/_create-app-container@0.1.3@create-app-container/lib/getSafeAreaInsetBottom.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_create-app-container@0.1.3@create-app-container/lib/getSafeAreaInsetBottom.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var universal_env_1 = {
  isWeex: false,
  isWeb: true,
  isKraken: false,
  isNode: false,
  isMiniApp: false,
  isWeChatMiniProgram: false,
  isWeChatMiniprogram: false
}; // The 2018 and 2019 iPhone models has removed the home button and replaced it with a "home indicator" at the bottom.
// These iPhone models should adapt bottom "Home Indicator".

/**
 * Get the safe area inset bottom
 * @return {number} bottom in rpx
 */

var getSafeAreaInsetBottom = function () {
  try {
    var screenHeight = window.screen.height;

    if (universal_env_1.isWeex) {
      // W3C: window.screen.height return the height in CSS pixels
      // WEEX: window.screen.height return the height in device independent pixels
      screenHeight = window.screen.height / window.devicePixelRatio;
    } // 2018 iPhoneX: 812 × 375, iPhoneXS: 812 × 375, iPhone XS Max: 896 × 414, iPhone XR: 896 × 414
    // 2019 iPhone11: 896 x 414, iPhone11 Pro: 812 × 375, iPhone11 Pro Max: 896 × 414
    // Is iPhone and points min-height is 812 can be identified as the 2018 and 2019 iPhone models.


    if (/iphone/gi.test(window.navigator.userAgent) && screenHeight >= 812) {
      // Adapt bottom "Home Indicator".
      return 34;
    } else {
      return 0;
    }
  } catch (e) {
    return 0;
  }
};

exports.default = getSafeAreaInsetBottom;

/***/ }),

/***/ "./node_modules/_create-app-container@0.1.3@create-app-container/lib/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_create-app-container@0.1.3@create-app-container/lib/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTabBar = exports.createNavigation = void 0;

var createNavigation_1 = __webpack_require__(/*! ./createNavigation */ "./node_modules/_create-app-container@0.1.3@create-app-container/lib/createNavigation.js");

exports.createNavigation = createNavigation_1.default;

var createTabBar_1 = __webpack_require__(/*! ./createTabBar */ "./node_modules/_create-app-container@0.1.3@create-app-container/lib/createTabBar.js");

exports.createTabBar = createTabBar_1.default;

/***/ }),

/***/ "./node_modules/_create-app-container@0.1.3@create-app-container/lib/transformToVw.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_create-app-container@0.1.3@create-app-container/lib/transformToVw.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function toFixed(number, precision) {
  // eslint-disable-next-line
  var multiplier = Math.pow(10, precision + 1);
  var wholeNumber = Math.floor(number * multiplier);
  return Math.round(wholeNumber / 10) * 10 / multiplier;
} // transform to vw


function transformToVw(value) {
  var defaults = {
    viewportWidth: 750,
    viewportUnit: 'vw',
    unitPrecision: 5
  };
  var pixels = parseFloat(value);
  var parsedVal = toFixed(pixels / defaults.viewportWidth * 100, defaults.unitPrecision);
  return parsedVal + defaults.viewportUnit;
}

exports.default = transformToVw;

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/appLifeCycles.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/appLifeCycles.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAppLifeCycle = exports.emit = exports.appCycles = void 0;
var universal_env_1 = {
  isWeex: false,
  isWeb: true,
  isKraken: false,
  isNode: false,
  isMiniApp: false,
  isWeChatMiniProgram: false,
  isWeChatMiniprogram: false
};

var env_1 = __webpack_require__(/*! ./env */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/env.js");

var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/constants.js");

var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/utils/index.js");

var history_1 = __webpack_require__(/*! ./history */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/history.js");

var router_1 = __webpack_require__(/*! ./router */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/router.js");

var pageLifeCycles_1 = __webpack_require__(/*! ./pageLifeCycles */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/pageLifeCycles.js");

exports.appCycles = {};
/**
 * Emit life cycle callback
 * @param {string} cycle cycle name
 * @param {object} context callback's context when executed
 * @param  {...any} args callback params
 */

function emit(cycle, context) {
  var args = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }

  if (Object.prototype.hasOwnProperty.call(exports.appCycles, cycle)) {
    var cycles = exports.appCycles[cycle];

    if (cycle === constants_1.SHARE) {
      // In MiniApp, it need return callback result as share info, like { title, desc, path }
      args[0].content = context ? cycles[0].call(context, args[1]) : cycles[0](args[1]);
    } else {
      cycles.forEach(function (fn) {
        // eslint-disable-next-line
        context ? fn.apply(context, args) : fn.apply(void 0, args);
      });
    }
  }
}

exports.emit = emit;
/**
 * Add app lifecycle callback
 * @param {string} cycle cycle name
 * @param {function} callback cycle callback
 */

function addAppLifeCycle(cycle, callback) {
  if (utils_1.isFunction(callback)) {
    // eslint-disable-next-line
    var cycles = exports.appCycles[cycle] = exports.appCycles[cycle] || [];
    cycles.push(callback);
  }
}

exports.addAppLifeCycle = addAppLifeCycle; // Emit MiniApp App lifeCycles

if (env_1.isMiniAppPlatform) {
  window.addEventListener(constants_1.LAUNCH, function (_a) {
    var options = _a.options,
        context = _a.context;
    emit(constants_1.LAUNCH, context, options);
  });
  window.addEventListener('appshow', function (_a) {
    var options = _a.options,
        context = _a.context;
    emit(constants_1.SHOW, context, options);
  });
  window.addEventListener('apphide', function (_a) {
    var context = _a.context;
    emit(constants_1.HIDE, context);
  });
  window.addEventListener('apperror', function (_a) {
    var context = _a.context,
        error = _a.error;
    emit(constants_1.ERROR, context, error);
  });
  window.addEventListener('pagenotfound', function (_a) {
    var context = _a.context;
    emit(constants_1.NOT_FOUND, context);
  });
  window.addEventListener('appshare', function (_a) {
    var context = _a.context,
        shareInfo = _a.shareInfo,
        options = _a.options;
    emit(constants_1.SHARE, context, shareInfo, options);
  });
  window.addEventListener('tabitemclick', function (_a) {
    var options = _a.options,
        context = _a.context;
    emit(constants_1.TAB_ITEM_CLICK, context, options);
  });
} else if (universal_env_1.isWeex) {
  try {
    // https://weex.apache.org/docs/modules/globalEvent.html#addeventlistener
    // Use __weex_require__ in Rax project.
    var globalEvent = __weex_require__('@weex-module/globalEvent');

    globalEvent.addEventListener('WXApplicationDidBecomeActiveEvent', function () {
      router_1.default.current.visibiltyState = true; // Emit app show

      emit(constants_1.SHOW); // Emit page show

      pageLifeCycles_1.emit(constants_1.SHOW, router_1.default.current.pathname);
    });
    globalEvent.addEventListener('WXApplicationWillResignActiveEvent', function () {
      router_1.default.current.visibiltyState = false; // Emit page hide

      pageLifeCycles_1.emit(constants_1.HIDE, router_1.default.current.pathname); // Emit app hide

      emit(constants_1.HIDE);
    });
  } catch (err) {
    console.log("@weex-module/globalEvent error: " + err);
  }
} else if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  document.addEventListener('visibilitychange', function () {
    // Get history
    var history = history_1.getHistory();
    var currentPathName = history ? history.location.pathname : router_1.default.current.pathname; // The app switches from foreground to background

    if (currentPathName === router_1.default.current.pathname) {
      router_1.default.current.visibiltyState = !router_1.default.current.visibiltyState;

      if (router_1.default.current.visibiltyState) {
        // Emit app show
        emit(constants_1.SHOW); // Emit page show

        pageLifeCycles_1.emit(constants_1.SHOW, router_1.default.current.pathname);
      } else {
        // Emit page hide
        pageLifeCycles_1.emit(constants_1.HIDE, router_1.default.current.pathname); // Emit app hide

        emit(constants_1.HIDE);
      }
    }
  }); // Emit error lifeCycles

  window.addEventListener('error', function (event) {
    emit(constants_1.ERROR, null, event.error);
  });
}

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/collectAppLifeCycle.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/collectAppLifeCycle.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var appLifeCycles_1 = __webpack_require__(/*! ./appLifeCycles */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/appLifeCycles.js");

var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/constants.js");

var env_1 = __webpack_require__(/*! ./env */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/env.js");

function collectAppLifeCycle(appConfig) {
  var _a = appConfig.app,
      onLaunch = _a.onLaunch,
      onShow = _a.onShow,
      onError = _a.onError,
      onHide = _a.onHide,
      onTabItemClick = _a.onTabItemClick; // multi-end valid lifecycle
  // Add app lanuch callback

  appLifeCycles_1.addAppLifeCycle(constants_1.LAUNCH, onLaunch); // Add app show callback

  appLifeCycles_1.addAppLifeCycle(constants_1.SHOW, onShow); // Add app error callback

  appLifeCycles_1.addAppLifeCycle(constants_1.ERROR, onError); // Add app hide callback

  appLifeCycles_1.addAppLifeCycle(constants_1.HIDE, onHide); // Add tab bar item click callback

  appLifeCycles_1.addAppLifeCycle(constants_1.TAB_ITEM_CLICK, onTabItemClick); // Add lifecycle callbacks which only valid in Wechat MiniProgram and ByteDance MicroApp

  if (env_1.isWeChatMiniProgram || env_1.isByteDanceMicroApp) {
    var _b = appConfig.app,
        onPageNotFound = _b.onPageNotFound,
        onShareAppMessage = _b.onShareAppMessage; // Add global share callback

    appLifeCycles_1.addAppLifeCycle(constants_1.SHARE, onShareAppMessage); // Add page not found callback

    appLifeCycles_1.addAppLifeCycle(constants_1.NOT_FOUND, onPageNotFound);
  } // Add lifecycle callbacks which only valid in Alibaba MiniApp


  if (env_1.isMiniAppPlatform) {
    var _c = appConfig.app,
        onShareAppMessage = _c.onShareAppMessage,
        onUnhandledRejection = _c.onUnhandledRejection; // Add global share callback

    appLifeCycles_1.addAppLifeCycle(constants_1.SHARE, onShareAppMessage); // Add unhandledrejection callback

    appLifeCycles_1.addAppLifeCycle(constants_1.UNHANDLED_REJECTION, onUnhandledRejection);
  }
}

exports.default = collectAppLifeCycle;

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/constants.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/constants.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _a;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MINIAPP_PAGE_LIFECYCLE = exports.UNHANDLED_REJECTION = exports.TAB_ITEM_CLICK = exports.SHARE = exports.NOT_FOUND = exports.ERROR = exports.LAUNCH = exports.HIDE = exports.SHOW = void 0;
exports.SHOW = 'show';
exports.HIDE = 'hide';
exports.LAUNCH = 'launch';
exports.ERROR = 'error';
exports.NOT_FOUND = 'notfound';
exports.SHARE = 'share';
exports.TAB_ITEM_CLICK = 'tabitemclick';
exports.UNHANDLED_REJECTION = 'unhandledrejection';
exports.MINIAPP_PAGE_LIFECYCLE = (_a = {}, _a[exports.SHOW] = 'miniapp_pageshow', _a[exports.HIDE] = 'miniapp_pagehide', _a);

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/createBaseApp.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/createBaseApp.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var runtimeModule_1 = __webpack_require__(/*! ./runtimeModule */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/runtimeModule.js");

var history_1 = __webpack_require__(/*! ./history */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/history.js");

var env_1 = __webpack_require__(/*! ./env */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/env.js");

var collectAppLifeCycle_1 = __webpack_require__(/*! ./collectAppLifeCycle */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/collectAppLifeCycle.js"); // eslint-disable-next-line


var deepmerge = __webpack_require__(/*! deepmerge */ "./node_modules/_deepmerge@4.2.2@deepmerge/dist/cjs.js");

var DEFAULE_APP_CONFIG = {
  app: {
    rootId: 'root'
  },
  router: {
    type: 'hash'
  }
};

exports.default = function (_a) {
  var loadRuntimeModules = _a.loadRuntimeModules,
      createElement = _a.createElement;
  return function createBaseApp(appConfig, buildConfig, context) {
    if (context === void 0) {
      context = {};
    } // Merge default appConfig to user appConfig


    appConfig = deepmerge(DEFAULE_APP_CONFIG, appConfig); // Set history

    var history = {};

    if (!env_1.isMiniAppPlatform) {
      var router = appConfig.router;
      var type = router.type,
          basename = router.basename;
      var location_1 = context.initialContext ? context.initialContext.location : null;
      history = history_1.createHistory({
        type: type,
        basename: basename,
        location: location_1
      });
      appConfig.router.history = history;
    }

    context.createElement = createElement; // Load runtime modules

    var runtime = new runtimeModule_1.default(appConfig, buildConfig, context);
    loadRuntimeModules(runtime); // Collect app lifeCyle

    collectAppLifeCycle_1.default(appConfig);
    return {
      history: history,
      runtime: runtime,
      appConfig: appConfig
    };
  };
};

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/emitLifeCycles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/emitLifeCycles.js ***!
  \****************************************************************************************/
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var history_1 = __webpack_require__(/*! ./history */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/history.js");

var router_1 = __webpack_require__(/*! ./router */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/router.js");

var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/constants.js");

var appLifeCycles_1 = __webpack_require__(/*! ./appLifeCycles */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/appLifeCycles.js");

var pageLifeCycles_1 = __webpack_require__(/*! ./pageLifeCycles */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/pageLifeCycles.js");

var env_1 = __webpack_require__(/*! ./env */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/env.js");

function emitLifeCycles() {
  if (env_1.isMiniAppPlatform) {
    router_1.default.current = {
      pathname: window.__pageId,
      visibiltyState: true
    };
  } else {
    // Get history
    var history_2 = history_1.getHistory();
    var pathname = history_2.location.pathname; // Set current router

    router_1.default.current = {
      pathname: pathname,
      visibiltyState: true
    }; // Emit app lifecycle

    appLifeCycles_1.emit(constants_1.LAUNCH);
    appLifeCycles_1.emit(constants_1.SHOW); // Listen history change

    history_2.listen(function (location) {
      if (location.pathname !== router_1.default.current.pathname) {
        // Flow router info
        router_1.default.prev = __assign({}, router_1.default.current);
        router_1.default.current = {
          pathname: location.pathname,
          visibiltyState: true
        };
        router_1.default.prev.visibiltyState = false;
        pageLifeCycles_1.emit(constants_1.HIDE, router_1.default.prev.pathname);
        pageLifeCycles_1.emit(constants_1.SHOW, router_1.default.current.pathname);
      }
    });
  }
}

exports.default = emitLifeCycles;

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/enhanceWithRouter.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/enhanceWithRouter.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var env_1 = __webpack_require__(/*! ./env */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/env.js");

function enhanceWithRouter(_a) {
  var withRouter = _a.withRouter,
      createElement = _a.createElement;

  if (env_1.isMiniAppPlatform) {
    withRouter = function (Component) {
      function Wrapper(props) {
        // eslint-disable-next-line
        var history = window.history;
        return createElement(Component, Object.assign({}, props, {
          history: history,
          location: history.location
        }));
      } // eslint-disable-next-line


      Wrapper.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';
      Wrapper.WrappedComponent = Component;
      return Wrapper;
    };
  }

  return withRouter;
}

exports.default = enhanceWithRouter;

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/env.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/env.js ***!
  \*****************************************************************************/
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

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMiniAppPlatform = void 0;
var universal_env_1 = {
  isWeex: false,
  isWeb: true,
  isKraken: false,
  isNode: false,
  isMiniApp: false,
  isWeChatMiniProgram: false,
  isWeChatMiniprogram: false
};
exports.isMiniAppPlatform = (universal_env_1.isMiniApp || universal_env_1.isWeChatMiniProgram || universal_env_1.isByteDanceMicroApp) && !universal_env_1.isWeb;

__exportStar({
  isWeex: false,
  isWeb: true,
  isKraken: false,
  isNode: false,
  isMiniApp: false,
  isWeChatMiniProgram: false,
  isWeChatMiniprogram: false
}, exports);

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/getSearchParams.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/getSearchParams.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var queryString = __webpack_require__(/*! query-string */ "./node_modules/_query-string@6.13.7@query-string/index.js");

var history_1 = __webpack_require__(/*! ./history */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/history.js");

function default_1() {
  var history = history_1.getHistory();

  if (history && history.location && history.location.search) {
    return queryString.parse(history.location.search);
  }

  return {};
}

exports.default = default_1;

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/history.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/history.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = exports.createHistory = exports.getHistory = void 0;

var history_1 = __webpack_require__(/*! history */ "./node_modules/_history@4.10.1@history/esm/history.js");

var miniapp_history_1 = __webpack_require__(/*! miniapp-history */ "./node_modules/_miniapp-history@0.1.4@miniapp-history/es/index.js");

var env_1 = __webpack_require__(/*! ./env */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/env.js"); // eslint-disable-next-line


var history;
exports.history = history;

function createHistory(_a) {
  var routes = _a.routes,
      customHistory = _a.customHistory,
      type = _a.type,
      basename = _a.basename,
      location = _a.location;

  if (process.env.__IS_SERVER__) {
    exports.history = history = history_1.createMemoryHistory();
    history.location = location;
  } else if (customHistory) {
    exports.history = history = customHistory;
  } else {
    // Force memory history when env is weex or kraken
    if (env_1.isWeex || env_1.isKraken) {
      type = 'memory';
    }

    if (type === 'hash') {
      exports.history = history = history_1.createHashHistory({
        basename: basename
      });
    } else if (type === 'browser') {
      exports.history = history = history_1.createBrowserHistory({
        basename: basename
      });
    } else if (env_1.isMiniAppPlatform) {
      window.history = miniapp_history_1.createMiniAppHistory(routes);
      window.location = window.history.location;
      exports.history = history = window.history;
    } else {
      exports.history = history = history_1.createMemoryHistory();
    }
  }

  return history;
}

exports.createHistory = createHistory;

function getHistory() {
  return env_1.isMiniAppPlatform ? window.history : history;
}

exports.getHistory = getHistory;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../_process@0.11.10@process/browser.js */ "./node_modules/_process@0.11.10@process/browser.js")))

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = void 0;

var enhanceWithRouter_1 = __webpack_require__(/*! ./enhanceWithRouter */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/enhanceWithRouter.js");

var appLifeCycles_1 = __webpack_require__(/*! ./appLifeCycles */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/appLifeCycles.js");

var pageLifeCycles_1 = __webpack_require__(/*! ./pageLifeCycles */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/pageLifeCycles.js");

var emitLifeCycles_1 = __webpack_require__(/*! ./emitLifeCycles */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/emitLifeCycles.js");

var createBaseApp_1 = __webpack_require__(/*! ./createBaseApp */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/createBaseApp.js");

var history_1 = __webpack_require__(/*! ./history */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/history.js");

Object.defineProperty(exports, "history", {
  enumerable: true,
  get: function get() {
    return history_1.history;
  }
});

var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/utils/index.js");

var nativeEventListener_1 = __webpack_require__(/*! ./nativeEventListener */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/nativeEventListener.js");

var getSearchParams_1 = __webpack_require__(/*! ./getSearchParams */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/getSearchParams.js");

var collectAppLifeCycle_1 = __webpack_require__(/*! ./collectAppLifeCycle */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/collectAppLifeCycle.js");

function createShareAPI(_a, loadRuntimeModules) {
  var withRouter = _a.withRouter,
      createElement = _a.createElement,
      useEffect = _a.useEffect;

  var _b = pageLifeCycles_1.createUsePageLifeCycle({
    useEffect: useEffect
  }),
      usePageShow = _b.usePageShow,
      usePageHide = _b.usePageHide;

  return {
    createBaseApp: createBaseApp_1.default({
      loadRuntimeModules: loadRuntimeModules,
      createElement: createElement
    }),
    // history api
    withRouter: enhanceWithRouter_1.default({
      withRouter: withRouter,
      createElement: createElement
    }),
    createHistory: history_1.createHistory,
    getHistory: history_1.getHistory,
    getSearchParams: getSearchParams_1.default,
    // lifeCycle api
    emitLifeCycles: emitLifeCycles_1.default,
    collectAppLifeCycle: collectAppLifeCycle_1.default,
    usePageShow: usePageShow,
    usePageHide: usePageHide,
    withPageLifeCycle: pageLifeCycles_1.withPageLifeCycle,
    addAppLifeCycle: appLifeCycles_1.addAppLifeCycle,
    // utils api
    pathRedirect: utils_1.pathRedirect,
    registerNativeEventListeners: nativeEventListener_1.registerNativeEventListeners,
    addNativeEventListener: nativeEventListener_1.addNativeEventListener,
    removeNativeEventListener: nativeEventListener_1.removeNativeEventListener
  };
}

exports.default = createShareAPI;

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/nativeEventListener.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/nativeEventListener.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeNativeEventListener = exports.addNativeEventListener = exports.registerNativeEventListeners = void 0; // eslint-disable-next-line

function registerNativeEventListeners() {// For rax miniapp runtime babel plugins prev compile
}

exports.registerNativeEventListeners = registerNativeEventListeners;

function addNativeEventListener(eventName, callback) {
  document.addEventListener(eventName, callback);
}

exports.addNativeEventListener = addNativeEventListener;

function removeNativeEventListener(evetName, callback) {
  document.removeEventListener(evetName, callback);
}

exports.removeNativeEventListener = removeNativeEventListener;

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/pageLifeCycles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/pageLifeCycles.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUsePageLifeCycle = exports.withPageLifeCycle = exports.emit = void 0;

var env_1 = __webpack_require__(/*! ./env */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/env.js");

var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/constants.js");

var router_1 = __webpack_require__(/*! ./router */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/router.js"); // visibleListeners => { [pathname]: { show: [], hide: [] } }


var visibleListeners = {};

function addPageLifeCycle(cycle, callback) {
  var _a;

  if (env_1.isMiniAppPlatform) {
    document.addEventListener(constants_1.MINIAPP_PAGE_LIFECYCLE[cycle], callback);
  } else {
    var pathname = router_1.default.current.pathname;

    if (!visibleListeners[pathname]) {
      visibleListeners[pathname] = (_a = {}, _a[constants_1.SHOW] = [], _a[constants_1.HIDE] = [], _a);
    }

    visibleListeners[pathname][cycle].push(callback);
  }
}

function emit(cycle, pathname) {
  var _a;

  var args = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  } // Ensure queue exists


  if (visibleListeners[pathname] && visibleListeners[pathname][cycle]) {
    for (var i = 0, l = visibleListeners[pathname][cycle].length; i < l; i++) {
      (_a = visibleListeners[pathname][cycle])[i].apply(_a, args);
    }
  }
}

exports.emit = emit;

function createPageLifeCycle(useEffect) {
  return function (cycle, callback) {
    useEffect(function () {
      // When component did mount, it will trigger usePageShow callback
      if (cycle === constants_1.SHOW) {
        callback();
      }

      var pathname = router_1.default.current.pathname;
      addPageLifeCycle(cycle, callback);
      return function () {
        if (visibleListeners[pathname]) {
          var index = visibleListeners[pathname][cycle].indexOf(callback);

          if (index > -1) {
            visibleListeners[pathname][cycle].splice(index, 1);
          }
        }
      }; // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  };
}

function withPageLifeCycle(Component) {
  var Wrapper =
  /** @class */
  function (_super) {
    __extends(Wrapper, _super);

    function Wrapper() {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var _this = _super.apply(this, args) || this;

      if (_this.onShow) {
        if (!env_1.isMiniAppPlatform) {
          // In MiniApp platform show event will trigger after addPageLifeCycle, so it needn't be execute in constructor
          _this.onShow();
        }

        addPageLifeCycle(constants_1.SHOW, _this.onShow.bind(_this));
      }

      if (_this.onHide) {
        addPageLifeCycle(constants_1.HIDE, _this.onHide.bind(_this));
      } // Keep the path name corresponding to current page component


      _this.pathname = router_1.default.current.pathname;
      return _this;
    }

    Wrapper.prototype.componentWillUnmount = function () {
      var _a; // eslint-disable-next-line no-unused-expressions


      (_a = _super.prototype.componentWillUnmount) === null || _a === void 0 ? void 0 : _a.call(this);
      visibleListeners[this.pathname] = null;
    };

    return Wrapper;
  }(Component);

  Wrapper.displayName = "withPageLifeCycle(" + (Component.displayName || Component.name) + ")";
  return Wrapper;
}

exports.withPageLifeCycle = withPageLifeCycle;

function createUsePageLifeCycle(_a) {
  var useEffect = _a.useEffect;
  return {
    usePageShow: function usePageShow(callback) {
      createPageLifeCycle(useEffect)(constants_1.SHOW, callback);
    },
    usePageHide: function usePageHide(callback) {
      createPageLifeCycle(useEffect)(constants_1.HIDE, callback);
    }
  };
}

exports.createUsePageLifeCycle = createUsePageLifeCycle;

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/router.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/router.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var env_1 = __webpack_require__(/*! ./env */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/env.js");

var current = {
  pathname: '/',
  visibiltyState: true
};
var router = {
  prev: null,
  current: current
};
Object.defineProperty(router, 'current', {
  get: function get() {
    if (!env_1.isMiniAppPlatform) {
      return current;
    }

    return Object.assign(current, {
      pathname: window.__pageId
    });
  },
  set: function set(value) {
    Object.assign(current, value);
  }
});
exports.default = router;

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/runtimeModule.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/runtimeModule.js ***!
  \***************************************************************************************/
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var history_1 = __webpack_require__(/*! ./history */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/history.js");

var getSearchParams_1 = __webpack_require__(/*! ./getSearchParams */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/getSearchParams.js");

var RuntimeModule =
/** @class */
function () {
  function RuntimeModule(appConfig, buildConfig, context) {
    var _this = this;

    this.setRenderRouter = function (renderRouter) {
      _this.renderRouter = renderRouter;
    };

    this.addProvider = function (Provider) {
      _this.AppProvider.push(Provider);
    };

    this.addDOMRender = function (render) {
      _this.modifyDOMRender = render;
    };

    this.modifyRoutes = function (modifyFn) {
      _this.modifyRoutesRegistration.push(modifyFn);
    };

    this.wrapperRouteComponent = function (wrapperRoute) {
      _this.wrapperRouteRegistration.push(wrapperRoute);
    };

    this.wrapperRoutes = function (routes) {
      return routes.map(function (item) {
        if (item.children) {
          item.children = _this.wrapperRoutes(item.children);
        } else if (item.component) {
          item.routeWrappers = _this.wrapperRouteRegistration;
        }

        return item;
      });
    };

    this.getAppRouter = function () {
      var routes = _this.wrapperRoutes(_this.modifyRoutesRegistration.reduce(function (acc, curr) {
        return curr(acc);
      }, []));

      return _this.renderRouter(routes);
    };

    this.renderRouter = function () {
      return function () {
        return context.createElement('div', null, 'No route');
      };
    };

    this.AppProvider = [];
    this.appConfig = appConfig;
    this.buildConfig = buildConfig;
    this.context = context;
    this.modifyDOMRender = null;
    this.modifyRoutesRegistration = [];
    this.wrapperRouteRegistration = [];
  }

  RuntimeModule.prototype.loadModule = function (module) {
    var runtimeAPI = {
      setRenderRouter: this.setRenderRouter,
      addProvider: this.addProvider,
      addDOMRender: this.addDOMRender,
      modifyRoutes: this.modifyRoutes,
      wrapperRouteComponent: this.wrapperRouteComponent,
      createHistory: history_1.createHistory,
      getSearchParams: getSearchParams_1.default
    };
    if (module) module.default(__assign(__assign({}, runtimeAPI), {
      appConfig: this.appConfig,
      buildConfig: this.buildConfig,
      context: this.context
    }));
  };

  RuntimeModule.prototype.composeAppProvider = function () {
    var _this = this;

    if (!this.AppProvider.length) return null;
    return this.AppProvider.reduce(function (ProviderComponent, CurrentProvider) {
      return function (_a) {
        var children = _a.children,
            rest = __rest(_a, ["children"]);

        var element = CurrentProvider ? _this.context.createElement(CurrentProvider, __assign({}, rest), children) : _this.context.createElement(children);
        return _this.context.createElement(ProviderComponent, __assign({}, rest), element);
      };
    });
  };

  return RuntimeModule;
}();

exports.default = RuntimeModule;

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/utils/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/utils/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathRedirect = exports.isFunction = void 0;

var type_1 = __webpack_require__(/*! ./type */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/utils/type.js");

Object.defineProperty(exports, "isFunction", {
  enumerable: true,
  get: function get() {
    return type_1.isFunction;
  }
});

var pathRedirect_1 = __webpack_require__(/*! ./pathRedirect */ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/utils/pathRedirect.js");

exports.pathRedirect = pathRedirect_1.default;

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/utils/pathRedirect.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/utils/pathRedirect.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint no-undef:0 */
// In a Single-Page Application, sometimes we need to jump to a specific route.
// It is very simple in the Web application, url like #/xxx can jump to the corresponding page.

Object.defineProperty(exports, "__esModule", {
  value: true
}); // Things seem to be very complicated in Weex, because using `MemoryHistory`,
// which is used as a reference implementation and may also be used in non-DOM environments.
// We cannot jump directly through url.

var universal_env_1 = {
  isWeex: false,
  isWeb: true,
  isKraken: false,
  isNode: false,
  isMiniApp: false,
  isWeChatMiniProgram: false,
  isWeChatMiniprogram: false
}; // We want to control applications on different platforms to jump to specific pages through unified parameters.
// Like https://xxx.com?_path=/page1, use `_path` to jump to the specific route.

var TARGET_PATH_REG = /[?&]_path=([^&#]+)/i;

function pathRedirect(history, routes) {
  var targetPath = '';
  var targetQuery = null; // In Web, use location.search first

  if (universal_env_1.isWeb && TARGET_PATH_REG.test(window.location.search)) {
    targetQuery = window.location.search.match(TARGET_PATH_REG);
  } // In Weex, use location.href first. Support by rax-weex framework


  if (universal_env_1.isWeex && TARGET_PATH_REG.test(window.location.href)) {
    targetQuery = window.location.href.match(TARGET_PATH_REG);
  } // If there is no `_path` in url search, try history.location.


  if (!targetQuery && TARGET_PATH_REG.test(history.location.search)) {
    targetQuery = history.location.search.match(TARGET_PATH_REG);
  }

  var isConfirmed = false;
  targetPath = targetQuery ? targetQuery[1] : '';

  for (var i = 0, l = routes.length; i < l; i++) {
    if (targetPath === routes[i].path) {
      isConfirmed = true;
      break;
    }
  }

  if (targetPath && !isConfirmed) {
    console.warn('Warning: url query `_path` should be an exist path in app.json, see: https://rax.js.org/docs/guide/routes ');
    return false;
  } // If `targetPath` exists, jump to the specific route.


  if (targetPath) {
    history.replace(targetPath + history.location.search);
  }
}

exports.default = pathRedirect;

/***/ }),

/***/ "./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/utils/type.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_create-app-shared@0.1.17@create-app-shared/lib/utils/type.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = void 0;

exports.isFunction = function (target) {
  return typeof target === 'function';
};

/***/ }),

/***/ "./node_modules/_create-use-router@0.1.2@create-use-router/lib/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_create-use-router@0.1.2@create-use-router/lib/index.js ***!
  \******************************************************************************/
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWithRouter = exports.createUseRouter = void 0;

var pathToRegexpModule = __webpack_require__(/*! path-to-regexp */ "./node_modules/_path-to-regexp@6.2.0@path-to-regexp/dist.es2015/index.js");

var cache = {};
var _initialized = false;
var _routerConfig = null;
var router = {
  history: null,
  handles: [],
  errorHandler: function errorHandler() {},
  addHandle: function addHandle(handle) {
    return router.handles.push(handle);
  },
  removeHandle: function removeHandle(handleId) {
    router.handles[handleId - 1] = null;
  },
  triggerHandles: function triggerHandles(component) {
    router.handles.forEach(function (handle) {
      if (handle) {
        handle(component);
      }
    });
  },
  match: function match(fullpath) {
    if (fullpath == null) return;
    router.fullpath = fullpath;
    var parent = router.root; // @ts-ignore

    var matched = matchRoute(parent, parent.path, fullpath); // eslint-disable-next-line

    function next(parent) {
      var current = matched.next();

      if (current.done) {
        var error = new Error("No match for " + fullpath); // @ts-ignore

        return router.errorHandler(error, router.history.location);
      }

      var component = current.$.route.component;

      if (typeof component === 'function') {
        component = component(current.$.params, router.history.location);
      }

      if (component instanceof Promise) {
        // Lazy loading component by import('./Foo')
        // eslint-disable-next-line
        return component.then(function (component) {
          // Check current fullpath avoid router has changed before lazy loading complete
          // @ts-ignore
          if (fullpath === router.fullpath) {
            router.triggerHandles(component);
          }
        });
      } else if (component != null) {
        router.triggerHandles(component);
        return component;
      } else {
        return next(parent);
      }
    }

    return next(parent);
  }
};

function decodeParam(val) {
  try {
    return decodeURIComponent(val);
  } catch (err) {
    return val;
  }
}

function matchLocation(_a) {
  var pathname = _a.pathname;
  router.match(pathname);
}

function matchPath(route, pathname, parentParams) {
  // eslint-disable-next-line
  var path = route.path,
      routes = route.routes,
      _a = route.exact,
      end = _a === void 0 ? true : _a,
      _b = route.strict,
      strict = _b === void 0 ? false : _b,
      _c = route.sensitive,
      sensitive = _c === void 0 ? false : _c; // If not has path or has routes that should do not exact match

  if (path == null || routes) {
    end = false;
  } // Default path is empty


  path = path || '';
  var regexpCacheKey = path + "|" + end + "|" + strict + "|" + sensitive;
  var keysCacheKey = regexpCacheKey + "|";
  var regexp = cache[regexpCacheKey];
  var keys = cache[keysCacheKey] || [];

  if (!regexp) {
    regexp = pathToRegexpModule.pathToRegexp(path, keys, {
      end: end,
      strict: strict,
      sensitive: sensitive
    });
    cache[regexpCacheKey] = regexp;
    cache[keysCacheKey] = keys;
  }

  var result = regexp.exec(pathname);

  if (!result) {
    return null;
  }

  var url = result[0];

  var params = __assign(__assign({}, parentParams), {
    history: router.history,
    location: router.history.location
  });

  for (var i = 1; i < result.length; i++) {
    var key = keys[i - 1];
    var prop = key.name;
    var value = result[i];

    if (value !== undefined || !Object.prototype.hasOwnProperty.call(params, prop)) {
      if (key.repeat) {
        params[prop] = value ? value.split(key.delimiter).map(decodeParam) : [];
      } else {
        params[prop] = value ? decodeParam(value) : value;
      }
    }
  }

  return {
    path: !end && url.charAt(url.length - 1) === '/' ? url.substr(1) : url,
    params: params
  };
}

function matchRoute(route, baseUrl, pathname, parentParams) {
  var matched;
  var childMatches;
  var childIndex = 0;
  return {
    next: function next() {
      if (!matched) {
        matched = matchPath(route, pathname, parentParams);

        if (matched) {
          return {
            done: false,
            $: {
              route: route,
              baseUrl: baseUrl,
              path: matched.path,
              params: matched.params
            }
          };
        }
      }

      if (matched && route.routes) {
        while (childIndex < route.routes.length) {
          if (!childMatches) {
            var childRoute = route.routes[childIndex];
            childRoute.parent = route;
            childMatches = matchRoute(childRoute, baseUrl + matched.path, pathname.substr(matched.path.length), matched.params);
          }

          var childMatch = childMatches.next();

          if (!childMatch.done) {
            return {
              done: false,
              $: childMatch.$
            };
          }

          childMatches = null;
          childIndex++;
        }
      }

      return {
        done: true
      };
    }
  };
}

function getInitialComponent(routerConfig) {
  var InitialComponent = [];

  if (_routerConfig === null) {
    if (typeof routerConfig === 'function') {
      routerConfig = routerConfig();
    }

    if (true) {
      if (!routerConfig) {
        throw new Error('Error: useRouter should have routerConfig.');
      }

      if (!routerConfig.history || !routerConfig.routes) {
        throw new Error('Error: routerConfig should contain history and routes.');
      }
    }

    _routerConfig = routerConfig;
  }

  if (_routerConfig.InitialComponent) {
    InitialComponent = _routerConfig.InitialComponent;
  }

  router.history = _routerConfig.history;
  return InitialComponent;
}

function createUseRouter(api) {
  var useState = api.useState,
      useLayoutEffect = api.useLayoutEffect;
  return function (routerConfig) {
    var _a = useState(getInitialComponent(routerConfig)),
        component = _a[0],
        setComponent = _a[1];

    useLayoutEffect(function () {
      if (_initialized) throw new Error('Error: useRouter can only be called once.');
      _initialized = true;
      var history = _routerConfig.history;
      var routes = _routerConfig.routes; // @ts-ignore

      router.root = Array.isArray(routes) ? {
        routes: routes
      } : routes; // eslint-disable-next-line

      var handleId = router.addHandle(function (component) {
        setComponent(component);
      }); // Init path match

      if (!_routerConfig.InitialComponent) {
        matchLocation(history.location);
      }

      var unlisten = history.listen(function (location) {
        matchLocation(location);
      });
      return function () {
        router.removeHandle(handleId);
        unlisten();
      };
    }, []);
    return {
      component: component
    };
  };
}

exports.createUseRouter = createUseRouter;

function createWithRouter(api) {
  var createElement = api.createElement;
  return function (Component) {
    function Wrapper(props) {
      var history = router.history;
      return createElement(Component, __assign(__assign({}, props), {
        history: history,
        location: history.location
      }));
    }

    Wrapper.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
    Wrapper.WrappedComponent = Component;
    return Wrapper;
  };
}

exports.createWithRouter = createWithRouter;

/***/ }),

/***/ "./node_modules/_decode-uri-component@0.2.0@decode-uri-component/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_decode-uri-component@0.2.0@decode-uri-component/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
  try {
    // Try to decode the entire string first
    return decodeURIComponent(components.join(''));
  } catch (err) {// Do nothing
  }

  if (components.length === 1) {
    return components;
  }

  split = split || 1; // Split the array in 2 parts

  var left = components.slice(0, split);
  var right = components.slice(split);
  return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
  try {
    return decodeURIComponent(input);
  } catch (err) {
    var tokens = input.match(singleMatcher);

    for (var i = 1; i < tokens.length; i++) {
      input = decodeComponents(tokens, i).join('');
      tokens = input.match(singleMatcher);
    }

    return input;
  }
}

function customDecodeURIComponent(input) {
  // Keep track of all the replacements and prefill the map with the `BOM`
  var replaceMap = {
    '%FE%FF': "\uFFFD\uFFFD",
    '%FF%FE': "\uFFFD\uFFFD"
  };
  var match = multiMatcher.exec(input);

  while (match) {
    try {
      // Decode as big chunks as possible
      replaceMap[match[0]] = decodeURIComponent(match[0]);
    } catch (err) {
      var result = decode(match[0]);

      if (result !== match[0]) {
        replaceMap[match[0]] = result;
      }
    }

    match = multiMatcher.exec(input);
  } // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else


  replaceMap['%C2'] = "\uFFFD";
  var entries = Object.keys(replaceMap);

  for (var i = 0; i < entries.length; i++) {
    // Replace all decoded components
    var key = entries[i];
    input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
  }

  return input;
}

module.exports = function (encodedURI) {
  if (typeof encodedURI !== 'string') {
    throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
  }

  try {
    encodedURI = encodedURI.replace(/\+/g, ' '); // Try the built in decoder first

    return decodeURIComponent(encodedURI);
  } catch (err) {
    // Fallback to a more advanced decoder
    return customDecodeURIComponent(encodedURI);
  }
};

/***/ }),

/***/ "./node_modules/_deepmerge@4.2.2@deepmerge/dist/cjs.js":
/*!*************************************************************!*\
  !*** ./node_modules/_deepmerge@4.2.2@deepmerge/dist/cjs.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function (value) {
  return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
  return !!value && typeof value === 'object';
}

function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
} // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}

function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}

function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function (element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}

function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }

  var customMerge = options.customMerge(key);
  return typeof customMerge === 'function' ? customMerge : deepmerge;
}

function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
}

function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}

function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
} // Protects from prototype poisoning and unexpected merging up the prototype chain.


function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
  && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
  && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
  var destination = {};

  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }

  getKeys(source).forEach(function (key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }

    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}

function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
  // implementations can use it. The caller may not replace it.

  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);

  if (!(sourceIsArray === targetIsArray)) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}

deepmerge.all = function (array, options) {
  if (!Array.isArray(array)) {
    throw new Error('first argument should be an array');
  }

  return array.reduce(function (prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};

var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;

/***/ }),

/***/ "./node_modules/_driver-dom@2.1.3@driver-dom/es/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/_driver-dom@2.1.3@driver-dom/es/index.js ***!
  \***************************************************************/
/*! exports provided: setViewportWidth, setUnitPrecision, setDecimalPixelTransformer, setTagNamePrefix, createBody, createEmpty, createText, updateText, createElement, appendChild, removeChild, replaceChild, insertAfter, insertBefore, addEventListener, removeEventListener, removeAttribute, setAttribute, setStyle, beforeRender, afterRender, removeChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setViewportWidth", function() { return setViewportWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUnitPrecision", function() { return setUnitPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDecimalPixelTransformer", function() { return setDecimalPixelTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTagNamePrefix", function() { return setTagNamePrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBody", function() { return createBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmpty", function() { return createEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createText", function() { return createText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateText", function() { return updateText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendChild", function() { return appendChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChild", function() { return removeChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceChild", function() { return replaceChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return removeAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeRender", function() { return beforeRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterRender", function() { return afterRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChildren", function() { return removeChildren; });
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warning */ "./node_modules/_driver-dom@2.1.3@driver-dom/es/warning.js");
/**
 * Driver for Web DOM
 **/

var RPX_REG = /[-+]?\d*\.?\d+(rpx)/g; // opacity -> opa
// fontWeight -> ntw
// lineHeight|lineClamp -> ne[ch]
// flex|flexGrow|flexPositive|flexShrink|flexNegative|boxFlex|boxFlexGroup|zIndex -> ex(?:s|g|n|p|$)
// order -> ^ord
// zoom -> zoo
// gridArea|gridRow|gridRowEnd|gridRowSpan|gridRowStart|gridColumn|gridColumnEnd|gridColumnSpan|gridColumnStart -> grid
// columnCount -> mnc
// tabSize -> bs
// orphans -> orp
// windows -> ows
// animationIterationCount -> onit
// borderImageOutset|borderImageSlice|borderImageWidth -> erim

var NON_DIMENSIONAL_REG = /opa|ntw|ne[ch]|ex(?:s|g|n|p|$)|^ord|zoo|grid|orp|ows|mnc|^columns$|bs|erim|onit/i;
var EVENT_PREFIX_REG = /^on[A-Z]/;
var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
var HTML = '__html';
var INNER_HTML = 'innerHTML';
var CLASS_NAME = 'className';
var CLASS = 'class';
var STYLE = 'style';
var CHILDREN = 'children';
var TEXT_CONTENT_ATTR = 'textContent';
var CREATE_ELEMENT = 'createElement';
var CREATE_COMMENT = 'createComment';
var CREATE_TEXT_NODE = 'createTextNode';
var SET_ATTRIBUTE = 'setAttribute';
var REMOVE_ATTRIBUTE = 'removeAttribute';
var SVG_NS = 'http://www.w3.org/2000/svg';
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var TEXT_SPLIT_COMMENT = '|';
var EMPTY = '';
var HYDRATION_INDEX = '__i';
var HYDRATION_APPEND = '__a';
var WITH_INNERHTML = '__h';

var __DEV__ = "development" !== 'production';

var tagNamePrefix = EMPTY; // Flag indicating if the diff is currently within an SVG

var isSVGMode = false;
var isHydrating = false;
var viewportWidth = 750;
var unitPrecision = 4;

var decimalPixelTransformer = function (value) {
  return value;
};
/**
 * Set viewport width.
 * @param viewport {Number} Viewport width, default to 750.
 */


function setViewportWidth(viewport) {
  viewportWidth = viewport;
}
/**
 * Set unit precision.
 * @param n {Number} Unit precision, default to 4.
 */

function setUnitPrecision(n) {
  unitPrecision = n;
}
/**
 * Set a function to transform unit of pixel,
 * default to passthrough.
 * @param {Function} transformer function
 */

function setDecimalPixelTransformer(transformer) {
  decimalPixelTransformer = transformer;
}

function unitTransformer(n) {
  return toFixed(parseFloat(n) / (viewportWidth / 100), unitPrecision) + 'vw';
}

function toFixed(number, precision) {
  var multiplier = Math.pow(10, precision + 1);
  var wholeNumber = Math.floor(number * multiplier);
  return Math.round(wholeNumber / 10) * 10 / multiplier;
}
/**
 * Create a cached version of a pure function.
 */


function cached(fn) {
  var cache = Object.create(null);
  return function (str) {
    return cache[str] || (cache[str] = fn(str));
  };
}

function calcRpxToVw(value) {
  return value.replace(RPX_REG, unitTransformer);
}

function isRpx(str) {
  return RPX_REG.test(str);
} // Cache the convert fn.


var convertUnit = cached(function (value) {
  return isRpx(value) ? calcRpxToVw(value) : value;
});
/**
 * Camelize CSS property.
 * Vendor prefixes should begin with a capital letter.
 * For example:
 * background-color -> backgroundColor
 * -webkit-transition -> webkitTransition
 */

var camelizeStyleName = cached(function (name) {
  return name.replace(/-([a-z])/gi, function (s, g) {
    return g.toUpperCase();
  });
});
var isDimensionalProp = cached(function (prop) {
  return !NON_DIMENSIONAL_REG.test(prop);
});
var isEventProp = cached(function (prop) {
  return EVENT_PREFIX_REG.test(prop);
});
function setTagNamePrefix(prefix) {
  tagNamePrefix = prefix;
}
function createBody() {
  return document.body;
}
function createEmpty(component) {
  var parent = component._parent;
  var node;

  if (isHydrating) {
    var hydrationChild = findHydrationChild(parent);

    if (hydrationChild) {
      if (hydrationChild.nodeType === COMMENT_NODE) {
        return hydrationChild;
      } else {
        node = document[CREATE_COMMENT](EMPTY);
        replaceChild(node, hydrationChild, parent);
      }
    } else {
      node = document[CREATE_COMMENT](EMPTY);
      node[HYDRATION_APPEND] = true;
    }
  } else {
    node = document[CREATE_COMMENT](EMPTY);
  }

  return node;
}
function createText(text, component) {
  var parent = component._parent;
  var node;

  if (isHydrating) {
    var hydrationChild = findHydrationChild(parent);

    if (hydrationChild) {
      if (hydrationChild.nodeType === TEXT_NODE) {
        if (text !== hydrationChild[TEXT_CONTENT_ATTR]) {
          hydrationChild[TEXT_CONTENT_ATTR] = text;
        }

        return hydrationChild;
      } else {
        node = document[CREATE_TEXT_NODE](text);
        replaceChild(node, hydrationChild, parent);
      }
    } else {
      node = document[CREATE_TEXT_NODE](text);
      node[HYDRATION_APPEND] = true;
    }
  } else {
    node = document[CREATE_TEXT_NODE](text);
  }

  return node;
}
function updateText(node, text) {
  node[TEXT_CONTENT_ATTR] = text;
}

function findHydrationChild(parent) {
  var childNodes = parent.childNodes;

  if (parent[HYDRATION_INDEX] == null) {
    parent[HYDRATION_INDEX] = 0;
  }

  var child = childNodes[parent[HYDRATION_INDEX]++]; // If child is an comment node for spliting text node, use the next node.

  if (child && child.nodeType === COMMENT_NODE && child.data === TEXT_SPLIT_COMMENT) {
    return childNodes[parent[HYDRATION_INDEX]++];
  } else {
    return child;
  }
}
/**
 * @param {string} type node type
 * @param {object} props elemement properties
 * @param {object} component component instance
 * @param {boolean} __shouldConvertUnitlessToRpx should add unit when missing
 * @param {boolean} __shouldConvertRpxToVw should transfrom rpx to vw
 */


function createElement(type, props, component, __shouldConvertUnitlessToRpx, __shouldConvertRpxToVw) {
  if (__shouldConvertRpxToVw === void 0) {
    __shouldConvertRpxToVw = true;
  }

  var parent = component._parent;
  isSVGMode = type === 'svg' || parent && parent.namespaceURI === SVG_NS;
  var node;
  var hydrationChild = null;

  function createNode() {
    if (isSVGMode) {
      node = document.createElementNS(SVG_NS, type);
    } else if (tagNamePrefix) {
      var _tagNamePrefix = typeof _tagNamePrefix === 'function' ? _tagNamePrefix(type) : _tagNamePrefix;

      node = document[CREATE_ELEMENT](_tagNamePrefix + type);
    } else {
      node = document[CREATE_ELEMENT](type);
    }
  }

  if (isHydrating) {
    hydrationChild = findHydrationChild(parent);

    if (hydrationChild) {
      if (type === hydrationChild.nodeName.toLowerCase()) {
        for (var attributes = hydrationChild.attributes, i = attributes.length; i--;) {
          var attribute = attributes[i];
          var attributeName = attribute.name;
          var propValue = props[attributeName];

          if ( // The class or className prop all not in props
          attributeName === CLASS && props[CLASS_NAME] == null && propValue == null || // The style prop is empty object or not in props
          attributeName === STYLE && (propValue == null || Object.keys(propValue).length === 0) || // Remove rendered node attribute that not existed
          attributeName !== CLASS && attributeName !== STYLE && propValue == null) {
            hydrationChild[REMOVE_ATTRIBUTE](attributeName);
            continue;
          }

          if (attributeName === STYLE) {
            // Remove invalid style prop, and direct reset style to child avoid diff style
            // Set style to empty will change the index of style, so here need to traverse style backwards
            for (var l = hydrationChild.style.length; 0 < l; l--) {
              // Prop name get from node style is hyphenated, eg: background-color
              var stylePropName = hydrationChild.style[l - 1];
              var camelizedStyleName = camelizeStyleName(stylePropName);

              if (propValue[camelizedStyleName] == null) {
                hydrationChild.style[camelizedStyleName] = EMPTY;
              }
            }
          }
        }

        node = hydrationChild;
      } else {
        createNode();
        replaceChild(node, hydrationChild, parent);

        if (__DEV__) {
          Object(_warning__WEBPACK_IMPORTED_MODULE_0__["warnForReplacedHydratebleElement"])(parent, node, hydrationChild);
        }
      }
    } else {
      createNode();
      node[HYDRATION_APPEND] = true;

      if (__DEV__) {
        Object(_warning__WEBPACK_IMPORTED_MODULE_0__["warnForInsertedHydratedElement"])(parent, node);
      }
    }
  } else {
    createNode();
  }

  for (var prop in props) {
    var value = props[prop];
    if (prop === CHILDREN) continue;

    if (value != null) {
      if (prop === STYLE) {
        setStyle(node, value, __shouldConvertUnitlessToRpx, __shouldConvertRpxToVw);
      } else if (isEventProp(prop)) {
        addEventListener(node, prop.slice(2).toLowerCase(), value, component);
      } else {
        setAttribute(node, prop, value, isSVGMode);
      }
    }
  }

  return node;
}
function appendChild(node, parent) {
  if (!isHydrating || node[HYDRATION_APPEND]) {
    return parent.appendChild(node);
  }
}
function removeChild(node, parent) {
  parent = parent || node.parentNode; // Maybe has been removed when remove child

  if (parent) {
    parent.removeChild(node);
  }
}
function replaceChild(newChild, oldChild, parent) {
  parent = parent || oldChild.parentNode;
  parent.replaceChild(newChild, oldChild);
}
function insertAfter(node, after, parent) {
  parent = parent || after.parentNode;
  var nextSibling = after.nextSibling;

  if (nextSibling) {
    // Performance improve when node has been existed before nextSibling
    if (nextSibling !== node) {
      insertBefore(node, nextSibling, parent);
    }
  } else {
    appendChild(node, parent);
  }
}
function insertBefore(node, before, parent) {
  parent = parent || before.parentNode;
  parent.insertBefore(node, before);
}
function addEventListener(node, eventName, eventHandler) {
  return node.addEventListener(eventName, eventHandler);
}
function removeEventListener(node, eventName, eventHandler) {
  return node.removeEventListener(eventName, eventHandler);
}
function removeAttribute(node, propKey) {
  if (propKey === DANGEROUSLY_SET_INNER_HTML) {
    return node[INNER_HTML] = null;
  }

  if (propKey === CLASS_NAME) propKey = CLASS;

  if (propKey in node) {
    try {
      // Some node property is readonly when in strict mode
      node[propKey] = null;
    } catch (e) {}
  }

  node[REMOVE_ATTRIBUTE](propKey);
}
function setAttribute(node, propKey, propValue, isSvg) {
  if (propKey === DANGEROUSLY_SET_INNER_HTML) {
    // For reduce innerHTML operation to improve performance.
    if (node[INNER_HTML] !== propValue[HTML]) {
      node[INNER_HTML] = propValue[HTML];
    }

    node[WITH_INNERHTML] = true;
    return;
  }

  if (propKey === CLASS_NAME) propKey = CLASS; // Prop for svg can only be set by attribute

  if (!isSvg && propKey in node) {
    try {
      // Some node property is readonly when in strict mode
      node[propKey] = propValue;
    } catch (e) {
      node[SET_ATTRIBUTE](propKey, propValue);
    }
  } else {
    node[SET_ATTRIBUTE](propKey, propValue);
  }
}
/**
 * @param {object} node target node
 * @param {object} style target node style value
 * @param {boolean} __shouldConvertUnitlessToRpx
 * @param {boolean} __shouldConvertRpxToVw should transfrom rpx to vw
 */

function setStyle(node, style, __shouldConvertUnitlessToRpx, __shouldConvertRpxToVw) {
  if (__shouldConvertRpxToVw === void 0) {
    __shouldConvertRpxToVw = true;
  }

  for (var prop in style) {
    var value = style[prop];
    var convertedValue = void 0;

    if (typeof value === 'number' && isDimensionalProp(prop)) {
      if (__shouldConvertUnitlessToRpx) {
        convertedValue = value + 'rpx';

        if (__shouldConvertRpxToVw) {
          // Transfrom rpx to vw
          convertedValue = convertUnit(convertedValue);
        }
      } else {
        convertedValue = value + 'px';
      }
    } else {
      convertedValue = __shouldConvertRpxToVw ? convertUnit(value) : value;
    } // Support CSS custom properties (variables) like { --main-color: "black" }


    if (prop[0] === '-' && prop[1] === '-') {
      // reference: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty.
      // style.setProperty do not support Camel-Case style properties.
      node.style.setProperty(prop, convertedValue);
    } else {
      node.style[prop] = convertedValue;
    }
  }
}
function beforeRender(_ref) {
  var hydrate = _ref.hydrate;
  isHydrating = hydrate;
}

function recolectHydrationChild(hydrationParent) {
  // Should not to compare node with dangerouslySetInnerHTML because vdomLength is alway 0
  if (hydrationParent[WITH_INNERHTML]) {
    return;
  }

  var nativeLength = hydrationParent.childNodes.length;
  var vdomLength = hydrationParent[HYDRATION_INDEX] || 0;

  if (nativeLength - vdomLength > 0) {
    for (var i = nativeLength - 1; i >= vdomLength; i--) {
      if (__DEV__) {
        Object(_warning__WEBPACK_IMPORTED_MODULE_0__["warnForDeletedHydratableElement"])(hydrationParent, hydrationParent.childNodes[i]);
      }

      hydrationParent.removeChild(hydrationParent.childNodes[i]);
    }
  }

  for (var j = hydrationParent.childNodes.length - 1; j >= 0; j--) {
    recolectHydrationChild(hydrationParent.childNodes[j]);
  }
}

function afterRender(_ref2) {
  var container = _ref2.container;

  if (isHydrating) {
    // Remove native node when more then vdom node
    recolectHydrationChild(container);
    isHydrating = false;
  }
}
/**
 * Remove all children from node.
 * @NOTE: Optimization at web.
 */

function removeChildren(node) {
  node.textContent = EMPTY;
}

/***/ }),

/***/ "./node_modules/_driver-dom@2.1.3@driver-dom/es/warning.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_driver-dom@2.1.3@driver-dom/es/warning.js ***!
  \*****************************************************************/
/*! exports provided: warnForReplacedHydratebleElement, warnForDeletedHydratableElement, warnForInsertedHydratedElement, warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnForReplacedHydratebleElement", function() { return warnForReplacedHydratebleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnForDeletedHydratableElement", function() { return warnForDeletedHydratableElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnForInsertedHydratedElement", function() { return warnForInsertedHydratedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
var didWarnInvalidHydration = false;

var __DEV__ = "development" !== 'production';

function warnForReplacedHydratebleElement(parentNode, clientNode, serverNode) {
  if (__DEV__) {
    if (didWarnInvalidHydration) {
      return;
    } // should not warn for replace comment, bescause it may be a placeholder from server


    if (serverNode.nodeType === 8) {
      return;
    }

    didWarnInvalidHydration = true;
    warning('Expected server HTML to contain a matching %s in %s, but got %s.', getNodeName(clientNode), getNodeName(parentNode), getNodeName(serverNode));
  }
}
function warnForDeletedHydratableElement(parentNode, child) {
  if (__DEV__) {
    if (didWarnInvalidHydration) {
      return;
    }

    didWarnInvalidHydration = true;
    warning('Did not expect server HTML to contain a %s in %s.', getNodeName(child), getNodeName(parentNode));
  }
}
function warnForInsertedHydratedElement(parentNode, node) {
  if (__DEV__) {
    if (didWarnInvalidHydration) {
      return;
    }

    didWarnInvalidHydration = true;
    warning('Expected server HTML to contain a matching %s in %s.', getNodeName(node), getNodeName(parentNode));
  }
}
/**
 * Concat tagName、 id and class info to help locate a node
 * @param {*} node HTMLElement
 * @returns {string} for example: <div#home.rax-view.home>
 */

function getNodeName(node) {
  // text node don`t have tagName
  if (!node.tagName) {
    return node.nodeName;
  }

  var name = node.tagName.toLowerCase();
  var id = node.id ? '#' + node.id : '';
  var classStr = node.className || '';
  var classList = classStr.split(' ').map(function (className) {
    return className ? '.' + className : '';
  });
  return "<" + name + id + classList.join('') + ">";
}

var warning = function () {};

if (true) {
  warning = function (template) {
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

/***/ "./node_modules/_driver-kraken@0.2.1@driver-kraken/es/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_driver-kraken@0.2.1@driver-kraken/es/index.js ***!
  \*********************************************************************/
/*! exports provided: createBody, createEmpty, createText, updateText, createElement, appendChild, removeChild, replaceChild, insertAfter, insertBefore, addEventListener, removeEventListener, removeAttribute, setAttribute, setStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBody", function() { return createBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmpty", function() { return createEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createText", function() { return createText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateText", function() { return updateText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendChild", function() { return appendChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChild", function() { return removeChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceChild", function() { return replaceChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return removeAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/**
 * Driver for Kraken
 **/
var RPX_REG = /[-+]?\d*\.?\d+(rpx)/g;
var NON_DIMENSIONAL_REG = /opa|ntw|ne[ch]|ex(?:s|g|n|p|$)|^ord|zoo|grid|orp|ows|mnc|^columns$|bs|erim|onit/i;
var EVENT_PREFIX_REG = /^on[A-Z]/;
var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
var CLASS_NAME = 'className';
var CLASS = 'class';
var STYLE = 'style';
var CHILDREN = 'children';
var TEXT_CONTENT_ATTR = 'textContent';
var CREATE_ELEMENT = 'createElement';
var CREATE_COMMENT = 'createComment';
var CREATE_TEXT_NODE = 'createTextNode';
var SET_ATTRIBUTE = 'setAttribute';
var REMOVE_ATTRIBUTE = 'removeAttribute';
var EMPTY = '';
var viewportWidth = 750;
var unitPrecision = 4;
/**
 * Create a cached version of a pure function.
 */

function cached(fn) {
  var cache = Object.create(null);
  return function (str) {
    return cache[str] || (cache[str] = fn(str));
  };
}

var isEventProp = cached(function (prop) {
  return EVENT_PREFIX_REG.test(prop);
});
function createBody() {
  return document.body;
}
function createEmpty() {
  return document[CREATE_COMMENT](EMPTY);
}
function createText(text) {
  return document[CREATE_TEXT_NODE](text);
}
function updateText(node, text) {
  node[TEXT_CONTENT_ATTR] = text;
}
function createElement(type, props, component, __shouldConvertUnitlessToRpx, __shouldConvertRpxToVw) {
  if (__shouldConvertRpxToVw === void 0) {
    __shouldConvertRpxToVw = true;
  }

  var node = document[CREATE_ELEMENT](type);

  for (var prop in props) {
    var value = props[prop];
    if (prop === CHILDREN) continue;

    if (value != null) {
      if (prop === STYLE) {
        setStyle(node, value, __shouldConvertUnitlessToRpx, __shouldConvertRpxToVw);
      } else if (isEventProp(prop)) {
        addEventListener(node, prop.slice(2).toLowerCase(), value, component);
      } else {
        setAttribute(node, prop, value);
      }
    }
  }

  return node;
}
function appendChild(node, parent) {
  return parent.appendChild(node);
}
function removeChild(node, parent) {
  parent = parent || node.parentNode; // Maybe has been removed when remove child

  if (parent) {
    parent.removeChild(node);
  }
}
function replaceChild(newChild, oldChild, parent) {
  parent = parent || oldChild.parentNode;
  parent.replaceChild(newChild, oldChild);
}
function insertAfter(node, after, parent) {
  parent = parent || after.parentNode;
  var nextSibling = after.nextSibling;

  if (nextSibling) {
    // Performance improve when node has been existed before nextSibling
    if (nextSibling !== node) {
      insertBefore(node, nextSibling, parent);
    }
  } else {
    appendChild(node, parent);
  }
}
function insertBefore(node, before, parent) {
  parent = parent || before.parentNode;
  parent.insertBefore(node, before);
}
function addEventListener(node, eventName, eventHandler) {
  return node.addEventListener(eventName, eventHandler);
}
function removeEventListener(node, eventName, eventHandler) {
  return node.removeEventListener(eventName, eventHandler);
}
function removeAttribute(node, propKey) {
  if (propKey === DANGEROUSLY_SET_INNER_HTML) return;
  if (propKey === CLASS_NAME) propKey = CLASS;

  if (propKey in node) {
    try {
      // Some node property is readonly when in strict mode
      node[propKey] = null;
    } catch (e) {}
  }

  node[REMOVE_ATTRIBUTE](propKey);
}
function setAttribute(node, propKey, propValue) {
  // For reduce innerHTML operation to improve performance.
  if (propKey === DANGEROUSLY_SET_INNER_HTML) {
    warnUnsupport(DANGEROUSLY_SET_INNER_HTML);
    return;
  }

  if (propKey === CLASS_NAME) propKey = CLASS;

  if (propKey in node) {
    try {
      // Some node property is readonly when in strict mode
      node[propKey] = propValue;
    } catch (e) {
      node[SET_ATTRIBUTE](propKey, propValue);
    }
  } else {
    node[SET_ATTRIBUTE](propKey, propValue);
  }
}

function toFixed(number, precision) {
  var multiplier = Math.pow(10, precision + 1);
  var wholeNumber = Math.floor(number * multiplier);
  return Math.round(wholeNumber / 10) * 10 / multiplier;
}

function unitTransformer(n) {
  return toFixed(parseFloat(n) / (viewportWidth / 100), unitPrecision) + 'vw';
}

function isRpx(str) {
  return RPX_REG.test(str);
}

function calcRpxToVw(value) {
  return value.replace(RPX_REG, unitTransformer);
}

var isDimensionalProp = cached(function (prop) {
  return !NON_DIMENSIONAL_REG.test(prop);
});
var convertUnit = cached(function (value) {
  return isRpx(value) ? calcRpxToVw(value) : value;
});
function setStyle(node, style, __shouldConvertUnitlessToRpx, __shouldConvertRpxToVw) {
  if (__shouldConvertRpxToVw === void 0) {
    __shouldConvertRpxToVw = true;
  }

  for (var prop in style) {
    var value = style[prop];
    var convertedValue = void 0;

    if (typeof value === 'number' && isDimensionalProp(prop)) {
      if (__shouldConvertUnitlessToRpx) {
        convertedValue = value + 'rpx';

        if (__shouldConvertRpxToVw) {
          // Transfrom rpx to vw
          convertedValue = convertUnit(convertedValue);
        }
      } else {
        convertedValue = value + 'px';
      }
    } else {
      convertedValue = __shouldConvertRpxToVw ? convertUnit(value) : value;
    } // Support CSS custom properties (variables) like { --main-color: "black" }


    if (prop[0] === '-' && prop[1] === '-') {
      // reference: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty.
      // style.setProperty do not support Camel-Case style properties.
      node.style.setProperty(prop, convertedValue);
    } else {
      node.style[prop] = convertedValue;
    }
  }
}

function warnUnsupport(message) {
  console.warn("[DriverKraken]: " + message + " is not supported.");
}

/***/ }),

/***/ "./node_modules/_driver-miniapp@0.1.3@driver-miniapp/es/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_driver-miniapp@0.1.3@driver-miniapp/es/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var driver_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! driver-dom */ "./node_modules/_driver-dom@2.1.3@driver-dom/es/index.js");


function cached(fn) {
  var cache = Object.create(null);
  return function (str) {
    return cache[str] || (cache[str] = fn(str));
  };
}

var EVENT_PREFIX_REG = /^on[A-Z]/;
var NON_DIMENSIONAL_REG = /opa|ntw|ne[ch]|ex(?:s|g|n|p|$)|^ord|zoo|grid|orp|ows|mnc|^columns$|bs|erim|onit/i;
var isDimensionalProp = cached(function (prop) {
  return !NON_DIMENSIONAL_REG.test(prop);
});

var setStyle = function (node, style) {
  for (var prop in style) {
    var value = style[prop];
    var convertedValue = void 0;

    if (typeof value === 'number' && isDimensionalProp(prop)) {
      convertedValue = value + 'rpx';
    } else {
      convertedValue = value;
    } // Support CSS custom properties (variables) like { --main-color: "black" }


    if (prop[0] === '-' && prop[1] === '-') {
      // reference: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty.
      // style.setProperty do not support Camel-Case style properties.
      node.style.setProperty(prop, convertedValue);
    } else {
      node.style[prop] = convertedValue;
    }
  }
};

var isEventProp = cached(function (prop) {
  return EVENT_PREFIX_REG.test(prop);
}); // Convert Unitless To Rpx defaultly

/* harmony default export */ __webpack_exports__["default"] = (Object.assign({}, driver_dom__WEBPACK_IMPORTED_MODULE_0__, {
  createElement: function (type, props) {
    var style;
    var attrs = {};
    var events = [];

    for (var prop in props) {
      var value = props[prop];
      if (prop === 'children') continue;

      if (value != null) {
        if (prop === 'style') {
          style = value;
        } else if (isEventProp(prop)) {
          events.push({
            name: prop.slice(2).toLowerCase(),
            handler: value
          });
        } else {
          if (prop === 'className') {
            prop = 'class';
          }

          attrs[prop] = value;
        }
      }
    }

    var node = document._createElement({
      tagName: type,
      document: document,
      attrs: attrs
    });

    if (style) {
      setStyle(node, style);
    }

    events.forEach(function (_ref) {
      var name = _ref.name,
          handler = _ref.handler;
      node.addEventListener(name, handler);
    });
    return node;
  },
  setStyle: setStyle
}));

/***/ }),

/***/ "./node_modules/_driver-universal@3.1.5@driver-universal/es/dom.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_driver-universal@3.1.5@driver-universal/es/dom.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createDOMDriver; });
/* harmony import */ var driver_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! driver-dom */ "./node_modules/_driver-dom@2.1.3@driver-dom/es/index.js");

function createDOMDriver() {
  return Object.assign({}, driver_dom__WEBPACK_IMPORTED_MODULE_0__, {
    createElement: function (type, props, component) {
      return driver_dom__WEBPACK_IMPORTED_MODULE_0__["createElement"](type, props, component, true);
    },
    setStyle: function (node, style) {
      return driver_dom__WEBPACK_IMPORTED_MODULE_0__["setStyle"](node, style, true);
    }
  });
}

/***/ }),

/***/ "./node_modules/_driver-universal@3.1.5@driver-universal/es/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_driver-universal@3.1.5@driver-universal/es/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./node_modules/_driver-universal@3.1.5@driver-universal/es/dom.js");
/* harmony import */ var driver_miniapp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! driver-miniapp */ "./node_modules/_driver-miniapp@0.1.3@driver-miniapp/es/index.js");
/* harmony import */ var driver_weex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! driver-weex */ "./node_modules/_driver-weex@2.0.1@driver-weex/es/index.js");
/* harmony import */ var driver_kraken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! driver-kraken */ "./node_modules/_driver-kraken@0.2.1@driver-kraken/es/index.js");
var isWeChatMiniProgram = false;
var isMiniApp = false;
var isKraken = false;
var isWeb = true;
var isWeex = false;




var currentDriver = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (currentDriver);

/***/ }),

/***/ "./node_modules/_driver-weex@2.0.1@driver-weex/es/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_driver-weex@2.0.1@driver-weex/es/index.js ***!
  \*****************************************************************/
/*! exports provided: getElementById, createBody, createComment, createEmpty, createText, updateText, createElement, appendChild, removeChild, replaceChild, insertAfter, insertBefore, addEventListener, removeEventListener, removeAttribute, setAttribute, setStyle, beforeRender, afterRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementById", function() { return getElementById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBody", function() { return createBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmpty", function() { return createEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createText", function() { return createText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateText", function() { return updateText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendChild", function() { return appendChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChild", function() { return removeChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceChild", function() { return replaceChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return removeAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeRender", function() { return beforeRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterRender", function() { return afterRender; });
/* harmony import */ var style_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-unit */ "./node_modules/_style-unit@3.0.0@style-unit/lib/index.js");
/* harmony import */ var style_unit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(style_unit__WEBPACK_IMPORTED_MODULE_0__);

var STYLE = 'style';
var ID = 'id';
var TEXT = 'text';
var CHILDREN = 'children';
var EVENT_PREFIX_REGEXP = /^on[A-Z]/;
var ARIA_PREFIX_REGEXP = /^aria-/;
var HYPHEN_REGEXP = /\-(\w)/;
var EMPTY = '';

function updateWeexTextValue(node) {
  var value = node.children.map(function (child) {
    // Comment node type
    return child.nodeType === 8 ? child.value : EMPTY;
  }).join(EMPTY);
  node.setAttr('value', value);
}

var nodeMaps = {};
/* global __weex_document__ */

var document = typeof __weex_document__ === 'object' ? __weex_document__ : typeof document === 'object' ? document : null;
function getElementById(id) {
  return nodeMaps[id];
}
function createBody(type, props) {
  if (document.body) {
    return document.body;
  }

  var documentElement = document.documentElement;
  var body = document.createBody(type, props);
  documentElement.appendChild(body);
  return body;
}
function createComment(content) {
  return document.createComment(content);
}
function createEmpty() {
  return createComment(EMPTY);
}
function createText(text) {
  // Use comment node type mock text node
  return createComment(text);
}
function updateText(node, text) {
  node.value = text;
  updateWeexTextValue(node.parentNode);
}
function createElement(type, props) {
  if (props === void 0) {
    props = {};
  }

  var style = {};
  var originStyle = props.style;

  if (originStyle) {
    for (var prop in originStyle) {
      style[prop] = Object(style_unit__WEBPACK_IMPORTED_MODULE_0__["convertUnit"])(originStyle[prop], prop);
    }
  }

  var node = document.createElement(type, {
    style: style
  });

  for (var _prop in props) {
    var value = props[_prop];

    if (_prop === CHILDREN) {
      continue;
    }

    if (value != null) {
      if (_prop === STYLE) {
        continue;
      } else if (EVENT_PREFIX_REGEXP.test(_prop)) {
        var eventName = _prop.slice(2).toLowerCase();

        addEventListener(node, eventName, value, props);
      } else {
        setAttribute(node, _prop, value);
      }
    }
  }

  return node;
}
function appendChild(node, parent) {
  parent.appendChild(node);

  if (parent.type === TEXT) {
    updateWeexTextValue(parent);
  }
}
function removeChild(node, parent) {
  parent = parent || node.parentNode;
  var id = node.attr && node.attr[ID];

  if (id != null) {
    nodeMaps[id] = null;
  }

  parent.removeChild(node);

  if (parent.type === TEXT) {
    updateWeexTextValue(parent);
  }
}
function replaceChild(newChild, oldChild, parent) {
  parent = parent || oldChild.parentNode;
  var previousSibling = oldChild.previousSibling;
  var nextSibling = oldChild.nextSibling;
  removeChild(oldChild, parent);

  if (previousSibling) {
    insertAfter(newChild, previousSibling, parent);
  } else if (nextSibling) {
    insertBefore(newChild, nextSibling, parent);
  } else {
    appendChild(newChild, parent);
  }
}
function insertAfter(node, after, parent) {
  parent = parent || after.parentNode;
  parent.insertAfter(node, after);

  if (parent.type === TEXT) {
    updateWeexTextValue(parent);
  }
}
function insertBefore(node, before, parent) {
  parent = parent || before.parentNode;
  parent.insertBefore(node, before);

  if (parent.type === TEXT) {
    updateWeexTextValue(parent);
  }
}
function addEventListener(node, eventName, eventHandler, props) {
  // https://github.com/apache/incubator-weex/blob/master/runtime/vdom/Element.js#L421
  var params = props[eventName + 'EventParams'];
  return node.addEvent(eventName, eventHandler, params);
}
function removeEventListener(node, eventName, eventHandler) {
  return node.removeEvent(eventName, eventHandler);
}
function removeAttribute(node, propKey, propValue) {
  if (propKey == ID) {
    nodeMaps[propValue] = null;
  } // Weex native will crash when pass null value


  return node.setAttr(propKey, undefined, false);
}
function setAttribute(node, propKey, propValue) {
  if (propKey == ID) {
    nodeMaps[propValue] = node;
  } // Weex only support `ariaLabel` format, convert `aria-label` format to camelcase


  if (ARIA_PREFIX_REGEXP.test(propKey)) {
    propKey = propKey.replace(HYPHEN_REGEXP, function (m, p) {
      return p.toUpperCase();
    });
  }

  return node.setAttr(propKey, propValue, false);
}
function setStyle(node, style) {
  for (var prop in style) {
    // Translate `rpx` to weex `px`
    style[prop] = Object(style_unit__WEBPACK_IMPORTED_MODULE_0__["convertUnit"])(style[prop], prop);
  }

  node.setStyles(style);
}
function beforeRender() {
  // Turn off batched updates
  document.open(); // Set `rpx` unit converter

  Object(style_unit__WEBPACK_IMPORTED_MODULE_0__["setRpx"])(1);
}
function afterRender() {
  if (document.listener && document.listener.createFinish) {
    document.listener.createFinish();
  } // Turn on batched updates


  document.close();
}

/***/ }),

/***/ "./node_modules/_history@4.10.1@history/esm/history.js":
/*!*************************************************************!*\
  !*** ./node_modules/_history@4.10.1@history/esm/history.js ***!
  \*************************************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrowserHistory", function() { return createBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHashHistory", function() { return createHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return locationsAreEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return createPath; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/_resolve-pathname@3.0.0@resolve-pathname/esm/resolve-pathname.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ "./node_modules/_value-equal@1.0.1@value-equal/esm/value-equal.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/_tiny-warning@1.0.3@tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/_tiny-invariant@1.1.0@tiny-invariant/dist/tiny-invariant.esm.js");






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}

function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}

function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}

function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}

function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}

function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}

function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(resolve_pathname__WEBPACK_IMPORTED_MODULE_1__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(value_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(prompt == null, 'A history supports only one prompt at a time') : undefined;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : undefined;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */


function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */


function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */


function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */


function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Browser history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function go(n) {
    globalHistory.go(n);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: function (path, state) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
      var action = 'PUSH';
      var location = createLocation(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var href = createHref(location);
        var key = location.key,
            state = location.state;

        if (canUseHistory) {
          globalHistory.pushState({
            key: key,
            state: state
          }, null, href);

          if (forceRefresh) {
            window.location.href = href;
          } else {
            var prevIndex = allKeys.indexOf(history.location.key);
            var nextKeys = allKeys.slice(0, prevIndex + 1);
            nextKeys.push(location.key);
            allKeys = nextKeys;
            setState({
              action: action,
              location: location
            });
          }
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : undefined;
          window.location.href = href;
        }
      });
    },
    replace: function (path, state) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
      var action = 'REPLACE';
      var location = createLocation(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var href = createHref(location);
        var key = location.key,
            state = location.state;

        if (canUseHistory) {
          globalHistory.replaceState({
            key: key,
            state: state
          }, null, href);

          if (forceRefresh) {
            window.location.replace(href);
          } else {
            var prevIndex = allKeys.indexOf(history.location.key);
            if (prevIndex !== -1) allKeys[prevIndex] = location.key;
            setState({
              action: action,
              location: location
            });
          }
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : undefined;
          window.location.replace(href);
        }
      });
    },
    go: go,
    goBack: function () {
      go(-1);
    },
    goForward: function () {
      go(1);
    },
    block: block,
    listen: function (listener) {
      var unlisten = transitionManager.appendListener(listener);
      checkDOMListeners(1);
      return function () {
        checkDOMListeners(-1);
        unlisten();
      };
    }
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function (path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function (path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Hash history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function go(n) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;
    globalHistory.go(n);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: function (location) {
      var baseTag = document.querySelector('base');
      var href = '';

      if (baseTag && baseTag.getAttribute('href')) {
        href = stripHash(window.location.href);
      }

      return href + '#' + encodePath(basename + createPath(location));
    },
    push: function (path, state) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot push state; it is ignored') : undefined;
      var action = 'PUSH';
      var location = createLocation(path, undefined, undefined, history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var path = createPath(location);
        var encodedPath = encodePath(basename + path);
        var hashChanged = getHashPath() !== encodedPath;

        if (hashChanged) {
          // We cannot tell if a hashchange was caused by a PUSH, so we'd
          // rather setState here and ignore the hashchange. The caveat here
          // is that other hash histories in the page will consider it a POP.
          ignorePath = path;
          pushHashPath(encodedPath);
          var prevIndex = allPaths.lastIndexOf(createPath(history.location));
          var nextPaths = allPaths.slice(0, prevIndex + 1);
          nextPaths.push(path);
          allPaths = nextPaths;
          setState({
            action: action,
            location: location
          });
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : undefined;
          setState();
        }
      });
    },
    replace: function (path, state) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot replace state; it is ignored') : undefined;
      var action = 'REPLACE';
      var location = createLocation(path, undefined, undefined, history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var path = createPath(location);
        var encodedPath = encodePath(basename + path);
        var hashChanged = getHashPath() !== encodedPath;

        if (hashChanged) {
          // We cannot tell if a hashchange was caused by a REPLACE, so we'd
          // rather setState here and ignore the hashchange. The caveat here
          // is that other hash histories in the page will consider it a POP.
          ignorePath = path;
          replaceHashPath(encodedPath);
        }

        var prevIndex = allPaths.indexOf(createPath(history.location));
        if (prevIndex !== -1) allPaths[prevIndex] = path;
        setState({
          action: action,
          location: location
        });
      });
    },
    go: go,
    goBack: function () {
      go(-1);
    },
    goForward: function () {
      go(1);
    },
    block: block,
    listen: function (listener) {
      var unlisten = transitionManager.appendListener(listener);
      checkDOMListeners(1);
      return function () {
        checkDOMListeners(-1);
        unlisten();
      };
    }
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createPath,
    push: function (path, state) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
      var action = 'PUSH';
      var location = createLocation(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var prevIndex = history.index;
        var nextIndex = prevIndex + 1;
        var nextEntries = history.entries.slice(0);

        if (nextEntries.length > nextIndex) {
          nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
        } else {
          nextEntries.push(location);
        }

        setState({
          action: action,
          location: location,
          index: nextIndex,
          entries: nextEntries
        });
      });
    },
    replace: function (path, state) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
      var action = 'REPLACE';
      var location = createLocation(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        history.entries[history.index] = location;
        setState({
          action: action,
          location: location
        });
      });
    },
    go: go,
    goBack: function () {
      go(-1);
    },
    goForward: function () {
      go(1);
    },
    canGo: function (n) {
      var nextIndex = history.index + n;
      return nextIndex >= 0 && nextIndex < history.entries.length;
    },
    block: function (prompt) {
      if (prompt === void 0) {
        prompt = false;
      }

      return transitionManager.setPrompt(prompt);
    },
    listen: function (listener) {
      return transitionManager.appendListener(listener);
    }
  };
  return history;
}



/***/ }),

/***/ "./node_modules/_miniapp-history@0.1.4@miniapp-history/es/History.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_miniapp-history@0.1.4@miniapp-history/es/History.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _router = _interopRequireWildcard(__webpack_require__(/*! ./router */ "./node_modules/_miniapp-history@0.1.4@miniapp-history/es/router.js"));

var _Location = _interopRequireDefault(__webpack_require__(/*! ./Location */ "./node_modules/_miniapp-history@0.1.4@miniapp-history/es/Location.js"));

var _listeners = __webpack_require__(/*! ./listeners */ "./node_modules/_miniapp-history@0.1.4@miniapp-history/es/listeners.js");

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

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var MiniAppHistory = /*#__PURE__*/function () {
  function MiniAppHistory(routes) {
    this.location = new _Location.default();
    (0, _router.__updateRouterMap)(routes); // Apply actions for history.

    Object.assign(this, (0, _router.default)(this.location));
  }

  var _proto = MiniAppHistory.prototype;

  _proto.listen = function (callback) {
    var listeners = (0, _listeners.addListener)(this.location._pageId, callback);
    return function () {
      var index = -1;

      for (var idx in listeners) {
        if (listeners[idx] === callback) {
          index = idx;
          break;
        }
      }

      if (index > -1) listeners.splice(index, 1);
    };
  };

  _createClass(MiniAppHistory, [{
    key: "length",
    get: function () {
      // eslint-disable-next-line no-undef
      return getCurrentPages().length;
    }
  }]);

  return MiniAppHistory;
}();

exports.default = MiniAppHistory;

/***/ }),

/***/ "./node_modules/_miniapp-history@0.1.4@miniapp-history/es/Location.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_miniapp-history@0.1.4@miniapp-history/es/Location.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Location = /*#__PURE__*/function () {
  function Location() {
    this._currentPageOptions = {};
    this.hash = '';
  }

  var _proto = Location.prototype;

  _proto.__updatePageOption = function (pageOptions) {
    this._currentPageOptions = pageOptions;
  };

  _proto.__updatePageId = function (pageId) {
    this._pageId = pageId;
  };

  _createClass(Location, [{
    key: "href",
    get: function () {
      return this.pathname + this.search;
    }
  }, {
    key: "search",
    get: function () {
      var _this = this;

      var search = '';
      Object.keys(this._currentPageOptions).forEach(function (key, index) {
        var query = key + "=" + _this._currentPageOptions[key];
        search += index === 0 ? '?' : '&';
        search += query;
      });
      return search;
    }
  }, {
    key: "pathname",
    get: function () {
      // eslint-disable-next-line no-undef
      var pages = getCurrentPages();
      if (pages.length === 0) return '';
      var currentPage = pages[pages.length - 1];
      return addLeadingSlash(currentPage.route);
    }
  }]);

  return Location;
}();

exports.default = Location;

function addLeadingSlash(str) {
  return str[0] === '/' ? str : '/' + str;
}

/***/ }),

/***/ "./node_modules/_miniapp-history@0.1.4@miniapp-history/es/constants.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_miniapp-history@0.1.4@miniapp-history/es/constants.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.REPLACE = exports.POP = exports.PUSH = void 0;
var PUSH = 'PUSH';
exports.PUSH = PUSH;
var POP = 'POP';
exports.POP = POP;
var REPLACE = 'REPLACE';
exports.REPLACE = REPLACE;

/***/ }),

/***/ "./node_modules/_miniapp-history@0.1.4@miniapp-history/es/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_miniapp-history@0.1.4@miniapp-history/es/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createMiniAppHistory = createMiniAppHistory;

var _History = _interopRequireDefault(__webpack_require__(/*! ./History */ "./node_modules/_miniapp-history@0.1.4@miniapp-history/es/History.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var history;

function createMiniAppHistory(routes) {
  if (history) return history;
  return history = new _History.default(routes);
}

/***/ }),

/***/ "./node_modules/_miniapp-history@0.1.4@miniapp-history/es/listeners.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_miniapp-history@0.1.4@miniapp-history/es/listeners.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addListener = addListener;
exports.fireListeners = fireListeners; // Page id -> action callbacks

var listeners = {};
/**
 * Add history listener
 * @param {string} pageId page unique id
 * @param {function} callback history operate action callback
 * @return {Array} target page listener list
 */

function addListener(pageId, callback) {
  if (!listeners[pageId]) listeners[pageId] = [];
  listeners[pageId].push(callback);
  return listeners[pageId];
}
/**
 * Fire history listeners
 * @param {object} location router location object
 * @param {string} action history operate action
 */


function fireListeners(location, action) {
  var pageId = location._pageId;

  if (listeners[pageId]) {
    for (var index in listeners[pageId]) {
      listeners[pageId][index]({
        location: location,
        action: action
      });
    }
  }
}

/***/ }),

/***/ "./node_modules/_miniapp-history@0.1.4@miniapp-history/es/router.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_miniapp-history@0.1.4@miniapp-history/es/router.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.__updateRouterMap = __updateRouterMap;
exports.default = generateActions;
var _universalEnv = {
  isWeex: false,
  isWeb: true,
  isKraken: false,
  isNode: false,
  isMiniApp: false,
  isWeChatMiniProgram: false,
  isWeChatMiniprogram: false
};

var _listeners = __webpack_require__(/*! ./listeners */ "./node_modules/_miniapp-history@0.1.4@miniapp-history/es/listeners.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/_miniapp-history@0.1.4@miniapp-history/es/constants.js");

var __routerMap = {};
var apiCore;

function redirectTo(location, options) {
  options.success = function () {
    (0, _listeners.fireListeners)(location, _constants.REPLACE);
  };

  apiCore.redirectTo(options);
}

function navigateTo(location, options) {
  options.success = function () {
    (0, _listeners.fireListeners)(location, _constants.PUSH);
  };

  apiCore.navigateTo(options);
}

function navigateBack(location, options) {
  apiCore.navigateBack(options);
  (0, _listeners.fireListeners)(location, _constants.POP);
}
/**
 * Navigate to given path.
 */


function push(location, path, query) {
  return navigateTo(location, {
    url: generateUrl(path, query)
  });
}
/**
 * Navigate replace.
 */


function replace(location, path, query) {
  return redirectTo(location, {
    url: generateUrl(path, query)
  });
}
/**
 * Unsupported in miniapp.
 */


function go() {
  throw new Error('Unsupported go in miniapp.');
}
/**
 * Navigate back.
 */


function back(location, n) {
  if (n === void 0) {
    n = 1;
  }

  return navigateBack(location, {
    delta: n
  });
}
/**
 * Navigate back.
 */


function goBack(location, n) {
  if (n === void 0) {
    n = 1;
  }

  return navigateBack(location, {
    delta: n
  });
}
/**
 * Unsupported in miniapp.
 */


function goForward() {
  throw new Error('Unsupported goForward in miniapp.');
}
/**
 * Unsupported in miniapp.
 * @return {boolean} Always true.
 */


function canGo() {
  return true;
}
/**
 * Generate MiniApp url
 * @param {string} path
 * @param {object} query
 */


function generateUrl(path, query) {
  var _path$split = path.split('?'),
      pathname = _path$split[0],
      search = _path$split[1];

  var miniappPath = __routerMap[pathname];

  if (!miniappPath) {
    throw new Error("Path " + path + " is not found");
  }

  if (query) {
    if (search) {
      search += "&" + stringifyQuery(query);
    } else {
      search = stringifyQuery(query);
    }
  }

  return search ? "/" + miniappPath + "?" + search : "/" + miniappPath;
}
/**
 * Stringify query
 * @param {object} query - route query
 * @return {string}
 */


function stringifyQuery(query) {
  return Object.keys(query).reduce(function (total, nextKey, index) {
    return "" + total + (index ? '&' : '') + nextKey + "=" + query[nextKey];
  }, '');
}

function __updateRouterMap(routes) {
  routes.map(function (route) {
    __routerMap[route.path] = route.source;
  });
}

function generateActions(location) {
  var actions = {
    push: push,
    replace: replace,
    back: back,
    go: go,
    canGo: canGo,
    goForward: goForward,
    goBack: goBack
  };
  return Object.keys(actions).reduce(function (result, actionName) {
    result[actionName] = actions[actionName].bind(null, location);
    return result;
  }, {});
}

/***/ }),

/***/ "./node_modules/_miniapp-renderer@0.1.5@miniapp-renderer/lib/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_miniapp-renderer@0.1.5@miniapp-renderer/lib/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var miniappRenderer_1 = __webpack_require__(/*! ./miniappRenderer */ "./node_modules/_miniapp-renderer@0.1.5@miniapp-renderer/lib/miniappRenderer.js");

exports.default = miniappRenderer_1.default;

/***/ }),

/***/ "./node_modules/_miniapp-renderer@0.1.5@miniapp-renderer/lib/miniappRenderer.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_miniapp-renderer@0.1.5@miniapp-renderer/lib/miniappRenderer.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

function miniappRenderer(_a, _b) {
  var _c;

  var appConfig = _a.appConfig,
      createBaseApp = _a.createBaseApp,
      createHistory = _a.createHistory,
      staticConfig = _a.staticConfig,
      pageProps = _a.pageProps,
      emitLifeCycles = _a.emitLifeCycles,
      ErrorBoundary = _a.ErrorBoundary;
  var mount = _b.mount,
      unmount = _b.unmount,
      createElement = _b.createElement,
      Component = _b.Component;
  var history = createHistory({
    routes: staticConfig.routes
  });
  var runtime = createBaseApp(appConfig).runtime;
  var AppProvider = (_c = runtime === null || runtime === void 0 ? void 0 : runtime.composeAppProvider) === null || _c === void 0 ? void 0 : _c.call(runtime);
  var _d = appConfig.app,
      app = _d === void 0 ? {} : _d;
  var rootId = app.rootId,
      ErrorBoundaryFallback = app.ErrorBoundaryFallback,
      onErrorBoundaryHander = app.onErrorBoundaryHander,
      errorBoundary = app.errorBoundary;
  emitLifeCycles();

  var App =
  /** @class */
  function (_super) {
    __extends(App, _super);

    function App() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    App.prototype.render = function () {
      var _a = this.props,
          Page = _a.Page,
          otherProps = __rest(_a, ["Page"]);

      var PageComponent = createElement(Page, __assign({}, otherProps));
      var appInstance = PageComponent;

      if (AppProvider) {
        appInstance = createElement(AppProvider, null, appInstance);
      }

      if (errorBoundary) {
        appInstance = createElement(ErrorBoundary, {
          Fallback: ErrorBoundaryFallback,
          onError: onErrorBoundaryHander
        }, appInstance);
      }

      return appInstance;
    };

    return App;
  }(Component);

  window.__pagesRenderInfo = staticConfig.routes.map(function (_a) {
    var source = _a.source,
        component = _a.component;
    return {
      path: source,
      render: function render() {
        var PageComponent = component()();
        var rootEl = document.createElement('div');
        rootEl.setAttribute('id', rootId);
        document.body.appendChild(rootEl);
        var appInstance = mount(createElement(App, __assign(__assign({
          history: history,
          location: history.location
        }, pageProps), {
          source: source,
          Page: PageComponent
        })), rootEl);
        document.__unmount = unmount(appInstance, rootEl);
      },
      setDocument: function setDocument(value) {
        // eslint-disable-next-line no-global-assign
        document = value;
      }
    };
  });
}

exports.default = miniappRenderer;

/***/ }),

/***/ "./node_modules/_path-to-regexp@6.2.0@path-to-regexp/dist.es2015/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_path-to-regexp@6.2.0@path-to-regexp/dist.es2015/index.js ***!
  \********************************************************************************/
/*! exports provided: parse, compile, tokensToFunction, match, regexpToFunction, tokensToRegexp, pathToRegexp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokensToFunction", function() { return tokensToFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexpToFunction", function() { return regexpToFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokensToRegexp", function() { return tokensToRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathToRegexp", function() { return pathToRegexp; });
/**
 * Tokenize input string.
 */
function lexer(str) {
  var tokens = [];
  var i = 0;

  while (i < str.length) {
    var _char = str[i];

    if (_char === "*" || _char === "+" || _char === "?") {
      tokens.push({
        type: "MODIFIER",
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (_char === "\\") {
      tokens.push({
        type: "ESCAPED_CHAR",
        index: i++,
        value: str[i++]
      });
      continue;
    }

    if (_char === "{") {
      tokens.push({
        type: "OPEN",
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (_char === "}") {
      tokens.push({
        type: "CLOSE",
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (_char === ":") {
      var name = "";
      var j = i + 1;

      while (j < str.length) {
        var code = str.charCodeAt(j);

        if ( // `0-9`
        code >= 48 && code <= 57 || // `A-Z`
        code >= 65 && code <= 90 || // `a-z`
        code >= 97 && code <= 122 || // `_`
        code === 95) {
          name += str[j++];
          continue;
        }

        break;
      }

      if (!name) throw new TypeError("Missing parameter name at " + i);
      tokens.push({
        type: "NAME",
        index: i,
        value: name
      });
      i = j;
      continue;
    }

    if (_char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;

      if (str[j] === "?") {
        throw new TypeError("Pattern cannot start with \"?\" at " + j);
      }

      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }

        if (str[j] === ")") {
          count--;

          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;

          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at " + j);
          }
        }

        pattern += str[j++];
      }

      if (count) throw new TypeError("Unbalanced pattern at " + i);
      if (!pattern) throw new TypeError("Missing pattern at " + i);
      tokens.push({
        type: "PATTERN",
        index: i,
        value: pattern
      });
      i = j;
      continue;
    }

    tokens.push({
      type: "CHAR",
      index: i,
      value: str[i++]
    });
  }

  tokens.push({
    type: "END",
    index: i,
    value: ""
  });
  return tokens;
}
/**
 * Parse a string for the raw tokens.
 */


function parse(str, options) {
  if (options === void 0) {
    options = {};
  }

  var tokens = lexer(str);
  var _a = options.prefixes,
      prefixes = _a === void 0 ? "./" : _a;
  var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";

  var tryConsume = function (type) {
    if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
  };

  var mustConsume = function (type) {
    var value = tryConsume(type);
    if (value !== undefined) return value;
    var _a = tokens[i],
        nextType = _a.type,
        index = _a.index;
    throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
  };

  var consumeText = function () {
    var result = "";
    var value; // tslint:disable-next-line

    while (value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result += value;
    }

    return result;
  };

  while (i < tokens.length) {
    var _char2 = tryConsume("CHAR");

    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");

    if (name || pattern) {
      var prefix = _char2 || "";

      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }

      if (path) {
        result.push(path);
        path = "";
      }

      result.push({
        name: name || key++,
        prefix: prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }

    var value = _char2 || tryConsume("ESCAPED_CHAR");

    if (value) {
      path += value;
      continue;
    }

    if (path) {
      result.push(path);
      path = "";
    }

    var open = tryConsume("OPEN");

    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix: prefix,
        suffix: suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }

    mustConsume("END");
  }

  return result;
}
/**
 * Compile a string to a template function for the path.
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */

function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }

  var reFlags = flags(options);
  var _a = options.encode,
      encode = _a === void 0 ? function (x) {
    return x;
  } : _a,
      _b = options.validate,
      validate = _b === void 0 ? true : _b; // Compile all the tokens into regexps.

  var matches = tokens.map(function (token) {
    if (typeof token === "object") {
      return new RegExp("^(?:" + token.pattern + ")$", reFlags);
    }
  });
  return function (data) {
    var path = "";

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === "string") {
        path += token;
        continue;
      }

      var value = data ? data[token.name] : undefined;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";

      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
        }

        if (value.length === 0) {
          if (optional) continue;
          throw new TypeError("Expected \"" + token.name + "\" to not be empty");
        }

        for (var j = 0; j < value.length; j++) {
          var segment = encode(value[j], token);

          if (validate && !matches[i].test(segment)) {
            throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
          }

          path += token.prefix + segment + token.suffix;
        }

        continue;
      }

      if (typeof value === "string" || typeof value === "number") {
        var segment = encode(String(value), token);

        if (validate && !matches[i].test(segment)) {
          throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
        }

        path += token.prefix + segment + token.suffix;
        continue;
      }

      if (optional) continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
    }

    return path;
  };
}
/**
 * Create path match function from `path-to-regexp` spec.
 */

function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
/**
 * Create a path match function from `path-to-regexp` output.
 */

function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }

  var _a = options.decode,
      decode = _a === void 0 ? function (x) {
    return x;
  } : _a;
  return function (pathname) {
    var m = re.exec(pathname);
    if (!m) return false;
    var path = m[0],
        index = m.index;
    var params = Object.create(null);

    var _loop_1 = function (i) {
      // tslint:disable-next-line
      if (m[i] === undefined) return "continue";
      var key = keys[i - 1];

      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i], key);
      }
    };

    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }

    return {
      path: path,
      index: index,
      params: params
    };
  };
}
/**
 * Escape a regular expression string.
 */

function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */


function flags(options) {
  return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */


function regexpToRegexp(path, keys) {
  if (!keys) return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);

  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }

  return path;
}
/**
 * Transform an array into a regexp.
 */


function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function (path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */


function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */


function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }

  var _a = options.strict,
      strict = _a === void 0 ? false : _a,
      _b = options.start,
      start = _b === void 0 ? true : _b,
      _c = options.end,
      end = _c === void 0 ? true : _c,
      _d = options.encode,
      encode = _d === void 0 ? function (x) {
    return x;
  } : _d;
  var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
  var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
  var route = start ? "^" : ""; // Iterate over the tokens and create our regexp string.

  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];

    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));

      if (token.pattern) {
        if (keys) keys.push(token);

        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
          } else {
            route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
          }
        } else {
          route += "(" + token.pattern + ")" + token.modifier;
        }
      } else {
        route += "(?:" + prefix + suffix + ")" + token.modifier;
      }
    }
  }

  if (end) {
    if (!strict) route += delimiter + "?";
    route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : // tslint:disable-next-line
    endToken === undefined;

    if (!strict) {
      route += "(?:" + delimiter + "(?=" + endsWith + "))?";
    }

    if (!isEndDelimited) {
      route += "(?=" + delimiter + "|" + endsWith + ")";
    }
  }

  return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */

function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp) return regexpToRegexp(path, keys);
  if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
} //# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/_query-string@6.13.7@query-string/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_query-string@6.13.7@query-string/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/_strict-uri-encode@2.0.0@strict-uri-encode/index.js");

var decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/_decode-uri-component@0.2.0@decode-uri-component/index.js");

var splitOnFirst = __webpack_require__(/*! split-on-first */ "./node_modules/_split-on-first@1.1.0@split-on-first/index.js");

var isNullOrUndefined = function (value) {
  return value === null || value === undefined;
};

function encoderForArrayFormat(options) {
  switch (options.arrayFormat) {
    case 'index':
      return function (key) {
        return function (result, value) {
          var index = result.length;

          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }

          if (value === null) {
            return [].concat(result, [[encode(key, options), '[', index, ']'].join('')]);
          }

          return [].concat(result, [[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')]);
        };
      };

    case 'bracket':
      return function (key) {
        return function (result, value) {
          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }

          if (value === null) {
            return [].concat(result, [[encode(key, options), '[]'].join('')]);
          }

          return [].concat(result, [[encode(key, options), '[]=', encode(value, options)].join('')]);
        };
      };

    case 'comma':
    case 'separator':
      return function (key) {
        return function (result, value) {
          if (value === null || value === undefined || value.length === 0) {
            return result;
          }

          if (result.length === 0) {
            return [[encode(key, options), '=', encode(value, options)].join('')];
          }

          return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
        };
      };

    default:
      return function (key) {
        return function (result, value) {
          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }

          if (value === null) {
            return [].concat(result, [encode(key, options)]);
          }

          return [].concat(result, [[encode(key, options), '=', encode(value, options)].join('')]);
        };
      };
  }
}

function parserForArrayFormat(options) {
  var result;

  switch (options.arrayFormat) {
    case 'index':
      return function (key, value, accumulator) {
        result = /\[(\d*)\]$/.exec(key);
        key = key.replace(/\[\d*\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = {};
        }

        accumulator[key][result[1]] = value;
      };

    case 'bracket':
      return function (key, value, accumulator) {
        result = /(\[\])$/.exec(key);
        key = key.replace(/\[\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = [value];
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };

    case 'comma':
    case 'separator':
      return function (key, value, accumulator) {
        var isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
        var isEncodedArray = typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator);
        value = isEncodedArray ? decode(value, options) : value;
        var newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(function (item) {
          return decode(item, options);
        }) : value === null ? value : decode(value, options);
        accumulator[key] = newValue;
      };

    default:
      return function (key, value, accumulator) {
        if (accumulator[key] === undefined) {
          accumulator[key] = value;
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };
  }
}

function validateArrayFormatSeparator(value) {
  if (typeof value !== 'string' || value.length !== 1) {
    throw new TypeError('arrayFormatSeparator must be single character string');
  }
}

function encode(value, options) {
  if (options.encode) {
    return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
  }

  return value;
}

function decode(value, options) {
  if (options.decode) {
    return decodeComponent(value);
  }

  return value;
}

function keysSorter(input) {
  if (Array.isArray(input)) {
    return input.sort();
  }

  if (typeof input === 'object') {
    return keysSorter(Object.keys(input)).sort(function (a, b) {
      return Number(a) - Number(b);
    }).map(function (key) {
      return input[key];
    });
  }

  return input;
}

function removeHash(input) {
  var hashStart = input.indexOf('#');

  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }

  return input;
}

function getHash(url) {
  var hash = '';
  var hashStart = url.indexOf('#');

  if (hashStart !== -1) {
    hash = url.slice(hashStart);
  }

  return hash;
}

function extract(input) {
  input = removeHash(input);
  var queryStart = input.indexOf('?');

  if (queryStart === -1) {
    return '';
  }

  return input.slice(queryStart + 1);
}

function parseValue(value, options) {
  if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
    value = Number(value);
  } else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
    value = value.toLowerCase() === 'true';
  }

  return value;
}

function parse(query, options) {
  options = Object.assign({
    decode: true,
    sort: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ',',
    parseNumbers: false,
    parseBooleans: false
  }, options);
  validateArrayFormatSeparator(options.arrayFormatSeparator);
  var formatter = parserForArrayFormat(options); // Create an object with no prototype

  var ret = Object.create(null);

  if (typeof query !== 'string') {
    return ret;
  }

  query = query.trim().replace(/^[?#&]/, '');

  if (!query) {
    return ret;
  }

  for (var _iterator = _createForOfIteratorHelperLoose(query.split('&')), _step; !(_step = _iterator()).done;) {
    var param = _step.value;

    var _splitOnFirst = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '='),
        _key = _splitOnFirst[0],
        _value = _splitOnFirst[1]; // Missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters


    _value = _value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? _value : decode(_value, options);
    formatter(decode(_key, options), _value, ret);
  }

  for (var _i = 0, _Object$keys = Object.keys(ret); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    var value = ret[key];

    if (typeof value === 'object' && value !== null) {
      for (var _i2 = 0, _Object$keys2 = Object.keys(value); _i2 < _Object$keys2.length; _i2++) {
        var k = _Object$keys2[_i2];
        value[k] = parseValue(value[k], options);
      }
    } else {
      ret[key] = parseValue(value, options);
    }
  }

  if (options.sort === false) {
    return ret;
  }

  return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce(function (result, key) {
    var value = ret[key];

    if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
      // Sort object keys, not values
      result[key] = keysSorter(value);
    } else {
      result[key] = value;
    }

    return result;
  }, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (object, options) {
  if (!object) {
    return '';
  }

  options = Object.assign({
    encode: true,
    strict: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ','
  }, options);
  validateArrayFormatSeparator(options.arrayFormatSeparator);

  var shouldFilter = function (key) {
    return options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === '';
  };

  var formatter = encoderForArrayFormat(options);
  var objectCopy = {};

  for (var _i3 = 0, _Object$keys3 = Object.keys(object); _i3 < _Object$keys3.length; _i3++) {
    var key = _Object$keys3[_i3];

    if (!shouldFilter(key)) {
      objectCopy[key] = object[key];
    }
  }

  var keys = Object.keys(objectCopy);

  if (options.sort !== false) {
    keys.sort(options.sort);
  }

  return keys.map(function (key) {
    var value = object[key];

    if (value === undefined) {
      return '';
    }

    if (value === null) {
      return encode(key, options);
    }

    if (Array.isArray(value)) {
      return value.reduce(formatter(key), []).join('&');
    }

    return encode(key, options) + '=' + encode(value, options);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&');
};

exports.parseUrl = function (url, options) {
  options = Object.assign({
    decode: true
  }, options);

  var _splitOnFirst2 = splitOnFirst(url, '#'),
      url_ = _splitOnFirst2[0],
      hash = _splitOnFirst2[1];

  return Object.assign({
    url: url_.split('?')[0] || '',
    query: parse(extract(url), options)
  }, options && options.parseFragmentIdentifier && hash ? {
    fragmentIdentifier: decode(hash, options)
  } : {});
};

exports.stringifyUrl = function (object, options) {
  options = Object.assign({
    encode: true,
    strict: true
  }, options);
  var url = removeHash(object.url).split('?')[0] || '';
  var queryFromUrl = exports.extract(object.url);
  var parsedQueryFromUrl = exports.parse(queryFromUrl, {
    sort: false
  });
  var query = Object.assign(parsedQueryFromUrl, object.query);
  var queryString = exports.stringify(query, options);

  if (queryString) {
    queryString = "?" + queryString;
  }

  var hash = getHash(object.url);

  if (object.fragmentIdentifier) {
    hash = "#" + encode(object.fragmentIdentifier, options);
  }

  return "" + url + queryString + hash;
};

/***/ }),

/***/ "./node_modules/_rax-app-renderer@0.1.5@rax-app-renderer/lib/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_rax-app-renderer@0.1.5@rax-app-renderer/lib/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ "./node_modules/_rax-app-renderer@0.1.5@rax-app-renderer/lib/renderer.js");

/* harmony default export */ __webpack_exports__["default"] = (_renderer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/_rax-app-renderer@0.1.5@rax-app-renderer/lib/renderer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_rax-app-renderer@0.1.5@rax-app-renderer/lib/renderer.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var create_app_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! create-app-container */ "./node_modules/_create-app-container@0.1.3@create-app-container/lib/index.js");
/* harmony import */ var create_app_container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(create_app_container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var create_use_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! create-use-router */ "./node_modules/_create-use-router@0.1.2@create-use-router/lib/index.js");
/* harmony import */ var create_use_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(create_use_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var driver_universal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! driver-universal */ "./node_modules/_driver-universal@3.1.5@driver-universal/es/index.js");
var __assign = undefined && undefined.__assign || function () {
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

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
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

var __generator = undefined && undefined.__generator || function (thisArg, body) {
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




var isKraken = false;
var isWeex = false;
var isWeb = true;

var useRouter = Object(create_use_router__WEBPACK_IMPORTED_MODULE_2__["createUseRouter"])({
  useState: rax__WEBPACK_IMPORTED_MODULE_0__["useState"],
  useLayoutEffect: rax__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"]
});
var AppNavigation;
var TabBar;
AppNavigation = Object(create_app_container__WEBPACK_IMPORTED_MODULE_1__["createNavigation"])({
  createElement: rax__WEBPACK_IMPORTED_MODULE_0__["createElement"],
  useEffect: rax__WEBPACK_IMPORTED_MODULE_0__["useEffect"],
  useState: rax__WEBPACK_IMPORTED_MODULE_0__["useState"],
  Fragment: rax__WEBPACK_IMPORTED_MODULE_0__["Fragment"]
});
var driver = driver_universal__WEBPACK_IMPORTED_MODULE_3__["default"];

function _isNullableComponent(component) {
  return !component || Array.isArray(component) && component.length === 0;
}

function _matchInitialComponent(fullpath, routes) {
  var initialComponent = null;

  for (var i = 0, l = routes.length; i < l; i++) {
    if (fullpath === routes[i].path || routes[i].regexp && routes[i].regexp.test(fullpath)) {
      initialComponent = routes[i].component;
      if (typeof initialComponent === 'function') initialComponent = initialComponent();
      break;
    }
  }

  return Promise.resolve(initialComponent);
}

function App(props) {
  var staticConfig = props.staticConfig,
      history = props.history,
      routes = props.routes,
      InitialComponent = props.InitialComponent,
      context = props.context;
  var PageComponent = useRouter(function () {
    return {
      history: history,
      routes: routes,
      InitialComponent: InitialComponent
    };
  }).component; // Return null directly if not matched

  if (_isNullableComponent(PageComponent)) return null;
  var navigationProps = Object.assign({
    staticConfig: staticConfig,
    component: PageComponent,
    history: history,
    location: history.location,
    routes: routes,
    InitialComponent: InitialComponent
  }, __assign({}, context.pageInitialProps));
  return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AppNavigation, __assign({}, navigationProps));
  var pageProps = Object.assign({
    history: history,
    location: history.location,
    routes: routes,
    InitialComponent: InitialComponent
  }, __assign({}, context.pageInitialProps));
  var tabBarProps = {
    history: history,
    config: staticConfig.tabBar
  };
}

function raxAppRenderer(options) {
  return __awaiter(this, void 0, void 0, function () {
    var _a, appConfig, setAppConfig, initialData, pageInitialProps, context;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _a = options || {}, appConfig = _a.appConfig, setAppConfig = _a.setAppConfig;
          setAppConfig(appConfig);
          if (process.env.__IS_SERVER__) return [2
          /*return*/
          ];
          initialData = {};
          pageInitialProps = {};
          if (!window.__INITIAL_DATA__) return [3
          /*break*/
          , 1];
          initialData = window.__INITIAL_DATA__.initialData;
          pageInitialProps = window.__INITIAL_DATA__.pageData;
          return [3
          /*break*/
          , 3];

        case 1:
          if (!(appConfig.app && appConfig.app.getInitialData)) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , appConfig.app.getInitialData()];

        case 2:
          initialData = _b.sent();
          _b.label = 3;

        case 3:
          context = {
            initialData: initialData,
            pageInitialProps: pageInitialProps
          };

          _renderApp(context, options);

          return [2
          /*return*/
          ];
      }
    });
  });
}

function _renderApp(context, options) {
  var appConfig = options.appConfig,
      createBaseApp = options.createBaseApp,
      emitLifeCycles = options.emitLifeCycles,
      pathRedirect = options.pathRedirect,
      getHistory = options.getHistory,
      staticConfig = options.staticConfig,
      createAppInstance = options.createAppInstance,
      ErrorBoundary = options.ErrorBoundary;

  var _a = createBaseApp(appConfig),
      runtime = _a.runtime,
      appDynamicConfig = _a.appConfig; // Set custom driver


  if (typeof staticConfig.driver !== 'undefined') {
    driver = staticConfig.driver;
  }

  var routes = staticConfig.routes; // Like https://xxx.com?_path=/page1, use `_path` to jump to a specific route.

  var history = getHistory();
  pathRedirect(history, routes);

  var _initialComponent;

  return _matchInitialComponent(history.location.pathname, routes).then(function (initialComponent) {
    var _a;

    _initialComponent = initialComponent;
    var props = {
      staticConfig: staticConfig,
      history: history,
      routes: routes,
      InitialComponent: _initialComponent,
      context: context
    };
    var _b = appDynamicConfig.app,
        app = _b === void 0 ? {} : _b;
    var rootId = app.rootId,
        ErrorBoundaryFallback = app.ErrorBoundaryFallback,
        onErrorBoundaryHander = app.onErrorBoundaryHander,
        errorBoundary = app.errorBoundary;
    var appInstance; // For rax-app 2.x

    if (typeof createAppInstance === 'function') {
      appInstance = createAppInstance(initialComponent);
    } else {
      var AppProvider_1 = (_a = runtime === null || runtime === void 0 ? void 0 : runtime.composeAppProvider) === null || _a === void 0 ? void 0 : _a.call(runtime);

      var RootComponent = function () {
        if (AppProvider_1) {
          return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AppProvider_1, null, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(App, __assign({}, props)));
        }

        return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(App, __assign({}, props));
      };

      var Root = Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RootComponent, null);

      if (errorBoundary) {
        appInstance = Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ErrorBoundary, {
          Fallback: ErrorBoundaryFallback,
          onError: onErrorBoundaryHander
        }, Root);
      } else {
        appInstance = Root;
      }
    } // Emit app launch cycle


    emitLifeCycles();
    var rootEl = document.getElementById(rootId);
    if (isWeb && rootId === null) console.warn('Error: Can not find #root element, please check which exists in DOM.');
    var isSSR = typeof window !== 'undefined' ? window.__INITIAL_DATA__ && window.__INITIAL_DATA__.__SSR_ENABLED__ : false;
    return Object(rax__WEBPACK_IMPORTED_MODULE_0__["render"])(appInstance, rootEl, {
      driver: driver,
      hydrate: isSSR
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (raxAppRenderer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../_process@0.11.10@process/browser.js */ "./node_modules/_process@0.11.10@process/browser.js")))

/***/ }),

/***/ "./node_modules/_resolve-pathname@3.0.0@resolve-pathname/esm/resolve-pathname.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_resolve-pathname@3.0.0@resolve-pathname/esm/resolve-pathname.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
} // About 1.5x faster than the two-arg version of Array#splice()


function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
} // This implementation is based heavily on node's url.parse


function resolvePathname(to, from) {
  if (from === undefined) from = '';
  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';
  var hasTrailingSlash;

  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;

  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }
  if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');
  var result = fromParts.join('/');
  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

/***/ }),

/***/ "./node_modules/_split-on-first@1.1.0@split-on-first/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/_split-on-first@1.1.0@split-on-first/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (string, separator) {
  if (!(typeof string === 'string' && typeof separator === 'string')) {
    throw new TypeError('Expected the arguments to be of type `string`');
  }

  if (separator === '') {
    return [string];
  }

  var separatorIndex = string.indexOf(separator);

  if (separatorIndex === -1) {
    return [string];
  }

  return [string.slice(0, separatorIndex), string.slice(separatorIndex + separator.length)];
};

/***/ }),

/***/ "./node_modules/_strict-uri-encode@2.0.0@strict-uri-encode/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_strict-uri-encode@2.0.0@strict-uri-encode/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (x) {
    return "%" + x.charCodeAt(0).toString(16).toUpperCase();
  });
};

/***/ }),

/***/ "./node_modules/_style-unit@3.0.0@style-unit/lib/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/_style-unit@3.0.0@style-unit/lib/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isRpx = isRpx;
exports.calcRpx = calcRpx;
exports.getRpx = getRpx;
exports.setRpx = setRpx;
exports.getViewportWidth = getViewportWidth;
exports.setViewportWidth = setViewportWidth;
exports.setDecimalPixelTransformer = setDecimalPixelTransformer;
exports.convertUnit = convertUnit;
var _universalEnv = {
  isWeex: false,
  isWeb: true,
  isKraken: false,
  isNode: false,
  isMiniApp: false,
  isWeChatMiniProgram: false,
  isWeChatMiniprogram: false
};
var RPX_REG = /[-+]?\d*\.?\d+rpx/g;
var GLOBAL_RPX_COEFFICIENT = '__rpx_coefficient__';
var GLOBAL_VIEWPORT_WIDTH = '__viewport_width__';
var global = typeof window === 'object' ? window : typeof global === 'object' ? global : {}; // convertUnit method targetPlatform

var targetPlatform = 'web'; // Init toFixed method

var unitPrecision = 4;

var toFixed = function (number, precision) {
  var multiplier = Math.pow(10, precision + 1);
  var wholeNumber = Math.floor(number * multiplier);
  return Math.round(wholeNumber / 10) * 10 / multiplier;
}; // Dedault decimal px transformer.


var decimalPixelTransformer = function (rpx) {
  return parseFloat(rpx) * getRpx() + 'px';
}; // Default decimal vw transformer.


var decimalVWTransformer = function (rpx) {
  return toFixed(parseFloat(rpx) / (getViewportWidth() / 100), unitPrecision) + 'vw';
}; // Default 1 rpx to 1 px


if (getRpx() === undefined) {
  setRpx(1);
} // Viewport width, default to 750.


if (getViewportWidth() === undefined) {
  setViewportWidth(750);
}
/**
 * Is string contains rpx
 * note: rpx is an alias to rpx
 * @param {String} str
 * @returns {Boolean}
 */


function isRpx(str) {
  return typeof str === 'string' && RPX_REG.test(str);
}
/**
 * Calculate rpx
 * @param {String} str
 * @returns {String}
 */


function calcRpx(str) {
  if (targetPlatform === 'web') {
    // In Web convert rpx to 'vw', same as driver-dom and driver-universal
    // '375rpx' => '50vw'
    return str.replace(RPX_REG, decimalVWTransformer);
  } else if (targetPlatform === 'weex') {
    // In Weex convert rpx to 'px'
    // '375rpx' => 375 * px
    return str.replace(RPX_REG, decimalPixelTransformer);
  } else {
    // Other platform return original value, like Mini-App and WX Mini-Program ...
    // '375rpx' => '375rpx'
    return str;
  }
}

function getRpx() {
  return global[GLOBAL_RPX_COEFFICIENT];
}

function setRpx(rpx) {
  global[GLOBAL_RPX_COEFFICIENT] = rpx;
}

function getViewportWidth() {
  return global[GLOBAL_VIEWPORT_WIDTH];
}

function setViewportWidth(viewport) {
  global[GLOBAL_VIEWPORT_WIDTH] = viewport;
}
/**
 * Set a function to transform unit of pixel,
 * default to passthrough.
 * @param {Function} transformer function
 */


function setDecimalPixelTransformer(transformer) {
  decimalPixelTransformer = transformer;
}

var cache = Object.create(null);
/**
 * Convert rpx.
 * @param value
 * @param prop
 * @param platform
 * @return {String} Transformed value.
 */

function convertUnit(value, prop, platform) {
  var cacheKey = prop + "-" + value;
  var hit = cache[cacheKey];

  if (platform) {
    cacheKey += "-" + platform;
    targetPlatform = platform;
  }

  if (hit) {
    return hit;
  } else {
    value = value + '';
    return cache[cacheKey] = isRpx(value) ? calcRpx(value) : value;
  }
}

/***/ }),

/***/ "./node_modules/_tiny-invariant@1.1.0@tiny-invariant/dist/tiny-invariant.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_tiny-invariant@1.1.0@tiny-invariant/dist/tiny-invariant.esm.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';

function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  }

  throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);

/***/ }),

/***/ "./node_modules/_tiny-warning@1.0.3@tiny-warning/dist/tiny-warning.esm.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_tiny-warning@1.0.3@tiny-warning/dist/tiny-warning.esm.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';

function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);

/***/ }),

/***/ "./node_modules/_value-equal@1.0.1@value-equal/esm/value-equal.js":
/*!************************************************************************!*\
  !*** ./node_modules/_value-equal@1.0.1@value-equal/esm/value-equal.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true; // Otherwise, if either of them == null they are not equal.

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);
    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);
    return Object.keys(Object.assign({}, a, b)).every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),

/***/ "./src/app.json":
/*!**********************!*\
  !*** ./src/app.json ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rax__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var interopRequire = function (mod) {
  return mod && mod.__esModule ? mod["default"] : mod;
};

var routes = [];
routes.push(_extends({}, {
  "path": "/",
  "source": "pages/Home/index",
  "pageSource": "C:\\bookkeeping\\.rax\\pages\\Home\\Page"
}, {
  component: function component(routeProps) {
    return Promise.all(/*! import() | pages_home_index.chunk */[__webpack_require__.e("vendor~pages_addpage_index.chunk~pages_editpage_index.chunk~pages_home_index.chunk~pages_login_index~176d7ead"), __webpack_require__.e("vendor~pages_home_index.chunk~pages_login_index.chunk~pages_register_index.chunk"), __webpack_require__.e("pages_home_index.chunk")]).then(__webpack_require__.bind(null, /*! ./.rax/pages/Home/Page */ "./.rax/pages/Home/Page.tsx")).then(function (mod) {
      return function () {
        var reference = interopRequire(mod);

        function Component(props) {
          return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(reference, Object.assign({}, routeProps, props));
        }

        document.title = "Rax App";
        Component.__path = '/';
        return Component;
      };
    });
  }
}));
routes.push(_extends({}, {
  "path": "/login",
  "source": "pages/Login/index",
  "pageSource": "C:\\bookkeeping\\.rax\\pages\\Login\\Page"
}, {
  component: function component(routeProps) {
    return Promise.all(/*! import() | pages_login_index.chunk */[__webpack_require__.e("vendor~pages_addpage_index.chunk~pages_editpage_index.chunk~pages_home_index.chunk~pages_login_index~176d7ead"), __webpack_require__.e("vendor~pages_addpage_index.chunk~pages_editpage_index.chunk~pages_login_index.chunk~pages_mainaction~6e69c965"), __webpack_require__.e("vendor~pages_home_index.chunk~pages_login_index.chunk~pages_register_index.chunk"), __webpack_require__.e("pages_login_index.chunk")]).then(__webpack_require__.bind(null, /*! ./.rax/pages/Login/Page */ "./.rax/pages/Login/Page.tsx")).then(function (mod) {
      return function () {
        var reference = interopRequire(mod);

        function Component(props) {
          return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(reference, Object.assign({}, routeProps, props));
        }

        document.title = "Rax App";
        Component.__path = '/login';
        return Component;
      };
    });
  }
}));
routes.push(_extends({}, {
  "path": "/register",
  "source": "pages/Register/index",
  "pageSource": "C:\\bookkeeping\\.rax\\pages\\Register\\Page"
}, {
  component: function component(routeProps) {
    return Promise.all(/*! import() | pages_register_index.chunk */[__webpack_require__.e("vendor~pages_addpage_index.chunk~pages_editpage_index.chunk~pages_home_index.chunk~pages_login_index~176d7ead"), __webpack_require__.e("vendor~pages_home_index.chunk~pages_login_index.chunk~pages_register_index.chunk"), __webpack_require__.e("pages_register_index.chunk")]).then(__webpack_require__.bind(null, /*! ./.rax/pages/Register/Page */ "./.rax/pages/Register/Page.tsx")).then(function (mod) {
      return function () {
        var reference = interopRequire(mod);

        function Component(props) {
          return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(reference, Object.assign({}, routeProps, props));
        }

        document.title = "Rax App";
        Component.__path = '/register';
        return Component;
      };
    });
  }
}));
routes.push(_extends({}, {
  "path": "/mainAction",
  "source": "pages/MainAction/index",
  "pageSource": "C:\\bookkeeping\\.rax\\pages\\MainAction\\Page"
}, {
  component: function component(routeProps) {
    return Promise.all(/*! import() | pages_mainaction_index.chunk */[__webpack_require__.e("vendor~pages_addpage_index.chunk~pages_editpage_index.chunk~pages_home_index.chunk~pages_login_index~176d7ead"), __webpack_require__.e("vendor~pages_addpage_index.chunk~pages_editpage_index.chunk~pages_login_index.chunk~pages_mainaction~6e69c965"), __webpack_require__.e("pages_mainaction_index.chunk")]).then(__webpack_require__.bind(null, /*! ./.rax/pages/MainAction/Page */ "./.rax/pages/MainAction/Page.tsx")).then(function (mod) {
      return function () {
        var reference = interopRequire(mod);

        function Component(props) {
          return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(reference, Object.assign({}, routeProps, props));
        }

        document.title = "Rax App";
        Component.__path = '/mainAction';
        return Component;
      };
    });
  }
}));
routes.push(_extends({}, {
  "path": "/addPage",
  "source": "pages/AddPage/index",
  "pageSource": "C:\\bookkeeping\\.rax\\pages\\AddPage\\Page"
}, {
  component: function component(routeProps) {
    return Promise.all(/*! import() | pages_addpage_index.chunk */[__webpack_require__.e("vendor~pages_addpage_index.chunk~pages_editpage_index.chunk~pages_home_index.chunk~pages_login_index~176d7ead"), __webpack_require__.e("vendor~pages_addpage_index.chunk~pages_editpage_index.chunk~pages_login_index.chunk~pages_mainaction~6e69c965"), __webpack_require__.e("pages_addpage_index.chunk")]).then(__webpack_require__.bind(null, /*! ./.rax/pages/AddPage/Page */ "./.rax/pages/AddPage/Page.tsx")).then(function (mod) {
      return function () {
        var reference = interopRequire(mod);

        function Component(props) {
          return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(reference, Object.assign({}, routeProps, props));
        }

        document.title = "Rax App";
        Component.__path = '/addPage';
        return Component;
      };
    });
  }
}));
routes.push(_extends({}, {
  "path": "/editPage",
  "source": "pages/EditPage/index",
  "pageSource": "C:\\bookkeeping\\.rax\\pages\\EditPage\\Page"
}, {
  component: function component(routeProps) {
    return Promise.all(/*! import() | pages_editpage_index.chunk */[__webpack_require__.e("vendor~pages_addpage_index.chunk~pages_editpage_index.chunk~pages_home_index.chunk~pages_login_index~176d7ead"), __webpack_require__.e("vendor~pages_addpage_index.chunk~pages_editpage_index.chunk~pages_login_index.chunk~pages_mainaction~6e69c965"), __webpack_require__.e("pages_editpage_index.chunk")]).then(__webpack_require__.bind(null, /*! ./.rax/pages/EditPage/Page */ "./.rax/pages/EditPage/Page.tsx")).then(function (mod) {
      return function () {
        var reference = interopRequire(mod);

        function Component(props) {
          return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(reference, Object.assign({}, routeProps, props));
        }

        document.title = "Rax App";
        Component.__path = '/editPage';
        return Component;
      };
    });
  }
}));
routes.push(_extends({}, {
  "path": "/showStatus",
  "source": "pages/ShowStatus/index",
  "pageSource": "C:\\bookkeeping\\.rax\\pages\\ShowStatus\\Page"
}, {
  component: function component(routeProps) {
    return Promise.all(/*! import() | pages_showstatus_index.chunk */[__webpack_require__.e("vendor~pages_addpage_index.chunk~pages_editpage_index.chunk~pages_home_index.chunk~pages_login_index~176d7ead"), __webpack_require__.e("vendor~pages_addpage_index.chunk~pages_editpage_index.chunk~pages_login_index.chunk~pages_mainaction~6e69c965"), __webpack_require__.e("vendor~pages_showstatus_index.chunk"), __webpack_require__.e("pages_showstatus_index.chunk")]).then(__webpack_require__.bind(null, /*! ./.rax/pages/ShowStatus/Page */ "./.rax/pages/ShowStatus/Page.tsx")).then(function (mod) {
      return function () {
        var reference = interopRequire(mod);

        function Component(props) {
          return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(reference, Object.assign({}, routeProps, props));
        }

        document.title = "Rax App";
        Component.__path = '/showStatus';
        return Component;
      };
    });
  }
}));

var appConfig = _extends({}, {
  "routes": [{
    "path": "/",
    "source": "pages/Home/index",
    "pageSource": "C:\\bookkeeping\\.rax\\pages\\Home\\Page"
  }, {
    "path": "/login",
    "source": "pages/Login/index",
    "pageSource": "C:\\bookkeeping\\.rax\\pages\\Login\\Page"
  }, {
    "path": "/register",
    "source": "pages/Register/index",
    "pageSource": "C:\\bookkeeping\\.rax\\pages\\Register\\Page"
  }, {
    "path": "/mainAction",
    "source": "pages/MainAction/index",
    "pageSource": "C:\\bookkeeping\\.rax\\pages\\MainAction\\Page"
  }, {
    "path": "/addPage",
    "source": "pages/AddPage/index",
    "pageSource": "C:\\bookkeeping\\.rax\\pages\\AddPage\\Page"
  }, {
    "path": "/editPage",
    "source": "pages/EditPage/index",
    "pageSource": "C:\\bookkeeping\\.rax\\pages\\EditPage\\Page"
  }, {
    "path": "/showStatus",
    "source": "pages/ShowStatus/index",
    "pageSource": "C:\\bookkeeping\\.rax\\pages\\ShowStatus\\Page"
  }],
  "window": {
    "title": "Rax App"
  }
}, {
  routes: routes
});

/* harmony default export */ __webpack_exports__["default"] = (appConfig);

/***/ })

})
//# sourceMappingURL=index.f6697897388a7bcc2313.hot-update.js.map