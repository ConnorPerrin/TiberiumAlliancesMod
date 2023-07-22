function getReportData anonymous() {
    this.getReportData.$$install && this.getReportData.$$install();
    return this.getReportData.apply(this, arguments);
}

function setReportData anonymous() {
    this.setReportData.$$install && this.setReportData.$$install.call(this);
    return this.setReportData.apply(this, arguments);
}

function resetReportData() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initReportData() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeReportData() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeReportData() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getSimulationData anonymous() {
    this.getSimulationData.$$install && this.getSimulationData.$$install();
    return this.getSimulationData.apply(this, arguments);
}

function setSimulationData anonymous() {
    this.setSimulationData.$$install && this.setSimulationData.$$install.call(this);
    return this.setSimulationData.apply(this, arguments);
}

function resetSimulationData() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initSimulationData() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeSimulationData() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSimulationData() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCityArmyFormation anonymous() {
    this.getCityArmyFormation.$$install && this.getCityArmyFormation.$$install();
    return this.getCityArmyFormation.apply(this, arguments);
}

function setCityArmyFormation anonymous() {
    this.setCityArmyFormation.$$install && this.setCityArmyFormation.$$install.call(this);
    return this.setCityArmyFormation.apply(this, arguments);
}

function resetCityArmyFormation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCityArmyFormation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCityArmyFormation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCityArmyFormation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIsArmyChanged anonymous() {
    this.getIsArmyChanged.$$install && this.getIsArmyChanged.$$install();
    return this.getIsArmyChanged.apply(this, arguments);
}

function setIsArmyChanged anonymous() {
    this.setIsArmyChanged.$$install && this.setIsArmyChanged.$$install.call(this);
    return this.setIsArmyChanged.apply(this, arguments);
}

function resetIsArmyChanged() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIsArmyChanged() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIsArmyChanged() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIsArmyChanged() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleIsArmyChanged anonymous() {
    return this.setIsArmyChanged(!this.getIsArmyChanged())
}

function isIsArmyChanged anonymous() {
    return this.getIsArmyChanged()
}

function getDocked anonymous(value) {
    if (this.$$runtime_Docked !== undefined) return this.$$runtime_Docked;
    if (this.$$user_Docked !== undefined) return this.$$user_Docked;
    else return this.$$init_Docked;
}

function setDocked anonymous() {
    this.setDocked.$$install && this.setDocked.$$install.call(this);
    return this.setDocked.apply(this, arguments);
}

function resetDocked() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initDocked() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeDocked() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDocked() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleDocked anonymous() {
    return this.setDocked(!this.getDocked())
}

function isDocked anonymous() {
    return this.getDocked()
}

function getBarHidden anonymous() {
    this.getBarHidden.$$install && this.getBarHidden.$$install();
    return this.getBarHidden.apply(this, arguments);
}

function setBarHidden anonymous(value) {
    this.$$setBarHiddenImpl.apply(this, arguments);
    return value;
}

function resetBarHidden() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initBarHidden() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeBarHidden() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeBarHidden() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleBarHidden anonymous() {
    return this.setBarHidden(!this.getBarHidden())
}

function isBarHidden anonymous() {
    return this.getBarHidden()
}

function getTextMode anonymous() {
    this.getTextMode.$$install && this.getTextMode.$$install();
    return this.getTextMode.apply(this, arguments);
}

function setTextMode anonymous() {
    this.setTextMode.$$install && this.setTextMode.$$install.call(this);
    return this.setTextMode.apply(this, arguments);
}

function resetTextMode() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initTextMode() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeTextMode() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeTextMode() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleTextMode anonymous() {
    return this.setTextMode(!this.getTextMode())
}

function isTextMode anonymous() {
    return this.getTextMode()
}

function checkVisibility() {
    var n = ClientLib.Data.MainData.GetInstance().get_Server().get_WorldConfig_IsActiveIngameCombatSimulation() && qx.core.Init.getApplication().getPlayArea().getSavedLastViewMode() != null && this.getReportData() != null && this.getSimulationData() != null;
    this.setBarHidden(!n)
}

function getStateBuildings() {
    var n = -1;
    return this.getSimulationData() && (n = Math.round(ClientLib.API.Battleground.GetHpPercentForPlacementType(this.getSimulationData(), ClientLib.Base.EPlacementType.Structure))), n
}

function getStateDefense() {
    var n = -1;
    return this.getSimulationData() && (n = Math.round(ClientLib.API.Battleground.GetHpPercentForPlacementType(this.getSimulationData(), ClientLib.Base.EPlacementType.Defense))), n
}