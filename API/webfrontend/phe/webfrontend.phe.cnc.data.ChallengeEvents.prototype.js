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

function getId anonymous(value) {
    if (this.$$runtime_Id !== undefined) return this.$$runtime_Id;
    if (this.$$user_Id !== undefined) return this.$$user_Id;
    else return this.$$init_Id;
}

function setId anonymous(value) {
    this.$$setIdImpl.apply(this, arguments);
    return value;
}

function resetId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getName anonymous(value) {
    if (this.$$runtime_Name !== undefined) return this.$$runtime_Name;
    if (this.$$user_Name !== undefined) return this.$$user_Name;
    else return this.$$init_Name;
}

function setName anonymous(value) {
    this.$$setNameImpl.apply(this, arguments);
    return value;
}

function resetName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIsActive anonymous(value) {
    if (this.$$runtime_IsActive !== undefined) return this.$$runtime_IsActive;
    if (this.$$user_IsActive !== undefined) return this.$$user_IsActive;
    else return this.$$init_IsActive;
}

function setIsActive anonymous(value) {
    this.$$setIsActiveImpl.apply(this, arguments);
    return value;
}

function resetIsActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIsActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIsActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIsActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleIsActive anonymous() {
    return this.setIsActive(!this.getIsActive())
}

function isIsActive anonymous() {
    return this.getIsActive()
}

function getEndTimestampOriginal anonymous(value) {
    if (this.$$runtime_EndTimestampOriginal !== undefined) return this.$$runtime_EndTimestampOriginal;
    if (this.$$user_EndTimestampOriginal !== undefined) return this.$$user_EndTimestampOriginal;
    else return this.$$init_EndTimestampOriginal;
}

function setEndTimestampOriginal anonymous(value) {
    this.$$setEndTimestampOriginalImpl.apply(this, arguments);
    return value;
}

function resetEndTimestampOriginal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initEndTimestampOriginal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeEndTimestampOriginal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeEndTimestampOriginal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getEndTimestamp anonymous(value) {
    if (this.$$runtime_EndTimestamp !== undefined) return this.$$runtime_EndTimestamp;
    if (this.$$user_EndTimestamp !== undefined) return this.$$user_EndTimestamp;
    else return this.$$init_EndTimestamp;
}

function setEndTimestamp anonymous(value) {
    this.$$setEndTimestampImpl.apply(this, arguments);
    return value;
}

function resetEndTimestamp() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initEndTimestamp() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeEndTimestamp() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeEndTimestamp() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getStepsReward anonymous() {
    this.getStepsReward.$$install && this.getStepsReward.$$install();
    return this.getStepsReward.apply(this, arguments);
}

function setStepsReward anonymous(value) {
    this.$$setStepsRewardImpl.apply(this, arguments);
    return value;
}

function resetStepsReward() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initStepsReward() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeStepsReward() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeStepsReward() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getGoals anonymous(value) {
    if (this.$$runtime_Goals !== undefined) return this.$$runtime_Goals;
    if (this.$$user_Goals !== undefined) return this.$$user_Goals;
    else return this.$$init_Goals;
}

function setGoals anonymous(value) {
    this.$$setGoalsImpl.apply(this, arguments);
    return value;
}

function resetGoals() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initGoals() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeGoals() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeGoals() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getProgress anonymous() {
    this.getProgress.$$install && this.getProgress.$$install();
    return this.getProgress.apply(this, arguments);
}

function setProgress anonymous(value) {
    this.$$setProgressImpl.apply(this, arguments);
    return value;
}

function resetProgress() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initProgress() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeProgress() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeProgress() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function startListening() {
    this.__AV || (this.__AV = !0, webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Challenge(), o, ClientLib.Data.Challenge.ChallengeChange, this, this.__bbM), this.__bbM())
}

function isChallengeFailed() {
    var n = !1,
        t;
    return this.getId() != null && !!this.getGoals() && this.getGoals().length > 0 && !!this.getEndTimestamp() && (t = this.getEndTimestamp() - ClientLib.Data.MainData.GetInstance().get_Time().GetStepTime(ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep()), t < 1 && (n = !this.isGoalDoneByIndex(0, !0))), n
}

function isChallengeDone() {
    var n = !1,
        t;
    return this.getId() != null && !!this.getGoals() && this.getGoals().length > 0 && !!this.getEndTimestamp() && (t = this.getEndTimestamp() - ClientLib.Data.MainData.GetInstance().get_Time().GetStepTime(ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep()), n = t < 1 ? this.isGoalDoneByIndex(0, !0) : this.isGoalDoneByIndex(this.getGoals().length - 1, !0)), n
}

function getRewards(n) {
    return !n || !n.hasOwnProperty(webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_REWARDS) ? null : n[webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_REWARDS]
}

function getCurGoalIndex() {
    var t = 0,
        i = this.isChallengeDone(),
        r, n;
    if (this.getId() != null && !!this.getGoals() && this.getGoals().length > 0 && !!this.getProgress())
        for (r = this.getGoals().length, n = 0; n < this.getGoals().length; ++n)
            if (!this.isGoalDoneByIndex(n, !1) || n + 1 >= this.getGoals().length) {
                t = !this.isGoalDoneByIndex(n, !1) && i && n > 0 ? n - 1 : n;
                break
            } return t
}

function getGoal(n) {
    return !!this.getGoals() && this.getGoals().length > n && n >= 0 ? this.getGoals()[n] : null
}

function getGoalValue(n) {
    return !n || !n.hasOwnProperty(webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_GOALS_VALUE) ? 0 : n[webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_GOALS_VALUE]
}

function getGoalType(n) {
    return !n || !n.hasOwnProperty(webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_GOALS_TYPE) ? null : n[webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_GOALS_TYPE]
}

function getRewardValue(n) {
    return !n || !n.hasOwnProperty(webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_REWARDS_VALUE) ? 0 : n[webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_REWARDS_VALUE]
}

function getRewardType(n) {
    return !n || !n.hasOwnProperty(webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_REWARDS_TYPE) ? null : n[webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_REWARDS_TYPE]
}

function getCurrentRewards() {
    var f = [],
        r, u, t, n, i, e;
    if (this.isChallengeDone()) {
        for (r = {}, u = this.getCurGoalIndex(), t = 0; t <= u; ++t)
            if ((t != u || this.isGoalDoneByIndex(u)) && (n = this.getRewards(this.getGoal(t)), !!n && n.length > 0))
                for (i = 0; i < n.length; ++i) r[this.getRewardType(n[i])] = n[i];
        for (e in r) f.push(r[e])
    }
    return f
}

function getGoalProgress(n) {
    var i = 0,
        t, r, u;
    return !this.getGoals() || !this.getProgress() || !n.hasOwnProperty(webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_GOALS_VALUE) || (t = this.getGoals().indexOf(n), t >= 0 && this.getProgress().hasOwnProperty(t) && (r = this.getProgress()[t], u = n[webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_GOALS_VALUE], i = Math.min(r, u))), i
}

function isGoalDoneByIndex(n, t) {
    t = !!t;
    var i = this.getGoal(n);
    return !!i && this.isGoalDone(i, t)
}

function isGoalDone(n, t) {
    var r = !1,
        u, i;
    if (t = !!t, t) {
        for (r = !0, u = this.getGoals(), i = 0; i < u.length; ++i)
            if (r = this.getGoalProgress(u[i]) >= this.getGoalValue(u[i]), !r || u[i] == n) break
    } else r = this.getGoalProgress(n) >= this.getGoalValue(n);
    return r
}

function applyCurrentRewards(n, t) {
    for (var r = this.getCurrentRewards(), i = 0; i < r.length; ++i)
        if (r[i].type == t) switch (r[i].type) {
            case ClientLib.Data.Challenge.Challenge.ECRT_Modify_CP_Costs:
            case ClientLib.Data.Challenge.Challenge.ECRT_Modify_RepairTime_Offense:
            case ClientLib.Data.Challenge.Challenge.ECRT_Modify_RepairCrystal_Offense:
                n > 0 && r[i].value > 0 && (n = Math.floor(n * (100 - r[i].value) / 100))
        }
    return n
}