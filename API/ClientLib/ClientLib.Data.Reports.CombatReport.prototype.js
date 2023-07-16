function get_BaseId() {
    return this.BACLFV
}

function get_Id() {
    return this.PEDUSL
}

function get_IsRead() {
    return this.ECFTZS
}

function set_IsRead(n) {
    this.ECFTZS = n
}

function get_IsShared() {
    return this.NHDARK
}

function set_IsShared(n) {
    this.NHDARK = n
}

function get_OtherBaseId() {
    return this.PIBYXQ
}

function get_PlayerReportType() {
    return this.FPMOHP
}

function get_ReportOtherFaction() {
    return this.CHJCPR
}

function get_ReportOwnerFaction() {
    return this.TTUHBD
}

function get_ReportOwnerName() {
    return this.BVAYDY
}

function get_Time() {
    return this.XJIUPM
}

function get_Type() {
    return this.XQQAID
}

function get_ValidReplayData() {
    return this.VLAZJF
}

function SetData(n) {
    var t, c, l, a, i, p, r, w, u, b, f, k, e, d, o, g, v, y, s, h;
    if ($I.DYYQWM.prototype.ALPKKC.call(this, n), t = n.d, this.JFRGZI() <= 0 && (this.XJIUPM = t.t), this.YJFTYW() <= 0 && (this.BACLFV = t.abi), this.MBPAMO() <= 0 && (this.PIBYXQ = t.dbi), this.QDZCOS() == null && (this.BVAYDY = t.apn), this.TDWENY() == $I.KGPDNC.NotInitialized && (this.TTUHBD = t.apf), this.CQLIWI() == $I.KGPDNC.NotInitialized && (this.CHJCPR = t.dpf), this.GCMPLA() == null && (this.CQJGOT = t.dbn), this.OCZTBB() <= 0 && (this.BWEYHO = t.dbl), this.BHWAGG() != t.cr && (this.ICNYWQ = t.cr), (this.RFCYYE() < 0 || this.ZYSLNP() < 0) && (this.GSMMZR = t.dbc >> 16, this.HXJASW = t.dbc & 65535), this.KVLTFU = t.apn, this.JOBTEY = t.aan, this.RUVWFR = t.abn, this.TVVYNO = t.abi, this.OSIEJO = t.abl, this.IQCKYN = t.abc >> 16, this.MCDYOY = t.abc & 65535, this.HDDJQD = t.apf, this.IIMIDZ = t.abin, this.ELIWEN = t.abve, this.MEENLO = t.abai, this.WGVHKD = t.add, this.NUGWRJ = t.ash, this.LFCEWB = t.aeh, this.BZNCGM = t.sai, this.EQXQMK = t.sav, this.TUSPNJ = t.saa, this.IAXIUJ = 0, this.SHUYKY = 0, this.KIHDLM = t.alccp, this.ATAJCU = t.alcrt, this.FXHWDW = t.aol, this.DTEDKZ = t.dpf, this.RWSSWV = t.dpn, this.RGFZFE = t.dan, this.JYXDDX = t.dbi, this.BWEYHO = t.dbl, this.GSMMZR = t.dbc >> 16, this.HXJASW = t.dbc & 65535, this.PGRDTM = t.dbde, this.MLHYJX = t.ddd, this.XAQGCO = t.dsh, this.VTYQSN = t.deh, this.SPRRYR = t.dar, this.KIGBOW = t.dcy, this.GYCRLW = t.ddh, this.GIIOPZ = t.ddf, this.BBUVFY = t.dcc, this.XYOELD = t.dspa, this.VUMQNB = t.dspr, this.RWMTAE = t.dspi, this.LDHCKK = 0, this.FDARQX = t.dart, this.LUFIDQ = t.rt, this.WPCHDP = t.maf, this.XIHIYD(), t.arr != null)
        for (c = 0; c < t.arr.length; c++) this.JPUGXT.GXVKTX(t.arr[c].t, Math.floor(t.arr[c].a));
    if (t.arru != null)
        for (l = 0; l < t.arru.length; l++) this.MIAQJC.GXVKTX(t.arru[l].t, Math.floor(t.arru[l].a));
    if (t.arp != null)
        for (a = 0; a < t.arp.length; a++) this.RUODYH.GXVKTX(t.arp[a].t, Math.floor(t.arp[a].a));
    if (t.arci != null)
        for (i = 0; i < t.arci.length; i++) t.arci[i].t == 9 ? this.IAXIUJ = Math.max(this.IAXIUJ, Math.floor(t.arci[i].a)) : this.CDEOUY.XOHVCR(t.arci[i].t) ? (p = this.CDEOUY.d[t.arci[i].t], this.CDEOUY.UHNVSA(t.arci[i].t, p + Math.floor(t.arci[i].a))) : this.CDEOUY.GXVKTX(t.arci[i].t, Math.floor(t.arci[i].a)), this.ZJSWLY.GXVKTX(t.arci[i].t, Math.floor(t.arci[i].a));
    if (t.arcibr != null)
        for (r = 0; r < t.arcibr.length; r++) t.arcibr[r].t == 9 ? this.SHUYKY = Math.max(this.SHUYKY, Math.floor(t.arcibr[r].a)) : this.WFFZQI.XOHVCR(t.arcibr[r].t) ? (w = this.WFFZQI.d[t.arcibr[r].t], this.WFFZQI.UHNVSA(t.arcibr[r].t, w + Math.floor(t.arcibr[r].a))) : this.WFFZQI.GXVKTX(t.arcibr[r].t, Math.floor(t.arcibr[r].a)), this.BEDFVT.GXVKTX(t.arcibr[r].t, Math.floor(t.arcibr[r].a));
    if (t.arcv != null)
        for (u = 0; u < t.arcv.length; u++) t.arcv[u].t == 10 ? this.IAXIUJ = Math.max(this.IAXIUJ, Math.floor(t.arcv[u].a)) : this.CDEOUY.XOHVCR(t.arcv[u].t) ? (b = this.CDEOUY.d[t.arcv[u].t], this.CDEOUY.UHNVSA(t.arcv[u].t, b + Math.floor(t.arcv[u].a))) : this.CDEOUY.GXVKTX(t.arcv[u].t, Math.floor(t.arcv[u].a)), this.QMGRTU.GXVKTX(t.arcv[u].t, Math.floor(t.arcv[u].a));
    if (t.arcvbr != null)
        for (f = 0; f < t.arcvbr.length; f++) t.arcvbr[f].t == 10 ? this.SHUYKY = Math.max(this.SHUYKY, Math.floor(t.arcvbr[f].a)) : this.WFFZQI.XOHVCR(t.arcvbr[f].t) ? (k = this.WFFZQI.d[t.arcvbr[f].t], this.WFFZQI.UHNVSA(t.arcvbr[f].t, k + Math.floor(t.arcvbr[f].a))) : this.WFFZQI.GXVKTX(t.arcvbr[f].t, Math.floor(t.arcvbr[f].a)), this.LUVWHN.GXVKTX(t.arcvbr[f].t, Math.floor(t.arcvbr[f].a));
    if (t.arca != null)
        for (e = 0; e < t.arca.length; e++) t.arca[e].t == 8 ? this.IAXIUJ = Math.max(this.IAXIUJ, Math.floor(t.arca[e].a)) : this.CDEOUY.XOHVCR(t.arca[e].t) ? (d = this.CDEOUY.d[t.arca[e].t], this.CDEOUY.UHNVSA(t.arca[e].t, d + Math.floor(t.arca[e].a))) : this.CDEOUY.GXVKTX(t.arca[e].t, Math.floor(t.arca[e].a)), this.PYGHFI.GXVKTX(t.arca[e].t, Math.floor(t.arca[e].a));
    if (t.arcabr != null)
        for (o = 0; o < t.arcabr.length; o++) t.arcabr[o].t == 8 ? this.SHUYKY = Math.max(this.SHUYKY, Math.floor(t.arcabr[o].a)) : this.WFFZQI.XOHVCR(t.arcabr[o].t) ? (g = this.WFFZQI.d[t.arcabr[o].t], this.WFFZQI.UHNVSA(t.arcabr[o].t, g + Math.floor(t.arcabr[o].a))) : this.WFFZQI.GXVKTX(t.arcabr[o].t, Math.floor(t.arcabr[o].a)), this.AQWCZX.GXVKTX(t.arcabr[o].t, Math.floor(t.arcabr[o].a));
    if (t.drr != null)
        for (v = 0; v < t.drr.length; v++) this.WZBTOA.GXVKTX(t.drr[v].t, Math.floor(t.drr[v].a));
    if (t.dpl != null)
        for (y = 0; y < t.dpl.length; y++) this.BVYWSO.GXVKTX(t.dpl[y].t, Math.floor(t.dpl[y].a));
    if (t.drc != null)
        for (s = 0; s < t.drc.length; s++) this.SZTKVG.GXVKTX(t.drc[s].t, Math.floor(t.drc[s].a)), (t.drc[s].t == 9 || t.drc[s].t == 10 || t.drc[s].t == 8) && (this.LDHCKK = Math.max(this.LDHCKK, Math.floor(t.drc[s].a)));
    for (this.ULQNFY = $I.UDAQKL.DNVCCU($I.AQWFNH, t.air.length), h = 0; h < t.air.length; h++) this.ULQNFY[h] = (new $I.AQWFNH).NTNDFI(t.air[h].t, t.air[h].a);
    this.ZTQSHO = t.ni;
    this.WIOQKI = !0
}

function SetData(n) {
    var t, c, l, a, i, p, r, w, u, b, f, k, e, d, o, g, v, y, s, h;
    if ($I.DYYQWM.prototype.ALPKKC.call(this, n), t = n.d, this.JFRGZI() <= 0 && (this.XJIUPM = t.t), this.YJFTYW() <= 0 && (this.BACLFV = t.abi), this.MBPAMO() <= 0 && (this.PIBYXQ = t.dbi), this.QDZCOS() == null && (this.BVAYDY = t.apn), this.TDWENY() == $I.KGPDNC.NotInitialized && (this.TTUHBD = t.apf), this.CQLIWI() == $I.KGPDNC.NotInitialized && (this.CHJCPR = t.dpf), this.GCMPLA() == null && (this.CQJGOT = t.dbn), this.OCZTBB() <= 0 && (this.BWEYHO = t.dbl), this.BHWAGG() != t.cr && (this.ICNYWQ = t.cr), (this.RFCYYE() < 0 || this.ZYSLNP() < 0) && (this.GSMMZR = t.dbc >> 16, this.HXJASW = t.dbc & 65535), this.KVLTFU = t.apn, this.JOBTEY = t.aan, this.RUVWFR = t.abn, this.TVVYNO = t.abi, this.OSIEJO = t.abl, this.IQCKYN = t.abc >> 16, this.MCDYOY = t.abc & 65535, this.HDDJQD = t.apf, this.IIMIDZ = t.abin, this.ELIWEN = t.abve, this.MEENLO = t.abai, this.WGVHKD = t.add, this.NUGWRJ = t.ash, this.LFCEWB = t.aeh, this.BZNCGM = t.sai, this.EQXQMK = t.sav, this.TUSPNJ = t.saa, this.IAXIUJ = 0, this.SHUYKY = 0, this.KIHDLM = t.alccp, this.ATAJCU = t.alcrt, this.FXHWDW = t.aol, this.DTEDKZ = t.dpf, this.RWSSWV = t.dpn, this.RGFZFE = t.dan, this.JYXDDX = t.dbi, this.BWEYHO = t.dbl, this.GSMMZR = t.dbc >> 16, this.HXJASW = t.dbc & 65535, this.PGRDTM = t.dbde, this.MLHYJX = t.ddd, this.XAQGCO = t.dsh, this.VTYQSN = t.deh, this.SPRRYR = t.dar, this.KIGBOW = t.dcy, this.GYCRLW = t.ddh, this.GIIOPZ = t.ddf, this.BBUVFY = t.dcc, this.XYOELD = t.dspa, this.VUMQNB = t.dspr, this.RWMTAE = t.dspi, this.LDHCKK = 0, this.FDARQX = t.dart, this.LUFIDQ = t.rt, this.WPCHDP = t.maf, this.XIHIYD(), t.arr != null)
        for (c = 0; c < t.arr.length; c++) this.JPUGXT.GXVKTX(t.arr[c].t, Math.floor(t.arr[c].a));
    if (t.arru != null)
        for (l = 0; l < t.arru.length; l++) this.MIAQJC.GXVKTX(t.arru[l].t, Math.floor(t.arru[l].a));
    if (t.arp != null)
        for (a = 0; a < t.arp.length; a++) this.RUODYH.GXVKTX(t.arp[a].t, Math.floor(t.arp[a].a));
    if (t.arci != null)
        for (i = 0; i < t.arci.length; i++) t.arci[i].t == 9 ? this.IAXIUJ = Math.max(this.IAXIUJ, Math.floor(t.arci[i].a)) : this.CDEOUY.XOHVCR(t.arci[i].t) ? (p = this.CDEOUY.d[t.arci[i].t], this.CDEOUY.UHNVSA(t.arci[i].t, p + Math.floor(t.arci[i].a))) : this.CDEOUY.GXVKTX(t.arci[i].t, Math.floor(t.arci[i].a)), this.ZJSWLY.GXVKTX(t.arci[i].t, Math.floor(t.arci[i].a));
    if (t.arcibr != null)
        for (r = 0; r < t.arcibr.length; r++) t.arcibr[r].t == 9 ? this.SHUYKY = Math.max(this.SHUYKY, Math.floor(t.arcibr[r].a)) : this.WFFZQI.XOHVCR(t.arcibr[r].t) ? (w = this.WFFZQI.d[t.arcibr[r].t], this.WFFZQI.UHNVSA(t.arcibr[r].t, w + Math.floor(t.arcibr[r].a))) : this.WFFZQI.GXVKTX(t.arcibr[r].t, Math.floor(t.arcibr[r].a)), this.BEDFVT.GXVKTX(t.arcibr[r].t, Math.floor(t.arcibr[r].a));
    if (t.arcv != null)
        for (u = 0; u < t.arcv.length; u++) t.arcv[u].t == 10 ? this.IAXIUJ = Math.max(this.IAXIUJ, Math.floor(t.arcv[u].a)) : this.CDEOUY.XOHVCR(t.arcv[u].t) ? (b = this.CDEOUY.d[t.arcv[u].t], this.CDEOUY.UHNVSA(t.arcv[u].t, b + Math.floor(t.arcv[u].a))) : this.CDEOUY.GXVKTX(t.arcv[u].t, Math.floor(t.arcv[u].a)), this.QMGRTU.GXVKTX(t.arcv[u].t, Math.floor(t.arcv[u].a));
    if (t.arcvbr != null)
        for (f = 0; f < t.arcvbr.length; f++) t.arcvbr[f].t == 10 ? this.SHUYKY = Math.max(this.SHUYKY, Math.floor(t.arcvbr[f].a)) : this.WFFZQI.XOHVCR(t.arcvbr[f].t) ? (k = this.WFFZQI.d[t.arcvbr[f].t], this.WFFZQI.UHNVSA(t.arcvbr[f].t, k + Math.floor(t.arcvbr[f].a))) : this.WFFZQI.GXVKTX(t.arcvbr[f].t, Math.floor(t.arcvbr[f].a)), this.LUVWHN.GXVKTX(t.arcvbr[f].t, Math.floor(t.arcvbr[f].a));
    if (t.arca != null)
        for (e = 0; e < t.arca.length; e++) t.arca[e].t == 8 ? this.IAXIUJ = Math.max(this.IAXIUJ, Math.floor(t.arca[e].a)) : this.CDEOUY.XOHVCR(t.arca[e].t) ? (d = this.CDEOUY.d[t.arca[e].t], this.CDEOUY.UHNVSA(t.arca[e].t, d + Math.floor(t.arca[e].a))) : this.CDEOUY.GXVKTX(t.arca[e].t, Math.floor(t.arca[e].a)), this.PYGHFI.GXVKTX(t.arca[e].t, Math.floor(t.arca[e].a));
    if (t.arcabr != null)
        for (o = 0; o < t.arcabr.length; o++) t.arcabr[o].t == 8 ? this.SHUYKY = Math.max(this.SHUYKY, Math.floor(t.arcabr[o].a)) : this.WFFZQI.XOHVCR(t.arcabr[o].t) ? (g = this.WFFZQI.d[t.arcabr[o].t], this.WFFZQI.UHNVSA(t.arcabr[o].t, g + Math.floor(t.arcabr[o].a))) : this.WFFZQI.GXVKTX(t.arcabr[o].t, Math.floor(t.arcabr[o].a)), this.AQWCZX.GXVKTX(t.arcabr[o].t, Math.floor(t.arcabr[o].a));
    if (t.drr != null)
        for (v = 0; v < t.drr.length; v++) this.WZBTOA.GXVKTX(t.drr[v].t, Math.floor(t.drr[v].a));
    if (t.dpl != null)
        for (y = 0; y < t.dpl.length; y++) this.BVYWSO.GXVKTX(t.dpl[y].t, Math.floor(t.dpl[y].a));
    if (t.drc != null)
        for (s = 0; s < t.drc.length; s++) this.SZTKVG.GXVKTX(t.drc[s].t, Math.floor(t.drc[s].a)), (t.drc[s].t == 9 || t.drc[s].t == 10 || t.drc[s].t == 8) && (this.LDHCKK = Math.max(this.LDHCKK, Math.floor(t.drc[s].a)));
    for (this.ULQNFY = $I.UDAQKL.DNVCCU($I.AQWFNH, t.air.length), h = 0; h < t.air.length; h++) this.ULQNFY[h] = (new $I.AQWFNH).NTNDFI(t.air[h].t, t.air[h].a);
    this.ZTQSHO = t.ni;
    this.WIOQKI = !0
}

function IsForgottenFortress() {
    return this.SUELAL() == $I.GBKWPP.NPCRaid && $I.XOJOCY.UVXLMK(this.GCMPLA()) == 6
}

function get_AttackerPlayerName() {
    return this.KVLTFU
}

function get_AttackerAllianceName() {
    return this.JOBTEY
}

function get_AttackerBaseName() {
    return this.RUVWFR
}

function get_AttackerBaseId() {
    return this.TVVYNO
}

function get_AttackerBaseLevel() {
    return this.OSIEJO
}

function get_AttackerBaseXCoord() {
    return this.IQCKYN
}

function get_AttackerBaseYCoord() {
    return this.MCDYOY
}

function get_AttackerFaction() {
    return this.HDDJQD
}

function get_AttackerInfantryBonus() {
    return this.IIMIDZ
}

function get_AttackerVehicleBonus() {
    return this.ELIWEN
}

function get_AttackerAircraftBonus() {
    return this.MEENLO
}

function get_AttackerDamageDone() {
    return this.WGVHKD
}

function get_AttackerStartHealthPercent() {
    return this.NUGWRJ
}

function get_AttackerEndHealthPercent() {
    return this.LFCEWB
}

function get_AttackerSupportInfantryDamage() {
    return this.BZNCGM
}

function get_AttackerSupportVehicleDamage() {
    return this.EQXQMK
}

function get_AttackerSupportAirDamage() {
    return this.TUSPNJ
}

function get_AttackerSupportDamage() {
    return this.BZNCGM + this.EQXQMK + this.TUSPNJ
}

function get_AttackerLootContingentCommandPoints() {
    return this.KIHDLM
}

function get_AttackerLootContingentRepairTime() {
    return this.ATAJCU
}

function get_AttackerOffenseLevel() {
    return this.FXHWDW
}

function get_DefenderFaction() {
    return this.DTEDKZ
}

function get_DefenderPlayerName() {
    return this.RWSSWV
}

function get_DefenderAllianceName() {
    return this.RGFZFE
}

function get_DefenderBaseName() {
    return this.CQJGOT
}

function get_DefenderBaseId() {
    return this.JYXDDX
}

function get_DefenderBaseLevel() {
    return this.BWEYHO
}

function get_DefenderBaseXCoord() {
    return this.GSMMZR
}

function get_DefenderBaseYCoord() {
    return this.HXJASW
}

function get_DefenderStructureBonus() {
    return this.PGRDTM
}

function get_DefenderDamageDone() {
    return this.MLHYJX
}

function get_DefenderStartHealthPercent() {
    return this.XAQGCO
}

function get_DefenderEndHealthPercent() {
    return this.VTYQSN
}

function get_DefenderAutoRepairPercent() {
    return this.SPRRYR
}

function get_DefenderConYardPercent() {
    return this.KIGBOW
}

function get_DefenderDefHQPercent() {
    return this.GYCRLW
}

function get_DefenderDefFacilityPercent() {
    return this.GIIOPZ
}

function get_DefenderCombatCenterPercent() {
    return this.BBUVFY
}

function get_DefenderSupportAir() {
    return this.XYOELD
}

function get_DefenderSupportArt() {
    return this.VUMQNB
}

function get_DefenderSupportIon() {
    return this.RWMTAE
}

function get_CombatResult() {
    return this.ICNYWQ
}

function get_NotificationId() {
    return this.ZTQSHO
}

function get_ReportType() {
    return this.LUFIDQ
}

function get_AttackerItemRewards() {
    return this.ULQNFY
}

function get_DefenderAutoRepairTime() {
    return this.FDARQX
}

function get_MultiAttackerFactor() {
    return this.WPCHDP
}

function GetAttackerResourceReward(n) {
    var t = 0;
    return this.JPUGXT.XOHVCR(n) && (t = this.JPUGXT.d[n]), t
}

function GetAttackerResourceRewardBeforeChallengeReward(n) {
    var t = -1;
    return this.MIAQJC.XOHVCR(n) && (t = this.MIAQJC.d[n]), t
}

function GetAttackerResourcePlunder(n) {
    var t = 0;
    return this.RUODYH.XOHVCR(n) && (t = this.RUODYH.d[n]), t
}

function GetAttackerMaxRepairTime() {
    return this.IAXIUJ
}

function GetAttackerMaxRepairTimeBeforeRewards() {
    return this.SHUYKY
}

function GetAttackerRepairCosts(n) {
    var t = 0;
    return this.CDEOUY.XOHVCR(n) && (t = this.CDEOUY.d[n]), t
}

function GetAttackerInfantryRepairCosts() {
    return this.ZJSWLY
}

function GetAttackerVehicleRepairCosts() {
    return this.QMGRTU
}

function GetAttackerAirRepairCosts() {
    return this.PYGHFI
}

function GetAttackerRepairCostsBeforeRewards(n) {
    var t = 0;
    return this.WFFZQI.XOHVCR(n) && (t = this.WFFZQI.d[n]), t
}

function GetAttackerInfantryRepairCostsBeforeRewards() {
    return this.BEDFVT
}

function GetAttackerVehicleRepairCostsBeforeRewards() {
    return this.LUVWHN
}

function GetAttackerAirRepairCostsBeforeRewards() {
    return this.AQWCZX
}

function GetAttackerTotalResourceReceived(n) {
    var t = 0;
    return this.JPUGXT.XOHVCR(n) && (t = this.JPUGXT.d[n]), this.RUODYH.XOHVCR(n) && (t += this.RUODYH.d[n]), t
}

function GetDefenderResourceReward(n) {
    var t = 0;
    return this.WZBTOA.XOHVCR(n) && (t = this.WZBTOA.d[n]), t
}

function GetDefenderResourceLostToPlunder(n) {
    var t = 0;
    return this.BVYWSO.XOHVCR(n) && (t = this.BVYWSO.d[n]), t
}

function GetDefenderRepairCosts(n) {
    var t = 0;
    return this.SZTKVG.XOHVCR(n) && (t = this.SZTKVG.d[n]), t
}

function GetDefenderMaxRepairTime() {
    return this.LDHCKK
}

function GetDefenderTotalResourceCosts(n) {
    var t = 0;
    return this.WZBTOA.XOHVCR(n) && (t = this.WZBTOA.d[n]), this.BVYWSO.XOHVCR(n) && (t -= this.BVYWSO.d[n]), t
}