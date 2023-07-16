function get_SceneType() {
    return this.ENNERY
}

function get_Mode() {
    return this.QOXVTM
}

function set_Mode(n) {
    this.QOXVTM = n
}

function Init() {
    var u, t, i, f, n, r;
    this.RTYPFY.LSWBIS(1);
    this.GRURAX() == "SVG" ? (u = $I.CVRAYR.VAMLQD().ONGTRQ().WMEKEJ() == $I.KGPDNC.GDIFaction ? "worldview/gdi/background.svg" : "worldview/nod/background.svg", this.QAIGRY = this.RRBVEU.TDBBHP("image", null), this.QAIGRY.BMIJEH($I.PQDILF.ILZDUM * $I.PQDILF.RRBDKX), this.QAIGRY.NQJJZY($I.PQDILF.HCQGWR * $I.PQDILF.WPZREN), this.QAIGRY.PTVNAR(u)) : (t = $I.CVRAYR.VAMLQD().ONGTRQ().WMEKEJ() == $I.KGPDNC.GDIFaction ? "worldview/gdi/background.png" : "worldview/nod/background.png", i = $I.QOKGWR.WBFJPT().VDQLZP(t), this.QAIGRY = this.RRBVEU.TDBBHP("image", null), this.QAIGRY.BMIJEH(i.w * $I.PQDILF.RRBDKX), this.QAIGRY.NQJJZY(i.h * $I.PQDILF.WPZREN), this.QAIGRY.PTVNAR(t));
    this.QAIGRY.EVVIKY(0);
    this.QAIGRY.WJAECQ(0);
    this.QAIGRY.TYDVYV(1);
    this.QAIGRY.QOUDUX(1);
    this.RRBVEU.UVSZDF(this.QAIGRY);
    this.URRZRE();
    this.OHEENB();
    this.GRURAX() == "SVG" && (f = $I.CVRAYR.VAMLQD().ONGTRQ().WMEKEJ() == $I.KGPDNC.GDIFaction ? "worldview/gdi/logo.svg" : "worldview/nod/logo.svg", n = this.RRBVEU.TDBBHP("image", null), n.TYDVYV(2), n.QOUDUX(2), n.BMIJEH(this.QAIGRY.DZSXHC() / 3.34), n.NQJJZY(this.QAIGRY.KUAIEC() / 3.34), n.EVVIKY(914), n.WJAECQ(20), n.PTVNAR(f), this.RRBVEU.UVSZDF(n));
    r = $I.CVRAYR.VAMLQD().ZBVLXL().BRKRLI();
    r != null && (this.LUKPLF = r.UQGPFX());
    this.DKPSEK = (new $I.WYTOTB).CTOKHC(this);
    this.UTZPBI = (new $I.UDBZSB).SLPWTI();
    this.YPYITV = (new $I.UDBZSB).SLPWTI();
    this.XHXWXO = (new $I.UDBZSB).SLPWTI();
    this.EJKCWS = (new $I.UDBZSB).SLPWTI();
    this.FABDRL = (new $I.UDBZSB).SLPWTI();
    this.NDLXYV = (new $I.UDBZSB).SLPWTI()
}

function CenterView() {
    this.JZNSHH = Math.floor(($I.PQDILF.ILZDUM - this.UJPRER() / this.UVURBD()) / 2);
    this.TTZQCK = Math.floor(($I.PQDILF.HCQGWR - this.ULNTVQ() / this.UVURBD()) / 2);
    this.JZNSHH < 0 && (this.YEFVMW = Math.floor(this.JZNSHH));
    this.TTZQCK < 0 && (this.GHRWDP = Math.floor(this.TTZQCK));
    this.ABBRDG()
}

function SetActive(n) {
    this.KVGPIK(n)
}

function OnCitiesChange() {
    var r, t, i, u, f;
    if (this.GKAJCI() && this.XLZCJW()) {
        var e = $I.CVRAYR.VAMLQD().ZBVLXL().LVIQBQ(),
            o = e.d,
            n = {
                k: null,
                v: null
            };
        for (r in o) n.k = r, n.v = o[r], n.v.UBTDFB() && (this.XHXWXO.XOHVCR(n.k) ? this.XHXWXO.d[n.k].DNOUSX(n.v) : (t = (new $I.TKEAKJ).ICONFK(this, $I.CDNXVQ.WorldCityOwn, n.v), this.XHXWXO.GXVKTX(n.k, t)));
        var r = (new $I.UCRMVA).SLPWTI(),
            u = this.XHXWXO.d,
            t = {
                k: null,
                v: null
            };
        for (i in u) t.k = i, t.v = u[i], e.XOHVCR(t.k) && e.d[t.k].UBTDFB() || r.l.push(t.k);
        for (i = r.l, f = 0; f < i.length; f++) u = i[f], this.XHXWXO.d[u].NSFOQM(), this.XHXWXO.XUDPAL(u)
    } else this.HENQMI(this.XHXWXO)
}

function OnAllianceMarkerChange() {
    var e, n, t, i, r, u, f;
    if (this.GKAJCI() && this.GEAXPU()) {
        for (e = $I.CVRAYR.VAMLQD().FMKUPK().HSTVCE().l, t = 0; t < e.length; t++) n = e[t], this.EJKCWS.XOHVCR(n.UQGPFX()) ? this.EJKCWS.d[n.UQGPFX()].DNOUSX(n) : (i = (new $I.TKEAKJ).ICONFK(this, $I.CDNXVQ.WorldAllianceMarker, n), this.EJKCWS.GXVKTX(n.UQGPFX(), i));
        var t = (new $I.UCRMVA).SLPWTI(),
            u = this.EJKCWS.d,
            i = {
                k: null,
                v: null
            };
        for (r in u) i.k = r, i.v = u[r], $I.CVRAYR.VAMLQD().FMKUPK().QKHUSN(i.k) == null && t.l.push(i.k);
        for (r = t.l, f = 0; f < r.length; f++) u = r[f], this.EJKCWS.d[u].NSFOQM(), this.EJKCWS.XUDPAL(u)
    } else this.HENQMI(this.EJKCWS)
}

function get_IsShowPois() {
    return this.PHNAOV
}

function set_IsShowPois(n) {
    var t = n != this.PHNAOV;
    this.PHNAOV = n;
    t && this.DZWSWO()
}

function get_IsShowSatellites() {
    return this.ARWGKA
}

function set_IsShowSatellites(n) {
    var t = n != this.ARWGKA;
    this.ARWGKA = n;
    t && this.TDTSET()
}

function get_IsShowOwnBases() {
    return this.GUYMVQ
}

function set_IsShowOwnBases(n) {
    var t = n != this.GUYMVQ;
    this.GUYMVQ = n;
    t && this.MTVREF()
}

function get_IsShowOtherBases() {
    return this.KZICKW
}

function set_IsShowOtherBases(n) {
    var t = n != this.KZICKW;
    this.KZICKW = n;
    t && this.OGTCSC()
}

function get_IsShowAllianceBases() {
    return this.OFBHCO
}

function set_IsShowAllianceBases(n) {
    var t = n != this.OFBHCO;
    this.OFBHCO = n;
    t && this.OGTCSC()
}

function get_IsShowFriendlyBases() {
    return this.YCCQOK
}

function set_IsShowFriendlyBases(n) {
    var t = n != this.YCCQOK;
    this.YCCQOK = n;
    t && this.OGTCSC()
}

function get_IsShowEnemyBases() {
    return this.YMPPXH
}

function set_IsShowEnemyBases(n) {
    var t = n != this.YMPPXH;
    this.YMPPXH = n;
    t && this.OGTCSC()
}

function get_IsShowMarker() {
    return this.ZFQZSN
}

function set_IsShowMarker(n) {
    var t = n != this.ZFQZSN;
    this.ZFQZSN = n;
    t && this.TBODFL()
}

function get_IsSceneActive() {
    return this.AIUCXL
}

function set_IsSceneActive(n) {
    var t = n != this.AIUCXL;
    this.AIUCXL = n;
    t && this.IJPAEI()
}

function OnWorldSectorsChange() {
    var s, i, r, t, o;
    if (this.DZWSWO(), this.GKAJCI()) {
        var f = (new $I.UCRMVA).SLPWTI(),
            e = $I.CVRAYR.VAMLQD(),
            y = e.ONGTRQ().UQGPFX(),
            u = e.FMKUPK().UQGPFX(),
            c = e.UXQPUS().FISUYB(),
            l = c.d,
            n = {
                k: null,
                v: null
            };
        for (s in l)
            if (n.k = s, n.v = l[s], n.v.BDVFZC != y) {
                var p = n.v.NHLZYQ > 0,
                    h = u > 0 && p ? e.FMKUPK().MCCSDS(n.v.NHLZYQ) : $I.CZQHTV.None,
                    a = u > 0 && u == n.v.NHLZYQ,
                    v = u > 0 && (h == $I.CZQHTV.Friend || h == $I.CZQHTV.NAP),
                    i = u > 0 && h == $I.CZQHTV.Foe;
                if (this.JBQFHR() && a || this.RPACSO() && v || this.XWJWDW() && i || this.KMKNMG() && !a && !v && !i) {
                    this.NDLXYV.XOHVCR(n.k) ? this.NDLXYV.d[n.k].DNOUSX(n.v) : (t = (new $I.TKEAKJ).ICONFK(this, $I.CDNXVQ.WorldCityNotOwn, n.v), this.NDLXYV.GXVKTX(n.k, t));
                    continue
                }
                f.l.push(n.k)
            } t = this.NDLXYV.d;
        i = {
            k: null,
            v: null
        };
        for (r in t) i.k = r, i.v = t[r], f.l.indexOf(i.k) != -1 || c.XOHVCR(i.k) || f.l.push(i.k);
        for (r = f.l, o = 0; o < r.length; o++) t = r[o], this.NDLXYV.XOHVCR(t) && (this.NDLXYV.d[t].NSFOQM(), this.NDLXYV.XUDPAL(t))
    } else this.HENQMI(this.NDLXYV)
}

function get_CurrentCityId() {
    return this.LUKPLF
}

function get_ImageWidth() {
    return this.QAIGRY.DZSXHC()
}

function get_ImageHeight() {
    return this.QAIGRY.KUAIEC()
}

function get_ImageOffsetX() {
    return this.RTYPFY.ZZGDAN()
}

function get_ImageOffsetY() {
    return this.RTYPFY.HCXGMG()
}

function get_GridWidth() {
    return this.VVQVWC
}

function get_GridHeight() {
    return this.WPITOM
}

function get_MinXPosition() {
    return $I.PQDILF.JKMBTR + this.YEFVMW
}

function get_MaxXPosition() {
    return $I.PQDILF.ILZDUM
}

function get_MinYPosition() {
    return $I.PQDILF.JYSMBV + this.GHRWDP
}

function get_MaxYPosition() {
    return $I.PQDILF.HCQGWR
}

function UiUpdate(n) {
    var f = this.UTZPBI.d,
        o = {
            k: null,
            v: null
        },
        t, i, r, e, u, s;
    for (t in f) o.k = t, o.v = f[t], o.v.CXESLP(n);
    t = this.YPYITV.d;
    f = {
        k: null,
        v: null
    };
    for (i in t) f.k = i, f.v = t[i], f.v.CXESLP(n);
    this.MBZZIC != null && this.MBZZIC.CXESLP(n);
    i = this.FABDRL.d;
    t = {
        k: null,
        v: null
    };
    for (r in i) t.k = r, t.v = i[r], t.v.CXESLP(n);
    r = this.NDLXYV.d;
    i = {
        k: null,
        v: null
    };
    for (u in r) i.k = u, i.v = r[u], i.v.CXESLP(n);
    u = this.XHXWXO.d;
    r = {
        k: null,
        v: null
    };
    for (e in u) r.k = e, r.v = u[e], r.v.CXESLP(n);
    e = this.EJKCWS.d;
    u = {
        k: null,
        v: null
    };
    for (s in e) u.k = s, u.v = e[s], u.v.CXESLP(n)
}

function VisUpdate() {
    var r = (new Date).getTime(),
        u = $I.UQGIGO.XBYUSR().HYVOUU("vis/base/animations"),
        f, t, i, n, e;
    $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(this.GIYDVX());
    t = this.UTZPBI.d;
    f = {
        k: null,
        v: null
    };
    for (n in t) f.k = n, f.v = t[n], f.v.ETWFFN(r, u);
    n = this.YPYITV.d;
    t = {
        k: null,
        v: null
    };
    for (i in n) t.k = i, t.v = n[i], t.v.ETWFFN(r, u);
    i = this.XHXWXO.d;
    n = {
        k: null,
        v: null
    };
    for (e in i) n.k = e, n.v = i[e], n.v.ETWFFN(r, u);
    this.MBZZIC != null && this.MBZZIC.ETWFFN(r, u)
}

function GetObjectFromPosition(n, t) {
    var f = null,
        r = this.XHXWXO.d,
        e = {
            k: null,
            v: null
        },
        u, i, o;
    for (i in r) e.k = i, e.v = r[i], e.v.VASCWR(n, t) && (f = e.v);
    i = this.UTZPBI.d;
    r = {
        k: null,
        v: null
    };
    for (u in i) r.k = u, r.v = i[u], r.v.VASCWR(n, t) && (f = r.v);
    u = this.YPYITV.d;
    i = {
        k: null,
        v: null
    };
    for (o in u) i.k = o, i.v = u[o], i.v.VASCWR(n, t) && (f = i.v);
    return this.MBZZIC != null && this.MBZZIC.VASCWR(n, t) && (f = this.MBZZIC), f
}

function GetAllObjectsFromPosition(n, t) {
    var o = (new $I.UCRMVA).SLPWTI(),
        h = null,
        e = this.XHXWXO.d,
        c = {
            k: null,
            v: null
        },
        i, r, u, s, f, l;
    for (i in e) c.k = i, c.v = e[i], c.v.VASCWR(n, t) && o.l.push(c.v);
    i = this.UTZPBI.d;
    e = {
        k: null,
        v: null
    };
    for (r in i) e.k = r, e.v = i[r], e.v.VASCWR(n, t) && (h = e.v);
    r = this.YPYITV.d;
    i = {
        k: null,
        v: null
    };
    for (u in r) i.k = u, i.v = r[u], i.v.VASCWR(n, t) && (h = i.v);
    this.MBZZIC != null && this.MBZZIC.VASCWR(n, t) && (h = this.MBZZIC);
    u = this.EJKCWS.d;
    r = {
        k: null,
        v: null
    };
    for (f in u) r.k = f, r.v = u[f], r.v.VASCWR(n, t) && o.l.push(r.v);
    f = this.FABDRL.d;
    u = {
        k: null,
        v: null
    };
    for (s in f) u.k = s, u.v = f[s], u.v.VASCWR(n, t) && o.l.push(u.v);
    s = this.NDLXYV.d;
    f = {
        k: null,
        v: null
    };
    for (l in s) f.k = l, f.v = s[l], f.v.VASCWR(n, t) && o.l.push(f.v);
    return h != null && o.l.push(h), o
}

function GetCoordinatesFromMousePos(n, t) {
    var i = (new $I.KNHTEK).GSPBQH(-1, -1),
        f = (n - $I.PQDILF.TPRIVS) / this.LEGJLJ(),
        e = (t - $I.PQDILF.RHVHXA) / this.KOODTZ(),
        o = $I.CVRAYR.VAMLQD().TZZENG().BDVSJJ() * f,
        s = $I.CVRAYR.VAMLQD().TZZENG().XUXGOK() * e,
        r = Math.floor(o),
        u = Math.floor(s);
    return this.UXPZGT(r, u) && (i.BTKBFX(r), i.NKQMUE(u)), i
}

function CenterRegionCoordinates(n, t) {
    var i = n / $I.CVRAYR.VAMLQD().TZZENG().BDVSJJ(),
        r = t / $I.CVRAYR.VAMLQD().TZZENG().XUXGOK(),
        u = i * this.LEGJLJ() + $I.PQDILF.TPRIVS,
        f = r * this.KOODTZ() + $I.PQDILF.RHVHXA;
    $I.FWLFGN.prototype.LQOHQF.call(this, u - this.UJPRER() / (2 * this.UVURBD()), f - this.ULNTVQ() / (2 * this.UVURBD()))
}

function GetNPCLevelByCoord(n) {
    return this.EAWJUW(this.FBKFPU(n) / ($I.CVRAYR.VAMLQD().TZZENG().LEGJLJ() * .5))
}

function DistanceFromCenter(n) {
    return Math.sqrt(this.SEIRSV(n))
}

function DistanceSquaredFromCenter(n) {
    var r = Math.floor($I.CVRAYR.VAMLQD().TZZENG().LEGJLJ() / 2),
        u = Math.floor($I.CVRAYR.VAMLQD().TZZENG().KOODTZ() / 2),
        t = n.OFYSUK() - r,
        i = n.FQVDES() - u;
    return t * t + i * i
}

function OnHubChange() {
    this.PSRWAQ();
    this.GCVNZM()
}

function get_MinZoomFactor() {
    return this.XNVDVT.TFIAWQ()
}

function add_ChangeMouseCoordinates(n) {
    var t = {},
        i, r = this.CMWQMJ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.CMWQMJ, t.$r = $I.TSJVQL.JXWJWI($I.HNTWBN, u, i, t), this.CMWQMJ = t.a, t.$r); while (r != i)
}

function remove_ChangeMouseCoordinates(n) {
    var t = {},
        i, r = this.CMWQMJ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.CMWQMJ, t.$r = $I.TSJVQL.JXWJWI($I.HNTWBN, u, i, t), this.CMWQMJ = t.a, t.$r); while (r != i)
}