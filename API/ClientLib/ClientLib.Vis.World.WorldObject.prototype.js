function Selection() {}

function Deselection() {}

function MouseOver() {
    this.OOHOEL || (this.HVOEMH.LUPUTI().HBDDTH(this), this.HVOEMH.LUPUTI().DSXTIQ(this.CJEUVE, this.TLYOGU, 0, 0, 0, 0), this.HVOEMH.LUPUTI().SHCWDD(), this.CXESLP($I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG()))
}

function MouseOut() {
    this.HVOEMH.LUPUTI().ZWVJGR() == this && (this.HVOEMH.LUPUTI().HBDDTH(null), this.HVOEMH.LUPUTI().YFGAPN())
}

function MouseMove() {}

function OnRightButtonClicked() {}

function ExecuteCommand() {
    return !1
}

function CommandPreconditionsFulfilled() {
    return !1
}

function CanExecuteCommand() {
    return !1
}

function ExecutePrimaryFunction() {
    return !1
}

function GetSelectionInfo() {
    return null
}

function GetHighlightInfo() {
    return null
}

function get_X() {
    return 0
}

function get_Y() {
    return 0
}

function get_SelectionTarget() {
    return this
}

function get_VisObjectType() {
    return $I.CDNXVQ.UnknownType
}

function get_UIType() {
    return null
}

function get_Coordinates() {
    return -1
}

function get_ObjectSelectOrder() {
    return $I.ETSALJ.Default
}

function get_MouseOverActive() {
    return this.PQUECX
}

function GetCreateImage() {
    return this.OOHOEL || this.LAQDKH != null || (this.LAQDKH = this.SPPIEY.TDBBHP("image", null), this.LAQDKH.TYDVYV(3), this.SPPIEY.UVSZDF(this.LAQDKH)), this.WSRGGH()
}

function GetImage() {
    return this.LAQDKH
}

function DisposeImage() {
    this.LAQDKH != null && (this.SPPIEY.NEHMEK(this.LAQDKH), this.LAQDKH = null)
}

function GetEffect(n) {
    return this.DUCEGA.XOHVCR(n) ? this.DUCEGA.d[n] : null
}

function GetCreateEffect(n) {
    var t, i, r;
    return this.OOHOEL || this.DUCEGA.XOHVCR(n) || (i = $I.BUEVKL.QGLUJV(), r = (t = (new $I.ZFKFPU).CBDLKU(this.SPPIEY, i.WJVSOL(n), this.CJEUVE, this.TLYOGU, null), t.TYDVYV(3), t), this.DUCEGA.UHNVSA(n, r)), this.DNVYYF(n)
}

function DisposeEffect(n) {
    this.DUCEGA.XOHVCR(n) && (this.DUCEGA.d[n].NSFOQM(), this.DUCEGA.XUDPAL(n))
}

function DisposeEffects() {
    var t = this.DUCEGA.d,
        n = {
            k: null,
            v: null
        };
    for (var i in t) n.k = i, n.v = t[i], n.v.NSFOQM();
    this.DUCEGA.AMMYJA()
}

function Dispose() {
    this.OOHOEL = !0;
    this.HVOEMH.LUPUTI().ZWVJGR() == this && this.HVOEMH.LUPUTI().HBDDTH(null);
    this.DYHAZE();
    this.SOHYQR()
}

function UiUpdate() {
    this.OOHOEL || this.HVOEMH.LUPUTI().ZWVJGR() != this || this.HVOEMH.LUPUTI().ZKJWTF(this.QHWHVB, this.ZCDFAU)
}

function VisUpdate(n, t) {
    var r, i, u;
    if (!this.OOHOEL && t) {
        r = this.DUCEGA.d;
        i = {
            k: null,
            v: null
        };
        for (u in r) i.k = u, i.v = r[u], i.v.OCAAHR(n)
    }
}

function IsPositionCovered(n, t) {
    return n < this.DGLCVK() + $I.PQDILF.ZLHUMT && n > this.DGLCVK() - $I.PQDILF.ZLHUMT && t < this.XYKFSB() + $I.PQDILF.ZLHUMT && t > this.XYKFSB() - $I.PQDILF.ZLHUMT
}

function MouseOver() {
    this.OOHOEL || (this.HVOEMH.LUPUTI().HBDDTH(this), this.HVOEMH.LUPUTI().DSXTIQ(this.CJEUVE, this.TLYOGU, 0, 0, 0, 0), this.HVOEMH.LUPUTI().SHCWDD(), this.CXESLP($I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG()))
}

function MouseOut() {
    this.HVOEMH.LUPUTI().ZWVJGR() == this && (this.HVOEMH.LUPUTI().HBDDTH(null), this.HVOEMH.LUPUTI().YFGAPN())
}

function UpdateZoom() {}

function get_Description() {
    return this.ZCDFAU
}

function get_Name() {
    return this.QHWHVB
}

function get_CoordX() {
    return this.CJEUVE
}

function get_CoordY() {
    return this.TLYOGU
}