(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/layout-loader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/layout-loader.js":
/*!*****************************!*\
  !*** ./js/layout-loader.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//extend jquery with syncLoad function to allow html components relying on scripts to be loaded before further script executions\n$.fn.extend({\n  syncLoad: function syncLoad(url) {\n    var res = $.ajax({\n      url: url,\n      async: false,\n      type: \"GET\"\n    }).responseText;\n    $(\"#navbar\").html(res);\n  }\n});\n\nfunction triggerAnchor(anchor, lastAnchor) {\n  if (lastAnchor) {\n    $(lastAnchor).removeClass(\"active\");\n  }\n\n  $(anchor).addClass(\"active\");\n  $(\"\".concat(anchor, \"-tab\"))[0].click();\n}\n\nfunction setupNavAnchors() {\n  var anchors = [\"#overview\", \"#substance-abuse\", \"#mental-health\", \"#co-occurring\", \"#behavioral-crisis\"];\n\n  var _loop = function _loop() {\n    var anchor = _anchors[_i];\n    console.log($(\"\".concat(anchor, \"-tab\"))[0]);\n\n    $(\"\".concat(anchor, \"-tab\"))[0].onclick = function () {\n      window.location.hash = anchor;\n    };\n  };\n\n  for (var _i = 0, _anchors = anchors; _i < _anchors.length; _i++) {\n    _loop();\n  }\n} //load footer async, doesn't require other scripts\n\n\n$(\"#footer\").load(\"../html/components/layout/footer.html\"); //sync load navbar since it needs to be loaded before other scripts are executed\n\n$(\"#navbar\").syncLoad(\"../html/components/layout/navbar.html\");\nvar activeLink = window.location.pathname;\n\nswitch (activeLink) {\n  case \"/html/dashboard.html\":\n    {\n      setupNavAnchors();\n      var anchor = $(location).attr('hash');\n\n      if (!anchor) {\n        anchor = \"#overview\";\n        window.location.hash = anchor;\n      } //if in dashboard expand dashboard menu\n\n\n      $(\"#dashboard\").addClass(\"open\");\n      triggerAnchor(anchor, null);\n      var lastAnchor = anchor;\n      $(window).on('hashchange', function (e) {\n        anchor = $(location).attr('hash');\n        triggerAnchor(anchor, lastAnchor);\n        lastAnchor = anchor;\n      });\n      break;\n    }\n\n  case \"/html/project.html\":\n    {\n      $(\"#about\").addClass(\"active\");\n      break;\n    }\n\n  case \"/html/support.html\":\n    {\n      $(\"#support\").addClass(\"active\");\n      break;\n    }\n\n  case \"/html/documentation.html\":\n    {\n      $(\"#documentation\").addClass(\"active\");\n      break;\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9sYXlvdXQtbG9hZGVyLmpzPzJmZDMiXSwibmFtZXMiOlsiJCIsImZuIiwiZXh0ZW5kIiwic3luY0xvYWQiLCJ1cmwiLCJyZXMiLCJhamF4IiwiYXN5bmMiLCJ0eXBlIiwicmVzcG9uc2VUZXh0IiwiaHRtbCIsInRyaWdnZXJBbmNob3IiLCJhbmNob3IiLCJsYXN0QW5jaG9yIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNsaWNrIiwic2V0dXBOYXZBbmNob3JzIiwiYW5jaG9ycyIsImNvbnNvbGUiLCJsb2ciLCJvbmNsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwibG9hZCIsImFjdGl2ZUxpbmsiLCJwYXRobmFtZSIsImF0dHIiLCJvbiIsImUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0FBLENBQUMsQ0FBQ0MsRUFBRixDQUFLQyxNQUFMLENBQVk7QUFDUkMsVUFBUSxFQUFFLGtCQUFVQyxHQUFWLEVBQWU7QUFDckIsUUFBTUMsR0FBRyxHQUFHTCxDQUFDLENBQUNNLElBQUYsQ0FBTztBQUNmRixTQUFHLEVBQUVBLEdBRFU7QUFFZkcsV0FBSyxFQUFFLEtBRlE7QUFHZkMsVUFBSSxFQUFFO0FBSFMsS0FBUCxFQUlUQyxZQUpIO0FBS0FULEtBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVUsSUFBYixDQUFrQkwsR0FBbEI7QUFDSDtBQVJPLENBQVo7O0FBV0EsU0FBU00sYUFBVCxDQUF1QkMsTUFBdkIsRUFBK0JDLFVBQS9CLEVBQTJDO0FBQ3ZDLE1BQUdBLFVBQUgsRUFBZTtBQUNYYixLQUFDLENBQUNhLFVBQUQsQ0FBRCxDQUFjQyxXQUFkLENBQTBCLFFBQTFCO0FBQ0g7O0FBQ0RkLEdBQUMsQ0FBQ1ksTUFBRCxDQUFELENBQVVHLFFBQVYsQ0FBbUIsUUFBbkI7QUFDQWYsR0FBQyxXQUFJWSxNQUFKLFVBQUQsQ0FBbUIsQ0FBbkIsRUFBc0JJLEtBQXRCO0FBQ0g7O0FBRUQsU0FBU0MsZUFBVCxHQUEyQjtBQUN2QixNQUFJQyxPQUFPLEdBQUcsQ0FBQyxXQUFELEVBQWMsa0JBQWQsRUFBa0MsZ0JBQWxDLEVBQW9ELGVBQXBELEVBQXFFLG9CQUFyRSxDQUFkOztBQUR1QjtBQUVuQixRQUFJTixNQUFNLGVBQVY7QUFDQU8sV0FBTyxDQUFDQyxHQUFSLENBQVlwQixDQUFDLFdBQUlZLE1BQUosVUFBRCxDQUFtQixDQUFuQixDQUFaOztBQUNBWixLQUFDLFdBQUlZLE1BQUosVUFBRCxDQUFtQixDQUFuQixFQUFzQlMsT0FBdEIsR0FBZ0MsWUFBTTtBQUNsQ0MsWUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QlosTUFBdkI7QUFDSCxLQUZEO0FBSm1COztBQUV2Qiw4QkFBa0JNLE9BQWxCLDhCQUEyQjtBQUFBO0FBSzFCO0FBQ0osQyxDQUVEOzs7QUFDQWxCLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYXlCLElBQWIsQ0FBa0IsdUNBQWxCLEUsQ0FDQTs7QUFDQXpCLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUcsUUFBYixDQUFzQix1Q0FBdEI7QUFFQSxJQUFNdUIsVUFBVSxHQUFHSixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JJLFFBQW5DOztBQUNBLFFBQU9ELFVBQVA7QUFDSSxPQUFLLHNCQUFMO0FBQTZCO0FBQ3pCVCxxQkFBZTtBQUNmLFVBQUlMLE1BQU0sR0FBR1osQ0FBQyxDQUFDdUIsUUFBRCxDQUFELENBQVlLLElBQVosQ0FBaUIsTUFBakIsQ0FBYjs7QUFDQSxVQUFHLENBQUNoQixNQUFKLEVBQVk7QUFDUkEsY0FBTSxHQUFHLFdBQVQ7QUFDQVUsY0FBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QlosTUFBdkI7QUFDSCxPQU53QixDQU96Qjs7O0FBQ0FaLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JlLFFBQWhCLENBQXlCLE1BQXpCO0FBQ0FKLG1CQUFhLENBQUNDLE1BQUQsRUFBUyxJQUFULENBQWI7QUFDQSxVQUFJQyxVQUFVLEdBQUdELE1BQWpCO0FBQ0FaLE9BQUMsQ0FBQ3NCLE1BQUQsQ0FBRCxDQUFVTyxFQUFWLENBQWEsWUFBYixFQUEyQixVQUFTQyxDQUFULEVBQVc7QUFDbENsQixjQUFNLEdBQUdaLENBQUMsQ0FBQ3VCLFFBQUQsQ0FBRCxDQUFZSyxJQUFaLENBQWlCLE1BQWpCLENBQVQ7QUFDQWpCLHFCQUFhLENBQUNDLE1BQUQsRUFBU0MsVUFBVCxDQUFiO0FBQ0FBLGtCQUFVLEdBQUdELE1BQWI7QUFDSCxPQUpEO0FBS0E7QUFDSDs7QUFDRCxPQUFLLG9CQUFMO0FBQTJCO0FBQ3ZCWixPQUFDLENBQUMsUUFBRCxDQUFELENBQVllLFFBQVosQ0FBcUIsUUFBckI7QUFDQTtBQUNIOztBQUNELE9BQUssb0JBQUw7QUFBMkI7QUFDdkJmLE9BQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2UsUUFBZCxDQUF1QixRQUF2QjtBQUNBO0FBQ0g7O0FBQ0QsT0FBSywwQkFBTDtBQUFpQztBQUM3QmYsT0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JlLFFBQXBCLENBQTZCLFFBQTdCO0FBQ0E7QUFDSDtBQTlCTCIsImZpbGUiOiIuL2pzL2xheW91dC1sb2FkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2V4dGVuZCBqcXVlcnkgd2l0aCBzeW5jTG9hZCBmdW5jdGlvbiB0byBhbGxvdyBodG1sIGNvbXBvbmVudHMgcmVseWluZyBvbiBzY3JpcHRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgZnVydGhlciBzY3JpcHQgZXhlY3V0aW9uc1xyXG4kLmZuLmV4dGVuZCh7XHJcbiAgICBzeW5jTG9hZDogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBhc3luYzogZmFsc2UsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCJcclxuICAgICAgICB9KS5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgJChcIiNuYXZiYXJcIikuaHRtbChyZXMpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHRyaWdnZXJBbmNob3IoYW5jaG9yLCBsYXN0QW5jaG9yKSB7XHJcbiAgICBpZihsYXN0QW5jaG9yKSB7XHJcbiAgICAgICAgJChsYXN0QW5jaG9yKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICAgICQoYW5jaG9yKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICQoYCR7YW5jaG9yfS10YWJgKVswXS5jbGljaygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cE5hdkFuY2hvcnMoKSB7XHJcbiAgICBsZXQgYW5jaG9ycyA9IFtcIiNvdmVydmlld1wiLCBcIiNzdWJzdGFuY2UtYWJ1c2VcIiwgXCIjbWVudGFsLWhlYWx0aFwiLCBcIiNjby1vY2N1cnJpbmdcIiwgXCIjYmVoYXZpb3JhbC1jcmlzaXNcIl1cclxuICAgIGZvcihsZXQgYW5jaG9yIG9mIGFuY2hvcnMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygkKGAke2FuY2hvcn0tdGFiYClbMF0pO1xyXG4gICAgICAgICQoYCR7YW5jaG9yfS10YWJgKVswXS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGFuY2hvcjtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vL2xvYWQgZm9vdGVyIGFzeW5jLCBkb2Vzbid0IHJlcXVpcmUgb3RoZXIgc2NyaXB0c1xyXG4kKFwiI2Zvb3RlclwiKS5sb2FkKFwiLi4vaHRtbC9jb21wb25lbnRzL2xheW91dC9mb290ZXIuaHRtbFwiKTtcclxuLy9zeW5jIGxvYWQgbmF2YmFyIHNpbmNlIGl0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgb3RoZXIgc2NyaXB0cyBhcmUgZXhlY3V0ZWRcclxuJChcIiNuYXZiYXJcIikuc3luY0xvYWQoXCIuLi9odG1sL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci5odG1sXCIpO1xyXG5cclxuY29uc3QgYWN0aXZlTGluayA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuc3dpdGNoKGFjdGl2ZUxpbmspIHtcclxuICAgIGNhc2UgXCIvaHRtbC9kYXNoYm9hcmQuaHRtbFwiOiB7XHJcbiAgICAgICAgc2V0dXBOYXZBbmNob3JzKCk7XHJcbiAgICAgICAgbGV0IGFuY2hvciA9ICQobG9jYXRpb24pLmF0dHIoJ2hhc2gnKTtcclxuICAgICAgICBpZighYW5jaG9yKSB7XHJcbiAgICAgICAgICAgIGFuY2hvciA9IFwiI292ZXJ2aWV3XCI7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYW5jaG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmIGluIGRhc2hib2FyZCBleHBhbmQgZGFzaGJvYXJkIG1lbnVcclxuICAgICAgICAkKFwiI2Rhc2hib2FyZFwiKS5hZGRDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAgICAgdHJpZ2dlckFuY2hvcihhbmNob3IsIG51bGwpO1xyXG4gICAgICAgIGxldCBsYXN0QW5jaG9yID0gYW5jaG9yO1xyXG4gICAgICAgICQod2luZG93KS5vbignaGFzaGNoYW5nZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBhbmNob3IgPSAkKGxvY2F0aW9uKS5hdHRyKCdoYXNoJyk7XHJcbiAgICAgICAgICAgIHRyaWdnZXJBbmNob3IoYW5jaG9yLCBsYXN0QW5jaG9yKTtcclxuICAgICAgICAgICAgbGFzdEFuY2hvciA9IGFuY2hvclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcIi9odG1sL3Byb2plY3QuaHRtbFwiOiB7XHJcbiAgICAgICAgJChcIiNhYm91dFwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgXCIvaHRtbC9zdXBwb3J0Lmh0bWxcIjoge1xyXG4gICAgICAgICQoXCIjc3VwcG9ydFwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgXCIvaHRtbC9kb2N1bWVudGF0aW9uLmh0bWxcIjoge1xyXG4gICAgICAgICQoXCIjZG9jdW1lbnRhdGlvblwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4gICAgXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/layout-loader.js\n");

/***/ })

/******/ })));