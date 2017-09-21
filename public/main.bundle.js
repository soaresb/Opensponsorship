webpackJsonp([1,4],{

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.addProf = function (profile) {
        //console.log(profile);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('routes/addprofile', profile, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProf = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('routes/profiles', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Brian's PC/opensponsorship/frontend/src/auth.service.js.map

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 390;


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(509);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Brian's PC/opensponsorship/frontend/src/main.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(684),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Brian's PC/opensponsorship/frontend/src/app.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_opd_popup__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_profiles_profiles_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_edit_edit_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_add_add_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_profiles_profiles_component__["a" /* ProfilesComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_10__components_add_add_component__["a" /* AddComponent */] },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_9__components_edit_edit_component__["a" /* EditComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_profiles_profiles_component__["a" /* ProfilesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_add_add_component__["a" /* AddComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_opd_popup__["a" /* PopupModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Brian's PC/opensponsorship/frontend/src/app.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddComponent = (function () {
    function AddComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.addProfile = function () {
        var _this = this;
        var profile = {
            name: this.name,
            dob: this.dob,
            nationality: this.nationality,
            location: this.location,
            association: this.association,
            team: this.team,
            gender: this.gender,
            sports: this.sports,
            about: this.about,
            interests: this.interests,
            charities: this.charities,
            facebook: this.facebook,
            instagram: this.instagram,
            twitter: this.twitter,
            snapchat: this.snapchat,
            youtube: this.youtube,
            twitch: this.twitch,
            pets: this.pets,
            drinks: this.drinks,
            married: this.married
        };
        console.log(profile);
        if (this.name != undefined) {
            this.authService.addProf(profile).subscribe(function (data) {
                if (data.success) {
                    console.log("it worked");
                    _this.router.navigate(['/']);
                }
                else {
                    console.log(data);
                }
            });
        }
        else {
            this.flashMessage.show('Please fill in the Name field', { cssClass: 'alert-danger', timeout: 3000 });
            window.scrollTo(0, 0);
            this.router.navigate(['/add']);
        }
    };
    AddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(685),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], AddComponent);
    return AddComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Brian's PC/opensponsorship/frontend/src/add.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditComponent = (function () {
    function EditComponent() {
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(686),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [])
    ], EditComponent);
    return EditComponent;
}());
//# sourceMappingURL=C:/Users/Brian's PC/opensponsorship/frontend/src/edit.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(687),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=C:/Users/Brian's PC/opensponsorship/frontend/src/navbar.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(216);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilesComponent = (function () {
    function ProfilesComponent(authService) {
        this.authService = authService;
    }
    ProfilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProf().subscribe(function (data) {
            //console.log(data.profile[0].name);
            _this.items = data.profile;
            console.log(_this.items);
        });
    };
    ProfilesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profiles',
            //templateUrl: './profiles.component.html',
            styles: [__webpack_require__(683)],
            template: "\n  <h1>Here's a list of the data in the database</h1>\n\n  <table>\n  <td>\n    <tr *ngFor=\"let item of items\">\n       <h5>Name: {{item.name}} &nbsp;&nbsp;&nbsp; Team: {{item.team}} &nbsp;&nbsp;&nbsp; Date of Birth: {{item.dob}} &nbsp;&nbsp;&nbsp; Association: {{item.association}}</h5>\n   </tr>\n  </td>\n</table>\n"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], ProfilesComponent);
    return ProfilesComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Brian's PC/opensponsorship/frontend/src/profiles.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Brian's PC/opensponsorship/frontend/src/environment.js.map

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "\n<form (submit)=\"addProfile()\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Basic Info</h3>\n    </div>\n    <div class=\"panel-body\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"name\" name=\"name\">\n\n  </div>\n  <div class=\"form-group\">\n    <label>Date of Birth</label>\n    <input type=\"text\" class=\"form-control\" id=\"dob\" [(ngModel)]=\"dob\" name=\"dob\" placeholder=\"mm/dd/yyyy\">\n  </div>\n  <div class=\"form-group\">\n    <label>Nationality</label>\n    <input type=\"text\" class=\"form-control\" id=\"nationality\" [(ngModel)]=\"nationality\" name=\"nationality\">\n  </div>\n  <div class=\"form-group\">\n    <label>Location</label>\n    <input type=\"text\" class=\"form-control\" id=\"location\" [(ngModel)]=\"location\" name=\"location\">\n  </div>\n  <div class=\"form-group\">\n    <label>Association</label>\n    <input type=\"text\" class=\"form-control\" id=\"association\" [(ngModel)]=\"association\" name=\"association\">\n  </div>\n  <div class=\"form-group\">\n    <label>Team </label>\n    <input type=\"text\" class=\"form-control\" id=\"team\" [(ngModel)]=\"team\" name=\"team\">\n  </div>\n\n  <div class=\"form-group\">\n    <label>Gender</label>\n    <select class=\"form-control\" id=\"gender\" [(ngModel)]=\"gender\" name=\"gender\">\n      <option>Male</option>\n      <option>Female</option>\n      <option>Other</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Sports</label>\n    <input type=\"text\" class=\"form-control\" id=\"sports\" [(ngModel)]=\"sports\" name=\"sports\">\n  </div>\n</div>\n</div>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">About</h3>\n  </div>\n  <div class=\"panel-body\">\n  <div class=\"form-group\">\n    <label>Description</label>\n    <textarea class=\"form-control\" id=\"about\" rows=\"4\" [(ngModel)]=\"about\" name=\"about\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Interests</label>\n    <textarea class=\"form-control\" id=\"interests\" rows=\"4\" [(ngModel)]=\"interests\" name=\"interests\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Charities</label>\n    <input type=\"text\" class=\"form-control\" id=\"charities\" [(ngModel)]=\"charities\" name=\"charities\">\n  </div>\n  <div class=\"form-group\">\n    <label>Pets</label>\n    <input type=\"text\" class=\"form-control\" id=\"pets\" [(ngModel)]=\"pets\" name=\"pets\">\n  </div>\n  <div class=\"form-group\">\n    <label>Drinks Alcohol</label>\n    <select class=\"form-control\" id=\"drinks\" [(ngModel)]=\"drinks\" name=\"drinks\">\n      <option>Yes</option>\n      <option>No</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Married</label>\n    <select class=\"form-control\" id=\"married\" [(ngModel)]=\"married\" name=\"married\">\n      <option>Yes</option>\n      <option>No</option>\n    </select>\n  </div>\n</div>\n</div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Social Media</h3>\n    </div>\n  <div class=\"panel-body\">\n  <div class=\"form-group\">\n    <label>Facebook</label>\n    <input type=\"text\" class=\"form-control\" id=\"facebook\" [(ngModel)]=\"facebook\" name=\"facebook\">\n  </div>\n  <div class=\"form-group\">\n    <label>Instagram</label>\n    <input type=\"text\" class=\"form-control\" id=\"instagram\" [(ngModel)]=\"instagram\" name=\"instagram\">\n  </div>\n  <div class=\"form-group\">\n    <label>Twitter</label>\n    <input type=\"text\" class=\"form-control\" id=\"twitter\" [(ngModel)]=\"twitter\" name=\"twitter\">\n  </div>\n  <div class=\"form-group\">\n    <label>Snapchat</label>\n    <input type=\"text\" class=\"form-control\" id=\"snapchat\" [(ngModel)]=\"snapchat\" name=\"snapchat\">\n  </div>\n  <div class=\"form-group\">\n    <label>Youtube</label>\n    <input type=\"text\" class=\"form-control\" id=\"Youtube\" [(ngModel)]=\"youtube\" name=\"youtube\">\n  </div>\n  <div class=\"form-group\">\n    <label>Twitch</label>\n    <input type=\"text\" class=\"form-control\" id=\"twitch\" [(ngModel)]=\"twitch\" name=\"twitch\">\n  </div>\n</div>\n</div>\n\n  <br/>\n  <br/>\n  <br/>\n  <br/>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Add Profile\">\n  <br/>\n  <br/>\n  <br/>\n  <br/>\n</form>\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<p>\n  edit works!\n</p>\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">OpenSponsorship App</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/add']\">Add Profile</a></li>\n\n\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ })

},[706]);
//# sourceMappingURL=main.bundle.map