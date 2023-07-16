function GetMouseToolType() {
    return $I.PLIBEB.Select
}

function GetCurrentObjects() {
    return this.BUVPNS
}

function Move(n, t) {
    var h = this.CSNJWU.KIJEST(),
        i = this.CSNJWU.KIQLUA(n, t),
        r, e, u, o, f, s;
    if (h.KITAZE(n, t), this.BUVPNS != null) {
        if (this.IRZZMI(i, this.BUVPNS)) {
            for (r = 0; r < this.BUVPNS.l.length; r++) e = this.BUVPNS.l[r], e != null && e.KITAZE(n, t);
            return !0
        }
        for (u = 0; u < this.BUVPNS.l.length; u++) o = this.BUVPNS.l[u], o != null && o.EHXSOK(n, t)
    }
    for (f = 0; f < i.l.length; f++) s = i.l[f], s != null && s.SFVLRN(n, t);
    return this.BUVPNS = i, this.CSNJWU.KJXWSG(), !0
}

function KeyDown() {}

function KeyUp() {}

function Down(n, t) {
    return this.QUPZXE = this.CSNJWU.KIQLUA(n, t), !0
}

function Up(n, t, i) {
    var u, r, e, o, f;
    if (i == "right" && this.CSNJWU.AGHKMD() != null) this.CSNJWU.AGHKMD().AVAVVF(n, t);
    else {
        if (u = this.CSNJWU.KIQLUA(n, t), this.IRZZMI(u, this.QUPZXE)) {
            if (r = null, u.l.length > 0)
                for (r = u.l[0], e = 1; e < u.l.length; e++) u.l[e].VJTHAF() > r.VJTHAF() && (r = u.l[e]);
            if (o = !1, r != null && (r.AXKPJR() == $I.CDNXVQ.ArmyUnitType || r.AXKPJR() == $I.CDNXVQ.DefenseUnitType) && this.CSNJWU.QIBGFH() == $I.HYIXRB.Move && (f = r, f.YWEVPV().ZHIRJH() == $I.ZNGMPE.Garrison && f.YWEVPV().KGLYJZ() != null)) {
                var s = $I.QOKGWR.WBFJPT().VDQLZP(f.YWEVPV().KGLYJZ().YBCOGL().gi),
                    l = this.CSNJWU.KIJEST().NHCCYM(n),
                    h = this.CSNJWU.KIJEST().ZTMGNL(t),
                    c = l + this.CSNJWU.KIJEST().VVGOEM(),
                    a = c - s.w,
                    v = h + s.h;
                n >= a && n < c && t >= h && t < v && ($I.GGTBLR.WYVOOQ($I.PCSBNG.BYTXHT, f.YWEVPV().KGLYJZ(), !1) != null && this.CSNJWU.CWOVDH(19, f), o = !0)
            }
            o || this.CSNJWU.NFJTBF(r)
        }
        this.CSNJWU.KIJEST().GWMXSV(n, t, i)
    }
    return this.QUPZXE = null, !0
}

function Activate() {
    $I.ILHIOR.GILABD().QIBGFH() == $I.HYIXRB.Default && this.CSNJWU.KIJEST().DZVOAR().ETAIBN("default")
}

function Deactivate() {
    this.QUPZXE = null
}

function VisUpdate() {}

function TouchStart() {
    return !1
}

function TouchMove() {
    return !1
}

function TouchEnd() {
    return !1
}

function TouchCancel() {
    return !1
}