function Dispose() {
    var t, i, n;
    if ($I.GPKLTE.prototype.NSFOQM.call(this), this.CHQNWS != null && this.CHQNWS.NSFOQM(), this.XGCLYV != null && this.XGCLYV.NSFOQM(), this.SCDZRQ.l.length > 0)
        for (t = this.SCDZRQ.l, n = 0; n < t.length; n++) i = t[n], i.NSFOQM();
    this.YYJUOG()
}

function UpdateObj(n) {
    this.BKYAMO || (this.EVKRVW = n, this.GUATFV(!0))
}

function VisUpdate(n, t, i) {
    var u, a, p, s, b, k, d, h, c, it, rt, w, e, r, f, l;
    if ($I.GPKLTE.prototype.GGGTTE.call(this, n, t, i), this.PQBEGO().RKSLJD() == $I.BLNKMP.Impact)
        if (this.MFMFIT > 0) {
            if (a = $I.CVRAYR.VAMLQD().GRIWFQ().BXKAPJ(this.PQBEGO().HKZTHI()), t >= a - this.MFMFIT) {
                this.CHQNWS != null && this.CHQNWS.NSFOQM();
                var v = (this.SVVIBN + this.SPPERN()) * this.ABCGOU.VVGOEM(),
                    y = (this.YOJYDM + this.GSNTLN()) * this.ABCGOU.MWRYXH(),
                    o = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.are[1]);
                this.CHQNWS = (new $I.ZFKFPU).CBDLKU(this.ABCGOU.WHQQMY(), o, v, y, null);
                this.CHQNWS.TYDVYV(6);
                this.CHQNWS.QOUDUX(0);
                this.CHQNWS.GUAUQN(0);
                v = (this.SVVIBN + this.SPPERN()) * this.ABCGOU.VVGOEM();
                y = (this.YOJYDM + this.GSNTLN()) * this.ABCGOU.MWRYXH();
                o = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.sie);
                this.XGCLYV = (new $I.ZFKFPU).CBDLKU(this.ABCGOU.WHQQMY(), o, v, y, null);
                this.XGCLYV.LTWFAK(a - o.l);
                this.XGCLYV.TYDVYV(97);
                this.XGCLYV.QOUDUX(1);
                this.MFMFIT = -2
            }
        } else if (this.MFMFIT == -2 && (p = $I.CVRAYR.VAMLQD().GRIWFQ().BXKAPJ(this.PQBEGO().HKZTHI()), s = 1750, t >= this.XGCLYV.OHJOVD() + s && (b = p - this.XGCLYV.OHJOVD() + s, k = t - this.XGCLYV.OHJOVD() + s, this.CHQNWS.GUAUQN(k / b), t >= p && (this.MFMFIT = -1)), d = 3e3, t >= this.XGCLYV.OHJOVD() + d && this.SCDZRQ.l.length == 0))
        for (h = this.SVVIBN; h < this.SVVIBN + this.SPPERN(); h++)
            for (c = this.YOJYDM; c < this.YOJYDM + this.GSNTLN(); c++) {
                var g = h * this.ABCGOU.VVGOEM(),
                    nt = c * this.ABCGOU.MWRYXH(),
                    tt = this.ABCGOU.RMRGYL(g, nt);
                tt != null && tt.AXKPJR() != $I.CDNXVQ.RegionHubServer && (it = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.see), rt = (u = (new $I.ZFKFPU).CBDLKU(this.ABCGOU.WHQQMY(), it, g + this.ABCGOU.VVGOEM(), nt + this.ABCGOU.MWRYXH(), null), u.LTWFAK(t + $I.IRSHYN.XISRMB(1e3)), u.TYDVYV(97), u.QOUDUX(0), u), this.SCDZRQ.l.push(rt))
            }
    if (i && this.CHQNWS != null && this.CHQNWS.OCAAHR(t), i && this.XGCLYV != null && this.XGCLYV.OCAAHR(t), i && this.SCDZRQ.l.length > 0) {
        for (w = (new $I.UCRMVA).SLPWTI(), f = this.SCDZRQ.l, r = 0; r < f.length; r++) e = f[r], e.OCAAHR(t), e.FFYVGM(t) && (e.NSFOQM(), w.l.push(e));
        for (r = w.l, l = 0; l < r.length; l++) f = r[l], this.SCDZRQ.WILRBK(f)
    }
}

function IsBlockedField(n, t) {
    return this.EVKRVW.PMZFJH(n, t)
}

function IsBlockedButNotHubItself(n, t) {
    return this.EVKRVW.GMHOUG(n, t)
}

function get_Name() {
    return $I.XOJOCY.CLMQKO("tnf:controlhub server")
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
    var t, i, n;
    if ($I.GPKLTE.prototype.NSFOQM.call(this), this.CHQNWS != null && this.CHQNWS.NSFOQM(), this.XGCLYV != null && this.XGCLYV.NSFOQM(), this.SCDZRQ.l.length > 0)
        for (t = this.SCDZRQ.l, n = 0; n < t.length; n++) i = t[n], i.NSFOQM();
    this.YYJUOG()
}

function UpdateObj(n) {
    this.BKYAMO || (this.EVKRVW = n, this.GUATFV(!0))
}

function VisUpdate(n, t, i) {
    var u, a, p, s, b, k, d, h, c, it, rt, w, e, r, f, l;
    if ($I.GPKLTE.prototype.GGGTTE.call(this, n, t, i), this.PQBEGO().RKSLJD() == $I.BLNKMP.Impact)
        if (this.MFMFIT > 0) {
            if (a = $I.CVRAYR.VAMLQD().GRIWFQ().BXKAPJ(this.PQBEGO().HKZTHI()), t >= a - this.MFMFIT) {
                this.CHQNWS != null && this.CHQNWS.NSFOQM();
                var v = (this.SVVIBN + this.SPPERN()) * this.ABCGOU.VVGOEM(),
                    y = (this.YOJYDM + this.GSNTLN()) * this.ABCGOU.MWRYXH(),
                    o = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.are[1]);
                this.CHQNWS = (new $I.ZFKFPU).CBDLKU(this.ABCGOU.WHQQMY(), o, v, y, null);
                this.CHQNWS.TYDVYV(6);
                this.CHQNWS.QOUDUX(0);
                this.CHQNWS.GUAUQN(0);
                v = (this.SVVIBN + this.SPPERN()) * this.ABCGOU.VVGOEM();
                y = (this.YOJYDM + this.GSNTLN()) * this.ABCGOU.MWRYXH();
                o = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.sie);
                this.XGCLYV = (new $I.ZFKFPU).CBDLKU(this.ABCGOU.WHQQMY(), o, v, y, null);
                this.XGCLYV.LTWFAK(a - o.l);
                this.XGCLYV.TYDVYV(97);
                this.XGCLYV.QOUDUX(1);
                this.MFMFIT = -2
            }
        } else if (this.MFMFIT == -2 && (p = $I.CVRAYR.VAMLQD().GRIWFQ().BXKAPJ(this.PQBEGO().HKZTHI()), s = 1750, t >= this.XGCLYV.OHJOVD() + s && (b = p - this.XGCLYV.OHJOVD() + s, k = t - this.XGCLYV.OHJOVD() + s, this.CHQNWS.GUAUQN(k / b), t >= p && (this.MFMFIT = -1)), d = 3e3, t >= this.XGCLYV.OHJOVD() + d && this.SCDZRQ.l.length == 0))
        for (h = this.SVVIBN; h < this.SVVIBN + this.SPPERN(); h++)
            for (c = this.YOJYDM; c < this.YOJYDM + this.GSNTLN(); c++) {
                var g = h * this.ABCGOU.VVGOEM(),
                    nt = c * this.ABCGOU.MWRYXH(),
                    tt = this.ABCGOU.RMRGYL(g, nt);
                tt != null && tt.AXKPJR() != $I.CDNXVQ.RegionHubServer && (it = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.see), rt = (u = (new $I.ZFKFPU).CBDLKU(this.ABCGOU.WHQQMY(), it, g + this.ABCGOU.VVGOEM(), nt + this.ABCGOU.MWRYXH(), null), u.LTWFAK(t + $I.IRSHYN.XISRMB(1e3)), u.TYDVYV(97), u.QOUDUX(0), u), this.SCDZRQ.l.push(rt))
            }
    if (i && this.CHQNWS != null && this.CHQNWS.OCAAHR(t), i && this.XGCLYV != null && this.XGCLYV.OCAAHR(t), i && this.SCDZRQ.l.length > 0) {
        for (w = (new $I.UCRMVA).SLPWTI(), f = this.SCDZRQ.l, r = 0; r < f.length; r++) e = f[r], e.OCAAHR(t), e.FFYVGM(t) && (e.NSFOQM(), w.l.push(e));
        for (r = w.l, l = 0; l < r.length; l++) f = r[l], this.SCDZRQ.WILRBK(f)
    }
}

function get_VisObjectType() {
    return $I.CDNXVQ.RegionHubServer
}

function MouseOver() {
    this.CHQNWS != null && this.CHQNWS.IOUEYL(!0)
}

function MouseOut() {
    this.CHQNWS != null && this.CHQNWS.IOUEYL(!1)
}

function UiUpdate(n) {
    var t;
    this.UXNYCQ != null && (t = Math.max(0, this.HKZTHI() - n), this.PWMULQ.YOJPLZ($I.XOJOCY.WSQFKS(t)))
}

function HideInfos() {}

function ShowInfos() {}

function get_Name() {
    return $I.XOJOCY.CLMQKO("tnf:controlhub server")
}

function get_EndStep() {
    return this.PQBEGO().HKZTHI()
}

function get_ServerState() {
    return this.PQBEGO().RKSLJD()
}

function get_Obj() {
    return this.EVKRVW
}