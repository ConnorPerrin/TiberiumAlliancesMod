function Init() {
    var e = $I.JYTDLG.EUXHHN(),
        u, f, o, s, i, h, t, n;
    if (e.LGUSNR().length > 0)
        for (this.CJCCON = e.EARITQ(e.LGUSNR()[0], null), this.VHQAKH = this.CJCCON.YMUAMM(), this.VHQAKH.XHIETO(.2), u = 0; u < this.LHBXCV.length; u++)
            for (f = 0; f < 10; f++) this.LHBXCV[u][f].HIMXOF(this.CJCCON);
    o = $I.BUEVKL.QGLUJV().VXAMCA();
    this.XSMPAX = o.UnitAmmoType;
    s = o.BlockingGroups;
    i = {
        k: null,
        v: null
    };
    for (h in s) {
        for (i.k = h, i.v = s[h], t = (new $I.UCRMVA).SLPWTI(), n = 0; n < i.v.length; n++) t.l.push(i.v[n]);
        this.CYCZYW.GXVKTX(i.k, t)
    }
    var t = $I.QOKGWR.WBFJPT(),
        n = t.VDQLZP("battleground/gdi/background_base_top_GDI.png"),
        r = t.VDQLZP("battleground/gdi/background_base_GDI.jpg"),
        c = t.VDQLZP("battleground/neutral/background_defence.jpg"),
        l = t.VDQLZP($I.ILHIOR.GILABD().ZJFLKT().VBTDDG());
    this.JUEUPB = this.RRBVEU.TDBBHP("imagesegment", null);
    this.JUEUPB.PTVNAR("battleground/gdi/background_base_GDI.jpg");
    this.JUEUPB.EVVIKY($I.OXYXXU.NJRUXP - $I.OXYXXU.LMJAJT[0]);
    this.JUEUPB.WJAECQ($I.OXYXXU.ZRMOAD - $I.OXYXXU.LMJAJT[1] + $I.OXYXXU.NCYKKL);
    this.JUEUPB.BMIJEH(r.w);
    this.JUEUPB.NQJJZY(r.h - 2 * $I.ZPZTNI.KAMYOL);
    this.JUEUPB.AGGCMU(0, $I.ZPZTNI.KAMYOL / r.h, 1, (r.h - $I.ZPZTNI.KAMYOL) / r.h);
    this.HSDNPH = this.RRBVEU.TDBBHP("image", null);
    this.HSDNPH.PTVNAR($I.ILHIOR.GILABD().ZJFLKT().VBTDDG());
    this.HSDNPH.BMIJEH(l.w);
    this.HSDNPH.NQJJZY(l.h);
    this.HSDNPH.EVVIKY(this.JUEUPB.DGLCVK());
    this.HSDNPH.WJAECQ(this.JUEUPB.XYKFSB() - this.HSDNPH.KUAIEC());
    this.FUCVFM = this.RRBVEU.TDBBHP("imagesegment", null);
    this.FUCVFM.PTVNAR("battleground/gdi/background_base_top_GDI.png");
    this.FUCVFM.BMIJEH(this.JUEUPB.DZSXHC());
    this.FUCVFM.NQJJZY(n.h - 2 * $I.ZPZTNI.KAMYOL);
    this.FUCVFM.EVVIKY(this.JUEUPB.DGLCVK());
    this.FUCVFM.WJAECQ(this.JUEUPB.XYKFSB() - this.FUCVFM.KUAIEC());
    this.FUCVFM.AGGCMU(0, $I.ZPZTNI.KAMYOL / n.h, 1, (n.h - $I.ZPZTNI.KAMYOL) / n.h);
    this.KJRHNN = this.RRBVEU.TDBBHP("imagesegment", null);
    this.KJRHNN.PTVNAR("battleground/neutral/background_defence.jpg");
    this.KJRHNN.EVVIKY($I.OXYXXU.NJRUXP - $I.OXYXXU.QXIAAQ[0]);
    this.KJRHNN.WJAECQ(this.JUEUPB.XYKFSB() + this.JUEUPB.KUAIEC());
    this.KJRHNN.BMIJEH(c.w);
    this.KJRHNN.NQJJZY(c.h - $I.ZPZTNI.KAMYOL);
    this.KJRHNN.AGGCMU(0, $I.ZPZTNI.KAMYOL / c.h, 1, 1);
    this.JUEUPB.QOUDUX(1);
    this.KJRHNN.QOUDUX(2);
    this.HSDNPH.QOUDUX(3);
    this.FUCVFM.QOUDUX(4);
    this.RRBVEU.UVSZDF(this.JUEUPB);
    this.RRBVEU.UVSZDF(this.KJRHNN);
    this.RRBVEU.UVSZDF(this.HSDNPH);
    this.RRBVEU.UVSZDF(this.FUCVFM);
    $I.FWLFGN.prototype.QLCQUS.call(this, "baseview/neutral/fx_clouds.png");
    $I.CVRAYR.VAMLQD().ILTPKS().YCQAOD((new $I.LPYEIJ).TFDQYD(this, this.EHZRON));
    this.XNVDVT.NDHYZP((new $I.SBFJAP).TFDQYD(this, this.WZIVDY));
    this.WZIVDY(this.XNVDVT.ZJZRTW());
    this.VVVGPT.GXVKTX(80, 12);
    this.VVVGPT.GXVKTX(81, 13);
    this.VVVGPT.GXVKTX(82, 11)
}

function SetActive(n) {
    var t, i;
    if (this.VHQAKH != null && this.VHQAKH.DHOGSL(n), !n && this.CJCCON != null) {
        for (t = 0; t < this.LHBXCV.length; t++)
            for (i = 0; i < 10; i++) this.LHBXCV[t][i].JCPWOS(this.CJCCON);
        this.CJCCON.AMMYJA();
        this.CJCCON.NXPMYM()
    }
}

function set_SoundVolume(n) {
    this.VHQAKH != null && this.VHQAKH.XHIETO(n);
    this.IXPPPC = !(n == 0);
    this.CJCCON != null && this.CJCCON.NXPMYM()
}

function get_SoundVolume() {
    return this.VHQAKH != null ? this.VHQAKH.MTDUGL() : 0
}

function LoadCombat(n) {
    this.ADITAF();
    this.PWQDBQ = null;
    this.KRTPOD != null && this.KRTPOD.YOJPLZ(n.toString());
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("GetCombatData", {
        playerReportId: n
    }, (new $I.JNOYHJ).TFDQYD(this, this.UXSROO), null)
}

function LoadCombatFromDump(n) {
    this.ADITAF();
    this.PWQDBQ = null;
    this.KRTPOD != null && this.KRTPOD.YOJPLZ(n.substr(0, 6));
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("GetCombatDataFromDump", {
        _sBase64ReportInfo: n
    }, (new $I.JNOYHJ).TFDQYD(this, this.UXSROO), null)
}

function RestartReplay() {
    this.PWQDBQ != null && (this.OXEKQJ = 0, this.RDOWXQ(), this.LDAYER(this.PWQDBQ), this.SUZTCM(), this.TTLFWL = this.PWQDBQ.GIXWEL() * Math.floor(1e3 / this.DBTEAB.UXPMRE()), this.TTLFWL < 12e4 && (this.TTLFWL += 3e3))
}

function get_AttackerFaction() {
    return this.NAPFKG
}

function set_AttackerFaction(n) {
    this.NAPFKG = n
}

function get_AttackerPlayerName() {
    return this.QRQLTR
}

function get_AttackerAllianceName() {
    return this.ZJYFTB
}

function get_AttackerBaseName() {
    return this.ZLQWSH
}

function get_AttackerBaseLevel() {
    return this.SSJOHA
}

function get_AttackerId() {
    return this.COPUEJ
}

function get_DefenderBaseId() {
    return this.MBKPXT
}

function get_DefenderBaseName() {
    return this.SBDFCV
}

function get_DefenderAllianceName() {
    return this.KGMZEO
}

function get_DefenderPlayerName() {
    return this.YLKAHW
}

function get_DefenderBlockStep() {
    return this.KRRMNL
}

function get_AttackTimeStamp() {
    return this.FZYEJM
}

function get_ReplaySpeed() {
    return this.VBYLYX
}

function set_ReplaySpeed(n) {
    this.VBYLYX = n;
    this.OXEKQJ = 0
}

function get_PauseAtFrame() {
    return this.XMXWXW
}

function set_PauseAtFrame(n) {
    this.XMXWXW = n
}

function get_CombatComplete() {
    return this.GQJVGO == -1 ? !1 : this.ERSGGO >= this.GQJVGO + 10 + this.DBTEAB.UXPMRE() * 3
}

function get_IsInvalidCombat() {
    return this.GGEEYT
}

function ViewUpdate() {
    var n, t;
    this.RTYPFY.NXPMYM();
    this.OYBVWQ < this.YBHSJX && this.CFILVH != null && (n = this.RTYPFY.OOFWUC(), t = this.CFILVH + this.YBHSJX.toString() + ".png", this.WFOSHB = !1, this.OYBVWQ = this.YBHSJX, ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("SaveScreenshot", {
        data: n,
        name: t
    }, (new $I.JNOYHJ).TFDQYD(this, this.LVHJGT), null))
}

function get_Mode() {
    return this.HGAEIW
}

function set_Mode(n) {
    if (this.CFILVH != null) this.HGAEIW = $I.WHUCCB.Recording;
    else {
        if (this.HGAEIW == n) return;
        this.HGAEIW = n
    }
    this.ADITAF()
}

function set_RecordFileName(n) {
    this.CFILVH = n
}

function set_RecordFPS(n) {
    this.XGWZPM = n
}

function InitBattle() {
    this.ADITAF();
    this.DBTEAB = (new $I.FTKLUE).NRAEXJ(9, 22, this.CYCZYW, 120)
}

function Reset() {
    var f, r, t, i, u, n, o, e;
    this.PXGHFF != -1 && (this.YJDWML.YFGAPN(), this.YJDWML.NSFOQM(), this.YJDWML = null, this.PXGHFF = -1);
    this.EMWQRU != null && (this.EMWQRU.NSFOQM(), this.EMWQRU = null);
    this.PNTYME != null && (this.PNTYME.NSFOQM(), this.PNTYME = null);
    r = this.TBIPHD.d;
    f = {
        k: null,
        v: null
    };
    for (t in r) f.k = t, f.v = r[t], f.v.Effect.NSFOQM();
    this.TBIPHD.AMMYJA();
    t = this.PVFXRN.d;
    r = {
        k: null,
        v: null
    };
    for (i in t) r.k = i, r.v = t[i], r.v.NSFOQM();
    this.PVFXRN.AMMYJA();
    i = this.HATAWN.d;
    t = {
        k: null,
        v: null
    };
    for (n in i) t.k = n, t.v = i[n], t.v.NSFOQM();
    this.HATAWN.AMMYJA();
    n = this.WJYVNG.d;
    i = {
        k: null,
        v: null
    };
    for (u in n) i.k = u, i.v = n[u], i.v.NSFOQM();
    this.WJYVNG.AMMYJA();
    u = this.OASENE.d;
    n = {
        k: null,
        v: null
    };
    for (o in u)
        for (n.k = o, n.v = u[o], e = 0; e < n.v.l.length; e++) n.v.l[e].NSFOQM();
    this.OASENE.AMMYJA();
    this.YBXFCB.AMMYJA();
    $I.FWLFGN.prototype.GJFRJT.call(this);
    this.YRPSWB = null;
    this.ERSGGO = 0;
    this.YBHSJX = 0;
    this.WFOSHB = !0;
    this.OYBVWQ = -1;
    this.XHQLSA = 0;
    this.VBYLYX = 1;
    this.DLZGMA = 0;
    this.IEFKEI = 0;
    this.TTLFWL = -1;
    this.ZLQWSH = null;
    this.SSJOHA = 0;
    this.ZJYFTB = null;
    this.QRQLTR = null;
    this.NAPFKG = $I.KGPDNC.NotInitialized;
    this.COPUEJ = -1;
    this.MBKPXT = -1;
    this.CTYSBV = -1;
    this.SBDFCV = null;
    this.KGMZEO = null;
    this.YLKAHW = null;
    this.GQJVGO = -1;
    this.GGEEYT = !1;
    this.ZRLKZR = -1;
    this.CTBALX = -1;
    this.PHLRHE = !1;
    this.XGSOKD = null;
    this.TTLFWL = -1;
    this.LHXMRZ(0);
    this.RNCGNN(0);
    this.NRYOTH(0);
    this.WXTNZD(0);
    this.GEDWUK = -1
}

function SetDefender(n, t, i, r) {
    this.SBDFCV = n;
    this.YLKAHW = t;
    this.KGMZEO = i;
    this.NNCYFV(r)
}

function GetTargetTime(n) {
    return (this.ERSGGO - 9 + n) * this.BPQFHO
}

function StartBattle() {
    var t, i, n, r;
    (new $I.UCRMVA).SLPWTI();
    (new $I.UDBZSB).SLPWTI();
    (new $I.UDBZSB).SLPWTI();
    this.YRPSWB = (new $I.EUVMEF).IFEXEV(this.DBTEAB, (new $I.SBIHRZ).EPBHJH(this.TRJLTR));
    this.YRPSWB.PIMMXJ((new $I.DVETPP).TFDQYD(this, this.HNIIJT));
    this.YRPSWB.HPNVUF((new $I.DVETPP).TFDQYD(this, this.XVFXTT));
    this.YRPSWB.GSBOUO((new $I.DVETPP).TFDQYD(this, this.MSAEQT));
    this.YRPSWB.HTJNJQ();
    switch (this.HGAEIW) {
        case $I.WHUCCB.Live:
            this.FLRGQI = $I.CVRAYR.VAMLQD().GRIWFQ().XMNHEU($I.CVRAYR.VAMLQD().ILTPKS().DBSFHR());
            break;
        case $I.WHUCCB.Replay:
            this.VBYLYX = 0;
            break;
        case $I.WHUCCB.Recording:
            this.FLRGQI = 0;
            break;
        default:
            this.FLRGQI = (new Date).getTime()
    }
    for (this.ERSGGO = 0, t = 0; t < 9; t++) {
        this.YRPSWB.WOPCOL(!1);
        this.XGSOKD != null && this.OVEWYE();
        i = this.PVFXRN.d;
        n = {
            k: null,
            v: null
        };
        for (r in i) n.k = r, n.v = i[r], n.v.XQKZLS(this.YRPSWB);
        this.MODYLC();
        this.ERSGGO++
    }
    $I.FWLFGN.prototype.LQOHQF.call(this, 0, this.YFBXGB())
}

function get_TimePerStep() {
    return this.BPQFHO
}

function set_TimePerStep(n) {
    this.BPQFHO = n
}

function GetObjectFromPosition(n, t) {
    var u = null,
        i = this.HATAWN.d,
        f = {
            k: null,
            v: null
        },
        r, e;
    for (r in i) f.k = r, f.v = i[r], u = this.MHBRMV(u, f.v, n, t);
    r = this.PVFXRN.d;
    i = {
        k: null,
        v: null
    };
    for (e in r) i.k = e, i.v = r[e], u = this.MHBRMV(u, i.v, n, t);
    return u
}

function get_GridWidth() {
    return this.GNIWHG
}

function get_GridHeight() {
    return this.SZWPFF
}

function get_BattlegroundWidth() {
    return 9
}

function get_BattlegroundHeight() {
    return 23
}

function get_MinXPosition() {
    return $I.OXYXXU.NJRUXP + this.SDUCHU
}

function get_MinYPosition() {
    return $I.OXYXXU.ZRMOAD + this.JUDGFV
}

function get_MaxXPosition() {
    return $I.OXYXXU.WCJOIQ
}

function get_MaxYPosition() {
    return $I.OXYXXU.UXPHOX
}

function get_TopAttackerPos() {
    return this.BJRJCX
}

function get_BottomAttackerPos() {
    return this.MRKCDT
}

function get_LastFrameTime() {
    return this.XHQLSA
}

function SkipToEnd() {
    this.HGAEIW == $I.WHUCCB.Replay && (this.PLJPYU = !0, this.QJOFJP(0))
}

function VisUpdate() {
    var t = {},
        wt = this.PLJPYU,
        g, n, nt, k, c, tt, l, f, o, it, rt, ht, s, y, v, ct, w, r, lt, e, d, at, vt, i, ut, p, h, ft, et, b, u, ot;
    if (this.PLJPYU = !1, this.IXPPPC && this.CJCCON != null && this.CJCCON.NXPMYM(), this.WFOSHB) {
        g = (new Date).getTime();
        this.YBHSJX++;
        n = 0;
        switch (this.HGAEIW) {
            case $I.WHUCCB.Replay:
                n = this.DLZGMA > 0 ? n = this.IEFKEI + Math.floor(this.VBYLYX * (g - this.DLZGMA)) : 0;
                wt && (n = this.TTLFWL);
                break;
            case $I.WHUCCB.Recording:
                n = Math.floor(1e3 / this.XGWZPM * this.YBHSJX);
                break;
            default:
                n = g - this.FLRGQI
        }
        if (n >= 0 && this.YRPSWB != null) {
            $I.FWLFGN.prototype.MUBCWQ.call(this, n);
            $I.FWLFGN.prototype.YDAYMG.call(this, n);
            k = this.TBIPHD.d;
            nt = {
                k: null,
                v: null
            };
            for (c in k) nt.k = c, nt.v = k[c], nt.v.Effect.OCAAHR(n);
            if (this.YKEUVZ != null && (this.YKEUVZ.EVVIKY(this.RTYPFY.ZZGDAN() + $I.OXYXXU.PECERA), this.YKEUVZ.WJAECQ(this.RTYPFY.HCXGMG() + Math.floor(this.MWRYXH() / 2)), this.YKEUVZ.YOJPLZ((this.YRPSWB.ZNQRIM() - 10).toString())), this.KRTPOD != null && (this.KRTPOD.EVVIKY(this.RTYPFY.ZZGDAN() + 2 * $I.OXYXXU.PECERA), this.KRTPOD.WJAECQ(this.RTYPFY.HCXGMG() + Math.floor(this.MWRYXH() / 2) + 20)), k = Math.floor(n / this.BPQFHO) + 10, c = 0, this.COPUEJ < 0 && $I.CVRAYR.VAMLQD().ZBVLXL().HLZNSR().KCWGSH() > 1) {
                this.COPUEJ = 0;
                l = this.PVFXRN.d;
                tt = {
                    k: null,
                    v: null
                };
                for (f in l) tt.k = f, tt.v = l[f], tt.v.BIYMIV()
            }
            while (k > this.ERSGGO && c < 4) {
                this.GQJVGO != -1 || this.YRPSWB.WOPCOL(!1) || (this.GQJVGO = this.ERSGGO);
                this.XGSOKD != null && this.OVEWYE();
                f = this.PVFXRN.d;
                l = {
                    k: null,
                    v: null
                };
                for (o in f) l.k = o, l.v = f[o], l.v.XQKZLS(this.YRPSWB);
                this.MODYLC();
                this.ERSGGO++;
                c++
            }
            f = n % this.BPQFHO / this.BPQFHO;
            this.BJRJCX = this.YFBXGB();
            this.MRKCDT = this.CARSTD();
            o = this.MWRYXH();
            it = this.VVGOEM();
            this.XHQLSA = n - this.IEFKEI;
            this.IEFKEI = n;
            this.DLZGMA = g;
            var a = null,
                rt = this.HATAWN.d,
                st = {
                    k: null,
                    v: null
                };
            for (s in rt) st.k = s, st.v = rt[s], a = this.TXPMGT(a, st.v, it, o);
            if (this.CTBALX > 0 && this.CTBALX < this.ERSGGO - 11) {
                this.PNTYME != null && (this.PNTYME.GUAUQN(1), this.PNTYME.OCAAHR(n));
                rt = 150;
                this.ZRLKZR == -1 ? (this.ZRLKZR = 0, this.VCHWUB = n) : n - this.VCHWUB > rt && this.ZRLKZR < 100 && (this.ZRLKZR++, this.VCHWUB = n);
                ht = this.OASENE.d;
                s = {
                    k: null,
                    v: null
                };
                for (v in ht)
                    if (s.k = v, s.v = ht[v], s.k <= this.ZRLKZR)
                        for (y = 0; y < s.v.l.length; y++) s.v.l[y].MOYYPG(f, n, this.XHQLSA);
                y = this.PVFXRN.d;
                v = {
                    k: null,
                    v: null
                };
                for (ct in y) v.k = ct, v.v = y[ct], r = v.v, r.SNOSLI().MIRGCR() == $I.VXPDBM.TJXXOJ && r.MOYYPG(f, n, this.XHQLSA), r.SFJFXM() && (w = r.XYKFSB(), r.SNOSLI().MIRGCR() == $I.VXPDBM.TJXXOJ && (this.BJRJCX = Math.min(this.BJRJCX, w), this.MRKCDT = Math.max(this.MRKCDT, w + o)), a = this.TXPMGT(a, r, it, o))
            } else {
                w = this.PVFXRN.d;
                r = {
                    k: null,
                    v: null
                };
                for (lt in w) r.k = lt, r.v = w[lt], e = r.v, e.MOYYPG(f, n, this.XHQLSA), e.SFJFXM() && (d = e.XYKFSB(), e.SNOSLI().MIRGCR() == $I.VXPDBM.TJXXOJ && (this.BJRJCX = Math.min(this.BJRJCX, d), this.MRKCDT = Math.max(this.MRKCDT, d + o)), a = this.TXPMGT(a, e, it, o))
            }
            for (this.MRKCDT < this.BJRJCX && (this.MRKCDT = this.BJRJCX), this.HUEYFV ? this.GNYKAY(a) : (this.LWPAXG == null || this.LWPAXG.SFJFXM() || (this.LWPAXG = null), this.KLSJMC(this.LWPAXG)), e = 0; e < c; e++)
                if (at = this.ERSGGO - e, t.$r = this.YBXFCB.ZOXRAI(at - 11, t), d = t.b, t.$r)
                    for (this.YBXFCB.XUDPAL(at - 11), vt = d.l, ut = 0; ut < vt.length; ut++) {
                        i = vt[ut];
                        var yt, bt = i.SourceId >= 0 ? i.SourceId : 1023,
                            kt = i.DamageType > 0 ? i.DamageType : 500 - i.DamageType,
                            pt = kt << 20 | i.TargetId << 10 | bt;
                        (t.$r = this.WJYVNG.ZOXRAI(pt, t), yt = t.b, t.$r) && !yt.FFYVGM(n) || ((t.$r = this.PVFXRN.ZOXRAI(i.SourceId, t), h = t.b, t.$r) || (h = null), (t.$r = this.PVFXRN.ZOXRAI(i.TargetId, t), p = t.b, t.$r) || (p = null), p != null && (b = $I.BUEVKL.QGLUJV().VXAMCA(), u = 0, i.DamageType == -2 ? u = h.SNOSLI().CYSKOL() == 136 || h.SNOSLI().CYSKOL() == 160 ? b.CombatView.ie[1] : b.CombatView.ie[0] : i.DamageType == -3 ? u = b.CombatView.ie[2] : h != null && (u = h.JCYBIL(i.DamageType)), u != 0 || (u = b.UnitAmmoTypeImpactEffect[i.DamageType], u == undefined ? !1 : !0) || (u = 0), u == 0 && (u = b.CombatView.ie[0]), h == null ? (t.$r = p.JFZJFP(t), ft = t.a, et = t.b, t.$r, ft += this.VVGOEM(), et += this.MWRYXH()) : (ft = Math.floor(p.DGLCVK()) + this.VVGOEM() + $I.HCPEDW.UNDYVY.QCLFNA(10) - $I.OXYXXU.GGCKSS, et = Math.floor(p.XYKFSB()) + this.MWRYXH() + $I.HCPEDW.UNDYVY.QCLFNA(10) - $I.OXYXXU.JSILMN), ot = $I.FWLFGN.prototype.ZHYSYR.call(this, u, ft, et, null, n), ot != null && (ot.TYDVYV(p.MGRWMR() == $I.APOYFH.AirUnit ? 25 : 7), this.WJYVNG.GXVKTX(pt, ot))), h != null && i.DamageType != -2 && h.UZWIQS(i.DamageType, n))
                    }
            this.QEHCOX(n)
        }
    }
}

function get_BattleDuration() {
    return this.TTLFWL
}

function get_LastBattleTime() {
    return this.IEFKEI
}

function PlayShootSound(n, t) {
    var r = {},
        i, u, f;
    if (this.IXPPPC && this.CJCCON != null) {
        u = 0;
        do f = n + "$" + u.toString(), u++, (r.$r = this.CNGAUC.ZOXRAI(f, r), i = r.b, r.$r) || (i = this.CJCCON.UDKYCS("base", null), i.FZUQSO($I.QOKGWR.WBFJPT().SBOUYU(n + "." + i.YSCYLJ())), this.CNGAUC.GXVKTX(f, i)); while (i.WCBTQD());
        i.XHIETO(t);
        this.CJCCON.XKAUJR(i)
    }
}

function GetUnitPosY(n) {
    var t = {},
        i;
    return (t.$r = this.PVFXRN.ZOXRAI(n, t), i = t.b, t.$r) ? i.XYKFSB() : 0
}

function get_BattlePlaceFaction() {
    return this.KYWLJI
}

function set_BattlePlaceFaction(n) {
    this.KYWLJI != n && (this.KYWLJI = n, this.HSDNPH.PTVNAR($I.ILHIOR.GILABD().ZJFLKT().VBTDDG()), this.JUEUPB.PTVNAR($I.BMZJUL.KJHWRT(this.KYWLJI)), this.FUCVFM.PTVNAR($I.BMZJUL.YMHVDV(this.KYWLJI)))
}

function UpdateAutoCam(n) {
    var i = $I.ILHIOR.GILABD(),
        r = i.HPXBTV(),
        o = r,
        t;
    if (n != 1) return !1;
    var s = .2,
        u = .3,
        h = this.XVWKNZ(),
        c = this.JPWFEN(),
        l = Math.max(0, Math.min(1, (c - h) / i.ULNTVQ())),
        f = l * (h - 2 * this.MWRYXH()) + (1 - l) * (c - i.ULNTVQ() + 2 * this.MWRYXH()),
        e = this.YLZDZH() * .5;
    return f = s * f + (1 - s) * r, t = f - r, t = u * t + (1 - u) * this.OXEKQJ, Math.abs(t) > e && (t < 0 && (e *= -1), t = u * e + (1 - u) * this.OXEKQJ), o = r + t, this.OXEKQJ = t, i.LQOHQF(0, o), !0
}

function get_BoostOffInfantry() {
    return this.FDCFPR
}

function set_BoostOffInfantry(n) {
    this.FDCFPR = n
}

function get_BoostOffVehicles() {
    return this.JBLROT
}

function set_BoostOffVehicles(n) {
    this.JBLROT = n
}

function get_BoostOffAir() {
    return this.SOLNRC
}

function set_BoostOffAir(n) {
    this.SOLNRC = n
}

function get_BoostDef() {
    return this.XKFWAG
}

function set_BoostDef(n) {
    this.XKFWAG = n
}

function get_Replay() {
    return this.PWQDBQ
}

function get_DefenseDestroyed() {
    return this.PHLRHE
}

function get_DustActive() {
    return this.PGJSJM
}

function get_BlockerMoveoverEffects() {
    return this.EVRJDH
}

function get_MinZoomFactor() {
    return this.XNVDVT.TFIAWQ()
}

function add_OnDSync(n) {
    var t = {},
        i, r = this.XMTVKB,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.XMTVKB, t.$r = $I.TSJVQL.JXWJWI($I.EVGNJQ, u, i, t), this.XMTVKB = t.a, t.$r); while (r != i)
}

function remove_OnDSync(n) {
    var t = {},
        i, r = this.XMTVKB,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.XMTVKB, t.$r = $I.TSJVQL.JXWJWI($I.EVGNJQ, u, i, t), this.XMTVKB = t.a, t.$r); while (r != i)
}