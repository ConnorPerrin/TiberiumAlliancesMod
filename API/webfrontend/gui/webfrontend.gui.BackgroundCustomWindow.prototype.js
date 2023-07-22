function getActive anonymous(value) {
    if (this.$$runtime_active !== undefined) return this.$$runtime_active;
    if (this.$$user_active !== undefined) return this.$$user_active;
    else return this.$$init_active;
}

function setActive anonymous(value) {
    this.$$setActiveImpl.apply(this, arguments);
    return value;
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

function setIcon anonymous() {
    this.setIcon.$$install && this.setIcon.$$install.call(this);
    return this.setIcon.apply(this, arguments);
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

function getStatus anonymous() {
    this.getStatus.$$install && this.getStatus.$$install();
    return this.getStatus.apply(this, arguments);
}

function setStatus anonymous() {
    this.setStatus.$$install && this.setStatus.$$install.call(this);
    return this.setStatus.apply(this, arguments);
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

function setAllowClose anonymous() {
    this.setAllowClose.$$install && this.setAllowClose.$$install.call(this);
    return this.setAllowClose.apply(this, arguments);
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

function getShowStatusbar anonymous() {
    this.getShowStatusbar.$$install && this.getShowStatusbar.$$install();
    return this.getShowStatusbar.apply(this, arguments);
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

function getCenterOnAppear anonymous() {
    this.getCenterOnAppear.$$install && this.getCenterOnAppear.$$install();
    return this.getCenterOnAppear.apply(this, arguments);
}

function setCenterOnAppear anonymous() {
    this.setCenterOnAppear.$$install && this.setCenterOnAppear.$$install.call(this);
    return this.setCenterOnAppear.apply(this, arguments);
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

function setCenterOnContainerResize anonymous() {
    this.setCenterOnContainerResize.$$install && this.setCenterOnContainerResize.$$install.call(this);
    return this.setCenterOnContainerResize.apply(this, arguments);
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

function getAutoDestroy anonymous() {
    this.getAutoDestroy.$$install && this.getAutoDestroy.$$install();
    return this.getAutoDestroy.apply(this, arguments);
}

function setAutoDestroy anonymous() {
    this.setAutoDestroy.$$install && this.setAutoDestroy.$$install.call(this);
    return this.setAutoDestroy.apply(this, arguments);
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
    var i, r, h;
    switch (n) {
        case y:
            i = new qx.ui.container.Composite(new qx.ui.layout.HBox);
            this._add(i);
            i.add(this.getChildControl(p));
            break;
        case p:
            i = new qx.ui.basic.Label;
            i.setValue(this.getStatus());
            break;
        case v:
            i = new qx.ui.container.Composite;
            this._add(i, {
                flex: 1
            });
            break;
        case t:
            r = new qx.ui.layout.Grid;
            r.setRowFlex(0, 1);
            r.setColumnFlex(1, 1);
            i = new qx.ui.container.Composite(r);
            this._add(i);
            i.addListener(ft, this._onCaptionPointerDblTap, this);
            this._activateMoveHandle(i);
            break;
        case l:
            i = new qx.ui.basic.Image(this.getIcon());
            this.getChildControl(t).add(i, {
                row: 0,
                column: 0
            });
            break;
        case s:
            i = new qx.ui.basic.Label(this.getCaption());
            i.setWidth(0);
            i.setAllowGrowX(!0);
            h = this.getChildControl(t);
            h.add(i, {
                row: 0,
                column: 1
            });
            break;
        case e:
            i = new qx.ui.form.Button;
            i.setFocusable(!1);
            i.addListener(c, this._onMinimizeButtonTap, this);
            this.getChildControl(t).add(i, {
                row: 0,
                column: 2
            });
            break;
        case f:
            i = new qx.ui.form.Button;
            i.setFocusable(!1);
            i.addListener(c, this._onRestoreButtonTap, this);
            this.getChildControl(t).add(i, {
                row: 0,
                column: 3
            });
            break;
        case u:
            i = new qx.ui.form.Button;
            i.setFocusable(!1);
            i.addListener(c, this._onMaximizeButtonTap, this);
            this.getChildControl(t).add(i, {
                row: 0,
                column: 4
            });
            break;
        case o:
            i = new qx.ui.form.Button;
            i.setFocusable(!1);
            i.addListener(c, this._onCloseButtonTap, this);
            this.getChildControl(t).add(i, {
                row: 0,
                column: 6
            })
    }
    return i || qx.ui.core.Widget.prototype._createChildControlImpl.call(this, n)
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
    (this.getAutoDestroy() || this.isVisible()) && (this.fireNonBubblingEvent(nt, qx.event.type.Event, [!1, !0]) && (this.hide(), this.fireEvent(vt)), this.getAutoDestroy() && this.dispose())
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
    ClientLib.Vis.VisMain.GetInstance().PlayUISound(webfrontend.ui.SoundButton.defaultFile);
    qx.ui.window.Window.prototype._onCloseButtonTap.call(this)
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

function getResizableTop anonymous() {
    this.getResizableTop.$$install && this.getResizableTop.$$install();
    return this.getResizableTop.apply(this, arguments);
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

function getResizableRight anonymous() {
    this.getResizableRight.$$install && this.getResizableRight.$$install();
    return this.getResizableRight.apply(this, arguments);
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

function getResizableBottom anonymous() {
    this.getResizableBottom.$$install && this.getResizableBottom.$$install();
    return this.getResizableBottom.apply(this, arguments);
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

function getResizableLeft anonymous() {
    this.getResizableLeft.$$install && this.getResizableLeft.$$install();
    return this.getResizableLeft.apply(this, arguments);
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

function getResizeSensitivity anonymous() {
    this.getResizeSensitivity.$$install && this.getResizeSensitivity.$$install();
    return this.getResizeSensitivity.apply(this, arguments);
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

function getUseResizeFrame anonymous() {
    this.getUseResizeFrame.$$install && this.getUseResizeFrame.$$install();
    return this.getUseResizeFrame.apply(this, arguments);
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

function getMovable anonymous() {
    this.getMovable.$$install && this.getMovable.$$install();
    return this.getMovable.apply(this, arguments);
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

function getUseMoveFrame anonymous() {
    this.getUseMoveFrame.$$install && this.getUseMoveFrame.$$install();
    return this.getUseMoveFrame.apply(this, arguments);
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

function getContentPaddingTop anonymous() {
    this.getContentPaddingTop.$$install && this.getContentPaddingTop.$$install();
    return this.getContentPaddingTop.apply(this, arguments);
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

function getContentPaddingRight anonymous() {
    this.getContentPaddingRight.$$install && this.getContentPaddingRight.$$install();
    return this.getContentPaddingRight.apply(this, arguments);
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

function getContentPaddingBottom anonymous() {
    this.getContentPaddingBottom.$$install && this.getContentPaddingBottom.$$install();
    return this.getContentPaddingBottom.apply(this, arguments);
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

function getContentPaddingLeft anonymous() {
    this.getContentPaddingLeft.$$install && this.getContentPaddingLeft.$$install();
    return this.getContentPaddingLeft.apply(this, arguments);
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

function getWindowContainer() {
    return this.__vj
}

function bringToFront() {
    var n = qx.core.Init.getApplication().getRoot().getWindowManager();
    n.bringToFront(this)
}

function centerPosition() {
    var t = 0,
        i = 0,
        u = qx.bom.Viewport.getWidth(window),
        f = qx.bom.Viewport.getHeight(window),
        r = this.__vj.getWidth(),
        n;
    return r == null && this.__vj.getBounds() != null && (r = this.__vj.getBounds().width), n = this.__vj.getHeight(), n == null && this.__vj.getBounds() != null && (n = this.__vj.getBounds().height), t = Math.floor((u - r) / 2), i = Math.floor((f - n) / 2), this.__vj.setLayoutProperties({
        left: t,
        top: i
    }), {
        x: t,
        y: i
    }
}

function _onClose() {
    var t = qx.core.Init.getApplication();
    t.getDesktop().removeListener(n, this._onResize, this);
    t.getDesktop().focus()
}

function _onWindowResize() {
    this.centerPosition()
}

function _onResize() {
    var n = qx.bom.Viewport.getWidth(window),
        t = qx.bom.Viewport.getHeight(window);
    this.set({
        width: n,
        maxWidth: n,
        height: t,
        maxHeight: t
    });
    this.centerPosition()
}

function _onCloseButtonTap() {
    ClientLib.Vis.VisMain.GetInstance().PlayUISound(webfrontend.ui.SoundButton.defaultFile);
    qx.ui.window.Window.prototype._onCloseButtonTap.call(this)
}

function _add(n, t) {
    n != this.__vj && n != this.__vk ? this.__vj._add(n, t) : qx.ui.window.Window.prototype._add.call(this, n, t)
}