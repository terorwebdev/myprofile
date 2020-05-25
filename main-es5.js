function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _layout_techskills_techskills_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./layout/techskills/techskills.component */
    "./src/app/layout/techskills/techskills.component.ts");
    /* harmony import */


    var _layout_aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layout/aboutme/aboutme.component */
    "./src/app/layout/aboutme/aboutme.component.ts");
    /* harmony import */


    var _layout_mycareer_mycareer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layout/mycareer/mycareer.component */
    "./src/app/layout/mycareer/mycareer.component.ts");
    /* harmony import */


    var _layout_mystudy_mystudy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout/mystudy/mystudy.component */
    "./src/app/layout/mystudy/mystudy.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _layout_aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_1__["AboutmeComponent"]
    }, {
      path: 'aboutme',
      component: _layout_aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_1__["AboutmeComponent"]
    }, {
      path: 'mycareer',
      component: _layout_mycareer_mycareer_component__WEBPACK_IMPORTED_MODULE_2__["MycareerComponent"]
    }, {
      path: 'mystudy',
      component: _layout_mystudy_mystudy_component__WEBPACK_IMPORTED_MODULE_3__["MystudyComponent"]
    }, {
      path: 'tech',
      component: _layout_techskills_techskills_component__WEBPACK_IMPORTED_MODULE_0__["TechskillsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'myresume';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout");
        }
      },
      directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _materials_materials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./materials/materials.module */
    "./src/app/materials/materials.module.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _layout_aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/aboutme/aboutme.component */
    "./src/app/layout/aboutme/aboutme.component.ts");
    /* harmony import */


    var _layout_mycareer_mycareer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./layout/mycareer/mycareer.component */
    "./src/app/layout/mycareer/mycareer.component.ts");
    /* harmony import */


    var _layout_mystudy_mystudy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./layout/mystudy/mystudy.component */
    "./src/app/layout/mystudy/mystudy.component.ts");
    /* harmony import */


    var _modals_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./modals/welcome/welcome.component */
    "./src/app/modals/welcome/welcome.component.ts");
    /* harmony import */


    var _layout_techskills_techskills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./layout/techskills/techskills.component */
    "./src/app/layout/techskills/techskills.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _materials_materials_module__WEBPACK_IMPORTED_MODULE_5__["MaterialsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _layout_aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_7__["AboutmeComponent"], _layout_mycareer_mycareer_component__WEBPACK_IMPORTED_MODULE_8__["MycareerComponent"], _layout_mystudy_mystudy_component__WEBPACK_IMPORTED_MODULE_9__["MystudyComponent"], _modals_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"], _layout_techskills_techskills_component__WEBPACK_IMPORTED_MODULE_11__["TechskillsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _materials_materials_module__WEBPACK_IMPORTED_MODULE_5__["MaterialsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _layout_aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_7__["AboutmeComponent"], _layout_mycareer_mycareer_component__WEBPACK_IMPORTED_MODULE_8__["MycareerComponent"], _layout_mystudy_mystudy_component__WEBPACK_IMPORTED_MODULE_9__["MystudyComponent"], _modals_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"], _layout_techskills_techskills_component__WEBPACK_IMPORTED_MODULE_11__["TechskillsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _materials_materials_module__WEBPACK_IMPORTED_MODULE_5__["MaterialsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/aboutme/aboutme.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/layout/aboutme/aboutme.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutmeComponent */

  /***/
  function srcAppLayoutAboutmeAboutmeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function () {
      return AboutmeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AboutmeComponent_span_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutmeComponent_span_42_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var item_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.goToLink(item_r1.url);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var AboutmeComponent = /*#__PURE__*/function () {
      function AboutmeComponent() {
        _classCallCheck(this, AboutmeComponent);

        this.mediasocial = [{
          id: 1,
          title: 'facebook',
          img: 'assets/image/mediasociallogo/facebook.png',
          url: 'https://www.facebook.com/mohdiskandarsamsuddin'
        }, {
          id: 2,
          title: 'instagram',
          img: 'assets/image/mediasociallogo/insta.png',
          url: 'https://www.instagram.com/kandaiiskandar'
        }, {
          id: 3,
          title: 'twitter',
          img: 'assets/image/mediasociallogo/twitter.png',
          url: 'https://twitter.com/kandaiiskandar'
        }, {
          id: 4,
          title: 'linkin',
          img: 'assets/image/mediasociallogo/linkedIn.png',
          url: 'https://www.linkedin.com/in/mohd-iskandar-samsuddin/'
        }, {
          id: 5,
          title: 'github',
          img: 'assets/image/mediasociallogo/GitHub.png',
          url: 'https://github.com/terorwebdev'
        }];
      }

      _createClass(AboutmeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToLink",
        value: function goToLink(url) {
          window.open(url, '_blank');
        }
      }]);

      return AboutmeComponent;
    }();

    AboutmeComponent.ɵfac = function AboutmeComponent_Factory(t) {
      return new (t || AboutmeComponent)();
    };

    AboutmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutmeComponent,
      selectors: [["app-aboutme"]],
      decls: 44,
      vars: 1,
      consts: [[1, "layout"], [1, "cardMargin"], [1, "row"], [2, "flex", "50"], [1, "profileKey"], [1, "profileValue"], [2, "display", "flex"], [1, "fill-remaining-space"], [4, "ngFor", "ngForOf"], [1, "ponter", 3, "click"], ["border", "1", 3, "src"]],
      template: function AboutmeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ": Mohd Iskandar Samsuddin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ": iskandarsamsuddin@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nationality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ": Malaysia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ": Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ": -");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Media Social");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AboutmeComponent_span_42_Template, 4, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mediasocial);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".layout[_ngcontent-%COMP%] {\n    padding: 10px;\n}\n\n.cardMargin[_ngcontent-%COMP%] {\n    margin: 4px;\n}\n\n.fill-remaining-space[_ngcontent-%COMP%] {\n    \n    flex: 1 1 auto;\n}\n\n.ponter[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.profileKey[_ngcontent-%COMP%] {\n    flex: 30;\n    font-weight: bold;\n}\n\n.profileValue[_ngcontent-%COMP%] {\n    flex: 120\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Fib3V0bWUvYWJvdXRtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJOzhDQUMwQztJQUMxQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFFBQVE7SUFDUixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Fib3V0bWUvYWJvdXRtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNhcmRNYXJnaW4ge1xuICAgIG1hcmdpbjogNHB4O1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAgIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cbkV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi5wb250ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2ZpbGVLZXkge1xuICAgIGZsZXg6IDMwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvZmlsZVZhbHVlIHtcbiAgICBmbGV4OiAxMjBcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aboutme',
          templateUrl: './aboutme.component.html',
          styleUrls: ['./aboutme.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _modals_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../modals/welcome/welcome.component */
    "./src/app/modals/welcome/welcome.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    function LayoutComponent_mat_toolbar_7_mat_nav_list_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r3.route);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.name);
      }
    }

    function LayoutComponent_mat_toolbar_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LayoutComponent_mat_toolbar_7_mat_nav_list_2_Template, 4, 2, "mat-nav-list", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.menuBar);
      }
    }

    function LayoutComponent_mat_sidenav_9_mat_nav_list_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r6.route);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.name);
      }
    }

    function LayoutComponent_mat_sidenav_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LayoutComponent_mat_sidenav_9_mat_nav_list_2_Template, 4, 2, "mat-nav-list", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.menuBar);
      }
    }

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent(dialog) {
        _classCallCheck(this, LayoutComponent);

        this.dialog = dialog;
        this.toolbarSize = {
          'height': '360px',
          'max-height': '360px'
        };
        this.logoActivate = false;
        this.menuBar = [{
          id: 1,
          route: 'aboutme',
          name: 'About Me'
        }, {
          id: 2,
          route: 'mycareer',
          name: 'Career'
        }, {
          id: 3,
          route: 'tech',
          name: 'Skills'
        }, {
          id: 4,
          route: 'mystudy',
          name: 'Certificates'
        }];
      }

      _createClass(LayoutComponent, [{
        key: "onScroll",
        value: function onScroll(e) {
          console.log('window', e);
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.size(event.target.innerWidth);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.size(window.innerWidth);
          this.openWelcome();
        }
      }, {
        key: "openWelcome",
        value: function openWelcome() {
          var dialogRef = this.dialog.open(_modals_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__["WelcomeComponent"], {
            width: 'auto',
            height: 'auto',
            data: ''
          });
          dialogRef.afterClosed().subscribe(function (result) {
            var incoming = result;
          });
        }
      }, {
        key: "size",
        value: function size(_size) {
          if (_size > 1000) {
            this.logoActivate = false;
            this.toolbarSize = {
              'height': '360px',
              'max-height': '360px'
            };
          }

          if (_size > 775 && _size <= 1000) {
            this.logoActivate = true;
            this.toolbarSize = {
              'height': '280px',
              'max-height': '280px'
            };
          }

          if (_size > 555 && _size <= 775) {
            this.logoActivate = true;
            this.toolbarSize = {
              'height': '230px',
              'max-height': '230px'
            };
          }

          if (_size <= 555) {
            this.logoActivate = true;
            this.toolbarSize = {
              'height': '190px',
              'max-height': '190px'
            };
          }
        }
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      hostBindings: function LayoutComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function LayoutComponent_scroll_HostBindingHandler($event) {
            return ctx.onScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("resize", function LayoutComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      decls: 12,
      vars: 3,
      consts: [[1, "example-container"], [1, "myPrimary", 3, "ngStyle"], [1, "fill-remaining-space"], [1, "row"], [1, "cell"], ["src", "assets/image/header/myheader.png"], [4, "ngIf"], [1, "example-sidenav-container"], ["mode", "side", "opened", "true", "class", "sideNav", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-list-item", "", "routerLinkActive", "active", 3, "routerLink"], ["mode", "side", "opened", "true", 1, "sideNav"], ["sidenav", ""], ["class", "sidenavSize", 4, "ngFor", "ngForOf"], [1, "sidenavSize"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LayoutComponent_mat_toolbar_7_Template, 3, 1, "mat-toolbar", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-sidenav-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LayoutComponent_mat_sidenav_9_Template, 3, 1, "mat-sidenav", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.toolbarSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logoActivate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.logoActivate);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"]],
      styles: [".example-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n.row[_ngcontent-%COMP%] {\n    display: flex;\n    box-orient: horizontal;\n    flex-direction: row;\n    box-pack: center;\n    justify-content: center;\n    box-align: center;\n    align-items: center;\n}\n\n.cell[_ngcontent-%COMP%] {\n    box-flex: 1;\n    flex: 1 1 auto;\n    text-align: center;\n}\n\nimg[_ngcontent-%COMP%] {\n    max-width: 100%;\n}\n\n.example-container[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n    \n    z-index: 2;\n    height: 360px;\n    max-height: 360px;\n}\n\nh1.example-app-name[_ngcontent-%COMP%] {\n    margin-left: 8px;\n}\n\n.example-sidenav-container[_ngcontent-%COMP%] {\n    flex: 1;\n}\n\n.example-sidenav-container[_ngcontent-%COMP%]   .sideNav[_ngcontent-%COMP%] {\n    width: 10%;\n    text-align: center;\n}\n\n.footer[_ngcontent-%COMP%] {\n    height: 30px;\n    background: #7b1fa2;\n}\n\n.break[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    height: 0;\n}\n\n.sidenavSize[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    text-transform: capitalize;\n    font-weight: bold;\n}\n\n.fill-remaining-space[_ngcontent-%COMP%] {\n    \n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtBQUNaOztBQUVBO0lBS0ksYUFBYTtJQUdiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFHbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUd2QixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBR0ksV0FBVztJQUVYLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksOEVBQThFO0lBQzlFLFVBQVU7SUFDVixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTsrQ0FDMkM7SUFDM0MsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgICAtbW96LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gICAgYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgYm94LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNlbGwge1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgLW1vei1ib3gtZmxleDogMTtcbiAgICBib3gtZmxleDogMTtcbiAgICAtd2Via2l0LWZsZXg6IDEgMSBhdXRvO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciAuZXhhbXBsZS10b29sYmFyIHtcbiAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXG4gICAgei1pbmRleDogMjtcbiAgICBoZWlnaHQ6IDM2MHB4O1xuICAgIG1heC1oZWlnaHQ6IDM2MHB4O1xufVxuXG5oMS5leGFtcGxlLWFwcC1uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIgLnNpZGVOYXYge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9vdGVyIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogIzdiMWZhMjtcbn1cblxuLmJyZWFrIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIGhlaWdodDogMDtcbn1cblxuLnNpZGVuYXZTaXplIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, {
        onScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:scroll', ['$event']]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layout/mycareer/mycareer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/layout/mycareer/mycareer.component.ts ***!
    \*******************************************************/

  /*! exports provided: MycareerComponent */

  /***/
  function srcAppLayoutMycareerMycareerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MycareerComponent", function () {
      return MycareerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MycareerComponent_mat_list_item_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r2 + 1, ". \xA0", task_r1, " ");
      }
    }

    var MycareerComponent = /*#__PURE__*/function () {
      function MycareerComponent() {
        _classCallCheck(this, MycareerComponent);

        this.taskList = ['Enhance and develop front and back end web application for Qubit Software solution.', 'Design and Implement in-house network architecture and IPTV solution.', 'Develop and Customize smart TV and digital signage apps of Samsung and LG device based on operating system Tizen and Procentric.', 'Participating in software testing for LG Procentric operating system (LG R&D Korea).', 'Develop Internal-External and Partner API for system integration.', 'Develop Central Service Management system to analyse, manage, monitor and control remote devices. As well as developing cloud base centralize system for managing multiple sites.', 'Develop Content Management System to manage the physical file and metadata deliver to Smart Interactive TV and Smart digital signage.', 'Develop Content Delivery Network to deliver physical file to remote sites.', 'Development of Integration module with hotel Property Management System (PMS) and Hospital Information System (HIS).'];
      }

      _createClass(MycareerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MycareerComponent;
    }();

    MycareerComponent.ɵfac = function MycareerComponent_Factory(t) {
      return new (t || MycareerComponent)();
    };

    MycareerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MycareerComponent,
      selectors: [["app-mycareer"]],
      decls: 34,
      vars: 1,
      consts: [[1, "layout"], [1, "cardMargin"], [4, "ngFor", "ngForOf"]],
      template: function MycareerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profession");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Currently working as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fullstack Software Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " since 2017; developing both the front and back end of web application and also developing integrate software with machines (IoT). I'm handle the entire stack, including databases, servers, systems engineering, and clients. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Working Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Qubit Interactive Sdn Bhd (2017 - Present) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Fast moving software development company, specialized in IPTV and Smart TV solution for hospitality market. The company has been established by media solution experts from Korea and Malaysia. Qubit Interactive takes up the biggest market share for hospitality smart TV solution service in Malaysia and the key players in South East Asia. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Software Developer Tasks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MycareerComponent_mat_list_item_27_Template, 2, 2, "mat-list-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Project Involves ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.taskList);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"]],
      styles: [".layout[_ngcontent-%COMP%] {\n    padding: 10px;\n}\n\n.cardMargin[_ngcontent-%COMP%] {\n    margin: 4px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L215Y2FyZWVyL215Y2FyZWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9teWNhcmVlci9teWNhcmVlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNhcmRNYXJnaW4ge1xuICAgIG1hcmdpbjogNHB4XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MycareerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mycareer',
          templateUrl: './mycareer.component.html',
          styleUrls: ['./mycareer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/mystudy/mystudy.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/layout/mystudy/mystudy.component.ts ***!
    \*****************************************************/

  /*! exports provided: MystudyComponent */

  /***/
  function srcAppLayoutMystudyMystudyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MystudyComponent", function () {
      return MystudyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var MystudyComponent = /*#__PURE__*/function () {
      function MystudyComponent() {
        _classCallCheck(this, MystudyComponent);
      }

      _createClass(MystudyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNavigate",
        value: function onNavigate() {
          // your logic here.... like set the url
          var url = 'https://simsweb.uitm.edu.my/sportal_app/graduat/';
          window.open(url, '_blank');
        }
      }]);

      return MystudyComponent;
    }();

    MystudyComponent.ɵfac = function MystudyComponent_Factory(t) {
      return new (t || MystudyComponent)();
    };

    MystudyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MystudyComponent,
      selectors: [["app-mystudy"]],
      decls: 47,
      vars: 0,
      consts: [[1, "layout"], [1, "cardMargin"], [1, "row"], [3, "click"]],
      template: function MystudyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Master");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ": Master of Science in Computer Networking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Degree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ": Bachelor of Computer Science(hons) Data Communication & Networking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Diploma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ": Computer Science");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Verification : click\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MystudyComponent_Template_a_click_26_listener() {
            return ctx.onNavigate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "**fullname : mohd iskandar bin samsuddin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Professional Certificates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Big Data Engineering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cisco Certified Network Associate (CCNA)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Microsoft SQL Server 2008");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
      styles: [".layout[_ngcontent-%COMP%] {\n    padding: 10px;\n}\n\n.cardMargin[_ngcontent-%COMP%] {\n    margin: 4px\n}\n\n.profileKey[_ngcontent-%COMP%] {\n    flex: 30;\n    font-weight: bold;\n}\n\n.profileValue[_ngcontent-%COMP%] {\n    flex: 120\n}\n\n\n\na[_ngcontent-%COMP%]:hover {\n    color: hotpink;\n}\n\n\n\na[_ngcontent-%COMP%]:active {\n    color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L215c3R1ZHkvbXlzdHVkeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7QUFDSjs7QUFHQSxvQkFBb0I7O0FBRXBCO0lBQ0ksY0FBYztBQUNsQjs7QUFHQSxrQkFBa0I7O0FBRWxCO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L215c3R1ZHkvbXlzdHVkeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNhcmRNYXJnaW4ge1xuICAgIG1hcmdpbjogNHB4XG59XG5cbi5wcm9maWxlS2V5IHtcbiAgICBmbGV4OiAzMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2ZpbGVWYWx1ZSB7XG4gICAgZmxleDogMTIwXG59XG5cblxuLyogbW91c2Ugb3ZlciBsaW5rICovXG5cbmE6aG92ZXIge1xuICAgIGNvbG9yOiBob3RwaW5rO1xufVxuXG5cbi8qIHNlbGVjdGVkIGxpbmsgKi9cblxuYTphY3RpdmUge1xuICAgIGNvbG9yOiBibHVlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MystudyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mystudy',
          templateUrl: './mystudy.component.html',
          styleUrls: ['./mystudy.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/techskills/techskills.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/layout/techskills/techskills.component.ts ***!
    \***********************************************************/

  /*! exports provided: TechskillsComponent */

  /***/
  function srcAppLayoutTechskillsTechskillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechskillsComponent", function () {
      return TechskillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TechskillsComponent_mat_list_item_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r3 = ctx.$implicit;
        var i_r4 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r4 + 1, ". \xA0", task_r3, " ");
      }
    }

    function TechskillsComponent_mat_list_item_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r5 = ctx.$implicit;
        var i_r6 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r6 + 1, ". \xA0", task_r5, " ");
      }
    }

    function TechskillsComponent_mat_list_item_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r7 = ctx.$implicit;
        var i_r8 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r8 + 1, ". \xA0", task_r7, " ");
      }
    }

    var TechskillsComponent = /*#__PURE__*/function () {
      function TechskillsComponent() {
        _classCallCheck(this, TechskillsComponent);

        this.webFramework = ['Phoenix', 'Chicago Boss', 'Django', 'Angular JS and IO', 'NodeJS'];
        this.programming = ['TypeScript – 80%', 'JavaScript – 90%', 'Elixir – 70%', 'Erlang – 80%', 'Python – 50%'];
        this.technostack = ['Linux Operating System – Ubuntu', 'Distributed System Development', 'Umbrealla Project', 'Embedded System – IoT', 'Data Engineering – System Integration', 'SQL and NOSQL Database – JSON', 'Content Delivery Network – CDN', 'Microservice – Docker'];
      }

      _createClass(TechskillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TechskillsComponent;
    }();

    TechskillsComponent.ɵfac = function TechskillsComponent_Factory(t) {
      return new (t || TechskillsComponent)();
    };

    TechskillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TechskillsComponent,
      selectors: [["app-techskills"]],
      decls: 26,
      vars: 3,
      consts: [[1, "layout"], [1, "cardMargin"], [4, "ngFor", "ngForOf"]],
      template: function TechskillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Technology Stack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Web App Framework ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TechskillsComponent_mat_list_item_11_Template, 2, 2, "mat-list-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Programming ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TechskillsComponent_mat_list_item_18_Template, 2, 2, "mat-list-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Tools ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TechskillsComponent_mat_list_item_25_Template, 2, 2, "mat-list-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.webFramework);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.programming);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.technostack);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"]],
      styles: [".layout[_ngcontent-%COMP%] {\n    padding: 10px;\n}\n\n.cardMargin[_ngcontent-%COMP%] {\n    margin: 4px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RlY2hza2lsbHMvdGVjaHNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdGVjaHNraWxscy90ZWNoc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZE1hcmdpbiB7XG4gICAgbWFyZ2luOiA0cHhcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechskillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-techskills',
          templateUrl: './techskills.component.html',
          styleUrls: ['./techskills.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/materials/materials.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/materials/materials.module.ts ***!
    \***********************************************/

  /*! exports provided: MaterialsModule */

  /***/
  function srcAppMaterialsMaterialsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialsModule", function () {
      return MaterialsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var mat_video__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! mat-video */
    "./node_modules/mat-video/__ivy_ngcc__/fesm2015/mat-video.js");
    /* harmony import */


    var ngx_audio_player__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ngx-audio-player */
    "./node_modules/ngx-audio-player/__ivy_ngcc__/fesm2015/ngx-audio-player.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ng-click-outside */
    "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");

    var MaterialsModule = function MaterialsModule() {
      _classCallCheck(this, MaterialsModule);
    };

    MaterialsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialsModule
    });
    MaterialsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialsModule_Factory(t) {
        return new (t || MaterialsModule)();
      },
      imports: [[// additional
      mat_video__WEBPACK_IMPORTED_MODULE_50__["MatVideoModule"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_51__["NgxAudioPlayerModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_52__["ClickOutsideModule"], // CDK
      _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__["A11yModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["BidiModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__["DragDropModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__["ObserversModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__["PlatformModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__["CdkTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_38__["BrowserAnimationsModule"], // angular
      _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__["MatTreeModule"]], // additional
      mat_video__WEBPACK_IMPORTED_MODULE_50__["MatVideoModule"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_51__["NgxAudioPlayerModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_52__["ClickOutsideModule"], // CDK
      _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__["A11yModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["BidiModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__["DragDropModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__["ObserversModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__["PlatformModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__["CdkTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_38__["BrowserAnimationsModule"], // angular
      _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__["MatTreeModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialsModule, {
        imports: [// additional
        mat_video__WEBPACK_IMPORTED_MODULE_50__["MatVideoModule"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_51__["NgxAudioPlayerModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_52__["ClickOutsideModule"], // CDK
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__["A11yModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["BidiModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__["DragDropModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__["ObserversModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__["PlatformModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__["CdkTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_38__["BrowserAnimationsModule"], // angular
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__["MatTreeModule"]],
        exports: [// additional
        mat_video__WEBPACK_IMPORTED_MODULE_50__["MatVideoModule"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_51__["NgxAudioPlayerModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_52__["ClickOutsideModule"], // CDK
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__["A11yModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["BidiModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__["DragDropModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__["ObserversModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__["PlatformModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__["CdkTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_38__["BrowserAnimationsModule"], // angular
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__["MatTreeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [// additional
          mat_video__WEBPACK_IMPORTED_MODULE_50__["MatVideoModule"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_51__["NgxAudioPlayerModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_52__["ClickOutsideModule"], // CDK
          _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__["A11yModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["BidiModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__["DragDropModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__["ObserversModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__["PlatformModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__["CdkTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_38__["BrowserAnimationsModule"], // angular
          _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__["MatTreeModule"]],
          exports: [// additional
          mat_video__WEBPACK_IMPORTED_MODULE_50__["MatVideoModule"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_51__["NgxAudioPlayerModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_52__["ClickOutsideModule"], // CDK
          _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__["A11yModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["BidiModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__["DragDropModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__["ObserversModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__["PlatformModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__["CdkTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_38__["BrowserAnimationsModule"], // angular
          _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__["MatTreeModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modals/welcome/welcome.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modals/welcome/welcome.component.ts ***!
    \*****************************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppModalsWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var WelcomeComponent = /*#__PURE__*/function () {
      function WelcomeComponent(dialogRef, data) {
        _classCallCheck(this, WelcomeComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cancel",
        value: function cancel() {
          this.dialogRef.close({
            event: 'Cancel',
            data: ''
          });
        }
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
      return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8));
    };

    WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeComponent,
      selectors: [["app-welcome"]],
      decls: 11,
      vars: 0,
      consts: [["matDialogTitle", ""], ["mat-raised-button", "", 1, "myPrimary", 3, "click"]],
      template: function WelcomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Hi, i'm Iskandar. Thanks for visiting my site. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " This site made with Angular 9 and Hosted by Github. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Click 'OK' to see more.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_9_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-welcome',
          templateUrl: './welcome.component.html',
          styleUrls: ['./welcome.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /opt/zandar/resume/resume/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map