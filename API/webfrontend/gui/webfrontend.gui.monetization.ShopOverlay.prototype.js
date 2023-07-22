function getActive anonymous() {
    this.getActive.$$install && this.getActive.$$install();
    return this.getActive.apply(this, arguments);
}

function setActive anonymous() {
    this.setActive.$$install && this.setActive.$$install.call(this);
    return this.setActive.apply(this, arguments);
}

function resetActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIsFading anonymous() {
    this.getIsFading.$$install && this.getIsFading.$$install();
    return this.getIsFading.apply(this, arguments);
}

function setIsFading anonymous() {
    this.setIsFading.$$install && this.setIsFading.$$install.call(this);
    return this.setIsFading.apply(this, arguments);
}

function resetIsFading() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeIsFading() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIsFading() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function show() {
    qx.ui.container.Composite.prototype.show.call(this);
    this.setActive(!0)
}

function hide() {
    qx.ui.container.Composite.prototype.hide.call(this);
    this.setActive(!1)
}

function open() {
    var n = qx.core.Init.getApplication();
    n.getCurrentMenuOverlay() !== this && this.toggle()
}

function close() {
    var n = qx.core.Init.getApplication();
    n.getCurrentMenuOverlay() === this && n.switchMenuOverlay(null)
}

function toggle() {
    var n = qx.core.Init.getApplication();
    n.getCurrentMenuOverlay() === this ? n.switchMenuOverlay(null) : n.switchMenuOverlay(this);
    this._closeButton.reset()
}

function centerPosition() {
    var n = qx.core.Init.getApplication(),
        u = n.getDesktop().getBounds(),
        f = n.getMenuBar().getBounds(),
        t = n.getCurrentBottomOverlay(),
        i = Math.floor((u.width - webfrontend.gui.MenuOverlayWidget.OverlayWidth) / 2),
        r = f.height;
    t && t.isVisible() ? this.setLayoutProperties({
        left: i,
        top: r,
        bottom: webfrontend.Application.legacySocHeight + webfrontend.gui.notifications.Ticker.TickerHeight
    }) : this.setLayoutProperties({
        left: i,
        top: r,
        bottom: webfrontend.gui.notifications.Ticker.TickerHeight
    })
}

function onClose() {
    this.close()
}

function fadeIn() {
    this.animate(qx.phe.AnimationManager.getInstance().getAnimation(l).getDescription(), null, this.__hG, this)
}

function fadeOut() {
    this.animate(qx.phe.AnimationManager.getInstance().getAnimation(c).getDescription(), null, this.__hG, this)
}

function getIsUnsavedMessage() {
    return null
}

function doSaveClose() {}

function undoSaveClose() {}

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

function getStartTab anonymous() {
    this.getStartTab.$$install && this.getStartTab.$$install();
    return this.getStartTab.apply(this, arguments);
}

function setStartTab anonymous() {
    this.setStartTab.$$install && this.setStartTab.$$install.call(this);
    return this.setStartTab.apply(this, arguments);
}

function resetStartTab() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeStartTab() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeStartTab() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function set_SwitchTabByChildIndex(n) {
    var t = this.__GQ.getChildren();
    n >= 0 && n < t.length && this.__GQ.setSelection([t[n]])
}

function openCapacityCategoryTab(n) {
    this.setStartTab(this.__baS);
    this.open();
    this.__baS.openItemCategory(n)
}

function setEnabledPlayerBaseFilter(n) {
    n && this.__baN.getChildren().length > 1 ? (this.__baN.setEnabled(!0), this.__baN.setToolTipText(this.tr(u))) : (this.__baN.setEnabled(!1), this.__baN.getChildren().length > 1 ? this.__baN.setToolTipText(this.tr(y)) : this.__baN.setToolTipText(this.tr(it)))
}

function _activate() {
    var t, i;
    this.__baU = -1;
    this.__baM.removeListener(n, this.__bbd, this);
    this.__baM.setSelection([this.__baW]);
    this.__baM.addListener(n, this.__bbd, this);
    this.__baQ.setFilterLevel(-1);
    this.__baQ.setFilterLevelItem(this.__baW);
    this.__baQ.activate(!1);
    this.__baR.setFilterLevel(-1);
    this.__baR.setFilterLevelItem(this.__baW);
    this.__baR.activate(!1);
    this.__baS.setFilterLevel(-1);
    this.__baS.setFilterLevelItem(this.__baW);
    this.__baS.activate(!1);
    this.getStartTab() == null && this.setStartTab(this.__baQ);
    this.__GQ.setSelection([this.getStartTab()]);
    this.getStartTab().activate(!0);
    this.setStartTab(this.__baQ);
    this.setEnabledPlayerBaseFilter(!0);
    t = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId();
    this.__baN.setModelSelection([t]);
    this.__bbe();
    this.__ur();
    i = ClientLib.Data.MainData.GetInstance().get_Player();
    i.get_IsSubstituted() ? (this.__baJ.setEnabled(!1), this.__baJ.setToolTipText(this.tr(ht))) : (this.__baJ.setEnabled(!0), this.__baJ.setToolTipText(null))
}

function _deactivate() {}