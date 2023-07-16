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
    return this.PGYSKQ
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
    this.QWDBDC = n
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
    return 0
}

function get_GridHeight() {
    return 0
}

function get_MinXPosition() {
    return 0
}

function get_MinYPosition() {
    return 0
}

function get_MaxXPosition() {
    return 0
}

function get_MaxYPosition() {
    return 0
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