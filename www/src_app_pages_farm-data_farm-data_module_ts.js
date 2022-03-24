"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_farm-data_farm-data_module_ts"],{

/***/ 96672:
/*!*************************************************************!*\
  !*** ./src/app/pages/farm-data/farm-data-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FarmDataPageRoutingModule": () => (/* binding */ FarmDataPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_item_detail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/item-detail.service */ 49387);
/* harmony import */ var _farm_data_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./farm-data.page */ 24569);





const routes = [
    {
        path: '',
        component: _farm_data_page__WEBPACK_IMPORTED_MODULE_1__.FarmDataPage,
    },
];
let FarmDataPageRoutingModule = class FarmDataPageRoutingModule {
};
FarmDataPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), src_app_services_item_detail_service__WEBPACK_IMPORTED_MODULE_0__.ItemDetailService],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], FarmDataPageRoutingModule);



/***/ }),

/***/ 1566:
/*!*****************************************************!*\
  !*** ./src/app/pages/farm-data/farm-data.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FarmDataPageModule": () => (/* binding */ FarmDataPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _farm_data_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./farm-data-routing.module */ 96672);
/* harmony import */ var _farm_data_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./farm-data.page */ 24569);
/* harmony import */ var src_app_pipes_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/pipe */ 74410);








let FarmDataPageModule = class FarmDataPageModule {
};
FarmDataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _farm_data_routing_module__WEBPACK_IMPORTED_MODULE_0__.FarmDataPageRoutingModule,
            src_app_pipes_pipe__WEBPACK_IMPORTED_MODULE_2__.Pipes,
        ],
        declarations: [_farm_data_page__WEBPACK_IMPORTED_MODULE_1__.FarmDataPage],
    })
], FarmDataPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_farm-data_farm-data_module_ts.js.map