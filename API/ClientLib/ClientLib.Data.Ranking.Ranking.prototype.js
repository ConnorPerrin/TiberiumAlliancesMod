function RequestCount(n, t, i) {
    this.WZEOMA = n;
    this.FGDDTX = t;
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("RankingGetCount", {
        view: this.WZEOMA,
        rankingType: this.FGDDTX,
        searchValue: i
    }, (new $I.JNOYHJ).TFDQYD(this, this.VKLEXD), null)
}

function OnRequestCount(n, t) {
    this.HJCVTM.QDGPPU(t != null ? t : 0)
}

function RequestData(n, t, i, r, u) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("RankingGetData", {
        firstIndex: n,
        lastIndex: t,
        view: this.WZEOMA,
        rankingType: this.FGDDTX,
        sortColumn: i,
        ascending: r == $I.EIQARB.Ascending,
        searchValue: u
    }, (new $I.JNOYHJ).TFDQYD(this, this.PMMIBN), null)
}

function OnRequestData(n, t) {
    var i = t != null ? t : null;
    this.BVRNYI.OTKBHB(i != null ? i.p != null ? i.p : i.a != null ? i.a : i.phof : null)
}

function RequestIndex(n, t, i, r) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("RankingGetIndexByValue", {
        view: this.WZEOMA,
        rankingType: this.FGDDTX,
        sortColumn: n,
        ascending: t == $I.EIQARB.Ascending,
        searchType: i,
        value: r
    }, (new $I.JNOYHJ).TFDQYD(this, this.WHIWYV), null)
}

function OnRequestIndex(n, t) {
    var i;
    t != null && (i = t);
    this.PXNRFM.QDGPPU(t != null ? t : -1)
}

function RequestShortData(n, t, i, r, u, f) {
    i == $I.RQRLZQ.Player ? ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("RankingGetData", {
        firstIndex: n,
        lastIndex: t,
        view: i,
        rankingType: r,
        sortColumn: u,
        ascending: f == $I.EIQARB.Ascending,
        searchValue: ""
    }, (new $I.JNOYHJ).TFDQYD(this, this.YZLNSZ), null) : ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("RankingGetData", {
        firstIndex: n,
        lastIndex: t,
        view: i,
        rankingType: r,
        sortColumn: u,
        ascending: f == $I.EIQARB.Ascending,
        searchValue: ""
    }, (new $I.JNOYHJ).TFDQYD(this, this.LZCASI), null)
}

function OnRequestShortPlayersData(n, t) {
    var i;
    t != null && (i = t);
    this.LHRTSM.OTKBHB(t != null ? t : -1)
}

function OnRequestShortAllianceData(n, t) {
    var i;
    t != null && (i = t);
    this.PNNTQA.OTKBHB(t != null ? t : -1)
}

function add_FireReceivedCount(n) {
    var t = {},
        i, r = this.HJCVTM,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.HJCVTM, t.$r = $I.TSJVQL.JXWJWI($I.VMWSOU, u, i, t), this.HJCVTM = t.a, t.$r); while (r != i)
}

function remove_FireReceivedCount(n) {
    var t = {},
        i, r = this.HJCVTM,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.HJCVTM, t.$r = $I.TSJVQL.JXWJWI($I.VMWSOU, u, i, t), this.HJCVTM = t.a, t.$r); while (r != i)
}

function add_FireReceivedData(n) {
    var t = {},
        i, r = this.BVRNYI,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.BVRNYI, t.$r = $I.TSJVQL.JXWJWI($I.GGZPXM, u, i, t), this.BVRNYI = t.a, t.$r); while (r != i)
}

function remove_FireReceivedData(n) {
    var t = {},
        i, r = this.BVRNYI,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.BVRNYI, t.$r = $I.TSJVQL.JXWJWI($I.GGZPXM, u, i, t), this.BVRNYI = t.a, t.$r); while (r != i)
}

function add_FireReceivedIndex(n) {
    var t = {},
        i, r = this.PXNRFM,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.PXNRFM, t.$r = $I.TSJVQL.JXWJWI($I.VKUMHR, u, i, t), this.PXNRFM = t.a, t.$r); while (r != i)
}

function remove_FireReceivedIndex(n) {
    var t = {},
        i, r = this.PXNRFM,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.PXNRFM, t.$r = $I.TSJVQL.JXWJWI($I.VKUMHR, u, i, t), this.PXNRFM = t.a, t.$r); while (r != i)
}

function add_FireReceivedPlayersData(n) {
    var t = {},
        i, r = this.LHRTSM,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.LHRTSM, t.$r = $I.TSJVQL.JXWJWI($I.SMLFSO, u, i, t), this.LHRTSM = t.a, t.$r); while (r != i)
}

function remove_FireReceivedPlayersData(n) {
    var t = {},
        i, r = this.LHRTSM,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.LHRTSM, t.$r = $I.TSJVQL.JXWJWI($I.SMLFSO, u, i, t), this.LHRTSM = t.a, t.$r); while (r != i)
}

function add_FireReceivedAllianceData(n) {
    var t = {},
        i, r = this.PNNTQA,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.PNNTQA, t.$r = $I.TSJVQL.JXWJWI($I.WBSFWO, u, i, t), this.PNNTQA = t.a, t.$r); while (r != i)
}

function remove_FireReceivedAllianceData(n) {
    var t = {},
        i, r = this.PNNTQA,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.PNNTQA, t.$r = $I.TSJVQL.JXWJWI($I.WBSFWO, u, i, t), this.PNNTQA = t.a, t.$r); while (r != i)
}