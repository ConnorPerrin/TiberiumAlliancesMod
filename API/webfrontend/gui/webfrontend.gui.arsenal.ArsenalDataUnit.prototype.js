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

function updateWindow(i) {
    var r;
    webfrontend.gui.arsenal.ArsenalDataBase.prototype.updateWindow.call(this, i);
    this.__bKb(i);
    this.__bJP.setValue(i.get_PlacementType() == ClientLib.Base.EPlacementType.Defense && webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(i.get_Speed()) == 0 ? this.tr(t) : webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(i.get_Speed()));
    this.__bJP.setToolTipText(this.tr(ut));
    this.__bJQ.setValue(n);
    this.__bJR.setValue(n);
    this.__bJS.setValue(n);
    this.__bJT.setValue(n);
    for (r in i.get_DamageList().d) {
        var o = i.get_DamageList().d[r],
            f = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(o),
            e = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(o);
        r == ClientLib.Base.EArmorType.LightArmorInfantry ? (this.__bJQ.setValue(e), this.__bJQ.setToolTipText(this.tr(u, f))) : r == ClientLib.Base.EArmorType.HeavyArmorVehicles ? (this.__bJR.setValue(e), this.__bJR.setToolTipText(this.tr(l, f))) : r == ClientLib.Base.EArmorType.MediumArmorAir ? (this.__bJS.setValue(e), this.__bJS.setToolTipText(this.tr(et, f))) : r == ClientLib.Base.EArmorType.Structure && (this.__bJT.setValue(e), this.__bJT.setToolTipText(this.tr(g, f)))
    }
    this.__bJU != null && (this.__bJU.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(i.get_RunOverDamage())), this.__bJU.setToolTipText(this.tr(v)));
    this.__bJV != null && (this.__bJV.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(i.get_BaseAmmunition())), this.__bJV.setToolTipText(this.tr(ft)));
    this.__bJW != null && (this.__bJW.setValue(webfrontend.phe.cnc.gui.util.Text.getArmorTypeToText(i.get_ArmorType())), this.__bJW.setToolTipText(this.tr(h)));
    this._lblHitpoints != null && this._lblHitpoints.setToolTipText(this.tr(s))
}

function _loadLayout() {
    webfrontend.gui.arsenal.ArsenalDataBase.prototype._loadLayout.call(this);
    var n = webfrontend.gui.layout.Loader.getInstance(),
        t = tt;
    this.__bJM = n.getElement(this, t, ot);
    this.__bJN = n.getElement(this, t, r);
    this.__bJO = n.getElement(this, t, w);
    this.__bJP = n.getElement(this, t, c);
    this.__bJQ = n.getElement(this, t, rt);
    this.__bJR = n.getElement(this, t, e);
    this.__bJS = n.getElement(this, t, k);
    this.__bJT = n.getElement(this, t, nt);
    this.__bJU = n.getElement(this, t, d);
    this.__bJV = n.getElement(this, t, it);
    this.__bJW = n.getElement(this, t, b);
    this.__bJX = n.getElement(this, t, y);
    this.__bJY = n.getElement(this, t, a);
    this.__bKa = n.getElement(this, t, p)
}

function _onChangeLevel() {
    var n = webfrontend.gui.arsenal.ArsenalMainWindow.getInstance();
    n.setEntityLevel(this._spinLevel.getValue())
}

function _onChangeRepairBuildingLevel() {
    var n = webfrontend.gui.arsenal.ArsenalMainWindow.getInstance();
    n.setRepairBuildingLevel(this._spinTechLevel.getValue())
}

function updateWindow(i) {
    var r;
    webfrontend.gui.arsenal.ArsenalDataBase.prototype.updateWindow.call(this, i);
    this.__bKb(i);
    this.__bJP.setValue(i.get_PlacementType() == ClientLib.Base.EPlacementType.Defense && webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(i.get_Speed()) == 0 ? this.tr(t) : webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(i.get_Speed()));
    this.__bJP.setToolTipText(this.tr(ut));
    this.__bJQ.setValue(n);
    this.__bJR.setValue(n);
    this.__bJS.setValue(n);
    this.__bJT.setValue(n);
    for (r in i.get_DamageList().d) {
        var o = i.get_DamageList().d[r],
            f = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(o),
            e = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(o);
        r == ClientLib.Base.EArmorType.LightArmorInfantry ? (this.__bJQ.setValue(e), this.__bJQ.setToolTipText(this.tr(u, f))) : r == ClientLib.Base.EArmorType.HeavyArmorVehicles ? (this.__bJR.setValue(e), this.__bJR.setToolTipText(this.tr(l, f))) : r == ClientLib.Base.EArmorType.MediumArmorAir ? (this.__bJS.setValue(e), this.__bJS.setToolTipText(this.tr(et, f))) : r == ClientLib.Base.EArmorType.Structure && (this.__bJT.setValue(e), this.__bJT.setToolTipText(this.tr(g, f)))
    }
    this.__bJU != null && (this.__bJU.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(i.get_RunOverDamage())), this.__bJU.setToolTipText(this.tr(v)));
    this.__bJV != null && (this.__bJV.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(i.get_BaseAmmunition())), this.__bJV.setToolTipText(this.tr(ft)));
    this.__bJW != null && (this.__bJW.setValue(webfrontend.phe.cnc.gui.util.Text.getArmorTypeToText(i.get_ArmorType())), this.__bJW.setToolTipText(this.tr(h)));
    this._lblHitpoints != null && this._lblHitpoints.setToolTipText(this.tr(s))
}

function _loadLayout() {
    webfrontend.gui.arsenal.ArsenalDataBase.prototype._loadLayout.call(this);
    var n = webfrontend.gui.layout.Loader.getInstance(),
        t = tt;
    this.__bJM = n.getElement(this, t, ot);
    this.__bJN = n.getElement(this, t, r);
    this.__bJO = n.getElement(this, t, w);
    this.__bJP = n.getElement(this, t, c);
    this.__bJQ = n.getElement(this, t, rt);
    this.__bJR = n.getElement(this, t, e);
    this.__bJS = n.getElement(this, t, k);
    this.__bJT = n.getElement(this, t, nt);
    this.__bJU = n.getElement(this, t, d);
    this.__bJV = n.getElement(this, t, it);
    this.__bJW = n.getElement(this, t, b);
    this.__bJX = n.getElement(this, t, y);
    this.__bJY = n.getElement(this, t, a);
    this.__bKa = n.getElement(this, t, p)
}