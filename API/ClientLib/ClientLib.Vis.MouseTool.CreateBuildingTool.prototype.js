function get_IsShiftPressed() {
    return this.MMRRAD
}

function Activate(n) {
    var t, u, i, r, f, e, o;
    this.EGZSYU == null || this.EGZSYU.EABVZL().TTKGHK() || this.OKHQXM.CWOVDH(-1, null);
    t = this.OKHQXM.VKUOKS();
    this.FOHLOT(t.WHQQMY());
    $I.TWMVGW.prototype.SMEUFM.call(this, n);
    t.HGUZCL();
    this.OKHQXM.RYKGLY("FactionSound/SelectLocation");
    u = $I.CVRAYR.VAMLQD().ZBVLXL().HLZNSR();
    u.CJNLZL((new $I.VYKQUV).TFDQYD(this, this.EYRAXV));
    i = this.ELBBBD.di;
    r = null;
    r = this.EGZSYU != null ? $I.RRAZPC.HOQIAV($I.PCSBNG.BYTXHT, this.EGZSYU.EABVZL(), this.EGZSYU.EABVZL().LWFCSR(), !1) : $I.RRAZPC.DKVNUM($I.PCULEX.Normal, this.ELBBBD);
    r != null && (i = r.ImagePath);
    this.WKUJOA = i;
    this.BFISHO = $I.QOKGWR.WBFJPT().VDQLZP(i);
    this.GZDHNC = $I.QOKGWR.WBFJPT().SBOUYU(i);
    f = 1;
    e = 1;
    switch (this.ELBBBD.s) {
        case 1:
            o = t.PXZWPJ(0);
            this.RRWWDH = o.m_OffsetX;
            this.XQZQVI = o.m_OffsetY;
            break;
        case 4:
            f = 2;
            e = 2
    }
    this.BFISHO != null && (this.GVGKRB = f * t.VVGOEM() - this.BFISHO.w, this.NWYRSX = e * t.MWRYXH() - this.BFISHO.h - 4);
    this.YDOJLA = -1;
    this.MVHLEZ = -1;
    this.JYUQUD = -1;
    this.QVVLID = -1;
    this.GVRCLL = this.WHQQMY().TDBBHP("image", null);
    this.GVRCLL.TYDVYV(24);
    this.GVRCLL.QOUDUX(2);
    this.WHQQMY().UVSZDF(this.GVRCLL);
    this.FSYEGY(u);
    this.EGZSYU != null && (this.EGZSYU.RACVDK(), this.EGZSYU.XMSYEF(.6))
}

function Deactivate() {
    var i, n, t;
    if ($I.TWMVGW.prototype.UGDPPZ.call(this), $I.CVRAYR.VAMLQD().ZBVLXL().HLZNSR().USDIRU((new $I.VYKQUV).TFDQYD(this, this.EYRAXV)), i = this.OKHQXM.VKUOKS(), this.EGZSYU != null && this.EGZSYU.XMSYEF(1), this.GVRCLL != null && this.WHQQMY().NEHMEK(this.GVRCLL), this.ZKQIER != null) {
        for (n = 0; n < this.ZKQIER.l.length; n++) this.WHQQMY().NEHMEK(this.ZKQIER.l[n]);
        this.ZKQIER = null
    }
    if (this.JZQIIH != null) {
        for (t = 0; t < this.JZQIIH.length; t++) this.WHQQMY().NEHMEK(this.JZQIIH[t]);
        this.JZQIIH = null
    }
    this.DRAKGP = !1;
    this.RQZYAT = !1;
    this.GWBVBX = !1;
    this.EGZSYU = null;
    this.MQGEUF()
}

function Move(n, t) {
    var i, u;
    if (this.OOLNVP = n, this.BVCKUN = t, i = this.OKHQXM.VKUOKS(), n = i.NHCCYM(n), t = i.ZTMGNL(t), n = Math.max(0, n), t = Math.max(0, t), n = Math.min(n, (i.YJWQOV() - 1) * i.VVGOEM()), t = Math.min(t, (i.AKTUGZ() - 1) * i.MWRYXH()), n != this.YDOJLA || t != this.MVHLEZ) {
        this.YDOJLA = Math.floor(n);
        this.MVHLEZ = Math.floor(t);
        this.TEPTWP = Math.floor(this.YDOJLA / i.VVGOEM());
        this.KLUMNG = Math.floor(this.MVHLEZ / i.MWRYXH());
        this.IIEJYW();
        this.LFFUEJ();
        this.BBIDWV();
        this.DMGEPN();
        var r = this.BFISHO,
            f = i.HUAXYK(Math.floor(this.YDOJLA / i.VVGOEM()), Math.floor(this.MVHLEZ / i.MWRYXH())),
            e = f & 255,
            o = f >> 8 & 255;
        r != null && (this.GVRCLL.EVVIKY(this.YDOJLA + this.GVGKRB + e), this.GVRCLL.WJAECQ(this.MVHLEZ + this.NWYRSX + o), this.GVRCLL.BMIJEH(r.w), this.GVRCLL.NQJJZY(r.h), this.GVRCLL.TYDVYV(55), this.GVRCLL.QOUDUX(1), this.GVRCLL.PTVNAR(this.WKUJOA));
        u = $I.KBUGOV.INVALID;
        this.RQZYAT && this.GWBVBX && (u = $I.KBUGOV.VALID);
        $I.TWMVGW.prototype.RYGPRC.call(this, u, !0, (this.TEPTWP + 1) * i.VVGOEM(), (this.KLUMNG + 1) * i.MWRYXH());
        this.NFFLUF != null && this.NFFLUF.CQMFFL(this.YDOJLA + this.RRWWDH + e, this.MVHLEZ + this.XQZQVI + o, this.RQZYAT && this.GWBVBX);
        this.XUHOSH(!0);
        this.JYUQUD = this.TEPTWP;
        this.QVVLID = this.KLUMNG
    }
    return !0
}

function KeyDown(n) {
    n == "Shift" && (this.MMRRAD = !0)
}

function KeyUp(n) {
    n == "Shift" && (this.MMRRAD = !1)
}

function Down() {
    return !0
}

function Up(n, t, i) {
    var u, r, f, s, a, h, c;
    if (i != "right")
        if (u = !1, this.XNSDOS(n, t), r = this.OKHQXM.VKUOKS(), f = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(r.GIYDVX()), f != null && this.RQZYAT) {
            var e = Math.floor(this.YDOJLA / r.VVGOEM()),
                o = Math.floor(this.MVHLEZ / r.MWRYXH()),
                l = !1;
            this.GDPFCX != null && this.EGZSYU != null && (s = this.EGZSYU.EABVZL(), a = f.REDJNI(e, o), s.MYGJAZ() != a && (l = !0, this.GDPFCX.GMCTKU(e, o, s)));
            l || (u = this.EGZSYU == null ? f.ZUAHKT().DERKMT(this.OEREFR, e, o) : this.EGZSYU.EABVZL().BOXICG(e, o), u ? (h = $I.BUEVKL.QGLUJV().VXAMCA().citylayer.be, this.OKHQXM.VROCEG("audio/ui/Build_place"), h >= 0 && r.UWUJTK() && (c = r.BPLSSC(h, this.YDOJLA + r.VVGOEM(), this.MVHLEZ + r.MWRYXH(), null), c != null && c.TYDVYV(55))) : this.OKHQXM.RYKGLY("FactionSound/CantDeploHere"), this.FPMPHM != null && this.FPMPHM.FOWLVG(), this.MMRRAD || this.OKHQXM.WHYMSW() && !u || this.OKHQXM.CWOVDH(-1, null))
        } else this.OKHQXM.RYKGLY("FactionSound/CantDeploHere"), this.OKHQXM.WHYMSW() || this.MMRRAD || this.OKHQXM.CWOVDH(-1, null);
    return !0
}

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

function GetMouseToolType() {
    return $I.PLIBEB.CreateBuilding
}

function VisUpdate() {
    $I.UQGIGO.XBYUSR().HYVOUU("vis/base/effectsbase") && this.MFCRPV != null && this.MFCRPV.OCAAHR((new Date).getTime())
}

function get_GameDataID() {
    return this.OEREFR
}

function GetMouseToolType() {
    return $I.PLIBEB.CreateBuilding
}

function SetInfo(n, t) {
    t ? (this.EGZSYU = n, this.OEREFR = this.EGZSYU.EABVZL().JSHHHZ(), this.ELBBBD = this.EGZSYU.BVMIUC()) : (this.EGZSYU = null, this.OEREFR = n, this.ELBBBD = $I.BUEVKL.QGLUJV().ITRZSX(this.OEREFR))
}

function Activate(n) {
    var t, u, i, r, f, e, o;
    this.EGZSYU == null || this.EGZSYU.EABVZL().TTKGHK() || this.OKHQXM.CWOVDH(-1, null);
    t = this.OKHQXM.VKUOKS();
    this.FOHLOT(t.WHQQMY());
    $I.TWMVGW.prototype.SMEUFM.call(this, n);
    t.HGUZCL();
    this.OKHQXM.RYKGLY("FactionSound/SelectLocation");
    u = $I.CVRAYR.VAMLQD().ZBVLXL().HLZNSR();
    u.CJNLZL((new $I.VYKQUV).TFDQYD(this, this.EYRAXV));
    i = this.ELBBBD.di;
    r = null;
    r = this.EGZSYU != null ? $I.RRAZPC.HOQIAV($I.PCSBNG.BYTXHT, this.EGZSYU.EABVZL(), this.EGZSYU.EABVZL().LWFCSR(), !1) : $I.RRAZPC.DKVNUM($I.PCULEX.Normal, this.ELBBBD);
    r != null && (i = r.ImagePath);
    this.WKUJOA = i;
    this.BFISHO = $I.QOKGWR.WBFJPT().VDQLZP(i);
    this.GZDHNC = $I.QOKGWR.WBFJPT().SBOUYU(i);
    f = 1;
    e = 1;
    switch (this.ELBBBD.s) {
        case 1:
            o = t.PXZWPJ(0);
            this.RRWWDH = o.m_OffsetX;
            this.XQZQVI = o.m_OffsetY;
            break;
        case 4:
            f = 2;
            e = 2
    }
    this.BFISHO != null && (this.GVGKRB = f * t.VVGOEM() - this.BFISHO.w, this.NWYRSX = e * t.MWRYXH() - this.BFISHO.h - 4);
    this.YDOJLA = -1;
    this.MVHLEZ = -1;
    this.JYUQUD = -1;
    this.QVVLID = -1;
    this.GVRCLL = this.WHQQMY().TDBBHP("image", null);
    this.GVRCLL.TYDVYV(24);
    this.GVRCLL.QOUDUX(2);
    this.WHQQMY().UVSZDF(this.GVRCLL);
    this.FSYEGY(u);
    this.EGZSYU != null && (this.EGZSYU.RACVDK(), this.EGZSYU.XMSYEF(.6))
}

function Deactivate() {
    var i, n, t;
    if ($I.TWMVGW.prototype.UGDPPZ.call(this), $I.CVRAYR.VAMLQD().ZBVLXL().HLZNSR().USDIRU((new $I.VYKQUV).TFDQYD(this, this.EYRAXV)), i = this.OKHQXM.VKUOKS(), this.EGZSYU != null && this.EGZSYU.XMSYEF(1), this.GVRCLL != null && this.WHQQMY().NEHMEK(this.GVRCLL), this.ZKQIER != null) {
        for (n = 0; n < this.ZKQIER.l.length; n++) this.WHQQMY().NEHMEK(this.ZKQIER.l[n]);
        this.ZKQIER = null
    }
    if (this.JZQIIH != null) {
        for (t = 0; t < this.JZQIIH.length; t++) this.WHQQMY().NEHMEK(this.JZQIIH[t]);
        this.JZQIIH = null
    }
    this.DRAKGP = !1;
    this.RQZYAT = !1;
    this.GWBVBX = !1;
    this.EGZSYU = null;
    this.MQGEUF()
}

function DeactivateToolTip() {}

function Move(n, t) {
    var i, u;
    if (this.OOLNVP = n, this.BVCKUN = t, i = this.OKHQXM.VKUOKS(), n = i.NHCCYM(n), t = i.ZTMGNL(t), n = Math.max(0, n), t = Math.max(0, t), n = Math.min(n, (i.YJWQOV() - 1) * i.VVGOEM()), t = Math.min(t, (i.AKTUGZ() - 1) * i.MWRYXH()), n != this.YDOJLA || t != this.MVHLEZ) {
        this.YDOJLA = Math.floor(n);
        this.MVHLEZ = Math.floor(t);
        this.TEPTWP = Math.floor(this.YDOJLA / i.VVGOEM());
        this.KLUMNG = Math.floor(this.MVHLEZ / i.MWRYXH());
        this.IIEJYW();
        this.LFFUEJ();
        this.BBIDWV();
        this.DMGEPN();
        var r = this.BFISHO,
            f = i.HUAXYK(Math.floor(this.YDOJLA / i.VVGOEM()), Math.floor(this.MVHLEZ / i.MWRYXH())),
            e = f & 255,
            o = f >> 8 & 255;
        r != null && (this.GVRCLL.EVVIKY(this.YDOJLA + this.GVGKRB + e), this.GVRCLL.WJAECQ(this.MVHLEZ + this.NWYRSX + o), this.GVRCLL.BMIJEH(r.w), this.GVRCLL.NQJJZY(r.h), this.GVRCLL.TYDVYV(55), this.GVRCLL.QOUDUX(1), this.GVRCLL.PTVNAR(this.WKUJOA));
        u = $I.KBUGOV.INVALID;
        this.RQZYAT && this.GWBVBX && (u = $I.KBUGOV.VALID);
        $I.TWMVGW.prototype.RYGPRC.call(this, u, !0, (this.TEPTWP + 1) * i.VVGOEM(), (this.KLUMNG + 1) * i.MWRYXH());
        this.NFFLUF != null && this.NFFLUF.CQMFFL(this.YDOJLA + this.RRWWDH + e, this.MVHLEZ + this.XQZQVI + o, this.RQZYAT && this.GWBVBX);
        this.XUHOSH(!0);
        this.JYUQUD = this.TEPTWP;
        this.QVVLID = this.KLUMNG
    }
    return !0
}

function Down() {
    return !0
}

function Up(n, t, i) {
    var u, r, f, s, a, h, c;
    if (i != "right")
        if (u = !1, this.XNSDOS(n, t), r = this.OKHQXM.VKUOKS(), f = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(r.GIYDVX()), f != null && this.RQZYAT) {
            var e = Math.floor(this.YDOJLA / r.VVGOEM()),
                o = Math.floor(this.MVHLEZ / r.MWRYXH()),
                l = !1;
            this.GDPFCX != null && this.EGZSYU != null && (s = this.EGZSYU.EABVZL(), a = f.REDJNI(e, o), s.MYGJAZ() != a && (l = !0, this.GDPFCX.GMCTKU(e, o, s)));
            l || (u = this.EGZSYU == null ? f.ZUAHKT().DERKMT(this.OEREFR, e, o) : this.EGZSYU.EABVZL().BOXICG(e, o), u ? (h = $I.BUEVKL.QGLUJV().VXAMCA().citylayer.be, this.OKHQXM.VROCEG("audio/ui/Build_place"), h >= 0 && r.UWUJTK() && (c = r.BPLSSC(h, this.YDOJLA + r.VVGOEM(), this.MVHLEZ + r.MWRYXH(), null), c != null && c.TYDVYV(55))) : this.OKHQXM.RYKGLY("FactionSound/CantDeploHere"), this.FPMPHM != null && this.FPMPHM.FOWLVG(), this.MMRRAD || this.OKHQXM.WHYMSW() && !u || this.OKHQXM.CWOVDH(-1, null))
        } else this.OKHQXM.RYKGLY("FactionSound/CantDeploHere"), this.OKHQXM.WHYMSW() || this.MMRRAD || this.OKHQXM.CWOVDH(-1, null);
    return !0
}

function UpdateToolTip() {}

function UpdateMouseCursor() {
    var t = $I.CVRAYR.VAMLQD().ZBVLXL().HLZNSR(),
        n, i;
    t != null && (this.EGZSYU == null ? (n = 1, n = Math.max(n, $I.CVRAYR.VAMLQD().TZZENG().TBUFTS()), this.GWBVBX = t.ZUAHKT().NIORIQ(this.OEREFR, n), this.RQZYAT = !this.DRAKGP && t.ZUAHKT().JBXBAS(this.TEPTWP, this.KLUMNG, this.OEREFR)) : (this.GWBVBX = !0, i = this.EGZSYU.EABVZL().EZVHOT() == this.TEPTWP && this.EGZSYU.EABVZL().JXTDIO() == this.KLUMNG, this.RQZYAT = i || !this.DRAKGP && this.EGZSYU.EABVZL().IQKFXO(this.TEPTWP, this.KLUMNG, !1)))
}

function add_PlaceBuilding(n) {
    var t = {},
        i, r = this.FPMPHM,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.FPMPHM, t.$r = $I.TSJVQL.JXWJWI($I.USXMJQ, u, i, t), this.FPMPHM = t.a, t.$r); while (r != i)
}

function remove_PlaceBuilding(n) {
    var t = {},
        i, r = this.FPMPHM,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.FPMPHM, t.$r = $I.TSJVQL.JXWJWI($I.USXMJQ, u, i, t), this.FPMPHM = t.a, t.$r); while (r != i)
}

function add_PlaceBuildingMove(n) {
    var t = {},
        i, r = this.NFFLUF,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.NFFLUF, t.$r = $I.TSJVQL.JXWJWI($I.NHXMKG, u, i, t), this.NFFLUF = t.a, t.$r); while (r != i)
}

function remove_PlaceBuildingMove(n) {
    var t = {},
        i, r = this.NFFLUF,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.NFFLUF, t.$r = $I.TSJVQL.JXWJWI($I.NHXMKG, u, i, t), this.NFFLUF = t.a, t.$r); while (r != i)
}

function add_OnPlaceBuildingToNewTerrain(n) {
    var t = {},
        i, r = this.GDPFCX,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.GDPFCX, t.$r = $I.TSJVQL.JXWJWI($I.UFLWSQ, u, i, t), this.GDPFCX = t.a, t.$r); while (r != i)
}

function remove_OnPlaceBuildingToNewTerrain(n) {
    var t = {},
        i, r = this.GDPFCX,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.GDPFCX, t.$r = $I.TSJVQL.JXWJWI($I.UFLWSQ, u, i, t), this.GDPFCX = t.a, t.$r); while (r != i)
}