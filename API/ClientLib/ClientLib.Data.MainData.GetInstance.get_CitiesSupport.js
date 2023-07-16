function GetDedicatingSupportBase(n, t) {
    var i = {},
        r, u;
    return (i.$r = this.PCFHLH.ZOXRAI(n, i), r = i.b, i.$r) && (i.$r = r.QKWSNZ().ZOXRAI(t, i), u = i.b, i.$r) ? u : null
}

function GetSupportWeaponCount(n) {
    var u = {},
        o, i = (new $I.UDBZSB).SLPWTI(),
        s = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG(),
        e, r, f;
    if (u.$r = this.PCFHLH.ZOXRAI(n, u), o = u.b, u.$r) {
        var h = $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI(),
            c = o.QKWSNZ().d,
            t = {
                k: null,
                v: null
            };
        for (e in c)
            if (t.k = e, t.v = c[e], r = $I.BUEVKL.QGLUJV().VXAMCA().supportTechs[t.v.GIRXAB()], r == undefined ? !1 : !0, r != null) {
                var l = h.OFYSUK() - t.v.OFYSUK(),
                    a = h.FQVDES() - t.v.FQVDES(),
                    y = l * l + a * a,
                    v = t.v.DBSFHR() + Math.floor(r.pt + r.tpf * Math.floor(Math.sqrt(y) + .5));
                if (i.XOHVCR(t.v.GIRXAB())) {
                    v < s ? i.d[t.v.GIRXAB()][0] += 1 : i.d[t.v.GIRXAB()][1] += 1;
                    continue
                }
                f = $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.YJUUCR, 2), 0, 0);
                v < s ? f[0]++ : f[1]++;
                i.GXVKTX(t.v.GIRXAB(), f)
            }
    }
    return i
}

function GetSupportWeaponLevels(n) {
    var r, u = {},
        e, o = (new $I.UCRMVA).SLPWTI(),
        v = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG(),
        f, i, a;
    if (u.$r = this.PCFHLH.ZOXRAI(n, u), e = u.b, u.$r) {
        var s = $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI(),
            h = e.QKWSNZ().d,
            t = {
                k: null,
                v: null
            };
        for (f in h)
            if (t.k = f, t.v = h[f], i = $I.BUEVKL.QGLUJV().VXAMCA().supportTechs[t.v.GIRXAB()], i == undefined ? !1 : !0, i != null) {
                var c = s.OFYSUK() - t.v.OFYSUK(),
                    l = s.FQVDES() - t.v.FQVDES(),
                    y = c * c + l * l,
                    p = t.v.DBSFHR() + Math.floor(i.pt + i.tpf * Math.floor(Math.sqrt(y) + .5));
                p < v && (a = (r = (new $I.ZKAZZN).SLPWTI(), r.type = t.v.GIRXAB(), r.level = t.v.EOROVE(), r), o.l.push(a))
            }
    }
    return o
}

function get_Supports() {
    return this.PCFHLH
}

function add_CitiesSupportChange(n) {
    var t = {},
        i, r = this.RRGDGD,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.RRGDGD, t.$r = $I.TSJVQL.JXWJWI($I.ZWPSFP, u, i, t), this.RRGDGD = t.a, t.$r); while (r != i)
}

function remove_CitiesSupportChange(n) {
    var t = {},
        i, r = this.RRGDGD,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.RRGDGD, t.$r = $I.TSJVQL.JXWJWI($I.ZWPSFP, u, i, t), this.RRGDGD = t.a, t.$r); while (r != i)
}