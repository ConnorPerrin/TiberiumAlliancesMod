[object EReportProgressValueObject]
function doImageProgressWidgetColorKey(n) {
    n && n.setForeground(n.getProgressNormalized() > .9 ? webfrontend.gui.reports.ReportsUtil.DECO_GREEN : n.getProgressNormalized() > .34 ? webfrontend.gui.reports.ReportsUtil.DECO_YELLOW : webfrontend.gui.reports.ReportsUtil.DECO_RED)
}

function doImageProgressWidgetValue(n, t) {
    n && (webfrontend.gui.reports.ReportsUtil.doImageProgressWidgetColorKey(n.set({
        ProgressNormalized: t / 100
    })), n.getProgressUI().setVisibility(t <= 0 || t >= 100 ? wi : wt))
}

function doWidgetSource(n, t, i, r, u) {
    n && n.set({
        Source: webfrontend.gui.reports.ReportsUtil.getBuildingIcon(t, i, r, u)
    })
}

function doWidgetToolTipText(n, t, i, r, u) {
    n && n.set({
        toolTipText: webfrontend.gui.reports.ReportsUtil.getBuildingHealthBarToolTipText(i, t, u, r)
    })
}

function updateImageProgressWidget(n, t, i, r, u) {
    n && (webfrontend.gui.reports.ReportsUtil.doImageProgressWidgetValue(n, r), webfrontend.gui.reports.ReportsUtil.doWidgetSource(n, t, i, r, u), webfrontend.gui.reports.ReportsUtil.doWidgetToolTipText(n, t, i, r, u))
}

function updateReportProgressValue(n, t, i, r) {
    if (n && t) {
        var f = i ? t.get_AttackerFaction() : t.get_DefenderFaction(),
            e = !i && t.IsForgottenFortress(),
            u = null,
            o = webfrontend.gui.reports.ReportsUtil.getReportHpPercent(t, i, r);
        switch (r) {
            case webfrontend.gui.reports.ReportsUtil.EReportProgressValue.ERPV_CON_YARD:
                u = webfrontend.gui.reports.ReportsUtil.IconConstructionYard;
                break;
            case webfrontend.gui.reports.ReportsUtil.EReportProgressValue.ERPV_DEF_HQ:
                u = webfrontend.gui.reports.ReportsUtil.IconDefenseHQ;
                break;
            case webfrontend.gui.reports.ReportsUtil.EReportProgressValue.ERPV_DEF_FACILITY:
                u = webfrontend.gui.reports.ReportsUtil.IconDefenseFacility;
                break;
            case webfrontend.gui.reports.ReportsUtil.EReportProgressValue.ERPV_COM_CENTER:
                u = webfrontend.gui.reports.ReportsUtil.IconCommandCenter;
                break;
            case webfrontend.gui.reports.ReportsUtil.EReportProgressValue.ERPV_SUPPORT:
                u = t.get_DefenderSupportAir() >= 0 ? webfrontend.gui.reports.ReportsUtil.IconSupportAir : t.get_DefenderSupportArt() >= 0 ? webfrontend.gui.reports.ReportsUtil.IconSupportArt : webfrontend.gui.reports.ReportsUtil.IconSupportIon
        }
        webfrontend.gui.reports.ReportsUtil.updateImageProgressWidget(n, e, u, o, f)
    }
}

function getReportHpPercent(n, t, i) {
    var r = 0;
    if (n) switch (i) {
        case webfrontend.gui.reports.ReportsUtil.EReportProgressValue.ERPV_CON_YARD:
            r = t ? -1 : n.get_DefenderConYardPercent();
            break;
        case webfrontend.gui.reports.ReportsUtil.EReportProgressValue.ERPV_DEF_HQ:
            r = t ? -1 : n.get_DefenderDefHQPercent();
            break;
        case webfrontend.gui.reports.ReportsUtil.EReportProgressValue.ERPV_DEF_FACILITY:
            r = t ? -1 : n.get_DefenderDefFacilityPercent();
            break;
        case webfrontend.gui.reports.ReportsUtil.EReportProgressValue.ERPV_COM_CENTER:
            r = t ? -1 : n.get_DefenderCombatCenterPercent();
            break;
        case webfrontend.gui.reports.ReportsUtil.EReportProgressValue.ERPV_SUPPORT:
            r = t ? -1 : n.get_DefenderSupportAir() >= 0 ? n.get_DefenderSupportAir() : n.get_DefenderSupportArt() >= 0 ? n.get_DefenderSupportArt() : n.get_DefenderSupportIon()
    }
    return r
}

function getStatusText(n, t) {
    var i = o;
    switch (n) {
        case ClientLib.Data.Reports.EPlayerReportType.CombatOffense:
            i = webfrontend.gui.reports.ReportsUtil.getOffensiveStatusText(t);
            break;
        case ClientLib.Data.Reports.EPlayerReportType.CombatDefense:
        case ClientLib.Data.Reports.EPlayerReportType.NPCPlayerCombat:
            i = webfrontend.gui.reports.ReportsUtil.getDefensiveStatusText(t)
    }
    return i
}

function getOffensiveStatusText(t) {
    var e = n,
        c = n,
        s, h;
    switch (t) {
        case ClientLib.Data.Reports.ECombatResult.Draw:
            e = y;
            break;
        case ClientLib.Data.Reports.ECombatResult.CityDestroyed:
            e = nt;
            break;
        case ClientLib.Data.Reports.ECombatResult.CommandPostDestroyed:
            e = f;
            break;
        case ClientLib.Data.Reports.ECombatResult.DefenseDestroyed:
            e = f;
            break;
        case ClientLib.Data.Reports.ECombatResult.BaseBreakthrough:
            e = f;
            break;
        case ClientLib.Data.Reports.ECombatResult.OffenseDestroyed:
            e = d;
            break;
        case ClientLib.Data.Reports.ECombatResult.AttackerMoreRP:
            e = f;
            break;
        case ClientLib.Data.Reports.ECombatResult.DefenderMoreRP:
            e = u;
            break;
        default:
            e = n
    }
    if (e != n) {
        s = new qx.util.StringBuilder(1024);
        h = o;
        s.add(p);
        switch (ClientLib.Data.MainData.GetInstance().get_Player().get_Faction()) {
            case ClientLib.Base.EFactionType.GDIFaction:
                s.add(a);
                break;
            case ClientLib.Base.EFactionType.NODFaction:
                s.add(l)
        }
        s.add(g, e);
        h = s.get();
        s.clear();
        s.add(i, ClientLib.File.FileManager.GetInstance().GetPhysicalPath(h), r);
        c = s.get()
    }
    return c
}

function getBuildingIcon(n, t, i, r) {
    var u = ai,
        e = null,
        f = !0;
    switch (t) {
        case webfrontend.gui.reports.ReportsUtil.IconConstructionYard:
            u += n ? ii : ui;
            break;
        case webfrontend.gui.reports.ReportsUtil.IconDefenseHQ:
            u += vt;
            break;
        case webfrontend.gui.reports.ReportsUtil.IconDefenseFacility:
            u += it;
            break;
        case webfrontend.gui.reports.ReportsUtil.IconCommandCenter:
            u += di;
            break;
        case webfrontend.gui.reports.ReportsUtil.IconSupportAir:
            u += gt;
            break;
        case webfrontend.gui.reports.ReportsUtil.IconSupportArt:
            u += ot;
            break;
        case webfrontend.gui.reports.ReportsUtil.IconSupportIon:
            u += bt;
            break;
        default:
            f = !1
    }
    u += k;
    u += i >= 100 ? kt : i > 0 ? ft : i == 0 ? ni : pi;
    u += k;
    switch (r) {
        case ClientLib.Base.EFactionType.GDIFaction:
            u += a;
            break;
        case ClientLib.Base.EFactionType.NODFaction:
            u += l;
            break;
        case ClientLib.Base.EFactionType.FORFaction:
            u += ht;
            break;
        default:
            f = !1
    }
    return u += ut, f && (e = u), ClientLib.File.FileManager.GetInstance().GetPhysicalPath(e)
}

function generateRepairCostToolTipText(n) {
    var i = qx.core.Init.getApplication(),
        t = new qx.util.StringBuilder(1024);
    return t.add(i.tr(ct), bi, webfrontend.gui.reports.ReportsUtil.generateRepairCostsText(n.GetAttackerInfantryRepairCosts(), n.GetAttackerInfantryRepairCostsBeforeRewards(), ClientLib.Base.EResourceType.RepairChargeInf), webfrontend.gui.reports.ReportsUtil.generateRepairCostsText(n.GetAttackerVehicleRepairCosts(), n.GetAttackerVehicleRepairCostsBeforeRewards(), ClientLib.Base.EResourceType.RepairChargeVeh), webfrontend.gui.reports.ReportsUtil.generateRepairCostsText(n.GetAttackerAirRepairCosts(), n.GetAttackerAirRepairCostsBeforeRewards(), ClientLib.Base.EResourceType.RepairChargeAir), dt), t.get()
}

function generateRepairCostsText(n, u, f) {
    var a = webfrontend.theme.Color.colors[ci],
        v = webfrontend.theme.Color.colors[hi],
        y = qx.core.Init.getApplication(),
        c = new qx.util.StringBuilder(1024),
        o, l;
    if (n != null && n.hasOwnProperty(et) && n.c > 0) {
        o = n.d;
        l = u.d;
        c.add(li);
        switch (f) {
            case ClientLib.Base.EResourceType.RepairChargeInf:
                c.add(y.tr(fi));
                break;
            case ClientLib.Base.EResourceType.RepairChargeVeh:
                c.add(y.tr(lt));
                break;
            case ClientLib.Base.EResourceType.RepairChargeAir:
                c.add(y.tr(at))
        }
        c.add(rt);
        (o[f] > 0 || l[f] > o[f]) && (c.add(i + ClientLib.File.FileManager.GetInstance().GetPhysicalPath(pt) + r), c.add(l[f] > o[f] ? s + a + t + webfrontend.phe.cnc.Util.getTimespanString(o[f]).toString() + h + v + t + webfrontend.phe.cnc.Util.getTimespanString(l[f]).toString() + e : webfrontend.phe.cnc.Util.getTimespanString(o[f]).toString()));
        (o[ClientLib.Base.EResourceType.Tiberium] > 0 || l[ClientLib.Base.EResourceType.Tiberium] > o[ClientLib.Base.EResourceType.Tiberium]) && (c.add(i + ClientLib.File.FileManager.GetInstance().GetPhysicalPath(oi) + r), c.add(l[ClientLib.Base.EResourceType.Tiberium] > o[ClientLib.Base.EResourceType.Tiberium] ? s + a + t + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(o[ClientLib.Base.EResourceType.Tiberium]).toString() + h + v + t + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(l[ClientLib.Base.EResourceType.Tiberium]).toString() + e : webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(o[ClientLib.Base.EResourceType.Tiberium]).toString()));
        (o[ClientLib.Base.EResourceType.Crystal] > 0 || l[ClientLib.Base.EResourceType.Crystal] > o[ClientLib.Base.EResourceType.Crystal]) && (c.add(i + ClientLib.File.FileManager.GetInstance().GetPhysicalPath(ki) + r), c.add(l[ClientLib.Base.EResourceType.Crystal] > o[ClientLib.Base.EResourceType.Crystal] ? s + a + t + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(o[ClientLib.Base.EResourceType.Crystal]).toString() + h + v + t + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(l[ClientLib.Base.EResourceType.Crystal]).toString() + e : webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(o[ClientLib.Base.EResourceType.Crystal]).toString()));
        (o[ClientLib.Base.EResourceType.Power] > 0 || l[ClientLib.Base.EResourceType.Power] > o[ClientLib.Base.EResourceType.Power]) && (c.add(i + ClientLib.File.FileManager.GetInstance().GetPhysicalPath(ti) + r), c.add(l[ClientLib.Base.EResourceType.Power] > o[ClientLib.Base.EResourceType.Power] ? s + a + t + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(o[ClientLib.Base.EResourceType.Power]).toString() + h + v + t + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(l[ClientLib.Base.EResourceType.Power]).toString() + e : webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(o[ClientLib.Base.EResourceType.Power]).toString()));
        c.add(st)
    }
    return c.get()
}

function createBuildingStateInfo() {
    var n = new qx.ui.container.Composite(new qx.ui.layout.Canvas),
        t = new qx.ui.basic.Image(v),
        i = new qx.ui.basic.Image(v).set({
            width: 0,
            height: 5,
            scale: !0
        }),
        r = new qx.ui.basic.Image(webfrontend.gui.reports.ReportsUtil.HealthBarBgrImagePath).set({
            width: 64,
            height: 10,
            scale: !1
        });
    return n.add(t, {
        left: 0,
        top: 0
    }), n.add(r, {
        left: 8,
        top: 74
    }), n.add(i, {
        left: 10,
        top: 76
    }), {
        container: n,
        imgBuilding: t,
        imgHealthBar: i,
        imgHealthBarBgr: r
    }
}

function updateBuildingHealthBar(n, t, i, r, u) {
    var f = t / 100,
        e = Math.floor(n.imgHealthBarBgr.getWidth() * f);
    t > 0 && t < 1 ? t = 1 : t > 99 && t < 100 && (t = 100);
    t = Math.floor(t);
    n.imgHealthBar.setWidth(e);
    t >= 100 || t <= 0 ? (n.imgHealthBar.exclude(), n.imgHealthBarBgr.exclude()) : (n.imgHealthBar.show(), n.imgHealthBarBgr.show(), t > 90 ? n.imgHealthBar.setSource(webfrontend.gui.reports.ReportsUtil.GreenHealthBarImagePath) : t > 34 ? n.imgHealthBar.setSource(webfrontend.gui.reports.ReportsUtil.YellowHealthBarImagePath) : n.imgHealthBar.setSource(webfrontend.gui.reports.ReportsUtil.RedHealthBarImagePath));
    n.imgBuilding.setToolTipText(webfrontend.gui.reports.ReportsUtil.getBuildingHealthBarToolTipText(i, u, r, t))
}

function getBuildingHealthBarToolTipText(n, t, i, r) {
    var f = qx.core.Init.getApplication(),
        u = new qx.util.StringBuilder(1024);
    switch (n) {
        case webfrontend.gui.reports.ReportsUtil.IconConstructionYard:
            t ? u.add(ClientLib.Base.Tech.GetTechDisplayNameFromTechId(ClientLib.Base.ETech.FOR_Fortress_ConstructionYard)) : u.add(ClientLib.Base.Tech.GetProductionBuildingNameFromFaction(ClientLib.Base.ETechName.Construction_Yard, i));
            break;
        case webfrontend.gui.reports.ReportsUtil.IconDefenseHQ:
            u.add(ClientLib.Base.Tech.GetProductionBuildingNameFromFaction(ClientLib.Base.ETechName.Defense_HQ, i));
            break;
        case webfrontend.gui.reports.ReportsUtil.IconDefenseFacility:
            u.add(ClientLib.Base.Tech.GetProductionBuildingNameFromFaction(ClientLib.Base.ETechName.Defense_Facility, i));
            break;
        case webfrontend.gui.reports.ReportsUtil.IconCommandCenter:
            u.add(ClientLib.Base.Tech.GetProductionBuildingNameFromFaction(ClientLib.Base.ETechName.Command_Center, i));
            break;
        case webfrontend.gui.reports.ReportsUtil.IconSupportAir:
            u.add(ClientLib.Base.Tech.GetProductionBuildingNameFromFaction(ClientLib.Base.ETechName.Support_Air, i));
            break;
        case webfrontend.gui.reports.ReportsUtil.IconSupportArt:
            u.add(ClientLib.Base.Tech.GetProductionBuildingNameFromFaction(ClientLib.Base.ETechName.Support_Art, i));
            break;
        case webfrontend.gui.reports.ReportsUtil.IconSupportIon:
            u.add(ClientLib.Base.Tech.GetProductionBuildingNameFromFaction(ClientLib.Base.ETechName.Support_Ion, i))
    }
    return u.add(si), r >= 0 ? u.add(r > 0 && r < 1 ? 1 : r > 99 && r < 100 ? 99 : parseInt(r), yt) : u.add(f.tr(ri)), u.get()
}

function getDefensiveStatusText(t) {
    var e = n,
        c = n,
        s, h;
    switch (t) {
        case ClientLib.Data.Reports.ECombatResult.Draw:
            e = y;
            break;
        case ClientLib.Data.Reports.ECombatResult.CityDestroyed:
            e = d;
            break;
        case ClientLib.Data.Reports.ECombatResult.CommandPostDestroyed:
            e = u;
            break;
        case ClientLib.Data.Reports.ECombatResult.DefenseDestroyed:
            e = u;
            break;
        case ClientLib.Data.Reports.ECombatResult.BaseBreakthrough:
            e = u;
            break;
        case ClientLib.Data.Reports.ECombatResult.OffenseDestroyed:
            e = nt;
            break;
        case ClientLib.Data.Reports.ECombatResult.AttackerMoreRP:
            e = u;
            break;
        case ClientLib.Data.Reports.ECombatResult.DefenderMoreRP:
            e = f;
            break;
        default:
            e = n
    }
    if (e != n) {
        s = new qx.util.StringBuilder(1024);
        h = o;
        s.add(p);
        switch (ClientLib.Data.MainData.GetInstance().get_Player().get_Faction()) {
            case ClientLib.Base.EFactionType.GDIFaction:
                s.add(a);
                break;
            case ClientLib.Base.EFactionType.NODFaction:
                s.add(l)
        }
        s.add(g, e);
        h = s.get();
        s.clear();
        s.add(i, ClientLib.File.FileManager.GetInstance().GetPhysicalPath(h), r);
        c = s.get()
    }
    return c
}

function getSubjectText(n) {
    var i = qx.core.Init.getApplication(),
        t = o;
    switch (n.get_Type()) {
        case ClientLib.Data.Reports.EReportType.Combat:
        case ClientLib.Data.Reports.EReportType.NPCPlayerCombat:
            t = i.tr(ei, n.get_DefenderBaseName());
            break;
        case ClientLib.Data.Reports.EReportType.NPCRaid:
            t = i.tr(ClientLib.Data.Reports.CombatReport.GetNPCBaseNameFromType(parseInt(n.get_DefenderBaseName(), 10))) + (w + i.tr(b, n.get_DefenderBaseLevel()));
            break;
        case ClientLib.Data.Reports.EReportType.SatelliteCrash:
        case ClientLib.Data.Reports.EReportType.SatelliteCrashControlHub:
            t = i.tr(vi);
            break;
        case ClientLib.Data.Reports.EReportType.CenterHubDefeat:
            t = i.tr(yi);
            break;
        default:
            t = tt
    }
    return t
}

function getDefenderBaseName(n) {
    var r = n.get_DefenderBaseName(),
        i, t;
    return n.get_Type() == ClientLib.Data.Reports.EReportType.NPCRaid && (i = qx.core.Init.getApplication(), t = new qx.util.StringBuilder(1024), t.add(i.tr(ClientLib.Data.Reports.CombatReport.GetNPCBaseNameFromType(parseInt(n.get_DefenderBaseName(), 10)))), t.add(w, i.tr(b, n.get_DefenderBaseLevel())), r = t.get()), r
}

function checkShowPvpGhosttedTargetHint(n) {
    if (n && n.get_Type() == ClientLib.Data.Reports.EReportType.Combat && n.get_PlayerReportType() == ClientLib.Data.Reports.EPlayerReportType.CombatOffense && n.get_CombatResult() == ClientLib.Data.Reports.ECombatResult.CityDestroyed && ClientLib.Data.MainData.GetInstance().get_Player().get_Name() == n.get_ReportOwnerName()) {
        var t = ClientLib.Data.MainData.GetInstance().get_Time();
        if ((t.GetStepTime(t.GetServerStep()) - n.get_Time()) / 36e5 < 11) return webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.GhostedTargetPVP), !0
    }
    return !1
}