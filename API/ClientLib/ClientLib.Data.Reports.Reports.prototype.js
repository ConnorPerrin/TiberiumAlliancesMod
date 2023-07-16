function Init() {
    this.XZHQPA = (new $I.UDBZSB).SLPWTI()
}

function AddReport(n, t) {
    var r = n,
        u = t,
        i;
    if (!this.XZHQPA.XOHVCR(r.i)) {
        i = null;
        switch (r.tp) {
            case 1:
                i = (new $I.JZUBFA).CXNXKP(r);
                break;
            case 2:
                i = (new $I.JZUBFA).CXNXKP(r);
                break;
            case 3:
            case 6:
                i = (new $I.IDANUP).CXNXKP(r);
                break;
            case 4:
                i = (new $I.SXNNPA).CXNXKP(r);
                break;
            case 5:
                i = (new $I.JZUBFA).CXNXKP(r);
                break;
            default:
                i = (new $I.DYYQWM).CXNXKP(r)
        }
        i.WYFWJS(u);
        this.UBUNTS != null && this.UBUNTS.VSOIYR(i)
    }
}

function RequestReportHeaderDataAll(n, t, i, r, u) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("GetReportHeaderAll", {
        type: n,
        skip: t,
        take: i,
        sort: r,
        ascending: u
    }, (new $I.JNOYHJ).TFDQYD(this, this.UMSZAV), i)
}

function RequestReportHeaderDataBase(n, t, i, r, u, f) {
    var e = (new $I.KQWPUF).NKLLIC(r, t);
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("GetReportHeaderBase", {
        type: t,
        baseId: n,
        skip: i,
        take: r,
        sort: u,
        ascending: f
    }, (new $I.JNOYHJ).TFDQYD(this, this.UQFUIW), e)
}

function RequestReportData(n) {
    this.XZHQPA.XOHVCR(n) ? this.XZHQPA.d[n].PIOHEL() ? this.UBUNTS != null && this.UBUNTS.VSOIYR(this.XZHQPA.d[n]) : ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("GetReportData", {
        playerReportId: n
    }, (new $I.JNOYHJ).TFDQYD(this, this.YYIRXH), null) : ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("GetReportDataAndHeader", {
        playerReportId: n
    }, (new $I.JNOYHJ).TFDQYD(this, this.OZHGSV), null)
}

function DeleteReports(n, t, i) {
    var r = (new $I.FMWWKL).CSVMOS(n, t, i);
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("ReportBulkDelete", {
        ids: n,
        type: t,
        selectAll: i
    }, (new $I.JNOYHJ).TFDQYD(this, this.OQAPRP), r)
}

function MarkReportsAsRead(n, t, i) {
    var r = (new $I.FMWWKL).CSVMOS(n, t, i);
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("ReportMarkAsRead", {
        ids: n,
        type: t,
        selectAll: i
    }, (new $I.JNOYHJ).TFDQYD(this, this.AYOIZS), r)
}

function MarkReportsAsUnread(n, t, i) {
    var r = (new $I.FMWWKL).CSVMOS(n, t, i);
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("ReportMarkAsUnread", {
        ids: n,
        type: t,
        selectAll: i
    }, (new $I.JNOYHJ).TFDQYD(this, this.XYRDLO), r)
}

function add_ReportsDelivered(n) {
    var t = {},
        i, r = this.SUDUAZ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.SUDUAZ, t.$r = $I.TSJVQL.JXWJWI($I.GIPDDA, u, i, t), this.SUDUAZ = t.a, t.$r); while (r != i)
}

function remove_ReportsDelivered(n) {
    var t = {},
        i, r = this.SUDUAZ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.SUDUAZ, t.$r = $I.TSJVQL.JXWJWI($I.GIPDDA, u, i, t), this.SUDUAZ = t.a, t.$r); while (r != i)
}

function add_BaseReportsDelivered(n) {
    var t = {},
        i, r = this.NTNNVX,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.NTNNVX, t.$r = $I.TSJVQL.JXWJWI($I.GJUDUV, u, i, t), this.NTNNVX = t.a, t.$r); while (r != i)
}

function remove_BaseReportsDelivered(n) {
    var t = {},
        i, r = this.NTNNVX,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.NTNNVX, t.$r = $I.TSJVQL.JXWJWI($I.GJUDUV, u, i, t), this.NTNNVX = t.a, t.$r); while (r != i)
}

function add_ReportDelivered(n) {
    var t = {},
        i, r = this.UBUNTS,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.UBUNTS, t.$r = $I.TSJVQL.JXWJWI($I.QRHQSQ, u, i, t), this.UBUNTS = t.a, t.$r); while (r != i)
}

function remove_ReportDelivered(n) {
    var t = {},
        i, r = this.UBUNTS,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.UBUNTS, t.$r = $I.TSJVQL.JXWJWI($I.QRHQSQ, u, i, t), this.UBUNTS = t.a, t.$r); while (r != i)
}

function add_ReportsUpdateRequired(n) {
    var t = {},
        i, r = this.LHCICG,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.LHCICG, t.$r = $I.TSJVQL.JXWJWI($I.WDNUTV, u, i, t), this.LHCICG = t.a, t.$r); while (r != i)
}

function remove_ReportsUpdateRequired(n) {
    var t = {},
        i, r = this.LHCICG,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.LHCICG, t.$r = $I.TSJVQL.JXWJWI($I.WDNUTV, u, i, t), this.LHCICG = t.a, t.$r); while (r != i)
}

function add_TotalUnreadCountUpdated(n) {
    var t = {},
        i, r = this.BIRREJ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.BIRREJ, t.$r = $I.TSJVQL.JXWJWI($I.GQREHB, u, i, t), this.BIRREJ = t.a, t.$r); while (r != i)
}

function remove_TotalUnreadCountUpdated(n) {
    var t = {},
        i, r = this.BIRREJ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.BIRREJ, t.$r = $I.TSJVQL.JXWJWI($I.GQREHB, u, i, t), this.BIRREJ = t.a, t.$r); while (r != i)
}