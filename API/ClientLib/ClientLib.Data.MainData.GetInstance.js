function get_Time() {
    return this.QPAMTD
}

function set_Time(n) {
    this.QPAMTD != n && (this.QPAMTD != null && $I.KRSVNP.OKNHXZ().TAROAL("TIME"), this.QPAMTD = n, this.QPAMTD != null && $I.KRSVNP.OKNHXZ().YLQIBC("TIME", (new $I.UDLEDH).TFDQYD(this.QPAMTD, this.QPAMTD.XDSTGJ)))
}

function get_Chat() {
    return this.VTNHWW
}

function get_Server() {
    return this.CNYOUU
}

function get_World() {
    return this.LOJJXS
}

function get_Player() {
    return this.RNLOCQ
}

function get_Alliance() {
    return this.GUTRXY
}

function get_Cities() {
    return this.TOJYEJ
}

function get_CitiesSupport() {
    return this.FABKAV
}

function get_Mail() {
    return this.VXBLOC
}

function get_Reports() {
    return this.EXLZOP
}

function get_Missions() {
    return this.VLQZVF
}

function get_BaseColors() {
    return this.KNJAEW
}

function get_Gift() {
    return this.QHNPSI
}

function get_Forum() {
    return this.DSEHPC
}

function get_Notifications() {
    return this.DYYXVA
}

function get_Combat() {
    return this.XHAGVM
}

function get_AllianceCombatState() {
    return this.FWYHWI
}

function get_AllianceSupportState() {
    return this.MVSEUH
}

function get_AllianceTargetWatcher() {
    return this.PNAWEQ
}

function get_AllianceWatchListWatcher() {
    return this.EXPPCN
}

function get_Inventory() {
    return this.FESXVG
}

function get_ShopCatalog() {
    return this.LRSXJW
}

function get_PlayerSubstitution() {
    return this.KVCPKZ
}

function get_EndGame() {
    return this.HSNSRH
}

function get_Challenge() {
    return this.ZQTLBS
}

function set_Challenge(n) {
    this.ZQTLBS != n && (this.ZQTLBS != null && $I.KRSVNP.OKNHXZ().TAROAL("CHALLENGE"), this.ZQTLBS = n, this.ZQTLBS != null && $I.KRSVNP.OKNHXZ().YLQIBC("CHALLENGE", (new $I.UDLEDH).TFDQYD(this.ZQTLBS, this.ZQTLBS.XDSTGJ)))
}

function get_ArsenalHandler() {
    return this.MITVUR
}

function SendCommandError(n, t) {
    this.HGXVXP != null && this.HGXVXP.JQKSHG(n, t)
}

function add_OnCommandError(n) {
    var t = {},
        i, r = this.HGXVXP,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.HGXVXP, t.$r = $I.TSJVQL.JXWJWI($I.OELYIO, u, i, t), this.HGXVXP = t.a, t.$r); while (r != i)
}

function remove_OnCommandError(n) {
    var t = {},
        i, r = this.HGXVXP,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.HGXVXP, t.$r = $I.TSJVQL.JXWJWI($I.OELYIO, u, i, t), this.HGXVXP = t.a, t.$r); while (r != i)
}