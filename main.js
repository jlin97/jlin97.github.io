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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".karla > * {\n  font-family: Karla !important;\n}\n\n.karla > p {\n  font-size: 14px;\n}\n\n#about-body {\n  width: 900px;\n}\n\n.ui.card {\n  background-color: #293646;\n}\n\na {\n  color: #7ab8ff;\n}\n\n.ui.ordered.list{\n  list-style: none;\n  counter-reset: li\n}\n\n.ui.ordered.list .item::before {\n  content: counter(li); \n  color: white;\n}\n\n.item {\n  counter-increment: li\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtDQUMvQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLHFCQUFxQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2FybGEgPiAqIHtcbiAgZm9udC1mYW1pbHk6IEthcmxhICFpbXBvcnRhbnQ7XG59XG5cbi5rYXJsYSA+IHAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbiNhYm91dC1ib2R5IHtcbiAgd2lkdGg6IDkwMHB4O1xufVxuXG4udWkuY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTM2NDY7XG59XG5cbmEge1xuICBjb2xvcjogIzdhYjhmZjtcbn1cblxuLnVpLm9yZGVyZWQubGlzdHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY291bnRlci1yZXNldDogbGlcbn1cblxuLnVpLm9yZGVyZWQubGlzdCAuaXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaSk7IFxuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pdGVtIHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpXG59Il19 */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 60px;\"></div>\n<div style=\"padding: 0px 20px;\" class=\"ui container karla\" id=\"about-body\">\n  <!-- More About Me -->\n  <h3>More About Me:</h3>\n  <iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/505964355&color=%23060406&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe>\n  <br>\n  <br>\n  <p>I'm finding life to be more and more chaotic and overwhelming as I age. I am working on being more at peace and recently wrote about <a href=\"https://medium.com/@j.lin97/labelling-categories-of-fulfillment-a8e939c3867c\" target=\"_blank\">some thoughts on the matter</a>.</p>\n  <p>I've found frequent exercise, daily journaling and mindfulness practices to help so far.</p>\n  <p>My lists:</p>\n  <ul>\n    <li><a href=\"https://www.imdb.com/user/ur30306836/watchlist\" target=\"_blank\">Film watchlist</a></li>\n    <li><a href=\"https://www.imdb.com/user/ur30306836/ratings\" target=\"_blank\">Film ratings</a></li>\n    <li><a href=\"https://myanimelist.net/animelist/jonathanlin97\" target=\"_blank\">MyAnimeList</a></li>\n    <li><a href=\"https://www.amazon.com/hz/wishlist/ls/AHSKN4NCSHQ8\" target=\"_blank\">Book readlist</a></li>\n  </ul>\n  <!-- Lists -->\n  <h3>Favorites:</h3>\n  <div style=\"padding-bottom: 100px;\" class=\"ui stackable three column grid\">\n    <div class=\"row\">\n      <div class=\"column\">\n        <div class=\"ui card\">\n          <div class=\"content karla\">\n            <h3>Films</h3>\n          </div>\n          <div class=\"content\">\n            <div class=\"ui ordered list\">\n              <p class=\"item\">Eternal Sunshine of the Spotless Mind</p>\n              <p class=\"item\">Interstellar</p>\n              <p class=\"item\">Groundhog Day</p>\n              <p class=\"item\">Me and Earl and the Dying Girl</p>\n              <p class=\"item\">What We Do in the Shadows</p>\n              <p class=\"item\">I Origins</p>\n              <p class=\"item\">The Hunt</p>\n              <p class=\"item\">Begin Again</p>\n              <p class=\"item\">The Big Sick</p>\n              <p class=\"item\">Carnage</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"ui card\">\n          <div class=\"content karla\">\n            <div class=\"header\"><a href=\"https://www.imdb.com/list/ls047584779/\" target=\"_blank\">Shows</a></div>\n          </div>\n          <div class=\"content\">\n            <div class=\"ui ordered list\">\n              <p class=\"item\">Veep</p>\n              <p class=\"item\">The OA</p>\n              <p class=\"item\">La casa de papel</p>\n              <p class=\"item\">Hannibal</p>\n              <p class=\"item\">The Office</p>\n              <p class=\"item\">Master of None</p>\n              <p class=\"item\">Rick and Morty</p>\n              <p class=\"item\">Better Things</p>\n              <p class=\"item\">Awake</p>\n              <p class=\"item\">The Sinner</p>\n              <p class=\"item\">Sorry for Your Loss</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"ui card\">\n          <div class=\"content karla\">\n              <h3>Anime/Manga</h3>\n          </div>\n          <div class=\"content\">\n            <div class=\"ui ordered list\">\n              <p class=\"item\">Death Note</p>\n              <p class=\"item\">The Promised Neverland</p>\n              <p class=\"item\">Your Name</p>\n              <p class=\"item\">Full Metal Alchemist</p>\n              <p class=\"item\">Boku No Hero</p>\n              <p class=\"item\">Ano Hana</p>\n              <p class=\"item\">Baka No Test</p>\n              <p class=\"item\">Attack on Titan</p>\n              <p class=\"item\">Deadman Wonderland</p>\n              <p class=\"item\">Demon Slayer</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'notes', component: _notes_notes_component__WEBPACK_IMPORTED_MODULE_5__["NotesComponent"] },
    { path: 'timeline', component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__["TimelineComponent"] },
    { path: '**', redirectTo: '/' },
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

module.exports = ".karla > * {\n  font-family: Karla !important;\n  font-size: 14px;\n}\n\n#router {\n  position: relative;\n  color: #ffffff;\n}\n\n#header, #footer {\n  background-color: #293646;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rYXJsYSA+ICoge1xuICBmb250LWZhbWlseTogS2FybGEgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4jcm91dGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuI2hlYWRlciwgI2Zvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTM2NDY7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui inverted segment karla\" style=\"margin: 0\">\n  <div class=\"ui top fixed inverted menu\" id=\"header\">\n    <a class=\"right item\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n      <i class=\"home icon\"></i>\n    </a>\n    <a class=\"item\" routerLink=\"/about\" routerLinkActive=\"active\">\n      About\n    </a>\n    <a class=\"item\" routerLink=\"/notes\" routerLinkActive=\"active\">\n      Notes\n    </a>\n    <a class=\"item\" href=\"https://www.nomadsinwhitespace.com\" target=\"_blank\">\n      Blog\n    </a>\n    <a class=\"item\" routerLink=\"/timeline\" routerLinkActive=\"active\">\n      Experiences\n    </a>\n  </div>\n</div>\n<div id=\"router\">\n  <router-outlet></router-outlet>\n</div>\n<div class=\"ui bottom fixed inverted menu karla\" id=\"footer\" style=\"margin: 0\">\n  <p class=\"right item\">\n    Jonathan Lin, 12.25.19\n  </p>\n</div>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'jlin-site';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _notes_notes_component__WEBPACK_IMPORTED_MODULE_6__["NotesComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__["TimelineComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".karla > * {\n  font-family: Karla !important;\n  font-size: 14px;\n}\n\n@media screen and (min-width: 600px)  {\n  .mobile-break { \n    display: none;\n  }\n}\n\n#home-body {\n  width: 700px;\n}\n\n#profile-img {\n  width: 35%;\n}\n\na {\n  color: #7ab8ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0U7SUFDRSxjQUFjO0dBQ2Y7Q0FDRjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rYXJsYSA+ICoge1xuICBmb250LWZhbWlseTogS2FybGEgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgIHtcbiAgLm1vYmlsZS1icmVhayB7IFxuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuI2hvbWUtYm9keSB7XG4gIHdpZHRoOiA3MDBweDtcbn1cblxuI3Byb2ZpbGUtaW1nIHtcbiAgd2lkdGg6IDM1JTtcbn1cblxuYSB7XG4gIGNvbG9yOiAjN2FiOGZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 80px;\"></div>\n<div style=\"padding: 0px 20px\" class=\"ui container karla\" id=\"home-body\">\n  <img class=\"ui centered circular image\" id=\"profile-img\" src=\"/assets/profile_2019.jpg\">\n  <br>\n  <p>Hi, I'm Jonathan / Nyan.</p>\n  <p>I was born and raised in Yangon, Myanmar, lived for a bit in Los Angeles, CA, and currently reside in Seattle, WA.</p>\n  <p>I graduated from UCLA in 2019 with an undergraduate degree in Computer Science and currently work as a software development engineer at <a href=\"https://www.amazon.com/go\" target=\"_blank\">Amazon Go</a>. Previously, I have worked part-time as a Python programmer for the UCLA Center for Health Policy Research.</p>\n  <p>I self-reflect often to better understand myself, others, and the rollercoaster of life itself. I am also a proponent of minimalism, mindfulness and intentional living.</p>\n  <span>Pieces of my digital footprint: </span>\n  <br class=\"mobile-break\">\n  <br class=\"mobile-break\">\n  <a href=\"mailto:jonathanlin97@gmail.com\" target=\"_blank\"><i class=\"large envelope outline icon\"></i></a>\n  <a href=\"https://linkedin.com/in/jlin97/\" target=\"_blank\"><i class=\"large linkedin icon\"></i></a>\n  <a href=\"https://github.com/jlin97/\" target=\"_blank\"><i class=\"large github icon\"></i></a>\n  <a href=\"https://twitter.com/j_lin97\" target=\"_blank\"><i class=\"large twitter icon\"></i></a>\n  <a href=\"https://medium.com/@j.lin97\" target=\"_blank\"><i class=\"large medium icon\"></i></a>\n  <!--\n  <a href=\"https://open.spotify.com/user/22ybpywf2il2c4xfoahk4d4ma?si=kZvp5PB0QCSlFmReuXAnxQ\" target=\"_blank\"><i class=\"large spotify icon\"></i></a>\n  <a href=\"https://www.youtube.com/channel/UCkP-HknjN8PrJSc2MIYCGbQ\" target=\"_blank\"><i class=\"large youtube icon\"></i></a>\n  <a href=\"https://steamcommunity.com/id/jlin97/\" target=\"_blank\"><i class=\"large steam icon\"></i></a>\n  -->\n  <p></p>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/notes/notes.component.css":
/*!*******************************************!*\
  !*** ./src/app/notes/notes.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".karla > * {\n  font-family: Karla !important;\n}\n\n.karla > p {\n  font-size: 14px;\n}\n\n.class-entry {\n  margin-bottom: 5px;\n}\n\n#cards {\n  background-color: #293646;\n  max-width: 400px;\n}\n\n.ui.header {\n  color: white;\n}\n\na {\n  color: #7ab8ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtDQUMvQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rYXJsYSA+ICoge1xuICBmb250LWZhbWlseTogS2FybGEgIWltcG9ydGFudDtcbn1cblxuLmthcmxhID4gcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNsYXNzLWVudHJ5IHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4jY2FyZHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkzNjQ2O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4udWkuaGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5hIHtcbiAgY29sb3I6ICM3YWI4ZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/notes/notes.component.html":
/*!********************************************!*\
  !*** ./src/app/notes/notes.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 60px;\"></div>\n<div class=\"ui padded text container segment karla\" id=\"cards\">\n  <h2>Notes</h2>\n  <p>Notes and helpful links to a few of the classes I took at UCLA; feel free to use them for reference at your convenience.</p>\n  <div class=\"ui divider\"></div>\n  <!-- Lower-division classes -->\n  <h3 class=\"ui header\">Lower-division</h3>\n  <p class=\"class-entry\">CS 31 (F15): <a href=\"https://github.com/jlin97/cs31\" target=\"_blank\">Github</a></p>\n  <p class=\"class-entry\">CS 33 (S16): <a href=\"/assets/cs33_s16_jlin97.zip\" target=\"_blank\">Cheat Sheets</a></p>  \n  <p class=\"class-entry\">CS 35L (F16): <a href=\"/assets/cs35l_f16_jlin97.zip\" target=\"_blank\">Cheat Sheets</a> | <a href=\"https://github.com/jlin97/cs35L\">Github</a></p>\n  <p class=\"class-entry\">Physics 1B (F16): <a href=\"/assets/physics1b_f16_jlin97.zip\" target=\"_blank\">Cheat Sheets</a></p>\n  <p class=\"class-entry\">EE M16 (S17): <a href=\"https://bit.ly/2FPyQqn\" target=\"_blank\">Notes</a></p>\n  \n  <!-- Upper-division classes -->\n  <div class=\"ui divider\"></div>\n  <h3 class=\"ui header\">Upper-division</h3>\n  <p class=\"class-entry\">CS 111 (W17): <a href=\"/assets/cs111_w17_jlin97.pdf\" target=\"_blank\">Notes</a></p>\n  <p class=\"class-entry\">CS 174A (W17): <a href=\"/assets/cs174a_w17_jlin97.zip\" target=\"_blank\">Cheat Sheets</a></p>\n  <p class=\"class-entry\">CS 118 (S17): <a href=\"https://bit.ly/2HRGqUY\" target=\"_blank\">Notes</a></p>\n  <p class=\"class-entry\">CS 180 (W18): <a href=\"https://1drv.ms/u/s!AkfMFZT7uYqqkhKGlugDGE60Lauk\" target=\"_blank\">Notes</a></p>\n  <p class=\"class-entry\">CS 151B (W18): <a href=\"https://1drv.ms/u/s!AkfMFZT7uYqqkhKGlugDGE60Lauk\" target=\"_blank\">Notes</a></p>\n  <p class=\"class-entry\">ENGR 111 (W18): <a href=\"https://1drv.ms/u/s!AkfMFZT7uYqqkhKGlugDGE60Lauk\" target=\"_blank\">Notes</a></p>\n  <p class=\"class-entry\">CS 131 (S18): <a href=\"https://1drv.ms/u/s!AkfMFZT7uYqqlF6L9rMv5aW_XwVH\" target=\"_blank\">Notes</a></p>\n  <p class=\"class-entry\">CS 143 (S18): <a href=\"https://1drv.ms/u/s!AkfMFZT7uYqqlF6L9rMv5aW_XwVH\" target=\"_blank\">Notes</a></p>\n  <p class=\"class-entry\">CS 161 (F18): <a href=\"https://github.com/jlin97/cs161\" target=\"_blank\">Github</a> | <a href=\"https://1drv.ms/u/s!AkfMFZT7uYqqlxQpX7xhKwQL17oQ\" target=\"_blank\">Notes</a></p>\n  <p class=\"class-entry\">CS 181 (F18): <a href=\"https://1drv.ms/u/s!AkfMFZT7uYqqlxQpX7xhKwQL17oQ\" target=\"_blank\">Notes</a></p>\n  <p class=\"class-entry\">CS 144 (F18): <a href=\"/assets/cs144_f18_jlin97.docx\" target=\"_blank\">Cheat Sheets</a> | <a href=\"https://1drv.ms/u/s!AkfMFZT7uYqqlxQpX7xhKwQL17oQ\" target=\"_blank\">Notes</a></p>\n  <p class=\"class-entry\">MGMT 108 (W19): <a href=\"https://1drv.ms/o/s!AkfMFZT7uYqqlzqcPB3j00ehmVDa\" target=\"_blank\">Notes</a></p>\n  <p class=\"class-entry\">MGMT 180 (W19): <a href=\"/assets/mgmt180_s19_jlin97.zip\" target=\"_blank\">Notes</a></p>\n  \n  <!--\n  <div class=\"class-entry\" *ngFor=\"let classEntry of upperDiv\">\n    <span>{{ classEntry.title }}: </span>\n    <div style=\"display: inline-block;\" *ngFor=\"let detail of classEntry.body | keyvalue\">\n      <a href=\"{{ detail.value }}\" target=\"_blank\">{{ detail.key }}</a>\n      <span> | </span>\n    </div>\n    <span><i><small> Password: {{ classEntry.password }}</small></i></span>\n  </div>\n  -->\n\n</div>\n<div style=\"height: 100px;\"></div>\n"

/***/ }),

/***/ "./src/app/notes/notes.component.ts":
/*!******************************************!*\
  !*** ./src/app/notes/notes.component.ts ***!
  \******************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotesComponent = /** @class */ (function () {
    function NotesComponent() {
        this.upperDiv = [];
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.upperDiv = [
            {
                title: "CS 180 (W18)",
                body: {
                    Notes: "https://1drv.ms/u/s!AkfMFZT7uYqqkhKGlugDGE60Lauk"
                },
                password: "y9W7XhDycw4k"
            },
            {
                title: "CS 151B (W18)",
                body: {
                    Notes: "https://1drv.ms/u/s!AkfMFZT7uYqqkhKGlugDGE60Lauk"
                },
                password: "cpZwI9gBv98n"
            },
            {
                title: "ENGR 111 (W18)",
                body: {
                    Notes: "https://1drv.ms/u/s!AkfMFZT7uYqqkhKGlugDGE60Lauk"
                },
                password: "N1zAWi&5eHdN"
            },
            {
                title: "CS 131 (S18)",
                body: {
                    Notes: "https://1drv.ms/u/s!AkfMFZT7uYqqlF6L9rMv5aW_XwVH"
                },
                password: "gc43ciTG!i$V"
            },
            {
                title: "CS 161 (F18)",
                body: {
                    Github: ".",
                    Notes: "https://1drv.ms/u/s!AkfMFZT7uYqqlxQpX7xhKwQL17oQ",
                },
                password: "X3fPHyI8j&Rs"
            },
            {
                title: "CS 181 (F18)",
                body: {
                    Notes: "https://1drv.ms/u/s!AkfMFZT7uYqqlxQpX7xhKwQL17oQ"
                },
                password: "gFeozdqy63!a"
            },
            {
                title: "CS 144 (F18)",
                body: {
                    Notes: "https://1drv.ms/u/s!AkfMFZT7uYqqlxQpX7xhKwQL17oQ",
                    "Cheat Sheet": ".",
                },
                password: "AA$65Yom8u!!"
            },
        ];
    };
    NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/notes/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.css */ "./src/app/notes/notes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotesComponent);
    return NotesComponent;
}());

var ClassEntry = /** @class */ (function () {
    function ClassEntry() {
    }
    return ClassEntry;
}());


/***/ }),

/***/ "./src/app/timeline/timeline.component.css":
/*!*************************************************!*\
  !*** ./src/app/timeline/timeline.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".karla > * {\n  font-family: Karla !important;\n}\n\n#timeline-body {\n  width: 900px;\n}\n\n.map {\n  width: 100%;\n  height: 400px;\n}\n\n@media screen and (min-width: 768px)  {\n  .mobile-size { \n    margin-right: 300px;\n  }\n}\n\n/* https://avexdesigns.com/responsive-youtube-embed/ */\n\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  padding-top: 30px; height: 0; overflow: hidden;\n  }\n\n.video-container iframe,\n.video-container object,\n.video-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtDQUMvQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLFlBQVk7RUFDWixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRTtJQUNFLG9CQUFvQjtHQUNyQjtDQUNGOztBQUVELHVEQUF1RDs7QUFDdkQ7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxpQkFBaUI7R0FDOUM7O0FBRUg7OztFQUdFLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmthcmxhID4gKiB7XG4gIGZvbnQtZmFtaWx5OiBLYXJsYSAhaW1wb3J0YW50O1xufVxuXG4jdGltZWxpbmUtYm9keSB7XG4gIHdpZHRoOiA5MDBweDtcbn1cblxuLm1hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgIHtcbiAgLm1vYmlsZS1zaXplIHsgXG4gICAgbWFyZ2luLXJpZ2h0OiAzMDBweDtcbiAgfVxufVxuXG4vKiBodHRwczovL2F2ZXhkZXNpZ25zLmNvbS9yZXNwb25zaXZlLXlvdXR1YmUtZW1iZWQvICovXG4udmlkZW8tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xuICBwYWRkaW5nLXRvcDogMzBweDsgaGVpZ2h0OiAwOyBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuLnZpZGVvLWNvbnRhaW5lciBpZnJhbWUsXG4udmlkZW8tY29udGFpbmVyIG9iamVjdCxcbi52aWRlby1jb250YWluZXIgZW1iZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/timeline/timeline.component.html":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 60px;\"></div>\n<div style=\"padding: 0px 20px;\" class=\"ui container karla\" id=\"timeline-body\">\n  <!-- Software Engineering -->\n  <h3>Software Engineering:</h3>\n  <p>I am interested in furthering a career involving software development management. My technical interests include machine learning and statistics regarding financial and healthcare domains.</p>\n  <p>Here is my <a href=\"/assets/resume_nyan_tun.pdf\" target=\"_blank\">resume</a>.</p>\n  <!-- Film -->\n  <h3>Film:</h3>\n  <p>Sometimes I create travel videos. I was also involved in post-production for UCLA Film & Photography Society for my last year of undergrad.</p>\n  <p><b>My portfolio:</b></p>\n  <!-- Seattle cinematic -->\n  <div class=\"mobile-size\">\n    <div class=\"video-container\"> \n      <iframe src=\"https://www.youtube.com/embed/RfIlpDqolJs\"></iframe>\n    </div>\n  </div>\n  <p><em>Seattle, Washington, 03/23/2017 - 03/28/2017</em></p>\n  <!-- UCLA FPS films -->\n  <br>\n  <div class=\"ui three column divided stackable grid\" bis_skin_checked=\"1\">\n    <div class=\"row\" bis_skin_checked=\"1\">\n        <div class=\"column\" bis_skin_checked=\"1\">\n            <img src=\"../../assets/films/theappointment.jpg\" alt=\"Film poster (The Appointment)\" height=\"380\" width=\"260\">\n            <p><em>The Appointment - Assistant Editor<br>Fall 2018</em></p>\n          </div>\n        <div class=\"column\" bis_skin_checked=\"1\">\n          <img src=\"../../assets/films/hymnofthegarden.jpg\" alt=\"Film poster (Hymn of the Garden)\" height=\"380\" width=\"260\">\n          <p><em>Hymn of the Garden - Lead Editor<br>Winter 2019</em></p>\n        </div>\n        <div class=\"column\" bis_skin_checked=\"1\">\n            <img src=\"../../assets/films/whitecrow.jpg\" alt=\"Film poster (White Crow)\" height=\"380\" width=\"260\">\n            <p><em>White Crow - Lead Editor<br>Spring 2019</em></p>\n        </div>\n    </div>\n  </div>\n  <!-- Travel -->\n  <br>\n  <h3>Travel:</h3>\n  <div #gmap class=\"map\"></div>\n</div>\n<div style=\"height: 100px;\"></div>"

/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_geocoder_data_location_output_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/geocoder/data/location_output.json */ "./src/assets/geocoder/data/location_output.json");
var _assets_geocoder_data_location_output_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/geocoder/data/location_output.json */ "./src/assets/geocoder/data/location_output.json", 1);

/// <reference types="@types/googlemaps" />


var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
        this.heatmap = null;
    }
    TimelineComponent.prototype.ngOnInit = function () {
        var mapProp = {
            center: new google.maps.LatLng(16.8661, 96.1951),
            zoom: 2,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        /*
        // unused heatmap
        var outerMap = this.map;
        var heatMap = this.heatmap;
        fetch("/assets/location_history.json").then(function(response) {
          response.json().then(function(result) {
            console.log("there");
            let locations = result.locations.map((val) => {
              return new google.maps.LatLng(val.latitudeE7 * (10 ** -7), val.longitudeE7 * (10 ** -7));
            });
            
            heatMap = new google.maps.visualization.HeatmapLayer({
              data: locations,
              map: outerMap,
              radius: 21,
            });
          });
        });
        */
        // translates addresses into coordinates
        var outerMap = this.map;
        for (var _i = 0, locations_1 = _assets_geocoder_data_location_output_json__WEBPACK_IMPORTED_MODULE_2__; _i < locations_1.length; _i++) {
            var address = locations_1[_i];
            var latlong = new google.maps.LatLng(address.latitude, address.longitude);
            var marker = new google.maps.Marker({
                map: outerMap,
                position: latlong
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimelineComponent.prototype, "gmapElement", void 0);
    TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/timeline/timeline.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/assets/geocoder/data/location_output.json":
/*!*******************************************************!*\
  !*** ./src/assets/geocoder/data/location_output.json ***!
  \*******************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, default */
/***/ (function(module) {

module.exports = [{"accuracy":"APPROXIMATE","formatted_address":"Yangon, Myanmar (Burma)","google_place_id":"ChIJaxk-Ip6UwTARtAsI-HHS-1Y","input_string":"Yangon","latitude":16.8660694,"longitude":96.195132,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Naypyitaw, Myanmar (Burma)","google_place_id":"ChIJwRfx4-S-yDAR2k7CyVCrkNA","input_string":"Naypyitaw","latitude":19.7633057,"longitude":96.0785104,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Mandalay, Myanmar (Burma)","google_place_id":"ChIJEXTS8CNtyzARRlZOHuBrFCQ","input_string":"Mandalay","latitude":21.9588282,"longitude":96.0891032,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Old Bagan, Myanmar (Burma)","google_place_id":"ChIJYcrYkwPltTARgZnowxdHGjc","input_string":"Bagan","latitude":21.1717271,"longitude":94.8585458,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Ngwesaung, Myanmar (Burma)","google_place_id":"ChIJA9mBalE1vjARIlByyAm6xHE","input_string":"Ngwesaung","latitude":16.8685083,"longitude":94.3847814,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Ngapali Beach, Myanmar (Burma)","google_place_id":"ChIJO5i4IUwZuTARHYI-4nzE_fQ","input_string":"Ngapali","latitude":18.3802687,"longitude":94.3356425,"number_of_results":1,"postcode":"","status":"OK","type":"establishment,natural_feature"},{"accuracy":"APPROXIMATE","formatted_address":"Pyay, Myanmar (Burma)","google_place_id":"ChIJdYENe1GDxzARjmS4gGRc8Ls","input_string":"Pyay","latitude":18.8406029,"longitude":95.2579968,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Bago, Myanmar (Burma)","google_place_id":"ChIJQ-kIR7nWwzARMm8-jfl6q2U","input_string":"Bago","latitude":17.3220711,"longitude":96.4663286,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Bangkok, Thailand","google_place_id":"ChIJ82ENKDJgHTERIEjiXbIAAQE","input_string":"Bangkok","latitude":13.7563309,"longitude":100.5017651,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Ko Samui, Ko Samui District, Surat Thani, Thailand","google_place_id":"ChIJbyZmHFDxVDARMIN9Pb1a1e0","input_string":"Koh Samui","latitude":9.5120168,"longitude":100.0135929,"number_of_results":1,"postcode":"","status":"OK","type":"establishment,natural_feature"},{"accuracy":"APPROXIMATE","formatted_address":"Singapore","google_place_id":"ChIJdZOLiiMR2jERxPWrUs9peIg","input_string":"Singapore","latitude":1.352083,"longitude":103.819836,"number_of_results":1,"postcode":"","status":"OK","type":"country,political"},{"accuracy":"APPROXIMATE","formatted_address":"Seoul, South Korea","google_place_id":"ChIJzWXFYYuifDUR64Pq5LTtioU","input_string":"Seoul","latitude":37.566535,"longitude":126.9779692,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Arcadia, CA, USA","google_place_id":"ChIJK8q408XbwoARiymu0ttQqEw","input_string":"Arcadia California","latitude":34.1397292,"longitude":-118.0353449,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Sydney NSW, Australia","google_place_id":"ChIJP3Sa8ziYEmsRUKgyFmh9AQM","input_string":"Sydney","latitude":-33.8688197,"longitude":151.2092955,"number_of_results":1,"postcode":"","status":"OK","type":"colloquial_area,locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Beijing, China","google_place_id":"ChIJuSwU55ZS8DURiqkPryBWYrk","input_string":"Beijing","latitude":39.9041999,"longitude":116.4073963,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Shanghai, China","google_place_id":"ChIJMzz1sUBwsjURoWTDI5QSlQI","input_string":"Shanghai","latitude":31.2303904,"longitude":121.4737021,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Xi'an, Shaanxi, China","google_place_id":"ChIJuResIul5YzYRLliUp_1m1IU","input_string":"Xi an","latitude":34.341574,"longitude":108.93977,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Taipei, Taiwan","google_place_id":"ChIJmQrivHKsQjQR4MIK3c41aj8","input_string":"Taipei","latitude":25.0329694,"longitude":121.5654177,"number_of_results":1,"postcode":"","status":"OK","type":"colloquial_area,locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Tainan, East District, Tainan City, Taiwan","google_place_id":"ChIJK_I1UZN2bjQRnLZaGDT61Rw","input_string":"Tainan","latitude":22.9997281,"longitude":120.2270277,"number_of_results":1,"postcode":"","status":"OK","type":"colloquial_area,locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Toronto, ON, Canada","google_place_id":"ChIJpTvG15DL1IkRd8S0KlBVNTI","input_string":"Toronto","latitude":43.653226,"longitude":-79.3831843,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Vancouver, BC, Canada","google_place_id":"ChIJs0-pQ_FzhlQRi_OBm-qWkbs","input_string":"Vancouver","latitude":49.2827291,"longitude":-123.1207375,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"San Francisco, CA, USA","google_place_id":"ChIJIQBpAG2ahYAR_6128GcTUEo","input_string":"San Francisco","latitude":37.7749295,"longitude":-122.4194155,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Seattle, WA, USA","google_place_id":"ChIJVTPokywQkFQRmtVEaUZlJRA","input_string":"Seattle","latitude":47.6062095,"longitude":-122.3320708,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"New York, NY, USA","google_place_id":"ChIJOwg_06VPwokRYv534QaPC8g","input_string":"New York","latitude":40.7127753,"longitude":-74.0059728,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Dubai - United Arab Emirates","google_place_id":"ChIJRcbZaklDXz4RYlEphFBu5r0","input_string":"Dubai","latitude":25.2048493,"longitude":55.2707828,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"San Jose, CA, USA","google_place_id":"ChIJ9T_5iuTKj4ARe3GfygqMnbk","input_string":"San Jose","latitude":37.3382082,"longitude":-121.8863286,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"San Diego, CA, USA","google_place_id":"ChIJSx6SrQ9T2YARed8V_f0hOg0","input_string":"San Diego California","latitude":32.715738,"longitude":-117.1610838,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Los Angeles, CA, USA","google_place_id":"ChIJE9on3F3HwoAR9AhGJW_fL-I","input_string":"Los Angeles","latitude":34.0522342,"longitude":-118.2436849,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Santa Monica, CA, USA","google_place_id":"ChIJGQCRws6kwoARq_Uj_7UKF7Q","input_string":"Santa Monica","latitude":34.0194543,"longitude":-118.4911912,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Westwood, Los Angeles, CA, USA","google_place_id":"ChIJecf92oa8woARVlNT9X_x42M","input_string":"Westwood California","latitude":34.0635016,"longitude":-118.4455164,"number_of_results":1,"postcode":"","status":"OK","type":"neighborhood,political"},{"accuracy":"APPROXIMATE","formatted_address":"Riverside, CA, USA","google_place_id":"ChIJu330f9-m3IAR6ApeEwXXofc","input_string":"Riverside","latitude":33.9806005,"longitude":-117.3754942,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Las Vegas, NV, USA","google_place_id":"ChIJ0X31pIK3voARo3mz1ebVzDo","input_string":"Las Vegas","latitude":36.1699412,"longitude":-115.1398296,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Whistler, BC V0N, Canada","google_place_id":"ChIJh3uVA7I8h1QR9s_1dehBt0o","input_string":"Whistler","latitude":50.1163196,"longitude":-122.9573563,"number_of_results":1,"postcode":"V0N","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Boston, MA, USA","google_place_id":"ChIJGzE9DS1l44kRoOhiASS_fHg","input_string":"Boston","latitude":42.3600825,"longitude":-71.0588801,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Philadelphia, PA, USA","google_place_id":"ChIJ60u11Ni3xokRwVg-jNgU9Yk","input_string":"Philadelphia","latitude":39.9525839,"longitude":-75.1652215,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"},{"accuracy":"APPROXIMATE","formatted_address":"Pittsburgh, PA, USA","google_place_id":"ChIJA4UGSG_xNIgRNBuiWqEV-Y0","input_string":"Pittsburgh","latitude":40.4406248,"longitude":-79.9958864,"number_of_results":1,"postcode":"","status":"OK","type":"locality,political"}];

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

module.exports = __webpack_require__(/*! /Users/nyan/Documents/iCollections/Static/Personal Websites/jlin-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map