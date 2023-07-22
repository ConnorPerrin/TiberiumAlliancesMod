webfront prototypeend.phe.cnc.Util[15172 - 0]
function isEventTargetInputField(n) {
    return n.getTarget().classname && qx.Class.isSubClassOf(qx.Class.getByName(n.getTarget().classname), qx.Class.getByName(lt)) || n.getTarget().localName && (n.getTarget().localName == ui || n.getTarget().localName == rt)
}

function buildStringHtmlDirection(n) {
    return ht + n + w
}

function isChildElement(n, t) {
    for (var i = n.getContentElement().getDomElement(); i != null;) {
        if (qx.dom.Element.hasChild(t.getContentElement().getDomElement(), i)) return !0;
        i = i.parentNode
    }
    return !1
}

function checkResources(n) {
    var r = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(),
        i, t;
    if (n.get_Count) {
        for (i = n.get_Count(), t = 0; t < i; t++)
            if (r.GetResourceCount(n.get_Item(t).get_Type()) < n.get_Item(t).get_Count()) return !1
    } else
        for (i = n.length, t = 0; t < i; t++)
            if (r.GetResourceCount(n[t].t) < n[t].c) return !1;
    return !0
}

function sendAppRequest(n, i, r, u, f) {
    var s = document.location,
        c, o;
    c = s.protocol == pr ? st + n + v + i : s.protocol + e + s.host + l + n + v + i;
    o = new XMLHttpRequest;
    o.onreadystatechange = function() {
        o.readyState == 4 && f != null && (o.responseText == null || o.responseText == t ? f.call(u, null) : qx.bom.client.Device.getName() == dt ? f.call(u, null) : f.call(u, JSON.parse(o.responseText)))
    };
    o.open(h, c, !0);
    r != null ? o.send(JSON.stringify(r)) : o.send(hu)
}

function sendPost(n, t, i, r, u, f) {
    var s = n,
        a, o;
    return s == nr && typeof CNCLoginService == c && CNCLoginService.length > 0 && (a = document.location, s = a.protocol + e + a.host + l + CNCLoginService), s == ir && typeof CNCFarmService == c && CNCFarmService.length > 0 && (s = CNCFarmService), o = new qx.io.request.Xhr(s + ri + t, h), o.setRequestHeader(uf, k), o.addListener(ei, function() {
        u.call(r, o.getResponse())
    }, this), o.addListener(nf, function() {
        f.call(r, o)
    }, this), o.setRequestData(i), o.send(), o
}

function createHashCode(n) {
    var i, r, u;
    if (Array.prototype.reduce) return n.split(t).reduce(function(n, t) {
        return n = (n << 5) - n + t.charCodeAt(0), n & n
    }, 0);
    if (i = 0, n.length === 0) return i;
    for (r = 0; r < n.length; r++) u = n.charCodeAt(r), i = (i << 5) - i + u, i = i & i;
    return i
}

function getShortTimespanString(n, t, i, r) {
    r == null && (r = !1);
    var f = qx.core.Init.getApplication(),
        u = new qx.util.StringBuilder(1024);
    return n >= 60 ? n >= 3600 ? n >= 86400 && !i ? r ? u.add(f.tr(cu, Math.ceil(n / 86400))) : (u.add(Math.ceil(n / 86400)), t && u.add(f.tr(sr))) : r ? u.add(f.tr(kr, Math.ceil(n / 3600))) : (u.add(Math.ceil(n / 3600)), t && u.add(f.tr(g))) : r ? u.add(f.tr(wu, Math.ceil(n / 60))) : (u.add(Math.ceil(n / 60)), t && u.add(f.tr(ar))) : r ? u.add(f.tr(nt, Math.ceil(n))) : (u.add(Math.ceil(n)), t && u.add(f.tr(ni))), u.get()
}
ce, en_US supportedLocales, de_DE, fr_FR, it_IT, es_ES, pl_PL, pt_PT, ru_RU, tr_TR, nl_NL, pt_BR, uk_UA, sv_SE, sk_SK, ro_RO, nb_NO, hu_HU, fi_FI, da_DK, cs_CZ, ar_AE, id_IDfunction getSupportedLocale(n) {
    var i = null,
        t, u, f;
    if (n) {
        n = n.toLowerCase();
        var e = n.substr(0, 2),
            o = n.replace(ku, lr),
            r = webfrontend.phe.cnc.Util.supportedLocales;
        for (t = 0; t < r.length; t++)
            if (u = r[t], u.toLowerCase() == o) {
                i = u;
                break
            } if (i == null)
            for (t = 0; t < r.length; t++)
                if (u = r[t].substr(0, 2), f = u.toLowerCase(), f == e) {
                    i = r[t];
                    break
                }
    }
    return i == null && (i = y), i
}

function getTimespanString(n, t, r) {
    var e, o, f, h, u, c;
    return n = n || 0, t == null && (t = !1), r == null && (r = !1), n = Math.floor(n), e = n % 60, n = (n - e) / 60, o = n % 60, n = (n - o) / 60, f = n % 24, n = (n - f) / 24, h = n, u = new qx.util.StringBuilder(30), (h > 0 || r) && (c = qx.core.Init.getApplication(), u.add(h.toString(), c.tr(b), p), f < 10 && (f > 0 || t) && u.add(i)), (f > 0 || t) && u.add(f.toString(), s), o < 10 && u.add(i), u.add(o.toString(), s), e < 10 && u.add(i), u.add(e.toString()), u.get()
}

function formatTimePart(n, t) {
    for (var r = n.toString(); r.length < t;) r = i + r;
    return r
}

function getDateTimeString(t, i, f, e) {
    var l, y, h, c;
    i = i || !1;
    f = f || !1;
    e = e || !1;
    l = navigator.language || navigator.userLanguage;
    y = ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_LANGUAGE);
    y != null && y != pu && (l = y.replace(tt, gi));
    var g = webfrontend.phe.cnc.config.Config.getInstance().getTimeZone(),
        nt = ClientLib.Data.MainData.GetInstance().get_Time(),
        o = {
            hour: u,
            minute: u,
            second: u,
            hourCycle: parseInt(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_TIMEFORMAT)) === parseInt(ClientLib.Config.Main.ETimeFormat.Hours24) ? fi : et
        },
        s, w = new Date(Date.now()),
        v = new Date(w.getFullYear(), w.getMonth(), w.getDate(), 0, 0, 0, 0).getTime();
    switch (g) {
        case ClientLib.Config.Main.ETimeOffsetType.Local:
            s = nt.get_Diff();
            break;
        case ClientLib.Config.Main.ETimeOffsetType.Server:
            s = ClientLib.Data.MainData.GetInstance().get_Server().get_WorldBaseTimezoneOffset();
            o.timeZone = this.getTimeZoneFromOffset(s);
            break;
        case ClientLib.Config.Main.ETimeOffsetType.Custom:
            s = webfrontend.phe.cnc.config.Config.getInstance().getTimeZoneOffset();
            o.timeZone = this.getDaylightFreeTimezoneFromOffset(s)
    }
    if (h = t.getTime() + s, v += s, e) {
        o.year = n;
        o.month = n;
        o.day = n;
        try {
            c = new Intl.DateTimeFormat(l, o).format(t)
        } catch (ut) {
            o.timeZone = r;
            c = new Intl.DateTimeFormat(l, o).format(t)
        }
    } else {
        var a = eu,
            b = 864e5,
            k = v + b,
            it = v - b,
            rt = k + b,
            d = qx.core.Init.getApplication();
        f && h >= v && h < k ? a = d.tr(hi) : h >= it && h < v ? a = d.tr(bt) : h >= k && h < rt && (a = d.tr(vi));
        !i && a.length <= 0 && (o.year = n, o.month = n, o.day = n);
        try {
            c = new Intl.DateTimeFormat(l, o).format(t)
        } catch (ft) {
            o.timeZone = r;
            c = new Intl.DateTimeFormat(l, o).format(t)
        }
        a.length > 0 && (c = a + p + c)
    }
    return c
}

function getTimeZoneFromOffset(n) {
    switch (n / 36e5) {
        case 1:
            return yi;
        case 2:
            return vt;
        case 3:
            return tr;
        case 4:
            return iu;
        case 5:
            return ii;
        case 6:
            return oi;
        case 7:
            return ot;
        case 8:
            return uu;
        case 9:
            return tu;
        case 10:
            return su;
        case 11:
            return gr;
        case 12:
            return wi;
        case 13:
            return fr;
        case 14:
            return kt;
        case -1:
            return ci;
        case -2:
            return ut;
        case -3:
            return ai;
        case -4:
            return wt;
        case -5:
            return or;
        case -6:
            return nu;
        case -7:
            return wr;
        case -8:
            return ur;
        case -9:
            return gu;
        case -10:
            return vr;
        case -11:
            return a;
        case -12:
            return f;
        default:
            return r
    }
}

function getDaylightFreeTimezoneFromOffset(n) {
    switch (n / 36e5) {
        case 1:
            return rf;
        case 2:
            return gt;
        case 3:
            return at;
        case 4:
            return hr;
        case 5:
            return ki;
        case 6:
            return yu;
        case 7:
            return dr;
        case 8:
            return it;
        case 9:
            return du;
        case 10:
            return pi;
        case 11:
            return er;
        case 12:
            return yr;
        case 13:
            return au;
        case 14:
            return ou;
        case -1:
            return ff;
        case -2:
            return br;
        case -3:
            return di;
        case -4:
            return bi;
        case -5:
            return si;
        case -6:
            return pt;
        case -7:
            return ft;
        case -8:
            return li;
        case -9:
            return vu;
        case -10:
            return ru;
        case -11:
            return a;
        case -12:
            return f;
        default:
            return r
    }
}

function convertSpecialChars(n) {
    return n ? n.replace(/[<>]/g, function(n) {
        return n == ct ? lu : cr
    }) : n
}

function getReportSubject(n) {
    var t = webfrontend.phe.cnc.res.Main.getInstance(),
        i;
    return i = t.knownCityNames.hasOwnProperty(n.l) ? t.knownCityNames[n.l] : n.l, t.reports.hasOwnProperty(n.t) ? qx.lang.String.format(t.reports[n.t].sl, [n.p, i]) : qx.lang.String.format(yt, [n.t, n.p, i])
}

function attachNetEvent(n, t, i, r, u) {
    n[fu + t](webfrontend.phe.cnc.Util.createEventDelegate(i, r, u))
}

function detachNetEvent(n, t, i, r, u) {
    n[d + t](webfrontend.phe.cnc.Util.createEventDelegate(i, r, u))
}

function createDelegate(n, t) {
    var i = {};
    return i.o = n, i.f = t, i.Invoke = function() {
        return this.f.apply(this.o, arguments)
    }, i
}

function createEventDelegate(n, t, i) {
    var r = {};
    return r.i = [{
        o: t,
        f: i
    }], r[n.$I] = function() {
        for (var i, n = this.i.length - 1, t; n >= 0;) t = this.i[n], i = t.f.apply(t.o, arguments), this.i.length < n ? n = this.i.length - 1 : --n;
        return i
    }, r
}

function createMethodWrapper(n, t) {
    return function() {
        return t.apply(n, arguments)
    }
}

function getHorizontalHairLine() {
    return (new qx.ui.core.Widget).set({
        backgroundColor: o,
        height: 1
    })
}

function getVerticalHairLine() {
    return (new qx.ui.core.Widget).set({
        backgroundColor: o,
        width: 1
    })
}

function sortedSearch(n, t, i, r) {
    if (!n || !t || (i === undefined && (i = 0, r = n.length), i >= r)) return -1;
    var u = parseInt((i + r) / 2);
    return n[u] == t ? u : n[u] > t ? webfrontend.phe.cnc.Util.sortedSearch(n, t, i, u) : webfrontend.phe.cnc.Util.sortedSearch(n, t, u + 1, r)
}

function sortAlphaNumeric(n, i) {
    for (var e, f, r = 0; e = n[r]; ++r) {
        n[r] = [];
        for (var c = 0, o = -1, s = 0, u, h; u = (h = e.charAt(c++)).charCodeAt(0);) f = u == 46 || u >= 48 && u <= 57, f !== s && (n[r][++o] = t, s = f), n[r][o] += h
    }
    for (n.sort(function(n, t) {
            for (var r, u, e, o, f = 0;
                (r = n[f]) && (u = t[f]); ++f)
                if (i && (r = r.toLowerCase(), u = u.toLowerCase()), r !== u) return e = Number(r), o = Number(u), e == r && o == u ? e - o : r > u ? 1 : -1;
            return n.length - t.length
        }), r = 0; r < n.length; ++r) n[r] = n[r].join(t)
}

function compareAlphaNumeric(n, i) {
    function s(n) {
        for (var r = [], s = 0, f = -1, e = 0, i, o, u; i = (o = n.charAt(s++)).charCodeAt(0);) u = i == 46 || i >= 48 && i <= 57, u !== e && (r[++f] = t, e = u), r[f] += o;
        return r
    }
    for (var e, o, u = s(n), f = s(i), r = 0; u[r] && f[r]; r++)
        if (u[r] !== f[r]) return e = Number(u[r]), o = Number(f[r]), e == u[r] && o == f[r] ? e - o : u[r] > f[r] ? 1 : -1;
    return u.length - f.length
}

function shouldShowHint(n) {
    if (!webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SHOWHINTS)) return !1;
    var t = ClientLib.Config.Main.CONFIG_HINTS_BATCH00,
        i = parseInt(ClientLib.Config.Main.GetInstance().GetConfig(t));
    return (i & 1 << n) == 0
}

function saveHintShown(n) {
    var i = ClientLib.Config.Main.CONFIG_HINTS_BATCH00,
        t = parseInt(ClientLib.Config.Main.GetInstance().GetConfig(i));
    (t & 1 << n) == 0 && (t |= 1 << n, ClientLib.Config.Main.GetInstance().SetConfig(i, t), ClientLib.Config.Main.GetInstance().SaveToDB())
}

function resetHints() {
    var n = ClientLib.Config.Main.CONFIG_HINTS_BATCH00;
    ClientLib.Config.Main.GetInstance().SetConfig(n, 0);
    ClientLib.Config.Main.GetInstance().SaveToDB()
}

function openOfferWall() {
    if (typeof OfferwallURL != rr && OfferwallURL.length > 0) {
        var n = qx.core.Init.getApplication();
        n.showExternal(OfferwallURL)
    }
}

function cityHasItemRewards(n) {
    var i, t;
    return n ? (i = ClientLib.Data.MainData.GetInstance().get_Player(), i && (t = i.get_ItemCamps(), t && t.c > 0 && t.d.hasOwnProperty(n))) ? !0 : !1 : !1
}

function getBoostsByScore(n, t) {
    switch (t) {
        case ClientLib.Data.Ranking.ERankingType.BonusTiberium:
            t = ClientLib.Base.EPOIType.TiberiumBonus;
            break;
        case ClientLib.Data.Ranking.ERankingType.BonusCrystal:
            t = ClientLib.Base.EPOIType.CrystalBonus;
            break;
        case ClientLib.Data.Ranking.ERankingType.BonusPower:
            t = ClientLib.Base.EPOIType.PowerBonus;
            break;
        case ClientLib.Data.Ranking.ERankingType.BonusInfantry:
            t = ClientLib.Base.EPOIType.InfanteryBonus;
            break;
        case ClientLib.Data.Ranking.ERankingType.BonusVehicles:
            t = ClientLib.Base.EPOIType.VehicleBonus;
            break;
        case ClientLib.Data.Ranking.ERankingType.BonusAircraft:
            t = ClientLib.Base.EPOIType.AirBonus;
            break;
        case ClientLib.Data.Ranking.ERankingType.BonusDefense:
            t = ClientLib.Base.EPOIType.DefenseBonus;
            break;
        default:
            return 0
    }
    return ClientLib.Base.PointOfInterestTypes.GetBonusByType(t, n, ClientLib.Data.MainData.GetInstance().get_Server().get_POIGlobalBonusFactor())
}

function getBoostsByRanking(n) {
    return ClientLib.Base.PointOfInterestTypes.GetBoostModifierByRank(n)
}

function getTotalBoostsByScoreByRanking(n, t, i) {
    switch (t) {
        case ClientLib.Data.Ranking.ERankingType.BonusTiberium:
            t = ClientLib.Base.EPOIType.TiberiumBonus;
            break;
        case ClientLib.Data.Ranking.ERankingType.BonusCrystal:
            t = ClientLib.Base.EPOIType.CrystalBonus;
            break;
        case ClientLib.Data.Ranking.ERankingType.BonusPower:
            t = ClientLib.Base.EPOIType.PowerBonus;
            break;
        case ClientLib.Data.Ranking.ERankingType.BonusInfantry:
            t = ClientLib.Base.EPOIType.InfanteryBonus;
            break;
        case ClientLib.Data.Ranking.ERankingType.BonusVehicles:
            t = ClientLib.Base.EPOIType.VehicleBonus;
            break;
        case ClientLib.Data.Ranking.ERankingType.BonusAircraft:
            t = ClientLib.Base.EPOIType.AirBonus;
            break;
        case ClientLib.Data.Ranking.ERankingType.BonusDefense:
            t = ClientLib.Base.EPOIType.DefenseBonus;
            break;
        default:
            return 0
    }
    return ClientLib.Base.PointOfInterestTypes.GetTotalBonusByType(t, i, n, ClientLib.Data.MainData.GetInstance().get_Server().get_POIGlobalBonusFactor())
}

function isWidgetVisible(n) {
    if (n) {
        var t = n.getContentLocation(bu);
        return !t || t.left <= 0 && t.right <= 0 && t.top <= 0 && t.bottom <= 0 ? !1 : !0
    }
    return !1
}

function getConfigBoolean(n) {
    var t = ClientLib.Config.Main.GetInstance().GetConfig(n);
    return Boolean(t) && Number(t) != 0
}

function getDefaultConfigBoolean(n) {
    var t = ClientLib.Config.Main.GetInstance().GetDefaultConfig(n);
    return Boolean(t) && Number(t) != 0
}

function sortmissiontasksbypriority(n, t) {
    return n.pr - t.pr
}

function getTaskTypeSortedTaskIdArray(n) {
    var u = ClientLib.Data.MainData.GetInstance().get_Missions().get_TaskTypeOrder(),
        t = new Array(n.c),
        i = 0;
    for (var r in n.d) t[i++] = {
        id: r,
        pr: n.d[r].get_Priority()
    };
    for (t.sort(webfrontend.phe.cnc.Util.sortmissiontasksbypriority), i = 0; i < t.length; ++i) t[i] = t[i].id;
    return t
}

function getMissionLine(n) {
    var r = ClientLib.Res.ResMain.GetInstance().GetMissionLines(),
        i, t;
    for (i in r.d)
        if (t = r.d[i].l, t.length && typeof t[0] == ti && (n = String(n)), t.indexOf(n) >= 0) return parseInt(i, 10);
    return 0
}

function getEnumNameByValue(n, t) {
    var i = tf;
    for (var r in n)
        if (n[r] == t) {
            i = String(r);
            break
        } return i
}

function splitString(n, t) {
    return !!n && !!t ? n.split(t) : null
}