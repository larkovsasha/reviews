module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Menu/Menu.module.css":
/*!******************************!*\
  !*** ./Menu/Menu.module.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"firstLevel": "Menu_firstLevel__26Pzv",
	"firstLevelActive": "Menu_firstLevelActive__255zj",
	"secondLevel": "Menu_secondLevel__3K9qy",
	"secondBlock": "Menu_secondBlock__28mOW",
	"secondLevelBlock": "Menu_secondLevelBlock__5OvCe",
	"secondLevelBlockOpened": "Menu_secondLevelBlockOpened__oAWmO",
	"thirdLevel": "Menu_thirdLevel__2wpeY",
	"thirdLevelActive": "Menu_thirdLevelActive__15buT"
};


/***/ }),

/***/ "./Menu/Menu.tsx":
/*!***********************!*\
  !*** ./Menu/Menu.tsx ***!
  \***********************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/app.context */ "./context/app.context.tsx");
/* harmony import */ var _icons_courses_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/courses.svg */ "./Menu/icons/courses.svg");
/* harmony import */ var _icons_services_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/services.svg */ "./Menu/icons/services.svg");
/* harmony import */ var _icons_books_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/books.svg */ "./Menu/icons/books.svg");
/* harmony import */ var _icons_products_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/products.svg */ "./Menu/icons/products.svg");
/* harmony import */ var _interfaces_page_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../interfaces/page.interface */ "./interfaces/page.interface.ts");
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Menu.module.css */ "./Menu/Menu.module.css");
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "G:\\dev\\nextjs\\reviews\\reviews\\Menu\\Menu.tsx";









const firstLevelMenu = [{
  route: 'courses',
  name: 'Курсы',
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_courses_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 11
  }, undefined),
  _id: _interfaces_page_interface__WEBPACK_IMPORTED_MODULE_7__["TopLevelCategory"].Courses
}, {
  route: 'services',
  name: 'Сервисы',
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_services_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 11
  }, undefined),
  _id: _interfaces_page_interface__WEBPACK_IMPORTED_MODULE_7__["TopLevelCategory"].Services
}, {
  route: 'books',
  name: 'Книги',
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_books_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 11
  }, undefined),
  _id: _interfaces_page_interface__WEBPACK_IMPORTED_MODULE_7__["TopLevelCategory"].Books
}, {
  route: 'products',
  name: 'Продукты',
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_products_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 11
  }, undefined),
  _id: _interfaces_page_interface__WEBPACK_IMPORTED_MODULE_7__["TopLevelCategory"].Products
}];
const Menu = () => {
  const {
    menu,
    firstCategory,
    setMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_app_context__WEBPACK_IMPORTED_MODULE_2__["AppContext"]);

  const buildFirstLevel = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: firstLevelMenu.map(m => {
        const isActive = m._id === firstCategory;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: `/${m.route}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.firstLevel, {
                [_Menu_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.firstLevelActive]: isActive
              }),
              children: [m.icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: m.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, undefined), isActive && buildSecondLevel(m)]
        }, m.route, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false);
  };

  const buildSecondLevel = menuItem => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.secondBlock,
      children: menu.map(m => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.secondLevel,
          children: m._id.secondCategory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.secondLevelBlog, {
            [_Menu_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.secondLevelBlockOpened]: m.isOpened
          }),
          children: buildThirdLevel(m.pages, menuItem.route)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, undefined)]
      }, m._id.secondCategory, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined);
  };

  const buildThirdLevel = (pages, route) => {
    return pages.map(p => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: `/${route}/${p.alias}`,
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.thirdLevel, {
          [_Menu_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.thirdLevel]: true
        }),
        children: p.category
      }, p._id, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.menu,
    children: buildFirstLevel()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./Menu/icons/books.svg":
/*!******************************!*\
  !*** ./Menu/icons/books.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgBooks(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 23,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5.06 3.75h-.002a.73.73 0 00-.502.195.648.648 0 00-.21.476v10.06c0 .369.321.67.716.67 1.666.004 4.457.33 6.382 2.218V6.841a.613.613 0 00-.098-.34C9.766 4.117 6.73 3.754 5.06 3.75zM19.654 14.48V4.42c0-.18-.074-.349-.21-.476a.73.73 0 00-.502-.194h-.001c-1.67.003-4.707.366-6.287 2.752a.613.613 0 00-.098.34v10.527c1.925-1.888 4.716-2.214 6.382-2.217.395-.002.716-.302.716-.671z",
    fill: "#787D85"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M21.285 6.07h-.52v8.41c0 .943-.818 1.71-1.825 1.713-1.413.003-3.742.262-5.392 1.726 2.853-.655 5.862-.229 7.576.137a.751.751 0 00.607-.13.652.652 0 00.269-.523V6.74c0-.37-.321-.671-.715-.671zM3.234 14.48V6.07h-.518c-.395 0-.716.3-.716.67v10.662c0 .206.098.397.269.524a.75.75 0 00.607.13c1.714-.366 4.723-.792 7.576-.137-1.65-1.464-3.98-1.723-5.393-1.726-1.006-.002-1.825-.77-1.825-1.712z",
    fill: "#787D85"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgBooks);

/***/ }),

/***/ "./Menu/icons/courses.svg":
/*!********************************!*\
  !*** ./Menu/icons/courses.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgCourses(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 22,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M12 11.892L5.672 9.351v1.836c0 2.004 2.72 3.515 6.328 3.515s6.328-1.51 6.328-3.515V9.35L12 11.892z",
    fill: "#787D85"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M24 15.405c0-.915-.59-1.688-1.406-1.98V6.143L24 5.562 12 .747 0 5.562l12 4.815 9.188-3.67v6.719a2.106 2.106 0 00-1.407 1.98c0 .838.495 1.557 1.205 1.897l-1.168 3.505 1.333.445.74-2.218.74 2.218 1.333-.445-1.169-3.505A2.106 2.106 0 0024 15.405z",
    fill: "#787D85"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCourses);

/***/ }),

/***/ "./Menu/icons/products.svg":
/*!*********************************!*\
  !*** ./Menu/icons/products.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgProducts(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 23,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15.09 4.168l-8.168 3.92-3.247-1.497 8.024-3.714a.697.697 0 01.585 0l2.806 1.291zM20.316 6.59l-8.311 3.86-3.113-1.437-.45-.214 8.177-3.92.45.214 3.247 1.498zM11.338 11.563l-.008 8.123-7.961-3.895A.648.648 0 013 15.218V7.703l3.373 1.558v2.74c0 .35.306.641.675.641.37 0 .675-.29.675-.642V9.895l.45.205 3.165 1.463zM20.991 7.712l-8.303 3.843-.008 8.122L21 15.604l-.009-7.892z",
    fill: "#787D85"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgProducts);

/***/ }),

/***/ "./Menu/icons/services.svg":
/*!*********************************!*\
  !*** ./Menu/icons/services.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgServices(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 19,
    height: 13,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M16.654 5.762a4.78 4.78 0 00.082-.887C16.736 2.187 14.49 0 11.726 0 9.964 0 8.33.914 7.432 2.367c-1.213-.383-2.456-.219-3.481.468S2.314 4.61 2.264 5.798C.917 6.42 0 7.746 0 9.208c0 .254.063.502.112.742C.472 11.718 2.08 13 3.934 13h11.132C17.215 13 19 11.299 19 9.208c0-1.478-.93-2.809-2.346-3.446z",
    fill: "#787D85"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgServices);

/***/ }),

/***/ "./components/Button/Button.module.css":
/*!*********************************************!*\
  !*** ./components/Button/Button.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "Button_button__sL3tD",
	"primary": "Button_primary__2zal1",
	"ghost": "Button_ghost__2SQcx",
	"arrow": "Button_arrow__-Cxtw",
	"down": "Button_down__3uNGg"
};


/***/ }),

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.css */ "./components/Button/Button.module.css");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _arrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrow.svg */ "./components/Button/arrow.svg");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "G:\\dev\\nextjs\\reviews\\reviews\\components\\Button\\Button.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Button = (_ref) => {
  let {
    appearance,
    arrow = 'none',
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["appearance", "arrow", "children", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button, className, {
      [_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.primary]: appearance == 'primary',
      [_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ghost]: appearance == 'ghost'
    })
  }, props), {}, {
    children: [children, arrow != 'none' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.arrow, {
        [_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.down]: arrow == 'down'
      }),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_arrow_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/Button/arrow.svg":
/*!*************************************!*\
  !*** ./components/Button/arrow.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgArrow(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 6,
    height: 10,
    fill: "#3B434E",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5.715 4.61L1.265.16A.543.543 0 00.878 0a.543.543 0 00-.386.16L.164.487a.548.548 0 000 .774L3.9 4.998.16 8.739a.543.543 0 00-.16.387c0 .146.057.284.16.387l.327.327c.103.103.24.16.387.16a.543.543 0 00.387-.16l4.454-4.454a.544.544 0 00.16-.388.544.544 0 00-.16-.388z"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgArrow);

/***/ }),

/***/ "./components/Htag/Htag.module.css":
/*!*****************************************!*\
  !*** ./components/Htag/Htag.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"h1": "Htag_h1__15c8R",
	"h2": "Htag_h2__38T7C",
	"h3": "Htag_h3__1L-7T"
};


/***/ }),

/***/ "./components/Htag/Htag.tsx":
/*!**********************************!*\
  !*** ./components/Htag/Htag.tsx ***!
  \**********************************/
/*! exports provided: Htag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Htag", function() { return Htag; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Htag_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Htag.module.css */ "./components/Htag/Htag.module.css");
/* harmony import */ var _Htag_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Htag_module_css__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "G:\\dev\\nextjs\\reviews\\reviews\\components\\Htag\\Htag.tsx";

const Htag = ({
  tag,
  children
}) => {
  switch (tag) {
    case 'h1':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _Htag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.h1,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 14
      }, undefined);

    case 'h2':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: _Htag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.h2,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 14
      }, undefined);

    case 'h3':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: _Htag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.h3,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 14
      }, undefined);

    default:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
  }
};

/***/ }),

/***/ "./components/P/P.module.css":
/*!***********************************!*\
  !*** ./components/P/P.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"p": "P_p__1diXQ",
	"s": "P_s__35XSw",
	"m": "P_m__3Ruez",
	"l": "P_l__sxHpZ"
};


/***/ }),

/***/ "./components/P/P.tsx":
/*!****************************!*\
  !*** ./components/P/P.tsx ***!
  \****************************/
/*! exports provided: P */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _P_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./P.module.css */ "./components/P/P.module.css");
/* harmony import */ var _P_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_P_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\dev\\nextjs\\reviews\\reviews\\components\\P\\P.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const P = (_ref) => {
  let {
    size = 'm',
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["size", "children", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_P_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.p, className, {
      [_P_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.s]: size == 's',
      [_P_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.m]: size == 'm',
      [_P_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.l]: size == 'l'
    })
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/Rating/Rating.module.css":
/*!*********************************************!*\
  !*** ./components/Rating/Rating.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"filled": "Rating_filled__23B_1",
	"star": "Rating_star__1NHet",
	"editable": "Rating_editable__1btdO"
};


/***/ }),

/***/ "./components/Rating/Rating.tsx":
/*!**************************************!*\
  !*** ./components/Rating/Rating.tsx ***!
  \**************************************/
/*! exports provided: Rating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return Rating; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Rating_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rating.module.css */ "./components/Rating/Rating.module.css");
/* harmony import */ var _Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Rating_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _star_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star.svg */ "./components/Rating/star.svg");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "G:\\dev\\nextjs\\reviews\\reviews\\components\\Rating\\Rating.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Rating = (_ref) => {
  let {
    isEditable = false,
    rating,
    setRating
  } = _ref,
      props = _objectWithoutProperties(_ref, ["isEditable", "rating", "setRating"]);

  const {
    0: ratingArray,
    1: setRatingArray
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(new Array(5).fill( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)));
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = currentRating => {
    const updatedArray = ratingArray.map((r, i) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.star, {
          [_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filled]: i < currentRating,
          [_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.editable]: isEditable
        }),
        onMouseEnter: () => changeDispay(i + 1),
        onMouseLeave: () => changeDispay(rating),
        onClick: () => onClick(i + 1),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_star_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
          tabIndex: isEditable ? 0 : -1,
          onKeyDown: e => isEditable && handleSpace(i + 1, e)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined);
    });
    setRatingArray(updatedArray);
  };

  const changeDispay = i => {
    if (!isEditable) {
      return;
    }

    constructRating(i);
  };

  const onClick = i => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(i);
  };

  const handleSpace = (i, e) => {
    if (e.code != 'Space' || !setRating) {
      return;
    }

    setRating(i);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, props), {}, {
    children: ratingArray.map((r, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: r
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, undefined))
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/Rating/star.svg":
/*!************************************!*\
  !*** ./components/Rating/star.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgStar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 20,
    height: 20,
    fill: "#E2E2E2",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M19.948 7.557a1.072 1.072 0 00-.915-.762l-5.773-.547L10.978.674A1.063 1.063 0 0010 0c-.427 0-.81.264-.977.674L6.74 6.248l-5.774.547c-.424.04-.782.34-.915.762-.131.422-.01.886.31 1.179l4.365 3.993-1.287 5.914c-.094.435.067.885.413 1.146a1.029 1.029 0 001.169.054L10 16.736l4.977 3.107c.366.227.825.206 1.17-.054.346-.261.507-.71.413-1.146l-1.287-5.914 4.365-3.993c.32-.293.441-.756.31-1.18z"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgStar);

/***/ }),

/***/ "./components/Tag/Tag.module.css":
/*!***************************************!*\
  !*** ./components/Tag/Tag.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tag": "Tag_tag__11TEs",
	"s": "Tag_s__1PVV-",
	"m": "Tag_m__2inzq",
	"ghost": "Tag_ghost__1uvh6",
	"red": "Tag_red__1xC_m",
	"grey": "Tag_grey__1Qy6F",
	"green": "Tag_green__hpixn",
	"primary": "Tag_primary__1-SdR"
};


/***/ }),

/***/ "./components/Tag/Tag.tsx":
/*!********************************!*\
  !*** ./components/Tag/Tag.tsx ***!
  \********************************/
/*! exports provided: Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tag_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tag.module.css */ "./components/Tag/Tag.module.css");
/* harmony import */ var _Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Tag_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "G:\\dev\\nextjs\\reviews\\reviews\\components\\Tag\\Tag.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Tag = (_ref) => {
  let {
    size = 's',
    children,
    color = 'ghost',
    href,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["size", "children", "color", "href", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tag, className, {
      [_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.s]: size == 's',
      [_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.m]: size == 'm',
      [_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ghost]: color == 'ghost',
      [_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.red]: color == 'red',
      [_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.grey]: color == 'grey',
      [_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.green]: color == 'green',
      [_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.primary]: color == 'primary'
    })
  }, props), {}, {
    children: href ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: href,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: children
    }, void 0, false)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! exports provided: Htag, Button, P, Tag, Rating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Htag_Htag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Htag/Htag */ "./components/Htag/Htag.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Htag", function() { return _Htag_Htag__WEBPACK_IMPORTED_MODULE_0__["Htag"]; });

/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button/Button */ "./components/Button/Button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button_Button__WEBPACK_IMPORTED_MODULE_1__["Button"]; });

/* harmony import */ var _P_P__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./P/P */ "./components/P/P.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "P", function() { return _P_P__WEBPACK_IMPORTED_MODULE_2__["P"]; });

/* harmony import */ var _Tag_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tag/Tag */ "./components/Tag/Tag.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _Tag_Tag__WEBPACK_IMPORTED_MODULE_3__["Tag"]; });

/* harmony import */ var _Rating_Rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rating/Rating */ "./components/Rating/Rating.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return _Rating_Rating__WEBPACK_IMPORTED_MODULE_4__["Rating"]; });







/***/ }),

/***/ "./context/app.context.tsx":
/*!*********************************!*\
  !*** ./context/app.context.tsx ***!
  \*********************************/
/*! exports provided: AppContext, AppContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContextProvider", function() { return AppContextProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interfaces_page_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/page.interface */ "./interfaces/page.interface.ts");

var _jsxFileName = "G:\\dev\\nextjs\\reviews\\reviews\\context\\app.context.tsx";


const AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  menu: [],
  firstCategory: _interfaces_page_interface__WEBPACK_IMPORTED_MODULE_2__["TopLevelCategory"].Courses
});
const AppContextProvider = ({
  children,
  menu,
  firstCategory
}) => {
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(menu);

  const setMenu = newMenu => setMenuState(newMenu);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppContext.Provider, {
    value: {
      menu: menuState,
      firstCategory,
      setMenu
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./interfaces/page.interface.ts":
/*!**************************************!*\
  !*** ./interfaces/page.interface.ts ***!
  \**************************************/
/*! exports provided: TopLevelCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopLevelCategory", function() { return TopLevelCategory; });
let TopLevelCategory;

(function (TopLevelCategory) {
  TopLevelCategory[TopLevelCategory["Courses"] = 0] = "Courses";
  TopLevelCategory[TopLevelCategory["Services"] = 1] = "Services";
  TopLevelCategory[TopLevelCategory["Books"] = 2] = "Books";
  TopLevelCategory[TopLevelCategory["Products"] = 3] = "Products";
})(TopLevelCategory || (TopLevelCategory = {}));

/***/ }),

/***/ "./layout/Footer/Footer.module.css":
/*!*****************************************!*\
  !*** ./layout/Footer/Footer.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__3l6yP"
};


/***/ }),

/***/ "./layout/Footer/Footer.tsx":
/*!**********************************!*\
  !*** ./layout/Footer/Footer.tsx ***!
  \**********************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.css */ "./layout/Footer/Footer.module.css");
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "G:\\dev\\nextjs\\reviews\\reviews\\layout\\Footer\\Footer.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Footer = (_ref) => {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer)
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["OwlTop \xA9 2020 - ", Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(), 'yyyy'), " \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#",
      children: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#",
      children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./layout/Header/Header.tsx":
/*!**********************************!*\
  !*** ./layout/Header/Header.tsx ***!
  \**********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "G:\\dev\\nextjs\\reviews\\reviews\\layout\\Header\\Header.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Header = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, props), {}, {
    children: "Header"
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./layout/Layout.module.css":
/*!**********************************!*\
  !*** ./layout/Layout.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Layout_wrapper__3IvBy",
	"header": "Layout_header__2M2F8",
	"sidebar": "Layout_sidebar__205yA",
	"body": "Layout_body__3X1_m",
	"footer": "Layout_footer__196lU"
};


/***/ }),

/***/ "./layout/Layout.tsx":
/*!***************************!*\
  !*** ./layout/Layout.tsx ***!
  \***************************/
/*! exports provided: withLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLayout", function() { return withLayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.module.css */ "./layout/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header/Header */ "./layout/Header/Header.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar/Sidebar */ "./layout/Sidebar/Sidebar.tsx");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer/Footer */ "./layout/Footer/Footer.tsx");
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/app.context */ "./context/app.context.tsx");

var _jsxFileName = "G:\\dev\\nextjs\\reviews\\reviews\\layout\\Layout.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Layout = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header_Header__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__["Sidebar"], {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["Footer"], {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

const withLayout = Component => {
  return function withLayoutComponent(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_app_context__WEBPACK_IMPORTED_MODULE_6__["AppContextProvider"], {
      menu: props.menu,
      firstCategory: props.firstCategory,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Layout, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this);
  };
};

/***/ }),

/***/ "./layout/Sidebar/Sidebar.tsx":
/*!************************************!*\
  !*** ./layout/Sidebar/Sidebar.tsx ***!
  \************************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Menu/Menu */ "./Menu/Menu.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\dev\\nextjs\\reviews\\reviews\\layout\\Sidebar\\Sidebar.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Sidebar = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__["Menu"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/Layout */ "./layout/Layout.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "G:\\dev\\nextjs\\reviews\\reviews\\pages\\index.tsx";





function Home({
  firstCategory,
  menu
}) {
  const {
    0: rating,
    1: setRating
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(4);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Htag"], {
      tag: "h1",
      children: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      appearance: "primary",
      arrow: "right",
      children: "\u041A\u043D\u043E\u043F\u043A\u0430"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      appearance: "ghost",
      arrow: "down",
      children: "\u041A\u043D\u043E\u043F\u043A\u0430"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["P"], {
      size: "l",
      children: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["P"], {
      children: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["P"], {
      size: "s",
      children: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      size: "s",
      children: "Ghost"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      size: "m",
      color: "red",
      children: "Red"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      size: "s",
      color: "green",
      children: "Green"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      color: "primary",
      children: "Green"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Rating"], {
      rating: rating,
      isEditable: true,
      setRating: setRating
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["withLayout"])(Home));
const getStaticProps = async () => {
  const firstCategory = 0;
  const {
    data: menu
  } = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("https://courses-top.ru" + '/api/top-page/find', {
    firstCategory: 0
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTWVudS9NZW51Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vTWVudS9NZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9NZW51L2ljb25zL2Jvb2tzLnN2ZyIsIndlYnBhY2s6Ly8vLi9NZW51L2ljb25zL2NvdXJzZXMuc3ZnIiwid2VicGFjazovLy8uL01lbnUvaWNvbnMvcHJvZHVjdHMuc3ZnIiwid2VicGFjazovLy8uL01lbnUvaWNvbnMvc2VydmljZXMuc3ZnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24vYXJyb3cuc3ZnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSHRhZy9IdGFnLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IdGFnL0h0YWcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUC9QLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QL1AudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmF0aW5nL1JhdGluZy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmF0aW5nL1JhdGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SYXRpbmcvc3Rhci5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWcvVGFnLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWcvVGFnLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXBwLmNvbnRleHQudHN4Iiwid2VicGFjazovLy8uL2ludGVyZmFjZXMvcGFnZS5pbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0L0Zvb3Rlci9Gb290ZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvRm9vdGVyL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0L0hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2xheW91dC9MYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvU2lkZWJhci9TaWRlYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImZpcnN0TGV2ZWxNZW51Iiwicm91dGUiLCJuYW1lIiwiaWNvbiIsIl9pZCIsIlRvcExldmVsQ2F0ZWdvcnkiLCJDb3Vyc2VzIiwiU2VydmljZXMiLCJCb29rcyIsIlByb2R1Y3RzIiwiTWVudSIsIm1lbnUiLCJmaXJzdENhdGVnb3J5Iiwic2V0TWVudSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiYnVpbGRGaXJzdExldmVsIiwibWFwIiwibSIsImlzQWN0aXZlIiwiY24iLCJzdHlsZXMiLCJmaXJzdExldmVsIiwiZmlyc3RMZXZlbEFjdGl2ZSIsImJ1aWxkU2Vjb25kTGV2ZWwiLCJtZW51SXRlbSIsInNlY29uZEJsb2NrIiwic2Vjb25kTGV2ZWwiLCJzZWNvbmRDYXRlZ29yeSIsInNlY29uZExldmVsQmxvZyIsInNlY29uZExldmVsQmxvY2tPcGVuZWQiLCJpc09wZW5lZCIsImJ1aWxkVGhpcmRMZXZlbCIsInBhZ2VzIiwicCIsImFsaWFzIiwidGhpcmRMZXZlbCIsImNhdGVnb3J5IiwiQnV0dG9uIiwiYXBwZWFyYW5jZSIsImFycm93IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJwcm9wcyIsImJ1dHRvbiIsInByaW1hcnkiLCJnaG9zdCIsImRvd24iLCJIdGFnIiwidGFnIiwiaDEiLCJoMiIsImgzIiwiUCIsInNpemUiLCJzIiwibCIsIlJhdGluZyIsImlzRWRpdGFibGUiLCJyYXRpbmciLCJzZXRSYXRpbmciLCJyYXRpbmdBcnJheSIsInNldFJhdGluZ0FycmF5IiwidXNlU3RhdGUiLCJBcnJheSIsImZpbGwiLCJ1c2VFZmZlY3QiLCJjb25zdHJ1Y3RSYXRpbmciLCJjdXJyZW50UmF0aW5nIiwidXBkYXRlZEFycmF5IiwiciIsImkiLCJzdGFyIiwiZmlsbGVkIiwiZWRpdGFibGUiLCJjaGFuZ2VEaXNwYXkiLCJvbkNsaWNrIiwiZSIsImhhbmRsZVNwYWNlIiwiY29kZSIsIlRhZyIsImNvbG9yIiwiaHJlZiIsInJlZCIsImdyZXkiLCJncmVlbiIsImNyZWF0ZUNvbnRleHQiLCJBcHBDb250ZXh0UHJvdmlkZXIiLCJtZW51U3RhdGUiLCJzZXRNZW51U3RhdGUiLCJuZXdNZW51IiwiRm9vdGVyIiwiZm9vdGVyIiwiZm9ybWF0IiwiRGF0ZSIsIkhlYWRlciIsIkxheW91dCIsIndyYXBwZXIiLCJoZWFkZXIiLCJzaWRlYmFyIiwiYm9keSIsIndpdGhMYXlvdXQiLCJDb21wb25lbnQiLCJ3aXRoTGF5b3V0Q29tcG9uZW50IiwiU2lkZWJhciIsIkhvbWUiLCJnZXRTdGF0aWNQcm9wcyIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7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QixDQUE3QjtBQU1BLFNBQU87QUFDTCtCLFNBQUssRUFBRTtBQUNMaEMsVUFESztBQUVMQztBQUZLO0FBREYsR0FBUDtBQU1ELENBZE0sQzs7Ozs7Ozs7Ozs7QUNyQ1Asa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZpcnN0TGV2ZWxcIjogXCJNZW51X2ZpcnN0TGV2ZWxfXzI2UHp2XCIsXG5cdFwiZmlyc3RMZXZlbEFjdGl2ZVwiOiBcIk1lbnVfZmlyc3RMZXZlbEFjdGl2ZV9fMjU1empcIixcblx0XCJzZWNvbmRMZXZlbFwiOiBcIk1lbnVfc2Vjb25kTGV2ZWxfXzNLOXF5XCIsXG5cdFwic2Vjb25kQmxvY2tcIjogXCJNZW51X3NlY29uZEJsb2NrX18yOG1PV1wiLFxuXHRcInNlY29uZExldmVsQmxvY2tcIjogXCJNZW51X3NlY29uZExldmVsQmxvY2tfXzVPdkNlXCIsXG5cdFwic2Vjb25kTGV2ZWxCbG9ja09wZW5lZFwiOiBcIk1lbnVfc2Vjb25kTGV2ZWxCbG9ja09wZW5lZF9fb0FXbU9cIixcblx0XCJ0aGlyZExldmVsXCI6IFwiTWVudV90aGlyZExldmVsX18yd3BlWVwiLFxuXHRcInRoaXJkTGV2ZWxBY3RpdmVcIjogXCJNZW51X3RoaXJkTGV2ZWxBY3RpdmVfXzE1YnVUXCJcbn07XG4iLCJpbXBvcnQgeyBKU1ggfSBmcm9tICdAYmFiZWwvdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9hcHAuY29udGV4dCc7XG5pbXBvcnQgeyBGaXJzdExldmVsTWVudUl0ZW0sIFBhZ2VJdGVtIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9tZW51LmludGVyZmFjZSc7XG5pbXBvcnQgQ291cnNlc0ljb24gZnJvbSAnLi9pY29ucy9jb3Vyc2VzLnN2Zyc7XG5pbXBvcnQgU2VydmljZXNJY29uIGZyb20gJy4vaWNvbnMvc2VydmljZXMuc3ZnJztcbmltcG9ydCBCb29rc0ljb24gZnJvbSAnLi9pY29ucy9ib29rcy5zdmcnO1xuaW1wb3J0IFByb2R1Y3RzSWNvbiBmcm9tICcuL2ljb25zL3Byb2R1Y3RzLnN2Zyc7XG5pbXBvcnQgeyBUb3BMZXZlbENhdGVnb3J5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wYWdlLmludGVyZmFjZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWVudS5tb2R1bGUuY3NzJztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgZmlyc3RMZXZlbE1lbnU6IEZpcnN0TGV2ZWxNZW51SXRlbVtdID0gW1xuICB7XG4gICAgcm91dGU6ICdjb3Vyc2VzJyxcbiAgICBuYW1lOiAn0JrRg9GA0YHRiycsXG4gICAgaWNvbjogPENvdXJzZXNJY29uIC8+LFxuICAgIF9pZDogVG9wTGV2ZWxDYXRlZ29yeS5Db3Vyc2VzLFxuICB9LFxuICB7XG4gICAgcm91dGU6ICdzZXJ2aWNlcycsXG4gICAgbmFtZTogJ9Ch0LXRgNCy0LjRgdGLJyxcbiAgICBpY29uOiA8U2VydmljZXNJY29uIC8+LFxuICAgIF9pZDogVG9wTGV2ZWxDYXRlZ29yeS5TZXJ2aWNlcyxcbiAgfSxcbiAge1xuICAgIHJvdXRlOiAnYm9va3MnLFxuICAgIG5hbWU6ICfQmtC90LjQs9C4JyxcbiAgICBpY29uOiA8Qm9va3NJY29uIC8+LFxuICAgIF9pZDogVG9wTGV2ZWxDYXRlZ29yeS5Cb29rcyxcbiAgfSxcbiAge1xuICAgIHJvdXRlOiAncHJvZHVjdHMnLFxuICAgIG5hbWU6ICfQn9GA0L7QtNGD0LrRgtGLJyxcbiAgICBpY29uOiA8UHJvZHVjdHNJY29uIC8+LFxuICAgIF9pZDogVG9wTGV2ZWxDYXRlZ29yeS5Qcm9kdWN0cyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBNZW51ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgeyBtZW51LCBmaXJzdENhdGVnb3J5LCBzZXRNZW51IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuXG4gIGNvbnN0IGJ1aWxkRmlyc3RMZXZlbCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge2ZpcnN0TGV2ZWxNZW51Lm1hcCgobSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gbS5faWQgPT09IGZpcnN0Q2F0ZWdvcnk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXttLnJvdXRlfT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17YC8ke20ucm91dGV9YH0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihzdHlsZXMuZmlyc3RMZXZlbCwge1xuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmZpcnN0TGV2ZWxBY3RpdmVdOiBpc0FjdGl2ZSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHttLmljb259XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57bS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICB7aXNBY3RpdmUgJiYgYnVpbGRTZWNvbmRMZXZlbChtKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcbiAgY29uc3QgYnVpbGRTZWNvbmRMZXZlbCA9IChtZW51SXRlbTogRmlyc3RMZXZlbE1lbnVJdGVtKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRCbG9ja30+XG4gICAgICAgIHttZW51Lm1hcCgobSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXttLl9pZC5zZWNvbmRDYXRlZ29yeX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZExldmVsfT57bS5faWQuc2Vjb25kQ2F0ZWdvcnl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oc3R5bGVzLnNlY29uZExldmVsQmxvZywge1xuICAgICAgICAgICAgICAgIFtzdHlsZXMuc2Vjb25kTGV2ZWxCbG9ja09wZW5lZF06IG0uaXNPcGVuZWQsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YnVpbGRUaGlyZExldmVsKG0ucGFnZXMsIG1lbnVJdGVtLnJvdXRlKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfTtcbiAgY29uc3QgYnVpbGRUaGlyZExldmVsID0gKHBhZ2VzOiBQYWdlSXRlbVtdLCByb3V0ZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHBhZ2VzLm1hcCgocCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtgLyR7cm91dGV9LyR7cC5hbGlhc31gfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oc3R5bGVzLnRoaXJkTGV2ZWwsIHtcbiAgICAgICAgICAgIFtzdHlsZXMudGhpcmRMZXZlbF06IHRydWUsXG4gICAgICAgICAgfSl9XG4gICAgICAgICAga2V5PXtwLl9pZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtwLmNhdGVnb3J5fVxuICAgICAgICA8L2E+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT57YnVpbGRGaXJzdExldmVsKCl9PC9kaXY+O1xufTtcbiIsInZhciBfcGF0aCwgX3BhdGgyO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnQm9va3MocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMjQsXG4gICAgaGVpZ2h0OiAyMyxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk01LjA2IDMuNzVoLS4wMDJhLjczLjczIDAgMDAtLjUwMi4xOTUuNjQ4LjY0OCAwIDAwLS4yMS40NzZ2MTAuMDZjMCAuMzY5LjMyMS42Ny43MTYuNjcgMS42NjYuMDA0IDQuNDU3LjMzIDYuMzgyIDIuMjE4VjYuODQxYS42MTMuNjEzIDAgMDAtLjA5OC0uMzRDOS43NjYgNC4xMTcgNi43MyAzLjc1NCA1LjA2IDMuNzV6TTE5LjY1NCAxNC40OFY0LjQyYzAtLjE4LS4wNzQtLjM0OS0uMjEtLjQ3NmEuNzMuNzMgMCAwMC0uNTAyLS4xOTRoLS4wMDFjLTEuNjcuMDAzLTQuNzA3LjM2Ni02LjI4NyAyLjc1MmEuNjEzLjYxMyAwIDAwLS4wOTguMzR2MTAuNTI3YzEuOTI1LTEuODg4IDQuNzE2LTIuMjE0IDYuMzgyLTIuMjE3LjM5NS0uMDAyLjcxNi0uMzAyLjcxNi0uNjcxelwiLFxuICAgIGZpbGw6IFwiIzc4N0Q4NVwiXG4gIH0pKSwgX3BhdGgyIHx8IChfcGF0aDIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIxLjI4NSA2LjA3aC0uNTJ2OC40MWMwIC45NDMtLjgxOCAxLjcxLTEuODI1IDEuNzEzLTEuNDEzLjAwMy0zLjc0Mi4yNjItNS4zOTIgMS43MjYgMi44NTMtLjY1NSA1Ljg2Mi0uMjI5IDcuNTc2LjEzN2EuNzUxLjc1MSAwIDAwLjYwNy0uMTMuNjUyLjY1MiAwIDAwLjI2OS0uNTIzVjYuNzRjMC0uMzctLjMyMS0uNjcxLS43MTUtLjY3MXpNMy4yMzQgMTQuNDhWNi4wN2gtLjUxOGMtLjM5NSAwLS43MTYuMy0uNzE2LjY3djEwLjY2MmMwIC4yMDYuMDk4LjM5Ny4yNjkuNTI0YS43NS43NSAwIDAwLjYwNy4xM2MxLjcxNC0uMzY2IDQuNzIzLS43OTIgNy41NzYtLjEzNy0xLjY1LTEuNDY0LTMuOTgtMS43MjMtNS4zOTMtMS43MjYtMS4wMDYtLjAwMi0xLjgyNS0uNzctMS44MjUtMS43MTJ6XCIsXG4gICAgZmlsbDogXCIjNzg3RDg1XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQm9va3M7IiwidmFyIF9wYXRoLCBfcGF0aDI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdDb3Vyc2VzKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDI0LFxuICAgIGhlaWdodDogMjIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTIgMTEuODkyTDUuNjcyIDkuMzUxdjEuODM2YzAgMi4wMDQgMi43MiAzLjUxNSA2LjMyOCAzLjUxNXM2LjMyOC0xLjUxIDYuMzI4LTMuNTE1VjkuMzVMMTIgMTEuODkyelwiLFxuICAgIGZpbGw6IFwiIzc4N0Q4NVwiXG4gIH0pKSwgX3BhdGgyIHx8IChfcGF0aDIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTI0IDE1LjQwNWMwLS45MTUtLjU5LTEuNjg4LTEuNDA2LTEuOThWNi4xNDNMMjQgNS41NjIgMTIgLjc0NyAwIDUuNTYybDEyIDQuODE1IDkuMTg4LTMuNjd2Ni43MTlhMi4xMDYgMi4xMDYgMCAwMC0xLjQwNyAxLjk4YzAgLjgzOC40OTUgMS41NTcgMS4yMDUgMS44OTdsLTEuMTY4IDMuNTA1IDEuMzMzLjQ0NS43NC0yLjIxOC43NCAyLjIxOCAxLjMzMy0uNDQ1LTEuMTY5LTMuNTA1QTIuMTA2IDIuMTA2IDAgMDAyNCAxNS40MDV6XCIsXG4gICAgZmlsbDogXCIjNzg3RDg1XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQ291cnNlczsiLCJ2YXIgX3BhdGg7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdQcm9kdWN0cyhwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAyNCxcbiAgICBoZWlnaHQ6IDIzLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE1LjA5IDQuMTY4bC04LjE2OCAzLjkyLTMuMjQ3LTEuNDk3IDguMDI0LTMuNzE0YS42OTcuNjk3IDAgMDEuNTg1IDBsMi44MDYgMS4yOTF6TTIwLjMxNiA2LjU5bC04LjMxMSAzLjg2LTMuMTEzLTEuNDM3LS40NS0uMjE0IDguMTc3LTMuOTIuNDUuMjE0IDMuMjQ3IDEuNDk4ek0xMS4zMzggMTEuNTYzbC0uMDA4IDguMTIzLTcuOTYxLTMuODk1QS42NDguNjQ4IDAgMDEzIDE1LjIxOFY3LjcwM2wzLjM3MyAxLjU1OHYyLjc0YzAgLjM1LjMwNi42NDEuNjc1LjY0MS4zNyAwIC42NzUtLjI5LjY3NS0uNjQyVjkuODk1bC40NS4yMDUgMy4xNjUgMS40NjN6TTIwLjk5MSA3LjcxMmwtOC4zMDMgMy44NDMtLjAwOCA4LjEyMkwyMSAxNS42MDRsLS4wMDktNy44OTJ6XCIsXG4gICAgZmlsbDogXCIjNzg3RDg1XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUHJvZHVjdHM7IiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnU2VydmljZXMocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMTksXG4gICAgaGVpZ2h0OiAxMyxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNi42NTQgNS43NjJhNC43OCA0Ljc4IDAgMDAuMDgyLS44ODdDMTYuNzM2IDIuMTg3IDE0LjQ5IDAgMTEuNzI2IDAgOS45NjQgMCA4LjMzLjkxNCA3LjQzMiAyLjM2N2MtMS4yMTMtLjM4My0yLjQ1Ni0uMjE5LTMuNDgxLjQ2OFMyLjMxNCA0LjYxIDIuMjY0IDUuNzk4Qy45MTcgNi40MiAwIDcuNzQ2IDAgOS4yMDhjMCAuMjU0LjA2My41MDIuMTEyLjc0MkMuNDcyIDExLjcxOCAyLjA4IDEzIDMuOTM0IDEzaDExLjEzMkMxNy4yMTUgMTMgMTkgMTEuMjk5IDE5IDkuMjA4YzAtMS40NzgtLjkzLTIuODA5LTIuMzQ2LTMuNDQ2elwiLFxuICAgIGZpbGw6IFwiIzc4N0Q4NVwiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1NlcnZpY2VzOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcIkJ1dHRvbl9idXR0b25fX3NMM3REXCIsXG5cdFwicHJpbWFyeVwiOiBcIkJ1dHRvbl9wcmltYXJ5X18yemFsMVwiLFxuXHRcImdob3N0XCI6IFwiQnV0dG9uX2dob3N0X18yU1FjeFwiLFxuXHRcImFycm93XCI6IFwiQnV0dG9uX2Fycm93X18tQ3h0d1wiLFxuXHRcImRvd25cIjogXCJCdXR0b25fZG93bl9fM3VOR2dcIlxufTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b24ubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBCdXR0b25Qcm9wcyB9IGZyb20gJy4vQnV0dG9uLnByb3BzJztcbmltcG9ydCBBcnJvd0ljb24gZnJvbSAnLi9hcnJvdy5zdmcnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHtcbiAgYXBwZWFyYW5jZSxcbiAgYXJyb3cgPSAnbm9uZScsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBCdXR0b25Qcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2NuKHN0eWxlcy5idXR0b24sIGNsYXNzTmFtZSwge1xuICAgICAgICBbc3R5bGVzLnByaW1hcnldOiBhcHBlYXJhbmNlID09ICdwcmltYXJ5JyxcbiAgICAgICAgW3N0eWxlcy5naG9zdF06IGFwcGVhcmFuY2UgPT0gJ2dob3N0JyxcbiAgICAgIH0pfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHthcnJvdyAhPSAnbm9uZScgJiYgKFxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oc3R5bGVzLmFycm93LCB7XG4gICAgICAgICAgICBbc3R5bGVzLmRvd25dOiBhcnJvdyA9PSAnZG93bicsXG4gICAgICAgICAgfSl9XG4gICAgICAgID5cbiAgICAgICAgICA8QXJyb3dJY29uIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuIiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnQXJyb3cocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogNixcbiAgICBoZWlnaHQ6IDEwLFxuICAgIGZpbGw6IFwiIzNCNDM0RVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTUuNzE1IDQuNjFMMS4yNjUuMTZBLjU0My41NDMgMCAwMC44NzggMGEuNTQzLjU0MyAwIDAwLS4zODYuMTZMLjE2NC40ODdhLjU0OC41NDggMCAwMDAgLjc3NEwzLjkgNC45OTguMTYgOC43MzlhLjU0My41NDMgMCAwMC0uMTYuMzg3YzAgLjE0Ni4wNTcuMjg0LjE2LjM4N2wuMzI3LjMyN2MuMTAzLjEwMy4yNC4xNi4zODcuMTZhLjU0My41NDMgMCAwMC4zODctLjE2bDQuNDU0LTQuNDU0YS41NDQuNTQ0IDAgMDAuMTYtLjM4OC41NDQuNTQ0IDAgMDAtLjE2LS4zODh6XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQXJyb3c7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaDFcIjogXCJIdGFnX2gxX18xNWM4UlwiLFxuXHRcImgyXCI6IFwiSHRhZ19oMl9fMzhUN0NcIixcblx0XCJoM1wiOiBcIkh0YWdfaDNfXzFMLTdUXCJcbn07XG4iLCJpbXBvcnQgeyBIdGFnUHJvcHMgfSBmcm9tICcuL0h0YWcucHJvcHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0h0YWcubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBIdGFnID0gKHsgdGFnLCBjaGlsZHJlbiB9OiBIdGFnUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSAnaDEnOlxuICAgICAgcmV0dXJuIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oMX0+e2NoaWxkcmVufTwvaDE+O1xuICAgIGNhc2UgJ2gyJzpcbiAgICAgIHJldHVybiA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaDJ9PntjaGlsZHJlbn08L2gyPjtcbiAgICBjYXNlICdoMyc6XG4gICAgICByZXR1cm4gPGgzIGNsYXNzTmFtZT17c3R5bGVzLmgzfT57Y2hpbGRyZW59PC9oMz47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiA8PjwvPjtcbiAgfVxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBcIjogXCJQX3BfXzFkaVhRXCIsXG5cdFwic1wiOiBcIlBfc19fMzVYU3dcIixcblx0XCJtXCI6IFwiUF9tX18zUnVlelwiLFxuXHRcImxcIjogXCJQX2xfX3N4SHBaXCJcbn07XG4iLCJpbXBvcnQgeyBQUHJvcHMgfSBmcm9tICcuL1AucHJvcHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1AubW9kdWxlLmNzcyc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBjb25zdCBQID0gKHtcbiAgc2l6ZSA9ICdtJyxcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8cFxuICAgICAgY2xhc3NOYW1lPXtjbihzdHlsZXMucCwgY2xhc3NOYW1lLCB7XG4gICAgICAgIFtzdHlsZXMuc106IHNpemUgPT0gJ3MnLFxuICAgICAgICBbc3R5bGVzLm1dOiBzaXplID09ICdtJyxcbiAgICAgICAgW3N0eWxlcy5sXTogc2l6ZSA9PSAnbCcsXG4gICAgICB9KX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9wPlxuICApO1xufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZpbGxlZFwiOiBcIlJhdGluZ19maWxsZWRfXzIzQl8xXCIsXG5cdFwic3RhclwiOiBcIlJhdGluZ19zdGFyX18xTkhldFwiLFxuXHRcImVkaXRhYmxlXCI6IFwiUmF0aW5nX2VkaXRhYmxlX18xYnRkT1wiXG59O1xuIiwiaW1wb3J0IHsgUmF0aW5nUHJvcHMgfSBmcm9tICcuL1JhdGluZy5wcm9wcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUmF0aW5nLm1vZHVsZS5jc3MnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFN0YXJJY29uIGZyb20gJy4vc3Rhci5zdmcnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIEtleWJvYXJkRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBSYXRpbmcgPSAoe1xuICBpc0VkaXRhYmxlID0gZmFsc2UsXG4gIHJhdGluZyxcbiAgc2V0UmF0aW5nLFxuICAuLi5wcm9wc1xufTogUmF0aW5nUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFtyYXRpbmdBcnJheSwgc2V0UmF0aW5nQXJyYXldID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oXG4gICAgbmV3IEFycmF5KDUpLmZpbGwoPD48Lz4pXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdHJ1Y3RSYXRpbmcocmF0aW5nKTtcbiAgfSwgW3JhdGluZ10pO1xuXG4gIGNvbnN0IGNvbnN0cnVjdFJhdGluZyA9IChjdXJyZW50UmF0aW5nOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkQXJyYXkgPSByYXRpbmdBcnJheS5tYXAoKHI6IEpTWC5FbGVtZW50LCBpOiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuXG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oc3R5bGVzLnN0YXIsIHtcbiAgICAgICAgICAgIFtzdHlsZXMuZmlsbGVkXTogaSA8IGN1cnJlbnRSYXRpbmcsXG4gICAgICAgICAgICBbc3R5bGVzLmVkaXRhYmxlXTogaXNFZGl0YWJsZSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGNoYW5nZURpc3BheShpICsgMSl9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBjaGFuZ2VEaXNwYXkocmF0aW5nKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGkgKyAxKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTdGFySWNvblxuICAgICAgICAgICAgdGFiSW5kZXg9e2lzRWRpdGFibGUgPyAwIDogLTF9XG4gICAgICAgICAgICBvbktleURvd249eyhlOiBLZXlib2FyZEV2ZW50PFNWR0VsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgICBpc0VkaXRhYmxlICYmIGhhbmRsZVNwYWNlKGkgKyAxLCBlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgc2V0UmF0aW5nQXJyYXkodXBkYXRlZEFycmF5KTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VEaXNwYXkgPSAoaTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCFpc0VkaXRhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0cnVjdFJhdGluZyhpKTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrID0gKGk6IG51bWJlcikgPT4ge1xuICAgIGlmICghaXNFZGl0YWJsZSB8fCAhc2V0UmF0aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFJhdGluZyhpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTcGFjZSA9IChpOiBudW1iZXIsIGU6IEtleWJvYXJkRXZlbnQ8U1ZHRWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS5jb2RlICE9ICdTcGFjZScgfHwgIXNldFJhdGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRSYXRpbmcoaSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5wcm9wc30+XG4gICAgICB7cmF0aW5nQXJyYXkubWFwKChyLCBpKSA9PiAoXG4gICAgICAgIDxzcGFuIGtleT17aX0+e3J9PC9zcGFuPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnU3Rhcihwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAyMCxcbiAgICBoZWlnaHQ6IDIwLFxuICAgIGZpbGw6IFwiI0UyRTJFMlwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE5Ljk0OCA3LjU1N2ExLjA3MiAxLjA3MiAwIDAwLS45MTUtLjc2MmwtNS43NzMtLjU0N0wxMC45NzguNjc0QTEuMDYzIDEuMDYzIDAgMDAxMCAwYy0uNDI3IDAtLjgxLjI2NC0uOTc3LjY3NEw2Ljc0IDYuMjQ4bC01Ljc3NC41NDdjLS40MjQuMDQtLjc4Mi4zNC0uOTE1Ljc2Mi0uMTMxLjQyMi0uMDEuODg2LjMxIDEuMTc5bDQuMzY1IDMuOTkzLTEuMjg3IDUuOTE0Yy0uMDk0LjQzNS4wNjcuODg1LjQxMyAxLjE0NmExLjAyOSAxLjAyOSAwIDAwMS4xNjkuMDU0TDEwIDE2LjczNmw0Ljk3NyAzLjEwN2MuMzY2LjIyNy44MjUuMjA2IDEuMTctLjA1NC4zNDYtLjI2MS41MDctLjcxLjQxMy0xLjE0NmwtMS4yODctNS45MTQgNC4zNjUtMy45OTNjLjMyLS4yOTMuNDQxLS43NTYuMzEtMS4xOHpcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdTdGFyOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRhZ1wiOiBcIlRhZ190YWdfXzExVEVzXCIsXG5cdFwic1wiOiBcIlRhZ19zX18xUFZWLVwiLFxuXHRcIm1cIjogXCJUYWdfbV9fMmluenFcIixcblx0XCJnaG9zdFwiOiBcIlRhZ19naG9zdF9fMXV2aDZcIixcblx0XCJyZWRcIjogXCJUYWdfcmVkX18xeENfbVwiLFxuXHRcImdyZXlcIjogXCJUYWdfZ3JleV9fMVF5NkZcIixcblx0XCJncmVlblwiOiBcIlRhZ19ncmVlbl9faHBpeG5cIixcblx0XCJwcmltYXJ5XCI6IFwiVGFnX3ByaW1hcnlfXzEtU2RSXCJcbn07XG4iLCJpbXBvcnQgeyBQUHJvcHMgfSBmcm9tICcuL1RhZy5wcm9wcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGFnLm1vZHVsZS5jc3MnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgY29uc3QgVGFnID0gKHtcbiAgc2l6ZSA9ICdzJyxcbiAgY2hpbGRyZW4sXG4gIGNvbG9yID0gJ2dob3N0JyxcbiAgaHJlZixcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y24oc3R5bGVzLnRhZywgY2xhc3NOYW1lLCB7XG4gICAgICAgIFtzdHlsZXMuc106IHNpemUgPT0gJ3MnLFxuICAgICAgICBbc3R5bGVzLm1dOiBzaXplID09ICdtJyxcbiAgICAgICAgW3N0eWxlcy5naG9zdF06IGNvbG9yID09ICdnaG9zdCcsXG4gICAgICAgIFtzdHlsZXMucmVkXTogY29sb3IgPT0gJ3JlZCcsXG4gICAgICAgIFtzdHlsZXMuZ3JleV06IGNvbG9yID09ICdncmV5JyxcbiAgICAgICAgW3N0eWxlcy5ncmVlbl06IGNvbG9yID09ICdncmVlbicsXG4gICAgICAgIFtzdHlsZXMucHJpbWFyeV06IGNvbG9yID09ICdwcmltYXJ5JyxcbiAgICAgIH0pfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtocmVmID8gPGEgaHJlZj17aHJlZn0+e2NoaWxkcmVufTwvYT4gOiA8PntjaGlsZHJlbn08Lz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9IdGFnL0h0YWcnO1xyXG5leHBvcnQgKiBmcm9tICcuL0J1dHRvbi9CdXR0b24nO1xyXG5leHBvcnQgKiBmcm9tICcuL1AvUCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVGFnL1RhZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmF0aW5nL1JhdGluZyc7IiwiaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIFByb3BzV2l0aENoaWxkcmVuLFxuICBSZWFjdE5vZGUsXG4gIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJy4uL2ludGVyZmFjZXMvbWVudS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVG9wTGV2ZWxDYXRlZ29yeSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGFnZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSlNYIH0gZnJvbSAnQGJhYmVsL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJQXBwQ29udGV4dCB7XG4gIG1lbnU6IE1lbnVJdGVtW107XG4gIGZpcnN0Q2F0ZWdvcnk6IFRvcExldmVsQ2F0ZWdvcnk7XG4gIHNldE1lbnU/OiAobmV3TWVudTogTWVudUl0ZW1bXSkgPT4gdm9pZDtcbn1cbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJQXBwQ29udGV4dD4oe1xuICBtZW51OiBbXSxcbiAgZmlyc3RDYXRlZ29yeTogVG9wTGV2ZWxDYXRlZ29yeS5Db3Vyc2VzLFxufSk7XG5leHBvcnQgY29uc3QgQXBwQ29udGV4dFByb3ZpZGVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIG1lbnUsXG4gIGZpcnN0Q2F0ZWdvcnksXG59OiBQcm9wc1dpdGhDaGlsZHJlbjxJQXBwQ29udGV4dD4pOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFttZW51U3RhdGUsIHNldE1lbnVTdGF0ZV0gPSB1c2VTdGF0ZTxNZW51SXRlbVtdPihtZW51KTtcbiAgY29uc3Qgc2V0TWVudSA9IChuZXdNZW51OiBNZW51SXRlbVtdKSA9PiBzZXRNZW51U3RhdGUobmV3TWVudSk7XG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbWVudTogbWVudVN0YXRlLCBmaXJzdENhdGVnb3J5LCBzZXRNZW51IH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iLCJleHBvcnQgZW51bSBUb3BMZXZlbENhdGVnb3J5IHtcbiAgQ291cnNlcyxcbiAgU2VydmljZXMsXG4gIEJvb2tzLFxuICBQcm9kdWN0cyxcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVG9wUGFnZUFkdmFudGFnZSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIF9pZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhoRGF0YSB7XG4gIGNvdW50OiBudW1iZXI7XG4gIGp1bmlvclNhbGFyeTogbnVtYmVyO1xuICBtaWRkbGVTYWxhcnk6IG51bWJlcjtcbiAgc2VuaW9yU2FsYXJ5OiBudW1iZXI7XG4gIHVwZGF0ZWRBdDogRGF0ZTtcbiAgX2lkOiBzdHJpbmc7XG59XG5cbi8vIGV4cG9ydCBpbnRlcmZhY2UgQmxvZyB7XG4vLyAgIGgxOiBzdHJpbmc7XG4vLyAgIG1ldGFUaXRsZTogc3RyaW5nO1xuLy8gICBtZXRhRGVzY3JpcHRpb246IHN0cmluZztcbi8vICAgdmlld3M6IG51bWJlcjtcbi8vICAgX2lkOiBzdHJpbmc7XG4vLyB9XG4vL1xuLy8gZXhwb3J0IGludGVyZmFjZSBTcmF2bmlrdXMge1xuLy8gICBtZXRhVGl0bGU6IHN0cmluZztcbi8vICAgbWV0YURlc2NyaXB0aW9uOiBzdHJpbmc7XG4vLyAgIHFhczogYW55W107XG4vLyAgIF9pZDogc3RyaW5nO1xuLy8gfVxuLy9cbi8vIGV4cG9ydCBpbnRlcmZhY2UgTGVhcm5pbmdjbHViIHtcbi8vICAgbWV0YVRpdGxlOiBzdHJpbmc7XG4vLyAgIG1ldGFEZXNjcmlwdGlvbjogc3RyaW5nO1xuLy8gICBxYXM6IGFueVtdO1xuLy8gICBfaWQ6IHN0cmluZztcbi8vIH1cblxuZXhwb3J0IGludGVyZmFjZSBUb3BQYWdlTW9kZWwge1xuICBfaWQ6IHN0cmluZztcbiAgdGFnczogc3RyaW5nW107XG4gIHNlY29uZENhdGVnb3J5OiBzdHJpbmc7XG4gIGFsaWFzOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIHNlb1RleHQ6IHN0cmluZztcbiAgdGFnc1RpdGxlOiBzdHJpbmc7XG4gIG1ldGFUaXRsZTogc3RyaW5nO1xuICBtZXRhRGVzY3JpcHRpb246IHN0cmluZztcbiAgZmlyc3RDYXRlZ29yeTogVG9wTGV2ZWxDYXRlZ29yeTtcbiAgYWR2YW50YWdlczogVG9wUGFnZUFkdmFudGFnZVtdO1xuICBjcmVhdGVkQXQ6IERhdGU7XG4gIHVwZGF0ZWRBdDogRGF0ZTtcbiAgX192OiBudW1iZXI7XG4gIGhoOiBIaERhdGE7XG4gIHFhczogYW55W107XG4gIGFkZHJlc3NlczogYW55W107XG4gIGNhdGVnb3J5T246IHN0cmluZztcbiAgLy8gYmxvZzogQmxvZztcbiAgLy8gc3Jhdm5pa3VzOiBTcmF2bmlrdXM7XG4gIC8vIGxlYXJuaW5nY2x1YjogTGVhcm5pbmdjbHViO1xufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fM2w2eVBcIlxufTtcbiIsImltcG9ydCB7IEZvb3RlclByb3BzIH0gZnJvbSAnLi9Gb290ZXIucHJvcHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5tb2R1bGUuY3NzJztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogRm9vdGVyUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKGNsYXNzTmFtZSwgc3R5bGVzLmZvb3Rlcil9IHsuLi5wcm9wc30+XG4gICAgICA8ZGl2Pk93bFRvcCDCqSAyMDIwIC0ge2Zvcm1hdChuZXcgRGF0ZSgpLCAneXl5eScpfSDQktGB0LUg0L/RgNCw0LLQsCDQt9Cw0YnQuNGJ0LXQvdGLPC9kaXY+XG4gICAgICA8YSBocmVmPVwiI1wiPtCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQvtC1INGB0L7Qs9C70LDRiNC10L3QuNC1PC9hPlxuICAgICAgPGEgaHJlZj1cIiNcIj7Qn9C+0LvQuNGC0LjQutCwINC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3QvtGB0YLQuDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBIZWFkZXJQcm9wcyB9IGZyb20gJy4vSGVhZGVyLnByb3BzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLmNzcyc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoeyAuLi5wcm9wcyB9OiBIZWFkZXJQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgcmV0dXJuIDxkaXYgey4uLnByb3BzfT5IZWFkZXI8L2Rpdj47XG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIkxheW91dF93cmFwcGVyX18zSXZCeVwiLFxuXHRcImhlYWRlclwiOiBcIkxheW91dF9oZWFkZXJfXzJNMkY4XCIsXG5cdFwic2lkZWJhclwiOiBcIkxheW91dF9zaWRlYmFyX18yMDV5QVwiLFxuXHRcImJvZHlcIjogXCJMYXlvdXRfYm9keV9fM1gxX21cIixcblx0XCJmb290ZXJcIjogXCJMYXlvdXRfZm9vdGVyX18xOTZsVVwiXG59O1xuIiwiaW1wb3J0IHsgTGF5b3V0UHJvcHMgfSBmcm9tICcuL0xheW91dC5wcm9wcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tICcuL1NpZGViYXIvU2lkZWJhcic7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IHsgQXBwQ29udGV4dFByb3ZpZGVyLCBJQXBwQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvYXBwLmNvbnRleHQnO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBMYXlvdXRQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPEhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9IC8+XG4gICAgICA8U2lkZWJhciBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cbiAgICAgICAgPGRpdj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhMYXlvdXQgPSA8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+ICYgSUFwcENvbnRleHQ+KFxuICBDb21wb25lbnQ6IEZ1bmN0aW9uQ29tcG9uZW50PFQ+XG4pID0+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdpdGhMYXlvdXRDb21wb25lbnQocHJvcHM6IFQpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcHBDb250ZXh0UHJvdmlkZXIgbWVudT17cHJvcHMubWVudX0gZmlyc3RDYXRlZ29yeT17cHJvcHMuZmlyc3RDYXRlZ29yeX0+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9BcHBDb250ZXh0UHJvdmlkZXI+XG4gICAgKTtcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBTaWRlYmFyUHJvcHMgfSBmcm9tICcuL1NpZGViYXIucHJvcHMnO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uLy4uL01lbnUvTWVudSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgU2lkZWJhciA9ICh7IC4uLnByb3BzIH06IFNpZGViYXJQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5wcm9wc30+XG4gICAgICA8TWVudSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgSHRhZywgUCwgUmF0aW5nLCBUYWcgfSBmcm9tICcuLi9jb21wb25lbnRzJztcbmltcG9ydCB7IHdpdGhMYXlvdXQgfSBmcm9tICcuLi9sYXlvdXQvTGF5b3V0JztcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICcuLi9pbnRlcmZhY2VzL21lbnUuaW50ZXJmYWNlJztcblxuZnVuY3Rpb24gSG9tZSh7IGZpcnN0Q2F0ZWdvcnksIG1lbnUgfTogSG9tZVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gdXNlU3RhdGU8bnVtYmVyPig0KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SHRhZyB0YWc9XCJoMVwiPtCX0LDQs9C+0LvQvtCy0L7QujwvSHRhZz5cbiAgICAgIDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiBhcnJvdz1cInJpZ2h0XCI+XG4gICAgICAgINCa0L3QvtC/0LrQsFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIGFwcGVhcmFuY2U9XCJnaG9zdFwiIGFycm93PVwiZG93blwiPlxuICAgICAgICDQmtC90L7Qv9C60LBcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPFAgc2l6ZT1cImxcIj7QkdC+0LvRjNGI0L7QuTwvUD5cbiAgICAgIDxQPtCh0YDQtdC00L3QuNC5PC9QPlxuICAgICAgPFAgc2l6ZT1cInNcIj7QnNCw0LvQtdC90YzQutC40Lk8L1A+XG4gICAgICA8VGFnIHNpemU9XCJzXCI+R2hvc3Q8L1RhZz5cbiAgICAgIDxUYWcgc2l6ZT1cIm1cIiBjb2xvcj1cInJlZFwiPlxuICAgICAgICBSZWRcbiAgICAgIDwvVGFnPlxuICAgICAgPFRhZyBzaXplPVwic1wiIGNvbG9yPVwiZ3JlZW5cIj5cbiAgICAgICAgR3JlZW5cbiAgICAgIDwvVGFnPlxuICAgICAgPFRhZyBjb2xvcj1cInByaW1hcnlcIj5HcmVlbjwvVGFnPlxuICAgICAgPFJhdGluZyByYXRpbmc9e3JhdGluZ30gaXNFZGl0YWJsZSBzZXRSYXRpbmc9e3NldFJhdGluZ30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aExheW91dChIb21lKTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxIb21lUHJvcHM+ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBmaXJzdENhdGVnb3J5ID0gMDtcbiAgY29uc3QgeyBkYXRhOiBtZW51IH0gPSBhd2FpdCBheGlvcy5wb3N0PE1lbnVJdGVtW10+KFxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RPTUFJTiArICcvYXBpL3RvcC1wYWdlL2ZpbmQnLFxuICAgIHtcbiAgICAgIGZpcnN0Q2F0ZWdvcnk6IDAsXG4gICAgfVxuICApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZW51LFxuICAgICAgZmlyc3RDYXRlZ29yeSxcbiAgICB9LFxuICB9O1xufTtcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgbWVudTogTWVudUl0ZW1bXTtcbiAgZmlyc3RDYXRlZ29yeTogbnVtYmVyO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==