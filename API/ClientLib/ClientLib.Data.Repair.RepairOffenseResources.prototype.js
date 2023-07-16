function Dispose() {
    $I.CVRAYR.VAMLQD().ONGTRQ().KBQKKA((new $I.LPYEIJ).TFDQYD(this, this.TFJBLY))
}

function get_RepairChargeOffense() {
    return this.PQUAZG
}

function get_Offset1() {
    return this.PQUAZG.Type == 8 ? (new $I.CKYKBH).WFOVID($I.OATHMF.RepairChargeInf, this.QMSMKS.d[$I.OATHMF.RepairChargeInf]) : this.PQUAZG.Type != 9 && this.PQUAZG.Type != 10 ? null : (new $I.CKYKBH).WFOVID($I.OATHMF.RepairChargeAir, this.QMSMKS.d[$I.OATHMF.RepairChargeAir])
}

function get_Offset2() {
    return this.PQUAZG.Type == 8 || this.PQUAZG.Type == 9 ? (new $I.CKYKBH).WFOVID($I.OATHMF.RepairChargeVeh, this.QMSMKS.d[$I.OATHMF.RepairChargeVeh]) : this.PQUAZG.Type == 10 ? (new $I.CKYKBH).WFOVID($I.OATHMF.RepairChargeInf, this.QMSMKS.d[$I.OATHMF.RepairChargeInf]) : null
}