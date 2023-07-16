function Init() {
    var n, t;
    $I.BMZJUL.prototype.NXWPIH.call(this);
    $I.JNXAOS.NXWPIH();
    n = $I.QOKGWR.WBFJPT().VDQLZP($I.BMZJUL.prototype.BXVKFX.call(this));
    t = $I.QOKGWR.WBFJPT().VDQLZP("battleground/neutral/background_defence.jpg");
    this.PEIUNV = this.RRBVEU.TDBBHP("imagesegment", null);
    this.PEIUNV.PTVNAR($I.BMZJUL.prototype.BXVKFX.call(this));
    this.PEIUNV.EVVIKY($I.RRZRQV.XQCJLJ - $I.RRZRQV.OHOVFJ[0]);
    this.PEIUNV.WJAECQ($I.RRZRQV.IAHVHZ - $I.RRZRQV.OHOVFJ[1] + $I.OXYXXU.NCYKKL);
    this.PEIUNV.BMIJEH(n.w);
    this.PEIUNV.NQJJZY(n.h - 2 * $I.ZPZTNI.KAMYOL);
    this.PEIUNV.AGGCMU(0, $I.ZPZTNI.KAMYOL / n.h, 1, (n.h - $I.ZPZTNI.KAMYOL) / n.h);
    this.OLFFQB = this.RRBVEU.TDBBHP("image", null);
    this.TOJGUD = this.RRBVEU.TDBBHP("imagesegment", null);
    this.TOJGUD.PTVNAR($I.BMZJUL.prototype.GNOLXZ.call(this));
    this.TOJGUD.BMIJEH(this.PEIUNV.DZSXHC());
    this.TOJGUD.EVVIKY(this.PEIUNV.DGLCVK());
    this.GDKLZJ = this.RRBVEU.TDBBHP("imagesegment", null);
    this.GDKLZJ.PTVNAR("battleground/neutral/background_defence.jpg");
    this.GDKLZJ.BMIJEH(t.w);
    this.GDKLZJ.NQJJZY(t.h - $I.ZPZTNI.KAMYOL);
    this.GDKLZJ.AGGCMU(0, $I.ZPZTNI.KAMYOL / t.h, 1, 1);
    this.OLFFQB.TYDVYV(0);
    this.PEIUNV.TYDVYV(0);
    this.GDKLZJ.TYDVYV(0);
    this.TOJGUD.TYDVYV(0);
    this.OLFFQB.QOUDUX(1);
    this.PEIUNV.QOUDUX(2);
    this.GDKLZJ.QOUDUX(3);
    this.TOJGUD.QOUDUX(4);
    this.RRBVEU.UVSZDF(this.OLFFQB);
    this.RRBVEU.UVSZDF(this.PEIUNV);
    this.RRBVEU.UVSZDF(this.GDKLZJ);
    this.RRBVEU.UVSZDF(this.TOJGUD);
    this.XNVDVT.NDHYZP((new $I.SBFJAP).TFDQYD(this, this.WZIVDY));
    this.WZIVDY(this.XNVDVT.ZJZRTW());
    $I.CVRAYR.VAMLQD().ZBVLXL().RTWSTZ((new $I.KKGZDI).TFDQYD(this, this.QTHDSW))
}

function get_GridWidth() {
    return this.NRMGLV
}

function get_GridHeight() {
    return this.SLJWLW
}

function get_MinXPosition() {
    return $I.RRZRQV.XQCJLJ + this.PDPJCI
}

function get_MaxXPosition() {
    return this.MQEOHA.JCWRNK() * this.NRMGLV + $I.RRZRQV.ZLDQAB
}

function get_MinYPosition() {
    return $I.RRZRQV.IAHVHZ + this.ZPIBGU
}

function get_MaxYPosition() {
    return $I.RRZRQV.PSCOHJ
}

function get_OffsetBgDecoHeight() {
    return this.MZESKI
}

function get_OffsetBgHeight() {
    return this.DVMKUB
}

function get_OffsetBgSpaceLeft() {
    return this.SEOEHV
}

function get_SegmentBgDeco() {
    return this.TOJGUD
}

function get_SegmentBg() {
    return this.PEIUNV
}

function GetObjectFromPosition(n, t) {
    return this.MQEOHA.MWVNBJ(n, t)
}

function GetAllCityObjectsFromPosition(n, t) {
    return this.MQEOHA.HDXOXM(n, t)
}

function GetObjectFromGridPositionByObjectType(n, t, i) {
    return this.MQEOHA.RPRVWP(n, t, i)
}