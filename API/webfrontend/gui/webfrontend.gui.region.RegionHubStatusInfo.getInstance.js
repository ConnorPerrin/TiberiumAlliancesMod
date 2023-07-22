function setObject(n) {
    this.__RG = n;
    ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer() ? this.__RN.setValue(e + this.tr(v, ClientLib.Data.MainData.GetInstance().get_Server().get_HubControlTerminalClaimCount()) + r) : ClientLib.Data.MainData.GetInstance().get_Server().get_EndGameActive() ? this.__RN.setValue(e + this.tr(lt, ClientLib.Data.MainData.GetInstance().get_Server().get_HubControlTerminalClaimCount()) + r) : this.__RN.setValue(e + this.tr(it) + r);
    this.__bbI();
    this.onTick()
}

function onTick() {
    var n = ClientLib.Data.MainData.GetInstance().get_Time(),
        f = n.GetServerStep(),
        t, r;
    this.__bhi.isVisible() && (t = ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter().get_EndStep(), r = webfrontend.phe.cnc.Util.getTimespanString(n.GetTimeSpan(Math.max(0, t - f)), !0, !1), this.__bhi.setValue(this.tr(y, u + r + i)))
}

function onCitiesChange() {}