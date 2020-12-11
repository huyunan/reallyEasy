(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["easy-easy-module"], {
    /***/
    "./src/app/easy/easy-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/easy/easy-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: EasyPageRoutingModule */

    /***/
    function srcAppEasyEasyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EasyPageRoutingModule", function () {
        return EasyPageRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/_@angular_core@10.0.14@@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/_@angular_router@10.0.14@@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home-home-module */
          [__webpack_require__.e("default~global-global-module~home-home-module~json-json-module~variable-variable-module"), __webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/easy/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'json',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | json-json-module */
          [__webpack_require__.e("default~global-global-module~home-home-module~json-json-module~variable-variable-module"), __webpack_require__.e("common"), __webpack_require__.e("json-json-module")]).then(__webpack_require__.bind(null,
          /*! ./json/json.module */
          "./src/app/easy/json/json.module.ts")).then(function (m) {
            return m.JsonPageModule;
          });
        }
      }, {
        path: 'global',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | global-global-module */
          [__webpack_require__.e("default~global-global-module~home-home-module~json-json-module~variable-variable-module"), __webpack_require__.e("global-global-module")]).then(__webpack_require__.bind(null,
          /*! ./global/global.module */
          "./src/app/easy/global/global.module.ts")).then(function (m) {
            return m.GlobalPageModule;
          });
        }
      }, {
        path: 'variable',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | variable-variable-module */
          [__webpack_require__.e("default~global-global-module~home-home-module~json-json-module~variable-variable-module"), __webpack_require__.e("variable-variable-module")]).then(__webpack_require__.bind(null,
          /*! ./variable/variable.module */
          "./src/app/easy/variable/variable.module.ts")).then(function (m) {
            return m.VariablePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }];

      var EasyPageRoutingModule = function EasyPageRoutingModule() {
        _classCallCheck(this, EasyPageRoutingModule);
      };

      EasyPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EasyPageRoutingModule
      });
      EasyPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EasyPageRoutingModule_Factory(t) {
          return new (t || EasyPageRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EasyPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EasyPageRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/easy/easy.module.ts":
    /*!*************************************!*\
      !*** ./src/app/easy/easy.module.ts ***!
      \*************************************/

    /*! exports provided: EasyPageModule */

    /***/
    function srcAppEasyEasyModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EasyPageModule", function () {
        return EasyPageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/_@angular_core@10.0.14@@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/_@angular_common@10.0.14@@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/_@ionic_angular@5.5.1@@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/_@angular_forms@10.0.14@@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _easy_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./easy-routing.module */
      "./src/app/easy/easy-routing.module.ts");

      var EasyPageModule = function EasyPageModule() {
        _classCallCheck(this, EasyPageModule);
      };

      EasyPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EasyPageModule
      });
      EasyPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EasyPageModule_Factory(t) {
          return new (t || EasyPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _easy_routing_module__WEBPACK_IMPORTED_MODULE_4__["EasyPageRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EasyPageModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _easy_routing_module__WEBPACK_IMPORTED_MODULE_4__["EasyPageRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EasyPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _easy_routing_module__WEBPACK_IMPORTED_MODULE_4__["EasyPageRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=easy-easy-module-es5.js.map