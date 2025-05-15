/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n\nconst root = document.getElementById('root')\n\n\nconst container = document.createElement('div');\ncontainer.className = \"container\"\nroot.appendChild(container)\nconst title = document.createElement('h1');\ntitle.textContent = 'Погода'\n\n\nconst input = document.createElement('input');\ninput.type = 'text'\ninput.placeholder = 'Введите город'\n\nconst button = document.createElement('button');\nbutton.textContent = 'Узнать погоду'\nconst result = document.createElement('div');\n\ncontainer.appendChild(title);\ncontainer.appendChild(input);\ncontainer.appendChild(button);\ncontainer.appendChild(result);\n\ndocument.body.appendChild(container);\n\nbutton.addEventListener('click',() => {\n    const city = input.value.trim()\n    if (!city) {\n        result.innerHTML = '<p style=\"color:red;\">Введите название города</p>';\n        return;\n    }\n    result.innerHTML = '<div class=\"loader\"></div>'\n\n    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=ru&format=json`;\n\n  fetch(geoUrl)\n    .then(res => {\n      if (!res.ok) throw new Error(\"Город не найден\");\n      return res.json();\n    })\n    .then(data => {\n      if (!data.results || data.results.length === 0) {\n        throw new Error(\"Город не найден\");\n      }\n\n      const lat = data.results[0].latitude;\n      const lon = data.results[0].longitude;\n      const name = data.results[0].name;\n      const country = data.results[0].country;\n\n      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;\n\n      return fetch(url)\n        .then(res => {\n          if (!res.ok) throw new Error(\"Ошибка при получении погоды\");\n          return res.json();\n        })\n        .then(data => {\n          result.innerHTML = `\n            <p><strong>${name}, ${country}</strong></p>\n            <p>Температура: ${data.current_weather.temperature}°C</p>\n            <p>Погода (код): ${data.current_weather.weathercode}</p>\n            <p>Ветер: ${data.current_weather.windspeed} км/ч</p>\n          `;\n        });\n    })\n    .catch(err => {\n      result.innerHTML = `<p style=\"color:red;\">Ошибка: ${err.message}</p>`;\n    });\n});\n\n\n\n//# sourceURL=webpack://weather/./src/scripts/index.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weather/./src/styles/style.css?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;