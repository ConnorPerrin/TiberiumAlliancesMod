function SetPosition(n, t) {
    this.DPTETL = n;
    this.JAWTND = t
}

function get_Benchmark() {
    return this.BPTBFM
}

function set_Benchmark(n) {
    this.BPTBFM = n
}

function GetNumBuildings() {
    return this.JUQQBI.CNTFWO().c
}

function get_CityArmyFormationsManager() {
    return this.NMWAFF
}

function get_Buildings() {
    return this.JUQQBI.CNTFWO()
}

function get_CityBuildingsData() {
    return this.JUQQBI
}

function get_CityUnitsData() {
    return this.JXEPHX
}

function get_CityRepairData() {
    return this.AHRPSS
}

function get_RepairOffenseResources() {
    return this.UHRMYF
}

function get_FreeOffenseHeadCount() {
    return this.JXEPHX.APJWMK()
}

function get_TotalOffenseHeadCount() {
    return this.JXEPHX.CUWHSG()
}

function get_UnitLimitOffense() {
    return this.JXEPHX.PGKSFL()
}

function get_FreeDefenseHeadCount() {
    return this.JXEPHX.SRSSUF()
}

function get_TotalDefenseHeadCount() {
    return this.JXEPHX.FEZJSJ()
}

function get_UnitLimitDefense() {
    return this.JXEPHX.FXACHU()
}

function GetRecruitableUnitsByPlacementType(n) {
    return this.JXEPHX != null ? this.JXEPHX.JVUGOG(n) : null
}

function GetUnitRecruitedInfoByCoord(n, t, i) {
    return this.JXEPHX.VMLZIH(n, t, i)
}

function get_TechPlaceableInfo() {
    return this.MVNZYS
}

function get_BonusLayoutForSelectedTech() {
    return this.MOTSVT
}

function set_Width(n) {
    this.VTBMXK = n
}

function get_Width() {
    return this.VTBMXK
}

function set_Height(n) {
    this.RAHILU = n
}

function get_Height() {
    return this.RAHILU
}

function set_PosX(n) {
    this.DPTETL = n
}

function get_PosX() {
    return this.DPTETL
}

function set_PosY(n) {
    this.JAWTND = n
}

function get_PosY() {
    return this.JAWTND
}

function set_Id(n) {
    this.RTWXGZ = n
}

function get_Id() {
    return this.RTWXGZ
}

function get_Valid() {
    return this.ZKKRZJ != -2
}

function get_OutOfRangeGhostBase() {
    return this.ZKKRZJ == -4
}

function get_OutOfRange() {
    return this.ZKKRZJ == -3
}

function get_CoordId() {
    return this.JAWTND << 16 | this.DPTETL
}

function set_Version(n) {
    this.ZKKRZJ = n;
    this.ZKKRZJ == -2 && this.HTNYOU != null && this.HTNYOU.ALLMAP(this)
}

function get_Version() {
    return this.ZKKRZJ
}

function set_Name(n) {
    this.UGPQGF = n
}

function get_Name() {
    return this.UGPQGF
}

function get_OwnerName() {
    return this.SQMEGF
}

function get_OwnerAllianceName() {
    return this.JCGXAY
}

function get_HasIncommingAttack() {
    return this.BGXGYC
}

function get_HasOutgoingAttack() {
    return this.QYUNWC
}

function get_LockdownEndStep() {
    return this.NGCYVS
}

function get_FoundStep() {
    return this.NZRIXW
}

function get_IsEndgameRevengeTarget() {
    return this.SDIEGX
}

function get_IsPossibleEndgameRevengeTarget() {
    return this.SKUHQK
}

function get_IsLocked() {
    var t = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG(),
        n = this.JLEOSE();
    return this.UBTDFB() || (n = $I.CVRAYR.VAMLQD().VYDVFH().UTCQWX(this.UQGPFX()) == n ? this.JLEOSE() - $I.CVRAYR.VAMLQD().TZZENG().QMPXDI() : this.JLEOSE() - $I.CVRAYR.VAMLQD().TZZENG().JTTQDG()), t < n
}

function get_ProtectionEndStep() {
    return this.ZKQGYG
}

function get_isProtected() {
    return $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() < this.ZKQGYG
}

function get_SupportAlertStartStep() {
    return this.MJXUEQ
}

function get_SupportAlertEndStep() {
    return this.AFUJXX
}

function get_MoveCooldownEndStep() {
    return this.UNNSMO
}

function GetImpactStep() {
    var n = $I.CVRAYR.VAMLQD().RWLPVY().GRKIWK(this.ZFEMVW(), this.IIKXGY());
    return n != null && n.RKSLJD() == $I.BLNKMP.Impact ? n.HKZTHI() : -1
}

function get_MoveRestictionEndStep() {
    var t = (new $I.RTVHKJ).NSBVXE(-1, -1),
        i = this.MKYHUC.d,
        n = {
            k: null,
            v: null
        };
    for (var r in i) n.k = r, n.v = i[r], t.v < n.v && (t = n);
    return t.v
}

function GetMoveRestrictionForCoord(n, t) {
    var c = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG(),
        u = $I.CVRAYR.VAMLQD().TZZENG().HJRBOF(),
        r = -1,
        f = -1,
        e = this.MKYHUC.d,
        i = {
            k: null,
            v: null
        };
    for (var o in e)
        if (i.k = o, i.v = e[o], i.v > c) {
            var l = i.k & 65535,
                a = i.k >> 16 & 65535,
                s = n - a,
                h = t - l,
                v = s * s + h * h;
            v > u * u && r < i.v && (f = i.k, r = i.v)
        } return (new $I.RTVHKJ).NSBVXE(f, r)
}

function get_MoveRestrictions() {
    return this.MKYHUC
}

function get_RecoveryEndStep() {
    return this.JVLGIC
}

function get_DefenseAutoRepairStartStep() {
    return this.QFJANY
}

function get_isAlerted() {
    return $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() < this.AFUJXX
}

function get_IsCenterHub() {
    return this.WLWBIV == $I.KGPDNC.NPCFortress
}

function get_IsGhostMode() {
    return this.GJOLCR
}

function get_PlayerHasSeenGhostPopup() {
    return this.HRJNTM
}

function set_PlayerHasSeenGhostPopup(n) {
    this.HRJNTM = n
}

function get_hasCooldown() {
    return this.UNNSMO > $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG()
}

function get_hasMoveRestriction() {
    return this.FXJGEM() > $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG()
}

function get_hasRecovery() {
    return this.JVLGIC > $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG()
}

function get_IsDamaged() {
    return this.JUQQBI.INLYQD()
}

function set_CityFaction(n) {
    this.WLWBIV = n
}

function get_CityFaction() {
    return this.WLWBIV
}

function IsNPC() {
    switch (this.WLWBIV) {
        case $I.KGPDNC.FORFaction:
            return !0;
        case $I.KGPDNC.NPCBase:
            return !0;
        case $I.KGPDNC.NPCCamp:
            return !0;
        case $I.KGPDNC.NPCOutpost:
            return !0;
        case $I.KGPDNC.NPCFortress:
            return !0;
        case $I.KGPDNC.NPCEvent:
            return !0
    }
    return !1
}

function get_CityCreditsProduction() {
    return this.MZUPTR
}

function get_StepsRequiredForResourcesCachedPredictions() {
    return this.ZVVQBA
}

function get_StepsRequiredForResourcesCachedPredictionsLastCachedStepTime() {
    return this.BUMRGU
}

function GetBuildingSlotCount() {
    return this.JUQQBI.WDPMHZ()
}

function GetBuildingSlotLimit() {
    return this.JUQQBI.FVQAQO()
}

function setResourceLayout(n) {
    this.AYFKHP = n
}

function addFakeTerrain(n, t, i) {
    this.DRUZSY == null && (this.DRUZSY = (new $I.UDBZSB).SLPWTI());
    this.DRUZSY.UHNVSA(t * this.VTBMXK + n, i)
}

function setResourcesToMax() {
    var n, t, i;
    for (this.PATUBY == null && (this.PATUBY = (new $I.UDBZSB).SLPWTI()), t = 0; t < 12; t++) this.PATUBY.XOHVCR(t) ? this.PATUBY.d[t].Base = this.PATUBY.d[t].Max : (i = (n = (new $I.PWMLSA).SLPWTI(), n.Type = t, n.Base = 1e6, n.Step = 0, n.Delta = 1e6, n.ExtraBonusDelta = 0, n.Max = 1e6, n), this.PATUBY.GXVKTX(t, i))
}

function GetBuildingTypeMaxLvlByTechName(n) {
    var t = $I.YZBSQQ.DGTWTH(n, $I.CVRAYR.VAMLQD().ONGTRQ().WMEKEJ());
    return this.FIOQDI(t)
}

function GetBuildingTypeMaxLvl(n) {
    var t = {},
        i = 0;
    return this.ZAEYOA != null && (t.$r = this.ZAEYOA.ZOXRAI(n, t), i = t.b, t.$r) ? i : 0
}

function GetOrUpdateBuildingCache(n) {
    var t = this.QGIOVX(n);
    return t == null && (this.YFMBKC(null, !1), t = this.QGIOVX(n)), t
}

function GetBuildingCache(n) {
    var t = {},
        i;
    return this.XQIUAQ != null && (i = null, t.$r = this.XQIUAQ.ZOXRAI(n, t), i = t.b, t.$r) ? i : null
}

function GetResourceFieldBonusCache(n, t) {
    var i, r;
    if (this.SBRELB != null)
        for (i = 0; i < this.SBRELB.l.length; i++)
            if (r = this.SBRELB.l[i], r.CoordX == n && r.CoordY == t) return this.SBRELB.l[i];
    return null
}

function GetResourceType(n, t) {
    if (this.AYFKHP != null || this.DRUZSY != null) {
        if (n < this.LYILCA || n > this.VTBMXK - this.LYILCA || t < this.LYILCA || t > this.RAHILU - this.LYILCA) return $I.QKSJOJ.NONE;
        if (this.DRUZSY == null) return this.AYFKHP[t - this.LYILCA] >> 3 * (n - this.LYILCA) & $I.QKSJOJ.WATER;
        if (this.DRUZSY.XOHVCR(t * this.VTBMXK + n)) return this.DRUZSY.d[t * this.VTBMXK + n]
    }
    return $I.QKSJOJ.NONE
}

function GetNextAppointmentInfo() {
    return this.JUQQBI.NUSTXY()
}

function UpdateEntitiesDynamicHealth() {
    this.JUQQBI != null && this.JUQQBI.GEPMUM();
    this.JXEPHX != null && this.JXEPHX.MSVNLQ()
}

function CanRepairAll() {
    return this.AHRPSS.OUIQYW($I.SOIZAH.UseCurrent)
}

function CanRepairAllOffense() {
    return this.AHRPSS.OUIQYW($I.SOIZAH.ArmySetup)
}

function RepairAll() {
    return this.AHRPSS.AJRROO($I.SOIZAH.UseCurrent)
}

function RepairAllOffense() {
    return this.AHRPSS.AJRROO($I.SOIZAH.ArmySetup)
}

function CalculateTradeCostToCoord(n, t, i) {
    var r = $I.CVRAYR.VAMLQD().TZZENG().OKWBLG(),
        u = $I.CVRAYR.VAMLQD().TZZENG().ZJBNSR(),
        f = i / 1e3,
        e = (r + Math.floor(this.HRRLUH(n, t) + .5) * u) * f;
    return Math.floor(Math.ceil(e))
}

function CalculateAttackCommandPointCostToCoord(n, t, i, r) {
    var e = 0,
        u;
    if (n > 0 && t > 0) {
        u = $I.CVRAYR.VAMLQD().TZZENG();
        $I.CVRAYR.VAMLQD().ZBVLXL().GIQURF(n, t);
        var s = $I.CVRAYR.VAMLQD().UXQPUS().MLWLAZ(n, t),
            o = 0,
            f = 0;
        o = u.WKQZUE() && i ? u.GVODOM() : u.GITDYW();
        switch (s) {
            case $I.YMAUZP.Own:
            case $I.YMAUZP.Alliance:
                if (!u.WKQZUE() || !i) {
                    f = u.FVKAET();
                    break
                }
                f = u.UVTYPY();
                break;
            default:
                f = u.WKQZUE() && i ? u.MONZEW() : u.LYYUSQ()
        }
        e = o + this.HRRLUH(n, t) * f
    }
    return r ? Math.floor($I.WYSPZN.ABPFIA(e, 1)) : Math.floor(e)
}

function GetCityMoveCooldownTime(n, t) {
    var i = this.HRRLUH(n, t),
        r = $I.CVRAYR.VAMLQD().TZZENG().KENIVP(this.KCWGSH());
    return Math.floor(i * r) + $I.CVRAYR.VAMLQD().TZZENG().ADUZFK()
}

function MoveTo(n, t) {
    this.UBTDFB() && this.KPOPDB() == $I.BSOKEY.OK && ClientLib.Net.CommunicationManager.GetInstance().SendCommand("CityMove", {
        cityId: this.UQGPFX(),
        coordX: n,
        coordY: t
    }, (new $I.JNOYHJ).TFDQYD(this, this.EPLLJJ), null, !0)
}

function CollectAllResources() {
    this.UBTDFB() && this.JUQQBI.YSOGKV() && ClientLib.Net.CommunicationManager.GetInstance().SendCommand("CollectAllResources", {
        cityid: this.UQGPFX()
    }, (new $I.JNOYHJ).TFDQYD(this, this.KXKSFI), null, !0)
}

function CanTrade() {
    var n = $I.LTWYZW.None;
    return this.YKKGOE() && (n |= $I.LTWYZW.IsAttacked), this.BJTMCR() && (n |= $I.LTWYZW.IsGhostMode), this.QGOTUP() && (n |= $I.LTWYZW.IsAttacked), n
}

function CanMove() {
    var n = $I.BSOKEY.OK;
    return !this.BJTMCR() && this.QGOTUP() && (n |= $I.BSOKEY.isBeingAttacked), this.TSHNME() && (n |= $I.BSOKEY.isAttacking), !this.BJTMCR() && this.TQDKJQ() && (n |= $I.BSOKEY.FailMovementRecoveryTime), !this.BJTMCR() && this.KCWGSH() < $I.CVRAYR.VAMLQD().TZZENG().PCELEI() && (n |= $I.BSOKEY.InsufficientBaseLevel), this.BJTMCR() && this.DDVAFA() > $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() + $I.CVRAYR.VAMLQD().TZZENG().LSMEAD() * 60 && (n |= $I.BSOKEY.FailBaseRecoveryTime), n
}

function Rename(n) {
    this.UBTDFB() && ClientLib.Net.CommunicationManager.GetInstance().SendCommand("CityRename", {
        cityId: this.UQGPFX(),
        name: n
    }, (new $I.JNOYHJ).TFDQYD(this, this.PLEYYF), null, !0)
}

function RecallDedicatedSupport() {
    ClientLib.Net.CommunicationManager.GetInstance().SendCommand("SetDedicatedSupport", {
        sourceBaseId: this.UQGPFX(),
        targetBaseId: this.UQGPFX()
    }, (new $I.JNOYHJ).TFDQYD(this, this.XGYPBU), null, !0)
}

function SetDedicatedSupport(n) {
    this.UBTDFB() && this.POMLTS != n && !this.VUAHHF() && ClientLib.Net.CommunicationManager.GetInstance().SendCommand("SetDedicatedSupport", {
        sourceBaseId: this.UQGPFX(),
        targetBaseId: n
    }, (new $I.JNOYHJ).TFDQYD(this, this.XGYPBU), null, !0)
}

function SelfTrade(n, t, i) {
    var r = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(n);
    this.UBTDFB() && r != null && r.TJMXQV() == $I.LTWYZW.None && this.TJMXQV() == $I.LTWYZW.None && ($I.CVRAYR.VAMLQD().ONGTRQ().VHJTRS(-this.LMCPQB(r.OFYSUK(), r.FQVDES(), i)), this.IZXACA(t, i), r.IZXACA(t, -i), ClientLib.Net.CommunicationManager.GetInstance().SendCommand("SelfTrade", {
        targetCityId: this.UQGPFX(),
        sourceCityId: n,
        resourceType: t,
        amount: i
    }, (new $I.JNOYHJ).TFDQYD(this, this.HSMJCU), null, !0))
}

function GetResourceData(n) {
    return $I.TYCUAI.ADXODK(n, this, !0)
}

function GetResourceCount(n) {
    return $I.TYCUAI.FDJEIX(this.AEXHHC(n))
}

function GetResourceCountStep(n, t) {
    return $I.TYCUAI.YQRGEN(this.AEXHHC(n), t)
}

function SetResourceCount(n, t, i) {
    switch (n) {
        case $I.OATHMF.Gold:
        case $I.OATHMF.PlayerLevel:
        case $I.OATHMF.ResearchPoints:
            $I.CVRAYR.VAMLQD().ONGTRQ().AVKHBE(n, t, i);
            break;
        case $I.OATHMF.RepairChargeAir:
        case $I.OATHMF.RepairChargeInf:
        case $I.OATHMF.RepairChargeVeh:
            break;
        default:
            this.PATUBY != null && this.PATUBY.XOHVCR(n) && (this.PATUBY.d[n].Step = t, this.PATUBY.d[n].Base = i);
            return
    }
}

function GetResourceGrowPerHour(n, t, i) {
    return $I.TYCUAI.VLOWRS($I.TYCUAI.ADXODK(n, this, i), t)
}

function GetResourceBonusGrowPerHour(n) {
    return $I.TYCUAI.ZWTDWH(this.AEXHHC(n))
}

function GetResourceMaxStorage(n) {
    return $I.TYCUAI.QMNEPZ(this.AEXHHC(n))
}

function GetResourceFreeStorage(n) {
    return Math.max(0, this.RKBKIH(n) - this.KURZHM(n))
}

function GetResourceStorageFullStep(n) {
    var t = this.AEXHHC(n),
        i;
    return t != null && !t.NoMaxStorage ? (i = $I.TYCUAI.QMNEPZ(t), $I.TYCUAI.ULULZO(t, i)) : -1
}

function GetPOIBonusFromResourceType(n, t) {
    var r = 0,
        i, u;
    return (!this.DXTFMH() || t) && (i = $I.CVRAYR.VAMLQD().FMKUPK(), i != null && i.DVTRNX() && (u = $I.CVRAYR.VAMLQD().GRIWFQ(), r = i.TUBQXB(n))), r
}

function AddResources(n, t) {
    var i = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG(),
        r;
    $I.TYCUAI.YADLQO(n) && this.UHRMYF != null ? this.UHRMYF.JNALDW(i, t, n) : (r = this.CXCSQO(n, i) + t, this.AVKHBE(n, i, Math.max(0, r)))
}

function CanStoreAllResources(n) {
    var i, t, r;
    if (n == null) return !1;
    for (i = 0; i < n.length; i++)
        if (t = n[i], t != null && t.t > 0 && (r = this.AEXHHC(t.t), !$I.TYCUAI.NVKOPF(t.t) && r != null && Math.floor(r.Base + t.c) > r.Max)) return !1;
    return !0
}

function HasEnoughResources(n) {
    var t;
    if (n == null) return !1;
    for (t = 0; t < n.length; t++)
        if (this.KURZHM(n[t].Type) - n[t].Count < 0) return !1;
    return !0
}

function GetMissingResources(n) {
    var i, t, u, f, r;
    if (n == null) return null;
    for (i = (new $I.UCRMVA).SLPWTI(), t = 0; t < n.length; t++) u = n[t].Count - this.KURZHM(n[t].Type), u > 0 && i.l.push((new $I.DBJKAB).IJGFXA(n[t].Type, u));
    for (f = $I.UDAQKL.DNVCCU($I.DBJKAB, i.l.length), r = 0; r < i.l.length; r++) f[r] = i.l[r];
    return f
}

function GetStepsUntilResourceCountIsAvailable(n, t) {
    var r = 0,
        i = this.AEXHHC(n),
        u, f;
    if (i != null) {
        if (i.Delta == 0) return -1;
        u = t - this.KURZHM(n);
        u > 0 && i.Delta > 0 && (f = u / i.Delta, f > r && (r = f))
    }
    return r
}

function UpdateStepsRequiredForResourcesCachedPredictions(n) {
    var t, u;
    if (n == null) return -1;
    var f = 0,
        e = 0,
        r = n.d,
        i = {
            k: null,
            v: null
        };
    for (t in r) i.k = t, i.v = r[t], (i.k == $I.OATHMF.Tiberium || i.k == $I.OATHMF.Crystal || i.k == $I.OATHMF.Power || i.k == $I.OATHMF.Gold) && f++;
    var r = $I.UDAQKL.DNVCCU($I.DBJKAB, f),
        o = n.d,
        t = {
            k: null,
            v: null
        };
    for (u in o) t.k = u, t.v = o[u], (t.k == $I.OATHMF.Tiberium || t.k == $I.OATHMF.Crystal || t.k == $I.OATHMF.Power || t.k == $I.OATHMF.Gold) && (r[e] = (new $I.DBJKAB).IJGFXA(t.k, t.v), e++);
    return this.ZLKEWI(r)
}

function GetCollectableResourcePackageAmount() {
    var t = 0,
        i, n;
    for (i in {
            d: this.CNTFWO()
        }.d.d) n = this.CNTFWO().d[i].JEIKLM(), n > 0 && (t += n);
    return t
}

function GetNumberOfFreeResourceFieldsInCity() {
    return this.UKZUCS - this.JUQQBI.CAEAFY()
}

function IsPosInsideLayout(n, t) {
    return n >= this.LYILCA && n < this.VTBMXK - this.LYILCA && t >= this.LYILCA && t < this.RAHILU - this.LYILCA
}

function IsPosOccupied(n, t) {
    return this.YYTEKF != null && this.KXKROC(n, t) ? this.YYTEKF[n][t].AreaType != $I.RDNPSZ.AreaIsFree : !0
}

function IsResourcePosOccupied(n, t) {
    var i;
    return this.YYTEKF == null || !this.KXKROC(n, t) ? !0 : (i = this.YYTEKF[n][t], i.TerrainFieldType != $I.QKSJOJ.TIBERIUM && i.TerrainFieldType != $I.QKSJOJ.CRYSTAL || i.BuildingIndex >= 0)
}

function IsBuildingFreeToBePlaced(n, t, i) {
    var r = $I.BUEVKL.QGLUJV().ITRZSX(i);
    if (r == null) return !1;
    if (r.t == 11) {
        if (this.YNGYPW(n, t)) return !1
    } else if (this.XLOESL(n, t)) return !1;
    return !0
}

function AddBuildingFromPos(n, t, i, r) {
    var e = this.YYTEKF[n][t],
        u, f;
    if (e.AreaType == $I.RDNPSZ.AreaIsOccupied && e.BuildingIndex >= 0 && (u = this.JUQQBI.CNTFWO().d[e.BuildingIndex], i < 0 || i == u.JSHHHZ())) {
        for (f = 0; f < r.d.l.length; f++)
            if (u.UQGPFX() == r.d.l[f].UQGPFX()) return;
        r.d.l.push(u)
    }
}

function GetSurroundingBuildings(n, t, i, r) {
    var u = {},
        o = (new $I.UCRMVA).SLPWTI(),
        c, l, s, h, f, e;
    switch (i) {
        case 1:
            for (c = t - 1; c <= t + 1; c++)
                for (l = n - 1; l <= n + 1; l++) this.KXKROC(l, c) && (c != t || l != n) && (u.d = o, u.$r = this.INCZTG(l, c, r, u), o = u.d, u.$r);
            return o;
        case 2:
        case 3:
            return o;
        case 4:
            for (s = t - 1; s <= t + 2; s++)
                for (h = n - 1; h <= n + 2; h++) this.KXKROC(h, s) && (s != t || h != n) && (s != t || h != n + 1) && (s != t + 1 || h != n) && (s != t + 1 || h != n + 1) && (u.d = o, u.$r = this.INCZTG(h, s, r, u), o = u.d, u.$r);
            return o;
        case 5:
            for (f = t - 2; f <= t + 2; f++)
                for (e = n - 2; e <= n + 2; e++) this.KXKROC(e, f) && (f != t - 2 || e != n - 2) && (f != t - 2 || e != n + 2) && (f != t + 2 || e != n - 2) && (f != t + 2 || e != n + 2) && (f != t || e != n) && (f != t + 1 || e != n) && (f != t || e != n + 1) && (f != t - 1 || e != n) && (f != t - 1 || e != n - 1) && (u.d = o, u.$r = this.INCZTG(e, f, r, u), o = u.d, u.$r);
            return o
    }
    return o
}

function GetBuildingDetailViewInfo_ForLevelRangeDelta_HorribleStuff(n, t) {
    var u, i = {},
        r = null,
        o, f, e;
    if (n != null) {
        if (o = $I.BUEVKL.QGLUJV().ITRZSX(n.JSHHHZ()), o == null) return r;
        r = (u = (new $I.DFEMEZ).SLPWTI(), u.TechId = n.JSHHHZ(), u.TechLevel = n.REBAFD(), u);
        i.c = r.NextLevel;
        i.$r = this.APRJLT(o, n.REBAFD() + 1, i);
        r.NextLevel = i.c;
        i.$r;
        n.REBAFD() > 0 && (i.d = r.OwnProdModifiers, i.e = r.ProvidingToModifiers, i.$r = this.TKSXUN(n, n.REBAFD(), !1, i), r.OwnProdModifiers = i.d, r.ProvidingToModifiers = i.e, i.$r);
        f = null;
        e = null;
        r.NextLevel != null && (i.d = f, i.e = e, i.$r = this.TKSXUN(n, t - 1, !0, i), f = i.d, e = i.e, i.$r);
        i.a = r;
        i.$r = this.ZWINMC(f, e, i);
        r = i.a;
        i.$r
    }
    return r
}

function GetBuildingDetailViewInfo(n) {
    var u, t = {},
        i = null,
        r = n,
        o, f, e;
    if (r != null) {
        if (o = $I.BUEVKL.QGLUJV().ITRZSX(r.JSHHHZ()), o == null) return i;
        i = (u = (new $I.DFEMEZ).SLPWTI(), u.TechId = r.JSHHHZ(), u.TechLevel = r.REBAFD(), u);
        t.c = i.NextLevel;
        t.$r = this.APRJLT(o, r.REBAFD() + 1, t);
        i.NextLevel = t.c;
        t.$r;
        r.REBAFD() > 0 && (t.d = i.OwnProdModifiers, t.e = i.ProvidingToModifiers, t.$r = this.TKSXUN(r, r.REBAFD(), !1, t), i.OwnProdModifiers = t.d, i.ProvidingToModifiers = t.e, t.$r);
        f = null;
        e = null;
        i.NextLevel != null && (t.d = f, t.e = e, t.$r = this.TKSXUN(r, r.REBAFD(), !0, t), f = t.d, e = t.e, t.$r);
        t.a = i;
        t.$r = this.ZWINMC(f, e, t);
        i = t.a;
        t.$r
    }
    return i
}

function InvokeBattle(n, t, i) {
    var s, e;
    if (n == null || this.LNTFBK(n, !1) != $I.XAMVFA.OK) return !1;
    var r = {},
        o = n.ITKPJL().XCMMNK(this.UQGPFX()).TCIXOX(),
        u = $I.UDAQKL.DNVCCU($I.UALDFQ, o.c),
        f = 0;
    for (s in {
            d: o
        }.d.d) e = o.d[s], u[f] = {}, u[f].i = e.UQGPFX(), u[f].x = e.EZVHOT(), u[f++].y = e.JXTDIO();
    return r.d = this.UQGPFX(), r.a = n.UQGPFX(), r.u = u, r.s = 0, $I.CVRAYR.VAMLQD().ONGTRQ().TEATNL(-n.XNIANM(this.OFYSUK(), this.FQVDES(), this.VOPFYX() == $I.KGPDNC.GDIFaction || this.VOPFYX() == $I.KGPDNC.NODFaction, !0)), n.MMJBTY() != null && n.MMJBTY().YMDBBH(), ClientLib.Net.CommunicationManager.GetInstance().SendCommand("InvokeBattle", {
        battleSetup: r
    }, t, i, !0), !0
}

function CheckInvokeBattle(n, t) {
    var r = $I.CVRAYR.VAMLQD().UXQPUS(),
        u = $I.CVRAYR.VAMLQD().RWLPVY().VQAPBW(),
        i;
    return u.MUHOGQ() == this.UQGPFX() ? (i = u.CFWTZD(n.OFYSUK(), n.FQVDES()), r.EIGIZR(Math.floor(i[0]), Math.floor(i[1]), t)) : r.EIGIZR(this.OFYSUK(), this.FQVDES(), t)
}

function CanFound() {
    var n = $I.AAVPRT.OK;
    return this.BJTMCR() && (n |= $I.AAVPRT.FailGhostMode), this.KCWGSH() < $I.CVRAYR.VAMLQD().TZZENG().AJAWHE() && (n |= $I.AAVPRT.FailBaseNotMinLevel), this.NMMOJT() != 1 && (n |= $I.AAVPRT.FailConstructionYardDamaged), n
}

function get_AvailableUnitQueueSpace() {
    return 6
}

function set_OwnerId(n) {
    this.ECKELX = n
}

function get_OwnerId() {
    return this.ECKELX
}

function get_OwnerAllianceId() {
    return this.EHOSKL
}

function set_OwnerAllianceId(n) {
    this.EHOSKL = n
}

function get_PlayerId() {
    return this.ECKELX
}

function get_PlayerName() {
    return $I.CVRAYR.VAMLQD().ONGTRQ().KPQBNW()
}

function get_AllianceId() {
    return $I.CVRAYR.VAMLQD().ONGTRQ().SZZNBJ()
}

function get_AllianceName() {
    return $I.CVRAYR.VAMLQD().FMKUPK().KPQBNW()
}

function get_BaseLevel() {
    return this.m_Level
}

function set_BaseLevel(n) {
    this.m_Level = n
}

function get_LvlBase() {
    return this.KIDEVG
}

function get_LvlDefense() {
    return this.IRFAMK
}

function get_LvlOffense() {
    return this.QVWUPV
}

function get_ConstructionYardLevel() {
    return this.IJOEHC($I.VFLLZL.Construction_Yard)
}

function get_CommandCenterLevel() {
    return this.IJOEHC($I.VFLLZL.Command_Center)
}

function get_X() {
    return this.DPTETL
}

function get_Y() {
    return this.JAWTND
}

function get_ActiveModules() {
    return this.OSIYMT
}

function get_SupportData() {
    var n = {},
        t;
    return (n.$r = $I.CVRAYR.VAMLQD().OCXRRT().QKWSNZ().ZOXRAI(this.UQGPFX(), n), t = n.b, n.$r) ? t : null
}

function get_SupportWeapon() {
    var n, t = this.HTGVTE();
    return t != null && (n = $I.BUEVKL.QGLUJV().VXAMCA().supportTechs[t.GIRXAB()], n == undefined ? !1 : !0) ? n : null
}

function GetCommandCenterCondition() {
    return this.NIKAPW($I.YZBSQQ.DGTWTH(3, $I.CVRAYR.VAMLQD().ONGTRQ().WMEKEJ()))
}

function GetDefenseHQCondition() {
    return this.NIKAPW($I.YZBSQQ.DGTWTH(4, $I.CVRAYR.VAMLQD().ONGTRQ().WMEKEJ()))
}

function GetConstructionYardCondition() {
    return this.NIKAPW($I.YZBSQQ.DGTWTH(0, $I.CVRAYR.VAMLQD().ONGTRQ().WMEKEJ()))
}

function GetBuildingCondition(n) {
    var t = this.JUQQBI.CSORWP(n);
    return t != null ? t.DGXVOW() : -1
}

function GetBuildingsConditionInPercent() {
    var n = 0,
        t = 0,
        r = this.JUQQBI.CNTFWO(),
        u, i;
    for (u in {
            d: r
        }.d.d) i = r.d[u], n += i.OCYOUI(), t += i.HVDISQ();
    return n == 0 && t == 0 ? 0 : Math.floor(n * 100 / t)
}

function GetDefenseConditionInPercent() {
    var n, t, r, i;
    if (this.JXEPHX == null || this.JXEPHX.OCUXSL() == null) return -1;
    n = 0;
    t = 0;
    for (r in {
            d: this.JXEPHX.OCUXSL()
        }.d.d) i = this.JXEPHX.OCUXSL().d[r], n += i.OCYOUI(), t += i.HVDISQ();
    return n == 0 && t == 0 ? -1 : Math.floor(n * 100 / t)
}

function GetOffenseConditionInPercent() {
    var n, t, r, i;
    if (this.JXEPHX == null) return -1;
    n = 0;
    t = 0;
    for (r in {
            d: this.JXEPHX.TKJJPS()
        }.d.d) i = this.JXEPHX.TKJJPS().d[r], n += i.OCYOUI(), t += i.HVDISQ();
    return n == 0 && t == 0 ? -1 : Math.floor(n * 100 / t)
}

function GetFullConditionInPercent() {
    var n = 0,
        t = 0,
        e = this.JUQQBI.CNTFWO(),
        o, i, s, r, h, u, f;
    for (o in {
            d: e
        }.d.d) i = e.d[o], n += i.OCYOUI(), t += i.HVDISQ();
    if (this.JXEPHX != null) {
        for (s in {
                d: this.JXEPHX.TKJJPS()
            }.d.d) r = this.JXEPHX.TKJJPS().d[s], n += r.OCYOUI(), t += r.HVDISQ();
        for (h in {
                d: this.JXEPHX.OCUXSL()
            }.d.d) u = this.JXEPHX.OCUXSL().d[h], n += u.OCYOUI(), t += u.HVDISQ()
    }
    return n == 0 && t == 0 ? -1 : (f = n * 100 / t, f < 1) ? 1 : Math.floor(f)
}

function IsOwnBase() {
    return this.ECKELX == $I.CVRAYR.VAMLQD().ONGTRQ().UQGPFX()
}

function IsAllianceBase() {
    var n = $I.CVRAYR.VAMLQD().ONGTRQ();
    return this.ECKELX == n.UQGPFX() ? !1 : this.EHOSKL > 0 && n.SZZNBJ() > 0 && this.EHOSKL == n.SZZNBJ()
}

function get_TerritoryRadius() {
    return this.YLQRKU
}

function get_TerritoryWeight() {
    return this.YLQRKU
}

function get_SupportDedicatedBaseId() {
    return this.POMLTS
}

function get_SupportDedicatedBaseName() {
    return this.m_SupportDedicatedBaseName
}

function get_SupportDedicatedBaseCoordId() {
    return this.ASDBNL
}

function get_SupportDedicatedStep() {
    return this.MAKHZS
}

function get_AllianceDefenseBonus() {
    return this.DXTFMH() ? 0 : this.XRODTU
}

function get_HubCenterAttackLockdownEndStep() {
    return this.TBQFTL
}

function HasAttackFormation(n) {
    return this.WWCYSP != null && this.WWCYSP.XOHVCR(n) && this.WWCYSP.d[n] != null && this.WWCYSP.d[n].length > 0
}

function GetAttackFormationCount(n) {
    var i = 0,
        t;
    if (this.CCWKVR(n))
        for (t = 0; t < this.WWCYSP.d[n].length; t++) this.WWCYSP.d[n][t] != null && i++;
    return i
}

function GetAttackFormation(n, t) {
    var i = null;
    return this.WWCYSP != null && this.WWCYSP.XOHVCR(n) && this.WWCYSP.d[n] != null && this.WWCYSP.d[n].length > t && t >= 0 && (i = this.WWCYSP.d[n][t]), i
}

function LoadAttackFormation(n) {
    var c = n,
        u, o, f, s, r, i, t, h, e;
    if (c != null) {
        for (u = this.ITKPJL().MKVJHK(c.tbi), r = u.LJVWCM().l, f = 0; f < r.length; f++) o = r[f], o.SJYCCX(-1), o.ULQAQC(-1), o.DYLRSE(null), o.ZUOHHP(null);
        for (f = c.u, s = 0; s < f.length; s++) r = f[s], t = u.RGPTJC(r.sui), t != null && (i = u.GJHWLC(r.x, r.y), t.EBHQQH(r.ia), t.SJYCCX(r.x), t.ULQAQC(r.y), i != null && (i.KDLBGS() && $I.GGTBLR.DJCIEY(i.TOIJBS().YBCOGL(), t.TOIJBS().YBCOGL()) ? (t.DYLRSE(i), i.ZUOHHP(t)) : t.KDLBGS() && $I.GGTBLR.DJCIEY(t.TOIJBS().YBCOGL(), i.TOIJBS().YBCOGL()) ? (i.DYLRSE(t), t.ZUOHHP(i)) : (i.SJYCCX(-1), i.ULQAQC(-1))));
        for (i = u.LJVWCM().l, h = 0; h < i.length; h++)
            if (t = i[h], t.EZVHOT() < 0 || t.JXTDIO() < 0)
                for (e = 0; e < $I.XOJOCY.FXUOPY() * $I.XOJOCY.LIOROG(); e++) u.GJHWLC(e % $I.XOJOCY.FXUOPY(), Math.floor(e / $I.XOJOCY.FXUOPY())) == null && (t.SJYCCX(e % $I.XOJOCY.FXUOPY()), t.ULQAQC(Math.floor(e / $I.XOJOCY.FXUOPY())));
        u.OOXISB()
    }
}

function BeginSaveCurrentFormation(n, t, i, r) {
    var o, f, u, e;
    if (t == 0 || r == null) return !1;
    for (o = this.ITKPJL().MKVJHK(t), f = $I.UDAQKL.DNVCCU($I.WHYQTO, o.LJVWCM().l.length), u = 0; u < o.LJVWCM().l.length; u++) e = o.LJVWCM().l[u], f[u] = {}, f[u].sui = e.UQGPFX(), f[u].x = e.EZVHOT(), f[u].y = e.JXTDIO(), f[u].ia = e.OYXZWI();
    return this.XQOWLG(t, i, r, f, n), !0
}

function add_VisualChange(n) {
    var t = {},
        i, r = this.VXEKVR,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.VXEKVR, t.$r = $I.TSJVQL.JXWJWI($I.EOFDUJ, u, i, t), this.VXEKVR = t.a, t.$r); while (r != i)
}

function remove_VisualChange(n) {
    var t = {},
        i, r = this.VXEKVR,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.VXEKVR, t.$r = $I.TSJVQL.JXWJWI($I.EOFDUJ, u, i, t), this.VXEKVR = t.a, t.$r); while (r != i)
}

function add_VisualChangeEntity(n) {
    var t = {},
        i, r = this.SNTJLM,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.SNTJLM, t.$r = $I.TSJVQL.JXWJWI($I.OMTVGX, u, i, t), this.SNTJLM = t.a, t.$r); while (r != i)
}

function remove_VisualChangeEntity(n) {
    var t = {},
        i, r = this.SNTJLM,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.SNTJLM, t.$r = $I.TSJVQL.JXWJWI($I.OMTVGX, u, i, t), this.SNTJLM = t.a, t.$r); while (r != i)
}

function add_UnitQueueChange(n) {
    var t = {},
        i, r = this.RTGSEI,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.RTGSEI, t.$r = $I.TSJVQL.JXWJWI($I.VYKQUV, u, i, t), this.RTGSEI = t.a, t.$r); while (r != i)
}

function remove_UnitQueueChange(n) {
    var t = {},
        i, r = this.RTGSEI,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.RTGSEI, t.$r = $I.TSJVQL.JXWJWI($I.VYKQUV, u, i, t), this.RTGSEI = t.a, t.$r); while (r != i)
}

function add_UnitOrderChange(n) {
    var t = {},
        i, r = this.EEKLMM,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.EEKLMM, t.$r = $I.TSJVQL.JXWJWI($I.VYKQUV, u, i, t), this.EEKLMM = t.a, t.$r); while (r != i)
}

function remove_UnitOrderChange(n) {
    var t = {},
        i, r = this.EEKLMM,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.EEKLMM, t.$r = $I.TSJVQL.JXWJWI($I.VYKQUV, u, i, t), this.EEKLMM = t.a, t.$r); while (r != i)
}

function add_Change(n) {
    var t = {},
        i, r = this.KMNPDO,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.KMNPDO, t.$r = $I.TSJVQL.JXWJWI($I.VYKQUV, u, i, t), this.KMNPDO = t.a, t.$r); while (r != i)
}

function remove_Change(n) {
    var t = {},
        i, r = this.KMNPDO,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.KMNPDO, t.$r = $I.TSJVQL.JXWJWI($I.VYKQUV, u, i, t), this.KMNPDO = t.a, t.$r); while (r != i)
}

function add_SupportDedicatedBaseChange(n) {
    var t = {},
        i, r = this.YOIKEO,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.YOIKEO, t.$r = $I.TSJVQL.JXWJWI($I.VYKQUV, u, i, t), this.YOIKEO = t.a, t.$r); while (r != i)
}

function remove_SupportDedicatedBaseChange(n) {
    var t = {},
        i, r = this.YOIKEO,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.YOIKEO, t.$r = $I.TSJVQL.JXWJWI($I.VYKQUV, u, i, t), this.YOIKEO = t.a, t.$r); while (r != i)
}

function add_Destroy(n) {
    var t = {},
        i, r = this.HTNYOU,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.HTNYOU, t.$r = $I.TSJVQL.JXWJWI($I.VYKQUV, u, i, t), this.HTNYOU = t.a, t.$r); while (r != i)
}

function remove_Destroy(n) {
    var t = {},
        i, r = this.HTNYOU,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.HTNYOU, t.$r = $I.TSJVQL.JXWJWI($I.VYKQUV, u, i, t), this.HTNYOU = t.a, t.$r); while (r != i)
}

function add_SendFormationDone(n) {
    var t = {},
        i, r = this.FHQRLA,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.FHQRLA, t.$r = $I.TSJVQL.JXWJWI($I.KUVHBT, u, i, t), this.FHQRLA = t.a, t.$r); while (r != i)
}

function remove_SendFormationDone(n) {
    var t = {},
        i, r = this.FHQRLA,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.FHQRLA, t.$r = $I.TSJVQL.JXWJWI($I.KUVHBT, u, i, t), this.FHQRLA = t.a, t.$r); while (r != i)
}