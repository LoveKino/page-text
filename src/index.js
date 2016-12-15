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
