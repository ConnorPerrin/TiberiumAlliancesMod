function get_City() {
    return this.QCBKQI
}

function get_CoordX() {
    return this.TVGSQS.OFYSUK()
}

function set_CoordX(n) {
    this.TVGSQS.BTKBFX(n)
}

function get_CoordY() {
    return this.TVGSQS.FQVDES()
}

function set_CoordY(n) {
    this.TVGSQS.NKQMUE(n)
}

function get_Coords() {
    return this.TVGSQS
}

function set_Coords(n) {
    this.TVGSQS = n
}

function get_CurrentLevel() {
    var n;
    return this.OGQNFM ? (n = $I.CVRAYR.VAMLQD().RWLPVY().VQAPBW().VFXJWC(), this.QCBKQI.KCWGSH() - n) : this.FNULLP
}

function get_CurrentDamage() {
    return Math.max(this.HVDISQ() - this.OCYOUI(), 0)
}

function get_IsAlive() {
    return this.OCYOUI() > 0
}

function get_IsDamaged() {
    return this.OCYOUI() < this.HVDISQ()
}

function get_HitpointsPercent() {
    return this.HVDISQ() <= 0 ? 1 : Math.min(1, this.OCYOUI() / this.HVDISQ())
}

function get_MaxLevelReached() {
    return this.EMJELS()
}

function get_Health() {
    return this.QCBKQI.BJTMCR() ? this.HVDISQ() * Math.max(Math.min(20 - this.REBAFD(), 8), 1) * .1 : this.EDFHKI
}

function set_Health(n) {
    this.EDFHKI = n
}

function get_Id() {
    return this.BPGBDG
}

function get_MdbUnitId() {
    return this.NJPKMO
}

function get_UnitGameData_Obj() {
    return this.OAOHEA
}

function GetResourceCostForFullRepair() {
    var t = (new $I.UDBZSB).SLPWTI(),
        i, r, u, n, f;
    if (this.IAGCLF != null) {
        if ((i = this.DNTZMM(), i <= 0) || (r = $I.DUXUSX.SKQKQT(this.IAGCLF, i, this.QCBKQI.UEFYNJ().CANDGA(), this.QCBKQI.UEFYNJ().QXLFNH(), this.QCBKQI.UEFYNJ().DDCMYG(), this.QCBKQI.UEFYNJ().QSRSTB()), t = (new $I.UDBZSB).SLPWTI(), r == null)) return t;
        u = r.d;
        n = {
            k: null,
            v: null
        };
        for (f in u) n.k = f, n.v = u[f], t.UHNVSA(n.k, n.v)
    }
    return t
}

function get_UnitLevelRepairRequirements() {
    return this.IAGCLF
}

function HasReachedMaxLevel() {
    return this.REBAFD() >= $I.HGGVCG.RQAMMY
}

function IsOverMaxLevelAfter(n) {
    return this.REBAFD() + n > $I.HGGVCG.RQAMMY
}

function get_TransportedCityEntity() {
    return this.SDSZHE
}

function set_TransportedCityEntity(n) {
    this.SDSZHE = n
}

function get_IsTransportedCityEntity() {
    return this.UQWEVY
}

function set_IsTransportedCityEntity(n) {
    this.UQWEVY = n
}

function get_MdbBuildingId() {
    return this.NKOFRA
}

function get_MainModifierTypeId() {
    var n = -1;
    return this.FKPZDG == 11 || this.FKPZDG == 2 || this.FKPZDG == 1 ? this.RJMRZT : this.FKPZDG == 15 || this.FKPZDG == 16 ? this.QUFTDE : (this.FKPZDG == 0 && (n = 14), n)
}

function GetQuickDisplayEndingLocaByModifierType(n) {
    var t = null;
    if (n == $I.PQWGOX.TiberiumBonusTimeToComplete || n == $I.PQWGOX.TiberiumProduction) return $I.XOJOCY.CLMQKO("tnf:tiberium per h");
    if (n == $I.PQWGOX.CrystalBonusTimeToComplete || n == $I.PQWGOX.CrystalProduction) return $I.XOJOCY.CLMQKO("tnf:crystals per h");
    if (n == $I.PQWGOX.PowerBonusTimeToComplete || n == $I.PQWGOX.PowerProduction) return $I.XOJOCY.CLMQKO("tnf:power per h");
    if (n == $I.PQWGOX.CreditsBonusTimeToComplete || n == $I.PQWGOX.CreditsProduction) return $I.XOJOCY.CLMQKO("tnf:credits per h");
    if (n == $I.PQWGOX.TiberiumStorage || n == $I.PQWGOX.CrystalStorage) return $I.XOJOCY.CLMQKO("tnf:tiberium/crystal storage");
    if (n == $I.PQWGOX.PowerStorage) return $I.XOJOCY.CLMQKO("tnf:storage");
    if (n == $I.PQWGOX.BuildingSlots) return $I.XOJOCY.CLMQKO("tnf:construction slots");
    if (n == $I.PQWGOX.HeadCountArmy) return $I.XOJOCY.CLMQKO("tnf:army recruitment slots");
    if (n == $I.PQWGOX.HeadCountDefense) return $I.XOJOCY.CLMQKO("tnf:defense recruitment slots");
    if (n == $I.PQWGOX.RepairChargeBaseStorage || n == $I.PQWGOX.RepairProductionPerHourBase || n == $I.PQWGOX.RepairPotentialOffenseStorage || n == $I.PQWGOX.RepairProductionPerHourOffense || n == $I.PQWGOX.RepairEfficiencyBase || n == $I.PQWGOX.RepairEfficiencyAir || n == $I.PQWGOX.RepairEfficiencyInf || n == $I.PQWGOX.RepairEfficiencyVeh) {
        if (this.FKPZDG == 4) return $I.XOJOCY.CLMQKO("tnf:defense recruitment slots");
        if (this.FKPZDG == 5) return $I.XOJOCY.CLMQKO("tnf:inf repair time");
        if (this.FKPZDG == 6) return $I.XOJOCY.CLMQKO("tnf:tnk repair time");
        this.FKPZDG == 7 && (t = $I.XOJOCY.CLMQKO("tnf:air repair time"))
    }
    return t
}

function get_QuickDisplayEndingLoca() {
    var n = "";
    return this.FKPZDG == 11 || this.FKPZDG == 2 || this.FKPZDG == 1 ? this.MFVQQF() : this.FKPZDG == 15 ? $I.XOJOCY.CLMQKO("tnf:tiberium/crystal storage") : this.FKPZDG == 16 ? $I.XOJOCY.CLMQKO("tnf:storage") : this.FKPZDG == 0 ? $I.XOJOCY.CLMQKO("tnf:construction slots") : this.FKPZDG == 3 ? $I.XOJOCY.CLMQKO("tnf:army recruitment slots") : this.FKPZDG == 4 ? $I.XOJOCY.CLMQKO("tnf:defense recruitment slots") : this.FKPZDG == 5 ? $I.XOJOCY.CLMQKO("tnf:inf repair time") : this.FKPZDG == 6 ? $I.XOJOCY.CLMQKO("tnf:tnk repair time") : (this.FKPZDG == 7 && (n = $I.XOJOCY.CLMQKO("tnf:air repair time")), n)
}

function get_CollectResourceTypeLoca() {
    var n = "";
    return this.LGISUH() == $I.OATHMF.Tiberium ? $I.XOJOCY.CLMQKO("tnf:tiberium per h") : this.LGISUH() == $I.OATHMF.Crystal ? $I.XOJOCY.CLMQKO("tnf:crystals per h") : this.LGISUH() == $I.OATHMF.Power ? $I.XOJOCY.CLMQKO("tnf:power per h") : (this.LGISUH() == $I.OATHMF.Gold && (n = $I.XOJOCY.CLMQKO("tnf:credits per h")), n)
}

function get_ProducesPackages() {
    return this.ICEVYY != $I.OATHMF.None
}

function get_Type() {
    return this.NKOFRA
}

function get_TechName() {
    return this.FKPZDG
}

function get_IsBarrack() {
    return this.FKPZDG == 5
}

function get_IsFactory() {
    return this.FKPZDG == 6
}

function get_IsAirport() {
    return this.FKPZDG == 7
}

function get_isConstructionYard() {
    return this.FKPZDG == 0
}

function get_TechGameData_Obj() {
    return this.IRCPKH
}

function get_ModifierStates() {
    return this.QUNUFR
}

function get_EfficiencyDownModifierStates() {
    return this.EUMKPG
}

function get_CollectMaxPackageSize() {
    return this.AKPWOT
}

function get_CollectResourceType() {
    return this.ICEVYY
}

function get_ReadyToCollect() {
    return this.LZJWWQ >= 0 && $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() >= this.LZJWWQ
}

function get_BonusPackageFullStep() {
    return this.ZOMKLQ
}

function get_BonusPackageReadyStep() {
    return this.LZJWWQ
}

function get_PackageProductionPerHour() {
    var n = 0;
    return this.ERGBNT() > 0 && (n = this.ERGBNT() / this.KPEGPF() * $I.CVRAYR.VAMLQD().GRIWFQ().OBDULR()), n
}

function GetCurrentPackageResourceCollected() {
    var t = 0,
        n, i;
    return this.ZNCNKN.Step > 0 && (n = this.SFCDGV(), i = Math.floor(n / this.AKPWOT), t = n - i * this.AKPWOT), t
}

function GetQuickDisplayProductionInfo() {
    var n = this.QCBKQI.QGIOVX(this.UQGPFX());
    return n != null && n.DetailViewInfo != null ? this.QGIAAJ(n.DetailViewInfo) : null
}

function GetQuickDisplayProductionInfoForDetails(n) {
    return n != null && n.OwnProdModifiers != null ? this.RRQKMD(n, this.ZDLOUK()) : null
}

function GetQuickDisplayProductionInfoForDetailsForModifierType(n, t) {
    var r = {},
        i = null,
        o, e;
    if (n == null || n.OwnProdModifiers == null || t < 0) return null;
    var f = t,
        l = f == 2 || f == 5,
        h = n.OwnProdModifiers,
        u = null;
    if ((r.$r = h.ZOXRAI(f, r), u = r.b, r.$r) || !l || (o = $I.PQWGOX.CrystalStorage, f == o && (o = $I.PQWGOX.TiberiumStorage), r.$r = h.ZOXRAI(o, r), u = r.b, r.$r), u != null) {
        var a = -5,
            v = !1,
            c = u.LocalIconPath,
            s = this.QCBKQI.SGRQBS().SDYYFU(f);
        if (i = (new $I.PLBONN).SLPWTI(), this.XUEQWE() && this.ZDLOUK() == t) i = this.ZUGKNM(h);
        else if (s == $I.FDECFP.None) l && (c = "baseview/neutral/gui/icn_free_resource_field.png", a = 5), i.IsDamaged = u.IsEfficiencyDown, i.CurrentLvlValue = u.TotalValue, i.NextLvlValue = u.TotalValue + u.NewLvlDelta;
        else {
            v = !0;
            c = "baseview/neutral/gui/icn_repair_off_points.png";
            i.CurrentLvlValue = this.QCBKQI.SGRQBS().ZQKRKZ(s, !1);
            i.NextLvlValue = this.QCBKQI.SGRQBS().ZQKRKZ(s, !0);
            e = "";
            switch (s) {
                case $I.FDECFP.Infantry:
                    e = $I.XOJOCY.CLMQKO("tnf:infantry repair type");
                    break;
                case $I.FDECFP.Vehicle:
                    e = $I.XOJOCY.CLMQKO("tnf:vehicle repair type");
                    break;
                case $I.FDECFP.Aircraft:
                    e = $I.XOJOCY.CLMQKO("tnf:aircraft repair type")
            }
            i.NoUnitsForRepairTypeInBase = $I.XOJOCY.CZIVOS("tnf:no %1 units in army", e)
        }
        i.TypeName = t == this.ZDLOUK() ? this.ZNTGZE() : this.TLUKZK(t);
        i.IconPath = c;
        i.IconOffsetY = a;
        i.IsRepairTimerValue = v
    }
    return i
}

function CanDemolish() {
    return this.IRCPKH != null && this.IRCPKH.da && !this.QCBKQI.QGOTUP()
}

function GetBuildingQuickDisplayModifierType() {
    var n = this.EYWLWG();
    return n == -1 && (this.FKPZDG == 3 && (n = 22), this.FKPZDG == 4 && (n = 31), this.FKPZDG == 7 && (n = 39), this.FKPZDG == 5 && (n = 41), this.FKPZDG == 6 && (n = 43)), n
}

function get_Health() {
    return this.QCBKQI.BJTMCR() ? this.HVDISQ() * Math.max(Math.min(20 - this.REBAFD(), 8), 1) * .1 : this.EDFHKI
}

function set_Health(n) {
    this.EDFHKI = n
}

function get_PackageProduction() {
    return this.ZNCNKN
}