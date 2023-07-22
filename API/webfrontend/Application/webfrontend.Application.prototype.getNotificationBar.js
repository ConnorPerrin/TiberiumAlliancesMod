function reload() {
    this.__brY = {};
    this.__bsa = {};
    this.__bsb = {};
    this.__bsc = {};
    this.__bsd = {};
    this.__bse = {};
    this.__bsf = 0;
    this.__brX.removeAll();
    webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Notifications(), u, ClientLib.Data.NotificationsAddedFromOffline, this, this._onNotificationsAddedFromOffline);
    ClientLib.Data.MainData.GetInstance().get_Notifications().ReRequestSideBarNotifications()
}

function _onNotificationsAddedFromOffline(n) {
    for (var t = n.length - 1; t >= 0; t--) this.__bsi(n[t]);
    webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Notifications(), u, ClientLib.Data.NotificationsAddedFromOffline, this, this._onNotificationsAddedFromOffline)
}

function _onNotificationAdded(n) {
    this.__bsi(n);
    webfrontend.data.AllianceEvents.getInstance().getId() > 0 && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.Notifications);
    (n.get_MdbId() == ClientLib.Data.ENotificationId.EndgameAllianceGuardianBaseDestroyed || n.get_MdbId() == ClientLib.Data.ENotificationId.EndgameAllianceTerminalOccupied) && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.ShieldHubs)
}

function _onNotificationUpdated(n, t) {
    this.__bsi(t)
}

function _onNotificationRemoved(n) {
    var t = n.get_Id(),
        i = n.get_IdOnlineOnly();
    t > 0 && this.__brY[t] != null ? (this.__bsj(this.__brY[t], n), this.__bsf--, this.__brY[t] = null) : t == 0 && this.__bsa[i] != null && (this.__bsj(this.__bsa[i], n), this.__bsf--, this.__bsa[i] = null)
}

function _onNotificationUnreadCommentCountUpdated(n) {
    var i = n.get_Id(),
        u = n.get_IdOnlineOnly();
    i > 0 && this.__bsb[i] != null ? (n.get_NumUnreadComments() > 0 ? this.__bsb[i].setFont(r) : this.__bsb[i].setFont(t), this.__bsb[i].setValue(n.get_NumComments().toString())) : i == 0 && this.__bsc[u] != null && (n.get_NumUnreadComments() > 0 ? this.__bsc[u].setFont(r) : this.__bsc[u].setFont(t), this.__bsc[u].setValue(n.get_NumComments().toString()))
}

function _onNotificationHotnessUpdated(t) {
    var r = t.get_Id(),
        u = t.get_IdOnlineOnly();
    r > 0 && this.__bsd[r] != null ? this.__bsd[r].setVisibility(t.get_IsHot() ? n : i) : r == 0 && this.__bse[u] != null && this.__bse[u].setVisibility(t.get_IsHot() ? n : i)
}

function _onClick() {
    var n = this.notification.OpenPopup();
    n > 0
}

function _onMouseOverNotification(n) {
    n.stopPropagation();
    n.getCurrentTarget().setInnerDecorator(webfrontend.gui.bars.NotificationBar.deco.messageitem_mouseover)
}

function _onMouseOutNotification(n) {
    n.stopPropagation();
    n.getCurrentTarget().setInnerDecorator(webfrontend.gui.bars.NotificationBar.deco.messageitem_mouseout)
}