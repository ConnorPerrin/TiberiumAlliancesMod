// ==UserScript==
// @name        Adding a Button with Window, Table, Progress Bar, and Text Box
// @namespace   pouet
// @include     http*://*.alliances.commandandconquer.com/*
// @version     0.0.7
// @grant       none
// @author      Connor Perrin
// ==/UserScript==

(function () {
    'use strict';

    const cnctaoptLink = function() {
        // Function to add the button
        function addButton() {
            const cnctaopt = {
                selected_base: null,
            };

            if (!webfrontend.gui.region.RegionCityMenu.prototype.__cnctaopt_real_showMenu) {
                webfrontend.gui.region.RegionCityMenu.prototype.__cnctaopt_real_showMenu = webfrontend.gui.region.RegionCityMenu.prototype.showMenu;
            }

            webfrontend.gui.region.RegionCityMenu.prototype.showMenu = function (selected_base) {
                try {
                    let self = this;
                    cnctaopt.selected_base = selected_base;

                    if (this.__cnctaopt_initialized != 1) {
                        this.__cnctaopt_initialized = 1;
                        this.__cnctaopt_links = [];

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
                                            width: 400,
                                            height: 400,
                                            contentPadding: 10,
                                            showClose: true,
                                            showMaximize: false,
                                            showMinimize: false
                                        });

                                        win.setLayout(new qx.ui.layout.VBox());

                                        let label = new qx.ui.basic.Label("This is a window with a button, table, and progress bar.");
                                        win.add(label);

                                        // Container for the button and progress bar (HBox for horizontal alignment)
                                        let container = new qx.ui.container.Composite(new qx.ui.layout.HBox(10)); // 10px spacing

                                        // First button next to progress bar
                                        let innerButton1 = new qx.ui.form.Button("Click Me");
                                        innerButton1.addListener("execute", function() {
                                            console.log("Inner Button 1 Pressed");
                                        });
                                        container.add(innerButton1);  // Add the button to the container

                                        // Create progress bar container with red background and green progress bar
                                        let progressBarContainer = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
                                        progressBarContainer.set({
                                            width: 300,
                                            height: 20,
                                            decorator: new qx.ui.decoration.Decorator().set({
                                                backgroundColor: "red"
                                            })
                                        });

                                        // Green bar inside the red container
                                        let greenBar = new qx.ui.core.Widget().set({
                                            width: 0, // Initial width of 0
                                            height: 30,
                                            backgroundColor: "green"
                                        });
                                        progressBarContainer.add(greenBar, {left: 0, top: 0});

                                        // Text box for progress (e.g., "1 / 50")
                                        let progressLabel = new qx.ui.basic.Label("0 / 50");
                                        progressBarContainer.add(progressLabel, {left: "50%", top: "10%", zIndex: 10});
                                        progressLabel.set({
                                            textColor: "white",
                                            alignX: "center",
                                            alignY: "middle"
                                        });

                                        // Add progress bar container to the horizontal box (next to the button)
                                        container.add(progressBarContainer);

                                        // Add the button and progress bar container to the window
                                        win.add(container);

                                        // Add a spacer for vertical space
                                        let spacer = new qx.ui.core.Spacer(null, 20); // 20px vertical space
                                        win.add(spacer);

                                        // Create table column headers
                                        let tableModel = new qx.ui.table.model.Simple();
                                        tableModel.setColumns(["ID", "Name", "Value"]);

                                        // Add mock rows of data
                                        tableModel.setData([
                                            [1, "Item 1", "100"],
                                            [2, "Item 2", "200"],
                                            [3, "Item 3", "300"],
                                            [4, "Item 4", "400"]
                                        ]);

                                        // Create table
                                        let table = new qx.ui.table.Table(tableModel);
                                        table.set({
                                            height: 150
                                        });

                                        // Add table to the window below the buttons
                                        win.add(table);

                                        // Simulate progress (like the FP function)
                                        let value = 0;
                                        let max = 50;
                                        let interval = setInterval(function() {
                                            if (value < max) {
                                                value += 5; // Increase progress
                                                greenBar.setWidth((value / max) * 300); // Update width of green bar
                                                progressLabel.setValue(value + " / " + max); // Update progress text
                                            } else {
                                                clearInterval(interval); // Stop when progress is complete
                                            }
                                        }, 500);

                                        // Open the window and move it to a visible position
                                        win.open();
                                        win.moveTo(100, 100);
                                    });
                                    this[i].add(firstButton);  // Add the button to the UI
                                    this.__cnctaopt_links.push(firstButton);  // Store a reference to the button

                                }
                            } catch (e) {
                                console.log("Error adding buttons: ", e);
                            }
                        }
                    }
                } catch (e) {
                    console.log("Error initializing buttons:", e);
                }

                this.__cnctaopt_real_showMenu(selected_base);
            };
        }

        function checkIfLoaded() {
            try {
                if (typeof qx != 'undefined') {
                    let a = qx.core.Init.getApplication();
                    if (a) {
                        addButton();
                    } else {
                        window.setTimeout(checkIfLoaded, 1000);
                    }
                } else {
                    window.setTimeout(checkIfLoaded, 1000);
                }
            } catch (e) {
                console.log("checkIfLoaded: ", e);
            }
        }

        if (/commandandconquer\.com/i.test(document.domain)) {
            window.setTimeout(checkIfLoaded, 1000);
        }
    };

    let cnctaoptLinkScript = document.createElement("script");
    cnctaoptLinkScript.type = "text/javascript";
    cnctaoptLinkScript.innerHTML = "(" + cnctaoptLink.toString() + ")();";
    if (/commandandconquer\.com/i.test(document.domain)) {
        document.getElementsByTagName("head")[0].appendChild(cnctaoptLinkScript);
    }
})();
