(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-layer-layer-module"], {
    /***/
    "/4Gd":
    /*!**********************************************************************!*\
      !*** ./src/app/features/layer/components/layers/layers.component.ts ***!
      \**********************************************************************/

    /*! exports provided: LayersComponent */

    /***/
    function Gd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayersComponent", function () {
        return LayersComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function LayersComponent_tr_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngb-highlight", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngb-highlight", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngb-highlight", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayersComponent_tr_19_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var layer_r1 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3["delete"](layer_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var layer_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", layer_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", layer_r1.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", layer_r1.description);
        }
      }

      var LayersComponent = /*#__PURE__*/function () {
        function LayersComponent() {
          _classCallCheck(this, LayersComponent);

          this.eventHandled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(LayersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "add",
          value: function add() {
            this.eventHandled.emit({
              type: "ADD_LAYER",
              data: null
            });
          }
        }, {
          key: "delete",
          value: function _delete($event) {
            this.eventHandled.emit({
              type: "DELETE_LAYER",
              data: $event
            });
          }
        }, {
          key: "getLayer",
          value: function getLayer() {}
        }]);

        return LayersComponent;
      }();

      LayersComponent.ɵfac = function LayersComponent_Factory(t) {
        return new (t || LayersComponent)();
      };

      LayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LayersComponent,
        selectors: [["smc-layers"]],
        inputs: {
          layers: "layers"
        },
        outputs: {
          eventHandled: "eventHandled"
        },
        decls: 30,
        vars: 5,
        consts: [[1, "container-fluid"], [1, "jumbotron"], [1, "addNewLayer"], [1, "btn", "btn-lg", "btn-success", "col-xs-12", 3, "click"], [1, "glyphicon", "glyphicon-earphone", "pull-left"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "text", 3, "ngModel", "ngModelChange"], [2, "color", "white"], ["scope", "row"], [3, "result"]],
        template: function LayersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayersComponent_Template_button_click_3_listener() {
              return ctx.add();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add Layer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LayersComponent_tr_19_Template, 13, 4, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LayersComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.searchLayerId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayersComponent_Template_button_click_24_listener() {
              return ctx.getLayer();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Get Layer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.layers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchLayerId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 3, ctx.layers), "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbHighlight"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXllcnMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "/DDz":
    /*!*******************************************************!*\
      !*** ./src/app/features/layer/state/layer.reducer.ts ***!
      \*******************************************************/

    /*! exports provided: sortByLayerName, layerAdapter, layerReducer */

    /***/
    function DDz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortByLayerName", function () {
        return sortByLayerName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "layerAdapter", function () {
        return layerAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "layerReducer", function () {
        return layerReducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var _layer_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layer.actions */
      "WaFC");
      /* harmony import */


      var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/entity */
      "R0sL");

      var initialState = {
        layers: [],
        deletedLayers: [],
        error: ""
      };

      function sortByLayerName(a, b) {
        return a.name.localeCompare(b.name);
      }

      var layerAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])({
        sortComparer: sortByLayerName
      });
      var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_layer_actions__WEBPACK_IMPORTED_MODULE_1__["loadLayer"], function (state) {
        return Object.assign({}, state);
      }));

      function layerReducer(state, action) {
        return reducer(state, action);
      }
      /***/

    },

    /***/
    "1eC2":
    /*!******************************************************!*\
      !*** ./src/app/features/layer/state/layer.effect.ts ***!
      \******************************************************/

    /*! exports provided: LayerEffects */

    /***/
    function eC2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayerEffects", function () {
        return LayerEffects;
      });
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/effects */
      "snw9");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _layer_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layer.actions */
      "WaFC");
      /* harmony import */


      var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/internal/observable/of */
      "I65S");
      /* harmony import */


      var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_layer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/layer.service */
      "NLdR");

      var LayerEffects = function LayerEffects(actions$, layerService) {
        var _this2 = this;

        _classCallCheck(this, LayerEffects);

        this.actions$ = actions$;
        this.layerService = layerService;
        this.loadLayers = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(function () {
          return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_layer_actions__WEBPACK_IMPORTED_MODULE_2__["loadLayer"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
            _this2.layerService.getLayers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (layers) {
              return Object(_layer_actions__WEBPACK_IMPORTED_MODULE_2__["loadLayerSuccess"])({
                layers: layers
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(_layer_actions__WEBPACK_IMPORTED_MODULE_2__["loadLayerFailure"])({
                error: error
              }));
            }));
          }));
        }, {
          dispatch: false
        });
      };

      LayerEffects.ɵfac = function LayerEffects_Factory(t) {
        return new (t || LayerEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_layer_service__WEBPACK_IMPORTED_MODULE_5__["LayerService"]));
      };

      LayerEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: LayerEffects,
        factory: LayerEffects.ɵfac
      });
      /***/
    },

    /***/
    "2qMH":
    /*!***************************************************************!*\
      !*** ./node_modules/rxjs/internal/scheduled/scheduleArray.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function qMH(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Observable_1 = __webpack_require__(
      /*! ../Observable */
      "Q1FS");

      var Subscription_1 = __webpack_require__(
      /*! ../Subscription */
      "zB/H");

      function scheduleArray(input, scheduler) {
        return new Observable_1.Observable(function (subscriber) {
          var sub = new Subscription_1.Subscription();
          var i = 0;
          sub.add(scheduler.schedule(function () {
            if (i === input.length) {
              subscriber.complete();
              return;
            }

            subscriber.next(input[i++]);

            if (!subscriber.closed) {
              sub.add(this.schedule());
            }
          }));
          return sub;
        });
      }

      exports.scheduleArray = scheduleArray; //# sourceMappingURL=scheduleArray.js.map

      /***/
    },

    /***/
    "72BC":
    /*!******************************************!*\
      !*** ./src/app/state/portfolio.state.ts ***!
      \******************************************/

    /*! exports provided: layersState */

    /***/
    function BC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "layersState", function () {
        return layersState;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");

      var layersState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('layers');
      /***/
    },

    /***/
    "87W5":
    /*!********************************************************!*\
      !*** ./src/app/features/layer/layer-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: LayerRoutingModule */

    /***/
    function W5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayerRoutingModule", function () {
        return LayerRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _containers_layers_container_layers_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./containers/layers-container/layers-container.component */
      "yM1F");
      /* harmony import */


      var _components_removed_layers_removed_layers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/removed-layers/removed-layers.component */
      "qY91");
      /* harmony import */


      var _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/layers/layers.component */
      "/4Gd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _containers_layers_container_layers_container_component__WEBPACK_IMPORTED_MODULE_1__["LayersContainerComponent"]
      }];

      var LayerRoutingModule = function LayerRoutingModule() {
        _classCallCheck(this, LayerRoutingModule);
      };

      LayerRoutingModule.components = [_containers_layers_container_layers_container_component__WEBPACK_IMPORTED_MODULE_1__["LayersContainerComponent"], _components_removed_layers_removed_layers_component__WEBPACK_IMPORTED_MODULE_2__["RemovedLayersComponent"], _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_3__["LayersComponent"]];

      LayerRoutingModule.ɵfac = function LayerRoutingModule_Factory(t) {
        return new (t || LayerRoutingModule)();
      };

      LayerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: LayerRoutingModule
      });
      LayerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LayerRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "9AGB":
    /*!*************************************************!*\
      !*** ./node_modules/rxjs/internal/util/pipe.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function AGB(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var noop_1 = __webpack_require__(
      /*! ./noop */
      "w5QO");

      function pipe() {
        var fns = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          fns[_i] = arguments[_i];
        }

        return pipeFromArray(fns);
      }

      exports.pipe = pipe;

      function pipeFromArray(fns) {
        if (!fns) {
          return noop_1.noop;
        }

        if (fns.length === 1) {
          return fns[0];
        }

        return function piped(input) {
          return fns.reduce(function (prev, fn) {
            return fn(prev);
          }, input);
        };
      }

      exports.pipeFromArray = pipeFromArray; //# sourceMappingURL=pipe.js.map

      /***/
    },

    /***/
    "CnPI":
    /*!********************************************************!*\
      !*** ./src/app/features/layer/state/layer.selector.ts ***!
      \********************************************************/

    /*! exports provided: selectLayers */

    /***/
    function CnPI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectLayers", function () {
        return selectLayers;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var src_app_state_portfolio_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/state/portfolio.state */
      "72BC");

      var selectLayers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(src_app_state_portfolio_state__WEBPACK_IMPORTED_MODULE_1__["layersState"], function (state) {
        if (state) {
          console.log('state', state);
        }

        return state && state.layers ? state.layers : [{
          id: 1,
          name: 'test aly'
        }];
      });
      /***/
    },

    /***/
    "FWf1":
    /*!**************************************************!*\
      !*** ./node_modules/rxjs/internal/Subscriber.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function FWf1(module, exports, __webpack_require__) {
      "use strict";

      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var isFunction_1 = __webpack_require__(
      /*! ./util/isFunction */
      "pshJ");

      var Observer_1 = __webpack_require__(
      /*! ./Observer */
      "GiSu");

      var Subscription_1 = __webpack_require__(
      /*! ./Subscription */
      "zB/H");

      var rxSubscriber_1 = __webpack_require__(
      /*! ../internal/symbol/rxSubscriber */
      "p//D");

      var config_1 = __webpack_require__(
      /*! ./config */
      "n3uD");

      var hostReportError_1 = __webpack_require__(
      /*! ./util/hostReportError */
      "MkmW");

      var Subscriber = function (_super) {
        __extends(Subscriber, _super);

        function Subscriber(destinationOrNext, error, complete) {
          var _this = _super.call(this) || this;

          _this.syncErrorValue = null;
          _this.syncErrorThrown = false;
          _this.syncErrorThrowable = false;
          _this.isStopped = false;

          switch (arguments.length) {
            case 0:
              _this.destination = Observer_1.empty;
              break;

            case 1:
              if (!destinationOrNext) {
                _this.destination = Observer_1.empty;
                break;
              }

              if (typeof destinationOrNext === 'object') {
                if (destinationOrNext instanceof Subscriber) {
                  _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                  _this.destination = destinationOrNext;
                  destinationOrNext.add(_this);
                } else {
                  _this.syncErrorThrowable = true;
                  _this.destination = new SafeSubscriber(_this, destinationOrNext);
                }

                break;
              }

            default:
              _this.syncErrorThrowable = true;
              _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
              break;
          }

          return _this;
        }

        Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
          return this;
        };

        Subscriber.create = function (next, error, complete) {
          var subscriber = new Subscriber(next, error, complete);
          subscriber.syncErrorThrowable = false;
          return subscriber;
        };

        Subscriber.prototype.next = function (value) {
          if (!this.isStopped) {
            this._next(value);
          }
        };

        Subscriber.prototype.error = function (err) {
          if (!this.isStopped) {
            this.isStopped = true;

            this._error(err);
          }
        };

        Subscriber.prototype.complete = function () {
          if (!this.isStopped) {
            this.isStopped = true;

            this._complete();
          }
        };

        Subscriber.prototype.unsubscribe = function () {
          if (this.closed) {
            return;
          }

          this.isStopped = true;

          _super.prototype.unsubscribe.call(this);
        };

        Subscriber.prototype._next = function (value) {
          this.destination.next(value);
        };

        Subscriber.prototype._error = function (err) {
          this.destination.error(err);
          this.unsubscribe();
        };

        Subscriber.prototype._complete = function () {
          this.destination.complete();
          this.unsubscribe();
        };

        Subscriber.prototype._unsubscribeAndRecycle = function () {
          var _parentOrParents = this._parentOrParents;
          this._parentOrParents = null;
          this.unsubscribe();
          this.closed = false;
          this.isStopped = false;
          this._parentOrParents = _parentOrParents;
          return this;
        };

        return Subscriber;
      }(Subscription_1.Subscription);

      exports.Subscriber = Subscriber;

      var SafeSubscriber = function (_super) {
        __extends(SafeSubscriber, _super);

        function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
          var _this = _super.call(this) || this;

          _this._parentSubscriber = _parentSubscriber;
          var next;
          var context = _this;

          if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
          } else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;

            if (observerOrNext !== Observer_1.empty) {
              context = Object.create(observerOrNext);

              if (isFunction_1.isFunction(context.unsubscribe)) {
                _this.add(context.unsubscribe.bind(context));
              }

              context.unsubscribe = _this.unsubscribe.bind(_this);
            }
          }

          _this._context = context;
          _this._next = next;
          _this._error = error;
          _this._complete = complete;
          return _this;
        }

        SafeSubscriber.prototype.next = function (value) {
          if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;

            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._next, value);
            } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
              this.unsubscribe();
            }
          }
        };

        SafeSubscriber.prototype.error = function (err) {
          if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;

            if (this._error) {
              if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._error, err);

                this.unsubscribe();
              } else {
                this.__tryOrSetError(_parentSubscriber, this._error, err);

                this.unsubscribe();
              }
            } else if (!_parentSubscriber.syncErrorThrowable) {
              this.unsubscribe();

              if (useDeprecatedSynchronousErrorHandling) {
                throw err;
              }

              hostReportError_1.hostReportError(err);
            } else {
              if (useDeprecatedSynchronousErrorHandling) {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
              } else {
                hostReportError_1.hostReportError(err);
              }

              this.unsubscribe();
            }
          }
        };

        SafeSubscriber.prototype.complete = function () {
          var _this = this;

          if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;

            if (this._complete) {
              var wrappedComplete = function wrappedComplete() {
                return _this._complete.call(_this._context);
              };

              if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(wrappedComplete);

                this.unsubscribe();
              } else {
                this.__tryOrSetError(_parentSubscriber, wrappedComplete);

                this.unsubscribe();
              }
            } else {
              this.unsubscribe();
            }
          }
        };

        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
          try {
            fn.call(this._context, value);
          } catch (err) {
            this.unsubscribe();

            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
              throw err;
            } else {
              hostReportError_1.hostReportError(err);
            }
          }
        };

        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
          if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
          }

          try {
            fn.call(this._context, value);
          } catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
              parent.syncErrorValue = err;
              parent.syncErrorThrown = true;
              return true;
            } else {
              hostReportError_1.hostReportError(err);
              return true;
            }
          }

          return false;
        };

        SafeSubscriber.prototype._unsubscribe = function () {
          var _parentSubscriber = this._parentSubscriber;
          this._context = null;
          this._parentSubscriber = null;

          _parentSubscriber.unsubscribe();
        };

        return SafeSubscriber;
      }(Subscriber);

      exports.SafeSubscriber = SafeSubscriber; //# sourceMappingURL=Subscriber.js.map

      /***/
    },

    /***/
    "GMZp":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isObject.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function GMZp(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function isObject(x) {
        return x !== null && typeof x === 'object';
      }

      exports.isObject = isObject; //# sourceMappingURL=isObject.js.map

      /***/
    },

    /***/
    "GiSu":
    /*!************************************************!*\
      !*** ./node_modules/rxjs/internal/Observer.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function GiSu(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var config_1 = __webpack_require__(
      /*! ./config */
      "n3uD");

      var hostReportError_1 = __webpack_require__(
      /*! ./util/hostReportError */
      "MkmW");

      exports.empty = {
        closed: true,
        next: function next(value) {},
        error: function error(err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        },
        complete: function complete() {}
      }; //# sourceMappingURL=Observer.js.map

      /***/
    },

    /***/
    "I65S":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs/internal/observable/of.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function I65S(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var isScheduler_1 = __webpack_require__(
      /*! ../util/isScheduler */
      "nzqU");

      var fromArray_1 = __webpack_require__(
      /*! ./fromArray */
      "zzsZ");

      var scheduleArray_1 = __webpack_require__(
      /*! ../scheduled/scheduleArray */
      "2qMH");

      function of() {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var scheduler = args[args.length - 1];

        if (isScheduler_1.isScheduler(scheduler)) {
          args.pop();
          return scheduleArray_1.scheduleArray(args, scheduler);
        } else {
          return fromArray_1.fromArray(args);
        }
      }

      exports.of = of; //# sourceMappingURL=of.js.map

      /***/
    },

    /***/
    "LBXl":
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function LBXl(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var UnsubscriptionErrorImpl = function () {
        function UnsubscriptionErrorImpl(errors) {
          Error.call(this);
          this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
            return i + 1 + ") " + err.toString();
          }).join('\n  ') : '';
          this.name = 'UnsubscriptionError';
          this.errors = errors;
          return this;
        }

        UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
        return UnsubscriptionErrorImpl;
      }();

      exports.UnsubscriptionError = UnsubscriptionErrorImpl; //# sourceMappingURL=UnsubscriptionError.js.map

      /***/
    },

    /***/
    "MkmW":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function MkmW(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function hostReportError(err) {
        setTimeout(function () {
          throw err;
        }, 0);
      }

      exports.hostReportError = hostReportError; //# sourceMappingURL=hostReportError.js.map

      /***/
    },

    /***/
    "NLdR":
    /*!**********************************************************!*\
      !*** ./src/app/features/layer/services/layer.service.ts ***!
      \**********************************************************/

    /*! exports provided: LayerService */

    /***/
    function NLdR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayerService", function () {
        return LayerService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
          "Content-Type": "application/json"
        })
      };

      var LayerService = /*#__PURE__*/function () {
        function LayerService(httpClient) {
          _classCallCheck(this, LayerService);

          this.httpClient = httpClient;
          this.baseUrl = "http://localhost:3000";
        }

        _createClass(LayerService, [{
          key: "getLayers",
          value: function getLayers() {
            // return this.httpClient
            //   .get<Layer[]>(`${this.baseUrl}/layers`)
            //   .pipe(tap(data => console.log('in service data ', JSON.stringify(data))));
            return this.httpClient.get("".concat(this.baseUrl, "/layers"));
          }
        }, {
          key: "getLayerById",
          value: function getLayerById(id) {
            return this.httpClient.get("".concat(this.baseUrl, "/layers/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (data) {
              return console.log(JSON.stringify(data));
            }));
          }
        }, {
          key: "addLayer",
          value: function addLayer(layer) {
            var body = JSON.stringify(layer);
            return this.httpClient.post("".concat(this.baseUrl, "/layers"), body, httpOptions);
          }
        }, {
          key: "deleteLayer",
          value: function deleteLayer(layer) {
            return this.httpClient["delete"]("".concat(this.baseUrl, "/layers/").concat(layer.id));
          }
        }]);

        return LayerService;
      }();

      LayerService.ɵfac = function LayerService_Factory(t) {
        return new (t || LayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      LayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: LayerService,
        factory: LayerService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "OAkW":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs/internal/util/subscribeToArray.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function OAkW(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.subscribeToArray = function (array) {
        return function (subscriber) {
          for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
          }

          subscriber.complete();
        };
      }; //# sourceMappingURL=subscribeToArray.js.map

      /***/

    },

    /***/
    "Q1FS":
    /*!**************************************************!*\
      !*** ./node_modules/rxjs/internal/Observable.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function Q1FS(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var canReportError_1 = __webpack_require__(
      /*! ./util/canReportError */
      "yx2s");

      var toSubscriber_1 = __webpack_require__(
      /*! ./util/toSubscriber */
      "Xwq/");

      var observable_1 = __webpack_require__(
      /*! ./symbol/observable */
      "zfKp");

      var pipe_1 = __webpack_require__(
      /*! ./util/pipe */
      "9AGB");

      var config_1 = __webpack_require__(
      /*! ./config */
      "n3uD");

      var Observable = function () {
        function Observable(subscribe) {
          this._isScalar = false;

          if (subscribe) {
            this._subscribe = subscribe;
          }
        }

        Observable.prototype.lift = function (operator) {
          var observable = new Observable();
          observable.source = this;
          observable.operator = operator;
          return observable;
        };

        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
          var operator = this.operator;
          var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);

          if (operator) {
            sink.add(operator.call(sink, this.source));
          } else {
            sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
          }

          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
              sink.syncErrorThrowable = false;

              if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
              }
            }
          }

          return sink;
        };

        Observable.prototype._trySubscribe = function (sink) {
          try {
            return this._subscribe(sink);
          } catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
              sink.syncErrorThrown = true;
              sink.syncErrorValue = err;
            }

            if (canReportError_1.canReportError(sink)) {
              sink.error(err);
            } else {
              console.warn(err);
            }
          }
        };

        Observable.prototype.forEach = function (next, promiseCtor) {
          var _this = this;

          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
              try {
                next(value);
              } catch (err) {
                reject(err);

                if (subscription) {
                  subscription.unsubscribe();
                }
              }
            }, reject, resolve);
          });
        };

        Observable.prototype._subscribe = function (subscriber) {
          var source = this.source;
          return source && source.subscribe(subscriber);
        };

        Observable.prototype[observable_1.observable] = function () {
          return this;
        };

        Observable.prototype.pipe = function () {
          var operations = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
          }

          if (operations.length === 0) {
            return this;
          }

          return pipe_1.pipeFromArray(operations)(this);
        };

        Observable.prototype.toPromise = function (promiseCtor) {
          var _this = this;

          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
            var value;

            _this.subscribe(function (x) {
              return value = x;
            }, function (err) {
              return reject(err);
            }, function () {
              return resolve(value);
            });
          });
        };

        Observable.create = function (subscribe) {
          return new Observable(subscribe);
        };

        return Observable;
      }();

      exports.Observable = Observable;

      function getPromiseCtor(promiseCtor) {
        if (!promiseCtor) {
          promiseCtor = config_1.config.Promise || Promise;
        }

        if (!promiseCtor) {
          throw new Error('no Promise impl found');
        }

        return promiseCtor;
      } //# sourceMappingURL=Observable.js.map

      /***/

    },

    /***/
    "R0sL":
    /*!************************************************************************!*\
      !*** ./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js ***!
      \************************************************************************/

    /*! exports provided: Dictionary, createEntityAdapter */

    /***/
    function R0sL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dictionary", function () {
        return Dictionary;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createEntityAdapter", function () {
        return createEntityAdapter;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * @fileoverview added by tsickle
       * Generated from: src/entity_state.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template V
       * @return {?}
       */


      function getInitialEntityState() {
        return {
          ids: [],
          entities: {}
        };
      }
      /**
       * @template V
       * @return {?}
       */


      function createInitialStateFactory() {
        /**
         * @param {?=} additionalState
         * @return {?}
         */
        function getInitialState() {
          var additionalState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return Object.assign(getInitialEntityState(), additionalState);
        }

        return {
          getInitialState: getInitialState
        };
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/state_selectors.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T
       * @return {?}
       */


      function createSelectorsFactory() {
        /**
         * @param {?=} selectState
         * @return {?}
         */
        function getSelectors(selectState) {
          /** @type {?} */
          var selectIds =
          /**
          * @param {?} state
          * @return {?}
          */
          function selectIds(state) {
            return state.ids;
          };
          /** @type {?} */


          var selectEntities =
          /**
          * @param {?} state
          * @return {?}
          */
          function selectEntities(state) {
            return state.entities;
          };
          /** @type {?} */


          var selectAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, selectEntities,
          /**
          * @param {?} ids
          * @param {?} entities
          * @return {?}
          */
          function (ids, entities) {
            return ids.map(
            /**
            * @param {?} id
            * @return {?}
            */
            function (id) {
              return (
                /** @type {?} */
                entities[id]
              );
            });
          });
          /** @type {?} */

          var selectTotal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds,
          /**
          * @param {?} ids
          * @return {?}
          */
          function (ids) {
            return ids.length;
          });

          if (!selectState) {
            return {
              selectIds: selectIds,
              selectEntities: selectEntities,
              selectAll: selectAll,
              selectTotal: selectTotal
            };
          }

          return {
            selectIds: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectIds),
            selectEntities: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectEntities),
            selectAll: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectAll),
            selectTotal: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectTotal)
          };
        }

        return {
          getSelectors: getSelectors
        };
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/state_adapter.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @enum {number} */


      var DidMutate = {
        EntitiesOnly: 0,
        Both: 1,
        None: 2
      };
      DidMutate[DidMutate.EntitiesOnly] = 'EntitiesOnly';
      DidMutate[DidMutate.Both] = 'Both';
      DidMutate[DidMutate.None] = 'None';
      /**
       * @template V, R
       * @param {?} mutator
       * @return {?}
       */

      function createStateOperator(mutator) {
        return (
          /**
          * @template S
          * @param {?} arg
          * @param {?} state
          * @return {?}
          */
          function operation(arg, state) {
            /** @type {?} */
            var clonedEntityState = {
              ids: _toConsumableArray(state.ids),
              entities: Object.assign({}, state.entities)
            };
            /** @type {?} */

            var didMutate = mutator(arg, clonedEntityState);

            if (didMutate === DidMutate.Both) {
              return Object.assign({}, state, clonedEntityState);
            }

            if (didMutate === DidMutate.EntitiesOnly) {
              return Object.assign(Object.assign({}, state), {
                entities: clonedEntityState.entities
              });
            }

            return state;
          }
        );
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/utils.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T
       * @param {?} entity
       * @param {?} selectId
       * @return {?}
       */


      function selectIdValue(entity, selectId) {
        /** @type {?} */
        var key = selectId(entity);

        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && key === undefined) {
          console.warn('@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.', 'You should probably provide your own `selectId` implementation.', 'The entity that was passed:', entity, 'The `selectId` implementation:', selectId.toString());
        }

        return key;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/unsorted_state_adapter.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T
       * @param {?} selectId
       * @return {?}
       */


      function createUnsortedStateAdapter(selectId) {
        /**
         * @param {?} entity
         * @param {?} state
         * @return {?}
         */
        function addOneMutably(entity, state) {
          /** @type {?} */
          var key = selectIdValue(entity, selectId);

          if (key in state.entities) {
            return DidMutate.None;
          }

          state.ids.push(key);
          state.entities[key] = entity;
          return DidMutate.Both;
        }
        /**
         * @param {?} entities
         * @param {?} state
         * @return {?}
         */


        function addManyMutably(entities, state) {
          /** @type {?} */
          var didMutate = false;

          var _iterator = _createForOfIteratorHelper(entities),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var entity = _step.value;
              didMutate = addOneMutably(entity, state) !== DidMutate.None || didMutate;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return didMutate ? DidMutate.Both : DidMutate.None;
        }
        /**
         * @param {?} entities
         * @param {?} state
         * @return {?}
         */


        function setAllMutably(entities, state) {
          state.ids = [];
          state.entities = {};
          addManyMutably(entities, state);
          return DidMutate.Both;
        }
        /**
         * @param {?} entity
         * @param {?} state
         * @return {?}
         */


        function setOneMutably(entity, state) {
          /** @type {?} */
          var key = selectIdValue(entity, selectId);

          if (key in state.entities) {
            state.entities[key] = entity;
            return DidMutate.EntitiesOnly;
          }

          state.ids.push(key);
          state.entities[key] = entity;
          return DidMutate.Both;
        }
        /**
         * @param {?} key
         * @param {?} state
         * @return {?}
         */


        function removeOneMutably(key, state) {
          return removeManyMutably([key], state);
        }
        /**
         * @param {?} keysOrPredicate
         * @param {?} state
         * @return {?}
         */


        function removeManyMutably(keysOrPredicate, state) {
          /** @type {?} */
          var keys = keysOrPredicate instanceof Array ? keysOrPredicate : state.ids.filter(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            return keysOrPredicate(state.entities[key]);
          });
          /** @type {?} */

          var didMutate = keys.filter(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            return key in state.entities;
          }).map(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            return delete state.entities[key];
          }).length > 0;

          if (didMutate) {
            state.ids = state.ids.filter(
            /**
            * @param {?} id
            * @return {?}
            */
            function (id) {
              return id in state.entities;
            });
          }

          return didMutate ? DidMutate.Both : DidMutate.None;
        }
        /**
         * @template S
         * @param {?} state
         * @return {?}
         */


        function removeAll(state) {
          return Object.assign({}, state, {
            ids: [],
            entities: {}
          });
        }
        /**
         * @param {?} keys
         * @param {?} update
         * @param {?} state
         * @return {?}
         */


        function takeNewKey(keys, update, state) {
          /** @type {?} */
          var original = state.entities[update.id];
          /** @type {?} */

          var updated = Object.assign({}, original, update.changes);
          /** @type {?} */

          var newKey = selectIdValue(updated, selectId);
          /** @type {?} */

          var hasNewKey = newKey !== update.id;

          if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
          }

          state.entities[newKey] = updated;
          return hasNewKey;
        }
        /**
         * @param {?} update
         * @param {?} state
         * @return {?}
         */


        function updateOneMutably(update, state) {
          return updateManyMutably([update], state);
        }
        /**
         * @param {?} updates
         * @param {?} state
         * @return {?}
         */


        function updateManyMutably(updates, state) {
          /** @type {?} */
          var newKeys = {};
          updates = updates.filter(
          /**
          * @param {?} update
          * @return {?}
          */
          function (update) {
            return update.id in state.entities;
          });
          /** @type {?} */

          var didMutateEntities = updates.length > 0;

          if (didMutateEntities) {
            /** @type {?} */
            var didMutateIds = updates.filter(
            /**
            * @param {?} update
            * @return {?}
            */
            function (update) {
              return takeNewKey(newKeys, update, state);
            }).length > 0;

            if (didMutateIds) {
              state.ids = state.ids.map(
              /**
              * @param {?} id
              * @return {?}
              */
              function (id) {
                return newKeys[id] || id;
              });
              return DidMutate.Both;
            } else {
              return DidMutate.EntitiesOnly;
            }
          }

          return DidMutate.None;
        }
        /**
         * @param {?} map
         * @param {?} state
         * @return {?}
         */


        function mapMutably(map, state) {
          /** @type {?} */
          var changes = state.ids.reduce(
          /**
          * @param {?} changes
          * @param {?} id
          * @return {?}
          */
          function (changes, id) {
            /** @type {?} */
            var change = map(state.entities[id]);

            if (change !== state.entities[id]) {
              changes.push({
                id: id,
                changes: change
              });
            }

            return changes;
          }, []);
          /** @type {?} */

          var updates = changes.filter(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref) {
            var id = _ref.id;
            return id in state.entities;
          });
          return updateManyMutably(updates, state);
        }
        /**
         * @param {?} __0
         * @param {?} state
         * @return {?}
         */


        function mapOneMutably(_ref2, state) {
          var map = _ref2.map,
              id = _ref2.id;

          /** @type {?} */
          var entity = state.entities[id];

          if (!entity) {
            return DidMutate.None;
          }
          /** @type {?} */


          var updatedEntity = map(entity);
          return updateOneMutably({
            id: id,
            changes: updatedEntity
          }, state);
        }
        /**
         * @param {?} entity
         * @param {?} state
         * @return {?}
         */


        function upsertOneMutably(entity, state) {
          return upsertManyMutably([entity], state);
        }
        /**
         * @param {?} entities
         * @param {?} state
         * @return {?}
         */


        function upsertManyMutably(entities, state) {
          /** @type {?} */
          var added = [];
          /** @type {?} */

          var updated = [];

          var _iterator2 = _createForOfIteratorHelper(entities),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var entity = _step2.value;

              /** @type {?} */
              var id = selectIdValue(entity, selectId);

              if (id in state.entities) {
                updated.push({
                  id: id,
                  changes: entity
                });
              } else {
                added.push(entity);
              }
            }
            /** @type {?} */

          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          var didMutateByUpdated = updateManyMutably(updated, state);
          /** @type {?} */

          var didMutateByAdded = addManyMutably(added, state);

          switch (true) {
            case didMutateByAdded === DidMutate.None && didMutateByUpdated === DidMutate.None:
              return DidMutate.None;

            case didMutateByAdded === DidMutate.Both || didMutateByUpdated === DidMutate.Both:
              return DidMutate.Both;

            default:
              return DidMutate.EntitiesOnly;
          }
        }

        return {
          removeAll: removeAll,
          addOne: createStateOperator(addOneMutably),
          addMany: createStateOperator(addManyMutably),
          addAll: createStateOperator(setAllMutably),
          setAll: createStateOperator(setAllMutably),
          setOne: createStateOperator(setOneMutably),
          updateOne: createStateOperator(updateOneMutably),
          updateMany: createStateOperator(updateManyMutably),
          upsertOne: createStateOperator(upsertOneMutably),
          upsertMany: createStateOperator(upsertManyMutably),
          removeOne: createStateOperator(removeOneMutably),
          removeMany: createStateOperator(removeManyMutably),
          map: createStateOperator(mapMutably),
          mapOne: createStateOperator(mapOneMutably)
        };
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/sorted_state_adapter.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T
       * @param {?} selectId
       * @param {?} sort
       * @return {?}
       */


      function createSortedStateAdapter(selectId, sort) {
        var _createUnsortedStateA = createUnsortedStateAdapter(selectId),
            removeOne = _createUnsortedStateA.removeOne,
            removeMany = _createUnsortedStateA.removeMany,
            removeAll = _createUnsortedStateA.removeAll;
        /**
         * @param {?} entity
         * @param {?} state
         * @return {?}
         */


        function addOneMutably(entity, state) {
          return addManyMutably([entity], state);
        }
        /**
         * @param {?} newModels
         * @param {?} state
         * @return {?}
         */


        function addManyMutably(newModels, state) {
          /** @type {?} */
          var models = newModels.filter(
          /**
          * @param {?} model
          * @return {?}
          */
          function (model) {
            return !(selectIdValue(model, selectId) in state.entities);
          });

          if (models.length === 0) {
            return DidMutate.None;
          } else {
            merge(models, state);
            return DidMutate.Both;
          }
        }
        /**
         * @param {?} models
         * @param {?} state
         * @return {?}
         */


        function setAllMutably(models, state) {
          state.entities = {};
          state.ids = [];
          addManyMutably(models, state);
          return DidMutate.Both;
        }
        /**
         * @param {?} entity
         * @param {?} state
         * @return {?}
         */


        function setOneMutably(entity, state) {
          /** @type {?} */
          var id = selectIdValue(entity, selectId);

          if (id in state.entities) {
            state.ids = state.ids.filter(
            /**
            * @param {?} val
            * @return {?}
            */
            function (val) {
              return val !== id;
            });
            merge([entity], state);
            return DidMutate.Both;
          } else {
            return addOneMutably(entity, state);
          }
        }
        /**
         * @param {?} update
         * @param {?} state
         * @return {?}
         */


        function updateOneMutably(update, state) {
          return updateManyMutably([update], state);
        }
        /**
         * @param {?} models
         * @param {?} update
         * @param {?} state
         * @return {?}
         */


        function takeUpdatedModel(models, update, state) {
          if (!(update.id in state.entities)) {
            return false;
          }
          /** @type {?} */


          var original = state.entities[update.id];
          /** @type {?} */

          var updated = Object.assign({}, original, update.changes);
          /** @type {?} */

          var newKey = selectIdValue(updated, selectId);
          delete state.entities[update.id];
          models.push(updated);
          return newKey !== update.id;
        }
        /**
         * @param {?} updates
         * @param {?} state
         * @return {?}
         */


        function updateManyMutably(updates, state) {
          /** @type {?} */
          var models = [];
          /** @type {?} */

          var didMutateIds = updates.filter(
          /**
          * @param {?} update
          * @return {?}
          */
          function (update) {
            return takeUpdatedModel(models, update, state);
          }).length > 0;

          if (models.length === 0) {
            return DidMutate.None;
          } else {
            /** @type {?} */
            var originalIds = state.ids;
            /** @type {?} */

            var updatedIndexes = [];
            state.ids = state.ids.filter(
            /**
            * @param {?} id
            * @param {?} index
            * @return {?}
            */
            function (id, index) {
              if (id in state.entities) {
                return true;
              } else {
                updatedIndexes.push(index);
                return false;
              }
            });
            merge(models, state);

            if (!didMutateIds && updatedIndexes.every(
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return state.ids[i] === originalIds[i];
            })) {
              return DidMutate.EntitiesOnly;
            } else {
              return DidMutate.Both;
            }
          }
        }
        /**
         * @param {?} updatesOrMap
         * @param {?} state
         * @return {?}
         */


        function mapMutably(updatesOrMap, state) {
          /** @type {?} */
          var updates = state.ids.reduce(
          /**
          * @param {?} changes
          * @param {?} id
          * @return {?}
          */
          function (changes, id) {
            /** @type {?} */
            var change = updatesOrMap(state.entities[id]);

            if (change !== state.entities[id]) {
              changes.push({
                id: id,
                changes: change
              });
            }

            return changes;
          }, []);
          return updateManyMutably(updates, state);
        }
        /**
         * @param {?} __0
         * @param {?} state
         * @return {?}
         */


        function mapOneMutably(_ref3, state) {
          var map = _ref3.map,
              id = _ref3.id;

          /** @type {?} */
          var entity = state.entities[id];

          if (!entity) {
            return DidMutate.None;
          }
          /** @type {?} */


          var updatedEntity = map(entity);
          return updateOneMutably({
            id: id,
            changes: updatedEntity
          }, state);
        }
        /**
         * @param {?} entity
         * @param {?} state
         * @return {?}
         */


        function upsertOneMutably(entity, state) {
          return upsertManyMutably([entity], state);
        }
        /**
         * @param {?} entities
         * @param {?} state
         * @return {?}
         */


        function upsertManyMutably(entities, state) {
          /** @type {?} */
          var added = [];
          /** @type {?} */

          var updated = [];

          var _iterator3 = _createForOfIteratorHelper(entities),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var entity = _step3.value;

              /** @type {?} */
              var id = selectIdValue(entity, selectId);

              if (id in state.entities) {
                updated.push({
                  id: id,
                  changes: entity
                });
              } else {
                added.push(entity);
              }
            }
            /** @type {?} */

          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          var didMutateByUpdated = updateManyMutably(updated, state);
          /** @type {?} */

          var didMutateByAdded = addManyMutably(added, state);

          switch (true) {
            case didMutateByAdded === DidMutate.None && didMutateByUpdated === DidMutate.None:
              return DidMutate.None;

            case didMutateByAdded === DidMutate.Both || didMutateByUpdated === DidMutate.Both:
              return DidMutate.Both;

            default:
              return DidMutate.EntitiesOnly;
          }
        }
        /**
         * @param {?} models
         * @param {?} state
         * @return {?}
         */


        function merge(models, state) {
          models.sort(sort);
          /** @type {?} */

          var ids = [];
          /** @type {?} */

          var i = 0;
          /** @type {?} */

          var j = 0;

          while (i < models.length && j < state.ids.length) {
            /** @type {?} */
            var model = models[i];
            /** @type {?} */

            var modelId = selectIdValue(model, selectId);
            /** @type {?} */

            var entityId = state.ids[j];
            /** @type {?} */

            var entity = state.entities[entityId];

            if (sort(model, entity) <= 0) {
              ids.push(modelId);
              i++;
            } else {
              ids.push(entityId);
              j++;
            }
          }

          if (i < models.length) {
            state.ids = ids.concat(models.slice(i).map(selectId));
          } else {
            state.ids = ids.concat(state.ids.slice(j));
          }

          models.forEach(
          /**
          * @param {?} model
          * @param {?} i
          * @return {?}
          */
          function (model, i) {
            state.entities[selectId(model)] = model;
          });
        }

        return {
          removeOne: removeOne,
          removeMany: removeMany,
          removeAll: removeAll,
          addOne: createStateOperator(addOneMutably),
          updateOne: createStateOperator(updateOneMutably),
          upsertOne: createStateOperator(upsertOneMutably),
          addAll: createStateOperator(setAllMutably),
          setAll: createStateOperator(setAllMutably),
          setOne: createStateOperator(setOneMutably),
          addMany: createStateOperator(addManyMutably),
          updateMany: createStateOperator(updateManyMutably),
          upsertMany: createStateOperator(upsertManyMutably),
          map: createStateOperator(mapMutably),
          mapOne: createStateOperator(mapOneMutably)
        };
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/create_adapter.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T
       * @param {?=} options
       * @return {?}
       */


      function createEntityAdapter() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _Object$assign = Object.assign({
          sortComparer: false,
          selectId:
          /**
          * @param {?} instance
          * @return {?}
          */
          function selectId(instance) {
            return instance.id;
          }
        }, options),
            selectId = _Object$assign.selectId,
            sortComparer = _Object$assign.sortComparer;
        /** @type {?} */


        var stateFactory = createInitialStateFactory();
        /** @type {?} */

        var selectorsFactory = createSelectorsFactory();
        /** @type {?} */

        var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
        return Object.assign(Object.assign(Object.assign({
          selectId: selectId,
          sortComparer: sortComparer
        }, stateFactory), selectorsFactory), stateAdapter);
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/models.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       * @template T
       */


      function DictionaryNum() {}
      /**
       * @abstract
       * @template T
       */


      var Dictionary = function Dictionary() {
        _classCallCheck(this, Dictionary);
      };
      /**
       * @record
       * @template T
       */


      function UpdateStr() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function UpdateNum() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function EntityMapOneNum() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function EntityMapOneStr() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function EntityState() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function EntityDefinition() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function EntityStateAdapter() {}

      if (false) {}
      /**
       * @record
       * @template T, V
       */


      function EntitySelectors() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function EntityAdapter() {}

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: public_api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: ngrx-entity.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngrx-entity.js.map

      /***/

    },

    /***/
    "WaFC":
    /*!*******************************************************!*\
      !*** ./src/app/features/layer/state/layer.actions.ts ***!
      \*******************************************************/

    /*! exports provided: loadLayer, loadLayerSuccess, loadLayerFailure */

    /***/
    function WaFC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadLayer", function () {
        return loadLayer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadLayerSuccess", function () {
        return loadLayerSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadLayerFailure", function () {
        return loadLayerFailure;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");

      var loadLayer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Layer] LoadLayer');
      var loadLayerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Layer] Load Layer Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadLayerFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Layer] Load Layer Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "Xwq/":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function Xwq(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Subscriber_1 = __webpack_require__(
      /*! ../Subscriber */
      "FWf1");

      var rxSubscriber_1 = __webpack_require__(
      /*! ../symbol/rxSubscriber */
      "p//D");

      var Observer_1 = __webpack_require__(
      /*! ../Observer */
      "GiSu");

      function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
          if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
          }

          if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
          }
        }

        if (!nextOrObserver && !error && !complete) {
          return new Subscriber_1.Subscriber(Observer_1.empty);
        }

        return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
      }

      exports.toSubscriber = toSubscriber; //# sourceMappingURL=toSubscriber.js.map

      /***/
    },

    /***/
    "Xy09":
    /*!************************************************!*\
      !*** ./src/app/features/layer/layer.module.ts ***!
      \************************************************/

    /*! exports provided: LayerModule */

    /***/
    function Xy09(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayerModule", function () {
        return LayerModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _layer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layer-routing.module */
      "87W5");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var _state_layer_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./state/layer.reducer */
      "/DDz");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/effects */
      "snw9");
      /* harmony import */


      var _state_layer_effect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./state/layer.effect */
      "1eC2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _containers_layers_container_layers_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./containers/layers-container/layers-container.component */
      "yM1F");
      /* harmony import */


      var _components_removed_layers_removed_layers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/removed-layers/removed-layers.component */
      "qY91");
      /* harmony import */


      var _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/layers/layers.component */
      "/4Gd");

      var LayerModule = function LayerModule() {
        _classCallCheck(this, LayerModule);
      };

      LayerModule.ɵfac = function LayerModule_Factory(t) {
        return new (t || LayerModule)();
      };

      LayerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: LayerModule
      });
      LayerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _layer_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayerRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature("layerReducer", _state_layer_reducer__WEBPACK_IMPORTED_MODULE_5__["layerReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_state_layer_effect__WEBPACK_IMPORTED_MODULE_7__["LayerEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](LayerModule, {
          declarations: [_containers_layers_container_layers_container_component__WEBPACK_IMPORTED_MODULE_9__["LayersContainerComponent"], _components_removed_layers_removed_layers_component__WEBPACK_IMPORTED_MODULE_10__["RemovedLayersComponent"], _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_11__["LayersComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _layer_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayerRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsFeatureModule"]]
        });
      })();
      /***/

    },

    /***/
    "mbIT":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isArray.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function mbIT(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.isArray = function () {
        return Array.isArray || function (x) {
          return x && typeof x.length === 'number';
        };
      }(); //# sourceMappingURL=isArray.js.map

      /***/

    },

    /***/
    "n3uD":
    /*!**********************************************!*\
      !*** ./node_modules/rxjs/internal/config.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function n3uD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _enable_super_gross_mode_that_will_cause_bad_things = false;
      exports.config = {
        Promise: undefined,

        set useDeprecatedSynchronousErrorHandling(value) {
          if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
          } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
          }

          _enable_super_gross_mode_that_will_cause_bad_things = value;
        },

        get useDeprecatedSynchronousErrorHandling() {
          return _enable_super_gross_mode_that_will_cause_bad_things;
        }

      }; //# sourceMappingURL=config.js.map

      /***/
    },

    /***/
    "nzqU":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isScheduler.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function nzqU(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function isScheduler(value) {
        return value && typeof value.schedule === 'function';
      }

      exports.isScheduler = isScheduler; //# sourceMappingURL=isScheduler.js.map

      /***/
    },

    /***/
    "p//D":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function pD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.rxSubscriber = function () {
        return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
      }();

      exports.$$rxSubscriber = exports.rxSubscriber; //# sourceMappingURL=rxSubscriber.js.map

      /***/
    },

    /***/
    "pshJ":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function pshJ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function isFunction(x) {
        return typeof x === 'function';
      }

      exports.isFunction = isFunction; //# sourceMappingURL=isFunction.js.map

      /***/
    },

    /***/
    "qY91":
    /*!**************************************************************************************!*\
      !*** ./src/app/features/layer/components/removed-layers/removed-layers.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: RemovedLayersComponent */

    /***/
    function qY91(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemovedLayersComponent", function () {
        return RemovedLayersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function RemovedLayersComponent_tr_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngb-highlight", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngb-highlight", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngb-highlight", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemovedLayersComponent_tr_15_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var layer_r1 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.restore(layer_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Restore ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var layer_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", layer_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", layer_r1.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", layer_r1.description);
        }
      }

      var RemovedLayersComponent = /*#__PURE__*/function () {
        function RemovedLayersComponent(store) {
          _classCallCheck(this, RemovedLayersComponent);

          this.store = store;
        }

        _createClass(RemovedLayersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "restore",
          value: function restore(layer) {}
        }]);

        return RemovedLayersComponent;
      }();

      RemovedLayersComponent.ɵfac = function RemovedLayersComponent_Factory(t) {
        return new (t || RemovedLayersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
      };

      RemovedLayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RemovedLayersComponent,
        selectors: [["smc-removed-layers"]],
        inputs: {
          deletedLayers$: "deletedLayers$"
        },
        decls: 17,
        vars: 3,
        consts: [[1, "container-fluid"], [1, "jumbotron"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [3, "result"], [1, "btn", "btn-lg", "btn-success", "col-xs-12", 3, "click"], [1, "glyphicon", "glyphicon-earphone", "pull-left"]],
        template: function RemovedLayersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RemovedLayersComponent_tr_15_Template, 13, 4, "tr", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 1, ctx.deletedLayers$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbHighlight"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW1vdmVkLWxheWVycy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "w5QO":
    /*!*************************************************!*\
      !*** ./node_modules/rxjs/internal/util/noop.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function w5QO(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function noop() {}

      exports.noop = noop; //# sourceMappingURL=noop.js.map

      /***/
    },

    /***/
    "yM1F":
    /*!******************************************************************************************!*\
      !*** ./src/app/features/layer/containers/layers-container/layers-container.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: LayersContainerComponent */

    /***/
    function yM1F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayersContainerComponent", function () {
        return LayersContainerComponent;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var _state_layer_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../state/layer.actions */
      "WaFC");
      /* harmony import */


      var _state_layer_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../state/layer.selector */
      "CnPI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_layer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/layer.service */
      "NLdR");
      /* harmony import */


      var _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/layers/layers.component */
      "/4Gd");
      /* harmony import */


      var _components_removed_layers_removed_layers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/removed-layers/removed-layers.component */
      "qY91");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var LayersContainerComponent = /*#__PURE__*/function () {
        function LayersContainerComponent(store, service) {
          _classCallCheck(this, LayersContainerComponent);

          this.store = store;
          this.service = service;
          this.title = "Default title";
          this.layers$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_state_layer_selector__WEBPACK_IMPORTED_MODULE_2__["selectLayers"]));
        }

        _createClass(LayersContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.store.dispatch(_state_layer_actions__WEBPACK_IMPORTED_MODULE_1__["loadLayer"]());
            this.layers$.subscribe(function (data) {
              console.log('layers data', data);
            }); // this.service.getLayers().subscribe(data => {
            //   console.log('test get layers', data);
            // })
          }
        }, {
          key: "eventHandled",
          value: function eventHandled($event) {
            if ($event.type === "ADD_LAYER") {
              var layer = {};
              layer.name = "layer test";
              layer.type = "layer type";
              layer.description = "desc";
            }

            if ($event.type === "DELETE_LAYER") {}
          }
        }]);

        return LayersContainerComponent;
      }();

      LayersContainerComponent.ɵfac = function LayersContainerComponent_Factory(t) {
        return new (t || LayersContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_layer_service__WEBPACK_IMPORTED_MODULE_4__["LayerService"]));
      };

      LayersContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: LayersContainerComponent,
        selectors: [["smc-layers-container"]],
        decls: 6,
        vars: 4,
        consts: [[1, "row"], [1, "col-md-12"], [3, "layers", "eventHandled"], [3, "deletedLayers$"]],
        template: function LayersContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "smc-layers", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("eventHandled", function LayersContainerComponent_Template_smc_layers_eventHandled_2_listener($event) {
              return ctx.eventHandled($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "smc-removed-layers", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("layers", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, ctx.layers$));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("deletedLayers$", ctx.deletedLayers$);
          }
        },
        directives: [_components_layers_layers_component__WEBPACK_IMPORTED_MODULE_5__["LayersComponent"], _components_removed_layers_removed_layers_component__WEBPACK_IMPORTED_MODULE_6__["RemovedLayersComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXllcnMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIn0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "yx2s":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function yx2s(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Subscriber_1 = __webpack_require__(
      /*! ../Subscriber */
      "FWf1");

      function canReportError(observer) {
        while (observer) {
          var _a = observer,
              closed_1 = _a.closed,
              destination = _a.destination,
              isStopped = _a.isStopped;

          if (closed_1 || isStopped) {
            return false;
          } else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
          } else {
            observer = null;
          }
        }

        return true;
      }

      exports.canReportError = canReportError; //# sourceMappingURL=canReportError.js.map

      /***/
    },

    /***/
    "zB/H":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs/internal/Subscription.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function zBH(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var isArray_1 = __webpack_require__(
      /*! ./util/isArray */
      "mbIT");

      var isObject_1 = __webpack_require__(
      /*! ./util/isObject */
      "GMZp");

      var isFunction_1 = __webpack_require__(
      /*! ./util/isFunction */
      "pshJ");

      var UnsubscriptionError_1 = __webpack_require__(
      /*! ./util/UnsubscriptionError */
      "LBXl");

      var Subscription = function () {
        function Subscription(unsubscribe) {
          this.closed = false;
          this._parentOrParents = null;
          this._subscriptions = null;

          if (unsubscribe) {
            this._unsubscribe = unsubscribe;
          }
        }

        Subscription.prototype.unsubscribe = function () {
          var errors;

          if (this.closed) {
            return;
          }

          var _a = this,
              _parentOrParents = _a._parentOrParents,
              _unsubscribe = _a._unsubscribe,
              _subscriptions = _a._subscriptions;

          this.closed = true;
          this._parentOrParents = null;
          this._subscriptions = null;

          if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
          } else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
              var parent_1 = _parentOrParents[index];
              parent_1.remove(this);
            }
          }

          if (isFunction_1.isFunction(_unsubscribe)) {
            try {
              _unsubscribe.call(this);
            } catch (e) {
              errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
          }

          if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;

            while (++index < len) {
              var sub = _subscriptions[index];

              if (isObject_1.isObject(sub)) {
                try {
                  sub.unsubscribe();
                } catch (e) {
                  errors = errors || [];

                  if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                    errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                  } else {
                    errors.push(e);
                  }
                }
              }
            }
          }

          if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
          }
        };

        Subscription.prototype.add = function (teardown) {
          var subscription = teardown;

          if (!teardown) {
            return Subscription.EMPTY;
          }

          switch (typeof teardown) {
            case 'function':
              subscription = new Subscription(teardown);

            case 'object':
              if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                return subscription;
              } else if (this.closed) {
                subscription.unsubscribe();
                return subscription;
              } else if (!(subscription instanceof Subscription)) {
                var tmp = subscription;
                subscription = new Subscription();
                subscription._subscriptions = [tmp];
              }

              break;

            default:
              {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
              }
          }

          var _parentOrParents = subscription._parentOrParents;

          if (_parentOrParents === null) {
            subscription._parentOrParents = this;
          } else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
              return subscription;
            }

            subscription._parentOrParents = [_parentOrParents, this];
          } else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
          } else {
            return subscription;
          }

          var subscriptions = this._subscriptions;

          if (subscriptions === null) {
            this._subscriptions = [subscription];
          } else {
            subscriptions.push(subscription);
          }

          return subscription;
        };

        Subscription.prototype.remove = function (subscription) {
          var subscriptions = this._subscriptions;

          if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);

            if (subscriptionIndex !== -1) {
              subscriptions.splice(subscriptionIndex, 1);
            }
          }
        };

        Subscription.EMPTY = function (empty) {
          empty.closed = true;
          return empty;
        }(new Subscription());

        return Subscription;
      }();

      exports.Subscription = Subscription;

      function flattenUnsubscriptionErrors(errors) {
        return errors.reduce(function (errs, err) {
          return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
        }, []);
      } //# sourceMappingURL=Subscription.js.map

      /***/

    },

    /***/
    "zfKp":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function zfKp(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.observable = function () {
        return typeof Symbol === 'function' && Symbol.observable || '@@observable';
      }(); //# sourceMappingURL=observable.js.map

      /***/

    },

    /***/
    "zzsZ":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs/internal/observable/fromArray.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function zzsZ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Observable_1 = __webpack_require__(
      /*! ../Observable */
      "Q1FS");

      var subscribeToArray_1 = __webpack_require__(
      /*! ../util/subscribeToArray */
      "OAkW");

      var scheduleArray_1 = __webpack_require__(
      /*! ../scheduled/scheduleArray */
      "2qMH");

      function fromArray(input, scheduler) {
        if (!scheduler) {
          return new Observable_1.Observable(subscribeToArray_1.subscribeToArray(input));
        } else {
          return scheduleArray_1.scheduleArray(input, scheduler);
        }
      }

      exports.fromArray = fromArray; //# sourceMappingURL=fromArray.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=features-layer-layer-module-es5.js.map