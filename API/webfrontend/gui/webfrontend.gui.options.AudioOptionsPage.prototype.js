function activate() {}

function deactivate() {}

function _saveSettings() {
    var n, t;
    this._changed && (n = webfrontend.phe.cnc.config.Config.getInstance(), n.setAudioOn(this.__bFl.getValue()), n.setAudioMusicLevel(this.__bFm.getValue()), n.setAudioAmbientLevel(this.__bFn.getValue()), n.setAudioUILevel(this.__bFo.getValue()), n._applyAudio(), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_VIS_REGION_MINZOOM, this.__bFp.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_VISANIMATIONS, this.__bFq.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_VISEFFECTS_BASE, this.__bFr.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_VISFOG, this.__bFs.getValue()), this.__bFt.getEnabled() && ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_VISCLOUDS, this.__bFt.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_VISEFFECTS_COMBAT, this.__bFu.getValue()), ClientLib.Config.Main.GetInstance().SaveToDB(), t = ClientLib.Base.LocalStorage, t.get_IsSupported() && (this.__bFy.getValue() && t.GetItem(f) != u && t.SetItem(b, e), t.SetItem(f, this.__bFy.getValue() ? u : e)))
}

function _undoSettings() {
    var i = webfrontend.phe.cnc.config.Config.getInstance(),
        r, t;
    i.revertToLastSavedOptions();
    this.__bFl.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFm.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFn.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFo.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFl.setValue(i.getAudioOn());
    this.__bFm.setValue(i.getAudioMusicLevel());
    this.__bFn.setValue(i.getAudioAmbientLevel());
    this.__bFo.setValue(i.getAudioUILevel());
    this.__bFl.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFm.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFn.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFo.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFp.setValue(webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_VIS_REGION_MINZOOM));
    this.__bFq.setValue(webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_VISANIMATIONS));
    this.__bFr.setValue(webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_VISEFFECTS_BASE));
    this.__bFs.setValue(webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_VISFOG));
    this.__bFt.getEnabled() && this.__bFt.setValue(webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_VISCLOUDS));
    this.__bFu.setValue(webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_VISEFFECTS_COMBAT));
    r = ClientLib.Base.LocalStorage;
    t = !1;
    r.get_IsSupported() && (t = r.GetItem(f), t = t != null & t == u);
    this.__bFy.setValue(Boolean(t))
}

function _setDefaultSettings() {
    var t = webfrontend.phe.cnc.config.Config.getInstance();
    this.__bFl.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFm.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFn.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFo.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFl.setValue(t.getAudioOnDefault());
    this.__bFm.setValue(t.getAudioMusicLevelDefault());
    this.__bFn.setValue(t.getAudioAmbientLevelDefault());
    this.__bFo.setValue(t.getAudioUILevelDefault());
    this.__bFl.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFm.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFn.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFo.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFp.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_VIS_REGION_MINZOOM)));
    this.__bFq.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_VISANIMATIONS)));
    this.__bFr.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_VISEFFECTS_BASE)));
    this.__bFs.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_VISFOG)));
    this.__bFt.getEnabled() && this.__bFt.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_VISCLOUDS)));
    this.__bFu.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_VISEFFECTS_COMBAT)));
    this.__bFy.setValue(!1);
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

function _saveSettings() {
    var n, t;
    this._changed && (n = webfrontend.phe.cnc.config.Config.getInstance(), n.setAudioOn(this.__bFl.getValue()), n.setAudioMusicLevel(this.__bFm.getValue()), n.setAudioAmbientLevel(this.__bFn.getValue()), n.setAudioUILevel(this.__bFo.getValue()), n._applyAudio(), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_VIS_REGION_MINZOOM, this.__bFp.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_VISANIMATIONS, this.__bFq.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_VISEFFECTS_BASE, this.__bFr.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_VISFOG, this.__bFs.getValue()), this.__bFt.getEnabled() && ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_VISCLOUDS, this.__bFt.getValue()), ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_VISEFFECTS_COMBAT, this.__bFu.getValue()), ClientLib.Config.Main.GetInstance().SaveToDB(), t = ClientLib.Base.LocalStorage, t.get_IsSupported() && (this.__bFy.getValue() && t.GetItem(f) != u && t.SetItem(b, e), t.SetItem(f, this.__bFy.getValue() ? u : e)))
}

function _undoSettings() {
    var i = webfrontend.phe.cnc.config.Config.getInstance(),
        r, t;
    i.revertToLastSavedOptions();
    this.__bFl.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFm.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFn.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFo.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFl.setValue(i.getAudioOn());
    this.__bFm.setValue(i.getAudioMusicLevel());
    this.__bFn.setValue(i.getAudioAmbientLevel());
    this.__bFo.setValue(i.getAudioUILevel());
    this.__bFl.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFm.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFn.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFo.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFp.setValue(webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_VIS_REGION_MINZOOM));
    this.__bFq.setValue(webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_VISANIMATIONS));
    this.__bFr.setValue(webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_VISEFFECTS_BASE));
    this.__bFs.setValue(webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_VISFOG));
    this.__bFt.getEnabled() && this.__bFt.setValue(webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_VISCLOUDS));
    this.__bFu.setValue(webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_VISEFFECTS_COMBAT));
    r = ClientLib.Base.LocalStorage;
    t = !1;
    r.get_IsSupported() && (t = r.GetItem(f), t = t != null & t == u);
    this.__bFy.setValue(Boolean(t))
}

function _setDefaultSettings() {
    var t = webfrontend.phe.cnc.config.Config.getInstance();
    this.__bFl.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFm.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFn.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFo.removeListener(n, this.activateUpdateSaveButtons, this);
    this.__bFl.setValue(t.getAudioOnDefault());
    this.__bFm.setValue(t.getAudioMusicLevelDefault());
    this.__bFn.setValue(t.getAudioAmbientLevelDefault());
    this.__bFo.setValue(t.getAudioUILevelDefault());
    this.__bFl.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFm.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFn.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFo.addListener(n, this.activateUpdateSaveButtons, this);
    this.__bFp.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_VIS_REGION_MINZOOM)));
    this.__bFq.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_VISANIMATIONS)));
    this.__bFr.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_VISEFFECTS_BASE)));
    this.__bFs.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_VISFOG)));
    this.__bFt.getEnabled() && this.__bFt.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_VISCLOUDS)));
    this.__bFu.setValue(Boolean(ClientLib.Config.Main.GetInstance().GetDefaultConfig(ClientLib.Config.Main.CONFIG_VISEFFECTS_COMBAT)));
    this.__bFy.setValue(!1);
    this.activateUpdateSaveButtons()
}