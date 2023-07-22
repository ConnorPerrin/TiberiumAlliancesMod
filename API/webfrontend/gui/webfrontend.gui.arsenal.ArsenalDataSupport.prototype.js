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
    webfrontend.gui.arsenal.ArsenalDataBase.prototype.updateWindow.call(this, n);
    this.__bJO.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(n.get_CalibrationRange()));
    this.__Gx.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(n.get_CalibrationTime()));
    this.__bKH(n)
}

function _loadLayout() {
    webfrontend.gui.arsenal.ArsenalDataBase.prototype._loadLayout.call(this);
    var n = webfrontend.gui.layout.Loader.getInstance(),
        w = s;
    this.__bJO = n.getElement(this, w, u);
    this.__Gx = n.getElement(this, w, o);
    this.__bKv = n.getElement(this, w, r);
    this.__bKw = n.getElement(this, w, c);
    this.__bKx = n.getElement(this, w, l);
    this.__bKy = n.getElement(this, w, a);
    this.__bKz = n.getElement(this, w, t);
    this.__bKA = n.getElement(this, w, e);
    this.__bKB = n.getElement(this, w, y);
    this.__bKC = n.getElement(this, w, v);
    this.__bKD = n.getElement(this, w, i);
    this.__bKE = n.getElement(this, w, p);
    this.__bKF = n.getElement(this, w, h);
    this.__bKG = n.getElement(this, w, f)
}

function _onChangeLevel() {
    var n = webfrontend.gui.arsenal.ArsenalMainWindow.getInstance();
    n.setEntityLevel(this._spinLevel.getValue())
}

function _onChangeRepairBuildingLevel() {
    var n = webfrontend.gui.arsenal.ArsenalMainWindow.getInstance();
    n.setRepairBuildingLevel(this._spinTechLevel.getValue())
}

function updateWindow(n) {
    webfrontend.gui.arsenal.ArsenalDataBase.prototype.updateWindow.call(this, n);
    this.__bJO.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(n.get_CalibrationRange()));
    this.__Gx.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(n.get_CalibrationTime()));
    this.__bKH(n)
}

function _loadLayout() {
    webfrontend.gui.arsenal.ArsenalDataBase.prototype._loadLayout.call(this);
    var n = webfrontend.gui.layout.Loader.getInstance(),
        w = s;
    this.__bJO = n.getElement(this, w, u);
    this.__Gx = n.getElement(this, w, o);
    this.__bKv = n.getElement(this, w, r);
    this.__bKw = n.getElement(this, w, c);
    this.__bKx = n.getElement(this, w, l);
    this.__bKy = n.getElement(this, w, a);
    this.__bKz = n.getElement(this, w, t);
    this.__bKA = n.getElement(this, w, e);
    this.__bKB = n.getElement(this, w, y);
    this.__bKC = n.getElement(this, w, v);
    this.__bKD = n.getElement(this, w, i);
    this.__bKE = n.getElement(this, w, p);
    this.__bKF = n.getElement(this, w, h);
    this.__bKG = n.getElement(this, w, f)
}