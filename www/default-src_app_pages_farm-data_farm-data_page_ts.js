"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_farm-data_farm-data_page_ts"],{

/***/ 24569:
/*!***************************************************!*\
  !*** ./src/app/pages/farm-data/farm-data.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FarmDataPage": () => (/* binding */ FarmDataPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _farm_data_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./farm-data.page.html?ngResource */ 6178);
/* harmony import */ var _farm_data_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./farm-data.page.scss?ngResource */ 39511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_farmer_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/farmer-detail.service */ 80791);
/* harmony import */ var src_app_services_item_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/item-detail.service */ 49387);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ 63587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);






// import Swiper core and required modules


// install Swiper modules
swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination]);
let FarmDataPage = class FarmDataPage {
    constructor(itemDetailService, farmerDetailService, navController, alertController) {
        this.itemDetailService = itemDetailService;
        this.farmerDetailService = farmerDetailService;
        this.navController = navController;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.ithItemDetail = this.itemDetailService.getItemDetail(this.itemId);
        this.ithFarmerDetail = this.farmerDetailService.getFarmerDetail(this.ithItemDetail.farmerId);
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '브릭스(brix)가 뭔가요?',
                subHeader: '',
                message: `<p>브릭스는 과일의 당도를 측정하는 단위로,
 100g의 용액 속에 들어있는 당의 g수를 뜻합니다.
 사과 당도가 15brix라고 하면,
 사과 100g당 15g의 당이 들어있다는 뜻이죠.</p>

      <p><strong>9brix 미만 : 보통 당도<br/>
      9~11brix : 높은 당도<br/>
      11brix 이상 : 매우 높은 당도</strong></p>

      <p>
      최근에는 비파괴 당도계를 이용해 과일을
      착즙하지 않고도 당도를 측정할 수 있습니다.</p>`,
                buttons: ['닫기'],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    openPage(url) {
        this.navController.navigateForward(url, {});
    }
};
FarmDataPage.ctorParameters = () => [
    { type: src_app_services_item_detail_service__WEBPACK_IMPORTED_MODULE_3__.ItemDetailService },
    { type: src_app_services_farmer_detail_service__WEBPACK_IMPORTED_MODULE_2__.FarmerDetailService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
FarmDataPage.propDecorators = {
    itemId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
FarmDataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-farm-data',
        template: _farm_data_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_farm_data_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FarmDataPage);



/***/ }),

/***/ 80791:
/*!***************************************************!*\
  !*** ./src/app/services/farmer-detail.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FarmerDetailService": () => (/* binding */ FarmerDetailService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);



let FarmerDetailService = class FarmerDetailService {
    constructor() {
        this.farmerDetail = {
            farmerDetails: [
                {
                    id: 1,
                    farmImg: 'assets/images/contents/farm/farm01.jpg',
                    title: '김농부씨',
                    avatarSubTitle: '농장배지 100개 보유중',
                    follower: 0,
                    badge: 'assets/images/contents/badge/badge01.png',
                    image: 'assets/images/contents/farmer/farmer01.jpg',
                    description: '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
                    location: '충남 논산시 00농원',
                    locationDesc: '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
                },
                {
                    id: 2,
                    farmImg: 'assets/images/contents/farm/farm02.jpg',
                    title: '김농부씨',
                    avatarSubTitle: '농장배지 100개 보유중',
                    follower: 0,
                    badge: 'assets/images/contents/badge/badge02.png',
                    image: 'assets/images/contents/farmer/farmer02.jpg',
                    description: '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
                    location: '충남 논산시 00농원',
                    locationDesc: '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
                },
                {
                    id: 3,
                    farmImg: 'assets/images/contents/farm/farm03.jpg',
                    title: '김농부씨',
                    avatarSubTitle: '농장배지 100개 보유중',
                    follower: 0,
                    badge: 'assets/images/contents/badge/badge03.png',
                    image: 'assets/images/contents/farmer/farmer03.jpg',
                    description: '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
                    location: '충남 논산시 00농원',
                    locationDesc: '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
                },
                {
                    id: 4,
                    farmImg: 'assets/images/contents/farm/farm04.jpg',
                    title: '김농부씨',
                    avatarSubTitle: '농장배지 100개 보유중',
                    follower: 0,
                    badge: 'assets/images/contents/badge/badge04.png',
                    image: 'assets/images/contents/farmer/farmer04.jpg',
                    description: '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
                    location: '충남 논산시 00농원',
                    locationDesc: '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
                },
                {
                    id: 5,
                    farmImg: 'assets/images/contents/farm/farm05.jpg',
                    title: '김농부씨',
                    avatarSubTitle: '농장배지 100개 보유중',
                    follower: 0,
                    badge: 'assets/images/contents/badge/badge05.png',
                    image: 'assets/images/contents/farmer/farmer05.jpg',
                    description: '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
                    location: '충남 논산시 00농원',
                    locationDesc: '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
                },
                {
                    id: 6,
                    farmImg: 'assets/images/contents/farm/farm06.jpg',
                    title: '김농부씨',
                    avatarSubTitle: '농장배지 100개 보유중',
                    follower: 0,
                    badge: 'assets/images/contents/badge/badge06.png',
                    image: 'assets/images/contents/farmer/farmer06.jpg',
                    description: '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
                    location: '충남 논산시 00농원',
                    locationDesc: '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
                },
                {
                    id: 7,
                    farmImg: 'assets/images/contents/farm/farm07.jpg',
                    title: '김농부씨',
                    avatarSubTitle: '농장배지 100개 보유중',
                    follower: 0,
                    badge: 'assets/images/contents/badge/badge07.png',
                    image: 'assets/images/contents/farmer/farmer07.jpg',
                    description: '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
                    location: '충남 논산시 00농원',
                    locationDesc: '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
                },
                {
                    id: 8,
                    farmImg: 'assets/images/contents/farm/farm08.jpg',
                    title: '김농부씨',
                    avatarSubTitle: '농장배지 100개 보유중',
                    follower: 0,
                    badge: 'assets/images/contents/badge/badge08.png',
                    image: 'assets/images/contents/farmer/farmer08.jpg',
                    description: '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
                    location: '충남 논산시 00농원',
                    locationDesc: '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
                },
                {
                    id: 9,
                    farmImg: 'assets/images/contents/farm/farm09.jpg',
                    title: '김농부씨',
                    avatarSubTitle: '농장배지 100개 보유중',
                    follower: 0,
                    badge: 'assets/images/contents/badge/badge09.png',
                    image: 'assets/images/contents/farmer/farmer09.jpg',
                    description: '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
                    location: '충남 논산시 00농원',
                    locationDesc: '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
                },
                {
                    id: 10,
                    farmImg: 'assets/images/contents/farm/farm10.jpg',
                    title: '김농부씨',
                    avatarSubTitle: '농장배지 100개 보유중',
                    follower: 0,
                    badge: 'assets/images/contents/badge/badge10.png',
                    image: 'assets/images/contents/farmer/farmer10.jpg',
                    description: '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
                    location: '충남 논산시 00농원',
                    locationDesc: '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
                },
                {
                    id: 11,
                    farmImg: 'assets/images/contents/farm/farm11.jpg',
                    title: '김농부씨',
                    avatarSubTitle: '농장배지 100개 보유중',
                    follower: 0,
                    badge: 'assets/images/contents/badge/badge11.png',
                    image: 'assets/images/contents/farmer/farmer11.jpg',
                    description: '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
                    location: '충남 논산시 00농원',
                    locationDesc: '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
                },
                {
                    id: 12,
                    farmImg: 'assets/images/contents/farm/farm12.jpg',
                    title: '김농부씨',
                    avatarSubTitle: '농장배지 100개 보유중',
                    follower: 0,
                    badge: 'assets/images/contents/badge/badge12.png',
                    image: 'assets/images/contents/farmer/farmer12.jpg',
                    description: '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
                    location: '충남 논산시 00농원',
                    locationDesc: '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
                },
            ],
        };
    }
    getFarmerDetail(itemId) {
        // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
        const result = jquery__WEBPACK_IMPORTED_MODULE_0__(this.farmerDetail.farmerDetails).filter(function (_i, n) {
            return +n['id'] === itemId;
        });
        return result[0];
    }
    getAllFarmerDetail() {
        return this.farmerDetail.farmerDetails;
    }
};
FarmerDetailService.ctorParameters = () => [];
FarmerDetailService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], FarmerDetailService);



/***/ }),

/***/ 39511:
/*!****************************************************************!*\
  !*** ./src/app/pages/farm-data/farm-data.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".desc-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n.desc-wrapper ion-img {\n  padding: 10px 0 10px 10px;\n  width: 40vw;\n  height: 40vw;\n  object-fit: cover;\n}\n.desc-wrapper .txt-box {\n  width: 40vw;\n  overflow: hidden;\n  padding-left: 20px;\n}\n.desc-wrapper .txt-box h3 {\n  padding: 10px 0 10px 0;\n}\n.desc-wrapper .txt-box p {\n  padding: 0px 10px 0 0;\n}\n.scroll-container {\n  overflow: auto;\n}\n.scroll-container .scrollable {\n  width: 200vw;\n}\n.scroll-container .scrollable .slide {\n  width: 80px;\n  height: 220px;\n  position: relative;\n}\n.scroll-container .scrollable .slide::before {\n  position: absolute;\n  display: block;\n  content: \"\";\n  width: 3px;\n  height: 3px;\n  border: 1px solid #17b239;\n  border-radius: 50%;\n  left: 50%;\n  top: 98.5px;\n}\n.scroll-container .scrollable .slide::after {\n  display: block;\n  content: \"\";\n  border: 1px solid #17b239;\n  position: absolute;\n  width: 100%;\n  top: 100px;\n}\n.scroll-container .scrollable .slide:nth-child(2n) {\n  padding-top: 120px;\n}\n.scroll-container .scrollable .slide .default-item {\n  box-shadow: 2px 2px 2px #17b239;\n  color: #17b239;\n  height: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.scroll-container .scrollable .slide .default-item ion-icon {\n  margin: 0 0 5px 0;\n}\n.scroll-container .scrollable .slide .default-item ion-grid {\n  margin: 0;\n}\n.scroll-container .scrollable .slide .default-item ion-grid p {\n  font-size: 0.8em;\n  margin: 0;\n}\n.desc-box {\n  background-color: #fff;\n  display: flex;\n  justify-content: space-around;\n}\n.desc-box ion-grid {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 5px;\n  height: 20vw;\n  border: 1px solid #17b239;\n  background-color: #17b239;\n  position: relative;\n}\n.desc-box ion-grid ion-button {\n  position: relative;\n  width: 70%;\n  font-size: 0.8em;\n  padding: 0;\n  margin: 0;\n}\n.desc-box ion-grid ion-icon {\n  position: absolute;\n  color: #fff;\n  top: 0px;\n  right: 0px;\n  z-index: 3;\n}\n.desc-box ion-grid p {\n  color: #f2f5f3;\n  padding: 0;\n  margin: 0;\n}\n.farmer-desc .desc-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n.farmer-desc .desc-wrapper ion-img {\n  padding: 10px 10px 10px 0;\n  width: 40vw;\n  height: 40vw;\n  object-fit: cover;\n}\n.farmer-desc .desc-wrapper .txt-box {\n  width: 40vw;\n  overflow: hidden;\n  padding-left: 20px;\n}\n.farmer-desc .desc-wrapper .txt-box h3 {\n  padding: 10px 0 10px 0;\n}\n.farmer-desc .desc-wrapper .txt-box p {\n  padding: 0px 10px 0 0;\n}\n.location {\n  background-color: #fff;\n  position: relative;\n}\n.location .img-wrapper ion-img {\n  height: 60vw;\n  object-fit: cover;\n}\n.location .swiper-pagination {\n  position: absolute;\n  bottom: 0;\n  left: 45%;\n  z-index: 999;\n}\n.reviews {\n  background-color: #fff;\n  height: 30vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.reviews ion-col {\n  display: flex;\n  flex-direction: column;\n}\n.reviews ion-row {\n  display: flex;\n  justify-content: center;\n  width: 95vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcm0tZGF0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUZGO0FBR0U7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUVJO0VBQ0Usc0JBQUE7QUFBTjtBQUVJO0VBQ0UscUJBQUE7QUFBTjtBQU1BO0VBQ0UsY0FBQTtBQUhGO0FBSUU7RUFDRSxZQUFBO0FBRko7QUFHSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUVNO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQVI7QUFFTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQVI7QUFFTTtFQUNFLGtCQUFBO0FBQVI7QUFFTTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFFUTtFQUNFLGlCQUFBO0FBQVY7QUFFUTtFQUNFLFNBQUE7QUFBVjtBQUNVO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0FBQ1o7QUFRQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBTEY7QUFPRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUxKO0FBT0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBTE47QUFPSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUxOO0FBT0k7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFMTjtBQVlFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFUSjtBQVVJO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBUk47QUFVSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUk47QUFTTTtFQUNFLHNCQUFBO0FBUFI7QUFTTTtFQUNFLHFCQUFBO0FBUFI7QUFjQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFYRjtBQWFJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBWE47QUFjRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBWko7QUFpQkE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFkRjtBQWVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBYko7QUFlRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFiSiIsImZpbGUiOiJmYXJtLWRhdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaXRlbSBkZXRhaWxcclxuXHJcbi8vIGRlc2NcclxuLmRlc2Mtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgaW9uLWltZyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxMHB4O1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICBoZWlnaHQ6IDQwdnc7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgLnR4dC1ib3gge1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgaDMge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDAgMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIHRpbWVsaW5lXHJcbi5zY3JvbGwtY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICAuc2Nyb2xsYWJsZSB7XHJcbiAgICB3aWR0aDogMjAwdnc7XHJcbiAgICAuc2xpZGUge1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE3YjIzOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogOTguNXB4O1xyXG4gICAgICB9XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxN2IyMzk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgJjpudGgtY2hpbGQoMm4pIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmRlZmF1bHQtaXRlbSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggIzE3YjIzOTtcclxuICAgICAgICBjb2xvcjogIzE3YjIzOTtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tZ3JpZCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gZGVzYy1ib3hcclxuLmRlc2MtYm94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gIGlvbi1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDIwdnc7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTdiMjM5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YjIzOTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgICB6LWluZGV4OiAzO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiAjZjJmNWYzO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBmYXJtZXItZGVzY1xyXG4uZmFybWVyLWRlc2Mge1xyXG4gIC5kZXNjLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGlvbi1pbWcge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAwO1xyXG4gICAgICB3aWR0aDogNDB2dztcclxuICAgICAgaGVpZ2h0OiA0MHZ3O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC50eHQtYm94IHtcclxuICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgaDMge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHggMCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBsb2NhdGlvblxyXG4ubG9jYXRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5pbWctd3JhcHBlciB7XHJcbiAgICBpb24taW1nIHtcclxuICAgICAgaGVpZ2h0OiA2MHZ3O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICB9XHJcbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDQ1JTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHJldmlld3NcclxuLnJldmlld3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgaW9uLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgaW9uLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTV2dztcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 6178:
/*!****************************************************************!*\
  !*** ./src/app/pages/farm-data/farm-data.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content scrollEvents=\"true\" [fullscreen]=\"true\">\n  <!-- item-detail -->\n  <ion-grid class=\"item-detail ion-margin-top\">\n    <ion-item class=\"ion-margin-bottom\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"ithItemDetail.avatar\" />\n      </ion-avatar>\n      <ion-col\n        ><ion-grid>{{ithItemDetail.avatarTitle}}</ion-grid\n        ><ion-grid>{{ithItemDetail.title}}</ion-grid>\n      </ion-col>\n    </ion-item>\n    <ion-card class=\"ion-no-margin\">\n      <ion-card-content class=\"ion-no-margin ion-no-padding\">\n        <ion-row class=\"desc-wrapper\">\n          <ion-img [src]=\"ithItemDetail.image\"></ion-img>\n          <ion-col class=\"txt-box\">\n            <h3 class=\"ion-text-lg\">\n              <strong>{{ithItemDetail.cultivar}}</strong>\n            </h3>\n            <p>{{ithItemDetail.description}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-grid>\n  <!-- time-line -->\n  <ion-grid class=\"scroll-container time-line\"\n    ><ion-item class=\"scrollable\">\n      <div\n        class=\"ion-time ion-margin-top slide\"\n        *ngFor=\"let item of ithItemDetail.timeLine\"\n        (click)=\"onItemClickFunc(item, $event)\"\n      >\n        <ion-grid class=\"default-item border border-radius\">\n          <ion-icon [name]=\"item['icon']\"></ion-icon>\n\n          <ion-grid>\n            <p class=\"text-color-primary\">{{item['date']}}</p>\n            <p class=\"text-color-primary\">{{item['content']|truncate:[6]}}</p>\n          </ion-grid>\n        </ion-grid>\n      </div>\n    </ion-item>\n  </ion-grid>\n  <!-- desc-box -->\n  <ion-grid class=\"desc-box\">\n    <ion-grid class=\"afterHarvest\">\n      <ion-button (click)=\"presentAlert()\" color=\"success\"\n        ><p>수확후</p> </ion-button\n      ><ion-icon name=\"help-circle-outline\" (click)=\"presentAlert()\"></ion-icon>\n      <strong><p>{{ithItemDetail.afterHarvest}}</p></strong></ion-grid\n    >\n    <ion-grid class=\"brix\">\n      <ion-button (click)=\"presentAlert()\" color=\"success\"\n        ><p>당도</p> </ion-button\n      ><ion-icon name=\"help-circle-outline\" (click)=\"presentAlert()\"></ion-icon>\n      <strong><p>{{ithItemDetail.brix}}</p></strong></ion-grid\n    >\n    <ion-grid class=\"weight\">\n      <ion-button (click)=\"presentAlert()\" color=\"success\"\n        ><p>(개당)무게</p> </ion-button\n      ><ion-icon name=\"help-circle-outline\" (click)=\"presentAlert()\"></ion-icon>\n      <strong><p>{{ithItemDetail.weight}}</p></strong></ion-grid\n    >\n    <ion-grid class=\"certi\">\n      <ion-button (click)=\"presentAlert()\" color=\"success\"\n        ><p>인증</p> </ion-button\n      ><ion-icon name=\"help-circle-outline\" (click)=\"presentAlert()\"></ion-icon>\n      <strong><p>{{ithItemDetail.certi}}</p></strong></ion-grid\n    >\n  </ion-grid>\n  <!-- farmer-desc -->\n  <ion-grid class=\"farmer-desc ion-margin-top ion-margin-bottom\">\n    <ion-card class=\"ion-no-margin\">\n      <ion-card-content class=\"ion-no-margin ion-no-padding\">\n        <ion-row class=\"desc-wrapper\">\n          <ion-col class=\"txt-box\">\n            <h3 class=\"ion-text-lg\">\n              <strong>{{ithFarmerDetail.title}}</strong>\n            </h3>\n            <p>{{ithFarmerDetail.description}}</p>\n          </ion-col>\n          <ion-img [src]=\"ithFarmerDetail.image\"></ion-img>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-grid>\n  <!-- location -->\n  <ion-grid class=\"location ion-margin-bottom\">\n    <h1 class=\"text-size-md\">{{ithFarmerDetail.location}}</h1>\n\n    <swiper [pagination]=\"true\" class=\"mySwiper\">\n      <ng-template swiperSlide\n        ><ion-grid class=\"img-wrapper\">\n          <ion-img\n            [src]=\"ithFarmerDetail.farmImg\"\n          ></ion-img> </ion-grid></ng-template\n      ><ng-template swiperSlide\n        ><ion-grid class=\"img-wrapper\">\n          <ion-img [src]=\"ithFarmerDetail.farmImg\"></ion-img> </ion-grid\n      ></ng-template>\n    </swiper>\n\n    <ion-grid class=\"text-size-sm\"> {{ithFarmerDetail.locationDesc}} </ion-grid>\n  </ion-grid>\n  <!-- reviews -->\n  <ion-grid class=\"reviews\">\n    <ion-text color=\"danger\">구매자 리뷰</ion-text>\n    <ion-col>\n      <ion-row> <ion-icon size=\"large\" name=\"alert\"></ion-icon> </ion-row>\n      <ion-row>페이지 준비중입니다...</ion-row>\n      <ion-button (click)=\"openPage('review-search')\" color=\"success\">\n        <ion-icon slot=\"start\" name=\"search-circle-outline\"></ion-icon>\n        리뷰 작성 하러가기\n      </ion-button>\n    </ion-col>\n  </ion-grid>\n\n  <app-footer></app-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_farm-data_farm-data_page_ts.js.map