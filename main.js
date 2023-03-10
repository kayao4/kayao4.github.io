"use strict";
(self["webpackChunkbcsrif_elog"] = self["webpackChunkbcsrif_elog"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _reports_start_report_start_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports/start-report/start-report.component */ 788);
/* harmony import */ var _reports_end_report_end_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports/end-report/end-report.component */ 9384);
/* harmony import */ var _reports_pause_report_pause_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports/pause-report/pause-report.component */ 8679);
/* harmony import */ var _reports_cancel_report_cancel_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports/cancel-report/cancel-report.component */ 6912);
/* harmony import */ var _reports_offload_report_offload_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reports/offload-report/offload-report.component */ 2955);
/* harmony import */ var _reports_submitted_report_submitted_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports/submitted-report/submitted-report.component */ 782);
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/login/login.component */ 7353);
/* harmony import */ var _authentication_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/sign-up/sign-up.component */ 7561);
/* harmony import */ var _catch_gill_net_report_gill_net_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catch/gill-net-report/gill-net-report.component */ 1048);
/* harmony import */ var _catch_seine_report_seine_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./catch/seine-report/seine-report.component */ 813);
/* harmony import */ var _catch_troll_report_troll_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catch/troll-report/troll-report.component */ 711);
/* harmony import */ var _home_no_trip_home_no_trip_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/no-trip-home/no-trip-home.component */ 9259);
/* harmony import */ var _home_active_trip_home_active_trip_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/active-trip-home/active-trip-home.component */ 7984);
/* harmony import */ var _home_offload_home_offload_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/offload-home/offload-home.component */ 4777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);

















const routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent
}, {
  path: 'sign-up',
  component: _authentication_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__.SignUpComponent
}, {
  path: 'start-report',
  component: _reports_start_report_start_report_component__WEBPACK_IMPORTED_MODULE_0__.StartReportComponent
}, {
  path: 'end-report',
  component: _reports_end_report_end_report_component__WEBPACK_IMPORTED_MODULE_1__.EndReportComponent
}, {
  path: 'pause-report',
  component: _reports_pause_report_pause_report_component__WEBPACK_IMPORTED_MODULE_2__.PauseReportComponent
}, {
  path: 'cancel-report',
  component: _reports_cancel_report_cancel_report_component__WEBPACK_IMPORTED_MODULE_3__.CancelReportComponent
}, {
  path: 'offload-report',
  component: _reports_offload_report_offload_report_component__WEBPACK_IMPORTED_MODULE_4__.OffloadReportComponent
}, {
  path: 'submitted-report',
  component: _reports_submitted_report_submitted_report_component__WEBPACK_IMPORTED_MODULE_5__.SubmittedReportComponent
}, {
  path: 'gill-net-report',
  component: _catch_gill_net_report_gill_net_report_component__WEBPACK_IMPORTED_MODULE_8__.GillNetReportComponent
}, {
  path: 'seine-report',
  component: _catch_seine_report_seine_report_component__WEBPACK_IMPORTED_MODULE_9__.SeineReportComponent
}, {
  path: 'troll-report',
  component: _catch_troll_report_troll_report_component__WEBPACK_IMPORTED_MODULE_10__.TrollReportComponent
}, {
  path: 'no-trip-home',
  component: _home_no_trip_home_no_trip_home_component__WEBPACK_IMPORTED_MODULE_11__.NoTripHomeComponent
}, {
  path: 'active-trip-home',
  component: _home_active_trip_home_active_trip_home_component__WEBPACK_IMPORTED_MODULE_12__.ActiveTripHomeComponent
}, {
  path: 'offload-home',
  component: _home_offload_home_offload_home_component__WEBPACK_IMPORTED_MODULE_13__.OffloadHomeComponent
}];
class AppRoutingModule {}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["????setNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'bcsrif-elog';
  }
}
AppComponent.??fac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material/material.module */ 898);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/login/login.component */ 7353);
/* harmony import */ var _dialogs_add_vessel_dialog_add_vessel_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/add-vessel-dialog/add-vessel-dialog.component */ 9026);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _dialogs_add_trip_dialog_add_trip_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs/add-trip-dialog/add-trip-dialog.component */ 8798);
/* harmony import */ var _dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogs/add-species-dialog/add-species-dialog.component */ 8600);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _authentication_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/sign-up/sign-up.component */ 7561);
/* harmony import */ var _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tel-input/tel-input.component */ 2823);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _reports_pause_report_pause_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reports/pause-report/pause-report.component */ 8679);
/* harmony import */ var _reports_cancel_report_cancel_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reports/cancel-report/cancel-report.component */ 6912);
/* harmony import */ var _reports_submitted_report_submitted_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reports/submitted-report/submitted-report.component */ 782);
/* harmony import */ var _reports_start_report_start_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reports/start-report/start-report.component */ 788);
/* harmony import */ var _reports_end_report_end_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reports/end-report/end-report.component */ 9384);
/* harmony import */ var _catch_gill_net_report_gill_net_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./catch/gill-net-report/gill-net-report.component */ 1048);
/* harmony import */ var _dialogs_add_net_dialog_add_net_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialogs/add-net-dialog/add-net-dialog.component */ 1878);
/* harmony import */ var _catch_seine_report_seine_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./catch/seine-report/seine-report.component */ 813);
/* harmony import */ var _catch_troll_report_troll_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./catch/troll-report/troll-report.component */ 711);
/* harmony import */ var _home_no_trip_home_no_trip_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/no-trip-home/no-trip-home.component */ 9259);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./menu/menu.component */ 1105);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _home_active_trip_home_active_trip_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/active-trip-home/active-trip-home.component */ 7984);
/* harmony import */ var _home_offload_home_offload_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/offload-home/offload-home.component */ 4777);
/* harmony import */ var _reports_offload_report_offload_report_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./reports/offload-report/offload-report.component */ 2955);







































class AppModule {}
AppModule.??fac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["????defineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["????defineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, ngx_online_status__WEBPACK_IMPORTED_MODULE_28__.OnlineStatusModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_29__.ToastrModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_30__.AuthModule.forRoot({
    domain: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.auth0.domain,
    clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.auth0.clientId,
    authorizationParams: {
      redirect_uri: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.auth0.redirect_uri,
      audience: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.auth0.audience
    },
    cacheLocation: 'localstorage'
  }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_24__.isDevMode)(),
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerImmediately'
  }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbTimepickerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["????setNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _dialogs_add_vessel_dialog_add_vessel_dialog_component__WEBPACK_IMPORTED_MODULE_4__.AddVesselDialogComponent, _dialogs_add_trip_dialog_add_trip_dialog_component__WEBPACK_IMPORTED_MODULE_5__.AddTripDialogComponent, _dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_6__.AddSpeciesDialogComponent, _authentication_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__.SignUpComponent, _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_8__.TelInputComponent, _reports_pause_report_pause_report_component__WEBPACK_IMPORTED_MODULE_10__.PauseReportComponent, _reports_cancel_report_cancel_report_component__WEBPACK_IMPORTED_MODULE_11__.CancelReportComponent, _reports_submitted_report_submitted_report_component__WEBPACK_IMPORTED_MODULE_12__.SubmittedReportComponent, _reports_start_report_start_report_component__WEBPACK_IMPORTED_MODULE_13__.StartReportComponent, _reports_end_report_end_report_component__WEBPACK_IMPORTED_MODULE_14__.EndReportComponent, _catch_gill_net_report_gill_net_report_component__WEBPACK_IMPORTED_MODULE_15__.GillNetReportComponent, _dialogs_add_net_dialog_add_net_dialog_component__WEBPACK_IMPORTED_MODULE_16__.AddNetDialogComponent, _catch_seine_report_seine_report_component__WEBPACK_IMPORTED_MODULE_17__.SeineReportComponent, _catch_troll_report_troll_report_component__WEBPACK_IMPORTED_MODULE_18__.TrollReportComponent, _home_no_trip_home_no_trip_home_component__WEBPACK_IMPORTED_MODULE_19__.NoTripHomeComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_20__.MenuComponent, _home_active_trip_home_active_trip_home_component__WEBPACK_IMPORTED_MODULE_21__.ActiveTripHomeComponent, _home_offload_home_offload_home_component__WEBPACK_IMPORTED_MODULE_22__.OffloadHomeComponent, _reports_offload_report_offload_report_component__WEBPACK_IMPORTED_MODULE_23__.OffloadReportComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, ngx_online_status__WEBPACK_IMPORTED_MODULE_28__.OnlineStatusModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_29__.ToastrModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_30__.AuthModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__.ServiceWorkerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbTimepickerModule]
  });
})();

/***/ }),

/***/ 7353:
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);














function LoginComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", 6)(1, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-form-field", 8)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.emailError, " ");
  }
}
class LoginComponent {
  constructor(auth, router, localStorageService, onlineStatusService, toastr, document) {
    this.auth = auth;
    this.router = router;
    this.localStorageService = localStorageService;
    this.onlineStatusService = onlineStatusService;
    this.toastr = toastr;
    this.document = document;
    // check online status
    this.isOnline = false;
    this.onlineStatus = '';
    this.loginButton = '';
    // form validator error messages
    this.emailError = 'Required';
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email])
    });
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_3__.OnlineStatusType.ONLINE) {
      this.isOnline = true;
      this.onlineStatus = 'online';
      this.loginButton = 'Login or Sign Up with Auth0';
    } else {
      this.isOnline = false;
      this.onlineStatus = 'offline';
      this.loginButton = 'Login Offline';
    }
  }
  ngOnInit() {
    // email validation
    this.form.get('email')?.valueChanges.subscribe(() => {
      let emailErrors = this.form.get('email')?.errors;
      if (emailErrors?.required) {
        this.emailError = 'Required';
      } else if (emailErrors?.email) {
        this.emailError = 'Invalid email format';
      } else {
        this.emailError = '';
      }
    });
  }
  attemptLogin() {
    // attempt to login with the entered credentials
    // solution from https://community.auth0.com/t/isauthenticated-is-always-false/84794/3
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_3__.OnlineStatusType.ONLINE) {
      // if went offline while on page, reload app
      if (!this.isOnline) {
        window.location.reload();
        return;
      }
      this.auth.isAuthenticated$.subscribe(value => {
        if (!value) {
          let query = window.location.search;
          let shouldParseResult = query.includes("code=") && query.includes("state=");
          if (shouldParseResult) {
            try {
              this.auth.handleRedirectCallback().subscribe(value => {
                console.log("Logged in!", value);
              });
            } catch (err) {
              console.log("Error parsing redirect:", err);
            }
            window.history.replaceState({}, this.document.title, "/");
          } else {
            this.auth.loginWithPopup().subscribe(value => {
              console.log("Logging in...", value);
            });
          }
        } else {
          this.auth.user$.subscribe(user => {
            let id = user?.sub;
            // check if user is new
            if (id && this.isNewUser(id)) {
              this.localStorageService.createNewUser(user);
            }
            this.router.navigate(['no-trip-home']);
          });
        }
      });
    }
    // offline login
    else {
      // if went online while on page, reload app
      if (this.isOnline) {
        window.location.reload();
        return;
      }
      if (this.form.valid) {
        let userIDs = this.localStorageService.getAllUserIDs();
        for (let id of userIDs) {
          let thisUser = this.localStorageService.getUserByID(id);
          if (thisUser.userEmail === this.form.get('email')?.value) {
            this.localStorageService.saveData('currID', id);
            this.router.navigate(['no-trip-home']);
            return;
          }
        }
        this.toastr.error("User email does not exist");
      }
    }
  }
  // check if user is a new user
  isNewUser(id) {
    let ids = this.localStorageService.getAllUserIDs();
    for (let existingID of ids) {
      if (id === existingID) {
        return false;
      }
    }
    return true;
  }
}
LoginComponent.??fac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_3__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT));
};
LoginComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 11,
  vars: 3,
  consts: [[1, "container", "login-container"], [1, "row"], ["align", "center"], ["class", "row", 3, "formGroup", 4, "ngIf"], [1, "row", "justify-content-center"], ["mat-flat-button", "", "type", "submit", 1, "login-button", 3, "click"], [1, "row", 3, "formGroup"], [1, "blue-heading"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "required", "", "formControlName", "email"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, " BC SRIF Login ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 1)(5, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, LoginComponent_form_7_Template, 9, 2, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 4)(9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LoginComponent_Template_button_click_9_listener() {
        return ctx.attemptLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" You are currently ", ctx.onlineStatus, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.isOnline);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.loginButton, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: [".login-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  padding-top: 20px;\r\n}\r\n\r\n\r\n.login-button[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61 !important;\r\n  color: white !important;\r\n}\r\n\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n\r\n.blue-heading[_ngcontent-%COMP%] {\r\n  color: #005d87 !important;\r\n  margin-top: 5%;\r\n}\r\n\r\n\r\n.form-field[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQ0FBc0M7QUFDdEM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtBQUN6Qjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxpQkFBaUI7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBPdGhlciBsb2dpbiBjb250YWluZXIgc3R5bGl6YXRpb24gKi9cclxuLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLyogTG9naW4gdG8gYWNjb3VudCAqL1xyXG4ubG9naW4tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2ZjYxICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEFsaWduIGNlbnRyZSAqL1xyXG4uY2VudGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIEJsdWUgdGV4dCBmb3IgZW50cnkgZmllbGRzICovXHJcbi5ibHVlLWhlYWRpbmcge1xyXG4gIGNvbG9yOiAjMDA1ZDg3ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi8qIEZvciBpbnB1dCBmaWVsZHMgKi9cclxuLmZvcm0tZmllbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7561:
/*!*************************************************************!*\
  !*** ./src/app/authentication/sign-up/sign-up.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _data_models_validator_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/validator.model */ 4654);
/* harmony import */ var _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tel-input/tel-input.component */ 2823);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 5074);

















const _c0 = ["telInput"];
function SignUpComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
}
function SignUpComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
}
function SignUpComponent_mat_error_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
}
class SignUpComponent {
  constructor(auth, router, onlineStatusService, toastr, document) {
    this.auth = auth;
    this.router = router;
    this.onlineStatusService = onlineStatusService;
    this.toastr = toastr;
    this.document = document;
    // show error message when field is invalid
    this.finError = '';
    // disable all buttons when authenticating
    this.sending = false;
    // regular expression for validation
    this.regex = '^([a-zA-Z]|[0-9]|\.|@)+$';
    this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      phoneNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(new _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_1__.Tel('', '', ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, (0,_data_models_validator_model__WEBPACK_IMPORTED_MODULE_0__.generalValidator)()]),
      fin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(this.regex)])
    });
  }
  ngOnInit() {
    // license number validation
    this.signupForm.get('fin')?.valueChanges.subscribe(() => {
      let finErrors = this.signupForm.get('fin')?.errors;
      if (finErrors?.minlength || finErrors?.maxlength) {
        this.finError = '5 - 8 characters required';
      } else if (finErrors?.pattern) {
        this.finError = 'Invalid characters detected, numbers and letters only';
      } else {
        this.finError = '';
      }
    });
  }
  // for testing
  toHome() {
    this.router.navigate(['no-trip-home']);
  }
  // go back to the login screen
  toLogin() {
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_4__.OnlineStatusType.OFFLINE) {
      this.toastr.error("Cannot log out while offline", "Logout failed");
      return;
    }
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
  }
  // attempt to sign up for an account
  attemptSignUp() {
    this.sending = true;
    this.telInput.touched = true;
    this.telInput.stateChanges.next();
    this.signupForm.get('phoneNum')?.updateValueAndValidity();
    // check username and password validity
    if (this.signupForm.valid) {
      if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_4__.OnlineStatusType.OFFLINE) {
        this.toastr.error("Cannot sign up while offline", "Sign up failed");
        return;
      }
      // navigate to home screen
      this.router.navigate(['home']);
    } else {
      this.toastr.error("Missing credentials", "Sign up failed");
    }
    this.sending = false;
  }
}
SignUpComponent.??fac = function SignUpComponent_Factory(t) {
  return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_4__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT));
};
SignUpComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
  type: SignUpComponent,
  selectors: [["app-sign-up"]],
  viewQuery: function SignUpComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.telInput = _t.first);
    }
  },
  decls: 59,
  vars: 7,
  consts: [[1, "container", "sign-up-container"], [1, "row"], ["align", "center"], [1, "row", "justify-content-center", "center"], [1, "form-sign-up", 3, "formGroup", "ngSubmit"], [1, "blue-heading"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "required", "", "formControlName", "firstName"], [4, "ngIf"], [1, "row", "justify-content-center"], ["matInput", "", "required", "", "formControlName", "lastName"], ["telField", ""], ["formControlName", "phoneNum"], ["telInput", ""], ["matSuffix", ""], ["matInput", "", "formControlName", "fin"], [1, "row", "button-sign-up"], [1, "col"], ["mat-raised-button", "", "type", "submit", "aria-label", "Sign Up", 1, "color-button-orange", 3, "disabled"], ["mat-raised-button", "", "type", "button", 1, "color-button-blue", 3, "disabled", "click"]],
  template: function SignUpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, " BC SRIF Sign Up ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 3)(5, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_5_listener() {
        return ctx.attemptSignUp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 1)(7, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, " Vessel Master First Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "mat-form-field", 6)(10, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, " Vessel Master First Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](13, SignUpComponent_mat_error_13_Template, 2, 0, "mat-error", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div", 9)(15, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, " Vessel Master Last Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "mat-form-field", 6)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, " Vessel Master Last Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](21, SignUpComponent_mat_error_21_Template, 2, 0, "mat-error", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 9)(23, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, " Phone Number ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "mat-form-field", 6, 11)(27, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28, " Phone Number ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](29, "app-tel-input", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "mat-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, " phone ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](33, SignUpComponent_mat_error_33_Template, 2, 0, "mat-error", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 9)(35, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](36, " FIN (Fisher Identification Number) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "mat-form-field", 6)(38, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](39, " Fisher Identification Number ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](40, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "div", 16)(44, "div", 17)(45, "div", 1)(46, "button", 18)(47, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](48, " Sign Up ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](50, " arrow_forward ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "div", 16)(52, "div", 17)(53, "div", 1)(54, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SignUpComponent_Template_button_click_54_listener() {
        return ctx.toHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "span")(56, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](57, " arrow_back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](58, " Return to Home ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.signupForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.signupForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.signupForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.signupForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx.finError, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx.sending);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx.sending);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_1__.TelInputComponent],
  styles: [".sign-up-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  padding-top: 20px;\r\n}\r\n\r\n\r\n.blue-heading[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  margin-top: 5%;\r\n}\r\n\r\n\r\n.form-sign-up[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n\r\n.form-field[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.sending-msg[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-style: italic;\r\n  font-weight: bolder;\r\n}\r\n\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.button-sign-up[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n  margin-left: 5px;\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\n.color-button-orange[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61 !important;\r\n  color: white !important;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.color-button-blue[_ngcontent-%COMP%] {\r\n  background-color: #005d87 !important;\r\n  color: white !important;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQXdDO0FBQ3hDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBLGdEQUFnRDtBQUNoRDtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLHlDQUF5QztBQUN6QztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxzQkFBc0I7QUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBPdGhlciBzaWduIHVwIGNvbnRhaW5lciBzdHlsaXphdGlvbiAqL1xyXG4uc2lnbi11cC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi8qIEJsdWUgdGV4dCBmb3IgZW50cnkgZmllbGRzICovXHJcbi5ibHVlLWhlYWRpbmcge1xyXG4gIGNvbG9yOiAjMDA1ZDg3O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4vKiBFbnRlciBpbmZvcm1hdGlvbiB0byBzaWduIHVwIGZvciBhbiBhY2NvdW50ICovXHJcbi5mb3JtLXNpZ24tdXAge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLyogRm9yIGlucHV0IGZpZWxkcyAqL1xyXG4uZm9ybS1maWVsZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIFNpZ25pbmcgdXAgdXNlciBhZnRlciBidXR0b24gY2xpY2tlZCAqL1xyXG4uc2VuZGluZy1tc2cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLyogQWxpZ24gY2VudHJlICovXHJcbi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ1dHRvbi1zaWduLXVwIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLyogQ29sb3IgYnV0dG9ucyAtIG9yYW5nZSAqL1xyXG4uY29sb3ItYnV0dG9uLW9yYW5nZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmY2MSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBDb2xvcmVkIGJ1dHRvbnMgLSBibHVlICovXHJcbi5jb2xvci1idXR0b24tYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWQ4NyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBUZXh0IHZzIGljb24gKi9cclxuLm1hdC1pY29uIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1048:
/*!********************************************************************!*\
  !*** ./src/app/catch/gill-net-report/gill-net-report.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GillNetReportComponent": () => (/* binding */ GillNetReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-models/catch-table-models/species-data.model */ 439);
/* harmony import */ var _dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialogs/add-species-dialog/add-species-dialog.component */ 8600);
/* harmony import */ var src_app_data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data-models/trip-models/gear-models/net.model */ 786);
/* harmony import */ var src_app_dialogs_add_net_dialog_add_net_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialogs/add-net-dialog/add-net-dialog.component */ 1878);
/* harmony import */ var src_app_data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data-models/catch-table-models/table-rules.model */ 9356);
/* harmony import */ var src_app_data_models_report_models_daily_catch_report_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data-models/report-models/daily-catch-report.model */ 388);
/* harmony import */ var _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data-models/trip-models/trip.model */ 5636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 7371);































function GillNetReportComponent_h6_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate2"](" Page ", ctx_r0.currPage, " of ", ctx_r0.numPages, " ");
  }
}
function GillNetReportComponent_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](2, " Gill Net Catch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
  }
}
function GillNetReportComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](0, "mat-spinner", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("diameter", 50)("strokeWidth", 6)("value", ctx_r2.spinnerProgress);
  }
}
function GillNetReportComponent_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_12_mat_radio_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-radio-button", 26)(1, "h6", 27)(2, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const net_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("value", net_r13)("checked", net_r13.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", net_r13, " ");
  }
}
function GillNetReportComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3, " Which net did you use to fish? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](6, "div", 21)(7, "mat-radio-group", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](8, GillNetReportComponent_div_12_mat_radio_button_8_Template, 4, 3, "mat-radio-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](12, "div", 21)(13, "div", 13)(14, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function GillNetReportComponent_div_12_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????restoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["????resetView"](ctx_r14.addNetDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](15, " Add Net ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", ctx_r4.userNets);
  }
}
function GillNetReportComponent_div_13_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3, " Please provide the catch date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](6, "div", 21)(7, "mat-card", 29)(8, "mat-calendar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("selectedChange", function GillNetReportComponent_div_13_Template_mat_calendar_selectedChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????restoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["????resetView"](ctx_r17.catchDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](10, "div", 2)(11, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](12, " How many hours did you spend fishing? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](13, "div", 13)(14, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](15, " Hours (round to the nearest half hour) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](16, "mat-form-field", 32)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](18, " Hours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](19, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](20, GillNetReportComponent_div_13_mat_error_20_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("selected", ctx_r5.catchDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r5.form.invalid);
  }
}
function GillNetReportComponent_div_14_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_14_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_14_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3, " Where did you fish? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "div", 13)(5, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](6, " Management Area(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](8, " (Do not include sub-area) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](9, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](10, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](11, GillNetReportComponent_div_14_mat_error_11_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](12, "div", 13)(13, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](14, " Subarea(s) Fished ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](16, " (Comma-separate if multiple) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](17, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](18, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](19, GillNetReportComponent_div_14_mat_error_19_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](20, "div", 2)(21, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](22, " How many sets did you cast? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](23, "div", 13)(24, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](25, " Number of Sets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](26, "mat-form-field", 32)(27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](28, " Number of Sets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](29, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("input", function GillNetReportComponent_div_14_Template_input_input_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????restoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["????resetView"](ctx_r22.forbidNonNumeric("numSets"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](30, GillNetReportComponent_div_14_mat_error_30_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r6.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r6.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r6.form.invalid);
  }
}
function GillNetReportComponent_div_15_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_15_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
  if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", element_r32.speciesName, " ");
  }
}
function GillNetReportComponent_div_15_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Kept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_15_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
  if (rf & 2) {
    const element_r33 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngClass", ctx_r27.determineCellStyling(element_r33.kept, element_r33.speciesName));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", element_r33.kept, " ");
  }
}
function GillNetReportComponent_div_15_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Released ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_15_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
  if (rf & 2) {
    const element_r34 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngClass", ctx_r29.determineCellStyling(element_r34.released));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", element_r34.released, " ");
  }
}
function GillNetReportComponent_div_15_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](0, "tr", 50);
  }
}
function GillNetReportComponent_div_15_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function GillNetReportComponent_div_15_tr_18_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????restoreView"](_r38);
      const index_r36 = restoredCtx.index;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["????resetView"](ctx_r37.addSpeciesDialog(index_r36));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3, " Add or Edit Catch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementContainerStart"](5, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](7, GillNetReportComponent_div_15_th_7_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](8, GillNetReportComponent_div_15_td_8_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementContainerStart"](9, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](11, GillNetReportComponent_div_15_th_11_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](12, GillNetReportComponent_div_15_td_12_Template, 2, 2, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementContainerStart"](13, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](15, GillNetReportComponent_div_15_th_15_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](16, GillNetReportComponent_div_15_td_16_Template, 2, 2, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](17, GillNetReportComponent_div_15_tr_17_Template, 1, 0, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](18, GillNetReportComponent_div_15_tr_18_Template, 1, 0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](19, "div", 46)(20, "h6")(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](22, " Total Fish Kept: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](24, "h6")(25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](26, " Total Fish Released: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](29, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](30, "div", 21)(31, "div", 13)(32, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function GillNetReportComponent_div_15_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????restoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["????resetView"](ctx_r39.addSpeciesDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](33, " Add New Species ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](34, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("dataSource", ctx_r7.fishListDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("matHeaderRowDef", ctx_r7.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("matRowDefColumns", ctx_r7.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", ctx_r7.calculateTotalFish("kept"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", ctx_r7.calculateTotalFish("released"), " ");
  }
}
function GillNetReportComponent_div_16_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
  if (rf & 2) {
    const response_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("value", response_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", response_r45, " ");
  }
}
function GillNetReportComponent_div_16_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_16_h6_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Please provide the time of capture and species details in the comments. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_16_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3, " Did you catch any birds, marine mammals, or turtles? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "mat-form-field", 52)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](6, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](7, "mat-select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](8, GillNetReportComponent_div_16_mat_option_8_Template, 2, 2, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](9, GillNetReportComponent_div_16_mat_error_9_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](10, GillNetReportComponent_div_16_h6_10_Template, 2, 0, "h6", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](11, "div", 2)(12, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](13, " Would you like to add a comment? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](14, "div", 13)(15, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](16, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](17, "mat-form-field", 56)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](19, " Comments... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](20, "textarea", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](21, GillNetReportComponent_div_16_mat_error_21_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", ctx_r8.responseOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r8.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ((tmp_2_0 = ctx_r8.form.get("nonFish")) == null ? null : tmp_2_0.value) === "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r8.form.invalid);
  }
}
function GillNetReportComponent_div_17_small_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "small", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r46.form.get("hoursFished")) == null ? null : tmp_0_0.value, " ");
  }
}
function GillNetReportComponent_div_17_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "small", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_17_small_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "small", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r48.form.get("mgmtArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function GillNetReportComponent_div_17_small_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "small", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_17_small_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "small", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r50.form.get("zoneArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function GillNetReportComponent_div_17_small_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "small", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_17_small_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "small", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r52.form.get("numSets")) == null ? null : tmp_0_0.value, " ");
  }
}
function GillNetReportComponent_div_17_small_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "small", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_17_small_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "small", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r54.form.get("nonFish")) == null ? null : tmp_0_0.value, " ");
  }
}
function GillNetReportComponent_div_17_small_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "small", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_17_small_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "small", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3, " Is all information complete and ready to be submitted to DFO? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "div", 13)(5, "h6", 59)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](7, " Net Used: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](9, "div", 13)(10, "h6", 59)(11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](12, "Date Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](15, "div", 13)(16, "h6", 59)(17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](18, " Hours Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](19, GillNetReportComponent_div_17_small_19_Template, 2, 1, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](20, GillNetReportComponent_div_17_small_20_Template, 2, 0, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](21, "div", 13)(22, "h6", 31)(23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](24, "Management Area Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](25, GillNetReportComponent_div_17_small_25_Template, 2, 1, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](26, GillNetReportComponent_div_17_small_26_Template, 2, 0, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](27, "div", 13)(28, "h6", 31)(29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](30, "Subarea(s) Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](31, GillNetReportComponent_div_17_small_31_Template, 2, 1, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](32, GillNetReportComponent_div_17_small_32_Template, 2, 0, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](33, "div", 13)(34, "h6", 31)(35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](36, "Number of Sets:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](37, GillNetReportComponent_div_17_small_37_Template, 2, 1, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](38, GillNetReportComponent_div_17_small_38_Template, 2, 0, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](39, "div", 13)(40, "h6", 31)(41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](42, "Total Fish Kept:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](43, "small", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](45, "div", 13)(46, "h6", 31)(47, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](48, "Total Fish Released:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](49, "small", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](51, "div", 13)(52, "h6", 31)(53, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](54, "Non-fish caught?:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](55, GillNetReportComponent_div_17_small_55_Template, 2, 1, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](56, GillNetReportComponent_div_17_small_56_Template, 2, 0, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](57, "div", 13)(58, "h6", 31)(59, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](60, "Comments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](61, "small", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](63, GillNetReportComponent_div_17_small_63_Template, 2, 0, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", ctx_r9.netVal(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipeBind1"](14, 16, ctx_r9.catchDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", !((tmp_2_0 = ctx_r9.form.get("hoursFished")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", (tmp_3_0 = ctx_r9.form.get("hoursFished")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", !((tmp_4_0 = ctx_r9.form.get("mgmtArea")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", (tmp_5_0 = ctx_r9.form.get("mgmtArea")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", !((tmp_6_0 = ctx_r9.form.get("zoneArea")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", (tmp_7_0 = ctx_r9.form.get("zoneArea")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", !((tmp_8_0 = ctx_r9.form.get("numSets")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", (tmp_9_0 = ctx_r9.form.get("numSets")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", ctx_r9.calculateTotalFish("kept"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", ctx_r9.calculateTotalFish("released"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", !((tmp_12_0 = ctx_r9.form.get("nonFish")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", (tmp_13_0 = ctx_r9.form.get("nonFish")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", (tmp_14_0 = ctx_r9.form.get("comments")) == null ? null : tmp_14_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", (tmp_15_0 = ctx_r9.form.get("comments")) == null ? null : tmp_15_0.errors == null ? null : tmp_15_0.errors.required);
  }
}
function GillNetReportComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function GillNetReportComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Send to DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
class GillNetReportComponent {
  constructor(dialog, auth, router, onlineStatusService, toastr, localStorageService) {
    this.dialog = dialog;
    this.auth = auth;
    this.router = router;
    this.onlineStatusService = onlineStatusService;
    this.toastr = toastr;
    this.localStorageService = localStorageService;
    this.responseOptions = ['Yes', 'No']; //hardcoded values to be used in the form
    this.fishListDetails = []; // source for table data - all data currently in the table
    // data preambles
    this.catchReport = new src_app_data_models_report_models_daily_catch_report_model__WEBPACK_IMPORTED_MODULE_6__.DailyCatchReport(); // catch report we will fill out
    this.currTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_7__.Trip();
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    this.unfilteredFishList = []; // temporary array to store species contained in local storage
    this.fishList = []; //filtered list of species data, will comprise the user's look-up list
    this.userNets = [];
    this.emptyNet = new src_app_data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_3__.Net('', '', '', '', '', '', '', '', '');
    this.gillNetTable = new src_app_data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_5__.TableRules(); // used to filter table data
    // values associated with each page
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormGroup({
      net: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.emptyNet, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      hoursFished: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      //page 3
      mgmtArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      zoneArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      numSets: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      //page 5
      comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
      nonFish: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required])
    });
    this.catchDate = new Date(); //page 2 
    this.displayedColumns = []; // page 4
    // section to section
    this.numPages = 0;
    this.currPage = 0;
    this.spinnerProgress = 0;
    this.spinnerIncrement = 0;
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_11__.OnlineStatusType.OFFLINE) {
      let currID = this.localStorageService.getCurrID();
      this.userDetails = this.localStorageService.getUserByID(currID);
      this.initialize();
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              // fill trip, net, license area, net and species lists
              this.userDetails = this.localStorageService.getUser(user);
              this.initialize();
            }
          });
        } else {
          this.toastr.error("Please authenticate again", "Not authenticated");
          this.router.navigate(['login']);
        }
      });
    }
  }
  ngOnInit() {
    this.onNonFishChange();
  }
  onNonFishChange() {
    this.form.get('nonFish')?.valueChanges.subscribe(value => {
      const commentControl = this.form.get('comments');
      if (value === 'Yes') {
        commentControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
      } else {
        commentControl?.clearValidators();
      }
      commentControl?.updateValueAndValidity();
    });
  }
  // initialize the data
  initialize() {
    // get all required data
    this.currTrip = this.localStorageService.validateCurrTrip(this.userDetails.currTrip);
    this.userNets = this.userDetails.nets;
    this.unfilteredFishList = this.localStorageService.getSpeciesList('fishList');
    this.gillNetTable = this.localStorageService.getTableRules('Gill Net');
    this.filterTableData(); // filters table data as well as species list accessible to the user
    this.populateReport(); // populate report with data from previous daily catch report
    // fill catch page details
    let pages = 5;
    this.numPages = pages;
    this.spinnerIncrement = 100 / pages;
    this.displayedColumns = ['speciesName', 'kept', 'released'];
    // go to first screen
    this.toNextPage();
  }
  populateReport() {
    // initialize form with net data
    let currNet = this.getSelectedNet();
    this.form.patchValue({
      net: currNet
    });
    let numReports = this.currTrip.dailyCatchReports.length;
    if (numReports > 0) {
      let prevReport = this.currTrip.dailyCatchReports[numReports - 1]; // get last report
      this.form.patchValue({
        hoursFished: prevReport.hoursFished,
        mgmtArea: prevReport.managementArea,
        zoneArea: prevReport.subArea,
        numSets: prevReport.numSets,
        nonFish: prevReport.nonFish,
        comments: prevReport.comments
      });
    }
  }
  filterTableData() {
    for (let species of this.unfilteredFishList) {
      if (this.gillNetTable.containsSpecies.includes(species.speciesName)) {
        this.fishListDetails.push(species);
      }
      if (!this.gillNetTable.excludesSpecies.includes(species.speciesName)) {
        this.fishList.push(species);
      }
    }
  }
  determineCellStyling(value, name = '') {
    if (value > 0) {
      return 'bolded-cell';
    } else if (this.isReleaseOnly(name)) {
      return 'release-only-cell';
    }
    return 'faded-cell';
  }
  isReleaseOnly(name) {
    if (this.gillNetTable.releaseOnlySpecies.includes(name)) {
      return true;
    }
    return false;
  }
  // save current user data to local storage
  saveUserDetails() {
    this.localStorageService.saveData(this.userDetails.userID, this.userDetails);
  }
  // get the currently selected net
  getSelectedNet() {
    for (let net of this.userNets) {
      if (net.isChecked) {
        return net;
      }
    }
    return this.userNets[0];
  }
  // set the radio buttons to the currently selected net in the catch report
  setSelectedNet(currNet) {
    for (let net of this.userNets) {
      net.isChecked = net.netName === currNet.netName;
    }
  }
  // save the selected user nets for UI
  saveUserNets() {
    let currNet = this.form.get('net')?.value;
    this.setSelectedNet(currNet);
    this.form.patchValue({
      net: currNet
    });
    this.saveUserDetails();
  }
  // go to the next page
  toNextPage() {
    // page does not contain date
    if (this.currPage <= this.numPages) {
      this.saveUserNets();
      this.incrementPage();
    }
    // page is final page
    else {
      this.sendToDFO();
    }
  }
  // go forward a page, changing the current page number and the spinner progress
  incrementPage() {
    this.currPage++;
    this.spinnerProgress += this.spinnerIncrement;
  }
  // go back to previous page
  toPreviousPage() {
    if (this.currPage === 1) {
      this.saveUserNets();
      this.toHome();
    } else {
      this.currPage--;
      this.spinnerProgress -= this.spinnerIncrement;
    }
  }
  // add a new net
  addNetDialog() {
    const dialogRef = this.dialog.open(src_app_dialogs_add_net_dialog_add_net_dialog_component__WEBPACK_IMPORTED_MODULE_4__.AddNetDialogComponent, {
      width: '500px',
      height: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // update selected net as new net added then go to next screen
        if (result !== 'delete') {
          for (let net of this.userNets) {
            // un-check other nets
            net.isChecked = false;
          }
          let newNet = new src_app_data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_3__.Net(result.netType, result.netName, result.netLength, result.netDepth, result.netUnits, result.hangRatio, result.meshSize, result.meshUnits, result.numMeshes, result.numStrands, true);
          this.form.patchValue({
            net: newNet
          });
          this.userDetails.nets.push(newNet);
          this.saveUserDetails(); //updating local storage
          this.toNextPage();
        }
      }
    });
  }
  // update the specified species catch table
  updateTable() {
    this.table.renderRows();
  }
  calculateTotalFish(type) {
    let totalFish = 0;
    if (type === 'kept') {
      for (var i = 0; i < this.fishListDetails.length; i++) {
        totalFish += this.fishListDetails[i].kept;
      }
    } else if (type === 'released') {
      for (var i = 0; i < this.fishListDetails.length; i++) {
        totalFish += this.fishListDetails[i].released;
      }
    }
    return totalFish;
  }
  // get new species data from result
  getNewSpecies(result) {
    let kept = result.kept ? +result.kept : 0;
    let released = result.released ? +result.released : 0;
    let newSpeciesData = new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_1__.SpeciesData(result.speciesName);
    newSpeciesData.kept = kept;
    newSpeciesData.released = released;
    return newSpeciesData;
  }
  // add new species to the catch
  addSpecies(fishListDetails) {
    const dialogRef = this.dialog.open(_dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_2__.AddSpeciesDialogComponent, {
      width: '500px',
      height: '450px',
      data: {
        identifier: 'add',
        species: new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_1__.SpeciesData(''),
        currentFishList: fishListDetails,
        filteredFishList: this.fishList,
        tableInfo: this.gillNetTable
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // adding a species to the catch
        if (result !== 'delete') {
          fishListDetails.push(this.getNewSpecies(result));
        }
        // update the table
        this.updateTable();
      }
    });
  }
  // edit or delete a species from the catch
  editSpecies(fishListDetails, index) {
    const dialogRef = this.dialog.open(_dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_2__.AddSpeciesDialogComponent, {
      width: '500px',
      height: '450px',
      data: {
        identifier: 'edit',
        species: fishListDetails[index],
        currentFishList: fishListDetails,
        filteredFishList: this.fishList,
        tableInfo: this.gillNetTable
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // editing a species in the catch
        if (result !== 'delete') {
          fishListDetails[index] = this.getNewSpecies(result);
        }
        // delete a species in the catch
        else {
          fishListDetails.splice(index, 1);
        }
        // update the table
        this.updateTable();
      }
    });
  }
  // add to, edit or delete from species catch list
  addSpeciesDialog(index = -1) {
    // editing or deleting a species
    if (index > -1) {
      this.editSpecies(this.fishListDetails, index);
    }
    // adding a species
    else {
      this.addSpecies(this.fishListDetails);
    }
  }
  // send catch to DFO
  sendToDFO() {
    if (this.form.valid) {
      this.saveCatchReport();
      this.router.navigate(['submitted-report'], {
        state: {
          name: 'Daily Catch Report'
        }
      });
      return;
    }
    this.toastr.error("Not all required fields filled", "Invalid form");
  }
  // back to home screen
  toHome() {
    this.router.navigate(['active-trip-home']);
  }
  // forbid field from entering non-decimal values
  forbidNonNumeric(controlName) {
    let control = this.form.get(controlName);
    control.setValue(control.value.replace(/[^0-9]/g, ''));
  }
  // get net value
  netVal() {
    let getNet = this.form.get('net');
    if (getNet?.errors?.required) {
      return '[Required]';
    }
    return getNet?.value;
  }
  // creates a list of all species in the table that have non-zero data associated with them 
  determineSpeciesData() {
    let tempFishArray = [];
    for (let fish of this.fishListDetails) {
      if (fish.kept != 0 || fish.released != 0) {
        tempFishArray.push(fish);
      }
    }
    return tempFishArray;
  }
  // saves all Daily Catch Report information pertinent to Gill Net
  saveCatchReport() {
    // save relevant information gathered in the form
    this.catchReport.netUsed = this.form.get('net')?.value;
    this.catchReport.dateFished = this.catchDate;
    this.catchReport.hoursFished = this.form.get('hoursFished')?.value;
    this.catchReport.managementArea = this.form.get('mgmtArea')?.value;
    this.catchReport.subArea = this.form.get('zoneArea')?.value;
    this.catchReport.numSets = this.form.get('numSets')?.value;
    this.catchReport.nonFish = this.form.get('nonFish')?.value;
    this.catchReport.comments = this.form.get('comments')?.value;
    this.catchReport.speciesDataList = this.determineSpeciesData();
    // push the report to currTrip
    this.currTrip.dailyCatchReports.push(this.catchReport);
    // save currTrip to local storage
    this.userDetails.currTrip = this.currTrip;
    this.localStorageService.saveData(this.userDetails.userID, this.userDetails);
  }
}
GillNetReportComponent.??fac = function GillNetReportComponent_Factory(t) {
  return new (t || GillNetReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_13__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_11__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__.LocalStorageService));
};
GillNetReportComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineComponent"]({
  type: GillNetReportComponent,
  selectors: [["app-gill-net-report"]],
  viewQuery: function GillNetReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????viewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????loadQuery"]()) && (ctx.table = _t.first);
    }
  },
  decls: 32,
  vars: 13,
  consts: [[1, "container", "catch-container"], [1, "container", 2, "padding-top", "20px"], ["align", "center", 1, "row"], [4, "ngIf"], [1, "col-5"], [1, "col-2"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value", 4, "ngIf"], ["style", "color:#3ebfb9", 4, "ngIf"], [3, "formGroup"], ["class", "container", 4, "ngIf"], [1, "row", 2, "margin-top", "auto", "padding-bottom", "3%", "padding-top", "10px"], [1, "col-1"], [1, "col-4"], [1, "row"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-blue", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"], [1, "text-muted"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value"], [2, "color", "#3ebfb9"], [1, "container"], [1, "blue-heading-title"], [1, "col-8"], ["aria-label", "Select or add net", "formControlName", "net", 1, "radio"], [3, "value", "checked", 4, "ngFor", "ngForOf"], ["align", "center", 1, "row", "add-item"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-red", 3, "click"], [3, "value", "checked"], [2, "font-weight", "bold"], [1, "text-muted", "text-small"], [1, "demo-inline-calendar-card", 2, "margin-top", "10%"], [3, "selected", "selectedChange"], [1, "blue-heading"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "inputmode", "numeric", "formControlName", "hoursFished"], ["matInput", "", "formControlName", "mgmtArea", "placeholder", "Management Area"], ["matInput", "", "formControlName", "zoneArea", "placeholder", "Subarea(s)"], ["matInput", "", "inputmode", "numeric", "formControlName", "numSets", 3, "input"], ["mat-table", "", 1, "mat-elevation-z8", "margin-table", 3, "dataSource"], ["matColumnDef", "speciesName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "kept"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "released"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "row", 2, "padding-top", "10px"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["appearance", "outline", 1, "form-field", 2, "padding-top", "15px"], ["formControlName", "nonFish"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "blue-heading", 4, "ngIf"], ["appearance", "fill", 1, "form-field"], ["matInput", "", "formControlName", "comments", "rows", "9"], [3, "value"], [1, "blue-label"], ["class", "blue-label", 4, "ngIf"], ["class", "red-label", 4, "ngIf"], [1, "red-label"]],
  template: function GillNetReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](3, GillNetReportComponent_h6_3_Template, 3, 2, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](4, GillNetReportComponent_h6_4_Template, 3, 0, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](8, GillNetReportComponent_mat_spinner_8_Template, 1, 3, "mat-spinner", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](9, GillNetReportComponent_mat_icon_9_Template, 2, 0, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](11, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](12, GillNetReportComponent_div_12_Template, 17, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](13, GillNetReportComponent_div_13_Template, 21, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](14, GillNetReportComponent_div_14_Template, 31, 3, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](15, GillNetReportComponent_div_15_Template, 35, 5, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](16, GillNetReportComponent_div_16_Template, 22, 4, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](17, GillNetReportComponent_div_17_Template, 64, 18, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](19, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](20, "div", 12)(21, "div", 13)(22, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function GillNetReportComponent_Template_button_click_22_listener() {
        return ctx.toPreviousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](23, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](24, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](25, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](26, "div", 12)(27, "div", 13)(28, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function GillNetReportComponent_Template_button_click_28_listener() {
        return ctx.toNextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](29, GillNetReportComponent_span_29_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](30, GillNetReportComponent_span_30_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](31, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage === 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage > ctx.numPages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCard, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatCalendar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatError, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinner, _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelect, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe],
  styles: [".catch-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n  }\r\n  \r\n  \r\n  .mat-mdc-progress-spinner[_ngcontent-%COMP%] {\r\n    --mdc-circular-progress-active-indicator-color: #3ebfb9 !important;\r\n  }\r\n  \r\n  \r\n  .mat-mdc-radio-button.mat-accent[_ngcontent-%COMP%] {\r\n    --mdc-radio-selected-focus-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-hover-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-pressed-icon-color: #3ebfb9;\r\n    --mat-mdc-radio-checked-ripple-color: #3ebfb9;\r\n  }\r\n  \r\n    .mat-mdc-text-field-wrapper {\r\n    background-color: whitesmoke !important;\r\n  }\r\n  \r\n  \r\n  .radio[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    margin-top: 1%;\r\n  }\r\n  \r\n  \r\n  .blue-heading[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n  }\r\n  \r\n  \r\n  .blue-heading-title[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    font-weight: bold;\r\n    margin-top: 5%;\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  \r\n  .add-item[_ngcontent-%COMP%] {\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  \r\n  .fishing-button-blue[_ngcontent-%COMP%] {\r\n    background-color: #005d87 !important;\r\n    color: white !important;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  \r\n  .fishing-button-red[_ngcontent-%COMP%] {\r\n    background-color: #ff6f61 !important;\r\n    color: white !important;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  \r\n  .time-picker[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n  \r\n  \r\n  .text-small[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .form-field[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .margin-table[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  .mat-column-speciesName[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    border-right: 1px solid;\r\n  }\r\n\r\n  .mat-column-kept[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n  .mat-column-released[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n  .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid;\r\n    border-top: 1px solid;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n    background-color: whitesmoke;\r\n  }\r\n\r\n  \r\n  .blue-label[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n    font-size: medium;\r\n  }\r\n  \r\n  \r\n  .red-label[_ngcontent-%COMP%] {\r\n    color: red;\r\n    margin-top: 5%;\r\n    font-size: medium;\r\n  }\r\n\r\n  .bolded-cell[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .faded-cell[_ngcontent-%COMP%] {\r\n    font-weight: lighter;\r\n  }\r\n\r\n\r\n  .release-only-cell[_ngcontent-%COMP%] {\r\n    opacity: 0; \r\n    content-visibility: hidden;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2F0Y2gvZ2lsbC1uZXQtcmVwb3J0L2dpbGwtbmV0LXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBLDJCQUEyQjtFQUMzQjtJQUNFLGtFQUFrRTtFQUNwRTs7RUFFQSx3QkFBd0I7RUFDeEI7SUFDRSw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHdDQUF3QztJQUN4QyxnREFBZ0Q7SUFDaEQsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsdUNBQXVDO0VBQ3pDOztFQUVBLGtCQUFrQjtFQUNsQjtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGNBQWM7RUFDaEI7O0VBRUEsOEJBQThCO0VBQzlCO0lBQ0UsY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBRUEsZUFBZTtFQUNmO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBLDBCQUEwQjtFQUMxQjtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUEsaUJBQWlCO0VBQ2pCO0lBQ0Usb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7O0VBRUEsZ0JBQWdCO0VBQ2hCO0lBQ0Usb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7O0VBRUEsb0NBQW9DO0VBQ3BDO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBLHlCQUF5QjtFQUN6QjtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUEscUJBQXFCO0VBQ3JCO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBLFVBQVU7RUFDVjtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBLCtCQUErQjtFQUMvQjtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBLHVDQUF1QztFQUN2QztJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7O0VBR0E7SUFDRSxVQUFVLEVBQUUscUNBQXFDO0lBQ2pELDBCQUEwQjtFQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIE90aGVyIGNvbnRhaW5lciBzdHlsZXMgKi9cclxuLmNhdGNoLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogUHJvZ3Jlc3Mgc3Bpbm5lciBjb2xvciAqL1xyXG4gIC5tYXQtbWRjLXByb2dyZXNzLXNwaW5uZXIge1xyXG4gICAgLS1tZGMtY2lyY3VsYXItcHJvZ3Jlc3MtYWN0aXZlLWluZGljYXRvci1jb2xvcjogIzNlYmZiOSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAvKiBSYWRpbyBidXR0b24gY29sb3JzICovXHJcbiAgLm1hdC1tZGMtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQge1xyXG4gICAgLS1tZGMtcmFkaW8tc2VsZWN0ZWQtZm9jdXMtaWNvbi1jb2xvcjogIzNlYmZiOTtcclxuICAgIC0tbWRjLXJhZGlvLXNlbGVjdGVkLWhvdmVyLWljb24tY29sb3I6ICMzZWJmYjk7XHJcbiAgICAtLW1kYy1yYWRpby1zZWxlY3RlZC1pY29uLWNvbG9yOiAjM2ViZmI5O1xyXG4gICAgLS1tZGMtcmFkaW8tc2VsZWN0ZWQtcHJlc3NlZC1pY29uLWNvbG9yOiAjM2ViZmI5O1xyXG4gICAgLS1tYXQtbWRjLXJhZGlvLWNoZWNrZWQtcmlwcGxlLWNvbG9yOiAjM2ViZmI5O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2UgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogUmFkaW8gYnV0dG9ucyAqL1xyXG4gIC5yYWRpbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEJsdWUgdGV4dCBvbiBmaW5hbCBzY3JlZW4gKi9cclxuICAuYmx1ZS1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjMDA1ZDg3O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRpdGxlIHRleHQgKi9cclxuICAuYmx1ZS1oZWFkaW5nLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMDA1ZDg3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgdHJpcCBJRCBvciB2ZXNzZWwgKi9cclxuICAuYWRkLWl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICB9XHJcbiAgXHJcbiAgLyogQmx1ZSBidXR0b25zICovXHJcbiAgLmZpc2hpbmctYnV0dG9uLWJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWQ4NyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAvKiBSZWQgYnV0dG9ucyAqL1xyXG4gIC5maXNoaW5nLWJ1dHRvbi1yZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmY2MSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsaXphdGlvbiBmb3IgdGhlIHRpbWUgcGlja2VyICovXHJcbiAgLnRpbWUtcGlja2VyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogU21hbGwgZm9udCBjb21wb25lbnQgKi9cclxuICAudGV4dC1zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAvKiBGb3IgaW5wdXQgZmllbGRzICovXHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRhYmxlICovXHJcbiAgLm1hcmdpbi10YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLXNwZWNpZXNOYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLWtlcHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWF0LWNvbHVtbi1yZWxlYXNlZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tYXQtbWRjLXJvdyAubWF0LW1kYy1jZWxsIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1tZGMtcm93OmhvdmVyIC5tYXQtbWRjLWNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB9XHJcblxyXG4gIC8qIEJsdWUgdGV4dCBmb3IgZmllbGQgbGFiZWxzICovXHJcbiAgLmJsdWUtbGFiZWwge1xyXG4gICAgY29sb3I6ICMwMDVkODc7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIH1cclxuICBcclxuICAvKiBSZWQgdGV4dCBmb3IgcmVxdWlyZWQgZmllbGQgbGFiZWxzICovXHJcbiAgLnJlZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICB9XHJcblxyXG4gIC5ib2xkZWQtY2VsbCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5mYWRlZC1jZWxsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIH1cclxuXHJcblxyXG4gIC5yZWxlYXNlLW9ubHktY2VsbCB7XHJcbiAgICBvcGFjaXR5OiAwOyAvKiBuZWVkZWQgZm9yIG1vYmlsZSBkZXZpY2Ugc3R5bGluZyAqL1xyXG4gICAgY29udGVudC12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 813:
/*!**************************************************************!*\
  !*** ./src/app/catch/seine-report/seine-report.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeineReportComponent": () => (/* binding */ SeineReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-models/catch-table-models/species-data.model */ 439);
/* harmony import */ var _dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialogs/add-species-dialog/add-species-dialog.component */ 8600);
/* harmony import */ var src_app_data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data-models/catch-table-models/table-rules.model */ 9356);
/* harmony import */ var src_app_data_models_report_models_daily_catch_report_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data-models/report-models/daily-catch-report.model */ 388);
/* harmony import */ var _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data-models/trip-models/trip.model */ 5636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 7371);




























function SeineReportComponent_h6_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate2"](" Page ", ctx_r0.currPage, " of ", ctx_r0.numPages, " ");
  }
}
function SeineReportComponent_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Seine Catch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
  }
}
function SeineReportComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](0, "mat-spinner", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("diameter", 50)("strokeWidth", 6)("value", ctx_r2.spinnerProgress);
  }
}
function SeineReportComponent_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_12_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, " Please provide the catch date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "div", 21)(7, "mat-card", 22)(8, "mat-calendar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("selectedChange", function SeineReportComponent_div_12_Template_mat_calendar_selectedChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["????resetView"](ctx_r12.catchDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "div", 2)(11, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](12, " How many hours did you spend fishing? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](13, "div", 13)(14, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](15, " Hours (round to the nearest half hour) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "mat-form-field", 25)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](18, " Hours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](19, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](20, SeineReportComponent_div_12_mat_error_20_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("selected", ctx_r4.catchDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r4.form.invalid);
  }
}
function SeineReportComponent_div_13_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_13_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_13_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, " Where did you fish? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "div", 13)(5, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6, " Management Area(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](8, " (Do not include sub-area) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](10, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](11, SeineReportComponent_div_13_mat_error_11_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "div", 13)(13, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](14, " Subarea(s) Fished ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](16, " (Comma-separate if multiple) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](18, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](19, SeineReportComponent_div_13_mat_error_19_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](20, "div", 2)(21, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](22, " How many sets did you cast? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](23, "div", 13)(24, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](25, " Number of Sets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](26, "mat-form-field", 25)(27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](28, " Number of Sets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](29, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("input", function SeineReportComponent_div_13_Template_input_input_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["????resetView"](ctx_r17.forbidNonNumeric("numSets"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](30, SeineReportComponent_div_13_mat_error_30_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r5.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r5.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r5.form.invalid);
  }
}
function SeineReportComponent_div_14_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_14_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", element_r27.speciesName, " ");
  }
}
function SeineReportComponent_div_14_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Kept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_14_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", ctx_r22.determineCellStyling(element_r28.kept));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", element_r28.kept, " ");
  }
}
function SeineReportComponent_div_14_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Released ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_14_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const element_r29 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", ctx_r24.determineCellStyling(element_r29.released));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", element_r29.released, " ");
  }
}
function SeineReportComponent_div_14_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](0, "tr", 45);
  }
}
function SeineReportComponent_div_14_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function SeineReportComponent_div_14_tr_18_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r33);
      const index_r31 = restoredCtx.index;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["????resetView"](ctx_r32.addSpeciesDialog(index_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, " Add or Edit Catch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](5, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](7, SeineReportComponent_div_14_th_7_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](8, SeineReportComponent_div_14_td_8_Template, 2, 1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](9, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](11, SeineReportComponent_div_14_th_11_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](12, SeineReportComponent_div_14_td_12_Template, 2, 2, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](13, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](15, SeineReportComponent_div_14_th_15_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](16, SeineReportComponent_div_14_td_16_Template, 2, 2, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](17, SeineReportComponent_div_14_tr_17_Template, 1, 0, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](18, SeineReportComponent_div_14_tr_18_Template, 1, 0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](19, "div", 39)(20, "h6")(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](22, " Total Fish Kept: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](24, "h6")(25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](26, " Total Fish Released: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](28, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](29, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](30, "div", 21)(31, "div", 13)(32, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function SeineReportComponent_div_14_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["????resetView"](ctx_r34.addSpeciesDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](33, " Add New Species ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](34, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("dataSource", ctx_r6.fishListDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("matHeaderRowDef", ctx_r6.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("matRowDefColumns", ctx_r6.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", ctx_r6.calculateTotalFish("kept"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", ctx_r6.calculateTotalFish("released"), " ");
  }
}
function SeineReportComponent_div_15_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const response_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", response_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", response_r40, " ");
  }
}
function SeineReportComponent_div_15_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_15_h6_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Please provide the time of capture and species details in the comments. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_15_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, " Did you catch any birds, marine mammals, or turtles? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "mat-form-field", 47)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "mat-select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](8, SeineReportComponent_div_15_mat_option_8_Template, 2, 2, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](9, SeineReportComponent_div_15_mat_error_9_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](10, SeineReportComponent_div_15_h6_10_Template, 2, 0, "h6", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "div", 2)(12, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](13, " Would you like to add a comment? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "div", 13)(15, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](16, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "mat-form-field", 51)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](19, " Comments... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](20, "textarea", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](21, SeineReportComponent_div_15_mat_error_21_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx_r7.responseOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r7.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ((tmp_2_0 = ctx_r7.form.get("nonFish")) == null ? null : tmp_2_0.value) === "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r7.form.invalid);
  }
}
function SeineReportComponent_div_16_small_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r41.form.get("hoursFished")) == null ? null : tmp_0_0.value, " ");
  }
}
function SeineReportComponent_div_16_small_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_16_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r43.form.get("mgmtArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function SeineReportComponent_div_16_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_16_small_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r45.form.get("zoneArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function SeineReportComponent_div_16_small_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_16_small_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r47.form.get("numSets")) == null ? null : tmp_0_0.value, " ");
  }
}
function SeineReportComponent_div_16_small_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_16_small_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r49.form.get("nonFish")) == null ? null : tmp_0_0.value, " ");
  }
}
function SeineReportComponent_div_16_small_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_16_small_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, " Is all information complete and ready to be submitted to DFO? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "div", 13)(5, "h6", 54)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](7, "Date Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "div", 13)(11, "h6", 54)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](13, " Hours Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](14, SeineReportComponent_div_16_small_14_Template, 2, 1, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](15, SeineReportComponent_div_16_small_15_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "div", 13)(17, "h6", 24)(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](19, "Management Area Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](20, SeineReportComponent_div_16_small_20_Template, 2, 1, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](21, SeineReportComponent_div_16_small_21_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](22, "div", 13)(23, "h6", 24)(24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](25, "Subarea(s) Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](26, SeineReportComponent_div_16_small_26_Template, 2, 1, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](27, SeineReportComponent_div_16_small_27_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](28, "div", 13)(29, "h6", 24)(30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](31, "Number of Sets:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](32, SeineReportComponent_div_16_small_32_Template, 2, 1, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](33, SeineReportComponent_div_16_small_33_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](34, "div", 13)(35, "h6", 24)(36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](37, "Total Fish Kept:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](38, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](40, "div", 13)(41, "h6", 24)(42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](43, "Total Fish Released:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](44, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](46, "div", 13)(47, "h6", 24)(48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](49, "Non-fish caught?:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](50, SeineReportComponent_div_16_small_50_Template, 2, 1, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](51, SeineReportComponent_div_16_small_51_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](52, "div", 13)(53, "h6", 24)(54, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](55, "Comments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](56, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](58, SeineReportComponent_div_16_small_58_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](9, 15, ctx_r8.catchDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !((tmp_1_0 = ctx_r8.form.get("hoursFished")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (tmp_2_0 = ctx_r8.form.get("hoursFished")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !((tmp_3_0 = ctx_r8.form.get("mgmtArea")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (tmp_4_0 = ctx_r8.form.get("mgmtArea")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !((tmp_5_0 = ctx_r8.form.get("zoneArea")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (tmp_6_0 = ctx_r8.form.get("zoneArea")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !((tmp_7_0 = ctx_r8.form.get("numSets")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (tmp_8_0 = ctx_r8.form.get("numSets")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", ctx_r8.calculateTotalFish("kept"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", ctx_r8.calculateTotalFish("released"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !((tmp_11_0 = ctx_r8.form.get("nonFish")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (tmp_12_0 = ctx_r8.form.get("nonFish")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", (tmp_13_0 = ctx_r8.form.get("comments")) == null ? null : tmp_13_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (tmp_14_0 = ctx_r8.form.get("comments")) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors.required);
  }
}
function SeineReportComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function SeineReportComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Send to DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
class SeineReportComponent {
  constructor(dialog, auth, router, onlineStatusService, toastr, localStorageService) {
    this.dialog = dialog;
    this.auth = auth;
    this.router = router;
    this.onlineStatusService = onlineStatusService;
    this.toastr = toastr;
    this.localStorageService = localStorageService;
    this.responseOptions = ['Yes', 'No']; //hardcoded values to be used in the form
    this.fishListDetails = []; // source for table data - all data currently in the table
    // data preambles
    this.catchReport = new src_app_data_models_report_models_daily_catch_report_model__WEBPACK_IMPORTED_MODULE_4__.DailyCatchReport(); // catch report we will fill out
    this.currTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_5__.Trip();
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    this.unfilteredFishList = []; // temporary array to store species contained in local storage
    this.fishList = []; // filtered list of species data, will comprise the user's look-up list
    this.seineTable = new src_app_data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_3__.TableRules(); // used to filter table data
    // values associated with each page
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({
      hoursFished: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      //page 2
      mgmtArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      zoneArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      numSets: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      //page 4
      comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      nonFish: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
    });
    this.catchDate = new Date(); //page 1 
    this.displayedColumns = []; // page 3
    // section to section
    this.numPages = 0;
    this.currPage = 0;
    this.spinnerProgress = 0;
    this.spinnerIncrement = 0;
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_9__.OnlineStatusType.OFFLINE) {
      let currID = this.localStorageService.getCurrID();
      this.userDetails = this.localStorageService.getUserByID(currID);
      this.initialize();
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              // fill trip, net, license area, net and species lists
              this.userDetails = this.localStorageService.getUser(user);
              this.initialize();
            }
          });
        } else {
          this.toastr.error("Please authenticate again", "Not authenticated");
          this.router.navigate(['login']);
        }
      });
    }
  }
  ngOnInit() {
    this.onNonFishChange();
  }
  onNonFishChange() {
    this.form.get('nonFish')?.valueChanges.subscribe(value => {
      const commentControl = this.form.get('comments');
      if (value === 'Yes') {
        commentControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
      } else {
        commentControl?.clearValidators();
      }
      commentControl?.updateValueAndValidity();
    });
  }
  // initialize the data
  initialize() {
    // get all required data
    this.currTrip = this.localStorageService.validateCurrTrip(this.userDetails.currTrip);
    this.unfilteredFishList = this.localStorageService.getSpeciesList('fishList');
    this.seineTable = this.localStorageService.getTableRules('Seine');
    this.filterTableData(); // filters table data as well as species list accessible to the user
    this.populateReport(); // populate report with data from previous daily catch report
    // fill catch page details
    let pages = 4;
    this.numPages = pages;
    this.spinnerIncrement = 100 / pages;
    this.displayedColumns = ['speciesName', 'kept', 'released'];
    // go to first screen
    this.toNextPage();
  }
  populateReport() {
    let numReports = this.currTrip.dailyCatchReports.length;
    if (numReports > 0) {
      let prevReport = this.currTrip.dailyCatchReports[numReports - 1]; // get last report
      this.form.patchValue({
        hoursFished: prevReport.hoursFished,
        mgmtArea: prevReport.managementArea,
        zoneArea: prevReport.subArea,
        numSets: prevReport.numSets,
        nonFish: prevReport.nonFish,
        comments: prevReport.comments
      });
    }
  }
  filterTableData() {
    for (let species of this.unfilteredFishList) {
      if (this.seineTable.containsSpecies.includes(species.speciesName)) {
        this.fishListDetails.push(species);
      }
      if (!this.seineTable.excludesSpecies.includes(species.speciesName)) {
        this.fishList.push(species);
      }
    }
  }
  determineCellStyling(value) {
    if (value > 0) {
      return 'bolded-cell';
    }
    return 'faded-cell';
  }
  // go to the next page
  toNextPage() {
    // page does not contain date
    if (this.currPage <= this.numPages) {
      this.incrementPage();
    }
    // page is final page
    else {
      this.sendToDFO();
    }
  }
  // go forward a page, changing the current page number and the spinner progress
  incrementPage() {
    this.currPage++;
    this.spinnerProgress += this.spinnerIncrement;
  }
  // go back to previous page
  toPreviousPage() {
    if (this.currPage === 1) {
      this.toHome();
    } else {
      this.currPage--;
      this.spinnerProgress -= this.spinnerIncrement;
    }
  }
  // update the specified species catch table
  updateTable() {
    this.table.renderRows();
  }
  calculateTotalFish(type) {
    let totalFish = 0;
    if (type === 'kept') {
      for (var i = 0; i < this.fishListDetails.length; i++) {
        totalFish += this.fishListDetails[i].kept;
      }
    } else if (type === 'released') {
      for (var i = 0; i < this.fishListDetails.length; i++) {
        totalFish += this.fishListDetails[i].released;
      }
    }
    return totalFish;
  }
  // get new species data from result
  getNewSpecies(result) {
    let kept = result.kept ? +result.kept : 0;
    let released = result.released ? +result.released : 0;
    let newSpeciesData = new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_1__.SpeciesData(result.speciesName);
    newSpeciesData.kept = kept;
    newSpeciesData.released = released;
    return newSpeciesData;
  }
  // add new species to the catch
  addSpecies(fishListDetails) {
    const dialogRef = this.dialog.open(_dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_2__.AddSpeciesDialogComponent, {
      width: '500px',
      height: '450px',
      data: {
        identifier: 'add',
        species: new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_1__.SpeciesData(''),
        currentFishList: fishListDetails,
        filteredFishList: this.fishList,
        tableInfo: this.seineTable
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // adding a species to the catch
        if (result !== 'delete') {
          fishListDetails.push(this.getNewSpecies(result));
        }
        // update the table
        this.updateTable();
      }
    });
  }
  // edit or delete a species from the catch
  editSpecies(fishListDetails, index) {
    const dialogRef = this.dialog.open(_dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_2__.AddSpeciesDialogComponent, {
      width: '500px',
      height: '450px',
      data: {
        identifier: 'edit',
        species: fishListDetails[index],
        currentFishList: fishListDetails,
        filteredFishList: this.fishList,
        tableInfo: this.seineTable
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // editing a species in the catch
        if (result !== 'delete') {
          fishListDetails[index] = this.getNewSpecies(result);
        }
        // delete a species in the catch
        else {
          fishListDetails.splice(index, 1);
        }
        // update the table
        this.updateTable();
      }
    });
  }
  // add to, edit or delete from species catch list
  addSpeciesDialog(index = -1) {
    // editing or deleting a species
    if (index > -1) {
      this.editSpecies(this.fishListDetails, index);
    }
    // adding a species
    else {
      this.addSpecies(this.fishListDetails);
    }
  }
  // send catch to DFO
  sendToDFO() {
    if (this.form.valid) {
      this.saveCatchReport();
      this.router.navigate(['submitted-report'], {
        state: {
          name: 'Daily Catch Report'
        }
      });
      return;
    }
    this.toastr.error("Not all required fields filled", "Invalid form");
  }
  // back to home screen
  toHome() {
    this.router.navigate(['active-trip-home']);
  }
  // forbid field from entering non-decimal values
  forbidNonNumeric(controlName) {
    let control = this.form.get(controlName);
    control.setValue(control.value.replace(/[^0-9]/g, ''));
  }
  // get net value
  netVal() {
    let getNet = this.form.get('net');
    if (getNet?.errors?.required) {
      return '[Required]';
    }
    return getNet?.value;
  }
  // creates a list of all species in the table that have non-zero data associated with them 
  determineSpeciesData() {
    let tempFishArray = [];
    for (let fish of this.fishListDetails) {
      if (fish.kept != 0 || fish.released != 0) {
        tempFishArray.push(fish);
      }
    }
    return tempFishArray;
  }
  // saves all Daily Catch Report information pertinent to Seine
  saveCatchReport() {
    // save relevant information gathered in the form
    this.catchReport.dateFished = this.catchDate;
    this.catchReport.hoursFished = this.form.get('hoursFished')?.value;
    this.catchReport.managementArea = this.form.get('mgmtArea')?.value;
    this.catchReport.subArea = this.form.get('zoneArea')?.value;
    this.catchReport.numSets = this.form.get('numSets')?.value;
    this.catchReport.nonFish = this.form.get('nonFish')?.value;
    this.catchReport.comments = this.form.get('comments')?.value;
    this.catchReport.speciesDataList = this.determineSpeciesData();
    // push the report to currTrip
    this.currTrip.dailyCatchReports.push(this.catchReport);
    // save currTrip to local storage
    this.userDetails.currTrip = this.currTrip;
    this.localStorageService.saveData(this.userDetails.userID, this.userDetails);
  }
}
SeineReportComponent.??fac = function SeineReportComponent_Factory(t) {
  return new (t || SeineReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_11__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_9__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__.LocalStorageService));
};
SeineReportComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({
  type: SeineReportComponent,
  selectors: [["app-seine-report"]],
  viewQuery: function SeineReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????viewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????loadQuery"]()) && (ctx.table = _t.first);
    }
  },
  decls: 31,
  vars: 12,
  consts: [[1, "container", "catch-container"], [1, "container", 2, "padding-top", "20px"], ["align", "center", 1, "row"], [4, "ngIf"], [1, "col-5"], [1, "col-2"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value", 4, "ngIf"], ["style", "color:#3ebfb9", 4, "ngIf"], [3, "formGroup"], ["class", "container", 4, "ngIf"], [1, "row", 2, "margin-top", "auto", "padding-bottom", "3%", "padding-top", "10px"], [1, "col-1"], [1, "col-4"], [1, "row"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-blue", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"], [1, "text-muted"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value"], [2, "color", "#3ebfb9"], [1, "container"], [1, "blue-heading-title"], [1, "col-8"], [1, "demo-inline-calendar-card", 2, "margin-top", "10%"], [3, "selected", "selectedChange"], [1, "blue-heading"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "inputmode", "numeric", "formControlName", "hoursFished"], ["matInput", "", "formControlName", "mgmtArea", "placeholder", "Management Area"], ["matInput", "", "formControlName", "zoneArea", "placeholder", "Subarea(s)"], ["matInput", "", "inputmode", "numeric", "formControlName", "numSets", 3, "input"], ["mat-table", "", 1, "mat-elevation-z8", "margin-table", 3, "dataSource"], ["matColumnDef", "speciesName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "kept"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "released"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "row", 2, "padding-top", "10px"], ["align", "center", 1, "row", "add-item"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-red", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["appearance", "outline", 1, "form-field", 2, "padding-top", "15px"], ["formControlName", "nonFish"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "blue-heading", 4, "ngIf"], ["appearance", "fill", 1, "form-field"], ["matInput", "", "formControlName", "comments", "rows", "9"], [3, "value"], [1, "blue-label"], ["class", "blue-label", 4, "ngIf"], ["class", "red-label", 4, "ngIf"], [1, "red-label"]],
  template: function SeineReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](3, SeineReportComponent_h6_3_Template, 3, 2, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](4, SeineReportComponent_h6_4_Template, 3, 0, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](8, SeineReportComponent_mat_spinner_8_Template, 1, 3, "mat-spinner", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](9, SeineReportComponent_mat_icon_9_Template, 2, 0, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](12, SeineReportComponent_div_12_Template, 21, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](13, SeineReportComponent_div_13_Template, 31, 3, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](14, SeineReportComponent_div_14_Template, 35, 5, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](15, SeineReportComponent_div_15_Template, 22, 4, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](16, SeineReportComponent_div_16_Template, 59, 17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](18, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](19, "div", 12)(20, "div", 13)(21, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function SeineReportComponent_Template_button_click_21_listener() {
        return ctx.toPreviousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](22, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](23, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](24, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](25, "div", 12)(26, "div", 13)(27, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function SeineReportComponent_Template_button_click_27_listener() {
        return ctx.toNextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](28, SeineReportComponent_span_28_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](29, SeineReportComponent_span_29_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](30, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage > ctx.numPages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatCalendar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatError, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelect, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
  styles: [".catch-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n  }\r\n  \r\n  \r\n  .mat-mdc-progress-spinner[_ngcontent-%COMP%] {\r\n    --mdc-circular-progress-active-indicator-color: #3ebfb9 !important;\r\n  }\r\n  \r\n  \r\n  .mat-mdc-radio-button.mat-accent[_ngcontent-%COMP%] {\r\n    --mdc-radio-selected-focus-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-hover-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-pressed-icon-color: #3ebfb9;\r\n    --mat-mdc-radio-checked-ripple-color: #3ebfb9;\r\n  }\r\n  \r\n    .mat-mdc-text-field-wrapper {\r\n    background-color: whitesmoke !important;\r\n  }\r\n  \r\n  \r\n  .radio[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    margin-top: 1%;\r\n  }\r\n  \r\n  \r\n  .blue-heading[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n  }\r\n  \r\n  \r\n  .blue-heading-title[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    font-weight: bold;\r\n    margin-top: 5%;\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  \r\n  .add-item[_ngcontent-%COMP%] {\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  \r\n  .fishing-button-blue[_ngcontent-%COMP%] {\r\n    background-color: #005d87 !important;\r\n    color: white !important;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  \r\n  .fishing-button-red[_ngcontent-%COMP%] {\r\n    background-color: #ff6f61 !important;\r\n    color: white !important;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  \r\n  .time-picker[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n  \r\n  \r\n  .text-small[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .form-field[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .margin-table[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  .mat-column-speciesName[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    border-right: 1px solid;\r\n  }\r\n\r\n  .mat-column-kept[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n  .mat-column-released[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n  .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid;\r\n    border-top: 1px solid;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n    background-color: whitesmoke;\r\n  }\r\n\r\n  \r\n  .blue-label[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n    font-size: medium;\r\n  }\r\n  \r\n  \r\n  .red-label[_ngcontent-%COMP%] {\r\n    color: red;\r\n    margin-top: 5%;\r\n    font-size: medium;\r\n  }\r\n\r\n  .bolded-cell[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .faded-cell[_ngcontent-%COMP%] {\r\n    font-weight: lighter;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2F0Y2gvc2VpbmUtcmVwb3J0L3NlaW5lLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBLDJCQUEyQjtFQUMzQjtJQUNFLGtFQUFrRTtFQUNwRTs7RUFFQSx3QkFBd0I7RUFDeEI7SUFDRSw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHdDQUF3QztJQUN4QyxnREFBZ0Q7SUFDaEQsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsdUNBQXVDO0VBQ3pDOztFQUVBLGtCQUFrQjtFQUNsQjtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGNBQWM7RUFDaEI7O0VBRUEsOEJBQThCO0VBQzlCO0lBQ0UsY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBRUEsZUFBZTtFQUNmO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBLDBCQUEwQjtFQUMxQjtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUEsaUJBQWlCO0VBQ2pCO0lBQ0Usb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7O0VBRUEsZ0JBQWdCO0VBQ2hCO0lBQ0Usb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7O0VBRUEsb0NBQW9DO0VBQ3BDO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBLHlCQUF5QjtFQUN6QjtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUEscUJBQXFCO0VBQ3JCO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBLFVBQVU7RUFDVjtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBLCtCQUErQjtFQUMvQjtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBLHVDQUF1QztFQUN2QztJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIE90aGVyIGNvbnRhaW5lciBzdHlsZXMgKi9cclxuLmNhdGNoLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogUHJvZ3Jlc3Mgc3Bpbm5lciBjb2xvciAqL1xyXG4gIC5tYXQtbWRjLXByb2dyZXNzLXNwaW5uZXIge1xyXG4gICAgLS1tZGMtY2lyY3VsYXItcHJvZ3Jlc3MtYWN0aXZlLWluZGljYXRvci1jb2xvcjogIzNlYmZiOSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAvKiBSYWRpbyBidXR0b24gY29sb3JzICovXHJcbiAgLm1hdC1tZGMtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQge1xyXG4gICAgLS1tZGMtcmFkaW8tc2VsZWN0ZWQtZm9jdXMtaWNvbi1jb2xvcjogIzNlYmZiOTtcclxuICAgIC0tbWRjLXJhZGlvLXNlbGVjdGVkLWhvdmVyLWljb24tY29sb3I6ICMzZWJmYjk7XHJcbiAgICAtLW1kYy1yYWRpby1zZWxlY3RlZC1pY29uLWNvbG9yOiAjM2ViZmI5O1xyXG4gICAgLS1tZGMtcmFkaW8tc2VsZWN0ZWQtcHJlc3NlZC1pY29uLWNvbG9yOiAjM2ViZmI5O1xyXG4gICAgLS1tYXQtbWRjLXJhZGlvLWNoZWNrZWQtcmlwcGxlLWNvbG9yOiAjM2ViZmI5O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2UgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogUmFkaW8gYnV0dG9ucyAqL1xyXG4gIC5yYWRpbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEJsdWUgdGV4dCBvbiBmaW5hbCBzY3JlZW4gKi9cclxuICAuYmx1ZS1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjMDA1ZDg3O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRpdGxlIHRleHQgKi9cclxuICAuYmx1ZS1oZWFkaW5nLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMDA1ZDg3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgdHJpcCBJRCBvciB2ZXNzZWwgKi9cclxuICAuYWRkLWl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICB9XHJcbiAgXHJcbiAgLyogQmx1ZSBidXR0b25zICovXHJcbiAgLmZpc2hpbmctYnV0dG9uLWJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWQ4NyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAvKiBSZWQgYnV0dG9ucyAqL1xyXG4gIC5maXNoaW5nLWJ1dHRvbi1yZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmY2MSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsaXphdGlvbiBmb3IgdGhlIHRpbWUgcGlja2VyICovXHJcbiAgLnRpbWUtcGlja2VyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogU21hbGwgZm9udCBjb21wb25lbnQgKi9cclxuICAudGV4dC1zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAvKiBGb3IgaW5wdXQgZmllbGRzICovXHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRhYmxlICovXHJcbiAgLm1hcmdpbi10YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLXNwZWNpZXNOYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLWtlcHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWF0LWNvbHVtbi1yZWxlYXNlZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tYXQtbWRjLXJvdyAubWF0LW1kYy1jZWxsIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1tZGMtcm93OmhvdmVyIC5tYXQtbWRjLWNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB9XHJcblxyXG4gIC8qIEJsdWUgdGV4dCBmb3IgZmllbGQgbGFiZWxzICovXHJcbiAgLmJsdWUtbGFiZWwge1xyXG4gICAgY29sb3I6ICMwMDVkODc7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIH1cclxuICBcclxuICAvKiBSZWQgdGV4dCBmb3IgcmVxdWlyZWQgZmllbGQgbGFiZWxzICovXHJcbiAgLnJlZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICB9XHJcblxyXG4gIC5ib2xkZWQtY2VsbCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5mYWRlZC1jZWxsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 711:
/*!**************************************************************!*\
  !*** ./src/app/catch/troll-report/troll-report.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrollReportComponent": () => (/* binding */ TrollReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-models/catch-table-models/species-data.model */ 439);
/* harmony import */ var _dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialogs/add-species-dialog/add-species-dialog.component */ 8600);
/* harmony import */ var src_app_data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data-models/catch-table-models/table-rules.model */ 9356);
/* harmony import */ var src_app_data_models_report_models_daily_catch_report_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data-models/report-models/daily-catch-report.model */ 388);
/* harmony import */ var _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data-models/trip-models/trip.model */ 5636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 7371);




























function TrollReportComponent_h6_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate2"](" Page ", ctx_r0.currPage, " of ", ctx_r0.numPages, " ");
  }
}
function TrollReportComponent_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Troll Catch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
  }
}
function TrollReportComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](0, "mat-spinner", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("diameter", 50)("strokeWidth", 6)("value", ctx_r2.spinnerProgress);
  }
}
function TrollReportComponent_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_12_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, " Please provide the catch date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "div", 21)(7, "mat-card", 22)(8, "mat-calendar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("selectedChange", function TrollReportComponent_div_12_Template_mat_calendar_selectedChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["????resetView"](ctx_r12.catchDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "div", 2)(11, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](12, " How many hours did you spend fishing? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](13, "div", 13)(14, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](15, " Hours (round to the nearest half hour) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "mat-form-field", 25)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](18, " Hours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](19, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](20, TrollReportComponent_div_12_mat_error_20_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("selected", ctx_r4.catchDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r4.form.invalid);
  }
}
function TrollReportComponent_div_13_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_13_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_13_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const state_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", state_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", state_r18, " ");
  }
}
function TrollReportComponent_div_13_mat_error_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, " Where did you fish? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "div", 13)(5, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6, " Management Area(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](8, " (Do not include sub-area) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](10, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](11, TrollReportComponent_div_13_mat_error_11_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "div", 13)(13, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](14, " Zone(s) or Subarea(s) Fished ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](16, " (Use zones for areas 121-127; comma-separate if multiple) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](18, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](19, TrollReportComponent_div_13_mat_error_19_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](20, "div", 2)(21, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](22, " Frozen or Iced? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](23, "div", 13)(24, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](25, " Frozen or Iced ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](26, "mat-form-field", 25)(27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](28, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](29, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](30, TrollReportComponent_div_13_mat_option_30_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](31, TrollReportComponent_div_13_mat_error_31_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r5.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r5.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx_r5.stateOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r5.form.invalid);
  }
}
function TrollReportComponent_div_14_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_14_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", element_r27.speciesName, " ");
  }
}
function TrollReportComponent_div_14_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Kept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_14_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", ctx_r22.determineCellStyling(element_r28.kept, element_r28.speciesName));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", element_r28.kept, " ");
  }
}
function TrollReportComponent_div_14_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Released ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_14_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const element_r29 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", ctx_r24.determineCellStyling(element_r29.released));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", element_r29.released, " ");
  }
}
function TrollReportComponent_div_14_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](0, "tr", 47);
  }
}
function TrollReportComponent_div_14_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function TrollReportComponent_div_14_tr_18_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r33);
      const index_r31 = restoredCtx.index;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["????resetView"](ctx_r32.addSpeciesDialog(index_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, " Add or Edit Catch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](5, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](7, TrollReportComponent_div_14_th_7_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](8, TrollReportComponent_div_14_td_8_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](9, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](11, TrollReportComponent_div_14_th_11_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](12, TrollReportComponent_div_14_td_12_Template, 2, 2, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](13, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](15, TrollReportComponent_div_14_th_15_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](16, TrollReportComponent_div_14_td_16_Template, 2, 2, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](17, TrollReportComponent_div_14_tr_17_Template, 1, 0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](18, TrollReportComponent_div_14_tr_18_Template, 1, 0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](19, "div", 41)(20, "h6")(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](22, " Total Fish Kept: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](24, "h6")(25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](26, " Total Fish Released: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](28, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](29, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](30, "div", 21)(31, "div", 13)(32, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function TrollReportComponent_div_14_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["????resetView"](ctx_r34.addSpeciesDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](33, " Add New Species ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](34, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("dataSource", ctx_r6.fishListDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("matHeaderRowDef", ctx_r6.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("matRowDefColumns", ctx_r6.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", ctx_r6.calculateTotalFish("kept"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", ctx_r6.calculateTotalFish("released"), " ");
  }
}
function TrollReportComponent_div_15_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const response_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", response_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", response_r40, " ");
  }
}
function TrollReportComponent_div_15_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_15_h6_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Please provide the time of capture and species details in the comments. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_15_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, " Did you catch any birds, marine mammals, or turtles? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "mat-form-field", 49)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "mat-select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](8, TrollReportComponent_div_15_mat_option_8_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](9, TrollReportComponent_div_15_mat_error_9_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](10, TrollReportComponent_div_15_h6_10_Template, 2, 0, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "div", 2)(12, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](13, " Would you like to add a comment? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "div", 13)(15, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](16, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "mat-form-field", 52)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](19, " Comments... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](20, "textarea", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](21, TrollReportComponent_div_15_mat_error_21_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx_r7.responseOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r7.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ((tmp_2_0 = ctx_r7.form.get("nonFish")) == null ? null : tmp_2_0.value) === "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r7.form.invalid);
  }
}
function TrollReportComponent_div_16_small_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r41.form.get("hoursFished")) == null ? null : tmp_0_0.value, " ");
  }
}
function TrollReportComponent_div_16_small_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_16_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r43.form.get("mgmtArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function TrollReportComponent_div_16_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_16_small_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r45.form.get("zoneArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function TrollReportComponent_div_16_small_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_16_small_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r47.form.get("frozenOrIced")) == null ? null : tmp_0_0.value, " ");
  }
}
function TrollReportComponent_div_16_small_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_16_small_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r49.form.get("nonFish")) == null ? null : tmp_0_0.value, " ");
  }
}
function TrollReportComponent_div_16_small_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_16_small_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, " Is all information complete and ready to be submitted to DFO? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "div", 13)(5, "h6", 54)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](7, "Date Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "div", 13)(11, "h6", 54)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](13, " Hours Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](14, TrollReportComponent_div_16_small_14_Template, 2, 1, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](15, TrollReportComponent_div_16_small_15_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "div", 13)(17, "h6", 24)(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](19, "Management Area Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](20, TrollReportComponent_div_16_small_20_Template, 2, 1, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](21, TrollReportComponent_div_16_small_21_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](22, "div", 13)(23, "h6", 24)(24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](25, "Zone(s) or Subarea(s) Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](26, TrollReportComponent_div_16_small_26_Template, 2, 1, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](27, TrollReportComponent_div_16_small_27_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](28, "div", 13)(29, "h6", 24)(30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](31, "Frozen or Iced?:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](32, TrollReportComponent_div_16_small_32_Template, 2, 1, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](33, TrollReportComponent_div_16_small_33_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](34, "div", 13)(35, "h6", 24)(36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](37, "Total Fish Kept:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](38, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](40, "div", 13)(41, "h6", 24)(42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](43, "Total Fish Released:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](44, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](46, "div", 13)(47, "h6", 24)(48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](49, "Non-fish caught?:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](50, TrollReportComponent_div_16_small_50_Template, 2, 1, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](51, TrollReportComponent_div_16_small_51_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](52, "div", 13)(53, "h6", 24)(54, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](55, "Comments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](56, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](58, TrollReportComponent_div_16_small_58_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](9, 15, ctx_r8.catchDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !((tmp_1_0 = ctx_r8.form.get("hoursFished")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (tmp_2_0 = ctx_r8.form.get("hoursFished")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !((tmp_3_0 = ctx_r8.form.get("mgmtArea")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (tmp_4_0 = ctx_r8.form.get("mgmtArea")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !((tmp_5_0 = ctx_r8.form.get("zoneArea")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (tmp_6_0 = ctx_r8.form.get("zoneArea")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !((tmp_7_0 = ctx_r8.form.get("frozenOrIced")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (tmp_8_0 = ctx_r8.form.get("frozenOrIced")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", ctx_r8.calculateTotalFish("kept"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", ctx_r8.calculateTotalFish("released"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !((tmp_11_0 = ctx_r8.form.get("nonFish")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (tmp_12_0 = ctx_r8.form.get("nonFish")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", (tmp_13_0 = ctx_r8.form.get("comments")) == null ? null : tmp_13_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (tmp_14_0 = ctx_r8.form.get("comments")) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors.required);
  }
}
function TrollReportComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
function TrollReportComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Send to DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
  }
}
class TrollReportComponent {
  constructor(dialog, auth, router, onlineStatusService, toastr, localStorageService) {
    this.dialog = dialog;
    this.auth = auth;
    this.router = router;
    this.onlineStatusService = onlineStatusService;
    this.toastr = toastr;
    this.localStorageService = localStorageService;
    //hardcoded values to be used in the form
    this.responseOptions = ['Yes', 'No'];
    this.stateOptions = ['Frozen', 'Iced'];
    this.fishListDetails = []; // source for table data - all data currently in the table
    this.trollTable = new src_app_data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_3__.TableRules(); // used to filter table data
    // data preambles
    this.catchReport = new src_app_data_models_report_models_daily_catch_report_model__WEBPACK_IMPORTED_MODULE_4__.DailyCatchReport(); // catch report we will fill out
    this.currTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_5__.Trip();
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    this.unfilteredFishList = []; // temporary array to store species contained in local storage
    this.fishList = []; //filtered list of species data, will comprise the user's look-up list
    // values associated with each page
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({
      hoursFished: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      //page 2
      mgmtArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      zoneArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      frozenOrIced: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      //page 4
      comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      nonFish: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
    });
    this.catchDate = new Date(); //page 1 
    this.displayedColumns = []; // page 3
    // section to section
    this.numPages = 0;
    this.currPage = 0;
    this.spinnerProgress = 0;
    this.spinnerIncrement = 0;
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_9__.OnlineStatusType.OFFLINE) {
      let currID = this.localStorageService.getCurrID();
      this.userDetails = this.localStorageService.getUserByID(currID);
      this.initialize();
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              // fill trip, net, license area, net and species lists
              this.userDetails = this.localStorageService.getUser(user);
              this.initialize();
            }
          });
        } else {
          this.toastr.error("Please authenticate again", "Not authenticated");
          this.router.navigate(['login']);
        }
      });
    }
  }
  ngOnInit() {
    this.onNonFishChange();
  }
  onNonFishChange() {
    this.form.get('nonFish')?.valueChanges.subscribe(value => {
      const commentControl = this.form.get('comments');
      if (value === 'Yes') {
        commentControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
      } else {
        commentControl?.clearValidators();
      }
      commentControl?.updateValueAndValidity();
    });
  }
  // initialize the data
  initialize() {
    // get all required data
    this.currTrip = this.localStorageService.validateCurrTrip(this.userDetails.currTrip);
    this.unfilteredFishList = this.localStorageService.getSpeciesList('fishList');
    this.trollTable = this.localStorageService.getTableRules('Troll');
    this.filterTableData(); //gets data to fill the table (subset of fishList)
    this.populateReport(); // populate report with data from previous daily catch report
    // fill catch page details
    let pages = 4;
    this.numPages = pages;
    this.spinnerIncrement = 100 / pages;
    this.displayedColumns = ['speciesName', 'kept', 'released'];
    // go to first screen
    this.toNextPage();
  }
  populateReport() {
    let numReports = this.currTrip.dailyCatchReports.length;
    if (numReports > 0) {
      let prevReport = this.currTrip.dailyCatchReports[numReports - 1]; // get last report
      this.form.patchValue({
        hoursFished: prevReport.hoursFished,
        mgmtArea: prevReport.managementArea,
        zoneArea: prevReport.subArea,
        frozenOrIced: prevReport.frozenOrIced,
        nonFish: prevReport.nonFish,
        comments: prevReport.comments
      });
    }
  }
  filterTableData() {
    for (let species of this.unfilteredFishList) {
      if (this.trollTable.containsSpecies.includes(species.speciesName)) {
        this.fishListDetails.push(species);
      }
      if (!this.trollTable.excludesSpecies.includes(species.speciesName)) {
        this.fishList.push(species);
      }
    }
  }
  determineCellStyling(value, name = '') {
    if (value > 0) {
      return 'bolded-cell';
    } else if (this.isReleaseOnly(name)) {
      return 'release-only-cell';
    }
    return 'faded-cell';
  }
  isReleaseOnly(name) {
    if (this.trollTable.releaseOnlySpecies.includes(name)) {
      return true;
    }
    return false;
  }
  // go to the next page
  toNextPage() {
    // page does not contain date
    if (this.currPage <= this.numPages) {
      this.incrementPage();
    }
    // page is final page
    else {
      this.sendToDFO();
    }
  }
  // go forward a page, changing the current page number and the spinner progress
  incrementPage() {
    this.currPage++;
    this.spinnerProgress += this.spinnerIncrement;
  }
  // go back to previous page
  toPreviousPage() {
    if (this.currPage === 1) {
      this.toHome();
    } else {
      this.currPage--;
      this.spinnerProgress -= this.spinnerIncrement;
    }
  }
  // update the specified species catch table
  updateTable() {
    this.table.renderRows();
  }
  calculateTotalFish(type) {
    let totalFish = 0;
    if (type === 'kept') {
      for (var i = 0; i < this.fishListDetails.length; i++) {
        totalFish += this.fishListDetails[i].kept;
      }
    } else if (type === 'released') {
      for (var i = 0; i < this.fishListDetails.length; i++) {
        totalFish += this.fishListDetails[i].released;
      }
    }
    return totalFish;
  }
  // get new species data from result
  getNewSpecies(result) {
    let kept = result.kept ? +result.kept : 0;
    let released = result.released ? +result.released : 0;
    let newSpeciesData = new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_1__.SpeciesData(result.speciesName);
    newSpeciesData.kept = kept;
    newSpeciesData.released = released;
    return newSpeciesData;
  }
  // add new species to the catch
  addSpecies(fishListDetails) {
    const dialogRef = this.dialog.open(_dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_2__.AddSpeciesDialogComponent, {
      width: '500px',
      height: '450px',
      data: {
        identifier: 'add',
        species: new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_1__.SpeciesData(''),
        currentFishList: fishListDetails,
        filteredFishList: this.fishList,
        tableInfo: this.trollTable
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // adding a species to the catch
        if (result !== 'delete') {
          fishListDetails.push(this.getNewSpecies(result));
        }
        // update the table
        this.updateTable();
      }
    });
  }
  // edit or delete a species from the catch
  editSpecies(fishListDetails, index) {
    const dialogRef = this.dialog.open(_dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_2__.AddSpeciesDialogComponent, {
      width: '500px',
      height: '450px',
      data: {
        identifier: 'edit',
        species: fishListDetails[index],
        currentFishList: fishListDetails,
        filteredFishList: this.fishList,
        tableInfo: this.trollTable
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // editing a species in the catch
        if (result !== 'delete') {
          fishListDetails[index] = this.getNewSpecies(result);
        }
        // delete a species in the catch
        else {
          fishListDetails.splice(index, 1);
        }
        // update the table
        this.updateTable();
      }
    });
  }
  // add to, edit or delete from species catch list
  addSpeciesDialog(index = -1) {
    // editing or deleting a species
    if (index > -1) {
      this.editSpecies(this.fishListDetails, index);
    }
    // adding a species
    else {
      this.addSpecies(this.fishListDetails);
    }
  }
  // send catch to DFO
  sendToDFO() {
    if (this.form.valid) {
      this.saveCatchReport();
      this.router.navigate(['submitted-report'], {
        state: {
          name: 'Daily Catch Report'
        }
      });
      return;
    }
    this.toastr.error("Not all required fields filled", "Invalid form");
  }
  // back to home screen
  toHome() {
    this.router.navigate(['active-trip-home']);
  }
  // forbid field from entering non-decimal values
  forbidNonNumeric(controlName) {
    let control = this.form.get(controlName);
    control.setValue(control.value.replace(/[^0-9]/g, ''));
  }
  // get net value
  netVal() {
    let getNet = this.form.get('net');
    if (getNet?.errors?.required) {
      return '[Required]';
    }
    return getNet?.value;
  }
  // creates a list of all species in the table that have non-zero data associated with them 
  determineSpeciesData() {
    let tempFishArray = [];
    for (let fish of this.fishListDetails) {
      if (fish.kept != 0 || fish.released != 0) {
        tempFishArray.push(fish);
      }
    }
    return tempFishArray;
  }
  // saves all Daily Catch Report information pertinent to Troll
  saveCatchReport() {
    // save relevant information gathered in the form
    this.catchReport.dateFished = this.catchDate;
    this.catchReport.hoursFished = this.form.get('hoursFished')?.value;
    this.catchReport.managementArea = this.form.get('mgmtArea')?.value;
    this.catchReport.subArea = this.form.get('zoneArea')?.value;
    this.catchReport.frozenOrIced = this.form.get('frozenOrIced')?.value;
    this.catchReport.nonFish = this.form.get('nonFish')?.value;
    this.catchReport.comments = this.form.get('comments')?.value;
    this.catchReport.speciesDataList = this.determineSpeciesData();
    // push the report to currTrip
    this.currTrip.dailyCatchReports.push(this.catchReport);
    // save currTrip to local storage
    this.userDetails.currTrip = this.currTrip;
    this.localStorageService.saveData(this.userDetails.userID, this.userDetails);
  }
}
TrollReportComponent.??fac = function TrollReportComponent_Factory(t) {
  return new (t || TrollReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_11__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_9__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__.LocalStorageService));
};
TrollReportComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({
  type: TrollReportComponent,
  selectors: [["app-troll-report"]],
  viewQuery: function TrollReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????viewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????loadQuery"]()) && (ctx.table = _t.first);
    }
  },
  decls: 31,
  vars: 12,
  consts: [[1, "container", "catch-container"], [1, "container", 2, "padding-top", "20px"], ["align", "center", 1, "row"], [4, "ngIf"], [1, "col-5"], [1, "col-2"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value", 4, "ngIf"], ["style", "color:#3ebfb9", 4, "ngIf"], [3, "formGroup"], ["class", "container", 4, "ngIf"], [1, "row", 2, "margin-top", "auto", "padding-bottom", "3%", "padding-top", "10px"], [1, "col-1"], [1, "col-4"], [1, "row"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-blue", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"], [1, "text-muted"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value"], [2, "color", "#3ebfb9"], [1, "container"], [1, "blue-heading-title"], [1, "col-8"], [1, "demo-inline-calendar-card", 2, "margin-top", "10%"], [3, "selected", "selectedChange"], [1, "blue-heading"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "inputmode", "numeric", "formControlName", "hoursFished"], ["matInput", "", "formControlName", "mgmtArea", "placeholder", "Management Area"], ["matInput", "", "formControlName", "zoneArea", "placeholder", "Zone(s) or Subarea(s)"], ["formControlName", "frozenOrIced"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-table", "", 1, "mat-elevation-z8", "margin-table", 3, "dataSource"], ["matColumnDef", "speciesName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "kept"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "released"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "row", 2, "padding-top", "10px"], ["align", "center", 1, "row", "add-item"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-red", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["appearance", "outline", 1, "form-field", 2, "padding-top", "15px"], ["formControlName", "nonFish"], ["class", "blue-heading", 4, "ngIf"], ["appearance", "fill", 1, "form-field"], ["matInput", "", "formControlName", "comments", "rows", "9"], [1, "blue-label"], ["class", "blue-label", 4, "ngIf"], ["class", "red-label", 4, "ngIf"], [1, "red-label"]],
  template: function TrollReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](3, TrollReportComponent_h6_3_Template, 3, 2, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](4, TrollReportComponent_h6_4_Template, 3, 0, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](8, TrollReportComponent_mat_spinner_8_Template, 1, 3, "mat-spinner", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](9, TrollReportComponent_mat_icon_9_Template, 2, 0, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](12, TrollReportComponent_div_12_Template, 21, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](13, TrollReportComponent_div_13_Template, 32, 4, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](14, TrollReportComponent_div_14_Template, 35, 5, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](15, TrollReportComponent_div_15_Template, 22, 4, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](16, TrollReportComponent_div_16_Template, 59, 17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](18, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](19, "div", 12)(20, "div", 13)(21, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function TrollReportComponent_Template_button_click_21_listener() {
        return ctx.toPreviousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](22, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](23, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](24, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](25, "div", 12)(26, "div", 13)(27, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function TrollReportComponent_Template_button_click_27_listener() {
        return ctx.toNextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](28, TrollReportComponent_span_28_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](29, TrollReportComponent_span_29_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](30, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currPage > ctx.numPages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatCalendar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatError, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelect, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
  styles: [".catch-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n  }\r\n  \r\n  \r\n  .mat-mdc-progress-spinner[_ngcontent-%COMP%] {\r\n    --mdc-circular-progress-active-indicator-color: #3ebfb9 !important;\r\n  }\r\n  \r\n  \r\n  .mat-mdc-radio-button.mat-accent[_ngcontent-%COMP%] {\r\n    --mdc-radio-selected-focus-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-hover-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-pressed-icon-color: #3ebfb9;\r\n    --mat-mdc-radio-checked-ripple-color: #3ebfb9;\r\n  }\r\n  \r\n    .mat-mdc-text-field-wrapper {\r\n    background-color: whitesmoke !important;\r\n  }\r\n  \r\n  \r\n  .radio[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    margin-top: 1%;\r\n  }\r\n  \r\n  \r\n  .blue-heading[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n  }\r\n  \r\n  \r\n  .blue-heading-title[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    font-weight: bold;\r\n    margin-top: 5%;\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  \r\n  .add-item[_ngcontent-%COMP%] {\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  \r\n  .fishing-button-blue[_ngcontent-%COMP%] {\r\n    background-color: #005d87 !important;\r\n    color: white !important;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  \r\n  .fishing-button-red[_ngcontent-%COMP%] {\r\n    background-color: #ff6f61 !important;\r\n    color: white !important;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  \r\n  .time-picker[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n  \r\n  \r\n  .text-small[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .form-field[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .margin-table[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  .mat-column-speciesName[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    border-right: 1px solid;\r\n  }\r\n\r\n  .mat-column-kept[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n  .mat-column-released[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n  .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid;\r\n    border-top: 1px solid;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n    background-color: whitesmoke;\r\n  }\r\n\r\n  \r\n  .blue-label[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n    font-size: medium;\r\n  }\r\n  \r\n  \r\n  .red-label[_ngcontent-%COMP%] {\r\n    color: red;\r\n    margin-top: 5%;\r\n    font-size: medium;\r\n  }\r\n\r\n  .bolded-cell[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .faded-cell[_ngcontent-%COMP%] {\r\n    font-weight: lighter;\r\n  }\r\n\r\n  .release-only-cell[_ngcontent-%COMP%] {\r\n    opacity: 0;  \r\n    content-visibility: hidden;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2F0Y2gvdHJvbGwtcmVwb3J0L3Ryb2xsLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBLDJCQUEyQjtFQUMzQjtJQUNFLGtFQUFrRTtFQUNwRTs7RUFFQSx3QkFBd0I7RUFDeEI7SUFDRSw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHdDQUF3QztJQUN4QyxnREFBZ0Q7SUFDaEQsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsdUNBQXVDO0VBQ3pDOztFQUVBLGtCQUFrQjtFQUNsQjtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGNBQWM7RUFDaEI7O0VBRUEsOEJBQThCO0VBQzlCO0lBQ0UsY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBRUEsZUFBZTtFQUNmO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBLDBCQUEwQjtFQUMxQjtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUEsaUJBQWlCO0VBQ2pCO0lBQ0Usb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7O0VBRUEsZ0JBQWdCO0VBQ2hCO0lBQ0Usb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7O0VBRUEsb0NBQW9DO0VBQ3BDO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBLHlCQUF5QjtFQUN6QjtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUEscUJBQXFCO0VBQ3JCO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBLFVBQVU7RUFDVjtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBLCtCQUErQjtFQUMvQjtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBLHVDQUF1QztFQUN2QztJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFVBQVUsR0FBRyxxQ0FBcUM7SUFDbEQsMEJBQTBCO0VBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLyogT3RoZXIgY29udGFpbmVyIHN0eWxlcyAqL1xyXG4uY2F0Y2gtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAvKiBQcm9ncmVzcyBzcGlubmVyIGNvbG9yICovXHJcbiAgLm1hdC1tZGMtcHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcbiAgICAtLW1kYy1jaXJjdWxhci1wcm9ncmVzcy1hY3RpdmUtaW5kaWNhdG9yLWNvbG9yOiAjM2ViZmI5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJhZGlvIGJ1dHRvbiBjb2xvcnMgKi9cclxuICAubWF0LW1kYy1yYWRpby1idXR0b24ubWF0LWFjY2VudCB7XHJcbiAgICAtLW1kYy1yYWRpby1zZWxlY3RlZC1mb2N1cy1pY29uLWNvbG9yOiAjM2ViZmI5O1xyXG4gICAgLS1tZGMtcmFkaW8tc2VsZWN0ZWQtaG92ZXItaWNvbi1jb2xvcjogIzNlYmZiOTtcclxuICAgIC0tbWRjLXJhZGlvLXNlbGVjdGVkLWljb24tY29sb3I6ICMzZWJmYjk7XHJcbiAgICAtLW1kYy1yYWRpby1zZWxlY3RlZC1wcmVzc2VkLWljb24tY29sb3I6ICMzZWJmYjk7XHJcbiAgICAtLW1hdC1tZGMtcmFkaW8tY2hlY2tlZC1yaXBwbGUtY29sb3I6ICMzZWJmYjk7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAvKiBSYWRpbyBidXR0b25zICovXHJcbiAgLnJhZGlvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICB9XHJcbiAgXHJcbiAgLyogQmx1ZSB0ZXh0IG9uIGZpbmFsIHNjcmVlbiAqL1xyXG4gIC5ibHVlLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICMwMDVkODc7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLyogVGl0bGUgdGV4dCAqL1xyXG4gIC5ibHVlLWhlYWRpbmctdGl0bGUge1xyXG4gICAgY29sb3I6ICMwMDVkODc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCB0cmlwIElEIG9yIHZlc3NlbCAqL1xyXG4gIC5hZGQtaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIH1cclxuICBcclxuICAvKiBCbHVlIGJ1dHRvbnMgKi9cclxuICAuZmlzaGluZy1idXR0b24tYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZDg3ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlZCBidXR0b25zICovXHJcbiAgLmZpc2hpbmctYnV0dG9uLXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2ZjYxICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxpemF0aW9uIGZvciB0aGUgdGltZSBwaWNrZXIgKi9cclxuICAudGltZS1waWNrZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBTbWFsbCBmb250IGNvbXBvbmVudCAqL1xyXG4gIC50ZXh0LXNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZvciBpbnB1dCBmaWVsZHMgKi9cclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLyogVGFibGUgKi9cclxuICAubWFyZ2luLXRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jb2x1bW4tc3BlY2llc05hbWV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jb2x1bW4ta2VwdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLXJlbGVhc2Vke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1tZGMtcm93IC5tYXQtbWRjLWNlbGwge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAubWF0LW1kYy1yb3c6aG92ZXIgLm1hdC1tZGMtY2VsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuXHJcbiAgLyogQmx1ZSB0ZXh0IGZvciBmaWVsZCBsYWJlbHMgKi9cclxuICAuYmx1ZS1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlZCB0ZXh0IGZvciByZXF1aXJlZCBmaWVsZCBsYWJlbHMgKi9cclxuICAucmVkLWxhYmVsIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIH1cclxuXHJcbiAgLmJvbGRlZC1jZWxsIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmZhZGVkLWNlbGwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgfVxyXG5cclxuICAucmVsZWFzZS1vbmx5LWNlbGwge1xyXG4gICAgb3BhY2l0eTogMDsgIC8qIG5lZWRlZCBmb3IgbW9iaWxlIGRldmljZSBzdHlsaW5nICovXHJcbiAgICBjb250ZW50LXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 439:
/*!**********************************************************************!*\
  !*** ./src/app/data-models/catch-table-models/species-data.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeciesData": () => (/* binding */ SpeciesData)
/* harmony export */ });
class SpeciesData {
  constructor(speciesName) {
    this.speciesName = '';
    /* Fields for daily catch reports */
    this.kept = 0;
    this.released = 0;
    /* Fields for offload catch reports */
    this.offloadWeight = 0;
    this.weightUnits = '';
    this.offloadPieces = 0;
    this.speciesName = speciesName;
  }
  toString() {
    return this.speciesName;
  }
  isValid() {
    return this.speciesName != '' && this.kept >= 0 && this.released >= 0;
  }
}

/***/ }),

/***/ 9356:
/*!*********************************************************************!*\
  !*** ./src/app/data-models/catch-table-models/table-rules.model.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableRules": () => (/* binding */ TableRules)
/* harmony export */ });
class TableRules {
  constructor(type = '', name = '') {
    this.tableType = '';
    this.gearName = '';
    this.containsSpecies = [];
    this.excludesSpecies = [];
    this.releaseOnlySpecies = [];
    this.gearName = name;
    this.tableType = type;
  }
  isValid() {
    return this.gearName != '' && this.containsSpecies.length > 0;
  }
}

/***/ }),

/***/ 388:
/*!***********************************************************************!*\
  !*** ./src/app/data-models/report-models/daily-catch-report.model.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyCatchReport": () => (/* binding */ DailyCatchReport)
/* harmony export */ });
/* harmony import */ var _trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trip-models/gear-models/net.model */ 786);

class DailyCatchReport {
  constructor() {
    this.netUsed = new _trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_0__.Net('', '', '', '', '', '', '', '', ''); // unique to Gill Net
    this.dateFished = new Date();
    this.hoursFished = '';
    this.managementArea = '';
    this.subArea = '';
    this.numSets = ''; // unique to Gill Net & Seine
    this.frozenOrIced = ''; // unqique to Troll
    this.speciesDataList = []; // catch data
    this.nonFish = '';
    this.comments = '';
    this.confirmationNumber = ''; // daily catch report confirmation number (not being used yet)
  }

  toString() {
    return 'Date: ' + this.dateFished + '; Daily Catch Report Confirmation Number: ' + this.confirmationNumber;
  }
}

/***/ }),

/***/ 9793:
/*!*******************************************************************!*\
  !*** ./src/app/data-models/trip-models/gear-models/gear.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gear": () => (/* binding */ Gear)
/* harmony export */ });
class Gear {
  constructor(name = '', id = '', checked = false) {
    this.name = '';
    this.logbookID = '';
    this.isChecked = false;
    this.name = name;
    this.logbookID = id;
    this.isChecked = checked;
  }
  toString() {
    return this.name + ' (Logbook #' + this.logbookID + ')';
  }
  isValid() {
    return this.name != '' && this.logbookID != '';
  }
}

/***/ }),

/***/ 786:
/*!******************************************************************!*\
  !*** ./src/app/data-models/trip-models/gear-models/net.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Net": () => (/* binding */ Net)
/* harmony export */ });
class Net {
  constructor(type, name, length, depth, depthUnits, ratio, mesh, meshUnits, numMeshes, strands = '', checked = false) {
    this.netType = ''; // will be either Alaska Twist, Multi Strand, or Comibination
    this.netName = ''; // will only be for the skipper's reference
    this.numStrands = ''; //only needed for Alaska Twist
    this.length = '';
    this.weedlineDepth = '';
    this.weedlineDepthUnits = '';
    this.hangRatio = '';
    this.meshSize = '';
    this.meshSizeUnits = '';
    this.numMeshes = '';
    this.isChecked = false;
    this.netType = type;
    this.netName = name;
    this.length = length;
    this.weedlineDepth = depth;
    this.weedlineDepthUnits = depthUnits;
    this.hangRatio = ratio;
    this.meshSize = mesh;
    this.meshSizeUnits = meshUnits;
    this.numMeshes = numMeshes;
    this.numStrands = strands;
    this.isChecked = checked;
  }
  toString() {
    return this.netName + ' (' + this.netType + ')';
  }
  isValid() {
    if (this.netType === "Alaska Twist") {
      // requires numStrands to be set
      return this.netName != '' && this.numStrands != '' && this.length != '' && this.weedlineDepth != '' && this.weedlineDepthUnits != '' && this.hangRatio != '' && this.meshSize != '' && this.meshSizeUnits != '' && this.numMeshes != '';
    } else if (this.netType != '') {
      // does not require a value for numStrands
      return this.netName != '' && this.length != '' && this.weedlineDepth != '' && this.weedlineDepthUnits != '' && this.hangRatio != '' && this.meshSize != '' && this.meshSizeUnits != '' && this.numMeshes != '';
    }
    return false;
  }
  // transform a data structure into net data
  static transformAnonymous(anon) {
    let list = [];
    anon.forEach(Net => {
      let item = new Net(Net.netType, Net.netName, Net.numStrands, Net.length, Net.weedlineDepth, Net.weedlineDepthUnits, Net.hangRatio, Net.meshSize, Net.meshSizeUnits, Net.numMeshes, Net.isChecked);
      list.push(item);
    });
    return list;
  }
}

/***/ }),

/***/ 634:
/*!***************************************************************!*\
  !*** ./src/app/data-models/trip-models/license-area.model.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicenseArea": () => (/* binding */ LicenseArea)
/* harmony export */ });
class LicenseArea {
  constructor(licenseName, licenseLocation, isChecked = false) {
    this.licenseID = '';
    this.licenseName = '';
    this.licenseLocation = '';
    this.isChecked = false;
    this.licenseName = licenseName;
    this.licenseLocation = licenseLocation;
    this.isChecked = isChecked;
  }
  toString() {
    return this.licenseName + ' (' + this.licenseLocation + ')';
  }
  isValid() {
    return this.licenseName != '' && this.licenseLocation != '';
  }
}

/***/ }),

/***/ 5636:
/*!*******************************************************!*\
  !*** ./src/app/data-models/trip-models/trip.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Trip": () => (/* binding */ Trip)
/* harmony export */ });
/* harmony import */ var _gear_models_gear_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gear-models/gear.model */ 9793);
/* harmony import */ var _user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-models/vessel-data.model */ 504);
/* harmony import */ var _license_area_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./license-area.model */ 634);
/* harmony import */ var _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tel-input/tel-input.component */ 2823);




class Trip {
  constructor() {
    this.isComplete = false; // !!! move to Start Fishing Report
    this.isInProgress = false; // !!! move to Start Fishing Report
    this.gear = new _gear_models_gear_model__WEBPACK_IMPORTED_MODULE_0__.Gear('', '');
    this.vessel = new _user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_1__.VesselData('', '');
    this.licenseArea = new _license_area_model__WEBPACK_IMPORTED_MODULE_2__.LicenseArea('', '');
    this.master = '';
    this.fin = '';
    this.startDate = new Date(); // !!! move to Start Fishing Report
    this.managementArea = ''; // !!! move to Start Fishing Report
    this.name = '';
    this.phoneNum = new _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_3__.Tel('', '', '');
    this.comments = ''; // !!! move to Start Fishing Report
    this.site = ''; // !!! move to End Fishing Report
    this.arrivalDate = new Date(); // !!! move to End Fishing Report
    this.offloadNeeded = false; // used to determine if the current trip may require an offload report
    this.dailyCatchReports = []; // array of all daily catch reports submitted for the trip
  }

  toString() {
    return 'Gear: ' + this.gear + '; Vessel: ' + this.vessel + '; License Area: ' + this.licenseArea;
  }
  isValid() {
    return this.gear.isValid() && this.vessel.isValid() && this.licenseArea.isValid();
  }
}

/***/ }),

/***/ 426:
/*!************************************************************!*\
  !*** ./src/app/data-models/user-models/user-data.model.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserData": () => (/* binding */ UserData)
/* harmony export */ });
/* harmony import */ var _trip_models_trip_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trip-models/trip.model */ 5636);

class UserData {
  constructor(id, email) {
    // Auth0 ID
    this.userID = '';
    // Email for signup
    this.userEmail = '';
    // current homepage
    this.currHomepage = '';
    // saved user trips
    // TO-DO - INSERT AN ARRAY OF TRIPS
    // saved user vessels
    this.vessels = [];
    // current trip (TO-DO: change name)
    this.currTrip = new _trip_models_trip_model__WEBPACK_IMPORTED_MODULE_0__.Trip();
    // saved nets
    this.nets = [];
    this.userID = id;
    this.userEmail = email;
  }
  toString() {
    return this.userEmail + ', ' + this.userID;
  }
  isValid() {
    return this.userID !== '' && this.userEmail !== '';
  }
}

/***/ }),

/***/ 504:
/*!**************************************************************!*\
  !*** ./src/app/data-models/user-models/vessel-data.model.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VesselData": () => (/* binding */ VesselData)
/* harmony export */ });
class VesselData {
  constructor(vname, vcoastNum, checked = false) {
    // Unique identifier for this vessel
    this.vesselID = '';
    // Name for this vessel
    this.vesselName = '';
    // Vessel coast number for this vessel (not sure if vesselCoastNumber is the best name for CFV/VRN - may change later)
    this.vesselCoastNumber = '';
    // Whether or not the vessel is recognized
    this.isRecognized = false;
    // Whether or not the vessel is checked in a list
    this.isChecked = false;
    this.vesselName = vname;
    this.vesselCoastNumber = vcoastNum;
    this.isChecked = checked;
  }
  toString() {
    return this.vesselName + ' (VRN: ' + this.vesselCoastNumber + ')';
  }
  isValid() {
    return this.vesselName != '' && this.vesselCoastNumber != '';
  }
}

/***/ }),

/***/ 4654:
/*!************************************************!*\
  !*** ./src/app/data-models/validator.model.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Validator": () => (/* binding */ Validator),
/* harmony export */   "generalValidator": () => (/* binding */ generalValidator),
/* harmony export */   "speciesValidator": () => (/* binding */ speciesValidator)
/* harmony export */ });
class Validator {}
// validator for general values
function generalValidator() {
  return control => {
    return control.value != null && control.valid ? null : {
      invalid: true
    };
  };
}
// choosing a species from a species list
function speciesValidator(speciesList) {
  return control => {
    for (let species of speciesList) {
      if (control.value.toLowerCase() === species.toLowerCase()) {
        return null;
      }
    }
    return {
      value: {
        error: 'Invalid species'
      }
    };
  };
}

/***/ }),

/***/ 1878:
/*!********************************************************************!*\
  !*** ./src/app/dialogs/add-net-dialog/add-net-dialog.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNetDialogComponent": () => (/* binding */ AddNetDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data-models/trip-models/gear-models/net.model */ 786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);














function AddNetDialogComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
}
function AddNetDialogComponent_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
  if (rf & 2) {
    const net_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", net_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", net_r13, " ");
  }
}
function AddNetDialogComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
}
function AddNetDialogComponent_div_22_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
}
function AddNetDialogComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 27)(1, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, " Number of Strands ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-form-field", 8)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, " Number of Strands ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("input", function AddNetDialogComponent_div_22_Template_input_input_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r15.forbidNonNumeric("numStrands"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, AddNetDialogComponent_div_22_mat_error_7_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r3.form.invalid);
  }
}
function AddNetDialogComponent_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
}
function AddNetDialogComponent_mat_error_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
}
function AddNetDialogComponent_mat_option_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
  if (rf & 2) {
    const unit_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", unit_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", unit_r17, " ");
  }
}
function AddNetDialogComponent_mat_error_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
}
function AddNetDialogComponent_mat_error_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
}
function AddNetDialogComponent_mat_error_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
}
function AddNetDialogComponent_mat_option_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
  if (rf & 2) {
    const unit_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", unit_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", unit_r18, " ");
  }
}
function AddNetDialogComponent_mat_error_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
}
function AddNetDialogComponent_mat_error_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
}
class AddNetDialogComponent {
  constructor(dialogRef, localStorageService, data) {
    this.dialogRef = dialogRef;
    this.localStorageService = localStorageService;
    this.data = data;
    //data preambles
    this.netTypes = []; // holds values from local storage
    this.unitTypes = ['cm', 'in', 'mm']; //hardcoded values to be used in the form
    this.dialogReturn = new src_app_data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_0__.Net('', '', '', '', '', '', '', '', '');
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      netType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      numStrands: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      netName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      netLength: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      netDepth: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      netUnits: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      hangRatio: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      meshSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      meshUnits: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      numMeshes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
    });
    this.netTypes = this.localStorageService.getStringList('netTypes'); // retrieve net types from local storage
  }

  netTypeVal() {
    let getNetType = this.form.get('netType');
    if (getNetType?.errors?.required) {
      return '[Required]';
    }
    return getNetType?.value;
  }
  ngOnInit() {
    this.onNetTypeChange();
  }
  onNetTypeChange() {
    this.form.get('netType')?.valueChanges.subscribe(value => {
      const strandControl = this.form.get('numStrands');
      if (value === 'Alaska Twist') {
        strandControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
      } else {
        strandControl?.clearValidators();
      }
      strandControl?.updateValueAndValidity();
    });
  }
  addNet() {
    if (this.form.valid) {
      this.clearInputs();
      this.dialogRef.close(this.form.value); // return the filled-in values of the form field
    } else {
      this.form.markAllAsTouched();
    }
  }
  deleteNet() {
    this.dialogRef.close('delete');
  }
  // reset any dead form inputs
  clearInputs() {
    if (this.netTypeVal() != 'Alaska Twist') {
      // if other gear type, clear any possible input in numStrands
      this.form.controls['numStrands'].reset();
    }
  }
  onNoClick() {}
  // forbid field from entering non-decimal values
  forbidNonNumeric(controlName) {
    let control = this.form.get(controlName);
    control.setValue(control.value.replace(/[^0-9]/g, ''));
  }
}
AddNetDialogComponent.??fac = function AddNetDialogComponent_Factory(t) {
  return new (t || AddNetDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
};
AddNetDialogComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
  type: AddNetDialogComponent,
  selectors: [["app-add-net-dialog"]],
  decls: 91,
  vars: 14,
  consts: [[1, "container", 2, "display", "flex", "flex-direction", "column", "justify-content", "space-between", "height", "90%"], ["align", "center", 1, "display-6", 2, "padding-top", "10px", "color", "#005d87", "font-weight", "500"], [3, "formGroup"], [1, "row", 2, "padding-top", "15px"], [1, "net-small-header"], ["appearance", "fill"], ["matInput", "", "formControlName", "netName", "required", ""], [4, "ngIf"], ["appearance", "outline", 1, "form-field"], ["formControlName", "netType"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row"], ["class", "container", 4, "ngIf"], ["matInput", "", "inputmode", "numeric", "formControlName", "netLength", 3, "input"], [1, "col"], ["matInput", "", "inputmode", "numeric", "formControlName", "netDepth", 3, "input"], ["formControlName", "netUnits"], ["matInput", "", "inputmode", "numeric", "formControlName", "hangRatio", 3, "input"], ["matInput", "", "inputmode", "numeric", "formControlName", "meshSize", 3, "input"], ["formControlName", "meshUnits"], ["matInput", "", "inputmode", "numeric", "formControlName", "numMeshes", 3, "input"], [1, "row", 2, "display", "flex", "padding-top", "10px"], [1, "col-3"], ["mat-stroked-button", "", "type", "button", "aria-label", "Back", 2, "background-color", "#005d87", "color", "white", "font-weight", "500", 3, "click"], [1, "col-4"], ["mat-stroked-button", "", "type", "submit", "aria-label", "Add Net", 2, "background-color", "#ff6f61", "color", "white", "font-weight", "500", 3, "click"], [3, "value"], [1, "container"], ["matInput", "", "inputmode", "numeric", "formControlName", "numStrands", 3, "input"]],
  template: function AddNetDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Add Net");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "form", 2)(4, "div", 3)(5, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, " Net Name (for your reference only) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "mat-form-field", 5)(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "Net Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, AddNetDialogComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 3)(13, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14, " Net Type ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "mat-form-field", 8)(16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, " Select ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](19, AddNetDialogComponent_mat_option_19_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](20, AddNetDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](22, AddNetDialogComponent_div_22_Template, 8, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 3)(24, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, " Length (in fathoms) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "mat-form-field", 8)(27, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28, " Length ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("input", function AddNetDialogComponent_Template_input_input_29_listener() {
        return ctx.forbidNonNumeric("netLength");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](30, AddNetDialogComponent_mat_error_30_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div", 3)(32, "div", 14)(33, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, " Weedline Depth ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "mat-form-field", 8)(36, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37, " Depth ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("input", function AddNetDialogComponent_Template_input_input_38_listener() {
        return ctx.forbidNonNumeric("netDepth");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](39, AddNetDialogComponent_mat_error_39_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "div", 14)(41, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, " Weedline Depth Units ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "mat-form-field", 8)(44, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](45, " Select ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "mat-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](47, AddNetDialogComponent_mat_option_47_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](48, AddNetDialogComponent_mat_error_48_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "div", 3)(50, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](51, " Hang Ratio ( :1) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "mat-form-field", 8)(53, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](54, " Hang Ratio ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("input", function AddNetDialogComponent_Template_input_input_55_listener() {
        return ctx.forbidNonNumeric("hangRatio");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](56, AddNetDialogComponent_mat_error_56_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "div", 3)(58, "div", 14)(59, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](60, " Mesh Size ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "mat-form-field", 8)(62, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](63, " Mesh Size ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("input", function AddNetDialogComponent_Template_input_input_64_listener() {
        return ctx.forbidNonNumeric("meshSize");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](65, AddNetDialogComponent_mat_error_65_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](66, "div", 14)(67, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](68, " Mesh Size Units ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "mat-form-field", 8)(70, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](71, " Select ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](72, "mat-select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](73, AddNetDialogComponent_mat_option_73_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](74, AddNetDialogComponent_mat_error_74_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](75, "div", 3)(76, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](77, " Number of Meshes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](78, "mat-form-field", 8)(79, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](80, " Number of Meshes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](81, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("input", function AddNetDialogComponent_Template_input_input_81_listener() {
        return ctx.forbidNonNumeric("numMeshes");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](82, AddNetDialogComponent_mat_error_82_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](83, "div", 21)(84, "div", 22)(85, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AddNetDialogComponent_Template_button_click_85_listener() {
        return ctx.deleteNet();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](86, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](87, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](88, "div", 24)(89, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AddNetDialogComponent_Template_button_click_89_listener() {
        return ctx.addNet();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](90, " Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.form.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.netTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.form.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.netTypeVal() === "Alaska Twist");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.form.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.form.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.unitTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.form.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.form.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.form.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.unitTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.form.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.form.invalid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: [".net-small-header[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9hZGQtbmV0LWRpYWxvZy9hZGQtbmV0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQjtJQUNJLGNBQWM7RUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZWFkZXIgZm9yIHRleHQgZW50cnkgKi9cclxuLm5ldC1zbWFsbC1oZWFkZXIge1xyXG4gICAgY29sb3I6ICMwMDVkODc7XHJcbiAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8600:
/*!****************************************************************************!*\
  !*** ./src/app/dialogs/add-species-dialog/add-species-dialog.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSpeciesDialogComponent": () => (/* binding */ AddSpeciesDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _data_models_validator_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/validator.model */ 4654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);













function AddSpeciesDialogComponent_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
  if (rf & 2) {
    const fSpecies_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", fSpecies_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", fSpecies_r6, " ");
  }
}
function AddSpeciesDialogComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Select an item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
}
function AddSpeciesDialogComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 3)(1, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, " Kept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-form-field", 5)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, " Kept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("input", function AddSpeciesDialogComponent_div_15_div_1_Template_input_input_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r8.forbidNonNumeric("kept"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
  }
}
function AddSpeciesDialogComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, AddSpeciesDialogComponent_div_15_div_1_Template, 7, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 3)(3, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, " Released ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-form-field", 5)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, " Released ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("input", function AddSpeciesDialogComponent_div_15_Template_input_input_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r10.forbidNonNumeric("released"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r3.isReleaseOnly(ctx_r3.getCurrentFormSpecies()));
  }
}
function AddSpeciesDialogComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 3)(1, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-form-field", 5)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("input", function AddSpeciesDialogComponent_div_16_div_1_Template_input_input_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r13.forbidNonNumeric("offloadWeight"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
  }
}
function AddSpeciesDialogComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, AddSpeciesDialogComponent_div_16_div_1_Template, 7, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 3)(3, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, " Pieces ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-form-field", 5)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, " Pieces ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("input", function AddSpeciesDialogComponent_div_16_Template_input_input_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r15.forbidNonNumeric("offloadPieces"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r4.data.tableInfo.gearName === "Seine");
  }
}
function AddSpeciesDialogComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 3)(1, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, " This species is non-retainable. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
  }
}
class AddSpeciesDialogComponent {
  constructor(dialogRef, localStorageService, data) {
    this.dialogRef = dialogRef;
    this.localStorageService = localStorageService;
    this.data = data;
    // used to determine if the species name can be edited
    this.speciesIsReadOnly = false;
    // species lists
    this.stringList = []; // subset of "list" - has all species names (used only for validation)
    this.speciesList = [];
    this.filteredSpecies = []; //what's already in table
    this.currentSpeciesList = [];
    // dialog title
    this.displayedTitle = '';
    // species details
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      speciesName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, (0,_data_models_validator_model__WEBPACK_IMPORTED_MODULE_0__.speciesValidator)(this.stringList)]),
      kept: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      released: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      offloadWeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      offloadPieces: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
    });
  }
  ngOnInit() {
    // fill the species and filtered lists
    this.fillSpecies(); //fill the species list available to the user
    this.filteredSpecies = this.speciesList;
    // set the dialog configuration
    this.setDialogConfig();
    // change the filtered species list whenever the input field changes
    this.form.get('speciesName').valueChanges.subscribe(speciesChange => {
      this.filteredSpecies = [];
      for (let species of this.speciesList) {
        if (species.toLowerCase().includes(speciesChange.toLowerCase())) {
          this.filteredSpecies.push(species);
        }
      }
    });
    // if editing a species, autofill form with species details
    if (this.data != null && this.data.species != null) {
      let speciesData = this.data.species;
      this.form.patchValue({
        speciesName: speciesData.speciesName,
        kept: speciesData.kept,
        released: speciesData.released,
        offloadWeight: speciesData.offloadWeight,
        offloadPieces: speciesData.offloadPieces
      });
    }
  }
  // set the title of the dialog and read/write permissions of inputs
  setDialogConfig() {
    // set config based on whether the species is being added or edited
    switch (this.data.identifier) {
      case 'edit':
        this.displayedTitle = "Edit Species";
        this.speciesIsReadOnly = true;
        break;
      case 'add':
        this.displayedTitle = "Add Species";
        break;
    }
  }
  // fill up the species list based on what is not already in the table
  fillSpecies() {
    for (let species of this.data.currentFishList) {
      // get all species names that are already in the table
      this.currentSpeciesList.push(species.speciesName);
    }
    for (let species of this.data.filteredFishList) {
      //only add the name to the list if it is not already in the table 
      if (!this.currentSpeciesList.includes(species.speciesName)) {
        this.speciesList.push(species.speciesName);
      }
      this.stringList.push(species.speciesName); // fill the string list regardless
    }
  }
  // check if entered species is a valid species
  checkSpecies(name) {
    for (let species of this.data.filteredFishList) {
      if (species.speciesName.toLowerCase().includes(name.toLowerCase())) {
        this.form.patchValue({
          speciesName: species.speciesName
        });
        return true;
      }
    }
    return false;
  }
  isReleaseOnly(name) {
    if (this.data.tableInfo.releaseOnlySpecies.includes(name)) {
      return true;
    }
    return false;
  }
  getCurrentFormSpecies() {
    return this.form.get('speciesName')?.value;
  }
  // add new species details
  addSpecies() {
    if (this.form.valid && this.checkSpecies(this.form.get('speciesName').value)) {
      this.clearInputs();
      this.dialogRef.close(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  // clear any possible dead form inputs
  clearInputs() {
    if (this.isReleaseOnly(this.getCurrentFormSpecies())) {
      // if species is release-only, clear any possible previous 'kept' input
      this.form.controls['kept'].reset(); // reset form value
    }
  }
  // delete current species details
  deleteSpecies() {
    this.dialogRef.close('delete');
  }
  // forbid field from entering non-decimal values
  forbidNonNumeric(controlName) {
    let control = this.form.get(controlName);
    control.setValue(control.value.replace(/[^0-9]/g, ''));
  }
}
AddSpeciesDialogComponent.??fac = function AddSpeciesDialogComponent_Factory(t) {
  return new (t || AddSpeciesDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
};
AddSpeciesDialogComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
  type: AddSpeciesDialogComponent,
  selectors: [["app-add-species-dialog"]],
  decls: 26,
  vars: 9,
  consts: [[1, "container", "species-container"], ["align", "center", 1, "display-6", "species-header"], [3, "formGroup"], [1, "row"], [1, "species-small-header"], ["appearance", "fill"], ["matInput", "", "required", "", "formControlName", "speciesName", 3, "matAutocomplete", "readonly"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row", 2, "display", "flex"], [1, "col-3"], ["mat-stroked-button", "", "type", "button", "aria-label", "Delete", 1, "button-delete", 3, "click"], [1, "col"], [1, "col-4"], ["mat-stroked-button", "", "type", "submit", "align", "end", "aria-label", "Add Species", 1, "button-add", 3, "click"], [3, "value"], ["matInput", "", "inputmode", "numeric", "formControlName", "released", 3, "input"], ["matInput", "", "inputmode", "numeric", "formControlName", "kept", 3, "input"], ["matInput", "", "inputmode", "numeric", "formControlName", "offloadPieces", 3, "input"], ["matInput", "", "inputmode", "numeric", "formControlName", "offloadWeight", 3, "input"]],
  template: function AddSpeciesDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "form", 2)(4, "div", 3)(5, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, " Species Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "mat-form-field", 5)(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, " Species ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "mat-autocomplete", null, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](13, AddSpeciesDialogComponent_mat_option_13_Template, 2, 2, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, AddSpeciesDialogComponent_mat_error_14_Template, 2, 0, "mat-error", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](15, AddSpeciesDialogComponent_div_15_Template, 9, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](16, AddSpeciesDialogComponent_div_16_Template, 9, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](17, AddSpeciesDialogComponent_div_17_Template, 3, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 11)(19, "div", 12)(20, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AddSpeciesDialogComponent_Template_button_click_20_listener() {
        return ctx.deleteSpecies();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21, " Delete ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 15)(24, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AddSpeciesDialogComponent_Template_button_click_24_listener() {
        return ctx.addSpecies();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, " Confirm ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx.displayedTitle, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matAutocomplete", _r0)("readonly", ctx.speciesIsReadOnly);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.filteredSpecies);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.form.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.data.tableInfo.tableType === "daily-catch");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.data.tableInfo.tableType === "offload-catch");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.isReleaseOnly(ctx.getCurrentFormSpecies()));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocompleteTrigger, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: [".species-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: 90%\r\n}\r\n\r\n\r\n.species-header[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n  color: #005d87;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.species-small-header[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n}\r\n\r\n\r\n.button-delete[_ngcontent-%COMP%] {\r\n  background-color: #005d87;\r\n  color: white;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.button-add[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61;\r\n  color: white;\r\n  font-weight: 500;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9hZGQtc3BlY2llcy1kaWFsb2cvYWRkLXNwZWNpZXMtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUI7QUFDRjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBLGVBQWU7QUFDZjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLyogRXh0cmEgY29udGFpbmVyIHN0eWxpemF0aW9uICovXHJcbi5zcGVjaWVzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDkwJVxyXG59XHJcblxyXG4vKiBcIkFkZCBUcmlwIElEXCIgKi9cclxuLnNwZWNpZXMtaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBjb2xvcjogIzAwNWQ4NztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBIZWFkZXIgZm9yIHRleHQgZW50cnkgKi9cclxuLnNwZWNpZXMtc21hbGwtaGVhZGVyIHtcclxuICBjb2xvcjogIzAwNWQ4NztcclxufVxyXG5cclxuLyogQmFjayBidXR0b24gKi9cclxuLmJ1dHRvbi1kZWxldGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkODc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIEFkZCBidXR0b24gKi9cclxuLmJ1dHRvbi1hZGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZmNjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8798:
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/add-trip-dialog/add-trip-dialog.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTripDialogComponent": () => (/* binding */ AddTripDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);








function AddTripDialogComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}
class AddTripDialogComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormGroup({
      tripID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])
    });
  }
  /*ngOnInit(): void {
    if (this.data != null) {
      this.form.patchValue({
        tripID: this.data.tripID
      });
    }
  }*/
  // add new trip ID
  addTrip() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  // delete current trip ID
  deleteTrip() {
    this.dialogRef.close('delete');
  }
}
AddTripDialogComponent.??fac = function AddTripDialogComponent_Factory(t) {
  return new (t || AddTripDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef));
};
AddTripDialogComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: AddTripDialogComponent,
  selectors: [["app-add-trip-dialog"]],
  decls: 20,
  vars: 2,
  consts: [[1, "container", "trip-container"], ["align", "center", 1, "display-6", "trip-header"], [3, "formGroup"], [1, "row"], [1, "trip-small-header"], ["appearance", "fill"], ["matInput", "", "required", "", "formControlName", "tripID"], [4, "ngIf"], [1, "row", 2, "display", "flex"], [1, "col-3"], ["mat-stroked-button", "", "type", "button", "aria-label", "Back", 1, "button-back", 3, "click"], [1, "col"], [1, "col-4"], ["mat-stroked-button", "", "type", "submit", "align", "end", "aria-label", "Add Trip ID", 1, "button-add", 3, "click"]],
  template: function AddTripDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Add Trip ID ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 2)(4, "div", 3)(5, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Trip ID ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-form-field", 5)(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Trip ID ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, AddTripDialogComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8)(13, "div", 9)(14, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddTripDialogComponent_Template_button_click_14_listener() {
        return ctx.deleteTrip();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12)(18, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddTripDialogComponent_Template_button_click_18_listener() {
        return ctx.addTrip();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (tmp_1_0 = ctx.form.get("tripID")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.required);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
  styles: [".trip-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: 90%\r\n}\r\n\r\n\r\n.trip-header[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n  color: #005d87;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.trip-small-header[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n}\r\n\r\n\r\n.button-back[_ngcontent-%COMP%] {\r\n  background-color: #005d87;\r\n  color: white;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.button-add[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61;\r\n  color: white;\r\n  font-weight: 500;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9hZGQtdHJpcC1kaWFsb2cvYWRkLXRyaXAtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUI7QUFDRjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBLGVBQWU7QUFDZjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLyogRXh0cmEgY29udGFpbmVyIHN0eWxpemF0aW9uICovXHJcbi50cmlwLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDkwJVxyXG59XHJcblxyXG4vKiBcIkFkZCBUcmlwIElEXCIgKi9cclxuLnRyaXAtaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBjb2xvcjogIzAwNWQ4NztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBIZWFkZXIgZm9yIHRleHQgZW50cnkgKi9cclxuLnRyaXAtc21hbGwtaGVhZGVyIHtcclxuICBjb2xvcjogIzAwNWQ4NztcclxufVxyXG5cclxuLyogQmFjayBidXR0b24gKi9cclxuLmJ1dHRvbi1iYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZDg3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBBZGQgYnV0dG9uICovXHJcbi5idXR0b24tYWRkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2ZjYxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9026:
/*!**************************************************************************!*\
  !*** ./src/app/dialogs/add-vessel-dialog/add-vessel-dialog.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddVesselDialogComponent": () => (/* binding */ AddVesselDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/user-models/vessel-data.model */ 504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);











function AddVesselDialogComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
  }
}
function AddVesselDialogComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Invalid character");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
  }
}
function AddVesselDialogComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Invalid - 6 digit numeric or 7-8 digit alphanumeric required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
  }
}
class AddVesselDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.dialogReturn = new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_0__.VesselData('', '');
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
      vesselName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[A-z0-9 ]+$')]),
      vesselNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^([0-9]{6}|[A-z0-9]{7,8})$')])
    });
  }
  ngOnInit() {
    if (this.data != null) {
      this.form.patchValue({
        vesselName: this.data.vesselName,
        vesselNumber: this.data.vesselCoastNumber
      });
    }
  }
  addVessel() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  deleteVessel() {
    this.dialogRef.close('delete');
  }
  onNoClick() {}
}
AddVesselDialogComponent.??fac = function AddVesselDialogComponent_Factory(t) {
  return new (t || AddVesselDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
};
AddVesselDialogComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
  type: AddVesselDialogComponent,
  selectors: [["app-add-vessel-dialog"]],
  decls: 29,
  vars: 4,
  consts: [[1, "container", 2, "display", "flex", "flex-direction", "column", "justify-content", "space-between", "height", "90%"], ["align", "center", 1, "display-6", 2, "padding-top", "10px", "color", "#005d87", "font-weight", "500"], [3, "formGroup"], [1, "row"], [1, "vessel-small-header"], ["appearance", "fill"], ["matInput", "", "formControlName", "vesselName", "required", ""], [4, "ngIf"], [1, "row", 2, "padding-top", "15px"], ["matInput", "", "formControlName", "vesselNumber", "required", ""], [1, "row", 2, "display", "flex"], [1, "col-3"], ["mat-stroked-button", "", "type", "button", "aria-label", "Back", 2, "background-color", "#005d87", "color", "white", "font-weight", "500", 3, "click"], [1, "col"], [1, "col-4"], ["mat-stroked-button", "", "type", "submit", "aria-label", "Add Vessel", "align", "end", 2, "background-color", "#ff6f61", "color", "white", "font-weight", "500", 3, "click"]],
  template: function AddVesselDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Add Vessel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "form", 2)(4, "div", 3)(5, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, " Vessel Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-form-field", 5)(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Vessel Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, AddVesselDialogComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, AddVesselDialogComponent_mat_error_12_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 8)(14, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, " VRN (CFV#) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "mat-form-field", 5)(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "VRN");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](19, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, AddVesselDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 10)(22, "div", 11)(23, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AddVesselDialogComponent_Template_button_click_23_listener() {
        return ctx.deleteVessel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 14)(27, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AddVesselDialogComponent_Template_button_click_27_listener() {
        return ctx.addVessel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, " Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_1_0 = ctx.form.get("vesselName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_2_0 = ctx.form.get("vesselName")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.pattern);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.form.invalid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: [".vessel-small-header[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9hZGQtdmVzc2VsLWRpYWxvZy9hZGQtdmVzc2VsLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQjtFQUNFLGNBQWM7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZWFkZXIgZm9yIHRleHQgZW50cnkgKi9cclxuLnZlc3NlbC1zbWFsbC1oZWFkZXIge1xyXG4gIGNvbG9yOiAjMDA1ZDg3O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7984:
/*!*********************************************************************!*\
  !*** ./src/app/home/active-trip-home/active-trip-home.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveTripHomeComponent": () => (/* binding */ ActiveTripHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var src_app_data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data-models/trip-models/trip.model */ 5636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../menu/menu.component */ 1105);













function ActiveTripHomeComponent_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ActiveTripHomeComponent_button_50_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["????resetView"](ctx_r3.toEndReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " End ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
  }
}
function ActiveTripHomeComponent_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ActiveTripHomeComponent_button_51_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["????resetView"](ctx_r5.toCancelReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
  }
}
function ActiveTripHomeComponent_button_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ActiveTripHomeComponent_button_55_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["????resetView"](ctx_r7.toOffloadReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Offload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
  }
}
class ActiveTripHomeComponent {
  constructor(
  // same constructor as original homepage
  auth, router, onlineStatusService, localStorageService, toastr, document) {
    this.auth = auth;
    this.router = router;
    this.onlineStatusService = onlineStatusService;
    this.localStorageService = localStorageService;
    this.toastr = toastr;
    this.document = document;
    //data preambles
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    this.currTrip = new src_app_data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_1__.Trip();
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_5__.OnlineStatusType.ONLINE) {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              this.localStorageService.saveData('currID', user.sub);
            } else {
              this.toastr.error("Please log in again", "User data error");
              this.router.navigate(['login']);
            }
          });
        } else {
          this.toastr.error("Please log in", "Not authenticated");
          this.router.navigate(['login']);
        }
      });
    }
    this.initialize();
  }
  initialize() {
    // get current fishing report information
    let currID = this.localStorageService.getCurrID();
    this.userDetails = this.localStorageService.getUserByID(currID);
    this.currTrip = this.localStorageService.validateCurrTrip(this.userDetails.currTrip);
  }
  getGearName() {
    return this.currTrip.gear.name;
  }
  toCatchReport(gearType) {
    switch (gearType) {
      case 'Gill Net':
        this.router.navigate(['gill-net-report']);
        break;
      case 'Seine':
        this.router.navigate(['seine-report']);
        break;
      case 'Troll':
        this.router.navigate(['troll-report']);
        break;
    }
  }
  // go to end a fishing report
  toEndReport() {
    this.router.navigate(['end-report']);
  }
  // go to pause a fishing report  
  toPauseReport() {
    this.router.navigate(['pause-report']);
  }
  // go to cancel the current trip
  toCancelReport() {
    this.router.navigate(['cancel-report']);
  }
  // go to an offload report
  toOffloadReport() {
    this.router.navigate(['offload-report']);
  }
}
ActiveTripHomeComponent.??fac = function ActiveTripHomeComponent_Factory(t) {
  return new (t || ActiveTripHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_5__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT));
};
ActiveTripHomeComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({
  type: ActiveTripHomeComponent,
  selectors: [["app-active-trip-home"]],
  decls: 56,
  vars: 9,
  consts: [[1, "container", 2, "padding-top", "20px"], [1, "row"], ["align", "left", 1, "col"], [1, "blue-trip-heading"], [2, "color", "#003F61"], ["align", "right", 1, "col"], ["align", "left", 1, "row"], [1, "descriptive-text"], [2, "display", "inline", "font-weight", "500", "color", "#005d87"], [1, "button-row"], ["mat-raised-button", "", "align", "center", "type", "button", 1, "red-button", 3, "click"], [1, "blue-subheading"], [1, "report-buttons"], [1, "row", "justify-content-center"], [1, "col-3"], ["mat-raised-button", "", "type", "button", 1, "blue-button", 3, "click"], [1, "col-1"], ["mat-raised-button", "", "class", "blue-button", "type", "button", 3, "click", 4, "ngIf"]],
  template: function ActiveTripHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](4, " My Trip ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](6, " #1234 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](8, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "div", 6)(10, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](11, " Start Date: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "div", 6)(15, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](16, " Gear Type: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "div", 6)(20, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](21, " Vessel Master: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](24, "div", 6)(25, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](26, " Vessel: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](29, "div", 6)(30, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](31, " License Area: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](32, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "div", 9)(35, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ActiveTripHomeComponent_Template_button_click_35_listener() {
        return ctx.toCatchReport(ctx.currTrip.gear.name);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](36, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](37, " Record Catch ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](38, "div", 6)(39, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](40, " Submit a Trip Report ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](41, "div", 12)(42, "div", 13)(43, "div", 14)(44, "div", 1)(45, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ActiveTripHomeComponent_Template_button_click_45_listener() {
        return ctx.toPauseReport();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](46, " Pause ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](47, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](48, "div", 14)(49, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](50, ActiveTripHomeComponent_button_50_Template, 2, 0, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](51, ActiveTripHomeComponent_button_51_Template, 2, 0, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](52, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](53, "div", 14)(54, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](55, ActiveTripHomeComponent_button_55_Template, 2, 0, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", ctx.currTrip.startDate, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", ctx.currTrip.gear.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate2"](" ", ctx.currTrip.master, " (FIN: ", ctx.currTrip.fin, ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", ctx.currTrip.vessel, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", ctx.currTrip.licenseArea, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.currTrip.dailyCatchReports.length != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.currTrip.dailyCatchReports.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.currTrip.offloadNeeded && ctx.currTrip.dailyCatchReports.length != 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent],
  styles: [".blue-trip-heading[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n}\r\n\r\n.blue-subheading[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    font-weight: 600;\r\n    margin-top: 20px;\r\n}\r\n\r\n.descriptive-text[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    margin-top: 15px;\r\n    font-weight: 600;\r\n}\r\n\r\n.red-button[_ngcontent-%COMP%] {\r\n    background-color: #ff6f61 !important;\r\n    color: white !important;\r\n    font-weight: 500;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    font-size: 20px;\r\n    padding: 30px 30px;\r\n}\r\n\r\n.button-row[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.blue-button[_ngcontent-%COMP%] {\r\n    background-color: #005d87 !important;\r\n    color: white !important;\r\n    font-weight: 500;\r\n    padding: 25px 25px;\r\n}\r\n\r\n.descriptive-text[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%] {\r\n    font-weight: normal;\r\n}\r\n\r\n.report-buttons[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9hY3RpdmUtdHJpcC1ob21lL2FjdGl2ZS10cmlwLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1ZS10cmlwLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICMwMDNGNjE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLmJsdWUtc3ViaGVhZGluZyB7XHJcbiAgICBjb2xvcjogIzAwM0Y2MTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpdmUtdGV4dCB7XHJcbiAgICBjb2xvcjogIzAwM0Y2MTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucmVkLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2ZjYxICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmx1ZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWQ4NyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMjVweCAyNXB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpdmUtdGV4dCAucCB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4ucmVwb3J0LWJ1dHRvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9259:
/*!*************************************************************!*\
  !*** ./src/app/home/no-trip-home/no-trip-home.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoTripHomeComponent": () => (/* binding */ NoTripHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../menu/menu.component */ 1105);











class NoTripHomeComponent {
  constructor(
  // same constructor as original homepage
  auth, router, onlineStatusService, localStorageService, toastr, document) {
    this.auth = auth;
    this.router = router;
    this.onlineStatusService = onlineStatusService;
    this.localStorageService = localStorageService;
    this.toastr = toastr;
    this.document = document;
    // data preambles
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_3__.OnlineStatusType.ONLINE) {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              this.localStorageService.saveData('currID', user.sub);
            }
          });
          this.initialize();
        } else {
          this.toastr.error("Please log in", "Not authenticated");
          this.router.navigate(['login']);
        }
      });
    }
  }
  initialize() {
    let currID = this.localStorageService.getCurrID();
    this.userDetails = this.localStorageService.getUserByID(currID);
    this.userDetails.currHomepage = 'no-trip-home'; // update homepage
  }
  // go to start a fishing report
  toStartReport() {
    this.router.navigate(['start-report']);
  }
}
NoTripHomeComponent.??fac = function NoTripHomeComponent_Factory(t) {
  return new (t || NoTripHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_3__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT));
};
NoTripHomeComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({
  type: NoTripHomeComponent,
  selectors: [["app-no-trip-home"]],
  decls: 17,
  vars: 0,
  consts: [[1, "container"], [1, "row", 2, "padding-top", "20px"], ["align", "left", 1, "col"], [1, "blue-trip-heading"], ["align", "right", 1, "col"], [1, "row"], [1, "blue-subheading"], ["align", "left", 1, "row"], [1, "descriptive-text"], [1, "button-row"], ["mat-raised-button", "", "align", "center", "type", "button", 1, "red-button", 3, "click"]],
  template: function NoTripHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](4, " My Trip ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](6, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "div", 5)(8, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](9, " You have no active trip. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "div", 7)(11, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](12, " Select the button below to complete a Start Fishing Report and activate a new trip. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "div", 9)(14, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function NoTripHomeComponent_Template_button_click_14_listener() {
        return ctx.toStartReport();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](16, " Start Trip ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()()();
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent],
  styles: [".blue-trip-heading[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n}\r\n\r\n.blue-subheading[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    font-weight: 600;\r\n    margin-top: 20px;\r\n}\r\n\r\n.descriptive-text[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 15px;\r\n}\r\n\r\n.red-button[_ngcontent-%COMP%] {\r\n    background-color: #ff6f61 !important;\r\n    color: white !important;\r\n    font-weight: 500;\r\n    margin-top: 15px;\r\n    font-size: 20px;\r\n    padding: 30px 28px;\r\n}\r\n\r\n.button-row[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9uby10cmlwLWhvbWUvbm8tdHJpcC1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVlLXRyaXAtaGVhZGluZyB7XHJcbiAgICBjb2xvcjogIzAwM0Y2MTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4uYmx1ZS1zdWJoZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjMDAzRjYxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGl2ZS10ZXh0IHtcclxuICAgIGNvbG9yOiAjMDA1ZDg3O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnJlZC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmY2MSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDMwcHggMjhweDtcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4777:
/*!*************************************************************!*\
  !*** ./src/app/home/offload-home/offload-home.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffloadHomeComponent": () => (/* binding */ OffloadHomeComponent)
/* harmony export */ });
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../menu/menu.component */ 1105);







function OffloadHomeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div")(1, "div", 2)(2, "div", 3)(3, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4, " My Trip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "app-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 2)(8, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, " Do you need to submit an offload report? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 7)(11, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, " Please go to the Records tab to view how many offload reports you have completed for this trip. This is your final chance to complete an offload report before starting a new trip. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "div", 9)(14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function OffloadHomeComponent_div_1_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["????resetView"](ctx_r2.toOffloadReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, " Offload Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "div", 9)(18, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function OffloadHomeComponent_div_1_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["????resetView"](ctx_r4.setNewTripFlag());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](20, " Start Another Trip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
  }
}
function OffloadHomeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div")(1, "div", 11)(2, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, " Are you sure you want to start a new trip? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 11)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, " If you select yes, you will not be able to complete an offload report for this trip at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "any");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, " point in the future. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 14)(13, "div", 2)(14, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function OffloadHomeComponent_div_2_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["????resetView"](ctx_r5.clearNewTripFlag());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "div", 14)(19, "div", 2)(20, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function OffloadHomeComponent_div_2_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["????resetView"](ctx_r7.toNoTripHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
  }
}
class OffloadHomeComponent {
  constructor(router, localStorageService) {
    this.router = router;
    this.localStorageService = localStorageService;
    // data preambles
    this.requestToStartNewTrip = false; // flag that tells us if we should display the confirmation page
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    let currID = this.localStorageService.getCurrID();
    this.userDetails = this.localStorageService.getUserByID(currID);
  }
  setNewTripFlag() {
    this.requestToStartNewTrip = true;
  }
  clearNewTripFlag() {
    this.requestToStartNewTrip = false;
  }
  // go to an offload report
  toOffloadReport() {
    this.router.navigate(['offload-report']);
  }
  // go to the new trip homepage
  toNoTripHome() {
    this.updateHomepage();
    this.router.navigate(['no-trip-home']);
  }
  updateHomepage() {
    this.userDetails.currHomepage = 'no-trip-home';
    this.localStorageService.saveData(this.userDetails.userID, this.userDetails);
  }
}
OffloadHomeComponent.??fac = function OffloadHomeComponent_Factory(t) {
  return new (t || OffloadHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
};
OffloadHomeComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
  type: OffloadHomeComponent,
  selectors: [["app-offload-home"]],
  decls: 3,
  vars: 2,
  consts: [[1, "container", 2, "padding-top", "20px"], [4, "ngIf"], [1, "row"], ["align", "left", 1, "col"], [1, "blue-trip-heading"], ["align", "right", 1, "col"], [1, "blue-subheading"], ["align", "left", 1, "row"], [1, "descriptive-text"], [1, "button-row"], ["mat-raised-button", "", "align", "center", "type", "button", 1, "red-button", 3, "click"], ["align", "center", 1, "row"], [1, "blue-heading-title"], [1, "col-1"], [1, "col-4"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"], [1, "col-2"]],
  template: function OffloadHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, OffloadHomeComponent_div_1_Template, 21, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, OffloadHomeComponent_div_2_Template, 23, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !ctx.requestToStartNewTrip);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.requestToStartNewTrip);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent],
  styles: [".blue-trip-heading[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n    \r\n}\r\n\r\n.blue-subheading[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    font-weight: 600;\r\n    margin-top: 20px;\r\n}\r\n\r\n.descriptive-text[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 15px;\r\n}\r\n\r\n.red-button[_ngcontent-%COMP%] {\r\n    background-color: #ff6f61 !important;\r\n    color: white !important;\r\n    font-weight: 500;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    font-size: 20px;\r\n    padding: 30px 28px;\r\n}\r\n\r\n.button-row[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\np[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-bottom: 10%;\r\n  }\r\n\r\n.fishing-button-red[_ngcontent-%COMP%] {\r\n    background-color: #ff6f61 !important;\r\n    color: white !important;\r\n    font-weight: 500;\r\n}\r\n\r\n.blue-heading-title[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    font-weight: bold;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9vZmZsb2FkLWhvbWUvb2ZmbG9hZC1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCOztBQUVqQjtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmO3dCQUNvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSx5QkFBeUI7O0FBRXpCO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLyogRm9yIGhvbWVwYWdlICovXHJcblxyXG4uYmx1ZS10cmlwLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICMwMDNGNjE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIC8qIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDsgKi9cclxufVxyXG5cclxuLmJsdWUtc3ViaGVhZGluZyB7XHJcbiAgICBjb2xvcjogIzAwM0Y2MTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpdmUtdGV4dCB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5yZWQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZmNjEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMzBweCAyOHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEZvciBjb25maW1hdGlvbiBwYWdlICovXHJcblxyXG5wIHtcclxuICAgIGNvbG9yOiAjMDA1ZDg3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gIH1cclxuXHJcbi5maXNoaW5nLWJ1dHRvbi1yZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmY2MSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYmx1ZS1oZWFkaW5nLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMDA1ZDg3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 898:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/clipboard */ 6079);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ 7520);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ 9673);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ 5183);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tree */ 3453);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);











































class MaterialModule {}
MaterialModule.??fac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
  type: MaterialModule
});
MaterialModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
  imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__.MatSliderModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.A11yModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__.ClipboardModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_35__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__.MatTreeModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__.ScrollingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MaterialModule, {
    imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__.MatSliderModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule],
    exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.A11yModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__.ClipboardModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_35__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__.MatTreeModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__.ScrollingModule]
  });
})();

/***/ }),

/***/ 1105:
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/local-storage.service */ 8345);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 8589);











class MenuComponent {
  constructor(auth, router, localStorageService, onlineStatusService, document) {
    this.auth = auth;
    this.router = router;
    this.localStorageService = localStorageService;
    this.onlineStatusService = onlineStatusService;
    this.document = document;
    // data preambles
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    let currID = this.localStorageService.getCurrID();
    this.userDetails = this.localStorageService.getUserByID(currID);
  }
  // navigate back to the current trip homepage  
  toCurrentHome() {
    this.router.navigate([this.userDetails.currHomepage]);
  }
  // navigate to the profile page (not yet implemented)
  toProfile() {
    //To-Do
  }
  // navigate to the records page (not yet implemented)
  toRecords() {
    //To-Do
  }
  // navigate to the resources page (not yet implemented)
  toResources() {
    //To-Do
  }
  // navigate to the fishery notices page (not yet implemented)
  toFisheryNotices() {
    //To-Do
  }
  // log out of account and go back to login screen
  logout() {
    this.localStorageService.removeData('currID');
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_2__.OnlineStatusType.OFFLINE) {
      this.router.navigate(['login']);
      return;
    }
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
  }
}
MenuComponent.??fac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_2__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT));
};
MenuComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  decls: 35,
  vars: 1,
  consts: [["mat-button", "", 3, "matMenuTriggerFor"], [1, "menu-button"], [1, "menu"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "item-icon"], [1, "menu-item"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 0)(1, "mat-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "mat-menu", 2, 3)(5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function MenuComponent_Template_button_click_5_listener() {
        return ctx.toCurrentHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "home");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, "Home/My Trip");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function MenuComponent_Template_button_click_10_listener() {
        return ctx.toProfile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, "person");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function MenuComponent_Template_button_click_15_listener() {
        return ctx.toRecords();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "folder");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "Records");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function MenuComponent_Template_button_click_20_listener() {
        return ctx.toResources();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](22, "description");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, "Resources");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function MenuComponent_Template_button_click_25_listener() {
        return ctx.toFisheryNotices();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27, "notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](29, "Fishery Notices");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function MenuComponent_Template_button_click_30_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](32, "logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](34, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matMenuTriggerFor", _r0);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger],
  styles: [".menu {\r\n    background-color: #005d87 !important;\r\n} \r\n\r\n.menu-item[_ngcontent-%COMP%] {\r\n    color: white !important;\r\n    font-weight: 400;\r\n    margin: auto;\r\n}\r\n\r\n.item-icon[_ngcontent-%COMP%] {\r\n    color: #ff6f61 !important;\r\n}\r\n\r\n.menu-button[_ngcontent-%COMP%] {\r\n    color: #ff6f61 !important;\r\n    transform: scale(2);\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tZW51IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVkODcgIWltcG9ydGFudDtcclxufSBcclxuXHJcbi5tZW51LWl0ZW0ge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uaXRlbS1pY29uIHtcclxuICAgIGNvbG9yOiAjZmY2ZjYxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI2ZmNmY2MSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6912:
/*!******************************************************************!*\
  !*** ./src/app/reports/cancel-report/cancel-report.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelReportComponent": () => (/* binding */ CancelReportComponent)
/* harmony export */ });
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);







class CancelReportComponent {
  constructor(localStorageService, router, toastr, onlineStatusService) {
    this.localStorageService = localStorageService;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    // data preambles
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    let currID = this.localStorageService.getCurrID();
    this.userDetails = this.localStorageService.getUserByID(currID);
  }
  // go back to the active trip home screen
  toHome() {
    this.router.navigate(['active-trip-home']);
  }
  // send cancel report to DFO
  sendToDFO() {
    // eventually, we will put the information gathered in local storage
    this.updateHomepage();
    this.router.navigate(['submitted-report'], {
      state: {
        name: 'Cancel Fishing Report'
      }
    });
  }
  updateHomepage() {
    this.userDetails.currHomepage = 'no-trip-home';
    this.localStorageService.saveData(this.userDetails.userID, this.userDetails);
  }
}
CancelReportComponent.??fac = function CancelReportComponent_Factory(t) {
  return new (t || CancelReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_5__.OnlineStatusService));
};
CancelReportComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
  type: CancelReportComponent,
  selectors: [["app-cancel-report"]],
  decls: 24,
  vars: 0,
  consts: [[1, "container", "report-container"], ["align", "center", 1, "row"], [1, "blue-heading-title"], [1, "row", "bottom-buttons"], [1, "col-1"], [1, "col-4"], [1, "row"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-red", 3, "click"], [1, "col-2"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"]],
  template: function CancelReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, " Are you sure you want to cancel this trip? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 1)(5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, " Doing so will send a Cancel Fishing Report to DFO. Please refer to the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, " Resources ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, " page for more information on cancelled trips. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 5)(13, "div", 6)(14, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function CancelReportComponent_Template_button_click_14_listener() {
        return ctx.toHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, " No ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 5)(19, "div", 6)(20, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function CancelReportComponent_Template_button_click_20_listener() {
        return ctx.sendToDFO();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, " Yes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](23, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton],
  styles: [".report-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.blue-heading-title[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  font-weight: bold;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n\r\n.fishing-button-red[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61 !important;\r\n  color: white !important;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.bottom-buttons[_ngcontent-%COMP%] {\r\n  padding-bottom: 2%\r\n}\r\n\r\n\r\np[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  margin-bottom: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9jYW5jZWwtcmVwb3J0L2NhbmNlbC1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0U7QUFDRjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLyogT3RoZXIgY29udGFpbmVyIHN0eWxlcyAqL1xyXG4ucmVwb3J0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogVGl0bGUgdGV4dCAqL1xyXG4uYmx1ZS1oZWFkaW5nLXRpdGxlIHtcclxuICBjb2xvcjogIzAwNWQ4NztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLyogUmVkIGJ1dHRvbnMgKi9cclxuLmZpc2hpbmctYnV0dG9uLXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmY2MSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIE5vIGFuZCBZZXMgYnV0dG9ucyAqL1xyXG4uYm90dG9tLWJ1dHRvbnMge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJVxyXG59XHJcblxyXG4vKiBQYXJhZ3JhcGggdGV4dCAqL1xyXG5wIHtcclxuICBjb2xvcjogIzAwNWQ4NztcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9384:
/*!************************************************************!*\
  !*** ./src/app/reports/end-report/end-report.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndReportComponent": () => (/* binding */ EndReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-models/trip-models/trip.model */ 5636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);




















function EndReportComponent_h6_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"](" Question ", ctx_r0.currPage, " of ", ctx_r0.numPages, " ");
  }
}
function EndReportComponent_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, " End Fishing Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
  }
}
function EndReportComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-spinner", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("diameter", 50)("strokeWidth", 6)("value", ctx_r2.spinnerProgress);
  }
}
function EndReportComponent_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
  }
}
function EndReportComponent_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " priority_high ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
  }
}
function EndReportComponent_div_13_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
  }
}
function EndReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, " When will you end fishing? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 21)(7, "mat-card", 22)(8, "mat-calendar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("selectedChange", function EndReportComponent_div_13_Template_mat_calendar_selectedChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["????resetView"](ctx_r12.endDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 2)(11, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, " Where did you last fish? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "div", 13)(14, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, " Management Area(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, " (Do not include sub-area) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](19, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](20, EndReportComponent_div_13_mat_error_20_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("selected", ctx_r5.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r5.endForm.invalid);
  }
}
function EndReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, " Would you like to add a comment? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 13)(5, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, " Comments (optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-form-field", 27)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, " Comments... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](10, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
  }
}
function EndReportComponent_div_15_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
  }
}
function EndReportComponent_div_15_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r15.endForm.get("managementArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function EndReportComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, " Is all information complete and ready to be submitted to DFO? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 13)(5, "h6", 24)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, " End Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 13)(11, "h6", 24)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13, " Management Area: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](14, EndReportComponent_div_15_span_14_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](15, EndReportComponent_div_15_span_15_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "div", 13)(17, "h6", 24)(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, " Comments: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](9, 4, ctx_r7.endDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r7.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !ctx_r7.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", (tmp_3_0 = ctx_r7.endForm.get("comments")) == null ? null : tmp_3_0.value, " ");
  }
}
function EndReportComponent_div_17_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
function EndReportComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div")(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, " Your license area and gear type require you to provide additional information. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 2)(5, "h6", 24)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, " Please Provide Arrival Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 13)(9, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, " Designated Landing Site ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "mat-form-field", 25)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13, " Site Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](14, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](15, EndReportComponent_div_17_mat_error_15_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "div", 13)(17, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](18, " Estimated Arrival Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "ngb-timepicker", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function EndReportComponent_div_17_Template_ngb_timepicker_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["????resetView"](ctx_r17.arrivalTime = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r8.arrivalForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("meridian", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](4, _c0))("ngModel", ctx_r8.arrivalTime);
  }
}
function EndReportComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
  }
}
function EndReportComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Send to DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
  }
}
class EndReportComponent {
  constructor(auth, router, toastr, onlineStatusService, localStorageService) {
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.localStorageService = localStorageService;
    // data preambles
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    this.currTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_1__.Trip();
    // report data
    this.endForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
      managementArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('') // page 2
    });

    this.endDate = new Date(); // page 1
    // arrival form for 
    this.arrivalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
      site: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]) // arrival page (page 4)
    });

    this.arrivalDate = new Date();
    this.arrivalTime = {
      hour: 0,
      minute: 0
    };
    // page to page
    this.numPages = 0;
    this.currPage = 0;
    this.spinnerProgress = 0;
    this.spinnerIncrement = 0;
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_5__.OnlineStatusType.OFFLINE) {
      let currID = this.localStorageService.getCurrID();
      this.userDetails = this.localStorageService.getUserByID(currID);
      this.initialize();
    } else {
      // get user details
      this.auth.user$.subscribe(user => {
        if (user) {
          // get user data details
          this.userDetails = this.localStorageService.getUser(user);
          this.initialize();
        }
      });
    }
  }
  // initialize values
  initialize() {
    // get current fishing report
    this.currTrip = this.localStorageService.validateCurrTrip(this.userDetails.currTrip);
    // set time to current time
    this.arrivalTime = {
      hour: this.arrivalDate.getHours(),
      minute: this.arrivalDate.getMinutes()
    };
    this.numPages = 2;
    this.spinnerIncrement = 100 / this.numPages;
    this.toNextPage();
  }
  // check current page before going to the next one
  toNextPage() {
    if (this.currPage <= this.numPages) {
      this.incrementPage();
    } else {
      this.sendToDFO();
    }
  }
  // forward one page
  incrementPage() {
    this.currPage++;
    this.spinnerProgress += this.spinnerIncrement;
  }
  // back one page
  toPreviousPage() {
    if (this.currPage === 1) {
      this.toHome();
      return;
    }
    this.currPage--;
    this.spinnerProgress -= this.spinnerIncrement;
  }
  // check if management area is invalid
  managementAreaInvalid() {
    return this.endForm.get('managementArea')?.errors?.required;
  }
  // send start fishing report to DFO
  sendToDFO() {
    // not on arrival page
    if (this.currPage < 4) {
      if (this.endForm.valid) {
        // arrival details for troll gear and license area G
        if (this.currTrip.isComplete && this.currTrip.gear.name === 'Troll' && this.currTrip.licenseArea.licenseName === 'G') {
          // set arrival time to current time
          let newDate = new Date();
          this.arrivalTime = {
            hour: newDate.getHours(),
            minute: newDate.getMinutes()
          };
          // go to arrival page
          this.currPage++;
          return;
        }
        this.toSubmittedReport();
        return;
      }
    }
    // arrival page
    else {
      if (this.arrivalForm.valid) {
        this.currTrip.site = this.arrivalForm.get('site')?.value;
        this.setDateTime();
        this.currTrip.arrivalDate = this.arrivalDate;
        this.userDetails.currTrip = this.currTrip;
        this.localStorageService.saveData(this.userDetails.userID, this.userDetails);
        this.toSubmittedReport();
        return;
      }
    }
    this.toastr.error("Not all required fields filled", "Invalid form");
  }
  updateHomepage(homeName) {
    this.userDetails.currHomepage = homeName;
    this.localStorageService.saveData(this.userDetails.userID, this.userDetails);
  }
  // update the start date hour and minute, only needed on 'Next'
  setDateTime() {
    let arrivalHours = this.arrivalTime.hour;
    let arrivalMinutes = this.arrivalTime.minute;
    this.arrivalDate.setHours(arrivalHours ? arrivalHours : this.arrivalDate.getHours());
    this.arrivalDate.setMinutes(arrivalMinutes ? arrivalMinutes : this.arrivalDate.getMinutes());
    this.arrivalDate.setSeconds(0);
    this.arrivalDate.setMilliseconds(0);
  }
  toSubmittedReport() {
    if (this.currTrip.offloadNeeded === true) {
      this.updateHomepage('offload-home');
    } else {
      this.updateHomepage('no-trip-home');
    }
    this.router.navigate(['submitted-report'], {
      state: {
        name: 'End Fishing Report'
      }
    });
  }
  // go back to the active trip home screen
  toHome() {
    this.router.navigate(['active-trip-home']);
  }
}
EndReportComponent.??fac = function EndReportComponent_Factory(t) {
  return new (t || EndReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_5__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService));
};
EndReportComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
  type: EndReportComponent,
  selectors: [["app-end-report"]],
  decls: 32,
  vars: 13,
  consts: [[1, "container", "report-container"], [1, "container", 2, "padding-top", "20px"], ["align", "center", 1, "row"], [4, "ngIf"], [1, "col-5"], [1, "col-2"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value", 4, "ngIf"], ["class", "top-icon", 4, "ngIf"], [3, "formGroup"], ["class", "container details", 4, "ngIf"], [1, "row", "bottom-buttons"], [1, "col-1"], [1, "col-4"], [1, "row"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-blue", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"], [1, "text-muted"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value"], [1, "top-icon"], [1, "container", "details"], [1, "blue-heading-title"], [1, "col-8"], [1, "demo-inline-calendar-card", 2, "margin-top", "10%"], [3, "selected", "selectedChange"], [1, "blue-label"], ["appearance", "outline"], ["matInput", "", "placeholder", "e.g. Area1, Area2", "formControlName", "managementArea"], ["appearance", "fill"], ["matInput", "", "rows", "9", "formControlName", "comments"], ["class", "invalid-field", 4, "ngIf"], [1, "invalid-field"], ["matInput", "", "formControlName", "site"], [3, "meridian", "ngModelOptions", "ngModel", "ngModelChange"]],
  template: function EndReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, EndReportComponent_h6_3_Template, 3, 2, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, EndReportComponent_h6_4_Template, 3, 0, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](8, EndReportComponent_mat_spinner_8_Template, 1, 3, "mat-spinner", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](9, EndReportComponent_mat_icon_9_Template, 2, 0, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](10, EndReportComponent_mat_icon_10_Template, 2, 0, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](11, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](13, EndReportComponent_div_13_Template, 21, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](14, EndReportComponent_div_14_Template, 11, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](15, EndReportComponent_div_15_Template, 21, 6, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](17, EndReportComponent_div_17_Template, 20, 5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](19, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "div", 12)(21, "div", 13)(22, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function EndReportComponent_Template_button_click_22_listener() {
        return ctx.toPreviousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](25, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "div", 12)(27, "div", 13)(28, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function EndReportComponent_Template_button_click_28_listener() {
        return ctx.toNextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](29, EndReportComponent_span_29_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](30, EndReportComponent_span_30_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](31, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.currPage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.currPage === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.endForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.currPage === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.currPage === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.currPage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.arrivalForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.currPage === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.currPage > ctx.numPages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatCalendar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbTimepicker, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: [".report-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.mat-mdc-progress-spinner[_ngcontent-%COMP%] {\r\n  --mdc-circular-progress-active-indicator-color: #3ebfb9 !important;\r\n}\r\n\r\n\r\n.top-icon[_ngcontent-%COMP%] {\r\n  color: #3ebfb9;\r\n}\r\n\r\n\r\n.blue-heading-title[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  font-weight: bold;\r\n  margin-top: 5%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\n\r\n.blue-label[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  margin-top: 5%;\r\n}\r\n\r\n\r\n.fishing-button-blue[_ngcontent-%COMP%] {\r\n  background-color: #005d87 !important;\r\n  color: white !important;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.fishing-button-red[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61 !important;\r\n  color: white !important;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.bottom-buttons[_ngcontent-%COMP%] {\r\n  margin-top: auto;\r\n  padding-bottom: 2%;\r\n}\r\n\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  margin-bottom: 5%;\r\n}\r\n\r\n\r\n.invalid-field[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9lbmQtcmVwb3J0L2VuZC1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxrRUFBa0U7QUFDcEU7O0FBRUEsZ0RBQWdEO0FBQ2hEO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsVUFBVTtBQUNaIiwic291cmNlc0NvbnRlbnQiOlsiLyogT3RoZXIgY29udGFpbmVyIHN0eWxlcyAqL1xyXG4ucmVwb3J0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogUHJvZ3Jlc3Mgc3Bpbm5lciBjb2xvciAqL1xyXG4ubWF0LW1kYy1wcm9ncmVzcy1zcGlubmVyIHtcclxuICAtLW1kYy1jaXJjdWxhci1wcm9ncmVzcy1hY3RpdmUtaW5kaWNhdG9yLWNvbG9yOiAjM2ViZmI5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEljb25zIHRoYXQgcmVwbGFjZSBzcGlubmVyIGF0IHRvcCBvZiBzY3JlZW4gKi9cclxuLnRvcC1pY29uIHtcclxuICBjb2xvcjogIzNlYmZiOTtcclxufVxyXG5cclxuLyogVGl0bGUgdGV4dCAqL1xyXG4uYmx1ZS1oZWFkaW5nLXRpdGxlIHtcclxuICBjb2xvcjogIzAwNWQ4NztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuLyogQmx1ZSB0ZXh0IGZvciBmaWVsZCBsYWJlbHMgKi9cclxuLmJsdWUtbGFiZWwge1xyXG4gIGNvbG9yOiAjMDA1ZDg3O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4vKiBCbHVlIGJ1dHRvbnMgKi9cclxuLmZpc2hpbmctYnV0dG9uLWJsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkODcgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBSZWQgYnV0dG9ucyAqL1xyXG4uZmlzaGluZy1idXR0b24tcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2ZjYxICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogQmFjayBhbmQgTmV4dCBidXR0b25zICovXHJcbi5ib3R0b20tYnV0dG9ucyB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi8qIEFsbCBkZXRhaWwgcGFnZXMgKi9cclxuLmRldGFpbHMge1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4vKiBJZiB2YWx1ZSBpcyBpbnZhbGlkICovXHJcbi5pbnZhbGlkLWZpZWxkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2955:
/*!********************************************************************!*\
  !*** ./src/app/reports/offload-report/offload-report.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffloadReportComponent": () => (/* binding */ OffloadReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-models/trip-models/trip.model */ 5636);
/* harmony import */ var _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-models/catch-table-models/species-data.model */ 439);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogs/add-species-dialog/add-species-dialog.component */ 8600);
/* harmony import */ var src_app_data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data-models/catch-table-models/table-rules.model */ 9356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);




























function OffloadReportComponent_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "h6")(1, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate2"](" Question ", ctx_r0.currPage, " of ", ctx_r0.numPages, " ");
  }
}
function OffloadReportComponent_h6_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "h6")(1, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, " Offload Catch Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
  }
}
function OffloadReportComponent_mat_spinner_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "mat-spinner", 18);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("diameter", 50)("strokeWidth", 6)("value", ctx_r2.spinnerProgress);
  }
}
function OffloadReportComponent_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
function OffloadReportComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 20)(1, "div", 3)(2, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, " When did you offload? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "div", 22)(7, "mat-card", 23)(8, "mat-calendar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("selectedChange", function OffloadReportComponent_div_12_Template_mat_calendar_selectedChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["????resetView"](ctx_r10.offloadDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](9, "ngb-timepicker", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("ngModelChange", function OffloadReportComponent_div_12_Template_ngb_timepicker_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["????resetView"](ctx_r12.offloadTime = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("selected", ctx_r4.offloadDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("meridian", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](4, _c0))("ngModel", ctx_r4.offloadTime);
  }
}
function OffloadReportComponent_div_13_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
  if (rf & 2) {
    const response_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", response_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", response_r17, " ");
  }
}
function OffloadReportComponent_div_13_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
}
function OffloadReportComponent_div_13_div_10_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
}
function OffloadReportComponent_div_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div")(1, "div", 3)(2, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, " Please provide the slip number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "mat-form-field", 26)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](6, " Slip number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("input", function OffloadReportComponent_div_13_div_10_Template_input_input_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["????resetView"](ctx_r19.forbidNonNumeric("fishSlipNumber"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](8, OffloadReportComponent_div_13_div_10_mat_error_8_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r15.offloadForm.invalid);
  }
}
function OffloadReportComponent_div_13_div_11_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
  if (rf & 2) {
    const weightUnit_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", weightUnit_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", weightUnit_r23, " ");
  }
}
function OffloadReportComponent_div_13_div_11_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
}
function OffloadReportComponent_div_13_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 3)(1, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, " How would you like to record catch weight? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "mat-form-field", 26)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](5, " Select Units ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "mat-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](7, OffloadReportComponent_div_13_div_11_mat_option_7_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](8, OffloadReportComponent_div_13_div_11_mat_error_8_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx_r16.weightUnitOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r16.offloadForm.invalid);
  }
}
function OffloadReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div")(1, "div", 3)(2, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, " Were you issued a fish slip or sale slip? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "mat-form-field", 26)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](6, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "mat-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](8, OffloadReportComponent_div_13_mat_option_8_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](9, OffloadReportComponent_div_13_mat_error_9_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](10, OffloadReportComponent_div_13_div_10_Template, 9, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](11, OffloadReportComponent_div_13_div_11_Template, 9, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx_r5.responseOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r5.offloadForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r5.fishSlipVal() === "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r5.getCurrentGearType() === "Seine");
  }
}
function OffloadReportComponent_div_14_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "h6", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " Please record total catch for each species in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "either ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](5, "weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](7, " or");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](9, " pieces");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](10, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
}
function OffloadReportComponent_div_14_h6_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "h6", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " Please record total catch for each species in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, " pieces ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](4, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
}
function OffloadReportComponent_div_14_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
}
function OffloadReportComponent_div_14_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
  if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", element_r34.speciesName, " ");
  }
}
function OffloadReportComponent_div_14_div_11_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"]("(", ctx_r35.getWeightUnits(), ")");
  }
}
function OffloadReportComponent_div_14_div_11_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
  if (rf & 2) {
    const element_r37 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", ctx_r36.determineCellStyling(element_r37.offloadWeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", element_r37.offloadWeight, " ");
  }
}
function OffloadReportComponent_div_14_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](1, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](3, OffloadReportComponent_div_14_div_11_th_3_Template, 4, 1, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, OffloadReportComponent_div_14_div_11_td_4_Template, 2, 2, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
}
function OffloadReportComponent_div_14_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " Pieces ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
}
function OffloadReportComponent_div_14_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
  if (rf & 2) {
    const element_r38 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", ctx_r30.determineCellStyling(element_r38.offloadPieces));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", element_r38.offloadPieces, " ");
  }
}
function OffloadReportComponent_div_14_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "tr", 50);
  }
}
function OffloadReportComponent_div_14_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function OffloadReportComponent_div_14_tr_17_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r42);
      const index_r40 = restoredCtx.index;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["????resetView"](ctx_r41.addSpeciesDialog(index_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
}
function OffloadReportComponent_div_14_h6_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "h6")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, " Total Weight: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", ctx_r33.calculateTotalFish("weight"), " ");
  }
}
function OffloadReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div")(1, "div", 3)(2, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, " Offload Catch Table ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, OffloadReportComponent_div_14_h6_4_Template, 11, 0, "h6", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](5, OffloadReportComponent_div_14_h6_5_Template, 5, 0, "h6", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](7, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](9, OffloadReportComponent_div_14_th_9_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](10, OffloadReportComponent_div_14_td_10_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](11, OffloadReportComponent_div_14_div_11_Template, 5, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](12, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](14, OffloadReportComponent_div_14_th_14_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](15, OffloadReportComponent_div_14_td_15_Template, 2, 2, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](16, OffloadReportComponent_div_14_tr_16_Template, 1, 0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](17, OffloadReportComponent_div_14_tr_17_Template, 1, 0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](18, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](19, OffloadReportComponent_div_14_h6_19_Template, 4, 1, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](20, "h6")(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](22, " Total Pieces: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](24, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](26, "div", 22)(27, "div", 14)(28, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function OffloadReportComponent_div_14_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["????resetView"](ctx_r43.addSpeciesDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](29, " Add New Species ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](30, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r6.getCurrentGearType() === "Seine");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r6.getCurrentGearType() === "Gill Net");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("dataSource", ctx_r6.tableDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r6.getCurrentGearType() === "Seine");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("matHeaderRowDef", ctx_r6.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("matRowDefColumns", ctx_r6.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r6.getCurrentGearType() === "Seine");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", ctx_r6.calculateTotalFish("pieces"), " ");
  }
}
function OffloadReportComponent_div_15_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
}
function OffloadReportComponent_div_15_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r46.offloadForm.get("fishSlipIssued")) == null ? null : tmp_0_0.value, " ");
  }
}
function OffloadReportComponent_div_15_div_22_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
}
function OffloadReportComponent_div_15_div_22_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r50.offloadForm.get("fishSlipNumber")) == null ? null : tmp_0_0.value, " ");
  }
}
function OffloadReportComponent_div_15_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 14)(1, "h6", 45)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, " Slip Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, OffloadReportComponent_div_15_div_22_span_4_Template, 2, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](5, OffloadReportComponent_div_15_div_22_span_5_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", (tmp_0_0 = ctx_r47.offloadForm.get("fishSlipNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !((tmp_1_0 = ctx_r47.offloadForm.get("fishSlipNumber")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.required));
  }
}
function OffloadReportComponent_div_15_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 14)(1, "h6", 45)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "Total Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" (", (tmp_0_0 = ctx_r48.offloadForm.get("weightUnits")) == null ? null : tmp_0_0.value, "): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", ctx_r48.calculateTotalFish("weight"), " ");
  }
}
function OffloadReportComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 52)(1, "div", 3)(2, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, " Is all information complete and ready to be submitted to DFO? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "div", 14)(5, "h6", 45)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](7, " Offload Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "div", 14)(11, "h6", 45)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](13, " Offload Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "div", 14)(17, "h6", 45)(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](19, " Fish Slip Issued?: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](20, OffloadReportComponent_div_15_span_20_Template, 2, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](21, OffloadReportComponent_div_15_span_21_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](22, OffloadReportComponent_div_15_div_22_Template, 6, 2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](23, OffloadReportComponent_div_15_div_23_Template, 8, 2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](24, "div", 14)(25, "h6", 45)(26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](27, "Total Pieces:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](9, 7, ctx_r7.offloadDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind2"](15, 9, ctx_r7.offloadDate, "h:mm a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", (tmp_2_0 = ctx_r7.offloadForm.get("fishSlipIssued")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !((tmp_3_0 = ctx_r7.offloadForm.get("fishSlipIssued")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r7.fishSlipVal() === "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r7.getCurrentGearType() === "Seine");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", ctx_r7.calculateTotalFish("pieces"), " ");
  }
}
function OffloadReportComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
}
function OffloadReportComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " Send to DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
  }
}
class OffloadReportComponent {
  constructor(dialog, auth, router, toastr, onlineStatusService, localStorageService) {
    this.dialog = dialog;
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.localStorageService = localStorageService;
    this.offloadTable = new src_app_data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_4__.TableRules(); // used in add species dialog
    this.tableDataSource = []; // all species data currently in the table
    this.displayedColumns = []; // columns currently being displayed in the table
    this.weightUnitOptions = ['Lbs', 'Kgs']; //hardcoded values to be used in the form
    // data preambles
    this.responseOptions = ['Yes', 'No']; //hardcoded values to be used in the form
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    this.unfilteredFishList = []; // temporary array to store species contained in local storage
    this.fishList = []; //filtered list of species data, will comprise the user's look-up list
    this.currTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_1__.Trip();
    this.offloadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({
      fishSlipIssued: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      fishSlipNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
      weightUnits: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('') // page 2 (always auto-selected so no need for validation)
    });

    this.offloadDate = new Date(); // page 1
    this.offloadTime = {
      hour: 0,
      minute: 0
    }; // page 1
    // page controls
    this.numPages = 0;
    this.currPage = 0;
    this.spinnerProgress = 0;
    this.spinnerIncrement = 0;
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_8__.OnlineStatusType.OFFLINE) {
      let currID = this.localStorageService.getCurrID();
      this.userDetails = this.localStorageService.getUserByID(currID);
      this.initialize();
    } else {
      // get user details
      this.auth.user$.subscribe(user => {
        if (user) {
          // get user data details
          this.userDetails = this.localStorageService.getUser(user);
          this.initialize();
        }
      });
    }
  }
  ngOnInit() {
    this.onFishSlipChange();
  }
  onFishSlipChange() {
    this.offloadForm.get('fishSlipIssued')?.valueChanges.subscribe(value => {
      const fishSlipControl = this.offloadForm.get('fishSlipNumber');
      if (value === 'Yes') {
        fishSlipControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
      } else {
        fishSlipControl?.clearValidators();
      }
      fishSlipControl?.updateValueAndValidity();
    });
  }
  initialize() {
    // get all required data
    this.currTrip = this.localStorageService.validateCurrTrip(this.userDetails.currTrip);
    this.unfilteredFishList = this.localStorageService.getSpeciesList('fishList');
    this.setTableRules();
    this.filterSpeciesData(); // filter species list available to the user
    // initialize table data
    this.getTableData();
    this.offloadForm.patchValue({
      weightUnits: 'Lbs'
    }); // automatically set to lbs (most common unit)
    this.setDisplayedColumns();
    // set the start time to the current time
    this.offloadTime = {
      hour: this.offloadDate.getHours(),
      minute: this.offloadDate.getMinutes()
    };
    this.numPages = 3;
    this.spinnerIncrement = 100 / this.numPages;
    this.toNextPage();
  }
  // table rules will be the same as they are for the current gear's Daily Catch Report with a couple differences:
  // tableType will instead be 'offload-catch' and containsSpecies list will be cleared since we are getting that info from the daily catch reports
  setTableRules() {
    this.offloadTable = this.localStorageService.getTableRules(this.currTrip.gear.name);
    this.offloadTable.tableType = 'offload-catch';
    this.offloadTable.containsSpecies.length = 0; // clear contains list
  }
  // gets default table data based on the species that were caught/released during the current trip
  getTableData() {
    // loop through each daily catch report in currTrip, and add all species data to the table source
    let speciesNamesList = []; // temp storage for species names (used for comparison)
    for (let catchReport of this.currTrip.dailyCatchReports) {
      // loop through each catch report 
      for (let species of catchReport.speciesDataList) {
        // loop through each species list
        // only include if the species is not already in our list and it was kept 
        if (!speciesNamesList.includes(species.speciesName) && species.kept > 0) {
          let tempSpecies = species;
          tempSpecies.kept = 0;
          tempSpecies.released = 0;
          tempSpecies.offloadPieces = 0;
          tempSpecies.offloadWeight = 0;
          this.tableDataSource.push(tempSpecies); // add species to the table
          speciesNamesList.push(species.speciesName);
        }
      }
    }
  }
  toNextPage() {
    if (this.currPage <= this.numPages) {
      if (this.currPage === 1) {
        this.setDateTime();
      }
      this.currPage++;
      this.spinnerProgress += this.spinnerIncrement;
    } else {
      this.sendToDFO();
    }
  }
  toPreviousPage() {
    if (this.currPage === 1) {
      this.toHome();
    }
    this.currPage--;
    this.spinnerProgress -= this.spinnerIncrement;
  }
  setDateTime() {
    let startHours = this.offloadTime.hour;
    let startMinutes = this.offloadTime.minute;
    this.offloadDate.setHours(startHours ? startHours : this.offloadDate.getHours());
    this.offloadDate.setMinutes(startMinutes ? startMinutes : this.offloadDate.getMinutes());
    this.offloadDate.setSeconds(0);
    this.offloadDate.setMilliseconds(0);
  }
  setDisplayedColumns() {
    if (this.getCurrentGearType() === 'Seine') {
      this.displayedColumns = ['speciesName', 'weight', 'pieces'];
    } else {
      // will be Gill Net in this case
      this.displayedColumns = ['speciesName', 'pieces'];
    }
  }
  fishSlipVal() {
    let getFishSlip = this.offloadForm.get('fishSlipIssued');
    if (getFishSlip?.errors?.required) {
      return '[Required]';
    }
    return getFishSlip?.value;
  }
  getWeightUnits() {
    let getUnits = this.offloadForm.get('weightUnits');
    return getUnits?.value;
  }
  getCurrentGearType() {
    return this.currTrip.gear.name;
  }
  filterSpeciesData() {
    for (let species of this.unfilteredFishList) {
      let excludeFlag = false;
      for (let tableSpecies of this.tableDataSource) {
        if (species.speciesName === tableSpecies.speciesName) {
          excludeFlag = true; // we only want to add species to the list that are not already in the table
        }
      }

      if (excludeFlag === false) {
        // if the species is not already in the table
        if (!this.offloadTable.excludesSpecies.includes(species.speciesName) &&
        // only add the species if it is not excluded from in the gear type
        !this.offloadTable.releaseOnlySpecies.includes(species.speciesName)) {
          // only add the species if it is not release-only
          this.fishList.push(species);
        }
      }
      excludeFlag = false; // reset flag
    }
  }
  // add to, edit or delete from species catch list
  addSpeciesDialog(index = -1) {
    // editing or deleting a species
    if (index > -1) {
      this.editSpecies(this.tableDataSource, index);
    }
    // adding a species
    else {
      this.addSpecies(this.tableDataSource);
    }
  }
  // add new species to the catch
  addSpecies(fishListDetails) {
    const dialogRef = this.dialog.open(_dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_3__.AddSpeciesDialogComponent, {
      width: '500px',
      height: '450px',
      data: {
        identifier: 'add',
        species: new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_2__.SpeciesData(''),
        currentFishList: fishListDetails,
        filteredFishList: this.fishList,
        tableInfo: this.offloadTable
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // adding a species to the catch
        if (result !== 'delete') {
          fishListDetails.push(this.getNewSpecies(result));
        }
        // update the table
        this.updateTable();
      }
    });
  }
  // edit or delete a species from the catch
  editSpecies(fishListDetails, index) {
    const dialogRef = this.dialog.open(_dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_3__.AddSpeciesDialogComponent, {
      width: '500px',
      height: '450px',
      data: {
        identifier: 'edit',
        species: this.tableDataSource[index],
        currentFishList: fishListDetails,
        filteredFishList: this.fishList,
        tableInfo: this.offloadTable
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // editing a species in the catch
        if (result !== 'delete') {
          fishListDetails[index] = this.getNewSpecies(result);
        }
        // delete a species in the catch
        else {
          fishListDetails.splice(index, 1);
        }
        // update the table
        this.updateTable();
      }
    });
  }
  determineCellStyling(value) {
    if (value > 0) {
      return 'bolded-cell';
    }
    return 'faded-cell';
  }
  // get new species data from result
  getNewSpecies(result) {
    let weight = result.offloadWeight ? +result.offloadWeight : 0;
    let pieces = result.offloadPieces ? +result.offloadPieces : 0;
    let newSpeciesData = new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_2__.SpeciesData(result.speciesName);
    newSpeciesData.offloadWeight = weight;
    newSpeciesData.offloadPieces = pieces;
    return newSpeciesData;
  }
  calculateTotalFish(type) {
    let totalFish = 0;
    if (type === 'weight') {
      for (var i = 0; i < this.tableDataSource.length; i++) {
        totalFish += this.tableDataSource[i].offloadWeight;
      }
    } else if (type === 'pieces') {
      for (var i = 0; i < this.tableDataSource.length; i++) {
        totalFish += this.tableDataSource[i].offloadPieces;
      }
    }
    return totalFish;
  }
  // update the specified species catch table
  updateTable() {
    this.table.renderRows();
  }
  toHome() {
    // navigate to the user's current homepage (may be offload-home or active-trip-home)
    this.router.navigate([this.userDetails.currHomepage]);
  }
  // forbid field from entering non-decimal values
  forbidNonNumeric(controlName) {
    let control = this.offloadForm.get(controlName);
    control.setValue(control.value.replace(/[^0-9]/g, ''));
  }
  updateHomepage() {
    this.userDetails.currHomepage = 'no-trip-home';
    this.localStorageService.saveData(this.userDetails.userID, this.userDetails);
  }
  sendToDFO() {
    if (this.offloadForm.valid) {
      this.router.navigate(['submitted-report'], {
        state: {
          name: 'Offload Catch Report'
        }
      });
      return;
    }
    this.toastr.error("Not all required fields filled", "Invalid form");
  }
}
OffloadReportComponent.??fac = function OffloadReportComponent_Factory(t) {
  return new (t || OffloadReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_8__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService));
};
OffloadReportComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({
  type: OffloadReportComponent,
  selectors: [["app-offload-report"]],
  viewQuery: function OffloadReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????viewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????loadQuery"]()) && (ctx.table = _t.first);
    }
  },
  decls: 30,
  vars: 11,
  consts: [[1, "container", "report-container"], [3, "formGroup"], [1, "container", 2, "padding-top", "20px"], ["align", "center", 1, "row"], [4, "ngIf"], [1, "col-5"], [1, "col-2"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value", 4, "ngIf"], ["style", "color: #3ebfb9", 4, "ngIf"], ["class", "container details", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "row", "bottom-buttons"], [1, "col-1"], [1, "col-4"], [1, "row"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-blue", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"], [1, "text-muted"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value"], [2, "color", "#3ebfb9"], [1, "container", "details"], [1, "blue-heading-title"], [1, "col-8"], [1, "demo-inline-calendar-card", 2, "margin-top", "10%"], [3, "selected", "selectedChange"], [1, "time-picker", 3, "meridian", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", 2, "padding-top", "15px"], ["formControlName", "fishSlipIssued"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "row", "align", "center", 4, "ngIf"], [3, "value"], ["matInput", "", "inputmode", "numeric", "formControlName", "fishSlipNumber", 3, "input"], ["formControlName", "weightUnits"], ["class", "blue-label", 4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", "margin-table", 3, "dataSource"], ["matColumnDef", "speciesName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "pieces"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "row", 2, "padding-top", "10px"], ["align", "center", 1, "row", "add-item", 2, "padding-top", "15px"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-red", 3, "click"], [1, "blue-label"], ["mat-header-cell", ""], ["mat-cell", ""], ["matColumnDef", "weight"], ["mat-cell", "", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], [1, "container"], ["class", "invalid-field", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "invalid-field"]],
  template: function OffloadReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, OffloadReportComponent_h6_4_Template, 3, 2, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](5, OffloadReportComponent_h6_5_Template, 3, 0, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](9, OffloadReportComponent_mat_spinner_9_Template, 1, 3, "mat-spinner", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](10, OffloadReportComponent_mat_icon_10_Template, 2, 0, "mat-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](12, OffloadReportComponent_div_12_Template, 10, 5, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](13, OffloadReportComponent_div_13_Template, 12, 4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](14, OffloadReportComponent_div_14_Template, 31, 8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](15, OffloadReportComponent_div_15_Template, 30, 12, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](17, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](18, "div", 13)(19, "div", 14)(20, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function OffloadReportComponent_Template_button_click_20_listener() {
        return ctx.toPreviousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](21, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](22, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](23, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](24, "div", 13)(25, "div", 14)(26, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function OffloadReportComponent_Template_button_click_26_listener() {
        return ctx.toNextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](27, OffloadReportComponent_span_27_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](28, OffloadReportComponent_span_28_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](29, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("formGroup", ctx.offloadForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.currPage === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.currPage === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.currPage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.currPage > ctx.numPages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatCalendar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatError, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbTimepicker, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
  styles: [".report-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n  }\r\n  \r\n  \r\n  .mat-mdc-progress-spinner[_ngcontent-%COMP%] {\r\n    --mdc-circular-progress-active-indicator-color: #3ebfb9 !important;\r\n  }\r\n  \r\n  \r\n  .mat-mdc-radio-button.mat-accent[_ngcontent-%COMP%] {\r\n    --mdc-radio-selected-focus-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-hover-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-pressed-icon-color: #3ebfb9;\r\n    --mat-mdc-radio-checked-ripple-color: #3ebfb9;\r\n  }\r\n  \r\n    .mat-mdc-text-field-wrapper {\r\n    background-color: whitesmoke !important;\r\n  }\r\n  \r\n  \r\n  .radio[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    margin-top: 1%;\r\n  }\r\n  \r\n  \r\n  .blue-heading-title[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    font-weight: bold;\r\n    margin-top: 5%;\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  \r\n  .blue-heading-subtitle[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n    margin-bottom: 1%;\r\n    padding-left: 10%;\r\n  }\r\n  \r\n  \r\n  .blue-label[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n  }\r\n  \r\n  \r\n  .add-item[_ngcontent-%COMP%] {\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  \r\n  .fishing-button-blue[_ngcontent-%COMP%] {\r\n    background-color: #005d87 !important;\r\n    color: white !important;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  \r\n  .fishing-button-red[_ngcontent-%COMP%] {\r\n    background-color: #ff6f61 !important;\r\n    color: white !important;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  \r\n  .time-picker[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n  \r\n  \r\n  .font-list[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .bottom-buttons[_ngcontent-%COMP%] {\r\n    margin-top: auto;\r\n    padding-bottom: 3%;\r\n    padding-top: 10px\r\n  }\r\n  \r\n  \r\n  .details[_ngcontent-%COMP%] {\r\n    margin-bottom: 5%;\r\n  }\r\n  \r\n  \r\n  .invalid-field[_ngcontent-%COMP%] {\r\n    color: red;\r\n  }\r\n\r\n  \r\n  .margin-table[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  .mat-column-speciesName[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    border-right: 1px solid;\r\n  }\r\n\r\n  .mat-column-weight[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n  .mat-column-pieces[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n  .bolded-cell[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .faded-cell[_ngcontent-%COMP%] {\r\n    font-weight: lighter;\r\n  }\r\n\r\n  .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid;\r\n    border-top: 1px solid;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n    background-color: whitesmoke;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9vZmZsb2FkLXJlcG9ydC9vZmZsb2FkLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBLDJCQUEyQjtFQUMzQjtJQUNFLGtFQUFrRTtFQUNwRTs7RUFFQSx3QkFBd0I7RUFDeEI7SUFDRSw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHdDQUF3QztJQUN4QyxnREFBZ0Q7SUFDaEQsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsdUNBQXVDO0VBQ3pDOztFQUVBLGtCQUFrQjtFQUNsQjtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGNBQWM7RUFDaEI7O0VBRUEsZUFBZTtFQUNmO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBLGtCQUFrQjtFQUNsQjtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQSwrQkFBK0I7RUFDL0I7SUFDRSxjQUFjO0lBQ2QsY0FBYztFQUNoQjs7RUFFQSwwQkFBMEI7RUFDMUI7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBLGlCQUFpQjtFQUNqQjtJQUNFLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztFQUVBLGdCQUFnQjtFQUNoQjtJQUNFLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztFQUVBLG9DQUFvQztFQUNwQztJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQSxrQkFBa0I7RUFDbEI7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUVBLHVCQUF1QjtFQUN2QjtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEI7RUFDRjs7RUFFQSxxQkFBcUI7RUFDckI7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUEsd0JBQXdCO0VBQ3hCO0lBQ0UsVUFBVTtFQUNaOztFQUVBLFVBQVU7RUFDVjtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDRCQUE0QjtFQUM5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIE90aGVyIGNvbnRhaW5lciBzdHlsZXMgKi9cclxuLnJlcG9ydC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFByb2dyZXNzIHNwaW5uZXIgY29sb3IgKi9cclxuICAubWF0LW1kYy1wcm9ncmVzcy1zcGlubmVyIHtcclxuICAgIC0tbWRjLWNpcmN1bGFyLXByb2dyZXNzLWFjdGl2ZS1pbmRpY2F0b3ItY29sb3I6ICMzZWJmYjkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogUmFkaW8gYnV0dG9uIGNvbG9ycyAqL1xyXG4gIC5tYXQtbWRjLXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IHtcclxuICAgIC0tbWRjLXJhZGlvLXNlbGVjdGVkLWZvY3VzLWljb24tY29sb3I6ICMzZWJmYjk7XHJcbiAgICAtLW1kYy1yYWRpby1zZWxlY3RlZC1ob3Zlci1pY29uLWNvbG9yOiAjM2ViZmI5O1xyXG4gICAgLS1tZGMtcmFkaW8tc2VsZWN0ZWQtaWNvbi1jb2xvcjogIzNlYmZiOTtcclxuICAgIC0tbWRjLXJhZGlvLXNlbGVjdGVkLXByZXNzZWQtaWNvbi1jb2xvcjogIzNlYmZiOTtcclxuICAgIC0tbWF0LW1kYy1yYWRpby1jaGVja2VkLXJpcHBsZS1jb2xvcjogIzNlYmZiOTtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJhZGlvIGJ1dHRvbnMgKi9cclxuICAucmFkaW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gIH1cclxuICBcclxuICAvKiBUaXRsZSB0ZXh0ICovXHJcbiAgLmJsdWUtaGVhZGluZy10aXRsZSB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICB9XHJcbiAgXHJcbiAgLyogU3VidGl0bGUgdGV4dCAqL1xyXG4gIC5ibHVlLWhlYWRpbmctc3VidGl0bGUge1xyXG4gICAgY29sb3I6ICMwMDVkODc7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEJsdWUgdGV4dCBmb3IgZmllbGQgbGFiZWxzICovXHJcbiAgLmJsdWUtbGFiZWwge1xyXG4gICAgY29sb3I6ICMwMDVkODc7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIHRyaXAgSUQgb3IgdmVzc2VsICovXHJcbiAgLmFkZC1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEJsdWUgYnV0dG9ucyAqL1xyXG4gIC5maXNoaW5nLWJ1dHRvbi1ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVkODcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgLyogUmVkIGJ1dHRvbnMgKi9cclxuICAuZmlzaGluZy1idXR0b24tcmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZmNjEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGl6YXRpb24gZm9yIHRoZSB0aW1lIHBpY2tlciAqL1xyXG4gIC50aW1lLXBpY2tlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZvbnQgZm9yIGxpc3QgKi9cclxuICAuZm9udC1saXN0IHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE5vIGFuZCBZZXMgYnV0dG9ucyAqL1xyXG4gIC5ib3R0b20tYnV0dG9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHhcclxuICB9XHJcbiAgXHJcbiAgLyogQWxsIGRldGFpbCBwYWdlcyAqL1xyXG4gIC5kZXRhaWxzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIH1cclxuICBcclxuICAvKiBJZiB2YWx1ZSBpcyBpbnZhbGlkICovXHJcbiAgLmludmFsaWQtZmllbGQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIC8qIFRhYmxlICovXHJcbiAgLm1hcmdpbi10YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLXNwZWNpZXNOYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLXdlaWdodHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLXBpZWNlc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5ib2xkZWQtY2VsbCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5mYWRlZC1jZWxsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1tZGMtcm93IC5tYXQtbWRjLWNlbGwge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAubWF0LW1kYy1yb3c6aG92ZXIgLm1hdC1tZGMtY2VsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuXHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8679:
/*!****************************************************************!*\
  !*** ./src/app/reports/pause-report/pause-report.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PauseReportComponent": () => (/* binding */ PauseReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);













function PauseReportComponent_h6_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" Question ", ctx_r0.currPage, " of ", ctx_r0.numPages, " ");
  }
}
function PauseReportComponent_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " End Fishing Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
  }
}
function PauseReportComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-spinner", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("diameter", 50)("strokeWidth", 6)("value", ctx_r2.spinnerProgress);
  }
}
function PauseReportComponent_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}
function PauseReportComponent_div_12_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}
function PauseReportComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " When did you not fish? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 21)(7, "mat-card", 22)(8, "mat-calendar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectedChange", function PauseReportComponent_div_12_Template_mat_calendar_selectedChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r10.pauseDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2)(11, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Where did you last fish? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 13)(14, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Management Area(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " (Do not include sub-area) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, PauseReportComponent_div_12_mat_error_20_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("selected", ctx_r4.pauseDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.pauseForm.invalid);
  }
}
function PauseReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Would you like to add a comment? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 13)(5, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Comments (optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-form-field", 27)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Comments... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
  }
}
function PauseReportComponent_div_14_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}
function PauseReportComponent_div_14_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r13.pauseForm.get("managementArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function PauseReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Is all information complete and ready to be submitted to DFO? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 13)(5, "h6", 24)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Pause Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 13)(11, "h6", 24)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Management Area: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, PauseReportComponent_div_14_span_14_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, PauseReportComponent_div_14_span_15_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13)(17, "h6", 24)(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Comments: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 4, ctx_r6.pauseDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r6.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (tmp_3_0 = ctx_r6.pauseForm.get("comments")) == null ? null : tmp_3_0.value, " ");
  }
}
function PauseReportComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}
function PauseReportComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Send to DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}
class PauseReportComponent {
  constructor(router, toastr) {
    this.router = router;
    this.toastr = toastr;
    // report data
    this.pauseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormGroup({
      managementArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
      comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('') // page 2
    });

    this.pauseDate = new Date(); // page 1
    // page to page
    this.numPages = 0;
    this.currPage = 0;
    this.spinnerProgress = 0;
    this.spinnerIncrement = 0;
    this.numPages = 2;
    this.spinnerIncrement = 100 / this.numPages;
    this.toNextPage();
  }
  // check current page before going to the next one
  toNextPage() {
    if (this.currPage <= this.numPages) {
      this.incrementPage();
    } else {
      this.sendToDFO();
    }
  }
  // forward one page
  incrementPage() {
    this.currPage++;
    this.spinnerProgress += this.spinnerIncrement;
  }
  // back one page
  toPreviousPage() {
    if (this.currPage === 1) {
      this.toHome();
      return;
    }
    this.currPage--;
    this.spinnerProgress -= this.spinnerIncrement;
  }
  // check if management area is invalid
  managementAreaInvalid() {
    return this.pauseForm.get('managementArea')?.errors?.required;
  }
  // send start fishing report to DFO
  sendToDFO() {
    if (this.pauseForm.valid) {
      this.router.navigate(['submitted-report'], {
        state: {
          name: 'Pause Fishing Report'
        }
      });
      return;
    }
    this.toastr.error("Not all required fields filled", "Invalid form");
  }
  // go back to the active trip home screen
  toHome() {
    this.router.navigate(['active-trip-home']);
  }
}
PauseReportComponent.??fac = function PauseReportComponent_Factory(t) {
  return new (t || PauseReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService));
};
PauseReportComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: PauseReportComponent,
  selectors: [["app-pause-report"]],
  decls: 29,
  vars: 10,
  consts: [[1, "container", "report-container"], [1, "container", 2, "padding-top", "20px"], ["align", "center", 1, "row"], [4, "ngIf"], [1, "col-5"], [1, "col-2"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value", 4, "ngIf"], ["style", "color: #3ebfb9", 4, "ngIf"], [3, "formGroup"], ["class", "container details", 4, "ngIf"], [1, "row", "bottom-buttons"], [1, "col-1"], [1, "col-4"], [1, "row"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-blue", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"], [1, "text-muted"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value"], [2, "color", "#3ebfb9"], [1, "container", "details"], [1, "blue-heading-title"], [1, "col-8"], [1, "demo-inline-calendar-card", 2, "margin-top", "10%"], [3, "selected", "selectedChange"], [1, "blue-label"], ["appearance", "outline"], ["matInput", "", "placeholder", "e.g. Area1, Area2", "formControlName", "managementArea"], ["appearance", "fill"], ["matInput", "", "rows", "9", "formControlName", "comments"], ["class", "invalid-field", 4, "ngIf"], [1, "invalid-field"]],
  template: function PauseReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PauseReportComponent_h6_3_Template, 3, 2, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, PauseReportComponent_h6_4_Template, 3, 0, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, PauseReportComponent_mat_spinner_8_Template, 1, 3, "mat-spinner", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, PauseReportComponent_mat_icon_9_Template, 2, 0, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, PauseReportComponent_div_12_Template, 21, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, PauseReportComponent_div_13_Template, 11, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, PauseReportComponent_div_14_Template, 21, 6, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12)(18, "div", 13)(19, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PauseReportComponent_Template_button_click_19_listener() {
        return ctx.toPreviousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 12)(24, "div", 13)(25, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PauseReportComponent_Template_button_click_25_listener() {
        return ctx.toNextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, PauseReportComponent_span_26_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, PauseReportComponent_span_27_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.pauseForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currPage === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currPage === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currPage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currPage > ctx.numPages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatCalendar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: [".report-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.mat-mdc-progress-spinner[_ngcontent-%COMP%] {\r\n  --mdc-circular-progress-active-indicator-color: #3ebfb9 !important;\r\n}\r\n\r\n\r\n.blue-heading-title[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  font-weight: bold;\r\n  margin-top: 5%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\n\r\n.blue-label[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  margin-top: 5%;\r\n}\r\n\r\n\r\n.fishing-button-blue[_ngcontent-%COMP%] {\r\n  background-color: #005d87 !important;\r\n  color: white !important;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.fishing-button-red[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61 !important;\r\n  color: white !important;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.bottom-buttons[_ngcontent-%COMP%] {\r\n  margin-top: auto;\r\n  padding-bottom: 2%;\r\n}\r\n\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  margin-bottom: 5%;\r\n}\r\n\r\n\r\n.invalid-field[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9wYXVzZS1yZXBvcnQvcGF1c2UtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCO0FBQzNCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0Usa0VBQWtFO0FBQ3BFOztBQUVBLGVBQWU7QUFDZjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxVQUFVO0FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBPdGhlciBjb250YWluZXIgc3R5bGVzICovXHJcbi5yZXBvcnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiBQcm9ncmVzcyBzcGlubmVyIGNvbG9yICovXHJcbi5tYXQtbWRjLXByb2dyZXNzLXNwaW5uZXIge1xyXG4gIC0tbWRjLWNpcmN1bGFyLXByb2dyZXNzLWFjdGl2ZS1pbmRpY2F0b3ItY29sb3I6ICMzZWJmYjkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogVGl0bGUgdGV4dCAqL1xyXG4uYmx1ZS1oZWFkaW5nLXRpdGxlIHtcclxuICBjb2xvcjogIzAwNWQ4NztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuLyogQmx1ZSB0ZXh0IGZvciBmaWVsZCBsYWJlbHMgKi9cclxuLmJsdWUtbGFiZWwge1xyXG4gIGNvbG9yOiAjMDA1ZDg3O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4vKiBCbHVlIGJ1dHRvbnMgKi9cclxuLmZpc2hpbmctYnV0dG9uLWJsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkODcgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBSZWQgYnV0dG9ucyAqL1xyXG4uZmlzaGluZy1idXR0b24tcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2ZjYxICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogQmFjayBhbmQgTmV4dCBidXR0b25zICovXHJcbi5ib3R0b20tYnV0dG9ucyB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi8qIEFsbCBkZXRhaWwgcGFnZXMgKi9cclxuLmRldGFpbHMge1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4vKiBJZiB2YWx1ZSBpcyBpbnZhbGlkICovXHJcbi5pbnZhbGlkLWZpZWxkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 788:
/*!****************************************************************!*\
  !*** ./src/app/reports/start-report/start-report.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartReportComponent": () => (/* binding */ StartReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/trip-models/trip.model */ 5636);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-models/trip-models/gear-models/gear.model */ 9793);
/* harmony import */ var _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-models/user-models/vessel-data.model */ 504);
/* harmony import */ var _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-models/trip-models/license-area.model */ 634);
/* harmony import */ var _dialogs_add_vessel_dialog_add_vessel_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialogs/add-vessel-dialog/add-vessel-dialog.component */ 9026);
/* harmony import */ var _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tel-input/tel-input.component */ 2823);
/* harmony import */ var _data_models_validator_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data-models/validator.model */ 4654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





























const _c0 = ["telInput"];
function StartReportComponent_h6_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate2"](" Question ", ctx_r0.currPage, " of ", ctx_r0.numPages, " ");
  }
}
function StartReportComponent_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](2, " Start Fishing Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
  }
}
function StartReportComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](0, "mat-spinner", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("diameter", 50)("strokeWidth", 6)("value", ctx_r2.spinnerProgress);
  }
}
function StartReportComponent_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function StartReportComponent_div_12_mat_radio_button_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-radio-button", 25)(1, "h6")(2, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const gear_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("value", gear_r15)("checked", gear_r15.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", gear_r15, " ");
  }
}
function StartReportComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3, " What type of gear are you using? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "div", 13)(5, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](6, " My available logbooks: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](9, "div", 22)(10, "mat-radio-group", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](11, StartReportComponent_div_12_mat_radio_button_11_Template, 4, 3, "mat-radio-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", ctx_r4.gears);
  }
}
function StartReportComponent_div_13_mat_radio_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-radio-button", 25)(1, "h6")(2, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const vessel_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("value", vessel_r17)("checked", vessel_r17.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", vessel_r17, " ");
  }
}
function StartReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3, " Choose or add your vessel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](6, "div", 22)(7, "mat-radio-group", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](8, StartReportComponent_div_13_mat_radio_button_8_Template, 4, 3, "mat-radio-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](12, "div", 22)(13, "div", 13)(14, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function StartReportComponent_div_13_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????restoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["????resetView"](ctx_r18.addVesselDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](15, " Add New Vessel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", ctx_r5.userVessels);
  }
}
function StartReportComponent_div_14_mat_radio_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-radio-button", 25)(1, "h6")(2, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const area_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("value", area_r21)("checked", area_r21.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", area_r21, " ");
  }
}
function StartReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3, " What is your License Area? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](6, "div", 22)(7, "mat-radio-group", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](8, StartReportComponent_div_14_mat_radio_button_8_Template, 4, 3, "mat-radio-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", ctx_r6.licenseAreas);
  }
}
function StartReportComponent_div_15_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function StartReportComponent_div_15_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function StartReportComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3, " Who is the vessel master? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "div", 13)(5, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](6, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](7, "mat-form-field", 32)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](9, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](10, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](11, StartReportComponent_div_15_mat_error_11_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](12, "div", 13)(13, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](14, " FIN (Fisher Identification Number) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](15, "mat-form-field", 32)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](17, " Fisher Identification Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](18, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](19, StartReportComponent_div_15_mat_error_19_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r7.startForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r7.startForm.invalid);
  }
}
function StartReportComponent_div_16_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
const _c1 = function () {
  return {
    standalone: true
  };
};
function StartReportComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3, " When will you start fishing? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](6, "div", 35)(7, "mat-card", 36)(8, "mat-calendar", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("selectedChange", function StartReportComponent_div_16_Template_mat_calendar_selectedChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????restoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["????resetView"](ctx_r25.startDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](9, "ngb-timepicker", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("ngModelChange", function StartReportComponent_div_16_Template_ngb_timepicker_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????restoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["????resetView"](ctx_r27.startTime = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](11, "div", 2)(12, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](13, " Where will you fish? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](14, "div", 13)(15, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](16, " Management Area(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](18, " (Do not include sub-area) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](19, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](20, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](21, StartReportComponent_div_16_mat_error_21_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("selected", ctx_r8.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("meridian", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pureFunction0"](5, _c1))("ngModel", ctx_r8.startTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r8.startForm.invalid);
  }
}
function StartReportComponent_div_17_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function StartReportComponent_div_17_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function StartReportComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3, " Please provide onboard contact details. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "div", 13)(5, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](6, " Contact Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](7, "mat-form-field", 32)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](9, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](10, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](11, StartReportComponent_div_17_mat_error_11_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](12, "div", 13)(13, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](14, " Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](15, "mat-form-field", 32, 41)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](18, " Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](19, "app-tel-input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](21, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](22, " phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](23, StartReportComponent_div_17_mat_error_23_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r9.startForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r9.startForm.invalid);
  }
}
function StartReportComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3, " Would you like to add a comment? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "div", 13)(5, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](6, " Comments (optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](7, "mat-form-field", 45)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](9, " Comments... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](10, "textarea", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
  }
}
function StartReportComponent_div_19_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function StartReportComponent_div_19_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r33.startForm.get("gear")) == null ? null : tmp_0_0.value, " ");
  }
}
function StartReportComponent_div_19_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function StartReportComponent_div_19_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate2"](" ", (tmp_0_0 = ctx_r35.startForm.get("master")) == null ? null : tmp_0_0.value, " (FIN: ", (tmp_0_0 = ctx_r35.startForm.get("fin")) == null ? null : tmp_0_0.value, ") ");
  }
}
function StartReportComponent_div_19_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function StartReportComponent_div_19_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r37.startForm.get("vessel")) == null ? null : tmp_0_0.value, " ");
  }
}
function StartReportComponent_div_19_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function StartReportComponent_div_19_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r39.startForm.get("licenseArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function StartReportComponent_div_19_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function StartReportComponent_div_19_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", (tmp_0_0 = ctx_r41.startForm.get("managementArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function StartReportComponent_div_19_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function StartReportComponent_div_19_span_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate2"](" ", (tmp_0_0 = ctx_r43.startForm.get("name")) == null ? null : tmp_0_0.value, ", ", (tmp_0_0 = ctx_r43.startForm.get("phoneNum")) == null ? null : tmp_0_0.value, " ");
  }
}
function StartReportComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3, " Is all information complete and ready to be submitted to DFO? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "div", 13)(5, "h6", 31)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](7, " Gear Type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](8, StartReportComponent_div_19_span_8_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](9, StartReportComponent_div_19_span_9_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](10, "div", 13)(11, "h6", 31)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](13, " Vessel Master: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](14, StartReportComponent_div_19_span_14_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](15, StartReportComponent_div_19_span_15_Template, 2, 2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](16, "div", 13)(17, "h6", 31)(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](19, " Vessel: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](20, StartReportComponent_div_19_span_20_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](21, StartReportComponent_div_19_span_21_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](22, "div", 13)(23, "h6", 31)(24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](25, " License Area: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](26, StartReportComponent_div_19_span_26_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](27, StartReportComponent_div_19_span_27_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](28, "div", 13)(29, "h6", 31)(30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](31, " Start Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipe"](33, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](34, "div", 13)(35, "h6", 31)(36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](37, " Start Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipe"](39, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](40, "div", 13)(41, "h6", 31)(42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](43, " Management Area: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](44, StartReportComponent_div_19_span_44_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](45, StartReportComponent_div_19_span_45_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](46, "div", 13)(47, "h6", 31)(48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](49, " Contact Details: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](50, StartReportComponent_div_19_span_50_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](51, StartReportComponent_div_19_span_51_Template, 2, 2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](52, "div", 13)(53, "h6", 31)(54, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](55, " Comments: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    let tmp_14_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r11.gearInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", !ctx_r11.gearInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r11.masterInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", !ctx_r11.masterInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r11.vesselInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", !ctx_r11.vesselInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r11.licenseAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", !ctx_r11.licenseAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipeBind1"](33, 15, ctx_r11.startDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipeBind2"](39, 17, ctx_r11.startDate, "h:mm a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r11.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", !ctx_r11.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r11.contactDetailsInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", !ctx_r11.contactDetailsInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", (tmp_14_0 = ctx_r11.startForm.get("comments")) == null ? null : tmp_14_0.value, " ");
  }
}
function StartReportComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
function StartReportComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Send to DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
  }
}
class StartReportComponent {
  constructor(dialog, auth, router, onlineStatusService, toastr, localStorageService) {
    this.dialog = dialog;
    this.auth = auth;
    this.router = router;
    this.onlineStatusService = onlineStatusService;
    this.toastr = toastr;
    this.localStorageService = localStorageService;
    // data preambles
    this.currTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_0__.Trip();
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
    this.gears = [];
    this.userVessels = [];
    this.licenseAreas = [];
    this.emptyGear = new _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_2__.Gear('', '');
    this.emptyVessel = new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_3__.VesselData('', '');
    this.emptyArea = new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_4__.LicenseArea('', '');
    // report data
    this.startForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormGroup({
      gear: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.emptyGear, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      vessel: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.emptyVessel, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      licenseArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.emptyArea, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      master: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      fin: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      managementArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      phoneNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(new _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_6__.Tel('', '', ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, (0,_data_models_validator_model__WEBPACK_IMPORTED_MODULE_7__.generalValidator)()]),
      comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('') // page 7
    });

    this.startDate = new Date(); // page 5
    this.startTime = {
      hour: 0,
      minute: 0
    }; // page 5
    // page to page
    this.numPages = 0;
    this.currPage = 0;
    this.spinnerProgress = 0;
    this.spinnerIncrement = 0;
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_11__.OnlineStatusType.OFFLINE) {
      let currID = this.localStorageService.getCurrID();
      this.userDetails = this.localStorageService.getUserByID(currID);
      this.initialize();
    } else {
      // get user details
      this.auth.user$.subscribe(user => {
        if (user) {
          // get user data details
          this.userDetails = this.localStorageService.getUser(user);
          this.initialize();
        }
      });
    }
  }
  // initialize the data
  initialize() {
    // get all gears, vessels, license areas
    this.gears = this.localStorageService.getGears();
    this.userVessels = this.userDetails.vessels;
    this.licenseAreas = this.localStorageService.getLicenseAreas();
    // initialize form upon first entry, or populate with completed fishing report
    this.currTrip = this.localStorageService.validateCurrTrip(this.userDetails.currTrip);
    let currGear = this.emptyGear;
    let currVessel = this.emptyVessel;
    let currArea = this.emptyArea;
    let currMaster = this.currTrip.master;
    let currFin = this.currTrip.fin;
    let currManagementArea = this.currTrip.managementArea;
    let currName = this.currTrip.name;
    let currPhoneNum = this.currTrip.phoneNum;
    let currComments = this.currTrip.comments;
    // clear old data from the previous trip
    this.clearTripData();
    // set the start time to the current time
    this.startTime = {
      hour: this.startDate.getHours(),
      minute: this.startDate.getMinutes()
    };
    // fishing report already has gear, vessel and area data
    if (this.currTrip.isInProgress || this.currTrip.isComplete) {
      currGear = this.setSelectedGear(currGear);
      currVessel = this.setSelectedVessel(currVessel);
      currArea = this.setSelectedArea(currArea);
    }
    // fishing report does not yet have gear, vessel or area data
    else {
      this.currTrip.isInProgress = true;
      currGear = this.gears[0];
      currVessel = this.userVessels[0];
      currArea = this.licenseAreas[0];
    }
    // populate report
    this.startForm.patchValue({
      gear: currGear,
      vessel: currVessel,
      licenseArea: currArea,
      master: currMaster,
      fin: currFin,
      managementArea: currManagementArea,
      name: currName,
      phoneNum: currPhoneNum,
      comments: currComments
    });
    this.saveCurrTrip();
    this.numPages = 7;
    this.spinnerIncrement = 100 / this.numPages;
    this.toNextPage();
  }
  // set the radio buttons to the currently selected gear in the fishing report
  setSelectedGear(currGear) {
    currGear = this.currTrip.gear;
    for (let gear of this.gears) {
      gear.isChecked = gear.logbookID === currGear.logbookID;
    }
    return currGear;
  }
  // set the radio buttons to the currently selected vessel in the fishing report
  setSelectedVessel(currVessel) {
    currVessel = this.currTrip.vessel;
    for (let vessel of this.userVessels) {
      vessel.isChecked = vessel.vesselCoastNumber === currVessel.vesselCoastNumber;
    }
    return currVessel;
  }
  // set the radio buttons to the currently selected license area in the fishing report
  setSelectedArea(currArea) {
    currArea = this.currTrip.licenseArea;
    for (let licenseArea of this.licenseAreas) {
      licenseArea.isChecked = licenseArea.licenseName === currArea.licenseName;
    }
    return currArea;
  }
  // check current page before going to the next one
  toNextPage() {
    if (this.currPage <= this.numPages) {
      switch (this.currPage) {
        // to vessel page
        case 1:
          let currVessel = new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_3__.VesselData('', '');
          currVessel = this.setSelectedVessel(currVessel);
          this.startForm.patchValue({
            vessel: currVessel
          });
          break;
        // to license area page
        case 2:
          let currArea = new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_4__.LicenseArea('', '');
          currArea = this.setSelectedArea(currArea);
          this.startForm.patchValue({
            licenseArea: currArea
          });
          break;
        // save date in date page
        case 5:
          this.setDateTime();
          break;
        // save phone number in contact details page
        case 6:
          this.telInput.touched = true;
          this.telInput.stateChanges.next();
          this.startForm.get('phoneNum')?.updateValueAndValidity();
          break;
        default:
          break;
      }
      this.saveCurrTrip();
      this.incrementPage();
    } else {
      this.sendToDFO();
    }
  }
  // forward one page
  incrementPage() {
    this.currPage++;
    this.spinnerProgress += this.spinnerIncrement;
  }
  // back one page
  toPreviousPage() {
    switch (this.currPage) {
      // back to home if at beginning of report
      case 1:
        this.saveCurrTrip();
        this.toHome();
        return;
      // to gear page
      case 2:
        let currGear = new _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_2__.Gear('', '');
        currGear = this.setSelectedGear(currGear);
        this.startForm.patchValue({
          gear: currGear
        });
        break;
      // to vessel page
      case 3:
        let currVessel = new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_3__.VesselData('', '');
        currVessel = this.setSelectedVessel(currVessel);
        this.startForm.patchValue({
          vessel: currVessel
        });
        break;
      // to license area page
      case 4:
        let currArea = new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_4__.LicenseArea('', '');
        currArea = this.setSelectedArea(currArea);
        this.startForm.patchValue({
          licenseArea: currArea
        });
        break;
      default:
        break;
    }
    this.saveCurrTrip();
    this.currPage--;
    this.spinnerProgress -= this.spinnerIncrement;
  }
  // save the current trip information
  saveCurrTrip() {
    this.currTrip.gear = this.startForm.get('gear')?.value;
    this.currTrip.vessel = this.startForm.get('vessel')?.value;
    this.currTrip.licenseArea = this.startForm.get('licenseArea')?.value;
    this.currTrip.master = this.startForm.get('master')?.value;
    this.currTrip.fin = this.startForm.get('fin')?.value;
    this.currTrip.startDate = this.startDate;
    this.currTrip.managementArea = this.startForm.get('managementArea')?.value;
    this.currTrip.name = this.startForm.get('name')?.value;
    this.currTrip.phoneNum = this.startForm.get('phoneNum')?.value;
    this.currTrip.comments = this.startForm.get('comments')?.value;
    this.userDetails.currTrip = this.currTrip;
    this.localStorageService.saveData(this.userDetails.userID, this.userDetails);
  }
  clearTripData() {
    this.currTrip.offloadNeeded = false; // reset offload flag
    this.currTrip.dailyCatchReports.length = 0; // clear all daily catch report data
    // save changes to local storage
    this.userDetails.currTrip = this.currTrip;
    this.localStorageService.saveData(this.userDetails.userID, this.userDetails);
  }
  // sets flag in trip data if this trip may need an offload report
  determineOffloadReport() {
    // we only need an offload report if the trip is Seine in Area B, or Gill Net in Area C, D, or, E
    if (this.currTrip.gear.name === 'Seine' && this.currTrip.licenseArea.licenseName === 'B' || this.currTrip.gear.name === 'Gill Net' && (this.currTrip.licenseArea.licenseName === 'C' || this.currTrip.licenseArea.licenseName === 'D' || this.currTrip.licenseArea.licenseName === 'E')) {
      this.currTrip.offloadNeeded = true; // update flag
    } else {
      this.currTrip.offloadNeeded = false; // reset flag otherwise 
    }

    this.userDetails.currTrip = this.currTrip; // save flag changes
    this.localStorageService.saveData(this.userDetails.userID, this.userDetails);
    return;
  }
  // update the start date hour and minute, only needed on 'Next'
  setDateTime() {
    let startHours = this.startTime.hour;
    let startMinutes = this.startTime.minute;
    this.startDate.setHours(startHours ? startHours : this.startDate.getHours());
    this.startDate.setMinutes(startMinutes ? startMinutes : this.startDate.getMinutes());
    this.startDate.setSeconds(0);
    this.startDate.setMilliseconds(0);
  }
  // add vessels
  addVesselDialog() {
    const dialogRef = this.dialog.open(_dialogs_add_vessel_dialog_add_vessel_dialog_component__WEBPACK_IMPORTED_MODULE_5__.AddVesselDialogComponent, {
      width: '500px',
      height: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // update selected vessel as new vessel added then go to next screen
        if (result !== 'delete') {
          for (let vessel of this.userVessels) {
            vessel.isChecked = false;
          }
          let newVessel = new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_3__.VesselData(result.vesselName, result.vesselNumber, true);
          this.startForm.patchValue({
            vessel: newVessel
          });
          this.userDetails.vessels.push(newVessel);
          this.localStorageService.saveData(this.userDetails.userID, this.userDetails);
          this.toNextPage();
        }
      }
    });
  }
  // check if gear value is invalid
  gearInvalid() {
    return this.startForm.get('gear')?.errors?.required;
  }
  // check if master values are invalid
  masterInvalid() {
    return this.startForm.get('master')?.errors?.required || this.startForm.get('fin')?.errors?.required;
  }
  // check if management area is invalid
  vesselInvalid() {
    return this.startForm.get('vessel')?.errors?.required;
  }
  // check if license area is invalid
  licenseAreaInvalid() {
    return this.startForm.get('licenseArea')?.errors?.required;
  }
  // check if management area is invalid
  managementAreaInvalid() {
    return this.startForm.get('managementArea')?.errors?.required;
  }
  // check if contact details are invalid
  contactDetailsInvalid() {
    return this.startForm.get('name')?.errors?.required || this.startForm.get('phoneNum')?.errors?.required;
  }
  // send start fishing report to DFO
  sendToDFO() {
    if (this.startForm.valid) {
      this.currTrip.isInProgress = false;
      this.currTrip.isComplete = true;
      this.saveCurrTrip();
      this.determineOffloadReport(); // check if we will need an offload report for this trip
      this.updateHomepage(); // update the user's active homepage
      this.router.navigate(['submitted-report'], {
        state: {
          name: 'Trip'
        }
      });
      return;
    }
    this.toastr.error("Not all required fields filled", "Invalid form");
  }
  updateHomepage() {
    this.userDetails.currHomepage = 'active-trip-home';
    this.localStorageService.saveData(this.userDetails.userID, this.userDetails);
  }
  // go back to the home screen with no active trip
  toHome() {
    this.router.navigate(['no-trip-home']);
  }
}
StartReportComponent.??fac = function StartReportComponent_Factory(t) {
  return new (t || StartReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_13__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_11__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__.LocalStorageService));
};
StartReportComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineComponent"]({
  type: StartReportComponent,
  selectors: [["app-start-report"]],
  viewQuery: function StartReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????viewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????loadQuery"]()) && (ctx.telInput = _t.first);
    }
  },
  decls: 34,
  vars: 15,
  consts: [[1, "container", "report-container"], [1, "container", 2, "padding-top", "20px"], ["align", "center", 1, "row"], [4, "ngIf"], [1, "col-5"], [1, "col-2"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value", 4, "ngIf"], ["style", "color: #3ebfb9", 4, "ngIf"], [3, "formGroup"], ["class", "container details", 4, "ngIf"], [1, "row", "bottom-buttons"], [1, "col-1"], [1, "col-4"], [1, "row"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-blue", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"], [1, "text-muted"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value"], [2, "color", "#3ebfb9"], [1, "container", "details"], [1, "blue-heading-title"], [1, "blue-heading-subtitle"], [1, "col-10"], ["formControlName", "gear", 1, "radio"], [3, "value", "checked", 4, "ngFor", "ngForOf"], [3, "value", "checked"], [1, "text-muted", "font-list"], ["formControlName", "vessel", 1, "radio"], ["align", "center", 1, "row", "add-item"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-red", 3, "click"], ["formControlName", "licenseArea", 1, "radio"], [1, "blue-label"], ["appearance", "outline"], ["matInput", "", "formControlName", "master"], ["matInput", "", "formControlName", "fin"], [1, "col-8"], [1, "demo-inline-calendar-card", 2, "margin-top", "10%"], [3, "selected", "selectedChange"], [1, "time-picker", 3, "meridian", "ngModelOptions", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "e.g. Area1, Area2", "formControlName", "managementArea"], ["matInput", "", "formControlName", "name"], ["telField", ""], ["formControlName", "phoneNum"], ["telInput", ""], ["matSuffix", ""], ["appearance", "fill"], ["matInput", "", "rows", "9", "formControlName", "comments"], ["class", "invalid-field", 4, "ngIf"], [1, "invalid-field"]],
  template: function StartReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](3, StartReportComponent_h6_3_Template, 3, 2, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](4, StartReportComponent_h6_4_Template, 3, 0, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](8, StartReportComponent_mat_spinner_8_Template, 1, 3, "mat-spinner", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](9, StartReportComponent_mat_icon_9_Template, 2, 0, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](11, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](12, StartReportComponent_div_12_Template, 13, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](13, StartReportComponent_div_13_Template, 17, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](14, StartReportComponent_div_14_Template, 10, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](15, StartReportComponent_div_15_Template, 20, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](16, StartReportComponent_div_16_Template, 22, 6, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](17, StartReportComponent_div_17_Template, 24, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](18, StartReportComponent_div_18_Template, 11, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](19, StartReportComponent_div_19_Template, 57, 20, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](20, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](21, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](22, "div", 12)(23, "div", 13)(24, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function StartReportComponent_Template_button_click_24_listener() {
        return ctx.toPreviousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](26, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](27, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](28, "div", 12)(29, "div", 13)(30, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function StartReportComponent_Template_button_click_30_listener() {
        return ctx.toNextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](31, StartReportComponent_span_31_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](32, StartReportComponent_span_32_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](33, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("formGroup", ctx.startForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage === 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage === 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage === 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage === 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.currPage > ctx.numPages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatCalendar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatSuffix, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinner, _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbTimepicker, _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_6__.TelInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe],
  styles: [".report-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.mat-mdc-progress-spinner[_ngcontent-%COMP%] {\r\n  --mdc-circular-progress-active-indicator-color: #3ebfb9 !important;\r\n}\r\n\r\n\r\n.mat-mdc-radio-button.mat-accent[_ngcontent-%COMP%] {\r\n  --mdc-radio-selected-focus-icon-color: #3ebfb9;\r\n  --mdc-radio-selected-hover-icon-color: #3ebfb9;\r\n  --mdc-radio-selected-icon-color: #3ebfb9;\r\n  --mdc-radio-selected-pressed-icon-color: #3ebfb9;\r\n  --mat-mdc-radio-checked-ripple-color: #3ebfb9;\r\n}\r\n\r\n  .mat-mdc-text-field-wrapper {\r\n  background-color: whitesmoke !important;\r\n}\r\n\r\n\r\n.radio[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  margin-top: 1%;\r\n}\r\n\r\n\r\n.blue-heading-title[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  font-weight: bold;\r\n  margin-top: 5%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\n\r\n.blue-heading-subtitle[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  margin-top: 5%;\r\n  margin-bottom: 1%;\r\n  padding-left: 10%;\r\n}\r\n\r\n\r\n.blue-label[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  margin-top: 5%;\r\n}\r\n\r\n\r\n.add-item[_ngcontent-%COMP%] {\r\n  margin-top: 1%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\n\r\n.fishing-button-blue[_ngcontent-%COMP%] {\r\n  background-color: #005d87 !important;\r\n  color: white !important;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.fishing-button-red[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61 !important;\r\n  color: white !important;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.time-picker[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n\r\n.font-list[_ngcontent-%COMP%] {\r\n  font-size: medium;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.bottom-buttons[_ngcontent-%COMP%] {\r\n  margin-top: auto;\r\n  padding-bottom: 2%;\r\n}\r\n\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  margin-bottom: 5%;\r\n}\r\n\r\n\r\n.invalid-field[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9zdGFydC1yZXBvcnQvc3RhcnQtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCO0FBQzNCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0Usa0VBQWtFO0FBQ3BFOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLDhDQUE4QztFQUM5Qyw4Q0FBOEM7RUFDOUMsd0NBQXdDO0VBQ3hDLGdEQUFnRDtFQUNoRCw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsVUFBVTtBQUNaIiwic291cmNlc0NvbnRlbnQiOlsiLyogT3RoZXIgY29udGFpbmVyIHN0eWxlcyAqL1xyXG4ucmVwb3J0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogUHJvZ3Jlc3Mgc3Bpbm5lciBjb2xvciAqL1xyXG4ubWF0LW1kYy1wcm9ncmVzcy1zcGlubmVyIHtcclxuICAtLW1kYy1jaXJjdWxhci1wcm9ncmVzcy1hY3RpdmUtaW5kaWNhdG9yLWNvbG9yOiAjM2ViZmI5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFJhZGlvIGJ1dHRvbiBjb2xvcnMgKi9cclxuLm1hdC1tZGMtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQge1xyXG4gIC0tbWRjLXJhZGlvLXNlbGVjdGVkLWZvY3VzLWljb24tY29sb3I6ICMzZWJmYjk7XHJcbiAgLS1tZGMtcmFkaW8tc2VsZWN0ZWQtaG92ZXItaWNvbi1jb2xvcjogIzNlYmZiOTtcclxuICAtLW1kYy1yYWRpby1zZWxlY3RlZC1pY29uLWNvbG9yOiAjM2ViZmI5O1xyXG4gIC0tbWRjLXJhZGlvLXNlbGVjdGVkLXByZXNzZWQtaWNvbi1jb2xvcjogIzNlYmZiOTtcclxuICAtLW1hdC1tZGMtcmFkaW8tY2hlY2tlZC1yaXBwbGUtY29sb3I6ICMzZWJmYjk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogUmFkaW8gYnV0dG9ucyAqL1xyXG4ucmFkaW8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG5cclxuLyogVGl0bGUgdGV4dCAqL1xyXG4uYmx1ZS1oZWFkaW5nLXRpdGxlIHtcclxuICBjb2xvcjogIzAwNWQ4NztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuLyogU3VidGl0bGUgdGV4dCAqL1xyXG4uYmx1ZS1oZWFkaW5nLXN1YnRpdGxlIHtcclxuICBjb2xvcjogIzAwNWQ4NztcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLyogQmx1ZSB0ZXh0IGZvciBmaWVsZCBsYWJlbHMgKi9cclxuLmJsdWUtbGFiZWwge1xyXG4gIGNvbG9yOiAjMDA1ZDg3O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4vKiBBZGQgdHJpcCBJRCBvciB2ZXNzZWwgKi9cclxuLmFkZC1pdGVtIHtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuLyogQmx1ZSBidXR0b25zICovXHJcbi5maXNoaW5nLWJ1dHRvbi1ibHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZDg3ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogUmVkIGJ1dHRvbnMgKi9cclxuLmZpc2hpbmctYnV0dG9uLXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmY2MSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIFN0eWxpemF0aW9uIGZvciB0aGUgdGltZSBwaWNrZXIgKi9cclxuLnRpbWUtcGlja2VyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi8qIEZvbnQgZm9yIGxpc3QgKi9cclxuLmZvbnQtbGlzdCB7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIE5vIGFuZCBZZXMgYnV0dG9ucyAqL1xyXG4uYm90dG9tLWJ1dHRvbnMge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG4vKiBBbGwgZGV0YWlsIHBhZ2VzICovXHJcbi5kZXRhaWxzIHtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLyogSWYgdmFsdWUgaXMgaW52YWxpZCAqL1xyXG4uaW52YWxpZC1maWVsZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 782:
/*!************************************************************************!*\
  !*** ./src/app/reports/submitted-report/submitted-report.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmittedReportComponent": () => (/* binding */ SubmittedReportComponent)
/* harmony export */ });
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var src_app_data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data-models/trip-models/trip.model */ 5636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);






class SubmittedReportComponent {
  constructor(localStorageService, router) {
    this.localStorageService = localStorageService;
    this.router = router;
    //data preambles
    this.reportName = "";
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    this.currTrip = new src_app_data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_1__.Trip();
    this.reportName = this.router.getCurrentNavigation()?.extras.state?.name;
    // get current fishing report information
    let currID = this.localStorageService.getCurrID();
    this.userDetails = this.localStorageService.getUserByID(currID);
    this.currTrip = this.localStorageService.validateCurrTrip(this.userDetails.currTrip);
  }
  // go back to the home screen
  toHome() {
    this.router.navigate([this.userDetails.currHomepage]);
  }
}
SubmittedReportComponent.??fac = function SubmittedReportComponent_Factory(t) {
  return new (t || SubmittedReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
SubmittedReportComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
  type: SubmittedReportComponent,
  selectors: [["app-submitted-report"]],
  decls: 20,
  vars: 1,
  consts: [[1, "container", "report-container"], ["align", "center", 1, "row"], [1, "blue-heading-title"], [1, "row", "bottom-buttons"], [1, "col-5"], [1, "col-2"], [1, "row"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"]],
  template: function SubmittedReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, " Report Submitted! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 1)(5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, " Please refer to the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, " Records ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, " page to ensure the report has been received and to view your ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](13, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "div", 5)(15, "div", 6)(16, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SubmittedReportComponent_Template_button_click_16_listener() {
        return ctx.toHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](18, " OK ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](19, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx.reportName, " Confirmation Number. ");
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton],
  styles: [".report-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.blue-heading-title[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  font-weight: bold;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n\r\n.fishing-button-red[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61 !important;\r\n  color: white !important;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.bottom-buttons[_ngcontent-%COMP%] {\r\n  padding-bottom: 2%\r\n}\r\n\r\n\r\np[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  margin-bottom: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9zdWJtaXR0ZWQtcmVwb3J0L3N1Ym1pdHRlZC1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0U7QUFDRjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLyogT3RoZXIgY29udGFpbmVyIHN0eWxlcyAqL1xyXG4ucmVwb3J0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogVGl0bGUgdGV4dCAqL1xyXG4uYmx1ZS1oZWFkaW5nLXRpdGxlIHtcclxuICBjb2xvcjogIzAwNWQ4NztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLyogUmVkIGJ1dHRvbnMgKi9cclxuLmZpc2hpbmctYnV0dG9uLXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmY2MSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIE5vIGFuZCBZZXMgYnV0dG9ucyAqL1xyXG4uYm90dG9tLWJ1dHRvbnMge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJVxyXG59XHJcblxyXG4vKiBQYXJhZ3JhcGggdGV4dCAqL1xyXG5wIHtcclxuICBjb2xvcjogIzAwNWQ4NztcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8345:
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-models/user-models/vessel-data.model */ 504);
/* harmony import */ var _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-models/trip-models/license-area.model */ 634);
/* harmony import */ var _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-models/catch-table-models/species-data.model */ 439);
/* harmony import */ var _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-models/trip-models/gear-models/gear.model */ 9793);
/* harmony import */ var _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data-models/trip-models/trip.model */ 5636);
/* harmony import */ var _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tel-input/tel-input.component */ 2823);
/* harmony import */ var _data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data-models/trip-models/gear-models/net.model */ 786);
/* harmony import */ var _data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data-models/catch-table-models/table-rules.model */ 9356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4817);











class LocalStorageService {
  constructor(toastr) {
    this.toastr = toastr;
    // initialize default lists
    this.setLists();
  }
  // save data to local storage through [key, value] pair
  saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  // get data from key
  getData(key) {
    let item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }
  // remove data given key
  removeData(key) {
    localStorage.removeItem(key);
  }
  // new user after sign up
  createNewUser(user) {
    let id = user?.sub;
    let email = user?.email;
    if (!id || !email) {
      return new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    }
    let newUser = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData(id, email);
    //newUser.trips = this.setTrips();
    newUser.vessels = this.setVessels();
    newUser.currTrip = this.setCurrTrip();
    newUser.nets = this.setNets();
    newUser.currHomepage = this.setHomepage();
    this.saveData(id, newUser);
    let userIDs = this.getAllUserIDs();
    userIDs.push(id);
    this.saveData('userIDs', userIDs);
    this.saveData('currID', id);
    return newUser;
  }
  // get the current user ID for offline data retrieval
  getCurrID() {
    return this.getData('currID');
  }
  // get all the user ids in local storage
  getAllUserIDs() {
    return this.getStringList('userIDs');
  }
  // check if user trips are defined
  validateTrips(trips) {
    // if the trips do not exist, set the default ones
    if (!trips) {
      //return this.setTrips();
    }
    let userTrips = [];
    for (let trip of trips) {
      //userTrips.push(new Trip(trip.tripID));
    }
    return userTrips;
  }
  // check if homepage is defined
  validateHomepage(homepage) {
    if (homepage === '') {
      return this.setHomepage();
    }
    return homepage;
  }
  // check if user vessels are defined
  validateVessels(vessels) {
    // if vessels do not exist, set the default ones
    if (!vessels) {
      return this.setVessels();
    }
    let userVessels = [];
    for (let vessel of vessels) {
      userVessels.push(new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_1__.VesselData(vessel.vesselName, vessel.vesselCoastNumber, vessel.isChecked));
    }
    return userVessels;
  }
  // check if user fishing report is defined
  validateCurrTrip(currTrip) {
    if (!currTrip) {
      return this.setCurrTrip();
    }
    let usercurrTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_5__.Trip();
    usercurrTrip.isComplete = currTrip.isComplete;
    usercurrTrip.isInProgress = currTrip.isInProgress;
    usercurrTrip.master = currTrip.master;
    usercurrTrip.fin = currTrip.fin;
    usercurrTrip.startDate = new Date(currTrip.startDate);
    usercurrTrip.managementArea = currTrip.managementArea;
    usercurrTrip.name = currTrip.name;
    usercurrTrip.phoneNum = this.getPhoneNum(currTrip.phoneNum);
    usercurrTrip.comments = currTrip.comments;
    usercurrTrip.site = currTrip.site;
    usercurrTrip.arrivalDate = new Date(currTrip.arrivalDate);
    let userGear = currTrip.gear;
    let userVessel = currTrip.vessel;
    let userLicenseArea = currTrip.licenseArea;
    usercurrTrip.gear = new _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_4__.Gear(userGear.name, userGear.logbookID, userGear.isChecked);
    usercurrTrip.vessel = new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_1__.VesselData(userVessel.vesselName, userVessel.vesselCoastNumber, userVessel.isChecked);
    usercurrTrip.licenseArea = new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_2__.LicenseArea(userLicenseArea.licenseName, userLicenseArea.licenseLocation, userLicenseArea.isChecked);
    usercurrTrip.offloadNeeded = currTrip.offloadNeeded;
    usercurrTrip.dailyCatchReports = currTrip.dailyCatchReports;
    return usercurrTrip;
  }
  // check if user nets are defined
  validateNets(nets) {
    // if nets do not exist, set the default ones
    if (!nets) {
      return this.setNets();
    }
    let userNets = [];
    for (let net of nets) {
      userNets.push(new _data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_7__.Net(net.netType, net.netName, net.numStrands, net.length, net.weedlineDepth, net.weedlineDepthUnits, net.hangRatio, net.meshSize, net.meshSizeUnits, net.numMeshes, net.isChecked));
    }
    return userNets;
  }
  // get current user data in local storage
  getUserByID(id) {
    let user = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    let userString = this.getData(id);
    if (userString) {
      user.userID = userString.userID;
      user.userEmail = userString.userEmail;
      //user.trips = this.validateTrips(userString.trips);
      user.vessels = this.validateVessels(userString.vessels);
      user.currTrip = this.validateCurrTrip(userString.currTrip);
      user.nets = this.validateNets(userString.nets);
      user.currHomepage = this.validateHomepage(userString.currHomepage);
      this.saveData(user.userID, user);
    } else {
      this.toastr.error("Cannot get user data", "Data error");
    }
    return user;
  }
  // get current user in local storage if online (will use database to sync storage once implemented)
  getUser(user) {
    let thisUser = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    let id = user.sub;
    // if ID does not exist, return an empty user
    if (!id) {
      return thisUser;
    }
    let userString = this.getData(id);
    if (userString) {
      thisUser.userID = userString.userID;
      thisUser.userEmail = userString.userEmail;
      //thisUser.trips = this.validateTrips(userString.trips);
      thisUser.vessels = this.validateVessels(userString.vessels);
      thisUser.currTrip = this.validateCurrTrip(userString.currTrip);
      thisUser.nets = this.validateNets(userString.nets);
      thisUser.currHomepage = this.validateHomepage(userString.currHomepage);
      this.saveData(id, thisUser);
    } else {
      this.toastr.error("Try logging in again", "Data error");
    }
    return thisUser;
  }
  // get license areas stored in local storage
  getLicenseAreas() {
    let licenseAreas = this.getData('licenseAreaList');
    // if license areas do not exist, set them again
    if (!licenseAreas) {
      this.setLicenseAreas();
      licenseAreas = this.getData('licenseAreaList');
    }
    let licenseAreaArray = [];
    for (let licenseArea of licenseAreas) {
      licenseAreaArray.push(new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_2__.LicenseArea(licenseArea.licenseName, licenseArea.licenseLocation, licenseArea.isChecked));
    }
    return licenseAreaArray;
  }
  // get species stored in local storage
  getSpeciesList(name) {
    let speciesList = this.getData(name);
    // if species list does not exist, set it again
    if (!speciesList) {
      this.setSpeciesList();
      speciesList = this.getData(name);
    }
    let speciesArray = [];
    for (let species of speciesList) {
      speciesArray.push(new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData(species.speciesName));
    }
    return speciesArray;
  }
  // get gears stored in local storage
  getGears() {
    let gearList = this.getData('gearList');
    // if gear list does not exist, set it again
    if (!gearList) {
      this.setGears();
      gearList = this.getData('gearList');
    }
    let gearArray = [];
    for (let gear of gearList) {
      gearArray.push(new _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_4__.Gear(gear.name, gear.logbookID, gear.isChecked));
    }
    return gearArray;
  }
  // get table rules for catch table data in local storage
  getTableRules(gearName) {
    let newTable = new _data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_8__.TableRules();
    let tableList = this.getData('tableRulesList');
    // if table list does not exist, set it again
    if (!tableList) {
      this.setTableRules();
      tableList = this.getData('tableRulesList');
    }
    for (let table of tableList) {
      if (table.gearName === gearName) {
        newTable = table;
      }
    }
    return newTable;
  }
  // get phone number from local storage
  getPhoneNum(phoneNum) {
    return new _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_6__.Tel(phoneNum.area, phoneNum.exchange, phoneNum.subscriber);
  }
  // get list of strings stored in local storage
  getStringList(name) {
    let stringList = this.getData(name);
    // if string list does not exist, set it again
    if (!stringList) {
      this.saveData(name, []);
      return this.getData(name);
    }
    let stringArray = [];
    for (let currString of stringList) {
      stringArray.push(currString.toString());
    }
    return stringArray;
  }
  // set the default list of trips - WE SHOULD PROBABLY REMOVE THIS -  no need for default trips even for testing
  // private setTrips(): Trip[] {
  //   let trips: Trip[] = [
  //     new Trip('123456')
  //   ];
  //   return trips;
  // }
  // set the default list of vessels
  setVessels() {
    let vessels = [new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_1__.VesselData("My Vessel 1", "872357", true), new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_1__.VesselData("My Vessel 2", "584317"), new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_1__.VesselData("My Vessel 3", "872358"), new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_1__.VesselData("My Vessel 4", "584318")];
    return vessels;
  }
  // set the no active trip homepage to a new user
  setHomepage() {
    return 'no-trip-home';
  }
  // set the default data for the current trip
  setCurrTrip() {
    return new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_5__.Trip();
  }
  //set the default list of nets
  setNets() {
    let nets = [new _data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_7__.Net("Alaska Twist", "My Net 1", "10", "10", "cm", "2", "15", "cm", "30", "50", true), new _data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_7__.Net("Multi Strand", "My Net 2", "3", "60", "in", "7", "10", "in", "20"), new _data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_7__.Net("Combination", "My Net 3", "8", "60", "mm", "7", "8", "mm", "100")];
    return nets;
  }
  // set gears to local storage
  setGears() {
    let gearList = [new _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_4__.Gear('Gill Net', '1111', true), new _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_4__.Gear('Seine', '2222'), new _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_4__.Gear('Troll', '3333')];
    this.saveData('gearList', gearList);
  }
  // set table rules for what species should show up in the catch table for different gear types
  setTableRules() {
    let gillNetTable = new _data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_8__.TableRules('daily-catch', 'Gill Net');
    gillNetTable.containsSpecies = ['Sockeye', 'Coho', 'Pink', 'Chum', 'Chinook', 'Steelhead', 'Atlantic', 'Dogfish', 'Green Sturgeon', 'White Sturgeon'];
    gillNetTable.excludesSpecies = ['Legal Sized Chinook', 'Sublegal Sized Chinook'];
    gillNetTable.releaseOnlySpecies = ['Steelhead', 'White Sturgeon', 'Green Sturgeon'];
    let seineTable = new _data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_8__.TableRules('daily-catch', 'Seine');
    seineTable.containsSpecies = ['Sockeye', 'Coho', 'Pink', 'Chum', 'Steelhead', 'Atlantic', 'Jack Chinook', 'Adult Chinook'];
    seineTable.excludesSpecies = ['Legal Sized Chinook', 'Sublegal Sized Chinook'];
    let trollTable = new _data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_8__.TableRules('daily-catch', 'Troll');
    trollTable.containsSpecies = ['Sockeye', 'Coho', 'Pink', 'Chum', 'Atlantic', 'Grilse', 'Legal Sized Chinook', 'Sublegal Sized Chinook'];
    trollTable.excludesSpecies = ['Jack Chinook'];
    trollTable.releaseOnlySpecies = ['Sublegal Sized Chinook', 'Grilse'];
    let tableRulesList = [gillNetTable, seineTable, trollTable];
    this.saveData('tableRulesList', tableRulesList);
  }
  // set license areas to local storage
  setLicenseAreas() {
    let licenseAreaList = [new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_2__.LicenseArea("A", "Seine North", true), new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_2__.LicenseArea("B", "Seine South"), new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_2__.LicenseArea("C", "Gillnet North"), new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_2__.LicenseArea("D", "Gillnet Vancouver Island"), new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_2__.LicenseArea("E", "Gillnet Fraser + VI"), new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_2__.LicenseArea("F", "Troll North"), new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_2__.LicenseArea("G", "Troll WCVI"), new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_2__.LicenseArea("H", "Troll Fraser")];
    this.saveData('licenseAreaList', licenseAreaList);
  }
  // set fish to local storage
  // Note: we will eventually get this list from the DFO database, then will have to copy the names over into SpeciesData
  setSpeciesList() {
    let fishList = [new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData("Sockeye"), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData("Coho"), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData("Pink"), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData("Chum"), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Chinook'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Steelhead'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Atlantic'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Dogfish'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Green Sturgeon'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Grilse'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Jack Chinook'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Adult Chinook'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Legal Sized Chinook'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Sublegal Sized Chinook'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('White Sturgeon'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Mackerel'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Lingcod'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Halibut'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Aurora Rockfish'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Canary Rockfish'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('China Rockfish'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Tiger Rockfish'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Redbanded Rockfish'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData('Unknown Rockfish')];
    this.saveData('fishList', fishList);
  }
  // set nets to local storage
  setNetTypes() {
    let netTypes = ['Alaska Twist', 'Multi Strand', 'Combination'];
    this.saveData('netTypes', netTypes);
  }
  // data that all users receive, put into local storage
  setLists() {
    this.setTableRules();
    this.setGears();
    this.setLicenseAreas();
    this.setSpeciesList();
    this.setNetTypes();
  }
}
LocalStorageService.??fac = function LocalStorageService_Factory(t) {
  return new (t || LocalStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["????inject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService));
};
LocalStorageService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineInjectable"]({
  token: LocalStorageService,
  factory: LocalStorageService.??fac,
  providedIn: 'root'
});

/***/ }),

/***/ 2823:
/*!**************************************************!*\
  !*** ./src/app/tel-input/tel-input.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tel": () => (/* binding */ Tel),
/* harmony export */   "TelInputComponent": () => (/* binding */ TelInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 8971);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);








const _c0 = ["area"];
const _c1 = ["exchange"];
const _c2 = ["subscriber"];
/*
  Much thanks to https://material.angular.io/guide/creating-a-custom-form-field-control for the entirety of this component
*/
class Tel {
  constructor(area, exchange, subscriber) {
    this.area = area;
    this.exchange = exchange;
    this.subscriber = subscriber;
  }
  toString() {
    return this.area + this.exchange + this.subscriber;
  }
}
class TelInputComponent {
  constructor(_formBuilder, _focusMonitor, _elementRef, _formField, ngControl) {
    this._formBuilder = _formBuilder;
    this._focusMonitor = _focusMonitor;
    this._elementRef = _elementRef;
    this._formField = _formField;
    this.ngControl = ngControl;
    this.parts = this._formBuilder.group({
      area: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(3)]],
      exchange: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(3)]],
      subscriber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(4)]]
    });
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.focused = false;
    this.touched = false;
    this.controlType = 'example-tel-input';
    this.id = `example-tel-input-${TelInputComponent.nextId++}`;
    this.onChange = _ => {};
    this.onTouched = () => {};
    this._placeholder = '';
    this._required = false;
    this._disabled = false;
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }
  get empty() {
    const {
      value: {
        area,
        exchange,
        subscriber
      }
    } = this.parts;
    return !area && !exchange && !subscriber;
  }
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    this.stateChanges.next();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    this._disabled ? this.parts.disable() : this.parts.enable();
    this.stateChanges.next();
  }
  get value() {
    if (this.parts.valid) {
      const {
        value: {
          area,
          exchange,
          subscriber
        }
      } = this.parts;
      return new Tel(area, exchange, subscriber);
    }
    return null;
  }
  set value(tel) {
    const {
      area,
      exchange,
      subscriber
    } = tel || new Tel('', '', '');
    this.parts.setValue({
      area,
      exchange,
      subscriber
    });
    this.stateChanges.next();
  }
  get errorState() {
    return this.parts.invalid && this.touched;
  }
  ngOnDestroy() {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  onFocusIn(event) {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
    }
  }
  onFocusOut(event) {
    if (!this._elementRef.nativeElement.contains(event.relatedTarget)) {
      this.touched = true;
      this.focused = false;
      this.onTouched();
      this.stateChanges.next();
    }
  }
  autoFocusNext(control, nextElement) {
    if (!control.errors && nextElement) {
      this._focusMonitor.focusVia(nextElement, 'program');
    }
  }
  autoFocusPrev(control, prevElement) {
    if (control.value.length < 1) {
      this._focusMonitor.focusVia(prevElement, 'program');
    }
  }
  setDescribedByIds(ids) {
    const controlElement = this._elementRef.nativeElement.querySelector('.example-tel-input-container');
    controlElement.setAttribute('aria-describedby', ids.join(' '));
  }
  onContainerClick() {
    if (this.parts.controls.subscriber.valid) {
      this._focusMonitor.focusVia(this.subscriberInput, 'program');
    } else if (this.parts.controls.exchange.valid) {
      this._focusMonitor.focusVia(this.subscriberInput, 'program');
    } else if (this.parts.controls.area.valid) {
      this._focusMonitor.focusVia(this.exchangeInput, 'program');
    } else {
      this._focusMonitor.focusVia(this.areaInput, 'program');
    }
  }
  writeValue(tel) {
    this.value = tel;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  _handleInput(control, nextElement) {
    control.setValue(control.value.replace(/[^0-9]/g, ''), {
      onlySelf: true,
      emitEvent: false
    });
    this.autoFocusNext(control, nextElement);
    this.onChange(this.value);
  }
}
TelInputComponent.nextId = 0;
TelInputComponent.??fac = function TelInputComponent_Factory(t) {
  return new (t || TelInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MAT_FORM_FIELD, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControl, 10));
};
TelInputComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
  type: TelInputComponent,
  selectors: [["app-tel-input"]],
  viewQuery: function TelInputComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.areaInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.exchangeInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.subscriberInput = _t.first);
    }
  },
  hostVars: 3,
  hostBindings: function TelInputComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????hostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("example-floating", ctx.shouldLabelFloat);
    }
  },
  inputs: {
    userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"],
    placeholder: "placeholder",
    required: "required",
    disabled: "disabled",
    value: "value"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????ProvidersFeature"]([{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldControl,
    useExisting: TelInputComponent
  }])],
  decls: 11,
  vars: 2,
  consts: [["role", "group", 1, "example-tel-input-container", 3, "formGroup", "focusin", "focusout"], ["type", "text", "inputmode", "decimal", "formControlName", "area", "size", "3", "maxLength", "3", "aria-label", "Area code", 1, "example-tel-input-element", 3, "input"], ["area", ""], [1, "example-tel-input-spacer"], ["type", "text", "inputmode", "decimal", "formControlName", "exchange", "maxLength", "3", "size", "3", "aria-label", "Exchange code", 1, "example-tel-input-element", 3, "input", "keyup.backspace"], ["exchange", ""], ["type", "text", "inputmode", "decimal", "formControlName", "subscriber", "maxLength", "4", "size", "4", "aria-label", "Subscriber number", 1, "example-tel-input-element", 3, "input", "keyup.backspace"], ["subscriber", ""]],
  template: function TelInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("focusin", function TelInputComponent_Template_div_focusin_0_listener($event) {
        return ctx.onFocusIn($event);
      })("focusout", function TelInputComponent_Template_div_focusout_0_listener($event) {
        return ctx.onFocusOut($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "input", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("input", function TelInputComponent_Template_input_input_1_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](6);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["????resetView"](ctx._handleInput(ctx.parts.controls.area, _r1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4, "\u2013");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("input", function TelInputComponent_Template_input_input_5_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](10);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["????resetView"](ctx._handleInput(ctx.parts.controls.exchange, _r2));
      })("keyup.backspace", function TelInputComponent_Template_input_keyup_backspace_5_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](2);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["????resetView"](ctx.autoFocusPrev(ctx.parts.controls.exchange, _r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "\u2013");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "input", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("input", function TelInputComponent_Template_input_input_9_listener() {
        return ctx._handleInput(ctx.parts.controls.subscriber);
      })("keyup.backspace", function TelInputComponent_Template_input_keyup_backspace_9_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](6);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["????resetView"](ctx.autoFocusPrev(ctx.parts.controls.subscriber, _r1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.parts);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("aria-labelledby", ctx._formField.getLabelId());
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName],
  styles: [".example-tel-input-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.example-tel-input-element[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background: none;\r\n  padding: 0;\r\n  outline: none;\r\n  font: inherit;\r\n  text-align: center;\r\n}\r\n\r\n.example-tel-input-spacer[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  transition: opacity 200ms;\r\n}\r\n\r\n.example-floating[_nghost-%COMP%]   .example-tel-input-spacer[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVsLWlucHV0L3RlbC1pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtdGVsLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmV4YW1wbGUtdGVsLWlucHV0LWVsZW1lbnQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtdGVsLWlucHV0LXNwYWNlciB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xyXG59XHJcblxyXG46aG9zdC5leGFtcGxlLWZsb2F0aW5nIC5leGFtcGxlLXRlbC1pbnB1dC1zcGFjZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` or `ng build --configuration production` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  auth0: {
    domain: 'dev-5eiy2cesgxurrngi.us.auth0.com',
    clientId: 'JLatVELLRM16M3zBNhUZi27hZXGe5jci',
    redirect_uri: window.location.origin,
    audience: 'https://dev-5eiy2cesgxurrngi.us.auth0.com/userinfo'
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/// <reference types="@angular/localize" />




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6344), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map