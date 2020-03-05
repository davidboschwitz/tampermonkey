// ==UserScript==
// @name         Better ISD Multimedia Page
// @namespace    http://david.boschwitz.me
// @version      0.1
// @description  The IowaStateDaily multimedia page looked like poop. Now it doesn't.
// @author       You
// @match        http://www.iowastatedaily.com/multimedia/
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`/* Better looking /multimedia/ page (start) [by http://david.boschwitz.me] */

.section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card.showcase {
  box-shadow: inset 0px -6px 0px -3px #ac1f2d;
  background-color: #F8F8F8;
}

.section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card-body {
  padding: 15px !important;
}

.section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card .card-image-group {
  margin-bottom: 0 !important;
}

.section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card-panel {
  background-color: #F8F8F8 !important;
  border: none;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.2), 0 0px 1px 0 rgba(0, 0, 0, 0.19);
}

.section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .panel-body {
  padding: 0;
}

.section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card a[href^="/multimedia/"] {
  color: #3d3d3d !important;
}

.section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card .text-muted {
  color: #777 !important;
}

.section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .block.light .card a {
  color: #3d3d3d !important;
}

.section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .block.light .card a:hover {
  color: #000 !important;
  text-decoration: none;
}

.section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card .card-lead p {
  color: #3d3d3d !important;
}

@media (min-width: 768px) {
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) #main-page-container.container_fluid {
    width: 750px !important;
  }
}

@media (min-width: 992px) {
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) #main-page-container.container_fluid {
    width: 970px !important;
  }
}

@media (min-width: 1200px) {
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) #main-page-container.container_fluid {
    width: 1170px !important;
  }
}

.section-multimedia:not(.type-collection):not(.type-image):not(.type-video) #main-page-container.container_fluid {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}

@media (max-width: 767px) {
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card-meta {
    font-size: 12px;
    line-height: 14px;
  }
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card .card-lead p {
    font-size: 12px;
    line-height: normal;
  }
}

@media (min-width: 768px) {
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-1, .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-8 {
    width: 100%;
  }
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-2, .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-3, .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-4, .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-5, .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-6, .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-7, .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-9, .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-10 {
    width: 100%;
  }
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card-meta {
    font-size: 16px;
    line-height: 20px;
  }
}

@media (min-width: 992px) {
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-1, .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-8 {
    width: 100%;
  }
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-2, .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-3, .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-4, .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-5, .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-6, .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-7, .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-9, .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .position-10 {
    width: 100%;
  }
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card-panel.panel:nth-child(n+3) {
    display: inline-block;
    width: 49%;
  }
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card-panel.panel:nth-child(n+3) .card-lead {
    display: none;
  }
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card-panel.panel:nth-child(n+3) .card-meta {
    font-size: 14px;
  }
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card-panel.panel:nth-child(n+3) .card-headline {
    height: 48px;
  }
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card-panel.panel:nth-child(n+3):nth-child(odd) {
    float: right;
  }
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card-panel.panel:nth-child(n+3) .image {
    max-height: 230px;
  }
}

@media (min-width: 1200px) {
  .section-multimedia:not(.type-collection):not(.type-image):not(.type-video) .card-panel.panel:nth-child(n+3) .image {
    max-height: 280px;
  }
}

/* Better looking /multimedia/ page (end) [by http://david.boschwitz.me] */`);
})();