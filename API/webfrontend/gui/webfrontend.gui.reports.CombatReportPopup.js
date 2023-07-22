webfront prototypeend.gui.reports.CombatReportPopup[15752 - 0]
function getCombatResultString(n, t) {
    var r = null,
        i = qx.core.Init.getApplication();
    switch (n) {
        case ClientLib.Data.Reports.ECombatResult.Draw:
            r = i.tr(nu);
            break;
        case ClientLib.Data.Reports.ECombatResult.CityDestroyed:
            r = t ? i.tr(fi) : i.tr(ni);
            break;
        case ClientLib.Data.Reports.ECombatResult.CommandPostDestroyed:
        case ClientLib.Data.Reports.ECombatResult.DefenseDestroyed:
            r = t ? i.tr(vo) : i.tr(su);
            break;
        case ClientLib.Data.Reports.ECombatResult.BaseBreakthrough:
            r = t ? i.tr(g) : i.tr(rt);
            break;
        case ClientLib.Data.Reports.ECombatResult.OffenseDestroyed:
            r = t ? i.tr(ni) : i.tr(fi);
            break;
        case ClientLib.Data.Reports.ECombatResult.AttackerMoreRP:
            r = t ? i.tr(g) : i.tr(rt);
            break;
        case ClientLib.Data.Reports.ECombatResult.DefenderMoreRP:
            r = t ? i.tr(rt) : i.tr(g)
    }
    return r
}

function getLootResourceString(n, t, r, u) {
    return r = r || webfrontend.theme.Color.colors[b], u = u || webfrontend.theme.Color.colors[nt], n == t || t == -1 ? webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(n).toString() : e + r + i + webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(n).toString() + o + u + kt + webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(t).toString() + ui
}