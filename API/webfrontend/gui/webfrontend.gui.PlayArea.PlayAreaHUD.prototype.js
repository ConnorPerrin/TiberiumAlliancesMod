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

function get_CombatComplete() {
    return !ClientLib.Data.MainData.GetInstance().get_Combat().get_AttackerPlayerId() || ClientLib.Data.MainData.GetInstance().get_Combat().get_Complete()
}

function setTutorialMode(n) {
    this.__bjt != n && (this.__bjt = n, this.__bjA.setTutorialMode(n), this.__bjz.setTutorialMode(n), this.__bjB.setTutorialMode(n), this.setViewMode(this.__iC.getViewMode()))
}

function setViewMode(i) {
    var f = qx.core.Init.getApplication(),
        d, g, nt;
    this.__bkm = i;
    this.__bjz.setViewMode(i);
    this.__bjB.setViewMode(i);
    this.__bjA.setViewMode(i);
    this.__bjC.setViewMode(i);
    var e = !1,
        u = !1,
        y = !1,
        p = !1,
        s = !1,
        tt = !1,
        w = !1,
        h = !1,
        c = !1,
        o = !1,
        b = !1,
        it = !1,
        r = !1,
        l = null,
        k = null;
    switch (i) {
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase:
            if (l = f.getTechPlacementOverlay(), this.__bjt) break;
            u = !0;
            y = !0;
            s = !0;
            p = !0;
            w = !0;
            r = !0;
            b = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense:
            u = !0;
            y = !0;
            s = !0;
            p = !0;
            w = !0;
            it = !0;
            r = !0;
            l = f.getUnitRecruitmentOverlay();
            k = ClientLib.Base.EPlacementType.Defense;
            d = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
            webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.NewbieProtection) && d && d.get_isProtected() && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.NewbieProtection);
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense:
            u = !0;
            y = !0;
            s = !0;
            p = !0;
            w = !0;
            r = !0;
            l = f.getUnitRecruitmentOverlay();
            k = ClientLib.Base.EPlacementType.Offense;
            b = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase:
            e = !0;
            h = !0;
            u = !0;
            r = !1;
            this.__bka.setIcon(this.__bjX[ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense]);
            this.__bka.setToolTipText(f.tr(a));
            this.__bjY = ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense:
            e = !0;
            h = !0;
            u = !0;
            r = !1;
            this.__bka.setIcon(this.__bjX[ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase]);
            this.__bka.setToolTipText(f.tr(v));
            this.__bjY = ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase;
            g = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
            webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.UnitTransport) && g && g.get_CityUnitsData().HasTransportUnits() && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.UnitTransport);
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker:
            e = !0;
            u = !0;
            r = !1;
            o = !0;
            c = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender:
            e = !0;
            tt = !0;
            s = !0;
            u = !0;
            r = !1;
            o = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker:
            e = !0;
            u = !0;
            r = !1;
            o = !0;
            c = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender:
            e = !0;
            u = !0;
            r = !1;
            o = !0;
            c = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSimulation:
            e = !0;
            l = f.getReportReplayOverlay();
            r = !1;
            o = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase:
            e = !1;
            h = !0;
            u = !1;
            r = !1;
            this.__bka.setIcon(this.__bjX[ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense]);
            this.__bka.setToolTipText(f.tr(a));
            this.__bjY = ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense:
            e = !1;
            h = !0;
            u = !1;
            r = !1;
            this.__bka.setIcon(this.__bjX[ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase]);
            this.__bka.setToolTipText(f.tr(v));
            this.__bjY = ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase
    }
    this.__bjE.setVisibility(u ? t : n);
    this.__bjK.setVisibility(tt ? t : n);
    this.__bjJ.setVisibility(p ? t : n);
    this.__bjI.setVisibility(s ? t : n);
    this.__bjH.setVisibility(y ? t : n);
    this.__bjS.setVisibility(w ? t : n);
    this.__bjF.setVisibility(h ? t : n);
    this.__bkc.setVisibility(c ? t : n);
    this.__bjG.setVisibility(o ? t : n);
    this.__bjT.setVisibility(it ? t : n);
    this.__bjW.setVisibility(r ? t : n);
    this.__bjO.setVisibility(b ? t : n);
    this.__bkl.setSource(b ? ir : ff);
    c && this.__bkA();
    this.__oJ.setLayoutProperties(e ? this.__bkk : this.__bkj);
    this.__bjE.setLayoutProperties(e ? {
        bottom: 100,
        left: 0
    } : {
        bottom: 36,
        left: 0
    });
    nt = i == ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase || i == ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender;
    this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase].btn.setIcon(nt ? this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase].activeIcon : this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase].inactiveIcon);
    this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase].btn.setEnabled(!nt);
    this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender].btn.setIcon(i != ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender ? this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender].activeIcon : this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender].inactiveIcon);
    this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender].btn.setEnabled(i != ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender);
    this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense].btn.setIcon(i == ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense ? this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense].activeIcon : this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense].inactiveIcon);
    this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense].btn.setEnabled(i != ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense);
    this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense].btn.setIcon(i == ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense ? this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense].activeIcon : this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense].inactiveIcon);
    this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense].btn.setEnabled(i != ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense);
    f.showBottomOverlayLockdownImg(!1);
    f.getProductionDetailViewPopup().deactivate();
    f.switchBottomOverlay(l, k);
    this.__bkl.setVisibility(et)
}

function updateCombatSetupButton() {
    var t = ClientLib.Vis.VisMain.GetInstance().get_CombatSetup(),
        i = ClientLib.Vis.VisMain.GetInstance(),
        u = qx.core.Init.getApplication(),
        n = u.getPlayArea(),
        r = (this.__bkw(t) + this.__bkx(t)) / 2;
    i.get_PositionY() < r && n.getViewMode() == ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense ? n.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase, n.getViewCity(), -1, -1, 1) : i.get_PositionY() > r && n.getViewMode() == ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase && n.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense, n.getViewCity(), -1, -1, 2)
}

function getCombatSetupOffset(n) {
    var t = ClientLib.Vis.VisMain.GetInstance().get_CombatSetup(),
        i = t.get_PosY();
    switch (n) {
        case ClientLib.Vis.CombatSetup.CombatSetupViewMode.Base:
        case ClientLib.Vis.CombatSetup.CombatSetupViewMode.AllianceBase:
            i = this.__bkw(t);
            break;
        case ClientLib.Vis.CombatSetup.CombatSetupViewMode.Defense:
        case ClientLib.Vis.CombatSetup.CombatSetupViewMode.AllianceBaseDefense:
            i = this.__bkx(t)
    }
    return i
}

function updateUI(n, t) {
    this.__bjz.updateUI(n, t);
    this.__bjB.updateUI(n, t);
    this.__bjA.updateUI(n, t);
    this.__bjC.updateUI(n, t);
    var r = !1,
        f = !1,
        i = !1,
        u = !1;
    switch (n) {
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase:
            f = !0;
            r = !0;
            i = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense:
            f = !0;
            r = !0;
            i = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense:
            f = !0;
            r = !0;
            i = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase:
            r = !0;
            i = !0;
            this.updateCombatSetupButton();
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense:
            r = !0;
            i = !0;
            this.updateCombatSetupButton();
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker:
            i = !0;
            u = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender:
            i = !0;
            u = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker:
            i = !0;
            u = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender:
            i = !0;
            u = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay:
            u = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase:
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense:
            r = !0
    }
    r && this.updateCity(t);
    f ? this.updateOwnCity(t) : this.updateAlienCity(t);
    i && this.__bky();
    u && this.__bkz()
}

function updateCity(n) {
    n != null && (this.__bks || ClientLib.Vis.VisMain.GetInstance().get_MouseMode() != webfrontend.gui.PlayArea.PlayAreaHUD.EModeRepair || this.__bkL())
}

function updateAlienCity(n) {
    n != null && this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase && webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.ItemReward) && webfrontend.phe.cnc.Util.cityHasItemRewards(n.get_Id()) && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.ItemReward)
}

function set_LastAttackedCityCoords(n) {
    this.__bko = {};
    this.__bko.x = n & 65535;
    this.__bko.y = n >> 16
}

function updateOwnCity(i) {
    var k, d, g, s, ht, h, c, nt, tt, rt, ut, a, v, ot, u, y, p, w, o, f;
    if (i != null) {
        var r = qx.core.Init.getApplication(),
            ct = ClientLib.Data.MainData.GetInstance().get_Server(),
            st = ClientLib.Data.MainData.GetInstance().get_Time(),
            b = st.GetServerStep();
        if (i.IsOwnBase()) {
            if (k = i.CanTrade(), d = i.get_HasIncommingAttack(), this.__bjK.setVisibility(d ? t : n), this.__bjJ.setVisibility(d ? n : t), this.__bjH.setVisibility(d ? n : t), g = ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities().c, k == ClientLib.Data.ETradeError.None && g > 1) this.__Ag.setEnabled(!0), this.__Ag.setToolTipText(r.tr(bt) + webfrontend.gui.ShortkeyMapper.getKeyDesc(webfrontend.gui.ShortkeyMapper.keys.trade));
            else {
                if (s = r.tr(fu), g > 1) switch (k) {
                    case ClientLib.Data.ETradeError.IsAttacked:
                        s = r.tr(nu);
                        break;
                    case ClientLib.Data.ETradeError.IsGhostMode:
                        s = r.tr(sr)
                } else s = r.tr(tr);
                this.__Ag.setEnabled(!1);
                this.__Ag.setToolTipText(s)
            }
            ht = ClientLib.Data.MainData.GetInstance().get_Player().get_IsSubstituted();
            h = ht && !webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SUBSTITUTIONALLOWUPGRADE);
            h && (this.__bjQ.setEnabled(!1), this.__bjQ.setToolTipText(r.tr(cu)));
            switch (this.__bkm) {
                case ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase:
                    h || (this.__bjQ.setEnabled(!0), this.__bjQ.setToolTipText(r.tr(e) + webfrontend.gui.ShortkeyMapper.getKeyDesc(webfrontend.gui.ShortkeyMapper.keys.upgrade)));
                    r.getCurrentBottomOverlay() != r.getTechPlacementOverlay() && r.switchBottomOverlay(r.getTechPlacementOverlay(), null);
                    break;
                case ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense:
                    h || (c = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Defense_HQ), this.__bjQ.setEnabled(c != null && c.get_CurrentDamage() == 0), c == null ? this.__bjQ.setToolTipText(r.tr(wr)) : c.get_CurrentDamage() > 0 ? this.__bjQ.setToolTipText(r.tr(gu)) : this.__bjQ.setToolTipText(r.tr(e) + webfrontend.gui.ShortkeyMapper.getKeyDesc(webfrontend.gui.ShortkeyMapper.keys.upgrade)));
                    r.getCurrentBottomOverlay() != r.getUnitRecruitmentOverlay() && r.switchBottomOverlay(r.getUnitRecruitmentOverlay(), ClientLib.Base.EPlacementType.Defense);
                    nt = i.get_SupportAlertEndStep();
                    nt > b ? (tt = i.get_DefenseAutoRepairStartStep(), rt = st.GetTimespanString(nt, b), tt > b ? (this.__bjT.getToolTip().setLabel(r.tr(bi)), this.__bjV.setValue(dt), this.__bjV.setTextColor(ft), this.__bjU.setWidth(0)) : (ut = new qx.util.StringBuilder(1024), ut.add(r.tr(gi, ct.get_DefenseAutoRepairRate() * 100), su, r.tr(pr, rt)), this.__bjT.getToolTip().setLabel(ut.get()), this.__bjV.setValue(rt), this.__bjV.setTextColor(it), this.__bjU.setWidth(Math.max(0, Math.floor(58 * (b - tt) / (nt - tt)))))) : (this.__bjT.getToolTip().setLabel(r.tr(rr)), this.__bjV.setValue(l), this.__bjU.setWidth(58));
                    break;
                case ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense:
                    h || (a = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Command_Center), this.__bjQ.setEnabled(a != null && a.get_CurrentDamage() == 0), a == null ? this.__bjQ.setToolTipText(r.tr(ku)) : a.get_CurrentDamage() > 0 ? this.__bjQ.setToolTipText(r.tr(lu)) : this.__bjQ.setToolTipText(r.tr(e) + webfrontend.gui.ShortkeyMapper.getKeyDesc(webfrontend.gui.ShortkeyMapper.keys.upgrade)));
                    r.getCurrentBottomOverlay() != r.getUnitRecruitmentOverlay() && r.switchBottomOverlay(r.getUnitRecruitmentOverlay(), ClientLib.Base.EPlacementType.Offense)
            }
            webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.ItemInInventory) && webfrontend.data.ItemEvents.getInstance().getHintTriggeredItemInInventory() && (v = ClientLib.Data.MainData.GetInstance().get_Player(), (v.get_Faction() == ClientLib.Base.EFactionType.GDIFaction && v.get_ScorePoints() >= 606 || v.get_Faction() == ClientLib.Base.EFactionType.NODFaction && v.get_ScorePoints() >= 590) && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.ItemInInventory));
            webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.MaxStorage) && !qx.core.Init.getApplication().getCurrentMenuOverlay() && webfrontend.gui.Util.getMaxedResourcesCount(i) > 0 && (ot = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Construction_Yard), ot && ot.get_CurrentLevel() >= 7 && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.MaxStorage));
            webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.TunnelExits) && (u = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Command_Center), u && u.get_CurrentLevel() >= 12 && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.TunnelExits));
            webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.Relocating) && i.get_LvlBase() >= 7 && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.Relocating);
            webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.Support) && (u = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Support_Art), u || (u = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Support_Ion)), u || (u = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Support_Air)), u && u.get_CurrentLevel() >= 2 && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.Support));
            this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase && webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.MovingInBase) && i.GetNumBuildings() > 20 && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.MovingInBase);
            this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense && (webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.Firehawk) && (i.get_CityUnitsData().HasUnitMdbId(ClientLib.Base.EUnit.GDI_Firehawk) || i.get_CityUnitsData().HasUnitMdbId(ClientLib.Base.EUnit.NOD_Vertigo)) && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.Firehawk), webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.UnitTransport) && i.get_CityUnitsData().HasTransportUnits() && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.UnitTransport), webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.RepairEfficiency) && (y = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Barracks), y = y ? y.get_CurrentLevel() : 0, p = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Factory), p = p ? p.get_CurrentLevel() : 0, w = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Airport), w = w ? w.get_CurrentLevel() : 0, o = i.get_CityUnitsData().get_HighestLVlForUnitGroupTypes().d, (o.hasOwnProperty(ClientLib.Data.EUnitGroup.Infantry) && o[ClientLib.Data.EUnitGroup.Infantry] - y >= 3 || o.hasOwnProperty(ClientLib.Data.EUnitGroup.Vehicle) && o[ClientLib.Data.EUnitGroup.Vehicle] - p >= 3 || o.hasOwnProperty(ClientLib.Data.EUnitGroup.Aircraft) && o[ClientLib.Data.EUnitGroup.Aircraft] - w >= 3) && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.RepairEfficiency)));
            this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense && (f = i.get_CityUnitsData(), webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.MinimumRange) && (f.HasUnitMdbId(ClientLib.Base.EUnit.GDI_ArtilleryTank) || f.HasUnitMdbId(ClientLib.Base.EUnit.GDI_ArtilleryInfantry) || f.HasUnitMdbId(ClientLib.Base.EUnit.GDI_ArtilleryAir) || f.HasUnitMdbId(ClientLib.Base.EUnit.NOD_ArtilleryTank) || f.HasUnitMdbId(ClientLib.Base.EUnit.NOD_ArtilleryInfantry) || f.HasUnitMdbId(ClientLib.Base.EUnit.NOD_ArtilleryAir)) && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.MinimumRange), webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.UnitGarrison) && f.HasTransportUnitsDefense() && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.UnitGarrison));
            webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.Trading) && k == ClientLib.Data.ETradeError.None && g > 1 && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.Trading)
        }
        i.get_IsLocked() && this.__bkm != ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense ? this.__bkl.getVisibility() != t && (r.showBottomOverlayLockdownImg(!0), this.__bkl.setVisibility(t), this.__bkS(!1), this.__bkT(!1)) : this.__bkl.getVisibility() == t && (r.showBottomOverlayLockdownImg(!1), this.__bkl.setVisibility(et))
    }
}

function _onToggleArmyFormation() {
    var f = this.__bkD(),
        u, i, t;
    if (f > 0) {
        var n = qx.core.Init.getApplication(),
            r = ClientLib.Data.MainData.GetInstance(),
            e = r.get_Cities();
        n.getPlayArea().getViewMode() == ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase || n.getPlayArea().getViewMode() == ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense || n.getPlayArea().getViewMode() == ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense ? (t = e.get_CurrentOwnCity(), t && (u = !0, t.IsOwnBase() && t.get_HasOutgoingAttack() && (i = r.get_AllianceCombatState().GetCombatByAttackerBaseId(this.__iC.getViewCity()), i != null && (r.get_Combat().set_Id(i.DefenderBaseId), this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker, i.DefenderBaseId, -1, -1, -1), u = !1))), u && (n.getBackgroundArea().closeCityInfo(), n.getPlayArea().setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense, f, 0, 0), ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().SetPosition(0, n.getPlayArea().getHUD().getCombatSetupOffset(ClientLib.Vis.CombatSetup.CombatSetupViewMode.Defense)))) : (t = e.get_CurrentOwnCity(), webfrontend.gui.UtilView.openVisModeInMainWindow(ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense, t.get_Id(), !1))
    }
}

function _onTick() {
    var t = ClientLib.Vis.VisMain.GetInstance(),
        n = t.GetActiveView();
    n != null && this.__bkv(!n.get_VisAreaComplete())
}

function activateSellMode() {
    this.__bjR.setIcon(this.__bjM[webfrontend.gui.PlayArea.PlayAreaHUD.EModeSell]);
    ClientLib.Vis.VisMain.GetInstance().set_MouseMode(webfrontend.gui.PlayArea.PlayAreaHUD.EModeSell)
}

function resetToggleMode() {
    this.__Hk.resetSelection()
}

function isViewModeHUDBuilding() {
    var n = qx.core.Init.getApplication();
    return n.getCurrentBottomOverlay() == n.getTechPlacementOverlay()
}

function _onBase() {
    this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase, ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId(), -1, -1)
}

function _onGdiBenchmark() {
    var u = qx.core.Init.getApplication(),
        f = u.__mainOverlay.playArea,
        r;
    ClientLib.Data.MainData.GetInstance().get_Cities().CreateBenchmark(1);
    var t = ClientLib.Data.MainData.GetInstance().get_Cities(),
        i = t.get_AllCities().d,
        n = null;
    for (r in i) n = i[r];
    n != null && (ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(n.get_Id()), t.SetBenchmarkCityOwnerId(1, ClientLib.Data.MainData.GetInstance().get_Player().get_AccountId()), ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(0), f.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase, 0, -1, -1, 0))
}

function _onNodBenchmark() {
    var u = qx.core.Init.getApplication(),
        f = u.__mainOverlay.playArea,
        r;
    ClientLib.Data.MainData.GetInstance().get_Cities().CreateBenchmark(2);
    var t = ClientLib.Data.MainData.GetInstance().get_Cities(),
        i = t.get_AllCities().d,
        n = null;
    for (r in i) n = i[r];
    n != null && (ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(n.get_Id()), t.SetBenchmarkCityOwnerId(2, ClientLib.Data.MainData.GetInstance().get_Player().get_AccountId()), ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(0), f.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase, 0, -1, -1, 0))
}

function getUIItem(n) {
    var t = this.__bjz.getUIItem(n);
    if (t != null || (t = this.__bjA.getUIItem(n), t != null) || (t = this.__bjB.getUIItem(n), t != null)) return t;
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_BUILDINGMENU:
            return null;
        case ClientLib.Data.Missions.PATH.WDG_UPGRADE:
            return this.__bjQ;
        case ClientLib.Data.Missions.PATH.WDG_BASE:
            return this.__bjH;
        case ClientLib.Data.Missions.PATH.WDG_OFFENSE:
            return this.__bjI;
        case ClientLib.Data.Missions.PATH.WDG_DEFENSE:
            return this.__bjJ;
        case ClientLib.Data.Missions.PATH.WDG_REPAIR:
            return this.__bjO;
        case ClientLib.Data.Missions.PATH.WDG_COMBATSWAPVIEW:
            return this.__bka;
        case ClientLib.Data.Missions.PATH.WDG_MOVING:
            return this.__bjP;
        case ClientLib.Data.Missions.PATH.WDG_TRADE:
            return this.__Ag;
        case ClientLib.Data.Missions.PATH.WDG_SELL:
            return this.__bjR;
        case ClientLib.Data.Missions.PATH.WDG_REPAIRALL:
            return this.__bkr
    }
    return null
}

function onHotKeyDown() {
    !this.__bkn
}

function onHotKeyUp() {
    !this.__bkn
}

function onHotKeyPress(n) {
    var u, t, f, e;
    if (this.__bkn) {
        var o = n.getKeyIdentifier(),
            i = !1,
            r = !0,
            s = ClientLib.Data.MainData.GetInstance().get_Player().get_IsSubstituted(),
            t = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
        if (t != null && (i = t.IsOwnBase(), r = t.get_IsLocked()), u = this.__bjz.onHotKeyPress(n, i, r), u || (u = qx.core.Init.getApplication().getArmySetupAttackBar().onHotKeyPress(n, i, r)), !u) switch (o) {
            case webfrontend.gui.ShortkeyMapper.keys.switchViewUp:
                this.__bkV();
                break;
            case webfrontend.gui.ShortkeyMapper.keys.switchViewDown:
                this.__bkW();
                break;
            case webfrontend.gui.ShortkeyMapper.keys.base:
                i ? (this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense || this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense) && this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase, t.get_Id(), 0, 0) : (this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense && (this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase, t.get_Id(), 0, 0), ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().ScrollToPosition(this.getCombatSetupOffset(ClientLib.Vis.CombatSetup.CombatSetupViewMode.Base))), this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense && (this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase, t.get_Id(), 0, 0), ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().ScrollToPosition(this.getCombatSetupOffset(ClientLib.Vis.CombatSetup.CombatSetupViewMode.AllianceBase))));
                break;
            case webfrontend.gui.ShortkeyMapper.keys.defense:
                i ? (this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase || this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense) && this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense, t.get_Id(), 0, 0) : (this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase && (this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense, t.get_Id(), 0, 0), ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().ScrollToPosition(this.getCombatSetupOffset(ClientLib.Vis.CombatSetup.CombatSetupViewMode.Defense))), this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase && (this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense, t.get_Id(), 0, 0), ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().ScrollToPosition(this.getCombatSetupOffset(ClientLib.Vis.CombatSetup.CombatSetupViewMode.AllianceBaseDefense))));
                break;
            case webfrontend.gui.ShortkeyMapper.keys.offense:
                i && (t = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.__iC.getViewCity()), t != null && t.get_HasOutgoingAttack() ? (f = ClientLib.Data.MainData.GetInstance().get_AllianceCombatState().GetCombatByAttackerBaseId(this.__iC.getViewCity()), f != null && (ClientLib.Data.MainData.GetInstance().get_Combat().set_Id(f.DefenderBaseId), this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker, f.DefenderBaseId, -1, -1, -1))) : (this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase || this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense || this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender) && this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense, t.get_Id(), 0, 0));
                break;
            case webfrontend.gui.ShortkeyMapper.keys.repair:
                !r && i && this.__bjO.isEnabled() && this.__bjO.isVisible() && this.__bjO.execute();
                break;
            case webfrontend.gui.ShortkeyMapper.keys.repairall:
                !r && i && this.__bkr.isVisible() && this.__bkr.isEnabled() && this.__bkr.execute();
                break;
            case webfrontend.gui.ShortkeyMapper.keys.move:
                !r && i && this.__bjP.isEnabled() && this.__bjP.isVisible() && this.__bjP.execute();
                break;
            case webfrontend.gui.ShortkeyMapper.keys.upgrade:
                !r && i && this.__bjQ.isEnabled() && this.__bjQ.isVisible() && this.__bjQ.execute();
                break;
            case webfrontend.gui.ShortkeyMapper.keys.sell:
                !r && i && this.__bjR.isEnabled() && this.__bjR.isVisible() && (e = s && !webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SUBSTITUTIONALLOWSELL), e || this.__bjR.execute());
                break;
            case webfrontend.gui.ShortkeyMapper.keys.trade:
                !r && i && this.__Ag.isEnabled() && this.__Ag.isVisible() && this.__Ag.execute()
        }
    }
}