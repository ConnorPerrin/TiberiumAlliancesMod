# Template script

This is an example template which can be used to build upon.

## Key note

All of the code needs to exist inside the `function()` method:

```js
(function () {
    'use strict';

})();
```

In order to inject the newly create function, we first need to check which url to inject. If the page matches the url `commandandconquer` then we'll inject the new HTML within the `body` of the webpage.


```js
    // Create a script element and inject the helloWorld function
    let helloWorldScript = document.createElement("script");
    helloWorldScript.type = "text/javascript";
    helloWorldScript.innerHTML = "(" + helloWorld.toString() + ")();";

    // Check if we're on the correct website (e.g., commandandconquer.com)
    if (/commandandconquer\.com/i.test(document.domain)) {
        document.getElementsByTagName("head")[0].appendChild(helloWorldScript);
    }
```

Any newly added functions has to be placed within the main function:

```js
(function () {
    'use strict';

    // Function to print "Hello World"
    function helloWorld() {
        console.log("Hello World");
    }

})();
```
