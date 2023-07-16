function GetMouseToolType() {
    return $I.PLIBEB.MoveBase
}

function GetCheckMoveBaseResult(n, t) {
    var i = {},
        r, u = $I.NZIFZB.XKYIRQ(n, t);
    return (i.$r = this.SDAQLM.ZOXRAI(u, i), r = i.b, i.$r) ? r : $I.BSOKEY.FailDistance
}

function Move(n, t) {
    var i, r, u, f;
    return this.CEUBYY != null && this.CEUBYY.LANJTX(n, t), i = this.EMOTCM.KIJEST(), n = i.NHCCYM(n), t = i.ZTMGNL(t), n = Math.max(0, n), t = Math.max(0, t), n = Math.min(n, i.QVMFBM()), t = Math.min(t, i.YFBXGB()), (n != this.ROMBHS || t != this.MYKVPE) && (this.ROMBHS = Math.floor(n), this.MYKVPE = Math.floor(t), this.DMGEPN(), this.INAVQY = n, this.FBVYBF = t, this.WXUXRA = this.ZJTGWB, this.YGMJSH = this.BSHAMQ, this.MZIXOY(), this.IUDHDV != -1 && (this.EMOTCM.AYELRA().JXHLFC(this.IUDHDV), this.IUDHDV = -1), this.DOTBHX != -1 && (this.EMOTCM.AYELRA().JXHLFC(this.DOTBHX), this.DOTBHX = -1), r = $I.CVRAYR.VAMLQD().UXQPUS(), this.VHMTCA ? (this.TOIKYB[1].X = this.ZJTGWB, this.TOIKYB[1].Y = this.BSHAMQ, this.KRCFQJ || (u = r.YSSTWJ(this.OQOCZC, this.GNMBYD, this.IHVKBE + 2, this.TOIKYB), this.IUDHDV = this.EMOTCM.AYELRA().MDASEW(this.OQOCZC, this.GNMBYD, this.IHVKBE + 1, u)), u = r.YSSTWJ(this.ZJTGWB, this.BSHAMQ, this.IHVKBE + 2, this.TOIKYB), this.DOTBHX = this.EMOTCM.AYELRA().MDASEW(this.ZJTGWB, this.BSHAMQ, this.IHVKBE + 1, u)) : this.KRCFQJ || (f = r.SZMQKX(this.OQOCZC, this.GNMBYD, this.IHVKBE + 2, 0, 0, 0), this.IUDHDV = this.EMOTCM.AYELRA().MDASEW(this.OQOCZC, this.GNMBYD, this.IHVKBE + 1, f)), this.AGIGRF != null && this.AGIGRF.YKCVJH(this.ZJTGWB, this.BSHAMQ)), !0
}

function UpdateMouseCursor() {
    var n;
    $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.PXXDNK) != null && (n = this.EMOTCM.KIJEST(), this.ZJTGWB = Math.floor(this.ROMBHS / n.VVGOEM()), this.BSHAMQ = Math.floor(this.MYKVPE / n.MWRYXH()))
}

function KeyDown() {}

function KeyUp() {}

function Down() {
    return !0
}

function Up(n, t, i) {
    return this.UBVVTI != null && this.UBVVTI.WKIGJZ(n, t, i), i == "right" || !0
}

function SetInfo(n) {
    var t = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(n);
    this.AGCNCL = t.CPVNPP();
    this.VOLZAI = t.SZZNBJ();
    this.PXXDNK = t.UQGPFX();
    this.FEMTJB = t.KCWGSH();
    this.OQOCZC = t.OFYSUK();
    this.GNMBYD = t.FQVDES();
    this.KRCFQJ = t.BJTMCR();
    this.IHVKBE = Math.floor(t.KGJHWU());
    this.QNXVXA = Math.floor(t.NAXTSX());
    this.ZJTGWB = this.OQOCZC;
    this.BSHAMQ = this.GNMBYD
}

function Activate(n) {
    var e, t, h, c, r, u, o, l, a, v, f, s, i;
    this.RXRDIN = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(n);
    this.RXRDIN.CJNLZL((new $I.VYKQUV).TFDQYD(this, this.EYRAXV));
    $I.CVRAYR.VAMLQD().UXQPUS().KABQWF((new $I.ZDCDEA).TFDQYD(this, this.TUYYWZ));
    $I.CVRAYR.VAMLQD().RWLPVY().DJNLVM((new $I.HCABEE).TFDQYD(this, this.YYWEAB));
    $I.CVRAYR.VAMLQD().RWLPVY().QVJJKS((new $I.HCABEE).TFDQYD(this, this.YYWEAB));
    $I.CVRAYR.VAMLQD().RWLPVY().UFCTOZ((new $I.HCABEE).TFDQYD(this, this.YYWEAB));
    this.QDNYYS = this.EMOTCM.KIJEST();
    this.VIUQKY = this.QDNYYS.WHQQMY();
    t = this.EMOTCM.KIJEST().WHQQMY();
    (e = $I.BUEVKL.QGLUJV().VXAMCA().worldcities[$I.CVRAYR.VAMLQD().ONGTRQ().WMEKEJ()], e == undefined ? !1 : !0) && (h = $I.CVRAYR.VAMLQD().ZBVLXL().KJTSYE(this.RXRDIN.KCWGSH(), $I.CVRAYR.VAMLQD().ONGTRQ().WMEKEJ()), this.PDWPZN != null && this.PDWPZN.NSFOQM(), c = $I.BUEVKL.QGLUJV().WJVSOL(e.leveleffects[h]), this.PDWPZN = (new $I.ZFKFPU).CBDLKU(this.EMOTCM.AYELRA().WHQQMY(), c, (this.ROMBHS + 1) * this.EMOTCM.AYELRA().VVGOEM(), (this.MYKVPE + 1) * this.EMOTCM.AYELRA().MWRYXH(), null), this.PDWPZN.TYDVYV(16), this.PDWPZN.QOUDUX(0));
    r = null;
    u = null;
    r = "battleview/neutral/gui/move_target_circle_valid.png";
    u = "battleview/neutral/gui/move_target_circle_invalid.png";
    o = this.EMOTCM.KIJEST().PXZWPJ(0);
    this.IZJYYO = o.m_OffsetX;
    this.FQYXOI = o.m_OffsetY;
    this.UHYYYH = $I.QOKGWR.WBFJPT().VDQLZP(r);
    this.BGCIVL = r;
    this.VQQMYI = $I.QOKGWR.WBFJPT().VDQLZP(u);
    this.UYVPVE = u;
    this.ZJGBOW = this.EMOTCM.AYELRA().VVGOEM();
    this.TGDKBC = this.EMOTCM.AYELRA().MWRYXH();
    this.BGZGWM == null && (l = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.dve), this.BGZGWM = (new $I.ZFKFPU).CBDLKU(this.EMOTCM.AYELRA().WHQQMY(), l, (this.ROMBHS + this.ZJGBOW) * this.EMOTCM.AYELRA().VVGOEM(), (this.MYKVPE + this.TGDKBC) * this.EMOTCM.AYELRA().MWRYXH(), null), this.BGZGWM.TYDVYV(16), this.BGZGWM.QOUDUX(1));
    this.BGZGWM.ZTDRHV();
    this.LJAWYZ == null && (a = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.dc), this.LJAWYZ = (new $I.ZFKFPU).CBDLKU(this.EMOTCM.AYELRA().WHQQMY(), a, (this.ROMBHS + this.ZJGBOW) * this.EMOTCM.AYELRA().VVGOEM(), (this.MYKVPE + this.TGDKBC) * this.EMOTCM.AYELRA().MWRYXH(), null), this.LJAWYZ.TYDVYV(16), this.LJAWYZ.QOUDUX(1));
    this.LJAWYZ.ZTDRHV();
    this.KBYIAL == null && (v = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.die), this.KBYIAL = (new $I.ZFKFPU).CBDLKU(this.EMOTCM.AYELRA().WHQQMY(), v, (this.ROMBHS + this.ZJGBOW) * this.EMOTCM.AYELRA().VVGOEM(), (this.MYKVPE + this.TGDKBC) * this.EMOTCM.AYELRA().MWRYXH(), null), this.KBYIAL.TYDVYV(16), this.KBYIAL.QOUDUX(1));
    this.KBYIAL.ZTDRHV();
    this.OWELAC = t.TDBBHP("shape", null);
    this.OWELAC.TYDVYV(16);
    this.OWELAC.QOUDUX(2);
    t.UVSZDF(this.OWELAC);
    this.YJTLHB = t.TDBBHP("image", null);
    this.YJTLHB.TYDVYV(16);
    this.YJTLHB.QOUDUX(2);
    t.UVSZDF(this.YJTLHB);
    this.ROMBHS = -1;
    this.MYKVPE = -1;
    this.WXUXRA = -1;
    this.YGMJSH = -1;
    this.INAVQY = -1;
    this.FBVYBF = -1;
    this.CMKBJI = (new Date).getTime();
    f = $I.CVRAYR.VAMLQD().UXQPUS();
    this.KRCFQJ ? (s = $I.CVRAYR.VAMLQD().FMKUPK().UQGPFX(), i = 0, s == 0 ? (i |= this.AGCNCL & 536870911, i = i) : (i |= s & 536870911, i |= 536870912), this.WCGUIO = i, this.IHVKBE = 2, this.QNXVXA = this.FEMTJB) : (this.WCGUIO = f.GMPNXZ(this.OQOCZC, this.GNMBYD), this.IHVKBE = f.AJQRYV(this.OQOCZC, this.GNMBYD), this.QNXVXA = f.TFCTUB(this.OQOCZC, this.GNMBYD));
    this.TOIKYB[0] = new $I.IUSPNQ;
    this.TOIKYB[0].X = this.OQOCZC;
    this.TOIKYB[0].Y = this.GNMBYD;
    this.TOIKYB[0].Owner = 0;
    this.TOIKYB[0].Weight = 0;
    this.TOIKYB[0].Radius = 0;
    this.TOIKYB[1] = new $I.IUSPNQ;
    this.TOIKYB[1].Owner = this.WCGUIO;
    this.TOIKYB[1].Weight = this.QNXVXA;
    this.TOIKYB[1].Radius = this.IHVKBE;
    this.YTPIUV == null && (this.YTPIUV = t.UHZXOZ("pen"), this.YTPIUV != null && (this.YTPIUV.NJXPRI("#00FD00"), this.YTPIUV.RPMLTV(4)));
    this.WGXBDK == null && (this.WGXBDK = t.UHZXOZ("pen"), this.WGXBDK != null && (this.WGXBDK.NJXPRI("#FF0000"), this.WGXBDK.RPMLTV(4)));
    this.IIZEFX == null && (this.IIZEFX = t.UHZXOZ("pen"), this.IIZEFX != null && (this.IIZEFX.NJXPRI("#a7a7a7"), this.IIZEFX.RPMLTV(2)));
    this.WLFYTR == null && (this.WLFYTR = t.UHZXOZ("pen"), this.WLFYTR != null && (this.WLFYTR.NJXPRI("#e20000"), this.WLFYTR.RPMLTV(2)));
    this.ZOJPTU.AMMYJA();
    this.KXHDFC(this.RXRDIN);
    this.NPKQFM != null && this.NPKQFM.FOWLVG()
}

function Deactivate() {
    var n, i, t, r;
    this.RXRDIN.USDIRU((new $I.VYKQUV).TFDQYD(this, this.EYRAXV));
    $I.CVRAYR.VAMLQD().UXQPUS().UEXQNX((new $I.ZDCDEA).TFDQYD(this, this.TUYYWZ));
    $I.CVRAYR.VAMLQD().RWLPVY().TSCFVB((new $I.HCABEE).TFDQYD(this, this.YYWEAB));
    $I.CVRAYR.VAMLQD().RWLPVY().NMAMBB((new $I.HCABEE).TFDQYD(this, this.YYWEAB));
    $I.CVRAYR.VAMLQD().RWLPVY().MBLMHL((new $I.HCABEE).TFDQYD(this, this.YYWEAB));
    this.EMOTCM.ENNVKQ($I.HYIXRB.Default);
    n = this.EMOTCM.KIJEST();
    this.PDWPZN != null && (this.PDWPZN.NSFOQM(), this.PDWPZN = null);
    this.BGZGWM != null && (this.BGZGWM.NSFOQM(), this.BGZGWM = null);
    this.LJAWYZ != null && (this.LJAWYZ.NSFOQM(), this.LJAWYZ = null);
    this.KBYIAL != null && (this.KBYIAL.NSFOQM(), this.KBYIAL = null);
    this.OWELAC != null && (n.WHQQMY().NEHMEK(this.OWELAC), this.OWELAC = null);
    this.YJTLHB != null && (n.WHQQMY().NEHMEK(this.YJTLHB), this.YJTLHB = null);
    this.IUDHDV != -1 && (n.JXHLFC(this.IUDHDV), this.IUDHDV = -1);
    this.DOTBHX != -1 && (n.JXHLFC(this.DOTBHX), this.DOTBHX = -1);
    this.CMKBJI = 0;
    this.VHMTCA = !1;
    this.MQGEUF();
    i = this.QHDKBS.d;
    t = {
        k: null,
        v: null
    };
    for (r in i) t.k = r, t.v = i[r], t.v.BOFXQL() > 0 && this.OCQHFI.l.push((new $I.RTVHKJ).NSBVXE((new Date).getTime(), t.v));
    this.ZOJPTU.AMMYJA();
    $I.PCMEZM.EYZIBP().PRMHUU((new $I.VMMMQM).TFDQYD(this, this.LFBMHS))
}

function DeactivateToolTip() {}

function VisUpdate() {
    var r = {},
        t = (new Date).getTime(),
        c, h, f, e, o, s, n, i, u;
    if (!this.RHABLR) {
        this.VZAYZA == -1 ? this.VZAYZA = t : t - this.VZAYZA > this.FLHAYM && (this.SOCBXO++, this.VZAYZA = t);
        var v = $I.CVRAYR.VAMLQD().UXQPUS(),
            d = this.RXRDIN.OFYSUK(),
            g = this.RXRDIN.FQVDES();
        if (r.$r = this.PMNDIL.ZOXRAI(this.SOCBXO, r), c = r.b, r.$r)
            for (h = c.l, e = 0; e < h.length; e++) f = h[e], o = 0, s = 0, r.$r = $I.NZIFZB.ERRCBM(f, r), s = r.b, o = r.c, r.$r, i = v.DKUXUW(s, o, this.RXRDIN.CPVNPP(), this.RXRDIN.SZZNBJ(), this.ZOJPTU), this.SDAQLM.GXVKTX(f, i), n = this.EMOTCM.AYELRA().WHQQMY().TDBBHP("box", null), n.TYDVYV(16), n.BMIJEH(this.EMOTCM.AYELRA().VVGOEM()), n.NQJJZY(this.EMOTCM.AYELRA().MWRYXH()), n.EVVIKY(s * this.EMOTCM.AYELRA().VVGOEM()), n.WJAECQ(o * this.EMOTCM.AYELRA().MWRYXH()), n.NJXPRI("#000000"), n.GUAUQN(0), this.EMOTCM.AYELRA().WHQQMY().UVSZDF(n), this.QHDKBS.GXVKTX(f, n), i != $I.BSOKEY.OK && (i & $I.BSOKEY.FailOldBasePosition) != $I.BSOKEY.FailOldBasePosition && this.NXSKCS.l.push((new $I.RTVHKJ).NSBVXE(t, n));
        this.PMNDIL.XUDPAL(this.SOCBXO);
        this.RHABLR = this.PMNDIL.c == 0
    }
    for (i = this.NXSKCS.l.length - 1; i >= 0; i--) {
        var n = this.NXSKCS.l[i],
            y = Math.min(t - n.k, this.XVOISJ),
            p = this.NXSKCS.l[i],
            l = p.v;
        l.GUAUQN(y * .5 / this.XVOISJ);
        l.BOFXQL() == .5 && this.NXSKCS.WILRBK(this.NXSKCS.l[i])
    }
    for (u = this.OCQHFI.l.length - 1; u >= 0; u--) {
        var w = this.OCQHFI.l[u],
            b = Math.min(t - w.k, this.XVOISJ),
            k = this.OCQHFI.l[u],
            a = k.v;
        a.GUAUQN(.5 - b * .5 / this.XVOISJ);
        a.BOFXQL() == 0 && this.OCQHFI.WILRBK(this.OCQHFI.l[u])
    }
    this.PDWPZN != null && this.PDWPZN.OCAAHR(t);
    this.BGZGWM != null && this.BGZGWM.OCAAHR(t);
    this.LJAWYZ != null && this.LJAWYZ.OCAAHR(t);
    this.KBYIAL != null && this.KBYIAL.OCAAHR(t)
}

function WillLoseNewbieShield(n, t) {
    var r = !1,
        i = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.PXXDNK);
    if (i != null) {
        var u = i.VUAHHF(),
            f = $I.CVRAYR.VAMLQD().TZZENG().REOYEK() * 60,
            e = $I.CVRAYR.VAMLQD().TZZENG().PBAGLC() * 60,
            o = i.PJUZVB() + f,
            s = i.PJUZVB() + e,
            h = $I.ILHIOR.GILABD().UXQPUS().MHQMLQ((new $I.KNHTEK).GSPBQH(n, t)),
            c = $I.CVRAYR.VAMLQD().TZZENG().CYKDJZ();
        if (!u || o != i.ERVMXG() && s != i.ERVMXG()) return r;
        h >= c && (r = !0)
    }
    return r
}

function IsInRevengeRange(n, t) {
    var i = !1,
        f = $I.CVRAYR.VAMLQD().TZZENG().BSQDPO(),
        r = n - Math.floor($I.CVRAYR.VAMLQD().UXQPUS().LEGJLJ() / 2),
        u = t - Math.floor($I.CVRAYR.VAMLQD().UXQPUS().KOODTZ() / 2);
    return Math.sqrt(r * r + u * u) <= f && (i = !0), i
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

function set_RadiusSearchDiffTime(n) {
    this.FLHAYM = n
}

function set_FadeDiffTime(n) {
    this.XVOISJ = n
}

function add_OnCellChange(n) {
    var t = {},
        i, r = this.AGIGRF,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.AGIGRF, t.$r = $I.TSJVQL.JXWJWI($I.XNUOGC, u, i, t), this.AGIGRF = t.a, t.$r); while (r != i)
}

function remove_OnCellChange(n) {
    var t = {},
        i, r = this.AGIGRF,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.AGIGRF, t.$r = $I.TSJVQL.JXWJWI($I.XNUOGC, u, i, t), this.AGIGRF = t.a, t.$r); while (r != i)
}

function add_OnMouseMove(n) {
    var t = {},
        i, r = this.CEUBYY,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.CEUBYY, t.$r = $I.TSJVQL.JXWJWI($I.PEPXQK, u, i, t), this.CEUBYY = t.a, t.$r); while (r != i)
}

function remove_OnMouseMove(n) {
    var t = {},
        i, r = this.CEUBYY,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.CEUBYY, t.$r = $I.TSJVQL.JXWJWI($I.PEPXQK, u, i, t), this.CEUBYY = t.a, t.$r); while (r != i)
}

function add_OnMouseUp(n) {
    var t = {},
        i, r = this.UBVVTI,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.UBVVTI, t.$r = $I.TSJVQL.JXWJWI($I.DYSLHG, u, i, t), this.UBVVTI = t.a, t.$r); while (r != i)
}

function remove_OnMouseUp(n) {
    var t = {},
        i, r = this.UBVVTI,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.UBVVTI, t.$r = $I.TSJVQL.JXWJWI($I.DYSLHG, u, i, t), this.UBVVTI = t.a, t.$r); while (r != i)
}

function add_OnActivate(n) {
    var t = {},
        i, r = this.NPKQFM,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.NPKQFM, t.$r = $I.TSJVQL.JXWJWI($I.UGCDUV, u, i, t), this.NPKQFM = t.a, t.$r); while (r != i)
}

function remove_OnActivate(n) {
    var t = {},
        i, r = this.NPKQFM,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.NPKQFM, t.$r = $I.TSJVQL.JXWJWI($I.UGCDUV, u, i, t), this.NPKQFM = t.a, t.$r); while (r != i)
}

function add_OnDeactivate(n) {
    var t = {},
        i, r = this.ISDWFO,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.ISDWFO, t.$r = $I.TSJVQL.JXWJWI($I.VXCILA, u, i, t), this.ISDWFO = t.a, t.$r); while (r != i)
}

function remove_OnDeactivate(n) {
    var t = {},
        i, r = this.ISDWFO,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.ISDWFO, t.$r = $I.TSJVQL.JXWJWI($I.VXCILA, u, i, t), this.ISDWFO = t.a, t.$r); while (r != i)
}