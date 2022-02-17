(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+km0":
/*!***************************************************!*\
  !*** ./src/app/components/room/room.component.ts ***!
  \***************************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_room_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./room.component.html */ "bpS1");
/* harmony import */ var _room_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room.component.css */ "DXeB");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/socket.service */ "5U9e");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");







let RoomComponent = class RoomComponent {
    constructor(socket, authservice, snackbar) {
        this.socket = socket;
        this.authservice = authservice;
        this.snackbar = snackbar;
        this.msg = {
            username: '',
            text: ''
        };
        this.sidenavOpen = false;
        this.currentUsers = [];
        this.chatMessages = [];
        this.user$ = this.authservice.user$;
    }
    ngAfterViewChecked() {
        let d = document.querySelector('.drawer');
        if (d) {
            d.scrollTop = d.scrollHeight;
        }
    }
    ngOnInit() {
        // get the user details
        this.user$.subscribe((user) => {
            this.username = user.displayName;
            // console.log(user.);
            this.snackbar.open(`Hi ${this.username}, welcome to the chat.`, 'Ok', {
                duration: 5000,
            });
            this.currentUsers.push(this.username);
        });
        // get the welcome chat message
        this.socket.listen('message').subscribe((chat) => {
            this.chatMessages.push(chat);
            this.checkSender();
        });
        console.log(this.chatMessages);
    }
    sendMessage() {
        this.msg.username = this.username;
        this.msg.text = this.chatMessage;
        this.socket.emit('chatMessage', this.msg);
        this.chatMessage = '';
    }
    leaveChat() {
        this.socket.disconnect();
    }
    checkSender() {
        if (this.chatMessages[0].username === this.username) {
            this.isSender = true;
        }
        else {
            this.isSender = false;
        }
    }
};
RoomComponent.ctorParameters = () => [
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
RoomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-room',
        template: _raw_loader_room_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_room_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RoomComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gysh/Documents/projects/iChat/ng-src/src/main.ts */"zUnb");


/***/ }),

/***/ "0z2C":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-page {\n    top: 0;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    display: block;\n    /* background-color: #303F9F; */\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    overflow: hidden;\n  }\n  \n  mat-card {\n    width: 30%;\n    margin: 5% auto;\n    border-radius: 8px;\n  }\n  \n  mat-form-field, mat-checkbox {\n    width: 80%;\n    display: block;\n    margin: auto;\n  }\n  \n  mat-card-content {\n    margin-top: 20px;\n  }\n  \n  .login-button {\n    margin-top: 20px;\n    display: block;\n    width: 80%;\n    margin: 20px auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLE1BQU07SUFDTixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLCtCQUErQjtJQUMvQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtFQUNkOztFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1wYWdlIHtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMzMDNGOUY7ICovXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICBtYXQtY2FyZCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW46IDUlIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG4gIG1hdC1mb3JtLWZpZWxkLCBtYXQtY2hlY2tib3gge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIG1hdC1jYXJkLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIC5sb2dpbi1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgfSJdfQ== */");

/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "yxfS");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.css */ "sx49");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








let HeaderComponent = class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user$ = this.authService.user$;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
    }
    logout() {
        this.authService.logout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroyed$))
            .subscribe((authState) => {
            this.router.navigate(['home']);
        });
    }
    ngOnDestroy() {
        this.destroyed$.next();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "5U9e":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




let SocketService = class SocketService {
    constructor() {
        this.uri = '';
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])(this.uri);
    }
    listen(eventName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((Subscriber) => {
            this.socket.on(eventName, (data) => {
                Subscriber.next(data);
            });
        });
    }
    emit(eventName, data) {
        this.socket.emit(eventName, data);
    }
    disconnect(eventName = 'disconnect') {
        this.socket.emit(eventName);
    }
};
SocketService.ctorParameters = () => [];
SocketService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], SocketService);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
    firebase: {
        apiKey: 'AIzaSyDn43PI-E1H2n0EReXsQuPzwfzbfpKEhJ8',
        authDomain: 'testapp-e910c.firebaseapp.com',
        databaseURL: 'https://testapp-e910c.firebaseio.com',
        projectId: 'testapp-e910c',
        storageBucket: 'testapp-e910c.appspot.com',
        messagingSenderId: '591210265378',
        appId: '1:591210265378:web:7d8ec4a605f9908522437b',
        measurementId: 'G-8R3EZTZ633'
    }
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

/***/ "B+Mi":
/*!****************************************!*\
  !*** ./src/app/app-material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "MutI");

















let AppMaterialModule = class AppMaterialModule {
};
AppMaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"]
        ]
    })
], AppMaterialModule);



/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "tXZI");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "0z2C");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");









let HomeComponent = class HomeComponent {
    constructor(authService, router, snackbar) {
        this.authService = authService;
        this.router = router;
        this.snackbar = snackbar;
        this.googleLogin = true;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.user$ = this.authService.user$;
    }
    ngOnInit() {
        // this.selectedIndex = 1;
    }
    signIn() {
        this.authService
            .signIn(this.emailText, this.passwordText)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$))
            .subscribe((authState) => {
            this.router.navigate(['room']);
        });
    }
    login() {
        this.authService
            .login()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$))
            .subscribe((authState) => {
            this.router.navigate(['room']);
        });
    }
    createUser() {
        this.authService
            .create(this.modelEmail, this.modelPassword)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$))
            .subscribe((authState) => {
            this.user$.subscribe((user) => {
                user.updateProfile({
                    displayName: this.usernameText,
                    photoURL: null
                }).then(() => {
                    console.log('profile updated successfully!');
                }, (error) => {
                    console.log('There was a problem.');
                });
            });
            this.snackbar.open(`User ${this.usernameText} created successfully`, 'Ok', { duration: 5000 });
            this.router.navigate(['home']);
        });
    }
    ngOnDestroy() {
        this.destroyed$.next();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "DXeB":
/*!****************************************************!*\
  !*** ./src/app/components/room/room.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  width: 70%;\n  align-content: center;\n  margin: 1% auto;\n  height: 75%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.example-container {\n  width: 100%;\n  max-height: 100%;\n  /* margin: 1%; */\n  /* border: 1px solid #555; */\n  height: 100%;\n}\n\nmat-drawer,\nmat-drawer-content {\n  padding: 1%;\n}\n\nmat-drawer {\n  background-color: rgb(202, 207, 214);\n  padding: 3%;\n}\n\n.header {\n  padding: 3%;\n}\n\nmat-drawer-content {\n  background-color: lavender;\n  padding: 2%;\n}\n\na {\n  color: white;\n}\n\n.input {\n  width: 100%;\n}\n\n.input-card {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.text-box {\n  width: 100%;\n}\n\n.chat-bubble {\n  border: 1px solid rgb(190, 187, 187);\n  border-radius: 20px;\n  /* padding: 1%; */\n  margin: 1%;\n  font-size: 0.8rem;\n  background-color: lightblue;\n  width: -webkit-min-content;\n  width: min-content;\n}\n\n.message-container {\n  overflow-x: hidden;\n  /* padding: 1%; */\n  display: flex;\n}\n\n.alert {\n  font-size: 0.8rem;\n  /* max-width: 50%; */\n  display: inline-block;\n  overflow-wrap: break-word;\n}\n\n.listitem {\n  margin: 1%;\n}\n\n.receiver {\n  left: 0;\n}\n\n.sender {\n  right: 0;\n}\n\n/* .form {\n    align-items: flex-end;\n} */\n\n.avatar {\n  border: 1px solid black;\n  max-width: 5%;\n  max-height: 5%;\n  border-radius: 50%;\n}\n\n.chat-right {\n  text-align: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb29tL3Jvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQiwwQkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jvb20vcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICB3aWR0aDogNzAlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMSUgYXV0bztcbiAgaGVpZ2h0OiA3NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAvKiBtYXJnaW46IDElOyAqL1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjNTU1OyAqL1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1kcmF3ZXIsXG5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxJTtcbn1cblxubWF0LWRyYXdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDIwNywgMjE0KTtcbiAgcGFkZGluZzogMyU7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAzJTtcbn1cblxubWF0LWRyYXdlci1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XG4gIHBhZGRpbmc6IDIlO1xufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlucHV0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnRleHQtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGF0LWJ1YmJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTAsIDE4NywgMTg3KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLyogcGFkZGluZzogMSU7ICovXG4gIG1hcmdpbjogMSU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAvKiBwYWRkaW5nOiAxJTsgKi9cbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFsZXJ0IHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIC8qIG1heC13aWR0aDogNTAlOyAqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5saXN0aXRlbSB7XG4gIG1hcmdpbjogMSU7XG59XG5cbi5yZWNlaXZlciB7XG4gIGxlZnQ6IDA7XG59XG5cbi5zZW5kZXIge1xuICByaWdodDogMDtcbn1cblxuLyogLmZvcm0ge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn0gKi9cblxuLmF2YXRhciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXgtd2lkdGg6IDUlO1xuICBtYXgtaGVpZ2h0OiA1JTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2hhdC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'testApp';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-header></app-header>\n<router-outlet></router-outlet>");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-material.module */ "B+Mi");
/* harmony import */ var _app_firebase_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-firebase.module */ "eURU");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_room_room_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/room/room.component */ "+km0");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");













let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _components_room_room_component__WEBPACK_IMPORTED_MODULE_10__["RoomComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _app_material_module__WEBPACK_IMPORTED_MODULE_2__["AppMaterialModule"],
            _app_firebase_module__WEBPACK_IMPORTED_MODULE_3__["AppFirebaseModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "bpS1":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/room/room.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button (click)=\"drawer.toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span>ChatApp</span>\n    <span class=\"example-spacer\"></span>\n    <button mat-icon-button><mat-icon>exit_to_app</mat-icon></button>\n  </mat-toolbar>\n\n  <mat-drawer-container class=\"example-container\">\n    <mat-drawer class=\"text-center\" mode=\"side\" #drawer>\n      <h4>Users online</h4>\n      <hr />\n      <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\" *ngFor=\"let user of currentUsers\"\n          ><mat-icon>sentiment_satisfied_alt</mat-icon\n          ><b> {{ user }}</b></mat-list-item\n        >\n      </mat-list>\n    </mat-drawer>\n    <mat-drawer-content class=\"drawer\">\n      <!-- <div class=\"alert alert-primary alert-dismissible fade show\" role=\"alert\" id=\"alert\">\n          <strong>{{username}}</strong> has joined the chat.\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div> -->\n\n      <div *ngIf=\"chatMessages; else elseBlock\" class=\"chat\">\n        <div class=\"message-container\" *ngFor=\"let chat of chatMessages\">\n          <div *ngIf=\"isSender; else receiverBlock\">\n            <div class=\"alert alert-primary\">\n              <small class=\"meta\"\n                ><strong\n                  >{{ chat.username }}<span> {{ chat.timestamp }}</span></strong\n                ></small\n              ><br />\n              <!-- <hr> -->\n\n              {{ chat.text }}\n            </div>\n          </div>\n          <ng-template #receiverBlock>\n            <div class=\"alert alert-primary\">\n              <div class=\"chat-right\">\n                <small class=\"meta\"\n                  ><strong\n                    >{{ chat.username\n                    }}<span> {{ chat.timestamp }}</span></strong\n                  ></small\n                ><br />\n                <!-- <hr> -->\n\n                {{ chat.text }}\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n      <ng-template #elseBlock>\n        <div class=\"chat-bubble chat-text\">Welcome to the chat, boi</div>\n      </ng-template>\n    </mat-drawer-content>\n  </mat-drawer-container>\n  <form action=\"\" class=\"form\">\n    <mat-form-field class=\"text-box\" appearance=\"standard\">\n      <input\n        placeholder=\"enter text here...\"\n        name=\"chatMessage\"\n        matInput\n        autofocus\n        [(ngModel)]=\"chatMessage\"\n      />\n      <button mat-icon-button matSuffix (click)=\"sendMessage()\">\n        <mat-icon>send</mat-icon>\n      </button>\n    </mat-form-field>\n  </form>\n</mat-card>\n");

/***/ }),

/***/ "eURU":
/*!****************************************!*\
  !*** ./src/app/app-firebase.module.ts ***!
  \****************************************/
/*! exports provided: AppFirebaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFirebaseModule", function() { return AppFirebaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");






let AppFirebaseModule = class AppFirebaseModule {
};
AppFirebaseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].firebase)
        ],
        exports: [
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"]
        ]
    })
], AppFirebaseModule);



/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let AuthService = class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.user$ = this.user.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((authenticatedUser) => authenticatedUser));
        this.user.next(this.afAuth.authState);
    }
    signIn(email, password) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.afAuth.signInWithEmailAndPassword(email, password));
    }
    login() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider()));
    }
    create(email, password) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.afAuth.createUserWithEmailAndPassword(email, password));
    }
    logout() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.afAuth.signOut());
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "sx49":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.avatar {\n  /* margin-left: 5px; */\n  max-width: 40px;\n  max-height: 40px;\n  border-radius: 50%;\n}\n\n.mat-mini-fab {\n  box-shadow: none;\n}\n\n/* ::ng-deep .mat-button-wrapper {\n    padding: 0 !important;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7S0FFSyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYXZhdGFyIHtcbiAgLyogbWFyZ2luLWxlZnQ6IDVweDsgKi9cbiAgbWF4LXdpZHRoOiA0MHB4O1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5tYXQtbWluaS1mYWIge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKiA6Om5nLWRlZXAgLm1hdC1idXR0b24td3JhcHBlciB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9ICovXG4iXX0= */");

/***/ }),

/***/ "tXZI":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"login-page\">\n    <mat-card class=\"mat-elevation-z12\">\n      <mat-card-title style=\"text-align:center;\">SignIn/SignUp</mat-card-title>\n      <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs\" [selectedIndex] = \"selectedIndex\">\n        <mat-tab label=\"Sign In\">\n            <mat-card-content>\n              <form action=\"\" #loginForm=\"ngForm\">\n                <mat-form-field>\n                  <input\n                    matInput\n                    placeholder=\"Email\"\n                    required\n                    name=\"email\"\n                    [(ngModel)]=\"emailText\"\n                    #email=\"ngModel\">\n                    <mat-error *ngIf=\"email.invalid\">Email is required</mat-error>\n                  <mat-icon matSuffix>email</mat-icon>\n                </mat-form-field>\n                <mat-form-field>\n                  <input\n                    matInput\n                    placeholder=\"Password\"\n                    type=\"password\"\n                    required\n                    minlength=\"6\"\n                    name=\"password\"\n                    [(ngModel)]=\"passwordText\"\n                    #password=\"ngModel\">\n                    <mat-error\n                      *ngIf=\"password.errors && password.errors.required\">\n                      Password is required\n                    </mat-error>\n                    <mat-error\n                      *ngIf=\"password.errors && password.errors.minlength\">\n                      Password must be of length 6\n                    </mat-error>\n                  <mat-icon matSuffix>lock</mat-icon>\n                </mat-form-field>\n                <mat-checkbox>Remember Me!</mat-checkbox>\n                <button\n                  mat-raised-button\n                  color=\"primary\"\n                  [disabled]=\"loginForm.invalid\"\n                  (click)=\"signIn()\"\n                  class=\"login-button\">\n                  Sign In\n                </button>\n  \n                \n              </form>\n              <button\n                mat-raised-button\n                class=\"login-button\"\n                (click)=\"login()\"\n                >\n                Login with Google\n              </button>\n            </mat-card-content>\n        </mat-tab>\n\n        <!-- sign up section -->\n        <mat-tab label=\"Sign Up\">\n          <mat-card-content>\n            <form action=\"\" #signupForm=\"ngForm\">\n              <mat-form-field>\n                <input\n                  matInput\n                  placeholder=\"User Name\"\n                  required\n                  name=\"usernameText\"\n                  [(ngModel)]=\"usernameText\"\n                  #username=\"ngModel\"\n                  >\n                <mat-icon matSuffix>perm_identity</mat-icon>\n                <mat-error\n                  *ngIf=\"username.invalid\">\n                  Username is required\n                </mat-error>\n  \n              </mat-form-field>\n              <mat-form-field>\n                <input\n                  matInput\n                  placeholder=\"Email\"\n                  required\n                  name=\"email\"\n                  [(ngModel)]=\"modelEmail\"\n                  #email=\"ngModel\"\n                  >\n                  <mat-error *ngIf=\"email.invalid\">Email is required</mat-error>\n                <mat-icon matSuffix>email</mat-icon>\n              </mat-form-field>\n              <mat-form-field>\n                <input\n                  matInput\n                  placeholder=\"Password\"\n                  type=\"password\"\n                  required\n                  minlength=\"6\"\n                  name=\"password\"\n                  ngModel\n                  #password=\"ngModel\"\n                  >\n                  <mat-error\n                    *ngIf=\"password.errors && password.errors.required\">\n                    Password is required\n                  </mat-error> \n                  <mat-error\n                    *ngIf=\"password.errors && password.errors.minlength\">\n                    Password must be of length 6\n                  </mat-error>\n                <mat-icon matSuffix>lock</mat-icon>\n  \n              </mat-form-field>\n              <mat-form-field>\n                  <input\n                  matInput\n                  placeholder=\"Re-enter Password\"\n                  type=\"password\"\n                  required\n                  minlength=\"6\"\n                  name=\"repassword\"\n                  [(ngModel)]=\"modelPassword\"\n                  #repassword=\"ngModel\"\n                  >\n                  <mat-error\n                    *ngIf=\"repassword.errors && repassword.errors.required\">\n                    Re-Enter Password is required\n                  </mat-error>\n                <mat-icon matSuffix>lock</mat-icon>\n              </mat-form-field>\n              <button\n                mat-raised-button\n                color=\"primary\"\n                [disabled]=\"signupForm.invalid\"\n                (click)=\"createUser()\"\n                routerLink\n                class=\"login-button\">\n                Sign Up\n              </button>\n            </form>\n          </mat-card-content>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-card>\n  </div>\n\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _components_room_room_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/room/room.component */ "+km0");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");






const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["redirectUnauthorizedTo"])(['home']);
const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'room', component: _components_room_room_component__WEBPACK_IMPORTED_MODULE_1__["RoomComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthGuard"]], data: { authGuardPipe: redirectUnauthorizedToLogin } },
    { path: '**', redirectTo: 'home' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "yxfS":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" class=\"flex-container\">\n  <div class=\"flex1\">\n    <button\n      mat-icon-button\n      class=\"example-icon\"\n      aria-label=\"Example icon-button with menu icon\"\n    >\n      <mat-icon>face</mat-icon>\n    </button>\n    <span>ChatApp</span>\n  </div>\n  <span class=\"example-spacer\"></span>\n  <div class=\"flex2\">\n    <ng-container *ngIf=\"user$ | async as user; else elseBlock\">\n      <button\n        mat-mini-fab\n        color=\"primary\"\n        class=\"example-icon favorite-icon\"\n        [matTooltip]=\"user.displayName\"\n        aria-label=\"user.displayName\"\n        \n      >\n        <div *ngIf=\"user.photoURL; else alt\">\n          <img [src]=\"user.photoURL\" class=\"avatar\" alt=\"\" />\n        </div>\n        <ng-template #alt>\n          <mat-icon>sentiment_satisfied_alt</mat-icon>\n        </ng-template>\n      </button>\n\n      <button\n        mat-icon-button\n        class=\"example-icon favorite-icon\"\n        aria-label=\"Example icon-button with heart icon\"\n        (click)=\"logout()\"\n      >\n        <mat-icon>power_settings_new</mat-icon>\n      </button>\n    </ng-container>\n    <ng-template #elseBlock>\n      <button\n        mat-icon-button\n        class=\"example-icon favorite-icon\"\n        aria-label=\"Example icon-button with heart icon\"\n      >\n        <mat-icon>account_circle</mat-icon>\n      </button>\n    </ng-template>\n  </div>\n</mat-toolbar>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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