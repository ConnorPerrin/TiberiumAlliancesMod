// ==UserScript==
// @name        Tiberium Alliances Menu Button Menu
// @namespace   buttonGroupExample
// @include     http*://*.alliances.commandandconquer.com/*
// @version     1.0
// @grant       none
// ==/UserScript==

(function () {
    // Create a <script> element that will inject the script into the webpage
    var script = document.createElement("script");
    script.textContent = "(" +
        function () {
            // This function defines and creates the necessary classes for the menu buttons
            function createClasses() {
                // Define a custom button class with a model property
                qx.Class.define("qx.ui.form.ModelButton", {
                    extend: qx.ui.form.Button,
                    include: [qx.ui.form.MModelProperty],
                    implement: [qx.ui.form.IModel]
                });

                // Define the main TABS class as a singleton that holds button and menu initialization logic
                qx.Class.define("TABS", {
                    type: "singleton",
                    extend: qx.core.Object,
                    construct: function () {
                        try {
                            this.base(arguments);
                            this.self(arguments).Init(); // Initialize the menu buttons
                        } catch (e) {
                            console.group("Tiberium Alliances Menu Button");
                            console.error("Error setting up TABS constructor", e);
                            console.groupEnd();
                        }
                    },
                    statics: {
                        _Init: [], // Array to store initialization functions
                        addInit: function (func) {
                            this._Init.push(func); // Add initialization functions
                        },
                        Init: function () {
                            // Initialize each class stored in the _Init array
                            for (var i in this._Init)
                                qx.Class.getByName(this._Init[i]).getInstance();
                        }
                    }
                });

                // Define the MENU class that adds buttons to the UI, attached to the ScriptsButton in the game's menu
                qx.Class.define("TABS.MENU", {
                    type: "singleton",
                    extend: qx.core.Object,
                    include: [qx.locale.MTranslation],
                    construct: function () {
                        this.base(arguments);

                        // Get the game's "Scripts" button where new buttons will be added
                        var ScriptsButton = qx.core.Init.getApplication().getMenuBar().getScriptsButton();

                        // Create a new menu object where the custom buttons will be attached
                        this.Menu = new qx.ui.menu.Menu();

                        // Add a custom button to the game's "Scripts" button menu
                        ScriptsButton.Add("Menu Button", TABS.RES.IMG.Menu, this.Menu);

                        // Create a submenu for settings, with two buttons: "Button One" and "Button Two"
                        var settingsMenu = new qx.ui.menu.Menu(),
                            settingsButtonOne = new qx.ui.menu.Button(this.tr("Button One"), null, null),
                            settingsButtonTwo = new qx.ui.menu.Button(this.tr("Button Two"), null, null);

                        // Add functionality for "Button One"
                        settingsButtonOne.addListener("execute", function () {
                            TABS.SETTINGS.buttonOneFunc();
                        }, this);

                        // Add functionality for "Button Two"
                        settingsButtonTwo.addListener("execute", function () {
                            TABS.SETTINGS.buttonTwoFunc();
                        }, this);

                        // Add the buttons to the settings menu
                        settingsMenu.add(settingsButtonOne);
                        settingsMenu.add(settingsButtonTwo);
                        this.Menu.add(new qx.ui.menu.Button("Settings", null, null, settingsMenu));

                        // Add an info section with external links (e.g., a link to Google)
                        this.Menu.add(new qx.ui.menu.Separator()); // Add a separator for clarity
                        var infoMenu = new qx.ui.menu.Menu(),
                            infoGoogle = new qx.ui.menu.Button(this.tr("Google"), "", null);

                        // Add a listener to open Google when the button is clicked
                        infoGoogle.addListener("execute", function () {
                            qx.core.Init.getApplication().showExternal("http://google.com");
                        }, this);

                        // Add the Google link to the info menu
                        infoMenu.add(infoGoogle);
                        this.Menu.add(new qx.ui.menu.Button("Info", null, null, infoMenu));
                    },
                    members: {
                        Menu: null // The menu member is initialized in the constructor
                    },
                    defer: function () {
                        TABS.addInit("TABS.MENU"); // Ensure the menu is added during initialization
                    }
                });

                // Define the SETTINGS class, which holds functions for handling button events and other settings-related actions
                qx.Class.define("TABS.SETTINGS", {
                    type: "static",
                    statics: {
                        // Private variables for storing internal state (not used in this example)
                        __private_var_one: null,
                        __private_var_two: null,

                        // Initialization function for settings (can be expanded)
                        _Init: function () {
                            console.log("INIT function");
                        },

                        // Functionality for "Button One" when clicked
                        buttonOneFunc: function () {
                            console.log("Button One Function");
                        },

                        // Functionality for "Button Two" when clicked
                        buttonTwoFunc: function () {
                            console.log("Button Two Function");
                        }
                    }
                });

                // Define resources (e.g., images) used in the menu
                qx.Class.define("TABS.RES.IMG", {
                    type: "static",
                    statics: {
                        // Base64-encoded image for the menu icon
                        Menu: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAADAFBMVEUAAAAAAAAAAAAABgAAAgACDQAAAAAAAAAAAAAAAAAAAAAAAQCV3icGGAETNwQIDAIAAAABBgBwsi9KghoUKwZFih0YVQlpph4iZAksYg8AAQACCABlmxmr0ieayiuM3SFMsBR/wymM0CFtsSQ5bhVFfRgRNQaY1DOLzCZYiRVJqhSDuylc2RiQzCSb2S9epyqVzjOi4TgWZQwecxIGLQQEFgJJgB07exh3niGHwCSv0zG01y////9RkhuX+yaR/iGd2zj///2hpEb//vNllSRijx9yoS5s2RdpmyhorB6GpDjE5GKL2Spjoh9y5h1hqRd36h9nniGm/Stv6Rhc2BNn7hGs/yhwzh6ttUvy5Z24sFvD01vo3Y2zvk61r2X9+emoqEvHuXytqFv58cmswFG9x1JS3Q3DuXCTmkSgvUL49L6LqEaWr09osh2P/idTpxV3pym2ymr1/NqPuje3vV2ewFB2tSWWrEN8mjZupyv7+9iCsy3z+rpplCZs3hqjyUaFnDHY63uJzi6AvivP3W6On0KRrDlcsRDK32CY/yeS9SJitRSHwzHc5Y+Ot0JlmiOg7TWAozB4rSqC4huWp0qz2E1bxxNanR6s2Ex/+hZi4Q9zySKc0EB5zyFgqCOq8jJ4+xKf+yVVnRpMsBJooyij4D6F0iqr0lNt9BlzwyFz9hSM/Rt72CJo+g+ysVF3rivWxmyEqzLt3qJwvCPMw4O6r3BJihSwzE/Bw3fXzYja2I3QwHqpuFnj6Zd7oTCCmC+0ymbl04zLv2zx3qHz8Kzs3pehrUjK33ieskrp7ax99CK502j7/tDI2GdajhpHkhFquCNj1xSnsE/M6G7i8KJXkxl4nSajq1qz9jW+6FLL9Fjb9W2530+btEJhwxiS2jRsrx9/2yZGvQxy1h3L5mW24U1foRtSzg2oyVZWrhZevxFLnheO9x+B+xxo5hac4TyVyTt/yy5f0Bej9jGu/TS5/zJxqymF4ix86xxvwx168RNW0hGh4Cqb3yl69R2T+iQ+CJL9AAAAPHRSTlMAERguJDYNAQgEFSn2P1dIHDytf0uNaLV4iB8ypdnX6Lbe3sJ2gVDp6ZKoxufO9ann+JScbl2lpMXW4/FzYe/CAAACJklEQVQoz2IAA3YOAV4TYzNzI1NWLk4GBOBkEtE3/BIWFvb1s4EoKxs7TJyDRXRC59rQAL+A4BULgtTFmDih6pmFOlfVLVvmsNThvc/jYPv5qgLsYHEWoby02U1Nc2ZM9X7y1MHHfeYNFS6QDKPw/5DNPc3126NTzrZ03Lm11N1ughoHUANArDxpuWXVxZnREamxqS2Ntx18/Oy1WdgZ2IS78j3Xb0yJjViXEJN1ssP75tyHM+fzcTCw6D73rSwoL3Fyiop0trEpuux9f827hTJcDIKTFz8L3Od1LCFqQ7wNEFyZOmPu919yLAz8bxYF9ruVnig5FOkIkqhZPmf2mlBraQb+t7bTfUsLG48cPWwDAlUvPvwM//dXEDAG/tWv51X2HT9jE38wGajFubdv+crwVX+AEisWz1uSc7rIxjlm96bkrN671T0fw9daMTMw6zya7pJ9oMaxamdiemL6pbb65lefVltIMTBp+dl6uGQX7t21ZWtcklPDteL2lbOCJBkZOPhO5bvVuubs2RGXlJGxvy2zrPveAj1WTgZ2KYUAWw/XiorWKddbG8onTsrtBmkAxQavvPs2l3OutVO8vLwKPP3bL9orc4NjhI2PZ/L5q/1uHoG+kx74X6jLU+TlgEQ4o4hS17RFtkv8v3m+nBa6UJwVKA6RYZPW5LH7EfI7JNjeTkOChQMpNXCxSojLycpayogxM4LjFSHFJsDNzc3CxAZLPQCSE8MJTTlJqQAAAABJRU5ErkJggg==",
                    }
                });
            }

            // Function to check if the game has loaded and then initialize the menu
            function checkIfLoaded() {
                try {
                    if (typeof qx != 'undefined') {
                        let app = qx.core.Init.getApplication();
                        if (app) {
                            console.log("loading");
                            createClasses(); // Call the function to create the classes and buttons
                            TABS.getInstance(); // Initialize the TABS instance
                        } else {
                            window.setTimeout(checkIfLoaded, 1000); // Retry after 1 second if the game isn't fully loaded
                        }
                    } else {
                        window.setTimeout(checkIfLoaded, 1000); // Retry after 1 second if qx is not defined
                    }
                } catch (e) {
                    console.log("Error initializing menu: ", e);
                }
            }

            // Wait for the game to load fully before running the script
            function waitForGame() {
                try {
                    if (typeof qx != 'undefined' && typeof qx.core != 'undfined' && typeof qx.core.Init != 'undefined') {
                        var app = qx.core.Init.getApplication();
                        // Check if the player and server data is loaded
                        if (app !== null && app.initDone === true && ClientLib.Data.MainData.GetInstance().get_Player().get_Id() !== 0 && ClientLib.Data.MainData.GetInstance().get_Server().get_WorldId() !== 0) {
                            try {
                                console.time("loaded in");
                                createClasses(); // Call the function to create the classes and buttons
                                TABS.getInstance(); // Initialize the TABS instance
                                console.group("Tiberium Alliances Menu Button");
                                console.timeEnd("loaded in");
                                console.groupEnd();
                            } catch (e) {
                                console.group("Tiberium Alliances Menu Button");
                                console.error("Error in waitForGame", e);
                                console.groupEnd();
                            }
                        } else {
                            window.setTimeout(waitForGame, 1000); // Retry after 1 second if the game isn't fully initialized
                        }
                    } else {
                        window.setTimeout(waitForGame, 1000); // Retry after 1 second if qx is not ready
                    }
                } catch (e) {
                    console.group("Tiberium Alliances Menu Button");
                    console.error("Error in waitForGame", e);
                    console.groupEnd();
                }
            }

            // Start waiting for the game to load
            window.setTimeout(waitForGame, 1000);
        }.toString() + ")();";

    // Set the script type and append it to the <head> element of the webpage
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
})();
