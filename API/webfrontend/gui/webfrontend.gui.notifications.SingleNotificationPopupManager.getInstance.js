function openPopup(i) {
    var r;
    switch (i.get_MdbId()) {
        default:
            i.get_Reason() != ClientLib.Data.ENotificationReason.NotificationExpired && (i.get_Id() > 0 ? (r = i.get_Id(), this.__CB[r] == null && (this.__CB[r] = new webfrontend.gui.notifications.SingleNotificationPopup(i), this.__CB[r].addListener(t, this.__FV, this)), this.__CB[r] == null || this.__CB[r]._isActive() ? this.__CB[r].bringToFront() : (this.__CB[r].show(), webfrontend.gui.notifications.SingleNotificationPopupManager.numWindowsOpen++, ClientLib.Vis.VisMain.GetInstance().PlayUISound(n))) : (r = i.get_IdOnlineOnly(), this.__FU[r] == null && (this.__FU[r] = new webfrontend.gui.notifications.SingleNotificationPopup(i)), this.__FU[r] == null || this.__FU[r]._isActive() ? this.__FU[r].bringToFront() : (this.__FU[r].show(), webfrontend.gui.notifications.SingleNotificationPopupManager.numWindowsOpen++, ClientLib.Vis.VisMain.GetInstance().PlayUISound(n))))
    }
}