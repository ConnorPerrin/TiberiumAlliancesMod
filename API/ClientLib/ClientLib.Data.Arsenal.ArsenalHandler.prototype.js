function GetArsenalEntity(n) {
    switch (n.Type) {
        case $I.BSEYVK.Unit:
            return (new $I.GYNWTK).RZIIWV(n.MdbId);
        case $I.BSEYVK.Building:
            return (new $I.EVBSGR).RZIIWV(n.MdbId);
        case $I.BSEYVK.MCV:
            return (new $I.QIGNKV).RZIIWV(n.MdbId);
        case $I.BSEYVK.SupportBuilding:
            return (new $I.TXFAEM).RZIIWV(n.MdbId)
    }
    return null
}

function GetCurrentLevel(n, t) {
    var i = t,
        u = $I.CVRAYR.VAMLQD().ZBVLXL().LVIQBQ().d,
        r = {
            k: null,
            v: null
        };
    for (var f in u)
        if (r.k = f, r.v = u[f], n.FVZIXU() == $I.NYVPAE.Offense) i = Math.max(i, r.v.JNLWQS());
        else {
            if (n.FVZIXU() == $I.NYVPAE.Defense) {
                i = Math.max(i, r.v.CRHLME());
                continue
            }
            n.FVZIXU() == $I.NYVPAE.Structure && (i = Math.max(i, r.v.KQCAFG()))
        } return Math.max(1, Math.min(n.IDNNKX(), Math.floor(i)))
}

function GetCurrentRepairBuildingLevel(n, t) {
    var r = t,
        e = $I.CVRAYR.VAMLQD().ZBVLXL().LVIQBQ().d,
        u = {
            k: null,
            v: null
        },
        f, i;
    for (f in e) u.k = f, u.v = e[f], i = $I.VFLLZL.Invalid, i = this.TLGXZO(n), r = i != $I.VFLLZL.Invalid ? Math.max(r, u.v.IJOEHC(i)) : 0;
    return Math.max(1, Math.min(n.IDNNKX(), Math.floor(r)))
}

function GetArsenalUnits(n, t) {
    var o = (new $I.UCRMVA).SLPWTI(),
        u, r, f, i, s, h, e, c;
    if (t != $I.GAIEHH.BaseBuilding || t != $I.GAIEHH.All) {
        u = $I.BUEVKL.QGLUJV().VXAMCA().units;
        r = {
            k: null,
            v: null
        };
        for (f in u) r.k = f, r.v = u[f], i = r.v, s = i.pt == 1 || i.pt == 2, i.f == n && i.x >= 0 && i.y >= 0 && s && i.sia && !i.iceu && (h = t == $I.GAIEHH.AllOffense || t == $I.GAIEHH.AllDefense, e = $I.GAIEHH.All, t != $I.GAIEHH.All && (e = this.WQTDXJ(i, h)), t == e && (c = (new $I.WQYLWX).OVEEOG(r.k, $I.BSEYVK.Unit, i.dn, i.iimg), o.l.push(c)))
    }
    return o
}

function GetArsenalBuildings(n, t) {
    var u = (new $I.UCRMVA).SLPWTI(),
        f, i, e, o, s, h;
    if (t == $I.GAIEHH.BaseBuilding || t == $I.GAIEHH.All) {
        f = $I.BUEVKL.QGLUJV().VXAMCA().Tech;
        i = {
            k: null,
            v: null
        };
        for (e in f) {
            i.k = e;
            i.v = f[e];
            var r = i.v,
                c = r.t == 9 && i.k != 133 && i.k != 140,
                l = i.k == 45 && n == 1,
                a = i.k == 85 && n == 2;
            if (r.f == n && !$I.YZBSQQ.GNHHOO(r.t) && (r.x >= 0 && r.y >= 0 || c)) {
                o = $I.BSEYVK.Building;
                r.t == 13 && (o = $I.BSEYVK.SupportBuilding);
                s = (new $I.WQYLWX).OVEEOG(i.k, o, r.dn, r.qi);
                u.l.push(s);
                continue
            }(l || a) && (h = (new $I.WQYLWX).OVEEOG(i.k, $I.BSEYVK.MCV, r.dn, r.qi), u.l.push(h))
        }
    }
    return u
}