function IsBuildingLimitReached() {
    return this.TUPMYZ - this.WQFMSB < 1
}

function IsBarrackPlaced() {
    return this.YYLAHD != null
}

function IsFactoryPlaced() {
    return this.GQWLTC != null
}

function IsAirportPlaced() {
    return this.CZFIGJ != null
}

function GetBarrackHitpointsRatio() {
    return this.YYLAHD == null ? 0 : this.YYLAHD.DGXVOW()
}

function GetFactoryHitpointsRatio() {
    return this.GQWLTC == null ? 0 : this.GQWLTC.DGXVOW()
}

function GetAirportHitpointsRatio() {
    return this.CZFIGJ == null ? 0 : this.CZFIGJ.DGXVOW()
}

function get_ValidPlacementBuildingTypeFlags() {
    return this.UECDXL
}

function set_ValidPlacementBuildingTypeFlags(n) {
    this.UECDXL = n;
    this.WBRHFB.BALFDU();
    this.WBRHFB.ROPWEN();
    this.WBRHFB.UVFOIV(7)
}

function ResetValidPlacementBuildingTypeFlags() {
    this.GAJELF(-1)
}

function GetUniqueBuildingByTechName(n) {
    var t = this.HBDEOX(n);
    return t.l.length > 0 ? t.l[0] : null
}

function GetAllBuildingsByTechName(n) {
    var t = (new $I.UCRMVA).SLPWTI(),
        r = $I.YZBSQQ.DGTWTH(n, this.WBRHFB.VOPFYX());
    for (var i in {
            d: this.CMOMXM
        }.d.d) this.CMOMXM.d[i].JSHHHZ() == r && t.l.push(this.CMOMXM.d[i]);
    return t
}

function GetBuildingByMDBId(n) {
    for (var t in {
            d: this.CMOMXM
        }.d.d)
        if (this.CMOMXM.d[t].JSHHHZ() == n) return this.CMOMXM.d[t];
    return null
}

function GetBuildingById(n) {
    for (var t in {
            d: this.CMOMXM
        }.d.d)
        if (this.CMOMXM.d[t].UQGPFX() == n) return this.CMOMXM.d[t];
    return null
}

function GetFullRepairTime(n) {
    var u = 0,
        o, t, f, i, r, e;
    for (o in {
            d: this.CMOMXM
        }.d.d)
        if (t = this.CMOMXM.d[o], t.YBCOGL() != null)
            for (f = !0, i = t.EEZXDH(), n && t.EOHROC() && !t.VLRLUA() && (i = $I.XOJOCY.JZALQW(t.REBAFD() + 1, t.YBCOGL())), r = 0; r < i.length && f; r++) e = i[r], e.Type == 7 && (u += e.Count, f = !1);
    return n ? $I.DUXUSX.LYWVDH($I.OATHMF.RepairChargeBase, u, 1, this.WBRHFB.UEFYNJ().VURHLW(), this.WBRHFB.UEFYNJ().XIRNIW(), this.WBRHFB.UEFYNJ().PIWSTV(), this.WBRHFB.UEFYNJ().PXFCFC()) : $I.DUXUSX.LYWVDH($I.OATHMF.RepairChargeBase, u, 1, this.WBRHFB.UEFYNJ().CANDGA(), this.WBRHFB.UEFYNJ().QXLFNH(), this.WBRHFB.UEFYNJ().DDCMYG(), this.WBRHFB.UEFYNJ().QSRSTB())
}

function GetDemolishResourceRefund(n) {
    var r = {},
        i, y, h, o, f, u, c, s, e, l, t, a, v;
    if (n == null || n.LWFCSR() == null || n.REBAFD() <= 0) return null;
    for (i = (new $I.UDBZSB).SLPWTI(), y = $I.CVRAYR.VAMLQD().TZZENG().JGHEPC(), h = n.REBAFD(); h > $I.CVRAYR.VAMLQD().TZZENG().TBUFTS(); h--)
        for (o = $I.XOJOCY.LWBPHO(h, n.LWFCSR()), f = 0; f < o.length; f++) u = o[f].Type, o[f].Type > 0 && (u == $I.OATHMF.Tiberium || u == $I.OATHMF.Crystal || u == $I.OATHMF.Gold || u == $I.OATHMF.Power) && (c = 0, (r.$r = i.ZOXRAI(u, r), c = r.b, r.$r) || (c = 0), i.UHNVSA(u, c + Math.floor(o[f].Count)));
    e = i.d;
    s = {
        k: null,
        v: null
    };
    for (t in e) s.k = t, s.v = e[t], i.UHNVSA(s.k, Math.floor(Math.floor(i.d[s.k] * y)));
    if (e = n.OLUXEN(), e != null) {
        l = e.d;
        t = {
            k: null,
            v: null
        };
        for (a in l) t.k = a, t.v = l[a], (t.k == $I.OATHMF.Tiberium || t.k == $I.OATHMF.Crystal) && (v = 0, (r.$r = i.ZOXRAI(t.k, r), v = r.b, r.$r) && i.UHNVSA(t.k, v - t.v))
    }
    return i
}

function get_HasCollectableBuildings() {
    for (var n in {
            d: this.CMOMXM
        }.d.d)
        if (this.CMOMXM.d[n].JEIKLM() > 0) return !0;
    return !1
}

function get_HasDamagedBuilding() {
    for (var n in {
            d: this.CMOMXM
        }.d.d)
        if (this.CMOMXM.d[n].SEFLBZ()) return !0;
    return !1
}