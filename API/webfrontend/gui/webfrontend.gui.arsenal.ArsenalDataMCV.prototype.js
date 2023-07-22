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

function updateWindow(t) {
    webfrontend.gui.arsenal.ArsenalDataBase.prototype.updateWindow.call(this, t);
    this.__bKm.setValue(this.tr(i));
    this.__bKn.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(t.get_MaxLevel()));
    this.__bKo.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(t.get_MaxBaseFoundDistance()));
    this.__bKs.setValue(n);
    this.__bKu.updateResourceCosts(t.get_StartingResources().l)
}

function _loadLayout() {
    webfrontend.gui.arsenal.ArsenalDataBase.prototype._loadLayout.call(this);
    var n = webfrontend.gui.layout.Loader.getInstance(),
        i = u;
    this.__bKm = n.getElement(this, i, t);
    this.__bKn = n.getElement(this, i, r);
    this.__bKo = n.getElement(this, i, f);
    this.__bKs = n.getElement(this, i, e);
    this.__bKt = n.getElement(this, i, o);
    this.__bKu = new webfrontend.gui.widgets.ResourceCostsBox({
        showQuickBuy: !1
    });
    this.__bKt.add(this.__bKu)
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

function updateWindow(t) {
    webfrontend.gui.arsenal.ArsenalDataBase.prototype.updateWindow.call(this, t);
    this.__bKm.setValue(this.tr(i));
    this.__bKn.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(t.get_MaxLevel()));
    this.__bKo.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(t.get_MaxBaseFoundDistance()));
    this.__bKs.setValue(n);
    this.__bKu.updateResourceCosts(t.get_StartingResources().l)
}

function _loadLayout() {
    webfrontend.gui.arsenal.ArsenalDataBase.prototype._loadLayout.call(this);
    var n = webfrontend.gui.layout.Loader.getInstance(),
        i = u;
    this.__bKm = n.getElement(this, i, t);
    this.__bKn = n.getElement(this, i, r);
    this.__bKo = n.getElement(this, i, f);
    this.__bKs = n.getElement(this, i, e);
    this.__bKt = n.getElement(this, i, o);
    this.__bKu = new webfrontend.gui.widgets.ResourceCostsBox({
        showQuickBuy: !1
    });
    this.__bKt.add(this.__bKu)
}