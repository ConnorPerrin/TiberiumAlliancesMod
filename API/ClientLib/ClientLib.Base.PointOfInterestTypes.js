[object prototypeObject]
function GetPOITypeFromWorldPOIType(n) {
    var t = $I.XIJRWU.None;
    switch (n) {
        case $I.STFILX.TiberiumMine:
            return $I.XIJRWU.RankedTypeBegin;
        case $I.STFILX.CrystalMine:
            return $I.XIJRWU.CrystalBonus;
        case $I.STFILX.PowerVortex:
            return $I.XIJRWU.PowerBonus;
        case $I.STFILX.Infantery:
            return $I.XIJRWU.InfanteryBonus;
        case $I.STFILX.Vehicle:
            return $I.XIJRWU.VehicleBonus;
        case $I.STFILX.Air:
            return $I.XIJRWU.AirBonus;
        case $I.STFILX.Defense:
            return $I.XIJRWU.DefenseBonus
    }
    return t
}

function GetPOITypeFromPOIRanking(n) {
    var t = $I.XIJRWU.None;
    switch (n) {
        case $I.OEJBWH.BonusTiberium:
            return $I.XIJRWU.RankedTypeBegin;
        case $I.OEJBWH.BonusCrystal:
            return $I.XIJRWU.CrystalBonus;
        case $I.OEJBWH.BonusPower:
            return $I.XIJRWU.PowerBonus;
        case $I.OEJBWH.BonusInfantry:
            return $I.XIJRWU.InfanteryBonus;
        case $I.OEJBWH.BonusVehicles:
            return $I.XIJRWU.VehicleBonus;
        case $I.OEJBWH.BonusAircraft:
            return $I.XIJRWU.AirBonus;
        case $I.OEJBWH.BonusDefense:
            return $I.XIJRWU.DefenseBonus
    }
    return t
}

function GetBoostsByScore(n, t, i) {
    var r = $I.VFCRBY.MMHIDD(t);
    return r != $I.XIJRWU.None ? $I.VFCRBY.GOEGCK(r, n, i) : 0
}

function GetTotalBoostsByScoreByRanking(n, t, i, r) {
    var u = $I.VFCRBY.MMHIDD(t);
    return u != $I.XIJRWU.None ? $I.VFCRBY.GOWVHJ(u, i, n, r) : 0
}

function GetNextScore(n) {
    for (var r = $I.CVRAYR.VAMLQD().TZZENG().EAONUD(), t = 0, e = 0, u = $I.BUEVKL.QGLUJV().VXAMCA().poibbs, f, i = 0; i < u.length; i++)
        if (f = u[i], t = Math.floor(f.s), r != null && (t = r[e++]), t > n) return t;
    return Math.max(t, 0)
}

function GetScoreByLevel(n) {
    return $I.BUEVKL.QGLUJV().VXAMCA().poisbl[n]
}

function GetBoostModifierByRank(n) {
    var t;
    return (t = $I.BUEVKL.QGLUJV().VXAMCA().poibmbr[n], t == undefined ? !1 : !0) ? t : 0
}

function GetBonusByType(n, t, i) {
    var s = $I.CVRAYR.VAMLQD().TZZENG().EAONUD(),
        h = 0,
        u = 0,
        f, e, r, o;
    if (t > 0)
        for (f = $I.BUEVKL.QGLUJV().VXAMCA().poibbs, r = 0; r < f.length; r++) {
            if (e = f[r], o = Math.floor(e.s), s != null && (o = s[h++]), t < o) return u;
            n - 2 >= $I.XIJRWU.None && (u = e.b[n - 2] * i)
        }
    return u
}

function GetTotalBonusByType(n, t, i, r) {
    var u = $I.VFCRBY.GOEGCK(n, i, r);
    return u + u * ($I.VFCRBY.NRIJOY(t) / 100)
}