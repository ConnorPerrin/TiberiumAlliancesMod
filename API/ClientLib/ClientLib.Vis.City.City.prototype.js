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