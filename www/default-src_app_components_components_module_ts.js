"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 60666:
/*!*******************************************************************!*\
  !*** ./src/app/components/chip-sliders/chip-sliders.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChipSlidersComponent": () => (/* binding */ ChipSlidersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _chip_sliders_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chip-sliders.component.html?ngResource */ 61261);
/* harmony import */ var _chip_sliders_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chip-sliders.component.scss?ngResource */ 51584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ChipSlidersComponent = class ChipSlidersComponent {
    constructor() { }
    ngOnInit() { }
};
ChipSlidersComponent.ctorParameters = () => [];
ChipSlidersComponent.propDecorators = {
    keys: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    reviewKeywords: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ChipSlidersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-chip-sliders',
        template: _chip_sliders_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chip_sliders_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChipSlidersComponent);



/***/ }),

/***/ 39258:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _pipes_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/pipe */ 74410);
/* harmony import */ var _chip_sliders_chip_sliders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chip-sliders/chip-sliders.component */ 60666);
/* harmony import */ var _fake_tab_fake_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-tab/fake-tab.component */ 61237);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 30241);
/* harmony import */ var _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-detail/item-detail.component */ 32549);
/* harmony import */ var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-list/item-list.component */ 18877);
/* harmony import */ var _search_bar_simple_search_bar_simple_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-bar-simple/search-bar-simple.component */ 9330);
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select/select.component */ 47918);













let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.Pipes],
        declarations: [
            _chip_sliders_chip_sliders_component__WEBPACK_IMPORTED_MODULE_1__.ChipSlidersComponent,
            _fake_tab_fake_tab_component__WEBPACK_IMPORTED_MODULE_2__.FakeTabComponent,
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
            _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_4__.ItemDetailComponent,
            _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_5__.ItemListComponent,
            _search_bar_simple_search_bar_simple_component__WEBPACK_IMPORTED_MODULE_6__.SearchBarSimpleComponent,
            _select_select_component__WEBPACK_IMPORTED_MODULE_7__.SelectComponent,
        ],
        exports: [
            _chip_sliders_chip_sliders_component__WEBPACK_IMPORTED_MODULE_1__.ChipSlidersComponent,
            _fake_tab_fake_tab_component__WEBPACK_IMPORTED_MODULE_2__.FakeTabComponent,
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
            _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_4__.ItemDetailComponent,
            _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_5__.ItemListComponent,
            _search_bar_simple_search_bar_simple_component__WEBPACK_IMPORTED_MODULE_6__.SearchBarSimpleComponent,
            _select_select_component__WEBPACK_IMPORTED_MODULE_7__.SelectComponent,
        ],
    })
], ComponentsModule);



/***/ }),

/***/ 61237:
/*!***********************************************************!*\
  !*** ./src/app/components/fake-tab/fake-tab.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FakeTabComponent": () => (/* binding */ FakeTabComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fake_tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fake-tab.component.html?ngResource */ 14915);
/* harmony import */ var _fake_tab_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-tab.component.scss?ngResource */ 13498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let FakeTabComponent = class FakeTabComponent {
    constructor() {
        this.tabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    onTabChange(tabTitle) {
        this.tabChange.emit(tabTitle);
    }
};
FakeTabComponent.ctorParameters = () => [];
FakeTabComponent.propDecorators = {
    tabChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    tabInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
FakeTabComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-fake-tab',
        template: _fake_tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fake_tab_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FakeTabComponent);



/***/ }),

/***/ 30241:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 21757);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 5721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() { }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-footer',
        template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 32549:
/*!*****************************************************************!*\
  !*** ./src/app/components/item-detail/item-detail.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDetailComponent": () => (/* binding */ ItemDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _item_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-detail.component.html?ngResource */ 92946);
/* harmony import */ var _item_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-detail.component.scss?ngResource */ 75390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ItemDetailComponent = class ItemDetailComponent {
    constructor() {
        // 해당 scope에 있는 객체의 주소값을 발송하고 parent module에서 조작 한 후 onChange를 통해 자식이 다시 동기화
        this.onItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onFollow = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnChanges(changes) {
        this.ithItemDetail = changes.ithItemDetail.currentValue;
    }
    onItemClickFunc(event) {
        if (event) {
            event.stopPropagation();
        }
        console.log('clicked inner event: ', event);
        this.onItemClick.emit(this.ithItemDetail);
    }
    onFollowFunc(event) {
        if (event) {
            event.stopPropagation();
        }
        console.log('clicked inner event: ', event);
        this.onFollow.emit(this.ithItemDetail);
    }
};
ItemDetailComponent.ctorParameters = () => [];
ItemDetailComponent.propDecorators = {
    ithItemDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    onItemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    onFollow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ItemDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-item-detail',
        template: _item_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_item_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemDetailComponent);



/***/ }),

/***/ 18877:
/*!*************************************************************!*\
  !*** ./src/app/components/item-list/item-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemListComponent": () => (/* binding */ ItemListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _item_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-list.component.html?ngResource */ 15158);
/* harmony import */ var _item_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-list.component.scss?ngResource */ 38735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_item_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/item-detail.service */ 49387);






let ItemListComponent = class ItemListComponent {
    constructor(navController, itemDetailService) {
        this.navController = navController;
        this.itemDetailService = itemDetailService;
        this.items = itemDetailService.getAllItemDetail();
        this.cardWide = true;
    }
    ngOnInit() { }
    openPage(url) {
        console.log(url);
        this.navController.navigateForward(url, {});
    }
};
ItemListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: src_app_services_item_detail_service__WEBPACK_IMPORTED_MODULE_2__.ItemDetailService }
];
ItemListComponent.propDecorators = {
    cardWide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ItemListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-list',
        template: _item_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_item_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemListComponent);



/***/ }),

/***/ 9330:
/*!*****************************************************************************!*\
  !*** ./src/app/components/search-bar-simple/search-bar-simple.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBarSimpleComponent": () => (/* binding */ SearchBarSimpleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _search_bar_simple_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-bar-simple.component.html?ngResource */ 78066);
/* harmony import */ var _search_bar_simple_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-bar-simple.component.scss?ngResource */ 57657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SearchBarSimpleComponent = class SearchBarSimpleComponent {
    constructor() { }
    ngOnInit() { }
};
SearchBarSimpleComponent.ctorParameters = () => [];
SearchBarSimpleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-search-bar-simple',
        template: _search_bar_simple_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_search_bar_simple_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchBarSimpleComponent);



/***/ }),

/***/ 47918:
/*!*******************************************************!*\
  !*** ./src/app/components/select/select.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": () => (/* binding */ SelectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _select_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.component.html?ngResource */ 56443);
/* harmony import */ var _select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.component.scss?ngResource */ 91018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let SelectComponent = class SelectComponent {
    constructor() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.data = {
            headerTitle: 'Single Select',
            title: '필터',
            selectedItem: 1,
            header: 'Basic dialog',
            items: [
                {
                    id: 1,
                    title: '최신순',
                },
                {
                    id: 2,
                    title: '조회순',
                },
                {
                    id: 3,
                    title: '인기순',
                },
                {
                    id: 4,
                    title: '구독순',
                },
            ],
        };
    }
    ngOnChanges(changes) {
        // console.log('changes: ', changes);
    }
    onChangeFunc(event) {
        if (event) {
            event.stopPropagation();
        }
        console.log('event: ', event);
        this.data.selectedItem = event.target.value;
        this.onChange.emit(event.target.value);
    }
};
SelectComponent.ctorParameters = () => [];
SelectComponent.propDecorators = {
    onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
SelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-select',
        template: _select_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectComponent);



/***/ }),

/***/ 51584:
/*!********************************************************************************!*\
  !*** ./src/app/components/chip-sliders/chip-sliders.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".keyword-chip-select ion-slide {\n  height: 25px;\n  border-radius: 15px;\n  margin: 2px;\n  color: rgba(61, 60, 60, 0.692);\n  border: 1px solid rgba(61, 60, 60, 0.692);\n}\n.keyword-chip-select ion-slide ion-grid {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaXAtc2xpZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FBQUo7QUFDSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDTiIsImZpbGUiOiJjaGlwLXNsaWRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2V5d29yZC1jaGlwLXNlbGVjdCB7XHJcbiAgaW9uLXNsaWRlIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDYxLCA2MCwgNjAsIDAuNjkyKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjEsIDYwLCA2MCwgMC42OTIpO1xyXG4gICAgaW9uLWdyaWQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 13498:
/*!************************************************************************!*\
  !*** ./src/app/components/fake-tab/fake-tab.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".tabBar {\n  opacity: 0.7;\n  --background: #399412;\n}\n.tabBar ion-row {\n  display: flex;\n  justify-content: space-between;\n}\nion-button {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nion-button ion-icon,\nion-button ion-label {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2UtdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUVKO0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQUU7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUVKIiwiZmlsZSI6ImZha2UtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYkJhciB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIC0tYmFja2dyb3VuZDogIzM5OTQxMjtcclxuICBpb24tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGlvbi1pY29uLFxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5721:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".wrap {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-top: 30px;\n  padding: 0 0 20px 0;\n  background-color: #eeeaea;\n  border-top: 1px solid #999999;\n}\n.wrap ion-row {\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n}\n.wrap .row0 {\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 20px 0 60px;\n}\n.wrap .row0 h3 {\n  text-align: center;\n}\n.wrap .row1 {\n  margin: 0 0 20px 10px;\n}\n.wrap .row3 {\n  margin: 2px 0 0 10px;\n}\n.wrap .row4 {\n  margin: 20px 0 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNFO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNFLGtCQUFBO0FBRU47QUFDRTtFQUNFLHFCQUFBO0FBQ0o7QUFDRTtFQUNFLG9CQUFBO0FBQ0o7QUFDRTtFQUNFLHFCQUFBO0FBQ0oiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBwYWRkaW5nOiAwIDAgMjBweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzNCwgMjM0KTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDE1MywgMTUzLCAxNTMpO1xyXG5cclxuICBpb24tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5yb3cwIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweCAwIDYwcHg7XHJcbiAgICBoMyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgLnJvdzEge1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweCAxMHB4O1xyXG4gIH1cclxuICAucm93MyB7XHJcbiAgICBtYXJnaW46IDJweCAwIDAgMTBweDtcclxuICB9XHJcbiAgLnJvdzQge1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMCAxMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 75390:
/*!******************************************************************************!*\
  !*** ./src/app/components/item-detail/item-detail.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".order-detail ion-grid:nth-child(0) {\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.order-detail ion-grid ion-img {\n  height: 150px;\n  object-fit: cover;\n}\n.order-detail .following {\n  --background: #81c963;\n}\n.order-detail .to-follow {\n  --background: #11912d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFHSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUROO0FBSUU7RUFDRSxxQkFBQTtBQUZKO0FBSUU7RUFDRSxxQkFBQTtBQUZKIiwiZmlsZSI6Iml0ZW0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLWRldGFpbCB7XHJcbiAgaW9uLWdyaWQ6bnRoLWNoaWxkKDApIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIGlvbi1ncmlkIHtcclxuICAgIGlvbi1pbWcge1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvbGxvd2luZyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM4MWM5NjM7XHJcbiAgfVxyXG4gIC50by1mb2xsb3cge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTE5MTJkO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 38735:
/*!**************************************************************************!*\
  !*** ./src/app/components/item-list/item-list.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Nanum Gothic\";\n}\n\nion-col {\n  position: relative;\n}\n\nion-col ion-button {\n  position: absolute;\n  z-index: 2;\n  right: 10px;\n  top: 15px;\n  height: 30px;\n  color: white;\n}\n\nion-col ion-label {\n  height: 100px;\n  white-space: initial;\n}\n\nion-col ion-label .two-line {\n  margin: 0;\n}\n\nion-col ion-label .two-line h1 {\n  font-size: 0.7em;\n  white-space: initial;\n  width: 65%;\n  height: 40px;\n}\n\nion-col ion-label p {\n  font-size: 0.6em;\n}\n\n.order-date {\n  color: rgba(0, 0, 255, 0.521);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFFO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQUk7RUFDRSxTQUFBO0FBRU47O0FBQU07RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFFUjs7QUFDSTtFQUNFLGdCQUFBO0FBQ047O0FBSUE7RUFDRSw2QkFBQTtBQURGIiwiZmlsZSI6Iml0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5hbnVtIEdvdGhpY1wiO1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XHJcblxyXG4gICAgLnR3by1saW5lIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDAuNmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm9yZGVyLWRhdGUge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC41MjEpO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 57657:
/*!******************************************************************************************!*\
  !*** ./src/app/components/search-bar-simple/search-bar-simple.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtYmFyLXNpbXBsZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 91018:
/*!********************************************************************!*\
  !*** ./src/app/components/select/select.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  height: 30px;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJzZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 61261:
/*!********************************************************************************!*\
  !*** ./src/app/components/chip-sliders/chip-sliders.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"keyword-chip-select ion-margin-horizontal green\">\r\n  <h3 class=\"text-size-xs font-regular text-color-secondary ion-no-margin\">\r\n    키워드 모음집\r\n  </h3>\r\n\r\n  <ion-slides\r\n    [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\"\r\n    *ngFor=\"let key of keys\"\r\n  >\r\n    <ion-slide\r\n      *ngFor=\"let values of reviewKeywords[key]\"\r\n      [style]=\"'width: ' + (values[0].length * 12 + 55) + 'px;'\"\r\n    >\r\n      <ion-grid>\r\n        <ion-icon class=\"icon-color-accent\" [name]=\"values[1]\"></ion-icon>\r\n        <ion-label class=\"text-size-sm\">{{ values[0] }}</ion-label>\r\n        <ion-icon name=\"close-circle\"></ion-icon>\r\n      </ion-grid>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</div>\r\n";

/***/ }),

/***/ 14915:
/*!************************************************************************!*\
  !*** ./src/app/components/fake-tab/fake-tab.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar class=\"green\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button *ngIf=\"tabInput.type === 'menu'\"></ion-menu-button>\n    <ion-back-button\n      *ngIf=\"tabInput.type === 'back'\"\n      defaultHref=\"/\"\n      text=\"\"\n    ></ion-back-button>\n  </ion-buttons>\n  <ion-title>{{ tabInput.title }}</ion-title>\n</ion-toolbar>\n<ion-toolbar class=\"tabBar\">\n  <ion-row>\n    <ion-button\n      *ngFor=\"let tab of tabInput.tabs\"\n      fill=\"none\"\n      (click)=\"onTabChange(tab.url)\"\n    >\n      <ion-icon [name]=\"tab.icon\"></ion-icon>\n      <ion-label>{{ tab.label }}</ion-label>\n    </ion-button>\n    <!-- <ion-button fill=\"none\" (click)=\"onTabChange('neighbor-farm')\">\n      <ion-icon name=\"leaf\"></ion-icon>\n      <ion-label>이웃농장</ion-label>\n    </ion-button>\n    <ion-button fill=\"none\" (click)=\"onTabChange('my-farm')\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>마이농장</ion-label>\n    </ion-button> -->\n  </ion-row>\n</ion-toolbar>\n";

/***/ }),

/***/ 21757:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid class=\"wrap\">\n  <ion-row class=\"row0\">\n    <h3 class=\"text-size-lg\"><strong>서비스 소개</strong></h3>\n    <h3 class=\"text-size-lg\"><strong>입점 문의</strong></h3>\n    <h3 class=\"text-size-lg\"><strong>제휴 문의</strong></h3></ion-row\n  >\n\n  <ion-row class=\"text-size-sm row1\"\n    ><strong>이용약관 | 개인정보처리방침</strong></ion-row\n  ><ion-row class=\"text-size-sm row2\"\n    >법인명 : 마이농장 | 대표자 : 김동인 | 사업자등록번호 :\n    000-00-00000</ion-row\n  ><ion-row class=\"text-size-sm row3\"\n    >주소 : 서울 어쩌구 저쩌로0길 00 | 문의 : mynj@mynj.com</ion-row\n  ><ion-row class=\"text-size-sm row4\"\n    >Copyright 마이농장. All right reserved.</ion-row\n  >\n</ion-grid>\n";

/***/ }),

/***/ 92946:
/*!******************************************************************************!*\
  !*** ./src/app/components/item-detail/item-detail.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<!-- ref: 'cs-google-card-list-layout-2' -->\r\n<div class=\"order-detail\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col\r\n        class=\"ion-no-padding ion-no-margin\"\r\n        size=\"12\"\r\n        size-md=\"6\"\r\n        size-lg=\"4\"\r\n      >\r\n        <ion-card\r\n          class=\"no-box-shadow border color-basic ion-no-margin\"\r\n          (click)=\"onItemClickFunc($event)\"\r\n        >\r\n          <!--Card image-->\r\n\r\n          <ion-img [src]=\"ithItemDetail.image\"></ion-img>\r\n\r\n          <!--Card content-->\r\n          <ion-card-content class=\"transparent\">\r\n            <!--Card subtitle-->\r\n            <ion-card-title>\r\n              <h1 class=\"text-size-lg text-color-primary\">\r\n                {{ ithItemDetail.title }}\r\n              </h1>\r\n            </ion-card-title>\r\n            <!--Card description-->\r\n            <p class=\"text-size-xs text-color-secondary\">\r\n              {{ ithItemDetail.description }}\r\n            </p>\r\n          </ion-card-content>\r\n          <ion-item class=\"transparent\" lines=\"none\">\r\n            <ion-avatar slot=\"start\">\r\n              <img [src]=\"ithItemDetail.avatar\" />\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h2 class=\"text-size-sm ion-no-margin\">\r\n                {{ ithItemDetail.avatarTitle }}\r\n              </h2>\r\n              <p class=\"text-size-p ion-no-margin\">\r\n                {{ ithItemDetail.avatarSubTitle }}\r\n              </p>\r\n            </ion-label>\r\n            <ion-button\r\n              *ngIf=\"ithItemDetail.btFollowing == '구독중'\"\r\n              class=\"button-small color-primary no-box-shadow following\"\r\n              (click)=\"onFollowFunc($event)\"\r\n              slot=\"end\"\r\n              shape=\"round\"\r\n            >\r\n              구독중\r\n            </ion-button>\r\n            <ion-button\r\n              *ngIf=\"ithItemDetail.btFollowing == '구독하기'\"\r\n              class=\"button-small color-primary no-box-shadow to-follow\"\r\n              (click)=\"onFollowFunc($event)\"\r\n              slot=\"end\"\r\n              shape=\"round\"\r\n            >\r\n              구독하기\r\n            </ion-button>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";

/***/ }),

/***/ 15158:
/*!**************************************************************************!*\
  !*** ./src/app/components/item-list/item-list.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<!-- wide card list(default) -->\r\n<ion-item *ngIf=\"cardWide\"\r\n  ><ion-grid *ngIf=\"cardWide\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" *ngFor=\"let item of items\">\r\n        <ion-button class=\"text-size-sm\" color=\"success\"\r\n          ><p\r\n            (click)=\"openPage('review-write/' + item.id)\"\r\n            class=\"text-size-sm review-write\"\r\n          >\r\n            리뷰 작성\r\n          </p></ion-button\r\n        >\r\n\r\n        <ion-item\r\n          lines=\"none\"\r\n          class=\"default-item border border-radius\"\r\n          (click)=\"openPage('neighbor-farm-detail/' + item.id)\"\r\n        >\r\n          <ion-thumbnail slot=\"start\">\r\n            <img class=\"border-radius\" [src]=\"item.image\" />\r\n          </ion-thumbnail>\r\n          <ion-label class=\"ion-justify-content-between\">\r\n            <!-- Title-->\r\n\r\n            <ion-grid class=\"two-line\">\r\n              <h1 class=\"text-color-primary\">\r\n                {{ item.title | truncate: [20] }}\r\n              </h1>\r\n            </ion-grid>\r\n            <!-- Subtitle-->\r\n            <p class=\"text-color-secondary\">\r\n              {{ item.description | truncate: [18] }}\r\n            </p>\r\n            <p class=\"order-date\">주문일자: 날짜 받아와야함</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid></ion-item\r\n>\r\n\r\n<!-- slim card list(option2) -->\r\n<ion-item *ngIf=\"!cardWide\">\r\n  <ion-item\r\n    class=\"default-item border border-radius ion-margin-top\"\r\n    *ngFor=\"let item of items['items']\"\r\n    (click)=\"openPage('neighbor-farm-detail/' + item.id)\"\r\n  >\r\n    <!-- Avatar-->\r\n    <ion-avatar slot=\"start\">\r\n      <img [src]=\"item.image\" />\r\n    </ion-avatar>\r\n    <!-- Text -->\r\n    <ion-label>\r\n      <ion-item>\r\n        <h2 class=\"text-size-md text-color-primary font-regular\">\r\n          {{\r\n            item.title.length > 6\r\n              ? (item.title | slice: 0:6) + \"..\"\r\n              : item.title\r\n          }}\r\n        </h2>\r\n        <h3\r\n          (click)=\"openPage('review-write/' + item.id)\"\r\n          class=\"text-size-sm\"\r\n          slot=\"end\"\r\n        >\r\n          리뷰 쓰러가기\r\n        </h3>\r\n      </ion-item>\r\n\r\n      <h2 class=\"text-size-sm text-color-primary font-regular ion-text-wrap\">\r\n        {{\r\n          item.description.length > 6\r\n            ? (item.description | slice: 0:6) + \"..\"\r\n            : item.description\r\n        }}\r\n      </h2>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-item>\r\n";

/***/ }),

/***/ 78066:
/*!******************************************************************************************!*\
  !*** ./src/app/components/search-bar-simple/search-bar-simple.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- card width design slim -->\r\n<ion-grid>\r\n  <ion-row>\r\n    <!-- List -->\r\n    <ion-col size=\"12\">\r\n      <ion-list lines=\"none\" class=\"ion-padding-list\">\r\n        <ion-list-header class=\"ion-no-padding\">\r\n          <ion-searchbar\r\n            placeholder=\"힘이 되는 리뷰!\"\r\n            class=\"ion-no-padding\"\r\n          ></ion-searchbar>\r\n        </ion-list-header>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n";

/***/ }),

/***/ 56443:
/*!********************************************************************!*\
  !*** ./src/app/components/select/select.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-list class=\"ion-no-padding ion-no-margin\">\n  <ion-item\n    lines=\"none\"\n    class=\"default-item border border-radius ion-margin-top\"\n    *ngIf=\"data !== null\"\n  >\n    <ion-select\n      slot=\"end\"\n      class=\"text-size-xs\"\n      [value]=\"data.selectedItem\"\n      multiple=\"false\"\n      interface=\"popover\"\n      (ionChange)=\"onChangeFunc($event)\"\n    >\n      <ion-select-option *ngFor=\"let item of data.items\" [value]=\"item.id\">\n        {{ item.title }}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n</ion-list>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map