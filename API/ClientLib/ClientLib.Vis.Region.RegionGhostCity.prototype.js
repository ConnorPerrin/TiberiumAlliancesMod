function Dispose() {
    $I.DXCHWP.prototype.NSFOQM.call(this);
    $I.CVRAYR.VAMLQD().ZBVLXL().SJCHZU((new $I.MBLAWJ).TFDQYD(this, this.YXJENH));
    this.EHAWTP.USDIRU((new $I.VYKQUV).TFDQYD(this, this.UXUZRV));
    this.CYHVMR();
    this.CHQNWS != null && (this.CHQNWS.NSFOQM(), this.CHQNWS = null);
    this.BWYHTC != null && (this.BWYHTC.NSFOQM(), this.BWYHTC = null)
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
    this.JOIPIN(this.EHAWTP)
}

function UpdateZoom() {}

function UpdateDungeonLevels() {}

function UpdateMoralDecal() {}

function VisUpdate(n, t, i) {
    this.BKYAMO || (this.QNDRLH == null || this.XXGQCC || this.QNDRLH.JFBQON(this.SVVIBN, this.YOJYDM), i && this.CHQNWS != null && this.CHQNWS.OCAAHR(t), i && this.BWYHTC != null && this.BWYHTC.OCAAHR(t))
}

function UiUpdate() {
    var n;
    this.BKYAMO || this.ZXOBMO != -1 || (n = $I.CVRAYR.VAMLQD().UXQPUS().SDPNUL(this.EHAWTP.OFYSUK(), this.EHAWTP.FQVDES()), n != null && (this.ZXOBMO = n.UQGPFX()))
}

function HideInfos() {
    this.XXGQCC || (this.XXGQCC = !0, this.QNDRLH != null && this.QNDRLH.TXFEZJ())
}

function ShowInfos() {
    this.XXGQCC && (this.XXGQCC = !1, this.QNDRLH != null && this.QNDRLH.KKWNHR())
}

function Selection() {}

function Deselection() {}

function Dispose() {
    $I.DXCHWP.prototype.NSFOQM.call(this);
    $I.CVRAYR.VAMLQD().ZBVLXL().SJCHZU((new $I.MBLAWJ).TFDQYD(this, this.YXJENH));
    this.EHAWTP.USDIRU((new $I.VYKQUV).TFDQYD(this, this.UXUZRV));
    this.CYHVMR();
    this.CHQNWS != null && (this.CHQNWS.NSFOQM(), this.CHQNWS = null);
    this.BWYHTC != null && (this.BWYHTC.NSFOQM(), this.BWYHTC = null)
}

function get_VisObjectType() {
    return $I.CDNXVQ.RegionGhostCity
}

function HideInfos() {
    this.XXGQCC || (this.XXGQCC = !0, this.QNDRLH != null && this.QNDRLH.TXFEZJ())
}

function ShowInfos() {
    this.XXGQCC && (this.XXGQCC = !1, this.QNDRLH != null && this.QNDRLH.KKWNHR())
}

function UpdateColor() {
    this.JOIPIN(this.EHAWTP)
}

function get_UIType() {
    return "GhostCity"
}

function get_Id() {
    return this.EHAWTP.UQGPFX()
}

function get_Name() {
    return this.EHAWTP.KPQBNW()
}

function get_BaseLevel() {
    return this.EHAWTP.KCWGSH()
}

function get_PlayerId() {
    return this.EHAWTP.CPVNPP()
}

function get_PlayerName() {
    return this.EHAWTP.KLWWUO()
}

function get_PlayerFaction() {
    return this.EHAWTP.VOPFYX()
}

function get_AllianceId() {
    return this.EHAWTP.SZZNBJ()
}

function get_AllianceName() {
    return this.EHAWTP.UMBVWJ()
}

function get_RecoveryEndStep() {
    return this.EHAWTP.DDVAFA()
}

function MouseOver() {
    this.CHQNWS != null && (this.CHQNWS.IOUEYL(!0), $I.CVRAYR.VAMLQD().ZBVLXL().DCXOLB() == this.EHAWTP.UQGPFX() && this.VLQXKA(!1))
}

function MouseOut() {
    this.CHQNWS != null && (this.CHQNWS.IOUEYL(!1), $I.CVRAYR.VAMLQD().ZBVLXL().DCXOLB() == this.EHAWTP.UQGPFX() && this.VLQXKA(!0))
}

function UiUpdate() {
    var n;
    this.BKYAMO || this.ZXOBMO != -1 || (n = $I.CVRAYR.VAMLQD().UXQPUS().SDPNUL(this.EHAWTP.OFYSUK(), this.EHAWTP.FQVDES()), n != null && (this.ZXOBMO = n.UQGPFX()))
}

function VisUpdate(n, t, i) {
    this.BKYAMO || (this.QNDRLH == null || this.XXGQCC || this.QNDRLH.JFBQON(this.SVVIBN, this.YOJYDM), i && this.CHQNWS != null && this.CHQNWS.OCAAHR(t), i && this.BWYHTC != null && this.BWYHTC.OCAAHR(t))
}

function CanMove() {
    return this.EHAWTP.UBTDFB() ? this.EHAWTP.KPOPDB() : $I.BSOKEY.Fail
}