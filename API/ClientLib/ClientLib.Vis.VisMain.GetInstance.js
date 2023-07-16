function Init(n, t, i, r) {
    var u;
    (n == "chrome" || n == "ios" || n == "android") && (this.PKOHWE.CanRenderClouds = !1);
    u = $I.JYTDLG.EUXHHN();
    u.LGUSNR().length > 0 && (this.ZJMGFP = (new $I.YEHBQO).SLPWTI(), this.FLUKNC = u.EARITQ(u.LGUSNR()[0], null), this.NLXJLK = this.FLUKNC.YMUAMM(), this.NLXJLK.XHIETO(.2));
    this.HSUTLJ = $I.SOIZAH.None;
    this.PDIQPF = $I.HYIXRB.Default;
    this.HUJLNQ = !1;
    this.TLDIAV = !1;
    this.JQJFRT = !1;
    this.CXXQXP = 0;
    this.LOUJMU = 14;
    this.BIKUSO = 16;
    t != null && (this.CXXQXP = t);
    i != null && (this.LOUJMU = i);
    r != null && (this.BIKUSO = r);
    $I.YHIOZP.NXWPIH();
    $I.PAQBVZ.NXWPIH()
}

function get_Mode() {
    return this.HSUTLJ
}

function set_Mode(n) {
    var t, r, i;
    if (this.HSUTLJ != n) {
        this.NFJTBF(null);
        t = this.KIJEST();
        t != null && t.DZVOAR() != null && t.DZVOAR().ETAIBN("default");
        switch (this.HSUTLJ) {
            case $I.SOIZAH.City:
                this.OXHPIZ.NREYTO(!1);
                break;
            case $I.SOIZAH.Region:
                this.HCYTWM.NREYTO(!1);
                break;
            case $I.SOIZAH.Battleground:
                this.JBZXQS.NREYTO(!1);
                break;
            case $I.SOIZAH.ArmySetup:
                this.NGEHCA.NREYTO(!1);
                break;
            case $I.SOIZAH.DefenseSetup:
                this.HVFUCJ.NREYTO(!1);
                break;
            case $I.SOIZAH.World:
                this.QCCYOL.NREYTO(!1);
                break;
            case $I.SOIZAH.CombatSetup:
                this.GWUJKZ.NREYTO(!1)
        }
        r = this.HSUTLJ;
        this.HSUTLJ = n;
        i = 0;
        switch (this.HSUTLJ) {
            case $I.SOIZAH.City:
                this.OXHPIZ.NREYTO(!0);
                break;
            case $I.SOIZAH.Region:
                this.HCYTWM.NREYTO(!0);
                break;
            case $I.SOIZAH.Battleground:
                this.JBZXQS.NREYTO(!0);
                i = 0;
                break;
            case $I.SOIZAH.ArmySetup:
                this.NGEHCA.NREYTO(!0);
                break;
            case $I.SOIZAH.DefenseSetup:
                this.HVFUCJ.NREYTO(!0);
                break;
            case $I.SOIZAH.World:
                this.QCCYOL.NREYTO(!0);
                break;
            case $I.SOIZAH.CombatSetup:
                this.GWUJKZ.NREYTO(!0)
        }
        switch (this.HSUTLJ) {
            case $I.SOIZAH.Region:
                this.CWOVDH(this.LOUJMU, null);
                break;
            case $I.SOIZAH.Battleground:
                this.CWOVDH(this.BIKUSO, null);
                break;
            default:
                this.CWOVDH(this.CXXQXP, null)
        }
        this.ZJMGFP != null && this.ZJMGFP.IVXDWT(i, !0);
        this.BHXIIB != null && this.BHXIIB.RQYPJD(r, this.HSUTLJ)
    }
}

function get_MouseMode() {
    return this.PDIQPF
}

function set_MouseMode(n) {
    var t;
    if (this.PDIQPF != n) {
        t = this.PDIQPF;
        this.PDIQPF = n;
        switch (this.PDIQPF) {
            case $I.HYIXRB.Repair:
                this.KIJEST().DZVOAR().ETAIBN("repair");
                break;
            case $I.HYIXRB.Move:
                this.KIJEST().DZVOAR().ETAIBN("buildable");
                break;
            case $I.HYIXRB.Upgrade:
                this.KIJEST().DZVOAR().ETAIBN("upgrade");
                break;
            case $I.HYIXRB.Sell:
                this.KIJEST().DZVOAR().ETAIBN("demolish");
                break;
            default:
                this.KIJEST().DZVOAR().ETAIBN("default")
        }
        this.GYKVSH != null && this.GYKVSH.EJMLUP(t, this.PDIQPF);
        this.DJRKBB()
    }
}

function get_City() {
    return this.OXHPIZ
}

function get_Region() {
    return this.HCYTWM
}

function get_World() {
    return this.QCCYOL
}

function get_CombatSetup() {
    return this.GWUJKZ
}

function get_Battleground() {
    return this.JBZXQS
}

function get_ArmySetup() {
    return this.NGEHCA
}

function get_DefenseSetup() {
    return this.HVFUCJ
}

function get_RegionOwnershipPreview() {
    return this.IJABQS
}

function get_SelectedObject() {
    return this.VIMXDP
}

function set_SelectedObject(n) {
    var t, r, i;
    if (n != null)
        for (t = n.RMVHYY(); t != n; t = n.RMVHYY()) n = t;
    n == null && (this.HSUTLJ == $I.SOIZAH.Region ? this.CWOVDH(this.LOUJMU, null) : this.HSUTLJ == $I.SOIZAH.Battleground ? this.CWOVDH(this.BIKUSO, null) : this.CWOVDH(this.CXXQXP, null));
    r = this.VIMXDP;
    this.VIMXDP = n;
    this.DSNUJJ != null && this.DSNUJJ.ZHXTUU(r, this.VIMXDP);
    i = $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI();
    i == null || i.UBTDFB() || (this.VIMXDP = null, this.CWOVDH(-1, null));
    this.LPOLJG()
}

function InitViews() {
    this.HCYTWM.NXWPIH();
    this.OXHPIZ.NXWPIH();
    this.NGEHCA.NXWPIH();
    this.HVFUCJ.NXWPIH();
    this.GWUJKZ.NXWPIH();
    this.QCCYOL.NXWPIH();
    this.JBZXQS.NXWPIH()
}

function UpdateSelectionImages() {
    var n = null,
        i, t, r, u;
    if (this.VIMXDP != null && (n = this.VIMXDP.SXIQBT()), i = this.KIJEST(), i != null && (i.OKHTJE(), n != null))
        for (t = 0; t < n.length; t++) r = this.VIMXDP.DGLCVK() + n[t].m_OffsetX, u = this.VIMXDP.XYKFSB() + n[t].m_OffsetY, i.GAKSFZ(r, u, n[t].m_Width, n[t].m_Height, n[t].m_File, n[t].m_Layer)
}

function GetObjectFromPosition(n, t) {
    switch (this.HSUTLJ) {
        case $I.SOIZAH.City:
            return this.OXHPIZ.SJSEZB(n, t);
        case $I.SOIZAH.Region:
            return this.HCYTWM.RMRGYL(n, t);
        case $I.SOIZAH.Battleground:
            return this.JBZXQS.YMJJNH(n, t);
        case $I.SOIZAH.ArmySetup:
            return this.NGEHCA.SJSEZB(n, t);
        case $I.SOIZAH.DefenseSetup:
            return this.HVFUCJ.SJSEZB(n, t);
        case $I.SOIZAH.World:
            return this.QCCYOL.QRVZAL(n, t);
        case $I.SOIZAH.CombatSetup:
            return this.GWUJKZ.SJSEZB(n, t)
    }
    return null
}

function GetAllObjectsFromPosition(n, t) {
    var i = null,
        r = (new $I.UCRMVA).SLPWTI(),
        o, u, f, e;
    switch (this.HSUTLJ) {
        case $I.SOIZAH.City:
            return this.OXHPIZ.HDXOXM(n, t);
        case $I.SOIZAH.Region:
            for (f = this.HCYTWM.XSYBBA(n, t).l, u = 0; u < f.length; u++) o = f[u], r.l.push(o);
            for (u = this.HCYTWM.QYBHAF(n, t).l, e = 0; e < u.length; e++) f = u[e], r.l.push(f);
            return i = this.HCYTWM.RMRGYL(n, t), i != null && r.l.push(i), r;
        case $I.SOIZAH.Battleground:
            return i = this.JBZXQS.YMJJNH(n, t), i != null && r.l.push(i), r;
        case $I.SOIZAH.ArmySetup:
            return i = this.NGEHCA.SJSEZB(n, t), i != null && r.l.push(i), r;
        case $I.SOIZAH.DefenseSetup:
            return i = this.HVFUCJ.SJSEZB(n, t), i != null && r.l.push(i), r;
        case $I.SOIZAH.World:
            return this.QCCYOL.KIQLUA(n, t);
        case $I.SOIZAH.CombatSetup:
            return i = this.GWUJKZ.SJSEZB(n, t), i != null && r.l.push(i), r
    }
    return r
}

function GetAllSelectableObjectsFromPosition(n, t) {
    var u = (new $I.UCRMVA).SLPWTI(),
        o, f, r, i, e, s;
    if (this.HSUTLJ != $I.SOIZAH.Region) return this.KIQLUA(n, t);
    for (f = this.HCYTWM.XSYBBA(n, t).l, i = 0; i < f.length; i++) o = f[i], u.l.push(o);
    for (i = this.HCYTWM.QYBHAF(n, t).l, r = 0; r < i.length; r++) f = i[r], u.l.push(f);
    for (r = this.HCYTWM.KYXTLI(n, t).l, e = 0; e < r.length; e++)
        if (i = r[e], i.AXKPJR() == $I.CDNXVQ.RegionNPCCamp) s = i, s.NJPNCA() || u.l.push(i);
        else {
            if (i.AXKPJR() == $I.CDNXVQ.RegionHubControl) {
                var h = i,
                    c = Math.floor(n / this.HCYTWM.VVGOEM()),
                    l = Math.floor(t / this.HCYTWM.MWRYXH());
                h.YLCFFI(c, l) || u.l.push(i);
                continue
            }
            u.l.push(i)
        } return u
}

function MovePosition(n, t) {
    var i = this.KIJEST();
    return i == null ? !1 : i.AOWZGH(n, t)
}

function SetPosition(n, t) {
    var i = this.KIJEST();
    i != null && i.LQOHQF(n, t)
}

function CenterGridPosition(n, t) {
    var i = this.KIJEST();
    this.LQOHQF((n + .5) * i.VVGOEM() - Math.floor(i.DZVOAR().DZSXHC() / i.DZVOAR().LVCGWY() / 2), (t + .5) * i.MWRYXH() - Math.floor(i.DZVOAR().KUAIEC() / i.DZVOAR().LVCGWY() / 2));
    i.DZVOAR().NXPMYM()
}

function GetActiveView() {
    switch (this.HSUTLJ) {
        case $I.SOIZAH.City:
            return this.OXHPIZ;
        case $I.SOIZAH.Region:
            return this.HCYTWM;
        case $I.SOIZAH.Battleground:
            return this.JBZXQS;
        case $I.SOIZAH.ArmySetup:
            return this.NGEHCA;
        case $I.SOIZAH.DefenseSetup:
            return this.HVFUCJ;
        case $I.SOIZAH.World:
            return this.QCCYOL;
        case $I.SOIZAH.CombatSetup:
            return this.GWUJKZ
    }
    return null
}

function get_PositionX() {
    var n = this.KIJEST();
    return n == null ? 0 : n.TUDKFE()
}

function get_PositionY() {
    var n = this.KIJEST();
    return n == null ? 0 : n.SPKLVR()
}

function get_IsOnTop() {
    var n = this.KIJEST();
    return n.SPKLVR() == n.CARSTD()
}

function get_ZoomFactor() {
    var n = this.KIJEST();
    return n == null ? 1 : n.UVURBD()
}

function set_ZoomFactor(n) {
    var t = this.KIJEST();
    t != null && t.CLKEQT(n)
}

function get_MinZoomFactor() {
    return this.YUIHFV
}

function set_MinZoomFactor(n) {
    var t;
    this.YUIHFV = n;
    t = Math.min(1, Math.max(n, this.UVURBD()));
    this.CLKEQT(t)
}

function get_ViewHeight() {
    var n = this.KIJEST();
    return n == null ? 0 : n.ULNTVQ()
}

function SetViewSize(n, t) {
    var i = this.KIJEST();
    i != null && i.AHBWUZ(n, t)
}

function UiUpdate() {
    this.HSUTLJ == $I.SOIZAH.City ? this.OXHPIZ.CXESLP($I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG()) : this.HSUTLJ == $I.SOIZAH.ArmySetup ? this.NGEHCA.CXESLP($I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG()) : this.HSUTLJ == $I.SOIZAH.DefenseSetup ? this.HVFUCJ.CXESLP($I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG()) : this.HSUTLJ == $I.SOIZAH.CombatSetup ? this.GWUJKZ.CXESLP($I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG()) : this.HSUTLJ == $I.SOIZAH.World && this.QCCYOL.CXESLP($I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG())
}

function SoundUpdate() {
    this.ZJMGFP != null && this.ZJMGFP.NXPMYM();
    this.FLUKNC != null && this.FLUKNC.NXPMYM()
}

function ViewUpdate() {
    this.WFMIFH != null && this.WFMIFH.NXPMYM();
    switch (this.HSUTLJ) {
        case $I.SOIZAH.City:
            this.OXHPIZ.UBXZDA();
            return;
        case $I.SOIZAH.Region:
            this.HCYTWM.UBXZDA();
            return;
        case $I.SOIZAH.Battleground:
            this.JBZXQS.UBXZDA();
            return;
        case $I.SOIZAH.ArmySetup:
            this.NGEHCA.UBXZDA();
            return;
        case $I.SOIZAH.DefenseSetup:
            this.HVFUCJ.UBXZDA();
            return;
        case $I.SOIZAH.World:
            this.QCCYOL.UBXZDA();
            return;
        case $I.SOIZAH.CombatSetup:
            this.GWUJKZ.UBXZDA();
            return
    }
}

function UpdateMouseTool() {
    this.WFMIFH != null && this.WFMIFH.QJOFJP($I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG())
}

function ScreenPosFromWorldPosX(n) {
    var t = this.KIJEST();
    return (t != null ? t.RCXQCK(n) : 0) / $I.VZUWDA.HWQFBC().COCMRV()
}

function ScreenPosFromWorldPosY(n) {
    var t = this.KIJEST();
    return (t != null ? t.MBBNGI(n) : 0) / $I.VZUWDA.HWQFBC().COCMRV()
}

function WorldPosFromScreenPosX(n) {
    var t = this.KIJEST();
    return t == null ? 0 : t.ZQEIXK(n * $I.VZUWDA.HWQFBC().COCMRV())
}

function WorldPosFromScreenPosY(n) {
    var t = this.KIJEST();
    return t == null ? 0 : t.THMVMY(n * $I.VZUWDA.HWQFBC().COCMRV())
}

function get_ActiveMouseTool() {
    return this.WFMIFH
}

function SetMouseTool(n, t) {
    var i = this.VHVMDT(n);
    i == null && (i = this.HSUTLJ == $I.SOIZAH.Region ? this.VHVMDT(this.LOUJMU) : this.HSUTLJ == $I.SOIZAH.Battleground ? this.VHVMDT(this.BIKUSO) : this.VHVMDT(this.CXXQXP));
    n == 5 ? i.CMAJYF(t) : n == 2 ? i.NAXUER(t, !1) : n == 9 ? i.NAXUER(t, !0) : n == 7 ? i.NAXUER(t, !1) : n == 8 ? i.NAXUER(t, !0) : n == 6 ? i.NAXUER(t, !1) : n == 15 ? i.NAXUER(t, !0) : n == 12 ? i.CMAJYF(t) : n == 17 ? i.CMAJYF(t) : n == 20 && i.CMAJYF(t);
    this.WFMIFH != i && (this.WFMIFH != null && this.WFMIFH.UGDPPZ(), this.WFMIFH = i, this.WFMIFH != null && this.WFMIFH.SMEUFM(t), this.GIJLVS != null && this.GIJLVS.FOWLVG())
}

function GetMouseTool(n) {
    var t = null;
    switch (n) {
        case 0:
            return this.MFZBPW[0];
        case 1:
            return this.MFZBPW[1];
        case 2:
        case 9:
            return this.MFZBPW[2];
        case 3:
        case 4:
        case 10:
        case 11:
            return t;
        case 5:
            return this.MFZBPW[3];
        case 6:
        case 15:
            return this.MFZBPW[4];
        case 7:
        case 8:
            return this.MFZBPW[5];
        case 12:
            return this.MFZBPW[6];
        case 13:
            return this.MFZBPW[7];
        case 14:
            return this.MFZBPW[8];
        case 16:
            return this.MFZBPW[9];
        case 17:
            return this.MFZBPW[10];
        case 18:
            return this.MFZBPW[11];
        case 19:
            return this.MFZBPW[12];
        case 20:
            return this.MFZBPW[13]
    }
    return t
}

function MouseMove(n, t) {
    return this.WFMIFH.XNSDOS(this.ZQEIXK(n), this.THMVMY(t))
}

function MouseDown(n, t) {
    return this.WFMIFH.XGPIIJ(this.ZQEIXK(n), this.THMVMY(t))
}

function MouseUp(n, t, i) {
    return this.WFMIFH.DMYNCQ(this.ZQEIXK(n), this.THMVMY(t), i)
}

function KeyDown(n) {
    this.WFMIFH.GPEAJT(n)
}

function KeyUp(n) {
    this.WFMIFH.FZPQTU(n)
}

function TouchStart(n) {
    var r, i, t;
    if (n.length == 0) return !1;
    for (r = n, i = 0; i < r.length; i++) t = r[i], t.X = this.ZQEIXK(t.X), t.Y = this.THMVMY(t.Y);
    return this.WFMIFH.SDIGDX(n)
}

function TouchMove(n) {
    var r, i, t;
    if (n.length == 0) return !1;
    for (r = n, i = 0; i < r.length; i++) t = r[i], t.X = this.ZQEIXK(t.X), t.Y = this.THMVMY(t.Y);
    return this.WFMIFH.RYOAJN(n)
}

function TouchEnd(n) {
    var r, i, t;
    if (n.length == 0) return !1;
    for (r = n, i = 0; i < r.length; i++) t = r[i], t.X = this.ZQEIXK(t.X), t.Y = this.THMVMY(t.Y);
    return this.WFMIFH.QHENKQ(n)
}

function TouchCancel() {
    return this.WFMIFH.KGUYWZ()
}

function ResetTooltip() {
    var n = qx.ui.tooltip.Manager.getInstance(),
        t = n.getCurrent();
    n.setCurrent(null);
    n.setCurrent(t)
}

function get_BackgroundSoundVolume() {
    return this.ZJMGFP == null ? -1 : this.ZJMGFP.MTDUGL()
}

function set_BackgroundSoundVolume(n) {
    this.ZJMGFP != null && this.ZJMGFP.XHIETO(n)
}

function get_PlayVoiceSounds() {
    return this.GGDMIU
}

function set_PlayVoiceSounds(n) {
    this.GGDMIU = n
}

function get_UISoundVolume() {
    return this.NLXJLK == null ? -1 : this.NLXJLK.MTDUGL()
}

function set_UISoundVolume(n) {
    this.NLXJLK != null && this.NLXJLK.XHIETO(n)
}

function get_PlayAreaSoundVolume() {
    return this.WPCXPU
}

function set_PlayAreaSoundVolume(n) {
    this.WPCXPU != n && (this.WPCXPU = n, this.JBZXQS.CMLYBA(n))
}

function PlayVoiceSound(n) {
    var t = {},
        i;
    !this.GGDMIU || $I.XOJOCY.PVRBSE() == "fr" || (t.$r = this.SMQHLX.ZOXRAI(n, t), i = t.b, t.$r) && i.SFJFXM() || this.CJJNJU(n, !1)
}

function PlayUISound(n, t) {
    var r = {},
        i, u, f, e;
    if (this.FLUKNC != null && this.JZJECU() != 0 && $I.JYTDLG.EUXHHN().UQXIFJ() && ((r.$r = this.SMQHLX.ZOXRAI(n, r), i = r.b, r.$r) || (i = this.FLUKNC.UDKYCS("base", null), i.FZUQSO($I.QOKGWR.WBFJPT().SBOUYU($I.QOKGWR.WBFJPT().DMPRGP(n + "." + i.YSCYLJ()))), this.SMQHLX.GXVKTX(n, i), this.OZQYUS.GXVKTX(n, 0)), u = $I.PCMEZM.EYZIBP().JFRGZI(), u - this.OZQYUS.d[n] > 250)) {
        if (t)
            for (f = 0; i.WCBTQD();) e = n + "$" + f.toString(), f++, (r.$r = this.SMQHLX.ZOXRAI(e, r), i = r.b, r.$r) || (i = this.FLUKNC.UDKYCS("base", null), i.FZUQSO($I.QOKGWR.WBFJPT().SBOUYU($I.QOKGWR.WBFJPT().DMPRGP(n + "." + i.YSCYLJ()))), this.SMQHLX.GXVKTX(e, i));
        this.FLUKNC.XKAUJR(i);
        this.OZQYUS.UHNVSA(n, u)
    }
}

function get_Caps() {
    return this.PKOHWE
}

function get_IsTutorialModeActivated() {
    return this.TLDIAV
}

function set_IsTutorialModeActivated(n) {
    this.TLDIAV = n
}

function get_ShowRepairableHealth() {
    return this.HUJLNQ
}

function set_ShowRepairableHealth(n) {
    this.HUJLNQ = n;
    this.FDZMUE != null && this.FDZMUE.FOWLVG()
}

function get_ShowMouseModeIcons() {
    return this.OMWAWR
}

function set_ShowMouseModeIcons(n) {
    this.OMWAWR = n;
    this.HVQBCE != null && this.HVQBCE.FOWLVG()
}

function get_ShowDebugInformation() {
    return this.JQJFRT
}

function set_ShowDebugInformation(n) {
    this.JQJFRT = n;
    this.FPYTFF != null && this.FPYTFF.KQCFDF(n)
}

function get_HideRegionPlayerNames() {
    return this.WFUYKO
}

function set_HideRegionPlayerNames(n) {
    this.WFUYKO = n;
    this.ELUSYR != null && this.ELUSYR.KQCFDF(n)
}

function get_ShowLevelMarker() {
    return this.TZNZZA
}

function set_ShowLevelMarker(n) {
    this.TZNZZA = n;
    this.UUETGH != null && this.UUETGH.FOWLVG()
}

function get_IsMobile() {
    return this.WSLTHA
}

function set_IsMobile(n) {
    this.WSLTHA = n
}

function set_LockMove(n) {
    this.DZKVMY = n
}

function get_LockMove() {
    return this.DZKVMY
}

function set_UpgradeLevelStep(n) {
    this.DOMVTQ = Math.min($I.ILHIOR.MAX_UPGRADELEVEL_STEP, Math.max(1, n))
}

function get_UpgradeLevelStep() {
    return this.DOMVTQ
}

function add_ShowDebugInformationChange(n) {
    var t = {},
        i, r = this.FPYTFF,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.FPYTFF, t.$r = $I.TSJVQL.JXWJWI($I.SBFJAP, u, i, t), this.FPYTFF = t.a, t.$r); while (r != i)
}

function remove_ShowDebugInformationChange(n) {
    var t = {},
        i, r = this.FPYTFF,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.FPYTFF, t.$r = $I.TSJVQL.JXWJWI($I.SBFJAP, u, i, t), this.FPYTFF = t.a, t.$r); while (r != i)
}

function add_HideRegionPlayerNamesChange(n) {
    var t = {},
        i, r = this.ELUSYR,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.ELUSYR, t.$r = $I.TSJVQL.JXWJWI($I.SBFJAP, u, i, t), this.ELUSYR = t.a, t.$r); while (r != i)
}

function remove_HideRegionPlayerNamesChange(n) {
    var t = {},
        i, r = this.ELUSYR,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.ELUSYR, t.$r = $I.TSJVQL.JXWJWI($I.SBFJAP, u, i, t), this.ELUSYR = t.a, t.$r); while (r != i)
}

function add_ShowLevelMarkerChange(n) {
    var t = {},
        i, r = this.UUETGH,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.UUETGH, t.$r = $I.TSJVQL.JXWJWI($I.DCWFNQ, u, i, t), this.UUETGH = t.a, t.$r); while (r != i)
}

function remove_ShowLevelMarkerChange(n) {
    var t = {},
        i, r = this.UUETGH,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.UUETGH, t.$r = $I.TSJVQL.JXWJWI($I.DCWFNQ, u, i, t), this.UUETGH = t.a, t.$r); while (r != i)
}

function add_ShowRepairableHealthChange(n) {
    var t = {},
        i, r = this.FDZMUE,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.FDZMUE, t.$r = $I.TSJVQL.JXWJWI($I.OZCGGF, u, i, t), this.FDZMUE = t.a, t.$r); while (r != i)
}

function remove_ShowRepairableHealthChange(n) {
    var t = {},
        i, r = this.FDZMUE,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.FDZMUE, t.$r = $I.TSJVQL.JXWJWI($I.OZCGGF, u, i, t), this.FDZMUE = t.a, t.$r); while (r != i)
}

function add_ShowMouseModeIconsChange(n) {
    var t = {},
        i, r = this.HVQBCE,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.HVQBCE, t.$r = $I.TSJVQL.JXWJWI($I.DGSKOE, u, i, t), this.HVQBCE = t.a, t.$r); while (r != i)
}

function remove_ShowMouseModeIconsChange(n) {
    var t = {},
        i, r = this.HVQBCE,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.HVQBCE, t.$r = $I.TSJVQL.JXWJWI($I.DGSKOE, u, i, t), this.HVQBCE = t.a, t.$r); while (r != i)
}

function add_SelectionChange(n) {
    var t = {},
        i, r = this.DSNUJJ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.DSNUJJ, t.$r = $I.TSJVQL.JXWJWI($I.MQGRJY, u, i, t), this.DSNUJJ = t.a, t.$r); while (r != i)
}

function remove_SelectionChange(n) {
    var t = {},
        i, r = this.DSNUJJ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.DSNUJJ, t.$r = $I.TSJVQL.JXWJWI($I.MQGRJY, u, i, t), this.DSNUJJ = t.a, t.$r); while (r != i)
}

function add_MouseToolChange(n) {
    var t = {},
        i, r = this.GIJLVS,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.GIJLVS, t.$r = $I.TSJVQL.JXWJWI($I.WJEQJO, u, i, t), this.GIJLVS = t.a, t.$r); while (r != i)
}

function remove_MouseToolChange(n) {
    var t = {},
        i, r = this.GIJLVS,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.GIJLVS, t.$r = $I.TSJVQL.JXWJWI($I.WJEQJO, u, i, t), this.GIJLVS = t.a, t.$r); while (r != i)
}

function add_MouseModeChange(n) {
    var t = {},
        i, r = this.GYKVSH,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.GYKVSH, t.$r = $I.TSJVQL.JXWJWI($I.TXYTTP, u, i, t), this.GYKVSH = t.a, t.$r); while (r != i)
}

function remove_MouseModeChange(n) {
    var t = {},
        i, r = this.GYKVSH,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.GYKVSH, t.$r = $I.TSJVQL.JXWJWI($I.TXYTTP, u, i, t), this.GYKVSH = t.a, t.$r); while (r != i)
}

function add_ViewModeChange(n) {
    var t = {},
        i, r = this.BHXIIB,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.BHXIIB, t.$r = $I.TSJVQL.JXWJWI($I.GZHKMY, u, i, t), this.BHXIIB = t.a, t.$r); while (r != i)
}

function remove_ViewModeChange(n) {
    var t = {},
        i, r = this.BHXIIB,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.BHXIIB, t.$r = $I.TSJVQL.JXWJWI($I.GZHKMY, u, i, t), this.BHXIIB = t.a, t.$r); while (r != i)
}