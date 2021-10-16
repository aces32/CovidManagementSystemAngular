(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "9Uo7":
/*!*************************************************************************!*\
  !*** ./src/app/services/administrator-service/administrator.service.ts ***!
  \*************************************************************************/
/*! exports provided: AdministratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministratorService", function() { return AdministratorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





const apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL}${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].Administrator_API}`;
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        "Content-Type": "application/json; charset=utf-8"
    })
};
class AdministratorService {
    constructor(http) {
        this.http = http;
    }
    submitAllocatedBookingSpace(request) {
        console.log(apiUrl);
        return this.http.post(`${apiUrl}${"/AllocateBookingSpace"}`, request, httpOptions).pipe();
    }
    GetBookingsReports(startDate, endDate, page, size) {
        console.log(apiUrl);
        return this.http.get(`${apiUrl}${"/GetBookingsReports?startDate="}
                ${startDate}${"&endDate="}${endDate}${"&page="}${page}${"&size="}${size}`, httpOptions).pipe();
    }
}
AdministratorService.ɵfac = function AdministratorService_Factory(t) { return new (t || AdministratorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AdministratorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdministratorService, factory: AdministratorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdministratorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "PcQO":
/*!***************************************************************!*\
  !*** ./src/app/services/location-service/location.service.ts ***!
  \***************************************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






const apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL}${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].Location_API}`;
let httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        "Content-Type": "application/json; charset=utf-8"
    })
};
class LocationService {
    constructor(http) {
        this.http = http;
    }
    getLocationData() {
        console.log(apiUrl);
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "nyUn":
/*!*************************************************************!*\
  !*** ./src/app/services/booking-service/booking.service.ts ***!
  \*************************************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





const apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL}${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].Individual_API}`;
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        "Content-Type": "application/json; charset=utf-8"
    })
};
class BookingService {
    constructor(http) {
        this.http = http;
    }
    submitBookedCovidTest(request) {
        console.log(apiUrl);
        return this.http.post(`${apiUrl}${"/BookCovidTest"}`, request, httpOptions).pipe();
    }
    GetIndividualInfoByMobileNoAndEmail(emailAddress, mobileNumber) {
        console.log(apiUrl);
        return this.http.get(`${apiUrl}${"/getIndividualInfoByMobileNoAndEmail?emailAddress="}
                ${emailAddress}${"&mobileNumber="}${mobileNumber}`, httpOptions).pipe();
    }
    cancelBookings(cancelBookingRequest) {
        console.log(apiUrl);
        return this.http.put(`${apiUrl}${"/CancelBookedTest"}`, cancelBookingRequest, httpOptions).pipe();
    }
}
BookingService.ɵfac = function BookingService_Factory(t) { return new (t || BookingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BookingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BookingService, factory: BookingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BookingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map