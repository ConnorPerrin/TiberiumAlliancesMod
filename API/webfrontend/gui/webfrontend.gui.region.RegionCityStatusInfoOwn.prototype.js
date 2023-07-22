function setObject(n) {
    this._selectedObject = n;
    this._cntEndgameRevengeWarning.setVisibility(this._selectedObject.get_VisObjectType() === ClientLib.Vis.VisObject.EObjectType.RegionCityType && this._selectedObject.get_IsEndgameRevengeTarget() ? uf : nu);
    this.onCitiesChange();
    this.onTick()
}

function _setAttackCosts() {
    var p = ClientLib.Data.MainData.GetInstance().get_Player(),
        r = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(),
        i = this._selectedObject.get_PlayerFaction(),
        d = Math.floor(p.GetCommandPointCount()),
        u = this._selectedObject.get_RawX(),
        f = this._selectedObject.get_RawY(),
        l, v;
    this._selectedObject.get_VisObjectType() === ClientLib.Vis.VisObject.EObjectType.RegionHubCenter && (l = this._selectedObject.GetClosestAttackField(r.get_X(), r.get_Y()), u = l[0], f = l[1]);
    var e = Math.floor(r.CalculateAttackCommandPointCostToCoord(u, f, this._selectedObject.get_PlayerFaction() === ClientLib.Base.EFactionType.GDIFaction || this._selectedObject.get_PlayerFaction() === ClientLib.Base.EFactionType.NODFaction, !1)),
        w = Math.floor(r.CalculateAttackCommandPointCostToCoord(u, f, this._selectedObject.get_PlayerFaction() === ClientLib.Base.EFactionType.GDIFaction || this._selectedObject.get_PlayerFaction() === ClientLib.Base.EFactionType.NODFaction, !0)),
        a = ClientLib.Data.MainData.GetInstance().get_World().CheckAttackBaseRegion(u, f);
    if (a === ClientLib.Data.EAttackBaseResult.FailInsufficientCommandPoints) {
        if (v = p.PredictCommandPointStepAtValue(e), v > 0) {
            var b = ClientLib.Data.MainData.GetInstance().get_Time(),
                g = Math.max(0, b.GetTimeSpan(v) - b.GetServerStep()),
                nt = webfrontend.phe.cnc.Util.getTimespanString(g, !1);
            this._lblAttackDescription.setValue(this.tr(tt, r.get_Name(), nt))
        } else this._lblAttackDescription.setValue(this.tr(ne, r.get_Name()));
        this._lblAttackDescription.setTextColor(o);
        this._lblCommandPointsCurrent.setTextColor(o)
    } else this._lblAttackDescription.setValue(is + webfrontend.phe.cnc.gui.region.Messages.getAttackMessage(a, r) + c), this._lblCommandPointsCurrent.setTextColor(s), this._lblAttackDescription.setTextColor(s);
    this._lblCommandPointsCosts.setValue(w === e ? webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(e).toString() : te + webfrontend.theme.Color.colors[li] + lu + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(w).toString() + cr + ns + webfrontend.theme.Color.colors[fu] + cu + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(e).toString() + ce);
    this._lblCommandPointsCurrent.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(d).toString());
    var k = 0,
        y = 0,
        h = ClientLib.Data.MainData.GetInstance().get_Server().get_UsesRebalancingI(),
        it = ClientLib.Data.MainData.GetInstance().get_World().GetTerritoryTypeByCoordinates(u, f);
    k = h && (i === ClientLib.Base.EFactionType.GDIFaction || i === ClientLib.Base.EFactionType.NODFaction) ? ClientLib.Data.MainData.GetInstance().get_Server().get_PvPCombatCostMinimum() : ClientLib.Data.MainData.GetInstance().get_Server().get_CombatCostMinimum();
    switch (it) {
        case ClientLib.Data.ETerritoryType.Alliance:
        case ClientLib.Data.ETerritoryType.Own:
            this._lblAttackDescriptionType.setValue(this.tr(oi));
            y = h && (i === ClientLib.Base.EFactionType.GDIFaction || i === ClientLib.Base.EFactionType.NODFaction) ? ClientLib.Data.MainData.GetInstance().get_Server().get_PvPCombatCostPerField() : ClientLib.Data.MainData.GetInstance().get_Server().get_CombatCostPerField();
            break;
        default:
            this._lblAttackDescriptionType.setValue(this.tr(to));
            y = h && (i === ClientLib.Base.EFactionType.GDIFaction || i === ClientLib.Base.EFactionType.NODFaction) ? ClientLib.Data.MainData.GetInstance().get_Server().get_PvPCombatCostPerFieldOutsideTerritory() : ClientLib.Data.MainData.GetInstance().get_Server().get_CombatCostPerFieldOutsideTerritory()
    }
    h && (i === ClientLib.Base.EFactionType.GDIFaction || i === ClientLib.Base.EFactionType.NODFaction) && this._lblAttackDescriptionType.setValue(this.tr(su));
    this._lblAttackDescriptionCosts.setValue(this.tr(hr, t + k + n, t + y + n));
    a === ClientLib.Data.EAttackBaseResult.OK ? this._lblAttackDescription.setTextColor(s) : this._lblAttackDescription.setTextColor(o)
}

function _setSupportContainer() {
    var o = this._selectedObject.get_SupportData(),
        i = this._selectedObject.get_SupportWeapon(),
        tt, p;
    if (o !== null && i !== null) {
        var r = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(),
            b = i.i[v],
            s = !1;
        if (!r.get_IsGhostMode() && !r.get_isProtected()) {
            s = !0;
            var u = this._selectedObject.get_SupportWeaponStatus(),
                c = r.get_isAlerted(),
                k = !((u.Status & ClientLib.Vis.Region.ESupportWeaponStatus.OutOfRange) === ClientLib.Vis.Region.ESupportWeaponStatus.OutOfRange),
                a = (u.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Destroyed) === ClientLib.Vis.Region.ESupportWeaponStatus.Destroyed,
                f = (u.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Dedicated) === ClientLib.Vis.Region.ESupportWeaponStatus.Dedicated,
                nt = !0;
            (c || f) && k && !a && (u.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Calibrating) === ClientLib.Vis.Region.ESupportWeaponStatus.Calibrating && (nt = !1);
            this._selectedObject.IsOwnBase() || c || f || (s = !1);
            b = k && !a ? nt ? f ? i.i[d] : c ? i.i[d] : i.i[v] : i.i[ki] : a ? i.i[kt] : i.i[w];
            u.Status === ClientLib.Vis.Region.ESupportWeaponStatus.Fail ? this._lblSupportStatus.setValue(this.tr(et, t + r.get_Name() + n)) : (u.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Destroyed) === ClientLib.Vis.Region.ESupportWeaponStatus.Destroyed ? this._lblSupportStatus.setValue(this.tr(ht, t + r.get_Name() + n)) : (u.Status & ClientLib.Vis.Region.ESupportWeaponStatus.OutOfRange) === ClientLib.Vis.Region.ESupportWeaponStatus.OutOfRange ? this._lblSupportStatus.setValue(this.tr(pt, t + r.get_Name() + n)) : (u.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Calibrating) === ClientLib.Vis.Region.ESupportWeaponStatus.Calibrating ? (tt = ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep(), p = webfrontend.phe.cnc.Util.getTimespanString(ClientLib.Data.MainData.GetInstance().get_Time().GetTimeSpan(Math.max(0, u.CalibrationEndStep) - tt), !1), f ? this._lblSupportStatus.setValue(this.tr(g, t + r.get_SupportDedicatedBaseName() + n, t + p + n)) : this._lblSupportStatus.setValue(this.tr(g, t + r.get_Name() + n, t + p + n))) : (u.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Ready) === ClientLib.Vis.Region.ESupportWeaponStatus.Ready && (f ? this._lblSupportStatus.setValue(this.tr(y, t + r.get_SupportDedicatedBaseName() + n)) : this._lblSupportStatus.setValue(this.tr(y, t + r.get_Name() + n)))
        }
        this._lblSupportStatus.setVisibility(s ? l : h);
        this._iconSupport.setSource(wo + b + ti);
        this._lblSupportBuilding.setValue(this.tr(we, t + i.dn + n, t + o.get_Level() + n, t + o.get_Magnitude() + n));
        this._lblSupportDamageInf.setValue(t + i.pi.toString() + e);
        this._lblSupportDamageTank.setValue(t + i.pv.toString() + e);
        this._lblSupportDamageAir.setValue(t + i.pa.toString() + e)
    } else this._cntSupportWeapon.exclude()
}

function _setIncomingSupportContainer() {
    var a, i, r;
    this._dedicatedWeapons = ClientLib.Data.MainData.GetInstance().get_CitiesSupport().GetSupportWeaponCount(this._selectedObject.get_Id());
    this._allianceWeapons = ClientLib.Data.MainData.GetInstance().get_AllianceSupportState().GetSupportWeaponCount();
    var u = 0,
        f = 0,
        e = 0,
        o = 0,
        s = 0,
        h = 0,
        l = this._selectedObject.get_SupportWeaponStatus(),
        c = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
    if (!c.get_IsGhostMode() && !c.get_isAlerted() && !c.get_isProtected) {
        var v = (l.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Destroyed) === ClientLib.Vis.Region.ESupportWeaponStatus.Destroyed,
            y = (l.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Dedicated) === ClientLib.Vis.Region.ESupportWeaponStatus.Dedicated,
            p = !((l.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Calibrating) === ClientLib.Vis.Region.ESupportWeaponStatus.Calibrating);
        if (!v && y && c.get_SupportDedicatedBaseId() === 0)
            if (a = this._selectedObject.get_SupportData(), p) switch (a.get_Type()) {
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.GDIFaction):
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.NODFaction):
                    u++;
                    break;
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.GDIFaction):
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.NODFaction):
                    e++;
                    break;
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.GDIFaction):
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.NODFaction):
                    f++
            } else switch (a.get_Type()) {
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.GDIFaction):
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.NODFaction):
                    o++;
                    break;
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.GDIFaction):
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.NODFaction):
                    h++;
                    break;
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.GDIFaction):
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.NODFaction):
                    s++
            }
    }
    for (i in this._dedicatedWeapons.d) switch (i) {
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.GDIFaction).toString():
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.NODFaction).toString():
            u += this._dedicatedWeapons.d[i][0];
            o += this._dedicatedWeapons.d[i][1];
            break;
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.GDIFaction).toString():
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.NODFaction).toString():
            f += this._dedicatedWeapons.d[i][0];
            s += this._dedicatedWeapons.d[i][1];
            break;
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.GDIFaction).toString():
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.NODFaction).toString():
            e += this._dedicatedWeapons.d[i][0];
            h += this._dedicatedWeapons.d[i][1]
    }
    if (this._selectedObject.get_isAlerted())
        for (r in this._allianceWeapons.d) switch (r) {
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.GDIFaction).toString():
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.NODFaction).toString():
                u = u + this._allianceWeapons.d[r][0];
                o = o + this._allianceWeapons.d[r][1];
                break;
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.GDIFaction).toString():
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.NODFaction).toString():
                f = f + this._allianceWeapons.d[r][0];
                s = s + this._allianceWeapons.d[r][1];
                break;
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.GDIFaction).toString():
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.NODFaction).toString():
                e = e + this._allianceWeapons.d[r][0];
                h = h + this._allianceWeapons.d[r][1]
        }
    this._lblIncomingSupport.setValue(this.tr(vi, this._selectedObject.get_Name()));
    this._lblIncomingSupportType1.setValue(this.tr(yu, t + u.toString() + n, t + o.toString() + n));
    this._lblIncomingSupportType2.setValue(this.tr(ko, t + f.toString() + n, t + s.toString() + n));
    this._lblIncomingSupportType3.setValue(this.tr(kf, t + e.toString() + n, t + h.toString() + n))
}

function _setAttackContainerInfo(i) {
    var o = this.tr(pe),
        s = ClientLib.Data.MainData.GetInstance().get_Alliance().get_Id(),
        e, h, c;
    s > 0 ? i.get_AllianceId() > 0 && i.get_AllianceId() === s && (o = i.IsOwnBase() ? this.tr(a) : this.tr(vo)) : i.get_VisObjectType() === ClientLib.Vis.VisObject.EObjectType.RegionCityType && i.IsOwnBase() && (o = this.tr(a));
    e = ClientLib.Data.MainData.GetInstance().get_AllianceCombatState().GetCombatByBaseId(i.get_Id());
    e === null || e.IsFinished ? this._cntAttackerInfo.exclude() : (h = e.AttackerId === 0, h ? this._valAttackerPlayerName.setPlayer(t + this.tr(e.AttackerName) + n, 0, !0) : this._valAttackerPlayerName.setPlayer(r + webfrontend.theme.Color.colors[f] + u + e.AttackerName + n, e.AttackerId), e.AttackerAllianceId > 0 ? this._valAttackerAllianceName.setAlliance(r + webfrontend.theme.Color.colors[f] + u + e.AttackerAllianceName + n, e.AttackerAllianceId) : h ? (this._valAttackerAllianceName.setNoAlliance(), this._lblAttackerAllianceLabel.exclude()) : this._valAttackerAllianceName.setNoAlliance(), h ? this._lblAttackerBaseName.setBase(t + this.tr(e.AttackerBaseName) + n, 0) : this._lblAttackerBaseName.setBase(r + webfrontend.theme.Color.colors[f] + u + e.AttackerBaseName + n, e.AttackerBaseId), this._lblAttackerBaseLevel.setValue(this.tr(sr, t + e.AttackerLevel + n)), this._valAttackerBaseCoordinats.setCoordinates(e.AttackerPosX, e.AttackerPosY, r + webfrontend.theme.Color.colors[f] + u + webfrontend.phe.cnc.gui.util.Numbers.formatCoordinates(e.AttackerPosX, e.AttackerPosY) + n), c = ClientLib.Data.MainData.GetInstance().get_Player().get_Id(), s > 0 ? e.AttackerAllianceId > 0 && e.AttackerAllianceId === s && (o = e.AttackerId !== c ? this.tr(eu) : this.tr(p)) : e.AttackerId === c && (o = this.tr(p)), this._cntAttackerInfo.show());
    this._lblUnderAttackTitle.setValue(o)
}

function _setMoveState(i) {
    var f = ClientLib.Data.MainData.GetInstance().get_Time(),
        r = f.GetServerStep(),
        e = !1,
        o, u;
    if (this._lblMoveCooldown !== null && (o = i.get_MoveCooldownEndStep(), o - r > 0 ? (u = webfrontend.phe.cnc.Util.getTimespanString(f.GetTimeSpan(Math.max(0, o - r)), !1), this._lblMoveCooldown.setValue(this.tr(no, t + u + n)), this._lblMoveCooldown.show()) : (this._lblMoveCooldown.exclude(), e = !0)), this._lblMoveRestriction !== null) {
        var s = i.get_MoveRestrictionEndStep(),
            h = i.get_MoveRestrictionCoord(),
            c = h & 65535,
            l = h >> 16 & 65535;
        s - r > 0 ? (u = webfrontend.phe.cnc.Util.getTimespanString(f.GetTimeSpan(Math.max(0, s - r)), !1), this._lblMoveRestriction.setValue(this.tr(bo, t + webfrontend.phe.cnc.gui.util.Numbers.formatCoordinates(l, c) + n, t + u + n)), this._lblMoveRestriction.show()) : (this._lblMoveRestriction.exclude(), e = !0)
    }
    e && this.onCitiesChange()
}

function _setAlertedState(n) {
    n.get_isAlerted() || this._cntBaseAlerted.setVisibility(h)
}

function _setImpactTimer(i) {
    var s = ClientLib.Data.MainData.GetInstance().get_EndGame(),
        o = !1,
        r = null,
        f = null,
        e = null,
        u = s.GetServer(i.get_RawX(), i.get_RawY());
    u !== null && (o = !0, u.get_ServerState() === ClientLib.Data.EndGame.EHubState.Impact ? (this._lblImpactTimerDesc.setValue(this.tr(rf)), this._lblImpactTimerPreText.setValue(this.tr(ir)), r = ClientLib.Data.MainData.GetInstance().get_Time(), f = r.GetServerStep(), e = webfrontend.phe.cnc.Util.getTimespanString(r.GetTimeSpan(Math.max(0, u.get_EndStep() - f)), !0, !0), this._lblImpactTimer.setValue(t + e + n)) : u.get_ServerState() === ClientLib.Data.EndGame.EHubState.Crater ? (this._lblImpactTimerDesc.setValue(this.tr(ef)), this._lblImpactTimerPreText.setValue(this.tr(ru)), r = ClientLib.Data.MainData.GetInstance().get_Time(), f = r.GetServerStep(), e = webfrontend.phe.cnc.Util.getTimespanString(r.GetTimeSpan(Math.max(0, u.get_EndStep() - f)), !0, !0), this._lblImpactTimer.setValue(t + e + n)) : u.get_ServerState() === ClientLib.Data.EndGame.EHubState.Claim && (this._lblImpactTimerDesc.setValue(this.tr(ie)), this._lblImpactTimerPreText.setValue(this.tr(ao)), r = ClientLib.Data.MainData.GetInstance().get_Time(), f = r.GetServerStep(), e = webfrontend.phe.cnc.Util.getTimespanString(r.GetTimeSpan(Math.max(0, u.get_EndStep() - f)), !0, !0), this._lblImpactTimer.setValue(t + e + n)));
    this._cntImpactTimer.setVisibility(o ? l : h)
}

function _setCombatState(r, u) {
    var o = ClientLib.Data.MainData.GetInstance().get_Time(),
        f = o.GetServerStep(),
        l = !1,
        e, y;
    this._lblUnderAttackTitle.setTextColor(w);
    var s = r.get_LockdownEndStep(),
        h = s - ClientLib.Data.MainData.GetInstance().get_Server().get_PostCombatBlockedForAllSteps(),
        a = s - ClientLib.Data.MainData.GetInstance().get_Server().get_PostCombatBlockedForNonAllianceSteps(),
        p = ClientLib.Data.MainData.GetInstance().get_AllianceCombatState().GetLockStepForTarget(r.get_Id()),
        k = s === p,
        v = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(r.get_Id()),
        c = !1;
    v !== null && (c = v.IsOwnBase());
    f <= h ? (e = i, r.get_VisObjectType() === ClientLib.Vis.VisObject.EObjectType.RegionNPCCamp ? (y = r.get_CombatStartStep(), e = webfrontend.phe.cnc.Util.getTimespanString(o.GetTimeSpan(Math.max(0, 120 - (f - y)), !1))) : e = webfrontend.phe.cnc.Util.getTimespanString(o.GetTimeSpan(Math.max(0, h - f), !1)), u ? this._lblCombatLockdownText.setValue(this.tr(wf, i)) : this._lblCombatLockdownText.setValue(this.tr(it, i)), this._lblCombatLockdownTimer.setValue(t + e + n)) : !c && f > h && f <= a ? (e = webfrontend.phe.cnc.Util.getTimespanString(o.GetTimeSpan(Math.max(0, a - f)), !1), k && ClientLib.Data.MainData.GetInstance().get_Alliance().get_Id() > 0 ? (this._lblUnderAttackTitle.setValue(this.tr(gu)), this._lblUnderAttackTitle.setTextColor(sf), this._lblCombatLockdownText.setValue(this.tr(nt, i))) : (this._lblUnderAttackTitle.setValue(this.tr(tr)), this._lblCombatLockdownText.setValue(this.tr(b, i))), this._lblCombatLockdownTimer.setValue(t + e + n)) : c && f > h && f <= s ? (this._lblUnderAttackTitle.setValue(this.tr(tu)), e = webfrontend.phe.cnc.Util.getTimespanString(o.GetTimeSpan(Math.max(0, s - f)), !1), this._lblCombatLockdownText.setValue(this.tr(b, i)), this._lblCombatLockdownTimer.setValue(t + e + n)) : (this._cntAttackerInfo.isVisible() || this._cntUnderAttack.isVisible()) && (l = !0);
    l && this.onCitiesChange()
}

function onCitiesChange() {
    var ut = ClientLib.Data.MainData.GetInstance().get_Time(),
        it = null,
        rt, ft, et;
    if (this._icnFaction.setSource(webfrontend.phe.cnc.gui.util.Images.getFactionIcon(this._selectedObject.get_PlayerFaction())), this._lblPlayerBaseName.setBase(f + webfrontend.theme.Color.colors[u] + e + this._selectedObject.get_Name() + n, this._selectedObject.get_Id()), this._lblPlayerBaseOwner.setPlayer(f + webfrontend.theme.Color.colors[u] + e + this._selectedObject.get_PlayerName() + n, this._selectedObject.get_PlayerId()), this._lblPlayerBaseLevel.setValue(this.tr(p, t + this._selectedObject.get_BaseLevel().toString() + n)), this._lblPlayerBaseCoordinates.setCoordinates(this._selectedObject.get_RawX(), this._selectedObject.get_RawY(), f + webfrontend.theme.Color.colors[u] + e + webfrontend.phe.cnc.gui.util.Numbers.formatCoordinates(this._selectedObject.get_RawX(), this._selectedObject.get_RawY()) + n), this._lblSurroundingBases.setValue(t + ClientLib.Data.MainData.GetInstance().get_World().SurroundedEnemies(this._selectedObject.get_RawX(), this._selectedObject.get_RawY()).toString() + n), this._lblPlayerAlliance.setAlliance(f + webfrontend.theme.Color.colors[u] + e + this._selectedObject.get_AllianceName() + n, this._selectedObject.get_AllianceId()), this._selectedObject.get_AllianceName() === b && this._lblPlayerAlliance.setNoAlliance(), rt = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this._selectedObject.get_Id()), this._lblMaintenanceBar.setCity(rt), this._cntUnderAttack.setVisibility(r), this._cntAttackerInfo.setVisibility(r), this._cntMaintenance.setVisibility(r), this._cntBaseAlerted.setVisibility(r), this._cntUnderCooldown.setVisibility(r), this._selectedObject.get_isLocked() ? (this._setAttackContainerInfo(this._selectedObject), this._cntUnderAttack.setVisibility(i)) : (rt.GetNextAppointmentInfo().PrimaryAppointmentStep !== -1 && this._cntMaintenance.setVisibility(i), this._selectedObject.get_isAlerted() && this._cntBaseAlerted.setVisibility(i), (rt.get_hasCooldown() || rt.get_hasRecovery() || rt.get_hasMoveRestriction()) && this._cntUnderCooldown.setVisibility(i)), this._lblBaseCondition.setValue(this.tr(s, t + this._selectedObject.get_ConditionBuildings() + n)), ft = this._selectedObject.get_ConditionDefense(), ft === -1 ? this._lblDefenseCondition.setValue(this.tr(h, c)) : this._lblDefenseCondition.setValue(this.tr(o, t + ft + n)), this._selectedObject.get_isAlerted() && (et = ut.GetTimespanString(this._selectedObject.get_SupportAlertEndStep(), ut.GetServerStep()), this._lblDefenseRepairFinished.setValue(this.tr(g, t + et + n))), this._selectedObject.get_isProtected() ? (it = webfrontend.phe.cnc.Util.getDateTimeString(ut.GetJSStepTime(this._selectedObject.get_ProtectionEndStep())), this._lblNoobProtection.setValue(this.tr(w, t + it + n)), this._lblNoobProtection.setVisibility(i)) : this._lblNoobProtection.setVisibility(r), this._selectedObject.get_hasRecovery() ? (it = webfrontend.phe.cnc.Util.getDateTimeString(ut.GetJSStepTime(this._selectedObject.get_RecoveryEndStep())), this._lblRecovery.setValue(this.tr(nt, t + it + n)), this._lblRecovery.setVisibility(i)) : this._lblRecovery.setVisibility(r), this._selectedObject.get_isAlerted() && (it = webfrontend.phe.cnc.Util.getDateTimeString(ut.GetJSStepTime(this._selectedObject.get_SupportAlertStartStep())), this._lblAlertedStart.setValue(this.tr(d, t + it + n)), this._lblAlertedStart.setVisibility(i), it = webfrontend.phe.cnc.Util.getDateTimeString(ut.GetJSStepTime(this._selectedObject.get_SupportAlertEndStep())), this._lblAlertedEnd.setValue(this.tr(y, t + it + n)), this._lblAlertedEnd.setVisibility(i)), this._lblErrorAttackBaseCCNotBuild.setVisibility(rt.GetCommandCenterCondition() < 0 ? i : r), this._selectedObject.get_IsTerminalBase() && !ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer()) {
        this._lblTitle.setValue(this.tr(v));
        var ot = ClientLib.Data.MainData.GetInstance().get_Server(),
            st = webfrontend.phe.cnc.Util.getShortTimespanString(ot.get_HubCenterClaimSteps(), !1),
            ht = webfrontend.phe.cnc.Util.getTimespanString(ot.get_HubCenterDebuffIncreaseSteps(), !1, !1);
        this._lblIntelText.setValue(tt + this.tr(l, st, ht) + a);
        this._cntIntel.show()
    } else this._lblTitle.setValue(this.tr(k)), this._cntIntel.exclude()
}

function onTick() {
    var i;
    this._setMoveState(this._selectedObject);
    this._setCombatState(this._selectedObject, !0);
    this._setAlertedState(this._selectedObject);
    this._setImpactTimer(this._selectedObject);
    this._lblMaintenanceBar !== null && this._lblMaintenanceBar.onTick();
    this._lblBaseCondition.setValue(this.tr(s, t + this._selectedObject.get_ConditionBuildings() + n));
    i = this._selectedObject.get_ConditionDefense();
    i === -1 ? this._lblDefenseCondition.setValue(this.tr(h, c)) : this._lblDefenseCondition.setValue(this.tr(o, t + i + n));
    var r = ClientLib.Data.MainData.GetInstance().get_Player(),
        u = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(r.GetCommandPointCount(), !0),
        f = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(r.GetCommandPointMaxStorage(), !0);
    this._lblCommandPoints.setValue(f.toString());
    this._lblCommandPointsCurrent.setValue(u.toString());
    !0 && this._setSupportContainer();
    this._setIncomingSupportContainer()
}