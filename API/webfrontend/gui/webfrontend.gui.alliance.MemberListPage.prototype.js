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

function appear() {
    var i, n, t;
    for (this.__Os || (webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), w, ClientLib.Data.AllianceChange, this, this.__Tg), this.__Os = !0), this.__Tg(this.__TE.getMemberListSortOrderAsc(), this.__TE.getMemberListSortColumn()), this.__tp = this.__TE.getSelected(), this.__Qc.resetSelection(), this.__TE.executeFilter(), i = this.__TB.getRowCount(), n = 0; n < i; n++) t = this.__TB.getRowData(n), t !== null && this.__tp.indexOf(t.Id) !== -1 ? this.__TB.setValue(0, n, !0) : this.__TB.setValue(0, n, !1);
    this.__TE.updateButtonStatus()
}

function disappear() {
    this.__Os && (webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), w, ClientLib.Data.AllianceChange, this, this.__Tg), this.__Os = !1);
    this.__TE.setMemberListSortColumn(this.__TB.getSortColumnIndex());
    this.__TE.setMemberListSortOrderAsc(this.__TB.isSortAscending())
}

function getViewType() {
    return this.__TC
}

function getTableModel() {
    return this.__TB
}

function getTable() {
    return this.__Qc
}

function resetMemberData() {
    var n = this.__TF;
    this.__TB.setDataAsMapArray(n, !0, !1)
}

function setOriginalData(n) {
    this.__TF = n
}

function getOriginalMemberData() {
    return this.__TF
}

function filterMemberList(t, i, r) {
    var u, e, f, o;
    if (this.__Qc.resetCellFocus(), this.__Qc.resetSelection(), u = this.__TF, (t === n || t === null) && (i === null || i <= 0) && (r == null || r == !1)) {
        this.__TB.setDataAsMapArray(u, !0, !1);
        return
    }
    if (t.length > webfrontend.gui.ranking.RankingPlayerScore.searchValueMinLength) {
        for (e = [], f = 0; f < u.length; f++) o = u[f], o.Name.toLowerCase().indexOf(t.toLowerCase()) >= 0 && e.push(o);
        u = e
    }
    if (i !== null && i > 0) {
        for (e = [], f = 0; f < u.length; f++) o = u[f], parseInt(o.Role) === i && e.push(o);
        u = e
    }
    if (r == !0) {
        for (e = [], f = 0; f < u.length; f++) o = u[f], o.ActiveState != 6 && e.push(o);
        u = e
    }
    this.__TB.setDataAsMapArray(u, !0, !1)
}

function enableMemberSelectCheckbox() {
    ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanPromoteLowerRoles() || ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanKick() ? this.__Qc.getTableColumnModel().setColumnVisible(0, !0) : this.__Qc.getTableColumnModel().setColumnVisible(0, !1)
}

function _onClickTableCell(n) {
    var t;
    switch (n.getColumn()) {
        case 0:
            t = this.__TB.getRowData(n.getRow());
            t.b = !t.b;
            this.__TB.setValue(0, n.getRow(), t.b);
            this.__TE.setSelected(t.b, t.Id);
            this.__TE.updateButtonStatus();
            break;
        case 2:
            t = this.__TB.getRowData(n.getRow());
            webfrontend.gui.info.PlayerInfoWindow.getInstance().openWithPlayerId(t.Id)
    }
}