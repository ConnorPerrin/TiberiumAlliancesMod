function setObject(n) {
    this.__RG = n;
    this.onCitiesChange();
    this.onTick()
}

function onTick() {}

function onCitiesChange() {
    var e;
    this.__bgJ.setSource(webfrontend.phe.cnc.gui.util.Images.getFactionIcon(this.__RG.get_OldBaseOwnerFaction()));
    this.__bgL.setBase(f + webfrontend.theme.Color.colors[u] + r + this.__RG.get_Name() + n, -1);
    this.__bgN.setValue(this.tr(g, s + this.__RG.get_BaseLevel().toString() + n));
    this.__bgO.setCoordinates(this.__RG.get_RawX(), this.__RG.get_RawY(), b + webfrontend.phe.cnc.gui.util.Numbers.formatCoordinates(this.__RG.get_RawX(), this.__RG.get_RawY()) + n);
    this.__bgT.setValue(s + ClientLib.Data.MainData.GetInstance().get_World().SurroundedEnemies(this.__RG.get_RawX(), this.__RG.get_RawY()).toString() + n);
    this.__RG.get_OldBaseOwnerId() > 0 ? (this.__bgV.setPlayer(f + webfrontend.theme.Color.colors[u] + r + this.__RG.get_OldBaseOwnerName() + n, this.__RG.get_OldBaseOwnerId()), this.__bgW.setAlliance(f + webfrontend.theme.Color.colors[u] + r + this.__RG.get_OldBaseOwnerAllianceName() + n, this.__RG.get_OldBaseOwnerAllianceId() > 0 ? this.__RG.get_OldBaseOwnerAllianceId() : webfrontend.gui.widgets.AllianceLabel.ESpecialAllianceIdMutants), this.__bgV.show(), this.__bgU.show()) : (this.__bgV.exclude(), this.__bgU.exclude(), this.__bgW.setAlliance(f + webfrontend.theme.Color.colors[u] + r + this.__RG.get_OldBaseOwnerAllianceName() + n, webfrontend.gui.widgets.AllianceLabel.ESpecialAllianceIdMutants));
    this.__bgX.setPlayer(f + webfrontend.theme.Color.colors[u] + r + this.__RG.get_PlayerName() + n, this.__RG.get_PlayerId());
    this.__bgY.setAlliance(f + webfrontend.theme.Color.colors[u] + r + this.__RG.get_AllianceName() + n, this.__RG.get_AllianceId());
    this.__RG.get_OldBaseOwnerAllianceName() == t && this.__bgW.setNoAlliance();
    this.__RG.get_AllianceName() == t && this.__bgY.setNoAlliance();
    var o = ClientLib.Data.MainData.GetInstance().get_Time(),
        h = this.__RG.get_CreateStep(),
        i = o.GetJSStepTime(h);
    this.__RG.get_OldBaseOwnerFaction() == ClientLib.Base.EFactionType.FORFaction ? i.setHours(i.getHours() + 24) : i.setHours(i.getHours() + 24);
    e = webfrontend.phe.cnc.Util.getDateTimeString(i);
    this.__bha.setValue(this.tr(d, e, this.__RG.get_OwnerBaseName()))
}