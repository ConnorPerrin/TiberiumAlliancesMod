function getLabel anonymous() {
    this.getLabel.$$install && this.getLabel.$$install();
    return this.getLabel.apply(this, arguments);
}

function setLabel anonymous(value) {
    this.$$setLabelImpl.apply(this, arguments);
    return value;
}

function resetLabel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initLabel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeLabel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeLabel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIcon anonymous() {
    this.getIcon.$$install && this.getIcon.$$install();
    return this.getIcon.apply(this, arguments);
}

function setIcon anonymous(value) {
    this.$$setIconImpl.apply(this, arguments);
    return value;
}

function resetIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getShowCloseButton anonymous() {
    this.getShowCloseButton.$$install && this.getShowCloseButton.$$install();
    return this.getShowCloseButton.apply(this, arguments);
}

function setShowCloseButton anonymous() {
    this.setShowCloseButton.$$install && this.setShowCloseButton.$$install.call(this);
    return this.setShowCloseButton.apply(this, arguments);
}

function resetShowCloseButton() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initShowCloseButton() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeShowCloseButton() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeShowCloseButton() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleShowCloseButton anonymous() {
    return this.setShowCloseButton(!this.getShowCloseButton())
}

function isShowCloseButton anonymous() {
    return this.getShowCloseButton()
} [object _forwardStatesObject]
function _applyIcon(t) {
    var r = this.getChildControl(n);
    t ? (r.setIcon(t), r._showChildControl(i)) : r._excludeChildControl(i)
}

function _applyLabel(t) {
    this.getChildControl(n).setLabel(t)
}

function _applyEnabled(t, i) {
    qx.ui.container.Composite.prototype._applyEnabled.call(this, t, i);
    var r = this.getChildControl(n);
    t == null ? r.resetEnabled() : r.setEnabled(t)
}

function _createChildControlImpl(t) {
    var i;
    switch (t) {
        case n:
            i = new qx.ui.tabview.TabButton;
            i.setAllowGrowX(!0);
            i.setAllowGrowY(!0);
            i.setUserData(f, this);
            i.addListener(r, this._onButtonClose, this)
    }
    return i || qx.ui.container.Composite.prototype._createChildControlImpl.call(this, t)
}

function _applyShowCloseButton(t) {
    this.getChildControl(n).setShowCloseButton(t)
}

function _onButtonClose() {
    this.fireEvent(r)
}

function getButton() {
    return this.getChildControl(n)
}

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

function reloadData(n) {
    (typeof n == ni || n == this._playerReportType) && this._reportsDataModel.reloadData()
}

function _getStatusText() {
    return n
}

function _onRowCountReceived() {}

function loadDataIncremental() {
    var u, p, w, d, g, y;
    if (this._lastReportsData != null) {
        for (var v = this._lastReportsData, b = !1, f = this._dataTableDisplay, k = ClientLib.Base.Util.GetFactionGuiPatchText(), nt = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(e + k + yt); this._lastReportsDataIndex < v.length;) u = this._lastReportsDataIndex, b || (b = webfrontend.gui.reports.ReportsUtil.checkShowPvpGhosttedTargetHint(v[u])), f.push({}), f[u].reportData = v[u], f[u].Id = v[u].get_Id(), f[u].b = this._selected.indexOf(f[u].Id) < 0 ? this._chkBoxSelectAll.getValue() : !this._chkBoxSelectAll.getValue(), f[u].Status = this._getStatusText(v[u].get_CombatResult()), f[u].Subject = webfrontend.gui.reports.ReportsUtil.getSubjectText(v[u]), f[u].Time = webfrontend.phe.cnc.Util.getDateTimeString(new Date(v[u].get_Time())), p = webfrontend.phe.cnc.gui.util.Images.getFactionIconWebPathFromType(v[u].get_ReportOtherFaction()), f[u].Faction = p != n ? i + p + ot : n, v[u].get_IsRead() ? (f[u].Subject = qx.lang.String.format(r + webfrontend.gui.util.BBCode.clrLink + t, [f[u].Subject]), f[u].Time = qx.lang.String.format(r + webfrontend.gui.util.BBCode.clrLink + t, [f[u].Time])) : (f[u].Subject = qx.lang.String.format(c + webfrontend.gui.util.BBCode.clrLink + o, [f[u].Subject]), f[u].Time = qx.lang.String.format(c + webfrontend.gui.util.BBCode.clrLink + o, [f[u].Time])), f[u].Shared = v[u].get_IsShared() ? i + nt + ct : n, w = h, v[u].get_ValidReplayData() && (w = l), d = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(e + k + a + w), f[u].Replay = i + d + s, this._lastReportsDataIndex++;
        if (this._lastReportsDataIndex >= v.length) g = this._reportsDataModel.isSortAscending(), y = this._reportsDataModel.getSortColumnIndex(), y == -1 && (y = 4), this._reportsDataModel._onRowDataLoaded(f), this._reportsDataModel.sortByColumn(y, g);
        else return !1
    } else this._reportsDataModel.reloadData();
    return this._tableReports.updateLastMouseOverColumn(), !0
}

function loadDataIncrementalDone() {
    this._tableReports.updateLastMouseOverColumn()
}

function _setReportData(n, t) {
    t == this._playerReportType && (this._lastReportsData = n, this._lastReportsDataIndex = 0, this._dataTableDisplay = [], this.loadDataIncremental())
}

function _getTableToolTip(n, t) {
    var i = this._reportsDataModel.getRowData(t),
        r = null;
    return i == null || n != 4 || i.reportData.get_ValidReplayData() || (r = this.tr(wt)), r
}

function _createReportsList() {
    var r = new qx.ui.container.Composite(new qx.ui.layout.Canvas),
        t, i, f;
    return this._reportsDataModel = new webfrontend.data.ReportHeaderDataModel(this._playerReportType), this._reportsDataModel.addListener(b, this._onRowCountReceived, this), this._reportsDataModel.setColumns([n, this.tr(rt), this.tr(ft), this.tr(bt), this.tr(ht), this.tr(at), this.tr(et)], [ut, p, st, nt, lt, g, v]), this._reportsDataModel.setColumnSortable(0, !1), this._reportsDataModel.setColumnSortable(1, !1), this._reportsDataModel.setColumnSortable(2, !1), this._reportsDataModel.setColumnSortable(3, !1), this._reportsDataModel.setColumnSortable(5, !1), this._reportsDataModel.setColumnSortable(6, !1), this._reportsDataModel.sortByColumn(4, !1), this._tableReports = new webfrontend.gui.widgets.CustomTable(this._reportsDataModel, {
        tablePaneScroller: function(n) {
            return new webfrontend.gui.widgets.TablePaneScrollerCustom(n, {
                toolTipCols: [{
                    col: 5
                }]
            })
        }
    }, !0), this._tableReports.set({
        statusBarVisible: !1,
        columnVisibilityButtonVisible: !1
    }), this._tableReports.addListener(d, this._onClickTableCell, this), this._tableReports.addListener(y, this._onMouseOverColumn, this), this._tableReports.addListener(w, this._onMouseOutTable, this), this._tableReports.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.NO_SELECTION), t = this._tableReports.getTableColumnModel(), t.setDataCellRenderer(0, new qx.ui.table.cellrenderer.Boolean), t.setDataCellRenderer(1, new qx.ui.table.cellrenderer.Html), t.getDataCellRenderer(1).setDefaultCellStyle(u), t.setDataCellRenderer(2, new qx.ui.table.cellrenderer.Html), t.setDataCellRenderer(3, new qx.ui.table.cellrenderer.Html), t.setDataCellRenderer(4, new qx.ui.table.cellrenderer.Html), t.setDataCellRenderer(5, new qx.ui.table.cellrenderer.Html), t.getDataCellRenderer(5).setDefaultCellStyle(u), t.setDataCellRenderer(6, new qx.ui.table.cellrenderer.Html), t.getDataCellRenderer(6).setDefaultCellStyle(u), i = this._tableReports.getTableColumnModel(), i.setColumnWidth(0, 32), i.setColumnWidth(1, 64), i.setColumnWidth(2, 190), i.setColumnWidth(3, 70), i.setColumnWidth(4, 160), i.setColumnWidth(5, 96), i.setColumnWidth(6, 80), f = this._tableReports._getPaneScrollerArr()[0], f.setToolTipFunction({
        func: this._getTableToolTip,
        ctx: this
    }), r.add(this._tableReports, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }), r
}

function _createReportControls() {
    var t = new qx.ui.container.Composite(new qx.ui.layout.VBox),
        n;
    return this._chkBoxSelectAll = new qx.ui.form.CheckBox(this.tr(it)).set({
        marginBottom: 10
    }), this._chkBoxSelectAll.addListener(gt, this._onSelectAllReports, this), n = new qx.ui.container.Composite(new qx.ui.layout.HBox(2)), this.__YD = new webfrontend.ui.SoundButton(this.tr(kt)), this.__YD.setEnabled(!1), this.__YD.addListener(f, this._onClickMarkAsRead, this), this.__YE = new webfrontend.ui.SoundButton(this.tr(k)), this.__YE.setEnabled(!1), this.__YE.addListener(f, this._onClickMarkAsUnread, this), this.__Km = new webfrontend.ui.SoundButton(this.tr(dt)), this.__Km.setEnabled(!1), this.__Km.addListener(f, this._onClickDelete, this), n.add(new qx.ui.core.Spacer, {
        flex: 1
    }), n.add(this.__YD), n.add(this.__YE), n.add(new qx.ui.core.Spacer, {
        flex: 1
    }), n.add(new qx.ui.core.Spacer, {
        flex: 1
    }), n.add(new qx.ui.core.Spacer, {
        flex: 1
    }), n.add(this.__Km), t.add(this._chkBoxSelectAll), t.add(n), t
}

function _updateHoverStateOnColumn(n, t, r) {
    var c = this._reportsDataModel.getRowData(n),
        f, o, u, v, y;
    c != null && (f = null, o = !1, t == 5 && (u = h, c.reportData.get_ValidReplayData() && (u = l, r && (u = vt)), v = ClientLib.Base.Util.GetFactionGuiPatchText(), y = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(e + v + a + u), f = i + y + s, o = !0), o && this._reportsDataModel.setValue(t, n, f))
}

function _onMouseOverColumn(n) {
    var t = n.getData();
    t != null && (this._updateHoverStateOnColumn(t.oldRow, t.oldColumn, !1), this._updateHoverStateOnColumn(t.newRow, t.newColumn, !0))
}

function _onMouseOutTable(n) {
    var t = n.getData();
    t != null && this._updateHoverStateOnColumn(t.oldRow, t.oldColumn, !1)
}

function _onClickTableCell(n) {
    var f, u, i;
    switch (n.getColumn()) {
        case 0:
            i = this._reportsDataModel.getRowData(n.getRow());
            i != null && (i.b = !i.b, this._reportsDataModel.setValue(0, n.getRow(), i.b), this._updateSelected(i.Id));
            break;
        case 5:
            i = this._reportsDataModel.getRowData(n.getRow());
            i != null && i.reportData.get_ValidReplayData() && (f = qx.core.Init.getApplication(), u = f.getCurrentMenuOverlay(), u != null && u != this && u.close(), f.showOptionsPage(!0), webfrontend.gui.Util.displayCombatReplay(i.Id));
            break;
        default:
            i = this._reportsDataModel.getRowData(n.getRow());
            i != null && (webfrontend.gui.reports.ReportPopupManager.getInstance().openPopup(i.Id, this._playerReportType, !0), i.reportData.set_IsRead(!0), i.Subject = qx.lang.String.format(r + webfrontend.gui.util.BBCode.clrLink + t, [webfrontend.gui.reports.ReportsUtil.getSubjectText(i.reportData)]), i.Time = qx.lang.String.format(r + webfrontend.gui.util.BBCode.clrLink + t, [webfrontend.phe.cnc.Util.getDateTimeString(new Date(i.reportData.get_Time()))]), this._reportsDataModel.refreshDisplay())
    }
}

function _onClickMarkAsRead() {
    var t = [],
        n;
    if (this._selected.length > 0)
        for (n = 0; n < this._selected.length; n++) t[n] = this._selected[n];
    ClientLib.Data.MainData.GetInstance().get_Reports().MarkReportsAsRead(t, this._playerReportType, this._chkBoxSelectAll.getValue());
    this._chkBoxSelectAll.setValue(!1)
}

function _onClickMarkAsUnread() {
    var t = [],
        n;
    if (this._selected.length > 0)
        for (n = 0; n < this._selected.length; n++) t[n] = this._selected[n];
    ClientLib.Data.MainData.GetInstance().get_Reports().MarkReportsAsUnread(t, this._playerReportType, this._chkBoxSelectAll.getValue());
    this._chkBoxSelectAll.setValue(!1)
}

function _onClickDelete() {
    var t = [],
        n;
    if (this._selected.length > 0)
        for (n = 0; n < this._selected.length; n++) t[n] = this._selected[n];
    ClientLib.Data.MainData.GetInstance().get_Reports().DeleteReports(t, this._playerReportType, this._chkBoxSelectAll.getValue())
}

function _onSelectAllReports(n) {
    this._selectAll(n.getData())
}

function _selectAll(n, t) {
    for (var r, u = this._reportsDataModel.getRowCount(), i = 0; i < u; i++) r = this._reportsDataModel.getRowData(i), r != null && (r.b = n);
    for (i = this._selected.length; i > 0; i--) this._selected.pop();
    t || this._reportsDataModel.refreshDisplay();
    this._updateButtonStatus()
}

function _updateSelected(n) {
    this._selected.indexOf(n) != -1 ? this._selected.splice(this._selected.indexOf(n), 1) : this._selected.push(n);
    this._updateButtonStatus()
}

function _updateButtonStatus() {
    this._selected.length > 0 || this._chkBoxSelectAll.getValue() ? (this.__Km.setEnabled(!0), this.__YD.setEnabled(!0), this.__YE.setEnabled(!0)) : (this.__Km.setEnabled(!1), this.__YD.setEnabled(!1), this.__YE.setEnabled(!1))
}