function isBlockedButNotHubItself(n, t) {
    return (n < this.WFISST || n >= this.WFISST + this.CRRKRM || t < this.QOGNCV || t >= this.QOGNCV + this.GSNTLN()) && (n < this.WFISST || n >= this.WFISST + this.SPPERN() || t < this.QOGNCV + this.GSNTLN() - this.CRRKRM || t >= this.QOGNCV + this.GSNTLN()) && (n < this.WFISST + this.SPPERN() - this.CRRKRM || n >= this.WFISST + this.SPPERN() || t < this.QOGNCV || t >= this.QOGNCV + this.GSNTLN()) ? n >= this.WFISST && n < this.WFISST + this.SPPERN() && t >= this.QOGNCV && t < this.QOGNCV + this.CRRKRM : !0
}

function get_SizeX() {
    return this.QVAMXG
}

function get_SizeY() {
    return this.KGDZBP
}

function get_Id() {
    return this.NEYHDH
}

function get_Type() {
    return this.OYOFWG
}

function get_X() {
    return this.WFISST
}

function get_Y() {
    return this.QOGNCV
}

function get_Version() {
    return this.EOKEJU
}

function add_HubChanged(n) {
    var t = {},
        i, r = this.MFEAYE,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.MFEAYE, t.$r = $I.TSJVQL.JXWJWI($I.HCABEE, u, i, t), this.MFEAYE = t.a, t.$r); while (r != i)
}

function remove_HubChanged(n) {
    var t = {},
        i, r = this.MFEAYE,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.MFEAYE, t.$r = $I.TSJVQL.JXWJWI($I.HCABEE, u, i, t), this.MFEAYE = t.a, t.$r); while (r != i)
}

function GetClosestAttackField(n, t) {
    return n < this.OFYSUK() ? t < this.FQVDES() ? $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.VCWJMN, 2), this.OFYSUK(), this.FQVDES()) : t >= this.FQVDES() && t < this.FQVDES() + this.GSNTLN() ? $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.VCWJMN, 2), this.OFYSUK(), t) : $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.VCWJMN, 2), this.OFYSUK(), this.FQVDES() + this.GSNTLN() - 1) : n >= this.OFYSUK() && n < this.OFYSUK() + this.SPPERN() ? t < this.FQVDES() ? $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.VCWJMN, 2), n, this.FQVDES()) : $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.VCWJMN, 2), n, this.FQVDES() + this.GSNTLN() - 1) : t < this.FQVDES() ? $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.VCWJMN, 2), this.OFYSUK() + this.SPPERN() - 1, this.FQVDES()) : t >= this.FQVDES() && t < this.FQVDES() + this.GSNTLN() ? $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.VCWJMN, 2), this.OFYSUK() + this.SPPERN() - 1, t) : $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.VCWJMN, 2), this.OFYSUK() + this.SPPERN() - 1, this.FQVDES() + this.GSNTLN() - 1)
}

function get_AllianceId() {
    return this.COTIKW
}

function get_AllianceName() {
    return this.XHYJRH
}

function get_EndStep() {
    return this.KLCTLO
}

function get_LevelDebuff() {
    var t = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG(),
        n;
    return this.CQJAQX == $I.BLNKMP.Attackable && this.YCDBQO > 0 && this.KLCTLO > t ? (n = this.KLCTLO - this.YCDBQO, Math.min($I.CVRAYR.VAMLQD().TZZENG().JIRJVP(), Math.floor(n / $I.CVRAYR.VAMLQD().TZZENG().OYLSXJ()) * $I.CVRAYR.VAMLQD().TZZENG().LCCSDV())) : 0
}

function get_StartStep() {
    return this.YCDBQO
}

function get_CombatId() {
    return this.FRVXWK
}

function get_IsRuin() {
    return this.CQJAQX == $I.BLNKMP.Ruin
}

function get_BaseLevel() {
    return this.QCTVNL
}

function get_ConditionBuildings() {
    return this.OGIMYT
}

function get_ConditionDefense() {
    return this.DLCBJG
}

function get_LastCombatStep() {
    return this.ESYBCN
}

function get_IsAttacked() {
    return this.TESIRI
}

function get_LockdownEndStep() {
    return this.UJVONU
}

function get_State() {
    return this.CQJAQX
}