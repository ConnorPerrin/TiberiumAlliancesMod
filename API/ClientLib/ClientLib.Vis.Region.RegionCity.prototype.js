function Dispose() {
    $I.DXCHWP.prototype.NSFOQM.call(this);
    $I.CVRAYR.VAMLQD().ZBVLXL().SJCHZU((new $I.MBLAWJ).TFDQYD(this, this.YXJENH));
    $I.CVRAYR.VAMLQD().ZBVLXL().DVJDXO((new $I.KKGZDI).TFDQYD(this, this.PGSPKV));
    $I.CVRAYR.VAMLQD().OCXRRT().BSLZOF((new $I.FXOYGO).TFDQYD(this, this.SGZBET));
    $I.CVRAYR.VAMLQD().BZCGGY().WSFNOL((new $I.ZWPSFP).TFDQYD(this, this.SGZBET));
    $I.ILHIOR.GILABD().UTPBQS((new $I.SBFJAP).TFDQYD(this, this.PANHQM));
    this.CYHVMR();
    this.CHQNWS != null && (this.CHQNWS.NSFOQM(), this.CHQNWS = null);
    this.YACSKG != null && (this.YACSKG.NSFOQM(), this.YACSKG = null);
    this.XWCNQN != null && (this.XWCNQN.NSFOQM(), this.XWCNQN = null);
    this.DDZAXP != null && (this.DDZAXP.NSFOQM(), this.DDZAXP = null);
    this.BUCWNC != null && (this.BUCWNC.NSFOQM(), this.BUCWNC = null);
    this.NMYPME != null && (this.NMYPME.NSFOQM(), this.NMYPME = null);
    this.CDHJMA != null && (this.CDHJMA.NSFOQM(), this.CDHJMA = null);
    this.FUFPSE != null && (this.FUFPSE.NSFOQM(), this.FUFPSE = null);
    this.WUSAUI != null && (this.WUSAUI.HYNCKV(), this.ABCGOU.WHQQMY().NEHMEK(this.WUSAUI), this.WUSAUI = null)
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

function UpdateColor() {
    this.DKGOGT(this.DVCDCA, this.WSKTAV)
}

function UpdateZoom() {
    this.BKYAMO || this.CSWRUK()
}

function UpdateDungeonLevels() {}

function UpdateMoralDecal() {}

function VisUpdate(n, t, i) {
    this.BKYAMO || (this.HCRBRO() && (this.DXLAXG(this.DVCDCA, this.WSKTAV), this.DKGOGT(this.DVCDCA, this.WSKTAV), this.GUATFV(!1)), this.GUELHR == null || this.HVJWUV || (this.GUELHR.JFBQON(this.SVVIBN, this.YOJYDM), this.GUELHR.FJLGXI(this.KBQRPH())), i && this.CHQNWS != null && this.CHQNWS.OCAAHR(t), i && this.YACSKG != null && this.YACSKG.OCAAHR(t), i && this.XWCNQN != null && this.XWCNQN.OCAAHR(t), i && this.DDZAXP != null && this.DDZAXP.OCAAHR(t), i && this.BUCWNC != null && this.BUCWNC.OCAAHR(t), i && this.NMYPME != null && this.NMYPME.OCAAHR(t), i && this.CDHJMA != null && this.CDHJMA.OCAAHR(t), i && this.FUFPSE != null && (this.FUFPSE.OCAAHR(t), this.FUFPSE.FFYVGM(t) && (this.FUFPSE.NSFOQM(), this.FUFPSE = null)))
}

function UiUpdate(n) {
    var t;
    if (!this.BKYAMO) {
        t = !1;
        this.ZQSPUL(n) && (this.ENOODM = this.ABCGOU.PIZQCI(this.DKYJCE(), this.WSKTAV.MRUFSK != -1 ? this.OXHBUQ : this.WSKTAV.MRUFSK), t = !0);
        this.CSWRUK();
        var i = this.WMSFZO,
            r = this.LHPXKJ,
            u = this.YTXSJY,
            f = this.STFWZZ;
        this.WMSFZO = this.WSKTAV.MBLNDC > 0 && this.WSKTAV.MBLNDC - $I.CVRAYR.VAMLQD().TZZENG().QMPXDI() > n;
        this.LHPXKJ = this.WSKTAV.YBFNTB > 0 && this.WSKTAV.YBFNTB > n;
        this.YTXSJY = this.WSKTAV.TIWYKA > 0 && this.WSKTAV.TIWYKA > n;
        this.STFWZZ = this.WSKTAV.LJFFIV;
        (i != this.WMSFZO || r != this.LHPXKJ || u != this.YTXSJY || t) && this.DXLAXG(this.DVCDCA, this.WSKTAV);
        f != this.KHNAGF() && this.DUWYZF()
    }
}

function HideInfos() {
    this.HVJWUV || (this.HVJWUV = !0, this.GUELHR != null && this.GUELHR.TXFEZJ(), this.HTGVTE() != null && this.PUCLZQ(), this.KHNAGF() && this.WEYFPY())
}

function ShowInfos() {
    this.HVJWUV && (this.HVJWUV = !1, this.GUELHR != null && this.GUELHR.KKWNHR(), (this.HTGVTE() != null || $I.CVRAYR.VAMLQD().BZCGGY().VYAQMA($I.CVRAYR.VAMLQD().ZBVLXL().DCXOLB(), this.WSKTAV.SHMBCM) != null) && this.DQCCUK(), this.KHNAGF() && this.MXEFPO())
}

function Selection() {}

function Deselection() {}

function Dispose() {
    $I.DXCHWP.prototype.NSFOQM.call(this);
    $I.CVRAYR.VAMLQD().ZBVLXL().SJCHZU((new $I.MBLAWJ).TFDQYD(this, this.YXJENH));
    $I.CVRAYR.VAMLQD().ZBVLXL().DVJDXO((new $I.KKGZDI).TFDQYD(this, this.PGSPKV));
    $I.CVRAYR.VAMLQD().OCXRRT().BSLZOF((new $I.FXOYGO).TFDQYD(this, this.SGZBET));
    $I.CVRAYR.VAMLQD().BZCGGY().WSFNOL((new $I.ZWPSFP).TFDQYD(this, this.SGZBET));
    $I.ILHIOR.GILABD().UTPBQS((new $I.SBFJAP).TFDQYD(this, this.PANHQM));
    this.CYHVMR();
    this.CHQNWS != null && (this.CHQNWS.NSFOQM(), this.CHQNWS = null);
    this.YACSKG != null && (this.YACSKG.NSFOQM(), this.YACSKG = null);
    this.XWCNQN != null && (this.XWCNQN.NSFOQM(), this.XWCNQN = null);
    this.DDZAXP != null && (this.DDZAXP.NSFOQM(), this.DDZAXP = null);
    this.BUCWNC != null && (this.BUCWNC.NSFOQM(), this.BUCWNC = null);
    this.NMYPME != null && (this.NMYPME.NSFOQM(), this.NMYPME = null);
    this.CDHJMA != null && (this.CDHJMA.NSFOQM(), this.CDHJMA = null);
    this.FUFPSE != null && (this.FUFPSE.NSFOQM(), this.FUFPSE = null);
    this.WUSAUI != null && (this.WUSAUI.HYNCKV(), this.ABCGOU.WHQQMY().NEHMEK(this.WUSAUI), this.WUSAUI = null)
}

function get_VisObjectType() {
    return $I.CDNXVQ.RegionCityType
}

function UpdateZoom() {
    this.BKYAMO || this.CSWRUK()
}

function setActiveSupportState(n) {
    n ? this.WUSAUI != null && (this.MFPIHK.PTVNAR("battleview/neutral/gui/support_diamond_start.png"), this.UEGRNZ.PTVNAR("battleview/neutral/gui/support_diamond_end.png"), this.EYWNEK.AYIYUY().NJXPRI("#00c2f8")) : this.WUSAUI != null && (this.MFPIHK.PTVNAR("battleview/neutral/gui/support_diamond_start_inactive.png"), this.UEGRNZ.PTVNAR("battleview/neutral/gui/support_diamond_end_inactive.png"), this.EYWNEK.AYIYUY().NJXPRI("#ebebeb"))
}

function HideInfos() {
    this.HVJWUV || (this.HVJWUV = !0, this.GUELHR != null && this.GUELHR.TXFEZJ(), this.HTGVTE() != null && this.PUCLZQ(), this.KHNAGF() && this.WEYFPY())
}

function ShowInfos() {
    this.HVJWUV && (this.HVJWUV = !1, this.GUELHR != null && this.GUELHR.KKWNHR(), (this.HTGVTE() != null || $I.CVRAYR.VAMLQD().BZCGGY().VYAQMA($I.CVRAYR.VAMLQD().ZBVLXL().DCXOLB(), this.WSKTAV.SHMBCM) != null) && this.DQCCUK(), this.KHNAGF() && this.MXEFPO())
}

function ShowSupportPlate() {
    this.SGGRCL && (this.SGGRCL = !1, this.CRFTUY != null && this.ABCGOU.WHQQMY().UVSZDF(this.CRFTUY))
}

function ShowEndgameRevengeTargetPlate() {
    this.FHNBTM && (this.FHNBTM = !1, this.HIKYLN != null && this.ABCGOU.WHQQMY().UVSZDF(this.HIKYLN))
}

function HideEndgameRevengeTargetPlate() {
    this.FHNBTM || (this.FHNBTM = !0, this.HIKYLN != null && this.ABCGOU.WHQQMY().NEHMEK(this.HIKYLN))
}

function UpdateColor() {
    this.DKGOGT(this.DVCDCA, this.WSKTAV)
}

function get_UIType() {
    return "City"
}

function get_Id() {
    return this.WSKTAV.SHMBCM
}

function get_Name() {
    return this.WSKTAV.FDHGTQ
}

function get_ConditionBuildings() {
    var n = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.WSKTAV.SHMBCM),
        t = -1;
    return n != null && (t = n.LRNOID()), Math.max(this.WSKTAV.ERIYPO, t)
}

function get_ConditionDefense() {
    return this.WSKTAV.MRUFSK != -1 && this.WSKTAV.EKSBPJ >= 0 ? (this.ZQSPUL($I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG()), this.OXHBUQ) : this.WSKTAV.MRUFSK
}

function get_BaseLevel() {
    return this.WSKTAV.FVOYDT
}

function get_MainBuildingLevel() {
    return this.WSKTAV.FVOYDT
}

function get_TargetObject() {
    return this.WSKTAV
}

function get_CommandCenterLevel() {
    var n = 0,
        t = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.WSKTAV.SHMBCM);
    return t != null && (n = t.TESPET()), n
}

function get_PlayerId() {
    var n = this.DVCDCA.STALIT(this.WSKTAV.IYYVIM);
    return n == null ? 0 : n.SHCMPC
}

function get_PlayerName() {
    var n = this.DVCDCA.STALIT(this.WSKTAV.IYYVIM);
    return n == null ? "" : n.NVAMCO
}

function get_PlayerFaction() {
    var n = this.DVCDCA.STALIT(this.WSKTAV.IYYVIM);
    return n == null ? -1 : n.CGFBTJ
}

function get_AllianceId() {
    var n = this.DVCDCA.STALIT(this.WSKTAV.IYYVIM),
        t;
    return n == null || n.ZWLTDB == 0 ? 0 : (t = this.DVCDCA.ZCVVLT(n.ZWLTDB), t == null) ? 0 : t.MGDTER
}

function get_AllianceName() {
    var n = this.DVCDCA.STALIT(this.WSKTAV.IYYVIM),
        t;
    return n == null || n.ZWLTDB == 0 ? "" : (t = this.DVCDCA.ZCVVLT(n.ZWLTDB), t == null) ? "" : t.REIPNV
}

function get_HasIncommingAttack() {
    var i = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG(),
        n = this.JLEOSE(),
        t;
    return ($I.CVRAYR.VAMLQD().VYDVFH().UTCQWX(this.KRMSGL()) == n ? n = this.JLEOSE() - $I.CVRAYR.VAMLQD().TZZENG().QMPXDI() : (t = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.KRMSGL()), t != null && (t == null || t.UBTDFB()) || (n = this.JLEOSE() - $I.CVRAYR.VAMLQD().TZZENG().JTTQDG())), !this.WSKTAV.PMXISC) ? n - i > 0 : !0
}

function get_RecoveryEndStep() {
    return this.WSKTAV.QYZKSR
}

function get_LockdownEndStep() {
    return this.WSKTAV.MBLNDC
}

function get_ProtectionEndStep() {
    return this.WSKTAV.YBFNTB
}

function get_SupportAlertStartStep() {
    return this.WSKTAV.LRXEUW
}

function get_SupportAlertEndStep() {
    return this.WSKTAV.TIWYKA
}

function get_MoveCooldownEndStep() {
    return this.WSKTAV.OOXDNG
}

function get_MoveRestrictionEndStep() {
    return this.WSKTAV.JAJDEV
}

function get_MoveRestrictionCoord() {
    return this.WSKTAV.CHNUJB
}

function get_isLocked() {
    var t = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG(),
        n = this.JLEOSE();
    return this.UBTDFB() || (n = this.JLEOSE() - $I.CVRAYR.VAMLQD().TZZENG().JTTQDG()), t < n
}

function get_isProtected() {
    return $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() < this.ERVMXG()
}

function get_isAlerted() {
    return $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() < this.RTMBWV()
}

function get_hasCooldown() {
    return $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() < this.HXPOXM()
}

function get_hasMoveRestriction() {
    return $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() < this.DIFTSU()
}

function get_hasRecovery() {
    return $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() < this.DDVAFA()
}

function get_hasDedicatedSupportBase() {
    var n = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.WSKTAV.SHMBCM);
    return n != null && n.DTZKCD() != 0
}

function get_SupportData() {
    var n = {},
        t;
    return !(n.$r = $I.CVRAYR.VAMLQD().OCXRRT().QKWSNZ().ZOXRAI(this.WSKTAV.SHMBCM, n), t = n.b, n.$r) && (t = $I.CVRAYR.VAMLQD().BZCGGY().VYAQMA($I.CVRAYR.VAMLQD().ZBVLXL().DCXOLB(), this.WSKTAV.SHMBCM), t == null) ? null : t
}

function get_SupportWeapon() {
    var n, t = this.HTGVTE();
    return t != null && (n = $I.BUEVKL.QGLUJV().VXAMCA().supportTechs[t.GIRXAB()], n == undefined ? !1 : !0) ? n : null
}

function get_IsEndgameRevengeTarget() {
    return this.STFWZZ
}

function get_IsTerminalBase() {
    return this.TNFPKH
}

function get_CanUseEndGameDebuff() {
    var n = $I.CVRAYR.VAMLQD().RWLPVY().EVGGZM(Math.floor(this.FDMIUF()), Math.floor(this.ICDVYS()));
    return n != null && this.ZEVASN() > 0 && n.SZZNBJ() == this.ZEVASN()
}

function IsOwnBase() {
    var n = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.WSKTAV.SHMBCM);
    return n != null && n.UBTDFB()
}

function get_SupportWeaponStatus() {
    return this.QDCIUS(this.HTGVTE(), this.CZQRWF())
}

function CalibrationSupportDuration() {
    var t = $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI(),
        i = this.HTGVTE(),
        n;
    if (i == null || (n = this.CZQRWF(), n == null)) return -1;
    if (t.UQGPFX() == this.WSKTAV.SHMBCM) return i.FKXZMA() == 0 ? -1 : 0;
    var r = t.OFYSUK() - this.SVVIBN,
        u = t.FQVDES() - this.YOJYDM,
        f = r * r + u * u;
    return Math.floor(n.pt + n.tpf * Math.floor(Math.sqrt(f) + .5))
}

function CalculateSupportCalibrationEndStep(n, t) {
    var i = $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI(),
        u, f;
    if (n == null || (u = t, u == null)) return -1;
    var s = -1,
        r = -1,
        h = i.OFYSUK() - this.SVVIBN,
        c = i.FQVDES() - this.YOJYDM,
        e = h * h + c * c,
        o = $I.CVRAYR.VAMLQD().BZCGGY().VYAQMA(i.UQGPFX(), this.WSKTAV.SHMBCM);
    if (o != null) r = o.DBSFHR(), u = $I.BUEVKL.QGLUJV().VXAMCA().supportTechs[o.GIRXAB()], u == undefined ? !1 : !0;
    else if (i.UQGPFX() == this.WSKTAV.SHMBCM && i.DTZKCD() == 0) e = 0, r = i.ZMSHEC();
    else if (i.UQGPFX() == this.WSKTAV.SHMBCM && i.DTZKCD() != 0) {
        var l = i.NOIOJF(),
            y = l & 65535,
            p = l >> 16 & 65535,
            a = i.OFYSUK() - y,
            v = i.FQVDES() - p;
        e = a * a + v * v;
        r = i.ZMSHEC()
    } else r = Math.max(i.MYOJWG(), n.DBSFHR()), this.NDJCKU() == $I.CETLAV.Alliance && i.RHDKEZ() && (f = $I.CVRAYR.VAMLQD().FMKUPK().ULLWWE(this.BAOOAM()), f != null && (r = Math.max(r, f.JoinStep)), f = $I.CVRAYR.VAMLQD().FMKUPK().ULLWWE(i.CPVNPP()), f != null && (r = Math.max(r, f.JoinStep)));
    return s = Math.floor(u.pt + u.tpf * Math.sqrt(e) + .5), i.VUAHHF() && r < i.ERVMXG() && (r = i.ERVMXG()), r + s
}

function MouseOver() {
    this.CHQNWS != null && this.WSKTAV.SHMBCM != $I.CVRAYR.VAMLQD().ZBVLXL().SWRFAR() && (this.CHQNWS.IOUEYL(!0), $I.CVRAYR.VAMLQD().ZBVLXL().DCXOLB() == this.WSKTAV.SHMBCM && this.VLQXKA(!1))
}

function MouseOut() {
    this.CHQNWS != null && this.WSKTAV.SHMBCM != $I.CVRAYR.VAMLQD().ZBVLXL().SWRFAR() && (this.CHQNWS.IOUEYL(!1), $I.CVRAYR.VAMLQD().ZBVLXL().DCXOLB() == this.WSKTAV.SHMBCM && this.VLQXKA(!0))
}

function CalculateDefenseCondition(n) {
    var t = !1,
        u, i, r;
    return this.WSKTAV.TIWYKA > n && this.WSKTAV.EKSBPJ <= n ? this.WSKTAV.MRUFSK != -1 && (u = Math.floor((n - this.WSKTAV.EKSBPJ) * (100 - this.WSKTAV.MRUFSK) / (this.WSKTAV.TIWYKA - this.WSKTAV.EKSBPJ)), i = $I.JGXBTR.URWFTN(u + this.WSKTAV.MRUFSK), i != this.OXHBUQ && (this.OXHBUQ = i, t = !0)) : this.WSKTAV.TIWYKA < n && (r = 100, r != this.OXHBUQ && (this.OXHBUQ = r, t = !0)), this.OXHBUQ = Math.min(100, this.OXHBUQ), t
}

function UiUpdate(n) {
    var t;
    if (!this.BKYAMO) {
        t = !1;
        this.ZQSPUL(n) && (this.ENOODM = this.ABCGOU.PIZQCI(this.DKYJCE(), this.WSKTAV.MRUFSK != -1 ? this.OXHBUQ : this.WSKTAV.MRUFSK), t = !0);
        this.CSWRUK();
        var i = this.WMSFZO,
            r = this.LHPXKJ,
            u = this.YTXSJY,
            f = this.STFWZZ;
        this.WMSFZO = this.WSKTAV.MBLNDC > 0 && this.WSKTAV.MBLNDC - $I.CVRAYR.VAMLQD().TZZENG().QMPXDI() > n;
        this.LHPXKJ = this.WSKTAV.YBFNTB > 0 && this.WSKTAV.YBFNTB > n;
        this.YTXSJY = this.WSKTAV.TIWYKA > 0 && this.WSKTAV.TIWYKA > n;
        this.STFWZZ = this.WSKTAV.LJFFIV;
        (i != this.WMSFZO || r != this.LHPXKJ || u != this.YTXSJY || t) && this.DXLAXG(this.DVCDCA, this.WSKTAV);
        f != this.KHNAGF() && this.DUWYZF()
    }
}

function VisUpdate(n, t, i) {
    this.BKYAMO || (this.HCRBRO() && (this.DXLAXG(this.DVCDCA, this.WSKTAV), this.DKGOGT(this.DVCDCA, this.WSKTAV), this.GUATFV(!1)), this.GUELHR == null || this.HVJWUV || (this.GUELHR.JFBQON(this.SVVIBN, this.YOJYDM), this.GUELHR.FJLGXI(this.KBQRPH())), i && this.CHQNWS != null && this.CHQNWS.OCAAHR(t), i && this.YACSKG != null && this.YACSKG.OCAAHR(t), i && this.XWCNQN != null && this.XWCNQN.OCAAHR(t), i && this.DDZAXP != null && this.DDZAXP.OCAAHR(t), i && this.BUCWNC != null && this.BUCWNC.OCAAHR(t), i && this.NMYPME != null && this.NMYPME.OCAAHR(t), i && this.CDHJMA != null && this.CDHJMA.OCAAHR(t), i && this.FUFPSE != null && (this.FUFPSE.OCAAHR(t), this.FUFPSE.FFYVGM(t) && (this.FUFPSE.NSFOQM(), this.FUFPSE = null)))
}

function CanMove() {
    var n = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.WSKTAV.SHMBCM);
    return n.UBTDFB() ? n.KPOPDB() : $I.BSOKEY.Fail
}

function ShowDebuffEffect() {
    var n;
    this.FUFPSE != null && this.FUFPSE.NSFOQM();
    this.FUFPSE = null;
    n = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.veb);
    this.FUFPSE = (new $I.ZFKFPU).CBDLKU(this.ABCGOU.WHQQMY(), n, (this.SVVIBN + 1) * this.ABCGOU.VVGOEM() + this.XMJQQO, (this.YOJYDM + 1) * this.ABCGOU.MWRYXH() + this.WWGSDO, null);
    this.FUFPSE.TYDVYV(97);
    this.FUFPSE.OCAAHR(5)
}

function get_Type() {
    var n = $I.CVRAYR.VAMLQD().ONGTRQ();
    if (n != null) {
        if (this.BAOOAM() == n.UQGPFX()) return $I.CETLAV.Own;
        if (this.BAOOAM() != n.UQGPFX() && this.ZEVASN() > 0 && n.SZZNBJ() > 0 && this.ZEVASN() == n.SZZNBJ()) return $I.CETLAV.Alliance
    }
    return $I.CETLAV.Enemy
}