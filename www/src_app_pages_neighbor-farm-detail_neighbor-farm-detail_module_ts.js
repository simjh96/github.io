"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_neighbor-farm-detail_neighbor-farm-detail_module_ts"],{

/***/ 63003:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/neighbor-farm-detail/neighbor-farm-detail-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeighborFarmDetailPageRoutingModule": () => (/* binding */ NeighborFarmDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _neighbor_farm_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neighbor-farm-detail.page */ 38241);




const routes = [
    {
        path: '',
        component: _neighbor_farm_detail_page__WEBPACK_IMPORTED_MODULE_0__.NeighborFarmDetailPage
    }
];
let NeighborFarmDetailPageRoutingModule = class NeighborFarmDetailPageRoutingModule {
};
NeighborFarmDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NeighborFarmDetailPageRoutingModule);



/***/ }),

/***/ 62005:
/*!***************************************************************************!*\
  !*** ./src/app/pages/neighbor-farm-detail/neighbor-farm-detail.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeighborFarmDetailPageModule": () => (/* binding */ NeighborFarmDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _neighbor_farm_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neighbor-farm-detail-routing.module */ 63003);
/* harmony import */ var _neighbor_farm_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neighbor-farm-detail.page */ 38241);
/* harmony import */ var _farm_data_farm_data_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../farm-data/farm-data.page */ 24569);
/* harmony import */ var _growth_diary_growth_diary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../growth-diary/growth-diary.page */ 62099);
/* harmony import */ var src_app_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/directives/shared-directives.module */ 16102);
/* harmony import */ var src_app_pipes_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipes/pipe */ 74410);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ 39258);













let NeighborFarmDetailPageModule = class NeighborFarmDetailPageModule {
};
NeighborFarmDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _neighbor_farm_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.NeighborFarmDetailPageRoutingModule,
            src_app_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_4__.SharedDirectivesModule,
            src_app_pipes_pipe__WEBPACK_IMPORTED_MODULE_5__.Pipes,
            swiper_angular__WEBPACK_IMPORTED_MODULE_12__.SwiperModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsModule,
        ],
        declarations: [
            _neighbor_farm_detail_page__WEBPACK_IMPORTED_MODULE_1__.NeighborFarmDetailPage,
            _farm_data_farm_data_page__WEBPACK_IMPORTED_MODULE_2__.FarmDataPage,
            _growth_diary_growth_diary_page__WEBPACK_IMPORTED_MODULE_3__.GrowthDiaryPage,
            // FakeTabComponent,
            // FooterComponent,
        ],
    })
], NeighborFarmDetailPageModule);



/***/ }),

/***/ 38241:
/*!*************************************************************************!*\
  !*** ./src/app/pages/neighbor-farm-detail/neighbor-farm-detail.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeighborFarmDetailPage": () => (/* binding */ NeighborFarmDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _neighbor_farm_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neighbor-farm-detail.page.html?ngResource */ 37980);
/* harmony import */ var _neighbor_farm_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neighbor-farm-detail.page.scss?ngResource */ 58500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var src_app_services_item_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/item-detail.service */ 49387);







let NeighborFarmDetailPage = class NeighborFarmDetailPage {
    constructor(route, itemDetailService) {
        this.route = route;
        this.itemDetailService = itemDetailService;
        this.initialTab = true;
        this.currentTab = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this.currentTab.next('farm-data');
        this.itemId = +this.route.snapshot.paramMap.get('itemId');
        this.tabInput = {
            title: '이웃농장',
            type: 'back',
            tabs: [
                { url: 'farm-data', icon: 'analytics', label: '농장 데이터' },
                { url: 'growth-diary', icon: 'clipboard', label: '재배일지' },
            ],
        };
    }
    tabChange(newTab) {
        this.currentTab.next(newTab);
        this.initialTab = false;
    }
};
NeighborFarmDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_item_detail_service__WEBPACK_IMPORTED_MODULE_2__.ItemDetailService }
];
NeighborFarmDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-neighbor-farm-detail',
        template: _neighbor_farm_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_neighbor_farm_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NeighborFarmDetailPage);



/***/ }),

/***/ 58500:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/neighbor-farm-detail/neighbor-farm-detail.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZWlnaGJvci1mYXJtLWRldGFpbC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 37980:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/neighbor-farm-detail/neighbor-farm-detail.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header #header>\n  <app-fake-tab\n    [tabInput]=\"tabInput\"\n    (tabChange)=\"tabChange($event)\"\n  ></app-fake-tab>\n</ion-header>\n\n<!-- Content -->\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" class=\"green\">\n  <app-farm-data\n    scrollEvents=\"true\"\n    [appHideHeader]=\"header\"\n    [itemId]=\"itemId\"\n    *ngIf=\"(currentTab | async) === 'farm-data' || initialTab\"\n  ></app-farm-data>\n  <app-growth-diary\n    scrollEvents=\"true\"\n    [appHideHeader]=\"header\"\n    [itemId]=\"itemId\"\n    *ngIf=\"(currentTab | async) === 'growth-diary'\"\n  ></app-growth-diary>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_neighbor-farm-detail_neighbor-farm-detail_module_ts.js.map