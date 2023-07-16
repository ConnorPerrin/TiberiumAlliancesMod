function get_VisAreaComplete() {
    return !0
}

function get_IsZoomable() {
    return this.YEJSQO
}

function set_IsZoomable(n) {
    var t;
    this.YEJSQO = n;
    this.YEJSQO || (t = this.UVURBD(), this.CLKEQT(t))
}

function get_PosX() {
    return this.JZNSHH
}

function get_PosY() {
    return this.TTZQCK
}

function get_ZoomFactor() {
    return this.APBQYW
}

function set_ZoomFactor(n) {
    var t = n;
    !this.GOSXGV() || t < this.TFIAWQ() ? t = this.TFIAWQ() : t > this.RJAGZS() && (t = this.RJAGZS());
    this.APBQYW != t && (this.JZNSHH = this.UJPRER() / this.APBQYW / 2 + this.JZNSHH - this.UJPRER() / t / 2, this.TTZQCK = this.ULNTVQ() / this.APBQYW / 2 + this.TTZQCK - this.ULNTVQ() / t / 2, this.APBQYW = t, this.RTYPFY.ZRLSWB(this.APBQYW), this.BBIZWD(), this.RHHLWB(), this.ABBRDG(), this.HFLIGT != null && this.HFLIGT.FOWLVG())
}

function get_MinZoomFactor() {
    return this.XNVDVT.TFIAWQ()
}

function get_MaxZoomFactor() {
    return this.YYGFRB
}

function get_ViewWidth() {
    return this.HJPPSQ
}

function get_ViewHeight() {
    return this.WFAOZS
}

function get_ShowEffects() {
    return $I.UQGIGO.XBYUSR().HYVOUU("vis/base/effectsbase")
}

function ViewUpdate() {
    this.RTYPFY.NXPMYM()
}

function SetActive(n) {
    this.KVGPIK(n)
}

function GetHtmlNode() {
    return this.RTYPFY.LKRKLT()
}

function ClearSelectionImages() {
    for (var n = 0; n < this.YPHDNF.l.length; n++) this.RRBVEU.NEHMEK(this.YPHDNF.l[n]);
    this.YPHDNF = (new $I.UCRMVA).SLPWTI()
}

function AddSelectionImage(n, t, i, r, u, f) {
    var e = this.RRBVEU.TDBBHP("image", null);
    e.EVVIKY(n);
    e.WJAECQ(t);
    e.NQJJZY(r);
    e.BMIJEH(i);
    e.PTVNAR(u);
    e.TYDVYV(f);
    this.RRBVEU.UVSZDF(e);
    this.YPHDNF.l.push(e)
}

function get_View() {
    return this.RTYPFY
}

function get_GridWidth() {
    return this.VVQVWC
}

function get_GridHeight() {
    return this.WPITOM
}

function get_MinXPosition() {
    return $I.PQDILF.JKMBTR + this.YEFVMW
}

function get_MinYPosition() {
    return $I.PQDILF.JYSMBV + this.GHRWDP
}

function get_MaxXPosition() {
    return $I.PQDILF.ILZDUM
}

function get_MaxYPosition() {
    return $I.PQDILF.HCQGWR
}

function set_MaxYPosition() {}

function SnapToXGrid(n) {
    return Math.floor(n / this.VVGOEM()) * this.VVGOEM()
}

function SnapToYGrid(n) {
    return Math.floor(n / this.MWRYXH()) * this.MWRYXH()
}

function MoveObject() {
    return !1
}

function MovePosition(n, t) {
    var i, r;
    return n == 0 && t == 0 ? !1 : (i = this.JZNSHH, r = this.TTZQCK, this.JZNSHH += n, this.TTZQCK += t, this.ABBRDG(), this.JZNSHH == i) ? !(this.TTZQCK == r) : !0
}

function SetPosition(n, t) {
    this.JZNSHH = n;
    this.TTZQCK = t;
    this.ABBRDG()
}

function CenterGridPosition(n, t) {
    this.LQOHQF((n + .5) * this.VVGOEM() - Math.floor(this.RTYPFY.DZSXHC() / this.RTYPFY.LVCGWY() / 2), (t + .5) * this.MWRYXH() - Math.floor(this.RTYPFY.KUAIEC() / this.RTYPFY.LVCGWY() / 2));
    this.RTYPFY.NXPMYM()
}

function SetViewSize(n, t) {
    this.HJPPSQ = n;
    this.WFAOZS = t;
    this.RTYPFY != null && (this.RTYPFY.BMIJEH(n), this.RTYPFY.NQJJZY(t));
    this.ABBRDG();
    this.RHHLWB()
}

function ScreenPosFromWorldPosX(n) {
    return (n - this.JZNSHH) * this.APBQYW
}

function ScreenPosFromWorldPosY(n) {
    return (n - this.TTZQCK) * this.APBQYW
}

function WorldPosFromScreenPosX(n) {
    return n / this.APBQYW + this.JZNSHH
}

function WorldPosFromScreenPosY(n) {
    return n / this.APBQYW + this.TTZQCK
}

function ClearEffects() {
    for (var n = 0; n < this.THBYRB.l.length; n++) this.THBYRB.l[n].NSFOQM();
    for (this.THBYRB.l = [], n = 0; n < this.NBYBSX.l.length; n++) this.NBYBSX.l[n].NSFOQM();
    for (this.NBYBSX.l = [], n = 0; n < this.ZQPXEJ.c; n++) this.ZQPXEJ.d[n].NSFOQM();
    this.ZQPXEJ.AMMYJA()
}

function MoveEffects(n, t, i) {
    for (var r, u = 0; u < this.THBYRB.l.length; u++) this.TWPYLN(this.THBYRB.l[u], n, t, i);
    for (r = 0; r < this.NBYBSX.l.length; r++) this.SRCWHX(this.NBYBSX.l[r], n, t, i)
}

function MoveEffect(n, t, i, r) {
    var u, f;
    i != 0 && (i /= t, r ? (n.DGLCVK() < 0 && n.EVVIKY(this.UJPRER()), n.DGLCVK() > this.UJPRER() && n.EVVIKY(0), u = n.DGLCVK() + i, n.EVVIKY(u)) : (n.XYKFSB() < 0 && n.WJAECQ(this.ULNTVQ()), n.XYKFSB() > this.ULNTVQ() && n.WJAECQ(0), f = n.XYKFSB() + i, n.WJAECQ(f)))
}

function SetMuzzleFleshEffectId(n) {
    this.VJZNMJ = n
}

function setEffectPercentage(n) {
    for (var r, i = {}, t = 0; t < this.NBYBSX.l.length; t++) this.NBYBSX.l[t].HFCBQF(this.WDIMCA, n), this.NBYBSX.l[t].RASQLZ(this.IBIJJT, n), (i.$r = this.ZQPXEJ.ZOXRAI(t, i), r = i.b, i.$r) && (r.EVVIKY(this.NBYBSX.l[t].DGLCVK() + this.NBYBSX.l[t].IILGFN($I.ROXVCN.Weapon, n)), r.WJAECQ(this.NBYBSX.l[t].XYKFSB() + this.NBYBSX.l[t].OGFCXL($I.ROXVCN.Weapon, n)), r.HFCBQF($I.UIBGSJ.Direction, n))
}

function UpdateEffect(n, t) {
    for (var i = 0; i < this.THBYRB.l.length;)
        if (this.THBYRB.l[i] == n) {
            if (!n.FFYVGM(t)) {
                n.OCAAHR(t);
                return
            }
            n.NSFOQM();
            this.THBYRB.l.splice(i, 1)
        } else i++
}

function StartEffect(n, t, i, r, u) {
    var e = $I.BUEVKL.QGLUJV().WJVSOL(n),
        f;
    return e == null ? null : (f = (new $I.ZFKFPU).CBDLKU(this.RRBVEU, e, t, i, r), this.THBYRB.l.push(f), f.OMQOQE(this.SWXQVC), u >= 0 && f.LTWFAK(u), f)
}

function StartMultiEffect(n, t, i, r) {
    var e, s = $I.BUEVKL.QGLUJV(),
        f = s.JABFPR(n),
        u, o;
    f != null && (u = (new $I.WZPEFV).CBDLKU(this.RRBVEU, f, t, i, r), this.NBYBSX.l.push(u), u.OMQOQE(this.SWXQVC), this.VJZNMJ > -1 && (f = s.JABFPR(this.VJZNMJ), f != null && (o = (e = (new $I.WZPEFV).CBDLKU(this.RRBVEU, f, t, i, r), e.EVVIKY(u.DGLCVK() + u.QOFKLQ($I.ROXVCN.Weapon, 0)), e.WJAECQ(u.XYKFSB() + u.KQNOAY($I.ROXVCN.Weapon, 0)), e), o.HFCBQF($I.UIBGSJ.Direction, 0), o.OMQOQE(this.SWXQVC), this.ZQPXEJ.GXVKTX(this.NBYBSX.l.length - 1, o))))
}

function getEffectFromPosition(n, t) {
    for (var i = 0; i < this.THBYRB.l.length; i++) {
        var r = this.XNVDVT.DCVCTJ(this.THBYRB.l[i].SMUCXW().DGLCVK()),
            u = this.XNVDVT.DCVCTJ(this.THBYRB.l[i].SMUCXW().DGLCVK() + this.THBYRB.l[i].SMUCXW().DZSXHC()),
            f = this.XNVDVT.YMZPOC(this.THBYRB.l[i].SMUCXW().XYKFSB()),
            e = this.XNVDVT.YMZPOC(this.THBYRB.l[i].SMUCXW().XYKFSB() + this.THBYRB.l[i].SMUCXW().KUAIEC());
        if (n >= r && n <= u && t >= f && t <= e) return this.THBYRB.l[i].IOUEYL(!0), this.THBYRB.l[i];
        this.THBYRB.l[i].IOUEYL(!1)
    }
    return null
}

function setEffectHighlight(n, t) {
    for (var i = 0; i < this.THBYRB.l.length; i++) {
        var r = this.XNVDVT.DCVCTJ(this.THBYRB.l[i].SMUCXW().DGLCVK()),
            u = this.XNVDVT.DCVCTJ(this.THBYRB.l[i].SMUCXW().DGLCVK() + this.THBYRB.l[i].SMUCXW().DZSXHC()),
            f = this.XNVDVT.YMZPOC(this.THBYRB.l[i].SMUCXW().XYKFSB()),
            e = this.XNVDVT.YMZPOC(this.THBYRB.l[i].SMUCXW().XYKFSB() + this.THBYRB.l[i].SMUCXW().KUAIEC());
        if (n >= r && n <= u && t >= f && t <= e) {
            this.THBYRB.l[i].IOUEYL(!0);
            break
        }
        this.THBYRB.l[i].IOUEYL(!1)
    }
    for (i = 0; i < this.NBYBSX.l.length; i++) {
        var o = this.XNVDVT.DCVCTJ(this.NBYBSX.l[i].SMUCXW().DGLCVK()),
            s = this.XNVDVT.DCVCTJ(this.NBYBSX.l[i].SMUCXW().DGLCVK() + this.NBYBSX.l[i].SMUCXW().DZSXHC()),
            h = this.XNVDVT.YMZPOC(this.NBYBSX.l[i].SMUCXW().XYKFSB()),
            c = this.XNVDVT.YMZPOC(this.NBYBSX.l[i].SMUCXW().XYKFSB() + this.NBYBSX.l[i].SMUCXW().KUAIEC());
        if (n >= o && n <= s && t >= h && t <= c) {
            this.NBYBSX.l[i].IOUEYL(!0);
            return
        }
        this.NBYBSX.l[i].IOUEYL(!1)
    }
}

function setShowLocators(n) {
    for (var t, i = 0; i < this.THBYRB.l.length; i++) this.THBYRB.l[i].RUINNH(n, this.IBIJJT);
    for (t = 0; t < this.NBYBSX.l.length; t++) this.NBYBSX.l[t].RUINNH(n, this.IBIJJT)
}

function get_ForceLoop() {
    return this.SWXQVC
}

function set_ForceLoop(n) {
    this.SWXQVC = n
}

function ActivateFog(n) {
    n ? this.BDRHCK++ : this.BDRHCK--;
    (this.BDRHCK == 0 || this.BDRHCK == 1) && this.EIKDEK()
}

function get_RunningMultiEffectType() {
    return this.WDIMCA
}

function set_RunningMultiEffectType(n) {
    this.WDIMCA = n
}

function get_RunningLocatorEffectType() {
    return this.IBIJJT
}

function set_RunningLocatorEffectType(n) {
    var t, i;
    for (this.IBIJJT = n, t = 0; t < this.THBYRB.l.length; t++) this.THBYRB.l[t].VSZTLQ(this.IBIJJT);
    for (i = 0; i < this.NBYBSX.l.length; i++) this.NBYBSX.l[i].VSZTLQ(this.IBIJJT)
}

function get_UpdateMultiEffects() {
    return this.VKWLUS
}

function set_UpdateMultiEffects(n) {
    this.VKWLUS = n
}

function get_IsActive() {
    return this.QWDBDC
}

function add_ZoomFactorChange(n) {
    var t = {},
        i, r = this.HFLIGT,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.HFLIGT, t.$r = $I.TSJVQL.JXWJWI($I.VLPMEA, u, i, t), this.HFLIGT = t.a, t.$r); while (r != i)
}

function remove_ZoomFactorChange(n) {
    var t = {},
        i, r = this.HFLIGT,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.HFLIGT, t.$r = $I.TSJVQL.JXWJWI($I.VLPMEA, u, i, t), this.HFLIGT = t.a, t.$r); while (r != i)
}

function add_PositionChange(n) {
    var t = {},
        i, r = this.SCLNWI,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.SCLNWI, t.$r = $I.TSJVQL.JXWJWI($I.GEEWNE, u, i, t), this.SCLNWI = t.a, t.$r); while (r != i)
}

function remove_PositionChange(n) {
    var t = {},
        i, r = this.SCLNWI,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.SCLNWI, t.$r = $I.TSJVQL.JXWJWI($I.GEEWNE, u, i, t), this.SCLNWI = t.a, t.$r); while (r != i)
}

function add_ViewSizeChange(n) {
    var t = {},
        i, r = this.PTQGXB,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.PTQGXB, t.$r = $I.TSJVQL.JXWJWI($I.UTCIYP, u, i, t), this.PTQGXB = t.a, t.$r); while (r != i)
}

function remove_ViewSizeChange(n) {
    var t = {},
        i, r = this.PTQGXB,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.PTQGXB, t.$r = $I.TSJVQL.JXWJWI($I.UTCIYP, u, i, t), this.PTQGXB = t.a, t.$r); while (r != i)
}

function get_SceneType() {
    return this.ENNERY
}

function get_Mode() {
    return this.QOXVTM
}

function set_Mode(n) {
    this.QOXVTM = n
}

function Init() {
    var u, t, i, f, n, r;
    this.RTYPFY.LSWBIS(1);
    this.GRURAX() == "SVG" ? (u = $I.CVRAYR.VAMLQD().ONGTRQ().WMEKEJ() == $I.KGPDNC.GDIFaction ? "worldview/gdi/background.svg" : "worldview/nod/background.svg", this.QAIGRY = this.RRBVEU.TDBBHP("image", null), this.QAIGRY.BMIJEH($I.PQDILF.ILZDUM * $I.PQDILF.RRBDKX), this.QAIGRY.NQJJZY($I.PQDILF.HCQGWR * $I.PQDILF.WPZREN), this.QAIGRY.PTVNAR(u)) : (t = $I.CVRAYR.VAMLQD().ONGTRQ().WMEKEJ() == $I.KGPDNC.GDIFaction ? "worldview/gdi/background.png" : "worldview/nod/background.png", i = $I.QOKGWR.WBFJPT().VDQLZP(t), this.QAIGRY = this.RRBVEU.TDBBHP("image", null), this.QAIGRY.BMIJEH(i.w * $I.PQDILF.RRBDKX), this.QAIGRY.NQJJZY(i.h * $I.PQDILF.WPZREN), this.QAIGRY.PTVNAR(t));
    this.QAIGRY.EVVIKY(0);
    this.QAIGRY.WJAECQ(0);
    this.QAIGRY.TYDVYV(1);
    this.QAIGRY.QOUDUX(1);
    this.RRBVEU.UVSZDF(this.QAIGRY);
    this.URRZRE();
    this.OHEENB();
    this.GRURAX() == "SVG" && (f = $I.CVRAYR.VAMLQD().ONGTRQ().WMEKEJ() == $I.KGPDNC.GDIFaction ? "worldview/gdi/logo.svg" : "worldview/nod/logo.svg", n = this.RRBVEU.TDBBHP("image", null), n.TYDVYV(2), n.QOUDUX(2), n.BMIJEH(this.QAIGRY.DZSXHC() / 3.34), n.NQJJZY(this.QAIGRY.KUAIEC() / 3.34), n.EVVIKY(914), n.WJAECQ(20), n.PTVNAR(f), this.RRBVEU.UVSZDF(n));
    r = $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI();
    r != null && (this.LUKPLF = r.UQGPFX());
    this.DKPSEK = (new $I.WYTOTB).CTOKHC(this);
    this.UTZPBI = (new $I.UDBZSB).SLPWTI();
    this.YPYITV = (new $I.UDBZSB).SLPWTI();
    this.XHXWXO = (new $I.UDBZSB).SLPWTI();
    this.EJKCWS = (new $I.UDBZSB).SLPWTI();
    this.FABDRL = (new $I.UDBZSB).SLPWTI();
    this.NDLXYV = (new $I.UDBZSB).SLPWTI()
}

function CenterView() {
    this.JZNSHH = Math.floor(($I.PQDILF.ILZDUM - this.UJPRER() / this.UVURBD()) / 2);
    this.TTZQCK = Math.floor(($I.PQDILF.HCQGWR - this.ULNTVQ() / this.UVURBD()) / 2);
    this.JZNSHH < 0 && (this.YEFVMW = Math.floor(this.JZNSHH));
    this.TTZQCK < 0 && (this.GHRWDP = Math.floor(this.TTZQCK));
    this.ABBRDG()
}

function SetActive(n) {
    this.KVGPIK(n)
}

function OnCitiesChange() {
    var r, t, i, u, f;
    if (this.GKAJCI() && this.XLZCJW()) {
        var e = $I.CVRAYR.VAMLQD().ZBVLXL().LVIQBQ(),
            o = e.d,
            n = {
                k: null,
                v: null
            };
        for (r in o) n.k = r, n.v = o[r], n.v.UBTDFB() && (this.XHXWXO.XOHVCR(n.k) ? this.XHXWXO.d[n.k].DNOUSX(n.v) : (t = (new $I.TKEAKJ).ICONFK(this, $I.CDNXVQ.WorldCityOwn, n.v), this.XHXWXO.GXVKTX(n.k, t)));
        var r = (new $I.UCRMVA).SLPWTI(),
            u = this.XHXWXO.d,
            t = {
                k: null,
                v: null
            };
        for (i in u) t.k = i, t.v = u[i], e.XOHVCR(t.k) && e.d[t.k].UBTDFB() || r.l.push(t.k);
        for (i = r.l, f = 0; f < i.length; f++) u = i[f], this.XHXWXO.d[u].NSFOQM(), this.XHXWXO.XUDPAL(u)
    } else this.HENQMI(this.XHXWXO)
}

function OnAllianceMarkerChange() {
    var e, n, t, i, r, u, f;
    if (this.GKAJCI() && this.GEAXPU()) {
        for (e = $I.CVRAYR.VAMLQD().FMKUPK().HSTVCE().l, t = 0; t < e.length; t++) n = e[t], this.EJKCWS.XOHVCR(n.UQGPFX()) ? this.EJKCWS.d[n.UQGPFX()].DNOUSX(n) : (i = (new $I.TKEAKJ).ICONFK(this, $I.CDNXVQ.WorldAllianceMarker, n), this.EJKCWS.GXVKTX(n.UQGPFX(), i));
        var t = (new $I.UCRMVA).SLPWTI(),
            u = this.EJKCWS.d,
            i = {
                k: null,
                v: null
            };
        for (r in u) i.k = r, i.v = u[r], $I.CVRAYR.VAMLQD().FMKUPK().QKHUSN(i.k) == null && t.l.push(i.k);
        for (r = t.l, f = 0; f < r.length; f++) u = r[f], this.EJKCWS.d[u].NSFOQM(), this.EJKCWS.XUDPAL(u)
    } else this.HENQMI(this.EJKCWS)
}

function get_IsShowPois() {
    return this.PHNAOV
}

function set_IsShowPois(n) {
    var t = n != this.PHNAOV;
    this.PHNAOV = n;
    t && this.DZWSWO()
}

function get_IsShowSatellites() {
    return this.ARWGKA
}

function set_IsShowSatellites(n) {
    var t = n != this.ARWGKA;
    this.ARWGKA = n;
    t && this.TDTSET()
}

function get_IsShowOwnBases() {
    return this.GUYMVQ
}

function set_IsShowOwnBases(n) {
    var t = n != this.GUYMVQ;
    this.GUYMVQ = n;
    t && this.MTVREF()
}

function get_IsShowOtherBases() {
    return this.KZICKW
}

function set_IsShowOtherBases(n) {
    var t = n != this.KZICKW;
    this.KZICKW = n;
    t && this.OGTCSC()
}

function get_IsShowAllianceBases() {
    return this.OFBHCO
}

function set_IsShowAllianceBases(n) {
    var t = n != this.OFBHCO;
    this.OFBHCO = n;
    t && this.OGTCSC()
}

function get_IsShowFriendlyBases() {
    return this.YCCQOK
}

function set_IsShowFriendlyBases(n) {
    var t = n != this.YCCQOK;
    this.YCCQOK = n;
    t && this.OGTCSC()
}

function get_IsShowEnemyBases() {
    return this.YMPPXH
}

function set_IsShowEnemyBases(n) {
    var t = n != this.YMPPXH;
    this.YMPPXH = n;
    t && this.OGTCSC()
}

function get_IsShowMarker() {
    return this.ZFQZSN
}

function set_IsShowMarker(n) {
    var t = n != this.ZFQZSN;
    this.ZFQZSN = n;
    t && this.TBODFL()
}

function get_IsSceneActive() {
    return this.AIUCXL
}

function set_IsSceneActive(n) {
    var t = n != this.AIUCXL;
    this.AIUCXL = n;
    t && this.IJPAEI()
}

function OnWorldSectorsChange() {
    var s, i, r, t, o;
    if (this.DZWSWO(), this.GKAJCI()) {
        var f = (new $I.UCRMVA).SLPWTI(),
            e = $I.CVRAYR.VAMLQD(),
            y = e.ONGTRQ().UQGPFX(),
            u = e.FMKUPK().UQGPFX(),
            c = e.UXQPUS().FISUYB(),
            l = c.d,
            n = {
                k: null,
                v: null
            };
        for (s in l)
            if (n.k = s, n.v = l[s], n.v.BDVFZC != y) {
                var p = n.v.NHLZYQ > 0,
                    h = u > 0 && p ? e.FMKUPK().MCCSDS(n.v.NHLZYQ) : $I.CZQHTV.None,
                    a = u > 0 && u == n.v.NHLZYQ,
                    v = u > 0 && (h == $I.CZQHTV.Friend || h == $I.CZQHTV.NAP),
                    i = u > 0 && h == $I.CZQHTV.Foe;
                if (this.JBQFHR() && a || this.RPACSO() && v || this.XWJWDW() && i || this.KMKNMG() && !a && !v && !i) {
                    this.NDLXYV.XOHVCR(n.k) ? this.NDLXYV.d[n.k].DNOUSX(n.v) : (t = (new $I.TKEAKJ).ICONFK(this, $I.CDNXVQ.WorldCityNotOwn, n.v), this.NDLXYV.GXVKTX(n.k, t));
                    continue
                }
                f.l.push(n.k)
            } t = this.NDLXYV.d;
        i = {
            k: null,
            v: null
        };
        for (r in t) i.k = r, i.v = t[r], f.l.indexOf(i.k) != -1 || c.XOHVCR(i.k) || f.l.push(i.k);
        for (r = f.l, o = 0; o < r.length; o++) t = r[o], this.NDLXYV.XOHVCR(t) && (this.NDLXYV.d[t].NSFOQM(), this.NDLXYV.XUDPAL(t))
    } else this.HENQMI(this.NDLXYV)
}

function get_CurrentCityId() {
    return this.LUKPLF
}

function get_ImageWidth() {
    return this.QAIGRY.DZSXHC()
}

function get_ImageHeight() {
    return this.QAIGRY.KUAIEC()
}

function get_ImageOffsetX() {
    return this.RTYPFY.ZZGDAN()
}

function get_ImageOffsetY() {
    return this.RTYPFY.HCXGMG()
}

function get_GridWidth() {
    return this.VVQVWC
}

function get_GridHeight() {
    return this.WPITOM
}

function get_MinXPosition() {
    return $I.PQDILF.JKMBTR + this.YEFVMW
}

function get_MaxXPosition() {
    return $I.PQDILF.ILZDUM
}

function get_MinYPosition() {
    return $I.PQDILF.JYSMBV + this.GHRWDP
}

function get_MaxYPosition() {
    return $I.PQDILF.HCQGWR
}

function UiUpdate(n) {
    var f = this.UTZPBI.d,
        o = {
            k: null,
            v: null
        },
        t, i, r, e, u, s;
    for (t in f) o.k = t, o.v = f[t], o.v.CXESLP(n);
    t = this.YPYITV.d;
    f = {
        k: null,
        v: null
    };
    for (i in t) f.k = i, f.v = t[i], f.v.CXESLP(n);
    this.MBZZIC != null && this.MBZZIC.CXESLP(n);
    i = this.FABDRL.d;
    t = {
        k: null,
        v: null
    };
    for (r in i) t.k = r, t.v = i[r], t.v.CXESLP(n);
    r = this.NDLXYV.d;
    i = {
        k: null,
        v: null
    };
    for (u in r) i.k = u, i.v = r[u], i.v.CXESLP(n);
    u = this.XHXWXO.d;
    r = {
        k: null,
        v: null
    };
    for (e in u) r.k = e, r.v = u[e], r.v.CXESLP(n);
    e = this.EJKCWS.d;
    u = {
        k: null,
        v: null
    };
    for (s in e) u.k = s, u.v = e[s], u.v.CXESLP(n)
}

function VisUpdate() {
    var r = (new Date).getTime(),
        u = $I.UQGIGO.XBYUSR().HYVOUU("vis/base/animations"),
        f, t, i, n, e;
    $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.GIYDVX());
    t = this.UTZPBI.d;
    f = {
        k: null,
        v: null
    };
    for (n in t) f.k = n, f.v = t[n], f.v.ETWFFN(r, u);
    n = this.YPYITV.d;
    t = {
        k: null,
        v: null
    };
    for (i in n) t.k = i, t.v = n[i], t.v.ETWFFN(r, u);
    i = this.XHXWXO.d;
    n = {
        k: null,
        v: null
    };
    for (e in i) n.k = e, n.v = i[e], n.v.ETWFFN(r, u);
    this.MBZZIC != null && this.MBZZIC.ETWFFN(r, u)
}

function GetObjectFromPosition(n, t) {
    var f = null,
        r = this.XHXWXO.d,
        e = {
            k: null,
            v: null
        },
        u, i, o;
    for (i in r) e.k = i, e.v = r[i], e.v.VASCWR(n, t) && (f = e.v);
    i = this.UTZPBI.d;
    r = {
        k: null,
        v: null
    };
    for (u in i) r.k = u, r.v = i[u], r.v.VASCWR(n, t) && (f = r.v);
    u = this.YPYITV.d;
    i = {
        k: null,
        v: null
    };
    for (o in u) i.k = o, i.v = u[o], i.v.VASCWR(n, t) && (f = i.v);
    return this.MBZZIC != null && this.MBZZIC.VASCWR(n, t) && (f = this.MBZZIC), f
}

function GetAllObjectsFromPosition(n, t) {
    var o = (new $I.UCRMVA).SLPWTI(),
        h = null,
        e = this.XHXWXO.d,
        c = {
            k: null,
            v: null
        },
        i, r, u, s, f, l;
    for (i in e) c.k = i, c.v = e[i], c.v.VASCWR(n, t) && o.l.push(c.v);
    i = this.UTZPBI.d;
    e = {
        k: null,
        v: null
    };
    for (r in i) e.k = r, e.v = i[r], e.v.VASCWR(n, t) && (h = e.v);
    r = this.YPYITV.d;
    i = {
        k: null,
        v: null
    };
    for (u in r) i.k = u, i.v = r[u], i.v.VASCWR(n, t) && (h = i.v);
    this.MBZZIC != null && this.MBZZIC.VASCWR(n, t) && (h = this.MBZZIC);
    u = this.EJKCWS.d;
    r = {
        k: null,
        v: null
    };
    for (f in u) r.k = f, r.v = u[f], r.v.VASCWR(n, t) && o.l.push(r.v);
    f = this.FABDRL.d;
    u = {
        k: null,
        v: null
    };
    for (s in f) u.k = s, u.v = f[s], u.v.VASCWR(n, t) && o.l.push(u.v);
    s = this.NDLXYV.d;
    f = {
        k: null,
        v: null
    };
    for (l in s) f.k = l, f.v = s[l], f.v.VASCWR(n, t) && o.l.push(f.v);
    return h != null && o.l.push(h), o
}

function GetCoordinatesFromMousePos(n, t) {
    var i = (new $I.KNHTEK).GSPBQH(-1, -1),
        f = (n - $I.PQDILF.TPRIVS) / this.LEGJLJ(),
        e = (t - $I.PQDILF.RHVHXA) / this.KOODTZ(),
        o = $I.CVRAYR.VAMLQD().TZZENG().BDVSJJ() * f,
        s = $I.CVRAYR.VAMLQD().TZZENG().XUXGOK() * e,
        r = Math.floor(o),
        u = Math.floor(s);
    return this.UXPZGT(r, u) && (i.BTKBFX(r), i.NKQMUE(u)), i
}

function CenterRegionCoordinates(n, t) {
    var i = n / $I.CVRAYR.VAMLQD().TZZENG().BDVSJJ(),
        r = t / $I.CVRAYR.VAMLQD().TZZENG().XUXGOK(),
        u = i * this.LEGJLJ() + $I.PQDILF.TPRIVS,
        f = r * this.KOODTZ() + $I.PQDILF.RHVHXA;
    $I.FWLFGN.prototype.LQOHQF.call(this, u - this.UJPRER() / (2 * this.UVURBD()), f - this.ULNTVQ() / (2 * this.UVURBD()))
}

function GetNPCLevelByCoord(n) {
    return this.EAWJUW(this.FBKFPU(n) / ($I.CVRAYR.VAMLQD().TZZENG().LEGJLJ() * .5))
}

function DistanceFromCenter(n) {
    return Math.sqrt(this.SEIRSV(n))
}

function DistanceSquaredFromCenter(n) {
    var r = Math.floor($I.CVRAYR.VAMLQD().TZZENG().LEGJLJ() / 2),
        u = Math.floor($I.CVRAYR.VAMLQD().TZZENG().KOODTZ() / 2),
        t = n.OFYSUK() - r,
        i = n.FQVDES() - u;
    return t * t + i * i
}

function OnHubChange() {
    this.PSRWAQ();
    this.GCVNZM()
}

function get_MinZoomFactor() {
    return this.XNVDVT.TFIAWQ()
}

function add_ChangeMouseCoordinates(n) {
    var t = {},
        i, r = this.CMWQMJ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.CMWQMJ, t.$r = $I.TSJVQL.JXWJWI($I.HNTWBN, u, i, t), this.CMWQMJ = t.a, t.$r); while (r != i)
}

function remove_ChangeMouseCoordinates(n) {
    var t = {},
        i, r = this.CMWQMJ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.CMWQMJ, t.$r = $I.TSJVQL.JXWJWI($I.HNTWBN, u, i, t), this.CMWQMJ = t.a, t.$r); while (r != i)
}