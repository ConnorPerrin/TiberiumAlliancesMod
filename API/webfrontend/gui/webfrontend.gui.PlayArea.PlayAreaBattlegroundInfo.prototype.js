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

function setTutorialMode(n) {
    this.__bjt = n
}

function setViewMode(r) {
    var u = qx.core.Init.getApplication(),
        a = !1,
        f = !1,
        e = !1,
        o = !1,
        s = !1,
        h = !1,
        et = !1,
        c = !1,
        w = !1,
        it = !1,
        b = !1,
        k = !1,
        d = !1,
        g = !1,
        v = !1,
        ft = !1,
        y = !1,
        p = !1,
        tt = null;
    switch (r) {
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense:
            f = !0;
            a = !0;
            e = !0;
            o = !0;
            s = !0;
            h = !0;
            c = !0;
            v = !0;
            y = !0;
            p = !0;
            u.getArmySetupAttackBar().activateSetupDisplay();
            this.__blH.topDescription.setValue(u.tr(l));
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker:
            this.__blH.topDescription.setValue(u.tr(l));
            f = !0;
            a = !0;
            o = !0;
            s = !0;
            h = !0;
            e = !0;
            c = !0;
            y = !0;
            p = !0;
            u.getArmySetupAttackBar().activateCombatDisplay();
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender:
            this.__blH.topDescription.setValue(u.tr(nt));
            f = !0;
            a = !0;
            o = !0;
            s = !0;
            h = !0;
            e = !0;
            c = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker:
            this.__blH.topDescription.setValue(u.tr(l));
            this.__blH.bottomDescription.setValue(u.tr(nt));
            this.__blH.lblStateInformation.setValue(u.tr(vt));
            tt = {
                left: 0,
                bottom: 117
            };
            f = !0;
            a = !0;
            o = !0;
            s = !0;
            h = !0;
            e = !0;
            w = !0;
            it = !0;
            b = !0;
            k = !0;
            d = !0;
            g = !0;
            c = !0;
            v = !0;
            ft = !0;
            y = !0;
            u.getArmySetupAttackBar().activateSetupDisplay();
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender:
            this.__blH.topDescription.setValue(u.tr(l));
            this.__blH.bottomDescription.setValue(u.tr(nt));
            this.__blH.lblStateInformation.setValue(u.tr(vt));
            tt = {
                left: 0,
                bottom: 117
            };
            f = !0;
            a = !0;
            o = !0;
            s = !0;
            h = !0;
            e = !0;
            w = !0;
            it = !0;
            b = !0;
            k = !0;
            d = !0;
            g = !0;
            c = !0;
            v = !0;
            ft = !0;
            y = !1;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay:
            this.__blH.topMode.setValue(u.tr(wr));
            this.__blH.topDescription.setValue(u.tr(l));
            this.__blH.bottomDescription.setValue(u.tr(nt));
            w = !0;
            it = !0;
            b = !0;
            k = !0;
            d = !0;
            g = !0;
            f = !0;
            et = !0;
            a = !0;
            e = !0;
            o = !0;
            s = !0;
            h = !0;
            c = !0;
            tt = {
                left: 0,
                bottom: 32
            };
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase:
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense:
            f = !0;
            a = !0;
            e = !0;
            o = !0;
            s = !0;
            h = !0;
            c = !1;
            v = !1;
            y = !1;
            p = !0;
            this.__blH.topDescription.setValue(u.tr(ur))
    }
    if (this.__blH.topContainer.setVisibility(f ? i : n), this.__blH.topDescription.setVisibility(e ? i : n), this.__blH.topBase.setVisibility(o ? i : n), this.__blH.topPlayer.setVisibility(s ? i : n), this.__blH.topPlayerIcon.setVisibility(h ? i : n), this.__blH.topMode.setVisibility(et ? i : n), this.__blH.timerContainer.setVisibility(c ? i : n), this.__blH.bottomContainer.setLayoutProperties(tt), this.__blH.bottomContainer.setVisibility(w ? i : n), this.__blH.bottomDescription.setVisibility(b ? i : n), this.__blH.bottomBase.setVisibility(k ? i : n), this.__blH.bottomPlayer.setVisibility(d ? i : n), this.__blH.bottomPlayerIcon.setVisibility(g ? i : n), this.__blH.commandPointsInfo.setVisibility(v ? i : n), this.__blH.lblAvailableIn.setVisibility(v ? i : n), this.__blH.lblStateInformation.setVisibility(ft ? i : n), this.__blH.lblLootContingent.setVisibility(n), p && !!webfrontend.data.AllianceEvents.getInstance().getId()) {
        var ot = this.__blI(ClientLib.Base.EPOIType.AirBonus),
            st = this.__blI(ClientLib.Base.EPOIType.InfanteryBonus),
            ht = this.__blI(ClientLib.Base.EPOIType.VehicleBonus),
            lt = (ot > 0 ? ut : t) + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(ot) + rt,
            at = (st > 0 ? ut : t) + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(st) + rt,
            yt = (ht > 0 ? ut : t) + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(ht) + rt;
        this.__blH.topPOIInfoAir.setValue(lt);
        this.__blH.topPOIInfoInf.setValue(at);
        this.__blH.topPOIInfoVeh.setValue(yt);
        this.__blH.topPOIInfoAirIcon.setToolTipText(u.tr(ct, ru, lt));
        this.__blH.topPOIInfoInfIcon.setToolTipText(u.tr(ct, nu, at));
        this.__blH.topPOIInfoVehIcon.setToolTipText(u.tr(ct, uu, yt))
    } else p = !1;
    this.__blH.topPOIInfoLayout.setVisibility(p ? i : n);
    u.showArmySetupAttack(y)
}

function updateUI(n, t) {
    var i = !1,
        r = !1,
        u = !1;
    switch (n) {
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase:
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense:
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense:
            i = !0;
            u = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay:
            r = !0;
            u = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase:
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense:
            i = !0;
            r = !0
    }
    i && this.updateCity(t, n);
    r && this.updateCombatInfo(n, t);
    u && this.__blJ(n, t)
}

function updateCombatInfo(r, f) {
    var ut = qx.core.Init.getApplication(),
        nt = ClientLib.Vis.VisMain.GetInstance().get_Battleground(),
        gi = 0,
        pr = t,
        wr = !1,
        dt = nt.get_AttackerFaction() === ClientLib.Base.EFactionType.FORFaction,
        h, gt, rr, l, ct, at, vt, ur, cu, wi, yr, fr;
    switch (r) {
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender:
            gi = 1;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase:
            gi = 2;
            wr = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender:
            gi = 0;
            wr = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase:
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense:
            gi = 2
    }
    nt.get_CombatComplete() && (r == ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker || r == ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender || r == ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay) && (pr = ut.tr(ou));
    this.__blH.topMode.setValue(pr);
    this.__blH.topMode.setVisibility(pr.length > 0 ? i : n);
    this.__blH.topPlayerIcon.show();
    this.__blH.lblLootContingent.setVisibility(n);
    var a = null,
        ni = null,
        lt = null,
        sr = null;
    switch (gi) {
        case 0:
            a = nt.get_DefenderBaseName();
            lt = nt.get_DefenderPlayerName();
            switch (nt.get_BattlePlaceFaction()) {
                case ClientLib.Base.EFactionType.GDIFaction:
                case ClientLib.Base.EFactionType.NODFaction:
                    lt != null && nt.get_DefenderAllianceName() != null && (lt += v + nt.get_DefenderAllianceName() + e);
                    a != null && f != null && (a += w + f.get_BaseLevel() + e);
                    break;
                case ClientLib.Base.EFactionType.NPCFortress:
                    if (a != null && f != null && (h = ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter(), f.get_Id() == h.get_CombatId())) {
                        if (l = new qx.util.StringBuilder(1024), l.add(ft, ut.tr(pi), w), gt = f.get_BaseLevel() - h.get_LevelDebuff(), h.get_LevelDebuff() > 0 && (h.get_LevelDebuff() < ClientLib.Data.MainData.GetInstance().get_Server().get_HubCenterDebuffCap() ? gt = (f.get_BaseLevel() - h.get_LevelDebuff()).toString() + fi + f.get_BaseLevel() : h.get_LevelDebuff() == ClientLib.Data.MainData.GetInstance().get_Server().get_HubCenterDebuffCap() && (gt = ht + (f.get_BaseLevel() - h.get_LevelDebuff()).toString() + hi + f.get_BaseLevel())), l.add(gt, e), h.get_LevelDebuff() > 0) {
                            var vi = ClientLib.Data.MainData.GetInstance().get_Time(),
                                dr = vi.GetServerStep(),
                                wi = webfrontend.phe.cnc.Util.getTimespanString(vi.GetTimeSpan(Math.max(0, h.get_EndStep() - dr)), !0, !1),
                                vt = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(g);
                            l.add(k, u, vt, it, k, wi)
                        }
                        l.add(s);
                        a = l.get()
                    }
                case ClientLib.Base.EFactionType.NPCBase:
                case ClientLib.Base.EFactionType.NPCOutpost:
                case ClientLib.Base.EFactionType.NPCCamp:
                case ClientLib.Base.EFactionType.NPCEvent:
                    this.__blH.topPlayerIcon.exclude()
            }
            ni = a;
            sr = lt;
            break;
        case 1:
            if (a = dt ? ut.tr(nt.get_AttackerBaseName()) + pt + ut.tr(ei) + si + nt.get_AttackerBaseLevel() : nt.get_AttackerBaseName(), !dt) switch (nt.get_BattlePlaceFaction()) {
                case ClientLib.Base.EFactionType.GDIFaction:
                case ClientLib.Base.EFactionType.NODFaction:
                    a != null && f != null && (a += w + f.get_BaseLevel() + e)
            }
            lt = dt ? ut.tr(kt) : nt.get_AttackerPlayerName();
            dt && this.__blH.topPlayerIcon.exclude();
            lt == null || nt.get_AttackerAllianceName() == null || dt || (lt += v + nt.get_AttackerAllianceName() + e);
            ni = a;
            sr = lt;
            break;
        case 2:
            if (f != null) {
                a = f.get_Name() + w + f.get_BaseLevel() + e;
                lt = f.get_OwnerName();
                f.get_AllianceDefenseBonus() > 0 && (a += br + f.get_AllianceDefenseBonus() + bu + ut.tr(nr));
                switch (f.get_CityFaction()) {
                    case ClientLib.Base.EFactionType.GDIFaction:
                    case ClientLib.Base.EFactionType.NODFaction:
                        lt != null && f.get_OwnerAllianceName() != null && (lt += v + f.get_OwnerAllianceName() + e);
                        ni = a;
                        sr = lt;
                        break;
                    case ClientLib.Base.EFactionType.NPCFortress:
                        var h = ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter(),
                            ti = b,
                            bt = t,
                            ot = [];
                        if (a = f.get_Name(), gt = f.get_BaseLevel() - h.get_LevelDebuff(), h.get_LevelDebuff() > 0 && (h.get_LevelDebuff() < ClientLib.Data.MainData.GetInstance().get_Server().get_HubCenterDebuffCap() ? gt = (f.get_BaseLevel() - h.get_LevelDebuff()).toString() + fi + f.get_BaseLevel() : h.get_LevelDebuff() == ClientLib.Data.MainData.GetInstance().get_Server().get_HubCenterDebuffCap() && (gt = ht + (f.get_BaseLevel() - h.get_LevelDebuff()).toString() + hi + f.get_BaseLevel())), l = new qx.util.StringBuilder(1024), l.add(ft), l.add(a, c), ti != t ? l.add(o, ti, et, gt, st) : l.add(v, gt, e), bt != t && (vt = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(bt), l.add(u + vt + it)), h.get_LevelDebuff() > 0) {
                            var vi = ClientLib.Data.MainData.GetInstance().get_Time(),
                                dr = vi.GetServerStep(),
                                wi = webfrontend.phe.cnc.Util.getTimespanString(vi.GetTimeSpan(Math.max(0, h.get_EndStep() - dr)), !0, !1);
                            h.get_LevelDebuff() < ClientLib.Data.MainData.GetInstance().get_Server().get_HubCenterDebuffCap() ? ot.push({
                                text: ut.tr(ri, h.get_LevelDebuff(), wi),
                                color: b,
                                icon: g
                            }) : h.get_LevelDebuff() == ClientLib.Data.MainData.GetInstance().get_Server().get_HubCenterDebuffCap() && ot.push({
                                text: ut.tr(ri, ht + h.get_LevelDebuff() + p, wi),
                                color: b,
                                icon: g
                            });
                            vt = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(g);
                            l.add(k, u, vt, it, k, wi)
                        }
                        if (l.add(s), a = l.get(), ot.length > 0) {
                            for (ct = new qx.util.StringBuilder(1024), ct.add(tt), at = 0; at < ot.length; at++) ct.add(tt), ot[at].icon && (vt = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(ot[at].icon), ct.add(u, vt, ci)), ct.add(o, ot[at].color, wt, ot[at].text, ui), ct.add(s);
                            ct.add(s);
                            ni = ct.get()
                        }
                        this.__blH.topPlayerIcon.exclude();
                        break;
                    case ClientLib.Base.EFactionType.NPCBase:
                    case ClientLib.Base.EFactionType.NPCCamp:
                    case ClientLib.Base.EFactionType.NPCOutpost:
                    case ClientLib.Base.EFactionType.NPCEvent:
                        var ti = b,
                            bt = t,
                            ot = [];
                        if (ClientLib.Data.MainData.GetInstance().get_Server().get_CombatUseMoral() && (rr = ClientLib.Base.Util.GetMoralSignType(ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity().get_LvlOffense(), f.get_LvlBase()), rr.k == 1 ? (bt = ir, ti = webfrontend.theme.Color.colors[wu], ot.push({
                                text: ut.tr(er, rr.v),
                                color: ti,
                                icon: bt
                            })) : rr.k == 2 && (bt = iu, ti = webfrontend.theme.Color.colors[or], ot.push({
                                text: ut.tr(hr, rr.v),
                                color: ti,
                                icon: bt
                            }))), a = f.get_Name(), l = new qx.util.StringBuilder(1024), l.add(ft), l.add(a, c), ti != t ? l.add(o, ti, et, f.get_BaseLevel(), st) : l.add(v, f.get_BaseLevel(), e), bt != t && (vt = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(bt), l.add(u + vt + it)), l.add(s), a = l.get(), ot.length > 0) {
                            for (ct = new qx.util.StringBuilder(1024), ct.add(tt), at = 0; at < ot.length; at++) ct.add(tt), ot[at].icon && (vt = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(ot[at].icon), ct.add(u, vt, ci)), ct.add(o, ot[at].color, wt, ot[at].text, ui), ct.add(s);
                            ct.add(s);
                            ni = ct.get()
                        }
                        if (this.__blH.topPlayerIcon.exclude(), f.get_CityFaction() == ClientLib.Base.EFactionType.NPCEvent) {
                            var lr = webfrontend.theme.Color.colors[yt],
                                gr = ClientLib.Data.MainData.GetInstance().get_Player().GetChallengeEventLootContingent(ClientLib.Base.EResourceType.CommandPoints),
                                nu = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(gr),
                                tu = ClientLib.Data.MainData.GetInstance().get_Player().GetChallengeEventLootContingent(ClientLib.Base.EResourceType.RepairChargeOffense_RewardsOnly),
                                ru = webfrontend.phe.cnc.Util.getTimespanString(tu),
                                au = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(qx.util.AliasManager.getInstance().resolve(ii)),
                                vu = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(qx.util.AliasManager.getInstance().resolve(yi)),
                                rt = new qx.util.StringBuilder(1024);
                            rt.add(ut.tr(ar));
                            rt.add(u, au, d);
                            gr <= 0 ? rt.add(o, lr, y, nu, p) : rt.add(nu);
                            rt.add(c, u, vu, d);
                            tu <= 0 ? rt.add(o, lr, y, ru, p) : rt.add(ru);
                            this.__blH.lblLootContingent.setValue(rt.get());
                            this.__blH.lblLootContingent.setVisibility(i)
                        }
                }
            }
    }
    if (a != null && (this.__blH.topBase.setValue(a), ni != null && ni != t ? (this.__blH.topBase.getToolTip().setLabel(ni), this.__blH.topBase.setBlockToolTip(!1)) : this.__blH.topBase.setBlockToolTip(!0)), lt != null && (this.__blH.topPlayer.setValue(lt), this.__blH.topPlayer.setToolTipText(sr)), wr && f != null) {
        var rt = new qx.util.StringBuilder(1024),
            uu = new qx.util.StringBuilder(1024),
            oi = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
        if (oi != null) {
            var kr = ClientLib.Data.MainData.GetInstance().get_Player(),
                vi = ClientLib.Data.MainData.GetInstance().get_Time(),
                yu = vi.GetServerStep(),
                lr = webfrontend.theme.Color.colors[yt],
                pu = webfrontend.theme.Color.colors[di],
                ku = webfrontend.theme.Color.colors[cr],
                fu = kr.GetCommandPointCount(),
                vr = oi.CalculateAttackCommandPointCostToCoord(f.get_PosX(), f.get_PosY(), f.get_CityFaction() == ClientLib.Base.EFactionType.GDIFaction || f.get_CityFaction() == ClientLib.Base.EFactionType.NODFaction, !1),
                bi = oi.CalculateAttackCommandPointCostToCoord(f.get_PosX(), f.get_PosY(), f.get_CityFaction() == ClientLib.Base.EFactionType.GDIFaction || f.get_CityFaction() == ClientLib.Base.EFactionType.NODFaction, !0),
                h = ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter();
            h.get_CombatId() == f.get_Id() && (ur = h.GetClosestAttackField(oi.get_X(), oi.get_Y()), vr = oi.CalculateAttackCommandPointCostToCoord(ur[0], ur[1], !1, !1), bi = oi.CalculateAttackCommandPointCostToCoord(ur[0], ur[1], !1, !0));
            var eu = bi > fu,
                su = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(Math.floor(fu), !0),
                du = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(kr.GetCommandPointMaxStorage(), !0),
                hu = kr.PredictCommandPointStepAtValue(vr),
                bt = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(qx.util.AliasManager.getInstance().resolve(ii));
            rt.add(u, bt, d);
            eu ? rt.add(o, lr, y, su, p) : rt.add(su);
            rt.add(ai, du, ki, ut.tr(li));
            rt.add(c, u, bt, d);
            eu ? rt.add(o, lr, y, bi, p) : bi == vr ? rt.add(bi) : rt.add(o, pu, y, bi, tr, ku, et, vr, st);
            hu > 0 && (cu = Math.max(0, vi.GetTimeSpan(hu) - yu), wi = webfrontend.phe.cnc.Util.getTimespanString(cu, !1), uu.add(c, ut.tr(lu, wi)))
        }
        this.__blH.commandPointsInfo.setValue(rt.get());
        this.__blH.lblAvailableIn.setValue(uu.get())
    }
    switch (r) {
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender:
            yr = dt ? ut.tr(nt.get_AttackerBaseName()) + pt + ut.tr(ei) + si + nt.get_AttackerBaseLevel() : nt.get_AttackerBaseName();
            yr != null && (this.__blH.bottomBase.setValue(yr), this.__blH.bottomBase.setToolTipText(yr));
            fr = dt ? ut.tr(kt) : nt.get_AttackerPlayerName();
            this.__blH.bottomPlayer.setValue(fr);
            this.__blH.bottomPlayer.setToolTipText(fr);
            nt.get_AttackerAllianceName() == null || fr == null || dt || (fr += w + nt.get_AttackerAllianceName() + e);
            dt && this.__blH.bottomPlayerIcon.exclude()
    }
}

function updateCity(n, t) {
    if (n != null) {
        var r = qx.core.Init.getApplication(),
            u = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(),
            f = ClientLib.Data.MainData.GetInstance().get_Time(),
            e = f.GetServerStep(),
            o = u.get_ProtectionEndStep(),
            s = o - e > 0;
        !n.IsOwnBase() && s && (n.get_CityFaction() == ClientLib.Base.EFactionType.GDIFaction || n.get_CityFaction() == ClientLib.Base.EFactionType.NODFaction) && (!t == ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase || !t == ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense) ? (this.__blH.lblStateInformation.setVisibility(i), this.__blH.lblStateInformation.setValue(r.tr(tu))) : this.__blj != null && (t == ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase || t == ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense) && this.__blj.exclude()
    }
}

function getUIItem(n) {
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_COMPOINTSINFO:
            return this.__blH.commandPointsInfo
    }
    return null
}