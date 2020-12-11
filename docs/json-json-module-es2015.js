(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["json-json-module"],{

/***/ "./src/app/easy/json/json.module.ts":
/*!******************************************!*\
  !*** ./src/app/easy/json/json.module.ts ***!
  \******************************************/
/*! exports provided: JsonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonPageModule", function() { return JsonPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@10.0.14@@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@10.0.14@@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/_@ionic_angular@5.5.1@@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@10.0.14@@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _json_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json.page */ "./src/app/easy/json/json.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@10.0.14@@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.module */ "./src/app/easy/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/easy/footer/footer.module.ts");










class JsonPageModule {
}
JsonPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: JsonPageModule });
JsonPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function JsonPageModule_Factory(t) { return new (t || JsonPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderPageModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _json_page__WEBPACK_IMPORTED_MODULE_4__["JsonPage"],
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JsonPageModule, { declarations: [_json_page__WEBPACK_IMPORTED_MODULE_4__["JsonPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderPageModule"],
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterPageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                    _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderPageModule"],
                    _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterPageModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _json_page__WEBPACK_IMPORTED_MODULE_4__["JsonPage"],
                        }
                    ])
                ],
                declarations: [_json_page__WEBPACK_IMPORTED_MODULE_4__["JsonPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/easy/json/json.page.ts":
/*!****************************************!*\
  !*** ./src/app/easy/json/json.page.ts ***!
  \****************************************/
/*! exports provided: JsonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonPage", function() { return JsonPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@10.0.14@@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@10.0.14@@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_header_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.page */ "./src/app/easy/header/header.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/_@ionic_angular@5.5.1@@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@10.0.14@@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _footer_footer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.page */ "./src/app/easy/footer/footer.page.ts");








function JsonPage_pre_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function JsonPage_pre_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.successMessage);
} }
class JsonPage {
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
        const jsonFormat = __webpack_require__(/*! json-format */ "./node_modules/_json-format@1.0.1@json-format/index.js");
        /* using indent with spaces */
        const config = {
            type: 'space',
            size: 2
        };
        try {
            this.jsonValue = jsonFormat(JSON.parse(this.jsonValue), config);
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
        clipboard(this.jsonValue);
        this.errorMessage = '';
        this.successMessage = '复制完成';
    }
    // 保存文件
    save() {
        if (this.nullCheck())
            return;
        const datetime = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(Date.now(), 'MMddHHmmss', 'zh');
        const fileName = 'reallyEasy_' + datetime + '.json';
        const FileSaver = __webpack_require__(/*! file-saver */ "./node_modules/_file-saver@2.0.5@file-saver/dist/FileSaver.min.js");
        const file = new File([this.jsonValue], fileName, { type: "text/plain;charset=utf-8" });
        FileSaver.saveAs(file);
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
}
JsonPage.ɵfac = function JsonPage_Factory(t) { return new (t || JsonPage)(); };
JsonPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JsonPage, selectors: [["app-json"]], decls: 22, vars: 5, consts: [[3, "fullscreen"], [1, "easy-ion-item"], ["id", "easy-json-textarea", "placeholder", "\u8BF7\u8F93\u5165\u9700\u8981\u8F6C\u6362\u7684json\u5B57\u7B26\u4E32...", "autofocus", "true", "inputmode", "text", 3, "rows", "ngModel", "ionFocus", "ngModelChange"], [3, "click"], ["color", "success", 3, "click"], ["color", "danger", 3, "click"], ["class", "easy-error-block", 4, "ngIf"], ["class", "easy-success-block", 4, "ngIf"], [1, "easy-error-block"], [1, "easy-success-block"]], template: function JsonPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionFocus", function JsonPage_Template_ion_textarea_ionFocus_6_listener() { return ctx.ionFocus(); })("ngModelChange", function JsonPage_Template_ion_textarea_ngModelChange_6_listener($event) { return ctx.jsonValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JsonPage_Template_ion_button_click_9_listener() { return ctx.format(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u683C\u5F0F\u5316");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JsonPage_Template_ion_button_click_11_listener() { return ctx.copy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u590D\u5236");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JsonPage_Template_ion_button_click_13_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u4FDD\u5B58\u6587\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JsonPage_Template_ion_button_click_15_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u6E05\u7A7A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, JsonPage_pre_19_Template, 2, 1, "pre", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, JsonPage_pre_20_Template, 2, 1, "pre", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("ngModel", ctx.jsonValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage !== "");
    } }, directives: [_header_header_page__WEBPACK_IMPORTED_MODULE_2__["HeaderPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _footer_footer_page__WEBPACK_IMPORTED_MODULE_5__["FooterPage"]], styles: ["#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.easy-ion-item[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n}\n\n.easy-title-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.easy-error-block[_ngcontent-%COMP%] {\n  background: #FBE3E4;\n  display: block;\n  color: #D12F19;\n  margin-bottom: 1em;\n  border: 2px solid #FBC2C4;\n  padding: 0.8em;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  border-radius: 4px;\n}\n\n.easy-success-block[_ngcontent-%COMP%] {\n  background: #E6EFC2;\n  display: block;\n  color: #529214;\n  margin-bottom: 1em;\n  border: 2px solid #C6D880;\n  padding: 0.8em;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWFzeS9qc29uL2pzb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUlBO0VBQ0Usc0JBQUE7QUFERjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2Vhc3kvanNvbi9qc29uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcblxyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmVhc3ktaW9uLWl0ZW0ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuLmVhc3ktdGl0bGUtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmVhc3ktZXJyb3ItYmxvY2sge1xyXG4gIGJhY2tncm91bmQ6ICNGQkUzRTQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICNEMTJGMTk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNGQkMyQzQ7XHJcbiAgcGFkZGluZzogLjhlbTtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmVhc3ktc3VjY2Vzcy1ibG9jayB7XHJcbiAgYmFja2dyb3VuZDogI0U2RUZDMjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogIzUyOTIxNDtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgI0M2RDg4MDtcclxuICBwYWRkaW5nOiAuOGVtO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-json',
                templateUrl: 'json.page.html',
                styleUrls: ['json.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=json-json-module-es2015.js.map