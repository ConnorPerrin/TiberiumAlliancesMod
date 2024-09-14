# Tiberium Alliances Menu Button Script

## Overview

This script enhances the user interface (UI) of the game Tiberium Alliances by adding a custom menu and button functionality directly into the game’s menu system. It automatically integrates into the game UI, creating an additional set of buttons that provide quick access to various actions and external links.

## Features
- Adds a custom button ("Menu Button") to the game's menu bar.
- Includes two configurable buttons, Button One and Button Two, inside a Settings submenu.
- Adds an Info section with links, such as a direct link to Google.
- Automatically integrates with the game’s menu system.

## Key Components

### 1. Script Injection
The script uses the following snippet to inject itself into the game’s webpage context:

```javascript
var script = document.createElement("script");
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);
```

This allows the script to run with full access to the page’s JavaScript environment, including game-specific classes and functions.

### 2. Creating Classes
The script defines and initializes several custom classes that extend the game’s UI components:

- qx.ui.form.ModelButton: A custom button class with additional properties.
- TABS: A singleton class that manages the initialization of the menu and buttons.
- TABS.MENU: Handles adding custom buttons to the game's menu bar.
- TABS.SETTINGS: Contains the functionality of buttons like "Button One" and "Button Two."
- TABS.RES.IMG: Stores images, including a Base64-encoded image used for the custom menu icon.

### 3. Menu and Button Initialization
The script dynamically adds a menu button to the game’s Scripts Button menu. This button includes:

Settings Menu: Containing "Button One" and "Button Two" with customizable actions.
Info Section: Includes external links such as one to Google.
Example of adding a button:

```javascript
var settingsButtonOne = new qx.ui.menu.Button(this.tr("Button One"), null, null);
settingsButtonOne.addListener("execute", function () {
    TABS.SETTINGS.buttonOneFunc();
}, this);
```

### 4. Waiting for the Game to Load
To ensure that the game is fully loaded before the script runs, the script periodically checks if key game components (like player ID) are available:

```javascript
function waitForGame() {
    if (gameIsReady) {
        // Initialize classes and menu
    } else {
        window.setTimeout(waitForGame, 1000);
    }
}
```

This ensures the script only runs once the game has fully initialized its UI components.

### 5. Functionality for Buttons

Button One and Button Two are linked to functions inside TABS.SETTINGS. These functions can be customized to perform specific actions:

```javascript
buttonOneFunc: function () {
    console.log("Button One Function");
},
buttonTwoFunc: function () {
    console.log("Button Two Function");
}
```

### 6. External Links
The script allows easy integration of external links into the game’s UI:

```javascript
var infoGoogle = new qx.ui.menu.Button(this.tr("Google"), "", null);
infoGoogle.addListener("execute", function () {
    qx.core.Init.getApplication().showExternal("http://google.com");
}, this);
```
