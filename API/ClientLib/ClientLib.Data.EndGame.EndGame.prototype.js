function GetObjectFromPosition(n, t) {
    var r = this.DGRBVV.d,
        i = {
            k: null,
            v: null
        };
    for (var u in r)
        if (i.k = u, i.v = r[u], i.v.TXAIOE(n, t)) return i.v;
    return null
}

function GetCenter() {
    var t, n, i;
    if (this.LXINML == null) {
        t = this.DGRBVV.d;
        n = {
            k: null,
            v: null
        };
        for (i in t) n.k = i, n.v = t[i], n.v.HDXZII() == $I.RFTWTG.Center && (this.LXINML = n.v)
    }
    return this.LXINML
}

function CanAttackCenter() {
    return $I.CVRAYR.VAMLQD().FMKUPK().DVTRNX() ? this.VQAPBW().SZZNBJ() == $I.CVRAYR.VAMLQD().FMKUPK().UQGPFX() && this.VQAPBW().TNYGND() == $I.BLNKMP.Attackable : !1
}

function GetOwnedControlHubsCount(n) {
    var i = 0,
        r = this.DGRBVV.d,
        t = {
            k: null,
            v: null
        };
    for (var u in r) t.k = u, t.v = r[u], t.v.HDXZII() == $I.RFTWTG.Control && t.v.SZZNBJ() == n && i++;
    return i
}

function GetServer(n, t) {
    return this.XMPSCW(n, t, $I.RFTWTG.Server)
}

function GetControl(n, t) {
    return this.XMPSCW(n, t, $I.RFTWTG.Control)
}

function IsCenter(n, t) {
    return this.XMPSCW(n, t, $I.RFTWTG.Center) != null
}

function GetControlById(n) {
    var i = this.DGRBVV.d,
        t = {
            k: null,
            v: null
        };
    for (var r in i)
        if (t.k = r, t.v = i[r], t.v.HDXZII() == $I.RFTWTG.Control && t.v.UQGPFX() == n) return t.v;
    return null
}

function GetHubByType(n, t, i) {
    var u = this.DGRBVV.d,
        r = {
            k: null,
            v: null
        };
    for (var f in u)
        if (r.k = f, r.v = u[f], r.v.HDXZII() == i && r.v.TXAIOE(n, t)) return r.v;
    return null
}

function IsCityOnControlHub() {
    var t = this.DGRBVV.d,
        n = {
            k: null,
            v: null
        };
    for (var i in t)
        if (n.k = i, n.v = t[i], n.v.HDXZII() == $I.RFTWTG.Control && n.v.BUTUYI() != -1) return !0;
    return !1
}

function IsSpecificCityOnControlHub(n) {
    var i = this.DGRBVV.d,
        t = {
            k: null,
            v: null
        };
    for (var r in i)
        if (t.k = r, t.v = i[r], t.v.HDXZII() == $I.RFTWTG.Control && t.v.BUTUYI() == n) return !0;
    return !1
}

function IsCityOnOwnedControlHub() {
    var t = this.DGRBVV.d,
        n = {
            k: null,
            v: null
        };
    for (var i in t)
        if (n.k = i, n.v = t[i], n.v.HDXZII() == $I.RFTWTG.Control && n.v.SZZNBJ() == $I.CVRAYR.VAMLQD().FMKUPK().UQGPFX() && n.v.BUTUYI() != -1) return !0;
    return !1
}

function LevelDebuff() {
    $I.CVRAYR.VAMLQD().ONGTRQ().VSBSYX() < $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() && ClientLib.Net.CommunicationManager.GetInstance().SendCommand("EndGameLevelDebuff", {}, (new $I.JNOYHJ).TFDQYD(this, this.ASFMLJ), null, !0)
}

function GetWinRankAndFaction(n) {
    return this.ZVDRMN.XOHVCR(n) ? (new $I.NYDWXJ).DZAUFN($I.KGPDNC.GDIFaction, this.ZVDRMN.d[n]) : this.RPMXOM.XOHVCR(n) ? (new $I.NYDWXJ).DZAUFN($I.KGPDNC.NODFaction, this.RPMXOM.d[n]) : (new $I.NYDWXJ).DZAUFN($I.KGPDNC.NotInitialized, 0)
}

function HasAllianceWon(n) {
    return this.OOCIYX.l.indexOf(n) != -1
}

function HasPlayerWon(n) {
    return this.RPMXOM.XOHVCR(n) ? !0 : this.ZVDRMN.XOHVCR(n)
}

function get_Hubs() {
    return this.DGRBVV
}

function get_ShowHallOfFame() {
    return this.CHYFQH
}

function add_Change(n) {
    var t = {},
        i, r = this.RRUIEC,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.RRUIEC, t.$r = $I.TSJVQL.JXWJWI($I.DKPUHO, u, i, t), this.RRUIEC = t.a, t.$r); while (r != i)
}

function remove_Change(n) {
    var t = {},
        i, r = this.RRUIEC,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.RRUIEC, t.$r = $I.TSJVQL.JXWJWI($I.DKPUHO, u, i, t), this.RRUIEC = t.a, t.$r); while (r != i)
}

function add_WinnerChange(n) {
    var t = {},
        i, r = this.TLAIPF,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.TLAIPF, t.$r = $I.TSJVQL.JXWJWI($I.DKPUHO, u, i, t), this.TLAIPF = t.a, t.$r); while (r != i)
}

function remove_WinnerChange(n) {
    var t = {},
        i, r = this.TLAIPF,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.TLAIPF, t.$r = $I.TSJVQL.JXWJWI($I.DKPUHO, u, i, t), this.TLAIPF = t.a, t.$r); while (r != i)
}

function add_AllianceWinnerChange(n) {
    var t = {},
        i, r = this.PTYAZA,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.PTYAZA, t.$r = $I.TSJVQL.JXWJWI($I.DKPUHO, u, i, t), this.PTYAZA = t.a, t.$r); while (r != i)
}

function remove_AllianceWinnerChange(n) {
    var t = {},
        i, r = this.PTYAZA,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.PTYAZA, t.$r = $I.TSJVQL.JXWJWI($I.DKPUHO, u, i, t), this.PTYAZA = t.a, t.$r); while (r != i)
}

function add_HubAdded(n) {
    var t = {},
        i, r = this.QQBBEW,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.QQBBEW, t.$r = $I.TSJVQL.JXWJWI($I.HCABEE, u, i, t), this.QQBBEW = t.a, t.$r); while (r != i)
}

function remove_HubAdded(n) {
    var t = {},
        i, r = this.QQBBEW,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.QQBBEW, t.$r = $I.TSJVQL.JXWJWI($I.HCABEE, u, i, t), this.QQBBEW = t.a, t.$r); while (r != i)
}

function add_HubChanged(n) {
    var t = {},
        i, r = this.USNFIR,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.USNFIR, t.$r = $I.TSJVQL.JXWJWI($I.HCABEE, u, i, t), this.USNFIR = t.a, t.$r); while (r != i)
}

function remove_HubChanged(n) {
    var t = {},
        i, r = this.USNFIR,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.USNFIR, t.$r = $I.TSJVQL.JXWJWI($I.HCABEE, u, i, t), this.USNFIR = t.a, t.$r); while (r != i)
}

function add_HubRemoved(n) {
    var t = {},
        i, r = this.JRBICW,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.JRBICW, t.$r = $I.TSJVQL.JXWJWI($I.HCABEE, u, i, t), this.JRBICW = t.a, t.$r); while (r != i)
}

function remove_HubRemoved(n) {
    var t = {},
        i, r = this.JRBICW,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.JRBICW, t.$r = $I.TSJVQL.JXWJWI($I.HCABEE, u, i, t), this.JRBICW = t.a, t.$r); while (r != i)
}

function add_HallOfFameChange(n) {
    var t = {},
        i, r = this.FEXISW,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.FEXISW, t.$r = $I.TSJVQL.JXWJWI($I.IELQRR, u, i, t), this.FEXISW = t.a, t.$r); while (r != i)
}

function remove_HallOfFameChange(n) {
    var t = {},
        i, r = this.FEXISW,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.FEXISW, t.$r = $I.TSJVQL.JXWJWI($I.IELQRR, u, i, t), this.FEXISW = t.a, t.$r); while (r != i)
}