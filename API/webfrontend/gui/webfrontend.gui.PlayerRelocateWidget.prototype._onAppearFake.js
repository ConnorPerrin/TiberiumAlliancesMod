[object prototypeObject]
function base() {
    this.__Os || (qx.core.Init.getApplication().getDesktop().addListener(n, this.onDesktopResize, this), this.__Os = !0);
    this.onDesktopResize();
    this.updatePosition(!0);
    this.__bnz();
    this.bringToFront();
    this.fadeIn()
} [Class w selfebfrontend.gui.PlayerRelocateWidget]