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
    return c
}

function _onRowCountReceived() {}

function loadDataIncremental() {
    var s, u, h, o;
    if (this._lastReportsData != null) {
        var e = this._lastReportsData,
            f = this._dataTableDisplay,
            c = webfrontend.gui.reports.ReportsPage.PrepareRowCountPerIteration;
        for (s = 0; this._lastReportsDataIndex < e.length && s < c; ++this._lastReportsDataIndex, ++s) {
            u = this._lastReportsDataIndex;
            f.push({});
            f[u].reportData = e[u];
            f[u].Id = e[u].get_Id();
            f[u].b = this._selected.indexOf(f[u].Id) < 0 ? this._chkBoxSelectAll.getValue() : !this._chkBoxSelectAll.getValue();
            f[u].Subject = webfrontend.gui.reports.ReportsUtil.getSubjectText(e[u]);
            switch (e[u].get_Type()) {
                case ClientLib.Data.Reports.EReportType.CenterHubDefeat:
                    f[u].BaseName = this.tr(v);
                    break;
                default:
                    f[u].BaseName = e[u].get_BaseName()
            }
            f[u].Time = webfrontend.phe.cnc.Util.getDateTimeString(new Date(e[u].get_Time()));
            e[u].get_IsRead() ? (f[u].BaseName = qx.lang.String.format(n + webfrontend.gui.util.BBCode.clrLink + t, [f[u].BaseName]), f[u].Subject = qx.lang.String.format(n + webfrontend.gui.util.BBCode.clrLink + t, [f[u].Subject]), f[u].Time = qx.lang.String.format(n + webfrontend.gui.util.BBCode.clrLink + t, [f[u].Time])) : (f[u].BaseName = qx.lang.String.format(i + webfrontend.gui.util.BBCode.clrLink + r, [f[u].BaseName]), f[u].Subject = qx.lang.String.format(i + webfrontend.gui.util.BBCode.clrLink + r, [f[u].Subject]), f[u].Time = qx.lang.String.format(i + webfrontend.gui.util.BBCode.clrLink + r, [f[u].Time]))
        }
        if (this._lastReportsDataIndex >= e.length) h = this._reportsDataModel.isSortAscending(), o = this._reportsDataModel.getSortColumnIndex(), o == -1 && (o = 3), this._reportsDataModel._onRowDataLoaded(f), this._reportsDataModel.sortByColumn(o, h);
        else return !1
    } else this._reportsDataModel.reloadData();
    return !0
}

function loadDataIncrementalDone() {
    this._tableReports.updateLastMouseOverColumn()
}

function _setReportData(n, t) {
    t == this._playerReportType && (this._lastReportsData = n, this._lastReportsDataIndex = 0, this._dataTableDisplay = [], this.loadDataIncremental());
    this.loadDataIncrementalDone()
}

function _getTableToolTip(n, t) {
    var i = this._reportsDataModel.getRowData(t),
        r = null;
    return i == null || n != 4 || i.reportData.get_ValidReplayData() || (r = this.tr(wt)), r
}

function _createReportsList() {
    var i = new qx.ui.container.Composite(new qx.ui.layout.Canvas),
        n, t, r;
    return this._reportsDataModel = new webfrontend.data.ReportHeaderDataModel(this._playerReportType), this._reportsDataModel.addListener(y, this._onRowCountReceived, this), this._reportsDataModel.setColumns([o, this.tr(k), this.tr(p), this.tr(u)], [h, l, s, f]), this._reportsDataModel.setColumnSortable(0, !1), this._reportsDataModel.setColumnSortable(1, !1), this._reportsDataModel.setColumnSortable(2, !1), this._reportsDataModel.sortByColumn(3, !1), this._tableReports = new webfrontend.gui.widgets.CustomTable(this._reportsDataModel, {
        tablePaneScroller: function(n) {
            return new webfrontend.gui.widgets.TablePaneScrollerCustom(n, {
                toolTipCols: [{
                    col: 4
                }]
            })
        }
    }, !0), this._tableReports.set({
        statusBarVisible: !1,
        columnVisibilityButtonVisible: !1
    }), this._tableReports.addListener(b, this._onClickTableCell, this), this._tableReports.addListener(e, this._onMouseOverColumn, this), this._tableReports.addListener(a, this._onMouseOutTable, this), this._tableReports.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.NO_SELECTION), n = this._tableReports.getTableColumnModel(), n.setDataCellRenderer(0, new qx.ui.table.cellrenderer.Boolean), n.setDataCellRenderer(1, new qx.ui.table.cellrenderer.Html), n.setDataCellRenderer(2, new qx.ui.table.cellrenderer.Html), n.setDataCellRenderer(3, new qx.ui.table.cellrenderer.Html), t = this._tableReports.getTableColumnModel(), t.setColumnWidth(0, 32), t.setColumnWidth(1, 190), t.setColumnWidth(2, 190), t.setColumnWidth(3, 160), r = this._tableReports._getPaneScrollerArr()[0], r.setToolTipFunction({
        func: this._getTableToolTip,
        ctx: this
    }), i.add(this._tableReports, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }), i
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

function _onClickTableCell(i) {
    var r = this._reportsDataModel.getRowData(i.getRow());
    if (r != null) switch (i.getColumn()) {
        case 0:
            r.b = !r.b;
            this._reportsDataModel.setValue(0, i.getRow(), r.b);
            this._updateSelected();
            break;
        default:
            webfrontend.gui.reports.ReportPopupManager.getInstance().openPopup(r.Id, this._playerReportType, !0, r.reportData.get_Type());
            r.reportData.set_IsRead(!0);
            r.Subject = qx.lang.String.format(n + webfrontend.gui.util.BBCode.clrLink + t, [webfrontend.gui.reports.ReportsUtil.getSubjectText(r.reportData)]);
            r.Time = qx.lang.String.format(n + webfrontend.gui.util.BBCode.clrLink + t, [webfrontend.phe.cnc.Util.getDateTimeString(new Date(r.reportData.get_Time()))]);
            this._reportsDataModel.refreshDisplay()
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

function _getStatusText() {
    return c
}

function _createReportsList() {
    var i = new qx.ui.container.Composite(new qx.ui.layout.Canvas),
        n, t, r;
    return this._reportsDataModel = new webfrontend.data.ReportHeaderDataModel(this._playerReportType), this._reportsDataModel.addListener(y, this._onRowCountReceived, this), this._reportsDataModel.setColumns([o, this.tr(k), this.tr(p), this.tr(u)], [h, l, s, f]), this._reportsDataModel.setColumnSortable(0, !1), this._reportsDataModel.setColumnSortable(1, !1), this._reportsDataModel.setColumnSortable(2, !1), this._reportsDataModel.sortByColumn(3, !1), this._tableReports = new webfrontend.gui.widgets.CustomTable(this._reportsDataModel, {
        tablePaneScroller: function(n) {
            return new webfrontend.gui.widgets.TablePaneScrollerCustom(n, {
                toolTipCols: [{
                    col: 4
                }]
            })
        }
    }, !0), this._tableReports.set({
        statusBarVisible: !1,
        columnVisibilityButtonVisible: !1
    }), this._tableReports.addListener(b, this._onClickTableCell, this), this._tableReports.addListener(e, this._onMouseOverColumn, this), this._tableReports.addListener(a, this._onMouseOutTable, this), this._tableReports.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.NO_SELECTION), n = this._tableReports.getTableColumnModel(), n.setDataCellRenderer(0, new qx.ui.table.cellrenderer.Boolean), n.setDataCellRenderer(1, new qx.ui.table.cellrenderer.Html), n.setDataCellRenderer(2, new qx.ui.table.cellrenderer.Html), n.setDataCellRenderer(3, new qx.ui.table.cellrenderer.Html), t = this._tableReports.getTableColumnModel(), t.setColumnWidth(0, 32), t.setColumnWidth(1, 190), t.setColumnWidth(2, 190), t.setColumnWidth(3, 160), r = this._tableReports._getPaneScrollerArr()[0], r.setToolTipFunction({
        func: this._getTableToolTip,
        ctx: this
    }), i.add(this._tableReports, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }), i
}

function loadDataIncremental() {
    var s, u, h, o;
    if (this._lastReportsData != null) {
        var e = this._lastReportsData,
            f = this._dataTableDisplay,
            c = webfrontend.gui.reports.ReportsPage.PrepareRowCountPerIteration;
        for (s = 0; this._lastReportsDataIndex < e.length && s < c; ++this._lastReportsDataIndex, ++s) {
            u = this._lastReportsDataIndex;
            f.push({});
            f[u].reportData = e[u];
            f[u].Id = e[u].get_Id();
            f[u].b = this._selected.indexOf(f[u].Id) < 0 ? this._chkBoxSelectAll.getValue() : !this._chkBoxSelectAll.getValue();
            f[u].Subject = webfrontend.gui.reports.ReportsUtil.getSubjectText(e[u]);
            switch (e[u].get_Type()) {
                case ClientLib.Data.Reports.EReportType.CenterHubDefeat:
                    f[u].BaseName = this.tr(v);
                    break;
                default:
                    f[u].BaseName = e[u].get_BaseName()
            }
            f[u].Time = webfrontend.phe.cnc.Util.getDateTimeString(new Date(e[u].get_Time()));
            e[u].get_IsRead() ? (f[u].BaseName = qx.lang.String.format(n + webfrontend.gui.util.BBCode.clrLink + t, [f[u].BaseName]), f[u].Subject = qx.lang.String.format(n + webfrontend.gui.util.BBCode.clrLink + t, [f[u].Subject]), f[u].Time = qx.lang.String.format(n + webfrontend.gui.util.BBCode.clrLink + t, [f[u].Time])) : (f[u].BaseName = qx.lang.String.format(i + webfrontend.gui.util.BBCode.clrLink + r, [f[u].BaseName]), f[u].Subject = qx.lang.String.format(i + webfrontend.gui.util.BBCode.clrLink + r, [f[u].Subject]), f[u].Time = qx.lang.String.format(i + webfrontend.gui.util.BBCode.clrLink + r, [f[u].Time]))
        }
        if (this._lastReportsDataIndex >= e.length) h = this._reportsDataModel.isSortAscending(), o = this._reportsDataModel.getSortColumnIndex(), o == -1 && (o = 3), this._reportsDataModel._onRowDataLoaded(f), this._reportsDataModel.sortByColumn(o, h);
        else return !1
    } else this._reportsDataModel.reloadData();
    return !0
}

function _setReportData(n, t) {
    t == this._playerReportType && (this._lastReportsData = n, this._lastReportsDataIndex = 0, this._dataTableDisplay = [], this.loadDataIncremental());
    this.loadDataIncrementalDone()
}

function _onClickTableCell(i) {
    var r = this._reportsDataModel.getRowData(i.getRow());
    if (r != null) switch (i.getColumn()) {
        case 0:
            r.b = !r.b;
            this._reportsDataModel.setValue(0, i.getRow(), r.b);
            this._updateSelected();
            break;
        default:
            webfrontend.gui.reports.ReportPopupManager.getInstance().openPopup(r.Id, this._playerReportType, !0, r.reportData.get_Type());
            r.reportData.set_IsRead(!0);
            r.Subject = qx.lang.String.format(n + webfrontend.gui.util.BBCode.clrLink + t, [webfrontend.gui.reports.ReportsUtil.getSubjectText(r.reportData)]);
            r.Time = qx.lang.String.format(n + webfrontend.gui.util.BBCode.clrLink + t, [webfrontend.phe.cnc.Util.getDateTimeString(new Date(r.reportData.get_Time()))]);
            this._reportsDataModel.refreshDisplay()
    }
}