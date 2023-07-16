function UpdateIgnoreList(n, t) {
    for (var u = t.l, i, r = 0; r < u.length; r++) i = u[r], i.a != null && this.MHNCGZ.OTKBHB(i.a)
}

function GenerateSystemMessage(n) {
    var t = {};
    this.JKSLAU != null && (t.s = "@System", t.m = n, t.c = "@All", this.JKSLAU.OTKBHB(t))
}

function GenerateInfoMessage(n) {
    var t = {};
    this.JKSLAU != null && (t.s = "@Info", t.m = n, t.c = "@All", this.JKSLAU.OTKBHB(t))
}

function AddMsg(n) {
    this.BKPJNB = this.BKPJNB + n;
    this.BKPJNB = this.BKPJNB + "\\n"
}

function add_NewMessage(n) {
    var t = {},
        i, r = this.JKSLAU,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.JKSLAU, t.$r = $I.TSJVQL.JXWJWI($I.HODRIZ, u, i, t), this.JKSLAU = t.a, t.$r); while (r != i)
}

function remove_NewMessage(n) {
    var t = {},
        i, r = this.JKSLAU,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.JKSLAU, t.$r = $I.TSJVQL.JXWJWI($I.HODRIZ, u, i, t), this.JKSLAU = t.a, t.$r); while (r != i)
}

function add_IgnoreListUpdate(n) {
    var t = {},
        i, r = this.MHNCGZ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.MHNCGZ, t.$r = $I.TSJVQL.JXWJWI($I.AAMEUI, u, i, t), this.MHNCGZ = t.a, t.$r); while (r != i)
}

function remove_IgnoreListUpdate(n) {
    var t = {},
        i, r = this.MHNCGZ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.MHNCGZ, t.$r = $I.TSJVQL.JXWJWI($I.AAMEUI, u, i, t), this.MHNCGZ = t.a, t.$r); while (r != i)
}