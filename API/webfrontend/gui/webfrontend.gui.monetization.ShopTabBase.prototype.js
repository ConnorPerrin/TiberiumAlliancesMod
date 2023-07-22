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

function getFilterLevel anonymous(value) {
    if (this.$$runtime_filterLevel !== undefined) return this.$$runtime_filterLevel;
    if (this.$$user_filterLevel !== undefined) return this.$$user_filterLevel;
    else return this.$$init_filterLevel;
}

function setFilterLevel anonymous(value) {
    this.$$setFilterLevelImpl.apply(this, arguments);
    return value;
}

function resetFilterLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeFilterLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeFilterLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getFilterLevelItem anonymous() {
    this.getFilterLevelItem.$$install && this.getFilterLevelItem.$$install();
    return this.getFilterLevelItem.apply(this, arguments);
}

function setFilterLevelItem anonymous(value) {
    this.$$setFilterLevelItemImpl.apply(this, arguments);
    return value;
}

function resetFilterLevelItem() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeFilterLevelItem() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeFilterLevelItem() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCurrentCityId anonymous(value) {
    if (this.$$runtime_currentCityId !== undefined) return this.$$runtime_currentCityId;
    if (this.$$user_currentCityId !== undefined) return this.$$user_currentCityId;
    else return this.$$init_currentCityId;
}

function setCurrentCityId anonymous(value) {
    this.$$setCurrentCityIdImpl.apply(this, arguments);
    return value;
}

function resetCurrentCityId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCurrentCityId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCurrentCityId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCurrentCityId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function activate(f) {
    f && !this.__bad ? (webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Player(), t, ClientLib.Data.PlayerChange, this, this._onPlayerLevelChange), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Inventory(), n, ClientLib.Data.OnInventoryChange, this, this._onInventoryChange), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Inventory(), r, ClientLib.Data.OnInventoryChange, this, this._onInventoryChange), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_ShopCatalog(), u, ClientLib.Data.OnShopCatalogChange, this, this._onShopCatalogChange), webfrontend.phe.cnc.base.Timer.getInstance().addListener(i, this._onTick, this), this._onPlayerLevelChange(), this._onInventoryChange(), this._onShopCatalogChange()) : f || (webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Player(), t, ClientLib.Data.PlayerChange, this, this._onPlayerLevelChange), webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Inventory(), n, ClientLib.Data.OnInventoryChange, this, this._onInventoryChange), webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Inventory(), r, ClientLib.Data.OnInventoryChange, this, this._onInventoryChange), webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_ShopCatalog(), u, ClientLib.Data.OnShopCatalogChange, this, this._onShopCatalogChange), webfrontend.phe.cnc.base.Timer.getInstance().removeListener(i, this._onTick, this));
    this.__bad = f
}

function updateWindow() {
    this.createItems(this.getFilterLevel())
}

function createItems(n) {
    return n == this.getFilterLevel() ? !1 : (this.setFilterLevel(n), !0)
}

function _loadLayout() {
    var n = webfrontend.gui.layout.Loader.getInstance(),
        t = f;
    this._contItemList = n.getElement(this, t, e)
}

function _onShopCatalogChange() {
    this.createItems(this.getFilterLevel())
}

function _onPlayerLevelChange() {
    this.createItems(this.getFilterLevel());
    for (var n = 0; n < this._itemPanels.length; n++) this._itemPanels[n]._onPlayerLevelChange()
}

function _onInventoryChange() {
    this.createItems(this.getFilterLevel());
    for (var n = 0; n < this._itemPanels.length; n++) this._itemPanels[n]._onInventoryChange()
}

function _onTick() {
    for (var n = 0; n < this._itemPanels.length; n++) this._itemPanels[n]._onTick()
}

function _applyCurrentCityId() {
    for (var n = 0; n < this._itemPanels.length; n++) this._itemPanels[n].checkUse()
}