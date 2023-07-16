function ProductIdFromItemById(n) {
    var t = {},
        i;
    return (t.$r = this.KKJYXF.ZOXRAI(n, t), i = t.b, t.$r) ? i.i : ""
}

function GetProductsByCategory(n) {
    var t, u, f, o, r, i, e;
    if (this.ZQRSSR != null) {
        t = "";
        switch (n) {
            case $I.IYHKWK.ESC_Consumables:
                t = "CNCA_CF_Consumables";
                break;
            case $I.IYHKWK.ESC_Bundles:
                t = "CNCA_CF_Bundles";
                break;
            case $I.IYHKWK.ESC_LockboxFunding:
                t = "CNCA_Lockbox_CF_Funding";
                break;
            case $I.IYHKWK.ESC_Popular:
                t = "CNCA_CF_Popular";
                break;
            case $I.IYHKWK.ESC_IOSFunding:
                t = "CNCA_iOS_Funding";
                break;
            case $I.IYHKWK.ESC_GPlayFunding:
                t = "CNCA_GPlay_Funding"
        }
        if (n == $I.IYHKWK.ESC_Bundles) {
            for (u = (new $I.UCRMVA).SLPWTI(), f = 0; f < this.ZQRSSR.length; f++)
                if (this.ZQRSSR[f].n == t) {
                    for (r = this.ZQRSSR[f].p, i = 0; i < r.length; i++) o = r[i], (o.t == 0 || o.t == $I.CVRAYR.VAMLQD().ONGTRQ().APCTQO()) && u.l.push(o);
                    for (r = $I.UDAQKL.DNVCCU($I.FGHUCG, u.l.length), i = 0; i < u.l.length; i++) r[i] = u.l[i];
                    return r
                }
        } else
            for (e = 0; e < this.ZQRSSR.length; e++)
                if (this.ZQRSSR[e].n == t) return this.ZQRSSR[e].p
    }
    return null
}

function GetProductsContainingItemId(n) {
    for (var f, t, o, e, i, r = (new $I.UDBZSB).SLPWTI(), u = 0; this.ZQRSSR != null && u < this.ZQRSSR.length; u++)
        for (f = this.ZQRSSR[u].p, t = 0; t < f.length; t++)
            for (o = f[t].i, e = 0; e < o.length; e++)
                if (o[e].i == n) {
                    i = this.DSRTAY(this.ZQRSSR[u].n);
                    i == $I.IYHKWK.ESC_Error || r.XOHVCR(i) || r.UHNVSA(i, (new $I.UCRMVA).SLPWTI());
                    r.d[i].l.push(f[t]);
                    break
                } return r
}

function PriceFromItemById(n) {
    var t = {},
        i;
    return (t.$r = this.KKJYXF.ZOXRAI(n, t), i = t.b, t.$r) ? i.p : -1
}

function GetBundlePriceById(n) {
    for (var t, i, r = 0, f = this.GIRYDX($I.IYHKWK.ESC_Bundles), u = 0; u < f.length; u++)
        if (t = f[u], t.p.length > 0 && t.p[0].i == n) {
            for (i = 0; i < t.p.length; i++) r += t.p[i].p;
            return r
        } return r
}

function GetPriceFromProduct(n) {
    for (var r = 0, i = n, t = 0; t < i.p.length; t++) r += i.p[t].p * i.p[t].q;
    return r
}

function GetBundleInfo(n) {
    for (var f, t, i, u = (new $I.UDBZSB).SLPWTI(), s = (new $I.UCRMVA).SLPWTI(), e = !1, o = !1, h = 0, c = 0, l = n.i, r = 0; r < l.length; r++) {
        if (f = l[r], t = $I.BIVQLU.MYRKXT(f.i), t != null) {
            s.l.push(t);
            switch (t.c) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 7:
                    e = !0;
                    break;
                case 5:
                case 6:
                case 8:
                case 9:
                    o = !0
            }
            u.XOHVCR(t.c) || u.GXVKTX(t.c, $I.UDAQKL.DNVCCU($I.JIVPAX, 3));
            u.d[t.c][0] += t.v;
            u.d[t.c][1] += t.d;
            u.d[t.c][2] += f.q;
            c += t.m
        }
        h += this.MAMGEI(f.i) * f.q
    }
    return (r = (i = (new $I.TOSXSD).SLPWTI(), i.Resources = u, i.Items = s, i.Price = n.p[0].p, i.OldPrice = h, i.SupplyPointsCosts = c, i.SpecialOfferSaving = n.os, i.ExpirationDate = n.e, i.PromotionEndDate = n.pe, i.Type = $I.DXUCDR.None, i), e && !o) ? (r.Type = $I.DXUCDR.Resource, r) : (!e && o && (r.Type = $I.DXUCDR.Capacity), r)
}

function GetItemFromSingleItemProduct(n) {
    var t = n;
    return t.i != null && t.i.length == 1 && t.p.length == 1 && t.i[0].q == 1 ? $I.BIVQLU.MYRKXT(t.i[0].i) : null
}

function GetCustomizationColorTagFromProduct(n) {
    var t = n;
    if (t.cct != null) switch (t.cct.toLowerCase()) {
        case "bestvalue":
            return $I.HYJNLP.BestValue;
        case "topseller":
            return $I.HYJNLP.TopSeller;
        case "timelimited":
            return $I.HYJNLP.Timelimited;
        case "specialoffer":
            return $I.HYJNLP.SpecialOffer
    }
    return $I.HYJNLP.None
}

function IsItemPopular(n) {
    var f, i, r, e, u, t;
    if (this.ZQRSSR != null)
        for (f = this.ZQRSSR, i = 0; i < f.length; i++)
            if (r = f[i], this.DSRTAY(r.n) == $I.IYHKWK.ESC_Popular && r.p != null)
                for (e = r.p, u = 0; u < e.length; u++)
                    if (t = e[u], t.i != null && t.i.length == 1 && t.i[0].q == 1 && t.i[0].i == n) return !0;
    return !1
}

function add_OnShopCatalogChange(n) {
    var t = {},
        i, r = this.GKIYUT,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.GKIYUT, t.$r = $I.TSJVQL.JXWJWI($I.ZIVNMZ, u, i, t), this.GKIYUT = t.a, t.$r); while (r != i)
}

function remove_OnShopCatalogChange(n) {
    var t = {},
        i, r = this.GKIYUT,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.GKIYUT, t.$r = $I.TSJVQL.JXWJWI($I.ZIVNMZ, u, i, t), this.GKIYUT = t.a, t.$r); while (r != i)
}