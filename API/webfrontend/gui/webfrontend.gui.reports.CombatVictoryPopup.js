webfront prototypeend.gui.reports.CombatVictoryPopup[16560 - 0]
function getInstance() {
    if (this.$$instance === null) throw new Error(lt + this + w);
    return this.$$instance || (this.$$allowconstruct = !0, this.$$instance = null, this.$$instance = new this, delete this.$$allowconstruct), this.$$instance
}

function shouldShow() {
    var n = webfrontend.data.missions.MissionScriptParser.getInstance();
    return !n.isExecutingScript() || n.isExecutingMissionId(ClientLib.Data.Missions.EMissionDBIDs.GDI_FirstCombat) || n.isExecutingMissionId(ClientLib.Data.Missions.EMissionDBIDs.Nod_FirstCombat)
}