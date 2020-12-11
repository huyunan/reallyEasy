(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/easy/home/home.module.ts":
/*!******************************************!*\
  !*** ./src/app/easy/home/home.module.ts ***!
  \******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@10.0.14@@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@10.0.14@@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/_@ionic_angular@5.5.1@@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@10.0.14@@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.page */ "./src/app/easy/home/home.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@10.0.14@@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.module */ "./src/app/easy/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/easy/footer/footer.module.ts");










class HomePageModule {
}
HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomePageModule_Factory(t) { return new (t || HomePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderPageModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"],
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderPageModule"],
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterPageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageModule, [{
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
                            component: _home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"],
                        }
                    ])
                ],
                declarations: [_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/easy/home/home.page.ts":
/*!****************************************!*\
  !*** ./src/app/easy/home/home.page.ts ***!
  \****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@10.0.14@@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@10.0.14@@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_header_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.page */ "./src/app/easy/header/header.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/_@ionic_angular@5.5.1@@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@10.0.14@@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.page */ "./src/app/easy/footer/footer.page.ts");







const _c0 = function () { return ["/easy/json"]; };
const _c1 = function () { return ["/easy/global"]; };
const _c2 = function () { return ["/easy/variable"]; };
class HomePage {
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
HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(); };
HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-home"]], decls: 19, vars: 7, consts: [[3, "fullscreen"], [3, "routerLink"], ["src", "./assets/imgs/json.png", "width", "200px", "height", "200px"], ["src", "./assets/imgs/global.png", "width", "200px", "height", "200px"], ["src", "./assets/imgs/variable.png", "width", "200px", "height", "200px"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "global");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "variable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    } }, directives: [_header_header_page__WEBPACK_IMPORTED_MODULE_2__["HeaderPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardTitle"], _footer_footer_page__WEBPACK_IMPORTED_MODULE_5__["FooterPage"]], styles: ["#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.easy-ion-item[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n}\n\n.easy-title-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.easy-error-block[_ngcontent-%COMP%] {\n  background: #FBE3E4;\n  display: block;\n  color: #D12F19;\n  margin-bottom: 1em;\n  border: 2px solid #FBC2C4;\n  padding: 0.8em;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  border-radius: 4px;\n}\n\n.easy-success-block[_ngcontent-%COMP%] {\n  background: #E6EFC2;\n  display: block;\n  color: #529214;\n  margin-bottom: 1em;\n  border: 2px solid #C6D880;\n  padding: 0.8em;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  border-radius: 4px;\n}\n\nion-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWFzeS9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUlBO0VBQ0Usc0JBQUE7QUFERjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9lYXN5L2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gIGNvbG9yOiAjOGM4YzhjO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5lYXN5LWlvbi1pdGVtIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbi5lYXN5LXRpdGxlLWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5lYXN5LWVycm9yLWJsb2NrIHtcclxuICBiYWNrZ3JvdW5kOiAjRkJFM0U0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjRDEyRjE5O1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjRkJDMkM0O1xyXG4gIHBhZGRpbmc6IC44ZW07XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5lYXN5LXN1Y2Nlc3MtYmxvY2sge1xyXG4gIGJhY2tncm91bmQ6ICNFNkVGQzI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICM1MjkyMTQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNDNkQ4ODA7XHJcbiAgcGFkZGluZzogLjhlbTtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: 'home.page.html',
                styleUrls: ['home.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map