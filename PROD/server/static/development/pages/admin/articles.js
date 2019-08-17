module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./goldfish/Admin/admin.js":
/*!*********************************!*\
  !*** ./goldfish/Admin/admin.js ***!
  \*********************************/
/*! exports provided: gfAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gfAdmin", function() { return gfAdmin; });
var gfAdmin = {
  unFilledField: 'Fill all fields'
};

/***/ }),

/***/ "./goldfish/Admin/article.js":
/*!***********************************!*\
  !*** ./goldfish/Admin/article.js ***!
  \***********************************/
/*! exports provided: gfAdminArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gfAdminArticle", function() { return gfAdminArticle; });
var gfAdminArticle = {
  inputs: {
    name: {
      hero: {
        text: 'Name'
      }
    },
    href: {
      hero: {
        text: 'Href'
      }
    },
    file: {
      hero: {
        text: 'Preview image'
      }
    },
    category: {
      hero: {
        text: 'Category'
      }
    },
    description: {
      hero: {
        text: 'Description'
      },
      textarea: true
    },
    tags: {
      hero: {
        text: 'Tags'
      }
    }
  },
  editLink: function editLink(id) {
    return "/admin/create-article?edit=true&id=".concat(id);
  }
};

/***/ }),

/***/ "./goldfish/Admin/index.js":
/*!*********************************!*\
  !*** ./goldfish/Admin/index.js ***!
  \*********************************/
/*! exports provided: gfAdminArticle, gfAdminMain, gfAdminWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article */ "./goldfish/Admin/article.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gfAdminArticle", function() { return _article__WEBPACK_IMPORTED_MODULE_0__["gfAdminArticle"]; });

/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./goldfish/Admin/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gfAdminMain", function() { return _main__WEBPACK_IMPORTED_MODULE_1__["gfAdminMain"]; });

/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrapper */ "./goldfish/Admin/wrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gfAdminWrapper", function() { return _wrapper__WEBPACK_IMPORTED_MODULE_2__["gfAdminWrapper"]; });





/***/ }),

/***/ "./goldfish/Admin/main.js":
/*!********************************!*\
  !*** ./goldfish/Admin/main.js ***!
  \********************************/
/*! exports provided: gfAdminMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gfAdminMain", function() { return gfAdminMain; });
var gfAdminMain = {
  list: ['articles', 'else'],
  tinyMceScript: 'https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js',
  tinyTargetId: 'tiny',
  tinyScriptId: 'tiny-script'
};

/***/ }),

/***/ "./goldfish/Admin/wrapper.js":
/*!***********************************!*\
  !*** ./goldfish/Admin/wrapper.js ***!
  \***********************************/
/*! exports provided: gfAdminWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gfAdminWrapper", function() { return gfAdminWrapper; });
var gfAdminWrapper = {
  menu: [{
    href: '/admin/main',
    text: 'Main'
  }, {
    href: '/admin/create-article',
    text: 'Create article'
  }, {
    href: '/admin/articles',
    text: 'Article list'
  }]
};

/***/ }),

/***/ "./goldfish/Article/articleStore.js":
/*!******************************************!*\
  !*** ./goldfish/Article/articleStore.js ***!
  \******************************************/
/*! exports provided: gfArticleStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gfArticleStore", function() { return gfArticleStore; });
var gfArticleStore = {
  successSaved: 'Статья успешно сохранена',
  fillError: 'Заполните все поля'
};

/***/ }),

/***/ "./goldfish/HomePage.js":
/*!******************************!*\
  !*** ./goldfish/HomePage.js ***!
  \******************************/
/*! exports provided: HomePageText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageText", function() { return HomePageText; });
var HomePageText = {
  title: 'Домашняя страница'
};

/***/ }),

/***/ "./goldfish/MainManu/gfMainMenu.js":
/*!*****************************************!*\
  !*** ./goldfish/MainManu/gfMainMenu.js ***!
  \*****************************************/
/*! exports provided: gfMainMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gfMainMenu", function() { return gfMainMenu; });
var gfMainMenu = {
  bannerTypes: ['main-menu']
};

/***/ }),

/***/ "./goldfish/MainManu/subMenu.js":
/*!**************************************!*\
  !*** ./goldfish/MainManu/subMenu.js ***!
  \**************************************/
/*! exports provided: ITEMS_IN_COLUMN_COUNT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEMS_IN_COLUMN_COUNT", function() { return ITEMS_IN_COLUMN_COUNT; });
var ITEMS_IN_COLUMN_COUNT = 7;

/***/ }),

/***/ "./goldfish/Search/search.js":
/*!***********************************!*\
  !*** ./goldfish/Search/search.js ***!
  \***********************************/
/*! exports provided: gfSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gfSearch", function() { return gfSearch; });
var gfSearch = {
  placeholder: 'Search',
  go: 'Go'
};

/***/ }),

/***/ "./goldfish/index.js":
/*!***************************!*\
  !*** ./goldfish/index.js ***!
  \***************************/
/*! exports provided: HomePageText, gfMainMenu, gfSearch, gfAdmin, gfAdminMain, gfArticleStore, gfAdminArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage */ "./goldfish/HomePage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomePageText", function() { return _HomePage__WEBPACK_IMPORTED_MODULE_0__["HomePageText"]; });

/* harmony import */ var _MainManu_gfMainMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainManu/gfMainMenu */ "./goldfish/MainManu/gfMainMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gfMainMenu", function() { return _MainManu_gfMainMenu__WEBPACK_IMPORTED_MODULE_1__["gfMainMenu"]; });

/* harmony import */ var _Search_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search/search */ "./goldfish/Search/search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gfSearch", function() { return _Search_search__WEBPACK_IMPORTED_MODULE_2__["gfSearch"]; });

/* harmony import */ var _Admin_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Admin/admin */ "./goldfish/Admin/admin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gfAdmin", function() { return _Admin_admin__WEBPACK_IMPORTED_MODULE_3__["gfAdmin"]; });

/* harmony import */ var _Admin_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Admin/main */ "./goldfish/Admin/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gfAdminMain", function() { return _Admin_main__WEBPACK_IMPORTED_MODULE_4__["gfAdminMain"]; });

/* harmony import */ var _Article_articleStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Article/articleStore */ "./goldfish/Article/articleStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gfArticleStore", function() { return _Article_articleStore__WEBPACK_IMPORTED_MODULE_5__["gfArticleStore"]; });

/* harmony import */ var _Admin_article__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Admin/article */ "./goldfish/Admin/article.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gfAdminArticle", function() { return _Admin_article__WEBPACK_IMPORTED_MODULE_6__["gfAdminArticle"]; });









/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/entries.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/entries */ "core-js/library/fn/object/entries");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd =  true && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/admin/articles.js":
/*!*********************************!*\
  !*** ./pages/admin/articles.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(inject) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminArticles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_layouts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/layouts */ "./shared/layouts/index.js");
/* harmony import */ var _shared_components_Common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/Common */ "./shared/components/Common/index.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_lib_fa_folder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/lib/fa/folder */ "react-icons/lib/fa/folder");
/* harmony import */ var react_icons_lib_fa_folder__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_folder__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_icons_lib_fa_folder_open__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/lib/fa/folder-open */ "react-icons/lib/fa/folder-open");
/* harmony import */ var react_icons_lib_fa_folder_open__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_folder_open__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shared_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/utils/dateHelpers */ "./shared/utils/dateHelpers.js");
/* harmony import */ var _shared_utils_sortHelpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/utils/sortHelpers */ "./shared/utils/sortHelpers.js");
/* harmony import */ var _shared_components_Admin_Article_style_articles_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/components/Admin/Article/style/articles-style */ "./shared/components/Admin/Article/style/articles-style.js");









var _dec,
    _class,
    _temp,
    _jsxFileName = "/Users/macbookpro/WebstormProjects/new-life-begin-here/pages/admin/articles.js";












var mapState = function mapState(_ref) {
  var _ref$articleStore = _ref.articleStore,
      getArticleList = _ref$articleStore.getArticleList,
      articles = _ref$articleStore.articles,
      articleState = _ref$articleStore.articleState;
  return {
    getArticleList: getArticleList,
    articles: articles,
    articleState: articleState
  };
};

var AdminArticles = (_dec = inject(mapState), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(AdminArticles, _React$Component);

  function AdminArticles(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AdminArticles);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(AdminArticles).call(this, props));

    _this.getSortedArticles = function () {
      var articles = _this.props.articles;
      return Object(_shared_utils_sortHelpers__WEBPACK_IMPORTED_MODULE_16__["sortedByDate"])(articles, true);
    };

    _this.handleOpen = function (key) {
      return function () {
        var opens = _this.state.opens;

        _this.setState({
          opens: opens.includes(key) ? opens.filter(function (item) {
            return item !== key;
          }) : [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(opens), [key])
        });
      };
    };

    props.getArticleList();
    _this.state = {
      opens: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AdminArticles, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var opens = this.state.opens;
      var articleState = this.props.articleState;
      var articles = this.getSortedArticles();
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shared_layouts__WEBPACK_IMPORTED_MODULE_10__["AdminLayout"], {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-".concat(_shared_components_Admin_Article_style_articles_style__WEBPACK_IMPORTED_MODULE_17__["default"].__hash) + " " + "admin-articles",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-".concat(_shared_components_Admin_Article_style_articles_style__WEBPACK_IMPORTED_MODULE_17__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "ARTICLES"), articleState === 'pending' && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shared_components_Common__WEBPACK_IMPORTED_MODULE_11__["Loader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-".concat(_shared_components_Admin_Article_style_articles_style__WEBPACK_IMPORTED_MODULE_17__["default"].__hash) + " " + "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(articles).map(function (_ref2) {
        var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
            key = _ref3[0],
            value = _ref3[1];

        var isOpen = opens.includes(key);
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: key,
          className: "jsx-".concat(_shared_components_Admin_Article_style_articles_style__WEBPACK_IMPORTED_MODULE_17__["default"].__hash) + " " + "item-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          onClick: _this2.handleOpen(key),
          className: "jsx-".concat(_shared_components_Admin_Article_style_articles_style__WEBPACK_IMPORTED_MODULE_17__["default"].__hash) + " " + "article-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, isOpen ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_lib_fa_folder_open__WEBPACK_IMPORTED_MODULE_14___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_lib_fa_folder__WEBPACK_IMPORTED_MODULE_13___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "jsx-".concat(_shared_components_Admin_Article_style_articles_style__WEBPACK_IMPORTED_MODULE_17__["default"].__hash),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, key)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-".concat(_shared_components_Admin_Article_style_articles_style__WEBPACK_IMPORTED_MODULE_17__["default"].__hash) + " " + "item-wrapper__list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, isOpen && value.map(function (_ref4) {
          var _id = _ref4._id,
              name = _ref4.name,
              createdAt = _ref4.createdAt,
              category = _ref4.category;
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            href: "/admin/article-view?id=".concat(_id),
            key: _id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
            className: "jsx-".concat(_shared_components_Admin_Article_style_articles_style__WEBPACK_IMPORTED_MODULE_17__["default"].__hash) + " " + "article-link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
            className: "jsx-".concat(_shared_components_Admin_Article_style_articles_style__WEBPACK_IMPORTED_MODULE_17__["default"].__hash),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            },
            __self: this
          }, category.toUpperCase()), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            className: "jsx-".concat(_shared_components_Admin_Article_style_articles_style__WEBPACK_IMPORTED_MODULE_17__["default"].__hash),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          }, name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            className: "jsx-".concat(_shared_components_Admin_Article_style_articles_style__WEBPACK_IMPORTED_MODULE_17__["default"].__hash),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }, createdAt)));
        })));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_12___default.a, {
        id: _shared_components_Admin_Article_style_articles_style__WEBPACK_IMPORTED_MODULE_17__["default"].__hash,
        __self: this
      }, _shared_components_Admin_Article_style_articles_style__WEBPACK_IMPORTED_MODULE_17__["default"])));
    }
  }]);

  return AdminArticles;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component), _temp)) || _class);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! mobx-react */ "mobx-react")["inject"]))

/***/ }),

/***/ "./shared/components/Admin/Article/style/articles-style.js":
/*!*****************************************************************!*\
  !*** ./shared/components/Admin/Article/style/articles-style.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String(".admin-articles.jsx-2826052987{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}.admin-articles.jsx-2826052987 .list.jsx-2826052987{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.admin-articles.jsx-2826052987 .article-link.jsx-2826052987{margin-top:.5rem;}.admin-articles.jsx-2826052987 .article-link.jsx-2826052987 span.jsx-2826052987:first-child,.admin-articles.jsx-2826052987 .article-link.jsx-2826052987 strong.jsx-2826052987{margin-right:1rem;}.admin-articles.jsx-2826052987 h1.jsx-2826052987{margin-bottom:1rem;}.admin-articles.jsx-2826052987 .item-wrapper.jsx-2826052987{margin-bottom:1rem;}.admin-articles.jsx-2826052987 .article-date.jsx-2826052987{cursor:pointer;}.admin-articles.jsx-2826052987 .article-date.jsx-2826052987 span.jsx-2826052987{margin-left:1rem;}.admin-articles.jsx-2826052987 .item-wrapper__list.jsx-2826052987{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:1rem;}");

_defaultExport.__hash = "2826052987";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./shared/components/Common/Input/Input.js":
/*!*************************************************!*\
  !*** ./shared/components/Common/Input/Input.js ***!
  \*************************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(cn) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_input_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style/input.style */ "./shared/components/Common/Input/style/input.style.js");






var _jsxFileName = "/Users/macbookpro/WebstormProjects/new-life-begin-here/shared/components/Common/Input/Input.js";

 // import './style/input.scss'

 // import styles from './style/input.scss';

var Input =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Input, _React$Component);

  function Input(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Input);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Input).call(this, props));

    _this.handleChange = function (_ref) {
      var _ref$target = _ref.target,
          value = _ref$target.value,
          files = _ref$target.files,
          name = _ref$target.name;
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          type = _this$props.type;
      onChange(type !== 'file' ? value : files, name);
    };

    _this.heroRightRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.state = {
      heroRightWidth: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        heroRightWidth: this.heroRightRef.current && this.heroRightRef.current.offsetWidth + 10
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$type = _this$props2.type,
          type = _this$props2$type === void 0 ? 'text' : _this$props2$type,
          _this$props2$value = _this$props2.value,
          value = _this$props2$value === void 0 ? '' : _this$props2$value,
          onChange = _this$props2.onChange,
          textarea = _this$props2.textarea,
          className = _this$props2.className,
          _this$props2$placehol = _this$props2.placeholder,
          placeholder = _this$props2$placehol === void 0 ? '' : _this$props2$placehol,
          heroRight = _this$props2.heroRight,
          heroLeft = _this$props2.heroLeft,
          _this$props2$name = _this$props2.name,
          name = _this$props2$name === void 0 ? '' : _this$props2$name,
          _this$props2$visibleV = _this$props2.visibleValue,
          visibleValue = _this$props2$visibleV === void 0 ? '' : _this$props2$visibleV;
      var heroRightWidth = this.state.heroRightWidth;
      var isFile = type === 'file';
      var props = {
        type: type,
        value: value,
        onChange: this.handleChange,
        placeholder: placeholder,
        name: name,
        style: {
          paddingRight: heroRightWidth
        },
        className: cn({
          file: isFile
        }),
        id: isFile ? 'file-input' : name
      };
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_input_style__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + (cn('input', {
          'hero-right': heroRight
        }, {
          'hero-left': heroLeft
        }, className) || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, heroLeft, textarea ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("textarea", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        className: "jsx-".concat(_style_input_style__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + (props.className != null && props.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        className: "jsx-".concat(_style_input_style__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + (props.className != null && props.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })), isFile && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "file-input",
        className: "jsx-".concat(_style_input_style__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "input__file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "File: ".concat(visibleValue)), heroRight && (heroRight.button ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        ref: this.heroRightRef,
        className: "jsx-".concat(_style_input_style__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "hero-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, heroRight.text) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: this.heroRightRef,
        className: "jsx-".concat(_style_input_style__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "hero-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, heroRight.text)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _style_input_style__WEBPACK_IMPORTED_MODULE_8__["default"].__hash,
        __self: this
      }, _style_input_style__WEBPACK_IMPORTED_MODULE_8__["default"]));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! classnames */ "classnames")))

/***/ }),

/***/ "./shared/components/Common/Input/style/input.style.js":
/*!*************************************************************!*\
  !*** ./shared/components/Common/Input/style/input.style.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String(".input.jsx-1645890698{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}.input.jsx-1645890698 textarea.jsx-1645890698{min-height:10rem;}.input.jsx-1645890698 input.jsx-1645890698,.input.jsx-1645890698 textarea.jsx-1645890698,.input.jsx-1645890698 .input__file.jsx-1645890698{padding:.5rem 1rem;border-radius:5px;border:1px solid #cccccc;width:100%;}.input.jsx-1645890698 input.file.jsx-1645890698,.input.jsx-1645890698 textarea.file.jsx-1645890698,.input.jsx-1645890698 .input__file.file.jsx-1645890698{display:none;}.input.jsx-1645890698 input__file.jsx-1645890698,.input.jsx-1645890698 textarea__file.jsx-1645890698,.input.jsx-1645890698 .input__file__file.jsx-1645890698{min-height:2.3rem;cursor:pointer;}.input.hero-right.jsx-1645890698 input.jsx-1645890698{border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;}.input.jsx-1645890698 .hero-right.jsx-1645890698,.input.jsx-1645890698 .hero-left.jsx-1645890698{background-color:#B80000;color:#ffffff;padding:.5rem 1rem;border:1px solid #B80000;border-top-right-radius:5px;border-bottom-right-radius:5px;font-weight:500;-webkit-transition:background-color .3s,color .3s;transition:background-color .3s,color .3s;height:100%;position:absolute;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.input.jsx-1645890698 .hero-right.jsx-1645890698 button.hero-right.jsx-1645890698,.input.jsx-1645890698 .hero-right.jsx-1645890698 button.hero-left.jsx-1645890698,.input.jsx-1645890698 .hero-left.jsx-1645890698 button.hero-right.jsx-1645890698,.input.jsx-1645890698 .hero-left.jsx-1645890698 button.hero-left.jsx-1645890698{cursor:pointer;}@media (min-width:64em){.input.jsx-1645890698 .hero-right.jsx-1645890698 button.hero-right.jsx-1645890698:hover,.input.jsx-1645890698 .hero-right.jsx-1645890698 button.hero-left.jsx-1645890698:hover,.input.jsx-1645890698 .hero-left.jsx-1645890698 button.hero-right.jsx-1645890698:hover,.input.jsx-1645890698 .hero-left.jsx-1645890698 button.hero-left.jsx-1645890698:hover{background-color:#ffffff;color:#B80000;}}");

_defaultExport.__hash = "1645890698";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./shared/components/Common/Loader/Loader.js":
/*!***************************************************!*\
  !*** ./shared/components/Common/Loader/Loader.js ***!
  \***************************************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loader_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.sass */ "./shared/components/Common/Loader/Loader.sass");
/* harmony import */ var _Loader_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Loader_sass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/macbookpro/WebstormProjects/new-life-begin-here/shared/components/Common/Loader/Loader.js";


var Loader = function Loader(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader__wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader__spinner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."), children));
};

/***/ }),

/***/ "./shared/components/Common/Loader/Loader.sass":
/*!*****************************************************!*\
  !*** ./shared/components/Common/Loader/Loader.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./shared/components/Common/Slider/Dots.js":
/*!*************************************************!*\
  !*** ./shared/components/Common/Slider/Dots.js ***!
  \*************************************************/
/*! exports provided: Dots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(cn) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dots", function() { return Dots; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/macbookpro/WebstormProjects/new-life-begin-here/shared/components/Common/Slider/Dots.js";

var Dots = function Dots(_ref) {
  var index = _ref.index,
      count = _ref.count;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider__dots",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, new Array(count).fill('').map(function (item, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slider__dots__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: cn('wrapper', {
        active: index === i
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  }));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! classnames */ "classnames")))

/***/ }),

/***/ "./shared/components/Common/Slider/Slider.jsx":
/*!****************************************************!*\
  !*** ./shared/components/Common/Slider/Slider.jsx ***!
  \****************************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(cn, PropTypes) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_lib_fa_angle_left__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/lib/fa/angle-left */ "react-icons/lib/fa/angle-left");
/* harmony import */ var react_icons_lib_fa_angle_left__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_angle_left__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_lib_fa_angle_right__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/lib/fa/angle-right */ "react-icons/lib/fa/angle-right");
/* harmony import */ var react_icons_lib_fa_angle_right__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_angle_right__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_lib_fa_arrow_right__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/lib/fa/arrow-right */ "react-icons/lib/fa/arrow-right");
/* harmony import */ var react_icons_lib_fa_arrow_right__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_arrow_right__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_lib_fa_arrow_left__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/lib/fa/arrow-left */ "react-icons/lib/fa/arrow-left");
/* harmony import */ var react_icons_lib_fa_arrow_left__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_arrow_left__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/get */ "lodash/get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Dots__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Dots */ "./shared/components/Common/Slider/Dots.js");
/* harmony import */ var _Slider_sass__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Slider.sass */ "./shared/components/Common/Slider/Slider.sass");
/* harmony import */ var _Slider_sass__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Slider_sass__WEBPACK_IMPORTED_MODULE_15__);








var _class,
    _class2,
    _temp,
    _jsxFileName = "/Users/macbookpro/WebstormProjects/new-life-begin-here/shared/components/Common/Slider/Slider.jsx";










var Slider = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Slider, _React$Component);

  function Slider(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Slider);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Slider).call(this, props));

    _this.handleDirection = function (e) {
      var images = _this.props.images;
      var stateImages = _this.state.images;
      var isLeft = e.currentTarget.getAttribute('data-direction') === 'left';
      var index = isLeft ? _this.state.index - 1 : _this.state.index + 1;
      if (index < 0 || index > images.length - 1) return;

      _this.setState({
        index: index,
        images: stateImages.length < images.length ? [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.images), [images[_this.initialImagesLength - 1 + index]]) : _this.state.images
      });
    };

    _this.onMouseDown = function (e) {
      var clientX = e.clientX,
          target = e.target,
          touches = e.touches;
      var isArrows = target.getAttribute('data-direction') || target.parentElement.getAttribute('data-direction');
      var ref = _this.mainRef.current;
      if (!ref || isArrows) return;
      var isMobile = _this.props.isMobile;
      _this.startPosition = clientX || lodash_get__WEBPACK_IMPORTED_MODULE_13___default()(touches, '[0].clientX', 0);
      if (!isMobile) ref.addEventListener('mousemove', _this.onMouseMove);
    };

    _this.onMouseUp = function () {
      var ref = _this.mainRef.current;
      if (!ref || !_this.startPosition) return;
      var _this$state = _this.state,
          distanceMove = _this$state.distanceMove,
          index = _this$state.index;
      var percentMove = Math.abs(distanceMove) / (window.innerWidth / 100);
      var newIndex = distanceMove > 0 ? index - 1 : index + 1;
      var list = _this.props.list;

      if (newIndex < 0 || newIndex > list.length - 1 || percentMove < 10) {
        _this.setState({
          index: index,
          distanceMove: 0
        });
      } else {
        var _list = _this.props.list;

        var _newIndex = distanceMove > 0 ? index - 1 : index + 1;

        _this.setState({
          distanceMove: 0,
          images: _this.state.images.length < _list.length ? [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.images), [_list[_this.initialImagesLength - 1 + _newIndex]]) : _this.state.images
        }, function () {
          return _this.setState({
            index: _newIndex
          });
        });
      }

      if (!_this.props.isMobile) ref.removeEventListener('mousemove', _this.onMouseMove);
    };

    _this.onMouseMove = function (e) {
      var clientX = e.clientX,
          touches = e.touches;

      var xPosition = clientX || lodash_get__WEBPACK_IMPORTED_MODULE_13___default()(touches, '[0].clientX', 0);

      var distanceMove = -(_this.startPosition - xPosition);

      _this.setState({
        distanceMove: distanceMove
      });
    };

    _this.mouseEvents = function () {
      var isMobile = _this.props.isMobile;

      if (isMobile) {
        return {
          onTouchStart: _this.onMouseDown,
          onTouchEnd: _this.onMouseUp,
          onTouchMove: _this.onMouseMove
        };
      } else {
        return {
          onMouseDown: _this.onMouseDown,
          onMouseUp: _this.onMouseUp
        };
      }
    };

    _this.redirect = function (href) {
      var history = _this.props.history;
      if (href) history.push(href);
    };

    _this.initialImagesLength = _this.props.initialImagesLength;
    _this.state = {
      images: props.list.slice(0, _this.initialImagesLength),
      index: 0,
      distanceMove: 0
    };
    _this.mainRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Slider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.images.length !== prevProps.images.length) {
        this.setState({
          images: this.props.images.slice(0, this.initialImagesLength)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          index = _this$state2.index,
          distanceMove = _this$state2.distanceMove;
      var _this$props = this.props,
          withHero = _this$props.withHero,
          isArrowVisible = _this$props.isArrowVisible,
          isDotsVisible = _this$props.isDotsVisible,
          list = _this$props.list,
          ListComponent = _this$props.ListComponent,
          listItemKey = _this$props.listItemKey;

      var refWidth = lodash_get__WEBPACK_IMPORTED_MODULE_13___default()(this.mainRef, 'current.offsetWidth', 0);

      var translate = "".concat(distanceMove !== 0 ? Math.round(-index * refWidth + distanceMove) : Math.round(-index * refWidth), "px");
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "slider",
        ref: this.mainRef
      }, this.mouseEvents(), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), isArrowVisible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "slider__direction slider__direction_left",
        "data-direction": "left",
        onClick: this.handleDirection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, withHero ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_lib_fa_arrow_left__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_lib_fa_angle_left__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: cn('slider__wrapper', {
          isMoving: distanceMove !== 0
        }),
        style: {
          transform: "translateX(".concat(translate, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, list.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ListComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: item[listItemKey]
        }, item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }));
      })), isArrowVisible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "slider__direction slider__direction_right",
        "data-direction": "right",
        onClick: this.handleDirection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, withHero ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_lib_fa_arrow_right__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_lib_fa_angle_right__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      })), isDotsVisible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Dots__WEBPACK_IMPORTED_MODULE_14__["Dots"], {
        count: list.length,
        index: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }));
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component), _class2.propTypes = {
  list: PropTypes.array,
  initialImagesLength: PropTypes.number,
  isMobile: PropTypes.bool,
  isArrowVisible: PropTypes.bool,
  isDotsVisible: PropTypes.bool,
  ListComponent: PropTypes.any,
  listItemKey: PropTypes.any
}, _class2.defaultProps = {
  images: [],
  initialImagesLength: 3,
  isArrowVisible: true
}, _temp)) || _class;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! classnames */ "classnames"), __webpack_require__(/*! prop-types */ "prop-types")))

/***/ }),

/***/ "./shared/components/Common/Slider/Slider.sass":
/*!*****************************************************!*\
  !*** ./shared/components/Common/Slider/Slider.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./shared/components/Common/Slider/index.js":
/*!**************************************************!*\
  !*** ./shared/components/Common/Slider/index.js ***!
  \**************************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./shared/components/Common/Slider/Slider.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"]; });



/***/ }),

/***/ "./shared/components/Common/index.js":
/*!*******************************************!*\
  !*** ./shared/components/Common/index.js ***!
  \*******************************************/
/*! exports provided: Input, Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input/Input */ "./shared/components/Common/Input/Input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input_Input__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader/Loader */ "./shared/components/Common/Loader/Loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _Loader_Loader__WEBPACK_IMPORTED_MODULE_1__["Loader"]; });




/***/ }),

/***/ "./shared/components/MainMenu/ButterMenu/ButterMenu.js":
/*!*************************************************************!*\
  !*** ./shared/components/MainMenu/ButterMenu/ButterMenu.js ***!
  \*************************************************************/
/*! exports provided: ButterMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButterMenu", function() { return ButterMenu; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/noop */ "lodash/noop");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ButterMenu_sass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ButterMenu.sass */ "./shared/components/MainMenu/ButterMenu/ButterMenu.sass");
/* harmony import */ var _ButterMenu_sass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ButterMenu_sass__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/macbookpro/WebstormProjects/new-life-begin-here/shared/components/MainMenu/ButterMenu/ButterMenu.js";





var ButterMenu =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ButterMenu, _React$Component);

  function ButterMenu(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ButterMenu);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ButterMenu).call(this, props));

    _this.onClick = function (e) {
      // this.setState({ open : !this.state.open });
      _this.props.onClick();
    };

    _this.state = {
      open: _this.props.open || false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ButterMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.f.classList.add('appear');
      }, 300);
      setTimeout(function () {
        _this2.s.classList.add('appear');
      }, 400);
      setTimeout(function () {
        _this2.t.classList.add('appear');
      }, 500);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.open && this.props.open !== prevProps.open) {
        this.setState({
          open: this.props.open
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var open = this.props.open;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          'butter-menu': true,
          open: open,
          right: this.props.right
        }, this.props.className)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bars",
        onClick: this.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "f",
        ref: function ref(node) {
          return _this3.f = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "s",
        ref: function ref(node) {
          return _this3.s = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "t",
        ref: function ref(node) {
          return _this3.t = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })), this.props.menu);
    }
  }]);

  return ButterMenu;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
;
ButterMenu.defaultProps = {
  onClick: lodash_noop__WEBPACK_IMPORTED_MODULE_8___default.a
};
ButterMenu.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  open: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  // Control open menu [ default === this.state.open]
  right: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  // Determinate from what side bars amd menu will be slide [ default === left]
  barHeight: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  // Height of bars [ default === 1]
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  // Adding classNames view is { [key]: bool }
  menu: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};

/***/ }),

/***/ "./shared/components/MainMenu/ButterMenu/ButterMenu.sass":
/*!***************************************************************!*\
  !*** ./shared/components/MainMenu/ButterMenu/ButterMenu.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./shared/components/MainMenu/DesktopMenu/MainMenu.js":
/*!************************************************************!*\
  !*** ./shared/components/MainMenu/DesktopMenu/MainMenu.js ***!
  \************************************************************/
/*! exports provided: MainMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(inject) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenu", function() { return MainMenu; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Search_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Search/Search */ "./shared/components/Search/Search.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MenuItem */ "./shared/components/MainMenu/MenuItem.js");
/* harmony import */ var _MenuBanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MenuBanner */ "./shared/components/MainMenu/MenuBanner.js");
/* harmony import */ var _style_main_menu_sass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../style/main-menu.sass */ "./shared/components/MainMenu/style/main-menu.sass");
/* harmony import */ var _style_main_menu_sass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_main_menu_sass__WEBPACK_IMPORTED_MODULE_11__);







var _dec,
    _class,
    _temp,
    _jsxFileName = "/Users/macbookpro/WebstormProjects/new-life-begin-here/shared/components/MainMenu/DesktopMenu/MainMenu.js";







var MainMenu = (_dec = inject('menuStore'), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MainMenu, _React$Component);

  function MainMenu() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MainMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MainMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      open: ''
    };

    _this.onOpen = function (id) {
      return _this.setState({
        open: _this.state.open === id ? '' : id
      });
    };

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MainMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      var menuList = this.props.menuStore.menuList;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "main-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_MenuBanner__WEBPACK_IMPORTED_MODULE_10__["MenuBanner"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "main-menu__menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/logo.png",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }))), menuList.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: item._id,
          open: item._id === open,
          onOpen: _this2.onOpen
        }, item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Search_Search__WEBPACK_IMPORTED_MODULE_8__["Search"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }));
    }
  }]);

  return MainMenu;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component), _temp)) || _class);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! mobx-react */ "mobx-react")["inject"]))

/***/ }),

/***/ "./shared/components/MainMenu/DesktopMenu/SubMenu.js":
/*!***********************************************************!*\
  !*** ./shared/components/MainMenu/DesktopMenu/SubMenu.js ***!
  \***********************************************************/
/*! exports provided: SubMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenu", function() { return SubMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./shared/components/MainMenu/helpers.js");
/* harmony import */ var _style_sub_menu_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/sub-menu.sass */ "./shared/components/MainMenu/style/sub-menu.sass");
/* harmony import */ var _style_sub_menu_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_sub_menu_sass__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/macbookpro/WebstormProjects/new-life-begin-here/shared/components/MainMenu/DesktopMenu/SubMenu.js";




var SubMenu = function SubMenu(_ref) {
  var menu = _ref.menu;
  if (!menu.length) return null;
  var _menu$slice$ = menu.slice(0, 1)[0],
      titleText = _menu$slice$.text,
      titleHref = _menu$slice$.href;
  var others = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["getColumns"])(menu.slice(1));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sub-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: titleHref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "sub-menu__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, titleText)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sub-menu__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, others.map(function (array, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sub-menu__content__block",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, array.map(function (_ref2) {
      var text = _ref2.text,
          href = _ref2.href;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: href,
        key: href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "sub-menu__content__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, text));
    }));
  })));
};

/***/ }),

/***/ "./shared/components/MainMenu/MenuBanner.js":
/*!**************************************************!*\
  !*** ./shared/components/MainMenu/MenuBanner.js ***!
  \**************************************************/
/*! exports provided: MenuBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(cn) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBanner", function() { return MenuBanner; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Common_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/Slider */ "./shared/components/Common/Slider/index.js");
/* harmony import */ var _style_menu_banner_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/menu-banner.sass */ "./shared/components/MainMenu/style/menu-banner.sass");
/* harmony import */ var _style_menu_banner_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_menu_banner_sass__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/macbookpro/WebstormProjects/new-life-begin-here/shared/components/MainMenu/MenuBanner.js";




var mock = [{
  title: 'The 2020 Chevy Corvette Stingray is here',
  description: "Chevrolet's new Corvette is mid-engined and ready to go supercar hunting.",
  author: 'Tim Stevens',
  img: 'https://cnet2.cbsistatic.com/img/olkwe3KeGbzAzLfGyyB7uOex4KI=/1000x620/2019/07/19/b6fbcf2a-a2cb-46f2-aa94-3638800826bb/corvette-ogi.jpg',
  href: '/best/phones'
}, {
  title: 'Our Apollo-inspired dreams of living on the moon could still come true',
  description: "Chevrolet's new Corvette is mid-engined and ready to go supercar hunting.",
  author: 'Tim Stevens',
  img: 'https://cnet1.cbsistatic.com/img/8ajB8EWW2OLnSUa9Ygj03S0dP1A=/500x620/2019/07/19/39639893-46c2-4559-bb15-a737b45d4928/screen-shot-2019-07-19-at-8-14-43-am.png',
  href: '/'
}, {
  title: 'Battery life tests score the new MacBook Pro and Air as winners',
  description: "Chevrolet's new Corvette is mid-engined and ready to go supercar hunting.",
  author: 'Tim Stevens',
  img: 'https://cnet1.cbsistatic.com/img/KgvCE0Eh3lMaqLBu0rhQyw284DI=/500x620/2019/07/10/68b93d04-3290-4922-9da5-139e177e6e18/05-macbook-air-2019-and-macbook-pro-2019.jpg',
  href: '/'
}];

var MenuBannerItem = function MenuBannerItem(_ref) {
  var title = _ref.title,
      description = _ref.description,
      author = _ref.author,
      img = _ref.img,
      href = _ref.href,
      wideBanner = _ref.wideBanner;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: cn('menu-banner__item', {
      wide: wideBanner
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: img,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "menu-banner__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, title), wideBanner && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, description), author && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, author))));
};

var MenuBanner = function MenuBanner(_ref2) {
  var _ref2$list = _ref2.list,
      list = _ref2$list === void 0 ? mock : _ref2$list,
      isMobile = _ref2.isMobile;
  var bannerList = list.map(function (item, i) {
    var wideBanner = item.wide || i === 0;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuBannerItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.title
    }, item, {
      wideBanner: wideBanner,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }));
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "menu-banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, !isMobile && bannerList, isMobile && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common_Slider__WEBPACK_IMPORTED_MODULE_3__["Slider"], {
    isMobile: true,
    isDotsVisible: true,
    list: list,
    ListComponent: MenuBannerItem,
    listItemKey: "_id",
    isArrowVisible: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! classnames */ "classnames")))

/***/ }),

/***/ "./shared/components/MainMenu/MenuItem.js":
/*!************************************************!*\
  !*** ./shared/components/MainMenu/MenuItem.js ***!
  \************************************************/
/*! exports provided: MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(cn) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _DesktopMenu_SubMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DesktopMenu/SubMenu */ "./shared/components/MainMenu/DesktopMenu/SubMenu.js");
/* harmony import */ var react_icons_lib_fa_angle_down__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/lib/fa/angle-down */ "react-icons/lib/fa/angle-down");
/* harmony import */ var react_icons_lib_fa_angle_down__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_angle_down__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_menu_item_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style/menu-item.sass */ "./shared/components/MainMenu/style/menu-item.sass");
/* harmony import */ var _style_menu_item_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_menu_item_sass__WEBPACK_IMPORTED_MODULE_9__);






var _class,
    _temp,
    _jsxFileName = "/Users/macbookpro/WebstormProjects/new-life-begin-here/shared/components/MainMenu/MenuItem.js";






var MenuItem = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuItem, _React$Component);

  function MenuItem() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.bodyClick = function (e) {
      if (!e.target.closest('.menu-item')) {
        var _this$props = _this.props,
            _id = _this$props._id,
            onOpen = _this$props.onOpen;
        onOpen(_id);
      }
    };

    _this.onClick = function () {
      var _this$props2 = _this.props,
          subMenu = _this$props2.subMenu,
          href = _this$props2.href,
          router = _this$props2.router,
          onOpen = _this$props2.onOpen,
          _id = _this$props2._id;
      if (href && !subMenu) return router.push(href);
      onOpen(_id);
    };

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuItem, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.open !== prevProps.open) {
        if (this.props.open) window.addEventListener('mousedown', this.bodyClick);
        if (!this.props.open) window.removeEventListener('mousedown', this.bodyClick);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('mousedown', this.bodyClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          text = _this$props3.text,
          subMenu = _this$props3.subMenu,
          open = _this$props3.open;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: cn('menu-item', {
          open: open
        }),
        onClick: this.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, text), subMenu && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_lib_fa_angle_down__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), subMenu && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_DesktopMenu_SubMenu__WEBPACK_IMPORTED_MODULE_7__["SubMenu"], {
        menu: subMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }));
    }
  }]);

  return MenuItem;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component), _temp)) || _class;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! classnames */ "classnames")))

/***/ }),

/***/ "./shared/components/MainMenu/MenuWrapper.js":
/*!***************************************************!*\
  !*** ./shared/components/MainMenu/MenuWrapper.js ***!
  \***************************************************/
/*! exports provided: MenuWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(inject) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuWrapper", function() { return MenuWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DesktopMenu_MainMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DesktopMenu/MainMenu */ "./shared/components/MainMenu/DesktopMenu/MainMenu.js");
/* harmony import */ var _MobileMenu_MobileMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MobileMenu/MobileMenu */ "./shared/components/MainMenu/MobileMenu/MobileMenu.jsx");






var _dec,
    _class,
    _jsxFileName = "/Users/macbookpro/WebstormProjects/new-life-begin-here/shared/components/MainMenu/MenuWrapper.js";





var mapState = function mapState(_ref) {
  var isMobile = _ref.execContextStore.requestContext.isMobile,
      menuList = _ref.menuStore.menuList;
  return {
    isMobile: isMobile,
    menuList: menuList
  };
};

var MenuWrapper = (_dec = inject(mapState), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuWrapper, _React$Component);

  function MenuWrapper() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuWrapper);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MenuWrapper).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuWrapper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isMobile = _this$props.isMobile,
          menuList = _this$props.menuList;
      if (!isMobile) return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_DesktopMenu_MainMenu__WEBPACK_IMPORTED_MODULE_6__["MainMenu"], {
        list: menuList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      });
      if (isMobile) return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_MobileMenu_MobileMenu__WEBPACK_IMPORTED_MODULE_7__["MenuMobile"], {
        list: menuList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      });
    }
  }]);

  return MenuWrapper;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)) || _class);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! mobx-react */ "mobx-react")["inject"]))

/***/ }),

/***/ "./shared/components/MainMenu/MobileMenu/MobileMenu.jsx":
/*!**************************************************************!*\
  !*** ./shared/components/MainMenu/MobileMenu/MobileMenu.jsx ***!
  \**************************************************************/
/*! exports provided: MenuMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuMobile", function() { return MenuMobile; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_lib_fa_times_circle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/lib/fa/times-circle */ "react-icons/lib/fa/times-circle");
/* harmony import */ var react_icons_lib_fa_times_circle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_times_circle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Search_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Search/Search */ "./shared/components/Search/Search.js");
/* harmony import */ var _ButterMenu_ButterMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ButterMenu/ButterMenu */ "./shared/components/MainMenu/ButterMenu/ButterMenu.js");
/* harmony import */ var _MenuBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MenuBanner */ "./shared/components/MainMenu/MenuBanner.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MenuItem */ "./shared/components/MainMenu/MenuItem.js");
/* harmony import */ var _main_menu_mobile_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-menu-mobile.sass */ "./shared/components/MainMenu/MobileMenu/main-menu-mobile.sass");
/* harmony import */ var _main_menu_mobile_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_main_menu_mobile_sass__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/Users/macbookpro/WebstormProjects/new-life-begin-here/shared/components/MainMenu/MobileMenu/MobileMenu.jsx";









var MenuMobileComponent = function MenuMobileComponent(_ref) {
  var list = _ref.list,
      pathname = _ref.router.pathname;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      openSubMenu = _useState2[0],
      setOpenSubMenu = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      openMenu = _useState4[0],
      setOpenMenu = _useState4[1];

  var handleMenuOpen = function handleMenuOpen() {
    return setOpenMenu(!openMenu);
  };

  var handleOpenSubMenu = function handleOpenSubMenu(id) {
    return setOpenSubMenu(id === openSubMenu ? '' : id);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "menu-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ButterMenu_ButterMenu__WEBPACK_IMPORTED_MODULE_6__["ButterMenu"], {
    open: openMenu,
    onClick: handleMenuOpen,
    menu: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "main-menu-mobile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, list.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: item._id,
        onOpen: handleOpenSubMenu,
        open: openSubMenu === item._id
      }, item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }));
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_lib_fa_times_circle__WEBPACK_IMPORTED_MODULE_4___default.a, {
      size: 20,
      onClick: handleMenuOpen,
      className: "close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MenuBanner__WEBPACK_IMPORTED_MODULE_7__["MenuBanner"], {
    isMobile: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Search_Search__WEBPACK_IMPORTED_MODULE_5__["Search"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }));
};

var MenuMobile = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(MenuMobileComponent);

/***/ }),

/***/ "./shared/components/MainMenu/MobileMenu/main-menu-mobile.sass":
/*!*********************************************************************!*\
  !*** ./shared/components/MainMenu/MobileMenu/main-menu-mobile.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./shared/components/MainMenu/helpers.js":
/*!***********************************************!*\
  !*** ./shared/components/MainMenu/helpers.js ***!
  \***********************************************/
/*! exports provided: getColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColumns", function() { return getColumns; });
/* harmony import */ var _goldfish_MainManu_subMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../goldfish/MainManu/subMenu */ "./goldfish/MainManu/subMenu.js");

var getColumns = function getColumns(list) {
  var result = [];

  for (var i = 0; i < list.length; i += _goldfish_MainManu_subMenu__WEBPACK_IMPORTED_MODULE_0__["ITEMS_IN_COLUMN_COUNT"]) {
    var item = list.slice(i, i + _goldfish_MainManu_subMenu__WEBPACK_IMPORTED_MODULE_0__["ITEMS_IN_COLUMN_COUNT"]);
    result.push(item);
  }

  return result;
};

/***/ }),

/***/ "./shared/components/MainMenu/style/main-menu.sass":
/*!*********************************************************!*\
  !*** ./shared/components/MainMenu/style/main-menu.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./shared/components/MainMenu/style/menu-banner.sass":
/*!***********************************************************!*\
  !*** ./shared/components/MainMenu/style/menu-banner.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./shared/components/MainMenu/style/menu-item.sass":
/*!*********************************************************!*\
  !*** ./shared/components/MainMenu/style/menu-item.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./shared/components/MainMenu/style/sub-menu.sass":
/*!********************************************************!*\
  !*** ./shared/components/MainMenu/style/sub-menu.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./shared/components/Search/Search.js":
/*!********************************************!*\
  !*** ./shared/components/Search/Search.js ***!
  \********************************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common */ "./shared/components/Common/index.js");
/* harmony import */ var _goldfish__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../goldfish */ "./goldfish/index.js");
/* harmony import */ var react_icons_lib_fa_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/lib/fa/search */ "react-icons/lib/fa/search");
/* harmony import */ var react_icons_lib_fa_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_search_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/search.sass */ "./shared/components/Search/style/search.sass");
/* harmony import */ var _style_search_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_search_sass__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/macbookpro/WebstormProjects/new-life-begin-here/shared/components/Search/Search.js";






var Search = function Search() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var handleOpen = function handleOpen() {
    return setOpen(!open);
  };

  var handleChange = function handleChange(value) {
    return setValue(value);
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    console.log(value);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "search",
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_lib_fa_search__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: handleOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), open && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "search-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: value,
    onChange: handleChange,
    placeholder: _goldfish__WEBPACK_IMPORTED_MODULE_3__["gfSearch"].placeholder,
    heroRight: {
      text: _goldfish__WEBPACK_IMPORTED_MODULE_3__["gfSearch"].go,
      button: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })));
};

/***/ }),

/***/ "./shared/components/Search/style/search.sass":
/*!****************************************************!*\
  !*** ./shared/components/Search/style/search.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./shared/layouts/Admin/AdminLayout.js":
/*!*********************************************!*\
  !*** ./shared/layouts/Admin/AdminLayout.js ***!
  \*********************************************/
/*! exports provided: AdminLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(cn) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayout", function() { return AdminLayout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _goldfish_Admin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../goldfish/Admin */ "./goldfish/Admin/index.js");
/* harmony import */ var _admin_wrapper_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-wrapper.sass */ "./shared/layouts/Admin/admin-wrapper.sass");
/* harmony import */ var _admin_wrapper_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_admin_wrapper_sass__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/macbookpro/WebstormProjects/new-life-begin-here/shared/layouts/Admin/AdminLayout.js";





var AdminLayout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AdminLayout, _React$Component);

  function AdminLayout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AdminLayout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AdminLayout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AdminLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: cn('admin-wrapper container', className),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "admin-wrapper__menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, _goldfish_Admin__WEBPACK_IMPORTED_MODULE_8__["gfAdminWrapper"].menu.map(function (_ref) {
        var href = _ref.href,
            text = _ref.text;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: href,
          key: href,
          prefetch: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, text));
      })), children);
    }
  }]);

  return AdminLayout;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! classnames */ "classnames")))

/***/ }),

/***/ "./shared/layouts/Admin/admin-wrapper.sass":
/*!*************************************************!*\
  !*** ./shared/layouts/Admin/admin-wrapper.sass ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./shared/layouts/Page/Page.jsx":
/*!**************************************!*\
  !*** ./shared/layouts/Page/Page.jsx ***!
  \**************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(cn, PropTypes) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_MainMenu_MenuWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/MainMenu/MenuWrapper */ "./shared/components/MainMenu/MenuWrapper.js");
/* harmony import */ var _page_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page.sass */ "./shared/layouts/Page/page.sass");
/* harmony import */ var _page_sass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_page_sass__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/macbookpro/WebstormProjects/new-life-begin-here/shared/layouts/Page/Page.jsx";




var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Page, _React$Component);

  function Page() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Page).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window === 'undefined') return;
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          title = _this$props.title,
          description = _this$props.description,
          children = _this$props.children,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          withoutMenu = _this$props.withoutMenu;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: cn('page-wrapper', className),
        style: style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, title && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, title), (description || title) && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        name: "description",
        content: description || title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "page-banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/imgad.jpeg",
        alt: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), !withoutMenu && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_MainMenu_MenuWrapper__WEBPACK_IMPORTED_MODULE_7__["MenuWrapper"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), children);
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
Page.propTypes = {
  className: PropTypes.any,
  title: PropTypes.string,
  meta: PropTypes.node,
  children: PropTypes.any,
  withoutMenu: PropTypes.bool
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! classnames */ "classnames"), __webpack_require__(/*! prop-types */ "prop-types")))

/***/ }),

/***/ "./shared/layouts/Page/page.sass":
/*!***************************************!*\
  !*** ./shared/layouts/Page/page.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./shared/layouts/Section/Section.jsx":
/*!********************************************!*\
  !*** ./shared/layouts/Section/Section.jsx ***!
  \********************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(cn, PropTypes) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/macbookpro/WebstormProjects/new-life-begin-here/shared/layouts/Section/Section.jsx";

// import _JSXStyle from 'styled-jsx/style'
//
// import styles from './section.style';
var Section = function Section(_ref) {
  var children = _ref.children,
      h2 = _ref.h2,
      h5 = _ref.h5,
      fluid = _ref.fluid,
      grey = _ref.grey,
      className = _ref.className,
      title = _ref.title,
      h1 = _ref.h1,
      isOne = _ref.isOne;
  var isHasHeader = h1 || h2 || h5 || title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: cn('common-section', className, {
      grey: grey
    }, {
      fluid: fluid
    }, {
      'is-one': isOne
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, h1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, h1))), isHasHeader && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row headers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, h2 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, h2)), h5 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, h5)), title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, children))));
};
Section.propTypes = {
  children: PropTypes.any,
  h2: PropTypes.string,
  h1: PropTypes.string,
  h5: PropTypes.string,
  title: PropTypes.any,
  fluid: PropTypes.bool,
  grey: PropTypes.bool,
  className: PropTypes.any
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! classnames */ "classnames"), __webpack_require__(/*! prop-types */ "prop-types")))

/***/ }),

/***/ "./shared/layouts/index.js":
/*!*********************************!*\
  !*** ./shared/layouts/index.js ***!
  \*********************************/
/*! exports provided: Page, Section, AdminLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page/Page */ "./shared/layouts/Page/Page.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _Page_Page__WEBPACK_IMPORTED_MODULE_0__["Page"]; });

/* harmony import */ var _Section_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section/Section */ "./shared/layouts/Section/Section.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _Section_Section__WEBPACK_IMPORTED_MODULE_1__["Section"]; });

/* harmony import */ var _Admin_AdminLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Admin/AdminLayout */ "./shared/layouts/Admin/AdminLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminLayout", function() { return _Admin_AdminLayout__WEBPACK_IMPORTED_MODULE_2__["AdminLayout"]; });





/***/ }),

/***/ "./shared/utils/dateHelpers.js":
/*!*************************************!*\
  !*** ./shared/utils/dateHelpers.js ***!
  \*************************************/
/*! exports provided: parseDate, beautifyDateServer, beautifyDate, getMonthBefore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return parseDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beautifyDateServer", function() { return beautifyDateServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beautifyDate", function() { return beautifyDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthBefore", function() { return getMonthBefore; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");

var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
var defaultOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC'
};
var iso8601 = /^(\d{4})-(\d{1,2})-(\d{1,2})([T ](\d{1,2}):(\d{1,2}):(\d{1,2})(\.\d+)?(Z|([+-])(\d{1,2})(:(\d{1,2}))?)?)?$/;

var parseISO8601 = function parseISO8601(datestring) {
  var _ref = datestring.match(iso8601) || [],
      _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 14),
      sYear = _ref2[1],
      sMonth = _ref2[2],
      sDay = _ref2[3],
      sTime = _ref2[4],
      sHour = _ref2[5],
      sMinute = _ref2[6],
      sSecond = _ref2[7],
      sFraction = _ref2[8],
      sTimezone = _ref2[9],
      sOffsetSign = _ref2[10],
      sOffsetHour = _ref2[11],
      sHasOffsetMinute = _ref2[12],
      sOffsetMinute = _ref2[13];

  if (!sTime) {
    return new Date(sYear - 0, sMonth - 1, sDay - 0);
  }

  var date;

  if (sFraction) {
    date = new Date(sYear - 0, sMonth - 1, sDay - 0, sHour - 0, sMinute - 0, sSecond - 0, "0".concat(sFraction, "000") * 1000);
  } else {
    date = new Date(sYear - 0, sMonth - 1, sDay - 0, sHour - 0, sMinute - 0, sSecond - 0);
  }

  if (sTimezone) {
    var time = date.getTime();
    var multiplier = Number("".concat(sOffsetSign, "1"));

    if (sOffsetHour) {
      time += multiplier * sOffsetHour * 60 * 60 * 1000;
    }

    if (sHasOffsetMinute) {
      time += multiplier * sOffsetMinute * 60 * 1000;
    }

    return new Date(time);
  }

  return date;
};

var parseDate = function parseDate(datestring) {
  var date = parseISO8601(datestring.replace(/\//g, '-'));

  if (date === 'Invalid Date') {
    return 'Дата не определена';
  }

  return date;
};
var beautifyDateServer = function beautifyDateServer(datestring) {
  var date = parseDate(datestring);
  if (typeof date !== 'object') return date;
  var day = date.getDate();
  var month = months[date.getMonth()];
  var year = date.getFullYear();
  return "".concat(day, " ").concat(month, " ").concat(year);
};
var beautifyDate = function beautifyDate(datestring) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
  return parseDate(datestring).toLocaleString('ru', options);
};
var getMonthBefore = function getMonthBefore() {
  var now = new Date();
  var year = "20".concat(now.getYear().toString().slice(1)); // Get 20... year

  return new Date(year, now.getMonth() - 1, now.getDate());
};

/***/ }),

/***/ "./shared/utils/sortHelpers.js":
/*!*************************************!*\
  !*** ./shared/utils/sortHelpers.js ***!
  \*************************************/
/*! exports provided: sortedByDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortedByDate", function() { return sortedByDate; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");



var sortedByDate = function sortedByDate() {
  var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var isCreateObject = arguments.length > 1 ? arguments[1] : undefined;
  var sortedArray = list.sort(function (a, b) {
    return (a.date || a.createdAt) > (b.date || b.createdAt) ? 1 : -1;
  });
  if (!isCreateObject) return sortedArray;
  return sortedArray.reduce(function (init, next) {
    var date = new Date(next.date || next.createdAt).toISOString().split('T')[0]; // Get Day

    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, init, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, date, [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(init[date] || []), [next])));
  }, {});
};

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** multi ./pages/admin/articles.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/macbookpro/WebstormProjects/new-life-begin-here/pages/admin/articles.js */"./pages/admin/articles.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/entries":
/*!****************************************************!*\
  !*** external "core-js/library/fn/object/entries" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/entries");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "lodash/get":
/*!*****************************!*\
  !*** external "lodash/get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),

/***/ "lodash/noop":
/*!******************************!*\
  !*** external "lodash/noop" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/noop");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/lib/fa/angle-down":
/*!************************************************!*\
  !*** external "react-icons/lib/fa/angle-down" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/angle-down");

/***/ }),

/***/ "react-icons/lib/fa/angle-left":
/*!************************************************!*\
  !*** external "react-icons/lib/fa/angle-left" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/angle-left");

/***/ }),

/***/ "react-icons/lib/fa/angle-right":
/*!*************************************************!*\
  !*** external "react-icons/lib/fa/angle-right" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/angle-right");

/***/ }),

/***/ "react-icons/lib/fa/arrow-left":
/*!************************************************!*\
  !*** external "react-icons/lib/fa/arrow-left" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/arrow-left");

/***/ }),

/***/ "react-icons/lib/fa/arrow-right":
/*!*************************************************!*\
  !*** external "react-icons/lib/fa/arrow-right" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/arrow-right");

/***/ }),

/***/ "react-icons/lib/fa/folder":
/*!********************************************!*\
  !*** external "react-icons/lib/fa/folder" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/folder");

/***/ }),

/***/ "react-icons/lib/fa/folder-open":
/*!*************************************************!*\
  !*** external "react-icons/lib/fa/folder-open" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/folder-open");

/***/ }),

/***/ "react-icons/lib/fa/search":
/*!********************************************!*\
  !*** external "react-icons/lib/fa/search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/search");

/***/ }),

/***/ "react-icons/lib/fa/times-circle":
/*!**************************************************!*\
  !*** external "react-icons/lib/fa/times-circle" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/times-circle");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=articles.js.map