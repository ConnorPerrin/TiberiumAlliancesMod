[object m_AttackerModulesObject][object m_DefenderModulesObject]
function Clear() {
    this.PPBACP = -1;
    this.PBEYXB = -1;
    this.HFLJQS = null;
    this.m_Complete = !1;
    this.m_BattleStepInfos = null;
    this.SSPWEL != null && this.SSPWEL.FOWLVG()
}

function GetReport() {
    return this.HFLJQS
}

function DecodeBattleStepInfos(n) {
    for (var f = (new $I.UDBZSB).SLPWTI(), t = 0, i, r, u, o; t < n.length;) {
        i = $I.PHKAYY.QTHHSD(n, t);
        t += 4;
        var s = i & 8191,
            h = i >> 13 & 8191,
            e = (new $I.UDBZSB).SLPWTI();
        for (r = 0; r < h; r++) u = $I.PHKAYY.QTHHSD(n, t), t += 4, o = u & 255, e.GXVKTX(o, u >> 8 & 4095);
        f.GXVKTX(s, e)
    }
    return f
}

function get_Id() {
    return this.PPBACP
}

function set_Id(n) {
    this.PPBACP != n && (this.PPBACP = n, this.PBEYXB = -1, this.HFLJQS = null, this.m_Complete = !1, this.SSPWEL != null && this.SSPWEL.FOWLVG())
}

function get_Version() {
    return this.PBEYXB
}

function get_StartStep() {
    return this.VMINIV
}

function get_AttackerBaseId() {
    return this.m_AttackerBaseId
}

function get_AttackerBaseName() {
    return this.m_AttackerBaseName
}

function get_AttackerBaseLevel() {
    return this.m_AttackerBaseLevel
}

function get_AttackerPlayerId() {
    return this.m_AttackerPlayerId
}

function get_AttackerPlayerName() {
    return this.m_AttackerPlayerName
}

function get_AttackerAllianceId() {
    return this.m_AttackerAllianceId
}

function get_AttackerAllianceName() {
    return this.m_AttackerAllianceName
}

function get_AttackerFaction() {
    return this.m_AttackerFaction
}

function get_AttackerItemVanishStep() {
    return this.m_AttackerItemVanishStep
}

function get_AttackerOffenseLevel() {
    return this.m_AttackerOffenseLevel
}

function get_AttackerLootContingentCommandPoints() {
    return this.m_AttackerLootContingentCommandPoints
}

function get_AttackerLootContingentRepairTime() {
    return this.m_AttackerLootContingentRepairTime
}

function get_DefenderBaseId() {
    return this.m_DefenderBaseId
}

function get_DefenderBaseCoordinates() {
    return this.m_DefenderBaseCoordinates
}

function get_DefenderBaseName() {
    return this.m_DefenderBaseName
}

function get_DefenderPlayerId() {
    return this.m_DefenderPlayerId
}

function get_DefenderPlayerName() {
    return this.m_DefenderPlayerName
}

function get_DefenderAllianceId() {
    return this.m_DefenderAllianceId
}

function get_DefenderAllianceName() {
    return this.m_DefenderAllianceName
}

function get_DefenderFaction() {
    return this.m_DefenderFaction
}

function get_DefenderBlockStep() {
    return this.m_DefenderBlockStep
}

function get_MaxDuration() {
    return this.m_MaxDuration
}

function get_Complete() {
    return this.m_Complete
}

function get_AttackTimeStamp() {
    return this.m_AttackTimeStamp
}

function get_ResourceLayout() {
    return this.m_ResourceLayout
}

function get_CombatSteps() {
    return this.m_CombatSteps
}

function get_AttackerModules() {
    return this.m_AttackerModules
}

function get_DefenderModules() {
    return this.m_DefenderModules
}

function get_BattleStepInfos() {
    return this.m_BattleStepInfos
}

function add_Change(n) {
    var t = {},
        i, r = this.SSPWEL,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.SSPWEL, t.$r = $I.TSJVQL.JXWJWI($I.LPYEIJ, u, i, t), this.SSPWEL = t.a, t.$r); while (r != i)
}

function remove_Change(n) {
    var t = {},
        i, r = this.SSPWEL,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.SSPWEL, t.$r = $I.TSJVQL.JXWJWI($I.LPYEIJ, u, i, t), this.SSPWEL = t.a, t.$r); while (r != i)
}

function add_OnReport(n) {
    var t = {},
        i, r = this.FBAJLW,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.FBAJLW, t.$r = $I.TSJVQL.JXWJWI($I.HTCLVF, u, i, t), this.FBAJLW = t.a, t.$r); while (r != i)
}

function remove_OnReport(n) {
    var t = {},
        i, r = this.FBAJLW,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.FBAJLW, t.$r = $I.TSJVQL.JXWJWI($I.HTCLVF, u, i, t), this.FBAJLW = t.a, t.$r); while (r != i)
} [object m_AttackerModulesObject][object m_DefenderModulesObject]