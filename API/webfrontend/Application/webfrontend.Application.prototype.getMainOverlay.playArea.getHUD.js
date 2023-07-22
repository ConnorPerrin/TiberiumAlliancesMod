function get_CombatComplete() {
    return !ClientLib.Data.MainData.GetInstance().get_Combat().get_AttackerPlayerId() || ClientLib.Data.MainData.GetInstance().get_Combat().get_Complete()
}

function setTutorialMode(n) {
    this.__bjt != n && (this.__bjt = n, this.__bjA.setTutorialMode(n), this.__bjz.setTutorialMode(n), this.__bjB.setTutorialMode(n), this.setViewMode(this.__iC.getViewMode()))
}

function setViewMode(i) {
    var f = qx.core.Init.getApplication(),
        d, g, nt;
    this.__bkm = i;
    this.__bjz.setViewMode(i);
    this.__bjB.setViewMode(i);
    this.__bjA.setViewMode(i);
    this.__bjC.setViewMode(i);
    var e = !1,
        u = !1,
        y = !1,
        p = !1,
        s = !1,
        tt = !1,
        w = !1,
        h = !1,
        c = !1,
        o = !1,
        b = !1,
        it = !1,
        r = !1,
        l = null,
        k = null;
    switch (i) {
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase:
            if (l = f.getTechPlacementOverlay(), this.__bjt) break;
            u = !0;
            y = !0;
            s = !0;
            p = !0;
            w = !0;
            r = !0;
            b = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense:
            u = !0;
            y = !0;
            s = !0;
            p = !0;
            w = !0;
            it = !0;
            r = !0;
            l = f.getUnitRecruitmentOverlay();
            k = ClientLib.Base.EPlacementType.Defense;
            d = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
            webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.NewbieProtection) && d && d.get_isProtected() && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.NewbieProtection);
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense:
            u = !0;
            y = !0;
            s = !0;
            p = !0;
            w = !0;
            r = !0;
            l = f.getUnitRecruitmentOverlay();
            k = ClientLib.Base.EPlacementType.Offense;
            b = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase:
            e = !0;
            h = !0;
            u = !0;
            r = !1;
            this.__bka.setIcon(this.__bjX[ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense]);
            this.__bka.setToolTipText(f.tr(a));
            this.__bjY = ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense:
            e = !0;
            h = !0;
            u = !0;
            r = !1;
            this.__bka.setIcon(this.__bjX[ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase]);
            this.__bka.setToolTipText(f.tr(v));
            this.__bjY = ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase;
            g = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
            webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.UnitTransport) && g && g.get_CityUnitsData().HasTransportUnits() && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.UnitTransport);
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker:
            e = !0;
            u = !0;
            r = !1;
            o = !0;
            c = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender:
            e = !0;
            tt = !0;
            s = !0;
            u = !0;
            r = !1;
            o = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker:
            e = !0;
            u = !0;
            r = !1;
            o = !0;
            c = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender:
            e = !0;
            u = !0;
            r = !1;
            o = !0;
            c = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSimulation:
            e = !0;
            l = f.getReportReplayOverlay();
            r = !1;
            o = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase:
            e = !1;
            h = !0;
            u = !1;
            r = !1;
            this.__bka.setIcon(this.__bjX[ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense]);
            this.__bka.setToolTipText(f.tr(a));
            this.__bjY = ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense:
            e = !1;
            h = !0;
            u = !1;
            r = !1;
            this.__bka.setIcon(this.__bjX[ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase]);
            this.__bka.setToolTipText(f.tr(v));
            this.__bjY = ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase
    }
    this.__bjE.setVisibility(u ? t : n);
    this.__bjK.setVisibility(tt ? t : n);
    this.__bjJ.setVisibility(p ? t : n);
    this.__bjI.setVisibility(s ? t : n);
    this.__bjH.setVisibility(y ? t : n);
    this.__bjS.setVisibility(w ? t : n);
    this.__bjF.setVisibility(h ? t : n);
    this.__bkc.setVisibility(c ? t : n);
    this.__bjG.setVisibility(o ? t : n);
    this.__bjT.setVisibility(it ? t : n);
    this.__bjW.setVisibility(r ? t : n);
    this.__bjO.setVisibility(b ? t : n);
    this.__bkl.setSource(b ? ir : ff);
    c && this.__bkA();
    this.__oJ.setLayoutProperties(e ? this.__bkk : this.__bkj);
    this.__bjE.setLayoutProperties(e ? {
        bottom: 100,
        left: 0
    } : {
        bottom: 36,
        left: 0
    });
    nt = i == ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase || i == ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender;
    this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase].btn.setIcon(nt ? this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase].activeIcon : this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase].inactiveIcon);
    this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase].btn.setEnabled(!nt);
    this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender].btn.setIcon(i != ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender ? this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender].activeIcon : this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender].inactiveIcon);
    this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender].btn.setEnabled(i != ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender);
    this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense].btn.setIcon(i == ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense ? this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense].activeIcon : this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense].inactiveIcon);
    this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense].btn.setEnabled(i != ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense);
    this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense].btn.setIcon(i == ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense ? this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense].activeIcon : this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense].inactiveIcon);
    this.__bjD[ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense].btn.setEnabled(i != ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense);
    f.showBottomOverlayLockdownImg(!1);
    f.getProductionDetailViewPopup().deactivate();
    f.switchBottomOverlay(l, k);
    this.__bkl.setVisibility(et)
}

function updateCombatSetupButton() {
    var t = ClientLib.Vis.VisMain.GetInstance().get_CombatSetup(),
        i = ClientLib.Vis.VisMain.GetInstance(),
        u = qx.core.Init.getApplication(),
        n = u.getPlayArea(),
        r = (this.__bkw(t) + this.__bkx(t)) / 2;
    i.get_PositionY() < r && n.getViewMode() == ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense ? n.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase, n.getViewCity(), -1, -1, 1) : i.get_PositionY() > r && n.getViewMode() == ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase && n.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense, n.getViewCity(), -1, -1, 2)
}

function getCombatSetupOffset(n) {
    var t = ClientLib.Vis.VisMain.GetInstance().get_CombatSetup(),
        i = t.get_PosY();
    switch (n) {
        case ClientLib.Vis.CombatSetup.CombatSetupViewMode.Base:
        case ClientLib.Vis.CombatSetup.CombatSetupViewMode.AllianceBase:
            i = this.__bkw(t);
            break;
        case ClientLib.Vis.CombatSetup.CombatSetupViewMode.Defense:
        case ClientLib.Vis.CombatSetup.CombatSetupViewMode.AllianceBaseDefense:
            i = this.__bkx(t)
    }
    return i
}

function updateUI(n, t) {
    this.__bjz.updateUI(n, t);
    this.__bjB.updateUI(n, t);
    this.__bjA.updateUI(n, t);
    this.__bjC.updateUI(n, t);
    var r = !1,
        f = !1,
        i = !1,
        u = !1;
    switch (n) {
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase:
            f = !0;
            r = !0;
            i = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense:
            f = !0;
            r = !0;
            i = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense:
            f = !0;
            r = !0;
            i = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase:
            r = !0;
            i = !0;
            this.updateCombatSetupButton();
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense:
            r = !0;
            i = !0;
            this.updateCombatSetupButton();
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker:
            i = !0;
            u = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender:
            i = !0;
            u = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker:
            i = !0;
            u = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender:
            i = !0;
            u = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay:
            u = !0;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase:
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense:
            r = !0
    }
    r && this.updateCity(t);
    f ? this.updateOwnCity(t) : this.updateAlienCity(t);
    i && this.__bky();
    u && this.__bkz()
}

function updateCity(n) {
    n != null && (this.__bks || ClientLib.Vis.VisMain.GetInstance().get_MouseMode() != webfrontend.gui.PlayArea.PlayAreaHUD.EModeRepair || this.__bkL())
}

function updateAlienCity(n) {
    n != null && this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase && webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.ItemReward) && webfrontend.phe.cnc.Util.cityHasItemRewards(n.get_Id()) && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.ItemReward)
}

function set_LastAttackedCityCoords(n) {
    this.__bko = {};
    this.__bko.x = n & 65535;
    this.__bko.y = n >> 16
}

function updateOwnCity(i) {
    var k, d, g, s, ht, h, c, nt, tt, rt, ut, a, v, ot, u, y, p, w, o, f;
    if (i != null) {
        var r = qx.core.Init.getApplication(),
            ct = ClientLib.Data.MainData.GetInstance().get_Server(),
            st = ClientLib.Data.MainData.GetInstance().get_Time(),
            b = st.GetServerStep();
        if (i.IsOwnBase()) {
            if (k = i.CanTrade(), d = i.get_HasIncommingAttack(), this.__bjK.setVisibility(d ? t : n), this.__bjJ.setVisibility(d ? n : t), this.__bjH.setVisibility(d ? n : t), g = ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities().c, k == ClientLib.Data.ETradeError.None && g > 1) this.__Ag.setEnabled(!0), this.__Ag.setToolTipText(r.tr(bt) + webfrontend.gui.ShortkeyMapper.getKeyDesc(webfrontend.gui.ShortkeyMapper.keys.trade));
            else {
                if (s = r.tr(fu), g > 1) switch (k) {
                    case ClientLib.Data.ETradeError.IsAttacked:
                        s = r.tr(nu);
                        break;
                    case ClientLib.Data.ETradeError.IsGhostMode:
                        s = r.tr(sr)
                } else s = r.tr(tr);
                this.__Ag.setEnabled(!1);
                this.__Ag.setToolTipText(s)
            }
            ht = ClientLib.Data.MainData.GetInstance().get_Player().get_IsSubstituted();
            h = ht && !webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SUBSTITUTIONALLOWUPGRADE);
            h && (this.__bjQ.setEnabled(!1), this.__bjQ.setToolTipText(r.tr(cu)));
            switch (this.__bkm) {
                case ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase:
                    h || (this.__bjQ.setEnabled(!0), this.__bjQ.setToolTipText(r.tr(e) + webfrontend.gui.ShortkeyMapper.getKeyDesc(webfrontend.gui.ShortkeyMapper.keys.upgrade)));
                    r.getCurrentBottomOverlay() != r.getTechPlacementOverlay() && r.switchBottomOverlay(r.getTechPlacementOverlay(), null);
                    break;
                case ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense:
                    h || (c = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Defense_HQ), this.__bjQ.setEnabled(c != null && c.get_CurrentDamage() == 0), c == null ? this.__bjQ.setToolTipText(r.tr(wr)) : c.get_CurrentDamage() > 0 ? this.__bjQ.setToolTipText(r.tr(gu)) : this.__bjQ.setToolTipText(r.tr(e) + webfrontend.gui.ShortkeyMapper.getKeyDesc(webfrontend.gui.ShortkeyMapper.keys.upgrade)));
                    r.getCurrentBottomOverlay() != r.getUnitRecruitmentOverlay() && r.switchBottomOverlay(r.getUnitRecruitmentOverlay(), ClientLib.Base.EPlacementType.Defense);
                    nt = i.get_SupportAlertEndStep();
                    nt > b ? (tt = i.get_DefenseAutoRepairStartStep(), rt = st.GetTimespanString(nt, b), tt > b ? (this.__bjT.getToolTip().setLabel(r.tr(bi)), this.__bjV.setValue(dt), this.__bjV.setTextColor(ft), this.__bjU.setWidth(0)) : (ut = new qx.util.StringBuilder(1024), ut.add(r.tr(gi, ct.get_DefenseAutoRepairRate() * 100), su, r.tr(pr, rt)), this.__bjT.getToolTip().setLabel(ut.get()), this.__bjV.setValue(rt), this.__bjV.setTextColor(it), this.__bjU.setWidth(Math.max(0, Math.floor(58 * (b - tt) / (nt - tt)))))) : (this.__bjT.getToolTip().setLabel(r.tr(rr)), this.__bjV.setValue(l), this.__bjU.setWidth(58));
                    break;
                case ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense:
                    h || (a = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Command_Center), this.__bjQ.setEnabled(a != null && a.get_CurrentDamage() == 0), a == null ? this.__bjQ.setToolTipText(r.tr(ku)) : a.get_CurrentDamage() > 0 ? this.__bjQ.setToolTipText(r.tr(lu)) : this.__bjQ.setToolTipText(r.tr(e) + webfrontend.gui.ShortkeyMapper.getKeyDesc(webfrontend.gui.ShortkeyMapper.keys.upgrade)));
                    r.getCurrentBottomOverlay() != r.getUnitRecruitmentOverlay() && r.switchBottomOverlay(r.getUnitRecruitmentOverlay(), ClientLib.Base.EPlacementType.Offense)
            }
            webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.ItemInInventory) && webfrontend.data.ItemEvents.getInstance().getHintTriggeredItemInInventory() && (v = ClientLib.Data.MainData.GetInstance().get_Player(), (v.get_Faction() == ClientLib.Base.EFactionType.GDIFaction && v.get_ScorePoints() >= 606 || v.get_Faction() == ClientLib.Base.EFactionType.NODFaction && v.get_ScorePoints() >= 590) && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.ItemInInventory));
            webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.MaxStorage) && !qx.core.Init.getApplication().getCurrentMenuOverlay() && webfrontend.gui.Util.getMaxedResourcesCount(i) > 0 && (ot = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Construction_Yard), ot && ot.get_CurrentLevel() >= 7 && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.MaxStorage));
            webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.TunnelExits) && (u = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Command_Center), u && u.get_CurrentLevel() >= 12 && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.TunnelExits));
            webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.Relocating) && i.get_LvlBase() >= 7 && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.Relocating);
            webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.Support) && (u = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Support_Art), u || (u = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Support_Ion)), u || (u = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Support_Air)), u && u.get_CurrentLevel() >= 2 && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.Support));
            this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase && webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.MovingInBase) && i.GetNumBuildings() > 20 && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.MovingInBase);
            this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense && (webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.Firehawk) && (i.get_CityUnitsData().HasUnitMdbId(ClientLib.Base.EUnit.GDI_Firehawk) || i.get_CityUnitsData().HasUnitMdbId(ClientLib.Base.EUnit.NOD_Vertigo)) && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.Firehawk), webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.UnitTransport) && i.get_CityUnitsData().HasTransportUnits() && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.UnitTransport), webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.RepairEfficiency) && (y = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Barracks), y = y ? y.get_CurrentLevel() : 0, p = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Factory), p = p ? p.get_CurrentLevel() : 0, w = i.get_CityBuildingsData().GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Airport), w = w ? w.get_CurrentLevel() : 0, o = i.get_CityUnitsData().get_HighestLVlForUnitGroupTypes().d, (o.hasOwnProperty(ClientLib.Data.EUnitGroup.Infantry) && o[ClientLib.Data.EUnitGroup.Infantry] - y >= 3 || o.hasOwnProperty(ClientLib.Data.EUnitGroup.Vehicle) && o[ClientLib.Data.EUnitGroup.Vehicle] - p >= 3 || o.hasOwnProperty(ClientLib.Data.EUnitGroup.Aircraft) && o[ClientLib.Data.EUnitGroup.Aircraft] - w >= 3) && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.RepairEfficiency)));
            this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense && (f = i.get_CityUnitsData(), webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.MinimumRange) && (f.HasUnitMdbId(ClientLib.Base.EUnit.GDI_ArtilleryTank) || f.HasUnitMdbId(ClientLib.Base.EUnit.GDI_ArtilleryInfantry) || f.HasUnitMdbId(ClientLib.Base.EUnit.GDI_ArtilleryAir) || f.HasUnitMdbId(ClientLib.Base.EUnit.NOD_ArtilleryTank) || f.HasUnitMdbId(ClientLib.Base.EUnit.NOD_ArtilleryInfantry) || f.HasUnitMdbId(ClientLib.Base.EUnit.NOD_ArtilleryAir)) && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.MinimumRange), webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.UnitGarrison) && f.HasTransportUnitsDefense() && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.UnitGarrison));
            webfrontend.phe.cnc.Util.shouldShowHint(ClientLib.Config.Main.EHints.Trading) && k == ClientLib.Data.ETradeError.None && g > 1 && webfrontend.data.InfoTracker.getInstance().showHint(ClientLib.Config.Main.EHints.Trading)
        }
        i.get_IsLocked() && this.__bkm != ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense ? this.__bkl.getVisibility() != t && (r.showBottomOverlayLockdownImg(!0), this.__bkl.setVisibility(t), this.__bkS(!1), this.__bkT(!1)) : this.__bkl.getVisibility() == t && (r.showBottomOverlayLockdownImg(!1), this.__bkl.setVisibility(et))
    }
}

function _onToggleArmyFormation() {
    var f = this.__bkD(),
        u, i, t;
    if (f > 0) {
        var n = qx.core.Init.getApplication(),
            r = ClientLib.Data.MainData.GetInstance(),
            e = r.get_Cities();
        n.getPlayArea().getViewMode() == ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase || n.getPlayArea().getViewMode() == ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense || n.getPlayArea().getViewMode() == ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense ? (t = e.get_CurrentOwnCity(), t && (u = !0, t.IsOwnBase() && t.get_HasOutgoingAttack() && (i = r.get_AllianceCombatState().GetCombatByAttackerBaseId(this.__iC.getViewCity()), i != null && (r.get_Combat().set_Id(i.DefenderBaseId), this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker, i.DefenderBaseId, -1, -1, -1), u = !1))), u && (n.getBackgroundArea().closeCityInfo(), n.getPlayArea().setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense, f, 0, 0), ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().SetPosition(0, n.getPlayArea().getHUD().getCombatSetupOffset(ClientLib.Vis.CombatSetup.CombatSetupViewMode.Defense)))) : (t = e.get_CurrentOwnCity(), webfrontend.gui.UtilView.openVisModeInMainWindow(ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense, t.get_Id(), !1))
    }
}

function _onTick() {
    var t = ClientLib.Vis.VisMain.GetInstance(),
        n = t.GetActiveView();
    n != null && this.__bkv(!n.get_VisAreaComplete())
}

function activateSellMode() {
    this.__bjR.setIcon(this.__bjM[webfrontend.gui.PlayArea.PlayAreaHUD.EModeSell]);
    ClientLib.Vis.VisMain.GetInstance().set_MouseMode(webfrontend.gui.PlayArea.PlayAreaHUD.EModeSell)
}

function resetToggleMode() {
    this.__Hk.resetSelection()
}

function isViewModeHUDBuilding() {
    var n = qx.core.Init.getApplication();
    return n.getCurrentBottomOverlay() == n.getTechPlacementOverlay()
}

function _onBase() {
    this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase, ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId(), -1, -1)
}

function _onGdiBenchmark() {
    var u = qx.core.Init.getApplication(),
        f = u.__mainOverlay.playArea,
        r;
    ClientLib.Data.MainData.GetInstance().get_Cities().CreateBenchmark(1);
    var t = ClientLib.Data.MainData.GetInstance().get_Cities(),
        i = t.get_AllCities().d,
        n = null;
    for (r in i) n = i[r];
    n != null && (ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(n.get_Id()), t.SetBenchmarkCityOwnerId(1, ClientLib.Data.MainData.GetInstance().get_Player().get_AccountId()), ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(0), f.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase, 0, -1, -1, 0))
}

function _onNodBenchmark() {
    var u = qx.core.Init.getApplication(),
        f = u.__mainOverlay.playArea,
        r;
    ClientLib.Data.MainData.GetInstance().get_Cities().CreateBenchmark(2);
    var t = ClientLib.Data.MainData.GetInstance().get_Cities(),
        i = t.get_AllCities().d,
        n = null;
    for (r in i) n = i[r];
    n != null && (ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(n.get_Id()), t.SetBenchmarkCityOwnerId(2, ClientLib.Data.MainData.GetInstance().get_Player().get_AccountId()), ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(0), f.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase, 0, -1, -1, 0))
}

function getUIItem(n) {
    var t = this.__bjz.getUIItem(n);
    if (t != null || (t = this.__bjA.getUIItem(n), t != null) || (t = this.__bjB.getUIItem(n), t != null)) return t;
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_BUILDINGMENU:
            return null;
        case ClientLib.Data.Missions.PATH.WDG_UPGRADE:
            return this.__bjQ;
        case ClientLib.Data.Missions.PATH.WDG_BASE:
            return this.__bjH;
        case ClientLib.Data.Missions.PATH.WDG_OFFENSE:
            return this.__bjI;
        case ClientLib.Data.Missions.PATH.WDG_DEFENSE:
            return this.__bjJ;
        case ClientLib.Data.Missions.PATH.WDG_REPAIR:
            return this.__bjO;
        case ClientLib.Data.Missions.PATH.WDG_COMBATSWAPVIEW:
            return this.__bka;
        case ClientLib.Data.Missions.PATH.WDG_MOVING:
            return this.__bjP;
        case ClientLib.Data.Missions.PATH.WDG_TRADE:
            return this.__Ag;
        case ClientLib.Data.Missions.PATH.WDG_SELL:
            return this.__bjR;
        case ClientLib.Data.Missions.PATH.WDG_REPAIRALL:
            return this.__bkr
    }
    return null
}

function onHotKeyDown() {
    !this.__bkn
}

function onHotKeyUp() {
    !this.__bkn
}

function onHotKeyPress(n) {
    var u, t, f, e;
    if (this.__bkn) {
        var o = n.getKeyIdentifier(),
            i = !1,
            r = !0,
            s = ClientLib.Data.MainData.GetInstance().get_Player().get_IsSubstituted(),
            t = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
        if (t != null && (i = t.IsOwnBase(), r = t.get_IsLocked()), u = this.__bjz.onHotKeyPress(n, i, r), u || (u = qx.core.Init.getApplication().getArmySetupAttackBar().onHotKeyPress(n, i, r)), !u) switch (o) {
            case webfrontend.gui.ShortkeyMapper.keys.switchViewUp:
                this.__bkV();
                break;
            case webfrontend.gui.ShortkeyMapper.keys.switchViewDown:
                this.__bkW();
                break;
            case webfrontend.gui.ShortkeyMapper.keys.base:
                i ? (this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense || this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense) && this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase, t.get_Id(), 0, 0) : (this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense && (this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase, t.get_Id(), 0, 0), ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().ScrollToPosition(this.getCombatSetupOffset(ClientLib.Vis.CombatSetup.CombatSetupViewMode.Base))), this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense && (this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase, t.get_Id(), 0, 0), ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().ScrollToPosition(this.getCombatSetupOffset(ClientLib.Vis.CombatSetup.CombatSetupViewMode.AllianceBase))));
                break;
            case webfrontend.gui.ShortkeyMapper.keys.defense:
                i ? (this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase || this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense) && this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense, t.get_Id(), 0, 0) : (this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase && (this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense, t.get_Id(), 0, 0), ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().ScrollToPosition(this.getCombatSetupOffset(ClientLib.Vis.CombatSetup.CombatSetupViewMode.Defense))), this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase && (this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense, t.get_Id(), 0, 0), ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().ScrollToPosition(this.getCombatSetupOffset(ClientLib.Vis.CombatSetup.CombatSetupViewMode.AllianceBaseDefense))));
                break;
            case webfrontend.gui.ShortkeyMapper.keys.offense:
                i && (t = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.__iC.getViewCity()), t != null && t.get_HasOutgoingAttack() ? (f = ClientLib.Data.MainData.GetInstance().get_AllianceCombatState().GetCombatByAttackerBaseId(this.__iC.getViewCity()), f != null && (ClientLib.Data.MainData.GetInstance().get_Combat().set_Id(f.DefenderBaseId), this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker, f.DefenderBaseId, -1, -1, -1))) : (this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase || this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense || this.__bkm == ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender) && this.__iC.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense, t.get_Id(), 0, 0));
                break;
            case webfrontend.gui.ShortkeyMapper.keys.repair:
                !r && i && this.__bjO.isEnabled() && this.__bjO.isVisible() && this.__bjO.execute();
                break;
            case webfrontend.gui.ShortkeyMapper.keys.repairall:
                !r && i && this.__bkr.isVisible() && this.__bkr.isEnabled() && this.__bkr.execute();
                break;
            case webfrontend.gui.ShortkeyMapper.keys.move:
                !r && i && this.__bjP.isEnabled() && this.__bjP.isVisible() && this.__bjP.execute();
                break;
            case webfrontend.gui.ShortkeyMapper.keys.upgrade:
                !r && i && this.__bjQ.isEnabled() && this.__bjQ.isVisible() && this.__bjQ.execute();
                break;
            case webfrontend.gui.ShortkeyMapper.keys.sell:
                !r && i && this.__bjR.isEnabled() && this.__bjR.isVisible() && (e = s && !webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SUBSTITUTIONALLOWSELL), e || this.__bjR.execute());
                break;
            case webfrontend.gui.ShortkeyMapper.keys.trade:
                !r && i && this.__Ag.isEnabled() && this.__Ag.isVisible() && this.__Ag.execute()
        }
    }
}