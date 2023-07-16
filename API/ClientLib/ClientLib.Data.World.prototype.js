function Init() {
    var n;
    for (this.KUNQNN = $I.CVRAYR.VAMLQD().TZZENG().BDVSJJ(), this.WFCAVH = $I.CVRAYR.VAMLQD().TZZENG().XUXGOK(), this.DPKJUA = $I.UDAQKL.DNVCCU($I.YJUUCR, this.KUNQNN * this.WFCAVH), this.LOTWGU = $I.UDAQKL.DNVCCU($I.YJUUCR, this.KUNQNN * this.WFCAVH), this.NMBQNZ = $I.UDAQKL.DNVCCU($I.YJUUCR, this.KUNQNN * this.WFCAVH), n = this.DPKJUA.length - 1; n >= 0; n--) this.NMBQNZ[n] = 2147483647;
    this.OSGMCR = !0
}

function GetSector(n) {
    var t = {},
        i;
    return (t.$r = this.FFPPAJ.ZOXRAI(n, t), i = t.b, t.$r) ? i : null
}

function IsBlocked(n, t) {
    var i;
    return n > this.KUNQNN - 1 || n < 0 || t < 0 || t > this.WFCAVH - 1 ? !0 : (i = t * this.KUNQNN + n, (this.LOTWGU[i] >> 16 & 1) != 0)
}

function IsWater(n, t) {
    var i, r, u;
    return n <= this.KUNQNN - 1 && n >= 0 && t >= 0 && t <= this.WFCAVH - 1 && (i = this.SDPNUL(n, t), i != null && i.NYZIUP() != null) ? (r = n % 32, u = t % 32, (i.NYZIUP().l[u] >> (r & 31) & 1) == 0) : !0
}

function GetWorldSectorByCoords(n, t) {
    var i = {},
        u = Math.floor(n / 32),
        f = Math.floor(t / 32),
        e = f << 16 | u,
        r = null;
    return (i.$r = this.FFPPAJ.ZOXRAI(e, i), r = i.b, i.$r) ? r : null
}

function GetOwner(n, t) {
    var i;
    return n > this.KUNQNN - 1 || n < 0 || t < 0 || t > this.WFCAVH - 1 ? 0 : (i = t * this.KUNQNN + n, this.NMBQNZ[i] == 2147483647 && $I.TYHURF.SAPZXR(n, t, this.KUNQNN, this.DPKJUA, this.LOTWGU, this.NMBQNZ, this.KUNQNN, 0, 0, -1), this.NMBQNZ[i])
}

function GetTerritoryTypeByCoordinates(n, t) {
    var r = this.NFAEIP(n, t),
        u = $I.CVRAYR.VAMLQD().ONGTRQ().UQGPFX(),
        f = $I.CVRAYR.VAMLQD().ONGTRQ().SZZNBJ(),
        e = r >> 29,
        i = r & 536870911;
    switch (e) {
        case $I.CXWCTA.Player:
            if (i == 0 || i != u) {
                if (i == 0) return $I.YMAUZP.Neutral;
                break
            }
            return $I.YMAUZP.Own;
        case $I.CXWCTA.Alliance:
            if (i != f) break;
            return $I.YMAUZP.Alliance;
        case $I.CXWCTA.StartSlot:
            return $I.YMAUZP.SpawnZone;
        case $I.CXWCTA.NPC:
            if (i != 1) break;
            return $I.YMAUZP.Restricted
    }
    return $I.YMAUZP.Enemy
}

function CheckMoveBaseRestrictions(n, t, i) {
    var e = $I.BSOKEY.OK,
        c = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG(),
        o = $I.CVRAYR.VAMLQD().TZZENG().HJRBOF(),
        u, r, f;
    if (i.BHKHCB().c > 0) {
        u = i.BHKHCB().d;
        r = {
            k: null,
            v: null
        };
        for (f in u)
            if (r.k = f, r.v = u[f], r.v > c) {
                var l = r.k & 65535,
                    a = r.k >> 16 & 65535,
                    s = n - a,
                    h = t - l,
                    v = s * s + h * h;
                v > o * o && (e |= $I.BSOKEY.FailMoveRestriction)
            }
    }
    return e
}

function CheckMoveBaseControlHub(n, t, i) {
    var r = $I.BSOKEY.OK,
        f = $I.CVRAYR.VAMLQD().RWLPVY().EVGGZM(n, t),
        e, u, o;
    if (f != null) {
        if (f.PMZFJH(n, t) && (r |= $I.BSOKEY.FailBlocked), !$I.CVRAYR.VAMLQD().TZZENG().SPVTMU()) {
            $I.CVRAYR.VAMLQD().ONGTRQ().GFRTHD() || (r |= $I.BSOKEY.FailMoveOnControlHubNoCode);
            e = $I.CVRAYR.VAMLQD().RWLPVY().DPUCHL().d;
            u = {
                k: null,
                v: null
            };
            for (o in e)
                if (u.k = o, u.v = e[o], u.v.HDXZII() == $I.RFTWTG.Control && u.v.PATOTT(i.UQGPFX())) return r | $I.BSOKEY.FailMoveOnControlHub;
            return r
        }
        f.HDXZII() == $I.RFTWTG.Control && f.PATOTT(i.UQGPFX()) && (r |= $I.BSOKEY.FailMoveOnControlHub)
    }
    return r
}

function CheckFoundBase(n, t) {
    var i = $I.AAVPRT.OK,
        r, w, h, c, l, a, e, o, s, u, b, v, y, p;
    switch (this.MLWLAZ(n, t)) {
        case $I.YMAUZP.Enemy:
            i |= $I.AAVPRT.FailNotOwned;
            break;
        case $I.YMAUZP.SpawnZone:
            i |= $I.AAVPRT.FailReservedTerritory
    }
    for (this.XDWGJF(n, t) && (i |= $I.AAVPRT.FailBlocked), this.URNBVV(n, t) ? (r = this.HZQOPM(n, t), r != null ? r.Type == $I.RZUVTA.Ruin ? (w = r, h = this.SDPNUL(n, t), h != null && (c = h.RZLTZI(w.DFMMEX), c != $I.CVRAYR.VAMLQD().ONGTRQ().UQGPFX() && $I.CVRAYR.VAMLQD().FMKUPK().ULLWWE(c) == null ? i |= $I.AAVPRT.FailFieldOccupied : $I.CVRAYR.VAMLQD().RWLPVY().EVGGZM(n, t) != null && (i |= $I.AAVPRT.FailFoundOnControlHub))) : r.Type == $I.RZUVTA.City || r.Type == $I.RZUVTA.PointOfInterest || r.Type == $I.RZUVTA.NewPlayerSlot || r.Type == $I.RZUVTA.NPCBase ? i |= $I.AAVPRT.FailFieldOccupied : r.Type == $I.RZUVTA.NPCCamp ? (l = r, l.YBZQFQ != $I.UICJRN.Destroyed && l.FXPRHE > $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() && (i |= $I.AAVPRT.FailCampIsAttacked)) : i |= $I.AAVPRT.FailBlocked : (a = $I.CVRAYR.VAMLQD().RWLPVY().JEUMIK(n, t), i |= a != null && a.PMZFJH(n, t) ? $I.AAVPRT.FailSatellite : $I.AAVPRT.FailBlocked)) : $I.CVRAYR.VAMLQD().RWLPVY().EVGGZM(n, t) != null && (i |= $I.AAVPRT.FailFoundOnControlHub), e = 0; e < 8; e++)
        if (o = n + $I.TYHURF.ZERWPY[e][0], s = t + $I.TYHURF.ZERWPY[e][1], this.URNBVV(o, s) && (u = this.HZQOPM(o, s), u != null ? (u.Type == $I.RZUVTA.Ruin && (b = u, v = this.SDPNUL(o, s), v != null && (y = v.RZLTZI(b.DFMMEX), y != $I.CVRAYR.VAMLQD().ONGTRQ().UQGPFX() && $I.CVRAYR.VAMLQD().FMKUPK().ULLWWE(y) == null && (i |= $I.AAVPRT.FailNeighborRuin | $I.AAVPRT.FailNeighbor))), u.Type == $I.RZUVTA.NewPlayerSlot && (i |= $I.AAVPRT.FailNeighborNewPlayerSlot | $I.AAVPRT.FailNeighbor), u.Type == $I.RZUVTA.City && (i |= $I.AAVPRT.FailNeighborCity | $I.AAVPRT.FailNeighbor), u.Type == $I.RZUVTA.NPCBase && (i |= $I.AAVPRT.FailNeighborBase | $I.AAVPRT.FailNeighbor)) : $I.CVRAYR.VAMLQD().RWLPVY().ASWHEA(o, s) && (i |= $I.AAVPRT.FailNeighborHubCenter | $I.AAVPRT.FailNeighbor)), i != $I.AAVPRT.OK) return i;
    var k = !0,
        d = $I.CVRAYR.VAMLQD().ZBVLXL().LVIQBQ().d,
        f = {
            k: null,
            v: null
        };
    for (p in d)
        if (f.k = p, f.v = d[p], f.v.CTUKLK() == $I.AAVPRT.OK && !f.v.BJTMCR()) {
            var g = n - f.v.ZFEMVW(),
                nt = t - f.v.IIKXGY(),
                tt = g * g + nt * nt;
            if (tt <= $I.CVRAYR.VAMLQD().TZZENG().SMFUPB() * $I.CVRAYR.VAMLQD().TZZENG().SMFUPB()) {
                k = !1;
                break
            }
        } return k && (i |= $I.AAVPRT.FailDistance), i
}

function CheckAttackBase(n, t, i) {
    var r = $I.XAMVFA.OK,
        u, f, o, e, s;
    if (r |= this.PQUFWN(n, t, i), u = $I.CVRAYR.VAMLQD().ZBVLXL().HLZNSR(), f = $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI(), !i && f.TSHNME() && (r |= $I.XAMVFA.FailAttackerAlreadyAttacking), i || u.NRZCZZ() || !f.DXTFMH() || (r |= $I.XAMVFA.AttackerBaseRecovery), f.SGRQBS().RXOVBX() <= 0 && (r |= $I.XAMVFA.MissingValidAttackerUnits), f.ITKPJL().XCMMNK(u.UQGPFX()).YUSFGX() || (r |= $I.XAMVFA.InvalidArmyUnitCountPerRow), f.ITKPJL().XCMMNK(u.UQGPFX()).YUPKUF() || (r |= $I.XAMVFA.ArmyUnitsNotAbleToAttack), !i && u.YKKGOE() && (r |= $I.XAMVFA.DefenderBaseAlreadyUnderAttack), u.BJTMCR() && (r |= $I.XAMVFA.FailDefenderGhostMode), u.VUAHHF() && (r |= $I.XAMVFA.DefenderIsProtected), !i && u.QGOTUP() && (r |= $I.XAMVFA.DefenderLockedEnd), !i)
        for (u.CPVNPP() != $I.CVRAYR.VAMLQD().ONGTRQ().UQGPFX() && $I.CVRAYR.VAMLQD().FMKUPK().ULLWWE(u.CPVNPP()) != null && (r |= $I.XAMVFA.FailAllianceCity), u.SZZNBJ() > 0 && ($I.CVRAYR.VAMLQD().FMKUPK().MCCSDS(u.SZZNBJ()) == $I.CZQHTV.Friend && (r |= $I.XAMVFA.FailAlliedAllianceCity), $I.CVRAYR.VAMLQD().FMKUPK().MCCSDS(u.SZZNBJ()) == $I.CZQHTV.NAP && (r |= $I.XAMVFA.FailNAPAllianceCity)), o = $I.CVRAYR.VAMLQD().RVDZTZ().CIXDNR(), e = 0; e < o.length; e++)
            if (s = o[e], s.p0 == u.CPVNPP() && s.p == 2) return r | $I.XAMVFA.FailTargetIsSubstitutedByAttacker;
    return r
}

function CheckAttackBaseRegion(n, t, i) {
    var r = $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI();
    return this.XPRAPJ(r, n, t, i)
}

function CheckAttackBaseRegionForCity(n, t, i, r) {
    var e = !1,
        u = $I.XAMVFA.OK,
        f = $I.CVRAYR.VAMLQD().RWLPVY().JEUMIK(t, i),
        h;
    if (f != null) switch (f.HDXZII()) {
        case $I.RFTWTG.Server:
            e = !0;
            f.RKSLJD() == $I.BLNKMP.Impact && f.HKZTHI() - $I.CVRAYR.VAMLQD().TZZENG().JINVOM() < $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() && (u |= $I.XAMVFA.FailDefenderImpactIncoming);
            break;
        case $I.RFTWTG.Center:
            e = !0;
            (!$I.CVRAYR.VAMLQD().FMKUPK().DVTRNX() || $I.CVRAYR.VAMLQD().RWLPVY().YTMNKE($I.CVRAYR.VAMLQD().FMKUPK().UQGPFX()) < $I.CVRAYR.VAMLQD().TZZENG().PJSNAP()) && (u |= $I.XAMVFA.FailNotEnoughOwnedHubs);
            f.TNYGND() == $I.BLNKMP.NONE && f.HKZTHI() > 0 && f.HKZTHI() > $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() && (u |= $I.XAMVFA.FailHubCenterTimer);
            f.TNYGND() == $I.BLNKMP.Attackable && n.IBJWZM() > 0 && n.IBJWZM() > $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() && (u |= $I.XAMVFA.FailHubCenterAttackLockdown)
    }
    f = $I.CVRAYR.VAMLQD().RWLPVY().JEUMIK(n.OFYSUK(), n.FQVDES());
    f != null && f.HDXZII() == $I.RFTWTG.Server && f.RKSLJD() == $I.BLNKMP.Impact && f.HDXZII() == $I.RFTWTG.Server && f.HKZTHI() - $I.CVRAYR.VAMLQD().TZZENG().JINVOM() < $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() && (u |= $I.XAMVFA.FailAttackerImpactIncoming);
    n.BJTMCR() && (u |= $I.XAMVFA.FailAttackerGhostMode);
    var l = t - n.OFYSUK(),
        a = i - n.FQVDES(),
        p = l * l + a * a,
        s = n.WVKUMB();
    s == -1 ? u |= $I.XAMVFA.FailCommandCenterMissing : s >= 0 && s < 1 && (u |= $I.XAMVFA.FailCommandCenterDamaged);
    h = $I.CVRAYR.VAMLQD().TZZENG().HJRBOF();
    p > h * h && (u |= $I.XAMVFA.FailDistance);
    var w = $I.ILHIOR.GILABD().AYELRA().VVGOEM(),
        b = $I.ILHIOR.GILABD().AYELRA().MWRYXH(),
        o = this.HZQOPM(t, i);
    if (o != null) {
        !r && $I.CVRAYR.VAMLQD().ONGTRQ().TGRNEA() < n.XNIANM(t, i, o.Type == $I.RZUVTA.City, !0) && (u |= $I.XAMVFA.FailInsufficientCommandPoints);
        switch (o.Type) {
            case $I.RZUVTA.City:
                e = !0;
                n.DXTFMH() && (u |= $I.XAMVFA.FailBaseRecovery);
                var v = o,
                    c = -1,
                    y = this.SDPNUL(t, i);
                y != null && (c = y.RZLTZI(v.IYYVIM));
                c != -1 && c == n.CPVNPP() && (u |= $I.XAMVFA.FailOwnCity);
                v.YBFNTB > $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() && (u |= $I.XAMVFA.FailTargetIsProtected);
                $I.CVRAYR.VAMLQD().ONGTRQ().IPTHFP() && (u |= $I.XAMVFA.FailIsSubstituted);
                break;
            case $I.RZUVTA.NPCBase:
                e = !0;
                $I.CVRAYR.VAMLQD().TZZENG().ENZZSR() || $I.CVRAYR.VAMLQD().RWLPVY().EVGGZM(t, i) == null || (u |= $I.XAMVFA.FailNotAllowed);
                break;
            case $I.RZUVTA.NPCCamp:
            case $I.RZUVTA.Outpost:
                e = !0
        }
    }
    return e || (u |= $I.XAMVFA.FailNoTarget), u
}

function SetRange(n, t, i, r, u, f) {
    this.WYHCSD = n;
    this.TITWFA = t;
    this.GQLTDZ = i;
    this.BBMOGS = r;
    this.AYQCLR = u;
    this.PFDOWE = f
}

function GetPOIs() {
    var f = (new $I.UDBZSB).SLPWTI(),
        e = this.FFPPAJ.d,
        t = {
            k: null,
            v: null
        },
        i, r, u, n;
    for (i in e)
        for (t.k = i, t.v = e[i], r = t.v.OAJTMP().l, n = 0; n < r.length; n++) u = r[n], f.GXVKTX(u.worldId, u);
    return f
}

function GetCities() {
    var f = $I.ILHIOR.GILABD().AYELRA().FISUYB(),
        e = this.FFPPAJ.d,
        t = {
            k: null,
            v: null
        },
        i, r, u, n;
    for (i in e)
        for (t.k = i, t.v = e[i], r = t.v.NQXJLA().l, n = 0; n < r.length; n++) u = r[n], f.GXVKTX(u.worldId, u);
    return f
}

function GetNPCBases() {
    var f = $I.ILHIOR.GILABD().AYELRA().USKGWZ(),
        e = this.FFPPAJ.d,
        t = {
            k: null,
            v: null
        },
        i, r, u, n;
    for (i in e)
        for (t.k = i, t.v = e[i], r = t.v.NBJGPX().l, n = 0; n < r.length; n++) u = r[n], f.GXVKTX(u.worldId, u);
    return f
}

function SurroundedEnemies(n, t) {
    var o = 0,
        c = this.FFPPAJ.d,
        f = {
            k: null,
            v: null
        },
        h, e, r, u, i, s;
    for (h in c) {
        for (f.k = h, f.v = c[h], r = f.v.NBJGPX().l, i = 0; i < r.length; i++) e = r[i], e.PYFFNN > 0 && e.JTYLKR > 0 && Math.floor(Math.sqrt(Math.pow(Math.abs(n - e.posX), 2) + Math.pow(Math.abs(t - e.posY), 2))) <= 10 && o++;
        for (i = f.v.JSGITZ().l, u = 0; u < i.length; u++) r = i[u], r.MFBHYO > 0 && r.ZGFSEQ > 0 && Math.floor(Math.sqrt(Math.pow(Math.abs(n - r.posX), 2) + Math.pow(Math.abs(t - r.posY), 2))) <= 10 && o++;
        for (u = f.v.VTVRTC().l, s = 0; s < u.length; s++) i = u[s], i.YYFTCN > 0 && i.VIAYRD > 0 && Math.floor(Math.sqrt(Math.pow(Math.abs(n - i.posX), 2) + Math.pow(Math.abs(t - i.posY), 2))) <= 10 && o++
    }
    return o
}

function GetNPCCamps() {
    var f = $I.ILHIOR.GILABD().AYELRA().YFXGKB(),
        e = this.FFPPAJ.d,
        t = {
            k: null,
            v: null
        },
        i, r, u, n;
    for (i in e)
        for (t.k = i, t.v = e[i], r = t.v.JSGITZ().l, n = 0; n < r.length; n++) u = r[n], f.GXVKTX(u.worldId, u);
    return f
}

function FoundCity(n, t, i) {
    ClientLib.Net.CommunicationManager.GetInstance().SendCommand("CityFound", {
        name: n,
        coordX: t,
        coordY: i
    }, (new $I.JNOYHJ).TFDQYD(this, this.ODINIE), null, !0)
}

function GetObjectFromPosition(n, t) {
    var i = {},
        r, u = Math.floor(n / 32),
        f = Math.floor(t / 32),
        e = f << 16 | u;
    return (i.$r = this.FFPPAJ.ZOXRAI(e, i), r = i.b, i.$r) ? r.JLTVMA(n % 32, t % 32) : null
}

function get_WorldHeight() {
    return this.WFCAVH
}

function get_WorldWidth() {
    return this.KUNQNN
}

function add_SectorChange(n) {
    var t = {},
        i, r = this.BCUDYA,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.BCUDYA, t.$r = $I.TSJVQL.JXWJWI($I.ZDCDEA, u, i, t), this.BCUDYA = t.a, t.$r); while (r != i)
}

function remove_SectorChange(n) {
    var t = {},
        i, r = this.BCUDYA,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.BCUDYA, t.$r = $I.TSJVQL.JXWJWI($I.ZDCDEA, u, i, t), this.BCUDYA = t.a, t.$r); while (r != i)
}

function add_SectorsChange(n) {
    var t = {},
        i, r = this.NVBGWO,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.NVBGWO, t.$r = $I.TSJVQL.JXWJWI($I.YDRVGV, u, i, t), this.NVBGWO = t.a, t.$r); while (r != i)
}

function remove_SectorsChange(n) {
    var t = {},
        i, r = this.NVBGWO,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.NVBGWO, t.$r = $I.TSJVQL.JXWJWI($I.YDRVGV, u, i, t), this.NVBGWO = t.a, t.$r); while (r != i)
}