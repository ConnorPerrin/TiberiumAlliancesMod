function setObject(n) {
    this.__RG = n;
    this.onCitiesChange();
    this.__bbI();
    this.onTick()
}

function onTick() {
    if (this.__bhh.isVisible()) {
        var n = ClientLib.Data.MainData.GetInstance().get_Time(),
            i = n.GetServerStep(),
            t = webfrontend.phe.cnc.Util.getTimespanString(n.GetTimeSpan(Math.max(0, this.__RG.get_EndStep() - i)), !0, !1);
        switch (this.__RG.get_State()) {
            case ClientLib.Data.EndGame.EHubState.Ruin:
                this.__bhC.setValue(this.tr(et, s + t + f));
                break;
            case ClientLib.Data.EndGame.EHubState.Claim:
                this.__bhC.setValue(this.tr(pt, s + t + f))
        }
    }
}

function onCitiesChange() {
    if (this.__RG != null) {
        var n = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(),
            f = ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter(),
            t = f.GetClosestAttackField(n.get_X(), n.get_Y()),
            i = t[0] - n.get_X(),
            r = t[1] - n.get_Y(),
            e = i * i + r * r,
            u = ClientLib.Data.MainData.GetInstance().get_Server().get_MaxAttackDistance();
        e > u * u ? this.__bhD.setValue(this.tr(kt, n.get_Name())) : this.__bhD.setValue(this.tr(dt, n.get_Name()))
    }
}