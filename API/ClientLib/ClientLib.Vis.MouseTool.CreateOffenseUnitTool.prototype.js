function get_IsShiftPressed() {
    return this.MMRRAD
}

function Activate(n) {
    var t, r, e, o;
    if (this.OKHQXM.JHNKUE() != $I.SOIZAH.ArmySetup) this.OKHQXM.CWOVDH(-1, null);
    else {
        t = this.OKHQXM.ZJFLKT();
        this.FOHLOT(t.WHQQMY());
        $I.TWMVGW.prototype.SMEUFM.call(this, n);
        t.HGUZCL();
        this.OKHQXM.RYKGLY("FactionSound/SelectLocation");
        r = $I.BUEVKL.QGLUJV();
        $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI().CJNLZL((new $I.VYKQUV).TFDQYD(this, this.EYRAXV));
        var i = null,
            u = 0,
            f = 0;
        this.EWAFIE != null && (this.EWAFIE.XMSYEF(.6), i = r.WJVSOL(this.EWAFIE.AYXRUC()), u = Math.floor(this.EWAFIE.DGLCVK()) + t.VVGOEM(), f = Math.floor(this.EWAFIE.XYKFSB()) + t.MWRYXH());
        i == null && (i = r.WJVSOL(this.ZMCSHZ.ci.defc.e), $I.GGTBLR.GUDCSW(this.ONUWNF) != $I.ZNGMPE.Charge && this.ZMCSHZ.se != null && (e = this.ZMCSHZ.se[1], e == undefined ? !1 : !0) && (o = $I.GGTBLR.MHVIGV(this.ONUWNF), o != null && o.REBAFD() > 1 && (i = r.WJVSOL(e[0][0]))));
        this.EJKAET = (new $I.ZFKFPU).CBDLKU(this.WHQQMY(), i, u, f, null);
        this.EJKAET.OCAAHR(5);
        this.EJKAET.TYDVYV(55);
        this.EJKAET.QOUDUX(1);
        u + f == 0 && this.EJKAET.GUAUQN(0);
        this.HBMZYO = -1;
        this.OXVQBB = -1
    }
}

function Deactivate() {
    $I.TWMVGW.prototype.UGDPPZ.call(this);
    $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI().USDIRU((new $I.VYKQUV).TFDQYD(this, this.EYRAXV));
    this.EWAFIE != null && this.EWAFIE.XMSYEF(1);
    this.EJKAET != null && (this.EJKAET.NSFOQM(), this.EJKAET = null);
    this.GVHIBY = !1;
    this.EXYIXC = !1;
    this.EWAFIE = null;
    this.MQGEUF()
}

function Move(n, t) {
    var i, r, u, f;
    if (this.UAWPDA = n, this.PIBHZI = t, i = this.OKHQXM.ZJFLKT(), n != this.HBMZYO || t != this.OXVQBB) {
        if (this.HBMZYO = Math.floor(n), this.OXVQBB = Math.floor(t), this.DMGEPN(), r = i.SXSKPB(this.TEPTWP) + i.VVGOEM(), u = i.QTQTAG(this.KLUMNG) + i.MWRYXH(), this.EJKAET != null && (this.TEPTWP != -1 && this.KLUMNG != -1 ? (this.EJKAET.EVVIKY(r), this.EJKAET.WJAECQ(u), this.EJKAET.TYDVYV(55), this.EJKAET.QOUDUX(1), this.EJKAET.GUAUQN(1)) : this.EJKAET.GUAUQN(0)), f = $I.KBUGOV.INVALID, this.GVHIBY && this.EXYIXC && (f = $I.KBUGOV.VALID), $I.TWMVGW.prototype.RYGPRC.call(this, f, this.TEPTWP != -1 && this.KLUMNG != -1, r, u), this.WXWMZA != null) {
            var e = r - i.VVGOEM(),
                o = u - i.MWRYXH(),
                s = this.TEPTWP != -1 && this.KLUMNG != -1;
            s || (e = this.HBMZYO, o = this.OXVQBB);
            this.WXWMZA.CQMFFL(e, o, s)
        }
        this.XUHOSH(!0)
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
    var r, f, e;
    if (i != "right") {
        if (this.XNSDOS(n, t), r = this.OKHQXM.ZJFLKT(), f = $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI(), f == null || f.SGRQBS() == null) return !0;
        var s = !1,
            h = this.EWAFIE == null,
            u = r.VIXVNN(this.HBMZYO, this.OXVQBB);
        if (u != null && (s = h ? f.SGRQBS().MNGEPV(this.ONUWNF, 1, u.PosX, u.PosY) : this.EWAFIE.VJOJCW().BOXICG(u.PosX, u.PosY)), s) {
            if (e = $I.BUEVKL.QGLUJV().VXAMCA().citylayer.be, e >= 0 && r.UWUJTK()) {
                var c = r.SXSKPB(this.TEPTWP) + r.VVGOEM(),
                    l = r.QTQTAG(this.KLUMNG) + r.MWRYXH(),
                    o = r.BPLSSC(e, c, l, null);
                o != null && (o.TYDVYV(6), o.QOUDUX(this.HBMZYO))
            }
            h && this.OKHQXM.RYKGLY("FactionSound/UnitReady");
            this.OKHQXM.VROCEG("audio/ui/Build_place")
        } else this.OKHQXM.RYKGLY("FactionSound/CantDeploHere");
        this.YMZJZQ != null && this.YMZJZQ.FOWLVG();
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
    return this.EWAFIE != null ? $I.PLIBEB.MoveOffenseUnit : $I.PLIBEB.CreateOffenseUnit
}

function VisUpdate() {
    $I.UQGIGO.XBYUSR().HYVOUU("vis/base/effectsbase") && this.MFCRPV != null && this.MFCRPV.OCAAHR((new Date).getTime())
}

function GetMouseToolType() {
    return this.EWAFIE != null ? $I.PLIBEB.MoveOffenseUnit : $I.PLIBEB.CreateOffenseUnit
}

function get_GameDataID() {
    return this.ONUWNF
}

function SetInfo(n, t) {
    t ? (this.EWAFIE = n, this.ONUWNF = this.EWAFIE.VJOJCW().GAFYDL(), this.ZMCSHZ = this.EWAFIE.YBCOGL(), this.SOKCER = null) : (this.EWAFIE = null, this.ONUWNF = n, this.ZMCSHZ = $I.BUEVKL.QGLUJV().JXKWLE(this.ONUWNF), this.SOKCER = $I.CVRAYR.VAMLQD().TZZENG().ZFNREI() < 1 ? $I.XOJOCY.EOJXIS(1, this.ZMCSHZ) : $I.UDAQKL.DNVCCU($I.DBJKAB, 0))
}

function Activate(n) {
    var t, r, e, o;
    if (this.OKHQXM.JHNKUE() != $I.SOIZAH.ArmySetup) this.OKHQXM.CWOVDH(-1, null);
    else {
        t = this.OKHQXM.ZJFLKT();
        this.FOHLOT(t.WHQQMY());
        $I.TWMVGW.prototype.SMEUFM.call(this, n);
        t.HGUZCL();
        this.OKHQXM.RYKGLY("FactionSound/SelectLocation");
        r = $I.BUEVKL.QGLUJV();
        $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI().CJNLZL((new $I.VYKQUV).TFDQYD(this, this.EYRAXV));
        var i = null,
            u = 0,
            f = 0;
        this.EWAFIE != null && (this.EWAFIE.XMSYEF(.6), i = r.WJVSOL(this.EWAFIE.AYXRUC()), u = Math.floor(this.EWAFIE.DGLCVK()) + t.VVGOEM(), f = Math.floor(this.EWAFIE.XYKFSB()) + t.MWRYXH());
        i == null && (i = r.WJVSOL(this.ZMCSHZ.ci.defc.e), $I.GGTBLR.GUDCSW(this.ONUWNF) != $I.ZNGMPE.Charge && this.ZMCSHZ.se != null && (e = this.ZMCSHZ.se[1], e == undefined ? !1 : !0) && (o = $I.GGTBLR.MHVIGV(this.ONUWNF), o != null && o.REBAFD() > 1 && (i = r.WJVSOL(e[0][0]))));
        this.EJKAET = (new $I.ZFKFPU).CBDLKU(this.WHQQMY(), i, u, f, null);
        this.EJKAET.OCAAHR(5);
        this.EJKAET.TYDVYV(55);
        this.EJKAET.QOUDUX(1);
        u + f == 0 && this.EJKAET.GUAUQN(0);
        this.HBMZYO = -1;
        this.OXVQBB = -1
    }
}

function Deactivate() {
    $I.TWMVGW.prototype.UGDPPZ.call(this);
    $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI().USDIRU((new $I.VYKQUV).TFDQYD(this, this.EYRAXV));
    this.EWAFIE != null && this.EWAFIE.XMSYEF(1);
    this.EJKAET != null && (this.EJKAET.NSFOQM(), this.EJKAET = null);
    this.GVHIBY = !1;
    this.EXYIXC = !1;
    this.EWAFIE = null;
    this.MQGEUF()
}

function Move(n, t) {
    var i, r, u, f;
    if (this.UAWPDA = n, this.PIBHZI = t, i = this.OKHQXM.ZJFLKT(), n != this.HBMZYO || t != this.OXVQBB) {
        if (this.HBMZYO = Math.floor(n), this.OXVQBB = Math.floor(t), this.DMGEPN(), r = i.SXSKPB(this.TEPTWP) + i.VVGOEM(), u = i.QTQTAG(this.KLUMNG) + i.MWRYXH(), this.EJKAET != null && (this.TEPTWP != -1 && this.KLUMNG != -1 ? (this.EJKAET.EVVIKY(r), this.EJKAET.WJAECQ(u), this.EJKAET.TYDVYV(55), this.EJKAET.QOUDUX(1), this.EJKAET.GUAUQN(1)) : this.EJKAET.GUAUQN(0)), f = $I.KBUGOV.INVALID, this.GVHIBY && this.EXYIXC && (f = $I.KBUGOV.VALID), $I.TWMVGW.prototype.RYGPRC.call(this, f, this.TEPTWP != -1 && this.KLUMNG != -1, r, u), this.WXWMZA != null) {
            var e = r - i.VVGOEM(),
                o = u - i.MWRYXH(),
                s = this.TEPTWP != -1 && this.KLUMNG != -1;
            s || (e = this.HBMZYO, o = this.OXVQBB);
            this.WXWMZA.CQMFFL(e, o, s)
        }
        this.XUHOSH(!0)
    }
    return !0
}

function Down() {
    return !0
}

function Up(n, t, i) {
    var r, f, e;
    if (i != "right") {
        if (this.XNSDOS(n, t), r = this.OKHQXM.ZJFLKT(), f = $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI(), f == null || f.SGRQBS() == null) return !0;
        var s = !1,
            h = this.EWAFIE == null,
            u = r.VIXVNN(this.HBMZYO, this.OXVQBB);
        if (u != null && (s = h ? f.SGRQBS().MNGEPV(this.ONUWNF, 1, u.PosX, u.PosY) : this.EWAFIE.VJOJCW().BOXICG(u.PosX, u.PosY)), s) {
            if (e = $I.BUEVKL.QGLUJV().VXAMCA().citylayer.be, e >= 0 && r.UWUJTK()) {
                var c = r.SXSKPB(this.TEPTWP) + r.VVGOEM(),
                    l = r.QTQTAG(this.KLUMNG) + r.MWRYXH(),
                    o = r.BPLSSC(e, c, l, null);
                o != null && (o.TYDVYV(6), o.QOUDUX(this.HBMZYO))
            }
            h && this.OKHQXM.RYKGLY("FactionSound/UnitReady");
            this.OKHQXM.VROCEG("audio/ui/Build_place")
        } else this.OKHQXM.RYKGLY("FactionSound/CantDeploHere");
        this.YMZJZQ != null && this.YMZJZQ.FOWLVG();
        this.MMRRAD || (this.OKHQXM.CWOVDH(-1, null), this.OKHQXM.NFJTBF(null), this.DMGEPN())
    }
    return !0
}

function UpdateMouseCursor() {
    var i = this.OKHQXM.ZJFLKT(),
        u = i.DZVOAR().LJPXMU(),
        r, t, f, e, n;
    this.TEPTWP = -1;
    this.KLUMNG = -1;
    this.GVHIBY = !1;
    this.EXYIXC = !1;
    r = $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI();
    r != null && (t = i.VIXVNN(this.HBMZYO, this.OXVQBB), t != null && (this.TEPTWP = t.PosX, this.KLUMNG = t.PosY, this.EWAFIE == null ? (this.EXYIXC = r.WTQMND(this.SOKCER), f = Math.max(1, $I.CVRAYR.VAMLQD().TZZENG().ERNBFF()), this.GVHIBY = r.SGRQBS().CHBEVZ(this.ONUWNF, f, this.TEPTWP, this.KLUMNG)) : (this.EXYIXC = !0, e = t != null && this.EWAFIE.VJOJCW().EZVHOT() == this.TEPTWP && this.EWAFIE.VJOJCW().JXTDIO() == this.KLUMNG, this.GVHIBY = e || this.EWAFIE.VJOJCW().IQKFXO(this.TEPTWP, this.KLUMNG, !1), this.OKHQXM.QIBGFH() == $I.HYIXRB.Move && (n = i.SJSEZB(this.HBMZYO, this.OXVQBB), n != null && n.YWEVPV() != null && (u = n.YWEVPV().ZHIRJH() == $I.ZNGMPE.Garrison && n.YWEVPV().KGLYJZ() == null && $I.GGTBLR.DJCIEY(n.YWEVPV().YBCOGL(), this.EWAFIE.VJOJCW().YBCOGL()) ? "garrisonLoad" : "swap")))));
    i.DZVOAR().ETAIBN(u)
}

function UpdateToolTip() {}

function DeactivateToolTip() {}

function DismissCommandDone() {
    this.OKHQXM.CWOVDH(-1, null)
}

function add_PlaceArmyUnit(n) {
    var t = {},
        i, r = this.YMZJZQ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.YMZJZQ, t.$r = $I.TSJVQL.JXWJWI($I.EUHJSG, u, i, t), this.YMZJZQ = t.a, t.$r); while (r != i)
}

function remove_PlaceArmyUnit(n) {
    var t = {},
        i, r = this.YMZJZQ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.YMZJZQ, t.$r = $I.TSJVQL.JXWJWI($I.EUHJSG, u, i, t), this.YMZJZQ = t.a, t.$r); while (r != i)
}

function add_PlaceArmyMove(n) {
    var t = {},
        i, r = this.WXWMZA,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.WXWMZA, t.$r = $I.TSJVQL.JXWJWI($I.AVPRZU, u, i, t), this.WXWMZA = t.a, t.$r); while (r != i)
}

function remove_PlaceArmyMove(n) {
    var t = {},
        i, r = this.WXWMZA,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.WXWMZA, t.$r = $I.TSJVQL.JXWJWI($I.AVPRZU, u, i, t), this.WXWMZA = t.a, t.$r); while (r != i)
}