[object prototypeObject]
function GetTechIdFromTechNameAndFaction(n, t) {
    switch (t) {
        case 1:
            return $I.YZBSQQ.ZLCSIT(n);
        case 2:
            return $I.YZBSQQ.MQKPDM(n);
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            return $I.YZBSQQ.SPRENK(n);
        case 8:
            return $I.YZBSQQ.ILZMGD(n)
    }
    return -1
}

function GetTechNameFromTechId(n, t) {
    var i, u, r, f;
    if ($I.YZBSQQ.NXWPIH(), (n == 133 || n == 140) && t == 3) return 0;
    i = null;
    switch (t) {
        case 1:
            i = $I.YZBSQQ.VWQMBX;
            break;
        case 2:
            i = $I.YZBSQQ.ESMETJ;
            break;
        case 3:
            i = $I.YZBSQQ.HIEVYF
    }
    if (i != null) {
        u = i.d;
        r = {
            k: null,
            v: null
        };
        for (f in u)
            if (r.k = f, r.v = u[f], n == r.v) return r.k
    }
    return -1
}

function GetTechDisplayNameFromTechId(n) {
    var t, i;
    return $I.YZBSQQ.NXWPIH(), t = "", i = $I.BUEVKL.QGLUJV().ITRZSX(n), i != null && (t = i.dn), t
}

function GetModifierValueFromLvl1Tech(n, t, i) {
    var e = $I.YZBSQQ.DGTWTH(n, i),
        f = $I.BUEVKL.QGLUJV().ITRZSX(e),
        r, u;
    if (f != null && (r = $I.XOJOCY.ZGTWZV(1, f), r != null))
        for (u = 0; u < r.length; u++)
            if (r[u].ModifierType == t) return r[u].Value;
    return 0
}

function GetProductionBuildingNameFromFaction(n, t) {
    return $I.YZBSQQ.PZXYYB($I.YZBSQQ.DGTWTH(n, t))
}

function GetPlayerLeverRequirementByOject(n) {
    return $I.YZBSQQ.AQWDTW(n)
}

function IsResearchTech(n) {
    return n != 2 && n != 1 ? n == 5 : !0
}