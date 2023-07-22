function getAutoHide anonymous(value) {
    if (this.$$runtime_autoHide !== undefined) return this.$$runtime_autoHide;
    if (this.$$user_autoHide !== undefined) return this.$$user_autoHide;
    else return this.$$init_autoHide;
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

function getConsumeOutsideClicks anonymous() {
    this.getConsumeOutsideClicks.$$install && this.getConsumeOutsideClicks.$$install();
    return this.getConsumeOutsideClicks.apply(this, arguments);
}

function setConsumeOutsideClicks anonymous(value) {
    this.$$setConsumeOutsideClicksImpl.apply(this, arguments);
    return value;
}

function resetConsumeOutsideClicks() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeConsumeOutsideClicks() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeConsumeOutsideClicks() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleConsumeOutsideClicks anonymous() {
    return this.setConsumeOutsideClicks(!this.getConsumeOutsideClicks())
}

function isConsumeOutsideClicks anonymous() {
    return this.getConsumeOutsideClicks()
}

function show() {
    this.getLayoutParent() == null && qx.core.Init.getApplication().getRoot().add(this);
    qx.ui.container.Composite.prototype.show.call(this)
}

function _applyVisibility(n, t) {
    n == rt && this.animate(qx.phe.AnimationManager.getInstance().getAnimation(h).getDescription());
    qx.ui.popup.Popup.prototype._applyVisibility.call(this, n, t)
}

function getPosition anonymous(value) {
    if (this.$$runtime_position !== undefined) return this.$$runtime_position;
    if (this.$$user_position !== undefined) return this.$$user_position;
    else if (this.$$theme_position !== undefined) return this.$$theme_position;
    else return this.$$init_position;
}

function setPosition anonymous() {
    this.setPosition.$$install && this.setPosition.$$install.call(this);
    return this.setPosition.apply(this, arguments);
}

function resetPosition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimePosition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePosition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedPosition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedPosition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getPlaceMethod anonymous(value) {
    if (this.$$runtime_placeMethod !== undefined) return this.$$runtime_placeMethod;
    if (this.$$user_placeMethod !== undefined) return this.$$user_placeMethod;
    else if (this.$$theme_placeMethod !== undefined) return this.$$theme_placeMethod;
    else return this.$$init_placeMethod;
}

function setPlaceMethod anonymous() {
    this.setPlaceMethod.$$install && this.setPlaceMethod.$$install.call(this);
    return this.setPlaceMethod.apply(this, arguments);
}

function resetPlaceMethod() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimePlaceMethod() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePlaceMethod() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedPlaceMethod() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedPlaceMethod() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getDomMove anonymous(value) {
    if (this.$$runtime_domMove !== undefined) return this.$$runtime_domMove;
    if (this.$$user_domMove !== undefined) return this.$$user_domMove;
    else return this.$$init_domMove;
}

function setDomMove anonymous() {
    this.setDomMove.$$install && this.setDomMove.$$install.call(this);
    return this.setDomMove.apply(this, arguments);
}

function resetDomMove() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeDomMove() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDomMove() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleDomMove anonymous() {
    return this.setDomMove(!this.getDomMove())
}

function isDomMove anonymous() {
    return this.getDomMove()
}

function getPlacementModeX anonymous(value) {
    if (this.$$runtime_placementModeX !== undefined) return this.$$runtime_placementModeX;
    if (this.$$user_placementModeX !== undefined) return this.$$user_placementModeX;
    else if (this.$$theme_placementModeX !== undefined) return this.$$theme_placementModeX;
    else return this.$$init_placementModeX;
}

function setPlacementModeX anonymous() {
    this.setPlacementModeX.$$install && this.setPlacementModeX.$$install.call(this);
    return this.setPlacementModeX.apply(this, arguments);
}

function resetPlacementModeX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimePlacementModeX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePlacementModeX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedPlacementModeX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedPlacementModeX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getPlacementModeY anonymous(value) {
    if (this.$$runtime_placementModeY !== undefined) return this.$$runtime_placementModeY;
    if (this.$$user_placementModeY !== undefined) return this.$$user_placementModeY;
    else if (this.$$theme_placementModeY !== undefined) return this.$$theme_placementModeY;
    else return this.$$init_placementModeY;
}

function setPlacementModeY anonymous() {
    this.setPlacementModeY.$$install && this.setPlacementModeY.$$install.call(this);
    return this.setPlacementModeY.apply(this, arguments);
}

function resetPlacementModeY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimePlacementModeY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePlacementModeY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedPlacementModeY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedPlacementModeY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getOffsetLeft anonymous(value) {
    if (this.$$runtime_offsetLeft !== undefined) return this.$$runtime_offsetLeft;
    if (this.$$user_offsetLeft !== undefined) return this.$$user_offsetLeft;
    else if (this.$$theme_offsetLeft !== undefined) return this.$$theme_offsetLeft;
    else return this.$$init_offsetLeft;
}

function setOffsetLeft anonymous() {
    this.setOffsetLeft.$$install && this.setOffsetLeft.$$install.call(this);
    return this.setOffsetLeft.apply(this, arguments);
}

function resetOffsetLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeOffsetLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeOffsetLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedOffsetLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedOffsetLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getOffsetTop anonymous(value) {
    if (this.$$runtime_offsetTop !== undefined) return this.$$runtime_offsetTop;
    if (this.$$user_offsetTop !== undefined) return this.$$user_offsetTop;
    else if (this.$$theme_offsetTop !== undefined) return this.$$theme_offsetTop;
    else return this.$$init_offsetTop;
}

function setOffsetTop anonymous() {
    this.setOffsetTop.$$install && this.setOffsetTop.$$install.call(this);
    return this.setOffsetTop.apply(this, arguments);
}

function resetOffsetTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeOffsetTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeOffsetTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedOffsetTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedOffsetTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getOffsetRight anonymous(value) {
    if (this.$$runtime_offsetRight !== undefined) return this.$$runtime_offsetRight;
    if (this.$$user_offsetRight !== undefined) return this.$$user_offsetRight;
    else if (this.$$theme_offsetRight !== undefined) return this.$$theme_offsetRight;
    else return this.$$init_offsetRight;
}

function setOffsetRight anonymous() {
    this.setOffsetRight.$$install && this.setOffsetRight.$$install.call(this);
    return this.setOffsetRight.apply(this, arguments);
}

function resetOffsetRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeOffsetRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeOffsetRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedOffsetRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedOffsetRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getOffsetBottom anonymous(value) {
    if (this.$$runtime_offsetBottom !== undefined) return this.$$runtime_offsetBottom;
    if (this.$$user_offsetBottom !== undefined) return this.$$user_offsetBottom;
    else if (this.$$theme_offsetBottom !== undefined) return this.$$theme_offsetBottom;
    else return this.$$init_offsetBottom;
}

function setOffsetBottom anonymous() {
    this.setOffsetBottom.$$install && this.setOffsetBottom.$$install.call(this);
    return this.setOffsetBottom.apply(this, arguments);
}

function resetOffsetBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeOffsetBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeOffsetBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedOffsetBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedOffsetBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function setOffset anonymous() {
    var a = arguments[0] instanceof Array ? arguments[0] : arguments;
    a = qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));
    this.setOffsetTop(a[0]);
    this.setOffsetRight(a[1]);
    this.setOffsetBottom(a[2]);
    this.setOffsetLeft(a[3]);
}

function resetOffset anonymous() {
    this.resetOffsetTop();
    this.resetOffsetRight();
    this.resetOffsetBottom();
    this.resetOffsetLeft();
}

function setThemedOffset anonymous() {
    var a = arguments[0] instanceof Array ? arguments[0] : arguments;
    a = qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));
    this.setThemedOffsetTop(a[0]);
    this.setThemedOffsetRight(a[1]);
    this.setThemedOffsetBottom(a[2]);
    this.setThemedOffsetLeft(a[3]);
}

function resetThemedOffset anonymous() {
    this.resetThemedOffsetTop();
    this.resetThemedOffsetRight();
    this.resetThemedOffsetBottom();
    this.resetThemedOffsetLeft();
}

function getLayoutLocation(n) {
    var f, t, i, r, e, u;
    if (t = n.getBounds(), !t) return null;
    for (i = t.left, r = t.top, e = t, n = n.getLayoutParent(); n && !n.isRootWidget();) t = n.getBounds(), i += t.left, r += t.top, f = n.getInsets(), i += f.left, r += f.top, n = n.getLayoutParent();
    return n && n.isRootWidget() && (u = n.getContentLocation(), u && (i += u.left, r += u.top)), {
        left: i,
        top: r,
        right: i + e.width,
        bottom: r + e.height
    }
}

function moveTo(n, t) {
    var f = qx.ui.core.MPlacement.getVisibleElement(),
        r, i, e, o, s;
    f && (r = this.getBounds(), i = f.getContentLocation(), r && i && (e = t + r.height, o = n + r.width, o > i.left && n < i.right && e > i.top && t < i.bottom && (s = qx.ui.core.MPlacement.getMoveDirection(), s === u ? n = Math.max(i.left - r.width, 0) : t = Math.max(i.top - r.height, 0))));
    this.getDomMove() ? this.setDomPosition(n, t) : this.setLayoutProperties({
        left: n,
        top: t
    })
}

function placeToWidget(n, i) {
    i && (this.__ls(), this.__lp = qx.lang.Function.bind(this.placeToWidget, this, n, !1), qx.event.Idle.getInstance().addListener(t, this.__lp), this.__lr = function() {
        this.__ls()
    }, this.addListener(r, this.__lr, this));
    var u = n.getContentLocation() || this.getLayoutLocation(n);
    return u != null ? (this._place(u), !0) : !1
}

function placeToPointer(n) {
    var t = Math.round(n.getDocumentLeft()),
        i = Math.round(n.getDocumentTop()),
        r = {
            left: t,
            top: i,
            right: t,
            bottom: i
        };
    this._place(r)
}

function placeToElement(n, i) {
    var u = qx.bom.element.Location.get(n),
        f = {
            left: u.left,
            top: u.top,
            right: u.left + n.offsetWidth,
            bottom: u.top + n.offsetHeight
        };
    i && (this.__lp = qx.lang.Function.bind(this.placeToElement, this, n, !1), qx.event.Idle.getInstance().addListener(t, this.__lp), this.addListener(r, function() {
        this.__lp && (qx.event.Idle.getInstance().removeListener(t, this.__lp), this.__lp = null)
    }, this));
    this._place(f)
}

function placeToPoint(n) {
    var t = {
        left: n.left,
        top: n.top,
        right: n.left,
        bottom: n.top
    };
    this._place(t)
}

function _getPlacementOffsets() {
    return {
        left: this.getOffsetLeft(),
        top: this.getOffsetTop(),
        right: this.getOffsetRight(),
        bottom: this.getOffsetBottom()
    }
}

function _place(n) {
    this.__lt(function(t) {
        var i = qx.util.placement.Placement.compute(t, this.getLayoutParent().getBounds(), n, this._getPlacementOffsets(), this.getPosition(), this.getPlacementModeX(), this.getPlacementModeY());
        this.removeState(o);
        this.removeState(e);
        this.addState(n.left < i.left ? e : o);
        this.moveTo(i.left, i.top)
    })
}

function initVisibility anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_visibility !== undefined) {
        old = this.$$runtime_visibility;
    } else if (this.$$user_visibility !== undefined) {
        old = this.$$user_visibility;
    } else if (this.$$useinit_visibility) {
        old = this.$$init_visibility;
    }
    var computed;
    if (this.$$runtime_visibility !== undefined) {
        computed = this.$$runtime_visibility;
    } else if (this.$$user_visibility !== undefined) {
        computed = this.$$user_visibility;
    } else if (this.$$useinit_visibility) {
        computed = this.$$init_visibility;
    } else {
        computed = this.$$init_visibility;
        this.$$useinit_visibility = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyVisibility(computed, old, "visibility", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeVisibility')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeVisibility', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeVisibilityAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeVisibilityAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
        });
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}

function getCanClose anonymous() {
    this.getCanClose.$$install && this.getCanClose.$$install();
    return this.getCanClose.apply(this, arguments);
}

function setCanClose anonymous() {
    this.setCanClose.$$install && this.setCanClose.$$install.call(this);
    return this.setCanClose.apply(this, arguments);
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

function centerPosition() {
    var i = qx.core.Init.getApplication(),
        r = i.getMainOverlay().getBounds(),
        n = i.getPlayArea().getBounds(),
        t = this.getBounds(),
        u, f;
    t != null && (u = r.left + n.left + Math.floor((n.width - t.width) / 2), f = r.top + n.top + Math.floor((n.height - t.height) / 2), this.moveTo(u, f))
}

function deactivate() {}

function setTitle(n) {
    this.title.setValue(n)
}

function close(n) {
    n ? (this.__JR = !1, this.exclude(), this.deactivate(), this.fireEvent(y)) : this.__JR || (this.__JR = !0, this.animate(qx.phe.AnimationManager.getInstance().getAnimation(r).getDescription(), null, function() {
        this.close(!0)
    }, this))
}

function _applyVisibility(n, t) {
    n == rt && this.animate(qx.phe.AnimationManager.getInstance().getAnimation(h).getDescription());
    qx.ui.popup.Popup.prototype._applyVisibility.call(this, n, t)
}

function onResize() {
    this.centerPosition()
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