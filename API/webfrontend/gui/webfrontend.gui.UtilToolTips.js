function updateResourceInfo(n, t, i, u, e, o, s, h, c) {
    var y, l;
    if (n) {
        var b = ClientLib.Data.MainData.GetInstance().get_Time(),
            a = Math.floor(t.GetResourceCount(i)),
            p = Math.floor(t.GetResourceMaxStorage(i)),
            w = a / p,
            v = f;
        p > 0 && (w >= 1 ? v = r : w >= .75 && (v = bt));
        y = 0;
        y = h ? webfrontend.phe.cnc.Util.getTimespanString(b.GetTimeSpan(a)) : webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(a);
        l = n.getToolTip();
        l && l.isVisible() && l.setLabel(webfrontend.gui.UtilToolTips.createResourceInfoToolTip(t, i, u, e, o, s, h, c));
        n.setTextColor(v);
        n.setValue(y.toString())
    }
}

function createResourceInfoToolTip(l, d, it, ft, st, lt, vt, pt) {
    var dt = qx.core.Init.getApplication(),
        ti = ClientLib.Data.MainData.GetInstance().get_Time(),
        hr = ti.GetServerStep(),
        fi = Math.floor(l.GetResourceCount(d)),
        ii = Math.floor(l.GetResourceMaxStorage(d)),
        nr = fi / ii,
        si = f,
        ei, wi, ki, kt, gt, ui, ri, or;
    ii > 0 && (nr >= 1 ? si = r : nr >= .75 && (si = bt));
    var ur = l.GetPOIBonusFromResourceType(d, !0),
        cr = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(ur),
        ci = 0,
        li = 0;
    vt ? (ci = webfrontend.phe.cnc.Util.getTimespanString(ti.GetTimeSpan(ii)), li = webfrontend.phe.cnc.Util.getTimespanString(ti.GetTimeSpan(fi))) : (ci = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(ii), li = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(fi));
    var ai = 0,
        yi = 0,
        pi = null,
        fr = ti.GetTimeSpan(l.GetResourceStorageFullStep(d));
    fr > 0 && (pi = webfrontend.phe.cnc.Util.getDateTimeString(ti.GetJSStepTime(fr)));
    ei = null;
    wi = l.get_MoveCooldownEndStep();
    wi - hr > 0 && ClientLib.Base.Resource.IsResourceProductionType(d) && (ei = webfrontend.phe.cnc.Util.getDateTimeString(ti.GetJSStepTime(wi)));
    d == ClientLib.Base.EResourceType.Gold ? (ki = l.get_CityCreditsProduction(), ai = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(Math.floor(ClientLib.Base.Resource.GetResourceGrowPerHour(ki, !1))), lt && (yi = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(Math.floor(ClientLib.Base.Resource.GetResourceBonusGrowPerHour(ki))))) : (ai = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(Math.floor(l.GetResourceGrowPerHour(d, !1, !1))), lt && (yi = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(Math.floor(l.GetResourceBonusGrowPerHour(d)))));
    var lr = webfrontend.theme.Color.colors[si],
        ar = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(st),
        gi = 230,
        oi = 150;
    if (ClientLib.Base.Resource.IsResourceProductionType(d) && (gi = 320, oi = 190), kt = new qx.util.StringBuilder(1024), gt = null, ClientLib.Base.Resource.IsResourceTypeOffenseRepairCharge(d) ? (gt = ClientLib.Base.ItemCategories.GetActiveItemsByCategory(ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity), gt.l.length == 0 ? kt.add(ct, gi, s) : kt.add(c)) : kt.add(ct, gi, s), webfrontend.phe.cnc.Util.buildStringHtmlDirection(di + ClientLib.File.FileManager.GetInstance().GetPhysicalPath(webfrontend.gui.missions.MissionsBar.urls.taskdone_tt) + hi, yt), kt.add(a, ar, h), kt.add(webfrontend.phe.cnc.Util.buildStringHtmlDirection(v + lr + i + li + at + (ii > 0 ? ni + ci : nu), yt)), kt.add(ht, it, n), lt === !0 && kt.add(p, oi, s, dt.tr(sr), o, webfrontend.phe.cnc.Util.buildStringHtmlDirection(yi + dt.tr(e)), n), pt != !0 && kt.add(p, oi, s, dt.tr(tr), o, ai, dt.tr(e), n), ur > 0 && (l.get_hasRecovery() ? kt.add(t, dt.tr(ir), n) : kt.add(p, oi, s, dt.tr(fu), o, cr, dt.tr(e), n)), ei != null && kt.add(ru, webfrontend.theme.Color.colors[r], bi, dt.tr(rr), wt, ei, n), pi != null && kt.add(vi, dt.tr(b), wt, pi, n), ii > 0 && fi >= ii && kt.add(yr, webfrontend.theme.Color.colors[r], uu, dt.tr(ut), n), ClientLib.Base.Resource.IsResourceTypeOffenseRepairCharge(d) && gt.l.length > 0) {
        for (gt.l.sort(function(n, t) {
                return n.EndStep < t.EndStep ? -1 : 1
            }), kt.add(u, dt.tr(k), n), kt.add(t), ui = 0, ri = 0; ri < gt.l.length; ri++) {
            if (ui > 5) break;
            var vr = gt.l[ri].Item,
                pr = webfrontend.gui.Util.generateItemInfos(vr),
                wr = pr.dn,
                er = et;
            ClientLib.Vis.VisMain.GetInstance().get_ShowDebugInformation() && (er = g + gt.l[ri].Id + nt);
            or = webfrontend.phe.cnc.Util.getDateTimeString(ti.GetJSStepTime(gt.l[ri].EndStep));
            kt.add(ot, wr, er, w, dt.tr(rt, or), n);
            ui++
        }
        gt.l.length - ui > 0 && kt.add(y, dt.tr(tt, gt.l.length - ui), n);
        kt.add(n)
    }
    return kt.add(u, ft, n), kt.add(n), kt.get()
}

function createCommandPointToolTip() {
    var s = qx.core.Init.getApplication(),
        lt = ClientLib.Data.MainData.GetInstance().get_Time(),
        fi = lt.GetServerStep(),
        ct = ClientLib.Data.MainData.GetInstance().get_Player(),
        at = ct.GetCommandPointMaxStorage(),
        gt = ct.GetCommandPointCount(),
        ei = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(gt, !0),
        oi = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(at, !0),
        hi = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(ct.GetCommandPointsGrowPerHour(), !0),
        ni = null,
        wt = Math.max(0, ct.PredictNextCommandPointStep() - fi),
        vt, bt, dt, ti, o, p, yt, ht, ui;
    if (wt > 0 && (ni = webfrontend.phe.cnc.Util.getTimespanString(lt.GetTimeSpan(wt), !0)), vt = null, bt = lt.GetTimeSpan(ct.PredictCommandPointStepAtValue(at)), bt > 0 && (vt = webfrontend.phe.cnc.Util.getDateTimeString(lt.GetJSStepTime(bt))), dt = or, ct.get_Faction() == ClientLib.Base.EFactionType.NODFaction && (dt = pr), ti = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(dt + br), o = new qx.util.StringBuilder(1024), o.add(c), o.add(a, ti, h), o.add(v, webfrontend.theme.Color.colors[f], i, ei, kt, oi, ft, s.tr(ci), n), o.add(t, s.tr(d), l, hi, s.tr(e), n), wt > 0 && (o.add(it, s.tr(si, ni), n), vt != null && o.add(t, s.tr(b), l, vt, n)), at > 0 && gt >= at && o.add(st, webfrontend.theme.Color.colors[r], i, s.tr(ut), pt), p = ClientLib.Base.ItemCategories.GetActiveItemsByCategory(ClientLib.Base.EItemCategory.CommandPointCapacityBuff), p.l.length > 0) {
        for (p.l.sort(function(n, t) {
                return n.EndStep < t.EndStep ? -1 : 1
            }), o.add(u, s.tr(k), n), o.add(t), yt = 0, ht = 0; ht < p.l.length; ht++) {
            if (ht > 5) break;
            var li = p.l[ht].Item,
                ai = webfrontend.gui.Util.generateItemInfos(li),
                vi = ai.dn,
                ii = et;
            ClientLib.Vis.VisMain.GetInstance().get_ShowDebugInformation() && (ii = g + p.l[ht].Id + nt);
            ui = webfrontend.phe.cnc.Util.getDateTimeString(lt.GetJSStepTime(p.l[ht].EndStep));
            o.add(ot, vi, ii, w, s.tr(rt, ui), n);
            yt++
        }
        p.l.length - yt > 0 && o.add(y, s.tr(tt, p.l.length - yt), n);
        o.add(n)
    }
    return o.add(u, s.tr(ri), n), o.add(n), o.get()
}

function createSupplyPointToolTip() {
    var o = qx.core.Init.getApplication(),
        y = ClientLib.Data.MainData.GetInstance().get_Time(),
        ct = y.GetServerStep(),
        s = ClientLib.Data.MainData.GetInstance().get_Player(),
        p = s.GetSupplyPointMaxStorage(),
        tt = s.GetSupplyPointCount(),
        at = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(tt, !0),
        vt = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(p, !0),
        rt = null,
        k = Math.max(0, s.PredictNextSupplyPointStep() - ct),
        w, g, et, e, ot, nt, ht;
    return k > 0 && (rt = webfrontend.phe.cnc.Util.getTimespanString(y.GetTimeSpan(k), !0)), w = null, g = y.GetTimeSpan(s.PredictSupplyPointStepAtValue(p)), g > 0 && (w = webfrontend.phe.cnc.Util.getDateTimeString(y.GetJSStepTime(g))), et = ClientLib.Res.ResMain.GetInstance().GetResourceIconPath(ClientLib.Base.EResourceType.SupplyPoints), e = new qx.util.StringBuilder(1024), e.add(c), e.add(a, et, h), e.add(v, webfrontend.theme.Color.colors[f], i, at, kt, vt, ft, o.tr(wr), n), ot = webfrontend.phe.cnc.gui.util.Text.getSupplyGlobalProductionText(s.GetSupplyPointsGrowPerHour(), s.GetSupplyPointsGrowPerDay()), e.add(t, o.tr(d), l, ot), k > 0 && (e.add(it, o.tr(vr, rt), n), w != null && e.add(t, o.tr(b), l, w, n)), s.get_SupplyPointMultiplierActive() && e.add(wi, o.tr(er), oi), p > 0 && tt >= p && e.add(st, webfrontend.theme.Color.colors[r], i, o.tr(ut), pt), nt = s.get_NextTitle(), nt != null && (ht = nt.sps, e.add(it, o.tr(lt, ht), n)), e.add(u, o.tr(li), n), e.add(n), e.get()
}

function createCreditsToolTip() {
    var u = qx.core.Init.getApplication(),
        s = ClientLib.Data.MainData.GetInstance().get_Player(),
        c = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(Math.floor(s.GetCreditsCount(), !0)),
        l = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(Math.floor(s.GetCreditsGrowth(), !0)),
        a = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(ClientLib.Base.Resource.GetResourceBonusGrowPerHour(s.get_Credits()), !0),
        y = webfrontend.theme.Color.colors[f],
        p = ClientLib.Res.ResMain.GetInstance().GetResourceIconPath(ClientLib.Base.EResourceType.Gold),
        r = new qx.util.StringBuilder(1024);
    return r.add(t), r.add(iu, p, h), r.add(v, y, i, c, at), r.add(ht, u.tr(lr), n), r.add(vt, u.tr(ti), o, a, u.tr(e), n), r.add(vt, u.tr(d), o, l, u.tr(e), n), r.add(dt, u.tr(dr), n), r.add(n), r.get()
}

function createPlayerInfoToolTip() {
    var r = qx.core.Init.getApplication(),
        u = ClientLib.Data.MainData.GetInstance().get_Player(),
        f = u.get_NextTitle(),
        e = u.get_Level(),
        o = u.get_TitleIcon(),
        s = u.get_Title(),
        h = u.get_ScorePoints(),
        i = new qx.util.StringBuilder(1024);
    if (i.add(ou), i.add(ai, o, eu, s, kr, e, gt), i.add(t, r.tr(ei, webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(h)), ki), f != null) {
        var c = f.dn,
            l = f.r,
            a = f.sps;
        i.add(t, r.tr(yi, c, e + 1), n);
        i.add(t, r.tr(hr, webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(l)), n);
        i.add(t, r.tr(lt, a), n)
    } else i.add(t, r.tr(ui), n);
    return i.add(ii, r.tr(cr), n), i.add(n), i.get()
}

function createOffensRepairPointsDescription() {
    var u = qx.core.Init.getApplication(),
        r = ClientLib.Data.MainData.GetInstance().get_Player().get_Faction(),
        f = ClientLib.Base.Tech.GetProductionBuildingNameFromFaction(ClientLib.Base.ETechName.Barracks, r),
        e = ClientLib.Base.Tech.GetProductionBuildingNameFromFaction(ClientLib.Base.ETechName.Factory, r),
        o = ClientLib.Base.Tech.GetProductionBuildingNameFromFaction(ClientLib.Base.ETechName.Airport, r),
        s = ClientLib.Base.Tech.GetProductionBuildingNameFromFaction(ClientLib.Base.ETechName.Command_Center, r),
        h = u.tr(tu, f, e, o, s),
        i = new qx.util.StringBuilder(1024);
    return i.add(t), i.add(fr, u.tr(ur), nr), i.add(y, h, n), i.add(n), i.get()
}

function createPackageStorageToolTip() {
    var s = qx.core.Init.getApplication(),
        b = ClientLib.Data.MainData.GetInstance().get_Time(),
        d = ClientLib.Data.MainData.GetInstance().get_Player(),
        it = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(pi),
        r = new qx.util.StringBuilder(1024),
        e, l, o, p;
    if (r.add(c), r.add(a, it, h), r.add(gr, webfrontend.theme.Color.colors[f], i, s.tr(gi), ft, d.get_PackageCount(), n), e = ClientLib.Base.ItemCategories.GetActiveItemsByCategory(ClientLib.Base.EItemCategory.BonusPackageStorage), e.l.length > 0) {
        for (e.l.sort(function(n, t) {
                return n.EndStep < t.EndStep ? -1 : 1
            }), r.add(ar, s.tr(k), n), r.add(t), l = 0, o = 0; o < e.l.length; o++) {
            if (o > 5) break;
            var ut = e.l[o].Item,
                st = webfrontend.gui.Util.generateItemInfos(ut),
                ht = st.dn,
                v = et;
            ClientLib.Vis.VisMain.GetInstance().get_ShowDebugInformation() && (v = g + e.l[o].Id + nt);
            p = webfrontend.phe.cnc.Util.getDateTimeString(b.GetJSStepTime(e.l[o].EndStep));
            r.add(ot, ht, v, w, s.tr(rt, p), n);
            l++
        }
        e.l.length - l > 0 && r.add(y, s.tr(tt, e.l.length - l), n);
        r.add(n)
    }
    return r.add(u, s.tr(fi), n), r.add(n), r.get()
}