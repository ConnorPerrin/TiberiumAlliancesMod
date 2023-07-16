function get_LandingPage() {
    return null
}

function get_Name() {
    return "Origin"
}

function get_Status() {
    return this.IAYRLR
}

function get_User() {
    return this.XPDYGT
}

function get_Friends() {
    return this.AXUQJV
}

function get_NonPlayingFriends() {
    return this.PZHRPP
}

function get_Requests() {
    return null
}

function GetUser(n) {
    var t;
    if (this.AXUQJV != null)
        for (t = 0; t < this.AXUQJV.length; t++)
            if (this.AXUQJV[t].CVGKHU() == n) return this.AXUQJV[t];
    return null
}

function Login() {}

function ShowMultiRequest() {}

function UpdateFriends() {}

function UpdateNonPlayingFriends() {}

function UpdateRequests() {}

function AttachToServer() {
    $I.KRSVNP.OKNHXZ()
}

function add_OnStatusChange(n) {
    var t = {},
        i, r = this.RWEICG,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.RWEICG, t.$r = $I.TSJVQL.JXWJWI($I.JZJWGT, u, i, t), this.RWEICG = t.a, t.$r); while (r != i)
}

function remove_OnStatusChange(n) {
    var t = {},
        i, r = this.RWEICG,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.RWEICG, t.$r = $I.TSJVQL.JXWJWI($I.JZJWGT, u, i, t), this.RWEICG = t.a, t.$r); while (r != i)
}

function add_OnUserChange(n) {
    var t = {},
        i, r = this.QEYSQU,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.QEYSQU, t.$r = $I.TSJVQL.JXWJWI($I.VASJPC, u, i, t), this.QEYSQU = t.a, t.$r); while (r != i)
}

function remove_OnUserChange(n) {
    var t = {},
        i, r = this.QEYSQU,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.QEYSQU, t.$r = $I.TSJVQL.JXWJWI($I.VASJPC, u, i, t), this.QEYSQU = t.a, t.$r); while (r != i)
}

function add_OnFriendsChange(n) {
    var t = {},
        i, r = this.DRUFJB,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.DRUFJB, t.$r = $I.TSJVQL.JXWJWI($I.VASJPC, u, i, t), this.DRUFJB = t.a, t.$r); while (r != i)
}

function remove_OnFriendsChange(n) {
    var t = {},
        i, r = this.DRUFJB,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.DRUFJB, t.$r = $I.TSJVQL.JXWJWI($I.VASJPC, u, i, t), this.DRUFJB = t.a, t.$r); while (r != i)
}

function add_OnRequestsChange(n) {
    var t = {},
        i, r = this.JECRNZ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.JECRNZ, t.$r = $I.TSJVQL.JXWJWI($I.VASJPC, u, i, t), this.JECRNZ = t.a, t.$r); while (r != i)
}

function remove_OnRequestsChange(n) {
    var t = {},
        i, r = this.JECRNZ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.JECRNZ, t.$r = $I.TSJVQL.JXWJWI($I.VASJPC, u, i, t), this.JECRNZ = t.a, t.$r); while (r != i)
}