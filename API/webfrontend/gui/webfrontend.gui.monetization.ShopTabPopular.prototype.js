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
    webfrontend.gui.monetization.ShopTabBase.prototype.activate.call(this, n)
}

function updateWindow() {
    var r = ClientLib.Data.MainData.GetInstance().get_ShopCatalog(),
        i = r.GetProductsByCategory(ClientLib.Data.EShopCategory.ESC_Popular),
        n;
    i != null && i.length > 0 ? (this.__bbl.setEnabled(!0), this.__bbl.resetToolTipText()) : (this.__bbl.setEnabled(!1), this.__bbl.setToolTipText(this.tr(t)));
    n = r.GetProductsByCategory(ClientLib.Data.EShopCategory.ESC_Bundles);
    n != null && n.length > 0 ? (this.__bbj.setEnabled(!0), this.__bbj.resetToolTipText()) : (this.__bbj.setEnabled(!1), this.__bbj.setToolTipText(this.tr(t)));
    i != null && i.length > 0 ? this.__bbk.setSelection([this.__bbl]) : n != null && n.length > 0 && this.__bbk.setSelection([this.__bbj]);
    webfrontend.gui.monetization.ShopTabBase.prototype.updateWindow.call(this)
}

function createItems(n) {
    var i, f, r, u, t;
    if (webfrontend.gui.monetization.ShopTabBase.prototype.createItems.call(this, n), this._contItemList != null)
        if (i = [], f = ClientLib.Data.MainData.GetInstance().get_ShopCatalog(), this.__bbj.getValue()) {
            if (r = f.GetProductsByCategory(ClientLib.Data.EShopCategory.ESC_Bundles), r != null && r.length > 0) {
                for (t = 0; t < r.length; t++)(r[t].e == 0 || r[t].e > ClientLib.Data.MainData.GetInstance().get_Time().GetJSStepTimeGetTime(ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep())) && i.push(r[t]);
                for (t = 0; t < i.length; t++) t < this._itemPanels.length ? (this._itemPanels[t].updateContent(i[t]), this._itemPanels[t].show()) : (u = new webfrontend.gui.monetization.ShopBundle(i[t], this.__bbh, this), this._contItemList.add(u, {
                    flex: 1
                }), this._itemPanels.push(u));
                if (this._itemPanels.length > i.length)
                    for (t = i.length; t < this._itemPanels.length; t++) this._itemPanels[t].exclude()
            }
        } else if (r = f.GetProductsByCategory(ClientLib.Data.EShopCategory.ESC_Popular), r != null && r.length > 0) {
        for (t = 0; t < r.length; t++) i.push(r[t]);
        for (t = 0; t < i.length; t++) t < this._itemPanels.length ? (this._itemPanels[t].updateContent(i[t]), this._itemPanels[t].show()) : (u = new webfrontend.gui.monetization.ShopProduct(i[t], this._itemTooltip, this), this._contItemList.add(u, {
            flex: 1
        }), this._itemPanels.push(u));
        if (this._itemPanels.length > i.length)
            for (t = i.length; t < this._itemPanels.length; t++) this._itemPanels[t].exclude()
    }
    webfrontend.gui.monetization.ShopOverlay.getInstance().setEnabledPlayerBaseFilter(!0)
}

function _loadLayout() {
    webfrontend.gui.monetization.ShopTabBase.prototype._loadLayout.call(this);
    var t = webfrontend.gui.layout.Loader.getInstance(),
        i = n;
    this.__bbl = t.getElement(this, i, f);
    this.__bbj = t.getElement(this, i, r);
    this.__bbl.setToolTipText(this.tr(l));
    this.__bbj.setToolTipText(this.tr(s));
    this.__bbk = new qx.ui.form.RadioGroup;
    this.__bbk.setAllowEmptySelection(!1);
    this.__bbl.setGroup(this.__bbk);
    this.__bbj.setGroup(this.__bbk);
    this.__bbk.addListener(h, this.__bbm, this)
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
    webfrontend.gui.monetization.ShopTabBase.prototype.activate.call(this, n)
}

function updateWindow() {
    var r = ClientLib.Data.MainData.GetInstance().get_ShopCatalog(),
        i = r.GetProductsByCategory(ClientLib.Data.EShopCategory.ESC_Popular),
        n;
    i != null && i.length > 0 ? (this.__bbl.setEnabled(!0), this.__bbl.resetToolTipText()) : (this.__bbl.setEnabled(!1), this.__bbl.setToolTipText(this.tr(t)));
    n = r.GetProductsByCategory(ClientLib.Data.EShopCategory.ESC_Bundles);
    n != null && n.length > 0 ? (this.__bbj.setEnabled(!0), this.__bbj.resetToolTipText()) : (this.__bbj.setEnabled(!1), this.__bbj.setToolTipText(this.tr(t)));
    i != null && i.length > 0 ? this.__bbk.setSelection([this.__bbl]) : n != null && n.length > 0 && this.__bbk.setSelection([this.__bbj]);
    webfrontend.gui.monetization.ShopTabBase.prototype.updateWindow.call(this)
}

function _loadLayout() {
    webfrontend.gui.monetization.ShopTabBase.prototype._loadLayout.call(this);
    var t = webfrontend.gui.layout.Loader.getInstance(),
        i = n;
    this.__bbl = t.getElement(this, i, f);
    this.__bbj = t.getElement(this, i, r);
    this.__bbl.setToolTipText(this.tr(l));
    this.__bbj.setToolTipText(this.tr(s));
    this.__bbk = new qx.ui.form.RadioGroup;
    this.__bbk.setAllowEmptySelection(!1);
    this.__bbl.setGroup(this.__bbk);
    this.__bbj.setGroup(this.__bbk);
    this.__bbk.addListener(h, this.__bbm, this)
}

function createItems(n) {
    var i, f, r, u, t;
    if (webfrontend.gui.monetization.ShopTabBase.prototype.createItems.call(this, n), this._contItemList != null)
        if (i = [], f = ClientLib.Data.MainData.GetInstance().get_ShopCatalog(), this.__bbj.getValue()) {
            if (r = f.GetProductsByCategory(ClientLib.Data.EShopCategory.ESC_Bundles), r != null && r.length > 0) {
                for (t = 0; t < r.length; t++)(r[t].e == 0 || r[t].e > ClientLib.Data.MainData.GetInstance().get_Time().GetJSStepTimeGetTime(ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep())) && i.push(r[t]);
                for (t = 0; t < i.length; t++) t < this._itemPanels.length ? (this._itemPanels[t].updateContent(i[t]), this._itemPanels[t].show()) : (u = new webfrontend.gui.monetization.ShopBundle(i[t], this.__bbh, this), this._contItemList.add(u, {
                    flex: 1
                }), this._itemPanels.push(u));
                if (this._itemPanels.length > i.length)
                    for (t = i.length; t < this._itemPanels.length; t++) this._itemPanels[t].exclude()
            }
        } else if (r = f.GetProductsByCategory(ClientLib.Data.EShopCategory.ESC_Popular), r != null && r.length > 0) {
        for (t = 0; t < r.length; t++) i.push(r[t]);
        for (t = 0; t < i.length; t++) t < this._itemPanels.length ? (this._itemPanels[t].updateContent(i[t]), this._itemPanels[t].show()) : (u = new webfrontend.gui.monetization.ShopProduct(i[t], this._itemTooltip, this), this._contItemList.add(u, {
            flex: 1
        }), this._itemPanels.push(u));
        if (this._itemPanels.length > i.length)
            for (t = i.length; t < this._itemPanels.length; t++) this._itemPanels[t].exclude()
    }
    webfrontend.gui.monetization.ShopOverlay.getInstance().setEnabledPlayerBaseFilter(!0)
}

function _createSpecialOfferPanel(t) {
    var r = webfrontend.gui.layout.Loader.getInstance(),
        u = r.getLayout(a),
        f = n,
        s = r.getElement(u, f, o),
        h = r.getElement(u, f, i),
        l = r.getElement(u, f, c),
        v = webfrontend.gui.Util.generateItemInfos(t);
    return h.setValue(v.dn), l.setSource(e + t.ic), s
}