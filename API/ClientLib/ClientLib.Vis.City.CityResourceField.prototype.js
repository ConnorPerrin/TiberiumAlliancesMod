function Dispose() {
    this.QYBGSX()
}

function UiUpdate() {}

function VisUpdate(n, t) {
    t && this.NHONZY != null && this.NHONZY.OCAAHR(n);
    t && this.HLVUXQ != null && this.HLVUXQ.OCAAHR(n)
}

function UpdateZoom() {}

function get_CityEntityData() {
    return this.RBWWPQ
}

function get_IsTransportingUnit() {
    return this.RBWWPQ.ZHIRJH() == $I.ZNGMPE.Garrison && this.RBWWPQ.KGLYJZ() != null
}

function GetTextByType(n) {
    return webfrontend.phe.cnc.gui.util.Text.getResourceFieldsTextByType(n)
}

function Dispose() {
    this.QYBGSX()
}

function SetFree(n) {
    var u = -1,
        t, r, i, s;
    if (n) {
        if (this.MFWPBF != this.EUVNES) {
            this.MFWPBF = this.EUVNES;
            var o = $I.BUEVKL.QGLUJV(),
                f = Math.floor(this.TIQFKT),
                e = Math.floor(this.XMMPKN);
            (this.EUVNES == 1 || this.EUVNES == 2) && (t = o.VXAMCA().resources[this.EUVNES], this.QQKTKM = t.dn, r = t.p, this.JWSUOP = r, this.OGJKNO = t.di, t.e < 0 ? (i = $I.QOKGWR.WBFJPT().VDQLZP(r), i != null && (this.CFXETH = this.BWOBJA.TDBBHP("image", null), this.CFXETH.EVVIKY(f * this.KDPNSC.VVGOEM() + this.TKFGYX - Math.floor((i.w - this.KDPNSC.VVGOEM()) / 2)), this.CFXETH.WJAECQ(e * this.KDPNSC.MWRYXH() + this.JBRHMW - (i.h - this.KDPNSC.MWRYXH())), this.CFXETH.BMIJEH(i.w), this.CFXETH.NQJJZY(i.h), this.CFXETH.TYDVYV(this.HUQLYA()), this.CFXETH.QOUDUX(this.ROTRGZ() + 1), this.CFXETH.PTVNAR(r), this.BWOBJA.UVSZDF(this.CFXETH))) : (s = o.WJVSOL(t.e), this.NHONZY = (new $I.ZFKFPU).CBDLKU(this.BWOBJA, s, (f + 1) * this.KDPNSC.VVGOEM() + this.TKFGYX, (e + 1) * this.KDPNSC.MWRYXH() + this.JBRHMW, null), this.NHONZY.TYDVYV(this.HUQLYA()), this.NHONZY.QOUDUX(this.ROTRGZ() + 1), this.NHONZY.LTWFAK(u >= 0 ? u : $I.XOJOCY.ETGEXT(this.KDPNSC.GIYDVX(), f, e)), this.NHONZY.OCAAHR(5)))
        }
    } else this.NHONZY != null && (u = this.NHONZY.OHJOVD()), this.QYBGSX(), this.MFWPBF = -1
}

function UiUpdate() {}

function VisUpdate(n, t) {
    t && this.NHONZY != null && this.NHONZY.OCAAHR(n);
    t && this.HLVUXQ != null && this.HLVUXQ.OCAAHR(n)
}

function get_ImageSource() {
    return this.JWSUOP
}

function get_DetailImageSource() {
    return this.OGJKNO
}

function get_ResourceName() {
    return this.QQKTKM
}

function get_Description() {
    return this.AINYNP(this.YCHEEV)
}

function get_ResourceType() {
    return this.EUVNES
}

function get_X() {
    return this.TIQFKT * this.KDPNSC.VVGOEM() + this.TKFGYX
}

function get_Y() {
    return this.XMMPKN * this.KDPNSC.MWRYXH() + this.JBRHMW
}

function get_VisObjectType() {
    return $I.CDNXVQ.CityResourceFieldType
}

function GetSelectionInfo() {
    return $I.UDAQKL.DNVCCU($I.KQYCNT, 0)
}

function MouseOver() {
    this.KXVPIO.MJETAR(Math.floor(this.TIQFKT), Math.floor(this.XMMPKN)) && ($I.PCMEZM.EYZIBP().CBESZQ(this.CNUKKI, 1e3, 0), this.KDPNSC.WNLXPU(this));
    this.NHONZY != null && this.NHONZY.IOUEYL(!0)
}

function MouseOut() {
    var n;
    if (this.KXVPIO.MJETAR(Math.floor(this.TIQFKT), Math.floor(this.XMMPKN)) && this.KDPNSC.HGUZCL(), this.BHIQDY)
        for (n = 0; n < this.YJWQNA.length; n++) this.BWOBJA.NEHMEK(this.YJWQNA[n]), this.BHIQDY = !1;
    $I.PCMEZM.EYZIBP().CBESZQ(this.CNUKKI, 0, 0);
    this.NHONZY != null && this.NHONZY.IOUEYL(!1)
}

function get_ObjectSelectOrder() {
    return $I.ETSALJ.CityResourceField
}

function ExecutePrimaryFunction() {
    switch ($I.ILHIOR.GILABD().QIBGFH()) {
        case $I.HYIXRB.Repair:
        case $I.HYIXRB.Move:
        case $I.HYIXRB.Upgrade:
        case $I.HYIXRB.Sell:
            return !0
    }
    return !1
}