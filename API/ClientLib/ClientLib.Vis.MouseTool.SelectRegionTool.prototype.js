function GetMouseToolType() {
    return $I.PLIBEB.SelectRegion
}

function Move(n, t) {
    var i, r, u, f, e;
    if (this.XLXRQT != null && this.XLXRQT.LANJTX(n, t), i = this.MLAVLS.KIQLUA(n, t), this.NDHCGP = Math.floor(Math.floor(n) / this.MLAVLS.AYELRA().VVGOEM()), this.UJLTCV = Math.floor(Math.floor(t) / this.MLAVLS.AYELRA().MWRYXH()), this.BULGVD != null)
        for (r = 0; r < this.BULGVD.l.length; r++) u = this.BULGVD.l[r], u == null || i.l.indexOf(u) != -1 || u.EHXSOK(this.NDHCGP, this.UJLTCV);
    for (f = 0; f < i.l.length; f++) e = i.l[f], e == null || this.BULGVD != null && this.BULGVD.l.indexOf(e) != -1 || e.SFVLRN(this.NDHCGP, this.UJLTCV);
    return this.BULGVD = i, this.MLAVLS.KJXWSG(), !0
}

function KeyDown() {}

function KeyUp() {}

function Down(n, t) {
    return this.ZMXSJF != null && this.ZMXSJF.LANJTX(n, t), this.OWVODH = this.MLAVLS.KIQLUA(n, t), !0
}

function Up(n, t, i) {
    var u, s, h, c, f, e, r, o;
    return this.HSAKZL != null && this.HSAKZL.WKIGJZ(n, t, i), i == "right" && this.MLAVLS.AGHKMD() != null ? this.MLAVLS.AGHKMD().AVAVVF(n, t) : (u = this.MLAVLS.KIQLUA(n, t), s = 0, this.IRZZMI(u, this.OWVODH) && (h = Math.floor(Math.floor(n) / this.MLAVLS.AYELRA().VVGOEM()), c = Math.floor(Math.floor(t) / this.MLAVLS.AYELRA().MWRYXH()), u.l.length > 1 ? u.l.length > s ? (f = u.l[s], (f.AXKPJR() == $I.CDNXVQ.RegionHubServer || f.AXKPJR() == $I.CDNXVQ.RegionHubControl || f.AXKPJR() == $I.CDNXVQ.RegionHubCenter) && (e = f, (n < e.SXWGQE() || n > e.SXWGQE() + e.YIKDBL() * this.MLAVLS.AYELRA().VVGOEM() || t < e.FFTZJC() || t > e.FFTZJC() + e.KIRXIX() * this.MLAVLS.AYELRA().MWRYXH()) && (f = null)), this.MLAVLS.NFJTBF(f)) : this.MLAVLS.NFJTBF(null) : (this.YIJFAF.XOHVCR(c << 16 | h) && this.YIJFAF.XUDPAL(c << 16 | h), r = null, u.l.length > 0 && (r = u.l[0], (r.AXKPJR() == $I.CDNXVQ.RegionHubServer || r.AXKPJR() == $I.CDNXVQ.RegionHubControl || r.AXKPJR() == $I.CDNXVQ.RegionHubCenter) && (o = r, (n < o.SXWGQE() || n > o.SXWGQE() + o.YIKDBL() * this.MLAVLS.AYELRA().VVGOEM() || t < o.FFTZJC() || t > o.FFTZJC() + o.KIRXIX() * this.MLAVLS.AYELRA().MWRYXH()) && (r = null))), this.MLAVLS.NFJTBF(r)))), this.OWVODH = null, !0
}

function Activate() {
    $I.ILHIOR.GILABD().QIBGFH() == $I.HYIXRB.Default && this.MLAVLS.KIJEST().DZVOAR().ETAIBN("default");
    this.NDHCGP = -1;
    this.UJLTCV = -1
}

function Deactivate() {
    this.OWVODH = null
}

function VisUpdate() {}

function TouchStart(n) {
    var t = n[0].X,
        i = n[0].Y;
    return this.ZMXSJF != null && this.ZMXSJF.LANJTX(t, i), this.OWVODH = this.MLAVLS.KIQLUA(t, i), !0
}

function TouchMove() {
    return !0
}

function TouchEnd(n) {
    var i = n[0].X,
        r = n[0].Y,
        u, s, h, c, f, e, t, o;
    return this.HSAKZL != null && this.HSAKZL.WKIGJZ(i, r, ""), u = this.MLAVLS.KIQLUA(i, r), s = 0, this.IRZZMI(u, this.OWVODH) && (h = Math.floor(Math.floor(i) / this.MLAVLS.AYELRA().VVGOEM()), c = Math.floor(Math.floor(r) / this.MLAVLS.AYELRA().MWRYXH()), u.l.length > 1 ? u.l.length > s ? (f = u.l[s], (f.AXKPJR() == $I.CDNXVQ.RegionHubServer || f.AXKPJR() == $I.CDNXVQ.RegionHubControl || f.AXKPJR() == $I.CDNXVQ.RegionHubCenter) && (e = f, (i < e.SXWGQE() || i > e.SXWGQE() + e.YIKDBL() * this.MLAVLS.AYELRA().VVGOEM() || r < e.FFTZJC() || r > e.FFTZJC() + e.KIRXIX() * this.MLAVLS.AYELRA().MWRYXH()) && (f = null)), this.MLAVLS.NFJTBF(f)) : this.MLAVLS.NFJTBF(null) : (this.YIJFAF.XOHVCR(c << 16 | h) && this.YIJFAF.XUDPAL(c << 16 | h), t = null, u.l.length > 0 && (t = u.l[0], (t.AXKPJR() == $I.CDNXVQ.RegionHubServer || t.AXKPJR() == $I.CDNXVQ.RegionHubControl || t.AXKPJR() == $I.CDNXVQ.RegionHubCenter) && (o = t, (i < o.SXWGQE() || i > o.SXWGQE() + o.YIKDBL() * this.MLAVLS.AYELRA().VVGOEM() || r < o.FFTZJC() || r > o.FFTZJC() + o.KIRXIX() * this.MLAVLS.AYELRA().MWRYXH()) && (t = null))), (!this.FEMLPP || this.FEMLPP && t != null && t.AXKPJR() == this.AFJBFY) && this.MLAVLS.NFJTBF(t))), this.OWVODH = null, !0
}

function TouchCancel() {
    return !1
}

function get_ObjectSelectionFilter() {
    return this.FEMLPP ? this.AFJBFY : -1
}

function set_ObjectSelectionFilter(n) {
    this.FEMLPP = n != -1;
    n >= 0 && (this.AFJBFY = n);
    this.MLAVLS.AGHKMD() != null && this.MLAVLS.AGHKMD().AXKPJR() != this.AFJBFY && this.MLAVLS.NFJTBF(null)
}

function add_OnContextMenu(n) {
    var t = {},
        i, r = this.ZZYNJN,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.ZZYNJN, t.$r = $I.TSJVQL.JXWJWI($I.OIIXET, u, i, t), this.ZZYNJN = t.a, t.$r); while (r != i)
}

function remove_OnContextMenu(n) {
    var t = {},
        i, r = this.ZZYNJN,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.ZZYNJN, t.$r = $I.TSJVQL.JXWJWI($I.OIIXET, u, i, t), this.ZZYNJN = t.a, t.$r); while (r != i)
}

function add_OnMouseUp(n) {
    var t = {},
        i, r = this.HSAKZL,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.HSAKZL, t.$r = $I.TSJVQL.JXWJWI($I.DYSLHG, u, i, t), this.HSAKZL = t.a, t.$r); while (r != i)
}

function remove_OnMouseUp(n) {
    var t = {},
        i, r = this.HSAKZL,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.HSAKZL, t.$r = $I.TSJVQL.JXWJWI($I.DYSLHG, u, i, t), this.HSAKZL = t.a, t.$r); while (r != i)
}

function add_OnMouseDown(n) {
    var t = {},
        i, r = this.ZMXSJF,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.ZMXSJF, t.$r = $I.TSJVQL.JXWJWI($I.VHKEDR, u, i, t), this.ZMXSJF = t.a, t.$r); while (r != i)
}

function remove_OnMouseDown(n) {
    var t = {},
        i, r = this.ZMXSJF,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.ZMXSJF, t.$r = $I.TSJVQL.JXWJWI($I.VHKEDR, u, i, t), this.ZMXSJF = t.a, t.$r); while (r != i)
}

function add_OnMouseMove(n) {
    var t = {},
        i, r = this.XLXRQT,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.XLXRQT, t.$r = $I.TSJVQL.JXWJWI($I.PEPXQK, u, i, t), this.XLXRQT = t.a, t.$r); while (r != i)
}

function remove_OnMouseMove(n) {
    var t = {},
        i, r = this.XLXRQT,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.XLXRQT, t.$r = $I.TSJVQL.JXWJWI($I.PEPXQK, u, i, t), this.XLXRQT = t.a, t.$r); while (r != i)
}