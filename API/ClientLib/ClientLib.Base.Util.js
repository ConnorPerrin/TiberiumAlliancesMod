[object prototypeObject]
function GameDataResourceCostArrayToClientLibBaseResourceCostArray(n) {
    for (var i = $I.UDAQKL.DNVCCU($I.DBJKAB, n.length), t = 0; t < n.length; t++) i[t] = (new $I.DBJKAB).AIDTSG(n[t]);
    return i
}

function GetFactionGuiPatchText() {
    switch ($I.CVRAYR.VAMLQD().ONGTRQ().WMEKEJ()) {
        case $I.KGPDNC.GDIFaction:
            return "gdi";
        case $I.KGPDNC.NODFaction:
            return "nod"
    }
    return ""
}

function GetBaseResourceCostArray_Obj(n, t) {
    return $I.XOJOCY.DIWMWC(n, t)
}

function GetTechLevelResourceRequirements_Obj(n, t) {
    return $I.XOJOCY.LWBPHO(n, t)
}

function GetTechLevelRequirements_Obj(n, t) {
    return $I.XOJOCY.FOKEYC(n, t)
}

function GetUnitLevelResourceRequirements_Obj(n, t) {
    return $I.XOJOCY.EOJXIS(n, t)
}

function GetUnitLevelRequirements_Obj(n, t) {
    return $I.XOJOCY.MLXTAI(n, t)
}

function GetProductionBuildingFromUntiMoveType(n, t) {
    var i = $I.VFLLZL.Invalid;
    if (t == $I.NYVPAE.Defense) return $I.VFLLZL.Defense_Facility;
    switch (n) {
        case $I.KZPBLZ.KGXXKB:
            return $I.VFLLZL.Barracks;
        case $I.KZPBLZ.PWJOPQ:
        case $I.KZPBLZ.SLXJOG:
        case $I.KZPBLZ.QMONLO:
            return $I.VFLLZL.Factory;
        case $I.KZPBLZ.ATOSGI:
        case $I.KZPBLZ.GRJYXJ:
            return $I.VFLLZL.Airport;
        case $I.KZPBLZ.WPIPYC:
            return i
    }
    return i
}

function GetMoralSignType(n, t) {
    var h = Math.floor(t * 100) / 100,
        c = Math.floor(n * 100) / 100,
        r = 100,
        s = $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.UDAQKL, 2), $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.YJUUCR, 17), 100, 100, 100, 100, 100, 85, 70, 55, 40, 30, 20, 18, 16, 14, 12, 10, 10), $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.YJUUCR, 18), 100, 100, 100, 100, 100, 100, 100, 100, 94, 86, 76, 64, 50, 34, 16, 14, 12, 10)),
        u, i, e, o, f;
    return $I.CVRAYR.VAMLQD().TZZENG().PHJEYD() && ($I.CVRAYR.VAMLQD().TZZENG().STCMHT() == 0 || $I.CVRAYR.VAMLQD().TZZENG().STCMHT() == 1) && (u = Math.max(0, t - n), i = s[$I.CVRAYR.VAMLQD().TZZENG().STCMHT()], u < 0 ? r = i[0] : u > i.length - 1.5 ? r = i[i.length - 1] : (e = Math.floor(Math.max(0, Math.min(i.length - 1, Math.floor(u)))), o = Math.floor(Math.max(0, Math.min(i.length - 1, Math.floor(u + 1)))), r = Math.floor(i[e] * (o - u) + i[o] * (u - e)))), f = 0, r >= 80 && r < 100 ? f = 1 : r < 80 && (f = 2), (new $I.RTVHKJ).NSBVXE(f, 100 - r)
}

function extractServerTnf(n) {
    var t;
    return n != null && (t = n.indexOf($I.WTLAKP.DMWHNL), n = t > 0 ? n.substr(0, t) : n), n
}

function extractServerTnfParams(n) {
    if (n != null) {
        var i = n.indexOf($I.WTLAKP.DMWHNL),
            t = n.indexOf($I.WTLAKP.TVZKSR),
            r = n.indexOf($I.WTLAKP.USGFCA);
        if (i > 0 && t > i && r > t) return $I.XOJOCY.RPYHFE(n.substr(t + $I.WTLAKP.TVZKSR.length, r - t - $I.WTLAKP.TVZKSR.length), $I.WTLAKP.BQDWXQ)
    }
    return null
}

function checkTranslate(n) {
    var t;
    try {
        n = $I.XOJOCY.UWFPDX(n)
    } catch (t) {}
    return n != null && n.indexOf($I.WTLAKP.ZZKMTS) == 0 && (t = $I.XOJOCY.ZAPSHD(n), n = t == null ? $I.XOJOCY.CLMQKO($I.XOJOCY.KCCMAL(n)) : $I.XOJOCY.IVJLTJ($I.XOJOCY.CLMQKO($I.XOJOCY.KCCMAL(n)), t)), n
}

function ShowResourceTypeAsTime(n) {
    return n != 7 && n != 9 && n != 10 && n != 8 ? n == 11 : !0
}

function CalcPolynomValue(n, t) {
    for (var r = 0, i = 0; i < t.length; i++) r += t[i] * Math.pow(n, t.length - i - 1);
    return r
}

function GetNerfAndBoostModifier(n, t) {
    return Math.floor(100 * (100 + t) / (100 + $I.BUEVKL.QGLUJV().SVTSIM(n) * $I.CVRAYR.VAMLQD().TZZENG().BADWAD()) + .5)
}

function CalculateDistance(n, t, i, r) {
    var u = n - i,
        f = t - r,
        e = u * u + f * f;
    return Math.floor(Math.sqrt(e) + .5)
}

function FilterResourceCosts(n, t, i, r) {
    var e, f, o, u;
    if (n == null) return null;
    for (e = (new $I.UCRMVA).SLPWTI(), o = n, u = 0; u < o.length; u++) f = o[u], r ? $I.XOJOCY.REKABK(f.Type, f.Count, i) && e.l.push((new $I.DBJKAB).IJGFXA(f.Type, f.Count)) : $I.XOJOCY.TVMOZK(f.Type, f.Count, t, i) && e.l.push((new $I.DBJKAB).IJGFXA(f.Type, f.Count));
    for (o = $I.UDAQKL.DNVCCU($I.DBJKAB, e.l.length), u = 0; u < e.l.length; u++) o[u] = e.l[u];
    return e.l = [], o
}

function get_ArmyMaxSlotCountX() {
    return $I.XOJOCY.TNAHQT
}

function get_ArmyMaxSlotCountY() {
    return $I.XOJOCY.QIAKKT
}

function RemoveDuplicateCharacters(n) {
    for (var r, t = "", i = 0; i < n.length; i++) r = n.substr(i, 1), -1 == t.indexOf(r) && (t = t + r);
    return t
}

function EAccountType() {}