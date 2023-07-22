function showMenu(selected_base) {
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
                        link.addListener("execute", function() {
                            let bt = qx.core.Init.getApplication();
                            bt.getBackgroundArea().closeCityInfo();

                            console.log("Starting download");
                            console.log(webfrontend.gui);

                            getAllFunctionsNew(webfrontend.gui, "webfrontend.gui");
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
}

function onCitiesChange() {}

function onTick() {
    this.__RG !== null && this.__bio()
}

function clickFirstButton() {
    var t = this.getChildren()[0],
        n;
    if (t)
        for (n = 0; n < t.getChildren().length; n++)
            if (t.getChildren()[n] !== null && t.getChildren()[n].isVisible()) {
                t.getChildren()[n].isEnabled() && t.getChildren()[n].execute();
                break
            }
}

function resetButtonState() {
    this.__bhO.reset();
    this.__bhP.reset();
    this.__bhQ.reset();
    this.__bhR.reset();
    this.__bhS.reset();
    this.__bhT.reset();
    this.__bhU.reset();
    this.__bhV.reset();
    this.__bhW.reset();
    this.__bhX.reset();
    this.__bhY.reset();
    this.__bia.reset();
    this.__bib.reset();
    this.__bic.reset();
    this.__bid.reset();
    this.__bie.reset();
    this.__bih.reset();
    this.__bii.reset();
    this.__bij.reset();
    this.__bik.reset()
}