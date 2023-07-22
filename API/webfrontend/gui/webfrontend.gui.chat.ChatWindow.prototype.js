function getActive anonymous(value) {
    if (this.$$runtime_active !== undefined) return this.$$runtime_active;
    if (this.$$user_active !== undefined) return this.$$user_active;
    else return this.$$init_active;
}

function setActive anonymous(value) {
    this.$$setActiveImpl.apply(this, arguments);
    return value;
}

function resetActive anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_active !== undefined) {
        old = this.$$runtime_active;
    } else if (this.$$user_active !== undefined) {
        old = this.$$user_active;
    } else if (this.$$useinit_active) {
        old = this.$$init_active;
    }
    if (this.$$user_active === undefined) return;
    var computed;
    if (this.$$runtime_active !== undefined) {
        computed = this.$$runtime_active;
        delete this.$$user_active;
    } else if (this.$$user_active !== undefined) {
        delete this.$$user_active;
        if (this.$$runtime_active !== undefined) computed = this.$$runtime_active;
        if (this.$$theme_active !== undefined) computed = this.$$theme_active;
        else if (this.$$init_active !== undefined) {
            computed = this.$$init_active;
            this.$$useinit_active = true;
        }
    } else if (this.$$useinit_active) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_active;
    var self = this;
    var promise;
    promise = this._applyActive(computed, old, "active", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeActive')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeActive', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeActiveAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeActiveAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleActive anonymous() {
    return this.setActive(!this.getActive())
}

function isActive anonymous() {
    return this.getActive()
}

function getAlwaysOnTop anonymous(value) {
    if (this.$$runtime_alwaysOnTop !== undefined) return this.$$runtime_alwaysOnTop;
    if (this.$$user_alwaysOnTop !== undefined) return this.$$user_alwaysOnTop;
    else return this.$$init_alwaysOnTop;
}

function setAlwaysOnTop anonymous(value) {
    this.$$setAlwaysOnTopImpl.apply(this, arguments);
    return value;
}

function resetAlwaysOnTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAlwaysOnTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAlwaysOnTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAlwaysOnTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleAlwaysOnTop anonymous() {
    return this.setAlwaysOnTop(!this.getAlwaysOnTop())
}

function isAlwaysOnTop anonymous() {
    return this.getAlwaysOnTop()
}

function getModal anonymous(value) {
    if (this.$$runtime_modal !== undefined) return this.$$runtime_modal;
    if (this.$$user_modal !== undefined) return this.$$user_modal;
    else return this.$$init_modal;
}

function setModal anonymous(value) {
    this.$$setModalImpl.apply(this, arguments);
    return value;
}

function resetModal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initModal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeModal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeModal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleModal anonymous() {
    return this.setModal(!this.getModal())
}

function isModal anonymous() {
    return this.getModal()
}

function getCaption anonymous(value) {
    if (this.$$runtime_caption !== undefined) return this.$$runtime_caption;
    if (this.$$user_caption !== undefined) return this.$$user_caption;
    else return null;
}

function setCaption anonymous(value) {
    this.$$setCaptionImpl.apply(this, arguments);
    return value;
}

function resetCaption() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCaption() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCaption() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCaption() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIcon anonymous(value) {
    if (this.$$runtime_icon !== undefined) return this.$$runtime_icon;
    if (this.$$user_icon !== undefined) return this.$$user_icon;
    else if (this.$$theme_icon !== undefined) return this.$$theme_icon;
    else return null;
}

function setIcon anonymous(value) {
    this.$$setIconImpl.apply(this, arguments);
    return value;
}

function resetIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getStatus anonymous(value) {
    if (this.$$runtime_status !== undefined) return this.$$runtime_status;
    if (this.$$user_status !== undefined) return this.$$user_status;
    else return null;
}

function setStatus anonymous(value) {
    this.$$setStatusImpl.apply(this, arguments);
    return value;
}

function resetStatus() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initStatus() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeStatus() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeStatus() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getShowClose anonymous(value) {
    if (this.$$runtime_showClose !== undefined) return this.$$runtime_showClose;
    if (this.$$user_showClose !== undefined) return this.$$user_showClose;
    else if (this.$$theme_showClose !== undefined) return this.$$theme_showClose;
    else return this.$$init_showClose;
}

function setShowClose anonymous(value) {
    this.$$setShowCloseImpl.apply(this, arguments);
    return value;
}

function resetShowClose() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initShowClose() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeShowClose() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeShowClose() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedShowClose() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedShowClose() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function toggleShowClose anonymous() {
    return this.setShowClose(!this.getShowClose())
}

function isShowClose anonymous() {
    return this.getShowClose()
}

function getShowMaximize anonymous(value) {
    if (this.$$runtime_showMaximize !== undefined) return this.$$runtime_showMaximize;
    if (this.$$user_showMaximize !== undefined) return this.$$user_showMaximize;
    else if (this.$$theme_showMaximize !== undefined) return this.$$theme_showMaximize;
    else return this.$$init_showMaximize;
}

function setShowMaximize anonymous(value) {
    this.$$setShowMaximizeImpl.apply(this, arguments);
    return value;
}

function resetShowMaximize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initShowMaximize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeShowMaximize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeShowMaximize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedShowMaximize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedShowMaximize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function toggleShowMaximize anonymous() {
    return this.setShowMaximize(!this.getShowMaximize())
}

function isShowMaximize anonymous() {
    return this.getShowMaximize()
}

function getShowMinimize anonymous(value) {
    if (this.$$runtime_showMinimize !== undefined) return this.$$runtime_showMinimize;
    if (this.$$user_showMinimize !== undefined) return this.$$user_showMinimize;
    else if (this.$$theme_showMinimize !== undefined) return this.$$theme_showMinimize;
    else return this.$$init_showMinimize;
}

function setShowMinimize anonymous(value) {
    this.$$setShowMinimizeImpl.apply(this, arguments);
    return value;
}

function resetShowMinimize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initShowMinimize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeShowMinimize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeShowMinimize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedShowMinimize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedShowMinimize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function toggleShowMinimize anonymous() {
    return this.setShowMinimize(!this.getShowMinimize())
}

function isShowMinimize anonymous() {
    return this.getShowMinimize()
}

function getAllowClose anonymous(value) {
    if (this.$$runtime_allowClose !== undefined) return this.$$runtime_allowClose;
    if (this.$$user_allowClose !== undefined) return this.$$user_allowClose;
    else return this.$$init_allowClose;
}

function setAllowClose anonymous(value) {
    this.$$setAllowCloseImpl.apply(this, arguments);
    return value;
}

function resetAllowClose() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAllowClose() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAllowClose() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAllowClose() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleAllowClose anonymous() {
    return this.setAllowClose(!this.getAllowClose())
}

function isAllowClose anonymous() {
    return this.getAllowClose()
}

function getAllowMaximize anonymous(value) {
    if (this.$$runtime_allowMaximize !== undefined) return this.$$runtime_allowMaximize;
    if (this.$$user_allowMaximize !== undefined) return this.$$user_allowMaximize;
    else return this.$$init_allowMaximize;
}

function setAllowMaximize anonymous(value) {
    this.$$setAllowMaximizeImpl.apply(this, arguments);
    return value;
}

function resetAllowMaximize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAllowMaximize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAllowMaximize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAllowMaximize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleAllowMaximize anonymous() {
    return this.setAllowMaximize(!this.getAllowMaximize())
}

function isAllowMaximize anonymous() {
    return this.getAllowMaximize()
}

function getAllowMinimize anonymous(value) {
    if (this.$$runtime_allowMinimize !== undefined) return this.$$runtime_allowMinimize;
    if (this.$$user_allowMinimize !== undefined) return this.$$user_allowMinimize;
    else return this.$$init_allowMinimize;
}

function setAllowMinimize anonymous(value) {
    this.$$setAllowMinimizeImpl.apply(this, arguments);
    return value;
}

function resetAllowMinimize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAllowMinimize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAllowMinimize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAllowMinimize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleAllowMinimize anonymous() {
    return this.setAllowMinimize(!this.getAllowMinimize())
}

function isAllowMinimize anonymous() {
    return this.getAllowMinimize()
}

function getShowStatusbar anonymous(value) {
    if (this.$$runtime_showStatusbar !== undefined) return this.$$runtime_showStatusbar;
    if (this.$$user_showStatusbar !== undefined) return this.$$user_showStatusbar;
    else return this.$$init_showStatusbar;
}

function setShowStatusbar anonymous(value) {
    this.$$setShowStatusbarImpl.apply(this, arguments);
    return value;
}

function resetShowStatusbar() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initShowStatusbar() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeShowStatusbar() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeShowStatusbar() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleShowStatusbar anonymous() {
    return this.setShowStatusbar(!this.getShowStatusbar())
}

function isShowStatusbar anonymous() {
    return this.getShowStatusbar()
}

function getCenterOnAppear anonymous(value) {
    if (this.$$runtime_centerOnAppear !== undefined) return this.$$runtime_centerOnAppear;
    if (this.$$user_centerOnAppear !== undefined) return this.$$user_centerOnAppear;
    else return this.$$init_centerOnAppear;
}

function setCenterOnAppear anonymous(value) {
    this.$$setCenterOnAppearImpl.apply(this, arguments);
    return value;
}

function resetCenterOnAppear() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCenterOnAppear() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCenterOnAppear() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCenterOnAppear() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleCenterOnAppear anonymous() {
    return this.setCenterOnAppear(!this.getCenterOnAppear())
}

function isCenterOnAppear anonymous() {
    return this.getCenterOnAppear()
}

function getCenterOnContainerResize anonymous(value) {
    if (this.$$runtime_centerOnContainerResize !== undefined) return this.$$runtime_centerOnContainerResize;
    if (this.$$user_centerOnContainerResize !== undefined) return this.$$user_centerOnContainerResize;
    else return this.$$init_centerOnContainerResize;
}

function setCenterOnContainerResize anonymous(value) {
    this.$$setCenterOnContainerResizeImpl.apply(this, arguments);
    return value;
}

function resetCenterOnContainerResize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCenterOnContainerResize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCenterOnContainerResize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCenterOnContainerResize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleCenterOnContainerResize anonymous() {
    return this.setCenterOnContainerResize(!this.getCenterOnContainerResize())
}

function isCenterOnContainerResize anonymous() {
    return this.getCenterOnContainerResize()
}

function getAutoDestroy anonymous(value) {
    if (this.$$runtime_autoDestroy !== undefined) return this.$$runtime_autoDestroy;
    if (this.$$user_autoDestroy !== undefined) return this.$$user_autoDestroy;
    else return this.$$init_autoDestroy;
}

function setAutoDestroy anonymous(value) {
    this.$$setAutoDestroyImpl.apply(this, arguments);
    return value;
}

function resetAutoDestroy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeAutoDestroy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAutoDestroy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleAutoDestroy anonymous() {
    return this.setAutoDestroy(!this.getAutoDestroy())
}

function isAutoDestroy anonymous() {
    return this.getAutoDestroy()
}

function getChildrenContainer() {
    return this.getChildControl(v)
} [object _forwardStatesObject]
function setLayoutParent(n) {
    var t;
    t = this.getLayoutParent();
    t && this.__vi && (t.removeListenerById(this.__vi), this.__vi = null);
    qx.ui.core.Widget.prototype.setLayoutParent.call(this, n);
    n && this.getCenterOnContainerResize() && (this.__vi = n.addListener(b, this.center, this))
}

function _createChildControlImpl(n) {
    var i, t;
    switch (n) {
        case c:
            t = new qx.ui.layout.Grid;
            t.setRowFlex(0, 1);
            t.setColumnFlex(1, 1);
            i = new qx.phe.Decontainer(t);
            this._add(i)
    }
    return i || qx.ui.window.Window.prototype._createChildControlImpl.call(this, n)
}

function _updateCaptionBar() {
    var n, i = this.getIcon(),
        t;
    i ? (this.getChildControl(l).setSource(i), this._showChildControl(l)) : this._excludeChildControl(l);
    t = this.getCaption();
    t ? (this.getChildControl(s).setValue(t), this._showChildControl(s)) : this._excludeChildControl(s);
    this.getShowMinimize() ? (this._showChildControl(e), n = this.getChildControl(e), this.getAllowMinimize() ? n.resetEnabled() : n.setEnabled(!1)) : this._excludeChildControl(e);
    this.getShowMaximize() ? (this.isMaximized() ? (this._showChildControl(f), this._excludeChildControl(u)) : (this._showChildControl(u), this._excludeChildControl(f)), n = this.getChildControl(u), this.getAllowMaximize() ? n.resetEnabled() : n.setEnabled(!1)) : (this._excludeChildControl(u), this._excludeChildControl(f));
    this.getShowClose() ? (this._showChildControl(o), n = this.getChildControl(o), this.getAllowClose() ? n.resetEnabled() : n.setEnabled(!1)) : this._excludeChildControl(o)
}

function close() {
    qx.ui.window.Window.prototype.close.call(this);
    this.__bso._onDisappearFake();
    qx.core.Init.getApplication().getDesktop().focus()
}

function open() {
    this.show();
    this.setActive(!0);
    this.focus()
}

function center() {
    var i = this.getLayoutParent(),
        n;
    if (i && (n = i.getBounds(), n)) {
        var r = this.getSizeHint(),
            u = Math.round((n.width - r.width) / 2),
            t = Math.round((n.height - r.height) / 2);
        t < 0 && (t = 0);
        this.moveTo(u, t);
        return
    }
}

function maximize() {
    var t, n;
    this.isMaximized() || (t = this.getLayoutParent(), t != null && t.supportsMaximize() && this.fireNonBubblingEvent(ct, qx.event.type.Event, [!1, !0]) && (this.isVisible() || this.open(), n = this.getLayoutProperties(), this.__vg = n.left === undefined ? 0 : n.left, this.__vf = n.top === undefined ? 0 : n.top, this.setLayoutProperties({
        left: null,
        top: null,
        edge: 0
    }), this.addState(h), this._updateCaptionBar(), this.fireEvent(lt)))
}

function minimize() {
    if (this.isVisible() && this.fireNonBubblingEvent(tt, qx.event.type.Event, [!1, !0])) {
        var n = this.getLayoutProperties();
        this.__vg = n.left === undefined ? 0 : n.left;
        this.__vf = n.top === undefined ? 0 : n.top;
        this.removeState(h);
        this.hide();
        this.fireEvent(ut)
    }
}

function restore() {
    if (this.getMode() !== d && this.fireNonBubblingEvent(rt, qx.event.type.Event, [!1, !0])) {
        this.isVisible() || this.open();
        var n = this.__vg,
            t = this.__vf;
        this.setLayoutProperties({
            edge: null,
            left: n,
            top: t
        });
        this.removeState(h);
        this._updateCaptionBar();
        this.fireEvent(at)
    }
}

function moveTo(n, t) {
    this.isMaximized() || this.setLayoutProperties({
        left: n,
        top: t
    })
}

function isMaximized() {
    return this.hasState(h)
}

function getMode() {
    return this.isVisible() ? this.isMaximized() ? h : d : pt
}

function _applyActive(n, t) {
    t ? this.removeState(g) : this.addState(g)
}

function _applyModal(n, t) {
    t ? this.removeState(k) : this.addState(k)
}

function _getContentPaddingTarget() {
    return this.getChildControl(v)
}

function _applyShowStatusbar(n) {
    var t = this._getResizeFrame();
    n ? (this.addState(a), t.addState(a)) : (this.removeState(a), t.removeState(a));
    n ? this._showChildControl(y) : this._excludeChildControl(y)
}

function _applyCaptionBarChange() {
    this._updateCaptionBar()
}

function _applyStatus(n) {
    var t = this.getChildControl(p, !0);
    t && t.setValue(n)
}

function _applyFocusable(n, t) {
    qx.core.Environment.get(st) !== yt && qx.ui.core.Widget.prototype._applyFocusable.call(this, n, t)
}

function _applyCenterOnAppear(n) {
    this.__vh !== null && (this.removeListenerById(this.__vh), this.__vh = null);
    n && (this.__vh = this.addListener(et, this.center, this))
}

function _applyCenterOnContainerResize(n) {
    var t = this.getLayoutParent();
    this.__vi !== null && (t.removeListenerById(this.__vi), this.__vi = null);
    n && t && (this.__vi = t.addListener(b, this.center, this))
}

function _onWindowEventStop(n) {
    n.stopPropagation()
}

function _onWindowPointerDown() {
    this.setActive(!0)
}

function _onWindowFocusOut(n) {
    if (!this.getModal()) {
        var t = n.getRelatedTarget();
        t == null || qx.ui.core.Widget.contains(this, t) || this.setActive(!1)
    }
}

function _onCaptionPointerDblTap(n) {
    this.getAllowMaximize() && (n.getTarget() === this.getChildControl(t) || n.getTarget() === this.getChildControl(s)) && (this.isMaximized() ? this.restore() : this.maximize())
}

function _onMinimizeButtonTap() {
    this.minimize();
    this.getChildControl(e).reset()
}

function _onRestoreButtonTap() {
    this.restore();
    this.getChildControl(f).reset()
}

function _onMaximizeButtonTap() {
    this.maximize();
    this.getChildControl(u).reset()
}

function _onCloseButtonTap() {
    this.close();
    this.getChildControl(o).reset()
}

function add(n, t) {
    return this.__tl(i, n, t)
}

function remove(n) {
    return this.__tl(c, n)
}

function addAt(n, t, i) {
    this.__tl(f, n, t, i)
}

function addBefore(n, t, i) {
    this.__tl(r, n, t, i)
}

function addAfter(n, i, r) {
    this.__tl(t, n, i, r)
}

function removeAt(n) {
    return this.__tl(o, n)
}

function setLayout(n) {
    this.getChildrenContainer().setLayout(n)
}

function getLayout() {
    return this.getChildrenContainer().getLayout()
}

function getResizableTop anonymous(value) {
    if (this.$$runtime_resizableTop !== undefined) return this.$$runtime_resizableTop;
    if (this.$$user_resizableTop !== undefined) return this.$$user_resizableTop;
    else return this.$$init_resizableTop;
}

function setResizableTop anonymous(value) {
    this.$$setResizableTopImpl.apply(this, arguments);
    return value;
}

function resetResizableTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeResizableTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeResizableTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleResizableTop anonymous() {
    return this.setResizableTop(!this.getResizableTop())
}

function isResizableTop anonymous() {
    return this.getResizableTop()
}

function getResizableRight anonymous(value) {
    if (this.$$runtime_resizableRight !== undefined) return this.$$runtime_resizableRight;
    if (this.$$user_resizableRight !== undefined) return this.$$user_resizableRight;
    else return this.$$init_resizableRight;
}

function setResizableRight anonymous(value) {
    this.$$setResizableRightImpl.apply(this, arguments);
    return value;
}

function resetResizableRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeResizableRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeResizableRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleResizableRight anonymous() {
    return this.setResizableRight(!this.getResizableRight())
}

function isResizableRight anonymous() {
    return this.getResizableRight()
}

function getResizableBottom anonymous(value) {
    if (this.$$runtime_resizableBottom !== undefined) return this.$$runtime_resizableBottom;
    if (this.$$user_resizableBottom !== undefined) return this.$$user_resizableBottom;
    else return this.$$init_resizableBottom;
}

function setResizableBottom anonymous(value) {
    this.$$setResizableBottomImpl.apply(this, arguments);
    return value;
}

function resetResizableBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeResizableBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeResizableBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleResizableBottom anonymous() {
    return this.setResizableBottom(!this.getResizableBottom())
}

function isResizableBottom anonymous() {
    return this.getResizableBottom()
}

function getResizableLeft anonymous(value) {
    if (this.$$runtime_resizableLeft !== undefined) return this.$$runtime_resizableLeft;
    if (this.$$user_resizableLeft !== undefined) return this.$$user_resizableLeft;
    else return this.$$init_resizableLeft;
}

function setResizableLeft anonymous(value) {
    this.$$setResizableLeftImpl.apply(this, arguments);
    return value;
}

function resetResizableLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeResizableLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeResizableLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleResizableLeft anonymous() {
    return this.setResizableLeft(!this.getResizableLeft())
}

function isResizableLeft anonymous() {
    return this.getResizableLeft()
}

function setResizable anonymous() {
    var a = arguments[0] instanceof Array ? arguments[0] : arguments;
    a = qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));
    this.setResizableTop(a[0]);
    this.setResizableRight(a[1]);
    this.setResizableBottom(a[2]);
    this.setResizableLeft(a[3]);
}

function resetResizable anonymous() {
    this.resetResizableTop();
    this.resetResizableRight();
    this.resetResizableBottom();
    this.resetResizableLeft();
}

function getResizeSensitivity anonymous(value) {
    if (this.$$runtime_resizeSensitivity !== undefined) return this.$$runtime_resizeSensitivity;
    if (this.$$user_resizeSensitivity !== undefined) return this.$$user_resizeSensitivity;
    else return this.$$init_resizeSensitivity;
}

function setResizeSensitivity anonymous(value) {
    this.$$setResizeSensitivityImpl.apply(this, arguments);
    return value;
}

function resetResizeSensitivity() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeResizeSensitivity() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeResizeSensitivity() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getUseResizeFrame anonymous(value) {
    if (this.$$runtime_useResizeFrame !== undefined) return this.$$runtime_useResizeFrame;
    if (this.$$user_useResizeFrame !== undefined) return this.$$user_useResizeFrame;
    else return this.$$init_useResizeFrame;
}

function setUseResizeFrame anonymous(value) {
    this.$$setUseResizeFrameImpl.apply(this, arguments);
    return value;
}

function resetUseResizeFrame() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeUseResizeFrame() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeUseResizeFrame() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleUseResizeFrame anonymous() {
    return this.setUseResizeFrame(!this.getUseResizeFrame())
}

function isUseResizeFrame anonymous() {
    return this.getUseResizeFrame()
}

function setResizeHandle(n) {
    this.__uR != n && (this.__uR && (this.__uR.removeListener(u, this.__uS, this, !0), this.__uR.removeListener(f, this.__uT, this, !0)), this.__uR = n, this.__uR && (this.__uR.addListener(u, this.__uS, this, !0), this.__uR.addListener(f, this.__uT, this, !0)))
}

function _getResizeFrame() {
    var n = this.__uL;
    return n || (n = this.__uL = new qx.ui.core.Widget, n.setAppearance(c), n.exclude(), qx.core.Init.getApplication().getRoot().add(n)), n
}

function getMovable anonymous(value) {
    if (this.$$runtime_movable !== undefined) return this.$$runtime_movable;
    if (this.$$user_movable !== undefined) return this.$$user_movable;
    else return this.$$init_movable;
}

function setMovable anonymous(value) {
    this.$$setMovableImpl.apply(this, arguments);
    return value;
}

function resetMovable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeMovable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeMovable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleMovable anonymous() {
    return this.setMovable(!this.getMovable())
}

function isMovable anonymous() {
    return this.getMovable()
}

function getUseMoveFrame anonymous(value) {
    if (this.$$runtime_useMoveFrame !== undefined) return this.$$runtime_useMoveFrame;
    if (this.$$user_useMoveFrame !== undefined) return this.$$user_useMoveFrame;
    else return this.$$init_useMoveFrame;
}

function setUseMoveFrame anonymous(value) {
    this.$$setUseMoveFrameImpl.apply(this, arguments);
    return value;
}

function resetUseMoveFrame() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeUseMoveFrame() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeUseMoveFrame() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleUseMoveFrame anonymous() {
    return this.setUseMoveFrame(!this.getUseMoveFrame())
}

function isUseMoveFrame anonymous() {
    return this.getUseMoveFrame()
}

function _activateMoveHandle(n) {
    if (this.__uw) throw new Error(o);
    this.__uw = n;
    n.addListener(s, this._onMovePointerDown, this);
    n.addListener(u, this._onMovePointerUp, this);
    n.addListener(c, this._onMovePointerMove, this);
    n.addListener(f, this.__uJ, this)
}

function _onMoveRoll(n) {
    n.stop()
}

function _onMovePointerDown(i) {
    var f;
    if (this.getMovable() && !this.hasState(h)) {
        this.addListener(t, this._onMoveRoll, this);
        var r = this.getLayoutParent(),
            u = r.getContentLocation(),
            e = r.getBounds();
        qx.Class.implementsInterface(r, qx.ui.window.IDesktop) && (r.isBlocked() || (this.__uE = r.getBlockerColor(), this.__uF = r.getBlockerOpacity(), r.setBlockerColor(null), r.setBlockerOpacity(1), r.blockContent(this.getZIndex() - 1), this.__uD = !0));
        this.__uy = {
            left: u.left,
            top: u.top,
            right: u.left + e.width,
            bottom: u.top + e.height
        };
        f = this.getContentLocation();
        this.__uB = u.left;
        this.__uC = u.top;
        this.__uz = f.left - i.getDocumentLeft();
        this.__uA = f.top - i.getDocumentTop();
        this.addState(n);
        this.__uw.capture();
        this.getUseMoveFrame() && this.__uH();
        i.stop()
    }
}

function _onMovePointerMove(t) {
    var i, r;
    this.hasState(n) && (i = this.__uI(t), this.getUseMoveFrame() ? this.__uG().setDomPosition(i.viewportLeft, i.viewportTop) : (r = this.getLayoutParent().getInsets(), this.setDomPosition(i.parentLeft - (r.left || 0), i.parentTop - (r.top || 0))), t.stopPropagation())
}

function _onMovePointerUp(i) {
    var r, u, f;
    (this.hasListener(t) && this.removeListener(t, this._onMoveRoll, this), this.hasState(n)) && (this.removeState(n), r = this.getLayoutParent(), qx.Class.implementsInterface(r, qx.ui.window.IDesktop) && this.__uD && (r.unblock(), r.setBlockerColor(this.__uE), r.setBlockerOpacity(this.__uF), this.__uE = null, this.__uF = 0, this.__uD = !1), this.__uw.releaseCapture(), u = this.__uI(i), f = this.getLayoutParent().getInsets(), this.setLayoutProperties({
        left: u.parentLeft - (f.left || 0),
        top: u.parentTop - (f.top || 0)
    }), this.getUseMoveFrame() && this.__uG().exclude(), i.stopPropagation())
}

function getContentPaddingTop anonymous(value) {
    if (this.$$runtime_contentPaddingTop !== undefined) return this.$$runtime_contentPaddingTop;
    if (this.$$user_contentPaddingTop !== undefined) return this.$$user_contentPaddingTop;
    else if (this.$$theme_contentPaddingTop !== undefined) return this.$$theme_contentPaddingTop;
    else return this.$$init_contentPaddingTop;
}

function setContentPaddingTop anonymous(value) {
    this.$$setContentPaddingTopImpl.apply(this, arguments);
    return value;
}

function resetContentPaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initContentPaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeContentPaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeContentPaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedContentPaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedContentPaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getContentPaddingRight anonymous(value) {
    if (this.$$runtime_contentPaddingRight !== undefined) return this.$$runtime_contentPaddingRight;
    if (this.$$user_contentPaddingRight !== undefined) return this.$$user_contentPaddingRight;
    else if (this.$$theme_contentPaddingRight !== undefined) return this.$$theme_contentPaddingRight;
    else return this.$$init_contentPaddingRight;
}

function setContentPaddingRight anonymous(value) {
    this.$$setContentPaddingRightImpl.apply(this, arguments);
    return value;
}

function resetContentPaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initContentPaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeContentPaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeContentPaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedContentPaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedContentPaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getContentPaddingBottom anonymous(value) {
    if (this.$$runtime_contentPaddingBottom !== undefined) return this.$$runtime_contentPaddingBottom;
    if (this.$$user_contentPaddingBottom !== undefined) return this.$$user_contentPaddingBottom;
    else if (this.$$theme_contentPaddingBottom !== undefined) return this.$$theme_contentPaddingBottom;
    else return this.$$init_contentPaddingBottom;
}

function setContentPaddingBottom anonymous(value) {
    this.$$setContentPaddingBottomImpl.apply(this, arguments);
    return value;
}

function resetContentPaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initContentPaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeContentPaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeContentPaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedContentPaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedContentPaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getContentPaddingLeft anonymous(value) {
    if (this.$$runtime_contentPaddingLeft !== undefined) return this.$$runtime_contentPaddingLeft;
    if (this.$$user_contentPaddingLeft !== undefined) return this.$$user_contentPaddingLeft;
    else if (this.$$theme_contentPaddingLeft !== undefined) return this.$$theme_contentPaddingLeft;
    else return this.$$init_contentPaddingLeft;
}

function setContentPaddingLeft anonymous(value) {
    this.$$setContentPaddingLeftImpl.apply(this, arguments);
    return value;
}

function resetContentPaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initContentPaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeContentPaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeContentPaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedContentPaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedContentPaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function setContentPadding anonymous() {
    var a = arguments[0] instanceof Array ? arguments[0] : arguments;
    a = qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));
    this.setContentPaddingTop(a[0]);
    this.setContentPaddingRight(a[1]);
    this.setContentPaddingBottom(a[2]);
    this.setContentPaddingLeft(a[3]);
}

function resetContentPadding anonymous() {
    this.resetContentPaddingTop();
    this.resetContentPaddingRight();
    this.resetContentPaddingBottom();
    this.resetContentPaddingLeft();
}

function setThemedContentPadding anonymous() {
    var a = arguments[0] instanceof Array ? arguments[0] : arguments;
    a = qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));
    this.setThemedContentPaddingTop(a[0]);
    this.setThemedContentPaddingRight(a[1]);
    this.setThemedContentPaddingBottom(a[2]);
    this.setThemedContentPaddingLeft(a[3]);
}

function resetThemedContentPadding anonymous() {
    this.resetThemedContentPaddingTop();
    this.resetThemedContentPaddingRight();
    this.resetThemedContentPaddingBottom();
    this.resetThemedContentPaddingLeft();
}

function _applyContentPadding(n, t, u, f) {
    var o = this._getContentPaddingTarget(),
        s, e;
    n == null ? (s = this.__rX[u], o[s]()) : f == r || f == i ? (e = this.__rW[u], o[e](n)) : (e = this.__rV[u], o[e](n))
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

function setThemedPaddingTop anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_paddingTop !== undefined) {
            old = this.$$runtime_paddingTop;
        } else if (this.$$user_paddingTop !== undefined) {
            old = this.$$user_paddingTop;
        } else if (this.$$theme_paddingTop !== undefined) {
            old = this.$$theme_paddingTop;
        } else if (this.$$useinit_paddingTop) {
            old = this.$$init_paddingTop;
        }
        if (equ.call(this, this.$$theme_paddingTop, value)) return value;
        var computed;
        if (this.$$runtime_paddingTop !== undefined) {
            computed = this.$$runtime_paddingTop;
            this.$$theme_paddingTop = value;
        } else if (this.$$user_paddingTop !== undefined) {
            computed = this.$$user_paddingTop;
            this.$$theme_paddingTop = value;
        } else if (this.$$theme_paddingTop !== undefined) {
            computed = this.$$theme_paddingTop = value;
        } else if (this.$$useinit_paddingTop) {
            delete this.$$useinit_paddingTop;
            computed = this.$$theme_paddingTop = value;
        } else {
            computed = this.$$theme_paddingTop = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_paddingTop;
        var self = this;
        var promise;
        promise = this._applyPadding(computed, old, "paddingTop", "setThemed");

        function fire() {
            var tracker = {};
            if (tracker.promise)
                return tracker.promise.then(function() {
                    return computed;
                });
            return computed;
        }
        if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
        return fire();
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function setThemedPaddingRight anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_paddingRight !== undefined) {
            old = this.$$runtime_paddingRight;
        } else if (this.$$user_paddingRight !== undefined) {
            old = this.$$user_paddingRight;
        } else if (this.$$theme_paddingRight !== undefined) {
            old = this.$$theme_paddingRight;
        } else if (this.$$useinit_paddingRight) {
            old = this.$$init_paddingRight;
        }
        if (equ.call(this, this.$$theme_paddingRight, value)) return value;
        var computed;
        if (this.$$runtime_paddingRight !== undefined) {
            computed = this.$$runtime_paddingRight;
            this.$$theme_paddingRight = value;
        } else if (this.$$user_paddingRight !== undefined) {
            computed = this.$$user_paddingRight;
            this.$$theme_paddingRight = value;
        } else if (this.$$theme_paddingRight !== undefined) {
            computed = this.$$theme_paddingRight = value;
        } else if (this.$$useinit_paddingRight) {
            delete this.$$useinit_paddingRight;
            computed = this.$$theme_paddingRight = value;
        } else {
            computed = this.$$theme_paddingRight = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_paddingRight;
        var self = this;
        var promise;
        promise = this._applyPadding(computed, old, "paddingRight", "setThemed");

        function fire() {
            var tracker = {};
            if (tracker.promise)
                return tracker.promise.then(function() {
                    return computed;
                });
            return computed;
        }
        if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
        return fire();
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function setThemedPaddingBottom anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_paddingBottom !== undefined) {
            old = this.$$runtime_paddingBottom;
        } else if (this.$$user_paddingBottom !== undefined) {
            old = this.$$user_paddingBottom;
        } else if (this.$$theme_paddingBottom !== undefined) {
            old = this.$$theme_paddingBottom;
        } else if (this.$$useinit_paddingBottom) {
            old = this.$$init_paddingBottom;
        }
        if (equ.call(this, this.$$theme_paddingBottom, value)) return value;
        var computed;
        if (this.$$runtime_paddingBottom !== undefined) {
            computed = this.$$runtime_paddingBottom;
            this.$$theme_paddingBottom = value;
        } else if (this.$$user_paddingBottom !== undefined) {
            computed = this.$$user_paddingBottom;
            this.$$theme_paddingBottom = value;
        } else if (this.$$theme_paddingBottom !== undefined) {
            computed = this.$$theme_paddingBottom = value;
        } else if (this.$$useinit_paddingBottom) {
            delete this.$$useinit_paddingBottom;
            computed = this.$$theme_paddingBottom = value;
        } else {
            computed = this.$$theme_paddingBottom = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_paddingBottom;
        var self = this;
        var promise;
        promise = this._applyPadding(computed, old, "paddingBottom", "setThemed");

        function fire() {
            var tracker = {};
            if (tracker.promise)
                return tracker.promise.then(function() {
                    return computed;
                });
            return computed;
        }
        if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
        return fire();
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function setThemedPaddingLeft anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_paddingLeft !== undefined) {
            old = this.$$runtime_paddingLeft;
        } else if (this.$$user_paddingLeft !== undefined) {
            old = this.$$user_paddingLeft;
        } else if (this.$$theme_paddingLeft !== undefined) {
            old = this.$$theme_paddingLeft;
        } else if (this.$$useinit_paddingLeft) {
            old = this.$$init_paddingLeft;
        }
        if (equ.call(this, this.$$theme_paddingLeft, value)) return value;
        var computed;
        if (this.$$runtime_paddingLeft !== undefined) {
            computed = this.$$runtime_paddingLeft;
            this.$$theme_paddingLeft = value;
        } else if (this.$$user_paddingLeft !== undefined) {
            computed = this.$$user_paddingLeft;
            this.$$theme_paddingLeft = value;
        } else if (this.$$theme_paddingLeft !== undefined) {
            computed = this.$$theme_paddingLeft = value;
        } else if (this.$$useinit_paddingLeft) {
            delete this.$$useinit_paddingLeft;
            computed = this.$$theme_paddingLeft = value;
        } else {
            computed = this.$$theme_paddingLeft = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_paddingLeft;
        var self = this;
        var promise;
        promise = this._applyPadding(computed, old, "paddingLeft", "setThemed");

        function fire() {
            var tracker = {};
            if (tracker.promise)
                return tracker.promise.then(function() {
                    return computed;
                });
            return computed;
        }
        if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
        return fire();
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
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

function getPosPercentX anonymous(value) {
    if (this.$$runtime_posPercentX !== undefined) return this.$$runtime_posPercentX;
    if (this.$$user_posPercentX !== undefined) return this.$$user_posPercentX;
    else return this.$$init_posPercentX;
}

function setPosPercentX anonymous(value) {
    this.$$setPosPercentXImpl.apply(this, arguments);
    return value;
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

function getPosPercentY anonymous(value) {
    if (this.$$runtime_posPercentY !== undefined) return this.$$runtime_posPercentY;
    if (this.$$user_posPercentY !== undefined) return this.$$user_posPercentY;
    else return this.$$init_posPercentY;
}

function setPosPercentY anonymous(value) {
    this.$$setPosPercentYImpl.apply(this, arguments);
    return value;
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

function getPosPercentXold anonymous() {
    this.getPosPercentXold.$$install && this.getPosPercentXold.$$install();
    return this.getPosPercentXold.apply(this, arguments);
}

function setPosPercentXold anonymous() {
    this.setPosPercentXold.$$install && this.setPosPercentXold.$$install.call(this);
    return this.setPosPercentXold.apply(this, arguments);
}

function resetPosPercentXold() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimePosPercentXold() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePosPercentXold() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getPosPercentYold anonymous() {
    this.getPosPercentYold.$$install && this.getPosPercentYold.$$install();
    return this.getPosPercentYold.apply(this, arguments);
}

function setPosPercentYold anonymous() {
    this.setPosPercentYold.$$install && this.setPosPercentYold.$$install.call(this);
    return this.setPosPercentYold.apply(this, arguments);
}

function resetPosPercentYold() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimePosPercentYold() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePosPercentYold() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getDocked anonymous(value) {
    if (this.$$runtime_docked !== undefined) return this.$$runtime_docked;
    if (this.$$user_docked !== undefined) return this.$$user_docked;
    else return this.$$init_docked;
}

function setDocked anonymous() {
    this.setDocked.$$install && this.setDocked.$$install.call(this);
    return this.setDocked.apply(this, arguments);
}

function resetDocked() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initDocked() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeDocked() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDocked() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getDockedEvents anonymous() {
    this.getDockedEvents.$$install && this.getDockedEvents.$$install();
    return this.getDockedEvents.apply(this, arguments);
}

function setDockedEvents anonymous(value) {
    this.$$setDockedEventsImpl.apply(this, arguments);
    return value;
}

function resetDockedEvents() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initDockedEvents() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeDockedEvents() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDockedEvents() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getWidthAvailable anonymous(value) {
    if (this.$$runtime_widthAvailable !== undefined) return this.$$runtime_widthAvailable;
    if (this.$$user_widthAvailable !== undefined) return this.$$user_widthAvailable;
    else return this.$$init_widthAvailable;
}

function setWidthAvailable anonymous(value) {
    this.$$setWidthAvailableImpl.apply(this, arguments);
    return value;
}

function resetWidthAvailable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initWidthAvailable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeWidthAvailable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeWidthAvailable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getPreferredW anonymous() {
    this.getPreferredW.$$install && this.getPreferredW.$$install();
    return this.getPreferredW.apply(this, arguments);
}

function setPreferredW anonymous() {
    this.setPreferredW.$$install && this.setPreferredW.$$install.call(this);
    return this.setPreferredW.apply(this, arguments);
}

function resetPreferredW() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimePreferredW() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePreferredW() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getPreferredH anonymous() {
    this.getPreferredH.$$install && this.getPreferredH.$$install();
    return this.getPreferredH.apply(this, arguments);
}

function setPreferredH anonymous() {
    this.setPreferredH.$$install && this.setPreferredH.$$install.call(this);
    return this.setPreferredH.apply(this, arguments);
}

function resetPreferredH() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimePreferredH() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePreferredH() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getFocused anonymous(value) {
    if (this.$$runtime_focused !== undefined) return this.$$runtime_focused;
    if (this.$$user_focused !== undefined) return this.$$user_focused;
    else return this.$$init_focused;
}

function setFocused anonymous(value) {
    this.$$setFocusedImpl.apply(this, arguments);
    return value;
}

function resetFocused() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initFocused() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeFocused() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeFocused() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getMoused anonymous(value) {
    if (this.$$runtime_moused !== undefined) return this.$$runtime_moused;
    if (this.$$user_moused !== undefined) return this.$$user_moused;
    else return this.$$init_moused;
}

function setMoused anonymous() {
    this.setMoused.$$install && this.setMoused.$$install.call(this);
    return this.setMoused.apply(this, arguments);
}

function resetMoused() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initMoused() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeMoused() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeMoused() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getFocusedOrMoused anonymous() {
    this.getFocusedOrMoused.$$install && this.getFocusedOrMoused.$$install();
    return this.getFocusedOrMoused.apply(this, arguments);
}

function setFocusedOrMoused anonymous(value) {
    this.$$setFocusedOrMousedImpl.apply(this, arguments);
    return value;
}

function resetFocusedOrMoused() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initFocusedOrMoused() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeFocusedOrMoused() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeFocusedOrMoused() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getChatWidget() {
    return this.__bso
}

function getIgnoreList() {
    return this.__bsr
}

function prepareWhisperTo(n) {
    qx.core.Init.getApplication().toggleChat(!0);
    var t = this.getChatWidget();
    t.getEditable().setValue(b + n + it);
    t.setCursorEnd();
    t.focusInput()
}

function _createChildControlImpl(n) {
    var i, t;
    switch (n) {
        case c:
            t = new qx.ui.layout.Grid;
            t.setRowFlex(0, 1);
            t.setColumnFlex(1, 1);
            i = new qx.phe.Decontainer(t);
            this._add(i)
    }
    return i || qx.ui.window.Window.prototype._createChildControlImpl.call(this, n)
}

function show() {
    qx.ui.window.Window.prototype.show.call(this);
    this.__Bf.schedule()
}

function close() {
    qx.ui.window.Window.prototype.close.call(this);
    this.__bso._onDisappearFake();
    qx.core.Init.getApplication().getDesktop().focus()
}

function updatePosition() {
    var t = qx.core.Init.getApplication().getMainContainer().getBounds(),
        n = qx.core.Init.getApplication().getDesktop().getBounds();
    if (n) {
        var i = this.getPosPercentX() / 100,
            r = this.getPosPercentY() / 100,
            u = n.left + Math.floor(n.width * i),
            f = n.top + Math.floor(n.height * r);
        this.moveTo(u + t.left, f + t.top)
    }
}

function onDesktopResize() {
    this.updatePosition()
}

function deactivate() {
    qx.core.Init.getApplication().toggleChat(!1);
    qx.core.Init.getApplication().triggerDesktopResize()
}

function onClose() {
    this.getDocked() || (this.__bss(!1), this.__bss(!0));
    this.close();
    this.deactivate()
}

function GetFocusStatus() {
    return this.__bsq
}

function bringToFront() {
    var n = qx.core.Init.getApplication().getRoot().getWindowManager();
    n.bringToFront(this)
}

function focusLine() {}

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

function setThemedPaddingTop anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_paddingTop !== undefined) {
            old = this.$$runtime_paddingTop;
        } else if (this.$$user_paddingTop !== undefined) {
            old = this.$$user_paddingTop;
        } else if (this.$$theme_paddingTop !== undefined) {
            old = this.$$theme_paddingTop;
        } else if (this.$$useinit_paddingTop) {
            old = this.$$init_paddingTop;
        }
        if (equ.call(this, this.$$theme_paddingTop, value)) return value;
        var computed;
        if (this.$$runtime_paddingTop !== undefined) {
            computed = this.$$runtime_paddingTop;
            this.$$theme_paddingTop = value;
        } else if (this.$$user_paddingTop !== undefined) {
            computed = this.$$user_paddingTop;
            this.$$theme_paddingTop = value;
        } else if (this.$$theme_paddingTop !== undefined) {
            computed = this.$$theme_paddingTop = value;
        } else if (this.$$useinit_paddingTop) {
            delete this.$$useinit_paddingTop;
            computed = this.$$theme_paddingTop = value;
        } else {
            computed = this.$$theme_paddingTop = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_paddingTop;
        var self = this;
        var promise;
        promise = this._applyPadding(computed, old, "paddingTop", "setThemed");

        function fire() {
            var tracker = {};
            if (tracker.promise)
                return tracker.promise.then(function() {
                    return computed;
                });
            return computed;
        }
        if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
        return fire();
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function setThemedPaddingRight anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_paddingRight !== undefined) {
            old = this.$$runtime_paddingRight;
        } else if (this.$$user_paddingRight !== undefined) {
            old = this.$$user_paddingRight;
        } else if (this.$$theme_paddingRight !== undefined) {
            old = this.$$theme_paddingRight;
        } else if (this.$$useinit_paddingRight) {
            old = this.$$init_paddingRight;
        }
        if (equ.call(this, this.$$theme_paddingRight, value)) return value;
        var computed;
        if (this.$$runtime_paddingRight !== undefined) {
            computed = this.$$runtime_paddingRight;
            this.$$theme_paddingRight = value;
        } else if (this.$$user_paddingRight !== undefined) {
            computed = this.$$user_paddingRight;
            this.$$theme_paddingRight = value;
        } else if (this.$$theme_paddingRight !== undefined) {
            computed = this.$$theme_paddingRight = value;
        } else if (this.$$useinit_paddingRight) {
            delete this.$$useinit_paddingRight;
            computed = this.$$theme_paddingRight = value;
        } else {
            computed = this.$$theme_paddingRight = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_paddingRight;
        var self = this;
        var promise;
        promise = this._applyPadding(computed, old, "paddingRight", "setThemed");

        function fire() {
            var tracker = {};
            if (tracker.promise)
                return tracker.promise.then(function() {
                    return computed;
                });
            return computed;
        }
        if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
        return fire();
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function setThemedPaddingBottom anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_paddingBottom !== undefined) {
            old = this.$$runtime_paddingBottom;
        } else if (this.$$user_paddingBottom !== undefined) {
            old = this.$$user_paddingBottom;
        } else if (this.$$theme_paddingBottom !== undefined) {
            old = this.$$theme_paddingBottom;
        } else if (this.$$useinit_paddingBottom) {
            old = this.$$init_paddingBottom;
        }
        if (equ.call(this, this.$$theme_paddingBottom, value)) return value;
        var computed;
        if (this.$$runtime_paddingBottom !== undefined) {
            computed = this.$$runtime_paddingBottom;
            this.$$theme_paddingBottom = value;
        } else if (this.$$user_paddingBottom !== undefined) {
            computed = this.$$user_paddingBottom;
            this.$$theme_paddingBottom = value;
        } else if (this.$$theme_paddingBottom !== undefined) {
            computed = this.$$theme_paddingBottom = value;
        } else if (this.$$useinit_paddingBottom) {
            delete this.$$useinit_paddingBottom;
            computed = this.$$theme_paddingBottom = value;
        } else {
            computed = this.$$theme_paddingBottom = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_paddingBottom;
        var self = this;
        var promise;
        promise = this._applyPadding(computed, old, "paddingBottom", "setThemed");

        function fire() {
            var tracker = {};
            if (tracker.promise)
                return tracker.promise.then(function() {
                    return computed;
                });
            return computed;
        }
        if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
        return fire();
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function setThemedPaddingLeft anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_paddingLeft !== undefined) {
            old = this.$$runtime_paddingLeft;
        } else if (this.$$user_paddingLeft !== undefined) {
            old = this.$$user_paddingLeft;
        } else if (this.$$theme_paddingLeft !== undefined) {
            old = this.$$theme_paddingLeft;
        } else if (this.$$useinit_paddingLeft) {
            old = this.$$init_paddingLeft;
        }
        if (equ.call(this, this.$$theme_paddingLeft, value)) return value;
        var computed;
        if (this.$$runtime_paddingLeft !== undefined) {
            computed = this.$$runtime_paddingLeft;
            this.$$theme_paddingLeft = value;
        } else if (this.$$user_paddingLeft !== undefined) {
            computed = this.$$user_paddingLeft;
            this.$$theme_paddingLeft = value;
        } else if (this.$$theme_paddingLeft !== undefined) {
            computed = this.$$theme_paddingLeft = value;
        } else if (this.$$useinit_paddingLeft) {
            delete this.$$useinit_paddingLeft;
            computed = this.$$theme_paddingLeft = value;
        } else {
            computed = this.$$theme_paddingLeft = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_paddingLeft;
        var self = this;
        var promise;
        promise = this._applyPadding(computed, old, "paddingLeft", "setThemed");

        function fire() {
            var tracker = {};
            if (tracker.promise)
                return tracker.promise.then(function() {
                    return computed;
                });
            return computed;
        }
        if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
        return fire();
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetWidth anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_width !== undefined) {
        old = this.$$runtime_width;
    } else if (this.$$user_width !== undefined) {
        old = this.$$user_width;
    } else if (this.$$theme_width !== undefined) {
        old = this.$$theme_width;
    } else if (this.$$useinit_width) {
        old = this.$$init_width;
    }
    if (this.$$user_width === undefined) return;
    var computed;
    if (this.$$runtime_width !== undefined) {
        computed = this.$$runtime_width;
        delete this.$$user_width;
    } else if (this.$$user_width !== undefined) {
        delete this.$$user_width;
        if (this.$$runtime_width !== undefined) computed = this.$$runtime_width;
        if (this.$$theme_width !== undefined) computed = this.$$theme_width;
        else if (this.$$init_width !== undefined) {
            computed = this.$$init_width;
            this.$$useinit_width = true;
        }
    } else if (this.$$theme_width !== undefined) {} else if (this.$$useinit_width) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_width;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "width", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeWidth')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeWidth', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeWidthAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeWidthAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetHeight anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_height !== undefined) {
        old = this.$$runtime_height;
    } else if (this.$$user_height !== undefined) {
        old = this.$$user_height;
    } else if (this.$$theme_height !== undefined) {
        old = this.$$theme_height;
    } else if (this.$$useinit_height) {
        old = this.$$init_height;
    }
    if (this.$$user_height === undefined) return;
    var computed;
    if (this.$$runtime_height !== undefined) {
        computed = this.$$runtime_height;
        delete this.$$user_height;
    } else if (this.$$user_height !== undefined) {
        delete this.$$user_height;
        if (this.$$runtime_height !== undefined) computed = this.$$runtime_height;
        if (this.$$theme_height !== undefined) computed = this.$$theme_height;
        else if (this.$$init_height !== undefined) {
            computed = this.$$init_height;
            this.$$useinit_height = true;
        }
    } else if (this.$$theme_height !== undefined) {} else if (this.$$useinit_height) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_height;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "height", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeHeight')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeHeight', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeHeightAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeHeightAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetActive anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_active !== undefined) {
        old = this.$$runtime_active;
    } else if (this.$$user_active !== undefined) {
        old = this.$$user_active;
    } else if (this.$$useinit_active) {
        old = this.$$init_active;
    }
    if (this.$$user_active === undefined) return;
    var computed;
    if (this.$$runtime_active !== undefined) {
        computed = this.$$runtime_active;
        delete this.$$user_active;
    } else if (this.$$user_active !== undefined) {
        delete this.$$user_active;
        if (this.$$runtime_active !== undefined) computed = this.$$runtime_active;
        if (this.$$theme_active !== undefined) computed = this.$$theme_active;
        else if (this.$$init_active !== undefined) {
            computed = this.$$init_active;
            this.$$useinit_active = true;
        }
    } else if (this.$$useinit_active) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_active;
    var self = this;
    var promise;
    promise = this._applyActive(computed, old, "active", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeActive')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeActive', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeActiveAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeActiveAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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