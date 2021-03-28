(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-lac-lac-module"], {
    /***/
    "+4/i":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/let.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function i(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var let_1 = __webpack_require__(
      /*! ../../operator/let */
      "odkN");

      rxjs_1.Observable.prototype["let"] = let_1.letProto;
      rxjs_1.Observable.prototype.letBind = let_1.letProto; //# sourceMappingURL=let.js.map

      /***/
    },

    /***/
    "+oeQ":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/observeOn.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function oeQ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var observeOn_1 = __webpack_require__(
      /*! ../../operator/observeOn */
      "H+DX");

      rxjs_1.Observable.prototype.observeOn = observeOn_1.observeOn; //# sourceMappingURL=observeOn.js.map

      /***/
    },

    /***/
    "+psR":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/retry.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function psR(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var retry_1 = __webpack_require__(
      /*! ../../operator/retry */
      "16Oq");

      rxjs_1.Observable.prototype.retry = retry_1.retry; //# sourceMappingURL=retry.js.map

      /***/
    },

    /***/
    "+qxJ":
    /*!***********************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/distinctUntilChanged.js ***!
      \***********************************************************************/

    /*! no static exports found */

    /***/
    function qxJ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var distinctUntilChanged_1 = __webpack_require__(
      /*! ../../operator/distinctUntilChanged */
      "GsYY");

      rxjs_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged; //# sourceMappingURL=distinctUntilChanged.js.map

      /***/
    },

    /***/
    "+v8i":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/concat.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function v8i(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.concat = rxjs_1.concat; //# sourceMappingURL=concat.js.map

      /***/
    },

    /***/
    "00Es":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/timestamp.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function Es(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var timestamp_1 = __webpack_require__(
      /*! ../../operator/timestamp */
      "bb3/");

      rxjs_1.Observable.prototype.timestamp = timestamp_1.timestamp; //# sourceMappingURL=timestamp.js.map

      /***/
    },

    /***/
    "02G1":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/merge.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function G1(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* tslint:enable:max-line-length */

      /**
       * Creates an output Observable which concurrently emits all values from every
       * given input Observable.
       *
       * <span class="informal">Flattens multiple Observables together by blending
       * their values into one Observable.</span>
       *
       * <img src="./img/merge.png" width="100%">
       *
       * `merge` subscribes to each given input Observable (either the source or an
       * Observable given as argument), and simply forwards (without doing any
       * transformation) all the values from all the input Observables to the output
       * Observable. The output Observable only completes once all input Observables
       * have completed. Any error delivered by an input Observable will be immediately
       * emitted on the output Observable.
       *
       * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var timer = Rx.Observable.interval(1000);
       * var clicksOrTimer = clicks.merge(timer);
       * clicksOrTimer.subscribe(x => console.log(x));
       *
       * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
       * var timer1 = Rx.Observable.interval(1000).take(10);
       * var timer2 = Rx.Observable.interval(2000).take(6);
       * var timer3 = Rx.Observable.interval(500).take(10);
       * var concurrent = 2; // the argument
       * var merged = timer1.merge(timer2, timer3, concurrent);
       * merged.subscribe(x => console.log(x));
       *
       * @see {@link mergeAll}
       * @see {@link mergeMap}
       * @see {@link mergeMapTo}
       * @see {@link mergeScan}
       *
       * @param {ObservableInput} other An input Observable to merge with the source
       * Observable. More than one input Observables may be given as argument.
       * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
       * Observables being subscribed to concurrently.
       * @param {Scheduler} [scheduler=null] The IScheduler to use for managing
       * concurrency of input Observables.
       * @return {Observable} An Observable that emits items that are the result of
       * every input Observable.
       * @method merge
       * @owner Observable
       */


      function merge() {
        var observables = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i] = arguments[_i];
        }

        return this.lift.call(rxjs_1.merge.apply(void 0, [this].concat(observables)));
      }

      exports.merge = merge; //# sourceMappingURL=merge.js.map

      /***/
    },

    /***/
    "0ZAG":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/takeLast.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function ZAG(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var takeLast_1 = __webpack_require__(
      /*! ../../operator/takeLast */
      "8mU2");

      rxjs_1.Observable.prototype.takeLast = takeLast_1.takeLast; //# sourceMappingURL=takeLast.js.map

      /***/
    },

    /***/
    "0c70":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/toArray.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function c70(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Collects all source emissions and emits them as an array when the source completes.
       *
       * <span class="informal">Get all values inside an array when the source completes</span>
       *
       * <img src="./img/toArray.png" width="100%">
       *
       * `toArray` will wait until the source Observable completes
       * before emitting the array containing all emissions.
       * When the source Observable errors no array will be emitted.
       *
       * @example <caption>Create array from input</caption>
       * const input = Rx.Observable.interval(100).take(4);
       *
       * input.toArray()
       *   .subscribe(arr => console.log(arr)); // [0,1,2,3]
       *
       * @see {@link buffer}
       *
       * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
       * @method toArray
       * @owner Observable
       */


      function toArray() {
        return operators_1.toArray()(this);
      }

      exports.toArray = toArray; //# sourceMappingURL=toArray.js.map

      /***/
    },

    /***/
    "11EI":
    /*!*********************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/fromEventPattern.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function EI(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.fromEventPattern = rxjs_1.fromEventPattern; //# sourceMappingURL=fromEventPattern.js.map

      /***/
    },

    /***/
    "16Oq":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/retry.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function Oq(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
       * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
       * as a number parameter) rather than propagating the `error` call.
       *
       * <img src="./img/retry.png" width="100%">
       *
       * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
       * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
       * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
       * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
       * @param {number} count - Number of retry attempts before failing.
       * @return {Observable} The source Observable modified with the retry logic.
       * @method retry
       * @owner Observable
       */


      function retry(count) {
        if (count === void 0) {
          count = -1;
        }

        return operators_1.retry(count)(this);
      }

      exports.retry = retry; //# sourceMappingURL=retry.js.map

      /***/
    },

    /***/
    "19/K":
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/observable/dom/ajax.js ***!
      \********************************************************************/

    /*! exports provided: ajax */

    /***/
    function K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ajax", function () {
        return ajax;
      });
      /* harmony import */


      var _AjaxObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AjaxObservable */
      "Sj+y");

      var ajax = function () {
        return _AjaxObservable__WEBPACK_IMPORTED_MODULE_0__["AjaxObservable"].create;
      }(); //# sourceMappingURL=ajax.js.map

      /***/

    },

    /***/
    "1JPw":
    /*!*****************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/bindCallback.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function JPw(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.bindCallback = rxjs_1.bindCallback; //# sourceMappingURL=bindCallback.js.map

      /***/
    },

    /***/
    "1M8x":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/catch.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function M8x(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var catch_1 = __webpack_require__(
      /*! ../../operator/catch */
      "Xk39");

      rxjs_1.Observable.prototype["catch"] = catch_1._catch;
      rxjs_1.Observable.prototype._catch = catch_1._catch; //# sourceMappingURL=catch.js.map

      /***/
    },

    /***/
    "1gRP":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/materialize.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function gRP(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Represents all of the notifications from the source Observable as `next`
       * emissions marked with their original types within {@link Notification}
       * objects.
       *
       * <span class="informal">Wraps `next`, `error` and `complete` emissions in
       * {@link Notification} objects, emitted as `next` on the output Observable.
       * </span>
       *
       * <img src="./img/materialize.png" width="100%">
       *
       * `materialize` returns an Observable that emits a `next` notification for each
       * `next`, `error`, or `complete` emission of the source Observable. When the
       * source Observable emits `complete`, the output Observable will emit `next` as
       * a Notification of type "complete", and then it will emit `complete` as well.
       * When the source Observable emits `error`, the output will emit `next` as a
       * Notification of type "error", and then `complete`.
       *
       * This operator is useful for producing metadata of the source Observable, to
       * be consumed as `next` emissions. Use it in conjunction with
       * {@link dematerialize}.
       *
       * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
       * var letters = Rx.Observable.of('a', 'b', 13, 'd');
       * var upperCase = letters.map(x => x.toUpperCase());
       * var materialized = upperCase.materialize();
       * materialized.subscribe(x => console.log(x));
       *
       * // Results in the following:
       * // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
       * // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
       * // - Notification {kind: "E", value: undefined, error: TypeError:
       * //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
       * //   [as project] (http://1…, hasValue: false}
       *
       * @see {@link Notification}
       * @see {@link dematerialize}
       *
       * @return {Observable<Notification<T>>} An Observable that emits
       * {@link Notification} objects that wrap the original emissions from the source
       * Observable with metadata.
       * @method materialize
       * @owner Observable
       */


      function materialize() {
        return operators_1.materialize()(this);
      }

      exports.materialize = materialize; //# sourceMappingURL=materialize.js.map

      /***/
    },

    /***/
    "2+DN":
    /*!**************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/shareReplay.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function DN(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var shareReplay_1 = __webpack_require__(
      /*! ../../operator/shareReplay */
      "uMcE");

      rxjs_1.Observable.prototype.shareReplay = shareReplay_1.shareReplay; //# sourceMappingURL=shareReplay.js.map

      /***/
    },

    /***/
    "2IC2":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/windowTime.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function IC2(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var windowTime_1 = __webpack_require__(
      /*! ../../operator/windowTime */
      "j5kd");

      rxjs_1.Observable.prototype.windowTime = windowTime_1.windowTime; //# sourceMappingURL=windowTime.js.map

      /***/
    },

    /***/
    "338f":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/concatMap.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function f(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Projects each source value to an Observable which is merged in the output
       * Observable, in a serialized fashion waiting for each one to complete before
       * merging the next.
       *
       * <span class="informal">Maps each value to an Observable, then flattens all of
       * these inner Observables using {@link concatAll}.</span>
       *
       * <img src="./img/concatMap.png" width="100%">
       *
       * Returns an Observable that emits items based on applying a function that you
       * supply to each item emitted by the source Observable, where that function
       * returns an (so-called "inner") Observable. Each new inner Observable is
       * concatenated with the previous inner Observable.
       *
       * __Warning:__ if source values arrive endlessly and faster than their
       * corresponding inner Observables can complete, it will result in memory issues
       * as inner Observables amass in an unbounded buffer waiting for their turn to
       * be subscribed to.
       *
       * Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
       * to `1`.
       *
       * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
       * result.subscribe(x => console.log(x));
       *
       * // Results in the following:
       * // (results are not concurrent)
       * // For every click on the "document" it will emit values 0 to 3 spaced
       * // on a 1000ms interval
       * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
       *
       * @see {@link concat}
       * @see {@link concatAll}
       * @see {@link concatMapTo}
       * @see {@link exhaustMap}
       * @see {@link mergeMap}
       * @see {@link switchMap}
       *
       * @param {function(value: T, ?index: number): ObservableInput} project A function
       * that, when applied to an item emitted by the source Observable, returns an
       * Observable.
       * @return {Observable} An Observable that emits the result of applying the
       * projection function (and the optional `resultSelector`) to each item emitted
       * by the source Observable and taking values from each projected inner
       * Observable sequentially.
       * @method concatMap
       * @owner Observable
       */


      function concatMap(project) {
        return operators_1.concatMap(project)(this);
      }

      exports.concatMap = concatMap; //# sourceMappingURL=concatMap.js.map

      /***/
    },

    /***/
    "37L2":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/concatMap.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function L2(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var concatMap_1 = __webpack_require__(
      /*! ../../operator/concatMap */
      "338f");

      rxjs_1.Observable.prototype.concatMap = concatMap_1.concatMap; //# sourceMappingURL=concatMap.js.map

      /***/
    },

    /***/
    "3EiV":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/buffer.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function EiV(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var buffer_1 = __webpack_require__(
      /*! ../../operator/buffer */
      "dL1u");

      rxjs_1.Observable.prototype.buffer = buffer_1.buffer; //# sourceMappingURL=buffer.js.map

      /***/
    },

    /***/
    "3Qpg":
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/fromPromise.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function Qpg(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.fromPromise = rxjs_1.from; //# sourceMappingURL=fromPromise.js.map

      /***/
    },

    /***/
    "3uOa":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/webSocket/index.js ***!
      \*******************************************************/

    /*! exports provided: webSocket, WebSocketSubject */

    /***/
    function uOa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _internal_observable_dom_webSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../internal/observable/dom/webSocket */
      "lcII");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "webSocket", function () {
        return _internal_observable_dom_webSocket__WEBPACK_IMPORTED_MODULE_0__["webSocket"];
      });
      /* harmony import */


      var _internal_observable_dom_WebSocketSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../internal/observable/dom/WebSocketSubject */
      "wxn8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WebSocketSubject", function () {
        return _internal_observable_dom_WebSocketSubject__WEBPACK_IMPORTED_MODULE_1__["WebSocketSubject"];
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "4AtU":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/expand.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function AtU(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Recursively projects each source value to an Observable which is merged in
       * the output Observable.
       *
       * <span class="informal">It's similar to {@link mergeMap}, but applies the
       * projection function to every source value as well as every output value.
       * It's recursive.</span>
       *
       * <img src="./img/expand.png" width="100%">
       *
       * Returns an Observable that emits items based on applying a function that you
       * supply to each item emitted by the source Observable, where that function
       * returns an Observable, and then merging those resulting Observables and
       * emitting the results of this merger. *Expand* will re-emit on the output
       * Observable every source value. Then, each output value is given to the
       * `project` function which returns an inner Observable to be merged on the
       * output Observable. Those output values resulting from the projection are also
       * given to the `project` function to produce new output values. This is how
       * *expand* behaves recursively.
       *
       * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var powersOfTwo = clicks
       *   .mapTo(1)
       *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
       *   .take(10);
       * powersOfTwo.subscribe(x => console.log(x));
       *
       * @see {@link mergeMap}
       * @see {@link mergeScan}
       *
       * @param {function(value: T, index: number) => Observable} project A function
       * that, when applied to an item emitted by the source or the output Observable,
       * returns an Observable.
       * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
       * Observables being subscribed to concurrently.
       * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
       * each projected inner Observable.
       * @return {Observable} An Observable that emits the source values and also
       * result of applying the projection function to each value emitted on the
       * output Observable and and merging the results of the Observables obtained
       * from this transformation.
       * @method expand
       * @owner Observable
       */


      function expand(project, concurrent, scheduler) {
        if (concurrent === void 0) {
          concurrent = Number.POSITIVE_INFINITY;
        }

        if (scheduler === void 0) {
          scheduler = undefined;
        }

        concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
        return operators_1.expand(project, concurrent, scheduler)(this);
      }

      exports.expand = expand; //# sourceMappingURL=expand.js.map

      /***/
    },

    /***/
    "4Cln":
    /*!****************************************************!*\
      !*** ./src/app/features/lac/lac-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: LacRoutingModule */

    /***/
    function Cln(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LacRoutingModule", function () {
        return LacRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_lac_layer_block_lac_layer_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/lac-layer-block/lac-layer-block.component */
      "T7Um");
      /* harmony import */


      var src_app_shared_components_autocomplete_filter_autocomplete_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/components/autocomplete-filter/autocomplete-filter.component */
      "uqGX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _components_lac_layer_block_lac_layer_block_component__WEBPACK_IMPORTED_MODULE_1__["LacLayerBlockComponent"]
      }];

      var LacRoutingModule = function LacRoutingModule() {
        _classCallCheck(this, LacRoutingModule);
      };

      LacRoutingModule.components = [_components_lac_layer_block_lac_layer_block_component__WEBPACK_IMPORTED_MODULE_1__["LacLayerBlockComponent"], src_app_shared_components_autocomplete_filter_autocomplete_filter_component__WEBPACK_IMPORTED_MODULE_2__["AutocompleteFilterComponent"]];

      LacRoutingModule.ɵfac = function LacRoutingModule_Factory(t) {
        return new (t || LacRoutingModule)();
      };

      LacRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: LacRoutingModule
      });
      LacRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LacRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "4Hgy":
    /*!*************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/do.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function Hgy(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Perform a side effect for every emission on the source Observable, but return
       * an Observable that is identical to the source.
       *
       * <span class="informal">Intercepts each emission on the source and runs a
       * function, but returns an output which is identical to the source as long as errors don't occur.</span>
       *
       * <img src="./img/do.png" width="100%">
       *
       * Returns a mirrored Observable of the source Observable, but modified so that
       * the provided Observer is called to perform a side effect for every value,
       * error, and completion emitted by the source. Any errors that are thrown in
       * the aforementioned Observer or handlers are safely sent down the error path
       * of the output Observable.
       *
       * This operator is useful for debugging your Observables for the correct values
       * or performing other side effects.
       *
       * Note: this is different to a `subscribe` on the Observable. If the Observable
       * returned by `do` is not subscribed, the side effects specified by the
       * Observer will never happen. `do` therefore simply spies on existing
       * execution, it does not trigger an execution to happen like `subscribe` does.
       *
       * @example <caption>Map every click to the clientX position of that click, while also logging the click event</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var positions = clicks
       *   .do(ev => console.log(ev))
       *   .map(ev => ev.clientX);
       * positions.subscribe(x => console.log(x));
       *
       * @see {@link map}
       * @see {@link subscribe}
       *
       * @param {Observer|function} [nextOrObserver] A normal Observer object or a
       * callback for `next`.
       * @param {function} [error] Callback for errors in the source.
       * @param {function} [complete] Callback for the completion of the source.
       * @return {Observable} An Observable identical to the source, but runs the
       * specified Observer or callback(s) for each item.
       * @method do
       * @name do
       * @owner Observable
       */


      function _do(nextOrObserver, error, complete) {
        return operators_1.tap(nextOrObserver, error, complete)(this);
      }

      exports._do = _do; //# sourceMappingURL=do.js.map

      /***/
    },

    /***/
    "4Wg5":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/switchMap.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function Wg5(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var switchMap_1 = __webpack_require__(
      /*! ../../operator/switchMap */
      "nZYK");

      rxjs_1.Observable.prototype.switchMap = switchMap_1.switchMap; //# sourceMappingURL=switchMap.js.map

      /***/
    },

    /***/
    "4w9M":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/race.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function w9M(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.race = rxjs_1.race; //# sourceMappingURL=race.js.map

      /***/
    },

    /***/
    "5LO2":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/exhaust.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function LO2(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Converts a higher-order Observable into a first-order Observable by dropping
       * inner Observables while the previous inner Observable has not yet completed.
       *
       * <span class="informal">Flattens an Observable-of-Observables by dropping the
       * next inner Observables while the current inner is still executing.</span>
       *
       * <img src="./img/exhaust.png" width="100%">
       *
       * `exhaust` subscribes to an Observable that emits Observables, also known as a
       * higher-order Observable. Each time it observes one of these emitted inner
       * Observables, the output Observable begins emitting the items emitted by that
       * inner Observable. So far, it behaves like {@link mergeAll}. However,
       * `exhaust` ignores every new inner Observable if the previous Observable has
       * not yet completed. Once that one completes, it will accept and flatten the
       * next inner Observable and repeat this process.
       *
       * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(5));
       * var result = higherOrder.exhaust();
       * result.subscribe(x => console.log(x));
       *
       * @see {@link combineAll}
       * @see {@link concatAll}
       * @see {@link switch}
       * @see {@link mergeAll}
       * @see {@link exhaustMap}
       * @see {@link zipAll}
       *
       * @return {Observable} An Observable that takes a source of Observables and propagates the first observable
       * exclusively until it completes before subscribing to the next.
       */


      function exhaust() {
        return operators_1.exhaust()(this);
      }

      exports.exhaust = exhaust; //# sourceMappingURL=exhaust.js.map

      /***/
    },

    /***/
    "5hZ8":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/skipUntil.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function hZ8(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var skipUntil_1 = __webpack_require__(
      /*! ../../operator/skipUntil */
      "b/PJ");

      rxjs_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil; //# sourceMappingURL=skipUntil.js.map

      /***/
    },

    /***/
    "5i7x":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/mapTo.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function i7x(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Emits the given constant value on the output Observable every time the source
       * Observable emits a value.
       *
       * <span class="informal">Like {@link map}, but it maps every source value to
       * the same output value every time.</span>
       *
       * <img src="./img/mapTo.png" width="100%">
       *
       * Takes a constant `value` as argument, and emits that whenever the source
       * Observable emits a value. In other words, ignores the actual source value,
       * and simply uses the emission moment to know when to emit the given `value`.
       *
       * @example <caption>Map every click to the string 'Hi'</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var greetings = clicks.mapTo('Hi');
       * greetings.subscribe(x => console.log(x));
       *
       * @see {@link map}
       *
       * @param {any} value The value to map each source value to.
       * @return {Observable} An Observable that emits the given `value` every time
       * the source Observable emits something.
       * @method mapTo
       * @owner Observable
       */


      function mapTo(value) {
        return operators_1.mapTo(value)(this);
      }

      exports.mapTo = mapTo; //# sourceMappingURL=mapTo.js.map

      /***/
    },

    /***/
    "6IDA":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/windowWhen.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function IDA(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var windowWhen_1 = __webpack_require__(
      /*! ../../operator/windowWhen */
      "YiA4");

      rxjs_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen; //# sourceMappingURL=windowWhen.js.map

      /***/
    },

    /***/
    "6PMC":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/skipWhile.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function PMC(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
       * true, but emits all further source items as soon as the condition becomes false.
       *
       * <img src="./img/skipWhile.png" width="100%">
       *
       * @param {Function} predicate - A function to test each item emitted from the source Observable.
       * @return {Observable<T>} An Observable that begins emitting items emitted by the source Observable when the
       * specified predicate becomes false.
       * @method skipWhile
       * @owner Observable
       */


      function skipWhile(predicate) {
        return operators_1.skipWhile(predicate)(this);
      }

      exports.skipWhile = skipWhile; //# sourceMappingURL=skipWhile.js.map

      /***/
    },

    /***/
    "6mJ0":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/findIndex.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function mJ0(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Emits only the index of the first value emitted by the source Observable that
       * meets some condition.
       *
       * <span class="informal">It's like {@link find}, but emits the index of the
       * found value, not the value itself.</span>
       *
       * <img src="./img/findIndex.png" width="100%">
       *
       * `findIndex` searches for the first item in the source Observable that matches
       * the specified condition embodied by the `predicate`, and returns the
       * (zero-based) index of the first occurrence in the source. Unlike
       * {@link first}, the `predicate` is required in `findIndex`, and does not emit
       * an error if a valid value is not found.
       *
       * @example <caption>Emit the index of first click that happens on a DIV element</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
       * result.subscribe(x => console.log(x));
       *
       * @see {@link filter}
       * @see {@link find}
       * @see {@link first}
       * @see {@link take}
       *
       * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
       * A function called with each item to test for condition matching.
       * @param {any} [thisArg] An optional argument to determine the value of `this`
       * in the `predicate` function.
       * @return {Observable} An Observable of the index of the first item that
       * matches the condition.
       * @method find
       * @owner Observable
       */


      function findIndex(predicate, thisArg) {
        return operators_1.findIndex(predicate, thisArg)(this);
      }

      exports.findIndex = findIndex; //# sourceMappingURL=findIndex.js.map

      /***/
    },

    /***/
    "7+k4":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/pairwise.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function k4(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var pairwise_1 = __webpack_require__(
      /*! ../../operator/pairwise */
      "qIMP");

      rxjs_1.Observable.prototype.pairwise = pairwise_1.pairwise; //# sourceMappingURL=pairwise.js.map

      /***/
    },

    /***/
    "7065":
    /*!**************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/max.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * The Max operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
       * and when source Observable completes it emits a single item: the item with the largest value.
       *
       * <img src="./img/max.png" width="100%">
       *
       * @example <caption>Get the maximal value of a series of numbers</caption>
       * Rx.Observable.of(5, 4, 7, 2, 8)
       *   .max()
       *   .subscribe(x => console.log(x)); // -> 8
       *
       * @example <caption>Use a comparer function to get the maximal item</caption>
       * interface Person {
       *   age: number,
       *   name: string
       * }
       * Observable.of<Person>({age: 7, name: 'Foo'},
       *                       {age: 5, name: 'Bar'},
       *                       {age: 9, name: 'Beer'})
       *           .max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1)
       *           .subscribe((x: Person) => console.log(x.name)); // -> 'Beer'
       * }
       *
       * @see {@link min}
       *
       * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
       * value of two items.
       * @return {Observable} An Observable that emits item with the largest value.
       * @method max
       * @owner Observable
       */


      function max(comparer) {
        return operators_1.max(comparer)(this);
      }

      exports.max = max; //# sourceMappingURL=max.js.map

      /***/
    },

    /***/
    "70oK":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/exhaustMap.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function oK(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var exhaustMap_1 = __webpack_require__(
      /*! ../../operator/exhaustMap */
      "73rQ");

      rxjs_1.Observable.prototype.exhaustMap = exhaustMap_1.exhaustMap; //# sourceMappingURL=exhaustMap.js.map

      /***/
    },

    /***/
    "73rQ":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/exhaustMap.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function rQ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Projects each source value to an Observable which is merged in the output
       * Observable only if the previous projected Observable has completed.
       *
       * <span class="informal">Maps each value to an Observable, then flattens all of
       * these inner Observables using {@link exhaust}.</span>
       *
       * <img src="./img/exhaustMap.png" width="100%">
       *
       * Returns an Observable that emits items based on applying a function that you
       * supply to each item emitted by the source Observable, where that function
       * returns an (so-called "inner") Observable. When it projects a source value to
       * an Observable, the output Observable begins emitting the items emitted by
       * that projected Observable. However, `exhaustMap` ignores every new projected
       * Observable if the previous projected Observable has not yet completed. Once
       * that one completes, it will accept and flatten the next projected Observable
       * and repeat this process.
       *
       * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
       * var clicks = fromEvent(document, 'click');
       * var result = clicks.pipe(exhaustMap((ev) => Rx.Observable.interval(1000).take(5)));
       * result.subscribe(x => console.log(x));
       *
       * @see {@link concatMap}
       * @see {@link exhaust}
       * @see {@link mergeMap}
       * @see {@link switchMap}
       *
       * @param {function(value: T, ?index: number): ObservableInput} project A function
       * that, when applied to an item emitted by the source Observable, returns an
       * Observable.
       * @return {Observable} An Observable containing projected Observables
       * of each item of the source, ignoring projected Observables that start before
       * their preceding Observable has completed.
       */


      function exhaustMap(project) {
        return operators_1.exhaustMap(project)(this);
      }

      exports.exhaustMap = exhaustMap; //# sourceMappingURL=exhaustMap.js.map

      /***/
    },

    /***/
    "7MrP":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/find.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function MrP(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var find_1 = __webpack_require__(
      /*! ../../operator/find */
      "TqLU");

      rxjs_1.Observable.prototype.find = find_1.find; //# sourceMappingURL=find.js.map

      /***/
    },

    /***/
    "7N5M":
    /*!**************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/windowCount.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function N5M(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var windowCount_1 = __webpack_require__(
      /*! ../../operator/windowCount */
      "TpWx");

      rxjs_1.Observable.prototype.windowCount = windowCount_1.windowCount; //# sourceMappingURL=windowCount.js.map

      /***/
    },

    /***/
    "7RDD":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/multicast.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function RDD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var multicast_1 = __webpack_require__(
      /*! ../../operator/multicast */
      "ZHaO");

      rxjs_1.Observable.prototype.multicast = multicast_1.multicast; //# sourceMappingURL=multicast.js.map

      /***/
    },

    /***/
    "7y2s":
    /*!**********************************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/distinctUntilKeyChanged.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function y2s(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
       * using a property accessed by using the key provided to check if the two items are distinct.
       *
       * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
       *
       * If a comparator function is not provided, an equality check is used by default.
       *
       * @example <caption>An example comparing the name of persons</caption>
       *
       *  interface Person {
       *     age: number,
       *     name: string
       *  }
       *
       * Observable.of<Person>(
       *     { age: 4, name: 'Foo'},
       *     { age: 7, name: 'Bar'},
       *     { age: 5, name: 'Foo'},
       *     { age: 6, name: 'Foo'})
       *     .distinctUntilKeyChanged('name')
       *     .subscribe(x => console.log(x));
       *
       * // displays:
       * // { age: 4, name: 'Foo' }
       * // { age: 7, name: 'Bar' }
       * // { age: 5, name: 'Foo' }
       *
       * @example <caption>An example comparing the first letters of the name</caption>
       *
       * interface Person {
       *     age: number,
       *     name: string
       *  }
       *
       * Observable.of<Person>(
       *     { age: 4, name: 'Foo1'},
       *     { age: 7, name: 'Bar'},
       *     { age: 5, name: 'Foo2'},
       *     { age: 6, name: 'Foo3'})
       *     .distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3))
       *     .subscribe(x => console.log(x));
       *
       * // displays:
       * // { age: 4, name: 'Foo1' }
       * // { age: 7, name: 'Bar' }
       * // { age: 5, name: 'Foo2' }
       *
       * @see {@link distinct}
       * @see {@link distinctUntilChanged}
       *
       * @param {string} key String key for object property lookup on each item.
       * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
       * @return {Observable} An Observable that emits items from the source Observable with distinct values based on the key specified.
       * @method distinctUntilKeyChanged
       * @owner Observable
       */
      // tslint:disable-next-line:max-line-length


      function distinctUntilKeyChanged(key, compare) {
        return operators_1.distinctUntilKeyChanged(key, compare)(this);
      }

      exports.distinctUntilKeyChanged = distinctUntilKeyChanged; //# sourceMappingURL=distinctUntilKeyChanged.js.map

      /***/
    },

    /***/
    "89kA":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/map.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function kA(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var map_1 = __webpack_require__(
      /*! ../../operator/map */
      "ZR4w");

      rxjs_1.Observable.prototype.map = map_1.map; //# sourceMappingURL=map.js.map

      /***/
    },

    /***/
    "8Ip+":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/never.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function Ip(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      function staticNever() {
        return rxjs_1.NEVER;
      }

      exports.staticNever = staticNever;
      rxjs_1.Observable.never = staticNever; //# sourceMappingURL=never.js.map

      /***/
    },

    /***/
    "8LQU":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/subscribeOn.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function LQU(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
       *
       * <img src="./img/subscribeOn.png" width="100%">
       *
       * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
       * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
       .
       * @method subscribeOn
       * @owner Observable
       */


      function subscribeOn(scheduler, delay) {
        if (delay === void 0) {
          delay = 0;
        }

        return operators_1.subscribeOn(scheduler, delay)(this);
      }

      exports.subscribeOn = subscribeOn; //# sourceMappingURL=subscribeOn.js.map

      /***/
    },

    /***/
    "8YE1":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/mapTo.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function YE1(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var mapTo_1 = __webpack_require__(
      /*! ../../operator/mapTo */
      "5i7x");

      rxjs_1.Observable.prototype.mapTo = mapTo_1.mapTo; //# sourceMappingURL=mapTo.js.map

      /***/
    },

    /***/
    "8Yhr":
    /*!***************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/throttleTime.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function Yhr(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var throttleTime_1 = __webpack_require__(
      /*! ../../operator/throttleTime */
      "Vzig");

      rxjs_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime; //# sourceMappingURL=throttleTime.js.map

      /***/
    },

    /***/
    "8Zbp":
    /*!******************************************************!*\
      !*** ./src/app/features/lac/services/lac.service.ts ***!
      \******************************************************/

    /*! exports provided: LacService */

    /***/
    function Zbp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LacService", function () {
        return LacService;
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

      var LacService = /*#__PURE__*/function () {
        function LacService(httpClient) {
          _classCallCheck(this, LacService);

          this.httpClient = httpClient;
          this.baseUrl = "http://localhost:3000";
        }

        _createClass(LacService, [{
          key: "getTypeLoads",
          value: function getTypeLoads() {
            return this.httpClient.get("".concat(this.baseUrl, "/typeLoads")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return console.log("in service data ", JSON.stringify(data));
            }));
          }
        }]);

        return LacService;
      }();

      LacService.ɵfac = function LacService_Factory(t) {
        return new (t || LacService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      LacService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LacService,
        factory: LacService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "8mU2":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/takeLast.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function mU2(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Emits only the last `count` values emitted by the source Observable.
       *
       * <span class="informal">Remembers the latest `count` values, then emits those
       * only when the source completes.</span>
       *
       * <img src="./img/takeLast.png" width="100%">
       *
       * `takeLast` returns an Observable that emits at most the last `count` values
       * emitted by the source Observable. If the source emits fewer than `count`
       * values then all of its values are emitted. This operator must wait until the
       * `complete` notification emission from the source in order to emit the `next`
       * values on the output Observable, because otherwise it is impossible to know
       * whether or not more values will be emitted on the source. For this reason,
       * all values are emitted synchronously, followed by the complete notification.
       *
       * @example <caption>Take the last 3 values of an Observable with many values</caption>
       * var many = Rx.Observable.range(1, 100);
       * var lastThree = many.takeLast(3);
       * lastThree.subscribe(x => console.log(x));
       *
       * @see {@link take}
       * @see {@link takeUntil}
       * @see {@link takeWhile}
       * @see {@link skip}
       *
       * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
       * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
       *
       * @param {number} count The maximum number of values to emit from the end of
       * the sequence of values emitted by the source Observable.
       * @return {Observable<T>} An Observable that emits at most the last count
       * values emitted by the source Observable.
       * @method takeLast
       * @owner Observable
       */


      function takeLast(count) {
        return operators_1.takeLast(count)(this);
      }

      exports.takeLast = takeLast; //# sourceMappingURL=takeLast.js.map

      /***/
    },

    /***/
    "9E4K":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/count.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function E4K(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var count_1 = __webpack_require__(
      /*! ../../operator/count */
      "gzwt");

      rxjs_1.Observable.prototype.count = count_1.count; //# sourceMappingURL=count.js.map

      /***/
    },

    /***/
    "9HtI":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/last.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function HtI(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var last_1 = __webpack_require__(
      /*! ../../operator/last */
      "atJV");

      rxjs_1.Observable.prototype.last = last_1.last; //# sourceMappingURL=last.js.map

      /***/
    },

    /***/
    "9Sef":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/zip.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function Sef(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var zip_1 = __webpack_require__(
      /*! ../../operator/zip */
      "fY5S");

      rxjs_1.Observable.prototype.zip = zip_1.zipProto; //# sourceMappingURL=zip.js.map

      /***/
    },

    /***/
    "9qLK":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/skipWhile.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function qLK(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var skipWhile_1 = __webpack_require__(
      /*! ../../operator/skipWhile */
      "6PMC");

      rxjs_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile; //# sourceMappingURL=skipWhile.js.map

      /***/
    },

    /***/
    "9xAK":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/bufferTime.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function xAK(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var internal_compatibility_1 = __webpack_require__(
      /*! rxjs/internal-compatibility */
      "w0v+");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Buffers the source Observable values for a specific time period.
       *
       * <span class="informal">Collects values from the past as an array, and emits
       * those arrays periodically in time.</span>
       *
       * <img src="./img/bufferTime.png" width="100%">
       *
       * Buffers values from the source for a specific time duration `bufferTimeSpan`.
       * Unless the optional argument `bufferCreationInterval` is given, it emits and
       * resets the buffer every `bufferTimeSpan` milliseconds. If
       * `bufferCreationInterval` is given, this operator opens the buffer every
       * `bufferCreationInterval` milliseconds and closes (emits and resets) the
       * buffer every `bufferTimeSpan` milliseconds. When the optional argument
       * `maxBufferSize` is specified, the buffer will be closed either after
       * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
       *
       * @example <caption>Every second, emit an array of the recent click events</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var buffered = clicks.bufferTime(1000);
       * buffered.subscribe(x => console.log(x));
       *
       * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var buffered = clicks.bufferTime(2000, 5000);
       * buffered.subscribe(x => console.log(x));
       *
       * @see {@link buffer}
       * @see {@link bufferCount}
       * @see {@link bufferToggle}
       * @see {@link bufferWhen}
       * @see {@link windowTime}
       *
       * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
       * @param {number} [bufferCreationInterval] The interval at which to start new
       * buffers.
       * @param {number} [maxBufferSize] The maximum buffer size.
       * @param {Scheduler} [scheduler=asyncScheduler] The scheduler on which to schedule the
       * intervals that determine buffer boundaries.
       * @return {Observable<T[]>} An observable of arrays of buffered values.
       * @method bufferTime
       * @owner Observable
       */


      function bufferTime(bufferTimeSpan) {
        var length = arguments.length;
        var scheduler = rxjs_1.asyncScheduler;

        if (internal_compatibility_1.isScheduler(arguments[arguments.length - 1])) {
          scheduler = arguments[arguments.length - 1];
          length--;
        }

        var bufferCreationInterval = null;

        if (length >= 2) {
          bufferCreationInterval = arguments[1];
        }

        var maxBufferSize = Number.POSITIVE_INFINITY;

        if (length >= 3) {
          maxBufferSize = arguments[2];
        }

        return operators_1.bufferTime(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler)(this);
      }

      exports.bufferTime = bufferTime; //# sourceMappingURL=bufferTime.js.map

      /***/
    },

    /***/
    "A+qg":
    /*!******************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/publishBehavior.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function AQg(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var publishBehavior_1 = __webpack_require__(
      /*! ../../operator/publishBehavior */
      "IMZ1");

      rxjs_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior; //# sourceMappingURL=publishBehavior.js.map

      /***/
    },

    /***/
    "A5T5":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/repeatWhen.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function A5T5(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
       * Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
       * calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
       * this method will resubscribe to the source Observable.
       *
       * <img src="./img/repeatWhen.png" width="100%">
       *
       * @param {function(notifications: Observable): Observable} notifier - Receives an Observable of notifications with
       * which a user can `complete` or `error`, aborting the repetition.
       * @return {Observable} The source Observable modified with repeat logic.
       * @method repeatWhen
       * @owner Observable
       */


      function repeatWhen(notifier) {
        return operators_1.repeatWhen(notifier)(this);
      }

      exports.repeatWhen = repeatWhen; //# sourceMappingURL=repeatWhen.js.map

      /***/
    },

    /***/
    "ADT6":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/filter.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function ADT6(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Filter items emitted by the source Observable by only emitting those that
       * satisfy a specified predicate.
       *
       * <span class="informal">Like
       * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
       * it only emits a value from the source if it passes a criterion function.</span>
       *
       * <img src="./img/filter.png" width="100%">
       *
       * Similar to the well-known `Array.prototype.filter` method, this operator
       * takes values from the source Observable, passes them through a `predicate`
       * function and only emits those values that yielded `true`.
       *
       * @example <caption>Emit only click events whose target was a DIV element</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
       * clicksOnDivs.subscribe(x => console.log(x));
       *
       * @see {@link distinct}
       * @see {@link distinctUntilChanged}
       * @see {@link distinctUntilKeyChanged}
       * @see {@link ignoreElements}
       * @see {@link partition}
       * @see {@link skip}
       *
       * @param {function(value: T, index: number): boolean} predicate A function that
       * evaluates each value emitted by the source Observable. If it returns `true`,
       * the value is emitted, if `false` the value is not passed to the output
       * Observable. The `index` parameter is the number `i` for the i-th source
       * emission that has happened since the subscription, starting from the number
       * `0`.
       * @param {any} [thisArg] An optional argument to determine the value of `this`
       * in the `predicate` function.
       * @return {Observable} An Observable of values from the source that were
       * allowed by the `predicate` function.
       * @method filter
       * @owner Observable
       */


      function filter(predicate, thisArg) {
        return operators_1.filter(predicate, thisArg)(this);
      }

      exports.filter = filter; //# sourceMappingURL=filter.js.map

      /***/
    },

    /***/
    "B9G6":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/groupBy.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function B9G6(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Groups the items emitted by an Observable according to a specified criterion,
       * and emits these grouped items as `GroupedObservables`, one
       * {@link GroupedObservable} per group.
       *
       * <img src="./img/groupBy.png" width="100%">
       *
       * @example <caption>Group objects by id and return as array</caption>
       * Observable.of<Obj>({id: 1, name: 'aze1'},
       *                    {id: 2, name: 'sf2'},
       *                    {id: 2, name: 'dg2'},
       *                    {id: 1, name: 'erg1'},
       *                    {id: 1, name: 'df1'},
       *                    {id: 2, name: 'sfqfb2'},
       *                    {id: 3, name: 'qfs3'},
       *                    {id: 2, name: 'qsgqsfg2'}
       *     )
       *     .groupBy(p => p.id)
       *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], []))
       *     .subscribe(p => console.log(p));
       *
       * // displays:
       * // [ { id: 1, name: 'aze1' },
       * //   { id: 1, name: 'erg1' },
       * //   { id: 1, name: 'df1' } ]
       * //
       * // [ { id: 2, name: 'sf2' },
       * //   { id: 2, name: 'dg2' },
       * //   { id: 2, name: 'sfqfb2' },
       * //   { id: 2, name: 'qsgqsfg2' } ]
       * //
       * // [ { id: 3, name: 'qfs3' } ]
       *
       * @example <caption>Pivot data on the id field</caption>
       * Observable.of<Obj>({id: 1, name: 'aze1'},
       *                    {id: 2, name: 'sf2'},
       *                    {id: 2, name: 'dg2'},
       *                    {id: 1, name: 'erg1'},
       *                    {id: 1, name: 'df1'},
       *                    {id: 2, name: 'sfqfb2'},
       *                    {id: 3, name: 'qfs1'},
       *                    {id: 2, name: 'qsgqsfg2'}
       *                   )
       *     .groupBy(p => p.id, p => p.name)
       *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
       *     .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
       *     .subscribe(p => console.log(p));
       *
       * // displays:
       * // { id: 1, values: [ 'aze1', 'erg1', 'df1' ] }
       * // { id: 2, values: [ 'sf2', 'dg2', 'sfqfb2', 'qsgqsfg2' ] }
       * // { id: 3, values: [ 'qfs1' ] }
       *
       * @param {function(value: T): K} keySelector A function that extracts the key
       * for each item.
       * @param {function(value: T): R} [elementSelector] A function that extracts the
       * return element for each item.
       * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
       * A function that returns an Observable to determine how long each group should
       * exist.
       * @return {Observable<GroupedObservable<K,R>>} An Observable that emits
       * GroupedObservables, each of which corresponds to a unique key value and each
       * of which emits those items from the source Observable that share that key
       * value.
       * @method groupBy
       * @owner Observable
       */


      function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
        return operators_1.groupBy(keySelector, elementSelector, durationSelector, subjectSelector)(this);
      }

      exports.groupBy = groupBy; //# sourceMappingURL=groupBy.js.map

      /***/
    },

    /***/
    "BSEn":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/bufferToggle.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function BSEn(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Buffers the source Observable values starting from an emission from
       * `openings` and ending when the output of `closingSelector` emits.
       *
       * <span class="informal">Collects values from the past as an array. Starts
       * collecting only when `opening` emits, and calls the `closingSelector`
       * function to get an Observable that tells when to close the buffer.</span>
       *
       * <img src="./img/bufferToggle.png" width="100%">
       *
       * Buffers values from the source by opening the buffer via signals from an
       * Observable provided to `openings`, and closing and sending the buffers when
       * a Subscribable or Promise returned by the `closingSelector` function emits.
       *
       * @example <caption>Every other second, emit the click events from the next 500ms</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var openings = Rx.Observable.interval(1000);
       * var buffered = clicks.bufferToggle(openings, i =>
       *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
       * );
       * buffered.subscribe(x => console.log(x));
       *
       * @see {@link buffer}
       * @see {@link bufferCount}
       * @see {@link bufferTime}
       * @see {@link bufferWhen}
       * @see {@link windowToggle}
       *
       * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
       * buffers.
       * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
       * the value emitted by the `openings` observable and returns a Subscribable or Promise,
       * which, when it emits, signals that the associated buffer should be emitted
       * and cleared.
       * @return {Observable<T[]>} An observable of arrays of buffered values.
       * @method bufferToggle
       * @owner Observable
       */


      function bufferToggle(openings, closingSelector) {
        return operators_1.bufferToggle(openings, closingSelector)(this);
      }

      exports.bufferToggle = bufferToggle; //# sourceMappingURL=bufferToggle.js.map

      /***/
    },

    /***/
    "BdNY":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/do.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function BdNY(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var do_1 = __webpack_require__(
      /*! ../../operator/do */
      "4Hgy");

      rxjs_1.Observable.prototype["do"] = do_1._do;
      rxjs_1.Observable.prototype._do = do_1._do; //# sourceMappingURL=do.js.map

      /***/
    },

    /***/
    "BilO":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/of.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function BilO(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.of = rxjs_1.of; //# sourceMappingURL=of.js.map

      /***/
    },

    /***/
    "C/AH":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/repeat.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function CAH(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var repeat_1 = __webpack_require__(
      /*! ../../operator/repeat */
      "Elj+");

      rxjs_1.Observable.prototype.repeat = repeat_1.repeat; //# sourceMappingURL=repeat.js.map

      /***/
    },

    /***/
    "C8tm":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/groupBy.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function C8tm(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var groupBy_1 = __webpack_require__(
      /*! ../../operator/groupBy */
      "B9G6");

      rxjs_1.Observable.prototype.groupBy = groupBy_1.groupBy; //# sourceMappingURL=groupBy.js.map

      /***/
    },

    /***/
    "COpn":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/skipLast.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function COpn(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Skip the last `count` values emitted by the source Observable.
       *
       * <img src="./img/skipLast.png" width="100%">
       *
       * `skipLast` returns an Observable that accumulates a queue with a length
       * enough to store the first `count` values. As more values are received,
       * values are taken from the front of the queue and produced on the result
       * sequence. This causes values to be delayed.
       *
       * @example <caption>Skip the last 2 values of an Observable with many values</caption>
       * var many = Rx.Observable.range(1, 5);
       * var skipLastTwo = many.skipLast(2);
       * skipLastTwo.subscribe(x => console.log(x));
       *
       * // Results in:
       * // 1 2 3
       *
       * @see {@link skip}
       * @see {@link skipUntil}
       * @see {@link skipWhile}
       * @see {@link take}
       *
       * @throws {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
       * ArgumentOutOrRangeError if `i < 0`.
       *
       * @param {number} count Number of elements to skip from the end of the source Observable.
       * @returns {Observable<T>} An Observable that skips the last count values
       * emitted by the source Observable.
       * @method skipLast
       * @owner Observable
       */


      function skipLast(count) {
        return operators_1.skipLast(count)(this);
      }

      exports.skipLast = skipLast; //# sourceMappingURL=skipLast.js.map

      /***/
    },

    /***/
    "CVW7":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/sample.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function CVW7(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Emits the most recently emitted value from the source Observable whenever
       * another Observable, the `notifier`, emits.
       *
       * <span class="informal">It's like {@link sampleTime}, but samples whenever
       * the `notifier` Observable emits something.</span>
       *
       * <img src="./img/sample.png" width="100%">
       *
       * Whenever the `notifier` Observable emits a value or completes, `sample`
       * looks at the source Observable and emits whichever value it has most recently
       * emitted since the previous sampling, unless the source has not emitted
       * anything since the previous sampling. The `notifier` is subscribed to as soon
       * as the output Observable is subscribed.
       *
       * @example <caption>On every click, sample the most recent "seconds" timer</caption>
       * var seconds = Rx.Observable.interval(1000);
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = seconds.sample(clicks);
       * result.subscribe(x => console.log(x));
       *
       * @see {@link audit}
       * @see {@link debounce}
       * @see {@link sampleTime}
       * @see {@link throttle}
       *
       * @param {Observable<any>} notifier The Observable to use for sampling the
       * source Observable.
       * @return {Observable<T>} An Observable that emits the results of sampling the
       * values emitted by the source Observable whenever the notifier Observable
       * emits value or completes.
       * @method sample
       * @owner Observable
       */


      function sample(notifier) {
        return operators_1.sample(notifier)(this);
      }

      exports.sample = sample; //# sourceMappingURL=sample.js.map

      /***/
    },

    /***/
    "CuWV":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/publishLast.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function CuWV(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @return {ConnectableObservable<T>}
       * @method publishLast
       * @owner Observable
       */


      function publishLast() {
        //TODO(benlesh): correct type-flow through here.
        return operators_1.publishLast()(this);
      }

      exports.publishLast = publishLast; //# sourceMappingURL=publishLast.js.map

      /***/
    },

    /***/
    "DNeS":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/expand.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function DNeS(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var expand_1 = __webpack_require__(
      /*! ../../operator/expand */
      "4AtU");

      rxjs_1.Observable.prototype.expand = expand_1.expand; //# sourceMappingURL=expand.js.map

      /***/
    },

    /***/
    "DWF9":
    /*!*****************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/defaultIfEmpty.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function DWF9(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var defaultIfEmpty_1 = __webpack_require__(
      /*! ../../operator/defaultIfEmpty */
      "mfsk");

      rxjs_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty; //# sourceMappingURL=defaultIfEmpty.js.map

      /***/
    },

    /***/
    "DeeD":
    /*!***********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/testing/ColdObservable.js ***!
      \***********************************************************************/

    /*! exports provided: ColdObservable */

    /***/
    function DeeD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColdObservable", function () {
        return ColdObservable;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "HDdC");
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Subscription */
      "quSY");
      /* harmony import */


      var _SubscriptionLoggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./SubscriptionLoggable */
      "keoB");
      /* harmony import */


      var _util_applyMixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../util/applyMixins */
      "Of7M");

      var ColdObservable = /*#__PURE__*/function (_Observable__WEBPACK_) {
        _inherits(ColdObservable, _Observable__WEBPACK_);

        var _super = _createSuper(ColdObservable);

        function ColdObservable(messages, scheduler) {
          var _this;

          _classCallCheck(this, ColdObservable);

          _this = _super.call(this, function (subscriber) {
            var observable = this;
            var index = observable.logSubscribedFrame();
            var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            subscription.add(new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"](function () {
              observable.logUnsubscribedFrame(index);
            }));
            observable.scheduleMessages(subscriber);
            return subscription;
          });
          _this.messages = messages;
          _this.subscriptions = [];
          _this.scheduler = scheduler;
          return _this;
        }

        _createClass(ColdObservable, [{
          key: "scheduleMessages",
          value: function scheduleMessages(subscriber) {
            var messagesLength = this.messages.length;

            for (var i = 0; i < messagesLength; i++) {
              var message = this.messages[i];
              subscriber.add(this.scheduler.schedule(function (_ref) {
                var message = _ref.message,
                    subscriber = _ref.subscriber;
                message.notification.observe(subscriber);
              }, message.frame, {
                message: message,
                subscriber: subscriber
              }));
            }
          }
        }]);

        return ColdObservable;
      }(_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]);

      Object(_util_applyMixins__WEBPACK_IMPORTED_MODULE_3__["applyMixins"])(ColdObservable, [_SubscriptionLoggable__WEBPACK_IMPORTED_MODULE_2__["SubscriptionLoggable"]]); //# sourceMappingURL=ColdObservable.js.map

      /***/
    },

    /***/
    "DpPw":
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/onErrorResumeNext.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function DpPw(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var onErrorResumeNext_1 = __webpack_require__(
      /*! ../../operator/onErrorResumeNext */
      "bcPL");

      rxjs_1.Observable.prototype.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext; //# sourceMappingURL=onErrorResumeNext.js.map

      /***/
    },

    /***/
    "E2OZ":
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/combineLatest.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function E2OZ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var combineLatest_1 = __webpack_require__(
      /*! ../../operator/combineLatest */
      "VmLd");

      rxjs_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest; //# sourceMappingURL=combineLatest.js.map

      /***/
    },

    /***/
    "EUoG":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/single.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function EUoG(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var single_1 = __webpack_require__(
      /*! ../../operator/single */
      "v87U");

      rxjs_1.Observable.prototype.single = single_1.single; //# sourceMappingURL=single.js.map

      /***/
    },

    /***/
    "Elj+":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/repeat.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function Elj(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times.
       *
       * <img src="./img/repeat.png" width="100%">
       *
       * @param {number} [count] The number of times the source Observable items are repeated, a count of 0 will yield
       * an empty Observable.
       * @return {Observable} An Observable that repeats the stream of items emitted by the source Observable at most
       * count times.
       * @method repeat
       * @owner Observable
       */


      function repeat(count) {
        if (count === void 0) {
          count = -1;
        }

        return operators_1.repeat(count)(this);
      }

      exports.repeat = repeat; //# sourceMappingURL=repeat.js.map

      /***/
    },

    /***/
    "FDEy":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/dematerialize.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function FDEy(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Converts an Observable of {@link Notification} objects into the emissions
       * that they represent.
       *
       * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
       * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
       *
       * <img src="./img/dematerialize.png" width="100%">
       *
       * `dematerialize` is assumed to operate an Observable that only emits
       * {@link Notification} objects as `next` emissions, and does not emit any
       * `error`. Such Observable is the output of a `materialize` operation. Those
       * notifications are then unwrapped using the metadata they contain, and emitted
       * as `next`, `error`, and `complete` on the output Observable.
       *
       * Use this operator in conjunction with {@link materialize}.
       *
       * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
       * var notifA = new Rx.Notification('N', 'A');
       * var notifB = new Rx.Notification('N', 'B');
       * var notifE = new Rx.Notification('E', void 0,
       *   new TypeError('x.toUpperCase is not a function')
       * );
       * var materialized = Rx.Observable.of(notifA, notifB, notifE);
       * var upperCase = materialized.dematerialize();
       * upperCase.subscribe(x => console.log(x), e => console.error(e));
       *
       * // Results in:
       * // A
       * // B
       * // TypeError: x.toUpperCase is not a function
       *
       * @see {@link Notification}
       * @see {@link materialize}
       *
       * @return {Observable} An Observable that emits items and notifications
       * embedded in Notification objects emitted by the source Observable.
       * @method dematerialize
       * @owner Observable
       */


      function dematerialize() {
        return operators_1.dematerialize()(this);
      }

      exports.dematerialize = dematerialize; //# sourceMappingURL=dematerialize.js.map

      /***/
    },

    /***/
    "FJZY":
    /*!******************************************************!*\
      !*** ./src/app/features/lac/facades/layer-facade.ts ***!
      \******************************************************/

    /*! exports provided: LayerFacade */

    /***/
    function FJZY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayerFacade", function () {
        return LayerFacade;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LayerFacade = /*#__PURE__*/function () {
        function LayerFacade() {
          _classCallCheck(this, LayerFacade);
        }

        _createClass(LayerFacade, [{
          key: "LayerMethodOne",
          value: function LayerMethodOne() {
            console.log("Lyr meth one called");
          }
        }, {
          key: "findFirst",
          value: function findFirst(marks) {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "average",
          value: function average(a, b, c) {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "sum",
          value: function sum(a, b) {
            return a + b + 5;
          }
        }]);

        return LayerFacade;
      }();

      LayerFacade.ɵfac = function LayerFacade_Factory(t) {
        return new (t || LayerFacade)();
      };

      LayerFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LayerFacade,
        factory: LayerFacade.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "FU7m":
    /*!****************************************!*\
      !*** ./node_modules/rxjs-compat/Rx.js ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function FU7m(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /* tslint:disable:no-unused-variable */
      // Subject imported before Observable to bypass circular dependency issue since
      // Subject extends Observable and Observable references Subject in it's
      // definition

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      exports.Observable = rxjs_1.Observable;
      exports.Subject = rxjs_1.Subject;

      var internal_compatibility_1 = __webpack_require__(
      /*! rxjs/internal-compatibility */
      "w0v+");

      exports.AnonymousSubject = internal_compatibility_1.AnonymousSubject;
      /* tslint:enable:no-unused-variable */

      var internal_compatibility_2 = __webpack_require__(
      /*! rxjs/internal-compatibility */
      "w0v+");

      exports.config = internal_compatibility_2.config; // statics

      /* tslint:disable:no-use-before-declare */

      __webpack_require__(
      /*! ./add/observable/bindCallback */
      "1JPw");

      __webpack_require__(
      /*! ./add/observable/bindNodeCallback */
      "PpQq");

      __webpack_require__(
      /*! ./add/observable/combineLatest */
      "sNY3");

      __webpack_require__(
      /*! ./add/observable/concat */
      "+v8i");

      __webpack_require__(
      /*! ./add/observable/defer */
      "lK5c");

      __webpack_require__(
      /*! ./add/observable/empty */
      "XPuz");

      __webpack_require__(
      /*! ./add/observable/forkJoin */
      "O5hQ");

      __webpack_require__(
      /*! ./add/observable/from */
      "fnh7");

      __webpack_require__(
      /*! ./add/observable/fromEvent */
      "Xj2z");

      __webpack_require__(
      /*! ./add/observable/fromEventPattern */
      "11EI");

      __webpack_require__(
      /*! ./add/observable/fromPromise */
      "3Qpg");

      __webpack_require__(
      /*! ./add/observable/generate */
      "G4Hi");

      __webpack_require__(
      /*! ./add/observable/if */
      "uGYe");

      __webpack_require__(
      /*! ./add/observable/interval */
      "RhlD");

      __webpack_require__(
      /*! ./add/observable/merge */
      "mx47");

      __webpack_require__(
      /*! ./add/observable/race */
      "4w9M");

      __webpack_require__(
      /*! ./add/observable/never */
      "8Ip+");

      __webpack_require__(
      /*! ./add/observable/of */
      "BilO");

      __webpack_require__(
      /*! ./add/observable/onErrorResumeNext */
      "t0XI");

      __webpack_require__(
      /*! ./add/observable/pairs */
      "HAEL");

      __webpack_require__(
      /*! ./add/observable/range */
      "ojb+");

      __webpack_require__(
      /*! ./add/observable/using */
      "czqU");

      __webpack_require__(
      /*! ./add/observable/throw */
      "QXri");

      __webpack_require__(
      /*! ./add/observable/timer */
      "cD4w");

      __webpack_require__(
      /*! ./add/observable/zip */
      "m1gp"); //dom


      __webpack_require__(
      /*! ./add/observable/dom/ajax */
      "bi34");

      __webpack_require__(
      /*! ./add/observable/dom/webSocket */
      "uO2z"); //internal/operators


      __webpack_require__(
      /*! ./add/operator/buffer */
      "3EiV");

      __webpack_require__(
      /*! ./add/operator/bufferCount */
      "vQc4");

      __webpack_require__(
      /*! ./add/operator/bufferTime */
      "hf5g");

      __webpack_require__(
      /*! ./add/operator/bufferToggle */
      "Zw/6");

      __webpack_require__(
      /*! ./add/operator/bufferWhen */
      "YA+d");

      __webpack_require__(
      /*! ./add/operator/catch */
      "1M8x");

      __webpack_require__(
      /*! ./add/operator/combineAll */
      "LxJG");

      __webpack_require__(
      /*! ./add/operator/combineLatest */
      "E2OZ");

      __webpack_require__(
      /*! ./add/operator/concat */
      "KC9P");

      __webpack_require__(
      /*! ./add/operator/concatAll */
      "Qw2J");

      __webpack_require__(
      /*! ./add/operator/concatMap */
      "37L2");

      __webpack_require__(
      /*! ./add/operator/concatMapTo */
      "RT2N");

      __webpack_require__(
      /*! ./add/operator/count */
      "9E4K");

      __webpack_require__(
      /*! ./add/operator/dematerialize */
      "KGUQ");

      __webpack_require__(
      /*! ./add/operator/debounce */
      "LOqM");

      __webpack_require__(
      /*! ./add/operator/debounceTime */
      "QtPd");

      __webpack_require__(
      /*! ./add/operator/defaultIfEmpty */
      "DWF9");

      __webpack_require__(
      /*! ./add/operator/delay */
      "n2g9");

      __webpack_require__(
      /*! ./add/operator/delayWhen */
      "wfyD");

      __webpack_require__(
      /*! ./add/operator/distinct */
      "FZ9u");

      __webpack_require__(
      /*! ./add/operator/distinctUntilChanged */
      "+qxJ");

      __webpack_require__(
      /*! ./add/operator/distinctUntilKeyChanged */
      "TwXD");

      __webpack_require__(
      /*! ./add/operator/do */
      "BdNY");

      __webpack_require__(
      /*! ./add/operator/exhaust */
      "jIeU");

      __webpack_require__(
      /*! ./add/operator/exhaustMap */
      "70oK");

      __webpack_require__(
      /*! ./add/operator/expand */
      "DNeS");

      __webpack_require__(
      /*! ./add/operator/elementAt */
      "q8yx");

      __webpack_require__(
      /*! ./add/operator/filter */
      "hswa");

      __webpack_require__(
      /*! ./add/operator/finally */
      "Xs6s");

      __webpack_require__(
      /*! ./add/operator/find */
      "7MrP");

      __webpack_require__(
      /*! ./add/operator/findIndex */
      "sjkp");

      __webpack_require__(
      /*! ./add/operator/first */
      "YwoP");

      __webpack_require__(
      /*! ./add/operator/groupBy */
      "C8tm");

      __webpack_require__(
      /*! ./add/operator/ignoreElements */
      "wWu8");

      __webpack_require__(
      /*! ./add/operator/isEmpty */
      "RFdt");

      __webpack_require__(
      /*! ./add/operator/audit */
      "dlYL");

      __webpack_require__(
      /*! ./add/operator/auditTime */
      "ksOG");

      __webpack_require__(
      /*! ./add/operator/last */
      "9HtI");

      __webpack_require__(
      /*! ./add/operator/let */
      "+4/i");

      __webpack_require__(
      /*! ./add/operator/every */
      "Kvnp");

      __webpack_require__(
      /*! ./add/operator/map */
      "89kA");

      __webpack_require__(
      /*! ./add/operator/mapTo */
      "8YE1");

      __webpack_require__(
      /*! ./add/operator/materialize */
      "Qbza");

      __webpack_require__(
      /*! ./add/operator/max */
      "KVj6");

      __webpack_require__(
      /*! ./add/operator/merge */
      "cPnI");

      __webpack_require__(
      /*! ./add/operator/mergeAll */
      "P+DX");

      __webpack_require__(
      /*! ./add/operator/mergeMap */
      "wGW3");

      __webpack_require__(
      /*! ./add/operator/mergeMapTo */
      "sRqT");

      __webpack_require__(
      /*! ./add/operator/mergeScan */
      "eyjB");

      __webpack_require__(
      /*! ./add/operator/min */
      "g0lY");

      __webpack_require__(
      /*! ./add/operator/multicast */
      "7RDD");

      __webpack_require__(
      /*! ./add/operator/observeOn */
      "+oeQ");

      __webpack_require__(
      /*! ./add/operator/onErrorResumeNext */
      "DpPw");

      __webpack_require__(
      /*! ./add/operator/pairwise */
      "7+k4");

      __webpack_require__(
      /*! ./add/operator/partition */
      "Nh3w");

      __webpack_require__(
      /*! ./add/operator/pluck */
      "jdlx");

      __webpack_require__(
      /*! ./add/operator/publish */
      "aMoL");

      __webpack_require__(
      /*! ./add/operator/publishBehavior */
      "A+qg");

      __webpack_require__(
      /*! ./add/operator/publishReplay */
      "PZgn");

      __webpack_require__(
      /*! ./add/operator/publishLast */
      "l3KV");

      __webpack_require__(
      /*! ./add/operator/race */
      "bUWp");

      __webpack_require__(
      /*! ./add/operator/reduce */
      "ob0Y");

      __webpack_require__(
      /*! ./add/operator/repeat */
      "C/AH");

      __webpack_require__(
      /*! ./add/operator/repeatWhen */
      "W/jz");

      __webpack_require__(
      /*! ./add/operator/retry */
      "+psR");

      __webpack_require__(
      /*! ./add/operator/retryWhen */
      "eYtX");

      __webpack_require__(
      /*! ./add/operator/sample */
      "LUEE");

      __webpack_require__(
      /*! ./add/operator/sampleTime */
      "G12B");

      __webpack_require__(
      /*! ./add/operator/scan */
      "QJJP");

      __webpack_require__(
      /*! ./add/operator/sequenceEqual */
      "G21R");

      __webpack_require__(
      /*! ./add/operator/share */
      "VSOP");

      __webpack_require__(
      /*! ./add/operator/shareReplay */
      "2+DN");

      __webpack_require__(
      /*! ./add/operator/single */
      "EUoG");

      __webpack_require__(
      /*! ./add/operator/skip */
      "pe+M");

      __webpack_require__(
      /*! ./add/operator/skipLast */
      "LSkT");

      __webpack_require__(
      /*! ./add/operator/skipUntil */
      "5hZ8");

      __webpack_require__(
      /*! ./add/operator/skipWhile */
      "9qLK");

      __webpack_require__(
      /*! ./add/operator/startWith */
      "gSmF");

      __webpack_require__(
      /*! ./add/operator/subscribeOn */
      "rSqW");

      __webpack_require__(
      /*! ./add/operator/switch */
      "okVX");

      __webpack_require__(
      /*! ./add/operator/switchMap */
      "4Wg5");

      __webpack_require__(
      /*! ./add/operator/switchMapTo */
      "W5YF");

      __webpack_require__(
      /*! ./add/operator/take */
      "oKp4");

      __webpack_require__(
      /*! ./add/operator/takeLast */
      "0ZAG");

      __webpack_require__(
      /*! ./add/operator/takeUntil */
      "omlZ");

      __webpack_require__(
      /*! ./add/operator/takeWhile */
      "I6kD");

      __webpack_require__(
      /*! ./add/operator/throttle */
      "JpQp");

      __webpack_require__(
      /*! ./add/operator/throttleTime */
      "8Yhr");

      __webpack_require__(
      /*! ./add/operator/timeInterval */
      "VlMj");

      __webpack_require__(
      /*! ./add/operator/timeout */
      "fElF");

      __webpack_require__(
      /*! ./add/operator/timeoutWith */
      "rqY6");

      __webpack_require__(
      /*! ./add/operator/timestamp */
      "00Es");

      __webpack_require__(
      /*! ./add/operator/toArray */
      "TMm9");

      __webpack_require__(
      /*! ./add/operator/toPromise */
      "XC4j");

      __webpack_require__(
      /*! ./add/operator/window */
      "ND/j");

      __webpack_require__(
      /*! ./add/operator/windowCount */
      "7N5M");

      __webpack_require__(
      /*! ./add/operator/windowTime */
      "2IC2");

      __webpack_require__(
      /*! ./add/operator/windowToggle */
      "bHhB");

      __webpack_require__(
      /*! ./add/operator/windowWhen */
      "6IDA");

      __webpack_require__(
      /*! ./add/operator/withLatestFrom */
      "cf52");

      __webpack_require__(
      /*! ./add/operator/zip */
      "9Sef");

      __webpack_require__(
      /*! ./add/operator/zipAll */
      "ofYe");
      /* tslint:disable:no-unused-variable */


      var rxjs_2 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      exports.Subscription = rxjs_2.Subscription;
      exports.ReplaySubject = rxjs_2.ReplaySubject;
      exports.BehaviorSubject = rxjs_2.BehaviorSubject;
      exports.Notification = rxjs_2.Notification;
      exports.EmptyError = rxjs_2.EmptyError;
      exports.ArgumentOutOfRangeError = rxjs_2.ArgumentOutOfRangeError;
      exports.ObjectUnsubscribedError = rxjs_2.ObjectUnsubscribedError;
      exports.UnsubscriptionError = rxjs_2.UnsubscriptionError;
      exports.pipe = rxjs_2.pipe;

      var testing_1 = __webpack_require__(
      /*! rxjs/testing */
      "lYZj");

      exports.TestScheduler = testing_1.TestScheduler;

      var rxjs_3 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      exports.Subscriber = rxjs_3.Subscriber;
      exports.AsyncSubject = rxjs_3.AsyncSubject;
      exports.ConnectableObservable = rxjs_3.ConnectableObservable;
      exports.TimeoutError = rxjs_3.TimeoutError;
      exports.VirtualTimeScheduler = rxjs_3.VirtualTimeScheduler;

      var ajax_1 = __webpack_require__(
      /*! rxjs/ajax */
      "laIk");

      exports.AjaxResponse = ajax_1.AjaxResponse;
      exports.AjaxError = ajax_1.AjaxError;
      exports.AjaxTimeoutError = ajax_1.AjaxTimeoutError;

      var rxjs_4 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var internal_compatibility_3 = __webpack_require__(
      /*! rxjs/internal-compatibility */
      "w0v+");

      var internal_compatibility_4 = __webpack_require__(
      /*! rxjs/internal-compatibility */
      "w0v+");

      exports.TimeInterval = internal_compatibility_4.TimeInterval;
      exports.Timestamp = internal_compatibility_4.Timestamp;

      var _operators = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      exports.operators = _operators;
      /* tslint:enable:no-unused-variable */

      /**
       * @typedef {Object} Rx.Scheduler
       * @property {Scheduler} queue Schedules on a queue in the current event frame
       * (trampoline scheduler). Use this for iteration operations.
       * @property {Scheduler} asap Schedules on the micro task queue, which is the same
       * queue used for promises. Basically after the current job, but before the next
       * job. Use this for asynchronous conversions.
       * @property {Scheduler} async Schedules work with `setInterval`. Use this for
       * time-based operations.
       * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
       * Use this for synchronizing with the platform's painting
       */

      var Scheduler = {
        asap: rxjs_4.asapScheduler,
        queue: rxjs_4.queueScheduler,
        animationFrame: rxjs_4.animationFrameScheduler,
        async: rxjs_4.asyncScheduler
      };
      exports.Scheduler = Scheduler;
      /**
       * @typedef {Object} Rx.Symbol
       * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
       * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
       * an object that has all of the traits of an Rx Subscriber, including the
       * ability to add and remove subscriptions to the subscription chain and
       * guarantees involving event triggering (can't "next" after unsubscription,
       * etc).
       * @property {Symbol|string} observable A symbol to use as a property name to
       * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
       * @property {Symbol|string} iterator The ES6 symbol to use as a property name
       * to retrieve an iterator from an object.
       */

      var Symbol = {
        rxSubscriber: internal_compatibility_3.rxSubscriber,
        observable: internal_compatibility_3.observable,
        iterator: internal_compatibility_3.iterator
      };
      exports.Symbol = Symbol; //# sourceMappingURL=Rx.js.map

      /***/
    },

    /***/
    "FZ9u":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/distinct.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function FZ9u(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var distinct_1 = __webpack_require__(
      /*! ../../operator/distinct */
      "vTln");

      rxjs_1.Observable.prototype.distinct = distinct_1.distinct; //# sourceMappingURL=distinct.js.map

      /***/
    },

    /***/
    "G12B":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/sampleTime.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function G12B(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var sampleTime_1 = __webpack_require__(
      /*! ../../operator/sampleTime */
      "P71F");

      rxjs_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime; //# sourceMappingURL=sampleTime.js.map

      /***/
    },

    /***/
    "G21R":
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/sequenceEqual.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function G21R(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var sequenceEqual_1 = __webpack_require__(
      /*! ../../operator/sequenceEqual */
      "UE8N");

      rxjs_1.Observable.prototype.sequenceEqual = sequenceEqual_1.sequenceEqual; //# sourceMappingURL=sequenceEqual.js.map

      /***/
    },

    /***/
    "G4Hi":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/generate.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function G4Hi(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.generate = rxjs_1.generate; //# sourceMappingURL=generate.js.map

      /***/
    },

    /***/
    "GsYY":
    /*!*******************************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/distinctUntilChanged.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function GsYY(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
       *
       * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
       *
       * If a comparator function is not provided, an equality check is used by default.
       *
       * @example <caption>A simple example with numbers</caption>
       * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
       *   .distinctUntilChanged()
       *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
       *
       * @example <caption>An example using a compare function</caption>
       * interface Person {
       *    age: number,
       *    name: string
       * }
       *
       * Observable.of<Person>(
       *     { age: 4, name: 'Foo'},
       *     { age: 7, name: 'Bar'},
       *     { age: 5, name: 'Foo'},
       *     { age: 6, name: 'Foo'})
       *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
       *     .subscribe(x => console.log(x));
       *
       * // displays:
       * // { age: 4, name: 'Foo' }
       * // { age: 7, name: 'Bar' }
       * // { age: 5, name: 'Foo' }
       *
       * @see {@link distinct}
       * @see {@link distinctUntilKeyChanged}
       *
       * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
       * @return {Observable} An Observable that emits items from the source Observable with distinct values.
       * @method distinctUntilChanged
       * @owner Observable
       */


      function distinctUntilChanged(compare, keySelector) {
        return operators_1.distinctUntilChanged(compare, keySelector)(this);
      }

      exports.distinctUntilChanged = distinctUntilChanged; //# sourceMappingURL=distinctUntilChanged.js.map

      /***/
    },

    /***/
    "H+DX":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/observeOn.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function HDX(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       *
       * Re-emits all notifications from source Observable with specified scheduler.
       *
       * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
       *
       * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
       * notifications emitted by the source Observable. It might be useful, if you do not have control over
       * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
       *
       * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
       * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
       * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
       * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
       * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
       * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
       * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
       * little bit more, to ensure that they are emitted at expected moments.
       *
       * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
       * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
       * will delay all notifications - including error notifications - while `delay` will pass through error
       * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
       * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
       * for notification emissions in general.
       *
       * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
       * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
       *                                               // with async scheduler by default...
       *
       * intervals
       * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
       * .subscribe(val => {                           // scheduler to ensure smooth animation.
       *   someDiv.style.height = val + 'px';
       * });
       *
       * @see {@link delay}
       *
       * @param {SchedulerLike} scheduler Scheduler that will be used to reschedule notifications from source Observable.
       * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
       * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
       * but with provided scheduler.
       *
       * @method observeOn
       * @owner Observable
       */


      function observeOn(scheduler, delay) {
        if (delay === void 0) {
          delay = 0;
        }

        return operators_1.observeOn(scheduler, delay)(this);
      }

      exports.observeOn = observeOn; //# sourceMappingURL=observeOn.js.map

      /***/
    },

    /***/
    "HAEL":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/pairs.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function HAEL(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.pairs = rxjs_1.pairs; //# sourceMappingURL=pairs.js.map

      /***/
    },

    /***/
    "I6kD":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/takeWhile.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function I6kD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var takeWhile_1 = __webpack_require__(
      /*! ../../operator/takeWhile */
      "QTCG");

      rxjs_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile; //# sourceMappingURL=takeWhile.js.map

      /***/
    },

    /***/
    "IMZ1":
    /*!**************************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/publishBehavior.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function IMZ1(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @param value
       * @return {ConnectableObservable<T>}
       * @method publishBehavior
       * @owner Observable
       */


      function publishBehavior(value) {
        return operators_1.publishBehavior(value)(this);
      }

      exports.publishBehavior = publishBehavior; //# sourceMappingURL=publishBehavior.js.map

      /***/
    },

    /***/
    "IUuq":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/combineAll.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function IUuq(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Converts a higher-order Observable into a first-order Observable by waiting
       * for the outer Observable to complete, then applying {@link combineLatest}.
       *
       * <span class="informal">Flattens an Observable-of-Observables by applying
       * {@link combineLatest} when the Observable-of-Observables completes.</span>
       *
       * <img src="./img/combineAll.png" width="100%">
       *
       * Takes an Observable of Observables, and collects all Observables from it.
       * Once the outer Observable completes, it subscribes to all collected
       * Observables and combines their values using the {@link combineLatest}
       * strategy, such that:
       * - Every time an inner Observable emits, the output Observable emits.
       * - When the returned observable emits, it emits all of the latest values by:
       *   - If a `project` function is provided, it is called with each recent value
       *     from each inner Observable in whatever order they arrived, and the result
       *     of the `project` function is what is emitted by the output Observable.
       *   - If there is no `project` function, an array of all of the most recent
       *     values is emitted by the output Observable.
       *
       * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var higherOrder = clicks.map(ev =>
       *   Rx.Observable.interval(Math.random()*2000).take(3)
       * ).take(2);
       * var result = higherOrder.combineAll();
       * result.subscribe(x => console.log(x));
       *
       * @see {@link combineLatest}
       * @see {@link mergeAll}
       *
       * @param {function} [project] An optional function to map the most recent
       * values from each inner Observable into a new result. Takes each of the most
       * recent values from each collected inner Observable as arguments, in order.
       * @return {Observable} An Observable of projected results or arrays of recent
       * values.
       * @method combineAll
       * @owner Observable
       */


      function combineAll(project) {
        return operators_1.combineAll(project)(this);
      }

      exports.combineAll = combineAll; //# sourceMappingURL=combineAll.js.map

      /***/
    },

    /***/
    "JM0U":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/auditTime.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function JM0U(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Ignores source values for `duration` milliseconds, then emits the most recent
       * value from the source Observable, then repeats this process.
       *
       * <span class="informal">When it sees a source values, it ignores that plus
       * the next ones for `duration` milliseconds, and then it emits the most recent
       * value from the source.</span>
       *
       * <img src="./img/auditTime.png" width="100%">
       *
       * `auditTime` is similar to `throttleTime`, but emits the last value from the
       * silenced time window, instead of the first value. `auditTime` emits the most
       * recent value from the source Observable on the output Observable as soon as
       * its internal timer becomes disabled, and ignores source values while the
       * timer is enabled. Initially, the timer is disabled. As soon as the first
       * source value arrives, the timer is enabled. After `duration` milliseconds (or
       * the time unit determined internally by the optional `scheduler`) has passed,
       * the timer is disabled, then the most recent source value is emitted on the
       * output Observable, and this process repeats for the next source value.
       * Optionally takes a {@link IScheduler} for managing timers.
       *
       * @example <caption>Emit clicks at a rate of at most one click per second</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.auditTime(1000);
       * result.subscribe(x => console.log(x));
       *
       * @see {@link audit}
       * @see {@link debounceTime}
       * @see {@link delay}
       * @see {@link sampleTime}
       * @see {@link throttleTime}
       *
       * @param {number} duration Time to wait before emitting the most recent source
       * value, measured in milliseconds or the time unit determined internally
       * by the optional `scheduler`.
       * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
       * managing the timers that handle the rate-limiting behavior.
       * @return {Observable<T>} An Observable that performs rate-limiting of
       * emissions from the source Observable.
       * @method auditTime
       * @owner Observable
       */


      function auditTime(duration, scheduler) {
        if (scheduler === void 0) {
          scheduler = rxjs_1.asyncScheduler;
        }

        return operators_1.auditTime(duration, scheduler)(this);
      }

      exports.auditTime = auditTime; //# sourceMappingURL=auditTime.js.map

      /***/
    },

    /***/
    "JpQp":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/throttle.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function JpQp(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var throttle_1 = __webpack_require__(
      /*! ../../operator/throttle */
      "LSSe");

      rxjs_1.Observable.prototype.throttle = throttle_1.throttle; //# sourceMappingURL=throttle.js.map

      /***/
    },

    /***/
    "KC9P":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/concat.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function KC9P(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var concat_1 = __webpack_require__(
      /*! ../../operator/concat */
      "ovWV");

      rxjs_1.Observable.prototype.concat = concat_1.concat; //# sourceMappingURL=concat.js.map

      /***/
    },

    /***/
    "KFR4":
    /*!**********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/testing/HotObservable.js ***!
      \**********************************************************************/

    /*! exports provided: HotObservable */

    /***/
    function KFR4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HotObservable", function () {
        return HotObservable;
      });
      /* harmony import */


      var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subject */
      "XNiG");
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Subscription */
      "quSY");
      /* harmony import */


      var _SubscriptionLoggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./SubscriptionLoggable */
      "keoB");
      /* harmony import */


      var _util_applyMixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../util/applyMixins */
      "Of7M");

      var HotObservable = /*#__PURE__*/function (_Subject__WEBPACK_IMP) {
        _inherits(HotObservable, _Subject__WEBPACK_IMP);

        var _super2 = _createSuper(HotObservable);

        function HotObservable(messages, scheduler) {
          var _this2;

          _classCallCheck(this, HotObservable);

          _this2 = _super2.call(this);
          _this2.messages = messages;
          _this2.subscriptions = [];
          _this2.scheduler = scheduler;
          return _this2;
        }

        _createClass(HotObservable, [{
          key: "_subscribe",
          value: function _subscribe(subscriber) {
            var subject = this;
            var index = subject.logSubscribedFrame();
            var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            subscription.add(new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"](function () {
              subject.logUnsubscribedFrame(index);
            }));
            subscription.add(_get(_getPrototypeOf(HotObservable.prototype), "_subscribe", this).call(this, subscriber));
            return subscription;
          }
        }, {
          key: "setup",
          value: function setup() {
            var subject = this;
            var messagesLength = subject.messages.length;

            for (var i = 0; i < messagesLength; i++) {
              (function () {
                var message = subject.messages[i];
                subject.scheduler.schedule(function () {
                  message.notification.observe(subject);
                }, message.frame);
              })();
            }
          }
        }]);

        return HotObservable;
      }(_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]);

      Object(_util_applyMixins__WEBPACK_IMPORTED_MODULE_3__["applyMixins"])(HotObservable, [_SubscriptionLoggable__WEBPACK_IMPORTED_MODULE_2__["SubscriptionLoggable"]]); //# sourceMappingURL=HotObservable.js.map

      /***/
    },

    /***/
    "KGUQ":
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/dematerialize.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function KGUQ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var dematerialize_1 = __webpack_require__(
      /*! ../../operator/dematerialize */
      "FDEy");

      rxjs_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize; //# sourceMappingURL=dematerialize.js.map

      /***/
    },

    /***/
    "KVj6":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/max.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function KVj6(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var max_1 = __webpack_require__(
      /*! ../../operator/max */
      "7065");

      rxjs_1.Observable.prototype.max = max_1.max; //# sourceMappingURL=max.js.map

      /***/
    },

    /***/
    "Kvnp":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/every.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function Kvnp(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var every_1 = __webpack_require__(
      /*! ../../operator/every */
      "cLIC");

      rxjs_1.Observable.prototype.every = every_1.every; //# sourceMappingURL=every.js.map

      /***/
    },

    /***/
    "KxFi":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/mergeAll.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function KxFi(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Converts a higher-order Observable into a first-order Observable which
       * concurrently delivers all values that are emitted on the inner Observables.
       *
       * <span class="informal">Flattens an Observable-of-Observables.</span>
       *
       * <img src="./img/mergeAll.png" width="100%">
       *
       * `mergeAll` subscribes to an Observable that emits Observables, also known as
       * a higher-order Observable. Each time it observes one of these emitted inner
       * Observables, it subscribes to that and delivers all the values from the
       * inner Observable on the output Observable. The output Observable only
       * completes once all inner Observables have completed. Any error delivered by
       * a inner Observable will be immediately emitted on the output Observable.
       *
       * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
       * var firstOrder = higherOrder.mergeAll();
       * firstOrder.subscribe(x => console.log(x));
       *
       * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
       * var firstOrder = higherOrder.mergeAll(2);
       * firstOrder.subscribe(x => console.log(x));
       *
       * @see {@link combineAll}
       * @see {@link concatAll}
       * @see {@link exhaust}
       * @see {@link merge}
       * @see {@link mergeMap}
       * @see {@link mergeMapTo}
       * @see {@link mergeScan}
       * @see {@link switch}
       * @see {@link zipAll}
       *
       * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
       * Observables being subscribed to concurrently.
       * @return {Observable} An Observable that emits values coming from all the
       * inner Observables emitted by the source Observable.
       * @method mergeAll
       * @owner Observable
       */


      function mergeAll(concurrent) {
        if (concurrent === void 0) {
          concurrent = Number.POSITIVE_INFINITY;
        }

        return operators_1.mergeAll(concurrent)(this);
      }

      exports.mergeAll = mergeAll; //# sourceMappingURL=mergeAll.js.map

      /***/
    },

    /***/
    "LM6Q":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/startWith.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function LM6Q(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Returns an Observable that emits the items you specify as arguments before it begins to emit
       * items emitted by the source Observable.
       *
       * <img src="./img/startWith.png" width="100%">
       *
       * @param {...T} values - Items you want the modified Observable to emit first.
       * @param {Scheduler} [scheduler] - A {@link IScheduler} to use for scheduling
       * the emissions of the `next` notifications.
       * @return {Observable} An Observable that emits the items in the specified Iterable and then emits the items
       * emitted by the source Observable.
       * @method startWith
       * @owner Observable
       */


      function startWith() {
        var array = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          array[_i] = arguments[_i];
        }

        return operators_1.startWith.apply(void 0, array)(this);
      }

      exports.startWith = startWith; //# sourceMappingURL=startWith.js.map

      /***/
    },

    /***/
    "LOqM":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/debounce.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function LOqM(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var debounce_1 = __webpack_require__(
      /*! ../../operator/debounce */
      "uARb");

      rxjs_1.Observable.prototype.debounce = debounce_1.debounce; //# sourceMappingURL=debounce.js.map

      /***/
    },

    /***/
    "LOr+":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/debounceTime.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function LOr(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Emits a value from the source Observable only after a particular time span
       * has passed without another source emission.
       *
       * <span class="informal">It's like {@link delay}, but passes only the most
       * recent value from each burst of emissions.</span>
       *
       * <img src="./img/debounceTime.png" width="100%">
       *
       * `debounceTime` delays values emitted by the source Observable, but drops
       * previous pending delayed emissions if a new value arrives on the source
       * Observable. This operator keeps track of the most recent value from the
       * source Observable, and emits that only when `dueTime` enough time has passed
       * without any other value appearing on the source Observable. If a new value
       * appears before `dueTime` silence occurs, the previous value will be dropped
       * and will not be emitted on the output Observable.
       *
       * This is a rate-limiting operator, because it is impossible for more than one
       * value to be emitted in any time window of duration `dueTime`, but it is also
       * a delay-like operator since output emissions do not occur at the same time as
       * they did on the source Observable. Optionally takes a {@link IScheduler} for
       * managing timers.
       *
       * @example <caption>Emit the most recent click after a burst of clicks</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.debounceTime(1000);
       * result.subscribe(x => console.log(x));
       *
       * @see {@link auditTime}
       * @see {@link debounce}
       * @see {@link delay}
       * @see {@link sampleTime}
       * @see {@link throttleTime}
       *
       * @param {number} dueTime The timeout duration in milliseconds (or the time
       * unit determined internally by the optional `scheduler`) for the window of
       * time required to wait for emission silence before emitting the most recent
       * source value.
       * @param {Scheduler} [scheduler=asyncScheduler] The {@link SchedulerLike} to use for
       * managing the timers that handle the timeout for each value.
       * @return {Observable} An Observable that delays the emissions of the source
       * Observable by the specified `dueTime`, and may drop some values if they occur
       * too frequently.
       * @method debounceTime
       * @owner Observable
       */


      function debounceTime(dueTime, scheduler) {
        if (scheduler === void 0) {
          scheduler = rxjs_1.asyncScheduler;
        }

        return operators_1.debounceTime(dueTime, scheduler)(this);
      }

      exports.debounceTime = debounceTime; //# sourceMappingURL=debounceTime.js.map

      /***/
    },

    /***/
    "LSSe":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/throttle.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function LSSe(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var internal_compatibility_1 = __webpack_require__(
      /*! rxjs/internal-compatibility */
      "w0v+");
      /**
       * Emits a value from the source Observable, then ignores subsequent source
       * values for a duration determined by another Observable, then repeats this
       * process.
       *
       * <span class="informal">It's like {@link throttleTime}, but the silencing
       * duration is determined by a second Observable.</span>
       *
       * <img src="./img/throttle.png" width="100%">
       *
       * `throttle` emits the source Observable values on the output Observable
       * when its internal timer is disabled, and ignores source values when the timer
       * is enabled. Initially, the timer is disabled. As soon as the first source
       * value arrives, it is forwarded to the output Observable, and then the timer
       * is enabled by calling the `durationSelector` function with the source value,
       * which returns the "duration" Observable. When the duration Observable emits a
       * value or completes, the timer is disabled, and this process repeats for the
       * next source value.
       *
       * @example <caption>Emit clicks at a rate of at most one click per second</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
       * result.subscribe(x => console.log(x));
       *
       * @see {@link audit}
       * @see {@link debounce}
       * @see {@link delayWhen}
       * @see {@link sample}
       * @see {@link throttleTime}
       *
       * @param {function(value: T): SubscribableOrPromise} durationSelector A function
       * that receives a value from the source Observable, for computing the silencing
       * duration for each source value, returned as an Observable or a Promise.
       * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
       * to `{ leading: true, trailing: false }`.
       * @return {Observable<T>} An Observable that performs the throttle operation to
       * limit the rate of emissions from the source.
       * @method throttle
       * @owner Observable
       */


      function throttle(durationSelector, config) {
        if (config === void 0) {
          config = internal_compatibility_1.defaultThrottleConfig;
        }

        return operators_1.throttle(durationSelector, config)(this);
      }

      exports.throttle = throttle; //# sourceMappingURL=throttle.js.map

      /***/
    },

    /***/
    "LSkT":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/skipLast.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function LSkT(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var skipLast_1 = __webpack_require__(
      /*! ../../operator/skipLast */
      "COpn");

      rxjs_1.Observable.prototype.skipLast = skipLast_1.skipLast; //# sourceMappingURL=skipLast.js.map

      /***/
    },

    /***/
    "LUEE":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/sample.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function LUEE(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var sample_1 = __webpack_require__(
      /*! ../../operator/sample */
      "CVW7");

      rxjs_1.Observable.prototype.sample = sample_1.sample; //# sourceMappingURL=sample.js.map

      /***/
    },

    /***/
    "LfHy":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/publishReplay.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function LfHy(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * @param bufferSize
       * @param windowTime
       * @param selectorOrScheduler
       * @param scheduler
       * @return {Observable<T> | ConnectableObservable<T>}
       * @method publishReplay
       * @owner Observable
       */


      function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
        return operators_1.publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler)(this);
      }

      exports.publishReplay = publishReplay; //# sourceMappingURL=publishReplay.js.map

      /***/
    },

    /***/
    "Lsvf":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/ignoreElements.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function Lsvf(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
       *
       * <img src="./img/ignoreElements.png" width="100%">
       *
       * @return {Observable} An empty Observable that only calls `complete`
       * or `error`, based on which one is called by the source Observable.
       * @method ignoreElements
       * @owner Observable
       */


      function ignoreElements() {
        return operators_1.ignoreElements()(this);
      }

      exports.ignoreElements = ignoreElements; //# sourceMappingURL=ignoreElements.js.map

      /***/
    },

    /***/
    "LxJG":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/combineAll.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function LxJG(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var combineAll_1 = __webpack_require__(
      /*! ../../operator/combineAll */
      "IUuq");

      rxjs_1.Observable.prototype.combineAll = combineAll_1.combineAll; //# sourceMappingURL=combineAll.js.map

      /***/
    },

    /***/
    "M6P7":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/finally.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function M6P7(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Returns an Observable that mirrors the source Observable, but will call a specified function when
       * the source terminates on complete, error or unsubscribe.
       *
       * <span class="informal">Ensure a given function will be called when a stream ends, no matter why it ended.</span>
       *
       * `finally` method accepts as a single parameter a function. This function does not accept any parameters and
       * should not return anything. It will be called whenever source Observable completes, errors or is unsubscribed,
       * which makes it good candidate to perform any necessary clean up or side effects when Observable terminates,
       * no matter how or why it terminated.
       *
       * Observable returned by `finally` will simply mirror source Observable - each time it is subscribed, source
       * Observable will be subscribed underneath.
       *
       * Note that behavior of `finally` will be repeated per every subscription, so if resulting Observable has
       * many subscribers, function passed to `finally` might be potentially called multiple times.
       *
       * Remember also that `finally` differs quite a lot from passing complete or error handler to {@link subscribe}. It will
       * return an Observable which can be further chained, while `subscribe` returns Subscription, basically ending Observable
       * chain. Function passed to `finally` will be called also when consumer of resulting Observable unsubscribes from it,
       * while handlers passed to `subscribe` will not (even complete handler). But most importantly, `finally` does not start
       * an execution of source Observable, like `subscribe` does, allowing you to set up all necessary hooks before
       * passing Observable further, even without specific knowledge how or when it will be used.
       *
       *
       * @example <caption>Call finally after complete notification</caption>
       * Rx.Observable.of(1, 2, 3)
       * .finally(() => console.log('I was finalized!'))
       * .map(x => x * 2) // `finally` returns an Observable, so we still can chain operators.
       * .subscribe(
       *   val => console.log(val),
       *   err => {},
       *   () => console.log('I completed!')
       * );
       *
       * // Logs:
       * // 1
       * // 2
       * // 3
       * // "I completed!"
       * // "I was finalized!"
       *
       *
       *
       * @example <caption>Call finally after consumer unsubscribes</caption>
       * const o = Rx.Observable.interval(1000)
       * .finally(() => console.log('Timer stopped'));
       *
       * const subscription = o.subscribe(
       *   val => console.log(val),
       *   err => {},
       *   () => console.log('Complete!') // Will not be called, since complete handler
       * );                               // does not react to unsubscription, just to
       *                                  // complete notification sent by the Observable itself.
       *
       * setTimeout(() => subscription.unsubscribe(), 2500);
       *
       * // Logs:
       * // 0 after 1s
       * // 1 after 2s
       * // "Timer stopped" after 2.5s
       *
       * @see {@link using}
       *
       * @param {function} callback Function to be called when source terminates (completes, errors or is unsubscribed).
       * @return {Observable} An Observable that mirrors the source, but will call the specified function on termination.
       * @method finally
       * @name finally
       * @owner Observable
       */


      function _finally(callback) {
        return operators_1.finalize(callback)(this);
      }

      exports._finally = _finally; //# sourceMappingURL=finally.js.map

      /***/
    },

    /***/
    "M6kn":
    /*!*********************************!*\
      !*** ./node_modules/rxjs/Rx.js ***!
      \*********************************/

    /*! no static exports found */

    /***/
    function M6kn(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat */
      "FU7m")); //# sourceMappingURL=Rx.js.map

      /***/

    },

    /***/
    "Mj4Y":
    /*!************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/observable/fromIterable.js ***!
      \************************************************************************/

    /*! exports provided: fromIterable */

    /***/
    function Mj4Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromIterable", function () {
        return fromIterable;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "HDdC");
      /* harmony import */


      var _util_subscribeToIterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/subscribeToIterable */
      "pLzU");
      /* harmony import */


      var _scheduled_scheduleIterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../scheduled/scheduleIterable */
      "MBAA");

      function fromIterable(input, scheduler) {
        if (!input) {
          throw new Error('Iterable cannot be null');
        }

        if (!scheduler) {
          return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToIterable__WEBPACK_IMPORTED_MODULE_1__["subscribeToIterable"])(input));
        } else {
          return Object(_scheduled_scheduleIterable__WEBPACK_IMPORTED_MODULE_2__["scheduleIterable"])(input, scheduler);
        }
      } //# sourceMappingURL=fromIterable.js.map

      /***/

    },

    /***/
    "Mw3v":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/pluck.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function Mw3v(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Maps each source value (an object) to its specified nested property.
       *
       * <span class="informal">Like {@link map}, but meant only for picking one of
       * the nested properties of every emitted object.</span>
       *
       * <img src="./img/pluck.png" width="100%">
       *
       * Given a list of strings describing a path to an object property, retrieves
       * the value of a specified nested property from all values in the source
       * Observable. If a property can't be resolved, it will return `undefined` for
       * that value.
       *
       * @example <caption>Map every click to the tagName of the clicked target element</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var tagNames = clicks.pluck('target', 'tagName');
       * tagNames.subscribe(x => console.log(x));
       *
       * @see {@link map}
       *
       * @param {...string} properties The nested properties to pluck from each source
       * value (an object).
       * @return {Observable} A new Observable of property values from the source values.
       * @method pluck
       * @owner Observable
       */


      function pluck() {
        var properties = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          properties[_i] = arguments[_i];
        }

        return operators_1.pluck.apply(void 0, properties)(this);
      }

      exports.pluck = pluck; //# sourceMappingURL=pluck.js.map

      /***/
    },

    /***/
    "Myac":
    /*!***************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/race.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function Myac(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Returns an Observable that mirrors the first source Observable to emit an item
       * from the combination of this Observable and supplied Observables.
       * @param {...Observables} ...observables Sources used to race for which Observable emits first.
       * @return {Observable} An Observable that mirrors the output of the first Observable to emit an item.
       * @method race
       * @owner Observable
       */


      function race() {
        var observables = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i] = arguments[_i];
        }

        return operators_1.race.apply(void 0, observables)(this);
      }

      exports.race = race; //# sourceMappingURL=race.js.map

      /***/
    },

    /***/
    "ND/j":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/window.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function NDJ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var window_1 = __webpack_require__(
      /*! ../../operator/window */
      "Xh4i");

      rxjs_1.Observable.prototype.window = window_1.window; //# sourceMappingURL=window.js.map

      /***/
    },

    /***/
    "NEMR":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/retryWhen.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function NEMR(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
       * calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
       * If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
       * subscription. Otherwise this method will resubscribe to the source Observable.
       *
       * <img src="./img/retryWhen.png" width="100%">
       *
       * @param {function(errors: Observable): Observable} notifier - Receives an Observable of notifications with which a
       * user can `complete` or `error`, aborting the retry.
       * @return {Observable} The source Observable modified with retry logic.
       * @method retryWhen
       * @owner Observable
       */


      function retryWhen(notifier) {
        return operators_1.retryWhen(notifier)(this);
      }

      exports.retryWhen = retryWhen; //# sourceMappingURL=retryWhen.js.map

      /***/
    },

    /***/
    "Nh3w":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/partition.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function Nh3w(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var partition_1 = __webpack_require__(
      /*! ../../operator/partition */
      "Y7AG");

      rxjs_1.Observable.prototype.partition = partition_1.partition; //# sourceMappingURL=partition.js.map

      /***/
    },

    /***/
    "O5hQ":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/forkJoin.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function O5hQ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.forkJoin = rxjs_1.forkJoin; //# sourceMappingURL=forkJoin.js.map

      /***/
    },

    /***/
    "Of7M":
    /*!*****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/util/applyMixins.js ***!
      \*****************************************************************/

    /*! exports provided: applyMixins */

    /***/
    function Of7M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "applyMixins", function () {
        return applyMixins;
      });

      function applyMixins(derivedCtor, baseCtors) {
        for (var i = 0, len = baseCtors.length; i < len; i++) {
          var baseCtor = baseCtors[i];
          var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);

          for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
            var name = propertyKeys[j];
            derivedCtor.prototype[name] = baseCtor.prototype[name];
          }
        }
      } //# sourceMappingURL=applyMixins.js.map

      /***/

    },

    /***/
    "P+DX":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/mergeAll.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function PDX(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var mergeAll_1 = __webpack_require__(
      /*! ../../operator/mergeAll */
      "KxFi");

      rxjs_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll; //# sourceMappingURL=mergeAll.js.map

      /***/
    },

    /***/
    "P71F":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/sampleTime.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function P71F(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Emits the most recently emitted value from the source Observable within
       * periodic time intervals.
       *
       * <span class="informal">Samples the source Observable at periodic time
       * intervals, emitting what it samples.</span>
       *
       * <img src="./img/sampleTime.png" width="100%">
       *
       * `sampleTime` periodically looks at the source Observable and emits whichever
       * value it has most recently emitted since the previous sampling, unless the
       * source has not emitted anything since the previous sampling. The sampling
       * happens periodically in time every `period` milliseconds (or the time unit
       * defined by the optional `scheduler` argument). The sampling starts as soon as
       * the output Observable is subscribed.
       *
       * @example <caption>Every second, emit the most recent click at most once</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.sampleTime(1000);
       * result.subscribe(x => console.log(x));
       *
       * @see {@link auditTime}
       * @see {@link debounceTime}
       * @see {@link delay}
       * @see {@link sample}
       * @see {@link throttleTime}
       *
       * @param {number} period The sampling period expressed in milliseconds or the
       * time unit determined internally by the optional `scheduler`.
       * @param {Scheduler} [scheduler=asyncScheduler] The {@link SchedulerLike} to use for
       * managing the timers that handle the sampling.
       * @return {Observable<T>} An Observable that emits the results of sampling the
       * values emitted by the source Observable at the specified time interval.
       * @method sampleTime
       * @owner Observable
       */


      function sampleTime(period, scheduler) {
        if (scheduler === void 0) {
          scheduler = rxjs_1.asyncScheduler;
        }

        return operators_1.sampleTime(period, scheduler)(this);
      }

      exports.sampleTime = sampleTime; //# sourceMappingURL=sampleTime.js.map

      /***/
    },

    /***/
    "PZgn":
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/publishReplay.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function PZgn(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var publishReplay_1 = __webpack_require__(
      /*! ../../operator/publishReplay */
      "LfHy");

      rxjs_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay; //# sourceMappingURL=publishReplay.js.map

      /***/
    },

    /***/
    "PpQq":
    /*!*********************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/bindNodeCallback.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function PpQq(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.bindNodeCallback = rxjs_1.bindNodeCallback; //# sourceMappingURL=bindNodeCallback.js.map

      /***/
    },

    /***/
    "QJJP":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/scan.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function QJJP(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var scan_1 = __webpack_require__(
      /*! ../../operator/scan */
      "elu/");

      rxjs_1.Observable.prototype.scan = scan_1.scan; //# sourceMappingURL=scan.js.map

      /***/
    },

    /***/
    "QPu+":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/reduce.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function QPu(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Applies an accumulator function over the source Observable, and returns the
       * accumulated result when the source completes, given an optional seed value.
       *
       * <span class="informal">Combines together all values emitted on the source,
       * using an accumulator function that knows how to join a new source value into
       * the accumulation from the past.</span>
       *
       * <img src="./img/reduce.png" width="100%">
       *
       * Like
       * [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce),
       * `reduce` applies an `accumulator` function against an accumulation and each
       * value of the source Observable (from the past) to reduce it to a single
       * value, emitted on the output Observable. Note that `reduce` will only emit
       * one value, only when the source Observable completes. It is equivalent to
       * applying operator {@link scan} followed by operator {@link last}.
       *
       * Returns an Observable that applies a specified `accumulator` function to each
       * item emitted by the source Observable. If a `seed` value is specified, then
       * that value will be used as the initial value for the accumulator. If no seed
       * value is specified, the first item of the source is used as the seed.
       *
       * @example <caption>Count the number of click events that happened in 5 seconds</caption>
       * var clicksInFiveSeconds = Rx.Observable.fromEvent(document, 'click')
       *   .takeUntil(Rx.Observable.interval(5000));
       * var ones = clicksInFiveSeconds.mapTo(1);
       * var seed = 0;
       * var count = ones.reduce((acc, one) => acc + one, seed);
       * count.subscribe(x => console.log(x));
       *
       * @see {@link count}
       * @see {@link expand}
       * @see {@link mergeScan}
       * @see {@link scan}
       *
       * @param {function(acc: R, value: T, index: number): R} accumulator The accumulator function
       * called on each source value.
       * @param {R} [seed] The initial accumulation value.
       * @return {Observable<R>} An Observable that emits a single value that is the
       * result of accumulating the values emitted by the source Observable.
       * @method reduce
       * @owner Observable
       */


      function reduce(accumulator, seed) {
        // providing a seed of `undefined` *should* be valid and trigger
        // hasSeed! so don't use `seed !== undefined` checks!
        // For this reason, we have to check it here at the original call site
        // otherwise inside Operator/Subscriber we won't know if `undefined`
        // means they didn't provide anything or if they literally provided `undefined`
        if (arguments.length >= 2) {
          return operators_1.reduce(accumulator, seed)(this);
        }

        return operators_1.reduce(accumulator)(this);
      }

      exports.reduce = reduce; //# sourceMappingURL=reduce.js.map

      /***/
    },

    /***/
    "QTCG":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/takeWhile.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function QTCG(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Emits values emitted by the source Observable so long as each value satisfies
       * the given `predicate`, and then completes as soon as this `predicate` is not
       * satisfied.
       *
       * <span class="informal">Takes values from the source only while they pass the
       * condition given. When the first value does not satisfy, it completes.</span>
       *
       * <img src="./img/takeWhile.png" width="100%">
       *
       * `takeWhile` subscribes and begins mirroring the source Observable. Each value
       * emitted on the source is given to the `predicate` function which returns a
       * boolean, representing a condition to be satisfied by the source values. The
       * output Observable emits the source values until such time as the `predicate`
       * returns false, at which point `takeWhile` stops mirroring the source
       * Observable and completes the output Observable.
       *
       * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.takeWhile(ev => ev.clientX > 200);
       * result.subscribe(x => console.log(x));
       *
       * @see {@link take}
       * @see {@link takeLast}
       * @see {@link takeUntil}
       * @see {@link skip}
       *
       * @param {function(value: T, index: number): boolean} predicate A function that
       * evaluates a value emitted by the source Observable and returns a boolean.
       * Also takes the (zero-based) index as the second argument.
       * @return {Observable<T>} An Observable that emits the values from the source
       * Observable so long as each value satisfies the condition defined by the
       * `predicate`, then completes.
       * @method takeWhile
       * @owner Observable
       */


      function takeWhile(predicate) {
        return operators_1.takeWhile(predicate)(this);
      }

      exports.takeWhile = takeWhile; //# sourceMappingURL=takeWhile.js.map

      /***/
    },

    /***/
    "QW/q":
    /*!****************************************************!*\
      !*** ./src/app/features/lac/facades/lac-facade.ts ***!
      \****************************************************/

    /*! exports provided: LacFacade */

    /***/
    function QWQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LacFacade", function () {
        return LacFacade;
      });
      /* harmony import */


      var _models_lac_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/lac-model */
      "pTkb");
      /* harmony import */


      var _pg_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pg-facade */
      "dzLn");
      /* harmony import */


      var _layer_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layer-facade */
      "FJZY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LacFacade = /*#__PURE__*/function () {
        function LacFacade() {
          _classCallCheck(this, LacFacade);
        }

        _createClass(LacFacade, [{
          key: "sum",
          value: function sum(a, b) {
            return a + b;
          }
        }, {
          key: "divide",
          value: function divide(a, b) {
            return a / b;
          }
        }, {
          key: "multiply",
          value: function multiply(a, b) {
            return a * b;
            var buyer = new _models_lac_model__WEBPACK_IMPORTED_MODULE_0__["Buyer"]();
          }
        }]);

        return LacFacade;
      }();

      LacFacade.ɵfac = function LacFacade_Factory(t) {
        return new (t || LacFacade)();
      };

      LacFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: LacFacade,
        factory: LacFacade.ɵfac,
        providedIn: "root"
      });
      Object(_models_lac_model__WEBPACK_IMPORTED_MODULE_0__["applyMixins"])(LacFacade, [_pg_facade__WEBPACK_IMPORTED_MODULE_1__["PgFacade"], _layer_facade__WEBPACK_IMPORTED_MODULE_2__["LayerFacade"]]);
      /***/
    },

    /***/
    "QXri":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/throw.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function QXri(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable["throw"] = rxjs_1.throwError;
      rxjs_1.Observable.throwError = rxjs_1.throwError; //# sourceMappingURL=throw.js.map

      /***/
    },

    /***/
    "Qbza":
    /*!**************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/materialize.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function Qbza(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var materialize_1 = __webpack_require__(
      /*! ../../operator/materialize */
      "1gRP");

      rxjs_1.Observable.prototype.materialize = materialize_1.materialize; //# sourceMappingURL=materialize.js.map

      /***/
    },

    /***/
    "QsQ4":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/withLatestFrom.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function QsQ4(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Combines the source Observable with other Observables to create an Observable
       * whose values are calculated from the latest values of each, only when the
       * source emits.
       *
       * <span class="informal">Whenever the source Observable emits a value, it
       * computes a formula using that value plus the latest values from other input
       * Observables, then emits the output of that formula.</span>
       *
       * <img src="./img/withLatestFrom.png" width="100%">
       *
       * `withLatestFrom` combines each value from the source Observable (the
       * instance) with the latest values from the other input Observables only when
       * the source emits a value, optionally using a `project` function to determine
       * the value to be emitted on the output Observable. All input Observables must
       * emit at least one value before the output Observable will emit a value.
       *
       * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var timer = Rx.Observable.interval(1000);
       * var result = clicks.withLatestFrom(timer);
       * result.subscribe(x => console.log(x));
       *
       * @see {@link combineLatest}
       *
       * @param {ObservableInput} other An input Observable to combine with the source
       * Observable. More than one input Observables may be given as argument.
       * @param {Function} [project] Projection function for combining values
       * together. Receives all values in order of the Observables passed, where the
       * first parameter is a value from the source Observable. (e.g.
       * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
       * passed, arrays will be emitted on the output Observable.
       * @return {Observable} An Observable of projected values from the most recent
       * values from each input Observable, or an array of the most recent values from
       * each input Observable.
       * @method withLatestFrom
       * @owner Observable
       */


      function withLatestFrom() {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return operators_1.withLatestFrom.apply(void 0, args)(this);
      }

      exports.withLatestFrom = withLatestFrom; //# sourceMappingURL=withLatestFrom.js.map

      /***/
    },

    /***/
    "QtPd":
    /*!***************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/debounceTime.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function QtPd(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var debounceTime_1 = __webpack_require__(
      /*! ../../operator/debounceTime */
      "LOr+");

      rxjs_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime; //# sourceMappingURL=debounceTime.js.map

      /***/
    },

    /***/
    "Qw2J":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/concatAll.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function Qw2J(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var concatAll_1 = __webpack_require__(
      /*! ../../operator/concatAll */
      "caIW");

      rxjs_1.Observable.prototype.concatAll = concatAll_1.concatAll; //# sourceMappingURL=concatAll.js.map

      /***/
    },

    /***/
    "RFdt":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/isEmpty.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function RFdt(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var isEmpty_1 = __webpack_require__(
      /*! ../../operator/isEmpty */
      "nueD");

      rxjs_1.Observable.prototype.isEmpty = isEmpty_1.isEmpty; //# sourceMappingURL=isEmpty.js.map

      /***/
    },

    /***/
    "RFoL":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/first.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function RFoL(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Emits only the first value (or the first value that meets some condition)
       * emitted by the source Observable.
       *
       * <span class="informal">Emits only the first value. Or emits only the first
       * value that passes some test.</span>
       *
       * <img src="./img/first.png" width="100%">
       *
       * If called with no arguments, `first` emits the first value of the source
       * Observable, then completes. If called with a `predicate` function, `first`
       * emits the first value of the source that matches the specified condition. It
       * may also take a `resultSelector` function to produce the output value from
       * the input value, and a `defaultValue` to emit in case the source completes
       * before it is able to emit a valid value. Throws an error if `defaultValue`
       * was not provided and a matching element is not found.
       *
       * @example <caption>Emit only the first click that happens on the DOM</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.first();
       * result.subscribe(x => console.log(x));
       *
       * @example <caption>Emits the first click that happens on a DIV</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.first(ev => ev.target.tagName === 'DIV');
       * result.subscribe(x => console.log(x));
       *
       * @see {@link filter}
       * @see {@link find}
       * @see {@link take}
       *
       * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
       * callback if the Observable completes before any `next` notification was sent.
       *
       * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
       * An optional function called with each item to test for condition matching.
       * @param {T} [defaultValue] The default value emitted in case no valid value
       * was found on the source.
       * @return {Observable<T>} An Observable of the first item that matches the
       * condition.
       * @method first
       * @owner Observable
       */


      function first() {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return operators_1.first.apply(void 0, args)(this);
      }

      exports.first = first; //# sourceMappingURL=first.js.map

      /***/
    },

    /***/
    "RT2N":
    /*!**************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/concatMapTo.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function RT2N(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var concatMapTo_1 = __webpack_require__(
      /*! ../../operator/concatMapTo */
      "eUyF");

      rxjs_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo; //# sourceMappingURL=concatMapTo.js.map

      /***/
    },

    /***/
    "RhlD":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/interval.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function RhlD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.interval = rxjs_1.interval; //# sourceMappingURL=interval.js.map

      /***/
    },

    /***/
    "Sj+y":
    /*!******************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/observable/dom/AjaxObservable.js ***!
      \******************************************************************************/

    /*! exports provided: ajaxGet, ajaxPost, ajaxDelete, ajaxPut, ajaxPatch, ajaxGetJSON, AjaxObservable, AjaxSubscriber, AjaxResponse, AjaxError, AjaxTimeoutError */

    /***/
    function SjY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ajaxGet", function () {
        return ajaxGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ajaxPost", function () {
        return ajaxPost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ajaxDelete", function () {
        return ajaxDelete;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ajaxPut", function () {
        return ajaxPut;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ajaxPatch", function () {
        return ajaxPatch;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ajaxGetJSON", function () {
        return ajaxGetJSON;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AjaxObservable", function () {
        return AjaxObservable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AjaxSubscriber", function () {
        return AjaxSubscriber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AjaxResponse", function () {
        return AjaxResponse;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AjaxError", function () {
        return AjaxError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AjaxTimeoutError", function () {
        return AjaxTimeoutError;
      });
      /* harmony import */


      var _util_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../util/root */
      "xJj7");
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../Observable */
      "HDdC");
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../Subscriber */
      "7o/Q");
      /* harmony import */


      var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../operators/map */
      "lJxs");

      function getCORSRequest() {
        if (_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XMLHttpRequest) {
          return new _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XMLHttpRequest();
        } else if (!!_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XDomainRequest) {
          return new _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XDomainRequest();
        } else {
          throw new Error('CORS is not supported by your browser');
        }
      }

      function getXMLHttpRequest() {
        if (_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XMLHttpRequest) {
          return new _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XMLHttpRequest();
        } else {
          var progId;

          try {
            var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];

            for (var i = 0; i < 3; i++) {
              try {
                progId = progIds[i];

                if (new _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].ActiveXObject(progId)) {
                  break;
                }
              } catch (e) {}
            }

            return new _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].ActiveXObject(progId);
          } catch (e) {
            throw new Error('XMLHttpRequest is not supported by your browser');
          }
        }
      }

      function ajaxGet(url) {
        var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return new AjaxObservable({
          method: 'GET',
          url: url,
          headers: headers
        });
      }

      function ajaxPost(url, body, headers) {
        return new AjaxObservable({
          method: 'POST',
          url: url,
          body: body,
          headers: headers
        });
      }

      function ajaxDelete(url, headers) {
        return new AjaxObservable({
          method: 'DELETE',
          url: url,
          headers: headers
        });
      }

      function ajaxPut(url, body, headers) {
        return new AjaxObservable({
          method: 'PUT',
          url: url,
          body: body,
          headers: headers
        });
      }

      function ajaxPatch(url, body, headers) {
        return new AjaxObservable({
          method: 'PATCH',
          url: url,
          body: body,
          headers: headers
        });
      }

      var mapResponse = Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x, index) {
        return x.response;
      });

      function ajaxGetJSON(url, headers) {
        return mapResponse(new AjaxObservable({
          method: 'GET',
          url: url,
          responseType: 'json',
          headers: headers
        }));
      }

      var AjaxObservable = /*#__PURE__*/function (_Observable__WEBPACK_2) {
        _inherits(AjaxObservable, _Observable__WEBPACK_2);

        var _super3 = _createSuper(AjaxObservable);

        function AjaxObservable(urlOrRequest) {
          var _this3;

          _classCallCheck(this, AjaxObservable);

          _this3 = _super3.call(this);
          var request = {
            async: true,
            createXHR: function createXHR() {
              return this.crossDomain ? getCORSRequest() : getXMLHttpRequest();
            },
            crossDomain: true,
            withCredentials: false,
            headers: {},
            method: 'GET',
            responseType: 'json',
            timeout: 0
          };

          if (typeof urlOrRequest === 'string') {
            request.url = urlOrRequest;
          } else {
            for (var prop in urlOrRequest) {
              if (urlOrRequest.hasOwnProperty(prop)) {
                request[prop] = urlOrRequest[prop];
              }
            }
          }

          _this3.request = request;
          return _this3;
        }

        _createClass(AjaxObservable, [{
          key: "_subscribe",
          value: function _subscribe(subscriber) {
            return new AjaxSubscriber(subscriber, this.request);
          }
        }]);

        return AjaxObservable;
      }(_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]);

      AjaxObservable.create = function () {
        var create = function create(urlOrRequest) {
          return new AjaxObservable(urlOrRequest);
        };

        create.get = ajaxGet;
        create.post = ajaxPost;
        create["delete"] = ajaxDelete;
        create.put = ajaxPut;
        create.patch = ajaxPatch;
        create.getJSON = ajaxGetJSON;
        return create;
      }();

      var AjaxSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
        _inherits(AjaxSubscriber, _Subscriber__WEBPACK_);

        var _super4 = _createSuper(AjaxSubscriber);

        function AjaxSubscriber(destination, request) {
          var _this4;

          _classCallCheck(this, AjaxSubscriber);

          _this4 = _super4.call(this, destination);
          _this4.request = request;
          _this4.done = false;
          var headers = request.headers = request.headers || {};

          if (!request.crossDomain && !_this4.getHeader(headers, 'X-Requested-With')) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
          }

          var contentTypeHeader = _this4.getHeader(headers, 'Content-Type');

          if (!contentTypeHeader && !(_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].FormData && request.body instanceof _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].FormData) && typeof request.body !== 'undefined') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
          }

          request.body = _this4.serializeBody(request.body, _this4.getHeader(request.headers, 'Content-Type'));

          _this4.send();

          return _this4;
        }

        _createClass(AjaxSubscriber, [{
          key: "next",
          value: function next(e) {
            this.done = true;
            var xhr = this.xhr,
                request = this.request,
                destination = this.destination;
            var result;

            try {
              result = new AjaxResponse(e, xhr, request);
            } catch (err) {
              return destination.error(err);
            }

            destination.next(result);
          }
        }, {
          key: "send",
          value: function send() {
            var request = this.request,
                _this$request = this.request,
                user = _this$request.user,
                method = _this$request.method,
                url = _this$request.url,
                async = _this$request.async,
                password = _this$request.password,
                headers = _this$request.headers,
                body = _this$request.body;

            try {
              var xhr = this.xhr = request.createXHR();
              this.setupEvents(xhr, request);

              if (user) {
                xhr.open(method, url, async, user, password);
              } else {
                xhr.open(method, url, async);
              }

              if (async) {
                xhr.timeout = request.timeout;
                xhr.responseType = request.responseType;
              }

              if ('withCredentials' in xhr) {
                xhr.withCredentials = !!request.withCredentials;
              }

              this.setHeaders(xhr, headers);

              if (body) {
                xhr.send(body);
              } else {
                xhr.send();
              }
            } catch (err) {
              this.error(err);
            }
          }
        }, {
          key: "serializeBody",
          value: function serializeBody(body, contentType) {
            if (!body || typeof body === 'string') {
              return body;
            } else if (_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].FormData && body instanceof _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].FormData) {
              return body;
            }

            if (contentType) {
              var splitIndex = contentType.indexOf(';');

              if (splitIndex !== -1) {
                contentType = contentType.substring(0, splitIndex);
              }
            }

            switch (contentType) {
              case 'application/x-www-form-urlencoded':
                return Object.keys(body).map(function (key) {
                  return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(body[key]));
                }).join('&');

              case 'application/json':
                return JSON.stringify(body);

              default:
                return body;
            }
          }
        }, {
          key: "setHeaders",
          value: function setHeaders(xhr, headers) {
            for (var key in headers) {
              if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
              }
            }
          }
        }, {
          key: "getHeader",
          value: function getHeader(headers, headerName) {
            for (var key in headers) {
              if (key.toLowerCase() === headerName.toLowerCase()) {
                return headers[key];
              }
            }

            return undefined;
          }
        }, {
          key: "setupEvents",
          value: function setupEvents(xhr, request) {
            var progressSubscriber = request.progressSubscriber;

            function xhrTimeout(e) {
              var subscriber = xhrTimeout.subscriber,
                  progressSubscriber = xhrTimeout.progressSubscriber,
                  request = xhrTimeout.request;

              if (progressSubscriber) {
                progressSubscriber.error(e);
              }

              var error;

              try {
                error = new AjaxTimeoutError(this, request);
              } catch (err) {
                error = err;
              }

              subscriber.error(error);
            }

            xhr.ontimeout = xhrTimeout;
            xhrTimeout.request = request;
            xhrTimeout.subscriber = this;
            xhrTimeout.progressSubscriber = progressSubscriber;

            if (xhr.upload && 'withCredentials' in xhr) {
              if (progressSubscriber) {
                var _xhrProgress2;

                _xhrProgress2 = function xhrProgress(e) {
                  var _xhrProgress = _xhrProgress2,
                      progressSubscriber = _xhrProgress.progressSubscriber;
                  progressSubscriber.next(e);
                };

                if (_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XDomainRequest) {
                  xhr.onprogress = _xhrProgress2;
                } else {
                  xhr.upload.onprogress = _xhrProgress2;
                }

                _xhrProgress2.progressSubscriber = progressSubscriber;
              }

              var _xhrError2;

              _xhrError2 = function xhrError(e) {
                var _xhrError = _xhrError2,
                    progressSubscriber = _xhrError.progressSubscriber,
                    subscriber = _xhrError.subscriber,
                    request = _xhrError.request;

                if (progressSubscriber) {
                  progressSubscriber.error(e);
                }

                var error;

                try {
                  error = new AjaxError('ajax error', this, request);
                } catch (err) {
                  error = err;
                }

                subscriber.error(error);
              };

              xhr.onerror = _xhrError2;
              _xhrError2.request = request;
              _xhrError2.subscriber = this;
              _xhrError2.progressSubscriber = progressSubscriber;
            }

            function xhrReadyStateChange(e) {
              return;
            }

            xhr.onreadystatechange = xhrReadyStateChange;
            xhrReadyStateChange.subscriber = this;
            xhrReadyStateChange.progressSubscriber = progressSubscriber;
            xhrReadyStateChange.request = request;

            function xhrLoad(e) {
              var subscriber = xhrLoad.subscriber,
                  progressSubscriber = xhrLoad.progressSubscriber,
                  request = xhrLoad.request;

              if (this.readyState === 4) {
                var status = this.status === 1223 ? 204 : this.status;
                var response = this.responseType === 'text' ? this.response || this.responseText : this.response;

                if (status === 0) {
                  status = response ? 200 : 0;
                }

                if (status < 400) {
                  if (progressSubscriber) {
                    progressSubscriber.complete();
                  }

                  subscriber.next(e);
                  subscriber.complete();
                } else {
                  if (progressSubscriber) {
                    progressSubscriber.error(e);
                  }

                  var error;

                  try {
                    error = new AjaxError('ajax error ' + status, this, request);
                  } catch (err) {
                    error = err;
                  }

                  subscriber.error(error);
                }
              }
            }

            xhr.onload = xhrLoad;
            xhrLoad.subscriber = this;
            xhrLoad.progressSubscriber = progressSubscriber;
            xhrLoad.request = request;
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe() {
            var done = this.done,
                xhr = this.xhr;

            if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
              xhr.abort();
            }

            _get(_getPrototypeOf(AjaxSubscriber.prototype), "unsubscribe", this).call(this);
          }
        }]);

        return AjaxSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"]);

      var AjaxResponse = function AjaxResponse(originalEvent, xhr, request) {
        _classCallCheck(this, AjaxResponse);

        this.originalEvent = originalEvent;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
      };

      var AjaxErrorImpl = function () {
        function AjaxErrorImpl(message, xhr, request) {
          Error.call(this);
          this.message = message;
          this.name = 'AjaxError';
          this.xhr = xhr;
          this.request = request;
          this.status = xhr.status;
          this.responseType = xhr.responseType || request.responseType;
          this.response = parseXhrResponse(this.responseType, xhr);
          return this;
        }

        AjaxErrorImpl.prototype = Object.create(Error.prototype);
        return AjaxErrorImpl;
      }();

      var AjaxError = AjaxErrorImpl;

      function parseJson(xhr) {
        if ('response' in xhr) {
          return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
        } else {
          return JSON.parse(xhr.responseText || 'null');
        }
      }

      function parseXhrResponse(responseType, xhr) {
        switch (responseType) {
          case 'json':
            return parseJson(xhr);

          case 'xml':
            return xhr.responseXML;

          case 'text':
          default:
            return 'response' in xhr ? xhr.response : xhr.responseText;
        }
      }

      function AjaxTimeoutErrorImpl(xhr, request) {
        AjaxError.call(this, 'ajax timeout', xhr, request);
        this.name = 'AjaxTimeoutError';
        return this;
      }

      var AjaxTimeoutError = AjaxTimeoutErrorImpl; //# sourceMappingURL=AjaxObservable.js.map

      /***/
    },

    /***/
    "SjmF":
    /*!**************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/min.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function SjmF(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
       * and when source Observable completes it emits a single item: the item with the smallest value.
       *
       * <img src="./img/min.png" width="100%">
       *
       * @example <caption>Get the minimal value of a series of numbers</caption>
       * Rx.Observable.of(5, 4, 7, 2, 8)
       *   .min()
       *   .subscribe(x => console.log(x)); // -> 2
       *
       * @example <caption>Use a comparer function to get the minimal item</caption>
       * interface Person {
       *   age: number,
       *   name: string
       * }
       * Observable.of<Person>({age: 7, name: 'Foo'},
       *                       {age: 5, name: 'Bar'},
       *                       {age: 9, name: 'Beer'})
       *           .min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1)
       *           .subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
       * }
       *
       * @see {@link max}
       *
       * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
       * value of two items.
       * @return {Observable<R>} An Observable that emits item with the smallest value.
       * @method min
       * @owner Observable
       */


      function min(comparer) {
        return operators_1.min(comparer)(this);
      }

      exports.min = min; //# sourceMappingURL=min.js.map

      /***/
    },

    /***/
    "T7Um":
    /*!**************************************************************************************!*\
      !*** ./src/app/features/lac/components/lac-layer-block/lac-layer-block.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: LacLayerBlockComponent */

    /***/
    function T7Um(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LacLayerBlockComponent", function () {
        return LacLayerBlockComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_lac_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/lac.service */
      "8Zbp");
      /* harmony import */


      var _facades_lac_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../facades/lac-facade */
      "QW/q");
      /* harmony import */


      var src_app_shared_components_autocomplete_filter_autocomplete_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/components/autocomplete-filter/autocomplete-filter.component */
      "uqGX");

      var LacLayerBlockComponent = /*#__PURE__*/function () {
        function LacLayerBlockComponent(fb, lacService, lacFacade) {
          _classCallCheck(this, LacLayerBlockComponent);

          this.fb = fb;
          this.lacService = lacService;
          this.lacFacade = lacFacade;
          this.pricingGroups = [1, 2, 3, 4];
          this.typeLoadList = [];
          this.source = [];
          this.zonePerilList = [];
        }

        _createClass(LacLayerBlockComponent, [{
          key: "lacFormArray",
          get: function get() {
            return this.lacFormGroup.get("lacFormArray");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.lacFacade.LayerMethodOne();
            this.lacFacade.PgMethodOne();
            this.initControls();
            this.initTypeLoads();
            this.buildSourceModel();
          }
        }, {
          key: "buildSourceModel",
          value: function buildSourceModel() {
            var source = [{
              id: 1,
              name: "test",
              address: "addre"
            }, {
              id: 2,
              name: "test",
              address: "addre"
            }, {
              id: 3,
              name: "test",
              address: "addre"
            }];
            var desti = [];
            Object.assign(desti, source);
            source.forEach(function (element) {
              console.log("source", element);
            });
            desti.forEach(function (element) {
              console.log("desti", element);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {// const typeLoadControl = this.lacFormArray.get("typeLoad");
            // typeLoadControl.valueChanges.pipe(debounceTime(200)).subscribe(data => {
            //   this.lacFormArray.get("zonePeril").setValue(zonePerilList);
            // });
          }
        }, {
          key: "initControls",
          value: function initControls() {
            var _this5 = this;

            this.lacFormGroup = this.fb.group({
              lacFormArray: this.fb.array([])
            });
            this.pricingGroups.forEach(function (element) {
              _this5.layerGroupControls = _this5.createControls();

              var myFormArray = _this5.lacFormGroup.get("lacFormArray");

              _this5.layerGroupControls.get("groupIndex").patchValue(myFormArray.length);

              _this5.layerGroupControls.valueChanges.subscribe(function (data) {
                return _this5.onValuesChanged(data);
              });

              _this5.lacFormArray.push(_this5.layerGroupControls);

              _this5.lacFormArray.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (l) {
                return console.log('test l', l);
              }));

              _this5.lacFormArray.valueChanges.subscribe(function (value) {
                return _this5.onFormArrayValueChanged(value);
              });

              var zonePerilList = ["zonePeril1", "zonePeril2", "zonePeril3", "zonePeril4"];

              var typeLoadControl = _this5.layerGroupControls.get("typeLoad");

              typeLoadControl.valueChanges.subscribe(function (data) {
                _this5.layerGroupControls.get("zonePeril").value.values = zonePerilList; // this.layerGroupControls.get("zonePeril").patchValue("zonePerilList2");
                // this.layerGroupControls.get("zonePeril").setValue(zonePerilList);
                // this.zonePerilList = zonePerilList;
              });
            });
          }
        }, {
          key: "initTypeLoads",
          value: function initTypeLoads() {
            var _this6 = this;

            setTimeout(function () {
              _this6.typeLoadList = [{
                name: "typeload1",
                zonePeril: ["z1", "z2"]
              }, {
                name: "typeload2"
              }, {
                name: "typeload3"
              }, {
                name: "typeload4",
                zonePeril: ["z5", "z6"]
              }];
            }, 2000); // this.lacService.getTypeLoads().subscribe(data => {
            //   setTimeout(() => {
            //     this.typeLoadList = data;
            //   }, 500);
            // });
          }
        }, {
          key: "onFormArrayValueChanged",
          value: function onFormArrayValueChanged(value) {
            console.log("on form array value changed", value);
          }
        }, {
          key: "onValuesChanged",
          value: function onValuesChanged(data) {
            console.log("on value changed", data); // const changedGroup = this.lacFormArray.controls[data.groupIndex]
            //   .get("zonePeril")
            //   .patchValue([...zonePerilList]);
          }
        }, {
          key: "createControls",
          value: function createControls() {
            return this.fb.group({
              groupIndex: "",
              typeLoad: "",
              zonePeril: "",
              subCategory: ""
            });
          }
        }, {
          key: "onTypeChange",
          value: function onTypeChange($event, index) {
            console.log($event);
          }
        }]);

        return LacLayerBlockComponent;
      }();

      LacLayerBlockComponent.ɵfac = function LacLayerBlockComponent_Factory(t) {
        return new (t || LacLayerBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_lac_service__WEBPACK_IMPORTED_MODULE_3__["LacService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_facades_lac_facade__WEBPACK_IMPORTED_MODULE_4__["LacFacade"]));
      };

      LacLayerBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LacLayerBlockComponent,
        selectors: [["smc-lac-layer-block"]],
        decls: 1,
        vars: 0,
        template: function LacLayerBlockComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "smc-autocomplete-filter");
          }
        },
        directives: [src_app_shared_components_autocomplete_filter_autocomplete_filter_component__WEBPACK_IMPORTED_MODULE_5__["AutocompleteFilterComponent"]],
        styles: [".ghostTypeLoad[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 30px;\n  background-color: gray;\n  border-bottom: 3px solid white;\n  border-radius: 4px 4px 4px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxhYy1sYXllci1ibG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDRSw4QkFBQTtFQUNBLDhCQUFBO0FBQ04iLCJmaWxlIjoibGFjLWxheWVyLWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdob3N0VHlwZUxvYWR7XHJcbiAgICB3aWR0aDoxMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4O1xyXG4gICAgXHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "TMm9":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/toArray.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function TMm9(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var toArray_1 = __webpack_require__(
      /*! ../../operator/toArray */
      "0c70");

      rxjs_1.Observable.prototype.toArray = toArray_1.toArray; //# sourceMappingURL=toArray.js.map

      /***/
    },

    /***/
    "TpWx":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/windowCount.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function TpWx(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Branch out the source Observable values as a nested Observable with each
       * nested Observable emitting at most `windowSize` values.
       *
       * <span class="informal">It's like {@link bufferCount}, but emits a nested
       * Observable instead of an array.</span>
       *
       * <img src="./img/windowCount.png" width="100%">
       *
       * Returns an Observable that emits windows of items it collects from the source
       * Observable. The output Observable emits windows every `startWindowEvery`
       * items, each containing no more than `windowSize` items. When the source
       * Observable completes or encounters an error, the output Observable emits
       * the current window and propagates the notification from the source
       * Observable. If `startWindowEvery` is not provided, then new windows are
       * started immediately at the start of the source and when each window completes
       * with size `windowSize`.
       *
       * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.windowCount(3)
       *   .map(win => win.skip(1)) // skip first of every 3 clicks
       *   .mergeAll(); // flatten the Observable-of-Observables
       * result.subscribe(x => console.log(x));
       *
       * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.windowCount(2, 3)
       *   .mergeAll(); // flatten the Observable-of-Observables
       * result.subscribe(x => console.log(x));
       *
       * @see {@link window}
       * @see {@link windowTime}
       * @see {@link windowToggle}
       * @see {@link windowWhen}
       * @see {@link bufferCount}
       *
       * @param {number} windowSize The maximum number of values emitted by each
       * window.
       * @param {number} [startWindowEvery] Interval at which to start a new window.
       * For example if `startWindowEvery` is `2`, then a new window will be started
       * on every other value from the source. A new window is started at the
       * beginning of the source by default.
       * @return {Observable<Observable<T>>} An Observable of windows, which in turn
       * are Observable of values.
       * @method windowCount
       * @owner Observable
       */


      function windowCount(windowSize, startWindowEvery) {
        if (startWindowEvery === void 0) {
          startWindowEvery = 0;
        }

        return operators_1.windowCount(windowSize, startWindowEvery)(this);
      }

      exports.windowCount = windowCount; //# sourceMappingURL=windowCount.js.map

      /***/
    },

    /***/
    "TqLU":
    /*!***************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/find.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function TqLU(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Emits only the first value emitted by the source Observable that meets some
       * condition.
       *
       * <span class="informal">Finds the first value that passes some test and emits
       * that.</span>
       *
       * <img src="./img/find.png" width="100%">
       *
       * `find` searches for the first item in the source Observable that matches the
       * specified condition embodied by the `predicate`, and returns the first
       * occurrence in the source. Unlike {@link first}, the `predicate` is required
       * in `find`, and does not emit an error if a valid value is not found.
       *
       * @example <caption>Find and emit the first click that happens on a DIV element</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.find(ev => ev.target.tagName === 'DIV');
       * result.subscribe(x => console.log(x));
       *
       * @see {@link filter}
       * @see {@link first}
       * @see {@link findIndex}
       * @see {@link take}
       *
       * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
       * A function called with each item to test for condition matching.
       * @param {any} [thisArg] An optional argument to determine the value of `this`
       * in the `predicate` function.
       * @return {Observable<T>} An Observable of the first item that matches the
       * condition.
       * @method find
       * @owner Observable
       */


      function find(predicate, thisArg) {
        return operators_1.find(predicate, thisArg)(this);
      }

      exports.find = find; //# sourceMappingURL=find.js.map

      /***/
    },

    /***/
    "TwXD":
    /*!**************************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/distinctUntilKeyChanged.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function TwXD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var distinctUntilKeyChanged_1 = __webpack_require__(
      /*! ../../operator/distinctUntilKeyChanged */
      "7y2s");

      rxjs_1.Observable.prototype.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged; //# sourceMappingURL=distinctUntilKeyChanged.js.map

      /***/
    },

    /***/
    "UE8N":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/sequenceEqual.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function UE8N(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Compares all values of two observables in sequence using an optional comparor function
       * and returns an observable of a single boolean value representing whether or not the two sequences
       * are equal.
       *
       * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
       *
       * <img src="./img/sequenceEqual.png" width="100%">
       *
       * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
       * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
       * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
       * observables completes, the operator will wait for the other observable to complete; If the other
       * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
       * completes or emits after the other complets, the returned observable will never complete.
       *
       * @example <caption>figure out if the Konami code matches</caption>
       * var code = Rx.Observable.from([
       *  "ArrowUp",
       *  "ArrowUp",
       *  "ArrowDown",
       *  "ArrowDown",
       *  "ArrowLeft",
       *  "ArrowRight",
       *  "ArrowLeft",
       *  "ArrowRight",
       *  "KeyB",
       *  "KeyA",
       *  "Enter" // no start key, clearly.
       * ]);
       *
       * var keys = Rx.Observable.fromEvent(document, 'keyup')
       *  .map(e => e.code);
       * var matches = keys.bufferCount(11, 1)
       *  .mergeMap(
       *    last11 =>
       *      Rx.Observable.from(last11)
       *        .sequenceEqual(code)
       *   );
       * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
       *
       * @see {@link combineLatest}
       * @see {@link zip}
       * @see {@link withLatestFrom}
       *
       * @param {Observable} compareTo The observable sequence to compare the source sequence to.
       * @param {function} [comparor] An optional function to compare each value pair
       * @return {Observable} An Observable of a single boolean value representing whether or not
       * the values emitted by both observables were equal in sequence.
       * @method sequenceEqual
       * @owner Observable
       */


      function sequenceEqual(compareTo, comparor) {
        return operators_1.sequenceEqual(compareTo, comparor)(this);
      }

      exports.sequenceEqual = sequenceEqual; //# sourceMappingURL=sequenceEqual.js.map

      /***/
    },

    /***/
    "VSOP":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/share.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function VSOP(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var share_1 = __webpack_require__(
      /*! ../../operator/share */
      "l4jP");

      rxjs_1.Observable.prototype.share = share_1.share; //# sourceMappingURL=share.js.map

      /***/
    },

    /***/
    "VlMj":
    /*!***************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/timeInterval.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function VlMj(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var timeInterval_1 = __webpack_require__(
      /*! ../../operator/timeInterval */
      "bKLx");

      rxjs_1.Observable.prototype.timeInterval = timeInterval_1.timeInterval; //# sourceMappingURL=timeInterval.js.map

      /***/
    },

    /***/
    "VmLd":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/combineLatest.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function VmLd(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var internal_compatibility_1 = __webpack_require__(
      /*! rxjs/internal-compatibility */
      "w0v+");
      /* tslint:enable:max-line-length */

      /**
       * Combines multiple Observables to create an Observable whose values are
       * calculated from the latest values of each of its input Observables.
       *
       * <span class="informal">Whenever any input Observable emits a value, it
       * computes a formula using the latest values from all the inputs, then emits
       * the output of that formula.</span>
       *
       * <img src="./img/combineLatest.png" width="100%">
       *
       * `combineLatest` combines the values from this Observable with values from
       * Observables passed as arguments. This is done by subscribing to each
       * Observable, in order, and collecting an array of each of the most recent
       * values any time any of the input Observables emits, then either taking that
       * array and passing it as arguments to an optional `project` function and
       * emitting the return value of that, or just emitting the array of recent
       * values directly if there is no `project` function.
       *
       * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
       * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
       * var height = Rx.Observable.of(1.76, 1.77, 1.78);
       * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
       * bmi.subscribe(x => console.log('BMI is ' + x));
       *
       * // With output to console:
       * // BMI is 24.212293388429753
       * // BMI is 23.93948099205209
       * // BMI is 23.671253629592222
       *
       * @see {@link combineAll}
       * @see {@link merge}
       * @see {@link withLatestFrom}
       *
       * @param {ObservableInput} other An input Observable to combine with the source
       * Observable. More than one input Observables may be given as argument.
       * @param {function} [project] An optional function to project the values from
       * the combined latest values into a new value on the output Observable.
       * @return {Observable} An Observable of projected values from the most recent
       * values from each input Observable, or an array of the most recent values from
       * each input Observable.
       * @method combineLatest
       * @owner Observable
       */


      function combineLatest() {
        var observables = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i] = arguments[_i];
        }

        var project = null;

        if (typeof observables[observables.length - 1] === 'function') {
          project = observables.pop();
        } // if the first and only other argument besides the resultSelector is an array
        // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`


        if (observables.length === 1 && internal_compatibility_1.isArray(observables[0])) {
          observables = observables[0].slice();
        }

        return this.lift.call(rxjs_1.of.apply(void 0, [this].concat(observables)), new internal_compatibility_1.CombineLatestOperator(project));
      }

      exports.combineLatest = combineLatest; //# sourceMappingURL=combineLatest.js.map

      /***/
    },

    /***/
    "Vzig":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/throttleTime.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function Vzig(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var internal_compatibility_1 = __webpack_require__(
      /*! rxjs/internal-compatibility */
      "w0v+");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Emits a value from the source Observable, then ignores subsequent source
       * values for `duration` milliseconds, then repeats this process.
       *
       * <span class="informal">Lets a value pass, then ignores source values for the
       * next `duration` milliseconds.</span>
       *
       * <img src="./img/throttleTime.png" width="100%">
       *
       * `throttleTime` emits the source Observable values on the output Observable
       * when its internal timer is disabled, and ignores source values when the timer
       * is enabled. Initially, the timer is disabled. As soon as the first source
       * value arrives, it is forwarded to the output Observable, and then the timer
       * is enabled. After `duration` milliseconds (or the time unit determined
       * internally by the optional `scheduler`) has passed, the timer is disabled,
       * and this process repeats for the next source value. Optionally takes a
       * {@link IScheduler} for managing timers.
       *
       * @example <caption>Emit clicks at a rate of at most one click per second</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.throttleTime(1000);
       * result.subscribe(x => console.log(x));
       *
       * @see {@link auditTime}
       * @see {@link debounceTime}
       * @see {@link delay}
       * @see {@link sampleTime}
       * @see {@link throttle}
       *
       * @param {number} duration Time to wait before emitting another value after
       * emitting the last value, measured in milliseconds or the time unit determined
       * internally by the optional `scheduler`.
       * @param {Scheduler} [scheduler=asyncScheduler] The {@link SchedulerLike} to use for
       * managing the timers that handle the throttling.
       * @return {Observable<T>} An Observable that performs the throttle operation to
       * limit the rate of emissions from the source.
       * @method throttleTime
       * @owner Observable
       */


      function throttleTime(duration, scheduler, config) {
        if (scheduler === void 0) {
          scheduler = rxjs_1.asyncScheduler;
        }

        if (config === void 0) {
          config = internal_compatibility_1.defaultThrottleConfig;
        }

        return operators_1.throttleTime(duration, scheduler, config)(this);
      }

      exports.throttleTime = throttleTime; //# sourceMappingURL=throttleTime.js.map

      /***/
    },

    /***/
    "W/jz":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/repeatWhen.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function WJz(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var repeatWhen_1 = __webpack_require__(
      /*! ../../operator/repeatWhen */
      "A5T5");

      rxjs_1.Observable.prototype.repeatWhen = repeatWhen_1.repeatWhen; //# sourceMappingURL=repeatWhen.js.map

      /***/
    },

    /***/
    "W5YF":
    /*!**************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/switchMapTo.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function W5YF(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var switchMapTo_1 = __webpack_require__(
      /*! ../../operator/switchMapTo */
      "oXC5");

      rxjs_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo; //# sourceMappingURL=switchMapTo.js.map

      /***/
    },

    /***/
    "XC4j":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/toPromise.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function XC4j(module, exports) {// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
      // leaving this module here to prevent breakage.
      //# sourceMappingURL=toPromise.js.map

      /***/
    },

    /***/
    "XDL1":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/elementAt.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function XDL1(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Emits the single value at the specified `index` in a sequence of emissions
       * from the source Observable.
       *
       * <span class="informal">Emits only the i-th value, then completes.</span>
       *
       * <img src="./img/elementAt.png" width="100%">
       *
       * `elementAt` returns an Observable that emits the item at the specified
       * `index` in the source Observable, or a default value if that `index` is out
       * of range and the `default` argument is provided. If the `default` argument is
       * not given and the `index` is out of range, the output Observable will emit an
       * `ArgumentOutOfRangeError` error.
       *
       * @example <caption>Emit only the third click event</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.elementAt(2);
       * result.subscribe(x => console.log(x));
       *
       * // Results in:
       * // click 1 = nothing
       * // click 2 = nothing
       * // click 3 = MouseEvent object logged to console
       *
       * @see {@link first}
       * @see {@link last}
       * @see {@link skip}
       * @see {@link single}
       * @see {@link take}
       *
       * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
       * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
       * Observable has completed before emitting the i-th `next` notification.
       *
       * @param {number} index Is the number `i` for the i-th source emission that has
       * happened since the subscription, starting from the number `0`.
       * @param {T} [defaultValue] The default value returned for missing indices.
       * @return {Observable} An Observable that emits a single item, if it is found.
       * Otherwise, will emit the default value if given. If not, then emits an error.
       * @method elementAt
       * @owner Observable
       */


      function elementAt(index, defaultValue) {
        return operators_1.elementAt.apply(undefined, arguments)(this);
      }

      exports.elementAt = elementAt; //# sourceMappingURL=elementAt.js.map

      /***/
    },

    /***/
    "XPuz":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/empty.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function XPuz(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.empty = rxjs_1.empty; //# sourceMappingURL=empty.js.map

      /***/
    },

    /***/
    "Xh4i":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/window.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function Xh4i(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Branch out the source Observable values as a nested Observable whenever
       * `windowBoundaries` emits.
       *
       * <span class="informal">It's like {@link buffer}, but emits a nested Observable
       * instead of an array.</span>
       *
       * <img src="./img/window.png" width="100%">
       *
       * Returns an Observable that emits windows of items it collects from the source
       * Observable. The output Observable emits connected, non-overlapping
       * windows. It emits the current window and opens a new one whenever the
       * Observable `windowBoundaries` emits an item. Because each window is an
       * Observable, the output is a higher-order Observable.
       *
       * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var interval = Rx.Observable.interval(1000);
       * var result = clicks.window(interval)
       *   .map(win => win.take(2)) // each window has at most 2 emissions
       *   .mergeAll(); // flatten the Observable-of-Observables
       * result.subscribe(x => console.log(x));
       *
       * @see {@link windowCount}
       * @see {@link windowTime}
       * @see {@link windowToggle}
       * @see {@link windowWhen}
       * @see {@link buffer}
       *
       * @param {Observable<any>} windowBoundaries An Observable that completes the
       * previous window and starts a new window.
       * @return {Observable<Observable<T>>} An Observable of windows, which are
       * Observables emitting values of the source Observable.
       * @method window
       * @owner Observable
       */


      function window(windowBoundaries) {
        return operators_1.window(windowBoundaries)(this);
      }

      exports.window = window; //# sourceMappingURL=window.js.map

      /***/
    },

    /***/
    "Xj2z":
    /*!**************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/fromEvent.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function Xj2z(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.fromEvent = rxjs_1.fromEvent; //# sourceMappingURL=fromEvent.js.map

      /***/
    },

    /***/
    "Xk39":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/catch.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function Xk39(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Catches errors on the observable to be handled by returning a new observable or throwing an error.
       *
       * <img src="./img/catch.png" width="100%">
       *
       * @example <caption>Continues with a different Observable when there's an error</caption>
       *
       * Observable.of(1, 2, 3, 4, 5)
       *   .map(n => {
       * 	   if (n == 4) {
       * 	     throw 'four!';
       *     }
       *	   return n;
       *   })
       *   .catch(err => Observable.of('I', 'II', 'III', 'IV', 'V'))
       *   .subscribe(x => console.log(x));
       *   // 1, 2, 3, I, II, III, IV, V
       *
       * @example <caption>Retries the caught source Observable again in case of error, similar to retry() operator</caption>
       *
       * Observable.of(1, 2, 3, 4, 5)
       *   .map(n => {
       * 	   if (n === 4) {
       * 	     throw 'four!';
       *     }
       * 	   return n;
       *   })
       *   .catch((err, caught) => caught)
       *   .take(30)
       *   .subscribe(x => console.log(x));
       *   // 1, 2, 3, 1, 2, 3, ...
       *
       * @example <caption>Throws a new error when the source Observable throws an error</caption>
       *
       * Observable.of(1, 2, 3, 4, 5)
       *   .map(n => {
       *     if (n == 4) {
       *       throw 'four!';
       *     }
       *     return n;
       *   })
       *   .catch(err => {
       *     throw 'error in source. Details: ' + err;
       *   })
       *   .subscribe(
       *     x => console.log(x),
       *     err => console.log(err)
       *   );
       *   // 1, 2, 3, error in source. Details: four!
       *
       * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
       *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
       *  is returned by the `selector` will be used to continue the observable chain.
       * @return {Observable} An observable that originates from either the source or the observable returned by the
       *  catch `selector` function.
       * @method catch
       * @name catch
       * @owner Observable
       */


      function _catch(selector) {
        return operators_1.catchError(selector)(this);
      }

      exports._catch = _catch; //# sourceMappingURL=catch.js.map

      /***/
    },

    /***/
    "Xs6s":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/finally.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function Xs6s(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var finally_1 = __webpack_require__(
      /*! ../../operator/finally */
      "M6P7");

      rxjs_1.Observable.prototype["finally"] = finally_1._finally;
      rxjs_1.Observable.prototype._finally = finally_1._finally; //# sourceMappingURL=finally.js.map

      /***/
    },

    /***/
    "Y7AG":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/partition.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function Y7AG(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Splits the source Observable into two, one with values that satisfy a
       * predicate, and another with values that don't satisfy the predicate.
       *
       * <span class="informal">It's like {@link filter}, but returns two Observables:
       * one like the output of {@link filter}, and the other with values that did not
       * pass the condition.</span>
       *
       * <img src="./img/partition.png" width="100%">
       *
       * `partition` outputs an array with two Observables that partition the values
       * from the source Observable through the given `predicate` function. The first
       * Observable in that array emits source values for which the predicate argument
       * returns true. The second Observable emits source values for which the
       * predicate returns false. The first behaves like {@link filter} and the second
       * behaves like {@link filter} with the predicate negated.
       *
       * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
       * var clicksOnDivs = parts[0];
       * var clicksElsewhere = parts[1];
       * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
       * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
       *
       * @see {@link filter}
       *
       * @param {function(value: T, index: number): boolean} predicate A function that
       * evaluates each value emitted by the source Observable. If it returns `true`,
       * the value is emitted on the first Observable in the returned array, if
       * `false` the value is emitted on the second Observable in the array. The
       * `index` parameter is the number `i` for the i-th source emission that has
       * happened since the subscription, starting from the number `0`.
       * @param {any} [thisArg] An optional argument to determine the value of `this`
       * in the `predicate` function.
       * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
       * with values that passed the predicate, and another with values that did not
       * pass the predicate.
       * @method partition
       * @owner Observable
       */


      function partition(predicate, thisArg) {
        return operators_1.partition(predicate, thisArg)(this);
      }

      exports.partition = partition; //# sourceMappingURL=partition.js.map

      /***/
    },

    /***/
    "YA+d":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/bufferWhen.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function YAD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var bufferWhen_1 = __webpack_require__(
      /*! ../../operator/bufferWhen */
      "cYpg");

      rxjs_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen; //# sourceMappingURL=bufferWhen.js.map

      /***/
    },

    /***/
    "YiA4":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/windowWhen.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function YiA4(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Branch out the source Observable values as a nested Observable using a
       * factory function of closing Observables to determine when to start a new
       * window.
       *
       * <span class="informal">It's like {@link bufferWhen}, but emits a nested
       * Observable instead of an array.</span>
       *
       * <img src="./img/windowWhen.png" width="100%">
       *
       * Returns an Observable that emits windows of items it collects from the source
       * Observable. The output Observable emits connected, non-overlapping windows.
       * It emits the current window and opens a new one whenever the Observable
       * produced by the specified `closingSelector` function emits an item. The first
       * window is opened immediately when subscribing to the output Observable.
       *
       * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks
       *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
       *   .map(win => win.take(2)) // each window has at most 2 emissions
       *   .mergeAll(); // flatten the Observable-of-Observables
       * result.subscribe(x => console.log(x));
       *
       * @see {@link window}
       * @see {@link windowCount}
       * @see {@link windowTime}
       * @see {@link windowToggle}
       * @see {@link bufferWhen}
       *
       * @param {function(): Observable} closingSelector A function that takes no
       * arguments and returns an Observable that signals (on either `next` or
       * `complete`) when to close the previous window and start a new one.
       * @return {Observable<Observable<T>>} An observable of windows, which in turn
       * are Observables.
       * @method windowWhen
       * @owner Observable
       */


      function windowWhen(closingSelector) {
        return operators_1.windowWhen(closingSelector)(this);
      }

      exports.windowWhen = windowWhen; //# sourceMappingURL=windowWhen.js.map

      /***/
    },

    /***/
    "YwoP":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/first.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function YwoP(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var first_1 = __webpack_require__(
      /*! ../../operator/first */
      "RFoL");

      rxjs_1.Observable.prototype.first = first_1.first; //# sourceMappingURL=first.js.map

      /***/
    },

    /***/
    "ZHaO":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/multicast.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function ZHaO(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Allows source Observable to be subscribed only once with a Subject of choice,
       * while still sharing its values between multiple subscribers.
       *
       * <span class="informal">Subscribe to Observable once, but send its values to multiple subscribers.</span>
       *
       * <img src="./img/multicast.png" width="100%">
       *
       * `multicast` is an operator that works in two modes.
       *
       * In the first mode you provide a single argument to it, which can be either an initialized Subject or a Subject
       * factory. As a result you will get a special kind of an Observable - a {@link ConnectableObservable}. It can be
       * subscribed multiple times, just as regular Observable, but it won't subscribe to the source Observable at that
       * moment. It will do it only if you call its `connect` method. This means you can essentially control by hand, when
       * source Observable will be actually subscribed. What is more, ConnectableObservable will share this one subscription
       * between all of its subscribers. This means that, for example, `ajax` Observable will only send a request once,
       * even though usually it would send a request per every subscriber. Since it sends a request at the moment of
       * subscription, here request would be sent when the `connect` method of a ConnectableObservable is called.
       *
       * The most common pattern of using ConnectableObservable is calling `connect` when the first consumer subscribes,
       * keeping the subscription alive while several consumers come and go and finally unsubscribing from the source
       * Observable, when the last consumer unsubscribes. To not implement that logic over and over again,
       * ConnectableObservable has a special operator, `refCount`. When called, it returns an Observable, which will count
       * the number of consumers subscribed to it and keep ConnectableObservable connected as long as there is at least
       * one consumer. So if you don't actually need to decide yourself when to connect and disconnect a
       * ConnectableObservable, use `refCount`.
       *
       * The second mode is invoked by calling `multicast` with an additional, second argument - selector function.
       * This function accepts an Observable - which basically mirrors the source Observable - and returns Observable
       * as well, which should be the input stream modified by any operators you want. Note that in this
       * mode you cannot provide initialized Subject as a first argument - it has to be a Subject factory. If
       * you provide selector function, `multicast` returns just a regular Observable, instead of ConnectableObservable.
       * Thus, as usual, each subscription to this stream triggers subscription to the source Observable. However,
       * if inside the selector function you subscribe to the input Observable multiple times, actual source stream
       * will be subscribed only once. So if you have a chain of operators that use some Observable many times,
       * but you want to subscribe to that Observable only once, this is the mode you would use.
       *
       * Subject provided as a first parameter of `multicast` is used as a proxy for the single subscription to the
       * source Observable. It means that all values from the source stream go through that Subject. Thus, if a Subject
       * has some special properties, Observable returned by `multicast` will have them as well. If you want to use
       * `multicast` with a Subject that is one of the ones included in RxJS by default - {@link Subject},
       * {@link AsyncSubject}, {@link BehaviorSubject}, or {@link ReplaySubject} - simply use {@link publish},
       * {@link publishLast}, {@link publishBehavior} or {@link publishReplay} respectively. These are actually
       * just wrappers around `multicast`, with a specific Subject hardcoded inside.
       *
       * Also, if you use {@link publish} or {@link publishReplay} with a ConnectableObservables `refCount` operator,
       * you can simply use {@link share} and {@link shareReplay} respectively, which chain these two.
       *
       * @example <caption>Use ConnectableObservable</caption>
       * const seconds = Rx.Observable.interval(1000);
       * const connectableSeconds = seconds.multicast(new Subject());
       *
       * connectableSeconds.subscribe(value => console.log('first: ' + value));
       * connectableSeconds.subscribe(value => console.log('second: ' + value));
       *
       * // At this point still nothing happens, even though we subscribed twice.
       *
       * connectableSeconds.connect();
       *
       * // From now on `seconds` are being logged to the console,
       * // twice per every second. `seconds` Observable was however only subscribed once,
       * // so under the hood Observable.interval had only one clock started.
       *
       * @example <caption>Use selector</caption>
       * const seconds = Rx.Observable.interval(1000);
       *
       * seconds
       *     .multicast(
       *         () => new Subject(),
       *         seconds => seconds.zip(seconds) // Usually zip would subscribe to `seconds` twice.
       *                                         // Because we are inside selector, `seconds` is subscribed once,
       *     )                                   // thus starting only one clock used internally by Observable.interval.
       *     .subscribe();
       *
       * @see {@link publish}
       * @see {@link publishLast}
       * @see {@link publishBehavior}
       * @see {@link publishReplay}
       * @see {@link share}
       * @see {@link shareReplay}
       *
       * @param {Function|Subject} subjectOrSubjectFactory - Factory function to create an intermediate Subject through
       * which the source sequence's elements will be multicast to the selector function input Observable or
       * ConnectableObservable returned by the operator.
       * @param {Function} [selector] - Optional selector function that can use the input stream
       * as many times as needed, without causing multiple subscriptions to the source stream.
       * Subscribers to the input source will receive all notifications of the source from the
       * time of the subscription forward.
       * @return {Observable<T>|ConnectableObservable<T>} An Observable that emits the results of invoking the selector
       * on the source stream or a special {@link ConnectableObservable}, if selector was not provided.
       *
       * @method multicast
       * @owner Observable
       */


      function multicast(subjectOrSubjectFactory, selector) {
        return operators_1.multicast(subjectOrSubjectFactory, selector)(this);
      }

      exports.multicast = multicast; //# sourceMappingURL=multicast.js.map

      /***/
    },

    /***/
    "ZHpM":
    /*!***************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/take.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function ZHpM(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Emits only the first `count` values emitted by the source Observable.
       *
       * <span class="informal">Takes the first `count` values from the source, then
       * completes.</span>
       *
       * <img src="./img/take.png" width="100%">
       *
       * `take` returns an Observable that emits only the first `count` values emitted
       * by the source Observable. If the source emits fewer than `count` values then
       * all of its values are emitted. After that, it completes, regardless if the
       * source completes.
       *
       * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
       * var interval = Rx.Observable.interval(1000);
       * var five = interval.take(5);
       * five.subscribe(x => console.log(x));
       *
       * @see {@link takeLast}
       * @see {@link takeUntil}
       * @see {@link takeWhile}
       * @see {@link skip}
       *
       * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
       * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
       *
       * @param {number} count The maximum number of `next` values to emit.
       * @return {Observable<T>} An Observable that emits only the first `count`
       * values emitted by the source Observable, or all of the values from the source
       * if the source emits fewer than `count` values.
       * @method take
       * @owner Observable
       */


      function take(count) {
        return operators_1.take(count)(this);
      }

      exports.take = take; //# sourceMappingURL=take.js.map

      /***/
    },

    /***/
    "ZOsW":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js ***!
      \****************************************************************************************/

    /*! exports provided: NgSelectComponent, NgSelectConfig, NgSelectModule, SELECTION_MODEL_FACTORY, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs */

    /***/
    function ZOsW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgSelectComponent", function () {
        return NgSelectComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgSelectConfig", function () {
        return NgSelectConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgSelectModule", function () {
        return NgSelectModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SELECTION_MODEL_FACTORY", function () {
        return SELECTION_MODEL_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return DefaultSelectionModelFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return DefaultSelectionModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return NgDropdownPanelService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵe", function () {
        return NgItemLabelDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵf", function () {
        return NgOptionTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵg", function () {
        return NgOptgroupTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵh", function () {
        return NgLabelTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵi", function () {
        return NgMultiLabelTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵj", function () {
        return NgHeaderTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵk", function () {
        return NgFooterTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵl", function () {
        return NgNotFoundTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵm", function () {
        return NgTypeToSearchTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵn", function () {
        return NgLoadingTextTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵo", function () {
        return NgTagTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵp", function () {
        return NgLoadingSpinnerTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵq", function () {
        return NgDropdownPanelComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵr", function () {
        return NgOptionComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵs", function () {
        return ConsoleService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var _c0 = ["content"];
      var _c1 = ["scroll"];
      var _c2 = ["padding"];

      var _c3 = function _c3(a0) {
        return {
          searchTerm: a0
        };
      };

      function NgDropdownPanelComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r0.filterValue));
        }
      }

      function NgDropdownPanelComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r4.filterValue));
        }
      }

      var _c4 = ["*"];
      var _c5 = ["searchInput"];

      function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.unselect(item_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 16);
        }

        if (rf & 2) {
          var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r7.label)("escape", ctx_r9.escapeHTML);
        }
      }

      function NgSelectComponent_ng_container_4_div_1_ng_template_3_Template(rf, ctx) {}

      var _c6 = function _c6(a0, a1, a2) {
        return {
          item: a0,
          clear: a1,
          label: a2
        };
      };

      function NgSelectComponent_ng_container_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_ng_template_1_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_4_div_1_ng_template_3_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-value-disabled", item_r7.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.labelTemplate || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c6, item_r7.value, ctx_r6.clearItem, item_r7.label));
        }
      }

      function NgSelectComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_Template, 4, 8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedItems)("ngForTrackBy", ctx_r0.trackByOption);
        }
      }

      function NgSelectComponent_5_ng_template_0_Template(rf, ctx) {}

      var _c7 = function _c7(a0, a1) {
        return {
          items: a0,
          clear: a1
        };
      };

      function NgSelectComponent_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_5_ng_template_0_Template, 0, 0, "ng-template", 14);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.multiLabelTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c7, ctx_r1.selectedValues, ctx_r1.clearItem));
        }
      }

      function NgSelectComponent_ng_container_9_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
        }
      }

      function NgSelectComponent_ng_container_9_ng_template_3_Template(rf, ctx) {}

      function NgSelectComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_9_ng_template_1_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_9_ng_template_3_Template, 0, 0, "ng-template", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.loadingSpinnerTemplate || _r16);
        }
      }

      function NgSelectComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r4.clearAllText);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
        }

        if (rf & 2) {
          var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r24.label)("escape", ctx_r26.escapeHTML);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template(rf, ctx) {}

      var _c8 = function _c8(a0, a1, a2, a3) {
        return {
          item: a0,
          item$: a1,
          index: a2,
          searchTerm: a3
        };
      };

      function NgSelectComponent_ng_dropdown_panel_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var item_r24 = ctx.$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r29.toggleItem(item_r24);
          })("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_mouseover_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var item_r24 = ctx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r31.onItemHover(item_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r24 = ctx.$implicit;

          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-disabled", item_r24.disabled)("ng-option-selected", item_r24.selected)("ng-optgroup", item_r24.children)("ng-option", !item_r24.children)("ng-option-child", !!item_r24.parent)("ng-option-marked", item_r24 === ctx_r19.itemsList.markedItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", item_r24.children ? "group" : "option")("aria-selected", item_r24.selected)("id", item_r24 == null ? null : item_r24.htmlId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r24.children ? ctx_r19.optgroupTemplate || _r25 : ctx_r19.optionTemplate || _r25)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](17, _c8, item_r24.value, item_r24, item_r24.index, ctx_r19.searchTerm));
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.addTagText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r33.searchTerm, "\"");
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template(rf, ctx) {}

      function NgSelectComponent_ng_dropdown_panel_13_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_mouseover_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r35.itemsList.unmarkItem();
          })("click", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r37.selectTag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template, 4, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-marked", !ctx_r20.itemsList.markedItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.tagTemplate || _r32)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r20.searchTerm));
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.notFoundText);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template(rf, ctx) {}

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r21.notFoundTemplate || _r38)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r21.searchTerm));
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.typeToSearchText);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template(rf, ctx) {}

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template, 0, 0, "ng-template", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.typeToSearchTemplate || _r41);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.loadingText);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template(rf, ctx) {}

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template, 2, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.loadingTextTemplate || _r44)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r23.searchTerm));
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-dropdown-panel", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_update_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.viewPortItems = $event;
          })("scroll", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scroll_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r49.scroll.emit($event);
          })("scrollToEnd", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r50.scrollToEnd.emit($event);
          })("outsideClick", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_outsideClick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r51.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgSelectComponent_ng_dropdown_panel_13_div_2_Template, 4, 22, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_Template, 4, 6, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template, 4, 4, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template, 4, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template, 4, 4, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-multiple", ctx_r5.multiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("virtualScroll", ctx_r5.virtualScroll)("bufferAmount", ctx_r5.bufferAmount)("appendTo", ctx_r5.appendTo)("position", ctx_r5.dropdownPosition)("headerTemplate", ctx_r5.headerTemplate)("footerTemplate", ctx_r5.footerTemplate)("filterValue", ctx_r5.searchTerm)("items", ctx_r5.itemsList.filteredItems)("markedItem", ctx_r5.itemsList.markedItem)("ngClass", ctx_r5.appendTo ? ctx_r5.classes : null)("id", ctx_r5.dropdownId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.viewPortItems)("ngForTrackBy", ctx_r5.trackByOption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showAddTag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showNoItemsFound());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showTypeToSearch());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loading && ctx_r5.itemsList.filteredItems.length === 0);
        }
      }

      var unescapedHTMLExp = /[&<>"']/g;
      /** @type {?} */

      var hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
      /** @type {?} */

      var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;'
      };
      /**
       * @param {?} string
       * @return {?}
       */

      function escapeHTML(string) {
        return string && hasUnescapedHTMLExp.test(string) ? string.replace(unescapedHTMLExp,
        /**
        * @param {?} chr
        * @return {?}
        */
        function (chr) {
          return htmlEscapes[chr];
        }) : string;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function isDefined(value) {
        return value !== undefined && value !== null;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function isObject(value) {
        return typeof value === 'object' && isDefined(value);
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function isPromise(value) {
        return value instanceof Promise;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function isFunction(value) {
        return value instanceof Function;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgItemLabelDirective = /*#__PURE__*/function () {
        /**
         * @param {?} element
         */
        function NgItemLabelDirective(element) {
          _classCallCheck(this, NgItemLabelDirective);

          this.element = element;
          this.escape = true;
        }
        /**
         * @param {?} changes
         * @return {?}
         */


        _createClass(NgItemLabelDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.element.nativeElement.innerHTML = this.escape ? escapeHTML(this.ngItemLabel) : this.ngItemLabel;
          }
        }]);

        return NgItemLabelDirective;
      }();

      NgItemLabelDirective.ɵfac = function NgItemLabelDirective_Factory(t) {
        return new (t || NgItemLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NgItemLabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgItemLabelDirective,
        selectors: [["", "ngItemLabel", ""]],
        inputs: {
          escape: "escape",
          ngItemLabel: "ngItemLabel"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      NgItemLabelDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      NgItemLabelDirective.propDecorators = {
        ngItemLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        escape: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgItemLabelDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ngItemLabel]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ngItemLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}

      var NgOptionTemplateDirective =
      /**
       * @param {?} template
       */
      function NgOptionTemplateDirective(template) {
        _classCallCheck(this, NgOptionTemplateDirective);

        this.template = template;
      };

      NgOptionTemplateDirective.ɵfac = function NgOptionTemplateDirective_Factory(t) {
        return new (t || NgOptionTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      NgOptionTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgOptionTemplateDirective,
        selectors: [["", "ng-option-tmp", ""]]
      });
      /** @nocollapse */

      NgOptionTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng-option-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, null);
      })();

      if (false) {}

      var NgOptgroupTemplateDirective =
      /**
       * @param {?} template
       */
      function NgOptgroupTemplateDirective(template) {
        _classCallCheck(this, NgOptgroupTemplateDirective);

        this.template = template;
      };

      NgOptgroupTemplateDirective.ɵfac = function NgOptgroupTemplateDirective_Factory(t) {
        return new (t || NgOptgroupTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      NgOptgroupTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgOptgroupTemplateDirective,
        selectors: [["", "ng-optgroup-tmp", ""]]
      });
      /** @nocollapse */

      NgOptgroupTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptgroupTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng-optgroup-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, null);
      })();

      if (false) {}

      var NgLabelTemplateDirective =
      /**
       * @param {?} template
       */
      function NgLabelTemplateDirective(template) {
        _classCallCheck(this, NgLabelTemplateDirective);

        this.template = template;
      };

      NgLabelTemplateDirective.ɵfac = function NgLabelTemplateDirective_Factory(t) {
        return new (t || NgLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      NgLabelTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgLabelTemplateDirective,
        selectors: [["", "ng-label-tmp", ""]]
      });
      /** @nocollapse */

      NgLabelTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLabelTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng-label-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, null);
      })();

      if (false) {}

      var NgMultiLabelTemplateDirective =
      /**
       * @param {?} template
       */
      function NgMultiLabelTemplateDirective(template) {
        _classCallCheck(this, NgMultiLabelTemplateDirective);

        this.template = template;
      };

      NgMultiLabelTemplateDirective.ɵfac = function NgMultiLabelTemplateDirective_Factory(t) {
        return new (t || NgMultiLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      NgMultiLabelTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgMultiLabelTemplateDirective,
        selectors: [["", "ng-multi-label-tmp", ""]]
      });
      /** @nocollapse */

      NgMultiLabelTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMultiLabelTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng-multi-label-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, null);
      })();

      if (false) {}

      var NgHeaderTemplateDirective =
      /**
       * @param {?} template
       */
      function NgHeaderTemplateDirective(template) {
        _classCallCheck(this, NgHeaderTemplateDirective);

        this.template = template;
      };

      NgHeaderTemplateDirective.ɵfac = function NgHeaderTemplateDirective_Factory(t) {
        return new (t || NgHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      NgHeaderTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgHeaderTemplateDirective,
        selectors: [["", "ng-header-tmp", ""]]
      });
      /** @nocollapse */

      NgHeaderTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgHeaderTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng-header-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, null);
      })();

      if (false) {}

      var NgFooterTemplateDirective =
      /**
       * @param {?} template
       */
      function NgFooterTemplateDirective(template) {
        _classCallCheck(this, NgFooterTemplateDirective);

        this.template = template;
      };

      NgFooterTemplateDirective.ɵfac = function NgFooterTemplateDirective_Factory(t) {
        return new (t || NgFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      NgFooterTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgFooterTemplateDirective,
        selectors: [["", "ng-footer-tmp", ""]]
      });
      /** @nocollapse */

      NgFooterTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgFooterTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng-footer-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, null);
      })();

      if (false) {}

      var NgNotFoundTemplateDirective =
      /**
       * @param {?} template
       */
      function NgNotFoundTemplateDirective(template) {
        _classCallCheck(this, NgNotFoundTemplateDirective);

        this.template = template;
      };

      NgNotFoundTemplateDirective.ɵfac = function NgNotFoundTemplateDirective_Factory(t) {
        return new (t || NgNotFoundTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      NgNotFoundTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgNotFoundTemplateDirective,
        selectors: [["", "ng-notfound-tmp", ""]]
      });
      /** @nocollapse */

      NgNotFoundTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgNotFoundTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng-notfound-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, null);
      })();

      if (false) {}

      var NgTypeToSearchTemplateDirective =
      /**
       * @param {?} template
       */
      function NgTypeToSearchTemplateDirective(template) {
        _classCallCheck(this, NgTypeToSearchTemplateDirective);

        this.template = template;
      };

      NgTypeToSearchTemplateDirective.ɵfac = function NgTypeToSearchTemplateDirective_Factory(t) {
        return new (t || NgTypeToSearchTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      NgTypeToSearchTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgTypeToSearchTemplateDirective,
        selectors: [["", "ng-typetosearch-tmp", ""]]
      });
      /** @nocollapse */

      NgTypeToSearchTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTypeToSearchTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng-typetosearch-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, null);
      })();

      if (false) {}

      var NgLoadingTextTemplateDirective =
      /**
       * @param {?} template
       */
      function NgLoadingTextTemplateDirective(template) {
        _classCallCheck(this, NgLoadingTextTemplateDirective);

        this.template = template;
      };

      NgLoadingTextTemplateDirective.ɵfac = function NgLoadingTextTemplateDirective_Factory(t) {
        return new (t || NgLoadingTextTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      NgLoadingTextTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgLoadingTextTemplateDirective,
        selectors: [["", "ng-loadingtext-tmp", ""]]
      });
      /** @nocollapse */

      NgLoadingTextTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingTextTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng-loadingtext-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, null);
      })();

      if (false) {}

      var NgTagTemplateDirective =
      /**
       * @param {?} template
       */
      function NgTagTemplateDirective(template) {
        _classCallCheck(this, NgTagTemplateDirective);

        this.template = template;
      };

      NgTagTemplateDirective.ɵfac = function NgTagTemplateDirective_Factory(t) {
        return new (t || NgTagTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      NgTagTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgTagTemplateDirective,
        selectors: [["", "ng-tag-tmp", ""]]
      });
      /** @nocollapse */

      NgTagTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTagTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng-tag-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, null);
      })();

      if (false) {}

      var NgLoadingSpinnerTemplateDirective =
      /**
       * @param {?} template
       */
      function NgLoadingSpinnerTemplateDirective(template) {
        _classCallCheck(this, NgLoadingSpinnerTemplateDirective);

        this.template = template;
      };

      NgLoadingSpinnerTemplateDirective.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(t) {
        return new (t || NgLoadingSpinnerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      NgLoadingSpinnerTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgLoadingSpinnerTemplateDirective,
        selectors: [["", "ng-loadingspinner-tmp", ""]]
      });
      /** @nocollapse */

      NgLoadingSpinnerTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingSpinnerTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng-loadingspinner-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ConsoleService = /*#__PURE__*/function () {
        function ConsoleService() {
          _classCallCheck(this, ConsoleService);
        }

        _createClass(ConsoleService, [{
          key: "warn",
          value:
          /**
           * @param {?} message
           * @return {?}
           */
          function warn(message) {
            console.warn(message);
          }
        }]);

        return ConsoleService;
      }();

      ConsoleService.ɵfac = function ConsoleService_Factory(t) {
        return new (t || ConsoleService)();
      };

      ConsoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ConsoleService,
        factory: ConsoleService.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      ConsoleService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ConsoleService_Factory() {
          return new ConsoleService();
        },
        token: ConsoleService,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsoleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @return {?}
       */


      function newId() {
        // First character is an 'a', it's good practice to tag id to begin with a letter
        return 'axxxxxxxxxxx'.replace(/[x]/g,
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {
          // tslint:disable-next-line:no-bitwise

          /** @type {?} */
          var val = Math.random() * 16 | 0;
          return val.toString(16);
        });
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var diacritics = {
        "\u24B6": 'A',
        "\uFF21": 'A',
        "\xC0": 'A',
        "\xC1": 'A',
        "\xC2": 'A',
        "\u1EA6": 'A',
        "\u1EA4": 'A',
        "\u1EAA": 'A',
        "\u1EA8": 'A',
        "\xC3": 'A',
        "\u0100": 'A',
        "\u0102": 'A',
        "\u1EB0": 'A',
        "\u1EAE": 'A',
        "\u1EB4": 'A',
        "\u1EB2": 'A',
        "\u0226": 'A',
        "\u01E0": 'A',
        "\xC4": 'A',
        "\u01DE": 'A',
        "\u1EA2": 'A',
        "\xC5": 'A',
        "\u01FA": 'A',
        "\u01CD": 'A',
        "\u0200": 'A',
        "\u0202": 'A',
        "\u1EA0": 'A',
        "\u1EAC": 'A',
        "\u1EB6": 'A',
        "\u1E00": 'A',
        "\u0104": 'A',
        "\u023A": 'A',
        "\u2C6F": 'A',
        "\uA732": 'AA',
        "\xC6": 'AE',
        "\u01FC": 'AE',
        "\u01E2": 'AE',
        "\uA734": 'AO',
        "\uA736": 'AU',
        "\uA738": 'AV',
        "\uA73A": 'AV',
        "\uA73C": 'AY',
        "\u24B7": 'B',
        "\uFF22": 'B',
        "\u1E02": 'B',
        "\u1E04": 'B',
        "\u1E06": 'B',
        "\u0243": 'B',
        "\u0182": 'B',
        "\u0181": 'B',
        "\u24B8": 'C',
        "\uFF23": 'C',
        "\u0106": 'C',
        "\u0108": 'C',
        "\u010A": 'C',
        "\u010C": 'C',
        "\xC7": 'C',
        "\u1E08": 'C',
        "\u0187": 'C',
        "\u023B": 'C',
        "\uA73E": 'C',
        "\u24B9": 'D',
        "\uFF24": 'D',
        "\u1E0A": 'D',
        "\u010E": 'D',
        "\u1E0C": 'D',
        "\u1E10": 'D',
        "\u1E12": 'D',
        "\u1E0E": 'D',
        "\u0110": 'D',
        "\u018B": 'D',
        "\u018A": 'D',
        "\u0189": 'D',
        "\uA779": 'D',
        "\u01F1": 'DZ',
        "\u01C4": 'DZ',
        "\u01F2": 'Dz',
        "\u01C5": 'Dz',
        "\u24BA": 'E',
        "\uFF25": 'E',
        "\xC8": 'E',
        "\xC9": 'E',
        "\xCA": 'E',
        "\u1EC0": 'E',
        "\u1EBE": 'E',
        "\u1EC4": 'E',
        "\u1EC2": 'E',
        "\u1EBC": 'E',
        "\u0112": 'E',
        "\u1E14": 'E',
        "\u1E16": 'E',
        "\u0114": 'E',
        "\u0116": 'E',
        "\xCB": 'E',
        "\u1EBA": 'E',
        "\u011A": 'E',
        "\u0204": 'E',
        "\u0206": 'E',
        "\u1EB8": 'E',
        "\u1EC6": 'E',
        "\u0228": 'E',
        "\u1E1C": 'E',
        "\u0118": 'E',
        "\u1E18": 'E',
        "\u1E1A": 'E',
        "\u0190": 'E',
        "\u018E": 'E',
        "\u24BB": 'F',
        "\uFF26": 'F',
        "\u1E1E": 'F',
        "\u0191": 'F',
        "\uA77B": 'F',
        "\u24BC": 'G',
        "\uFF27": 'G',
        "\u01F4": 'G',
        "\u011C": 'G',
        "\u1E20": 'G',
        "\u011E": 'G',
        "\u0120": 'G',
        "\u01E6": 'G',
        "\u0122": 'G',
        "\u01E4": 'G',
        "\u0193": 'G',
        "\uA7A0": 'G',
        "\uA77D": 'G',
        "\uA77E": 'G',
        "\u24BD": 'H',
        "\uFF28": 'H',
        "\u0124": 'H',
        "\u1E22": 'H',
        "\u1E26": 'H',
        "\u021E": 'H',
        "\u1E24": 'H',
        "\u1E28": 'H',
        "\u1E2A": 'H',
        "\u0126": 'H',
        "\u2C67": 'H',
        "\u2C75": 'H',
        "\uA78D": 'H',
        "\u24BE": 'I',
        "\uFF29": 'I',
        "\xCC": 'I',
        "\xCD": 'I',
        "\xCE": 'I',
        "\u0128": 'I',
        "\u012A": 'I',
        "\u012C": 'I',
        "\u0130": 'I',
        "\xCF": 'I',
        "\u1E2E": 'I',
        "\u1EC8": 'I',
        "\u01CF": 'I',
        "\u0208": 'I',
        "\u020A": 'I',
        "\u1ECA": 'I',
        "\u012E": 'I',
        "\u1E2C": 'I',
        "\u0197": 'I',
        "\u24BF": 'J',
        "\uFF2A": 'J',
        "\u0134": 'J',
        "\u0248": 'J',
        "\u24C0": 'K',
        "\uFF2B": 'K',
        "\u1E30": 'K',
        "\u01E8": 'K',
        "\u1E32": 'K',
        "\u0136": 'K',
        "\u1E34": 'K',
        "\u0198": 'K',
        "\u2C69": 'K',
        "\uA740": 'K',
        "\uA742": 'K',
        "\uA744": 'K',
        "\uA7A2": 'K',
        "\u24C1": 'L',
        "\uFF2C": 'L',
        "\u013F": 'L',
        "\u0139": 'L',
        "\u013D": 'L',
        "\u1E36": 'L',
        "\u1E38": 'L',
        "\u013B": 'L',
        "\u1E3C": 'L',
        "\u1E3A": 'L',
        "\u0141": 'L',
        "\u023D": 'L',
        "\u2C62": 'L',
        "\u2C60": 'L',
        "\uA748": 'L',
        "\uA746": 'L',
        "\uA780": 'L',
        "\u01C7": 'LJ',
        "\u01C8": 'Lj',
        "\u24C2": 'M',
        "\uFF2D": 'M',
        "\u1E3E": 'M',
        "\u1E40": 'M',
        "\u1E42": 'M',
        "\u2C6E": 'M',
        "\u019C": 'M',
        "\u24C3": 'N',
        "\uFF2E": 'N',
        "\u01F8": 'N',
        "\u0143": 'N',
        "\xD1": 'N',
        "\u1E44": 'N',
        "\u0147": 'N',
        "\u1E46": 'N',
        "\u0145": 'N',
        "\u1E4A": 'N',
        "\u1E48": 'N',
        "\u0220": 'N',
        "\u019D": 'N',
        "\uA790": 'N',
        "\uA7A4": 'N',
        "\u01CA": 'NJ',
        "\u01CB": 'Nj',
        "\u24C4": 'O',
        "\uFF2F": 'O',
        "\xD2": 'O',
        "\xD3": 'O',
        "\xD4": 'O',
        "\u1ED2": 'O',
        "\u1ED0": 'O',
        "\u1ED6": 'O',
        "\u1ED4": 'O',
        "\xD5": 'O',
        "\u1E4C": 'O',
        "\u022C": 'O',
        "\u1E4E": 'O',
        "\u014C": 'O',
        "\u1E50": 'O',
        "\u1E52": 'O',
        "\u014E": 'O',
        "\u022E": 'O',
        "\u0230": 'O',
        "\xD6": 'O',
        "\u022A": 'O',
        "\u1ECE": 'O',
        "\u0150": 'O',
        "\u01D1": 'O',
        "\u020C": 'O',
        "\u020E": 'O',
        "\u01A0": 'O',
        "\u1EDC": 'O',
        "\u1EDA": 'O',
        "\u1EE0": 'O',
        "\u1EDE": 'O',
        "\u1EE2": 'O',
        "\u1ECC": 'O',
        "\u1ED8": 'O',
        "\u01EA": 'O',
        "\u01EC": 'O',
        "\xD8": 'O',
        "\u01FE": 'O',
        "\u0186": 'O',
        "\u019F": 'O',
        "\uA74A": 'O',
        "\uA74C": 'O',
        "\u01A2": 'OI',
        "\uA74E": 'OO',
        "\u0222": 'OU',
        "\u24C5": 'P',
        "\uFF30": 'P',
        "\u1E54": 'P',
        "\u1E56": 'P',
        "\u01A4": 'P',
        "\u2C63": 'P',
        "\uA750": 'P',
        "\uA752": 'P',
        "\uA754": 'P',
        "\u24C6": 'Q',
        "\uFF31": 'Q',
        "\uA756": 'Q',
        "\uA758": 'Q',
        "\u024A": 'Q',
        "\u24C7": 'R',
        "\uFF32": 'R',
        "\u0154": 'R',
        "\u1E58": 'R',
        "\u0158": 'R',
        "\u0210": 'R',
        "\u0212": 'R',
        "\u1E5A": 'R',
        "\u1E5C": 'R',
        "\u0156": 'R',
        "\u1E5E": 'R',
        "\u024C": 'R',
        "\u2C64": 'R',
        "\uA75A": 'R',
        "\uA7A6": 'R',
        "\uA782": 'R',
        "\u24C8": 'S',
        "\uFF33": 'S',
        "\u1E9E": 'S',
        "\u015A": 'S',
        "\u1E64": 'S',
        "\u015C": 'S',
        "\u1E60": 'S',
        "\u0160": 'S',
        "\u1E66": 'S',
        "\u1E62": 'S',
        "\u1E68": 'S',
        "\u0218": 'S',
        "\u015E": 'S',
        "\u2C7E": 'S',
        "\uA7A8": 'S',
        "\uA784": 'S',
        "\u24C9": 'T',
        "\uFF34": 'T',
        "\u1E6A": 'T',
        "\u0164": 'T',
        "\u1E6C": 'T',
        "\u021A": 'T',
        "\u0162": 'T',
        "\u1E70": 'T',
        "\u1E6E": 'T',
        "\u0166": 'T',
        "\u01AC": 'T',
        "\u01AE": 'T',
        "\u023E": 'T',
        "\uA786": 'T',
        "\uA728": 'TZ',
        "\u24CA": 'U',
        "\uFF35": 'U',
        "\xD9": 'U',
        "\xDA": 'U',
        "\xDB": 'U',
        "\u0168": 'U',
        "\u1E78": 'U',
        "\u016A": 'U',
        "\u1E7A": 'U',
        "\u016C": 'U',
        "\xDC": 'U',
        "\u01DB": 'U',
        "\u01D7": 'U',
        "\u01D5": 'U',
        "\u01D9": 'U',
        "\u1EE6": 'U',
        "\u016E": 'U',
        "\u0170": 'U',
        "\u01D3": 'U',
        "\u0214": 'U',
        "\u0216": 'U',
        "\u01AF": 'U',
        "\u1EEA": 'U',
        "\u1EE8": 'U',
        "\u1EEE": 'U',
        "\u1EEC": 'U',
        "\u1EF0": 'U',
        "\u1EE4": 'U',
        "\u1E72": 'U',
        "\u0172": 'U',
        "\u1E76": 'U',
        "\u1E74": 'U',
        "\u0244": 'U',
        "\u24CB": 'V',
        "\uFF36": 'V',
        "\u1E7C": 'V',
        "\u1E7E": 'V',
        "\u01B2": 'V',
        "\uA75E": 'V',
        "\u0245": 'V',
        "\uA760": 'VY',
        "\u24CC": 'W',
        "\uFF37": 'W',
        "\u1E80": 'W',
        "\u1E82": 'W',
        "\u0174": 'W',
        "\u1E86": 'W',
        "\u1E84": 'W',
        "\u1E88": 'W',
        "\u2C72": 'W',
        "\u24CD": 'X',
        "\uFF38": 'X',
        "\u1E8A": 'X',
        "\u1E8C": 'X',
        "\u24CE": 'Y',
        "\uFF39": 'Y',
        "\u1EF2": 'Y',
        "\xDD": 'Y',
        "\u0176": 'Y',
        "\u1EF8": 'Y',
        "\u0232": 'Y',
        "\u1E8E": 'Y',
        "\u0178": 'Y',
        "\u1EF6": 'Y',
        "\u1EF4": 'Y',
        "\u01B3": 'Y',
        "\u024E": 'Y',
        "\u1EFE": 'Y',
        "\u24CF": 'Z',
        "\uFF3A": 'Z',
        "\u0179": 'Z',
        "\u1E90": 'Z',
        "\u017B": 'Z',
        "\u017D": 'Z',
        "\u1E92": 'Z',
        "\u1E94": 'Z',
        "\u01B5": 'Z',
        "\u0224": 'Z',
        "\u2C7F": 'Z',
        "\u2C6B": 'Z',
        "\uA762": 'Z',
        "\u24D0": 'a',
        "\uFF41": 'a',
        "\u1E9A": 'a',
        "\xE0": 'a',
        "\xE1": 'a',
        "\xE2": 'a',
        "\u1EA7": 'a',
        "\u1EA5": 'a',
        "\u1EAB": 'a',
        "\u1EA9": 'a',
        "\xE3": 'a',
        "\u0101": 'a',
        "\u0103": 'a',
        "\u1EB1": 'a',
        "\u1EAF": 'a',
        "\u1EB5": 'a',
        "\u1EB3": 'a',
        "\u0227": 'a',
        "\u01E1": 'a',
        "\xE4": 'a',
        "\u01DF": 'a',
        "\u1EA3": 'a',
        "\xE5": 'a',
        "\u01FB": 'a',
        "\u01CE": 'a',
        "\u0201": 'a',
        "\u0203": 'a',
        "\u1EA1": 'a',
        "\u1EAD": 'a',
        "\u1EB7": 'a',
        "\u1E01": 'a',
        "\u0105": 'a',
        "\u2C65": 'a',
        "\u0250": 'a',
        "\uA733": 'aa',
        "\xE6": 'ae',
        "\u01FD": 'ae',
        "\u01E3": 'ae',
        "\uA735": 'ao',
        "\uA737": 'au',
        "\uA739": 'av',
        "\uA73B": 'av',
        "\uA73D": 'ay',
        "\u24D1": 'b',
        "\uFF42": 'b',
        "\u1E03": 'b',
        "\u1E05": 'b',
        "\u1E07": 'b',
        "\u0180": 'b',
        "\u0183": 'b',
        "\u0253": 'b',
        "\u24D2": 'c',
        "\uFF43": 'c',
        "\u0107": 'c',
        "\u0109": 'c',
        "\u010B": 'c',
        "\u010D": 'c',
        "\xE7": 'c',
        "\u1E09": 'c',
        "\u0188": 'c',
        "\u023C": 'c',
        "\uA73F": 'c',
        "\u2184": 'c',
        "\u24D3": 'd',
        "\uFF44": 'd',
        "\u1E0B": 'd',
        "\u010F": 'd',
        "\u1E0D": 'd',
        "\u1E11": 'd',
        "\u1E13": 'd',
        "\u1E0F": 'd',
        "\u0111": 'd',
        "\u018C": 'd',
        "\u0256": 'd',
        "\u0257": 'd',
        "\uA77A": 'd',
        "\u01F3": 'dz',
        "\u01C6": 'dz',
        "\u24D4": 'e',
        "\uFF45": 'e',
        "\xE8": 'e',
        "\xE9": 'e',
        "\xEA": 'e',
        "\u1EC1": 'e',
        "\u1EBF": 'e',
        "\u1EC5": 'e',
        "\u1EC3": 'e',
        "\u1EBD": 'e',
        "\u0113": 'e',
        "\u1E15": 'e',
        "\u1E17": 'e',
        "\u0115": 'e',
        "\u0117": 'e',
        "\xEB": 'e',
        "\u1EBB": 'e',
        "\u011B": 'e',
        "\u0205": 'e',
        "\u0207": 'e',
        "\u1EB9": 'e',
        "\u1EC7": 'e',
        "\u0229": 'e',
        "\u1E1D": 'e',
        "\u0119": 'e',
        "\u1E19": 'e',
        "\u1E1B": 'e',
        "\u0247": 'e',
        "\u025B": 'e',
        "\u01DD": 'e',
        "\u24D5": 'f',
        "\uFF46": 'f',
        "\u1E1F": 'f',
        "\u0192": 'f',
        "\uA77C": 'f',
        "\u24D6": 'g',
        "\uFF47": 'g',
        "\u01F5": 'g',
        "\u011D": 'g',
        "\u1E21": 'g',
        "\u011F": 'g',
        "\u0121": 'g',
        "\u01E7": 'g',
        "\u0123": 'g',
        "\u01E5": 'g',
        "\u0260": 'g',
        "\uA7A1": 'g',
        "\u1D79": 'g',
        "\uA77F": 'g',
        "\u24D7": 'h',
        "\uFF48": 'h',
        "\u0125": 'h',
        "\u1E23": 'h',
        "\u1E27": 'h',
        "\u021F": 'h',
        "\u1E25": 'h',
        "\u1E29": 'h',
        "\u1E2B": 'h',
        "\u1E96": 'h',
        "\u0127": 'h',
        "\u2C68": 'h',
        "\u2C76": 'h',
        "\u0265": 'h',
        "\u0195": 'hv',
        "\u24D8": 'i',
        "\uFF49": 'i',
        "\xEC": 'i',
        "\xED": 'i',
        "\xEE": 'i',
        "\u0129": 'i',
        "\u012B": 'i',
        "\u012D": 'i',
        "\xEF": 'i',
        "\u1E2F": 'i',
        "\u1EC9": 'i',
        "\u01D0": 'i',
        "\u0209": 'i',
        "\u020B": 'i',
        "\u1ECB": 'i',
        "\u012F": 'i',
        "\u1E2D": 'i',
        "\u0268": 'i',
        "\u0131": 'i',
        "\u24D9": 'j',
        "\uFF4A": 'j',
        "\u0135": 'j',
        "\u01F0": 'j',
        "\u0249": 'j',
        "\u24DA": 'k',
        "\uFF4B": 'k',
        "\u1E31": 'k',
        "\u01E9": 'k',
        "\u1E33": 'k',
        "\u0137": 'k',
        "\u1E35": 'k',
        "\u0199": 'k',
        "\u2C6A": 'k',
        "\uA741": 'k',
        "\uA743": 'k',
        "\uA745": 'k',
        "\uA7A3": 'k',
        "\u24DB": 'l',
        "\uFF4C": 'l',
        "\u0140": 'l',
        "\u013A": 'l',
        "\u013E": 'l',
        "\u1E37": 'l',
        "\u1E39": 'l',
        "\u013C": 'l',
        "\u1E3D": 'l',
        "\u1E3B": 'l',
        "\u017F": 'l',
        "\u0142": 'l',
        "\u019A": 'l',
        "\u026B": 'l',
        "\u2C61": 'l',
        "\uA749": 'l',
        "\uA781": 'l',
        "\uA747": 'l',
        "\u01C9": 'lj',
        "\u24DC": 'm',
        "\uFF4D": 'm',
        "\u1E3F": 'm',
        "\u1E41": 'm',
        "\u1E43": 'm',
        "\u0271": 'm',
        "\u026F": 'm',
        "\u24DD": 'n',
        "\uFF4E": 'n',
        "\u01F9": 'n',
        "\u0144": 'n',
        "\xF1": 'n',
        "\u1E45": 'n',
        "\u0148": 'n',
        "\u1E47": 'n',
        "\u0146": 'n',
        "\u1E4B": 'n',
        "\u1E49": 'n',
        "\u019E": 'n',
        "\u0272": 'n',
        "\u0149": 'n',
        "\uA791": 'n',
        "\uA7A5": 'n',
        "\u01CC": 'nj',
        "\u24DE": 'o',
        "\uFF4F": 'o',
        "\xF2": 'o',
        "\xF3": 'o',
        "\xF4": 'o',
        "\u1ED3": 'o',
        "\u1ED1": 'o',
        "\u1ED7": 'o',
        "\u1ED5": 'o',
        "\xF5": 'o',
        "\u1E4D": 'o',
        "\u022D": 'o',
        "\u1E4F": 'o',
        "\u014D": 'o',
        "\u1E51": 'o',
        "\u1E53": 'o',
        "\u014F": 'o',
        "\u022F": 'o',
        "\u0231": 'o',
        "\xF6": 'o',
        "\u022B": 'o',
        "\u1ECF": 'o',
        "\u0151": 'o',
        "\u01D2": 'o',
        "\u020D": 'o',
        "\u020F": 'o',
        "\u01A1": 'o',
        "\u1EDD": 'o',
        "\u1EDB": 'o',
        "\u1EE1": 'o',
        "\u1EDF": 'o',
        "\u1EE3": 'o',
        "\u1ECD": 'o',
        "\u1ED9": 'o',
        "\u01EB": 'o',
        "\u01ED": 'o',
        "\xF8": 'o',
        "\u01FF": 'o',
        "\u0254": 'o',
        "\uA74B": 'o',
        "\uA74D": 'o',
        "\u0275": 'o',
        "\u01A3": 'oi',
        "\u0223": 'ou',
        "\uA74F": 'oo',
        "\u24DF": 'p',
        "\uFF50": 'p',
        "\u1E55": 'p',
        "\u1E57": 'p',
        "\u01A5": 'p',
        "\u1D7D": 'p',
        "\uA751": 'p',
        "\uA753": 'p',
        "\uA755": 'p',
        "\u24E0": 'q',
        "\uFF51": 'q',
        "\u024B": 'q',
        "\uA757": 'q',
        "\uA759": 'q',
        "\u24E1": 'r',
        "\uFF52": 'r',
        "\u0155": 'r',
        "\u1E59": 'r',
        "\u0159": 'r',
        "\u0211": 'r',
        "\u0213": 'r',
        "\u1E5B": 'r',
        "\u1E5D": 'r',
        "\u0157": 'r',
        "\u1E5F": 'r',
        "\u024D": 'r',
        "\u027D": 'r',
        "\uA75B": 'r',
        "\uA7A7": 'r',
        "\uA783": 'r',
        "\u24E2": 's',
        "\uFF53": 's',
        "\xDF": 's',
        "\u015B": 's',
        "\u1E65": 's',
        "\u015D": 's',
        "\u1E61": 's',
        "\u0161": 's',
        "\u1E67": 's',
        "\u1E63": 's',
        "\u1E69": 's',
        "\u0219": 's',
        "\u015F": 's',
        "\u023F": 's',
        "\uA7A9": 's',
        "\uA785": 's',
        "\u1E9B": 's',
        "\u24E3": 't',
        "\uFF54": 't',
        "\u1E6B": 't',
        "\u1E97": 't',
        "\u0165": 't',
        "\u1E6D": 't',
        "\u021B": 't',
        "\u0163": 't',
        "\u1E71": 't',
        "\u1E6F": 't',
        "\u0167": 't',
        "\u01AD": 't',
        "\u0288": 't',
        "\u2C66": 't',
        "\uA787": 't',
        "\uA729": 'tz',
        "\u24E4": 'u',
        "\uFF55": 'u',
        "\xF9": 'u',
        "\xFA": 'u',
        "\xFB": 'u',
        "\u0169": 'u',
        "\u1E79": 'u',
        "\u016B": 'u',
        "\u1E7B": 'u',
        "\u016D": 'u',
        "\xFC": 'u',
        "\u01DC": 'u',
        "\u01D8": 'u',
        "\u01D6": 'u',
        "\u01DA": 'u',
        "\u1EE7": 'u',
        "\u016F": 'u',
        "\u0171": 'u',
        "\u01D4": 'u',
        "\u0215": 'u',
        "\u0217": 'u',
        "\u01B0": 'u',
        "\u1EEB": 'u',
        "\u1EE9": 'u',
        "\u1EEF": 'u',
        "\u1EED": 'u',
        "\u1EF1": 'u',
        "\u1EE5": 'u',
        "\u1E73": 'u',
        "\u0173": 'u',
        "\u1E77": 'u',
        "\u1E75": 'u',
        "\u0289": 'u',
        "\u24E5": 'v',
        "\uFF56": 'v',
        "\u1E7D": 'v',
        "\u1E7F": 'v',
        "\u028B": 'v',
        "\uA75F": 'v',
        "\u028C": 'v',
        "\uA761": 'vy',
        "\u24E6": 'w',
        "\uFF57": 'w',
        "\u1E81": 'w',
        "\u1E83": 'w',
        "\u0175": 'w',
        "\u1E87": 'w',
        "\u1E85": 'w',
        "\u1E98": 'w',
        "\u1E89": 'w',
        "\u2C73": 'w',
        "\u24E7": 'x',
        "\uFF58": 'x',
        "\u1E8B": 'x',
        "\u1E8D": 'x',
        "\u24E8": 'y',
        "\uFF59": 'y',
        "\u1EF3": 'y',
        "\xFD": 'y',
        "\u0177": 'y',
        "\u1EF9": 'y',
        "\u0233": 'y',
        "\u1E8F": 'y',
        "\xFF": 'y',
        "\u1EF7": 'y',
        "\u1E99": 'y',
        "\u1EF5": 'y',
        "\u01B4": 'y',
        "\u024F": 'y',
        "\u1EFF": 'y',
        "\u24E9": 'z',
        "\uFF5A": 'z',
        "\u017A": 'z',
        "\u1E91": 'z',
        "\u017C": 'z',
        "\u017E": 'z',
        "\u1E93": 'z',
        "\u1E95": 'z',
        "\u01B6": 'z',
        "\u0225": 'z',
        "\u0240": 'z',
        "\u2C6C": 'z',
        "\uA763": 'z',
        "\u0386": "\u0391",
        "\u0388": "\u0395",
        "\u0389": "\u0397",
        "\u038A": "\u0399",
        "\u03AA": "\u0399",
        "\u038C": "\u039F",
        "\u038E": "\u03A5",
        "\u03AB": "\u03A5",
        "\u038F": "\u03A9",
        "\u03AC": "\u03B1",
        "\u03AD": "\u03B5",
        "\u03AE": "\u03B7",
        "\u03AF": "\u03B9",
        "\u03CA": "\u03B9",
        "\u0390": "\u03B9",
        "\u03CC": "\u03BF",
        "\u03CD": "\u03C5",
        "\u03CB": "\u03C5",
        "\u03B0": "\u03C5",
        "\u03C9": "\u03C9",
        "\u03C2": "\u03C3"
      };
      /**
       * @param {?} text
       * @return {?}
       */

      function stripSpecialChars(text) {
        /** @type {?} */
        var match =
        /**
        * @param {?} a
        * @return {?}
        */
        function match(a) {
          return diacritics[a] || a;
        };

        return text.replace(/[^\u0000-\u007E]/g, match);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ItemsList = /*#__PURE__*/function () {
        /**
         * @param {?} _ngSelect
         * @param {?} _selectionModel
         */
        function ItemsList(_ngSelect, _selectionModel) {
          _classCallCheck(this, ItemsList);

          this._ngSelect = _ngSelect;
          this._selectionModel = _selectionModel;
          this._items = [];
          this._filteredItems = [];
          this._markedIndex = -1;
        }
        /**
         * @return {?}
         */


        _createClass(ItemsList, [{
          key: "items",
          get: function get() {
            return this._items;
          }
          /**
           * @return {?}
           */

        }, {
          key: "filteredItems",
          get: function get() {
            return this._filteredItems;
          }
          /**
           * @return {?}
           */

        }, {
          key: "markedIndex",
          get: function get() {
            return this._markedIndex;
          }
          /**
           * @return {?}
           */

        }, {
          key: "selectedItems",
          get: function get() {
            return this._selectionModel.value;
          }
          /**
           * @return {?}
           */

        }, {
          key: "markedItem",
          get: function get() {
            return this._filteredItems[this._markedIndex];
          }
          /**
           * @return {?}
           */

        }, {
          key: "noItemsToSelect",
          get: function get() {
            return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
          }
          /**
           * @return {?}
           */

        }, {
          key: "maxItemsSelected",
          get: function get() {
            return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
          }
          /**
           * @return {?}
           */

        }, {
          key: "lastSelectedItem",
          get: function get() {
            /** @type {?} */
            var i = this.selectedItems.length - 1;

            for (; i >= 0; i--) {
              /** @type {?} */
              var item = this.selectedItems[i];

              if (!item.disabled) {
                return item;
              }
            }

            return null;
          }
          /**
           * @param {?} items
           * @return {?}
           */

        }, {
          key: "setItems",
          value: function setItems(items) {
            var _this7 = this;

            this._items = items.map(
            /**
            * @param {?} item
            * @param {?} index
            * @return {?}
            */
            function (item, index) {
              return _this7.mapItem(item, index);
            });

            if (this._ngSelect.groupBy) {
              this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
              this._items = this._flatten(this._groups);
            } else {
              this._groups = new Map();

              this._groups.set(undefined, this._items);
            }

            this._filteredItems = _toConsumableArray(this._items);
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "select",
          value: function select(item) {
            if (item.selected || this.maxItemsSelected) {
              return;
            }
            /** @type {?} */


            var multiple = this._ngSelect.multiple;

            if (!multiple) {
              this.clearSelected();
            }

            this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);

            if (this._ngSelect.hideSelected) {
              this._hideSelected(item);
            }
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "unselect",
          value: function unselect(item) {
            if (!item.selected) {
              return;
            }

            this._selectionModel.unselect(item, this._ngSelect.multiple);

            if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
              this._showSelected(item);
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "findItem",
          value: function findItem(value) {
            var _this8 = this;

            /** @type {?} */
            var findBy;

            if (this._ngSelect.compareWith) {
              findBy =
              /**
              * @param {?} item
              * @return {?}
              */
              function findBy(item) {
                return _this8._ngSelect.compareWith(item.value, value);
              };
            } else if (this._ngSelect.bindValue) {
              findBy =
              /**
              * @param {?} item
              * @return {?}
              */
              function findBy(item) {
                return !item.children && _this8.resolveNested(item.value, _this8._ngSelect.bindValue) === value;
              };
            } else {
              findBy =
              /**
              * @param {?} item
              * @return {?}
              */
              function findBy(item) {
                return item.value === value || !item.children && item.label && item.label === _this8.resolveNested(value, _this8._ngSelect.bindLabel);
              };
            }

            return this._items.find(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return findBy(item);
            });
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "addItem",
          value: function addItem(item) {
            /** @type {?} */
            var option = this.mapItem(item, this._items.length);

            this._items.push(option);

            this._filteredItems.push(option);

            return option;
          }
          /**
           * @param {?=} keepDisabled
           * @return {?}
           */

        }, {
          key: "clearSelected",
          value: function clearSelected() {
            var keepDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            this._selectionModel.clear(keepDisabled);

            this._items.forEach(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              item.selected = keepDisabled && item.selected && item.disabled;
              item.marked = false;
            });

            if (this._ngSelect.hideSelected) {
              this.resetFilteredItems();
            }
          }
          /**
           * @param {?} term
           * @return {?}
           */

        }, {
          key: "findByLabel",
          value: function findByLabel(term) {
            term = stripSpecialChars(term).toLocaleLowerCase();
            return this.filteredItems.find(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              /** @type {?} */
              var label = stripSpecialChars(item.label).toLocaleLowerCase();
              return label.substr(0, term.length) === term;
            });
          }
          /**
           * @param {?} term
           * @return {?}
           */

        }, {
          key: "filter",
          value: function filter(term) {
            var _this9 = this;

            if (!term) {
              this.resetFilteredItems();
              return;
            }

            this._filteredItems = [];
            term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
            /** @type {?} */

            var match = this._ngSelect.searchFn || this._defaultSearchFn;
            /** @type {?} */

            var hideSelected = this._ngSelect.hideSelected;

            for (var _i2 = 0, _Array$from = Array.from(this._groups.keys()); _i2 < _Array$from.length; _i2++) {
              var key = _Array$from[_i2];

              /** @type {?} */
              var matchedItems = [];

              var _iterator = _createForOfIteratorHelper(this._groups.get(key)),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var item = _step.value;

                  if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                    continue;
                  }
                  /** @type {?} */


                  var searchItem = this._ngSelect.searchFn ? item.value : item;

                  if (match(term, searchItem)) {
                    matchedItems.push(item);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (matchedItems.length > 0) {
                (function () {
                  var _this9$_filteredItems;

                  var _matchedItems$slice = matchedItems.slice(-1),
                      _matchedItems$slice2 = _slicedToArray(_matchedItems$slice, 1),
                      last = _matchedItems$slice2[0];

                  if (last.parent) {
                    /** @type {?} */
                    var head = _this9._items.find(
                    /**
                    * @param {?} x
                    * @return {?}
                    */
                    function (x) {
                      return x === last.parent;
                    });

                    _this9._filteredItems.push(head);
                  }

                  (_this9$_filteredItems = _this9._filteredItems).push.apply(_this9$_filteredItems, matchedItems);
                })();
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "resetFilteredItems",
          value: function resetFilteredItems() {
            if (this._filteredItems.length === this._items.length) {
              return;
            }

            if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
              this._filteredItems = this._items.filter(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return !x.selected;
              });
            } else {
              this._filteredItems = this._items;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "unmarkItem",
          value: function unmarkItem() {
            this._markedIndex = -1;
          }
          /**
           * @return {?}
           */

        }, {
          key: "markNextItem",
          value: function markNextItem() {
            this._stepToItem(+1);
          }
          /**
           * @return {?}
           */

        }, {
          key: "markPreviousItem",
          value: function markPreviousItem() {
            this._stepToItem(-1);
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "markItem",
          value: function markItem(item) {
            this._markedIndex = this._filteredItems.indexOf(item);
          }
          /**
           * @param {?=} markDefault
           * @return {?}
           */

        }, {
          key: "markSelectedOrDefault",
          value: function markSelectedOrDefault(markDefault) {
            if (this._filteredItems.length === 0) {
              return;
            }
            /** @type {?} */


            var lastMarkedIndex = this._getLastMarkedIndex();

            if (lastMarkedIndex > -1) {
              this._markedIndex = lastMarkedIndex;
            } else {
              this._markedIndex = markDefault ? this.filteredItems.findIndex(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return !x.disabled;
              }) : -1;
            }
          }
          /**
           * @param {?} option
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "resolveNested",
          value: function resolveNested(option, key) {
            if (!isObject(option)) {
              return option;
            }

            if (key.indexOf('.') === -1) {
              return option[key];
            } else {
              /** @type {?} */
              var keys = key.split('.');
              /** @type {?} */

              var value = option;

              for (var i = 0, len = keys.length; i < len; ++i) {
                if (value == null) {
                  return null;
                }

                value = value[keys[i]];
              }

              return value;
            }
          }
          /**
           * @param {?} item
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "mapItem",
          value: function mapItem(item, index) {
            /** @type {?} */
            var label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
            /** @type {?} */

            var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
            return {
              index: index,
              label: isDefined(label) ? label.toString() : '',
              value: value,
              disabled: item.disabled,
              htmlId: "".concat(this._ngSelect.dropdownId, "-").concat(index)
            };
          }
          /**
           * @return {?}
           */

        }, {
          key: "mapSelectedItems",
          value: function mapSelectedItems() {
            var _this10 = this;

            /** @type {?} */
            var multiple = this._ngSelect.multiple;

            var _iterator2 = _createForOfIteratorHelper(this.selectedItems),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var selected = _step2.value;

                /** @type {?} */
                var value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
                /** @type {?} */

                var item = isDefined(value) ? this.findItem(value) : null;

                this._selectionModel.unselect(selected, multiple);

                this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (this._ngSelect.hideSelected) {
              this._filteredItems = this.filteredItems.filter(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return _this10.selectedItems.indexOf(x) === -1;
              });
            }
          }
          /**
           * @private
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_showSelected",
          value: function _showSelected(item) {
            this._filteredItems.push(item);

            if (item.parent) {
              /** @type {?} */
              var _parent = item.parent;
              /** @type {?} */

              var parentExists = this._filteredItems.find(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x === _parent;
              });

              if (!parentExists) {
                this._filteredItems.push(_parent);
              }
            } else if (item.children) {
              var _iterator3 = _createForOfIteratorHelper(item.children),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var child = _step3.value;
                  child.selected = false;

                  this._filteredItems.push(child);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }

            this._filteredItems = _toConsumableArray(this._filteredItems.sort(
            /**
            * @param {?} a
            * @param {?} b
            * @return {?}
            */
            function (a, b) {
              return a.index - b.index;
            }));
          }
          /**
           * @private
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_hideSelected",
          value: function _hideSelected(item) {
            this._filteredItems = this._filteredItems.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x !== item;
            });

            if (item.parent) {
              /** @type {?} */
              var children = item.parent.children;

              if (children.every(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x.selected;
              })) {
                this._filteredItems = this._filteredItems.filter(
                /**
                * @param {?} x
                * @return {?}
                */
                function (x) {
                  return x !== item.parent;
                });
              }
            } else if (item.children) {
              this._filteredItems = this.filteredItems.filter(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x.parent !== item;
              });
            }
          }
          /**
           * @private
           * @param {?} search
           * @param {?} opt
           * @return {?}
           */

        }, {
          key: "_defaultSearchFn",
          value: function _defaultSearchFn(search, opt) {
            /** @type {?} */
            var label = stripSpecialChars(opt.label).toLocaleLowerCase();
            return label.indexOf(search) > -1;
          }
          /**
           * @private
           * @param {?} steps
           * @return {?}
           */

        }, {
          key: "_getNextItemIndex",
          value: function _getNextItemIndex(steps) {
            if (steps > 0) {
              return this._markedIndex === this._filteredItems.length - 1 ? 0 : this._markedIndex + 1;
            }

            return this._markedIndex <= 0 ? this._filteredItems.length - 1 : this._markedIndex - 1;
          }
          /**
           * @private
           * @param {?} steps
           * @return {?}
           */

        }, {
          key: "_stepToItem",
          value: function _stepToItem(steps) {
            if (this._filteredItems.length === 0 || this._filteredItems.every(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.disabled;
            })) {
              return;
            }

            this._markedIndex = this._getNextItemIndex(steps);

            if (this.markedItem.disabled) {
              this._stepToItem(steps);
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_getLastMarkedIndex",
          value: function _getLastMarkedIndex() {
            if (this._ngSelect.hideSelected) {
              return -1;
            }

            if (this._markedIndex > -1 && this.markedItem === undefined) {
              return -1;
            }
            /** @type {?} */


            var selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);

            if (this.lastSelectedItem && selectedIndex < 0) {
              return -1;
            }

            return Math.max(this.markedIndex, selectedIndex);
          }
          /**
           * @private
           * @param {?} items
           * @param {?} prop
           * @return {?}
           */

        }, {
          key: "_groupBy",
          value: function _groupBy(items, prop) {
            var _this11 = this;

            /** @type {?} */
            var groups = new Map();

            if (items.length === 0) {
              return groups;
            } // Check if items are already grouped by given key.


            if (Array.isArray(items[0].value[
            /** @type {?} */
            prop])) {
              var _iterator4 = _createForOfIteratorHelper(items),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var item = _step4.value;

                  /** @type {?} */
                  var children = (item.value[
                  /** @type {?} */
                  prop] || []).map(
                  /**
                  * @param {?} x
                  * @param {?} index
                  * @return {?}
                  */
                  function (x, index) {
                    return _this11.mapItem(x, index);
                  });
                  groups.set(item, children);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              return groups;
            }
            /** @type {?} */


            var isFnKey = isFunction(this._ngSelect.groupBy);
            /** @type {?} */

            var keyFn =
            /**
            * @param {?} item
            * @return {?}
            */
            function keyFn(item) {
              /** @type {?} */
              var key = isFnKey ?
              /** @type {?} */
              prop(item.value) : item.value[
              /** @type {?} */
              prop];
              return isDefined(key) ? key : undefined;
            }; // Group items by key.


            var _iterator5 = _createForOfIteratorHelper(items),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _item = _step5.value;

                /** @type {?} */
                var key = keyFn(_item);
                /** @type {?} */

                var group = groups.get(key);

                if (group) {
                  group.push(_item);
                } else {
                  groups.set(key, [_item]);
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            return groups;
          }
          /**
           * @private
           * @param {?} groups
           * @return {?}
           */

        }, {
          key: "_flatten",
          value: function _flatten(groups) {
            var _this12 = this;

            /** @type {?} */
            var isGroupByFn = isFunction(this._ngSelect.groupBy);
            /** @type {?} */

            var items = [];

            var _loop = function _loop() {
              var key = _Array$from2[_i3];

              /** @type {?} */
              var i = items.length;

              if (key === undefined) {
                /** @type {?} */
                var withoutGroup = groups.get(undefined) || [];
                items.push.apply(items, _toConsumableArray(withoutGroup.map(
                /**
                * @param {?} x
                * @return {?}
                */
                function (x) {
                  return Object.assign({}, x, {
                    index: i++
                  });
                })));
                return "continue";
              }
              /** @type {?} */


              var isObjectKey = isObject(key);
              /** @type {?} */

              var parent = {
                label: isObjectKey ? '' : String(key),
                children: undefined,
                parent: null,
                index: i++,
                disabled: !_this12._ngSelect.selectableGroup,
                htmlId: newId()
              };
              /** @type {?} */

              var groupKey = isGroupByFn ? _this12._ngSelect.bindLabel :
              /** @type {?} */
              _this12._ngSelect.groupBy;
              /** @type {?} */

              var groupValue = _this12._ngSelect.groupValue ||
              /**
              * @return {?}
              */
              function () {
                if (isObjectKey) {
                  return (
                    /** @type {?} */
                    key.value
                  );
                }

                return _defineProperty({}, groupKey, key);
              };
              /** @type {?} */


              var children = groups.get(key).map(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                x.parent = parent;
                x.children = undefined;
                x.index = i++;
                return x;
              });
              parent.children = children;
              parent.value = groupValue(key, children.map(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x.value;
              }));
              items.push(parent);
              items.push.apply(items, _toConsumableArray(children));
            };

            for (var _i3 = 0, _Array$from2 = Array.from(groups.keys()); _i3 < _Array$from2.length; _i3++) {
              var _ret = _loop();

              if (_ret === "continue") continue;
            }

            return items;
          }
        }]);

        return ItemsList;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function NgOption() {}

      if (false) {}
      /** @enum {number} */


      var KeyCode = {
        Tab: 9,
        Enter: 13,
        Esc: 27,
        Space: 32,
        ArrowUp: 38,
        ArrowDown: 40,
        Backspace: 8
      };
      KeyCode[KeyCode.Tab] = 'Tab';
      KeyCode[KeyCode.Enter] = 'Enter';
      KeyCode[KeyCode.Esc] = 'Esc';
      KeyCode[KeyCode.Space] = 'Space';
      KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
      KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
      KeyCode[KeyCode.Backspace] = 'Backspace';
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */

      function ItemsRangeResult() {}

      if (false) {}
      /**
       * @record
       */


      function PanelDimensions() {}

      if (false) {}

      var NgDropdownPanelService = /*#__PURE__*/function () {
        function NgDropdownPanelService() {
          _classCallCheck(this, NgDropdownPanelService);

          this._dimensions = {
            itemHeight: 0,
            panelHeight: 0,
            itemsPerViewport: 0
          };
        }
        /**
         * @return {?}
         */


        _createClass(NgDropdownPanelService, [{
          key: "dimensions",
          get: function get() {
            return this._dimensions;
          }
          /**
           * @param {?} scrollPos
           * @param {?} itemsLength
           * @param {?} buffer
           * @return {?}
           */

        }, {
          key: "calculateItems",
          value: function calculateItems(scrollPos, itemsLength, buffer) {
            /** @type {?} */
            var d = this._dimensions;
            /** @type {?} */

            var scrollHeight = d.itemHeight * itemsLength;
            /** @type {?} */

            var scrollTop = Math.max(0, scrollPos);
            /** @type {?} */

            var indexByScrollTop = scrollTop / scrollHeight * itemsLength;
            /** @type {?} */

            var end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
            /** @type {?} */

            var maxStartEnd = end;
            /** @type {?} */

            var maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
            /** @type {?} */

            var start = Math.min(maxStart, Math.floor(indexByScrollTop));
            /** @type {?} */

            var topPadding = d.itemHeight * Math.ceil(start) - d.itemHeight * Math.min(start, buffer);
            topPadding = !isNaN(topPadding) ? topPadding : 0;
            start = !isNaN(start) ? start : -1;
            end = !isNaN(end) ? end : -1;
            start -= buffer;
            start = Math.max(0, start);
            end += buffer;
            end = Math.min(itemsLength, end);
            return {
              topPadding: topPadding,
              scrollHeight: scrollHeight,
              start: start,
              end: end
            };
          }
          /**
           * @param {?} itemHeight
           * @param {?} panelHeight
           * @return {?}
           */

        }, {
          key: "setDimensions",
          value: function setDimensions(itemHeight, panelHeight) {
            /** @type {?} */
            var itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
            this._dimensions = {
              itemHeight: itemHeight,
              panelHeight: panelHeight,
              itemsPerViewport: itemsPerViewport
            };
          }
          /**
           * @param {?} itemTop
           * @param {?} itemHeight
           * @param {?} lastScroll
           * @return {?}
           */

        }, {
          key: "getScrollTo",
          value: function getScrollTo(itemTop, itemHeight, lastScroll) {
            var panelHeight = this.dimensions.panelHeight;
            /** @type {?} */

            var itemBottom = itemTop + itemHeight;
            /** @type {?} */

            var top = lastScroll;
            /** @type {?} */

            var bottom = top + panelHeight;

            if (panelHeight >= itemBottom && lastScroll === itemTop) {
              return null;
            }

            if (itemBottom > bottom) {
              return top + itemBottom - bottom;
            } else if (itemTop <= top) {
              return itemTop;
            }

            return null;
          }
        }]);

        return NgDropdownPanelService;
      }();

      NgDropdownPanelService.ɵfac = function NgDropdownPanelService_Factory(t) {
        return new (t || NgDropdownPanelService)();
      };

      NgDropdownPanelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NgDropdownPanelService,
        factory: NgDropdownPanelService.ɵfac
      });

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var TOP_CSS_CLASS = 'ng-select-top';
      /** @type {?} */

      var BOTTOM_CSS_CLASS = 'ng-select-bottom';
      /** @type {?} */

      var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_3__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_3__["asapScheduler"];

      var NgDropdownPanelComponent = /*#__PURE__*/function () {
        /**
         * @param {?} _renderer
         * @param {?} _zone
         * @param {?} _panelService
         * @param {?} _elementRef
         * @param {?} _document
         */
        function NgDropdownPanelComponent(_renderer, _zone, _panelService, _elementRef, _document) {
          _classCallCheck(this, NgDropdownPanelComponent);

          this._renderer = _renderer;
          this._zone = _zone;
          this._panelService = _panelService;
          this._document = _document;
          this.items = [];
          this.position = 'auto';
          this.virtualScroll = false;
          this.filterValue = null;
          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this._scrollToEndFired = false;
          this._updateScrollHeight = false;
          this._lastScrollPosition = 0;
          this._dropdown = _elementRef.nativeElement;
        }
        /**
         * @return {?}
         */


        _createClass(NgDropdownPanelComponent, [{
          key: "currentPosition",
          get: function get() {
            return this._currentPosition;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "itemsLength",
          get: function get() {
            return this._itemsLength;
          }
          /**
           * @private
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (value !== this._itemsLength) {
              this._itemsLength = value;

              this._onItemsLengthChanged();
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_startOffset",
          get: function get() {
            if (this.markedItem) {
              var _this$_panelService$d = this._panelService.dimensions,
                  itemHeight = _this$_panelService$d.itemHeight,
                  panelHeight = _this$_panelService$d.panelHeight;
              /** @type {?} */

              var offset = this.markedItem.index * itemHeight;
              return panelHeight > offset ? 0 : offset;
            }

            return 0;
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "handleMousedown",
          value: function handleMousedown($event) {
            /** @type {?} */
            var target =
            /** @type {?} */
            $event.target;

            if (target.tagName === 'INPUT') {
              return;
            }

            $event.preventDefault();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._select = this._dropdown.parentElement;
            this._virtualPadding = this.paddingElementRef.nativeElement;
            this._scrollablePanel = this.scrollElementRef.nativeElement;
            this._contentPanel = this.contentElementRef.nativeElement;

            this._handleScroll();

            this._handleOutsideClick();

            this._appendDropdown();
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.items) {
              /** @type {?} */
              var change = changes.items;

              this._onItemsChange(change.currentValue, change.firstChange);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroy$.next();

            this._destroy$.complete();

            this._destroy$.unsubscribe();

            if (this.appendTo) {
              this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
            }
          }
          /**
           * @param {?} option
           * @param {?=} startFromOption
           * @return {?}
           */

        }, {
          key: "scrollTo",
          value: function scrollTo(option) {
            var startFromOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!option) {
              return;
            }
            /** @type {?} */


            var index = this.items.indexOf(option);

            if (index < 0 || index >= this.itemsLength) {
              return;
            }
            /** @type {?} */


            var scrollTo;

            if (this.virtualScroll) {
              /** @type {?} */
              var itemHeight = this._panelService.dimensions.itemHeight;
              scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
            } else {
              /** @type {?} */
              var item = this._dropdown.querySelector("#".concat(option.htmlId));
              /** @type {?} */


              var lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
              scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
            }

            if (isDefined(scrollTo)) {
              this._scrollablePanel.scrollTop = scrollTo;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "scrollToTag",
          value: function scrollToTag() {
            /** @type {?} */
            var panel = this._scrollablePanel;
            panel.scrollTop = panel.scrollHeight - panel.clientHeight;
          }
          /**
           * @return {?}
           */

        }, {
          key: "adjustPosition",
          value: function adjustPosition() {
            /** @type {?} */
            var parent = this._parent.getBoundingClientRect();
            /** @type {?} */


            var select = this._select.getBoundingClientRect();

            this._setOffset(parent, select);
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_handleDropdownPosition",
          value: function _handleDropdownPosition() {
            this._currentPosition = this._calculateCurrentPosition(this._dropdown);

            if (this._currentPosition === 'top') {
              this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);

              this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);

              this._renderer.addClass(this._select, TOP_CSS_CLASS);

              this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
            } else {
              this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);

              this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);

              this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);

              this._renderer.removeClass(this._select, TOP_CSS_CLASS);
            }

            if (this.appendTo) {
              this._updatePosition();
            }

            this._dropdown.style.opacity = '1';
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_handleScroll",
          value: function _handleScroll() {
            var _this13 = this;

            this._zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this13.scrollElementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this13._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                return _this13._onContentScrolled(e.target.scrollTop);
              });
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_handleOutsideClick",
          value: function _handleOutsideClick() {
            var _this14 = this;

            if (!this._document) {
              return;
            }

            this._zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this14._document, 'touchstart', {
                capture: true
              }), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this14._document, 'mousedown', {
                capture: true
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this14._destroy$)).subscribe(
              /**
              * @param {?} $event
              * @return {?}
              */
              function ($event) {
                return _this14._checkToClose($event);
              });
            });
          }
          /**
           * @private
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "_checkToClose",
          value: function _checkToClose($event) {
            var _this15 = this;

            if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
              return;
            }
            /** @type {?} */


            var path = $event.path || $event.composedPath && $event.composedPath();

            if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
              return;
            }

            this._zone.run(
            /**
            * @return {?}
            */
            function () {
              return _this15.outsideClick.emit();
            });
          }
          /**
           * @private
           * @param {?} items
           * @param {?} firstChange
           * @return {?}
           */

        }, {
          key: "_onItemsChange",
          value: function _onItemsChange(items, firstChange) {
            this.items = items || [];
            this._scrollToEndFired = false;
            this.itemsLength = items.length;

            if (this.virtualScroll) {
              this._updateItemsRange(firstChange);
            } else {
              this._updateItems(firstChange);
            }
          }
          /**
           * @private
           * @param {?} firstChange
           * @return {?}
           */

        }, {
          key: "_updateItems",
          value: function _updateItems(firstChange) {
            var _this16 = this;

            this.update.emit(this.items);

            if (firstChange === false) {
              return;
            }

            this._zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                /** @type {?} */
                var panelHeight = _this16._scrollablePanel.clientHeight;

                _this16._panelService.setDimensions(0, panelHeight);

                _this16._handleDropdownPosition();

                _this16.scrollTo(_this16.markedItem, firstChange);
              });
            });
          }
          /**
           * @private
           * @param {?} firstChange
           * @return {?}
           */

        }, {
          key: "_updateItemsRange",
          value: function _updateItemsRange(firstChange) {
            var _this17 = this;

            this._zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this17._measureDimensions().then(
              /**
              * @return {?}
              */
              function () {
                if (firstChange) {
                  _this17._renderItemsRange(_this17._startOffset);

                  _this17._handleDropdownPosition();
                } else {
                  _this17._renderItemsRange();
                }
              });
            });
          }
          /**
           * @private
           * @param {?} scrollTop
           * @return {?}
           */

        }, {
          key: "_onContentScrolled",
          value: function _onContentScrolled(scrollTop) {
            if (this.virtualScroll) {
              this._renderItemsRange(scrollTop);
            }

            this._lastScrollPosition = scrollTop;

            this._fireScrollToEnd(scrollTop);
          }
          /**
           * @private
           * @param {?} height
           * @return {?}
           */

        }, {
          key: "_updateVirtualHeight",
          value: function _updateVirtualHeight(height) {
            if (this._updateScrollHeight) {
              this._virtualPadding.style.height = "".concat(height, "px");
              this._updateScrollHeight = false;
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_onItemsLengthChanged",
          value: function _onItemsLengthChanged() {
            this._updateScrollHeight = true;
          }
          /**
           * @private
           * @param {?=} scrollTop
           * @return {?}
           */

        }, {
          key: "_renderItemsRange",
          value: function _renderItemsRange() {
            var _this18 = this;

            var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (scrollTop && this._lastScrollPosition === scrollTop) {
              return;
            }

            scrollTop = scrollTop || this._scrollablePanel.scrollTop;
            /** @type {?} */

            var range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);

            this._updateVirtualHeight(range.scrollHeight);

            this._contentPanel.style.transform = "translateY(".concat(range.topPadding, "px)");

            this._zone.run(
            /**
            * @return {?}
            */
            function () {
              _this18.update.emit(_this18.items.slice(range.start, range.end));

              _this18.scroll.emit({
                start: range.start,
                end: range.end
              });
            });

            if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
              this._scrollablePanel.scrollTop = scrollTop;
              this._lastScrollPosition = scrollTop;
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_measureDimensions",
          value: function _measureDimensions() {
            var _this19 = this;

            if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
              return Promise.resolve(this._panelService.dimensions);
            }

            var _this$items = _slicedToArray(this.items, 1),
                first = _this$items[0];

            this.update.emit([first]);
            return Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var option = _this19._dropdown.querySelector("#".concat(first.htmlId));
              /** @type {?} */


              var optionHeight = option.clientHeight;
              _this19._virtualPadding.style.height = "".concat(optionHeight * _this19.itemsLength, "px");
              /** @type {?} */

              var panelHeight = _this19._scrollablePanel.clientHeight;

              _this19._panelService.setDimensions(optionHeight, panelHeight);

              return _this19._panelService.dimensions;
            });
          }
          /**
           * @private
           * @param {?} scrollTop
           * @return {?}
           */

        }, {
          key: "_fireScrollToEnd",
          value: function _fireScrollToEnd(scrollTop) {
            var _this20 = this;

            if (this._scrollToEndFired || scrollTop === 0) {
              return;
            }
            /** @type {?} */


            var padding = this.virtualScroll ? this._virtualPadding : this._contentPanel;

            if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
              this._zone.run(
              /**
              * @return {?}
              */
              function () {
                return _this20.scrollToEnd.emit();
              });

              this._scrollToEndFired = true;
            }
          }
          /**
           * @private
           * @param {?} dropdownEl
           * @return {?}
           */

        }, {
          key: "_calculateCurrentPosition",
          value: function _calculateCurrentPosition(dropdownEl) {
            if (this.position !== 'auto') {
              return this.position;
            }
            /** @type {?} */


            var selectRect = this._select.getBoundingClientRect();
            /** @type {?} */


            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            /** @type {?} */

            var offsetTop = selectRect.top + window.pageYOffset;
            /** @type {?} */

            var height = selectRect.height;
            /** @type {?} */

            var dropdownHeight = dropdownEl.getBoundingClientRect().height;

            if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
              return 'top';
            } else {
              return 'bottom';
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_appendDropdown",
          value: function _appendDropdown() {
            if (!this.appendTo) {
              return;
            }

            this._parent = document.querySelector(this.appendTo);

            if (!parent) {
              throw new Error("appendTo selector ".concat(this.appendTo, " did not found any parent element"));
            }

            this._parent.appendChild(this._dropdown);
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_updatePosition",
          value: function _updatePosition() {
            /** @type {?} */
            var select = this._select.getBoundingClientRect();
            /** @type {?} */


            var parent = this._parent.getBoundingClientRect();
            /** @type {?} */


            var offsetLeft = select.left - parent.left;

            this._setOffset(parent, select);

            this._dropdown.style.left = offsetLeft + 'px';
            this._dropdown.style.width = select.width + 'px';
            this._dropdown.style.minWidth = select.width + 'px';
          }
          /**
           * @private
           * @param {?} parent
           * @param {?} select
           * @return {?}
           */

        }, {
          key: "_setOffset",
          value: function _setOffset(parent, select) {
            /** @type {?} */
            var delta = select.height;

            if (this._currentPosition === 'top') {
              /** @type {?} */
              var offsetBottom = parent.bottom - select.bottom;
              this._dropdown.style.bottom = offsetBottom + delta + 'px';
              this._dropdown.style.top = 'auto';
            } else if (this._currentPosition === 'bottom') {
              /** @type {?} */
              var offsetTop = select.top - parent.top;
              this._dropdown.style.top = offsetTop + delta + 'px';
              this._dropdown.style.bottom = 'auto';
            }
          }
        }]);

        return NgDropdownPanelComponent;
      }();

      NgDropdownPanelComponent.ɵfac = function NgDropdownPanelComponent_Factory(t) {
        return new (t || NgDropdownPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgDropdownPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], 8));
      };

      NgDropdownPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgDropdownPanelComponent,
        selectors: [["ng-dropdown-panel"]],
        viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElementRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paddingElementRef = _t.first);
          }
        },
        hostBindings: function NgDropdownPanelComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgDropdownPanelComponent_mousedown_HostBindingHandler($event) {
              return ctx.handleMousedown($event);
            });
          }
        },
        inputs: {
          items: "items",
          position: "position",
          virtualScroll: "virtualScroll",
          filterValue: "filterValue",
          markedItem: "markedItem",
          appendTo: "appendTo",
          bufferAmount: "bufferAmount",
          headerTemplate: "headerTemplate",
          footerTemplate: "footerTemplate"
        },
        outputs: {
          update: "update",
          scroll: "scroll",
          scrollToEnd: "scrollToEnd",
          outsideClick: "outsideClick"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c4,
        decls: 9,
        vars: 6,
        consts: [["class", "ng-dropdown-header", 4, "ngIf"], [1, "ng-dropdown-panel-items", "scroll-host"], ["scroll", ""], ["padding", ""], ["content", ""], ["class", "ng-dropdown-footer", 4, "ngIf"], [1, "ng-dropdown-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-dropdown-footer"]],
        template: function NgDropdownPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgDropdownPanelComponent_div_0_Template, 2, 4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", null, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgDropdownPanelComponent_div_8_Template, 2, 4, "div", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("total-padding", ctx.virtualScroll);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrollable-content", ctx.virtualScroll && ctx.items.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      NgDropdownPanelComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: NgDropdownPanelService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };

      NgDropdownPanelComponent.propDecorators = {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        markedItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bufferAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        virtualScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        headerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        footerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        filterValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        scrollToEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        outsideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        contentElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['content', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        scrollElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scroll', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        paddingElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['padding', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        handleMousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            selector: 'ng-dropdown-panel',
            template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: NgDropdownPanelService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, {
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          filterValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          scrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          outsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],

          /**
           * @param {?} $event
           * @return {?}
           */
          handleMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
          }],
          markedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          contentElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
              "static": true
            }]
          }],
          scrollElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scroll', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
              "static": true
            }]
          }],
          paddingElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['padding', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
              "static": true
            }]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgOptionComponent = /*#__PURE__*/function () {
        /**
         * @param {?} elementRef
         */
        function NgOptionComponent(elementRef) {
          _classCallCheck(this, NgOptionComponent);

          this.elementRef = elementRef;
          this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this._disabled = false;
        }
        /**
         * @return {?}
         */


        _createClass(NgOptionComponent, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disabled = this._isDisabled(value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "label",
          get: function get() {
            return (this.elementRef.nativeElement.textContent || '').trim();
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.disabled) {
              this.stateChange$.next({
                value: this.value,
                disabled: this._disabled
              });
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            if (this.label !== this._previousLabel) {
              this._previousLabel = this.label;
              this.stateChange$.next({
                value: this.value,
                disabled: this._disabled,
                label: this.elementRef.nativeElement.innerHTML
              });
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChange$.complete();
          }
          /**
           * @private
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_isDisabled",
          value: function _isDisabled(value) {
            return value != null && "".concat(value) !== 'false';
          }
        }]);

        return NgOptionComponent;
      }();

      NgOptionComponent.ɵfac = function NgOptionComponent_Factory(t) {
        return new (t || NgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NgOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgOptionComponent,
        selectors: [["ng-option"]],
        inputs: {
          disabled: "disabled",
          value: "value"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c4,
        decls: 1,
        vars: 0,
        template: function NgOptionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      NgOptionComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      NgOptionComponent.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ng-option',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "<ng-content></ng-content>"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgSelectConfig = function NgSelectConfig() {
        _classCallCheck(this, NgSelectConfig);

        this.notFoundText = 'No items found';
        this.typeToSearchText = 'Type to search';
        this.addTagText = 'Add item';
        this.loadingText = 'Loading...';
        this.clearAllText = 'Clear all';
        this.disableVirtualScroll = true;
        this.openOnEnter = true;
        this.appearance = 'underline';
      };

      NgSelectConfig.ɵfac = function NgSelectConfig_Factory(t) {
        return new (t || NgSelectConfig)();
      };

      NgSelectConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NgSelectConfig,
        factory: NgSelectConfig.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      NgSelectConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function NgSelectConfig_Factory() {
          return new NgSelectConfig();
        },
        token: NgSelectConfig,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ng-select-selection-model');

      var NgSelectComponent = /*#__PURE__*/function () {
        /**
         * @param {?} classes
         * @param {?} autoFocus
         * @param {?} config
         * @param {?} newSelectionModel
         * @param {?} _elementRef
         * @param {?} _cd
         * @param {?} _console
         */
        function NgSelectComponent(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
          var _this21 = this;

          _classCallCheck(this, NgSelectComponent);

          this.classes = classes;
          this.autoFocus = autoFocus;
          this._cd = _cd;
          this._console = _console;
          this.markFirst = true;
          this.dropdownPosition = 'auto';
          this.loading = false;
          this.closeOnSelect = true;
          this.hideSelected = false;
          this.selectOnTab = false;
          this.bufferAmount = 4;
          this.selectableGroup = false;
          this.selectableGroupAsModel = true;
          this.searchFn = null;
          this.trackByFn = null;
          this.clearOnBackspace = true;
          this.labelForId = null;
          this.inputAttrs = {};
          this.readonly = false;
          this.searchWhileComposing = true;
          this.minTermLength = 0;

          this.keyDownFn =
          /**
          * @param {?} _
          * @return {?}
          */
          function (_) {
            return true;
          };

          this.multiple = false;
          this.addTag = false;
          this.searchable = true;
          this.clearable = true;
          this.isOpen = false; // output events

          this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.viewPortItems = [];
          this.searchTerm = null;
          this.dropdownId = newId();
          this.escapeHTML = true;
          this._items = [];
          this._defaultLabel = 'label';
          this._pressedKeys = [];
          this._isComposing = false;
          this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();

          this._onChange =
          /**
          * @param {?} _
          * @return {?}
          */
          function (_) {};

          this._onTouched =
          /**
          * @return {?}
          */
          function () {};

          this.clearItem =
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            /** @type {?} */
            var option = _this21.selectedItems.find(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.value === item;
            });

            _this21.unselect(option);
          };

          this.trackByOption =
          /**
          * @param {?} _
          * @param {?} item
          * @return {?}
          */
          function (_, item) {
            if (_this21.trackByFn) {
              return _this21.trackByFn(item.value);
            }

            return item;
          };

          this._mergeGlobalConfig(config);

          this.itemsList = new ItemsList(this, newSelectionModel());
          this.element = _elementRef.nativeElement;
        }
        /**
         * @return {?}
         */


        _createClass(NgSelectComponent, [{
          key: "items",
          get: function get() {
            return this._items;
          },
          set:
          /**
           * @param {?} value
           * @return {?}
           */
          function set(value) {
            this._itemsAreUsed = true;
            this._items = value;
          }
        }, {
          key: "compareWith",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._compareWith;
          }
          /**
           * @param {?} fn
           * @return {?}
           */
          ,
          set: function set(fn) {
            if (!isFunction(fn)) {
              throw Error('`compareWith` must be a function.');
            }

            this._compareWith = fn;
          }
          /**
           * @return {?}
           */

        }, {
          key: "clearSearchOnAdd",
          get: function get() {
            return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect;
          },
          set:
          /**
           * @param {?} value
           * @return {?}
           */
          function set(value) {
            this._clearSearchOnAdd = value;
          }
        }, {
          key: "disabled",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this.readonly || this._disabled;
          }
        }, {
          key: "filtered",
          get:
          /**
           * @return {?}
           */
          function get() {
            return !!this.searchTerm && this.searchable || this._isComposing;
          }
        }, {
          key: "selectedItems",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this.itemsList.selectedItems;
          }
          /**
           * @return {?}
           */

        }, {
          key: "selectedValues",
          get: function get() {
            return this.selectedItems.map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.value;
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "hasValue",
          get: function get() {
            return this.selectedItems.length > 0;
          }
          /**
           * @return {?}
           */

        }, {
          key: "currentPanelPosition",
          get: function get() {
            if (this.dropdownPanel) {
              return this.dropdownPanel.currentPosition;
            }

            return undefined;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._handleKeyPresses();

            this._setInputAttributes();
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.multiple) {
              this.itemsList.clearSelected();
            }

            if (changes.items) {
              this._setItems(changes.items.currentValue || []);
            }

            if (changes.isOpen) {
              this._manualOpen = isDefined(changes.isOpen.currentValue);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (!this._itemsAreUsed) {
              this.escapeHTML = false;

              this._setItemsFromNgOptions();
            }

            if (isDefined(this.autoFocus)) {
              this.focus();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroy$.next();

            this._destroy$.complete();
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "handleKeyDown",
          value: function handleKeyDown($event) {
            /** @type {?} */
            var keyCode = KeyCode[$event.which];

            if (keyCode) {
              if (this.keyDownFn($event) === false) {
                return;
              }

              this.handleKeyCode($event);
            } else if ($event.key && $event.key.length === 1) {
              this._keyPress$.next($event.key.toLocaleLowerCase());
            }
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "handleKeyCode",
          value: function handleKeyCode($event) {
            switch ($event.which) {
              case KeyCode.ArrowDown:
                this._handleArrowDown($event);

                break;

              case KeyCode.ArrowUp:
                this._handleArrowUp($event);

                break;

              case KeyCode.Space:
                this._handleSpace($event);

                break;

              case KeyCode.Enter:
                this._handleEnter($event);

                break;

              case KeyCode.Tab:
                this._handleTab($event);

                break;

              case KeyCode.Esc:
                this.close();
                $event.preventDefault();
                break;

              case KeyCode.Backspace:
                this._handleBackspace();

                break;
            }
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "handleMousedown",
          value: function handleMousedown($event) {
            /** @type {?} */
            var target =
            /** @type {?} */
            $event.target;

            if (target.tagName !== 'INPUT') {
              $event.preventDefault();
            }

            if (target.classList.contains('ng-clear-wrapper')) {
              this.handleClearClick();
              return;
            }

            if (target.classList.contains('ng-arrow-wrapper')) {
              this.handleArrowClick();
              return;
            }

            if (target.classList.contains('ng-value-icon')) {
              return;
            }

            if (!this.focused) {
              this.focus();
            }

            if (this.searchable) {
              this.open();
            } else {
              this.toggle();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "handleArrowClick",
          value: function handleArrowClick() {
            if (this.isOpen) {
              this.close();
            } else {
              this.open();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "handleClearClick",
          value: function handleClearClick() {
            if (this.hasValue) {
              this.itemsList.clearSelected(true);

              this._updateNgModel();
            }

            this._clearSearch();

            this.focus();
            this.clearEvent.emit();

            this._onSelectionChanged();
          }
          /**
           * @return {?}
           */

        }, {
          key: "clearModel",
          value: function clearModel() {
            if (!this.clearable) {
              return;
            }

            this.itemsList.clearSelected();

            this._updateNgModel();
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.itemsList.clearSelected();

            this._handleWriteValue(value);

            this._cd.markForCheck();
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
          /**
           * @param {?} state
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(state) {
            this._disabled = state;

            this._cd.markForCheck();
          }
          /**
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle() {
            if (!this.isOpen) {
              this.open();
            } else {
              this.close();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "open",
          value: function open() {
            if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
              return;
            }

            if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
              return;
            }

            this.isOpen = true;
            this.itemsList.markSelectedOrDefault(this.markFirst);
            this.openEvent.emit();

            if (!this.searchTerm) {
              this.focus();
            }

            this.detectChanges();
          }
          /**
           * @return {?}
           */

        }, {
          key: "close",
          value: function close() {
            if (!this.isOpen || this._manualOpen) {
              return;
            }

            this.isOpen = false;

            this._clearSearch();

            this.itemsList.unmarkItem();

            this._onTouched();

            this.closeEvent.emit();

            this._cd.markForCheck();
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "toggleItem",
          value: function toggleItem(item) {
            if (!item || item.disabled || this.disabled) {
              return;
            }

            if (this.multiple && item.selected) {
              this.unselect(item);
            } else {
              this.select(item);
            }

            this._onSelectionChanged();
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "select",
          value: function select(item) {
            if (!item.selected) {
              this.itemsList.select(item);

              if (this.clearSearchOnAdd) {
                this._clearSearch();
              }

              this._updateNgModel();

              if (this.multiple) {
                this.addEvent.emit(item.value);
              }
            }

            if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
              this.close();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "focus",
          value: function focus() {
            this.searchInput.nativeElement.focus();
          }
          /**
           * @return {?}
           */

        }, {
          key: "blur",
          value: function blur() {
            this.searchInput.nativeElement.blur();
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "unselect",
          value: function unselect(item) {
            if (!item) {
              return;
            }

            this.itemsList.unselect(item);
            this.focus();

            this._updateNgModel();

            this.removeEvent.emit(item);
          }
          /**
           * @return {?}
           */

        }, {
          key: "selectTag",
          value: function selectTag() {
            var _this22 = this;

            /** @type {?} */
            var tag;

            if (isFunction(this.addTag)) {
              tag =
              /** @type {?} */
              this.addTag(this.searchTerm);
            } else {
              tag = this._primitive ? this.searchTerm : _defineProperty({}, this.bindLabel, this.searchTerm);
            }
            /** @type {?} */


            var handleTag =
            /**
            * @param {?} item
            * @return {?}
            */
            function handleTag(item) {
              return _this22._isTypeahead || !_this22.isOpen ? _this22.itemsList.mapItem(item, null) : _this22.itemsList.addItem(item);
            };

            if (isPromise(tag)) {
              tag.then(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                return _this22.select(handleTag(item));
              })["catch"](
              /**
              * @return {?}
              */
              function () {});
            } else if (tag) {
              this.select(handleTag(tag));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "showClear",
          value: function showClear() {
            return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
          }
          /**
           * @return {?}
           */

        }, {
          key: "showAddTag",
          get: function get() {
            if (!this._validTerm) {
              return false;
            }
            /** @type {?} */


            var term = this.searchTerm.toLowerCase().trim();
            return this.addTag && !this.itemsList.filteredItems.some(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.label.toLowerCase() === term;
            }) && (!this.hideSelected && this.isOpen || !this.selectedItems.some(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.label.toLowerCase() === term;
            })) && !this.loading;
          }
          /**
           * @return {?}
           */

        }, {
          key: "showNoItemsFound",
          value: function showNoItemsFound() {
            /** @type {?} */
            var empty = this.itemsList.filteredItems.length === 0;
            return (empty && !this._isTypeahead && !this.loading || empty && this._isTypeahead && this._validTerm && !this.loading) && !this.showAddTag;
          }
          /**
           * @return {?}
           */

        }, {
          key: "showTypeToSearch",
          value: function showTypeToSearch() {
            /** @type {?} */
            var empty = this.itemsList.filteredItems.length === 0;
            return empty && this._isTypeahead && !this._validTerm && !this.loading;
          }
          /**
           * @return {?}
           */

        }, {
          key: "onCompositionStart",
          value: function onCompositionStart() {
            this._isComposing = true;
          }
          /**
           * @param {?} term
           * @return {?}
           */

        }, {
          key: "onCompositionEnd",
          value: function onCompositionEnd(term) {
            this._isComposing = false;

            if (this.searchWhileComposing) {
              return;
            }

            this.filter(term);
          }
          /**
           * @param {?} term
           * @return {?}
           */

        }, {
          key: "filter",
          value: function filter(term) {
            if (this._isComposing && !this.searchWhileComposing) {
              return;
            }

            this.searchTerm = term;

            if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
              this.typeahead.next(term);
            }

            if (!this._isTypeahead) {
              this.itemsList.filter(this.searchTerm);

              if (this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
              }
            }

            this.searchEvent.emit({
              term: term,
              items: this.itemsList.filteredItems.map(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x.value;
              })
            });
            this.open();
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onInputFocus",
          value: function onInputFocus($event) {
            if (this.focused) {
              return;
            }

            this.element.classList.add('ng-select-focused');
            this.focusEvent.emit($event);
            this.focused = true;
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onInputBlur",
          value: function onInputBlur($event) {
            this.element.classList.remove('ng-select-focused');
            this.blurEvent.emit($event);

            if (!this.isOpen && !this.disabled) {
              this._onTouched();
            }

            this.focused = false;
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "onItemHover",
          value: function onItemHover(item) {
            if (item.disabled) {
              return;
            }

            this.itemsList.markItem(item);
          }
          /**
           * @return {?}
           */

        }, {
          key: "detectChanges",
          value: function detectChanges() {
            if (!
            /** @type {?} */
            this._cd.destroyed) {
              this._cd.detectChanges();
            }
          }
          /**
           * @private
           * @param {?} items
           * @return {?}
           */

        }, {
          key: "_setItems",
          value: function _setItems(items) {
            /** @type {?} */
            var firstItem = items[0];
            this.bindLabel = this.bindLabel || this._defaultLabel;
            this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
            this.itemsList.setItems(items);

            if (items.length > 0 && this.hasValue) {
              this.itemsList.mapSelectedItems();
            }

            if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
              this.itemsList.filter(this.searchTerm);
            }

            if (this._isTypeahead || this.isOpen) {
              this.itemsList.markSelectedOrDefault(this.markFirst);
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_setItemsFromNgOptions",
          value: function _setItemsFromNgOptions() {
            var _this23 = this;

            /** @type {?} */
            var mapNgOptions =
            /**
            * @param {?} options
            * @return {?}
            */
            function mapNgOptions(options) {
              _this23.items = options.map(
              /**
              * @param {?} option
              * @return {?}
              */
              function (option) {
                return {
                  $ngOptionValue: option.value,
                  $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                  disabled: option.disabled
                };
              });

              _this23.itemsList.setItems(_this23.items);

              if (_this23.hasValue) {
                _this23.itemsList.mapSelectedItems();
              }

              _this23.detectChanges();
            };
            /** @type {?} */


            var handleOptionChange =
            /**
            * @return {?}
            */
            function handleOptionChange() {
              /** @type {?} */
              var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(_this23.ngOptions.changes, _this23._destroy$);
              Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"]).apply(void 0, _toConsumableArray(_this23.ngOptions.map(
              /**
              * @param {?} option
              * @return {?}
              */
              function (option) {
                return option.stateChange$;
              }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(changedOrDestroyed)).subscribe(
              /**
              * @param {?} option
              * @return {?}
              */
              function (option) {
                /** @type {?} */
                var item = _this23.itemsList.findItem(option.value);

                item.disabled = option.disabled;
                item.label = option.label || item.label;

                _this23._cd.detectChanges();
              });
            };

            this.ngOptions.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.ngOptions), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$)).subscribe(
            /**
            * @param {?} options
            * @return {?}
            */
            function (options) {
              _this23.bindLabel = _this23._defaultLabel;
              mapNgOptions(options);
              handleOptionChange();
            });
          }
          /**
           * @private
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_isValidWriteValue",
          value: function _isValidWriteValue(value) {
            var _this24 = this;

            if (!isDefined(value) || this.multiple && value === '' || Array.isArray(value) && value.length === 0) {
              return false;
            }
            /** @type {?} */


            var validateBinding =
            /**
            * @param {?} item
            * @return {?}
            */
            function validateBinding(item) {
              if (!isDefined(_this24.compareWith) && isObject(item) && _this24.bindValue) {
                _this24._console.warn("Binding object(".concat(JSON.stringify(item), ") with bindValue is not allowed."));

                return false;
              }

              return true;
            };

            if (this.multiple) {
              if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');

                return false;
              }

              return value.every(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                return validateBinding(item);
              });
            } else {
              return validateBinding(value);
            }
          }
          /**
           * @private
           * @param {?} ngModel
           * @return {?}
           */

        }, {
          key: "_handleWriteValue",
          value: function _handleWriteValue(ngModel) {
            var _this25 = this;

            if (!this._isValidWriteValue(ngModel)) {
              return;
            }
            /** @type {?} */


            var select =
            /**
            * @param {?} val
            * @return {?}
            */
            function select(val) {
              /** @type {?} */
              var item = _this25.itemsList.findItem(val);

              if (item) {
                _this25.itemsList.select(item);
              } else {
                /** @type {?} */
                var isValObject = isObject(val);
                /** @type {?} */

                var isPrimitive = !isValObject && !_this25.bindValue;

                if (isValObject || isPrimitive) {
                  _this25.itemsList.select(_this25.itemsList.mapItem(val, null));
                } else if (_this25.bindValue) {
                  var _item2;

                  item = (_item2 = {}, _defineProperty(_item2, _this25.bindLabel, null), _defineProperty(_item2, _this25.bindValue, val), _item2);

                  _this25.itemsList.select(_this25.itemsList.mapItem(item, null));
                }
              }
            };

            if (this.multiple) {
              /** @type {?} */
              ngModel.forEach(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                return select(item);
              });
            } else {
              select(ngModel);
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_handleKeyPresses",
          value: function _handleKeyPresses() {
            var _this26 = this;

            if (this.searchable) {
              return;
            }

            this._keyPress$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(
            /**
            * @param {?} letter
            * @return {?}
            */
            function (letter) {
              return _this26._pressedKeys.push(letter);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /**
            * @return {?}
            */
            function () {
              return _this26._pressedKeys.length > 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @return {?}
            */
            function () {
              return _this26._pressedKeys.join('');
            })).subscribe(
            /**
            * @param {?} term
            * @return {?}
            */
            function (term) {
              /** @type {?} */
              var item = _this26.itemsList.findByLabel(term);

              if (item) {
                if (_this26.isOpen) {
                  _this26.itemsList.markItem(item);

                  _this26._cd.markForCheck();
                } else {
                  _this26.select(item);
                }
              }

              _this26._pressedKeys = [];
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_setInputAttributes",
          value: function _setInputAttributes() {
            /** @type {?} */
            var input = this.searchInput.nativeElement;
            /** @type {?} */

            var attributes = Object.assign({
              type: 'text',
              autocorrect: 'off',
              autocapitalize: 'off',
              autocomplete: this.labelForId ? 'off' : this.dropdownId
            }, this.inputAttrs);

            for (var _i4 = 0, _Object$keys = Object.keys(attributes); _i4 < _Object$keys.length; _i4++) {
              var key = _Object$keys[_i4];
              input.setAttribute(key, attributes[key]);
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_updateNgModel",
          value: function _updateNgModel() {
            /** @type {?} */
            var model = [];

            var _iterator6 = _createForOfIteratorHelper(this.selectedItems),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var item = _step6.value;

                if (this.bindValue) {
                  /** @type {?} */
                  var value = null;

                  if (item.children) {
                    /** @type {?} */
                    var groupKey = this.groupValue ? this.bindValue :
                    /** @type {?} */
                    this.groupBy;
                    value = item.value[groupKey ||
                    /** @type {?} */
                    this.groupBy];
                  } else {
                    value = this.itemsList.resolveNested(item.value, this.bindValue);
                  }

                  model.push(value);
                } else {
                  model.push(item.value);
                }
              }
              /** @type {?} */

            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            var selected = this.selectedItems.map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.value;
            });

            if (this.multiple) {
              this._onChange(model);

              this.changeEvent.emit(selected);
            } else {
              this._onChange(isDefined(model[0]) ? model[0] : null);

              this.changeEvent.emit(selected[0]);
            }

            this._cd.markForCheck();
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_clearSearch",
          value: function _clearSearch() {
            if (!this.searchTerm) {
              return;
            }

            this._changeSearch(null);

            this.itemsList.resetFilteredItems();
          }
          /**
           * @private
           * @param {?} searchTerm
           * @return {?}
           */

        }, {
          key: "_changeSearch",
          value: function _changeSearch(searchTerm) {
            this.searchTerm = searchTerm;

            if (this._isTypeahead) {
              this.typeahead.next(searchTerm);
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_scrollToMarked",
          value: function _scrollToMarked() {
            if (!this.isOpen || !this.dropdownPanel) {
              return;
            }

            this.dropdownPanel.scrollTo(this.itemsList.markedItem);
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_scrollToTag",
          value: function _scrollToTag() {
            if (!this.isOpen || !this.dropdownPanel) {
              return;
            }

            this.dropdownPanel.scrollToTag();
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_onSelectionChanged",
          value: function _onSelectionChanged() {
            if (this.isOpen && this.multiple && this.appendTo) {
              // Make sure items are rendered.
              this._cd.detectChanges();

              this.dropdownPanel.adjustPosition();
            }
          }
          /**
           * @private
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "_handleTab",
          value: function _handleTab($event) {
            if (this.isOpen === false && !this.addTag) {
              return;
            }

            if (this.selectOnTab) {
              if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
              } else if (this.showAddTag) {
                this.selectTag();
                $event.preventDefault();
              } else {
                this.close();
              }
            } else {
              this.close();
            }
          }
          /**
           * @private
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "_handleEnter",
          value: function _handleEnter($event) {
            if (this.isOpen || this._manualOpen) {
              if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
              } else if (this.showAddTag) {
                this.selectTag();
              }
            } else if (this.openOnEnter) {
              this.open();
            } else {
              return;
            }

            $event.preventDefault();
          }
          /**
           * @private
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "_handleSpace",
          value: function _handleSpace($event) {
            if (this.isOpen || this._manualOpen) {
              return;
            }

            this.open();
            $event.preventDefault();
          }
          /**
           * @private
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "_handleArrowDown",
          value: function _handleArrowDown($event) {
            if (this._nextItemIsTag(+1)) {
              this.itemsList.unmarkItem();

              this._scrollToTag();
            } else {
              this.itemsList.markNextItem();

              this._scrollToMarked();
            }

            this.open();
            $event.preventDefault();
          }
          /**
           * @private
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "_handleArrowUp",
          value: function _handleArrowUp($event) {
            if (!this.isOpen) {
              return;
            }

            if (this._nextItemIsTag(-1)) {
              this.itemsList.unmarkItem();

              this._scrollToTag();
            } else {
              this.itemsList.markPreviousItem();

              this._scrollToMarked();
            }

            $event.preventDefault();
          }
          /**
           * @private
           * @param {?} nextStep
           * @return {?}
           */

        }, {
          key: "_nextItemIsTag",
          value: function _nextItemIsTag(nextStep) {
            /** @type {?} */
            var nextIndex = this.itemsList.markedIndex + nextStep;
            return this.addTag && this.searchTerm && this.itemsList.markedItem && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_handleBackspace",
          value: function _handleBackspace() {
            if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
              return;
            }

            if (this.multiple) {
              this.unselect(this.itemsList.lastSelectedItem);
            } else {
              this.clearModel();
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_isTypeahead",
          get: function get() {
            return this.typeahead && this.typeahead.observers.length > 0;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_validTerm",
          get: function get() {
            /** @type {?} */
            var term = this.searchTerm && this.searchTerm.trim();
            return term && term.length >= this.minTermLength;
          }
          /**
           * @private
           * @param {?} config
           * @return {?}
           */

        }, {
          key: "_mergeGlobalConfig",
          value: function _mergeGlobalConfig(config) {
            this.placeholder = this.placeholder || config.placeholder;
            this.notFoundText = this.notFoundText || config.notFoundText;
            this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
            this.addTagText = this.addTagText || config.addTagText;
            this.loadingText = this.loadingText || config.loadingText;
            this.clearAllText = this.clearAllText || config.clearAllText;
            this.virtualScroll = isDefined(this.virtualScroll) ? this.virtualScroll : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
            this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
            this.appendTo = this.appendTo || config.appendTo;
            this.bindValue = this.bindValue || config.bindValue;
            this.appearance = this.appearance || config.appearance;
          }
        }]);

        return NgSelectComponent;
      }();

      NgSelectComponent.ɵfac = function NgSelectComponent_Factory(t) {
        return new (t || NgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('class'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('autofocus'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SELECTION_MODEL_FACTORY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConsoleService));
      };

      NgSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgSelectComponent,
        selectors: [["ng-select"]],
        contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptgroupTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLabelTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgMultiLabelTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgHeaderTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgFooterTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgNotFoundTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTypeToSearchTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingTextTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTagTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingSpinnerTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionComponent, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optgroupTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiLabelTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.notFoundTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeToSearchTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingTextTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tagTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingSpinnerTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngOptions = _t);
          }
        },
        viewQuery: function NgSelectComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NgDropdownPanelComponent, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownPanel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
          }
        },
        hostAttrs: ["role", "listbox", 1, "ng-select"],
        hostVars: 18,
        hostBindings: function NgSelectComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) {
              return ctx.handleKeyDown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-single", !ctx.multiple)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select-disabled", ctx.disabled)("ng-select-filtered", ctx.filtered)("ng-select-typeahead", ctx.typeahead);
          }
        },
        inputs: {
          markFirst: "markFirst",
          dropdownPosition: "dropdownPosition",
          loading: "loading",
          closeOnSelect: "closeOnSelect",
          hideSelected: "hideSelected",
          selectOnTab: "selectOnTab",
          bufferAmount: "bufferAmount",
          selectableGroup: "selectableGroup",
          selectableGroupAsModel: "selectableGroupAsModel",
          searchFn: "searchFn",
          trackByFn: "trackByFn",
          clearOnBackspace: "clearOnBackspace",
          labelForId: "labelForId",
          inputAttrs: "inputAttrs",
          readonly: "readonly",
          searchWhileComposing: "searchWhileComposing",
          minTermLength: "minTermLength",
          keyDownFn: "keyDownFn",
          multiple: "multiple",
          addTag: "addTag",
          searchable: "searchable",
          clearable: "clearable",
          isOpen: "isOpen",
          items: "items",
          compareWith: "compareWith",
          clearSearchOnAdd: "clearSearchOnAdd",
          bindLabel: "bindLabel",
          placeholder: "placeholder",
          notFoundText: "notFoundText",
          typeToSearchText: "typeToSearchText",
          addTagText: "addTagText",
          loadingText: "loadingText",
          clearAllText: "clearAllText",
          virtualScroll: "virtualScroll",
          openOnEnter: "openOnEnter",
          appendTo: "appendTo",
          bindValue: "bindValue",
          appearance: "appearance",
          maxSelectedItems: "maxSelectedItems",
          groupBy: "groupBy",
          groupValue: "groupValue",
          tabIndex: "tabIndex",
          typeahead: "typeahead"
        },
        outputs: {
          blurEvent: "blur",
          focusEvent: "focus",
          changeEvent: "change",
          openEvent: "open",
          closeEvent: "close",
          searchEvent: "search",
          clearEvent: "clear",
          addEvent: "add",
          removeEvent: "remove",
          scroll: "scroll",
          scrollToEnd: "scrollToEnd"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return NgSelectComponent;
          }),
          multi: true
        }, NgDropdownPanelService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 14,
        vars: 18,
        consts: [[1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [1, "ng-placeholder"], [4, "ngIf"], [1, "ng-input"], ["role", "combobox", 3, "readOnly", "disabled", "value", "input", "compositionstart", "compositionend", "focus", "blur", "change"], ["searchInput", ""], ["class", "ng-clear-wrapper", 3, "title", 4, "ngIf"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], ["class", "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick", 4, "ngIf"], ["class", "ng-value", 3, "ng-value-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ng-value"], ["defaultLabelTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], ["defaultLoadingSpinnerTemplate", ""], [3, "ngTemplateOutlet"], [1, "ng-spinner-loader"], [1, "ng-clear-wrapper", 3, "title"], ["aria-hidden", "true", 1, "ng-clear"], [1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick"], ["class", "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked", "click", "mouseover", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ng-option", "role", "option", 3, "ng-option-marked", "mouseover", "click", 4, "ngIf"], [1, "ng-option", 3, "click", "mouseover"], ["defaultOptionTemplate", ""], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], ["defaultTagTemplate", ""], [1, "ng-tag-label"], ["defaultNotFoundTemplate", ""], [1, "ng-option", "ng-option-disabled"], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""]],
        template: function NgSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) {
              return ctx.handleMousedown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_container_4_Template, 2, 2, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_5_Template, 1, 5, undefined, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NgSelectComponent_Template_input_input_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

              return ctx.filter(_r2.value);
            })("compositionstart", function NgSelectComponent_Template_input_compositionstart_7_listener() {
              return ctx.onCompositionStart();
            })("compositionend", function NgSelectComponent_Template_input_compositionend_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

              return ctx.onCompositionEnd(_r2.value);
            })("focus", function NgSelectComponent_Template_input_focus_7_listener($event) {
              return ctx.onInputFocus($event);
            })("blur", function NgSelectComponent_Template_input_blur_7_listener($event) {
              return ctx.onInputBlur($event);
            })("change", function NgSelectComponent_Template_input_change_7_listener($event) {
              return $event.stopPropagation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgSelectComponent_ng_container_9_Template, 4, 1, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgSelectComponent_span_10_Template, 3, 1, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgSelectComponent_ng_dropdown_panel_13_Template, 7, 19, "ng-dropdown-panel", 10);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.placeholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.multiLabelTemplate && ctx.selectedItems.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiLabelTemplate && ctx.selectedValues.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("disabled", ctx.disabled)("value", ctx.searchTerm ? ctx.searchTerm : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.labelForId)("tabindex", ctx.tabIndex)("aria-expanded", ctx.isOpen)("aria-owns", ctx.isOpen ? ctx.dropdownId : null)("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClear());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], NgItemLabelDirective, NgDropdownPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
        styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;cursor:default;display:-webkit-box;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{-webkit-box-flex:1;flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      NgSelectComponent.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['class']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['autofocus']
          }]
        }, {
          type: NgSelectConfig
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [SELECTION_MODEL_FACTORY]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: ConsoleService
        }];
      };

      NgSelectComponent.propDecorators = {
        bindLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bindValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        markFirst: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        notFoundText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        typeToSearchText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        addTagText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loadingText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clearAllText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropdownPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        closeOnSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hideSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectOnTab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        openOnEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxSelectedItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        groupBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        groupValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bufferAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        virtualScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectableGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectableGroupAsModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        searchFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        trackByFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clearOnBackspace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        labelForId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputAttrs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        searchWhileComposing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minTermLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        keyDownFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        typeahead: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-typeahead']
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-multiple']
        }],
        addTag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-taggable']
        }],
        searchable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-searchable']
        }],
        clearable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-clearable']
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-opened']
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clearSearchOnAdd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        blurEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['blur']
        }],
        focusEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['focus']
        }],
        changeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['change']
        }],
        openEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['open']
        }],
        closeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['close']
        }],
        searchEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['search']
        }],
        clearEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['clear']
        }],
        addEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['add']
        }],
        removeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['remove']
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['scroll']
        }],
        scrollToEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['scrollToEnd']
        }],
        optionTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgOptionTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        optgroupTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgOptgroupTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        labelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgLabelTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        multiLabelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgMultiLabelTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        headerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgHeaderTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        footerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgFooterTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        notFoundTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgNotFoundTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        typeToSearchTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgTypeToSearchTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        loadingTextTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgLoadingTextTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        tagTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgTagTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        loadingSpinnerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgLoadingSpinnerTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        dropdownPanel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return NgDropdownPanelComponent;
          }), {
            "static": false
          }]
        }],
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchInput', {
            "static": true
          }]
        }],
        ngOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [NgOptionComponent, {
            descendants: true
          }]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-disabled']
        }],
        filtered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-filtered']
        }],
        handleKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ng-select',
            template: "<div\n    (mousedown)=\"handleMousedown($event)\"\n    [class.ng-appearance-outline]=\"appearance === 'outline'\"\n    [class.ng-has-value]=\"hasValue\"\n    class=\"ng-select-container\">\n\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\xD7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\">\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   role=\"combobox\"\n                   [attr.aria-expanded]=\"isOpen\"\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\xD7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
              /**
              * @return {?}
              */
              function () {
                return NgSelectComponent;
              }),
              multi: true
            }, NgDropdownPanelService],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
              'role': 'listbox',
              'class': 'ng-select',
              '[class.ng-select-single]': '!multiple'
            },
            styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;cursor:default;display:-webkit-box;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{-webkit-box-flex:1;flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
              args: ['class']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
              args: ['autofocus']
            }]
          }, {
            type: NgSelectConfig
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [SELECTION_MODEL_FACTORY]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: ConsoleService
          }];
        }, {
          markFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dropdownPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          closeOnSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hideSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selectOnTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selectableGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selectableGroupAsModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          searchFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          trackByFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clearOnBackspace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          labelForId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          inputAttrs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          searchWhileComposing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          minTermLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          keyDownFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-multiple']
          }],
          addTag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-taggable']
          }],
          searchable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-searchable']
          }],
          clearable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-clearable']
          }],
          isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-opened']
          }],
          blurEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['blur']
          }],
          focusEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['focus']
          }],
          changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['change']
          }],
          openEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['open']
          }],
          closeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['close']
          }],
          searchEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['search']
          }],
          clearEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['clear']
          }],
          addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['add']
          }],
          removeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['remove']
          }],
          scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['scroll']
          }],
          scrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['scrollToEnd']
          }],
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clearSearchOnAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-disabled']
          }],
          filtered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-filtered']
          }],

          /**
           * @param {?} $event
           * @return {?}
           */
          handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
          }],
          bindLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          notFoundText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          typeToSearchText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          addTagText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          loadingText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clearAllText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          openOnEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          bindValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxSelectedItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          groupBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          groupValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          typeahead: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-typeahead']
          }],
          optionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgOptionTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
              "static": false
            }]
          }],
          optgroupTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgOptgroupTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
              "static": false
            }]
          }],
          labelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgLabelTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
              "static": false
            }]
          }],
          multiLabelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgMultiLabelTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
              "static": false
            }]
          }],
          headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgHeaderTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
              "static": false
            }]
          }],
          footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgFooterTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
              "static": false
            }]
          }],
          notFoundTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgNotFoundTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
              "static": false
            }]
          }],
          typeToSearchTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgTypeToSearchTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
              "static": false
            }]
          }],
          loadingTextTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgLoadingTextTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
              "static": false
            }]
          }],
          tagTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgTagTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
              "static": false
            }]
          }],
          loadingSpinnerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgLoadingSpinnerTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
              "static": false
            }]
          }],
          dropdownPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return NgDropdownPanelComponent;
            }), {
              "static": false
            }]
          }],
          searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchInput', {
              "static": true
            }]
          }],
          ngOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NgOptionComponent, {
              descendants: true
            }]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @return {?}
       */


      function DefaultSelectionModelFactory() {
        return new DefaultSelectionModel();
      }
      /**
       * @record
       */


      function SelectionModel() {}

      if (false) {}

      var DefaultSelectionModel = /*#__PURE__*/function () {
        function DefaultSelectionModel() {
          _classCallCheck(this, DefaultSelectionModel);

          this._selected = [];
        }
        /**
         * @return {?}
         */


        _createClass(DefaultSelectionModel, [{
          key: "value",
          get: function get() {
            return this._selected;
          }
          /**
           * @param {?} item
           * @param {?} multiple
           * @param {?} groupAsModel
           * @return {?}
           */

        }, {
          key: "select",
          value: function select(item, multiple, groupAsModel) {
            item.selected = true;

            if (!item.children || !multiple && groupAsModel) {
              this._selected.push(item);
            }

            if (multiple) {
              if (item.parent) {
                /** @type {?} */
                var childrenCount = item.parent.children.length;
                /** @type {?} */

                var selectedCount = item.parent.children.filter(
                /**
                * @param {?} x
                * @return {?}
                */
                function (x) {
                  return x.selected;
                }).length;
                item.parent.selected = childrenCount === selectedCount;
              } else if (item.children) {
                this._setChildrenSelectedState(item.children, true);

                this._removeChildren(item);

                if (groupAsModel && this._activeChildren(item)) {
                  this._selected = [].concat(_toConsumableArray(this._selected.filter(
                  /**
                  * @param {?} x
                  * @return {?}
                  */
                  function (x) {
                    return x.parent !== item;
                  })), [item]);
                } else {
                  this._selected = [].concat(_toConsumableArray(this._selected), _toConsumableArray(item.children.filter(
                  /**
                  * @param {?} x
                  * @return {?}
                  */
                  function (x) {
                    return !x.disabled;
                  })));
                }
              }
            }
          }
          /**
           * @param {?} item
           * @param {?} multiple
           * @return {?}
           */

        }, {
          key: "unselect",
          value: function unselect(item, multiple) {
            this._selected = this._selected.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x !== item;
            });
            item.selected = false;

            if (multiple) {
              if (item.parent && item.parent.selected) {
                var _this$_selected;

                /** @type {?} */
                var children = item.parent.children;

                this._removeParent(item.parent);

                this._removeChildren(item.parent);

                (_this$_selected = this._selected).push.apply(_this$_selected, _toConsumableArray(children.filter(
                /**
                * @param {?} x
                * @return {?}
                */
                function (x) {
                  return x !== item && !x.disabled;
                })));

                item.parent.selected = false;
              } else if (item.children) {
                this._setChildrenSelectedState(item.children, false);

                this._removeChildren(item);
              }
            }
          }
          /**
           * @param {?} keepDisabled
           * @return {?}
           */

        }, {
          key: "clear",
          value: function clear(keepDisabled) {
            this._selected = keepDisabled ? this._selected.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.disabled;
            }) : [];
          }
          /**
           * @private
           * @param {?} children
           * @param {?} selected
           * @return {?}
           */

        }, {
          key: "_setChildrenSelectedState",
          value: function _setChildrenSelectedState(children, selected) {
            var _iterator7 = _createForOfIteratorHelper(children),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var child = _step7.value;

                if (child.disabled) {
                  continue;
                }

                child.selected = selected;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            ;
          }
          /**
           * @private
           * @param {?} parent
           * @return {?}
           */

        }, {
          key: "_removeChildren",
          value: function _removeChildren(parent) {
            this._selected = [].concat(_toConsumableArray(this._selected.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.parent !== parent;
            })), _toConsumableArray(parent.children.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.parent === parent && x.disabled && x.selected;
            })));
          }
          /**
           * @private
           * @param {?} parent
           * @return {?}
           */

        }, {
          key: "_removeParent",
          value: function _removeParent(parent) {
            this._selected = this._selected.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x !== parent;
            });
          }
          /**
           * @private
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_activeChildren",
          value: function _activeChildren(item) {
            return item.children.every(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return !x.disabled || x.selected;
            });
          }
        }]);

        return DefaultSelectionModel;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ɵ0 = DefaultSelectionModelFactory;

      var NgSelectModule = function NgSelectModule() {
        _classCallCheck(this, NgSelectModule);
      };

      NgSelectModule.ɵfac = function NgSelectModule_Factory(t) {
        return new (t || NgSelectModule)();
      };

      NgSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgSelectModule
      });
      NgSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [{
          provide: SELECTION_MODEL_FACTORY,
          useValue: ɵ0
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgSelectModule, {
          declarations: function declarations() {
            return [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
          },
          exports: function exports() {
            return [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
            exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective],
            providers: [{
              provide: SELECTION_MODEL_FACTORY,
              useValue: ɵ0
            }]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ng-select-ng-select.js.map

      /***/

    },

    /***/
    "ZR4w":
    /*!**************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/map.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function ZR4w(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Applies a given `project` function to each value emitted by the source
       * Observable, and emits the resulting values as an Observable.
       *
       * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
       * it passes each source value through a transformation function to get
       * corresponding output values.</span>
       *
       * <img src="./img/map.png" width="100%">
       *
       * Similar to the well known `Array.prototype.map` function, this operator
       * applies a projection to each value and emits that projection in the output
       * Observable.
       *
       * @example <caption>Map every click to the clientX position of that click</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var positions = clicks.map(ev => ev.clientX);
       * positions.subscribe(x => console.log(x));
       *
       * @see {@link mapTo}
       * @see {@link pluck}
       *
       * @param {function(value: T, index: number): R} project The function to apply
       * to each `value` emitted by the source Observable. The `index` parameter is
       * the number `i` for the i-th emission that has happened since the
       * subscription, starting from the number `0`.
       * @param {any} [thisArg] An optional argument to define what `this` is in the
       * `project` function.
       * @return {Observable<R>} An Observable that emits the values from the source
       * Observable transformed by the given `project` function.
       * @method map
       * @owner Observable
       */


      function map(project, thisArg) {
        return operators_1.map(project, thisArg)(this);
      }

      exports.map = map; //# sourceMappingURL=map.js.map

      /***/
    },

    /***/
    "Zw/6":
    /*!***************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/bufferToggle.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function Zw6(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var bufferToggle_1 = __webpack_require__(
      /*! ../../operator/bufferToggle */
      "BSEn");

      rxjs_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle; //# sourceMappingURL=bufferToggle.js.map

      /***/
    },

    /***/
    "aMoL":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/publish.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function aMoL(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var publish_1 = __webpack_require__(
      /*! ../../operator/publish */
      "jtHT");

      rxjs_1.Observable.prototype.publish = publish_1.publish; //# sourceMappingURL=publish.js.map

      /***/
    },

    /***/
    "aP66":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/timeout.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function aP66(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       *
       * Errors if Observable does not emit a value in given time span.
       *
       * <span class="informal">Timeouts on Observable that doesn't emit values fast enough.</span>
       *
       * <img src="./img/timeout.png" width="100%">
       *
       * `timeout` operator accepts as an argument either a number or a Date.
       *
       * If number was provided, it returns an Observable that behaves like a source
       * Observable, unless there is a period of time where there is no value emitted.
       * So if you provide `100` as argument and first value comes after 50ms from
       * the moment of subscription, this value will be simply re-emitted by the resulting
       * Observable. If however after that 100ms passes without a second value being emitted,
       * stream will end with an error and source Observable will be unsubscribed.
       * These checks are performed throughout whole lifecycle of Observable - from the moment
       * it was subscribed to, until it completes or errors itself. Thus every value must be
       * emitted within specified period since previous value.
       *
       * If provided argument was Date, returned Observable behaves differently. It throws
       * if Observable did not complete before provided Date. This means that periods between
       * emission of particular values do not matter in this case. If Observable did not complete
       * before provided Date, source Observable will be unsubscribed. Other than that, resulting
       * stream behaves just as source Observable.
       *
       * `timeout` accepts also a Scheduler as a second parameter. It is used to schedule moment (or moments)
       * when returned Observable will check if source stream emitted value or completed.
       *
       * @example <caption>Check if ticks are emitted within certain timespan</caption>
       * const seconds = Rx.Observable.interval(1000);
       *
       * seconds.timeout(1100) // Let's use bigger timespan to be safe,
       *                       // since `interval` might fire a bit later then scheduled.
       * .subscribe(
       *     value => console.log(value), // Will emit numbers just as regular `interval` would.
       *     err => console.log(err) // Will never be called.
       * );
       *
       * seconds.timeout(900).subscribe(
       *     value => console.log(value), // Will never be called.
       *     err => console.log(err) // Will emit error before even first value is emitted,
       *                             // since it did not arrive within 900ms period.
       * );
       *
       * @example <caption>Use Date to check if Observable completed</caption>
       * const seconds = Rx.Observable.interval(1000);
       *
       * seconds.timeout(new Date("December 17, 2020 03:24:00"))
       * .subscribe(
       *     value => console.log(value), // Will emit values as regular `interval` would
       *                                  // until December 17, 2020 at 03:24:00.
       *     err => console.log(err) // On December 17, 2020 at 03:24:00 it will emit an error,
       *                             // since Observable did not complete by then.
       * );
       *
       * @see {@link timeoutWith}
       *
       * @param {number|Date} due Number specifying period within which Observable must emit values
       *                          or Date specifying before when Observable should complete
       * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
       * @return {Observable<T>} Observable that mirrors behaviour of source, unless timeout checks fail.
       * @method timeout
       * @owner Observable
       */


      function timeout(due, scheduler) {
        if (scheduler === void 0) {
          scheduler = rxjs_1.asyncScheduler;
        }

        return operators_1.timeout(due, scheduler)(this);
      }

      exports.timeout = timeout; //# sourceMappingURL=timeout.js.map

      /***/
    },

    /***/
    "atJV":
    /*!***************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/last.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function atJV(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Returns an Observable that emits only the last item emitted by the source Observable.
       * It optionally takes a predicate function as a parameter, in which case, rather than emitting
       * the last item from the source Observable, the resulting Observable will emit the last item
       * from the source Observable that satisfies the predicate.
       *
       * <img src="./img/last.png" width="100%">
       *
       * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
       * callback if the Observable completes before any `next` notification was sent.
       * @param {function} [predicate] - The condition any source emitted item has to satisfy.
       * @param {any} [defaultValue] - The default value to use if the predicate isn't
       * satisfied, or no values were emitted (if no predicate).
       * @return {Observable} An Observable that emits only the last item satisfying the given condition
       * from the source, or an NoSuchElementException if no such items are emitted.
       * @throws - Throws if no items that match the predicate are emitted by the source Observable.
       * @method last
       * @owner Observable
       */


      function last() {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return operators_1.last.apply(void 0, args)(this);
      }

      exports.last = last; //# sourceMappingURL=last.js.map

      /***/
    },

    /***/
    "b/PJ":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/skipUntil.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function bPJ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
       *
       * <img src="./img/skipUntil.png" width="100%">
       *
       * @param {Observable} notifier - The second Observable that has to emit an item before the source Observable's elements begin to
       * be mirrored by the resulting Observable.
       * @return {Observable<T>} An Observable that skips items from the source Observable until the second Observable emits
       * an item, then emits the remaining items.
       * @method skipUntil
       * @owner Observable
       */


      function skipUntil(notifier) {
        return operators_1.skipUntil(notifier)(this);
      }

      exports.skipUntil = skipUntil; //# sourceMappingURL=skipUntil.js.map

      /***/
    },

    /***/
    "bHhB":
    /*!***************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/windowToggle.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function bHhB(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var windowToggle_1 = __webpack_require__(
      /*! ../../operator/windowToggle */
      "n6Nf");

      rxjs_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle; //# sourceMappingURL=windowToggle.js.map

      /***/
    },

    /***/
    "bKLx":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/timeInterval.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function bKLx(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @param scheduler
       * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
       * @method timeInterval
       * @owner Observable
       */


      function timeInterval(scheduler) {
        if (scheduler === void 0) {
          scheduler = rxjs_1.asyncScheduler;
        }

        return operators_1.timeInterval(scheduler)(this);
      }

      exports.timeInterval = timeInterval; //# sourceMappingURL=timeInterval.js.map

      /***/
    },

    /***/
    "bUWp":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/race.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function bUWp(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var race_1 = __webpack_require__(
      /*! ../../operator/race */
      "Myac");

      rxjs_1.Observable.prototype.race = race_1.race; //# sourceMappingURL=race.js.map

      /***/
    },

    /***/
    "bb3/":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/timestamp.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function bb3(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @param scheduler
       * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
       * @method timestamp
       * @owner Observable
       */


      function timestamp(scheduler) {
        if (scheduler === void 0) {
          scheduler = rxjs_1.asyncScheduler;
        }

        return operators_1.timestamp(scheduler)(this);
      }

      exports.timestamp = timestamp; //# sourceMappingURL=timestamp.js.map

      /***/
    },

    /***/
    "bcPL":
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/onErrorResumeNext.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function bcPL(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
       * that was passed.
       *
       * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
       *
       * <img src="./img/onErrorResumeNext.png" width="100%">
       *
       * `onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as
       * arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same
       * as the source.
       *
       * `onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable.
       * When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext`
       * will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting
       * its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another
       * Observable in provided series, no matter if previous Observable completed or ended with an error. This will
       * be happening until there is no more Observables left in the series, at which point returned Observable will
       * complete - even if the last subscribed stream ended with an error.
       *
       * `onErrorResumeNext` can be therefore thought of as version of {@link concat} operator, which is more permissive
       * when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable
       * in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with
       * an error.
       *
       * Note that you do not get any access to errors emitted by the Observables. In particular do not
       * expect these errors to appear in error callback passed to {@link subscribe}. If you want to take
       * specific actions based on what error was emitted by an Observable, you should try out {@link catch} instead.
       *
       *
       * @example <caption>Subscribe to the next Observable after map fails</caption>
       * Rx.Observable.of(1, 2, 3, 0)
       *   .map(x => {
       *       if (x === 0) { throw Error(); }
               return 10 / x;
       *   })
       *   .onErrorResumeNext(Rx.Observable.of(1, 2, 3))
       *   .subscribe(
       *     val => console.log(val),
       *     err => console.log(err),          // Will never be called.
       *     () => console.log('that\'s it!')
       *   );
       *
       * // Logs:
       * // 10
       * // 5
       * // 3.3333333333333335
       * // 1
       * // 2
       * // 3
       * // "that's it!"
       *
       * @see {@link concat}
       * @see {@link catch}
       *
       * @param {...ObservableInput} observables Observables passed either directly or as an array.
       * @return {Observable} An Observable that emits values from source Observable, but - if it errors - subscribes
       * to the next passed Observable and so on, until it completes or runs out of Observables.
       * @method onErrorResumeNext
       * @owner Observable
       */


      function onErrorResumeNext() {
        var nextSources = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          nextSources[_i] = arguments[_i];
        }

        return operators_1.onErrorResumeNext.apply(void 0, nextSources)(this);
      }

      exports.onErrorResumeNext = onErrorResumeNext; //# sourceMappingURL=onErrorResumeNext.js.map

      /***/
    },

    /***/
    "bd5T":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/delay.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function bd5T(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Delays the emission of items from the source Observable by a given timeout or
       * until a given Date.
       *
       * <span class="informal">Time shifts each item by some specified amount of
       * milliseconds.</span>
       *
       * <img src="./img/delay.png" width="100%">
       *
       * If the delay argument is a Number, this operator time shifts the source
       * Observable by that amount of time expressed in milliseconds. The relative
       * time intervals between the values are preserved.
       *
       * If the delay argument is a Date, this operator time shifts the start of the
       * Observable execution until the given date occurs.
       *
       * @example <caption>Delay each click by one second</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
       * delayedClicks.subscribe(x => console.log(x));
       *
       * @example <caption>Delay all clicks until a future date happens</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var date = new Date('March 15, 2050 12:00:00'); // in the future
       * var delayedClicks = clicks.delay(date); // click emitted only after that date
       * delayedClicks.subscribe(x => console.log(x));
       *
       * @see {@link debounceTime}
       * @see {@link delayWhen}
       *
       * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
       * a `Date` until which the emission of the source items is delayed.
       * @param {Scheduler} [scheduler=asyncScheduler] The SchedulerLike to use for
       * managing the timers that handle the time-shift for each item.
       * @return {Observable} An Observable that delays the emissions of the source
       * Observable by the specified timeout or Date.
       * @method delay
       * @owner Observable
       */


      function delay(delay, scheduler) {
        if (scheduler === void 0) {
          scheduler = rxjs_1.asyncScheduler;
        }

        return operators_1.delay(delay, scheduler)(this);
      }

      exports.delay = delay; //# sourceMappingURL=delay.js.map

      /***/
    },

    /***/
    "bi34":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/dom/ajax.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function bi34(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ajax_1 = __webpack_require__(
      /*! rxjs/ajax */
      "laIk");

      rxjs_1.Observable.ajax = ajax_1.ajax; //# sourceMappingURL=ajax.js.map

      /***/
    },

    /***/
    "c/zl":
    /*!********************************************!*\
      !*** ./src/app/features/lac/lac.module.ts ***!
      \********************************************/

    /*! exports provided: LacModule */

    /***/
    function cZl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LacModule", function () {
        return LacModule;
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


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");
      /* harmony import */


      var _lac_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lac-routing.module */
      "4Cln");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_lac_layer_block_lac_layer_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/lac-layer-block/lac-layer-block.component */
      "T7Um");
      /* harmony import */


      var src_app_shared_components_autocomplete_filter_autocomplete_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/components/autocomplete-filter/autocomplete-filter.component */
      "uqGX");

      var LacModule = function LacModule() {
        _classCallCheck(this, LacModule);
      };

      LacModule.ɵfac = function LacModule_Factory(t) {
        return new (t || LacModule)();
      };

      LacModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: LacModule
      });
      LacModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _lac_routing_module__WEBPACK_IMPORTED_MODULE_3__["LacRoutingModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LacModule, {
          declarations: [_components_lac_layer_block_lac_layer_block_component__WEBPACK_IMPORTED_MODULE_5__["LacLayerBlockComponent"], src_app_shared_components_autocomplete_filter_autocomplete_filter_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteFilterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _lac_routing_module__WEBPACK_IMPORTED_MODULE_3__["LacRoutingModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "cD4w":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/timer.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function cD4w(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.timer = rxjs_1.timer; //# sourceMappingURL=timer.js.map

      /***/
    },

    /***/
    "cLIC":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/every.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function cLIC(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
       *
       * @example <caption>A simple example emitting true if all elements are less than 5, false otherwise</caption>
       *  Observable.of(1, 2, 3, 4, 5, 6)
       *     .every(x => x < 5)
       *     .subscribe(x => console.log(x)); // -> false
       *
       * @param {function} predicate A function for determining if an item meets a specified condition.
       * @param {any} [thisArg] Optional object to use for `this` in the callback.
       * @return {Observable} An Observable of booleans that determines if all items of the source Observable meet the condition specified.
       * @method every
       * @owner Observable
       */


      function every(predicate, thisArg) {
        return operators_1.every(predicate, thisArg)(this);
      }

      exports.every = every; //# sourceMappingURL=every.js.map

      /***/
    },

    /***/
    "cPnI":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/merge.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function cPnI(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var merge_1 = __webpack_require__(
      /*! ../../operator/merge */
      "02G1");

      rxjs_1.Observable.prototype.merge = merge_1.merge; //# sourceMappingURL=merge.js.map

      /***/
    },

    /***/
    "cYpg":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/bufferWhen.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function cYpg(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Buffers the source Observable values, using a factory function of closing
       * Observables to determine when to close, emit, and reset the buffer.
       *
       * <span class="informal">Collects values from the past as an array. When it
       * starts collecting values, it calls a function that returns an Observable that
       * tells when to close the buffer and restart collecting.</span>
       *
       * <img src="./img/bufferWhen.png" width="100%">
       *
       * Opens a buffer immediately, then closes the buffer when the observable
       * returned by calling `closingSelector` function emits a value. When it closes
       * the buffer, it immediately opens a new buffer and repeats the process.
       *
       * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var buffered = clicks.bufferWhen(() =>
       *   Rx.Observable.interval(1000 + Math.random() * 4000)
       * );
       * buffered.subscribe(x => console.log(x));
       *
       * @see {@link buffer}
       * @see {@link bufferCount}
       * @see {@link bufferTime}
       * @see {@link bufferToggle}
       * @see {@link windowWhen}
       *
       * @param {function(): Observable} closingSelector A function that takes no
       * arguments and returns an Observable that signals buffer closure.
       * @return {Observable<T[]>} An observable of arrays of buffered values.
       * @method bufferWhen
       * @owner Observable
       */


      function bufferWhen(closingSelector) {
        return operators_1.bufferWhen(closingSelector)(this);
      }

      exports.bufferWhen = bufferWhen; //# sourceMappingURL=bufferWhen.js.map

      /***/
    },

    /***/
    "caIW":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/concatAll.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function caIW(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Converts a higher-order Observable into a first-order Observable by
       * concatenating the inner Observables in order.
       *
       * <span class="informal">Flattens an Observable-of-Observables by putting one
       * inner Observable after the other.</span>
       *
       * <img src="./img/concatAll.png" width="100%">
       *
       * Joins every Observable emitted by the source (a higher-order Observable), in
       * a serial fashion. It subscribes to each inner Observable only after the
       * previous inner Observable has completed, and merges all of their values into
       * the returned observable.
       *
       * __Warning:__ If the source Observable emits Observables quickly and
       * endlessly, and the inner Observables it emits generally complete slower than
       * the source emits, you can run into memory issues as the incoming Observables
       * collect in an unbounded buffer.
       *
       * Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set
       * to `1`.
       *
       * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var higherOrder = clicks.map(ev => Rx.Observable.interval(1000).take(4));
       * var firstOrder = higherOrder.concatAll();
       * firstOrder.subscribe(x => console.log(x));
       *
       * // Results in the following:
       * // (results are not concurrent)
       * // For every click on the "document" it will emit values 0 to 3 spaced
       * // on a 1000ms interval
       * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
       *
       * @see {@link combineAll}
       * @see {@link concat}
       * @see {@link concatMap}
       * @see {@link concatMapTo}
       * @see {@link exhaust}
       * @see {@link mergeAll}
       * @see {@link switch}
       * @see {@link zipAll}
       *
       * @return {Observable} An Observable emitting values from all the inner
       * Observables concatenated.
       * @method concatAll
       * @owner Observable
       */


      function concatAll() {
        return operators_1.concatAll()(this);
      }

      exports.concatAll = concatAll; //# sourceMappingURL=concatAll.js.map

      /***/
    },

    /***/
    "cf52":
    /*!*****************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/withLatestFrom.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function cf52(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var withLatestFrom_1 = __webpack_require__(
      /*! ../../operator/withLatestFrom */
      "QsQ4");

      rxjs_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom; //# sourceMappingURL=withLatestFrom.js.map

      /***/
    },

    /***/
    "ciat":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/audit.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function ciat(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Ignores source values for a duration determined by another Observable, then
       * emits the most recent value from the source Observable, then repeats this
       * process.
       *
       * <span class="informal">It's like {@link auditTime}, but the silencing
       * duration is determined by a second Observable.</span>
       *
       * <img src="./img/audit.png" width="100%">
       *
       * `audit` is similar to `throttle`, but emits the last value from the silenced
       * time window, instead of the first value. `audit` emits the most recent value
       * from the source Observable on the output Observable as soon as its internal
       * timer becomes disabled, and ignores source values while the timer is enabled.
       * Initially, the timer is disabled. As soon as the first source value arrives,
       * the timer is enabled by calling the `durationSelector` function with the
       * source value, which returns the "duration" Observable. When the duration
       * Observable emits a value or completes, the timer is disabled, then the most
       * recent source value is emitted on the output Observable, and this process
       * repeats for the next source value.
       *
       * @example <caption>Emit clicks at a rate of at most one click per second</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.audit(ev => Rx.Observable.interval(1000));
       * result.subscribe(x => console.log(x));
       *
       * @see {@link auditTime}
       * @see {@link debounce}
       * @see {@link delayWhen}
       * @see {@link sample}
       * @see {@link throttle}
       *
       * @param {function(value: T): SubscribableOrPromise} durationSelector A function
       * that receives a value from the source Observable, for computing the silencing
       * duration, returned as an Observable or a Promise.
       * @return {Observable<T>} An Observable that performs rate-limiting of
       * emissions from the source Observable.
       * @method audit
       * @owner Observable
       */


      function audit(durationSelector) {
        return operators_1.audit(durationSelector)(this);
      }

      exports.audit = audit; //# sourceMappingURL=audit.js.map

      /***/
    },

    /***/
    "czqU":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/using.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function czqU(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.using = rxjs_1.using; //# sourceMappingURL=using.js.map

      /***/
    },

    /***/
    "dJRF":
    /*!*****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/util/errorObject.js ***!
      \*****************************************************************/

    /*! exports provided: errorObject */

    /***/
    function dJRF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errorObject", function () {
        return errorObject;
      });

      var errorObject = {
        e: {}
      }; //# sourceMappingURL=errorObject.js.map

      /***/
    },

    /***/
    "dL1u":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/buffer.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function dL1u(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Buffers the source Observable values until `closingNotifier` emits.
       *
       * <span class="informal">Collects values from the past as an array, and emits
       * that array only when another Observable emits.</span>
       *
       * <img src="./img/buffer.png" width="100%">
       *
       * Buffers the incoming Observable values until the given `closingNotifier`
       * Observable emits a value, at which point it emits the buffer on the output
       * Observable and starts a new buffer internally, awaiting the next time
       * `closingNotifier` emits.
       *
       * @example <caption>On every click, emit array of most recent interval events</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var interval = Rx.Observable.interval(1000);
       * var buffered = interval.buffer(clicks);
       * buffered.subscribe(x => console.log(x));
       *
       * @see {@link bufferCount}
       * @see {@link bufferTime}
       * @see {@link bufferToggle}
       * @see {@link bufferWhen}
       * @see {@link window}
       *
       * @param {Observable<any>} closingNotifier An Observable that signals the
       * buffer to be emitted on the output Observable.
       * @return {Observable<T[]>} An Observable of buffers, which are arrays of
       * values.
       * @method buffer
       * @owner Observable
       */


      function buffer(closingNotifier) {
        return operators_1.buffer(closingNotifier)(this);
      }

      exports.buffer = buffer; //# sourceMappingURL=buffer.js.map

      /***/
    },

    /***/
    "dlYL":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/audit.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function dlYL(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var audit_1 = __webpack_require__(
      /*! ../../operator/audit */
      "ciat");

      rxjs_1.Observable.prototype.audit = audit_1.audit; //# sourceMappingURL=audit.js.map

      /***/
    },

    /***/
    "dzLn":
    /*!***************************************************!*\
      !*** ./src/app/features/lac/facades/pg-facade.ts ***!
      \***************************************************/

    /*! exports provided: PgFacade */

    /***/
    function dzLn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PgFacade", function () {
        return PgFacade;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PgFacade = /*#__PURE__*/function () {
        function PgFacade() {
          _classCallCheck(this, PgFacade);
        }

        _createClass(PgFacade, [{
          key: "PgMethodOne",
          value: function PgMethodOne() {
            console.log("pg method one called");
          }
        }]);

        return PgFacade;
      }();

      PgFacade.ɵfac = function PgFacade_Factory(t) {
        return new (t || PgFacade)();
      };

      PgFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PgFacade,
        factory: PgFacade.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "e3gX":
    /*!**********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/testing/TestScheduler.js ***!
      \**********************************************************************/

    /*! exports provided: TestScheduler */

    /***/
    function e3gX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestScheduler", function () {
        return TestScheduler;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "HDdC");
      /* harmony import */


      var _Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Notification */
      "WMd4");
      /* harmony import */


      var _ColdObservable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ColdObservable */
      "DeeD");
      /* harmony import */


      var _HotObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./HotObservable */
      "KFR4");
      /* harmony import */


      var _SubscriptionLog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./SubscriptionLog */
      "i3aC");
      /* harmony import */


      var _scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../scheduler/VirtualTimeScheduler */
      "iKkX");
      /* harmony import */


      var _scheduler_AsyncScheduler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../scheduler/AsyncScheduler */
      "IjjT");

      var defaultMaxFrame = 750;

      var TestScheduler = /*#__PURE__*/function (_scheduler_VirtualTim) {
        _inherits(TestScheduler, _scheduler_VirtualTim);

        var _super5 = _createSuper(TestScheduler);

        function TestScheduler(assertDeepEqual) {
          var _this27;

          _classCallCheck(this, TestScheduler);

          _this27 = _super5.call(this, _scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_5__["VirtualAction"], defaultMaxFrame);
          _this27.assertDeepEqual = assertDeepEqual;
          _this27.hotObservables = [];
          _this27.coldObservables = [];
          _this27.flushTests = [];
          _this27.runMode = false;
          return _this27;
        }

        _createClass(TestScheduler, [{
          key: "createTime",
          value: function createTime(marbles) {
            var indexOf = marbles.indexOf('|');

            if (indexOf === -1) {
              throw new Error('marble diagram for time should have a completion marker "|"');
            }

            return indexOf * TestScheduler.frameTimeFactor;
          }
        }, {
          key: "createColdObservable",
          value: function createColdObservable(marbles, values, error) {
            if (marbles.indexOf('^') !== -1) {
              throw new Error('cold observable cannot have subscription offset "^"');
            }

            if (marbles.indexOf('!') !== -1) {
              throw new Error('cold observable cannot have unsubscription marker "!"');
            }

            var messages = TestScheduler.parseMarbles(marbles, values, error, undefined, this.runMode);
            var cold = new _ColdObservable__WEBPACK_IMPORTED_MODULE_2__["ColdObservable"](messages, this);
            this.coldObservables.push(cold);
            return cold;
          }
        }, {
          key: "createHotObservable",
          value: function createHotObservable(marbles, values, error) {
            if (marbles.indexOf('!') !== -1) {
              throw new Error('hot observable cannot have unsubscription marker "!"');
            }

            var messages = TestScheduler.parseMarbles(marbles, values, error, undefined, this.runMode);
            var subject = new _HotObservable__WEBPACK_IMPORTED_MODULE_3__["HotObservable"](messages, this);
            this.hotObservables.push(subject);
            return subject;
          }
        }, {
          key: "materializeInnerObservable",
          value: function materializeInnerObservable(observable, outerFrame) {
            var _this28 = this;

            var messages = [];
            observable.subscribe(function (value) {
              messages.push({
                frame: _this28.frame - outerFrame,
                notification: _Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createNext(value)
              });
            }, function (err) {
              messages.push({
                frame: _this28.frame - outerFrame,
                notification: _Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createError(err)
              });
            }, function () {
              messages.push({
                frame: _this28.frame - outerFrame,
                notification: _Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createComplete()
              });
            });
            return messages;
          }
        }, {
          key: "expectObservable",
          value: function expectObservable(observable) {
            var _this29 = this;

            var subscriptionMarbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var actual = [];
            var flushTest = {
              actual: actual,
              ready: false
            };
            var subscriptionParsed = TestScheduler.parseMarblesAsSubscriptions(subscriptionMarbles, this.runMode);
            var subscriptionFrame = subscriptionParsed.subscribedFrame === Number.POSITIVE_INFINITY ? 0 : subscriptionParsed.subscribedFrame;
            var unsubscriptionFrame = subscriptionParsed.unsubscribedFrame;
            var subscription;
            this.schedule(function () {
              subscription = observable.subscribe(function (x) {
                var value = x;

                if (x instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
                  value = _this29.materializeInnerObservable(value, _this29.frame);
                }

                actual.push({
                  frame: _this29.frame,
                  notification: _Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createNext(value)
                });
              }, function (err) {
                actual.push({
                  frame: _this29.frame,
                  notification: _Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createError(err)
                });
              }, function () {
                actual.push({
                  frame: _this29.frame,
                  notification: _Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createComplete()
                });
              });
            }, subscriptionFrame);

            if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
              this.schedule(function () {
                return subscription.unsubscribe();
              }, unsubscriptionFrame);
            }

            this.flushTests.push(flushTest);
            var runMode = this.runMode;
            return {
              toBe: function toBe(marbles, values, errorValue) {
                flushTest.ready = true;
                flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true, runMode);
              }
            };
          }
        }, {
          key: "expectSubscriptions",
          value: function expectSubscriptions(actualSubscriptionLogs) {
            var flushTest = {
              actual: actualSubscriptionLogs,
              ready: false
            };
            this.flushTests.push(flushTest);
            var runMode = this.runMode;
            return {
              toBe: function toBe(marbles) {
                var marblesArray = typeof marbles === 'string' ? [marbles] : marbles;
                flushTest.ready = true;
                flushTest.expected = marblesArray.map(function (marbles) {
                  return TestScheduler.parseMarblesAsSubscriptions(marbles, runMode);
                });
              }
            };
          }
        }, {
          key: "flush",
          value: function flush() {
            var _this30 = this;

            var hotObservables = this.hotObservables;

            while (hotObservables.length > 0) {
              hotObservables.shift().setup();
            }

            _get(_getPrototypeOf(TestScheduler.prototype), "flush", this).call(this);

            this.flushTests = this.flushTests.filter(function (test) {
              if (test.ready) {
                _this30.assertDeepEqual(test.actual, test.expected);

                return false;
              }

              return true;
            });
          }
        }, {
          key: "run",
          value: function run(callback) {
            var prevFrameTimeFactor = TestScheduler.frameTimeFactor;
            var prevMaxFrames = this.maxFrames;
            TestScheduler.frameTimeFactor = 1;
            this.maxFrames = Number.POSITIVE_INFINITY;
            this.runMode = true;
            _scheduler_AsyncScheduler__WEBPACK_IMPORTED_MODULE_6__["AsyncScheduler"].delegate = this;
            var helpers = {
              cold: this.createColdObservable.bind(this),
              hot: this.createHotObservable.bind(this),
              flush: this.flush.bind(this),
              expectObservable: this.expectObservable.bind(this),
              expectSubscriptions: this.expectSubscriptions.bind(this)
            };

            try {
              var ret = callback(helpers);
              this.flush();
              return ret;
            } finally {
              TestScheduler.frameTimeFactor = prevFrameTimeFactor;
              this.maxFrames = prevMaxFrames;
              this.runMode = false;
              _scheduler_AsyncScheduler__WEBPACK_IMPORTED_MODULE_6__["AsyncScheduler"].delegate = undefined;
            }
          }
        }], [{
          key: "parseMarblesAsSubscriptions",
          value: function parseMarblesAsSubscriptions(marbles) {
            var _this31 = this;

            var runMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (typeof marbles !== 'string') {
              return new _SubscriptionLog__WEBPACK_IMPORTED_MODULE_4__["SubscriptionLog"](Number.POSITIVE_INFINITY);
            }

            var len = marbles.length;
            var groupStart = -1;
            var subscriptionFrame = Number.POSITIVE_INFINITY;
            var unsubscriptionFrame = Number.POSITIVE_INFINITY;
            var frame = 0;

            for (var i = 0; i < len; i++) {
              var nextFrame = frame;

              var advanceFrameBy = function advanceFrameBy(count) {
                nextFrame += count * _this31.frameTimeFactor;
              };

              var c = marbles[i];

              switch (c) {
                case ' ':
                  if (!runMode) {
                    advanceFrameBy(1);
                  }

                  break;

                case '-':
                  advanceFrameBy(1);
                  break;

                case '(':
                  groupStart = frame;
                  advanceFrameBy(1);
                  break;

                case ')':
                  groupStart = -1;
                  advanceFrameBy(1);
                  break;

                case '^':
                  if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
                    throw new Error('found a second subscription point \'^\' in a ' + 'subscription marble diagram. There can only be one.');
                  }

                  subscriptionFrame = groupStart > -1 ? groupStart : frame;
                  advanceFrameBy(1);
                  break;

                case '!':
                  if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                    throw new Error('found a second subscription point \'^\' in a ' + 'subscription marble diagram. There can only be one.');
                  }

                  unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
                  break;

                default:
                  if (runMode && c.match(/^[0-9]$/)) {
                    if (i === 0 || marbles[i - 1] === ' ') {
                      var buffer = marbles.slice(i);
                      var match = buffer.match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);

                      if (match) {
                        i += match[0].length - 1;
                        var duration = parseFloat(match[1]);
                        var unit = match[2];
                        var durationInMs = void 0;

                        switch (unit) {
                          case 'ms':
                            durationInMs = duration;
                            break;

                          case 's':
                            durationInMs = duration * 1000;
                            break;

                          case 'm':
                            durationInMs = duration * 1000 * 60;
                            break;

                          default:
                            break;
                        }

                        advanceFrameBy(durationInMs / this.frameTimeFactor);
                        break;
                      }
                    }
                  }

                  throw new Error('there can only be \'^\' and \'!\' markers in a ' + 'subscription marble diagram. Found instead \'' + c + '\'.');
              }

              frame = nextFrame;
            }

            if (unsubscriptionFrame < 0) {
              return new _SubscriptionLog__WEBPACK_IMPORTED_MODULE_4__["SubscriptionLog"](subscriptionFrame);
            } else {
              return new _SubscriptionLog__WEBPACK_IMPORTED_MODULE_4__["SubscriptionLog"](subscriptionFrame, unsubscriptionFrame);
            }
          }
        }, {
          key: "parseMarbles",
          value: function parseMarbles(marbles, values, errorValue) {
            var _this32 = this;

            var materializeInnerObservables = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var runMode = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

            if (marbles.indexOf('!') !== -1) {
              throw new Error('conventional marble diagrams cannot have the ' + 'unsubscription marker "!"');
            }

            var len = marbles.length;
            var testMessages = [];
            var subIndex = runMode ? marbles.replace(/^[ ]+/, '').indexOf('^') : marbles.indexOf('^');
            var frame = subIndex === -1 ? 0 : subIndex * -this.frameTimeFactor;
            var getValue = typeof values !== 'object' ? function (x) {
              return x;
            } : function (x) {
              if (materializeInnerObservables && values[x] instanceof _ColdObservable__WEBPACK_IMPORTED_MODULE_2__["ColdObservable"]) {
                return values[x].messages;
              }

              return values[x];
            };
            var groupStart = -1;

            for (var i = 0; i < len; i++) {
              var nextFrame = frame;

              var advanceFrameBy = function advanceFrameBy(count) {
                nextFrame += count * _this32.frameTimeFactor;
              };

              var notification = void 0;
              var c = marbles[i];

              switch (c) {
                case ' ':
                  if (!runMode) {
                    advanceFrameBy(1);
                  }

                  break;

                case '-':
                  advanceFrameBy(1);
                  break;

                case '(':
                  groupStart = frame;
                  advanceFrameBy(1);
                  break;

                case ')':
                  groupStart = -1;
                  advanceFrameBy(1);
                  break;

                case '|':
                  notification = _Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createComplete();
                  advanceFrameBy(1);
                  break;

                case '^':
                  advanceFrameBy(1);
                  break;

                case '#':
                  notification = _Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createError(errorValue || 'error');
                  advanceFrameBy(1);
                  break;

                default:
                  if (runMode && c.match(/^[0-9]$/)) {
                    if (i === 0 || marbles[i - 1] === ' ') {
                      var buffer = marbles.slice(i);
                      var match = buffer.match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);

                      if (match) {
                        i += match[0].length - 1;
                        var duration = parseFloat(match[1]);
                        var unit = match[2];
                        var durationInMs = void 0;

                        switch (unit) {
                          case 'ms':
                            durationInMs = duration;
                            break;

                          case 's':
                            durationInMs = duration * 1000;
                            break;

                          case 'm':
                            durationInMs = duration * 1000 * 60;
                            break;

                          default:
                            break;
                        }

                        advanceFrameBy(durationInMs / this.frameTimeFactor);
                        break;
                      }
                    }
                  }

                  notification = _Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createNext(getValue(c));
                  advanceFrameBy(1);
                  break;
              }

              if (notification) {
                testMessages.push({
                  frame: groupStart > -1 ? groupStart : frame,
                  notification: notification
                });
              }

              frame = nextFrame;
            }

            return testMessages;
          }
        }]);

        return TestScheduler;
      }(_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_5__["VirtualTimeScheduler"]); //# sourceMappingURL=TestScheduler.js.map

      /***/

    },

    /***/
    "eUyF":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/concatMapTo.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function eUyF(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Projects each source value to the same Observable which is merged multiple
       * times in a serialized fashion on the output Observable.
       *
       * <span class="informal">It's like {@link concatMap}, but maps each value
       * always to the same inner Observable.</span>
       *
       * <img src="./img/concatMapTo.png" width="100%">
       *
       * Maps each source value to the given Observable `innerObservable` regardless
       * of the source value, and then flattens those resulting Observables into one
       * single Observable, which is the output Observable. Each new `innerObservable`
       * instance emitted on the output Observable is concatenated with the previous
       * `innerObservable` instance.
       *
       * __Warning:__ if source values arrive endlessly and faster than their
       * corresponding inner Observables can complete, it will result in memory issues
       * as inner Observables amass in an unbounded buffer waiting for their turn to
       * be subscribed to.
       *
       * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
       * set to `1`.
       *
       * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
       * result.subscribe(x => console.log(x));
       *
       * // Results in the following:
       * // (results are not concurrent)
       * // For every click on the "document" it will emit values 0 to 3 spaced
       * // on a 1000ms interval
       * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
       *
       * @see {@link concat}
       * @see {@link concatAll}
       * @see {@link concatMap}
       * @see {@link mergeMapTo}
       * @see {@link switchMapTo}
       *
       * @param {ObservableInput} innerObservable An Observable to replace each value from
       * the source Observable.
       * @return {Observable} An observable of values merged together by joining the
       * passed observable with itself, one after the other, for each value emitted
       * from the source.
       * @method concatMapTo
       * @owner Observable
       */


      function concatMapTo(innerObservable) {
        return operators_1.concatMapTo(innerObservable)(this);
      }

      exports.concatMapTo = concatMapTo; //# sourceMappingURL=concatMapTo.js.map

      /***/
    },

    /***/
    "eYtX":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/retryWhen.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function eYtX(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var retryWhen_1 = __webpack_require__(
      /*! ../../operator/retryWhen */
      "NEMR");

      rxjs_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen; //# sourceMappingURL=retryWhen.js.map

      /***/
    },

    /***/
    "elu/":
    /*!***************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/scan.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function elu(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Applies an accumulator function over the source Observable, and returns each
       * intermediate result, with an optional seed value.
       *
       * <span class="informal">It's like {@link reduce}, but emits the current
       * accumulation whenever the source emits a value.</span>
       *
       * <img src="./img/scan.png" width="100%">
       *
       * Combines together all values emitted on the source, using an accumulator
       * function that knows how to join a new source value into the accumulation from
       * the past. Is similar to {@link reduce}, but emits the intermediate
       * accumulations.
       *
       * Returns an Observable that applies a specified `accumulator` function to each
       * item emitted by the source Observable. If a `seed` value is specified, then
       * that value will be used as the initial value for the accumulator. If no seed
       * value is specified, the first item of the source is used as the seed.
       *
       * @example <caption>Count the number of click events</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var ones = clicks.mapTo(1);
       * var seed = 0;
       * var count = ones.scan((acc, one) => acc + one, seed);
       * count.subscribe(x => console.log(x));
       *
       * @see {@link expand}
       * @see {@link mergeScan}
       * @see {@link reduce}
       *
       * @param {function(acc: R, value: T, index: number): R} accumulator
       * The accumulator function called on each source value.
       * @param {T|R} [seed] The initial accumulation value.
       * @return {Observable<R>} An observable of the accumulated values.
       * @method scan
       * @owner Observable
       */


      function scan(accumulator, seed) {
        if (arguments.length >= 2) {
          return operators_1.scan(accumulator, seed)(this);
        }

        return operators_1.scan(accumulator)(this);
      }

      exports.scan = scan; //# sourceMappingURL=scan.js.map

      /***/
    },

    /***/
    "eyjB":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/mergeScan.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function eyjB(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var mergeScan_1 = __webpack_require__(
      /*! ../../operator/mergeScan */
      "mQn8");

      rxjs_1.Observable.prototype.mergeScan = mergeScan_1.mergeScan; //# sourceMappingURL=mergeScan.js.map

      /***/
    },

    /***/
    "fElF":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/timeout.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function fElF(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var timeout_1 = __webpack_require__(
      /*! ../../operator/timeout */
      "aP66");

      rxjs_1.Observable.prototype.timeout = timeout_1.timeout; //# sourceMappingURL=timeout.js.map

      /***/
    },

    /***/
    "fUwU":
    /*!***************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/skip.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function fUwU(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Returns an Observable that skips the first `count` items emitted by the source Observable.
       *
       * <img src="./img/skip.png" width="100%">
       *
       * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
       * @return {Observable} An Observable that skips values emitted by the source Observable.
       *
       * @method skip
       * @owner Observable
       */


      function skip(count) {
        return operators_1.skip(count)(this);
      }

      exports.skip = skip; //# sourceMappingURL=skip.js.map

      /***/
    },

    /***/
    "fY5S":
    /*!**************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/zip.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function fY5S(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* tslint:enable:max-line-length */

      /**
       * @param observables
       * @return {Observable<R>}
       * @method zip
       * @owner Observable
       */


      function zipProto() {
        var observables = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i] = arguments[_i];
        }

        return this.lift.call(rxjs_1.zip.apply(void 0, [this].concat(observables)));
      }

      exports.zipProto = zipProto; //# sourceMappingURL=zip.js.map

      /***/
    },

    /***/
    "fnh7":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/from.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function fnh7(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.from = rxjs_1.from; //# sourceMappingURL=from.js.map

      /***/
    },

    /***/
    "g0lY":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/min.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function g0lY(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var min_1 = __webpack_require__(
      /*! ../../operator/min */
      "SjmF");

      rxjs_1.Observable.prototype.min = min_1.min; //# sourceMappingURL=min.js.map

      /***/
    },

    /***/
    "gSmF":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/startWith.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function gSmF(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var startWith_1 = __webpack_require__(
      /*! ../../operator/startWith */
      "LM6Q");

      rxjs_1.Observable.prototype.startWith = startWith_1.startWith; //# sourceMappingURL=startWith.js.map

      /***/
    },

    /***/
    "gzwt":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/count.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function gzwt(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Counts the number of emissions on the source and emits that number when the
       * source completes.
       *
       * <span class="informal">Tells how many values were emitted, when the source
       * completes.</span>
       *
       * <img src="./img/count.png" width="100%">
       *
       * `count` transforms an Observable that emits values into an Observable that
       * emits a single value that represents the number of values emitted by the
       * source Observable. If the source Observable terminates with an error, `count`
       * will pass this error notification along without emitting a value first. If
       * the source Observable does not terminate at all, `count` will neither emit
       * a value nor terminate. This operator takes an optional `predicate` function
       * as argument, in which case the output emission will represent the number of
       * source values that matched `true` with the `predicate`.
       *
       * @example <caption>Counts how many seconds have passed before the first click happened</caption>
       * var seconds = Rx.Observable.interval(1000);
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var secondsBeforeClick = seconds.takeUntil(clicks);
       * var result = secondsBeforeClick.count();
       * result.subscribe(x => console.log(x));
       *
       * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
       * var numbers = Rx.Observable.range(1, 7);
       * var result = numbers.count(i => i % 2 === 1);
       * result.subscribe(x => console.log(x));
       *
       * // Results in:
       * // 4
       *
       * @see {@link max}
       * @see {@link min}
       * @see {@link reduce}
       *
       * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
       * boolean function to select what values are to be counted. It is provided with
       * arguments of:
       * - `value`: the value from the source Observable.
       * - `index`: the (zero-based) "index" of the value from the source Observable.
       * - `source`: the source Observable instance itself.
       * @return {Observable} An Observable of one number that represents the count as
       * described above.
       * @method count
       * @owner Observable
       */


      function count(predicate) {
        return operators_1.count(predicate)(this);
      }

      exports.count = count; //# sourceMappingURL=count.js.map

      /***/
    },

    /***/
    "hf5g":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/bufferTime.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function hf5g(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var bufferTime_1 = __webpack_require__(
      /*! ../../operator/bufferTime */
      "9xAK");

      rxjs_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime; //# sourceMappingURL=bufferTime.js.map

      /***/
    },

    /***/
    "hswa":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/filter.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function hswa(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var filter_1 = __webpack_require__(
      /*! ../../operator/filter */
      "ADT6");

      rxjs_1.Observable.prototype.filter = filter_1.filter; //# sourceMappingURL=filter.js.map

      /***/
    },

    /***/
    "i3aC":
    /*!************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/testing/SubscriptionLog.js ***!
      \************************************************************************/

    /*! exports provided: SubscriptionLog */

    /***/
    function i3aC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubscriptionLog", function () {
        return SubscriptionLog;
      });

      var SubscriptionLog = function SubscriptionLog(subscribedFrame) {
        var unsubscribedFrame = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;

        _classCallCheck(this, SubscriptionLog);

        this.subscribedFrame = subscribedFrame;
        this.unsubscribedFrame = unsubscribedFrame;
      }; //# sourceMappingURL=SubscriptionLog.js.map

      /***/

    },

    /***/
    "iD44":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/mergeMap.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function iD44(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Projects each source value to an Observable which is merged in the output
       * Observable.
       *
       * <span class="informal">Maps each value to an Observable, then flattens all of
       * these inner Observables using {@link mergeAll}.</span>
       *
       * <img src="./img/mergeMap.png" width="100%">
       *
       * Returns an Observable that emits items based on applying a function that you
       * supply to each item emitted by the source Observable, where that function
       * returns an Observable, and then merging those resulting Observables and
       * emitting the results of this merger.
       *
       * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
       * var letters = Rx.Observable.of('a', 'b', 'c');
       * var result = letters.mergeMap(x =>
       *   Rx.Observable.interval(1000).map(i => x+i)
       * );
       * result.subscribe(x => console.log(x));
       *
       * // Results in the following:
       * // a0
       * // b0
       * // c0
       * // a1
       * // b1
       * // c1
       * // continues to list a,b,c with respective ascending integers
       *
       * @see {@link concatMap}
       * @see {@link exhaustMap}
       * @see {@link merge}
       * @see {@link mergeAll}
       * @see {@link mergeMapTo}
       * @see {@link mergeScan}
       * @see {@link switchMap}
       *
       * @param {function(value: T, ?index: number): ObservableInput} project A function
       * that, when applied to an item emitted by the source Observable, returns an
       * Observable.
       * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
       * Observables being subscribed to concurrently.
       * @return {Observable} An Observable that emits the result of applying the
       * projection function (and the optional `resultSelector`) to each item emitted
       * by the source Observable and merging the results of the Observables obtained
       * from this transformation.
       * @method mergeMap
       * @owner Observable
       */


      function mergeMap(project, concurrent) {
        if (concurrent === void 0) {
          concurrent = Number.POSITIVE_INFINITY;
        }

        return operators_1.mergeMap(project, concurrent)(this);
      }

      exports.mergeMap = mergeMap; //# sourceMappingURL=mergeMap.js.map

      /***/
    },

    /***/
    "itJ+":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/bufferCount.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function itJ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Buffers the source Observable values until the size hits the maximum
       * `bufferSize` given.
       *
       * <span class="informal">Collects values from the past as an array, and emits
       * that array only when its size reaches `bufferSize`.</span>
       *
       * <img src="./img/bufferCount.png" width="100%">
       *
       * Buffers a number of values from the source Observable by `bufferSize` then
       * emits the buffer and clears it, and starts a new buffer each
       * `startBufferEvery` values. If `startBufferEvery` is not provided or is
       * `null`, then new buffers are started immediately at the start of the source
       * and when each buffer closes and is emitted.
       *
       * @example <caption>Emit the last two click events as an array</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var buffered = clicks.bufferCount(2);
       * buffered.subscribe(x => console.log(x));
       *
       * @example <caption>On every click, emit the last two click events as an array</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var buffered = clicks.bufferCount(2, 1);
       * buffered.subscribe(x => console.log(x));
       *
       * @see {@link buffer}
       * @see {@link bufferTime}
       * @see {@link bufferToggle}
       * @see {@link bufferWhen}
       * @see {@link pairwise}
       * @see {@link windowCount}
       *
       * @param {number} bufferSize The maximum size of the buffer emitted.
       * @param {number} [startBufferEvery] Interval at which to start a new buffer.
       * For example if `startBufferEvery` is `2`, then a new buffer will be started
       * on every other value from the source. A new buffer is started at the
       * beginning of the source by default.
       * @return {Observable<T[]>} An Observable of arrays of buffered values.
       * @method bufferCount
       * @owner Observable
       */


      function bufferCount(bufferSize, startBufferEvery) {
        if (startBufferEvery === void 0) {
          startBufferEvery = null;
        }

        return operators_1.bufferCount(bufferSize, startBufferEvery)(this);
      }

      exports.bufferCount = bufferCount; //# sourceMappingURL=bufferCount.js.map

      /***/
    },

    /***/
    "j5kd":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/windowTime.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function j5kd(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var internal_compatibility_1 = __webpack_require__(
      /*! rxjs/internal-compatibility */
      "w0v+");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      function windowTime(windowTimeSpan) {
        var scheduler = rxjs_1.asyncScheduler;
        var windowCreationInterval = null;
        var maxWindowSize = Number.POSITIVE_INFINITY;

        if (internal_compatibility_1.isScheduler(arguments[3])) {
          scheduler = arguments[3];
        }

        if (internal_compatibility_1.isScheduler(arguments[2])) {
          scheduler = arguments[2];
        } else if (internal_compatibility_1.isNumeric(arguments[2])) {
          maxWindowSize = arguments[2];
        }

        if (internal_compatibility_1.isScheduler(arguments[1])) {
          scheduler = arguments[1];
        } else if (internal_compatibility_1.isNumeric(arguments[1])) {
          windowCreationInterval = arguments[1];
        }

        return operators_1.windowTime(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler)(this);
      }

      exports.windowTime = windowTime; //# sourceMappingURL=windowTime.js.map

      /***/
    },

    /***/
    "jIeU":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/exhaust.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function jIeU(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var exhaust_1 = __webpack_require__(
      /*! ../../operator/exhaust */
      "5LO2");

      rxjs_1.Observable.prototype.exhaust = exhaust_1.exhaust; //# sourceMappingURL=exhaust.js.map

      /***/
    },

    /***/
    "jdlx":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/pluck.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function jdlx(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var pluck_1 = __webpack_require__(
      /*! ../../operator/pluck */
      "Mw3v");

      rxjs_1.Observable.prototype.pluck = pluck_1.pluck; //# sourceMappingURL=pluck.js.map

      /***/
    },

    /***/
    "jtHT":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/publish.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function jtHT(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
       * before it begins emitting items to those Observers that have subscribed to it.
       *
       * <img src="./img/publish.png" width="100%">
       *
       * @param {Function} [selector] - Optional selector function which can use the multicasted source sequence as many times
       * as needed, without causing multiple subscriptions to the source sequence.
       * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
       * @return A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
       * @method publish
       * @owner Observable
       */


      function publish(selector) {
        return operators_1.publish(selector)(this);
      }

      exports.publish = publish; //# sourceMappingURL=publish.js.map

      /***/
    },

    /***/
    "keoB":
    /*!*****************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/testing/SubscriptionLoggable.js ***!
      \*****************************************************************************/

    /*! exports provided: SubscriptionLoggable */

    /***/
    function keoB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubscriptionLoggable", function () {
        return SubscriptionLoggable;
      });
      /* harmony import */


      var _SubscriptionLog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./SubscriptionLog */
      "i3aC");

      var SubscriptionLoggable = /*#__PURE__*/function () {
        function SubscriptionLoggable() {
          _classCallCheck(this, SubscriptionLoggable);

          this.subscriptions = [];
        }

        _createClass(SubscriptionLoggable, [{
          key: "logSubscribedFrame",
          value: function logSubscribedFrame() {
            this.subscriptions.push(new _SubscriptionLog__WEBPACK_IMPORTED_MODULE_0__["SubscriptionLog"](this.scheduler.now()));
            return this.subscriptions.length - 1;
          }
        }, {
          key: "logUnsubscribedFrame",
          value: function logUnsubscribedFrame(index) {
            var subscriptionLogs = this.subscriptions;
            var oldSubscriptionLog = subscriptionLogs[index];
            subscriptionLogs[index] = new _SubscriptionLog__WEBPACK_IMPORTED_MODULE_0__["SubscriptionLog"](oldSubscriptionLog.subscribedFrame, this.scheduler.now());
          }
        }]);

        return SubscriptionLoggable;
      }(); //# sourceMappingURL=SubscriptionLoggable.js.map

      /***/

    },

    /***/
    "ksOG":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/auditTime.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function ksOG(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var auditTime_1 = __webpack_require__(
      /*! ../../operator/auditTime */
      "JM0U");

      rxjs_1.Observable.prototype.auditTime = auditTime_1.auditTime; //# sourceMappingURL=auditTime.js.map

      /***/
    },

    /***/
    "l3KV":
    /*!**************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/publishLast.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function l3KV(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var publishLast_1 = __webpack_require__(
      /*! ../../operator/publishLast */
      "CuWV");

      rxjs_1.Observable.prototype.publishLast = publishLast_1.publishLast; //# sourceMappingURL=publishLast.js.map

      /***/
    },

    /***/
    "l4jP":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/share.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function l4jP(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
       * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
       * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
       *
       * This behaves similarly to .publish().refCount(), with a behavior difference when the source observable emits complete.
       * .publish().refCount() will not resubscribe to the original source, however .share() will resubscribe to the original source.
       * Observable.of("test").publish().refCount() will not re-emit "test" on new subscriptions, Observable.of("test").share() will
       * re-emit "test" to new subscriptions.
       *
       * <img src="./img/share.png" width="100%">
       *
       * @return {Observable<T>} An Observable that upon connection causes the source Observable to emit items to its Observers.
       * @method share
       * @owner Observable
       */


      function share() {
        return operators_1.share()(this);
      }

      exports.share = share; //# sourceMappingURL=share.js.map

      /***/
    },

    /***/
    "l53z":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/zipAll.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function l53z(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @param project
       * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
       * @method zipAll
       * @owner Observable
       */


      function zipAll(project) {
        return operators_1.zipAll(project)(this);
      }

      exports.zipAll = zipAll; //# sourceMappingURL=zipAll.js.map

      /***/
    },

    /***/
    "lK5c":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/defer.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function lK5c(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.defer = rxjs_1.defer; //# sourceMappingURL=defer.js.map

      /***/
    },

    /***/
    "lXds":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/delayWhen.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function lXds(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Delays the emission of items from the source Observable by a given time span
       * determined by the emissions of another Observable.
       *
       * <span class="informal">It's like {@link delay}, but the time span of the
       * delay duration is determined by a second Observable.</span>
       *
       * <img src="./img/delayWhen.png" width="100%">
       *
       * `delayWhen` time shifts each emitted value from the source Observable by a
       * time span determined by another Observable. When the source emits a value,
       * the `delayDurationSelector` function is called with the source value as
       * argument, and should return an Observable, called the "duration" Observable.
       * The source value is emitted on the output Observable only when the duration
       * Observable emits a value or completes.
       *
       * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
       * is an Observable. When `subscriptionDelay` emits its first value or
       * completes, the source Observable is subscribed to and starts behaving like
       * described in the previous paragraph. If `subscriptionDelay` is not provided,
       * `delayWhen` will subscribe to the source Observable as soon as the output
       * Observable is subscribed.
       *
       * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var delayedClicks = clicks.delayWhen(event =>
       *   Rx.Observable.interval(Math.random() * 5000)
       * );
       * delayedClicks.subscribe(x => console.log(x));
       *
       * @see {@link debounce}
       * @see {@link delay}
       *
       * @param {function(value: T): Observable} delayDurationSelector A function that
       * returns an Observable for each value emitted by the source Observable, which
       * is then used to delay the emission of that item on the output Observable
       * until the Observable returned from this function emits a value.
       * @param {Observable} subscriptionDelay An Observable that triggers the
       * subscription to the source Observable once it emits any value.
       * @return {Observable} An Observable that delays the emissions of the source
       * Observable by an amount of time specified by the Observable returned by
       * `delayDurationSelector`.
       * @method delayWhen
       * @owner Observable
       */


      function delayWhen(delayDurationSelector, subscriptionDelay) {
        return operators_1.delayWhen(delayDurationSelector, subscriptionDelay)(this);
      }

      exports.delayWhen = delayWhen; //# sourceMappingURL=delayWhen.js.map

      /***/
    },

    /***/
    "lYZj":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/testing/index.js ***!
      \*****************************************************/

    /*! exports provided: TestScheduler */

    /***/
    function lYZj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _internal_testing_TestScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../internal/testing/TestScheduler */
      "e3gX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TestScheduler", function () {
        return _internal_testing_TestScheduler__WEBPACK_IMPORTED_MODULE_0__["TestScheduler"];
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "laIk":
    /*!**************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/ajax/index.js ***!
      \**************************************************/

    /*! exports provided: ajax, AjaxResponse, AjaxError, AjaxTimeoutError */

    /***/
    function laIk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _internal_observable_dom_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../internal/observable/dom/ajax */
      "19/K");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ajax", function () {
        return _internal_observable_dom_ajax__WEBPACK_IMPORTED_MODULE_0__["ajax"];
      });
      /* harmony import */


      var _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../internal/observable/dom/AjaxObservable */
      "Sj+y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AjaxResponse", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_1__["AjaxResponse"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AjaxError", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_1__["AjaxError"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AjaxTimeoutError", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_1__["AjaxTimeoutError"];
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "lcII":
    /*!*************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/observable/dom/webSocket.js ***!
      \*************************************************************************/

    /*! exports provided: webSocket */

    /***/
    function lcII(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "webSocket", function () {
        return webSocket;
      });
      /* harmony import */


      var _WebSocketSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./WebSocketSubject */
      "wxn8");

      function webSocket(urlConfigOrSource) {
        return new _WebSocketSubject__WEBPACK_IMPORTED_MODULE_0__["WebSocketSubject"](urlConfigOrSource);
      } //# sourceMappingURL=webSocket.js.map

      /***/

    },

    /***/
    "m1gp":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/zip.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function m1gp(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.zip = rxjs_1.zip; //# sourceMappingURL=zip.js.map

      /***/
    },

    /***/
    "mQn8":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/mergeScan.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function mQn8(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Applies an accumulator function over the source Observable where the
       * accumulator function itself returns an Observable, then each intermediate
       * Observable returned is merged into the output Observable.
       *
       * <span class="informal">It's like {@link scan}, but the Observables returned
       * by the accumulator are merged into the outer Observable.</span>
       *
       * @example <caption>Count the number of click events</caption>
       * const click$ = Rx.Observable.fromEvent(document, 'click');
       * const one$ = click$.mapTo(1);
       * const seed = 0;
       * const count$ = one$.mergeScan((acc, one) => Rx.Observable.of(acc + one), seed);
       * count$.subscribe(x => console.log(x));
       *
       * // Results:
       * 1
       * 2
       * 3
       * 4
       * // ...and so on for each click
       *
       * @param {function(acc: R, value: T): Observable<R>} accumulator
       * The accumulator function called on each source value.
       * @param seed The initial accumulation value.
       * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of
       * input Observables being subscribed to concurrently.
       * @return {Observable<R>} An observable of the accumulated values.
       * @method mergeScan
       * @owner Observable
       */


      function mergeScan(accumulator, seed, concurrent) {
        if (concurrent === void 0) {
          concurrent = Number.POSITIVE_INFINITY;
        }

        return operators_1.mergeScan(accumulator, seed, concurrent)(this);
      }

      exports.mergeScan = mergeScan; //# sourceMappingURL=mergeScan.js.map

      /***/
    },

    /***/
    "mfsk":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/defaultIfEmpty.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function mfsk(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Emits a given value if the source Observable completes without emitting any
       * `next` value, otherwise mirrors the source Observable.
       *
       * <span class="informal">If the source Observable turns out to be empty, then
       * this operator will emit a default value.</span>
       *
       * <img src="./img/defaultIfEmpty.png" width="100%">
       *
       * `defaultIfEmpty` emits the values emitted by the source Observable or a
       * specified default value if the source Observable is empty (completes without
       * having emitted any `next` value).
       *
       * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
       * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
       * result.subscribe(x => console.log(x));
       *
       * @see {@link empty}
       * @see {@link last}
       *
       * @param {any} [defaultValue=null] The default value used if the source
       * Observable is empty.
       * @return {Observable} An Observable that emits either the specified
       * `defaultValue` if the source Observable emits no items, or the values emitted
       * by the source Observable.
       * @method defaultIfEmpty
       * @owner Observable
       */


      function defaultIfEmpty(defaultValue) {
        if (defaultValue === void 0) {
          defaultValue = null;
        }

        return operators_1.defaultIfEmpty(defaultValue)(this);
      }

      exports.defaultIfEmpty = defaultIfEmpty; //# sourceMappingURL=defaultIfEmpty.js.map

      /***/
    },

    /***/
    "mtqP":
    /*!**************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/util/tryCatch.js ***!
      \**************************************************************/

    /*! exports provided: tryCatch */

    /***/
    function mtqP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tryCatch", function () {
        return tryCatch;
      });
      /* harmony import */


      var _errorObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./errorObject */
      "dJRF");

      var tryCatchTarget;

      function tryCatcher() {
        _errorObject__WEBPACK_IMPORTED_MODULE_0__["errorObject"].e = undefined;

        try {
          return tryCatchTarget.apply(this, arguments);
        } catch (e) {
          _errorObject__WEBPACK_IMPORTED_MODULE_0__["errorObject"].e = e;
          return _errorObject__WEBPACK_IMPORTED_MODULE_0__["errorObject"];
        } finally {
          tryCatchTarget = undefined;
        }
      }

      function tryCatch(fn) {
        tryCatchTarget = fn;
        return tryCatcher;
      } //# sourceMappingURL=tryCatch.js.map

      /***/

    },

    /***/
    "mx47":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/merge.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function mx47(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.merge = rxjs_1.merge; //# sourceMappingURL=merge.js.map

      /***/
    },

    /***/
    "n2g9":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/delay.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function n2g9(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var delay_1 = __webpack_require__(
      /*! ../../operator/delay */
      "bd5T");

      rxjs_1.Observable.prototype.delay = delay_1.delay; //# sourceMappingURL=delay.js.map

      /***/
    },

    /***/
    "n6Nf":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/windowToggle.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function n6Nf(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Branch out the source Observable values as a nested Observable starting from
       * an emission from `openings` and ending when the output of `closingSelector`
       * emits.
       *
       * <span class="informal">It's like {@link bufferToggle}, but emits a nested
       * Observable instead of an array.</span>
       *
       * <img src="./img/windowToggle.png" width="100%">
       *
       * Returns an Observable that emits windows of items it collects from the source
       * Observable. The output Observable emits windows that contain those items
       * emitted by the source Observable between the time when the `openings`
       * Observable emits an item and when the Observable returned by
       * `closingSelector` emits an item.
       *
       * @example <caption>Every other second, emit the click events from the next 500ms</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var openings = Rx.Observable.interval(1000);
       * var result = clicks.windowToggle(openings, i =>
       *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
       * ).mergeAll();
       * result.subscribe(x => console.log(x));
       *
       * @see {@link window}
       * @see {@link windowCount}
       * @see {@link windowTime}
       * @see {@link windowWhen}
       * @see {@link bufferToggle}
       *
       * @param {Observable<O>} openings An observable of notifications to start new
       * windows.
       * @param {function(value: O): Observable} closingSelector A function that takes
       * the value emitted by the `openings` observable and returns an Observable,
       * which, when it emits (either `next` or `complete`), signals that the
       * associated window should complete.
       * @return {Observable<Observable<T>>} An observable of windows, which in turn
       * are Observables.
       * @method windowToggle
       * @owner Observable
       */


      function windowToggle(openings, closingSelector) {
        return operators_1.windowToggle(openings, closingSelector)(this);
      }

      exports.windowToggle = windowToggle; //# sourceMappingURL=windowToggle.js.map

      /***/
    },

    /***/
    "nZYK":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/switchMap.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function nZYK(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Projects each source value to an Observable which is merged in the output
       * Observable, emitting values only from the most recently projected Observable.
       *
       * <span class="informal">Maps each value to an Observable, then flattens all of
       * these inner Observables using {@link switch}.</span>
       *
       * <img src="./img/switchMap.png" width="100%">
       *
       * Returns an Observable that emits items based on applying a function that you
       * supply to each item emitted by the source Observable, where that function
       * returns an (so-called "inner") Observable. Each time it observes one of these
       * inner Observables, the output Observable begins emitting the items emitted by
       * that inner Observable. When a new inner Observable is emitted, `switchMap`
       * stops emitting items from the earlier-emitted inner Observable and begins
       * emitting items from the new one. It continues to behave like this for
       * subsequent inner Observables.
       *
       * @example <caption>Rerun an interval Observable on every click event</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
       * result.subscribe(x => console.log(x));
       *
       * @see {@link concatMap}
       * @see {@link exhaustMap}
       * @see {@link mergeMap}
       * @see {@link switch}
       * @see {@link switchMapTo}
       *
       * @param {function(value: T, ?index: number): ObservableInput} project A function
       * that, when applied to an item emitted by the source Observable, returns an
       * Observable.
       * @return {Observable} An Observable that emits the result of applying the
       * projection function (and the optional `resultSelector`) to each item emitted
       * by the source Observable and taking only the values from the most recently
       * projected inner Observable.
       * @method switchMap
       * @owner Observable
       */


      function switchMap(project) {
        return operators_1.switchMap(project)(this);
      }

      exports.switchMap = switchMap; //# sourceMappingURL=switchMap.js.map

      /***/
    },

    /***/
    "nueD":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/isEmpty.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function nueD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
       *
       * <img src="./img/isEmpty.png" width="100%">
       *
       * @return {Observable} An Observable that emits a Boolean.
       * @method isEmpty
       * @owner Observable
       */


      function isEmpty() {
        return operators_1.isEmpty()(this);
      }

      exports.isEmpty = isEmpty; //# sourceMappingURL=isEmpty.js.map

      /***/
    },

    /***/
    "oKp4":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/take.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function oKp4(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var take_1 = __webpack_require__(
      /*! ../../operator/take */
      "ZHpM");

      rxjs_1.Observable.prototype.take = take_1.take; //# sourceMappingURL=take.js.map

      /***/
    },

    /***/
    "oXC5":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/switchMapTo.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function oXC5(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       * Projects each source value to the same Observable which is flattened multiple
       * times with {@link switch} in the output Observable.
       *
       * <span class="informal">It's like {@link switchMap}, but maps each value
       * always to the same inner Observable.</span>
       *
       * <img src="./img/switchMapTo.png" width="100%">
       *
       * Maps each source value to the given Observable `innerObservable` regardless
       * of the source value, and then flattens those resulting Observables into one
       * single Observable, which is the output Observable. The output Observables
       * emits values only from the most recently emitted instance of
       * `innerObservable`.
       *
       * @example <caption>Rerun an interval Observable on every click event</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
       * result.subscribe(x => console.log(x));
       *
       * @see {@link concatMapTo}
       * @see {@link switch}
       * @see {@link switchMap}
       * @see {@link mergeMapTo}
       *
       * @param {ObservableInput} innerObservable An Observable to replace each value from
       * the source Observable.
       * @return {Observable} An Observable that emits items from the given
       * `innerObservable` (and optionally transformed through `resultSelector`) every
       * time a value is emitted on the source Observable, and taking only the values
       * from the most recently projected inner Observable.
       * @method switchMapTo
       * @owner Observable
       */


      function switchMapTo(innerObservable) {
        return operators_1.switchMapTo(innerObservable)(this);
      }

      exports.switchMapTo = switchMapTo; //# sourceMappingURL=switchMapTo.js.map

      /***/
    },

    /***/
    "ob0Y":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/reduce.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function ob0Y(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var reduce_1 = __webpack_require__(
      /*! ../../operator/reduce */
      "QPu+");

      rxjs_1.Observable.prototype.reduce = reduce_1.reduce; //# sourceMappingURL=reduce.js.map

      /***/
    },

    /***/
    "odkN":
    /*!**************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/let.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function odkN(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /**
       * @param func
       * @return {Observable<R>}
       * @method let
       * @owner Observable
       */

      function letProto(func) {
        return func(this);
      }

      exports.letProto = letProto; //# sourceMappingURL=let.js.map

      /***/
    },

    /***/
    "ofYe":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/zipAll.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function ofYe(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var zipAll_1 = __webpack_require__(
      /*! ../../operator/zipAll */
      "l53z");

      rxjs_1.Observable.prototype.zipAll = zipAll_1.zipAll; //# sourceMappingURL=zipAll.js.map

      /***/
    },

    /***/
    "ojb+":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/range.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function ojb(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.range = rxjs_1.range; //# sourceMappingURL=range.js.map

      /***/
    },

    /***/
    "okVX":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/switch.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function okVX(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var switch_1 = __webpack_require__(
      /*! ../../operator/switch */
      "pv6b");

      rxjs_1.Observable.prototype["switch"] = switch_1._switch;
      rxjs_1.Observable.prototype._switch = switch_1._switch; //# sourceMappingURL=switch.js.map

      /***/
    },

    /***/
    "omlZ":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/takeUntil.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function omlZ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var takeUntil_1 = __webpack_require__(
      /*! ../../operator/takeUntil */
      "r+37");

      rxjs_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil; //# sourceMappingURL=takeUntil.js.map

      /***/
    },

    /***/
    "ovWV":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/concat.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function ovWV(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* tslint:enable:max-line-length */

      /**
       * Creates an output Observable which sequentially emits all values from every
       * given input Observable after the current Observable.
       *
       * <span class="informal">Concatenates multiple Observables together by
       * sequentially emitting their values, one Observable after the other.</span>
       *
       * <img src="./img/concat.png" width="100%">
       *
       * Joins this Observable with multiple other Observables by subscribing to them
       * one at a time, starting with the source, and merging their results into the
       * output Observable. Will wait for each Observable to complete before moving
       * on to the next.
       *
       * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
       * var timer = Rx.Observable.interval(1000).take(4);
       * var sequence = Rx.Observable.range(1, 10);
       * var result = timer.concat(sequence);
       * result.subscribe(x => console.log(x));
       *
       * // results in:
       * // 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
       *
       * @example <caption>Concatenate 3 Observables</caption>
       * var timer1 = Rx.Observable.interval(1000).take(10);
       * var timer2 = Rx.Observable.interval(2000).take(6);
       * var timer3 = Rx.Observable.interval(500).take(10);
       * var result = timer1.concat(timer2, timer3);
       * result.subscribe(x => console.log(x));
       *
       * // results in the following:
       * // (Prints to console sequentially)
       * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
       * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
       * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
       *
       * @see {@link concatAll}
       * @see {@link concatMap}
       * @see {@link concatMapTo}
       *
       * @param {ObservableInput} other An input Observable to concatenate after the source
       * Observable. More than one input Observables may be given as argument.
       * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
       * Observable subscription on.
       * @return {Observable} All values of each passed Observable merged into a
       * single Observable, in order, in serial fashion.
       * @method concat
       * @owner Observable
       */


      function concat() {
        var observables = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i] = arguments[_i];
        }

        return this.lift.call(rxjs_1.concat.apply(void 0, [this].concat(observables)));
      }

      exports.concat = concat; //# sourceMappingURL=concat.js.map

      /***/
    },

    /***/
    "pTkb":
    /*!**************************************************!*\
      !*** ./src/app/features/lac/models/lac-model.ts ***!
      \**************************************************/

    /*! exports provided: CommonLogics, applyMixins, Product, Buyer */

    /***/
    function pTkb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonLogics", function () {
        return CommonLogics;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "applyMixins", function () {
        return applyMixins;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Product", function () {
        return Product;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Buyer", function () {
        return Buyer;
      });

      var CommonLogics = /*#__PURE__*/function () {
        function CommonLogics() {
          _classCallCheck(this, CommonLogics);
        }

        _createClass(CommonLogics, [{
          key: "average",
          value: function average(a, b, c) {
            return a + b + c / 3;
          }
        }]);

        return CommonLogics;
      }();

      function applyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) {
          Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            if (name !== "constructor") {
              derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
          });
        });
      }

      var Product = function Product() {
        _classCallCheck(this, Product);
      };

      Product.tableName = "Products";
      Product.displayProp = "productName";

      var Buyer = function Buyer() {
        _classCallCheck(this, Buyer);
      };

      Buyer.tableName = "Buyers";
      Buyer.displayProp = "buyerName";
      /***/
    },

    /***/
    "pe+M":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/skip.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function peM(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var skip_1 = __webpack_require__(
      /*! ../../operator/skip */
      "fUwU");

      rxjs_1.Observable.prototype.skip = skip_1.skip; //# sourceMappingURL=skip.js.map

      /***/
    },

    /***/
    "pv6b":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/switch.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function pv6b(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Converts a higher-order Observable into a first-order Observable by
       * subscribing to only the most recently emitted of those inner Observables.
       *
       * <span class="informal">Flattens an Observable-of-Observables by dropping the
       * previous inner Observable once a new one appears.</span>
       *
       * <img src="./img/switch.png" width="100%">
       *
       * `switch` subscribes to an Observable that emits Observables, also known as a
       * higher-order Observable. Each time it observes one of these emitted inner
       * Observables, the output Observable subscribes to the inner Observable and
       * begins emitting the items emitted by that. So far, it behaves
       * like {@link mergeAll}. However, when a new inner Observable is emitted,
       * `switch` unsubscribes from the earlier-emitted inner Observable and
       * subscribes to the new inner Observable and begins emitting items from it. It
       * continues to behave like this for subsequent inner Observables.
       *
       * @example <caption>Rerun an interval Observable on every click event</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * // Each click event is mapped to an Observable that ticks every second
       * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
       * var switched = higherOrder.switch();
       * // The outcome is that `switched` is essentially a timer that restarts
       * // on every click. The interval Observables from older clicks do not merge
       * // with the current interval Observable.
       * switched.subscribe(x => console.log(x));
       *
       * @see {@link combineAll}
       * @see {@link concatAll}
       * @see {@link exhaust}
       * @see {@link mergeAll}
       * @see {@link switchMap}
       * @see {@link switchMapTo}
       * @see {@link zipAll}
       *
       * @return {Observable<T>} An Observable that emits the items emitted by the
       * Observable most recently emitted by the source Observable.
       * @method switch
       * @name switch
       * @owner Observable
       */


      function _switch() {
        return operators_1.switchAll()(this);
      }

      exports._switch = _switch; //# sourceMappingURL=switch.js.map

      /***/
    },

    /***/
    "q8yx":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/elementAt.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function q8yx(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var elementAt_1 = __webpack_require__(
      /*! ../../operator/elementAt */
      "XDL1");

      rxjs_1.Observable.prototype.elementAt = elementAt_1.elementAt; //# sourceMappingURL=elementAt.js.map

      /***/
    },

    /***/
    "qIMP":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/pairwise.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function qIMP(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Groups pairs of consecutive emissions together and emits them as an array of
       * two values.
       *
       * <span class="informal">Puts the current value and previous value together as
       * an array, and emits that.</span>
       *
       * <img src="./img/pairwise.png" width="100%">
       *
       * The Nth emission from the source Observable will cause the output Observable
       * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
       * pair. For this reason, `pairwise` emits on the second and subsequent
       * emissions from the source Observable, but not on the first emission, because
       * there is no previous value in that case.
       *
       * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var pairs = clicks.pairwise();
       * var distance = pairs.map(pair => {
       *   var x0 = pair[0].clientX;
       *   var y0 = pair[0].clientY;
       *   var x1 = pair[1].clientX;
       *   var y1 = pair[1].clientY;
       *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
       * });
       * distance.subscribe(x => console.log(x));
       *
       * @see {@link buffer}
       * @see {@link bufferCount}
       *
       * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
       * consecutive values from the source Observable.
       * @method pairwise
       * @owner Observable
       */


      function pairwise() {
        return operators_1.pairwise()(this);
      }

      exports.pairwise = pairwise; //# sourceMappingURL=pairwise.js.map

      /***/
    },

    /***/
    "r+37":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/takeUntil.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function r37(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Emits the values emitted by the source Observable until a `notifier`
       * Observable emits a value.
       *
       * <span class="informal">Lets values pass until a second Observable,
       * `notifier`, emits a value. Then, it completes.</span>
       *
       * <img src="./img/takeUntil.png" width="100%">
       *
       * `takeUntil` subscribes and begins mirroring the source Observable. It also
       * monitors a second Observable, `notifier` that you provide. If the `notifier`
       * emits a value, the output Observable stops mirroring the source Observable
       * and completes. If the `notifier` doesn't emit any value and completes
       * then `takeUntil` will pass all values.
       *
       * @example <caption>Tick every second until the first click happens</caption>
       * var interval = Rx.Observable.interval(1000);
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = interval.takeUntil(clicks);
       * result.subscribe(x => console.log(x));
       *
       * @see {@link take}
       * @see {@link takeLast}
       * @see {@link takeWhile}
       * @see {@link skip}
       *
       * @param {Observable} notifier The Observable whose first emitted value will
       * cause the output Observable of `takeUntil` to stop emitting values from the
       * source Observable.
       * @return {Observable<T>} An Observable that emits the values from the source
       * Observable until such time as `notifier` emits its first value.
       * @method takeUntil
       * @owner Observable
       */


      function takeUntil(notifier) {
        return operators_1.takeUntil(notifier)(this);
      }

      exports.takeUntil = takeUntil; //# sourceMappingURL=takeUntil.js.map

      /***/
    },

    /***/
    "rSqW":
    /*!**************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/subscribeOn.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function rSqW(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var subscribeOn_1 = __webpack_require__(
      /*! ../../operator/subscribeOn */
      "8LQU");

      rxjs_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn; //# sourceMappingURL=subscribeOn.js.map

      /***/
    },

    /***/
    "rqY6":
    /*!**************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/timeoutWith.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function rqY6(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var timeoutWith_1 = __webpack_require__(
      /*! ../../operator/timeoutWith */
      "zDpS");

      rxjs_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith; //# sourceMappingURL=timeoutWith.js.map

      /***/
    },

    /***/
    "sNY3":
    /*!******************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/combineLatest.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function sNY3(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.combineLatest = rxjs_1.combineLatest; //# sourceMappingURL=combineLatest.js.map

      /***/
    },

    /***/
    "sRqT":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/mergeMapTo.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function sRqT(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var mergeMapTo_1 = __webpack_require__(
      /*! ../../operator/mergeMapTo */
      "xwTN");

      rxjs_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
      rxjs_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo; //# sourceMappingURL=mergeMapTo.js.map

      /***/
    },

    /***/
    "sjkp":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/findIndex.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function sjkp(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var findIndex_1 = __webpack_require__(
      /*! ../../operator/findIndex */
      "6mJ0");

      rxjs_1.Observable.prototype.findIndex = findIndex_1.findIndex; //# sourceMappingURL=findIndex.js.map

      /***/
    },

    /***/
    "t0XI":
    /*!**********************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/onErrorResumeNext.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function t0XI(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable.onErrorResumeNext = rxjs_1.onErrorResumeNext; //# sourceMappingURL=onErrorResumeNext.js.map

      /***/
    },

    /***/
    "uARb":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/debounce.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function uARb(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Emits a value from the source Observable only after a particular time span
       * determined by another Observable has passed without another source emission.
       *
       * <span class="informal">It's like {@link debounceTime}, but the time span of
       * emission silence is determined by a second Observable.</span>
       *
       * <img src="./img/debounce.png" width="100%">
       *
       * `debounce` delays values emitted by the source Observable, but drops previous
       * pending delayed emissions if a new value arrives on the source Observable.
       * This operator keeps track of the most recent value from the source
       * Observable, and spawns a duration Observable by calling the
       * `durationSelector` function. The value is emitted only when the duration
       * Observable emits a value or completes, and if no other value was emitted on
       * the source Observable since the duration Observable was spawned. If a new
       * value appears before the duration Observable emits, the previous value will
       * be dropped and will not be emitted on the output Observable.
       *
       * Like {@link debounceTime}, this is a rate-limiting operator, and also a
       * delay-like operator since output emissions do not necessarily occur at the
       * same time as they did on the source Observable.
       *
       * @example <caption>Emit the most recent click after a burst of clicks</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.debounce(() => Rx.Observable.interval(1000));
       * result.subscribe(x => console.log(x));
       *
       * @see {@link audit}
       * @see {@link debounceTime}
       * @see {@link delayWhen}
       * @see {@link throttle}
       *
       * @param {function(value: T): SubscribableOrPromise} durationSelector A function
       * that receives a value from the source Observable, for computing the timeout
       * duration for each source value, returned as an Observable or a Promise.
       * @return {Observable} An Observable that delays the emissions of the source
       * Observable by the specified duration Observable returned by
       * `durationSelector`, and may drop some values if they occur too frequently.
       * @method debounce
       * @owner Observable
       */


      function debounce(durationSelector) {
        return operators_1.debounce(durationSelector)(this);
      }

      exports.debounce = debounce; //# sourceMappingURL=debounce.js.map

      /***/
    },

    /***/
    "uGYe":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/if.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function uGYe(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      rxjs_1.Observable["if"] = rxjs_1.iif; //# sourceMappingURL=if.js.map

      /***/
    },

    /***/
    "uMcE":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/shareReplay.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function uMcE(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      function shareReplay(configOrBufferSize, windowTime, scheduler) {
        if (configOrBufferSize && typeof configOrBufferSize === 'object') {
          return operators_1.shareReplay(configOrBufferSize)(this);
        }

        return operators_1.shareReplay(configOrBufferSize, windowTime, scheduler)(this);
      }

      exports.shareReplay = shareReplay; //# sourceMappingURL=shareReplay.js.map

      /***/
    },

    /***/
    "uO2z":
    /*!******************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/observable/dom/webSocket.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function uO2z(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var webSocket_1 = __webpack_require__(
      /*! rxjs/webSocket */
      "3uOa");

      rxjs_1.Observable.webSocket = webSocket_1.webSocket; //# sourceMappingURL=webSocket.js.map

      /***/
    },

    /***/
    "uqGX":
    /*!****************************************************************************************!*\
      !*** ./src/app/shared/components/autocomplete-filter/autocomplete-filter.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: AutocompleteFilterComponent */

    /***/
    function uqGX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutocompleteFilterComponent", function () {
        return AutocompleteFilterComponent;
      });
      /* harmony import */


      var rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/Rx */
      "M6kn");
      /* harmony import */


      var rxjs_Rx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AutocompleteFilterComponent_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Invalid Selection.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AutocompleteFilterComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 7);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "error": a0
        };
      };

      var AutocompleteFilterComponent = /*#__PURE__*/function () {
        function AutocompleteFilterComponent() {
          _classCallCheck(this, AutocompleteFilterComponent);

          this.itemList = ['carrot', 'banana', 'apple', 'potato', 'tomato', 'cabbage', 'turnip', 'okra', 'onion', 'cherries', 'plum', 'mango'];
        }

        _createClass(AutocompleteFilterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
            //Add 'implements AfterViewInit' to the class.
            var input = document.getElementById("itemsearch");
            console.log(input);
            var search$ = rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["Observable"].fromEvent(input, "keyup")["do"](function () {
              return console.log(input.value);
            });
            search$.subscribe();
          }
        }, {
          key: "getFilteredList",
          value: function getFilteredList() {}
        }, {
          key: "toggleListDisplay",
          value: function toggleListDisplay(tt) {}
        }, {
          key: "onKeyPress",
          value: function onKeyPress($event) {}
        }]);

        return AutocompleteFilterComponent;
      }();

      AutocompleteFilterComponent.ɵfac = function AutocompleteFilterComponent_Factory(t) {
        return new (t || AutocompleteFilterComponent)();
      };

      AutocompleteFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AutocompleteFilterComponent,
        selectors: [["smc-autocomplete-filter"]],
        decls: 9,
        vars: 7,
        consts: [["type", "text", "id", "methodSearch", "value", "method", 3, "ngModel", "ngModelChange"], ["search", ""], [1, "combobox"], ["type", "text", "id", "itemsearch", "placeholder", "Select one...", 1, "combobox-input", 3, "ngModel", "ngClass", "ngModelChange", "keyup", "blur", "focus"], ["class", "error-text", 4, "ngIf"], ["class", "combobox-options", 4, "ngIf"], [1, "error-text"], [1, "combobox-options"]],
        template: function AutocompleteFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "autocomplete-filter works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AutocompleteFilterComponent_Template_input_ngModelChange_3_listener($event) {
              return ctx.method = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AutocompleteFilterComponent_Template_input_ngModelChange_6_listener($event) {
              return ctx.inputItem = $event;
            })("ngModelChange", function AutocompleteFilterComponent_Template_input_ngModelChange_6_listener() {
              return ctx.getFilteredList();
            })("keyup", function AutocompleteFilterComponent_Template_input_keyup_6_listener($event) {
              return ctx.onKeyPress($event);
            })("blur", function AutocompleteFilterComponent_Template_input_blur_6_listener() {
              return ctx.toggleListDisplay(0);
            })("focus", function AutocompleteFilterComponent_Template_input_focus_6_listener() {
              return ctx.toggleListDisplay(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AutocompleteFilterComponent_span_7_Template, 3, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AutocompleteFilterComponent_div_8_Template, 1, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.method);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.inputItem)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.showError));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showError);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.listHidden);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRvY29tcGxldGUtZmlsdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "v87U":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/single.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function v87U(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
       * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
       * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
       *
       * <img src="./img/single.png" width="100%">
       *
       * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
       * callback if the Observable completes before any `next` notification was sent.
       * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
       * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
       * the predicate.
       .
       * @method single
       * @owner Observable
       */


      function single(predicate) {
        return operators_1.single(predicate)(this);
      }

      exports.single = single; //# sourceMappingURL=single.js.map

      /***/
    },

    /***/
    "vQc4":
    /*!**************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/bufferCount.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function vQc4(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var bufferCount_1 = __webpack_require__(
      /*! ../../operator/bufferCount */
      "itJ+");

      rxjs_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount; //# sourceMappingURL=bufferCount.js.map

      /***/
    },

    /***/
    "vTln":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/distinct.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function vTln(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
       *
       * If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
       * check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
       * source observable directly with an equality check against previous values.
       *
       * In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.
       *
       * In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
       * hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
       * use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
       * that the internal `Set` can be "flushed", basically clearing it of values.
       *
       * @example <caption>A simple example with numbers</caption>
       * Observable.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
       *   .distinct()
       *   .subscribe(x => console.log(x)); // 1, 2, 3, 4
       *
       * @example <caption>An example using a keySelector function</caption>
       * interface Person {
       *    age: number,
       *    name: string
       * }
       *
       * Observable.of<Person>(
       *     { age: 4, name: 'Foo'},
       *     { age: 7, name: 'Bar'},
       *     { age: 5, name: 'Foo'})
       *     .distinct((p: Person) => p.name)
       *     .subscribe(x => console.log(x));
       *
       * // displays:
       * // { age: 4, name: 'Foo' }
       * // { age: 7, name: 'Bar' }
       *
       * @see {@link distinctUntilChanged}
       * @see {@link distinctUntilKeyChanged}
       *
       * @param {function} [keySelector] Optional function to select which value you want to check as distinct.
       * @param {Observable} [flushes] Optional Observable for flushing the internal HashSet of the operator.
       * @return {Observable} An Observable that emits items from the source Observable with distinct values.
       * @method distinct
       * @owner Observable
       */


      function distinct(keySelector, flushes) {
        return operators_1.distinct(keySelector, flushes)(this);
      }

      exports.distinct = distinct; //# sourceMappingURL=distinct.js.map

      /***/
    },

    /***/
    "w0v+":
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal-compatibility/index.js ***!
      \********************************************************************/

    /*! exports provided: config, InnerSubscriber, OuterSubscriber, Scheduler, AnonymousSubject, SubjectSubscription, Subscriber, fromPromise, fromIterable, ajax, webSocket, ajaxGet, ajaxPost, ajaxDelete, ajaxPut, ajaxPatch, ajaxGetJSON, AjaxObservable, AjaxSubscriber, AjaxResponse, AjaxError, AjaxTimeoutError, WebSocketSubject, CombineLatestOperator, dispatch, SubscribeOnObservable, Timestamp, TimeInterval, GroupedObservable, defaultThrottleConfig, rxSubscriber, iterator, observable, ArgumentOutOfRangeError, EmptyError, Immediate, ObjectUnsubscribedError, TimeoutError, UnsubscriptionError, applyMixins, errorObject, hostReportError, identity, isArray, isArrayLike, isDate, isFunction, isIterable, isNumeric, isObject, isObservable, isPromise, isScheduler, noop, not, pipe, root, subscribeTo, subscribeToArray, subscribeToIterable, subscribeToObservable, subscribeToPromise, subscribeToResult, toSubscriber, tryCatch */

    /***/
    function w0v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _internal_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../internal/config */
      "2fFW");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "config", function () {
        return _internal_config__WEBPACK_IMPORTED_MODULE_0__["config"];
      });
      /* harmony import */


      var _internal_InnerSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../internal/InnerSubscriber */
      "51Dv");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "InnerSubscriber", function () {
        return _internal_InnerSubscriber__WEBPACK_IMPORTED_MODULE_1__["InnerSubscriber"];
      });
      /* harmony import */


      var _internal_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../internal/OuterSubscriber */
      "l7GE");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "OuterSubscriber", function () {
        return _internal_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"];
      });
      /* harmony import */


      var _internal_Scheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../internal/Scheduler */
      "Y/cZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Scheduler", function () {
        return _internal_Scheduler__WEBPACK_IMPORTED_MODULE_3__["Scheduler"];
      });
      /* harmony import */


      var _internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../internal/Subject */
      "XNiG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AnonymousSubject", function () {
        return _internal_Subject__WEBPACK_IMPORTED_MODULE_4__["AnonymousSubject"];
      });
      /* harmony import */


      var _internal_SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../internal/SubjectSubscription */
      "Ylt2");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function () {
        return _internal_SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__["SubjectSubscription"];
      });
      /* harmony import */


      var _internal_Subscriber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../internal/Subscriber */
      "7o/Q");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Subscriber", function () {
        return _internal_Subscriber__WEBPACK_IMPORTED_MODULE_6__["Subscriber"];
      });
      /* harmony import */


      var _internal_observable_fromPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../internal/observable/fromPromise */
      "x4c3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "fromPromise", function () {
        return _internal_observable_fromPromise__WEBPACK_IMPORTED_MODULE_7__["fromPromise"];
      });
      /* harmony import */


      var _internal_observable_fromIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../internal/observable/fromIterable */
      "Mj4Y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "fromIterable", function () {
        return _internal_observable_fromIterable__WEBPACK_IMPORTED_MODULE_8__["fromIterable"];
      });
      /* harmony import */


      var _internal_observable_dom_ajax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../internal/observable/dom/ajax */
      "19/K");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ajax", function () {
        return _internal_observable_dom_ajax__WEBPACK_IMPORTED_MODULE_9__["ajax"];
      });
      /* harmony import */


      var _internal_observable_dom_webSocket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../internal/observable/dom/webSocket */
      "lcII");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "webSocket", function () {
        return _internal_observable_dom_webSocket__WEBPACK_IMPORTED_MODULE_10__["webSocket"];
      });
      /* harmony import */


      var _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../internal/observable/dom/AjaxObservable */
      "Sj+y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ajaxGet", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["ajaxGet"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ajaxPost", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["ajaxPost"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ajaxDelete", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["ajaxDelete"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ajaxPut", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["ajaxPut"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ajaxPatch", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["ajaxPatch"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ajaxGetJSON", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["ajaxGetJSON"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AjaxObservable", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["AjaxObservable"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AjaxSubscriber", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["AjaxSubscriber"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AjaxResponse", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["AjaxResponse"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AjaxError", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["AjaxError"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AjaxTimeoutError", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["AjaxTimeoutError"];
      });
      /* harmony import */


      var _internal_observable_dom_WebSocketSubject__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../internal/observable/dom/WebSocketSubject */
      "wxn8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WebSocketSubject", function () {
        return _internal_observable_dom_WebSocketSubject__WEBPACK_IMPORTED_MODULE_12__["WebSocketSubject"];
      });
      /* harmony import */


      var _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../internal/observable/combineLatest */
      "itXk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CombineLatestOperator", function () {
        return _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_13__["CombineLatestOperator"];
      });
      /* harmony import */


      var _internal_observable_range__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../internal/observable/range */
      "NNCq");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "dispatch", function () {
        return _internal_observable_range__WEBPACK_IMPORTED_MODULE_14__["dispatch"];
      });
      /* harmony import */


      var _internal_observable_SubscribeOnObservable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../internal/observable/SubscribeOnObservable */
      "O4y0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SubscribeOnObservable", function () {
        return _internal_observable_SubscribeOnObservable__WEBPACK_IMPORTED_MODULE_15__["SubscribeOnObservable"];
      });
      /* harmony import */


      var _internal_operators_timestamp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../internal/operators/timestamp */
      "r0WS");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Timestamp", function () {
        return _internal_operators_timestamp__WEBPACK_IMPORTED_MODULE_16__["Timestamp"];
      });
      /* harmony import */


      var _internal_operators_timeInterval__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../internal/operators/timeInterval */
      "4hIw");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimeInterval", function () {
        return _internal_operators_timeInterval__WEBPACK_IMPORTED_MODULE_17__["TimeInterval"];
      });
      /* harmony import */


      var _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../internal/operators/groupBy */
      "OQgR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GroupedObservable", function () {
        return _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_18__["GroupedObservable"];
      });
      /* harmony import */


      var _internal_operators_throttle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../internal/operators/throttle */
      "yuhW");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "defaultThrottleConfig", function () {
        return _internal_operators_throttle__WEBPACK_IMPORTED_MODULE_19__["defaultThrottleConfig"];
      });
      /* harmony import */


      var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../internal/symbol/rxSubscriber */
      "2QA8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "rxSubscriber", function () {
        return _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_20__["rxSubscriber"];
      });
      /* harmony import */


      var _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../internal/symbol/iterator */
      "Lhse");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "iterator", function () {
        return _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_21__["iterator"];
      });
      /* harmony import */


      var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../internal/symbol/observable */
      "kJWO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "observable", function () {
        return _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_22__["observable"];
      });
      /* harmony import */


      var _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../internal/util/ArgumentOutOfRangeError */
      "4I5i");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function () {
        return _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_23__["ArgumentOutOfRangeError"];
      });
      /* harmony import */


      var _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../internal/util/EmptyError */
      "sVev");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EmptyError", function () {
        return _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_24__["EmptyError"];
      });
      /* harmony import */


      var _internal_util_Immediate__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../internal/util/Immediate */
      "c7jc");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Immediate", function () {
        return _internal_util_Immediate__WEBPACK_IMPORTED_MODULE_25__["Immediate"];
      });
      /* harmony import */


      var _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../internal/util/ObjectUnsubscribedError */
      "9ppp");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function () {
        return _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_26__["ObjectUnsubscribedError"];
      });
      /* harmony import */


      var _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../internal/util/TimeoutError */
      "Y6u4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimeoutError", function () {
        return _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_27__["TimeoutError"];
      });
      /* harmony import */


      var _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../internal/util/UnsubscriptionError */
      "pjAE");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function () {
        return _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_28__["UnsubscriptionError"];
      });
      /* harmony import */


      var _internal_util_applyMixins__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../internal/util/applyMixins */
      "Of7M");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "applyMixins", function () {
        return _internal_util_applyMixins__WEBPACK_IMPORTED_MODULE_29__["applyMixins"];
      });
      /* harmony import */


      var _internal_util_errorObject__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../internal/util/errorObject */
      "dJRF");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "errorObject", function () {
        return _internal_util_errorObject__WEBPACK_IMPORTED_MODULE_30__["errorObject"];
      });
      /* harmony import */


      var _internal_util_hostReportError__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../internal/util/hostReportError */
      "NJ4a");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "hostReportError", function () {
        return _internal_util_hostReportError__WEBPACK_IMPORTED_MODULE_31__["hostReportError"];
      });
      /* harmony import */


      var _internal_util_identity__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../internal/util/identity */
      "SpAZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "identity", function () {
        return _internal_util_identity__WEBPACK_IMPORTED_MODULE_32__["identity"];
      });
      /* harmony import */


      var _internal_util_isArray__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../internal/util/isArray */
      "DH7j");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isArray", function () {
        return _internal_util_isArray__WEBPACK_IMPORTED_MODULE_33__["isArray"];
      });
      /* harmony import */


      var _internal_util_isArrayLike__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../internal/util/isArrayLike */
      "I55L");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isArrayLike", function () {
        return _internal_util_isArrayLike__WEBPACK_IMPORTED_MODULE_34__["isArrayLike"];
      });
      /* harmony import */


      var _internal_util_isDate__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ../internal/util/isDate */
      "mlxB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isDate", function () {
        return _internal_util_isDate__WEBPACK_IMPORTED_MODULE_35__["isDate"];
      });
      /* harmony import */


      var _internal_util_isFunction__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ../internal/util/isFunction */
      "n6bG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isFunction", function () {
        return _internal_util_isFunction__WEBPACK_IMPORTED_MODULE_36__["isFunction"];
      });
      /* harmony import */


      var _internal_util_isIterable__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ../internal/util/isIterable */
      "CMyj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isIterable", function () {
        return _internal_util_isIterable__WEBPACK_IMPORTED_MODULE_37__["isIterable"];
      });
      /* harmony import */


      var _internal_util_isNumeric__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ../internal/util/isNumeric */
      "Y7HM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isNumeric", function () {
        return _internal_util_isNumeric__WEBPACK_IMPORTED_MODULE_38__["isNumeric"];
      });
      /* harmony import */


      var _internal_util_isObject__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ../internal/util/isObject */
      "XoHu");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isObject", function () {
        return _internal_util_isObject__WEBPACK_IMPORTED_MODULE_39__["isObject"];
      });
      /* harmony import */


      var _internal_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ../internal/util/isInteropObservable */
      "QIAL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isObservable", function () {
        return _internal_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_40__["isInteropObservable"];
      });
      /* harmony import */


      var _internal_util_isPromise__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ../internal/util/isPromise */
      "c2HN");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isPromise", function () {
        return _internal_util_isPromise__WEBPACK_IMPORTED_MODULE_41__["isPromise"];
      });
      /* harmony import */


      var _internal_util_isScheduler__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ../internal/util/isScheduler */
      "z+Ro");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isScheduler", function () {
        return _internal_util_isScheduler__WEBPACK_IMPORTED_MODULE_42__["isScheduler"];
      });
      /* harmony import */


      var _internal_util_noop__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ../internal/util/noop */
      "KqfI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "noop", function () {
        return _internal_util_noop__WEBPACK_IMPORTED_MODULE_43__["noop"];
      });
      /* harmony import */


      var _internal_util_not__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ../internal/util/not */
      "F97/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "not", function () {
        return _internal_util_not__WEBPACK_IMPORTED_MODULE_44__["not"];
      });
      /* harmony import */


      var _internal_util_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ../internal/util/pipe */
      "mCNh");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "pipe", function () {
        return _internal_util_pipe__WEBPACK_IMPORTED_MODULE_45__["pipe"];
      });
      /* harmony import */


      var _internal_util_root__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ../internal/util/root */
      "xJj7");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "root", function () {
        return _internal_util_root__WEBPACK_IMPORTED_MODULE_46__["root"];
      });
      /* harmony import */


      var _internal_util_subscribeTo__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ../internal/util/subscribeTo */
      "SeVD");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "subscribeTo", function () {
        return _internal_util_subscribeTo__WEBPACK_IMPORTED_MODULE_47__["subscribeTo"];
      });
      /* harmony import */


      var _internal_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ../internal/util/subscribeToArray */
      "ngJS");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "subscribeToArray", function () {
        return _internal_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_48__["subscribeToArray"];
      });
      /* harmony import */


      var _internal_util_subscribeToIterable__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ../internal/util/subscribeToIterable */
      "pLzU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "subscribeToIterable", function () {
        return _internal_util_subscribeToIterable__WEBPACK_IMPORTED_MODULE_49__["subscribeToIterable"];
      });
      /* harmony import */


      var _internal_util_subscribeToObservable__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ../internal/util/subscribeToObservable */
      "CRDf");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "subscribeToObservable", function () {
        return _internal_util_subscribeToObservable__WEBPACK_IMPORTED_MODULE_50__["subscribeToObservable"];
      });
      /* harmony import */


      var _internal_util_subscribeToPromise__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ../internal/util/subscribeToPromise */
      "a7t3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "subscribeToPromise", function () {
        return _internal_util_subscribeToPromise__WEBPACK_IMPORTED_MODULE_51__["subscribeToPromise"];
      });
      /* harmony import */


      var _internal_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ../internal/util/subscribeToResult */
      "ZUHj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "subscribeToResult", function () {
        return _internal_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_52__["subscribeToResult"];
      });
      /* harmony import */


      var _internal_util_toSubscriber__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ../internal/util/toSubscriber */
      "WyKG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "toSubscriber", function () {
        return _internal_util_toSubscriber__WEBPACK_IMPORTED_MODULE_53__["toSubscriber"];
      });
      /* harmony import */


      var _internal_util_tryCatch__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ../internal/util/tryCatch */
      "mtqP");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "tryCatch", function () {
        return _internal_util_tryCatch__WEBPACK_IMPORTED_MODULE_54__["tryCatch"];
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "wGW3":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/mergeMap.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function wGW3(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var mergeMap_1 = __webpack_require__(
      /*! ../../operator/mergeMap */
      "iD44");

      rxjs_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
      rxjs_1.Observable.prototype.flatMap = mergeMap_1.mergeMap; //# sourceMappingURL=mergeMap.js.map

      /***/
    },

    /***/
    "wWu8":
    /*!*****************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/ignoreElements.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function wWu8(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ignoreElements_1 = __webpack_require__(
      /*! ../../operator/ignoreElements */
      "Lsvf");

      rxjs_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements; //# sourceMappingURL=ignoreElements.js.map

      /***/
    },

    /***/
    "wfyD":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/delayWhen.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function wfyD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var delayWhen_1 = __webpack_require__(
      /*! ../../operator/delayWhen */
      "lXds");

      rxjs_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen; //# sourceMappingURL=delayWhen.js.map

      /***/
    },

    /***/
    "wxn8":
    /*!********************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/observable/dom/WebSocketSubject.js ***!
      \********************************************************************************/

    /*! exports provided: WebSocketSubject */

    /***/
    function wxn8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebSocketSubject", function () {
        return WebSocketSubject;
      });
      /* harmony import */


      var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../Subject */
      "XNiG");
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../Subscriber */
      "7o/Q");
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../Observable */
      "HDdC");
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../Subscription */
      "quSY");
      /* harmony import */


      var _ReplaySubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ReplaySubject */
      "jtHE");

      var DEFAULT_WEBSOCKET_CONFIG = {
        url: '',
        deserializer: function deserializer(e) {
          return JSON.parse(e.data);
        },
        serializer: function serializer(value) {
          return JSON.stringify(value);
        }
      };
      var WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT = 'WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }';

      var WebSocketSubject = /*#__PURE__*/function (_Subject__WEBPACK_IMP2) {
        _inherits(WebSocketSubject, _Subject__WEBPACK_IMP2);

        var _super6 = _createSuper(WebSocketSubject);

        function WebSocketSubject(urlConfigOrSource, destination) {
          var _this33;

          _classCallCheck(this, WebSocketSubject);

          _this33 = _super6.call(this);

          if (urlConfigOrSource instanceof _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
            _this33.destination = destination;
            _this33.source = urlConfigOrSource;
          } else {
            var config = _this33._config = Object.assign({}, DEFAULT_WEBSOCKET_CONFIG);
            _this33._output = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

            if (typeof urlConfigOrSource === 'string') {
              config.url = urlConfigOrSource;
            } else {
              for (var key in urlConfigOrSource) {
                if (urlConfigOrSource.hasOwnProperty(key)) {
                  config[key] = urlConfigOrSource[key];
                }
              }
            }

            if (!config.WebSocketCtor && WebSocket) {
              config.WebSocketCtor = WebSocket;
            } else if (!config.WebSocketCtor) {
              throw new Error('no WebSocket constructor can be found');
            }

            _this33.destination = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
          }

          return _this33;
        }

        _createClass(WebSocketSubject, [{
          key: "lift",
          value: function lift(operator) {
            var sock = new WebSocketSubject(this._config, this.destination);
            sock.operator = operator;
            sock.source = this;
            return sock;
          }
        }, {
          key: "_resetState",
          value: function _resetState() {
            this._socket = null;

            if (!this.source) {
              this.destination = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
            }

            this._output = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          }
        }, {
          key: "multiplex",
          value: function multiplex(subMsg, unsubMsg, messageFilter) {
            var self = this;
            return new _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              try {
                self.next(subMsg());
              } catch (err) {
                observer.error(err);
              }

              var subscription = self.subscribe(function (x) {
                try {
                  if (messageFilter(x)) {
                    observer.next(x);
                  }
                } catch (err) {
                  observer.error(err);
                }
              }, function (err) {
                return observer.error(err);
              }, function () {
                return observer.complete();
              });
              return function () {
                try {
                  self.next(unsubMsg());
                } catch (err) {
                  observer.error(err);
                }

                subscription.unsubscribe();
              };
            });
          }
        }, {
          key: "_connectSocket",
          value: function _connectSocket() {
            var _this34 = this;

            var _this$_config = this._config,
                WebSocketCtor = _this$_config.WebSocketCtor,
                protocol = _this$_config.protocol,
                url = _this$_config.url,
                binaryType = _this$_config.binaryType;
            var observer = this._output;
            var socket = null;

            try {
              socket = protocol ? new WebSocketCtor(url, protocol) : new WebSocketCtor(url);
              this._socket = socket;

              if (binaryType) {
                this._socket.binaryType = binaryType;
              }
            } catch (e) {
              observer.error(e);
              return;
            }

            var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"](function () {
              _this34._socket = null;

              if (socket && socket.readyState === 1) {
                socket.close();
              }
            });

            socket.onopen = function (e) {
              var _socket = _this34._socket;

              if (!_socket) {
                socket.close();

                _this34._resetState();

                return;
              }

              var openObserver = _this34._config.openObserver;

              if (openObserver) {
                openObserver.next(e);
              }

              var queue = _this34.destination;
              _this34.destination = _Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"].create(function (x) {
                if (socket.readyState === 1) {
                  try {
                    var serializer = _this34._config.serializer;
                    socket.send(serializer(x));
                  } catch (e) {
                    _this34.destination.error(e);
                  }
                }
              }, function (e) {
                var closingObserver = _this34._config.closingObserver;

                if (closingObserver) {
                  closingObserver.next(undefined);
                }

                if (e && e.code) {
                  socket.close(e.code, e.reason);
                } else {
                  observer.error(new TypeError(WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT));
                }

                _this34._resetState();
              }, function () {
                var closingObserver = _this34._config.closingObserver;

                if (closingObserver) {
                  closingObserver.next(undefined);
                }

                socket.close();

                _this34._resetState();
              });

              if (queue && queue instanceof _ReplaySubject__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]) {
                subscription.add(queue.subscribe(_this34.destination));
              }
            };

            socket.onerror = function (e) {
              _this34._resetState();

              observer.error(e);
            };

            socket.onclose = function (e) {
              _this34._resetState();

              var closeObserver = _this34._config.closeObserver;

              if (closeObserver) {
                closeObserver.next(e);
              }

              if (e.wasClean) {
                observer.complete();
              } else {
                observer.error(e);
              }
            };

            socket.onmessage = function (e) {
              try {
                var deserializer = _this34._config.deserializer;
                observer.next(deserializer(e));
              } catch (err) {
                observer.error(err);
              }
            };
          }
        }, {
          key: "_subscribe",
          value: function _subscribe(subscriber) {
            var _this35 = this;

            var source = this.source;

            if (source) {
              return source.subscribe(subscriber);
            }

            if (!this._socket) {
              this._connectSocket();
            }

            this._output.subscribe(subscriber);

            subscriber.add(function () {
              var _socket = _this35._socket;

              if (_this35._output.observers.length === 0) {
                if (_socket && _socket.readyState === 1) {
                  _socket.close();
                }

                _this35._resetState();
              }
            });
            return subscriber;
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe() {
            var _socket = this._socket;

            if (_socket && _socket.readyState === 1) {
              _socket.close();
            }

            this._resetState();

            _get(_getPrototypeOf(WebSocketSubject.prototype), "unsubscribe", this).call(this);
          }
        }]);

        return WebSocketSubject;
      }(_Subject__WEBPACK_IMPORTED_MODULE_0__["AnonymousSubject"]); //# sourceMappingURL=WebSocketSubject.js.map

      /***/

    },

    /***/
    "x4c3":
    /*!***********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/observable/fromPromise.js ***!
      \***********************************************************************/

    /*! exports provided: fromPromise */

    /***/
    function x4c3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromPromise", function () {
        return fromPromise;
      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      "HDdC");
      /* harmony import */


      var _util_subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/subscribeToPromise */
      "a7t3");
      /* harmony import */


      var _scheduled_schedulePromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../scheduled/schedulePromise */
      "4yVj");

      function fromPromise(input, scheduler) {
        if (!scheduler) {
          return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__["subscribeToPromise"])(input));
        } else {
          return Object(_scheduled_schedulePromise__WEBPACK_IMPORTED_MODULE_2__["schedulePromise"])(input, scheduler);
        }
      } //# sourceMappingURL=fromPromise.js.map

      /***/

    },

    /***/
    "xJj7":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/util/root.js ***!
      \**********************************************************/

    /*! exports provided: root */

    /***/
    function xJj7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "root", function () {
        return _root;
      });

      var __window = typeof window !== 'undefined' && window;

      var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope && self;

      var __global = typeof global !== 'undefined' && global;

      var _root = __window || __global || __self;

      (function () {
        if (!_root) {
          throw new Error('RxJS could not find any global context (window, self, global)');
        }
      })(); //# sourceMappingURL=root.js.map

      /***/

    },

    /***/
    "xwTN":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/mergeMapTo.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function xwTN(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Projects each source value to the same Observable which is merged multiple
       * times in the output Observable.
       *
       * <span class="informal">It's like {@link mergeMap}, but maps each value always
       * to the same inner Observable.</span>
       *
       * <img src="./img/mergeMapTo.png" width="100%">
       *
       * Maps each source value to the given Observable `innerObservable` regardless
       * of the source value, and then merges those resulting Observables into one
       * single Observable, which is the output Observable.
       *
       * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
       * result.subscribe(x => console.log(x));
       *
       * @see {@link concatMapTo}
       * @see {@link merge}
       * @see {@link mergeAll}
       * @see {@link mergeMap}
       * @see {@link mergeScan}
       * @see {@link switchMapTo}
       *
       * @param {ObservableInput} innerObservable An Observable to replace each value from
       * the source Observable.
       * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
       * Observables being subscribed to concurrently.
       * @return {Observable} An Observable that emits items from the given
       * `innerObservable`.
       * @method mergeMapTo
       * @owner Observable
       */


      function mergeMapTo(innerObservable, concurrent) {
        if (concurrent === void 0) {
          concurrent = Number.POSITIVE_INFINITY;
        }

        return operators_1.mergeMapTo(innerObservable, concurrent)(this);
      }

      exports.mergeMapTo = mergeMapTo; //# sourceMappingURL=mergeMapTo.js.map

      /***/
    },

    /***/
    "zDpS":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/timeoutWith.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function zDpS(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:enable:max-line-length */

      /**
       *
       * Errors if Observable does not emit a value in given time span, in case of which
       * subscribes to the second Observable.
       *
       * <span class="informal">It's a version of `timeout` operator that let's you specify fallback Observable.</span>
       *
       * <img src="./img/timeoutWith.png" width="100%">
       *
       * `timeoutWith` is a variation of `timeout` operator. It behaves exactly the same,
       * still accepting as a first argument either a number or a Date, which control - respectively -
       * when values of source Observable should be emitted or when it should complete.
       *
       * The only difference is that it accepts a second, required parameter. This parameter
       * should be an Observable which will be subscribed when source Observable fails any timeout check.
       * So whenever regular `timeout` would emit an error, `timeoutWith` will instead start re-emitting
       * values from second Observable. Note that this fallback Observable is not checked for timeouts
       * itself, so it can emit values and complete at arbitrary points in time. From the moment of a second
       * subscription, Observable returned from `timeoutWith` simply mirrors fallback stream. When that
       * stream completes, it completes as well.
       *
       * Scheduler, which in case of `timeout` is provided as as second argument, can be still provided
       * here - as a third, optional parameter. It still is used to schedule timeout checks and -
       * as a consequence - when second Observable will be subscribed, since subscription happens
       * immediately after failing check.
       *
       * @example <caption>Add fallback observable</caption>
       * const seconds = Rx.Observable.interval(1000);
       * const minutes = Rx.Observable.interval(60 * 1000);
       *
       * seconds.timeoutWith(900, minutes)
       *     .subscribe(
       *         value => console.log(value), // After 900ms, will start emitting `minutes`,
       *                                      // since first value of `seconds` will not arrive fast enough.
       *         err => console.log(err) // Would be called after 900ms in case of `timeout`,
       *                                 // but here will never be called.
       *     );
       *
       * @param {number|Date} due Number specifying period within which Observable must emit values
       *                          or Date specifying before when Observable should complete
       * @param {Observable<T>} withObservable Observable which will be subscribed if source fails timeout check.
       * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
       * @return {Observable<T>} Observable that mirrors behaviour of source or, when timeout check fails, of an Observable
       *                          passed as a second parameter.
       * @method timeoutWith
       * @owner Observable
       */


      function timeoutWith(due, withObservable, scheduler) {
        if (scheduler === void 0) {
          scheduler = rxjs_1.asyncScheduler;
        }

        return operators_1.timeoutWith(due, withObservable, scheduler)(this);
      }

      exports.timeoutWith = timeoutWith; //# sourceMappingURL=timeoutWith.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=features-lac-lac-module-es5.js.map