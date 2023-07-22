function setTitle(n) {
    this.title.setValue(n)
}

function onClose() {
    webfrontend.gui.BottomOverlay.prototype.onClose.call(this);
    var n = qx.core.Init.getApplication(),
        t = ClientLib.Data.MainData.GetInstance().get_Cities();
    n.getPlayArea().setView(ClientLib.Vis.Mode.City, t.get_CurrentOwnCityId(), -1, -1)
}

function activateOverlay(n, t) {
    var u, f, r, i;
    this.__vR = n;
    u = ClientLib.Data.MainData.GetInstance().get_Cities();
    n ? (this.__bDF = t, f = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(), r = f.GetRecruitableUnitsByPlacementType(this.__bDF), this.__bDF == ClientLib.Base.EPlacementType.Defense ? (r && this.__bCU.setOffset(r.l, this.__bDD), this.__bDu.exclude(), this.__bDt.exclude(), this.__bDy.exclude(), this.__bDx.exclude(), this.__bDC.exclude(), this.__bDB.exclude(), this.clientArea.set({
        decorator: ut
    }), i = ClientLib.Vis.VisMain.GetInstance(), webfrontend.phe.cnc.Util.attachNetEvent(i.GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.CreateUnit), b, ClientLib.Vis.MouseTool.PlaceUnit, this, this.__bDK)) : (this.__bDq.exclude(), this.__bDp.exclude(), r && this.__bCU.setOffset(r.l, this.__bDE), this.clientArea.set({
        decorator: p
    }), i = ClientLib.Vis.VisMain.GetInstance(), webfrontend.phe.cnc.Util.attachNetEvent(i.GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.CreateOffenseUnit), y, ClientLib.Vis.MouseTool.PlaceArmyUnit, this, this.__bDK)), webfrontend.phe.cnc.base.Timer.getInstance().addListener(w, this.__bae, this), webfrontend.phe.cnc.Util.attachNetEvent(u, a, ClientLib.Data.CurrentCityChange, this, this._onCurrentCityChange), this._onCurrentCityChange(0, u.get_CurrentOwnCityId())) : (this.cancelAction(), this.__bpD && webfrontend.phe.cnc.Util.detachNetEvent(this.__bpD, l, ClientLib.Data.CitiesChange, this, this._onCityChange), this.__bDF == ClientLib.Base.EPlacementType.Defense ? (this.__bDD = this.__bCU.getOffset(), i = ClientLib.Vis.VisMain.GetInstance(), i.SetMouseTool(), webfrontend.phe.cnc.Util.detachNetEvent(i.GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.CreateUnit), b, ClientLib.Vis.MouseTool.PlaceUnit, this, this.__bDK)) : this.__bDF == ClientLib.Base.EPlacementType.Offense && (this.__bDE = this.__bCU.getOffset(), i = ClientLib.Vis.VisMain.GetInstance(), i.SetMouseTool(), webfrontend.phe.cnc.Util.detachNetEvent(i.GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.CreateOffenseUnit), y, ClientLib.Vis.MouseTool.PlaceArmyUnit, this, this.__bDK)), webfrontend.phe.cnc.base.Timer.getInstance().removeListener(w, this.__bae, this), webfrontend.phe.cnc.Util.detachNetEvent(u, a, ClientLib.Data.CurrentCityChange, this, this._onCurrentCityChange), this.__bpD = null)
}

function cancelAction() {
    this.__bCU.getLastSelectedBox() != null && this.__bCU.getLastSelectedBox().resetPlateImage;
    this.__bCU.setLastSelectedBox(null)
}

function getPlacementType() {
    return this.__bDF
}

function activateOverlay(n, t) {
    var u, f, r, i;
    this.__vR = n;
    u = ClientLib.Data.MainData.GetInstance().get_Cities();
    n ? (this.__bDF = t, f = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(), r = f.GetRecruitableUnitsByPlacementType(this.__bDF), this.__bDF == ClientLib.Base.EPlacementType.Defense ? (r && this.__bCU.setOffset(r.l, this.__bDD), this.__bDu.exclude(), this.__bDt.exclude(), this.__bDy.exclude(), this.__bDx.exclude(), this.__bDC.exclude(), this.__bDB.exclude(), this.clientArea.set({
        decorator: ut
    }), i = ClientLib.Vis.VisMain.GetInstance(), webfrontend.phe.cnc.Util.attachNetEvent(i.GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.CreateUnit), b, ClientLib.Vis.MouseTool.PlaceUnit, this, this.__bDK)) : (this.__bDq.exclude(), this.__bDp.exclude(), r && this.__bCU.setOffset(r.l, this.__bDE), this.clientArea.set({
        decorator: p
    }), i = ClientLib.Vis.VisMain.GetInstance(), webfrontend.phe.cnc.Util.attachNetEvent(i.GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.CreateOffenseUnit), y, ClientLib.Vis.MouseTool.PlaceArmyUnit, this, this.__bDK)), webfrontend.phe.cnc.base.Timer.getInstance().addListener(w, this.__bae, this), webfrontend.phe.cnc.Util.attachNetEvent(u, a, ClientLib.Data.CurrentCityChange, this, this._onCurrentCityChange), this._onCurrentCityChange(0, u.get_CurrentOwnCityId())) : (this.cancelAction(), this.__bpD && webfrontend.phe.cnc.Util.detachNetEvent(this.__bpD, l, ClientLib.Data.CitiesChange, this, this._onCityChange), this.__bDF == ClientLib.Base.EPlacementType.Defense ? (this.__bDD = this.__bCU.getOffset(), i = ClientLib.Vis.VisMain.GetInstance(), i.SetMouseTool(), webfrontend.phe.cnc.Util.detachNetEvent(i.GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.CreateUnit), b, ClientLib.Vis.MouseTool.PlaceUnit, this, this.__bDK)) : this.__bDF == ClientLib.Base.EPlacementType.Offense && (this.__bDE = this.__bCU.getOffset(), i = ClientLib.Vis.VisMain.GetInstance(), i.SetMouseTool(), webfrontend.phe.cnc.Util.detachNetEvent(i.GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.CreateOffenseUnit), y, ClientLib.Vis.MouseTool.PlaceArmyUnit, this, this.__bDK)), webfrontend.phe.cnc.base.Timer.getInstance().removeListener(w, this.__bae, this), webfrontend.phe.cnc.Util.detachNetEvent(u, a, ClientLib.Data.CurrentCityChange, this, this._onCurrentCityChange), this.__bpD = null)
}

function cancelAction() {
    this.__bCU.getLastSelectedBox() != null && this.__bCU.getLastSelectedBox().resetPlateImage;
    this.__bCU.setLastSelectedBox(null)
}

function _onCurrentCityChange(n, t) {
    var i = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(n);
    i != null && webfrontend.phe.cnc.Util.detachNetEvent(i, l, ClientLib.Data.CityChange, this, this._onCityChange);
    i = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(t);
    this.__bpD = i;
    i != null && (webfrontend.phe.cnc.Util.attachNetEvent(i, l, ClientLib.Data.CityChange, this, this._onCityChange), this._onCityChange())
}

function _onCityChange() {
    this.__vR && this.__bDH()
}

function onClose() {
    webfrontend.gui.BottomOverlay.prototype.onClose.call(this);
    var n = qx.core.Init.getApplication(),
        t = ClientLib.Data.MainData.GetInstance().get_Cities();
    n.getPlayArea().setView(ClientLib.Vis.Mode.City, t.get_CurrentOwnCityId(), -1, -1)
}

function getUIItem(n) {
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_RIFLEMAN:
        case ClientLib.Data.Missions.PATH.WDG_GUARDIANOFFENSE:
        case ClientLib.Data.Missions.PATH.WDG_WALL:
        case ClientLib.Data.Missions.PATH.WDG_MGNEST:
        case ClientLib.Data.Missions.PATH.WDG_MILITANT:
            return this.__bCU.getUIItem(n)
    }
    return null
}