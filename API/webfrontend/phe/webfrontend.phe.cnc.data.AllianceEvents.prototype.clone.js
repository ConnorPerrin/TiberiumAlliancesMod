function getId anonymous(value) {
    if (this.$$runtime_Id !== undefined) return this.$$runtime_Id;
    if (this.$$user_Id !== undefined) return this.$$user_Id;
    else return this.$$init_Id;
}

function setId anonymous(value) {
    this.$$setIdImpl.apply(this, arguments);
    return value;
}

function resetId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getName anonymous(value) {
    if (this.$$runtime_Name !== undefined) return this.$$runtime_Name;
    if (this.$$user_Name !== undefined) return this.$$user_Name;
    else return this.$$init_Name;
}

function setName anonymous(value) {
    this.$$setNameImpl.apply(this, arguments);
    return value;
}

function resetName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIsOfficer anonymous(value) {
    if (this.$$runtime_IsOfficer !== undefined) return this.$$runtime_IsOfficer;
    if (this.$$user_IsOfficer !== undefined) return this.$$user_IsOfficer;
    else return this.$$init_IsOfficer;
}

function setIsOfficer anonymous(value) {
    this.$$setIsOfficerImpl.apply(this, arguments);
    return value;
}

function resetIsOfficer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIsOfficer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIsOfficer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIsOfficer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIsAdmin anonymous() {
    this.getIsAdmin.$$install && this.getIsAdmin.$$install();
    return this.getIsAdmin.apply(this, arguments);
}

function setIsAdmin anonymous(value) {
    this.$$setIsAdminImpl.apply(this, arguments);
    return value;
}

function resetIsAdmin() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIsAdmin() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIsAdmin() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIsAdmin() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanInviteMembers anonymous() {
    this.getCanInviteMembers.$$install && this.getCanInviteMembers.$$install();
    return this.getCanInviteMembers.apply(this, arguments);
}

function setCanInviteMembers anonymous(value) {
    this.$$setCanInviteMembersImpl.apply(this, arguments);
    return value;
}

function resetCanInviteMembers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanInviteMembers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanInviteMembers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanInviteMembers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanEditMembersRights anonymous() {
    this.getCanEditMembersRights.$$install && this.getCanEditMembersRights.$$install();
    return this.getCanEditMembersRights.apply(this, arguments);
}

function setCanEditMembersRights anonymous(value) {
    this.$$setCanEditMembersRightsImpl.apply(this, arguments);
    return value;
}

function resetCanEditMembersRights() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanEditMembersRights() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanEditMembersRights() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanEditMembersRights() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanPromoteLowerRoles anonymous() {
    this.getCanPromoteLowerRoles.$$install && this.getCanPromoteLowerRoles.$$install();
    return this.getCanPromoteLowerRoles.apply(this, arguments);
}

function setCanPromoteLowerRoles anonymous(value) {
    this.$$setCanPromoteLowerRolesImpl.apply(this, arguments);
    return value;
}

function resetCanPromoteLowerRoles() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanPromoteLowerRoles() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanPromoteLowerRoles() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanPromoteLowerRoles() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanKickMembers anonymous() {
    this.getCanKickMembers.$$install && this.getCanKickMembers.$$install();
    return this.getCanKickMembers.apply(this, arguments);
}

function setCanKickMembers anonymous(value) {
    this.$$setCanKickMembersImpl.apply(this, arguments);
    return value;
}

function resetCanKickMembers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanKickMembers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanKickMembers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanKickMembers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanEditMarkers anonymous(value) {
    if (this.$$runtime_CanEditMarkers !== undefined) return this.$$runtime_CanEditMarkers;
    if (this.$$user_CanEditMarkers !== undefined) return this.$$user_CanEditMarkers;
    else return this.$$init_CanEditMarkers;
}

function setCanEditMarkers anonymous(value) {
    this.$$setCanEditMarkersImpl.apply(this, arguments);
    return value;
}

function resetCanEditMarkers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanEditMarkers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanEditMarkers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanEditMarkers() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanModerateAllianceForum anonymous() {
    this.getCanModerateAllianceForum.$$install && this.getCanModerateAllianceForum.$$install();
    return this.getCanModerateAllianceForum.apply(this, arguments);
}

function setCanModerateAllianceForum anonymous(value) {
    this.$$setCanModerateAllianceForumImpl.apply(this, arguments);
    return value;
}

function resetCanModerateAllianceForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanModerateAllianceForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanModerateAllianceForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanModerateAllianceForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanCreateAllianceForums anonymous(value) {
    if (this.$$runtime_CanCreateAllianceForums !== undefined) return this.$$runtime_CanCreateAllianceForums;
    if (this.$$user_CanCreateAllianceForums !== undefined) return this.$$user_CanCreateAllianceForums;
    else return this.$$init_CanCreateAllianceForums;
}

function setCanCreateAllianceForums anonymous(value) {
    this.$$setCanCreateAllianceForumsImpl.apply(this, arguments);
    return value;
}

function resetCanCreateAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanCreateAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanCreateAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanCreateAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanEditAllianceForumInfos anonymous(value) {
    if (this.$$runtime_CanEditAllianceForumInfos !== undefined) return this.$$runtime_CanEditAllianceForumInfos;
    if (this.$$user_CanEditAllianceForumInfos !== undefined) return this.$$user_CanEditAllianceForumInfos;
    else return this.$$init_CanEditAllianceForumInfos;
}

function setCanEditAllianceForumInfos anonymous(value) {
    this.$$setCanEditAllianceForumInfosImpl.apply(this, arguments);
    return value;
}

function resetCanEditAllianceForumInfos() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanEditAllianceForumInfos() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanEditAllianceForumInfos() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanEditAllianceForumInfos() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanEditDiplomacy anonymous() {
    this.getCanEditDiplomacy.$$install && this.getCanEditDiplomacy.$$install();
    return this.getCanEditDiplomacy.apply(this, arguments);
}

function setCanEditDiplomacy anonymous(value) {
    this.$$setCanEditDiplomacyImpl.apply(this, arguments);
    return value;
}

function resetCanEditDiplomacy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanEditDiplomacy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanEditDiplomacy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanEditDiplomacy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanModerateSharedAlliancesForums anonymous() {
    this.getCanModerateSharedAlliancesForums.$$install && this.getCanModerateSharedAlliancesForums.$$install();
    return this.getCanModerateSharedAlliancesForums.apply(this, arguments);
}

function setCanModerateSharedAlliancesForums anonymous(value) {
    this.$$setCanModerateSharedAlliancesForumsImpl.apply(this, arguments);
    return value;
}

function resetCanModerateSharedAlliancesForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanModerateSharedAlliancesForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanModerateSharedAlliancesForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanModerateSharedAlliancesForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanViewSharedAllianceForums anonymous() {
    this.getCanViewSharedAllianceForums.$$install && this.getCanViewSharedAllianceForums.$$install();
    return this.getCanViewSharedAllianceForums.apply(this, arguments);
}

function setCanViewSharedAllianceForums anonymous(value) {
    this.$$setCanViewSharedAllianceForumsImpl.apply(this, arguments);
    return value;
}

function resetCanViewSharedAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanViewSharedAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanViewSharedAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanViewSharedAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanForceSubscription anonymous(value) {
    if (this.$$runtime_CanForceSubscription !== undefined) return this.$$runtime_CanForceSubscription;
    if (this.$$user_CanForceSubscription !== undefined) return this.$$user_CanForceSubscription;
    else return this.$$init_CanForceSubscription;
}

function setCanForceSubscription anonymous(value) {
    this.$$setCanForceSubscriptionImpl.apply(this, arguments);
    return value;
}

function resetCanForceSubscription() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanForceSubscription() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanForceSubscription() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanForceSubscription() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanCreateRecruitmentThread anonymous() {
    this.getCanCreateRecruitmentThread.$$install && this.getCanCreateRecruitmentThread.$$install();
    return this.getCanCreateRecruitmentThread.apply(this, arguments);
}

function setCanCreateRecruitmentThread anonymous(value) {
    this.$$setCanCreateRecruitmentThreadImpl.apply(this, arguments);
    return value;
}

function resetCanCreateRecruitmentThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanCreateRecruitmentThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanCreateRecruitmentThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanCreateRecruitmentThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getHasRecruitmentThread anonymous() {
    this.getHasRecruitmentThread.$$install && this.getHasRecruitmentThread.$$install();
    return this.getHasRecruitmentThread.apply(this, arguments);
}

function setHasRecruitmentThread anonymous(value) {
    this.$$setHasRecruitmentThreadImpl.apply(this, arguments);
    return value;
}

function resetHasRecruitmentThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initHasRecruitmentThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeHasRecruitmentThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeHasRecruitmentThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanViewMemberReports anonymous() {
    this.getCanViewMemberReports.$$install && this.getCanViewMemberReports.$$install();
    return this.getCanViewMemberReports.apply(this, arguments);
}

function setCanViewMemberReports anonymous(value) {
    this.$$setCanViewMemberReportsImpl.apply(this, arguments);
    return value;
}

function resetCanViewMemberReports() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanViewMemberReports() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanViewMemberReports() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanViewMemberReports() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanViewMilitary anonymous(value) {
    if (this.$$runtime_CanViewMilitary !== undefined) return this.$$runtime_CanViewMilitary;
    if (this.$$user_CanViewMilitary !== undefined) return this.$$user_CanViewMilitary;
    else return this.$$init_CanViewMilitary;
}

function setCanViewMilitary anonymous(value) {
    this.$$setCanViewMilitaryImpl.apply(this, arguments);
    return value;
}

function resetCanViewMilitary() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanViewMilitary() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanViewMilitary() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanViewMilitary() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanAttackCenter anonymous(value) {
    if (this.$$runtime_CanAttackCenter !== undefined) return this.$$runtime_CanAttackCenter;
    if (this.$$user_CanAttackCenter !== undefined) return this.$$user_CanAttackCenter;
    else return this.$$init_CanAttackCenter;
}

function setCanAttackCenter anonymous(value) {
    this.$$setCanAttackCenterImpl.apply(this, arguments);
    return value;
}

function resetCanAttackCenter() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeCanAttackCenter() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanAttackCenter() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCenterState anonymous() {
    this.getCenterState.$$install && this.getCenterState.$$install();
    return this.getCenterState.apply(this, arguments);
}

function setCenterState anonymous(value) {
    this.$$setCenterStateImpl.apply(this, arguments);
    return value;
}

function resetCenterState() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCenterState() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCenterState() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCenterState() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCenterOwnedMyAlliance anonymous() {
    this.getCenterOwnedMyAlliance.$$install && this.getCenterOwnedMyAlliance.$$install();
    return this.getCenterOwnedMyAlliance.apply(this, arguments);
}

function setCenterOwnedMyAlliance anonymous(value) {
    this.$$setCenterOwnedMyAllianceImpl.apply(this, arguments);
    return value;
}

function resetCenterOwnedMyAlliance() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeCenterOwnedMyAlliance() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCenterOwnedMyAlliance() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCfgMarkerNav anonymous(value) {
    if (this.$$runtime_CfgMarkerNav !== undefined) return this.$$runtime_CfgMarkerNav;
    if (this.$$user_CfgMarkerNav !== undefined) return this.$$user_CfgMarkerNav;
    else return this.$$init_CfgMarkerNav;
}

function setCfgMarkerNav anonymous(value) {
    this.$$setCfgMarkerNavImpl.apply(this, arguments);
    return value;
}

function resetCfgMarkerNav() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCfgMarkerNav() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCfgMarkerNav() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCfgMarkerNav() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function startListening() {
    this.__AV || (this.__AV = !0, webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), n, ClientLib.Data.AllianceChange, this, this.__AY), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), t, ClientLib.Data.AllianceChange, this, this.__Ba), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter(), u, ClientLib.Data.EndGame.HubChanged, this, this.__Bb), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Config.Main.GetInstance(), i, ClientLib.Config.ConfigChange, this, this.__sd), this.__AY(), this.__Ba(), this.__Bb(), this.__sd(ClientLib.Config.Main.CONFIG_SHOW_MARKERNAV))
}

function _getInfoTracker() {
    return null
}

function getShowNav(n) {
    var u = !0,
        t = webfrontend.phe.cnc.data.AllianceEvents.JSON_CFG_TAG,
        r = this.getCfgMarkerNav(),
        h = ClientLib.Data.MainData.GetInstance().get_Player().get_Id(),
        f, i, s, e, o;
    if (!!r && r.hasOwnProperty(t.JCT_NAVS) && r[t.JCT_NAVS] != null)
        for (f = 0; f < r[t.JCT_NAVS].length; ++f)
            if (i = r[t.JCT_NAVS][f], i.hasOwnProperty(t.JCT_NAV_ID) && n == i[t.JCT_NAV_ID]) {
                u = !i.hasOwnProperty(t.JCT_NAV_SHOW) || !!i[t.JCT_NAV_SHOW];
                break
            } if (u == !0 && (!!i && n != i[t.JCT_NAV_ID] || !i))
        for (s = webfrontend.data.AllianceEvents.getInstance().getAllianceMarkers(), e = 0; e < s.length; e++) o = s[e], o.get_Id() == n && o.get_Type() == ClientLib.Data.Alliance.EAMT_Reserve && o.get_IdPlayerCreated() != h && (u = !1);
    return u
}

function setShowNav(n, t) {
    var e = !1,
        i = webfrontend.phe.cnc.data.AllianceEvents.JSON_CFG_TAG,
        f = this.getCfgMarkerNav(),
        o, s, c, h, a, l, r, u;
    if (f != null && typeof n != w) {
        for (f.hasOwnProperty(i.JCT_NAVS) || (e |= !0, f[i.JCT_NAVS] = []), o = [], s = this.getAllianceMarkers(), r = 0; r < f[i.JCT_NAVS].length; ++r) {
            if (u = f[i.JCT_NAVS][r], c = !1, u.hasOwnProperty(i.JCT_NAV_ID))
                for (h = 0; !!s && h < s.length; ++h)
                    if (a = s[h], a.get_Id() == u[i.JCT_NAV_ID]) {
                        c = !0;
                        break
                    } c || (e |= !0, o.push(r))
        }
        for (r = o.length - 1; r >= 0; --r) f[i.JCT_NAVS].splice(o[r], 1);
        for (l = !1, r = 0; r < f[i.JCT_NAVS].length; ++r)
            if (u = f[i.JCT_NAVS][r], n == u[i.JCT_NAV_ID]) {
                l = !0;
                u.hasOwnProperty(i.JCT_NAV_SHOW) && !!t == !!u[i.JCT_NAV_SHOW] || (e |= !0, u[i.JCT_NAV_SHOW] = !!t);
                break
            } l || (e |= !0, u = {}, u[i.JCT_NAV_ID] = n, u[i.JCT_NAV_SHOW] = !!t, f[i.JCT_NAVS].push(u))
    }
    e && (ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_SHOW_MARKERNAV, qx.lang.Json.stringify(this.getCfgMarkerNav())), ClientLib.Config.Main.GetInstance().SaveToDB())
}

function getAllianceMarkerTypes() {
    return [ClientLib.Data.Alliance.EAMT_Watch, ClientLib.Data.Alliance.EAMT_Move, ClientLib.Data.Alliance.EAMT_Conquer, ClientLib.Data.Alliance.EAMT_Support, ClientLib.Data.Alliance.EAMT_Reserve, ClientLib.Data.Alliance.EAMT_Home]
}

function getAllianceMarkers() {
    var i = [],
        n = ClientLib.Data.MainData.GetInstance().get_Alliance().get_Markers(),
        t;
    if (!!n && !!n.l)
        for (t = 0; t < n.l.length; ++t) i.push(n.l[t]);
    return i
}

function getAllianceMarkerById(n) {
    return ClientLib.Data.MainData.GetInstance().get_Alliance().GetMarkerById(n || 0)
}

function getAllianceMarkerByCoordinates(n, t) {
    var u = null,
        i = ClientLib.Data.MainData.GetInstance().get_Alliance().get_Markers(),
        r;
    if (!!i && !!i.l)
        for (r = 0; r < i.l.length; ++r)
            if (i.l[r].get_CoordX() == n && i.l[r].get_CoordY() == t) {
                u = i.l[r];
                break
            } return u
}

function getAllianceMarkerTypeTranslation(n) {
    var t = l;
    switch (n) {
        case ClientLib.Data.Alliance.EAMT_Watch:
            t = h;
            break;
        case ClientLib.Data.Alliance.EAMT_Move:
            t = f;
            break;
        case ClientLib.Data.Alliance.EAMT_Reserve:
            t = b;
            break;
        case ClientLib.Data.Alliance.EAMT_Conquer:
            t = p;
            break;
        case ClientLib.Data.Alliance.EAMT_Support:
            t = e
    }
    return t
}

function getAllianceMarkerDescriptionTranslation(n) {
    var t = o;
    switch (n) {
        case ClientLib.Data.Alliance.EAMT_Watch:
            t = c;
            break;
        case ClientLib.Data.Alliance.EAMT_Move:
            t = a;
            break;
        case ClientLib.Data.Alliance.EAMT_Reserve:
            t = y;
            break;
        case ClientLib.Data.Alliance.EAMT_Conquer:
            t = k;
            break;
        case ClientLib.Data.Alliance.EAMT_Support:
            t = s
    }
    return t
}