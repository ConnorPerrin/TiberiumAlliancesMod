// ==UserScript==
// @name        Adding Two Buttons with Window and Inner Button
// @namespace   pouet
// @include     http*://*.alliances.commandandconquer.com/*
// @version     0.0.3
// @grant       none
// @author      Connor Perrin
// ==/UserScript==

(function () {
    'use strict';

    const cnctaoptLink = function() {
        // Function to add two buttons
        function addButton() {
            // "cnctaopt" object used to store information about the selected base
            const cnctaopt = {
                selected_base: null,  // This will store a reference to the selected base in the game
            };

            // Check if the real showMenu method has been backed up; if not, back it up
            if (!webfrontend.gui.region.RegionCityMenu.prototype.__cnctaopt_real_showMenu) {
                // Backup the original showMenu method
                webfrontend.gui.region.RegionCityMenu.prototype.__cnctaopt_real_showMenu = webfrontend.gui.region.RegionCityMenu.prototype.showMenu;
            }

            // Override the showMenu method to inject custom buttons into the game's UI
            webfrontend.gui.region.RegionCityMenu.prototype.showMenu = function (selected_base) {
                try {
                    let self = this;
                    cnctaopt.selected_base = selected_base;  // Store the selected base in "cnctaopt"

                    // Ensure buttons are added only once
                    if (this.__cnctaopt_initialized != 1) {
                        this.__cnctaopt_initialized = 1;
                        this.__cnctaopt_links = [];

                        // Loop through the menu to find the proper place to add buttons
                        for (let i in this) {
                            try {
                                if (this[i] && this[i].basename == "Composite") {
                                    
                                    // First Button: Creates the first button labeled "First Button"
                                    let firstButton = new qx.ui.form.Button("First Button", "https://cnctaopt.com/favicon.ico");
                                    firstButton.addListener("execute", function () {
                                        console.log("First Button Pressed");

                                        // Create a basic window when the button is pressed
                                        let win = new qx.ui.window.Window("Basic Window");
                                        win.set({
                                            width: 300,
                                            height: 200,
                                            contentPadding: 10,
                                            showClose: true,
                                            showMaximize: false,
                                            showMinimize: false
                                        });

                                        // Set a layout for the window (VBox layout in this case)
                                        win.setLayout(new qx.ui.layout.VBox());

                                        // Add some content to the window (a label and a button)
                                        let label = new qx.ui.basic.Label("This is a basic window with a button.");
                                        win.add(label);

                                        // Button inside the window
                                        let innerButton = new qx.ui.form.Button("Click Me");
                                        innerButton.addListener("execute", function() {
                                            console.log("Inner Button Pressed");
                                        });
                                        win.add(innerButton);

                                        // Open the window and move it to a visible position
                                        win.open();
                                        win.moveTo(100, 100);
                                    });
                                    this[i].add(firstButton);  // Add the button to the UI
                                    this.__cnctaopt_links.push(firstButton);  // Store a reference to the button

                                    // Second Button: Creates the second button labeled "Second Button"
                                    let secondButton = new qx.ui.form.Button("Second Button", "https://cnctaopt.com/favicon.ico");
                                    secondButton.addListener("execute", function () {
                                        console.log("Second Button Pressed");
                                    });
                                    this[i].add(secondButton);  // Add the button to the UI
                                    this.__cnctaopt_links.push(secondButton);  // Store a reference to the button

                                }
                            } catch (e) {
                                console.log("Error adding buttons: ", e);
                            }
                        }
                    }
                } catch (e) {
                    console.log("Error initializing buttons:", e);
                }

                // Call the original showMenu function (ensure the game's normal behavior continues)
                this.__cnctaopt_real_showMenu(selected_base);
            };
        }

        // Function to check if the game (web app) has fully loaded before adding the buttons
        function checkIfLoaded() {
            try {
                if (typeof qx != 'undefined') {
                    let a = qx.core.Init.getApplication(); // Get the game application object
                    if (a) {
                        addButton();  // Add buttons once the app is loaded
                    } else {
                        window.setTimeout(checkIfLoaded, 1000);  // Retry after 1 second if not loaded
                    }
                } else {
                    window.setTimeout(checkIfLoaded, 1000);  // Retry after 1 second if qx is not defined
                }
            } catch (e) {
                console.log("checkIfLoaded: ", e);
            }
        }

        // Check if the current domain matches "commandandconquer.com" and then run the script
        if (/commandandconquer\.com/i.test(document.domain)) {
            window.setTimeout(checkIfLoaded, 1000);  // Delay the loading check by 1 second
        }
    };

    // Inject the script into the webpage by appending it to the <head> element
    let cnctaoptLinkScript = document.createElement("script");
    cnctaoptLinkScript.type = "text/javascript";
    cnctaoptLinkScript.innerHTML = "(" + cnctaoptLink.toString() + ")();";
    if (/commandandconquer\.com/i.test(document.domain)) {
        document.getElementsByTagName("head")[0].appendChild(cnctaoptLinkScript);  // Add the script to the head
    }
})();
