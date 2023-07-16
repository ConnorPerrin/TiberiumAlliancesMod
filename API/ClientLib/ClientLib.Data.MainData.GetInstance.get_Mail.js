function Init() {}

function StartGetMail(n) {
    var t = this.IURHES(n);
    t != null && t.Text != null ? this.EDIYBO != null && this.EDIYBO.ODDOLV(t.Id, t.Text) : ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("IGMGetMsg", {
        mailReceiverId: n
    }, (new $I.JNOYHJ).TFDQYD(this, this.FFVJJY), n)
}

function SetMail(n, t) {
    var i = this.IURHES(n),
        r = t;
    i.To = r.t;
    i.ToIds = r.ti;
    i.ToAllianceIds = r.tai;
    i.ToAllianceNames = r.ta;
    i != null && (i.Text = $I.XOJOCY.TNSBEE(r.m));
    this.EDIYBO != null && i != null && this.EDIYBO.ODDOLV(i.Id, i)
}

function StartGetMailHeaders() {
    var n = $I.KRSVNP.OKNHXZ().JEFJLO();
    this.TVDGLJ == null ? ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("IGMGetFolders", {}, (new $I.JNOYHJ).TFDQYD(this, this.CRZRXD), null) : (ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("IGMGetMsgCount", {
        folderId: this.TVDGLJ.d[$I.PTSMOV.Inbox].i,
        sFilter: "",
        bOnlyNewMail: !1
    }, (new $I.JNOYHJ).TFDQYD(this, this.KECMJF), $I.PTSMOV.Inbox), ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("IGMGetMsgCount", {
        folderId: this.TVDGLJ.d[$I.PTSMOV.Sent].i,
        sFilter: "",
        bOnlyNewMail: !1
    }, (new $I.JNOYHJ).TFDQYD(this, this.KECMJF), $I.PTSMOV.Sent))
}

function CheckInitialized() {
    return this.TVDGLJ != null ? !0 : (this.FWRSJM(), !1)
}

function PrintFolder(n) {
    console && console.log("mail folders: " + n + (n != null ? ", " + n[0].i + ", " + n[1].i : ""))
}

function SetFolder(n, t) {
    var i;
    t != null && t.length >= 2 && (i = t, i[0].i > 0 && i[1].i > 0 && (this.TVDGLJ = (new $I.UDBZSB).SLPWTI(), this.TVDGLJ.UHNVSA($I.PTSMOV.Inbox, i[0]), this.TVDGLJ.UHNVSA($I.PTSMOV.Sent, i[1]), this.FWRSJM()))
}

function SetMailCount(n, t) {
    this.GCRCBE.d[n].GOBOQN(t);
    this.ZNYOIF(n, this.SHKMUM, this.TKKWOG)
}

function SetFilter(n) {
    this.SHKMUM = n
}

function GetFilter() {
    return this.SHKMUM
}

function SetOnlyNewMail(n) {
    this.TKKWOG = n
}

function GetOnlyNewMail() {
    return this.TKKWOG
}

function GetMailHeaders(n, t, i) {
    var r, u;
    this.ARBDUQ() && this.TVDGLJ.XOHVCR(n) && this.TVDGLJ.d[n] != null && (r = this.GCRCBE.d[n], u = this.TVDGLJ.d[n], ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("IGMGetMsgHeader", {
        folder: u.i,
        skip: r.iCurPage * r.iCurMailsOnPage,
        take: r.iCurMailsOnPage,
        sortColumn: r.eMailSort,
        ascending: r.bSortAscending,
        sFilter: t,
        bOnlyNewMail: i
    }, (new $I.JNOYHJ).TFDQYD(this, this.JOHVDL), n))
}

function SetBoxMail(n, t) {
    this.GCRCBE.d[n].OLZZVE(t);
    this.YSERYR != null && this.YSERYR.KQCFDF(n == $I.PTSMOV.Inbox)
}

function RefreshMails(n) {
    this.ARBDUQ() && this.TVDGLJ.XOHVCR(n) && this.TVDGLJ.d[n] != null && ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("IGMGetMsgCount", {
        folderId: this.TVDGLJ.d[n].i,
        sFilter: this.SHKMUM,
        bOnlyNewMail: this.TKKWOG
    }, (new $I.JNOYHJ).TFDQYD(this, this.KECMJF), n)
}

function SendMail(n, t, i, r) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("IGMBulkSendMsg", {
        players: n,
        alliances: t,
        subject: i,
        body: r
    }, null, null)
}

function DeleteMessages(n, t) {
    var i = t ? $I.PTSMOV.Inbox : $I.PTSMOV.Sent;
    this.ARBDUQ() && this.TVDGLJ.XOHVCR(i) && this.TVDGLJ.d[i] != null && ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("IGMBulkDeleteMsg", {
        ids: n,
        f: this.TVDGLJ.d[i].i,
        a: !1
    }, (new $I.JNOYHJ).TFDQYD(this, this.TKCOFT), i)
}

function OnDeletedMessages(n, t) {
    t == 0 && this.JWBAKB(n)
}

function SetMailRead(n, t) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("IGMSetReadFlag", {
        msgIds: n,
        flag: t
    }, (new $I.JNOYHJ).TFDQYD(this, this.WSFHNN), null)
}

function OnMailRead(n, t) {
    t && this.YSERYR.KQCFDF(!0)
}

function ValueChange() {
    this.FWRSJM()
}

function GetUnreadCount() {
    return this.WEUJRM()
}

function GetMails(n) {
    return this.GCRCBE.d[n].dctMails
}

function GetMailById(n) {
    var t = this.GCRCBE.d[$I.PTSMOV.Inbox].XAKVSH(n);
    return t == null && (t = this.GCRCBE.d[$I.PTSMOV.Sent].XAKVSH(n)), t
}

function GetSortedIds(n) {
    return this.GCRCBE.d[n].colSortIds
}

function GetMailCount(n) {
    return this.GCRCBE.d[n].Count
}

function SetSorting(n, t, i) {
    this.GCRCBE.d[n].eMailSort = t;
    this.GCRCBE.d[n].bSortAscending = i
}

function SetPage(n, t) {
    this.GCRCBE.d[n].iCurPage = t
}

function add_DataChange(n) {
    var t = {},
        i, r = this.YSERYR,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.YSERYR, t.$r = $I.TSJVQL.JXWJWI($I.VONEVW, u, i, t), this.YSERYR = t.a, t.$r); while (r != i)
}

function remove_DataChange(n) {
    var t = {},
        i, r = this.YSERYR,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.YSERYR, t.$r = $I.TSJVQL.JXWJWI($I.VONEVW, u, i, t), this.YSERYR = t.a, t.$r); while (r != i)
}

function add_Fetched(n) {
    var t = {},
        i, r = this.EDIYBO,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.EDIYBO, t.$r = $I.TSJVQL.JXWJWI($I.NUHKQY, u, i, t), this.EDIYBO = t.a, t.$r); while (r != i)
}

function remove_Fetched(n) {
    var t = {},
        i, r = this.EDIYBO,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.EDIYBO, t.$r = $I.TSJVQL.JXWJWI($I.NUHKQY, u, i, t), this.EDIYBO = t.a, t.$r); while (r != i)
}