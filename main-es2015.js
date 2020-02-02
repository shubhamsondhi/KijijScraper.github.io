(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/mb-map/mb-map.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/mb-map/mb-map.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map\r\n    (mapClick)=\"clickedMap($event)\"\r\n    [latitude]=\"lat\"\r\n    [longitude]=\"lng\"\r\n    [zoom]=\"zoom\"\r\n    mapTypeId=\"terrain\"\r\n    [disableDefaultUI]=\"false\"\r\n    [zoomControl]=\"false\"\r\n>\r\n    <agm-marker\r\n        *ngFor=\"let m of changedMarkers; let i = index\"\r\n        [latitude]=\"m.lat\"\r\n        [longitude]=\"m.lng\"\r\n        [title]=\"m.date\"\r\n        [label]=\"{\r\n            color: 'black',\r\n            fontSize: '14px',\r\n            fontWeight: 'bold',\r\n            text: m.price\r\n        }\"\r\n        [markerDraggable]=\"m.draggable\"\r\n        (markerClick)=\"clickedMarker(m.label, infoWindow, i)\"\r\n    >\r\n        <agm-info-window #infoWindow maxWidth=\"480\">\r\n            <mat-card class=\"example-card\">\r\n                <mat-card-header>\r\n                    <div mat-card-avatar class=\"example-header-image\"></div>\r\n                    <mat-card-title>{{ m.title }}</mat-card-title>\r\n                    <mat-card-subtitle>\r\n                        <strong>Price: {{ m.price }}</strong>\r\n                    </mat-card-subtitle>\r\n                    <mat-card-subtitle>\r\n                        Address: {{ m.address }}\r\n                    </mat-card-subtitle>\r\n                    <mat-card-subtitle *ngIf=\"m.date\">\r\n                        <strong>Date: {{ m.date }}</strong>\r\n                    </mat-card-subtitle>\r\n                </mat-card-header>\r\n                <mat-accordion>\r\n                    <!-- <mat-expansion-panel\r\n                        *ngFor=\"let url of m.imagesUrl; let i = index\"\r\n                    >\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                Image {{ i + 1 }}\r\n                            </mat-panel-title>\r\n                        </mat-expansion-panel-header>\r\n\r\n                        <img\r\n                            mat-card-image\r\n                            [src]=\"url\"\r\n                            alt=\"Photo of a Shiba Inu\"\r\n                        />\r\n                    </mat-expansion-panel> -->\r\n                </mat-accordion>\r\n                <mat-card-content>\r\n                    <p>Description: {{ m.des }}</p>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                    Url of ad:\r\n                    <a mat-button target=\"_blank\" [href]=\"m.url\"> Kijiji Url</a>\r\n                    <!-- <button  >SHARE</button> -->\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </agm-info-window>\r\n    </agm-marker>\r\n\r\n    <!-- <agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\"\r\n      [radius]=\"5000\"\r\n      [fillColor]=\"'red'\"\r\n      [circleDraggable]=\"true\"\r\n      [editable]=\"true\">\r\n  </agm-circle> -->\r\n</agm-map>\r\n\r\n<ng5-slider\r\n    [(value)]=\"minMaxValue[0]\"\r\n    [(highValue)]=\"minMaxValue[1]\"\r\n    [options]=\"options\"\r\n    (userChangeEnd)=\"onSliderChanged()\"\r\n></ng5-slider>\r\n<button mat-raised-button color=\"primary\" (click)=\"restMarker()\">\r\n    Reset Markers\r\n</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/mb-table/mb-table.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/mb-table/mb-table.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  mb-table works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <div class=\"navbar navbar-dark bg-dark box-shadow\">\r\n        <div class=\"container d-flex justify-content-between\">\r\n            <a href=\"#\" class=\"navbar-brand d-flex align-items-center\">\r\n                <i\r\n                    style=\"margin-right: 0.3em\"\r\n                    class=\"fas fa-map-marked-alt\"\r\n                ></i>\r\n                <strong>Kijiji scraper</strong>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</header>\r\n<mat-drawer-container class=\"example-container\" autosize>\r\n    <mat-drawer #drawer class=\"col-md-2 example-sidenav\" opened mode=\"side\">\r\n        <div class=\"filterInputs\">\r\n            <mat-form-field appearance=\"outline\">\r\n                <input\r\n                    min=\"1\"\r\n                    (change)=\"createUrl()\"\r\n                    type=\"number\"\r\n                    matInput\r\n                    placeholder=\"Page number\"\r\n                    #urlBox=\"ngModel\"\r\n                    [(ngModel)]=\"startPage\"\r\n                    required\r\n                    name=\"startbox\"\r\n                    aria-describedby=\"basic-addon3\"\r\n                />\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>City Name</mat-label>\r\n                <mat-select\r\n                    name=\"cityDdl\"\r\n                    #city\r\n                    [(ngModel)]=\"selectedCityCode\"\r\n                    (selectionChange)=\"citySelected($event)\"\r\n                ><mat-option>--</mat-option>\r\n                    <mat-option\r\n                        *ngFor=\"let items of cityNames.names\"\r\n                        [value]=\"items.citycode\"\r\n                    >\r\n                        {{ items.cityName }}</mat-option\r\n                    >\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\" *ngIf=\"selectedCityCode\">\r\n                <mat-label>Categories</mat-label>\r\n                <mat-select\r\n                    name=\"categoryDdl\"\r\n                    #category\r\n                    [(ngModel)]=\"selectedcateGoryIdLevel1\"\r\n                    (selectionChange)=\"categoryChanged($event)\"\r\n                ><mat-option>--</mat-option>\r\n                    <mat-option\r\n                        *ngFor=\"let items of categories?.level1?.items\"\r\n                        [value]=\"items.categoryId\"\r\n                    >\r\n                        {{ items.name }}</mat-option\r\n                    >\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field\r\n                appearance=\"outline\"\r\n                *ngIf=\"selectedcateGoryIdLevel1\"\r\n            >\r\n                <mat-label>Sub Categories</mat-label>\r\n                <mat-select\r\n                    name=\"categorySubDdl\"\r\n                    [(ngModel)]=\"selectedcateGoryIdLevel2\"\r\n                    (selectionChange)=\"categoryChanged($event)\"\r\n                ><mat-option>--</mat-option>\r\n                    <mat-option\r\n                        *ngFor=\"let items of categories?.level2?.items\"\r\n                        [value]=\"items.categoryId\"\r\n                    >\r\n                        {{ items.name }}</mat-option\r\n                    >\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field\r\n                appearance=\"outline\"\r\n                *ngIf=\"\r\n                    categories?.level3?.items.length &&\r\n                    !(categories?.level3?.items.length === 0)\r\n                \"\r\n            >\r\n                <mat-label>Level 3 Cagtegories</mat-label>\r\n                <mat-select\r\n                    name=\"categorySubDdl\"\r\n                    [(ngModel)]=\"selectedcateGoryIdLevel3\"\r\n                    (selectionChange)=\"categoryChanged($event)\"\r\n                >\r\n                    <mat-option\r\n                        *ngFor=\"let items of categories?.level3?.items\"\r\n                        [value]=\"items.categoryId\"\r\n                    >\r\n                        {{ items.name }}</mat-option\r\n                    >\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n        <div *ngIf=\"needPriceFilter\">\r\n            <mat-form-field class=\"price\" appearance=\"outline\">\r\n                <input\r\n                    matInput\r\n                    (change)=\"createUrl()\"\r\n                    type=\"text\"\r\n                    [name]=\"minPrice\"\r\n                    [(ngModel)]=\"minPrice\"\r\n                    data-type=\"price\"\r\n                    data-placeholder=\"price from\"\r\n                    title=\"from\"\r\n                    class=\"placeholder-text\"\r\n                />\r\n            </mat-form-field>\r\n            -\r\n            <mat-form-field class=\"price\" appearance=\"outline\">\r\n                <input\r\n                    (change)=\"createUrl()\"\r\n                    matInput\r\n                    type=\"text\"\r\n                    [name]=\"maxPrice\"\r\n                    [(ngModel)]=\"maxPrice\"\r\n                    data-type=\"price\"\r\n                    data-placeholder=\"price to\"\r\n                    title=\"to\"\r\n                    class=\"placeholder-text\"\r\n                />\r\n            </mat-form-field>\r\n        </div>\r\n    </mat-drawer>\r\n    <div class=\"example-sidenav-content\">\r\n        <app-home [url]=\"url\"></app-home>\r\n        <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n            Toggle sidenav\r\n        </button>\r\n    </div>\r\n</mat-drawer-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron \">\n    <div class=\"container\">\n        <form #rentHomes=\"ngForm\" class=\"example-form\">\n            <div class=\"row\">\n                <div class=\"col-lg-10\">\n                    <div class=\"input-group mb-3\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon3\"\n                                >URL:</span\n                            >\n                        </div>\n                        <input\n                        disabled\n\n                            type=\"text\"\n                            class=\"form-control\"\n                            #urlBox=\"ngModel\"\n                            [(ngModel)]=\"url\"\n                            required\n                            appUrlValidator\n                            name=\"urlBox\"\n                            aria-describedby=\"basic-addon3\"\n                        />\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n\n                <div class=\"col-lg-3\">\n                    <div class=\"input-group mb-3\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon3\"\n                                >Keep Last result:</span\n                            >\n                        </div>\n                        <input\n                            type=\"checkbox\"\n                            class=\"form-control\"\n                            #urlBox=\"ngModel\"\n                            [(ngModel)]=\"isKeep\"\n                            name=\"keepLogs\"\n                            aria-describedby=\"basic-addon3\"\n                        />\n                    </div>\n                </div>\n                <!-- <a style=\"float: right;\" href=\"#\">Save in Memory</a>|\n              <a  style=\"float: right;\"href=\"#\">Remove from Memory</a>|\n              <a href=\"#\">Open from Memory</a> -->\n                <div class=\"col-lg-2\">\n                    <button\n                    [disabled]=\"!this.url\"\n                        mat-raised-button\n                        color=\"primary\"\n                        (click)=\"getRentedHouses()\"\n                    >\n                        Run\n                    </button>\n                </div>\n                <div class=\"col-lg-2\">\n                    <button\n                        mat-raised-button\n                        color=\"primary\"\n                        (click)=\"DeleteHistoryData()\"\n                    >\n                        Delete History\n                    </button>\n                </div>\n            </div>\n            <div\n                *ngIf=\"urlBox.invalid && (urlBox.dirty || urlBox.touched)\"\n                class=\"alert alert-danger\"\n            >\n                <div *ngIf=\"urlBox.errors['required']\">\n                    URL is required.\n                </div>\n                <div *ngIf=\"urlBox.errors['isUrlValid']\">\n                    Please enter the correct url.\n                </div>\n            </div>\n        </form>\n        <!-- <mat-progress-bar mode=\"buffer\"></mat-progress-bar> -->\n    </div>\n</div>\n<!-- section 2 -->\n<div class=\"container text-center\">\n    <div class=\"col-lg-12\" style=\"padding-bottom:10px\">\n        <app-mb-map [data]=\"scrapedData\"></app-mb-map>\n    </div>\n    <!-- <button mat-raised-button color=\"primary\">Download CSV</button> -->\n</div>\n\n<!-- Content here -->\n"

/***/ }),

/***/ "./src/app/Shared/errorHandle.ts":
/*!***************************************!*\
  !*** ./src/app/Shared/errorHandle.ts ***!
  \***************************************/
/*! exports provided: ErrorHandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandle", function() { return ErrorHandle; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

class ErrorHandle {
    /**
      * Handles errors with service requests.
      * @param error The error from the http response.
      */
    handleError(error) {
        console.log(error);
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
        }
        // return an ErrorObservable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('Something bad happened; please try again later.');
    }
}


/***/ }),

/***/ "./src/app/Shared/mb-map/marker.ts":
/*!*****************************************!*\
  !*** ./src/app/Shared/mb-map/marker.ts ***!
  \*****************************************/
/*! exports provided: Marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
// just an interface for type safety.
class Marker {
}


/***/ }),

/***/ "./src/app/Shared/mb-map/mb-map.component.css":
/*!****************************************************!*\
  !*** ./src/app/Shared/mb-map/mb-map.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-content {\r\nwidth: 400px;\r\n  height: 100px;\r\n  text-overflow: ellipsis;\r\n  /* white-space: nowrap; */\r\n  display: block;\r\n  overflow: hidden;\r\n}\r\n\r\nagm-map {\r\n  height: 450px;\r\n  text-shadow: 0px 0px 9.2px white;\r\n\r\n\r\n};\r\n\r\n.agm-map-container-inner {\r\n  width: inherit;\r\n  height: inherit;\r\n}\r\n\r\n.agm-map-content {\r\n  display:none;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkL21iLW1hcC9tYi1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFlBQVk7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQzs7O0FBR2xDLENBQUE7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL1NoYXJlZC9tYi1tYXAvbWItbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC1jb250ZW50IHtcclxud2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgLyogd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5hZ20tbWFwIHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDkuMnB4IHdoaXRlO1xyXG5cclxuXHJcbn07XHJcblxyXG4uYWdtLW1hcC1jb250YWluZXItaW5uZXIge1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxufVxyXG4uYWdtLW1hcC1jb250ZW50IHtcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Shared/mb-map/mb-map.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Shared/mb-map/mb-map.component.ts ***!
  \***************************************************/
/*! exports provided: MbMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MbMapComponent", function() { return MbMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_mb_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mb-map.service */ "./src/app/services/mb-map.service.ts");
/* harmony import */ var _marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marker */ "./src/app/Shared/mb-map/marker.ts");
/* harmony import */ var src_app_services_rented_houses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rented-houses.service */ "./src/app/services/rented-houses.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm2015/ng5-slider.js");







let MbMapComponent = class MbMapComponent {
    constructor(mb, rh) {
        this.mb = mb;
        this.rh = rh;
        this.latitude = -28.68352;
        this.longitude = -147.20785;
        this.mapType = 'satellite';
        this.minMaxValue = [0, 100];
        // google maps zoom level
        this.zoom = 8;
        // initial center position for the map
        this.lat = 43.0582;
        this.lng = -79.2902;
        this.markers = [];
        this.changedMarkers = [];
        this.options = this.getOptions(2000);
    }
    ngOnChanges(simp) {
        console.log('run it');
        // console.log('local', localStorage.getItem('dataSource'));
        // create observables from address values in geocode api of google.
        if (this.data !== undefined &&
            this.data !== null &&
            this.data.length !== 0) {
            const addressObs = this.data.map(x => this.mb.getLatLong(x.address));
            this.minMaxValue = this.getMinMaxPrice(this.markers);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(addressObs).subscribe(res => {
                res.forEach((v, i) => {
                    if (v.status === 'OK' && v.results) {
                        const mar = this.mapResultToMarker(v, i);
                        this.markers.push(mar);
                    }
                });
                this.restMarker();
                // localStorage.setItem(
                //     'dataSource',
                //     JSON.stringify(this.markers)
                // );
            });
        }
        else {
            console.log('this.markers', this.markers);
            // if (localStorage.getItem('dataSource') !== null) {
            //     // this.markers = JSON.parse(localStorage.getItem('dataSource'));
            // }
        }
    }
    getLabelOption(price) {
        return {
            color: 'black',
            fontFamily: '',
            fontSize: '14px',
            fontWeight: 'bold',
            text: price,
        };
    }
    clickedMap(event) {
        if (this.previous) {
            this.previous.close();
            this.previous = undefined;
        }
    }
    clickedMarker(label, infoWindow, marker, index) {
        if (this.previous && this.previous !== infoWindow) {
            this.previous.close();
        }
        this.previous = infoWindow;
    }
    mapResultToMarker(v, i) {
        const mar = new _marker__WEBPACK_IMPORTED_MODULE_3__["Marker"]();
        mar.lat = v.results[0].geometry.location.lat;
        mar.lng = v.results[0].geometry.location.lng;
        mar.des = this.data[i].discription;
        mar.title = this.data[i].title;
        mar.imagesUrl = this.data[i].images;
        mar.date = this.data[i].date;
        mar.price = this.data[i].price;
        mar.url = this.data[i].url;
        mar.address = this.data[i].address;
        return mar;
    }
    /**
     *
     */
    restMarker() {
        this.minMaxValue = this.getMinMaxPrice(this.markers);
        this.options = this.getOptions(this.minMaxValue[1]);
        this.changedMarkers = this.markers;
    }
    /**
     *
     * @param markers
     */
    getMinMaxPrice(markers) {
        if (!this.markers || this.markers.length === 0) {
            return this.minMaxValue;
        }
        // convert currency to number and then remove all empty/NaN values
        const priceArray = this.markers
            .map(m => parseFloat(m.price.replace(/[,$]/g, '')))
            .filter(value => !Number.isNaN(value));
        // find max value
        const max = priceArray.reduce((pr, cur) => {
            return Math.max(pr, cur);
        });
        // find min value
        const min = priceArray.reduce((pr, cur) => {
            return Math.min(pr, cur);
        });
        return [min, max];
    }
    /**
     *
     */
    ngOnInit() {
        // convert address to lat and long
        // this.mb.getLatLong(address).subscribe(ln => {
        //   if (ln.status === 'OK') {
        //     console.log('ln', ln);
        //     // ln.results.forEach((v, i) => {
        //     //   const mar: Marker = new Marker();
        //     //   mar.lat = v.geometry.location.lat;
        //     //   mar.lat = v.geometry.location.lng;
        //     //   mar.des = this.data[i].discription;
        //     //   mar.imagesUrl = this.data[i].images;
        //     //   mar.price = this.data[i].price;
        //     //   mar.url = this.data[i].url;
        //     //   mar.address = this.data[i].address;
        //     //   this.markers.push(mar);
        //     // });
        //   }
        // });
    }
    /**
     *
     * @param maxPrice
     */
    getOptions(maxPrice) {
        return {
            floor: 0,
            ceil: maxPrice,
            translate: (value, label) => {
                switch (label) {
                    case ng5_slider__WEBPACK_IMPORTED_MODULE_6__["LabelType"].Low:
                        return '<b>Min price:</b> $' + value;
                    case ng5_slider__WEBPACK_IMPORTED_MODULE_6__["LabelType"].High:
                        return '<b>Max price:</b> $' + value;
                    default:
                        return '$' + value;
                }
            },
        };
    }
    /**
     *
     */
    onSliderChanged() {
        // convert currency to number and then remove all empty/NaN values
        const priceArray = this.markers.map(m => parseFloat(m.price.replace(/[,$]/g, '')));
        // get markers from min and max range
        this.changedMarkers = this.markers.filter((v, i) => {
            return (priceArray[i] >= this.minMaxValue[0] &&
                priceArray[i] <= this.minMaxValue[1]);
        });
    }
};
MbMapComponent.ctorParameters = () => [
    { type: src_app_services_mb_map_service__WEBPACK_IMPORTED_MODULE_2__["MbMapService"] },
    { type: src_app_services_rented_houses_service__WEBPACK_IMPORTED_MODULE_4__["RentedHousesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], MbMapComponent.prototype, "data", void 0);
MbMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mb-map',
        template: __webpack_require__(/*! raw-loader!./mb-map.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/mb-map/mb-map.component.html"),
        styles: [__webpack_require__(/*! ./mb-map.component.css */ "./src/app/Shared/mb-map/mb-map.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_mb_map_service__WEBPACK_IMPORTED_MODULE_2__["MbMapService"], src_app_services_rented_houses_service__WEBPACK_IMPORTED_MODULE_4__["RentedHousesService"]])
], MbMapComponent);



/***/ }),

/***/ "./src/app/Shared/mb-table/mb-table.component.css":
/*!********************************************************!*\
  !*** ./src/app/Shared/mb-table/mb-table.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1NoYXJlZC9tYi10YWJsZS9tYi10YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Shared/mb-table/mb-table.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Shared/mb-table/mb-table.component.ts ***!
  \*******************************************************/
/*! exports provided: MbTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MbTableComponent", function() { return MbTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MbTableComponent = class MbTableComponent {
    constructor() { }
    ngOnInit() {
    }
};
MbTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mb-table',
        template: __webpack_require__(/*! raw-loader!./mb-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/mb-table/mb-table.component.html"),
        styles: [__webpack_require__(/*! ./mb-table.component.css */ "./src/app/Shared/mb-table/mb-table.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MbTableComponent);



/***/ }),

/***/ "./src/app/Shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/Shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _mb_map_mb_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mb-map/mb-map.component */ "./src/app/Shared/mb-map/mb-map.component.ts");
/* harmony import */ var _mb_table_mb_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mb-table/mb-table.component */ "./src/app/Shared/mb-table/mb-table.component.ts");
/* harmony import */ var _url_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./url-validator.directive */ "./src/app/Shared/url-validator.directive.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm2015/ng5-slider.js");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");










let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _services_services_module__WEBPACK_IMPORTED_MODULE_8__["ServicesModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ng5_slider__WEBPACK_IMPORTED_MODULE_7__["Ng5SliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                // apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
                apiKey: 'AIzaSyC3u1VAIs0S5Ij-HmcxrTEMIx19X8UZH30',
            }),
        ],
        exports: [_url_validator_directive__WEBPACK_IMPORTED_MODULE_5__["UrlValidatorDirective"], _mb_map_mb_map_component__WEBPACK_IMPORTED_MODULE_3__["MbMapComponent"]],
        declarations: [_mb_map_mb_map_component__WEBPACK_IMPORTED_MODULE_3__["MbMapComponent"], _mb_table_mb_table_component__WEBPACK_IMPORTED_MODULE_4__["MbTableComponent"], _url_validator_directive__WEBPACK_IMPORTED_MODULE_5__["UrlValidatorDirective"]],
        providers: [],
    })
], SharedModule);



/***/ }),

/***/ "./src/app/Shared/url-validator.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/Shared/url-validator.directive.ts ***!
  \***************************************************/
/*! exports provided: urlValidator, UrlValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlValidator", function() { return urlValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlValidatorDirective", function() { return UrlValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

var UrlValidatorDirective_1;


/** A hero's name can't match the given regular expression */
function urlValidator(nameRe) {
    return (control) => {
        const forbidden = nameRe.test(control.value);
        console.log('forbidden', forbidden);
        return forbidden ? null : { isUrlValid: { value: control.value } };
    };
}
let UrlValidatorDirective = UrlValidatorDirective_1 = class UrlValidatorDirective {
    constructor() { }
    validate(control) {
        const reg = 'https://www.kijiji.ca/.*';
        return reg ? urlValidator(new RegExp(reg))(control) : null;
    }
};
UrlValidatorDirective = UrlValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appUrlValidator]',
        providers: [
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: UrlValidatorDirective_1, multi: true }
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UrlValidatorDirective);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  padding-top: 20px;\r\n  padding-bottom: 10px;\r\n}\r\n.example-sidenav{\r\n\r\n  padding-top: 100px;\r\n  padding-left: 20px;\r\n}\r\n.matformfield{\r\n\r\n  /* width: 100%; */\r\n\r\n}\r\n.price{\r\nmargin-right: 10px;\r\nmargin-left: 10px;\r\n\r\n  width: 40%;\r\n}\r\n.filterInputs{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.filterInputs > * {\r\n  width: 100%;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLGlCQUFpQjs7QUFFbkI7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixpQkFBaUI7O0VBRWYsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXOztBQUViIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4uZXhhbXBsZS1zaWRlbmF2e1xyXG5cclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi5tYXRmb3JtZmllbGR7XHJcblxyXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG5cclxufVxyXG5cclxuLnByaWNle1xyXG5tYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbm1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICB3aWR0aDogNDAlO1xyXG59XHJcbi5maWx0ZXJJbnB1dHN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5maWx0ZXJJbnB1dHMgPiAqIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_kijiji_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/kijiji.service */ "./src/app/services/kijiji.service.ts");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/category */ "./src/app/models/category.ts");




let AppComponent = class AppComponent {
    constructor(ks) {
        this.ks = ks;
        this.startPage = 1;
        this.cityNames = new _models_category__WEBPACK_IMPORTED_MODULE_3__["CityNamesForOntario"]();
        this.baseUrl = 'https://www.kijiji.ca/';
        this.minPrice = '';
        this.maxPrice = '';
    }
    ngOnInit() {
        // this.url = this.baseUrl;
        this.ks.getCategoryLevel1().subscribe(cata => (this.categories = cata));
    }
    citySelected(event) {
        console.log(event);
        this.selectedCity = this.cityNames.names.find(ci => ci.citycode === event.value);
        this.createUrl();
    }
    createUrl(category) {
        if (this.selectedCity) {
            if (category) {
                this.lastCategory = category;
            }
            if (this.lastCategory) {
                this.needPriceFilter =
                    this.lastCategory.search(/Rent|Sale/g) !== -1;
                this.setupUrl();
                this.priceChanged();
            }
        }
    }
    setupUrl() {
        this.url = `${this.baseUrl}b-${this.lastCategory.replace(/-|\s./g, '')}/${this.selectedCity.cityurl}/page-${this.startPage}/c${this.selectedCateId}${this.selectedCity.citycode}`;
    }
    priceChanged() {
        if (this.minPrice && this.maxPrice && this.needPriceFilter) {
            this.url = this.addFilter(`price=${this.minPrice}__${this.maxPrice}`);
        }
    }
    addFilter(arg0) {
        const va = this.url.includes('?') ? '&' : '?';
        return (this.url = this.url + va + arg0);
    }
    categoryChanged(event) {
        if (event.source && event.value) {
            console.log('event', event.source.triggerValue);
            this.selectedCateId = event.value;
            this.createUrl(event.source.triggerValue);
            this.ks.getCategorySubLevels(event.value).subscribe(cata => {
                this.categories = cata;
                console.log('this.categories', this.categories);
            });
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_kijiji_service__WEBPACK_IMPORTED_MODULE_2__["KijijiService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_kijiji_service__WEBPACK_IMPORTED_MODULE_2__["KijijiService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_mb_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/mb-map.service */ "./src/app/services/mb-map.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");





// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatProgressBarModule, MatButtonModule } from '@angular/material';
// import { UrlValidatorDirective } from './Shared/url-validator.directive';
// import { SharedModule } from './Shared/shared.module';








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"]
        ],
        providers: [_services_mb_map_service__WEBPACK_IMPORTED_MODULE_5__["MbMapService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
    })
], AppModule);

// AIzaSyC3u1VAIs0S5Ij-HmcxrTEMIx19X8UZH30


/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _Shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Shared/shared.module */ "./src/app/Shared/shared.module.ts");
/* harmony import */ var _Shared_url_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Shared/url-validator.directive */ "./src/app/Shared/url-validator.directive.ts");










let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _Shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        ],
        exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _Shared_url_validator_directive__WEBPACK_IMPORTED_MODULE_9__["UrlValidatorDirective"]],
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_rented_houses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rented-houses.service */ "./src/app/services/rented-houses.service.ts");



let HomeComponent = class HomeComponent {
    constructor(rh) {
        this.rh = rh;
        this.title = 'HouseScraping';
        // url = '';
        this.startPage = 1;
        this.endPage = 3;
        this.isKeep = true;
        this.scrapedData = new Array();
    }
    ngOnInit() {
        if (localStorage.getItem('dataSource') !== null) {
            this.scrapedData = JSON.parse(localStorage.getItem('dataSource'));
        }
    }
    validator() { }
    /**
     * get all the list of rented house
     */
    getRentedHouses() {
        this.rh.getItemsInfoByPage({
            url: this.url,
        })
            .subscribe(items => {
            console.log('items', items);
            if (!this.isKeep) {
                localStorage.removeItem('dataSource');
            }
            this.scrapedData = new Array();
            items.forEach(element => {
                this.scrapedData.push(element);
            });
            localStorage.setItem('dataSource', JSON.stringify(this.scrapedData));
            this.scrapedData = [...this.scrapedData];
            console.log('this.scrapedData', this.scrapedData);
        });
    }
    /**
     * On button click
     */
    DeleteHistoryData() {
        localStorage.removeItem('dataSource');
    }
    /**
     * on Button click
     * @param page
     */
    GetAllTheItems(page) {
        console.log('items', page);
        return page.listOfpageUrls.map(pageUrl => this.rh.getItemsInfoByPage({ url: pageUrl }));
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_rented_houses_service__WEBPACK_IMPORTED_MODULE_2__["RentedHousesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], HomeComponent.prototype, "url", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_rented_houses_service__WEBPACK_IMPORTED_MODULE_2__["RentedHousesService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/models/category.ts":
/*!************************************!*\
  !*** ./src/app/models/category.ts ***!
  \************************************/
/*! exports provided: Category, CityNamesForOntario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityNamesForOntario", function() { return CityNamesForOntario; });
class Category {
}
// https://www.kijiji.ca/j-select-category.json?t=1580450870373
class CityNamesForOntario {
    constructor() {
        this.names = [
            { cityName: 'Barrie', cityurl: 'belleville-area', citycode: 'l1700129' },
            { cityName: 'Belleville Area ', cityurl: 'belleville-area', citycode: 'l1700129' },
            { cityName: 'Brantford', cityurl: 'brantford', citycode: 'l1700206' },
            { cityName: 'Brockville ', cityurl: 'brockville', citycode: 'l1700247' },
            { cityName: 'Chatham-Kent ', cityurl: 'chatham-kent', citycode: 'l1700239' },
            { cityName: 'Cornwall ', cityurl: 'cornwall-on', citycode: 'l1700133' },
            { cityName: 'Guelph ', cityurl: 'guelph', citycode: 'l1700242' },
            { cityName: 'Hamilton ', cityurl: 'hamilton', citycode: 'l80014' },
            { cityName: 'Kapuskasing', cityurl: 'kapuskasing', citycode: 'l1700237' },
            { cityName: 'Kenora ', cityurl: 'kenora', citycode: 'l1700249' },
            { cityName: 'Kingston Area', cityurl: 'kingston-area', citycode: 'l1700181' },
            { cityName: 'Kitchener Area', cityurl: 'kitchener-area', citycode: 'l1700209' },
            { cityName: 'Leamington ', cityurl: 'leamington', citycode: 'l1700240' },
            { cityName: 'London ', cityurl: 'london', citycode: 'l1700214' },
            { cityName: 'Muskoka', cityurl: 'muskoka', citycode: 'l1700078' },
            { cityName: 'Norfolk County', cityurl: 'norfolk-county', citycode: 'l1700248' },
            { cityName: 'North Bay', cityurl: 'north-bay', citycode: 'l1700243' },
            { cityName: 'Ottawa / Gatineau Area', cityurl: 'ottawa-gatineau-area', citycode: 'l1700184' },
            { cityName: 'Owen Sound ', cityurl: 'owen-sound', citycode: 'l1700187' },
            { cityName: 'Peterborough Area ', cityurl: 'peterborough-area', citycode: 'l1700217' },
            { cityName: 'Renfrew County Area ', cityurl: 'renfrew-county-area', citycode: 'l1700074 ' },
            { cityName: 'Sarnia Area', cityurl: 'sarnia-area', citycode: 'l1700189' },
            { cityName: 'Sault Ste. Marie', cityurl: 'sault-ste-marie', citycode: 'l1700244' },
            { cityName: 'St. Catharines', cityurl: 'st-catharines', citycode: 'l80016' },
            { cityName: 'Sudbury', cityurl: 'sudbury', citycode: 'l1700245' },
            { cityName: 'Thunder Bay', cityurl: 'thunder-bay', citycode: 'l1700126' },
            { cityName: 'Timmins', cityurl: 'timmins', citycode: 'l1700238' },
            { cityName: 'Toronto', cityurl: 'gta-greater-toronto', citycode: 'l1700272' },
            { cityName: 'Windsor Region', cityurl: 'windsor-area-on', citycode: 'l1700220' },
            { cityName: 'Woodstock', cityurl: 'woodstock-on', citycode: 'l1700241' },
        ];
    }
}


/***/ }),

/***/ "./src/app/services/kijiji.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/kijiji.service.ts ***!
  \********************************************/
/*! exports provided: KijijiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KijijiService", function() { return KijijiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _Shared_errorHandle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/errorHandle */ "./src/app/Shared/errorHandle.ts");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4__);





let KijijiService = class KijijiService extends _Shared_errorHandle__WEBPACK_IMPORTED_MODULE_3__["ErrorHandle"] {
    constructor(http) {
        super();
        this.http = http;
        this.pyScraping = `http://127.0.0.1:5000/`;
    }
    getCategoryLevel1() {
        return this.http
            .get(`${this.pyScraping}getCategories`)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getCategorySubLevels(categoryId) {
        return this.http
            .post(`${this.pyScraping}getCategories`, { categoryId })
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
};
KijijiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
KijijiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], KijijiService);



/***/ }),

/***/ "./src/app/services/mb-map.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/mb-map.service.ts ***!
  \********************************************/
/*! exports provided: MbMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MbMapService", function() { return MbMapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _Shared_errorHandle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/errorHandle */ "./src/app/Shared/errorHandle.ts");





let MbMapService = class MbMapService extends _Shared_errorHandle__WEBPACK_IMPORTED_MODULE_4__["ErrorHandle"] {
    constructor(http) {
        super();
        this.http = http;
        this.apiKey = 'AIzaSyC3u1VAIs0S5Ij-HmcxrTEMIx19X8UZH30';
        this.geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode';
    }
    getLatLong(address, type = 'json') {
        console.log('I am running');
        return this.http
            .get(`${this.geocodeUrl}/${type}?address=${address}&key=${this.apiKey}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
};
MbMapService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MbMapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], MbMapService);



/***/ }),

/***/ "./src/app/services/rented-houses.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/rented-houses.service.ts ***!
  \***************************************************/
/*! exports provided: RentedHousesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentedHousesService", function() { return RentedHousesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _Shared_errorHandle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/errorHandle */ "./src/app/Shared/errorHandle.ts");





let RentedHousesService = class RentedHousesService extends _Shared_errorHandle__WEBPACK_IMPORTED_MODULE_4__["ErrorHandle"] {
    constructor(http) {
        super();
        this.http = http;
        this.apiKey = 'AIzaSyC3u1VAIs0S5Ij-HmcxrTEMIx19X8UZH30';
        this.pyScraping = `http://127.0.0.1:5000/`;
    }
    getUrl(api) {
        return this.pyScraping + api;
    }
    getHouses(url) {
        return this.http
            .post(this.pyScraping, url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getPageInfo(url) {
        return this.http
            .post(this.getUrl('getTotalPages'), url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getItemsInfoByPage(url) {
        return this.http
            .post(this.getUrl('getItemsInfoByPage'), url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
};
RentedHousesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RentedHousesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], RentedHousesService);



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _mb_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mb-map.service */ "./src/app/services/mb-map.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _rented_houses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rented-houses.service */ "./src/app/services/rented-houses.service.ts");
/* harmony import */ var _Shared_errorHandle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/errorHandle */ "./src/app/Shared/errorHandle.ts");







let ServicesModule = class ServicesModule extends _Shared_errorHandle__WEBPACK_IMPORTED_MODULE_6__["ErrorHandle"] {
    constructor() {
        super();
    }
};
ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
        exports: [],
        declarations: [],
        providers: [_mb_map_service__WEBPACK_IMPORTED_MODULE_3__["MbMapService"], _rented_houses_service__WEBPACK_IMPORTED_MODULE_5__["RentedHousesService"]],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ServicesModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shubh\Desktop\working\pythonScraping\KijijiScraping\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map