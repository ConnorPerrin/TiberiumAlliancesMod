function OpenPopup() {
    return frontend.gui.notifications.SingleNotificationPopupManager.getInstance().openPopup(this)
}

function RefreshHotness() {
    this.JGWROS && this.XXNLUE() && (this.JGWROS = !1, this.DBYBTB != null && this.DBYBTB.KXQCQX(this))
}

function RefreshComments(n, t, i) {
    this.GLJZBL > 0 ? ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("NotificationGetCommentsData", {
        notificationId: this.GLJZBL,
        skip: n,
        take: t,
        sortColumn: 1,
        ascending: i
    }, (new $I.JNOYHJ).TFDQYD(this, this.XJNOHU), null) : this.HANBIC > 0 && ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("GetForumPostsData", {
        forumID: this.LXKSNK,
        threadID: this.UNTDAA,
        skip: n,
        take: t,
        sort: 1,
        ascending: i,
        filterFlags: 1
    }, (new $I.JNOYHJ).TFDQYD(this, this.XJNOHU), null)
}

function get_IdDB() {
    return this.GLJZBL
}

function get_Id() {
    return this.GLJZBL
}

function get_IdOnlineOnly() {
    return this.HANBIC
}

function get_MdbId() {
    return this.UKGBBA
}

function get_Time() {
    return this.NVOJHT
}

function GetJSTime() {
    return new Date(this.NVOJHT)
}

function get_LastCommentTime() {
    return this.FALUSS
}

function set_LastCommentTime(n) {
    this.FALUSS = n
}

function GetJSLastCommentTime() {
    return new Date(this.FALUSS)
}

function get_LifeTimeEnd() {
    return this.LJMKCZ
}

function get_TickerPasses() {
    return this.FBQQLV
}

function get_SideBarDisplayTime() {
    return this.WXYRHI
}

function GetJSLifeTimeEnd() {
    return new Date(this.LJMKCZ)
}

function get_Parameters() {
    return this.USYZPO
}

function get_Reason() {
    return this.OKCNWA
}

function set_Reason(n) {
    this.OKCNWA = n
}

function get_NumComments() {
    return this.PLSROS
}

function set_NumComments(n) {
    this.PLSROS = n
}

function get_NumUnreadComments() {
    return this.ZWYOVG
}

function set_NumUnreadComments(n) {
    this.ZWYOVG = n;
    this.ANVITU != null && this.ANVITU.KXQCQX(this)
}

function get_ForumId() {
    return this.LXKSNK
}

function get_ThreadId() {
    return this.UNTDAA
}

function get_CategoryId() {
    return this.TMTXWR
}

function get_CommentsAllowed() {
    return this.WSEPBZ
}

function get_IsPersonalized() {
    return this.DEJGSK
}

function get_IsHot() {
    return this.JGWROS
}

function set_IsHot(n) {
    this.JGWROS = n
}

function get_IsThreadLocked() {
    return this.EVXSSI
}

function set_IsThreadLocked(n) {
    this.EVXSSI = n
}

function get_ReceiverFlags() {
    return this.HLKSXB
}

function add_NotificationCommentsDelivered(n) {
    var t = {},
        i, r = this.BVWKPI,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.BVWKPI, t.$r = $I.TSJVQL.JXWJWI($I.XXPJBG, u, i, t), this.BVWKPI = t.a, t.$r); while (r != i)
}

function remove_NotificationCommentsDelivered(n) {
    var t = {},
        i, r = this.BVWKPI,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.BVWKPI, t.$r = $I.TSJVQL.JXWJWI($I.XXPJBG, u, i, t), this.BVWKPI = t.a, t.$r); while (r != i)
}

function add_NotificationUnreadCommentCountUpdated(n) {
    var t = {},
        i, r = this.ANVITU,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.ANVITU, t.$r = $I.TSJVQL.JXWJWI($I.ZZBGZW, u, i, t), this.ANVITU = t.a, t.$r); while (r != i)
}

function remove_NotificationUnreadCommentCountUpdated(n) {
    var t = {},
        i, r = this.ANVITU,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.ANVITU, t.$r = $I.TSJVQL.JXWJWI($I.ZZBGZW, u, i, t), this.ANVITU = t.a, t.$r); while (r != i)
}

function add_NotificationHotnessUpdated(n) {
    var t = {},
        i, r = this.DBYBTB,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.DBYBTB, t.$r = $I.TSJVQL.JXWJWI($I.HJIRDC, u, i, t), this.DBYBTB = t.a, t.$r); while (r != i)
}

function remove_NotificationHotnessUpdated(n) {
    var t = {},
        i, r = this.DBYBTB,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.DBYBTB, t.$r = $I.TSJVQL.JXWJWI($I.HJIRDC, u, i, t), this.DBYBTB = t.a, t.$r); while (r != i)
}