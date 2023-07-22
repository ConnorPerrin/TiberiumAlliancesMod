function activate() {}

function deactivate() {}

function _saveSettings() {}

function _undoSettings() {}

function _setDefaultSettings() {}

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