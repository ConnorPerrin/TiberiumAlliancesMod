function generateResourceHtmlText(n, t, i, r, e, o, s, h, c, a) {
    var v = new qx.util.StringBuilder(1024),
        p, tt, et, it, y, b, k, d, g, ut;
    if (n)
        for (p = h, p || (p = {
                valid: webfrontend.theme.Color.colors[l],
                invalid: webfrontend.theme.Color.colors[w]
            }), tt = i == !0 ? si : ni, o = o === !0, et = ClientLib.Res.ResMain.GetInstance(), it = 0, y = 0; y < n.length; y++)(b = n[y].hasOwnProperty(ht) ? n[y].c : n[y].Count, k = n[y].hasOwnProperty(ct) ? n[y].t : n[y].Type, !a && b <= 0 || o && k == ClientLib.Base.EResourceType.PlayerLevel) || (d = p.valid, !e && t != null && t.GetResourceCount(k) - b < 0 && (d = p.invalid), a && b < 0 && (d = p.invalid), g = et.GetResource(k), g && (ut = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(g.i), webfrontend.phe.cnc.res.Main.getInstance().cacheImage(ut), v.add(ai, tt, rt), !isNaN(s) && it >= 0 && v.add(ii, s, ri), v.add(ft, d, ui), v.add(u, ut, fi), v.add(vt), c === !0 ? v.add(webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(Math.floor(b))) : v.add(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(b, !0)), r === !0 && v.add(f, g.dn, f), v.add(nt), v.add(yt), v.add(pi, tt, kt), it++));
    return v
}

function hasEnoughResources(n, t) {
    var r = !1,
        i;
    if (n)
        for (i = 0; i < n.length; i++)
            if (n[i].t != ClientLib.Base.EResourceType.PlayerLevel && n[i].c > 0 && t != null && (r = t.GetResourceCount(n[i].t) - n[i].c >= 0, !r)) break;
    return r
}

function getBuildingRepairableErrorStateText(t, i) {
    var u = n,
        f = ClientLib.Base.Util.GetProductionBuildingFromUntiMoveType(t.get_UnitGameData_Obj().mt, t.get_UnitGameData_Obj().pt),
        e, r, s, h, o;
    return f != ClientLib.Base.ETechName.Invalid && (e = qx.core.Init.getApplication(), r = i.get_CityBuildingsData().GetUniqueBuildingByTechName(f), r != null && r.get_TechGameData_Obj() != null ? r.get_HitpointsPercent() < 1 && t.get_HitpointsPercent() - r.get_HitpointsPercent() > -.01 && (s = webfrontend.phe.cnc.gui.util.Numbers.calculateDisplayPercentValue(r.get_HitpointsPercent()), u = e.tr(wt, r.get_TechGameData_Obj().dn, s)) : (h = ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(f, i.get_CityFaction()), o = ClientLib.Res.ResMain.GetInstance().GetTech_Obj(h), o != null && (u = e.tr(hi, o.dn)))), u
}

function generateRequiredTechsForGameDataHtmlSBuilders(t, i) {
    var tt = new qx.util.StringBuilder(1024),
        v = new qx.util.StringBuilder(1024),
        f, p, e, o, r, s, h, k, nt;
    if (t != null) {
        var it = qx.core.Init.getApplication(),
            rt = webfrontend.theme.Color.colors[l],
            ut = webfrontend.theme.Color.colors[w],
            ft = ClientLib.Res.ResMain.GetInstance();
        for (f = 0; f < t.length; f++) {
            if (p = !1, e = t[f], i)
                for (o = 0; o < i.l.length; o++)
                    if (f == i.l[o]) {
                        p = !0;
                        break
                    } r = ft.GetTech_Obj(e.RequiredTechId);
            r && !ClientLib.Base.Tech.IsResearchTech(r.t) && (s = b + rt + g, p && (s = b + ut + g), h = n, r.ri && r.ri.length > 0 && (k = new qx.util.StringBuilder(1024), nt = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(webfrontend.phe.cnc.config.Config.getInstance().getImagePath(r.ri)), k.add(u, nt, vi), webfrontend.phe.cnc.res.Main.getInstance().cacheImage(nt), h = k.get()), tt.add(a, s, y, h, e.Level, c), v.add(a, s, y), v.add(h, d, r.dn, dt, it.tr(ei), d, e.Level, gt, c))
        }
    }
    return {
        shortReq: tt,
        longReq: v
    }
}

function updatePlacementProductionTexts(i, r) {
    var s, c, h, y, e, p, w, l, a, v;
    if (i) {
        if (s = new qx.util.StringBuilder(1024), i && i.hasOwnProperty(tt)) {
            for (s.add(lt), c = {}, h = 0; h < i.l.length; h++) c[i.l[h].ModifierTypeId] = i.l[h];
            for (y in c)(e = c[y], e.HideInUI || webfrontend.gui.UtilTech.isBonusTimeToCompleteModifierType(e.ModifierTypeId)) || (p = webfrontend.gui.UtilTech.getSpecialDispalyName(e.ModifierTypeId, e.DisplayName), w = n, e.IconPath && e.IconPath.length > 0 && (l = new qx.util.StringBuilder(1024), l.add(u, e.IconPath, ci), webfrontend.phe.cnc.res.Main.getInstance().cacheImage(e.IconPath), w = l.get()), a = it, e.TotalValue > 0 && e.IsPercent && (a = yi), v = n, e.IsPercent && (v = ut), s.add(o, a, webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(e.TotalValue), v, f, p, t));
            s.add(li)
        }
        r.setValue(s.get())
    }
}

function getSpecialDispalyName(n, t) {
    var i = qx.core.Init.getApplication();
    switch (n) {
        case ClientLib.Base.EModifierType.TiberiumProduction:
            return i.tr(ti);
        default:
            return t
    }
}

function generateIconHtmlString(t, i, r) {
    var e = n,
        f;
    return t && t.length > 0 && (f = new qx.util.StringBuilder(1024), i || (i = 28), r || (r = 28), f.add(u, t, at, i, ot, r, oi), webfrontend.phe.cnc.res.Main.getInstance().cacheImage(t), e = f.get()), e
}

function isRepairEfficiencyModifierType(n) {
    return n == ClientLib.Base.EModifierType.RepairEfficiencyBase || n == ClientLib.Base.EModifierType.RepairEfficiencyInf || n == ClientLib.Base.EModifierType.RepairEfficiencyVeh || n == ClientLib.Base.EModifierType.RepairEfficiencyAir
}

function isBonusTimeToCompleteModifierType(n) {
    return n == ClientLib.Base.EModifierType.CreditsBonusTimeToComplete || n == ClientLib.Base.EModifierType.CrystalBonusTimeToComplete || n == ClientLib.Base.EModifierType.PowerBonusTimeToComplete || n == ClientLib.Base.EModifierType.TiberiumBonusTimeToComplete
}

function createRepairEfficiencyBaseTableRow(u, f) {
    var s = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
    if (s && s.IsOwnBase()) {
        var c = qx.core.Init.getApplication(),
            l = s.get_CityBuildingsData().GetFullRepairTime(f),
            e = new qx.util.StringBuilder(1024);
        return e.add(o), f ? e.add(c.tr(h)) : e.add(i, c.tr(k), r), e.add(p), f || e.add(i), e.add(u.DisplayName, v, webfrontend.phe.cnc.Util.getTimespanString(l, !0)), f || e.add(r), e.add(bt), f || e.add(i), f || e.add(r), e.add(t), e.get()
    }
    return n
}

function createRepairEfficiencyOffenseTableRow(u, f) {
    var l = qx.core.Init.getApplication(),
        y = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity(),
        w = n,
        a, c;
    return y && y.IsOwnBase() && (a = -1, u.ModifierTypeId == ClientLib.Base.EModifierType.RepairEfficiencyInf ? a = y.get_CityUnitsData().GetRepairTimeFromEUnitGroup(ClientLib.Data.EUnitGroup.Infantry, f) : u.ModifierTypeId == ClientLib.Base.EModifierType.RepairEfficiencyVeh ? a = y.get_CityUnitsData().GetRepairTimeFromEUnitGroup(ClientLib.Data.EUnitGroup.Vehicle, f) : u.ModifierTypeId == ClientLib.Base.EModifierType.RepairEfficiencyAir && (a = y.get_CityUnitsData().GetRepairTimeFromEUnitGroup(ClientLib.Data.EUnitGroup.Aircraft, f)), c = new qx.util.StringBuilder(1024), a < 0 || a > 0 ? (c.add(o), f ? c.add(l.tr(h)) : c.add(i, l.tr(k), r), c.add(p), f || c.add(i), c.add(u.DisplayName, v, webfrontend.phe.cnc.Util.getTimespanString(a, !0)), f || c.add(r), c.add(t)) : f || (u.ModifierTypeId == ClientLib.Base.EModifierType.RepairEfficiencyInf ? c.add(s, l.tr(e, l.tr(et)), t) : u.ModifierTypeId == ClientLib.Base.EModifierType.RepairEfficiencyVeh ? c.add(s, l.tr(e, l.tr(pt)), t) : u.ModifierTypeId == ClientLib.Base.EModifierType.RepairEfficiencyAir && c.add(s, l.tr(e, l.tr(st)), t)), w = c.get()), w
}

function getPackageSize(n) {
    var t = null;
    return n.hasOwnProperty(ClientLib.Base.EModifierType.TiberiumPackageSize) ? t = n[ClientLib.Base.EModifierType.TiberiumPackageSize] : n.hasOwnProperty(ClientLib.Base.EModifierType.CrystalPackageSize) ? t = n[ClientLib.Base.EModifierType.CrystalPackageSize] : n.hasOwnProperty(ClientLib.Base.EModifierType.PowerPackageSize) ? t = n[ClientLib.Base.EModifierType.PowerPackageSize] : n.hasOwnProperty(ClientLib.Base.EModifierType.CreditsPackageSize) && (t = n[ClientLib.Base.EModifierType.CreditsPackageSize]), t
}

function hideDisplayDetails(n) {
    return n.ModifierTypeId == ClientLib.Base.EModifierType.TiberiumPackageSize || n.ModifierTypeId == ClientLib.Base.EModifierType.CrystalPackageSize || n.ModifierTypeId == ClientLib.Base.EModifierType.PowerPackageSize || n.ModifierTypeId == ClientLib.Base.EModifierType.CreditsPackageSize ? !0 : !1
}