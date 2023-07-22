function activate() {
    this.__bGz()
}

function deactivate() {}

function _saveSettings() {
    var i, r, t, n;
    if (this._changed) {
        for (i = Math.floor(parseInt(this.__bGc.getValue(), 10) * 60) + parseInt(this.__bGd.getValue(), 10), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_PRIORNOTICETIME, i), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_SHOWSELLMODEWARNING, this.__bGe.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_SHOWHOMEMARKER, this.__bGf.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_SHOWHINTS, this.__bGk.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_SHOW_MISSIONSBAR, this.__bGl.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_COMBATSHOWSETUP, this.__bGq.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_COMBATEXTENDEDSETUP, this.__bGr.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_QUICKBUYWARNINGTHRESHOLD, this.__bGh.getSelection()[0].getModel()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_REPORTSHARING, parseInt(this.__bGi.getValue() ? ClientLib.Config.Main.EReportSharingFlag.Combat : 0 + this.__bGj.getValue() ? ClientLib.Config.Main.EReportSharingFlag.Raid : 0), 10), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_CHATSHOWTIMESTAMP, this.__bGm.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_CHATSHOWCHANNELNAME, this.__bGn.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_PROFANITYFILTER, this.__bGo.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_SHOWGLOBALCHAT, this.__bGp.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_GHOST_BASE_WARNING_LESS_THAN_48, this.__bGs.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_GHOST_BASE_WARNING_48_TO_72, this.__bGt.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_GHOST_BASE_WARNING_MORE_THAN_72, this.__bGu.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_NOTIFICATIONSIDEBAR, this.__bGv.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_NOTIFICATIONRAID, this.__bGw.getValue()), this.__bGy !== null && ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_NOTIFICATIONNPCATTACKS, this.__bGy.getValue()), r = qx.core.Init.getApplication().getNotificationBar(), r.reload(), t = u, n = ClientLib.Config.Main.ENotificationCategory.Alliance; n < ClientLib.Config.Main.ENotificationCategory.Count; ++n) this.__bGx[n].getValue() || (t += ClientLib.Config.Main.GetNotificationCategoryChar(n));
        ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_NOTIFICATIONHIDECATEGORIES, t);
        ClientLib.Config.Main.GetInstance().SaveToDB()
    }
}

function _undoSettings() {
    var n = webfrontend.phe.cnc.config.Config.getInstance();
    n.revertToLastSavedOptions();
    this.__bGz()
}

function _setDefaultSettings() {
    var i = ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_PRIORNOTICETIME),
        f = i % 60,
        e = Math.floor(Math.max(0, i / 60)),
        u, t, n;
    for (this.__bGc.removeListener(r, this.__bGA, this), this.__bGd.removeListener(r, this.__bGA, this), this.__bGc.setMaximum(18), this.__bGd.setMaximum(59), this.__bGd.setMinimum(0), this.__bGc.setValue(e) + this.__bGd.setValue(f), this.__bGc.addListener(r, this.__bGA, this), this.__bGd.addListener(r, this.__bGA, this), u = parseInt(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_QUICKBUYWARNINGTHRESHOLD), 10), this.__bGe.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_SHOWSELLMODEWARNING)), this.__bGk.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_SHOWHINTS)), this.__bGl.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_SHOW_MISSIONSBAR)), this.__bGq.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_COMBATSHOWSETUP)), this.__bGr.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_COMBATEXTENDEDSETUP)), this.__bGh.setModelSelection([u]), this.__bGf.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_SHOWHOMEMARKER)), this.__bGi.setValue((webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_REPORTSHARING) & ClientLib.Config.Main.EReportSharingFlag.Combat) != 0), this.__bGj.setValue((webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_REPORTSHARING) & ClientLib.Config.Main.EReportSharingFlag.Raid) != 0), this.__bGm.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_CHATSHOWTIMESTAMP)), this.__bGn.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_CHATSHOWCHANNELNAME)), this.__bGo.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_PROFANITYFILTER)), this.__bGp.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_SHOWGLOBALCHAT)), this.__bGs.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_GHOST_BASE_WARNING_LESS_THAN_48)), this.__bGt.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_GHOST_BASE_WARNING_48_TO_72)), this.__bGu.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_GHOST_BASE_WARNING_MORE_THAN_72)), this.__bGv.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_NOTIFICATIONSIDEBAR))), this.__bGw.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_NOTIFICATIONRAID))), this.__bGy !== null && this.__bGy.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_NOTIFICATIONNPCATTACKS))), t = ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_NOTIFICATIONHIDECATEGORIES), n = ClientLib.Config.Main.ENotificationCategory.Alliance; n < ClientLib.Config.Main.ENotificationCategory.Count; ++n) this.__bGx[n].setValue(!t || t.indexOf(ClientLib.Config.Main.GetNotificationCategoryChar(n)) < 0);
    this.activateUpdateSaveButtons()
}

function deactivateUpdateSaveButtons() {
    this._undoSettings();
    this._changed = !1;
    this.__bFh.setEnabled(this._changed);
    this.__bFg.setEnabled(this._changed)
}

function activateUpdateSaveButtons() {
    this._changed = !0;
    this.__bFh.setEnabled(this._changed);
    this.__bFg.setEnabled(this._changed)
}

function activate() {
    this.__bGz()
}

function _saveSettings() {
    var i, r, t, n;
    if (this._changed) {
        for (i = Math.floor(parseInt(this.__bGc.getValue(), 10) * 60) + parseInt(this.__bGd.getValue(), 10), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_PRIORNOTICETIME, i), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_SHOWSELLMODEWARNING, this.__bGe.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_SHOWHOMEMARKER, this.__bGf.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_SHOWHINTS, this.__bGk.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_SHOW_MISSIONSBAR, this.__bGl.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_COMBATSHOWSETUP, this.__bGq.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_COMBATEXTENDEDSETUP, this.__bGr.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_QUICKBUYWARNINGTHRESHOLD, this.__bGh.getSelection()[0].getModel()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_REPORTSHARING, parseInt(this.__bGi.getValue() ? ClientLib.Config.Main.EReportSharingFlag.Combat : 0 + this.__bGj.getValue() ? ClientLib.Config.Main.EReportSharingFlag.Raid : 0), 10), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_CHATSHOWTIMESTAMP, this.__bGm.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_CHATSHOWCHANNELNAME, this.__bGn.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_PROFANITYFILTER, this.__bGo.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_SHOWGLOBALCHAT, this.__bGp.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_GHOST_BASE_WARNING_LESS_THAN_48, this.__bGs.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_GHOST_BASE_WARNING_48_TO_72, this.__bGt.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_GHOST_BASE_WARNING_MORE_THAN_72, this.__bGu.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_NOTIFICATIONSIDEBAR, this.__bGv.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_NOTIFICATIONRAID, this.__bGw.getValue()), this.__bGy !== null && ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_NOTIFICATIONNPCATTACKS, this.__bGy.getValue()), r = qx.core.Init.getApplication().getNotificationBar(), r.reload(), t = u, n = ClientLib.Config.Main.ENotificationCategory.Alliance; n < ClientLib.Config.Main.ENotificationCategory.Count; ++n) this.__bGx[n].getValue() || (t += ClientLib.Config.Main.GetNotificationCategoryChar(n));
        ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_NOTIFICATIONHIDECATEGORIES, t);
        ClientLib.Config.Main.GetInstance().SaveToDB()
    }
}

function _undoSettings() {
    var n = webfrontend.phe.cnc.config.Config.getInstance();
    n.revertToLastSavedOptions();
    this.__bGz()
}

function _setDefaultSettings() {
    var i = ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_PRIORNOTICETIME),
        f = i % 60,
        e = Math.floor(Math.max(0, i / 60)),
        u, t, n;
    for (this.__bGc.removeListener(r, this.__bGA, this), this.__bGd.removeListener(r, this.__bGA, this), this.__bGc.setMaximum(18), this.__bGd.setMaximum(59), this.__bGd.setMinimum(0), this.__bGc.setValue(e) + this.__bGd.setValue(f), this.__bGc.addListener(r, this.__bGA, this), this.__bGd.addListener(r, this.__bGA, this), u = parseInt(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_QUICKBUYWARNINGTHRESHOLD), 10), this.__bGe.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_SHOWSELLMODEWARNING)), this.__bGk.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_SHOWHINTS)), this.__bGl.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_SHOW_MISSIONSBAR)), this.__bGq.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_COMBATSHOWSETUP)), this.__bGr.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_COMBATEXTENDEDSETUP)), this.__bGh.setModelSelection([u]), this.__bGf.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_SHOWHOMEMARKER)), this.__bGi.setValue((webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_REPORTSHARING) & ClientLib.Config.Main.EReportSharingFlag.Combat) != 0), this.__bGj.setValue((webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_REPORTSHARING) & ClientLib.Config.Main.EReportSharingFlag.Raid) != 0), this.__bGm.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_CHATSHOWTIMESTAMP)), this.__bGn.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_CHATSHOWCHANNELNAME)), this.__bGo.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_PROFANITYFILTER)), this.__bGp.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_SHOWGLOBALCHAT)), this.__bGs.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_GHOST_BASE_WARNING_LESS_THAN_48)), this.__bGt.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_GHOST_BASE_WARNING_48_TO_72)), this.__bGu.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(ClientLib.Config.Main.CONFIG_GHOST_BASE_WARNING_MORE_THAN_72)), this.__bGv.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_NOTIFICATIONSIDEBAR))), this.__bGw.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_NOTIFICATIONRAID))), this.__bGy !== null && this.__bGy.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_NOTIFICATIONNPCATTACKS))), t = ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_NOTIFICATIONHIDECATEGORIES), n = ClientLib.Config.Main.ENotificationCategory.Alliance; n < ClientLib.Config.Main.ENotificationCategory.Count; ++n) this.__bGx[n].setValue(!t || t.indexOf(ClientLib.Config.Main.GetNotificationCategoryChar(n)) < 0);
    this.activateUpdateSaveButtons()
}