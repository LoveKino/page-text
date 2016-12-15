/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	let {
	    getNodeText
	} = __webpack_require__(2);

	let node = document.getElementById('node1');
	let text = getNodeText(node.childNodes[0]);
	console.log(text);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	let getDisplayText = (node) => {
	    if (node.nodeType === 3) {
	        return node.textContent || '';
	    }

	    if (node.nodeType !== 1) {
	        return '';
	    }

	    // for input elements, people can see the content inside the element
	    if (node.tagName === 'INPUT' ||
	        node.tagName === 'SELECT') {
	        return node.value || '';
	    }

	    if (node.tagName === 'HEAD' ||
	        node.tagName === 'LINK' ||
	        node.tagName === 'TITLE' ||
	        node.tagName === 'BASE' ||
	        node.tagName === 'SCRIPT' ||
	        node.tagName === 'NOSCRIPT' ||
	        node.tagName === 'CANVAS' ||
	        node.tagName === 'STYLE' ||
	        node.tagName === 'META') {
	        return '';
	    }

	    let style = window.getComputedStyle(node);
	    let display = style.display;

	    if (display === 'none') {
	        return '';
	    } else {
	        let text = '';
	        let children = node.childNodes;
	        for (let i = 0; i < children.length; i++) {
	            let child = children[i];
	            text += getDisplayText(child);
	        }

	        return text;
	    }
	};

	let getNodeText = (node) => {
	    if (node.nodeType === 3) { // text node
	        return node.textContent || '';
	    }

	    if (node.nodeType !== 1) { // other node but element node
	        return '';
	    }

	    // for input elements, people can see the content inside the element
	    if (node.tagName === 'INPUT' ||
	        node.tagName === 'SELECT') {
	        return node.value || '';
	    }

	    if (node.tagName === 'HEAD' ||
	        node.tagName === 'LINK' ||
	        node.tagName === 'TITLE' ||
	        node.tagName === 'BASE' ||
	        node.tagName === 'SCRIPT' ||
	        node.tagName === 'NOSCRIPT' ||
	        node.tagName === 'CANVAS' ||
	        node.tagName === 'STYLE' ||
	        node.tagName === 'META') {
	        return '';
	    }

	    return '';
	};

	module.exports = {
	    getDisplayText,
	    getNodeText
	};


/***/ }
/******/ ]);