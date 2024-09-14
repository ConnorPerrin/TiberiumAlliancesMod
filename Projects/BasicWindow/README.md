# Adding Two Buttons with Window

This is a simple userscript that adds two custom buttons to the game's menu in Command & Conquer: Tiberium Alliances. When the first button is pressed, a basic window will open. This script is built using the Qooxdoo framework.

## Features

- Adds two buttons to the game's menu:
  - **First Button**: Opens a basic window with some text.
  - **Second Button**: Logs a message to the console.
- Simple and non-intrusive UI enhancements.

## Requirements

- The script is intended for use with Command & Conquer: Tiberium Alliances.
- It relies on the Qooxdoo framework, which is already included in the game.

## Installation

1. Install a userscript manager like [Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://www.greasespot.net/).
2. Copy and paste the script into the userscript manager.
3. Ensure it runs on `commandandconquer.com`.

## How It Works

- The script waits for the game to load, then injects two buttons into the game's city menu.
- When the **First Button** is pressed, a window is created and displayed with a simple label.
- The **Second Button** simply logs "Second Button Pressed" in the browser's console.

## Script Breakdown

- **qx.ui.window.Window**: The window object used to display content when the first button is clicked.
- **qx.ui.form.Button**: Used to create both the "First Button" and "Second Button".
- **Window Layout**: A `VBox` layout is applied to the window to handle its content properly.
- The script listens for the game's UI to fully load before adding the custom buttons.

## Example Code

```javascript
let win = new qx.ui.window.Window("Basic Window");
win.set({
    width: 300,
    height: 200,
    contentPadding: 10,
    showClose: true,
    showMaximize: false,
    showMinimize: false
});
win.setLayout(new qx.ui.layout.VBox());
let label = new qx.ui.basic.Label("This is a basic window.");
win.add(label);
win.open();
win.moveTo(100, 100);
```