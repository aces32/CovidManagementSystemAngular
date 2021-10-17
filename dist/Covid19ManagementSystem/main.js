(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ayo\Documents\ThynkSoft\CovidManagementPortalUI\Covid19ManagementSystem\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    BASE_URL: 'https://covidmanagementportal.azurewebsites.net/',
    Location_API: '/api/Location',
    Administrator_API: '/api/Administrator',
    Individual_API: '/api/Individual',
    IndividualLabs_API: '/api/IndividualLabs',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class AppComponent {
    constructor() {
        this.title = 'Covid19ManagementSystem';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/component.module */ "dagM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _components_component_module__WEBPACK_IMPORTED_MODULE_4__["ComponentModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({ positionClass: 'toast-bottom-right' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastContainerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _components_component_module__WEBPACK_IMPORTED_MODULE_4__["ComponentModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastContainerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _components_component_module__WEBPACK_IMPORTED_MODULE_4__["ComponentModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({ positionClass: 'toast-bottom-right' }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastContainerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
                ],
                exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");





const routes = [
    {
        path: '',
        redirectTo: 'portal',
        pathMatch: 'full',
    },
    {
        path: 'portal',
        loadChildren: () => __webpack_require__.e(/*! import() | portal-portal-module */ "portal-portal-module").then(__webpack_require__.bind(null, /*! ./portal/portal.module */ "JJIx")).then((m) => m.PortalModule),
    },
    {
        path: '**',
        redirectTo: 'portal',
        pathMatch: 'full',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "dagM":
/*!************************************************!*\
  !*** ./src/app/components/component.module.ts ***!
  \************************************************/
/*! exports provided: ComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return ComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header/header.component */ "mJ5s");
/* harmony import */ var _sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar/sidebar.component */ "h+Zc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");






class ComponentModule {
}
ComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentModule });
ComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentModule_Factory(t) { return new (t || ComponentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentModule, { declarations: [_header_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_header_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _header_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]
                ],
                exports: [
                    _header_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "h+Zc":
/*!*****************************************************************!*\
  !*** ./src/app/components/sidebar/sidebar/sidebar.component.ts ***!
  \*****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



const _c0 = ["*"];
class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], ngContentSelectors: _c0, decls: 32, vars: 0, consts: [[1, "container-fluid"], [1, "row"], ["id", "sidebarMenu", 1, "col-md-3", "col-lg-2", "d-md-block", "bg-light", "sidebar", "collapse"], [1, "sidebar-sticky", "pt-3"], [1, "nav", "flex-column"], [1, "nav-item"], ["routerLink", "/portal/administrator", 1, "nav-link"], [1, "fa", "fa-address-book", "icon", "icon-color-orange"], [2, "margin-left", "20px"], ["routerLink", "/portal/individuals", 1, "nav-link"], [1, "fa", "fa-user", "icon", "icon-color-orange"], ["routerLink", "/portal/cancelBookings", 1, "nav-link"], [1, "fa", "fa-times", "icon", "icon-color-orange"], ["routerLink", "/portal/individualLabs", 1, "nav-link"], [1, "fa", "fa-flask", "icon", "icon-color-orange"], ["routerLink", "/portal/reports", 1, "nav-link"], [1, "fa", "fa-book", "icon", "icon-color-orange"], ["role", "main", 1, "col-md-9", "ml-sm-auto", "col-lg-10", "px-md-4"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Individual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Labs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "main", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".text-user[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n}\n\n.img-circle[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n  margin: 2rem 0;\n}\n\n.img-user[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 5px;\n}\n\n.icon-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.icon-color-purple[_ngcontent-%COMP%] {\n  color: purple;\n}\n\n.icon-color-yellow[_ngcontent-%COMP%] {\n  color: yellow;\n}\n\n.icon-color-orange[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.icon-color-green[_ngcontent-%COMP%] {\n  color: #92da3f;\n}\n\n.nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: grey;\n  margin-top: 5px;\n}\n\n.user-dropdown[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n}\n\n.user-dropdown[_ngcontent-%COMP%]   .user-text[_ngcontent-%COMP%] {\n  color: grey;\n  font-size: 1rem;\n  padding: 0 5px;\n}\n\n.dropdown-logo[_ngcontent-%COMP%] {\n  color: grey;\n  margin: 0 5px;\n}\n\n.btn-user[_ngcontent-%COMP%] {\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUlKOztBQVNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBTko7O0FBUUU7RUFDRSxXQUFBO0FBTEo7O0FBT0U7RUFDRSxhQUFBO0FBSko7O0FBTUU7RUFDRSxhQUFBO0FBSEo7O0FBS0U7RUFDRSxhQUFBO0FBRko7O0FBSUU7RUFDRSxjQUFBO0FBREo7O0FBSUk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUROOztBQUtFO0VBQ0Usa0JBQUE7QUFGSjs7QUFHSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUROOztBQUlFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFESjs7QUFJRTtFQUNFLFNBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC11c2VyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgLmltZy1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgfVxyXG4gIC5pbWctdXNlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIC8vIC5zaWRlLWJhcnsgICAgXHJcbiAgLy8gICBwb3NpdGlvbjphYnNvbHV0ZTsgXHJcbiAgLy8gICBkaXNwbGF5OmJsb2NrOyBcclxuICAvLyAgIGhlaWdodDoxMDAlOyBcclxuICAvLyAgIHdpZHRoOjEwMCU7IFxyXG4gIC8vICAgdG9wOjBweDsgXHJcbiAgLy8gICBsZWZ0OjBweDsgXHJcbiAgLy8gICB6LWluZGV4Oi0xOyAgICBcclxuICAvLyAgIH1cclxuICBcclxuICAuaWNvbi12aWV3IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuICAubmF2LWl0ZW0ge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgfVxyXG4gIC5pY29uLWNvbG9yLXB1cnBsZSB7XHJcbiAgICBjb2xvcjogcHVycGxlO1xyXG4gIH1cclxuICAuaWNvbi1jb2xvci15ZWxsb3cge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxuICB9XHJcbiAgLmljb24tY29sb3Itb3JhbmdlIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgfVxyXG4gIC5pY29uLWNvbG9yLWdyZWVuIHtcclxuICAgIGNvbG9yOiByZ2IoMTQ2LCAyMTgsIDYzKTtcclxuICB9XHJcbiAgLm5hdi1saW5rIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudXNlci1kcm9wZG93biB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICAudXNlci10ZXh0IHtcclxuICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1sb2dvIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi11c2VyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mJ5s":
/*!**************************************************************!*\
  !*** ./src/app/components/header/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 0, consts: [["id", "main-nav", 1, "navbar", "navbar-expand-lg", "navbar-light", "sticky-top", "bg-light", "shadow"], [1, "navbar-nav", "px-3", "ml-auto"], [1, "nav-item", "text-nowrap"], [1, "nav-view"], ["routerLink", "/portal/administrator", 1, "nav-item-cart"], [1, "fa", "fa-hospital-o", "icon", "icon-color-orange"], [1, "user-text"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Covid Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".user-dropdown[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n}\n.user-dropdown[_ngcontent-%COMP%]   .user-text[_ngcontent-%COMP%] {\n  color: grey;\n  font-size: 1rem;\n  padding: 0 5px;\n}\n.dropdown-logo[_ngcontent-%COMP%] {\n  color: grey;\n  margin: 0 5px;\n}\n#main-nav[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.btn-user[_ngcontent-%COMP%] {\n  border: 0;\n}\n.text-user[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 20px;\n  color: orange;\n}\n.logo-brand[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 4rem;\n  margin-bottom: 5px;\n  margin-left: 4rem;\n}\n.navbar[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 2rem;\n  border-bottom-right-radius: 2rem;\n}\n.nav-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  position: relative;\n}\n.nav-view[_ngcontent-%COMP%]   .nav-item-cart[_ngcontent-%COMP%] {\n  margin-right: 3rem;\n  cursor: pointer;\n  outline: none;\n}\n.nav-view[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.2rem;\n}\n.btn-group[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7QUFBSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVOO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUVKO0FBQ0U7RUFDRSxXQUFBO0FBRUo7QUFBRTtFQUNFLFNBQUE7QUFHSjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBR0o7QUFERTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUlKO0FBREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFJSjtBQUZFO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQUtKO0FBRkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBS0o7QUFKSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFNTjtBQUpJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBTU47QUFGRTtFQUNFLGVBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1kcm9wZG93biB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICAudXNlci10ZXh0IHtcclxuICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1sb2dvIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICB9XHJcbiAgXHJcbiAgI21haW4tbmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuYnRuLXVzZXIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICBcclxuICAudGV4dC11c2VyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgLmljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvLWJyYW5kIHtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRyZW07XHJcbiAgfVxyXG4gIC5uYXZiYXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnJlbTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAubmF2LXZpZXcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAubmF2LWl0ZW0tY2FydCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmJhZGdlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDAuMnJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1ncm91cCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map