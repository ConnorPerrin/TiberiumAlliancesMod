[object prototypeObject]
function GetItemsByCategory(n) {
    var i = (new $I.UDBZSB).SLPWTI(),
        r = $I.BUEVKL.QGLUJV().VXAMCA().items,
        t = {
            k: null,
            v: null
        };
    for (var u in r) t.k = u, t.v = r[u], t.v.c == n && i.GXVKTX(t.k, t.v);
    return i
}

function GetNonCommandPointGainResourceItems(n) {
    var i = (new $I.UDBZSB).SLPWTI(),
        r = $I.BUEVKL.QGLUJV().VXAMCA().items,
        t = {
            k: null,
            v: null
        };
    for (var u in r) t.k = u, t.v = r[u], (t.v.c == 1 || t.v.c == 2 || t.v.c == 3 || t.v.c == 4) && t.v.t == n && i.GXVKTX(t.k, t.v);
    return i
}

function GetAllResourceItems(n) {
    var i = (new $I.UDBZSB).SLPWTI(),
        r = $I.BUEVKL.QGLUJV().VXAMCA().items,
        t = {
            k: null,
            v: null
        };
    for (var u in r)(t.k = u, t.v = r[u], t.v.c == 7 || (t.v.c == 1 || t.v.c == 2 || t.v.c == 3 || t.v.c == 4) && (t.v.t == n || n == -1)) && i.GXVKTX(t.k, t.v);
    return i
}

function GetItemsByCategoryAndLevel(n, t) {
    var r = (new $I.UDBZSB).SLPWTI(),
        u = $I.BUEVKL.QGLUJV().VXAMCA().items,
        i = {
            k: null,
            v: null
        };
    for (var f in u) i.k = f, i.v = u[f], i.v.t == t && i.v.c == n && r.GXVKTX(i.k, i.v);
    return r
}

function GetItemByEffectId(n) {
    var i = $I.BUEVKL.QGLUJV().VXAMCA().items,
        t = {
            k: null,
            v: null
        };
    for (var r in i)
        if (t.k = r, t.v = i[r], t.v.e != null && t.v.e.length == 1 && t.v.e[0].i == n) return t.v;
    return null
}

function GetActiveItemsByCategory(n) {
    var t = {},
        i;
    return (t.$r = $I.CVRAYR.VAMLQD().ONGTRQ().QRYUMK().ZOXRAI(n, t), i = t.b, t.$r) ? i : (new $I.UCRMVA).SLPWTI()
}

function GetFirstItemByCategoryAndLevel(n, t) {
    var r = $I.BUEVKL.QGLUJV().VXAMCA().items,
        i = {
            k: null,
            v: null
        };
    for (var u in r)
        if (i.k = u, i.v = r[u], i.v.t == t && i.v.c == n) return i.v;
    return null
}

function GetFirstAvailableItemByCategoryAndLevel(n, t) {
    var r = $I.BUEVKL.QGLUJV().VXAMCA().items,
        i = {
            k: null,
            v: null
        };
    for (var u in r)
        if (i.k = u, i.v = r[u], i.v.t >= t && i.v.c == n) return i.v;
    return null
}

function GetFirstOwnedItemByCategoryAndLevel(n, t) {
    var r = $I.BUEVKL.QGLUJV().VXAMCA().items,
        i = {
            k: null,
            v: null
        };
    for (var u in r)
        if (i.k = u, i.v = r[u], i.v.t == t && i.v.c == n && $I.CVRAYR.VAMLQD().XXFJGT().DLBDKP(i.v.i)) return i.v;
    return null
}

function GetCheapestItemByCategoryAndLevel(n, t) {
    var e = null,
        r = 0,
        o = $I.BUEVKL.QGLUJV().VXAMCA().items,
        i = {
            k: null,
            v: null
        },
        u, f;
    for (u in o) i.k = u, i.v = o[u], f = $I.CVRAYR.VAMLQD().TVYHJP().MAMGEI(i.v.i), i.v.t == t && i.v.c == n && (f < r || r == 0) && (r = f, e = i.v);
    return e
}

function GetItemById(n) {
    var i = $I.BUEVKL.QGLUJV().VXAMCA().items,
        t = {
            k: null,
            v: null
        };
    for (var r in i)
        if (t.k = r, t.v = i[r], t.v.i == n) return t.v;
    return null
}