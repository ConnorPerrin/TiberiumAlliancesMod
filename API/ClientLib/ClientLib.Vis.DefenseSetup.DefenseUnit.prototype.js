function Dispose() {
    this.NULYUB();
    $I.OCOQEE.prototype.NSFOQM.call(this);
    $I.ILHIOR.GILABD().OWJKHX((new $I.OZCGGF).TFDQYD(this, this.YGEEHD));
    $I.ILHIOR.GILABD().CKIYPO((new $I.DCWFNQ).TFDQYD(this, this.YGEEHD));
    $I.ILHIOR.GILABD().YTXMGR((new $I.SBFJAP).TFDQYD(this, this.UNSODK));
    this.UMRNDU();
    this.AMGCLA != null && (this.AMGCLA.NSFOQM(), this.AMGCLA = null);
    this.YCJCYJ != null && (this.YCJCYJ.NSFOQM(), this.YCJCYJ = null);
    this.FPRRYF != null && (this.FPRRYF.NSFOQM(), this.FPRRYF = null)
}

function UiUpdate(n) {
    this.CTBYMH != this.LCFICY() && (this.CTBYMH = this.LCFICY(), this.JHQQZY(this.PHUSZB));
    this.AMGCLA != null && this.AMGCLA.CXESLP(n);
    this.YCJCYJ != null && this.YCJCYJ.CXESLP(n);
    this.FPRRYF != null && this.FPRRYF.CXESLP(n)
}

function VisUpdate(n, t) {
    $I.OCOQEE.prototype.ETWFFN.call(this, n, t)
}

function UpdateZoom() {
    var n;
    this.AMGCLA != null && (n = $I.ILHIOR.GILABD().VKUOKS().UVURBD(), this.AMGCLA.BBIZWD())
}

function get_CityEntityData() {
    return this.RBWWPQ
}

function get_IsTransportingUnit() {
    return this.RBWWPQ.ZHIRJH() == $I.ZNGMPE.Garrison && this.RBWWPQ.KGLYJZ() != null
}

function Dispose() {
    this.NULYUB();
    $I.OCOQEE.prototype.NSFOQM.call(this);
    $I.ILHIOR.GILABD().OWJKHX((new $I.OZCGGF).TFDQYD(this, this.YGEEHD));
    $I.ILHIOR.GILABD().CKIYPO((new $I.DCWFNQ).TFDQYD(this, this.YGEEHD));
    $I.ILHIOR.GILABD().YTXMGR((new $I.SBFJAP).TFDQYD(this, this.UNSODK));
    this.UMRNDU();
    this.AMGCLA != null && (this.AMGCLA.NSFOQM(), this.AMGCLA = null);
    this.YCJCYJ != null && (this.YCJCYJ.NSFOQM(), this.YCJCYJ = null);
    this.FPRRYF != null && (this.FPRRYF.NSFOQM(), this.FPRRYF = null)
}

function UpdateZoom() {
    var n;
    this.AMGCLA != null && (n = $I.ILHIOR.GILABD().VKUOKS().UVURBD(), this.AMGCLA.BBIZWD())
}

function get_X() {
    return this.VJOJCW().EZVHOT() * this.KDPNSC.VVGOEM()
}

function get_Y() {
    return this.VJOJCW().JXTDIO() * this.KDPNSC.MWRYXH() + (this.JIYQOD ? this.XGVPSW * this.KDPNSC.MWRYXH() : 0)
}

function get_UnitDetails() {
    return this.VJOJCW()
}

function GetNumStepsUntilUpgradeAvailable() {
    return this.VJOJCW().UBEDAD()
}

function get_VisObjectType() {
    return $I.CDNXVQ.DefenseUnitType
}

function GetSelectionInfo() {
    return $I.UDAQKL.DNVCCU($I.KQYCNT, 0)
}

function ExecuteCommand(n) {
    var t = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.KDPNSC.GIYDVX());
    if (t != null && t.SGRQBS() != null) switch (n) {
        case $I.VPNCTE.UpgradeUnit:
            return this.VJOJCW().SBEBUU() ? (this.VJOJCW().WAFIRT(), this.VJOJCW().REBAFD() == 0 ? ($I.ILHIOR.GILABD().VROCEG("audio/ui/Build_place"), this.ZXERMF($I.BUEVKL.QGLUJV().VXAMCA().citylayer.be, 4)) : ($I.ILHIOR.GILABD().RYKGLY("FactionSound/UpgradeComple"), $I.ILHIOR.GILABD().VROCEG("audio/ui/Upgrade"), this.ZXERMF($I.BUEVKL.QGLUJV().VXAMCA().citylayer.ue, 6)), !0) : !1;
        case $I.VPNCTE.DismissUnit:
            return this.VJOJCW().CTJZUH(), $I.ILHIOR.GILABD().RYKGLY("FactionSound/UnitSold"), !0;
        case $I.VPNCTE.RepairUnit:
            return this.VJOJCW().FPDQQI(!1), !0;
        case $I.VPNCTE.MoveEntity:
            return $I.PCMEZM.EYZIBP().CBESZQ(this.WXVAQN, 0, 0), this.YNAHCI(), $I.ILHIOR.GILABD().CWOVDH(8, this), !0
    }
    return !1
}

function CommandPreconditionsFulfilled(n) {
    var t = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.KDPNSC.GIYDVX());
    if (t != null && t.SGRQBS() != null) switch (n) {
        case $I.VPNCTE.UpgradeUnit:
            return this.VJOJCW().KLEJDN();
        case $I.VPNCTE.RepairUnit:
            return this.VJOJCW().KGLYJZ() == null ? this.VJOJCW().JEEIXS() : this.VJOJCW().JEEIXS() && this.VJOJCW().KGLYJZ().JEEIXS()
    }
    return !1
}

function CanExecuteCommand(n) {
    var t = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.KDPNSC.GIYDVX());
    if (t != null && t.SGRQBS() != null) switch (n) {
        case $I.VPNCTE.UpgradeUnit:
            return this.VJOJCW().SBEBUU();
        case $I.VPNCTE.DismissUnit:
            return this.VJOJCW().RNTHXX();
        case $I.VPNCTE.RepairUnit:
            return this.VJOJCW().EYZKZI();
        case $I.VPNCTE.MoveEntity:
            return this.VJOJCW().TTKGHK()
    }
    return !1
}

function ExecutePrimaryFunction() {
    var n = !1;
    if (this.MYXEBL) {
        switch ($I.ILHIOR.GILABD().QIBGFH()) {
            case $I.HYIXRB.Repair:
                this.VARXFJ($I.VPNCTE.RepairUnit) && this.RXENEO($I.VPNCTE.RepairUnit);
                n = !0;
                break;
            case $I.HYIXRB.Move:
                $I.ILHIOR.GILABD().CWOVDH(8, this);
                n = !0;
                break;
            case $I.HYIXRB.Upgrade:
                this.VARXFJ($I.VPNCTE.UpgradeUnit) && this.RXENEO($I.VPNCTE.UpgradeUnit);
                n = !0;
                break;
            case $I.HYIXRB.Sell:
                this.VARXFJ($I.VPNCTE.DismissUnit) && this.RXENEO($I.VPNCTE.DismissUnit);
                n = !0;
                break;
            default:
                n = !1
        }
        $I.PCMEZM.EYZIBP().CBESZQ(this.WXVAQN, 0, 0);
        this.YNAHCI()
    }
    return n
}

function UiUpdate(n) {
    this.CTBYMH != this.LCFICY() && (this.CTBYMH = this.LCFICY(), this.JHQQZY(this.PHUSZB));
    this.AMGCLA != null && this.AMGCLA.CXESLP(n);
    this.YCJCYJ != null && this.YCJCYJ.CXESLP(n);
    this.FPRRYF != null && this.FPRRYF.CXESLP(n)
}

function VisUpdate(n, t) {
    $I.OCOQEE.prototype.ETWFFN.call(this, n, t)
}

function get_UnitName() {
    return this.VJOJCW().YBCOGL().dn
}

function get_UnitLevel() {
    return this.VJOJCW().REBAFD()
}

function get_UnitArmorType() {
    return this.VJOJCW().YBCOGL().at
}

function get_IsCombatSetup() {
    return this.JIYQOD
}

function get_ImageRatio() {
    var n;
    return this.FYBTTT >= 0 ? (n = $I.BUEVKL.QGLUJV().WJVSOL(this.FYBTTT), n.h / n.w) : 1
}

function Selection() {
    $I.OCOQEE.prototype.IJRVYL.call(this);
    (!this.JIYQOD || this.VJOJCW().MGZKXH()) && (this.GHEPRQ != null && this.GHEPRQ.IOUEYL(!0), this.ZSAIKP != null && this.ZSAIKP.IOUEYL(!0), $I.PCMEZM.EYZIBP().CBESZQ(this.WXVAQN, 1e3, 0), this.PQUECX = !0)
}

function Deselection() {
    $I.OCOQEE.prototype.NULYUB.call(this);
    this.GHEPRQ != null && this.GHEPRQ.IOUEYL(!1);
    this.ZSAIKP != null && this.ZSAIKP.IOUEYL(!1);
    $I.PCMEZM.EYZIBP().CBESZQ(this.WXVAQN, 0, 0);
    this.PQUECX = !1;
    this.YNAHCI()
}

function MouseOver() {
    $I.RRAZPC.FIWMWM(this.VJOJCW()) != $I.PCULEX.Destoyed && (this.KDPNSC.WNLXPU(this), this.EJVBTS = !0, this.IJRVYL())
}

function MouseMove(n, t) {
    if (this.KPXXSM == $I.ZNGMPE.Garrison && this.RBWWPQ.KGLYJZ() != null && $I.ILHIOR.GILABD().QIBGFH() == $I.HYIXRB.Move) {
        var i = $I.QOKGWR.WBFJPT().VDQLZP(this.YWEVPV().KGLYJZ().YBCOGL().gi),
            r = this.DGLCVK() + this.KDPNSC.VVGOEM() - i.w,
            u = this.XYKFSB() + i.h;
        n >= r && t < u ? (this.KDPNSC.DZVOAR().ETAIBN("garrisonUnload"), this.AMGCLA.GOAWUF(!0), this.GHEPRQ != null && this.GHEPRQ.IOUEYL(!1)) : (this.KDPNSC.DZVOAR().ETAIBN("buildable"), this.AMGCLA.GOAWUF(!1), this.GHEPRQ != null && this.GHEPRQ.IOUEYL(!0))
    }
}

function MouseOut() {
    $I.RRAZPC.FIWMWM(this.VJOJCW()) != $I.PCULEX.Destoyed && (this.KDPNSC.HGUZCL(), this.EJVBTS = !1, $I.ILHIOR.GILABD().QIBGFH() == $I.HYIXRB.Move && (this.KDPNSC.DZVOAR().ETAIBN("buildable"), this.AMGCLA != null && this.AMGCLA.GOAWUF(!1)), this.NULYUB())
}

function GetTextByType(n) {
    return webfrontend.phe.cnc.gui.util.Text.getBuildingModeTextByType(n)
}