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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/dashboard-nav-anchor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/dashboard-nav-anchor.js":
/*!************************************!*\
  !*** ./js/dashboard-nav-anchor.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// function triggerAnchor(anchor) {\n//     switch(anchor) {\n//         case \"#overview\": {\n//             $(\"#overview-tab\")[0].click();\n//             break;\n//         }\n//         case \"#substance-abuse\": {\n//             $(\"#substance-abuse-tab\")[0].click();\n//             break;\n//         }\n//         case \"#mental-health\": {\n//             $(\"#mental-health-tab\")[0].click();\n//             break;\n//         }\n//         case \"#co-occurring\": {\n//             $(\"#co-occurring-tab\")[0].click();\n//             break;\n//         }\n//         case \"#behavioral-crisis\": {\n//             $(\"#behavioral-crisis-tab\")[0].click();\n//             break;\n//         }\n//     }\n// }\n// let anchor = $(location).attr('hash');\n// triggerAnchor(anchor);\n// $(window).on('hashchange', function(e){\n//     anchor = $(location).attr('hash');\n//     triggerAnchor(anchor);\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9kYXNoYm9hcmQtbmF2LWFuY2hvci5qcz82NDVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2pzL2Rhc2hib2FyZC1uYXYtYW5jaG9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIGZ1bmN0aW9uIHRyaWdnZXJBbmNob3IoYW5jaG9yKSB7XHJcbi8vICAgICBzd2l0Y2goYW5jaG9yKSB7XHJcbi8vICAgICAgICAgY2FzZSBcIiNvdmVydmlld1wiOiB7XHJcbi8vICAgICAgICAgICAgICQoXCIjb3ZlcnZpZXctdGFiXCIpWzBdLmNsaWNrKCk7XHJcbi8vICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBjYXNlIFwiI3N1YnN0YW5jZS1hYnVzZVwiOiB7XHJcbi8vICAgICAgICAgICAgICQoXCIjc3Vic3RhbmNlLWFidXNlLXRhYlwiKVswXS5jbGljaygpO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY2FzZSBcIiNtZW50YWwtaGVhbHRoXCI6IHtcclxuLy8gICAgICAgICAgICAgJChcIiNtZW50YWwtaGVhbHRoLXRhYlwiKVswXS5jbGljaygpO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY2FzZSBcIiNjby1vY2N1cnJpbmdcIjoge1xyXG4vLyAgICAgICAgICAgICAkKFwiI2NvLW9jY3VycmluZy10YWJcIilbMF0uY2xpY2soKTtcclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGNhc2UgXCIjYmVoYXZpb3JhbC1jcmlzaXNcIjoge1xyXG4vLyAgICAgICAgICAgICAkKFwiI2JlaGF2aW9yYWwtY3Jpc2lzLXRhYlwiKVswXS5jbGljaygpO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGxldCBhbmNob3IgPSAkKGxvY2F0aW9uKS5hdHRyKCdoYXNoJyk7XHJcbi8vIHRyaWdnZXJBbmNob3IoYW5jaG9yKTtcclxuLy8gJCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24oZSl7XHJcbi8vICAgICBhbmNob3IgPSAkKGxvY2F0aW9uKS5hdHRyKCdoYXNoJyk7XHJcbi8vICAgICB0cmlnZ2VyQW5jaG9yKGFuY2hvcik7XHJcbi8vIH0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/dashboard-nav-anchor.js\n");

/***/ })

/******/ })));