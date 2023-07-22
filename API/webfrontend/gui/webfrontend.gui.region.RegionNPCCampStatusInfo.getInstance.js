function onTick() {
    var n;
    if (this._setImpactTimer(this._selectedObject), this._setCombatState(this._selectedObject, !1), this._selectedObject.get_IsItemCamp()) {
        if (n = this._selectedObject.get_ItemCampEndStep(), n != -1) {
            var t = ClientLib.Data.MainData.GetInstance().get_Time(),
                r = t.GetServerStep(),
                u = webfrontend.phe.cnc.Util.getTimespanString(t.GetTimeSpan(Math.max(0, n - r)), !1);
            this._lblItemInfo.setValue(this.tr(h, u))
        } else this._lblItemInfo.setValue(this.tr(p));
        this._cntItemInfo.show()
    } else this._cntItemInfo.exclude();
    this._setAttackCosts();
    var i = ClientLib.Data.MainData.GetInstance().get_Player(),
        f = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(i.GetCommandPointCount(), !0),
        e = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(i.GetCommandPointMaxStorage(), !0);
    this._lblCommandPoints.setValue(e.toString());
    this._lblCommandPointsCurrent.setValue(f.toString())
}

function onCitiesChange() {
    var bt, kt, pt, yt, h, p;
    this._icnFaction.setSource(webfrontend.phe.cnc.gui.util.Images.getFactionIcon(this._selectedObject.get_PlayerFaction()));
    this._lblNPCBaseLevel.setValue(this.tr(tt, r + this._selectedObject.get_BaseLevel().toString() + t));
    this._lblNPCBaseCoordinates.setCoordinates(this._selectedObject.get_RawX(), this._selectedObject.get_RawY(), ht + webfrontend.theme.Color.colors[rt] + st + webfrontend.phe.cnc.gui.util.Numbers.formatCoordinates(this._selectedObject.get_RawX(), this._selectedObject.get_RawY()) + t);
    this._lblNPCSurroundingBases.setValue(r + ClientLib.Data.MainData.GetInstance().get_World().SurroundedEnemies(this._selectedObject.get_RawX(), this._selectedObject.get_RawY()).toString() + t);
    this._lblNPCAlliance.setAlliance(this.tr(c), webfrontend.gui.widgets.AllianceLabel.ESpecialAllianceIdMutants);
    switch (this._selectedObject.get_CampType()) {
        case ClientLib.Data.WorldSector.WorldObjectNPCCamp.ECampType.Beginner:
        case ClientLib.Data.WorldSector.WorldObjectNPCCamp.ECampType.Random:
            this._lblTitle.setValue(this.tr(g));
            this._selectedObject.get_IsTiberium() ? this._lblIntelText.setValue(i + this.tr(s) + n) : this._lblIntelText.setValue(i + this.tr(o) + n);
            break;
        case ClientLib.Data.WorldSector.WorldObjectNPCCamp.ECampType.Cluster:
            this._lblTitle.setValue(this.tr(ut));
            this._selectedObject.get_IsTiberium() ? this._lblIntelText.setValue(i + this.tr(a) + n) : this._lblIntelText.setValue(i + this.tr(w) + n);
            break;
        case ClientLib.Data.WorldSector.WorldObjectNPCCamp.ECampType.Event:
            var ni = webfrontend.phe.cnc.Util.getTimespanString(ClientLib.Data.MainData.GetInstance().get_Player().GetChallengeEventLootContingent(ClientLib.Base.EResourceType.RepairChargeOffense_RewardsOnly)),
                ti = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(ClientLib.Data.MainData.GetInstance().get_Player().GetChallengeEventLootContingent(ClientLib.Base.EResourceType.CommandPoints)),
                wt = this.tr(k);
            ClientLib.Data.MainData.GetInstance().get_Challenge().getCurrentChallengeId() > 0 && (bt = webfrontend.phe.cnc.Util.getTimespanString(ClientLib.Data.MainData.GetInstance().get_Challenge().GetCustomValue(ClientLib.Data.Challenge.Challenge.ECCVK_LootLimit_OffenseRepair_Seconds)), kt = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(ClientLib.Data.MainData.GetInstance().get_Challenge().GetCustomValue(ClientLib.Data.Challenge.Challenge.ECCVK_LootLimit_CommandPoints)), wt = this.tr(ft, bt, kt));
            this._lblTitle.setValue(this.tr(at));
            this._lblIntelText.setValue(i + this.tr(d) + n + f + wt + n + f + this.tr(ot, ni, ti) + n)
    }
    if (this._selectedObject.get_HasIncommingAttack() ? (this._setAttackContainerInfo(this._selectedObject), this._cntUnderAttack.setVisibility(e)) : (this._cntUnderAttack.setVisibility(u), this._cntAttackerInfo.setVisibility(u)), this._lblBaseCondition.setValue(this.tr(v, r + this._selectedObject.get_ConditionBuildings() + t)), pt = this._selectedObject.get_ConditionDefense(), pt == -1 ? this._lblDefenseCondition.setValue(this.tr(y, vt)) : this._lblDefenseCondition.setValue(this.tr(l, r + pt + t)), yt = !1, ClientLib.Data.MainData.GetInstance().get_Server().get_CombatUseMoral() && (h = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(), h != null)) {
        var ii = ClientLib.Vis.VisMain.GetInstance().get_Region().get_GridWidth(),
            ri = ClientLib.Vis.VisMain.GetInstance().get_Region().get_GridHeight(),
            dt = h.get_X() - this._selectedObject.get_X() / ii,
            gt = h.get_Y() - this._selectedObject.get_Y() / ri,
            ui = Math.sqrt(dt * dt + gt * gt),
            fi = ClientLib.Data.MainData.GetInstance().get_Server().get_MaxBaseMoveDistance() + ClientLib.Data.MainData.GetInstance().get_Server().get_MaxAttackDistance();
        ui <= fi && (p = ClientLib.Base.Util.GetMoralSignType(h.get_LvlOffense(), this._selectedObject.get_BaseLevelFloat()), p.k == 1 ? (this._imgMoralDescription.setSource(lt), this._lblMoralDescription.setValue(this.tr(nt, p.v)), this._lblMoralDescription.setTextColor(b), yt = !0) : p.k == 2 && (this._imgMoralDescription.setSource(ct), this._lblMoralDescription.setValue(this.tr(et, p.v)), this._lblMoralDescription.setTextColor(it), yt = !0))
    }
    this._cntMoralDescription.setVisibility(yt ? e : u);
    this._setAttackCosts()
}
qx.ui.co _cntHeaderntainer.Composite[919 - 0] qx.ui.ba _icnFactionsic.Image[920 - 0] qx.ui.ba _lblTitlesic.Label[921 - 0] qx.ui.co _cntCommandPointsntainer.Composite[922 - 0] qx.ui.ba _lblCommandPointssic.Label[924 - 0] qx.ui.co _cntAttackCostsntainer.Composite[927 - 0] qx.ui.ba _lblCommandPointsCostssic.Label[928 - 0] qx.ui.ba _lblCommandPointsCurrentsic.Label[923 - 0] qx.ui.co _cntPlayerBaseInformationntainer.Composite[932 - 0] webfront _lblPlayerBaseNameend.gui.widgets.BaseLabel[934 - 0] qx.ui.ba _lblPlayerBaseLevelsic.Label[935 - 0] webfront _lblPlayerBaseCoordinatesend.gui.widgets.CoordinatesLabel[936 - 0] qx.ui.ba _lblSurroundingBasessic.Label[940 - 0] webfront _lblPlayerBaseOwnerend.gui.widgets.PlayerLabel[943 - 0] webfront _lblPlayerAllianceend.gui.widgets.AllianceLabel[946 - 0] qx.ui.co _cntNPCBaseInformationntainer.Composite[951 - 0] webfront _lblNPCAllianceend.gui.widgets.AllianceLabel[953 - 0] qx.ui.ba _lblNPCBaseLevelsic.Label[956 - 0] webfront _lblNPCBaseCoordinatesend.gui.widgets.CoordinatesLabel[957 - 0] qx.ui.ba _lblNPCSurroundingBasessic.Label[961 - 0] qx.ui.co _cntMoralDescriptionntainer.Composite[967 - 0] qx.ui.ba _imgMoralDescriptionsic.Image[968 - 0] qx.ui.ba _lblMoralDescriptionsic.Label[969 - 0] qx.ui.co _cntAttackDescriptionntainer.Composite[970 - 0] qx.ui.ba _lblAttackDescriptionsic.Label[971 - 0] qx.ui.ba _lblAttackDescriptionTypesic.Label[973 - 0] qx.ui.ba _lblAttackDescriptionCostssic.Label[974 - 0] qx.ui.ba _lblAttackDescriptionMaxLootsic.Label[976 - 0] qx.ui.ba _lblAttackDescriptionMaxLootValuessic.Label[977 - 0] qx.ui.co _cntIntelntainer.Composite[979 - 0] qx.ui.ba _lblIntelTextsic.Label[981 - 0] qx.ui.ba _lblAlreadyWonMessagesic.Label[980 - 0] qx.ui.co _cntItemInfontainer.Composite[982 - 0] qx.ui.ba _lblItemInfosic.Label[983 - 0] qx.ui.co _cntEndgameRevengeWarningntainer.Composite[994 - 0] qx.ui.co _cntVpLootInfontainer.Composite[987 - 0] qx.ui.ba _lblVpLootAmountsic.Label[988 - 0] qx.ui.ba _icnVpLootInfosic.Image[989 - 0] qx.ui.co _cntVpMissingAlliancentainer.Composite[992 - 0] qx.ui.ba _lblvpMissingAlliancesic.Label[993 - 0] qx.ui.co _cntBaseStatusntainer.Composite[996 - 0] qx.ui.co _cntUnderCooldownntainer.Composite[997 - 0] qx.ui.ba _lblMoveCooldownsic.Label[998 - 0] qx.ui.ba _lblMoveRestrictionsic.Label[1000 - 0] qx.ui.ba _lblRecoverysic.Label[999 - 0] qx.ui.co _cntUnderAttackntainer.Composite[1009 - 0] qx.ui.ba _lblUnderAttackTitlesic.Label[1010 - 0] qx.ui.ba _lblCombatLockdownTextsic.Label[1011 - 0] qx.ui.ba _lblCombatLockdownTimersic.Label[1012 - 0] qx.ui.co _cntBaseAlertedntainer.Composite[1015 - 0] qx.ui.ba _lblAlertedStartsic.Label[1016 - 0] qx.ui.ba _lblAlertedEndsic.Label[1017 - 0] qx.ui.ba _lblNoobProtectionsic.Label[1022 - 0] qx.ui.ba _lblErrorAttackBaseCCNotBuildsic.Label[1023 - 0] qx.ui.co _cntBaseConditionntainer.Composite[1024 - 0] qx.ui.ba _lblBaseConditionsic.Label[1025 - 0] qx.ui.ba _lblDefenseConditionsic.Label[1026 - 0] qx.ui.ba _lblDefenseRepairFinishedsic.Label[1018 - 0] qx.ui.co _cntImpactTimerntainer.Composite[1003 - 0] qx.ui.ba _lblImpactTimerDescsic.Label[1004 - 0] qx.ui.ba _lblImpactTimerPreTextsic.Label[1005 - 0] qx.ui.ba _lblImpactTimersic.Label[1006 - 0] qx.ui.co _cntMaintenancentainer.Composite[1029 - 0] webfront _lblMaintenanceBarend.gui.widgets.AppointmentProgressBar[1032 - 0] qx.ui.co _cntAttackerInfontainer.Composite[1042 - 0] webfront _valAttackerPlayerNameend.gui.widgets.PlayerLabel[1044 - 0] qx.ui.ba _lblAttackerAllianceLabelsic.Label[1047 - 0] webfront _valAttackerAllianceNameend.gui.widgets.AllianceLabel[1048 - 0] webfront _lblAttackerBaseNameend.gui.widgets.BaseLabel[1054 - 0] qx.ui.ba _lblAttackerBaseLevelsic.Label[1055 - 0] webfront _valAttackerBaseCoordinatsend.gui.widgets.CoordinatesLabel[1056 - 0] qx.ui.co _cntSupportWeaponntainer.Composite[1062 - 0] qx.ui.ba _iconSupportsic.Image[1064 - 0] qx.ui.ba _lblSupportStatussic.Label[1066 - 0] qx.ui.ba _lblSupportBuildingsic.Label[1067 - 0] qx.ui.ba _lblSupportDamageInfsic.Label[1069 - 0] qx.ui.ba _lblSupportDamageTanksic.Label[1070 - 0] qx.ui.ba _lblSupportDamageAirsic.Label[1071 - 0] qx.ui.co _cntIncommingSupportWeaponsntainer.Composite[1076 - 0] qx.ui.ba _lblIncomingSupportsic.Label[1077 - 0] qx.ui.ba _lblIncomingSupportType1sic.Label[1078 - 0] qx.ui.ba _lblIncomingSupportType2sic.Label[1079 - 0] qx.ui.ba _lblIncomingSupportType3sic.Label[1080 - 0] qx.ui.co _cntEndGameInfosDebuffntainer.Composite[963 - 0] qx.ui.ba _lblEndGameDebuffsic.Label[964 - 0] qx.ui.ba _lblEndGameDebuffTimersic.Label[965 - 0] qx.ui.co _cntAdditionalInfosntainer.Composite[1082 - 0]