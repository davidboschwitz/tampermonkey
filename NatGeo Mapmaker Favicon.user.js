// ==UserScript==
// @name         NatGeo Mapmaker Favicon
// @namespace    boschwitz.me
// @version      0.1
// @description  Give mapmaker.nationalgeographic.org a normal natgeo icon
// @author       You
// @match        https://mapmaker.nationalgeographic.org/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://www.nationalgeographic.com/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
})();