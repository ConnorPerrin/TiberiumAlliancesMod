function get_Exists() {
    return this.FAHGHY > 0
}

function get_Id() {
    return this.FAHGHY
}

function get_Name() {
    return this.TYFGCY
}

function get_Abbreviation() {
    return this.DVTFHO
}

function get_Announcement() {
    return this.USZMFX
}

function get_Description() {
    return this.LIBYQS
}

function get_RecruitmentThreadId() {
    return this.BLZFSV
}

function get_IsDefaultName() {
    return this.KOFZAL.IsDefaultName
}

function get_IsAdmin() {
    return this.KOFZAL.IsAdmin
}

function get_IsFirstLeader() {
    return this.KOFZAL.SortOrder == 1
}

function get_IsOfficer() {
    return this.KOFZAL.SortOrder == 3
}

function get_CanRepresent() {
    return this.KOFZAL.CanRepresent
}

function get_CanEditRights() {
    return this.KOFZAL.CanEditRights
}

function get_CanPromoteLowerRoles() {
    return this.KOFZAL.CanPromoteLowerRoles
}

function get_CanInvite() {
    return this.KOFZAL.CanInvite
}

function get_CanKick() {
    return this.KOFZAL.CanKick
}

function get_CanModerate() {
    return this.KOFZAL.CanModerate
}

function get_CanCreateForum() {
    return this.KOFZAL.CanCreateForum
}

function get_CanViewMemberReports() {
    return this.KOFZAL.CanViewMemberReports
}

function get_CanTrackOutgoingAttacks() {
    return this.KOFZAL.CanTrackOutgoingAttacks
}

function get_CanForceForumSubscriptions() {
    return this.KOFZAL.CanSetForumSubscriptions
}

function get_CanAccessAllianceForums() {
    return this.KOFZAL.CanAccessSharedForums
}

function get_CanStartLFMThreads() {
    return this.KOFZAL.CanRecruit
}

function get_CanEditMarkers() {
    return this.KOFZAL.CanEditMarkers
}

function get_CanViewMilitary() {
    return this.KOFZAL.CanViewMilitary
}

function get_NumAdmins() {
    return this.XUINEF
}

function get_ShowOnlineStatus() {
    return this.URXUCK.OnlineState != 3
}

function get_Rank() {
    return this.UODHLO
}

function get_EventRank() {
    return this.SZOZWZ
}

function get_EventScore() {
    return this.AIRLKD
}

function get_HighestMemberLevelGDI() {
    return this.FBTJRR
}

function get_HighestMemberLevelNOD() {
    return this.VWIPQU
}

function get_AverageScore() {
    return this.WMJXJR
}

function get_TotalScore() {
    return this.FAAUEZ
}

function get_LastRenameStep() {
    return this.IKWMLO
}

function get_NumMembers() {
    return this.PIWAVR().c
}

function GetRelation(n) {
    var t = {},
        i;
    return (t.$r = this.MXUSPO.ZOXRAI(n, t), i = t.b, t.$r) ? i.IsConfirmed ? i.Relationship : $I.CZQHTV.None : $I.CZQHTV.None
}

function GetJSDateTime(n) {
    return new Date(n)
}

function GetDateTimeString(n) {
    return webfrontend.phe.cnc.Util.getDateTimeString(new Date(n))
}

function ClearAllianceData() {
    this.RPBPNX();
    this.FNYZVX != null && this.FNYZVX.FOWLVG()
}

function RefreshMemberData() {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("AllianceGetMemberData", {}, (new $I.JNOYHJ).TFDQYD(this, this.NKRKJA), null)
}

function GetMember(n) {
    return this.PIWAVR().XOHVCR(n) ? this.PIWAVR().d[n] : null
}

function get_MemberData() {
    return this.ILJXZM
}

function get_MemberDataAsArray() {
    var t = $I.UDAQKL.DNVCCU($I.BUJWHR, this.PIWAVR().c),
        u = 0,
        i = this.PIWAVR().d,
        n = {
            k: null,
            v: null
        };
    for (var r in i) n.k = r, n.v = i[r], t[u++] = n.v;
    return t
}

function getMemberIds() {
    var t = (new $I.UCRMVA).SLPWTI(),
        i = this.PIWAVR().d,
        n = {
            k: null,
            v: null
        };
    for (var r in i) n.k = r, n.v = i[r], t.l.push(n.v.Id);
    return t
}

function getMemberIdsByRole(n) {
    var i = (new $I.UCRMVA).SLPWTI(),
        r = this.PIWAVR().d,
        t = {
            k: null,
            v: null
        };
    for (var u in r) t.k = u, t.v = r[u], this.VOJFQB().d[t.v.Role].SortOrder == n && i.l.push(t.v.Id);
    return i
}

function getIsRoleOrHigher(n) {
    return this.KOFZAL.SortOrder <= n
}

function getIsHigherRole(n) {
    return this.KOFZAL.SortOrder < n
}

function get_Roles() {
    return this.LGZDGJ
}

function get_Relationships() {
    return this.ZYGIJB
}

function get_IncomingRelationships() {
    return this.NTFIFA
}

function get_Invitations() {
    return this.ZTVKUY
}

function get_History() {
    return this.CXNWVQ
}

function get_ForumRights() {
    return this.ZDPNNZ
}

function get_FirstLeaders() {
    return this.SDCBMS
}

function get_SecondLeaders() {
    return this.XJIYXC
}

function get_CurrentMemberRoleInfo() {
    return this.KOFZAL
}

function get_AllianceMemberLimit() {
    return 50
}

function get_POITiberiumBonus() {
    return Math.floor(this.URUNOY)
}

function get_POICrystalBonus() {
    return Math.floor(this.UTPLNB)
}

function get_POIPowerBonus() {
    return Math.floor(this.QCPWNW)
}

function get_POIInfantryBonus() {
    return Math.floor(this.ECFQCG)
}

function get_POIVehicleBonus() {
    return Math.floor(this.ZPYXCT)
}

function get_POIAirBonus() {
    return Math.floor(this.SBOEAM)
}

function get_POIDefenseBonus() {
    return Math.floor(this.QDOBEM)
}

function HasMember(n) {
    return this.PIWAVR().XOHVCR(n)
}

function HasMemberName(n) {
    var i, t, r;
    n = n != null ? n.toUpperCase() : "";
    i = this.PIWAVR().d;
    t = {
        k: null,
        v: null
    };
    for (r in i)
        if (t.k = r, t.v = i[r], t.v != null && t.v.Name != null && t.v.Name.toUpperCase() == n) return !0;
    return !1
}

function CanDismiss(n, t) {
    var r = this.CKRVUI() && n.length > 0,
        i;
    if (r)
        for (i = 0; i < n.length; i++)
            if (!this.PSQGCU(n[i], t)) return !1;
    return r
}

function CanSetMemberRole(n) {
    return this.TQVGYZ() && n.length > 0
}

function IsRoleHigherThanOtherRole(n, t) {
    var i = !1;
    return this.VOJFQB().XOHVCR(n) && this.VOJFQB().XOHVCR(t) && (i = this.VOJFQB().d[n].SortOrder < this.VOJFQB().d[t].SortOrder), i
}

function GetAllianceRelationshipsByType(n, t) {
    var r = (new $I.UCRMVA).SLPWTI(),
        i;
    if (this.ZYGIJB != null)
        for (i = 0; i < this.ZYGIJB.length; i++) this.ZYGIJB[i].Relationship == n && (t ? this.ZYGIJB[i].IsConfirmed && r.l.push(this.ZYGIJB[i]) : r.l.push(this.ZYGIJB[i]));
    return r
}

function GetPOIBonusFromResourceType(n) {
    var t = 0;
    return n == $I.OATHMF.Tiberium ? this.URUNOY : n == $I.OATHMF.Crystal ? this.UTPLNB : (n == $I.OATHMF.Power && (t = this.QCPWNW), t)
}

function getEmptyMarker(n) {
    return (new $I.ITAOCV).TKASXT(n)
}

function SetSelectedHomeMarker(n) {
    var i, r, t;
    for (this.JEMNMN = n, i = this.ICXSWK.l, t = 0; t < i.length; t++) r = i[t], r.GIRXAB() == $I.QOYXHV.EAMT_Home && this.ICXSWK.WILRBK(r);
    this.ICXSWK.l.indexOf(n) != -1 || this.ICXSWK.l.push(n);
    this.VAFEFS.FOWLVG()
}

function getSelectedHomeMarker() {
    return this.JEMNMN
}

function GetChallengeGoalProgress(n, t) {
    return this.NMBCGJ != null && this.NMBCGJ.XOHVCR(n) && this.NMBCGJ.d[n].XOHVCR(t) ? this.NMBCGJ.d[n].d[t] : 0
}

function GetMarkerById(n) {
    for (var r = this.ICXSWK.l, t, i = 0; i < r.length; i++)
        if (t = r[i], t.UQGPFX() == n) return t;
    return null
}

function CreateMarker(n, t, i, r) {
    this.KDFFSR(!1, 0, n, t, i, r)
}

function EditMarker(n, t, i, r, u) {
    this.KDFFSR(!1, n, t, i, r, u)
}

function DeleteMarker(n, t) {
    this.KDFFSR(!0, n, t, 0, 0, null)
}

function HasReserveMarker() {
    for (var r = $I.CVRAYR.VAMLQD().ONGTRQ().UQGPFX(), i = this.ICXSWK.l, n, t = 0; t < i.length; t++)
        if (n = i[t], n.GIRXAB() == $I.QOYXHV.EAMT_Reserve && n.UMQUOS() == r) return !0;
    return !1
}

function get_OwnedPOIs() {
    return this.GCJUDK
}

function get_POIRankScore() {
    return this.QDZZGJ
}

function get_HasWon() {
    return this.AXRVSM > 0
}

function get_EndGameWinStep() {
    return this.AXRVSM
}

function get_Markers() {
    return this.ICXSWK
}

function get_OwnShieldHubs() {
    return this.DLWTMZ
}

function get_VpDelta() {
    return this.KSVEOE
}

function add_Change(n) {
    var t = {},
        i, r = this.FNYZVX,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.FNYZVX, t.$r = $I.TSJVQL.JXWJWI($I.IWNHMI, u, i, t), this.FNYZVX = t.a, t.$r); while (r != i)
}

function remove_Change(n) {
    var t = {},
        i, r = this.FNYZVX,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.FNYZVX, t.$r = $I.TSJVQL.JXWJWI($I.IWNHMI, u, i, t), this.FNYZVX = t.a, t.$r); while (r != i)
}

function add_BoniChange(n) {
    var t = {},
        i, r = this.RAQJTZ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.RAQJTZ, t.$r = $I.TSJVQL.JXWJWI($I.IWNHMI, u, i, t), this.RAQJTZ = t.a, t.$r); while (r != i)
}

function remove_BoniChange(n) {
    var t = {},
        i, r = this.RAQJTZ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.RAQJTZ, t.$r = $I.TSJVQL.JXWJWI($I.IWNHMI, u, i, t), this.RAQJTZ = t.a, t.$r); while (r != i)
}

function add_AllianceChallengeResultChange(n) {
    var t = {},
        i, r = this.WLMLBB,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.WLMLBB, t.$r = $I.TSJVQL.JXWJWI($I.IWNHMI, u, i, t), this.WLMLBB = t.a, t.$r); while (r != i)
}

function remove_AllianceChallengeResultChange(n) {
    var t = {},
        i, r = this.WLMLBB,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.WLMLBB, t.$r = $I.TSJVQL.JXWJWI($I.IWNHMI, u, i, t), this.WLMLBB = t.a, t.$r); while (r != i)
}

function add_AllianceMarkerChange(n) {
    var t = {},
        i, r = this.VAFEFS,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.VAFEFS, t.$r = $I.TSJVQL.JXWJWI($I.IWNHMI, u, i, t), this.VAFEFS = t.a, t.$r); while (r != i)
}

function remove_AllianceMarkerChange(n) {
    var t = {},
        i, r = this.VAFEFS,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.VAFEFS, t.$r = $I.TSJVQL.JXWJWI($I.IWNHMI, u, i, t), this.VAFEFS = t.a, t.$r); while (r != i)
}

function add_CanInviteChange(n) {
    var t = {},
        i, r = this.SWESUJ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.SWESUJ, t.$r = $I.TSJVQL.JXWJWI($I.XNWOZX, u, i, t), this.SWESUJ = t.a, t.$r); while (r != i)
}

function remove_CanInviteChange(n) {
    var t = {},
        i, r = this.SWESUJ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.SWESUJ, t.$r = $I.TSJVQL.JXWJWI($I.XNWOZX, u, i, t), this.SWESUJ = t.a, t.$r); while (r != i)
}

function add_CanModerateChange(n) {
    var t = {},
        i, r = this.GUWBRH,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.GUWBRH, t.$r = $I.TSJVQL.JXWJWI($I.IXLIVE, u, i, t), this.GUWBRH = t.a, t.$r); while (r != i)
}

function remove_CanModerateChange(n) {
    var t = {},
        i, r = this.GUWBRH,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.GUWBRH, t.$r = $I.TSJVQL.JXWJWI($I.IXLIVE, u, i, t), this.GUWBRH = t.a, t.$r); while (r != i)
}

function add_CanPromoteLowerRolesChange(n) {
    var t = {},
        i, r = this.ENHCAT,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.ENHCAT, t.$r = $I.TSJVQL.JXWJWI($I.ASNKOI, u, i, t), this.ENHCAT = t.a, t.$r); while (r != i)
}

function remove_CanPromoteLowerRolesChange(n) {
    var t = {},
        i, r = this.ENHCAT,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.ENHCAT, t.$r = $I.TSJVQL.JXWJWI($I.ASNKOI, u, i, t), this.ENHCAT = t.a, t.$r); while (r != i)
}

function add_CanRepresentChange(n) {
    var t = {},
        i, r = this.ZHGJVF,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.ZHGJVF, t.$r = $I.TSJVQL.JXWJWI($I.WNDTJM, u, i, t), this.ZHGJVF = t.a, t.$r); while (r != i)
}

function remove_CanRepresentChange(n) {
    var t = {},
        i, r = this.ZHGJVF,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.ZHGJVF, t.$r = $I.TSJVQL.JXWJWI($I.WNDTJM, u, i, t), this.ZHGJVF = t.a, t.$r); while (r != i)
}

function add_SetMarkerResult(n) {
    var t = {},
        i, r = this.CCGJHZ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.CCGJHZ, t.$r = $I.TSJVQL.JXWJWI($I.ITWPXW, u, i, t), this.CCGJHZ = t.a, t.$r); while (r != i)
}

function remove_SetMarkerResult(n) {
    var t = {},
        i, r = this.CCGJHZ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.CCGJHZ, t.$r = $I.TSJVQL.JXWJWI($I.ITWPXW, u, i, t), this.CCGJHZ = t.a, t.$r); while (r != i)
}