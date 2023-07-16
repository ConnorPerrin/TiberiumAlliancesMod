// ==UserScript==
// @version       1.0.7.6
// @name          CnC:TA CnCTAOpt Link
// @namespace     https://cnctaopt.com/
// @icon          https://cnctaopt.com/favicon.ico
// @description   Creates a "CnCTAOpt" button when selecting a base in Command & Conquer: Tiberium Alliances. The share button takes you to http://cnctaopt.com/ and fills in the selected base information so you can analyze or share the base.
// @author        zbluebugz
// @include       http*://*alliances*.com/*
// @include       https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @homepage      https://github.com/zbluebugz/CnC-TA-Opt
// @updateURL     https://raw.githubusercontent.com/zbluebugz/CnC-TA-Opt/master/CnCTAOpt.link.user.js
// @grant         GM_setValue
// @grant         GM_getValue
// @grant         GM_registerMenuCommand
// @grant         GM_xmlhttpRequest
// @grant         GM_updatingEnabled
// @contributor   zbluebugz (https://github.com/zbluebugz)
// ==/UserScript==
/*
    Original script for cncopt.com contributed by:
        @contributor   PythEch (http://userscripts.org/users/220246)
        @contributor   jerbri (http://userscripts.org/users/507954)
        @contributor   leo7044 (https://github.com/leo7044)
    Cloned and modified for cnctaopt.com

    1.0.7.3 2021-01: zbluebugz; rewrote/adapated various parts for cnctaopt.com;
    1.0.7.4 2021-02: zbluebugz; cnctaopt.com has SSL.
    1.0.7.5 2021-02: zbluebugz; changed "else GM_log(e);" to "else if (typeof GM_log != 'undefined') GM_log(e);"
    1.0.7.6 2021-02: zbluebugz; dropped unsafewindow and gm_log bits; simiplified fn cnctaoptLinkCheckIfLoaded() and error trapping;
    ***
    TODO:
        Infected units - needs testing.
    ***
*/
(function () {
    'use strict';
    const cnctaoptLink = function() {
        // link code version
        const cnctaopt_version = "1.0.7.6";
        // base / defense / offense - map units with cnctaopt's hotkeys.

        function cnctaopt3_create() {
            console.log("CnCTAOpt Link Button v" + cnctaopt_version + " loaded");
            const cnctaopt = {
                selected_base: null,
            };

            if (!webfrontend.gui.region.RegionCityMenu.prototype.__cnctaopt_real_showMenu) {
                webfrontend.gui.region.RegionCityMenu.prototype.__cnctaopt_real_showMenu = webfrontend.gui.region.RegionCityMenu.prototype.showMenu;
            }

            let check_ct = 0;
            let check_timer = null;
            let button_enabled = 123456;
            /* Wrap showMenu so we can inject our Sharelink at the end of menus and
                * sync Base object to our cnctaopt.selected_base variable  */
            webfrontend.gui.region.RegionCityMenu.prototype.showMenu = function (selected_base) {
                try {
                    let self = this;
                    //console.log(selected_base);
                    cnctaopt.selected_base = selected_base;
                    if (this.__cnctaopt_initialized != 1) {
                        this.__cnctaopt_initialized = 1;
                        this.__cnctaopt_links = [];
                        for (let i in this) {
                            try {
                                if (this[i] && this[i].basename == "Composite") {
                                    // let link = new qx.ui.form.Button("CnCTAOpt", "http://cnctaopt.com/favicon.ico");
                                    let link = new qx.ui.form.Button("CnCTAOpt _ temp");
                                    link.addListener("execute", function () {
                                        let bt = qx.core.Init.getApplication();
                                        bt.getBackgroundArea().closeCityInfo();

                                        console.log("Starting download");
                                        console.log(ClientLib);
                                        getAllFunctionsNew(ClientLib, "ClientLib");
                                    });
                                    this[i].add(link);
                                    this.__cnctaopt_links.push(link);
                                }
                            } catch (e) {
                                console.log("cnctaopt [2]: ", e);
                            }
                        }
                    }
                    let tf = false;
                    switch (selected_base.get_VisObjectType()) {
                        case ClientLib.Vis.VisObject.EObjectType.RegionCityType:
                            switch (selected_base.get_Type()) {
                                case ClientLib.Vis.Region.RegionCity.ERegionCityType.Own:
                                    tf = true;
                                    break;
                                case ClientLib.Vis.Region.RegionCity.ERegionCityType.Alliance:
                                case ClientLib.Vis.Region.RegionCity.ERegionCityType.Enemy:
                                    tf = true;
                                    break;
                            }
                            break;
                        case ClientLib.Vis.VisObject.EObjectType.RegionGhostCity:
                            tf = false;
                            console.log("cnctaopt: Ghost City selected.. ignoring because we don't know what to do here");
                            break;
                        case ClientLib.Vis.VisObject.EObjectType.RegionNPCBase:
                            tf = true;
                            break;
                        case ClientLib.Vis.VisObject.EObjectType.RegionNPCCamp:
                            tf = true;
                            break;
                    }

                    let orig_tf = tf;

                    function check_if_button_should_be_enabled() {
                        try {
                            tf = orig_tf;
                            let selected_base = cnctaopt.selected_base;
                            let still_loading = false;
                            if (check_timer !== null) {
                                clearTimeout(check_timer);
                            }

                            /* When a city is selected, the data for the city is loaded in the background.. once the
                                * data arrives, this method is called again with these fields set, but until it does
                                * we can't actually generate the link.. so this section of the code grays out the button
                                * until the data is ready, then it'll light up. */
                            if (selected_base && selected_base.get_Id) {
                                let city_id = selected_base.get_Id();
                                let city = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(city_id);
                                //if (!city || !city.m_CityUnits || !city.m_CityUnits.m_DefenseUnits) {
                                //console.log("City", city);
                                //console.log("get_OwnerId", city.get_OwnerId());
                                if (!city || city.get_OwnerId() === 0) {
                                    still_loading = true;
                                    tf = false;
                                }
                            } else {
                                tf = false;
                            }
                            if (tf != button_enabled) {
                                button_enabled = tf;
                                for (let i = 0; i < self.__cnctaopt_links.length; ++i) {
                                    self.__cnctaopt_links[i].setEnabled(tf);
                                }
                            }
                            if (!still_loading) {
                                check_ct = 0;
                            } else {
                                if (check_ct > 0) {
                                    check_ct--;
                                    check_timer = setTimeout(check_if_button_should_be_enabled, 100);
                                } else {
                                    check_timer = null;
                                }
                            }
                        } catch (e) {
                            console.log("cnctaopt [3]: ", e);
                            tf = false;
                        }
                    }

                    check_ct = 50;
                    check_if_button_should_be_enabled();
                } catch (e) {
                    console.log("cnctaopt [3]: ", e);
                }
                this.__cnctaopt_real_showMenu(selected_base);
            };
        }

        function getAllFunctionsNew(obj, funcName) {
            console.log("Temp: " + funcName);
            var downloadCount = 0;
            var undesirableOptions = new Set(["constructor", "Update", "$ctor",
                                                "length", "anchor", "at", "big", "blink", "bold",
                                                "charAt", "charCodeAt", "codePointAt", "concat", "endsWith", "fontcolor",
                                                "fontsize", "fixed", "includes", "indexOf", "italics", "lastIndexOf", "link",
                                                "localeCompare", "match", "matchAll", "normalize", "padEnd", "padStart",
                                                "repeat", "replace", "replaceAll", "search", "slice", "small", "split",
                                                "strike", "sub", "substr", "substring", "sup", "startsWith", "toString",
                                                "trim", "trimStart", "trimLeft", "trimEnd", "trimRight", "toLocaleLowerCase", "toLocaleUpperCase",
                                                "toLowerCase", "toUpperCase", "valueOf", "isWellFormed", "toWellFormed",
                                                "toExponential", "toFixed", "toPrecision", "toLocaleString", "copyWithin", "fill", 
                                                "find", "findIndex", "findLast", "findLastIndex", "pop", "push", "reverse", "shift", 
                                                "unshift", "sort", "splice", "join", "keys", "entries", "values", "forEach", "filter", 
                                                "flat", "flatMap", "every", "some", "reduce", "reduceRight", "toReversed", "toSorted", 
                                                "toSpliced", "with", "caller", "apply", "bind", "call", "name", "arguments", "GetData",
                                                "__defineGetter__", "__defineSetter__","hasOwnProperty","__lookupGetter__","__lookupSetter__",
                                                "isPrototypeOf","propertyIsEnumerable", "__proto__", "$n"]);



                                                //THINK ABOUT WHETHER OR NOT TO INCLUDE THR WORD "PROTOTYPE"

            function traverse(obj, funcName, depth) {
                var functions = [];
                var callable_functions = [];

                var objs = Object.getOwnPropertyNames(Object.getPrototypeOf(obj)).concat(Object.getOwnPropertyNames(obj));
                for(var i in objs){
                    var key = objs[i];
                    
                    if (key === key.toUpperCase()) {
                        continue;
                    }

                    // Check if the key exists in the set of undesirable words
                    if (undesirableOptions.has(key)) {
                        continue;
                    }


                    try {
                        if (typeof obj[key] === "function") {
                            functions.push(obj[key].toString().slice(0, 8) + " " + key + obj[key].toString().slice(8));

                            if (obj[key].length === 0 && obj[key] !== null && obj[key] != "undefined" && obj[key] != null) {
                                callable_functions.push(key);
                            }
                        }

                        if (typeof obj[key] === "object" && obj[key] !== null && obj[key] != "undefined" && obj[key] != null) {
                            functions.push(obj[key].toString().slice(0, 8) + " " + key + obj[key].toString().slice(8));
                            callable_functions.push(key);
                        }
                    } catch (error) {
                        console.error("[2] An error occurred:", error.message);
                    }
                }

                console.log("Downloading: " + funcName + ".js ~~ Size: " + callable_functions.length);

                // Download file
                download(funcName, functions.join(""));
                downloadCount = downloadCount + 1;

                if (depth > 1 && !(callable_functions === undefined || callable_functions.length === 0)) {
                    // console.log("Insize loop: " + funcName + ".js ~~ Size: " + callable_functions.length);

                    callable_functions.forEach(function (item, index) {
                        // console.log("Index: " + index + " ~ Item: " + item);
                        try {
                            if (obj[item] && typeof obj[item] === "function" && obj[item] != "undefined" && obj[item] != null) {
                                var temp = obj[item]();
                                
                                if(temp == "undefined" || temp == null ) {
                                    traverse(obj[item], (funcName + "." + item), depth - 1); // Recursive call to handle subobjects
                                } else {
                                    traverse(obj[item](), (funcName + "." + item), depth - 1); // Recursive call to handle subobjects
                                }
                                
                            } else {
                                traverse(obj[item], (funcName + "." + item), depth - 1); // Recursive call to handle subobjects
                            }
                        } catch (error) {
                            console.error("[3] An error occurred:", error.message);
                        }
                    });
                }
            }

            try {
                traverse(obj, funcName, 10);
                console.log("Download Count: " + downloadCount);
            } catch (error) {
                console.error("[1] An error occurred:", error.message);
            }
            console.log("Finished!");
        }


        function download(filename, text) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename + ".js");

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);

            custom_sleep(250);
        }

        function executeFunctionByName(functionName, context /*, args */) {
            var args = Array.prototype.slice.call(arguments, 2);
            var namespaces = functionName.split(".");
            var func = namespaces.pop();
            for(var i = 0; i < namespaces.length; i++) {
              context = context[namespaces[i]];
            }
            return context[func].apply(context, args);
        }

        window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
            alert("Error occured: " + errorMsg);//or any message
            return false;
        }

        function sleep() {
            return new Promise(resolve => {
                setTimeout(resolve, 5000); // Delay for 1000 milliseconds (1 second)
            });
            }

        function custom_sleep(delay) {
            const start = new Date().getTime();
            while (new Date().getTime() < start + delay) {
                // Do nothing, just wait
            }
        }

        function cnctaoptLinkCheckIfLoaded() {
            try {
                if (typeof qx != 'undefined') {
                    let a = qx.core.Init.getApplication(); // application
                    if (a) {
                        cnctaopt3_create();
                    } else {
                        window.setTimeout(cnctaoptLinkCheckIfLoaded, 1000);
                    }
                } else {
                    window.setTimeout(cnctaoptLinkCheckIfLoaded, 1000);
                }
            } catch (e) {
                console.log("cnctaoptLinkCheckIfLoaded: ", e);
            }
        }
        if (/commandandconquer\.com/i.test(document.domain)) {
            window.setTimeout(cnctaoptLinkCheckIfLoaded, 1000);
        }
    };

    let cnctaoptLinkScript = document.createElement("script");
    cnctaoptLinkScript.type = "text/javascript";
    cnctaoptLinkScript.innerHTML = "(" + cnctaoptLink.toString() + ")();";
    if (/commandandconquer\.com/i.test(document.domain)) {
        document.getElementsByTagName("head")[0].appendChild(cnctaoptLinkScript);
    }
})();


/*
End of CnCTAOpt Link Button
*/
