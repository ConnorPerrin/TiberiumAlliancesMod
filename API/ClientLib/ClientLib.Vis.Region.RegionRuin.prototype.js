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

function UpdateColor() {
    this.ABCBJU(this.XJUQTS, this.NGYJYF)
}

function UpdateZoom() {}

function UpdateDungeonLevels() {}

function UpdateMoralDecal() {}

function VisUpdate(n, t, i) {
    this.BKYAMO || (this.HCRBRO() && (this.TLIWVA(this.XJUQTS, this.NGYJYF), this.ABCBJU(this.XJUQTS, this.NGYJYF), this.GUATFV(!1)), this.GVVHEA == null || this.DOCOMC || this.GVVHEA.JFBQON(this.SVVIBN, this.YOJYDM), i && this.CHQNWS != null && this.CHQNWS.OCAAHR(t))
}

function UiUpdate() {}

function HideInfos() {
    this.DOCOMC || (this.DOCOMC = !0, this.GVVHEA != null && this.GVVHEA.TXFEZJ())
}

function ShowInfos() {
    this.DOCOMC && (this.DOCOMC = !1, this.GVVHEA != null && this.GVVHEA.KKWNHR())
}

function Selection() {}

function Deselection() {}

function Dispose() {
    $I.DXCHWP.prototype.NSFOQM.call(this);
    this.CYHVMR();
    this.CHQNWS != null && (this.CHQNWS.NSFOQM(), this.CHQNWS = null)
}

function get_VisObjectType() {
    return $I.CDNXVQ.RegionRuin
}

function HideInfos() {
    this.DOCOMC || (this.DOCOMC = !0, this.GVVHEA != null && this.GVVHEA.TXFEZJ())
}

function ShowInfos() {
    this.DOCOMC && (this.DOCOMC = !1, this.GVVHEA != null && this.GVVHEA.KKWNHR())
}

function UpdateColor() {
    this.ABCBJU(this.XJUQTS, this.NGYJYF)
}

function get_UIType() {
    return "Ruin"
}

function get_Name() {
    return this.NGYJYF.AQNEQD == 3 ? $I.XOJOCY.CLMQKO("tnf:mutants base") : this.NGYJYF.APOFNR
}

function get_BaseLevel() {
    return this.NGYJYF.NUUUIV
}

function get_OldBaseOwnerName() {
    return this.NGYJYF.AQNEQD == 3 ? $I.XOJOCY.CLMQKO("tnf:mutants") : this.NGYJYF.HZVVGZ
}

function get_OldBaseOwnerAllianceName() {
    return this.NGYJYF.AQNEQD == 3 ? $I.XOJOCY.CLMQKO("tnf:mutants") : this.NGYJYF.HEJGXF
}

function get_OldBaseOwnerId() {
    return this.NGYJYF.AITJRC
}

function get_OldBaseOwnerAllianceId() {
    return this.NGYJYF.MGMVCC
}

function get_PlayerId() {
    var n = this.XJUQTS.STALIT(this.NGYJYF.DFMMEX);
    return n == null ? 0 : n.SHCMPC
}

function get_PlayerName() {
    var n = this.XJUQTS.STALIT(this.NGYJYF.DFMMEX);
    return n == null ? "" : n.NVAMCO
}

function get_OldBaseOwnerFaction() {
    return this.NGYJYF.AQNEQD
}

function get_AllianceId() {
    var n = this.XJUQTS.STALIT(this.NGYJYF.DFMMEX),
        t;
    return n == null || n.ZWLTDB == 0 ? 0 : (t = this.XJUQTS.ZCVVLT(n.ZWLTDB), t == null) ? 0 : t.MGDTER
}

function get_AllianceName() {
    var n = this.XJUQTS.STALIT(this.NGYJYF.DFMMEX),
        t;
    return n == null || n.ZWLTDB == 0 ? "" : (t = this.XJUQTS.ZCVVLT(n.ZWLTDB), t == null) ? "" : t.REIPNV
}

function get_CreateStep() {
    return this.NGYJYF.EJDQMI
}

function get_OwnerBaseName() {
    return this.NGYJYF.WSKTNB
}

function MouseOver() {
    this.CHQNWS != null && this.CHQNWS.IOUEYL(!0)
}

function MouseOut() {
    this.CHQNWS != null && this.CHQNWS.IOUEYL(!1)
}

function VisUpdate(n, t, i) {
    this.BKYAMO || (this.HCRBRO() && (this.TLIWVA(this.XJUQTS, this.NGYJYF), this.ABCBJU(this.XJUQTS, this.NGYJYF), this.GUATFV(!1)), this.GVVHEA == null || this.DOCOMC || this.GVVHEA.JFBQON(this.SVVIBN, this.YOJYDM), i && this.CHQNWS != null && this.CHQNWS.OCAAHR(t))
}

function get_Type() {
    var n = $I.CVRAYR.VAMLQD().ONGTRQ();
    return this.BAOOAM() == n.UQGPFX() ? $I.RWDWHI.Own : this.BAOOAM() != n.UQGPFX() && this.ZEVASN() > 0 && n.SZZNBJ() > 0 && this.ZEVASN() == n.SZZNBJ() ? $I.RWDWHI.Alliance : $I.RWDWHI.Enemy
}

function get_IsHubBaseRuin() {
    return $I.CVRAYR.VAMLQD().RWLPVY().EVGGZM(Math.floor(this.FDMIUF()), Math.floor(this.ICDVYS())) != null
}