[object prototypeObject]
function base() {
    qx.ui.window.Window.prototype.show.call(this);
    this.getIsPopup() && webfrontend.ui.OverlayWindowManager.getInstance().add(this);
    this.setActivated(!0);
    this.__JR = !1
} [Class w selfebfrontend.gui.info.ServerMessageChoiceWindow]