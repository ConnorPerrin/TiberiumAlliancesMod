function setObject(n) {
    this.__RG = n;
    this.onCitiesChange();
    this.onTick()
}

function onTick() {
    var t = ClientLib.Data.MainData.GetInstance().get_Time(),
        f = t.GetServerStep(),
        r = ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter(),
        u;
    r.get_State() == ClientLib.Data.EndGame.EHubState.Ruin && (u = webfrontend.phe.cnc.Util.getTimespanString(t.GetTimeSpan(Math.max(0, r.get_EndStep() - f)), !0, !0), this.__bhw.setValue(i + u + n))
}

function onCitiesChange() {
    if (this.__RG != null) {
        this.__bhu.setSource(webfrontend.phe.cnc.gui.util.Images.getFactionIcon(ClientLib.Base.EFactionType.FORFaction));
        var t = Math.floor(this.__RG.get_RawX() + this.__RG.get_SizeX() / 2),
            i = Math.floor(this.__RG.get_RawY() + this.__RG.get_SizeY() / 2);
        this.__GB.setCoordinates(t, i, c + webfrontend.theme.Color.colors[f] + o + webfrontend.phe.cnc.gui.util.Numbers.formatCoordinates(t, i) + n)
    }
}