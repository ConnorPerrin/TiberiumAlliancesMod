function get_Mode() {
    return this.YNZZPW
}

function set_Mode(n) {
    this.YNZZPW = n
}

function get_GridWidth() {
    return this.YOMYUN
}

function get_GridHeight() {
    return this.FGZVSH
}

function get_ArmyWidth() {
    return this.HHSOZV
}

function get_ArmyHeight() {
    return this.VACVDJ
}

function UpdateViewSize_CityDeco() {
    var r = $I.JHZMLL.NBWZYI[3] - $I.JHZMLL.NBWZYI[1],
        u = (this.ULNTVQ() - r) / 2,
        n = $I.QOKGWR.WBFJPT().VDQLZP($I.ILHIOR.GILABD().VKUOKS().GNOLXZ()),
        t, i;
    n != null && (this.IDLCCW.PTVNAR($I.ILHIOR.GILABD().VKUOKS().GNOLXZ()), this.IDLCCW.BMIJEH(n.w), this.IDLCCW.NQJJZY(n.h - 2 * $I.ZPZTNI.KAMYOL), this.IDLCCW.AGGCMU(0, $I.ZPZTNI.KAMYOL / n.h, 1, (n.h - $I.ZPZTNI.KAMYOL) / n.h), t = $I.ILHIOR.GILABD().VKUOKS(), i = Math.max(0, n.h - t.VJNDTT()), i > 0 ? (this.IDLCCW.EVVIKY(t.WPPALG().DGLCVK() - $I.RRZRQV.XQCJLJ + $I.JHZMLL.NNFATM), this.IDLCCW.WJAECQ(this.CARSTD() + r - i + 2 * $I.ZPZTNI.KAMYOL)) : this.IDLCCW.NQJJZY(0))
}

function get_MinXPosition() {
    return this.MCNKUN + this.SKJUXK
}

function get_MaxXPosition() {
    return this.HHSOZV * this.YOMYUN + this.MCNKUN * -1
}

function get_MinYPosition() {
    return this.DFZLUK + this.GASVGH
}

function get_MaxYPosition() {
    return $I.JHZMLL.SMDFUD - this.DFZLUK * -1
}

function get_OffsetBgHeight() {
    return this.NHMSEM
}

function get_SegmentBg() {
    return this.SWGTDB
}

function SetColumStart(n, t) {
    var i;
    this.KOIAFO[n] = t;
    i = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.FZXQXG);
    this.GQRVOL();
    $I.BMZJUL.prototype.OKHTJE.call(this);
    this.ESJFJT(i, 4)
}

function Init() {
    var r, t, i, u, n, f;
    for ($I.BMZJUL.prototype.NXWPIH.call(this), r = $I.QOKGWR.WBFJPT(), this.GNUDVJ = $I.UDAQKL.DNVCCU($I.KQYCNT, 1), t = r.VDQLZP("baseview/neutral/gui/1x1.png"), this.GNUDVJ[0] = (new $I.KQYCNT).YAXDNR("baseview/neutral/gui/1x1.png", t.w, t.h, $I.JHZMLL.UKFCHU, $I.JHZMLL.JRWVXL, this.GCZSDI), i = $I.QOKGWR.WBFJPT().VDQLZP(this.VBTDDG()), this.SWGTDB = this.RRBVEU.TDBBHP("image", null), this.SWGTDB.PTVNAR(this.VBTDDG()), this.SWGTDB.EVVIKY(this.MCNKUN - $I.JHZMLL.NBWZYI[0]), this.SWGTDB.WJAECQ(this.DFZLUK - $I.JHZMLL.NBWZYI[1]), this.SWGTDB.BMIJEH(i.w), this.SWGTDB.NQJJZY(i.h), this.IDLCCW = this.RRBVEU.TDBBHP("imagesegment", null), this.SWGTDB.QOUDUX(1), this.IDLCCW.QOUDUX(2), this.RRBVEU.UVSZDF(this.SWGTDB), this.RRBVEU.UVSZDF(this.IDLCCW), this.ROVDYS = this.RRBVEU.TDBBHP("text", null), this.ROVDYS.EVVIKY($I.JHZMLL.HIBOGZ), this.ROVDYS.WJAECQ($I.JHZMLL.ZXNDGB), this.ROVDYS.BMIJEH($I.JHZMLL.IDMVRB), this.ROVDYS.NQJJZY($I.JHZMLL.FUEEMH), this.ROVDYS.TYDVYV(2), this.ROVDYS.BPQMOK("armysetup_title"), this.ROVDYS.YOJPLZ(""), this.RRBVEU.UVSZDF(this.ROVDYS), u = $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.YJUUCR, 4), $I.JHZMLL.JMIMZL, $I.JHZMLL.MTOUYM, $I.JHZMLL.CFEGDJ, $I.JHZMLL.GGLUNT), this.UTGRDK = $I.UDAQKL.DNVCCU($I.YBULBO, 4), n = 0; n < 4; n++) f = this.XAMOAA[n] - u[n], this.UTGRDK[n] = this.RRBVEU.TDBBHP("text", null), this.UTGRDK[n].EVVIKY($I.JHZMLL.YSJVTD), this.UTGRDK[n].WJAECQ(f), this.UTGRDK[n].BMIJEH($I.JHZMLL.ECWUFT), this.UTGRDK[n].NQJJZY($I.JHZMLL.QMYCQM), this.UTGRDK[n].TYDVYV(2), this.UTGRDK[n].BPQMOK("tech_level"), this.UTGRDK[n].YOJPLZ(this.SHNAEN(1 + n, "0")), this.RRBVEU.UVSZDF(this.UTGRDK[n]);
    $I.CVRAYR.VAMLQD().ZBVLXL().EOBUFO((new $I.MBLAWJ).TFDQYD(this, this.KRNJUT))
}

function GetArmySetupTextByType(n, t) {
    return webfrontend.phe.cnc.gui.util.Text.getArmySetupTextByType(n, t)
}

function SetActive(n) {
    var t = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.FZXQXG),
        i;
    t != null && (i = this.YNZZPW == $I.WTQKLE.CombatSetup ? $I.HCONEK.EAttackTitle : $I.HCONEK.ESetupTitle, i == $I.HCONEK.EAttackTitle ? this.ROVDYS.YOJPLZ(this.SHNAEN(i, $I.CVRAYR.VAMLQD().ONGTRQ().KPQBNW())) : this.ROVDYS.YOJPLZ(""), n && t != null && this.ESJFJT(t, 4), this.QWDBDC = n)
}

function UiUpdate(n) {
    var r = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.FZXQXG),
        t, i;
    for (this.PHLLIQ != null && this.PHLLIQ.YMVQUD(r), t = 0; t < (this.NVVNHV.hasOwnProperty("$d") ? this.NVVNHV.$d[0] : this.NVVNHV.length); t++)
        for (i = 0; i < (this.NVVNHV.hasOwnProperty("$d") ? this.NVVNHV.$d[1] : this.NVVNHV.length); i++) this.NVVNHV[t][i] != null && this.NVVNHV[t][i].CXESLP(n)
}

function VisUpdate(n) {
    var r, u, t, i;
    for (n > this.KFPYBK && (this.KFPYBK = n), r = (new Date).getTime(), $I.BMZJUL.prototype.YDAYMG.call(this, r), u = $I.UQGIGO.XBYUSR().HYVOUU("vis/base/animations"), t = 0; t < (this.NVVNHV.hasOwnProperty("$d") ? this.NVVNHV.$d[0] : this.NVVNHV.length); t++)
        for (i = 0; i < (this.NVVNHV.hasOwnProperty("$d") ? this.NVVNHV.$d[1] : this.NVVNHV.length); i++) this.NVVNHV[t][i] != null && this.NVVNHV[t][i].ETWFFN(r, u)
}

function IsSlotFree(n, t) {
    return n >= 0 && n < (this.XCTIYN.hasOwnProperty("$d") ? this.XCTIYN.$d[0] : this.XCTIYN.length) && t >= 0 && t < (this.XCTIYN.hasOwnProperty("$d") ? this.XCTIYN.$d[1] : this.XCTIYN.length) && this.XCTIYN[n][t]
}

function GetGridSlotFromPos(n, t) {
    for (var u, r = -1, f, i, e, r = 0; r < (this.XAMOAA.hasOwnProperty("$d") ? this.XAMOAA.$d[0] : this.XAMOAA.length);) {
        if (f = this.XAMOAA[r], t >= f && t < f + this.MWRYXH()) break;
        r++
    }
    for (i = -1, i = 0; i < (this.KOIAFO.hasOwnProperty("$d") ? this.KOIAFO.$d[0] : this.KOIAFO.length);) {
        if (e = this.KOIAFO[i], n >= e && n < e + this.VVGOEM()) break;
        i++
    }
    return i < 0 || i >= (this.NVVNHV.hasOwnProperty("$d") ? this.NVVNHV.$d[0] : this.NVVNHV.length) || r < 0 || r >= (this.NVVNHV.hasOwnProperty("$d") ? this.NVVNHV.$d[1] : this.NVVNHV.length) ? null : (u = (new $I.GHTPSZ).SLPWTI(), u.PosX = i, u.PosY = r, u)
}

function GetObjectFromPosition(n, t) {
    var i = this.VIXVNN(n, t),
        r;
    return i == null ? null : (r = this.NVVNHV[i.PosX][i.PosY], r == null) ? null : r.RMVHYY()
}

function SnapToXGrid(n) {
    for (var t = -1, i, t = 0; t < (this.KOIAFO.hasOwnProperty("$d") ? this.KOIAFO.$d[0] : this.KOIAFO.length);) {
        if (i = this.KOIAFO[t], n >= i && n < i + this.VVGOEM()) break;
        t++
    }
    return t = Math.min(t, (this.NVVNHV.hasOwnProperty("$d") ? this.NVVNHV.$d[0] : this.NVVNHV.length) - 1), t = Math.max(0, t), this.KOIAFO[t]
}

function SnapToYGrid(n) {
    for (var t = -1, i, t = 0; t < (this.XAMOAA.hasOwnProperty("$d") ? this.XAMOAA.$d[0] : this.XAMOAA.length);) {
        if (i = this.XAMOAA[t], n >= i && n < i + this.MWRYXH()) break;
        t++
    }
    return t = Math.min(t, (this.NVVNHV.hasOwnProperty("$d") ? this.NVVNHV.$d[1] : this.NVVNHV.length) - 1), t = Math.max(0, t), this.XAMOAA[t]
}

function GetLeftStartPosForColumn(n) {
    var t = 0;
    return n >= 0 && n < (this.KOIAFO.hasOwnProperty("$d") ? this.KOIAFO.$d[0] : this.KOIAFO.length) && (t = this.KOIAFO[n]), t
}

function GetTopStartPosForRow(n) {
    var t = 0;
    return n >= 0 && n < (this.XAMOAA.hasOwnProperty("$d") ? this.XAMOAA.$d[0] : this.XAMOAA.length) && (t = this.XAMOAA[n]), t
}

function RecruiteUnit(n, t, i) {
    var r = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.FZXQXG);
    return r != null && r.SGRQBS() != null && r.SGRQBS().MNGEPV(n, 1, t, i)
}

function GetBackgroundGraphicArmySetup() {
    var n = "";
    return (n = "baseview/neutral/gui/army_setup_screen", this.LMSPFP == $I.KGPDNC.NotInitialized && (this.LMSPFP = $I.CVRAYR.VAMLQD().ONGTRQ().WMEKEJ()), this.LMSPFP == $I.KGPDNC.NODFaction) ? n + "_nod.jpg" : n + ".jpg"
}

function ShowToolTip(n) {
    this.PHLLIQ != null && (this.PHLLIQ.YFGAPN(), this.PHLLIQ.NSFOQM(), this.PHLLIQ = null);
    this.PHLLIQ = (new $I.QXIVYF).CTOKHC(this);
    this.VAWZQX(n);
    this.PHLLIQ.YMVQUD($I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.FZXQXG));
    this.PHLLIQ.DSXTIQ(Math.floor(n.DGLCVK()), Math.floor(n.XYKFSB()), this.JZNSHH, this.TTZQCK, this.USZDVJ(), this.CARSTD());
    this.PHLLIQ.SHCWDD()
}

function UpdateToolTip(n) {
    var e, w, b, u, nt, c, l, v, o, k, h;
    if (this.PHLLIQ != null) {
        var ut = this.ERQQRY(),
            ft = $I.CVRAYR.VAMLQD().ONGTRQ().UQGPFX(),
            f = "",
            s = "",
            r = "",
            p = "",
            d = !1,
            t = null,
            i = null;
        if (n.AXKPJR() == $I.CDNXVQ.ArmyUnitType)
            if (e = n, t = e.VJOJCW(), s = t.YBCOGL().dn, d = t.SZEHSS(), r = t.YBCOGL().ds, $I.ILHIOR.GILABD().QIBGFH() == $I.HYIXRB.Move) r = $I.XOJOCY.CLMQKO("tnf:click to relocate");
            else if ($I.ILHIOR.GILABD().QIBGFH() != $I.HYIXRB.Upgrade || t.SHYQOP($I.ILHIOR.GILABD().MLHEXL())) {
            if ($I.ILHIOR.GILABD().QIBGFH() == $I.HYIXRB.Repair) {
                if (u = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.GIYDVX()), u != null)
                    if (nt = t.OAOHEA.mt, c = $I.DUXUSX.UHKLOY(u.UBTDFB(), $I.SOIZAH.ArmySetup, nt, u.ZUAHKT().KWNIZP(), u.ZUAHKT().QYJPTY(), u.ZUAHKT().NCMMCT()), c < 1 && (t.DGXVOW() >= c || t.DGXVOW() - c > -.01)) f = this.JPBUBM(t, u);
                    else {
                        if (l = t.OLUXEN(), l.c > 0) {
                            i = $I.UDAQKL.DNVCCU($I.DBJKAB, l.c);
                            var rt = 0,
                                o = l.d,
                                a = {
                                    k: null,
                                    v: null
                                };
                            for (v in o) a.k = v, a.v = o[v], i[rt++] = (new $I.DBJKAB).IJGFXA(a.k, a.v)
                        }
                        i = $I.XOJOCY.XUJGKT(i, !0, !1)
                    }
            } else if ($I.ILHIOR.GILABD().QIBGFH() == $I.HYIXRB.Sell)
                if (e.VARXFJ($I.VPNCTE.DismissUnit)) {
                    if (o = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.GIYDVX()).SGRQBS().VRCFCD(t), o.c > 0) {
                        i = $I.UDAQKL.DNVCCU($I.DBJKAB, o.c);
                        var v = 0,
                            h = o.d,
                            y = {
                                k: null,
                                v: null
                            };
                        for (k in h) y.k = k, y.v = h[k], i[v++] = (new $I.DBJKAB).IJGFXA(y.k, y.v)
                    }
                    i = $I.XOJOCY.XUJGKT(i, !0, !1)
                } else h = $I.CVRAYR.VAMLQD().TZZENG(), h.SPVTMU() && t.SEFLBZ() && t.REBAFD() == h.ERNBFF() && (f = $I.XOJOCY.CLMQKO("tnf:full hp needed to sell"))
        } else {
            if (i = $I.XOJOCY.XUJGKT($I.XOJOCY.VKNEZX(e.WWXWWF(), e.WWXWWF() + $I.ILHIOR.GILABD().MLHEXL(), t.YBCOGL()), !0, !1), w = $I.XOJOCY.MLXTAI(e.WWXWWF() + $I.ILHIOR.GILABD().MLHEXL(), t.YBCOGL()), b = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.FZXQXG).ZUAHKT().YWVOYE(w, !0), b.l.length > 0) {
                var tt = $I.BUEVKL.QGLUJV(),
                    g = w[b.l[0]],
                    it = tt.ITRZSX(g.RequiredTechId);
                p = this.KWIGOV(it.dn, g.Level)
            }
            t.SEFLBZ() && (f = $I.XOJOCY.CLMQKO("tnf:full hp needed to upgrade"))
        }
        r == null && (r = "");
        switch ($I.ILHIOR.GILABD().QIBGFH()) {
            case $I.HYIXRB.Default:
            case $I.HYIXRB.Move:
                this.PHLLIQ.XQVKKV(s, r, d);
                break;
            case $I.HYIXRB.Repair:
                this.PHLLIQ.DHWIXM(s, r, i, p);
                break;
            case $I.HYIXRB.Upgrade:
                t != null && f == "" && t.SHYQOP($I.ILHIOR.GILABD().MLHEXL()) && (f = $I.XOJOCY.CLMQKO("tnf:max level reached"));
                this.PHLLIQ.HBUYQW(s, r, i, p);
                break;
            case $I.HYIXRB.Sell:
                this.PHLLIQ.OWMQOZ(s, i)
        }
        this.PHLLIQ.HMLVHB(f)
    }
}

function HideToolTip() {
    this.PHLLIQ != null && (this.PHLLIQ.YFGAPN(), this.PHLLIQ.NSFOQM(), this.PHLLIQ = null)
}