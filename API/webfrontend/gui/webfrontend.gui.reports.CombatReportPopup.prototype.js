function _requestData(n) {
    n ? (webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Reports(), t, ClientLib.Data.Reports.ReportDelivered, this, this.__CF), ClientLib.Data.MainData.GetInstance().get_Reports().RequestReportData(this.__CC)) : (this.__Al.show(), this.__CE.exclude())
}

function _deferredAppear() {
    var n, t, i;
    webfrontend.gui.CustomWindow.prototype._deferredAppear.call(this);
    webfrontend.gui.reports.ReportPopup.windowXPosStart < 0 || webfrontend.gui.reports.ReportPopup.windowYPosStart < 0 || webfrontend.gui.reports.ReportPopup.numWindowsOpen <= 0 ? (n = this.centerPosition(), this.moveTo(n.x, webfrontend.gui.reports.ReportPopup.windowYPosStart), webfrontend.gui.reports.ReportPopup.windowXPosStart = n.x) : (t = qx.bom.Viewport.getWidth(window), i = qx.bom.Viewport.getHeight(window), webfrontend.gui.reports.ReportPopup.windowXPosStart += 20, webfrontend.gui.reports.ReportPopup.windowYPosStart += 20, (webfrontend.gui.reports.ReportPopup.windowXPosStart + this.getWidth() > t || webfrontend.gui.reports.ReportPopup.windowYPosStart + this.getHeight() > i) && (webfrontend.gui.reports.ReportPopup.windowXPosStart = 0, webfrontend.gui.reports.ReportPopup.windowYPosStart = webfrontend.gui.reports.ReportPopup.windowYPosOriginalStart), this.moveTo(webfrontend.gui.reports.ReportPopup.windowXPosStart, webfrontend.gui.reports.ReportPopup.windowYPosStart));
    webfrontend.gui.reports.ReportPopup.numWindowsOpen++;
    this._updateOnAppear()
}

function _onClose() {
    webfrontend.gui.CustomWindow.prototype._onClose.call(this);
    webfrontend.gui.reports.ReportPopup.numWindowsOpen--;
    this._updateOnDisappear()
}

function _updateOnAppear() {
    this._reportData !== null && (this.__Et = ClientLib.Data.MainData.GetInstance().get_Notifications().GetNotificationById(this._reportData.get_NotificationId()), this.__Et !== null && this.__Et.get_NumComments() ? (this.__Eq.setLabel(this.tr(y) + w + this.__Et.get_NumComments() + p), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Notifications(), v, ClientLib.Data.NotificationUpdated, this, this.__EB)) : this.__Et === null && webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Notifications(), it, ClientLib.Data.ReportNotificationLoaded, this, this.__EC))
}

function _updateOnDisappear() {
    this.__Et !== null && webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Notifications(), v, ClientLib.Data.NotificationUpdated, this, this.__EB)
}

function _setReportData(n) {
    var t, i;
    this.__CL.setValue(webfrontend.phe.cnc.Util.getDateTimeString(new Date(n.get_Time()), !1, !0));
    t = n.get_PlayerReportType() == ClientLib.Data.Reports.EPlayerReportType.CombatOffense;
    t ? (this.__Dm.setValue(this.tr(tu)), this.__Ek.setValue(this.tr(hr))) : (this.__Dm.setValue(this.tr(we)), this.__Ek.setValue(this.tr(bi)));
    switch (n.get_Type()) {
        case ClientLib.Data.Reports.EReportType.NPCRaid:
            this.setCaption(this.tr(oo));
            break;
        default:
            this.setCaption(this.tr(vu))
    }
    this.__Eu(n.get_CombatResult(), t);
    this.__Ev(n, t);
    this.__Ew(n, !t);
    this._reportData != null && (this.__Et = ClientLib.Data.MainData.GetInstance().get_Notifications().GetNotificationById(this._reportData.get_NotificationId()));
    this.__Et != null ? (webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Notifications(), v, ClientLib.Data.NotificationUpdated, this, this.__EB), i = this.__Et.get_NumComments(), i > 0 ? this.__Eq.setLabel(this.tr(y) + w + i + p) : this.__Eq.setLabel(this.tr(ti)), this.__Eq.show()) : (this.__Eq.exclude(), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Notifications(), it, ClientLib.Data.ReportNotificationLoaded, this, this.__EC));
    this.__Er.setEnabled(this.__CH && n.get_ValidReplayData());
    this.__Er.setToolTipText(n.get_ValidReplayData() ? ut : this.tr(wo));
    webfrontend.gui.reports.ReportsUtil.checkShowPvpGhosttedTargetHint(n)
}

function setLiveCombatData(n) {
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
    t > 0 ? ClientLib.Vis.VisMain.GetInstance().PlayVoiceSound(ce) : ClientLib.Vis.VisMain.GetInstance().PlayVoiceSound(uf)
}

function _updateOnAppear() {
    this._reportData !== null && (this.__Et = ClientLib.Data.MainData.GetInstance().get_Notifications().GetNotificationById(this._reportData.get_NotificationId()), this.__Et !== null && this.__Et.get_NumComments() ? (this.__Eq.setLabel(this.tr(y) + w + this.__Et.get_NumComments() + p), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Notifications(), v, ClientLib.Data.NotificationUpdated, this, this.__EB)) : this.__Et === null && webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Notifications(), it, ClientLib.Data.ReportNotificationLoaded, this, this.__EC))
}

function _updateOnDisappear() {
    this.__Et !== null && webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Notifications(), v, ClientLib.Data.NotificationUpdated, this, this.__EB)
}

function _setReportData(n) {
    var t, i;
    this.__CL.setValue(webfrontend.phe.cnc.Util.getDateTimeString(new Date(n.get_Time()), !1, !0));
    t = n.get_PlayerReportType() == ClientLib.Data.Reports.EPlayerReportType.CombatOffense;
    t ? (this.__Dm.setValue(this.tr(tu)), this.__Ek.setValue(this.tr(hr))) : (this.__Dm.setValue(this.tr(we)), this.__Ek.setValue(this.tr(bi)));
    switch (n.get_Type()) {
        case ClientLib.Data.Reports.EReportType.NPCRaid:
            this.setCaption(this.tr(oo));
            break;
        default:
            this.setCaption(this.tr(vu))
    }
    this.__Eu(n.get_CombatResult(), t);
    this.__Ev(n, t);
    this.__Ew(n, !t);
    this._reportData != null && (this.__Et = ClientLib.Data.MainData.GetInstance().get_Notifications().GetNotificationById(this._reportData.get_NotificationId()));
    this.__Et != null ? (webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Notifications(), v, ClientLib.Data.NotificationUpdated, this, this.__EB), i = this.__Et.get_NumComments(), i > 0 ? this.__Eq.setLabel(this.tr(y) + w + i + p) : this.__Eq.setLabel(this.tr(ti)), this.__Eq.show()) : (this.__Eq.exclude(), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Notifications(), it, ClientLib.Data.ReportNotificationLoaded, this, this.__EC));
    this.__Er.setEnabled(this.__CH && n.get_ValidReplayData());
    this.__Er.setToolTipText(n.get_ValidReplayData() ? ut : this.tr(wo));
    webfrontend.gui.reports.ReportsUtil.checkShowPvpGhosttedTargetHint(n)
}