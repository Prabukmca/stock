(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+VNb":
    /*!*************************************!*\
      !*** ./src/app/portfolio.module.ts ***!
      \*************************************/

    /*! exports provided: PortfolioModule */

    /***/
    function VNb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioModule", function () {
        return PortfolioModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var ng2_handsontable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-handsontable */
      "C4Qa");
      /* harmony import */


      var _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./portfolio-routing.module */
      "Gu3e");
      /* harmony import */


      var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./portfolio/portfolio.component */
      "zyDg");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _state_portfolio_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./state/portfolio.reducer */
      "zaEQ");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _features_data_manager_data_manager_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./features/data-manager/data-manager.module */
      "e9Vn");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "44PX");
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      "B3rN");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngrx/effects */
      "snw9");
      /* harmony import */


      var _app_services_app_config_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./app-services/app-config.service */
      "IRqv");
      /* harmony import */


      var _shared_directives_AdDirective_ad_directive_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./shared/directives/AdDirective/ad-directive.directive */
      "dofB");
      /* harmony import */


      var _features_components_stock_stock_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./features/components/stock/stock.component */
      "0SMn");
      /* harmony import */


      var _features_components_hottable_demo_hottable_demo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./features/components/hottable-demo/hottable-demo.component */
      "nu+5"); // import { HotTableModule } from '@handsontable/angular';


      var PortfolioModule = function PortfolioModule() {
        _classCallCheck(this, PortfolioModule);
      };

      PortfolioModule.ɵfac = function PortfolioModule_Factory(t) {
        return new (t || PortfolioModule)();
      };

      PortfolioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PortfolioModule,
        bootstrap: [_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"]]
      });
      PortfolioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
          useFactory: _app_services_app_config_service__WEBPACK_IMPORTED_MODULE_18__["initializeApp"],
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]],
          multi: true
        }, {
          provide: "Stock_Security_Service",
          useFactory: _app_services_app_config_service__WEBPACK_IMPORTED_MODULE_18__["initializeSecurity"]
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_7__["PortfolioRoutingModule"], _features_data_manager_data_manager_module__WEBPACK_IMPORTED_MODULE_13__["DataManagerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({
          PortfolioReducer: _state_portfolio_reducer__WEBPACK_IMPORTED_MODULE_10__["PortfolioReducer"]
        }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsModule"].forRoot([]), ng2_handsontable__WEBPACK_IMPORTED_MODULE_6__["HotTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsModule"].forRoot(), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"].instrument({
          name: "stock dev tools",
          maxAge: 25,
          logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production
        })], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortfolioModule, {
          declarations: [_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"], _features_components_stock_stock_component__WEBPACK_IMPORTED_MODULE_20__["StockComponent"], _features_components_hottable_demo_hottable_demo_component__WEBPACK_IMPORTED_MODULE_21__["HottableDemoComponent"], _shared_directives_AdDirective_ad_directive_directive__WEBPACK_IMPORTED_MODULE_19__["AdDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_7__["PortfolioRoutingModule"], _features_data_manager_data_manager_module__WEBPACK_IMPORTED_MODULE_13__["DataManagerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsRootModule"], ng2_handsontable__WEBPACK_IMPORTED_MODULE_6__["HotTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"]],
          exports: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]]
        });
      })();
      /***/

    },

    /***/
    "/sJ5":
    /*!**********************************************************************!*\
      !*** ./src/app/features/data-manager/data-manager-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: DataManagerRoutingModule */

    /***/
    function sJ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataManagerRoutingModule", function () {
        return DataManagerRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _data_manager_data_manager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data-manager/data-manager.component */
      "nWpw");
      /* harmony import */


      var _data_explorer_data_explorer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./data-explorer/data-explorer.component */
      "SqQa");
      /* harmony import */


      var _data_manager_details_data_manager_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data-manager-details/data-manager-details.component */
      "rYem");
      /* harmony import */


      var _portfolio_can_deactive_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../portfolio/can-deactive.guard */
      "HnDx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _data_manager_data_manager_component__WEBPACK_IMPORTED_MODULE_1__["DataManagerComponent"],
        children: [{
          path: "",
          redirectTo: "dataexplorer",
          pathMatch: "full"
        }, {
          path: "dataexplorer",
          component: _data_explorer_data_explorer_component__WEBPACK_IMPORTED_MODULE_2__["DataExplorerComponent"],
          canDeactivate: [_portfolio_can_deactive_guard__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateGuard"]]
        }, {
          path: "detail",
          component: _data_manager_details_data_manager_details_component__WEBPACK_IMPORTED_MODULE_3__["DataManagerDetailsComponent"]
        }]
      }];

      var DataManagerRoutingModule = function DataManagerRoutingModule() {
        _classCallCheck(this, DataManagerRoutingModule);
      };

      DataManagerRoutingModule.components = [_data_manager_data_manager_component__WEBPACK_IMPORTED_MODULE_1__["DataManagerComponent"], _data_explorer_data_explorer_component__WEBPACK_IMPORTED_MODULE_2__["DataExplorerComponent"], _data_manager_details_data_manager_details_component__WEBPACK_IMPORTED_MODULE_3__["DataManagerDetailsComponent"]];

      DataManagerRoutingModule.ɵfac = function DataManagerRoutingModule_Factory(t) {
        return new (t || DataManagerRoutingModule)();
      };

      DataManagerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: DataManagerRoutingModule
      });
      DataManagerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DataManagerRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
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
      /*! G:\HomeWork\Angular\my-github-repositories\stock-market-checking-github\stock\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0SMn":
    /*!**************************************************************!*\
      !*** ./src/app/features/components/stock/stock.component.ts ***!
      \**************************************************************/

    /*! exports provided: StockComponent */

    /***/
    function SMn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StockComponent", function () {
        return StockComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/portfolio.service */
      "uOSv");

      var StockComponent = /*#__PURE__*/function () {
        function StockComponent(portfolioService) {
          _classCallCheck(this, StockComponent);

          this.portfolioService = portfolioService;
        }

        _createClass(StockComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("stock init");
            var tax$ = this.portfolioService.getTaxSavings().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              data[1].title = "this too";
              return data;
            }));
            this.portfolioService.getTaxSavings().subscribe(function (data) {
              return console.log("Subscribed Tax", data);
            });
            tax$.subscribe(function (tax) {
              return console.log("tax changed", tax);
            });
            this.test4().then(function (data) {});
            this.test5();
            this.test1();
            this.test2();
            this.test3();
          }
        }, {
          key: "test1",
          value: function test1() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.update(10000);

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "test2",
          value: function test2() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.update(20000);

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "test3",
          value: function test3() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.update(30000);

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "test4",
          value: function test4() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.update(40000);

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "test5",
          value: function test5() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.update(50000);

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "update",
          value: function update(from) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      // setTimeout(() => {
                      //   console.log(from);
                      // }, from);
                      console.log(from);

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }]);

        return StockComponent;
      }();

      StockComponent.ɵfac = function StockComponent_Factory(t) {
        return new (t || StockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_portfolio_service__WEBPACK_IMPORTED_MODULE_3__["PortfolioService"]));
      };

      StockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: StockComponent,
        selectors: [["smc-stock"]],
        decls: 4,
        vars: 1,
        consts: [[1, "container-fluid"], [1, "jumbotron"]],
        template: function StockComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Stock - Component -- ", ctx.isChildDeleted, "");
          }
        },
        styles: [".jumbotron[_ngcontent-%COMP%] {\n  background-color: darkslategrey !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RvY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtBQUNKIiwiZmlsZSI6InN0b2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5ICFpbXBvcnRhbnQ7IFxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "9+ko":
    /*!*************************************************************************!*\
      !*** ./src/app/features/components/hottable-demo/hottable-demo.data.ts ***!
      \*************************************************************************/

    /*! exports provided: getBasicData */

    /***/
    function ko(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBasicData", function () {
        return getBasicData;
      });

      function getBasicData() {
        var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
        var products = [{
          description: 'Big Mac',
          options: [{
            description: 'Big Mac'
          }, {
            description: 'Big Mac & Co'
          }, {
            description: 'McRoyal'
          }, {
            description: 'Hamburger'
          }, {
            description: 'Cheeseburger'
          }, {
            description: 'Double Cheeseburger'
          }]
        }, {
          description: 'Fried Potatoes',
          options: [{
            description: 'Fried Potatoes'
          }, {
            description: 'Fried Onions'
          }]
        }];
        var firstNames = ['Ted', 'John', 'Macy', 'Rob', 'Gwen', 'Fiona', 'Mario', 'Ben', 'Kate', 'Kevin', 'Thomas', 'Frank'];
        var lastNames = ['Tired', 'Johnson', 'Moore', 'Rocket', 'Goodman', 'Farewell', 'Manson', 'Bentley', 'Kowalski', 'Schmidt', 'Tucker', 'Fancy'];
        var address = ['Turkey', 'Japan', 'Michigan', 'Russia', 'Greece', 'France', 'USA', 'Germany', 'Sweden', 'Denmark', 'Poland', 'Belgium'];
        var items = [];
        var product;
        var newProduct;

        for (var i = 0; i < rows; i++) {
          // clone expected product
          product = products[Math.floor(Math.random() * products.length)];
          newProduct = {
            description: product.description,
            options: []
          };
          product.options.forEach(function (p) {
            newProduct.options.push({
              description: p.description
            });
          }); /// clone expected product

          items.push({
            id: i + 1,
            name: {
              first: firstNames[Math.floor(Math.random() * firstNames.length)],
              last: lastNames[Math.floor(Math.random() * lastNames.length)]
            },
            date: "".concat(Math.max(Math.round(Math.random() * 12), 1), " / ").concat(Math.max(Math.round(Math.random() * 28), 1), " /\n        ").concat(Math.round(Math.random() * 80) + 1940),
            address: "".concat(Math.floor(Math.random() * 100000), " ").concat(address[Math.floor(Math.random() * address.length)]),
            price: Math.floor(Math.random() * 100000) / 100,
            isActive: Math.floor(Math.random() * products.length) / 2 === 0 ? 'Yes' : 'No',
            product: newProduct
          });
        }

        return items;
      }
      /***/

    },

    /***/
    "9YYz":
    /*!********************************************************************!*\
      !*** ./src/app/features/data-manager/state/dataManager.reducer.ts ***!
      \********************************************************************/

    /*! exports provided: reducer */

    /***/
    function YYz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reducer", function () {
        return reducer;
      });

      function reducer(state, action) {
        switch (action.type) {
          case "UNSAVED_CHANGES_DETECTED":
            return Object.assign(Object.assign({}, state), {
              showDialog: action.payload
            });

          case "ADD_TAB":
            return Object.assign(Object.assign({}, state), {
              tab: action.payload
            });

          default:
            return state;
        }
      }
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
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
    "FmEI":
    /*!***********************************************************************************!*\
      !*** ./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/demo.worker.ts ***!
      \***********************************************************************************/

    /*! no static exports found */

    /***/
    function FmEI(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + "0-es5.worker.js";
      /***/
    },

    /***/
    "Gu3e":
    /*!*********************************************!*\
      !*** ./src/app/portfolio-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: PortfolioRoutingModule */

    /***/
    function Gu3e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioRoutingModule", function () {
        return PortfolioRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _features_components_stock_stock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./features/components/stock/stock.component */
      "0SMn");
      /* harmony import */


      var _features_components_hottable_demo_hottable_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./features/components/hottable-demo/hottable-demo.component */
      "nu+5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        redirectTo: "/stock",
        pathMatch: "full"
      }, {
        path: "stock",
        component: _features_components_stock_stock_component__WEBPACK_IMPORTED_MODULE_1__["StockComponent"]
      }, {
        path: "datamanager",
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./features/data-manager/data-manager.module */
          "e9Vn")).then(function (d) {
            return d.DataManagerModule;
          });
        }
      }, {
        path: "hottabledemo",
        component: _features_components_hottable_demo_hottable_demo_component__WEBPACK_IMPORTED_MODULE_2__["HottableDemoComponent"]
      }, {
        path: "layers",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-layer-layer-module */
          "features-layer-layer-module").then(__webpack_require__.bind(null,
          /*! ./features/layer/layer.module */
          "Xy09")).then(function (l) {
            return l.LayerModule;
          });
        }
      }, {
        path: "lac",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-lac-lac-module */
          "features-lac-lac-module").then(__webpack_require__.bind(null,
          /*! ./features/lac/lac.module */
          "c/zl")).then(function (l) {
            return l.LacModule;
          });
        }
      }, {
        path: "reactivepattern",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-reactive-pattern-reactive-pattern-module */
          "features-reactive-pattern-reactive-pattern-module").then(__webpack_require__.bind(null,
          /*! ./features/reactive-pattern/reactive-pattern.module */
          "bcJV")).then(function (r) {
            return r.ReactivePatternModule;
          });
        }
      }, {
        path: "ps",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-summary-summary-module */
          "features-summary-summary-module").then(__webpack_require__.bind(null,
          /*! ./features/summary/summary.module */
          "8Zp9")).then(function (l) {
            return l.SummaryModule;
          });
        }
      }, // {
      //   path: "ps",
      //   loadChildren: () =>
      //     import("./features/summary/summary.module").then((l) => l.SummaryModule),
      // },
      {
        path: "auth",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-auth-auth-module */
          "features-auth-auth-module").then(__webpack_require__.bind(null,
          /*! ./features/auth/auth.module */
          "YuuO")).then(function (a) {
            return a.AuthModule;
          });
        }
      }];

      var PortfolioRoutingModule = function PortfolioRoutingModule() {
        _classCallCheck(this, PortfolioRoutingModule);
      };

      PortfolioRoutingModule.components = [_features_components_stock_stock_component__WEBPACK_IMPORTED_MODULE_1__["StockComponent"], _features_components_hottable_demo_hottable_demo_component__WEBPACK_IMPORTED_MODULE_2__["HottableDemoComponent"]];

      PortfolioRoutingModule.ɵfac = function PortfolioRoutingModule_Factory(t) {
        return new (t || PortfolioRoutingModule)();
      };

      PortfolioRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: PortfolioRoutingModule
      });
      PortfolioRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          useHash: true,
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PortfolioRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "HnDx":
    /*!*************************************************!*\
      !*** ./src/app/portfolio/can-deactive.guard.ts ***!
      \*************************************************/

    /*! exports provided: CanDeactivateGuard */

    /***/
    function HnDx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function () {
        return CanDeactivateGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CanDeactivateGuard = /*#__PURE__*/function () {
        function CanDeactivateGuard() {
          _classCallCheck(this, CanDeactivateGuard);
        }

        _createClass(CanDeactivateGuard, [{
          key: "canDeactivate",
          value: function canDeactivate(component) {
            return component.canDeactivate ? component.canDeactivate() : true;
          }
        }]);

        return CanDeactivateGuard;
      }();

      CanDeactivateGuard.ɵfac = function CanDeactivateGuard_Factory(t) {
        return new (t || CanDeactivateGuard)();
      };

      CanDeactivateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CanDeactivateGuard,
        factory: CanDeactivateGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "IRqv":
    /*!****************************************************!*\
      !*** ./src/app/app-services/app-config.service.ts ***!
      \****************************************************/

    /*! exports provided: initializeApp, initializeSecurity */

    /***/
    function IRqv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initializeApp", function () {
        return initializeApp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initializeSecurity", function () {
        return initializeSecurity;
      });
      /* harmony import */


      var _app_init_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-init-data */
      "tWiv"); // @Injectable()
      // export class AppInitService {
      //   constructor(private http: HttpClient) {
      //     this.LoadConfig().subscribe((data) => {
      //       console.log("data got it", data);
      //     });
      //   }
      //   LoadConfig(): Observable<any> {
      //     const path = "./assets/config.json";
      //     return this.http.get(path).pipe(
      //       map((res: any) => res),
      //       catchError((err) => of(err))
      //     );
      //   }
      // }
      //#region Public Methods


      function initializeApp(http) {
        // return () => {};
        return function () {
          var path = "./assets/config.json";
          return new Promise(function (resolve, reject) {
            http.get(path).toPromise().then(function (data) {
              _app_init_data__WEBPACK_IMPORTED_MODULE_0__["AppData"].config = data;
              resolve();
            })["catch"](function (error) {
              reject(error);
            });
          });
        };
      }

      function initializeSecurity() {
        return {
          getUserDataApi: '/api/login'
        };
      } // export function initializeApp() {
      // const path = "./assets/config.json";
      // return new Promise<void>((resolve, reject) => {
      //   return this.http.get(path).pipe(
      //     map((res: any) => <AppData>res),
      //     catchError(err => of(err))
      //   );
      // });
      // }
      //#endregion

      /***/

    },

    /***/
    "ORyt":
    /*!*********************************************!*\
      !*** ./src/app/portfolio/dialog.service.ts ***!
      \*********************************************/

    /*! exports provided: DialogService */

    /***/
    function ORyt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogService", function () {
        return DialogService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * Async modal dialog service
       * DialogService makes this app easier to test by faking this service.
       * TODO: better modal implementation that doesn't use window.confirm
       */


      var DialogService = /*#__PURE__*/function () {
        function DialogService() {
          _classCallCheck(this, DialogService);
        }

        _createClass(DialogService, [{
          key: "confirm",
          value:
          /**
           * Ask user to confirm an action. `message` explains the action and choices.
           * Returns observable resolving to `true`=confirm or `false`=cancel
           */
          function confirm(message) {
            var confirmation = window.confirm(message || 'Is it OK?');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(confirmation);
          }
        }]);

        return DialogService;
      }();

      DialogService.ɵfac = function DialogService_Factory(t) {
        return new (t || DialogService)();
      };

      DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DialogService,
        factory: DialogService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "PJ6H":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/features/data-manager/components/dynamic-component-one/dynamic-component-one.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: DynamicComponentOneComponent */

    /***/
    function PJ6H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicComponentOneComponent", function () {
        return DynamicComponentOneComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DynamicComponentOneComponent = /*#__PURE__*/function () {
        function DynamicComponentOneComponent() {
          _classCallCheck(this, DynamicComponentOneComponent);
        }

        _createClass(DynamicComponentOneComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DynamicComponentOneComponent;
      }();

      DynamicComponentOneComponent.ɵfac = function DynamicComponentOneComponent_Factory(t) {
        return new (t || DynamicComponentOneComponent)();
      };

      DynamicComponentOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DynamicComponentOneComponent,
        selectors: [["smc-dynamic-component-one"]],
        inputs: {
          message: "message"
        },
        decls: 3,
        vars: 1,
        template: function DynamicComponentOneComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dynamic-component-one works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.message, "");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkeW5hbWljLWNvbXBvbmVudC1vbmUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "SqQa":
    /*!********************************************************************************!*\
      !*** ./src/app/features/data-manager/data-explorer/data-explorer.component.ts ***!
      \********************************************************************************/

    /*! exports provided: DataExplorerComponent */

    /***/
    function SqQa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataExplorerComponent", function () {
        return DataExplorerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_portfolio_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/portfolio/dialog.service */
      "ORyt");

      var _c0 = ["tabset"];
      var _c1 = ["first"];
      var _c2 = ["second"];

      var DataExplorerComponent = /*#__PURE__*/function () {
        function DataExplorerComponent(dialogService) {
          _classCallCheck(this, DataExplorerComponent);

          this.dialogService = dialogService;
          this.isNotSaved = false;
        }

        _createClass(DataExplorerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onChange",
          value: function onChange() {
            this.isNotSaved = true;
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            if (this.isNotSaved) {
              return this.dialogService.confirm("Discard changes?");
            }

            return true;
          }
        }, {
          key: "confirmTabSwitch",
          value: function confirmTabSwitch($event) {
            var _this = this;

            if (this.disableSwitching) {
              var confirm = window.confirm("Discard changes and switch tab?");

              if (confirm) {
                this.disableSwitching = false;
                var liArr = this.tabsetEl.nativeElement.querySelectorAll("ul li");
                var tabIndex;
                liArr.forEach(function (li, i) {
                  if (li.contains($event.target)) {
                    tabIndex = i;
                  }
                });
                setTimeout(function () {
                  _this.tabset.tabs[tabIndex].active = true;
                });
              }
            }
          }
        }]);

        return DataExplorerComponent;
      }();

      DataExplorerComponent.ɵfac = function DataExplorerComponent_Factory(t) {
        return new (t || DataExplorerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_portfolio_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"]));
      };

      DataExplorerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DataExplorerComponent,
        selectors: [["smc-data-explorer"]],
        viewQuery: function DataExplorerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabsetEl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabset = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.first = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.second = _t.first);
          }
        },
        inputs: {
          vm: "vm"
        },
        decls: 4,
        vars: 1,
        template: function DataExplorerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data Explorer Component");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.vm);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLWV4cGxvcmVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "ZCmc":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/features/data-manager/components/dynamic-component-three/dynamic-component-three.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: DynamicComponentThreeComponent */

    /***/
    function ZCmc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicComponentThreeComponent", function () {
        return DynamicComponentThreeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DynamicComponentThreeComponent = /*#__PURE__*/function () {
        function DynamicComponentThreeComponent() {
          _classCallCheck(this, DynamicComponentThreeComponent);
        }

        _createClass(DynamicComponentThreeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DynamicComponentThreeComponent;
      }();

      DynamicComponentThreeComponent.ɵfac = function DynamicComponentThreeComponent_Factory(t) {
        return new (t || DynamicComponentThreeComponent)();
      };

      DynamicComponentThreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DynamicComponentThreeComponent,
        selectors: [["smc-dynamic-component-three"]],
        inputs: {
          message: "message"
        },
        decls: 3,
        vars: 1,
        template: function DynamicComponentThreeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dynamic-component-three works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.message, "");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkeW5hbWljLWNvbXBvbmVudC10aHJlZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "dofB":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/directives/AdDirective/ad-directive.directive.ts ***!
      \*************************************************************************/

    /*! exports provided: AdDirective */

    /***/
    function dofB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdDirective", function () {
        return AdDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdDirective = function AdDirective(viewContainerRef) {
        _classCallCheck(this, AdDirective);

        this.viewContainerRef = viewContainerRef;
      };

      AdDirective.ɵfac = function AdDirective_Factory(t) {
        return new (t || AdDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
      };

      AdDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AdDirective,
        selectors: [["", "ad-host", ""]]
      });
      /***/
    },

    /***/
    "e9Vn":
    /*!**************************************************************!*\
      !*** ./src/app/features/data-manager/data-manager.module.ts ***!
      \**************************************************************/

    /*! exports provided: DataManagerModule */

    /***/
    function e9Vn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataManagerModule", function () {
        return DataManagerModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _data_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data-manager-routing.module */
      "/sJ5");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var _state_dataManager_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./state/dataManager.reducer */
      "9YYz");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "44PX");
      /* harmony import */


      var _components_dynamic_component_one_dynamic_component_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/dynamic-component-one/dynamic-component-one.component */
      "PJ6H");
      /* harmony import */


      var _components_dynamic_component_two_dynamic_component_two_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/dynamic-component-two/dynamic-component-two.component */
      "nNeb");
      /* harmony import */


      var _components_dynamic_component_three_dynamic_component_three_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/dynamic-component-three/dynamic-component-three.component */
      "ZCmc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data_manager_data_manager_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./data-manager/data-manager.component */
      "nWpw");
      /* harmony import */


      var _data_explorer_data_explorer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./data-explorer/data-explorer.component */
      "SqQa");
      /* harmony import */


      var _data_manager_details_data_manager_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./data-manager-details/data-manager-details.component */
      "rYem");

      var DataManagerModule = function DataManagerModule() {
        _classCallCheck(this, DataManagerModule);
      };

      DataManagerModule.ɵfac = function DataManagerModule_Factory(t) {
        return new (t || DataManagerModule)();
      };

      DataManagerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: DataManagerModule
      });
      DataManagerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _data_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__["DataManagerRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('dataManagers', _state_dataManager_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"]), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](DataManagerModule, {
          declarations: [_data_manager_data_manager_component__WEBPACK_IMPORTED_MODULE_11__["DataManagerComponent"], _data_explorer_data_explorer_component__WEBPACK_IMPORTED_MODULE_12__["DataExplorerComponent"], _data_manager_details_data_manager_details_component__WEBPACK_IMPORTED_MODULE_13__["DataManagerDetailsComponent"], _components_dynamic_component_one_dynamic_component_one_component__WEBPACK_IMPORTED_MODULE_7__["DynamicComponentOneComponent"], _components_dynamic_component_two_dynamic_component_two_component__WEBPACK_IMPORTED_MODULE_8__["DynamicComponentTwoComponent"], _components_dynamic_component_three_dynamic_component_three_component__WEBPACK_IMPORTED_MODULE_9__["DynamicComponentThreeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _data_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__["DataManagerRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"]]
        });
      })();
      /***/

    },

    /***/
    "epkr":
    /*!************************************************************************!*\
      !*** ./src/app/features/data-manager/services/data-manager.service.ts ***!
      \************************************************************************/

    /*! exports provided: DataManagerService */

    /***/
    function epkr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataManagerService", function () {
        return DataManagerService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var DataManagerService = /*#__PURE__*/function () {
        function DataManagerService(httpClient) {
          _classCallCheck(this, DataManagerService);

          this.httpClient = httpClient;
          this.baseUrl = "http://localhost:3000";
        }

        _createClass(DataManagerService, [{
          key: "getDataTypeValues",
          value: function getDataTypeValues() {
            return this.httpClient.get("".concat(this.baseUrl, "/dataTypes")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return console.log(JSON.stringify(data));
            }));
          }
        }]);

        return DataManagerService;
      }();

      DataManagerService.ɵfac = function DataManagerService_Factory(t) {
        return new (t || DataManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      DataManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DataManagerService,
        factory: DataManagerService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "nNeb":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/features/data-manager/components/dynamic-component-two/dynamic-component-two.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: DynamicComponentTwoComponent */

    /***/
    function nNeb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicComponentTwoComponent", function () {
        return DynamicComponentTwoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DynamicComponentTwoComponent = /*#__PURE__*/function () {
        function DynamicComponentTwoComponent() {
          _classCallCheck(this, DynamicComponentTwoComponent);
        }

        _createClass(DynamicComponentTwoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DynamicComponentTwoComponent;
      }();

      DynamicComponentTwoComponent.ɵfac = function DynamicComponentTwoComponent_Factory(t) {
        return new (t || DynamicComponentTwoComponent)();
      };

      DynamicComponentTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DynamicComponentTwoComponent,
        selectors: [["smc-dynamic-component-two"]],
        inputs: {
          message: "message"
        },
        decls: 3,
        vars: 1,
        template: function DynamicComponentTwoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dynamic-component-two works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.message, "");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkeW5hbWljLWNvbXBvbmVudC10d28uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "nWpw":
    /*!******************************************************************************!*\
      !*** ./src/app/features/data-manager/data-manager/data-manager.component.ts ***!
      \******************************************************************************/

    /*! exports provided: DataManagerComponent */

    /***/
    function nWpw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataManagerComponent", function () {
        return DataManagerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_data_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/data-manager.service */
      "epkr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function DataManagerComponent_div_0_mat_tab_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-tab", 4);
        }
      }

      function DataManagerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataManagerComponent_div_0_mat_tab_2_Template, 1, 0, "mat-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DataManagerComponent_div_0_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.dataType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataManagerComponent_div_0_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onAddNewTab();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add New Tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tabs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.dataType);
        }
      }

      var DataManagerComponent = /*#__PURE__*/function () {
        function DataManagerComponent( // private store: Store<any>,
        dataManagerService) {
          _classCallCheck(this, DataManagerComponent);

          this.dataManagerService = dataManagerService;
          this.tabs = [];
          this.dataType = "Test Type";
        }

        _createClass(DataManagerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.dataManagerService.getDataTypeValues().subscribe(function (data) {
              _this2.tabs = data;

              _this2.keepItInStore("ADD_TAB", data); // this.store.pipe(select("dataManagers")).subscribe(dataManagers => {
              //   if (dataManagers) {
              //     this.tabs = [...this.tabs, dataManagers.tab];
              //   }
              // });

            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "trackByTab",
          value: function trackByTab($event) {
            if ($event) {
              return $event.id;
            }
          }
        }, {
          key: "onAddNewTab",
          value: function onAddNewTab() {
            // this.tabs.push({ id: 4, name: "tab4" });
            var data = {
              id: 5,
              name: "tab5"
            };
            this.keepItInStore("ADD_TAB", data);
          }
        }, {
          key: "keepItInStore",
          value: function keepItInStore(action, data) {// this.store.dispatch({
            //   type: action,
            //   payload: data
            // });
          }
        }]);

        return DataManagerComponent;
      }();

      DataManagerComponent.ɵfac = function DataManagerComponent_Factory(t) {
        return new (t || DataManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_manager_service__WEBPACK_IMPORTED_MODULE_1__["DataManagerService"]));
      };

      DataManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DataManagerComponent,
        selectors: [["smc-data-manager"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["label", "item.name", 4, "ngFor", "ngForOf"], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "click"], ["label", "item.name"]],
        template: function DataManagerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataManagerComponent_div_0_Template, 7, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabs);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTab"]],
        styles: [".mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGF0YS1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSiIsImZpbGUiOiJkYXRhLW1hbmFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYi1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gIH1cclxuICAiXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "nu+5":
    /*!******************************************************************************!*\
      !*** ./src/app/features/components/hottable-demo/hottable-demo.component.ts ***!
      \******************************************************************************/

    /*! exports provided: HottableDemoComponent */

    /***/
    function nu5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HottableDemoComponent", function () {
        return HottableDemoComponent;
      });
      /* harmony import */


      var _hottable_demo_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./hottable-demo.data */
      "9+ko");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng2_handsontable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-handsontable */
      "C4Qa");

      var HottableDemoComponent = /*#__PURE__*/function () {
        function HottableDemoComponent() {
          _classCallCheck(this, HottableDemoComponent);

          this.data = Object(_hottable_demo_data__WEBPACK_IMPORTED_MODULE_0__["getBasicData"])(10);
          this.colHeaders = ["Item/Code", "Product Name", "Selling Price", "Quantity", "Unit", "Tax", "Action"];
          this.columns = [{
            data: "item",
            type: "numeric"
          }, {
            data: "name",
            type: "text",
            allowEmpty: false
          }, {
            data: "price",
            type: "numeric"
          }, {
            data: "qty",
            type: "numeric"
          }, {
            data: "unit",
            type: "dropdown",
            source: ["Pounds", "Gram", "KG", "Piece", "Carton"]
          }, {
            data: "tax",
            type: "dropdown",
            source: ["None", "GST", "WET"]
          }, {
            data: "button",
            renderer: "html"
          }];
          this.colWidths = [14, 14, 14, 14, 14, 14, 14];
          this.options = {
            stretchH: "all",
            columnSorting: true,
            contextMenu: ["row_above", "row_below", "remove_row"]
          };
        }

        _createClass(HottableDemoComponent, [{
          key: "afterChange",
          value: function afterChange(e) {// this.sub_product_data.push(table.data);
          }
        }, {
          key: "afterOnCellMouseDown",
          value: function afterOnCellMouseDown(e) {
            console.log(e);
          }
        }]);

        return HottableDemoComponent;
      }();

      HottableDemoComponent.ɵfac = function HottableDemoComponent_Factory(t) {
        return new (t || HottableDemoComponent)();
      };

      HottableDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HottableDemoComponent,
        selectors: [["smc-hottable-demo"]],
        decls: 2,
        vars: 5,
        consts: [["href", "https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.css", "rel", "stylesheet"], [3, "data", "colHeaders", "columns", "options", "colWidths", "after-change", "after-on-cell-mouse-down"]],
        template: function HottableDemoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "hot-table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("after-change", function HottableDemoComponent_Template_hot_table_after_change_1_listener($event) {
              return ctx.afterChange($event);
            })("after-on-cell-mouse-down", function HottableDemoComponent_Template_hot_table_after_on_cell_mouse_down_1_listener($event) {
              return ctx.afterOnCellMouseDown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data)("colHeaders", ctx.colHeaders)("columns", ctx.columns)("options", ctx.options)("colWidths", ctx.colWidths);
          }
        },
        directives: [ng2_handsontable__WEBPACK_IMPORTED_MODULE_2__["HotTableComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3R0YWJsZS1kZW1vLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "rYem":
    /*!**********************************************************************************************!*\
      !*** ./src/app/features/data-manager/data-manager-details/data-manager-details.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: DataManagerDetailsComponent */

    /***/
    function rYem(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataManagerDetailsComponent", function () {
        return DataManagerDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_dynamic_component_one_dynamic_component_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../components/dynamic-component-one/dynamic-component-one.component */
      "PJ6H");
      /* harmony import */


      var _components_dynamic_component_two_dynamic_component_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../components/dynamic-component-two/dynamic-component-two.component */
      "nNeb");
      /* harmony import */


      var _components_dynamic_component_three_dynamic_component_three_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../components/dynamic-component-three/dynamic-component-three.component */
      "ZCmc");

      var _c0 = ["insertionPoint"];

      function DataManagerDetailsComponent_ng_template_9_Template(rf, ctx) {}

      var DataManagerDetailsComponent = /*#__PURE__*/function () {
        function DataManagerDetailsComponent(cfr) {
          _classCallCheck(this, DataManagerDetailsComponent);

          this.cfr = cfr; // const dynamicOne = this.cfr.resolveComponentFactory(
          //   DynamicComponentOneComponent
          // );
          // setTimeout(() => {
          //   this.ref1 = this.insertionPoint.createComponent(dynamicOne);
          //   this.ref1.instance.message = "constructor message";
          // }, 1000);
        }

        _createClass(DataManagerDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.loadChildComponent(_components_dynamic_component_one_dynamic_component_one_component__WEBPACK_IMPORTED_MODULE_1__["DynamicComponentOneComponent"], "Init message");
          }
        }, {
          key: "loadChildComponent",
          value: function loadChildComponent(componentType, message) {
            if (!this.insertionPoint) {
              return;
            }

            var vcr = this.insertionPoint;
            vcr.clear();
            var componentFactory = this.cfr.resolveComponentFactory(componentType);

            if (this.ref1) {
              this.ref1.destroy();
            }

            this.componentRef = vcr.createComponent(componentFactory);
            this.componentRef.instance.message = message;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.componentRef) {
              this.componentRef.destroy();
            }
          }
        }, {
          key: "componentOneClick",
          value: function componentOneClick() {
            this.loadChildComponent(_components_dynamic_component_one_dynamic_component_one_component__WEBPACK_IMPORTED_MODULE_1__["DynamicComponentOneComponent"], "first component test");
          }
        }, {
          key: "componentTwoClick",
          value: function componentTwoClick() {
            this.loadChildComponent(_components_dynamic_component_two_dynamic_component_two_component__WEBPACK_IMPORTED_MODULE_2__["DynamicComponentTwoComponent"], "second component test");
          }
        }, {
          key: "componentThreeClick",
          value: function componentThreeClick() {
            this.loadChildComponent(_components_dynamic_component_three_dynamic_component_three_component__WEBPACK_IMPORTED_MODULE_3__["DynamicComponentThreeComponent"], "three component test");
          }
        }]);

        return DataManagerDetailsComponent;
      }();

      DataManagerDetailsComponent.ɵfac = function DataManagerDetailsComponent_Factory(t) {
        return new (t || DataManagerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
      };

      DataManagerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DataManagerDetailsComponent,
        selectors: [["smc-data-manager-details"]],
        viewQuery: function DataManagerDetailsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.insertionPoint = _t.first);
          }
        },
        decls: 11,
        vars: 0,
        consts: [[1, "row", "comp"], [1, "col-lg-4", "left"], ["type", "button", 1, "btn", "btn-outline-primary", "waves-effect", "btn-rounded", "waves-effect", "btn-floating", 3, "click"], ["type", "button", 1, "btn", "btn-light", "btn-floating", 3, "click"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "col-lg-8", "right"], ["insertionPoint", ""]],
        template: function DataManagerDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataManagerDetailsComponent_Template_button_click_2_listener() {
              return ctx.componentOneClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Component 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataManagerDetailsComponent_Template_button_click_4_listener() {
              return ctx.componentTwoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Component 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataManagerDetailsComponent_Template_button_click_6_listener() {
              return ctx.componentThreeClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Component 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DataManagerDetailsComponent_ng_template_9_Template, 0, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".comp[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 100%;\n}\n\n.left[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: goldenrod;\n}\n\n.right[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: papayawhip;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGF0YS1tYW5hZ2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBRUksV0FBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUFFQSIsImZpbGUiOiJkYXRhLW1hbmFnZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21we1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5sZWZ0e1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcclxufVxyXG4ucmlnaHR7XHJcbndpZHRoOjEwMCU7XHJcbmJhY2tncm91bmQtY29sb3I6IHBhcGF5YXdoaXA7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "tWiv":
    /*!***********************************************!*\
      !*** ./src/app/app-services/app-init-data.ts ***!
      \***********************************************/

    /*! exports provided: AppData */

    /***/
    function tWiv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppData", function () {
        return AppData;
      }); // export function initializeApp(appInitService: AppInitService) {
      //     return (): Promise<any> => {
      //       return appInitService.Init();
      //     };
      //   }


      var AppData = function AppData() {
        _classCallCheck(this, AppData);
      };
      /***/

    },

    /***/
    "uOSv":
    /*!********************************************************!*\
      !*** ./src/app/features/services/portfolio.service.ts ***!
      \********************************************************/

    /*! exports provided: PortfolioService */

    /***/
    function uOSv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioService", function () {
        return PortfolioService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_app_services_app_init_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/app-services/app-init-data */
      "tWiv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var PortfolioService = /*#__PURE__*/function () {
        function PortfolioService(httpClient) {
          _classCallCheck(this, PortfolioService);

          this.httpClient = httpClient;
          this.baseUrl = "http://localhost:3000";
        }

        _createClass(PortfolioService, [{
          key: "getHotTable",
          value: function getHotTable() {
            return this.httpClient.get("".concat(this.baseUrl, "/dataObject")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return console.log(JSON.stringify(data));
            }));
          }
        }, {
          key: "getTaxSavings",
          value: function getTaxSavings() {
            console.log("app data", src_app_app_services_app_init_data__WEBPACK_IMPORTED_MODULE_1__["AppData"].config);
            return this.httpClient.get("".concat(this.baseUrl, "/TaxSavings")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
              data[0].title = "updated";
              return data;
            }));
          }
        }]);

        return PortfolioService;
      }();

      PortfolioService.ɵfac = function PortfolioService_Factory(t) {
        return new (t || PortfolioService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      PortfolioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: PortfolioService,
        factory: PortfolioService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_portfolio_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/portfolio.module */
      "+VNb");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_portfolio_module__WEBPACK_IMPORTED_MODULE_3__["PortfolioModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zaEQ":
    /*!********************************************!*\
      !*** ./src/app/state/portfolio.reducer.ts ***!
      \********************************************/

    /*! exports provided: PortfolioReducer */

    /***/
    function zaEQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioReducer", function () {
        return PortfolioReducer;
      });

      function PortfolioReducer(state, action) {
        return state;
      }
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zyDg":
    /*!**************************************************!*\
      !*** ./src/app/portfolio/portfolio.component.ts ***!
      \**************************************************/

    /*! exports provided: PortfolioComponent */

    /***/
    function zyDg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */


      (function (__webpack__worker__0) {
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
          return PortfolioComponent;
        });
        /* harmony import */


        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @angular/core */
        "fXoL");
        /* harmony import */


        var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @ng-bootstrap/ng-bootstrap */
        "1kSV");
        /* harmony import */


        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @angular/router */
        "tyNb");

        var _c0 = function _c0() {
          return ["/hottabledemo"];
        };

        var _c1 = function _c1() {
          return ["/layers"];
        };

        var _c2 = function _c2() {
          return ["/lac"];
        };

        var _c3 = function _c3() {
          return ["/reactivepattern"];
        };

        var _c4 = function _c4() {
          return ["/ps/summary"];
        };

        var _c5 = function _c5() {
          return ["/auth/login"];
        };

        var PortfolioComponent = /*#__PURE__*/function () {
          function PortfolioComponent() {
            _classCallCheck(this, PortfolioComponent);
          }

          _createClass(PortfolioComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "runWorker",
            value: function runWorker() {
              var demoWorker = new Worker(__webpack__worker__0, undefined);

              demoWorker.onmessage = function (message) {
                console.log("Got message", message.data);
              };

              demoWorker.postMessage('hey');
            }
          }]);

          return PortfolioComponent;
        }();

        PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
          return new (t || PortfolioComponent)();
        };

        PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PortfolioComponent,
          selectors: [["smc-portfolio"]],
          decls: 36,
          vars: 12,
          consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark", "mb-3"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand", "mr-3"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["href", "#", 1, "nav-item", "nav-link", "active"], [1, "nav-item", "nav-link", "dropdown"], [1, "dropbtn"], [1, "dropdown-content"], ["href", "/datamanager"], ["href", "/datamanager/detail"], ["href", "#"], ["routerLinkActive", "router-link-active", 1, "nav-item", "nav-link", 3, "routerLink"], [1, "navbar-nav", "ml-auto"], ["href", "#", 1, "nav-item", "nav-link"]],
          template: function PortfolioComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Stock Eercise");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Data Manager");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Explorer");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Detail");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "View");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Hot Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Layers");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "LAC");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Reactive Pattern");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Summary");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Register");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Login");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "router-outlet");
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
            }
          },
          directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
          styles: [".dropbtn[_ngcontent-%COMP%] {\n  padding: 8px;\n  font-size: 16px;\n  border: none;\n  background-color: black;\n  color: white;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 2;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: yellow;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUU7RUFBMkIsc0JBQUE7QUFBN0I7O0FBRUU7RUFBbUMsY0FBQTtBQUVyQzs7QUFBRTtFQUEwQix3QkFBQTtFQUEwQixZQUFBO0FBS3REIiwiZmlsZSI6InBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZHJvcGJ0biB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcbiAgXHJcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtkaXNwbGF5OiBibG9jazt9XHJcbiAgXHJcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7IGNvbG9yOiBibGFjayB9Il19 */"]
        });
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./node_modules/worker-plugin/dist/loader.js?name=0!../demo.worker */
      "FmEI"));
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map