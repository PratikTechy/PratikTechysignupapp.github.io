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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
        this.title = 'signup-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./thank-you/thank-you.component */ "./src/app/thank-you/thank-you.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_9__["ThankYouComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'sign-up', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
                    { path: 'thank-you', component: _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_9__["ThankYouComponent"] }
                ])
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.url = 'https://chatapi.edwisor.com';
    }
    AppService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('name', data.name)
            .set('email', data.email)
            .set('mobile', data.mobile)
            .set('apiKey', data.apiKey);
        return this.http.post(this.url + "/api/v1/users/signup", params);
    };
    AppService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(errorMessage);
    }; // END handleError
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\nh3{\n    line-height:1.5;\n    \n    }\n    .center{\n    margin:5rem auto;\n    }\n    .text-red{\n    color:#EE4F49;\n    }\n    .btn {\n      border-width: 2px;\n      padding: 10px 15px;\n    }\n    .field-size{\n    margin:0.8rem auto;\n    height:46px;\n    float:unset;\n    color:#ccc;\n    }\n    .header-img{\n    \n    width: 100%;  \n    margin:auto;\n    display: block;\n    max-height: 315px;\n    \n    }\n    @media only screen and (min-device-width: 320px) and (max-device-width: 568px){\n    \n    .header-img{\n    \n    width: 100%;  \n    margin:auto;\n    display: block;\n    max-height: 290px;\n    \n    }\n   \n    .navbar-mpos{\n    width:100%;\n    margin:auto;\n    margin-top:44px;\n    \n    }\n    .nav-item{\n    width:25%;\n    text-align:center;\n    }\n    .profile-info-pos{\n    margin-left:auto;\n    margin-right:auto;\n    margin-bottom:20%;\n    background-color:#fff;\n    padding-top:5%;\n    }\n    .post1{\n    border: 1px solid #ccc;\n    width:100%;\n    height:auto;\n    padding:20px;\n    margin:auto;\n    margin-top:20px;\n    margin-bottom:20px;\n    text-align:center;\n    background-color: #efefef;\n    }\n    .post2{\n    width:100%;\n    max-height:70%;\n    padding:20px;\n    border: 1px solid #ccc;\n    margin:auto;\n    margin-top:20px;\n    margin-bottom:20px;\n    text-align:center;\n    background-color: #efefef;\n    }\n    #fbFeedInfo{\n        width: 100%;\n        margin:auto;\n        \n        }\n    .picture {\n            width:100%;\n            min-height:300px;\n            background-repeat: no-repeat;\n            background-color: #fff;\n            background-size: cover;\n        \n        }\n    }\n    @media only screen and (min-device-width:768px){\n    .navbar-pos{\n    width:80%;\n    margin:auto;\n    margin-top:32px;\n    \n    }\n    .profile-info-pos{\n    width:80%;\n    margin-left:auto;\n    margin-right:auto;\n    margin-bottom:20%;\n    border: 1px solid #ccc;\n    background-color:#fff;\n    padding:5%;\n    }\n    .post1{\n    border: 1px solid #ccc;\n    width:500px;\n    padding: 20px;\n    margin:auto;\n    margin-top:10px;\n    margin-bottom:10px;\n    text-align:center;\n    background-color: #efefef;\n    }\n    .post2{\n    width:500px;\n    max-height:900px;\n    padding:20px;\n    border: 1px solid #ccc;\n    margin:auto;\n    margin-top:10px;\n    margin-bottom:10px;\n    text-align:center;\n    background-color: #efefef;\n    }\n    .picture {\n        width: 455px;\n        height: 360px;\n        background-repeat: no-repeat;\n        background-color: #dedede;\n        background-size: cover;\n    \n    }\n   \n    }\n    .nav-pos{\n    float:left;\n    margin:auto;\n    display: flex;\n    width:100%;\n    \n    }\n    .navbar{\n    min-height:0;\n    }\n    .nav-link{\n    font-size:16px;\n    font-weight:bold;\n    \n    }\n    .info-title{\n    margin-left:20px;\n    color:#90949c;\n    text-transform:uppercase;\n    }\n    .info{\n    margin-left:20px;\n    }\n    .info span {\n        display: table-cell;\n        position: relative;\n    }\n    .info .field-title {\n        width: 80px;\n        font-size: 16px;\n        font-weight:normal;\n        color:#A8AAB1;\n        line-height: 20px;\n        \n    }\n    .info .field-separator {\n        text-align: center;\n        width: 80px;\n    }\n    .info .field-value{\n    font-weight:bold;\n    font-size: 16px;\n    line-height: 20px;\n    word-wrap:break-word;\n    \n    }\n    .story {\n        font-size: 15px;\n        font-weight: bold;\n        text-align: left;\n    }\n    .likeCommentContainer {\n        padding: 10px 0px 0px;\n        height: 25px;\n    }\n    .likeBox {\n       float:left;\n       margin-right:4px;\n    }\n    .commentBox {\n       float: right;\n    }\n    .likes{\n    float:left;\n    }\n    .comments{\n    float:right;\n    }\n    .badge{\n    margin-left:3px;\n    }\n    #fbFeedInfo{\n    margin-top:40px;\n    }\n    #goBackBtn{\n    margin:auto;\n    margin-bottom:40px;\n    margin-top:40px;\n    text-align:center; \n    }\n    .btn-red-outline {\n        background-color: transparent;\n        border-color:#DA5554;\n        border-width: 2px;\n        box-shadow: none;\n    \n    }\n    .text-secondary {\n    \n        color: #7A7A7A;\n    }\n    "

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page1\" class=\"center \">\n\n\n  <div class=\"row center \">\n    <div id=\"bg-image\">\n      <img class=\"header-img\" src=\"../assets/bg-image.jpg\" alt=\"cover pic \">\n    </div>\n\n\n    <div class=\"text-center\">\n      <h2 class=\"text-red\">Real Estate Investing Information <br> That Matters to You.</h2>\n      <p class=\"text-secondary\">Limited to the San Francisco Bay Area-Join our BETA!</p>\n      <div class=\"text-red\">\n        <button id=\"goBackBtn\" (click)=\"signUp()\" class=\"btn btn-red-outline\">SIGN UP WITH LINKEDIN</button>\n        <p class=\"text-secondary\">SIGN IN</p>\n      </div>\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.signUp = function () {
        this.router.navigate(['sign-up']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\nh3{\n    line-height:1.5;\n    \n    }\n    .center{\n    margin-top: 2rem;\n    margin:5rem auto;\n    }\n    .text-red{\n    color:#EE4F49;\n    }\n    .btn {\n      border-width: 2px;\n      padding: 10px 15px;\n    }\n    #fbProfileBtn{\n    margin-right:1.5rem;\n    margin-bottom:1.5rem;\n    }\n    #fbFeedBtn{\n    min-width:160px;\n    }\n    .field-size{\n    margin:0.8rem auto;\n    height:46px;\n    float:unset;\n    color:#ccc;\n    }\n    .bg-img{\n    \n    width: 100%;  \n    margin:auto;\n    display: block;\n    max-height: 315px;\n    \n    }\n    .myProfilePic{\n    width:150px;\n    height:150px;\n    margin-top: -125px;\n    margin-left: 12%;\n    z-index:9;\n    position:absolute;\n    }\n    @media only screen and (min-device-width: 320px) and (max-device-width: 568px){\n    \n    .bg-img{\n    \n    width: 100%;  \n    margin:auto;\n    display: block;\n    max-height: 290px;\n    \n    }\n    .myProfilePic{\n    width:125px;\n    height:125px;\n    margin-top: -90px;\n    margin-left:35%;\n    z-index:9;\n    position:absolute;\n    }\n    .navbar-mpos{\n    width:100%;\n    margin:auto;\n    margin-top:44px;\n    \n    }\n    .nav-item{\n    width:25%;\n    text-align:center;\n    }\n    .profile-info-pos{\n    margin-left:auto;\n    margin-right:auto;\n    margin-bottom:20%;\n    background-color:#fff;\n    padding-top:5%;\n    }\n    .post1{\n    border: 1px solid #ccc;\n    width:100%;\n    height:auto;\n    padding:20px;\n    margin:auto;\n    margin-top:20px;\n    margin-bottom:20px;\n    text-align:center;\n    background-color: #efefef;\n    }\n    .post2{\n    width:100%;\n    max-height:70%;\n    padding:20px;\n    border: 1px solid #ccc;\n    margin:auto;\n    margin-top:20px;\n    margin-bottom:20px;\n    text-align:center;\n    background-color: #efefef;\n    }\n    #fbFeedInfo{\n        width: 100%;\n        margin:auto;\n        \n        }\n    .picture {\n            width:100%;\n            min-height:300px;\n            background-repeat: no-repeat;\n            background-color: #fff;\n            background-size: cover;\n        \n        }\n    }\n    @media only screen and (min-device-width:768px){\n    .navbar-pos{\n    width:80%;\n    margin:auto;\n    margin-top:32px;\n    \n    }\n    .profile-info-pos{\n    width:80%;\n    margin-left:auto;\n    margin-right:auto;\n    margin-bottom:20%;\n    border: 1px solid #ccc;\n    background-color:#fff;\n    padding:5%;\n    }\n    .post1{\n    border: 1px solid #ccc;\n    width:500px;\n    padding: 20px;\n    margin:auto;\n    margin-top:10px;\n    margin-bottom:10px;\n    text-align:center;\n    background-color: #efefef;\n    }\n    .post2{\n    width:500px;\n    max-height:900px;\n    padding:20px;\n    border: 1px solid #ccc;\n    margin:auto;\n    margin-top:10px;\n    margin-bottom:10px;\n    text-align:center;\n    background-color: #efefef;\n    }\n    .picture {\n        width: 455px;\n        height: 360px;\n        background-repeat: no-repeat;\n        background-color: #dedede;\n        background-size: cover;\n    \n    }\n    #fbFeedInfo{\n        width: 500px;\n        margin:auto;\n        }\n    }\n    .nav-pos{\n    float:left;\n    margin:auto;\n    display: flex;\n    width:100%;\n    \n    }\n    .navbar{\n    min-height:0;\n    }\n    .nav-link{\n    font-size:16px;\n    font-weight:bold;\n    \n    }\n    .info-title{\n    margin-left:20px;\n    color:#90949c;\n    text-transform:uppercase;\n    }\n    .info{\n    margin-left:20px;\n    }\n    .info span {\n        display: table-cell;\n        position: relative;\n    }\n    .info .field-title {\n        width: 80px;\n        font-size: 16px;\n        font-weight:normal;\n        color:#A8AAB1;\n        line-height: 20px;\n        \n    }\n    .info .field-separator {\n        text-align: center;\n        width: 80px;\n    }\n    .info .field-value{\n    font-weight:bold;\n    font-size: 16px;\n    line-height: 20px;\n    word-wrap:break-word;\n    \n    }\n    .story {\n        font-size: 15px;\n        font-weight: bold;\n        text-align: left;\n    }\n    .likeCommentContainer {\n        padding: 10px 0px 0px;\n        height: 25px;\n    }\n    .likeBox {\n       float:left;\n       margin-right:4px;\n    }\n    .commentBox {\n       float: right;\n    }\n    .likes{\n    float:left;\n    }\n    .comments{\n    float:right;\n    }\n    .badge{\n    margin-left:3px;\n    }\n    #fbFeedInfo{\n    margin-top:40px;\n    }\n    #goBackBtn{\n    margin:auto;\n    margin-bottom:40px;\n    margin-top:40px;\n    text-align:center; \n    }\n    .btn-red-outline {\n        background-color: transparent;\n        border-color:#DA5554;\n        border-width: 2px;\n        box-shadow: none;\n    \n    }\n    .text-secondary {\n    \n        color: #7A7A7A;\n    }\n    .form-group {\n        margin-left: 42rem ;\n       }"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid \">\n  <div class=\"row center text-center\">\n    <div class=\" text-red\">\n      <h3>Q</h3>\n    </div>\n    <h4 class=\"text-secondary\">Please confirm or edit your contact information so that we can\n      <br>\n      notify you when you are approved for our BETA.\n    </h4>\n    <hr>\n    <div style=\"text-align: left\" class=\"row center text-center ; col-md-8\">\n      <div class=\"form-group\">\n        <label for=\"name\">NAME</label>\n        <input type=\"text\" [(ngModel)]=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Dummy\" name=\"name\" readonly>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">EMAIL ADDRESS</label>\n        <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter Email\" name=\"email\"\n          readonly>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"phn\">PHONE NUMBER:</label>\n        <input type=\"text\" [(ngModel)]=\"mobile\" class=\"form-control\" id=\"phn\" placeholder=\"Enter Phone Number\"\n          name=\"phn\">\n      </div>\n    </div>\n  </div>\n  <div class=\"text-red ; text-center\">\n    <button id=\"goBackBtn\" (click)=\"signupFunction()\" class=\"btn btn-red-outline\">SIGN UP</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
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



var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, router) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.name = "Pratik";
        this.email = "pratik123@gmail.com";
        this.apiKey = "MDhmODA3OTUyMTE0OTRmZWUwMDViYjI1MGUyNWMyNGY2OGQ5ODBmNDdhYmE0Yzc3YTE2MTM3OGU3NGFjMjVmY2ZiYTk2YmU2NmYyNmJmMDMxYzc3ODRlYjliNjBmN2IxNGRkNDJjNDhmMWQ3ZDgyZGFlOTYzNTA4YTg3NzNlMWI0Mw==";
        this.signupFunction = function () {
            var data = {
                name: _this.name,
                mobile: _this.mobile,
                email: _this.email,
                apiKey: _this.apiKey
            };
            console.log(data);
            _this.appService.signupFunction(data)
                .subscribe(function (data) {
                console.log("Data posted");
                console.log(data);
                _this.router.navigate(['thank-you']);
            }, function (error) {
                console.log("some error occured");
                console.log(error.errorMessage);
            });
        }; // end signupFunction
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/thank-you/thank-you.component.css":
/*!***************************************************!*\
  !*** ./src/app/thank-you/thank-you.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-img\n{\n    \n    width: 100%;  \n    margin:auto;\n    display: block;\n    max-height: 700px;\n    \n }"

/***/ }),

/***/ "./src/app/thank-you/thank-you.component.html":
/*!****************************************************!*\
  !*** ./src/app/thank-you/thank-you.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page1\" class=\"center \">\n  <div class=\"center \">\n    <div id=\"bg-image\">\n      <img class=\"header-img\" src=\"../assets/thanks.png\" alt=\"cover pic \">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/thank-you/thank-you.component.ts":
/*!**************************************************!*\
  !*** ./src/app/thank-you/thank-you.component.ts ***!
  \**************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
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

var ThankYouComponent = /** @class */ (function () {
    function ThankYouComponent() {
    }
    ThankYouComponent.prototype.ngOnInit = function () {
    };
    ThankYouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thank-you',
            template: __webpack_require__(/*! ./thank-you.component.html */ "./src/app/thank-you/thank-you.component.html"),
            styles: [__webpack_require__(/*! ./thank-you.component.css */ "./src/app/thank-you/thank-you.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThankYouComponent);
    return ThankYouComponent;
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pratik/signup-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map