function get_MdbId() {
    return this.LQHNHD
}

function get_Type() {
    return this.QDHRXP
}

function get_MissionSteps() {
    return this.LSOEFT
}

function get_MissionLine() {
    return this.RKWUDS
}

function CanCollectRewards(n) {
    var t = !1,
        r, i, u;
    if (this.LSOEFT.XOHVCR(n)) {
        if (t = this.LSOEFT.d[n].ZRZDCY(), !this.LSOEFT.d[n].EIRPQI() || !t) return t;
        r = this.LSOEFT.d;
        i = {
            k: null,
            v: null
        };
        for (u in r) i.k = u, i.v = r[u], n != i.k && (t = t && !i.v.ZRZDCY())
    }
    return t
}

function CollectRewards(n) {
    this.GMTKBN(n, $I.CVRAYR.VAMLQD().ZBVLXL().DCXOLB())
}

function CollectRewardsForCity(n, t) {
    this.EJHJKP(n) && (this.LSOEFT.d[n].AMINFT(), ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("ClaimMissionStepReward", {
        cityid: t,
        missionStepId: n
    }, (new $I.JNOYHJ).TFDQYD(this, this.PDPRRM), n))
}