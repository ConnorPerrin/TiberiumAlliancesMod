function Init() {
    $I.BMZJUL.prototype.NXWPIH.call(this);
    var t = $I.QOKGWR.WBFJPT(),
        i = t.VDQLZP($I.BMZJUL.prototype.GNOLXZ.call(this)),
        n = t.VDQLZP($I.BMZJUL.prototype.BXVKFX.call(this)),
        r = t.VDQLZP("battleground/neutral/background_defence.jpg"),
        u = t.VDQLZP($I.ILHIOR.GILABD().ZJFLKT().VBTDDG());
    this.PEIUNV = this.RRBVEU.TDBBHP("imagesegment", null);
    this.PEIUNV.PTVNAR($I.BMZJUL.prototype.BXVKFX.call(this));
    this.PEIUNV.EVVIKY($I.OXYXXU.NJRUXP - $I.OXYXXU.LMJAJT[0]);
    this.PEIUNV.WJAECQ($I.OXYXXU.ZRMOAD - $I.OXYXXU.LMJAJT[1] + $I.OXYXXU.NCYKKL);
    this.PEIUNV.BMIJEH(n.w);
    this.PEIUNV.NQJJZY(n.h - 2 * $I.ZPZTNI.KAMYOL);
    this.PEIUNV.AGGCMU(0, $I.ZPZTNI.KAMYOL / n.h, 1, (n.h - $I.ZPZTNI.KAMYOL) / n.h);
    this.PRGXDO = this.RRBVEU.TDBBHP("image", null);
    this.PRGXDO.PTVNAR($I.ILHIOR.GILABD().ZJFLKT().VBTDDG());
    this.PRGXDO.BMIJEH(u.w);
    this.PRGXDO.NQJJZY(u.h);
    this.PRGXDO.EVVIKY(this.PEIUNV.DGLCVK());
    this.PRGXDO.WJAECQ(this.PEIUNV.XYKFSB() - this.PRGXDO.KUAIEC());
    this.TOJGUD = this.RRBVEU.TDBBHP("imagesegment", null);
    this.TOJGUD.PTVNAR($I.BMZJUL.prototype.GNOLXZ.call(this));
    this.TOJGUD.BMIJEH(this.PEIUNV.DZSXHC());
    this.TOJGUD.NQJJZY(i.h - 2 * $I.ZPZTNI.KAMYOL);
    this.TOJGUD.EVVIKY(this.PEIUNV.DGLCVK());
    this.TOJGUD.WJAECQ(this.PEIUNV.XYKFSB() - this.TOJGUD.KUAIEC());
    this.TOJGUD.AGGCMU(0, $I.ZPZTNI.KAMYOL / i.h, 1, (i.h - $I.ZPZTNI.KAMYOL) / i.h);
    this.YHIYNC = this.RRBVEU.TDBBHP("imagesegment", null);
    this.YHIYNC.PTVNAR("battleground/neutral/background_defence.jpg");
    this.YHIYNC.EVVIKY($I.OXYXXU.NJRUXP - $I.OXYXXU.QXIAAQ[0]);
    this.YHIYNC.WJAECQ(this.PEIUNV.XYKFSB() + this.PEIUNV.KUAIEC());
    this.YHIYNC.BMIJEH(r.w);
    this.YHIYNC.NQJJZY(r.h - $I.ZPZTNI.KAMYOL);
    this.YHIYNC.AGGCMU(0, $I.ZPZTNI.KAMYOL / r.h, 1, 1);
    this.PEIUNV.QOUDUX(1);
    this.YHIYNC.QOUDUX(2);
    this.PRGXDO.QOUDUX(3);
    this.TOJGUD.QOUDUX(4);
    this.RRBVEU.UVSZDF(this.PEIUNV);
    this.RRBVEU.UVSZDF(this.YHIYNC);
    this.RRBVEU.UVSZDF(this.PRGXDO);
    this.RRBVEU.UVSZDF(this.TOJGUD);
    $I.BMZJUL.prototype.QLCQUS.call(this, "baseview/neutral/fx_clouds.png")
}

function SetActive(n) {
    $I.BMZJUL.prototype.NREYTO.call(this, n);
    n ? $I.CVRAYR.VAMLQD().RWLPVY().VQAPBW().DJNLVM((new $I.HCABEE).TFDQYD(this, this.PZDAMD)) : $I.CVRAYR.VAMLQD().RWLPVY().VQAPBW().TSCFVB((new $I.HCABEE).TFDQYD(this, this.PZDAMD))
}

function ViewUpdate() {
    this.RTYPFY.NXPMYM()
}

function get_Mode() {
    return this.VGVRZD
}

function set_Mode(n) {
    this.VGVRZD = n
}

function GetConstructionYard() {
    return this.JAETRX.EGKXNW(0)
}

function ScrollToPosition(n) {
    this.GNHOBL = !0;
    this.NMBJUG = (new Date).getTime();
    this.EJHQGN = this.SPKLVR();
    this.ALBZLT = n
}

function VisUpdate(n) {
    var i, t, r;
    this.GNHOBL && (i = ((new Date).getTime() - this.NMBJUG) / 1e3, t = i / this.WDRBUN, t >= 1 ? (this.GNHOBL = !1, $I.BMZJUL.prototype.LQOHQF.call(this, 0, this.ALBZLT)) : (t = $I.XOJOCY.ELUMSL(t), r = (1 - t) * this.EJHQGN + t * this.ALBZLT, $I.BMZJUL.prototype.AOWZGH.call(this, 0, r - this.SPKLVR())));
    $I.BMZJUL.prototype.QJOFJP.call(this, n)
}

function get_MinXPosition() {
    return $I.OXYXXU.NJRUXP + this.ZMHVSF
}

function get_MinYPosition() {
    return $I.OXYXXU.ZRMOAD - this.RKWJBE
}

function get_MaxXPosition() {
    return $I.OXYXXU.WCJOIQ
}

function get_MaxYPosition() {
    return this.CEDJEL
}

function set_MaxYPosition(n) {
    this.CEDJEL = n
}

function get_GridWidth() {
    return this.XSYPFQ
}

function get_GridHeight() {
    return this.OFFFJW
}

function get_BattlegroundWidth() {
    return 9
}

function get_BattlegroundHeight() {
    return 23
}

function get_DefenseOffsetY() {
    return this.FZOJJR.DTAVSS()
}

function GetRequiredTechWithLevelText(n, t) {
    return webfrontend.phe.cnc.gui.util.Text.getNameWithLevelText(n, t)
}

function GetObjectFromPosition(n, t) {
    return t > this.FZOJJR.DTAVSS() * this.MWRYXH() ? this.JAETRX.FPKBQM(n, t) : this.FZOJJR.MWVNBJ(n, t)
}