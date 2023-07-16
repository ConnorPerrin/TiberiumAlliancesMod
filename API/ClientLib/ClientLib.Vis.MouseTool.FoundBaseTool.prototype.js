function GetMouseToolType() {
    return $I.PLIBEB.FoundBase
}

function Move(n, t) {
    var i, r;
    return this.ONKNYD != null && this.ONKNYD.LANJTX(n, t), i = this.WVIHYH.KIJEST(), n = i.NHCCYM(n), t = i.ZTMGNL(t), n = Math.max(0, n), t = Math.max(0, t), n = Math.min(n, i.QVMFBM()), t = Math.min(t, i.YFBXGB()), (n != this.AZUFTI || t != this.HOQXJI) && (this.AZUFTI = Math.floor(n), this.HOQXJI = Math.floor(t), this.EALLDL = Math.floor(this.AZUFTI / i.VVGOEM()), this.FWIITL = Math.floor(this.HOQXJI / i.MWRYXH()), this.MZIXOY(), this.JDNVJL != -1 && (this.WVIHYH.AYELRA().JXHLFC(this.JDNVJL), this.JDNVJL = -1), this.XHYABN && (r = $I.CVRAYR.VAMLQD().UXQPUS().SZMQKX(this.EALLDL, this.FWIITL, this.RYRHMI + 2, this.ZIWXIF, this.RYRHMI, this.TRFJIM), this.JDNVJL = this.WVIHYH.AYELRA().MDASEW(this.EALLDL, this.FWIITL, this.RYRHMI + 1, r)), this.DTSPMN != null && this.DTSPMN.YKCVJH(this.EALLDL, this.FWIITL)), !0
}

function Check() {
    var t = $I.CVRAYR.VAMLQD().UXQPUS().JHDPVC(this.EALLDL, this.FWIITL, this.QKBCJN, this.PNBOAK),
        n;
    this.XHYABN = t == $I.AAVPRT.OK;
    this.AYFPPV != null && (this.AYFPPV.EVVIKY(this.AZUFTI + this.FGQAJK), this.AYFPPV.WJAECQ(this.HOQXJI + this.QVKQCP));
    this.UECMHH != null && (this.UECMHH.EVVIKY(this.AZUFTI + this.FGQAJK), this.UECMHH.WJAECQ(this.HOQXJI + this.QVKQCP));
    this.MLYZRD != null && (this.MLYZRD.EVVIKY(this.AZUFTI + this.FGQAJK), this.MLYZRD.WJAECQ(this.HOQXJI + this.QVKQCP));
    this.BVWTGP != null && (this.BVWTGP.EVVIKY(this.AZUFTI + this.FGQAJK), this.BVWTGP.WJAECQ(this.HOQXJI + this.QVKQCP));
    this.XHYABN ? (n = $I.CVRAYR.VAMLQD().RWLPVY().GRKIWK(this.EALLDL, this.FWIITL), n == null || n.RKSLJD() != $I.BLNKMP.Crater || n.OFYSUK() + 1 != this.EALLDL || n.FQVDES() + 1 != this.FWIITL || $I.CVRAYR.VAMLQD().ONGTRQ().GFRTHD() ? (this.BVWTGP.ZTDRHV(), this.MLYZRD.JDCWXW()) : (this.MLYZRD.ZTDRHV(), this.BVWTGP.JDCWXW()), this.UECMHH.ZTDRHV()) : (this.UECMHH.JDCWXW(), this.MLYZRD.ZTDRHV(), this.BVWTGP.ZTDRHV())
}

function Activate(n) {
    var t, h, i, u, f, r, e, o, s;
    $I.CVRAYR.VAMLQD().ZBVLXL().SAECGR((new $I.NDAYZG).TFDQYD(this, this.MTVREF));
    h = n;
    $I.CVRAYR.VAMLQD().UXQPUS().KABQWF((new $I.ZDCDEA).TFDQYD(this, this.TUYYWZ));
    $I.CVRAYR.VAMLQD().RWLPVY().DJNLVM((new $I.HCABEE).TFDQYD(this, this.YYWEAB));
    $I.CVRAYR.VAMLQD().RWLPVY().QVJJKS((new $I.HCABEE).TFDQYD(this, this.YYWEAB));
    $I.CVRAYR.VAMLQD().RWLPVY().UFCTOZ((new $I.HCABEE).TFDQYD(this, this.YYWEAB));
    this.YMIOMK = this.WVIHYH.KIJEST();
    this.NYIRNY = this.YMIOMK.WHQQMY();
    i = this.WVIHYH.KIJEST().WHQQMY();
    (t = $I.BUEVKL.QGLUJV().VXAMCA().worldcities[$I.CVRAYR.VAMLQD().ONGTRQ().WMEKEJ()], t == undefined ? !1 : !0) && (u = $I.CVRAYR.VAMLQD().ZBVLXL().KJTSYE(1, $I.CVRAYR.VAMLQD().ONGTRQ().WMEKEJ()), this.AYFPPV != null && this.AYFPPV.NSFOQM(), f = $I.BUEVKL.QGLUJV().WJVSOL(t.leveleffects[u]), this.AYFPPV = (new $I.ZFKFPU).CBDLKU(this.WVIHYH.AYELRA().WHQQMY(), f, (this.AZUFTI + 1) * this.WVIHYH.AYELRA().VVGOEM(), (this.HOQXJI + 1) * this.WVIHYH.AYELRA().MWRYXH(), null), this.AYFPPV.TYDVYV(16), this.AYFPPV.QOUDUX(0));
    r = this.WVIHYH.KIJEST().PXZWPJ(0);
    this.FGFNGC = r.m_OffsetX;
    this.KUSSEC = r.m_OffsetY;
    this.FGQAJK = this.WVIHYH.AYELRA().VVGOEM();
    this.QVKQCP = this.WVIHYH.AYELRA().MWRYXH();
    this.MLYZRD == null && (e = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.dve), this.MLYZRD = (new $I.ZFKFPU).CBDLKU(this.WVIHYH.AYELRA().WHQQMY(), e, (this.AZUFTI + this.FGQAJK) * this.WVIHYH.AYELRA().VVGOEM(), (this.HOQXJI + this.QVKQCP) * this.WVIHYH.AYELRA().MWRYXH(), null), this.MLYZRD.TYDVYV(16), this.MLYZRD.QOUDUX(1));
    this.MLYZRD.ZTDRHV();
    this.BVWTGP == null && (o = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.dc), this.BVWTGP = (new $I.ZFKFPU).CBDLKU(this.WVIHYH.AYELRA().WHQQMY(), o, (this.AZUFTI + this.FGQAJK) * this.WVIHYH.AYELRA().VVGOEM(), (this.HOQXJI + this.QVKQCP) * this.WVIHYH.AYELRA().MWRYXH(), null), this.BVWTGP.TYDVYV(16), this.BVWTGP.QOUDUX(1));
    this.BVWTGP.ZTDRHV();
    this.UECMHH == null && (s = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.die), this.UECMHH = (new $I.ZFKFPU).CBDLKU(this.WVIHYH.AYELRA().WHQQMY(), s, (this.AZUFTI + this.FGQAJK) * this.WVIHYH.AYELRA().VVGOEM(), (this.HOQXJI + this.QVKQCP) * this.WVIHYH.AYELRA().MWRYXH(), null), this.UECMHH.TYDVYV(16), this.UECMHH.QOUDUX(1));
    this.UECMHH.ZTDRHV();
    this.AZUFTI = -1;
    this.HOQXJI = -1;
    this.EALLDL = -1;
    this.FWIITL = -1;
    this.KHNCHW == null && (this.KHNCHW = i.UHZXOZ("pen"), this.KHNCHW != null && (this.KHNCHW.NJXPRI("#00FF00"), this.KHNCHW.RPMLTV(3)));
    this.GQAAVT == null && (this.GQAAVT = i.UHZXOZ("pen"), this.GQAAVT != null && (this.GQAAVT.NJXPRI("#FF0000"), this.GQAAVT.RPMLTV(3)));
    this.QKBCJN = $I.CVRAYR.VAMLQD().ONGTRQ().UQGPFX();
    this.PNBOAK = $I.CVRAYR.VAMLQD().ONGTRQ().SZZNBJ();
    this.ZIWXIF = this.PNBOAK > 0 ? 536870912 | this.PNBOAK : this.QKBCJN;
    this.RYRHMI = 2;
    this.TRFJIM = 1;
    this.ZLDFLA();
    this.YDZIXY != null && this.YDZIXY.FOWLVG()
}

function Deactivate() {
    var r, t, n, i;
    $I.CVRAYR.VAMLQD().ZBVLXL().WCOAYG((new $I.NDAYZG).TFDQYD(this, this.MTVREF));
    r = this.WVIHYH.KIJEST();
    $I.CVRAYR.VAMLQD().UXQPUS().UEXQNX((new $I.ZDCDEA).TFDQYD(this, this.TUYYWZ));
    $I.CVRAYR.VAMLQD().RWLPVY().TSCFVB((new $I.HCABEE).TFDQYD(this, this.YYWEAB));
    $I.CVRAYR.VAMLQD().RWLPVY().NMAMBB((new $I.HCABEE).TFDQYD(this, this.YYWEAB));
    $I.CVRAYR.VAMLQD().RWLPVY().MBLMHL((new $I.HCABEE).TFDQYD(this, this.YYWEAB));
    this.AYFPPV != null && (this.AYFPPV.NSFOQM(), this.AYFPPV = null);
    this.MLYZRD != null && (this.MLYZRD.NSFOQM(), this.MLYZRD = null);
    this.BVWTGP != null && (this.BVWTGP.NSFOQM(), this.BVWTGP = null);
    this.UECMHH != null && (this.UECMHH.NSFOQM(), this.UECMHH = null);
    this.JDNVJL != -1 && (r.JXHLFC(this.JDNVJL), this.JDNVJL = -1);
    this.XHYABN = !1;
    t = this.OAZSIC.d;
    n = {
        k: null,
        v: null
    };
    for (i in t) n.k = i, n.v = t[i], n.v.BOFXQL() > 0 && this.VNURVP.l.push((new $I.RTVHKJ).NSBVXE((new Date).getTime(), n.v));
    $I.PCMEZM.EYZIBP().PRMHUU((new $I.VMMMQM).TFDQYD(this, this.LFBMHS))
}

function VisUpdate() {
    var i = {},
        t = (new Date).getTime(),
        c, v, h, f, e, o, s, n, r, u;
    if (!this.FQDXXJ) {
        if (this.FGBPSC == -1 ? this.FGBPSC = t : t - this.FGBPSC > this.WIATVJ && (this.AWAAQS++, this.FGBPSC = t), v = $I.CVRAYR.VAMLQD().UXQPUS(), i.$r = this.VYHUVI.ZOXRAI(this.AWAAQS, i), c = i.b, i.$r)
            for (h = c.l, e = 0; e < h.length; e++) f = h[e], o = 0, s = 0, i.$r = $I.NZIFZB.ERRCBM(f, i), s = i.b, o = i.c, i.$r, r = $I.CVRAYR.VAMLQD().UXQPUS().JHDPVC(s, o, this.QKBCJN, this.PNBOAK), this.LNJGNS.GXVKTX(f, r), n = this.WVIHYH.AYELRA().WHQQMY().TDBBHP("box", null), n.TYDVYV(16), n.BMIJEH(this.WVIHYH.AYELRA().VVGOEM()), n.NQJJZY(this.WVIHYH.AYELRA().MWRYXH()), n.EVVIKY(s * this.WVIHYH.AYELRA().VVGOEM()), n.WJAECQ(o * this.WVIHYH.AYELRA().MWRYXH()), n.NJXPRI("#000000"), n.GUAUQN(0), this.WVIHYH.AYELRA().WHQQMY().UVSZDF(n), this.OAZSIC.GXVKTX(f, n), r != $I.AAVPRT.OK && this.NRYLGZ.l.push((new $I.RTVHKJ).NSBVXE(t, n));
        this.VYHUVI.XUDPAL(this.AWAAQS);
        this.FQDXXJ = this.VYHUVI.c == 0
    }
    for (r = this.NRYLGZ.l.length - 1; r >= 0; r--) {
        var n = this.NRYLGZ.l[r],
            y = Math.min(t - n.k, this.RULLVM),
            p = this.NRYLGZ.l[r],
            l = p.v;
        l.GUAUQN(y * .5 / this.RULLVM);
        l.BOFXQL() == .5 && this.NRYLGZ.WILRBK(this.NRYLGZ.l[r])
    }
    for (u = this.VNURVP.l.length - 1; u >= 0; u--) {
        var w = this.VNURVP.l[u],
            b = Math.min(t - w.k, this.RULLVM),
            k = this.VNURVP.l[u],
            a = k.v;
        a.GUAUQN(.5 - b * .5 / this.RULLVM);
        a.BOFXQL() == 0 && this.VNURVP.WILRBK(this.VNURVP.l[u])
    }
    this.AYFPPV != null && this.AYFPPV.OCAAHR(t);
    this.MLYZRD != null && this.MLYZRD.OCAAHR(t);
    this.BVWTGP != null && this.BVWTGP.OCAAHR(t);
    this.UECMHH != null && this.UECMHH.OCAAHR(t)
}

function KeyDown() {}

function KeyUp() {}

function Down() {
    return !0
}

function Up(n, t, i) {
    return this.MBTVGO != null && this.MBTVGO.WKIGJZ(n, t, i), i == "right" || !0
}

function TouchStart() {
    return !1
}

function TouchMove() {
    return !1
}

function TouchEnd(n) {
    return this.XNSDOS(n[0].X, n[0].Y)
}

function TouchCancel() {
    return !1
}

function add_OnCellChange(n) {
    var t = {},
        i, r = this.DTSPMN,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.DTSPMN, t.$r = $I.TSJVQL.JXWJWI($I.XNUOGC, u, i, t), this.DTSPMN = t.a, t.$r); while (r != i)
}

function remove_OnCellChange(n) {
    var t = {},
        i, r = this.DTSPMN,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.DTSPMN, t.$r = $I.TSJVQL.JXWJWI($I.XNUOGC, u, i, t), this.DTSPMN = t.a, t.$r); while (r != i)
}

function add_OnMouseMove(n) {
    var t = {},
        i, r = this.ONKNYD,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.ONKNYD, t.$r = $I.TSJVQL.JXWJWI($I.PEPXQK, u, i, t), this.ONKNYD = t.a, t.$r); while (r != i)
}

function remove_OnMouseMove(n) {
    var t = {},
        i, r = this.ONKNYD,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.ONKNYD, t.$r = $I.TSJVQL.JXWJWI($I.PEPXQK, u, i, t), this.ONKNYD = t.a, t.$r); while (r != i)
}

function add_OnMouseUp(n) {
    var t = {},
        i, r = this.MBTVGO,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.MBTVGO, t.$r = $I.TSJVQL.JXWJWI($I.DYSLHG, u, i, t), this.MBTVGO = t.a, t.$r); while (r != i)
}

function remove_OnMouseUp(n) {
    var t = {},
        i, r = this.MBTVGO,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.MBTVGO, t.$r = $I.TSJVQL.JXWJWI($I.DYSLHG, u, i, t), this.MBTVGO = t.a, t.$r); while (r != i)
}

function add_OnActivate(n) {
    var t = {},
        i, r = this.YDZIXY,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.YDZIXY, t.$r = $I.TSJVQL.JXWJWI($I.UGCDUV, u, i, t), this.YDZIXY = t.a, t.$r); while (r != i)
}

function remove_OnActivate(n) {
    var t = {},
        i, r = this.YDZIXY,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.YDZIXY, t.$r = $I.TSJVQL.JXWJWI($I.UGCDUV, u, i, t), this.YDZIXY = t.a, t.$r); while (r != i)
}

function add_OnDeactivate(n) {
    var t = {},
        i, r = this.JWADOK,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.JWADOK, t.$r = $I.TSJVQL.JXWJWI($I.VXCILA, u, i, t), this.JWADOK = t.a, t.$r); while (r != i)
}

function remove_OnDeactivate(n) {
    var t = {},
        i, r = this.JWADOK,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.JWADOK, t.$r = $I.TSJVQL.JXWJWI($I.VXCILA, u, i, t), this.JWADOK = t.a, t.$r); while (r != i)
}