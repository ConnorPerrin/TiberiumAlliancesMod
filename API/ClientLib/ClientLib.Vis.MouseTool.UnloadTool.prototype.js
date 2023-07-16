function get_IsShiftPressed() {
    return this.MMRRAD
}

function Activate(n) {
    var r, t, i;
    $I.TWMVGW.prototype.SMEUFM.call(this, n);
    n != null && (t = n, this.HPMJCM = t.YWEVPV().KGLYJZ(), this.YLQJSS = this.OKHQXM.KIJEST(), this.FOHLOT(this.YLQJSS.WHQQMY()), this.YLQJSS.DZVOAR().ETAIBN("garrisonUnload"), this.YLQJSS.HGUZCL(), this.OKHQXM.RYKGLY("FactionSound/SelectLocation"), i = $I.BUEVKL.QGLUJV().WJVSOL(this.HPMJCM.YBCOGL().ci.defc.e), this.HPMJCM.SZEHSS() && this.HPMJCM.ZHIRJH() != $I.ZNGMPE.Charge && this.HPMJCM.YBCOGL().se != null && (r = this.HPMJCM.YBCOGL().se[1], r == undefined ? !1 : !0) && (i = $I.BUEVKL.QGLUJV().WJVSOL(r[0][0])), i != null && (this.VQTMQP = (new $I.ZFKFPU).CBDLKU(this.WHQQMY(), i, Math.floor(t.DGLCVK()) + this.YLQJSS.VVGOEM(), Math.floor(t.XYKFSB()) + this.YLQJSS.MWRYXH(), null), this.VQTMQP.OCAAHR(5)), this.XNSDOS(t.DGLCVK(), Math.floor(t.XYKFSB())))
}

function Deactivate() {
    $I.TWMVGW.prototype.UGDPPZ.call(this);
    this.VQTMQP != null && (this.VQTMQP.NSFOQM(), this.VQTMQP = null);
    $I.ILHIOR.GILABD().ENNVKQ($I.HYIXRB.Default)
}

function Move(n, t) {
    var i, r, f, u, e;
    if (n != this.PXVCMB || t != this.WDVBNR) {
        if (this.PXVCMB = Math.floor(n), this.WDVBNR = Math.floor(t), i = Math.floor(this.YLQJSS.NHCCYM(n)), r = Math.floor(this.YLQJSS.ZTMGNL(t)), this.OKHQXM.JHNKUE() == $I.SOIZAH.ArmySetup) {
            if (f = this.OKHQXM.ZJFLKT().VIXVNN(n, t), f == null) return !0;
            i = this.OKHQXM.ZJFLKT().SXSKPB(f.PosX);
            r = this.OKHQXM.ZJFLKT().QTQTAG(f.PosY)
        } else u = this.OKHQXM.BKJSEM(), i = Math.max(0, Math.min(i, (u.YJWQOV() - 1) * u.VVGOEM())), r = Math.max(0, Math.min(r, (u.AKTUGZ() - 1) * u.MWRYXH()));
        this.TEPTWP = Math.floor(i / this.YLQJSS.VVGOEM());
        this.KLUMNG = Math.floor(r / this.YLQJSS.MWRYXH());
        this.VQTMQP != null && (this.VQTMQP.EVVIKY(i + this.YLQJSS.VVGOEM()), this.VQTMQP.WJAECQ(r + this.YLQJSS.MWRYXH()), this.VQTMQP.TYDVYV(3 + this.KLUMNG), this.VQTMQP.QOUDUX(this.TEPTWP * 4 + 3));
        e = this.OKHQXM.QRVZAL(i, r);
        $I.TWMVGW.prototype.RYGPRC.call(this, e != null ? $I.KBUGOV.INVALID : $I.KBUGOV.VALID, !0, i + this.YLQJSS.VVGOEM(), r + this.YLQJSS.MWRYXH());
        this.OKHQXM.JHNKUE() == $I.SOIZAH.ArmySetup && this.ZBOQHP != null ? this.ZBOQHP.CQMFFL(i, r, e == null) : this.OKHQXM.JHNKUE() == $I.SOIZAH.DefenseSetup && this.IPNSDD != null && this.IPNSDD.CQMFFL(i, r, e == null)
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
    var r;
    if (i != "right") {
        if (this.XNSDOS(n, t), this.HPMJCM.YBCOGL().pt == 1) this.HPMJCM.BOXICG(this.TEPTWP, this.KLUMNG), this.MESLKK != null && this.MESLKK.FOWLVG();
        else if (this.HPMJCM.YBCOGL().pt == 2) {
            if (r = $I.ILHIOR.GILABD().ZJFLKT().VIXVNN(this.PXVCMB, this.WDVBNR), r == null) return !0;
            this.HPMJCM.BOXICG(r.PosX, r.PosY);
            this.PPCWCB != null && this.PPCWCB.FOWLVG()
        }
        this.OKHQXM.CWOVDH(0, null);
        this.OKHQXM.ENNVKQ($I.HYIXRB.Move)
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
    return $I.PLIBEB.UnloadTool
}

function VisUpdate(n) {
    $I.TWMVGW.prototype.QJOFJP.call(this, n)
}

function Activate(n) {
    var r, t, i;
    $I.TWMVGW.prototype.SMEUFM.call(this, n);
    n != null && (t = n, this.HPMJCM = t.YWEVPV().KGLYJZ(), this.YLQJSS = this.OKHQXM.KIJEST(), this.FOHLOT(this.YLQJSS.WHQQMY()), this.YLQJSS.DZVOAR().ETAIBN("garrisonUnload"), this.YLQJSS.HGUZCL(), this.OKHQXM.RYKGLY("FactionSound/SelectLocation"), i = $I.BUEVKL.QGLUJV().WJVSOL(this.HPMJCM.YBCOGL().ci.defc.e), this.HPMJCM.SZEHSS() && this.HPMJCM.ZHIRJH() != $I.ZNGMPE.Charge && this.HPMJCM.YBCOGL().se != null && (r = this.HPMJCM.YBCOGL().se[1], r == undefined ? !1 : !0) && (i = $I.BUEVKL.QGLUJV().WJVSOL(r[0][0])), i != null && (this.VQTMQP = (new $I.ZFKFPU).CBDLKU(this.WHQQMY(), i, Math.floor(t.DGLCVK()) + this.YLQJSS.VVGOEM(), Math.floor(t.XYKFSB()) + this.YLQJSS.MWRYXH(), null), this.VQTMQP.OCAAHR(5)), this.XNSDOS(t.DGLCVK(), Math.floor(t.XYKFSB())))
}

function Deactivate() {
    $I.TWMVGW.prototype.UGDPPZ.call(this);
    this.VQTMQP != null && (this.VQTMQP.NSFOQM(), this.VQTMQP = null);
    $I.ILHIOR.GILABD().ENNVKQ($I.HYIXRB.Default)
}

function Move(n, t) {
    var i, r, f, u, e;
    if (n != this.PXVCMB || t != this.WDVBNR) {
        if (this.PXVCMB = Math.floor(n), this.WDVBNR = Math.floor(t), i = Math.floor(this.YLQJSS.NHCCYM(n)), r = Math.floor(this.YLQJSS.ZTMGNL(t)), this.OKHQXM.JHNKUE() == $I.SOIZAH.ArmySetup) {
            if (f = this.OKHQXM.ZJFLKT().VIXVNN(n, t), f == null) return !0;
            i = this.OKHQXM.ZJFLKT().SXSKPB(f.PosX);
            r = this.OKHQXM.ZJFLKT().QTQTAG(f.PosY)
        } else u = this.OKHQXM.BKJSEM(), i = Math.max(0, Math.min(i, (u.YJWQOV() - 1) * u.VVGOEM())), r = Math.max(0, Math.min(r, (u.AKTUGZ() - 1) * u.MWRYXH()));
        this.TEPTWP = Math.floor(i / this.YLQJSS.VVGOEM());
        this.KLUMNG = Math.floor(r / this.YLQJSS.MWRYXH());
        this.VQTMQP != null && (this.VQTMQP.EVVIKY(i + this.YLQJSS.VVGOEM()), this.VQTMQP.WJAECQ(r + this.YLQJSS.MWRYXH()), this.VQTMQP.TYDVYV(3 + this.KLUMNG), this.VQTMQP.QOUDUX(this.TEPTWP * 4 + 3));
        e = this.OKHQXM.QRVZAL(i, r);
        $I.TWMVGW.prototype.RYGPRC.call(this, e != null ? $I.KBUGOV.INVALID : $I.KBUGOV.VALID, !0, i + this.YLQJSS.VVGOEM(), r + this.YLQJSS.MWRYXH());
        this.OKHQXM.JHNKUE() == $I.SOIZAH.ArmySetup && this.ZBOQHP != null ? this.ZBOQHP.CQMFFL(i, r, e == null) : this.OKHQXM.JHNKUE() == $I.SOIZAH.DefenseSetup && this.IPNSDD != null && this.IPNSDD.CQMFFL(i, r, e == null)
    }
    return !0
}

function Down() {
    return !0
}

function Up(n, t, i) {
    var r;
    if (i != "right") {
        if (this.XNSDOS(n, t), this.HPMJCM.YBCOGL().pt == 1) this.HPMJCM.BOXICG(this.TEPTWP, this.KLUMNG), this.MESLKK != null && this.MESLKK.FOWLVG();
        else if (this.HPMJCM.YBCOGL().pt == 2) {
            if (r = $I.ILHIOR.GILABD().ZJFLKT().VIXVNN(this.PXVCMB, this.WDVBNR), r == null) return !0;
            this.HPMJCM.BOXICG(r.PosX, r.PosY);
            this.PPCWCB != null && this.PPCWCB.FOWLVG()
        }
        this.OKHQXM.CWOVDH(0, null);
        this.OKHQXM.ENNVKQ($I.HYIXRB.Move)
    }
    return !0
}

function GetMouseToolType() {
    return $I.PLIBEB.UnloadTool
}

function VisUpdate(n) {
    $I.TWMVGW.prototype.QJOFJP.call(this, n)
}

function add_PlaceUnit(n) {
    var t = {},
        i, r = this.MESLKK,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.MESLKK, t.$r = $I.TSJVQL.JXWJWI($I.NGUFIO, u, i, t), this.MESLKK = t.a, t.$r); while (r != i)
}

function remove_PlaceUnit(n) {
    var t = {},
        i, r = this.MESLKK,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.MESLKK, t.$r = $I.TSJVQL.JXWJWI($I.NGUFIO, u, i, t), this.MESLKK = t.a, t.$r); while (r != i)
}

function add_PlaceUnitMove(n) {
    var t = {},
        i, r = this.IPNSDD,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.IPNSDD, t.$r = $I.TSJVQL.JXWJWI($I.FKKMOW, u, i, t), this.IPNSDD = t.a, t.$r); while (r != i)
}

function remove_PlaceUnitMove(n) {
    var t = {},
        i, r = this.IPNSDD,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.IPNSDD, t.$r = $I.TSJVQL.JXWJWI($I.FKKMOW, u, i, t), this.IPNSDD = t.a, t.$r); while (r != i)
}

function add_PlaceArmyUnit(n) {
    var t = {},
        i, r = this.PPCWCB,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.PPCWCB, t.$r = $I.TSJVQL.JXWJWI($I.EUHJSG, u, i, t), this.PPCWCB = t.a, t.$r); while (r != i)
}

function remove_PlaceArmyUnit(n) {
    var t = {},
        i, r = this.PPCWCB,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.PPCWCB, t.$r = $I.TSJVQL.JXWJWI($I.EUHJSG, u, i, t), this.PPCWCB = t.a, t.$r); while (r != i)
}

function add_PlaceArmyMove(n) {
    var t = {},
        i, r = this.ZBOQHP,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.ZBOQHP, t.$r = $I.TSJVQL.JXWJWI($I.AVPRZU, u, i, t), this.ZBOQHP = t.a, t.$r); while (r != i)
}

function remove_PlaceArmyMove(n) {
    var t = {},
        i, r = this.ZBOQHP,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.ZBOQHP, t.$r = $I.TSJVQL.JXWJWI($I.AVPRZU, u, i, t), this.ZBOQHP = t.a, t.$r); while (r != i)
}