function Init() {
    var n, i, r, t, f, e, u, h, o;
    if ($I.SGJMYC.NXWPIH(), $I.ZGKKSN.NXWPIH(), $I.NUUMKK.NXWPIH(), $I.XCCOZJ.NXWPIH(), $I.ICKEKE.NXWPIH(), $I.QWMXEH.NXWPIH(), $I.FVLGLD.NXWPIH(), n = $I.VZUWDA.HWQFBC(), this.PVKPSP = n.LGUSNR()[0] == "Canvas", this.XQCUKX = this.PVKPSP, this.HOGOIS = n.LGUSNR()[0] == "WebGL", i = $I.CVRAYR.VAMLQD().TZZENG().BDVSJJ() * this.VVGOEM(), r = $I.CVRAYR.VAMLQD().TZZENG().XUXGOK() * this.MWRYXH(), this.RRBVEU = n.EPEVAC(n.LGUSNR()[0], (new $I.TVRWKD).DDKHQH(-this.VVGOEM(), -this.MWRYXH(), i, r)), this.RTYPFY = this.RRBVEU.RXTFPL(0, 0), this.RTYPFY.LSWBIS(0), this.RTYPFY.BMIJEH(this.HJPPSQ), this.RTYPFY.NQJJZY(this.WFAOZS), this.WULJLE = this.RRBVEU.UHZXOZ("customShader"), this.WULJLE != null) {
        for (this.WULJLE.WSWVUL("attribute vec4 aPosition;attribute vec4 aColor;uniform mat4 uPMatrix;varying vec4 vColor;varying vec2 vTexCoords;void main(void){vec4 position=vec4(aPosition.x,aPosition.y,1.0,1.0);gl_Position=uPMatrix*position;vTexCoords=aPosition.zw;vColor=aColor;}"), this.WULJLE.VSBAPF("precision mediump float;uniform sampler2D tMask;varying highp vec2 vTexCoords;varying lowp vec4 vColor;void main(void){vec4 mask=texture2D(tMask,vTexCoords);vec4 color=vec4(vColor.xyz+mask.xyz, vColor.w*mask.w);gl_FragColor=color;}"), this.WULJLE.ZRLFVO($I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.EUNQAF, 1), "uPMatrix")), this.WULJLE.CFFEJG($I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.EUNQAF, 1), "tMask")), this.WULJLE.CYYVOL($I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.BNCPQS, 2), (new $I.BNCPQS).WZLVAC("aPosition", 4, $I.OXRMAF.ZHDPKY, !1, 20, 0), (new $I.BNCPQS).WZLVAC("aColor", 4, $I.OXRMAF.RYCBVB, !0, 20, 16))), this.WULJLE.KXVCKE(), this.NUEAAV = this.WHQQMY().TDBBHP("customShader", null), this.NUEAAV.EVVIKY(0), this.NUEAAV.WJAECQ(0), this.NUEAAV.BMIJEH(i), this.NUEAAV.NQJJZY(r), this.NUEAAV.TYDVYV(8), this.NUEAAV.QOUDUX(0), this.NUEAAV.AZKRKW(!0), this.NUEAAV.JMUXYK(this.WULJLE), this.NUEAAV.BWDTPY(6e3), this.NUEAAV.ZIXGYM(8e4), this.NUEAAV.QNZKDC(0, "battleview/neutral/territory/territory.png"), this.ZYXAKR = $I.UDAQKL.DNVCCU($I.YJUUCR, 1e3), t = 0; t < this.ZYXAKR.length - 1; t++) this.ZYXAKR[t] = t + 1;
        this.ZYXAKR[this.ZYXAKR.length - 1] = -1;
        this.XTONED = 0
    }
    this.HOGOIS && (f = this.RTYPFY, e = f.TUOQUD(), this.HSDASG = f.CXUPTK("battleview/neutral/territory/territory.png", 1), this.OPDYIP = (new $I.XXKXCB).VXEHYJ(e, "attribute vec4 aPosition;attribute vec4 aColor;uniform mat4 uPMatrix;varying vec4 vColor;varying vec2 vTexCoords;void main(void){vec4 position=vec4(aPosition.x,aPosition.y,1.0,1.0);gl_Position=uPMatrix*position;vTexCoords=aPosition.zw;vColor=aColor;}", "precision mediump float;uniform sampler2D tMask;varying highp vec2 vTexCoords;varying lowp vec4 vColor;void main(void){vec4 mask=texture2D(tMask,vTexCoords);vec4 color=vec4(vColor.xyz+mask.xyz, vColor.w*mask.w);gl_FragColor=color;}", $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.EUNQAF, 1), "uPMatrix")), this.MKKDSI = this.OPDYIP.GDDXDJ(e, $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.YBDTUA, 2), (new $I.YBDTUA).WZLVAC("aPosition", 4, $I.IKRMEI.DCVSIK, !1, 20, 0), (new $I.YBDTUA).WZLVAC("aColor", 4, $I.IKRMEI.DUUHHX, !0, 20, 16))), this.XCCMFW = this.RRBVEU.TDBBHP("custom", null), this.XCCMFW.LLNBXE((new $I.KKXHRS).TFDQYD(this, this.TNPHMN)), this.XCCMFW.EVVIKY(0), this.XCCMFW.WJAECQ(0), this.XCCMFW.BMIJEH(i), this.XCCMFW.NQJJZY(r), this.XCCMFW.TYDVYV(8), this.XCCMFW.QOUDUX(1), this.RRBVEU.UVSZDF(this.XCCMFW));
    $I.CVRAYR.VAMLQD().UXQPUS().KABQWF((new $I.ZDCDEA).TFDQYD(this, this.TUYYWZ));
    $I.CVRAYR.VAMLQD().RWLPVY().QVJJKS((new $I.HCABEE).TFDQYD(this, this.CBSLQC));
    $I.CVRAYR.VAMLQD().RWLPVY().UFCTOZ((new $I.HCABEE).TFDQYD(this, this.FUUSBX));
    $I.CVRAYR.VAMLQD().FMKUPK().OTRBXT((new $I.IWNHMI).TFDQYD(this, this.TBODFL));
    var c = $I.QOKGWR.WBFJPT(),
        l = $I.CVRAYR.VAMLQD().TZZENG().BDVSJJ() * this.VVGOEM(),
        a = $I.CVRAYR.VAMLQD().TZZENG().XUXGOK() * this.MWRYXH(),
        s = "battleview/neutral/groundtile_battle.jpg";
    this.WOZIWY = c.VDQLZP(s);
    this.NZFFJR = s;
    this.KBVRFS = $I.UDAQKL.DNVCCU($I.DPUUEP, Math.floor(Math.ceil(l / this.WOZIWY.w)), Math.floor(Math.ceil(a / this.WOZIWY.h)));
    u = $I.CVRAYR.VAMLQD().AZKOEM();
    u.KOTWEE((new $I.QBBNRV).TFDQYD(this, this.PCZRQV));
    u.KRNWKC((new $I.QBBNRV).TFDQYD(this, this.PCZRQV));
    u.BHJOAW((new $I.QBBNRV).TFDQYD(this, this.PCZRQV));
    $I.CVRAYR.VAMLQD().FMKUPK().CGANBS((new $I.IWNHMI).TFDQYD(this, this.YERAHZ));
    h = $I.QOKGWR.WBFJPT();
    this.CPIRKA = $I.UDAQKL.DNVCCU($I.KQYCNT, 1);
    o = h.VDQLZP("baseview/neutral/gui/1x1.png");
    this.CPIRKA[0] = (new $I.KQYCNT).YAXDNR("baseview/neutral/gui/1x1.png", o.w, o.h, $I.WENOQS.XTDHNW, $I.WENOQS.EHLMUD, 1);
    $I.CVRAYR.VAMLQD().ZBVLXL().VEMVSU((new $I.XQQEVR).TFDQYD(this, this.QDWTAG));
    $I.CVRAYR.VAMLQD().ZBVLXL().EOBUFO((new $I.MBLAWJ).TFDQYD(this, this.GURNBR));
    this.RTYPFY.FDTPLG("region_city_owner", $I.FWLFGN.KRNJSC);
    this.RTYPFY.FDTPLG("region_city_name", $I.FWLFGN.KRNJSC)
}

function get_VisAreaComplete() {
    return this.FBJGCO
}

function GetDecal(n) {
    return this.CPIRKA[n]
}

function SetColorDirty() {
    var t = this.EXHGHL.d,
        n = {
            k: null,
            v: null
        };
    for (var i in t) n.k = i, n.v = t[i], n.v.MMSMJW()
}

function SetActive(n) {
    this.HTSQMS != n && (this.HTSQMS = n, this.XPLRPZ())
}

function UiUpdate(n) {
    for (var r, v, y, o, t, u, i, a, e = {}, nt = $I.CVRAYR.VAMLQD().ZBVLXL().GIYDVX(), p = this.RTYPFY.DZSXHC() / this.RTYPFY.LVCGWY(), w = this.RTYPFY.KUAIEC() / this.RTYPFY.LVCGWY(), s = Math.floor(Math.floor(this.RTYPFY.ZZGDAN() / this.VVGOEM())), h = Math.floor(Math.floor((this.RTYPFY.ZZGDAN() + p) / this.VVGOEM())), c = Math.floor(Math.floor(this.RTYPFY.HCXGMG() / this.MWRYXH())), l = Math.floor(Math.floor((this.RTYPFY.HCXGMG() + w) / this.MWRYXH())), b = Math.floor(s / 32), k = Math.floor(h / 32), d = Math.floor(c / 32), g = Math.floor(l / 32), f = d; f <= g; f++)
        for (r = b; r <= k; r++) y = f << 16 | r, (e.$r = this.EXHGHL.ZOXRAI(y, e), v = e.b, e.$r) && v.NZKRJH(s - r * 32, c - f * 32, h - r * 32, l - f * 32, n);
    t = this.HINYWV.d;
    o = {
        k: null,
        v: null
    };
    for (i in t) o.k = i, o.v = t[i], o.v.CXESLP(n);
    i = this.PKYLDH.d;
    t = {
        k: null,
        v: null
    };
    for (u in i) t.k = u, t.v = i[u], t.v.FDMIUF() + t.v.SPPERN() >= s && t.v.FDMIUF() <= h && t.v.ICDVYS() + t.v.GSNTLN() >= c && t.v.ICDVYS() <= l && t.v.CXESLP(n);
    u = this.WDMFYG.d;
    i = {
        k: null,
        v: null
    };
    for (a in u) i.k = a, i.v = u[a], i.v.CXESLP(n);
    this.QNEUIY()
}

function VisUpdate(n) {
    var u = {},
        k, f, o, s, ut, ft, a, h, c, d, et, v, t, e, i, l, r, g;
    this.FAGROA++;
    this.FAGROA >= 60 && (this.FAGROA = 0, this.VQOCBA());
    k = $I.CVRAYR.VAMLQD().ZBVLXL().GIYDVX();
    k != this.WGAMFN && (this.EUTWAC(this.WGAMFN), this.WGAMFN = k, this.EUTWAC(this.WGAMFN));
    var ot = this.RTYPFY.DZSXHC() / this.RTYPFY.LVCGWY(),
        st = this.RTYPFY.KUAIEC() / this.RTYPFY.LVCGWY(),
        y = Math.floor(Math.floor(this.RTYPFY.ZZGDAN() / this.VVGOEM())),
        p = Math.floor(Math.floor((this.RTYPFY.ZZGDAN() + ot) / this.VVGOEM())),
        w = Math.floor(Math.floor(this.RTYPFY.HCXGMG() / this.MWRYXH())),
        b = Math.floor(Math.floor((this.RTYPFY.HCXGMG() + st) / this.MWRYXH())),
        nt = Math.floor(y / 32),
        tt = Math.floor(p / 32),
        it = Math.floor(w / 32),
        rt = Math.floor(b / 32);
    for (this.FBJGCO = !0, f = (new Date).getTime(), o = it; o <= rt; o++)
        for (s = nt; s <= tt; s++) ft = o << 16 | s, (u.$r = this.EXHGHL.ZOXRAI(ft, u), ut = u.b, u.$r) && ut.DSKJJH(y - s * 32, w - o * 32, p - s * 32, b - o * 32);
    for (a = $I.UQGIGO.XBYUSR().HYVOUU("vis/base/animations"), this.TSJLAX($I.UQGIGO.XBYUSR().HYVOUU("vis/region/minzoom")), h = it; h <= rt; h++)
        for (c = nt; c <= tt; c++) et = h << 16 | c, (u.$r = this.EXHGHL.ZOXRAI(et, u), d = u.b, u.$r) ? (d.YNSVYP(y - c * 32, w - h * 32, p - c * 32, b - h * 32, n, f, a), d.XXCKQZ() || (this.FBJGCO = !1)) : this.FBJGCO = !1;
    for (v = 0; v < this.GYWIME.l.length;) this.GYWIME.l[v].IEVZKV(this.RRBVEU, f, this.NUEAAV, this) ? v++ : this.GYWIME.l.splice(v, 1);
    this.NUEAAV != null && (this.GYWIME.l.length > 0 ? this.CXTFQL || (this.RRBVEU.UVSZDF(this.NUEAAV), this.CXTFQL = !0) : this.CXTFQL && (this.RRBVEU.NEHMEK(this.NUEAAV), this.CXTFQL = !1));
    e = this.PKYLDH.d;
    t = {
        k: null,
        v: null
    };
    for (i in e) t.k = i, t.v = e[i], t.v.FDMIUF() + t.v.SPPERN() >= y && t.v.FDMIUF() <= p && t.v.ICDVYS() + t.v.GSNTLN() >= w && t.v.ICDVYS() <= b && t.v.GGGTTE(n, f, a);
    i = this.LVKFKH.d;
    e = {
        k: null,
        v: null
    };
    for (r in i) e.k = r, e.v = i[r], e.v.LDPRUL(this.RRBVEU, f);
    r = this.HINYWV.d;
    i = {
        k: null,
        v: null
    };
    for (l in r) i.k = l, i.v = r[l], i.v.GGGTTE(n, f, a);
    l = this.WDMFYG.d;
    r = {
        k: null,
        v: null
    };
    for (g in l) r.k = g, r.v = l[g], r.v.GGGTTE(n, f, a)
}

function IsCoordinateVisible(n, t) {
    var i = this.RTYPFY.DZSXHC() / this.RTYPFY.LVCGWY(),
        r = this.RTYPFY.KUAIEC() / this.RTYPFY.LVCGWY(),
        u = Math.floor(Math.floor(this.RTYPFY.ZZGDAN() / this.VVGOEM())),
        f = Math.floor(Math.floor((this.RTYPFY.ZZGDAN() + i) / this.VVGOEM())),
        e = Math.floor(Math.floor(this.RTYPFY.HCXGMG() / this.MWRYXH())),
        o = Math.floor(Math.floor((this.RTYPFY.HCXGMG() + r) / this.MWRYXH()));
    return n >= u && n <= f && t >= e && t <= o
}

function GetVisOffsetX() {
    return this.RTYPFY.ZZGDAN()
}

function GetVisOffsetY() {
    return this.RTYPFY.HCXGMG()
}

function GetRectCity(n) {
    var t, i;
    return n == null ? null : (t = (n.ZFEMVW() + .5) * this.VVGOEM(), i = (n.IIKXGY() + .5) * this.MWRYXH(), (new $I.OBSHFD).GWVVSW(Math.floor(Math.floor(this.UVURBD() * (i - Math.floor(this.MWRYXH() / 2) - this.BTDMWR()))), Math.floor(Math.floor(this.UVURBD() * (t - Math.floor(this.VVGOEM() / 2) - this.ZMHIOW()))), Math.floor(Math.floor(this.UVURBD() * (t + Math.floor(this.VVGOEM() / 2) - this.ZMHIOW()))), Math.floor(Math.floor(this.UVURBD() * (i + Math.floor(this.MWRYXH() / 2) - this.BTDMWR())))))
}

function GetRectVis(n, t) {
    var i = (n + .5) * this.VVGOEM(),
        r = (t + .5) * this.MWRYXH();
    return (new $I.OBSHFD).GWVVSW(Math.floor(Math.floor(this.UVURBD() * (r - Math.floor(this.MWRYXH() / 2) - this.BTDMWR()))), Math.floor(Math.floor(this.UVURBD() * (i - Math.floor(this.VVGOEM() / 2) - this.ZMHIOW()))), Math.floor(Math.floor(this.UVURBD() * (i + Math.floor(this.VVGOEM() / 2) - this.ZMHIOW()))), Math.floor(Math.floor(this.UVURBD() * (r + Math.floor(this.MWRYXH() / 2) - this.BTDMWR()))))
}

function GetObjectFromPosition(n, t) {
    var i = {},
        e, r = Math.floor(n / this.VVGOEM()),
        u = Math.floor(t / this.MWRYXH()),
        o = Math.floor(Math.floor(r / 32)),
        s = Math.floor(Math.floor(u / 32)),
        h = s << 16 | o,
        f;
    return (i.$r = this.EXHGHL.ZOXRAI(h, i), e = i.b, i.$r) ? (f = e.ZMVKAF(r, u), f == null) ? this.NPTVQT(r, u) : f : null
}

function GetAllObjectsFromPosition(n, t) {
    var r = {},
        o, u = (new $I.UCRMVA).SLPWTI(),
        f = Math.floor(n / this.VVGOEM()),
        e = Math.floor(t / this.MWRYXH()),
        s = Math.floor(Math.floor(f / 32)),
        h = Math.floor(Math.floor(e / 32)),
        c = h << 16 | s,
        i;
    return (r.$r = this.EXHGHL.ZOXRAI(c, r), o = r.b, r.$r) ? (i = o.ZMVKAF(f, e), i != null && u.l.push(i), i = this.NPTVQT(f, e), i != null && u.l.push(i), u) : null
}

function GetGhostCitiesFromPosition(n, t) {
    var i = {},
        r, u = Math.floor(n / this.VVGOEM()),
        f = Math.floor(t / this.MWRYXH());
    return (i.$r = this.BUGODH.ZOXRAI(f << 16 | u, i), r = i.b, i.$r) || (r = (new $I.UCRMVA).SLPWTI()), r
}

function GetCities() {
    var f = (new $I.UDBZSB).SLPWTI(),
        e = this.EXHGHL.d,
        t = {
            k: null,
            v: null
        },
        i, r, u, n;
    for (i in e)
        for (t.k = i, t.v = e[i], r = t.v.NQXJLA().l, n = 0; n < r.length; n++) u = r[n], f.GXVKTX(u.worldId, u);
    return f
}

function GetNPCBases() {
    var f = (new $I.UDBZSB).SLPWTI(),
        e = this.EXHGHL.d,
        t = {
            k: null,
            v: null
        },
        i, r, u, n;
    for (i in e)
        for (t.k = i, t.v = e[i], r = t.v.NBJGPX().l, n = 0; n < r.length; n++) u = r[n], f.GXVKTX(u.worldId, u);
    return f
}

function GetNPCCamps() {
    var f = (new $I.UDBZSB).SLPWTI(),
        e = this.EXHGHL.d,
        t = {
            k: null,
            v: null
        },
        i, r, u, n;
    for (i in e)
        for (t.k = i, t.v = e[i], r = t.v.JSGITZ().l, n = 0; n < r.length; n++) u = r[n], f.GXVKTX(u.worldId, u);
    return f
}

function GetAllianceMarkersFromPosition(n, t) {
    var r = (new $I.UCRMVA).SLPWTI(),
        e = Math.floor(n / this.VVGOEM()),
        o = Math.floor(t / this.MWRYXH()),
        s = o << 16 | e,
        u = this.WDMFYG.d,
        i = {
            k: null,
            v: null
        };
    for (var f in u) i.k = f, i.v = u[f], i.v.HHNUIC() == s && i.v.YQRIYH().GIRXAB() != $I.QOYXHV.EAMT_Home && r.l.push(i.v);
    return r
}

function get_GridWidth() {
    return $I.WENOQS.IUGLXC
}

function get_GridHeight() {
    return $I.WENOQS.EPHMTI
}

function get_MinXPosition() {
    return 0
}

function get_MaxXPosition() {
    return $I.CVRAYR.VAMLQD().TZZENG().BDVSJJ() * this.VVGOEM()
}

function get_MinYPosition() {
    return 0
}

function get_MaxYPosition() {
    return $I.CVRAYR.VAMLQD().TZZENG().XUXGOK() * this.MWRYXH()
}

function SetAttackOverlayCity(n) {
    var t = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(n);
    this.WKIPKG != t && (this.WKIPKG = t, this.QNEUIY())
}

function GetDamageStateByBuildingAndDefenseConditions(n, t) {
    var r, i;
    return (r = t > -1 ? Math.floor((n + t) / 2) : n, i = $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.YJUUCR, 2), 0, 0), r == 0 && (i[0] = 2, i[1] = 0), r < 25) ? (i[0] = 1, i[1] = 6, i) : r < 40 ? (i[0] = 1, i[1] = 5, i) : r < 60 ? (i[0] = 1, i[1] = 4, i) : r < 80 ? (i[0] = 0, i[1] = 3, i) : r < 99 ? (i[0] = 0, i[1] = 2, i) : (r < 100 && (i[0] = 0, i[1] = 1), i)
}

function get_UseCachedBackgroundPlates() {
    return this.XQCUKX
}

function set_UseCachedBackgroundPlates(n) {
    this.PVKPSP && (this.XQCUKX = n)
}

function get_UseWebGL() {
    return this.HOGOIS
}

function HideAllPlates() {
    var t = this.EXHGHL.d,
        n = {
            k: null,
            v: null
        };
    for (var i in t) n.k = i, n.v = t[i], n.v.ZQWAVX()
}

function ShowAllPlates() {
    var t = this.EXHGHL.d,
        n = {
            k: null,
            v: null
        };
    for (var i in t) n.k = i, n.v = t[i], n.v.CQRJDE()
}

function ShowSectorBorders(n) {
    var u, t, f, i, s, h, e;
    if (n) {
        if (this.DGRHXV == null) {
            this.DGRHXV = (new $I.UCRMVA).SLPWTI();
            var c = $I.CVRAYR.VAMLQD().TZZENG().BDVSJJ() * this.VVGOEM(),
                l = $I.CVRAYR.VAMLQD().TZZENG().XUXGOK() * this.MWRYXH(),
                r = 6,
                o = Math.floor($I.CVRAYR.VAMLQD().TZZENG().XUXGOK() / 32);
            for (u = 0; u < o; u++) t = this.WHQQMY().TDBBHP("box", null), t.BMIJEH(c), t.NQJJZY(r), t.EVVIKY(0), t.WJAECQ(u * 32 * this.MWRYXH() + Math.floor(r / 2)), t.NJXPRI("#000000"), t.TYDVYV(101), this.WHQQMY().UVSZDF(t), this.DGRHXV.l.push(t);
            for (o = Math.floor($I.CVRAYR.VAMLQD().TZZENG().BDVSJJ() / 32), f = 0; f < o; f++) i = this.WHQQMY().TDBBHP("box", null), i.BMIJEH(r), i.NQJJZY(l), i.EVVIKY(f * 32 * this.VVGOEM() + Math.floor(r / 2)), i.WJAECQ(0), i.NJXPRI("#000000"), i.TYDVYV(101), this.WHQQMY().UVSZDF(i), this.DGRHXV.l.push(i)
        }
    } else if (this.DGRHXV != null) {
        for (s = this.DGRHXV.l, e = 0; e < s.length; e++) h = s[e], this.WHQQMY().NEHMEK(h);
        this.DGRHXV.l = [];
        this.DGRHXV = null
    }
}

function get_MinZoomFactor() {
    return this.FLVTDT() ? this.PGYSKQ : $I.IRSHYN.LINRLP
}

function get_UseOwnMinZoom() {
    return this.ECYGPX
}

function set_UseOwnMinZoom(n) {
    this.ECYGPX != n && (this.ECYGPX = n, this.CLKEQT(Math.max(this.UVURBD(), this.PGYSKQ)))
}

function SetMinZoomFactor(n) {
    this.PGYSKQ = Math.min(this.XNVDVT.TFIAWQ(), Math.max(.1, n));
    this.CLKEQT(Math.max(this.UVURBD(), this.PGYSKQ))
}

function add_SectorUpdated(n) {
    var t = {},
        i, r = this.FMBEGK,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.FMBEGK, t.$r = $I.TSJVQL.JXWJWI($I.KYSYOK, u, i, t), this.FMBEGK = t.a, t.$r); while (r != i)
}

function remove_SectorUpdated(n) {
    var t = {},
        i, r = this.FMBEGK,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.FMBEGK, t.$r = $I.TSJVQL.JXWJWI($I.KYSYOK, u, i, t), this.FMBEGK = t.a, t.$r); while (r != i)
}