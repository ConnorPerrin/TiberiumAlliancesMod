function _getMarkerDirectionPath() {
    return l
}

function startMissionStep(n) {
    var t, i;
    (this.__wG() || !this.isExecutingScript()) && (t = ClientLib.Data.MainData.GetInstance().get_Missions().GetMissionStep(n), t && t.get_ScriptId() > 0 && (this.__wC = n, this.stopMissions(), i = !1, this.loadMissionScript(t.get_ScriptId(), 0, i)))
}

function getLastMissionStep() {
    return this.__wC
}

function stopMissions() {
    var t, n;
    for (t in this.__wz) n = this.__wz[t], n && n.active && (this.__wQ(t), this._onMissionStop(), n.active = !1)
}

function _onMissionStop() {
    var n = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
    n && n.get_CityBuildingsData().set_ValidPlacementBuildingTypeFlags(-1);
    ClientLib.Vis.VisMain.GetInstance().set_IsTutorialModeActivated(!1);
    ClientLib.Vis.VisMain.GetInstance().set_LockMove(!1);
    ClientLib.Vis.VisMain.GetInstance().GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.SelectTouch).set_ObjectSelectionEnabled(!0);
    ClientLib.Vis.VisMain.GetInstance().GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.SelectRegion).set_ObjectSelectionFilter(-1);
    qx.core.Init.getApplication().unprepareForTutorialScript()
}

function stopMission(n, t) {
    var i = this.__wz[n],
        u, r, f;
    if (i && i.active) {
        if (this.__wQ(n), this._onMissionStop(), !t)
            for (t = !0, u = i.data[ClientLib.Data.Missions.TAG.STEPS], r = 0; r < u.length; ++r)
                if (f = u[r], f.hasOwnProperty(ClientLib.Data.Missions.TAG.LABEL) && f[ClientLib.Data.Missions.TAG.LABEL] == ClientLib.Data.Missions.VALUE.STEPLBL_SUMMARY) {
                    i.curstep = r;
                    t = !1;
                    break
                } t && (i.active = !1)
    }
}

function getCurrentStep(n) {
    var t = this.__wz[n];
    if (t && t.curstep > 0) return t.data[ClientLib.Data.Missions.TAG.STEPS][t.curstep]
}

function loadMissionScript(n, t, i) {
    var u, e, o, r;
    n != undefined && n != null && (this.__wE = !0, n = String(n), t != undefined && t != null && (this.__wy[n] = t), u = h, e = h, n = this._onPrepareLoadingScriptId(n), o = String(n).indexOf(f) <= 0 ? n + f + (i ? p : qx.locale.Manager.getInstance().getLocale()) : n, typeof MISSIONS == g && MISSIONS.hasOwnProperty(o) ? this.__wM(MISSIONS[o]) : (e = !i && String(n).indexOf(f) > 0 ? n + k : n + f + (i ? p : qx.locale.Manager.getInstance().getLocale()) + k, u = ResStore + tt + e, r = new qx.io.remote.Request(u, ri, oi), r.setProhibitCaching(!0), r.addListener(ci, this.__wL, this), r.addListener(vi, this.__wN, this), r.addListener(rr, this.__wN, this), r.send()))
}

function _onPrepareLoadingScriptId(n) {
    return n
}

function setVariable(n, t, i) {
    var r = this.__wz[n];
    r.data[t] = i
}

function getVariable(n, t) {
    var i = this.__wz[n];
    return i.data[t]
}

function isExecutingMissionId(n) {
    return this.__wz.hasOwnProperty(n) && this.__wz[n].active
}

function triggerUITick() {
    this.__we()
}

function _checkNeedsModule(n, t) {
    return this.__wK(null, n, ClientLib.Data.Missions.TAG.STEPS, t)
}

function isExecutingScript() {
    var n, t;
    if (this.__wE || this._onIsExecutingScript()) return !0;
    for (n in this.__wz)
        if (t = this.__wz[n], t.active) return !0;
    return !1
}

function _onIsExecutingScript() {
    return !1
}

function _checkPlayAreaViewMode() {
    return !1
}

function _checkResearchOverlayTabCategory() {
    return !1
}

function _checkReportsOverlayTabCategory() {
    return !1
}

function _checkMessageBoxOpened() {
    return !1
}

function _checkAllianceOverlayTabCategory() {
    return !1
}

function _checkOffenseUnitMoved() {
    return !1
}

function _execShowTutorial() {}

function _execShowInfo() {}

function _execShowTutorialShorty() {}

function _execHUDTutorialMode() {}

function _execFocusBase() {}

function _execGotoForum() {}

function _execReportsOverlayTabCategory() {}

function _execSetObjectSelection(n, t) {
    ClientLib.Vis.VisMain.GetInstance().GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.SelectTouch).set_ObjectSelectionEnabled(t.b)
}

function _execSetRegionObjectSelectionFilter(n, t) {
    ClientLib.Vis.VisMain.GetInstance().GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.SelectRegion).set_ObjectSelectionFilter(t.v)
}

function _execCloseContextMenu() {}

function _execStartMissionScript(n, t) {
    this.startMissionStep(t.i)
}

function _execSetCssStyle() {}

function _execPreSelectBase() {}

function findWidgetByPath(n, t) {
    var i;
    if (!n) return null;
    var u = qx.util.StringSplit.split(n, kt),
        f = null,
        r = qx.core.Init.getApplication();
    for (i = 0; i < u.length; ++i)
        if (f = r, r = f.getUIItem ? f.getUIItem(u[i], t, i < u.length - 1) : null, !r) break;
    return r
}

function parseStringParameters(n, t) {
    var r, i;
    for (t = t || this.__wB, r = 0; r < t.length; ++r) i = t[r], n.hasOwnProperty(i) && (n[i] = this.__xB(n[i], n[i + bi]))
}

function executeScriptDirectly(n) {
    this.__wO(n)
}

function loadScriptDirectly(n, t) {
    this.__wC = n;
    this.loadMissionScript(n, 0, t)
}