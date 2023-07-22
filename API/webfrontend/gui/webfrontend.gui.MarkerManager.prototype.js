function toHashCode() {
    return this.$$hash || this.$$disposed || (!qx.core.Environment.get(e) || qx.Class.hasInterface(this.constructor, qx.core.IDisposable) ? qx.core.ObjectRegistry.register(this) : qx.core.ObjectRegistry.toHashCode(this)), this.$$hash
}

function toUuid() {
    return this.$$uuid || (this.$$uuid = qx.util.Uuid.createUuidV4()), this.$$uuid
}

function setExplicitUuid(n) {
    if (Boolean(this.$$uuid)) throw new Error(f);
    this.$$uuid = n
}

function base(n) {
    return arguments.length === 1 ? n.callee.base.call(this) : n.callee.base.apply(this, Array.prototype.slice.call(arguments, 1))
}

function self(n) {
    return n.callee.self
}

function clone() {
    var r, s;
    if (!qx.core.Environment.get(n)) throw new Error(i);
    var u = this.constructor,
        f = new u,
        e = qx.Class.getProperties(u),
        o = this.__bO.$$store.user,
        h = this.__bO.$$method.set,
        t;
    for (r = 0, s = e.length; r < s; r++) t = e[r], this.hasOwnProperty(o[t]) && f[h[t]](this[o[t]]);
    return f
}

function setUserData(n, t) {
    this.__ds || (this.__ds = {});
    this.__ds[n] = t
}

function getUserData(n) {
    if (!this.__ds) return null;
    var t = this.__ds[n];
    return t === undefined ? null : t
}

function resetUserData() {
    this.__ds = null
}

function isDisposed() {
    return this.$$disposed || !1
}

function isDisposing() {
    return this.$$disposing || !1
}

function dispose() {
    var n, i, t, r;
    if (!this.$$disposed) {
        for (this.$$disposed = !0, this.$$disposing = !0, this.$$instance = null, this.$$allowconstruct = null, n = this.constructor; n.superclass;) {
            if (n.$$destructor && n.$$destructor.call(this), n.$$includes)
                for (i = n.$$flatIncludes, t = 0, r = i.length; t < r; t++) i[t].$$destructor && i[t].$$destructor.call(this);
            n = n.superclass
        }
        this.$$disposing = !1
    }
}

function _disposeObjects() {
    qx.util.DisposeUtil.disposeObjects(this, arguments)
}

function _disposeSingletonObjects() {
    qx.util.DisposeUtil.disposeObjects(this, arguments, !0)
}

function _disposeArray(n) {
    qx.util.DisposeUtil.disposeArray(this, n)
}

function _disposeMap(n) {
    qx.util.DisposeUtil.disposeMap(this, n)
}

function bindAsync(n, t, i, r) {
    var u = qx.data.SingleValueBinding.bind(this, n, t, i, r);
    return u.initialPromise ? u.initialPromise.then(function() {
        return u.initialPromise = null, u
    }) : qx.Promise.resolve(u)
}

function removeBinding(n) {
    qx.data.SingleValueBinding.removeBindingFromObject(this, n)
}

function removeRelatedBindings(n) {
    qx.data.SingleValueBinding.removeRelatedBindings(this, n)
}

function removeAllBindings() {
    qx.data.SingleValueBinding.removeAllBindingsForObject(this)
}

function getBindings() {
    return qx.data.SingleValueBinding.getAllBindingsForObject(this)
}

function debug() {
    this.__cP(r, arguments)
}

function info() {
    this.__cP(n, arguments)
}

function warn() {
    this.__cP(i, arguments)
}

function error() {
    this.__cP(t, arguments)
}

function trace() {
    this.__cP(u, arguments)
}

function addListener(n, t, i, r) {
    return this.$$disposed ? null : this.__dr.addListener(this, n, t, i, r)
}

function addListenerOnce(n, t, i, r) {
    var e = this,
        f, u;
    return i || (i = this), u = function(n) {
        e.removeListenerById(f);
        t.call(i, n)
    }, t.$$wrapped_callback || (t.$$wrapped_callback = {}), t.$$wrapped_callback[n + this.toHashCode()] = u, f = this.addListener(n, u, i, r)
}

function removeListener(n, t, i, r) {
    if (!this.$$disposed) {
        if (t.$$wrapped_callback && t.$$wrapped_callback[n + this.$$hash]) {
            var u = t.$$wrapped_callback[n + this.$$hash];
            delete t.$$wrapped_callback[n + this.$$hash];
            t = u
        }
        return this.__dr.removeListener(this, n, t, i, r)
    }
    return !1
}

function removeListenerById(n) {
    return this.$$disposed ? !1 : this.__dr.removeListenerById(this, n)
}

function hasListener(n, t) {
    return this.__dr.hasListener(this, n, t)
}

function dispatchEvent(n) {
    return this.$$disposed ? !0 : this.__dr.dispatchEvent(this, n)
}

function fireEvent(n, t, i) {
    return this.$$disposed ? !0 : this.__dr.fireEvent(this, n, t, i)
}

function fireEventAsync(t, r, u) {
    if (!qx.core.Environment.get(n)) throw new Error(this.classname + i);
    return this.$$disposed ? qx.Promise.resolve(!0) : this.__dr.fireEventAsync(this, t, r, u)
}

function fireNonBubblingEvent(n, t, i) {
    return this.$$disposed ? !0 : this.__dr.fireNonBubblingEvent(this, n, t, i)
}

function fireNonBubblingEventAsync(i, r, u) {
    if (!qx.core.Environment.get(n)) throw new Error(this.classname + t);
    return this.$$disposed ? qx.Promise.resolve(!0) : this.__dr.fireNonBubblingEventAsync(this, i, r, u)
}

function fireDataEvent(n, t, i, r) {
    return this.$$disposed ? !0 : (i === undefined && (i = null), this.__dr.fireEvent(this, n, qx.event.type.Data, [t, i, !!r]))
}

function fireDataEventAsync(t, i, u, f) {
    if (!qx.core.Environment.get(n)) throw new Error(this.classname + r);
    return this.$$disposed ? qx.Promise.resolve(!0) : (u === undefined && (u = null), this.__dr.fireEventAsync(this, t, qx.event.type.Data, [i, u, !!f]))
}

function set(i, r) {
    var f = qx.core.Property.$$method.set,
        u;
    if (qx.Bootstrap.isString(i)) {
        if (!this[f[i]]) {
            if (this[t + qx.Bootstrap.firstUp(i)] != undefined) return this[t + qx.Bootstrap.firstUp(i)](r), this;
            throw new Error(n + i);
        }
        return this[f[i]](r)
    }
    for (u in i) {
        if (!this[f[u]]) {
            if (this[t + qx.Bootstrap.firstUp(u)] != undefined) {
                this[t + qx.Bootstrap.firstUp(u)](i[u]);
                continue
            }
            throw new Error(n + u);
        }
        this[f[u]](i[u])
    }
    return this
}

function get(t) {
    var r = qx.core.Property.$$method.get;
    if (!this[r[t]]) {
        if (this[i + qx.Bootstrap.firstUp(t)] != undefined) return this[i + qx.Bootstrap.firstUp(t)]();
        throw new Error(n + t);
    }
    return this[r[t]]()
}

function reset(t) {
    var i = qx.core.Property.$$method.reset;
    if (!this[i[t]]) {
        if (this[r + qx.Bootstrap.firstUp(t)] != undefined) {
            this[r + qx.Bootstrap.firstUp(t)]();
            return
        }
        throw new Error(n + t);
    }
    this[i[t]]()
}

function isPropertyInitialized(n) {
    return this[f + n] !== undefined || this[u + n] !== undefined
}

function getQxOwner anonymous() {
    this.getQxOwner.$$install && this.getQxOwner.$$install();
    return this.getQxOwner.apply(this, arguments);
}

function setQxOwner anonymous() {
    this.setQxOwner.$$install && this.setQxOwner.$$install.call(this);
    return this.setQxOwner.apply(this, arguments);
}

function resetQxOwner() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initQxOwner() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeQxOwner() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeQxOwner() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getQxObjectId anonymous(value) {
    if (this.$$runtime_qxObjectId !== undefined) return this.$$runtime_qxObjectId;
    if (this.$$user_qxObjectId !== undefined) return this.$$user_qxObjectId;
    else return this.$$init_qxObjectId;
}

function setQxObjectId anonymous() {
    this.setQxObjectId.$$install && this.setQxObjectId.$$install.call(this);
    return this.setQxObjectId.apply(this, arguments);
}

function resetQxObjectId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initQxObjectId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeQxObjectId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeQxObjectId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function _applyQxOwner() {
    if (!this.__ce) throw new Error(v);
}

function _applyQxObjectId(n, t) {
    if (!this.__ce) {
        var i = this.getQxOwner();
        i && i.__cf(this, n, t);
        this._cascadeQxObjectIdChanges()
    }
}

function _cascadeQxObjectIdChanges() {
    var n, i, t;
    if (typeof this.getContentElement == s && (n = this.getContentElement(), n && n.updateObjectId()), this.__cd)
        for (i in this.__cd) t = this.__cd[i], t instanceof qx.core.Object && t._cascadeQxObjectIdChanges()
}

function getQxObject(t) {
    var e, r, u, i;
    if (this.__cd && (e = this.__cd[t], e !== undefined)) return e;
    if (r = null, u = t.indexOf(h), u > -1 && (r = t.substring(u + 1), t = t.substring(0, u)), i = undefined, t.indexOf(n) > -1) {
        var o = t.split(n),
            f = this,
            s = o.every(function(n) {
                if (!n.length) return !0;
                if (!f) return !1;
                var t = f.getQxObject(n);
                if (t !== undefined) return f = t, !0
            });
        s && (i = f)
    } else i = this._createQxObject(t);
    return i && r ? i.getChildControl(r) : i
}

function _createQxObject(n) {
    var t = this._createQxObjectImpl(n);
    return t !== undefined && this.addOwnedQxObject(t, n), t
}

function _createQxObjectImpl() {
    return undefined
}

function addOwnedQxObject(n, r) {
    if (this.__cd || (this.__cd = {}), !(n instanceof qx.core.Object)) {
        if (!r) throw new Error(u + n);
        if (this.__cd[r]) throw new Error(t + r + f + this + i + n);
        this.__cd[r] = n;
        return
    }
    var e = n.getQxOwner();
    if (e !== this) {
        n.__ce = !0;
        try {
            if (e && e.__cg(n), r === undefined && (r = n.getQxObjectId()), !r) throw new Error(u + n);
            if (this.__cd[r]) throw new Error(t + r + f + this + i + n);
            if (n.getQxOwner() != null) throw new Error(t + r + c + this + i + n);
            n.setQxOwner(this);
            n.setQxObjectId(r);
            n._cascadeQxObjectIdChanges()
        } finally {
            n.__ce = !1
        }
        this.__cd[r] = n
    }
}

function removeOwnedQxObject(t) {
    if (!this.__cd) throw new Error(o + this + r + i);
    var u, i;
    if (typeof t === e) {
        if (t.indexOf(n) > -1) throw new Error(a);
        if (u = t, i = this.__cd[u], i === undefined) return
    } else {
        if (i = t, !(i instanceof qx.core.Object)) throw new Error(l + i);
        if (u = i.getQxObjectId(), this.__cd[u] !== i) throw new Error(o + this + r + i);
    }
    if (i !== null)
        if (i instanceof qx.core.Object) {
            i.__ce = !0;
            try {
                this.__cg(i);
                i._cascadeQxObjectIdChanges()
            } finally {
                i.__ce = !1
            }
        } else this.__cg(i), delete this.__cd[u]
}

function getOwnedQxObjects() {
    return this.__cd ? Object.values(this.__cd) : []
}

function addMarker(t, r, u) {
    var e, o;
    if (t) {
        e = new qx.ui.basic.Image(r);
        e.setZIndex(webfrontend.gui.MarkerManager.zindex.marker);
        var s = qx.util.ResourceManager.getInstance(),
            h = s.getImageWidth(r),
            c = s.getImageHeight(r),
            l = webfrontend.gui.MarkerManager._getImagePosition(this.__oK, t, u, h, c);
        return l != null && this.__oK.add(e, l), o = {
            image: e,
            widget: t,
            width: h,
            height: c,
            position: u,
            mgr: this
        }, t.marker = o, typeof t.addListener == f && (t.addListener(n, this.__UN, this), t.addListener(i, this.__UO, this)), this.__UH[this.__cF] = o, this.__cF++, this.__cF - 1
    }
}

function removeMarkers() {
    for (var n = !0, t; n;) {
        n = !1;
        for (t in this.__UH) {
            n = !0;
            this.removeMarker(t);
            break
        }
    }
}

function removeMarker(t) {
    if (this.__UH.hasOwnProperty(t)) {
        var r = this.__UH[t];
        delete this.__UH[t];
        typeof r.widget.removeListener == f && (r.widget.removeListener(n, this.__UN, this), r.widget.removeListener(i, this.__UO, this));
        delete r.widget.marker;
        r.image.getLayoutParent() != null && r.image.getLayoutParent().remove(r.image)
    }
}

function setHighlightBorder(n, i) {
    var l, h, u, c, e, y, p, f, s;
    if (n instanceof Array || (n = [n]), n[0] == null) {
        for (f = 0; f < this.__UJ.length; ++f) this.__oK.remove(this.__UJ[f]);
        this.__UL >= 0 && (this.__UM && (webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Vis.VisMain.GetInstance().get_CombatSetup(), r, ClientLib.Vis.PositionChange, this, this.__UT), this.__UM = !1), l = ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().GetConstructionYard(), l && webfrontend.phe.cnc.Util.detachNetEvent(l, o, ClientLib.Vis.DefenseSetup.OpacityChange, this, this.__US), this.__UL = -1);
        this.__UJ = [];
        this.__UK = 0;
        return
    }
    for (h = [], f = 0; f < n.length; ++f) h[f] = webfrontend.gui.MarkerManager._getImagePosition(this.__oK, n[f], t, 0, 0);
    if (u = h[0], u != null) {
        for (c = 1; c < h.length; ++c)(e = h[c], e) && (y = Math.max(u.left + u.width, e.left + e.width), p = Math.max(u.top + u.height, e.top + e.height), u.left = Math.min(u.left, e.left), u.width = y - u.left, u.top = Math.min(u.top, e.top), u.height = p - u.top);
        var a = null,
            v = null,
            w = null,
            b = null,
            k = null,
            nt = !1,
            tt = i.split(kt);
        for (f = 0; f < tt.length; ++f) {
            s = tt[f].split(g);
            switch (s[0]) {
                case et:
                    a = s[1];
                    break;
                case d:
                    v = s[1];
                    break;
                case ot:
                    b = s[1];
                    break;
                case at:
                    k = parseFloat(s[1]);
                    break;
                case it:
                    nt = !0
            }
        }
        a != null && v != null && (w = (new qx.ui.decoration.Decorator).set({
            width: parseInt(a),
            color: v
        }));
        this.__UJ[this.__UK] = (new qx.ui.container.Composite).set({
            decorator: w,
            zIndex: webfrontend.gui.MarkerManager.zindex.highlightborder,
            opacity: k,
            backgroundColor: b
        });
        this.__UJ[this.__UK].setHeight(u.height);
        this.__UJ[this.__UK].setWidth(u.width);
        this.__UJ[this.__UK].setLayoutProperties({
            top: u.top,
            left: u.left
        });
        this.__UJ[this.__UK].getContentElement().setStyle(ut, ht);
        this.__oK.add(this.__UJ[this.__UK]);
        nt && (webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().GetConstructionYard(), o, ClientLib.Vis.DefenseSetup.OpacityChange, this, this.__US), this.__UL = this.__UK);
        ++this.__UK
    }
}

function setHighlight(t, r) {
    var h, e, f, o;
    if (r = r == undefined ? 1 : parseInt(r, 10), t instanceof Array || (t = [t]), this.__UF.length + this.__UG.length == t.length) {
        for (h = !0, f = 0; f < this.__UF.length; ++f)
            if (this.__UF[f] != t[f]) {
                h = !1;
                break
            } for (e = 0; h && e < this.__UG.length; ++e)
            if (this.__UG[e] != t[f + e]) {
                h = !1;
                break
            } if (h && f == this.__UF.length && e == this.__UG.length) return
    }
    for (f = 0; f < this.__UF.length; ++f) this.__UF[f] && (o = webfrontend.gui.MarkerManager.isWidgetBox(this.__UF[f]), o || (this.__UF[f].removeListener(n, this.__UQ, this), this.__UF[f].removeListener(i, this.__UR, this)));
    for (f = 0; f < this.__UG.length; ++f) this.__UG[f] && (o = webfrontend.gui.MarkerManager.isWidgetBox(this.__UG[f]), o || (this.__UG[f].removeListener(n, this.__UQ, this), this.__UG[f].removeListener(i, this.__UR, this)));
    for (this.__UF = [], this.__UG = [], f = 0; f < t.length; ++f) f < r ? this.__UF.push(t[f]) : this.__UG.push(t[f]), t[f] && (o = webfrontend.gui.MarkerManager.isWidgetBox(t[f]), o || (t[f].addListener(n, this.__UQ, this), t[f].addListener(i, this.__UR, this)));
    this.__UF.length > 0 && this.__UF[0] != null ? (this.__UP(s), this._updateHighlight()) : this.__UP(u)
}

function _updateMarker(n) {
    var t = webfrontend.gui.MarkerManager._getImagePosition(this.__oK, n.widget, n.position, n.width, n.height),
        i;
    t == null ? n.image.getLayoutParent() != null && n.image.getLayoutParent().remove(n.image) : (n.image.getLayoutParent() == null && this.__oK.add(n.image, t), i = n.image.getLayoutProperties(), (i.top != t.top || i.left != t.left) && n.image.setLayoutProperties(t))
}

function _updateHighlight() {
    var h, c, n, o, e, l, a, f, u, i, r, s;
    if (!(this.__UF.length <= 0) && this.__UF[0]) {
        for (h = [], c = [], u = 0; u < this.__UF.length; ++u) h[u] = webfrontend.gui.MarkerManager._getImagePosition(this.__oK, this.__UF[u], t, 0, 0);
        for (u = 0; u < this.__UG.length; ++u) c[u] = webfrontend.gui.MarkerManager._getImagePosition(this.__oK, this.__UG[u], t, 0, 0);
        if (n = h[0], o = this.__oK.getBounds(), n != null && o != null) {
            for (u = 1; u < h.length; ++u)(e = h[u], e) && (l = Math.max(n.left + n.width, e.left + e.width), a = Math.max(n.top + n.height, e.top + e.height), n.left = Math.min(n.left, e.left), n.width = l - n.left, n.top = Math.min(n.top, e.top), n.height = a - n.top);
            for (f = {}, u = 0; u < c.length; ++u)(i = c[u], i) && (i.left + i.width > n.left || i.left < n.left + n.width && i.top + i.height > n.top || i.top < n.top + n.height) && (f.left = i.left + i.width > n.left && i.left < n.left ? i.left + i.width - n.left : Number.MAX_VALUE, f.right = i.left < n.left + n.width && i.left + i.width > n.left + n.width ? n.left + n.width - i.left : Number.MAX_VALUE, f.top = i.top + i.height > n.top && i.top < n.top ? i.top + i.height - n.top : Number.MAX_VALUE, f.bottom = i.top < n.top + n.height && i.top + i.height > n.top + n.height ? n.top + n.height - i.top : Number.MAX_VALUE, f.bottom < f.right && f.bottom < f.top && f.bottom < f.left ? n.height -= n.top + n.height - i.top : f.right < f.top && f.right < f.left ? n.width -= n.left + n.width - i.left : f.top < f.left ? (n.height -= i.top + i.height - n.top, n.top = i.top + i.height) : (n.width -= i.left + i.width - n.left, n.left = i.left + i.width));
            r = 20;
            s = webfrontend.gui.MarkerManager.INSET;
            s && (n.left += s, n.top += s, n.height -= 2 * s, n.width -= 2 * s);
            this.__UI[0].setHeight(o.height + 2 * r);
            this.__UI[0].setWidth(n.left);
            this.__UI[0].setLayoutProperties({
                top: -r,
                left: -r
            });
            this.__UI[1].setHeight(o.height + 2 * r);
            this.__UI[1].setWidth(o.width - n.left - n.width);
            this.__UI[1].setLayoutProperties({
                top: -r,
                left: n.left + n.width + r
            });
            this.__UI[2].setHeight(n.top);
            this.__UI[2].setWidth(n.width + 2 * r);
            this.__UI[2].setLayoutProperties({
                top: -r,
                left: n.left - r
            });
            this.__UI[3].setHeight(o.height - n.top - n.height);
            this.__UI[3].setWidth(n.width + 2 * r);
            this.__UI[3].setLayoutProperties({
                top: n.top + n.height + r,
                left: n.left - r
            });
            this.__UI[4].setLayoutProperties({
                top: n.top - r,
                left: n.left - r
            });
            this.__UI[5].setLayoutProperties({
                top: n.top - r,
                left: n.left
            });
            this.__UI[5].setWidth(n.width);
            this.__UI[6].setLayoutProperties({
                top: n.top - r,
                left: n.left + n.width
            });
            this.__UI[7].setLayoutProperties({
                top: n.top,
                left: n.left - r
            });
            this.__UI[7].setHeight(n.height);
            this.__UI[8].setLayoutProperties({
                top: n.top,
                left: n.left + n.width
            });
            this.__UI[8].setHeight(n.height);
            this.__UI[9].setLayoutProperties({
                top: n.top + n.height,
                left: n.left - r
            });
            this.__UI[10].setLayoutProperties({
                top: n.top + n.height,
                left: n.left
            });
            this.__UI[10].setWidth(n.width);
            this.__UI[11].setLayoutProperties({
                top: n.top + n.height,
                left: n.left + n.width
            })
        }
    }
}

function _updateAll() {
    for (var n in this.__UH) this._updateMarker(this.__UH[n]);
    this._updateHighlight()
}