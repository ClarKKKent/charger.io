/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/CustomScroll.js":
/*!********************************!*\
  !*** ./src/js/CustomScroll.js ***!
  \********************************/
/*! exports provided: CustomScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomScroll", function() { return CustomScroll; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! normalize-wheel */ "./node_modules/normalize-wheel/index.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(normalize_wheel__WEBPACK_IMPORTED_MODULE_2__);



var CustomScroll =
/*#__PURE__*/
function () {
  function CustomScroll() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CustomScroll);

    this.scrollable = $('#scrollable');
    this.currentY = 0;
    this.maxHeight = 0;
    this.scrollPage();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CustomScroll, [{
    key: "scrollPage",
    value: function scrollPage() {
      var _this = this;

      var animateScroll = function animateScroll(e) {
        _this.norm = normalize_wheel__WEBPACK_IMPORTED_MODULE_2___default()(e);
        _this.currentY += _this.norm.spinY * 100;
        _this.maxHeight = _this.scrollable.height() - $(window).height();
        _this.scrollY = _this.currentY / _this.maxHeight * 100;

        if (_this.currentY < 0) {
          _this.currentY = 0;
        }

        if (_this.currentY > _this.maxHeight) {
          _this.currentY = _this.maxHeight;
        }

        TweenLite.to(_this.scrollable, 0.8, {
          y: -_this.currentY,
          ease: Power4.easeOut,
          overwrite: 'preexisting'
        });
        TweenLite.to($('#scroll-line'), 0.8, {
          y: "".concat(_this.scrollY, "%"),
          ease: Power4.easeOut,
          overwrite: 'preexisting'
        });
      };

      document.addEventListener('mousewheel', animateScroll);
      document.addEventListener('DOMMouseScroll', animateScroll);
    }
  }]);

  return CustomScroll;
}();

/***/ }),

/***/ "./src/js/GallerySlider.js":
/*!*********************************!*\
  !*** ./src/js/GallerySlider.js ***!
  \*********************************/
/*! exports provided: GallerySlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerySlider", function() { return GallerySlider; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");



var GallerySlider =
/*#__PURE__*/
function () {
  function GallerySlider() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GallerySlider);

    this.elems = document.querySelectorAll('#gallery');
    this.currentX = 0;
    this.moveSlider();
    this.currentPosX = 0;
    this.nextPosX = 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GallerySlider, [{
    key: "moveSlider",
    value: function moveSlider() {
      var _this = this;

      this.elems.forEach(function (elem) {
        elem.onmousedown = function (e) {
          _this.currentPosX = e.pageX;

          var moveAt = function moveAt(e) {
            _this.nextPosX = e.pageX;

            if (_this.currentPosX > _this.nextPosX) {
              _this.currentX -= 100;
            } else {
              _this.currentX += 100;
            }

            if (_this.currentX < -1500) {
              _this.currentX = -1500;
            }

            if (_this.currentX > 0) {
              _this.currentX = 0;
            }

            gsap__WEBPACK_IMPORTED_MODULE_2__["TweenLite"].to(elem, 1, {
              x: _this.currentX,
              ease: Expo.easeOut
            });
          };

          document.addEventListener('mousemove', moveAt);

          elem.onmouseup = function () {
            document.removeEventListener('mousemove', moveAt);
          };
        };
      });
    }
  }]);

  return GallerySlider;
}();

/***/ }),

/***/ "./src/js/Parallax.js":
/*!****************************!*\
  !*** ./src/js/Parallax.js ***!
  \****************************/
/*! exports provided: Parallax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parallax", function() { return Parallax; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! normalize-wheel */ "./node_modules/normalize-wheel/index.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(normalize_wheel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");




var Parallax =
/*#__PURE__*/
function () {
  function Parallax() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Parallax);

    this.scrollable = $('#scrollable');
    this.elem = $('#parallax');
    this.speed = $('#parallax').data('speed');
    this.currentY = 0;
    this.moveElem();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Parallax, [{
    key: "moveElem",
    value: function moveElem() {
      var _this = this;

      var animateMove = function animateMove(e) {
        _this.norm = normalize_wheel__WEBPACK_IMPORTED_MODULE_2___default()(e);
        _this.currentY += _this.norm.spinY * 10;
        _this.maxHeight = _this.scrollable.height() - $(window).height();

        if (_this.currentY < 0) {
          _this.currentY = 0;
        }

        if (_this.currentY * 10 > _this.maxHeight) {
          _this.currentY = _this.maxHeight / 10;
        }

        gsap__WEBPACK_IMPORTED_MODULE_3__["TweenLite"].to(_this.elem, 0.8, {
          y: _this.currentY * _this.speed,
          ease: Expo.easeOut
        });
      };

      document.addEventListener('mousewheel', animateMove);
      document.addEventListener('DOMMouseScroll', animateMove);
    }
  }]);

  return Parallax;
}();

/***/ }),

/***/ "./src/js/Sticky.js":
/*!**************************!*\
  !*** ./src/js/Sticky.js ***!
  \**************************/
/*! exports provided: Sticky */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sticky", function() { return Sticky; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var Sticky =
/*#__PURE__*/
function () {
  function Sticky() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Sticky);

    this.elements = $('[data-sticky]');
    this.moveSticky();
    this.x = 0;
    this.y = 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Sticky, [{
    key: "moveSticky",
    value: function moveSticky() {
      var _this = this;

      this.elements.each(function (index, elem) {
        elem.addEventListener('mousemove', function (e) {
          _this.x = e.offsetX * 0.2;
          _this.y = e.offsetY * 0.15;
          TweenLite.to(elem, 1, {
            x: _this.x,
            y: _this.y
          });
        });
        elem.addEventListener('mouseleave', function () {
          TweenLite.to(elem, 1, {
            x: 0,
            y: 0
          });
        });
      });
    }
  }]);

  return Sticky;
}();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _Sticky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sticky */ "./src/js/Sticky.js");
/* harmony import */ var _rollerSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rollerSlider */ "./src/js/rollerSlider.js");
/* harmony import */ var _CustomScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomScroll */ "./src/js/CustomScroll.js");
/* harmony import */ var _GallerySlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GallerySlider */ "./src/js/GallerySlider.js");
/* harmony import */ var _Parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Parallax */ "./src/js/Parallax.js");






$(window).on('load', function () {
  var sticky = new _Sticky__WEBPACK_IMPORTED_MODULE_1__["Sticky"]();
  var slider = new _rollerSlider__WEBPACK_IMPORTED_MODULE_2__["RollerSlider"]();
  var scroll = new _CustomScroll__WEBPACK_IMPORTED_MODULE_3__["CustomScroll"]();
  var gSlider = new _GallerySlider__WEBPACK_IMPORTED_MODULE_4__["GallerySlider"]();
  var parallax = new _Parallax__WEBPACK_IMPORTED_MODULE_5__["Parallax"]();
});

/***/ }),

/***/ "./src/js/rollerSlider.js":
/*!********************************!*\
  !*** ./src/js/rollerSlider.js ***!
  \********************************/
/*! exports provided: RollerSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollerSlider", function() { return RollerSlider; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");



var RollerSlider =
/*#__PURE__*/
function () {
  function RollerSlider() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RollerSlider);

    this.counter = 1;
    this.time = 2;
    this.activeElement = $('.active-content');
    this.length = $('.heading-content').length;
    this.moveSlider();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RollerSlider, [{
    key: "moveSlider",
    value: function moveSlider() {
      var tl = new TimelineMax({
        onComplete: this.moveSlider.bind(this)
      });
      var elemTo = $("[data-slider=".concat(this.counter, "]"));
      $('#slider-length').html("0".concat(this.length));
      $('#slider-number').html("0".concat(this.counter));
      tl.set(elemTo, {
        className: '+= active-content'
      }).to(elemTo.find('.heading-content-title-label__item_1'), 2, {
        y: 0,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].easeOut
      }).to(elemTo.find('.heading-content-title-label__item_2'), 2, {
        y: 0,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].easeOut
      }, '0.1').to(elemTo.find('.heading-content-description-label__item_1'), 2.5, {
        y: 0,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].easeOut
      }, '0.3').to(elemTo.find('.heading-content-description-label__item_2'), 2.5, {
        y: 0,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].easeOut
      }, '0.3').to($('.counter__line_active'), this.time, {
        x: '0%'
      }).to(elemTo.find('.heading-content-title-label__item_1'), 1, {
        y: -150,
        ease: Power3.easeIn
      }).to(elemTo.find('.heading-content-title-label__item_2'), 1, {
        y: -150,
        ease: Power3.easeIn
      }, '-=0.9').to(elemTo.find('.heading-content-description-label__item_1'), 1, {
        y: -30,
        ease: Power3.easeIn
      }, '-=1').to(elemTo.find('.heading-content-description-label__item_2'), 1, {
        y: -30,
        ease: Power3.easeIn
      }, '-=1').set(elemTo.find('.heading-content-title-label__item_1'), {
        y: 120
      }).set(elemTo.find('.heading-content-title-label__item_2'), {
        y: 120
      }).set(elemTo.find('.heading-content-description-label__item_1'), {
        y: 18
      }).set(elemTo.find('.heading-content-description-label__item_2'), {
        y: 18
      }).set($('.counter__line_active'), {
        x: '-100%'
      });
      this.counter += 1;

      if (this.counter > this.length) {
        this.counter = 1;
      }
    }
  }]);

  return RollerSlider;
}();

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");




svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map