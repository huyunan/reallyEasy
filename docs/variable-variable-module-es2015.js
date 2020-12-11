(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["variable-variable-module"],{

/***/ "./node_modules/_camel-case@4.1.1@camel-case/dist.es2015/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/_camel-case@4.1.1@camel-case/dist.es2015/index.js ***!
  \************************************************************************/
/*! exports provided: camelCaseTransform, camelCaseTransformMerge, camelCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCaseTransform", function() { return camelCaseTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCaseTransformMerge", function() { return camelCaseTransformMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return camelCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.14.1@tslib/tslib.es6.js");
/* harmony import */ var pascal_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pascal-case */ "./node_modules/_pascal-case@3.1.1@pascal-case/dist.es2015/index.js");


function camelCaseTransform(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return Object(pascal_case__WEBPACK_IMPORTED_MODULE_1__["pascalCaseTransform"])(input, index);
}
function camelCaseTransformMerge(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return Object(pascal_case__WEBPACK_IMPORTED_MODULE_1__["pascalCaseTransformMerge"])(input);
}
function camelCase(input, options) {
    if (options === void 0) { options = {}; }
    return Object(pascal_case__WEBPACK_IMPORTED_MODULE_1__["pascalCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ transform: camelCaseTransform }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/_lower-case@2.0.1@lower-case/dist.es2015/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/_lower-case@2.0.1@lower-case/dist.es2015/index.js ***!
  \************************************************************************/
/*! exports provided: localeLowerCase, lowerCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeLowerCase", function() { return localeLowerCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowerCase", function() { return lowerCase; });
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069"
        }
    },
    az: {
        regexp: /\u0130/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069"
        }
    },
    lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
            I: "\u0069\u0307",
            J: "\u006A\u0307",
            Į: "\u012F\u0307",
            Ì: "\u0069\u0307\u0300",
            Í: "\u0069\u0307\u0301",
            Ĩ: "\u0069\u0307\u0303"
        }
    }
};
/**
 * Localized lower case.
 */
function localeLowerCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang)
        return lowerCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
    return lowerCase(str);
}
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/_no-case@3.0.3@no-case/dist.es2015/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/_no-case@3.0.3@no-case/dist.es2015/index.js ***!
  \******************************************************************/
/*! exports provided: noCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noCase", function() { return noCase; });
/* harmony import */ var lower_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lower-case */ "./node_modules/_lower-case@2.0.1@lower-case/dist.es2015/index.js");

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case__WEBPACK_IMPORTED_MODULE_0__["lowerCase"] : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result
        .slice(start, end)
        .split("\0")
        .map(transform)
        .join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/_pascal-case@3.1.1@pascal-case/dist.es2015/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_pascal-case@3.1.1@pascal-case/dist.es2015/index.js ***!
  \**************************************************************************/
/*! exports provided: pascalCaseTransform, pascalCaseTransformMerge, pascalCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pascalCaseTransform", function() { return pascalCaseTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pascalCaseTransformMerge", function() { return pascalCaseTransformMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pascalCase", function() { return pascalCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.14.1@tslib/tslib.es6.js");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! no-case */ "./node_modules/_no-case@3.0.3@no-case/dist.es2015/index.js");


function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0);
    var lowerChars = input.substr(1).toLowerCase();
    if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
    }
    return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCaseTransformMerge(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
function pascalCase(input, options) {
    if (options === void 0) { options = {}; }
    return Object(no_case__WEBPACK_IMPORTED_MODULE_1__["noCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delimiter: "", transform: pascalCaseTransform }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/_text-constant-case@1.0.2@text-constant-case/dist.es2015/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_text-constant-case@1.0.2@text-constant-case/dist.es2015/index.js ***!
  \****************************************************************************************/
/*! exports provided: constantCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constantCase", function() { return constantCase; });
/* harmony import */ var text_no_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! text-no-case */ "./node_modules/_text-no-case@1.0.2@text-no-case/dist.es2015/index.js");
/* harmony import */ var text_upper_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! text-upper-case */ "./node_modules/_text-upper-case@1.0.2@text-upper-case/dist.es2015/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function constantCase(input, options) {
    if (options === void 0) { options = {}; }
    return Object(text_no_case__WEBPACK_IMPORTED_MODULE_0__["noCase"])(input, __assign({ delimiter: "_", transform: text_upper_case__WEBPACK_IMPORTED_MODULE_1__["upperCase"] }, options));
}


/***/ }),

/***/ "./node_modules/_text-dot-case@1.0.2@text-dot-case/dist.es2015/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_text-dot-case@1.0.2@text-dot-case/dist.es2015/index.js ***!
  \******************************************************************************/
/*! exports provided: dotCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dotCase", function() { return dotCase; });
/* harmony import */ var text_no_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! text-no-case */ "./node_modules/_text-no-case@1.0.2@text-no-case/dist.es2015/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function dotCase(input, options) {
    if (options === void 0) { options = {}; }
    return Object(text_no_case__WEBPACK_IMPORTED_MODULE_0__["noCase"])(input, __assign({ delimiter: "." }, options));
}


/***/ }),

/***/ "./node_modules/_text-lower-case@1.0.4@text-lower-case/dist.es2015/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_text-lower-case@1.0.4@text-lower-case/dist.es2015/index.js ***!
  \**********************************************************************************/
/*! exports provided: localeLowerCase, lowerCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeLowerCase", function() { return localeLowerCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowerCase", function() { return lowerCase; });
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
        },
    },
    az: {
        regexp: /\u0130/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
        },
    },
    lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
            I: "\u0069\u0307",
            J: "\u006A\u0307",
            Į: "\u012F\u0307",
            Ì: "\u0069\u0307\u0300",
            Í: "\u0069\u0307\u0301",
            Ĩ: "\u0069\u0307\u0303",
        },
    },
};
/**
 * Localized lower case.
 */
function localeLowerCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang)
        return lowerCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
    return lowerCase(str);
}
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}


/***/ }),

/***/ "./node_modules/_text-no-case@1.0.2@text-no-case/dist.es2015/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_text-no-case@1.0.2@text-no-case/dist.es2015/index.js ***!
  \****************************************************************************/
/*! exports provided: noCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noCase", function() { return noCase; });
/* harmony import */ var text_lower_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! text-lower-case */ "./node_modules/_text-lower-case@1.0.4@text-lower-case/dist.es2015/index.js");

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize text into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? text_lower_case__WEBPACK_IMPORTED_MODULE_0__["lowerCase"] : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}


/***/ }),

/***/ "./node_modules/_text-param-case@1.0.2@text-param-case/dist.es2015/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_text-param-case@1.0.2@text-param-case/dist.es2015/index.js ***!
  \**********************************************************************************/
/*! exports provided: paramCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paramCase", function() { return paramCase; });
/* harmony import */ var text_dot_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! text-dot-case */ "./node_modules/_text-dot-case@1.0.2@text-dot-case/dist.es2015/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function paramCase(input, options) {
    if (options === void 0) { options = {}; }
    return Object(text_dot_case__WEBPACK_IMPORTED_MODULE_0__["dotCase"])(input, __assign({ delimiter: "-" }, options));
}


/***/ }),

/***/ "./node_modules/_text-upper-case@1.0.2@text-upper-case/dist.es2015/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_text-upper-case@1.0.2@text-upper-case/dist.es2015/index.js ***!
  \**********************************************************************************/
/*! exports provided: localeUpperCase, upperCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeUpperCase", function() { return localeUpperCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upperCase", function() { return upperCase; });
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /[\u0069]/g,
        map: {
            i: "\u0130",
        },
    },
    az: {
        regexp: /[\u0069]/g,
        map: {
            i: "\u0130",
        },
    },
    lt: {
        regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
        map: {
            i̇: "\u0049",
            j̇: "\u004A",
            į̇: "\u012E",
            i̇̀: "\u00CC",
            i̇́: "\u00CD",
            i̇̃: "\u0128",
        },
    },
};
/**
 * Localized upper case.
 */
function localeUpperCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang)
        return upperCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
    return upperCase(str);
}
/**
 * Upper case as a function.
 */
function upperCase(str) {
    return str.toUpperCase();
}


/***/ }),

/***/ "./src/app/easy/variable/variable.module.ts":
/*!**************************************************!*\
  !*** ./src/app/easy/variable/variable.module.ts ***!
  \**************************************************/
/*! exports provided: VariablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablePageModule", function() { return VariablePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@10.0.14@@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@10.0.14@@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/_@ionic_angular@5.5.1@@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@10.0.14@@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@10.0.14@@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _variable_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./variable.page */ "./src/app/easy/variable/variable.page.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.module */ "./src/app/easy/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/easy/footer/footer.module.ts");










class VariablePageModule {
}
VariablePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VariablePageModule });
VariablePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VariablePageModule_Factory(t) { return new (t || VariablePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderPageModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _variable_page__WEBPACK_IMPORTED_MODULE_5__["VariablePage"],
                }
            ]),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VariablePageModule, { declarations: [_variable_page__WEBPACK_IMPORTED_MODULE_5__["VariablePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderPageModule"],
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterPageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VariablePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderPageModule"],
                    _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterPageModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _variable_page__WEBPACK_IMPORTED_MODULE_5__["VariablePage"],
                        }
                    ]),
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]
                ],
                declarations: [_variable_page__WEBPACK_IMPORTED_MODULE_5__["VariablePage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/easy/variable/variable.page.ts":
/*!************************************************!*\
  !*** ./src/app/easy/variable/variable.page.ts ***!
  \************************************************/
/*! exports provided: VariablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablePage", function() { return VariablePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@10.0.14@@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var text_param_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! text-param-case */ "./node_modules/_text-param-case@1.0.2@text-param-case/dist.es2015/index.js");
/* harmony import */ var text_constant_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! text-constant-case */ "./node_modules/_text-constant-case@1.0.2@text-constant-case/dist.es2015/index.js");
/* harmony import */ var camel_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! camel-case */ "./node_modules/_camel-case@4.1.1@camel-case/dist.es2015/index.js");
/* harmony import */ var _header_header_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.page */ "./src/app/easy/header/header.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/_@ionic_angular@5.5.1@@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@10.0.14@@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@10.0.14@@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.page */ "./src/app/easy/footer/footer.page.ts");










function VariablePage_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-select-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r3.name);
} }
function VariablePage_pre_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
} }
function VariablePage_pre_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.successMessage);
} }
class VariablePage {
    constructor() {
        // json文本框显示行数
        this.rows = 20;
        // json文本框值
        this.variableValue = "";
        this.errorMessage = "";
        this.type_select = "";
        this.successMessage = "";
        this.format_types = [
            // Transform into a string with the separator denoted by the next word capitalized.
            {
                value: "camel",
                name: "驼峰命名 testString",
            },
            // Transform into upper case string with an underscore between words.
            {
                value: "constant",
                name: "下划线命名 TEST_STRING",
            },
            // Transform into a lower cased string with dashes between words.
            {
                value: "param",
                name: "中横杠命名 test-string",
            },
            // Transforms the string to lower case.
            {
                value: "lower",
                name: "小写命名 test string",
            },
            // Transforms the string to upper case.
            {
                value: "upper",
                name: "大写命名 TEST STRING",
            },
        ];
    }
    // 格式化
    format() {
        if (this.nullCheck())
            return;
        try {
            switch (this.type_select) {
                case "camel":
                    this.variableValue = Object(camel_case__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(this.variableValue);
                    break;
                case "constant":
                    this.variableValue = Object(text_constant_case__WEBPACK_IMPORTED_MODULE_2__["constantCase"])(this.variableValue);
                    break;
                case "param":
                    this.variableValue = Object(text_param_case__WEBPACK_IMPORTED_MODULE_1__["paramCase"])(this.variableValue);
                    break;
                case "lower":
                    this.variableValue = this.variableValue.toLowerCase();
                    break;
                case "upper":
                    this.variableValue = this.variableValue.toUpperCase();
                    break;
                default:
                    return;
            }
            this.errorMessage = "";
            this.successMessage = "格式化完成";
        }
        catch (error) {
            this.successMessage = "";
            this.errorMessage = error.message;
        }
    }
    // 复制
    copy() {
        if (this.nullCheck())
            return;
        const clipboard = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/_copy-to-clipboard@3.3.1@copy-to-clipboard/index.js");
        clipboard(this.variableValue.trim());
        this.errorMessage = "";
        this.successMessage = "复制完成";
    }
    // 清空
    clear() {
        if (this.nullCheck())
            return;
        this.variableValue = "";
        this.ionFocus();
    }
    // json 输入值变更
    ionFocus() {
        this.errorMessage = "";
        this.successMessage = "";
    }
    // 空 check
    nullCheck() {
        if (this.variableValue.trim() === "") {
            this.successMessage = "";
            this.errorMessage = "请输入需要转换的json字符串!";
            return true;
        }
        return false;
    }
    // 值替换
    replace(value) {
        const unixs = value.split("\n");
        const wins = value.split("\r\n");
        let values = [];
        if (unixs.length > wins.length) {
            values = unixs;
        }
        else {
            values = wins;
        }
        let replaceValue = "";
        values
            .filter((a) => a.trim() !== "")
            .forEach((b) => {
            if (replaceValue === "") {
                replaceValue += '("' + b + '"';
            }
            else {
                replaceValue += ', "' + b + '"';
            }
        });
        return replaceValue + ")";
    }
}
VariablePage.ɵfac = function VariablePage_Factory(t) { return new (t || VariablePage)(); };
VariablePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VariablePage, selectors: [["app-variable"]], decls: 24, vars: 7, consts: [[3, "fullscreen"], ["interface", "popover", "placeholder", "\u8BF7\u9009\u62E9\u8F6C\u6362\u5F62\u5F0F", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "easy-ion-item"], ["id", "easy-json-textarea", "placeholder", "\u8BF7\u8F93\u5165\u9700\u8981\u8F6C\u6362\u7684\u53D8\u91CF...", "autofocus", "true", "inputmode", "text", 3, "rows", "ngModel", "ionFocus", "ngModelChange"], [3, "click"], ["color", "success", 3, "click"], ["color", "danger", 3, "click"], ["class", "easy-error-block", 4, "ngIf"], ["class", "easy-success-block", 4, "ngIf"], [3, "value"], [1, "easy-error-block"], [1, "easy-success-block"]], template: function VariablePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VariablePage_Template_ion_select_ngModelChange_5_listener($event) { return ctx.type_select = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VariablePage_ng_container_6_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionFocus", function VariablePage_Template_ion_textarea_ionFocus_10_listener() { return ctx.ionFocus(); })("ngModelChange", function VariablePage_Template_ion_textarea_ngModelChange_10_listener($event) { return ctx.variableValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VariablePage_Template_ion_button_click_13_listener() { return ctx.format(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u683C\u5F0F\u5316");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VariablePage_Template_ion_button_click_15_listener() { return ctx.copy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u590D\u5236");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VariablePage_Template_ion_button_click_17_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u6E05\u7A7A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, VariablePage_pre_21_Template, 2, 1, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, VariablePage_pre_22_Template, 2, 1, "pre", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.type_select);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.format_types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("ngModel", ctx.variableValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage !== "");
    } }, directives: [_header_header_page__WEBPACK_IMPORTED_MODULE_4__["HeaderPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _footer_footer_page__WEBPACK_IMPORTED_MODULE_8__["FooterPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSelectOption"]], styles: ["#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.easy-ion-item[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n}\n\n.easy-title-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.easy-error-block[_ngcontent-%COMP%] {\n  background: #fbe3e4;\n  display: block;\n  color: #d12f19;\n  margin-bottom: 1em;\n  border: 2px solid #fbc2c4;\n  padding: 0.8em;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  border-radius: 4px;\n}\n\n.easy-success-block[_ngcontent-%COMP%] {\n  background: #e6efc2;\n  display: block;\n  color: #529214;\n  margin-bottom: 1em;\n  border: 2px solid #c6d880;\n  padding: 0.8em;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWFzeS92YXJpYWJsZS92YXJpYWJsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUtGIiwiZmlsZSI6InNyYy9hcHAvZWFzeS92YXJpYWJsZS92YXJpYWJsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBjb2xvcjogIzhjOGM4YztcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5lYXN5LWlvbi1pdGVtIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbi5lYXN5LXRpdGxlLWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5lYXN5LWVycm9yLWJsb2NrIHtcclxuICBiYWNrZ3JvdW5kOiAjZmJlM2U0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjZDEyZjE5O1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmJjMmM0O1xyXG4gIHBhZGRpbmc6IDAuOGVtO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uZWFzeS1zdWNjZXNzLWJsb2NrIHtcclxuICBiYWNrZ3JvdW5kOiAjZTZlZmMyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjNTI5MjE0O1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYzZkODgwO1xyXG4gIHBhZGRpbmc6IDAuOGVtO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VariablePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-variable",
                templateUrl: "variable.page.html",
                styleUrls: ["variable.page.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=variable-variable-module-es2015.js.map