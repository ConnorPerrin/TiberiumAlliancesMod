function getIsActive anonymous() {
    this.getIsActive.$$install && this.getIsActive.$$install();
    return this.getIsActive.apply(this, arguments);
}

function setIsActive anonymous() {
    this.setIsActive.$$install && this.setIsActive.$$install.call(this);
    return this.setIsActive.apply(this, arguments);
}

function resetIsActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIsActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIsActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIsActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleIsActive anonymous() {
    return this.setIsActive(!this.getIsActive())
}

function isIsActive anonymous() {
    return this.getIsActive()
}

function getCurrentTab anonymous() {
    this.getCurrentTab.$$install && this.getCurrentTab.$$install();
    return this.getCurrentTab.apply(this, arguments);
}

function setCurrentTab anonymous() {
    this.setCurrentTab.$$install && this.setCurrentTab.$$install.call(this);
    return this.setCurrentTab.apply(this, arguments);
}

function resetCurrentTab() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCurrentTab() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCurrentTab() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCurrentTab() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setTab(n) {
    switch (n) {
        case webfrontend.gui.reports.ReportsOverlay.tabs.ETabOffensePage:
            this.__Yv.setSelection([this.__Yw]);
            break;
        case webfrontend.gui.reports.ReportsOverlay.tabs.ETabDefensePage:
            this.__Yv.setSelection([this.__Yx]);
            break;
        case webfrontend.gui.reports.ReportsOverlay.tabs.ETabNPCPage:
            this.__Yv.setSelection([this.__Yy]);
            break;
        case webfrontend.gui.reports.ReportsOverlay.tabs.ETabOtherPage:
            this.__Yv.setSelection([this.__Yz])
    }
}

function getTab(n) {
    var t = null;
    switch (n) {
        case webfrontend.gui.reports.ReportsOverlay.tabs.ETabOffensePage:
            t = this.__Yw;
            break;
        case webfrontend.gui.reports.ReportsOverlay.tabs.ETabDefensePage:
            t = this.__Yx;
            break;
        case webfrontend.gui.reports.ReportsOverlay.tabs.ETabNPCPage:
            t = this.__Yy;
            break;
        case webfrontend.gui.reports.ReportsOverlay.tabs.ETabOtherPage:
            t = this.__Yz
    }
    return t
}

function getCurrentTabCategory() {
    switch (this.getCurrentTab()) {
        case this.__Yw:
            return webfrontend.gui.reports.ReportsOverlay.tabs.ETabOffensePage;
        case this.__Yx:
            return webfrontend.gui.reports.ReportsOverlay.tabs.ETabDefensePage;
        case this.__Yy:
            return webfrontend.gui.reports.ReportsOverlay.tabs.ETabNPCPage;
        case this.__Yz:
            return webfrontend.gui.reports.ReportsOverlay.tabs.ETabOtherPage
    }
    return -1
}

function close() {
    this.__Yw._reportsDataModel.clearCache();
    this.__Yx._reportsDataModel.clearCache();
    this.__Yy._reportsDataModel.clearCache();
    this.__Yz._reportsDataModel.clearCache();
    webfrontend.gui.MenuOverlayWidget.prototype.close.call(this)
}

function _activate() {
    this.__Aq();
    webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Reports(), e, ClientLib.Data.Reports.TotalUnreadCountUpdated, this, this.__Aq);
    this.setIsActive(!0)
}

function _deactivate() {
    webfrontend.gui.PreloadObserverGui.getInstance().setLoading(this._clientArea, !1);
    webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Reports(), e, ClientLib.Data.Reports.TotalUnreadCountUpdated, this, this.__Aq);
    this.setIsActive(!1)
}

function _onChangeSelection() {
    this.setCurrentTab(this.__Yv.getSelection()[0])
}

function getUIItem(n) {
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_TABDEFREPORTS:
            return this.__Yx.getChildControl(h)
    }
    return null
}
qx.ui.co _bgrScalerntainer.Composite[9643 - 0] qx.ui.co _clientAreantainer.Composite[9645 - 0] webfront _closeButtonend.ui.SoundButton[9646 - 0] qx.ui.ba _headerImagesic.Image[9644 - 0] qx.ui.ba _titlesic.Label[9648 - 0]