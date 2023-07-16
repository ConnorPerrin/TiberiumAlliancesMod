function get_Id() {
    return this.WAEDJQ
}

function get_CurrentLevel() {
    var n = this.TOIJBS();
    return n != null ? n.REBAFD() : 0
}

function get_HitpointsPercent() {
    var n = this.TOIJBS();
    return n != null ? n.DGXVOW() : 0
}

function get_MdbUnitId() {
    var n = this.TOIJBS();
    return n != null ? n.GAFYDL() : 0
}

function get_Health() {
    var n = this.TOIJBS();
    return n != null ? n.OCYOUI() : 0
}

function get_MaxHealth() {
    var n = this.TOIJBS();
    return n != null ? n.HVDISQ() : 0
}

function get_CoordX() {
    return this.QGWXRE
}

function set_CoordX(n) {
    this.QGWXRE = n
}

function get_CoordY() {
    return this.ISDVJW
}

function set_CoordY(n) {
    this.ISDVJW = n
}

function get_Enabled() {
    return this.PMREED
}

function set_Enabled(n) {
    this.PMREED = n;
    this.SKYILA != null && this.SKYILA.EBHQQH(n)
}

function get_EnabledAndValid() {
    return this.OYXZWI() && this.LTICKV()
}

function get_Valid() {
    return this.TOIJBS() == null ? !1 : this.TOIJBS().MSLFMA()
}

function get_UnitGameData_Obj() {
    var n = this.TOIJBS();
    return n != null ? n.YBCOGL() : null
}

function get_TransportedCityEntity() {
    return this.SKYILA
}

function set_TransportedCityEntity(n) {
    this.SKYILA = n
}

function get_TransporterCityEntity() {
    return this.HVEGJI
}

function set_TransporterCityEntity(n) {
    this.HVEGJI = n
}

function get_IsTransportedCityEntity() {
    return this.HVEGJI != null
}

function get_CanTransportCityEntity() {
    return this.TOIJBS().ZHIRJH() == $I.ZNGMPE.Garrison
}

function MoveBattleUnit(n, t) {
    return this.VXQEHO(n, t, !0)
}

function GetCityUnit() {
    var n = null,
        t = this.IKKPQQ.VKUOKS().SGRQBS();
    return t != null && (n = t.FMTXVU(this.WAEDJQ)), n
}

function CanMoveBattleUnit(n, t) {
    return this.OUGGWD(n, t)
}

function CanRepair() {
    return this.TOIJBS() == null ? !1 : this.TOIJBS().EYZKZI()
}

function Repair() {
    this.EYZKZI() && this.TOIJBS().FPDQQI(!1)
}