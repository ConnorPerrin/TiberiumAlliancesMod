function hasScrollbar() {
    var n = this.__byM.getHeight();
    return n === null && this.__byM.getBounds() !== null && (n = this.__byM.getBounds().height), n >= this.__byL.getMaxHeight()
}

function checkConditions() {
    var n = ClientLib.Data.MainData.GetInstance().get_Cities(),
        e, r, u;
    n.hasCollectables() ? this.__byU.setEnabled(!0) : this.__byU.setEnabled(!1);
    var h = ClientLib.Data.MainData.GetInstance().get_Player().get_Faction(),
        c = ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Research_BaseFound, h),
        l = ClientLib.Data.MainData.GetInstance().get_Player().get_PlayerResearch(),
        o = l.GetResearchItemFomMdbId(c),
        f = 0;
    if (o && (e = o.get_CurrentLevel(), e > 0 && (f = e - (n.get_AllCities().c - 1))), f <= 0) {
        this.__byN.setEnabled(!1);
        this.__byN.setLabel(this.tr(i));
        this.__byX = this.tr(d);
        return
    }
    this.__byN.setEnabled(!0);
    this.__byN.setLabel(f > 1 ? this.tr(tt, f) : this.tr(i));
    r = ClientLib.Data.MainData.GetInstance().get_Player().CanFound();
    u = t;
    n.GetDamagedCity() != null ? u = n.GetDamagedCity().get_Name() : n.GetGhostedCity() != null && (u = n.GetGhostedCity().get_Name());
    this.__byN.setEnabled(r == ClientLib.Data.EFoundBaseResult.OK);
    r == ClientLib.Data.EFoundBaseResult.OK ? this.__byX = this.__byN.getLabel() : (r & ClientLib.Data.EFoundBaseResult.FailConstructionYardDamaged) == ClientLib.Data.EFoundBaseResult.FailConstructionYardDamaged ? (this.__byX = this.tr(k), this.__byY = s + u + ti) : (r & ClientLib.Data.EFoundBaseResult.FailGhostMode) == ClientLib.Data.EFoundBaseResult.FailGhostMode ? (this.__byX = this.tr(ci), this.__byY = s + u + ft) : (r & ClientLib.Data.EFoundBaseResult.FailBaseNotMinLevel) == ClientLib.Data.EFoundBaseResult.FailBaseNotMinLevel && (this.__byX = rt, this.__byY = ClientLib.Data.MainData.GetInstance().get_Server().get_MinLevelFoundBase())
}

function selectDamagedCity() {
    var r = null,
        u = ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities().d,
        i, t, n;
    for (i in u)
        if (u[i].GetBuildingsConditionInPercent() < 100 && !u[i].get_IsGhostMode()) {
            r = i;
            break
        } if (r)
        for (t = this.__byM.getLayoutChildren(), n = 0; n < t.length; ++n)
            if (t[n].getBaseId && t[n].getBaseId() == r) {
                t[n].triggerSelect();
                break
            }
}

function getUIItem(n, t) {
    var i, f, e, o, u, r;
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_GOTOBASE:
            if (i = null, f = null, t && t == b) {
                e = ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities().d;
                for (o in e)
                    if (e[o].GetBuildingsConditionInPercent() < 100) {
                        f = o;
                        break
                    }
            }
            if (f)
                for (u = this.__byM.getLayoutChildren(), r = 0; r < u.length; ++r)
                    if (u[r].getBaseId && u[r].getBaseId() == f) {
                        i = u[r];
                        break
                    } return i || (i = this.__byM.getLayoutChildren()[0]), i && this.__byL.scrollChildIntoViewY(i), i
    }
    return null
}