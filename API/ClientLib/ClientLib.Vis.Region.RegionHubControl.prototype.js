function Dispose() {
    $I.GPKLTE.prototype.NSFOQM.call(this);
    this.FTPVBR();
    this.YJCZOB != null && (this.YJCZOB.NSFOQM(), this.YJCZOB = null);
    this.CHQNWS != null && this.CHQNWS.NSFOQM()
}

function UpdateObj(n) {
    this.BKYAMO || (this.EVKRVW = n, this.GUATFV(!0))
}

function VisUpdate(n, t, i) {
    var f, r, v, s, p, w, b, h, c, nt, tt, a, o, u, e, l;
    if ($I.GPKLTE.prototype.GGGTTE.call(this, n, t, i), this.PDORMA != null)
        if (r = 0, $I.CVRAYR.VAMLQD().TZZENG().SPVTMU() ? r = $I.CVRAYR.VAMLQD().GRIWFQ().BXKAPJ(this.LREZCC()) : (v = $I.CVRAYR.VAMLQD().RWLPVY().VQAPBW(), r = $I.CVRAYR.VAMLQD().GRIWFQ().BXKAPJ(v.HKZTHI())), this.BFBXZI > 0) {
            if (t >= r - this.BFBXZI) {
                this.PDORMA.NSFOQM();
                var it = (this.SVVIBN + 6) * this.ABCGOU.VVGOEM(),
                    rt = (this.YOJYDM + 6) * this.ABCGOU.MWRYXH(),
                    y = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.are[5]);
                this.PDORMA = (new $I.ZFKFPU).CBDLKU(this.ABCGOU.WHQQMY(), y, it, rt, null);
                this.PDORMA.LTWFAK(r - y.l);
                this.PDORMA.TYDVYV(97);
                this.PDORMA.QOUDUX(1);
                this.BFBXZI = -2
            }
        } else if (this.BFBXZI == -2 && (s = 1750, t >= this.PDORMA.OHJOVD() + s && (p = r - this.PDORMA.OHJOVD() + s, w = t - this.PDORMA.OHJOVD() + s, this.CHQNWS.GUAUQN(w / p), t >= r && (this.BFBXZI = -1)), b = 3e3, t >= this.PDORMA.OHJOVD() + b && this.QIHRMU.l.length == 0))
        for (h = this.SVVIBN; h < this.SVVIBN + this.SPPERN(); h++)
            for (c = this.YOJYDM; c < this.YOJYDM + this.GSNTLN(); c++) {
                var k = h * this.ABCGOU.VVGOEM(),
                    d = c * this.ABCGOU.MWRYXH(),
                    g = this.ABCGOU.RMRGYL(k, d);
                g != null && g.AXKPJR() != $I.CDNXVQ.RegionHubControl && (nt = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.see), tt = (f = (new $I.ZFKFPU).CBDLKU(this.ABCGOU.WHQQMY(), nt, k + this.ABCGOU.VVGOEM(), d + this.ABCGOU.MWRYXH(), null), f.LTWFAK(t + $I.IRSHYN.XISRMB(1e3)), f.TYDVYV(97), f.QOUDUX(0), f), this.QIHRMU.l.push(tt))
            }
    if (this.YJCZOB != null && this.YJCZOB.JFBQON(this.SVVIBN + 3, this.YOJYDM + 3), i && (this.CHQNWS != null && this.CHQNWS.OCAAHR(t), this.PDORMA != null && this.PDORMA.OCAAHR(t), this.QIHRMU.l.length > 0)) {
        for (a = (new $I.UCRMVA).SLPWTI(), e = this.QIHRMU.l, u = 0; u < e.length; u++) o = e[u], o.OCAAHR(t), o.FFYVGM(t) && (o.NSFOQM(), a.l.push(o));
        for (u = a.l, l = 0; l < u.length; l++) e = u[l], this.QIHRMU.WILRBK(e)
    }
}

function IsBlockedField(n, t) {
    return this.EVKRVW.PMZFJH(n, t)
}

function IsBlockedButNotHubItself(n, t) {
    return this.EVKRVW.GMHOUG(n, t)
}

function get_Name() {
    if ($I.CVRAYR.VAMLQD().TZZENG().SPVTMU()) return $I.XOJOCY.CLMQKO("tnf:controlhub 0");
    switch (this.IVWFYF().MELOXD()) {
        case 0:
            return $I.XOJOCY.CLMQKO("tnf:controlhub 1");
        case 1:
            return $I.XOJOCY.CLMQKO("tnf:controlhub 2");
        case 2:
            return $I.XOJOCY.CLMQKO("tnf:controlhub 3");
        case 3:
            return $I.XOJOCY.CLMQKO("tnf:controlhub 4");
        case 4:
            return $I.XOJOCY.CLMQKO("tnf:controlhub 5");
        case 5:
            return $I.XOJOCY.CLMQKO("tnf:controlhub 6");
        case 6:
            return $I.XOJOCY.CLMQKO("tnf:controlhub 7")
    }
    return ""
}

function get_Type() {
    return this.EVKRVW.HDXZII()
}

function get_SelectionX() {
    return this.DGLCVK() + this.PHCVMI
}

function get_SelectionY() {
    return this.XYKFSB() + this.CCDAZP
}

function get_SelectionSizeX() {
    return this.OUKZLV > 0 ? this.OUKZLV : this.SPPERN()
}

function get_SelectionSizeY() {
    return this.VYEBAE > 0 ? this.VYEBAE : this.GSNTLN()
}

function get_SizeX() {
    return this.EVKRVW.SPPERN()
}

function get_SizeY() {
    return this.EVKRVW.GSNTLN()
}

function get_Id() {
    return this.EVKRVW.UQGPFX()
}

function Dispose() {
    $I.GPKLTE.prototype.NSFOQM.call(this);
    this.FTPVBR();
    this.YJCZOB != null && (this.YJCZOB.NSFOQM(), this.YJCZOB = null);
    this.CHQNWS != null && this.CHQNWS.NSFOQM()
}

function UpdateObj(n) {
    this.BKYAMO || (this.EVKRVW = n, this.GUATFV(!0))
}

function VisUpdate(n, t, i) {
    var f, r, v, s, p, w, b, h, c, nt, tt, a, o, u, e, l;
    if ($I.GPKLTE.prototype.GGGTTE.call(this, n, t, i), this.PDORMA != null)
        if (r = 0, $I.CVRAYR.VAMLQD().TZZENG().SPVTMU() ? r = $I.CVRAYR.VAMLQD().GRIWFQ().BXKAPJ(this.LREZCC()) : (v = $I.CVRAYR.VAMLQD().RWLPVY().VQAPBW(), r = $I.CVRAYR.VAMLQD().GRIWFQ().BXKAPJ(v.HKZTHI())), this.BFBXZI > 0) {
            if (t >= r - this.BFBXZI) {
                this.PDORMA.NSFOQM();
                var it = (this.SVVIBN + 6) * this.ABCGOU.VVGOEM(),
                    rt = (this.YOJYDM + 6) * this.ABCGOU.MWRYXH(),
                    y = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.are[5]);
                this.PDORMA = (new $I.ZFKFPU).CBDLKU(this.ABCGOU.WHQQMY(), y, it, rt, null);
                this.PDORMA.LTWFAK(r - y.l);
                this.PDORMA.TYDVYV(97);
                this.PDORMA.QOUDUX(1);
                this.BFBXZI = -2
            }
        } else if (this.BFBXZI == -2 && (s = 1750, t >= this.PDORMA.OHJOVD() + s && (p = r - this.PDORMA.OHJOVD() + s, w = t - this.PDORMA.OHJOVD() + s, this.CHQNWS.GUAUQN(w / p), t >= r && (this.BFBXZI = -1)), b = 3e3, t >= this.PDORMA.OHJOVD() + b && this.QIHRMU.l.length == 0))
        for (h = this.SVVIBN; h < this.SVVIBN + this.SPPERN(); h++)
            for (c = this.YOJYDM; c < this.YOJYDM + this.GSNTLN(); c++) {
                var k = h * this.ABCGOU.VVGOEM(),
                    d = c * this.ABCGOU.MWRYXH(),
                    g = this.ABCGOU.RMRGYL(k, d);
                g != null && g.AXKPJR() != $I.CDNXVQ.RegionHubControl && (nt = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.see), tt = (f = (new $I.ZFKFPU).CBDLKU(this.ABCGOU.WHQQMY(), nt, k + this.ABCGOU.VVGOEM(), d + this.ABCGOU.MWRYXH(), null), f.LTWFAK(t + $I.IRSHYN.XISRMB(1e3)), f.TYDVYV(97), f.QOUDUX(0), f), this.QIHRMU.l.push(tt))
            }
    if (this.YJCZOB != null && this.YJCZOB.JFBQON(this.SVVIBN + 3, this.YOJYDM + 3), i && (this.CHQNWS != null && this.CHQNWS.OCAAHR(t), this.PDORMA != null && this.PDORMA.OCAAHR(t), this.QIHRMU.l.length > 0)) {
        for (a = (new $I.UCRMVA).SLPWTI(), e = this.QIHRMU.l, u = 0; u < e.length; u++) o = e[u], o.OCAAHR(t), o.FFYVGM(t) && (o.NSFOQM(), a.l.push(o));
        for (u = a.l, l = 0; l < u.length; l++) e = u[l], this.QIHRMU.WILRBK(e)
    }
}

function get_VisObjectType() {
    return $I.CDNXVQ.RegionHubControl
}

function MouseOver(n, t) {
    this.CHQNWS != null && (n >= this.SVVIBN + 2 && n <= this.SVVIBN + 4 && t >= this.YOJYDM + 2 && t <= this.YOJYDM + 4 ? this.CHQNWS.IOUEYL(!0) : this.CHQNWS.IOUEYL(!1))
}

function MouseOut() {
    this.CHQNWS != null && this.CHQNWS.IOUEYL(!1)
}

function UiUpdate(n) {
    var t, i;
    this.SWEOJW != null && (t = $I.CVRAYR.VAMLQD().RWLPVY().VQAPBW(), i = Math.max(0, t.HKZTHI() - n), this.KVZWZI.YOJPLZ($I.XOJOCY.WSQFKS(i)))
}

function HideInfos() {
    this.YJCZOB != null && this.YJCZOB.TXFEZJ()
}

function ShowInfos() {
    this.YJCZOB != null && this.YJCZOB.KKWNHR()
}

function GetOccupiedTerminalCount() {
    return this.IVWFYF().IKLQCK()
}

function get_Name() {
    if ($I.CVRAYR.VAMLQD().TZZENG().SPVTMU()) return $I.XOJOCY.CLMQKO("tnf:controlhub 0");
    switch (this.IVWFYF().MELOXD()) {
        case 0:
            return $I.XOJOCY.CLMQKO("tnf:controlhub 1");
        case 1:
            return $I.XOJOCY.CLMQKO("tnf:controlhub 2");
        case 2:
            return $I.XOJOCY.CLMQKO("tnf:controlhub 3");
        case 3:
            return $I.XOJOCY.CLMQKO("tnf:controlhub 4");
        case 4:
            return $I.XOJOCY.CLMQKO("tnf:controlhub 5");
        case 5:
            return $I.XOJOCY.CLMQKO("tnf:controlhub 6");
        case 6:
            return $I.XOJOCY.CLMQKO("tnf:controlhub 7")
    }
    return ""
}

function get_AllianceId() {
    return this.IVWFYF().SZZNBJ()
}

function get_AllianceName() {
    return this.IVWFYF().UMBVWJ()
}

function get_Index() {
    return this.IVWFYF().MELOXD()
}

function get_Level() {
    return this.IVWFYF().JWZPXU()
}

function get_ServerState() {
    return this.IVWFYF().RKSLJD()
}

function get_RespawnStep() {
    return this.IVWFYF().LREZCC()
}