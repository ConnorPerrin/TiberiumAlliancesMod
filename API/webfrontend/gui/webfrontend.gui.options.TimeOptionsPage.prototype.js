function activate() {
    webfrontend.phe.cnc.base.Timer.getInstance().addListener(u, this.__up, this);
    this.__up()
}

function deactivate() {
    webfrontend.phe.cnc.base.Timer.getInstance().removeListener(u, this.__up, this)
}

function _saveSettings() {
    if (this._changed) {
        var n = ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_LANGUAGE),
            r = (t + qx.locale.Manager.getInstance().getLocale()).toLowerCase(),
            i = this.__bFE.getSelection()[0].getModel().toLowerCase(),
            u = !n && i != r || !!n && (t + n).toLowerCase() != i;
        ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_LANGUAGE, this.__bFE.getSelection()[0].getModel());
        ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_TIMEOFFSETTYPE, this.__bFF.getSelection()[0].getModel());
        ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_TIMEOFFSETVALUE, this.__bFJ.getSelection()[0].getModel());
        ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_TIMEFORMAT, this.__bFK.getSelection()[0].getModel());
        ClientLib.Config.Main.GetInstance().SaveToDB();
        u && this.__bGb()
    }
}

function _undoSettings() {
    var t = webfrontend.phe.cnc.config.Config.getInstance();
    t.revertToLastSavedOptions();
    this.__bFE.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFF.removeListener(n, this.__bFY, this);
    this.__bFJ.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFK.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFV(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_LANGUAGE));
    this.__bFU(webfrontend.phe.cnc.config.Config.getInstance().getTimeZone());
    this.__bFW(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_TIMEOFFSETVALUE));
    this.__bFX(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_TIMEFORMAT));
    this.__bFE.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFF.addListener(n, this.__bFY, this);
    this.__bFJ.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFK.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bGa()
}

function _setDefaultSettings() {
    this.__bFF.removeListener(n, this.__bFY, this);
    this.__bFJ.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFK.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFU(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_TIMEOFFSETTYPE));
    this.__bFW(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_TIMEOFFSETVALUE));
    this.__bFX(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_TIMEFORMAT));
    this.__bFF.addListener(n, this.__bFY, this);
    this.__bFJ.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFK.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bGa();
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
    webfrontend.phe.cnc.base.Timer.getInstance().addListener(u, this.__up, this);
    this.__up()
}

function deactivate() {
    webfrontend.phe.cnc.base.Timer.getInstance().removeListener(u, this.__up, this)
}

function _saveSettings() {
    if (this._changed) {
        var n = ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_LANGUAGE),
            r = (t + qx.locale.Manager.getInstance().getLocale()).toLowerCase(),
            i = this.__bFE.getSelection()[0].getModel().toLowerCase(),
            u = !n && i != r || !!n && (t + n).toLowerCase() != i;
        ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_LANGUAGE, this.__bFE.getSelection()[0].getModel());
        ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_TIMEOFFSETTYPE, this.__bFF.getSelection()[0].getModel());
        ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_TIMEOFFSETVALUE, this.__bFJ.getSelection()[0].getModel());
        ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_TIMEFORMAT, this.__bFK.getSelection()[0].getModel());
        ClientLib.Config.Main.GetInstance().SaveToDB();
        u && this.__bGb()
    }
}

function _undoSettings() {
    var t = webfrontend.phe.cnc.config.Config.getInstance();
    t.revertToLastSavedOptions();
    this.__bFE.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFF.removeListener(n, this.__bFY, this);
    this.__bFJ.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFK.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFV(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_LANGUAGE));
    this.__bFU(webfrontend.phe.cnc.config.Config.getInstance().getTimeZone());
    this.__bFW(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_TIMEOFFSETVALUE));
    this.__bFX(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_TIMEFORMAT));
    this.__bFE.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFF.addListener(n, this.__bFY, this);
    this.__bFJ.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFK.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bGa()
}

function _setDefaultSettings() {
    this.__bFF.removeListener(n, this.__bFY, this);
    this.__bFJ.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFK.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFU(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_TIMEOFFSETTYPE));
    this.__bFW(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_TIMEOFFSETVALUE));
    this.__bFX(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_TIMEFORMAT));
    this.__bFF.addListener(n, this.__bFY, this);
    this.__bFJ.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFK.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bGa();
    this.activateUpdateSaveButtons()
}