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

eval("//extend jquery with syncLoad function to allow html components relying on scripts to be loaded before further script executions\n$.fn.extend({\n  syncLoad: function syncLoad(url) {\n    var res = $.ajax({\n      url: url,\n      async: false,\n      type: \"GET\"\n    }).responseText;\n    $(\"#navbar\").html(res);\n  }\n});\n\nfunction triggerAnchor(anchor, lastAnchor) {\n  if (lastAnchor) {\n    $(lastAnchor).removeClass(\"active\");\n  }\n\n  $(anchor).addClass(\"active\");\n  $(\"\".concat(anchor, \"-tab\"))[0].click();\n}\n\nfunction setupNavAnchors() {\n  var anchors = [\"#overview\", \"#substance-abuse\", \"#mental-health\", \"#co-occurring\", \"#behavioral-crisis\"];\n\n  var _loop = function _loop() {\n    var anchor = _anchors[_i];\n\n    $(\"\".concat(anchor, \"-tab\"))[0].onclick = function () {\n      window.location.hash = anchor;\n    };\n  };\n\n  for (var _i = 0, _anchors = anchors; _i < _anchors.length; _i++) {\n    _loop();\n  }\n} //load footer async, doesn't require other scripts\n\n\n$(\"#footer\").load(\"../html/components/layout/footer.html\"); //sync load navbar since it needs to be loaded before other scripts are executed\n\n$(\"#navbar\").syncLoad(\"../html/components/layout/navbar.html\"); //don't need entire link path, just active page, so parse out page name\n\nvar activeLink = window.location.pathname.split(\"/\").pop();\n\nswitch (activeLink) {\n  case \"dashboard.html\":\n    {\n      setupNavAnchors();\n      var anchor = $(location).attr('hash');\n\n      if (!anchor) {\n        anchor = \"#overview\";\n        window.location.hash = anchor;\n      } //if in dashboard expand dashboard menu\n\n\n      $(\"#dashboard\").addClass(\"open active\");\n      triggerAnchor(anchor, null);\n      var lastAnchor = anchor;\n      $(window).on('hashchange', function (e) {\n        anchor = $(location).attr('hash');\n        triggerAnchor(anchor, lastAnchor);\n        lastAnchor = anchor;\n      });\n      break;\n    }\n\n  case \"project.html\":\n    {\n      $(\"#about\").addClass(\"active\");\n      break;\n    }\n\n  case \"support.html\":\n    {\n      $(\"#support\").addClass(\"active\");\n      break;\n    }\n\n  case \"documentation.html\":\n    {\n      $(\"#documentation\").addClass(\"active\");\n      break;\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9sYXlvdXQtbG9hZGVyLmpzPzJmZDMiXSwibmFtZXMiOlsiJCIsImZuIiwiZXh0ZW5kIiwic3luY0xvYWQiLCJ1cmwiLCJyZXMiLCJhamF4IiwiYXN5bmMiLCJ0eXBlIiwicmVzcG9uc2VUZXh0IiwiaHRtbCIsInRyaWdnZXJBbmNob3IiLCJhbmNob3IiLCJsYXN0QW5jaG9yIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNsaWNrIiwic2V0dXBOYXZBbmNob3JzIiwiYW5jaG9ycyIsIm9uY2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJsb2FkIiwiYWN0aXZlTGluayIsInBhdGhuYW1lIiwic3BsaXQiLCJwb3AiLCJhdHRyIiwib24iLCJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBQSxDQUFDLENBQUNDLEVBQUYsQ0FBS0MsTUFBTCxDQUFZO0FBQ1JDLFVBQVEsRUFBRSxrQkFBVUMsR0FBVixFQUFlO0FBQ3JCLFFBQU1DLEdBQUcsR0FBR0wsQ0FBQyxDQUFDTSxJQUFGLENBQU87QUFDZkYsU0FBRyxFQUFFQSxHQURVO0FBRWZHLFdBQUssRUFBRSxLQUZRO0FBR2ZDLFVBQUksRUFBRTtBQUhTLEtBQVAsRUFJVEMsWUFKSDtBQUtBVCxLQUFDLENBQUMsU0FBRCxDQUFELENBQWFVLElBQWIsQ0FBa0JMLEdBQWxCO0FBQ0g7QUFSTyxDQUFaOztBQVdBLFNBQVNNLGFBQVQsQ0FBdUJDLE1BQXZCLEVBQStCQyxVQUEvQixFQUEyQztBQUN2QyxNQUFHQSxVQUFILEVBQWU7QUFDWGIsS0FBQyxDQUFDYSxVQUFELENBQUQsQ0FBY0MsV0FBZCxDQUEwQixRQUExQjtBQUNIOztBQUNEZCxHQUFDLENBQUNZLE1BQUQsQ0FBRCxDQUFVRyxRQUFWLENBQW1CLFFBQW5CO0FBQ0FmLEdBQUMsV0FBSVksTUFBSixVQUFELENBQW1CLENBQW5CLEVBQXNCSSxLQUF0QjtBQUNIOztBQUVELFNBQVNDLGVBQVQsR0FBMkI7QUFDdkIsTUFBSUMsT0FBTyxHQUFHLENBQUMsV0FBRCxFQUFjLGtCQUFkLEVBQWtDLGdCQUFsQyxFQUFvRCxlQUFwRCxFQUFxRSxvQkFBckUsQ0FBZDs7QUFEdUI7QUFFbkIsUUFBSU4sTUFBTSxlQUFWOztBQUNBWixLQUFDLFdBQUlZLE1BQUosVUFBRCxDQUFtQixDQUFuQixFQUFzQk8sT0FBdEIsR0FBZ0MsWUFBTTtBQUNsQ0MsWUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QlYsTUFBdkI7QUFDSCxLQUZEO0FBSG1COztBQUV2Qiw4QkFBa0JNLE9BQWxCLDhCQUEyQjtBQUFBO0FBSTFCO0FBQ0osQyxDQUVEOzs7QUFDQWxCLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYXVCLElBQWIsQ0FBa0IsdUNBQWxCLEUsQ0FDQTs7QUFDQXZCLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUcsUUFBYixDQUFzQix1Q0FBdEIsRSxDQUVBOztBQUNBLElBQU1xQixVQUFVLEdBQUdKLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkksUUFBaEIsQ0FBeUJDLEtBQXpCLENBQStCLEdBQS9CLEVBQW9DQyxHQUFwQyxFQUFuQjs7QUFDQSxRQUFPSCxVQUFQO0FBQ0ksT0FBSyxnQkFBTDtBQUF1QjtBQUNuQlAscUJBQWU7QUFDZixVQUFJTCxNQUFNLEdBQUdaLENBQUMsQ0FBQ3FCLFFBQUQsQ0FBRCxDQUFZTyxJQUFaLENBQWlCLE1BQWpCLENBQWI7O0FBQ0EsVUFBRyxDQUFDaEIsTUFBSixFQUFZO0FBQ1JBLGNBQU0sR0FBRyxXQUFUO0FBQ0FRLGNBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUJWLE1BQXZCO0FBQ0gsT0FOa0IsQ0FPbkI7OztBQUNBWixPQUFDLENBQUMsWUFBRCxDQUFELENBQWdCZSxRQUFoQixDQUF5QixhQUF6QjtBQUNBSixtQkFBYSxDQUFDQyxNQUFELEVBQVMsSUFBVCxDQUFiO0FBQ0EsVUFBSUMsVUFBVSxHQUFHRCxNQUFqQjtBQUNBWixPQUFDLENBQUNvQixNQUFELENBQUQsQ0FBVVMsRUFBVixDQUFhLFlBQWIsRUFBMkIsVUFBU0MsQ0FBVCxFQUFXO0FBQ2xDbEIsY0FBTSxHQUFHWixDQUFDLENBQUNxQixRQUFELENBQUQsQ0FBWU8sSUFBWixDQUFpQixNQUFqQixDQUFUO0FBQ0FqQixxQkFBYSxDQUFDQyxNQUFELEVBQVNDLFVBQVQsQ0FBYjtBQUNBQSxrQkFBVSxHQUFHRCxNQUFiO0FBQ0gsT0FKRDtBQUtBO0FBQ0g7O0FBQ0QsT0FBSyxjQUFMO0FBQXFCO0FBQ2pCWixPQUFDLENBQUMsUUFBRCxDQUFELENBQVllLFFBQVosQ0FBcUIsUUFBckI7QUFDQTtBQUNIOztBQUNELE9BQUssY0FBTDtBQUFxQjtBQUNqQmYsT0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjZSxRQUFkLENBQXVCLFFBQXZCO0FBQ0E7QUFDSDs7QUFDRCxPQUFLLG9CQUFMO0FBQTJCO0FBQ3ZCZixPQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmUsUUFBcEIsQ0FBNkIsUUFBN0I7QUFDQTtBQUNIO0FBOUJMIiwiZmlsZSI6Ii4vanMvbGF5b3V0LWxvYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vZXh0ZW5kIGpxdWVyeSB3aXRoIHN5bmNMb2FkIGZ1bmN0aW9uIHRvIGFsbG93IGh0bWwgY29tcG9uZW50cyByZWx5aW5nIG9uIHNjcmlwdHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBmdXJ0aGVyIHNjcmlwdCBleGVjdXRpb25zXHJcbiQuZm4uZXh0ZW5kKHtcclxuICAgIHN5bmNMb2FkOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGFzeW5jOiBmYWxzZSxcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIlxyXG4gICAgICAgIH0pLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAkKFwiI25hdmJhclwiKS5odG1sKHJlcyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdHJpZ2dlckFuY2hvcihhbmNob3IsIGxhc3RBbmNob3IpIHtcclxuICAgIGlmKGxhc3RBbmNob3IpIHtcclxuICAgICAgICAkKGxhc3RBbmNob3IpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gICAgJChhbmNob3IpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJChgJHthbmNob3J9LXRhYmApWzBdLmNsaWNrKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwTmF2QW5jaG9ycygpIHtcclxuICAgIGxldCBhbmNob3JzID0gW1wiI292ZXJ2aWV3XCIsIFwiI3N1YnN0YW5jZS1hYnVzZVwiLCBcIiNtZW50YWwtaGVhbHRoXCIsIFwiI2NvLW9jY3VycmluZ1wiLCBcIiNiZWhhdmlvcmFsLWNyaXNpc1wiXVxyXG4gICAgZm9yKGxldCBhbmNob3Igb2YgYW5jaG9ycykge1xyXG4gICAgICAgICQoYCR7YW5jaG9yfS10YWJgKVswXS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGFuY2hvcjtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vL2xvYWQgZm9vdGVyIGFzeW5jLCBkb2Vzbid0IHJlcXVpcmUgb3RoZXIgc2NyaXB0c1xyXG4kKFwiI2Zvb3RlclwiKS5sb2FkKFwiLi4vaHRtbC9jb21wb25lbnRzL2xheW91dC9mb290ZXIuaHRtbFwiKTtcclxuLy9zeW5jIGxvYWQgbmF2YmFyIHNpbmNlIGl0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgb3RoZXIgc2NyaXB0cyBhcmUgZXhlY3V0ZWRcclxuJChcIiNuYXZiYXJcIikuc3luY0xvYWQoXCIuLi9odG1sL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci5odG1sXCIpO1xyXG5cclxuLy9kb24ndCBuZWVkIGVudGlyZSBsaW5rIHBhdGgsIGp1c3QgYWN0aXZlIHBhZ2UsIHNvIHBhcnNlIG91dCBwYWdlIG5hbWVcclxuY29uc3QgYWN0aXZlTGluayA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikucG9wKCk7XHJcbnN3aXRjaChhY3RpdmVMaW5rKSB7XHJcbiAgICBjYXNlIFwiZGFzaGJvYXJkLmh0bWxcIjoge1xyXG4gICAgICAgIHNldHVwTmF2QW5jaG9ycygpO1xyXG4gICAgICAgIGxldCBhbmNob3IgPSAkKGxvY2F0aW9uKS5hdHRyKCdoYXNoJyk7XHJcbiAgICAgICAgaWYoIWFuY2hvcikge1xyXG4gICAgICAgICAgICBhbmNob3IgPSBcIiNvdmVydmlld1wiO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGFuY2hvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9pZiBpbiBkYXNoYm9hcmQgZXhwYW5kIGRhc2hib2FyZCBtZW51XHJcbiAgICAgICAgJChcIiNkYXNoYm9hcmRcIikuYWRkQ2xhc3MoXCJvcGVuIGFjdGl2ZVwiKTtcclxuICAgICAgICB0cmlnZ2VyQW5jaG9yKGFuY2hvciwgbnVsbCk7XHJcbiAgICAgICAgbGV0IGxhc3RBbmNob3IgPSBhbmNob3I7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGFuY2hvciA9ICQobG9jYXRpb24pLmF0dHIoJ2hhc2gnKTtcclxuICAgICAgICAgICAgdHJpZ2dlckFuY2hvcihhbmNob3IsIGxhc3RBbmNob3IpO1xyXG4gICAgICAgICAgICBsYXN0QW5jaG9yID0gYW5jaG9yXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwicHJvamVjdC5odG1sXCI6IHtcclxuICAgICAgICAkKFwiI2Fib3V0XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcInN1cHBvcnQuaHRtbFwiOiB7XHJcbiAgICAgICAgJChcIiNzdXBwb3J0XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcImRvY3VtZW50YXRpb24uaHRtbFwiOiB7XHJcbiAgICAgICAgJChcIiNkb2N1bWVudGF0aW9uXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiAgICBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/layout-loader.js\n");

/***/ })

/******/ })));