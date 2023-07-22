function activate() {
    this._controlsContainer.exclude();
    this.__bHr.sortByColumn(webfrontend.gui.options.ServerOptionsPage.EServerColumn.ESC_LAST, !1);
    this.__bHs.setSelectionInterval(-1, -1);
    qx.core.Init.getApplication().requestAccountInfo();
    webfrontend.phe.cnc.base.Timer.getInstance().addListener(l, this.__up, this);
    this.addListener(lt, this.deactivate, this)
}

function deactivate() {
    webfrontend.phe.cnc.base.Timer.getInstance().removeListener(l, this.__up, this);
    this._controlsContainer.show()
}

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

function activate() {
    this._controlsContainer.exclude();
    this.__bHr.sortByColumn(webfrontend.gui.options.ServerOptionsPage.EServerColumn.ESC_LAST, !1);
    this.__bHs.setSelectionInterval(-1, -1);
    qx.core.Init.getApplication().requestAccountInfo();
    webfrontend.phe.cnc.base.Timer.getInstance().addListener(l, this.__up, this);
    this.addListener(lt, this.deactivate, this)
}

function deactivate() {
    webfrontend.phe.cnc.base.Timer.getInstance().removeListener(l, this.__up, this);
    this._controlsContainer.show()
}

function _onUpdate() {
    var ot = this.__bHs.getLeadSelectionIndex() < 0,
        st = new Date,
        v = webfrontend.gui.options.ServerOptionsPage.EServerColumn,
        b = webfrontend.gui.options.ServerOptionsPage.EServerColumnMap,
        ut = this.__bHr.isSortAscending(),
        it = this.__bHr.getSortColumnIndex(),
        c, i, h, et, rt, l, p, w;
    if (it == -1 && (ut = !1, it = webfrontend.gui.options.ServerOptionsPage.EServerColumn.ESC_LAST), c = qx.core.Init.getApplication().getAccountInfo(), i = {}, c !== null && c.hasOwnProperty(a) && c.Servers !== null)
        for (h = 0; h < c.Servers.length; h++) w = c.Servers[h], i[w.Id] = w;
    if (this.__bHr.getRowCount() > 0)
        for (h = 0; h < this.__bHr.getRowCount(); h++) {
            var ft = this.__bHr.getRowData(h),
                r = ft.originalData.Id,
                ht = this._mapServerDetails.hasOwnProperty(r) ? this._mapServerDetails[r][s] : null;
            if (i.hasOwnProperty(r)) {
                ft.originalData = i[r];
                var y = !!i[r].Url && window.location.href.indexOf(i[r].Url) == 0,
                    d = i[r].Name,
                    g = i[r].Online == !0 ? this.tr(e) : this.tr(o),
                    nt = webfrontend.phe.cnc.Util.getDateTimeString(new Date(i[r].LastSeen), !1, !0, !1),
                    tt = i[r].PlayerBaseCount > 0 ? i[r].PlayerBaseCount : u,
                    k = ct;
                i[r].PlayerLevel > 0 && (et = ClientLib.Res.ResMain.GetInstance().GetPlayerTitleByLevel(i[r].Faction, i[r].PlayerLevel), k = et.dn);
                this.__bHr.setValue(v.ESC_SERVER, h, y ? n + d + t : d);
                this.__bHr.setValue(v.ESC_STATE, h, y ? n + g + t : g);
                this.__bHr.setValue(v.ESC_LAST, h, y ? n + nt + t : nt);
                this.__bHr.setValue(v.ESC_BASES, h, y ? n + tt + t : tt);
                this.__bHr.setValue(v.ESC_LEVEL, h, y ? n + k + t : k)
            }
        } else {
            if (rt = [], c && c.hasOwnProperty(a) && c.Servers !== null)
                for (l = 0; l < c.Servers.length; ++l)
                    if (c.Servers[l].LastSeen) {
                        var f = c.Servers[l],
                            y = !!f.Url && window.location.href.indexOf(f.Url) == 0,
                            ht = this._mapServerDetails.hasOwnProperty(f.Id) ? this._mapServerDetails[f.Id][s] : null;
                        f.details = ht;
                        var d = f.Name,
                            g = f.Online && new Date(f.PresignupEnd) < st ? this.tr(e) : this.tr(o),
                            nt = webfrontend.phe.cnc.Util.getDateTimeString(new Date(f.LastSeen), !1, !0, !1),
                            tt = f.PlayerBaseCount > 0 ? f.PlayerBaseCount : u,
                            k = f.PlayerLevel > 0 ? f.PlayerLevel : u,
                            p = {};
                        p[webfrontend.gui.options.ServerOptionsPage.TagOriginalData] = f;
                        p[b[v.ESC_SERVER]] = y ? n + d + t : d;
                        p[b[v.ESC_STATE]] = y ? n + g + t : g;
                        p[b[v.ESC_LAST]] = y ? n + nt + t : nt;
                        p[b[v.ESC_BASES]] = y ? n + tt + t : tt;
                        p[b[v.ESC_LEVEL]] = y ? n + k + t : k;
                        rt.push(p)
                    } this.__bHr.setDataAsMapArray(rt, !0, !1)
        }
    if (this.__bHr.sortByColumn(it, ut), ot)
        for (l = 0; l < this.__bHr.getRowCount(); ++l)
            if (p = this.__bHr.getRowDataAsMap(l), w = p[webfrontend.gui.options.ServerOptionsPage.TagOriginalData], !!w.Url && window.location.href.indexOf(w.Url) == 0) {
                this.__bHs.setSelectionInterval(l, l);
                break
            }
}