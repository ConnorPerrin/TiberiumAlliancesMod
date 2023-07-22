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

function getCurrentContainer anonymous() {
    this.getCurrentContainer.$$install && this.getCurrentContainer.$$install();
    return this.getCurrentContainer.apply(this, arguments);
}

function setCurrentContainer anonymous(value) {
    this.$$setCurrentContainerImpl.apply(this, arguments);
    return value;
}

function resetCurrentContainer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCurrentContainer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCurrentContainer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCurrentContainer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setView(n) {
    switch (n) {
        case webfrontend.gui.alliance.OverviewPage.EViewNews:
            this.setCurrentContainer(this.__OA);
            this.__OE.setValue(!0);
            break;
        case webfrontend.gui.alliance.OverviewPage.EViewMarkers:
            this.setCurrentContainer(this.__OB);
            this.__OF.setValue(!0);
            break;
        case webfrontend.gui.alliance.OverviewPage.EViewProfile:
            this.setCurrentContainer(this.__OC);
            this.__OG.setValue(!0);
            break;
        case webfrontend.gui.alliance.OverviewPage.EViewInvitations:
            this.setCurrentContainer(this.__Op);
            this.__OH.setValue(!0);
            break;
        case webfrontend.gui.alliance.OverviewPage.EViewProperties:
            this.setCurrentContainer(this.__OD);
            this.__OI.setValue(!0);
            break;
        default:
            this.setCurrentContainer(null)
    }
}

function triggerAppear() {
    this.__Bf.schedule()
}

function _onAppearFake() {
    this.__Od();
    this.__Os || (webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), t, ClientLib.Data.AllianceChange, this, this._onAllianceDetailChanged), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), r, ClientLib.Data.AllianceCanInviteChange, this, this.__OL), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), i, ClientLib.Data.AllianceCanModerateChange, this, this.__OM), this.__Os = !0);
    this.getCurrentContainer() && this.getCurrentContainer().triggerAppear && this.getCurrentContainer().triggerAppear()
}

function _onDisappearFake() {
    this.__Os && (webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), t, ClientLib.Data.AllianceChange, this, this._onAllianceDetailChanged), webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), r, ClientLib.Data.AllianceCanInviteChange, this, this.__OL), webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), i, ClientLib.Data.AllianceCanModerateChange, this, this.__OM), this.__Os = !1);
    this.getCurrentContainer() && this.getCurrentContainer()._onDisappearFake && this.getCurrentContainer()._onDisappearFake()
}

function _onAllianceDetailChanged() {
    this.__Od()
}

function _onClickSwitchView(n) {
    switch (this.type) {
        case webfrontend.gui.alliance.OverviewPage.EViewNews:
            this.form.setCurrentContainer(this.form.__OA);
            break;
        case webfrontend.gui.alliance.OverviewPage.EViewMarkers:
            this.form.setCurrentContainer(this.form.__OB);
            break;
        case webfrontend.gui.alliance.OverviewPage.EViewProfile:
            this.form.setCurrentContainer(this.form.__OC);
            break;
        case webfrontend.gui.alliance.OverviewPage.EViewInvitations:
            this.form.setCurrentContainer(this.form.__Op);
            break;
        case webfrontend.gui.alliance.OverviewPage.EViewProperties:
            this.form.setCurrentContainer(this.form.__OD);
            break;
        default:
            this.form.setCurrentContainer(null)
    }
    n.getTarget().getValue() == !1 && n.getTarget().setValue(!0)
}

function getUIItem(t) {
    switch (t) {
        case ClientLib.Data.Missions.PATH.WDG_EDITDESC:
            return this.__OI.fireEvent(n), this.__OD.getUIItem(t)
    }
    return null
}