(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~global-global-module~home-home-module~json-json-module~variable-variable-module"],{

/***/ "./node_modules/_copy-to-clipboard@3.3.1@copy-to-clipboard/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_copy-to-clipboard@3.3.1@copy-to-clipboard/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/_toggle-selection@1.0.6@toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./node_modules/_toggle-selection@1.0.6@toggle-selection/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/_toggle-selection@1.0.6@toggle-selection/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "./src/app/easy/footer/footer.module.ts":
/*!**********************************************!*\
  !*** ./src/app/easy/footer/footer.module.ts ***!
  \**********************************************/
/*! exports provided: FooterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPageModule", function() { return FooterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@10.0.14@@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@10.0.14@@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/_@ionic_angular@5.5.1@@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@10.0.14@@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _footer_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.page */ "./src/app/easy/footer/footer.page.ts");






class FooterPageModule {
}
FooterPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterPageModule });
FooterPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterPageModule_Factory(t) { return new (t || FooterPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterPageModule, { declarations: [_footer_page__WEBPACK_IMPORTED_MODULE_4__["FooterPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]], exports: [_footer_page__WEBPACK_IMPORTED_MODULE_4__["FooterPage"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                ],
                declarations: [_footer_page__WEBPACK_IMPORTED_MODULE_4__["FooterPage"]],
                exports: [_footer_page__WEBPACK_IMPORTED_MODULE_4__["FooterPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/easy/footer/footer.page.ts":
/*!********************************************!*\
  !*** ./src/app/easy/footer/footer.page.ts ***!
  \********************************************/
/*! exports provided: FooterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPage", function() { return FooterPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@10.0.14@@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/_@ionic_angular@5.5.1@@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



class FooterPage {
    constructor() { }
}
FooterPage.ɵfac = function FooterPage_Factory(t) { return new (t || FooterPage)(); };
FooterPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterPage, selectors: [["app-footer"]], decls: 9, vars: 1, consts: [[3, "translucent"], ["size", "small", 1, "easy-title-center"], ["href", "//www.runoob.com/"], ["target", "_blank", "rel", "nofollow", "href", "https://beian.miit.gov.cn/"]], template: function FooterPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Copyright \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u83DC\u9E1F\u6559\u7A0B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 2020 \u5907\u6848\u53F7\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u95FDICP\u590715012807\u53F7-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translucent", true);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"]], styles: ["#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.easy-ion-item[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n}\n\n.easy-title-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.easy-error-block[_ngcontent-%COMP%] {\n  background: #FBE3E4;\n  display: block;\n  color: #D12F19;\n  margin-bottom: 1em;\n  border: 2px solid #FBC2C4;\n  padding: 0.8em;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  border-radius: 4px;\n}\n\n.easy-success-block[_ngcontent-%COMP%] {\n  background: #E6EFC2;\n  display: block;\n  color: #529214;\n  margin-bottom: 1em;\n  border: 2px solid #C6D880;\n  padding: 0.8em;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWFzeS9mb290ZXIvZm9vdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFJQTtFQUNFLHNCQUFBO0FBREY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9lYXN5L2Zvb3Rlci9mb290ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZWFzeS1pb24taXRlbSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG4uZWFzeS10aXRsZS1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZWFzeS1lcnJvci1ibG9jayB7XHJcbiAgYmFja2dyb3VuZDogI0ZCRTNFNDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI0QxMkYxOTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgI0ZCQzJDNDtcclxuICBwYWRkaW5nOiAuOGVtO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uZWFzeS1zdWNjZXNzLWJsb2NrIHtcclxuICBiYWNrZ3JvdW5kOiAjRTZFRkMyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjNTI5MjE0O1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjQzZEODgwO1xyXG4gIHBhZGRpbmc6IC44ZW07XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: 'footer.page.html',
                styleUrls: ['footer.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/easy/header/header.module.ts":
/*!**********************************************!*\
  !*** ./src/app/easy/header/header.module.ts ***!
  \**********************************************/
/*! exports provided: HeaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPageModule", function() { return HeaderPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@10.0.14@@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@10.0.14@@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/_@ionic_angular@5.5.1@@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@10.0.14@@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _header_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.page */ "./src/app/easy/header/header.page.ts");






class HeaderPageModule {
}
HeaderPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderPageModule });
HeaderPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderPageModule_Factory(t) { return new (t || HeaderPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderPageModule, { declarations: [_header_page__WEBPACK_IMPORTED_MODULE_4__["HeaderPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]], exports: [_header_page__WEBPACK_IMPORTED_MODULE_4__["HeaderPage"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]
                ],
                declarations: [_header_page__WEBPACK_IMPORTED_MODULE_4__["HeaderPage"]],
                exports: [_header_page__WEBPACK_IMPORTED_MODULE_4__["HeaderPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/easy/header/header.page.ts":
/*!********************************************!*\
  !*** ./src/app/easy/header/header.page.ts ***!
  \********************************************/
/*! exports provided: HeaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPage", function() { return HeaderPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@10.0.14@@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/_@ionic_angular@5.5.1@@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



class HeaderPage {
    constructor() { }
}
HeaderPage.ɵfac = function HeaderPage_Factory(t) { return new (t || HeaderPage)(); };
HeaderPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderPage, selectors: [["app-header"]], decls: 8, vars: 1, consts: [[3, "translucent"]], template: function HeaderPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u771F\u65B9\u4FBF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u65B9\u4FBF\u7A0B\u5E8F\u5458\u5F00\u53D1\u5C0F\u5DE5\u5177");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translucent", true);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"]], styles: ["#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.easy-ion-item[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n}\n\n.easy-title-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.easy-error-block[_ngcontent-%COMP%] {\n  background: #FBE3E4;\n  display: block;\n  color: #D12F19;\n  margin-bottom: 1em;\n  border: 2px solid #FBC2C4;\n  padding: 0.8em;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  border-radius: 4px;\n}\n\n.easy-success-block[_ngcontent-%COMP%] {\n  background: #E6EFC2;\n  display: block;\n  color: #529214;\n  margin-bottom: 1em;\n  border: 2px solid #C6D880;\n  padding: 0.8em;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWFzeS9oZWFkZXIvaGVhZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFJQTtFQUNFLHNCQUFBO0FBREY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9lYXN5L2hlYWRlci9oZWFkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZWFzeS1pb24taXRlbSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG4uZWFzeS10aXRsZS1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZWFzeS1lcnJvci1ibG9jayB7XHJcbiAgYmFja2dyb3VuZDogI0ZCRTNFNDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI0QxMkYxOTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgI0ZCQzJDNDtcclxuICBwYWRkaW5nOiAuOGVtO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uZWFzeS1zdWNjZXNzLWJsb2NrIHtcclxuICBiYWNrZ3JvdW5kOiAjRTZFRkMyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjNTI5MjE0O1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjQzZEODgwO1xyXG4gIHBhZGRpbmc6IC44ZW07XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: 'header.page.html',
                styleUrls: ['header.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~global-global-module~home-home-module~json-json-module~variable-variable-module-es2015.js.map