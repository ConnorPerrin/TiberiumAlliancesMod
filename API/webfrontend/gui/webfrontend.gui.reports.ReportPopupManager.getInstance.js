function openPopup(n, t, i, r) {
    var f, e, u, o;
    if (n > 0) {
        if (f = (new Date).getTime(), this.__CB[n] == null) switch (t) {
            case ClientLib.Data.Reports.EPlayerReportType.CombatOffense:
            case ClientLib.Data.Reports.EPlayerReportType.CombatDefense:
            case ClientLib.Data.Reports.EPlayerReportType.NPCPlayerCombat:
                this.__CB[n] = {
                    wdgt: new webfrontend.gui.reports.CombatReportPopup(n, i, !0),
                    time: null
                };
                break;
            case ClientLib.Data.Reports.EPlayerReportType.Other:
                switch (r) {
                    case ClientLib.Data.Reports.EReportType.SatelliteCrash:
                    case ClientLib.Data.Reports.EReportType.SatelliteCrashControlHub:
                        this.__CB[n] = {
                            wdgt: new webfrontend.gui.reports.SatelliteCrashReportPopup(n, i, !0),
                            time: null
                        };
                        break;
                    case ClientLib.Data.Reports.EReportType.CenterHubDefeat:
                        this.__CB[n] = {
                            wdgt: new webfrontend.gui.reports.WorldWinReportPopup(n, i, !0),
                            time: null
                        }
                }
                break;
            default:
                this.__CB[n] = {
                    wdgt: new webfrontend.gui.reports.CombatReportPopup(n, i, !0),
                    time: null
                }
        }
        this.__CB[n].time = f;
        e = this.__CB;
        for (u in e) o = f - this.__CB[u].time, o > 6e4 && !this.__CB[u].wdgt._isActive() && (this.__CB[u].wdgt.destroy(), delete this.__CB[u]);
        this.__CB[n] == null || this.__CB[n].wdgt._isActive() ? this.__CB[n].wdgt.bringToFront() : this.__CB[n].wdgt.show()
    }
}

function openPopupWithData(n, t, i) {
    ClientLib.Data.MainData.GetInstance().get_Reports().AddReport(t, i);
    this.openPopup(n, !1)
}