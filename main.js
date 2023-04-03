(self["webpackChunkbcsrif_elog"] = self["webpackChunkbcsrif_elog"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 124);
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
/* harmony import */ var _menu_items_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu-items/profile/profile.component */ 5418);
/* harmony import */ var _menu_items_records_page_records_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./menu-items/records-page/records-page.component */ 4694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);



















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
}, {
  path: 'profile',
  component: _menu_items_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__.ProfileComponent
}, {
  path: 'records-page',
  component: _menu_items_records_page_records_page_component__WEBPACK_IMPORTED_MODULE_15__.RecordsPageComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/local-storage.service */ 8345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AppComponent {
  constructor() {
    this.title = 'bcsrif-elog';
    _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.openPouchDB();
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material/material.module */ 898);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/login/login.component */ 7353);
/* harmony import */ var _dialogs_add_vessel_dialog_add_vessel_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/add-vessel-dialog/add-vessel-dialog.component */ 9026);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs/add-species-dialog/add-species-dialog.component */ 8600);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _authentication_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/sign-up/sign-up.component */ 7561);
/* harmony import */ var _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tel-input/tel-input.component */ 2823);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _reports_pause_report_pause_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reports/pause-report/pause-report.component */ 8679);
/* harmony import */ var _reports_cancel_report_cancel_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reports/cancel-report/cancel-report.component */ 6912);
/* harmony import */ var _reports_submitted_report_submitted_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reports/submitted-report/submitted-report.component */ 782);
/* harmony import */ var _reports_start_report_start_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reports/start-report/start-report.component */ 788);
/* harmony import */ var _reports_end_report_end_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reports/end-report/end-report.component */ 9384);
/* harmony import */ var _catch_gill_net_report_gill_net_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./catch/gill-net-report/gill-net-report.component */ 1048);
/* harmony import */ var _dialogs_add_net_dialog_add_net_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialogs/add-net-dialog/add-net-dialog.component */ 1878);
/* harmony import */ var _catch_seine_report_seine_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./catch/seine-report/seine-report.component */ 813);
/* harmony import */ var _catch_troll_report_troll_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./catch/troll-report/troll-report.component */ 711);
/* harmony import */ var _home_no_trip_home_no_trip_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/no-trip-home/no-trip-home.component */ 9259);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./menu/menu.component */ 1105);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _home_active_trip_home_active_trip_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/active-trip-home/active-trip-home.component */ 7984);
/* harmony import */ var _home_offload_home_offload_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/offload-home/offload-home.component */ 4777);
/* harmony import */ var _reports_offload_report_offload_report_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./reports/offload-report/offload-report.component */ 2955);
/* harmony import */ var _menu_items_records_page_records_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./menu-items/records-page/records-page.component */ 4694);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _menu_items_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./menu-items/profile/profile.component */ 5418);
/* harmony import */ var _dialogs_offload_table_dialog_offload_table_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dialogs/offload-table-dialog/offload-table-dialog.component */ 6184);
/* harmony import */ var _dialogs_contact_info_dialog_contact_info_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dialogs/contact-info-dialog/contact-info-dialog.component */ 4873);











































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.DatePipe],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.BrowserModule, _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, ngx_online_status__WEBPACK_IMPORTED_MODULE_32__.OnlineStatusModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_33__.ToastrModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_34__.AuthModule.forRoot({
    domain: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.auth0.domain,
    clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.auth0.clientId,
    authorizationParams: {
      redirect_uri: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.auth0.redirect_uri,
      audience: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.auth0.audience
    },
    cacheLocation: 'localstorage'
  }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_35__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_27__.isDevMode)(),
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerImmediately'
  }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_37__.NgbTimepickerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _dialogs_add_vessel_dialog_add_vessel_dialog_component__WEBPACK_IMPORTED_MODULE_4__.AddVesselDialogComponent, _dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_5__.AddSpeciesDialogComponent, _authentication_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__.SignUpComponent, _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_7__.TelInputComponent, _reports_pause_report_pause_report_component__WEBPACK_IMPORTED_MODULE_9__.PauseReportComponent, _reports_cancel_report_cancel_report_component__WEBPACK_IMPORTED_MODULE_10__.CancelReportComponent, _reports_submitted_report_submitted_report_component__WEBPACK_IMPORTED_MODULE_11__.SubmittedReportComponent, _reports_start_report_start_report_component__WEBPACK_IMPORTED_MODULE_12__.StartReportComponent, _reports_end_report_end_report_component__WEBPACK_IMPORTED_MODULE_13__.EndReportComponent, _catch_gill_net_report_gill_net_report_component__WEBPACK_IMPORTED_MODULE_14__.GillNetReportComponent, _dialogs_add_net_dialog_add_net_dialog_component__WEBPACK_IMPORTED_MODULE_15__.AddNetDialogComponent, _catch_seine_report_seine_report_component__WEBPACK_IMPORTED_MODULE_16__.SeineReportComponent, _catch_troll_report_troll_report_component__WEBPACK_IMPORTED_MODULE_17__.TrollReportComponent, _home_no_trip_home_no_trip_home_component__WEBPACK_IMPORTED_MODULE_18__.NoTripHomeComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_19__.MenuComponent, _home_active_trip_home_active_trip_home_component__WEBPACK_IMPORTED_MODULE_20__.ActiveTripHomeComponent, _home_offload_home_offload_home_component__WEBPACK_IMPORTED_MODULE_21__.OffloadHomeComponent, _reports_offload_report_offload_report_component__WEBPACK_IMPORTED_MODULE_22__.OffloadReportComponent, _menu_items_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__.ProfileComponent, _menu_items_records_page_records_page_component__WEBPACK_IMPORTED_MODULE_23__.RecordsPageComponent, _dialogs_offload_table_dialog_offload_table_dialog_component__WEBPACK_IMPORTED_MODULE_25__.OffloadTableDialogComponent, _dialogs_contact_info_dialog_contact_info_dialog_component__WEBPACK_IMPORTED_MODULE_26__.ContactInfoDialogComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.BrowserModule, _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, ngx_online_status__WEBPACK_IMPORTED_MODULE_32__.OnlineStatusModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_33__.ToastrModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_34__.AuthModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_35__.ServiceWorkerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_37__.NgbTimepickerModule]
  });
})();

/***/ }),

/***/ 7353:
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);














function LoginComponent_form_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 9)(1, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 11)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.emailError, " ");
  }
}
class LoginComponent {
  constructor(auth, router, onlineStatusService, toastr, document) {
    this.auth = auth;
    this.router = router;
    this.onlineStatusService = onlineStatusService;
    this.toastr = toastr;
    this.document = document;
    // check online status
    this.isOnline = false;
    this.onlineStatus = '';
    this.loginButton = '';
    // form validator error messages
    this.emailError = 'Required';
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
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
    this.loginForm.get('email')?.valueChanges.subscribe(() => {
      let emailErrors = this.loginForm.get('email')?.errors;
      if (emailErrors?.required) {
        this.emailError = 'Required';
      } else if (emailErrors?.email) {
        this.emailError = 'Invalid email format';
      } else {
        this.emailError = '';
      }
    });
  }
  // press the login button
  attemptLogin() {
    // attempt to login with the entered credentials
    // solution from https://community.auth0.com/t/isauthenticated-is-always-false/84794/3
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_3__.OnlineStatusType.ONLINE) {
      // if went offline while on page, reload app
      if (!this.isOnline) {
        window.location.reload();
        return;
      }
      this.auth.isAuthenticated$.subscribe(authd => {
        if (!authd) {
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
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
                  if (error && error !== 'not_found') {
                    this.toastr.error(error, "Error");
                    return;
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.toastr.error("Please authenticate again", "User ID or Email not defined");
                    return;
                  }
                  let currHomepage = currUser.currHomepage;
                  this.router.navigate([currHomepage]);
                });
              } else {
                this.toastr.error("Please authenticate again", "User ID or Email not defined");
              }
            } else {
              this.toastr.error("User does not exist", "Something went wrong");
            }
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
      if (this.loginForm.valid) {
        let username = this.loginForm.get('email')?.value;
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOffline(username).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
          if (error && error !== 'not_found') {
            this.toastr.error(error, "Error");
            return;
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.toastr.error("User email not saved while online", "Invalid email");
            return;
          }
          let currHomepage = currUser.currHomepage;
          this.router.navigate([currHomepage]);
        });
      } else {
        this.toastr.error("User email required", "Invalid form");
      }
    }
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_3__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 14,
  vars: 3,
  consts: [[1, "container", "login-container"], [1, "row", "justify-content-center"], [1, "col", "login-image"], ["src", "../../../assets/images/archipelago-blue-email.png", "width", "300", 1, "center"], [1, "row"], [1, "login-title"], [1, "login-subtitle"], ["class", "row", 3, "formGroup", 4, "ngIf"], ["mat-flat-button", "", "type", "submit", 1, "login-button", 3, "click"], [1, "row", 3, "formGroup"], [1, "blue-heading"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "required", "", "formControlName", "email"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Login ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_form_10_Template, 9, 2, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() {
        return ctx.attemptLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" You are currently ", ctx.onlineStatus, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isOnline);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loginButton, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: [".login-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  padding-top: 20px;\r\n}\r\n\r\n\r\n.login-image[_ngcontent-%COMP%] {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n\r\n.login-title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: #004165;\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n}\r\n\r\n\r\n.login-subtitle[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: #004165;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n\r\n.login-button[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61 !important;\r\n  color: white !important;\r\n}\r\n\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n\r\n.blue-heading[_ngcontent-%COMP%] {\r\n  color: #005d87 !important;\r\n  margin-top: 5%;\r\n}\r\n\r\n\r\n.form-field[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQ0FBc0M7QUFDdEM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0FBQ3pCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLGlCQUFpQjtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIE90aGVyIGxvZ2luIGNvbnRhaW5lciBzdHlsaXphdGlvbiAqL1xyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4vKiBBcmNoaXBlbGFnbyBsb2dvICovXHJcbi5sb2dpbi1pbWFnZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLyogQkMgU1JJRiBMb2dpbiAqL1xyXG4ubG9naW4tdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwNDE2NTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbi8qIFlvdSBhcmUgY3VycmVudGx5IG9uL29mZmxpbmUgKi9cclxuLmxvZ2luLXN1YnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMDQxNjU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4vKiBMb2dpbiB0byBhY2NvdW50ICovXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZmNjEgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogQWxpZ24gY2VudHJlICovXHJcbi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLyogQmx1ZSB0ZXh0IGZvciBlbnRyeSBmaWVsZHMgKi9cclxuLmJsdWUtaGVhZGluZyB7XHJcbiAgY29sb3I6ICMwMDVkODcgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLyogRm9yIGlucHV0IGZpZWxkcyAqL1xyXG4uZm9ybS1maWVsZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7561:
/*!*************************************************************!*\
  !*** ./src/app/authentication/sign-up/sign-up.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_validator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-models/validator.model */ 4654);
/* harmony import */ var _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tel-input/tel-input.component */ 2823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 5074);



















const _c0 = ["telInput"];
function SignUpComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_mat_error_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_mat_error_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_mat_error_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class SignUpComponent {
  constructor(auth, router, toastr, onlineStatusService, authenticationService) {
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    // get the current user details
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
    // show error message when field is invalid
    this.emailError = 'Required';
    this.postalError = 'Required';
    // disable all buttons when authenticating
    this.sending = false;
    // regular expression for Canadian postal code validation
    // from https://stackoverflow.com/questions/15774555/efficient-regex-for-canadian-postal-code-function
    this.postalRegex = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({
      firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      contactEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      city: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      postalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.postalRegex)]),
      phoneNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(new _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_3__.Tel('', '', ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, (0,_data_models_validator_model__WEBPACK_IMPORTED_MODULE_2__.generalValidator)()])
    });
  }
  ngOnInit() {
    let contactEmail = this.signupForm.get('contactEmail');
    let postalCode = this.signupForm.get('postalCode');
    // contact email validation
    contactEmail?.valueChanges.subscribe(() => {
      let contactEmailErrors = contactEmail?.errors;
      if (contactEmailErrors?.required) {
        this.emailError = 'Required';
      } else if (contactEmailErrors?.email) {
        this.emailError = 'Invalid format';
      } else {
        this.emailError = '';
      }
    });
    // postal code validation
    postalCode?.valueChanges.subscribe(() => {
      let postalCodeErrors = postalCode?.errors;
      if (postalCodeErrors?.required) {
        this.postalError = 'Required';
      } else if (postalCodeErrors?.pattern) {
        this.postalError = 'Invalid format';
      } else {
        this.postalError = '';
      }
    });
  }
  // phone number validator
  phoneNumValid() {
    let phoneNum = this.signupForm.get('phoneNum')?.value;
    let area = phoneNum.area;
    let exchange = phoneNum.exchange;
    let subscriber = phoneNum.subscriber;
    return !!area && !!exchange && !!subscriber;
  }
  // go back to the login screen
  backToLogin() {
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_7__.OnlineStatusType.OFFLINE) {
      this.toastr.error("Cannot log out while offline", "Logout failed");
      return;
    }
    this.authenticationService.logout();
  }
  // attempt to sign up for an account
  attemptSignUp() {
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_7__.OnlineStatusType.OFFLINE) {
      this.toastr.error("Cannot sign up while offline", "Sign up failed");
      return;
    }
    // verify phone number
    this.telInput.touched = true;
    this.telInput.stateChanges.next();
    this.signupForm.get('phoneNum')?.updateValueAndValidity();
    // check signup entry validity
    if (this.signupForm.valid && this.phoneNumValid()) {
      // navigate to the home screen
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOnline(id, email).then(() => {
                  this.sending = true;
                  this.userDetails = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
                  this.userDetails.firstName = this.signupForm.get('firstName')?.value;
                  this.userDetails.lastName = this.signupForm.get('lastName')?.value;
                  this.userDetails.contactEmail = this.signupForm.get('contactEmail')?.value;
                  this.userDetails.address = this.signupForm.get('address')?.value;
                  this.userDetails.city = this.signupForm.get('city')?.value;
                  this.userDetails.postalCode = this.signupForm.get('postalCode')?.value;
                  this.userDetails.phoneNum = this.signupForm.get('phoneNum')?.value;
                  this.userDetails.currHomepage = 'no-trip-home';
                  _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
                    this.sending = false;
                    this.router.navigate([this.userDetails.currHomepage]);
                  });
                });
              } else {
                this.toastr.error("Please authenticate again", "ID or Email not defined");
                this.authenticationService.logout();
              }
            } else {
              this.toastr.error("Please authenticate again", "Cannot get user data");
              this.authenticationService.logout();
            }
          });
        } else {
          this.toastr.error("Please authenticate again", "Not authenticated");
          this.authenticationService.logout();
        }
      });
    } else {
      this.toastr.error("Missing information", "Sign up failed");
    }
  }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
  return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_7__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService));
};
SignUpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SignUpComponent,
  selectors: [["app-sign-up"]],
  viewQuery: function SignUpComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.telInput = _t.first);
    }
  },
  decls: 87,
  vars: 10,
  consts: [[1, "container", "sign-up-container"], [1, "row", "justify-content-center"], [1, "col", "sign-up-image"], ["src", "../../../assets/images/archipelago-blue-email.png", "width", "300", 1, "center"], [1, "row"], [1, "sign-up-title"], [3, "formGroup", "ngSubmit"], [1, "blue-heading"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "required", "", "formControlName", "firstName"], [4, "ngIf"], ["matInput", "", "required", "", "formControlName", "lastName"], ["matInput", "", "required", "", "formControlName", "contactEmail"], ["matInput", "", "required", "", "formControlName", "address"], ["matInput", "", "required", "", "formControlName", "city"], ["matInput", "", "required", "", "formControlName", "postalCode"], ["telField", ""], ["formControlName", "phoneNum"], ["telInput", ""], ["matSuffix", ""], [1, "row", "button-sign-up"], [1, "col"], ["mat-raised-button", "", "type", "submit", 1, "color-button-orange", 3, "disabled"], ["mat-raised-button", "", "type", "button", 1, "color-button-blue", 3, "disabled", "click"]],
  template: function SignUpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Sign Up ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4)(8, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_8_listener() {
        return ctx.attemptSignUp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 4)(10, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " First Name (as shown on fishing license) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field", 8)(13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " First Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, SignUpComponent_mat_error_16_Template, 2, 0, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 1)(18, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Last Name (as shown on fishing license) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-form-field", 8)(21, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Last Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, SignUpComponent_mat_error_24_Template, 2, 0, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 1)(26, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Contact Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-form-field", 8)(29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " Contact Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 1)(35, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Address ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-form-field", 8)(38, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Address ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, SignUpComponent_mat_error_41_Template, 2, 0, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 1)(43, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " City ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "mat-form-field", 8)(46, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " City ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, SignUpComponent_mat_error_49_Template, 2, 0, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 1)(51, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, " Postal Code ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-form-field", 8)(54, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, " Postal Code ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 1)(60, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, " Phone Number ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "mat-form-field", 8, 16)(64, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, " Phone Number ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "app-tel-input", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "mat-icon", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, " phone ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, SignUpComponent_mat_error_70_Template, 2, 0, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 20)(72, "div", 21)(73, "div", 4)(74, "button", 22)(75, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, " Sign Up ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, " arrow_forward ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 20)(80, "div", 21)(81, "div", 4)(82, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_82_listener() {
        return ctx.backToLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "span")(84, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, " arrow_back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, " Return to Login (log out) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.signupForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signupForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signupForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.emailError, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signupForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signupForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.postalError, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signupForm.invalid || !ctx.phoneNumValid());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.sending);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.sending);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_3__.TelInputComponent],
  styles: [".sign-up-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  padding-top: 20px;\r\n}\r\n\r\n\r\n.sign-up-image[_ngcontent-%COMP%] {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n\r\n.sign-up-title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: #004165;\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n}\r\n\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n\r\n.blue-heading[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  margin-top: 5%;\r\n}\r\n\r\n\r\n.form-field[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.button-sign-up[_ngcontent-%COMP%] {\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\n.color-button-orange[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61 !important;\r\n  color: white !important;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.color-button-blue[_ngcontent-%COMP%] {\r\n  background-color: #005d87 !important;\r\n  color: white !important;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQXdDO0FBQ3hDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0Usc0JBQXNCO0FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiLyogT3RoZXIgc2lnbiB1cCBjb250YWluZXIgc3R5bGl6YXRpb24gKi9cclxuLnNpZ24tdXAtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4vKiBBcmNoaXBlbGFnbyBsb2dvICovXHJcbi5zaWduLXVwLWltYWdlIHtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4vKiBCQyBTUklGIFNpZ24gVXAgKi9cclxuLnNpZ24tdXAtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwNDE2NTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbi8qIEFsaWduIGNlbnRyZSAqL1xyXG4uY2VudGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIEJsdWUgdGV4dCBmb3IgZW50cnkgZmllbGRzICovXHJcbi5ibHVlLWhlYWRpbmcge1xyXG4gIGNvbG9yOiAjMDA1ZDg3O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4vKiBGb3IgaW5wdXQgZmllbGRzICovXHJcbi5mb3JtLWZpZWxkIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogU2lnbiB1cCBvciBiYWNrIHRvIGxvZ2luICovXHJcbi5idXR0b24tc2lnbi11cCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4vKiBDb2xvciBidXR0b25zIC0gb3JhbmdlICovXHJcbi5jb2xvci1idXR0b24tb3JhbmdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2ZjYxICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIENvbG9yZWQgYnV0dG9ucyAtIGJsdWUgKi9cclxuLmNvbG9yLWJ1dHRvbi1ibHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZDg3ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIFRleHQgdnMgaWNvbiAqL1xyXG4ubWF0LWljb24ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1048:
/*!********************************************************************!*\
  !*** ./src/app/catch/gill-net-report/gill-net-report.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GillNetReportComponent": () => (/* binding */ GillNetReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-models/catch-table-models/species-data.model */ 439);
/* harmony import */ var _dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogs/add-species-dialog/add-species-dialog.component */ 8600);
/* harmony import */ var _data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-models/trip-models/gear-models/net.model */ 786);
/* harmony import */ var _dialogs_add_net_dialog_add_net_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialogs/add-net-dialog/add-net-dialog.component */ 1878);
/* harmony import */ var _data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data-models/catch-table-models/table-rules.model */ 9356);
/* harmony import */ var _data_models_report_models_daily_catch_report_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data-models/report-models/daily-catch-report.model */ 388);
/* harmony import */ var _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data-models/trip-models/trip.model */ 5636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ 7371);
































function GillNetReportComponent_h6_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" Page ", ctx_r0.currPage, " of ", ctx_r0.numPages, " ");
  }
}
function GillNetReportComponent_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Gill Net Catch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function GillNetReportComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-spinner", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("diameter", 50)("strokeWidth", 6)("value", ctx_r2.spinnerProgress);
  }
}
function GillNetReportComponent_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function GillNetReportComponent_div_12_mat_radio_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-radio-button", 26)(1, "h6", 27)(2, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const net_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", net_r13)("checked", net_r13.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", net_r13, " ");
  }
}
function GillNetReportComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Which net did you use to fish? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 21)(7, "mat-radio-group", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, GillNetReportComponent_div_12_mat_radio_button_8_Template, 4, 3, "mat-radio-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 21)(13, "div", 13)(14, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GillNetReportComponent_div_12_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.addNetDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, " Add New Net ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r4.userNets);
  }
}
function GillNetReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Please provide the catch date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 21)(7, "mat-card", 29)(8, "mat-calendar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectedChange", function GillNetReportComponent_div_13_Template_mat_calendar_selectedChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r16.catchDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 2)(11, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " How many hours did you spend fishing? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 13)(14, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, " Hours (round to the nearest half hour) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "mat-form-field", 32)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, " Hours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function GillNetReportComponent_div_13_Template_input_input_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r18.validateHoursFished("hoursFished"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("selected", ctx_r5.catchDate);
  }
}
function GillNetReportComponent_div_14_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function GillNetReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Where did you fish? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 13)(5, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Management Area(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " (Do not include subareas) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "mat-form-field", 32)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, " Management Area ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, GillNetReportComponent_div_14_mat_error_13_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 13)(15, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, " Subarea(s) Fished ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, " (Comma-separate if multiple) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-form-field", 32)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, " Subarea(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 2)(24, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, " How many sets did you make? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 13)(27, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, " Number of Sets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "mat-form-field", 32)(30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, " Number of Sets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function GillNetReportComponent_div_14_Template_input_input_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r20.forbidNonNumeric("numSets"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.gillnetForm.invalid);
  }
}
function GillNetReportComponent_div_15_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function GillNetReportComponent_div_15_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r30.speciesName, " ");
  }
}
function GillNetReportComponent_div_15_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Kept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function GillNetReportComponent_div_15_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r31 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r25.determineCellStyling(element_r31.kept, element_r31.speciesName));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r31.kept, " ");
  }
}
function GillNetReportComponent_div_15_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Released ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function GillNetReportComponent_div_15_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r32 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r27.determineCellStyling(element_r32.released));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r32.released, " ");
  }
}
function GillNetReportComponent_div_15_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 51);
  }
}
function GillNetReportComponent_div_15_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GillNetReportComponent_div_15_tr_18_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36);
      const index_r34 = restoredCtx.index;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r35.addSpeciesDialog(index_r34));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function GillNetReportComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Add or Edit Catch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](5, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, GillNetReportComponent_div_15_th_7_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, GillNetReportComponent_div_15_td_8_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](9, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, GillNetReportComponent_div_15_th_11_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, GillNetReportComponent_div_15_td_12_Template, 2, 2, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](13, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, GillNetReportComponent_div_15_th_15_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, GillNetReportComponent_div_15_td_16_Template, 2, 2, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, GillNetReportComponent_div_15_tr_17_Template, 1, 0, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, GillNetReportComponent_div_15_tr_18_Template, 1, 0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 46)(20, "h6", 47)(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, " Total Fish Kept: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "h6", 47)(25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, " Total Fish Released: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 21)(31, "div", 13)(32, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GillNetReportComponent_div_15_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r37.addSpeciesDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, " Add New Species ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx_r7.fishListDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx_r7.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx_r7.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r7.calculateTotalFish("kept"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r7.calculateTotalFish("released"), " ");
  }
}
function GillNetReportComponent_div_16_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const response_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", response_r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", response_r43, " ");
  }
}
function GillNetReportComponent_div_16_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function GillNetReportComponent_div_16_h6_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Please provide the time of capture and species details in the comments. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function GillNetReportComponent_div_16_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function GillNetReportComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Did you catch any birds, marine mammals, or turtles? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-form-field", 53)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, GillNetReportComponent_div_16_mat_option_8_Template, 2, 2, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, GillNetReportComponent_div_16_mat_error_9_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, GillNetReportComponent_div_16_h6_10_Template, 2, 0, "h6", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 2)(12, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, " Would you like to add a comment? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 13)(15, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "mat-form-field", 57)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, " Comments... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "textarea", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, GillNetReportComponent_div_16_mat_error_21_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r8.responseOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.gillnetForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r8.gillnetForm.get("nonFish")) == null ? null : tmp_2_0.value) === "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.gillnetForm.invalid);
  }
}
function GillNetReportComponent_div_17_small_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r44.gillnetForm.get("net")) == null ? null : tmp_0_0.value, " ");
  }
}
function GillNetReportComponent_div_17_small_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function GillNetReportComponent_div_17_small_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r46.gillnetForm.get("mgmtArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function GillNetReportComponent_div_17_small_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function GillNetReportComponent_div_17_small_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r48.gillnetForm.get("nonFish")) == null ? null : tmp_0_0.value, " ");
  }
}
function GillNetReportComponent_div_17_small_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function GillNetReportComponent_div_17_small_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function GillNetReportComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Is all information complete and ready to be submitted to DFO? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 13)(5, "h6", 60)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Net Used:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, GillNetReportComponent_div_17_small_8_Template, 2, 1, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, GillNetReportComponent_div_17_small_9_Template, 2, 0, "small", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 13)(11, "h6", 60)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Date Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 13)(17, "h6", 60)(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Hours Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 13)(23, "h6", 31)(24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Management Area Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, GillNetReportComponent_div_17_small_26_Template, 2, 1, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, GillNetReportComponent_div_17_small_27_Template, 2, 0, "small", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 13)(29, "h6", 31)(30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Subarea(s) Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 13)(35, "h6", 31)(36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Number of Sets:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 13)(41, "h6", 31)(42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "Total Fish Kept:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 13)(47, "h6", 31)(48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "Total Fish Released:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 13)(53, "h6", 31)(54, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "Non-fish caught?:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](56, GillNetReportComponent_div_17_small_56_Template, 2, 1, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, GillNetReportComponent_div_17_small_57_Template, 2, 0, "small", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 13)(59, "h6", 31)(60, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "Comments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](64, GillNetReportComponent_div_17_small_64_Template, 2, 0, "small", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_12_0;
    let tmp_13_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r9.netInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.netInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 14, ctx_r9.catchDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = ctx_r9.gillnetForm.get("hoursFished")) == null ? null : tmp_3_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r9.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_6_0 = ctx_r9.gillnetForm.get("zoneArea")) == null ? null : tmp_6_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_7_0 = ctx_r9.gillnetForm.get("numSets")) == null ? null : tmp_7_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r9.calculateTotalFish("kept"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r9.calculateTotalFish("released"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r9.nonFishInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.nonFishInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_12_0 = ctx_r9.gillnetForm.get("comments")) == null ? null : tmp_12_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_13_0 = ctx_r9.gillnetForm.get("comments")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors.required);
  }
}
function GillNetReportComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function GillNetReportComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Send to DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
class GillNetReportComponent {
  constructor(dialog, auth, router, toastr, onlineStatusService, authenticationService) {
    this.dialog = dialog;
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    this.responseOptions = ['Yes', 'No']; //hardcoded values to be used in the form
    this.fishListDetails = []; // source for table data - all data currently in the table
    // data preambles
    this.catchReport = new _data_models_report_models_daily_catch_report_model__WEBPACK_IMPORTED_MODULE_7__.DailyCatchReport(); // catch report we will fill out
    this.currTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_8__.Trip();
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
    this.unfilteredFishList = []; // temporary array to store species
    this.fishList = []; //filtered list of species data, will comprise the user's look-up list
    this.userNets = [];
    this.emptyNet = new _data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_4__.Net('', '', '', '', '', '', '', '', '');
    this.gillNetTable = new _data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_6__.TableRules(); // used to filter table data
    // values associated with each page
    this.gillnetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormGroup({
      net: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.emptyNet, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      hoursFished: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(''),
      //page 3
      mgmtArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      zoneArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(''),
      numSets: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(''),
      //page 5
      comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(''),
      nonFish: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required])
    });
    this.catchDate = new Date(); //page 2 
    this.displayedColumns = []; // page 4
    // section to section
    this.numPages = 0;
    this.currPage = 0;
    this.spinnerProgress = 0;
    this.spinnerIncrement = 0;
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_12__.OnlineStatusType.OFFLINE) {
      let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getCurrUsername();
      if (currUsername) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOffline(currUsername).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
          if (error) {
            this.authenticationService.userDataLogout(error);
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.authenticationService.userDataLogout("User ID or Email not defined");
          } else {
            this.userDetails = currUser;
            this.initialize();
          }
        });
      } else {
        this.authenticationService.userDataLogout("Username not saved to storage");
      }
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
                  if (error) {
                    this.authenticationService.userDataLogout(error);
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.authenticationService.userDataLogout("User ID or Email is undefined");
                  } else {
                    this.userDetails = currUser;
                    this.initialize();
                  }
                });
              } else {
                this.authenticationService.userDataLogout("User ID or email is undefined");
              }
            } else {
              this.authenticationService.userDataLogout("Cannot get user data");
            }
          });
        } else {
          this.authenticationService.userDataLogout("Not authenticated");
        }
      });
    }
  }
  ngOnInit() {
    this.onNonFishChange();
  }
  onNonFishChange() {
    this.gillnetForm.get('nonFish')?.valueChanges.subscribe(value => {
      const commentControl = this.gillnetForm.get('comments');
      if (value === 'Yes') {
        commentControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]);
      } else {
        commentControl?.clearValidators();
      }
      commentControl?.updateValueAndValidity();
    });
  }
  // initialize the data
  initialize() {
    // get all required data
    this.currTrip = this.userDetails.currTrip;
    this.userNets = this.userDetails.nets;
    this.unfilteredFishList = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getSpeciesList();
    this.gillNetTable = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getTableRules('Gill Net');
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
    this.gillnetForm.patchValue({
      net: currNet
    });
    let numReports = this.currTrip.dailyCatchReports.length;
    if (numReports > 0) {
      let prevReport = this.currTrip.dailyCatchReports[numReports - 1]; // get last report
      this.gillnetForm.patchValue({
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
  // get the currently selected net
  getSelectedNet() {
    for (let net of this.userNets) {
      if (net.isChecked) {
        return net;
      }
    }
    return this.userNets?.length ? this.userNets[0] : this.emptyNet;
  }
  // set the radio buttons to the currently selected net in the catch report
  setSelectedNet(currNet) {
    for (let net of this.userNets) {
      net.isChecked = net.netName === currNet.netName;
    }
  }
  // save the selected user nets for UI
  saveUserNets() {
    let currNet = this.gillnetForm.get('net')?.value;
    this.setSelectedNet(currNet);
    this.gillnetForm.patchValue({
      net: currNet
    });
  }
  // go to the next page
  toNextPage() {
    // page does not contain date
    if (this.currPage <= this.numPages) {
      this.saveUserNets();
      _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
        console.log("User data saved to PouchDB");
        this.incrementPage();
      });
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
      _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
        console.log("User data saved to PouchDB");
        this.toHome();
      });
    } else {
      this.currPage--;
      this.spinnerProgress -= this.spinnerIncrement;
    }
  }
  // add a new net
  addNetDialog() {
    const dialogRef = this.dialog.open(_dialogs_add_net_dialog_add_net_dialog_component__WEBPACK_IMPORTED_MODULE_5__.AddNetDialogComponent, {
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
          let newNet = new _data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_4__.Net(result.netType, result.netName, result.netLength, result.netDepth, result.netUnits, result.hangRatio, result.meshSize, result.meshUnits, result.numMeshes, result.numStrands, true);
          this.gillnetForm.patchValue({
            net: newNet
          });
          this.userDetails.nets.push(newNet);
          // updating PouchDB
          _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
            console.log("User data saved to PouchDB");
            this.toNextPage();
          });
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
    let newSpeciesData = new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_2__.SpeciesData(result.speciesName);
    newSpeciesData.kept = kept;
    newSpeciesData.released = released;
    return newSpeciesData;
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
    const dialogRef = this.dialog.open(_dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_3__.AddSpeciesDialogComponent, {
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
  // check if net value is invalid
  netInvalid() {
    let net = this.gillnetForm.get('net')?.value;
    return !net || !net.isValid();
  }
  // check if management area is invalid
  managementAreaInvalid() {
    return this.gillnetForm.get('mgmtArea')?.errors?.required;
  }
  // check if non-fish selection value is invalid
  nonFishInvalid() {
    return this.gillnetForm.get('nonFish')?.errors?.required;
  }
  // send catch to DFO
  sendToDFO() {
    if (this.gillnetForm.valid && !this.netInvalid()) {
      this.saveCatchReport();
      _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
        console.log("User data saved to PouchDB");
        this.router.navigate(['submitted-report'], {
          state: {
            name: 'Daily Catch Report'
          }
        });
      });
    } else {
      this.toastr.error("Not all required fields filled", "Invalid form");
    }
  }
  // back to home screen
  toHome() {
    this.router.navigate(['active-trip-home']);
  }
  // forbid non-numeric inputs
  forbidNonNumeric(controlName) {
    let control = this.gillnetForm.get(controlName);
    control.setValue(control.value.replace(/[^0-9]/g, ''));
  }
  // only allow one decimal place with 0 or 5 as the tenth digit
  validateHoursFished(controlName) {
    let control = this.gillnetForm.get(controlName);
    const regex = /^\d+((\.)|(\.(0|5))?)$/; // matches inputs like: 23, 3, 4.5, 0.5, 9.0, 12., etc.
    if (!regex.test(control.value)) {
      // if we don't find a match
      control.setValue(control.value.replace(/.$/, '')); // replace the most recently entered character with ''
    }
  }
  // creates a list of all species in the table that have non-zero data associated with them 
  determineSpeciesData() {
    let tempFishArray = [];
    for (let fish of this.fishListDetails) {
      if (fish.kept > 0 || fish.released > 0) {
        tempFishArray.push(fish);
      }
    }
    return tempFishArray;
  }
  // saves all Daily Catch Report information pertinent to Gill Net
  saveCatchReport() {
    // save relevant information gathered in the form
    this.catchReport.netUsed = this.gillnetForm.get('net')?.value;
    this.catchReport.dateFished = this.catchDate;
    this.catchReport.hoursFished = this.gillnetForm.get('hoursFished')?.value;
    this.catchReport.managementArea = this.gillnetForm.get('mgmtArea')?.value;
    this.catchReport.subArea = this.gillnetForm.get('zoneArea')?.value;
    this.catchReport.numSets = this.gillnetForm.get('numSets')?.value;
    this.catchReport.nonFish = this.gillnetForm.get('nonFish')?.value;
    this.catchReport.comments = this.gillnetForm.get('comments')?.value;
    this.catchReport.speciesDataList = this.determineSpeciesData();
    this.catchReport.submissionDate = new Date(); // get current date/time
    // push the report to currTrip
    this.currTrip.dailyCatchReports.push(this.catchReport);
    this.userDetails.currTrip = this.currTrip;
  }
}
GillNetReportComponent.ɵfac = function GillNetReportComponent_Factory(t) {
  return new (t || GillNetReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_14__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_12__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__.AuthenticationService));
};
GillNetReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: GillNetReportComponent,
  selectors: [["app-gill-net-report"]],
  viewQuery: function GillNetReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTable, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    }
  },
  decls: 32,
  vars: 13,
  consts: [[1, "container", "catch-container"], [1, "container", 2, "padding-top", "20px"], ["align", "center", 1, "row"], [4, "ngIf"], [1, "col-5"], [1, "col-2"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value", 4, "ngIf"], ["style", "color:#3ebfb9", 4, "ngIf"], [3, "formGroup"], ["class", "container", 4, "ngIf"], [1, "row", 2, "margin-top", "auto", "padding-bottom", "3%", "padding-top", "10px"], [1, "col-1"], [1, "col-4"], [1, "row"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-blue", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"], [1, "text-muted"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value"], [2, "color", "#3ebfb9"], [1, "container"], [1, "blue-heading-title"], [1, "col-8"], ["formControlName", "net", 1, "radio"], [3, "value", "checked", 4, "ngFor", "ngForOf"], ["align", "center", 1, "row", "add-item"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-red", 3, "click"], [3, "value", "checked"], [2, "font-weight", "bold"], [1, "text-muted", "text-small"], [1, "demo-inline-calendar-card", 2, "margin-top", "10%"], [3, "selected", "selectedChange"], [1, "blue-heading"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "inputmode", "numeric", "formControlName", "hoursFished", 3, "input"], ["matInput", "", "required", "", "formControlName", "mgmtArea"], ["matInput", "", "formControlName", "zoneArea"], ["matInput", "", "inputmode", "numeric", "formControlName", "numSets", 3, "input"], ["mat-table", "", 1, "mat-elevation-z8", "margin-table", 3, "dataSource"], ["matColumnDef", "speciesName"], ["mat-header-cell", "", "class", "heading-cell", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "kept"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "released"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "row", 2, "padding-top", "10px"], [2, "color", "#003F61"], ["mat-header-cell", "", 1, "heading-cell"], ["mat-cell", ""], ["mat-cell", "", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["appearance", "outline", 1, "form-field", 2, "padding-top", "15px"], ["formControlName", "nonFish"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "blue-heading", 4, "ngIf"], ["appearance", "fill", 1, "form-field"], ["matInput", "", "formControlName", "comments", "rows", "9"], [3, "value"], [1, "blue-label"], ["class", "blue-label", 4, "ngIf"], ["class", "red-label", 4, "ngIf"], [1, "red-label"]],
  template: function GillNetReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, GillNetReportComponent_h6_3_Template, 3, 2, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, GillNetReportComponent_h6_4_Template, 3, 0, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, GillNetReportComponent_mat_spinner_8_Template, 1, 3, "mat-spinner", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, GillNetReportComponent_mat_icon_9_Template, 2, 0, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, GillNetReportComponent_div_12_Template, 18, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, GillNetReportComponent_div_13_Template, 20, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, GillNetReportComponent_div_14_Template, 33, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, GillNetReportComponent_div_15_Template, 36, 5, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, GillNetReportComponent_div_16_Template, 22, 4, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, GillNetReportComponent_div_17_Template, 65, 16, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 12)(21, "div", 13)(22, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GillNetReportComponent_Template_button_click_22_listener() {
        return ctx.toPreviousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 12)(27, "div", 13)(28, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GillNetReportComponent_Template_button_click_28_listener() {
        return ctx.toNextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, GillNetReportComponent_span_29_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, GillNetReportComponent_span_30_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.gillnetForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage === 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCard, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatCalendar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatError, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinner, _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelect, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRow, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe],
  styles: [".catch-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n  }\r\n  \r\n  \r\n  .mat-mdc-progress-spinner[_ngcontent-%COMP%] {\r\n    --mdc-circular-progress-active-indicator-color: #3ebfb9 !important;\r\n  }\r\n  \r\n  \r\n  .mat-mdc-radio-button.mat-accent[_ngcontent-%COMP%] {\r\n    --mdc-radio-selected-focus-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-hover-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-pressed-icon-color: #3ebfb9;\r\n    --mat-mdc-radio-checked-ripple-color: #3ebfb9;\r\n  }\r\n  \r\n    .mat-mdc-text-field-wrapper {\r\n    background-color: whitesmoke !important;\r\n  }\r\n  \r\n  \r\n  .radio[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    margin-top: 1%;\r\n  }\r\n  \r\n  \r\n  .blue-heading[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n  }\r\n  \r\n  \r\n  .blue-heading-title[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    font-weight: bold;\r\n    margin-top: 5%;\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  \r\n  .add-item[_ngcontent-%COMP%] {\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  \r\n  .fishing-button-blue[_ngcontent-%COMP%] {\r\n    background-color: #005d87 !important;\r\n    color: white !important;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .fishing-button-red[_ngcontent-%COMP%] {\r\n    background-color: #ff6f61 !important;\r\n    color: white !important;\r\n    font-weight: bold !important;\r\n  }\r\n  \r\n  \r\n  .time-picker[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n  \r\n  \r\n  .text-small[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .form-field[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .margin-table[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  .heading-cell[_ngcontent-%COMP%] {\r\n    color: #003F61 !important;\r\n    font-weight: bold !important;\r\n  }\r\n\r\n  .mat-column-speciesName[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    color: #005d87;\r\n    border-right: 1px solid;\r\n  }\r\n\r\n  .mat-column-kept[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    text-align: center;\r\n  }\r\n\r\n  .mat-column-released[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    text-align: center;\r\n  }\r\n\r\n  .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    border-bottom: 1px solid;\r\n    border-top: 1px solid;\r\n    border-color: #003F61;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n    background-color: whitesmoke;\r\n  }\r\n\r\n  \r\n  .blue-label[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n    font-size: medium;\r\n  }\r\n  \r\n  \r\n  .red-label[_ngcontent-%COMP%] {\r\n    color: red;\r\n    margin-top: 5%;\r\n    font-size: medium;\r\n  }\r\n\r\n  .bolded-cell[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\r\n\r\n  .faded-cell[_ngcontent-%COMP%] {\r\n    font-weight: lighter;\r\n  }\r\n\r\n\r\n  .release-only-cell[_ngcontent-%COMP%] {\r\n    opacity: 0; \r\n    content-visibility: hidden;\r\n  }\r\n\r\n  \r\n\r\n     .mat-calendar-body-selected {\r\n    background-color: #3ebfb9;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2F0Y2gvZ2lsbC1uZXQtcmVwb3J0L2dpbGwtbmV0LXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBLDJCQUEyQjtFQUMzQjtJQUNFLGtFQUFrRTtFQUNwRTs7RUFFQSx3QkFBd0I7RUFDeEI7SUFDRSw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHdDQUF3QztJQUN4QyxnREFBZ0Q7SUFDaEQsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsdUNBQXVDO0VBQ3pDOztFQUVBLGtCQUFrQjtFQUNsQjtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGNBQWM7RUFDaEI7O0VBRUEsOEJBQThCO0VBQzlCO0lBQ0UsY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBRUEsZUFBZTtFQUNmO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBLDBCQUEwQjtFQUMxQjtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUEsaUJBQWlCO0VBQ2pCO0lBQ0Usb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUEsZ0JBQWdCO0VBQ2hCO0lBQ0Usb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2Qiw0QkFBNEI7RUFDOUI7O0VBRUEsb0NBQW9DO0VBQ3BDO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBLHlCQUF5QjtFQUN6QjtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUEscUJBQXFCO0VBQ3JCO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBLFVBQVU7RUFDVjtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBLCtCQUErQjtFQUMvQjtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBLHVDQUF1QztFQUN2QztJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOzs7RUFHQTtJQUNFLFVBQVUsRUFBRSxxQ0FBcUM7SUFDakQsMEJBQTBCO0VBQzVCOztFQUVBLHFCQUFxQjs7RUFFckI7SUFDRSx5QkFBeUI7RUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBPdGhlciBjb250YWluZXIgc3R5bGVzICovXHJcbi5jYXRjaC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFByb2dyZXNzIHNwaW5uZXIgY29sb3IgKi9cclxuICAubWF0LW1kYy1wcm9ncmVzcy1zcGlubmVyIHtcclxuICAgIC0tbWRjLWNpcmN1bGFyLXByb2dyZXNzLWFjdGl2ZS1pbmRpY2F0b3ItY29sb3I6ICMzZWJmYjkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogUmFkaW8gYnV0dG9uIGNvbG9ycyAqL1xyXG4gIC5tYXQtbWRjLXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IHtcclxuICAgIC0tbWRjLXJhZGlvLXNlbGVjdGVkLWZvY3VzLWljb24tY29sb3I6ICMzZWJmYjk7XHJcbiAgICAtLW1kYy1yYWRpby1zZWxlY3RlZC1ob3Zlci1pY29uLWNvbG9yOiAjM2ViZmI5O1xyXG4gICAgLS1tZGMtcmFkaW8tc2VsZWN0ZWQtaWNvbi1jb2xvcjogIzNlYmZiOTtcclxuICAgIC0tbWRjLXJhZGlvLXNlbGVjdGVkLXByZXNzZWQtaWNvbi1jb2xvcjogIzNlYmZiOTtcclxuICAgIC0tbWF0LW1kYy1yYWRpby1jaGVja2VkLXJpcHBsZS1jb2xvcjogIzNlYmZiOTtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJhZGlvIGJ1dHRvbnMgKi9cclxuICAucmFkaW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gIH1cclxuICBcclxuICAvKiBCbHVlIHRleHQgb24gZmluYWwgc2NyZWVuICovXHJcbiAgLmJsdWUtaGVhZGluZyB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gIH1cclxuICBcclxuICAvKiBUaXRsZSB0ZXh0ICovXHJcbiAgLmJsdWUtaGVhZGluZy10aXRsZSB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIHRyaXAgSUQgb3IgdmVzc2VsICovXHJcbiAgLmFkZC1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEJsdWUgYnV0dG9ucyAqL1xyXG4gIC5maXNoaW5nLWJ1dHRvbi1ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVkODcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlZCBidXR0b25zICovXHJcbiAgLmZpc2hpbmctYnV0dG9uLXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2ZjYxICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxpemF0aW9uIGZvciB0aGUgdGltZSBwaWNrZXIgKi9cclxuICAudGltZS1waWNrZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBTbWFsbCBmb250IGNvbXBvbmVudCAqL1xyXG4gIC50ZXh0LXNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZvciBpbnB1dCBmaWVsZHMgKi9cclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLyogVGFibGUgKi9cclxuICAubWFyZ2luLXRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRpbmctY2VsbCB7XHJcbiAgICBjb2xvcjogIzAwM0Y2MSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLXNwZWNpZXNOYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDVkODc7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLWtlcHQge1xyXG4gICAgY29sb3I6ICMwMDNGNjE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWF0LWNvbHVtbi1yZWxlYXNlZCB7XHJcbiAgICBjb2xvcjogIzAwM0Y2MTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tYXQtbWRjLXJvdyAubWF0LW1kYy1jZWxsIHtcclxuICAgIGNvbG9yOiAjMDA1ZDg3O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAzRjYxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAubWF0LW1kYy1yb3c6aG92ZXIgLm1hdC1tZGMtY2VsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuXHJcbiAgLyogQmx1ZSB0ZXh0IGZvciBmaWVsZCBsYWJlbHMgKi9cclxuICAuYmx1ZS1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlZCB0ZXh0IGZvciByZXF1aXJlZCBmaWVsZCBsYWJlbHMgKi9cclxuICAucmVkLWxhYmVsIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIH1cclxuXHJcbiAgLmJvbGRlZC1jZWxsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmZhZGVkLWNlbGwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnJlbGVhc2Utb25seS1jZWxsIHtcclxuICAgIG9wYWNpdHk6IDA7IC8qIG5lZWRlZCBmb3IgbW9iaWxlIGRldmljZSBzdHlsaW5nICovXHJcbiAgICBjb250ZW50LXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC8qIENhbGVuZGFyIFN0eWxpbmcgKi9cclxuXHJcbiAgOjpuZy1kZWVwICAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlYmZiOTtcclxuICB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 813:
/*!**************************************************************!*\
  !*** ./src/app/catch/seine-report/seine-report.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeineReportComponent": () => (/* binding */ SeineReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-models/catch-table-models/species-data.model */ 439);
/* harmony import */ var _dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogs/add-species-dialog/add-species-dialog.component */ 8600);
/* harmony import */ var src_app_data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data-models/catch-table-models/table-rules.model */ 9356);
/* harmony import */ var src_app_data_models_report_models_daily_catch_report_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data-models/report-models/daily-catch-report.model */ 388);
/* harmony import */ var _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data-models/trip-models/trip.model */ 5636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 7371);





























function SeineReportComponent_h6_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" Page ", ctx_r0.currPage, " of ", ctx_r0.numPages, " ");
  }
}
function SeineReportComponent_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Seine Catch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SeineReportComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-spinner", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("diameter", 50)("strokeWidth", 6)("value", ctx_r2.spinnerProgress);
  }
}
function SeineReportComponent_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SeineReportComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Please provide the catch date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 21)(7, "mat-card", 22)(8, "mat-calendar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectedChange", function SeineReportComponent_div_12_Template_mat_calendar_selectedChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.catchDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 2)(11, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " How many hours did you spend fishing? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 13)(14, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Hours (round to the nearest half hour) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-form-field", 25)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Hours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function SeineReportComponent_div_12_Template_input_input_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.validateHoursFished("hoursFished"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", ctx_r4.catchDate);
  }
}
function SeineReportComponent_div_13_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SeineReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Where did you fish? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 13)(5, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Management Area(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " (Do not include subareas) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-form-field", 25)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " Management Area ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, SeineReportComponent_div_13_mat_error_13_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 13)(15, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " Subarea(s) Fished ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " (Comma-separate if multiple) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-form-field", 25)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, " Subarea(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 2)(24, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " How many sets did you make? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 13)(27, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, " Number of Sets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-form-field", 25)(30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, " Number of Sets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function SeineReportComponent_div_13_Template_input_input_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.forbidNonNumeric("numSets"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.seineForm.invalid);
  }
}
function SeineReportComponent_div_14_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SeineReportComponent_div_14_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r25.speciesName, " ");
  }
}
function SeineReportComponent_div_14_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Kept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SeineReportComponent_div_14_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r20.determineCellStyling(element_r26.kept));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r26.kept, " ");
  }
}
function SeineReportComponent_div_14_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Released ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SeineReportComponent_div_14_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r22.determineCellStyling(element_r27.released));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r27.released, " ");
  }
}
function SeineReportComponent_div_14_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 46);
  }
}
function SeineReportComponent_div_14_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SeineReportComponent_div_14_tr_18_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);
      const index_r29 = restoredCtx.index;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r30.addSpeciesDialog(index_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SeineReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Add or Edit Catch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](5, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, SeineReportComponent_div_14_th_7_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, SeineReportComponent_div_14_td_8_Template, 2, 1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](9, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, SeineReportComponent_div_14_th_11_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, SeineReportComponent_div_14_td_12_Template, 2, 2, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](13, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, SeineReportComponent_div_14_th_15_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, SeineReportComponent_div_14_td_16_Template, 2, 2, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, SeineReportComponent_div_14_tr_17_Template, 1, 0, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, SeineReportComponent_div_14_tr_18_Template, 1, 0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 39)(20, "h6", 40)(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " Total Fish Kept: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "h6", 40)(25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, " Total Fish Released: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 21)(31, "div", 13)(32, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SeineReportComponent_div_14_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r32.addSpeciesDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, " Add New Species ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx_r6.fishListDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx_r6.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx_r6.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r6.calculateTotalFish("kept"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r6.calculateTotalFish("released"), " ");
  }
}
function SeineReportComponent_div_15_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const response_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", response_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", response_r38, " ");
  }
}
function SeineReportComponent_div_15_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SeineReportComponent_div_15_h6_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please provide the time of capture and species details in the comments. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SeineReportComponent_div_15_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SeineReportComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Did you catch any birds, marine mammals, or turtles? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-form-field", 48)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, SeineReportComponent_div_15_mat_option_8_Template, 2, 2, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, SeineReportComponent_div_15_mat_error_9_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, SeineReportComponent_div_15_h6_10_Template, 2, 0, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 2)(12, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Would you like to add a comment? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 13)(15, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-form-field", 52)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " Comments... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "textarea", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, SeineReportComponent_div_15_mat_error_21_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r7.responseOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.seineForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r7.seineForm.get("nonFish")) == null ? null : tmp_2_0.value) === "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.seineForm.invalid);
  }
}
function SeineReportComponent_div_16_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r39.seineForm.get("mgmtArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function SeineReportComponent_div_16_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SeineReportComponent_div_16_small_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r41.seineForm.get("nonFish")) == null ? null : tmp_0_0.value, " ");
  }
}
function SeineReportComponent_div_16_small_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SeineReportComponent_div_16_small_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SeineReportComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Is all information complete and ready to be submitted to DFO? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 13)(5, "h6", 55)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Date Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 13)(11, "h6", 55)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Hours Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 13)(17, "h6", 24)(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Management Area Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, SeineReportComponent_div_16_small_20_Template, 2, 1, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, SeineReportComponent_div_16_small_21_Template, 2, 0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 13)(23, "h6", 24)(24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Subarea(s) Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 13)(29, "h6", 24)(30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Number of Sets:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 13)(35, "h6", 24)(36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Total Fish Kept:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 13)(41, "h6", 24)(42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Total Fish Released:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 13)(47, "h6", 24)(48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Non-fish caught?:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, SeineReportComponent_div_16_small_50_Template, 2, 1, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, SeineReportComponent_div_16_small_51_Template, 2, 0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 13)(53, "h6", 24)(54, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "Comments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, SeineReportComponent_div_16_small_58_Template, 2, 0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_10_0;
    let tmp_11_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 12, ctx_r8.catchDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_1_0 = ctx_r8.seineForm.get("hoursFished")) == null ? null : tmp_1_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r8.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_4_0 = ctx_r8.seineForm.get("zoneArea")) == null ? null : tmp_4_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_5_0 = ctx_r8.seineForm.get("numSets")) == null ? null : tmp_5_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r8.calculateTotalFish("kept"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r8.calculateTotalFish("released"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r8.nonFishInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.nonFishInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_10_0 = ctx_r8.seineForm.get("comments")) == null ? null : tmp_10_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r8.seineForm.get("comments")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors.required);
  }
}
function SeineReportComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SeineReportComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Send to DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
class SeineReportComponent {
  constructor(dialog, auth, router, toastr, onlineStatusService, authenticationService) {
    this.dialog = dialog;
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    this.responseOptions = ['Yes', 'No']; //hardcoded values to be used in the form
    this.fishListDetails = []; // source for table data - all data currently in the table
    // data preambles
    this.catchReport = new src_app_data_models_report_models_daily_catch_report_model__WEBPACK_IMPORTED_MODULE_5__.DailyCatchReport(); // catch report we will fill out
    this.currTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_6__.Trip();
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
    this.unfilteredFishList = []; // temporary array to store species
    this.fishList = []; // filtered list of species data, will comprise the user's look-up list
    this.seineTable = new src_app_data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_4__.TableRules(); // used to filter table data
    // values associated with each page
    this.seineForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormGroup({
      hoursFished: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
      //page 2
      mgmtArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
      zoneArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
      numSets: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
      //page 4
      comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
      nonFish: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required])
    });
    this.catchDate = new Date(); //page 1 
    this.displayedColumns = []; // page 3
    // section to section
    this.numPages = 0;
    this.currPage = 0;
    this.spinnerProgress = 0;
    this.spinnerIncrement = 0;
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_10__.OnlineStatusType.OFFLINE) {
      let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getCurrUsername();
      if (currUsername) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOffline(currUsername).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
          if (error) {
            this.authenticationService.userDataLogout(error);
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.authenticationService.userDataLogout("User ID or Email not defined");
          } else {
            this.userDetails = currUser;
            this.initialize();
          }
        });
      } else {
        this.authenticationService.userDataLogout("Username not saved to storage");
      }
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
                  if (error) {
                    this.authenticationService.userDataLogout(error);
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.authenticationService.userDataLogout("User ID or Email is undefined");
                  } else {
                    this.userDetails = currUser;
                    this.initialize();
                  }
                });
              } else {
                this.authenticationService.userDataLogout("User ID or email is undefined");
              }
            } else {
              this.authenticationService.userDataLogout("Cannot get user data");
            }
          });
        } else {
          this.authenticationService.userDataLogout("Not authenticated");
        }
      });
    }
  }
  ngOnInit() {
    this.onNonFishChange();
  }
  onNonFishChange() {
    this.seineForm.get('nonFish')?.valueChanges.subscribe(value => {
      const commentControl = this.seineForm.get('comments');
      if (value === 'Yes') {
        commentControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
      } else {
        commentControl?.clearValidators();
      }
      commentControl?.updateValueAndValidity();
    });
  }
  // initialize the data
  initialize() {
    // get all required data
    this.currTrip = this.userDetails.currTrip;
    this.unfilteredFishList = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getSpeciesList();
    this.seineTable = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getTableRules('Seine');
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
      this.seineForm.patchValue({
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
    let newSpeciesData = new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_2__.SpeciesData(result.speciesName);
    newSpeciesData.kept = kept;
    newSpeciesData.released = released;
    return newSpeciesData;
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
    const dialogRef = this.dialog.open(_dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_3__.AddSpeciesDialogComponent, {
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
  // check if management area is invalid
  managementAreaInvalid() {
    return this.seineForm.get('mgmtArea')?.errors?.required;
  }
  // check if non-fish selection value is invalid
  nonFishInvalid() {
    return this.seineForm.get('nonFish')?.errors?.required;
  }
  // send catch to DFO
  sendToDFO() {
    if (this.seineForm.valid) {
      this.saveCatchReport();
      _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
        console.log("User details saved to PouchDB");
        this.router.navigate(['submitted-report'], {
          state: {
            name: 'Daily Catch Report'
          }
        });
      });
    } else {
      this.toastr.error("Not all required fields filled", "Invalid form");
    }
  }
  // back to home screen
  toHome() {
    this.router.navigate(['active-trip-home']);
  }
  // only allow one decimal place with 0 or 5 as the tenth digit
  validateHoursFished(controlName) {
    let control = this.seineForm.get(controlName);
    const regex = /^\d+((\.)|(\.(0|5))?)$/; // matches inputs like: 23, 3, 4.5, 0.5, 9.0, 12., etc.
    if (!regex.test(control.value)) {
      // if we don't find a match
      control.setValue(control.value.replace(/.$/, '')); // replace the most recently entered character with ''
    }
  }
  // forbid field from entering non-decimal values
  forbidNonNumeric(controlName) {
    let control = this.seineForm.get(controlName);
    control.setValue(control.value.replace(/[^0-9]/g, ''));
  }
  // creates a list of all species in the table that have non-zero data associated with them
  determineSpeciesData() {
    let tempFishArray = [];
    for (let fish of this.fishListDetails) {
      if (fish.kept > 0 || fish.released > 0) {
        tempFishArray.push(fish);
      }
    }
    return tempFishArray;
  }
  // saves all Daily Catch Report information pertinent to Seine
  saveCatchReport() {
    // save relevant information gathered in the form
    this.catchReport.dateFished = this.catchDate;
    this.catchReport.hoursFished = this.seineForm.get('hoursFished')?.value;
    this.catchReport.managementArea = this.seineForm.get('mgmtArea')?.value;
    this.catchReport.subArea = this.seineForm.get('zoneArea')?.value;
    this.catchReport.numSets = this.seineForm.get('numSets')?.value;
    this.catchReport.nonFish = this.seineForm.get('nonFish')?.value;
    this.catchReport.comments = this.seineForm.get('comments')?.value;
    this.catchReport.speciesDataList = this.determineSpeciesData();
    this.catchReport.submissionDate = new Date(); // get current date/time
    // push the report to currTrip
    this.currTrip.dailyCatchReports.push(this.catchReport);
    this.userDetails.currTrip = this.currTrip;
  }
}
SeineReportComponent.ɵfac = function SeineReportComponent_Factory(t) {
  return new (t || SeineReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_12__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_10__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__.AuthenticationService));
};
SeineReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: SeineReportComponent,
  selectors: [["app-seine-report"]],
  viewQuery: function SeineReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    }
  },
  decls: 31,
  vars: 12,
  consts: [[1, "container", "catch-container"], [1, "container", 2, "padding-top", "20px"], ["align", "center", 1, "row"], [4, "ngIf"], [1, "col-5"], [1, "col-2"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value", 4, "ngIf"], ["style", "color:#3ebfb9", 4, "ngIf"], [3, "formGroup"], ["class", "container", 4, "ngIf"], [1, "row", 2, "margin-top", "auto", "padding-bottom", "3%", "padding-top", "10px"], [1, "col-1"], [1, "col-4"], [1, "row"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-blue", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"], [1, "text-muted"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value"], [2, "color", "#3ebfb9"], [1, "container"], [1, "blue-heading-title"], [1, "col-8"], [1, "demo-inline-calendar-card", 2, "margin-top", "10%"], [3, "selected", "selectedChange"], [1, "blue-heading"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "inputmode", "numeric", "formControlName", "hoursFished", 3, "input"], ["matInput", "", "required", "", "formControlName", "mgmtArea"], ["matInput", "", "formControlName", "zoneArea"], ["matInput", "", "inputmode", "numeric", "formControlName", "numSets", 3, "input"], ["mat-table", "", 1, "mat-elevation-z8", "margin-table", 3, "dataSource"], ["matColumnDef", "speciesName"], ["mat-header-cell", "", "class", "heading-cell", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "kept"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "released"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "row", 2, "padding-top", "10px"], [2, "color", "#003F61"], ["align", "center", 1, "row", "add-item"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-red", 3, "click"], ["mat-header-cell", "", 1, "heading-cell"], ["mat-cell", ""], ["mat-cell", "", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["appearance", "outline", 1, "form-field", 2, "padding-top", "15px"], ["formControlName", "nonFish"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "blue-heading", 4, "ngIf"], ["appearance", "fill", 1, "form-field"], ["matInput", "", "formControlName", "comments", "rows", "9"], [3, "value"], [1, "blue-label"], ["class", "blue-label", 4, "ngIf"], ["class", "red-label", 4, "ngIf"], [1, "red-label"]],
  template: function SeineReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SeineReportComponent_h6_3_Template, 3, 2, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SeineReportComponent_h6_4_Template, 3, 0, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, SeineReportComponent_mat_spinner_8_Template, 1, 3, "mat-spinner", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, SeineReportComponent_mat_icon_9_Template, 2, 0, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, SeineReportComponent_div_12_Template, 20, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, SeineReportComponent_div_13_Template, 33, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, SeineReportComponent_div_14_Template, 36, 5, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, SeineReportComponent_div_15_Template, 22, 4, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, SeineReportComponent_div_16_Template, 59, 14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SeineReportComponent_Template_button_click_21_listener() {
        return ctx.toPreviousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 12)(26, "div", 13)(27, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SeineReportComponent_Template_button_click_27_listener() {
        return ctx.toNextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, SeineReportComponent_span_28_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, SeineReportComponent_span_29_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.seineForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCard, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatCalendar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatError, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelect, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe],
  styles: [".catch-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n  }\r\n  \r\n  \r\n  .mat-mdc-progress-spinner[_ngcontent-%COMP%] {\r\n    --mdc-circular-progress-active-indicator-color: #3ebfb9 !important;\r\n  }\r\n  \r\n  \r\n  .mat-mdc-radio-button.mat-accent[_ngcontent-%COMP%] {\r\n    --mdc-radio-selected-focus-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-hover-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-pressed-icon-color: #3ebfb9;\r\n    --mat-mdc-radio-checked-ripple-color: #3ebfb9;\r\n  }\r\n  \r\n    .mat-mdc-text-field-wrapper {\r\n    background-color: whitesmoke !important;\r\n  }\r\n  \r\n  \r\n  .radio[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    margin-top: 1%;\r\n  }\r\n  \r\n  \r\n  .blue-heading[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n  }\r\n  \r\n  \r\n  .blue-heading-title[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    font-weight: bold;\r\n    margin-top: 5%;\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  \r\n  .add-item[_ngcontent-%COMP%] {\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  \r\n  .fishing-button-blue[_ngcontent-%COMP%] {\r\n    background-color: #005d87 !important;\r\n    color: white !important;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .fishing-button-red[_ngcontent-%COMP%] {\r\n    background-color: #ff6f61 !important;\r\n    color: white !important;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .time-picker[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n  \r\n  \r\n  .text-small[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .form-field[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .margin-table[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n .heading-cell[_ngcontent-%COMP%] {\r\n    color: #003F61 !important;\r\n    font-weight: bold !important;\r\n  }\r\n\r\n  .mat-column-speciesName[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    color: #005d87;\r\n    border-right: 1px solid;\r\n  }\r\n\r\n  .mat-column-kept[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    text-align: center;\r\n  }\r\n\r\n  .mat-column-released[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    text-align: center;\r\n  }\r\n\r\n  .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    border-bottom: 1px solid;\r\n    border-top: 1px solid;\r\n    border-color: #003F61;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n    background-color: whitesmoke;\r\n  }\r\n\r\n  \r\n  .blue-label[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n    font-size: medium;\r\n  }\r\n  \r\n  \r\n  .red-label[_ngcontent-%COMP%] {\r\n    color: red;\r\n    margin-top: 5%;\r\n    font-size: medium;\r\n  }\r\n\r\n  .bolded-cell[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\r\n\r\n  .faded-cell[_ngcontent-%COMP%] {\r\n    font-weight: lighter;\r\n  }\r\n\r\n\r\n\r\n   .mat-calendar-body-selected {\r\n  background-color: #3ebfb9;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2F0Y2gvc2VpbmUtcmVwb3J0L3NlaW5lLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBLDJCQUEyQjtFQUMzQjtJQUNFLGtFQUFrRTtFQUNwRTs7RUFFQSx3QkFBd0I7RUFDeEI7SUFDRSw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHdDQUF3QztJQUN4QyxnREFBZ0Q7SUFDaEQsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsdUNBQXVDO0VBQ3pDOztFQUVBLGtCQUFrQjtFQUNsQjtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGNBQWM7RUFDaEI7O0VBRUEsOEJBQThCO0VBQzlCO0lBQ0UsY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBRUEsZUFBZTtFQUNmO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBLDBCQUEwQjtFQUMxQjtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUEsaUJBQWlCO0VBQ2pCO0lBQ0Usb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUEsZ0JBQWdCO0VBQ2hCO0lBQ0Usb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUEsb0NBQW9DO0VBQ3BDO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBLHlCQUF5QjtFQUN6QjtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUEscUJBQXFCO0VBQ3JCO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBLFVBQVU7RUFDVjtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0NBRUQ7SUFDRyx5QkFBeUI7SUFDekIsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBLCtCQUErQjtFQUMvQjtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBLHVDQUF1QztFQUN2QztJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztBQUVGLHFCQUFxQjs7QUFFckI7RUFDRSx5QkFBeUI7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBPdGhlciBjb250YWluZXIgc3R5bGVzICovXHJcbi5jYXRjaC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFByb2dyZXNzIHNwaW5uZXIgY29sb3IgKi9cclxuICAubWF0LW1kYy1wcm9ncmVzcy1zcGlubmVyIHtcclxuICAgIC0tbWRjLWNpcmN1bGFyLXByb2dyZXNzLWFjdGl2ZS1pbmRpY2F0b3ItY29sb3I6ICMzZWJmYjkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogUmFkaW8gYnV0dG9uIGNvbG9ycyAqL1xyXG4gIC5tYXQtbWRjLXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IHtcclxuICAgIC0tbWRjLXJhZGlvLXNlbGVjdGVkLWZvY3VzLWljb24tY29sb3I6ICMzZWJmYjk7XHJcbiAgICAtLW1kYy1yYWRpby1zZWxlY3RlZC1ob3Zlci1pY29uLWNvbG9yOiAjM2ViZmI5O1xyXG4gICAgLS1tZGMtcmFkaW8tc2VsZWN0ZWQtaWNvbi1jb2xvcjogIzNlYmZiOTtcclxuICAgIC0tbWRjLXJhZGlvLXNlbGVjdGVkLXByZXNzZWQtaWNvbi1jb2xvcjogIzNlYmZiOTtcclxuICAgIC0tbWF0LW1kYy1yYWRpby1jaGVja2VkLXJpcHBsZS1jb2xvcjogIzNlYmZiOTtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJhZGlvIGJ1dHRvbnMgKi9cclxuICAucmFkaW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gIH1cclxuICBcclxuICAvKiBCbHVlIHRleHQgb24gZmluYWwgc2NyZWVuICovXHJcbiAgLmJsdWUtaGVhZGluZyB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gIH1cclxuICBcclxuICAvKiBUaXRsZSB0ZXh0ICovXHJcbiAgLmJsdWUtaGVhZGluZy10aXRsZSB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIHRyaXAgSUQgb3IgdmVzc2VsICovXHJcbiAgLmFkZC1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEJsdWUgYnV0dG9ucyAqL1xyXG4gIC5maXNoaW5nLWJ1dHRvbi1ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVkODcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlZCBidXR0b25zICovXHJcbiAgLmZpc2hpbmctYnV0dG9uLXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2ZjYxICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsaXphdGlvbiBmb3IgdGhlIHRpbWUgcGlja2VyICovXHJcbiAgLnRpbWUtcGlja2VyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogU21hbGwgZm9udCBjb21wb25lbnQgKi9cclxuICAudGV4dC1zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAvKiBGb3IgaW5wdXQgZmllbGRzICovXHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRhYmxlICovXHJcbiAgLm1hcmdpbi10YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcblxyXG4gLmhlYWRpbmctY2VsbCB7XHJcbiAgICBjb2xvcjogIzAwM0Y2MSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLXNwZWNpZXNOYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDVkODc7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLWtlcHQge1xyXG4gICAgY29sb3I6ICMwMDNGNjE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWF0LWNvbHVtbi1yZWxlYXNlZCB7XHJcbiAgICBjb2xvcjogIzAwM0Y2MTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tYXQtbWRjLXJvdyAubWF0LW1kYy1jZWxsIHtcclxuICAgIGNvbG9yOiAjMDA1ZDg3O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAzRjYxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAubWF0LW1kYy1yb3c6aG92ZXIgLm1hdC1tZGMtY2VsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuXHJcbiAgLyogQmx1ZSB0ZXh0IGZvciBmaWVsZCBsYWJlbHMgKi9cclxuICAuYmx1ZS1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlZCB0ZXh0IGZvciByZXF1aXJlZCBmaWVsZCBsYWJlbHMgKi9cclxuICAucmVkLWxhYmVsIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIH1cclxuXHJcbiAgLmJvbGRlZC1jZWxsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmZhZGVkLWNlbGwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgfVxyXG5cclxuLyogQ2FsZW5kYXIgU3R5bGluZyAqL1xyXG5cclxuOjpuZy1kZWVwICAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZWJmYjk7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 711:
/*!**************************************************************!*\
  !*** ./src/app/catch/troll-report/troll-report.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrollReportComponent": () => (/* binding */ TrollReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-models/catch-table-models/species-data.model */ 439);
/* harmony import */ var _dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogs/add-species-dialog/add-species-dialog.component */ 8600);
/* harmony import */ var src_app_data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data-models/catch-table-models/table-rules.model */ 9356);
/* harmony import */ var src_app_data_models_report_models_daily_catch_report_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data-models/report-models/daily-catch-report.model */ 388);
/* harmony import */ var _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data-models/trip-models/trip.model */ 5636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 7371);





























function TrollReportComponent_h6_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" Page ", ctx_r0.currPage, " of ", ctx_r0.numPages, " ");
  }
}
function TrollReportComponent_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Troll Catch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function TrollReportComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-spinner", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("diameter", 50)("strokeWidth", 6)("value", ctx_r2.spinnerProgress);
  }
}
function TrollReportComponent_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TrollReportComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Please provide the catch date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 21)(7, "mat-card", 22)(8, "mat-calendar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectedChange", function TrollReportComponent_div_12_Template_mat_calendar_selectedChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.catchDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 2)(11, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " How many hours did you spend fishing? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 13)(14, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Hours (round to the nearest half hour) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-form-field", 25)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Hours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function TrollReportComponent_div_12_Template_input_input_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.validateHoursFished("hoursFished"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", ctx_r4.catchDate);
  }
}
function TrollReportComponent_div_13_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TrollReportComponent_div_13_mat_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", state_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", state_r17, " ");
  }
}
function TrollReportComponent_div_13_mat_error_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TrollReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Where did you fish? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 13)(5, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Management Area(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " (Do not include subareas) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-form-field", 25)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " Management Area ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, TrollReportComponent_div_13_mat_error_13_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 13)(15, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " Zone(s) or Subarea(s) Fished ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " (Use zones for areas 121-127; comma-separate if multiple) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-form-field", 25)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, " Zone(s) or Subarea(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 2)(24, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " Frozen or Iced? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 13)(27, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, " Frozen or Iced ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-form-field", 25)(30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, TrollReportComponent_div_13_mat_option_33_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, TrollReportComponent_div_13_mat_error_34_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.trollForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.stateOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.trollForm.invalid);
  }
}
function TrollReportComponent_div_14_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TrollReportComponent_div_14_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r26.speciesName, " ");
  }
}
function TrollReportComponent_div_14_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Kept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TrollReportComponent_div_14_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r21.determineCellStyling(element_r27.kept, element_r27.speciesName));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r27.kept, " ");
  }
}
function TrollReportComponent_div_14_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Released ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TrollReportComponent_div_14_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r23.determineCellStyling(element_r28.released));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r28.released, " ");
  }
}
function TrollReportComponent_div_14_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 48);
  }
}
function TrollReportComponent_div_14_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrollReportComponent_div_14_tr_18_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r32);
      const index_r30 = restoredCtx.index;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r31.addSpeciesDialog(index_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TrollReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Add or Edit Catch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](5, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, TrollReportComponent_div_14_th_7_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, TrollReportComponent_div_14_td_8_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](9, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, TrollReportComponent_div_14_th_11_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, TrollReportComponent_div_14_td_12_Template, 2, 2, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](13, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, TrollReportComponent_div_14_th_15_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, TrollReportComponent_div_14_td_16_Template, 2, 2, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, TrollReportComponent_div_14_tr_17_Template, 1, 0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, TrollReportComponent_div_14_tr_18_Template, 1, 0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 41)(20, "h6", 42)(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " Total Fish Kept: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "h6", 42)(25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, " Total Fish Released: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 21)(31, "div", 13)(32, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrollReportComponent_div_14_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r33.addSpeciesDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, " Add New Species ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx_r6.fishListDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx_r6.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx_r6.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r6.calculateTotalFish("kept"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r6.calculateTotalFish("released"), " ");
  }
}
function TrollReportComponent_div_15_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const response_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", response_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", response_r39, " ");
  }
}
function TrollReportComponent_div_15_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TrollReportComponent_div_15_h6_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please provide the time of capture and species details in the comments. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TrollReportComponent_div_15_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TrollReportComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Did you catch any birds, marine mammals, or turtles? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-form-field", 50)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, TrollReportComponent_div_15_mat_option_8_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, TrollReportComponent_div_15_mat_error_9_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, TrollReportComponent_div_15_h6_10_Template, 2, 0, "h6", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 2)(12, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Would you like to add a comment? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 13)(15, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-form-field", 53)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " Comments... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "textarea", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, TrollReportComponent_div_15_mat_error_21_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r7.responseOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.trollForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r7.trollForm.get("nonFish")) == null ? null : tmp_2_0.value) === "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.trollForm.invalid);
  }
}
function TrollReportComponent_div_16_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r40.trollForm.get("mgmtArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function TrollReportComponent_div_16_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TrollReportComponent_div_16_small_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r42.trollForm.get("frozenOrIced")) == null ? null : tmp_0_0.value, " ");
  }
}
function TrollReportComponent_div_16_small_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TrollReportComponent_div_16_small_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r44.trollForm.get("nonFish")) == null ? null : tmp_0_0.value, " ");
  }
}
function TrollReportComponent_div_16_small_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TrollReportComponent_div_16_small_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TrollReportComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Is all information complete and ready to be submitted to DFO? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 13)(5, "h6", 55)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Date Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 13)(11, "h6", 55)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Hours Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 13)(17, "h6", 24)(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Management Area Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, TrollReportComponent_div_16_small_20_Template, 2, 1, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, TrollReportComponent_div_16_small_21_Template, 2, 0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 13)(23, "h6", 24)(24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Zone(s) or Subarea(s) Fished:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 13)(29, "h6", 24)(30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Frozen or Iced?:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, TrollReportComponent_div_16_small_32_Template, 2, 1, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, TrollReportComponent_div_16_small_33_Template, 2, 0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 13)(35, "h6", 24)(36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Total Fish Kept:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 13)(41, "h6", 24)(42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Total Fish Released:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 13)(47, "h6", 24)(48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Non-fish caught?:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, TrollReportComponent_div_16_small_50_Template, 2, 1, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, TrollReportComponent_div_16_small_51_Template, 2, 0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 13)(53, "h6", 24)(54, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "Comments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, TrollReportComponent_div_16_small_58_Template, 2, 0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_4_0;
    let tmp_11_0;
    let tmp_12_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 13, ctx_r8.catchDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_1_0 = ctx_r8.trollForm.get("hoursFished")) == null ? null : tmp_1_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r8.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_4_0 = ctx_r8.trollForm.get("zoneArea")) == null ? null : tmp_4_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r8.frozenOrIcedInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.frozenOrIcedInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r8.calculateTotalFish("kept"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r8.calculateTotalFish("released"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r8.nonFishInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.nonFishInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_11_0 = ctx_r8.trollForm.get("comments")) == null ? null : tmp_11_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx_r8.trollForm.get("comments")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors.required);
  }
}
function TrollReportComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function TrollReportComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Send to DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
class TrollReportComponent {
  constructor(dialog, auth, router, toastr, onlineStatusService, authenticationService) {
    this.dialog = dialog;
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    //hardcoded values to be used in the form
    this.responseOptions = ['Yes', 'No'];
    this.stateOptions = ['Frozen (F)', 'Iced (I)'];
    this.fishListDetails = []; // source for table data - all data currently in the table
    this.trollTable = new src_app_data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_4__.TableRules(); // used to filter table data
    // data preambles
    this.catchReport = new src_app_data_models_report_models_daily_catch_report_model__WEBPACK_IMPORTED_MODULE_5__.DailyCatchReport(); // catch report we will fill out
    this.currTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_6__.Trip();
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
    this.unfilteredFishList = []; // temporary array to store species
    this.fishList = []; //filtered list of species data, will comprise the user's look-up list
    // values associated with each page
    this.trollForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormGroup({
      hoursFished: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
      //page 2
      mgmtArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
      zoneArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
      frozenOrIced: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
      //page 4
      comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
      nonFish: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required])
    });
    this.catchDate = new Date(); //page 1 
    this.displayedColumns = []; // page 3
    // section to section
    this.numPages = 0;
    this.currPage = 0;
    this.spinnerProgress = 0;
    this.spinnerIncrement = 0;
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_10__.OnlineStatusType.OFFLINE) {
      let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getCurrUsername();
      if (currUsername) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOffline(currUsername).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
          if (error) {
            this.authenticationService.userDataLogout(error);
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.authenticationService.userDataLogout("User ID or Email not defined");
          } else {
            this.userDetails = currUser;
            this.initialize();
          }
        });
      } else {
        this.authenticationService.userDataLogout("Username not saved to storage");
      }
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
                  if (error) {
                    this.authenticationService.userDataLogout(error);
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.authenticationService.userDataLogout("User ID or Email is undefined");
                  } else {
                    this.userDetails = currUser;
                    this.initialize();
                  }
                });
              } else {
                this.authenticationService.userDataLogout("User ID or email is undefined");
              }
            } else {
              this.authenticationService.userDataLogout("Cannot get user data");
            }
          });
        } else {
          this.authenticationService.userDataLogout("Not authenticated");
        }
      });
    }
  }
  ngOnInit() {
    this.onNonFishChange();
  }
  onNonFishChange() {
    this.trollForm.get('nonFish')?.valueChanges.subscribe(value => {
      const commentControl = this.trollForm.get('comments');
      if (value === 'Yes') {
        commentControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
      } else {
        commentControl?.clearValidators();
      }
      commentControl?.updateValueAndValidity();
    });
  }
  // initialize the data
  initialize() {
    // get all required data
    this.currTrip = this.userDetails.currTrip;
    this.unfilteredFishList = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getSpeciesList();
    this.trollTable = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getTableRules('Troll');
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
      this.trollForm.patchValue({
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
    let newSpeciesData = new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_2__.SpeciesData(result.speciesName);
    newSpeciesData.kept = kept;
    newSpeciesData.released = released;
    return newSpeciesData;
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
    const dialogRef = this.dialog.open(_dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_3__.AddSpeciesDialogComponent, {
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
  // check if management area is invalid
  managementAreaInvalid() {
    return this.trollForm.get('mgmtArea')?.errors?.required;
  }
  // check if frozen or iced selection value is invalid
  frozenOrIcedInvalid() {
    return this.trollForm.get('frozenOrIced')?.errors?.required;
  }
  // check if non-fish selection value is invalid
  nonFishInvalid() {
    return this.trollForm.get('nonFish')?.errors?.required;
  }
  // send catch to DFO
  sendToDFO() {
    if (this.trollForm.valid) {
      this.saveCatchReport();
      _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
        console.log("User details saved to PouchDB");
        this.router.navigate(['submitted-report'], {
          state: {
            name: 'Daily Catch Report'
          }
        });
      });
    } else {
      this.toastr.error("Not all required fields filled", "Invalid form");
    }
  }
  // back to home screen
  toHome() {
    this.router.navigate(['active-trip-home']);
  }
  // only allow one decimal place with 0 or 5 as the tenth digit
  validateHoursFished(controlName) {
    let control = this.trollForm.get(controlName);
    const regex = /^\d+((\.)|(\.(0|5))?)$/; // matches inputs like: 23, 3, 4.5, 0.5, 9.0, 12., etc.
    if (!regex.test(control.value)) {
      // if we don't find a match
      control.setValue(control.value.replace(/.$/, '')); // replace the most recently entered character with ''
    }
  }
  // forbid field from entering non-decimal values
  forbidNonNumeric(controlName) {
    let control = this.trollForm.get(controlName);
    control.setValue(control.value.replace(/[^0-9]/g, ''));
  }
  // creates a list of all species in the table that have non-zero data associated with them 
  determineSpeciesData() {
    let tempFishArray = [];
    for (let fish of this.fishListDetails) {
      if (fish.kept > 0 || fish.released > 0) {
        tempFishArray.push(fish);
      }
    }
    return tempFishArray;
  }
  // saves all Daily Catch Report information pertinent to Troll
  saveCatchReport() {
    // save relevant information gathered in the form
    this.catchReport.dateFished = this.catchDate;
    this.catchReport.hoursFished = this.trollForm.get('hoursFished')?.value;
    this.catchReport.managementArea = this.trollForm.get('mgmtArea')?.value;
    this.catchReport.subArea = this.trollForm.get('zoneArea')?.value;
    this.catchReport.frozenOrIced = this.trollForm.get('frozenOrIced')?.value;
    this.catchReport.nonFish = this.trollForm.get('nonFish')?.value;
    this.catchReport.comments = this.trollForm.get('comments')?.value;
    this.catchReport.speciesDataList = this.determineSpeciesData();
    this.catchReport.submissionDate = new Date(); // get current date/time
    // push the report to currTrip
    this.currTrip.dailyCatchReports.push(this.catchReport);
    this.userDetails.currTrip = this.currTrip;
  }
}
TrollReportComponent.ɵfac = function TrollReportComponent_Factory(t) {
  return new (t || TrollReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_12__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_10__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__.AuthenticationService));
};
TrollReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: TrollReportComponent,
  selectors: [["app-troll-report"]],
  viewQuery: function TrollReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    }
  },
  decls: 31,
  vars: 12,
  consts: [[1, "container", "catch-container"], [1, "container", 2, "padding-top", "20px"], ["align", "center", 1, "row"], [4, "ngIf"], [1, "col-5"], [1, "col-2"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value", 4, "ngIf"], ["style", "color:#3ebfb9", 4, "ngIf"], [3, "formGroup"], ["class", "container", 4, "ngIf"], [1, "row", 2, "margin-top", "auto", "padding-bottom", "3%", "padding-top", "10px"], [1, "col-1"], [1, "col-4"], [1, "row"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-blue", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"], [1, "text-muted"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value"], [2, "color", "#3ebfb9"], [1, "container"], [1, "blue-heading-title"], [1, "col-8"], [1, "demo-inline-calendar-card", 2, "margin-top", "10%"], [3, "selected", "selectedChange"], [1, "blue-heading"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "inputmode", "numeric", "formControlName", "hoursFished", 3, "input"], ["matInput", "", "required", "", "formControlName", "mgmtArea"], ["matInput", "", "formControlName", "zoneArea"], ["formControlName", "frozenOrIced"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-table", "", 1, "mat-elevation-z8", "margin-table", 3, "dataSource"], ["matColumnDef", "speciesName"], ["mat-header-cell", "", "class", "heading-cell", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "kept"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "released"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "row", 2, "padding-top", "10px"], [2, "color", "#003F61"], ["align", "center", 1, "row", "add-item"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-red", 3, "click"], ["mat-header-cell", "", 1, "heading-cell"], ["mat-cell", ""], ["mat-cell", "", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["appearance", "outline", 1, "form-field", 2, "padding-top", "15px"], ["formControlName", "nonFish"], ["class", "blue-heading", 4, "ngIf"], ["appearance", "fill", 1, "form-field"], ["matInput", "", "formControlName", "comments", "rows", "9"], [1, "blue-label"], ["class", "blue-label", 4, "ngIf"], ["class", "red-label", 4, "ngIf"], [1, "red-label"]],
  template: function TrollReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, TrollReportComponent_h6_3_Template, 3, 2, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, TrollReportComponent_h6_4_Template, 3, 0, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, TrollReportComponent_mat_spinner_8_Template, 1, 3, "mat-spinner", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, TrollReportComponent_mat_icon_9_Template, 2, 0, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, TrollReportComponent_div_12_Template, 20, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, TrollReportComponent_div_13_Template, 35, 3, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, TrollReportComponent_div_14_Template, 36, 5, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, TrollReportComponent_div_15_Template, 22, 4, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, TrollReportComponent_div_16_Template, 59, 15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrollReportComponent_Template_button_click_21_listener() {
        return ctx.toPreviousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 12)(26, "div", 13)(27, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrollReportComponent_Template_button_click_27_listener() {
        return ctx.toNextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, TrollReportComponent_span_28_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, TrollReportComponent_span_29_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.trollForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCard, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatCalendar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatError, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelect, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe],
  styles: [".catch-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n  }\r\n  \r\n  \r\n  .mat-mdc-progress-spinner[_ngcontent-%COMP%] {\r\n    --mdc-circular-progress-active-indicator-color: #3ebfb9 !important;\r\n  }\r\n  \r\n  \r\n  .mat-mdc-radio-button.mat-accent[_ngcontent-%COMP%] {\r\n    --mdc-radio-selected-focus-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-hover-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-pressed-icon-color: #3ebfb9;\r\n    --mat-mdc-radio-checked-ripple-color: #3ebfb9;\r\n  }\r\n  \r\n    .mat-mdc-text-field-wrapper {\r\n    background-color: whitesmoke !important;\r\n  }\r\n  \r\n  \r\n  .radio[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    margin-top: 1%;\r\n  }\r\n  \r\n  \r\n  .blue-heading[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n  }\r\n  \r\n  \r\n  .blue-heading-title[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    font-weight: bold;\r\n    margin-top: 5%;\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  \r\n  .add-item[_ngcontent-%COMP%] {\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  \r\n  .fishing-button-blue[_ngcontent-%COMP%] {\r\n    background-color: #005d87 !important;\r\n    color: white !important;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .fishing-button-red[_ngcontent-%COMP%] {\r\n    background-color: #ff6f61 !important;\r\n    color: white !important;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .time-picker[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n  \r\n  \r\n  .text-small[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .form-field[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .margin-table[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  .heading-cell[_ngcontent-%COMP%] {\r\n    color: #003F61 !important;\r\n    font-weight: bold !important;\r\n  }\r\n\r\n  .mat-column-speciesName[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    color: #005d87;\r\n    border-right: 1px solid;\r\n  }\r\n\r\n  .mat-column-kept[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    text-align: center;\r\n  }\r\n\r\n  .mat-column-released[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    text-align: center;\r\n  }\r\n\r\n  .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    border-bottom: 1px solid;\r\n    border-top: 1px solid;\r\n    border-color: #003F61;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n    background-color: whitesmoke;\r\n  }\r\n\r\n  \r\n  .blue-label[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n    font-size: medium;\r\n  }\r\n  \r\n  \r\n  .red-label[_ngcontent-%COMP%] {\r\n    color: red;\r\n    margin-top: 5%;\r\n    font-size: medium;\r\n  }\r\n\r\n  .bolded-cell[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\r\n\r\n  .faded-cell[_ngcontent-%COMP%] {\r\n    font-weight: lighter;\r\n  }\r\n\r\n  .release-only-cell[_ngcontent-%COMP%] {\r\n    opacity: 0;  \r\n    content-visibility: hidden;\r\n  }\r\n\r\n  \r\n\r\n     .mat-calendar-body-selected {\r\n    background-color: #3ebfb9;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2F0Y2gvdHJvbGwtcmVwb3J0L3Ryb2xsLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBLDJCQUEyQjtFQUMzQjtJQUNFLGtFQUFrRTtFQUNwRTs7RUFFQSx3QkFBd0I7RUFDeEI7SUFDRSw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHdDQUF3QztJQUN4QyxnREFBZ0Q7SUFDaEQsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsdUNBQXVDO0VBQ3pDOztFQUVBLGtCQUFrQjtFQUNsQjtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGNBQWM7RUFDaEI7O0VBRUEsOEJBQThCO0VBQzlCO0lBQ0UsY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBRUEsZUFBZTtFQUNmO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBLDBCQUEwQjtFQUMxQjtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUEsaUJBQWlCO0VBQ2pCO0lBQ0Usb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUEsZ0JBQWdCO0VBQ2hCO0lBQ0Usb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUEsb0NBQW9DO0VBQ3BDO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBLHlCQUF5QjtFQUN6QjtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUEscUJBQXFCO0VBQ3JCO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBLFVBQVU7RUFDVjtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBLCtCQUErQjtFQUMvQjtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBLHVDQUF1QztFQUN2QztJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsVUFBVSxHQUFHLHFDQUFxQztJQUNsRCwwQkFBMEI7RUFDNUI7O0VBRUEscUJBQXFCOztFQUVyQjtJQUNFLHlCQUF5QjtFQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIE90aGVyIGNvbnRhaW5lciBzdHlsZXMgKi9cclxuLmNhdGNoLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogUHJvZ3Jlc3Mgc3Bpbm5lciBjb2xvciAqL1xyXG4gIC5tYXQtbWRjLXByb2dyZXNzLXNwaW5uZXIge1xyXG4gICAgLS1tZGMtY2lyY3VsYXItcHJvZ3Jlc3MtYWN0aXZlLWluZGljYXRvci1jb2xvcjogIzNlYmZiOSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAvKiBSYWRpbyBidXR0b24gY29sb3JzICovXHJcbiAgLm1hdC1tZGMtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQge1xyXG4gICAgLS1tZGMtcmFkaW8tc2VsZWN0ZWQtZm9jdXMtaWNvbi1jb2xvcjogIzNlYmZiOTtcclxuICAgIC0tbWRjLXJhZGlvLXNlbGVjdGVkLWhvdmVyLWljb24tY29sb3I6ICMzZWJmYjk7XHJcbiAgICAtLW1kYy1yYWRpby1zZWxlY3RlZC1pY29uLWNvbG9yOiAjM2ViZmI5O1xyXG4gICAgLS1tZGMtcmFkaW8tc2VsZWN0ZWQtcHJlc3NlZC1pY29uLWNvbG9yOiAjM2ViZmI5O1xyXG4gICAgLS1tYXQtbWRjLXJhZGlvLWNoZWNrZWQtcmlwcGxlLWNvbG9yOiAjM2ViZmI5O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2UgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogUmFkaW8gYnV0dG9ucyAqL1xyXG4gIC5yYWRpbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEJsdWUgdGV4dCBvbiBmaW5hbCBzY3JlZW4gKi9cclxuICAuYmx1ZS1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjMDA1ZDg3O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRpdGxlIHRleHQgKi9cclxuICAuYmx1ZS1oZWFkaW5nLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMDA1ZDg3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgdHJpcCBJRCBvciB2ZXNzZWwgKi9cclxuICAuYWRkLWl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICB9XHJcbiAgXHJcbiAgLyogQmx1ZSBidXR0b25zICovXHJcbiAgLmZpc2hpbmctYnV0dG9uLWJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWQ4NyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLyogUmVkIGJ1dHRvbnMgKi9cclxuICAuZmlzaGluZy1idXR0b24tcmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZmNjEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxpemF0aW9uIGZvciB0aGUgdGltZSBwaWNrZXIgKi9cclxuICAudGltZS1waWNrZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBTbWFsbCBmb250IGNvbXBvbmVudCAqL1xyXG4gIC50ZXh0LXNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZvciBpbnB1dCBmaWVsZHMgKi9cclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLyogVGFibGUgKi9cclxuICAubWFyZ2luLXRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRpbmctY2VsbCB7XHJcbiAgICBjb2xvcjogIzAwM0Y2MSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLXNwZWNpZXNOYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDVkODc7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLWtlcHQge1xyXG4gICAgY29sb3I6ICMwMDNGNjE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWF0LWNvbHVtbi1yZWxlYXNlZCB7XHJcbiAgICBjb2xvcjogIzAwM0Y2MTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tYXQtbWRjLXJvdyAubWF0LW1kYy1jZWxsIHtcclxuICAgIGNvbG9yOiAjMDA1ZDg3O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAzRjYxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAubWF0LW1kYy1yb3c6aG92ZXIgLm1hdC1tZGMtY2VsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuXHJcbiAgLyogQmx1ZSB0ZXh0IGZvciBmaWVsZCBsYWJlbHMgKi9cclxuICAuYmx1ZS1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlZCB0ZXh0IGZvciByZXF1aXJlZCBmaWVsZCBsYWJlbHMgKi9cclxuICAucmVkLWxhYmVsIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIH1cclxuXHJcbiAgLmJvbGRlZC1jZWxsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmZhZGVkLWNlbGwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgfVxyXG5cclxuICAucmVsZWFzZS1vbmx5LWNlbGwge1xyXG4gICAgb3BhY2l0eTogMDsgIC8qIG5lZWRlZCBmb3IgbW9iaWxlIGRldmljZSBzdHlsaW5nICovXHJcbiAgICBjb250ZW50LXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC8qIENhbGVuZGFyIFN0eWxpbmcgKi9cclxuXHJcbiAgOjpuZy1kZWVwICAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlYmZiOTtcclxuICB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 439:
/*!**********************************************************************!*\
  !*** ./src/app/data-models/catch-table-models/species-data.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    this.offloadWeight = 0; // for seine reports only
    this.offloadPieces = 0;
    this.speciesName = speciesName;
  }
  toString() {
    return this.speciesName;
  }
  isValid() {
    return !!this.speciesName;
  }
}

/***/ }),

/***/ 9356:
/*!*********************************************************************!*\
  !*** ./src/app/data-models/catch-table-models/table-rules.model.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    return !!this.gearName && this.containsSpecies.length > 0;
  }
}

/***/ }),

/***/ 9646:
/*!******************************************************************!*\
  !*** ./src/app/data-models/report-models/cancel-report.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelReport": () => (/* binding */ CancelReport)
/* harmony export */ });
class CancelReport {
  constructor() {
    this.confirmationNumber = ''; // not currently used, will be the End Fishing Report Confirmation Number
    this.submissionDate = new Date(); // not currently used, but app will eventually populate dynamically
    /* Flags for programmatical use */
    this.isComplete = false; // has this report been submitted? 
    this.isTransmitted = false; // flag that tells us if the report has been sent to DFO - not currently used
  }

  toString() {
    return 'Cancel Date: ' + this.submissionDate + '; Confirmation Number: ' + this.confirmationNumber;
  }
}

/***/ }),

/***/ 388:
/*!***********************************************************************!*\
  !*** ./src/app/data-models/report-models/daily-catch-report.model.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    this.frozenOrIced = ''; // unique to Troll
    this.speciesDataList = []; // catch data
    this.nonFish = '';
    this.comments = ''; // only required if "Yes" answered for nonFish
    this.confirmationNumber = ''; // daily catch report confirmation number (not being used yet)
    this.submissionDate = new Date();
    /* Flags for programmatical use */
    this.isTransmitted = false; // flag that tells us if the report has been sent to DFO - not currently used
  }

  toString() {
    return 'Date: ' + this.dateFished + '; Daily Catch Report Confirmation Number: ' + this.confirmationNumber;
  }
}

/***/ }),

/***/ 3304:
/*!***************************************************************!*\
  !*** ./src/app/data-models/report-models/end-report.model.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndReport": () => (/* binding */ EndReport)
/* harmony export */ });
class EndReport {
  constructor() {
    // if arrival details are required, this date will also contain an arrival time
    this.endDate = new Date(); // will be the same as in the trip model
    this.managementArea = '';
    this.comments = '';
    this.confirmationNumber = ''; // not currently used, will be the End Fishing Report Confirmation Number
    this.submissionDate = new Date(); // not currently used, but app will eventually populate dynamically
    /* Arrival Details - only needed for certain trips */
    this.arrivalSite = '';
    /* Flags for programmatical use */
    this.isComplete = false; // has this report been submitted?
    this.isTransmitted = false; // flag that tells us if the report has been sent to DFO - not currently used
  }

  toString() {
    return 'End Date: ' + this.endDate + '; Confirmation Number: ' + this.confirmationNumber;
  }
}

/***/ }),

/***/ 8796:
/*!*******************************************************************!*\
  !*** ./src/app/data-models/report-models/offload-report.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffloadReport": () => (/* binding */ OffloadReport)
/* harmony export */ });
class OffloadReport {
  constructor() {
    this.offloadDate = new Date(); // date and time provided by the user
    this.fishSlip = ''; // yes/no answer
    this.fishSlipNumber = ''; // may not always be provided
    this.catchWeightUnits = ''; // only needed for Seine
    this.speciesDataList = []; // offload data - list of species and their associated weight/pieces
    this.confirmationNumber = ''; // not currently used, will be the End Fishing Report Confirmation Number
    this.submissionDate = new Date(); // not currently used, but app will eventually populate dynamically
    /* Flags for programmatical use */
    this.isTransmitted = false; // flag that tells us if the report has been sent to DFO - not currently used
  }

  toString() {
    return 'Offload Date: ' + this.offloadDate + '; Confirmation Number: ' + this.confirmationNumber;
  }
}

/***/ }),

/***/ 7169:
/*!*****************************************************************!*\
  !*** ./src/app/data-models/report-models/pause-report.model.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PauseReport": () => (/* binding */ PauseReport)
/* harmony export */ });
class PauseReport {
  constructor() {
    this.pauseDate = new Date();
    this.managementArea = '';
    this.comments = '';
    this.confirmationNumber = ''; // not currently used, will be the End Fishing Report Confirmation Number
    this.submissionDate = new Date(); // not currently used, but app will eventually populate dynamically
    /* Flags for programmatical use */
    this.isTransmitted = false; // flag that tells us if the report has been sent to DFO - not currently used
  }

  toString() {
    return 'Pause Date: ' + this.pauseDate + '; Confirmation Number: ' + this.confirmationNumber;
  }
}

/***/ }),

/***/ 3056:
/*!*****************************************************************!*\
  !*** ./src/app/data-models/report-models/start-report.model.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartReport": () => (/* binding */ StartReport)
/* harmony export */ });
class StartReport {
  constructor() {
    this.startDate = new Date(); // same as start date in trip model
    this.managementArea = '';
    this.comments = '';
    this.confirmationNumber = ''; // not currently used, will be the same as the trip ID
    this.submissionDate = new Date(); // not currently used, but app will eventually populate dynamically
    /* Flags for programmatical use */
    this.isComplete = false;
    this.isInProgress = false;
    this.isTransmitted = false; // flag that tells us if the report has been sent to DFO - not currently used
  }

  isValid() {
    return this.isComplete && this.managementArea != '';
  }
  toString() {
    return 'Start Date: ' + this.startDate + '; Confirmation Number: ' + this.confirmationNumber;
  }
}

/***/ }),

/***/ 9793:
/*!*******************************************************************!*\
  !*** ./src/app/data-models/trip-models/gear-models/gear.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    return !!this.name && !!this.logbookID;
  }
  isEqual(inputGear) {
    return inputGear.logbookID === this.logbookID;
  }
}

/***/ }),

/***/ 786:
/*!******************************************************************!*\
  !*** ./src/app/data-models/trip-models/gear-models/net.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Net": () => (/* binding */ Net)
/* harmony export */ });
class Net {
  constructor(type, name, length, depth, depthUnits, ratio, mesh, meshUnits, numMeshes, strands = '', checked = false) {
    this.netType = ''; // will be either Alaska Twist, Multi Strand, or Comibination
    this.netName = ''; // will only be for the skipper's reference
    this.length = '';
    this.weedlineDepth = '';
    this.weedlineDepthUnits = '';
    this.hangRatio = '';
    this.meshSize = '';
    this.meshSizeUnits = '';
    this.numMeshes = '';
    this.numStrands = ''; //only needed for Alaska Twist
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
    let baseValid = !(!this.netName || !this.length || !this.weedlineDepth || !this.weedlineDepthUnits || !this.hangRatio || !this.meshSize || !this.meshSizeUnits || !this.numMeshes);
    if (this.netType === "Alaska Twist") {
      // requires numStrands to be set
      return baseValid && !!this.numStrands;
    } else if (this.netType) {
      // does not require a value for numStrands
      return baseValid;
    }
    return false;
  }
}

/***/ }),

/***/ 634:
/*!***************************************************************!*\
  !*** ./src/app/data-models/trip-models/license-area.model.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicenseArea": () => (/* binding */ LicenseArea)
/* harmony export */ });
class LicenseArea {
  constructor(licenseName = '', licenseLocation = '', isChecked = false) {
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
    return !!this.licenseName && !!this.licenseLocation;
  }
  isEqual(inputArea) {
    return inputArea.licenseName === this.licenseName;
  }
}

/***/ }),

/***/ 5636:
/*!*******************************************************!*\
  !*** ./src/app/data-models/trip-models/trip.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Trip": () => (/* binding */ Trip)
/* harmony export */ });
/* harmony import */ var _gear_models_gear_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gear-models/gear.model */ 9793);
/* harmony import */ var _user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-models/vessel-data.model */ 504);
/* harmony import */ var _license_area_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./license-area.model */ 634);
/* harmony import */ var _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tel-input/tel-input.component */ 2823);
/* harmony import */ var _report_models_start_report_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../report-models/start-report.model */ 3056);
/* harmony import */ var _report_models_end_report_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../report-models/end-report.model */ 3304);
/* harmony import */ var _report_models_cancel_report_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../report-models/cancel-report.model */ 9646);







class Trip {
  constructor() {
    /* General Trip Data */
    this.gear = new _gear_models_gear_model__WEBPACK_IMPORTED_MODULE_0__.Gear('', '');
    this.vessel = new _user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_1__.VesselData('', '');
    this.licenseArea = new _license_area_model__WEBPACK_IMPORTED_MODULE_2__.LicenseArea('', '');
    this.master = '';
    this.fin = '';
    this.contactName = ''; // contact name
    this.phoneNum = new _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_3__.Tel('', '', ''); // contact phone number
    this.tripID = '123456'; // hardcoded for now, will eventually generate unique ones
    /* Flags for programmatical use */
    this.offloadNeeded = false; // used to determine if the current trip may require an offload report
    this.isSaved = false; // used to determine whether the report has been saved to the user's prevTrips array
    /* Fishing Report Data */
    this.startFishingReport = new _report_models_start_report_model__WEBPACK_IMPORTED_MODULE_4__.StartReport();
    this.endFishingReport = new _report_models_end_report_model__WEBPACK_IMPORTED_MODULE_5__.EndReport();
    this.cancelFishingReport = new _report_models_cancel_report_model__WEBPACK_IMPORTED_MODULE_6__.CancelReport();
    this.pauseFishingReports = []; // array of all pause reports submitted for the trip
    this.dailyCatchReports = []; // array of all daily catch reports submitted for the trip
    this.offloadReports = []; // array of all offload reports submitted for the trip
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserData": () => (/* binding */ UserData)
/* harmony export */ });
/* harmony import */ var _trip_models_trip_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trip-models/trip.model */ 5636);
/* harmony import */ var _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tel-input/tel-input.component */ 2823);


class UserData {
  constructor(id, email) {
    // Auth0 ID
    this.userID = '';
    // Email for signup
    this.userEmail = '';
    this.firstName = '';
    this.lastName = '';
    this.contactEmail = '';
    this.address = '';
    this.city = '';
    this.postalCode = '';
    this.phoneNum = new _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_1__.Tel('', '', '');
    // current homepage
    this.currHomepage = '';
    // saved user trips
    this.prevTrips = [];
    // saved user vessels
    this.vessels = [];
    // current trip 
    this.currTrip = new _trip_models_trip_model__WEBPACK_IMPORTED_MODULE_0__.Trip();
    // saved nets
    this.nets = [];
    // purchased gear logbooks
    this.gears = [];
    this.userID = id;
    this.userEmail = email;
  }
  toString() {
    return this.userEmail + ', ' + this.userID;
  }
  isValid() {
    return !!this.userID && !!this.userEmail;
  }
}

/***/ }),

/***/ 504:
/*!**************************************************************!*\
  !*** ./src/app/data-models/user-models/vessel-data.model.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VesselData": () => (/* binding */ VesselData)
/* harmony export */ });
class VesselData {
  constructor(vname = '', vcoastNum = '', checked = false) {
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
    return !!this.vesselName && !!this.vesselCoastNumber;
  }
}

/***/ }),

/***/ 4654:
/*!************************************************!*\
  !*** ./src/app/data-models/validator.model.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    return !!control.value && control.valid ? null : {
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNetDialogComponent": () => (/* binding */ AddNetDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var src_app_data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data-models/trip-models/gear-models/net.model */ 786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);














function AddNetDialogComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNetDialogComponent_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const net_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", net_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", net_r13, " ");
  }
}
function AddNetDialogComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNetDialogComponent_div_22_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNetDialogComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Number of Strands ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 8)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Number of Strands ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AddNetDialogComponent_div_22_Template_input_input_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.forbidNonNumeric("numStrands"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AddNetDialogComponent_div_22_mat_error_7_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.netForm.invalid);
  }
}
function AddNetDialogComponent_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNetDialogComponent_mat_error_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNetDialogComponent_mat_option_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", unit_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", unit_r17, " ");
  }
}
function AddNetDialogComponent_mat_error_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNetDialogComponent_mat_error_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNetDialogComponent_mat_error_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNetDialogComponent_mat_option_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", unit_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", unit_r18, " ");
  }
}
function AddNetDialogComponent_mat_error_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNetDialogComponent_mat_error_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class AddNetDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    //data preambles
    this.netTypes = []; // holds net type values
    this.unitTypes = ['cm', 'in', 'mm']; //hardcoded values to be used in the form
    this.dialogReturn = new src_app_data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_1__.Net('', '', '', '', '', '', '', '', '');
    this.netForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
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
    this.netTypes = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getNetTypes(); // retrieve net types
  }

  netTypeVal() {
    return this.netForm.get('netType')?.value;
  }
  ngOnInit() {
    this.onNetTypeChange();
  }
  onNetTypeChange() {
    this.netForm.get('netType')?.valueChanges.subscribe(value => {
      const strandControl = this.netForm.get('numStrands');
      if (value === 'Alaska Twist') {
        strandControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
      } else {
        strandControl?.clearValidators();
      }
      strandControl?.updateValueAndValidity();
    });
  }
  addNet() {
    if (this.netForm.valid) {
      this.clearInputs();
      this.dialogRef.close(this.netForm.value); // return the filled-in values of the form field
    } else {
      this.netForm.markAllAsTouched();
    }
  }
  deleteNet() {
    this.dialogRef.close('delete');
  }
  // reset any dead form inputs
  clearInputs() {
    if (this.netTypeVal() != 'Alaska Twist') {
      // if other gear type, clear any possible input in numStrands
      this.netForm.controls['numStrands'].reset();
    }
  }
  // forbid field from entering non-decimal values
  forbidNonNumeric(controlName) {
    let control = this.netForm.get(controlName);
    control.setValue(control.value.replace(/[^0-9]/g, ''));
  }
}
AddNetDialogComponent.ɵfac = function AddNetDialogComponent_Factory(t) {
  return new (t || AddNetDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
};
AddNetDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AddNetDialogComponent,
  selectors: [["app-add-net-dialog"]],
  decls: 91,
  vars: 14,
  consts: [[1, "container", 2, "display", "flex", "flex-direction", "column", "justify-content", "space-between", "height", "90%"], ["align", "center", 1, "display-6", 2, "padding-top", "10px", "color", "#005d87", "font-weight", "bold"], [3, "formGroup"], [1, "row", 2, "padding-top", "15px"], [1, "net-small-header"], ["appearance", "fill"], ["matInput", "", "formControlName", "netName", "required", ""], [4, "ngIf"], ["appearance", "fill", 1, "form-field"], ["formControlName", "netType"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row"], ["class", "container", 4, "ngIf"], ["matInput", "", "inputmode", "numeric", "formControlName", "netLength", 3, "input"], [1, "col"], ["matInput", "", "inputmode", "numeric", "formControlName", "netDepth", 3, "input"], ["formControlName", "netUnits"], ["matInput", "", "inputmode", "numeric", "formControlName", "hangRatio", 3, "input"], ["matInput", "", "inputmode", "numeric", "formControlName", "meshSize", 3, "input"], ["formControlName", "meshUnits"], ["matInput", "", "inputmode", "numeric", "formControlName", "numMeshes", 3, "input"], [1, "outer"], [1, "inner", 2, "margin-right", "40%"], ["mat-stroked-button", "", "type", "button", "aria-label", "Back", 2, "background-color", "#005d87", "color", "white", "font-weight", "bold", 3, "click"], [1, "inner"], ["mat-stroked-button", "", "type", "submit", "aria-label", "Add Net", 2, "background-color", "#ff6f61", "color", "white", "font-weight", "bold", 3, "click"], [3, "value"], [1, "container"], ["matInput", "", "inputmode", "numeric", "formControlName", "numStrands", 3, "input"]],
  template: function AddNetDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add Net");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2)(4, "div", 3)(5, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Net Name (for your reference only) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 5)(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Net Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AddNetDialogComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3)(13, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Net Type ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 8)(16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Select ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AddNetDialogComponent_mat_option_19_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AddNetDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, AddNetDialogComponent_div_22_Template, 8, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 3)(24, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Length (in fathoms) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-form-field", 8)(27, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Length ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AddNetDialogComponent_Template_input_input_29_listener() {
        return ctx.forbidNonNumeric("netLength");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, AddNetDialogComponent_mat_error_30_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 3)(32, "div", 14)(33, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Weedline Depth ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-form-field", 8)(36, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Depth ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AddNetDialogComponent_Template_input_input_38_listener() {
        return ctx.forbidNonNumeric("netDepth");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, AddNetDialogComponent_mat_error_39_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 14)(41, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Weedline Depth Units ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-form-field", 8)(44, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Select ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, AddNetDialogComponent_mat_option_47_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, AddNetDialogComponent_mat_error_48_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 3)(50, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Hang Ratio ( :1) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-form-field", 8)(53, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Hang Ratio ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AddNetDialogComponent_Template_input_input_55_listener() {
        return ctx.forbidNonNumeric("hangRatio");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, AddNetDialogComponent_mat_error_56_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 3)(58, "div", 14)(59, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " Mesh Size ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "mat-form-field", 8)(62, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " Mesh Size ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AddNetDialogComponent_Template_input_input_64_listener() {
        return ctx.forbidNonNumeric("meshSize");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, AddNetDialogComponent_mat_error_65_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 14)(67, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " Mesh Size Units ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "mat-form-field", 8)(70, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " Select ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "mat-select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](73, AddNetDialogComponent_mat_option_73_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, AddNetDialogComponent_mat_error_74_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 3)(76, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Number of Meshes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "mat-form-field", 8)(79, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Number of Meshes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AddNetDialogComponent_Template_input_input_81_listener() {
        return ctx.forbidNonNumeric("numMeshes");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, AddNetDialogComponent_mat_error_82_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 11)(84, "div", 21)(85, "div", 22)(86, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddNetDialogComponent_Template_button_click_86_listener() {
        return ctx.deleteNet();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 24)(89, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddNetDialogComponent_Template_button_click_89_listener() {
        return ctx.addNet();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.netForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.netForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.netTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.netForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.netTypeVal() === "Alaska Twist");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.netForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.netForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.unitTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.netForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.netForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.netForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.unitTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.netForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.netForm.invalid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: [".net-small-header[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n  }\r\n\r\n\r\n.outer[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  text-align: center;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.inner[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9hZGQtbmV0LWRpYWxvZy9hZGQtbmV0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQjtJQUNJLGNBQWM7RUFDaEI7O0FBRUYsbUJBQW1CO0FBQ25CO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZWFkZXIgZm9yIHRleHQgZW50cnkgKi9cclxuLm5ldC1zbWFsbC1oZWFkZXIge1xyXG4gICAgY29sb3I6ICMwMDVkODc7XHJcbiAgfVxyXG5cclxuLyogQm90dG9tIEJ1dHRvbnMgKi9cclxuLm91dGVyIHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uaW5uZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8600:
/*!****************************************************************************!*\
  !*** ./src/app/dialogs/add-species-dialog/add-species-dialog.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSpeciesDialogComponent": () => (/* binding */ AddSpeciesDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _data_models_validator_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/validator.model */ 4654);
/* harmony import */ var src_app_data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data-models/catch-table-models/table-rules.model */ 9356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);













function AddSpeciesDialogComponent_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fSpecies_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", fSpecies_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", fSpecies_r6, " ");
  }
}
function AddSpeciesDialogComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Select an item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddSpeciesDialogComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Kept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 5)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Kept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AddSpeciesDialogComponent_div_15_div_1_Template_input_input_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.forbidNonNumeric("kept"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function AddSpeciesDialogComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddSpeciesDialogComponent_div_15_div_1_Template, 7, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3)(3, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Released ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 5)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Released ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AddSpeciesDialogComponent_div_15_Template_input_input_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.forbidNonNumeric("released"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.isReleaseOnly(ctx_r3.getCurrentFormSpecies()));
  }
}
function AddSpeciesDialogComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 5)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AddSpeciesDialogComponent_div_16_div_1_Template_input_input_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.forbidNonNumeric("offloadWeight"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function AddSpeciesDialogComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddSpeciesDialogComponent_div_16_div_1_Template, 7, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3)(3, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Pieces ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 5)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Pieces ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AddSpeciesDialogComponent_div_16_Template_input_input_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.forbidNonNumeric("offloadPieces"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.tableInfo.gearName === "Seine");
  }
}
function AddSpeciesDialogComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " This species is non-retainable. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class AddSpeciesDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
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
    // extracting data from data inject
    this.identifier = '';
    this.currentFishList = [];
    this.filteredFishList = [];
    this.tableInfo = new src_app_data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_1__.TableRules('', '');
    // species details
    this.speciesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      speciesName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, (0,_data_models_validator_model__WEBPACK_IMPORTED_MODULE_0__.speciesValidator)(this.stringList)]),
      kept: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      released: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      offloadWeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      offloadPieces: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
    });
  }
  ngOnInit() {
    // if editing a species, autofill form with species details
    if (this.data != null) {
      this.identifier = this.data.identifier;
      this.currentFishList = this.data.currentFishList;
      this.filteredFishList = this.data.filteredFishList;
      this.tableInfo = this.data.tableInfo;
      if (this.data.species != null) {
        let speciesData = this.data.species;
        this.speciesForm.patchValue({
          speciesName: speciesData.speciesName,
          kept: speciesData.kept,
          released: speciesData.released,
          offloadWeight: speciesData.offloadWeight,
          offloadPieces: speciesData.offloadPieces
        });
      }
    }
    // fill the species list available to the user
    this.fillSpecies();
    // set the dialog configuration
    this.setDialogConfig();
    // change the filtered species list whenever the input field changes
    this.speciesForm.get('speciesName').valueChanges.subscribe(speciesChange => {
      this.filteredSpecies = [];
      for (let species of this.speciesList) {
        if (species.toLowerCase().includes(speciesChange.toLowerCase())) {
          this.filteredSpecies.push(species);
        }
      }
    });
  }
  // set the title of the dialog and read/write permissions of inputs
  setDialogConfig() {
    // set config based on whether the species is being added or edited
    switch (this.identifier) {
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
    for (let species of this.currentFishList) {
      // get all species names that are already in the table
      this.currentSpeciesList.push(species.speciesName);
    }
    for (let species of this.filteredFishList) {
      //only add the name to the list if it is not already in the table 
      if (!this.currentSpeciesList.includes(species.speciesName)) {
        this.speciesList.push(species.speciesName);
      }
      this.stringList.push(species.speciesName); // fill the string list regardless
    }
    // fill the filtered list
    this.filteredSpecies = this.speciesList;
  }
  // check if entered species is a valid species
  checkSpecies(name) {
    for (let species of this.filteredFishList) {
      if (species.speciesName.toLowerCase().includes(name.toLowerCase())) {
        this.speciesForm.patchValue({
          speciesName: species.speciesName
        });
        return true;
      }
    }
    return false;
  }
  isReleaseOnly(name) {
    if (this.tableInfo.releaseOnlySpecies.includes(name)) {
      return true;
    }
    return false;
  }
  getCurrentFormSpecies() {
    return this.speciesForm.get('speciesName')?.value;
  }
  // add new species details
  addSpecies() {
    if (this.speciesForm.valid && this.checkSpecies(this.speciesForm.get('speciesName').value)) {
      this.clearInputs();
      this.dialogRef.close(this.speciesForm.value);
    } else {
      this.speciesForm.markAllAsTouched();
    }
  }
  // clear any possible dead form inputs
  clearInputs() {
    if (this.isReleaseOnly(this.getCurrentFormSpecies())) {
      // if species is release-only, clear any possible previous 'kept' input
      this.speciesForm.controls['kept'].reset(); // reset form value
    }
  }
  // delete current species details
  deleteSpecies() {
    this.dialogRef.close('delete');
  }
  // forbid field from entering non-decimal values
  forbidNonNumeric(controlName) {
    let control = this.speciesForm.get(controlName);
    control.setValue(control.value.replace(/[^0-9]/g, ''));
  }
}
AddSpeciesDialogComponent.ɵfac = function AddSpeciesDialogComponent_Factory(t) {
  return new (t || AddSpeciesDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
};
AddSpeciesDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AddSpeciesDialogComponent,
  selectors: [["app-add-species-dialog"]],
  decls: 26,
  vars: 9,
  consts: [[1, "container", "species-container"], ["align", "center", 1, "display-6", "species-header"], [3, "formGroup"], [1, "row"], [1, "species-small-header"], ["appearance", "fill"], ["matInput", "", "required", "", "formControlName", "speciesName", 3, "matAutocomplete", "readonly"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "outer"], [1, "inner", 2, "margin-right", "40%"], ["mat-stroked-button", "", "type", "button", "aria-label", "Delete", 1, "button-delete", 3, "click"], [1, "inner"], ["mat-stroked-button", "", "type", "submit", "align", "end", "aria-label", "Add Species", 1, "button-add", 3, "click"], [3, "value"], ["matInput", "", "inputmode", "numeric", "formControlName", "released", 3, "input"], ["matInput", "", "inputmode", "numeric", "formControlName", "kept", 3, "input"], ["matInput", "", "inputmode", "numeric", "formControlName", "offloadPieces", 3, "input"], ["matInput", "", "inputmode", "numeric", "formControlName", "offloadWeight", 3, "input"]],
  template: function AddSpeciesDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2)(4, "div", 3)(5, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Species Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 5)(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Species ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-autocomplete", null, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AddSpeciesDialogComponent_mat_option_13_Template, 2, 2, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AddSpeciesDialogComponent_mat_error_14_Template, 2, 0, "mat-error", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AddSpeciesDialogComponent_div_15_Template, 9, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AddSpeciesDialogComponent_div_16_Template, 9, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AddSpeciesDialogComponent_div_17_Template, 3, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 3)(19, "div", 11)(20, "div", 12)(21, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddSpeciesDialogComponent_Template_button_click_21_listener() {
        return ctx.deleteSpecies();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Delete ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddSpeciesDialogComponent_Template_button_click_24_listener() {
        return ctx.addSpecies();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Confirm ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.displayedTitle, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.speciesForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matAutocomplete", _r0)("readonly", ctx.speciesIsReadOnly);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredSpecies);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.speciesForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tableInfo.tableType === "daily-catch");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tableInfo.tableType === "offload-catch");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isReleaseOnly(ctx.getCurrentFormSpecies()));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocompleteTrigger, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: [".species-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: 90%\r\n}\r\n\r\n\r\n.species-header[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n  color: #005d87;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.species-small-header[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n}\r\n\r\n\r\n.button-delete[_ngcontent-%COMP%] {\r\n  background-color: #005d87;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.button-add[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n\r\n.outer[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  text-align: center;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.inner[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9hZGQtc3BlY2llcy1kaWFsb2cvYWRkLXNwZWNpZXMtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUI7QUFDRjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBLGVBQWU7QUFDZjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIEV4dHJhIGNvbnRhaW5lciBzdHlsaXphdGlvbiAqL1xyXG4uc3BlY2llcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiA5MCVcclxufVxyXG5cclxuLyogXCJBZGQvRWRpdCBTcGVjaWVzXCIgKi9cclxuLnNwZWNpZXMtaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBjb2xvcjogIzAwNWQ4NztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogSGVhZGVyIGZvciB0ZXh0IGVudHJ5ICovXHJcbi5zcGVjaWVzLXNtYWxsLWhlYWRlciB7XHJcbiAgY29sb3I6ICMwMDVkODc7XHJcbn1cclxuXHJcbi8qIEJhY2sgYnV0dG9uICovXHJcbi5idXR0b24tZGVsZXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZDg3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogQWRkIGJ1dHRvbiAqL1xyXG4uYnV0dG9uLWFkZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmY2MTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIEJvdHRvbSBCdXR0b25zICovXHJcblxyXG4ub3V0ZXIge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5pbm5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9026:
/*!**************************************************************************!*\
  !*** ./src/app/dialogs/add-vessel-dialog/add-vessel-dialog.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddVesselDialogComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Invalid character ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddVesselDialogComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Invalid - 6 digit numeric or 7-8 digit alphanumeric required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AddVesselDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.dialogReturn = new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_0__.VesselData('', '');
    this.vesselForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
      vesselName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[A-z0-9 ]+$')]),
      vesselNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^([0-9]{6}|[A-z0-9]{7,8})$')])
    });
  }
  ngOnInit() {
    if (this.data) {
      this.vesselForm.patchValue({
        vesselName: this.data.vesselName,
        vesselNumber: this.data.vesselCoastNumber
      });
    }
  }
  addVessel() {
    if (this.vesselForm.valid) {
      this.dialogRef.close(this.vesselForm.value);
    } else {
      this.vesselForm.markAllAsTouched();
    }
  }
  deleteVessel() {
    this.dialogRef.close('delete');
  }
}
AddVesselDialogComponent.ɵfac = function AddVesselDialogComponent_Factory(t) {
  return new (t || AddVesselDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
};
AddVesselDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AddVesselDialogComponent,
  selectors: [["app-add-vessel-dialog"]],
  decls: 29,
  vars: 4,
  consts: [[1, "container", 2, "display", "flex", "flex-direction", "column", "justify-content", "space-between", "height", "90%"], ["align", "center", 1, "display-6", 2, "padding-top", "10px", "color", "#005d87", "font-weight", "bold"], [3, "formGroup"], [1, "row"], [1, "vessel-small-header"], ["appearance", "fill"], ["matInput", "", "required", "", "formControlName", "vesselName"], [4, "ngIf"], [1, "row", 2, "padding-top", "15px"], ["matInput", "", "required", "", "formControlName", "vesselNumber"], [1, "row", "bottom-buttons"], [1, "outer"], [1, "inner", 2, "margin-right", "50%"], ["mat-stroked-button", "", "type", "button", "aria-label", "Back", 2, "background-color", "#005d87", "color", "white", "font-weight", "bold", 3, "click"], [1, "inner"], ["mat-stroked-button", "", "type", "submit", "aria-label", "Add Vessel", "align", "end", 2, "background-color", "#ff6f61", "color", "white", "font-weight", "bold", 3, "click"]],
  template: function AddVesselDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Add Vessel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2)(4, "div", 3)(5, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Vessel Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 5)(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Vessel Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AddVesselDialogComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddVesselDialogComponent_mat_error_12_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8)(14, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " VRN (CFV#) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 5)(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " VRN ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddVesselDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddVesselDialogComponent_Template_button_click_24_listener() {
        return ctx.deleteVessel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14)(27, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddVesselDialogComponent_Template_button_click_27_listener() {
        return ctx.addVessel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.vesselForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.vesselForm.get("vesselName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.vesselForm.get("vesselName")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.pattern);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.vesselForm.invalid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: [".vessel-small-header[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n}\r\n\r\n\r\n.outer[_ngcontent-%COMP%] {\r\n  width:100%;\r\n  text-align: center;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.inner[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n.bottom-buttons[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9hZGQtdmVzc2VsLWRpYWxvZy9hZGQtdmVzc2VsLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQjtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVhZGVyIGZvciB0ZXh0IGVudHJ5ICovXHJcbi52ZXNzZWwtc21hbGwtaGVhZGVyIHtcclxuICBjb2xvcjogIzAwNWQ4NztcclxufVxyXG5cclxuLyogQm90dG9tIEJ1dHRvbnMgKi9cclxuLm91dGVyIHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uaW5uZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmJvdHRvbS1idXR0b25zIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4873:
/*!******************************************************************************!*\
  !*** ./src/app/dialogs/contact-info-dialog/contact-info-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactInfoDialogComponent": () => (/* binding */ ContactInfoDialogComponent)
/* harmony export */ });
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tel-input/tel-input.component */ 2823);
/* harmony import */ var _data_models_validator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-models/validator.model */ 4654);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 5074);



















const _c0 = ["telInput"];
function ContactInfoDialogComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactInfoDialogComponent_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactInfoDialogComponent_mat_error_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class ContactInfoDialogComponent {
  constructor(dialogRef, auth, toastr, onlineStatusService, authenticationService) {
    this.dialogRef = dialogRef;
    this.auth = auth;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    // get the current user details
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    // show error message when field is invalid
    this.emailError = 'Required';
    this.postalError = 'Required';
    // regular expression for Canadian postal code validation
    // from https://stackoverflow.com/questions/15774555/efficient-regex-for-canadian-postal-code-function
    this.postalRegex = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({
      contactEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      city: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      postalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.postalRegex)]),
      phoneNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(new _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_1__.Tel('', '', ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, (0,_data_models_validator_model__WEBPACK_IMPORTED_MODULE_2__.generalValidator)()])
    });
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_7__.OnlineStatusType.OFFLINE) {
      let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.getCurrUsername();
      if (currUsername) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.getUserOffline(currUsername).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.error;
          if (error) {
            this.authenticationService.userDataLogout(error);
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.authenticationService.userDataLogout("User ID or Email not defined");
          } else {
            this.userDetails = currUser;
            this.initialize();
          }
        });
      } else {
        this.authenticationService.userDataLogout("Username not saved to storage");
      }
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.error;
                  if (error) {
                    this.authenticationService.userDataLogout(error);
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.authenticationService.userDataLogout("User ID or Email is undefined");
                  } else {
                    this.userDetails = currUser;
                    this.initialize();
                  }
                });
              } else {
                this.authenticationService.userDataLogout("User ID or email is undefined");
              }
            } else {
              this.authenticationService.userDataLogout("Cannot get user data");
            }
          });
        } else {
          this.authenticationService.userDataLogout("Not authenticated");
        }
      });
    }
  }
  ngOnInit() {
    let contactEmail = this.profileForm.get('contactEmail');
    let postalCode = this.profileForm.get('postalCode');
    // contact email validation
    contactEmail?.valueChanges.subscribe(() => {
      let contactEmailErrors = contactEmail?.errors;
      if (contactEmailErrors?.required) {
        this.emailError = 'Required';
      } else if (contactEmailErrors?.email) {
        this.emailError = 'Invalid format';
      } else {
        this.emailError = '';
      }
    });
    // postal code validation
    postalCode?.valueChanges.subscribe(() => {
      let postalCodeErrors = postalCode?.errors;
      if (postalCodeErrors?.required) {
        this.postalError = 'Required';
      } else if (postalCodeErrors?.pattern) {
        this.postalError = 'Invalid format';
      } else {
        this.postalError = '';
      }
    });
  }
  initialize() {
    this.profileForm.patchValue({
      contactEmail: this.userDetails.contactEmail,
      address: this.userDetails.address,
      city: this.userDetails.city,
      postalCode: this.userDetails.postalCode,
      phoneNum: this.userDetails.phoneNum
    });
  }
  phoneNumValid() {
    let phoneNum = this.profileForm.get('phoneNum')?.value;
    let area = phoneNum.area;
    let exchange = phoneNum.exchange;
    let subscriber = phoneNum.subscriber;
    return !!area && !!exchange && !!subscriber;
  }
  updateContactInfo(update) {
    if (update) {
      this.attemptUpdate();
    } else {
      this.dialogRef.close('false');
    }
  }
  attemptUpdate() {
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_7__.OnlineStatusType.OFFLINE) {
      this.toastr.error("Cannot update while offline", "Profile update failed");
      return;
    }
    // verify phone number
    this.telInput.touched = true;
    this.telInput.stateChanges.next();
    this.profileForm.get('phoneNum')?.updateValueAndValidity();
    // check profile field entry validity
    if (this.profileForm.valid && this.phoneNumValid()) {
      // navigate to the home screen
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.getUserOnline(id, email).then(() => {
                  this.userDetails.contactEmail = this.profileForm.get('contactEmail')?.value;
                  this.userDetails.address = this.profileForm.get('address')?.value;
                  this.userDetails.city = this.profileForm.get('city')?.value;
                  this.userDetails.postalCode = this.profileForm.get('postalCode')?.value;
                  this.userDetails.phoneNum = this.profileForm.get('phoneNum')?.value;
                  _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.saveUser(this.userDetails).then(() => {
                    console.log("User data saved to PouchDB");
                    this.dialogRef.close('true');
                  });
                });
              } else {
                this.toastr.error("Please authenticate again", "ID or Email not defined");
                this.authenticationService.logout();
              }
            } else {
              this.toastr.error("Please authenticate again", "Cannot get user data");
              this.authenticationService.logout();
            }
          });
        } else {
          this.toastr.error("Please authenticate again", "Not authenticated");
          this.authenticationService.logout();
        }
      });
    } else {
      this.toastr.error("Missing information", "Profile update failed");
    }
  }
}
ContactInfoDialogComponent.ɵfac = function ContactInfoDialogComponent_Factory(t) {
  return new (t || ContactInfoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_7__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService));
};
ContactInfoDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ContactInfoDialogComponent,
  selectors: [["app-contact-info-dialog"]],
  viewQuery: function ContactInfoDialogComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.telInput = _t.first);
    }
  },
  decls: 58,
  vars: 6,
  consts: [[1, "container", "dialog-container"], ["align", "center", 1, "display-6", 2, "padding-top", "10px", "color", "#005d87", "font-weight", "bold"], [3, "formGroup"], [1, "row"], [1, "blue-heading"], ["appearance", "fill"], ["matInput", "", "required", "", "formControlName", "contactEmail"], ["matInput", "", "required", "", "formControlName", "address"], [4, "ngIf"], ["matInput", "", "required", "", "formControlName", "city"], ["matInput", "", "required", "", "formControlName", "postalCode"], ["telField", ""], ["formControlName", "phoneNum"], ["telInput", ""], ["matSuffix", ""], [1, "row", "bottom-buttons"], [1, "outer"], [1, "inner", 2, "margin-right", "40%"], ["mat-stroked-button", "", "type", "submit", 2, "background-color", "#005d87", "color", "white", "font-weight", "bold", 3, "click"], [1, "inner"], ["mat-stroked-button", "", "type", "submit", "align", "end", 2, "background-color", "#ff6f61", "color", "white", "font-weight", "bold", 3, "click"]],
  template: function ContactInfoDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Edit Contact Information ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "form", 2)(4, "div", 3)(5, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Contact Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 5)(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Contact Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 3)(14, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Address ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-form-field", 5)(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Address ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ContactInfoDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 3)(22, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " City ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-form-field", 5)(25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " City ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ContactInfoDialogComponent_mat_error_28_Template, 2, 0, "mat-error", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 3)(30, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Postal Code ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-form-field", 5)(33, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Postal Code ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 3)(39, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " Phone Number ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-form-field", 5, 11)(43, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " Phone Number ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "app-tel-input", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, " phone ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, ContactInfoDialogComponent_mat_error_49_Template, 2, 0, "mat-error", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 15)(51, "div", 16)(52, "div", 17)(53, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactInfoDialogComponent_Template_button_click_53_listener() {
        return ctx.updateContactInfo(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 19)(56, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContactInfoDialogComponent_Template_button_click_56_listener() {
        return ctx.updateContactInfo(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, " Update ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.profileForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.emailError, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.profileForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.profileForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.postalError, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.profileForm.invalid || !ctx.phoneNumValid());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_1__.TelInputComponent],
  styles: [".dialog-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: 90%;\r\n}\r\n\r\n\r\n.blue-heading[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n}\r\n\r\n\r\n.bottom-buttons[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n.outer[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    text-align: center;\r\n    margin-bottom: 15px;\r\n}\r\n  \r\n.inner[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9jb250YWN0LWluZm8tZGlhbG9nL2NvbnRhY3QtaW5mby1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7QUFDdkM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUEsK0JBQStCO0FBQy9CO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUEsNENBQTRDO0FBQzVDO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIE90aGVyIGRpYWxvZyBjb250YWluZXIgc3R5bGl6YXRpb24gKi9cclxuLmRpYWxvZy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi8qIEJsdWUgdGV4dCBmb3IgZW50cnkgZmllbGRzICovXHJcbi5ibHVlLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICMwMDVkODc7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLyogQnV0dG9ucyBhdCB0aGUgYm90dG9tIG9mIHRoZSBkaWFsb2cgYm94ICovXHJcbi5ib3R0b20tYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi8qIEJvdHRvbSBCdXR0b25zICovXHJcbi5vdXRlciB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4gIFxyXG4uaW5uZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6184:
/*!********************************************************************************!*\
  !*** ./src/app/dialogs/offload-table-dialog/offload-table-dialog.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffloadTableDialogComponent": () => (/* binding */ OffloadTableDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data-models/catch-table-models/species-data.model */ 439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7371);












function OffloadTableDialogComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const answer_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", answer_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", answer_r5, " ");
  }
}
function OffloadTableDialogComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function OffloadTableDialogComponent_div_13_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const answer_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", answer_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", answer_r10, " ");
  }
}
function OffloadTableDialogComponent_div_13_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function OffloadTableDialogComponent_div_13_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19)(1, "mat-form-field", 5)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Enter a Date Range ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-date-range-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 21)(6, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-hint", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " MM/DD/YYYY \u2013 MM/DD/YYYY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-datepicker-toggle", 24)(10, "mat-date-range-picker", null, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rangePicker", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r11);
  }
}
function OffloadTableDialogComponent_div_13_div_10_mat_option_7_div_3_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const species_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", species_r16.speciesName, ": ", species_r16.kept, ", ");
  }
}
function OffloadTableDialogComponent_div_13_div_10_mat_option_7_div_3_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const species_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", species_r16.speciesName, ": ", species_r16.kept, " ");
  }
}
function OffloadTableDialogComponent_div_13_div_10_mat_option_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OffloadTableDialogComponent_div_13_div_10_mat_option_7_div_3_small_1_Template, 2, 2, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OffloadTableDialogComponent_div_13_div_10_mat_option_7_div_3_small_2_Template, 2, 2, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const species_r16 = ctx.$implicit;
    const y_r17 = ctx.index;
    const report_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", species_r16.kept > 0 && y_r17 < report_r13.speciesDataList.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", species_r16.kept > 0 && y_r17 === report_r13.speciesDataList.length - 1);
  }
}
function OffloadTableDialogComponent_div_13_div_10_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OffloadTableDialogComponent_div_13_div_10_mat_option_7_div_3_Template, 3, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const report_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", report_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 3, ctx_r12.getDate(report_r13.dateFished), "dd/MM/yyyy"), " ( ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", report_r13.speciesDataList);
  }
}
function OffloadTableDialogComponent_div_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19)(1, "mat-form-field", 26)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Select Reports ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 27)(5, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OffloadTableDialogComponent_div_13_div_10_mat_option_7_Template, 5, 6, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r9.catchReportList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Total Reports Selected: ", ctx_r9.catchReportList.value == null ? null : ctx_r9.catchReportList.value.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.catchReportData.reverse());
  }
}
const _c0 = function () {
  return ["Select by date", "Select from list"];
};
function OffloadTableDialogComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " How would you like to choose your daily catch reports? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 5)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OffloadTableDialogComponent_div_13_mat_option_7_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OffloadTableDialogComponent_div_13_mat_error_8_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OffloadTableDialogComponent_div_13_div_9_Template, 12, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OffloadTableDialogComponent_div_13_div_10_Template, 8, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.offloadForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.dateSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.listSelection);
  }
}
function OffloadTableDialogComponent_mat_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const answer_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", answer_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", answer_r23, " ");
  }
}
function OffloadTableDialogComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c1 = function () {
  return ["All catch reports from this trip", "Specific catch reports from this trip"];
};
const _c2 = function () {
  return ["Yes", "No"];
};
class OffloadTableDialogComponent {
  constructor(dialogRef, datePipe, data) {
    this.dialogRef = dialogRef;
    this.datePipe = datePipe;
    this.data = data;
    // programming flags
    this.selectReports = false; // flag that tells us whether the user wants to select from specific catch reports
    this.dateSelection = false; // flag that tells us whether the user wants to select by date
    this.listSelection = false; // flag that tells us whether the user wants to select by a list
    this.includePieces = false; // flag that tells us wether the  user wants to include pieces 
    // form control for catch report list selector
    this.catchReportList = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl([]);
    // data from offload report
    this.catchReportData = [];
    this.tableData = [];
    // general form controls
    this.offloadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
      dataType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
      piecesIncluded: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
      selectionType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
      endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null)
    });
    this.catchReportData = this.data.catchReports;
    this.tableData = this.data.tableData;
    this.offloadForm.patchValue({
      piecesIncluded: 'Yes'
    });
  }
  ngOnInit() {
    this.onDataTypeChange();
    this.onSelectionTypeChange();
  }
  // listens for a change in question 1 answer and updates programming flags and conditional validation of the next question
  onDataTypeChange() {
    this.offloadForm.get('dataType')?.valueChanges.subscribe(value => {
      const selectionTypeControl = this.offloadForm.get('selectionType');
      if (value === 'Specific catch reports from this trip') {
        this.selectReports = true;
        selectionTypeControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]); // enable validation for selection type question
      } else if (value === 'All catch reports from this trip') {
        // if they want to include all catch reports
        this.selectReports = false;
        selectionTypeControl?.clearValidators(); // disable validation for selection type question
      }

      selectionTypeControl?.updateValueAndValidity();
    });
  }
  // listens for a change in question 2 answer and updates programming flags
  onSelectionTypeChange() {
    this.offloadForm.get('selectionType')?.valueChanges.subscribe(value => {
      if (value === 'Select by date') {
        this.dateSelection = true;
        this.listSelection = false; // reset other flag
      } else if (value === 'Select from list') {
        //if they want to select from a list
        this.listSelection = true;
        this.dateSelection = false; // reset other flag
      }
    });
  }

  getDate(date) {
    return new Date(date);
  }
  // determines if the date fished for the current catch report is within the user-selected date range
  evaluateDateInfo(catchReport) {
    let startDate = new Date(this.offloadForm.get('startDate')?.value);
    let endDate = new Date(this.offloadForm.get('endDate')?.value);
    let dateFished = this.clearTime(new Date(catchReport.dateFished));
    return dateFished.getTime() >= startDate.getTime() && dateFished.getTime() <= endDate.getTime();
  }
  // determines if the current catch report is present in the user-selected list of catch reports
  evaluateSelectedInfo(catchReport) {
    let catchReports = this.catchReportList.value;
    for (let report of catchReports) {
      // POSSIBLY CHANGE TO COMPARE CONFIRMATION NUMBERS IN THE FUTURE
      let date1 = new Date(report.submissionDate);
      let date2 = new Date(catchReport.submissionDate);
      if (date1.getTime() === date2.getTime()) {
        return true;
      }
    }
    return false;
  }
  // adds a species to the table data source if the appropriate conditions are met
  addSpeciesToData(catchReport, speciesNamesList, pieces) {
    for (let species of catchReport.speciesDataList) {
      // loop through each species list
      // only include if the species is not already in our list and it was kept 
      if (species.kept > 0) {
        if (!speciesNamesList.includes(species.speciesName)) {
          // if we do not already have the species in our list
          let tempSpecies = new src_app_data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_0__.SpeciesData(species.speciesName); // create new species object 
          tempSpecies.kept = 0;
          tempSpecies.released = 0;
          tempSpecies.offloadWeight = 0;
          if (pieces) {
            tempSpecies.offloadPieces = species.kept; // update the number of kept pieces
          }

          this.tableData.push(tempSpecies); // add species to the table
          speciesNamesList.push(species.speciesName); // keep track of the species name in our list
          // if we already have the species in our table data source list but need to update the pieces
        } else if (pieces) {
          for (let currSpecies of this.tableData) {
            if (currSpecies.speciesName === species.speciesName) {
              currSpecies.offloadPieces += species.kept; // update the number of kept pieces
            }
          }
        }
      }
    }
  }
  // retrieves table data based on the how the user has filled out the table population form
  getTableData(select, date, list, pieces) {
    // loop through each daily catch report in currTrip, and add all species data to the table source
    let speciesNamesList = []; // temp storage for species names (used for comparison)
    for (let catchReport of this.catchReportData) {
      // loop through each catch report
      let isIncluded = true;
      if (select) {
        if (date) {
          isIncluded = this.evaluateDateInfo(catchReport);
        } else if (list) {
          // they will have selected from the list
          isIncluded = this.evaluateSelectedInfo(catchReport);
        }
      }
      if (isIncluded) {
        this.addSpeciesToData(catchReport, speciesNamesList, pieces);
      }
    }
  }
  // removes any time data from a Date object (used for date comparisons)
  clearTime(currDate) {
    currDate.setHours(0);
    currDate.setMinutes(0);
    currDate.setSeconds(0);
    currDate.setMilliseconds(0);
    return currDate;
  }
  // invoked if the user selects the "Back" button
  closeDialog() {
    this.dialogRef.close();
  }
  // invoked if the user selects the "Apply" button
  populateTable() {
    this.tableData.length = 0; // clear any previous table data
    if (this.offloadForm.get('piecesIncluded')?.value === 'Yes') {
      this.includePieces = true;
    }
    if (this.offloadForm.valid) {
      this.getTableData(this.selectReports, this.dateSelection, this.listSelection, this.includePieces); // fill table data source
      this.dialogRef.close(this.tableData); // pass new table data source back to the offload-report
    } else {
      this.offloadForm.markAllAsTouched();
    }
  }
}
OffloadTableDialogComponent.ɵfac = function OffloadTableDialogComponent_Factory(t) {
  return new (t || OffloadTableDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
};
OffloadTableDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: OffloadTableDialogComponent,
  selectors: [["app-offload-table-dialog"]],
  decls: 34,
  vars: 8,
  consts: [[1, "container", 2, "display", "flex", "flex-direction", "column", "height", "90%"], ["align", "center", 1, "display-6", 2, "padding-top", "10px", "color", "#005d87", "font-weight", "bold"], [3, "formGroup"], [1, "row"], [1, "question-text"], ["appearance", "fill"], ["formControlName", "dataType"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "row", 4, "ngIf"], ["formControlName", "piecesIncluded"], [1, "outer"], [1, "inner", 2, "margin-right", "40%"], ["mat-stroked-button", "", "type", "button", 2, "background-color", "#005d87", "color", "white", "font-weight", "bold", 3, "click"], [1, "inner"], ["mat-stroked-button", "", "type", "submit", 2, "background-color", "#ff6f61", "color", "white", "font-weight", "bold", 3, "click"], [3, "value"], ["formControlName", "selectionType"], ["class", "row", "align", "center", 4, "ngIf"], ["align", "center", 1, "row"], [3, "rangePicker"], ["matStartDate", "", "formControlName", "startDate", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "endDate", "placeholder", "End date"], [1, "small-text"], ["matIconSuffix", "", 3, "for"], ["picker", ""], ["appearance", "fill", 1, "form-field"], ["multiple", "", 3, "formControl"], ["style", "font-size:15px;", 3, "value", 4, "ngFor", "ngForOf"], [2, "font-size", "15px", 3, "value"], ["style", "display: inline", 4, "ngFor", "ngForOf"], [2, "display", "inline"], ["style", "font-size:12px;", 4, "ngIf"], [2, "font-size", "12px"]],
  template: function OffloadTableDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Table Population Options ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2)(4, "div", 3)(5, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " What catch do you want to include? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 5)(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Select ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, OffloadTableDialogComponent_mat_option_11_Template, 2, 2, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, OffloadTableDialogComponent_mat_error_12_Template, 2, 0, "mat-error", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, OffloadTableDialogComponent_div_13_Template, 11, 5, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3)(15, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Would you like to include total pieces? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " If you select no, \"pieces\" will remain at 0. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 5)(21, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Select ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, OffloadTableDialogComponent_mat_option_24_Template, 2, 2, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, OffloadTableDialogComponent_mat_error_25_Template, 2, 0, "mat-error", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 3)(27, "div", 11)(28, "div", 12)(29, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OffloadTableDialogComponent_Template_button_click_29_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14)(32, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OffloadTableDialogComponent_Template_button_click_32_listener() {
        return ctx.populateTable();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Apply ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.offloadForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.offloadForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectReports);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.offloadForm.invalid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDateRangePicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: [".question-text[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    padding-top: 15px;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    padding-top: 5px;\r\n}\r\n\r\n.small-text[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n   .mat-calendar-body-selected {\r\n    background-color: #3ebfb9;\r\n}\r\n\r\n\r\n.outer[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    text-align: center;\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n.inner[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9vZmZsb2FkLXRhYmxlLWRpYWxvZy9vZmZsb2FkLXRhYmxlLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0FBRUY7RUFDRSxxQkFBcUI7QUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlc3Rpb24tdGV4dCB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5zbWFsbC10ZXh0IHtcclxuICAgIGNvbG9yOiAjMDA1ZDg3O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4vKiBDYWxlbmRhciBTdHlsaW5nICovXHJcbjo6bmctZGVlcCAgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZWJmYjk7XHJcbn1cclxuXHJcbi8qIEJvdHRvbSBCdXR0b25zICovXHJcbi5vdXRlciB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcblxyXG4uaW5uZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7984:
/*!*********************************************************************!*\
  !*** ./src/app/home/active-trip-home/active-trip-home.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveTripHomeComponent": () => (/* binding */ ActiveTripHomeComponent)
/* harmony export */ });
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var src_app_data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-models/trip-models/trip.model */ 5636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../menu/menu.component */ 1105);













function ActiveTripHomeComponent_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ActiveTripHomeComponent_button_51_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.toEndReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " End ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ActiveTripHomeComponent_button_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ActiveTripHomeComponent_button_52_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.toCancelReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ActiveTripHomeComponent_button_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ActiveTripHomeComponent_button_56_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.toOffloadReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Offload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class ActiveTripHomeComponent {
  constructor(
  // same constructor as original homepage
  auth, router, toastr, onlineStatusService, authenticationService) {
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    //data preambles
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
    this.currTrip = new src_app_data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_2__.Trip();
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_6__.OnlineStatusType.OFFLINE) {
      let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getCurrUsername();
      if (currUsername) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOffline(currUsername).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
          if (error) {
            this.authenticationService.userDataLogout(error);
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.authenticationService.userDataLogout("User ID or Email not defined");
          } else {
            this.userDetails = currUser;
            this.initialize();
          }
        });
      } else {
        this.authenticationService.userDataLogout("Username not saved to storage");
      }
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
                  if (error) {
                    this.authenticationService.userDataLogout(error);
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.authenticationService.userDataLogout("User ID or Email is undefined");
                  } else {
                    this.userDetails = currUser;
                    this.initialize();
                  }
                });
              } else {
                this.authenticationService.userDataLogout("User ID or email is undefined");
              }
            } else {
              this.authenticationService.userDataLogout("Cannot get user data");
            }
          });
        } else {
          this.authenticationService.userDataLogout("Not authenticated");
        }
      });
    }
  }
  initialize() {
    // get current fishing report information
    this.currTrip = this.userDetails.currTrip;
  }
  getGearName() {
    return this.currTrip.gear.name;
  }
  getDate(date) {
    return new Date(date);
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
      default:
        this.toastr.error("Something went wrong", "Error");
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
ActiveTripHomeComponent.ɵfac = function ActiveTripHomeComponent_Factory(t) {
  return new (t || ActiveTripHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_6__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService));
};
ActiveTripHomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ActiveTripHomeComponent,
  selectors: [["app-active-trip-home"]],
  decls: 57,
  vars: 9,
  consts: [[1, "container", "active-trip-home-container"], [1, "row"], ["align", "left", 1, "col"], [1, "blue-trip-heading"], [2, "color", "#003F61"], ["align", "right", 1, "col"], ["align", "left", 1, "row"], [1, "descriptive-text"], [2, "display", "inline", "font-weight", "500", "color", "#005d87"], [1, "button-row"], ["mat-raised-button", "", "align", "center", "type", "button", 1, "red-button", 3, "click"], [1, "blue-subheading"], [1, "report-buttons"], [1, "row", "justify-content-center"], [1, "col-3"], ["mat-raised-button", "", "type", "button", 1, "blue-button", 3, "click"], [1, "col-1"], ["mat-raised-button", "", "class", "blue-button", "type", "button", 3, "click", 4, "ngIf"]],
  template: function ActiveTripHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " My Trip ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " #1234 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6)(10, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Start Date: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 6)(15, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Gear Type: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 6)(20, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Vessel Master: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 6)(25, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Vessel: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 6)(30, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " License Area: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 9)(35, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ActiveTripHomeComponent_Template_button_click_35_listener() {
        return ctx.toCatchReport(ctx.currTrip.gear.name);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, " Record Catch ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 6)(39, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " Submit an Activity Report ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 12)(42, "div", 13)(43, "div", 14)(44, "div", 1)(45, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ActiveTripHomeComponent_Template_button_click_45_listener() {
        return ctx.toPauseReport();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " Pause ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 14)(50, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, ActiveTripHomeComponent_button_51_Template, 3, 0, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, ActiveTripHomeComponent_button_52_Template, 3, 0, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 14)(55, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, ActiveTripHomeComponent_button_56_Template, 3, 0, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.getDate(ctx.currTrip.startFishingReport.startDate), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.currTrip.gear, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx.currTrip.master, " (FIN: ", ctx.currTrip.fin, ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.currTrip.vessel, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.currTrip.licenseArea, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currTrip.dailyCatchReports.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.currTrip.dailyCatchReports.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currTrip.offloadNeeded && ctx.currTrip.dailyCatchReports.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__.MenuComponent],
  styles: [".active-trip-home-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  padding-top: 20px;\r\n}\r\n\r\n.blue-trip-heading[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n}\r\n\r\n.blue-subheading[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    font-weight: bold;\r\n    margin-top: 20px;\r\n}\r\n\r\n.descriptive-text[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    margin-top: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.red-button[_ngcontent-%COMP%] {\r\n    background-color: #ff6f61 !important;\r\n    color: white !important;\r\n    font-weight: bold;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    font-size: 20px;\r\n    padding: 30px 30px;\r\n}\r\n\r\n.button-row[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.blue-button[_ngcontent-%COMP%] {\r\n    background-color: #005d87 !important;\r\n    color: white !important;\r\n    font-weight: bold;\r\n    padding: 25px 25px;\r\n}\r\n\r\n.descriptive-text[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%] {\r\n    font-weight: normal;\r\n}\r\n\r\n.report-buttons[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9hY3RpdmUtdHJpcC1ob21lL2FjdGl2ZS10cmlwLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7QUFDNUM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLyogT3RoZXIgYWN0aXZlIHRyaXAgY29udGFpbmVyIHN0eWxpemF0aW9uICovXHJcbi5hY3RpdmUtdHJpcC1ob21lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmJsdWUtdHJpcC1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjMDAzRjYxO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbi5ibHVlLXN1YmhlYWRpbmcge1xyXG4gICAgY29sb3I6ICMwMDNGNjE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGl2ZS10ZXh0IHtcclxuICAgIGNvbG9yOiAjMDAzRjYxO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucmVkLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2ZjYxICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tcm93IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJsdWUtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVkODcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDI1cHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGl2ZS10ZXh0IC5wIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5yZXBvcnQtYnV0dG9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9259:
/*!*************************************************************!*\
  !*** ./src/app/home/no-trip-home/no-trip-home.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoTripHomeComponent": () => (/* binding */ NoTripHomeComponent)
/* harmony export */ });
/* harmony import */ var src_app_data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data-models/trip-models/trip.model */ 5636);
/* harmony import */ var src_app_data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data-models/user-models/user-data.model */ 426);
/* harmony import */ var src_app_data_models_report_models_daily_catch_report_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-models/report-models/daily-catch-report.model */ 388);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../menu/menu.component */ 1105);













class NoTripHomeComponent {
  constructor(
  // same constructor as original homepage
  auth, router, toastr, onlineStatusService, authenticationService) {
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    //data preambles
    this.userDetails = new src_app_data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
    this.currTrip = new src_app_data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_0__.Trip();
    this.prevTrips = [];
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_6__.OnlineStatusType.OFFLINE) {
      let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.getCurrUsername();
      if (currUsername) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.getUserOffline(currUsername).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.error;
          if (error) {
            this.authenticationService.userDataLogout(error);
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.authenticationService.userDataLogout("User ID or Email not defined");
          } else {
            this.userDetails = currUser;
            this.initialize();
          }
        });
      } else {
        this.authenticationService.userDataLogout("Username not saved to storage");
      }
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.error;
                  if (error) {
                    this.authenticationService.userDataLogout(error);
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.authenticationService.userDataLogout("User ID or Email undefined in database");
                  } else {
                    this.userDetails = currUser;
                    this.initialize();
                  }
                });
              } else {
                this.authenticationService.userDataLogout("User ID or email is undefined");
              }
            } else {
              this.authenticationService.userDataLogout("Cannot get user data");
            }
          });
        } else {
          this.authenticationService.userDataLogout("Not authenticated");
        }
      });
    }
  }
  saveDailyCatchReports(tempTrip) {
    for (let report of this.currTrip.dailyCatchReports) {
      let tempReport = new src_app_data_models_report_models_daily_catch_report_model__WEBPACK_IMPORTED_MODULE_2__.DailyCatchReport();
      tempReport = report;
      tempTrip.dailyCatchReports.push(tempReport);
    }
  }
  saveOldReport() {
    if (this.currTrip.isValid() && !this.currTrip.isSaved && this.currTrip.startFishingReport.isComplete) {
      // check if there is a trip to save
      console.log("Saving a new trip...");
      let tempTrip = new src_app_data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_0__.Trip();
      this.currTrip.isSaved = true;
      tempTrip.isSaved = this.currTrip.isSaved;
      tempTrip.gear = this.currTrip.gear;
      tempTrip.vessel = this.currTrip.vessel;
      tempTrip.licenseArea = this.currTrip.licenseArea;
      tempTrip.master = this.currTrip.master;
      tempTrip.fin = this.currTrip.fin;
      tempTrip.contactName = this.currTrip.contactName;
      tempTrip.phoneNum = this.currTrip.phoneNum;
      tempTrip.offloadNeeded = this.currTrip.offloadNeeded;
      tempTrip.startFishingReport = this.currTrip.startFishingReport;
      tempTrip.endFishingReport = this.currTrip.endFishingReport;
      tempTrip.cancelFishingReport = this.currTrip.cancelFishingReport;
      tempTrip.pauseFishingReports = this.currTrip.pauseFishingReports;
      this.saveDailyCatchReports(tempTrip);
      tempTrip.offloadReports = this.currTrip.offloadReports;
      this.prevTrips = this.userDetails.prevTrips;
      this.prevTrips.push(tempTrip);
      this.userDetails.currTrip = this.currTrip;
      this.userDetails.prevTrips = this.prevTrips;
      _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.saveUser(this.userDetails).then(() => {
        console.log("Trip saved!");
      });
    }
  }
  initialize() {
    // get current fishing report information
    this.currTrip = this.userDetails.currTrip;
    this.saveOldReport();
  }
  // go to start a fishing report
  toStartReport() {
    this.router.navigate(['start-report']);
  }
}
NoTripHomeComponent.ɵfac = function NoTripHomeComponent_Factory(t) {
  return new (t || NoTripHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_6__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService));
};
NoTripHomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: NoTripHomeComponent,
  selectors: [["app-no-trip-home"]],
  decls: 17,
  vars: 0,
  consts: [[1, "container", "no-trip-home-container"], [1, "row"], ["align", "left", 1, "col"], [1, "blue-trip-heading"], ["align", "right", 1, "col"], [1, "blue-subheading"], ["align", "left", 1, "row"], [1, "descriptive-text"], [1, "button-row"], ["mat-raised-button", "", "align", "center", "type", "button", 1, "red-button", 3, "click"]],
  template: function NoTripHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " My Trip ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 1)(8, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " You have no active trip. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 6)(11, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Select the button below to complete a Start Fishing Report and activate a new trip. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 8)(14, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NoTripHomeComponent_Template_button_click_14_listener() {
        return ctx.toStartReport();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Start Trip ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent],
  styles: [".no-trip-home-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  padding-top: 20px;\r\n}\r\n\r\n.blue-trip-heading[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n}\r\n\r\n.blue-subheading[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    font-weight: 600;\r\n    margin-top: 20px;\r\n}\r\n\r\n.descriptive-text[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 15px;\r\n}\r\n\r\n.red-button[_ngcontent-%COMP%] {\r\n    background-color: #ff6f61 !important;\r\n    color: white !important;\r\n    font-weight: bold;\r\n    margin-top: 15px;\r\n    font-size: 20px;\r\n    padding: 30px 28px;\r\n}\r\n\r\n.button-row[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9uby10cmlwLWhvbWUvbm8tdHJpcC1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBPdGhlciBubyB0cmlwIGhvbWUgY29udGFpbmVyIHN0eWxpemF0aW9uICovXHJcbi5uby10cmlwLWhvbWUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYmx1ZS10cmlwLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICMwMDNGNjE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLmJsdWUtc3ViaGVhZGluZyB7XHJcbiAgICBjb2xvcjogIzAwM0Y2MTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpdmUtdGV4dCB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5yZWQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZmNjEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMzBweCAyOHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4777:
/*!*************************************************************!*\
  !*** ./src/app/home/offload-home/offload-home.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffloadHomeComponent": () => (/* binding */ OffloadHomeComponent)
/* harmony export */ });
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../menu/menu.component */ 1105);












function OffloadHomeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "div", 3)(3, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " My Trip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 2)(8, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Do you need to submit an offload report? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7)(11, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Offload Reports completed for this trip: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7)(16, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " This is your final chance to complete an offload report before starting a new trip. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 9)(19, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OffloadHomeComponent_div_1_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.toOffloadReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Offload Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 9)(23, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OffloadHomeComponent_div_1_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.setNewTripFlag());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Start Another Trip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.userDetails.currTrip.offloadReports.length, " ");
  }
}
function OffloadHomeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 11)(2, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Are you sure you want to start a new trip? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 11)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " If you select yes, you will not be able to complete an offload report for this trip at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "any");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " point in the future. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 14)(13, "div", 2)(14, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OffloadHomeComponent_div_2_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.clearNewTripFlag());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 14)(19, "div", 2)(20, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OffloadHomeComponent_div_2_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.toNoTripHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class OffloadHomeComponent {
  constructor(auth, router, toastr, onlineStatusService, authenticationService) {
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    // data preambles
    this.requestToStartNewTrip = false; // flag that tells us if we should display the confirmation page
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_5__.OnlineStatusType.OFFLINE) {
      let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.getCurrUsername();
      if (currUsername) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.getUserOffline(currUsername).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.error;
          if (error) {
            this.authenticationService.userDataLogout(error);
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.authenticationService.userDataLogout("User ID or Email not defined");
          } else {
            this.userDetails = currUser;
          }
        });
      } else {
        this.authenticationService.userDataLogout("Username not saved to storage");
      }
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.error;
                  if (error) {
                    this.authenticationService.userDataLogout(error);
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.authenticationService.userDataLogout("User ID or Email is undefined");
                  } else {
                    this.userDetails = currUser;
                  }
                });
              } else {
                this.authenticationService.userDataLogout("User ID or email is undefined");
              }
            } else {
              this.authenticationService.userDataLogout("Cannot get user data");
            }
          });
        } else {
          this.authenticationService.userDataLogout("Not authenticated");
        }
      });
    }
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
    this.userDetails.currHomepage = 'no-trip-home';
    _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.saveUser(this.userDetails).then(() => {
      console.log("User data saved to PouchDB");
      this.router.navigate([this.userDetails.currHomepage]);
    });
  }
}
OffloadHomeComponent.ɵfac = function OffloadHomeComponent_Factory(t) {
  return new (t || OffloadHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_5__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService));
};
OffloadHomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: OffloadHomeComponent,
  selectors: [["app-offload-home"]],
  decls: 3,
  vars: 2,
  consts: [[1, "container", "offload-home-container"], [4, "ngIf"], [1, "row"], ["align", "left", 1, "col"], [1, "blue-trip-heading"], ["align", "right", 1, "col"], [1, "blue-subheading"], ["align", "left", 1, "row"], [1, "descriptive-text"], [1, "button-row"], ["mat-raised-button", "", "align", "center", "type", "button", 1, "red-button", 3, "click"], ["align", "center", 1, "row"], [1, "blue-heading-title"], [1, "col-1"], [1, "col-4"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-blue", 3, "click"], [1, "col-2"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"]],
  template: function OffloadHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OffloadHomeComponent_div_1_Template, 26, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, OffloadHomeComponent_div_2_Template, 24, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.requestToStartNewTrip);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.requestToStartNewTrip);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent],
  styles: [".offload-home-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  padding-top: 20px;\r\n}\r\n\r\n.blue-trip-heading[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n}\r\n\r\n.blue-subheading[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    font-weight: 600;\r\n    margin-top: 20px;\r\n}\r\n\r\n.button-row[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.descriptive-text[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 15px;\r\n}\r\n\r\n.red-button[_ngcontent-%COMP%] {\r\n    background-color: #ff6f61 !important;\r\n    color: white !important;\r\n    font-weight: bold;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    font-size: 20px;\r\n    padding: 30px 28px;\r\n}\r\n\r\n\r\n.button-row[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\np[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-bottom: 10%;\r\n  }\r\n\r\n\r\n.fishing-button-red[_ngcontent-%COMP%] {\r\n    background-color: #ff6f61 !important;\r\n    color: white !important;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.fishing-button-blue[_ngcontent-%COMP%] {\r\n  background-color: #005d87 !important;\r\n  color: white !important;\r\n  font-weight: bold;\r\n}\r\n\r\n.blue-heading-title[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    font-weight: bold;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9vZmZsb2FkLWhvbWUvb2ZmbG9hZC1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDO0FBQzVDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBLGtEQUFrRDtBQUNsRDtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSx5QkFBeUI7O0FBRXpCO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7QUFFRixnQkFBZ0I7QUFDaEI7SUFDSSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtFQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIE90aGVyIGFjdGl2ZSB0cmlwIGNvbnRhaW5lciBzdHlsaXphdGlvbiAqL1xyXG4ub2ZmbG9hZC1ob21lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmJsdWUtdHJpcC1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjMDAzRjYxO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbi5ibHVlLXN1YmhlYWRpbmcge1xyXG4gICAgY29sb3I6ICMwMDNGNjE7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpdmUtdGV4dCB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5yZWQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZmNjEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDMwcHggMjhweDtcclxufVxyXG5cclxuLyogT2ZmbG9hZCBSZXBvcnQgYW5kIFN0YXJ0IEFub3RoZXIgVHJpcCBidXR0b25zICovXHJcbi5idXR0b24tcm93IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogRm9yIGNvbmZpbWF0aW9uIHBhZ2UgKi9cclxuXHJcbnAge1xyXG4gICAgY29sb3I6ICMwMDVkODc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgfVxyXG5cclxuLyogUmVkIGJ1dHRvbnMgKi9cclxuLmZpc2hpbmctYnV0dG9uLXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2ZjYxICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBCbHVlIGJ1dHRvbnMgKi9cclxuLmZpc2hpbmctYnV0dG9uLWJsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkODcgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJsdWUtaGVhZGluZy10aXRsZSB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 898:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__.MatSliderModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.A11yModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__.ClipboardModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_35__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__.MatTreeModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__.ScrollingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__.MatSliderModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule],
    exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.A11yModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__.ClipboardModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_35__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__.MatTreeModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__.ScrollingModule]
  });
})();

/***/ }),

/***/ 5418:
/*!*********************************************************!*\
  !*** ./src/app/menu-items/profile/profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-models/user-models/vessel-data.model */ 504);
/* harmony import */ var _dialogs_add_vessel_dialog_add_vessel_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogs/add-vessel-dialog/add-vessel-dialog.component */ 9026);
/* harmony import */ var _data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-models/trip-models/gear-models/net.model */ 786);
/* harmony import */ var _dialogs_add_net_dialog_add_net_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialogs/add-net-dialog/add-net-dialog.component */ 1878);
/* harmony import */ var src_app_dialogs_contact_info_dialog_contact_info_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialogs/contact-info-dialog/contact-info-dialog.component */ 4873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../menu/menu.component */ 1105);


















function ProfileComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " No available logbooks. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_ul_27_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const logbook_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", logbook_r7, " ");
  }
}
function ProfileComponent_ul_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_ul_27_li_1_Template, 2, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.logbooks);
  }
}
function ProfileComponent_span_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " No available vessels. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_ul_66_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vessel_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", vessel_r9.vesselName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" (VRN: ", vessel_r9.vesselCoastNumber, ") ");
  }
}
function ProfileComponent_ul_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_ul_66_li_1_Template, 5, 2, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r3.vessels);
  }
}
function ProfileComponent_div_72_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " No available nets. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_72_mat_expansion_panel_6_h6_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h6", 23)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Number of Strands: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const net_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", net_r12.numStrands, " ");
  }
}
function ProfileComponent_div_72_mat_expansion_panel_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title")(3, "span", 8)(4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "h6", 23)(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Length (in fathoms): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "h6", 23)(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Weedline Depth: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "h6", 23)(17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Hang Ratio ( :1): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "h6", 23)(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Mesh Size: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "h6", 23)(25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Number of Meshes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, ProfileComponent_div_72_mat_expansion_panel_6_h6_28_Template, 4, 1, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const net_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", net_r12.netName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" (", net_r12.netType, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", net_r12.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", net_r12.weedlineDepth, " ", net_r12.weedlineDepthUnits, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", net_r12.hangRatio, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", net_r12.meshSize, " ", net_r12.meshSizeUnits, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", net_r12.numMeshes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", net_r12.netType === "Alaska Twist");
  }
}
function ProfileComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " My Nets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ProfileComponent_div_72_span_5_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ProfileComponent_div_72_mat_expansion_panel_6_Template, 29, 10, "mat-expansion-panel", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 22)(8, "div", 13)(9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_div_72_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.addNetDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " Add Net ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r4.nets.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.nets);
  }
}
function ProfileComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 25);
  }
}
class ProfileComponent {
  constructor(dialog, auth, toastr, onlineStatusService, authenticationService) {
    this.dialog = dialog;
    this.auth = auth;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    // get the current user details
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
    // read-only fields
    this.firstName = '';
    this.lastName = '';
    this.username = '';
    this.logbooks = [];
    // vessel and net data
    this.vessels = [];
    this.containsGillNet = false;
    this.nets = [];
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_10__.OnlineStatusType.OFFLINE) {
      let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getCurrUsername();
      if (currUsername) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOffline(currUsername).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
          if (error) {
            this.authenticationService.userDataLogout(error);
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.authenticationService.userDataLogout("User ID or Email not defined");
          } else {
            this.userDetails = currUser;
            this.initialize();
          }
        });
      } else {
        this.authenticationService.userDataLogout("Username not saved to storage");
      }
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
                  if (error) {
                    this.authenticationService.userDataLogout(error);
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.authenticationService.userDataLogout("User ID or Email is undefined");
                  } else {
                    this.userDetails = currUser;
                    this.initialize();
                  }
                });
              } else {
                this.authenticationService.userDataLogout("User ID or email is undefined");
              }
            } else {
              this.authenticationService.userDataLogout("Cannot get user data");
            }
          });
        } else {
          this.authenticationService.userDataLogout("Not authenticated");
        }
      });
    }
  }
  // set page values
  initialize() {
    this.firstName = this.userDetails.firstName;
    this.lastName = this.userDetails.lastName;
    this.username = this.userDetails.userEmail;
    this.logbooks = this.userDetails.gears;
    this.vessels = this.userDetails.vessels;
    for (let logbook of this.logbooks) {
      if (logbook.name === 'Gill Net') {
        this.containsGillNet = true;
        this.nets = this.userDetails.nets;
        break;
      }
    }
  }
  // edit contact info
  contactInfoDialog() {
    const dialogRef = this.dialog.open(src_app_dialogs_contact_info_dialog_contact_info_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ContactInfoDialogComponent, {
      width: '500px',
      height: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // update selected vessel as new vessel added then go to next screen
        if (result !== 'false') {
          if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_10__.OnlineStatusType.OFFLINE) {
            let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getCurrUsername();
            if (currUsername) {
              _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOffline(currUsername).then(() => {
                let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
                if (error) {
                  this.authenticationService.userDataLogout(error);
                }
                let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
                if (!currUser || !currUser.userID || !currUser.userEmail) {
                  this.authenticationService.userDataLogout("User ID or Email not defined");
                } else {
                  this.userDetails = currUser;
                  this.toastr.success("Profile Updated!", "Success");
                }
              });
            } else {
              this.authenticationService.userDataLogout("Username not saved to storage");
            }
          } else {
            this.auth.isAuthenticated$.subscribe(authd => {
              if (authd) {
                this.auth.user$.subscribe(user => {
                  if (user) {
                    let id = user.sub;
                    let email = user.email;
                    if (id && email) {
                      _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOnline(id, email).then(() => {
                        let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
                        if (error) {
                          this.authenticationService.userDataLogout(error);
                        }
                        let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
                        if (!currUser || !currUser.userID || !currUser.userEmail) {
                          this.authenticationService.userDataLogout("User ID or Email is undefined");
                        } else {
                          this.userDetails = currUser;
                          this.toastr.success("Profile Updated!", "Success");
                        }
                      });
                    } else {
                      this.authenticationService.userDataLogout("User ID or email is undefined");
                    }
                  } else {
                    this.authenticationService.userDataLogout("Cannot get user data");
                  }
                });
              } else {
                this.authenticationService.userDataLogout("Not authenticated");
              }
            });
          }
        }
      }
    });
  }
  // add new vessel to user profile
  addVesselDialog() {
    const dialogRef = this.dialog.open(_dialogs_add_vessel_dialog_add_vessel_dialog_component__WEBPACK_IMPORTED_MODULE_3__.AddVesselDialogComponent, {
      width: '500px',
      height: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // update selected vessel as new vessel added then go to next screen
        if (result !== 'delete') {
          let newVessel = new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_2__.VesselData(result.vesselName, result.vesselNumber, true);
          this.userDetails.vessels.push(newVessel);
          this.vessels = this.userDetails.vessels;
          _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
            this.toastr.success("New vessel added!", "Success");
          });
        }
      }
    });
  }
  // add new net to user profile
  addNetDialog() {
    const dialogRef = this.dialog.open(_dialogs_add_net_dialog_add_net_dialog_component__WEBPACK_IMPORTED_MODULE_5__.AddNetDialogComponent, {
      width: '500px',
      height: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // update selected net as new net added then go to next screen
        if (result !== 'delete') {
          let newNet = new _data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_4__.Net(result.netType, result.netName, result.netLength, result.netDepth, result.netUnits, result.hangRatio, result.meshSize, result.meshUnits, result.numMeshes, result.numStrands, true);
          this.userDetails.nets.push(newNet);
          this.nets = this.userDetails.nets;
          _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
            this.toastr.success("New net added!", "Success");
          });
        }
      }
    });
  }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_12__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_10__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__.AuthenticationService));
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 74,
  vars: 14,
  consts: [[1, "container", "profile-container"], [1, "row"], ["align", "left", 1, "col"], [1, "blue-profile-heading"], ["align", "right", 1, "col"], [1, "row", "justify-content-center"], [1, "descriptive-text", 2, "margin-top", "10px"], [1, "field-data"], [1, "descriptive-text"], [4, "ngIf"], ["class", "logbook-list", 4, "ngIf"], [1, "row", "info-section", 2, "margin-top", "5px"], [1, "blue-profile-subheading", 2, "padding-top", "10px"], [1, "button-row"], ["mat-raised-button", "", "type", "button", 1, "red-button", 3, "click"], [1, "row", "info-section"], ["class", "descriptive-text", 4, "ngIf"], ["class", "descriptive-text", "style", "padding-left: 30px;", 4, "ngIf"], ["class", "row info-section", "style", "margin-bottom: 20px;", 4, "ngIf"], [1, "logbook-list"], [4, "ngFor", "ngForOf"], [1, "descriptive-text", 2, "padding-left", "30px"], [1, "row", 2, "padding-left", "10px"], [1, "field-data", 2, "font-size", "14px"], ["class", "field-data", "style", "font-size: 14px;", 4, "ngIf"], [1, "row", "info-section", 2, "margin-bottom", "20px"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Profile ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 5)(8, "h6", 6)(9, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " First Name: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "h6", 8)(14, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, " Last Name: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "h6", 8)(19, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, " Username: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "h6", 8)(24, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " Available logbooks: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, ProfileComponent_span_26_Template, 2, 0, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, ProfileComponent_ul_27_Template, 2, 1, "ul", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, " Contact Information ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 1)(32, "h6", 8)(33, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, " Email: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "h6", 8)(38, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, " Address: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "h6", 8)(43, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, " City: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "h6", 8)(48, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, " Postal Code: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "h6", 8)(53, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, " Phone Number: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div", 13)(58, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_58_listener() {
        return ctx.contactInfoDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, " Edit Contact Information ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](61, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, " My Vessels ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](65, ProfileComponent_span_65_Template, 2, 0, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](66, ProfileComponent_ul_66_Template, 2, 1, "ul", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "div", 13)(68, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_68_listener() {
        return ctx.addVesselDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, " Add Vessel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](71, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](72, ProfileComponent_div_72_Template, 12, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](73, ProfileComponent_div_73_Template, 1, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.firstName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.lastName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.logbooks.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.logbooks.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.userDetails.contactEmail, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.userDetails.address, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.userDetails.city, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.userDetails.postalCode, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.userDetails.phoneNum, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.vessels.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.vessels.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.containsGillNet);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.containsGillNet);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelTitle, _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__.MenuComponent],
  styles: [".profile-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  padding-top: 20px;\r\n}\r\n\r\n\r\n.blue-profile-heading[_ngcontent-%COMP%] {\r\n  color: #003F61;\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n}\r\n\r\n\r\n.blue-profile-subheading[_ngcontent-%COMP%] {\r\n  color: #003F61;\r\n  font-weight: bold;\r\n  margin-top: 15px;\r\n}\r\n\r\n\r\n.blue-heading[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  margin-top: 5%;\r\n}\r\n\r\n\r\n.blue-label[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  margin-top: 5%;\r\n}\r\n\r\n\r\n.logbook-list[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  padding-left: 30px;\r\n  font-size: 15px;\r\n}\r\n\r\n\r\n.button-update[_ngcontent-%COMP%] {\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.descriptive-text[_ngcontent-%COMP%] {\r\n  color: #003F61;\r\n  margin-top: 10px;\r\n  font-size: 15px;\r\n}\r\n\r\n.field-data[_ngcontent-%COMP%] {\r\n  color: #005d87 !important;\r\n  font-size: 15px;\r\n}\r\n\r\n.red-button[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61 !important;\r\n  color: white !important;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  margin-top: 10px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.button-row[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\n\r\n.info-section[_ngcontent-%COMP%] {\r\n  width: 97%;\r\n  border-bottom-style: solid;\r\n  border-bottom-width: 2px;\r\n  border-bottom-color: rgba(255, 111, 97, .8);\r\n}\r\n\r\n  .mat-expansion-panel {\r\n  box-shadow: none !important;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVudS1pdGVtcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBd0M7QUFDeEM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBLHdDQUF3QztBQUN4QztFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiLyogT3RoZXIgcHJvZmlsZSBjb250YWluZXIgc3R5bGl6YXRpb24gKi9cclxuLnByb2ZpbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4vKiBNeSBQcm9maWxlICovXHJcbi5ibHVlLXByb2ZpbGUtaGVhZGluZyB7XHJcbiAgY29sb3I6ICMwMDNGNjE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4vKiBNeSBWZXNzZWxzIGFuZCBNeSBOZXRzICovXHJcbi5ibHVlLXByb2ZpbGUtc3ViaGVhZGluZyB7XHJcbiAgY29sb3I6ICMwMDNGNjE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLyogQmx1ZSB0ZXh0IGZvciBlbnRyeSBmaWVsZHMgKi9cclxuLmJsdWUtaGVhZGluZyB7XHJcbiAgY29sb3I6ICMwMDVkODc7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi8qIEJsdWUgdGV4dCBmb3IgcmVhZG9ubHkgZmllbGQgbGFiZWxzICovXHJcbi5ibHVlLWxhYmVsIHtcclxuICBjb2xvcjogIzAwNWQ4NztcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLyogTGlzdCBvZiBwdXJjaGFzZWQgbG9nYm9va3MgKi9cclxuLmxvZ2Jvb2stbGlzdCB7XHJcbiAgY29sb3I6ICMwMDVkODc7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLyogVXBkYXRlIHByb2ZpbGUgKi9cclxuLmJ1dHRvbi11cGRhdGUge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aXZlLXRleHQge1xyXG4gIGNvbG9yOiAjMDAzRjYxO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uZmllbGQtZGF0YSB7XHJcbiAgY29sb3I6ICMwMDVkODcgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5yZWQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2ZjYxICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmluZm8tc2VjdGlvbiB7XHJcbiAgd2lkdGg6IDk3JTtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDExMSwgOTcsIC44KTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4694:
/*!*******************************************************************!*\
  !*** ./src/app/menu-items/records-page/records-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordsPageComponent": () => (/* binding */ RecordsPageComponent)
/* harmony export */ });
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var src_app_data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data-models/user-models/user-data.model */ 426);
/* harmony import */ var src_app_data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-models/trip-models/trip.model */ 5636);
/* harmony import */ var src_app_data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data-models/trip-models/gear-models/gear.model */ 9793);
/* harmony import */ var src_app_data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data-models/trip-models/license-area.model */ 634);
/* harmony import */ var src_app_data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data-models/user-models/vessel-data.model */ 504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../menu/menu.component */ 1105);


















function RecordsPageComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " You have no trip records. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function RecordsPageComponent_div_8_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_8_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Not Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_8_mat_expansion_panel_27_mat_expansion_panel_6_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_8_mat_expansion_panel_27_mat_expansion_panel_6_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Not Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_8_mat_expansion_panel_27_mat_expansion_panel_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title", 11)(3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h6", 13)(6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Date Submitted: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "h6", 13)(11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " Confirmation Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "h6", 13)(16, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Transmission Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, RecordsPageComponent_div_8_mat_expansion_panel_27_mat_expansion_panel_6_span_18_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, RecordsPageComponent_div_8_mat_expansion_panel_27_mat_expansion_panel_6_span_19_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pauseReport_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r10.formatDate(pauseReport_r11.pauseDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r10.getDate(pauseReport_r11.submissionDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", pauseReport_r11.confirmationNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pauseReport_r11.isTransmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !pauseReport_r11.isTransmitted);
  }
}
function RecordsPageComponent_div_8_mat_expansion_panel_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Pause Reports \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RecordsPageComponent_div_8_mat_expansion_panel_27_mat_expansion_panel_6_Template, 20, 5, "mat-expansion-panel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" (count: ", ctx_r7.currTrip.pauseFishingReports.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r7.currTrip.pauseFishingReports.reverse());
  }
}
function RecordsPageComponent_div_8_mat_expansion_panel_28_mat_expansion_panel_6_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_8_mat_expansion_panel_28_mat_expansion_panel_6_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Not Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_8_mat_expansion_panel_28_mat_expansion_panel_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title", 11)(3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h6", 13)(6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Date Submitted: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "h6", 13)(11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " Confirmation Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "h6", 13)(16, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Transmission Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, RecordsPageComponent_div_8_mat_expansion_panel_28_mat_expansion_panel_6_span_18_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, RecordsPageComponent_div_8_mat_expansion_panel_28_mat_expansion_panel_6_span_19_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const catchReport_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r14.formatDate(catchReport_r15.dateFished), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r14.getDate(catchReport_r15.submissionDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", catchReport_r15.confirmationNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", catchReport_r15.isTransmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !catchReport_r15.isTransmitted);
  }
}
function RecordsPageComponent_div_8_mat_expansion_panel_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Catch Reports \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RecordsPageComponent_div_8_mat_expansion_panel_28_mat_expansion_panel_6_Template, 20, 5, "mat-expansion-panel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" (count: ", ctx_r8.currTrip.dailyCatchReports.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r8.currTrip.dailyCatchReports.reverse());
  }
}
function RecordsPageComponent_div_8_mat_expansion_panel_29_mat_expansion_panel_6_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_8_mat_expansion_panel_29_mat_expansion_panel_6_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Not Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_8_mat_expansion_panel_29_mat_expansion_panel_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title", 11)(3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h6", 13)(6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Date Submitted: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "h6", 13)(11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " Confirmation Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "h6", 13)(16, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Transmission Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, RecordsPageComponent_div_8_mat_expansion_panel_29_mat_expansion_panel_6_span_18_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, RecordsPageComponent_div_8_mat_expansion_panel_29_mat_expansion_panel_6_span_19_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const offloadReport_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r18.formatDate(offloadReport_r19.offloadDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r18.getDate(offloadReport_r19.submissionDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", offloadReport_r19.confirmationNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", offloadReport_r19.isTransmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !offloadReport_r19.isTransmitted);
  }
}
function RecordsPageComponent_div_8_mat_expansion_panel_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Offload Reports \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RecordsPageComponent_div_8_mat_expansion_panel_29_mat_expansion_panel_6_Template, 20, 5, "mat-expansion-panel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" (count: ", ctx_r9.currTrip.offloadReports.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r9.currTrip.offloadReports.reverse());
  }
}
function RecordsPageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Current Trip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-expansion-panel")(7, "mat-expansion-panel-header")(8, "mat-panel-title", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " Start Report \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "h6", 13)(13, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " Date Submitted: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "h6", 13)(18, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " Confirmation Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "h6", 13)(23, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, " Transmission Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, RecordsPageComponent_div_8_span_25_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, RecordsPageComponent_div_8_span_26_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, RecordsPageComponent_div_8_mat_expansion_panel_27_Template, 7, 2, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, RecordsPageComponent_div_8_mat_expansion_panel_28_Template, 7, 2, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, RecordsPageComponent_div_8_mat_expansion_panel_29_Template, 7, 2, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" #", ctx_r1.currTrip.tripID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDate(ctx_r1.currTrip.startFishingReport.startDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getDate(ctx_r1.currTrip.startFishingReport.submissionDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.currTrip.startFishingReport.confirmationNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.currTrip.startFishingReport.isTransmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.currTrip.startFishingReport.isTransmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.currTrip.pauseFishingReports.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.currTrip.dailyCatchReports.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.currTrip.offloadReports.length > 0);
  }
}
function RecordsPageComponent_div_9_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RecordsPageComponent_div_9_button_23_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);
      const gear_r29 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r30.selectItem($event, gear_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const gear_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("color", gear_r29.isChecked ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", gear_r29.isChecked ? "check_box" : "check_box_outline_blank", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", gear_r29.name, " ");
  }
}
function RecordsPageComponent_div_9_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RecordsPageComponent_div_9_button_26_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34);
      const area_r32 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r33.selectItem($event, area_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const area_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("color", area_r32.isChecked ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", area_r32.isChecked ? "check_box" : "check_box_outline_blank", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", area_r32.licenseName, " (", area_r32.licenseLocation, ") ");
  }
}
function RecordsPageComponent_div_9_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RecordsPageComponent_div_9_button_29_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37);
      const vessel_r35 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r36.selectItem($event, vessel_r35));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vessel_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("color", vessel_r35.isChecked ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", vessel_r35.isChecked ? "check_box" : "check_box_outline_blank", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", vessel_r35.vesselName, " (VRN: ", vessel_r35.vesselCoastNumber, ") ");
  }
}
function RecordsPageComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Past Trips ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4)(5, "button", 19)(6, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " filter_list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " Filter Trips ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-menu", 22, 23)(12, "button", 24)(13, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "button", 24)(16, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 24)(19, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "mat-menu", 22, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, RecordsPageComponent_div_9_button_23_Template, 5, 3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-menu", 22, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, RecordsPageComponent_div_9_button_26_Template, 5, 4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "mat-menu", 22, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, RecordsPageComponent_div_9_button_29_Template, 5, 4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](11);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](22);
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](25);
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](28);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Gears (", ctx_r2.selectedGearCount, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" License Areas (", ctx_r2.selectedLicenseAreaCount, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Vessels (", ctx_r2.selectedVesselCount, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.gears);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.licenseAreas);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.vessels);
  }
}
function RecordsPageComponent_div_10_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RecordsPageComponent_div_10_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r41.clearGearFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Gears: ", ctx_r38.selectedGearCount, " ");
  }
}
function RecordsPageComponent_div_10_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RecordsPageComponent_div_10_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r43.clearAreaFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" License Areas: ", ctx_r39.selectedLicenseAreaCount, " ");
  }
}
function RecordsPageComponent_div_10_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RecordsPageComponent_div_10_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r45.clearVesselFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Vessels: ", ctx_r40.selectedVesselCount, " ");
  }
}
function RecordsPageComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "div", 32)(2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, RecordsPageComponent_div_10_button_3_Template, 4, 1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, RecordsPageComponent_div_10_button_5_Template, 4, 1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, RecordsPageComponent_div_10_button_7_Template, 4, 1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.selectedGearCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.selectedLicenseAreaCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.selectedVesselCount > 0);
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trip_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" - ", ctx_r49.formatDate(trip_r47.endFishingReport.endDate), " ");
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trip_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" - ", ctx_r50.formatDate(trip_r47.startFishingReport.startDate), " ");
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_span_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Not Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_51_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_51_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Not Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " End Report \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h6", 13)(7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Date Submitted: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "h6", 13)(12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Confirmation Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "h6", 13)(17, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Transmission Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_51_span_19_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_51_span_20_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const trip_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r53.formatDate(trip_r47.endFishingReport.endDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r53.getDate(trip_r47.endFishingReport.submissionDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", trip_r47.endFishingReport.confirmationNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", trip_r47.endFishingReport.isTransmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !trip_r47.endFishingReport.isTransmitted);
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_53_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_53_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Not Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Cancel Report \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h6", 13)(7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Date Submitted: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "h6", 13)(12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Confirmation Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "h6", 13)(17, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Transmission Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_53_span_19_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_53_span_20_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const trip_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r54.formatDate(trip_r47.startFishingReport.startDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r54.getDate(trip_r47.cancelFishingReport.submissionDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", trip_r47.cancelFishingReport.confirmationNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", trip_r47.cancelFishingReport.isTransmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !trip_r47.cancelFishingReport.isTransmitted);
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_55_div_6_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_55_div_6_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Not Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_55_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 45)(1, "mat-expansion-panel")(2, "mat-expansion-panel-header")(3, "mat-panel-title", 11)(4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h6", 13)(7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Date Submitted: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "h6", 13)(12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Confirmation Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "h6", 13)(17, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Transmission Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_55_div_6_span_19_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_55_div_6_span_20_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const pauseReport_r67 = ctx.$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r66.formatDate(pauseReport_r67.pauseDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r66.getDate(pauseReport_r67.submissionDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", pauseReport_r67.confirmationNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pauseReport_r67.isTransmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !pauseReport_r67.isTransmitted);
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Pause Reports \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_55_div_6_Template, 21, 5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trip_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" (count: ", trip_r47.pauseFishingReports.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", trip_r47.pauseFishingReports.reverse());
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_57_div_6_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_57_div_6_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Not Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_57_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 45)(1, "mat-expansion-panel")(2, "mat-expansion-panel-header")(3, "mat-panel-title", 11)(4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h6", 13)(7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Date Submitted: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "h6", 13)(12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Confirmation Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "h6", 13)(17, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Transmission Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_57_div_6_span_19_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_57_div_6_span_20_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const catchReport_r72 = ctx.$implicit;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r71.formatDate(catchReport_r72.dateFished), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r71.getDate(catchReport_r72.submissionDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", catchReport_r72.confirmationNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", catchReport_r72.isTransmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !catchReport_r72.isTransmitted);
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Catch Reports \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_57_div_6_Template, 21, 5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trip_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" (count: ", trip_r47.dailyCatchReports.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", trip_r47.dailyCatchReports.reverse());
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_59_div_6_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_59_div_6_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Not Sent To DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_59_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 45)(1, "mat-expansion-panel")(2, "mat-expansion-panel-header")(3, "mat-panel-title", 11)(4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h6", 13)(7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Date Submitted: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "h6", 13)(12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Confirmation Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "h6", 13)(17, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Transmission Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_59_div_6_span_19_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_59_div_6_span_20_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const offloadReport_r77 = ctx.$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r76.formatDate(offloadReport_r77.offloadDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r76.getDate(offloadReport_r77.submissionDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", offloadReport_r77.confirmationNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", offloadReport_r77.isTransmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !offloadReport_r77.isTransmitted);
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Offload Reports \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_59_div_6_Template, 21, 5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trip_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" (count: ", trip_r47.offloadReports.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", trip_r47.offloadReports.reverse());
  }
}
function RecordsPageComponent_div_11_mat_expansion_panel_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-expansion-panel", 37)(1, "mat-expansion-panel-header")(2, "mat-panel-title", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RecordsPageComponent_div_11_mat_expansion_panel_1_span_6_Template, 2, 1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, RecordsPageComponent_div_11_mat_expansion_panel_1_span_7_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 42)(9, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Gear Type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 42)(14, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Vessel Master: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 42)(19, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " Vessel: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 42)(24, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " License Area: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 45)(29, "mat-expansion-panel")(30, "mat-expansion-panel-header")(31, "mat-panel-title", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, " Start Report \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "h6", 13)(36, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, " Date Submitted: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "h6", 13)(41, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, " Confirmation Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "h6", 13)(46, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, " Transmission Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, RecordsPageComponent_div_11_mat_expansion_panel_1_span_48_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, RecordsPageComponent_div_11_mat_expansion_panel_1_span_49_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_51_Template, 21, 5, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_53_Template, 21, 5, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_55_Template, 7, 2, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_57_Template, 7, 2, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, RecordsPageComponent_div_11_mat_expansion_panel_1_mat_expansion_panel_59_Template, 7, 2, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const trip_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Trip #", trip_r47.tripID, "\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r48.formatDate(trip_r47.startFishingReport.startDate), "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", trip_r47.endFishingReport.isComplete && !trip_r47.cancelFishingReport.isComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", trip_r47.cancelFishingReport.isComplete && !trip_r47.endFishingReport.isComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", trip_r47.gear.name, " (Logbook #", trip_r47.gear.logbookID, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", trip_r47.master, " (FIN: ", trip_r47.fin, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", trip_r47.vessel.vesselName, " (VRN: ", trip_r47.vessel.vesselCoastNumber, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", trip_r47.licenseArea.licenseName, " (", trip_r47.licenseArea.licenseLocation, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r48.formatDate(trip_r47.startFishingReport.startDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r48.getDate(trip_r47.startFishingReport.submissionDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", trip_r47.startFishingReport.confirmationNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", trip_r47.startFishingReport.isTransmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !trip_r47.startFishingReport.isTransmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", trip_r47.endFishingReport.isComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", trip_r47.cancelFishingReport.isComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", trip_r47.pauseFishingReports.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", trip_r47.dailyCatchReports.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", trip_r47.offloadReports.length > 0);
  }
}
function RecordsPageComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RecordsPageComponent_div_11_mat_expansion_panel_1_Template, 60, 22, "mat-expansion-panel", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trip_r47 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.determineTripVisibility(trip_r47));
  }
}
class RecordsPageComponent {
  constructor(
  // same constructor as original homepage
  auth, datePipe, toastr, onlineStatusService, authenticationService) {
    this.auth = auth;
    this.datePipe = datePipe;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    //data preambles
    this.userDetails = new src_app_data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
    this.currTrip = new src_app_data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_2__.Trip();
    //filter menu
    this.gears = [];
    this.licenseAreas = [];
    this.vessels = [];
    this.selectedGearCount = 0;
    this.selectedLicenseAreaCount = 0;
    this.selectedVesselCount = 0;
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_9__.OnlineStatusType.OFFLINE) {
      let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getCurrUsername();
      if (currUsername) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOffline(currUsername).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
          if (error) {
            this.authenticationService.userDataLogout(error);
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.authenticationService.userDataLogout("User ID or Email not defined");
          } else {
            this.userDetails = currUser;
            this.initialize();
          }
        });
      } else {
        this.authenticationService.userDataLogout("Username not saved to storage");
      }
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
                  if (error) {
                    this.authenticationService.userDataLogout(error);
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.authenticationService.userDataLogout("User ID or Email is undefined");
                  } else {
                    this.userDetails = currUser;
                    this.initialize();
                  }
                });
              } else {
                this.authenticationService.userDataLogout("User ID or email is undefined");
              }
            } else {
              this.authenticationService.userDataLogout("Cannot get user data");
            }
          });
        } else {
          this.authenticationService.userDataLogout("Not authenticated");
        }
      });
    }
  }
  formatDate(date) {
    let formattedDate = this.datePipe.transform(date, 'shortDate');
    if (formattedDate) {
      return formattedDate;
    }
    this.toastr.error("Could not format date", "Date format error");
    return '';
  }
  initialize() {
    // get current fishing report information
    this.currTrip = this.userDetails.currTrip;
    // get data for filter list
    this.makeGearList(this.userDetails.gears);
    this.makeLicenseAreaList(_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getLicenseAreas());
    this.makeVesselList(this.userDetails.vessels);
  }
  makeVesselList(vesselList) {
    for (let vessel of vesselList) {
      let currVessel = new src_app_data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_5__.VesselData();
      currVessel.vesselName = vessel.vesselName;
      currVessel.vesselCoastNumber = vessel.vesselCoastNumber;
      this.vessels.push(currVessel);
    }
  }
  makeGearList(gearList) {
    for (let gear of gearList) {
      let currGear = new src_app_data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_3__.Gear();
      currGear.name = gear.name;
      currGear.logbookID = gear.logbookID;
      this.gears.push(currGear);
    }
  }
  makeLicenseAreaList(areas) {
    for (let area of areas) {
      let currArea = new src_app_data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_4__.LicenseArea();
      currArea.licenseName = area.licenseName;
      currArea.licenseLocation = area.licenseLocation;
      this.licenseAreas.push(currArea);
    }
  }
  getDate(date) {
    return new Date(date);
  }
  determineButtonStyling() {
    if (this.filtersApplied()) {
      // filter is being used
      return "filter-tool-selected";
    }
    return "filter-tool"; // filter is not being used
  }

  filtersApplied() {
    return this.selectedGearCount > 0 || this.selectedLicenseAreaCount > 0 || this.selectedVesselCount > 0;
  }
  /* Credit to:
  https://stackblitz.com/edit/multi-select-mat-menu?file=src%2Fapp%2Fmenu-multiselect-example.html,src%2Fapp%2Fmenu-multiselect-example.ts
  for selectItem and updateSelectedItems */
  selectItem($event, item) {
    // prevent menu from closing
    $event.stopPropagation();
    $event.preventDefault();
    // toggle selected state on clicked item
    item.isChecked = !item.isChecked;
    this.updateSelectedItems();
  }
  updateSelectedItems() {
    this.selectedGearCount = this.gears.filter(g => g.isChecked).length;
    this.selectedLicenseAreaCount = this.licenseAreas.filter(l => l.isChecked).length;
    this.selectedVesselCount = this.vessels.filter(v => v.isChecked).length;
  }
  determineTripVisibility(trip) {
    let checkedGears = this.gears.filter(g => g.isChecked);
    let checkedAreas = this.licenseAreas.filter(l => l.isChecked);
    let checkedVessels = this.vessels.filter(v => v.isChecked);
    let gearFlag = false;
    let licenseAreaFlag = false;
    let vesselFlag = false;
    if (!checkedGears.length) {
      checkedGears = this.gears;
    }
    if (!checkedAreas.length) {
      checkedAreas = this.licenseAreas;
    }
    if (!checkedVessels.length) {
      checkedVessels = this.vessels;
    }
    for (let gear of checkedGears) {
      if (trip.gear.logbookID === gear.logbookID) {
        gearFlag = true;
        break;
      }
    }
    if (!gearFlag) {
      return false;
    }
    for (let area of checkedAreas) {
      if (trip.licenseArea.licenseName === area.licenseName) {
        licenseAreaFlag = true;
        break;
      }
    }
    if (!licenseAreaFlag) {
      return false;
    }
    for (let vessel of checkedVessels) {
      if (trip.vessel.vesselCoastNumber === vessel.vesselCoastNumber) {
        vesselFlag = true;
        break;
      }
    }
    if (!vesselFlag) {
      return false;
    }
    return true; // match
  }

  clearGearFilter() {
    this.selectedGearCount = 0;
    let checkedGears = this.gears.filter(g => g.isChecked);
    for (let gear of checkedGears) {
      gear.isChecked = false;
    }
  }
  clearAreaFilter() {
    this.selectedLicenseAreaCount = 0;
    let checkedAreas = this.licenseAreas.filter(l => l.isChecked);
    for (let area of checkedAreas) {
      area.isChecked = false;
    }
  }
  clearVesselFilter() {
    this.selectedVesselCount = 0;
    let checkedVessels = this.vessels.filter(v => v.isChecked);
    for (let vessel of checkedVessels) {
      vessel.isChecked = false;
    }
  }
}
RecordsPageComponent.ɵfac = function RecordsPageComponent_Factory(t) {
  return new (t || RecordsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_9__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__.AuthenticationService));
};
RecordsPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: RecordsPageComponent,
  selectors: [["app-records-page"]],
  decls: 13,
  vars: 5,
  consts: [[1, "container", "records-page-container"], [1, "row"], ["align", "left", 1, "col"], [1, "blue-trip-heading"], ["align", "right", 1, "col"], ["class", "row", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "row", 2, "padding-top", "20px"], [1, "blue-subheading"], [2, "display", "inline"], [1, "panel-title"], [1, "panel-date", 2, "font-weight", "500"], [1, "field-label"], [2, "display", "inline", "font-weight", "700"], ["style", "display:inline", 4, "ngIf"], ["style", "display:inline", "class", "not-transmitted", 4, "ngIf"], [1, "not-transmitted", 2, "display", "inline"], [1, "panel-date"], ["mat-button", "", "type", "button", 1, "filter-tool", 3, "matMenuTriggerFor"], [1, "filter-button"], [1, "panel-date", 2, "margin-top", "10px"], [1, "filter-menu"], ["filterMenu", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "filter-menu-item"], ["gearMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["licenseAreaMenu", "matMenu"], ["vesselMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "checkbox-icon", 3, "color"], [1, "outer"], [1, "inner"], ["mat-flat-button", "", "class", "filter-item-button", 3, "click", 4, "ngIf"], ["mat-flat-button", "", 1, "filter-item-button", 3, "click"], ["class", "past-trips", 4, "ngIf"], [1, "past-trips"], [1, "panel-title", 2, "font-size", "18px"], [1, "panel-date", 2, "font-size", "16px", "font-weight", "500"], ["span", "", "style", "display: inline;\n                                  font-size: 16px;\n                                  font-weight: 500;", "class", "panel-date", 4, "ngIf"], ["span", "", "style", "display: inline; \n                                  font-size: 16px;\n                                  font-weight: 500;", "class", "panel-date", 4, "ngIf"], ["align", "center", 1, "trip-info"], [1, "descriptive-text"], [2, "display", "inline", "font-weight", "400", "color", "#005d87"], [1, "sub-trips"], ["span", "", 1, "panel-date", 2, "display", "inline", "font-size", "16px", "font-weight", "500"], ["class", "sub-trips", 4, "ngFor", "ngForOf"]],
  template: function RecordsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Records ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, RecordsPageComponent_div_7_Template, 3, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, RecordsPageComponent_div_8_Template, 30, 9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, RecordsPageComponent_div_9_Template, 30, 10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, RecordsPageComponent_div_10_Template, 8, 3, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, RecordsPageComponent_div_11_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userDetails.currHomepage === "no-trip-home" && ctx.userDetails.prevTrips.length <= 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userDetails.currHomepage !== "no-trip-home");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userDetails.prevTrips.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.filtersApplied());
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.userDetails.prevTrips.reverse());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanelTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__.MenuComponent],
  styles: [".records-page-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  padding-top: 20px;\r\n}\r\n\r\n  .filter-menu {\r\n    font-size: 14px;\r\n}\r\n\r\n.checkbox-icon[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n}\r\n\r\n.filter-menu-item[_ngcontent-%COMP%] {\r\n    color: #005d87 !important;\r\n}\r\n\r\n.blue-trip-heading[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n}\r\n\r\n.blue-subheading[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    font-weight: 600;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.filter-button[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    font-size: 26px !important;\r\n    padding-right: 30px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.filter-item-button[_ngcontent-%COMP%] {\r\n    background-color: rgba(0, 93, 135, 0.3) !important;\r\n    color: #003F61 !important;\r\n    font-size: 12px;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n  .filter-tool {\r\n    margin-top: 15px;\r\n}\r\n\r\n.descriptive-text[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 15px;\r\n    font-weight: 700;\r\n    font-size: 15px;\r\n}\r\n\r\n.outer[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: left;\r\n}\r\n\r\n.inner[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n}\r\n\r\n.button-row[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.panel-title[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    font-weight: 700;\r\n    font-size: 15px;\r\n}\r\n\r\n.panel-date[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    font-size: 14px;\r\n}\r\n\r\n.field-label[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n}\r\n\r\n.not-transmitted[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\r\n\r\n  .past-trips {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 2px;\r\n    border-bottom-color: rgba(255, 111, 97, .8);\r\n    box-shadow: none;\r\n}\r\n\r\n  .sub-trips {\r\n    display: block;\r\n}\r\n\r\n  .mat-expansion-panel {\r\n    box-shadow: none !important;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVudS1pdGVtcy9yZWNvcmRzLXBhZ2UvcmVjb3Jkcy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLDJDQUEyQztJQUMzQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiLyogT3RoZXIgcmVjb3JkcyBwYWdlIGNvbnRhaW5lciBzdHlsaXphdGlvbiAqL1xyXG4ucmVjb3Jkcy1wYWdlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5maWx0ZXItbWVudSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jaGVja2JveC1pY29uIHtcclxuICAgIGNvbG9yOiAjMDAzRjYxO1xyXG59XHJcblxyXG4uZmlsdGVyLW1lbnUtaXRlbSB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmx1ZS10cmlwLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICMwMDNGNjE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLmJsdWUtc3ViaGVhZGluZyB7XHJcbiAgICBjb2xvcjogIzAwM0Y2MTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZpbHRlci1idXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZmlsdGVyLWl0ZW0tYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgOTMsIDEzNSwgMC4zKSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDNGNjEgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZmlsdGVyLXRvb2wge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aXZlLXRleHQge1xyXG4gICAgY29sb3I6ICMwMDVkODc7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLm91dGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmlubmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGFuZWwtdGl0bGUge1xyXG4gICAgY29sb3I6ICMwMDNGNjE7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ucGFuZWwtZGF0ZSB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjMDA1ZDg3O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm5vdC10cmFuc21pdHRlZCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnBhc3QtdHJpcHMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAxMTEsIDk3LCAuOCk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnN1Yi10cmlwcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1105:
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/local-storage.service */ 8345);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 8589);












class MenuComponent {
  constructor(auth, router, toastr, onlineStatusService, authenticationService) {
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    // data preambles
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
  }
  // navigate back to the current trip homepage  
  toCurrentHome() {
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_3__.OnlineStatusType.OFFLINE) {
      let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getCurrUsername();
      if (currUsername) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOffline(currUsername).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
          if (error) {
            this.authenticationService.userDataLogout(error);
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.authenticationService.userDataLogout("User ID or Email not defined");
          } else {
            this.userDetails = currUser;
            this.router.navigate([this.userDetails.currHomepage]);
          }
        });
      } else {
        this.authenticationService.userDataLogout("Username not saved to storage");
      }
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
                  if (error) {
                    this.authenticationService.userDataLogout(error);
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.authenticationService.userDataLogout("User ID or Email is undefined");
                  } else {
                    this.userDetails = currUser;
                    this.router.navigate([this.userDetails.currHomepage]);
                  }
                });
              } else {
                this.authenticationService.userDataLogout("User ID or email is undefined");
              }
            } else {
              this.authenticationService.userDataLogout("Cannot get user data");
            }
          });
        } else {
          this.authenticationService.userDataLogout("Not authenticated");
        }
      });
    }
  }
  // navigate to the profile page
  toProfile() {
    this.router.navigate(['profile']);
  }
  // navigate to the records page
  toRecords() {
    this.router.navigate(['records-page']);
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
    this.authenticationService.logout();
  }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_3__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService));
};
MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  decls: 35,
  vars: 1,
  consts: [["mat-button", "", 3, "matMenuTriggerFor"], [1, "menu-button"], [1, "menu"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "item-icon"], [1, "menu-item"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0)(1, "mat-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-menu", 2, 3)(5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_5_listener() {
        return ctx.toCurrentHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "home");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Home/My Trip");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_10_listener() {
        return ctx.toProfile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "person");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_15_listener() {
        return ctx.toRecords();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "folder");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Records");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_20_listener() {
        return ctx.toResources();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "description");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Resources");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_25_listener() {
        return ctx.toFisheryNotices();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Fishery Notices");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_30_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuTrigger],
  styles: [".menu {\r\n    background-color: #005d87 !important;\r\n} \r\n\r\n.menu-item[_ngcontent-%COMP%] {\r\n    color: white !important;\r\n    margin: auto;\r\n}\r\n\r\n.item-icon[_ngcontent-%COMP%] {\r\n    color: #ff6f61 !important;\r\n}\r\n\r\n.menu-button[_ngcontent-%COMP%] {\r\n    color: #ff6f61 !important;\r\n    transform: scale(2);\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWQ4NyAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuLm1lbnUtaXRlbSB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLml0ZW0taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmNmY2MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVudS1idXR0b24ge1xyXG4gICAgY29sb3I6ICNmZjZmNjEgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6912:
/*!******************************************************************!*\
  !*** ./src/app/reports/cancel-report/cancel-report.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelReportComponent": () => (/* binding */ CancelReportComponent)
/* harmony export */ });
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-models/trip-models/trip.model */ 5636);
/* harmony import */ var src_app_data_models_report_models_cancel_report_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data-models/report-models/cancel-report.model */ 9646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);












class CancelReportComponent {
  constructor(auth, router, toastr, onlineStatusService, authenticationService) {
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    // data preambles
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    this.currTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_2__.Trip();
    this.cancelReport = new src_app_data_models_report_models_cancel_report_model__WEBPACK_IMPORTED_MODULE_3__.CancelReport();
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_5__.OnlineStatusType.OFFLINE) {
      let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.getCurrUsername();
      if (currUsername) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.getUserOffline(currUsername).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.error;
          if (error) {
            this.authenticationService.userDataLogout(error);
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.authenticationService.userDataLogout("User ID or Email not defined");
          } else {
            this.userDetails = currUser;
            this.initialize();
          }
        });
      } else {
        this.authenticationService.userDataLogout("Username not saved to storage");
      }
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.error;
                  if (error) {
                    this.authenticationService.userDataLogout(error);
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.authenticationService.userDataLogout("User ID or Email is undefined");
                  } else {
                    this.userDetails = currUser;
                    this.initialize();
                  }
                });
              } else {
                this.authenticationService.userDataLogout("User ID or email is undefined");
              }
            } else {
              this.authenticationService.userDataLogout("Cannot get user data");
            }
          });
        } else {
          this.authenticationService.userDataLogout("Not authenticated");
        }
      });
    }
  }
  initialize() {
    this.currTrip = this.userDetails.currTrip;
  }
  // go back to the active trip home screen
  toHome() {
    this.router.navigate(['active-trip-home']);
  }
  // send cancel report to DFO
  sendToDFO() {
    this.saveReport();
    _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.saveUser(this.userDetails).then(() => {
      console.log("User data saved to PouchDB");
      this.router.navigate(['submitted-report'], {
        state: {
          name: 'Cancel Fishing Report'
        }
      });
    });
  }
  saveReport() {
    this.cancelReport.submissionDate = new Date(); // get current date/time
    this.cancelReport.isComplete = true; // set submission flag
    this.currTrip.cancelFishingReport = this.cancelReport; // copy over the report
    // save current trip and set homepage to no-trip
    this.userDetails.currTrip = this.currTrip;
    this.userDetails.currHomepage = 'no-trip-home';
  }
}
CancelReportComponent.ɵfac = function CancelReportComponent_Factory(t) {
  return new (t || CancelReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_5__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService));
};
CancelReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CancelReportComponent,
  selectors: [["app-cancel-report"]],
  decls: 24,
  vars: 0,
  consts: [[1, "container", "report-container"], ["align", "center", 1, "row"], [1, "blue-heading-title"], [1, "row", "bottom-buttons"], [1, "col-1"], [1, "col-4"], [1, "row"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-blue", 3, "click"], [1, "col-2"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"]],
  template: function CancelReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Are you sure you want to cancel this trip? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 1)(5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Doing so will send a Cancel Fishing Report to DFO. Please refer to the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Resources ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " page for more information on cancelled trips. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 5)(13, "div", 6)(14, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CancelReportComponent_Template_button_click_14_listener() {
        return ctx.toHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " No ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 5)(19, "div", 6)(20, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CancelReportComponent_Template_button_click_20_listener() {
        return ctx.sendToDFO();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " Yes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton],
  styles: [".report-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.blue-heading-title[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  font-weight: bold;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n\r\n.fishing-button-red[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61 !important;\r\n  color: white !important;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.fishing-button-blue[_ngcontent-%COMP%] {\r\n  background-color: #005d87 !important;\r\n  color: white !important;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.bottom-buttons[_ngcontent-%COMP%] {\r\n  padding-bottom: 2%\r\n}\r\n\r\n\r\np[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  margin-bottom: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9jYW5jZWwtcmVwb3J0L2NhbmNlbC1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0U7QUFDRjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLyogT3RoZXIgY29udGFpbmVyIHN0eWxlcyAqL1xyXG4ucmVwb3J0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogVGl0bGUgdGV4dCAqL1xyXG4uYmx1ZS1oZWFkaW5nLXRpdGxlIHtcclxuICBjb2xvcjogIzAwNWQ4NztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLyogUmVkIGJ1dHRvbnMgKi9cclxuLmZpc2hpbmctYnV0dG9uLXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmY2MSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBCbHVlIGJ1dHRvbnMgKi9cclxuLmZpc2hpbmctYnV0dG9uLWJsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkODcgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogTm8gYW5kIFllcyBidXR0b25zICovXHJcbi5ib3R0b20tYnV0dG9ucyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlXHJcbn1cclxuXHJcbi8qIFBhcmFncmFwaCB0ZXh0ICovXHJcbnAge1xyXG4gIGNvbG9yOiAjMDA1ZDg3O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9384:
/*!************************************************************!*\
  !*** ./src/app/reports/end-report/end-report.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndReportComponent": () => (/* binding */ EndReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-models/trip-models/trip.model */ 5636);
/* harmony import */ var src_app_data_models_report_models_end_report_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data-models/report-models/end-report.model */ 3304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);






















function EndReportComponent_h6_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Question ", ctx_r0.currPage, " of ", ctx_r0.numPages, " ");
  }
}
function EndReportComponent_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " End Fishing Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function EndReportComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-spinner", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 50)("strokeWidth", 6)("value", ctx_r2.spinnerProgress);
  }
}
function EndReportComponent_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EndReportComponent_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " priority_high ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EndReportComponent_div_13_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EndReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " When will you end fishing? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 21)(7, "mat-card", 22)(8, "mat-calendar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedChange", function EndReportComponent_div_13_Template_mat_calendar_selectedChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.endDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 2)(11, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Where did you last fish? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 13)(14, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Management Area(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " (Do not include sub-area) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, EndReportComponent_div_13_mat_error_20_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx_r5.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.endForm.invalid);
  }
}
function EndReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Would you like to add a comment? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13)(5, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Comments (optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 27)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Comments... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function EndReportComponent_div_15_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EndReportComponent_div_15_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r15.endForm.get("managementArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function EndReportComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Is all information complete and ready to be submitted to DFO? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13)(5, "h6", 24)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " End Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 13)(11, "h6", 24)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Management Area: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, EndReportComponent_div_15_span_14_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, EndReportComponent_div_15_span_15_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 13)(17, "h6", 24)(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Comments: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 4, ctx_r7.endDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r7.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = ctx_r7.endForm.get("comments")) == null ? null : tmp_3_0.value, " ");
  }
}
function EndReportComponent_div_17_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
function EndReportComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Your license area and gear type require you to provide additional information. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2)(5, "h6", 24)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Please Provide Arrival Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 13)(9, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Designated Landing Site ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field", 25)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Site Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, EndReportComponent_div_17_mat_error_15_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 13)(17, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Estimated Arrival Time (24hr) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ngb-timepicker", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EndReportComponent_div_17_Template_ngb_timepicker_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.arrivalTime = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.arrivalForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("spinners", false)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c0))("ngModel", ctx_r8.arrivalTime);
  }
}
function EndReportComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EndReportComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Send to DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class EndReportComponent {
  constructor(auth, router, toastr, onlineStatusService, authenticationService) {
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    // data preambles
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
    this.currTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_2__.Trip();
    this.endFishingReport = new src_app_data_models_report_models_end_report_model__WEBPACK_IMPORTED_MODULE_3__.EndReport();
    // report data
    this.endForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({
      managementArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('') // page 2
    });

    this.endDate = new Date(); // page 1
    // arrival form for 
    this.arrivalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({
      site: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]) // arrival page (page 4)
    });

    this.arrivalTime = {
      hour: 0,
      minute: 0
    };
    // page to page
    this.numPages = 0;
    this.currPage = 0;
    this.spinnerProgress = 0;
    this.spinnerIncrement = 0;
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_7__.OnlineStatusType.OFFLINE) {
      let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getCurrUsername();
      if (currUsername) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOffline(currUsername).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
          if (error) {
            this.authenticationService.userDataLogout(error);
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.authenticationService.userDataLogout("User ID or Email not defined");
          } else {
            this.userDetails = currUser;
            this.initialize();
          }
        });
      } else {
        this.authenticationService.userDataLogout("Username not saved to storage");
      }
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
                  if (error) {
                    this.authenticationService.userDataLogout(error);
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.authenticationService.userDataLogout("User ID or Email is undefined");
                  } else {
                    this.userDetails = currUser;
                    this.initialize();
                  }
                });
              } else {
                this.authenticationService.userDataLogout("User ID or email is undefined");
              }
            } else {
              this.authenticationService.userDataLogout("Cannot get user data");
            }
          });
        } else {
          this.authenticationService.userDataLogout("Not authenticated");
        }
      });
    }
  }
  // initialize values
  initialize() {
    // get current fishing report
    this.currTrip = this.userDetails.currTrip;
    // set time to current time
    this.arrivalTime = {
      hour: this.endDate.getHours(),
      minute: this.endDate.getMinutes()
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
  // save End Fishing Report and Trip Data
  saveReportData() {
    if (this.currTrip.gear.name === 'Troll' && this.currTrip.licenseArea.licenseName === 'G') {
      this.setDateTime(); // add arrival time to the date
      this.endFishingReport.arrivalSite = this.arrivalForm.get('site')?.value;
    }
    this.endFishingReport.endDate = this.endDate; // save end date to report
    this.endFishingReport.isComplete = true; // set submission flag
    this.endFishingReport.managementArea = this.endForm.get('managementArea')?.value;
    this.endFishingReport.comments = this.endForm.get('comments')?.value;
    this.endFishingReport.submissionDate = new Date(); // get current date/time
    this.currTrip.endFishingReport = this.endFishingReport;
    this.userDetails.currTrip = this.currTrip;
    _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
      console.log("User data saved to PouchDB");
      this.toSubmittedReport();
    });
  }
  // send start fishing report to DFO
  sendToDFO() {
    // not on arrival page
    if (this.currPage < 4) {
      if (this.endForm.valid) {
        // arrival details for troll gear and license area G
        if (this.currTrip.startFishingReport.isComplete && this.currTrip.gear.name === 'Troll' && this.currTrip.licenseArea.licenseName === 'G') {
          // set arrival time to current time
          let newDate = new Date();
          this.arrivalTime = {
            hour: newDate.getHours(),
            minute: newDate.getMinutes()
          };
          // go to arrival page
          this.currPage++;
        } else {
          this.saveReportData();
        }
      } else {
        this.toastr.error("Not all required fields filled", "Invalid form");
      }
    }
    // arrival page
    else {
      if (this.arrivalForm.valid) {
        this.saveReportData();
      } else {
        this.toastr.error("Not all required fields filled", "Invalid form");
      }
    }
  }
  updateHomepage(homeName) {
    this.userDetails.currHomepage = homeName;
    _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
      this.router.navigate(['submitted-report'], {
        state: {
          name: 'End Fishing Report'
        }
      });
    });
  }
  // update the start date hour and minute, only needed on 'Next'
  setDateTime() {
    let arrivalHours = this.arrivalTime.hour;
    let arrivalMinutes = this.arrivalTime.minute;
    this.endDate.setHours(arrivalHours ? arrivalHours : this.endDate.getHours());
    this.endDate.setMinutes(arrivalMinutes ? arrivalMinutes : this.endDate.getMinutes());
    this.endDate.setSeconds(0);
    this.endDate.setMilliseconds(0);
  }
  toSubmittedReport() {
    if (this.currTrip.offloadNeeded) {
      this.updateHomepage('offload-home');
    } else {
      this.updateHomepage('no-trip-home');
    }
  }
  // go back to the active trip home screen
  toHome() {
    this.router.navigate(['active-trip-home']);
  }
}
EndReportComponent.ɵfac = function EndReportComponent_Factory(t) {
  return new (t || EndReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_7__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService));
};
EndReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: EndReportComponent,
  selectors: [["app-end-report"]],
  decls: 32,
  vars: 13,
  consts: [[1, "container", "report-container"], [1, "container", 2, "padding-top", "20px"], ["align", "center", 1, "row"], [4, "ngIf"], [1, "col-5"], [1, "col-2"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value", 4, "ngIf"], ["class", "top-icon", 4, "ngIf"], [3, "formGroup"], ["class", "container details", 4, "ngIf"], [1, "row", "bottom-buttons"], [1, "col-1"], [1, "col-4"], [1, "row"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-blue", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"], [1, "text-muted"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value"], [1, "top-icon"], [1, "container", "details"], [1, "blue-heading-title"], [1, "col-8"], [1, "demo-inline-calendar-card", 2, "margin-top", "10%"], [3, "selected", "selectedChange"], [1, "blue-label"], ["appearance", "outline"], ["matInput", "", "placeholder", "e.g. Area1, Area2", "formControlName", "managementArea"], ["appearance", "fill"], ["matInput", "", "rows", "9", "formControlName", "comments"], ["class", "invalid-field", 4, "ngIf"], [1, "invalid-field"], ["matInput", "", "formControlName", "site"], [1, "time-picker", 3, "spinners", "ngModelOptions", "ngModel", "ngModelChange"]],
  template: function EndReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, EndReportComponent_h6_3_Template, 3, 2, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, EndReportComponent_h6_4_Template, 3, 0, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, EndReportComponent_mat_spinner_8_Template, 1, 3, "mat-spinner", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, EndReportComponent_mat_icon_9_Template, 2, 0, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, EndReportComponent_mat_icon_10_Template, 2, 0, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, EndReportComponent_div_13_Template, 21, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, EndReportComponent_div_14_Template, 11, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, EndReportComponent_div_15_Template, 21, 6, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, EndReportComponent_div_17_Template, 20, 5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 12)(21, "div", 13)(22, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EndReportComponent_Template_button_click_22_listener() {
        return ctx.toPreviousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 12)(27, "div", 13)(28, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EndReportComponent_Template_button_click_28_listener() {
        return ctx.toNextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, EndReportComponent_span_29_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, EndReportComponent_span_30_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.endForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.arrivalForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatCalendar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatError, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbTimepicker, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".report-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.mat-mdc-progress-spinner[_ngcontent-%COMP%] {\r\n  --mdc-circular-progress-active-indicator-color: #3ebfb9 !important;\r\n}\r\n\r\n\r\n.top-icon[_ngcontent-%COMP%] {\r\n  color: #3ebfb9;\r\n}\r\n\r\n\r\n.blue-heading-title[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  font-weight: bold;\r\n  margin-top: 5%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\n\r\n.blue-label[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  margin-top: 5%;\r\n}\r\n\r\n\r\n.time-picker[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n\r\n.fishing-button-blue[_ngcontent-%COMP%] {\r\n  background-color: #005d87 !important;\r\n  color: white !important;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.fishing-button-red[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61 !important;\r\n  color: white !important;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.bottom-buttons[_ngcontent-%COMP%] {\r\n  margin-top: auto;\r\n  padding-bottom: 2%;\r\n}\r\n\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  margin-bottom: 5%;\r\n}\r\n\r\n\r\n.invalid-field[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\n\r\n\r\n   .mat-calendar-body-selected {\r\n  background-color: #3ebfb9;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9lbmQtcmVwb3J0L2VuZC1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxrRUFBa0U7QUFDcEU7O0FBRUEsZ0RBQWdEO0FBQ2hEO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLFVBQVU7QUFDWjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UseUJBQXlCO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLyogT3RoZXIgY29udGFpbmVyIHN0eWxlcyAqL1xyXG4ucmVwb3J0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogUHJvZ3Jlc3Mgc3Bpbm5lciBjb2xvciAqL1xyXG4ubWF0LW1kYy1wcm9ncmVzcy1zcGlubmVyIHtcclxuICAtLW1kYy1jaXJjdWxhci1wcm9ncmVzcy1hY3RpdmUtaW5kaWNhdG9yLWNvbG9yOiAjM2ViZmI5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEljb25zIHRoYXQgcmVwbGFjZSBzcGlubmVyIGF0IHRvcCBvZiBzY3JlZW4gKi9cclxuLnRvcC1pY29uIHtcclxuICBjb2xvcjogIzNlYmZiOTtcclxufVxyXG5cclxuLyogVGl0bGUgdGV4dCAqL1xyXG4uYmx1ZS1oZWFkaW5nLXRpdGxlIHtcclxuICBjb2xvcjogIzAwNWQ4NztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuLyogQmx1ZSB0ZXh0IGZvciBmaWVsZCBsYWJlbHMgKi9cclxuLmJsdWUtbGFiZWwge1xyXG4gIGNvbG9yOiAjMDA1ZDg3O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4vKiBTdHlsaXphdGlvbiBmb3IgdGhlIHRpbWUgcGlja2VyICovXHJcbi50aW1lLXBpY2tlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4vKiBCbHVlIGJ1dHRvbnMgKi9cclxuLmZpc2hpbmctYnV0dG9uLWJsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkODcgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogUmVkIGJ1dHRvbnMgKi9cclxuLmZpc2hpbmctYnV0dG9uLXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmY2MSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBCYWNrIGFuZCBOZXh0IGJ1dHRvbnMgKi9cclxuLmJvdHRvbS1idXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG5cclxuLyogQWxsIGRldGFpbCBwYWdlcyAqL1xyXG4uZGV0YWlscyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi8qIElmIHZhbHVlIGlzIGludmFsaWQgKi9cclxuLmludmFsaWQtZmllbGQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi8qIENhbGVuZGFyIFN0eWxpbmcgKi9cclxuXHJcbjo6bmctZGVlcCAgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ViZmI5O1xyXG59XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2955:
/*!********************************************************************!*\
  !*** ./src/app/reports/offload-report/offload-report.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffloadReportComponent": () => (/* binding */ OffloadReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-models/trip-models/trip.model */ 5636);
/* harmony import */ var _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-models/catch-table-models/species-data.model */ 439);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialogs/add-species-dialog/add-species-dialog.component */ 8600);
/* harmony import */ var src_app_data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data-models/catch-table-models/table-rules.model */ 9356);
/* harmony import */ var src_app_data_models_report_models_offload_report_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data-models/report-models/offload-report.model */ 8796);
/* harmony import */ var src_app_dialogs_offload_table_dialog_offload_table_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialogs/offload-table-dialog/offload-table-dialog.component */ 6184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);































function OffloadReportComponent_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h6")(1, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" Question ", ctx_r0.currPage, " of ", ctx_r0.numPages, " ");
  }
}
function OffloadReportComponent_h6_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h6")(1, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Offload Catch Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function OffloadReportComponent_mat_spinner_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-spinner", 18);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("diameter", 50)("strokeWidth", 6)("value", ctx_r2.spinnerProgress);
  }
}
function OffloadReportComponent_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
function OffloadReportComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20)(1, "div", 3)(2, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " When did you offload? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 22)(7, "mat-card", 23)(8, "mat-calendar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectedChange", function OffloadReportComponent_div_12_Template_mat_calendar_selectedChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.offloadDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 25)(10, "div", 26)(11, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, " Time (24hr): \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 26)(14, "ngb-timepicker", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function OffloadReportComponent_div_12_Template_ngb_timepicker_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.offloadTime = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("selected", ctx_r4.offloadDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("spinners", false)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](4, _c0))("ngModel", ctx_r4.offloadTime);
  }
}
function OffloadReportComponent_div_13_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const response_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", response_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", response_r17, " ");
  }
}
function OffloadReportComponent_div_13_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function OffloadReportComponent_div_13_div_10_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function OffloadReportComponent_div_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Please provide the slip number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-form-field", 29)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " Slip number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("input", function OffloadReportComponent_div_13_div_10_Template_input_input_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r19.forbidNonNumeric("fishSlipNumber"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, OffloadReportComponent_div_13_div_10_mat_error_8_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r15.offloadForm.invalid);
  }
}
function OffloadReportComponent_div_13_div_11_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const weightUnit_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", weightUnit_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", weightUnit_r23, " ");
  }
}
function OffloadReportComponent_div_13_div_11_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function OffloadReportComponent_div_13_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 3)(1, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " How would you like to record catch weight? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-form-field", 29)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " Select Units ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, OffloadReportComponent_div_13_div_11_mat_option_7_Template, 2, 2, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, OffloadReportComponent_div_13_div_11_mat_error_8_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r16.weightUnitOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r16.offloadForm.invalid);
  }
}
function OffloadReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Were you issued a fish slip or sale slip? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-form-field", 29)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, OffloadReportComponent_div_13_mat_option_8_Template, 2, 2, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, OffloadReportComponent_div_13_mat_error_9_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, OffloadReportComponent_div_13_div_10_Template, 9, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, OffloadReportComponent_div_13_div_11_Template, 9, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r5.responseOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.offloadForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.fishSlipVal() === "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.getCurrentGearType() === "Seine");
  }
}
function OffloadReportComponent_div_14_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please record total catch for each species in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "either ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "pieces");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function OffloadReportComponent_div_14_h6_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please record total catch for each species in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "pieces");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function OffloadReportComponent_div_14_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function OffloadReportComponent_div_14_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r34.speciesName, " ");
  }
}
function OffloadReportComponent_div_14_ng_container_14_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("(", ctx_r35.getWeightUnits(), ")");
  }
}
function OffloadReportComponent_div_14_ng_container_14_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r37 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r36.determineCellStyling(element_r37.offloadWeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r37.offloadWeight, " ");
  }
}
function OffloadReportComponent_div_14_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, OffloadReportComponent_div_14_ng_container_14_th_2_Template, 4, 1, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, OffloadReportComponent_div_14_ng_container_14_td_3_Template, 2, 2, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}
function OffloadReportComponent_div_14_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Pieces ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function OffloadReportComponent_div_14_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r38 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r30.determineCellStyling(element_r38.offloadPieces));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r38.offloadPieces, " ");
  }
}
function OffloadReportComponent_div_14_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 56);
  }
}
function OffloadReportComponent_div_14_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OffloadReportComponent_div_14_tr_20_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42);
      const index_r40 = restoredCtx.index;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r41.addSpeciesDialog(index_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function OffloadReportComponent_div_14_h6_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h6", 49)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Total Weight: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r33.calculateTotalFish("weight"), " ");
  }
}
function OffloadReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Offload Catch Table ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, OffloadReportComponent_div_14_h6_4_Template, 11, 0, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, OffloadReportComponent_div_14_h6_5_Template, 5, 0, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OffloadReportComponent_div_14_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r43.offloadTableDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Populate Table ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "table", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](10, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, OffloadReportComponent_div_14_th_12_Template, 2, 0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, OffloadReportComponent_div_14_td_13_Template, 2, 1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, OffloadReportComponent_div_14_ng_container_14_Template, 4, 0, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](15, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, OffloadReportComponent_div_14_th_17_Template, 2, 0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, OffloadReportComponent_div_14_td_18_Template, 2, 2, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, OffloadReportComponent_div_14_tr_19_Template, 1, 0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, OffloadReportComponent_div_14_tr_20_Template, 1, 0, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, OffloadReportComponent_div_14_h6_22_Template, 4, 1, "h6", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "h6", 49)(24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " Total Pieces: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 22)(30, "div", 14)(31, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OffloadReportComponent_div_14_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r45.addSpeciesDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, " Add New Species ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.getCurrentGearType() === "Seine");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.getCurrentGearType() === "Gill Net");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx_r6.tableDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.getCurrentGearType() === "Seine");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx_r6.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx_r6.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.getCurrentGearType() === "Seine");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r6.calculateTotalFish("pieces"), " ");
  }
}
function OffloadReportComponent_div_15_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function OffloadReportComponent_div_15_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r47.offloadForm.get("fishSlipIssued")) == null ? null : tmp_0_0.value, " ");
  }
}
function OffloadReportComponent_div_15_div_22_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function OffloadReportComponent_div_15_div_22_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r51.offloadForm.get("fishSlipNumber")) == null ? null : tmp_0_0.value, " ");
  }
}
function OffloadReportComponent_div_15_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14)(1, "h6", 27)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Slip Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, OffloadReportComponent_div_15_div_22_span_4_Template, 2, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, OffloadReportComponent_div_15_div_22_span_5_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r48.offloadForm.get("fishSlipNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !((tmp_1_0 = ctx_r48.offloadForm.get("fishSlipNumber")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.required));
  }
}
function OffloadReportComponent_div_15_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14)(1, "h6", 27)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Total Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("(", (tmp_0_0 = ctx_r49.offloadForm.get("weightUnits")) == null ? null : tmp_0_0.value, "): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r49.calculateTotalFish("weight"), " ");
  }
}
function OffloadReportComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 58)(1, "div", 3)(2, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Is all information complete and ready to be submitted to DFO? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 14)(5, "h6", 27)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, " Offload Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 14)(11, "h6", 27)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, " Offload Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 14)(17, "h6", 27)(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, " Fish Slip Issued?: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, OffloadReportComponent_div_15_span_20_Template, 2, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, OffloadReportComponent_div_15_span_21_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, OffloadReportComponent_div_15_div_22_Template, 6, 2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, OffloadReportComponent_div_15_div_23_Template, 8, 2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 14)(25, "h6", 27)(26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Total Pieces:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 7, ctx_r7.offloadDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](15, 9, ctx_r7.offloadDate, "h:mm a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r7.offloadForm.get("fishSlipIssued")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !((tmp_3_0 = ctx_r7.offloadForm.get("fishSlipIssued")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.fishSlipVal() === "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.getCurrentGearType() === "Seine");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r7.calculateTotalFish("pieces"), " ");
  }
}
function OffloadReportComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function OffloadReportComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Send to DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
class OffloadReportComponent {
  constructor(dialog, auth, router, toastr, onlineStatusService, authenticationService) {
    this.dialog = dialog;
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    this.offloadTable = new src_app_data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_5__.TableRules(); // used in add species dialog
    this.tableDataSource = []; // all species data currently in the table
    this.displayedColumns = []; // columns currently being displayed in the table
    this.weightUnitOptions = ['Lbs', 'Kgs']; //hardcoded values to be used in the form
    // data preambles
    this.responseOptions = ['Yes', 'No']; //hardcoded values to be used in the form
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
    this.unfilteredFishList = []; // temporary array to store species
    this.fishList = []; //filtered list of species data, will comprise the user's look-up list
    this.currTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_2__.Trip();
    this.offloadReport = new src_app_data_models_report_models_offload_report_model__WEBPACK_IMPORTED_MODULE_6__.OffloadReport();
    this.offloadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormGroup({
      fishSlipIssued: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      fishSlipNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
      weightUnits: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('') // page 2 (always auto-selected so no need for validation)
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
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_11__.OnlineStatusType.OFFLINE) {
      let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getCurrUsername();
      if (currUsername) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOffline(currUsername).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
          if (error) {
            this.authenticationService.userDataLogout(error);
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.authenticationService.userDataLogout("User ID or Email not defined");
          } else {
            this.userDetails = currUser;
            this.initialize();
          }
        });
      } else {
        this.authenticationService.userDataLogout("Username not saved to storage");
      }
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
                  if (error) {
                    this.authenticationService.userDataLogout(error);
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.authenticationService.userDataLogout("User ID or Email is undefined");
                  } else {
                    this.userDetails = currUser;
                    this.initialize();
                  }
                });
              } else {
                this.authenticationService.userDataLogout("User ID or email is undefined");
              }
            } else {
              this.authenticationService.userDataLogout("Cannot get user data");
            }
          });
        } else {
          this.authenticationService.userDataLogout("Not authenticated");
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
        fishSlipControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
      } else {
        fishSlipControl?.clearValidators();
      }
      fishSlipControl?.updateValueAndValidity();
    });
  }
  initialize() {
    // get all required data
    this.currTrip = this.userDetails.currTrip;
    this.unfilteredFishList = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getSpeciesList();
    this.setTableRules();
    this.filterSpeciesData(); // filter species list available to the user
    // initialize the table 
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
  offloadTableDialog() {
    const dialogRef = this.dialog.open(src_app_dialogs_offload_table_dialog_offload_table_dialog_component__WEBPACK_IMPORTED_MODULE_7__.OffloadTableDialogComponent, {
      width: '500px',
      height: '550px',
      data: {
        catchReports: this.userDetails.currTrip.dailyCatchReports,
        tableData: this.tableDataSource
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tableDataSource = result;
        this.updateTable();
      }
    });
  }
  // table rules will be the same as they are for the current gear's Daily Catch Report with a couple differences:
  // tableType will instead be 'offload-catch' and containsSpecies list will be cleared since we are getting that info from the daily catch reports
  setTableRules() {
    this.offloadTable = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getTableRules(this.currTrip.gear.name);
    this.offloadTable.tableType = 'offload-catch';
    this.offloadTable.containsSpecies.length = 0; // clear contains list
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
    return this.offloadForm.get('fishSlipIssued')?.value;
  }
  getWeightUnits() {
    return this.offloadForm.get('weightUnits')?.value;
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

      if (!excludeFlag) {
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
    const dialogRef = this.dialog.open(_dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_4__.AddSpeciesDialogComponent, {
      width: '500px',
      height: '450px',
      data: {
        identifier: 'add',
        species: new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData(''),
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
    const dialogRef = this.dialog.open(_dialogs_add_species_dialog_add_species_dialog_component__WEBPACK_IMPORTED_MODULE_4__.AddSpeciesDialogComponent, {
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
    let newSpeciesData = new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_3__.SpeciesData(result.speciesName);
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
  determineSpeciesData() {
    let tempFishArray = [];
    for (let fish of this.tableDataSource) {
      if (fish.offloadWeight > 0 || fish.offloadPieces > 0) {
        tempFishArray.push(fish);
      }
    }
    return tempFishArray;
  }
  saveReportData() {
    // copy relevant data to offload report object
    this.offloadReport.offloadDate = this.offloadDate;
    this.offloadReport.fishSlip = this.offloadForm.get('fishSlipIssued')?.value;
    this.offloadReport.fishSlipNumber = this.offloadForm.get('fishSlipNumber')?.value;
    this.offloadReport.speciesDataList = this.determineSpeciesData();
    this.offloadReport.catchWeightUnits = this.offloadForm.get('weightUnits')?.value;
    this.offloadReport.submissionDate = new Date(); // get current date/time
    // push the report to currTrip
    this.currTrip.offloadReports.push(this.offloadReport);
    // save to PouchDB
    this.userDetails.currTrip = this.currTrip;
    _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
      console.log("User data saved to PouchDB");
      this.router.navigate(['submitted-report'], {
        state: {
          name: 'Offload Catch Report'
        }
      });
    });
  }
  sendToDFO() {
    if (this.offloadForm.valid) {
      this.saveReportData();
    } else {
      this.toastr.error("Not all required fields filled", "Invalid form");
    }
  }
}
OffloadReportComponent.ɵfac = function OffloadReportComponent_Factory(t) {
  return new (t || OffloadReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_13__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_11__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__.AuthenticationService));
};
OffloadReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: OffloadReportComponent,
  selectors: [["app-offload-report"]],
  viewQuery: function OffloadReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    }
  },
  decls: 30,
  vars: 11,
  consts: [[1, "container", "report-container"], [3, "formGroup"], [1, "container", 2, "padding-top", "20px"], ["align", "center", 1, "row"], [4, "ngIf"], [1, "col-5"], [1, "col-2"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value", 4, "ngIf"], ["style", "color: #3ebfb9", 4, "ngIf"], ["class", "container details", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "row", "bottom-buttons"], [1, "col-1"], [1, "col-4"], [1, "row"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-blue", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"], [1, "text-muted"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value"], [2, "color", "#3ebfb9"], [1, "container", "details"], [1, "blue-heading-title"], [1, "col-8"], [1, "demo-inline-calendar-card", 2, "margin-top", "10%"], [3, "selected", "selectedChange"], [1, "outer"], [1, "inner"], [1, "blue-label"], [1, "time-picker", 3, "spinners", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", 2, "padding-top", "15px"], ["formControlName", "fishSlipIssued"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "row", "align", "center", 4, "ngIf"], [3, "value"], ["matInput", "", "inputmode", "numeric", "formControlName", "fishSlipNumber", 3, "input"], ["formControlName", "weightUnits"], ["class", "blue-label", 4, "ngIf"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-light-blue", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", "margin-table", 3, "dataSource"], ["matColumnDef", "speciesName"], ["mat-header-cell", "", "class", "heading-cell", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "weight", 4, "ngIf"], ["matColumnDef", "pieces"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "row", 2, "padding-top", "10px"], ["style", "color: #003F61", 4, "ngIf"], [2, "color", "#003F61"], ["align", "center", 1, "row", "add-item", 2, "padding-top", "15px"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-red", 3, "click"], ["mat-header-cell", "", 1, "heading-cell"], ["mat-cell", ""], ["matColumnDef", "weight"], ["mat-cell", "", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], [1, "container"], ["class", "invalid-field", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "invalid-field"]],
  template: function OffloadReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, OffloadReportComponent_h6_4_Template, 3, 2, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, OffloadReportComponent_h6_5_Template, 3, 0, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, OffloadReportComponent_mat_spinner_9_Template, 1, 3, "mat-spinner", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, OffloadReportComponent_mat_icon_10_Template, 2, 0, "mat-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, OffloadReportComponent_div_12_Template, 15, 5, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, OffloadReportComponent_div_13_Template, 12, 4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, OffloadReportComponent_div_14_Template, 35, 8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, OffloadReportComponent_div_15_Template, 30, 12, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 13)(19, "div", 14)(20, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OffloadReportComponent_Template_button_click_20_listener() {
        return ctx.toPreviousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 13)(25, "div", 14)(26, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OffloadReportComponent_Template_button_click_26_listener() {
        return ctx.toNextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, OffloadReportComponent_span_27_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, OffloadReportComponent_span_28_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.offloadForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currPage === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currPage === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currPage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCard, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatCalendar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatError, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelect, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__.NgbTimepicker, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe],
  styles: [".report-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n  }\r\n  \r\n  \r\n  .mat-mdc-progress-spinner[_ngcontent-%COMP%] {\r\n    --mdc-circular-progress-active-indicator-color: #3ebfb9 !important;\r\n  }\r\n  \r\n  \r\n  .mat-mdc-radio-button.mat-accent[_ngcontent-%COMP%] {\r\n    --mdc-radio-selected-focus-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-hover-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-icon-color: #3ebfb9;\r\n    --mdc-radio-selected-pressed-icon-color: #3ebfb9;\r\n    --mat-mdc-radio-checked-ripple-color: #3ebfb9;\r\n  }\r\n  \r\n    .mat-mdc-text-field-wrapper {\r\n    background-color: whitesmoke !important;\r\n  }\r\n  \r\n  \r\n  .radio[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    margin-top: 1%;\r\n  }\r\n  \r\n  \r\n  .blue-heading-title[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    font-weight: bold;\r\n    margin-top: 5%;\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  \r\n  .blue-heading-subtitle[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n    margin-bottom: 1%;\r\n    padding-left: 10%;\r\n  }\r\n  \r\n  \r\n  .blue-label[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    margin-top: 5%;\r\n  }\r\n  \r\n  \r\n  .add-item[_ngcontent-%COMP%] {\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  \r\n  .fishing-button-blue[_ngcontent-%COMP%] {\r\n    background-color: #005d87 !important;\r\n    color: white !important;\r\n    font-weight: bold;\r\n  }\r\n\r\n  \r\n  .fishing-button-light-blue[_ngcontent-%COMP%] {\r\n    background-color: #3ebfb9 !important;\r\n    color: white !important;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .fishing-button-red[_ngcontent-%COMP%] {\r\n    background-color: #ff6f61 !important;\r\n    color: white !important;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .time-picker[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n  \r\n  \r\n  .font-list[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  .bottom-buttons[_ngcontent-%COMP%] {\r\n    margin-top: auto;\r\n    padding-bottom: 3%;\r\n    padding-top: 10px\r\n  }\r\n  \r\n  \r\n  .details[_ngcontent-%COMP%] {\r\n    margin-bottom: 5%;\r\n  }\r\n  \r\n  \r\n  .invalid-field[_ngcontent-%COMP%] {\r\n    color: red;\r\n  }\r\n\r\n  \r\n  .margin-table[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  .heading-cell[_ngcontent-%COMP%] {\r\n    color: #003F61 !important;\r\n    font-weight: bold !important;\r\n  }\r\n\r\n  .mat-column-speciesName[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    color: #005d87;\r\n    border-right: 1px solid;\r\n  }\r\n\r\n  .mat-column-weight[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    text-align: center;\r\n  }\r\n\r\n  .mat-column-pieces[_ngcontent-%COMP%] {\r\n    color: #003F61;\r\n    text-align: center;\r\n  }\r\n\r\n  .bolded-cell[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\r\n\r\n  .faded-cell[_ngcontent-%COMP%] {\r\n    font-weight: lighter;\r\n  }\r\n\r\n  .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n    color: #005d87;\r\n    border-bottom: 1px solid;\r\n    border-top: 1px solid;\r\n    cursor: pointer;\r\n    border-color: #003F61;\r\n  }\r\n  \r\n  .mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n    background-color: whitesmoke;\r\n  }\r\n\r\n  \r\n\r\n     .mat-calendar-body-selected {\r\n    background-color: #3ebfb9;\r\n  }\r\n\r\n  .outer[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .inner[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9vZmZsb2FkLXJlcG9ydC9vZmZsb2FkLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBLDJCQUEyQjtFQUMzQjtJQUNFLGtFQUFrRTtFQUNwRTs7RUFFQSx3QkFBd0I7RUFDeEI7SUFDRSw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHdDQUF3QztJQUN4QyxnREFBZ0Q7SUFDaEQsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsdUNBQXVDO0VBQ3pDOztFQUVBLGtCQUFrQjtFQUNsQjtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGNBQWM7RUFDaEI7O0VBRUEsZUFBZTtFQUNmO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBLGtCQUFrQjtFQUNsQjtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQSwrQkFBK0I7RUFDL0I7SUFDRSxjQUFjO0lBQ2QsY0FBYztFQUNoQjs7RUFFQSwwQkFBMEI7RUFDMUI7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBLGlCQUFpQjtFQUNqQjtJQUNFLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztFQUVBLHVDQUF1QztFQUN2QztJQUNFLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztFQUVBLGdCQUFnQjtFQUNoQjtJQUNFLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztFQUVBLG9DQUFvQztFQUNwQztJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQSxrQkFBa0I7RUFDbEI7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUVBLHVCQUF1QjtFQUN2QjtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEI7RUFDRjs7RUFFQSxxQkFBcUI7RUFDckI7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUEsd0JBQXdCO0VBQ3hCO0lBQ0UsVUFBVTtFQUNaOztFQUVBLFVBQVU7RUFDVjtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7O0VBRUEscUJBQXFCOztFQUVyQjtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIE90aGVyIGNvbnRhaW5lciBzdHlsZXMgKi9cclxuLnJlcG9ydC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFByb2dyZXNzIHNwaW5uZXIgY29sb3IgKi9cclxuICAubWF0LW1kYy1wcm9ncmVzcy1zcGlubmVyIHtcclxuICAgIC0tbWRjLWNpcmN1bGFyLXByb2dyZXNzLWFjdGl2ZS1pbmRpY2F0b3ItY29sb3I6ICMzZWJmYjkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogUmFkaW8gYnV0dG9uIGNvbG9ycyAqL1xyXG4gIC5tYXQtbWRjLXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IHtcclxuICAgIC0tbWRjLXJhZGlvLXNlbGVjdGVkLWZvY3VzLWljb24tY29sb3I6ICMzZWJmYjk7XHJcbiAgICAtLW1kYy1yYWRpby1zZWxlY3RlZC1ob3Zlci1pY29uLWNvbG9yOiAjM2ViZmI5O1xyXG4gICAgLS1tZGMtcmFkaW8tc2VsZWN0ZWQtaWNvbi1jb2xvcjogIzNlYmZiOTtcclxuICAgIC0tbWRjLXJhZGlvLXNlbGVjdGVkLXByZXNzZWQtaWNvbi1jb2xvcjogIzNlYmZiOTtcclxuICAgIC0tbWF0LW1kYy1yYWRpby1jaGVja2VkLXJpcHBsZS1jb2xvcjogIzNlYmZiOTtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJhZGlvIGJ1dHRvbnMgKi9cclxuICAucmFkaW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gIH1cclxuICBcclxuICAvKiBUaXRsZSB0ZXh0ICovXHJcbiAgLmJsdWUtaGVhZGluZy10aXRsZSB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICB9XHJcbiAgXHJcbiAgLyogU3VidGl0bGUgdGV4dCAqL1xyXG4gIC5ibHVlLWhlYWRpbmctc3VidGl0bGUge1xyXG4gICAgY29sb3I6ICMwMDVkODc7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEJsdWUgdGV4dCBmb3IgZmllbGQgbGFiZWxzICovXHJcbiAgLmJsdWUtbGFiZWwge1xyXG4gICAgY29sb3I6ICMwMDVkODc7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIHRyaXAgSUQgb3IgdmVzc2VsICovXHJcbiAgLmFkZC1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEJsdWUgYnV0dG9ucyAqL1xyXG4gIC5maXNoaW5nLWJ1dHRvbi1ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVkODcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAvKiBMaWdodCBibHVlIGJ1dHRvbiAoUG9wdWxhdGUgVGFibGUpICovXHJcbiAgLmZpc2hpbmctYnV0dG9uLWxpZ2h0LWJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlYmZiOSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLyogUmVkIGJ1dHRvbnMgKi9cclxuICAuZmlzaGluZy1idXR0b24tcmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZmNjEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxpemF0aW9uIGZvciB0aGUgdGltZSBwaWNrZXIgKi9cclxuICAudGltZS1waWNrZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBGb250IGZvciBsaXN0ICovXHJcbiAgLmZvbnQtbGlzdCB7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAvKiBObyBhbmQgWWVzIGJ1dHRvbnMgKi9cclxuICAuYm90dG9tLWJ1dHRvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFsbCBkZXRhaWwgcGFnZXMgKi9cclxuICAuZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLyogSWYgdmFsdWUgaXMgaW52YWxpZCAqL1xyXG4gIC5pbnZhbGlkLWZpZWxkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAvKiBUYWJsZSAqL1xyXG4gIC5tYXJnaW4tdGFibGUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGluZy1jZWxsIHtcclxuICAgIGNvbG9yOiAjMDAzRjYxICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jb2x1bW4tc3BlY2llc05hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jb2x1bW4td2VpZ2h0IHtcclxuICAgIGNvbG9yOiAjMDAzRjYxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jb2x1bW4tcGllY2VzIHtcclxuICAgIGNvbG9yOiAjMDAzRjYxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmJvbGRlZC1jZWxsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmZhZGVkLWNlbGwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgfVxyXG5cclxuICAubWF0LW1kYy1yb3cgLm1hdC1tZGMtY2VsbCB7XHJcbiAgICBjb2xvcjogIzAwNWQ4NztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwM0Y2MTtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1tZGMtcm93OmhvdmVyIC5tYXQtbWRjLWNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB9XHJcblxyXG4gIC8qIENhbGVuZGFyIFN0eWxpbmcgKi9cclxuXHJcbiAgOjpuZy1kZWVwICAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlYmZiOTtcclxuICB9XHJcblxyXG4gIC5vdXRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaW5uZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8679:
/*!****************************************************************!*\
  !*** ./src/app/reports/pause-report/pause-report.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PauseReportComponent": () => (/* binding */ PauseReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-models/trip-models/trip.model */ 5636);
/* harmony import */ var src_app_data_models_report_models_pause_report_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data-models/report-models/pause-report.model */ 7169);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);





















function PauseReportComponent_h6_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Question ", ctx_r0.currPage, " of ", ctx_r0.numPages, " ");
  }
}
function PauseReportComponent_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " End Fishing Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PauseReportComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-spinner", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 50)("strokeWidth", 6)("value", ctx_r2.spinnerProgress);
  }
}
function PauseReportComponent_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PauseReportComponent_div_12_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PauseReportComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " When did you not fish? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 21)(7, "mat-card", 22)(8, "mat-calendar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedChange", function PauseReportComponent_div_12_Template_mat_calendar_selectedChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.pauseDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 2)(11, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Where did you last fish? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 13)(14, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Management Area(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " (Do not include sub-area) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, PauseReportComponent_div_12_mat_error_20_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx_r4.pauseDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.pauseForm.invalid);
  }
}
function PauseReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Would you like to add a comment? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13)(5, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Comments (optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 27)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Comments... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function PauseReportComponent_div_14_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PauseReportComponent_div_14_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r13.pauseForm.get("managementArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function PauseReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Is all information complete and ready to be submitted to DFO? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13)(5, "h6", 24)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Pause Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 13)(11, "h6", 24)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Management Area: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, PauseReportComponent_div_14_span_14_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, PauseReportComponent_div_14_span_15_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 13)(17, "h6", 24)(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Comments: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 4, ctx_r6.pauseDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r6.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = ctx_r6.pauseForm.get("comments")) == null ? null : tmp_3_0.value, " ");
  }
}
function PauseReportComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PauseReportComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Send to DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class PauseReportComponent {
  constructor(auth, router, toastr, onlineStatusService, authenticationService) {
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    this.currTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_2__.Trip();
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
    this.pauseReport = new src_app_data_models_report_models_pause_report_model__WEBPACK_IMPORTED_MODULE_3__.PauseReport();
    // report data
    this.pauseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({
      managementArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('') // page 2
    });

    this.pauseDate = new Date(); // page 1
    // page to page
    this.numPages = 0;
    this.currPage = 0;
    this.spinnerProgress = 0;
    this.spinnerIncrement = 0;
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_7__.OnlineStatusType.OFFLINE) {
      let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getCurrUsername();
      if (currUsername) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOffline(currUsername).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
          if (error) {
            this.authenticationService.userDataLogout(error);
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.authenticationService.userDataLogout("User ID or Email not defined");
          } else {
            this.userDetails = currUser;
            this.initialize();
          }
        });
      } else {
        this.authenticationService.userDataLogout("Username not saved to storage");
      }
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
                  if (error) {
                    this.authenticationService.userDataLogout(error);
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.authenticationService.userDataLogout("User ID or Email is undefined");
                  } else {
                    this.userDetails = currUser;
                    this.initialize();
                  }
                });
              } else {
                this.authenticationService.userDataLogout("User ID or email is undefined");
              }
            } else {
              this.authenticationService.userDataLogout("Cannot get user data");
            }
          });
        } else {
          this.authenticationService.userDataLogout("Not authenticated");
        }
      });
    }
  }
  initialize() {
    this.currTrip = this.userDetails.currTrip;
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
  saveReportData() {
    // save relevant information gathered in the form
    this.pauseReport.pauseDate = this.pauseDate;
    this.pauseReport.managementArea = this.pauseForm.get('managementArea')?.value;
    this.pauseReport.comments = this.pauseForm.get('comments')?.value;
    this.pauseReport.submissionDate = new Date(); // get current date/time
    // push the report to currTrip
    this.currTrip.pauseFishingReports.push(this.pauseReport);
    // save currTrip to PouchDB
    this.userDetails.currTrip = this.currTrip;
    _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
      console.log("User data saved to PouchDB");
      this.router.navigate(['submitted-report'], {
        state: {
          name: 'Pause Fishing Report'
        }
      });
    });
  }
  // send start fishing report to DFO
  sendToDFO() {
    if (this.pauseForm.valid) {
      this.saveReportData();
    } else {
      this.toastr.error("Not all required fields filled", "Invalid form");
    }
  }
  // go back to the active trip home screen
  toHome() {
    this.router.navigate(['active-trip-home']);
  }
}
PauseReportComponent.ɵfac = function PauseReportComponent_Factory(t) {
  return new (t || PauseReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_7__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService));
};
PauseReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PauseReportComponent,
  selectors: [["app-pause-report"]],
  decls: 29,
  vars: 10,
  consts: [[1, "container", "report-container"], [1, "container", 2, "padding-top", "20px"], ["align", "center", 1, "row"], [4, "ngIf"], [1, "col-5"], [1, "col-2"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value", 4, "ngIf"], ["style", "color: #3ebfb9", 4, "ngIf"], [3, "formGroup"], ["class", "container details", 4, "ngIf"], [1, "row", "bottom-buttons"], [1, "col-1"], [1, "col-4"], [1, "row"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-blue", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"], [1, "text-muted"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value"], [2, "color", "#3ebfb9"], [1, "container", "details"], [1, "blue-heading-title"], [1, "col-8"], [1, "demo-inline-calendar-card", 2, "margin-top", "10%"], [3, "selected", "selectedChange"], [1, "blue-label"], ["appearance", "outline"], ["matInput", "", "placeholder", "e.g. Area1, Area2", "formControlName", "managementArea"], ["appearance", "fill"], ["matInput", "", "rows", "9", "formControlName", "comments"], ["class", "invalid-field", 4, "ngIf"], [1, "invalid-field"]],
  template: function PauseReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PauseReportComponent_h6_3_Template, 3, 2, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PauseReportComponent_h6_4_Template, 3, 0, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, PauseReportComponent_mat_spinner_8_Template, 1, 3, "mat-spinner", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, PauseReportComponent_mat_icon_9_Template, 2, 0, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PauseReportComponent_div_12_Template, 21, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, PauseReportComponent_div_13_Template, 11, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, PauseReportComponent_div_14_Template, 21, 6, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PauseReportComponent_Template_button_click_19_listener() {
        return ctx.toPreviousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 12)(24, "div", 13)(25, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PauseReportComponent_Template_button_click_25_listener() {
        return ctx.toNextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, PauseReportComponent_span_26_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, PauseReportComponent_span_27_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.pauseForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatCalendar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatError, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".report-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.mat-mdc-progress-spinner[_ngcontent-%COMP%] {\r\n  --mdc-circular-progress-active-indicator-color: #3ebfb9 !important;\r\n}\r\n\r\n\r\n.blue-heading-title[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  font-weight: bold;\r\n  margin-top: 5%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\n\r\n.blue-label[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  margin-top: 5%;\r\n}\r\n\r\n\r\n.fishing-button-blue[_ngcontent-%COMP%] {\r\n  background-color: #005d87 !important;\r\n  color: white !important;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.fishing-button-red[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61 !important;\r\n  color: white !important;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.bottom-buttons[_ngcontent-%COMP%] {\r\n  margin-top: auto;\r\n  padding-bottom: 2%;\r\n}\r\n\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  margin-bottom: 5%;\r\n}\r\n\r\n\r\n.invalid-field[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\n\r\n\r\n   .mat-calendar-body-selected {\r\n  background-color: #3ebfb9;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9wYXVzZS1yZXBvcnQvcGF1c2UtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCO0FBQzNCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0Usa0VBQWtFO0FBQ3BFOztBQUVBLGVBQWU7QUFDZjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxVQUFVO0FBQ1o7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLHlCQUF5QjtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIE90aGVyIGNvbnRhaW5lciBzdHlsZXMgKi9cclxuLnJlcG9ydC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFByb2dyZXNzIHNwaW5uZXIgY29sb3IgKi9cclxuLm1hdC1tZGMtcHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcbiAgLS1tZGMtY2lyY3VsYXItcHJvZ3Jlc3MtYWN0aXZlLWluZGljYXRvci1jb2xvcjogIzNlYmZiOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBUaXRsZSB0ZXh0ICovXHJcbi5ibHVlLWhlYWRpbmctdGl0bGUge1xyXG4gIGNvbG9yOiAjMDA1ZDg3O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG59XHJcblxyXG4vKiBCbHVlIHRleHQgZm9yIGZpZWxkIGxhYmVscyAqL1xyXG4uYmx1ZS1sYWJlbCB7XHJcbiAgY29sb3I6ICMwMDVkODc7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi8qIEJsdWUgYnV0dG9ucyAqL1xyXG4uZmlzaGluZy1idXR0b24tYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWQ4NyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBSZWQgYnV0dG9ucyAqL1xyXG4uZmlzaGluZy1idXR0b24tcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2ZjYxICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIEJhY2sgYW5kIE5leHQgYnV0dG9ucyAqL1xyXG4uYm90dG9tLWJ1dHRvbnMge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG4vKiBBbGwgZGV0YWlsIHBhZ2VzICovXHJcbi5kZXRhaWxzIHtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLyogSWYgdmFsdWUgaXMgaW52YWxpZCAqL1xyXG4uaW52YWxpZC1maWVsZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLyogQ2FsZW5kYXIgU3R5bGluZyAqL1xyXG5cclxuOjpuZy1kZWVwICAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZWJmYjk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 788:
/*!****************************************************************!*\
  !*** ./src/app/reports/start-report/start-report.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartReportComponent": () => (/* binding */ StartReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-models/trip-models/trip.model */ 5636);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-models/trip-models/gear-models/gear.model */ 9793);
/* harmony import */ var _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-models/user-models/vessel-data.model */ 504);
/* harmony import */ var _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data-models/trip-models/license-area.model */ 634);
/* harmony import */ var _dialogs_add_vessel_dialog_add_vessel_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/add-vessel-dialog/add-vessel-dialog.component */ 9026);
/* harmony import */ var _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tel-input/tel-input.component */ 2823);
/* harmony import */ var _data_models_validator_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data-models/validator.model */ 4654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);






























const _c0 = ["telInput"];
function StartReportComponent_h6_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" Question ", ctx_r0.currPage, " of ", ctx_r0.numPages, " ");
  }
}
function StartReportComponent_h6_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h6")(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Start Fishing Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function StartReportComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-spinner", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("diameter", 50)("strokeWidth", 6)("value", ctx_r2.spinnerProgress);
  }
}
function StartReportComponent_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StartReportComponent_div_12_mat_radio_button_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-radio-button", 25)(1, "h6")(2, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const gear_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", gear_r15)("checked", gear_r15.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", gear_r15, " ");
  }
}
function StartReportComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " What type of gear are you using? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 13)(5, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " My available logbooks: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 22)(10, "mat-radio-group", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, StartReportComponent_div_12_mat_radio_button_11_Template, 4, 3, "mat-radio-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r4.gears);
  }
}
function StartReportComponent_div_13_mat_radio_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-radio-button", 25)(1, "h6")(2, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vessel_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", vessel_r17)("checked", vessel_r17.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", vessel_r17, " ");
  }
}
function StartReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Choose or add your vessel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 22)(7, "mat-radio-group", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, StartReportComponent_div_13_mat_radio_button_8_Template, 4, 3, "mat-radio-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 22)(13, "div", 13)(14, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StartReportComponent_div_13_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r18.addVesselDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, " Add New Vessel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r5.userVessels);
  }
}
function StartReportComponent_div_14_mat_radio_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-radio-button", 25)(1, "h6")(2, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const area_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", area_r21)("checked", area_r21.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", area_r21, " ");
  }
}
function StartReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " What is your License Area? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 22)(7, "mat-radio-group", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, StartReportComponent_div_14_mat_radio_button_8_Template, 4, 3, "mat-radio-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r6.licenseAreas);
  }
}
function StartReportComponent_div_15_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StartReportComponent_div_15_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StartReportComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Who is the vessel master? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 13)(5, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-form-field", 32)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, StartReportComponent_div_15_mat_error_11_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 13)(13, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " FIN (Fisher Identification Number) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "mat-form-field", 32)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, " Fisher Identification Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, StartReportComponent_div_15_mat_error_19_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.startForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.startForm.invalid);
  }
}
function StartReportComponent_div_16_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
const _c1 = function () {
  return {
    standalone: true
  };
};
function StartReportComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " When will you start fishing? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 35)(7, "mat-card", 36)(8, "mat-calendar", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectedChange", function StartReportComponent_div_16_Template_mat_calendar_selectedChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r25.startDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 38)(10, "div", 39)(11, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " Time (24hr): \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 39)(14, "ngb-timepicker", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function StartReportComponent_div_16_Template_ngb_timepicker_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r27.startTime = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 2)(17, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, " Where will you fish? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 13)(20, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, " Management Area(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, " (Do not include sub-area) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, StartReportComponent_div_16_mat_error_26_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("selected", ctx_r8.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("spinners", false)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](5, _c1))("ngModel", ctx_r8.startTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.startForm.invalid);
  }
}
function StartReportComponent_div_17_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StartReportComponent_div_17_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StartReportComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Please provide onboard contact details. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 13)(5, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Contact Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-form-field", 32)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, StartReportComponent_div_17_mat_error_11_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 13)(13, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "mat-form-field", 32, 43)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, " Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "app-tel-input", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, " phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, StartReportComponent_div_17_mat_error_23_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.startForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.startForm.invalid);
  }
}
function StartReportComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Would you like to add a comment? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 13)(5, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Comments (optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-form-field", 47)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " Comments... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "textarea", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function StartReportComponent_div_19_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StartReportComponent_div_19_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r33.startForm.get("gear")) == null ? null : tmp_0_0.value, " ");
  }
}
function StartReportComponent_div_19_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StartReportComponent_div_19_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", (tmp_0_0 = ctx_r35.startForm.get("master")) == null ? null : tmp_0_0.value, " (FIN: ", (tmp_0_0 = ctx_r35.startForm.get("fin")) == null ? null : tmp_0_0.value, ") ");
  }
}
function StartReportComponent_div_19_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StartReportComponent_div_19_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r37.startForm.get("vessel")) == null ? null : tmp_0_0.value, " ");
  }
}
function StartReportComponent_div_19_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StartReportComponent_div_19_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r39.startForm.get("licenseArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function StartReportComponent_div_19_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StartReportComponent_div_19_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r41.startForm.get("managementArea")) == null ? null : tmp_0_0.value, " ");
  }
}
function StartReportComponent_div_19_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " [Required] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StartReportComponent_div_19_span_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", (tmp_0_0 = ctx_r43.startForm.get("name")) == null ? null : tmp_0_0.value, ", ", (tmp_0_0 = ctx_r43.startForm.get("phoneNum")) == null ? null : tmp_0_0.value, " ");
  }
}
function StartReportComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "div", 2)(2, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Is all information complete and ready to be submitted to DFO? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 13)(5, "h6", 31)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " Gear Type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, StartReportComponent_div_19_span_8_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, StartReportComponent_div_19_span_9_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 13)(11, "h6", 31)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, " Vessel Master: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, StartReportComponent_div_19_span_14_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, StartReportComponent_div_19_span_15_Template, 2, 2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 13)(17, "h6", 31)(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, " Vessel: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, StartReportComponent_div_19_span_20_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, StartReportComponent_div_19_span_21_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 13)(23, "h6", 31)(24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, " License Area: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, StartReportComponent_div_19_span_26_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, StartReportComponent_div_19_span_27_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 13)(29, "h6", 31)(30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, " Start Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](33, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 13)(35, "h6", 31)(36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, " Start Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](39, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 13)(41, "h6", 31)(42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, " Management Area: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, StartReportComponent_div_19_span_44_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, StartReportComponent_div_19_span_45_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 13)(47, "h6", 31)(48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, " Contact Details: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, StartReportComponent_div_19_span_50_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, StartReportComponent_div_19_span_51_Template, 2, 2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 13)(53, "h6", 31)(54, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, " Comments: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    let tmp_14_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11.gearInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r11.gearInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11.masterInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r11.masterInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11.vesselInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r11.vesselInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11.licenseAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r11.licenseAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](33, 15, ctx_r11.startDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](39, 17, ctx_r11.startDate, "h:mm a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r11.managementAreaInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11.contactDetailsInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r11.contactDetailsInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_14_0 = ctx_r11.startForm.get("comments")) == null ? null : tmp_14_0.value, " ");
  }
}
function StartReportComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StartReportComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Send to DFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
class StartReportComponent {
  constructor(dialog, auth, router, toastr, onlineStatusService, authenticationService) {
    this.dialog = dialog;
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    // data preambles
    this.currTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_1__.Trip();
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_2__.UserData('', '');
    this.gears = [];
    this.userVessels = [];
    this.licenseAreas = [];
    this.emptyGear = new _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_3__.Gear('', '');
    this.emptyVessel = new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_4__.VesselData('', '');
    this.emptyArea = new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_5__.LicenseArea('', '');
    this.prevTrips = [];
    // report data
    this.startForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormGroup({
      gear: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.emptyGear, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      vessel: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.emptyVessel, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      licenseArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.emptyArea, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      master: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      fin: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      managementArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      phoneNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(new _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_7__.Tel('', '', ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, (0,_data_models_validator_model__WEBPACK_IMPORTED_MODULE_8__.generalValidator)()]),
      comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('') // page 7
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
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_12__.OnlineStatusType.OFFLINE) {
      let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getCurrUsername();
      if (currUsername) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOffline(currUsername).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
          if (error) {
            this.authenticationService.userDataLogout(error);
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.authenticationService.userDataLogout("User ID or Email not defined");
          } else {
            this.userDetails = currUser;
            this.initialize();
          }
        });
      } else {
        this.authenticationService.userDataLogout("Username not saved to storage");
      }
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.error;
                  if (error) {
                    this.authenticationService.userDataLogout(error);
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.authenticationService.userDataLogout("User ID or Email is undefined");
                  } else {
                    this.userDetails = currUser;
                    this.initialize();
                  }
                });
              } else {
                this.authenticationService.userDataLogout("User ID or email is undefined");
              }
            } else {
              this.authenticationService.userDataLogout("Cannot get user data");
            }
          });
        } else {
          this.authenticationService.userDataLogout("Not authenticated");
        }
      });
    }
  }
  // initialize the data
  initialize() {
    // get all gears, vessels, license areas
    this.gears = this.userDetails.gears;
    this.userVessels = this.userDetails.vessels;
    this.licenseAreas = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.getLicenseAreas();
    // initialize form upon first entry, or populate with completed fishing report
    this.currTrip = this.userDetails.currTrip;
    let currGear = this.emptyGear;
    let currVessel = this.emptyVessel;
    let currArea = this.emptyArea;
    let currMaster = this.currTrip.master;
    let currFin = this.currTrip.fin;
    let currManagementArea = this.currTrip.startFishingReport.managementArea;
    let currName = this.currTrip.contactName;
    let currPhoneNum = this.currTrip.phoneNum;
    let currComments = this.currTrip.startFishingReport.comments;
    // set the start time to the current time
    this.startTime = {
      hour: this.startDate.getHours(),
      minute: this.startDate.getMinutes()
    };
    // fishing report already has gear, vessel and area data
    if (this.currTrip.startFishingReport.isInProgress || this.currTrip.startFishingReport.isComplete) {
      currGear = this.setSelectedGear(new _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_3__.Gear('', ''));
      currVessel = this.setSelectedVessel(new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_4__.VesselData('', ''));
      currArea = this.setSelectedArea(new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_5__.LicenseArea('', ''));
    }
    // fishing report does not yet have gear, vessel or area data
    else {
      currGear = this.gears?.length ? this.gears[0] : this.emptyGear;
      currVessel = this.userVessels?.length ? this.userVessels[0] : this.emptyVessel;
      currArea = this.licenseAreas?.length ? this.licenseAreas[0] : this.emptyArea;
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
    // clear old data from the previous trip and save current trip
    this.clearTripData();
    this.saveCurrTrip();
    _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
      this.numPages = 7;
      this.spinnerIncrement = 100 / this.numPages;
      this.toNextPage();
    });
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
          let currVessel = new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_4__.VesselData('', '');
          currVessel = this.setSelectedVessel(currVessel);
          this.startForm.patchValue({
            vessel: currVessel
          });
          break;
        // to license area page
        case 2:
          let currArea = new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_5__.LicenseArea('', '');
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
      _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
        this.incrementPage();
      });
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
      this.saveCurrTrip();
      _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
        this.toHome();
      });
    } else {
      switch (this.currPage) {
        // to gear page
        case 2:
          let currGear = new _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_3__.Gear('', '');
          currGear = this.setSelectedGear(currGear);
          this.startForm.patchValue({
            gear: currGear
          });
          break;
        // to vessel page
        case 3:
          let currVessel = new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_4__.VesselData('', '');
          currVessel = this.setSelectedVessel(currVessel);
          this.startForm.patchValue({
            vessel: currVessel
          });
          break;
        // to license area page
        case 4:
          let currArea = new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_5__.LicenseArea('', '');
          currArea = this.setSelectedArea(currArea);
          this.startForm.patchValue({
            licenseArea: currArea
          });
          break;
        default:
          break;
      }
      this.saveCurrTrip();
      _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
        this.currPage--;
        this.spinnerProgress -= this.spinnerIncrement;
      });
    }
  }
  // save the current trip & Start Fishing Report information
  saveCurrTrip() {
    this.currTrip.gear = this.startForm.get('gear')?.value;
    this.currTrip.vessel = this.startForm.get('vessel')?.value;
    this.currTrip.licenseArea = this.startForm.get('licenseArea')?.value;
    this.currTrip.master = this.startForm.get('master')?.value;
    this.currTrip.fin = this.startForm.get('fin')?.value;
    this.currTrip.startFishingReport.startDate = this.startDate;
    this.currTrip.startFishingReport.managementArea = this.startForm.get('managementArea')?.value;
    this.currTrip.contactName = this.startForm.get('name')?.value;
    this.currTrip.phoneNum = this.startForm.get('phoneNum')?.value;
    this.currTrip.startFishingReport.comments = this.startForm.get('comments')?.value;
    this.currTrip.startFishingReport.submissionDate = new Date(); // get the current date
    this.userDetails.currTrip = this.currTrip;
  }
  clearTripData() {
    this.currTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_1__.Trip(); //create a new trip
    this.userDetails.currTrip = this.currTrip;
  }
  // sets flag in trip data if this trip may need an offload report
  determineOffloadReport() {
    // we only need an offload report if the trip is Seine in Area B, or Gill Net in Area C, D, or, E
    let licenseName = this.currTrip.licenseArea.licenseName;
    let gearName = this.currTrip.gear.name;
    let isSeineOffload = gearName === 'Seine' && licenseName === 'B';
    let isGillOffload = gearName === 'Gill Net' && (licenseName === 'C' || licenseName === 'D' || licenseName === 'E');
    this.currTrip.offloadNeeded = isSeineOffload || isGillOffload;
    this.userDetails.currTrip = this.currTrip; // save flag changes
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
    const dialogRef = this.dialog.open(_dialogs_add_vessel_dialog_add_vessel_dialog_component__WEBPACK_IMPORTED_MODULE_6__.AddVesselDialogComponent, {
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
          let newVessel = new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_4__.VesselData(result.vesselName, result.vesselNumber, true);
          this.startForm.patchValue({
            vessel: newVessel
          });
          this.userDetails.vessels.push(newVessel);
          _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
            this.toNextPage();
          });
        }
      }
    });
  }
  // check if gear value is invalid
  gearInvalid() {
    let gear = this.startForm.get('gear')?.value;
    return !gear || !gear.isValid();
  }
  // check if master values are invalid
  masterInvalid() {
    return this.startForm.get('master')?.errors?.required || this.startForm.get('fin')?.errors?.required;
  }
  // check if management area is invalid
  vesselInvalid() {
    let vessel = this.startForm.get('vessel')?.value;
    return !vessel || !vessel.isValid();
  }
  // check if license area is invalid
  licenseAreaInvalid() {
    let licenseArea = this.startForm.get('licenseArea')?.value;
    return !licenseArea || !licenseArea.isValid();
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
    if (this.startForm.valid && !this.gearInvalid() && !this.vesselInvalid() && !this.licenseAreaInvalid()) {
      this.currTrip.startFishingReport.isInProgress = false;
      this.currTrip.startFishingReport.isComplete = true;
      this.saveCurrTrip(); // update the user's active trip
      this.determineOffloadReport(); // check if we will need an offload report for this trip
      this.updateHomepage(); // update the user's active homepage
      _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.saveUser(this.userDetails).then(() => {
        this.router.navigate(['submitted-report'], {
          state: {
            name: 'Trip'
          }
        });
      });
    } else {
      this.toastr.error("Not all required fields filled", "Invalid form");
    }
  }
  updateHomepage() {
    this.userDetails.currHomepage = 'active-trip-home';
  }
  // go back to the home screen with no active trip
  toHome() {
    this.router.navigate(['no-trip-home']);
  }
}
StartReportComponent.ɵfac = function StartReportComponent_Factory(t) {
  return new (t || StartReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_14__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_12__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__.AuthenticationService));
};
StartReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: StartReportComponent,
  selectors: [["app-start-report"]],
  viewQuery: function StartReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.telInput = _t.first);
    }
  },
  decls: 34,
  vars: 15,
  consts: [[1, "container", "report-container"], [1, "container", 2, "padding-top", "20px"], ["align", "center", 1, "row"], [4, "ngIf"], [1, "col-5"], [1, "col-2"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value", 4, "ngIf"], ["style", "color: #3ebfb9", 4, "ngIf"], [3, "formGroup"], ["class", "container details", 4, "ngIf"], [1, "row", "bottom-buttons"], [1, "col-1"], [1, "col-4"], [1, "row"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-blue", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"], [1, "text-muted"], ["mode", "determinate", 3, "diameter", "strokeWidth", "value"], [2, "color", "#3ebfb9"], [1, "container", "details"], [1, "blue-heading-title"], [1, "blue-heading-subtitle"], [1, "col-10"], ["formControlName", "gear", 1, "radio"], [3, "value", "checked", 4, "ngFor", "ngForOf"], [3, "value", "checked"], [1, "text-muted", "font-list"], ["formControlName", "vessel", 1, "radio"], ["align", "center", 1, "row", "add-item"], ["mat-raised-button", "", "type", "button", 1, "fishing-button-red", 3, "click"], ["formControlName", "licenseArea", 1, "radio"], [1, "blue-label"], ["appearance", "outline"], ["matInput", "", "formControlName", "master"], ["matInput", "", "formControlName", "fin"], [1, "col-8"], [1, "demo-inline-calendar-card", 2, "margin-top", "10%"], [3, "selected", "selectedChange"], [1, "outer"], [1, "inner"], [1, "time-picker", 3, "spinners", "ngModelOptions", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "e.g. Area1, Area2", "formControlName", "managementArea"], ["matInput", "", "formControlName", "name"], ["telField", ""], ["formControlName", "phoneNum"], ["telInput", ""], ["matSuffix", ""], ["appearance", "fill"], ["matInput", "", "rows", "9", "formControlName", "comments"], ["class", "invalid-field", 4, "ngIf"], [1, "invalid-field"]],
  template: function StartReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, StartReportComponent_h6_3_Template, 3, 2, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, StartReportComponent_h6_4_Template, 3, 0, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, StartReportComponent_mat_spinner_8_Template, 1, 3, "mat-spinner", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, StartReportComponent_mat_icon_9_Template, 2, 0, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, StartReportComponent_div_12_Template, 13, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, StartReportComponent_div_13_Template, 18, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, StartReportComponent_div_14_Template, 10, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, StartReportComponent_div_15_Template, 20, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, StartReportComponent_div_16_Template, 27, 6, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, StartReportComponent_div_17_Template, 24, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, StartReportComponent_div_18_Template, 11, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, StartReportComponent_div_19_Template, 57, 20, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 12)(23, "div", 13)(24, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StartReportComponent_Template_button_click_24_listener() {
        return ctx.toPreviousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 12)(29, "div", 13)(30, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StartReportComponent_Template_button_click_30_listener() {
        return ctx.toNextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, StartReportComponent_span_31_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, StartReportComponent_span_32_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.startForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage === 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage === 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage === 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage === 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage <= ctx.numPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currPage > ctx.numPages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCard, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatCalendar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatSuffix, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinner, _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbTimepicker, _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_7__.TelInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe],
  styles: [".report-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.mat-mdc-progress-spinner[_ngcontent-%COMP%] {\r\n  --mdc-circular-progress-active-indicator-color: #3ebfb9 !important;\r\n}\r\n\r\n\r\n.mat-mdc-radio-button.mat-accent[_ngcontent-%COMP%] {\r\n  --mdc-radio-selected-focus-icon-color: #3ebfb9;\r\n  --mdc-radio-selected-hover-icon-color: #3ebfb9;\r\n  --mdc-radio-selected-icon-color: #3ebfb9;\r\n  --mdc-radio-selected-pressed-icon-color: #3ebfb9;\r\n  --mat-mdc-radio-checked-ripple-color: #3ebfb9;\r\n}\r\n\r\n  .mat-mdc-text-field-wrapper {\r\n  background-color: whitesmoke !important;\r\n}\r\n\r\n\r\n.radio[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  margin-top: 1%;\r\n}\r\n\r\n\r\n.blue-heading-title[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  font-weight: bold;\r\n  margin-top: 5%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\n\r\n.blue-heading-subtitle[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  margin-top: 5%;\r\n  margin-bottom: 1%;\r\n  padding-left: 10%;\r\n}\r\n\r\n\r\n.blue-label[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  margin-top: 5%;\r\n}\r\n\r\n\r\n.add-item[_ngcontent-%COMP%] {\r\n  margin-top: 1%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\n\r\n.fishing-button-blue[_ngcontent-%COMP%] {\r\n  background-color: #005d87 !important;\r\n  color: white !important;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.fishing-button-red[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61 !important;\r\n  color: white !important;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.time-picker[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n\r\n.font-list[_ngcontent-%COMP%] {\r\n  font-size: medium;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.bottom-buttons[_ngcontent-%COMP%] {\r\n  margin-top: auto;\r\n  padding-bottom: 2%;\r\n}\r\n\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  margin-bottom: 5%;\r\n}\r\n\r\n\r\n.invalid-field[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\n\r\n\r\n   .mat-calendar-body-selected {\r\n    background-color: #3ebfb9;\r\n}\r\n\r\n.outer[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.inner[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9zdGFydC1yZXBvcnQvc3RhcnQtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCO0FBQzNCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0Usa0VBQWtFO0FBQ3BFOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLDhDQUE4QztFQUM5Qyw4Q0FBOEM7RUFDOUMsd0NBQXdDO0VBQ3hDLGdEQUFnRDtFQUNoRCw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsVUFBVTtBQUNaOztBQUVBLHFCQUFxQjs7QUFFckI7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBPdGhlciBjb250YWluZXIgc3R5bGVzICovXHJcbi5yZXBvcnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiBQcm9ncmVzcyBzcGlubmVyIGNvbG9yICovXHJcbi5tYXQtbWRjLXByb2dyZXNzLXNwaW5uZXIge1xyXG4gIC0tbWRjLWNpcmN1bGFyLXByb2dyZXNzLWFjdGl2ZS1pbmRpY2F0b3ItY29sb3I6ICMzZWJmYjkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogUmFkaW8gYnV0dG9uIGNvbG9ycyAqL1xyXG4ubWF0LW1kYy1yYWRpby1idXR0b24ubWF0LWFjY2VudCB7XHJcbiAgLS1tZGMtcmFkaW8tc2VsZWN0ZWQtZm9jdXMtaWNvbi1jb2xvcjogIzNlYmZiOTtcclxuICAtLW1kYy1yYWRpby1zZWxlY3RlZC1ob3Zlci1pY29uLWNvbG9yOiAjM2ViZmI5O1xyXG4gIC0tbWRjLXJhZGlvLXNlbGVjdGVkLWljb24tY29sb3I6ICMzZWJmYjk7XHJcbiAgLS1tZGMtcmFkaW8tc2VsZWN0ZWQtcHJlc3NlZC1pY29uLWNvbG9yOiAjM2ViZmI5O1xyXG4gIC0tbWF0LW1kYy1yYWRpby1jaGVja2VkLXJpcHBsZS1jb2xvcjogIzNlYmZiOTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBSYWRpbyBidXR0b25zICovXHJcbi5yYWRpbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG59XHJcblxyXG4vKiBUaXRsZSB0ZXh0ICovXHJcbi5ibHVlLWhlYWRpbmctdGl0bGUge1xyXG4gIGNvbG9yOiAjMDA1ZDg3O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG59XHJcblxyXG4vKiBTdWJ0aXRsZSB0ZXh0ICovXHJcbi5ibHVlLWhlYWRpbmctc3VidGl0bGUge1xyXG4gIGNvbG9yOiAjMDA1ZDg3O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG59XHJcblxyXG4vKiBCbHVlIHRleHQgZm9yIGZpZWxkIGxhYmVscyAqL1xyXG4uYmx1ZS1sYWJlbCB7XHJcbiAgY29sb3I6ICMwMDVkODc7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi8qIEFkZCB0cmlwIElEIG9yIHZlc3NlbCAqL1xyXG4uYWRkLWl0ZW0ge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG59XHJcblxyXG4vKiBCbHVlIGJ1dHRvbnMgKi9cclxuLmZpc2hpbmctYnV0dG9uLWJsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkODcgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogUmVkIGJ1dHRvbnMgKi9cclxuLmZpc2hpbmctYnV0dG9uLXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmY2MSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBTdHlsaXphdGlvbiBmb3IgdGhlIHRpbWUgcGlja2VyICovXHJcbi50aW1lLXBpY2tlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4vKiBGb250IGZvciBsaXN0ICovXHJcbi5mb250LWxpc3Qge1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBObyBhbmQgWWVzIGJ1dHRvbnMgKi9cclxuLmJvdHRvbS1idXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG5cclxuLyogQWxsIGRldGFpbCBwYWdlcyAqL1xyXG4uZGV0YWlscyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi8qIElmIHZhbHVlIGlzIGludmFsaWQgKi9cclxuLmludmFsaWQtZmllbGQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi8qIENhbGVuZGFyIFN0eWxpbmcgKi9cclxuXHJcbjo6bmctZGVlcCAgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZWJmYjk7XHJcbn1cclxuXHJcbi5vdXRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmlubmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 782:
/*!************************************************************************!*\
  !*** ./src/app/reports/submitted-report/submitted-report.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmittedReportComponent": () => (/* binding */ SubmittedReportComponent)
/* harmony export */ });
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-models/user-models/user-data.model */ 426);
/* harmony import */ var src_app_data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data-models/trip-models/trip.model */ 5636);
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local-storage.service */ 8345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);











class SubmittedReportComponent {
  constructor(auth, router, toastr, onlineStatusService, authenticationService) {
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.authenticationService = authenticationService;
    // data preambles
    this.reportName = "";
    this.userDetails = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_0__.UserData('', '');
    this.currTrip = new src_app_data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_1__.Trip();
    // get report name for submission success message
    this.reportName = this.router.getCurrentNavigation()?.extras.state?.name;
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_4__.OnlineStatusType.OFFLINE) {
      let currUsername = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService.getCurrUsername();
      if (currUsername) {
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService.getUserOffline(currUsername).then(() => {
          let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService.error;
          if (error) {
            this.authenticationService.userDataLogout(error);
          }
          let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService.currUser;
          if (!currUser || !currUser.userID || !currUser.userEmail) {
            this.authenticationService.userDataLogout("User ID or Email not defined");
          } else {
            this.userDetails = currUser;
          }
        });
      } else {
        this.authenticationService.userDataLogout("Username not saved to storage");
      }
    } else {
      this.auth.isAuthenticated$.subscribe(authd => {
        if (authd) {
          this.auth.user$.subscribe(user => {
            if (user) {
              let id = user.sub;
              let email = user.email;
              if (id && email) {
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService.getUserOnline(id, email).then(() => {
                  let error = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService.error;
                  if (error) {
                    this.authenticationService.userDataLogout(error);
                  }
                  let currUser = _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService.currUser;
                  if (!currUser || !currUser.userID || !currUser.userEmail) {
                    this.authenticationService.userDataLogout("User ID or Email is undefined");
                  } else {
                    this.userDetails = currUser;
                  }
                });
              } else {
                this.authenticationService.userDataLogout("User ID or email is undefined");
              }
            } else {
              this.authenticationService.userDataLogout("Cannot get user data");
            }
          });
        } else {
          this.authenticationService.userDataLogout("Not authenticated");
        }
      });
    }
  }
  // go back to the home screen
  toHome() {
    this.router.navigate([this.userDetails.currHomepage]);
  }
}
SubmittedReportComponent.ɵfac = function SubmittedReportComponent_Factory(t) {
  return new (t || SubmittedReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_4__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService));
};
SubmittedReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SubmittedReportComponent,
  selectors: [["app-submitted-report"]],
  decls: 20,
  vars: 1,
  consts: [[1, "container", "report-container"], ["align", "center", 1, "row"], [1, "blue-heading-title"], [1, "row", "bottom-buttons"], [1, "col-5"], [1, "col-2"], [1, "row"], ["mat-raised-button", "", "type", "submit", 1, "fishing-button-red", 3, "click"]],
  template: function SubmittedReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Report Submitted! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1)(5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Please refer to the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Records ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " page to ensure the report has been received and to view your ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 5)(15, "div", 6)(16, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubmittedReportComponent_Template_button_click_16_listener() {
        return ctx.toHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " OK ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.reportName, " Confirmation Number. ");
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton],
  styles: [".report-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.blue-heading-title[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  font-weight: bold;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n\r\n.fishing-button-red[_ngcontent-%COMP%] {\r\n  background-color: #ff6f61 !important;\r\n  color: white !important;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.bottom-buttons[_ngcontent-%COMP%] {\r\n  padding-bottom: 2%\r\n}\r\n\r\n\r\np[_ngcontent-%COMP%] {\r\n  color: #005d87;\r\n  margin-bottom: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0cy9zdWJtaXR0ZWQtcmVwb3J0L3N1Ym1pdHRlZC1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0U7QUFDRjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLyogT3RoZXIgY29udGFpbmVyIHN0eWxlcyAqL1xyXG4ucmVwb3J0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogVGl0bGUgdGV4dCAqL1xyXG4uYmx1ZS1oZWFkaW5nLXRpdGxlIHtcclxuICBjb2xvcjogIzAwNWQ4NztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLyogUmVkIGJ1dHRvbnMgKi9cclxuLmZpc2hpbmctYnV0dG9uLXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmY2MSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBObyBhbmQgWWVzIGJ1dHRvbnMgKi9cclxuLmJvdHRvbS1idXR0b25zIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMiVcclxufVxyXG5cclxuLyogUGFyYWdyYXBoIHRleHQgKi9cclxucCB7XHJcbiAgY29sb3I6ICMwMDVkODc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7053:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var ngx_online_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-online-status */ 9616);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.service */ 8345);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);








class AuthenticationService {
  constructor(auth, router, toastr, onlineStatusService, document) {
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
    this.onlineStatusService = onlineStatusService;
    this.document = document;
  }
  // if a user data error occurs, log out of the app
  userDataLogout(header) {
    this.toastr.error("Returning to login...", header);
    this.logout();
  }
  // log out of account and go back to login screen
  logout() {
    _local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.clearCurrUser();
    if (this.onlineStatusService.getStatus() === ngx_online_status__WEBPACK_IMPORTED_MODULE_1__.OnlineStatusType.OFFLINE) {
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
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
  return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_online_status__WEBPACK_IMPORTED_MODULE_1__.OnlineStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT));
};
AuthenticationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthenticationService,
  factory: AuthenticationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8345:
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var pouchdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pouchdb */ 1149);
/* harmony import */ var _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-models/user-models/user-data.model */ 426);
/* harmony import */ var _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-models/user-models/vessel-data.model */ 504);
/* harmony import */ var _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-models/trip-models/license-area.model */ 634);
/* harmony import */ var _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-models/catch-table-models/species-data.model */ 439);
/* harmony import */ var _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data-models/trip-models/gear-models/gear.model */ 9793);
/* harmony import */ var _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data-models/trip-models/trip.model */ 5636);
/* harmony import */ var _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tel-input/tel-input.component */ 2823);
/* harmony import */ var _data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data-models/trip-models/gear-models/net.model */ 786);
/* harmony import */ var _data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data-models/catch-table-models/table-rules.model */ 9356);
/* harmony import */ var _data_models_report_models_start_report_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data-models/report-models/start-report.model */ 3056);
/* harmony import */ var _data_models_report_models_end_report_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data-models/report-models/end-report.model */ 3304);
/* harmony import */ var _data_models_report_models_cancel_report_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data-models/report-models/cancel-report.model */ 9646);
/* harmony import */ var _data_models_report_models_pause_report_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../data-models/report-models/pause-report.model */ 7169);
/* harmony import */ var _data_models_report_models_daily_catch_report_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../data-models/report-models/daily-catch-report.model */ 388);
/* harmony import */ var _data_models_report_models_offload_report_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../data-models/report-models/offload-report.model */ 8796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);

















class LocalStorageService {
  constructor() {}
  // save data to local storage through [key, value] pair
  static saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  // get local storage data from key
  static getData(key) {
    let item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }
  // open PouchDB
  static openPouchDB() {
    LocalStorageService.storage = new pouchdb__WEBPACK_IMPORTED_MODULE_0__["default"]('srif-pouchdb', {
      revs_limit: 500,
      auto_compaction: true
    });
  }
  // get current user or create new user in PouchDB online
  static getUserOnline(id, email) {
    return new Promise(res => {
      LocalStorageService.storage.get(email).then(doc => {
        console.log("User:", doc);
        LocalStorageService.validateGetUserOnline(doc, id, email);
        res(true);
      }).catch(function (err) {
        LocalStorageService.error = err.name;
        console.log("Error:", LocalStorageService.error);
        if (err.name === 'not_found') {
          console.log("User not found, creating user...");
          let newUser = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData(id, email);
          newUser.gears = LocalStorageService.setGears();
          newUser.currHomepage = LocalStorageService.setHomepage();
          LocalStorageService.saveCurrUsername(email);
          LocalStorageService.currUser = newUser;
          LocalStorageService.storage.put({
            _id: email,
            user: newUser
          });
          res(true);
        }
      });
    });
  }
  // get current user or create new user in PouchDB
  static getUserOffline(email) {
    return new Promise(res => {
      LocalStorageService.storage.get(email).then(doc => {
        console.log("User:", doc);
        LocalStorageService.validateGetUserOffline(doc);
        res(true);
      }).catch(function (err) {
        LocalStorageService.error = err.name;
        console.log("Error:", LocalStorageService.error);
        if (err.name === 'not_found') {
          console.log("User not found");
          LocalStorageService.currUser = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
          res(false);
        }
      });
    });
  }
  // ensure that user data exists
  static validateGetUserOnline(doc, id, email) {
    let user = doc.user;
    let thisUser = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
    if (!user || !user.userID || !user.userEmail) {
      console.log("User data corrupted... creating new user data");
      thisUser.userID = id;
      thisUser.userEmail = email;
      thisUser.gears = LocalStorageService.setGears();
      thisUser.currHomepage = LocalStorageService.setHomepage();
      LocalStorageService.saveCurrUsername(thisUser.userEmail);
      LocalStorageService.currUser = thisUser;
      doc.user = thisUser;
      LocalStorageService.storage.put(doc);
      return;
    }
    // get user data
    LocalStorageService.parseUserData(user, thisUser);
  }
  // ensure that user data exists
  static validateGetUserOffline(doc) {
    let user = doc.user;
    let thisUser = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
    if (!user || !user.userID || !user.userEmail) {
      console.log("User data corrupted");
      LocalStorageService.currUser = thisUser;
      return;
    }
    // get user data
    LocalStorageService.parseUserData(user, thisUser);
  }
  // parse all of the possible data from PouchDB into a UserData object
  static parseUserData(user, thisUser) {
    thisUser.userID = user.userID;
    thisUser.userEmail = user.userEmail;
    thisUser.firstName = user.firstName ?? '';
    thisUser.lastName = user.lastName ?? '';
    thisUser.contactEmail = user.contactEmail ?? '';
    thisUser.address = user.address ?? '';
    thisUser.city = user.city ?? '';
    thisUser.postalCode = user.postalCode ?? '';
    thisUser.phoneNum = LocalStorageService.validatePhoneNum(user.phoneNum);
    thisUser.gears = LocalStorageService.validateGears(user.gears);
    thisUser.vessels = LocalStorageService.validateVessels(user.vessels);
    thisUser.currTrip = LocalStorageService.validateCurrTrip(user.currTrip);
    thisUser.currTrip.startFishingReport = LocalStorageService.validateStartFishingReport(user.currTrip.startFishingReport);
    thisUser.prevTrips = LocalStorageService.validatePrevTrips(user.prevTrips);
    thisUser.nets = LocalStorageService.validateNets(user.nets);
    thisUser.currHomepage = LocalStorageService.validateHomepage(user.currHomepage);
    LocalStorageService.saveCurrUsername(thisUser.userEmail);
    LocalStorageService.currUser = thisUser;
    LocalStorageService.error = '';
  }
  // save user data to PouchDB
  static saveUser(userData) {
    return new Promise(res => {
      let email = userData.userEmail;
      LocalStorageService.storage.get(email).then(doc => {
        console.log("User:", doc);
        LocalStorageService.validateSaveUser(doc, userData);
        res(true);
      }).catch(function (err) {
        LocalStorageService.error = err.name;
        console.log("Error:", LocalStorageService.error);
        if (err.name === 'not_found') {
          console.log("User not found, creating user...");
          LocalStorageService.storage.put({
            _id: email,
            user: userData
          });
          res(true);
        }
      });
    });
  }
  // ensure that user data exists
  static validateSaveUser(doc, userData) {
    LocalStorageService.saveCurrUsername(userData.userEmail);
    LocalStorageService.currUser = userData;
    doc.user = userData;
    LocalStorageService.storage.put(doc);
  }
  // save the current user Auth0 email for offline data retrieval
  static saveCurrUsername(username) {
    LocalStorageService.saveData('username', username);
  }
  // get the current user ID for offline data retrieval
  static getCurrUsername() {
    return LocalStorageService.getData('username');
  }
  // clear current username from local storage
  static clearCurrUser() {
    LocalStorageService.currUser = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
    LocalStorageService.saveData('username', '');
  }
  // check if homepage is defined
  static validateHomepage(homepage) {
    if (!homepage) {
      return LocalStorageService.setHomepage();
    }
    return homepage;
  }
  // check if the user phone number is defined
  static validatePhoneNum(phoneNum) {
    if (!phoneNum) {
      return new _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_7__.Tel('', '', '');
    }
    return LocalStorageService.getPhoneNum(phoneNum);
  }
  // check if the user phone number is defined
  static validateDate(date) {
    return new Date(date ?? new Date());
  }
  // check if user gears are defined
  static validateGears(gears) {
    // if gears do not exist, set the default ones
    if (!gears) {
      return LocalStorageService.setGears();
    }
    let userGears = [];
    for (let gear of gears) {
      userGears.push(new _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_5__.Gear(gear.name, gear.logbookID, gear.isChecked));
    }
    return userGears;
  }
  // check if user vessels are defined
  static validateVessels(vessels) {
    // if vessels do not exist, return an empty array
    if (!vessels) {
      return [];
    }
    let userVessels = [];
    for (let vessel of vessels) {
      userVessels.push(new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_2__.VesselData(vessel.vesselName, vessel.vesselCoastNumber, vessel.isChecked));
    }
    return userVessels;
  }
  // check if user nets are defined
  static validateNet(net) {
    // if nets do not exist, set the default ones
    if (!net) {
      return new _data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_8__.Net('', '', '', '', '', '', '', '', '');
    }
    return new _data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_8__.Net(net.netType ?? '', net.netName ?? '', net.length ?? '', net.weedlineDepth ?? '', net.weedlineDepthUnits ?? '', net.hangRatio ?? '', net.meshSize ?? '', net.meshSizeUnits ?? '', net.numMeshes ?? '', net.numStrands ?? '', net.isChecked ?? false);
  }
  // check if user nets are defined
  static validateNets(nets) {
    // if nets do not exist, set the default ones
    if (!nets) {
      return [];
    }
    let userNets = [];
    for (let net of nets) {
      userNets.push(new _data_models_trip_models_gear_models_net_model__WEBPACK_IMPORTED_MODULE_8__.Net(net.netType ?? '', net.netName ?? '', net.length ?? '', net.weedlineDepth ?? '', net.weedlineDepthUnits ?? '', net.hangRatio ?? '', net.meshSize ?? '', net.meshSizeUnits ?? '', net.numMeshes ?? '', net.numStrands ?? '', net.isChecked ?? false));
    }
    return userNets;
  }
  // check if species data list is defined
  static validateSpeciesData(speciesDataList) {
    // if list does not exist, set an empty array
    if (!speciesDataList) {
      return [];
    }
    let thisSpeciesDataList = [];
    for (let speciesData of speciesDataList) {
      let species = new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData(speciesData.speciesName ?? '');
      species.kept = speciesData.kept ?? 0;
      species.released = speciesData.released ?? 0;
      species.offloadWeight = speciesData.offloadWeight ?? 0;
      species.offloadPieces = speciesData.offloadPieces ?? 0;
      thisSpeciesDataList.push(species);
    }
    return thisSpeciesDataList;
  }
  // check if the user's Start Fishing Report is defined
  static validateStartFishingReport(startReport) {
    // if it is not defined, set a new one
    if (!startReport) {
      return LocalStorageService.setStartReport();
    }
    let userStartReport = new _data_models_report_models_start_report_model__WEBPACK_IMPORTED_MODULE_10__.StartReport();
    userStartReport.startDate = LocalStorageService.validateDate(startReport.startDate);
    userStartReport.managementArea = startReport.managementArea ?? '';
    userStartReport.comments = startReport.comments ?? '';
    userStartReport.confirmationNumber = startReport.confirmationNumber ?? '';
    userStartReport.submissionDate = LocalStorageService.validateDate(startReport.submissionDate);
    userStartReport.isComplete = startReport.isComplete ?? false;
    userStartReport.isInProgress = startReport.isInProgress ?? false;
    userStartReport.isTransmitted = startReport.isTransmitted ?? false;
    return userStartReport;
  }
  // check if the user's End Fishing Report is defined
  static validateEndFishingReport(endReport) {
    // if it is not defined, set a new one
    if (!endReport) {
      return LocalStorageService.setEndReport();
    }
    let userEndReport = new _data_models_report_models_end_report_model__WEBPACK_IMPORTED_MODULE_11__.EndReport();
    userEndReport.endDate = LocalStorageService.validateDate(endReport.endDate);
    userEndReport.managementArea = endReport.managementArea ?? '';
    userEndReport.comments = endReport.comments ?? '';
    userEndReport.confirmationNumber = endReport.confirmationNumber ?? '';
    userEndReport.submissionDate = LocalStorageService.validateDate(endReport.submissionDate);
    userEndReport.arrivalSite = endReport.arrivalSite ?? '';
    userEndReport.isComplete = endReport.isComplete ?? false;
    userEndReport.isTransmitted = endReport.isTransmitted ?? false;
    return userEndReport;
  }
  // check if the user's Cancel Fishing Report is defined
  static validateCancelFishingReport(cancelReport) {
    // if it is not defined, set a new one
    if (!cancelReport) {
      return LocalStorageService.setCancelReport();
    }
    let userCancelReport = new _data_models_report_models_cancel_report_model__WEBPACK_IMPORTED_MODULE_12__.CancelReport();
    userCancelReport.confirmationNumber = cancelReport.confirmationNumber ?? '';
    userCancelReport.submissionDate = LocalStorageService.validateDate(cancelReport.submissionDate);
    userCancelReport.isComplete = cancelReport.isComplete ?? false;
    userCancelReport.isTransmitted = cancelReport.isTransmitted ?? false;
    return userCancelReport;
  }
  // check if the user's Pause Fishing Reports are defined
  static validatePauseFishingReports(pauseReports) {
    // if it is not defined, set a new one
    if (!pauseReports) {
      return [];
    }
    let userPauseReports = [];
    for (let pauseReport of pauseReports) {
      let userPauseReport = new _data_models_report_models_pause_report_model__WEBPACK_IMPORTED_MODULE_13__.PauseReport();
      userPauseReport.pauseDate = LocalStorageService.validateDate(pauseReport.pauseDate);
      userPauseReport.managementArea = pauseReport.managementArea ?? '';
      userPauseReport.comments = pauseReport.comments ?? '';
      userPauseReport.confirmationNumber = pauseReport.confirmationNumber ?? '';
      userPauseReport.submissionDate = LocalStorageService.validateDate(pauseReport.submissionDate);
      userPauseReport.isTransmitted = pauseReport.isTransmitted ?? false;
      userPauseReports.push(userPauseReport);
    }
    return userPauseReports;
  }
  // check if the user's Daily Catch Reports are defined
  static validateDailyCatchReports(dailyCatchReports) {
    // if it is not defined, set a new one
    if (!dailyCatchReports) {
      return [];
    }
    let userDailyCatchReports = [];
    for (let dailyCatchReport of dailyCatchReports) {
      let userDailyCatchReport = new _data_models_report_models_daily_catch_report_model__WEBPACK_IMPORTED_MODULE_14__.DailyCatchReport();
      userDailyCatchReport.netUsed = LocalStorageService.validateNet(dailyCatchReport.netUsed);
      userDailyCatchReport.dateFished = LocalStorageService.validateDate(dailyCatchReport.dateFished);
      userDailyCatchReport.hoursFished = dailyCatchReport.hoursFished ?? '';
      userDailyCatchReport.managementArea = dailyCatchReport.managementArea ?? '';
      userDailyCatchReport.subArea = dailyCatchReport.subArea ?? '';
      userDailyCatchReport.numSets = dailyCatchReport.numSets ?? '';
      userDailyCatchReport.frozenOrIced = dailyCatchReport.frozenOrIced ?? '';
      userDailyCatchReport.speciesDataList = LocalStorageService.validateSpeciesData(dailyCatchReport.speciesDataList);
      userDailyCatchReport.nonFish = dailyCatchReport.nonFish ?? '';
      userDailyCatchReport.comments = dailyCatchReport.comments ?? '';
      userDailyCatchReport.confirmationNumber = dailyCatchReport.confirmationNumber ?? '';
      userDailyCatchReport.submissionDate = LocalStorageService.validateDate(dailyCatchReport.submissionDate);
      userDailyCatchReport.isTransmitted = dailyCatchReport.isTransmitted ?? false;
      userDailyCatchReports.push(userDailyCatchReport);
    }
    return userDailyCatchReports;
  }
  // check if the user's Offload Reports are defined
  static validateOffloadReports(offloadReports) {
    // if it is not defined, set a new one
    if (!offloadReports) {
      return [];
    }
    let userOffloadReports = [];
    for (let offloadReport of offloadReports) {
      let userOffloadReport = new _data_models_report_models_offload_report_model__WEBPACK_IMPORTED_MODULE_15__.OffloadReport();
      userOffloadReport.offloadDate = LocalStorageService.validateDate(offloadReport.offloadDate);
      userOffloadReport.fishSlip = offloadReport.fishSlip ?? '';
      userOffloadReport.fishSlipNumber = offloadReport.fishSlipNumber ?? '';
      userOffloadReport.catchWeightUnits = offloadReport.catchWeightUnits ?? '';
      userOffloadReport.speciesDataList = LocalStorageService.validateSpeciesData(offloadReport.speciesDataList);
      userOffloadReport.confirmationNumber = offloadReport.confirmationNumber ?? '';
      userOffloadReport.submissionDate = LocalStorageService.validateDate(offloadReport.submissionDate);
      userOffloadReport.isTransmitted = offloadReport.isTransmitted ?? false;
      userOffloadReports.push(userOffloadReport);
    }
    return userOffloadReports;
  }
  // check if the user's previous trips are defined
  static validatePrevTrips(prevTrips) {
    // if they are not defined, return an empty array
    if (!prevTrips) {
      return [];
    }
    let prevTripList = [];
    for (let trip of prevTrips) {
      let userPrevTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_6__.Trip();
      userPrevTrip.tripID = trip.tripID ?? '';
      userPrevTrip.gear = trip.gear;
      userPrevTrip.vessel = trip.vessel;
      userPrevTrip.licenseArea = trip.licenseArea;
      userPrevTrip.master = trip.master ?? '';
      userPrevTrip.fin = trip.fin ?? '';
      userPrevTrip.contactName = trip.contactName ?? '';
      userPrevTrip.phoneNum = LocalStorageService.validatePhoneNum(trip.phoneNum);
      userPrevTrip.offloadNeeded = trip.offloadNeeded ?? false;
      userPrevTrip.isSaved = trip.isSaved ?? false;
      userPrevTrip.startFishingReport = LocalStorageService.validateStartFishingReport(trip.startFishingReport);
      userPrevTrip.endFishingReport = LocalStorageService.validateEndFishingReport(trip.endFishingReport);
      userPrevTrip.cancelFishingReport = LocalStorageService.validateCancelFishingReport(trip.cancelFishingReport);
      userPrevTrip.pauseFishingReports = LocalStorageService.validatePauseFishingReports(trip.pauseFishingReports);
      userPrevTrip.dailyCatchReports = LocalStorageService.validateDailyCatchReports(trip.dailyCatchReports);
      userPrevTrip.offloadReports = LocalStorageService.validateOffloadReports(trip.offloadReports);
      prevTripList.push(userPrevTrip);
    }
    return prevTrips;
  }
  // check if user trip is defined
  static validateCurrTrip(currTrip) {
    // if trip does not exist, set a default one
    if (!currTrip) {
      return LocalStorageService.setCurrTrip();
    }
    let userCurrTrip = new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_6__.Trip();
    userCurrTrip.tripID = currTrip.tripID ?? '';
    userCurrTrip.master = currTrip.master ?? '';
    userCurrTrip.fin = currTrip.fin ?? '';
    userCurrTrip.contactName = currTrip.contactName ?? '';
    userCurrTrip.phoneNum = LocalStorageService.getPhoneNum(currTrip.phoneNum);
    let userGear = currTrip.gear;
    let userVessel = currTrip.vessel;
    let userLicenseArea = currTrip.licenseArea;
    userCurrTrip.gear = new _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_5__.Gear(userGear.name, userGear.logbookID, userGear.isChecked);
    userCurrTrip.vessel = new _data_models_user_models_vessel_data_model__WEBPACK_IMPORTED_MODULE_2__.VesselData(userVessel.vesselName, userVessel.vesselCoastNumber, userVessel.isChecked);
    userCurrTrip.licenseArea = new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_3__.LicenseArea(userLicenseArea.licenseName, userLicenseArea.licenseLocation, userLicenseArea.isChecked);
    userCurrTrip.offloadNeeded = currTrip.offloadNeeded ?? false;
    userCurrTrip.isSaved = currTrip.isSaved ?? false;
    userCurrTrip.startFishingReport = LocalStorageService.validateStartFishingReport(currTrip.startFishingReport);
    userCurrTrip.endFishingReport = LocalStorageService.validateEndFishingReport(currTrip.endFishingReport);
    userCurrTrip.cancelFishingReport = LocalStorageService.validateCancelFishingReport(currTrip.cancelFishingReport);
    userCurrTrip.pauseFishingReports = LocalStorageService.validatePauseFishingReports(currTrip.pauseFishingReports);
    userCurrTrip.dailyCatchReports = LocalStorageService.validateDailyCatchReports(currTrip.dailyCatchReports);
    userCurrTrip.offloadReports = LocalStorageService.validateOffloadReports(currTrip.offloadReports);
    return userCurrTrip;
  }
  // get phone number from PouchDB
  static getPhoneNum(phoneNum) {
    return new _tel_input_tel_input_component__WEBPACK_IMPORTED_MODULE_7__.Tel(phoneNum.area.toString(), phoneNum.exchange.toString(), phoneNum.subscriber.toString());
  }
  // set the sign up page to a new user
  static setHomepage() {
    return 'sign-up';
  }
  // set a start fishing report to a new user 
  static setStartReport() {
    return new _data_models_report_models_start_report_model__WEBPACK_IMPORTED_MODULE_10__.StartReport();
  }
  // set an end fishing report to a new user 
  static setEndReport() {
    return new _data_models_report_models_end_report_model__WEBPACK_IMPORTED_MODULE_11__.EndReport();
  }
  // set a cancel fishing report to a new user 
  static setCancelReport() {
    return new _data_models_report_models_cancel_report_model__WEBPACK_IMPORTED_MODULE_12__.CancelReport();
  }
  // set the default data for the current trip
  static setCurrTrip() {
    return new _data_models_trip_models_trip_model__WEBPACK_IMPORTED_MODULE_6__.Trip();
  }
  // set standardized gears
  // will change when we implement purchasable logbooks
  static setGears() {
    return [new _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_5__.Gear('Gill Net', '1111', true), new _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_5__.Gear('Seine', '2222'), new _data_models_trip_models_gear_models_gear_model__WEBPACK_IMPORTED_MODULE_5__.Gear('Troll', '3333')];
  }
  static getLicenseAreas() {
    return [new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_3__.LicenseArea("A", "Seine North", true), new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_3__.LicenseArea("B", "Seine South"), new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_3__.LicenseArea("C", "Gillnet North"), new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_3__.LicenseArea("D", "Gillnet Vancouver Island"), new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_3__.LicenseArea("E", "Gillnet Fraser + VI"), new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_3__.LicenseArea("F", "Troll North"), new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_3__.LicenseArea("G", "Troll WCVI"), new _data_models_trip_models_license_area_model__WEBPACK_IMPORTED_MODULE_3__.LicenseArea("H", "Troll Fraser")];
  }
  // NOTE: we will eventually get a species list from the DFO database
  // will need to put this into PouchDB when that happens
  static getSpeciesList() {
    return [new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Sockeye'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Coho'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Pink'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Chum'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Chinook'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Steelhead'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Atlantic'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Dogfish'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Green Sturgeon'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Grilse'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Jack Chinook'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Adult Chinook'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Legal Sized Chinook'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Sublegal Sized Chinook'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('White Sturgeon'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Mackerel'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Lingcod'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Halibut'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Aurora Rockfish'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Canary Rockfish'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('China Rockfish'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Tiger Rockfish'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Redbanded Rockfish'), new _data_models_catch_table_models_species_data_model__WEBPACK_IMPORTED_MODULE_4__.SpeciesData('Unknown Rockfish')];
  }
  // get table rules for catch table data
  static getTableRules(gearName) {
    let newTable = new _data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_9__.TableRules();
    // gill net
    if (gearName === 'Gill Net') {
      newTable = new _data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_9__.TableRules('daily-catch', 'Gill Net');
      newTable.containsSpecies = ['Sockeye', 'Coho', 'Pink', 'Chum', 'Chinook', 'Steelhead', 'Atlantic', 'Dogfish', 'Green Sturgeon', 'White Sturgeon'];
      newTable.excludesSpecies = ['Legal Sized Chinook', 'Sublegal Sized Chinook'];
      newTable.releaseOnlySpecies = ['Steelhead', 'White Sturgeon', 'Green Sturgeon'];
    }
    // seine
    else if (gearName === 'Seine') {
      newTable = new _data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_9__.TableRules('daily-catch', 'Seine');
      newTable.containsSpecies = ['Sockeye', 'Coho', 'Pink', 'Chum', 'Steelhead', 'Atlantic', 'Jack Chinook', 'Adult Chinook'];
      newTable.excludesSpecies = ['Legal Sized Chinook', 'Sublegal Sized Chinook'];
    }
    // troll
    else if (gearName === 'Troll') {
      newTable = new _data_models_catch_table_models_table_rules_model__WEBPACK_IMPORTED_MODULE_9__.TableRules('daily-catch', 'Troll');
      newTable.containsSpecies = ['Sockeye', 'Coho', 'Pink', 'Chum', 'Atlantic', 'Grilse', 'Legal Sized Chinook', 'Sublegal Sized Chinook'];
      newTable.excludesSpecies = ['Jack Chinook'];
      newTable.releaseOnlySpecies = ['Sublegal Sized Chinook', 'Grilse'];
    }
    return newTable;
  }
  // get the net types for gill net reports
  static getNetTypes() {
    return ['Alaska Twist', 'Multi Strand', 'Combination'];
  }
}
LocalStorageService.currUser = new _data_models_user_models_user_data_model__WEBPACK_IMPORTED_MODULE_1__.UserData('', '');
LocalStorageService.error = '';
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
  return new (t || LocalStorageService)();
};
LocalStorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjectable"]({
  token: LocalStorageService,
  factory: LocalStorageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2823:
/*!**************************************************!*\
  !*** ./src/app/tel-input/tel-input.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
TelInputComponent.ɵfac = function TelInputComponent_Factory(t) {
  return new (t || TelInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MAT_FORM_FIELD, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControl, 10));
};
TelInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TelInputComponent,
  selectors: [["app-tel-input"]],
  viewQuery: function TelInputComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.areaInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.exchangeInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.subscriberInput = _t.first);
    }
  },
  hostVars: 3,
  hostBindings: function TelInputComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("example-floating", ctx.shouldLabelFloat);
    }
  },
  inputs: {
    userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"],
    placeholder: "placeholder",
    required: "required",
    disabled: "disabled",
    value: "value"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldControl,
    useExisting: TelInputComponent
  }])],
  decls: 11,
  vars: 2,
  consts: [["role", "group", 1, "example-tel-input-container", 3, "formGroup", "focusin", "focusout"], ["type", "text", "inputmode", "decimal", "formControlName", "area", "size", "3", "maxLength", "3", "aria-label", "Area code", 1, "example-tel-input-element", 3, "input"], ["area", ""], [1, "example-tel-input-spacer"], ["type", "text", "inputmode", "decimal", "formControlName", "exchange", "maxLength", "3", "size", "3", "aria-label", "Exchange code", 1, "example-tel-input-element", 3, "input", "keyup.backspace"], ["exchange", ""], ["type", "text", "inputmode", "decimal", "formControlName", "subscriber", "maxLength", "4", "size", "4", "aria-label", "Subscriber number", 1, "example-tel-input-element", 3, "input", "keyup.backspace"], ["subscriber", ""]],
  template: function TelInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focusin", function TelInputComponent_Template_div_focusin_0_listener($event) {
        return ctx.onFocusIn($event);
      })("focusout", function TelInputComponent_Template_div_focusout_0_listener($event) {
        return ctx.onFocusOut($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function TelInputComponent_Template_input_input_1_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx._handleInput(ctx.parts.controls.area, _r1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u2013");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function TelInputComponent_Template_input_input_5_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx._handleInput(ctx.parts.controls.exchange, _r2));
      })("keyup.backspace", function TelInputComponent_Template_input_keyup_backspace_5_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.autoFocusPrev(ctx.parts.controls.exchange, _r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u2013");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function TelInputComponent_Template_input_input_9_listener() {
        return ctx._handleInput(ctx.parts.controls.subscriber);
      })("keyup.backspace", function TelInputComponent_Template_input_keyup_backspace_9_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.autoFocusPrev(ctx.parts.controls.subscriber, _r1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.parts);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx._formField.getLabelId());
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration production` replaces `environment.ts` with `environment.prod.ts`.
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

"use strict";
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

/***/ }),

/***/ 5525:
/*!****************************!*\
  !*** ./nextTick (ignored) ***!
  \****************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6344), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map