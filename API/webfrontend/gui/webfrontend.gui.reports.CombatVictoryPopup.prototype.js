function show() {
    qx.core.Init.getApplication().getPlayArea().setActivePopup(null);
    this.resize();
    qx.ui.container.Composite.prototype.show.call(this);
    this.setZIndex(100)
}

function resize() {
    var t = qx.core.Init.getApplication(),
        n = t.getMainOverlay();
    this._imgBackground.setWidth(n.getWidth() - 6);
    this._imgBackground.setHeight(n.getHeight() - 6)
}

function _setReportData(n) {
    var t = n.get_PlayerReportType() == ClientLib.Data.Reports.EPlayerReportType.CombatOffense;
    this._reportData = n;
    this.__CC = n.get_Id();
    this.__bCO(n.get_CombatResult(), t);
    this.__Ev(n);
    webfrontend.gui.reports.ReportsUtil.checkShowPvpGhosttedTargetHint(n);
    this._reportData != null && this.__CC > 0 && ClientLib.Data.MainData.GetInstance().get_Reports().MarkReportsAsRead([this.__CC], this._reportData.get_PlayerReportType(), !1)
}

function _getFactionIcon(n) {
    switch (n) {
        case ClientLib.Base.EFactionType.GDIFaction:
            return i;
        case ClientLib.Base.EFactionType.NODFaction:
            return o;
        case ClientLib.Base.EFactionType.FORFaction:
            return h
    }
    return t
}

function _onBtnClose() {
    this.__bCS()
}

function setLiveCombatData(n) {
    qx.core.Init.getApplication().showArmySetupAttack(!1);
    this._setReportData(n);
    var i = n.get_PlayerReportType() == ClientLib.Data.Reports.EPlayerReportType.CombatOffense,
        t = 0;
    switch (n.get_CombatResult()) {
        case ClientLib.Data.Reports.ECombatResult.CityDestroyed:
        case ClientLib.Data.Reports.ECombatResult.CommandPostDestroyed:
        case ClientLib.Data.Reports.ECombatResult.DefenseDestroyed:
        case ClientLib.Data.Reports.ECombatResult.BaseBreakthrough:
        case ClientLib.Data.Reports.ECombatResult.AttackerMoreRP:
            t = i ? 1 : -1;
            break;
        case ClientLib.Data.Reports.ECombatResult.OffenseDestroyed:
        case ClientLib.Data.Reports.ECombatResult.DefenderMoreRP:
            t = i ? -1 : 1
    }
    t > 0 ? ClientLib.Vis.VisMain.GetInstance().PlayVoiceSound(cu) : ClientLib.Vis.VisMain.GetInstance().PlayVoiceSound(hr)
}

function _setReportData(n) {
    var t = n.get_PlayerReportType() == ClientLib.Data.Reports.EPlayerReportType.CombatOffense;
    this._reportData = n;
    this.__CC = n.get_Id();
    this.__bCO(n.get_CombatResult(), t);
    this.__Ev(n);
    webfrontend.gui.reports.ReportsUtil.checkShowPvpGhosttedTargetHint(n);
    this._reportData != null && this.__CC > 0 && ClientLib.Data.MainData.GetInstance().get_Reports().MarkReportsAsRead([this.__CC], this._reportData.get_PlayerReportType(), !1)
}

function _onBtnClose() {
    this.__bCS()
}

function getUIItem(n) {
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_GOTOBASE:
            return this.__bCs
    }
    return null
}