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

function updateNumOpenRequests(n) {
    var r = ClientLib.Data.MainData.GetInstance().get_Alliance(),
        t, i;
    if ((!n || n < 0) && (t = r.get_IncomingRelationships(), n = 0, t != null))
        for (i = 0; i < t.length; i++) t[i].IsConfirmed || n++;
    n > 0 && r.get_CanRepresent() ? (this.setLabel(this.tr(h) + v + n.toString() + c), this.__Va.setLabel(this.tr(u) + v + n.toString() + c)) : (this.setLabel(this.tr(h)), this.__Va.setLabel(this.tr(u)))
}

function setAllianceName(n) {
    this.__Oi.setValue(n);
    this.__Vd = !0
}

function triggerAppear() {
    this.__Bf.schedule()
}

function _onAppearFake() {
    this.__Od();
    this.__Vd != !0 && this.__Oi.setValue(t);
    this.__Ol.setValue(t);
    this.__Os || (webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), a, ClientLib.Data.AllianceChange, this, this._onAllianceDetailChanged), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), l, ClientLib.Data.AllianceCanRepresentChange, this, this.__Ve), this.__Os = !0);
    this.getCurrentContainer() && this.getCurrentContainer().triggerAppear && this.getCurrentContainer().triggerAppear()
}

function _onDisappearFake() {
    this.__Vd = !1;
    this.__Os && (webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), a, ClientLib.Data.AllianceChange, this, this._onAllianceDetailChanged), webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), l, ClientLib.Data.AllianceCanRepresentChange, this, this.__Ve), this.__Os = !1);
    this.getCurrentContainer() && this.getCurrentContainer()._onDisappearFake && this.getCurrentContainer()._onDisappearFake()
}

function _onAllianceDetailChanged() {
    this.__Od()
}

function _onClickSwitchView(n) {
    switch (this.type) {
        case webfrontend.gui.alliance.DiplomacyPage.EViewOverview:
            this.form.setCurrentContainer(this.form.__UW);
            break;
        case webfrontend.gui.alliance.DiplomacyPage.EViewRequests:
            this.form.setCurrentContainer(this.form.__UX);
            break;
        default:
            this.form.setCurrentContainer(null)
    }
    n.getTarget().getValue() == !1 && n.getTarget().setValue(!0)
}

function _onClickSendRequest() {
    var u = qx.core.Init.getApplication(),
        r = this.form.__Oi.getValue().trim(),
        f = null,
        e = this.relationshipDropdown.getModelSelection(),
        o;
    e && e.getLength() == 1 && (f = e.getItem(0));
    o = !1;
    r.length < 6 ? (this.form.__Ol.setValue(u.tr(nt)), this.form.__Ol.setVisibility(i)) : r.length > 20 ? (this.form.__Ol.setValue(u.tr(it)), this.form.__Ol.setVisibility(i)) : r.match(new RegExp(b + ClientLib.Data.MainData.GetInstance().get_Server().get_AllowedLetters() + st)) ? (this.form.__Ol.setValue(u.tr(ot)), this.form.__Ol.setVisibility(i)) : (this.form.__Ol.setVisibility(n), this.form.__Ol.setValue(t), o = !0);
    f != null && o && ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(kt, {
        otherAlliance: r,
        relationship: f
    }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this.form, this.form._onAllianceSetRelationship), null)
}

function _onAllianceSetRelationship(n, i) {
    if (i != null)
        if (i != 0) {
            var r = this.tr(pt) + gt;
            switch (i) {
                case ClientLib.Base.EErrorCode.Fail:
                    r += this.tr(k);
                    break;
                case ClientLib.Base.EErrorCode.InvalidArguments:
                    r += this.tr(yt);
                    break;
                case ClientLib.Base.EErrorCode.DuplicateName:
                    r += this.tr(ut);
                    break;
                case ClientLib.Base.EErrorCode.InvalidName:
                    r += this.tr(bt);
                    break;
                case ClientLib.Base.EErrorCode.InsufficientRights:
                    r += this.tr(tt);
                    break;
                case ClientLib.Base.EErrorCode.RelationshipWithSelf:
                    r += this.tr(ft);
                    break;
                case ClientLib.Base.EErrorCode.RelationshipRequestPending:
                    r += this.tr(rt);
                    break;
                case ClientLib.Base.EErrorCode.NoChange:
                    r = t;
                    break;
                default:
                    r += this.tr(ti, i)
            }
            this.__Ol.setValue(r);
            this.__Ol.show()
        } else this.__Ol.setValue(t), this.__Ol.exclude(), this.__Oi.setValue(w)
}