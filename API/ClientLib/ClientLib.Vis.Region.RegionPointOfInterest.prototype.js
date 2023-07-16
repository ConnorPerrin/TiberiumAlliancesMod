function Dispose() {
    $I.DXCHWP.prototype.NSFOQM.call(this);
    this.CYHVMR();
    this.CHQNWS != null && (this.CHQNWS.NSFOQM(), this.CHQNWS = null)
}

function get_X() {
    return this.SVVIBN * this.ABCGOU.VVGOEM()
}

function get_Y() {
    return this.YOJYDM * this.ABCGOU.MWRYXH()
}

function get_RawX() {
    return this.SVVIBN
}

function get_RawY() {
    return this.YOJYDM
}

function get_Coordinates() {
    return this.YOJYDM << 16 | this.SVVIBN
}

function get_IsDisposed() {
    return this.BKYAMO
}

function UpdateColor() {}

function UpdateZoom() {}

function UpdateDungeonLevels() {}

function UpdateMoralDecal() {}

function VisUpdate(n, t, i) {
    this.BKYAMO || (this.HCRBRO() && (this.TDRKIB(this.EXWJXK, this.CPQDXJ), this.XODVHT(this.EXWJXK, this.CPQDXJ), this.GUATFV(!1)), this.BFHJCZ == null || this.JMKSYC || this.BFHJCZ.JFBQON(this.SVVIBN, this.YOJYDM), i && this.CHQNWS != null && this.CHQNWS.OCAAHR(t))
}

function UiUpdate() {}

function HideInfos() {
    this.JMKSYC || (this.JMKSYC = !0, this.BFHJCZ != null && this.BFHJCZ.TXFEZJ())
}

function ShowInfos() {
    this.JMKSYC && (this.JMKSYC = !1, this.BFHJCZ != null && this.BFHJCZ.KKWNHR())
}

function Selection() {}

function Deselection() {}

function Dispose() {
    $I.DXCHWP.prototype.NSFOQM.call(this);
    this.CYHVMR();
    this.CHQNWS != null && (this.CHQNWS.NSFOQM(), this.CHQNWS = null)
}

function get_VisObjectType() {
    return $I.CDNXVQ.RegionPointOfInterest
}

function HideInfos() {
    this.JMKSYC || (this.JMKSYC = !0, this.BFHJCZ != null && this.BFHJCZ.TXFEZJ())
}

function ShowInfos() {
    this.JMKSYC && (this.JMKSYC = !1, this.BFHJCZ != null && this.BFHJCZ.KKWNHR())
}

function get_UIType() {
    return "PointOfInterest"
}

function get_OwnerAllianceId() {
    var n = this.EXWJXK.ZCVVLT(this.CPQDXJ.UXLHPW);
    return n != null ? n.MGDTER : -1
}

function get_OwnerAllianceName() {
    var n = this.EXWJXK.ZCVVLT(this.CPQDXJ.UXLHPW);
    return n != null ? n.REIPNV : ""
}

function get_Name() {
    return this.KMOQHX.Text
}

function get_Level() {
    return this.CPQDXJ.EWONBG
}

function get_Type() {
    return this.CPQDXJ.RMMPVP
}

function get_PlayerFaction() {
    return 3
}

function MouseOver() {
    this.CHQNWS != null && this.CHQNWS.IOUEYL(!0)
}

function MouseOut() {
    this.CHQNWS != null && this.CHQNWS.IOUEYL(!1)
}

function VisUpdate(n, t, i) {
    this.BKYAMO || (this.HCRBRO() && (this.TDRKIB(this.EXWJXK, this.CPQDXJ), this.XODVHT(this.EXWJXK, this.CPQDXJ), this.GUATFV(!1)), this.BFHJCZ == null || this.JMKSYC || this.BFHJCZ.JFBQON(this.SVVIBN, this.YOJYDM), i && this.CHQNWS != null && this.CHQNWS.OCAAHR(t))
}