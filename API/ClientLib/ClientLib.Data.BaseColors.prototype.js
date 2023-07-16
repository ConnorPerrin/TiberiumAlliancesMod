function Reset() {
    var t = !1,
        i = !1,
        r = !1,
        u = !1,
        n;
    for (this.YASSHD != $I.TJEQAV.All && (this.YASSHD = $I.TJEQAV.All, t = !0), (this.WVXMVN != 5e3 || this.OOJIDT != 1 || this.OGAXOO != 10 || this.XZPFZN != 1 || this.RVCNGU != 10) && (this.WVXMVN = 5e3, this.OOJIDT = 1, this.OGAXOO = 10, this.XZPFZN = 1, this.RVCNGU = 10, t = !0), n = 0; n < this.SHOEUM.length; n++) this.SHOEUM[n] != this.QDXDZA[n] && (i = !0, this.SHOEUM[n] = this.QDXDZA[n]);
    return (this.WARPAQ.c > 0 && (this.WARPAQ.AMMYJA(), r = !0), this.WHLXFA.c > 0 && (this.WHLXFA.AMMYJA(), u = !0), i & this.OQVWUC != null && this.OQVWUC.FOWLVG(), t & this.JZYKPP != null && this.JZYKPP.FOWLVG(), r & this.SSONVD != null && this.SSONVD.FOWLVG(), u & this.TEUUWM != null && this.TEUUWM.FOWLVG(), !t && !r && !u && !i) ? !1 : (this.DKFEAM.l.push($I.PHKAYY.STCLKO(12)), !0)
}

function get_VisibleObjects() {
    return this.YASSHD
}

function set_VisibleObjects(n) {
    this.YASSHD != n && (this.YASSHD = n, this.JZYKPP != null && this.JZYKPP.FOWLVG(), this.OQVWUC != null && this.OQVWUC.FOWLVG(), this.DKFEAM.l.push($I.PHKAYY.STCLKO(1) + $I.PHKAYY.MOMJJQ(this.YASSHD)))
}

function get_SmallBasePoints() {
    return this.WVXMVN
}

function set_SmallBasePoints(n) {
    this.WVXMVN != n && (this.WVXMVN = n, (this.YASSHD & $I.TJEQAV.SmallBase) == 0 && this.JZYKPP != null && this.JZYKPP.FOWLVG(), this.DKFEAM.l.push($I.PHKAYY.STCLKO(11) + $I.PHKAYY.MOMJJQ(this.WVXMVN)))
}

function get_DungeonLevelLow() {
    return this.XZPFZN
}

function set_DungeonLevelLow(n) {
    this.XZPFZN != n && (this.XZPFZN = n, (this.YASSHD & $I.TJEQAV.Dungeon) != 0 && this.JZYKPP != null && this.JZYKPP.FOWLVG(), this.DKFEAM.l.push($I.PHKAYY.STCLKO(9) + $I.PHKAYY.RPUSDS(this.RVCNGU << 4 | this.XZPFZN)))
}

function get_DungeonLevelHigh() {
    return this.RVCNGU
}

function set_DungeonLevelHigh(n) {
    this.RVCNGU != n && (this.RVCNGU = n, (this.YASSHD & $I.TJEQAV.Dungeon) != 0 && this.JZYKPP != null && this.JZYKPP.FOWLVG(), this.DKFEAM.l.push($I.PHKAYY.STCLKO(9) + $I.PHKAYY.RPUSDS(this.RVCNGU << 4 | this.XZPFZN)))
}

function get_BossLevelLow() {
    return this.OOJIDT
}

function set_BossLevelLow(n) {
    this.OOJIDT != n && (this.OOJIDT = n, (this.YASSHD & $I.TJEQAV.Boss) != 0 && this.JZYKPP != null && this.JZYKPP.FOWLVG(), this.DKFEAM.l.push($I.PHKAYY.STCLKO(10) + $I.PHKAYY.RPUSDS(this.OGAXOO << 4 | this.OOJIDT)))
}

function get_BossLevelHigh() {
    return this.OGAXOO
}

function set_BossLevelHigh(n) {
    this.OGAXOO != n && (this.OGAXOO = n, (this.YASSHD & $I.TJEQAV.Boss) != 0 && this.JZYKPP != null && this.JZYKPP.FOWLVG(), this.DKFEAM.l.push($I.PHKAYY.STCLKO(10) + $I.PHKAYY.RPUSDS(this.OGAXOO << 4 | this.OOJIDT)))
}

function GetShrineColor() {
    return this.SHOEUM[10]
}

function GetMoongateColor() {
    return this.SHOEUM[11]
}

function GetDungeonColor() {
    return this.SHOEUM[7]
}

function GetBossColor() {
    return this.SHOEUM[8]
}

function GetLawlessBaseColor() {
    return this.SHOEUM[9]
}

function GetBaseColor(n, t) {
    var i = {},
        r, u, f;
    if ((i.$r = this.WARPAQ.ZOXRAI(n, i), r = i.b, i.$r) && r.Active || (i.$r = this.WHLXFA.ZOXRAI(t, i), r = i.b, i.$r) && r.Active) return r.Color;
    if (u = $I.CVRAYR.VAMLQD(), u.ONGTRQ().UQGPFX() == n) return this.SHOEUM[0];
    if (t != 0 && (f = u.FMKUPK().UQGPFX(), f != 0)) {
        if (t == f) return this.SHOEUM[1];
        switch (u.FMKUPK().MCCSDS(t)) {
            case $I.CZQHTV.Friend:
                return this.SHOEUM[2];
            case $I.CZQHTV.NAP:
                return this.SHOEUM[3];
            case $I.CZQHTV.Foe:
                return this.SHOEUM[4]
        }
    }
    return this.SHOEUM[5]
}

function GetMapAllianceColor(n) {
    var t = {},
        i;
    return (t.$r = this.WHLXFA.ZOXRAI(n, t), i = t.b, t.$r) && i.Active ? i.Color : this.SHOEUM[this.FYQKFD(n)]
}

function GetMapAllianceColorType(n) {
    var i = $I.CVRAYR.VAMLQD(),
        t;
    if (n != 0 && (t = i.FMKUPK().UQGPFX(), t != 0)) {
        if (n == t) return $I.HCHYIA.OwnAlliance;
        switch (i.FMKUPK().MCCSDS(n)) {
            case $I.CZQHTV.None:
                return $I.HCHYIA.OtherAlliance;
            case $I.CZQHTV.Friend:
                return $I.HCHYIA.AlliedAlliance;
            case $I.CZQHTV.NAP:
                return $I.HCHYIA.NAPAlliance;
            case $I.CZQHTV.Foe:
                return $I.HCHYIA.EnemyAlliance
        }
    }
    return $I.HCHYIA.Enemy
}

function GetMapPlayerColor(n) {
    var t = {},
        i;
    return (t.$r = this.WARPAQ.ZOXRAI(n, t), i = t.b, t.$r) && i.Active ? i.Color : $I.CVRAYR.VAMLQD().ONGTRQ().UQGPFX() == n ? this.SHOEUM[0] : this.SHOEUM[5]
}

function GetStandardColor(n) {
    return this.SHOEUM[n]
}

function SetStandardColor(n, t) {
    this.SHOEUM[n] != t && (this.SHOEUM[n] = t, this.DKFEAM.l.push($I.PHKAYY.STCLKO(4) + $I.PHKAYY.STCLKO(n) + $I.PHKAYY.RJBUCR($I.KIVDEZ.OZQSTV(t))), this.OQVWUC != null && this.OQVWUC.FOWLVG())
}

function GetPlayerColor(n) {
    var t = {},
        i;
    return (t.$r = this.WARPAQ.ZOXRAI(n, t), i = t.b, t.$r) ? i.Color : null
}

function GetAllianceColor(n) {
    var t = {},
        i;
    return (t.$r = this.WHLXFA.ZOXRAI(n, t), i = t.b, t.$r) ? i.Color : null
}

function AddPlayer(n, t, i) {
    return this.WARPAQ.XOHVCR(n) ? !1 : (this.WARPAQ.GXVKTX(n, (new $I.ZFGJAY).NJRSOX(!0, t, i)), this.SSONVD != null && this.SSONVD.FOWLVG(), this.DKFEAM.l.push($I.PHKAYY.STCLKO(5) + $I.PHKAYY.KVCIOZ(n) + $I.PHKAYY.RJBUCR($I.KIVDEZ.OZQSTV(i))), !0)
}

function RemovePlayer(n) {
    return this.WARPAQ.XUDPAL(n), this.SSONVD != null && this.SSONVD.FOWLVG(), this.DKFEAM.l.push($I.PHKAYY.STCLKO(7) + $I.PHKAYY.KVCIOZ(n)), !0
}

function IsKnownPlayer(n) {
    return this.WARPAQ.XOHVCR(n)
}

function IsActivePlayer(n) {
    var t = {},
        i;
    return (t.$r = this.WARPAQ.ZOXRAI(n, t), i = t.b, t.$r) && i.Active
}

function AddAlliance(n, t, i) {
    return this.WHLXFA.XOHVCR(n) ? !1 : (this.WHLXFA.GXVKTX(n, (new $I.ZFGJAY).NJRSOX(!0, t, i)), this.TEUUWM != null && this.TEUUWM.FOWLVG(), this.DKFEAM.l.push($I.PHKAYY.STCLKO(6) + $I.PHKAYY.KVCIOZ(n) + $I.PHKAYY.RJBUCR($I.KIVDEZ.OZQSTV(i))), !0)
}

function RemoveAlliance(n) {
    return this.WHLXFA.XUDPAL(n), this.TEUUWM != null && this.TEUUWM.FOWLVG(), this.DKFEAM.l.push($I.PHKAYY.STCLKO(8) + $I.PHKAYY.KVCIOZ(n)), !0
}

function IsKnownAlliance(n) {
    return this.WHLXFA.XOHVCR(n)
}

function IsActiveAlliance(n) {
    var t = {},
        i;
    return (t.$r = this.WHLXFA.ZOXRAI(n, t), i = t.b, t.$r) && i.Active
}

function SetPlayerColor(n, t) {
    var i = {},
        r;
    return (i.$r = this.WARPAQ.ZOXRAI(n, i), r = i.b, i.$r) ? (r.Color != t && (r.Color = t, this.SSONVD != null && this.SSONVD.FOWLVG(), this.DKFEAM.l.push($I.PHKAYY.STCLKO(5) + $I.PHKAYY.KVCIOZ(n) + $I.PHKAYY.RJBUCR($I.KIVDEZ.OZQSTV(t)))), !0) : !1
}

function SetAllianceColor(n, t) {
    var i = {},
        r;
    return (i.$r = this.WHLXFA.ZOXRAI(n, i), r = i.b, i.$r) ? (r.Color != t && (r.Color = t, this.TEUUWM != null && this.TEUUWM.FOWLVG(), this.DKFEAM.l.push($I.PHKAYY.STCLKO(6) + $I.PHKAYY.KVCIOZ(n) + $I.PHKAYY.RJBUCR($I.KIVDEZ.OZQSTV(t)))), !0) : !1
}

function SetPlayerActive(n, t) {
    var i = {},
        r;
    return (i.$r = this.WARPAQ.ZOXRAI(n, i), r = i.b, i.$r) ? (r.Active != t && (r.Active = t, this.SSONVD != null && this.SSONVD.FOWLVG(), this.DKFEAM.l.push($I.PHKAYY.STCLKO(2 | (t ? 32 : 0)) + $I.PHKAYY.KVCIOZ(n))), !0) : !1
}

function SetAllianceActive(n, t) {
    var i = {},
        r;
    return (i.$r = this.WHLXFA.ZOXRAI(n, i), r = i.b, i.$r) ? (r.Active != t && (r.Active = t, this.TEUUWM != null && this.TEUUWM.FOWLVG(), this.DKFEAM.l.push($I.PHKAYY.STCLKO(3 | (t ? 32 : 0)) + $I.PHKAYY.KVCIOZ(n))), !0) : !1
}

function get_Players() {
    return this.WARPAQ
}

function get_Alliances() {
    return this.WHLXFA
}

function add_OnPlayerListChanged(n) {
    var t = {},
        i, r = this.SSONVD,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.SSONVD, t.$r = $I.TSJVQL.JXWJWI($I.QBBNRV, u, i, t), this.SSONVD = t.a, t.$r); while (r != i)
}

function remove_OnPlayerListChanged(n) {
    var t = {},
        i, r = this.SSONVD,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.SSONVD, t.$r = $I.TSJVQL.JXWJWI($I.QBBNRV, u, i, t), this.SSONVD = t.a, t.$r); while (r != i)
}

function add_OnAllianceListChanged(n) {
    var t = {},
        i, r = this.TEUUWM,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.TEUUWM, t.$r = $I.TSJVQL.JXWJWI($I.QBBNRV, u, i, t), this.TEUUWM = t.a, t.$r); while (r != i)
}

function remove_OnAllianceListChanged(n) {
    var t = {},
        i, r = this.TEUUWM,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.TEUUWM, t.$r = $I.TSJVQL.JXWJWI($I.QBBNRV, u, i, t), this.TEUUWM = t.a, t.$r); while (r != i)
}

function add_OnBaseSettingsChanged(n) {
    var t = {},
        i, r = this.JZYKPP,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.JZYKPP, t.$r = $I.TSJVQL.JXWJWI($I.QBBNRV, u, i, t), this.JZYKPP = t.a, t.$r); while (r != i)
}

function remove_OnBaseSettingsChanged(n) {
    var t = {},
        i, r = this.JZYKPP,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.JZYKPP, t.$r = $I.TSJVQL.JXWJWI($I.QBBNRV, u, i, t), this.JZYKPP = t.a, t.$r); while (r != i)
}

function add_OnBaseColorSettingsChanged(n) {
    var t = {},
        i, r = this.OQVWUC,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.OQVWUC, t.$r = $I.TSJVQL.JXWJWI($I.QBBNRV, u, i, t), this.OQVWUC = t.a, t.$r); while (r != i)
}

function remove_OnBaseColorSettingsChanged(n) {
    var t = {},
        i, r = this.OQVWUC,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.OQVWUC, t.$r = $I.TSJVQL.JXWJWI($I.QBBNRV, u, i, t), this.OQVWUC = t.a, t.$r); while (r != i)
}