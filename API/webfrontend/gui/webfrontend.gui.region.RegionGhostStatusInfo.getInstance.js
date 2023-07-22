function setObject(n) {
    this.__RG = n;
    this.onCitiesChange();
    this.onTick()
}

function onTick() {
    var o = ClientLib.Data.MainData.GetInstance().get_Player(),
        s = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(o.GetCommandPointCount(), !0),
        n, i, r, t, e;
    if (this.__bgK.setValue(s.toString()), n = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.__RG.get_Id()), n != null) {
        i = ClientLib.Data.MainData.GetInstance().get_Time();
        n.get_CityRepairData().CanRepairAll(ClientLib.Vis.Mode.City);
        r = n.get_CityRepairData().get_CachedFullRepairAllCost();
        t = 0;
        r != null && (t = r.d[ClientLib.Base.EResourceType.RepairChargeBase]);
        var u = Math.floor(n.GetResourceCount(ClientLib.Base.EResourceType.RepairChargeBase)),
            h = webfrontend.phe.cnc.Util.getTimespanString(i.GetTimeSpan(u)),
            f = 0;
        t > 0 && (f = Math.floor(Math.min(100, u * 100 / t)));
        e = webfrontend.phe.cnc.Util.getTimespanString(i.GetTimeSpan(t), !0);
        this.__bgQ.setValue(this.tr(a, h, e, f))
    }
}

function onCitiesChange() {
    var n = ClientLib.Data.MainData.GetInstance().get_Time(),
        r, t;
    this.__bgJ.setSource(webfrontend.phe.cnc.gui.util.Images.getFactionIcon(this.__RG.get_PlayerFaction()));
    this.__bgL.setBase(e + webfrontend.theme.Color.colors[f] + o + this.__RG.get_Name() + i, this.__RG.get_Id());
    this.__bgM.setPlayer(e + webfrontend.theme.Color.colors[f] + o + this.__RG.get_PlayerName() + i, this.__RG.get_PlayerId());
    this.__bgN.setValue(this.tr(nt, b + this.__RG.get_BaseLevel().toString() + i));
    this.__bgO.setCoordinates(this.__RG.get_RawX(), this.__RG.get_RawY(), e + webfrontend.theme.Color.colors[f] + o + webfrontend.phe.cnc.gui.util.Numbers.formatCoordinates(this.__RG.get_RawX(), this.__RG.get_RawY()) + i);
    this.__GG.setAlliance(e + webfrontend.theme.Color.colors[f] + o + this.__RG.get_AllianceName() + i, this.__RG.get_AllianceId());
    this.__RG.get_AllianceName() == u && this.__GG.setNoAlliance();
    this.__RG.get_RecoveryEndStep() > n.GetServerStep() ? (t = webfrontend.phe.cnc.Util.getDateTimeString(n.GetJSStepTime(this.__RG.get_RecoveryEndStep())), this.__bgR.setValue(this.tr(c, t)), this.__bgR.show()) : this.__bgR.exclude();
    r = this.__RG.get_RecoveryEndStep() - ClientLib.Data.MainData.GetInstance().get_Server().get_MaxRecoveryTimeToMove() * 60;
    r > n.GetServerStep() ? (t = webfrontend.phe.cnc.Util.getDateTimeString(n.GetJSStepTime(r)), this.__bgS.setValue(this.tr(h, t)), this.__bgS.show()) : this.__bgS.exclude()
}