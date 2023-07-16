function GetCreateImage() {
    return this.OOHOEL || this.LAQDKH != null || (this.LAQDKH = this.SPPIEY.TDBBHP("image", null), this.LAQDKH.TYDVYV(3), this.SPPIEY.UVSZDF(this.LAQDKH)), this.WSRGGH()
}

function GetImage() {
    return this.LAQDKH
}

function DisposeImage() {
    this.LAQDKH != null && (this.SPPIEY.NEHMEK(this.LAQDKH), this.LAQDKH = null)
}

function GetEffect(n) {
    return this.DUCEGA.XOHVCR(n) ? this.DUCEGA.d[n] : null
}

function GetCreateEffect(n) {
    var t, i, r;
    return this.OOHOEL || this.DUCEGA.XOHVCR(n) || (i = $I.BUEVKL.QGLUJV(), r = (t = (new $I.ZFKFPU).CBDLKU(this.SPPIEY, i.WJVSOL(n), this.CJEUVE, this.TLYOGU, null), t.TYDVYV(3), t), this.DUCEGA.UHNVSA(n, r)), this.DNVYYF(n)
}

function DisposeEffect(n) {
    this.DUCEGA.XOHVCR(n) && (this.DUCEGA.d[n].NSFOQM(), this.DUCEGA.XUDPAL(n))
}

function DisposeEffects() {
    var t = this.DUCEGA.d,
        n = {
            k: null,
            v: null
        };
    for (var i in t) n.k = i, n.v = t[i], n.v.NSFOQM();
    this.DUCEGA.AMMYJA()
}

function Dispose() {
    $I.XHVXGB.prototype.NSFOQM.call(this);
    this.OEJCXA(this.OUBYEB, this.APENBM)
}

function UiUpdate(n) {
    var f = {},
        i, t, o, a, w, r, h, s, v, b, k, d, u, e, l, g, nt, c, p, tt;
    if (!this.OOHOEL) {
        if (i = "", t = "", this.OUBYEB != $I.CDNXVQ.WorldSatelliteCrashMarker) {
            if (this.OUBYEB == $I.CDNXVQ.WorldHubCenterMarker) o = this.APENBM, a = $I.XOJOCY.GYKUBO(o.HKZTHI() - n), i = $I.XOJOCY.CLMQKO("tnf:controlhub center uc"), o.TNYGND() == $I.BLNKMP.Attackable ? t = $I.XOJOCY.CZIVOS("tnf:controlled by %1", o.UMBVWJ()) : o.TNYGND() == $I.BLNKMP.Ruin ? t = $I.XOJOCY.CZIVOS("tnf:endgame fortress destroyed %1", a) : o.TNYGND() == $I.BLNKMP.Claim ? (w = $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.EUNQAF, 2), o.UMBVWJ(), a), t = $I.XOJOCY.UIKPCJ("tnf:endgame fortress hacked by %1 in %2", w)) : t = $I.XOJOCY.CLMQKO("tnf:endgame fortress shielded");
            else if (this.OUBYEB == $I.CDNXVQ.WorldHubControlMarker) r = this.APENBM, t = $I.XOJOCY.CZIVOS("tnf:controlled by %1", "-"), r.SZZNBJ() > 0 ? t = $I.XOJOCY.CZIVOS("tnf:controlled by %1", r.UMBVWJ()) : r.IKLQCK() == 0 && (t = $I.XOJOCY.CZIVOS("tnf:controlled by %1", $I.XOJOCY.CLMQKO("tnf:the forgotten"))), $I.CVRAYR.VAMLQD().TZZENG().SPVTMU() ? i = $I.XOJOCY.CLMQKO("tnf:controlhub 0 uc") : r.MELOXD() == 0 ? i = $I.XOJOCY.CLMQKO("tnf:controlhub 1 uc") : r.MELOXD() == 1 ? i = $I.XOJOCY.CLMQKO("tnf:controlhub 2 uc") : r.MELOXD() == 2 ? i = $I.XOJOCY.CLMQKO("tnf:controlhub 3 uc") : r.MELOXD() == 3 ? i = $I.XOJOCY.CLMQKO("tnf:controlhub 4 uc") : r.MELOXD() == 4 ? i = $I.XOJOCY.CLMQKO("tnf:controlhub 5 uc") : r.MELOXD() == 5 ? i = $I.XOJOCY.CLMQKO("tnf:controlhub 6 uc") : r.MELOXD() == 6 && (i = $I.XOJOCY.CLMQKO("tnf:controlhub 7 uc")), $I.CVRAYR.VAMLQD().TZZENG().SPVTMU() && r.RKSLJD() != $I.BLNKMP.NONE && (t = $I.XOJOCY.CLMQKO("tnf:inactive"));
            else if (this.OUBYEB == $I.CDNXVQ.WorldCityOwn) {
                h = this.APENBM;
                i = h.KPQBNW();
                var it = $I.XOJOCY.CLMQKO("tnf:level:") + " " + h.KCWGSH().toString(),
                    rt = $I.XOJOCY.CZIVOS("tnf:health: %1", h.LRNOID().toString()),
                    ut = $I.XOJOCY.CLMQKO("tnf:coords:") + " " + h.OFYSUK().toString() + ":" + h.FQVDES().toString();
                t = it + " " + rt + " " + ut
            } else if (this.OUBYEB == $I.CDNXVQ.WorldAllianceMarker) s = this.APENBM, v = "", v = s.GIRXAB() == $I.QOYXHV.EAMT_Conquer ? $I.XOJOCY.CLMQKO("tnf:allymarker type conquer") : s.GIRXAB() == $I.QOYXHV.EAMT_Move ? $I.XOJOCY.CLMQKO("tnf:allymarker type move") : s.GIRXAB() == $I.QOYXHV.EAMT_Support ? $I.XOJOCY.CLMQKO("tnf:allymarker type support") : s.GIRXAB() == $I.QOYXHV.EAMT_Reserve ? $I.XOJOCY.CLMQKO("tnf:allymarker type reserve") : $I.XOJOCY.CLMQKO("tnf:allymarker type watch"), b = $I.XOJOCY.CLMQKO("tnf:coords:") + " " + s.EZVHOT().toString() + ":" + s.JXTDIO().toString(), i = v, t = b;
            else if (this.OUBYEB == $I.CDNXVQ.WorldPOI) u = this.APENBM, e = $I.XOJOCY.CLMQKO("tnf:poi tunnel exit"), u.RMMPVP == $I.STFILX.TiberiumMine ? e = $I.XOJOCY.CLMQKO("tnf:poi tiberium mine") : u.RMMPVP == $I.STFILX.CrystalMine ? e = $I.XOJOCY.CLMQKO("tnf:poi crystal mine") : u.RMMPVP == $I.STFILX.PowerVortex ? e = $I.XOJOCY.CLMQKO("tnf:poi power vortex") : u.RMMPVP == $I.STFILX.Infantery ? e = $I.XOJOCY.CLMQKO("tnf:poi infantery") : u.RMMPVP == $I.STFILX.Vehicle ? e = $I.XOJOCY.CLMQKO("tnf:poi vehicle") : u.RMMPVP == $I.STFILX.Air ? e = $I.XOJOCY.CLMQKO("tnf:poi air") : u.RMMPVP == $I.STFILX.Defense && (e = $I.XOJOCY.CLMQKO("tnf:poi defense")), l = $I.XOJOCY.CLMQKO("tnf:coords:") + " ", f.$r = $I.NZIFZB.ERRCBM(u.worldId, f), k = f.b, d = f.c, f.$r, l = l + k.toString() + ":" + d.toString(), i = e, t = $I.JGXBTR.QSLWSC("", $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.JLSZXE, 4), l, u.KXYLAQ > 0 ? " " + $I.XOJOCY.CZIVOS("tnf:owner: %1", u.MSPOJJ) : "", " " + $I.XOJOCY.CLMQKO("tnf:level:"), u.EWONBG.toString()));
            else if (this.OUBYEB == $I.CDNXVQ.WorldCityNotOwn) {
                c = this.APENBM;
                i = c.FDHGTQ;
                var ft = $I.XOJOCY.CLMQKO("tnf:level:") + " " + c.FVOYDT.toString(),
                    et = $I.XOJOCY.CZIVOS("tnf:health: %1", c.ERIYPO.toString()),
                    y = $I.XOJOCY.CLMQKO("tnf:coords:") + " ";
                f.$r = $I.NZIFZB.ERRCBM(c.worldId, f);
                g = f.b;
                nt = f.c;
                f.$r;
                y = y + g.toString() + ":" + nt.toString();
                t = ft + " " + et + " " + y
            }
        } else {
            p = this.APENBM;
            tt = $I.XOJOCY.GYKUBO(p.HKZTHI() - n);
            switch (p.RKSLJD()) {
                case $I.BLNKMP.Impact:
                    i = $I.XOJOCY.CLMQKO("tnf:impact zone uc");
                    t = $I.XOJOCY.CLMQKO("tnf:impact zone desc worldmap");
                    break;
                case $I.BLNKMP.Crater:
                    i = $I.XOJOCY.CLMQKO("tnf:impact wreckage uc");
                    t = $I.XOJOCY.CLMQKO("tnf:impact wreckage desc worldmap");
                    break;
                case $I.BLNKMP.Claim:
                    i = $I.XOJOCY.CLMQKO("tnf:impact wreckage uc");
                    t = $I.XOJOCY.CLMQKO("tnf:impact wreckage desc worldmap")
            }
            t = t + " " + tt
        }
        this.QHWHVB = i;
        this.ZCDFAU = t
    }
    $I.XHVXGB.prototype.CXESLP.call(this, n)
}

function VisUpdate(n, t) {
    var r, i, u;
    if (!this.OOHOEL && t) {
        r = this.DUCEGA.d;
        i = {
            k: null,
            v: null
        };
        for (u in r) i.k = u, i.v = r[u], i.v.OCAAHR(n)
    }
}

function IsPositionCovered(n, t) {
    var i, r, u;
    switch (this.OUBYEB) {
        case $I.CDNXVQ.WorldSatelliteCrashMarker:
            return i = this.APENBM, n < this.DGLCVK() + i.SPPERN() && n > this.DGLCVK() - i.SPPERN() && t < this.XYKFSB() + i.GSNTLN() && t > this.XYKFSB() - i.GSNTLN();
        case $I.CDNXVQ.WorldHubCenterMarker:
            return r = this.APENBM, n < this.DGLCVK() + r.SPPERN() && n > this.DGLCVK() - r.SPPERN() && t < this.XYKFSB() + r.GSNTLN() && t > this.XYKFSB() - r.GSNTLN();
        case $I.CDNXVQ.WorldHubControlMarker:
            return u = this.APENBM, n < this.DGLCVK() + u.SPPERN() && n > this.DGLCVK() - u.SPPERN() && t < this.XYKFSB() + u.GSNTLN() && t > this.XYKFSB() - u.GSNTLN()
    }
    return $I.XHVXGB.prototype.VASCWR.call(this, n, t)
}

function MouseOver(n, t) {
    this.HVOEMH.LUPUTI().ZWVJGR() == null && $I.XHVXGB.prototype.SFVLRN.call(this, n, t)
}

function MouseOut() {
    this.HVOEMH.LUPUTI().ZWVJGR() == this && (this.HVOEMH.LUPUTI().HBDDTH(null), this.HVOEMH.LUPUTI().YFGAPN())
}

function UpdateZoom() {}

function get_Description() {
    return this.ZCDFAU
}

function get_Name() {
    return this.QHWHVB
}

function get_CoordX() {
    return this.CJEUVE
}

function get_CoordY() {
    return this.TLYOGU
}

function IsPositionCovered(n, t) {
    var i, r, u;
    switch (this.OUBYEB) {
        case $I.CDNXVQ.WorldSatelliteCrashMarker:
            return i = this.APENBM, n < this.DGLCVK() + i.SPPERN() && n > this.DGLCVK() - i.SPPERN() && t < this.XYKFSB() + i.GSNTLN() && t > this.XYKFSB() - i.GSNTLN();
        case $I.CDNXVQ.WorldHubCenterMarker:
            return r = this.APENBM, n < this.DGLCVK() + r.SPPERN() && n > this.DGLCVK() - r.SPPERN() && t < this.XYKFSB() + r.GSNTLN() && t > this.XYKFSB() - r.GSNTLN();
        case $I.CDNXVQ.WorldHubControlMarker:
            return u = this.APENBM, n < this.DGLCVK() + u.SPPERN() && n > this.DGLCVK() - u.SPPERN() && t < this.XYKFSB() + u.GSNTLN() && t > this.XYKFSB() - u.GSNTLN()
    }
    return $I.XHVXGB.prototype.VASCWR.call(this, n, t)
}

function MouseOver(n, t) {
    this.HVOEMH.LUPUTI().ZWVJGR() == null && $I.XHVXGB.prototype.SFVLRN.call(this, n, t)
}

function UiUpdate(n) {
    var f = {},
        i, t, o, a, w, r, h, s, v, b, k, d, u, e, l, g, nt, c, p, tt;
    if (!this.OOHOEL) {
        if (i = "", t = "", this.OUBYEB != $I.CDNXVQ.WorldSatelliteCrashMarker) {
            if (this.OUBYEB == $I.CDNXVQ.WorldHubCenterMarker) o = this.APENBM, a = $I.XOJOCY.GYKUBO(o.HKZTHI() - n), i = $I.XOJOCY.CLMQKO("tnf:controlhub center uc"), o.TNYGND() == $I.BLNKMP.Attackable ? t = $I.XOJOCY.CZIVOS("tnf:controlled by %1", o.UMBVWJ()) : o.TNYGND() == $I.BLNKMP.Ruin ? t = $I.XOJOCY.CZIVOS("tnf:endgame fortress destroyed %1", a) : o.TNYGND() == $I.BLNKMP.Claim ? (w = $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.EUNQAF, 2), o.UMBVWJ(), a), t = $I.XOJOCY.UIKPCJ("tnf:endgame fortress hacked by %1 in %2", w)) : t = $I.XOJOCY.CLMQKO("tnf:endgame fortress shielded");
            else if (this.OUBYEB == $I.CDNXVQ.WorldHubControlMarker) r = this.APENBM, t = $I.XOJOCY.CZIVOS("tnf:controlled by %1", "-"), r.SZZNBJ() > 0 ? t = $I.XOJOCY.CZIVOS("tnf:controlled by %1", r.UMBVWJ()) : r.IKLQCK() == 0 && (t = $I.XOJOCY.CZIVOS("tnf:controlled by %1", $I.XOJOCY.CLMQKO("tnf:the forgotten"))), $I.CVRAYR.VAMLQD().TZZENG().SPVTMU() ? i = $I.XOJOCY.CLMQKO("tnf:controlhub 0 uc") : r.MELOXD() == 0 ? i = $I.XOJOCY.CLMQKO("tnf:controlhub 1 uc") : r.MELOXD() == 1 ? i = $I.XOJOCY.CLMQKO("tnf:controlhub 2 uc") : r.MELOXD() == 2 ? i = $I.XOJOCY.CLMQKO("tnf:controlhub 3 uc") : r.MELOXD() == 3 ? i = $I.XOJOCY.CLMQKO("tnf:controlhub 4 uc") : r.MELOXD() == 4 ? i = $I.XOJOCY.CLMQKO("tnf:controlhub 5 uc") : r.MELOXD() == 5 ? i = $I.XOJOCY.CLMQKO("tnf:controlhub 6 uc") : r.MELOXD() == 6 && (i = $I.XOJOCY.CLMQKO("tnf:controlhub 7 uc")), $I.CVRAYR.VAMLQD().TZZENG().SPVTMU() && r.RKSLJD() != $I.BLNKMP.NONE && (t = $I.XOJOCY.CLMQKO("tnf:inactive"));
            else if (this.OUBYEB == $I.CDNXVQ.WorldCityOwn) {
                h = this.APENBM;
                i = h.KPQBNW();
                var it = $I.XOJOCY.CLMQKO("tnf:level:") + " " + h.KCWGSH().toString(),
                    rt = $I.XOJOCY.CZIVOS("tnf:health: %1", h.LRNOID().toString()),
                    ut = $I.XOJOCY.CLMQKO("tnf:coords:") + " " + h.OFYSUK().toString() + ":" + h.FQVDES().toString();
                t = it + " " + rt + " " + ut
            } else if (this.OUBYEB == $I.CDNXVQ.WorldAllianceMarker) s = this.APENBM, v = "", v = s.GIRXAB() == $I.QOYXHV.EAMT_Conquer ? $I.XOJOCY.CLMQKO("tnf:allymarker type conquer") : s.GIRXAB() == $I.QOYXHV.EAMT_Move ? $I.XOJOCY.CLMQKO("tnf:allymarker type move") : s.GIRXAB() == $I.QOYXHV.EAMT_Support ? $I.XOJOCY.CLMQKO("tnf:allymarker type support") : s.GIRXAB() == $I.QOYXHV.EAMT_Reserve ? $I.XOJOCY.CLMQKO("tnf:allymarker type reserve") : $I.XOJOCY.CLMQKO("tnf:allymarker type watch"), b = $I.XOJOCY.CLMQKO("tnf:coords:") + " " + s.EZVHOT().toString() + ":" + s.JXTDIO().toString(), i = v, t = b;
            else if (this.OUBYEB == $I.CDNXVQ.WorldPOI) u = this.APENBM, e = $I.XOJOCY.CLMQKO("tnf:poi tunnel exit"), u.RMMPVP == $I.STFILX.TiberiumMine ? e = $I.XOJOCY.CLMQKO("tnf:poi tiberium mine") : u.RMMPVP == $I.STFILX.CrystalMine ? e = $I.XOJOCY.CLMQKO("tnf:poi crystal mine") : u.RMMPVP == $I.STFILX.PowerVortex ? e = $I.XOJOCY.CLMQKO("tnf:poi power vortex") : u.RMMPVP == $I.STFILX.Infantery ? e = $I.XOJOCY.CLMQKO("tnf:poi infantery") : u.RMMPVP == $I.STFILX.Vehicle ? e = $I.XOJOCY.CLMQKO("tnf:poi vehicle") : u.RMMPVP == $I.STFILX.Air ? e = $I.XOJOCY.CLMQKO("tnf:poi air") : u.RMMPVP == $I.STFILX.Defense && (e = $I.XOJOCY.CLMQKO("tnf:poi defense")), l = $I.XOJOCY.CLMQKO("tnf:coords:") + " ", f.$r = $I.NZIFZB.ERRCBM(u.worldId, f), k = f.b, d = f.c, f.$r, l = l + k.toString() + ":" + d.toString(), i = e, t = $I.JGXBTR.QSLWSC("", $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.JLSZXE, 4), l, u.KXYLAQ > 0 ? " " + $I.XOJOCY.CZIVOS("tnf:owner: %1", u.MSPOJJ) : "", " " + $I.XOJOCY.CLMQKO("tnf:level:"), u.EWONBG.toString()));
            else if (this.OUBYEB == $I.CDNXVQ.WorldCityNotOwn) {
                c = this.APENBM;
                i = c.FDHGTQ;
                var ft = $I.XOJOCY.CLMQKO("tnf:level:") + " " + c.FVOYDT.toString(),
                    et = $I.XOJOCY.CZIVOS("tnf:health: %1", c.ERIYPO.toString()),
                    y = $I.XOJOCY.CLMQKO("tnf:coords:") + " ";
                f.$r = $I.NZIFZB.ERRCBM(c.worldId, f);
                g = f.b;
                nt = f.c;
                f.$r;
                y = y + g.toString() + ":" + nt.toString();
                t = ft + " " + et + " " + y
            }
        } else {
            p = this.APENBM;
            tt = $I.XOJOCY.GYKUBO(p.HKZTHI() - n);
            switch (p.RKSLJD()) {
                case $I.BLNKMP.Impact:
                    i = $I.XOJOCY.CLMQKO("tnf:impact zone uc");
                    t = $I.XOJOCY.CLMQKO("tnf:impact zone desc worldmap");
                    break;
                case $I.BLNKMP.Crater:
                    i = $I.XOJOCY.CLMQKO("tnf:impact wreckage uc");
                    t = $I.XOJOCY.CLMQKO("tnf:impact wreckage desc worldmap");
                    break;
                case $I.BLNKMP.Claim:
                    i = $I.XOJOCY.CLMQKO("tnf:impact wreckage uc");
                    t = $I.XOJOCY.CLMQKO("tnf:impact wreckage desc worldmap")
            }
            t = t + " " + tt
        }
        this.QHWHVB = i;
        this.ZCDFAU = t
    }
    $I.XHVXGB.prototype.CXESLP.call(this, n)
}

function Dispose() {
    $I.XHVXGB.prototype.NSFOQM.call(this);
    this.OEJCXA(this.OUBYEB, this.APENBM)
}

function get_VisObjectType() {
    return this.OUBYEB
}

function get_X() {
    return this.EZVHOT()
}

function get_Y() {
    return this.JXTDIO()
}