function GetSupportWeaponCount() {
    var f = (new $I.UDBZSB).SLPWTI(),
        v = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG(),
        t = $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI(),
        e, n, o, i, r, u, l, a;
    if (t.RHDKEZ() && !t.VUAHHF()) {
        e = this.WRJUVC.d;
        n = {
            k: null,
            v: null
        };
        for (o in e)
            if (n.k = o, n.v = e[o], $I.CVRAYR.VAMLQD().BZCGGY().VYAQMA(t.UQGPFX(), n.k) == null && (i = $I.BUEVKL.QGLUJV().VXAMCA().supportTechs[n.v.GIRXAB()], i == undefined ? !1 : !0, i != null)) {
                var s = t.OFYSUK() - n.v.OFYSUK(),
                    h = t.FQVDES() - n.v.FQVDES(),
                    c = s * s + h * h;
                c <= i.r * i.r && (r = Math.max(t.MYOJWG(), n.v.DBSFHR()), u = $I.CVRAYR.VAMLQD().FMKUPK().ULLWWE(n.v.BAOOAM()), u != null && (r = Math.max(r, u.JoinStep)), u = $I.CVRAYR.VAMLQD().FMKUPK().ULLWWE(t.CPVNPP()), u != null && (r = Math.max(r, u.JoinStep)), l = r + Math.floor(i.pt + i.tpf * Math.floor(Math.sqrt(c) + .5)), f.XOHVCR(n.v.GIRXAB()) || (a = $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.YJUUCR, 2), 0, 0), f.GXVKTX(n.v.GIRXAB(), a)), l < v ? f.d[n.v.GIRXAB()][0] += 1 : f.d[n.v.GIRXAB()][1] += 1)
            }
    }
    return f
}

function get_Bases() {
    return this.WRJUVC
}

function add_AllianceSupportStateChange(n) {
    var t = {},
        i, r = this.MIYNGM,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.MIYNGM, t.$r = $I.TSJVQL.JXWJWI($I.FXOYGO, u, i, t), this.MIYNGM = t.a, t.$r); while (r != i)
}

function remove_AllianceSupportStateChange(n) {
    var t = {},
        i, r = this.MIYNGM,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.MIYNGM, t.$r = $I.TSJVQL.JXWJWI($I.FXOYGO, u, i, t), this.MIYNGM = t.a, t.$r); while (r != i)
}