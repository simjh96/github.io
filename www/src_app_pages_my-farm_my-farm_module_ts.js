"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_my-farm_my-farm_module_ts"],{

/***/ 17069:
/*!*********************************************************!*\
  !*** ./src/app/pages/my-farm/my-farm-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyFarmPageRoutingModule": () => (/* binding */ MyFarmPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _my_farm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-farm.page */ 18511);




const routes = [
    {
        path: '',
        component: _my_farm_page__WEBPACK_IMPORTED_MODULE_0__.MyFarmPage
    }
];
let MyFarmPageRoutingModule = class MyFarmPageRoutingModule {
};
MyFarmPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyFarmPageRoutingModule);



/***/ }),

/***/ 65391:
/*!*************************************************!*\
  !*** ./src/app/pages/my-farm/my-farm.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyFarmPageModule": () => (/* binding */ MyFarmPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _my_farm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-farm-routing.module */ 17069);
/* harmony import */ var _my_farm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-farm.page */ 18511);







let MyFarmPageModule = class MyFarmPageModule {
};
MyFarmPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _my_farm_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyFarmPageRoutingModule
        ],
        declarations: [_my_farm_page__WEBPACK_IMPORTED_MODULE_1__.MyFarmPage]
    })
], MyFarmPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-farm_my-farm_module_ts.js.map