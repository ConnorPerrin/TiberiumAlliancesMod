function formatTimePart(n, t) {
    for (var i = n.toString(); i.length < t;) i = l + i;
    return i
}

function _onConfigChanged() {
    var n = webfrontend.phe.cnc.config.Config.getInstance().getTimeZone();
    switch (n) {
        case ClientLib.Config.Main.ETimeOffsetType.Local:
            this.__bub.setValue(this.tr(r));
            break;
        case ClientLib.Config.Main.ETimeOffsetType.Server:
            this.__bub.setValue(this.tr(y));
            break;
        case ClientLib.Config.Main.ETimeOffsetType.Custom:
            this.__bub.setValue(this.tr(h))
    }
}

function _onTick() {
    var t = ClientLib.Data.MainData.GetInstance().get_Time(),
        i = parseInt(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_TIMEOFFSETTYPE), 10);
    switch (i) {
        case ClientLib.Config.Main.ETimeOffsetType.Local:
            this.__Wi = new Date;
            break;
        case ClientLib.Config.Main.ETimeOffsetType.Custom:
        case ClientLib.Config.Main.ETimeOffsetType.Server:
            this.__Wi.setTime(t.GetStepTime(t.GetServerStep()))
    }
    this.__buc.setValue(webfrontend.phe.cnc.Util.getDateTimeString(this.__Wi, !1, !1, !0));
    this.__bud.setValue(Math.round(webfrontend.phe.cnc.base.PerfManager.getInstance().getRuntimeInformation().fps).toString() + n)
}