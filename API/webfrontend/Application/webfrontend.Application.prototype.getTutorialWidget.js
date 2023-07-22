function startWelcomizer() {
    this.__bHL || webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Missions(), i, ClientLib.Data.Missions.MissionUpdated, this, this.__wu);
    this.__bHL = !0;
    this.__zB();
    this.__bHG.setSource(webfrontend.gui.missions.TutorialOverlay.url_defaulticon);
    this.__bHH.setValue(this.tr(s));
    this.__bHI.setValue(this.tr(c));
    switch (ClientLib.Data.MainData.GetInstance().get_Player().get_Faction()) {
        case ClientLib.Base.EFactionType.NODFaction:
            this.__yY.setValue(this.tr(d));
            break;
        case ClientLib.Base.EFactionType.GDIFaction:
        default:
            this.__yY.setValue(this.tr(e))
    }
    this.__bCt.set({
        label: this.tr(t),
        enabled: !0
    });
    this.setPosPercentX(50);
    this.setPosPercentY(50);
    this.updatePosition(!0);
    this.__bHG.show();
    this.__bHH.show();
    this.__bHI.show();
    this.__yY.show();
    this.__bCt.show();
    qx.core.Init.getApplication().getMarkerManager().setHighlight(this.__bCt);
    ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_SHOWWELCOME, 0);
    ClientLib.Config.Main.GetInstance().SaveToDB();
    this.__wu()
}

function onBtnClose() {
    this.__bHM = 0;
    this.__bHN = null;
    webfrontend.gui.OverlayWindow.prototype.onBtnClose.call(this)
}

function setData(t, i) {
    this.__zB();
    this.__bHM = t;
    switch (ClientLib.Data.MainData.GetInstance().get_Player().get_Faction()) {
        case ClientLib.Base.EFactionType.NODFaction:
            i.isnod != undefined && i.isnod.length > 1 && (i.is = i.isnod);
            i.ttnod != undefined && i.ttnod.length > 1 && (i.tt = i.ttnod);
            i.tsnod != undefined && i.tsnod.length > 1 && (i.ts = i.tsnod);
            i.tbnod != undefined && i.tbnod.length > 1 && (i.tb = i.tbnod);
            i.tdnod != undefined && i.tdnod.length > 1 && (i.td = i.tdnod);
            i.tqnod != undefined && i.tqnod.length > 1 && (i.tq = i.tqnod);
            i.btnod != undefined && i.btnod.length > 1 && (i.bt = i.btnod)
    }
    i.hi || this.__bHG.set({
        source: i.is && i.is.length > 0 ? i.is : webfrontend.gui.missions.TutorialOverlay.url_defaulticon,
        visibility: n
    });
    i.tt && i.tt.length > 0 && this.setTitle(i.tt);
    i.ts && i.ts.length > 0 && this.__bHH.set({
        value: i.ts,
        visibility: n
    });
    i.tb && i.tb.length > 0 && this.__bHI.set({
        value: i.tb,
        visibility: n
    });
    i.td && i.td.length > 0 && this.__yY.set({
        value: i.td,
        visibility: n
    });
    !1 && i.tq && i.tq.length > 0 && webfrontend.phe.cnc.config.Config.getInstance().inDevelopment() && this.__bHJ.set({
        value: i.tq,
        visibility: n
    });
    i.hc || this.__bHK.set({
        visibility: n
    });
    i.bt && i.bt.length > 0 && this.__bCt.set({
        label: i.bt,
        visibility: n
    });
    i.px != undefined && this.setPosPercentX(i.px);
    i.py != undefined && this.setPosPercentY(i.py);
    (i.px != undefined || i.py != undefined) && this.updatePosition(!0)
}

function setMissionVariableData(n) {
    this.__bHN = n
}

function getUIItem(n) {
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_CONTINUE:
            return this.__bCt
    }
    return null
}

function initVisibility anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_visibility !== undefined) {
        old = this.$$runtime_visibility;
    } else if (this.$$user_visibility !== undefined) {
        old = this.$$user_visibility;
    } else if (this.$$useinit_visibility) {
        old = this.$$init_visibility;
    }
    var computed;
    if (this.$$runtime_visibility !== undefined) {
        computed = this.$$runtime_visibility;
    } else if (this.$$user_visibility !== undefined) {
        computed = this.$$user_visibility;
    } else if (this.$$useinit_visibility) {
        computed = this.$$init_visibility;
    } else {
        computed = this.$$init_visibility;
        this.$$useinit_visibility = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyVisibility(computed, old, "visibility", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeVisibility')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeVisibility', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeVisibilityAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeVisibilityAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
        });
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}
qx.ui.ba titlesic.Label[20411 - 0] qx.ui.ba _imgTitleUpgradeIconsic.Image[20413 - 0] qx.ui.co clientAreantainer.Composite[20416 - 0]