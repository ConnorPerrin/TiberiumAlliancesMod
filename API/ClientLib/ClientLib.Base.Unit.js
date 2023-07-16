[object prototypeObject]
function get_MaxUnitLimit() {
    return $I.GGTBLR.WHSDFK
}

function get_MaxUnitsPerRow() {
    return $I.GGTBLR.NTMWLH
}

function GetUpgradeModulTypeByMdbUnitId(n) {
    return $I.GGTBLR.HTEARL($I.BUEVKL.QGLUJV().JXKWLE(n))
}

function GetUpgradeModulTypeByUnitIdAndActiveModules(n, t) {
    var f, e, i, r, o, u, s;
    if (t != null && (f = $I.BUEVKL.QGLUJV().JXKWLE(n), f != null))
        for (e = f.m, r = 0; r < e.length; r++)
            if (i = e[r], i.t != 1)
                for (o = t, u = 0; u < o.length; u++)
                    if (s = o[u], s == i.i) return i.t;
    return $I.ZNGMPE.Weapon
}

function GetTechIdFromUpgrade(n, t) {
    var f, e, i, r, o, u, s;
    if (t != null && (f = $I.BUEVKL.QGLUJV().JXKWLE(n), f != null))
        for (e = f.m, r = 0; r < e.length; r++)
            if (i = e[r], i.t != 1)
                for (o = t, u = 0; u < o.length; u++)
                    if (s = o[u], s == i.i && i.r.length > 0) return i.r[0].i;
    return -1
}

function HasUpgrade(n, t) {
    var u, f, e, i, o, r, s;
    if (t != null && (u = $I.BUEVKL.QGLUJV().JXKWLE(n), u != null))
        for (f = u.m, i = 0; i < f.length; i++)
            if (e = f[i], e.t != 1)
                for (o = t, r = 0; r < o.length; r++)
                    if (s = o[r], s == e.i) return !0;
    return !1
}

function GetUpgrade(n) {
    return $I.GGTBLR.RROLSB($I.BUEVKL.QGLUJV().JXKWLE(n))
}

function IsUnitOfTypeWall(n) {
    return n != 106 && n != 174 ? n == 192 : !0
}

function CanBeTransported(n, t) {
    var i = n,
        r = t;
    return i != null && $I.GGTBLR.HTEARL(i) != $I.ZNGMPE.Garrison ? !1 : $I.GGTBLR.WUZNUB(i, r)
}

function CanUnitTransportOtherUnit(n, t) {
    var e = n,
        u = t,
        f, i, r;
    if (e != null)
        for (f = e.m, r = 0; r < f.length; r++)
            if (i = f[r], i.t == 8) return i.tat == u.at && i.mt == u.mt && i.h >= u.uc;
    return !1
}