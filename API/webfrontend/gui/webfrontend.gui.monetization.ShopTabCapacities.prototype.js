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

function activate(n) {
    webfrontend.gui.monetization.ShopTabBase.prototype.activate.call(this, n);
    webfrontend.gui.monetization.ShopOverlay.getInstance().setEnabledPlayerBaseFilter(!1)
}

function updateWindow() {
    webfrontend.gui.monetization.ShopTabBase.prototype.updateWindow.call(this)
}

function createItems() {
    var n, t, r, u, i;
    if (webfrontend.gui.monetization.ShopTabBase.prototype.createItems.call(this, 1), this._contItemList != null) {
        n = ClientLib.Base.ItemCategories.GetItemsByCategoryAndLevel(this.__bbw, 1);
        t = 0;
        for (r in n.d) this._itemPanels.length > t ? (this._itemPanels[t].updateContent(n.d[r]), this._itemPanels[t].show()) : (u = new webfrontend.gui.monetization.ShopItem(n.d[r], this._itemTooltip, this), this._contItemList.add(u, {
            flex: 1
        }), this._itemPanels.push(u)), t++;
        if (this._itemPanels.length > n.c)
            for (i = n.c; i < this._itemPanels.length; i++) this._itemPanels[i].exclude()
    }
}

function _loadLayout() {
    webfrontend.gui.monetization.ShopTabBase.prototype._loadLayout.call(this);
    var h = webfrontend.gui.layout.Loader.getInstance(),
        c = i,
        n = new qx.ui.form.RadioGroup;
    n.setAllowEmptySelection(!1);
    n.addListener(e, this.__bbA, this);
    this.__bbx = h.getElement(this, c, r);
    this.__bbz = h.getElement(this, c, t);
    this.__bby = h.getElement(this, c, f);
    this.__bbx.setToolTipText(this.tr(o));
    this.__bbz.setToolTipText(this.tr(u));
    this.__bby.setToolTipText(this.tr(s));
    this.__bbx.setGroup(n);
    this.__bbz.setGroup(n);
    this.__bby.setGroup(n)
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

function activate(n) {
    webfrontend.gui.monetization.ShopTabBase.prototype.activate.call(this, n);
    webfrontend.gui.monetization.ShopOverlay.getInstance().setEnabledPlayerBaseFilter(!1)
}

function openItemCategory(n) {
    this.__bbx.setValue(!1);
    this.__bby.setValue(!1);
    this.__bbz.setValue(!1);
    switch (n) {
        case ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity:
            this.__bby.setValue(!0);
            break;
        case ClientLib.Base.EItemCategory.CommandPointCapacityBuff:
            this.__bbx.setValue(!0);
            break;
        case ClientLib.Base.EItemCategory.BonusPackageStorage:
            this.__bbz.setValue(!0)
    }
    this.updateWindow()
}

function updateWindow() {
    webfrontend.gui.monetization.ShopTabBase.prototype.updateWindow.call(this)
}

function _loadLayout() {
    webfrontend.gui.monetization.ShopTabBase.prototype._loadLayout.call(this);
    var h = webfrontend.gui.layout.Loader.getInstance(),
        c = i,
        n = new qx.ui.form.RadioGroup;
    n.setAllowEmptySelection(!1);
    n.addListener(e, this.__bbA, this);
    this.__bbx = h.getElement(this, c, r);
    this.__bbz = h.getElement(this, c, t);
    this.__bby = h.getElement(this, c, f);
    this.__bbx.setToolTipText(this.tr(o));
    this.__bbz.setToolTipText(this.tr(u));
    this.__bby.setToolTipText(this.tr(s));
    this.__bbx.setGroup(n);
    this.__bbz.setGroup(n);
    this.__bby.setGroup(n)
}

function createItems() {
    var n, t, r, u, i;
    if (webfrontend.gui.monetization.ShopTabBase.prototype.createItems.call(this, 1), this._contItemList != null) {
        n = ClientLib.Base.ItemCategories.GetItemsByCategoryAndLevel(this.__bbw, 1);
        t = 0;
        for (r in n.d) this._itemPanels.length > t ? (this._itemPanels[t].updateContent(n.d[r]), this._itemPanels[t].show()) : (u = new webfrontend.gui.monetization.ShopItem(n.d[r], this._itemTooltip, this), this._contItemList.add(u, {
            flex: 1
        }), this._itemPanels.push(u)), t++;
        if (this._itemPanels.length > n.c)
            for (i = n.c; i < this._itemPanels.length; i++) this._itemPanels[i].exclude()
    }
}