webfront prototypeend.phe.cnc.gui.CalcUtil[15180 - 0]
function calculateTotalProductions(n, t) {
    var u = {
            current: 0,
            next: 0,
            isDamaged: !1
        },
        e = t.get_BuildingDetails(),
        o, i, s, f, r, h, c;
    for (o in n)
        if (i = n[o], e.get_CollectResourceType() == ClientLib.Base.EResourceType.Tiberium && i.ModifierTypeId == ClientLib.Base.EModifierType.TiberiumProduction || e.get_CollectResourceType() == ClientLib.Base.EResourceType.Crystal && i.ModifierTypeId == ClientLib.Base.EModifierType.CrystalProduction || e.get_CollectResourceType() == ClientLib.Base.EResourceType.Power && i.ModifierTypeId == ClientLib.Base.EModifierType.PowerProduction || e.get_CollectResourceType() == ClientLib.Base.EResourceType.Gold && i.ModifierTypeId == ClientLib.Base.EModifierType.CreditsProduction)
            if (i.ConnectedLinkTypes != null && i.ConnectedLinkTypes.c > 0)
                for (s in i.ConnectedLinkTypes.d) f = i.ConnectedLinkTypes.d[s], !f.IsInverted && f.IsEfficiencyDown && (u.isDamaged = !0), f.IsConnected && (u.current += f.Value, u.next += f.Value + f.NewLvlDelta, f.CanHaveProvidingLinkConnection && (u.current += f.ProvidingToValue, u.next += f.ProvidingToValue));
            else u.current += i.TotalValue, u.next += i.TotalValue + i.NewLvlDelta;
    else if (e.get_CollectResourceType() == ClientLib.Base.EResourceType.Tiberium && i.ModifierTypeId == ClientLib.Base.EModifierType.TiberiumPackageSize || e.get_CollectResourceType() == ClientLib.Base.EResourceType.Crystal && i.ModifierTypeId == ClientLib.Base.EModifierType.CrystalPackageSize || e.get_CollectResourceType() == ClientLib.Base.EResourceType.Power && i.ModifierTypeId == ClientLib.Base.EModifierType.PowerPackageSize || e.get_CollectResourceType() == ClientLib.Base.EResourceType.Gold && i.ModifierTypeId == ClientLib.Base.EModifierType.CreditsPackageSize) {
        r = null;
        switch (i.ModifierTypeId) {
            case ClientLib.Base.EModifierType.TiberiumPackageSize:
                r = n[ClientLib.Base.EModifierType.TiberiumBonusTimeToComplete];
                break;
            case ClientLib.Base.EModifierType.CrystalPackageSize:
                r = n[ClientLib.Base.EModifierType.CrystalBonusTimeToComplete];
                break;
            case ClientLib.Base.EModifierType.PowerPackageSize:
                r = n[ClientLib.Base.EModifierType.PowerBonusTimeToComplete];
                break;
            case ClientLib.Base.EModifierType.CreditsPackageSize:
                r = n[ClientLib.Base.EModifierType.CreditsBonusTimeToComplete]
        }
        r != null && (r.TotalValue > 0 && (u.current += i.TotalValue / r.TotalValue * ClientLib.Data.MainData.GetInstance().get_Time().get_StepsPerHour()), r.TotalValue + r.NewLvlDelta && (h = i.TotalValue + i.NewLvlDelta, c = r.TotalValue + r.NewLvlDelta, u.next += h / c * ClientLib.Data.MainData.GetInstance().get_Time().get_StepsPerHour()))
    }
    return u
}

function getFittingItemCategory(n) {
    switch (n) {
        case ClientLib.Base.EResourceType.Tiberium:
            return ClientLib.Base.EItemCategory.TiberiumGain;
        case ClientLib.Base.EResourceType.Crystal:
            return ClientLib.Base.EItemCategory.CrystalGain;
        case ClientLib.Base.EResourceType.Gold:
            return ClientLib.Base.EItemCategory.CreditGain;
        case ClientLib.Base.EResourceType.Power:
            return ClientLib.Base.EItemCategory.PowerGain;
        case ClientLib.Base.EResourceType.CommandPoints:
            return ClientLib.Base.EItemCategory.CommandPointGain
    }
    return null
}

function getResourceRequestItems(n, t) {
    var h = ClientLib.Data.MainData.GetInstance(),
        y = h.get_Inventory(),
        p = h.get_Player(),
        g = h.get_Cities().get_CurrentOwnCity(),
        e = g.GetMissingResources(n),
        u, c, o, a, v, l, i, f;
    if (e.length == 0) return null;
    var w = y.get_Items(),
        nt = y.get_SpendableFunds(),
        b = p.get_Level(),
        k = p.GetSupplyPointCount(),
        r = {
            supplyPointsNeeded: 0,
            fundsNeeded: 0,
            inventoryItems: [],
            purchasableItems: [],
            unpurchasableItems: []
        };
    for (u = 0; u < e.length; u++) {
        c = !1;
        o = webfrontend.phe.cnc.gui.CalcUtil.getFittingItemCategory(e[u].Type);
        for (a in w.d)
            if ((v = w.d[a], !(v <= 0)) && (i = ClientLib.Base.ItemCategories.GetItemById(a), o == i.get_m_Category()) && (b == i.get_m_PlayerLevel() || o == ClientLib.Base.EItemCategory.CommandPointGain)) {
                if (f = Math.ceil(e[u].Count / i.get_m_Value()), l = Math.min(v, f), r.supplyPointsNeeded += i.get_m_SupplyPointCost() * l, k < r.supplyPointsNeeded) return t && (t.itemUseable = !0), null;
                if (r.inventoryItems.push({
                        ID: i.get_m_Id(),
                        amount: l
                    }), e[u].Count -= i.get_m_Value() * l, c = e[u].Count <= 0, c) break
            } if (!c) {
            if (i = ClientLib.Base.ItemCategories.GetFirstAvailableItemByCategoryAndLevel(o, o == ClientLib.Base.EItemCategory.CommandPointGain ? 1 : b), !i) return null;
            if (f = Math.ceil(e[u].Count / i.get_m_Value()), r.supplyPointsNeeded += i.get_m_SupplyPointCost() * f, k < r.supplyPointsNeeded) return t && (t.itemBuyable = !0), null;
            var d = h.get_ShopCatalog().PriceFromItemById(i.get_m_Id()),
                s = Math.floor((nt - r.fundsNeeded) / d),
                s = Math.min(s, f);
            s > 0 && r.purchasableItems.push({
                ID: i.get_m_Id(),
                amount: s
            });
            s < f && r.unpurchasableItems.push({
                ID: i.get_m_Id(),
                amount: f - s
            });
            r.fundsNeeded += d * f
        }
    }
    return r
}