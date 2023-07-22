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
    webfrontend.gui.monetization.ShopOverlay.getInstance().setEnabledPlayerBaseFilter(!0)
}

function updateWindow() {
    webfrontend.gui.monetization.ShopTabBase.prototype.updateWindow.call(this)
}

function createItems(n) {
    var i, e, o, r, u, f, t;
    if (webfrontend.gui.monetization.ShopTabBase.prototype.createItems.call(this, n), this._contItemList != null) {
        if (i = new qx.data.Array, n == -1) {
            e = ClientLib.Data.MainData.GetInstance().get_Inventory();
            r = e.get_Items();
            for (u in r.d) o = ClientLib.Base.ItemCategories.GetItemById(u), i.push(o);
            r = ClientLib.Base.ItemCategories.GetAllResourceItems(ClientLib.Data.MainData.GetInstance().get_Player().get_Level());
            for (u in r.d) i.contains(r.d[u]) || i.push(r.d[u])
        } else {
            r = ClientLib.Base.ItemCategories.GetAllResourceItems(n);
            for (u in r.d) i.push(r.d[u])
        }
        for (i.sort(function(n, t) {
                var i, r;
                switch (n.c) {
                    case ClientLib.Base.EItemCategory.ArmyRepairTime:
                        i = 1;
                        break;
                    case ClientLib.Base.EItemCategory.CommandPointGain:
                        i = 2;
                        break;
                    case ClientLib.Base.EItemCategory.TiberiumGain:
                        i = 3;
                        break;
                    case ClientLib.Base.EItemCategory.CrystalGain:
                        i = 4;
                        break;
                    case ClientLib.Base.EItemCategory.PowerGain:
                        i = 5;
                        break;
                    case ClientLib.Base.EItemCategory.CreditGain:
                        i = 6
                }
                switch (t.c) {
                    case ClientLib.Base.EItemCategory.ArmyRepairTime:
                        r = 1;
                        break;
                    case ClientLib.Base.EItemCategory.CommandPointGain:
                        r = 2;
                        break;
                    case ClientLib.Base.EItemCategory.TiberiumGain:
                        r = 3;
                        break;
                    case ClientLib.Base.EItemCategory.CrystalGain:
                        r = 4;
                        break;
                    case ClientLib.Base.EItemCategory.PowerGain:
                        r = 5;
                        break;
                    case ClientLib.Base.EItemCategory.CreditGain:
                        r = 6
                }
                return i == r ? n.v > t.v ? 1 : -1 : i > r ? 1 : -1
            }), t = 0; t < i.length; t++) t < this._itemPanels.length ? (this._itemPanels[t].updateContent(i.getItem(t)), this._itemPanels[t].show()) : (f = new webfrontend.gui.monetization.ShopItem(i.getItem(t), this._itemTooltip, this), this._contItemList.add(f, {
            flex: 1
        }), this._itemPanels.push(f));
        if (this._itemPanels.length > i.length)
            for (t = i.length; t < this._itemPanels.length; t++) this._itemPanels[t].exclude()
    }
}

function _loadLayout() {
    webfrontend.gui.monetization.ShopTabBase.prototype._loadLayout.call(this)
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
    webfrontend.gui.monetization.ShopOverlay.getInstance().setEnabledPlayerBaseFilter(!0)
}

function updateWindow() {
    webfrontend.gui.monetization.ShopTabBase.prototype.updateWindow.call(this)
}

function _loadLayout() {
    webfrontend.gui.monetization.ShopTabBase.prototype._loadLayout.call(this)
}

function createItems(n) {
    var i, e, o, r, u, f, t;
    if (webfrontend.gui.monetization.ShopTabBase.prototype.createItems.call(this, n), this._contItemList != null) {
        if (i = new qx.data.Array, n == -1) {
            e = ClientLib.Data.MainData.GetInstance().get_Inventory();
            r = e.get_Items();
            for (u in r.d) o = ClientLib.Base.ItemCategories.GetItemById(u), i.push(o);
            r = ClientLib.Base.ItemCategories.GetAllResourceItems(ClientLib.Data.MainData.GetInstance().get_Player().get_Level());
            for (u in r.d) i.contains(r.d[u]) || i.push(r.d[u])
        } else {
            r = ClientLib.Base.ItemCategories.GetAllResourceItems(n);
            for (u in r.d) i.push(r.d[u])
        }
        for (i.sort(function(n, t) {
                var i, r;
                switch (n.c) {
                    case ClientLib.Base.EItemCategory.ArmyRepairTime:
                        i = 1;
                        break;
                    case ClientLib.Base.EItemCategory.CommandPointGain:
                        i = 2;
                        break;
                    case ClientLib.Base.EItemCategory.TiberiumGain:
                        i = 3;
                        break;
                    case ClientLib.Base.EItemCategory.CrystalGain:
                        i = 4;
                        break;
                    case ClientLib.Base.EItemCategory.PowerGain:
                        i = 5;
                        break;
                    case ClientLib.Base.EItemCategory.CreditGain:
                        i = 6
                }
                switch (t.c) {
                    case ClientLib.Base.EItemCategory.ArmyRepairTime:
                        r = 1;
                        break;
                    case ClientLib.Base.EItemCategory.CommandPointGain:
                        r = 2;
                        break;
                    case ClientLib.Base.EItemCategory.TiberiumGain:
                        r = 3;
                        break;
                    case ClientLib.Base.EItemCategory.CrystalGain:
                        r = 4;
                        break;
                    case ClientLib.Base.EItemCategory.PowerGain:
                        r = 5;
                        break;
                    case ClientLib.Base.EItemCategory.CreditGain:
                        r = 6
                }
                return i == r ? n.v > t.v ? 1 : -1 : i > r ? 1 : -1
            }), t = 0; t < i.length; t++) t < this._itemPanels.length ? (this._itemPanels[t].updateContent(i.getItem(t)), this._itemPanels[t].show()) : (f = new webfrontend.gui.monetization.ShopItem(i.getItem(t), this._itemTooltip, this), this._contItemList.add(f, {
            flex: 1
        }), this._itemPanels.push(f));
        if (this._itemPanels.length > i.length)
            for (t = i.length; t < this._itemPanels.length; t++) this._itemPanels[t].exclude()
    }
}