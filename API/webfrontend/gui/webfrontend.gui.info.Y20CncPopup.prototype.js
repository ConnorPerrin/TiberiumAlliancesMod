function popupReady() {
    return !0
}

function popupModal() {
    return !0
}

function popupShow() {
    this.open()
}

function popupSignalClosing() {
    this.fireEvent(t)
}

function popupSignalReady() {
    this.fireEvent(i)
}

function popupDestroyAfterClose() {
    return !0
}

function _onClose() {
    this.popupSignalClosing()
}

function open() {
    webfrontend.gui.widgets.popup.PopupWindow.prototype.open.call(this);
    this.centerPosition()
}

function close() {
    webfrontend.gui.widgets.popup.PopupWindow.prototype.close.call(this);
    ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_SHOW_20YCNC, 0);
    ClientLib.Config.Main.GetInstance().SaveToDB()
}

function popupReady() {
    return !0
}

function popupModal() {
    return !0
}

function popupDestroyAfterClose() {
    return !0
}