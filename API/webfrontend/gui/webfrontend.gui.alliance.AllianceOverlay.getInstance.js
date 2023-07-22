function setTab(n) {
    switch (n) {
        case webfrontend.gui.alliance.AllianceOverlay.tabs.ETabEnterAlliancePage:
            this.__Ne.setSelection([this.__NU]);
            break;
        case webfrontend.gui.alliance.AllianceOverlay.tabs.ETabOverviewPage:
            this.__Ne.setSelection([this.__NV]);
            break;
        case webfrontend.gui.alliance.AllianceOverlay.tabs.ETabRosterPage:
            this.__Ne.setSelection([this.__NW]);
            break;
        case webfrontend.gui.alliance.AllianceOverlay.tabs.ETabDiplomacyPage:
            this.__Ne.setSelection([this.__NX]);
            break;
        case webfrontend.gui.alliance.AllianceOverlay.tabs.ETabMyInvitationsPage:
            this.__Ne.setSelection([this.__NY]);
            break;
        case webfrontend.gui.alliance.AllianceOverlay.tabs.ETabPOI:
            this.__Ne.setSelection([this.__Oa]);
            break;
        case webfrontend.gui.alliance.AllianceOverlay.tabs.EShieldHub:
            this.__Ne.setSelection([this.__Ob])
    }
}

function getTab(n) {
    var t = null;
    switch (n) {
        case webfrontend.gui.alliance.AllianceOverlay.tabs.ETabEnterAlliancePage:
            t = this.__NU;
            break;
        case webfrontend.gui.alliance.AllianceOverlay.tabs.ETabOverviewPage:
            t = this.__NV;
            break;
        case webfrontend.gui.alliance.AllianceOverlay.tabs.ETabRosterPage:
            t = this.__NW;
            break;
        case webfrontend.gui.alliance.AllianceOverlay.tabs.ETabDiplomacyPage:
            t = this.__NX;
            break;
        case webfrontend.gui.alliance.AllianceOverlay.tabs.ETabMyInvitationsPage:
            t = this.__NY;
            break;
        case webfrontend.gui.alliance.AllianceOverlay.tabs.ETabPOI:
            t = this.__Oa;
            break;
        case webfrontend.gui.alliance.AllianceOverlay.tabs.EShieldHub:
            t = this.__Ob
    }
    return t
}

function getCurrentTab() {
    return this.__Oc
}

function openInvitationsPage() {
    this.open();
    ClientLib.Data.MainData.GetInstance().get_Alliance().get_Exists() && ClientLib.Data.MainData.GetInstance().get_Player().get_AllianceId() > 0 && this.setTab(webfrontend.gui.alliance.AllianceOverlay.tabs.ETabMyInvitationsPage)
}

function openOverviewPage(n) {
    this.open();
    ClientLib.Data.MainData.GetInstance().get_Alliance().get_Exists() && ClientLib.Data.MainData.GetInstance().get_Player().get_AllianceId() > 0 && (this.setTab(webfrontend.gui.alliance.AllianceOverlay.tabs.ETabOverviewPage), n != null && this.__NV.setView(n))
}

function _activate() {
    this.__Od();
    this.__Oe();
    this.__Of();
    ClientLib.Data.MainData.GetInstance().get_Player().RefreshMyInvitations();
    webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), n, ClientLib.Data.AllianceChange, this, this._onAllianceDetailChanged);
    webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Player(), t, ClientLib.Data.PlayerChange, this, this._onInvitationsChanged);
    this.__Oc && this.__Oc.triggerAppear && this.__Oc.triggerAppear()
}

function _deactivate() {
    var r, i;
    for (webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), n, ClientLib.Data.AllianceChange, this, this._onAllianceDetailChanged), webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Player(), t, ClientLib.Data.PlayerChange, this, this._onInvitationsChanged), r = this.__Ne.getSelection(), i = 0; i < r.length; i++) r[i].deactivate();
    this.__Oc && this.__Oc._onDisappearFake && this.__Oc._onDisappearFake()
}

function _onAllianceDetailChanged() {
    this.__Od();
    this.__Of();
    this.__Oa.update();
    this.__Ob != null && this.__Ob.update()
}

function _onInvitationsChanged() {
    this.__Oe()
}

function _onChangeSelection() {
    this.__Oc && this.__Oc._onDisappearFake && this.__Oc._onDisappearFake();
    this.__Oc = this.__Ne.getSelection()[0];
    this.__Oc && this.__Oc.triggerAppear && this.__Oc.triggerAppear()
}

function getUIItem(n) {
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_TABOVERVIEW:
            return this.__NV.getChildControl(o);
        case ClientLib.Data.Missions.PATH.WDG_EDITDESC:
            return this.__NV.getUIItem(n)
    }
    return null
}
qx.ui.co _bgrScalerntainer.Composite[9943 - 0] qx.ui.co _clientAreantainer.Composite[9945 - 0] webfront _closeButtonend.ui.SoundButton[9946 - 0] qx.ui.ba _headerImagesic.Image[9944 - 0] qx.ui.ba _titlesic.Label[9948 - 0]