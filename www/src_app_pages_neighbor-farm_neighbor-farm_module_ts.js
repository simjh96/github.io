"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_neighbor-farm_neighbor-farm_module_ts"],{

/***/ 86320:
/*!*********************************************************************!*\
  !*** ./src/app/pages/neighbor-farm/neighbor-farm-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeighborFarmPageRoutingModule": () => (/* binding */ NeighborFarmPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _neighbor_farm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neighbor-farm.page */ 56305);




const routes = [
    {
        path: '',
        component: _neighbor_farm_page__WEBPACK_IMPORTED_MODULE_0__.NeighborFarmPage
    }
];
let NeighborFarmPageRoutingModule = class NeighborFarmPageRoutingModule {
};
NeighborFarmPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NeighborFarmPageRoutingModule);



/***/ }),

/***/ 73036:
/*!*************************************************************!*\
  !*** ./src/app/pages/neighbor-farm/neighbor-farm.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeighborFarmPageModule": () => (/* binding */ NeighborFarmPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _neighbor_farm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neighbor-farm-routing.module */ 86320);
/* harmony import */ var _neighbor_farm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neighbor-farm.page */ 56305);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 39258);








let NeighborFarmPageModule = class NeighborFarmPageModule {
};
NeighborFarmPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _neighbor_farm_routing_module__WEBPACK_IMPORTED_MODULE_0__.NeighborFarmPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [
            _neighbor_farm_page__WEBPACK_IMPORTED_MODULE_1__.NeighborFarmPage,
            // ItemDetailComponent,
            // FooterComponent,
            // SelectComponent,
        ],
    })
], NeighborFarmPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_neighbor-farm_neighbor-farm_module_ts.js.map