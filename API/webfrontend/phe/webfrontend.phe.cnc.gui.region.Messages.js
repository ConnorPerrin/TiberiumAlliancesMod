function init() {
    var t = qx.core.Init.getApplication(),
        r = ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer(),
        n;
    webfrontend.phe.cnc.gui.region.Messages.FoundBase = [];
    webfrontend.phe.cnc.gui.region.Messages.MoveBase = [];
    webfrontend.phe.cnc.gui.region.Messages.AttackBase = [];
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip = [];
    n = ClientLib.Data.EFoundBaseResult;
    webfrontend.phe.cnc.gui.region.Messages.FoundBase.push({
        code: n.FailFieldOccupied,
        msg: t.tr(or)
    });
    webfrontend.phe.cnc.gui.region.Messages.FoundBase.push({
        code: n.FailReservedTerritory,
        msg: t.tr(ci)
    });
    webfrontend.phe.cnc.gui.region.Messages.FoundBase.push({
        code: n.FailNotOwned,
        msg: t.tr(fi)
    });
    webfrontend.phe.cnc.gui.region.Messages.FoundBase.push({
        code: n.FailDistance,
        msg: t.tr(wt)
    });
    webfrontend.phe.cnc.gui.region.Messages.FoundBase.push({
        code: n.FailNeighbor | n.FailNeighborCity,
        msg: t.tr(sr)
    });
    webfrontend.phe.cnc.gui.region.Messages.FoundBase.push({
        code: n.FailNeighbor | n.FailNeighborBase,
        msg: t.tr(nu)
    });
    webfrontend.phe.cnc.gui.region.Messages.FoundBase.push({
        code: n.FailNeighbor | n.FailNeighborNewPlayerSlot,
        msg: t.tr(h)
    });
    webfrontend.phe.cnc.gui.region.Messages.FoundBase.push({
        code: n.FailNeighbor | n.FailNeighborPOI,
        msg: t.tr(hr)
    });
    webfrontend.phe.cnc.gui.region.Messages.FoundBase.push({
        code: n.FailNeighbor | n.FailNeighborRuin,
        msg: t.tr(yr)
    });
    webfrontend.phe.cnc.gui.region.Messages.FoundBase.push({
        code: n.FailNeighbor,
        msg: t.tr(g)
    });
    webfrontend.phe.cnc.gui.region.Messages.FoundBase.push({
        code: n.FailSatellite,
        msg: t.tr(pi)
    });
    webfrontend.phe.cnc.gui.region.Messages.FoundBase.push({
        code: n.FailFoundOnControlHub,
        msg: t.tr(nr)
    });
    webfrontend.phe.cnc.gui.region.Messages.FoundBase.push({
        code: n.FailBlocked,
        msg: t.tr(i)
    });
    n = ClientLib.Data.EMoveBaseResult;
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailFieldOccupied,
        msg: t.tr(w)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailReservedTerritory,
        msg: t.tr(kt)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailNotOwned,
        msg: t.tr(vi)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailCampIsAttacked,
        msg: t.tr(at)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailNeighbor | n.FailNeighborCity,
        msg: t.tr(c)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailNeighbor | n.FailNeighborBase,
        msg: t.tr(cr)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailNeighbor | n.FailNeighborNewPlayerSlot,
        msg: t.tr(ar)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailNeighbor | n.FailNeighborRuin,
        msg: t.tr(dr)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailNeighbor | n.FailNeighborHubCenter,
        msg: t.tr(oi)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailGhostNeighbor | n.FailNeighborPOI,
        msg: t.tr(li)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailGhostNeighbor | n.FailNeighborHub,
        msg: t.tr(wr)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailGhostNeighbor | n.FailNeighborHubServer,
        msg: t.tr(pt)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailNeighbor,
        msg: t.tr(ri)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailDistance,
        msg: t.tr(ir)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailOldBasePosition,
        msg: t.tr(gr)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailSatellite,
        msg: t.tr(dt)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailGhostSatellite,
        msg: t.tr(et)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailMoveOnControlHub,
        msg: r ? t.tr(ut) : t.tr(bt)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailMoveOnControlHubNoCode,
        msg: t.tr(pr)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailBlocked,
        msg: t.tr(i)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailInsufficientCommandPoints,
        msg: t.tr(ei)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailMoveRestriction,
        msg: t.tr(wi)
    });
    webfrontend.phe.cnc.gui.region.Messages.MoveBase.push({
        code: n.FailSatellitePlayerHasCode,
        msg: t.tr(ui)
    });
    n = ClientLib.Data.EAttackBaseResult;
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailHubCenterAttackLockdown,
        msg: t.tr(yi)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailNotEnoughOwnedHubs,
        msg: t.tr(br)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailHubCenterTimer,
        msg: t.tr(s)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailNotAllowed,
        msg: t.tr(a)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailBaseRecovery,
        msg: t.tr(bi)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailAttackerGhostMode,
        msg: t.tr(p)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailTargetIsProtected,
        msg: t.tr(it)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailRaidCampInEnemyTerritory,
        msg: t.tr(d)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailCommandCenterMissing,
        msg: t.tr(l)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailCommandCenterDamaged,
        msg: t.tr(lt)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailDistance,
        msg: t.tr(kr)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailInsufficientCommandPoints,
        msg: t.tr(hi)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailIsSubstituted,
        msg: t.tr(e)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailAttackerImpactIncoming,
        msg: t.tr(vt)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailDefenderImpactIncoming,
        msg: t.tr(gt)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailAllianceCity,
        msg: t.tr(k)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailAlliedAllianceCity,
        msg: t.tr(ai)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailNAPAllianceCity,
        msg: t.tr(rt)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBase.push({
        code: n.FailTargetIsSubstitutedByAttacker,
        msg: t.tr(nt)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailHubCenterAttackLockdown,
        msg: t.tr(ht)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailNotEnoughOwnedHubs,
        msg: t.tr(ot)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailHubCenterTimer,
        msg: t.tr(b)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailNotAllowed,
        msg: t.tr(fr)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailAttackerAlreadyAttacking,
        msg: t.tr(yt)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailBaseRecovery,
        msg: t.tr(di)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailAttackerGhostMode,
        msg: t.tr(lr)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailTargetIsProtected,
        msg: t.tr(tr)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailCommandCenterMissing,
        msg: t.tr(er)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailCommandCenterDamaged,
        msg: t.tr(y)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailDistance,
        msg: t.tr(ct)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailInsufficientCommandPoints,
        msg: t.tr(st)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailIsSubstituted,
        msg: t.tr(e)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailDefenderImpactIncoming,
        msg: t.tr(u)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailAttackerImpactIncoming,
        msg: t.tr(u)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.DefenderBaseAlreadyUnderAttack,
        msg: t.tr(f)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.DefenderLockedEnd,
        msg: t.tr(f)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.DefenderIsProtected,
        msg: t.tr(ni)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.MissingValidAttackerUnits,
        msg: t.tr(tt)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.InvalidArmyUnitCountPerRow,
        msg: t.tr(gi).toString() + ii + t.tr(ft, ClientLib.Base.Unit.get_MaxUnitsPerRow()).toString()
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.ArmyUnitsNotAbleToAttack,
        msg: t.tr(ur)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailAllianceCity,
        msg: t.tr(ki)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailAlliedAllianceCity,
        msg: t.tr(rr)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailNAPAllianceCity,
        msg: t.tr(ti)
    });
    webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip.push({
        code: n.FailTargetIsSubstitutedByAttacker,
        msg: t.tr(vr)
    })
}

function getFoundMessage(i) {
    webfrontend.phe.cnc.gui.region.Messages.FoundBase == null && webfrontend.phe.cnc.gui.region.Messages.init();
    var u = qx.core.Init.getApplication(),
        r = webfrontend.phe.cnc.gui.region.Messages.getErrorMessage(i, webfrontend.phe.cnc.gui.region.Messages.FoundBase),
        f = ClientLib.Data.EFoundBaseResult;
    return r.code != -1 && r.msg != n ? r.msg : r.msg == n && r.code == f.FailDistance ? u.tr(t, Math.floor(ClientLib.Data.MainData.GetInstance().get_Server().get_MaxBaseMoveDistance())) : n
}

function getMoveMessage(i) {
    webfrontend.phe.cnc.gui.region.Messages.MoveBase == null && webfrontend.phe.cnc.gui.region.Messages.init();
    var u = qx.core.Init.getApplication(),
        r = webfrontend.phe.cnc.gui.region.Messages.getErrorMessage(i, webfrontend.phe.cnc.gui.region.Messages.MoveBase),
        f = ClientLib.Data.EMoveBaseResult;
    return r.code != -1 && r.msg != n ? r.msg : r.msg == n && r.code == f.FailDistance ? u.tr(t, Math.floor(ClientLib.Data.MainData.GetInstance().get_Server().get_MaxBaseMoveDistance())) : n
}

function getAttackMessage(t, i) {
    var f, e, u;
    return (webfrontend.phe.cnc.gui.region.Messages.AttackBase == null && webfrontend.phe.cnc.gui.region.Messages.init(), f = qx.core.Init.getApplication(), e = ClientLib.Data.EAttackBaseResult, t == e.OK) ? f.tr(si, o + i.get_Name() + r) : (u = webfrontend.phe.cnc.gui.region.Messages.getErrorMessage(t, webfrontend.phe.cnc.gui.region.Messages.AttackBase), u.code != -1 && u.msg != n) ? f.tr(u.msg, o + i.get_Name() + r) : n
}

function getAttackToolTip(t) {
    var r, u, i;
    return (webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip == null && webfrontend.phe.cnc.gui.region.Messages.init(), r = qx.core.Init.getApplication(), u = ClientLib.Data.EAttackBaseResult, t == u.OK) ? r.tr(v) : (i = webfrontend.phe.cnc.gui.region.Messages.getErrorMessage(t, webfrontend.phe.cnc.gui.region.Messages.AttackBaseToolTip), i.code != -1 && i.msg != n) ? i.msg : n
}

function getErrorMessage(t, i) {
    for (var u = qx.core.Init.getApplication(), r = 0; r < i.length; r++)
        if ((t & i[r].code) == i[r].code) return i[r];
    return {
        code: -1,
        msg: n
    }
}