function get_IsShiftPressed() {
    return this.MMRRAD
}

function Activate(n) {
    var t, r, e, o;
    if (this.OKHQXM.JHNKUE() != $I.SOIZAH.DefenseSetup) this.OKHQXM.CWOVDH(-1, null);
    else {
        t = this.OKHQXM.BKJSEM();
        this.FOHLOT(t.WHQQMY());
        $I.TWMVGW.prototype.SMEUFM.call(this, n);
        t.HGUZCL();
        this.OKHQXM.RYKGLY("FactionSound/SelectLocation");
        r = $I.BUEVKL.QGLUJV();
        $I.CVRAYR.VAMLQD().ZBVLXL().HLZNSR().CJNLZL((new $I.VYKQUV).TFDQYD(this, this.EYRAXV));
        var i = null,
            u = 0,
            f = 0;
        this.LFOKZJ != null && (this.LFOKZJ.XMSYEF(.6), i = r.WJVSOL(this.LFOKZJ.AYXRUC()), u = Math.floor(this.LFOKZJ.DGLCVK()) + t.VVGOEM(), f = Math.floor(this.LFOKZJ.XYKFSB()) + t.MWRYXH());
        i == null && (i = r.WJVSOL(this.POOYWN.ci.defc.e), $I.GGTBLR.GUDCSW(this.DRJAZM) != $I.ZNGMPE.Charge && this.POOYWN.se != null && (e = this.POOYWN.se[1], e == undefined ? !1 : !0) && (o = $I.GGTBLR.MHVIGV(this.DRJAZM), o != null && o.REBAFD() > 1 && (i = r.WJVSOL(e[0][0]))));
        this.HXSEYM = (new $I.ZFKFPU).CBDLKU(this.WHQQMY(), i, u, f, null);
        this.HXSEYM.OCAAHR(5);
        this.HXSEYM.TYDVYV(55);
        this.HXSEYM.QOUDUX(1);
        u + f == 0 && this.HXSEYM.GUAUQN(0);
        this.TZMTTQ = -1;
        this.JAXHHB = -1;
        this.RMCWGH = -11;
        this.UHEEMN = -12
    }
}

function Deactivate() {
    $I.TWMVGW.prototype.UGDPPZ.call(this);
    $I.CVRAYR.VAMLQD().ZBVLXL().HLZNSR().USDIRU((new $I.VYKQUV).TFDQYD(this, this.EYRAXV));
    this.LFOKZJ != null && this.LFOKZJ.XMSYEF(1);
    this.HXSEYM != null && (this.HXSEYM.NSFOQM(), this.HXSEYM = null);
    this.JIGMUE = !1;
    this.DCOIBA = !1;
    this.LFOKZJ = null;
    this.MQGEUF()
}

function Move(n, t) {
    var i, r;
    return this.HYEHYM = n, this.ZXKIEA = t, i = this.OKHQXM.BKJSEM(), n = i.NHCCYM(n), t = i.ZTMGNL(t), n = Math.max(0, n), t = Math.max(0, t), n = Math.min(n, (i.YJWQOV() - 1) * i.VVGOEM()), t = Math.min(t, (i.AKTUGZ() - 1) * i.MWRYXH()), (n != this.TZMTTQ || t != this.JAXHHB) && (this.TZMTTQ = Math.floor(n), this.JAXHHB = Math.floor(t), this.DMGEPN(), this.HXSEYM != null && (this.HXSEYM.EVVIKY(this.TZMTTQ + i.VVGOEM()), this.HXSEYM.WJAECQ(this.JAXHHB + i.MWRYXH()), this.HXSEYM.TYDVYV(55), this.HXSEYM.QOUDUX(1), this.HXSEYM.GUAUQN(1)), r = $I.KBUGOV.INVALID, this.JIGMUE && this.DCOIBA && (r = $I.KBUGOV.VALID), $I.TWMVGW.prototype.RYGPRC.call(this, r, !0, (this.TEPTWP + 1) * i.VVGOEM(), (this.KLUMNG + 1) * i.MWRYXH()), this.QDYOBH != null && this.QDYOBH.CQMFFL(this.TZMTTQ + this.RMCWGH, this.JAXHHB + this.UHEEMN, this.JIGMUE && this.DCOIBA), this.XUHOSH(!0)), !0
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
    var r, u, f, e;
    if (i != "right") {
        if (this.XNSDOS(n, t), r = this.OKHQXM.BKJSEM(), u = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(r.GIYDVX()), u == null || u.SGRQBS() == null) return !0;
        var o = Math.floor(this.TZMTTQ / r.VVGOEM()),
            s = Math.floor(this.JAXHHB / r.MWRYXH()),
            h = !1;
        h = this.LFOKZJ == null ? u.SGRQBS().MNGEPV(this.DRJAZM, 1, o, s) : this.LFOKZJ.VJOJCW().BOXICG(o, s);
        h ? (f = $I.BUEVKL.QGLUJV().VXAMCA().citylayer.be, this.OKHQXM.VROCEG("audio/ui/Build_place"), f >= 0 && r.UWUJTK() && (e = r.BPLSSC(f, this.TZMTTQ + r.VVGOEM(), this.JAXHHB + r.MWRYXH(), null), e != null && e.TYDVYV(55))) : this.OKHQXM.RYKGLY("FactionSound/CantDeploHere");
        this.RQRRLL != null && this.RQRRLL.FOWLVG();
        this.MMRRAD || (this.OKHQXM.CWOVDH(-1, null), this.OKHQXM.NFJTBF(null), this.DMGEPN())
    }
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
    return this.LFOKZJ != null ? $I.PLIBEB.MoveUnit : $I.PLIBEB.CreateUnit
}

function VisUpdate(n) {
    $I.TWMVGW.prototype.QJOFJP.call(this, n)
}

function GetMouseToolType() {
    return this.LFOKZJ != null ? $I.PLIBEB.MoveUnit : $I.PLIBEB.CreateUnit
}

function get_GameDataID() {
    return this.DRJAZM
}

function SetInfo(n, t) {
    t ? (this.LFOKZJ = n, this.DRJAZM = this.LFOKZJ.VJOJCW().GAFYDL(), this.POOYWN = this.LFOKZJ.YBCOGL(), this.COUTMJ = null) : (this.LFOKZJ = null, this.DRJAZM = n, this.POOYWN = $I.BUEVKL.QGLUJV().JXKWLE(this.DRJAZM), this.COUTMJ = $I.CVRAYR.VAMLQD().TZZENG().ZFNREI() < 1 ? $I.XOJOCY.EOJXIS(1, this.POOYWN) : $I.UDAQKL.DNVCCU($I.DBJKAB, 0))
}

function Activate(n) {
    var t, r, e, o;
    if (this.OKHQXM.JHNKUE() != $I.SOIZAH.DefenseSetup) this.OKHQXM.CWOVDH(-1, null);
    else {
        t = this.OKHQXM.BKJSEM();
        this.FOHLOT(t.WHQQMY());
        $I.TWMVGW.prototype.SMEUFM.call(this, n);
        t.HGUZCL();
        this.OKHQXM.RYKGLY("FactionSound/SelectLocation");
        r = $I.BUEVKL.QGLUJV();
        $I.CVRAYR.VAMLQD().ZBVLXL().HLZNSR().CJNLZL((new $I.VYKQUV).TFDQYD(this, this.EYRAXV));
        var i = null,
            u = 0,
            f = 0;
        this.LFOKZJ != null && (this.LFOKZJ.XMSYEF(.6), i = r.WJVSOL(this.LFOKZJ.AYXRUC()), u = Math.floor(this.LFOKZJ.DGLCVK()) + t.VVGOEM(), f = Math.floor(this.LFOKZJ.XYKFSB()) + t.MWRYXH());
        i == null && (i = r.WJVSOL(this.POOYWN.ci.defc.e), $I.GGTBLR.GUDCSW(this.DRJAZM) != $I.ZNGMPE.Charge && this.POOYWN.se != null && (e = this.POOYWN.se[1], e == undefined ? !1 : !0) && (o = $I.GGTBLR.MHVIGV(this.DRJAZM), o != null && o.REBAFD() > 1 && (i = r.WJVSOL(e[0][0]))));
        this.HXSEYM = (new $I.ZFKFPU).CBDLKU(this.WHQQMY(), i, u, f, null);
        this.HXSEYM.OCAAHR(5);
        this.HXSEYM.TYDVYV(55);
        this.HXSEYM.QOUDUX(1);
        u + f == 0 && this.HXSEYM.GUAUQN(0);
        this.TZMTTQ = -1;
        this.JAXHHB = -1;
        this.RMCWGH = -11;
        this.UHEEMN = -12
    }
}

function Deactivate() {
    $I.TWMVGW.prototype.UGDPPZ.call(this);
    $I.CVRAYR.VAMLQD().ZBVLXL().HLZNSR().USDIRU((new $I.VYKQUV).TFDQYD(this, this.EYRAXV));
    this.LFOKZJ != null && this.LFOKZJ.XMSYEF(1);
    this.HXSEYM != null && (this.HXSEYM.NSFOQM(), this.HXSEYM = null);
    this.JIGMUE = !1;
    this.DCOIBA = !1;
    this.LFOKZJ = null;
    this.MQGEUF()
}

function Move(n, t) {
    var i, r;
    return this.HYEHYM = n, this.ZXKIEA = t, i = this.OKHQXM.BKJSEM(), n = i.NHCCYM(n), t = i.ZTMGNL(t), n = Math.max(0, n), t = Math.max(0, t), n = Math.min(n, (i.YJWQOV() - 1) * i.VVGOEM()), t = Math.min(t, (i.AKTUGZ() - 1) * i.MWRYXH()), (n != this.TZMTTQ || t != this.JAXHHB) && (this.TZMTTQ = Math.floor(n), this.JAXHHB = Math.floor(t), this.DMGEPN(), this.HXSEYM != null && (this.HXSEYM.EVVIKY(this.TZMTTQ + i.VVGOEM()), this.HXSEYM.WJAECQ(this.JAXHHB + i.MWRYXH()), this.HXSEYM.TYDVYV(55), this.HXSEYM.QOUDUX(1), this.HXSEYM.GUAUQN(1)), r = $I.KBUGOV.INVALID, this.JIGMUE && this.DCOIBA && (r = $I.KBUGOV.VALID), $I.TWMVGW.prototype.RYGPRC.call(this, r, !0, (this.TEPTWP + 1) * i.VVGOEM(), (this.KLUMNG + 1) * i.MWRYXH()), this.QDYOBH != null && this.QDYOBH.CQMFFL(this.TZMTTQ + this.RMCWGH, this.JAXHHB + this.UHEEMN, this.JIGMUE && this.DCOIBA), this.XUHOSH(!0)), !0
}

function Down() {
    return !0
}

function Up(n, t, i) {
    var r, u, f, e;
    if (i != "right") {
        if (this.XNSDOS(n, t), r = this.OKHQXM.BKJSEM(), u = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(r.GIYDVX()), u == null || u.SGRQBS() == null) return !0;
        var o = Math.floor(this.TZMTTQ / r.VVGOEM()),
            s = Math.floor(this.JAXHHB / r.MWRYXH()),
            h = !1;
        h = this.LFOKZJ == null ? u.SGRQBS().MNGEPV(this.DRJAZM, 1, o, s) : this.LFOKZJ.VJOJCW().BOXICG(o, s);
        h ? (f = $I.BUEVKL.QGLUJV().VXAMCA().citylayer.be, this.OKHQXM.VROCEG("audio/ui/Build_place"), f >= 0 && r.UWUJTK() && (e = r.BPLSSC(f, this.TZMTTQ + r.VVGOEM(), this.JAXHHB + r.MWRYXH(), null), e != null && e.TYDVYV(55))) : this.OKHQXM.RYKGLY("FactionSound/CantDeploHere");
        this.RQRRLL != null && this.RQRRLL.FOWLVG();
        this.MMRRAD || (this.OKHQXM.CWOVDH(-1, null), this.OKHQXM.NFJTBF(null), this.DMGEPN())
    }
    return !0
}

function UpdateMouseCursor() {
    var t = this.OKHQXM.BKJSEM(),
        r = t.DZVOAR().LJPXMU(),
        i = $I.CVRAYR.VAMLQD().ZBVLXL().HLZNSR(),
        u, f, n;
    i != null && (this.TEPTWP = Math.floor(this.TZMTTQ / t.VVGOEM()), this.KLUMNG = Math.floor(this.JAXHHB / t.MWRYXH()), this.LFOKZJ == null ? (this.DCOIBA = i.WTQMND(this.COUTMJ), u = Math.max(1, $I.CVRAYR.VAMLQD().TZZENG().ZFNREI()), this.JIGMUE = i.SGRQBS().CHBEVZ(this.DRJAZM, u, this.TEPTWP, this.KLUMNG)) : (this.DCOIBA = !0, f = this.LFOKZJ.VJOJCW().EZVHOT() == this.TEPTWP && this.LFOKZJ.VJOJCW().JXTDIO() == this.KLUMNG, this.JIGMUE = f || this.LFOKZJ.VJOJCW().IQKFXO(this.TEPTWP, this.KLUMNG, !1), this.OKHQXM.QIBGFH() == $I.HYIXRB.Move && (n = t.SJSEZB(this.TZMTTQ, this.JAXHHB), n != null && n.YWEVPV() != null && (r = n.YWEVPV().ZHIRJH() == $I.ZNGMPE.Garrison && n.YWEVPV().KGLYJZ() == null && $I.GGTBLR.DJCIEY(n.YWEVPV().YBCOGL(), this.LFOKZJ.VJOJCW().YBCOGL()) ? "garrisonLoad" : "swap"))));
    t.DZVOAR().ETAIBN(r)
}

function UpdateToolTip() {}

function VisUpdate(n) {
    $I.TWMVGW.prototype.QJOFJP.call(this, n)
}

function DeactivateToolTip() {}

function add_PlaceUnit(n) {
    var t = {},
        i, r = this.RQRRLL,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.RQRRLL, t.$r = $I.TSJVQL.JXWJWI($I.NGUFIO, u, i, t), this.RQRRLL = t.a, t.$r); while (r != i)
}

function remove_PlaceUnit(n) {
    var t = {},
        i, r = this.RQRRLL,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.RQRRLL, t.$r = $I.TSJVQL.JXWJWI($I.NGUFIO, u, i, t), this.RQRRLL = t.a, t.$r); while (r != i)
}

function add_PlaceUnitMove(n) {
    var t = {},
        i, r = this.QDYOBH,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.QDYOBH, t.$r = $I.TSJVQL.JXWJWI($I.FKKMOW, u, i, t), this.QDYOBH = t.a, t.$r); while (r != i)
}

function remove_PlaceUnitMove(n) {
    var t = {},
        i, r = this.QDYOBH,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.QDYOBH, t.$r = $I.TSJVQL.JXWJWI($I.FKKMOW, u, i, t), this.QDYOBH = t.a, t.$r); while (r != i)
}