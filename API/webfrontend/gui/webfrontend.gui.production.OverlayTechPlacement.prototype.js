function setTitle(n) {
    this.title.setValue(n)
}

function onClose() {
    var n = qx.core.Init.getApplication();
    n.getCurrentBottomOverlay() == this && n.switchBottomOverlay(null)
}

function activateOverlay(u) {
    this.__vR = u;
    var f = ClientLib.Data.MainData.GetInstance().get_Cities(),
        e = ClientLib.Vis.VisMain.GetInstance();
    u ? (webfrontend.phe.cnc.Util.attachNetEvent(f, t, ClientLib.Data.CurrentCityChange, this, this._onCurrentCityChange), this._onCurrentCityChange(0, f.get_CurrentCityId()), webfrontend.phe.cnc.Util.attachNetEvent(e, r, ClientLib.Vis.MouseToolChange, this, this.cancelAction), webfrontend.phe.cnc.base.Timer.getInstance().addListener(i, this.__bae, this)) : (webfrontend.phe.cnc.base.Timer.getInstance().removeListener(i, this.__bae, this), this.__bpD && webfrontend.phe.cnc.Util.detachNetEvent(this.__bpD, n, ClientLib.Data.CitiesChange, this, this._onCityChange), webfrontend.phe.cnc.Util.detachNetEvent(f, t, ClientLib.Data.CurrentCityChange, this, this._onCurrentCityChange), this.__bpD = null, webfrontend.phe.cnc.Util.detachNetEvent(e, r, ClientLib.Vis.MouseToolChange, this, this.cancelAction))
}

function cancelAction() {
    this.__bCU.getLastSelectedBox() != null && this.__bCU.getLastSelectedBox().resetPlateImage();
    this.__bCU.setLastSelectedBox(null)
}

function getScrollBar() {
    return this.__bCU
}

function activateOverlay(u) {
    this.__vR = u;
    var f = ClientLib.Data.MainData.GetInstance().get_Cities(),
        e = ClientLib.Vis.VisMain.GetInstance();
    u ? (webfrontend.phe.cnc.Util.attachNetEvent(f, t, ClientLib.Data.CurrentCityChange, this, this._onCurrentCityChange), this._onCurrentCityChange(0, f.get_CurrentCityId()), webfrontend.phe.cnc.Util.attachNetEvent(e, r, ClientLib.Vis.MouseToolChange, this, this.cancelAction), webfrontend.phe.cnc.base.Timer.getInstance().addListener(i, this.__bae, this)) : (webfrontend.phe.cnc.base.Timer.getInstance().removeListener(i, this.__bae, this), this.__bpD && webfrontend.phe.cnc.Util.detachNetEvent(this.__bpD, n, ClientLib.Data.CitiesChange, this, this._onCityChange), webfrontend.phe.cnc.Util.detachNetEvent(f, t, ClientLib.Data.CurrentCityChange, this, this._onCurrentCityChange), this.__bpD = null, webfrontend.phe.cnc.Util.detachNetEvent(e, r, ClientLib.Vis.MouseToolChange, this, this.cancelAction))
}

function cancelAction() {
    this.__bCU.getLastSelectedBox() != null && this.__bCU.getLastSelectedBox().resetPlateImage();
    this.__bCU.setLastSelectedBox(null)
}

function _onCurrentCityChange(t, i) {
    var r = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(t);
    r !== null && webfrontend.phe.cnc.Util.detachNetEvent(r, n, ClientLib.Data.CityChange, this, this._onCityChange);
    r = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(i);
    this.__bpD = r;
    r !== null && (webfrontend.phe.cnc.Util.attachNetEvent(r, n, ClientLib.Data.CityChange, this, this._onCityChange), this._onCityChange())
}

function _onCityChange() {
    this.__vR && this._onUpdateTechInfo()
}

function _onUpdateTechInfo() {
    var r, i, n, t;
    if (this.__bpD) {
        for (r = this.__bpD.get_TechPlaceableInfo().d, i = 0; i < this.__bCT.length; i++) n = this.__bCT[i], n.canBuild = !1, n.isEnabled = !1, t = null, r.hasOwnProperty(n.techType) && (t = r[n.techType], n.canBuild = t.CanBuild, n.slotCount = t.SlotCount, n.ownModifiers = t.OwnProduction, n.reqTechIndexes = t.ReqTechIndexes, n.errorCode = t.ErrorCode);
        this.__bCU._updateSlots(this.__bCT)
    }
}

function getUIItem(n) {
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_HARVESTER:
        case ClientLib.Data.Missions.PATH.WDG_SILO:
            return this.__bCU.getUIItem(n)
    }
    return null
}