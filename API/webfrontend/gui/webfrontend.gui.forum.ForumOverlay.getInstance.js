function getCanViewSharedAllianceForums anonymous() {
    this.getCanViewSharedAllianceForums.$$install && this.getCanViewSharedAllianceForums.$$install();
    return this.getCanViewSharedAllianceForums.apply(this, arguments);
}

function setCanViewSharedAllianceForums anonymous(value) {
    this.$$setCanViewSharedAllianceForumsImpl.apply(this, arguments);
    return value;
}

function resetCanViewSharedAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanViewSharedAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanViewSharedAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanViewSharedAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getHasAllianceForum anonymous(value) {
    if (this.$$runtime_hasAllianceForum !== undefined) return this.$$runtime_hasAllianceForum;
    if (this.$$user_hasAllianceForum !== undefined) return this.$$user_hasAllianceForum;
    else return this.$$init_hasAllianceForum;
}

function setHasAllianceForum anonymous(value) {
    this.$$setHasAllianceForumImpl.apply(this, arguments);
    return value;
}

function resetHasAllianceForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initHasAllianceForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeHasAllianceForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeHasAllianceForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function isDomReady() {
    return webfrontend.gui.MenuOverlayWidget.prototype.isDomReady.call(this) && !this.__HT && !this.__HU
}

function _activate() {
    if (this.__AV) {
        this.__HX();
        return
    }
    this.__HW()
}

function _deactivate() {
    this.__AV && (this.__AV = !1, webfrontend.data.AllianceEvents.getInstance().removeListener(f, this.__Ib, this), webfrontend.data.AllianceEvents.getInstance().removeListener(i, this.__Ic, this), webfrontend.data.AllianceEvents.getInstance().removeListener(r, this.__Id, this));
    this.__HO && this.__HO.close()
}

function openCurrentCategory() {
    var n = this.getIsUnsavedMessage();
    n && n.title && n.text ? (n.textRich = !0, n.executeOk = function() {
        this.undoSaveClose();
        this.__Ii()
    }, n.executeCancel = function() {}, n.callbackContext = this, webfrontend.gui.MessageBox.messageBox(n)) : (this.__HS = {
        idCategory: this.__HO.getForumType()
    }, this.__HX())
}

function openForum(n) {
    var t = this.getIsUnsavedMessage();
    t && t.title && t.text ? (t.textRich = !0, t.executeOk = function() {
        this.undoSaveClose();
        this.__Ij(n)
    }, t.executeCancel = function() {}, t.callbackContext = this, webfrontend.gui.MessageBox.messageBox(t)) : (this.__HS = {
        idForum: n
    }, this.__HX())
}

function openThread(n, t, i) {
    var r = this.getIsUnsavedMessage();
    r && r.title && r.text ? (r.textRich = !0, r.executeOk = function() {
        this.undoSaveClose();
        this.__Ik(n, t, i)
    }, r.executeCancel = function() {}, r.callbackContext = this, webfrontend.gui.MessageBox.messageBox(r)) : (this.__HS = {
        idForum: n,
        idThread: t,
        bGoLast: i
    }, this.__HX())
}

function showInsufficientRightsMessage() {
    this.__HR || (this.__HR = !0, webfrontend.gui.MessageBox.messageBox({
        title: this.tr(a),
        text: this.tr(y),
        buttons: 1,
        executeOk: function() {
            this.__HR = !1
        },
        callbackContext: this
    }))
}

function getIsUnsavedMessage() {
    return this.__HO && this.__HO.getIsUnsavedMessage()
}

function doSaveClose() {
    return this.__HO.doSaveClose()
}

function undoSaveClose() {
    return this.__HO.undoSaveClose()
}
qx.ui.co _bgrScalerntainer.Composite[5555 - 0] qx.ui.co _clientAreantainer.Composite[5557 - 0] webfront _closeButtonend.ui.SoundButton[5558 - 0] qx.ui.ba _headerImagesic.Image[5556 - 0] qx.ui.ba _titlesic.Label[5560 - 0]