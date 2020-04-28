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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/buttons/exhibitionWindowButtons.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/buttons/exhibitionWindowButtons.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".exhibImg{\\r\\n\\r\\n}\\r\\n.exhibDwnld{\\r\\n    font-family: magazine;\\r\\n    color: black;\\r\\n    text-decoration: none;\\r\\n    font-size: 2vw;\\r\\n}\\r\\n.exhibName{\\r\\n    font-family: magazine;\\r\\n    font-size: xxx-large;\\r\\n    margin-bottom: -1vw;\\r\\n}\\r\\n.exhibInfo{\\r\\n    font-family: linuxLibertine;\\r\\n}\\r\\n.exhibCaption{\\r\\n    font-family: linuxLibertineItalic;\\r\\n    margin-top: -1em;\\r\\n}\\r\\n.exhibMainImg{\\r\\n    width: 100%;\\r\\n}\\r\\n.exhibText{\\r\\n    text-align: justify;\\r\\n    margin-left: 2vw;\\r\\n    margin-right: 2vw;\\r\\n    font-family: inputCustomFont;\\r\\n    font-size: 1vw;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/buttons/exhibitionWindowButtons.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/buttons/exhibitionWindowButtonsSm.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/buttons/exhibitionWindowButtonsSm.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@media only screen and (max-width: 768px) {\\r\\n    .exhibImg{\\r\\n        width: 100%;\\r\\n        margin-top: 3vw;\\r\\n    }\\r\\n    .exhibDwnld{\\r\\n        font-family: magazine;\\r\\n        color: black;\\r\\n        text-decoration: none;\\r\\n        font-size: 2vw;\\r\\n    }\\r\\n    .exhibName{\\r\\n        font-family: magazine;\\r\\n        font-size: xxx-large;\\r\\n        margin-bottom: -1vw;\\r\\n    }\\r\\n    .exhibInfo{\\r\\n        font-family: linuxLibertine;\\r\\n        font-size: 5vw;\\r\\n    }\\r\\n    .exhibCaption{\\r\\n        font-family: linuxLibertineItalic;\\r\\n        margin-top: -1em;\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n    .exhibMainImg{\\r\\n        width: 100%;\\r\\n    }\\r\\n    .exhibText{\\r\\n        text-align: justify;\\r\\n        margin-left: 2vw;\\r\\n        margin-right: 2vw;\\r\\n        font-family: inputCustomFont;\\r\\n        font-size: 3vw;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/buttons/exhibitionWindowButtonsSm.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/desktopIcons.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/desktopIcons.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".icon{\\r\\n    position: absolute;\\r\\n    width: 118px;\\r\\n    font-family: 'Poppins', sans-serif;\\r\\n    font-size: 2vw;\\r\\n    padding: 3px;\\r\\n  }\\r\\n  \\r\\n  .icon:hover{\\r\\n    border-style: dashed;\\r\\n    border-color: red;\\r\\n    padding: 3px;\\r\\n  }\\r\\n  .icon img{\\r\\n    display: block;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n    width: 70%;\\r\\n  }\\r\\n  .icon span{\\r\\n    text-shadow: -3px 0 white, 0 3px white, 4px 0 white, 0 -3px white;    font-weight: 900;\\r\\n      font-size: 72%;\\r\\n      padding: 2px;\\r\\n  }\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/desktopIcons/desktopIcons.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/desktopIconsSm.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/desktopIconsSm.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@media only screen and (max-width: 768px) {\\r\\n    .icon {\\r\\n        position: absolute;\\r\\n        width: 118px;\\r\\n        font-family: 'Poppins', sans-serif;\\r\\n        font-size: 7vw;\\r\\n        padding: 3px;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/desktopIcons/desktopIconsSm.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/icons/about.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/icons/about.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".imgAbout{\\r\\n    width: 70%;\\r\\n}\\r\\n.textAbout{\\r\\n    font-family: inputCustomFont;\\r\\n    margin-right: 2vw;\\r\\n    margin-left: 2vw;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 768px) {\\r\\n    .imgAbout{\\r\\n        width: 100%;\\r\\n    }\\r\\n    .textAbout{\\r\\n        font-size: 3vw;\\r\\n        font-family: inputCustomFont;\\r\\n        margin-right: 2vw;\\r\\n        margin-left: 2vw;\\r\\n    }    \\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/desktopIcons/icons/about.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/icons/exhibitions.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/icons/exhibitions.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\r\\n/* .exhibWinitemList:nth-of-type(1){\\r\\n    margin-top: 100px;\\r\\n    }\\r\\n     */\\r\\n    .exhibWinitemList {\\r\\n        width: 54%;\\r\\n        padding: 2vw;\\r\\n        margin: auto;\\r\\n        transition: 0.3s;\\r\\n    }\\r\\n    \\r\\n    .exhibWinitemList:hover {\\r\\n        width: 70%;\\r\\n    }\\r\\n    \", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/desktopIcons/icons/exhibitions.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/icons/mailingList.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/icons/mailingList.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".addMailForm {\\r\\n    margin: 3vw;\\r\\n    line-height: 5vw;\\r\\n}\\r\\n\\r\\n.addMailForm #emailInput{\\r\\n    background-color: red;\\r\\n    font-size: 3vw;\\r\\n    padding: 2vw;\\r\\n    font-family: inputCustomFont;\\r\\n    border-style: solid;\\r\\n}\\r\\n\\r\\n.addMailForm #button{\\r\\n    font-family: sansforgetica;\\r\\n    border-style: solid;\\r\\n    padding: 1vw;\\r\\n    background-color: red;\\r\\n    margin: 2vw;\\r\\n}\\r\\n\\r\\n.addMailForm #emailMsgBox{\\r\\n    font-family: inputCustomFont;\\r\\n    font-size: 2vw;\\r\\n    color: red;\\r\\n    margin: 3vw;\\r\\n}\\r\\n.addMailForm #title{\\r\\n    font-family: magazine;\\r\\n    font-size: 5vw;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 768px) {\\r\\n    .addMailForm {\\r\\n        margin: 3vw;\\r\\n        line-height: 5vw;\\r\\n    }\\r\\n    \\r\\n    .addMailForm #emailInput{\\r\\n        background-color: red;\\r\\n        width: 100%;\\r\\n        font-size: 5vw;\\r\\n        padding: 2vw;\\r\\n        font-family: inputCustomFont;\\r\\n        border-style: solid;\\r\\n    }\\r\\n    \\r\\n    .addMailForm #button{\\r\\n        font-family: sansforgetica;\\r\\n        border-style: solid;\\r\\n        padding: 1vw;\\r\\n        background-color: red;\\r\\n        margin: 2vw;\\r\\n        font-size: 4vh;\\r\\n    }\\r\\n    \\r\\n    .addMailForm #emailMsgBox{\\r\\n        font-family: inputCustomFont;\\r\\n        font-size: 4vh;\\r\\n        color: red;\\r\\n        margin: 3vw;\\r\\n        line-height: 5vh;\\r\\n    }\\r\\n    .addMailForm #title{\\r\\n        font-family: magazine;\\r\\n        font-size: 14vw;\\r\\n        letter-spacing: 0vh;\\r\\n        line-height: 6vh;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/desktopIcons/icons/mailingList.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/positions.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/positions.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#about{\\r\\n    top: 69%;\\r\\n    left: 26%;\\r\\n}\\r\\n#exhib{\\r\\n    top: 10%;\\r\\n    left: 30%;\\r\\n}\\r\\n#gVillani{\\r\\n    top: 32%;\\r\\n    left: 59%;\\r\\n}\\r\\n#mailList{\\r\\n    top: 65%;\\r\\n    left: 55%;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/desktopIcons/positions.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/positionsSm.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/positionsSm.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@media only screen and (max-width: 768px) {\\r\\n    #about{\\r\\n        top: 69%;\\r\\n        left: 6%;\\r\\n    }\\r\\n    #exhib{\\r\\n        top: 10%;\\r\\n        left: 50%;\\r\\n    }\\r\\n    #gVillani{\\r\\n        top: 3%;\\r\\n        left: 4%;\\r\\n    }\\r\\n    #mailList{\\r\\n        top: 78%;\\r\\n        left: 55%;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/desktopIcons/positionsSm.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fonts.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./fonts/SansForgetica.woff */ \"./src/fonts/SansForgetica.woff\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./fonts/Input.ttf */ \"./src/fonts/Input.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./fonts/Magazine.ttf */ \"./src/fonts/Magazine.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./fonts/Lin-Libertine.ttf */ \"./src/fonts/Lin-Libertine.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ./fonts/LinuxLibertine.ttf */ \"./src/fonts/LinuxLibertine.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\n// Module\nexports.push([module.i, \"@font-face {\\r\\n    font-family: sansforgetica;\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n@font-face {\\r\\n    font-family: inputCustomFont;\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n@font-face {\\r\\n    font-family: magazine;\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n}\\r\\n@font-face {\\r\\n    font-family: linuxLibertine;\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\r\\n}\\r\\n@font-face {\\r\\n    font-family: linuxLibertineItalic;\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/fonts.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body{\\r\\n    font-size: 1.3vw;\\r\\n    background-color: #ffffff;\\r\\n    background-image: url(\\\"data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\\\");\\r\\n    background-size: 150px;\\r\\n    \\r\\n  }\\r\\n\\r\\n  .imgSfondo{\\r\\n    position: fixed;\\r\\n    width: 24%;\\r\\n    left: 33%;\\r\\n    top: 5%;\\r\\n    background: white;\\r\\n    padding: 1%;\\r\\n    border-style: double;\\r\\n    border-color: black;\\r\\n    border-width: 6px;\\r\\n    /* border-color: white; */\\r\\n  }\\r\\n\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/mainSm.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/mainSm.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@media only screen and (max-width: 768px) {\\r\\n    body{\\r\\n      font-size: 1.3vw;\\r\\n      background-color: red;\\r\\n      background-image: url(\\\"data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\\\");\\r\\n      background-size: 80%;\\r\\n    }\\r\\n    .imgSfondo {\\r\\n      position: fixed;\\r\\n      width: 64%;\\r\\n      left: 14%;\\r\\n      top: 14%;\\r\\n      background: white;\\r\\n      padding: 1%;\\r\\n      border-style: double;\\r\\n      border-color: black;\\r\\n      border-width: 6px;\\r\\n      /* border-color: white; */\\r\\n  }\\r\\n  \\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/mainSm.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/window/window.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/window/window.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\r\\n.window{\\r\\n  position: absolute;\\r\\n  width: 59%;\\r\\n  height: 655px;\\r\\n  /* opacity: 96%; */\\r\\n  border-style: solid;\\r\\n  background-color: white;\\r\\n  }\\r\\n  \\r\\n  .wHeader{\\r\\n    border-bottom-style: solid;\\r\\n    padding: 4px;\\r\\n    font-size: 2vw;\\r\\n    cursor: grab;\\r\\n    font-family: sansforgetica;\\r\\n  }\\r\\n  .wHeader:hover{\\r\\n    color: white;\\r\\n    background-color: red;\\r\\n    font-family: sansforgetica;\\r\\n  }\\r\\n  .close{\\r\\n    float: right;\\r\\n    margin-right: 2px;\\r\\n    cursor: context-menu;\\r\\n    font-family: sansforgetica;\\r\\n  }\\r\\n  \\r\\n  \\r\\n      \\r\\n    .wContent{\\r\\n      max-height: 584px;\\r\\n      overflow: auto;\\r\\n    }\\r\\n\\r\\n  .dragIcon{\\r\\n    visibility: hidden;\\r\\n    width: 0%;\\r\\n  }\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/window/window.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/window/windowScrollBar.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/window/windowScrollBar.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\r\\n  \\r\\n  /* width */\\r\\n  ::-webkit-scrollbar {\\r\\n    width: 11px;\\r\\n    background-color: black;\\r\\n    border-style: solid;\\r\\n    border-color: white;\\r\\n    border-width: thick;\\r\\n  }\\r\\n\\r\\n  /* Handle */\\r\\n  ::-webkit-scrollbar-thumb {\\r\\n    background: black;\\r\\n      border-style: solid;\\r\\n      border-width: thick;\\r\\n      border-color: white; \\r\\n  }\\r\\n  \\r\\n  /* Handle on hover */\\r\\n  ::-webkit-scrollbar-thumb:hover {\\r\\n    background: red;\\r\\n      border-style: solid;\\r\\n      border-width: thick;\\r\\n      border-color: white; \\r\\n  }\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/window/windowScrollBar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/window/windowSm.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/window/windowSm.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@media only screen and (max-width: 768px) {\\r\\n    .window {\\r\\n        position: absolute;\\r\\n        width: 79%;\\r\\n        height: 494px;\\r\\n        /* opacity: 96%; */\\r\\n        border-style: solid;\\r\\n        background-color: white;\\r\\n    }\\r\\n\\r\\n    .wHeader {\\r\\n        border-bottom-style: solid;\\r\\n        padding: 4px;\\r\\n        font-size: 5vw;\\r\\n        cursor: grab;\\r\\n        font-family: sansforgetica;\\r\\n    }\\r\\n    .wHeader:hover {\\r\\n        border-bottom-style: solid;\\r\\n        padding: 4px;\\r\\n        font-size: 5vw;\\r\\n        cursor: grab;\\r\\n        font-family: sansforgetica;\\r\\n    }\\r\\n\\r\\n    .title{\\r\\n        color: red;\\r\\n    }\\r\\n\\r\\n    .close{\\r\\n        color: red;\\r\\n    }\\r\\n\\r\\n    .wContent {\\r\\n        max-height: 461px;\\r\\n        overflow-y: scroll;\\r\\n        -ms-overflow-style: none;\\r\\n    }\\r\\n    .wContent::-webkit-scrollbar {\\r\\n        display: none;\\r\\n      }\\r\\n    .dragIcon{\\r\\n        width: 16px;\\r\\n        visibility: visible;\\r\\n      }\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/window/windowSm.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/buttons/exhibitionWindowButtons.css":
/*!*************************************************!*\
  !*** ./src/buttons/exhibitionWindowButtons.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./exhibitionWindowButtons.css */ \"./node_modules/css-loader/dist/cjs.js!./src/buttons/exhibitionWindowButtons.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/buttons/exhibitionWindowButtons.css?");

/***/ }),

/***/ "./src/buttons/exhibitionWindowButtons.js":
/*!************************************************!*\
  !*** ./src/buttons/exhibitionWindowButtons.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/globals */ \"./src/globals/globals.js\");\n/* harmony import */ var _window_windowManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../window/windowManager */ \"./src/window/windowManager.js\");\n/* harmony import */ var _exhibitionWindowButtons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exhibitionWindowButtons.css */ \"./src/buttons/exhibitionWindowButtons.css\");\n/* harmony import */ var _exhibitionWindowButtons_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_exhibitionWindowButtons_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _exhibitionWindowButtonsSm_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exhibitionWindowButtonsSm.css */ \"./src/buttons/exhibitionWindowButtonsSm.css\");\n/* harmony import */ var _exhibitionWindowButtonsSm_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_exhibitionWindowButtonsSm_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (id) {\n  var currentExhib;\n  _globals_globals__WEBPACK_IMPORTED_MODULE_0__[\"default\"].exhibitions.list.forEach(function (exhib) {\n    if (exhib.nome === id) {\n      currentExhib = exhib;\n    }\n  });\n  var totImgs = currentExhib.images.total;\n  var counter = 1;\n  var imgList = '';\n\n  while (counter <= totImgs) {\n    imgList += \"<img class=\\\"exhibImg\\\" src=\\\"\".concat(_globals_globals__WEBPACK_IMPORTED_MODULE_0__[\"default\"].exhibitions.mainFolder, \"/\").concat(currentExhib.images.key, \"/gallery/\").concat(_globals_globals__WEBPACK_IMPORTED_MODULE_0__[\"default\"].exhibitions.fileStruct(counter), \"\\\" />\");\n    counter++;\n  }\n\n  var downloadList = currentExhib.downloads.map(function (path) {\n    return \"<a class=\\\"exhibDwnld\\\" class=\\\"subBtn\\\" href=\\\"\".concat(_globals_globals__WEBPACK_IMPORTED_MODULE_0__[\"default\"].exhibitions.mainFolder, \"/\").concat(currentExhib.images.key, \"/download/\").concat(path, \"\\\" target = \\\"blank\\\"  align=\\\"center\\\">\").concat(path, \"</a><br>\");\n  }).join('<br>');\n  var winContent = \"\\n        <div align = \\\"center\\\">\\n        <h1 class=\\\"exhibName\\\" align=\\\"center\\\">\".concat(currentExhib.nome, \"</h1>\\n        <h3 class=\\\"exhibInfo\\\" align=\\\"center\\\">\").concat(currentExhib.info, \"</h3>\\n        <h5 class=\\\"exhibCaption\\\" align=\\\"center\\\">\").concat(currentExhib.caption, \"</h5>\\n        <img class=\\\"exhibMainImg\\\" src=\\\"\").concat(_globals_globals__WEBPACK_IMPORTED_MODULE_0__[\"default\"].exhibitions.mainFolder, \"/\").concat(currentExhib.images.key, \"/main.jpg\\\" />\\n        <p class=\\\"exhibText\\\">\").concat(currentExhib.corpoTesto.replace(/\\.+/gm, '.<br>'), \"</p>\\n        \").concat(downloadList, \"\\n        \").concat(imgList, \"\\n        </div>\\n    \");\n  var media = window.matchMedia('(max-width: 768px)');\n\n  if (media.matches) {\n    $.post('/exhibPageMobile', {\n      arg: winContent\n    }, function (data) {\n      console.log('redirecting');\n      window.location.replace(window.location.href + \"exhibition\");\n    });\n  } else {\n    _window_windowManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].creaWindow(winContent, currentExhib.nome, function (window) {\n      _window_windowManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].manage('onTop', window);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/buttons/exhibitionWindowButtons.js?");

/***/ }),

/***/ "./src/buttons/exhibitionWindowButtonsSm.css":
/*!***************************************************!*\
  !*** ./src/buttons/exhibitionWindowButtonsSm.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./exhibitionWindowButtonsSm.css */ \"./node_modules/css-loader/dist/cjs.js!./src/buttons/exhibitionWindowButtonsSm.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/buttons/exhibitionWindowButtonsSm.css?");

/***/ }),

/***/ "./src/desktopIcons/desktopIcons.css":
/*!*******************************************!*\
  !*** ./src/desktopIcons/desktopIcons.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./desktopIcons.css */ \"./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/desktopIcons.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/desktopIcons/desktopIcons.css?");

/***/ }),

/***/ "./src/desktopIcons/desktopIcons.js":
/*!******************************************!*\
  !*** ./src/desktopIcons/desktopIcons.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _icons_exhibitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/exhibitions */ \"./src/desktopIcons/icons/exhibitions.js\");\n/* harmony import */ var _icons_gVillani__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/gVillani */ \"./src/desktopIcons/icons/gVillani.js\");\n/* harmony import */ var _icons_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/about */ \"./src/desktopIcons/icons/about.js\");\n/* harmony import */ var _icons_mailingList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/mailingList */ \"./src/desktopIcons/icons/mailingList.js\");\n/* harmony import */ var _desktopIcons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desktopIcons.css */ \"./src/desktopIcons/desktopIcons.css\");\n/* harmony import */ var _desktopIcons_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_desktopIcons_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _desktopIconsSm_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desktopIconsSm.css */ \"./src/desktopIcons/desktopIconsSm.css\");\n/* harmony import */ var _desktopIconsSm_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_desktopIconsSm_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _positions_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./positions.css */ \"./src/desktopIcons/positions.css\");\n/* harmony import */ var _positions_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_positions_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _positionsSm_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./positionsSm.css */ \"./src/desktopIcons/positionsSm.css\");\n/* harmony import */ var _positionsSm_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_positionsSm_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  Object(_icons_exhibitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_icons_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_icons_gVillani__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_icons_mailingList__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  var media = window.matchMedia('(max-width: 768px)');\n\n  if (media.matches) {} else {\n    $('.icon').draggable();\n  }\n});\n\n//# sourceURL=webpack:///./src/desktopIcons/desktopIcons.js?");

/***/ }),

/***/ "./src/desktopIcons/desktopIconsSm.css":
/*!*********************************************!*\
  !*** ./src/desktopIcons/desktopIconsSm.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./desktopIconsSm.css */ \"./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/desktopIconsSm.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/desktopIcons/desktopIconsSm.css?");

/***/ }),

/***/ "./src/desktopIcons/icons/about.css":
/*!******************************************!*\
  !*** ./src/desktopIcons/icons/about.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./about.css */ \"./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/icons/about.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/desktopIcons/icons/about.css?");

/***/ }),

/***/ "./src/desktopIcons/icons/about.js":
/*!*****************************************!*\
  !*** ./src/desktopIcons/icons/about.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _window_windowManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../window/windowManager */ \"./src/window/windowManager.js\");\n/* harmony import */ var _globals_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals/globals */ \"./src/globals/globals.js\");\n/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.css */ \"./src/desktopIcons/icons/about.css\");\n/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_about_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  $('body').append(\"\\n    <div class=\\\"icon\\\" id=\\\"about\\\" >\\n        <img src=\\\"desktopIcons/about.svg\\\" alt=\\\"\\\" >\\n        <span class=\\\"iconText\\\" >ABOUT.eo</span>\\n    </div>\\n    \");\n  $('#about').on('click touchstart', function () {\n    _window_windowManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creaWindow(_globals_globals__WEBPACK_IMPORTED_MODULE_1__[\"default\"].about.body, 'about');\n  });\n});\n\n//# sourceURL=webpack:///./src/desktopIcons/icons/about.js?");

/***/ }),

/***/ "./src/desktopIcons/icons/exhibitions.css":
/*!************************************************!*\
  !*** ./src/desktopIcons/icons/exhibitions.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./exhibitions.css */ \"./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/icons/exhibitions.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/desktopIcons/icons/exhibitions.css?");

/***/ }),

/***/ "./src/desktopIcons/icons/exhibitions.js":
/*!***********************************************!*\
  !*** ./src/desktopIcons/icons/exhibitions.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _window_windowManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../window/windowManager */ \"./src/window/windowManager.js\");\n/* harmony import */ var _globals_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals/globals */ \"./src/globals/globals.js\");\n/* harmony import */ var _buttons_exhibitionWindowButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../buttons/exhibitionWindowButtons */ \"./src/buttons/exhibitionWindowButtons.js\");\n/* harmony import */ var _exhibitions_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exhibitions.css */ \"./src/desktopIcons/icons/exhibitions.css\");\n/* harmony import */ var _exhibitions_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_exhibitions_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  $('body').append(\"\\n    <div class=\\\"icon\\\" id=\\\"exhib\\\"  style=\\\"\\\" >\\n        <img src=\\\"desktopIcons/exhibitions.svg\\\" alt=\\\"\\\" >\\n        <span class=\\\"iconText\\\" >exhibitions.eo</span>\\n    </div>\\n    \");\n  $('#exhib').on('click touchstart', function () {\n    _window_windowManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creaWindow('', 'exhibitions', function (window) {\n      _globals_globals__WEBPACK_IMPORTED_MODULE_1__[\"default\"].exhibitions.list.forEach(function (exh) {\n        var exhibStructId = exh.nome.replace(/\\s/gm, '8');\n        console.log(exhibStructId); // let exhibStruct = `\n        //     <div class=\"exhibWinitemList\" id=\"${exhibStructId}\">\n        //     <h2>${exh.nome}</h2>\n        //     <p>${exh.caption}</p>\n        //     <h4>${exh.data}</h4>\n        //     </div>\n        //     <img class=\"exhibWinitemListImg\" src=\"${globals.exhibitions.mainFolder}/${exh.images.key}/main.jpg\" />\n        // `;\n\n        var exhibStruct = \"\\n                    <div class=\\\"exhibWinitemList\\\" id=\\\"\".concat(exhibStructId, \"\\\">\\n                    <img src=\\\"\").concat(_globals_globals__WEBPACK_IMPORTED_MODULE_1__[\"default\"].exhibitions.iconsFolder, \"/\").concat(exh.icon, \"\\\"/>\\n                    </div>\\n                    \");\n        $('#wContent' + window.id).append(exhibStruct);\n        $('#' + exhibStructId).on('click touchstart', function () {\n          Object(_buttons_exhibitionWindowButtons__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(exhibStructId.replace(/8+/gm, ' '));\n        });\n      });\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/desktopIcons/icons/exhibitions.js?");

/***/ }),

/***/ "./src/desktopIcons/icons/gVillani.js":
/*!********************************************!*\
  !*** ./src/desktopIcons/icons/gVillani.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _window_windowManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../window/windowManager */ \"./src/window/windowManager.js\");\n/* harmony import */ var _globals_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals/globals */ \"./src/globals/globals.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  $('body').append(\"\\n    <div class=\\\"icon\\\" id=\\\"gVillani\\\"  >\\n        <img src=\\\"desktopIcons/stocastica.svg\\\" alt=\\\"\\\" >\\n        <span class=\\\"iconText\\\" >GioeleVillani.eo</span>\\n    </div>\\n    \");\n  var gVillaniWindowExist = false;\n  var gVillaniInfoButton = '<span  id=\"gVillainInfo\"  style=\"font-size: 17px;cursor: help; padding:3px;\">info</span>';\n  $('#gVillani').on('click', function () {\n    while (gVillaniWindowExist === false) {\n      _window_windowManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creaWindow('<div id=\"TARGET_ID\"></div>', 'Gioele Villani  ' + gVillaniInfoButton, function (window) {\n        $(\"#\".concat(window.id, \"_cbtn\")).on('click', function () {\n          gVillaniWindowExist = false;\n        });\n        $('#gVillainInfo').on('click', function () {\n          _window_windowManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creaWindow(_globals_globals__WEBPACK_IMPORTED_MODULE_1__[\"default\"].customs.infoGioeleVillani, 'Gioele Villani');\n        });\n      });\n      startP5Program();\n      gVillaniWindowExist = true;\n    }\n\n    console.log({\n      gVillaniWindowExist: gVillaniWindowExist\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/desktopIcons/icons/gVillani.js?");

/***/ }),

/***/ "./src/desktopIcons/icons/mailingList.css":
/*!************************************************!*\
  !*** ./src/desktopIcons/icons/mailingList.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./mailingList.css */ \"./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/icons/mailingList.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/desktopIcons/icons/mailingList.css?");

/***/ }),

/***/ "./src/desktopIcons/icons/mailingList.js":
/*!***********************************************!*\
  !*** ./src/desktopIcons/icons/mailingList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _window_windowManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../window/windowManager */ \"./src/window/windowManager.js\");\n/* harmony import */ var _mailingList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mailingList.css */ \"./src/desktopIcons/icons/mailingList.css\");\n/* harmony import */ var _mailingList_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mailingList_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  $('body').append(\"\\n    <div class=\\\"icon\\\" id=\\\"mailList\\\" >\\n        <img src=\\\"desktopIcons/mailingList.svg\\\" alt=\\\"\\\" >\\n        <span class=\\\"iconText\\\" >MailList.eo</span>\\n    </div>\\n    \");\n  $('#mailList').on('click', function () {\n    _window_windowManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creaWindow(\"\\n        <div class=\\\"addMailForm\\\" align=\\\"center\\\">\\n            <span id=\\\"title\\\">ADD TO MAILING LIST</span>\\n            <br>\\n            <input type=\\\"text\\\" id=\\\"emailInput\\\" placeholder=\\\"write here you email\\\" autofocus>\\n            <br><br><br>\\n            <span id=\\\"button\\\">add</span>\\n            <div id=\\\"emailMsgBox\\\"></div>\\n        </div>\\n        \", 'studioeo mailing list', function (w) {\n      $('.addMailForm #button').on('click', function () {\n        $.post('/addMail', {\n          email: $('#emailInput').val()\n        }, function (res) {\n          $('#emailMsgBox').empty().append(function () {\n            if (!res.isValid) {\n              return res.email + ' is not a valid email';\n            }\n\n            if (res.isPresent) {\n              return res.email + ' already in our mailing list =)';\n            }\n\n            if (!res.isPresent && res.isValid) {\n              return res.email + ' added to our mailing list =)';\n            }\n          });\n        });\n      });\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/desktopIcons/icons/mailingList.js?");

/***/ }),

/***/ "./src/desktopIcons/positions.css":
/*!****************************************!*\
  !*** ./src/desktopIcons/positions.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./positions.css */ \"./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/positions.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/desktopIcons/positions.css?");

/***/ }),

/***/ "./src/desktopIcons/positionsSm.css":
/*!******************************************!*\
  !*** ./src/desktopIcons/positionsSm.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./positionsSm.css */ \"./node_modules/css-loader/dist/cjs.js!./src/desktopIcons/positionsSm.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/desktopIcons/positionsSm.css?");

/***/ }),

/***/ "./src/fonts.css":
/*!***********************!*\
  !*** ./src/fonts.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./fonts.css */ \"./node_modules/css-loader/dist/cjs.js!./src/fonts.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/fonts.css?");

/***/ }),

/***/ "./src/fonts/Input.ttf":
/*!*****************************!*\
  !*** ./src/fonts/Input.ttf ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Input.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/Input.ttf?");

/***/ }),

/***/ "./src/fonts/Lin-Libertine.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Lin-Libertine.ttf ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Lin-Libertine.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/Lin-Libertine.ttf?");

/***/ }),

/***/ "./src/fonts/LinuxLibertine.ttf":
/*!**************************************!*\
  !*** ./src/fonts/LinuxLibertine.ttf ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/LinuxLibertine.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/LinuxLibertine.ttf?");

/***/ }),

/***/ "./src/fonts/Magazine.ttf":
/*!********************************!*\
  !*** ./src/fonts/Magazine.ttf ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Magazine.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/Magazine.ttf?");

/***/ }),

/***/ "./src/fonts/SansForgetica.woff":
/*!**************************************!*\
  !*** ./src/fonts/SansForgetica.woff ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/SansForgetica.woff\");\n\n//# sourceURL=webpack:///./src/fonts/SansForgetica.woff?");

/***/ }),

/***/ "./src/globals/about.js":
/*!******************************!*\
  !*** ./src/globals/about.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  body: \"<p align=\\\"center\\\">\\n    <img class=\\\"imgAbout\\\" src=\\\"logo-studioeo.png\\\"><br>\\n    <p class=\\\"textAbout\\\" align=\\\"left\\\">\\n    <strong>Studioeo</strong> \\xE8 uno spazio di sperimentazione ibrido: uno studio d\\u2019arte concepito per essere anche spazio espositivo, mosso da un'appassionata tendenza alla contaminazione tra discipline e dalla patologica necessit\\xE0 di spingere l'arte contemporanea al di fuori dei limiti autoimposti. \\n    Ha costruito una prassi che pone sullo stesso piano la produzione artistica e la curatela attraverso esperienze site-specific e collaborazioni, caratterizzate da una puntigliosa attenzione al display e dalla necessit\\xE0 di includere in mostra non tanto l'opera come prodotto finito ma come parte di un processo, esplicitando e criticizzando i meccanismi fondamentali della produzione artistica, in opposizione a ogni manierismo e autoreferenzialit\\xE0.\\n    </p>\\n    </p>\"\n});\n\n//# sourceURL=webpack:///./src/globals/about.js?");

/***/ }),

/***/ "./src/globals/customs/infoGvillani.js":
/*!*********************************************!*\
  !*** ./src/globals/customs/infoGvillani.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ('info gio');\n\n//# sourceURL=webpack:///./src/globals/customs/infoGvillani.js?");

/***/ }),

/***/ "./src/globals/exhibitions/MAINexhib.js":
/*!**********************************************!*\
  !*** ./src/globals/exhibitions/MAINexhib.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _disaccordi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disaccordi */ \"./src/globals/exhibitions/disaccordi.js\");\n/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster */ \"./src/globals/exhibitions/monster.js\");\n/* harmony import */ var _orogenesi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orogenesi */ \"./src/globals/exhibitions/orogenesi.js\");\n/* harmony import */ var _scenari__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenari */ \"./src/globals/exhibitions/scenari.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  list: [_disaccordi__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _monster__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _orogenesi__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _scenari__WEBPACK_IMPORTED_MODULE_3__[\"default\"]],\n  fileStruct: function fileStruct(number) {\n    return number + '.jpg';\n  },\n  mainFolder: 'exhibitions',\n  iconsFolder: 'icons'\n});\n\n//# sourceURL=webpack:///./src/globals/exhibitions/MAINexhib.js?");

/***/ }),

/***/ "./src/globals/exhibitions/disaccordi.js":
/*!***********************************************!*\
  !*** ./src/globals/exhibitions/disaccordi.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  nome: \"Disaccordi\",\n  info: \"Progetto di Massimo Bartolini, a cura di Mariateresa Lattarulo e Carolina Mancini, con Cristina Masturzo.\",\n  corpoTesto: \"«Una successione di accordi ha la funzione di stabilire o contraddire una tonalità» Arnold Schönberg. Non confinato alla sua conclusa rifinitezza, ma esteso al processo di ricerca di intonazione, l’atto di accordare getta chi ascolta in un limbo, in attesa che qualcosa accada e arrivi l’armonia. Disaccordi si presenta come un utopico e reiterato tentativo di trovare l’accordo in grado di armonizzare, sonoramente e visivamente, le opere in mostra. La molteplicità dei suoni e delle forme afferma, e subito contraddice, la consonanza, che appare non coordinata ed anarchica. Come il diesis, il bemolle e il bequadro alterano il tono di una frase musicale o di una singola nota, le opere degli artisti si presentano come oggetti alterati in dispositivi suonanti e strumenti musicali trasformati in oggetti scultorei. Riflettendo sulla forma degli strumenti, determinata in gran parte dalla necessità di produrre un certo tipo di suono, le opere testimoniano la costante inclinazione ad eliminare o modificare la funzionalità di partenza. La scomposizione dell’elemento musicale, che coinvolge le sonorità, le forme che ne permettono l’emissione e la natura storica e simbolica dello strumento, supera la distinzione tra suono, rumore, aspetto e funzione. Si lascia spazio alla sperimentazione di nuove forme e nuove risonanze, attraverso la liberazione da armonie, vincoli tonali e gerarchie di sorta. Se alcune opere suonano senza intervento umano, altre si attivano solo grazie all’interazione con lo spettatore. Altri strumenti, invece, appaiono privati della loro capacità di emissione, mettendo in risalto la presenza di un inconsueto e inaspettato silenzio. Disaccordi coinvolge lo spettatore nell’articolazione di suoni eterogenei, originati da oggetti, dispositivi, tradizioni e ascendenze funzionali differenti, esaltando le molteplici possibilità di sperimentazione sonora. Si ringrazia Naba, Nuova Accademia delle Belle Arti di Milano.\",\n  credits: \"Artisti: Carmine Agosto, Maria Chiara Baccanelli, Isabella Boghetti, Cai Mingui, Federico Catagnoli, Oliviero Fiorenzi, Mafalda Galessi, Carlo Gambirasio, Hsu Anju, Benedetta Incerti, Kim Yoogin, Li Yiran, Edoardo Manzoni, Sebastiano Pala, Elena Perugi, Manuela Piccolo, Song Ge, Emanuele Tira, Francesco Tola, Adriana Tomatis, Mauro Valsecchi, Wang Ziyao, Zhao Jiajia ZhuQingwen. Curatori: Antonia Algieri, Lisa Barbieri, Andrea Bassan, Chiara Cavina, Veronica Franzoni, Mariateresa Lattarulo, Carolina Mancini, Beatrice Mantovani, Giada Olivotto, Laura Pessina, Roberta Riccio, Daniela Sangiorgio, Flavia Scirè, Xie Yu Meng, Ezgi Yurteri. Progetto grafico: Ilaria Pittassi.\",\n  caption: \"collettiva del II anno di Studi Curatoriali, NABA\",\n  data: \"18 luglio 2018\",\n  images: {\n    key: \"disaccordi\",\n    total: 13\n  },\n  downloads: ['DISACCORDI_Catalogo.pdf'],\n  icon: 'disaccordi.svg'\n});\n\n//# sourceURL=webpack:///./src/globals/exhibitions/disaccordi.js?");

/***/ }),

/***/ "./src/globals/exhibitions/monster.js":
/*!********************************************!*\
  !*** ./src/globals/exhibitions/monster.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  nome: \"Monster of Saline\",\n  info: \"INSERIRE INFO MOSTER OF SALINE\",\n  corpoTesto: \"Monster of saline è un progetto del collettivo Autonomia Artistica che ci conduce in un viaggio nell'assurdo mondo dell'abusivismo edilizio all’italiana, raccontandoci attraverso documenti, oggetti e installazioni la strana vicenda del complesso industriale Liquichimica Biosintesi di Saline Joniche (comune di Montebello, provincia di Reggio Calabria) che con la sua torre da 174 metri sembra incarnare in una sola colata di cemento tutte le contraddizioni e le problematiche di cui è stata, e continua a essere, protagonista la Calabria. Lo sguardo degli artisti ci guida in una esplorazione né lineare né clinica del luogo e del complesso sottobosco socio-politico che ne ha reso possibile l’esistenza, e proprio grazie a questa spontaneità, riesce a coglierne gli aspetti più viscerali. “Ci siamo imbattuti in maniera pressoché casuale nel complesso industriale, percorrendo la SS 106. Abbiamo accostato e siamo entrati. Ciò che si è aperto davanti ai nostri occhi è apparso subito devastante: armature incendiate - più o meno dolosamente -, vetri ovunque, ferri arrugginiti,  scheletri di strutture logorate dal tempo e dell'abbandono. Ovunque sembrava emergere una continua guerra tra la natura e l'uomo, con la prima che tentava di riappropriarsi di ciò che le era stato tolto.” La sensazione che sopravviene nel costeggiare l’ex struttura industriale fa precipitare il visitatore in uno scenario apocalittico, un immaginario che riesce da solo a esplicare l’assenza dello Stato nel meridione italiano. Per rievocare questo immaginario la mostra è concepita in modo organico, come una grande installazione ambientale sinestesica, in cui lo spazio stesso diventa fondamentale per definire il contesto della narrazione visuale. Una narrazione fortemente soggettiva, discontinua, emotiva, il racconto semi-onirico di una vicenda improbabile, quasi incredibile, che trova però riscontro nell'accurato lavoro di ricerca. La ricerca stessa entra a far parte dell’opera sotto forma di archivio, con l’obbiettivo di fornire al visitatore strumenti di lettura e domande, prima che risposte. “cosa rende una regione arretrata rispetto alle altre? chi incatena le persone ad una esistenza di disoccupazione e marginalità sociale? Chi rende l'affiliazione alla 'ndrangheta una delle poche certezze lavorative in certi territori?” Raccontare l'odissea del Mostro delle saline diventa espediente per riaprire un discorso più ampio sulla gestione del patrimonio ambientale del nostro paese e sviluppare un nuovo punto di critica. Essere catalizzatori di una più spiccata coscienza dell'ambiente circostante e delle condizioni imposte a chi lo abita.\",\n  credits: \"Artisti: Autonomia Artistica. Curatori: Flavia Scirè, Carlo Gambirasio. Progetto grafico: Carlo Gambirasio.\",\n  caption: \"Autonomia Artistica\",\n  data: \"11 ottobre | 18 ottobre  2019\",\n  images: {\n    key: \"monster\",\n    total: 26\n  },\n  downloads: ['Monster of Saline cominicato stampa.pdf', 'Moster of Saline foglio di sala.pdf'],\n  icon: 'moster.svg'\n});\n\n//# sourceURL=webpack:///./src/globals/exhibitions/monster.js?");

/***/ }),

/***/ "./src/globals/exhibitions/orogenesi.js":
/*!**********************************************!*\
  !*** ./src/globals/exhibitions/orogenesi.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  nome: \"Orogenesi Suburbana\",\n  info: \"Un’indagine del quartiere Giambellino\",\n  corpoTesto: \"Orogenesi Suburbana è una formula di creazione artistica che adotta la forma della micro-residenza. E' un’azione dolorosamente consapevole che l’arte, con i suoi meccanismi, le sue gallerie e il suo mercato, sia fra i primi portatori del germe del glamour bohémien, inserendosi nelle realtà locali come un deus ex machina. Per questo l’intenzione è di sviluppare un approccio artistico antropologico, che non si propone di “reinterpretare” il territorio ma, prima di tutto, di imparare a leggerlo e interpretarlo. Gli artisti vivranno dentro Studioeo, che sarà il campo base dal quale far esplodere le ricerche. Documentando le proprie derive, ogni artista sarà libero di muoversi nel territorio senza alcun vincolo tematico o temporale, ma con un unico task: aderire al contesto, analizzandone le peculiarità, gli attriti e i meccanismi con spirito forense.\",\n  credits: \"Artisti: Marco Antelmi, Oliviero Fiorenzi, Manuela Piccolo. Curatori: Flavia Scirè, Valentina Avanzini, Carlo Gambirasio, Mariateresa Lattarulo, Carolina Mancini. Progetto grafico: Rocco Punghellini.\",\n  caption: \"Marco Antelmi, Oliviero Fiorenzi, Manuela Piccolo\",\n  data: \"5 | 7 ottobre 2018\",\n  images: {\n    key: \"orogenesi\",\n    total: 9\n  },\n  downloads: ['Orogenesi Suburbana comunicato stampa.pdf', 'zine Manuela Piccolo - La geografia si fa coi piedi.pdf', 'zine Oliviero Fiorenzi - in and Out Operation.pdf'],\n  icon: 'orogenesi.svg'\n});\n\n//# sourceURL=webpack:///./src/globals/exhibitions/orogenesi.js?");

/***/ }),

/***/ "./src/globals/exhibitions/scenari.js":
/*!********************************************!*\
  !*** ./src/globals/exhibitions/scenari.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  nome: \"Scenari Sintetici\",\n  info: \"INSERIRE INFO SCENARI SINTETICI\",\n  corpoTesto: \"Studioeo presenta un dialogo tra il padrone di casa, Carlo Gambirasio e Gioele Villani. Gli artisti condividono la fascinazione per la tecnologia applicata a una ricerca sull’immagine che va oltre le mere possibilità estetiche. Danno vita a dispositivi che sfruttano le potenzialità espressive dell’elettronica ragionando sulle sue caratteristiche e ripercussioni sulla psiche, lo sguardo e la società umana, coinvolgendo il pubblico in un’interrogazione non verbale riguardo la natura stessa della realtà disseminata che esso abita quotidianamente. Con Scenari Sintetici si intendono gli spazi della rappresentazione digitale ma anche le rappresentazioni mentali che proiettiamo sulla realtà del mondo che si circonda e che ne deformano la percezione e la soggettivizzano. In mostra due pezzi di grandi dimensioni, due scenari appunto, si contendono i confini fisici dello spazio e quelli immateriali degli sguardi del pubblico, affiancate esse si intrecciano all’interno del campo visivo, influenzandosi a vicenda. <br>STRATIFICAZIONE MACCHINICHE<br> L’opera prende origine dal software Free_draw, generatore di forme nello spazio, che si presenta a video come un’animazione che linea dopo linea disegna forme “spontanee”, secondo un algoritmo a base stocastica e combinatoria. Avviando il programma si da inizio al flusso di pensiero della macchina, teso a calcolare forme su forme in una ricerca identitaria e di ‘purezza’ dell’immagine. Così la pratica del disegno libero, lo scarabocchiare come rappresentazione astratta, automatica, leggera, pratica gestuale e corporea, tipicamente associata esclusivamente alla spontaneità della soggettività umana, è delegata alla macchina. Nella versione di Free_draw usata in questa occasione, il software si occupa anche della stampa 3D, generando il codice macchina (.gcode) necessario alla stampante per realizzare un oggetto, per rappresentare l’evoluzione temporale della forma, la direzione del gesto, ogni linea ha uno spessore definito dal suo numero progressivo moltiplicato per un coefficiente. L’algoritmo ha una base stocastica e combinatoria. Proprio l’oggetto stampato costituisce il fulcro dell’installazione qui presentata, fungendo da matrice per la proiezione di un paesaggio cangiante, in cui lo spettatore è invitato a immergersi. Il programma, seppur invisibile, rimane però di fatto la componente essenziale dell’opera: il codice, il testo, le istruzioni che le hanno dato vita.<br>LINEA VARIABILE<br>L’elemento caratterizzante di ogni possibile rappresentazione del paesaggio è senza dubbio da identificare nella presenza di un orizzonte. Individuata la costante, l’artista ci offre una sua elaborazione del Paesaggio come concetto disincarnato che idealmente ne contiene ogni possibile variazione. Per fare questo l’artista si ispira all’espressionismo astratto di Mark Rothko, in particolare alla tela Red, orange, orange on red, inserendo l’elemento macchinico del moto. Nell’opera questo interessa proprio la linea dell’orizzonte che si muove dall’alto in basso e viceversa grazie a un apparato meccanizzato, moltiplicando la rappresentazione sintetica all’infinito, per renderla virtualmente omnicomprensiva.<br>BIO<br>Gioele Villani (Firenze 1994) inizia la sua formazione come programmatore all’istituto Buzzi di Prato. Prosegue all’ISIA di Firenze conseguendo la laurea triennale in disegno industriale nel 2018. Attualmente è iscritto al Biennio Specialistico di Pittura Arti Visive all’Accademia di Belle Arti di Bologna. Dal 2017 si occupa della gestione dell’archivio di Luigi Presicce. Vive e lavora tra Bologna e Firenze. Carlo Gambirasio (Verona 1994) ha conseguito la laurea in pittura e arti visive in NABA, dove ha poi proseguito gli studi specializzandosi in pittura e arti visive. Nel 2018 apre Studioeo impostandolo come spazio di ricerca e produzione artistica che di esposizione e dialogo. Vive e lavora a Milano.\",\n  credits: \"Artisti: Gioele Villani, Carlo Gambirasio. Curatori: Flavia Scirè. Progetto grafico: Flavia Scirè.\",\n  caption: \"Gioele Villani, Carlo Gambirasio\",\n  data: \"06 giugno | 13 giugno  2019\",\n  images: {\n    key: \"scenari\",\n    total: 16\n  },\n  downloads: ['Scenari Sintetici comunicato stampa.pdf'],\n  icon: 'scenari.svg'\n});\n\n//# sourceURL=webpack:///./src/globals/exhibitions/scenari.js?");

/***/ }),

/***/ "./src/globals/globalChecks.js":
/*!*************************************!*\
  !*** ./src/globals/globalChecks.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  if (window.File && window.FileReader && window.FileList && window.Blob) {} else {\n    alert('The File APIs are not fully supported in this browser.');\n  }\n});\n\n//# sourceURL=webpack:///./src/globals/globalChecks.js?");

/***/ }),

/***/ "./src/globals/globals.js":
/*!********************************!*\
  !*** ./src/globals/globals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exhibitions_MAINexhib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exhibitions/MAINexhib */ \"./src/globals/exhibitions/MAINexhib.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/globals/about.js\");\n/* harmony import */ var _customs_infoGvillani__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customs/infoGvillani */ \"./src/globals/customs/infoGvillani.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  exhibitions: _exhibitions_MAINexhib__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  about: _about__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  customs: {\n    infoGioeleVillani: _customs_infoGvillani__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/globals/globals.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/main.css?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fonts_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fonts.css */ \"./src/fonts.css\");\n/* harmony import */ var _fonts_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonts_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mainSm_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainSm.css */ \"./src/mainSm.css\");\n/* harmony import */ var _mainSm_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mainSm_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _globals_globalChecks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals/globalChecks */ \"./src/globals/globalChecks.js\");\n/* harmony import */ var _desktopIcons_desktopIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desktopIcons/desktopIcons */ \"./src/desktopIcons/desktopIcons.js\");\n\n\n\n\n\nObject(_globals_globalChecks__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nObject(_desktopIcons_desktopIcons__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/mainSm.css":
/*!************************!*\
  !*** ./src/mainSm.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./mainSm.css */ \"./node_modules/css-loader/dist/cjs.js!./src/mainSm.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/mainSm.css?");

/***/ }),

/***/ "./src/window/WindowManager.js":
/*!*************************************!*\
  !*** ./src/window/WindowManager.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WindowManager; });\n/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window */ \"./src/window/window.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar WindowManager = /*#__PURE__*/function () {\n  function WindowManager() {\n    _classCallCheck(this, WindowManager);\n  }\n\n  _createClass(WindowManager, null, [{\n    key: \"creaWindow\",\n    value: function creaWindow(text, title, onload) {\n      WindowManager.windowList.push(new _window__WEBPACK_IMPORTED_MODULE_0__[\"default\"](text, title, onload));\n      console.log(WindowManager.windowList);\n    }\n  }, {\n    key: \"setTopWindow\",\n    value: function setTopWindow(id) {\n      this.idOnTop = id;\n      $('.window').css('z-index', '1');\n      $(this.idOnTop).css('z-index', '10');\n    }\n  }, {\n    key: \"manage\",\n    value: function manage(todo, window) {\n      switch (todo) {\n        case 'onTop':\n          var varHolder;\n          WindowManager.zIndxRef.forEach(function (item, index) {\n            if (item.wId == window.id) {\n              varHolder = item;\n              WindowManager.zIndxRef.splice(index, 1);\n              WindowManager.zIndxRef.push(varHolder);\n            }\n          });\n          break;\n\n        case 'add':\n          WindowManager.numberOfWindows++;\n          WindowManager.windowList.push(window);\n          WindowManager.zIndxRef.push({\n            zI: null,\n            wId: window.id\n          });\n          break;\n\n        case 'remove':\n          WindowManager.zIndxRef.forEach(function (item, index) {\n            if (item.wId == window.id) {\n              WindowManager.zIndxRef.splice(index, 1);\n            }\n          });\n          WindowManager.windowList.forEach(function (w, index) {\n            if (w.id === window.id) {\n              w = null;\n              WindowManager.windowList.splice(index, 1);\n            }\n          });\n          WindowManager.numberOfWindows--;\n          break;\n\n        default:\n          alert(\" called WindowManager.manage(todo, windowId),\\n todo switchcase include only:\\n 'add' 'remove' 'onTop'\");\n      }\n\n      this.refreshIndex();\n    }\n  }, {\n    key: \"refreshIndex\",\n    value: function refreshIndex() {\n      WindowManager.zIndxRef.forEach(function (wRef, index) {\n        wRef.zI = index * 10;\n        $('#' + wRef.wId).css('z-index', \" \".concat(wRef.zI));\n        $('#' + wRef.wId + ' .wContent').css('z-index', \" \".concat(wRef.zI + 2));\n      });\n    }\n  }]);\n\n  return WindowManager;\n}();\n\n_defineProperty(WindowManager, \"windowList\", []);\n\n_defineProperty(WindowManager, \"zIndxRef\", []);\n\n_defineProperty(WindowManager, \"stepTop\", 20);\n\n_defineProperty(WindowManager, \"stepLeft\", 40);\n\n_defineProperty(WindowManager, \"numberOfWindows\", 0);\n\n\n\n//# sourceURL=webpack:///./src/window/WindowManager.js?");

/***/ }),

/***/ "./src/window/window.css":
/*!*******************************!*\
  !*** ./src/window/window.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./window.css */ \"./node_modules/css-loader/dist/cjs.js!./src/window/window.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/window/window.css?");

/***/ }),

/***/ "./src/window/window.js":
/*!******************************!*\
  !*** ./src/window/window.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Window; });\n/* harmony import */ var _WindowManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WindowManager */ \"./src/window/WindowManager.js\");\n/* harmony import */ var _window_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./window.css */ \"./src/window/window.css\");\n/* harmony import */ var _window_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_window_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _windowSm_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./windowSm.css */ \"./src/window/windowSm.css\");\n/* harmony import */ var _windowSm_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_windowSm_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _windowScrollBar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./windowScrollBar.css */ \"./src/window/windowScrollBar.css\");\n/* harmony import */ var _windowScrollBar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_windowScrollBar_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar Window = /*#__PURE__*/function () {\n  function Window(content, title, onload) {\n    _classCallCheck(this, Window);\n\n    _defineProperty(this, \"title\", void 0);\n\n    _defineProperty(this, \"content\", void 0);\n\n    _defineProperty(this, \"bricks\", void 0);\n\n    _defineProperty(this, \"domRef\", void 0);\n\n    _defineProperty(this, \"zIndex\", void 0);\n\n    _defineProperty(this, \"id\", void 0);\n\n    console.log({\n      content: content,\n      title: title\n    });\n    this.title = title;\n    this.content = content;\n    this.id = Math.trunc(Math.random() * Math.pow(10, 7));\n    this.bricks = \"<div id=\\\"\".concat(this.id, \"\\\" class=\\\"window\\\">\\n                          <div id=\\\"\").concat(this.id, \"wHeader\\\" class=\\\"wHeader\\\">\\n                              <img class=\\\"dragIcon\\\" src=\\\"icons/drag.svg\\\" />\\n                              <span class=\\\"title\\\">\").concat(this.title, \"</span>\\n                              <span class=\\\"close\\\" id=\\\"\").concat(this.id, \"_cbtn\\\">x</span>\\n                          </div>\\n                          <div class=\\\"wContent\\\" id=\\\"wContent\").concat(this.id, \"\\\">\\n                          \").concat(this.content, \"\\n                          </div>\\n                      </div>\");\n    this.buildTag();\n\n    if (onload) {\n      onload(this);\n    }\n  }\n\n  _createClass(Window, [{\n    key: \"buildTag\",\n    value: function buildTag() {\n      $('body').append(this.bricks);\n      this.domRef = document.getElementById(this.id);\n      this.setLogics();\n    }\n  }, {\n    key: \"setLogics\",\n    value: function setLogics() {\n      var _this = this;\n\n      _WindowManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].manage('onTop', this);\n      $('#' + this.id + 'wHeader').mousedown(function () {});\n      $('#' + this.id).draggable({\n        cancel: '.wContent'\n      }).on('click', function () {\n        _WindowManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].manage('onTop', _this);\n      });\n      $(\"#\".concat(this.id, \"_cbtn\")).on('click touchstart', function () {\n        $('#' + _this.id).remove();\n        _WindowManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].manage('remove', _this);\n      });\n      _WindowManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].manage('add', this);\n      $('#' + this.id).css('left', _WindowManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stepLeft * _WindowManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numberOfWindows + 'px');\n      $('#' + this.id).css('top', _WindowManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stepTop * _WindowManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numberOfWindows + 'px');\n    }\n  }, {\n    key: \"onTop\",\n    value: function onTop() {\n      _WindowManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].manage('onTop', this);\n    }\n  }]);\n\n  return Window;\n}();\n\n\n\n//# sourceURL=webpack:///./src/window/window.js?");

/***/ }),

/***/ "./src/window/windowManager.js":
/*!*************************************!*\
  !*** ./src/window/windowManager.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WindowManager; });\n/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window */ \"./src/window/window.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar WindowManager = /*#__PURE__*/function () {\n  function WindowManager() {\n    _classCallCheck(this, WindowManager);\n  }\n\n  _createClass(WindowManager, null, [{\n    key: \"creaWindow\",\n    value: function creaWindow(text, title, onload) {\n      WindowManager.windowList.push(new _window__WEBPACK_IMPORTED_MODULE_0__[\"default\"](text, title, onload));\n      console.log(WindowManager.windowList);\n    }\n  }, {\n    key: \"setTopWindow\",\n    value: function setTopWindow(id) {\n      this.idOnTop = id;\n      $('.window').css('z-index', '1');\n      $(this.idOnTop).css('z-index', '10');\n    }\n  }, {\n    key: \"manage\",\n    value: function manage(todo, window) {\n      switch (todo) {\n        case 'onTop':\n          var varHolder;\n          WindowManager.zIndxRef.forEach(function (item, index) {\n            if (item.wId == window.id) {\n              varHolder = item;\n              WindowManager.zIndxRef.splice(index, 1);\n              WindowManager.zIndxRef.push(varHolder);\n            }\n          });\n          break;\n\n        case 'add':\n          WindowManager.numberOfWindows++;\n          WindowManager.windowList.push(window);\n          WindowManager.zIndxRef.push({\n            zI: null,\n            wId: window.id\n          });\n          break;\n\n        case 'remove':\n          WindowManager.zIndxRef.forEach(function (item, index) {\n            if (item.wId == window.id) {\n              WindowManager.zIndxRef.splice(index, 1);\n            }\n          });\n          WindowManager.windowList.forEach(function (w, index) {\n            if (w.id === window.id) {\n              w = null;\n              WindowManager.windowList.splice(index, 1);\n            }\n          });\n          WindowManager.numberOfWindows--;\n          break;\n\n        default:\n          alert(\" called WindowManager.manage(todo, windowId),\\n todo switchcase include only:\\n 'add' 'remove' 'onTop'\");\n      }\n\n      this.refreshIndex();\n    }\n  }, {\n    key: \"refreshIndex\",\n    value: function refreshIndex() {\n      WindowManager.zIndxRef.forEach(function (wRef, index) {\n        wRef.zI = index * 10;\n        $('#' + wRef.wId).css('z-index', \" \".concat(wRef.zI));\n        $('#' + wRef.wId + ' .wContent').css('z-index', \" \".concat(wRef.zI + 2));\n      });\n    }\n  }]);\n\n  return WindowManager;\n}();\n\n_defineProperty(WindowManager, \"windowList\", []);\n\n_defineProperty(WindowManager, \"zIndxRef\", []);\n\n_defineProperty(WindowManager, \"stepTop\", 20);\n\n_defineProperty(WindowManager, \"stepLeft\", 40);\n\n_defineProperty(WindowManager, \"numberOfWindows\", 0);\n\n\n\n//# sourceURL=webpack:///./src/window/windowManager.js?");

/***/ }),

/***/ "./src/window/windowScrollBar.css":
/*!****************************************!*\
  !*** ./src/window/windowScrollBar.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./windowScrollBar.css */ \"./node_modules/css-loader/dist/cjs.js!./src/window/windowScrollBar.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/window/windowScrollBar.css?");

/***/ }),

/***/ "./src/window/windowSm.css":
/*!*********************************!*\
  !*** ./src/window/windowSm.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./windowSm.css */ \"./node_modules/css-loader/dist/cjs.js!./src/window/windowSm.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/window/windowSm.css?");

/***/ })

/******/ });