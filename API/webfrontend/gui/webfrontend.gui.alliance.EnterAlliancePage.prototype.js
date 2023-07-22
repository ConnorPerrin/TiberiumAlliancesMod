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

function triggerAppear() {
    this.__Bf.schedule()
}

function _onAppearFake() {
    this.__Oi.setValue(t);
    this.__Oj.setValue(t);
    this.__Ok = !1;
    this.__Om.setEnabled(!1);
    this.__Ol.setVisibility(n);
    this.__Oh._onAppearFake()
}

function _onDisappearFake() {
    this.__Oh._onDisappearFake()
}

function _onClickCreateAlliance() {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(d, {
        name: this.__Oi.getValue().trim(),
        tag: this.__Oj.getValue().trim()
    }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this._onAllianceCreate), null)
}

function _onAllianceCreate(t, i) {
    if (i != null)
        if (i.r) {
            this.__Ol.setVisibility(f);
            switch (i.r) {
                case ClientLib.Base.EErrorCode.DuplicateName:
                    this.__Ol.setValue(this.tr(c));
                    break;
                case ClientLib.Base.EErrorCode.InvalidName:
                    this.__Ol.setValue(this.tr(ot));
                    break;
                case ClientLib.Base.EErrorCode.InvalidShortName:
                    this.__Ol.setValue(this.tr(ct));
                    break;
                case ClientLib.Base.EErrorCode.DuplicateShortName:
                    this.__Ol.setValue(this.tr(tt));
                    break;
                default:
                    this.__Ol.setValue(this.tr(a))
            }
            this.__Om.setEnabled(!1)
        } else this.__Ol.setVisibility(n)
}

function _onAllianceNameInput() {
    var u = !1,
        i = t;
    this.__Oi.getValue().length < 6 ? i = this.tr(p) : this.__Oi.getValue().length > 20 ? i = this.tr(k) : this.__Oi.getValue().match(new RegExp(r + ClientLib.Data.MainData.GetInstance().get_Server().get_AllowedLetters() + o)) ? i = this.tr(nt) : this.__Oj.getValue().match(new RegExp(r + ClientLib.Data.MainData.GetInstance().get_Server().get_AllowedLetters() + o)) ? i = this.tr(w) : this.__Oj.getValue().length < 3 && this.__Ok ? i = this.tr(ut) : u = !0;
    this.__Ol.setValue(i);
    u ? (this.__Oj.getValue().length > 0 && this.__Om.setEnabled(!0), this.__Ol.setVisibility(n)) : (this.__Om.setEnabled(!1), this.__Ol.setVisibility(f))
}

function _onAllianceAbbreviationInput() {
    this.__Ok = !0;
    this._onAllianceNameInput()
}