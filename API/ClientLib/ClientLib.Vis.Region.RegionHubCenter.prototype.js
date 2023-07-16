function Dispose() {
    $I.GPKLTE.prototype.NSFOQM.call(this);
    this.CHQNWS != null && this.CHQNWS.NSFOQM();
    this.KTUXHP != null && this.KTUXHP.NSFOQM();
    this.LTIBZT != null && this.LTIBZT.NSFOQM();
    this.IWLFDG != null && this.IWLFDG.NSFOQM();
    this.IBVOWL != null && this.IBVOWL.NSFOQM();
    this.YYJUOG()
}

function UpdateObj(n) {
    var t, i;
    if (!this.BKYAMO) {
        this.EVKRVW = n;
        switch (this.ZTSGGC().TNYGND()) {
            case $I.BLNKMP.Claim:
                this.BNXOPA = !0;
                this.MQPGBQ == null && this.ZTSGGC().HKZTHI() > 0 && this.ZTSGGC().HKZTHI() > $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() && this.ALXWBJ("battleview/neutral/endgame/Mainbase_shild_timer.png");
                t = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.sdehc);
                t != null && (this.SCJYTA = t.l);
                break;
            case $I.BLNKMP.Attackable:
                this.TWKBWT != this.ZTSGGC().VFXJWC() && (this.TWKBWT = this.ZTSGGC().VFXJWC(), this.ZPDBXB());
                this.YYJUOG();
                this.MQPGBQ == null && this.ZTSGGC().VFXJWC() > 0 && this.ALXWBJ("battleview/neutral/endgame/Mainbase_hack_timer.png");
                i = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG();
                this.WTZATM = this.ZTSGGC().DKYJCE();
                this.RDSDBE = this.ZTSGGC().XIAYAZ();
                this.XKHGJE(i);
                this.RAZUOS = this.ABCGOU.PIZQCI(this.WTZATM, this.ZTSGGC().XIAYAZ() != -1 ? this.RDSDBE : this.ZTSGGC().XIAYAZ());
                this.PKVXLD = this.ZTSGGC().JLEOSE() - $I.CVRAYR.VAMLQD().TZZENG().QMPXDI() > i;
                break;
            case $I.BLNKMP.Ruin:
            case $I.BLNKMP.NONE:
                this.YYJUOG()
        }
        this.GUATFV(!0)
    }
}

function VisUpdate(n, t, i) {
    var u, o;
    if ($I.GPKLTE.prototype.GGGTTE.call(this, n, t, i), this.ZTSGGC().TNYGND() == $I.BLNKMP.Claim)
        if (this.SCJYTA > 0) {
            if (u = $I.CVRAYR.VAMLQD().GRIWFQ().BXKAPJ(this.ZTSGGC().HKZTHI()), t >= u - this.SCJYTA) {
                this.CHQNWS != null && this.CHQNWS.NSFOQM();
                this.XMZGVS = $I.BUEVKL.QGLUJV().VXAMCA().regionlayer.the[1];
                var f = (this.SVVIBN + this.SPPERN()) * this.ABCGOU.VVGOEM(),
                    e = (this.YOJYDM + this.GSNTLN()) * this.ABCGOU.MWRYXH(),
                    r = $I.BUEVKL.QGLUJV().WJVSOL(this.XMZGVS);
                this.CHQNWS = (new $I.ZFKFPU).CBDLKU(this.ABCGOU.WHQQMY(), r, f, e, null);
                this.CHQNWS.TYDVYV(7);
                this.CHQNWS.QOUDUX(0);
                this.CHQNWS.GUAUQN(0);
                this.IWLFDG != null && this.IWLFDG.NSFOQM();
                this.BDSBNM = $I.BUEVKL.QGLUJV().VXAMCA().regionlayer.sdehc;
                f = (this.SVVIBN + this.SPPERN()) * this.ABCGOU.VVGOEM();
                e = (this.YOJYDM + this.GSNTLN()) * this.ABCGOU.MWRYXH();
                r = $I.BUEVKL.QGLUJV().WJVSOL(this.BDSBNM);
                this.IWLFDG = (new $I.ZFKFPU).CBDLKU(this.ABCGOU.WHQQMY(), r, f, e, null);
                this.IWLFDG.LTWFAK(u - r.l);
                this.IWLFDG.TYDVYV(97);
                this.CHQNWS != null && this.CHQNWS.GUAUQN(0);
                this.SCJYTA = -2
            }
        } else this.SCJYTA == -2 && (o = $I.CVRAYR.VAMLQD().GRIWFQ().BXKAPJ(this.ZTSGGC().HKZTHI()), (this.IWLFDG == null || t >= this.IWLFDG.OHJOVD() + this.SCJYTA) && (this.CHQNWS.GUAUQN(1), t >= o && (this.SCJYTA = -1)));
    i && this.CHQNWS != null && this.CHQNWS.OCAAHR(t);
    i && this.KTUXHP != null && this.KTUXHP.OCAAHR(t);
    i && this.LTIBZT != null && this.LTIBZT.OCAAHR(t);
    i && this.IWLFDG != null && (this.IWLFDG.OCAAHR(t), this.IWLFDG.FFYVGM(t) && (this.IWLFDG.NSFOQM(), this.IWLFDG = null));
    i && this.IBVOWL != null && (this.IBVOWL.OCAAHR(t), (this.IBVOWL.FFYVGM(t) || this.VFXJWC() == 0) && (this.IBVOWL.NSFOQM(), this.IBVOWL = null))
}

function IsBlockedField(n, t) {
    return this.EVKRVW.PMZFJH(n, t)
}

function IsBlockedButNotHubItself(n, t) {
    return this.EVKRVW.GMHOUG(n, t)
}

function get_Name() {
    return $I.XOJOCY.CLMQKO("tnf:controlhub center")
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
    return this.ZTSGGC().MUHOGQ()
}

function Dispose() {
    $I.GPKLTE.prototype.NSFOQM.call(this);
    this.CHQNWS != null && this.CHQNWS.NSFOQM();
    this.KTUXHP != null && this.KTUXHP.NSFOQM();
    this.LTIBZT != null && this.LTIBZT.NSFOQM();
    this.IWLFDG != null && this.IWLFDG.NSFOQM();
    this.IBVOWL != null && this.IBVOWL.NSFOQM();
    this.YYJUOG()
}

function UpdateObj(n) {
    var t, i;
    if (!this.BKYAMO) {
        this.EVKRVW = n;
        switch (this.ZTSGGC().TNYGND()) {
            case $I.BLNKMP.Claim:
                this.BNXOPA = !0;
                this.MQPGBQ == null && this.ZTSGGC().HKZTHI() > 0 && this.ZTSGGC().HKZTHI() > $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() && this.ALXWBJ("battleview/neutral/endgame/Mainbase_shild_timer.png");
                t = $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().regionlayer.sdehc);
                t != null && (this.SCJYTA = t.l);
                break;
            case $I.BLNKMP.Attackable:
                this.TWKBWT != this.ZTSGGC().VFXJWC() && (this.TWKBWT = this.ZTSGGC().VFXJWC(), this.ZPDBXB());
                this.YYJUOG();
                this.MQPGBQ == null && this.ZTSGGC().VFXJWC() > 0 && this.ALXWBJ("battleview/neutral/endgame/Mainbase_hack_timer.png");
                i = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG();
                this.WTZATM = this.ZTSGGC().DKYJCE();
                this.RDSDBE = this.ZTSGGC().XIAYAZ();
                this.XKHGJE(i);
                this.RAZUOS = this.ABCGOU.PIZQCI(this.WTZATM, this.ZTSGGC().XIAYAZ() != -1 ? this.RDSDBE : this.ZTSGGC().XIAYAZ());
                this.PKVXLD = this.ZTSGGC().JLEOSE() - $I.CVRAYR.VAMLQD().TZZENG().QMPXDI() > i;
                break;
            case $I.BLNKMP.Ruin:
            case $I.BLNKMP.NONE:
                this.YYJUOG()
        }
        this.GUATFV(!0)
    }
}

function VisUpdate(n, t, i) {
    var u, o;
    if ($I.GPKLTE.prototype.GGGTTE.call(this, n, t, i), this.ZTSGGC().TNYGND() == $I.BLNKMP.Claim)
        if (this.SCJYTA > 0) {
            if (u = $I.CVRAYR.VAMLQD().GRIWFQ().BXKAPJ(this.ZTSGGC().HKZTHI()), t >= u - this.SCJYTA) {
                this.CHQNWS != null && this.CHQNWS.NSFOQM();
                this.XMZGVS = $I.BUEVKL.QGLUJV().VXAMCA().regionlayer.the[1];
                var f = (this.SVVIBN + this.SPPERN()) * this.ABCGOU.VVGOEM(),
                    e = (this.YOJYDM + this.GSNTLN()) * this.ABCGOU.MWRYXH(),
                    r = $I.BUEVKL.QGLUJV().WJVSOL(this.XMZGVS);
                this.CHQNWS = (new $I.ZFKFPU).CBDLKU(this.ABCGOU.WHQQMY(), r, f, e, null);
                this.CHQNWS.TYDVYV(7);
                this.CHQNWS.QOUDUX(0);
                this.CHQNWS.GUAUQN(0);
                this.IWLFDG != null && this.IWLFDG.NSFOQM();
                this.BDSBNM = $I.BUEVKL.QGLUJV().VXAMCA().regionlayer.sdehc;
                f = (this.SVVIBN + this.SPPERN()) * this.ABCGOU.VVGOEM();
                e = (this.YOJYDM + this.GSNTLN()) * this.ABCGOU.MWRYXH();
                r = $I.BUEVKL.QGLUJV().WJVSOL(this.BDSBNM);
                this.IWLFDG = (new $I.ZFKFPU).CBDLKU(this.ABCGOU.WHQQMY(), r, f, e, null);
                this.IWLFDG.LTWFAK(u - r.l);
                this.IWLFDG.TYDVYV(97);
                this.CHQNWS != null && this.CHQNWS.GUAUQN(0);
                this.SCJYTA = -2
            }
        } else this.SCJYTA == -2 && (o = $I.CVRAYR.VAMLQD().GRIWFQ().BXKAPJ(this.ZTSGGC().HKZTHI()), (this.IWLFDG == null || t >= this.IWLFDG.OHJOVD() + this.SCJYTA) && (this.CHQNWS.GUAUQN(1), t >= o && (this.SCJYTA = -1)));
    i && this.CHQNWS != null && this.CHQNWS.OCAAHR(t);
    i && this.KTUXHP != null && this.KTUXHP.OCAAHR(t);
    i && this.LTIBZT != null && this.LTIBZT.OCAAHR(t);
    i && this.IWLFDG != null && (this.IWLFDG.OCAAHR(t), this.IWLFDG.FFYVGM(t) && (this.IWLFDG.NSFOQM(), this.IWLFDG = null));
    i && this.IBVOWL != null && (this.IBVOWL.OCAAHR(t), (this.IBVOWL.FFYVGM(t) || this.VFXJWC() == 0) && (this.IBVOWL.NSFOQM(), this.IBVOWL = null))
}

function get_VisObjectType() {
    return $I.CDNXVQ.RegionHubCenter
}

function UiUpdate(n) {
    var t = !1,
        i;
    this.ZTSGGC().TNYGND() == $I.BLNKMP.Attackable && this.XKHGJE(n) && (this.RAZUOS = this.ABCGOU.PIZQCI(this.WTZATM, this.ZTSGGC().XIAYAZ() != -1 ? this.RDSDBE : this.ZTSGGC().XIAYAZ()), t = !0);
    this.PKVXLD && this.ZTSGGC().JLEOSE() - $I.CVRAYR.VAMLQD().TZZENG().QMPXDI() < n && (this.PKVXLD = !1, t = !0);
    this.MQPGBQ != null && (i = Math.max(0, this.HKZTHI() - n), this.ZTSGGC().TNYGND() == $I.BLNKMP.Attackable ? this.ZTSGGC().VFXJWC() == 0 ? this.YYJUOG() : this.VCAAXK.YOJPLZ($I.XOJOCY.GYKUBO(i)) : this.VCAAXK.YOJPLZ($I.XOJOCY.WSQFKS(i)));
    t && this.YNDYMO()
}

function MouseOver() {
    this.CHQNWS != null && this.CHQNWS.IOUEYL(!0)
}

function MouseOut() {
    this.CHQNWS != null && this.CHQNWS.IOUEYL(!1)
}

function HideInfos() {}

function ShowInfos() {}

function GetClosestAttackField(n, t) {
    return this.ZTSGGC().CFWTZD(n, t)
}

function CalculateBuildingAndDefenseCondition(n) {
    var i = !1;
    if (this.DKTYWR() > 0) {
        var r = Math.max(0, n - this.DKTYWR()),
            u = 100 * $I.CVRAYR.VAMLQD().TZZENG().IBDNGR() / 3600,
            t = $I.JGXBTR.URWFTN(r * u + this.ZTSGGC().DKYJCE());
        t != this.WTZATM && (this.WTZATM = t, i = !0);
        this.ZTSGGC().XIAYAZ() != -1 && (r = n - this.DKTYWR(), u = 100 * $I.CVRAYR.VAMLQD().TZZENG().BIKQXY() / 3600, t = $I.JGXBTR.URWFTN(r * u + this.ZTSGGC().XIAYAZ()), t != this.RDSDBE && (this.RDSDBE = t, i = !0))
    }
    return i
}

function ShowDebuffEffect() {
    this.BDSBNM = $I.BUEVKL.QGLUJV().VXAMCA().regionlayer.vaehc;
    this.IWLFDG != null && this.IWLFDG.NSFOQM();
    var t = (this.SVVIBN + this.SPPERN()) * this.ABCGOU.VVGOEM(),
        i = (this.YOJYDM + this.GSNTLN()) * this.ABCGOU.MWRYXH(),
        n = $I.BUEVKL.QGLUJV().WJVSOL(this.BDSBNM);
    n != null && (this.IWLFDG = (new $I.ZFKFPU).CBDLKU(this.ABCGOU.WHQQMY(), n, t, i, null), this.IWLFDG.TYDVYV(97), this.IWLFDG.OCAAHR(5))
}

function get_AllianceId() {
    return 0
}

function get_OwnedAllianceId() {
    return this.ZTSGGC().SZZNBJ()
}

function get_OwnedAllianceName() {
    return this.ZTSGGC().UMBVWJ()
}

function get_Name() {
    return $I.XOJOCY.CLMQKO("tnf:controlhub center")
}

function get_State() {
    return this.ZTSGGC().TNYGND()
}

function get_Id() {
    return this.ZTSGGC().MUHOGQ()
}

function get_BaseLevel() {
    return this.ZTSGGC().KCWGSH()
}

function get_ConditionBuildings() {
    return this.DKTYWR() > 0 ? this.WTZATM : this.ZTSGGC().DKYJCE()
}

function get_ConditionDefense() {
    return this.ZTSGGC().XIAYAZ() != -1 && this.DKTYWR() > 0 ? this.RDSDBE : this.ZTSGGC().XIAYAZ()
}

function get_LastCombatStep() {
    return this.ZTSGGC().DKTYWR()
}

function get_HasIncommingAttack() {
    var t = $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG(),
        n = this.JLEOSE() - $I.CVRAYR.VAMLQD().TZZENG().JTTQDG();
    return ($I.CVRAYR.VAMLQD().VYDVFH().UTCQWX(this.UQGPFX()) == n && (n = this.JLEOSE() - $I.CVRAYR.VAMLQD().TZZENG().QMPXDI()), !this.ZTSGGC().ZUAAHW()) ? n - t > 0 : !0
}

function get_LockdownEndStep() {
    return this.ZTSGGC().JLEOSE()
}

function get_EndStep() {
    return this.ZTSGGC().HKZTHI()
}

function get_StartStep() {
    return this.ZTSGGC().DBSFHR()
}

function get_LevelDebuff() {
    return this.ZTSGGC().VFXJWC()
}

function get_PlayerFaction() {
    return 3
}