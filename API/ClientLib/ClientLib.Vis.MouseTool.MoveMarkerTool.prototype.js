function GetMouseToolType() {
    return $I.PLIBEB.MoveMarker
}

function Move(n, t) {
    var i = this.XJONSQ.KIJEST();
    return n = Math.min(Math.max(0, i.NHCCYM(n)), i.QVMFBM()), t = Math.min(Math.max(0, i.ZTMGNL(t)), i.YFBXGB()), (n != this.TXDMOB || t != this.ZANZQK) && (this.TXDMOB = Math.floor(n), this.ZANZQK = Math.floor(t), this.DMGEPN(), this.MZIXOY()), !0
}

function UpdateMouseCursor() {
    var n = this.XJONSQ.KIJEST(),
        t = Math.floor(this.TXDMOB / n.VVGOEM()),
        i = Math.floor(this.ZANZQK / n.MWRYXH());
    (t != this.WIWSDX || i != this.VUTDCP) && (this.WIWSDX = t, this.VUTDCP = i, this.SAYKNE != null && this.SAYKNE.YKCVJH(this.WIWSDX, this.VUTDCP))
}

function KeyDown() {}

function KeyUp() {}

function Down() {
    return !0
}

function Up(n, t, i) {
    return this.SUOYLN != null && this.SUOYLN.WKIGJZ(this.WIWSDX, this.VUTDCP, i), !0
}

function SetInfo(n) {
    this.DVAOAV = n == null ? 0 : n;
    this.XOAOQJ() != null && (this.WIWSDX = Math.floor(this.XOAOQJ().EZVHOT() / this.XJONSQ.KIJEST().VVGOEM()), this.VUTDCP = Math.floor(this.XOAOQJ().JXTDIO() / this.XJONSQ.KIJEST().MWRYXH()))
}

function Activate() {
    var n = this.XJONSQ.KIJEST().WHQQMY(),
        t, i, r;
    this.ZTXWOQ = "battleview/neutral/gui/move_target_circle_valid.png";
    this.WKVKLV = "battleview/neutral/gui/move_target_circle_invalid.png";
    this.JEZCEX = $I.QOKGWR.WBFJPT().VDQLZP(this.ZTXWOQ);
    this.YJOYFX = $I.QOKGWR.WBFJPT().VDQLZP(this.WKVKLV);
    this.LAXJDU = this.XJONSQ.AYELRA().VVGOEM();
    this.LWPREU = this.XJONSQ.AYELRA().MWRYXH();
    this.YJBQNV == null && (t = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.dve), this.YJBQNV = (new $I.ZFKFPU).CBDLKU(this.XJONSQ.AYELRA().WHQQMY(), t, (this.TXDMOB + this.LAXJDU) * this.XJONSQ.AYELRA().VVGOEM(), (this.ZANZQK + this.LWPREU) * this.XJONSQ.AYELRA().MWRYXH(), null), this.YJBQNV.TYDVYV(16), this.YJBQNV.QOUDUX(1));
    this.YJBQNV.ZTDRHV();
    this.UICLKA == null && (i = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.die), this.UICLKA = (new $I.ZFKFPU).CBDLKU(this.XJONSQ.AYELRA().WHQQMY(), i, (this.TXDMOB + this.LAXJDU) * this.XJONSQ.AYELRA().VVGOEM(), (this.ZANZQK + this.LWPREU) * this.XJONSQ.AYELRA().MWRYXH(), null), this.UICLKA.TYDVYV(16), this.UICLKA.QOUDUX(1));
    this.UICLKA.ZTDRHV();
    this.GDEWML = n.TDBBHP("shape", null);
    this.GDEWML.TYDVYV(16);
    this.GDEWML.QOUDUX(2);
    n.UVSZDF(this.GDEWML);
    this.GQKMPH = n.TDBBHP("image", null);
    this.GQKMPH.TYDVYV(16);
    this.GQKMPH.QOUDUX(2);
    n.UVSZDF(this.GQKMPH);
    this.TXDMOB = -1;
    this.ZANZQK = -1;
    r = $I.CVRAYR.VAMLQD().UXQPUS();
    this.SNHUFS == null && (this.SNHUFS = n.UHZXOZ("pen"), this.SNHUFS != null && (this.SNHUFS.NJXPRI("#00FD00"), this.SNHUFS.RPMLTV(4)));
    this.AHJMKN == null && (this.AHJMKN = n.UHZXOZ("pen"), this.AHJMKN != null && (this.AHJMKN.NJXPRI("#FF0000"), this.AHJMKN.RPMLTV(4)))
}

function Deactivate() {
    var n;
    this.XJONSQ.ENNVKQ($I.HYIXRB.Default);
    n = this.XJONSQ.KIJEST();
    this.YJBQNV != null && (this.YJBQNV.NSFOQM(), this.YJBQNV = null);
    this.UICLKA != null && (this.UICLKA.NSFOQM(), this.UICLKA = null);
    this.GDEWML != null && (n.WHQQMY().NEHMEK(this.GDEWML), this.GDEWML = null);
    this.GQKMPH != null && (n.WHQQMY().NEHMEK(this.GQKMPH), this.GQKMPH = null);
    this.GQGJGP = !1;
    this.MQGEUF()
}

function DeactivateToolTip() {}

function VisUpdate() {
    var n = (new Date).getTime();
    this.YJBQNV != null && this.YJBQNV.OCAAHR(n);
    this.UICLKA != null && this.UICLKA.OCAAHR(n)
}

function TouchStart() {
    return !1
}

function TouchMove() {
    return !1
}

function TouchEnd(n) {
    return this.XNSDOS(n[0].X, n[0].Y)
}

function TouchCancel() {
    return !1
}

function get_Marker() {
    return this.DVAOAV <= 0 ? null : $I.CVRAYR.VAMLQD().FMKUPK().QKHUSN(this.DVAOAV)
}

function add_OnCellChange(n) {
    var t = {},
        i, r = this.SAYKNE,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.SAYKNE, t.$r = $I.TSJVQL.JXWJWI($I.XNUOGC, u, i, t), this.SAYKNE = t.a, t.$r); while (r != i)
}

function remove_OnCellChange(n) {
    var t = {},
        i, r = this.SAYKNE,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.SAYKNE, t.$r = $I.TSJVQL.JXWJWI($I.XNUOGC, u, i, t), this.SAYKNE = t.a, t.$r); while (r != i)
}

function add_OnMouseUp(n) {
    var t = {},
        i, r = this.SUOYLN,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.SUOYLN, t.$r = $I.TSJVQL.JXWJWI($I.DYSLHG, u, i, t), this.SUOYLN = t.a, t.$r); while (r != i)
}

function remove_OnMouseUp(n) {
    var t = {},
        i, r = this.SUOYLN,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.SUOYLN, t.$r = $I.TSJVQL.JXWJWI($I.DYSLHG, u, i, t), this.SUOYLN = t.a, t.$r); while (r != i)
}