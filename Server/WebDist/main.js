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

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    // Slide off right
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':increment', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%', opacity: '0' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%', opacity: '0' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%', opacity: '1' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    // slide off lef
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':decrement', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%', opacity: '0' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%', opacity: '0' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%', opacity: '1' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_config_page_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-config/page-config.component */ "./src/app/page-config/page-config.component.ts");
/* harmony import */ var _page_stats_page_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-stats/page-stats.component */ "./src/app/page-stats/page-stats.component.ts");
/* harmony import */ var _page_logs_page_logs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-logs/page-logs.component */ "./src/app/page-logs/page-logs.component.ts");
/* harmony import */ var _page_home_page_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-home/page-home.component */ "./src/app/page-home/page-home.component.ts");



// Route Componenets to display




// Routes
var routes = [
    { path: '', component: _page_home_page_home_component__WEBPACK_IMPORTED_MODULE_6__["PageHomeComponent"], data: { routeIdx: 0, animation: 'HomePage' } },
    { path: 'logs', component: _page_logs_page_logs_component__WEBPACK_IMPORTED_MODULE_5__["PageLogsComponent"], data: { routeIdx: 1, animation: 'LogsPage' } },
    { path: 'stats', component: _page_stats_page_stats_component__WEBPACK_IMPORTED_MODULE_4__["PageStatsComponent"], data: { routeIdx: 2, animation: 'StatsPage' } },
    { path: 'config', component: _page_config_page_config_component__WEBPACK_IMPORTED_MODULE_3__["PageConfigComponent"], data: { routeIdx: 3, animation: 'ConfigPage' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bootstrap></app-bootstrap>\r\n<app-fontawesome></app-fontawesome>\r\n\r\n<app-navbar></app-navbar>\r\n<mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n<div [@routeAnimations]=\"prepareRoute(outlet)\">\r\n    <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</div>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");




var AppComponent = /** @class */ (function () {
    // Router loading trigger events
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.loading = false;
        this.router.events.subscribe(function (event) {
            switch (true) {
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]: {
                    _this.loading = true;
                    break;
                }
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]: {
                    _this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'] && outlet.activatedRouteData['routeIdx'];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_3__["slideInAnimation"]
            ],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _logsee_ico_anim_logsee_ico_anim_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logsee-ico-anim/logsee-ico-anim.component */ "./src/app/logsee-ico-anim/logsee-ico-anim.component.ts");
/* harmony import */ var _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bootstrap/bootstrap.component */ "./src/app/bootstrap/bootstrap.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _logsee_ico_full_logsee_ico_full_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logsee-ico-full/logsee-ico-full.component */ "./src/app/logsee-ico-full/logsee-ico-full.component.ts");
/* harmony import */ var _logsee_ico_text_logsee_ico_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logsee-ico-text/logsee-ico-text.component */ "./src/app/logsee-ico-text/logsee-ico-text.component.ts");
/* harmony import */ var _fontawesome_fontawesome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fontawesome/fontawesome.component */ "./src/app/fontawesome/fontawesome.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _page_config_page_config_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-config/page-config.component */ "./src/app/page-config/page-config.component.ts");
/* harmony import */ var _page_logs_page_logs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-logs/page-logs.component */ "./src/app/page-logs/page-logs.component.ts");
/* harmony import */ var _page_stats_page_stats_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-stats/page-stats.component */ "./src/app/page-stats/page-stats.component.ts");
/* harmony import */ var _page_home_page_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page-home/page-home.component */ "./src/app/page-home/page-home.component.ts");




// Material Angular (Bootstrap, version of Angular basically...)
// Note: To use more <mat-slider> modules, import them from @angular/material and add them to the [imports] list


// Custom Components






// Custom Routing





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _logsee_ico_anim_logsee_ico_anim_component__WEBPACK_IMPORTED_MODULE_6__["LogseeIcoAnimComponent"],
                _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_7__["BootstrapComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _logsee_ico_full_logsee_ico_full_component__WEBPACK_IMPORTED_MODULE_9__["LogseeIcoFullComponent"],
                _logsee_ico_text_logsee_ico_text_component__WEBPACK_IMPORTED_MODULE_10__["LogseeIcoTextComponent"],
                _fontawesome_fontawesome_component__WEBPACK_IMPORTED_MODULE_11__["FontawesomeComponent"],
                _page_config_page_config_component__WEBPACK_IMPORTED_MODULE_13__["PageConfigComponent"],
                _page_logs_page_logs_component__WEBPACK_IMPORTED_MODULE_14__["PageLogsComponent"],
                _page_stats_page_stats_component__WEBPACK_IMPORTED_MODULE_15__["PageStatsComponent"],
                _page_home_page_home_component__WEBPACK_IMPORTED_MODULE_16__["PageHomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bootstrap/bootstrap.component.css":
/*!***************************************************!*\
  !*** ./src/app/bootstrap/bootstrap.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb3RzdHJhcC9ib290c3RyYXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bootstrap/bootstrap.component.html":
/*!****************************************************!*\
  !*** ./src/app/bootstrap/bootstrap.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <link href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js\" integrity=\"sha384-pjaaA8dDz/5BgdFUPX6M/9SUZv4d12SUPF0axWc+VRZkx5xU3daN+lYb49+Ax+Tl\" crossorigin=\"anonymous\"></script>\n</head>\n"

/***/ }),

/***/ "./src/app/bootstrap/bootstrap.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bootstrap/bootstrap.component.ts ***!
  \**************************************************/
/*! exports provided: BootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponent", function() { return BootstrapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BootstrapComponent = /** @class */ (function () {
    function BootstrapComponent() {
    }
    BootstrapComponent.prototype.ngOnInit = function () {
    };
    BootstrapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bootstrap',
            template: __webpack_require__(/*! ./bootstrap.component.html */ "./src/app/bootstrap/bootstrap.component.html"),
            styles: [__webpack_require__(/*! ./bootstrap.component.css */ "./src/app/bootstrap/bootstrap.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BootstrapComponent);
    return BootstrapComponent;
}());



/***/ }),

/***/ "./src/app/fontawesome/fontawesome.component.css":
/*!*******************************************************!*\
  !*** ./src/app/fontawesome/fontawesome.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbnRhd2Vzb21lL2ZvbnRhd2Vzb21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/fontawesome/fontawesome.component.html":
/*!********************************************************!*\
  !*** ./src/app/fontawesome/fontawesome.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.1/css/all.css\" integrity=\"sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP\" crossorigin=\"anonymous\">\n</head>"

/***/ }),

/***/ "./src/app/fontawesome/fontawesome.component.ts":
/*!******************************************************!*\
  !*** ./src/app/fontawesome/fontawesome.component.ts ***!
  \******************************************************/
/*! exports provided: FontawesomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontawesomeComponent", function() { return FontawesomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FontawesomeComponent = /** @class */ (function () {
    function FontawesomeComponent() {
    }
    FontawesomeComponent.prototype.ngOnInit = function () {
    };
    FontawesomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fontawesome',
            template: __webpack_require__(/*! ./fontawesome.component.html */ "./src/app/fontawesome/fontawesome.component.html"),
            styles: [__webpack_require__(/*! ./fontawesome.component.css */ "./src/app/fontawesome/fontawesome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FontawesomeComponent);
    return FontawesomeComponent;
}());



/***/ }),

/***/ "./src/app/logsee-ico-anim/logsee-ico-anim.component.css":
/*!***************************************************************!*\
  !*** ./src/app/logsee-ico-anim/logsee-ico-anim.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cls-1 {\r\n    opacity:0.9;\r\n}\r\n.cls-2 {\r\n    fill:#13afd8;\r\n    opacity: 0;\r\n    -webkit-animation: anim 3s ease infinite;\r\n            animation: anim 3s ease infinite;\r\n}\r\n.cls-3 {\r\n    fill:#0c6b85;\r\n    opacity: 0;\r\n    -webkit-animation: anim 3s ease infinite;\r\n            animation: anim 3s ease infinite;\r\n    -webkit-animation-delay: .2s;\r\n            animation-delay: .2s;\r\n}\r\n.cls-4 {\r\n    fill:#c5a900;\r\n    opacity: 0;\r\n    -webkit-animation: anim 3s ease infinite;\r\n            animation: anim 3s ease infinite;\r\n    -webkit-animation-delay: .4s;\r\n            animation-delay: .4s;\r\n}\r\n/* Animation */\r\n@-webkit-keyframes anim {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: translateY(30px);\r\n                transform: translateY(30px);\r\n    }\r\n    20% {\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0px);\r\n                transform: translateY(0px);\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0px);\r\n                transform: translateY(0px);\r\n    }\r\n    80% {\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-30px);\r\n                transform: translateY(-30px);\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-30px);\r\n                transform: translateY(-30px);\r\n    }\r\n}\r\n@keyframes anim {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: translateY(30px);\r\n                transform: translateY(30px);\r\n    }\r\n    20% {\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0px);\r\n                transform: translateY(0px);\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0px);\r\n                transform: translateY(0px);\r\n    }\r\n    80% {\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-30px);\r\n                transform: translateY(-30px);\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-30px);\r\n                transform: translateY(-30px);\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nc2VlLWljby1hbmltL2xvZ3NlZS1pY28tYW5pbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtDQUNmO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHlDQUFpQztZQUFqQyxpQ0FBaUM7Q0FDcEM7QUFDRDtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gseUNBQWlDO1lBQWpDLGlDQUFpQztJQUNqQyw2QkFBcUI7WUFBckIscUJBQXFCO0NBQ3hCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMsNkJBQXFCO1lBQXJCLHFCQUFxQjtDQUN4QjtBQUVELGVBQWU7QUFDZjtJQUNJO1FBQ0ksV0FBVztRQUNYLG9DQUE0QjtnQkFBNUIsNEJBQTRCO0tBQy9CO0lBQ0Q7UUFDSSxXQUFXO1FBQ1gsbUNBQTJCO2dCQUEzQiwyQkFBMkI7S0FDOUI7SUFDRDtRQUNJLFdBQVc7UUFDWCxtQ0FBMkI7Z0JBQTNCLDJCQUEyQjtLQUM5QjtJQUNEO1FBQ0ksV0FBVztRQUNYLHFDQUE2QjtnQkFBN0IsNkJBQTZCO0tBQ2hDO0lBQ0Q7UUFDSSxXQUFXO1FBQ1gscUNBQTZCO2dCQUE3Qiw2QkFBNkI7S0FDaEM7Q0FDSjtBQXJCRDtJQUNJO1FBQ0ksV0FBVztRQUNYLG9DQUE0QjtnQkFBNUIsNEJBQTRCO0tBQy9CO0lBQ0Q7UUFDSSxXQUFXO1FBQ1gsbUNBQTJCO2dCQUEzQiwyQkFBMkI7S0FDOUI7SUFDRDtRQUNJLFdBQVc7UUFDWCxtQ0FBMkI7Z0JBQTNCLDJCQUEyQjtLQUM5QjtJQUNEO1FBQ0ksV0FBVztRQUNYLHFDQUE2QjtnQkFBN0IsNkJBQTZCO0tBQ2hDO0lBQ0Q7UUFDSSxXQUFXO1FBQ1gscUNBQTZCO2dCQUE3Qiw2QkFBNkI7S0FDaEM7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL2xvZ3NlZS1pY28tYW5pbS9sb2dzZWUtaWNvLWFuaW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbHMtMSB7XHJcbiAgICBvcGFjaXR5OjAuOTtcclxufVxyXG4uY2xzLTIge1xyXG4gICAgZmlsbDojMTNhZmQ4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbjogYW5pbSAzcyBlYXNlIGluZmluaXRlO1xyXG59XHJcbi5jbHMtMyB7XHJcbiAgICBmaWxsOiMwYzZiODU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYW5pbWF0aW9uOiBhbmltIDNzIGVhc2UgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC4ycztcclxufVxyXG4uY2xzLTQge1xyXG4gICAgZmlsbDojYzVhOTAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbjogYW5pbSAzcyBlYXNlIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuNHM7XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbiAqL1xyXG5Aa2V5ZnJhbWVzIGFuaW0ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG4gICAgfVxyXG4gICAgMjAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/logsee-ico-anim/logsee-ico-anim.component.html":
/*!****************************************************************!*\
  !*** ./src/app/logsee-ico-anim/logsee-ico-anim.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"width: 100px; height: 100px; margin-top: 200px; \">\n\n<svg id=\"Group\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -30 350 350\">\n  <defs></defs>\n  <title>LogSee_Ico_Anim</title>\n  <g id=\"M\" class=\"cls-1\">\n    <polygon class=\"cls-2\" points=\"219.46 13.29 219.14 183.33 102.54 199.71 102.86 29.68 219.46 13.29\"/>\n  </g>\n  <g id=\"L\" class=\"cls-1\">\n    <polygon class=\"cls-3\" points=\"155.67 93.19 155.26 237.47 62.33 183.81 62.74 39.53 155.67 93.19\"/>\n  </g>\n  <g id=\"R\" class=\"cls-1\">\n    <polygon class=\"cls-4\" points=\"237.26 94.53 237.67 238.81 144.74 292.47 144.33 148.19 237.26 94.53\"/>\n  </g>\n</svg>\n\n</div>\n"

/***/ }),

/***/ "./src/app/logsee-ico-anim/logsee-ico-anim.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/logsee-ico-anim/logsee-ico-anim.component.ts ***!
  \**************************************************************/
/*! exports provided: LogseeIcoAnimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogseeIcoAnimComponent", function() { return LogseeIcoAnimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogseeIcoAnimComponent = /** @class */ (function () {
    function LogseeIcoAnimComponent() {
    }
    LogseeIcoAnimComponent.prototype.ngOnInit = function () {
    };
    LogseeIcoAnimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logsee-ico-anim',
            template: __webpack_require__(/*! ./logsee-ico-anim.component.html */ "./src/app/logsee-ico-anim/logsee-ico-anim.component.html"),
            styles: [__webpack_require__(/*! ./logsee-ico-anim.component.css */ "./src/app/logsee-ico-anim/logsee-ico-anim.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogseeIcoAnimComponent);
    return LogseeIcoAnimComponent;
}());



/***/ }),

/***/ "./src/app/logsee-ico-full/logsee-ico-full.component.css":
/*!***************************************************************!*\
  !*** ./src/app/logsee-ico-full/logsee-ico-full.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ3NlZS1pY28tZnVsbC9sb2dzZWUtaWNvLWZ1bGwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logsee-ico-full/logsee-ico-full.component.html":
/*!****************************************************************!*\
  !*** ./src/app/logsee-ico-full/logsee-ico-full.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg id=\"Group\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 501 288\"><defs><style>.cls-1{opacity:0.9;}.cls-2{fill:#13afd8;}.cls-3{fill:#0c6b85;}.cls-4{fill:#c5a900;}.cls-5{font-size:110.36px;fill:#17bee5;font-family:UbuntuMono-Regular, Ubuntu Mono;letter-spacing:-0.04em;}.cls-6{letter-spacing:-0.02em;}.cls-7{letter-spacing:-0.05em;}.cls-10,.cls-8,.cls-9{fill:#e5be00;}.cls-8{letter-spacing:-0.03em;}.cls-9{letter-spacing:-0.02em;}.cls-10{letter-spacing:0em;}</style></defs><title>LogSeeArtboard 1</title><g id=\"M\" class=\"cls-1\"><polygon class=\"cls-2\" points=\"163.95 7.29 163.64 177.33 47.05 193.71 47.36 23.67 163.95 7.29\"/></g><g id=\"L\" class=\"cls-1\"><polygon class=\"cls-3\" points=\"100.17 87.19 99.76 231.47 6.83 177.81 7.24 33.53 100.17 87.19\"/></g><g id=\"R\" class=\"cls-1\"><polygon class=\"cls-4\" points=\"181.76 88.53 182.17 232.81 89.24 286.47 88.83 142.19 181.76 88.53\"/></g><text class=\"cls-5\" transform=\"translate(188.12 169.45)\">L<tspan class=\"cls-6\" x=\"50.67\" y=\"0\">o</tspan><tspan class=\"cls-7\" x=\"104\" y=\"0\">g</tspan><tspan class=\"cls-8\" x=\"153.99\" y=\"0\">S</tspan><tspan class=\"cls-9\" x=\"205.7\" y=\"0\">e</tspan><tspan class=\"cls-10\" x=\"258.72\" y=\"0\">e</tspan></text></svg>"

/***/ }),

/***/ "./src/app/logsee-ico-full/logsee-ico-full.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/logsee-ico-full/logsee-ico-full.component.ts ***!
  \**************************************************************/
/*! exports provided: LogseeIcoFullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogseeIcoFullComponent", function() { return LogseeIcoFullComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogseeIcoFullComponent = /** @class */ (function () {
    function LogseeIcoFullComponent() {
    }
    LogseeIcoFullComponent.prototype.ngOnInit = function () {
    };
    LogseeIcoFullComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logsee-ico-full',
            template: __webpack_require__(/*! ./logsee-ico-full.component.html */ "./src/app/logsee-ico-full/logsee-ico-full.component.html"),
            styles: [__webpack_require__(/*! ./logsee-ico-full.component.css */ "./src/app/logsee-ico-full/logsee-ico-full.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogseeIcoFullComponent);
    return LogseeIcoFullComponent;
}());



/***/ }),

/***/ "./src/app/logsee-ico-text/logsee-ico-text.component.css":
/*!***************************************************************!*\
  !*** ./src/app/logsee-ico-text/logsee-ico-text.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ3NlZS1pY28tdGV4dC9sb2dzZWUtaWNvLXRleHQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logsee-ico-text/logsee-ico-text.component.html":
/*!****************************************************************!*\
  !*** ./src/app/logsee-ico-text/logsee-ico-text.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg id=\"Group\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"200 90 300 100\">\r\n    <defs>\r\n        <style>\r\n            .cls-1 {\r\n                font-size: 110px;\r\n                fill: #17bee5;\r\n                font-family: UbuntuMono-Regular, Ubuntu Mono;\r\n                letter-spacing: -0.04em;\r\n            }\r\n            .cls-2 {\r\n                font-size: 110px;\r\n                fill: #e5be00;\r\n                font-family: UbuntuMono-Regular, Ubuntu Mono;\r\n                letter-spacing: -0.04em;\r\n            }\r\n        </style>\r\n    </defs>\r\n    <title>LogSee-Ico-Text</title>\r\n    <text class=\"cls-1\" transform=\"translate(188.12 169.45)\">L<tspan class=\"cls-6\" x=\"50.67\" y=\"0\">o</tspan>\r\n        <tspan class=\"cls-1\" x=\"104\" y=\"0\">g</tspan>\r\n        <tspan class=\"cls-2\" x=\"153.99\" y=\"0\">S</tspan>\r\n        <tspan class=\"cls-2\" x=\"205.7\" y=\"0\">e</tspan>\r\n        <tspan class=\"cls-2\" x=\"258.72\" y=\"0\">e</tspan>\r\n    </text>\r\n</svg>"

/***/ }),

/***/ "./src/app/logsee-ico-text/logsee-ico-text.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/logsee-ico-text/logsee-ico-text.component.ts ***!
  \**************************************************************/
/*! exports provided: LogseeIcoTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogseeIcoTextComponent", function() { return LogseeIcoTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogseeIcoTextComponent = /** @class */ (function () {
    function LogseeIcoTextComponent() {
    }
    LogseeIcoTextComponent.prototype.ngOnInit = function () {
    };
    LogseeIcoTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logsee-ico-text',
            template: __webpack_require__(/*! ./logsee-ico-text.component.html */ "./src/app/logsee-ico-text/logsee-ico-text.component.html"),
            styles: [__webpack_require__(/*! ./logsee-ico-text.component.css */ "./src/app/logsee-ico-text/logsee-ico-text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogseeIcoTextComponent);
    return LogseeIcoTextComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a, mat-button, button {\r\n    outline: 0 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSwgbWF0LWJ1dHRvbiwgYnV0dG9uIHtcclxuICAgIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-expand-lg navbar-light bg-dark pb-2 pt-2\">\r\n\r\n  <div class=\"row m-0\">\r\n      <div class=\"col ml-2\">\r\n          <a class=\"navbar-brand\" routerLink='/'><div style=\"width: 100px;\"><app-logsee-ico-text></app-logsee-ico-text></div></a>\r\n          <button mat-button routerLink=\"/logs\"><i class=\"fas fa-file-alt\"></i> Logs</button>\r\n          <button mat-button routerLink=\"/stats\"><i class=\"far fa-chart-bar\"></i> Stats</button>\r\n          <button mat-button routerLink=\"/config\"><i class=\"fas fa-cog\"></i> Config</button>\r\n        \r\n          <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\r\n          <mat-menu #menu=\"matMenu\" class=\"bg-dark\">\r\n            <button mat-menu-item class=\"text-white\">Item 1</button>\r\n            <button mat-menu-item class=\"text-white\">Item 2</button>\r\n          </mat-menu>\r\n      </div>\r\n      \r\n      <div class=\"col mr-4\">\r\n        <div class=\"float-right mt-1 d-flex\">\r\n            <input id=\"navbar-search\" type=\"text\" class=\"form-control mr-3\" placeholder=\"sample_log.log\" style=\"background: #555; border:0; color:white;\"/>\r\n            <button mat-button routerLink=\"/config\"><i class=\"fas fa-user\"></i> Login</button>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  \r\n  \r\n\r\n</nav>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/page-config/page-config.component.css":
/*!*******************************************************!*\
  !*** ./src/app/page-config/page-config.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtY29uZmlnL3BhZ2UtY29uZmlnLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-config/page-config.component.html":
/*!********************************************************!*\
  !*** ./src/app/page-config/page-config.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-config works!\r\n</p>\r\n\r\n<style>\r\n\t.flip {\r\n\t\tposition: relative;\r\n\t\t\r\n\t}\r\n\t.flip-front {\r\n\t\tposition: absolute;\r\n\t\ttransition: all 1s ease;\r\n\t\ttop: 0;\r\n\t\tz-index: 100;\r\n  \t\ttransform-style: preserve-3d;\r\n\t\ttransform: rotateX(0deg) rotateY(0deg);\r\n\t\tbackface-visibility: hidden;\r\n\t}\r\n\t.flip-back {\r\n\t\tposition: absolute;\r\n\t\ttransition: all 1s ease;\r\n\t\ttop:0;\r\n\t\tz-index: 99;\r\n  \t\ttransform-style: preserve-3d;\r\n\t\ttransform: rotateX(0deg) rotateY(-180deg);\r\n\t\tbackface-visibility: hidden;\r\n\t}\r\n\t.flip:hover > .flip-front {\r\n\t\ttransform: rotateX(0deg) rotateY(180deg);\r\n\t\tbackface-visibility: hidden;\r\n\t}\r\n\t.flip:hover > .flip-back {\r\n\t\ttransform: rotateX(0deg) rotateY(0deg);\r\n\t\tbackface-visibility: hidden;\r\n\t}\r\n\t.flip-outie {\r\n\t\tpadding: 20%;\r\n\t\ttransform: translateY(0) translateZ(60px) scale(1);\r\n\t\tbackface-visibility: hidden;\r\n\t}\r\n</style>\r\n\r\n\r\n<div class=\"m-4 flip\">\r\n\t<div class=\"flip-front\" style=\"background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(https://i.pinimg.com/originals/89/86/d6/8986d6bfbb13ab11f47d68e273c9714e.jpg); width: 400px; height:400px;\">\r\n\t\t<div class=\"flip-outie\">\r\n\t\t\t<p>Hello World.</p>\r\n\t\t\t<div style=\"height:90px; background: pink;\" class=\"w-100\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"flip-back\" style=\"background: linear-gradient(rgba(255, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(https://i.pinimg.com/originals/89/86/d6/8986d6bfbb13ab11f47d68e273c9714e.jpg); width: 400px; height:400px;\">\r\n\t\t<div class=\"flip-outie\">\r\n\t\t\t<p>Goodbye World.</p>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/page-config/page-config.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page-config/page-config.component.ts ***!
  \******************************************************/
/*! exports provided: PageConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageConfigComponent", function() { return PageConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageConfigComponent = /** @class */ (function () {
    function PageConfigComponent() {
    }
    PageConfigComponent.prototype.ngOnInit = function () {
    };
    PageConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-config',
            template: __webpack_require__(/*! ./page-config.component.html */ "./src/app/page-config/page-config.component.html"),
            styles: [__webpack_require__(/*! ./page-config.component.css */ "./src/app/page-config/page-config.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageConfigComponent);
    return PageConfigComponent;
}());



/***/ }),

/***/ "./src/app/page-home/page-home.component.css":
/*!***************************************************!*\
  !*** ./src/app/page-home/page-home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtaG9tZS9wYWdlLWhvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/page-home/page-home.component.html":
/*!****************************************************!*\
  !*** ./src/app/page-home/page-home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-4\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col p-2\"><div style=\"height: 500px;\" class=\"bg-dark rounded text-black p-2\"><img src=\"https://images.vexels.com/media/users/3/143065/isolated/preview/c6cbc8cf5ca3856bca8d5f28c0471fca-bar-graph-cart-by-vexels.png\"/></div></div>\r\n        <div class=\"col p-2\"><div style=\"height: 500px;\" class=\"bg-dark rounded text-black p-2\">x</div></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col p-2\"><div style=\"height: 350px;\" class=\"bg-dark rounded text-black p-2\">x</div></div>\r\n        <div class=\"col p-2\"><div style=\"height: 350px;\" class=\"bg-dark rounded text-black p-2\">x</div></div>\r\n        <div class=\"col p-2\"><div style=\"height: 350px;\" class=\"bg-dark rounded text-black p-2\">x</div></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-6 p-2\"><div style=\"height: 250px;\" class=\"bg-dark rounded text-black p-2\">x</div></div>\r\n        <div class=\"col p-2\"><div style=\"height: 250px;\" class=\"bg-dark rounded text-black p-2\">x</div></div>\r\n        <div class=\"col p-2\"><div style=\"height: 250px;\" class=\"bg-dark rounded text-black p-2\">x</div></div>\r\n    </div>    \r\n</div>\r\n\r\n<app-logsee-ico-anim></app-logsee-ico-anim>\r\n<div style=\"width: 300px;\">\r\n    <app-logsee-ico-full></app-logsee-ico-full>\r\n    <app-logsee-ico-text></app-logsee-ico-text>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page-home/page-home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/page-home/page-home.component.ts ***!
  \**************************************************/
/*! exports provided: PageHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHomeComponent", function() { return PageHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageHomeComponent = /** @class */ (function () {
    function PageHomeComponent() {
    }
    PageHomeComponent.prototype.ngOnInit = function () {
    };
    PageHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-home',
            template: __webpack_require__(/*! ./page-home.component.html */ "./src/app/page-home/page-home.component.html"),
            styles: [__webpack_require__(/*! ./page-home.component.css */ "./src/app/page-home/page-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageHomeComponent);
    return PageHomeComponent;
}());



/***/ }),

/***/ "./src/app/page-logs/page-logs.component.css":
/*!***************************************************!*\
  !*** ./src/app/page-logs/page-logs.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtbG9ncy9wYWdlLWxvZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/page-logs/page-logs.component.html":
/*!****************************************************!*\
  !*** ./src/app/page-logs/page-logs.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-logs works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-logs/page-logs.component.ts":
/*!**************************************************!*\
  !*** ./src/app/page-logs/page-logs.component.ts ***!
  \**************************************************/
/*! exports provided: PageLogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLogsComponent", function() { return PageLogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageLogsComponent = /** @class */ (function () {
    function PageLogsComponent() {
    }
    PageLogsComponent.prototype.ngOnInit = function () {
    };
    PageLogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-logs',
            template: __webpack_require__(/*! ./page-logs.component.html */ "./src/app/page-logs/page-logs.component.html"),
            styles: [__webpack_require__(/*! ./page-logs.component.css */ "./src/app/page-logs/page-logs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageLogsComponent);
    return PageLogsComponent;
}());



/***/ }),

/***/ "./src/app/page-stats/page-stats.component.css":
/*!*****************************************************!*\
  !*** ./src/app/page-stats/page-stats.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utc3RhdHMvcGFnZS1zdGF0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/page-stats/page-stats.component.html":
/*!******************************************************!*\
  !*** ./src/app/page-stats/page-stats.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-stats works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-stats/page-stats.component.ts":
/*!****************************************************!*\
  !*** ./src/app/page-stats/page-stats.component.ts ***!
  \****************************************************/
/*! exports provided: PageStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageStatsComponent", function() { return PageStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageStatsComponent = /** @class */ (function () {
    function PageStatsComponent() {
    }
    PageStatsComponent.prototype.ngOnInit = function () {
    };
    PageStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-stats',
            template: __webpack_require__(/*! ./page-stats.component.html */ "./src/app/page-stats/page-stats.component.html"),
            styles: [__webpack_require__(/*! ./page-stats.component.css */ "./src/app/page-stats/page-stats.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageStatsComponent);
    return PageStatsComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Anon\Documents\GitHub\LogSee\Server\WebSrc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map