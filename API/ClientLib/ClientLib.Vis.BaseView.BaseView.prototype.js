function get_VisAreaComplete() {
    for (var i = this.HOMYYT == this.XSPYBI, r = this.XLAIYT.l, n, t = 0; t < r.length; t++) n = r[t], i &= n.BBSMLS() == n.LCCHYM();
    return i
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
    var t;
    $I.FWLFGN.prototype.NREYTO.call(this, n);
    t = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.FZXQXG);
    n && t != null && this.ESJFJT(t, 7)
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

function get_VisAreaComplete() {
    for (var i = this.HOMYYT == this.XSPYBI, r = this.XLAIYT.l, n, t = 0; t < r.length; t++) n = r[t], i &= n.BBSMLS() == n.LCCHYM();
    return i
}

function get_CurrentCityId() {
    return this.FZXQXG
}

function get_OwnerId() {
    return this.YXOSZW
}

function get_TotalWidth() {
    for (var n = -1, i = this.XLAIYT.l, r, t = 0; t < i.length; t++) r = i[t], n = Math.max(n, r.JCWRNK());
    return n
}

function get_TotalHeight() {
    for (var t = 0, i = this.XLAIYT.l, r, n = 0; n < i.length; n++) r = i[n], t += r.DTAVSS();
    return t
}

function GetDecal(n) {
    return this.GNUDVJ[n]
}

function get_DecalLayer() {
    return this.GCZSDI
}

function Init() {
    var o, h, r, n, u, c, l, s;
    this.GNUDVJ = $I.UDAQKL.DNVCCU($I.KQYCNT, 1);
    this.RTYPFY.LSWBIS(this.LMSPFP);
    o = $I.QOKGWR.WBFJPT();
    h = o.VDQLZP("baseview/neutral/gui/1x1.png");
    this.GNUDVJ[0] = (new $I.KQYCNT).YAXDNR("baseview/neutral/gui/1x1.png", h.w, h.h, $I.RRZRQV.JWZQMX, $I.RRZRQV.RGHMVZ, this.GCZSDI);
    var f = this.VVGOEM(),
        e = this.MWRYXH(),
        t = Math.floor(f / 2),
        i = Math.floor(e / 2);
    for (this.LCUSBD = (new $I.UDBZSB).SLPWTI(), r = $I.UDAQKL.DNVCCU($I.PSDIRC, 9), n = o.VDQLZP("baseview/neutral/gui/gdi/gui_linkbonus_inc_topleft.png"), r[0] = (new $I.PSDIRC).HKJWNS("baseview/neutral/gui/gdi/gui_linkbonus_inc_topleft.png", "baseview/neutral/gui/gdi/gui_linkbonus_inc_topleft_inv.png", n.w, n.h, -t + $I.RRZRQV.AOASRE, -i + $I.RRZRQV.HFHSZZ, 10), r[1] = (new $I.PSDIRC).HKJWNS("baseview/neutral/gui/gdi/gui_linkbonus_inc_top.png", "baseview/neutral/gui/gdi/gui_linkbonus_inc_top_inv.png", n.w, n.h, t, -i + $I.RRZRQV.HFHSZZ, 10), r[2] = (new $I.PSDIRC).HKJWNS("baseview/neutral/gui/gdi/gui_linkbonus_inc_topright.png", "baseview/neutral/gui/gdi/gui_linkbonus_inc_topright_inv.png", n.w, n.h, f + t - $I.RRZRQV.OLWXKF, -i + $I.RRZRQV.HFHSZZ, 10), r[3] = (new $I.PSDIRC).HKJWNS("baseview/neutral/gui/gdi/gui_linkbonus_inc_left.png", "baseview/neutral/gui/gdi/gui_linkbonus_inc_left_inv.png", n.w, n.h, -t + $I.RRZRQV.AOASRE, i, 10), r[5] = (new $I.PSDIRC).HKJWNS("baseview/neutral/gui/gdi/gui_linkbonus_inc_right.png", "baseview/neutral/gui/gdi/gui_linkbonus_inc_right_inv.png", n.w, n.h, f + t - $I.RRZRQV.OLWXKF, i, 10), r[6] = (new $I.PSDIRC).HKJWNS("baseview/neutral/gui/gdi/gui_linkbonus_inc_bottomleft.png", "baseview/neutral/gui/gdi/gui_linkbonus_inc_bottomleft_inv.png", n.w, n.h, -t + $I.RRZRQV.AOASRE, e + i - $I.RRZRQV.UNUXFH, 10), r[7] = (new $I.PSDIRC).HKJWNS("baseview/neutral/gui/gdi/gui_linkbonus_inc_bottom.png", "baseview/neutral/gui/gdi/gui_linkbonus_inc_bottom_inv.png", n.w, n.h, t, e + i - $I.RRZRQV.UNUXFH, 10), r[8] = (new $I.PSDIRC).HKJWNS("baseview/neutral/gui/gdi/gui_linkbonus_inc_bottomright.png", "baseview/neutral/gui/gdi/gui_linkbonus_inc_bottomright_inv.png", n.w, n.h, f + t - $I.RRZRQV.OLWXKF, e + i - $I.RRZRQV.UNUXFH, 10), this.LCUSBD.UHNVSA($I.KGPDNC.GDIFaction, r), u = $I.UDAQKL.DNVCCU($I.PSDIRC, 9), n = o.VDQLZP("baseview/neutral/gui/nod/gui_linkbonus_inc_topleft.png"), u[0] = (new $I.PSDIRC).HKJWNS("baseview/neutral/gui/nod/gui_linkbonus_inc_topleft.png", "baseview/neutral/gui/nod/gui_linkbonus_inc_topleft_inv.png", n.w, n.h, -t + $I.RRZRQV.AOASRE, -i + $I.RRZRQV.HFHSZZ, 10), u[1] = (new $I.PSDIRC).HKJWNS("baseview/neutral/gui/nod/gui_linkbonus_inc_top.png", "baseview/neutral/gui/nod/gui_linkbonus_inc_top_inv.png", n.w, n.h, t, -i + $I.RRZRQV.HFHSZZ, 10), u[2] = (new $I.PSDIRC).HKJWNS("baseview/neutral/gui/nod/gui_linkbonus_inc_topright.png", "baseview/neutral/gui/nod/gui_linkbonus_inc_topright_inv.png", n.w, n.h, f + t - $I.RRZRQV.OLWXKF, -i + $I.RRZRQV.HFHSZZ, 10), u[3] = (new $I.PSDIRC).HKJWNS("baseview/neutral/gui/nod/gui_linkbonus_inc_left.png", "baseview/neutral/gui/nod/gui_linkbonus_inc_left_inv.png", n.w, n.h, -t + $I.RRZRQV.AOASRE, i, 10), u[5] = (new $I.PSDIRC).HKJWNS("baseview/neutral/gui/nod/gui_linkbonus_inc_right.png", "baseview/neutral/gui/nod/gui_linkbonus_inc_right_inv.png", n.w, n.h, f + t - $I.RRZRQV.OLWXKF, i, 10), u[6] = (new $I.PSDIRC).HKJWNS("baseview/neutral/gui/nod/gui_linkbonus_inc_bottomleft.png", "baseview/neutral/gui/nod/gui_linkbonus_inc_bottomleft_inv.png", n.w, n.h, -t + $I.RRZRQV.AOASRE, e + i - $I.RRZRQV.UNUXFH, 10), u[7] = (new $I.PSDIRC).HKJWNS("baseview/neutral/gui/nod/gui_linkbonus_inc_bottom.png", "baseview/neutral/gui/nod/gui_linkbonus_inc_bottom_inv.png", n.w, n.h, t, e + i - $I.RRZRQV.UNUXFH, 10), u[8] = (new $I.PSDIRC).HKJWNS("baseview/neutral/gui/nod/gui_linkbonus_inc_bottomright.png", "baseview/neutral/gui/nod/gui_linkbonus_inc_bottomright_inv.png", n.w, n.h, f + t - $I.RRZRQV.OLWXKF, e + i - $I.RRZRQV.UNUXFH, 10), this.LCUSBD.UHNVSA($I.KGPDNC.NODFaction, u), c = this.XLAIYT.l, s = 0; s < c.length; s++) l = c[s], l.NXWPIH()
}

function ChangeBackground(n) {
    this.PEIUNV.PTVNAR(n);
    this.RHHLWB()
}

function UiUpdate(n) {
    for (var i = this.XLAIYT.l, r, t = 0; t < i.length; t++) r = i[t], r.CXESLP(n)
}

function VisUpdate(n) {
    var r = (new Date).getTime(),
        i, u, t;
    for (n > this.CPWLSH && (this.CPWLSH = n), $I.FWLFGN.prototype.MUBCWQ.call(this, r), $I.FWLFGN.prototype.YDAYMG.call(this, r), i = this.XLAIYT.l, t = 0; t < i.length; t++) u = i[t], u.QJOFJP(n)
}

function GetBackgroundGraphic() {
    return $I.BMZJUL.KJHWRT(this.LMSPFP)
}

function GetBackgroundGraphicSeemless() {
    return $I.BMZJUL.YMHVDV(this.LMSPFP)
}

function CalculateSlotOffset(n, t) {
    var i = this.GIYDVX() << 8 | t << 4 | n,
        r, u;
    return i = i + 2127912214 + (i << 12), i = i ^ 3345072700 ^ i >> 19, i = i + 374761393 + (i << 5), i = i + 3550635116 ^ i << 9, i = i + 4251993797 + (i << 3), i = i ^ 3042594569 ^ i >> 16, r = (i & 255) % 7, u = (i >> 8 & 255) % 7, u << 8 | r
}

function GetBonusIconInfo(n) {
    var t = {},
        i = null;
    return (t.$r = this.LCUSBD.ZOXRAI(this.LMSPFP, t), i = t.b, t.$r) || (i = this.LCUSBD.d[$I.KGPDNC.GDIFaction]), i[n]
}

function GetAllBuildingsFromType(n, t) {
    for (var i = {}, r = (new $I.UCRMVA).SLPWTI(), f = this.XLAIYT.l, e, u = 0; u < f.length; u++) e = f[u], i.c = r, i.$r = e.DRMKPT(n, t, i), r = i.c, i.$r;
    return r
}

function HideToolTip() {
    var t, i, n;
    if (this.WHQTUJ != null)
        for (this.WHQTUJ.YFGAPN(), this.WHQTUJ.NSFOQM(), this.WHQTUJ = null, t = this.XLAIYT.l, n = 0; n < t.length; n++) i = t[n], i.HGUZCL()
}

function SetActive(n) {
    var t;
    $I.FWLFGN.prototype.NREYTO.call(this, n);
    t = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.FZXQXG);
    n && t != null && this.ESJFJT(t, 7)
}

function ShowToolTip(n) {
    this.WHQTUJ != null && (this.WHQTUJ.YFGAPN(), this.WHQTUJ.NSFOQM(), this.WHQTUJ = null);
    this.WHQTUJ = this.XYYJIA(n);
    this.VAWZQX(n);
    this.WHQTUJ.DSXTIQ(Math.floor(n.DGLCVK()), Math.floor(n.XYKFSB()), this.JZNSHH, this.TTZQCK, this.USZDVJ(), this.CARSTD());
    this.WHQTUJ.SHCWDD()
}

function UpdateToolTip(n) {
    for (var i = this.XLAIYT.l, r, t = 0; t < i.length; t++) r = i[t], r.VAWZQX(n)
}

function get_MinZoomFactor() {
    return this.XNVDVT.TFIAWQ()
}