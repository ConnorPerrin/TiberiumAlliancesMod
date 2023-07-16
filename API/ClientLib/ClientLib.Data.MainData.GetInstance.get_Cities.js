function Init() {
    $I.CVRAYR.VAMLQD().ONGTRQ().VYOUUV((new $I.LPYEIJ).TFDQYD(this, this.MKMWYV))
}

function CreateBenchmark(n) {
    var t, i;
    n == 1 && (t = $I.RKMBUH.IDQENL().LDDGWC(), this.UBWCZK.XOHVCR(0) ? this.UBWCZK.UHNVSA(0, t) : this.UBWCZK.GXVKTX(0, t));
    n == 2 && (i = $I.RKMBUH.IDQENL().EGFZYL(), this.UBWCZK.XOHVCR(0) ? this.UBWCZK.UHNVSA(0, i) : this.UBWCZK.GXVKTX(0, i))
}

function SetBenchmarkCityOwnerId(n, t) {
    n == 1 && $I.RKMBUH.IDQENL().LDDGWC().LROLNG(t);
    n == 2 && $I.RKMBUH.IDQENL().EGFZYL().LROLNG(t)
}

function UpdateCurrentOwnCityCurrentTargetBaseId(n, t) {
    var r, u, i;
    if (this.BRKRLI() != null && this.BRKRLI().ITKPJL().NUOTCH() > 0)
        for (r = t.l, i = 0; i < r.length; i++) u = r[i], u || this.BRKRLI().ITKPJL().ETSCMP(0)
}

function UpdateCity(n, t) {
    for (var u, s, r = {}, e = !1, o = t.l, i, f = 0; f < o.length; f++) i = o[f], (r.$r = this.UBWCZK.ZOXRAI(i.i, r), u = r.b, r.$r) || (r.$r = this.XFFOQT.ZOXRAI(i.i, r), u = r.b, r.$r) || (e = !0, u = (new $I.VQMBLR).WGOCEY(i.i), s = typeof i.o != "undefined" ? i.o : -1, $I.CVRAYR.VAMLQD().ONGTRQ().UQGPFX() == s ? this.XFFOQT.GXVKTX(i.i, u) : this.UBWCZK.GXVKTX(i.i, u)), u.ZUBNAO(i);
    e && this.CTRMSC.FOWLVG()
}

function get_CurrentCityId() {
    return this.NIDPYK
}

function set_CurrentCityId(n) {
    var t;
    this.NIDPYK != n && (t = this.NIDPYK, this.NIDPYK = n, this.NIDPYK > 0 && (this.XFFOQT.XOHVCR(this.NIDPYK) ? (this.UGIDHC(this.NIDPYK), this.XFFOQT.d[this.NIDPYK].SGRQBS().HNNYCA(!0)) : (this.XFQZWK = this.NIDPYK, this.WPWQAT(-1, this.NIDPYK, -1, -1), this.UBWCZK.d[this.NIDPYK].SGRQBS().HNNYCA(!0))), this.LODPYS != null && this.LODPYS.ZZUCDU(t, n))
}

function get_CurrentCity() {
    return this.WEDXOB(this.NIDPYK)
}

function get_CurrentOwnCity() {
    return this.WEDXOB(this.KJKMRM)
}

function get_CurrentOwnCityId() {
    return this.KJKMRM
}

function set_CurrentOwnCityId(n) {
    var t;
    this.KJKMRM != n && (t = this.KJKMRM, this.RFFUEQ == -1 && (this.RFFUEQ = t), this.KJKMRM = n, this.QCWZHP != null && this.QCWZHP.ZZUCDU(t, n))
}

function get_HomeCityId() {
    return this.RFFUEQ
}

function set_HomeCityId(n) {
    this.RFFUEQ = n
}

function get_CurrentForeignCityId() {
    return this.XFQZWK
}

function AddOtherCity(n, t, i, r) {
    var u;
    this.UBWCZK.XOHVCR(t) || (u = (new $I.VQMBLR).WGOCEY(t), u.LBLCRL(i, r), this.UBWCZK.GXVKTX(t, u))
}

function AddCity(n, t, i, r) {
    var u;
    this.XFFOQT.XOHVCR(t) || (u = (new $I.VQMBLR).WGOCEY(t), u.LBLCRL(i, r), this.XFFOQT.GXVKTX(t, u))
}

function GetCity(n) {
    var t = {},
        i;
    return (t.$r = this.XFFOQT.ZOXRAI(n, t), i = t.b, t.$r) ? i : (t.$r = this.UBWCZK.ZOXRAI(n, t), i = t.b, t.$r) ? i : null
}

function CollectAll() {
    var t, n, i;
    if (this.XFFOQT.c > 0) {
        t = this.XFFOQT.d;
        n = {
            k: null,
            v: null
        };
        for (i in t) n.k = i, n.v = t[i], n.v.XQSPMB() > 0 && n.v.CIWDFX()
    }
}

function hasCollectables() {
    var t, n, i;
    if (this.XFFOQT.c > 0) {
        t = this.XFFOQT.d;
        n = {
            k: null,
            v: null
        };
        for (i in t)
            if (n.k = i, n.v = t[i], n.v.XQSPMB() > 0) return !0
    }
    return !1
}

function GetNextFreeCityName() {
    var c = $I.CVRAYR.VAMLQD().TZZENG().UIKEIA(),
        n = $I.CVRAYR.VAMLQD().ONGTRQ().KPQBNW(),
        t, f, i, e, u;
    for (n.charCodeAt(n.length - 1) == "*" && (n = n.substr(0, n.length - 1)), t = 1, f = !1; !f;) {
        i = $I.UDAQKL.DNVCCU($I.EUNQAF, 2);
        i[0] = t.toString();
        e = Math.min(n.length, 16 - (t.toString().length + 1));
        i[1] = n.substr(0, e);
        var o = $I.XOJOCY.MJKMFL(c, i).substr(0, 16),
            s = !1,
            h = this.XFFOQT.d,
            r = {
                k: null,
                v: null
            };
        for (u in h)
            if (r.k = u, r.v = h[u], r.v.KPQBNW() == o) {
                s = !0;
                break
            } if (!s || t > this.XFFOQT.c) return o;
        t++
    }
    return ""
}

function GetCityByCoord(n, t) {
    var r = this.XFFOQT.d,
        i = {
            k: null,
            v: null
        };
    for (var u in r)
        if (i.k = u, i.v = r[u], i.v.ZFEMVW() == n && i.v.IIKXGY() == t) return i.v;
    return null
}

function GetOrderTargetInfo(n, t, i) {
    var r = this.GIQURF(t, i),
        u, f, e;
    return r != null && (u = this.WEDXOB(n), u != null) ? (f = Math.abs(u.ZFEMVW() - r.IIKXGY()), e = Math.abs(u.IIKXGY() - r.IIKXGY()), (new $I.OVZVAT).LUSNDY(n, r.UQGPFX(), Math.sqrt(f * f + e * e))) : null
}

function get_AllCities() {
    return this.XFFOQT
}

function GetWorldSectorWithMostCities() {
    for (var e, i, n, t, r = $I.UDAQKL.DNVCCU($I.YJUUCR, 8), f = 0; f < 8; f++) r[f] = 0;
    var s = Math.floor($I.CVRAYR.VAMLQD().TZZENG().LEGJLJ() / 2),
        h = Math.floor($I.CVRAYR.VAMLQD().TZZENG().KOODTZ() / 2),
        c = $I.CVRAYR.VAMLQD().TZZENG().EMBPVB(),
        o = this.XFFOQT.d,
        u = {
            k: null,
            v: null
        };
    for (e in o) u.k = e, u.v = o[e], i = (new $I.AVNIXJ).GSPBQH(u.v.OFYSUK(), u.v.FQVDES()), n = $I.CRYNDC.NKFMHV(i, c, s, h), n >= 0 && n < 8 && r[n]++;
    for (i = -1, n = 0, t = 0; t < 8; t++) n < r[t] && (n = r[t], i = t);
    return i
}

function GetCityWithMinDistanceMinBaseLevel(n, t, i) {
    var f = null,
        u = -1,
        o = this.XFFOQT.d,
        r = {
            k: null,
            v: null
        };
    for (var s in o)
        if (r.k = s, r.v = o[s], r.v.KCWGSH() >= i && !r.v.BJTMCR()) {
            var h = n - r.v.OFYSUK(),
                c = t - r.v.FQVDES(),
                e = Math.sqrt(h * h + c * c);
            u == -1 ? (u = e, f = r.v) : e < u && (u = e, f = r.v)
        } return f
}

function IsOneCityInMinDistanceToField(n, t, i) {
    var u = this.XFFOQT.d,
        r = {
            k: null,
            v: null
        };
    for (var f in u) {
        r.k = f;
        r.v = u[f];
        var e = n - r.v.OFYSUK(),
            o = t - r.v.FQVDES(),
            s = e * e + o * o;
        if (s < i * i) return !0
    }
    return !1
}

function GetBaseEffectIndexFromMainBuildingLevel(n, t) {
    if (t == $I.KGPDNC.GDIFaction || t == $I.KGPDNC.NODFaction) {
        if (n <= 9) return 0;
        if (n <= 15) return 1;
        if (n <= 20) return 2;
        if (n <= 24) return 3;
        if (n <= 29) return 4;
        if (n <= 34) return 5;
        if (n <= 39) return 6;
        if (n >= 40) return 7
    }
    if (t == $I.KGPDNC.NPCBase) {
        if (n <= 29) return 0;
        if (n <= 34) return 1;
        if (n <= 39) return 2;
        if (n >= 40) return 3
    }
    if (t == $I.KGPDNC.NPCCamp) {
        if (n <= 15) return 0;
        if (n <= 24) return 1;
        if (n <= 34) return 2;
        if (n >= 35) return 3
    }
    if (t == $I.KGPDNC.NPCEvent) {
        if (n <= 15) return 0;
        if (n <= 30) return 1;
        if (n >= 31) return 2
    }
    return 0
}

function GetGhostedCity() {
    var t = this.LVIQBQ().d,
        n = {
            k: null,
            v: null
        };
    for (var i in t)
        if (n.k = i, n.v = t[i], n.v.BJTMCR()) return n.v;
    return null
}

function GetDamagedCity() {
    var t = this.LVIQBQ().d,
        n = {
            k: null,
            v: null
        };
    for (var i in t)
        if (n.k = i, n.v = t[i], n.v.LRNOID() < 100 && !n.v.BJTMCR()) return n.v;
    return null
}

function add_Change(n) {
    var t = {},
        i, r = this.CTRMSC,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.CTRMSC, t.$r = $I.TSJVQL.JXWJWI($I.NDAYZG, u, i, t), this.CTRMSC = t.a, t.$r); while (r != i)
}

function remove_Change(n) {
    var t = {},
        i, r = this.CTRMSC,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.CTRMSC, t.$r = $I.TSJVQL.JXWJWI($I.NDAYZG, u, i, t), this.CTRMSC = t.a, t.$r); while (r != i)
}

function add_CurrentChange(n) {
    var t = {},
        i, r = this.LODPYS,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.LODPYS, t.$r = $I.TSJVQL.JXWJWI($I.KKGZDI, u, i, t), this.LODPYS = t.a, t.$r); while (r != i)
}

function remove_CurrentChange(n) {
    var t = {},
        i, r = this.LODPYS,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.LODPYS, t.$r = $I.TSJVQL.JXWJWI($I.KKGZDI, u, i, t), this.LODPYS = t.a, t.$r); while (r != i)
}

function add_CurrentOwnChange(n) {
    var t = {},
        i, r = this.QCWZHP,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.QCWZHP, t.$r = $I.TSJVQL.JXWJWI($I.MBLAWJ, u, i, t), this.QCWZHP = t.a, t.$r); while (r != i)
}

function remove_CurrentOwnChange(n) {
    var t = {},
        i, r = this.QCWZHP,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.QCWZHP, t.$r = $I.TSJVQL.JXWJWI($I.MBLAWJ, u, i, t), this.QCWZHP = t.a, t.$r); while (r != i)
}

function add_GhostModeChanged(n) {
    var t = {},
        i, r = this.EKUBXO,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.EKUBXO, t.$r = $I.TSJVQL.JXWJWI($I.XQQEVR, u, i, t), this.EKUBXO = t.a, t.$r); while (r != i)
}

function remove_GhostModeChanged(n) {
    var t = {},
        i, r = this.EKUBXO,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.EKUBXO, t.$r = $I.TSJVQL.JXWJWI($I.XQQEVR, u, i, t), this.EKUBXO = t.a, t.$r); while (r != i)
}