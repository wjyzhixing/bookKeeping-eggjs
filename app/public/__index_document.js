module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_build-plugin-rax-web@1.0.8@build-plugin-rax-web/lib/DocumentPlugin/loader.js?absoluteDocumentPath=C%3A%5Cbookkeeping%5Csrc%5Cdocument%5Cindex.tsx&absolutePagePath=&pagePath=%2F!./src/document/index.tsx":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_build-plugin-rax-web@1.0.8@build-plugin-rax-web/lib/DocumentPlugin/loader.js?absoluteDocumentPath=C%3A%5Cbookkeeping%5Csrc%5Cdocument%5Cindex.tsx&absolutePagePath=&pagePath=%2F!./src/document/index.tsx ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: renderToHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToHTML", function() { return renderToHTML; });
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rax_server_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rax-server-renderer */ "./node_modules/_rax-server-renderer@1.2.1@rax-server-renderer/lib/index.js");
/* harmony import */ var rax_server_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rax_server_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_bookkeeping_src_document_index_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/document/index.tsx */ "./src/document/index.tsx");

    
    
    
    const Shell = null;
    const Page = null;

    function renderToHTML(assets) {
      let contentElement;

      if (Shell) {
        if (Page) {
          contentElement = Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Shell, {}, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Page, {}));
        } else {
          contentElement = Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Shell, {});
        }
      } else if (Page) {
        contentElement = Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Page, {})
      }

      const initialHtml = contentElement ? rax_server_renderer__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString(contentElement, {
        defaultUnit: 'rpx'
      }) : null;

      // This loader is executed after babel, so need to be tansformed to ES5.
      const DocumentContextProvider = function() {};
      DocumentContextProvider.prototype.getChildContext = function() {
        return {
          __initialHtml: initialHtml,
          __pagePath: '/',
          __styles: assets.styles,
          __scripts: assets.scripts,
          __manifests: undefined
        };
      };

      DocumentContextProvider.prototype.render = function() {
        return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(C_bookkeeping_src_document_index_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], {});
      };

      const DocumentContextProviderElement = Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DocumentContextProvider);

      // For universal app, driver-universal will convert unitless style to rpx
      const html = '<!DOCTYPE html>' + rax_server_renderer__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString(DocumentContextProviderElement, {
        defaultUnit: 'rpx'
      });

      return html;
    }

    
  

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

/***/ "./node_modules/_rax-document@0.1.3@rax-document/lib/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/_rax-document@0.1.3@rax-document/lib/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Root = Root;
exports.Data = Data;
exports.Style = Style;
exports.Script = Script;
exports.App = App;
exports.Manifest = Manifest;

var _rax = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");

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

function Root(props, context) {
  var __initialHtml = context.__initialHtml;

  if (__initialHtml) {
    return (0, _rax.createElement)("div", {
      id: "root",
      dangerouslySetInnerHTML: {
        __html: __initialHtml || ''
      }
    });
  }

  return (0, _rax.createElement)("div", {
    id: "root"
  });
}

function Manifest(props, context) {
  var __manifests = context.__manifests,
      __pagePath = context.__pagePath;

  if (Array.isArray(__manifests)) {
    var manifest = __manifests.find(function (item) {
      return item.path === __pagePath;
    }); // manifest json type: https://developer.mozilla.org/en-US/docs/Web/Manifest#Deploying_a_manifest_with_the_link_tag


    if (manifest && manifest.data) {
      return (0, _rax.createElement)("script", {
        type: "application/manifest+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(manifest.data)
        }
      });
    }
  }

  return null;
}

function Data(props, context) {
  var __initialData = context.__initialData;

  if (__initialData) {
    return (0, _rax.createElement)("script", {
      "data-from": "server",
      dangerouslySetInnerHTML: {
        __html: 'window.__INITIAL_DATA__=' + __initialData
      }
    });
  }

  return null;
} // Named by role rather than implementationm, so component name are `Style` rather than `Styles`.


function Style(props, context) {
  var _context$__styles = context.__styles,
      __styles = _context$__styles === void 0 ? [] : _context$__styles;

  return __styles.map(function (src, index) {
    return (0, _rax.createElement)("link", _extends({}, props, {
      rel: "stylesheet",
      href: src,
      key: "style_" + index
    }));
  });
}

function Script(props, context) {
  var _context$__scripts = context.__scripts,
      __scripts = _context$__scripts === void 0 ? [] : _context$__scripts; // props such as crossorigin can be passed to script tag


  return __scripts.map(function (src, index) {
    return (0, _rax.createElement)("script", _extends({}, props, {
      src: src,
      key: "script_" + index
    }));
  });
}

function App(props, context) {
  var config = props.config || {};
  var routes = config.routes || [];
  var pagePath = context.__pagePath;
  var currentPageInfo = routes.find(function (route) {
    return route.path == pagePath;
  });
  var consumer = Array.isArray(props.children) ? props.children[0] : props.children;

  if (typeof consumer === 'function') {
    return consumer(currentPageInfo);
  }

  return props.children;
}

/***/ }),

/***/ "./node_modules/_rax-server-renderer@1.2.1@rax-server-renderer/lib/CSSProperty.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_rax-server-renderer@1.2.1@rax-server-renderer/lib/CSSProperty.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.UNITLESS_NUMBER_PROPS = void 0;
var TRUE = true;
/**
 * CSS properties which accept numbers but are not in units of "px".
 */

var UNITLESS_NUMBER_PROPS = {
  animationIterationCount: TRUE,
  borderImageOutset: TRUE,
  borderImageSlice: TRUE,
  borderImageWidth: TRUE,
  boxFlex: TRUE,
  boxFlexGroup: TRUE,
  boxOrdinalGroup: TRUE,
  columnCount: TRUE,
  columns: TRUE,
  flex: TRUE,
  flexGrow: TRUE,
  flexPositive: TRUE,
  flexShrink: TRUE,
  flexNegative: TRUE,
  flexOrder: TRUE,
  gridArea: TRUE,
  gridRow: TRUE,
  gridRowEnd: TRUE,
  gridRowSpan: TRUE,
  gridRowStart: TRUE,
  gridColumn: TRUE,
  gridColumnEnd: TRUE,
  gridColumnSpan: TRUE,
  gridColumnStart: TRUE,
  fontWeight: TRUE,
  lineClamp: TRUE,
  lineHeight: TRUE,
  opacity: TRUE,
  order: TRUE,
  orphans: TRUE,
  tabSize: TRUE,
  widows: TRUE,
  zIndex: TRUE,
  zoom: TRUE,
  // SVG-related properties
  fillOpacity: TRUE,
  floodOpacity: TRUE,
  stopOpacity: TRUE,
  strokeDasharray: TRUE,
  strokeDashoffset: TRUE,
  strokeMiterlimit: TRUE,
  strokeOpacity: TRUE,
  strokeWidth: TRUE
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

exports.UNITLESS_NUMBER_PROPS = UNITLESS_NUMBER_PROPS;

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.keys(UNITLESS_NUMBER_PROPS).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    UNITLESS_NUMBER_PROPS[prefixKey(prefix, prop)] = UNITLESS_NUMBER_PROPS[prop];
  });
});

/***/ }),

/***/ "./node_modules/_rax-server-renderer@1.2.1@rax-server-renderer/lib/attribute.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_rax-server-renderer@1.2.1@rax-server-renderer/lib/attribute.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getPropertyInfo = getPropertyInfo;
exports.shouldRemoveAttribute = shouldRemoveAttribute;
exports.POSITIVE_NUMERIC = exports.NUMERIC = exports.OVERLOADED_BOOLEAN = exports.BOOLEAN = exports.BOOLEANISH_STRING = exports.STRING = void 0; // A simple string attribute.
// Attributes that aren't in the whitelist are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in Rax. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

exports.STRING = STRING;
var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

exports.BOOLEANISH_STRING = BOOLEANISH_STRING;
var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

exports.BOOLEAN = BOOLEAN;
var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

exports.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

exports.NUMERIC = NUMERIC;
var POSITIVE_NUMERIC = 6;
exports.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
var properties = {};

function getPropertyInfo(prop) {
  return properties[prop];
}

function shouldRemoveAttribute(prop, value) {
  var propertyInfo = getPropertyInfo(prop);
  var propType = propertyInfo ? propertyInfo.type : null;
  var valueType = typeof value;

  if (value === null || valueType === 'undefined') {
    return true;
  }

  switch (valueType) {
    case 'function':
    case 'symbol':
      return true;
  }

  if (propType !== null) {
    switch (propType) {
      case BOOLEAN:
        return !value;

      case OVERLOADED_BOOLEAN:
        return value === false;

      case NUMERIC:
        return isNaN(value);

      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }

  return false;
}

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = {
    type: BOOLEANISH_STRING
  };
});
['allowFullScreen', 'async', 'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', 'itemScope', 'checked', 'multiple', 'muted', 'selected'].forEach(function (name) {
  properties[name] = {
    type: BOOLEAN
  };
});
['capture', 'download'].forEach(function (name) {
  properties[name] = {
    type: OVERLOADED_BOOLEAN
  };
});
['cols', 'rows', 'size', 'span'].forEach(function (name) {
  properties[name] = {
    type: POSITIVE_NUMERIC
  };
});

/***/ }),

/***/ "./node_modules/_rax-server-renderer@1.2.1@rax-server-renderer/lib/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_rax-server-renderer@1.2.1@rax-server-renderer/lib/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.renderToString = renderToString;
exports.default = void 0;

var _rax = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");

var _attribute = __webpack_require__(/*! ./attribute */ "./node_modules/_rax-server-renderer@1.2.1@rax-server-renderer/lib/attribute.js");

var _CSSProperty = __webpack_require__(/*! ./CSSProperty */ "./node_modules/_rax-server-renderer@1.2.1@rax-server-renderer/lib/CSSProperty.js");

var EMPTY_OBJECT = {};
var VOID_ELEMENTS = {
  'area': true,
  'base': true,
  'br': true,
  'col': true,
  'embed': true,
  'hr': true,
  'img': true,
  'input': true,
  'link': true,
  'meta': true,
  'param': true,
  'source': true,
  'track': true,
  'wbr': true
};
var TEXT_SPLIT_COMMENT = '<!--|-->';
var ESCAPE_LOOKUP = {
  '&': '&amp;',
  '>': '&gt;',
  '<': '&lt;',
  '"': '&quot;',
  '\'': '&#x27;'
};
var ESCAPE_REGEXP = /[&><"']/g;
var ESCAPE_TEST_REGEXP = /[&><"']/;

function escaper(match) {
  return ESCAPE_LOOKUP[match];
}

function escapeText(text) {
  if (!ESCAPE_TEST_REGEXP.test(text)) {
    return text;
  }

  return String(text).replace(ESCAPE_REGEXP, escaper);
}

function merge(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

var DEFAULT_STYLE_OPTIONS = {
  defaultUnit: 'px',
  viewportWidth: 750,
  unitPrecision: 5
};
var UPPERCASE_REGEXP = /[A-Z]/g;
var NUMBER_REGEXP = /^[0-9]*$/;
var RPX_REG = /[-+]?\d*\.?\d+rpx/g;
var CSSPropCache = {};

function styleToCSS(style, options) {
  if (options === void 0) {
    options = {};
  }

  var css = '';

  if (Array.isArray(style)) {
    style = style.reduce(function (prev, curr) {
      return Object.assign(prev, curr);
    }, {});
  } // Use var avoid v8 warns "Unsupported phi use of const or let variable"


  for (var prop in style) {
    var val = style[prop];

    if (val == null) {
      continue;
    } // Handle unit for all numerical property, such as fontWeight: 600 / fontWeight: '600'


    var type = typeof val;

    if (type === 'number' || type === 'string' && NUMBER_REGEXP.test(val)) {
      if (!_CSSProperty.UNITLESS_NUMBER_PROPS[prop]) {
        val = val + options.defaultUnit;
      }
    }

    if (typeof val === 'string' && val.indexOf('rpx') > -1) {
      val = val.replace(RPX_REG, function (rpx) {
        return rpx2vw(rpx, options);
      });
    }

    prop = CSSPropCache[prop] ? CSSPropCache[prop] : CSSPropCache[prop] = prop.replace(UPPERCASE_REGEXP, '-$&').toLowerCase();
    css = css + (prop + ":" + val + ";");
  }

  return css;
}

function createMarkupForProperty(prop, value, options) {
  if (prop === 'children') {
    // Ignore children prop
    return '';
  }

  if (prop === 'style') {
    return " style=\"" + styleToCSS(value, options) + "\"";
  }

  if (prop === 'className') {
    return typeof value === 'string' ? " class=\"" + escapeText(value) + "\"" : '';
  }

  if (prop === 'dangerouslySetInnerHTML') {
    // Ignore innerHTML
    return '';
  }

  if ((0, _attribute.shouldRemoveAttribute)(prop, value)) {
    return '';
  }

  var propInfo = (0, _attribute.getPropertyInfo)(prop);
  var propType = propInfo ? propInfo.type : null;
  var valueType = typeof value;

  if (propType === _attribute.BOOLEAN || propType === _attribute.OVERLOADED_BOOLEAN && value === true) {
    return " " + prop;
  }

  if (valueType === 'string') {
    return " " + prop + "=\"" + escapeText(value) + "\"";
  }

  if (valueType === 'number') {
    return " " + prop + "=\"" + String(value) + "\"";
  }

  if (valueType === 'boolean') {
    if (propType === _attribute.BOOLEANISH_STRING || prop.indexOf('data-') === 0 || prop.indexOf('aria-') === 0) {
      return " " + prop + "=\"" + (value ? 'true' : 'false') + "\"";
    }
  }

  return '';
}

function propsToString(props, options) {
  var html = '';

  for (var prop in props) {
    var value = props[prop];

    if (prop === 'defaultValue') {
      if (props.value == null) {
        prop = 'value';
      } else {
        continue;
      }
    }

    if (prop === 'defaultChecked') {
      if (!props.checked) {
        prop = 'checked';
      } else {
        continue;
      }
    }

    html = html + createMarkupForProperty(prop, value, options);
  }

  return html;
}

function rpx2vw(rpx, opts) {
  var pixels = parseFloat(rpx);
  var vw = pixels / opts.viewportWidth * 100;
  var parsedVal = parseFloat(vw.toFixed(opts.unitPrecision));
  return parsedVal + 'vw';
}

function checkContext(element) {
  // Filter context by `contextTypes` or prevent pass context to child without `contextTypes`,
  // need to distinguish context for passing to child and render, which will cause `Consumer` can not work correctly.
  // The best way to get context is from the nearest parent provider, but it will increase the complexity of SSR.
  if (element.contextTypes || element.childContextTypes) {
    console.error('Warning: ' + 'The legacy "contextTypes" and "childContextTypes" API not working properly in server renderer, ' + 'use the new context API. ' + ("(Current: " + _rax.shared.Host.owner.__getName() + ")"));
  }
}

var updater = {
  setState: function (component, partialState) {
    if (partialState) {
      if (!component._pendingState) {
        component._pendingState = partialState;
      } else {
        merge(component._pendingState, partialState);
      }
    }
  },
  forceState: function () {// Noop
  }
};
/**
 * Functional Reactive Component Class Wrapper
 */

var ServerReactiveComponent = /*#__PURE__*/function () {
  function ServerReactiveComponent(pureRender, ref) {
    // A pure function
    this._render = pureRender;
    this._hookID = 0;
    this._hooks = {}; // Handles store

    this.didMount = [];
    this.didUpdate = [];
    this.willUnmount = [];

    if (pureRender._forwardRef) {
      this._forwardRef = ref;
    }
  }

  var _proto = ServerReactiveComponent.prototype;

  _proto.getHooks = function () {
    return this._hooks;
  };

  _proto.getHookID = function () {
    return ++this._hookID;
  };

  _proto.useContext = function (context) {
    var contextID = context._contextID;

    if (this.context[contextID]) {
      return this.context[contextID].getValue();
    } else {
      return context._defaultValue;
    }
  };

  _proto.render = function () {
    this._hookID = 0;

    var children = this._render(this.props, this._forwardRef ? this._forwardRef : this.context);

    return children;
  };

  return ServerReactiveComponent;
}();

function createInstance(element, context) {
  var type = element.type;
  var props = element.props || EMPTY_OBJECT;
  var instance; // class component

  if (type.prototype && type.prototype.render) {
    instance = new type(props, context); // eslint-disable-line new-cap

    instance.props = props;
    instance.context = context; // Inject the updater into instance

    instance.updater = updater;

    if (instance.componentWillMount) {
      instance.componentWillMount();

      if (instance._pendingState) {
        var state = instance.state;
        var pending = instance._pendingState;

        if (state == null) {
          instance.state = pending;
        } else {
          for (var key in pending) {
            state[key] = pending[key];
          }
        }

        instance._pendingState = null;
      }
    }
  } else {
    var ref = element.ref;
    instance = new ServerReactiveComponent(type, ref);
    instance.props = props;
    instance.context = context;
  }

  return instance;
}

var ServerRenderer = /*#__PURE__*/function () {
  function ServerRenderer(options) {
    this.options = options;
    this.previousWasTextNode = false;
  }

  var _proto2 = ServerRenderer.prototype;

  _proto2.renderElementToString = function (element, context) {
    if (typeof element === 'string') {
      if (this.previousWasTextNode) {
        return TEXT_SPLIT_COMMENT + escapeText(element);
      }

      this.previousWasTextNode = true;
      return escapeText(element);
    }

    if (element == null || element === false || element === true) {
      this.previousWasTextNode = false;
      return '<!-- _ -->';
    }

    if (typeof element === 'number') {
      if (this.previousWasTextNode) {
        return TEXT_SPLIT_COMMENT + String(element);
      }

      this.previousWasTextNode = true;
      return String(element);
    }

    if (Array.isArray(element)) {
      var html = '';

      for (var index = 0, length = element.length; index < length; index++) {
        var child = element[index];
        html = html + this.renderElementToString(child, context);
      }

      return html;
    } // pre compiled html


    if (element.__html != null) {
      // __html may be empty string
      var _html = element.__html;

      if (element.__isStartWithTextNode && this.previousWasTextNode) {
        _html = TEXT_SPLIT_COMMENT + _html;
      }

      this.previousWasTextNode = element.__isEndWithTextNode ? true : false;
      return _html;
    } // pre compiled attrs


    if (element.__attrs) {
      return propsToString(element.__attrs, this.options);
    }

    var type = element.type;

    if (type) {
      // class component || function component
      if (type.prototype && type.prototype.render || typeof type === 'function') {
        var instance = createInstance(element, context);
        var currentComponent = {
          // For hooks to get current instance
          _instance: instance
        };

        if (true) {
          var componetName = type.displayName || type.name || element; // Give the component name in render error info (only for development)

          currentComponent.__getName = function () {
            return componetName;
          };
        } // Rax will use owner during rendering, eg: hooks, render error info.


        _rax.shared.Host.owner = currentComponent;

        if (true) {
          checkContext(type);
        }

        var currentContext = instance.context;
        var childContext;

        if (instance.getChildContext) {
          childContext = instance.getChildContext();
        } else if (instance._getChildContext) {
          // Only defined in Provider
          childContext = instance._getChildContext();
        }

        if (childContext) {
          // Why not use Object.assign? for better performance
          currentContext = merge({}, context, childContext);
        }

        var renderedElement = instance.render(); // Reset owner after render, or it will casue memory leak.

        _rax.shared.Host.owner = null;
        return this.renderElementToString(renderedElement, currentContext);
      } else if (typeof type === 'string') {
        // shoud set the identifier to false before render child
        this.previousWasTextNode = false;
        var props = element.props || EMPTY_OBJECT;
        var isVoidElement = VOID_ELEMENTS[type];

        var _html2 = "<" + type + propsToString(props, this.options);

        var innerHTML;

        if (props.dangerouslySetInnerHTML) {
          innerHTML = props.dangerouslySetInnerHTML.__html;
        }

        if (isVoidElement) {
          _html2 = _html2 + '>';
        } else {
          _html2 = _html2 + '>'; // When child is null or undefined, it should be render as <!-- _ -->

          if (props.hasOwnProperty('children')) {
            var children = props.children;

            if (Array.isArray(children)) {
              for (var i = 0, l = children.length; i < l; i++) {
                var child = children[i];
                _html2 = _html2 + this.renderElementToString(child, context);
              }
            } else {
              _html2 = _html2 + this.renderElementToString(children, context);
            }
          } else if (innerHTML != null) {
            // When dangerouslySetInnerHTML is 0, it should be render as 0
            _html2 = _html2 + innerHTML;
          }

          _html2 = _html2 + ("</" + type + ">");
        }

        this.previousWasTextNode = false;
        return _html2;
      } else {
        throwInValidElementError(element);
      }
    } else {
      throwInValidElementError(element);
    }
  };

  return ServerRenderer;
}();

function throwInValidElementError(element) {
  var typeInfo = element === undefined ? '' : '(found: ' + (isPlainObject(element) ? "object with keys {" + Object.keys(element) + "}" : element) + ')';
  console.error("Invalid element type, expected types: Element instance, string, boolean, array, null, undefined. " + typeInfo);
}

function isPlainObject(obj) {
  return EMPTY_OBJECT.toString.call(obj) === '[object Object]';
}

function renderToString(element, options) {
  var serverRenderer = new ServerRenderer(Object.assign({}, DEFAULT_STYLE_OPTIONS, options));
  return serverRenderer.renderElementToString(element, {});
}

var _default = {
  renderToString: renderToString
};
exports.default = _default;

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

/***/ "./src/document/index.tsx":
/*!********************************!*\
  !*** ./src/document/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rax */ "./node_modules/_rax@1.1.4@rax/index.js");
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rax_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rax-document */ "./node_modules/_rax-document@0.1.3@rax-document/lib/index.js");
/* harmony import */ var rax_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rax_document__WEBPACK_IMPORTED_MODULE_1__);



function Document() {
  return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("html", null, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("head", null, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("meta", {
    charset: "utf-8"
  }), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover"
  }), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("title", null, "rax-materials-basic-app"), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(rax_document__WEBPACK_IMPORTED_MODULE_1__["Style"], null)), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("body", null, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(rax_document__WEBPACK_IMPORTED_MODULE_1__["Root"], null), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(rax_document__WEBPACK_IMPORTED_MODULE_1__["Script"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Document);

/***/ }),

/***/ 0:
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/_build-plugin-rax-web@1.0.8@build-plugin-rax-web/lib/DocumentPlugin/loader.js?absoluteDocumentPath=C%3A%5Cbookkeeping%5Csrc%5Cdocument%5Cindex.tsx&absolutePagePath=&pagePath=%2F!./src/document/index.tsx ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\bookkeeping\node_modules\_build-plugin-rax-web@1.0.8@build-plugin-rax-web\lib\DocumentPlugin\loader.js?absoluteDocumentPath=C%3A%5Cbookkeeping%5Csrc%5Cdocument%5Cindex.tsx&absolutePagePath=&pagePath=%2F!C:\bookkeeping\src\document\index.tsx */"./node_modules/_build-plugin-rax-web@1.0.8@build-plugin-rax-web/lib/DocumentPlugin/loader.js?absoluteDocumentPath=C%3A%5Cbookkeeping%5Csrc%5Cdocument%5Cindex.tsx&absolutePagePath=&pagePath=%2F!./src/document/index.tsx");


/***/ })

/******/ });
//# sourceMappingURL=__index_document.js.map