function round(n) {
    return Math.floor(n + .5)
}

function calculateDisplayPercentValue(n) {
    var t = n * 100;
    return t > 0 && t < 1 ? t = 1 : t > 99 && t < 100 && (t = 99), Math.round(t)
}

function setFixedContentSizeData(n, t, i) {
    n && (n.setFixedContentSize(!0), n.setWidth(t), n.setHeight(i))
}

function getScrollableRichTextBox(n) {
    var u = (new qx.ui.basic.Atom).set({}),
        r = new qx.ui.container.Composite(new qx.ui.layout.Canvas),
        i, t;
    return r.add(n.set({
        padding: 5,
        rich: !0,
        selectable: !0,
        allowGrowX: !0,
        cursor: p
    }), {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }), i = (new qx.ui.container.Scroll).set({
        scrollbarX: dt,
        scrollbarY: rt
    }), i.add(r), t = new qx.ui.container.Composite(new qx.ui.layout.Canvas), t.add(u, {
        top: 0,
        bottom: 0,
        left: 0,
        right: 23
    }), t.add(i, {
        top: 1,
        bottom: 1,
        left: 1,
        right: 0
    }), t
}

function openLink(n, t) {
    var f = qx.core.Init.getApplication(),
        u, s, o, h, c;
    (t && typeof t != pi || (t = f.tr(b) + ui + f.tr(k)), n = qx.lang.String.stripTags(n), n = n.split(li).join(ft), n.indexOf(ht) == -1 && (n = r + n), n.substr(0, r.length) == r || n.substr(0, e.length) == e) && (u = new webfrontend.gui.CustomWindow(f.tr(st)).set({
        resizable: !1,
        showClose: !1,
        showMaximize: !1,
        showMinimize: !1
    }), u.setLayout(new qx.ui.layout.VBox(10)), u.addListenerOnce(at, u.center, u), s = new qx.util.StringBuilder(1024), s.add(t), u.add(new qx.ui.basic.Label(s.get()).set({
        rich: !0,
        maxWidth: 360,
        wrap: !0,
        textColor: ai
    })), o = new qx.ui.container.Composite(new qx.ui.layout.HBox(10).set({
        alignX: ni
    })), h = new webfrontend.ui.SoundButton(f.tr(nt)), h.addListener(i, function() {
        u.close()
    }, this), c = new webfrontend.ui.SoundButton(f.tr(bt)), c.addListener(i, function() {
        u.close();
        f.showExternal(n)
    }, this), o.add(h), o.add(c), u.add(o), u.setModal(!0), u.open())
}

function getMaxedResourcesCount(n) {
    var i, r, t;
    if (!n) return 0;
    for (i = 0, r = [ClientLib.Base.EResourceType.Tiberium, ClientLib.Base.EResourceType.Crystal, ClientLib.Base.EResourceType.Power], t = 0; t < r.length; ++t) {
        var u = r[t],
            e = n.GetResourceCount(u),
            f = n.GetResourceMaxStorage(u);
        f > 0 && e >= f && ++i
    }
    return i
}

function displayCombatReplay(n) {
    var i = ClientLib.Vis.VisMain.GetInstance(),
        r = qx.core.Init.getApplication(),
        t;
    r.getPlayArea().setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay, -1, 0, 0);
    t = i.get_Battleground();
    t.LoadCombat(n)
}

function displayCombatReplayDump(n) {
    var t, i, r;
    webfrontend.phe.cnc.config.Config.getInstance().inDevelopment() && (t = ClientLib.Vis.VisMain.GetInstance(), i = qx.core.Init.getApplication(), i.getPlayArea().setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay, -1, 0, 0), r = t.get_Battleground(), r.LoadCombatFromDump(n))
}

function createItemContainer(r, e, v, p) {
    var tt = qx.core.Init.getApplication(),
        ei = ClientLib.Data.MainData.GetInstance().get_Player().get_Faction(),
        it = ClientLib.Res.ResMain.GetInstance().GetPlayerTitleByLevel(ei, r.t),
        rt = webfrontend.gui.Util.generateItemInfos(r),
        ft = rt.dn,
        oi = rt.ds,
        si = rt.sds,
        li = u + r.ic,
        ai = it != null ? it.dn : n,
        pi = u + it.ic,
        lt = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(r.m),
        at = new qx.ui.tooltip.ToolTip(n).set({
            rich: !0
        }),
        k = new qx.util.StringBuilder(1024),
        ni, ii, ri, ui, nt, g;
    k.add(y);
    k.add(w, ft, vt);
    k.add(f, tt.tr(gt, ai, r.t), t);
    k.add(f, oi, t);
    k.add(t);
    at.setLabel(k.get());
    var b = new qx.ui.container.Composite(new qx.ui.layout.Canvas).set({
            width: 358,
            height: 154,
            toolTip: at,
            minHeight: 1
        }),
        bt = new qx.ui.basic.Image(hi).set({
            appearance: vi
        }),
        d = new qx.ui.container.Composite(new qx.ui.layout.HBox(2)).set({
            width: 290
        }),
        wi = new qx.ui.basic.Image(pi).set({
            width: 26,
            height: 26,
            scale: !0,
            alignY: h
        }),
        st = new qx.ui.container.Composite(new qx.ui.layout.Basic).set({
            alignY: a,
            marginTop: 4
        }),
        bi = new qx.ui.basic.Label(ft).set({
            font: s,
            textColor: l
        }),
        ki = new qx.ui.basic.Label(ft).set({
            font: s,
            textColor: c
        });
    st.add(ki, {
        left: 1,
        top: 1
    });
    st.add(bi);
    var di = new qx.ui.basic.Image(ti).set({
            alignY: h,
            marginTop: 1
        }),
        ht = new qx.ui.container.Composite(new qx.ui.layout.HBox),
        gi = new qx.ui.basic.Image(et).set({
            height: 22,
            width: 19,
            scale: !0
        }),
        ct = new qx.ui.container.Composite(new qx.ui.layout.Basic).set({
            alignY: a
        }),
        dt = new qx.ui.basic.Label(lt.toString()).set({
            font: o,
            textColor: l
        }),
        nr = new qx.ui.basic.Label(lt.toString()).set({
            font: o,
            textColor: c
        });
    return ct.add(nr, {
        left: 1,
        top: 1
    }), ct.add(dt), ht.add(gi), ht.add(ct), d.add(wi), d.add(st), d.add(new qx.ui.core.Spacer, {
        flex: 1
    }), d.add(di), ni = new qx.ui.basic.Image(li), ii = new qx.ui.basic.Label(si).set({
        width: 176,
        font: ut,
        rich: !0,
        wrap: !0,
        textColor: fi
    }), b.add(bt, {
        left: 0,
        top: 0
    }), e >= 0 && (bt.setSource(yi), ri = new qx.ui.basic.Label(tt.tr(pt, yt + e + kt)).set({
        width: 154,
        rich: !0,
        textAlign: ot,
        font: ci
    }), b.add(ri, {
        left: 173,
        top: 91
    })), v != null && p != null && (ui = (new qx.ui.tooltip.ToolTip).set({
        rich: !0
    }), nt = new webfrontend.ui.SoundButton(tt.tr(wt)).set({
        minWidth: 116,
        height: 29,
        toolTip: ui,
        enabled: !1
    }), nt.addListener(i, v, {
        form: p,
        itemId: r.i
    }), g = new qx.ui.container.Composite(new qx.ui.layout.HBox).set({
        width: 176
    }), g.add(new qx.ui.core.Spacer, {
        flex: 1
    }), g.add(nt), g.add(new qx.ui.core.Spacer, {
        flex: 1
    }), b.add(g, {
        left: 162,
        top: 115
    })), b.add(ht, {
        top: 5,
        left: 306
    }), b.add(d, {
        left: 4,
        top: 1
    }), b.add(ii, {
        left: 162,
        top: 39
    }), b.add(ni, {
        left: 10,
        top: 33
    }), {
        itemContainer: b,
        useButton: nt,
        lblCosts: dt
    }
}

function generateItemInfos(t, i) {
    var i = parseInt(i) || 1,
        c = null,
        l = n,
        a = n,
        v = n,
        f = n,
        e = n,
        r = n,
        s, h, y, o;
    switch (t.c) {
        case ClientLib.Base.EItemCategory.TiberiumGain:
            r = ClientLib.Res.ResMain.GetInstance().GetResourceIconPath(ClientLib.Base.EResourceType.Tiberium);
            break;
        case ClientLib.Base.EItemCategory.CrystalGain:
            r = ClientLib.Res.ResMain.GetInstance().GetResourceIconPath(ClientLib.Base.EResourceType.Crystal);
            break;
        case ClientLib.Base.EItemCategory.PowerGain:
            r = ClientLib.Res.ResMain.GetInstance().GetResourceIconPath(ClientLib.Base.EResourceType.Power);
            break;
        case ClientLib.Base.EItemCategory.CreditGain:
            r = ClientLib.Res.ResMain.GetInstance().GetResourceIconPath(ClientLib.Base.EResourceType.Gold);
            break;
        case ClientLib.Base.EItemCategory.CommandPointCapacityBuff:
            r = si;
            break;
        case ClientLib.Base.EItemCategory.CommandPointGain:
            r = ei;
            break;
        case ClientLib.Base.EItemCategory.CityBuff:
        case ClientLib.Base.EItemCategory.ArmyRepairTime:
        case ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity:
            r = lt;
            break;
        case ClientLib.Base.EItemCategory.BonusPackageStorage:
            r = ri
    }
    switch (t.c) {
        case ClientLib.Base.EItemCategory.ArmyRepairTime:
        case ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity:
            f = webfrontend.phe.cnc.Util.getShortTimespanString(t.v * i, !0, !0, !1);
            e = webfrontend.phe.cnc.Util.getShortTimespanString(t.d, !1, !1, !1);
            break;
        default:
            f = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(t.v * i, !0, !1, !1);
            e = webfrontend.phe.cnc.Util.getShortTimespanString(t.d, !1, !1, !1)
    }
    s = null;
    h = null;
    switch (t.c) {
        case ClientLib.Base.EItemCategory.TiberiumGain:
        case ClientLib.Base.EItemCategory.CrystalGain:
        case ClientLib.Base.EItemCategory.PowerGain:
        case ClientLib.Base.EItemCategory.CreditGain:
        case ClientLib.Base.EItemCategory.ArmyRepairTime:
        case ClientLib.Base.EItemCategory.CityBuff:
            y = ClientLib.Data.MainData.GetInstance().get_Player().get_Faction();
            o = ClientLib.Res.ResMain.GetInstance().GetPlayerTitleByLevel(y, t.t);
            s = o != null ? o.dn : n;
            h = o != null ? new qx.ui.basic.Image(u + o.ic) : n
    }
    return c = t.bn, l = qx.lang.String.format(t.dn, [f, e]), a = qx.lang.String.format(t.ds, [f, e]), v = qx.lang.String.format(t.sds, [f, e]), {
        bn: c,
        dn: l,
        ds: a,
        sds: v,
        value: f,
        duration: e,
        resourceIcon: r,
        requiredRank: s,
        requiredImage: h
    }
}

function getIconToolTip(n) {
    var t = d,
        i = qx.core.Init.getApplication();
    switch (n) {
        case ClientLib.Base.EItemCategory.TiberiumGain:
            t = i.tr(ct);
            break;
        case ClientLib.Base.EItemCategory.CrystalGain:
            t = i.tr(wi);
            break;
        case ClientLib.Base.EItemCategory.PowerGain:
            t = i.tr(ii);
            break;
        case ClientLib.Base.EItemCategory.CreditGain:
            t = i.tr(tt);
            break;
        case ClientLib.Base.EItemCategory.CommandPointCapacityBuff:
            t = i.tr(v);
            break;
        case ClientLib.Base.EItemCategory.CommandPointGain:
            t = i.tr(v);
            break;
        case ClientLib.Base.EItemCategory.CityBuff:
        case ClientLib.Base.EItemCategory.ArmyRepairTime:
            t = i.tr(oi);
            break;
        case ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity:
            t = i.tr(g);
            break;
        case ClientLib.Base.EItemCategory.BonusPackageStorage:
            t = i.tr(it)
    }
    return t
}

function setTabOrder(n, t) {
    if (n && !(n.length <= 0)) {
        t = t && t > 0 && t <= 32001 - n.length ? t : 1;
        for (var i = 0; i < n.length; ++i) n[i].setTabIndex(t++)
    }
}

function getBuildDeco(n, t) {
    if (!n || !t) return null;
    var i = new qx.ui.container.Composite(new qx.ui.layout.Canvas);
    return i.add(new qx.ui.container.Composite(new qx.ui.layout.Basic).set({
        decorator: t
    }), {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }), i.add(n), i
}