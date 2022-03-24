"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_growth-diary_growth-diary_module_ts"],{

/***/ 83936:
/*!*******************************************************************!*\
  !*** ./src/app/pages/growth-diary/growth-diary-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrowthDiaryPageRoutingModule": () => (/* binding */ GrowthDiaryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _growth_diary_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./growth-diary.page */ 62099);




const routes = [
    {
        path: '',
        component: _growth_diary_page__WEBPACK_IMPORTED_MODULE_0__.GrowthDiaryPage
    }
];
let GrowthDiaryPageRoutingModule = class GrowthDiaryPageRoutingModule {
};
GrowthDiaryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GrowthDiaryPageRoutingModule);



/***/ }),

/***/ 78974:
/*!***********************************************************!*\
  !*** ./src/app/pages/growth-diary/growth-diary.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrowthDiaryPageModule": () => (/* binding */ GrowthDiaryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _growth_diary_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./growth-diary-routing.module */ 83936);
/* harmony import */ var _growth_diary_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./growth-diary.page */ 62099);







let GrowthDiaryPageModule = class GrowthDiaryPageModule {
};
GrowthDiaryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _growth_diary_routing_module__WEBPACK_IMPORTED_MODULE_0__.GrowthDiaryPageRoutingModule
        ],
        declarations: [_growth_diary_page__WEBPACK_IMPORTED_MODULE_1__.GrowthDiaryPage]
    })
], GrowthDiaryPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_growth-diary_growth-diary_module_ts.js.map