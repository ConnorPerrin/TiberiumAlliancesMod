function get_Id() {
    return this.id
}

function get_IdNucleus() {
    return this.m_iIdNucleus
}

function get_Name() {
    return this.name
}

function get_AllianceId() {
    return this.allianceId
}

function get_HasControlHubCode() {
    return this.YYARLN
}

function get_EndGameLevelDebuffCooldown() {
    return this.ISDMIQ
}

function get_EndGameHasWon() {
    return this.OOTBPR
}

function get_LastSeenChallengeGUID() {
    return this.FXCJUL
}

function get_EventLootContingentRepairTime() {
    return this.HQWWRG
}

function get_EventLootContingentCommandPoints() {
    return this.AZQGHM
}

function get_LegacyPoints() {
    return this.MYNFEH
}

function get_ServerSideType() {
    return this.serverSideType
}

function get_IsSubstituteLogin() {
    return this.XOTOXJ
}

function set_IsSubstituteLogin(n) {
    this.XOTOXJ = n
}

function get_IsSubstituted() {
    return this.FFNSGS
}

function set_IsSubstituted(n) {
    this.FFNSGS = n
}

function get_SubstituteDayCount() {
    return this.NEJBFS
}

function set_SubstituteDayCount(n) {
    this.NEJBFS = n
}

function get_SubstituteLastLogout() {
    return this.AJZLUC
}

function set_SubstituteLastLogout(n) {
    this.AJZLUC = n
}

function get_CreationDate() {
    return this.UOWPJL
}

function get_Faction() {
    return this.serverSideType
}

function get_AccountId() {
    return this.accountId
}

function get_PlayerResearch() {
    return this.BQSSKG
}

function get_IncomingAttacks() {
    return this.VUFRUK
}

function get_Level() {
    return this.NRRDWE
}

function get_ScorePoints() {
    return this.SLURTC
}

function get_Title() {
    var n = $I.BUEVKL.QGLUJV().VDXDDP(this.WMEKEJ(), this.APCTQO());
    return n != null && n.dn != null ? n.dn : ""
}

function get_TitleIcon() {
    var n = $I.BUEVKL.QGLUJV().VDXDDP(this.WMEKEJ(), this.APCTQO());
    return n != null && n.ic != null ? $I.QOKGWR.WBFJPT().SBOUYU(n.ic) : null
}

function get_NextTitle() {
    var n = $I.BUEVKL.QGLUJV().VDXDDP(this.WMEKEJ(), this.APCTQO() + 1);
    return n != null ? n : null
}

function get_OverallRank() {
    return this.FDUPTE
}

function get_EventRank() {
    return this.CRTZAW
}

function get_EventScore() {
    return this.DQWBSX
}

function get_ResearchPoints() {
    return this.EWKYNO
}

function get_MyInvitations() {
    return this.m_MyInvitations
}

function get_FactionFolder() {
    return this.BYWRZQ[this.serverSideType]
}

function get_PackageCount() {
    return this.ELFQKH + this.IXCRJX
}

function get_Credits() {
    return this.QLPVJD
}

function get_SupplyPointMultiplierActive() {
    return this.JNKRLX
}

function get_Effects() {
    return this.IUIGKC
}

function GetNextEffectEndStepByCategory(n) {
    var t = {},
        i, r, f, e, u;
    if (!(t.$r = this.IUIGKC.ZOXRAI(n, t), i = t.b, t.$r) || i.l.length <= 0) return -1;
    for (r = i.l[0].EndStep, f = i.l, u = 0; u < f.length; u++) e = f[u], r > e.EndStep && (r = e.EndStep);
    return r
}

function get_ItemCamps() {
    return this.PHFHIW
}

function get_LastRelocateStep() {
    return this.ZCXJEC
}

function get_RelocateTier() {
    var n = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG(),
        t = Math.floor((n - this.MIKIAT()) / 3600);
    return Math.max(0, this.VZASBF - Math.floor(t / $I.CVRAYR.VAMLQD().TZZENG().NHHXFV()))
}

function get_RelocationEndStep() {
    var n = $I.CVRAYR.VAMLQD().TZZENG().BACUAJ(this.EXASQR());
    return this.MIKIAT() + n * 3600
}

function Init(n) {
    this.serverSideType = n
}

function UpdateTech(n, t) {
    for (var f = !1, r = t.l, u, i = 0; i < r.length; i++) u = r[i], f |= this.BQSSKG.DRHPAD(u.t)
}

function RefreshMyInvitations() {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("PlayerGetInvitations", {}, (new $I.JNOYHJ).TFDQYD(this, this.XVIPBD), null)
}

function PredictSupplyPointStepAtValue(n) {
    return $I.TYCUAI.ULULZO(this.OLYTLK, n)
}

function PredictNextSupplyPointStep() {
    return $I.TYCUAI.ULULZO(this.OLYTLK, Math.floor(this.GHXOHM() + 1))
}

function GetSupplyPointMaxStorage() {
    return $I.TYCUAI.QMNEPZ(this.OLYTLK)
}

function GetSupplyPointsGrowPerHour() {
    return $I.TYCUAI.VLOWRS(this.OLYTLK, !1)
}

function GetSupplyPointsGrowPerDay() {
    return $I.TYCUAI.KFFCPP(this.OLYTLK, !1)
}

function GetSupplyPointCount() {
    return $I.TYCUAI.FDJEIX(this.OLYTLK)
}

function PredictCommandPointStepAtValue(n) {
    return $I.TYCUAI.ULULZO(this.IVTJNE, n)
}

function PredictNextCommandPointStep() {
    return $I.TYCUAI.ULULZO(this.IVTJNE, Math.floor(this.TGRNEA() + 1))
}

function GetCommandPointMaxStorage() {
    return $I.TYCUAI.QMNEPZ(this.IVTJNE)
}

function GetCommandPointsGrowPerHour() {
    return $I.TYCUAI.VLOWRS(this.IVTJNE, !1)
}

function GetCommandPointCount() {
    return $I.TYCUAI.FDJEIX(this.IVTJNE)
}

function GetCreditsCount() {
    return $I.TYCUAI.FDJEIX(this.AEMKNA())
}

function GetCreditsGrowth() {
    return $I.TYCUAI.VLOWRS(this.AEMKNA(), !1)
}

function SetResourceCount(n, t, i) {
    switch (n) {
        case $I.OATHMF.Gold:
            this.QLPVJD.Step = t;
            this.QLPVJD.Base = i;
            return;
        case $I.OATHMF.PlayerLevel:
            this.NRRDWE = Math.floor(i);
            return;
        case $I.OATHMF.Power:
            break;
        case $I.OATHMF.ResearchPoints:
            this.EWKYNO = Math.floor(i);
            break;
        case $I.OATHMF.CommandPoints:
            this.IVTJNE.Step = t;
            this.IVTJNE.Base = i;
            return;
        case $I.OATHMF.SupplyPoints:
            this.OLYTLK.Step = t;
            this.OLYTLK.Base = i;
            return;
        default:
            return
    }
}

function CanFound() {
    var n = $I.AAVPRT.OK,
        o = $I.CVRAYR.VAMLQD().ZBVLXL().LVIQBQ().c,
        i, r;
    this.USHMOL().EKZVUS($I.YZBSQQ.DGTWTH(9, this.WMEKEJ()), o) || (n |= $I.AAVPRT.FailResearchLevelNotHighEnough);
    var u = !1,
        f = $I.AAVPRT.OK,
        e = $I.CVRAYR.VAMLQD().ZBVLXL().LVIQBQ().d,
        t = {
            k: null,
            v: null
        };
    for (i in e) {
        if (t.k = i, t.v = e[i], r = t.v.CTUKLK(), r == $I.AAVPRT.OK) {
            u = !0;
            break
        }
        f |= r
    }
    return u || (n |= f), n
}

function CanRelocate() {
    var n = $I.MLYMYR.OK,
        i = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG(),
        r = $I.CVRAYR.VAMLQD().ZBVLXL().LVIQBQ().d,
        t = {
            k: null,
            v: null
        };
    for (var u in r)
        if (t.k = u, t.v = r[u], t.v.YKKGOE() && (n |= $I.MLYMYR.FailIsAttacked), t.v.TSHNME() && (n |= $I.MLYMYR.FailIsAttacking), t.v.JLEOSE() > i && (n |= $I.MLYMYR.FailHasLockDown), t.v.NDGHOP() && (n |= $I.MLYMYR.FailHasMoveRestriction), n != $I.MLYMYR.OK) break;
    return this.BSFETV() > i && (n |= $I.MLYMYR.FailHasPlayerRelocateLockDown), this.IPTHFP() && (n |= $I.MLYMYR.FailIsSubstituted), n
}

function GetResourceData(n) {
    var t;
    return n == 3 ? this.AEMKNA() : n == 15 ? this.VATJTT() : n == 16 ? this.MDOBEJ() : n == 4 ? (t = (new $I.PWMLSA).SLPWTI(), t.Base = this.APCTQO(), t.NoMaxStorage = !0, t) : n == 6 ? (t = (new $I.PWMLSA).SLPWTI(), t.Base = this.GIEROL(), t.NoMaxStorage = !0, t) : null
}

function AddSupplyPoints(n) {
    this.OLYTLK != null && (this.OLYTLK.Base += n)
}

function AddCommandPoints(n) {
    this.IVTJNE != null && (this.IVTJNE.Base += n)
}

function AddCredits(n) {
    this.QLPVJD != null && (this.QLPVJD.Base += n)
}

function GetChallengeGoalProgress(n, t) {
    return this.SJQKDM != null && this.SJQKDM.XOHVCR(n) && this.SJQKDM.d[n].XOHVCR(t) ? this.SJQKDM.d[n].d[t] : 0
}

function GetChallengeEventLootContingent(n) {
    var i, r, t, u;
    return n != 15 && n != 11 ? 0 : (i = $I.CVRAYR.VAMLQD().ZAMTRR(), r = i.LAANBH(), r == 0 || this.DUQHKD() > 0 && this.DUQHKD() == r) ? n == 11 ? this.PUVGZU() : n != 15 ? 0 : this.MIAZUC() : (t = null, u = $I.APQDTH.PUYZAZ, n == 15 && (u = $I.APQDTH.CXSTZW), t = i.EHLJXZ(u), t == null) ? 0 : $I.XOJOCY.UVXLMK(t)
}

function GetSeasonLegacyModifier() {
    return qx.core.Init.getApplication().getSeasonLegacyModifier()
}

function add_InvitationsChange(n) {
    var t = {},
        i, r = this.BVCNAE,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.BVCNAE, t.$r = $I.TSJVQL.JXWJWI($I.MHYUSJ, u, i, t), this.BVCNAE = t.a, t.$r); while (r != i)
}

function remove_InvitationsChange(n) {
    var t = {},
        i, r = this.BVCNAE,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.BVCNAE, t.$r = $I.TSJVQL.JXWJWI($I.MHYUSJ, u, i, t), this.BVCNAE = t.a, t.$r); while (r != i)
}

function add_Change(n) {
    var t = {},
        i, r = this.FABPRR,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.FABPRR, t.$r = $I.TSJVQL.JXWJWI($I.LPYEIJ, u, i, t), this.FABPRR = t.a, t.$r); while (r != i)
}

function remove_Change(n) {
    var t = {},
        i, r = this.FABPRR,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.FABPRR, t.$r = $I.TSJVQL.JXWJWI($I.LPYEIJ, u, i, t), this.FABPRR = t.a, t.$r); while (r != i)
}

function add_PlayerLevelChange(n) {
    var t = {},
        i, r = this.HPPCDZ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.HPPCDZ, t.$r = $I.TSJVQL.JXWJWI($I.LPYEIJ, u, i, t), this.HPPCDZ = t.a, t.$r); while (r != i)
}

function remove_PlayerLevelChange(n) {
    var t = {},
        i, r = this.HPPCDZ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.HPPCDZ, t.$r = $I.TSJVQL.JXWJWI($I.LPYEIJ, u, i, t), this.HPPCDZ = t.a, t.$r); while (r != i)
}

function add_PlayerEffectChange(n) {
    var t = {},
        i, r = this.PJXMBO,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.PJXMBO, t.$r = $I.TSJVQL.JXWJWI($I.LPYEIJ, u, i, t), this.PJXMBO = t.a, t.$r); while (r != i)
}

function remove_PlayerEffectChange(n) {
    var t = {},
        i, r = this.PJXMBO,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.PJXMBO, t.$r = $I.TSJVQL.JXWJWI($I.LPYEIJ, u, i, t), this.PJXMBO = t.a, t.$r); while (r != i)
}

function add_PlayerItemCampsChange(n) {
    var t = {},
        i, r = this.QQQAQA,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.QQQAQA, t.$r = $I.TSJVQL.JXWJWI($I.LPYEIJ, u, i, t), this.QQQAQA = t.a, t.$r); while (r != i)
}

function remove_PlayerItemCampsChange(n) {
    var t = {},
        i, r = this.QQQAQA,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.QQQAQA, t.$r = $I.TSJVQL.JXWJWI($I.LPYEIJ, u, i, t), this.QQQAQA = t.a, t.$r); while (r != i)
}

function add_PlayerPackageSizeChange(n) {
    var t = {},
        i, r = this.SSYGJM,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.SSYGJM, t.$r = $I.TSJVQL.JXWJWI($I.LPYEIJ, u, i, t), this.SSYGJM = t.a, t.$r); while (r != i)
}

function remove_PlayerPackageSizeChange(n) {
    var t = {},
        i, r = this.SSYGJM,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.SSYGJM, t.$r = $I.TSJVQL.JXWJWI($I.LPYEIJ, u, i, t), this.SSYGJM = t.a, t.$r); while (r != i)
}

function add_PlayerChallengeResultChange(n) {
    var t = {},
        i, r = this.SZSVKZ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.SZSVKZ, t.$r = $I.TSJVQL.JXWJWI($I.LPYEIJ, u, i, t), this.SZSVKZ = t.a, t.$r); while (r != i)
}

function remove_PlayerChallengeResultChange(n) {
    var t = {},
        i, r = this.SZSVKZ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.SZSVKZ, t.$r = $I.TSJVQL.JXWJWI($I.LPYEIJ, u, i, t), this.SZSVKZ = t.a, t.$r); while (r != i)
}