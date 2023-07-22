function getAutoHide anonymous() {
    this.getAutoHide.$$install && this.getAutoHide.$$install();
    return this.getAutoHide.apply(this, arguments);
}

function setAutoHide anonymous(value) {
    this.$$setAutoHideImpl.apply(this, arguments);
    return value;
}

function resetAutoHide() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeAutoHide() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAutoHide() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleAutoHide anonymous() {
    return this.setAutoHide(!this.getAutoHide())
}

function isAutoHide anonymous() {
    return this.getAutoHide()
}

function getLinkedClickables anonymous() {
    this.getLinkedClickables.$$install && this.getLinkedClickables.$$install();
    return this.getLinkedClickables.apply(this, arguments);
}

function setLinkedClickables anonymous() {
    this.setLinkedClickables.$$install && this.setLinkedClickables.$$install.call(this);
    return this.setLinkedClickables.apply(this, arguments);
}

function resetLinkedClickables() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeLinkedClickables() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeLinkedClickables() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanClose anonymous() {
    this.getCanClose.$$install && this.getCanClose.$$install();
    return this.getCanClose.apply(this, arguments);
}

function setCanClose anonymous(value) {
    this.$$setCanCloseImpl.apply(this, arguments);
    return value;
}

function resetCanClose() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanClose() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanClose() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanClose() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getPosPercentX anonymous() {
    this.getPosPercentX.$$install && this.getPosPercentX.$$install();
    return this.getPosPercentX.apply(this, arguments);
}

function setPosPercentX anonymous() {
    this.setPosPercentX.$$install && this.setPosPercentX.$$install.call(this);
    return this.setPosPercentX.apply(this, arguments);
}

function resetPosPercentX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimePosPercentX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePosPercentX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getPosPercentY anonymous() {
    this.getPosPercentY.$$install && this.getPosPercentY.$$install();
    return this.getPosPercentY.apply(this, arguments);
}

function setPosPercentY anonymous() {
    this.setPosPercentY.$$install && this.setPosPercentY.$$install.call(this);
    return this.setPosPercentY.apply(this, arguments);
}

function resetPosPercentY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimePosPercentY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePosPercentY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCurPosX anonymous() {
    this.getCurPosX.$$install && this.getCurPosX.$$install();
    return this.getCurPosX.apply(this, arguments);
}

function setCurPosX anonymous() {
    this.setCurPosX.$$install && this.setCurPosX.$$install.call(this);
    return this.setCurPosX.apply(this, arguments);
}

function resetCurPosX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeCurPosX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCurPosX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCurPosY anonymous() {
    this.getCurPosY.$$install && this.getCurPosY.$$install();
    return this.getCurPosY.apply(this, arguments);
}

function setCurPosY anonymous() {
    this.setCurPosY.$$install && this.setCurPosY.$$install.call(this);
    return this.setCurPosY.apply(this, arguments);
}

function resetCurPosY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeCurPosY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCurPosY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCurDesktopW anonymous() {
    this.getCurDesktopW.$$install && this.getCurDesktopW.$$install();
    return this.getCurDesktopW.apply(this, arguments);
}

function setCurDesktopW anonymous(value) {
    this.$$setCurDesktopWImpl.apply(this, arguments);
    return value;
}

function resetCurDesktopW() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeCurDesktopW() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCurDesktopW() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCurDesktopH anonymous() {
    this.getCurDesktopH.$$install && this.getCurDesktopH.$$install();
    return this.getCurDesktopH.apply(this, arguments);
}

function setCurDesktopH anonymous(value) {
    this.$$setCurDesktopHImpl.apply(this, arguments);
    return value;
}

function resetCurDesktopH() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeCurDesktopH() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCurDesktopH() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getActivated anonymous() {
    this.getActivated.$$install && this.getActivated.$$install();
    return this.getActivated.apply(this, arguments);
}

function setActivated anonymous() {
    this.setActivated.$$install && this.setActivated.$$install.call(this);
    return this.setActivated.apply(this, arguments);
}

function resetActivated() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initActivated() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeActivated() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeActivated() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getAllowAutoMove anonymous(value) {
    if (this.$$runtime_AllowAutoMove !== undefined) return this.$$runtime_AllowAutoMove;
    if (this.$$user_AllowAutoMove !== undefined) return this.$$user_AllowAutoMove;
    else return this.$$init_AllowAutoMove;
}

function setAllowAutoMove anonymous() {
    this.setAllowAutoMove.$$install && this.setAllowAutoMove.$$install.call(this);
    return this.setAllowAutoMove.apply(this, arguments);
}

function resetAllowAutoMove() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeAllowAutoMove() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAllowAutoMove() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIsPopup anonymous() {
    this.getIsPopup.$$install && this.getIsPopup.$$install();
    return this.getIsPopup.apply(this, arguments);
}

function setIsPopup anonymous(value) {
    this.$$setIsPopupImpl.apply(this, arguments);
    return value;
}

function resetIsPopup() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeIsPopup() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIsPopup() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function show() {
    this.__bHU || (this.__bBE(), webfrontend.gui.OverlayWindow.prototype.show.call(this))
}

function close(n) {
    this.getActivated() && (this.getIsPopup() && webfrontend.ui.OverlayWindowManager.getInstance().remove(this), n ? (this.setActivated(!1), this.getContentElement().setStyle(qx.bom.Style.getPropertyName(i), t), this.__JR = !1, qx.ui.window.Window.prototype.close.call(this)) : this.__JR || (this.__JR = !0, qx.core.Init.getApplication().getDesktop().focus(), this.animate(qx.phe.AnimationManager.getInstance().getAnimation(u).getDescription(), null, function() {
        this.close(!0)
    }, this)))
}

function closedByClickOn(n) {
    this.getIsPopup() && qx.core.Init.getApplication().getPlayArea().setActivePopupClosedBy(n)
}

function _createChildControlImpl(n) {
    var i, t;
    switch (n) {
        case r:
            t = new qx.ui.layout.Grid;
            t.setRowFlex(0, 1);
            t.setColumnFlex(1, 1);
            i = new qx.phe.Decontainer(t);
            this._add(i)
    }
    return i || qx.ui.window.Window.prototype._createChildControlImpl.call(this, n)
}

function _onAppearFake() {
    this.__Os || (qx.core.Init.getApplication().getDesktop().addListener(n, this.onDesktopResize, this), this.__Os = !0);
    this.onDesktopResize();
    this.updatePosition(!0);
    this.__bnz();
    this.bringToFront();
    this.fadeIn()
}

function _onDisappearFake() {
    this.__Os && (qx.core.Init.getApplication().getDesktop().removeListener(n, this.onDesktopResize, this), this.__Os = !1);
    this.deactivate()
}

function updatePosition(n) {
    if (this.getAllowAutoMove() && (n || !this.getMovable())) {
        var u = qx.core.Init.getApplication(),
            t = null,
            i = this.getBounds(),
            r = u.getMainOverlay();
        if (t = r && r.isVisible() ? r.getBounds() : u.getDesktop().getBounds(), i != null && t != null) {
            var f = this.getPosPercentX() / 100,
                e = this.getPosPercentY() / 100,
                o = t.left + Math.floor((t.width - i.width) * f),
                s = t.top + Math.floor((t.height - i.height) * e);
            this.setCurPosX(o);
            this.setCurPosY(s);
            this.moveTo(this.getCurPosX(), this.getCurPosY())
        }
    }
}

function onDesktopResize() {
    var n = qx.core.Init.getApplication().getDesktop().getBounds();
    if (this.getBounds() == null || !this.getMovable() || this.getCurDesktopW() <= 0 || this.getCurDesktopH() <= 0) {
        this.setCurDesktopW(n.width);
        this.setCurDesktopH(n.height);
        this.updatePosition(!0);
        this.__bnz();
        return
    }
    if (n.width != this.getCurDesktopW() || n.height != this.getCurDesktopH()) {
        var t = this.getBounds(),
            i = Math.floor(t.left * n.width / this.getCurDesktopW()),
            r = Math.floor(t.top * n.height / this.getCurDesktopH());
        (i != t.left || r != t.top) && (this.setCurPosX(i), this.setCurPosY(r), this.setCurDesktopW(n.width), this.setCurDesktopH(n.height), this.moveTo(this.getCurPosX(), this.getCurPosY()))
    }
}

function deactivate() {}

function setTitle(n) {
    this.title.setValue(n)
}

function onBtnClose() {
    this.getIsPopup() ? (qx.core.Init.getApplication().getPlayArea().getActivePopup() == null && this.close(!0), qx.core.Init.getApplication().getPlayArea().setActivePopup(null)) : this.close(!0)
}

function fadeIn() {
    this.getContentElement().setStyle(qx.bom.Style.getPropertyName(n), d)
}

function fadeOut() {
    this.getContentElement().setStyle(qx.bom.Style.getPropertyName(n), o)
}

function bringToFront() {
    qx.core.Init.getApplication().getRoot().getWindowManager().bringToFront(this)
}

function animate(t, i, r, u) {
    qx.html.Element.flush();
    this.stopAnimation();
    this.__vP(t.keyFrames);
    var f = this;
    this.__vO(function() {
        for (var e in t.keyFrames) {
            f.__vQ(f.getContentElement(), t.keyFrames[e]);
            break
        }
        r && f.addListenerOnce(n, r, u);
        f._animateImpl(t, i)
    }, function() {
        var e = null;
        for (var i in frames) e = t.keyFrames[i];
        f.__vQ(f.getContentElement(), t.keyFrames[i]);
        r && f.addListenerOnce(n, r, u)
    }, 5)
}

function stopAnimation() {
    this.__vN != null && this.__vN.cancel();
    this.__vN = null;
    this.__vM && this.__vM.isValid() && this.__vM.stop();
    this.__vM = null
}

function _animateImpl(i, r) {
    this.__vM = qx.bom.element.Animation.animate(this.getContentElement().getDomElement(), i, r);
    this.__vM.on(t, function() {
        this.fireEvent(n)
    }, this)
}

function populateData(n) {
    var f = webfrontend.phe.cnc.config.Config.getInstance(),
        i, r;
    n ? (i = this.__bHV(n), r = f.getWorldMergeShown(), this.__bHU = r.indexOf(i) >= 0, this.__bHW(i)) : this.__bHU = !1;
    this.__bHI.setValue(this.tr(b));
    this.__bCt.set({
        label: this.tr(g),
        enabled: !0
    });
    this.__bHK.setValue(this.tr(u));
    this.__bHJ.setValue(t);
    this.__yY.setValue(this.tr(v));
    this.__bHH.setValue(t);
    this.__bHG.setSource(s)
}

function show() {
    this.__bHU || (this.__bBE(), webfrontend.gui.OverlayWindow.prototype.show.call(this))
}

function getUIItem(n) {
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_CONTINUE:
            return this.__bCt
    }
    return null
}

function fadeIn() {
    this.getContentElement().setStyle(qx.bom.Style.getPropertyName(n), d)
}

function fadeOut() {
    this.getContentElement().setStyle(qx.bom.Style.getPropertyName(n), o)
}