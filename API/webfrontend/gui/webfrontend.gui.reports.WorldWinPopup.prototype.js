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

function _setReportData() {}

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
    this.exclude()
}

function setData(n, t, i) {
    this.__yW.setValue(t);
    this.__GI.setValue(ClientLib.Data.MainData.GetInstance().get_Server().get_Name());
    this.__GA.setValue(this.tr(h, t));
    this.__GJ.setValue(i);
    webfrontend.data.InfoTracker.getInstance().checkTrigger_WorldWin()
}