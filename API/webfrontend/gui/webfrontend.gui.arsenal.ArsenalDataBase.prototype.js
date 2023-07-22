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

function getLevel anonymous() {
    this.getLevel.$$install && this.getLevel.$$install();
    return this.getLevel.apply(this, arguments);
}

function setLevel anonymous() {
    this.setLevel.$$install && this.setLevel.$$install.call(this);
    return this.setLevel.apply(this, arguments);
}

function resetLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRepairBuildingLevel anonymous() {
    this.getRepairBuildingLevel.$$install && this.getRepairBuildingLevel.$$install();
    return this.getRepairBuildingLevel.apply(this, arguments);
}

function setRepairBuildingLevel anonymous() {
    this.setRepairBuildingLevel.$$install && this.setRepairBuildingLevel.$$install.call(this);
    return this.setRepairBuildingLevel.apply(this, arguments);
}

function resetRepairBuildingLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRepairBuildingLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRepairBuildingLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRepairBuildingLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function updateWindow(n) {
    var t, i;
    this._contScroll.scrollToY(0);
    t = webfrontend.gui.arsenal.ArsenalMainWindow.getInstance();
    this._spinLevel.setValue(t.getEntityLevel() > this._spinLevel.getMaximum() ? this._spinLevel.getMaximum() : t.getEntityLevel());
    this._imgUnit != null && this._imgUnit.setSource(e + n.get_SmallPreviewImagePath());
    this._lblName.setValue(n.get_Name());
    this._lblDesc.setValue(n.get_Description());
    this._lblHitpoints != null && this._lblHitpoints.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(n.get_Hitpoints()));
    this._lblMaxRepairTime != null && (n.get_Faction() == ClientLib.Base.EFactionType.FORFaction || n.get_PlacementType() == ClientLib.Base.EPlacementType.Defense ? this.__bJL(!1) : (this.__bJL(!0), this._lblMaxRepairTime.setValue(webfrontend.phe.cnc.Util.getTimespanString(n.get_CalculatedRepairTime())), this._lblMaxRepairTime.setToolTipText(this.tr(r)), this._spinTechLevel.setValue(t.getRepairBuildingLevel()), i = n.get_RepairBuildingName(), i != u ? this._lblTechBuilding.setValue(i) : this._lblTechBuilding.exclude()))
}

function _loadLayout() {
    var r = webfrontend.gui.layout.Loader.getInstance(),
        u = f;
    this._imgUnit = r.getElement(this, u, v);
    this._spinLevel = r.getElement(this, u, y);
    this._spinTechLevel = r.getElement(this, u, o);
    this._lblName = r.getElement(this, u, t);
    this._lblDesc = r.getElement(this, u, c);
    this._lblHitpoints = r.getElement(this, u, a);
    this._lblMaxRepairTime = r.getElement(this, u, i);
    this._lblMaxRepairTimeTitle = r.getElement(this, u, h);
    this._lblTechBuilding = r.getElement(this, u, l);
    this._contScroll = r.getElement(this, u, s);
    this._spinLevel != null && (this._spinLevel.addListener(n, this._onChangeLevel, this), this._spinLevel.setMaximum(ClientLib.Data.MainData.GetInstance().get_Server().get_PlayerUpgradeCap()));
    this._spinTechLevel != null && (this._spinTechLevel.addListener(n, this._onChangeRepairBuildingLevel, this), this._spinTechLevel.setMaximum(ClientLib.Data.MainData.GetInstance().get_Server().get_PlayerUpgradeCap()))
}

function _onChangeLevel() {
    var n = webfrontend.gui.arsenal.ArsenalMainWindow.getInstance();
    n.setEntityLevel(this._spinLevel.getValue())
}

function _onChangeRepairBuildingLevel() {
    var n = webfrontend.gui.arsenal.ArsenalMainWindow.getInstance();
    n.setRepairBuildingLevel(this._spinTechLevel.getValue())
}