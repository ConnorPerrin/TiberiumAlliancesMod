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

function _updateOnAppear() {}

function _updateOnDisappear() {}

function _setReportData(n) {
    this.__Gx.setValue(webfrontend.phe.cnc.Util.getDateTimeString(new Date(n.get_Time()), !0, !1, !0));
    this.__GG.setValue(this.tr(g, n.get_AllianceName()));
    this.__yU.setValue(this.tr(s, n.get_Rank()));
    this.__GA.setValue(this.tr(f, n.get_AllianceName()))
}

function _setReportData(n) {
    this.__Gx.setValue(webfrontend.phe.cnc.Util.getDateTimeString(new Date(n.get_Time()), !0, !1, !0));
    this.__GG.setValue(this.tr(g, n.get_AllianceName()));
    this.__yU.setValue(this.tr(s, n.get_Rank()));
    this.__GA.setValue(this.tr(f, n.get_AllianceName()))
}