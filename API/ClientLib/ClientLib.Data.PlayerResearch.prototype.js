function GetResearchItemListByType(n) {
    var t = {},
        i = null;
    return this.ASVAJS != null && (t.$r = this.ASVAJS.ZOXRAI(n, t), i = t.b, t.$r), i
}

function IsResearchMinLevelAvailable(n, t) {
    var i = !1,
        r = this.QGCDZD(n);
    return r != null && (i = r.REBAFD() >= t), i
}

function GetResearchItemFomMdbId(n) {
    var r = {},
        f = null,
        u, t, i;
    if (this.ASVAJS != null) {
        if ((u = $I.BUEVKL.QGLUJV().ITRZSX(n), u == null) || (t = null, !(r.$r = this.ASVAJS.ZOXRAI(u.t, r), t = r.b, r.$r))) return f;
        for (i = 0; i < t.l.length; i++)
            if (t.l[i].NPWBYT() == n) return t.l[i]
    }
    return f
}

function ResearchTech(n) {
    var r = $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI(),
        t, i;
    return r == null ? !1 : (t = !1, i = this.QGCDZD(n), i != null && (t = i.HIBGDQ(r)), t && (this.XPGXRQ != null && this.XPGXRQ.FOWLVG(), this.LEMLBU()), t)
}

function add_Change(n) {
    var t = {},
        i, r = this.XPGXRQ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.XPGXRQ, t.$r = $I.TSJVQL.JXWJWI($I.SBAWXN, u, i, t), this.XPGXRQ = t.a, t.$r); while (r != i)
}

function remove_Change(n) {
    var t = {},
        i, r = this.XPGXRQ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.XPGXRQ, t.$r = $I.TSJVQL.JXWJWI($I.SBAWXN, u, i, t), this.XPGXRQ = t.a, t.$r); while (r != i)
}