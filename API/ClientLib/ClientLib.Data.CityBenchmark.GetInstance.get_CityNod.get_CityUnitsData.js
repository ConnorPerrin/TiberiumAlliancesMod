function get_PlacedUnitGroupFlag() {
    return this.OGIOXM
}

function get_DamagedUnitGroupFlag() {
    return this.PBQUEU
}

function get_UnitLimitOffense() {
    return this.RRMKIQ
}

function set_UnitLimitOffense(n) {
    this.RRMKIQ = n
}

function get_FreeOffenseHeadCount() {
    return this.RRMKIQ - this.DURPIF
}

function get_TotalOffenseHeadCount() {
    return this.DURPIF
}

function get_UnitLimitDefense() {
    return this.RKDEHG
}

function set_UnitLimitDefense(n) {
    this.RKDEHG = n
}

function get_FreeDefenseHeadCount() {
    return this.RKDEHG - this.KJQZPL
}

function get_TotalDefenseHeadCount() {
    return this.KJQZPL
}

function get_HighestLVlForUnitGroupTypes() {
    return this.OFPBCF
}

function GetLowestHitpointRatioForUnitGroupTypes(n) {
    var t = {},
        i = 0;
    return (t.$r = this.IXICIP.ZOXRAI(n, t), i = t.b, t.$r) || (i = 0), i
}

function HasEnoughFreeSlots(n, t) {
    switch (n) {
        case 1:
            return this.SRSSUF() - t >= 0;
        case 2:
            return this.APJWMK() - t >= 0
    }
    return !1
}

function HasEnoughFreePlacementSlots(n) {
    switch (n) {
        case 1:
            return !0;
        case 2:
            return $I.GGTBLR.HMTRTB() - this.NSPDPP.c > 0
    }
    return !1
}

function HasReachedMaxSlots(n) {
    switch (n) {
        case 1:
            return this.FXACHU() == $I.CVRAYR.VAMLQD().TZZENG().DGGMNQ();
        case 2:
            return this.PGKSFL() == $I.CVRAYR.VAMLQD().TZZENG().RCTHIC()
    }
    return !1
}

function GetMainProductionBuildingName(n, t) {
    var r = this.NWAHGU(n, t),
        i = $I.BUEVKL.QGLUJV().ITRZSX(r);
    return i == null ? "" : i.dn
}

function GetSlotLayoutType(n, t, i) {
    var r = this.IDWZYI;
    return (n == 1 && (r = this.RIMVQT), t >= 0 && t < (r.hasOwnProperty("$d") ? r.$d[0] : r.length) && i >= 0 && i < (r.hasOwnProperty("$d") ? r.$d[1] : r.length)) ? r[t][i] : $I.WHYGGP.Invalid
}

function IsSlotFree(n, t, i) {
    return this.UFXKPG(n, t, i) == $I.WHYGGP.Free
}

function GetTotalOffenseUnitHealth() {
    var n = 0;
    for (var t in {
            d: this.NSPDPP
        }.d.d) n += this.NSPDPP.d[t].OCYOUI();
    return n
}

function GetRepairTimeFromEUnitGroup(n, t) {
    var u = {},
        i = $I.OATHMF.None,
        r, f;
    return (n == $I.FDECFP.Infantry ? i = $I.OATHMF.RepairChargeInf : n == $I.FDECFP.Vehicle ? i = $I.OATHMF.RepairChargeVeh : n == $I.FDECFP.Aircraft ? i = $I.OATHMF.RepairChargeAir : n == $I.FDECFP.Defense && (i = $I.OATHMF.RepairChargeBase), r = 0, (u.$r = this.XKEOFN.ZOXRAI(n, u), r = u.b, u.$r) || (r = 0), f = 0, r <= 0) ? f : t ? $I.DUXUSX.LYWVDH(i, r, 1, this.OQSEKO.UEFYNJ().VURHLW(), this.OQSEKO.UEFYNJ().XIRNIW(), this.OQSEKO.UEFYNJ().PIWSTV(), this.OQSEKO.UEFYNJ().PXFCFC()) : $I.DUXUSX.LYWVDH(i, r, 1, this.OQSEKO.UEFYNJ().CANDGA(), this.OQSEKO.UEFYNJ().QXLFNH(), this.OQSEKO.UEFYNJ().DDCMYG(), this.OQSEKO.UEFYNJ().QSRSTB())
}

function GetEUnitGroupByEModifierType(n) {
    var t = $I.FDECFP.None;
    return n == $I.PQWGOX.RepairEfficiencyInf ? $I.FDECFP.Infantry : n == $I.PQWGOX.RepairEfficiencyVeh ? $I.FDECFP.Vehicle : n == $I.PQWGOX.RepairEfficiencyAir ? $I.FDECFP.Aircraft : (n == $I.PQWGOX.RepairEfficiencyBase && (t = $I.FDECFP.Defense), t)
}

function GetUnitCount(n) {
    var t = 0,
        i, r;
    for (i in {
            d: this.TKJJPS()
        }.d.d) this.TKJJPS().d[i].GAFYDL() == n && t++;
    for (r in {
            d: this.OCUXSL()
        }.d.d) this.OCUXSL().d[r].GAFYDL() == n && t++;
    return t
}

function HasUnitMdbId(n) {
    var t, i;
    for (t in {
            d: this.NSPDPP
        }.d.d)
        if (this.NSPDPP.d[t].GAFYDL() == n) return !0;
    for (i in {
            d: this.YEJJRO
        }.d.d)
        if (this.YEJJRO.d[i].GAFYDL() == n) return !0;
    return !1
}

function GetDismissResourceRefund(n) {
    var t = {},
        r, y, f, e, o, u, s, h, c, l, i, a, v;
    if (n == null || n.YBCOGL() == null || (r = (new $I.UDBZSB).SLPWTI(), n.REBAFD() <= 0)) return null;
    for (y = $I.CVRAYR.VAMLQD().TZZENG().OUXQCK(), f = 0, n.YBCOGL().pt == 2 ? f = $I.CVRAYR.VAMLQD().TZZENG().ERNBFF() : n.YBCOGL().pt == 1 && (f = $I.CVRAYR.VAMLQD().TZZENG().ZFNREI()), e = n.REBAFD(); e > f; e--)
        for (o = $I.XOJOCY.EOJXIS(e, n.YBCOGL()), u = 0; u < o.length; u++) {
            s = o[u].Type;
            switch (s) {
                case $I.OATHMF.Tiberium:
                case $I.OATHMF.Crystal:
                case $I.OATHMF.Gold:
                case $I.OATHMF.Power:
                    h = 0;
                    (t.$r = r.ZOXRAI(s, t), h = t.b, t.$r) || (h = 0);
                    r.UHNVSA(s, h + Math.floor(o[u].Count * y))
            }
        }
    if (n.YBCOGL().pt != 1) {
        if (c = n.OLUXEN(), c == null) return r;
        $I.DUXUSX.OWIMYA(n.VKUOKS().UBTDFB(), $I.SOIZAH.ArmySetup, c);
        l = c.d;
        i = {
            k: null,
            v: null
        };
        for (a in l) i.k = a, i.v = l[a], (i.k == $I.OATHMF.Tiberium || i.k == $I.OATHMF.Crystal) && (v = 0, (t.$r = r.ZOXRAI(i.k, t), v = t.b, t.$r) && r.UHNVSA(i.k, v - i.v))
    }
    return r
}

function HasTransportUnits() {
    var n, t;
    if (this.NSPDPP != null)
        for (n in {
                d: this.NSPDPP
            }.d.d)
            if (t = this.NSPDPP.d[n], t.ZHIRJH() == $I.ZNGMPE.Garrison) return !0;
    return !1
}

function HasTransportUnitsDefense() {
    var n, t;
    if (this.YEJJRO != null)
        for (n in {
                d: this.YEJJRO
            }.d.d)
            if (t = this.YEJJRO.d[n], t.ZHIRJH() == $I.ZNGMPE.Garrison) return !0;
    return !1
}

function IsDefenseUnitDisabled(n) {
    var t = $I.AWGRFQ.Enabled,
        u, i, r, f, e;
    if (this.OQSEKO.VOPFYX() == $I.KGPDNC.GDIFaction || this.OQSEKO.VOPFYX() == $I.KGPDNC.NODFaction) {
        if (u = 0, this.FEZJSJ() > this.FXACHU())
            for (i = (this.RIMVQT.hasOwnProperty("$d") ? this.RIMVQT.$d[1] : this.RIMVQT.length) - 1; i >= 0; i--) {
                for (r = 0; r < (this.RIMVQT.hasOwnProperty("$d") ? this.RIMVQT.$d[0] : this.RIMVQT.length); r++)
                    if (this.RIMVQT[r][i] == $I.WHYGGP.Occupied && (f = this.RTPNUM.d[$I.VFABBI.SGWAWH(r, i)], f != null)) {
                        if (u += f.YBCOGL().uc, f.UQGPFX() == n) {
                            t = $I.AWGRFQ.ArmySize;
                            break
                        }
                        if (this.FEZJSJ() - u <= this.FXACHU()) break
                    } if (t != $I.AWGRFQ.Enabled || this.FEZJSJ() - u <= this.FXACHU()) break
            }
        t == $I.AWGRFQ.Enabled && (e = this.YEJJRO.d[n], e == null || e.MSLFMA() || (t = $I.AWGRFQ.TechRequirements))
    }
    return t
}

function IsOffenseUnitDisabled(n) {
    var i = $I.AWGRFQ.Enabled,
        t;
    return (this.OQSEKO.VOPFYX() == $I.KGPDNC.GDIFaction || this.OQSEKO.VOPFYX() == $I.KGPDNC.NODFaction) && (t = this.NSPDPP.d[n], t == null || t.MSLFMA() || (i = $I.AWGRFQ.TechRequirements)), i
}