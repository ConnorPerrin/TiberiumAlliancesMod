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

function deactivate() {
    webfrontend.gui.OverlayWidget.prototype.deactivate.call(this);
    this.hide()
}

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

function activate(n) {
    this.update(n)
}

function deactivate() {
    webfrontend.gui.OverlayWidget.prototype.deactivate.call(this);
    this.hide()
}

function update(n) {
    (this.__dS = n, this.__dS) && (this.__Ka(), this.__Kb(), this.__Kd())
}

function updateRights(n, t) {
    !(this.__JX || this.__JY) || n || t || this.getVisibility() != c ? (this.__JX && !n || this.__JY && !t) && this.getVisibility() == c && webfrontend.gui.forum.ForumOverlay.getInstance().showInsufficientRightsMessage() : (this.close(), webfrontend.gui.forum.ForumOverlay.getInstance().showInsufficientRightsMessage());
    this.__JX = n;
    this.__JY = t;
    this.update(this.__dS)
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