function getCenterOnShow anonymous() {
    this.getCenterOnShow.$$install && this.getCenterOnShow.$$install();
    return this.getCenterOnShow.apply(this, arguments);
}

function setCenterOnShow anonymous() {
    this.setCenterOnShow.$$install && this.setCenterOnShow.$$install.call(this);
    return this.setCenterOnShow.apply(this, arguments);
}

function resetCenterOnShow() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeCenterOnShow() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCenterOnShow() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleCenterOnShow anonymous() {
    return this.setCenterOnShow(!this.getCenterOnShow())
}

function isCenterOnShow anonymous() {
    return this.getCenterOnShow()
}

function bringToFront() {
    qx.core.Init.getApplication().getRoot().getWindowManager().bringToFront(this)
}

function centerPosition() {
    var n = 0,
        t = 0,
        f = 0,
        e = 0,
        s = qx.core.Init.getApplication(),
        o = s.getMainOverlay(),
        i, r, u;
    return o != null ? (i = o.getBounds(), n = i.width, t = i.height, f = i.left, e = i.top) : (n = qx.bom.Viewport.getWidth(window), t = qx.bom.Viewport.getHeight(window)), r = this.getWidth(), r == null && this.getBounds() != null && (r = this.getBounds().width), u = this.getHeight(), u == null && this.getBounds() != null && (u = this.getBounds().height), n = f + Math.floor((n - r) / 2), t = e + Math.floor((t - u) / 2), this.moveTo(n, t), {
        x: n,
        y: t
    }
}

function fadeIn() {
    this.animate(qx.phe.AnimationManager.getInstance().getAnimation(u).getDescription())
}

function fadeOut() {
    this.animate(qx.phe.AnimationManager.getInstance().getAnimation(n).getDescription())
}

function _onClose() {
    this.__AV && (webfrontend.data.AllianceEvents.getInstance().removeListener(u, this.__Rv, this), this.__AV = !1);
    webfrontend.gui.CustomWindow.prototype._onClose.call(this)
}

function _onCloseButtonTap() {
    ClientLib.Vis.VisMain.GetInstance().PlayUISound(webfrontend.ui.SoundButton.defaultFile);
    qx.ui.window.Window.prototype._onCloseButtonTap.call(this)
}

function _onDesktopResize() {
    var u = qx.core.Init.getApplication(),
        t = u.getDesktop().getBounds(),
        n = this.getBounds(),
        i, r;
    n !== null && t !== null && (i = n.left, r = n.top, n.left < t.left && (i = t.left), n.left + n.width > t.width && (i = t.width - n.width), n.top < t.top && (r = t.top), n.top + n.height > t.height && (r = t.height - n.height), this.moveTo(i, r))
}

function _deferredAppear() {
    this.__vS = null;
    this.getCenterOnShow() && this.centerPosition();
    this.bringToFront();
    this.setCssContent(l);
    this.fadeIn()
}

function _isActive() {
    return this.__vR
}

function close(t) {
    (this.__vR || t) && (this.fireNonBubblingEvent(r, qx.event.type.Event, [!1, !0]) || t) && (this.__vR = !1, t ? qx.ui.window.Window.prototype.close.call(this) : this.animate(qx.phe.AnimationManager.getInstance().getAnimation(n).getDescription(), null, function() {
        this.close(!0)
    }, this))
}

function show() {
    webfrontend.gui.CustomWindow.prototype.show.call(this);
    this.__AV || (this.__AV = !0, webfrontend.data.AllianceEvents.getInstance().addListener(u, this.__Rv, this));
    this.__Rv()
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

function showFor(r, u, f, e) {
    this.__Se(r);
    this.__Rl.set({
        MaxTextLength: ClientLib.Data.Marker.MAXLEN_DESCRIPTION,
        Text: this.tr(e) || n
    });
    this.__Rm.set({
        x: u,
        y: f
    });
    this.__Rs.setModelSelection([r]);
    ClientLib.Data.MainData.GetInstance().get_Alliance().HasReserveMarker() ? this.__Sc.setVisibility(i) : this.__Sc.setVisibility(t);
    this.show()
}

function show() {
    webfrontend.gui.CustomWindow.prototype.show.call(this);
    this.__AV || (this.__AV = !0, webfrontend.data.AllianceEvents.getInstance().addListener(u, this.__Rv, this));
    this.__Rv()
}

function _onClose() {
    this.__AV && (webfrontend.data.AllianceEvents.getInstance().removeListener(u, this.__Rv, this), this.__AV = !1);
    webfrontend.gui.CustomWindow.prototype._onClose.call(this)
}