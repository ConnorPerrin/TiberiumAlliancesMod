webfront prototypeend.gui.monetization.ShopBundle[15198 - 0]
function getBundleItems(n, i, r) {
    for (var b, l, d, c = qx.core.Init.getApplication(), p = [], v = 0; v < n.Items.l.length; v++) {
        var a = n.Items.l[v],
            w = a.c,
            o = webfrontend.gui.Util.generateItemInfos(a),
            h = {},
            s = et;
        switch (w) {
            case ClientLib.Base.EItemCategory.TiberiumGain:
                s = ClientLib.Res.ResMain.GetInstance().GetResourceIconPath(ClientLib.Base.EResourceType.Tiberium);
                break;
            case ClientLib.Base.EItemCategory.CrystalGain:
                s = ClientLib.Res.ResMain.GetInstance().GetResourceIconPath(ClientLib.Base.EResourceType.Crystal);
                break;
            case ClientLib.Base.EItemCategory.PowerGain:
                s = ClientLib.Res.ResMain.GetInstance().GetResourceIconPath(ClientLib.Base.EResourceType.Power);
                break;
            case ClientLib.Base.EItemCategory.CreditGain:
                s = ClientLib.Res.ResMain.GetInstance().GetResourceIconPath(ClientLib.Base.EResourceType.Gold);
                break;
            case ClientLib.Base.EItemCategory.CommandPointCapacityBuff:
                s = ni;
                break;
            case ClientLib.Base.EItemCategory.CommandPointGain:
                s = bt;
                break;
            case ClientLib.Base.EItemCategory.CityBuff:
            case ClientLib.Base.EItemCategory.ArmyRepairTime:
                s = e;
                break;
            case ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity:
                s = e;
                break;
            case ClientLib.Base.EItemCategory.BonusPackageStorage:
                s = wt
        }
        b = a.d == 0;
        l = o.value;
        switch (w) {
            case ClientLib.Base.EItemCategory.TiberiumGain:
            case ClientLib.Base.EItemCategory.CrystalGain:
            case ClientLib.Base.EItemCategory.PowerGain:
            case ClientLib.Base.EItemCategory.CreditGain:
            case ClientLib.Base.EItemCategory.CommandPointGain:
            case ClientLib.Base.EItemCategory.ArmyRepairTime:
                l = c.tr(t, o.value);
                break;
            case ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity:
            case ClientLib.Base.EItemCategory.CityBuff:
                l = b ? c.tr(t, o.value) : c.tr(u, o.value, o.duration);
                break;
            case ClientLib.Base.EItemCategory.CommandPointCapacityBuff:
            case ClientLib.Base.EItemCategory.BonusPackageStorage:
                l = b ? c.tr(t, o.value) : c.tr(u, o.value, o.duration)
        }
        var g = webfrontend.gui.Util.getIconToolTip(w),
            y = new qx.ui.container.Composite(new qx.ui.layout.HBox(5).set({
                alignY: f
            })),
            nt = new qx.ui.basic.Image(s).set({
                toolTipText: g
            }),
            tt = new qx.ui.basic.Label(l.toString()).set({
                marginLeft: -5,
                marginRight: 25
            }),
            k = i.i[v].q;
        (k > 1 || r) && (d = new qx.ui.basic.Label(c.tr(ti, k)).set({
            minWidth: 24,
            marginRight: -3,
            textAlign: lt
        }), y.add(d));
        y.add(nt);
        y.add(tt);
        h.category = a.c;
        h.icon = o.resourceIcon;
        h.name = o.bn;
        h.value = l;
        h.quantity = k;
        h.rank = o.requiredImage;
        h.cntItem = y;
        h.numRank = a.t;
        p.push(h)
    }
    return p.sort(function(n, t) {
        var i, r;
        switch (n.category) {
            case ClientLib.Base.EItemCategory.ArmyRepairTime:
                i = 1;
                break;
            case ClientLib.Base.EItemCategory.CommandPointGain:
                i = 2;
                break;
            case ClientLib.Base.EItemCategory.TiberiumGain:
                i = 3;
                break;
            case ClientLib.Base.EItemCategory.CrystalGain:
                i = 4;
                break;
            case ClientLib.Base.EItemCategory.PowerGain:
                i = 5;
                break;
            case ClientLib.Base.EItemCategory.CreditGain:
                i = 6;
                break;
            case ClientLib.Base.EItemCategory.CommandPointCapacityBuff:
                i = 7;
                break;
            case ClientLib.Base.EItemCategory.BonusPackageStorage:
                i = 8;
                break;
            case ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity:
                i = 9
        }
        switch (t.category) {
            case ClientLib.Base.EItemCategory.ArmyRepairTime:
                r = 1;
                break;
            case ClientLib.Base.EItemCategory.CommandPointGain:
                r = 2;
                break;
            case ClientLib.Base.EItemCategory.TiberiumGain:
                r = 3;
                break;
            case ClientLib.Base.EItemCategory.CrystalGain:
                r = 4;
                break;
            case ClientLib.Base.EItemCategory.PowerGain:
                r = 5;
                break;
            case ClientLib.Base.EItemCategory.CreditGain:
                r = 6;
                break;
            case ClientLib.Base.EItemCategory.CommandPointCapacityBuff:
                r = 7;
                break;
            case ClientLib.Base.EItemCategory.BonusPackageStorage:
                r = 8;
                break;
            case ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity:
                r = 9
        }
        return i *= 100, r *= 100, i += n.numRank, r += t.numRank, i > r ? 1 : -1
    }), p
}