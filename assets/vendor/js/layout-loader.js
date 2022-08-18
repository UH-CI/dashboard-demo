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

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar anchors = new Set([\"#overview\", \"#substance-use\", \"#mental-health\", \"#co-occurring\", \"#behavioral-crisis\"]); //extend jquery with syncLoad function to allow html components relying on scripts to be loaded before further script executions\n\n$.fn.extend({\n  syncLoad: function syncLoad(url) {\n    var res = $.ajax({\n      url: url,\n      async: false,\n      type: \"GET\"\n    }).responseText;\n    $(this).html(res);\n  }\n});\n\nfunction triggerAnchor(anchor, lastAnchor) {\n  if (lastAnchor) {\n    $(\"\".concat(lastAnchor, \"-nav-selector\")).removeClass(\"active\");\n  }\n\n  $(\"\".concat(anchor, \"-nav-selector\")).addClass(\"active\");\n  $(\"\".concat(anchor, \"-tab-selector\"))[0].click();\n}\n\nfunction setupNavAnchors() {\n  var _iterator = _createForOfIteratorHelper(anchors),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var anchor = _step.value;\n\n      $(\"\".concat(anchor, \"-tab-selector\"))[0].onclick = function () {\n        window.location.hash = anchor;\n      };\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n} //load footer async, doesn't require other scripts\n\n\n$(\"#footer\").load(\"../html/components/layout/footer.html\"); //sync load navbar since it needs to be loaded before other scripts are executed\n//navbar\n\n$(\"#navbar\").syncLoad(\"../html/components/layout/navbar.html\"); //don't need entire link path, just active page, so parse out page name\n\nvar activeLink = window.location.pathname.split(\"/\").pop();\n\nswitch (activeLink) {\n  case \"dashboard.html\":\n    {\n      //tabs\n      var _iterator2 = _createForOfIteratorHelper(anchors),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var _anchor = _step2.value;\n          $(\"\".concat(_anchor, \"-tab-content\")).syncLoad(\"../html/components/dashboard-tabs/\".concat(_anchor.substring(1), \".html\"));\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n\n      setupNavAnchors();\n      var anchor = $(location).attr('hash');\n\n      if (!anchors.has(anchor)) {\n        anchor = \"#overview\";\n        window.location.hash = anchor;\n      } //if in dashboard expand dashboard menu\n\n\n      $(\"#dashboard\").addClass(\"open active\");\n      triggerAnchor(anchor, null);\n      var lastAnchor = anchor;\n      $(window).on('hashchange', function (e) {\n        anchor = $(location).attr('hash'); //only trigger anchor if valid tab anchor\n\n        if (anchors.has(anchor)) {\n          triggerAnchor(anchor, lastAnchor);\n          lastAnchor = anchor;\n        }\n      });\n      $.getScript(\"../js/dashboard.js\");\n      break;\n    }\n\n  case \"project.html\":\n    {\n      $(\"#about\").addClass(\"active\");\n      break;\n    }\n\n  case \"support.html\":\n    {\n      $(\"#support\").addClass(\"active\");\n      break;\n    }\n\n  case \"documentation.html\":\n    {\n      $(\"#documentation\").addClass(\"active\");\n      break;\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9sYXlvdXQtbG9hZGVyLmpzPzJmZDMiXSwibmFtZXMiOlsiYW5jaG9ycyIsIlNldCIsIiQiLCJmbiIsImV4dGVuZCIsInN5bmNMb2FkIiwidXJsIiwicmVzIiwiYWpheCIsImFzeW5jIiwidHlwZSIsInJlc3BvbnNlVGV4dCIsImh0bWwiLCJ0cmlnZ2VyQW5jaG9yIiwiYW5jaG9yIiwibGFzdEFuY2hvciIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjbGljayIsInNldHVwTmF2QW5jaG9ycyIsIm9uY2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJsb2FkIiwiYWN0aXZlTGluayIsInBhdGhuYW1lIiwic3BsaXQiLCJwb3AiLCJzdWJzdHJpbmciLCJhdHRyIiwiaGFzIiwib24iLCJlIiwiZ2V0U2NyaXB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxPQUFPLEdBQUcsSUFBSUMsR0FBSixDQUFRLENBQUMsV0FBRCxFQUFjLGdCQUFkLEVBQWdDLGdCQUFoQyxFQUFrRCxlQUFsRCxFQUFtRSxvQkFBbkUsQ0FBUixDQUFoQixDLENBRUE7O0FBQ0FDLENBQUMsQ0FBQ0MsRUFBRixDQUFLQyxNQUFMLENBQVk7QUFDUkMsVUFBUSxFQUFFLGtCQUFVQyxHQUFWLEVBQWU7QUFDckIsUUFBTUMsR0FBRyxHQUFHTCxDQUFDLENBQUNNLElBQUYsQ0FBTztBQUNmRixTQUFHLEVBQUVBLEdBRFU7QUFFZkcsV0FBSyxFQUFFLEtBRlE7QUFHZkMsVUFBSSxFQUFFO0FBSFMsS0FBUCxFQUlUQyxZQUpIO0FBS0FULEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsSUFBUixDQUFhTCxHQUFiO0FBQ0g7QUFSTyxDQUFaOztBQVdBLFNBQVNNLGFBQVQsQ0FBdUJDLE1BQXZCLEVBQStCQyxVQUEvQixFQUEyQztBQUN2QyxNQUFHQSxVQUFILEVBQWU7QUFDWGIsS0FBQyxXQUFJYSxVQUFKLG1CQUFELENBQWdDQyxXQUFoQyxDQUE0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anMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhbmNob3JzID0gbmV3IFNldChbXCIjb3ZlcnZpZXdcIiwgXCIjc3Vic3RhbmNlLXVzZVwiLCBcIiNtZW50YWwtaGVhbHRoXCIsIFwiI2NvLW9jY3VycmluZ1wiLCBcIiNiZWhhdmlvcmFsLWNyaXNpc1wiXSlcclxuXHJcbi8vZXh0ZW5kIGpxdWVyeSB3aXRoIHN5bmNMb2FkIGZ1bmN0aW9uIHRvIGFsbG93IGh0bWwgY29tcG9uZW50cyByZWx5aW5nIG9uIHNjcmlwdHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBmdXJ0aGVyIHNjcmlwdCBleGVjdXRpb25zXHJcbiQuZm4uZXh0ZW5kKHtcclxuICAgIHN5bmNMb2FkOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGFzeW5jOiBmYWxzZSxcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIlxyXG4gICAgICAgIH0pLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAkKHRoaXMpLmh0bWwocmVzKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiB0cmlnZ2VyQW5jaG9yKGFuY2hvciwgbGFzdEFuY2hvcikge1xyXG4gICAgaWYobGFzdEFuY2hvcikge1xyXG4gICAgICAgICQoYCR7bGFzdEFuY2hvcn0tbmF2LXNlbGVjdG9yYCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgICAkKGAke2FuY2hvcn0tbmF2LXNlbGVjdG9yYCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAkKGAke2FuY2hvcn0tdGFiLXNlbGVjdG9yYClbMF0uY2xpY2soKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBOYXZBbmNob3JzKCkge1xyXG4gICAgZm9yKGxldCBhbmNob3Igb2YgYW5jaG9ycykge1xyXG4gICAgICAgICQoYCR7YW5jaG9yfS10YWItc2VsZWN0b3JgKVswXS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGFuY2hvcjtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vbG9hZCBmb290ZXIgYXN5bmMsIGRvZXNuJ3QgcmVxdWlyZSBvdGhlciBzY3JpcHRzXHJcbiQoXCIjZm9vdGVyXCIpLmxvYWQoXCIuLi9odG1sL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci5odG1sXCIpO1xyXG4vL3N5bmMgbG9hZCBuYXZiYXIgc2luY2UgaXQgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBvdGhlciBzY3JpcHRzIGFyZSBleGVjdXRlZFxyXG4vL25hdmJhclxyXG4kKFwiI25hdmJhclwiKS5zeW5jTG9hZChcIi4uL2h0bWwvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyLmh0bWxcIik7XHJcblxyXG4vL2Rvbid0IG5lZWQgZW50aXJlIGxpbmsgcGF0aCwganVzdCBhY3RpdmUgcGFnZSwgc28gcGFyc2Ugb3V0IHBhZ2UgbmFtZVxyXG5jb25zdCBhY3RpdmVMaW5rID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuc3dpdGNoKGFjdGl2ZUxpbmspIHtcclxuICAgIGNhc2UgXCJkYXNoYm9hcmQuaHRtbFwiOiB7XHJcbiAgICAgICAgLy90YWJzXHJcbiAgICAgICAgZm9yKGxldCBhbmNob3Igb2YgYW5jaG9ycykge1xyXG4gICAgICAgICAgICAkKGAke2FuY2hvcn0tdGFiLWNvbnRlbnRgKS5zeW5jTG9hZChgLi4vaHRtbC9jb21wb25lbnRzL2Rhc2hib2FyZC10YWJzLyR7YW5jaG9yLnN1YnN0cmluZygxKX0uaHRtbGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXR1cE5hdkFuY2hvcnMoKTtcclxuICAgICAgICBsZXQgYW5jaG9yID0gJChsb2NhdGlvbikuYXR0cignaGFzaCcpO1xyXG4gICAgICAgIGlmKCFhbmNob3JzLmhhcyhhbmNob3IpKSB7XHJcbiAgICAgICAgICAgIGFuY2hvciA9IFwiI292ZXJ2aWV3XCI7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYW5jaG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmIGluIGRhc2hib2FyZCBleHBhbmQgZGFzaGJvYXJkIG1lbnVcclxuICAgICAgICAkKFwiI2Rhc2hib2FyZFwiKS5hZGRDbGFzcyhcIm9wZW4gYWN0aXZlXCIpO1xyXG4gICAgICAgIHRyaWdnZXJBbmNob3IoYW5jaG9yLCBudWxsKTtcclxuICAgICAgICBsZXQgbGFzdEFuY2hvciA9IGFuY2hvcjtcclxuICAgICAgICAkKHdpbmRvdykub24oJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgYW5jaG9yID0gJChsb2NhdGlvbikuYXR0cignaGFzaCcpO1xyXG4gICAgICAgICAgICAvL29ubHkgdHJpZ2dlciBhbmNob3IgaWYgdmFsaWQgdGFiIGFuY2hvclxyXG4gICAgICAgICAgICBpZihhbmNob3JzLmhhcyhhbmNob3IpKSB7XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyQW5jaG9yKGFuY2hvciwgbGFzdEFuY2hvcik7XHJcbiAgICAgICAgICAgICAgICBsYXN0QW5jaG9yID0gYW5jaG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkLmdldFNjcmlwdChcIi4uL2pzL2Rhc2hib2FyZC5qc1wiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgXCJwcm9qZWN0Lmh0bWxcIjoge1xyXG4gICAgICAgICQoXCIjYWJvdXRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwic3VwcG9ydC5odG1sXCI6IHtcclxuICAgICAgICAkKFwiI3N1cHBvcnRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiZG9jdW1lbnRhdGlvbi5odG1sXCI6IHtcclxuICAgICAgICAkKFwiI2RvY3VtZW50YXRpb25cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuICAgIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/layout-loader.js\n");

/***/ })

/******/ })));