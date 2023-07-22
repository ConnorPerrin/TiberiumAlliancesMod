function setValue(n) {
    var i = Math.max(this.__bdt, Math.min(n, this.__bdu)) - this.__bdt,
        t = 1;
    this.__bdu - this.__bdt > 0 && (t = i / (this.__bdu - this.__bdt));
    this.__bdv.setWidth(Math.floor(t * this.__bds))
}

function setValueByRatio(n) {
    this.__bdv.setWidth(Math.floor(n * this.__bds))
}

function getValue() {
    return this.__bdv.getWidth()
}

function setText(n) {
    this.__RN.setValue(n)
}

function setTextParameter(n) {
    this.__RN.set(n)
}

function setImage(n) {
    this.__bdv.setSource(n)
}

function setBackgroundImage(n) {
    this.__bdw.setSource(n)
}

function hideBackgroundImage(n) {
    this.__bdw.setVisibility(n ? u : i)
}

function setCity(i) {
    i != null && (this.__bdx = i, this.setTextParameter({
        textColor: u,
        font: t,
        textAlign: f
    }), this.setImage(n), this.hideBackgroundImage(!0), this.onTick())
}

function onTick() {
    var s, h;
    if (this.__bdx != null) {
        var t = ClientLib.Data.MainData.GetInstance().get_Time(),
            c = this.__bdx.GetNextAppointmentInfo(),
            u = c.PrimaryAppointmentStep - t.GetServerStep(),
            f = c.SecondaryAppointmentStep - t.GetServerStep(),
            l = c.PrimaryProgress,
            a = c.SecondaryProgress;
        (u < f && l >= 0 && u < t.get_StepsPerHour() / 60 * ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_PRIORNOTICETIME) || a >= 0 && f < t.get_StepsPerHour() / 60 * ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_PRIORNOTICETIME)) && (u <= 0 && (l = 1), f <= 0 && (a = 1), s = r, h = 1, u > 0 && u < f ? (s = webfrontend.phe.cnc.Util.getTimespanString(t.GetTimeSpan(u), !0), h = l, this.setImage(n)) : f > 0 ? (s = webfrontend.phe.cnc.Util.getTimespanString(t.GetTimeSpan(f), !0), h = a, this.setImage(i)) : (s = this.tr(o), h = 1, this.setImage(e)), this.setText(s), this.setValueByRatio(h))
    }
}