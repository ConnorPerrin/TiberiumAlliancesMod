function setTitle(n) {
    this.title.setValue(n)
}

function onClose() {
    var n = qx.core.Init.getApplication();
    n.getCurrentBottomOverlay() == this && n.switchBottomOverlay(null)
}

function activateOverlay(n) {
    if (n) {
        this.__bEm();
        this.__bEr(!0);
        this.__bBg();
        qx.core.Init.getApplication().getPlayArea().getSavedLastViewMode() != null && ClientLib.Vis.VisMain.GetInstance().get_Battleground().RestartReplay();
        var t = qx.core.Init.getApplication().getPlayArea().getViewMode();
        this.__bEb.setValue(t != ClientLib.Data.PlayerAreaViewMode.pavmCombatSimulation ? this.tr(it) : this.tr(f))
    } else this.__bEr(!1)
}

function cancelAction() {}

function activateOverlay(n) {
    if (n) {
        this.__bEm();
        this.__bEr(!0);
        this.__bBg();
        qx.core.Init.getApplication().getPlayArea().getSavedLastViewMode() != null && ClientLib.Vis.VisMain.GetInstance().get_Battleground().RestartReplay();
        var t = qx.core.Init.getApplication().getPlayArea().getViewMode();
        this.__bEb.setValue(t != ClientLib.Data.PlayerAreaViewMode.pavmCombatSimulation ? this.tr(it) : this.tr(f))
    } else this.__bEr(!1)
}