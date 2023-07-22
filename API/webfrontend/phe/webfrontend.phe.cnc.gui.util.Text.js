function cleanString(n) {
    return n && typeof n == lt && n.length > 0 ? qx.lang.String.stripTags(qx.lang.String.stripScripts(n)) : n
}

function getSystemMsgLookup() {
    var n = qx.core.Init.getApplication(),
        t = {};
    return t[1] = {
        s: n.tr(b),
        b: n.tr(er)
    }, t[2] = {
        s: n.tr(wt),
        b: n.tr(c)
    }, t[3] = {
        s: n.tr(ft),
        b: n.tr(ei)
    }, t[4] = {
        s: n.tr(nu),
        b: n.tr(l)
    }, t[5] = {
        s: n.tr(gr),
        b: n.tr(ci)
    }, t[6] = {
        s: n.tr(or),
        b: n.tr(ai)
    }, t
}

function getResourceFieldsTextByType(n) {
    var i = qx.core.Init.getApplication();
    switch (n) {
        case ClientLib.Data.ECityTerrainType.TIBERIUM:
            return i.tr(vr);
        case ClientLib.Data.ECityTerrainType.CRYSTAL:
            return i.tr(nr)
    }
    return t
}

function getSupplyGlobalProductionText(n, i) {
    var r = qx.core.Init.getApplication(),
        u = new qx.util.StringBuilder(1024),
        f = t,
        e = t;
    return f = Math.floor(n * 10) / 10, e = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(i, !0), u.add(e, r.tr(gt), yt, w, f, r.tr(ur), pt), u.get()
}

function getArmySetupTextByType(n, i) {
    var r = qx.core.Init.getApplication();
    switch (n) {
        case ClientLib.Vis.ArmySetup.ArmySetupTextType.ESetupTitle:
            return r.tr(ii, i);
        case ClientLib.Vis.ArmySetup.ArmySetupTextType.EWave1:
            return r.tr(ct);
        case ClientLib.Vis.ArmySetup.ArmySetupTextType.EWave2:
            return r.tr(ti);
        case ClientLib.Vis.ArmySetup.ArmySetupTextType.EWave3:
            return r.tr(ir);
        case ClientLib.Vis.ArmySetup.ArmySetupTextType.EWave4:
            return r.tr(gi);
        case ClientLib.Vis.ArmySetup.ArmySetupTextType.EAttackTitle:
            return r.tr(a, i)
    }
    return t
}

function getBuildingModeTextByType(n, i) {
    var r = qx.core.Init.getApplication(),
        u = ClientLib.Data.MainData.GetInstance().get_Time();
    switch (n) {
        case ClientLib.Vis.City.CityBuilding.ETextType.Relocate:
            return r.tr(y);
        case ClientLib.Vis.City.CityBuilding.ETextType.CollectIn:
            return r.tr(yr, webfrontend.phe.cnc.Util.getTimespanString(u.GetTimeSpan(i), !0));
        case ClientLib.Vis.City.CityBuilding.ETextType.CollectFullIn:
            return r.tr(ot, webfrontend.phe.cnc.Util.getTimespanString(u.GetTimeSpan(i), !0));
        case ClientLib.Vis.City.CityBuilding.ETextType.CollectFull:
            return r.tr(li);
        case ClientLib.Vis.City.CityBuilding.ETextType.ConstructionSite:
            return r.tr(sr);
        case ClientLib.Vis.City.CityBuilding.ETextType.SellRefund:
            return r.tr(hr);
        case ClientLib.Vis.City.CityBuilding.ETextType.FullHpNeededToUpgrade:
            return r.tr(p);
        case ClientLib.Vis.City.CityBuilding.ETextType.CantSell:
            return r.tr(wi)
    }
    return t
}

function getNameWithLevelText(n, t) {
    var r = qx.core.Init.getApplication(),
        i = new qx.util.StringBuilder(1024);
    return i.add(n, yi, r.tr(br), o, t, ri), i.get()
}

function parseMailToTokens(n) {
    var e, u, f;
    if (!n || n.length <= 0) return [];
    for (var s = ClientLib.Data.Mail.TAGSTART_ITEM, v = ClientLib.Data.Mail.TAGSTOP_ITEM, h = ClientLib.Data.Mail.TAGSTART_SEND, y = ClientLib.Data.Mail.TAGSTOP_SEND, c = ClientLib.Data.Mail.TAGSTART_DATE, p = ClientLib.Data.Mail.TAGSTOP_DATE, l = ClientLib.Data.Mail.TAGSTART_TEXT, w = ClientLib.Data.Mail.TAGSTOP_TEXT, a = [], o = [], i = 0, r = 0;;) {
        if (i = n.indexOf(s, r), i < 0) break;
        if (r = n.indexOf(v, i), r < 0) break;
        o.push(n.substring(i + s.length, r))
    }
    for (e = 0; e < o.length; ++e) u = o[e], f = {
        text: t
    }, i = 0, r = 0, i = u.indexOf(h, r), i >= 0 && (r = u.indexOf(y, i), r > i && (f.sender = webfrontend.phe.cnc.gui.util.Text.cleanString(u.substring(i + h.length, r)))), i = 0, r = 0, i = u.indexOf(c, r), i >= 0 && (r = u.indexOf(p, i), r > i && (f.date = Math.max(0, parseInt(u.substring(i + c.length, r), 10)))), i = 0, r = 0, i = u.indexOf(l, r), i >= 0 && (r = u.indexOf(w, i), r > i && (f.text = webfrontend.phe.cnc.gui.util.Text.cleanString(u.substring(i + l.length, r)))), a.push(f);
    return a
}

function getPoiInfosByType(n) {
    var i, r, u, t = qx.core.Init.getApplication();
    switch (n) {
        case ClientLib.Base.EPOIType.TiberiumBonus:
            r = t.tr(s);
            u = t.tr(s);
            i = t.tr(vt);
            break;
        case ClientLib.Base.EPOIType.CrystalBonus:
            r = t.tr(h);
            u = t.tr(h);
            i = t.tr(ru);
            break;
        case ClientLib.Base.EPOIType.PowerBonus:
            r = t.tr(e);
            u = t.tr(e);
            i = t.tr(di);
            break;
        case ClientLib.Base.EPOIType.InfanteryBonus:
            r = t.tr(f);
            i = t.tr(d);
            u = t.tr(wr);
            break;
        case ClientLib.Base.EPOIType.VehicleBonus:
            r = t.tr(f);
            i = t.tr(tu);
            u = t.tr(pi);
            break;
        case ClientLib.Base.EPOIType.AirBonus:
            r = t.tr(f);
            i = t.tr(ui);
            u = t.tr(vi);
            break;
        case ClientLib.Base.EPOIType.DefenseBonus:
            r = t.tr(lr);
            i = t.tr(tr);
            u = t.tr(oi)
    }
    return {
        name: i,
        resource: r,
        type: u
    }
}

function GetRafSendEmailErrorText(n) {
    var t = null,
        r = qx.core.Init.getApplication();
    switch (n) {
        case ClientLib.Data.ERafSendEmailResult.SEND_SUCCESS:
            t = r.tr(nt);
            break;
        case ClientLib.Data.ERafSendEmailResult.SEND_ERROR_ADDRESS_INVALID:
            t = r.tr(rt);
            break;
        case ClientLib.Data.ERafSendEmailResult.SEND_ERROR_MAIL_SYSTEM_ERROR:
            t = r.tr(i, n);
            break;
        case ClientLib.Data.ERafSendEmailResult.SEND_ERROR_MAIL_ALREADY_SENT:
            t = r.tr(k);
            break;
        case ClientLib.Data.ERafSendEmailResult.SEND_ERROR_INTERNAL_ERROR:
            t = r.tr(i, n);
            break;
        case ClientLib.Data.ERafSendEmailResult.SEND_ERROR_NUCLEUS_ERROR:
            t = r.tr(i, n);
            break;
        case ClientLib.Data.ERafSendEmailResult.SEND_ERROR_TOO_MANY_TOO_FAST:
            break;
        case ClientLib.Data.ERafSendEmailResult.SEND_ERROR_CANNOT_SEND_TO_SELF:
            t = r.tr(st);
            break;
        case ClientLib.Data.ERafSendEmailResult.SEND_ERROR_RECIPIENT_ALREADY_PLAYING:
            t = r.tr(v);
            break;
        default:
            t = r.tr(i, n)
    }
    return t
}

function getArmorTypeToText(n) {
    var t = null,
        i = qx.core.Init.getApplication();
    switch (n) {
        case ClientLib.Base.EArmorType.LightArmorInfantry:
            t = i.tr(et);
            break;
        case ClientLib.Base.EArmorType.HeavyArmorVehicles:
            t = i.tr(ht);
            break;
        case ClientLib.Base.EArmorType.MediumArmorAir:
            t = i.tr(fi);
            break;
        case ClientLib.Base.EArmorType.Structure:
            t = i.tr(cr);
            break;
        case ClientLib.Base.EArmorType.StructureBase:
            t = i.tr(rr);
            break;
        case ClientLib.Base.EArmorType.Obstacle:
            t = i.tr(bt)
    }
    return t
}

function getControlHubName(n, i) {
    var r = qx.core.Init.getApplication();
    if (i) switch (n.get_Type()) {
        case ClientLib.Data.EndGame.EHubType.Center:
            return r.tr(ar);
        case ClientLib.Data.EndGame.EHubType.Control:
            if (ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer()) return r.tr(si);
            switch (n.get_Index()) {
                case 0:
                    return r.tr(fr);
                case 1:
                    return r.tr(it);
                case 2:
                    return r.tr(at);
                case 3:
                    return r.tr(kt);
                case 4:
                    return r.tr(ki);
                case 5:
                    return r.tr(g);
                case 6:
                    return r.tr(dr)
            }
    } else switch (n.get_Type()) {
        case ClientLib.Data.EndGame.EHubType.Center:
            return r.tr(dt);
        case ClientLib.Data.EndGame.EHubType.Control:
            if (ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer()) return r.tr(kr);
            switch (n.get_Index()) {
                case 0:
                    return r.tr(tt);
                case 1:
                    return r.tr(pr);
                case 2:
                    return r.tr(iu);
                case 3:
                    return r.tr(bi);
                case 4:
                    return r.tr(ni);
                case 5:
                    return r.tr(hi);
                case 6:
                    return r.tr(ut)
            }
    }
    return t
} [object CurrencyFormattingObject]
function getFormattedCurrencyString(n, t, i) {
    var u = (new qx.util.format.NumberFormat).set({
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        }),
        r;
    return webfrontend.phe.cnc.gui.util.Text.CurrencyFormatting.hasOwnProperty(n) ? (r = webfrontend.phe.cnc.gui.util.Text.CurrencyFormatting[n], r.maximumFractionDigits > -1 && (u.setMaximumFractionDigits(r.maximumFractionDigits), u.setMinimumFractionDigits(r.maximumFractionDigits)), qx.lang.String.format(r.format, [u.format(i), t])) : u.format(i) + o + t
}