function Dispose() {
    $I.DXCHWP.prototype.NSFOQM.call(this);
    $I.CVRAYR.VAMLQD().ZBVLXL().DVJDXO((new $I.KKGZDI).TFDQYD(this, this.PGSPKV));
    this.CYHVMR();
    this.CHQNWS != null && (this.CHQNWS.NSFOQM(), this.CHQNWS = null);
    this.GPSICO != null && (this.GPSICO.NSFOQM(), this.GPSICO = null);
    this.NAYRDM != null && (this.NAYRDM.NSFOQM(), this.NAYRDM = null)
}

function get_X() {
    return this.SVVIBN * this.ABCGOU.VVGOEM()
}

function get_Y() {
    return this.YOJYDM * this.ABCGOU.MWRYXH()
}

function get_RawX() {
    return this.SVVIBN
}

function get_RawY() {
    return this.YOJYDM
}

function get_Coordinates() {
    return this.YOJYDM << 16 | this.SVVIBN
}

function get_IsDisposed() {
    return this.BKYAMO
}

function UpdateColor() {}

function UpdateZoom() {}

function UpdateDungeonLevels() {}

function UpdateMoralDecal(n) {
    var t, i;
    if ($I.CVRAYR.VAMLQD().TZZENG().PHJEYD()) {
        if (n != null && (t = $I.CVRAYR.VAMLQD(), n.HRRLUH(this.SVVIBN, this.YOJYDM) <= t.TZZENG().HJRBOF() + t.TZZENG().JDCGKE() && (i = $I.XOJOCY.MHEEIU(n.JNLWQS(), this.IYRNLE()).k, i > 0 && this.QIEAIB != null))) {
            this.JYCOCL || (this.ABCGOU.WHQQMY().UVSZDF(this.QIEAIB), this.JYCOCL = !0);
            switch (i) {
                case 1:
                    this.QIEAIB.PTVNAR("ui/common/icon_moral_alert_orange.png");
                    return;
                case 2:
                    this.QIEAIB.PTVNAR("ui/common/icon_moral_alert_red.png")
            }
            return
        }
        this.JYCOCL && this.ABCGOU.WHQQMY().NEHMEK(this.QIEAIB);
        this.JYCOCL = !1
    }
}

function VisUpdate(n, t, i) {
    var r;
    this.BKYAMO || (r = !1, this.HCRBRO() && (this.BHKYUY(this.TEDTCQ, this.IGPWZM), this.GUATFV(!1)), this.MGSQTR == null || this.JJOYTD || (this.MGSQTR.JFBQON(this.SVVIBN, this.YOJYDM), this.MGSQTR.FJLGXI(this.KBQRPH()), this.QIEAIB.EVVIKY(this.MGSQTR.DGLCVK() + this.MGSQTR.DZSXHC() - this.QIEAIB.DZSXHC()), this.QIEAIB.WJAECQ(this.MGSQTR.XYKFSB() - this.QIEAIB.KUAIEC())), this.GFCDHL && this.IGPWZM.GAAPNM - $I.CVRAYR.VAMLQD().TZZENG().QMPXDI() < n && (this.GFCDHL = !1, r = !0), r && this.BHKYUY(this.TEDTCQ, this.IGPWZM), i && this.CHQNWS != null && this.CHQNWS.OCAAHR(t), i && this.GPSICO != null && this.GPSICO.OCAAHR(t), i && this.NAYRDM != null && this.NAYRDM.OCAAHR(t))
}

function UiUpdate(n) {
    this.XKHGJE(n) && (this.VWHGTG = this.ABCGOU.PIZQCI(this.RFZYGQ, this.IGPWZM.PYFFNN != -1 ? this.HLXQHU : this.IGPWZM.PYFFNN), this.BHKYUY(this.TEDTCQ, this.IGPWZM))
}

function HideInfos() {
    this.JJOYTD || (this.JJOYTD = !0, this.MGSQTR != null && this.MGSQTR.TXFEZJ(), this.QIEAIB != null && this.JYCOCL && (this.ABCGOU.WHQQMY().NEHMEK(this.QIEAIB), this.JYCOCL = !1))
}

function ShowInfos() {
    this.JJOYTD && (this.JJOYTD = !1, this.MGSQTR != null && this.MGSQTR.KKWNHR(), this.QIEAIB == null || this.JYCOCL || (this.ABCGOU.WHQQMY().UVSZDF(this.QIEAIB), this.JYCOCL = !0))
}

function Selection() {}

function Deselection() {}

function Dispose() {
    $I.DXCHWP.prototype.NSFOQM.call(this);
    $I.CVRAYR.VAMLQD().ZBVLXL().DVJDXO((new $I.KKGZDI).TFDQYD(this, this.PGSPKV));
    this.CYHVMR();
    this.CHQNWS != null && (this.CHQNWS.NSFOQM(), this.CHQNWS = null);
    this.GPSICO != null && (this.GPSICO.NSFOQM(), this.GPSICO = null);
    this.NAYRDM != null && (this.NAYRDM.NSFOQM(), this.NAYRDM = null)
}

function UpdateMoralDecal(n) {
    var t, i;
    if ($I.CVRAYR.VAMLQD().TZZENG().PHJEYD()) {
        if (n != null && (t = $I.CVRAYR.VAMLQD(), n.HRRLUH(this.SVVIBN, this.YOJYDM) <= t.TZZENG().HJRBOF() + t.TZZENG().JDCGKE() && (i = $I.XOJOCY.MHEEIU(n.JNLWQS(), this.IYRNLE()).k, i > 0 && this.QIEAIB != null))) {
            this.JYCOCL || (this.ABCGOU.WHQQMY().UVSZDF(this.QIEAIB), this.JYCOCL = !0);
            switch (i) {
                case 1:
                    this.QIEAIB.PTVNAR("ui/common/icon_moral_alert_orange.png");
                    return;
                case 2:
                    this.QIEAIB.PTVNAR("ui/common/icon_moral_alert_red.png")
            }
            return
        }
        this.JYCOCL && this.ABCGOU.WHQQMY().NEHMEK(this.QIEAIB);
        this.JYCOCL = !1
    }
}

function get_VisObjectType() {
    return $I.CDNXVQ.RegionNPCBase
}

function HideInfos() {
    this.JJOYTD || (this.JJOYTD = !0, this.MGSQTR != null && this.MGSQTR.TXFEZJ(), this.QIEAIB != null && this.JYCOCL && (this.ABCGOU.WHQQMY().NEHMEK(this.QIEAIB), this.JYCOCL = !1))
}

function ShowInfos() {
    this.JJOYTD && (this.JJOYTD = !1, this.MGSQTR != null && this.MGSQTR.KKWNHR(), this.QIEAIB == null || this.JYCOCL || (this.ABCGOU.WHQQMY().UVSZDF(this.QIEAIB), this.JYCOCL = !0))
}

function get_UIType() {
    return "NPCCity"
}

function MouseOver() {
    this.CHQNWS != null && this.IGPWZM.RWLLAV != $I.CVRAYR.VAMLQD().ZBVLXL().SWRFAR() && this.CHQNWS.IOUEYL(!0)
}

function MouseOut() {
    this.CHQNWS != null && this.IGPWZM.RWLLAV != $I.CVRAYR.VAMLQD().ZBVLXL().SWRFAR() && this.CHQNWS.IOUEYL(!1)
}

function CalculateBuildingAndDefenseCondition(n) {
    var i = !1;
    if (this.DKTYWR() > 0) {
        var r = Math.max(0, n - this.DKTYWR()),
            u = 100 * $I.CVRAYR.VAMLQD().TZZENG().HPDAIR() / 3600,
            t = $I.JGXBTR.URWFTN(r * u + this.IGPWZM.JTYLKR);
        t != this.RFZYGQ && (this.RFZYGQ = t, i = !0);
        this.IGPWZM.PYFFNN != -1 && (r = n - this.DKTYWR(), u = 100 * $I.CVRAYR.VAMLQD().TZZENG().PJCICQ() / 3600, t = $I.JGXBTR.URWFTN(r * u + this.IGPWZM.PYFFNN), t != this.HLXQHU && (this.HLXQHU = t, i = !0))
    }
    return i
}

function UiUpdate(n) {
    this.XKHGJE(n) && (this.VWHGTG = this.ABCGOU.PIZQCI(this.RFZYGQ, this.IGPWZM.PYFFNN != -1 ? this.HLXQHU : this.IGPWZM.PYFFNN), this.BHKYUY(this.TEDTCQ, this.IGPWZM))
}

function VisUpdate(n, t, i) {
    var r;
    this.BKYAMO || (r = !1, this.HCRBRO() && (this.BHKYUY(this.TEDTCQ, this.IGPWZM), this.GUATFV(!1)), this.MGSQTR == null || this.JJOYTD || (this.MGSQTR.JFBQON(this.SVVIBN, this.YOJYDM), this.MGSQTR.FJLGXI(this.KBQRPH()), this.QIEAIB.EVVIKY(this.MGSQTR.DGLCVK() + this.MGSQTR.DZSXHC() - this.QIEAIB.DZSXHC()), this.QIEAIB.WJAECQ(this.MGSQTR.XYKFSB() - this.QIEAIB.KUAIEC())), this.GFCDHL && this.IGPWZM.GAAPNM - $I.CVRAYR.VAMLQD().TZZENG().QMPXDI() < n && (this.GFCDHL = !1, r = !0), r && this.BHKYUY(this.TEDTCQ, this.IGPWZM), i && this.CHQNWS != null && this.CHQNWS.OCAAHR(t), i && this.GPSICO != null && this.GPSICO.OCAAHR(t), i && this.NAYRDM != null && this.NAYRDM.OCAAHR(t))
}

function get_TargetObject() {
    return this.IGPWZM
}

function get_Id() {
    return this.IGPWZM.RWLLAV
}

function get_Name() {
    return this.XXGNGW.Text
}

function get_BaseLevel() {
    return this.IGPWZM.VHOUOP
}

function get_BaseLevelFloat() {
    return this.IGPWZM.KZIMEP
}

function get_PlayerId() {
    return -1
}

function get_PlayerFaction() {
    return 3
}

function get_AllianceId() {
    return -1
}

function get_IsHubBase() {
    return $I.CVRAYR.VAMLQD().RWLPVY().EVGGZM(Math.floor(this.FDMIUF()), Math.floor(this.ICDVYS())) != null
}

function get_HasIncommingAttack() {
    var t = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG(),
        n = this.JLEOSE() - $I.CVRAYR.VAMLQD().TZZENG().JTTQDG();
    return ($I.CVRAYR.VAMLQD().VYDVFH().UTCQWX(this.KRMSGL()) == n && (n = this.JLEOSE() - $I.CVRAYR.VAMLQD().TZZENG().QMPXDI()), !this.IGPWZM.BJGWCJ) ? n - t > 0 : !0
}

function get_isLocked() {
    var n = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG(),
        t = this.JLEOSE() - $I.CVRAYR.VAMLQD().TZZENG().JTTQDG();
    return n < t
}

function get_LockdownEndStep() {
    return this.IGPWZM.GAAPNM
}

function get_LastCombatStep() {
    return this.IGPWZM.CRFUSI
}

function get_ConditionBuildings() {
    return this.DKTYWR() > 0 ? this.RFZYGQ : this.IGPWZM.JTYLKR
}

function get_ConditionDefense() {
    return this.IGPWZM.PYFFNN != -1 && this.DKTYWR() > 0 ? this.HLXQHU : this.IGPWZM.PYFFNN
}