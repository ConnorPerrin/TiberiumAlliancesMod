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

function hasAutoGeneratedCode() {
    return this.__sV
}

function prepareLayouts() {}

function addSpecialCase(n, t) {
    if (n !== undefined && t !== undefined) switch (n) {
        case webfrontend.gui.layout.Loader.specials.container:
            this.isContainer(t) || (this.__ta.container.push(t), this.__ta.container.sort());
            break;
        case webfrontend.gui.layout.Loader.specials.setter:
            if (t.name === undefined || t.count === undefined || t.setter === undefined) return;
            this.__ta.members.hasOwnProperty(t.name) || (this.__ta.members.types.push(t.name), this.__ta.members.types.sort(), this.__ta.members[t.name] = {});
            var i = this.__ta.members[t.name];
            i.hasOwnProperty(t.getter) || (i[t.getter] = {}, i[t.getter].count = t.count, i[t.getter].setter = t.setter, i[t.getter].params = t.params)
    }
}

function getLayout(t, i, r, u) {
    var f, e, o;
    return typeof webfrontend.res.llcomp != n && webfrontend.res.llcomp.hasOwnProperty(vu + t) ? (this.tempobj1 = i, this.__td(ct + t + cu)) : typeof t == n || t == null ? null : (f = typeof i != n && i ? i : null, !this.__sY.hasOwnProperty(t) || this.__sY[t] == null) ? null : (e = this.__sY[t], o = e.objcontainer, this.__th(o, r, f, u))
}

function hasLayout(n) {
    return this.__sY.hasOwnProperty(n) && this.__sY[n] != null
}

function getLayoutJson(t) {
    if (typeof t == n || t == null || !this.__sY.hasOwnProperty(t) || this.__sY[t] == null) return null;
    return this.__sY[t]
}

function parseLayout(t, i, r, f, e) {
    var o;
    if (typeof t == n || t == null) return null;
    var c = typeof i != n && i ? i : null,
        h = typeof t == u ? this.__td(ot + t + s) : t,
        l = h.objcontainer;
    if (this.__tb = h, this.__tb.objres)
        for (o in this.__tb.objres) this.__tb.objres[o].objtemporary && (this.__tb.objres[o].objtemporary = []);
    return this.__th(l, r, c, f, e)
}

function getElement(n, t, i) {
    var f, e, u, o;
    if (!n || typeof n.getChildren !== r) return null;
    if (n.hasOwnProperty(t) && n[t] == i) return n;
    if (f = n.getChildren(), !f) return null;
    for (e = 0; e < f.length; ++e) {
        if (u = f[e], u.hasOwnProperty(t) && u[t] == i) return u;
        if (o = this.getElement(u, t, i), o) return o
    }
    return null
}

function toJsonString(n, t, i) {
    if (n == null || i == null || i == f) return null;
    var r = {};
    return r.objname = i, r.objcontainer = this.toJsonObject(n, t), qx.lang.Json.stringify(r, null, wt)
}

function toJsonObject(i, f, e) {
    var o, p, et, k, d, v, w, g, tt, rt, b, ut, a, ot, y, ft, h, c;
    if (i == null) return null;
    o = {};
    e != null && typeof e != n && e.length > 0 ? o.objid = e : i.hasOwnProperty(ru) && (o.objid = i.objid);
    o.objclass = f != null && typeof f != n ? f : i.classname;
    for (p in i) p.indexOf(au) == 0 && (et = p.substr(7), c = i[p], o[et] = typeof c == nt ? c instanceof qx.type.BaseString ? c.toString() : this.toJsonObject(c) : c);
    if (this.isContainer(o.objclass) && (typeof i.getLayout == r && (o.objlayout = this.toJsonObject(i.getLayout())), typeof i.getChildren == r)) {
        for (k = [], d = i.getChildren(), h = 0; h < d.length; ++h) {
            if (v = {}, w = d[h], v.objitem = this.toJsonObject(w), typeof w.getLayoutProperties == r) {
                g = w.getLayoutProperties();
                tt = !1;
                for (rt in g) tt || (tt = !0, v.objitem.objoptions = {}), v.objitem.objoptions[rt] = g[rt]
            }
            k.push(v)
        }
        o.objitems = k
    }
    if (b = this.getSpecial(o.objclass), b)
        for (ut in b) {
            for (a = b[ut], this.tempobj1 = i, ot = typeof a.count == u ? this.__td(l + a.count + t) : a.count, this.tempobj1 = null, y = [], h = 0; h < ot; ++h) this.tempobj1 = i, y.push(this.__td(l + ut + it + h + s)), this.tempobj1 = null;
            if (y.length > 0)
                for (o.objspecs === undefined && (o.objspecs = {}), o.objspecs[a.setter] = {}, o.objspecs[a.setter].values = [], o.objspecs[a.setter].params = a.params, ft = o.objspecs[a.setter].values, h = 0; h < y.length; ++h) c = y[h], c instanceof qx.type.BaseString ? ft.push(c.toString()) : ft.push(c)
        }
    return o
}

function isContainer(n) {
    for (var e, f, r = !1, o = qx.Class.getByName(n), u = 0; u < this.__ta.container.length; ++u)
        if (e = qx.Class.getByName(this.__ta.container[u]), qx.Class.isSubClassOf(o, e)) {
            r = !0;
            break
        } if (r) try {
        f = this.__td(i + n + t);
        (!f || f.getChildren().length > 0) && (r = !1)
    } catch (s) {
        r = !1
    }
    return r
}

function getSpecial(n) {
    var t = webfrontend.phe.cnc.Util.sortedSearch(this.__ta.members.types, n);
    return t < 0 ? null : this.__ta.members[this.__ta.members.types[t]]
}

function prepareValue(n) {
    return typeof n == ai ? n.indexOf(c) >= 0 ? h + n + h : c + n + c : n
}

function parseJsonToCode(n, t) {
    var i = new qx.util.StringBuilder(4096);
    return n = typeof n == u ? this.__td(ot + n + s) : n, i.add(iu), i.add(lr), t && t.length > 0 && i.add(t), i.add(gt), i.add(bt), this.parseJsonObjectToCode(i, n.objcontainer ? n.objcontainer : n, 0, !0, li, !0), i.add(fr), i.add(pr), i.get()
}

function parseJsonObjectToCode(n, t, r, e, o, s) {
    var w, g, a, k, y, b, d, l, c;
    if (t == null || t == undefined || t.objclass == undefined) return f;
    w = gi + String(r);
    l = t.objclass.lastIndexOf(vr);
    l >= 0 && l < t.objclass.length - 1 && (w += t.objclass.substr(l + 1));
    o && n.add(o);
    e && n.add(ci, w, hr);
    n.add(i, t.objclass, fu);
    t.objlayout && this.parseJsonObjectToCode(n, t.objlayout, r, !1);
    n.add(ni);
    g = qx.util.PropertyUtil.getAllProperties(qx.Class.getByName(t.objclass));
    b = !1;
    for (a in t)
        if (g.hasOwnProperty(a)) {
            b && n.add(v);
            n.add(a, et);
            switch (typeof t[a]) {
                case nt:
                    this.parseJsonObjectToCode(n, t[a], r, !1);
                    break;
                case u:
                    t[a].indexOf(ki) == 0 ? n.add(oi, t[a], or) : n.add(h, t[a], h);
                    break;
                default:
                    n.add(String(t[a]))
            }
            b = !0
        } if (n.add(hi), e && n.add(p), e && t.objid != undefined && (o && n.add(o), n.add(w, sr, t.objid, p)), e && this.isContainer(t.objclass) && t.objitems && t.objitems.length > 0) {
        for (k = [], l = 0; l < t.objitems.length; ++l)
            if (y = t.objitems[l].objitem, y.objdummy == undefined) {
                if (c = {
                        inline: !1,
                        value: f,
                        options: f
                    }, this.isContainer(y.objclass) || y.objid != undefined ? (c.inline = !1, c.value = this.parseJsonObjectToCode(n, y, ++r, !0, o)) : (c.inline = !0, c.value = y), y.objoptions) {
                    c.options += dt;
                    b = !1;
                    for (d in y.objoptions) b && (c.options += v), c.options += d + et + String(y.objoptions[d]), b = !0;
                    c.options += su
                }
                k.push(c)
            } for (l = 0; l < k.length; ++l) c = k[l], o && n.add(o), n.add(w, yi), c.inline ? n.add(this.parseJsonObjectToCode(n, c.value, r, !1)) : n.add(c.value), c.options.length > 0 && n.add(v, c.options), n.add(ri)
    }
    return s && (o && n.add(o), n.add(ii, w, p)), e ? w : f
}

function getLinkedLayouts(n, t) {
    var i = [],
        r;
    if (n && this.__tk(n, i), t && n.objres)
        for (r = 0; r < i.length; ++r) n.objres.hasOwnProperty(i[r]) && i.splice(r--, 1);
    return i
}