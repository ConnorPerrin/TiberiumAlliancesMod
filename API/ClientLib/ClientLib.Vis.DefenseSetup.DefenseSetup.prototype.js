function get_VisAreaComplete() {
    for (var i = this.HOMYYT == this.XSPYBI, r = this.XLAIYT.l, n, t = 0; t < r.length; t++) n = r[t], i &= n.BBSMLS() == n.LCCHYM();
    return i
}

function get_CurrentCityId() {
    return this.FZXQXG
}

function get_OwnerId() {
    return this.YXOSZW
}

function get_TotalWidth() {
    for (var n = -1, i = this.XLAIYT.l, r, t = 0; t < i.length; t++) r = i[t], n = Math.max(n, r.JCWRNK());
    return n
}

function get_TotalHeight() {
    for (var t = 0, i = this.XLAIYT.l, r, n = 0; n < i.length; n++) r = i[n], t += r.DTAVSS();
    return t
}

function GetDecal(n) {
    return this.GNUDVJ[n]
}

function get_DecalLayer() {
    return this.GCZSDI
}

function Init() {
    var i, r, n, u, f, t, e;
    for ($I.BMZJUL.prototype.NXWPIH.call(this), i = $I.QOKGWR.WBFJPT().VDQLZP("battleground/neutral/background_defence.jpg"), this.BFLVMG = this.RRBVEU.TDBBHP("imagesegment", null), this.BFLVMG.PTVNAR("battleground/neutral/background_defence.jpg"), this.BFLVMG.EVVIKY($I.CVHNUS.VIKPEH - $I.CVHNUS.BRNSXC[0]), this.BFLVMG.WJAECQ($I.CVHNUS.EZHJGX - $I.CVHNUS.BRNSXC[1]), this.BFLVMG.BMIJEH(i.w), this.BFLVMG.NQJJZY(i.h - $I.ZPZTNI.KAMYOL), this.XRKXFZ = this.RRBVEU.TDBBHP("imagesegment", null), this.XRKXFZ.WJAECQ($I.CVHNUS.EZHJGX - $I.CVHNUS.BRNSXC[1]), this.XRKXFZ.QOUDUX(0), this.XRKXFZ.QOUDUX(1), this.BFLVMG.QOUDUX(0), this.BFLVMG.QOUDUX(2), this.RRBVEU.UVSZDF(this.XRKXFZ), this.RRBVEU.UVSZDF(this.BFLVMG), r = $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.EUNQAF, 9), "A", "B", "C", "D", "E", "F", "G", "H", "I"), this.QMCPLU = $I.UDAQKL.DNVCCU($I.YBULBO, this.BYRLVW.JCWRNK()), n = 0; n < this.BYRLVW.JCWRNK(); n++) u = this.VVGOEM() * n + Math.floor(this.VVGOEM() / 2) - $I.CVHNUS.MOACIA, this.QMCPLU[n] = this.RRBVEU.TDBBHP("text", null), this.QMCPLU[n].EVVIKY(u), this.QMCPLU[n].WJAECQ($I.CVHNUS.PFIFKI), this.QMCPLU[n].BMIJEH($I.CVHNUS.JHEQJU), this.QMCPLU[n].NQJJZY($I.CVHNUS.HKMSKW), this.QMCPLU[n].TYDVYV(49), this.QMCPLU[n].BPQMOK("armysetup_wave"), this.QMCPLU[n].YOJPLZ(r[n]), this.RRBVEU.UVSZDF(this.QMCPLU[n]);
    for (f = this.BYRLVW.DTAVSS(), this.TTRIFR = $I.UDAQKL.DNVCCU($I.YBULBO, this.BYRLVW.DTAVSS()), t = 0; t < this.BYRLVW.DTAVSS(); t++) e = this.MWRYXH() * t + Math.floor(this.MWRYXH() / 2) - $I.CVHNUS.TCEECN, this.TTRIFR[t] = this.RRBVEU.TDBBHP("text", null), this.TTRIFR[t].EVVIKY($I.CVHNUS.UKABBH), this.TTRIFR[t].WJAECQ(e), this.TTRIFR[t].BMIJEH($I.CVHNUS.LTZKAY), this.TTRIFR[t].NQJJZY($I.CVHNUS.ZYOYZZ), this.TTRIFR[t].TYDVYV(49), this.TTRIFR[t].BPQMOK("armysetup_wave"), this.TTRIFR[t].YOJPLZ((f - t).toString()), this.RRBVEU.UVSZDF(this.TTRIFR[t]);
    this.XNVDVT.NDHYZP((new $I.SBFJAP).TFDQYD(this, this.WZIVDY));
    this.WZIVDY(this.XNVDVT.ZJZRTW());
    $I.CVRAYR.VAMLQD().ZBVLXL().RTWSTZ((new $I.KKGZDI).TFDQYD(this, this.QTHDSW))
}

function ChangeBackground(n) {
    this.PEIUNV.PTVNAR(n);
    this.RHHLWB()
}

function UiUpdate(n) {
    for (var i = this.XLAIYT.l, r, t = 0; t < i.length; t++) r = i[t], r.CXESLP(n)
}

function VisUpdate(n) {
    var r = (new Date).getTime(),
        i, u, t;
    for (n > this.CPWLSH && (this.CPWLSH = n), $I.FWLFGN.prototype.MUBCWQ.call(this, r), $I.FWLFGN.prototype.YDAYMG.call(this, r), i = this.XLAIYT.l, t = 0; t < i.length; t++) u = i[t], u.QJOFJP(n)
}

function GetBackgroundGraphic() {
    return $I.BMZJUL.KJHWRT(this.LMSPFP)
}

function GetBackgroundGraphicSeemless() {
    return $I.BMZJUL.YMHVDV(this.LMSPFP)
}

function CalculateSlotOffset(n, t) {
    var i = this.GIYDVX() << 8 | t << 4 | n,
        r, u;
    return i = i + 2127912214 + (i << 12), i = i ^ 3345072700 ^ i >> 19, i = i + 374761393 + (i << 5), i = i + 3550635116 ^ i << 9, i = i + 4251993797 + (i << 3), i = i ^ 3042594569 ^ i >> 16, r = (i & 255) % 7, u = (i >> 8 & 255) % 7, u << 8 | r
}

function GetBonusIconInfo(n) {
    var t = {},
        i = null;
    return (t.$r = this.LCUSBD.ZOXRAI(this.LMSPFP, t), i = t.b, t.$r) || (i = this.LCUSBD.d[$I.KGPDNC.GDIFaction]), i[n]
}

function GetAllBuildingsFromType(n, t) {
    for (var i = {}, r = (new $I.UCRMVA).SLPWTI(), f = this.XLAIYT.l, e, u = 0; u < f.length; u++) e = f[u], i.c = r, i.$r = e.DRMKPT(n, t, i), r = i.c, i.$r;
    return r
}

function HideToolTip() {
    var t, i, n;
    if (this.WHQTUJ != null)
        for (this.WHQTUJ.YFGAPN(), this.WHQTUJ.NSFOQM(), this.WHQTUJ = null, t = this.XLAIYT.l, n = 0; n < t.length; n++) i = t[n], i.HGUZCL()
}

function SetActive(n) {
    var t;
    $I.FWLFGN.prototype.NREYTO.call(this, n);
    t = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.FZXQXG);
    n && t != null && this.ESJFJT(t, 7)
}

function ShowToolTip(n) {
    this.WHQTUJ != null && (this.WHQTUJ.YFGAPN(), this.WHQTUJ.NSFOQM(), this.WHQTUJ = null);
    this.WHQTUJ = this.XYYJIA(n);
    this.VAWZQX(n);
    this.WHQTUJ.DSXTIQ(Math.floor(n.DGLCVK()), Math.floor(n.XYKFSB()), this.JZNSHH, this.TTZQCK, this.USZDVJ(), this.CARSTD());
    this.WHQTUJ.SHCWDD()
}

function UpdateToolTip(n) {
    for (var i = this.XLAIYT.l, r, t = 0; t < i.length; t++) r = i[t], r.VAWZQX(n)
}

function get_MinZoomFactor() {
    return this.XNVDVT.TFIAWQ()
}

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