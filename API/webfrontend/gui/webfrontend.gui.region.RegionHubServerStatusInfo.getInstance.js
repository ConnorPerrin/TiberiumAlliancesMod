function setObject(t) {
    this.__RG != null && webfrontend.phe.cnc.Util.detachNetEvent(this.__RG.get_Obj(), n, ClientLib.Data.EndGame.HubChanged, this, this.onCitiesChange);
    this.__RG = t;
    t != null && webfrontend.phe.cnc.Util.attachNetEvent(t.get_Obj(), n, ClientLib.Data.EndGame.HubChanged, this, this.onCitiesChange);
    this.onCitiesChange();
    this.onTick()
}

function onTick() {
    var n = ClientLib.Data.MainData.GetInstance().get_Time(),
        r = n.GetServerStep(),
        f = webfrontend.phe.cnc.Util.getTimespanString(n.GetTimeSpan(Math.max(0, this.__RG.get_EndStep() - r)), !0, !0);
    this.__bhw.setValue(a + f + u);
    this.__bhz.isVisible() || this.__RG.get_ServerState() != ClientLib.Data.EndGame.EHubState.Crater || this.__bhz.setVisibility(ClientLib.Data.MainData.GetInstance().get_Player().get_HasControlHubCode() ? i : t)
}

function onCitiesChange() {
    if (this.__RG != null) {
        this.__bhu.setSource(webfrontend.phe.cnc.gui.util.Images.getFactionIcon(ClientLib.Base.EFactionType.FORFaction));
        var n = Math.floor(this.__RG.get_RawX() + this.__RG.get_SizeX() / 2),
            e = Math.floor(this.__RG.get_RawY() + this.__RG.get_SizeY() / 2);
        this.__GB.setCoordinates(n, e, b + webfrontend.theme.Color.colors[w] + nt + webfrontend.phe.cnc.gui.util.Numbers.formatCoordinates(n, e) + u);
        switch (this.__RG.get_ServerState()) {
            case ClientLib.Data.EndGame.EHubState.Impact:
                this.__RO.setValue(this.tr(l));
                this.__bhy.setValue(this.tr(k));
                this.__bhv.setValue(this.tr(it));
                break;
            case ClientLib.Data.EndGame.EHubState.Crater:
                this.__RO.setValue(this.tr(f));
                this.__bhy.setValue(this.tr(r));
                this.__bhv.setValue(this.tr(d));
                break;
            case ClientLib.Data.EndGame.EHubState.Claim:
                this.__RO.setValue(this.tr(f));
                this.__bhy.setValue(this.tr(r));
                this.__bhv.setValue(this.tr(o))
        }
        this.__bhz.setVisibility(ClientLib.Data.MainData.GetInstance().get_Player().get_HasControlHubCode() ? i : t)
    }
}