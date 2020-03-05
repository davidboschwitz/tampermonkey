// ==UserScript==
// @name         fb ad block
// @namespace    david.boschwitz.me
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.facebook.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var x;

    function createXMac() {
        x.style.width = "500px";
        x.style.height = "90%";
        x.style.top = "10px";
        x.style.right = "254px";
    }

    function createXCorpLaptop() {
        x.style.width = "320px";
        x.style.height = "90%";
        x.style.top = "10px";
        x.style.right = "250px";
    }

    function createX() {
        if(!document.getElementById("fbcockblock")) {
            x = document.createElement("div");
            x.id = "fbcockblock"
            x.style.zIndex = "99";
            x.style.backgroundColor = "#e9ebee";
            x.style.position = "fixed";
            document.body.appendChild(x);
        }
        if(innerWidth == 1536) {
            createXCorpLaptop();
        } else {
            createXMac();
        }
    }

    document.body.onkeypress = function(e){
        switch(e.key) {
            case "x":
                if(!!document.getElementById("fbcockblock")){
                    x.style.display = x.style.display == "none" ? "block" : "none";
                } else {
                    createX();
                }
                break;
            case "r":
                createX();
                break;
        }
    }
    createX();
})();