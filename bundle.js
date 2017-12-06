/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

$(document).ready( () => {
  const flashcards = [  {hint: "Default Parameters", answer: "In ES6, we can put default values right in the signature of functions."},
                        {hint: "Template Literal", answer: "In ES6, we can use a new syntax ${NAME} inside of the back-ticked string."},
                        {hint: "Multi-line Strings", answer: "In ES6, utilize backicks to create multi-line strings."},
                        {hint: "Destructuring Assignment", answer: `The destructuring assignment syntax is a JavaScript expression that makes it possible
                                                                    to unpack values from arrays, or properties from objects, into distinct variables.`},
                        {hint: "Arrow Functions", answer: `Arrow functions are a more concise syntax for writing function expressions.
                                                           They utilize a new token, =>, that looks like a fat arrow.
                                                           Arrow functions are anonymous and change the way (this) binds in functions.`},
                        {hint: "Promises", answer: "Promises allow us to write asynchronous code in a more synchronous and structured way."},
                        {hint: "Let and Const", answer: "Let is scoped to the nearest set of { }. Const values cannot change"},
                    ]

  let count = 0;
  let hidden = true;

  $("#next").on("click", () => {
    if (hidden === false) {
      $("#answer").toggleClass('hidden');
      hidden = true;
    }
    $("#content").html(`<h5><strong>${flashcards[count].hint}</strong></h5>`);
    $("#answer").html(`<p>${flashcards[count].answer}</p>`);
    count++
    if (count === flashcards.length ) count = 0;
  });

  $("#reveal").on("click", () => {
    if (hidden) {
      $("#answer").toggleClass('hidden');
      hidden = false;
    }
  });

});


/***/ })
/******/ ]);