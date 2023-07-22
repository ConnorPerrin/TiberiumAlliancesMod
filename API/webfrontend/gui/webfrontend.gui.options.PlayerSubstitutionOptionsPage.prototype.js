function activate() {
    var r, i, n;
    if (this.__bGP(), r = ClientLib.Data.MainData.GetInstance().get_Player().get_IsSubstituted(), r) {
        for (i in this.__bGO) n = this.__bGO[i].uiElement, n.setEnabled(!1), n.setToolTipText(this.tr(y));
        this.__bGE.setEnabled(!1);
        this.__bGE.setToolTipText(this.tr(y))
    } else {
        for (i in this.__bGO) n = this.__bGO[i].uiElement, n.setToolTipText(null);
        this.__bGE.set({
            toolTipText: null,
            value: t
        })
    }
    this._controlsContainer.exclude();
    webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_PlayerSubstitution(), a, ClientLib.Data.SubstitutionChange, this, this.__bGP)
}

function deactivate() {
    this._controlsContainer.show();
    webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_PlayerSubstitution(), a, ClientLib.Data.SubstitutionChange, this, this.__bGP)
}

function _saveSettings() {
    this._changed && this.__bBE()
}

function _undoSettings() {
    var n, t;
    for (n in this.__bGO) t = this.__bGO[n].uiElement, t.setValue(webfrontend.phe.cnc.Util.getConfigBoolean(n))
}

function _setDefaultSettings() {
    var n, t;
    for (n in this.__bGO) t = this.__bGO[n].uiElement, t.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(n));
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
    var r, i, n;
    if (this.__bGP(), r = ClientLib.Data.MainData.GetInstance().get_Player().get_IsSubstituted(), r) {
        for (i in this.__bGO) n = this.__bGO[i].uiElement, n.setEnabled(!1), n.setToolTipText(this.tr(y));
        this.__bGE.setEnabled(!1);
        this.__bGE.setToolTipText(this.tr(y))
    } else {
        for (i in this.__bGO) n = this.__bGO[i].uiElement, n.setToolTipText(null);
        this.__bGE.set({
            toolTipText: null,
            value: t
        })
    }
    this._controlsContainer.exclude();
    webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_PlayerSubstitution(), a, ClientLib.Data.SubstitutionChange, this, this.__bGP)
}

function deactivate() {
    this._controlsContainer.show();
    webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_PlayerSubstitution(), a, ClientLib.Data.SubstitutionChange, this, this.__bGP)
}

function _saveSettings() {
    this._changed && this.__bBE()
}

function _undoSettings() {
    var n, t;
    for (n in this.__bGO) t = this.__bGO[n].uiElement, t.setValue(webfrontend.phe.cnc.Util.getConfigBoolean(n))
}

function _setDefaultSettings() {
    var n, t;
    for (n in this.__bGO) t = this.__bGO[n].uiElement, t.setValue(webfrontend.phe.cnc.Util.getDefaultConfigBoolean(n));
    this.activateUpdateSaveButtons()
}

function onSubstitutionVersionChanged() {
    this.__bGP()
}

function onAcceptSubstitution(n, t) {
    if (n == !1 || t == null) {
        this.__bGS(100);
        return
    }
    this.__bGS(parseInt(t))
}

function onRejectSubstitution(n, t) {
    if (n == !1 || t == null) {
        this.__bGS(100);
        return
    }
    this.__bGS(parseInt(t))
}

function onEndSubstitution(n, t) {
    if (n == !1 || t == null) {
        this.__bGS(100);
        return
    }
    this.__bGS(parseInt(t))
}

function onLoginSubstitution(n, i, r) {
    var f, u;
    if (n == !1 || i == null) {
        this.__bGS(100);
        return
    }
    if (f = i.length, f != 36) {
        this.__bGS(101);
        return
    }
    for (u = 1, u; u < f - 1; u++)
        if (i.charAt(u) != ht && i.charAt(u) != cr) break;
    if (u > 34) {
        this.__bGS(101);
        return
    }
    webfrontend.gui.MessageBox.messageBox({
        title: this.tr(ci),
        text: this.tr(et, r.getPlayerName()),
        cancelText: this.tr(v),
        textRich: !0,
        executeOk: function() {
            var u = document.location.href,
                n, r;
            n = w + u + b;
            n = n + pt;
            n = n + nt + i + pi;
            n = n + rr;
            n = n + wi;
            n = n + ui + nr;
            r = window.open(t, t);
            r.document.write(n);
            r.document.close()
        }
    })
}

function getActiveDays(n) {
    var r;
    if (n != -1) {
        var u = new Date(n),
            f = ClientLib.Data.MainData.GetInstance().get_Player(),
            s = ClientLib.Data.MainData.GetInstance().get_Time(),
            t = s.GetJSStepTime(s.GetServerStep()),
            c = t.getUTCFullYear(),
            l = t.getUTCMonth(),
            a = t.getUTCDate(),
            v = t.getUTCHours(),
            y = t.getUTCMinutes(),
            p = t.getUTCSeconds(),
            i = new Date;
        i.setFullYear(c, l, a);
        i.setHours(v);
        i.setMinutes(y);
        i.setSeconds(p);
        r = new Date(i.getTime());
        r.setHours(0);
        r.setMinutes(0);
        r.setSeconds(0);
        var e = r.getTime() - u.getTime(),
            o = 0,
            h = new Date(f.get_SubstituteLastLogout());
        return e < 0 ? (f.get_SubstituteDayCount() == 0 || u.getDate() != h.getDate()) && (o = 1) : o = f.get_SubstituteDayCount() == 0 || u.getDate() != h.getDate() ? Math.ceil(e / 864e5) : Math.floor(e / 864e5), o
    }
    return 0
}