function SetData(n) {
    for (var u, s, f, r, h, i = !1, o = n.l, t, e = 0; e < o.length; e++) {
        if (t = o[e], t == null || t.c == null || t.c.length < 1) {
            i |= this.GTTCZE.c > 0;
            this.GTTCZE.AMMYJA();
            continue
        }
        for (i |= this.GTTCZE.c != t.c.length, u = 0; !i && u < t.c.length; u++) s = t.c[u], i |= !this.GTTCZE.XOHVCR(s.g);
        for (i && this.GTTCZE.AMMYJA(), f = 0; f < t.c.length; f++) r = t.c[f], this.GTTCZE.XOHVCR(r.g) || this.GTTCZE.GXVKTX(r.g, (new $I.PAACJZ).SLPWTI()), h = this.GTTCZE.d[r.g], i |= h.IKZYBI(r)
    }
    i && this.CQTKEK != null && this.CQTKEK.FOWLVG()
}

function getCurrentChallengeId() {
    var t = 0,
        i = 0x7fffffffffffffff;
    for (var n in {
            d: this.GTTCZE
        }.d.d) this.GTTCZE.d[n].dateEndCurrent < i && (i = this.GTTCZE.d[n].dateEndCurrent, t = this.GTTCZE.d[n].id);
    return t
}

function getChallengeById(n) {
    return this.GTTCZE.XOHVCR(n) ? this.GTTCZE.d[n] : null
}

function get_Challenges() {
    return this.GTTCZE
}

function GetCustomValue(n) {
    var u = this.JCCYGH(this.LAANBH()),
        t, i, r;
    if (u != null) {
        if (t = $I.PAACJZ.KZMPFW(u.jsonBlob), t == null || t.custom == null) return null;
        for (i = 0; i < t.custom.length; i++)
            if (r = t.custom[i], r.type == n) return r.value
    }
    return null
}

function add_Change(n) {
    var t = {},
        i, r = this.CQTKEK,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.CQTKEK, t.$r = $I.TSJVQL.JXWJWI($I.XTFDXD, u, i, t), this.CQTKEK = t.a, t.$r); while (r != i)
}

function remove_Change(n) {
    var t = {},
        i, r = this.CQTKEK,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.CQTKEK, t.$r = $I.TSJVQL.JXWJWI($I.XTFDXD, u, i, t), this.CQTKEK = t.a, t.$r); while (r != i)
}