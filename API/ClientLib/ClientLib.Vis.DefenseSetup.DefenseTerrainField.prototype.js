function Dispose() {
    this.DSGNFV != null && (this.DSGNFV.NSFOQM(), this.DSGNFV = null);
    this.YKQXST != null && (this.BWOBJA.NEHMEK(this.YKQXST), this.YKQXST = null)
}

function UiUpdate() {}

function VisUpdate(n, t) {
    t && this.DSGNFV != null && this.DSGNFV.LQDINT($I.UIBGSJ.Idle, n)
}

function UpdateZoom() {}

function get_CityEntityData() {
    return this.RBWWPQ
}

function get_IsTransportingUnit() {
    return this.RBWWPQ.ZHIRJH() == $I.ZNGMPE.Garrison && this.RBWWPQ.KGLYJZ() != null
}

function Dispose() {
    this.DSGNFV != null && (this.DSGNFV.NSFOQM(), this.DSGNFV = null);
    this.YKQXST != null && (this.BWOBJA.NEHMEK(this.YKQXST), this.YKQXST = null)
}

function MouseOver() {
    this.KDPNSC.WNLXPU(this)
}

function MouseOut() {
    this.KDPNSC.HGUZCL()
}

function UiUpdate() {}

function VisUpdate(n, t) {
    t && this.DSGNFV != null && this.DSGNFV.LQDINT($I.UIBGSJ.Idle, n)
}

function get_ImageSource() {
    return this.YKQXST.GMRSSP()
}

function get_TerrainName() {
    return this.UHMOSF
}

function get_Description() {
    return this.ICLBQF
}

function get_X() {
    return this.HWHSOK * this.KDPNSC.VVGOEM()
}

function get_Y() {
    return this.RRHCOI * this.KDPNSC.MWRYXH() + (this.OLKSTU ? this.VIOVNW * this.KDPNSC.MWRYXH() : 0)
}

function get_VisObjectType() {
    return $I.CDNXVQ.DefenseTerrainFieldType
}

function GetSelectionInfo() {
    return $I.UDAQKL.DNVCCU($I.KQYCNT, 0)
}