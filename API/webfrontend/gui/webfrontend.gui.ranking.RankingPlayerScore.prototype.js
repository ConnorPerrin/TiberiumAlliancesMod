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

function open() {
    webfrontend.gui.PreloadObserverGui.getInstance().setLoading(this.__Qc, !0, null, null, {
        blockerfade: !0
    });
    this.__TO = 0;
    this.__Qc.resetCellFocus();
    this.__Qc.resetSelection();
    this.__TB.setSortAscendingWithoutSortingData(!0);
    this.__TB.setLocked(!1);
    this.__TB.reloadData()
}

function close() {
    this.__TN && (webfrontend.phe.cnc.base.Timer.getInstance().removeListenerById(this.__TN), this.__TN = null);
    this.__TB.setLocked(!0)
}

function searchRank(n) {
    if (!n || n.length <= 0) {
        this.__Qc.resetSelection();
        return
    }
    this.__TK != n && (this.__TK = n);
    this.__TL = this.__TB.getSortColumns()[0];
    this.__Ub(this.__TB.getSortColumns()[0], n)
}

function searchName(n) {
    var t;
    if (!n || n.length <= 0 || n.length < webfrontend.gui.ranking.RankingPlayerScore.searchValueMinLength) {
        this.__TK = null;
        this.__Qc.resetSelection();
        this.__TB.setSearchName(n);
        this.__TB.reloadData();
        return
    }
    this.__TK != n && (this.__TK = n);
    var r = this.__TB.getMetaColumns(),
        u = ClientLib.Data.Ranking,
        i = -1;
    for (t = 0; t < r.length; ++t) {
        switch (r[t]) {
            case u.Ranking.ID_PLAYER_NAME:
            case u.Ranking.ID_ALLIANCE_NAME:
                i = t
        }
        if (i >= 0) break
    }
    i >= 0 && (this.__TL = this.__TB.getSortColumns()[i], this.__TB.setSearchName(n), this.__TB.setLocked(!1), this.__Qc.resetCellFocus(), this.__Qc.resetSelection(), this.__TB.reloadData())
}

function showSelf(n) {
    var i;
    if (!n || n.length < webfrontend.gui.ranking.RankingPlayerScore.searchValueMinLength) {
        this.__TK = null;
        this.__Qc.resetSelection();
        return
    }
    var r = this.__TB.getMetaColumns(),
        u = ClientLib.Data.Ranking,
        t = -1;
    for (i = 0; i < r.length; ++i) {
        switch (r[i]) {
            case u.Ranking.ID_PLAYER_NAME:
            case u.Ranking.ID_ALLIANCE_NAME:
                t = i
        }
        if (t >= 0) break
    }
    t >= 0 && (this.__TL = this.__TB.getSortColumns()[t], this.__Ub(this.__TB.getSortColumns()[t], n))
}

function searchSelf() {
    switch (this.__TB.getViewType()) {
        case ClientLib.Data.Ranking.EViewType.Alliance:
            this.showSelf(ClientLib.Data.MainData.GetInstance().get_Alliance().get_Name());
            break;
        case ClientLib.Data.Ranking.EViewType.Player:
        default:
            this.showSelf(ClientLib.Data.MainData.GetInstance().get_Player().get_Name())
    }
    return
}

function onReset() {
    this.__TK = null;
    this.__Qc.resetSelection();
    this.__TB.setSearchName(o);
    this.__TB.reloadData()
}