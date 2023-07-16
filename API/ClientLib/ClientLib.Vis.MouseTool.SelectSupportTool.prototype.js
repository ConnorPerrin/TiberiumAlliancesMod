function GetMouseToolType() {
    return $I.PLIBEB.SelectSupport
}

function Move(n, t) {
    var i;
    return this.ICGITD != null && this.ICGITD.LANJTX(n, t), i = this.FTEGQU.KIJEST(), n = i.NHCCYM(n), t = i.ZTMGNL(t), n = Math.max(0, n), t = Math.max(0, t), n = Math.min(n, i.QVMFBM()), t = Math.min(t, i.YFBXGB()), (n != this.AXTZVG || t != this.QIRFCB) && (this.AXTZVG = Math.floor(n), this.QIRFCB = Math.floor(t), this.DMGEPN(), this.MLVTEB = n, this.GJQNWI = t, this.FABETP = this.GAHBKN, this.GNUBVU = this.HAGZKG, this.MZIXOY(), this.EWYDJS != null && this.EWYDJS.YKCVJH(this.GAHBKN, this.HAGZKG)), !0
}

function UpdateMouseCursor() {
    var n = this.FTEGQU.KIJEST();
    this.GAHBKN = Math.floor(this.AXTZVG / n.VVGOEM());
    this.HAGZKG = Math.floor(this.QIRFCB / n.MWRYXH())
}

function UpdateToolTip() {}

function KeyDown() {}

function KeyUp() {}

function Down() {
    return !0
}

function Up(n, t, i) {
    return this.KYVVAH != null && this.KYVVAH.WKIGJZ(n, t, i), i == "right" || !0
}

function SetInfo(n) {
    var t, i;
    this.ZBBMFG = n;
    t = this.ZBBMFG.CZQRWF();
    this.HGJOXH = t.r;
    this.SNVETB = $I.QOKGWR.WBFJPT().VDQLZP(t.i.white + ".png");
    this.EVZJER = t.i.white + ".png";
    i = $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI();
    this.HDACAA = i.OFYSUK();
    this.XTOMIQ = i.FQVDES();
    this.GAHBKN = this.HDACAA;
    this.HAGZKG = this.XTOMIQ;
    this.ZBBMFG.PZPSIS(!1)
}

function Activate() {
    var n = this.FTEGQU.KIJEST().WHQQMY(),
        t, i, r;
    this.FTEGQU.ENNVKQ($I.HYIXRB.Default);
    t = this.FTEGQU.KIJEST().PXZWPJ(0);
    this.DATFNY = t.m_OffsetX;
    this.BAVQTF = t.m_OffsetY;
    this.IOJWFC = $I.QOKGWR.WBFJPT().VDQLZP("battleview/neutral/gui/support_diamond_start.png");
    this.PSESWE = "battleview/neutral/gui/support_diamond_start.png";
    this.LDPNZM = $I.QOKGWR.WBFJPT().VDQLZP("battleview/neutral/gui/support_diamond_start_disabled.png");
    this.FJIRQS = "battleview/neutral/gui/support_diamond_start_disabled.png";
    this.WWHGKG = $I.QOKGWR.WBFJPT().VDQLZP("battleview/neutral/gui/support_diamond_end.png");
    this.EZMIXI = "battleview/neutral/gui/support_diamond_end.png";
    this.LFEMPZ = $I.QOKGWR.WBFJPT().VDQLZP("battleview/neutral/gui/support_diamond_end_disabled.png");
    this.UZZKCR = "battleview/neutral/gui/support_diamond_end_disabled.png";
    this.ZKSDJQ = this.FTEGQU.AYELRA().VVGOEM();
    this.QTKMCR = this.FTEGQU.AYELRA().MWRYXH();
    this.EUDITY == null && (i = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.sdve), this.EUDITY = (new $I.ZFKFPU).CBDLKU(this.FTEGQU.AYELRA().WHQQMY(), i, (this.AXTZVG + this.ZKSDJQ) * this.FTEGQU.AYELRA().VVGOEM(), (this.QIRFCB + this.QTKMCR) * this.FTEGQU.AYELRA().MWRYXH(), null), this.EUDITY.TYDVYV(16), this.EUDITY.QOUDUX(1));
    this.EUDITY.ZTDRHV();
    this.VGMIAE == null && (r = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.sdie), this.VGMIAE = (new $I.ZFKFPU).CBDLKU(this.FTEGQU.AYELRA().WHQQMY(), r, (this.AXTZVG + this.ZKSDJQ) * this.FTEGQU.AYELRA().VVGOEM(), (this.QIRFCB + this.QTKMCR) * this.FTEGQU.AYELRA().MWRYXH(), null), this.VGMIAE.TYDVYV(16), this.VGMIAE.QOUDUX(1));
    this.VGMIAE.ZTDRHV();
    this.LKDRJV = n.TDBBHP("shape", null);
    this.LKDRJV.TYDVYV(16);
    this.LKDRJV.QOUDUX(2);
    n.UVSZDF(this.LKDRJV);
    this.KEGTCZ = n.TDBBHP("image", null);
    this.KEGTCZ.TYDVYV(16);
    this.KEGTCZ.QOUDUX(2);
    n.UVSZDF(this.KEGTCZ);
    this.ZDHBVZ = n.TDBBHP("image", null);
    this.ZDHBVZ.TYDVYV(16);
    this.ZDHBVZ.QOUDUX(2);
    n.UVSZDF(this.ZDHBVZ);
    this.EKUJIQ = n.TDBBHP("image", null);
    this.EKUJIQ.BMIJEH(this.SNVETB.w);
    this.EKUJIQ.NQJJZY(this.SNVETB.h);
    this.EKUJIQ.PTVNAR(this.EVZJER);
    this.FIBKQY = n.TDBBHP("unscalegroup", null);
    this.FIBKQY.TYDVYV(16);
    this.FIBKQY.QOUDUX(3);
    this.FIBKQY.BMIJEH(this.SNVETB.w);
    this.FIBKQY.NQJJZY(this.SNVETB.h);
    this.FIBKQY.UVSZDF(this.EKUJIQ);
    this.AXTZVG = -1;
    this.QIRFCB = -1;
    this.FABETP = -1;
    this.GNUBVU = -1;
    this.MLVTEB = -1;
    this.GJQNWI = -1;
    this.NJQMKT == null && (this.NJQMKT = n.UHZXOZ("pen"), this.NJQMKT != null && (this.NJQMKT.NJXPRI("#00c2f8"), this.NJQMKT.RPMLTV(3)));
    this.BFQNOB == null && (this.BFQNOB = n.UHZXOZ("pen"), this.BFQNOB != null && (this.BFQNOB.NJXPRI("#FF0000"), this.BFQNOB.RPMLTV(3)));
    this.VHQUSH != null && this.VHQUSH.FOWLVG()
}

function Deactivate() {
    var n;
    this.FTEGQU.ENNVKQ($I.HYIXRB.Default);
    n = this.FTEGQU.KIJEST();
    this.EUDITY != null && (this.EUDITY.NSFOQM(), this.EUDITY = null);
    this.VGMIAE != null && (this.VGMIAE.NSFOQM(), this.VGMIAE = null);
    this.LKDRJV != null && (n.WHQQMY().NEHMEK(this.LKDRJV), this.LKDRJV = null);
    this.KEGTCZ != null && (n.WHQQMY().NEHMEK(this.KEGTCZ), this.KEGTCZ = null);
    this.ZDHBVZ != null && (n.WHQQMY().NEHMEK(this.ZDHBVZ), this.ZDHBVZ = null);
    this.FIBKQY != null && (n.WHQQMY().NEHMEK(this.FIBKQY), this.FIBKQY = null);
    this.MQGEUF();
    this.ZBBMFG.PZPSIS(!0);
    this.TNHEWM != null && this.TNHEWM.FOWLVG()
}

function DeactivateToolTip() {}

function VisUpdate() {
    var n = (new Date).getTime();
    this.EUDITY != null && this.EUDITY.OCAAHR(n);
    this.VGMIAE != null && this.VGMIAE.OCAAHR(n)
}

function TouchStart() {
    return !1
}

function TouchMove() {
    return !1
}

function TouchEnd(n) {
    return n.length == 0 || this.XNSDOS(n[0].X, n[0].Y)
}

function TouchCancel() {
    return !1
}

function add_OnCellChange(n) {
    var t = {},
        i, r = this.EWYDJS,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.EWYDJS, t.$r = $I.TSJVQL.JXWJWI($I.XNUOGC, u, i, t), this.EWYDJS = t.a, t.$r); while (r != i)
}

function remove_OnCellChange(n) {
    var t = {},
        i, r = this.EWYDJS,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.EWYDJS, t.$r = $I.TSJVQL.JXWJWI($I.XNUOGC, u, i, t), this.EWYDJS = t.a, t.$r); while (r != i)
}

function add_OnMouseMove(n) {
    var t = {},
        i, r = this.ICGITD,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.ICGITD, t.$r = $I.TSJVQL.JXWJWI($I.PEPXQK, u, i, t), this.ICGITD = t.a, t.$r); while (r != i)
}

function remove_OnMouseMove(n) {
    var t = {},
        i, r = this.ICGITD,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.ICGITD, t.$r = $I.TSJVQL.JXWJWI($I.PEPXQK, u, i, t), this.ICGITD = t.a, t.$r); while (r != i)
}

function add_OnMouseUp(n) {
    var t = {},
        i, r = this.KYVVAH,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.KYVVAH, t.$r = $I.TSJVQL.JXWJWI($I.DYSLHG, u, i, t), this.KYVVAH = t.a, t.$r); while (r != i)
}

function remove_OnMouseUp(n) {
    var t = {},
        i, r = this.KYVVAH,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.KYVVAH, t.$r = $I.TSJVQL.JXWJWI($I.DYSLHG, u, i, t), this.KYVVAH = t.a, t.$r); while (r != i)
}

function add_OnActivate(n) {
    var t = {},
        i, r = this.VHQUSH,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.VHQUSH, t.$r = $I.TSJVQL.JXWJWI($I.UGCDUV, u, i, t), this.VHQUSH = t.a, t.$r); while (r != i)
}

function remove_OnActivate(n) {
    var t = {},
        i, r = this.VHQUSH,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.VHQUSH, t.$r = $I.TSJVQL.JXWJWI($I.UGCDUV, u, i, t), this.VHQUSH = t.a, t.$r); while (r != i)
}

function add_OnDeactivate(n) {
    var t = {},
        i, r = this.TNHEWM,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.TNHEWM, t.$r = $I.TSJVQL.JXWJWI($I.VXCILA, u, i, t), this.TNHEWM = t.a, t.$r); while (r != i)
}

function remove_OnDeactivate(n) {
    var t = {},
        i, r = this.TNHEWM,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.TNHEWM, t.$r = $I.TSJVQL.JXWJWI($I.VXCILA, u, i, t), this.TNHEWM = t.a, t.$r); while (r != i)
}