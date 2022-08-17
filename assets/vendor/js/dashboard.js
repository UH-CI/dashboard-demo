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

eval("$(\".vis-container\").each(function () {\n  console.log(this);\n  var leftControl = $(this).children(\".vis-nav.left\");\n  var rightControl = $(this).children(\".vis-nav.right\");\n  var visPanels = $(this).children(\".vis-panels\").children(\".vis-panel\");\n  var activeIndex;\n  console.log(visPanels.length);\n  console.log(visPanels[0]);\n\n  var checkEnd = function checkEnd() {\n    if (activeIndex == 0) {\n      leftControl.addClass(\"end\");\n    } else {\n      leftControl.removeClass(\"end\");\n    }\n\n    if (activeIndex == visPanels.length - 1) {\n      rightControl.addClass(\"end\");\n    } else {\n      rightControl.removeClass(\"end\");\n    }\n  };\n\n  visPanels.each(function (index) {\n    if ($(this).hasClass(\"active\")) {\n      activeIndex = index;\n      checkEnd();\n    }\n  });\n  leftControl.on(\"click\", function (e) {\n    $(visPanels[activeIndex--]).removeClass(\"active\");\n    $(visPanels[activeIndex]).addClass(\"active\");\n    checkEnd();\n  });\n  rightControl.on(\"click\", function (e) {\n    $(visPanels[activeIndex++]).removeClass(\"active\");\n    $(visPanels[activeIndex]).addClass(\"active\");\n    checkEnd();\n  });\n}); // for(let container of visContainers) {\n//     console.log(container);\n//     const children = container.children();\n//     let left = children.shift();\n//     let right = children.pop();\n//     console.log(children);\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9kYXNoYm9hcmQuanM/OTA4MiJdLCJuYW1lcyI6WyIkIiwiZWFjaCIsImNvbnNvbGUiLCJsb2ciLCJsZWZ0Q29udHJvbCIsImNoaWxkcmVuIiwicmlnaHRDb250cm9sIiwidmlzUGFuZWxzIiwiYWN0aXZlSW5kZXgiLCJsZW5ndGgiLCJjaGVja0VuZCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJpbmRleCIsImhhc0NsYXNzIiwib24iLCJlIl0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JDLElBQXBCLENBQXlCLFlBQVk7QUFDakNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDQSxNQUFNQyxXQUFXLEdBQUdKLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssUUFBUixDQUFpQixlQUFqQixDQUFwQjtBQUNBLE1BQU1DLFlBQVksR0FBR04sQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxRQUFSLENBQWlCLGdCQUFqQixDQUFyQjtBQUNBLE1BQU1FLFNBQVMsR0FBR1AsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxRQUFSLENBQWlCLGFBQWpCLEVBQWdDQSxRQUFoQyxDQUF5QyxZQUF6QyxDQUFsQjtBQUNBLE1BQUlHLFdBQUo7QUFFQU4sU0FBTyxDQUFDQyxHQUFSLENBQVlJLFNBQVMsQ0FBQ0UsTUFBdEI7QUFDQVAsU0FBTyxDQUFDQyxHQUFSLENBQVlJLFNBQVMsQ0FBQyxDQUFELENBQXJCOztBQUVBLE1BQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsUUFBR0YsV0FBVyxJQUFJLENBQWxCLEVBQXFCO0FBQ2pCSixpQkFBVyxDQUFDTyxRQUFaLENBQXFCLEtBQXJCO0FBQ0gsS0FGRCxNQUdLO0FBQ0RQLGlCQUFXLENBQUNRLFdBQVosQ0FBd0IsS0FBeEI7QUFDSDs7QUFDRCxRQUFHSixXQUFXLElBQUlELFNBQVMsQ0FBQ0UsTUFBVixHQUFtQixDQUFyQyxFQUF3QztBQUNwQ0gsa0JBQVksQ0FBQ0ssUUFBYixDQUFzQixLQUF0QjtBQUNILEtBRkQsTUFHSztBQUNETCxrQkFBWSxDQUFDTSxXQUFiLENBQXlCLEtBQXpCO0FBQ0g7QUFDSixHQWJEOztBQWVBTCxXQUFTLENBQUNOLElBQVYsQ0FBZSxVQUFVWSxLQUFWLEVBQWlCO0FBQzVCLFFBQUdiLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsUUFBUixDQUFpQixRQUFqQixDQUFILEVBQStCO0FBQzNCTixpQkFBVyxHQUFHSyxLQUFkO0FBQ0FILGNBQVE7QUFDWDtBQUNKLEdBTEQ7QUFPQU4sYUFBVyxDQUFDVyxFQUFaLENBQWUsT0FBZixFQUF3QixVQUFDQyxDQUFELEVBQU87QUFDM0JoQixLQUFDLENBQUNPLFNBQVMsQ0FBQ0MsV0FBVyxFQUFaLENBQVYsQ0FBRCxDQUE0QkksV0FBNUIsQ0FBd0MsUUFBeEM7QUFDQVosS0FBQyxDQUFDTyxTQUFTLENBQUNDLFdBQUQsQ0FBVixDQUFELENBQTBCRyxRQUExQixDQUFtQyxRQUFuQztBQUNBRCxZQUFRO0FBQ1gsR0FKRDtBQUtBSixjQUFZLENBQUNTLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsVUFBQ0MsQ0FBRCxFQUFPO0FBQzVCaEIsS0FBQyxDQUFDTyxTQUFTLENBQUNDLFdBQVcsRUFBWixDQUFWLENBQUQsQ0FBNEJJLFdBQTVCLENBQXdDLFFBQXhDO0FBQ0FaLEtBQUMsQ0FBQ08sU0FBUyxDQUFDQyxXQUFELENBQVYsQ0FBRCxDQUEwQkcsUUFBMUIsQ0FBbUMsUUFBbkM7QUFDQUQsWUFBUTtBQUNYLEdBSkQ7QUFLSCxDQTFDRCxFLENBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vanMvZGFzaGJvYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChcIi52aXMtY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICBjb25zdCBsZWZ0Q29udHJvbCA9ICQodGhpcykuY2hpbGRyZW4oXCIudmlzLW5hdi5sZWZ0XCIpO1xyXG4gICAgY29uc3QgcmlnaHRDb250cm9sID0gJCh0aGlzKS5jaGlsZHJlbihcIi52aXMtbmF2LnJpZ2h0XCIpO1xyXG4gICAgY29uc3QgdmlzUGFuZWxzID0gJCh0aGlzKS5jaGlsZHJlbihcIi52aXMtcGFuZWxzXCIpLmNoaWxkcmVuKFwiLnZpcy1wYW5lbFwiKTtcclxuICAgIGxldCBhY3RpdmVJbmRleDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh2aXNQYW5lbHMubGVuZ3RoKTtcclxuICAgIGNvbnNvbGUubG9nKHZpc1BhbmVsc1swXSk7XHJcblxyXG4gICAgY29uc3QgY2hlY2tFbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoYWN0aXZlSW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBsZWZ0Q29udHJvbC5hZGRDbGFzcyhcImVuZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxlZnRDb250cm9sLnJlbW92ZUNsYXNzKFwiZW5kXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihhY3RpdmVJbmRleCA9PSB2aXNQYW5lbHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICByaWdodENvbnRyb2wuYWRkQ2xhc3MoXCJlbmRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByaWdodENvbnRyb2wucmVtb3ZlQ2xhc3MoXCJlbmRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZpc1BhbmVscy5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgY2hlY2tFbmQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZWZ0Q29udHJvbC5vbihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgJCh2aXNQYW5lbHNbYWN0aXZlSW5kZXgtLV0pLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQodmlzUGFuZWxzW2FjdGl2ZUluZGV4XSkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgY2hlY2tFbmQoKTtcclxuICAgIH0pO1xyXG4gICAgcmlnaHRDb250cm9sLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAkKHZpc1BhbmVsc1thY3RpdmVJbmRleCsrXSkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJCh2aXNQYW5lbHNbYWN0aXZlSW5kZXhdKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICBjaGVja0VuZCgpO1xyXG4gICAgfSk7XHJcbn0pXHJcblxyXG5cclxuXHJcbi8vIGZvcihsZXQgY29udGFpbmVyIG9mIHZpc0NvbnRhaW5lcnMpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGNvbnRhaW5lcik7XHJcbi8vICAgICBjb25zdCBjaGlsZHJlbiA9IGNvbnRhaW5lci5jaGlsZHJlbigpO1xyXG4vLyAgICAgbGV0IGxlZnQgPSBjaGlsZHJlbi5zaGlmdCgpO1xyXG4vLyAgICAgbGV0IHJpZ2h0ID0gY2hpbGRyZW4ucG9wKCk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhjaGlsZHJlbik7XHJcbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/dashboard.js\n");

/***/ })

/******/ })));