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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/dashboard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/dashboard.js":
/*!*************************!*\
  !*** ./js/dashboard.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(\".vis-container\").each(function () {\n  var leftControl = $(this).children(\".vis-nav.left\");\n  var rightControl = $(this).children(\".vis-nav.right\");\n  var visPanels = $(this).children(\".vis-panels\").children(\".vis-panel\");\n  var activeIndex;\n\n  var checkEnd = function checkEnd() {\n    if (activeIndex == 0) {\n      leftControl.addClass(\"end\");\n    } else {\n      leftControl.removeClass(\"end\");\n    }\n\n    if (activeIndex == visPanels.length - 1) {\n      rightControl.addClass(\"end\");\n    } else {\n      rightControl.removeClass(\"end\");\n    }\n  };\n\n  visPanels.each(function (index) {\n    if ($(this).hasClass(\"active\")) {\n      activeIndex = index;\n      checkEnd();\n    }\n  });\n  leftControl.on(\"click\", function (e) {\n    $(visPanels[activeIndex--]).removeClass(\"active\");\n    $(visPanels[activeIndex]).addClass(\"active\");\n    checkEnd();\n  });\n  rightControl.on(\"click\", function (e) {\n    $(visPanels[activeIndex++]).removeClass(\"active\");\n    $(visPanels[activeIndex]).addClass(\"active\");\n    checkEnd();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9kYXNoYm9hcmQuanM/OTA4MiJdLCJuYW1lcyI6WyIkIiwiZWFjaCIsImxlZnRDb250cm9sIiwiY2hpbGRyZW4iLCJyaWdodENvbnRyb2wiLCJ2aXNQYW5lbHMiLCJhY3RpdmVJbmRleCIsImNoZWNrRW5kIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImxlbmd0aCIsImluZGV4IiwiaGFzQ2xhc3MiLCJvbiIsImUiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkMsSUFBcEIsQ0FBeUIsWUFBWTtBQUNqQyxNQUFNQyxXQUFXLEdBQUdGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsUUFBUixDQUFpQixlQUFqQixDQUFwQjtBQUNBLE1BQU1DLFlBQVksR0FBR0osQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxRQUFSLENBQWlCLGdCQUFqQixDQUFyQjtBQUNBLE1BQU1FLFNBQVMsR0FBR0wsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxRQUFSLENBQWlCLGFBQWpCLEVBQWdDQSxRQUFoQyxDQUF5QyxZQUF6QyxDQUFsQjtBQUNBLE1BQUlHLFdBQUo7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixRQUFHRCxXQUFXLElBQUksQ0FBbEIsRUFBcUI7QUFDakJKLGlCQUFXLENBQUNNLFFBQVosQ0FBcUIsS0FBckI7QUFDSCxLQUZELE1BR0s7QUFDRE4saUJBQVcsQ0FBQ08sV0FBWixDQUF3QixLQUF4QjtBQUNIOztBQUNELFFBQUdILFdBQVcsSUFBSUQsU0FBUyxDQUFDSyxNQUFWLEdBQW1CLENBQXJDLEVBQXdDO0FBQ3BDTixrQkFBWSxDQUFDSSxRQUFiLENBQXNCLEtBQXRCO0FBQ0gsS0FGRCxNQUdLO0FBQ0RKLGtCQUFZLENBQUNLLFdBQWIsQ0FBeUIsS0FBekI7QUFDSDtBQUNKLEdBYkQ7O0FBZUFKLFdBQVMsQ0FBQ0osSUFBVixDQUFlLFVBQVVVLEtBQVYsRUFBaUI7QUFDNUIsUUFBR1gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRWSxRQUFSLENBQWlCLFFBQWpCLENBQUgsRUFBK0I7QUFDM0JOLGlCQUFXLEdBQUdLLEtBQWQ7QUFDQUosY0FBUTtBQUNYO0FBQ0osR0FMRDtBQU9BTCxhQUFXLENBQUNXLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFVBQUNDLENBQUQsRUFBTztBQUMzQmQsS0FBQyxDQUFDSyxTQUFTLENBQUNDLFdBQVcsRUFBWixDQUFWLENBQUQsQ0FBNEJHLFdBQTVCLENBQXdDLFFBQXhDO0FBQ0FULEtBQUMsQ0FBQ0ssU0FBUyxDQUFDQyxXQUFELENBQVYsQ0FBRCxDQUEwQkUsUUFBMUIsQ0FBbUMsUUFBbkM7QUFDQUQsWUFBUTtBQUNYLEdBSkQ7QUFLQUgsY0FBWSxDQUFDUyxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLFVBQUNDLENBQUQsRUFBTztBQUM1QmQsS0FBQyxDQUFDSyxTQUFTLENBQUNDLFdBQVcsRUFBWixDQUFWLENBQUQsQ0FBNEJHLFdBQTVCLENBQXdDLFFBQXhDO0FBQ0FULEtBQUMsQ0FBQ0ssU0FBUyxDQUFDQyxXQUFELENBQVYsQ0FBRCxDQUEwQkUsUUFBMUIsQ0FBbUMsUUFBbkM7QUFDQUQsWUFBUTtBQUNYLEdBSkQ7QUFLSCxDQXRDRCIsImZpbGUiOiIuL2pzL2Rhc2hib2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoXCIudmlzLWNvbnRhaW5lclwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsZWZ0Q29udHJvbCA9ICQodGhpcykuY2hpbGRyZW4oXCIudmlzLW5hdi5sZWZ0XCIpO1xuICAgIGNvbnN0IHJpZ2h0Q29udHJvbCA9ICQodGhpcykuY2hpbGRyZW4oXCIudmlzLW5hdi5yaWdodFwiKTtcbiAgICBjb25zdCB2aXNQYW5lbHMgPSAkKHRoaXMpLmNoaWxkcmVuKFwiLnZpcy1wYW5lbHNcIikuY2hpbGRyZW4oXCIudmlzLXBhbmVsXCIpO1xuICAgIGxldCBhY3RpdmVJbmRleDtcblxuICAgIGNvbnN0IGNoZWNrRW5kID0gKCkgPT4ge1xuICAgICAgICBpZihhY3RpdmVJbmRleCA9PSAwKSB7XG4gICAgICAgICAgICBsZWZ0Q29udHJvbC5hZGRDbGFzcyhcImVuZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxlZnRDb250cm9sLnJlbW92ZUNsYXNzKFwiZW5kXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGFjdGl2ZUluZGV4ID09IHZpc1BhbmVscy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByaWdodENvbnRyb2wuYWRkQ2xhc3MoXCJlbmRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByaWdodENvbnRyb2wucmVtb3ZlQ2xhc3MoXCJlbmRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2aXNQYW5lbHMuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIGNoZWNrRW5kKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGxlZnRDb250cm9sLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgJCh2aXNQYW5lbHNbYWN0aXZlSW5kZXgtLV0pLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKHZpc1BhbmVsc1thY3RpdmVJbmRleF0pLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICBjaGVja0VuZCgpO1xuICAgIH0pO1xuICAgIHJpZ2h0Q29udHJvbC5vbihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICQodmlzUGFuZWxzW2FjdGl2ZUluZGV4KytdKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJCh2aXNQYW5lbHNbYWN0aXZlSW5kZXhdKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgY2hlY2tFbmQoKTtcbiAgICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/dashboard.js\n");

/***/ })

/******/ })));