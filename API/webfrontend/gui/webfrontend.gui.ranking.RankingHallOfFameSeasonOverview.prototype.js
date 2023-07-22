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
    this.__Qc.resetCellFocus();
    this.__Qc.resetSelection();
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(s, null, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this.__bbL), null)
}

function close() {}

function searchRank(n) {
    !n || n.length <= 0 || this.__TX(this.__TB.getSortColumns()[0], n)
}

function searchName(n) {
    var t;
    if (n && !(n.length < webfrontend.gui.ranking.RankingPlayerScore.searchValueMinLength)) {
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
        i >= 0 && this.__TX(this.__TB.getSortColumns()[i], n)
    }
}

function searchSelf() {
    switch (this.__TB.getViewType()) {
        case ClientLib.Data.Ranking.EViewType.Alliance:
            this.searchName(ClientLib.Data.MainData.GetInstance().get_Alliance().get_Name());
            break;
        case ClientLib.Data.Ranking.EViewType.Player:
        default:
            this.searchName(ClientLib.Data.MainData.GetInstance().get_Player().get_Name())
    }
    return
}