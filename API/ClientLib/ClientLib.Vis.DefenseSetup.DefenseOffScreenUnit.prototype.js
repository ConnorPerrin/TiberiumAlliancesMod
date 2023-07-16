function Dispose() {
    this.UMRNDU()
}

function UiUpdate() {
    this.CMBWVB()
}

function VisUpdate() {
    this.CMBWVB()
}

function UpdateZoom() {}

function get_CityEntityData() {
    return this.RBWWPQ
}

function get_IsTransportingUnit() {
    return this.RBWWPQ.ZHIRJH() == $I.ZNGMPE.Garrison && this.RBWWPQ.KGLYJZ() != null
}

function Dispose() {
    this.UMRNDU()
}

function get_VisObjectType() {
    return $I.CDNXVQ.DefenseOffScreenUnit
}

function GetCoordinates() {
    return this.EXBKXM != null ? (new $I.OBSHFD).GWVVSW(Math.floor(this.EXBKXM.XYKFSB()), Math.floor(this.EXBKXM.DGLCVK()), Math.floor(this.EXBKXM.DGLCVK() + this.EXBKXM.DZSXHC()), Math.floor(this.EXBKXM.XYKFSB() + this.EXBKXM.KUAIEC())) : null
}

function GetOpacityLevel() {
    return this.KNKLJA.BOFXQL()
}

function UiUpdate() {
    this.CMBWVB()
}

function VisUpdate() {
    this.CMBWVB()
}

function get_ImageSource() {
    return this.OAYFRN
}

function get_ImageRatio() {
    return this.KNKLJA != null ? this.KNKLJA.KUAIEC() / this.KNKLJA.DZSXHC() : 1
}

function add_OpacityChange(n) {
    var t = {},
        i, r = this.TVZZZK,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.TVZZZK, t.$r = $I.TSJVQL.JXWJWI($I.VYKTXS, u, i, t), this.TVZZZK = t.a, t.$r); while (r != i)
}

function remove_OpacityChange(n) {
    var t = {},
        i, r = this.TVZZZK,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.TVZZZK, t.$r = $I.TSJVQL.JXWJWI($I.VYKTXS, u, i, t), this.TVZZZK = t.a, t.$r); while (r != i)
}