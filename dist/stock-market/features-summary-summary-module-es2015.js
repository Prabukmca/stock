(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-summary-summary-module"],{

/***/ "8Zp9":
/*!****************************************************!*\
  !*** ./src/app/features/summary/summary.module.ts ***!
  \****************************************************/
/*! exports provided: SummaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryModule", function() { return SummaryModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _summary_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary-routing.module */ "92K7");
/* harmony import */ var _containers_summary_container_summary_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/summary-container/summary-container.component */ "lEBu");
/* harmony import */ var _containers_summary_inlet_summary_inlet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/summary-inlet/summary-inlet.component */ "hvVu");
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/summary/summary.component */ "T6XD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SummaryModule {
}
SummaryModule.ɵfac = function SummaryModule_Factory(t) { return new (t || SummaryModule)(); };
SummaryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SummaryModule });
SummaryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _summary_routing_module__WEBPACK_IMPORTED_MODULE_1__["SummaryRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SummaryModule, { declarations: [_containers_summary_container_summary_container_component__WEBPACK_IMPORTED_MODULE_2__["SummaryContainerComponent"], _containers_summary_inlet_summary_inlet_component__WEBPACK_IMPORTED_MODULE_3__["SummaryInletComponent"], _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_4__["SummaryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _summary_routing_module__WEBPACK_IMPORTED_MODULE_1__["SummaryRoutingModule"]] }); })();


/***/ }),

/***/ "92K7":
/*!************************************************************!*\
  !*** ./src/app/features/summary/summary-routing.module.ts ***!
  \************************************************************/
/*! exports provided: SummaryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryRoutingModule", function() { return SummaryRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _containers_summary_inlet_summary_inlet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/summary-inlet/summary-inlet.component */ "hvVu");
/* harmony import */ var _containers_summary_container_summary_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/summary-container/summary-container.component */ "lEBu");
/* harmony import */ var src_app_guards_can_activate_program_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/can-activate-program.guard */ "ULA8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: "",
        component: _containers_summary_inlet_summary_inlet_component__WEBPACK_IMPORTED_MODULE_1__["SummaryInletComponent"],
        children: [
            {
                path: "summary",
                component: _containers_summary_container_summary_container_component__WEBPACK_IMPORTED_MODULE_2__["SummaryContainerComponent"],
                canActivate: [src_app_guards_can_activate_program_guard__WEBPACK_IMPORTED_MODULE_3__["CanActivateProgramGuard"]],
            },
            {
                path: "summary/:id",
                component: _containers_summary_container_summary_container_component__WEBPACK_IMPORTED_MODULE_2__["SummaryContainerComponent"],
                canActivate: [src_app_guards_can_activate_program_guard__WEBPACK_IMPORTED_MODULE_3__["CanActivateProgramGuard"]],
            },
        ],
    },
];
class SummaryRoutingModule {
}
SummaryRoutingModule.ɵfac = function SummaryRoutingModule_Factory(t) { return new (t || SummaryRoutingModule)(); };
SummaryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SummaryRoutingModule });
SummaryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SummaryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "T6XD":
/*!**************************************************************************!*\
  !*** ./src/app/features/summary/components/summary/summary.component.ts ***!
  \**************************************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SummaryComponent {
    constructor() { }
    ngOnInit() {
    }
    allowDrop(ev) {
        ev.preventDefault();
    }
    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(); };
SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["smc-summary"]], decls: 38, vars: 0, consts: [[1, "cards"], ["draggable", "true", "ondragstart", "drag(event)", 1, "card", "card1"], ["href", "#0"], ["draggable", "true", "ondragstart", "drag(event)", 1, "card", "card2"], ["draggable", "true", "ondragstart", "drag(event)", 1, "card", "card3"], ["id", "div1", "ondrop", "drop(event)", "ondragover", "allowDrop(event)"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Some Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Some Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Some Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Some Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Some Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Some Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 5);
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: lightseagreen;\n  height: 100vh;\n  margin: 0;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n}\n\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  --distance: -4rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 2em;\n  border-radius: 1rem;\n  border-color: rgba(102, 89, 89, 0.377);\n  background-color: darkseagreen;\n  padding: 2rem;\n  box-shadow: 4px 4px 12px 2px rgba(0, 0, 0, 0.75);\n  transition: 0.2s;\n}\n\n.card[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: var(--distance);\n}\n\n.card[_ngcontent-%COMP%]:hover, .card[_ngcontent-%COMP%]:focus-within {\n  transform: translateY(-1rem);\n  background-color: #48f151;\n}\n\n.card[_ngcontent-%COMP%]:hover    ~ .card[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]:focus-within    ~ .card[_ngcontent-%COMP%] {\n  transform: translate(calc(var(--distance)-1));\n  background-color: #98f79d;\n}\n\n#div1[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 70px;\n  padding: 10px;\n  margin-top: 200px;\n  border: 1px solid #aaaaaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFFQSxpQkFBQTtBQUNGOztBQUNBO0VBR0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBQ0U7RUFDRSw0QkFBQTtBQUNKOztBQUVBOztFQUVFLDRCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTs7RUFFRSw2Q0FBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBRUoiLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNhcmRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC0tZGlzdGFuY2U6IC00cmVtO1xyXG59XHJcbi5jYXJkIHtcclxuICAvLyAgIGhlaWdodDogMjB2aDtcclxuICAvLyAgIHdpZHRoOiAyMHZoO1xyXG4gIGJveC1zaGFkb3c6IDJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMDIsIDg5LCA4OSwgMC4zNzcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTJweCAycHggcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuNzUpO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tZGlzdGFuY2UpO1xyXG4gIH1cclxufVxyXG4uY2FyZDpob3ZlcixcclxuLmNhcmQ6Zm9jdXMtd2l0aGluIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MiwgMjQxLCA4MSk7XHJcbn1cclxuLmNhcmQ6aG92ZXIgfiAuY2FyZCxcclxuLmNhcmQ6Zm9jdXMtd2l0aGluIH4gLmNhcmQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGModmFyKC0tZGlzdGFuY2UpLTEpKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUyLCAyNDcsIDE1Nyk7XHJcbn1cclxuXHJcbiNkaXYxIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWFhYWE7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "ULA8":
/*!******************************************************!*\
  !*** ./src/app/guards/can-activate-program.guard.ts ***!
  \******************************************************/
/*! exports provided: CanActivateProgramGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateProgramGuard", function() { return CanActivateProgramGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CanActivateProgramGuard {
    canActivate(next, state) {
        console.log('params', next.params);
        console.log('parent params', next.parent.params);
        return true;
    }
}
CanActivateProgramGuard.ɵfac = function CanActivateProgramGuard_Factory(t) { return new (t || CanActivateProgramGuard)(); };
CanActivateProgramGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanActivateProgramGuard, factory: CanActivateProgramGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hvVu":
/*!**************************************************************************************!*\
  !*** ./src/app/features/summary/containers/summary-inlet/summary-inlet.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SummaryInletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryInletComponent", function() { return SummaryInletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class SummaryInletComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        console.log('summary inlet called');
        this.router.navigate(['/ps/summary']);
    }
}
SummaryInletComponent.ɵfac = function SummaryInletComponent_Factory(t) { return new (t || SummaryInletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SummaryInletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryInletComponent, selectors: [["smc-summary-inlet"]], decls: 1, vars: 0, template: function SummaryInletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdW1tYXJ5LWlubGV0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "lEBu":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/summary/containers/summary-container/summary-container.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SummaryContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryContainerComponent", function() { return SummaryContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/summary/summary.component */ "T6XD");



class SummaryContainerComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.navigate(['/ps/summary']);
    }
}
SummaryContainerComponent.ɵfac = function SummaryContainerComponent_Factory(t) { return new (t || SummaryContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SummaryContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryContainerComponent, selectors: [["smc-summary-container"]], decls: 1, vars: 0, template: function SummaryContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "smc-summary");
    } }, directives: [_components_summary_summary_component__WEBPACK_IMPORTED_MODULE_2__["SummaryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdW1tYXJ5LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=features-summary-summary-module-es2015.js.map