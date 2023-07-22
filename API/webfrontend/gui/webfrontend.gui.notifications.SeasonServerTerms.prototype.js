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

function popupModal() {
    return !0
}

function popupDestroyAfterClose() {
    return !0
}

function open() {
    webfrontend.gui.widgets.popup.PopupWindow.prototype.open.call(this);
    this.centerPosition()
}

function popupReady() {
    return !0
}