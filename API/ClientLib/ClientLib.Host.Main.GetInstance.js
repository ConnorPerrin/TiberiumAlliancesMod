function get_PrimaryHost() {
    return this.RWKAPH
}

function set_PrimaryHost(n) {
    this.RWKAPH = n
}

function AddHost(n) {
    this.IQFXXP.GXVKTX(n.KPQBNW(), n);
    n.CAJKJR((new $I.VASJPC).TFDQYD(this, this.YDJMDM));
    n.KPQBNW() == null && (n.DEODYE((new $I.JZJWGT).TFDQYD(this, this.GXUPTO)), n.JUTQBS((new $I.VASJPC).TFDQYD(this, this.FTVHEX)))
}

function AttachNetworks() {
    var t = this.IQFXXP.d,
        n = {
            k: null,
            v: null
        };
    for (var i in t) n.k = i, n.v = t[i], n.v.OCQDOI()
}

function AddHostByName(n) {
    var t;
    return n == null ? null : (t = null, n == "Origin" && (t = (new $I.SRCHXJ).SLPWTI()), t != null && this.ZYDWGQ(t), t)
}

function GetHost(n) {
    var t = {},
        i;
    return (t.$r = this.IQFXXP.ZOXRAI(n, t), i = t.b, t.$r) ? i : null
}

function GetUser(n) {
    var t, r, i, u;
    if (this.RWKAPH != null && (t = this.RWKAPH.UBUYWP(n), t != null)) return t;
    r = this.IQFXXP.d;
    i = {
        k: null,
        v: null
    };
    for (u in r)
        if (i.k = u, i.v = r[u], t = i.v.UBUYWP(n), t != null) return t;
    return null
}