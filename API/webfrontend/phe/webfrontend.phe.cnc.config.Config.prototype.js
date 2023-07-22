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

function getQxOwner anonymous(value) {
    if (this.$$runtime_qxOwner !== undefined) return this.$$runtime_qxOwner;
    if (this.$$user_qxOwner !== undefined) return this.$$user_qxOwner;
    else return this.$$init_qxOwner;
}

function setQxOwner anonymous(value) {
    this.$$setQxOwnerImpl.apply(this, arguments);
    return value;
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

function setQxObjectId anonymous(value) {
    this.$$setQxObjectIdImpl.apply(this, arguments);
    return value;
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

function getLocalStorageKey anonymous(value) {
    if (this.$$runtime_localStorageKey !== undefined) return this.$$runtime_localStorageKey;
    if (this.$$user_localStorageKey !== undefined) return this.$$user_localStorageKey;
    else return this.$$init_localStorageKey;
}

function setLocalStorageKey anonymous() {
    this.setLocalStorageKey.$$install && this.setLocalStorageKey.$$install.call(this);
    return this.setLocalStorageKey.apply(this, arguments);
}

function resetLocalStorageKey() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeLocalStorageKey() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeLocalStorageKey() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getImageSource anonymous() {
    this.getImageSource.$$install && this.getImageSource.$$install();
    return this.getImageSource.apply(this, arguments);
}

function setImageSource anonymous() {
    this.setImageSource.$$install && this.setImageSource.$$install.call(this);
    return this.setImageSource.apply(this, arguments);
}

function resetImageSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeImageSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeImageSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getUiImageSource anonymous(value) {
    if (this.$$runtime_uiImageSource !== undefined) return this.$$runtime_uiImageSource;
    if (this.$$user_uiImageSource !== undefined) return this.$$user_uiImageSource;
    else return this.$$init_uiImageSource;
}

function setUiImageSource anonymous() {
    this.setUiImageSource.$$install && this.setUiImageSource.$$install.call(this);
    return this.setUiImageSource.apply(this, arguments);
}

function resetUiImageSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeUiImageSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeUiImageSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getChat anonymous(value) {
    if (this.$$runtime_chat !== undefined) return this.$$runtime_chat;
    if (this.$$user_chat !== undefined) return this.$$user_chat;
    else throw new Error("Property chat of an instance of webfrontend.phe.cnc.config.Config is not (yet) ready!");
}

function setChat anonymous(value) {
    this.$$setChatImpl.apply(this, arguments);
    return value;
}

function resetChat() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeChat() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeChat() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getAudioOn anonymous(value) {
    if (this.$$runtime_audioOn !== undefined) return this.$$runtime_audioOn;
    if (this.$$user_audioOn !== undefined) return this.$$user_audioOn;
    else return this.$$init_audioOn;
}

function setAudioOn anonymous(value) {
    this.$$setAudioOnImpl.apply(this, arguments);
    return value;
}

function resetAudioOn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAudioOn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAudioOn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAudioOn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getAudioMusicLevel anonymous(value) {
    if (this.$$runtime_audioMusicLevel !== undefined) return this.$$runtime_audioMusicLevel;
    if (this.$$user_audioMusicLevel !== undefined) return this.$$user_audioMusicLevel;
    else return this.$$init_audioMusicLevel;
}

function setAudioMusicLevel anonymous(value) {
    this.$$setAudioMusicLevelImpl.apply(this, arguments);
    return value;
}

function resetAudioMusicLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAudioMusicLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAudioMusicLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAudioMusicLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getAudioAmbientLevel anonymous(value) {
    if (this.$$runtime_audioAmbientLevel !== undefined) return this.$$runtime_audioAmbientLevel;
    if (this.$$user_audioAmbientLevel !== undefined) return this.$$user_audioAmbientLevel;
    else return this.$$init_audioAmbientLevel;
}

function setAudioAmbientLevel anonymous(value) {
    this.$$setAudioAmbientLevelImpl.apply(this, arguments);
    return value;
}

function resetAudioAmbientLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAudioAmbientLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAudioAmbientLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAudioAmbientLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getAudioUILevel anonymous(value) {
    if (this.$$runtime_audioUILevel !== undefined) return this.$$runtime_audioUILevel;
    if (this.$$user_audioUILevel !== undefined) return this.$$user_audioUILevel;
    else return this.$$init_audioUILevel;
}

function setAudioUILevel anonymous(value) {
    this.$$setAudioUILevelImpl.apply(this, arguments);
    return value;
}

function resetAudioUILevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAudioUILevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAudioUILevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAudioUILevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getSavedAudioOn anonymous(value) {
    if (this.$$runtime_savedAudioOn !== undefined) return this.$$runtime_savedAudioOn;
    if (this.$$user_savedAudioOn !== undefined) return this.$$user_savedAudioOn;
    else return this.$$init_savedAudioOn;
}

function setSavedAudioOn anonymous(value) {
    this.$$setSavedAudioOnImpl.apply(this, arguments);
    return value;
}

function resetSavedAudioOn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeSavedAudioOn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSavedAudioOn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getSavedAudioMusicLevel anonymous(value) {
    if (this.$$runtime_savedAudioMusicLevel !== undefined) return this.$$runtime_savedAudioMusicLevel;
    if (this.$$user_savedAudioMusicLevel !== undefined) return this.$$user_savedAudioMusicLevel;
    else return this.$$init_savedAudioMusicLevel;
}

function setSavedAudioMusicLevel anonymous(value) {
    this.$$setSavedAudioMusicLevelImpl.apply(this, arguments);
    return value;
}

function resetSavedAudioMusicLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeSavedAudioMusicLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSavedAudioMusicLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getSavedAudioAmbientLevel anonymous(value) {
    if (this.$$runtime_savedAudioAmbientLevel !== undefined) return this.$$runtime_savedAudioAmbientLevel;
    if (this.$$user_savedAudioAmbientLevel !== undefined) return this.$$user_savedAudioAmbientLevel;
    else return this.$$init_savedAudioAmbientLevel;
}

function setSavedAudioAmbientLevel anonymous(value) {
    this.$$setSavedAudioAmbientLevelImpl.apply(this, arguments);
    return value;
}

function resetSavedAudioAmbientLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeSavedAudioAmbientLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSavedAudioAmbientLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getSavedAudioUILevel anonymous(value) {
    if (this.$$runtime_savedAudioUILevel !== undefined) return this.$$runtime_savedAudioUILevel;
    if (this.$$user_savedAudioUILevel !== undefined) return this.$$user_savedAudioUILevel;
    else return this.$$init_savedAudioUILevel;
}

function setSavedAudioUILevel anonymous(value) {
    this.$$setSavedAudioUILevelImpl.apply(this, arguments);
    return value;
}

function resetSavedAudioUILevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeSavedAudioUILevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSavedAudioUILevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getImageSourceDefault anonymous() {
    this.getImageSourceDefault.$$install && this.getImageSourceDefault.$$install();
    return this.getImageSourceDefault.apply(this, arguments);
}

function setImageSourceDefault anonymous() {
    this.setImageSourceDefault.$$install && this.setImageSourceDefault.$$install.call(this);
    return this.setImageSourceDefault.apply(this, arguments);
}

function resetImageSourceDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeImageSourceDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeImageSourceDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getUiImageSourceDefault anonymous() {
    this.getUiImageSourceDefault.$$install && this.getUiImageSourceDefault.$$install();
    return this.getUiImageSourceDefault.apply(this, arguments);
}

function setUiImageSourceDefault anonymous() {
    this.setUiImageSourceDefault.$$install && this.setUiImageSourceDefault.$$install.call(this);
    return this.setUiImageSourceDefault.apply(this, arguments);
}

function resetUiImageSourceDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeUiImageSourceDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeUiImageSourceDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getAudioOnDefault anonymous() {
    this.getAudioOnDefault.$$install && this.getAudioOnDefault.$$install();
    return this.getAudioOnDefault.apply(this, arguments);
}

function setAudioOnDefault anonymous() {
    this.setAudioOnDefault.$$install && this.setAudioOnDefault.$$install.call(this);
    return this.setAudioOnDefault.apply(this, arguments);
}

function resetAudioOnDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeAudioOnDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAudioOnDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getAudioMusicLevelDefault anonymous() {
    this.getAudioMusicLevelDefault.$$install && this.getAudioMusicLevelDefault.$$install();
    return this.getAudioMusicLevelDefault.apply(this, arguments);
}

function setAudioMusicLevelDefault anonymous() {
    this.setAudioMusicLevelDefault.$$install && this.setAudioMusicLevelDefault.$$install.call(this);
    return this.setAudioMusicLevelDefault.apply(this, arguments);
}

function resetAudioMusicLevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeAudioMusicLevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAudioMusicLevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getAudioAmbientLevelDefault anonymous() {
    this.getAudioAmbientLevelDefault.$$install && this.getAudioAmbientLevelDefault.$$install();
    return this.getAudioAmbientLevelDefault.apply(this, arguments);
}

function setAudioAmbientLevelDefault anonymous() {
    this.setAudioAmbientLevelDefault.$$install && this.setAudioAmbientLevelDefault.$$install.call(this);
    return this.setAudioAmbientLevelDefault.apply(this, arguments);
}

function resetAudioAmbientLevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeAudioAmbientLevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAudioAmbientLevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getAudioUILevelDefault anonymous() {
    this.getAudioUILevelDefault.$$install && this.getAudioUILevelDefault.$$install();
    return this.getAudioUILevelDefault.apply(this, arguments);
}

function setAudioUILevelDefault anonymous() {
    this.setAudioUILevelDefault.$$install && this.setAudioUILevelDefault.$$install.call(this);
    return this.setAudioUILevelDefault.apply(this, arguments);
}

function resetAudioUILevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeAudioUILevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAudioUILevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getWorldMergeShown anonymous(value) {
    if (this.$$runtime_worldMergeShown !== undefined) return this.$$runtime_worldMergeShown;
    if (this.$$user_worldMergeShown !== undefined) return this.$$user_worldMergeShown;
    else return this.$$init_worldMergeShown;
}

function setWorldMergeShown anonymous(value) {
    this.$$setWorldMergeShownImpl.apply(this, arguments);
    return value;
}

function resetWorldMergeShown() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeWorldMergeShown() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeWorldMergeShown() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIosLastCurrency anonymous() {
    this.getIosLastCurrency.$$install && this.getIosLastCurrency.$$install();
    return this.getIosLastCurrency.apply(this, arguments);
}

function setIosLastCurrency anonymous(value) {
    this.$$setIosLastCurrencyImpl.apply(this, arguments);
    return value;
}

function resetIosLastCurrency() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeIosLastCurrency() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIosLastCurrency() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getTradeTableSortOrderColumn anonymous() {
    this.getTradeTableSortOrderColumn.$$install && this.getTradeTableSortOrderColumn.$$install();
    return this.getTradeTableSortOrderColumn.apply(this, arguments);
}

function setTradeTableSortOrderColumn anonymous(value) {
    this.$$setTradeTableSortOrderColumnImpl.apply(this, arguments);
    return value;
}

function resetTradeTableSortOrderColumn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeTradeTableSortOrderColumn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeTradeTableSortOrderColumn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getTradeTableSortOrderAsc anonymous() {
    this.getTradeTableSortOrderAsc.$$install && this.getTradeTableSortOrderAsc.$$install();
    return this.getTradeTableSortOrderAsc.apply(this, arguments);
}

function setTradeTableSortOrderAsc anonymous(value) {
    this.$$setTradeTableSortOrderAscImpl.apply(this, arguments);
    return value;
}

function resetTradeTableSortOrderAsc() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeTradeTableSortOrderAsc() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeTradeTableSortOrderAsc() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function inDevelopment() {
    return !this.inProduction()
}

function inProduction() {
    return this.__rY && ClientLib.Data.MainData.GetInstance().get_Server().get_Production()
}

function getImagePath(n) {
    return this.getImageSource() + n
}

function getImageUrl(n) {
    return a + this.getImagePath(n) + v
}

function getUIImagePath(n) {
    return this.getUiImageSource() + n
}

function getTimeZone() {
    return parseInt(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_TIMEOFFSETTYPE), 10)
}

function getTimeZoneOffset() {
    return parseInt(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_TIMEOFFSETVALUE), 10) * 36e5
}

function revertToLastSavedOptions() {
    if (ClientLib.Base.LocalStorage.get_IsSupported()) {
        var n = ClientLib.Base.LocalStorage.GetItem(this.getLocalStorageKey() + t);
        n != null && (n.on != null && this.setAudioOn(n.on), n.music != null && this.setAudioMusicLevel(n.music), n.ambient != null && this.setAudioAmbientLevel(n.ambient), n.ui != null && this.setAudioUILevel(n.ui))
    }
}

function updateTradeTableSort(n, t) {
    this.setTradeTableSortOrderColumn(n);
    this.setTradeTableSortOrderAsc(t);
    this._applyTradeTableSortOrderColumn(n);
    this._applyTradeTableSortOrderAsc(t)
}

function _applyTradeTableSortOrderColumn() {
    ClientLib.Base.LocalStorage.get_IsSupported() && ClientLib.Base.LocalStorage.SetItem(this.getLocalStorageKey() + i, this.getTradeTableSortOrderColumn())
}

function _applyTradeTableSortOrderAsc() {
    ClientLib.Base.LocalStorage.get_IsSupported() && ClientLib.Base.LocalStorage.SetItem(this.getLocalStorageKey() + o, this.getTradeTableSortOrderAsc())
}

function _applyAudio() {
    ClientLib.Base.LocalStorage.get_IsSupported() && ClientLib.Base.LocalStorage.SetItem(this.getLocalStorageKey() + t, {
        on: this.getAudioOn(),
        music: this.getAudioMusicLevel(),
        ambient: this.getAudioAmbientLevel(),
        ui: this.getAudioUILevel(),
        savedon: this.getSavedAudioOn(),
        savedmusic: this.getSavedAudioMusicLevel(),
        savedambient: this.getSavedAudioAmbientLevel(),
        savedui: this.getSavedAudioUILevel()
    })
}

function applyIosLastCurrency() {
    ClientLib.Base.LocalStorage.get_IsSupported() && ClientLib.Base.LocalStorage.SetItem(this.getLocalStorageKey() + e, this.getIosLastCurrency())
}

function _applyServerMergeState() {
    ClientLib.Base.LocalStorage.get_IsSupported() && ClientLib.Base.LocalStorage.SetItem(this.getLocalStorageKey() + u, {
        didShowDialogue: this.getWorldMergeShown(),
        test_dummy: 5
    })
}

function updateLoaderAudio() {
    soundConfig.on != null && this.setAudioOn(soundConfig.on)
}