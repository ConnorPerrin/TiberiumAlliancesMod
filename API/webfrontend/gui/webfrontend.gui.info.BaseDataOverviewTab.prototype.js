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
    this.__GE(!0);
    var n = ClientLib.Data.MainData.GetInstance().get_Cities();
    webfrontend.phe.cnc.Util.attachNetEvent(n, e, ClientLib.Data.CitiesChange, this, this.__An);
    webfrontend.phe.cnc.base.Timer.getInstance().addListener(u, this.__up, this)
}

function close() {
    var n = ClientLib.Data.MainData.GetInstance().get_Cities();
    webfrontend.phe.cnc.Util.detachNetEvent(n, e, ClientLib.Data.CitiesChange, this, this.__An);
    webfrontend.phe.cnc.base.Timer.getInstance().removeListener(u, this.__up, this)
}