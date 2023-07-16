function SetServerConfig(n) {
    for (var t, r, f = n, e = $I.BUEVKL.QGLUJV(), u = f, i = 0; i < u.length; i++) t = u[i], t != null && (r = e.XXTAJR(t.n), r != null && this.AVJOSR(r, t.v));
    this.EJQLHF.AMMYJA()
}

function get_IsDirty() {
    return this.EJQLHF.c > 0
}

function get_Settings() {
    return this.FXRBSX
}

function GetDefaultConfig(n) {
    return $I.BUEVKL.QGLUJV().HQBLEF(n)
}

function GetConfig(n) {
    var t = {},
        i;
    return (t.$r = this.FXRBSX.ZOXRAI(n, t), i = t.b, t.$r) ? i : $I.BUEVKL.QGLUJV().HQBLEF(n)
}

function SetConfig(n, t) {
    var i = {},
        r;
    (i.$r = this.FXRBSX.ZOXRAI(n, i), r = i.b, i.$r) || (r = null);
    this.FXRBSX.UHNVSA(n, t);
    this.HTHXAW != null && r != t && (this.EJQLHF.UHNVSA(n, !0), this.HTHXAW.ZUURVY(n, r, t))
}

function SaveToDB() {
    var n = {},
        f, r;
    if (this.EJQLHF.c > 0) {
        var t = $I.UDAQKL.DNVCCU($I.GRJGEC, this.EJQLHF.c),
            o = $I.BUEVKL.QGLUJV(),
            i = 0,
            e = null,
            r = this.EJQLHF.d,
            u = {
                k: null,
                v: null
            };
        for (f in r) u.k = f, u.v = r[f], (n.$r = this.FXRBSX.ZOXRAI(u.k, n), e = n.b, n.$r) && (t[i] = {}, t[i].n = o.CONYUF(u.k), t[i].v = e), i++;
        r = (new $I.JNOYHJ).TFDQYD(this, this.WJGROO);
        ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("SetConfig", {
            configValues: t
        }, r, this)
    }
}

function OnConfigSaved() {}

function add_ConfigChange(n) {
    var t = {},
        i, r = this.HTHXAW,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.HTHXAW, t.$r = $I.TSJVQL.JXWJWI($I.ZWSYBN, u, i, t), this.HTHXAW = t.a, t.$r); while (r != i)
}

function remove_ConfigChange(n) {
    var t = {},
        i, r = this.HTHXAW,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.HTHXAW, t.$r = $I.TSJVQL.JXWJWI($I.ZWSYBN, u, i, t), this.HTHXAW = t.a, t.$r); while (r != i)
}