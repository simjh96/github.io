"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_review-search_review-search_module_ts"],{

/***/ 84966:
/*!*********************************************************************!*\
  !*** ./src/app/pages/review-search/review-search-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewSearchPageRoutingModule": () => (/* binding */ ReviewSearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _review_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-search.page */ 76728);




const routes = [
    {
        path: '',
        component: _review_search_page__WEBPACK_IMPORTED_MODULE_0__.ReviewSearchPage
    }
];
let ReviewSearchPageRoutingModule = class ReviewSearchPageRoutingModule {
};
ReviewSearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReviewSearchPageRoutingModule);



/***/ }),

/***/ 99477:
/*!*************************************************************!*\
  !*** ./src/app/pages/review-search/review-search.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewSearchPageModule": () => (/* binding */ ReviewSearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _review_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-search-routing.module */ 84966);
/* harmony import */ var _review_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-search.page */ 76728);
/* harmony import */ var src_app_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/directives/shared-directives.module */ 16102);
/* harmony import */ var src_app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipes/pipe */ 74410);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ 39258);










let ReviewSearchPageModule = class ReviewSearchPageModule {
};
ReviewSearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _review_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReviewSearchPageRoutingModule,
            src_app_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_2__.SharedDirectivesModule,
            src_app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__.Pipes,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
        ],
        declarations: [
            _review_search_page__WEBPACK_IMPORTED_MODULE_1__.ReviewSearchPage,
            // SearchBarSimpleComponent,
            // ItemListComponent,
            // FooterComponent,
        ],
    })
], ReviewSearchPageModule);



/***/ }),

/***/ 76728:
/*!***********************************************************!*\
  !*** ./src/app/pages/review-search/review-search.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewSearchPage": () => (/* binding */ ReviewSearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _review_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-search.page.html?ngResource */ 53021);
/* harmony import */ var _review_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-search.page.scss?ngResource */ 99976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ReviewSearchPage = class ReviewSearchPage {
    constructor() { }
    ngOnInit() {
        this.cardWide = true;
    }
};
ReviewSearchPage.ctorParameters = () => [];
ReviewSearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-review-search',
        template: _review_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_review_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReviewSearchPage);



/***/ }),

/***/ 99976:
/*!************************************************************************!*\
  !*** ./src/app/pages/review-search/review-search.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXctc2VhcmNoLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 53021:
/*!************************************************************************!*\
  !*** ./src/app/pages/review-search/review-search.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header #header class=\"green\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-capitalize\">리뷰 관리</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content\r\n  [fullscreen]=\"true\"\r\n  scrollEvents=\"true\"\r\n  [appHideHeader]=\"header\"\r\n  class=\"green\"\r\n>\r\n  <app-search-bar-simple></app-search-bar-simple>\r\n  <app-item-list [cardWide]=\"cardWide\"></app-item-list>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_review-search_review-search_module_ts.js.map