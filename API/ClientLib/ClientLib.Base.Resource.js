[object prototypeObject]
function IsResourceProductionType(n) {
    return n != $I.OATHMF.Tiberium && n != $I.OATHMF.Crystal && n != $I.OATHMF.Power ? n == $I.OATHMF.Gold : !0
}

function IsResourceTypeOffenseRepairCharge(n) {
    return n != $I.OATHMF.RepairChargeOffense_RewardsOnly && n != $I.OATHMF.RepairChargeInf && n != $I.OATHMF.RepairChargeVeh ? n == $I.OATHMF.RepairChargeAir : !0
}

function IsResourceTypeTimeValue(n) {
    return n != $I.OATHMF.RepairChargeBase ? $I.TYCUAI.YADLQO(n) : !0
}

function GetResourceMaxStorage(n) {
    return n == null ? 0 : n.Max
}

function GetResourceGrowPerDay(n, t) {
    var i;
    return n == null ? 0 : (i = n.Delta * $I.CVRAYR.VAMLQD().GRIWFQ().OBDULR() * 24, t && (i += n.ExtraBonusDelta * $I.CVRAYR.VAMLQD().GRIWFQ().OBDULR() * 24), i)
}

function GetResourceGrowPerHour(n, t) {
    var i;
    return n == null ? 0 : (i = n.Delta * $I.CVRAYR.VAMLQD().GRIWFQ().OBDULR(), t && (i += n.ExtraBonusDelta * $I.CVRAYR.VAMLQD().GRIWFQ().OBDULR()), i)
}

function GetResourceBonusGrowPerHour(n) {
    return n != null ? n.ExtraBonusDelta * $I.CVRAYR.VAMLQD().GRIWFQ().OBDULR() : 0
}

function GetResourceCount(n) {
    return $I.TYCUAI.YQRGEN(n, $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG())
}

function GetResourceCountStep(n, t) {
    var r, i;
    return n == null ? 0 : $I.TYCUAI.NVKOPF(n.Type) && n.Base > n.Max ? n.Base : t == 0 ? 0 : (r = t - n.Step, i = r * n.Delta + n.Base, n.NoMaxStorage || (i = Math.min(n.Max, i)), i)
}

function PredictResourcerReachedSteps(n, t) {
    var i;
    if (n != null) {
        if (i = $I.TYCUAI.FDJEIX(n), n.Delta > 0 && i < t && (i >= t || n.NoMaxStorage || Math.floor(t) <= Math.floor(n.Max))) return Math.floor(Math.abs((t - n.Base) / n.Delta) + n.Step);
        if (i < t) return -1
    }
    return 0
}