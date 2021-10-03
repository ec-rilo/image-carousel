/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/carousel-logic.js":
/*!***************************************!*\
  !*** ./src/modules/carousel-logic.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_carousel_imgs_img_1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/carousel-imgs/img-1.jpeg */ "./src/images/carousel-imgs/img-1.jpeg");
/* harmony import */ var _images_carousel_imgs_img_2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/carousel-imgs/img-2.jpeg */ "./src/images/carousel-imgs/img-2.jpeg");
/* harmony import */ var _images_carousel_imgs_img_3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/carousel-imgs/img-3.jpeg */ "./src/images/carousel-imgs/img-3.jpeg");
/* harmony import */ var _images_carousel_imgs_img_4_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/carousel-imgs/img-4.jpeg */ "./src/images/carousel-imgs/img-4.jpeg");
/* harmony import */ var _images_carousel_imgs_img_5_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/carousel-imgs/img-5.jpeg */ "./src/images/carousel-imgs/img-5.jpeg");
// Create a function that allows a img to go left
// create a function that allows a img to go right
// create a function that allows the little navigation rectangles to populate depending on amount of images
// create a function that gives the little navigtion rectangles logic







const carouselLogic = (() => {
  class ProgramImg {
    constructor(currImg, imgTag) {
      this.currImg = currImg;
      this.imgTag = imgTag;
    }

    applyToHTML() {
      this.imgTag.setAttribute("src", `${this.currImg}`);
    }

    applyEnteringImgAnim() {
      if (this.imgTag.classList.contains("exiting-img-anim")) {
        this.imgTag.classList.remove("exiting-img-anim");
      }
      this.imgTag.classList.add("entering-img-anim");
    }

    applyExitingImgAnim() {
      if (this.imgTag.classList.contains("entering-img-anim")) {
        this.imgTag.classList.remove("entering-img-anim");
      }
      this.imgTag.classList.add("exiting-img-anim");
    }

    updateImg(newImg) {
      this.imgTag.setAttribute("src", `${newImg}`);
    }

    getTag() {
      return this.imgTag;
    }
  }

  function initImgRotation(imgArr) {
    let currImg = new ProgramImg(
      imgArr[0],
      document.querySelector(".curr-img")
    );
    currImg.applyToHTML();

    let count = 0;
    setInterval(() => {
      if (count === imgArr.length - 1) {
        // Made as -1 so that when the loop restarts the count
        // starts at 0 and not 1.
        count = -1;
      }
      count += 1;
      const updatedImgTag = document.createElement("img");
      updatedImgTag.classList.add("program-img");
      updatedImgTag.classList.add("new-img");
      updatedImgTag.setAttribute("src", `${imgArr[count]}`);
      const newImg = new ProgramImg(imgArr[count], updatedImgTag);
      const imgContainer = document.querySelector(".img-container");
      imgContainer.appendChild(updatedImgTag);
      currImg.applyExitingImgAnim();
      newImg.applyEnteringImgAnim();
      currImg = newImg;
    }, 5000);
  }
  const imgArr = [_images_carousel_imgs_img_1_jpeg__WEBPACK_IMPORTED_MODULE_0__, _images_carousel_imgs_img_2_jpeg__WEBPACK_IMPORTED_MODULE_1__, _images_carousel_imgs_img_3_jpeg__WEBPACK_IMPORTED_MODULE_2__, _images_carousel_imgs_img_4_jpeg__WEBPACK_IMPORTED_MODULE_3__, _images_carousel_imgs_img_5_jpeg__WEBPACK_IMPORTED_MODULE_4__];
  initImgRotation(imgArr);
})();


/***/ }),

/***/ "./src/images/carousel-imgs/img-1.jpeg":
/*!*********************************************!*\
  !*** ./src/images/carousel-imgs/img-1.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7878ffd1572be54fee2e.jpeg";

/***/ }),

/***/ "./src/images/carousel-imgs/img-2.jpeg":
/*!*********************************************!*\
  !*** ./src/images/carousel-imgs/img-2.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "204d8e3b938aab929abb.jpeg";

/***/ }),

/***/ "./src/images/carousel-imgs/img-3.jpeg":
/*!*********************************************!*\
  !*** ./src/images/carousel-imgs/img-3.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "287cd7b32e3b21acb4a4.jpeg";

/***/ }),

/***/ "./src/images/carousel-imgs/img-4.jpeg":
/*!*********************************************!*\
  !*** ./src/images/carousel-imgs/img-4.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0acf9775477608101943.jpeg";

/***/ }),

/***/ "./src/images/carousel-imgs/img-5.jpeg":
/*!*********************************************!*\
  !*** ./src/images/carousel-imgs/img-5.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfc675a278fe4855f7c2.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _modules_carousel_logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/carousel-logic.js */ "./src/modules/carousel-logic.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map