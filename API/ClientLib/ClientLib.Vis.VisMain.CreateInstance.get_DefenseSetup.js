function Init() {
    var i, r, n, u, f, t, e;
    for ($I.BMZJUL.prototype.NXWPIH.call(this), i = $I.QOKGWR.WBFJPT().VDQLZP("battleground/neutral/background_defence.jpg"), this.BFLVMG = this.RRBVEU.TDBBHP("imagesegment", null), this.BFLVMG.PTVNAR("battleground/neutral/background_defence.jpg"), this.BFLVMG.EVVIKY($I.CVHNUS.VIKPEH - $I.CVHNUS.BRNSXC[0]), this.BFLVMG.WJAECQ($I.CVHNUS.EZHJGX - $I.CVHNUS.BRNSXC[1]), this.BFLVMG.BMIJEH(i.w), this.BFLVMG.NQJJZY(i.h - $I.ZPZTNI.KAMYOL), this.XRKXFZ = this.RRBVEU.TDBBHP("imagesegment", null), this.XRKXFZ.WJAECQ($I.CVHNUS.EZHJGX - $I.CVHNUS.BRNSXC[1]), this.XRKXFZ.QOUDUX(0), this.XRKXFZ.QOUDUX(1), this.BFLVMG.QOUDUX(0), this.BFLVMG.QOUDUX(2), this.RRBVEU.UVSZDF(this.XRKXFZ), this.RRBVEU.UVSZDF(this.BFLVMG), r = $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.EUNQAF, 9), "A", "B", "C", "D", "E", "F", "G", "H", "I"), this.QMCPLU = $I.UDAQKL.DNVCCU($I.YBULBO, this.BYRLVW.JCWRNK()), n = 0; n < this.BYRLVW.JCWRNK(); n++) u = this.VVGOEM() * n + Math.floor(this.VVGOEM() / 2) - $I.CVHNUS.MOACIA, this.QMCPLU[n] = this.RRBVEU.TDBBHP("text", null), this.QMCPLU[n].EVVIKY(u), this.QMCPLU[n].WJAECQ($I.CVHNUS.PFIFKI), this.QMCPLU[n].BMIJEH($I.CVHNUS.JHEQJU), this.QMCPLU[n].NQJJZY($I.CVHNUS.HKMSKW), this.QMCPLU[n].TYDVYV(49), this.QMCPLU[n].BPQMOK("armysetup_wave"), this.QMCPLU[n].YOJPLZ(r[n]), this.RRBVEU.UVSZDF(this.QMCPLU[n]);
    for (f = this.BYRLVW.DTAVSS(), this.TTRIFR = $I.UDAQKL.DNVCCU($I.YBULBO, this.BYRLVW.DTAVSS()), t = 0; t < this.BYRLVW.DTAVSS(); t++) e = this.MWRYXH() * t + Math.floor(this.MWRYXH() / 2) - $I.CVHNUS.TCEECN, this.TTRIFR[t] = this.RRBVEU.TDBBHP("text", null), this.TTRIFR[t].EVVIKY($I.CVHNUS.UKABBH), this.TTRIFR[t].WJAECQ(e), this.TTRIFR[t].BMIJEH($I.CVHNUS.LTZKAY), this.TTRIFR[t].NQJJZY($I.CVHNUS.ZYOYZZ), this.TTRIFR[t].TYDVYV(49), this.TTRIFR[t].BPQMOK("armysetup_wave"), this.TTRIFR[t].YOJPLZ((f - t).toString()), this.RRBVEU.UVSZDF(this.TTRIFR[t]);
    this.XNVDVT.NDHYZP((new $I.SBFJAP).TFDQYD(this, this.WZIVDY));
    this.WZIVDY(this.XNVDVT.ZJZRTW());
    $I.CVRAYR.VAMLQD().ZBVLXL().RTWSTZ((new $I.KKGZDI).TFDQYD(this, this.QTHDSW))
}

function get_GridWidth() {
    return this.UXPRAN
}

function get_GridHeight() {
    return this.BPOWWU
}

function get_SegmentBg() {
    return this.BFLVMG
}

function get_MinXPosition() {
    return $I.CVHNUS.WKCVKA + this.ESOTKU
}

function get_MaxXPosition() {
    return this.BYRLVW.JCWRNK() * this.UXPRAN + $I.CVHNUS.UXKNSL
}

function get_MinYPosition() {
    return $I.CVHNUS.IHGWEP + this.XYHKLL
}

function get_MaxYPosition() {
    return $I.CVHNUS.HUCEKS
}

function GetObjectFromPosition(n, t) {
    return this.BYRLVW.FPKBQM(n, t)
}

function ShowDefenseUnitAutoRepairOverlays(n) {
    this.BYRLVW.IXVFZO(n)
}