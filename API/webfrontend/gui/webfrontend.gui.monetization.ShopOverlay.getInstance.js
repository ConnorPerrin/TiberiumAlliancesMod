function getStartTab anonymous() {
    this.getStartTab.$$install && this.getStartTab.$$install();
    return this.getStartTab.apply(this, arguments);
}

function setStartTab anonymous() {
    this.setStartTab.$$install && this.setStartTab.$$install.call(this);
    return this.setStartTab.apply(this, arguments);
}

function resetStartTab() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeStartTab() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeStartTab() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function set_SwitchTabByChildIndex(n) {
    var t = this.__GQ.getChildren();
    n >= 0 && n < t.length && this.__GQ.setSelection([t[n]])
}

function openCapacityCategoryTab(n) {
    this.setStartTab(this.__baS);
    this.open();
    this.__baS.openItemCategory(n)
}

function setEnabledPlayerBaseFilter(n) {
    n && this.__baN.getChildren().length > 1 ? (this.__baN.setEnabled(!0), this.__baN.setToolTipText(this.tr(u))) : (this.__baN.setEnabled(!1), this.__baN.getChildren().length > 1 ? this.__baN.setToolTipText(this.tr(y)) : this.__baN.setToolTipText(this.tr(it)))
}

function _activate() {
    var t, i;
    this.__baU = -1;
    this.__baM.removeListener(n, this.__bbd, this);
    this.__baM.setSelection([this.__baW]);
    this.__baM.addListener(n, this.__bbd, this);
    this.__baQ.setFilterLevel(-1);
    this.__baQ.setFilterLevelItem(this.__baW);
    this.__baQ.activate(!1);
    this.__baR.setFilterLevel(-1);
    this.__baR.setFilterLevelItem(this.__baW);
    this.__baR.activate(!1);
    this.__baS.setFilterLevel(-1);
    this.__baS.setFilterLevelItem(this.__baW);
    this.__baS.activate(!1);
    this.getStartTab() == null && this.setStartTab(this.__baQ);
    this.__GQ.setSelection([this.getStartTab()]);
    this.getStartTab().activate(!0);
    this.setStartTab(this.__baQ);
    this.setEnabledPlayerBaseFilter(!0);
    t = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId();
    this.__baN.setModelSelection([t]);
    this.__bbe();
    this.__ur();
    i = ClientLib.Data.MainData.GetInstance().get_Player();
    i.get_IsSubstituted() ? (this.__baJ.setEnabled(!1), this.__baJ.setToolTipText(this.tr(ht))) : (this.__baJ.setEnabled(!0), this.__baJ.setToolTipText(null))
}

function _deactivate() {}
qx.ui.co _bgrScalerntainer.Composite[11542 - 0] qx.ui.co _clientAreantainer.Composite[11544 - 0] webfront _closeButtonend.ui.SoundButton[11545 - 0] qx.ui.ba _headerImagesic.Image[11543 - 0] qx.ui.ba _titlesic.Label[11547 - 0]