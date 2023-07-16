function get_City() {
    return this.QCBKQI
}

function get_CoordX() {
    return this.TVGSQS.OFYSUK()
}

function set_CoordX(n) {
    this.TVGSQS.BTKBFX(n)
}

function get_CoordY() {
    return this.TVGSQS.FQVDES()
}

function set_CoordY(n) {
    this.TVGSQS.NKQMUE(n)
}

function get_Coords() {
    return this.TVGSQS
}

function set_Coords(n) {
    this.TVGSQS = n
}

function get_CurrentLevel() {
    var n;
    return this.OGQNFM ? (n = $I.CVRAYR.VAMLQD().RWLPVY().VQAPBW().VFXJWC(), this.QCBKQI.KCWGSH() - n) : this.FNULLP
}

function get_CurrentDamage() {
    return Math.max(this.HVDISQ() - this.OCYOUI(), 0)
}

function get_IsAlive() {
    return this.OCYOUI() > 0
}

function get_IsDamaged() {
    return this.OCYOUI() < this.HVDISQ()
}

function get_HitpointsPercent() {
    return this.HVDISQ() <= 0 ? 1 : Math.min(1, this.OCYOUI() / this.HVDISQ())
}

function get_MaxLevelReached() {
    return this.EMJELS()
}

function get_Health() {
    return this.EDFHKI
}

function set_Health(n) {
    this.EDFHKI = n
}

function get_Id() {
    return this.BPGBDG
}

function get_MdbUnitId() {
    return this.NJPKMO
}

function get_UnitGameData_Obj() {
    return this.OAOHEA
}

function GetResourceCostForFullRepair() {
    var t = (new $I.UDBZSB).SLPWTI(),
        i, r, u, n, f;
    if (this.IAGCLF != null) {
        if ((i = this.DNTZMM(), i <= 0) || (r = $I.DUXUSX.SKQKQT(this.IAGCLF, i, this.QCBKQI.UEFYNJ().CANDGA(), this.QCBKQI.UEFYNJ().QXLFNH(), this.QCBKQI.UEFYNJ().DDCMYG(), this.QCBKQI.UEFYNJ().QSRSTB()), t = (new $I.UDBZSB).SLPWTI(), r == null)) return t;
        u = r.d;
        n = {
            k: null,
            v: null
        };
        for (f in u) n.k = f, n.v = u[f], t.UHNVSA(n.k, n.v)
    }
    return t
}

function get_UnitLevelRepairRequirements() {
    return this.IAGCLF
}

function HasReachedMaxLevel() {
    return this.REBAFD() >= $I.HGGVCG.RQAMMY
}

function IsOverMaxLevelAfter(n) {
    return this.REBAFD() + n > $I.HGGVCG.RQAMMY
}

function get_TransportedCityEntity() {
    return this.SDSZHE
}

function set_TransportedCityEntity(n) {
    this.SDSZHE = n
}

function get_IsTransportedCityEntity() {
    return this.UQWEVY
}

function set_IsTransportedCityEntity(n) {
    this.UQWEVY = n
}