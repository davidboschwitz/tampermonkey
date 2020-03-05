// ==UserScript==
// @name         Better alexa skill store
// @namespace    http://david.boschwitz.me
// @version      0.1
// @author       You
// @match        https://alexa.amazon.com/spa/index.html
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
setTimeout(()=>{
    GM_addStyle(`
.a2s-flat .a2s-content-region {
    background: url(http://localhost:3000/static/media/background-gradient-new-2k.4cdc6386.png), url(http://localhost:3000/static/media/background-tint-noise-new.9a9ad718.png);
    color: white;
}

.a2s-flat .a2s-skill-detail .skill-sample-utterances .utterance>span {
    /* color: #52636c; */
color:white;
}

.utterance>span::before, .utterance>span::after {
    color:white;
}
.a2s-flat .a2s-skill-detail .skill-sample-utterances .utterance {
    background-color: rgba(255, 255, 255, 0.06);
    color: white;
}
.a2s-flat .a2s-skill-detail .skill-detail-header-container {
    background-color: transparent;
}
.a2s-flat .a2s-skill-detail .skill-detail-header-container .skill-detail-header {
    background-color: transparent;
}

.a2s-flat .a2s-skill-detail .skill-detail-header-container .skill-detail-actions {
    background-color: transparent;
}
#d-header {
    display: none;
}

#d-content {
position: initial;
}
`);
    document.getElementById('d-main').className = '';
},2000);
})();