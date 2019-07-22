(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, Components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return Components; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _mainscreen_mainscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainscreen/mainscreen.component */ "./src/app/mainscreen/mainscreen.component.ts");
/* harmony import */ var _section2_section2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section2/section2.component */ "./src/app/section2/section2.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/doctor/doctor.component */ "./src/app/register/doctor/doctor.component.ts");
/* harmony import */ var _register_client_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/client/client.component */ "./src/app/register/client/client.component.ts");
/* harmony import */ var _doctor_list_doctor_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./doctor-list/doctor-list.component */ "./src/app/doctor-list/doctor-list.component.ts");
/* harmony import */ var _doctor_card_doctor_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./doctor-card/doctor-card.component */ "./src/app/doctor-card/doctor-card.component.ts");
/* harmony import */ var _doctor_details_doctor_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./doctor-details/doctor-details.component */ "./src/app/doctor-details/doctor-details.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// components










var routes = [
    { path: 'home', component: _mainscreen_mainscreen_component__WEBPACK_IMPORTED_MODULE_3__["MainscreenComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'doctor-registration', component: _register_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_6__["DoctorComponent"] },
    { path: 'client-registration', component: _register_client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"] },
    { path: 'doctor-list', component: _doctor_list_doctor_list_component__WEBPACK_IMPORTED_MODULE_8__["DoctorListComponent"] },
    { path: 'doctor-detail/:id', component: _doctor_details_doctor_details_component__WEBPACK_IMPORTED_MODULE_10__["DoctorDetailsComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var Components = [
    _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
    _mainscreen_mainscreen_component__WEBPACK_IMPORTED_MODULE_3__["MainscreenComponent"],
    _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
    _section2_section2_component__WEBPACK_IMPORTED_MODULE_4__["Section2Component"],
    _register_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_6__["DoctorComponent"],
    _register_client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"],
    _doctor_list_doctor_list_component__WEBPACK_IMPORTED_MODULE_8__["DoctorListComponent"],
    _doctor_card_doctor_card_component__WEBPACK_IMPORTED_MODULE_9__["DoctorCardComponent"],
    _doctor_details_doctor_details_component__WEBPACK_IMPORTED_MODULE_10__["DoctorDetailsComponent"],
    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'webApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["Components"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/doctor-card/doctor-card.component.html":
/*!********************************************************!*\
  !*** ./src/app/doctor-card/doctor-card.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"width:15em;margin-left:20px; margin-bottom:50px;\">\n    <mat-card-header>\n        <mat-card-title>{{doctorList.name}}</mat-card-title>\n        <mat-card-subtitle>{{doctorList.location}}</mat-card-subtitle>\n    </mat-card-header>\n    <img matCardImage src=\"../../assets/heart-3405559_1920.jpg\">\n    <mat-card-content>\n\n        <li style=\"font-size:140%;\">{{doctorList.specialty}}</li>\n        <li style=\"font-size: 120%;\">{{doctorList.location}}</li> <br>\n        <li><span class=\"availability\"> 3/3</span></li>\n\n    </mat-card-content>\n    <mat-card-actions align=\"end\">\n        <button (click)=\"onSelect(doctorList)\" mat-button color=\"accent\" routerLinkActive=\"router-link-active\">View</button>\n        <button mat-button color=\"primary\">Book Appointment</button>\n\n    </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/doctor-card/doctor-card.component.scss":
/*!********************************************************!*\
  !*** ./src/app/doctor-card/doctor-card.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  list-style-type: none; }\n\n.availability {\n  background: white;\n  color: #119111;\n  padding-left: 10px;\n  float: right;\n  width: 2em;\n  height: 2.3em;\n  text-align: center;\n  padding-top: 13px;\n  padding-right: 10px;\n  border-radius: 50%;\n  margin-top: -20px;\n  box-shadow: 0px 2px 4px rgba(70, 70, 70, 0.321); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yLWNhcmQvQzpcXFVzZXJzXFxMZXZpc1xcRGVza3RvcFxcRGVzbW9uZFxcTUVBTlN0YWNrXFxEb2N0b0xpYlxcV2ViQXBwL3NyY1xcYXBwXFxkb2N0b3ItY2FyZFxcZG9jdG9yLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRyxzQkFBcUIsRUFDeEI7O0FBQ0Q7RUFDSSxrQkFBaUI7RUFDakIsZUFBdUI7RUFDdkIsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixXQUFVO0VBQ1YsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsb0JBQWtCO0VBQ2xCLG1CQUFpQjtFQUNqQixrQkFBZ0I7RUFDaEIsZ0RBQTRDLEVBQy9DIiwiZmlsZSI6InNyYy9hcHAvZG9jdG9yLWNhcmQvZG9jdG9yLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgbGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbi5hdmFpbGFiaWxpdHl7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiByZ2IoMTcsIDE0NSwgMTcpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGhlaWdodDogMi4zZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgbWFyZ2luLXRvcDotMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoJGNvbG9yOiAjNDY0NjQ2LCAkYWxwaGE6IC4zMjEpXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/doctor-card/doctor-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/doctor-card/doctor-card.component.ts ***!
  \******************************************************/
/*! exports provided: DoctorCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorCardComponent", function() { return DoctorCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoctorCardComponent = /** @class */ (function () {
    function DoctorCardComponent(router) {
        this.router = router;
    }
    DoctorCardComponent.prototype.ngOnInit = function () {
    };
    DoctorCardComponent.prototype.onSelect = function (doctorList) {
        console.log('switching...');
        this.router.navigate(['/doctor-detail', doctorList.id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorCardComponent.prototype, "doctorList", void 0);
    DoctorCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctor-card',
            template: __webpack_require__(/*! ./doctor-card.component.html */ "./src/app/doctor-card/doctor-card.component.html"),
            styles: [__webpack_require__(/*! ./doctor-card.component.scss */ "./src/app/doctor-card/doctor-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DoctorCardComponent);
    return DoctorCardComponent;
}());



/***/ }),

/***/ "./src/app/doctor-details/doctor-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/doctor-details/doctor-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\n    <div class=\"left\" fxFlex=\"40\" fxLayout=\"row\" fxLayoutAlign=\"center start\" style=\"height:20em;\">\n        <img fxFlex=\"50\" src=\"../../assets/get paid.png\n    \" alt=\"\">\n    </div>\n    <div class=\"\" fxFlex=\"60\" style=\"height:20em;\">\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n            <div fxFlex=\"100\" style=\"font-size: 150%;\">\n                Doctor JOHNATHAN EBENEZA IYEANYA\n            </div>\n            <br> <br><br>\n            <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"20\" style=\"font-size: 120%\">\n                    Specialty\n                </div>\n                <div fxFlex=\"80\">\n                    Gyneachologist\n                </div>\n            </div> <br><br>\n\n            <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"20\" style=\"font-size: 120%\">\n                    Experience\n                </div>\n                <div fxFlex=\"80\">\n                    5 years +\n                </div>\n            </div><br><br>\n            <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"20\" style=\"font-size: 120%\">\n                    Address\n                </div>\n                <div fxFlex=\"80\">\n                    Limbe Mile 4. Opposite Bonadikombo\n                </div>\n            </div><br><br>\n            <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"20\" style=\"font-size: 120%\">\n                    Description\n                </div>\n                <div fxFlex=\"80\">\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore debitis ea recusandae tempora excepturi mollitia dicta itaque deserunt fugiat harum magni qui repellendus autem nemo ipsam, officiis nobis sequi dolore.\n                </div>\n            </div><br><br><br>\n            <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"20\" style=\"font-size: 120%\">\n                    email\n                </div>\n                <div fxFlex=\"80\">\n                    doctorabc@gmail.com\n                </div>\n            </div><br><br>\n\n            <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"20\" style=\"font-size: 120%\">\n                    Consultation fee\n                </div>\n                <div fxFlex=\"80\">\n                    10000FCFA\n                </div>\n            </div><br><br>\n\n\n            <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\">\n                <div fxFlex=\"20\" style=\"font-size: 120%\">\n                    Sessions\n                </div>\n                <div fxFlex=\"80\">\n                    <mat-chip-list>\n                        <mat-chip>s 9am - 11am</mat-chip>\n                        <mat-chip>s 1pm - 4pm</mat-chip>\n                        <mat-chip>s 6pm - 8pm</mat-chip>\n                    </mat-chip-list>\n                </div>\n            </div><br><br><br>\n            <div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"start center\">\n                <button fxFlex=\"50\" mat-raised-button color=\"primary\" style=\"font-size: 110%;height:3em;\">\n                  Book Appointment with doctor\n              </button>\n                <div fxFlex=\"50\">\n\n                </div>\n            </div><br><br>\n\n\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/doctor-details/doctor-details.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/doctor-details/doctor-details.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  margin-top: 6em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yLWRldGFpbHMvQzpcXFVzZXJzXFxMZXZpc1xcRGVza3RvcFxcRGVzbW9uZFxcTUVBTlN0YWNrXFxEb2N0b0xpYlxcV2ViQXBwL3NyY1xcYXBwXFxkb2N0b3ItZGV0YWlsc1xcZG9jdG9yLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci1kZXRhaWxzL2RvY3Rvci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gICAgbWFyZ2luLXRvcDogNmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/doctor-details/doctor-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/doctor-details/doctor-details.component.ts ***!
  \************************************************************/
/*! exports provided: DoctorDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorDetailsComponent", function() { return DoctorDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoctorDetailsComponent = /** @class */ (function () {
    function DoctorDetailsComponent() {
    }
    DoctorDetailsComponent.prototype.ngOnInit = function () {
    };
    DoctorDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctor-details',
            template: __webpack_require__(/*! ./doctor-details.component.html */ "./src/app/doctor-details/doctor-details.component.html"),
            styles: [__webpack_require__(/*! ./doctor-details.component.scss */ "./src/app/doctor-details/doctor-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DoctorDetailsComponent);
    return DoctorDetailsComponent;
}());



/***/ }),

/***/ "./src/app/doctor-list/doctor-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/doctor-list/doctor-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n    <div class=\"filter-container\" fxFlex=\"80\" fxLayout=\"row\">\n        <form action=\"\" method=\"get\" fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"20px\">\n            <span fxFlex=\"20\" style=\"text-align: center;\">Filter Content</span>\n            <div fxFlex=\"80\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"10px\">\n                <mat-form-field fxFlex=\"30\">\n                    <mat-label>location</mat-label>\n                    <mat-select>\n                        <mat-option value=\"Limbe\">Limbe</mat-option>\n                        <mat-option value=\"Buea\">Buea</mat-option>\n                        <mat-option value=\"volvo\">Bamenda</mat-option>\n\n                    </mat-select>\n                </mat-form-field>\n                <mat-form-field fxFlex=\"30\">\n                    <mat-label>Specialty</mat-label>\n                    <mat-select>\n                        <mat-option value=\"ENT\">ENT</mat-option>\n                        <mat-option value=\"Cardiologist\">Gynachologist</mat-option>\n                        <mat-option value=\"Cardiologist\">Cardiologist</mat-option>\n                        <mat-option value=\"Epidermologist\">Epidermologist</mat-option>\n                        <mat-option value=\"Neurologist\">Neurologist</mat-option>\n\n                    </mat-select>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <mat-label>doctor's name</mat-label>\n                    <input matInput type=\"text\">\n                </mat-form-field>\n            </div>\n\n        </form>\n    </div>\n</div>\n\n<div class=\"space-top\"></div>\n\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\n    <app-doctor-card *ngFor=\"let doctor of doctors\" [doctorList]=\"doctor\"></app-doctor-card>\n</div>"

/***/ }),

/***/ "./src/app/doctor-list/doctor-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/doctor-list/doctor-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  margin-top: 3%; }\n\n.doct_input {\n  height: 3em;\n  border: none;\n  font-family: 'Roboto';\n  border: 1px solid grey; }\n\n.space-top {\n  margin-top: 5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yLWxpc3QvQzpcXFVzZXJzXFxMZXZpc1xcRGVza3RvcFxcRGVzbW9uZFxcTUVBTlN0YWNrXFxEb2N0b0xpYlxcV2ViQXBwL3NyY1xcYXBwXFxkb2N0b3ItbGlzdFxcZG9jdG9yLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWixzQkFBcUI7RUFDckIsdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kb2N0b3ItbGlzdC9kb2N0b3ItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcblxyXG4uZG9jdF9pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5zcGFjZS10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNWVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/doctor-list/doctor-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/doctor-list/doctor-list.component.ts ***!
  \******************************************************/
/*! exports provided: DoctorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorListComponent", function() { return DoctorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_doctor_doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/doctor/doctor.service */ "./src/app/shared/doctor/doctor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoctorListComponent = /** @class */ (function () {
    function DoctorListComponent(doctorService) {
        this.doctorService = doctorService;
    }
    DoctorListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doctorService.listDoctors().subscribe(function (data) {
            _this.doctors = data;
        }, function (err) {
            console.log(err);
        });
    };
    DoctorListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctor-list',
            template: __webpack_require__(/*! ./doctor-list.component.html */ "./src/app/doctor-list/doctor-list.component.html"),
            styles: [__webpack_require__(/*! ./doctor-list.component.scss */ "./src/app/doctor-list/doctor-list.component.scss")],
            providers: [_shared_doctor_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]]
        }),
        __metadata("design:paramtypes", [_shared_doctor_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]])
    ], DoctorListComponent);
    return DoctorListComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n    <a class=\"logo\" fxFlex=\"20\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\">DocLib</a>\n    <span fxFlex=\"30\"></span>\n    <div class=\"form-button-container\" fxFlex=\"50\" fxFlexAlign=\"center\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n        <a href=\"\" mat-flat-button color=\"primary\" [routerLink]=\"['/client-registration']\" routerLinkActive=\"router-link-active\">REGISTER AS CLIENT</a>\n        <a href=\"\" mat-button style=\"color:yellow;\" [routerLink]=\"['/doctor-registration']\" routerLinkActive=\"router-link-active\">REGISTER AS DOCTOR</a>\n        <a href=\"\" mat-raised-button class=\"primary\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\">LOGIN</a>\n    </div>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  font-size: 2em;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcTGV2aXNcXERlc2t0b3BcXERlc21vbmRcXE1FQU5TdGFja1xcRG9jdG9MaWJcXFdlYkFwcC9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2Qsc0JBQXFCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <form #loginForm=\"ngForm\" (ngSubmit)=\"loginForm.valid && loginUser(loginForm)\" id=\"contact\">\n            <h3>CLIENT LOGIN FORM</h3>\n            <h4>As Client/Doctor</h4>\n            <div id=\"msg\">\n                <label class=\"errors\" *ngIf=\"serverErrorMessages\">{{serverErrorMessages}}</label>\n            </div>\n            <fieldset>\n                <input #email=\"ngModel\" [(ngModel)]=\"loginModel.email\" name=\"email\" placeholder=\"Your Email Address\" type=\"email\" tabindex=\"1\" required [pattern]=\"emailRegex\" autocomplete=\"off\">\n                <div *ngIf=\"loginForm.submitted && !email.valid\">\n                  <h6 class=\"errors\" *ngIf=\"email.errors.required\">Your email is required</h6>\n                  <h6 class=\"errors\" *ngIf=\"email.errors.pattern\">Invalid email</h6>\n              </div>\n            </fieldset>\n            \n            <fieldset>\n                <input #password=\"ngModel\" [(ngModel)]=\"loginModel.password\" name=\"password\" placeholder=\"Your Password\" type=\"password\" tabindex=\"2\" required autocomplete=\"off\">\n                <div *ngIf=\"loginForm.submitted && !password.valid\">\n                    <h6 class=\"errors\" *ngIf=\"password.errors.required\">Your password is required</h6>\n                </div>\n            </fieldset>\n\n            <fieldset>\n                <button name=\"submit\" type=\"submit\" id=\"contact-submit\" data-submit=\"...Sending\">Login</button>\n            </fieldset>\n            <p class=\"copyright\"><a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" title=\"Colorlib\">forgot password</a></p>\n        </form>\n    </div> "

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);\n.main {\n  margin-top: 3%;\n  margin-bottom: 3%; }\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -o-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  text-rendering: optimizeLegibility; }\nbody {\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  font-weight: 100;\n  font-size: 12px;\n  line-height: 30px;\n  color: #777;\n  background: #4CAF50; }\n.container {\n  max-width: 400px;\n  width: 100%;\n  margin: 0 auto;\n  position: relative; }\nselect,\n#contact input[type=\"text\"],\n#contact input[type=\"email\"],\n#contact input[type=\"tel\"],\n#contact input[type=\"password\"],\n#contact textarea,\n#contact button[type=\"submit\"] {\n  font: 400 12px/16px \"Roboto\", Helvetica, Arial, sans-serif; }\n#contact {\n  background: #F9F9F9;\n  padding: 25px;\n  margin: 100px 0;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); }\n#contact h3 {\n  display: block;\n  font-size: 30px;\n  font-weight: 300;\n  margin-bottom: 10px; }\n#contact h4 {\n  margin: 5px 0 15px;\n  display: block;\n  font-size: 13px;\n  font-weight: 400; }\nfieldset {\n  border: medium none !important;\n  margin: 0 0 10px;\n  min-width: 100%;\n  padding: 0;\n  width: 100%; }\nselect,\n#contact input[type=\"text\"],\n#contact input[type=\"email\"],\n#contact input[type=\"tel\"],\n#contact input[type=\"password\"],\n#contact textarea {\n  width: 100%;\n  border: 1px solid #ccc;\n  background: #FFF;\n  margin: 0 0 5px;\n  padding: 10px; }\nselect,\n#contact input[type=\"text\"]:hover,\n#contact input[type=\"email\"]:hover,\n#contact input[type=\"tel\"]:hover,\n#contact input[type=\"password\"]:hover,\n#contact textarea:hover {\n  transition: border-color 0.3s ease-in-out;\n  border: 1px solid #aaa; }\n#contact textarea {\n  height: 100px;\n  max-width: 100%;\n  resize: none; }\n#contact button[type=\"submit\"] {\n  cursor: pointer;\n  width: 100%;\n  border: none;\n  background: blue;\n  color: #FFF;\n  margin: 0 0 5px;\n  padding: 10px;\n  font-size: 15px; }\n#contact button[type=\"submit\"]:hover {\n  background: #4848e9;\n  transition: background-color 0.3s ease-in-out; }\n#contact button[type=\"submit\"]:active {\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5); }\n.copyright {\n  text-align: center; }\n#contact input:focus,\n#contact textarea:focus {\n  outline: 0;\n  border: 1px solid #aaa; }\n::-webkit-input-placeholder {\n  color: #888; }\n:-moz-placeholder {\n  color: #888; }\n::-moz-placeholder {\n  color: #888; }\n:-ms-input-placeholder {\n  color: #888; }\n.errors {\n  color: red; }\n.success {\n  color: #028911; }\n#msg {\n  margin-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxMZXZpc1xcRGVza3RvcFxcRGVzbW9uZFxcTUVBTlN0YWNrXFxEb2N0b0xpYlxcV2ViQXBwL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsa0ZBQVk7QUFOWjtFQUNJLGVBQWM7RUFDZCxrQkFBaUIsRUFDcEI7QUFJRDtFQUNJLFVBQVM7RUFDVCxXQUFVO0VBQ1YsdUJBQXNCO0VBQ3RCLCtCQUE4QjtFQUM5Qiw0QkFBMkI7RUFDM0Isb0NBQW1DO0VBQ25DLGlDQUFnQztFQUNoQywrQkFBOEI7RUFDOUIsNEJBQTJCO0VBQzNCLG1DQUFrQyxFQUNyQztBQUVEO0VBQ0ksb0RBQW1EO0VBQ25ELGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsb0JBQW1CLEVBQ3RCO0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGVBQWM7RUFDZCxtQkFBa0IsRUFDckI7QUFFRDs7Ozs7OztFQU9JLDJEQUEwRCxFQUM3RDtBQUVEO0VBQ0ksb0JBQW1CO0VBQ25CLGNBQWE7RUFDYixnQkFBZTtFQUNmLDJFQUEwRSxFQUM3RTtBQUVEO0VBQ0ksZUFBYztFQUNkLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUN0QjtBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjtBQUVEO0VBQ0ksK0JBQThCO0VBQzlCLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLFdBQVU7RUFDVixZQUFXLEVBQ2Q7QUFFRDs7Ozs7O0VBTUksWUFBVztFQUNYLHVCQUFzQjtFQUN0QixpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixjQUFhLEVBQ2hCO0FBRUQ7Ozs7OztFQVFJLDBDQUF5QztFQUN6Qyx1QkFBc0IsRUFDekI7QUFFRDtFQUNJLGNBQWE7RUFDYixnQkFBZTtFQUNmLGFBQVksRUFDZjtBQUVEO0VBQ0ksZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixjQUFhO0VBQ2IsZ0JBQWUsRUFDbEI7QUFFRDtFQUNJLG9CQUE0QjtFQUc1Qiw4Q0FBNkMsRUFDaEQ7QUFFRDtFQUNJLCtDQUE4QyxFQUNqRDtBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCO0FBRUQ7O0VBRUksV0FBVTtFQUNWLHVCQUFzQixFQUN6QjtBQUVEO0VBQ0ksWUFBVyxFQUNkO0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7QUFFRDtFQUNJLFlBQVcsRUFDZDtBQUVEO0VBQ0ksWUFBVyxFQUNkO0FBRUQ7RUFDSSxXQUFVLEVBQ2I7QUFDRDtFQUNFLGVBQWMsRUFDZjtBQUNEO0VBQ0Usb0JBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLWZvcm0gZGVzaWduXHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDMwMCw2MDAsNDAwaXRhbGljKTtcclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtby1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICBmb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5zZWxlY3QsXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJ0ZWxcIl0sXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuI2NvbnRhY3QgdGV4dGFyZWEsXHJcbiNjb250YWN0IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIGZvbnQ6IDQwMCAxMnB4LzE2cHggXCJSb2JvdG9cIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2NvbnRhY3Qge1xyXG4gICAgYmFja2dyb3VuZDogI0Y5RjlGOTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBtYXJnaW46IDEwMHB4IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxufVxyXG5cclxuI2NvbnRhY3QgaDMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI2NvbnRhY3QgaDQge1xyXG4gICAgbWFyZ2luOiA1cHggMCAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBib3JkZXI6IG1lZGl1bSBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5zZWxlY3QsXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJ0ZWxcIl0sXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuI2NvbnRhY3QgdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgIG1hcmdpbjogMCAwIDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnNlbGVjdCxcclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInRleHRcIl06aG92ZXIsXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJlbWFpbFwiXTpob3ZlcixcclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInRlbFwiXTpob3ZlcixcclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmhvdmVyLFxyXG4jY29udGFjdCB0ZXh0YXJlYTpob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxufVxyXG5cclxuI2NvbnRhY3QgdGV4dGFyZWEge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuI2NvbnRhY3QgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBtYXJnaW46IDAgMCA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4jY29udGFjdCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzIsIDcyLCAyMzMpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2NvbnRhY3QgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jY29udGFjdCBpbnB1dDpmb2N1cyxcclxuI2NvbnRhY3QgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzg4ODtcclxufVxyXG5cclxuOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbn1cclxuXHJcbjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzg4ODtcclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzg4ODtcclxufVxyXG5cclxuLmVycm9ycyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5zdWNjZXNze1xyXG4gIGNvbG9yOiAjMDI4OTExO1xyXG59XHJcbiNtc2d7XHJcbiAgbWFyZ2luLWJvdHRvbToxMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/login/login.service */ "./src/app/shared/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.loginModel = {
            email: '',
            password: '',
        };
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (form) {
        var _this = this;
        this.loginService.loginClient(form.value).subscribe(function (res) {
            _this.loginService.setToken(res['token']);
            _this.router.navigateByUrl('/doctor-list');
        }, function (err) {
            _this.loginService.loginDoctor(form.value).subscribe(function (res) {
                _this.loginService.setToken(res['token']);
                _this.router.navigateByUrl('/doctor-list');
            }, function (err) {
                _this.serverErrorMessages = err.error.message;
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")],
            providers: [_shared_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]]
        }),
        __metadata("design:paramtypes", [_shared_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mainscreen/mainscreen.component.html":
/*!******************************************************!*\
  !*** ./src/app/mainscreen/mainscreen.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n\n    <span fxFlex=\"100\" class=\"main_heading\" style=\"color:white;text-align:center;margin-bottom:-10vh\">\n\n    MAKE MEDICAL APPOINTMENT ONLINE TODAY!!\n\n  </span>\n    <form action=\"\" method=\"get\" fxFlex=\"70\" fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top: 20vh;\">\n        <select name=\"select\" id=\"location\" fxFlex=\"20\">\n        <option value=\"\">Location</option>\n        <option *ngFor=\"let location of locations\" value=\"{{ location }}\">{{ location }}</option>\n      </select>\n        <input type=\"text\" name=\"search form\" id=\"search_form\" fxFlex=\"60\" placeholder=\"search doctor, speciality or location\">\n        <button [routerLink]=\"['/doctor-list']\" routerLinkActive=\"router-link-active\" mat-raised-button color=\"primary\" fxFlex=\"20\" class=\"search_btn\" type=\"submit\">search</button>\n    </form>\n    <span fxFlex=\"100\" style=\"text-align: center;letter-spacing: 3px;margin-top:20px;color: white;\">\n    Search Doctor, Book Appointment,  Get Help\n  </span>\n\n</div>\n<app-section2></app-section2>\n"

/***/ }),

/***/ "./src/app/mainscreen/mainscreen.component.scss":
/*!******************************************************!*\
  !*** ./src/app/mainscreen/mainscreen.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search_form {\n  height: 3em;\n  padding-left: 1em;\n  font-family: 'Roboto','Sans serif';\n  font-size: 105%;\n  border: none;\n  outline: none;\n  border-radius: 1px;\n  box-shadow: 0px 3px 6px rgba(92, 91, 91, 0.412); }\n\n#search_form::-webkit-input-placeholder {\n  color: gray; }\n\n#search_form::-moz-placeholder {\n  color: gray; }\n\n#search_form::-ms-input-placeholder {\n  color: gray; }\n\n#search_form::placeholder {\n  color: gray; }\n\n#location {\n  height: 3em;\n  font-size: 105%;\n  box-shadow: 0 3px 6px rgba(48, 47, 47, 0.421);\n  outline: none; }\n\n.search_btn {\n  height: 3.5em;\n  border-radius: 0px;\n  padding-top: 4px; }\n\n.main {\n  background-image: url('heart-3405559_1920.jpg');\n  background-repeat: no-repeat;\n  background-blend-mode: darken;\n  height: 350px; }\n\n.main_heading {\n  font-size: 160%;\n  font-weight: lighter; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnNjcmVlbi9DOlxcVXNlcnNcXExldmlzXFxEZXNrdG9wXFxEZXNtb25kXFxNRUFOU3RhY2tcXERvY3RvTGliXFxXZWJBcHAvc3JjXFxhcHBcXG1haW5zY3JlZW5cXG1haW5zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLG1DQUFrQztFQUNsQyxnQkFBZTtFQUNmLGFBQVk7RUFDWixjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGdEQUE0QyxFQUMvQzs7QUFDRDtFQUNJLFlBQVcsRUFFZDs7QUFIRDtFQUNJLFlBQVcsRUFFZDs7QUFIRDtFQUNJLFlBQVcsRUFFZDs7QUFIRDtFQUNJLFlBQVcsRUFFZDs7QUFDRDtFQUNJLFlBQVc7RUFDWCxnQkFBZTtFQUNmLDhDQUEwQztFQUMxQyxjQUFhLEVBQ2hCOztBQUNEO0VBQ0ksY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxnREFBMEQ7RUFDMUQsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM3QixjQUFhLEVBQ2hCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixxQkFBb0IsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9tYWluc2NyZWVuL21haW5zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoX2Zvcm17XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCdTYW5zIHNlcmlmJztcclxuICAgIGZvbnQtc2l6ZTogMTA1JTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKCRjb2xvcjogIzVjNWI1YiwgJGFscGhhOiAuNDEyKTtcclxufVxyXG4jc2VhcmNoX2Zvcm06OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6IGdyYXk7XHJcblxyXG59XHJcbiNsb2NhdGlvbntcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgZm9udC1zaXplOiAxMDUlO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoJGNvbG9yOiAjMzAyZjJmLCAkYWxwaGE6IC40MjEpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uc2VhcmNoX2J0bntcclxuICAgIGhlaWdodDogMy41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG59XHJcbi5tYWlue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9oZWFydC0zNDA1NTU5XzE5MjAuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbn1cclxuLm1haW5faGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMTYwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/mainscreen/mainscreen.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mainscreen/mainscreen.component.ts ***!
  \****************************************************/
/*! exports provided: MainscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainscreenComponent", function() { return MainscreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainscreenComponent = /** @class */ (function () {
    function MainscreenComponent() {
        this.locations = ['Limbe', 'Buea', 'Bamenda', 'Kumba', 'Douala', 'Yaounde'];
    }
    MainscreenComponent.prototype.ngOnInit = function () {
    };
    MainscreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainscreen',
            template: __webpack_require__(/*! ./mainscreen.component.html */ "./src/app/mainscreen/mainscreen.component.html"),
            styles: [__webpack_require__(/*! ./mainscreen.component.scss */ "./src/app/mainscreen/mainscreen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainscreenComponent);
    return MainscreenComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: "\n    <h1 style=\"margin:auto;\">\n       PAGE NOT FOUND!!!\n    </h1>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/register/client/client.component.html":
/*!*******************************************************!*\
  !*** ./src/app/register/client/client.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form #clientForm=\"ngForm\" (ngSubmit)=\"clientForm.valied && registerClient(clientForm)\" id=\"contact\">\n        <h3>CLIENT REGISTRATION FORM</h3>\n        <h4>As Client</h4>\n        <div id=\"msg\">\n            <label class=\"success\" *ngIf=\"showSuccessMessage\">account successfully saved.</label>\n            <label class=\"errors\" *ngIf=\"serverErrorMessages\">{{serverErrorMessages}}</label>\n        </div>\n        <fieldset>\n            <input #name=\"ngModel\" [(ngModel)]=\"clientService.aClient.name\" name=\"name\" placeholder=\"Your name\" type=\"text\" tabindex=\"1\" required autofocus minlength=\"4\" autocomplete=\"off\">\n            <div *ngIf=\"clientForm.submitted && !name.valid\">\n                <h6 class=\"errors\" *ngIf=\"name.errors.required\">Your name is required</h6>\n                <h6 class=\"errors\" *ngIf=\"name.errors.minlength\">Name must be more than 4 characters</h6>\n            </div>\n        </fieldset>\n        <fieldset>\n            <input #email=\"ngModel\" [(ngModel)]=\"clientService.aClient.email\" name=\"email\" placeholder=\"Your Email Address\" type=\"email\" tabindex=\"2\" required [pattern]=\"emailRegex\" autocomplete=\"off\">\n            <div *ngIf=\"clientForm.submitted && !email.valid\">\n                <h6 class=\"errors\" *ngIf=\"email.errors.required\">Your email is required</h6>\n                <h6 class=\"errors\" *ngIf=\"email.errors.Pattern\">Invalid email</h6>\n            </div>\n        </fieldset>\n        <fieldset>\n            <input #tel=\"ngModel\" [(ngModel)]=\"clientService.aClient.tel\" name=\"tel\" placeholder=\"Your Phone Number\" type=\"tel\" tabindex=\"3\" required autocomplete=\"off\">\n            <div *ngIf=\"clientForm.submitted && !tel.valid\">\n                <h6 class=\"errors\" *ngIf=\"tel.errors.required\">Your tel is required</h6>\n            </div>\n        </fieldset>\n        <fieldset>\n            <input #password=\"ngModel\" [(ngModel)]=\"clientService.aClient.password\" name=\"password\" placeholder=\"Your Password\" type=\"password\" tabindex=\"4\" required minlength=\"5\" autocomplete=\"off\">\n            <div *ngIf=\"clientForm.submitted && !name.valid\">\n                <h6 class=\"errors\" *ngIf=\"password.errors.required\">Your password is required</h6>\n                <h6 class=\"errors\" *ngIf=\"password.errors.minlength\">Password must be more than 4 characters</h6>\n            </div>\n        </fieldset>\n        <fieldset>\n            <button name=\"submit\" type=\"submit\" id=\"contact-submit\" data-submit=\"...Sending\">Register</button>\n        </fieldset>\n        <p class=\"copyright\">Register as <a [routerLink]=\"['/doctor-registration']\" routerLinkActive=\"router-link-active\" title=\"Colorlib\">Doctor</a></p>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/register/client/client.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/register/client/client.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);\n.main {\n  margin-top: 3%;\n  margin-bottom: 3%; }\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -o-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  text-rendering: optimizeLegibility; }\nbody {\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  font-weight: 100;\n  font-size: 12px;\n  line-height: 30px;\n  color: #777;\n  background: #4CAF50; }\n.container {\n  max-width: 400px;\n  width: 100%;\n  margin: 0 auto;\n  position: relative; }\n#contact input[type=\"text\"],\n#contact input[type=\"email\"],\n#contact input[type=\"tel\"],\n#contact input[type=\"password\"],\n#contact textarea,\n#contact button[type=\"submit\"] {\n  font: 400 12px/16px \"Roboto\", Helvetica, Arial, sans-serif; }\n#contact {\n  background: #F9F9F9;\n  padding: 25px;\n  margin: 100px 0;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); }\n#contact h3 {\n  display: block;\n  font-size: 30px;\n  font-weight: 300;\n  margin-bottom: 10px; }\n#contact h4 {\n  margin: 5px 0 15px;\n  display: block;\n  font-size: 13px;\n  font-weight: 400; }\nfieldset {\n  border: medium none !important;\n  margin: 0 0 10px;\n  min-width: 100%;\n  padding: 0;\n  width: 100%; }\n#contact input[type=\"text\"],\n#contact input[type=\"email\"],\n#contact input[type=\"tel\"],\n#contact input[type=\"password\"],\n#contact textarea {\n  width: 100%;\n  border: 1px solid #ccc;\n  background: #FFF;\n  margin: 0 0 5px;\n  padding: 10px; }\n#contact input[type=\"text\"]:hover,\n#contact input[type=\"email\"]:hover,\n#contact input[type=\"tel\"]:hover,\n#contact input[type=\"password\"]:hover,\n#contact textarea:hover {\n  transition: border-color 0.3s ease-in-out;\n  border: 1px solid #aaa; }\n#contact textarea {\n  height: 100px;\n  max-width: 100%;\n  resize: none; }\n#contact button[type=\"submit\"] {\n  cursor: pointer;\n  width: 100%;\n  border: none;\n  background: blue;\n  color: #FFF;\n  margin: 0 0 5px;\n  padding: 10px;\n  font-size: 15px; }\n#contact button[type=\"submit\"]:hover {\n  background: #4848e9;\n  transition: background-color 0.3s ease-in-out; }\n#contact button[type=\"submit\"]:active {\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5); }\n.copyright {\n  text-align: center; }\n#contact input:focus,\n#contact textarea:focus {\n  outline: 0;\n  border: 1px solid #aaa; }\n::-webkit-input-placeholder {\n  color: #888; }\n:-moz-placeholder {\n  color: #888; }\n::-moz-placeholder {\n  color: #888; }\n:-ms-input-placeholder {\n  color: #888; }\n.errors {\n  color: red; }\n.success {\n  color: #028911; }\n#msg {\n  margin-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvY2xpZW50L0M6XFxVc2Vyc1xcTGV2aXNcXERlc2t0b3BcXERlc21vbmRcXE1FQU5TdGFja1xcRG9jdG9MaWJcXFdlYkFwcC9zcmNcXGFwcFxccmVnaXN0ZXJcXGNsaWVudFxcY2xpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLGtGQUFZO0FBTlo7RUFDSSxlQUFjO0VBQ2Qsa0JBQWlCLEVBQ3BCO0FBSUQ7RUFDSSxVQUFTO0VBQ1QsV0FBVTtFQUNWLHVCQUFzQjtFQUN0QiwrQkFBOEI7RUFDOUIsNEJBQTJCO0VBQzNCLG9DQUFtQztFQUNuQyxpQ0FBZ0M7RUFDaEMsK0JBQThCO0VBQzlCLDRCQUEyQjtFQUMzQixtQ0FBa0MsRUFDckM7QUFFRDtFQUNJLG9EQUFtRDtFQUNuRCxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsWUFBVztFQUNYLG9CQUFtQixFQUN0QjtBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxlQUFjO0VBQ2QsbUJBQWtCLEVBQ3JCO0FBRUQ7Ozs7OztFQU1JLDJEQUEwRCxFQUM3RDtBQUVEO0VBQ0ksb0JBQW1CO0VBQ25CLGNBQWE7RUFDYixnQkFBZTtFQUNmLDJFQUEwRSxFQUM3RTtBQUVEO0VBQ0ksZUFBYztFQUNkLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUN0QjtBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjtBQUVEO0VBQ0ksK0JBQThCO0VBQzlCLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLFdBQVU7RUFDVixZQUFXLEVBQ2Q7QUFFRDs7Ozs7RUFLSSxZQUFXO0VBQ1gsdUJBQXNCO0VBQ3RCLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGNBQWEsRUFDaEI7QUFFRDs7Ozs7RUFPSSwwQ0FBeUM7RUFDekMsdUJBQXNCLEVBQ3pCO0FBRUQ7RUFDSSxjQUFhO0VBQ2IsZ0JBQWU7RUFDZixhQUFZLEVBQ2Y7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLGdCQUFlLEVBQ2xCO0FBRUQ7RUFDSSxvQkFBNEI7RUFHNUIsOENBQTZDLEVBQ2hEO0FBRUQ7RUFDSSwrQ0FBOEMsRUFDakQ7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjtBQUVEOztFQUVJLFdBQVU7RUFDVix1QkFBc0IsRUFDekI7QUFFRDtFQUNJLFlBQVcsRUFDZDtBQUVEO0VBQ0ksWUFBVyxFQUNkO0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7QUFFRDtFQUNJLFlBQVcsRUFDZDtBQUVEO0VBQ0ksV0FBVSxFQUNiO0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7QUFDRDtFQUNFLG9CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL2NsaWVudC9jbGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLWZvcm0gZGVzaWduXHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDMwMCw2MDAsNDAwaXRhbGljKTtcclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtby1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICBmb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGVsXCJdLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbiNjb250YWN0IHRleHRhcmVhLFxyXG4jY29udGFjdCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBmb250OiA0MDAgMTJweC8xNnB4IFwiUm9ib3RvXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNjb250YWN0IHtcclxuICAgIGJhY2tncm91bmQ6ICNGOUY5Rjk7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgbWFyZ2luOiAxMDBweCAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbn1cclxuXHJcbiNjb250YWN0IGgzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiNjb250YWN0IGg0IHtcclxuICAgIG1hcmdpbjogNXB4IDAgMTVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiBtZWRpdW0gbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInRlbFwiXSxcclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4jY29udGFjdCB0ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInRleHRcIl06aG92ZXIsXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJlbWFpbFwiXTpob3ZlcixcclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInRlbFwiXTpob3ZlcixcclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmhvdmVyLFxyXG4jY29udGFjdCB0ZXh0YXJlYTpob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxufVxyXG5cclxuI2NvbnRhY3QgdGV4dGFyZWEge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuI2NvbnRhY3QgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBtYXJnaW46IDAgMCA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4jY29udGFjdCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzIsIDcyLCAyMzMpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2NvbnRhY3QgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jY29udGFjdCBpbnB1dDpmb2N1cyxcclxuI2NvbnRhY3QgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzg4ODtcclxufVxyXG5cclxuOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbn1cclxuXHJcbjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzg4ODtcclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzg4ODtcclxufVxyXG5cclxuLmVycm9ycyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5zdWNjZXNze1xyXG4gIGNvbG9yOiAjMDI4OTExO1xyXG59XHJcbiNtc2d7XHJcbiAgbWFyZ2luLWJvdHRvbToxMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/register/client/client.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/client/client.component.ts ***!
  \*****************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _shared_patient_patient_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/patient/patient.service */ "./src/app/shared/patient/patient.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientComponent = /** @class */ (function () {
    function ClientComponent(clientService) {
        this.clientService = clientService;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.showSuccessMessage = false;
    }
    ClientComponent.prototype.ngOnInit = function () {
    };
    ClientComponent.prototype.registerClient = function (form) {
        var _this = this;
        this.clientService.postClient(form.value).subscribe(function (res) {
            _this.showSuccessMessage = true;
            setTimeout(function () { _this.showSuccessMessage = false; }, 4000);
            _this.reset_form(form);
        }, function (err) {
            if (err.status == 422) {
                _this.serverErrorMessages = err.error.join('<br/>');
            }
            else {
                _this.serverErrorMessages = 'Something went wrong, plese contact the admin and check your connection';
            }
        });
    };
    ClientComponent.prototype.reset_form = function (form) {
        // reset model
        this.clientService.aClient = {
            name: '',
            email: '',
            tel: '',
            password: ''
        };
        form.resetForm();
        this.serverErrorMessages = '';
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/register/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.scss */ "./src/app/register/client/client.component.scss")],
            providers: [_shared_patient_patient_service__WEBPACK_IMPORTED_MODULE_0__["PatientService"]]
        }),
        __metadata("design:paramtypes", [_shared_patient_patient_service__WEBPACK_IMPORTED_MODULE_0__["PatientService"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/register/doctor/doctor.component.html":
/*!*******************************************************!*\
  !*** ./src/app/register/doctor/doctor.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form #doctorForm=\"ngForm\" (ngSubmit)=\"doctorForm.valid && registerDoctor(doctorForm)\" id=\"contact\">\n        <h3>Doctor REGISTRATION FORM</h3>\n        <h4>As Doctor</h4>\n        <div id=\"msg\">\n            <label class=\"success\" *ngIf=\"showSuccessMessage\">account successfully saved.</label>\n            <label class=\"errors\" *ngIf=\"serverErrorMessages\">{{serverErrorMessages}}</label>\n        </div>\n        <fieldset>\n            <input #name=\"ngModel\" [(ngModel)]=\"doctorService.aDoctor.name\" name=\"name\" placeholder=\"Your name\" type=\"text\" tabindex=\"1\" required autofocus minlength=\"4\" autocomplete=\"off\">\n            <div *ngIf=\"doctorForm.submitted && !name.valid\">\n                <h6 class=\"errors\" *ngIf=\"name.errors.required\">Your name is required</h6>\n                <h6 class=\"errors\" *ngIf=\"name.errors.minlength\">Must be more than 4 characters</h6>\n            </div>\n        </fieldset>\n        <fieldset>\n            <input #email=\"ngModel\" [(ngModel)]=\"doctorService.aDoctor.email\" name=\"email\" placeholder=\"Your Email Address\" type=\"email\" tabindex=\"2\" required [pattern]=\"emailRegex\" autocomplete=\"off\">\n            <div *ngIf=\"doctorForm.submitted && !email.valid\">\n                <h6 class=\"errors\" *ngIf=\"email.errors.required\">Your email is required</h6>\n                <h6 class=\"errors\" *ngIf=\"email.errors.pattern\">Invalid email address</h6>\n            </div>\n        </fieldset>\n        <fieldset>\n            <input #tel=\"ngModel\" [(ngModel)]=\"doctorService.aDoctor.tel\" name=\"tel\" placeholder=\"Your Phone Number\" type=\"number\" tabindex=\"3\" required minlength=\"9\" autocomplete=\"off\">\n            <div *ngIf=\"doctorForm.submitted && !tel.valid\">\n                <h6 class=\"errors\" *ngIf=\"tel.errors.required\">Your phone number is required</h6>\n                <h6 class=\"errors\" *ngIf=\"tel.errors.minlength\">Must be more than 4 characters</h6>\n            </div>\n        </fieldset>\n        <fieldset>\n            <input #specialty=\"ngModel\" [(ngModel)]=\"doctorService.aDoctor.specialty\" name=\"specialty\" placeholder=\"Your Specialty\" type=\"text\" tabindex=\"3\" required autocomplete=\"off\">\n            <div *ngIf=\"doctorForm.submitted && !specialty.valid\">\n                <h6 class=\"errors\" *ngIf=\"specialty.errors.required\">Your phone number is required</h6>\n            </div>\n        </fieldset>\n        <fieldset>\n            <input #consultation_fee=\"ngModel\" [(ngModel)]=\"doctorService.aDoctor.consultation_fee\" name=\"consultation_fee\" placeholder=\"Your Consultation Fee\" type=\"number\" tabindex=\"4\" required autocomplete=\"off\">\n            <div *ngIf=\"doctorForm.submitted && !consultation_fee.valid\">\n                <h6 class=\"errors\" *ngIf=\"consultation_fee.errors.required\">Consultation fee number is required</h6>\n            </div>\n        </fieldset>\n        <fieldset>\n            <input #location=\"ngModel\" [(ngModel)]=\"doctorService.aDoctor.location\" name=\"location\" placeholder=\"Your location\" type=\"text\" tabindex=\"5\" required autocomplete=\"off\">\n            <div *ngIf=\"doctorForm.submitted && !location.valid\">\n                <h6 class=\"errors\" *ngIf=\"location.errors.required\">Your location is required</h6>\n            </div>\n        </fieldset>\n        <fieldset>\n            <input #password=\"ngModel\" [(ngModel)]=\"doctorService.aDoctor.password\" name=\"password\" placeholder=\"Your Password\" type=\"password\" tabindex=\"7\" required minlength=\"5\" autocomplete=\"off\">\n            <div *ngIf=\"doctorForm.submitted && !password.valid\">\n                <h6 class=\"errors\" *ngIf=\"password.errors.required\">Your password is required</h6>\n                <h6 class=\"errors\" *ngIf=\"password.errors.minlength\">Must be more than 5 characters</h6>\n            </div>\n        </fieldset>\n        <fieldset>\n            <textarea #biography=\"ngModel\" [(ngModel)]=\"doctorService.aDoctor.biography\" name=\"biography\" placeholder=\"Enter your biography here\" tabindex=\"8\" required>\n                </textarea>\n            <div *ngIf=\"doctorForm.submitted && !biography.valid\">\n                <h6 class=\"errors\" *ngIf=\"biography.errors.required\">Your biography is required</h6>\n            </div>\n        </fieldset>\n        <fieldset>\n            <button name=\"submit\" type=\"submit\" id=\"contact-submit\" data-submit=\"...Sending\">Register</button>\n        </fieldset>\n        <p class=\"copyright\">Register as <a [routerLink]=\"['/client-registration']\" routerLinkActive=\"router-link-active\" title=\"Colorlib\">Client</a></p>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/register/doctor/doctor.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/register/doctor/doctor.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);\n.main {\n  margin-top: 3%; }\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -o-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  text-rendering: optimizeLegibility; }\nbody {\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  font-weight: 100;\n  font-size: 12px;\n  line-height: 30px;\n  color: #777;\n  background: #4CAF50; }\n.container {\n  max-width: 400px;\n  width: 100%;\n  margin: 0 auto;\n  position: relative; }\n#contact input[type=\"textarea\"],\n#contact input[type=\"file\"],\n#contact input[type=\"text\"],\n#contact input[type=\"email\"],\n#contact input[type=\"number\"],\n#contact input[type=\"password\"],\n#contact textarea,\n#contact button[type=\"submit\"] {\n  font: 400 12px/16px \"Roboto\", Helvetica, Arial, sans-serif; }\n#contact {\n  background: #F9F9F9;\n  padding: 25px;\n  margin: 100px 0;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); }\n#contact h3 {\n  display: block;\n  font-size: 30px;\n  font-weight: 300;\n  margin-bottom: 10px; }\n#contact h4 {\n  margin: 5px 0 15px;\n  display: block;\n  font-size: 13px;\n  font-weight: 400; }\nfieldset {\n  border: medium none !important;\n  margin: 0 0 10px;\n  min-width: 100%;\n  padding: 0;\n  width: 100%; }\n#contact input[type=\"textarea\"],\n#contact input[type=\"file\"],\n#contact input[type=\"text\"],\n#contact input[type=\"email\"],\n#contact input[type=\"number\"],\n#contact input[type=\"password\"],\n#contact textarea {\n  width: 100%;\n  border: 1px solid #ccc;\n  background: #FFF;\n  margin: 0 0 5px;\n  padding: 10px; }\n#contact input[type=\"textarea\"]:hover,\n#contact input[type=\"file\"]:hover,\n#contact input[type=\"text\"]:hover,\n#contact input[type=\"email\"]:hover,\n#contact input[type=\"number\"]:hover,\n#contact input[type=\"password\"]:hover,\n#contact textarea:hover {\n  transition: border-color 0.3s ease-in-out;\n  border: 1px solid #aaa; }\n#contact textarea {\n  height: 100px;\n  max-width: 100%;\n  resize: none; }\n#contact button[type=\"submit\"] {\n  cursor: pointer;\n  width: 100%;\n  border: none;\n  background: blue;\n  color: #FFF;\n  margin: 0 0 5px;\n  padding: 10px;\n  font-size: 15px; }\n#contact button[type=\"submit\"]:hover {\n  background: #4848e9;\n  transition: background-color 0.3s ease-in-out; }\n#contact button[type=\"submit\"]:active {\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5); }\n.copyright {\n  text-align: center; }\n#contact input:focus,\n#contact textarea:focus {\n  outline: 0;\n  border: 1px solid #aaa; }\n::-webkit-input-placeholder {\n  color: #888; }\n:-moz-placeholder {\n  color: #888; }\n::-moz-placeholder {\n  color: #888; }\n:-ms-input-placeholder {\n  color: #888; }\n.errors {\n  color: red; }\n.success {\n  color: #028911; }\n#msg {\n  margin-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvZG9jdG9yL0M6XFxVc2Vyc1xcTGV2aXNcXERlc2t0b3BcXERlc21vbmRcXE1FQU5TdGFja1xcRG9jdG9MaWJcXFdlYkFwcC9zcmNcXGFwcFxccmVnaXN0ZXJcXGRvY3RvclxcZG9jdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLGtGQUFZO0FBTFo7RUFDSSxlQUFjLEVBQ2pCO0FBSUQ7RUFDSSxVQUFTO0VBQ1QsV0FBVTtFQUNWLHVCQUFzQjtFQUN0QiwrQkFBOEI7RUFDOUIsNEJBQTJCO0VBQzNCLG9DQUFtQztFQUNuQyxpQ0FBZ0M7RUFDaEMsK0JBQThCO0VBQzlCLDRCQUEyQjtFQUMzQixtQ0FBa0MsRUFDckM7QUFFRDtFQUNJLG9EQUFtRDtFQUNuRCxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsWUFBVztFQUNYLG9CQUFtQixFQUN0QjtBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxlQUFjO0VBQ2QsbUJBQWtCLEVBQ3JCO0FBRUQ7Ozs7Ozs7O0VBUUksMkRBQTBELEVBQzdEO0FBRUQ7RUFDSSxvQkFBbUI7RUFDbkIsY0FBYTtFQUNiLGdCQUFlO0VBQ2YsMkVBQTBFLEVBQzdFO0FBRUQ7RUFDSSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3RCO0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CO0FBRUQ7RUFDSSwrQkFBOEI7RUFDOUIsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsV0FBVTtFQUNWLFlBQVcsRUFDZDtBQUVEOzs7Ozs7O0VBT0ksWUFBVztFQUNYLHVCQUFzQjtFQUN0QixpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixjQUFhLEVBQ2hCO0FBQ0Q7Ozs7Ozs7RUFTSSwwQ0FBeUM7RUFDekMsdUJBQXNCLEVBQ3pCO0FBRUQ7RUFDSSxjQUFhO0VBQ2IsZ0JBQWU7RUFDZixhQUFZLEVBQ2Y7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLGdCQUFlLEVBQ2xCO0FBRUQ7RUFDSSxvQkFBNEI7RUFHNUIsOENBQTZDLEVBQ2hEO0FBRUQ7RUFDSSwrQ0FBOEMsRUFDakQ7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjtBQUVEOztFQUVJLFdBQVU7RUFDVix1QkFBc0IsRUFDekI7QUFFRDtFQUNJLFlBQVcsRUFDZDtBQUVEO0VBQ0ksWUFBVyxFQUNkO0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7QUFFRDtFQUNJLFlBQVcsRUFDZDtBQUVEO0VBQ0ksV0FBVSxFQUNiO0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7QUFDRDtFQUNFLG9CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL2RvY3Rvci9kb2N0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLWZvcm0gZGVzaWduXHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDMwMCw2MDAsNDAwaXRhbGljKTtcclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtby1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICBmb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGV4dGFyZWFcIl0sXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJmaWxlXCJdLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbiNjb250YWN0IHRleHRhcmVhLFxyXG4jY29udGFjdCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBmb250OiA0MDAgMTJweC8xNnB4IFwiUm9ib3RvXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNjb250YWN0IHtcclxuICAgIGJhY2tncm91bmQ6ICNGOUY5Rjk7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgbWFyZ2luOiAxMDBweCAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbn1cclxuXHJcbiNjb250YWN0IGgzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiNjb250YWN0IGg0IHtcclxuICAgIG1hcmdpbjogNXB4IDAgMTVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiBtZWRpdW0gbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInRleHRhcmVhXCJdLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwiZmlsZVwiXSxcclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4jY29udGFjdCB0ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGV4dGFyZWFcIl06aG92ZXIsXHJcbiNjb250YWN0IGlucHV0W3R5cGU9XCJmaWxlXCJdOmhvdmVyLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGV4dFwiXTpob3ZlcixcclxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmhvdmVyLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOmhvdmVyLFxyXG4jY29udGFjdCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06aG92ZXIsXHJcbiNjb250YWN0IHRleHRhcmVhOmhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG59XHJcblxyXG4jY29udGFjdCB0ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4jY29udGFjdCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIG1hcmdpbjogMCAwIDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbiNjb250YWN0IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig3MiwgNzIsIDIzMyk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jY29udGFjdCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXTphY3RpdmUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmNvcHlyaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb250YWN0IGlucHV0OmZvY3VzLFxyXG4jY29udGFjdCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxufVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjODg4O1xyXG59XHJcblxyXG46LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzg4ODtcclxufVxyXG5cclxuOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjODg4O1xyXG59XHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjODg4O1xyXG59XHJcblxyXG4uZXJyb3JzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLnN1Y2Nlc3N7XHJcbiAgY29sb3I6ICMwMjg5MTE7XHJcbn1cclxuI21zZ3tcclxuICBtYXJnaW4tYm90dG9tOjEycHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/doctor/doctor.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/doctor/doctor.component.ts ***!
  \*****************************************************/
/*! exports provided: DoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorComponent", function() { return DoctorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_doctor_doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/doctor/doctor.service */ "./src/app/shared/doctor/doctor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoctorComponent = /** @class */ (function () {
    function DoctorComponent(doctorService) {
        this.doctorService = doctorService;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.showSuccessMessage = false;
    }
    DoctorComponent.prototype.ngOnInit = function () {
    };
    DoctorComponent.prototype.registerDoctor = function (form) {
        var _this = this;
        this.doctorService.postDoctor(form.value).subscribe(function (res) {
            _this.showSuccessMessage = true;
            setTimeout(function () { _this.showSuccessMessage = false; }, 4000);
            _this.reset_form(form);
        }, function (err) {
            if (err.status == 422) {
                _this.serverErrorMessages = err.error.join('<br/>');
            }
            else {
                _this.serverErrorMessages = 'Something went wrong, plese contact the admin and check your connection';
            }
        });
    };
    DoctorComponent.prototype.reset_form = function (form) {
        // reset model
        this.doctorService.aDoctor = {
            name: '',
            email: '',
            tel: '',
            specialty: '',
            consultation_fee: 0,
            location: '',
            password: '',
            biography: ''
        };
        form.resetForm();
        this.serverErrorMessages = '';
    };
    DoctorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctor',
            template: __webpack_require__(/*! ./doctor.component.html */ "./src/app/register/doctor/doctor.component.html"),
            styles: [__webpack_require__(/*! ./doctor.component.scss */ "./src/app/register/doctor/doctor.component.scss")],
            providers: [_shared_doctor_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]]
        }),
        __metadata("design:paramtypes", [_shared_doctor_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]])
    ], DoctorComponent);
    return DoctorComponent;
}());



/***/ }),

/***/ "./src/app/section2/section2.component.html":
/*!**************************************************!*\
  !*** ./src/app/section2/section2.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n<span fxFlex=\"100\" style=\"text-align: center;\n font-family: 'Roboto';\n font-size: 150%;\n font-weight:lighter;\">Are You a Health Professional?</span>\n<span fxFlex=\"100\" style=\"text-align: center;font-size: 170%;font-weight: lighter;\n\">DISCOVER MAKING APPOINTMENT ONLINE AND EASE LIVES.</span>\n\n<div class=\"division-section\" fxFlex=\"100\" fxLayout=\"row \" fxLayoutAlign=\"center center\" fxLayoutGap=\"40px\">\n<mat-card fxFlex=\"20\" fxFlexAlign=\"center\">\n    <mat-card-header>\n        <mat-card-title></mat-card-title>\n    </mat-card-header>\n    <img matCardImage src=\"../../assets/create account.png\" style=\"width: 10em;margin-left: 15%;\">\n    <mat-card-content style=\"font-size: 155%;text-align:center;\">\n      create Account \n    </mat-card-content>\n</mat-card>\n\n<mat-card fxFlex=\"20\" fxFlexAlign=\"center\">\n    <mat-card-header>\n        <mat-card-title></mat-card-title>\n    </mat-card-header>\n    <img matCardImage src=\"../../assets/safe life.png\" style=\"width: 10em;margin-left: 15%;\">\n    <mat-card-content style=\"font-size: 155%;text-align:center;\">\n      save life \n    </mat-card-content>\n</mat-card>\n\n\n<mat-card fxFlex=\"20\" fxFlexAlign=\"center\">\n    <mat-card-header>\n        <mat-card-title></mat-card-title>\n    </mat-card-header>\n    <img matCardImage src=\"../../assets/health.jpg\" style=\"width: 10em;margin-left: 15%;\">\n    <mat-card-content style=\"font-size: 115%;text-align:center;\">\n      Peform regular checkups\n    </mat-card-content>\n</mat-card>\n\n\n<mat-card fxFlex=\"20\" fxFlexAlign=\"center\">\n    <mat-card-header>\n        <mat-card-title></mat-card-title>\n    </mat-card-header>\n    <img matCardImage src=\"../../assets/get paid.png\" style=\"width: 10em;margin-left: 15%;\">\n    <mat-card-content style=\"font-size: 155%;text-align:center;\">\n      save life \n    </mat-card-content>\n</mat-card>\n</div>\n\n<div class=\"get-started-section\" fxFlex=\"80\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n<a href=\"\" fxFlex=\"40\" mat-raised-button color=\"primary\">GET STARTED</a>\n</div>\n</div>\n\n<div class=\"section3\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <DIV class=\"section3-left\" fxFlex=\"60\" fxLayout=\"row wrap\" fxFlexOffset=\"40px\">\n     \n\n      <span fxFlex=\"100\"> 100% EFFICIENT,</span>\n      <span id=\"count\" fxFlex=\"100\"> RELIABLE AND</span> \n      <span fxFlex=\"100\"> TRUST WORTHY </span>\n  </DIV>\n  <DIV class=\"section3-right\" fxFlex=\"40\" fxLayout=\"row wrap\">\n      <span fxFlex=\"100\">Over</span>\n      <span id=\"count\" fxFlex=\"100\">1000</span> \n      <span fxFlex=\"100\">confirmed visitors monthly</span>\n  </DIV>\n</div>"

/***/ }),

/***/ "./src/app/section2/section2.component.scss":
/*!**************************************************!*\
  !*** ./src/app/section2/section2.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  margin-top: 40px; }\n\n.division-section {\n  margin-top: 30px; }\n\n.get-started-section {\n  margin-top: 30px; }\n\n.get-started-section a {\n  font-size: 130%;\n  font-weight: lighter;\n  padding-top: 12px;\n  height: 2.8em; }\n\n.section3 {\n  margin-top: 40px;\n  background-image: url('heart-3405559_1920.jpg');\n  height: 15em;\n  color: white; }\n\n.section3-left {\n  font-size: 140%;\n  font-weight: lighter; }\n\n.section3-right {\n  font-size: 200%;\n  font-weight: lighter; }\n\n#count {\n  font-size: 250%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbjIvQzpcXFVzZXJzXFxMZXZpc1xcRGVza3RvcFxcRGVzbW9uZFxcTUVBTlN0YWNrXFxEb2N0b0xpYlxcV2ViQXBwL3NyY1xcYXBwXFxzZWN0aW9uMlxcc2VjdGlvbjIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLHFCQUFvQjtFQUNwQixrQkFBaUI7RUFDakIsY0FDSixFQUFDOztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdEQUEwRDtFQUMxRCxhQUFZO0VBQ1osYUFBWSxFQUNmOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixxQkFBb0IsRUFDdkI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLHFCQUFvQixFQUN2Qjs7QUFDRDtFQUNJLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbjIvc2VjdGlvbjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuLmRpdmlzaW9uLXNlY3Rpb257XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5nZXQtc3RhcnRlZC1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5nZXQtc3RhcnRlZC1zZWN0aW9uIGF7XHJcbiAgICBmb250LXNpemU6IDEzMCU7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAyLjhlbVxyXG59XHJcbi5zZWN0aW9uM3tcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2hlYXJ0LTM0MDU1NTlfMTkyMC5qcGcpO1xyXG4gICAgaGVpZ2h0OiAxNWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zZWN0aW9uMy1sZWZ0e1xyXG4gICAgZm9udC1zaXplOiAxNDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuLnNlY3Rpb24zLXJpZ2h0e1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuI2NvdW50e1xyXG4gICAgZm9udC1zaXplOiAyNTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/section2/section2.component.ts":
/*!************************************************!*\
  !*** ./src/app/section2/section2.component.ts ***!
  \************************************************/
/*! exports provided: Section2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section2Component", function() { return Section2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Section2Component = /** @class */ (function () {
    function Section2Component() {
    }
    Section2Component.prototype.ngOnInit = function () {
    };
    Section2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section2',
            template: __webpack_require__(/*! ./section2.component.html */ "./src/app/section2/section2.component.html"),
            styles: [__webpack_require__(/*! ./section2.component.scss */ "./src/app/section2/section2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Section2Component);
    return Section2Component;
}());



/***/ }),

/***/ "./src/app/shared/doctor/doctor.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/doctor/doctor.service.ts ***!
  \*************************************************/
/*! exports provided: DoctorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorService", function() { return DoctorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import environment base a

var DoctorService = /** @class */ (function () {
    function DoctorService(http) {
        this.http = http;
        this.aDoctor = {
            name: '',
            email: '',
            tel: '',
            specialty: '',
            consultation_fee: 0,
            location: '',
            password: '',
            biography: ''
        };
    }
    DoctorService.prototype.postDoctor = function (doctor) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrlDoctors + '/register', doctor);
    };
    DoctorService.prototype.listDoctors = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrlDoctors + '/');
    };
    DoctorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DoctorService);
    return DoctorService;
}());



/***/ }),

/***/ "./src/app/shared/login/login.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/login/login.service.ts ***!
  \***********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.loginClient = function (authCredentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrlClients + '/login', authCredentials);
    };
    LoginService.prototype.loginDoctor = function (authCredentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrlDoctors + '/login', authCredentials);
    };
    LoginService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/shared/patient/patient.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/patient/patient.service.ts ***!
  \***************************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import environment file

var PatientService = /** @class */ (function () {
    function PatientService(http) {
        this.http = http;
        this.aClient = {
            name: '',
            email: '',
            tel: '',
            password: ''
        };
    }
    // post client to nodejsapi
    PatientService.prototype.postClient = function (client) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrlClients + '/register', client);
    };
    PatientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PatientService);
    return PatientService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: true,
    apiBaseUrl: '/api',
    apiBaseUrlClients: '/api/clients',
    apiBaseUrlDoctors: '/api/doctors',
    apiBaseUrlAppointments: '/api/appointments'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Levis\Desktop\Desmond\MEANStack\DoctoLib\WebApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map