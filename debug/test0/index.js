'use strict';

let {
    getNodeText
} = require('../..');

let node = document.getElementById('node1');
let text = getNodeText(node.childNodes[0]);
console.log(text);
