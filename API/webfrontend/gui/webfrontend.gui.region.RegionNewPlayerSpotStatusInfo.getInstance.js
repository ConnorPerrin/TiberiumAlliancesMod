function setObject(n) {
    this.__RG = n;
    this.onCitiesChange();
    this.onTick()
}

function onTick() {}

function onCitiesChange() {
    this.__bgO.setCoordinates(this.__RG.get_RawX(), this.__RG.get_RawY(), a + webfrontend.theme.Color.colors[r] + h + webfrontend.phe.cnc.gui.util.Numbers.formatCoordinates(this.__RG.get_RawX(), this.__RG.get_RawY()) + i);
    this.__bgT.setValue(w + ClientLib.Data.MainData.GetInstance().get_World().SurroundedEnemies(this.__RG.get_RawX(), this.__RG.get_RawY()).toString() + i)
}