webfront playAreaend.gui.PlayArea.PlayArea[15138 - 0] qx.ui.ba wdgAnchorsic.Image[15136 - 0]
function toggleCloseBtnVisibility(n) {
    n ? (this.__vC.resetZIndex(), this.__bjs.resetZIndex()) : (this.__vC.setZIndex(-1e3), this.__bjs.setZIndex(-1e3))
}

function _onClose() {
    var n = qx.core.Init.getApplication();
    n.showMainOverlay(!1)
}

function setTutorialMode(i) {
    this.playArea.setTutorialMode(i);
    this.__bjt != i && (this.__bjt = i, this.__vC.setVisibility(this.__bjt ? n : t), qx.core.Init.getApplication().getMessagingTicker().setVisibility(this.__bjt ? n : t))
}

function getUIItem(n) {
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_GOTOREGION:
            return this.__vC
    }
    return null
}
qx.ui.ba wdgAnchorsic.Image[15136 - 0] webfront playAreaend.gui.PlayArea.PlayArea[15138 - 0]