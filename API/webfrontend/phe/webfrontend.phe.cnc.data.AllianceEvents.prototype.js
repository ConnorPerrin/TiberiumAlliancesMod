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

function initName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIsOfficer anonymous(value) {
    if (this.$$runtime_IsOfficer !== undefined) return this.$$runtime_IsOfficer;
    if (this.$$user_IsOfficer !== undefined) return this.$$user_IsOfficer;
    else return this.$$init_IsOfficer;
}

function setIsOfficer anonymous(value) {
    this.$$setIsOfficerImpl.apply(this, arguments);
    return value;
}

function resetIsOfficer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIsOfficer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIsOfficer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIsOfficer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIsAdmin anonymous() {
    this.getIsAdmin.$$install && this.getIsAdmin.$$install();
    return this.getIsAdmin.apply(this, arguments);
}

function setIsAdmin anonymous(value) {
    this.$$setIsAdminImpl.apply(this, arguments);
    return value;
}

function resetIsAdmin() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIsAdmin() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIsAdmin() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIsAdmin() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanInviteMembers anonymous() {
    this.getCanInviteMembers.$$install && this.getCanInviteMembers.$$install();
    return this.getCanInviteMembers.apply(this, arguments);
}

function setCanInviteMembers anonymous(value) {
    this.$$setCanInviteMembersImpl.apply(this, arguments);
    return value;
}

function resetCanInviteMembers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanInviteMembers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanInviteMembers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanInviteMembers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanEditMembersRights anonymous() {
    this.getCanEditMembersRights.$$install && this.getCanEditMembersRights.$$install();
    return this.getCanEditMembersRights.apply(this, arguments);
}

function setCanEditMembersRights anonymous(value) {
    this.$$setCanEditMembersRightsImpl.apply(this, arguments);
    return value;
}

function resetCanEditMembersRights() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanEditMembersRights() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanEditMembersRights() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanEditMembersRights() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanPromoteLowerRoles anonymous() {
    this.getCanPromoteLowerRoles.$$install && this.getCanPromoteLowerRoles.$$install();
    return this.getCanPromoteLowerRoles.apply(this, arguments);
}

function setCanPromoteLowerRoles anonymous(value) {
    this.$$setCanPromoteLowerRolesImpl.apply(this, arguments);
    return value;
}

function resetCanPromoteLowerRoles() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanPromoteLowerRoles() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanPromoteLowerRoles() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanPromoteLowerRoles() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanKickMembers anonymous() {
    this.getCanKickMembers.$$install && this.getCanKickMembers.$$install();
    return this.getCanKickMembers.apply(this, arguments);
}

function setCanKickMembers anonymous(value) {
    this.$$setCanKickMembersImpl.apply(this, arguments);
    return value;
}

function resetCanKickMembers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanKickMembers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanKickMembers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanKickMembers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanEditMarkers anonymous(value) {
    if (this.$$runtime_CanEditMarkers !== undefined) return this.$$runtime_CanEditMarkers;
    if (this.$$user_CanEditMarkers !== undefined) return this.$$user_CanEditMarkers;
    else return this.$$init_CanEditMarkers;
}

function setCanEditMarkers anonymous(value) {
    this.$$setCanEditMarkersImpl.apply(this, arguments);
    return value;
}

function resetCanEditMarkers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanEditMarkers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanEditMarkers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanEditMarkers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanModerateAllianceForum anonymous() {
    this.getCanModerateAllianceForum.$$install && this.getCanModerateAllianceForum.$$install();
    return this.getCanModerateAllianceForum.apply(this, arguments);
}

function setCanModerateAllianceForum anonymous(value) {
    this.$$setCanModerateAllianceForumImpl.apply(this, arguments);
    return value;
}

function resetCanModerateAllianceForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanModerateAllianceForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanModerateAllianceForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanModerateAllianceForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanCreateAllianceForums anonymous(value) {
    if (this.$$runtime_CanCreateAllianceForums !== undefined) return this.$$runtime_CanCreateAllianceForums;
    if (this.$$user_CanCreateAllianceForums !== undefined) return this.$$user_CanCreateAllianceForums;
    else return this.$$init_CanCreateAllianceForums;
}

function setCanCreateAllianceForums anonymous(value) {
    this.$$setCanCreateAllianceForumsImpl.apply(this, arguments);
    return value;
}

function resetCanCreateAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanCreateAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanCreateAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanCreateAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanEditAllianceForumInfos anonymous(value) {
    if (this.$$runtime_CanEditAllianceForumInfos !== undefined) return this.$$runtime_CanEditAllianceForumInfos;
    if (this.$$user_CanEditAllianceForumInfos !== undefined) return this.$$user_CanEditAllianceForumInfos;
    else return this.$$init_CanEditAllianceForumInfos;
}

function setCanEditAllianceForumInfos anonymous(value) {
    this.$$setCanEditAllianceForumInfosImpl.apply(this, arguments);
    return value;
}

function resetCanEditAllianceForumInfos() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanEditAllianceForumInfos() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanEditAllianceForumInfos() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanEditAllianceForumInfos() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanEditDiplomacy anonymous() {
    this.getCanEditDiplomacy.$$install && this.getCanEditDiplomacy.$$install();
    return this.getCanEditDiplomacy.apply(this, arguments);
}

function setCanEditDiplomacy anonymous(value) {
    this.$$setCanEditDiplomacyImpl.apply(this, arguments);
    return value;
}

function resetCanEditDiplomacy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanEditDiplomacy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanEditDiplomacy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanEditDiplomacy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanModerateSharedAlliancesForums anonymous() {
    this.getCanModerateSharedAlliancesForums.$$install && this.getCanModerateSharedAlliancesForums.$$install();
    return this.getCanModerateSharedAlliancesForums.apply(this, arguments);
}

function setCanModerateSharedAlliancesForums anonymous(value) {
    this.$$setCanModerateSharedAlliancesForumsImpl.apply(this, arguments);
    return value;
}

function resetCanModerateSharedAlliancesForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanModerateSharedAlliancesForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanModerateSharedAlliancesForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanModerateSharedAlliancesForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanViewSharedAllianceForums anonymous() {
    this.getCanViewSharedAllianceForums.$$install && this.getCanViewSharedAllianceForums.$$install();
    return this.getCanViewSharedAllianceForums.apply(this, arguments);
}

function setCanViewSharedAllianceForums anonymous(value) {
    this.$$setCanViewSharedAllianceForumsImpl.apply(this, arguments);
    return value;
}

function resetCanViewSharedAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanViewSharedAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanViewSharedAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanViewSharedAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanForceSubscription anonymous(value) {
    if (this.$$runtime_CanForceSubscription !== undefined) return this.$$runtime_CanForceSubscription;
    if (this.$$user_CanForceSubscription !== undefined) return this.$$user_CanForceSubscription;
    else return this.$$init_CanForceSubscription;
}

function setCanForceSubscription anonymous(value) {
    this.$$setCanForceSubscriptionImpl.apply(this, arguments);
    return value;
}

function resetCanForceSubscription() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanForceSubscription() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanForceSubscription() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanForceSubscription() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanCreateRecruitmentThread anonymous() {
    this.getCanCreateRecruitmentThread.$$install && this.getCanCreateRecruitmentThread.$$install();
    return this.getCanCreateRecruitmentThread.apply(this, arguments);
}

function setCanCreateRecruitmentThread anonymous(value) {
    this.$$setCanCreateRecruitmentThreadImpl.apply(this, arguments);
    return value;
}

function resetCanCreateRecruitmentThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanCreateRecruitmentThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanCreateRecruitmentThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanCreateRecruitmentThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getHasRecruitmentThread anonymous() {
    this.getHasRecruitmentThread.$$install && this.getHasRecruitmentThread.$$install();
    return this.getHasRecruitmentThread.apply(this, arguments);
}

function setHasRecruitmentThread anonymous(value) {
    this.$$setHasRecruitmentThreadImpl.apply(this, arguments);
    return value;
}

function resetHasRecruitmentThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initHasRecruitmentThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeHasRecruitmentThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeHasRecruitmentThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanViewMemberReports anonymous() {
    this.getCanViewMemberReports.$$install && this.getCanViewMemberReports.$$install();
    return this.getCanViewMemberReports.apply(this, arguments);
}

function setCanViewMemberReports anonymous(value) {
    this.$$setCanViewMemberReportsImpl.apply(this, arguments);
    return value;
}

function resetCanViewMemberReports() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanViewMemberReports() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanViewMemberReports() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanViewMemberReports() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanViewMilitary anonymous(value) {
    if (this.$$runtime_CanViewMilitary !== undefined) return this.$$runtime_CanViewMilitary;
    if (this.$$user_CanViewMilitary !== undefined) return this.$$user_CanViewMilitary;
    else return this.$$init_CanViewMilitary;
}

function setCanViewMilitary anonymous(value) {
    this.$$setCanViewMilitaryImpl.apply(this, arguments);
    return value;
}

function resetCanViewMilitary() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanViewMilitary() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanViewMilitary() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanViewMilitary() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanAttackCenter anonymous(value) {
    if (this.$$runtime_CanAttackCenter !== undefined) return this.$$runtime_CanAttackCenter;
    if (this.$$user_CanAttackCenter !== undefined) return this.$$user_CanAttackCenter;
    else return this.$$init_CanAttackCenter;
}

function setCanAttackCenter anonymous(value) {
    this.$$setCanAttackCenterImpl.apply(this, arguments);
    return value;
}

function resetCanAttackCenter() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeCanAttackCenter() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanAttackCenter() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCenterState anonymous() {
    this.getCenterState.$$install && this.getCenterState.$$install();
    return this.getCenterState.apply(this, arguments);
}

function setCenterState anonymous(value) {
    this.$$setCenterStateImpl.apply(this, arguments);
    return value;
}

function resetCenterState() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCenterState() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCenterState() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCenterState() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCenterOwnedMyAlliance anonymous() {
    this.getCenterOwnedMyAlliance.$$install && this.getCenterOwnedMyAlliance.$$install();
    return this.getCenterOwnedMyAlliance.apply(this, arguments);
}

function setCenterOwnedMyAlliance anonymous(value) {
    this.$$setCenterOwnedMyAllianceImpl.apply(this, arguments);
    return value;
}

function resetCenterOwnedMyAlliance() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeCenterOwnedMyAlliance() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCenterOwnedMyAlliance() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCfgMarkerNav anonymous(value) {
    if (this.$$runtime_CfgMarkerNav !== undefined) return this.$$runtime_CfgMarkerNav;
    if (this.$$user_CfgMarkerNav !== undefined) return this.$$user_CfgMarkerNav;
    else return this.$$init_CfgMarkerNav;
}

function setCfgMarkerNav anonymous(value) {
    this.$$setCfgMarkerNavImpl.apply(this, arguments);
    return value;
}

function resetCfgMarkerNav() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCfgMarkerNav() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCfgMarkerNav() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCfgMarkerNav() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function startListening() {
    this.__AV || (this.__AV = !0, webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), n, ClientLib.Data.AllianceChange, this, this.__AY), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), t, ClientLib.Data.AllianceChange, this, this.__Ba), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter(), u, ClientLib.Data.EndGame.HubChanged, this, this.__Bb), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Config.Main.GetInstance(), i, ClientLib.Config.ConfigChange, this, this.__sd), this.__AY(), this.__Ba(), this.__Bb(), this.__sd(ClientLib.Config.Main.CONFIG_SHOW_MARKERNAV))
}

function _getInfoTracker() {
    return null
}

function getShowNav(n) {
    var u = !0,
        t = webfrontend.phe.cnc.data.AllianceEvents.JSON_CFG_TAG,
        r = this.getCfgMarkerNav(),
        h = ClientLib.Data.MainData.GetInstance().get_Player().get_Id(),
        f, i, s, e, o;
    if (!!r && r.hasOwnProperty(t.JCT_NAVS) && r[t.JCT_NAVS] != null)
        for (f = 0; f < r[t.JCT_NAVS].length; ++f)
            if (i = r[t.JCT_NAVS][f], i.hasOwnProperty(t.JCT_NAV_ID) && n == i[t.JCT_NAV_ID]) {
                u = !i.hasOwnProperty(t.JCT_NAV_SHOW) || !!i[t.JCT_NAV_SHOW];
                break
            } if (u == !0 && (!!i && n != i[t.JCT_NAV_ID] || !i))
        for (s = webfrontend.data.AllianceEvents.getInstance().getAllianceMarkers(), e = 0; e < s.length; e++) o = s[e], o.get_Id() == n && o.get_Type() == ClientLib.Data.Alliance.EAMT_Reserve && o.get_IdPlayerCreated() != h && (u = !1);
    return u
}

function setShowNav(n, t) {
    var e = !1,
        i = webfrontend.phe.cnc.data.AllianceEvents.JSON_CFG_TAG,
        f = this.getCfgMarkerNav(),
        o, s, c, h, a, l, r, u;
    if (f != null && typeof n != w) {
        for (f.hasOwnProperty(i.JCT_NAVS) || (e |= !0, f[i.JCT_NAVS] = []), o = [], s = this.getAllianceMarkers(), r = 0; r < f[i.JCT_NAVS].length; ++r) {
            if (u = f[i.JCT_NAVS][r], c = !1, u.hasOwnProperty(i.JCT_NAV_ID))
                for (h = 0; !!s && h < s.length; ++h)
                    if (a = s[h], a.get_Id() == u[i.JCT_NAV_ID]) {
                        c = !0;
                        break
                    } c || (e |= !0, o.push(r))
        }
        for (r = o.length - 1; r >= 0; --r) f[i.JCT_NAVS].splice(o[r], 1);
        for (l = !1, r = 0; r < f[i.JCT_NAVS].length; ++r)
            if (u = f[i.JCT_NAVS][r], n == u[i.JCT_NAV_ID]) {
                l = !0;
                u.hasOwnProperty(i.JCT_NAV_SHOW) && !!t == !!u[i.JCT_NAV_SHOW] || (e |= !0, u[i.JCT_NAV_SHOW] = !!t);
                break
            } l || (e |= !0, u = {}, u[i.JCT_NAV_ID] = n, u[i.JCT_NAV_SHOW] = !!t, f[i.JCT_NAVS].push(u))
    }
    e && (ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_SHOW_MARKERNAV, qx.lang.Json.stringify(this.getCfgMarkerNav())), ClientLib.Config.Main.GetInstance().SaveToDB())
}

function getAllianceMarkerTypes() {
    return [ClientLib.Data.Alliance.EAMT_Watch, ClientLib.Data.Alliance.EAMT_Move, ClientLib.Data.Alliance.EAMT_Conquer, ClientLib.Data.Alliance.EAMT_Support, ClientLib.Data.Alliance.EAMT_Reserve, ClientLib.Data.Alliance.EAMT_Home]
}

function getAllianceMarkers() {
    var i = [],
        n = ClientLib.Data.MainData.GetInstance().get_Alliance().get_Markers(),
        t;
    if (!!n && !!n.l)
        for (t = 0; t < n.l.length; ++t) i.push(n.l[t]);
    return i
}

function getAllianceMarkerById(n) {
    return ClientLib.Data.MainData.GetInstance().get_Alliance().GetMarkerById(n || 0)
}

function getAllianceMarkerByCoordinates(n, t) {
    var u = null,
        i = ClientLib.Data.MainData.GetInstance().get_Alliance().get_Markers(),
        r;
    if (!!i && !!i.l)
        for (r = 0; r < i.l.length; ++r)
            if (i.l[r].get_CoordX() == n && i.l[r].get_CoordY() == t) {
                u = i.l[r];
                break
            } return u
}

function getAllianceMarkerTypeTranslation(n) {
    var t = l;
    switch (n) {
        case ClientLib.Data.Alliance.EAMT_Watch:
            t = h;
            break;
        case ClientLib.Data.Alliance.EAMT_Move:
            t = f;
            break;
        case ClientLib.Data.Alliance.EAMT_Reserve:
            t = b;
            break;
        case ClientLib.Data.Alliance.EAMT_Conquer:
            t = p;
            break;
        case ClientLib.Data.Alliance.EAMT_Support:
            t = e
    }
    return t
}

function getAllianceMarkerDescriptionTranslation(n) {
    var t = o;
    switch (n) {
        case ClientLib.Data.Alliance.EAMT_Watch:
            t = c;
            break;
        case ClientLib.Data.Alliance.EAMT_Move:
            t = a;
            break;
        case ClientLib.Data.Alliance.EAMT_Reserve:
            t = y;
            break;
        case ClientLib.Data.Alliance.EAMT_Conquer:
            t = k;
            break;
        case ClientLib.Data.Alliance.EAMT_Support:
            t = s
    }
    return t
}