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

/***/ "./src/app/adfixture.service.ts":
/*!**************************************!*\
  !*** ./src/app/adfixture.service.ts ***!
  \**************************************/
/*! exports provided: AdfixtureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdfixtureService", function() { return AdfixtureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdfixtureService = /** @class */ (function () {
    function AdfixtureService(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
    }
    AdfixtureService.prototype.addAdFixture = function (form, formVals, ist, gmt) {
        var obj = {
            date: formVals.date,
            match_id: formVals.match_id,
            match_name: formVals.match_name,
            match_type: formVals.match_type,
            team_a: formVals.team_a,
            team_b: formVals.team_b,
            stadium: formVals.stadium,
            ist: ist,
            gmt: gmt,
            local_time: formVals.local_time
        };
        this.http.post(this.uri + "/adfixture/add", obj)
            .subscribe(function (res) {
            form.reset();
        });
    };
    AdfixtureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdfixtureService);
    return AdfixtureService;
}());



/***/ }),

/***/ "./src/app/adsquad.service.ts":
/*!************************************!*\
  !*** ./src/app/adsquad.service.ts ***!
  \************************************/
/*! exports provided: AdsquadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsquadService", function() { return AdsquadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdsquadService = /** @class */ (function () {
    function AdsquadService(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
    }
    AdsquadService.prototype.addAdsquad = function (form, formVals, squadlist) {
        var obj = {
            teamseries_name: formVals.teamseries_name,
            teamname: formVals.teamname,
            teamname_mobile: formVals.teamname_mobile,
            squad_list: squadlist
        };
        this.http.post(this.uri + "/adsquad/ad", obj)
            .subscribe(function (res) {
            form.reset();
        });
    };
    AdsquadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdsquadService);
    return AdsquadService;
}());



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

module.exports = "<ng2-slim-loading-bar color=\"blue\"></ng2-slim-loading-bar>\n<nav class=\"navbar navbar-expand-sm bg-light\">\n  <div class=\"container-fluid\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a routerLink=\"fixture\" class=\"nav-link\" routerLinkActive=\"active\">\n          Create Fixture\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"squad\" class=\"nav-link\" routerLinkActive=\"active\">\n          Create Squad\n        </a>\n      </li> \n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n <router-outlet></router-outlet>  \n</div>\n\n\n"

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
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
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



var AppComponent = /** @class */ (function () {
    function AppComponent(_loadingBar, _router) {
        var _this = this;
        this._loadingBar = _loadingBar;
        this._router = _router;
        this.title = 'skillsportz';
        this._router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            this._loadingBar.start();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            this._loadingBar.complete();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
            this._loadingBar.stop();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            this._loadingBar.stop();
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_1__["SlimLoadingBarService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_createfixtures_createfixtures_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/createfixtures/createfixtures.component */ "./src/app/components/createfixtures/createfixtures.component.ts");
/* harmony import */ var _adfixture_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adfixture.service */ "./src/app/adfixture.service.ts");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_createsquad_createsquad_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/createsquad/createsquad.component */ "./src/app/components/createsquad/createsquad.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: 'fixture',
        component: _components_createfixtures_createfixtures_component__WEBPACK_IMPORTED_MODULE_5__["CreatefixturesComponent"]
    }, {
        path: 'squad',
        component: _components_createsquad_createsquad_component__WEBPACK_IMPORTED_MODULE_10__["CreatesquadComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_createfixtures_createfixtures_component__WEBPACK_IMPORTED_MODULE_5__["CreatefixturesComponent"],
                _components_createsquad_createsquad_component__WEBPACK_IMPORTED_MODULE_10__["CreatesquadComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_7__["SlimLoadingBarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ],
            providers: [
                _adfixture_service__WEBPACK_IMPORTED_MODULE_6__["AdfixtureService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/createfixtures/createfixtures.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/createfixtures/createfixtures.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/createfixtures/createfixtures.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/createfixtures/createfixtures.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"addFixtureForm\">\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Date</label>\n        <input type=\"datetime-local\" class=\"form-control\" formControlName=\"date\" name=\"date\"/>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">MatchId</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"match_id\" name=\"match_id\"/>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">MatchName</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"match_name\" name=\"match_name\"/>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">TeamA</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"team_a\" name=\"team_a\"/>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">TeamB</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"team_b\" name=\"team_b\"/>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">MatchType</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"match_type\" name=\"match_type\"/>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Stadium</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"stadium\" name=\"stadium\"/>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Local</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"local_time\" name=\"local_time\"/>\n      </div>\n        <div class=\"form-group\">\n          <button (click)=\"addFixture()\" class=\"btn btn-primary\">Create Fixture</button>\n        </div>\n    </form>\n  </div>\n</div>\n<!-- \n//Date\nmatch_id\nmatch_name\nteam_a\nteam_b\nmatch\nstadium\n//gmt\nlocal -->\n"

/***/ }),

/***/ "./src/app/components/createfixtures/createfixtures.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/createfixtures/createfixtures.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreatefixturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatefixturesComponent", function() { return CreatefixturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _adfixture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../adfixture.service */ "./src/app/adfixture.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreatefixturesComponent = /** @class */ (function () {
    function CreatefixturesComponent(fixtureForm, fixtureService) {
        this.fixtureForm = fixtureForm;
        this.fixtureService = fixtureService;
        this.isEmptyExists = false;
    }
    CreatefixturesComponent.prototype.ngOnInit = function () {
        this.addFixtureForm = this.fixtureForm.group({
            date: [this.date, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]],
            match_id: [this.match_id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]],
            match_name: [this.match_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]],
            team_a: [this.team_a, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]],
            team_b: [this.team_b, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]],
            match_type: [this.match_type, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]],
            stadium: [this.stadium, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]],
            local_time: [this.local_time, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]]
        });
    };
    CreatefixturesComponent.prototype.addFixture = function () {
        var arr, isEmptyExists = this.isEmptyExists;
        var formVals = this.addFixtureForm.value;
        var ist, gmt, dt, currentOffset, mid_1, mid_2, GMTTime, ISTOffset, ISTTime;
        dt = new Date(formVals.date);
        currentOffset = dt.getTimezoneOffset();
        ISTOffset = 330;
        ISTTime = new Date(dt.getTime() + (ISTOffset + currentOffset) * 60000);
        mid_1 = getTimeAMPM(ISTTime.getHours());
        ist = ISTTime.getHours() + '.' + ISTTime.getMinutes() + '' + mid_1;
        GMTTime = dt.toGMTString();
        mid_2 = getTimeAMPM(dt.getHours());
        gmt = dt.getUTCHours() + '.' + dt.getUTCMinutes() + '' + mid_2;
        arr = Object.values(formVals);
        arr.forEach(function (val) {
            if ((val != null && val.replace(/\s/g, "") == "") || val == null) {
                isEmptyExists = true;
            }
        });
        if (isEmptyExists) {
            alert("Please fill all fields");
            return;
        }
        this.fixtureService.addAdFixture(this.addFixtureForm, formVals, ist, gmt);
    };
    CreatefixturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createfixtures',
            template: __webpack_require__(/*! ./createfixtures.component.html */ "./src/app/components/createfixtures/createfixtures.component.html"),
            styles: [__webpack_require__(/*! ./createfixtures.component.css */ "./src/app/components/createfixtures/createfixtures.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _adfixture_service__WEBPACK_IMPORTED_MODULE_2__["AdfixtureService"]])
    ], CreatefixturesComponent);
    return CreatefixturesComponent;
}());

function getTimeAMPM(hours) {
    hours = (hours + 24 - 2) % 24;
    var mid = 'AM';
    if (hours == 0) { //At 00 hours we need to show 12 am
        hours = 12;
    }
    else if (hours > 12) {
        hours = hours % 12;
        mid = 'PM';
    }
    return mid;
}


/***/ }),

/***/ "./src/app/components/createsquad/createsquad.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/createsquad/createsquad.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/createsquad/createsquad.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/createsquad/createsquad.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"addSquadForm\">\n      <div class=\"form-group\">\n            <label class=\"col-md-4\">Team_Seriesname</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"teamseries_name\" name=\"teamseries_name\"/>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Team_name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"teamname\" name=\"teamname\"/>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Team_name_Mobile</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"teamname_mobile\" name=\"teamname_mobile\"/>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Squad List</label>\n        <textarea placeholder=\"Enter list with comma separator eg:: 'T Natarajan, Abhinav Mukund' \" type=\"text\" class=\"form-control\" formControlName=\"squad_list\" name=\"squad_list\"></textarea>\n      </div>\n        <div class=\"form-group\">\n          <button (click)=\"addSquad()\" class=\"btn btn-primary\">Create Squad</button>\n        </div>\n    </form>\n  </div>\n</div>\n<!-- \n//\nteamseries_name\nteamname\nteamname_mobile\n\"squad_list\"\n-->\n"

/***/ }),

/***/ "./src/app/components/createsquad/createsquad.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/createsquad/createsquad.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreatesquadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatesquadComponent", function() { return CreatesquadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _adsquad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../adsquad.service */ "./src/app/adsquad.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreatesquadComponent = /** @class */ (function () {
    function CreatesquadComponent(squadForm, AdsquadService) {
        this.squadForm = squadForm;
        this.AdsquadService = AdsquadService;
        this.isEmptyExists = false;
    }
    CreatesquadComponent.prototype.ngOnInit = function () {
        this.addSquadForm = this.squadForm.group({
            teamseries_name: [this.teamseries_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]],
            teamname: [this.teamname, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]],
            teamname_mobile: [this.teamname_mobile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]],
            squad_list: [this.squad_list, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]],
        });
    };
    CreatesquadComponent.prototype.addSquad = function () {
        var formVals, formSquadList, lisVals, arr, isEmptyExists;
        formVals = this.addSquadForm.value;
        lisVals = formVals.squad_list;
        isEmptyExists = this.isEmptyExists;
        arr = Object.values(formVals);
        arr.forEach(function (val) {
            if ((val != null && val.replace(/\s/g, "") == "") || val == null) {
                isEmptyExists = true;
            }
        });
        if (isEmptyExists) {
            alert("Please fill all fields");
            return;
        }
        if (!lisVals.includes(",")) {
            alert("Please include separator ',' in squad list");
            return;
        }
        formSquadList = lisVals.split(',');
        this.AdsquadService.addAdsquad(this.addSquadForm, formVals, formSquadList);
    };
    CreatesquadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createsquad',
            template: __webpack_require__(/*! ./createsquad.component.html */ "./src/app/components/createsquad/createsquad.component.html"),
            styles: [__webpack_require__(/*! ./createsquad.component.css */ "./src/app/components/createsquad/createsquad.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _adsquad_service__WEBPACK_IMPORTED_MODULE_2__["AdsquadService"]])
    ], CreatesquadComponent);
    return CreatesquadComponent;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\AngularApps\skillsportz\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map