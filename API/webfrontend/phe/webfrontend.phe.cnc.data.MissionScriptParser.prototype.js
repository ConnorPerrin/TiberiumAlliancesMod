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

function _getMarkerDirectionPath() {
    return l
}

function startMissionStep(n) {
    var t, i;
    (this.__wG() || !this.isExecutingScript()) && (t = ClientLib.Data.MainData.GetInstance().get_Missions().GetMissionStep(n), t && t.get_ScriptId() > 0 && (this.__wC = n, this.stopMissions(), i = !1, this.loadMissionScript(t.get_ScriptId(), 0, i)))
}

function getLastMissionStep() {
    return this.__wC
}

function stopMissions() {
    var t, n;
    for (t in this.__wz) n = this.__wz[t], n && n.active && (this.__wQ(t), this._onMissionStop(), n.active = !1)
}

function _onMissionStop() {
    var n = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
    n && n.get_CityBuildingsData().set_ValidPlacementBuildingTypeFlags(-1);
    ClientLib.Vis.VisMain.GetInstance().set_IsTutorialModeActivated(!1);
    ClientLib.Vis.VisMain.GetInstance().set_LockMove(!1);
    ClientLib.Vis.VisMain.GetInstance().GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.SelectTouch).set_ObjectSelectionEnabled(!0);
    ClientLib.Vis.VisMain.GetInstance().GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.SelectRegion).set_ObjectSelectionFilter(-1);
    qx.core.Init.getApplication().unprepareForTutorialScript()
}

function stopMission(n, t) {
    var i = this.__wz[n],
        u, r, f;
    if (i && i.active) {
        if (this.__wQ(n), this._onMissionStop(), !t)
            for (t = !0, u = i.data[ClientLib.Data.Missions.TAG.STEPS], r = 0; r < u.length; ++r)
                if (f = u[r], f.hasOwnProperty(ClientLib.Data.Missions.TAG.LABEL) && f[ClientLib.Data.Missions.TAG.LABEL] == ClientLib.Data.Missions.VALUE.STEPLBL_SUMMARY) {
                    i.curstep = r;
                    t = !1;
                    break
                } t && (i.active = !1)
    }
}

function getCurrentStep(n) {
    var t = this.__wz[n];
    if (t && t.curstep > 0) return t.data[ClientLib.Data.Missions.TAG.STEPS][t.curstep]
}

function loadMissionScript(n, t, i) {
    var u, e, o, r;
    n != undefined && n != null && (this.__wE = !0, n = String(n), t != undefined && t != null && (this.__wy[n] = t), u = h, e = h, n = this._onPrepareLoadingScriptId(n), o = String(n).indexOf(f) <= 0 ? n + f + (i ? p : qx.locale.Manager.getInstance().getLocale()) : n, typeof MISSIONS == g && MISSIONS.hasOwnProperty(o) ? this.__wM(MISSIONS[o]) : (e = !i && String(n).indexOf(f) > 0 ? n + k : n + f + (i ? p : qx.locale.Manager.getInstance().getLocale()) + k, u = ResStore + tt + e, r = new qx.io.remote.Request(u, ri, oi), r.setProhibitCaching(!0), r.addListener(ci, this.__wL, this), r.addListener(vi, this.__wN, this), r.addListener(rr, this.__wN, this), r.send()))
}

function _onPrepareLoadingScriptId(n) {
    return n
}

function setVariable(n, t, i) {
    var r = this.__wz[n];
    r.data[t] = i
}

function getVariable(n, t) {
    var i = this.__wz[n];
    return i.data[t]
}

function isExecutingMissionId(n) {
    return this.__wz.hasOwnProperty(n) && this.__wz[n].active
}

function triggerUITick() {
    this.__we()
}

function _checkNeedsModule(n, t) {
    return this.__wK(null, n, ClientLib.Data.Missions.TAG.STEPS, t)
}

function isExecutingScript() {
    var n, t;
    if (this.__wE || this._onIsExecutingScript()) return !0;
    for (n in this.__wz)
        if (t = this.__wz[n], t.active) return !0;
    return !1
}

function _onIsExecutingScript() {
    return !1
}

function _checkPlayAreaViewMode() {
    return !1
}

function _checkResearchOverlayTabCategory() {
    return !1
}

function _checkReportsOverlayTabCategory() {
    return !1
}

function _checkMessageBoxOpened() {
    return !1
}

function _checkAllianceOverlayTabCategory() {
    return !1
}

function _checkOffenseUnitMoved() {
    return !1
}

function _execShowTutorial() {}

function _execShowInfo() {}

function _execShowTutorialShorty() {}

function _execHUDTutorialMode() {}

function _execFocusBase() {}

function _execGotoForum() {}

function _execReportsOverlayTabCategory() {}

function _execSetObjectSelection(n, t) {
    ClientLib.Vis.VisMain.GetInstance().GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.SelectTouch).set_ObjectSelectionEnabled(t.b)
}

function _execSetRegionObjectSelectionFilter(n, t) {
    ClientLib.Vis.VisMain.GetInstance().GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.SelectRegion).set_ObjectSelectionFilter(t.v)
}

function _execCloseContextMenu() {}

function _execStartMissionScript(n, t) {
    this.startMissionStep(t.i)
}

function _execSetCssStyle() {}

function _execPreSelectBase() {}

function findWidgetByPath(n, t) {
    var i;
    if (!n) return null;
    var u = qx.util.StringSplit.split(n, kt),
        f = null,
        r = qx.core.Init.getApplication();
    for (i = 0; i < u.length; ++i)
        if (f = r, r = f.getUIItem ? f.getUIItem(u[i], t, i < u.length - 1) : null, !r) break;
    return r
}

function parseStringParameters(n, t) {
    var r, i;
    for (t = t || this.__wB, r = 0; r < t.length; ++r) i = t[r], n.hasOwnProperty(i) && (n[i] = this.__xB(n[i], n[i + bi]))
}

function executeScriptDirectly(n) {
    this.__wO(n)
}

function loadScriptDirectly(n, t) {
    this.__wC = n;
    this.loadMissionScript(n, 0, t)
}