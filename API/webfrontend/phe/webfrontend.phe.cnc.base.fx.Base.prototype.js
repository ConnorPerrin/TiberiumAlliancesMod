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

function getDuration anonymous(value) {
    if (this.$$runtime_duration !== undefined) return this.$$runtime_duration;
    if (this.$$user_duration !== undefined) return this.$$user_duration;
    else return this.$$init_duration;
}

function setDuration anonymous(value) {
    this.$$setDurationImpl.apply(this, arguments);
    return value;
}

function resetDuration() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initDuration() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeDuration() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDuration() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getFps anonymous(value) {
    if (this.$$runtime_fps !== undefined) return this.$$runtime_fps;
    if (this.$$user_fps !== undefined) return this.$$user_fps;
    else return this.$$init_fps;
}

function setFps anonymous(value) {
    this.$$setFpsImpl.apply(this, arguments);
    return value;
}

function resetFps() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeFps() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeFps() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getSync anonymous(value) {
    if (this.$$runtime_sync !== undefined) return this.$$runtime_sync;
    if (this.$$user_sync !== undefined) return this.$$user_sync;
    else return this.$$init_sync;
}

function setSync anonymous() {
    this.setSync.$$install && this.setSync.$$install.call(this);
    return this.setSync.apply(this, arguments);
}

function resetSync() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeSync() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSync() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleSync anonymous() {
    return this.setSync(!this.getSync())
}

function isSync anonymous() {
    return this.getSync()
}

function getFrom anonymous(value) {
    if (this.$$runtime_from !== undefined) return this.$$runtime_from;
    if (this.$$user_from !== undefined) return this.$$user_from;
    else return this.$$init_from;
}

function setFrom anonymous(value) {
    this.$$setFromImpl.apply(this, arguments);
    return value;
}

function resetFrom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeFrom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeFrom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getTo anonymous(value) {
    if (this.$$runtime_to !== undefined) return this.$$runtime_to;
    if (this.$$user_to !== undefined) return this.$$user_to;
    else return this.$$init_to;
}

function setTo anonymous(value) {
    this.$$setToImpl.apply(this, arguments);
    return value;
}

function resetTo() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeTo() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeTo() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getDelay anonymous(value) {
    if (this.$$runtime_delay !== undefined) return this.$$runtime_delay;
    if (this.$$user_delay !== undefined) return this.$$user_delay;
    else return this.$$init_delay;
}

function setDelay anonymous(value) {
    this.$$setDelayImpl.apply(this, arguments);
    return value;
}

function resetDelay() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeDelay() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDelay() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getQueue anonymous(value) {
    if (this.$$runtime_queue !== undefined) return this.$$runtime_queue;
    if (this.$$user_queue !== undefined) return this.$$user_queue;
    else throw new Error("Property queue of an instance of webfrontend.phe.cnc.base.fx.Base is not (yet) ready!");
}

function setQueue anonymous(value) {
    this.$$setQueueImpl.apply(this, arguments);
    return value;
}

function resetQueue() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeQueue() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeQueue() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getTransition anonymous(value) {
    if (this.$$runtime_transition !== undefined) return this.$$runtime_transition;
    if (this.$$user_transition !== undefined) return this.$$user_transition;
    else return this.$$init_transition;
}

function setTransition anonymous() {
    this.setTransition.$$install && this.setTransition.$$install.call(this);
    return this.setTransition.apply(this, arguments);
}

function resetTransition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeTransition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeTransition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function _getElement() {
    return this.__in
}

function _setElement(n) {
    this.__in = n
}

function _applyDuration() {}

function init() {
    this.__uh = webfrontend.phe.cnc.base.fx.Base.EffectState.PREPARING;
    this.__btD = 0;
    this.__btE = this.getDelay() * 1e3 + (new Date).getTime();
    this.__btF = this.__btE + this.getDuration() * 1e3;
    this.__btG = this.getTo() - this.getFrom();
    this.__btH = this.__btF - this.__btE;
    this.__btI = this.getFps() * this.getDuration()
}

function beforeFinishInternal() {}

function beforeFinish() {}

function afterFinishInternal() {}

function afterFinish() {}

function beforeSetupInternal() {}

function beforeSetup() {}

function afterSetupInternal() {}

function afterSetup() {}

function beforeUpdateInternal() {}

function beforeUpdate() {}

function afterUpdateInternal() {}

function afterUpdate() {}

function beforeStartInternal() {}

function beforeStart() {}

function setup() {
    this.fireEvent(u)
}

function update() {}

function finish() {
    this.fireEvent(f)
}

function start() {
    return this.__uh != webfrontend.phe.cnc.base.fx.Base.EffectState.IDLE ? !1 : (this.init(), this.beforeStartInternal(), this.beforeStart(), this.getSync() || this.getQueue().add(this), !0)
}

function end() {
    this.render(1);
    this.cancel();
    this.beforeFinishInternal();
    this.beforeFinish();
    this.finish();
    this.afterFinishInternal();
    this.afterFinish()
}

function render(n) {
    this.__uh == webfrontend.phe.cnc.base.fx.Base.EffectState.PREPARING && (this.__uh = webfrontend.phe.cnc.base.fx.Base.EffectState.RUNNING, this.beforeSetupInternal(), this.beforeSetup(), this.setup(), this.afterSetupInternal(), this.afterSetup());
    this.__uh == webfrontend.phe.cnc.base.fx.Base.EffectState.RUNNING && (this.__btJ = webfrontend.phe.cnc.base.fx.Transition.get(this.getTransition())(n) * this.__btG + this.getFrom(), this.beforeUpdateInternal(), this.beforeUpdate(), this.update(this.__btJ), this.afterUpdateInternal(), this.afterUpdate(), this.hasListener(i) && this.fireEvent(i))
}

function loop(n) {
    if (n >= this.__btE) {
        n >= this.__btF && this.end();
        var t = (n - this.__btE) / this.__btH,
            i = Math.round(t * this.__btI);
        i > this.__btD && (this.render(t), this.__btD = i)
    }
}

function cancel() {
    this.getSync() || this.getQueue().remove(this);
    this.__uh = webfrontend.phe.cnc.base.fx.Base.EffectState.IDLE
}

function resetState() {
    this.__uh = webfrontend.phe.cnc.base.fx.Base.EffectState.IDLE
}

function isActive() {
    return this.__uh === webfrontend.phe.cnc.base.fx.Base.EffectState.RUNNING || this.__uh === webfrontend.phe.cnc.base.fx.Base.EffectState.PREPARING
}