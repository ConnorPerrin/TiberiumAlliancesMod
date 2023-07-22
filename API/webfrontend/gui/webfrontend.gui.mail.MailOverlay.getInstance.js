function getPageContent anonymous() {
    this.getPageContent.$$install && this.getPageContent.$$install();
    return this.getPageContent.apply(this, arguments);
}

function setPageContent anonymous(value) {
    this.$$setPageContentImpl.apply(this, arguments);
    return value;
}

function resetPageContent() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initPageContent() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimePageContent() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePageContent() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getOpenedCombined anonymous() {
    this.getOpenedCombined.$$install && this.getOpenedCombined.$$install();
    return this.getOpenedCombined.apply(this, arguments);
}

function setOpenedCombined anonymous() {
    this.setOpenedCombined.$$install && this.setOpenedCombined.$$install.call(this);
    return this.setOpenedCombined.apply(this, arguments);
}

function resetOpenedCombined() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initOpenedCombined() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeOpenedCombined() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeOpenedCombined() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getOpenedMain anonymous() {
    this.getOpenedMain.$$install && this.getOpenedMain.$$install();
    return this.getOpenedMain.apply(this, arguments);
}

function setOpenedMain anonymous() {
    this.setOpenedMain.$$install && this.setOpenedMain.$$install.call(this);
    return this.setOpenedMain.apply(this, arguments);
}

function resetOpenedMain() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initOpenedMain() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeOpenedMain() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeOpenedMain() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getOpenedDisplay anonymous() {
    this.getOpenedDisplay.$$install && this.getOpenedDisplay.$$install();
    return this.getOpenedDisplay.apply(this, arguments);
}

function setOpenedDisplay anonymous() {
    this.setOpenedDisplay.$$install && this.setOpenedDisplay.$$install.call(this);
    return this.setOpenedDisplay.apply(this, arguments);
}

function resetOpenedDisplay() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initOpenedDisplay() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeOpenedDisplay() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeOpenedDisplay() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getOpenedNew anonymous() {
    this.getOpenedNew.$$install && this.getOpenedNew.$$install();
    return this.getOpenedNew.apply(this, arguments);
}

function setOpenedNew anonymous() {
    this.setOpenedNew.$$install && this.setOpenedNew.$$install.call(this);
    return this.setOpenedNew.apply(this, arguments);
}

function resetOpenedNew() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initOpenedNew() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeOpenedNew() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeOpenedNew() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function addToMessage(n) {
    this.__VK != null && this.getOpenendNew != !1 && this.__VK.addToMessage(n)
}

function _activate() {
    this.setOpenedMain(!0);
    this.__AV || (this.__AV = !0, webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Mail(), u, ClientLib.Data.MailDataChange, this, this.__VQ), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Mail(), e, ClientLib.Data.MailFetched, this, this.__VR));
    this.setPageContent(this.__tA);
    this.__VQ()
}

function _deactivate() {
    this.setOpenedMain(!1);
    this.__AV && (this.__AV = !1, webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Mail(), u, ClientLib.Data.MailDataChange, this, this.__VQ), webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Mail(), e, ClientLib.Data.MailFetched, this, this.__VR));
    this.getPageContent() == this.__tA && this.__GY.close();
    this.setPageContent(null)
}

function onNewMessage(n, t) {
    t = t || !1;
    this.__VK.open(this, webfrontend.gui.mail.MailMessage.writeType.create, null, t);
    this.__VK.setReceivers(n)
}

function onNewMessageForAlliance(n) {
    this.__VK.open(this, webfrontend.gui.mail.MailMessage.writeType.create, n)
}

function onDisplayMessage(n) {
    this.__VL.open(this, 0, !0, n)
}
qx.ui.co _bgrScalerntainer.Composite[8727 - 0] qx.ui.co _clientAreantainer.Composite[8729 - 0] webfront _closeButtonend.ui.SoundButton[8730 - 0] qx.ui.ba _headerImagesic.Image[8728 - 0] qx.ui.ba _titlesic.Label[8732 - 0]