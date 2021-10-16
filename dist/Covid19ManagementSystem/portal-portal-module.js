(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portal-portal-module"],{

/***/ "JJIx":
/*!*****************************************!*\
  !*** ./src/app/portal/portal.module.ts ***!
  \*****************************************/
/*! exports provided: PortalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalModule", function() { return PortalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _container_portal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/portal.component */ "b65e");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/component.module */ "dagM");
/* harmony import */ var _portal_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portal.routing */ "US+G");






class PortalModule {
}
PortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PortalModule });
PortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PortalModule_Factory(t) { return new (t || PortalModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _portal_routing__WEBPACK_IMPORTED_MODULE_4__["PortalRoutingModule"],
            _components_component_module__WEBPACK_IMPORTED_MODULE_3__["ComponentModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalModule, { declarations: [_container_portal_component__WEBPACK_IMPORTED_MODULE_2__["PortalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _portal_routing__WEBPACK_IMPORTED_MODULE_4__["PortalRoutingModule"],
        _components_component_module__WEBPACK_IMPORTED_MODULE_3__["ComponentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _container_portal_component__WEBPACK_IMPORTED_MODULE_2__["PortalComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _portal_routing__WEBPACK_IMPORTED_MODULE_4__["PortalRoutingModule"],
                    _components_component_module__WEBPACK_IMPORTED_MODULE_3__["ComponentModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "US+G":
/*!******************************************!*\
  !*** ./src/app/portal/portal.routing.ts ***!
  \******************************************/
/*! exports provided: PortalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalRoutingModule", function() { return PortalRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _container_portal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/portal.component */ "b65e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");






const routes = [
    {
        path: '',
        component: _container_portal_component__WEBPACK_IMPORTED_MODULE_2__["PortalComponent"],
        children: [
            {
                path: '',
                redirectTo: 'administrator',
                pathMatch: 'full'
            },
            {
                path: 'administrator',
                loadChildren: () => Promise.all(/*! import() | administrator-administrator-module */[__webpack_require__.e("common"), __webpack_require__.e("administrator-administrator-module")]).then(__webpack_require__.bind(null, /*! ./administrator/administrator.module */ "+Dhh")).then(m => m.AdministratorModule)
            },
            {
                path: 'cancelBookings',
                loadChildren: () => Promise.all(/*! import() | cancelBookings-cancel-bookings-module */[__webpack_require__.e("common"), __webpack_require__.e("cancelBookings-cancel-bookings-module")]).then(__webpack_require__.bind(null, /*! ./cancelBookings/cancel-bookings.module */ "wOlj")).then(m => m.CancelBookingsModule)
            },
            {
                path: 'individuals',
                loadChildren: () => Promise.all(/*! import() | individuals-individual-module */[__webpack_require__.e("common"), __webpack_require__.e("individuals-individual-module")]).then(__webpack_require__.bind(null, /*! ./individuals/individual.module */ "D5jE")).then(m => m.IndividualModule)
            },
            {
                path: 'individualLabs',
                loadChildren: () => Promise.all(/*! import() | individualLabs-individual-labs-module */[__webpack_require__.e("common"), __webpack_require__.e("individualLabs-individual-labs-module")]).then(__webpack_require__.bind(null, /*! ./individualLabs/individual-labs.module */ "TjK5")).then(m => m.IndividualLabsModule)
            },
            {
                path: 'reports',
                loadChildren: () => Promise.all(/*! import() | reports-reports-module */[__webpack_require__.e("common"), __webpack_require__.e("reports-reports-module")]).then(__webpack_require__.bind(null, /*! ./reports/reports.module */ "E1YF")).then(m => m.ReportsModule)
            }
        ]
    }
];
class PortalRoutingModule {
}
PortalRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PortalRoutingModule });
PortalRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PortalRoutingModule_Factory(t) { return new (t || PortalRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "b65e":
/*!******************************************************!*\
  !*** ./src/app/portal/container/portal.component.ts ***!
  \******************************************************/
/*! exports provided: PortalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalComponent", function() { return PortalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _components_header_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header/header.component */ "mJ5s");
/* harmony import */ var _components_sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sidebar/sidebar/sidebar.component */ "h+Zc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





class PortalComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortalComponent.ɵfac = function PortalComponent_Factory(t) { return new (t || PortalComponent)(); };
PortalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortalComponent, selectors: [["app-portal"]], decls: 3, vars: 0, template: function PortalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9jb250YWluZXIvcG9ydGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portal',
                templateUrl: './portal.component.html',
                styleUrls: ['./portal.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=portal-portal-module.js.map