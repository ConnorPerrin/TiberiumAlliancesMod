// ==UserScript==
// @name        Template code
// @namespace   pouet
// @include     http*://*.alliances.commandandconquer.com/*
// @version     0.0.0
// @grant       none
// @author      Connor Perrin
// ==/UserScript==

(function () {
    'use strict';

    // Function to print "Hello World"
    function helloWorld() {
        console.log("Hello World");
    }

    // Create a script element and inject the helloWorld function
    let helloWorldScript = document.createElement("script");
    helloWorldScript.type = "text/javascript";
    helloWorldScript.innerHTML = "(" + helloWorld.toString() + ")();";

    // Check if we're on the correct website (e.g., commandandconquer.com)
    if (/commandandconquer\.com/i.test(document.domain)) {
        document.getElementsByTagName("head")[0].appendChild(helloWorldScript);
    }
})();
