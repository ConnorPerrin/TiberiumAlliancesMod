function Init() {
    this.VGOVBC = (new $I.UCRMVA).SLPWTI();
    this.HFCKES = (new $I.UDBZSB).SLPWTI();
    this.RXHYHF = (new $I.UDBZSB).SLPWTI();
    this.KZDMYX = !1;
    (new $I.BRAISX).YVTSEH((new $I.EHIMEI).TFDQYD(this, this.BDRBAQ), null, 0, 1e3);
    $I.CVRAYR.VAMLQD().ONGTRQ().XKHPYC((new $I.FVBDHQ).TFDQYD(this, this.KYQJEH))
}

function get_FirstLoadCompleted() {
    return this.KZDMYX
}

function ReRequestSideBarNotifications() {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("NotificationGetRange", {
        category: 0,
        skip: 0,
        take: $I.UEAWIP.NOTIFICATION_RETRIEVAL_RANGE,
        sortOrder: 1,
        ascending: !1
    }, (new $I.JNOYHJ).TFDQYD(this, this.FOZBOY), null)
}

function GetAll() {
    for (var t = $I.UDAQKL.DNVCCU($I.NRHNBK, this.VGOVBC.l.length), n = 0; n < t.length; n++) t[n] = this.VGOVBC.l[n];
    return t
}

function GetAllByCategoryId(n) {
    for (var r, t, u = 0, f = 0, i = 0; i < this.VGOVBC.l.length; i++) this.VGOVBC.l[i].WZYEPN() == n && u++;
    for (r = $I.UDAQKL.DNVCCU($I.NRHNBK, u), t = 0; t < this.VGOVBC.l.length; t++) this.VGOVBC.l[t].WZYEPN() == n && (r[f] = this.VGOVBC.l[t], f++);
    return r
}

function GetNotification(n, t) {
    var i = {},
        r = null;
    return n > 0 ? (i.$r = this.HFCKES.ZOXRAI(n, i), r = i.b, i.$r, r) : (i.$r = this.RXHYHF.ZOXRAI(t, i), r = i.b, i.$r, r)
}

function GetNotificationById(n) {
    var i = null,
        t;
    if (n > 0) {
        for (t = 0; t < this.VGOVBC.l.length; t++)
            if (this.VGOVBC.l[t].UQGPFX() == n) {
                i = this.VGOVBC.l[t];
                break
            } i == null && ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("NotificationGetSingle", {
            notificationId: n
        }, (new $I.JNOYHJ).TFDQYD(this, this.YIBBLF), null)
    }
    return i
}

function AddOrGetNotification(n) {
    var i = {},
        t = null,
        r = n;
    return r.id > 0 ? (i.$r = this.HFCKES.ZOXRAI(r.id, i), t = i.b, i.$r) : (i.$r = this.RXHYHF.ZOXRAI(r.uid, i), t = i.b, i.$r), t == null && (t = (new $I.NRHNBK).BHBLIH(r), t.CXNPZC() > 0 ? this.HFCKES.GXVKTX(t.CXNPZC(), t) : this.RXHYHF.GXVKTX(t.LYSEIF(), t), this.VGOVBC.l.push(t)), t
}

function RemoveNotification(n) {
    n.UQGPFX() > 0 ? this.HFCKES.XOHVCR(n.UQGPFX()) && this.HFCKES.XUDPAL(n.UQGPFX()) : this.RXHYHF.XOHVCR(n.LYSEIF()) && this.RXHYHF.XUDPAL(n.LYSEIF());
    this.VGOVBC.l.indexOf(n) != -1 && this.VGOVBC.WILRBK(n)
}

function IsRaidNotification(n) {
    return n != $I.VUOYKB.AllianceNPCRaidOutgoing && n != $I.VUOYKB.CombatRaidLost && n != $I.VUOYKB.CombatRaidDraw && n != $I.VUOYKB.CombatRaidWon && n != $I.VUOYKB.CombatRaidTotalWon ? n == $I.VUOYKB.CombatRaidTotalLost : !0
}

function IsIncomingNPCAttack(n) {
    return n != $I.VUOYKB.NPCPlayerAttackIncoming && n != $I.VUOYKB.NPCPlayerCombatBattleDefaultDefense ? n == $I.VUOYKB.NPCPlayerCombatBattleTotalLostDefense : !0
}

function GetParameter(n, t) {
    return frontend.gui.notifications.NotificationsUtil.getParameter(n, t)
}

function add_NotificationAdded(n) {
    var t = {},
        i, r = this.IVPWQQ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.IVPWQQ, t.$r = $I.TSJVQL.JXWJWI($I.IHHLSE, u, i, t), this.IVPWQQ = t.a, t.$r); while (r != i)
}

function remove_NotificationAdded(n) {
    var t = {},
        i, r = this.IVPWQQ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.IVPWQQ, t.$r = $I.TSJVQL.JXWJWI($I.IHHLSE, u, i, t), this.IVPWQQ = t.a, t.$r); while (r != i)
}

function add_NotificationUpdated(n) {
    var t = {},
        i, r = this.BTHPQA,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.BTHPQA, t.$r = $I.TSJVQL.JXWJWI($I.YHBGSV, u, i, t), this.BTHPQA = t.a, t.$r); while (r != i)
}

function remove_NotificationUpdated(n) {
    var t = {},
        i, r = this.BTHPQA,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.BTHPQA, t.$r = $I.TSJVQL.JXWJWI($I.YHBGSV, u, i, t), this.BTHPQA = t.a, t.$r); while (r != i)
}

function add_NotificationRemoved(n) {
    var t = {},
        i, r = this.KZHPOH,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.KZHPOH, t.$r = $I.TSJVQL.JXWJWI($I.AOBOZK, u, i, t), this.KZHPOH = t.a, t.$r); while (r != i)
}

function remove_NotificationRemoved(n) {
    var t = {},
        i, r = this.KZHPOH,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.KZHPOH, t.$r = $I.TSJVQL.JXWJWI($I.AOBOZK, u, i, t), this.KZHPOH = t.a, t.$r); while (r != i)
}

function add_NotificationsAddedFromOffline(n) {
    var t = {},
        i, r = this.GGWYNL,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.GGWYNL, t.$r = $I.TSJVQL.JXWJWI($I.DQFJBE, u, i, t), this.GGWYNL = t.a, t.$r); while (r != i)
}

function remove_NotificationsAddedFromOffline(n) {
    var t = {},
        i, r = this.GGWYNL,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.GGWYNL, t.$r = $I.TSJVQL.JXWJWI($I.DQFJBE, u, i, t), this.GGWYNL = t.a, t.$r); while (r != i)
}

function add_ReportNotificationLoaded(n) {
    var t = {},
        i, r = this.MYGSFC,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.MYGSFC, t.$r = $I.TSJVQL.JXWJWI($I.QRPDIF, u, i, t), this.MYGSFC = t.a, t.$r); while (r != i)
}

function remove_ReportNotificationLoaded(n) {
    var t = {},
        i, r = this.MYGSFC,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.MYGSFC, t.$r = $I.TSJVQL.JXWJWI($I.QRPDIF, u, i, t), this.MYGSFC = t.a, t.$r); while (r != i)
}