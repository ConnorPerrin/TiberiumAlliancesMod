function Dispose() {
    this.ITTBJT != null && this.BKRGFZ && (this.ERLKKJ.NEHMEK(this.ITTBJT), this.ITTBJT = null)
}

function get_Opacity() {
    return this.RRPCPU
}

function set_Opacity(n) {
    var t;
    if (this.RRPCPU != n) {
        for (t = 0; t < this.LVNXLM.length; t++) this.LVNXLM[t].GUAUQN(this.VVOXHW[t] * n);
        this.RRPCPU = n
    }
}

function get_StartTime() {
    return this.UEXDOE
}

function set_StartTime(n) {
    this.UEXDOE = n
}

function get_Layer() {
    return this.ITTBJT.HUQLYA()
}

function set_Layer(n) {
    this.ITTBJT.TYDVYV(n)
}

function get_ZOrder() {
    return this.ITTBJT.RGOSGX()
}

function set_ZOrder(n) {
    this.ITTBJT.QOUDUX(n)
}

function get_X() {
    return this.ITTBJT.DGLCVK() + this.EWYEVI
}

function set_X(n) {
    this.ITTBJT.EVVIKY(n - this.EWYEVI)
}

function get_Y() {
    return this.ITTBJT.XYKFSB() + this.KNZJJG
}

function set_Y(n) {
    this.ITTBJT.WJAECQ(n - this.KNZJJG)
}

function get_PivotX() {
    return this.EWYEVI
}

function get_PivotY() {
    return this.KNZJJG
}

function get_Highlighted() {
    return this.ZVHFTT
}

function set_Highlighted(n) {
    var t;
    if (this.ZVHFTT != n && (this.ZVHFTT = n, this.AXOIVS != null))
        for (t = 0; t < this.AXOIVS.length; t++) this.LVNXLM[this.AXOIVS[t]].OLCOOE(n)
}

function get_RootElement() {
    return this.ITTBJT
}

function GetLocatorFrameCount(n) {
    var t;
    return !(t = this.USODHS.lo[n], t == undefined ? !1 : !0) && !(t = this.USODHS.lo[1], t == undefined ? !1 : !0) ? 0 : t.xf == null ? -1 : t.xf.length
}

function HasLocator(n) {
    var t;
    return t = this.USODHS.lo[n], t == undefined ? !1 : !0
}

function GetLocatorXByPercent(n, t) {
    var i;
    return !(i = this.USODHS.lo[n], i == undefined ? !1 : !0) && !(i = this.USODHS.lo[1], i == undefined ? !1 : !0) ? 0 : i.xf != null && i.xf.length != 0 ? $I.MNLZCB.UWKWYQ(i.xf, 0, i.xf.length - 1, t) - this.EWYEVI : i.x - this.EWYEVI
}

function GetLocatorYByPercent(n, t) {
    var i;
    return !(i = this.USODHS.lo[n], i == undefined ? !1 : !0) && !(i = this.USODHS.lo[1], i == undefined ? !1 : !0) ? 0 : i.xf != null && i.xf.length != 0 ? $I.MNLZCB.UWKWYQ(i.yf, 0, i.yf.length - 1, t) - this.KNZJJG : i.y - this.KNZJJG
}

function GetLocatorX(n, t) {
    var i, r;
    return !(i = this.USODHS.lo[n], i == undefined ? !1 : !0) && !(i = this.USODHS.lo[1], i == undefined ? !1 : !0) ? 0 : i.xf == null || i.xf.length == 0 ? i.x - this.EWYEVI : (r = t - this.UEXDOE, r = r % i.xf[i.xf.length - 2], $I.MNLZCB.QCSJIS(i.xf, 0, i.xf.length - 1, r) - this.EWYEVI)
}

function GetLocatorY(n, t) {
    var i, r;
    return !(i = this.USODHS.lo[n], i == undefined ? !1 : !0) && !(i = this.USODHS.lo[1], i == undefined ? !1 : !0) ? 0 : i.xf == null || i.xf.length == 0 ? i.y - this.KNZJJG : (r = t - this.UEXDOE, r = r % i.yf[i.yf.length - 2], $I.MNLZCB.QCSJIS(i.yf, 0, i.yf.length - 1, r) - this.KNZJJG)
}

function get_ForceLoop() {
    return this.PHPCVC
}

function set_ForceLoop(n) {
    this.PHPCVC = n
}

function SetLocatorVisibility(n, t) {
    var r;
    this.PJDGXN = n;
    var u = this.ITTBJT,
        f = this.TTFDBS.d,
        i = {
            k: null,
            v: null
        };
    for (r in f) i.k = r, i.v = f[r], u.NEHMEK(i.v);
    n && this.TTFDBS.XOHVCR(t) && u.UVSZDF(this.TTFDBS.d[t])
}

function SetLocatorType(n) {
    this.RUINNH(this.PJDGXN, n)
}

function SetLocatorPercent(n, t) {
    var i = {},
        r;
    (i.$r = this.TTFDBS.ZOXRAI(n, i), r = i.b, i.$r) && (r.EVVIKY(this.IILGFN(n, t) + this.EWYEVI), r.WJAECQ(this.OGFCXL(n, t) + this.KNZJJG))
}

function AttachToScene() {
    this.BKRGFZ || (this.BKRGFZ = !0, this.ERLKKJ.UVSZDF(this.ITTBJT))
}

function DetachFromScene() {
    this.BKRGFZ && (this.ERLKKJ.NEHMEK(this.ITTBJT), this.BKRGFZ = !1)
}