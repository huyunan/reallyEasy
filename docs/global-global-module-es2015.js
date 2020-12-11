(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["global-global-module"],{

/***/ "./src/app/easy/global/global.module.ts":
/*!**********************************************!*\
  !*** ./src/app/easy/global/global.module.ts ***!
  \**********************************************/
/*! exports provided: GlobalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalPageModule", function() { return GlobalPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@10.0.14@@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@10.0.14@@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/_@ionic_angular@5.5.1@@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@10.0.14@@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@10.0.14@@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _global_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global.page */ "./src/app/easy/global/global.page.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.module */ "./src/app/easy/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/easy/footer/footer.module.ts");










class GlobalPageModule {
}
GlobalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GlobalPageModule });
GlobalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GlobalPageModule_Factory(t) { return new (t || GlobalPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderPageModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _global_page__WEBPACK_IMPORTED_MODULE_5__["GlobalPage"],
                }
            ]),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlobalPageModule, { declarations: [_global_page__WEBPACK_IMPORTED_MODULE_5__["GlobalPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderPageModule"],
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterPageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalPageModule, [{
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
                            component: _global_page__WEBPACK_IMPORTED_MODULE_5__["GlobalPage"],
                        }
                    ]),
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]
                ],
                declarations: [_global_page__WEBPACK_IMPORTED_MODULE_5__["GlobalPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/easy/global/global.page.ts":
/*!********************************************!*\
  !*** ./src/app/easy/global/global.page.ts ***!
  \********************************************/
/*! exports provided: GlobalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalPage", function() { return GlobalPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@10.0.14@@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.page */ "./src/app/easy/header/header.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/_@ionic_angular@5.5.1@@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@10.0.14@@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@10.0.14@@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.page */ "./src/app/easy/footer/footer.page.ts");







function GlobalPage_pre_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function GlobalPage_pre_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.successMessage);
} }
class GlobalPage {
    constructor() {
        // json文本框显示行数
        this.rows = 20;
        // json文本框值
        this.jsonValue = '';
        this.errorMessage = '';
        this.successMessage = '';
    }
    // 格式化
    format() {
        if (this.nullCheck())
            return;
        try {
            this.jsonValue = this.replace(this.jsonValue);
            this.errorMessage = '';
            this.successMessage = '格式化完成';
        }
        catch (error) {
            this.successMessage = '';
            this.errorMessage = error.message;
        }
    }
    // 复制
    copy() {
        if (this.nullCheck())
            return;
        const clipboard = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/_copy-to-clipboard@3.3.1@copy-to-clipboard/index.js");
        clipboard(this.jsonValue.trim());
        this.errorMessage = '';
        this.successMessage = '复制完成';
    }
    // 清空
    clear() {
        if (this.nullCheck())
            return;
        this.jsonValue = '';
        this.ionFocus();
    }
    // json 输入值变更
    ionFocus() {
        this.errorMessage = '';
        this.successMessage = '';
    }
    // 空 check
    nullCheck() {
        if (this.jsonValue.trim() === '') {
            this.successMessage = '';
            this.errorMessage = '请输入需要转换的json字符串!';
            return true;
        }
        return false;
    }
    // 值替换
    replace(value) {
        const unixs = value.split('\n');
        const wins = value.split('\r\n');
        let values = [];
        if (unixs.length > wins.length) {
            values = unixs;
        }
        else {
            values = wins;
        }
        let replaceValue = '';
        values.filter((a) => a.trim() !== '').forEach((b) => {
            if (replaceValue === '') {
                replaceValue += "('" + b + "'";
            }
            else {
                replaceValue += ", '" + b + "'";
            }
        });
        return replaceValue + ")";
    }
}
GlobalPage.ɵfac = function GlobalPage_Factory(t) { return new (t || GlobalPage)(); };
GlobalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalPage, selectors: [["app-global"]], decls: 20, vars: 5, consts: [[3, "fullscreen"], [1, "easy-ion-item"], ["id", "easy-json-textarea", "placeholder", "\u8BF7\u8F93\u5165\u9700\u8981\u8F6C\u6362\u7684sql\u503C...", "autofocus", "true", "inputmode", "text", 3, "rows", "ngModel", "ionFocus", "ngModelChange"], [3, "click"], ["color", "success", 3, "click"], ["color", "danger", 3, "click"], ["class", "easy-error-block", 4, "ngIf"], ["class", "easy-success-block", 4, "ngIf"], [1, "easy-error-block"], [1, "easy-success-block"]], template: function GlobalPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionFocus", function GlobalPage_Template_ion_textarea_ionFocus_6_listener() { return ctx.ionFocus(); })("ngModelChange", function GlobalPage_Template_ion_textarea_ngModelChange_6_listener($event) { return ctx.jsonValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlobalPage_Template_ion_button_click_9_listener() { return ctx.format(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u683C\u5F0F\u5316");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlobalPage_Template_ion_button_click_11_listener() { return ctx.copy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u590D\u5236");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlobalPage_Template_ion_button_click_13_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u6E05\u7A7A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GlobalPage_pre_17_Template, 2, 1, "pre", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GlobalPage_pre_18_Template, 2, 1, "pre", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("ngModel", ctx.jsonValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage !== "");
    } }, directives: [_header_header_page__WEBPACK_IMPORTED_MODULE_1__["HeaderPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _footer_footer_page__WEBPACK_IMPORTED_MODULE_5__["FooterPage"]], styles: ["#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.easy-ion-item[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n}\n\n.easy-title-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.easy-error-block[_ngcontent-%COMP%] {\n  background: #FBE3E4;\n  display: block;\n  color: #D12F19;\n  margin-bottom: 1em;\n  border: 2px solid #FBC2C4;\n  padding: 0.8em;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  border-radius: 4px;\n}\n\n.easy-success-block[_ngcontent-%COMP%] {\n  background: #E6EFC2;\n  display: block;\n  color: #529214;\n  margin-bottom: 1em;\n  border: 2px solid #C6D880;\n  padding: 0.8em;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWFzeS9nbG9iYWwvZ2xvYmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFJQTtFQUNFLHNCQUFBO0FBREY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9lYXN5L2dsb2JhbC9nbG9iYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZWFzeS1pb24taXRlbSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG4uZWFzeS10aXRsZS1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZWFzeS1lcnJvci1ibG9jayB7XHJcbiAgYmFja2dyb3VuZDogI0ZCRTNFNDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI0QxMkYxOTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgI0ZCQzJDNDtcclxuICBwYWRkaW5nOiAuOGVtO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uZWFzeS1zdWNjZXNzLWJsb2NrIHtcclxuICBiYWNrZ3JvdW5kOiAjRTZFRkMyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjNTI5MjE0O1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjQzZEODgwO1xyXG4gIHBhZGRpbmc6IC44ZW07XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-global',
                templateUrl: 'global.page.html',
                styleUrls: ['global.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=global-global-module-es2015.js.map