/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --background-color: rgb(58, 58, 58);
    --primary-color: rgb(39, 39, 39);
    --font-color: rgb(230, 230, 230);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

button {
    cursor: pointer;
    font: inherit;
    text-align: center;
    border: none;
    color: inherit;
    background-color: transparent;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
    padding: 1.5rem;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--font-color);
    background-color: var(--background-color);
}

.carousel-container,
.dropdown-container {
    flex: 1;
    align-self: center;
}

.carousel-container,
.carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.carousel-container {
    max-width: 85vw;
    justify-content: space-evenly;
}

.carousel {
    position: relative;
}

.carousel-selector {
    display: flex;
    gap: 0.75rem;
    padding: 0.75rem;
    border-radius: 12px;
    background-color: var(--primary-color);
    box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.125);
}

.carousel-wheel {
    max-width: 33vw;
    overflow: hidden;
}

.carousel-img-container {
    position: relative;
    /* left: -100%; moves carousel one image right */
    display: flex;
    height: 15svh;
}

.carousel-nav {
    --height: 50px;
    --width: 30px;
    height: var(--height);
    width: var(--width);
    position: absolute;
    top: calc(33.333% - calc(var(--height) / 2));
    --side-positioning: calc(-1 * calc(var(--width) + 0.75rem));
    align-self: center;
    border-radius: 8px;
    background-color: var(--primary-color);
    box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.125);
}

.carousel-nav-left {
    left: var(--side-positioning);
}

.carousel-nav-right {
    right: var(--side-positioning);
}

.carousel-img-container div {
    flex: 1 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-img-container img {
    width: auto;
    max-width: 33vw;
    max-height: 100%;
    border-radius: 8px;
}

.carousel-selector > button {
    --diameter: 18px;
    width: var(--diameter);
    height: var(--diameter);
    background-color: var(--font-color);
    border: calc(var(--diameter) / 8) solid rgb(44, 44, 44);
    border-radius: 100%;
    box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.25);
}

.carousel-selector > .selected {
    background-color: rgb(92, 92, 92);
    border: none;
    outline: 1px solid var(--font-color);
}

.dropdown-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 200px;
    gap: 1rem;
}

.card {
    padding: 1rem;
    background-color: var(--primary-color);
    border-radius: 12px;
    box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.125);
    display: flex;
    justify-items: center;
    align-items: center;
    position: relative;
}

.dropdown,
.dropdown-btn,
.dropdown-mouseover,
.dropdown-bounds {
    position: absolute;
}

.dropdown-btn,
.dropdown-mouseover {
    top: 1rem;
    right: 1rem;
}

.dropdown {
    bottom: 0.25rem;
    right: 1.5rem;
    width: 100px;
    height: fit-content;
    padding: 1rem;
    text-align: center;
    background-color: var(--primary-color);
    border: 2px solid rgb(29, 29, 29);
    border-radius: 12px;
    box-shadow: 3px 19px 21px -15px rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: none;
}

.dropdown-mouseover-container .dropdown {
    top: -1.5rem;
    right: 2.5rem;
}

.dropdown-bounds {
    top: -25px;
    right: 0px;
    height: 75px;
    width: 140px;
    z-index: 2;
    display: none;
}

.open {
    display: block;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mCAAmC;IACnC,gCAAgC;IAChC,gCAAgC;AACpC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,cAAc;IACd,6BAA6B;AACjC;;AAEA;IACI;;kBAEc;IACd,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,wBAAwB;IACxB,yCAAyC;AAC7C;;AAEA;;IAEI,OAAO;IACP,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,sCAAsC;IACtC,6CAA6C;AACjD;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,gDAAgD;IAChD,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,4CAA4C;IAC5C,2DAA2D;IAC3D,kBAAkB;IAClB,kBAAkB;IAClB,sCAAsC;IACtC,6CAA6C;AACjD;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,uBAAuB;IACvB,mCAAmC;IACnC,uDAAuD;IACvD,mBAAmB;IACnB,2CAA2C;AAC/C;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mBAAmB;IACnB,6CAA6C;IAC7C,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;;;;IAII,kBAAkB;AACtB;;AAEA;;IAEI,SAAS;IACT,WAAW;AACf;;AAEA;IACI,eAAe;IACf,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,sCAAsC;IACtC,iCAAiC;IACjC,mBAAmB;IACnB,kDAAkD;IAClD,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB","sourcesContent":[":root {\n    --background-color: rgb(58, 58, 58);\n    --primary-color: rgb(39, 39, 39);\n    --font-color: rgb(230, 230, 230);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbutton {\n    cursor: pointer;\n    font: inherit;\n    text-align: center;\n    border: none;\n    color: inherit;\n    background-color: transparent;\n}\n\nbody {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n        Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n        sans-serif;\n    padding: 1.5rem;\n    min-height: 100svh;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    color: var(--font-color);\n    background-color: var(--background-color);\n}\n\n.carousel-container,\n.dropdown-container {\n    flex: 1;\n    align-self: center;\n}\n\n.carousel-container,\n.carousel {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n.carousel-container {\n    max-width: 85vw;\n    justify-content: space-evenly;\n}\n\n.carousel {\n    position: relative;\n}\n\n.carousel-selector {\n    display: flex;\n    gap: 0.75rem;\n    padding: 0.75rem;\n    border-radius: 12px;\n    background-color: var(--primary-color);\n    box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.125);\n}\n\n.carousel-wheel {\n    max-width: 33vw;\n    overflow: hidden;\n}\n\n.carousel-img-container {\n    position: relative;\n    /* left: -100%; moves carousel one image right */\n    display: flex;\n    height: 15svh;\n}\n\n.carousel-nav {\n    --height: 50px;\n    --width: 30px;\n    height: var(--height);\n    width: var(--width);\n    position: absolute;\n    top: calc(33.333% - calc(var(--height) / 2));\n    --side-positioning: calc(-1 * calc(var(--width) + 0.75rem));\n    align-self: center;\n    border-radius: 8px;\n    background-color: var(--primary-color);\n    box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.125);\n}\n\n.carousel-nav-left {\n    left: var(--side-positioning);\n}\n\n.carousel-nav-right {\n    right: var(--side-positioning);\n}\n\n.carousel-img-container div {\n    flex: 1 0 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.carousel-img-container img {\n    width: auto;\n    max-width: 33vw;\n    max-height: 100%;\n    border-radius: 8px;\n}\n\n.carousel-selector > button {\n    --diameter: 18px;\n    width: var(--diameter);\n    height: var(--diameter);\n    background-color: var(--font-color);\n    border: calc(var(--diameter) / 8) solid rgb(44, 44, 44);\n    border-radius: 100%;\n    box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.25);\n}\n\n.carousel-selector > .selected {\n    background-color: rgb(92, 92, 92);\n    border: none;\n    outline: 1px solid var(--font-color);\n}\n\n.dropdown-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    grid-auto-rows: 200px;\n    gap: 1rem;\n}\n\n.card {\n    padding: 1rem;\n    background-color: var(--primary-color);\n    border-radius: 12px;\n    box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.125);\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    position: relative;\n}\n\n.dropdown,\n.dropdown-btn,\n.dropdown-mouseover,\n.dropdown-bounds {\n    position: absolute;\n}\n\n.dropdown-btn,\n.dropdown-mouseover {\n    top: 1rem;\n    right: 1rem;\n}\n\n.dropdown {\n    bottom: 0.25rem;\n    right: 1.5rem;\n    width: 100px;\n    height: fit-content;\n    padding: 1rem;\n    text-align: center;\n    background-color: var(--primary-color);\n    border: 2px solid rgb(29, 29, 29);\n    border-radius: 12px;\n    box-shadow: 3px 19px 21px -15px rgba(0, 0, 0, 0.5);\n    z-index: 1;\n    display: none;\n}\n\n.dropdown-mouseover-container .dropdown {\n    top: -1.5rem;\n    right: 2.5rem;\n}\n\n.dropdown-bounds {\n    top: -25px;\n    right: 0px;\n    height: 75px;\n    width: 140px;\n    z-index: 2;\n    display: none;\n}\n\n.open {\n    display: block;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/carousel/carousel-behavior.js":
/*!*******************************************!*\
  !*** ./src/carousel/carousel-behavior.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initCarouselBehaviors)
/* harmony export */ });
let currentImage = 0;

function initCarouselBehaviors(carousel) {
  addNavBtnBehavior(carousel);
  addSelectorBtnBehavior(carousel);
  updateWheel(carousel);
}

function addNavBtnBehavior(carousel) {
  carousel.navBtns.left.addEventListener("click", () => prevImg(carousel));
  carousel.navBtns.right.addEventListener("click", () => nextImg(carousel));

  function nextImg() {
    if (currentImage >= carousel.lastImgIndex) {
      currentImage = 0;
    } else {
      currentImage += 1;
    }
    updateWheel(carousel);
  }

  function prevImg() {
    if (currentImage <= 0) {
      currentImage = carousel.lastImgIndex;
    } else {
      currentImage -= 1;
    }
    updateWheel(carousel);
  }
}

function addSelectorBtnBehavior(carousel) {
  const btns = carousel.selector.querySelectorAll("button");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentImage = Number(btn.dataset.forImg);
      updateWheel(carousel);
    });
  });
}

function updateWheel(carousel) {
  const selBtns = carousel.selector.querySelectorAll("button");
  const containerOffset = `-${currentImage}00%`;
  carousel.imageContainer.style.left = containerOffset;

  selBtns.forEach((btn) => btn.classList.remove("selected"));
  selBtns[currentImage].classList.add("selected");
}


/***/ }),

/***/ "./src/carousel/carousel.js":
/*!**********************************!*\
  !*** ./src/carousel/carousel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initCarousel)
/* harmony export */ });
/* harmony import */ var _carousel_behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel-behavior */ "./src/carousel/carousel-behavior.js");


function initCarousel(obj) {
  const carousel = typeof obj === "object" ? obj : JSON.parse(obj);

  const carouselElement = document.querySelector(`.${carousel.class}`);
  const wheel = document.createElement("div");
  const imageContainer = document.createElement("div");
  const selector = document.createElement("div");
  const navBtns = createNavBtns();

  imageContainer.classList.add("carousel-img-container");
  selector.classList.add("carousel-selector");
  wheel.classList.add("carousel-wheel");
  carouselElement.appendChild(wheel);
  carouselElement.appendChild(selector);
  carouselElement.appendChild(navBtns.left);
  carouselElement.appendChild(navBtns.right);
  wheel.appendChild(imageContainer);

  carousel.images.forEach((image, index) => {
    const img = createImg(image);
    imageContainer.appendChild(img);
    const selBtn = createSelectButton(index);
    selector.appendChild(selBtn);
  });

  (0,_carousel_behavior__WEBPACK_IMPORTED_MODULE_0__["default"])({
    imageContainer,
    selector,
    navBtns,
    lastImgIndex: carousel.images.length - 1,
  });
}

function createNavBtns() {
  const leftBtn = document.createElement("button");
  leftBtn.classList.add("carousel-nav");
  const rightBtn = leftBtn.cloneNode();

  leftBtn.textContent = "<";
  leftBtn.classList.add("carousel-nav-left");
  rightBtn.textContent = ">";
  rightBtn.classList.add("carousel-nav-right");
  return {
    left: leftBtn,
    right: rightBtn,
  };
}

function createImg(src) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = src;
  div.appendChild(img);
  return div;
}

function createSelectButton(imgIndex) {
  const button = document.createElement("button");
  button.classList.add("carousel-selector-node");
  button.dataset.forImg = imgIndex;
  return button;
}


/***/ }),

/***/ "./src/dropdowns/dropdowns.js":
/*!************************************!*\
  !*** ./src/dropdowns/dropdowns.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initDropdowns)
/* harmony export */ });
let openClass;

function initDropdowns(
  btnClass = "dropdown-btn",
  mouseoverClass = "dropdown-mouseover",
  open = "open"
) {
  openClass = open;

  const dropdownBtns = document.querySelectorAll(`.${btnClass}`);
  const dropdownMouseovers = document.querySelectorAll(`.${mouseoverClass}`);

  dropdownBtns.forEach((btn) => addButtonBehavior(btn));
  dropdownMouseovers.forEach((element) => addMouseoverBehavior(element));
}

function addButtonBehavior(btn) {
  const dropdown = document.querySelector(`.${btn.dataset.forClass}`);
  btn.addEventListener("click", () => dropdown.classList.toggle(openClass));
}

function addMouseoverBehavior(ele) {
  const dropdown = document.querySelector(`.${ele.dataset.forClass}`);
  const boundingBoxes = document.querySelectorAll(
    `.${dropdown.dataset.boundingClass}`
  );

  ele.addEventListener("mouseover", () => {
    dropdown.classList.add(openClass);
    boundingBoxes.forEach((box) => box.classList.add(openClass));
  });

  boundingBoxes.forEach((box) => {
    box.addEventListener("mouseout", () => {
      dropdown.classList.remove(openClass);
      boundingBoxes.forEach((box) => box.classList.remove(openClass));
    });
  });
}


/***/ }),

/***/ "./src/assets/carousel-2.json":
/*!************************************!*\
  !*** ./src/assets/carousel-2.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"class":"img-group-2","images":["https://machinelearningmastery.com/wp-content/uploads/2017/01/A-Gentle-Introduction-to-the-Random-Walk-for-Times-Series-Forecasting-with-Python.jpg","https://www.kdnuggets.com/wp-content/uploads/tree-todd-quackenbush-unsplash.jpg","https://www.simplilearn.com/ice9/free_resources_article_thumb/random_forest_algorithm.jpg","https://behavioralscientist.org/wp-content/uploads/2023/11/2023-10_Yates_Randomness-editorial_v2-1024x568.jpg","https://machinelearningmastery.com/wp-content/uploads/2018/07/thomas-lipke-oIuDXlOJSiE-unsplash-1024x636.jpg"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdowns_dropdowns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdowns/dropdowns */ "./src/dropdowns/dropdowns.js");
/* harmony import */ var _carousel_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel/carousel */ "./src/carousel/carousel.js");
/* harmony import */ var _assets_carousel_2_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/carousel-2.json */ "./src/assets/carousel-2.json");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





(0,_dropdowns_dropdowns__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_carousel_carousel__WEBPACK_IMPORTED_MODULE_1__["default"])({
  class: "img-group-1",
  images: [
    "https://picsum.photos/300/150",
    "https://picsum.photos/302/151",
    "https://picsum.photos/304/152",
  ],
});
(0,_carousel_carousel__WEBPACK_IMPORTED_MODULE_1__["default"])(_assets_carousel_2_json__WEBPACK_IMPORTED_MODULE_2__);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxRQUFRLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUs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QUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQWtEO0FBQ0g7QUFDSztBQUMvQjs7QUFFckIsZ0VBQWE7QUFDYiw4REFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCw4REFBWSxDQUFDLG9EQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJvcGRvd25zLWFuZC1jYXJvdXNlbHMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2Ryb3Bkb3ducy1hbmQtY2Fyb3VzZWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kcm9wZG93bnMtYW5kLWNhcm91c2Vscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Ryb3Bkb3ducy1hbmQtY2Fyb3VzZWxzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2Ryb3Bkb3ducy1hbmQtY2Fyb3VzZWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Ryb3Bkb3ducy1hbmQtY2Fyb3VzZWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kcm9wZG93bnMtYW5kLWNhcm91c2Vscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kcm9wZG93bnMtYW5kLWNhcm91c2Vscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kcm9wZG93bnMtYW5kLWNhcm91c2Vscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Ryb3Bkb3ducy1hbmQtY2Fyb3VzZWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZHJvcGRvd25zLWFuZC1jYXJvdXNlbHMvLi9zcmMvY2Fyb3VzZWwvY2Fyb3VzZWwtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vZHJvcGRvd25zLWFuZC1jYXJvdXNlbHMvLi9zcmMvY2Fyb3VzZWwvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vZHJvcGRvd25zLWFuZC1jYXJvdXNlbHMvLi9zcmMvZHJvcGRvd25zL2Ryb3Bkb3ducy5qcyIsIndlYnBhY2s6Ly9kcm9wZG93bnMtYW5kLWNhcm91c2Vscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kcm9wZG93bnMtYW5kLWNhcm91c2Vscy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kcm9wZG93bnMtYW5kLWNhcm91c2Vscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHJvcGRvd25zLWFuZC1jYXJvdXNlbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kcm9wZG93bnMtYW5kLWNhcm91c2Vscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Ryb3Bkb3ducy1hbmQtY2Fyb3VzZWxzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9kcm9wZG93bnMtYW5kLWNhcm91c2Vscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA1OCwgNTgpO1xuICAgIC0tcHJpbWFyeS1jb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xuICAgIC0tZm9udC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLFxuICAgICAgICBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICAgICAgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgbWluLWhlaWdodDogMTAwc3ZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4uY2Fyb3VzZWwtY29udGFpbmVyLFxuLmRyb3Bkb3duLWNvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5jYXJvdXNlbC1jb250YWluZXIsXG4uY2Fyb3VzZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmNhcm91c2VsLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA4NXZ3O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uY2Fyb3VzZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcm91c2VsLXNlbGVjdG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC43NXJlbTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogM3B4IDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuXG4uY2Fyb3VzZWwtd2hlZWwge1xuICAgIG1heC13aWR0aDogMzN2dztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2Fyb3VzZWwtaW1nLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGxlZnQ6IC0xMDAlOyBtb3ZlcyBjYXJvdXNlbCBvbmUgaW1hZ2UgcmlnaHQgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTVzdmg7XG59XG5cbi5jYXJvdXNlbC1uYXYge1xuICAgIC0taGVpZ2h0OiA1MHB4O1xuICAgIC0td2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xuICAgIHdpZHRoOiB2YXIoLS13aWR0aCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogY2FsYygzMy4zMzMlIC0gY2FsYyh2YXIoLS1oZWlnaHQpIC8gMikpO1xuICAgIC0tc2lkZS1wb3NpdGlvbmluZzogY2FsYygtMSAqIGNhbGModmFyKC0td2lkdGgpICsgMC43NXJlbSkpO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogM3B4IDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuXG4uY2Fyb3VzZWwtbmF2LWxlZnQge1xuICAgIGxlZnQ6IHZhcigtLXNpZGUtcG9zaXRpb25pbmcpO1xufVxuXG4uY2Fyb3VzZWwtbmF2LXJpZ2h0IHtcbiAgICByaWdodDogdmFyKC0tc2lkZS1wb3NpdGlvbmluZyk7XG59XG5cbi5jYXJvdXNlbC1pbWctY29udGFpbmVyIGRpdiB7XG4gICAgZmxleDogMSAwIDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2Fyb3VzZWwtaW1nLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogMzN2dztcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmNhcm91c2VsLXNlbGVjdG9yID4gYnV0dG9uIHtcbiAgICAtLWRpYW1ldGVyOiAxOHB4O1xuICAgIHdpZHRoOiB2YXIoLS1kaWFtZXRlcik7XG4gICAgaGVpZ2h0OiB2YXIoLS1kaWFtZXRlcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgYm9yZGVyOiBjYWxjKHZhcigtLWRpYW1ldGVyKSAvIDgpIHNvbGlkIHJnYig0NCwgNDQsIDQ0KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDNweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5jYXJvdXNlbC1zZWxlY3RvciA+IC5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbi5kcm9wZG93bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3gtc2hhZG93OiAzcHggNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kcm9wZG93bixcbi5kcm9wZG93bi1idG4sXG4uZHJvcGRvd24tbW91c2VvdmVyLFxuLmRyb3Bkb3duLWJvdW5kcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZHJvcGRvd24tYnRuLFxuLmRyb3Bkb3duLW1vdXNlb3ZlciB7XG4gICAgdG9wOiAxcmVtO1xuICAgIHJpZ2h0OiAxcmVtO1xufVxuXG4uZHJvcGRvd24ge1xuICAgIGJvdHRvbTogMC4yNXJlbTtcbiAgICByaWdodDogMS41cmVtO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyOSwgMjksIDI5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAxOXB4IDIxcHggLTE1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRyb3Bkb3duLW1vdXNlb3Zlci1jb250YWluZXIgLmRyb3Bkb3duIHtcbiAgICB0b3A6IC0xLjVyZW07XG4gICAgcmlnaHQ6IDIuNXJlbTtcbn1cblxuLmRyb3Bkb3duLWJvdW5kcyB7XG4gICAgdG9wOiAtMjVweDtcbiAgICByaWdodDogMHB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ub3BlbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsZ0NBQWdDO0lBQ2hDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSTs7a0JBRWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULHdCQUF3QjtJQUN4Qix5Q0FBeUM7QUFDN0M7O0FBRUE7O0lBRUksT0FBTztJQUNQLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0Qyw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdEQUFnRDtJQUNoRCxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsNENBQTRDO0lBQzVDLDJEQUEyRDtJQUMzRCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0Qyw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsdURBQXVEO0lBQ3ZELG1CQUFtQjtJQUNuQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QscUJBQXFCO0lBQ3JCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3QyxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7SUFJSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLGtEQUFrRDtJQUNsRCxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA1OCwgNTgpO1xcbiAgICAtLXByaW1hcnktY29sb3I6IHJnYigzOSwgMzksIDM5KTtcXG4gICAgLS1mb250LWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgICAgIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxuICAgICAgICBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHN2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4uY2Fyb3VzZWwtY29udGFpbmVyLFxcbi5kcm9wZG93bi1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jYXJvdXNlbC1jb250YWluZXIsXFxuLmNhcm91c2VsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2Fyb3VzZWwtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA4NXZ3O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmNhcm91c2VsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2Fyb3VzZWwtc2VsZWN0b3Ige1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNzVyZW07XFxuICAgIHBhZGRpbmc6IDAuNzVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAzcHggNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XFxufVxcblxcbi5jYXJvdXNlbC13aGVlbCB7XFxuICAgIG1heC13aWR0aDogMzN2dztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNhcm91c2VsLWltZy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC8qIGxlZnQ6IC0xMDAlOyBtb3ZlcyBjYXJvdXNlbCBvbmUgaW1hZ2UgcmlnaHQgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxNXN2aDtcXG59XFxuXFxuLmNhcm91c2VsLW5hdiB7XFxuICAgIC0taGVpZ2h0OiA1MHB4O1xcbiAgICAtLXdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XFxuICAgIHdpZHRoOiB2YXIoLS13aWR0aCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKDMzLjMzMyUgLSBjYWxjKHZhcigtLWhlaWdodCkgLyAyKSk7XFxuICAgIC0tc2lkZS1wb3NpdGlvbmluZzogY2FsYygtMSAqIGNhbGModmFyKC0td2lkdGgpICsgMC43NXJlbSkpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IDNweCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcXG59XFxuXFxuLmNhcm91c2VsLW5hdi1sZWZ0IHtcXG4gICAgbGVmdDogdmFyKC0tc2lkZS1wb3NpdGlvbmluZyk7XFxufVxcblxcbi5jYXJvdXNlbC1uYXYtcmlnaHQge1xcbiAgICByaWdodDogdmFyKC0tc2lkZS1wb3NpdGlvbmluZyk7XFxufVxcblxcbi5jYXJvdXNlbC1pbWctY29udGFpbmVyIGRpdiB7XFxuICAgIGZsZXg6IDEgMCAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhcm91c2VsLWltZy1jb250YWluZXIgaW1nIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1heC13aWR0aDogMzN2dztcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uY2Fyb3VzZWwtc2VsZWN0b3IgPiBidXR0b24ge1xcbiAgICAtLWRpYW1ldGVyOiAxOHB4O1xcbiAgICB3aWR0aDogdmFyKC0tZGlhbWV0ZXIpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWRpYW1ldGVyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlcjogY2FsYyh2YXIoLS1kaWFtZXRlcikgLyA4KSBzb2xpZCByZ2IoNDQsIDQ0LCA0NCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGJveC1zaGFkb3c6IDNweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi5jYXJvdXNlbC1zZWxlY3RvciA+IC5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgOTIsIDkyKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5kcm9wZG93bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5jYXJkIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJveC1zaGFkb3c6IDNweCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kcm9wZG93bixcXG4uZHJvcGRvd24tYnRuLFxcbi5kcm9wZG93bi1tb3VzZW92ZXIsXFxuLmRyb3Bkb3duLWJvdW5kcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmRyb3Bkb3duLWJ0bixcXG4uZHJvcGRvd24tbW91c2VvdmVyIHtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLmRyb3Bkb3duIHtcXG4gICAgYm90dG9tOiAwLjI1cmVtO1xcbiAgICByaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyOSwgMjksIDI5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDE5cHggMjFweCAtMTVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kcm9wZG93bi1tb3VzZW92ZXItY29udGFpbmVyIC5kcm9wZG93biB7XFxuICAgIHRvcDogLTEuNXJlbTtcXG4gICAgcmlnaHQ6IDIuNXJlbTtcXG59XFxuXFxuLmRyb3Bkb3duLWJvdW5kcyB7XFxuICAgIHRvcDogLTI1cHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIGhlaWdodDogNzVweDtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ub3BlbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImxldCBjdXJyZW50SW1hZ2UgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0Q2Fyb3VzZWxCZWhhdmlvcnMoY2Fyb3VzZWwpIHtcbiAgYWRkTmF2QnRuQmVoYXZpb3IoY2Fyb3VzZWwpO1xuICBhZGRTZWxlY3RvckJ0bkJlaGF2aW9yKGNhcm91c2VsKTtcbiAgdXBkYXRlV2hlZWwoY2Fyb3VzZWwpO1xufVxuXG5mdW5jdGlvbiBhZGROYXZCdG5CZWhhdmlvcihjYXJvdXNlbCkge1xuICBjYXJvdXNlbC5uYXZCdG5zLmxlZnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHByZXZJbWcoY2Fyb3VzZWwpKTtcbiAgY2Fyb3VzZWwubmF2QnRucy5yaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbmV4dEltZyhjYXJvdXNlbCkpO1xuXG4gIGZ1bmN0aW9uIG5leHRJbWcoKSB7XG4gICAgaWYgKGN1cnJlbnRJbWFnZSA+PSBjYXJvdXNlbC5sYXN0SW1nSW5kZXgpIHtcbiAgICAgIGN1cnJlbnRJbWFnZSA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRJbWFnZSArPSAxO1xuICAgIH1cbiAgICB1cGRhdGVXaGVlbChjYXJvdXNlbCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2SW1nKCkge1xuICAgIGlmIChjdXJyZW50SW1hZ2UgPD0gMCkge1xuICAgICAgY3VycmVudEltYWdlID0gY2Fyb3VzZWwubGFzdEltZ0luZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50SW1hZ2UgLT0gMTtcbiAgICB9XG4gICAgdXBkYXRlV2hlZWwoY2Fyb3VzZWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFNlbGVjdG9yQnRuQmVoYXZpb3IoY2Fyb3VzZWwpIHtcbiAgY29uc3QgYnRucyA9IGNhcm91c2VsLnNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG5cbiAgYnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGN1cnJlbnRJbWFnZSA9IE51bWJlcihidG4uZGF0YXNldC5mb3JJbWcpO1xuICAgICAgdXBkYXRlV2hlZWwoY2Fyb3VzZWwpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlV2hlZWwoY2Fyb3VzZWwpIHtcbiAgY29uc3Qgc2VsQnRucyA9IGNhcm91c2VsLnNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG4gIGNvbnN0IGNvbnRhaW5lck9mZnNldCA9IGAtJHtjdXJyZW50SW1hZ2V9MDAlYDtcbiAgY2Fyb3VzZWwuaW1hZ2VDb250YWluZXIuc3R5bGUubGVmdCA9IGNvbnRhaW5lck9mZnNldDtcblxuICBzZWxCdG5zLmZvckVhY2goKGJ0bikgPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSk7XG4gIHNlbEJ0bnNbY3VycmVudEltYWdlXS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59XG4iLCJpbXBvcnQgaW5pdENhcm91c2VsQmVoYXZpb3JzIGZyb20gXCIuL2Nhcm91c2VsLWJlaGF2aW9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRDYXJvdXNlbChvYmopIHtcbiAgY29uc3QgY2Fyb3VzZWwgPSB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiID8gb2JqIDogSlNPTi5wYXJzZShvYmopO1xuXG4gIGNvbnN0IGNhcm91c2VsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2Nhcm91c2VsLmNsYXNzfWApO1xuICBjb25zdCB3aGVlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBuYXZCdG5zID0gY3JlYXRlTmF2QnRucygpO1xuXG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1pbWctY29udGFpbmVyXCIpO1xuICBzZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtc2VsZWN0b3JcIik7XG4gIHdoZWVsLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC13aGVlbFwiKTtcbiAgY2Fyb3VzZWxFbGVtZW50LmFwcGVuZENoaWxkKHdoZWVsKTtcbiAgY2Fyb3VzZWxFbGVtZW50LmFwcGVuZENoaWxkKHNlbGVjdG9yKTtcbiAgY2Fyb3VzZWxFbGVtZW50LmFwcGVuZENoaWxkKG5hdkJ0bnMubGVmdCk7XG4gIGNhcm91c2VsRWxlbWVudC5hcHBlbmRDaGlsZChuYXZCdG5zLnJpZ2h0KTtcbiAgd2hlZWwuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuXG4gIGNhcm91c2VsLmltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBpbWcgPSBjcmVhdGVJbWcoaW1hZ2UpO1xuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgY29uc3Qgc2VsQnRuID0gY3JlYXRlU2VsZWN0QnV0dG9uKGluZGV4KTtcbiAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChzZWxCdG4pO1xuICB9KTtcblxuICBpbml0Q2Fyb3VzZWxCZWhhdmlvcnMoe1xuICAgIGltYWdlQ29udGFpbmVyLFxuICAgIHNlbGVjdG9yLFxuICAgIG5hdkJ0bnMsXG4gICAgbGFzdEltZ0luZGV4OiBjYXJvdXNlbC5pbWFnZXMubGVuZ3RoIC0gMSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJ0bnMoKSB7XG4gIGNvbnN0IGxlZnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZWZ0QnRuLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1uYXZcIik7XG4gIGNvbnN0IHJpZ2h0QnRuID0gbGVmdEJ0bi5jbG9uZU5vZGUoKTtcblxuICBsZWZ0QnRuLnRleHRDb250ZW50ID0gXCI8XCI7XG4gIGxlZnRCdG4uY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLW5hdi1sZWZ0XCIpO1xuICByaWdodEJ0bi50ZXh0Q29udGVudCA9IFwiPlwiO1xuICByaWdodEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtbmF2LXJpZ2h0XCIpO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IGxlZnRCdG4sXG4gICAgcmlnaHQ6IHJpZ2h0QnRuLFxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbWcoc3JjKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5zcmMgPSBzcmM7XG4gIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RCdXR0b24oaW1nSW5kZXgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1zZWxlY3Rvci1ub2RlXCIpO1xuICBidXR0b24uZGF0YXNldC5mb3JJbWcgPSBpbWdJbmRleDtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cbiIsImxldCBvcGVuQ2xhc3M7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXREcm9wZG93bnMoXG4gIGJ0bkNsYXNzID0gXCJkcm9wZG93bi1idG5cIixcbiAgbW91c2VvdmVyQ2xhc3MgPSBcImRyb3Bkb3duLW1vdXNlb3ZlclwiLFxuICBvcGVuID0gXCJvcGVuXCJcbikge1xuICBvcGVuQ2xhc3MgPSBvcGVuO1xuXG4gIGNvbnN0IGRyb3Bkb3duQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2J0bkNsYXNzfWApO1xuICBjb25zdCBkcm9wZG93bk1vdXNlb3ZlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHttb3VzZW92ZXJDbGFzc31gKTtcblxuICBkcm9wZG93bkJ0bnMuZm9yRWFjaCgoYnRuKSA9PiBhZGRCdXR0b25CZWhhdmlvcihidG4pKTtcbiAgZHJvcGRvd25Nb3VzZW92ZXJzLmZvckVhY2goKGVsZW1lbnQpID0+IGFkZE1vdXNlb3ZlckJlaGF2aW9yKGVsZW1lbnQpKTtcbn1cblxuZnVuY3Rpb24gYWRkQnV0dG9uQmVoYXZpb3IoYnRuKSB7XG4gIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7YnRuLmRhdGFzZXQuZm9yQ2xhc3N9YCk7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZShvcGVuQ2xhc3MpKTtcbn1cblxuZnVuY3Rpb24gYWRkTW91c2VvdmVyQmVoYXZpb3IoZWxlKSB7XG4gIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZWxlLmRhdGFzZXQuZm9yQ2xhc3N9YCk7XG4gIGNvbnN0IGJvdW5kaW5nQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIGAuJHtkcm9wZG93bi5kYXRhc2V0LmJvdW5kaW5nQ2xhc3N9YFxuICApO1xuXG4gIGVsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKG9wZW5DbGFzcyk7XG4gICAgYm91bmRpbmdCb3hlcy5mb3JFYWNoKChib3gpID0+IGJveC5jbGFzc0xpc3QuYWRkKG9wZW5DbGFzcykpO1xuICB9KTtcblxuICBib3VuZGluZ0JveGVzLmZvckVhY2goKGJveCkgPT4ge1xuICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZShvcGVuQ2xhc3MpO1xuICAgICAgYm91bmRpbmdCb3hlcy5mb3JFYWNoKChib3gpID0+IGJveC5jbGFzc0xpc3QucmVtb3ZlKG9wZW5DbGFzcykpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBpbml0RHJvcGRvd25zIGZyb20gXCIuL2Ryb3Bkb3ducy9kcm9wZG93bnNcIjtcbmltcG9ydCBpbml0Q2Fyb3VzZWwgZnJvbSBcIi4vY2Fyb3VzZWwvY2Fyb3VzZWxcIjtcbmltcG9ydCBjYXJvdXNlbEpTT04gZnJvbSBcIi4vYXNzZXRzL2Nhcm91c2VsLTIuanNvblwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW5pdERyb3Bkb3ducygpO1xuaW5pdENhcm91c2VsKHtcbiAgY2xhc3M6IFwiaW1nLWdyb3VwLTFcIixcbiAgaW1hZ2VzOiBbXG4gICAgXCJodHRwczovL3BpY3N1bS5waG90b3MvMzAwLzE1MFwiLFxuICAgIFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzMwMi8xNTFcIixcbiAgICBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8zMDQvMTUyXCIsXG4gIF0sXG59KTtcbmluaXRDYXJvdXNlbChjYXJvdXNlbEpTT04pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9