function getItemsShown anonymous(value) {
    if (this.$$runtime_ItemsShown !== undefined) return this.$$runtime_ItemsShown;
    if (this.$$user_ItemsShown !== undefined) return this.$$user_ItemsShown;
    else return this.$$init_ItemsShown;
}

function setItemsShown anonymous() {
    this.setItemsShown.$$install && this.setItemsShown.$$install.call(this);
    return this.setItemsShown.apply(this, arguments);
}

function resetItemsShown() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initItemsShown() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeItemsShown() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeItemsShown() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getSelectedStepId anonymous(value) {
    if (this.$$runtime_SelectedStepId !== undefined) return this.$$runtime_SelectedStepId;
    if (this.$$user_SelectedStepId !== undefined) return this.$$user_SelectedStepId;
    else return this.$$init_SelectedStepId;
}

function setSelectedStepId anonymous(value) {
    this.$$setSelectedStepIdImpl.apply(this, arguments);
    return value;
}

function resetSelectedStepId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initSelectedStepId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeSelectedStepId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSelectedStepId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getParentBarVisible anonymous(value) {
    if (this.$$runtime_ParentBarVisible !== undefined) return this.$$runtime_ParentBarVisible;
    if (this.$$user_ParentBarVisible !== undefined) return this.$$user_ParentBarVisible;
    else return this.$$init_ParentBarVisible;
}

function setParentBarVisible anonymous(value) {
    this.$$setParentBarVisibleImpl.apply(this, arguments);
    return value;
}

function resetParentBarVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initParentBarVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeParentBarVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeParentBarVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setParentBar(n) {
    n.addListener(bi, function(n) {
        this.setParentBarVisible(n.getData())
    }, this);
    this.setParentBarVisible(n.getActive())
}

function gotPlayerInfo() {
    var t = webfrontend.gui.missions.MissionsBar.version_prefix,
        n = ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_MISSIONSTRACKED);
    if (n && n.length > t.length && n.indexOf(t) == 0) {
        n = gt + n.substr(t.length) + bt;
        try {
            this.__bme = eval(n)
        } catch (i) {}
    }
}

function saveTrackeds() {
    for (var i, t, r = ClientLib.Data.MainData.GetInstance().get_Missions(), n = this.__bme.steps.length - 1; n >= 0 && this.__bme.steps.length; --n) i = r.GetMissionStep(this.__bme.steps[n]), i || this.__bme.steps.splice(n++, 1);
    t = webfrontend.gui.missions.MissionsBar.version_prefix + qx.lang.Json.stringify(this.__bme, null, nr);
    t != ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_MISSIONSTRACKED) && (ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_MISSIONSTRACKED, t), ClientLib.Config.Main.GetInstance().SaveToDB())
}

function getWidgetDetails() {
    return this.__bmi
}

function getMissionItem(n) {
    for (var i, t = 0; t < this.__bmd.length; ++t)
        if (i = this.__bmd[t], i.curstep && i.curstep.get_MissionId() == n) return i;
    return null
}

function getUIItem(n) {
    var t = null,
        i, r;
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_FIRSTMISSION:
            this.__bmd[0] && this.__bmd[0].ui && (t = this.__bmd[0].ui.img);
            break;
        case ClientLib.Data.Missions.PATH.WDG_SHOWGUIDE:
            return this.__bml;
        case ClientLib.Data.Missions.PATH.WDG_GETREWARD:
            i = webfrontend.data.missions.MissionScriptParser.getInstance().getLastMissionStep();
            r = ClientLib.Data.MainData.GetInstance().get_Missions().GetMissionStep(i);
            r && this.setSelectedStepId(i);
            t = this.__bmn
    }
    return t && (ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_SHOW_MISSIONSBAR, !0), ClientLib.Config.Main.GetInstance().SaveToDB()), t
}