function _onHostUserChange() {
    this.__brR()
}

function _onTick() {
    this.__brT();
    this.__brU();
    this.__brV()
}

function getUIItem(n) {
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_ADFFUNDS:
            return this.__brC;
        case ClientLib.Data.Missions.PATH.WDG_SUPPLYPOINTS:
            return this.__brz.getLayoutParent();
        case ClientLib.Data.Missions.PATH.WDG_COMPOINTS:
            return this.__brp;
        case ClientLib.Data.Missions.PATH.WDG_CREDITSPLUS:
            return this.__brv
    }
    return null
}