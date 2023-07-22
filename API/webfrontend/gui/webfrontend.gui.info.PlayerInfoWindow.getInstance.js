function openWithPlayerId(n) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(pi, {
        id: n
    }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this._onPlayerInfo), null)
}

function openWithPlayerName(n) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(lo, {
        name: n
    }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this._onPlayerInfo), null)
}

function _onResize() {
    var i = this.__zi.getLayoutParent(),
        n, t, r, u;
    i != null && (n = i.getBounds(), t = this.__zi.getBounds(), n != null && t != null) && (r = Math.floor((n.width - t.width) / 2), u = Math.floor((n.height - t.height - 24) / 2), this.__zi.setLayoutProperties({
        left: Math.max(0, r),
        top: Math.max(0, u)
    }))
}

function _onPlayerInfo(u, f) {
    var st, lt, a, vt, pt, o, ft, ni, ti, et, ot, e;
    if (this.__zB(), u == !1 || f == null) this.__yR.setVisibility(t), this.__za.setVisibility(r), this.__zi.setVisibility(t);
    else {
        if (this.__yR.setVisibility(r), this.__za.setVisibility(t), this.__zd = f.i, this.__zf = f.n, st = qx.core.Init.getApplication(), lt = st.getChat().getChatWidget().isPlayerIgnored(this.__zf), this.__zu.setLabel(lt ? this.tr(ht) : this.tr(ct)), this.__zi.setSource(webfrontend.phe.cnc.gui.util.Images.getFactionIconLarge(f.f)), this.__zi.setVisibility(r), this.__zj.setVisibility(f.hchc ? r : t), this.__yS.setValue(f.n), this.__yT.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(f.p)), f.ii ? this.__yU.setValue(this.tr(pu)) : this.__yU.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(f.r)), this.__yV.setValue(f.bd.toString()), this.__yW.setAlliance(f.an, f.a), this.__ze = f.a, this.__yX.setValue(f.c != null ? f.c.length.toString() : vf), this.__zc = [], f.c != null)
            for (e = 0; e < f.c.length; e++) {
                var s = f.c[e].i,
                    ii = f.c[e].n,
                    ri = webfrontend.phe.cnc.gui.util.Numbers.formatCoordinates(f.c[e].x, f.c[e].y),
                    ui = f.c[e].p;
                this.__zc.push({
                    n: ii,
                    c: ri,
                    p: ui,
                    i: s,
                    x: f.c[e].x,
                    y: f.c[e].y
                })
            }
        if (this.__zb.setDataAsMapArray(this.__zc, !0), f.ew != null && f.ew.length > 0) {
            for (this.__zn.exclude(), this.__yH.removeAll(), e = 0; e < f.ew.length; e++) {
                var c = f.ew[e],
                    b = c.n,
                    at = c.an,
                    l = c.r,
                    it = c.f,
                    rt = c.is,
                    k = c.iv && l > 0 && l <= 3,
                    ut = null;
                c.hasOwnProperty(ts) && c.mr != null && (ut = webfrontend.gui.alliance.AllianceUtil.getAllianceRoleTranslation(c.mr));
                a = webfrontend.phe.cnc.Util.getDateTimeString(new Date(c.ws), !1, !0);
                e === 0 && (vt = this.__zH(rt, k, at, ut), this.__zl.setValue(k ? this.tr(fo, l, b, a) : this.tr(ci, l, b, a)), this.__zm.setValue(vt), pt = this.__zG(rt, it, l, k, b), this.__zr.set({
                    source: pt
                }));
                this.__yH.add(this.__zF(it, at, l, b, a, k, ut, rt))
            }
            f.ew.length > 0 && (this.__zn.setValue(this.tr(so, this.__zf, f.ew.length)), this.__zn.show(), this.__yK.add(this.__yE));
            this.__zk.show()
        }
        if (f.cw != null && f.cw.length > 0) {
            for (this.__yI.removeAll(), o = 0; o < f.cw.length; o++) {
                var fi = f.cw[o].ns,
                    ei = f.cw[o].nc,
                    wt = f.cw[o].bt,
                    bt = f.cw[o].n,
                    l = f.cw[o].r,
                    it = f.cw[o].f,
                    oi = !!f.cw[o].ia,
                    a = webfrontend.phe.cnc.Util.getDateTimeString(new Date(f.cw[o].ws), !1, !0);
                this.__yI.add(this.__zI(it, bt, wt, l, fi, a, ei, oi))
            }
            this.__yI.getChildren().length > 0 && this.__yK.add(this.__yF)
        }
        if (f.mw != null && f.mw.length > 0) {
            for (this.__yJ.removeAll(), o = 0; o < f.mw.length; o++) {
                var si = f.mw[o].ons,
                    hi = f.mw[o].na,
                    wt = f.mw[o].bt,
                    bt = f.mw[o].n,
                    li = f.mw[o].or,
                    vi = f.mw[o].of,
                    yi = !!f.mw[o].ia,
                    pi = f.mw[o].onjson,
                    a = webfrontend.phe.cnc.Util.getDateTimeString(new Date(f.mw[o].ws), !1, !0);
                this.__yJ.add(this.__zJ(bt, hi, wt, a, si, li, vi, yi, pi))
            }
            this.__yJ.getChildren().length > 0 && this.__yK.add(this.__yG)
        }
        this.__zt.setVisibility(ClientLib.Data.MainData.GetInstance().get_Player().get_Id() == this.__zd ? r : t);
        this.__zs.setEnabled(ClientLib.Data.MainData.GetInstance().get_Player().get_Id() != this.__zd);
        this.__zu.setEnabled(ClientLib.Data.MainData.GetInstance().get_Player().get_Id() != this.__zd);
        ClientLib.Data.MainData.GetInstance().get_Player().get_Id() == this.__zd ? this.__zs.setToolTipText(this.tr(wr)) : this.__zs.setToolTipText(this.tr(ff));
        var dt = ClientLib.Data.MainData.GetInstance().get_Alliance(),
            gt = !1,
            v = n;
        ClientLib.Data.MainData.GetInstance().get_Player().get_Id() == this.__zd ? v = this.tr(bu) : dt.get_Exists() ? ClientLib.Data.MainData.GetInstance().get_Player().get_IsSubstituted() && webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SUBSTITUTIONALLOWALLYINVITES) || !ClientLib.Data.MainData.GetInstance().get_Player().get_IsSubstituted() && ClientLib.Data.MainData.GetInstance().get_Alliance().get_CanInvite() ? dt.HasMember(this.__zd) ? v = this.tr(pe) : (gt = !0, v = this.tr(ae, f.n)) : v = this.tr(cf) : v = this.tr(ss);
        this.__zg.setToolTip(new qx.ui.tooltip.ToolTip(v).set({
            width: 200,
            rich: !0
        }));
        this.__zg.setEnabled(gt);
        this.__zh.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(kf, f.n)).set({
            allowGrowX: !0,
            rich: !0
        }));
        this.__zh.setEnabled(!0)
    }
    if (ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer()) {
        var h = webfrontend.gui.layout.Loader.getInstance(),
            s = i,
            h = webfrontend.gui.layout.Loader.getInstance(),
            s = i;
        h.getElement(this.__yL, s, yt).setValue(this.tr(le, f.lr));
        f.np > 0 ? (h.getElement(this.__yL, s, w).setValue(this.tr(se, webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(f.np))), h.getElement(this.__yL, s, g).setValue(this.tr(hf, f.nr))) : (h.getElement(this.__yL, s, w).setValue(n), h.getElement(this.__yL, s, g).setValue(n));
        var p = 0,
            d = 0,
            nt = 0,
            tt = 0;
        if (f.sli != null && f.sli.length > 0)
            for (e = 0; e < f.sli.length; ++e) {
                p = p + f.sli[e].lv;
                switch (f.sli[e].lt) {
                    case ClientLib.Base.ESeasonLegacyType.ChallengeTop1Commander:
                    case ClientLib.Base.ESeasonLegacyType.ChallengeTop10Commander:
                    case ClientLib.Base.ESeasonLegacyType.ChallengeTop100Commander:
                    case ClientLib.Base.ESeasonLegacyType.ChallengeTop1Alliance:
                    case ClientLib.Base.ESeasonLegacyType.ChallengeTop2Alliance:
                    case ClientLib.Base.ESeasonLegacyType.ChallengeTop3Alliance:
                        d = d + f.sli[e].lv;
                        break;
                    case ClientLib.Base.ESeasonLegacyType.EndgameWon1st:
                    case ClientLib.Base.ESeasonLegacyType.EndgameWon2nd:
                    case ClientLib.Base.ESeasonLegacyType.EndgameWon3rd:
                    case ClientLib.Base.ESeasonLegacyType.EndgameWonOther:
                        nt = nt + f.sli[e].lv;
                        break;
                    case ClientLib.Base.ESeasonLegacyType.SeasonParticipant:
                        tt = tt + f.sli[e].lv
                }
            }
        if (ft = f.vp, p = Math.floor(p + ft * f.mv), this.__yN.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(p)), ni = this._createLegacyItem(this.tr(ar), this.tr(yf), !0), h.getElement(ni, s, y).setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(Math.floor(ft * f.mv))), tt > 0 && (ti = this._createLegacyItem(this.tr(nf), this.tr(yo), !0), h.getElement(ti, s, y).setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(tt))), nt > 0 && (et = this._createLegacyItem(this.tr(br), this.tr(uf), !1), h.getElement(et, s, y).setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(nt))), d > 0 && (ot = this._createLegacyItem(this.tr(uu), this.tr(ai), !1), h.getElement(ot, s, y).setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(d))), f.sli != null && f.sli.length > 0)
            for (e = 0; e < f.sli.length; ++e) switch (f.sli[e].lt) {
                case ClientLib.Base.ESeasonLegacyType.ChallengeTop1Commander:
                case ClientLib.Base.ESeasonLegacyType.ChallengeTop10Commander:
                case ClientLib.Base.ESeasonLegacyType.ChallengeTop100Commander:
                case ClientLib.Base.ESeasonLegacyType.ChallengeTop1Alliance:
                case ClientLib.Base.ESeasonLegacyType.ChallengeTop2Alliance:
                case ClientLib.Base.ESeasonLegacyType.ChallengeTop3Alliance:
                    h.getElement(ot, s, kt).add(this._createSubItem(f.sli[e].lt, f.sli[e].lv));
                    break;
                case ClientLib.Base.ESeasonLegacyType.EndgameWon1st:
                case ClientLib.Base.ESeasonLegacyType.EndgameWon2nd:
                case ClientLib.Base.ESeasonLegacyType.EndgameWon3rd:
                case ClientLib.Base.ESeasonLegacyType.EndgameWonOther:
                    h.getElement(et, s, kt).add(this._createSubItem(f.sli[e].lt, f.sli[e].lv))
            }
    }
    this.show()
}

function _createSubItem(t, r) {
    var e = webfrontend.gui.layout.Loader.getInstance(),
        o = i,
        f = e.getLayout(tr, f),
        u;
    e.getElement(f, o, yr).setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(r));
    u = n;
    switch (t) {
        case ClientLib.Base.ESeasonLegacyType.ChallengeTop1Commander:
            u = this.tr(oi);
            break;
        case ClientLib.Base.ESeasonLegacyType.ChallengeTop10Commander:
            u = this.tr(af);
            break;
        case ClientLib.Base.ESeasonLegacyType.ChallengeTop100Commander:
            u = this.tr(nr);
            break;
        case ClientLib.Base.ESeasonLegacyType.ChallengeTop1Alliance:
            u = this.tr(nu);
            break;
        case ClientLib.Base.ESeasonLegacyType.ChallengeTop2Alliance:
            u = this.tr(eu);
            break;
        case ClientLib.Base.ESeasonLegacyType.ChallengeTop3Alliance:
            u = this.tr(bo);
            break;
        case ClientLib.Base.ESeasonLegacyType.EndgameWon1st:
            u = this.tr(wo);
            break;
        case ClientLib.Base.ESeasonLegacyType.EndgameWon2nd:
            u = this.tr(ur);
            break;
        case ClientLib.Base.ESeasonLegacyType.EndgameWon3rd:
            u = this.tr(fe);
            break;
        case ClientLib.Base.ESeasonLegacyType.EndgameWonOther:
            u = this.tr(co)
    }
    return e.getElement(f, o, si).setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(u)), f
}

function _createLegacyItem(r, u, f) {
    var o = webfrontend.gui.layout.Loader.getInstance(),
        s = i,
        e = o.getLayout(ne, e),
        c, h;
    return this.__yM.add(e), o.getElement(e, s, ho).setValue(r), c = new qx.ui.tooltip.ToolTip(n).set({
        rich: !0
    }), c.setLabel(yi + u + ei), o.getElement(e, s, fs).setToolTip(c), f ? (o.getElement(e, s, ot).setVisibility(t), o.getElement(e, s, ii).setVisibility(t)) : (h = o.getElement(e, s, ot), h.addListener(he, function() {
        this.container.getVisibility() == pt ? (this.container.setVisibility(vu), h.setIcon(ef)) : (this.container.setVisibility(pt), h.setIcon(ge))
    }, {
        container: o.getElement(e, s, ii),
        btn: h
    })), e
}

function _onBaseSelect(n) {
    var t = this.__zb.getRowData(n.getRow());
    switch (n.getColumn()) {
        case 0:
            webfrontend.gui.info.BaseInfoWindow.getInstance().openWithBaseId(t.i);
            break;
        case 1:
            webfrontend.gui.UtilView.centerCoordinatesOnRegionViewWindow(t.x, t.y)
    }
}

function initVisibility anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_visibility !== undefined) {
        old = this.$$runtime_visibility;
    } else if (this.$$user_visibility !== undefined) {
        old = this.$$user_visibility;
    } else if (this.$$useinit_visibility) {
        old = this.$$init_visibility;
    }
    var computed;
    if (this.$$runtime_visibility !== undefined) {
        computed = this.$$runtime_visibility;
    } else if (this.$$user_visibility !== undefined) {
        computed = this.$$user_visibility;
    } else if (this.$$useinit_visibility) {
        computed = this.$$init_visibility;
    } else {
        computed = this.$$init_visibility;
        this.$$useinit_visibility = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyVisibility(computed, old, "visibility", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeVisibility')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeVisibility', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeVisibilityAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeVisibilityAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
        });
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}