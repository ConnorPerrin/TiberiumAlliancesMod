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

function updateWindow(r) {
    var l, s, w, b, e, o, v, k, y, h, d, p;
    if (webfrontend.gui.arsenal.ArsenalDataBase.prototype.updateWindow.call(this, r), r.get_Faction() == ClientLib.Base.EFactionType.FORFaction) this.__bKd.exclude(), l = r.get_RepairCost().l, this.__bKf.updateResourceCosts(l), l.length > 0 ? (this.__bKc.show(), this.__bKe.show()) : (this.__bKc.exclude(), this.__bKe.exclude());
    else {
        this._lblHitpoints != null && this._lblHitpoints.setToolTipText(this.tr(i));
        this.__bKe.exclude();
        this.__bKc.exclude();
        this.__bKd.isVisible() || this.__bKd.show();
        s = r.get_Modifiers().d;
        w = this.__bKi(s);
        this.__bKd.removeAll();
        for (b in s) e = s[b], this.__bKg(e.ModifierType) || w && e.ModifierType == ClientLib.Base.EModifierType.CrystalStorage || (o = (new qx.ui.container.Composite).set({
            layout: new qx.ui.layout.HBox(5).set({
                alignY: a
            })
        }), v = this.__bKh(e, s), v != n ? (h = new qx.ui.basic.Label(v).set({
            rich: !0
        }), h.setToolTipText(this.tr(t)), o.add(h)) : (k = e.IsPercent ? f : n, y = new qx.ui.basic.Label(e.Name + c), y.setFont(u), h = new qx.ui.basic.Label(webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(e.Value) + k), h.setToolTipText(this.tr(t)), d = new qx.ui.basic.Image(e.ImgPath), o.add(y), o.add(h), o.add(d), e.ModifierType == ClientLib.Base.EModifierType.TiberiumStorage && (p = new qx.ui.basic.Image(s[ClientLib.Base.EModifierType.CrystalStorage].ImgPath), p.setMarginLeft(-10), o.add(p))), this.__bKd.add(o))
    }
}

function _loadLayout() {
    webfrontend.gui.arsenal.ArsenalDataBase.prototype._loadLayout.call(this);
    var n = webfrontend.gui.layout.Loader.getInstance(),
        t = e;
    this.__bKc = n.getElement(this, t, o);
    this.__bKd = n.getElement(this, t, s);
    this.__bKe = n.getElement(this, t, l);
    this.__bKf = new webfrontend.gui.widgets.ResourceCostsBox({
        showQuickBuy: !1
    });
    this.__bKc.add(this.__bKf)
}

function _onChangeLevel() {
    var n = webfrontend.gui.arsenal.ArsenalMainWindow.getInstance();
    n.setEntityLevel(this._spinLevel.getValue())
}

function _onChangeRepairBuildingLevel() {
    var n = webfrontend.gui.arsenal.ArsenalMainWindow.getInstance();
    n.setRepairBuildingLevel(this._spinTechLevel.getValue())
}

function getBuilding anonymous() {
    this.getBuilding.$$install && this.getBuilding.$$install();
    return this.getBuilding.apply(this, arguments);
}

function setBuilding anonymous() {
    this.setBuilding.$$install && this.setBuilding.$$install.call(this);
    return this.setBuilding.apply(this, arguments);
}

function resetBuilding() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initBuilding() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeBuilding() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeBuilding() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function updateWindow(r) {
    var l, s, w, b, e, o, v, k, y, h, d, p;
    if (webfrontend.gui.arsenal.ArsenalDataBase.prototype.updateWindow.call(this, r), r.get_Faction() == ClientLib.Base.EFactionType.FORFaction) this.__bKd.exclude(), l = r.get_RepairCost().l, this.__bKf.updateResourceCosts(l), l.length > 0 ? (this.__bKc.show(), this.__bKe.show()) : (this.__bKc.exclude(), this.__bKe.exclude());
    else {
        this._lblHitpoints != null && this._lblHitpoints.setToolTipText(this.tr(i));
        this.__bKe.exclude();
        this.__bKc.exclude();
        this.__bKd.isVisible() || this.__bKd.show();
        s = r.get_Modifiers().d;
        w = this.__bKi(s);
        this.__bKd.removeAll();
        for (b in s) e = s[b], this.__bKg(e.ModifierType) || w && e.ModifierType == ClientLib.Base.EModifierType.CrystalStorage || (o = (new qx.ui.container.Composite).set({
            layout: new qx.ui.layout.HBox(5).set({
                alignY: a
            })
        }), v = this.__bKh(e, s), v != n ? (h = new qx.ui.basic.Label(v).set({
            rich: !0
        }), h.setToolTipText(this.tr(t)), o.add(h)) : (k = e.IsPercent ? f : n, y = new qx.ui.basic.Label(e.Name + c), y.setFont(u), h = new qx.ui.basic.Label(webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(e.Value) + k), h.setToolTipText(this.tr(t)), d = new qx.ui.basic.Image(e.ImgPath), o.add(y), o.add(h), o.add(d), e.ModifierType == ClientLib.Base.EModifierType.TiberiumStorage && (p = new qx.ui.basic.Image(s[ClientLib.Base.EModifierType.CrystalStorage].ImgPath), p.setMarginLeft(-10), o.add(p))), this.__bKd.add(o))
    }
}

function _loadLayout() {
    webfrontend.gui.arsenal.ArsenalDataBase.prototype._loadLayout.call(this);
    var n = webfrontend.gui.layout.Loader.getInstance(),
        t = e;
    this.__bKc = n.getElement(this, t, o);
    this.__bKd = n.getElement(this, t, s);
    this.__bKe = n.getElement(this, t, l);
    this.__bKf = new webfrontend.gui.widgets.ResourceCostsBox({
        showQuickBuy: !1
    });
    this.__bKc.add(this.__bKf)
}