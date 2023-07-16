function Dispose() {
    this.NULYUB();
    $I.OCOQEE.prototype.NSFOQM.call(this);
    $I.ILHIOR.GILABD().OWJKHX((new $I.OZCGGF).TFDQYD(this, this.YGEEHD));
    $I.ILHIOR.GILABD().CKIYPO((new $I.DCWFNQ).TFDQYD(this, this.YGEEHD));
    $I.ILHIOR.GILABD().YTXMGR((new $I.SBFJAP).TFDQYD(this, this.UNSODK));
    this.PQUECX = !1;
    this.RJXEQS != null && (this.RJXEQS.NSFOQM(), this.RJXEQS = null);
    this.ZSAIKP != null && (this.ZSAIKP.NSFOQM(), this.ZSAIKP = null);
    this.JSPUBI != null && (this.JSPUBI.NSFOQM(), this.JSPUBI = null)
}

function UiUpdate(n) {
    this.RJXEQS != null && this.RJXEQS.CXESLP(n);
    this.JSPUBI != null && this.JSPUBI.CXESLP(n)
}

function VisUpdate(n, t) {
    $I.OCOQEE.prototype.ETWFFN.call(this, n, t)
}

function UpdateZoom() {
    var n;
    this.RJXEQS != null && (n = $I.ILHIOR.GILABD().VKUOKS().UVURBD(), this.RJXEQS.BBIZWD())
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
    this.PQUECX = !1;
    this.RJXEQS != null && (this.RJXEQS.NSFOQM(), this.RJXEQS = null);
    this.ZSAIKP != null && (this.ZSAIKP.NSFOQM(), this.ZSAIKP = null);
    this.JSPUBI != null && (this.JSPUBI.NSFOQM(), this.JSPUBI = null)
}

function get_X() {
    return this.KDPNSC.SXSKPB(this.VJOJCW().EZVHOT())
}

function get_Y() {
    return this.KDPNSC.QTQTAG(this.VJOJCW().JXTDIO())
}

function get_UnitDetails() {
    return this.VJOJCW()
}

function get_VisObjectType() {
    return $I.CDNXVQ.ArmyUnitType
}

function GetSelectionInfo() {
    return $I.UDAQKL.DNVCCU($I.KQYCNT, 0)
}

function GetNumStepsUntilUpgradeAvailable() {
    return this.VJOJCW().UBEDAD()
}

function UpdateZoom() {
    var n;
    this.RJXEQS != null && (n = $I.ILHIOR.GILABD().VKUOKS().UVURBD(), this.RJXEQS.BBIZWD())
}

function ExecuteCommand(n) {
    var t = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.KDPNSC.GIYDVX());
    if (t != null && t.SGRQBS() != null) switch (n) {
        case $I.VPNCTE.UpgradeUnit:
            return this.VJOJCW().SBEBUU() ? (this.VJOJCW().WAFIRT(), this.VJOJCW().REBAFD() == 0 ? ($I.ILHIOR.GILABD().VROCEG("audio/ui/Build_place"), this.ZXERMF($I.BUEVKL.QGLUJV().VXAMCA().citylayer.be, 4)) : ($I.ILHIOR.GILABD().RYKGLY("FactionSound/UpgradeComple"), $I.ILHIOR.GILABD().VROCEG("audio/ui/Upgrade"), this.ZXERMF($I.BUEVKL.QGLUJV().VXAMCA().citylayer.ue, 6)), !0) : !1;
        case $I.VPNCTE.DismissUnit:
            return this.VJOJCW().CTJZUH(), $I.ILHIOR.GILABD().RYKGLY("FactionSound/UnitSold"), !0;
        case $I.VPNCTE.RepairUnit:
            return this.VJOJCW().FPDQQI(!1), this.VJOJCW().KGLYJZ() != null && this.YWEVPV().KGLYJZ().FPDQQI(!1), !0;
        case $I.VPNCTE.MoveEntity:
            return $I.ILHIOR.GILABD().CWOVDH(15, this), !0
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
    if ($I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.KDPNSC.GIYDVX()), !this.JDUZQO) return !1;
    switch ($I.ILHIOR.GILABD().QIBGFH()) {
        case $I.HYIXRB.Repair:
            return this.VARXFJ($I.VPNCTE.RepairUnit) && this.RXENEO($I.VPNCTE.RepairUnit), !0;
        case $I.HYIXRB.Move:
            return $I.ILHIOR.GILABD().CWOVDH(15, this), !0;
        case $I.HYIXRB.Upgrade:
            return this.VARXFJ($I.VPNCTE.UpgradeUnit) && this.RXENEO($I.VPNCTE.UpgradeUnit), !0;
        case $I.HYIXRB.Sell:
            return this.VARXFJ($I.VPNCTE.DismissUnit) && this.RXENEO($I.VPNCTE.DismissUnit), !0
    }
    return !1
}

function UiUpdate(n) {
    this.RJXEQS != null && this.RJXEQS.CXESLP(n);
    this.JSPUBI != null && this.JSPUBI.CXESLP(n)
}

function VisUpdate(n, t) {
    $I.OCOQEE.prototype.ETWFFN.call(this, n, t)
}

function GetTextByType(n) {
    return webfrontend.phe.cnc.gui.util.Text.getBuildingModeTextByType(n)
}

function Selection() {
    $I.OCOQEE.prototype.IJRVYL.call(this);
    this.GHEPRQ != null && this.GHEPRQ.IOUEYL(!0);
    this.ZSAIKP != null && this.ZSAIKP.IOUEYL(!0);
    this.PQUECX = !0
}

function Deselection() {
    $I.OCOQEE.prototype.NULYUB.call(this);
    this.GHEPRQ != null && this.GHEPRQ.IOUEYL(!1);
    this.ZSAIKP != null && this.ZSAIKP.IOUEYL(!1);
    this.PQUECX && (this.PQUECX = !1)
}

function MouseOver() {
    this.KDPNSC.WNLXPU(this);
    this.MGYQYH = !0;
    this.IJRVYL()
}

function MouseMove(n, t) {
    if (this.KPXXSM == $I.ZNGMPE.Garrison && this.RBWWPQ.KGLYJZ() != null && $I.ILHIOR.GILABD().QIBGFH() == $I.HYIXRB.Move) {
        var i = $I.QOKGWR.WBFJPT().VDQLZP(this.YWEVPV().KGLYJZ().YBCOGL().gi),
            r = this.DGLCVK() + this.KDPNSC.VVGOEM() - i.w,
            u = this.XYKFSB() + i.h;
        n >= r && t < u ? (this.KDPNSC.DZVOAR().ETAIBN("garrisonUnload"), this.RJXEQS.GOAWUF(!0), this.GHEPRQ != null && this.GHEPRQ.IOUEYL(!1)) : (this.KDPNSC.DZVOAR().ETAIBN("buildable"), this.RJXEQS.GOAWUF(!1), this.GHEPRQ != null && this.GHEPRQ.IOUEYL(!0))
    }
}

function MouseOut() {
    this.KDPNSC.HGUZCL();
    this.MGYQYH = !1;
    $I.ILHIOR.GILABD().QIBGFH() == $I.HYIXRB.Move && (this.KDPNSC.DZVOAR().ETAIBN("buildable"), this.RJXEQS != null && this.RJXEQS.GOAWUF(!1));
    this.NULYUB()
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

function get_ImageRatio() {
    var n;
    return this.FYBTTT >= 0 ? (n = $I.BUEVKL.QGLUJV().WJVSOL(this.FYBTTT), n.h / n.w) : 1
}