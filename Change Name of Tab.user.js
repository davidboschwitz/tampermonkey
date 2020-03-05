// ==UserScript==
// @name         Change Name of Tab
// @namespace    http://david.boschwitz.me/
// @version      0.1
// @description  CTRL+SHIFT+L Changes tab title
// @author       davidboschwitz
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onkeyup = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;

        if (e.ctrlKey && e.shiftKey && key == 76) {
            var newTitle = prompt("Change tab title", document.title);
            if(newTitle) {
                document.title = newTitle;
            }
        }
    }
})();