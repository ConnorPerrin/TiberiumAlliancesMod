function Dispose() {
    var n;
    if ($I.OCOQEE.prototype.NSFOQM.call(this), $I.ILHIOR.GILABD().OWJKHX((new $I.OZCGGF).TFDQYD(this, this.YGEEHD)), $I.ILHIOR.GILABD().CKIYPO((new $I.DCWFNQ).TFDQYD(this, this.YGEEHD)), $I.ILHIOR.GILABD().YTXMGR((new $I.SBFJAP).TFDQYD(this, this.UNSODK)), this.RACVDK(), this.WAFJBF != null && (this.WAFJBF.NSFOQM(), this.WAFJBF = null), this.SGJLCN != null && (this.SGJLCN.NSFOQM(), this.SGJLCN = null), this.XSZETV != null && (this.XSZETV.NSFOQM(), this.XSZETV = null), this.NXTVNN != null) {
        if (this.QFEORT)
            for (n = 0; n < this.NXTVNN.length; n++) this.BWOBJA.NEHMEK(this.NXTVNN[n]), this.NXTVNN[n] = null;
        this.NXTVNN = null;
        this.QFEORT = !1
    }
}

function UiUpdate(n) {
    var t = !1,
        r, i;
    switch ($I.ILHIOR.GILABD().QIBGFH()) {
        case $I.HYIXRB.Repair:
        case $I.HYIXRB.Upgrade:
        case $I.HYIXRB.Sell:
            break;
        case $I.HYIXRB.Move:
            this.DHCNUK && (r = this.CREPQC, this.CREPQC = this.KAFGDX().ORQLTY(), this.PQUECX && r != this.CREPQC && this.KDPNSC.VAWZQX(this), this.CREPQC && (t = !0));
            break;
        default:
            this.DHCNUK && (t = !0)
    }
    i = !1;
    t && (i = !0, this.JCPAXN && this.KDPNSC.VAWZQX(this));
    this.SGJLCN != null && this.SGJLCN.GJYLBS() || (this.XSZETV != null && this.XSZETV.CXESLP(n), this.WAFJBF != null && this.WAFJBF.IGKBEZ(i))
}

function VisUpdate(n, t) {
    $I.OCOQEE.prototype.ETWFFN.call(this, n, t)
}

function UpdateZoom() {
    this.XSZETV != null && this.XSZETV.BBIZWD()
}

function get_CityEntityData() {
    return this.RBWWPQ
}

function get_IsTransportingUnit() {
    return this.RBWWPQ.ZHIRJH() == $I.ZNGMPE.Garrison && this.RBWWPQ.KGLYJZ() != null
}

function get_IsOwnBase() {
    return this.DHCNUK
}

function Dispose() {
    var n;
    if ($I.OCOQEE.prototype.NSFOQM.call(this), $I.ILHIOR.GILABD().OWJKHX((new $I.OZCGGF).TFDQYD(this, this.YGEEHD)), $I.ILHIOR.GILABD().CKIYPO((new $I.DCWFNQ).TFDQYD(this, this.YGEEHD)), $I.ILHIOR.GILABD().YTXMGR((new $I.SBFJAP).TFDQYD(this, this.UNSODK)), this.RACVDK(), this.WAFJBF != null && (this.WAFJBF.NSFOQM(), this.WAFJBF = null), this.SGJLCN != null && (this.SGJLCN.NSFOQM(), this.SGJLCN = null), this.XSZETV != null && (this.XSZETV.NSFOQM(), this.XSZETV = null), this.NXTVNN != null) {
        if (this.QFEORT)
            for (n = 0; n < this.NXTVNN.length; n++) this.BWOBJA.NEHMEK(this.NXTVNN[n]), this.NXTVNN[n] = null;
        this.NXTVNN = null;
        this.QFEORT = !1
    }
}

function get_X() {
    return this.KAFGDX().EZVHOT() * this.KDPNSC.VVGOEM() + this.PKBGXZ()
}

function get_Y() {
    return this.KAFGDX().JXTDIO() * this.KDPNSC.MWRYXH() + this.XXDFTB()
}

function get_BuildingDetails() {
    return this.KAFGDX()
}

function get_VisObjectType() {
    return $I.CDNXVQ.CityBuildingType
}

function get_ReadyToCollect() {
    return this.KAFGDX().FUNCRB()
}

function GetSelectionInfo() {
    return $I.UDAQKL.DNVCCU($I.KQYCNT, 0)
}

function GetHighlightInfo() {
    return null
}

function get_ObjectSelectOrder() {
    return $I.ETSALJ.CityBuilding
}

function ExecuteCommand(n) {
    var t;
    switch (n) {
        case $I.VPNCTE.UpgradeBuilding:
            return this.KAFGDX().SBEBUU() ? (this.KAFGDX().WAFIRT(), this.KAFGDX().REBAFD() == 0 ? (this.KAFGDX().JSHHHZ() != 32 && $I.ILHIOR.GILABD().RYKGLY("FactionSound/BuildingUpgradedToLvl1"), this.BXUVHX($I.BUEVKL.QGLUJV().VXAMCA().citylayer.be, 4)) : ($I.ILHIOR.GILABD().RYKGLY("FactionSound/UpgradeComple"), $I.ILHIOR.GILABD().VROCEG("audio/ui/Upgrade"), this.BXUVHX($I.BUEVKL.QGLUJV().VXAMCA().citylayer.ue, 6)), !0) : !1;
        case $I.VPNCTE.DemolishBuilding:
            return this.KAFGDX().RQYSXG() && this.KAFGDX().REBAFD() > 0 && $I.ILHIOR.GILABD().RYKGLY("FactionSound/StructureSold"), this.JPHEUV().HGUZCL(), !0;
        case $I.VPNCTE.CollectResource:
            return t = this.KAFGDX().SAEZEM(), this.WAFJBF != null && this.WAFJBF.MMEIIC(t), !0;
        case $I.VPNCTE.RepairBuilding:
            return this.KAFGDX().FPDQQI(!1), !0;
        case $I.VPNCTE.MoveEntity:
            return $I.PCMEZM.EYZIBP().CBESZQ(this.YBNRRW, 0, 0), this.YNAHCI(), $I.ILHIOR.GILABD().CWOVDH(9, this), !0
    }
    return !1
}

function CommandPreconditionsFulfilled(n) {
    var t;
    return ($I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.KDPNSC.GIYDVX()), t = n, t != $I.VPNCTE.UpgradeBuilding) ? t == $I.VPNCTE.RepairBuilding && this.KAFGDX().JEEIXS() : this.KAFGDX().KLEJDN()
}

function CanExecuteCommand(n) {
    var t = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.KDPNSC.GIYDVX());
    switch (n) {
        case $I.VPNCTE.UpgradeBuilding:
            return this.KAFGDX().SBEBUU();
        case $I.VPNCTE.DemolishBuilding:
            return this.KAFGDX().JGCNST();
        case $I.VPNCTE.CollectResource:
            return t.QGOTUP() || this.KAFGDX().MXJVCC() < 0 ? !1 : this.KAFGDX().RIIUAG() > 0;
        case $I.VPNCTE.RepairBuilding:
            return this.KAFGDX().EYZKZI();
        case $I.VPNCTE.MoveEntity:
            return this.KAFGDX().TTKGHK()
    }
    return !1
}

function ExecutePrimaryFunction() {
    var n = !1;
    return this.DHCNUK && ($I.ILHIOR.GILABD().QIBGFH() == $I.HYIXRB.Move ? (this.VARXFJ($I.VPNCTE.CollectResource) ? this.RXENEO($I.VPNCTE.CollectResource) : this.VARXFJ($I.VPNCTE.MoveEntity) && $I.ILHIOR.GILABD().CWOVDH(9, this), n = !0) : $I.ILHIOR.GILABD().QIBGFH() == $I.HYIXRB.Repair ? (this.VARXFJ($I.VPNCTE.RepairBuilding) && this.RXENEO($I.VPNCTE.RepairBuilding), n = !0) : $I.ILHIOR.GILABD().QIBGFH() == $I.HYIXRB.Upgrade ? (this.VARXFJ($I.VPNCTE.UpgradeBuilding) && this.RXENEO($I.VPNCTE.UpgradeBuilding), n = !0) : $I.ILHIOR.GILABD().QIBGFH() == $I.HYIXRB.Sell ? (this.VARXFJ($I.VPNCTE.DemolishBuilding) && this.RXENEO($I.VPNCTE.DemolishBuilding), n = !0) : this.VARXFJ($I.VPNCTE.CollectResource) && (n = this.RXENEO($I.VPNCTE.CollectResource)), $I.PCMEZM.EYZIBP().CBESZQ(this.YBNRRW, 0, 0), this.YNAHCI()), n
}

function UiUpdate(n) {
    var t = !1,
        r, i;
    switch ($I.ILHIOR.GILABD().QIBGFH()) {
        case $I.HYIXRB.Repair:
        case $I.HYIXRB.Upgrade:
        case $I.HYIXRB.Sell:
            break;
        case $I.HYIXRB.Move:
            this.DHCNUK && (r = this.CREPQC, this.CREPQC = this.KAFGDX().ORQLTY(), this.PQUECX && r != this.CREPQC && this.KDPNSC.VAWZQX(this), this.CREPQC && (t = !0));
            break;
        default:
            this.DHCNUK && (t = !0)
    }
    i = !1;
    t && (i = !0, this.JCPAXN && this.KDPNSC.VAWZQX(this));
    this.SGJLCN != null && this.SGJLCN.GJYLBS() || (this.XSZETV != null && this.XSZETV.CXESLP(n), this.WAFJBF != null && this.WAFJBF.IGKBEZ(i))
}

function VisUpdate(n, t) {
    $I.OCOQEE.prototype.ETWFFN.call(this, n, t)
}

function UpdateZoom() {
    this.XSZETV != null && this.XSZETV.BBIZWD()
}

function GetResourceCollectingType() {
    return this.KAFGDX().LGISUH()
}

function GetPossibleResourcesToCollect() {
    return this.KAFGDX().RIIUAG()
}

function GetResourcePackagesCollected() {
    return this.KAFGDX().JEIKLM()
}

function GetResourceCollected() {
    return this.KAFGDX().SFCDGV()
}

function GetCurrentPackageResourceCollected() {
    return this.KAFGDX().GCXJLE()
}

function GetResourcePackagesCollectionProgress() {
    return this.KAFGDX().VFWAKO()
}

function GetPackageSize() {
    return this.KAFGDX().ERGBNT()
}

function GetStepsUntilResourceProductionFull() {
    return this.KAFGDX().JQHRHQ()
}

function GetStepsUntilNextPackage() {
    return this.KAFGDX().QKWFPM()
}

function GetNumStepsUntilUpgradeAvailable() {
    return this.KAFGDX().UBEDAD()
}

function get_ImageSource() {
    return this.HLQJJN
}

function get_BuildingName() {
    return this.KAFGDX().LWFCSR().dn
}

function get_BuildingLevel() {
    return this.KAFGDX().REBAFD()
}

function get_BuildingType() {
    return this.KAFGDX().LWFCSR().t
}

function get_ImageRatio() {
    var n;
    return this.FYBTTT >= 0 ? (n = $I.BUEVKL.QGLUJV().WJVSOL(this.FYBTTT), n.h / n.w) : 1
}

function get_CanCollectResources() {
    return this.KAFGDX().XUEQWE()
}

function get_BonusPackageReadyStepTime() {
    return this.KAFGDX().COYONW()
}

function get_BonusPackageFullStepTime() {
    return this.KAFGDX().MXJVCC()
}

function get_IsCombatSetup() {
    return this.ACIULH
}

function GetTextByType(n, t) {
    return webfrontend.phe.cnc.gui.util.Text.getBuildingModeTextByType(n, t)
}

function Selection() {
    var n;
    $I.OCOQEE.prototype.IJRVYL.call(this);
    (!this.ACIULH || this.KAFGDX().MGZKXH()) && (this.GHEPRQ != null && this.GHEPRQ.IOUEYL(!0), $I.ILHIOR.GILABD().QIBGFH() == $I.HYIXRB.Default && (n = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.KDPNSC.GIYDVX()), n != null && (n.VOPFYX() == $I.KGPDNC.GDIFaction || n.VOPFYX() == $I.KGPDNC.NODFaction) && this.WWTEVY()), $I.PCMEZM.EYZIBP().CBESZQ(this.YBNRRW, 1e3, 0), this.PQUECX = !0, this.KCYYKD())
}

function Deselection() {
    $I.OCOQEE.prototype.NULYUB.call(this);
    this.GHEPRQ != null && this.GHEPRQ.IOUEYL(!1);
    this.PQUECX && ($I.PCMEZM.EYZIBP().CBESZQ(this.YBNRRW, 0, 0), this.PQUECX = !1, this.YNAHCI(), this.RACVDK())
}

function MouseOver() {
    $I.RRAZPC.FIWMWM(this.KAFGDX()) != $I.PCULEX.Destoyed && (this.KDPNSC.WNLXPU(this), this.JCPAXN = !0, this.IJRVYL())
}

function MouseOut() {
    $I.RRAZPC.FIWMWM(this.KAFGDX()) != $I.PCULEX.Destoyed && (this.KDPNSC.HGUZCL(), this.JCPAXN = !1, this.NULYUB())
}

function ClearMouseOverEffect() {
    var n;
    if (this.QFEORT) {
        for (n = 0; n < this.NXTVNN.length; n++) this.BWOBJA.NEHMEK(this.NXTVNN[n]);
        this.QFEORT = !1
    }
    this.SGJLCN != null && this.SGJLCN.WROVQC(!1);
    this.CXESLP((new Date).getTime())
}