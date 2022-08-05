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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/navloader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/navloader.js":
/*!*************************!*\
  !*** ./js/navloader.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(\"#navbar\").load(\"../html/components/navbar.html\", function () {\n  var activeLink = window.location.pathname;\n\n  switch (activeLink) {\n    case \"/html/index.html\":\n      {\n        $(\"#overview\").addClass(\"active\");\n        break;\n      }\n\n    case \"/html/project.html\":\n      {\n        $(\"#about\").addClass(\"active\");\n        break;\n      }\n\n    case \"/html/support.html\":\n      {\n        $(\"#support\").addClass(\"active\");\n        break;\n      }\n\n    case \"/html/documentation.html\":\n      {\n        $(\"#documentation\").addClass(\"active\");\n        break;\n      }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9uYXZsb2FkZXIuanM/YWIxYiJdLCJuYW1lcyI6WyIkIiwibG9hZCIsImFjdGl2ZUxpbmsiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiYWRkQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUNBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLElBQWIsQ0FBa0IsZ0NBQWxCLEVBQW9ELFlBQU07QUFDdEQsTUFBTUMsVUFBVSxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQW5DOztBQUNBLFVBQU9ILFVBQVA7QUFDSSxTQUFLLGtCQUFMO0FBQXlCO0FBQ3JCRixTQUFDLENBQUMsV0FBRCxDQUFELENBQWVNLFFBQWYsQ0FBd0IsUUFBeEI7QUFDQTtBQUNIOztBQUNELFNBQUssb0JBQUw7QUFBMkI7QUFDdkJOLFNBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWU0sUUFBWixDQUFxQixRQUFyQjtBQUNBO0FBQ0g7O0FBQ0QsU0FBSyxvQkFBTDtBQUEyQjtBQUN2Qk4sU0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjTSxRQUFkLENBQXVCLFFBQXZCO0FBQ0E7QUFDSDs7QUFDRCxTQUFLLDBCQUFMO0FBQWlDO0FBQzdCTixTQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQk0sUUFBcEIsQ0FBNkIsUUFBN0I7QUFDQTtBQUNIO0FBaEJMO0FBa0JILENBcEJEIiwiZmlsZSI6Ii4vanMvbmF2bG9hZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiQoXCIjbmF2YmFyXCIpLmxvYWQoXCIuLi9odG1sL2NvbXBvbmVudHMvbmF2YmFyLmh0bWxcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlTGluayA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIHN3aXRjaChhY3RpdmVMaW5rKSB7XHJcbiAgICAgICAgY2FzZSBcIi9odG1sL2luZGV4Lmh0bWxcIjoge1xyXG4gICAgICAgICAgICAkKFwiI292ZXJ2aWV3XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIi9odG1sL3Byb2plY3QuaHRtbFwiOiB7XHJcbiAgICAgICAgICAgICQoXCIjYWJvdXRcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiL2h0bWwvc3VwcG9ydC5odG1sXCI6IHtcclxuICAgICAgICAgICAgJChcIiNzdXBwb3J0XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIi9odG1sL2RvY3VtZW50YXRpb24uaHRtbFwiOiB7XHJcbiAgICAgICAgICAgICQoXCIjZG9jdW1lbnRhdGlvblwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/navloader.js\n");

/***/ })

/******/ })));