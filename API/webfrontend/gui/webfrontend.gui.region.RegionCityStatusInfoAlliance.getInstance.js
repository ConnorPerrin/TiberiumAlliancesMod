function onCitiesChange() {
    var rt = ClientLib.Data.MainData.GetInstance().get_Time(),
        ut, ft, it;
    if (this._icnFaction.setSource(webfrontend.phe.cnc.gui.util.Images.getFactionIcon(this._selectedObject.get_PlayerFaction())), this._lblPlayerBaseName.setBase(f + webfrontend.theme.Color.colors[u] + e + this._selectedObject.get_Name() + n, this._selectedObject.get_Id()), this._lblPlayerBaseOwner.setPlayer(f + webfrontend.theme.Color.colors[u] + e + this._selectedObject.get_PlayerName() + n, this._selectedObject.get_PlayerId()), this._lblPlayerBaseLevel.setValue(this.tr(p, t + this._selectedObject.get_BaseLevel().toString() + n)), this._lblPlayerBaseCoordinates.setCoordinates(this._selectedObject.get_RawX(), this._selectedObject.get_RawY(), f + webfrontend.theme.Color.colors[u] + e + webfrontend.phe.cnc.gui.util.Numbers.formatCoordinates(this._selectedObject.get_RawX(), this._selectedObject.get_RawY()) + n), this._lblSurroundingBases.setValue(t + ClientLib.Data.MainData.GetInstance().get_World().SurroundedEnemies(this._selectedObject.get_RawX(), this._selectedObject.get_RawY()).toString() + n), this._lblPlayerAlliance.setAlliance(f + webfrontend.theme.Color.colors[u] + e + this._selectedObject.get_AllianceName() + n, this._selectedObject.get_AllianceId()), this._selectedObject.get_AllianceName() == b && this._lblPlayerAlliance.setNoAlliance(), this._cntUnderAttack.setVisibility(i), this._cntAttackerInfo.setVisibility(i), this._cntBaseAlerted.setVisibility(i), this._cntUnderCooldown.setVisibility(i), this._selectedObject.get_isLocked() ? (this._setAttackContainerInfo(this._selectedObject), this._cntUnderAttack.setVisibility(r)) : this._selectedObject.get_isAlerted() ? (it = webfrontend.phe.cnc.Util.getDateTimeString(rt.GetJSStepTime(this._selectedObject.get_SupportAlertStartStep())), this._lblAlertedStart.setValue(this.tr(d, t + it + n)), it = webfrontend.phe.cnc.Util.getDateTimeString(rt.GetJSStepTime(this._selectedObject.get_SupportAlertEndStep())), this._lblAlertedEnd.setValue(this.tr(y, t + it + n)), this._cntBaseAlerted.setVisibility(r)) : (this._selectedObject.get_hasCooldown() || this._selectedObject.get_hasRecovery() || this._selectedObject.get_hasMoveRestriction()) && this._cntUnderCooldown.setVisibility(r), this._lblBaseCondition.setValue(this.tr(s, t + this._selectedObject.get_ConditionBuildings() + n)), ut = this._selectedObject.get_ConditionDefense(), ut == -1 ? this._lblDefenseCondition.setValue(this.tr(h, c)) : this._lblDefenseCondition.setValue(this.tr(o, t + ut + n)), this._selectedObject.get_isAlerted() && (ft = rt.GetTimespanString(this._selectedObject.get_SupportAlertEndStep(), rt.GetServerStep()), this._lblDefenseRepairFinished.setValue(this.tr(g, t + ft + n))), this._selectedObject.get_isProtected() ? (it = webfrontend.phe.cnc.Util.getDateTimeString(rt.GetJSStepTime(this._selectedObject.get_ProtectionEndStep())), this._lblNoobProtection.setValue(this.tr(w, t + it + n)), this._lblNoobProtection.setVisibility(r)) : this._lblNoobProtection.setVisibility(i), this._selectedObject.get_hasRecovery() ? (it = webfrontend.phe.cnc.Util.getDateTimeString(rt.GetJSStepTime(this._selectedObject.get_RecoveryEndStep())), this._lblRecovery.setValue(this.tr(nt, t + it + n)), this._lblRecovery.setVisibility(r)) : this._lblRecovery.setVisibility(i), this._selectedObject.get_IsTerminalBase() && !ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer()) {
        this._lblTitle.setValue(this.tr(v));
        var et = ClientLib.Data.MainData.GetInstance().get_Server(),
            ot = webfrontend.phe.cnc.Util.getShortTimespanString(et.get_HubCenterClaimSteps(), !1),
            st = webfrontend.phe.cnc.Util.getTimespanString(et.get_HubCenterDebuffIncreaseSteps(), !1, !1);
        this._lblIntelText.setValue(tt + this.tr(l, ot, st) + a);
        this._cntIntel.show()
    } else this._lblTitle.setValue(this.tr(k)), this._cntIntel.exclude();
    this._setAttackCosts()
}

function onTick() {
    var i;
    this._setMoveState(this._selectedObject);
    this._setCombatState(this._selectedObject, !0);
    this._setAlertedState(this._selectedObject);
    this._setImpactTimer(this._selectedObject);
    this._setAttackCosts();
    this._lblBaseCondition.setValue(this.tr(s, t + this._selectedObject.get_ConditionBuildings() + n));
    i = this._selectedObject.get_ConditionDefense();
    i == -1 ? this._lblDefenseCondition.setValue(this.tr(h, c)) : this._lblDefenseCondition.setValue(this.tr(o, t + i + n));
    !this._selectedObject.get_SupportWeapon() != null && this._setSupportContainer();
    var r = ClientLib.Data.MainData.GetInstance().get_Player(),
        u = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(r.GetCommandPointCount(), !0),
        f = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(r.GetCommandPointMaxStorage(), !0);
    this._lblCommandPoints.setValue(f.toString());
    this._lblCommandPointsCurrent.setValue(u.toString())
}
qx.ui.co _cntHeaderntainer.Composite[337 - 0] qx.ui.ba _icnFactionsic.Image[338 - 0] qx.ui.ba _lblTitlesic.Label[339 - 0] qx.ui.co _cntCommandPointsntainer.Composite[340 - 0] qx.ui.ba _lblCommandPointssic.Label[342 - 0] qx.ui.co _cntAttackCostsntainer.Composite[345 - 0] qx.ui.ba _lblCommandPointsCostssic.Label[346 - 0] qx.ui.ba _lblCommandPointsCurrentsic.Label[341 - 0] qx.ui.co _cntPlayerBaseInformationntainer.Composite[350 - 0] webfront _lblPlayerBaseNameend.gui.widgets.BaseLabel[352 - 0] qx.ui.ba _lblPlayerBaseLevelsic.Label[353 - 0] webfront _lblPlayerBaseCoordinatesend.gui.widgets.CoordinatesLabel[354 - 0] qx.ui.ba _lblSurroundingBasessic.Label[358 - 0] webfront _lblPlayerBaseOwnerend.gui.widgets.PlayerLabel[361 - 0] webfront _lblPlayerAllianceend.gui.widgets.AllianceLabel[364 - 0] qx.ui.co _cntNPCBaseInformationntainer.Composite[369 - 0] webfront _lblNPCAllianceend.gui.widgets.AllianceLabel[371 - 0] qx.ui.ba _lblNPCBaseLevelsic.Label[374 - 0] webfront _lblNPCBaseCoordinatesend.gui.widgets.CoordinatesLabel[375 - 0] qx.ui.ba _lblNPCSurroundingBasessic.Label[379 - 0] qx.ui.co _cntMoralDescriptionntainer.Composite[385 - 0] qx.ui.ba _imgMoralDescriptionsic.Image[386 - 0] qx.ui.ba _lblMoralDescriptionsic.Label[387 - 0] qx.ui.co _cntAttackDescriptionntainer.Composite[388 - 0] qx.ui.ba _lblAttackDescriptionsic.Label[389 - 0] qx.ui.ba _lblAttackDescriptionTypesic.Label[391 - 0] qx.ui.ba _lblAttackDescriptionCostssic.Label[392 - 0] qx.ui.ba _lblAttackDescriptionMaxLootsic.Label[394 - 0] qx.ui.ba _lblAttackDescriptionMaxLootValuessic.Label[395 - 0] qx.ui.co _cntIntelntainer.Composite[397 - 0] qx.ui.ba _lblIntelTextsic.Label[399 - 0] qx.ui.ba _lblAlreadyWonMessagesic.Label[398 - 0] qx.ui.co _cntItemInfontainer.Composite[400 - 0] qx.ui.ba _lblItemInfosic.Label[401 - 0] qx.ui.co _cntEndgameRevengeWarningntainer.Composite[412 - 0] qx.ui.co _cntVpLootInfontainer.Composite[405 - 0] qx.ui.ba _lblVpLootAmountsic.Label[406 - 0] qx.ui.ba _icnVpLootInfosic.Image[407 - 0] qx.ui.co _cntVpMissingAlliancentainer.Composite[410 - 0] qx.ui.ba _lblvpMissingAlliancesic.Label[411 - 0] qx.ui.co _cntBaseStatusntainer.Composite[414 - 0] qx.ui.co _cntUnderCooldownntainer.Composite[415 - 0] qx.ui.ba _lblMoveCooldownsic.Label[416 - 0] qx.ui.ba _lblMoveRestrictionsic.Label[418 - 0] qx.ui.ba _lblRecoverysic.Label[417 - 0] qx.ui.co _cntUnderAttackntainer.Composite[427 - 0] qx.ui.ba _lblUnderAttackTitlesic.Label[428 - 0] qx.ui.ba _lblCombatLockdownTextsic.Label[429 - 0] qx.ui.ba _lblCombatLockdownTimersic.Label[430 - 0] qx.ui.co _cntBaseAlertedntainer.Composite[433 - 0] qx.ui.ba _lblAlertedStartsic.Label[434 - 0] qx.ui.ba _lblAlertedEndsic.Label[435 - 0] qx.ui.ba _lblNoobProtectionsic.Label[440 - 0] qx.ui.ba _lblErrorAttackBaseCCNotBuildsic.Label[441 - 0] qx.ui.co _cntBaseConditionntainer.Composite[442 - 0] qx.ui.ba _lblBaseConditionsic.Label[443 - 0] qx.ui.ba _lblDefenseConditionsic.Label[444 - 0] qx.ui.ba _lblDefenseRepairFinishedsic.Label[436 - 0] qx.ui.co _cntImpactTimerntainer.Composite[421 - 0] qx.ui.ba _lblImpactTimerDescsic.Label[422 - 0] qx.ui.ba _lblImpactTimerPreTextsic.Label[423 - 0] qx.ui.ba _lblImpactTimersic.Label[424 - 0] qx.ui.co _cntMaintenancentainer.Composite[447 - 0] webfront _lblMaintenanceBarend.gui.widgets.AppointmentProgressBar[450 - 0] qx.ui.co _cntAttackerInfontainer.Composite[460 - 0] webfront _valAttackerPlayerNameend.gui.widgets.PlayerLabel[462 - 0] qx.ui.ba _lblAttackerAllianceLabelsic.Label[465 - 0] webfront _valAttackerAllianceNameend.gui.widgets.AllianceLabel[466 - 0] webfront _lblAttackerBaseNameend.gui.widgets.BaseLabel[472 - 0] qx.ui.ba _lblAttackerBaseLevelsic.Label[473 - 0] webfront _valAttackerBaseCoordinatsend.gui.widgets.CoordinatesLabel[474 - 0] qx.ui.co _cntSupportWeaponntainer.Composite[480 - 0] qx.ui.ba _iconSupportsic.Image[482 - 0] qx.ui.ba _lblSupportStatussic.Label[484 - 0] qx.ui.ba _lblSupportBuildingsic.Label[485 - 0] qx.ui.ba _lblSupportDamageInfsic.Label[487 - 0] qx.ui.ba _lblSupportDamageTanksic.Label[488 - 0] qx.ui.ba _lblSupportDamageAirsic.Label[489 - 0] qx.ui.co _cntIncommingSupportWeaponsntainer.Composite[494 - 0] qx.ui.ba _lblIncomingSupportsic.Label[495 - 0] qx.ui.ba _lblIncomingSupportType1sic.Label[496 - 0] qx.ui.ba _lblIncomingSupportType2sic.Label[497 - 0] qx.ui.ba _lblIncomingSupportType3sic.Label[498 - 0] qx.ui.co _cntEndGameInfosDebuffntainer.Composite[381 - 0] qx.ui.ba _lblEndGameDebuffsic.Label[382 - 0] qx.ui.ba _lblEndGameDebuffTimersic.Label[383 - 0] qx.ui.co _cntAdditionalInfosntainer.Composite[500 - 0]