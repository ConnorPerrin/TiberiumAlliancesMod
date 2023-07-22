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
    this.__bjt !== n && (this.__bjt = n, this.setViewMode(this.__iC.getViewMode()))
}

function setViewMode(t) {
    var o = !1,
        f = !1,
        s = !1,
        r = !1,
        u = !1,
        h = !1,
        e = !1;
    switch (t) {
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase:
            if (this.__bjt) break;
            u = !0;
            f = !0;
            s = !0;
            r = !0;
            e = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense:
            u = !0;
            f = !0;
            h = !0;
            r = !0;
            e = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense:
            o = !0;
            u = !0;
            f = !0;
            r = !0;
            e = !0
    }
    this.__blB.setVisibility(e ? i : n);
    this.__blj.exclude();
    this.__blh.setVisibility(r ? i : n);
    this.__bli.setVisibility(r ? i : n);
    this.__blu.setVisibility(o ? i : n);
    this.__blx.setVisibility(h ? i : n);
    this.__blg.setVisibility(s ? i : n);
    this.__blq.setVisibility(f ? i : n);
    this.__bla.setVisibility(u ? i : n);
    this.__bld.setVisibility(u ? i : n);
    this.__bln.setVisibility(n);
    this.__bll.setVisibility(n)
}

function updateUI(n, t) {
    this.__bkm = n;
    var i = !1,
        r = !1;
    switch (n) {
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase:
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense:
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense:
            r = !0;
            i = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense:
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase:
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense:
            i = !0
    }
    i && this.updateCity(t);
    r && this.updateOwnCity(t)
}

function updateCity(n) {
    var f, i, e, r, o, u;
    n !== null && (f = n.GetBuildingSlotLimit(), i = n.GetBuildingSlotCount(), i >= f && i > 0 ? this.__blf.setTextColor(l) : this.__blf.setTextColor(v), this.__blf.setValue(i.toString() + p + f.toString()), this.__bgL.setValue(n.get_Name()), n.IsOwnBase() && (e = n.get_UnitLimitOffense(), r = n.get_TotalOffenseHeadCount(), r >= e && r > 0 ? this.__blt.setTextColor(l) : this.__blt.setTextColor(v), this.__blt.setValue(r.toString() + p + e.toString())), o = n.get_UnitLimitDefense(), u = n.get_TotalDefenseHeadCount(), u >= o && u > 0 ? this.__blw.setTextColor(l) : this.__blw.setTextColor(v), this.__blw.setValue(u.toString() + p + o.toString()), n.IsOwnBase() || (this.__bly.setLabel(t), this.__blh.setValue(t), this.__bli.setValue(t), this.__blj.exclude()))
}

function updateOwnCity(u) {
    var o, d, et, g, ot, nt, st, tt, it, a, v, rt;
    if (u !== null) {
        var s = !1,
            h = !1,
            c = !1,
            ut = t,
            p = t,
            ft = t,
            w = t,
            k = t,
            f = qx.core.Init.getApplication(),
            e = ClientLib.Data.MainData.GetInstance().get_Time(),
            l = e.GetServerStep();
        if (u.IsOwnBase()) {
            o = new qx.util.StringBuilder(1024);
            u.get_HasOutgoingAttack() && (d = f.tr(ir), s || h || c || (ut = d, s = !0), o.add(d));
            u.GetImpactStep() > l && (et = webfrontend.phe.cnc.Util.getTimespanString(e.GetTimeSpan(Math.max(0, u.GetImpactStep() - l)), !0, !0), g = f.tr(vi, et), s || h || c ? o.add(b) : (p = g, c = !0), o.add(g));
            u.get_MoveCooldownEndStep() > l && (ot = webfrontend.phe.cnc.Util.getTimespanString(e.GetTimeSpan(Math.max(0, u.get_MoveCooldownEndStep() - l)), !1), nt = f.tr(pr, ot), s || h || c ? o.add(b) : (p = nt, h = !0), o.add(nt));
            ft = o.get();
            u.get_IsLocked() && (k = f.tr(lr), this.__bkm !== ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense && (k = f.tr(oi)), st = Math.max(0, e.GetTimeSpan(u.get_LockdownEndStep() - l)), w = webfrontend.phe.cnc.Util.getTimespanString(st, !1));
            tt = !0;
            u.get_IsGhostMode() || u.get_HasIncommingAttack() || u.get_IsLocked() ? (tt = !1, this.__blc.show()) : this.__blc.exclude();
            it = !1;
            a = t;
            tt ? u.get_CityBuildingsData().get_HasCollectableBuildings() ? (a = f.tr(tr) + webfrontend.gui.ShortkeyMapper.getKeyDesc(webfrontend.gui.ShortkeyMapper.keys.collectAll), it = !0) : a = f.tr(fr) : a = null;
            this.__blb.setToolTipText(a);
            this.__blb.setEnabled(it);
            e = ClientLib.Data.MainData.GetInstance().get_Time();
            var ct = e.GetServerStep(),
                ht = u.get_ProtectionEndStep(),
                at = ht - ct > 0,
                vt = webfrontend.phe.cnc.Util.getDateTimeString(e.GetJSStepTime(ht));
            this.__blm.setValue(vt);
            this.__bln.setVisibility(at ? i : n);
            switch (this.__bkm) {
                case ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase:
                    this.__blo.setValue(f.tr(yt));
                    this.__blp.setValue((Math.floor(u.get_LvlBase() * 100) / 100).toFixed(2));
                    this.__blA.setLabel(y + f.tr(ar) + r);
                    this._cntSupportWeapon.exclude();
                    break;
                case ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense:
                    this.__blo.setValue(f.tr(ki));
                    this.__blp.setValue((Math.floor(u.get_LvlDefense() * 100) / 100).toFixed(2));
                    this.__blA.setLabel(y + f.tr(ui) + r);
                    v = ClientLib.Data.MainData.GetInstance().get_CitiesSupport().GetSupportWeaponLevels(u.get_Id());
                    rt = u.get_SupportData();
                    v !== null && v.l > 0 || rt !== null ? (this.setSupportWeaponInfo(v, rt, u), this.__blC ? (this._cntSupportWeapon.show(), this.__blj.setDomTop(70)) : this.__blj.setDomTop(38)) : this._cntSupportWeapon.exclude();
                    break;
                case ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense:
                    this.__blo.setValue(f.tr(lt));
                    this.__blp.setValue((Math.floor(u.get_LvlOffense() * 100) / 100).toFixed(2));
                    this.__blA.setLabel(y + f.tr(gt) + r);
                    this._cntSupportWeapon.exclude()
            }
        }
        this.__bly.setLabel(ft);
        this.__blh.setValue(ut);
        this.__bli.setValue(p);
        this.__blh.setVisibility(s ? i : n);
        this.__bli.setVisibility(h || c ? i : n);
        s || h || c ? (this._cntSupportWeapon.isVisible() ? this.__blj.setDomTop(70) : this.__blj.setDomTop(38), this.__blj.show()) : this.__blj.exclude();
        this.__blk.setValue(w);
        this.__blz.setLabel(k);
        this.__bll.setVisibility(w !== t ? i : n)
    }
}

function setSupportWeaponInfo(n, t, i) {
    var v = 0,
        u = s,
        y = 0,
        o = s,
        p = 0,
        h = s,
        r = qx.core.Init.getApplication(),
        w, l;
    for (w in n.l) {
        l = n.l[w];
        switch (l.type) {
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.GDIFaction):
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.NODFaction):
                p++;
                h = h + r.tr(e, l.level) + f;
                break;
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.GDIFaction):
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.NODFaction):
                v++;
                u = u + r.tr(e, l.level) + f;
                break;
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.GDIFaction):
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.NODFaction):
                y++;
                o = o + r.tr(e, l.level) + f
        }
    }
    if (t !== null && i.get_SupportDedicatedBaseId() === 0) switch (t.get_Type()) {
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.GDIFaction):
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.NODFaction):
            p++;
            h = h + r.tr(e, t.get_Level()) + f;
            break;
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.GDIFaction):
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.NODFaction):
            v++;
            u = u + r.tr(e, t.get_Level()) + f;
            break;
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.GDIFaction):
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.NODFaction):
            y++;
            o = o + r.tr(e, t.get_Level()) + f
    }
    this._imgSupportDamageInf.set({
        toolTipText: u.toString()
    });
    this._imgSupportDamageTank.set({
        toolTipText: o.toString()
    });
    this._imgSupportDamageAir.set({
        toolTipText: h.toString()
    });
    this._lblSupportDamageInf.setValue(c + v.toString() + a);
    this._lblSupportDamageTank.setValue(c + y.toString() + a);
    this._lblSupportDamageAir.setValue(c + p.toString() + a);
    this.__blC = y > 0 || v > 0 || p > 0 ? !0 : !1
}

function getUIItem(n) {
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_COLLECTALLRESOURCES:
            return this.__blb;
        case ClientLib.Data.Missions.PATH.WDG_PROTECTION:
            return this.__bln;
        case ClientLib.Data.Missions.PATH.WDG_SLOTSBUILDINGS:
            return this.__blg;
        case ClientLib.Data.Missions.PATH.WDG_SLOTSARMY:
            return this.__blu;
        case ClientLib.Data.Missions.PATH.WDG_SLOTSDEFENSE:
            return this.__blx
    }
    return null
}

function onHotKeyPress(n, t, i) {
    var u = n.getKeyIdentifier(),
        r = !1;
    switch (u) {
        case webfrontend.gui.ShortkeyMapper.keys.switchToNextCity:
            t && this.__bkY.isEnabled() && this.__bkY.isVisible() && (this.__bkY.execute(), r = !0);
            break;
        case webfrontend.gui.ShortkeyMapper.keys.switchToPreviousCity:
            t && this.__bkX.isEnabled() && this.__bkX.isVisible() && (this.__bkX.execute(), r = !0);
            break;
        case webfrontend.gui.ShortkeyMapper.keys.collectAll:
            !i && t && this.__blb.isEnabled() && this.__blb.isVisible() && (this.__blb.execute(), r = !0)
    }
    return r
}