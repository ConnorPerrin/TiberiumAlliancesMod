[object prototypeObject]
function IsViewModeInArmySetup(n, t) {
    return t == $I.SOIZAH.ArmySetup || n && t == $I.SOIZAH.CombatSetup
}

function GetRepairEfficiency(n, t, i, r, u, f) {
    switch ($I.XOJOCY.QCDDHV(n)) {
        case 7:
            return f;
        case 8:
        case 9:
        case 10:
            switch (t) {
                case $I.KZPBLZ.KGXXKB:
                    return r;
                case $I.KZPBLZ.PWJOPQ:
                case $I.KZPBLZ.SLXJOG:
                case $I.KZPBLZ.QMONLO:
                    return u;
                case $I.KZPBLZ.ATOSGI:
                case $I.KZPBLZ.GRJYXJ:
                    return i
            }
            break;
        default:
            return 1
    }
    return 1
}

function AddNeededUnitRepair(n, t) {
    var r = {},
        f, i, e, u;
    if (n != null && t.b != null) {
        f = n.m_dctResTypeValueToRepair.d;
        i = {
            k: null,
            v: null
        };
        for (e in f) i.k = e, i.v = f[e], u = 0, (r.$r = t.b.ZOXRAI(i.k, r), u = r.b, r.$r) || (u = 0), t.b.UHNVSA(i.k, u + i.v)
    }
}

function GetMaxRepairPercentBuildingDependent(n, t, i, r, u, f) {
    var o = 1,
        e;
    if ($I.DUXUSX.SXGFQS(n, t)) {
        o = 0;
        e = null;
        switch (i) {
            case $I.KZPBLZ.KGXXKB:
                e = r;
                break;
            case $I.KZPBLZ.PWJOPQ:
            case $I.KZPBLZ.SLXJOG:
            case $I.KZPBLZ.QMONLO:
                e = u;
                break;
            case $I.KZPBLZ.ATOSGI:
            case $I.KZPBLZ.GRJYXJ:
                e = f
        }
        e != null && (o = e.DGXVOW())
    }
    return o
}