function GetCategoryName(n) {
    var i = ir,
        t = ClientLib.Res.ResMain.GetInstance().GetGamedata();
    return t.hasOwnProperty(si) && t.NotificationCategories[n] != null && (i = t.NotificationCategories[n].dn), i
}

function GetNotificationName(n, t) {
    var r = ClientLib.Res.ResMain.GetInstance().GetGamedata(),
        u = e;
    return r.hasOwnProperty(i) && r.Notifications[n] != null && (u = t ? r.Notifications[n].pdn : r.Notifications[n].dn), u
}

function GetNotificationMsg(n, t) {
    var r = ClientLib.Res.ResMain.GetInstance().GetGamedata(),
        u = e;
    return r.hasOwnProperty(i) && r.Notifications[n] != null && (u = t ? r.Notifications[n].pmsg : r.Notifications[n].msg), u
}

function GetNotificationShortMsg(n, t) {
    var r = ClientLib.Res.ResMain.GetInstance().GetGamedata(),
        u = e;
    return r.hasOwnProperty(i) && r.Notifications[n] != null && (u = t ? r.Notifications[n].psmsg : r.Notifications[n].smsg), u
}

function shouldDisplayInTicker(n) {
    var t = ClientLib.Res.ResMain.GetInstance().GetGamedata(),
        r = !1;
    return t.hasOwnProperty(i) && t.Notifications[n] != null && (r = t.Notifications[n].dt), r
}

function shouldDisplayInSideBar(n) {
    var r = ClientLib.Res.ResMain.GetInstance().GetGamedata(),
        t = !1;
    return r.hasOwnProperty(i) && r.Notifications[n] != null && (t = r.Notifications[n].ds), t && ClientLib.Data.MainData.GetInstance().get_Notifications().IsRaidNotification(n) && (t = webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_NOTIFICATIONRAID)), t && ClientLib.Data.MainData.GetInstance().get_Server().get_ForgottenAttacksEnabled() && ClientLib.Data.MainData.GetInstance().get_Notifications().IsIncomingNPCAttack(n) && (t = webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_NOTIFICATIONNPCATTACKS)), t
}

function shouldDisplayInCategoryView(n) {
    var t = ClientLib.Res.ResMain.GetInstance().GetGamedata(),
        r = !1;
    return t.hasOwnProperty(i) && t.Notifications[n] != null && (r = t.Notifications[n].dc), r
}

function createCommentEntry(n, t, i, r) {
    var u = new qx.ui.container.Composite(new qx.ui.layout.VBox(1)).set({
            padding: 5
        }),
        e = new qx.ui.container.Composite(new qx.ui.layout.HBox).set({
            maxWidth: 355,
            minWidth: 355
        }),
        c = d + webfrontend.gui.util.BBCode.convertBBCode(t) + s,
        l = new webfrontend.gui.widgets.PlayerLabel(i).set({
            textColor: di,
            font: lt,
            width: 130,
            rich: !1
        }),
        a = new webfrontend.gui.widgets.SelectableLabel(c).set({
            textColor: h,
            font: p,
            paddingLeft: 5,
            maxWidth: 227,
            wrap: !0,
            paddingRight: 5
        }),
        o;
    return e.add(l), e.add(a), o = new qx.ui.basic.Label(webfrontend.phe.cnc.Util.getDateTimeString(r)).set({
        textColor: f,
        font: p
    }), u.add(e), u.add(o), u
}

function createDefaultNotification(t, i, r, e, s) {
    var a = qx.core.Init.getApplication(),
        b = new qx.ui.container.Composite(new qx.ui.layout.Canvas),
        v = new qx.ui.container.Composite(new qx.ui.layout.VBox),
        g = new qx.ui.basic.Label(webfrontend.gui.notifications.NotificationsUtil.parseParameters(i, t, !0, !0)).set({
            textColor: h,
            font: u,
            paddingLeft: 5,
            maxWidth: 365,
            rich: !0,
            wrap: !0,
            paddingRight: 5
        }),
        p = new qx.ui.container.Composite(new qx.ui.layout.HBox),
        nt = new qx.ui.basic.Label(webfrontend.phe.cnc.Util.getDateTimeString(r)).set({
            textColor: f,
            font: u
        }),
        w, y, k, l, c, d;
    return p.add(new qx.ui.core.Spacer, {
        flex: 1
    }), p.add(nt), w = new qx.util.StringBuilder(1024), w.add(a.tr(kt), o, webfrontend.phe.cnc.Util.getDateTimeString(e)), y = new qx.ui.container.Composite(new qx.ui.layout.HBox), k = new qx.ui.basic.Label(w.get()).set({
        textColor: f,
        font: u
    }), y.add(new qx.ui.core.Spacer, {
        flex: 1
    }), y.add(k), s > 0 && (l = 0, c = new qx.util.StringBuilder(1024), c.add(a.tr(hr), o), (s & ClientLib.Data.ENotificationReceiverFlag.Player) > 0 && (l > 0 && c.add(n), c.add(a.tr(hi)), l++), (s & ClientLib.Data.ENotificationReceiverFlag.Alliance) > 0 && (l > 0 && c.add(n), c.add(a.tr(yr)), l++), (s & ClientLib.Data.ENotificationReceiverFlag.AllianceDiplomats) > 0 && (l > 0 && c.add(n), c.add(a.tr(ni)), l++), (s & ClientLib.Data.ENotificationReceiverFlag.OtherAllianceDiplomats) > 0 && (l > 0 && c.add(n), c.add(a.tr(fi)), l++), (s & ClientLib.Data.ENotificationReceiverFlag.AllianceLeaders) > 0 && (l > 0 && c.add(n), c.add(a.tr(sr)), l++), (s & ClientLib.Data.ENotificationReceiverFlag.InitiatingPlayer) > 0 && (l > 0 && c.add(n), c.add(a.tr(lr)), l++), (s & ClientLib.Data.ENotificationReceiverFlag.AllWithForumReadAccess) > 0 && (l > 0 && c.add(n), c.add(a.tr(ii)), l++), (s & ClientLib.Data.ENotificationReceiverFlag.FriendlyAlliances) > 0 && (l > 0 && c.add(n), c.add(a.tr(oi)), l++), d = new qx.ui.basic.Label(c.get()).set({
        textColor: f,
        font: u,
        rich: !0,
        width: 355,
        textAlign: nr
    })), v.add(g), v.add(p), v.add(y), s > 0 && v.add(d), b.add(v, {
        top: 0,
        left: 15,
        right: 10
    }), b
}

function getParameter(n, t) {
    var i = null;
    for (var r in n)
        if (n[r].t == t) {
            i = n[r].v;
            break
        } return i
}

function parseParameters(i, u, f, h) {
    var lt = qx.core.Init.getApplication(),
        bt = i,
        ni, p, oi, si, fi, di, hi, pi, ii, wi, kt;
    for (ni in u)
        if (p = u[ni].v, typeof p == wt && (p = e + ClientLib.Base.Util.checkTranslate(webfrontend.phe.cnc.gui.util.Text.cleanString(u[ni].v))), u[ni].k == ut && u[ni].t == webfrontend.gui.notifications.NotificationsUtil.ParameterBaseId) f && (bt = bt.replace(it, bi + p + ot + webfrontend.gui.util.BBCode.clrLink + t + lt.tr(yt) + r));
        else {
            switch (u[ni].t) {
                case webfrontend.gui.notifications.NotificationsUtil.ParameterPlayerName:
                    f && (p = webfrontend.gui.util.BBCode.createPlayerLinkText(p));
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterPlayerLevelAndFaction:
                    oi = ClientLib.Res.ResMain.GetInstance().GetPlayerTitleByLevel(p[1], p[0]);
                    oi != null && oi.dn != null && (p = oi.dn);
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterAllianceName:
                    f && (p = webfrontend.gui.util.BBCode.createAllianceLinkText(p));
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterAllianceRoleName:
                    p = webfrontend.gui.alliance.AllianceUtil.getAllianceRoleTranslation(p);
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterBaseIdAndName:
                    p = f ? webfrontend.gui.util.BBCode.createBaseLinkText(p[1], p[0]) : p[1];
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterBaseLevel:
                case webfrontend.gui.notifications.NotificationsUtil.ParameterPOILevel:
                case webfrontend.gui.notifications.NotificationsUtil.ParameterNPCBaseLevel:
                    p = parseInt(p, 10);
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterNpc:
                case webfrontend.gui.notifications.NotificationsUtil.ParameterPlayerNameArray:
                    try {
                        for (si = [], fi = 0; fi < p.length; fi++) si[fi] = f ? webfrontend.gui.util.BBCode.createPlayerLinkText(p[fi]) : p[fi];
                        p = si.join(n)
                    } catch (yr) {
                        qx.core.Init.getApplication().debug(vr, p)
                    }
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterMessage:
                    p = qx.bom.String.escape(p);
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterBBCodeMessage:
                    p = qx.bom.String.escape(p);
                    h && (p = d + webfrontend.gui.util.BBCode.convertBBCode(p) + s);
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterAllianceRelationshipType:
                    switch (parseInt(p, 10)) {
                        case webfrontend.gui.alliance.DiplomacyPage.ERelationTypeAlly:
                            p = lt.tr(ai);
                            break;
                        case webfrontend.gui.alliance.DiplomacyPage.ERelationTypeNAP:
                            p = lt.tr(ki);
                            break;
                        case webfrontend.gui.alliance.DiplomacyPage.ERelationTypeEnemy:
                            p = lt.tr(li);
                            break;
                        case webfrontend.gui.alliance.DiplomacyPage.ERelationTypeNone:
                            p = lt.tr(b);
                            break;
                        case webfrontend.gui.alliance.DiplomacyPage.ERelationTypeNeutral:
                            p = lt.tr(b)
                    }
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterDate:
                    p = webfrontend.phe.cnc.Util.getDateTimeString(new Date(p));
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterTimeStamp:
                    di = ClientLib.Data.MainData.GetInstance().get_Time();
                    p = webfrontend.phe.cnc.Util.getDateTimeString(di.GetJSStepTime(p));
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterReportId:
                    p = f ? p instanceof Array ? a + p[0] + ht + p[1] + cr + webfrontend.gui.util.BBCode.clrLink + t + lt.tr(l) + r : a + p + tt + webfrontend.gui.util.BBCode.clrLink + t + lt.tr(l) + r : p;
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterNPCCoordinateAndType:
                    if (hi = parseInt(p[1], 10), pi = lt.tr(ClientLib.Data.Reports.CombatReport.GetNPCBaseNameFromType(hi)), hi == ClientLib.Data.Reports.ENPCCampType.Fortress) {
                        var kt = ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter(),
                            nr = Math.floor(kt.get_X() + kt.get_SizeX() / 2),
                            ir = Math.floor(kt.get_Y() + kt.get_SizeY() / 2);
                        p[0] = (nr & 65535) << 16 | ir & 65535
                    }
                    p = f ? webfrontend.gui.util.BBCode.createCoordsLinkText(pi, p[0] >> 16, p[0] & 65535) : pi;
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterNPCCampName:
                    p = lt.tr(p);
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterCoordinate:
                    p = webfrontend.gui.util.BBCode.createCoordsLinkText((p >> 16) + ti + (p & 65535), p >> 16, p & 65535);
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterPOIBonusType:
                    switch (p) {
                        case ClientLib.Base.EPOIType.TiberiumBonus:
                            p = lt.tr(ci);
                            break;
                        case ClientLib.Base.EPOIType.CrystalBonus:
                            p = lt.tr(ar);
                            break;
                        case ClientLib.Base.EPOIType.PowerBonus:
                            p = lt.tr(or);
                            break;
                        case ClientLib.Base.EPOIType.InfanteryBonus:
                            p = lt.tr(vt);
                            break;
                        case ClientLib.Base.EPOIType.VehicleBonus:
                            p = lt.tr(pt);
                            break;
                        case ClientLib.Base.EPOIType.AirBonus:
                            p = lt.tr(ft);
                            break;
                        case ClientLib.Base.EPOIType.DefenseBonus:
                            p = lt.tr(gi)
                    }
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterPOIType:
                    switch (p) {
                        case ClientLib.Base.EPOIType.TiberiumBonus:
                            p = lt.tr(dt);
                            break;
                        case ClientLib.Base.EPOIType.CrystalBonus:
                            p = lt.tr(wr);
                            break;
                        case ClientLib.Base.EPOIType.PowerBonus:
                            p = lt.tr(ur);
                            break;
                        case ClientLib.Base.EPOIType.InfanteryBonus:
                            p = lt.tr(at);
                            break;
                        case ClientLib.Base.EPOIType.VehicleBonus:
                            p = lt.tr(pr);
                            break;
                        case ClientLib.Base.EPOIType.AirBonus:
                            p = lt.tr(vi);
                            break;
                        case ClientLib.Base.EPOIType.DefenseBonus:
                            p = lt.tr(fr)
                    }
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterPOIScore:
                    p = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(p);
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterPOIBoost:
                    switch (p[1]) {
                        case ClientLib.Base.EPOIType.TiberiumBonus:
                        case ClientLib.Base.EPOIType.CrystalBonus:
                        case ClientLib.Base.EPOIType.PowerBonus:
                            p = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(p[0]) + lt.tr(rr);
                            break;
                        case ClientLib.Base.EPOIType.InfanteryBonus:
                        case ClientLib.Base.EPOIType.VehicleBonus:
                        case ClientLib.Base.EPOIType.AirBonus:
                        case ClientLib.Base.EPOIType.DefenseBonus:
                            p = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(p[0]) + c
                    }
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterControlHubId:
                    ii = ClientLib.Data.MainData.GetInstance().get_EndGame().GetControlById(p);
                    ii != null && (wi = lt.tr(w), ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer() || (wi = lt.tr(w) + o + webfrontend.phe.cnc.gui.util.Text.getControlHubName(ii, !1)), p = webfrontend.gui.util.BBCode.createCoordsLinkText(wi, Math.floor(ii.get_X() + ii.get_SizeX() / 2), Math.floor(ii.get_Y() + ii.get_SizeY() / 2)));
                    break;
                case webfrontend.gui.notifications.NotificationsUtil.ParameterResourceDelta:
                    p = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(parseFloat(p) * 3600)
            }
            try {
                bt = bt.replace(c + u[ni].k, p)
            } catch (er) {
                throw er;
            }
        } if (bt = bt.replace(tr, yi + webfrontend.gui.util.BBCode.clrLink + t + lt.tr(st) + r), bt = bt.replace(g, ct + webfrontend.gui.util.BBCode.clrLink + t + lt.tr(ei) + r), (bt.indexOf(y) > -1 || bt.indexOf(k) > -1) && (kt = ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter(), kt != null && (bt = bt.replace(y, webfrontend.gui.util.BBCode.createCoordsLinkText(lt.tr(ri), Math.floor(kt.get_X() + kt.get_SizeX() / 2), Math.floor(kt.get_Y() + kt.get_SizeY() / 2))), bt = bt.replace(k, webfrontend.gui.util.BBCode.createCoordsLinkText(lt.tr(rt), Math.floor(kt.get_X() + kt.get_SizeX() / 2), Math.floor(kt.get_Y() + kt.get_SizeY() / 2))))), bt.indexOf(v) >= 0) {
        var sr = webfrontend.gui.notifications.NotificationsUtil.getParameter(u, webfrontend.gui.notifications.NotificationsUtil.ParameterAllianceName),
            hr = webfrontend.phe.cnc.Util.getDateTimeString(new Date(webfrontend.gui.notifications.NotificationsUtil.getParameter(u, webfrontend.gui.notifications.NotificationsUtil.ParameterDate))),
            lr = et + sr + gt + hr + nt + webfrontend.gui.util.BBCode.clrLink + t + lt.tr(ui) + r;
        bt = bt.replace(v, lr)
    }
    return bt
}

function createJumpToThreadContainer(n, t) {
    var u = qx.core.Init.getApplication(),
        i = new qx.ui.container.Composite(new qx.ui.layout.HBox).set({
            marginTop: 5
        }),
        r = new webfrontend.ui.SoundButton(null, pi).set({
            width: 28,
            height: 28,
            allowGrowY: !1,
            allowGrowX: !1,
            alignY: er,
            toolTipText: u.tr(wi)
        });
    return r.addListener(bt, webfrontend.gui.notifications.NotificationsUtil.onClickJumpToThread, {
        forumId: n,
        threadId: t
    }), i.add(r), i
}

function onClickJumpToThread() {
    webfrontend.gui.forum.ForumOverlay.getInstance().openThread(this.forumId, this.threadId, !0)
}

function openPopup(n, t, i) {
    switch (n) {
        case ClientLib.Data.ENotificationId.NewPlayerTitle:
            if (i) {
                var r = webfrontend.gui.notifications.NotificationsUtil.getParameter(t, webfrontend.gui.notifications.NotificationsUtil.ParameterPlayerLevel);
                ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer() ? r >= ClientLib.Data.MainData.GetInstance().get_Server().get_MinRankUp() && webfrontend.gui.info.NewPlayerTitleWindow.getInstance().open(r) : webfrontend.gui.info.NewPlayerTitleWindow.getInstance().open(r)
            }
            break;
        case ClientLib.Data.ENotificationId.EndgameWon:
            this.__yu(t, i)
    }
}