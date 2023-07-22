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

function setRuntimeName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIsActive anonymous(value) {
    if (this.$$runtime_IsActive !== undefined) return this.$$runtime_IsActive;
    if (this.$$user_IsActive !== undefined) return this.$$user_IsActive;
    else return this.$$init_IsActive;
}

function setIsActive anonymous(value) {
    this.$$setIsActiveImpl.apply(this, arguments);
    return value;
}

function resetIsActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIsActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIsActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIsActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleIsActive anonymous() {
    return this.setIsActive(!this.getIsActive())
}

function isIsActive anonymous() {
    return this.getIsActive()
}

function getEndTimestampOriginal anonymous(value) {
    if (this.$$runtime_EndTimestampOriginal !== undefined) return this.$$runtime_EndTimestampOriginal;
    if (this.$$user_EndTimestampOriginal !== undefined) return this.$$user_EndTimestampOriginal;
    else return this.$$init_EndTimestampOriginal;
}

function setEndTimestampOriginal anonymous(value) {
    this.$$setEndTimestampOriginalImpl.apply(this, arguments);
    return value;
}

function resetEndTimestampOriginal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initEndTimestampOriginal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeEndTimestampOriginal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeEndTimestampOriginal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getEndTimestamp anonymous(value) {
    if (this.$$runtime_EndTimestamp !== undefined) return this.$$runtime_EndTimestamp;
    if (this.$$user_EndTimestamp !== undefined) return this.$$user_EndTimestamp;
    else return this.$$init_EndTimestamp;
}

function setEndTimestamp anonymous(value) {
    this.$$setEndTimestampImpl.apply(this, arguments);
    return value;
}

function resetEndTimestamp() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initEndTimestamp() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeEndTimestamp() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeEndTimestamp() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getStepsReward anonymous() {
    this.getStepsReward.$$install && this.getStepsReward.$$install();
    return this.getStepsReward.apply(this, arguments);
}

function setStepsReward anonymous(value) {
    this.$$setStepsRewardImpl.apply(this, arguments);
    return value;
}

function resetStepsReward() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initStepsReward() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeStepsReward() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeStepsReward() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getGoals anonymous(value) {
    if (this.$$runtime_Goals !== undefined) return this.$$runtime_Goals;
    if (this.$$user_Goals !== undefined) return this.$$user_Goals;
    else return this.$$init_Goals;
}

function setGoals anonymous(value) {
    this.$$setGoalsImpl.apply(this, arguments);
    return value;
}

function resetGoals() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initGoals() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeGoals() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeGoals() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getProgress anonymous() {
    this.getProgress.$$install && this.getProgress.$$install();
    return this.getProgress.apply(this, arguments);
}

function setProgress anonymous(value) {
    this.$$setProgressImpl.apply(this, arguments);
    return value;
}

function resetProgress() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initProgress() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeProgress() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeProgress() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function startListening() {
    this.__AV || (this.__AV = !0, webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Challenge(), o, ClientLib.Data.Challenge.ChallengeChange, this, this.__bbM), this.__bbM())
}

function isChallengeFailed() {
    var n = !1,
        t;
    return this.getId() != null && !!this.getGoals() && this.getGoals().length > 0 && !!this.getEndTimestamp() && (t = this.getEndTimestamp() - ClientLib.Data.MainData.GetInstance().get_Time().GetStepTime(ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep()), t < 1 && (n = !this.isGoalDoneByIndex(0, !0))), n
}

function isChallengeDone() {
    var n = !1,
        t;
    return this.getId() != null && !!this.getGoals() && this.getGoals().length > 0 && !!this.getEndTimestamp() && (t = this.getEndTimestamp() - ClientLib.Data.MainData.GetInstance().get_Time().GetStepTime(ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep()), n = t < 1 ? this.isGoalDoneByIndex(0, !0) : this.isGoalDoneByIndex(this.getGoals().length - 1, !0)), n
}

function getRewards(n) {
    return !n || !n.hasOwnProperty(webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_REWARDS) ? null : n[webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_REWARDS]
}

function getCurGoalIndex() {
    var t = 0,
        i = this.isChallengeDone(),
        r, n;
    if (this.getId() != null && !!this.getGoals() && this.getGoals().length > 0 && !!this.getProgress())
        for (r = this.getGoals().length, n = 0; n < this.getGoals().length; ++n)
            if (!this.isGoalDoneByIndex(n, !1) || n + 1 >= this.getGoals().length) {
                t = !this.isGoalDoneByIndex(n, !1) && i && n > 0 ? n - 1 : n;
                break
            } return t
}

function getGoal(n) {
    return !!this.getGoals() && this.getGoals().length > n && n >= 0 ? this.getGoals()[n] : null
}

function getGoalValue(n) {
    return !n || !n.hasOwnProperty(webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_GOALS_VALUE) ? 0 : n[webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_GOALS_VALUE]
}

function getGoalType(n) {
    return !n || !n.hasOwnProperty(webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_GOALS_TYPE) ? null : n[webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_GOALS_TYPE]
}

function getRewardValue(n) {
    return !n || !n.hasOwnProperty(webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_REWARDS_VALUE) ? 0 : n[webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_REWARDS_VALUE]
}

function getRewardType(n) {
    return !n || !n.hasOwnProperty(webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_REWARDS_TYPE) ? null : n[webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_REWARDS_TYPE]
}

function getCurrentRewards() {
    var f = [],
        r, u, t, n, i, e;
    if (this.isChallengeDone()) {
        for (r = {}, u = this.getCurGoalIndex(), t = 0; t <= u; ++t)
            if ((t != u || this.isGoalDoneByIndex(u)) && (n = this.getRewards(this.getGoal(t)), !!n && n.length > 0))
                for (i = 0; i < n.length; ++i) r[this.getRewardType(n[i])] = n[i];
        for (e in r) f.push(r[e])
    }
    return f
}

function getGoalProgress(n) {
    var i = 0,
        t, r, u;
    return !this.getGoals() || !this.getProgress() || !n.hasOwnProperty(webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_GOALS_VALUE) || (t = this.getGoals().indexOf(n), t >= 0 && this.getProgress().hasOwnProperty(t) && (r = this.getProgress()[t], u = n[webfrontend.phe.cnc.data.ChallengeEvents.JSONTAG_GOALS_VALUE], i = Math.min(r, u))), i
}

function isGoalDoneByIndex(n, t) {
    t = !!t;
    var i = this.getGoal(n);
    return !!i && this.isGoalDone(i, t)
}

function isGoalDone(n, t) {
    var r = !1,
        u, i;
    if (t = !!t, t) {
        for (r = !0, u = this.getGoals(), i = 0; i < u.length; ++i)
            if (r = this.getGoalProgress(u[i]) >= this.getGoalValue(u[i]), !r || u[i] == n) break
    } else r = this.getGoalProgress(n) >= this.getGoalValue(n);
    return r
}

function applyCurrentRewards(n, t) {
    for (var r = this.getCurrentRewards(), i = 0; i < r.length; ++i)
        if (r[i].type == t) switch (r[i].type) {
            case ClientLib.Data.Challenge.Challenge.ECRT_Modify_CP_Costs:
            case ClientLib.Data.Challenge.Challenge.ECRT_Modify_RepairTime_Offense:
            case ClientLib.Data.Challenge.Challenge.ECRT_Modify_RepairCrystal_Offense:
                n > 0 && r[i].value > 0 && (n = Math.floor(n * (100 - r[i].value) / 100))
        }
    return n
}