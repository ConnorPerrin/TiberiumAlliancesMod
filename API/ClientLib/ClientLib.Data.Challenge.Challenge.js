[object prototypeObject]
function ApplyCurrentRewardsToValue(n, t) {
    return webfrontend.data.ChallengeEvents.getInstance().applyCurrentRewards(n, t)
}

function ApplyCurrentRewardsToCostValue(n, t) {
    return n == 8 || n == 10 || n == 9 ? $I.WYSPZN.ABPFIA(t, $I.WYSPZN.ECRT_Modify_RepairTime_Offense) : (n == 2 && (t = $I.WYSPZN.ABPFIA(t, $I.WYSPZN.ECRT_Modify_RepairCrystal_Offense)), t)
}

function ApplyCurrentRewardsToCost(n) {
    return (new $I.DBJKAB).IJGFXA(n.Type, $I.WYSPZN.SUCEHD(n.Type, n.Count))
}

function ApplyCurrentRewards(n) {
    var i = n,
        t;
    if (n != null && n.length > 0)
        for (i = $I.UDAQKL.DNVCCU($I.DBJKAB, n.length), t = 0; t < n.length; t++) i[t] = $I.WYSPZN.DVSONI(n[t]);
    return i
}