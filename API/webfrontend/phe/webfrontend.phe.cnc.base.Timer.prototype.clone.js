function startFrameGeneration() {
    this.__vV || (this.__vV = !0, ClientLib.Base.Timer.GetInstance().Step(), window.requestAnimFrame(webfrontend.phe.cnc.base.Timer.nextFrame))
}

function onTrigger() {
    if (this.__vU++, !(this.__vU < this.__vT)) {
        this.__vU = 0;
        this.Frame++;
        var n = webfrontend.phe.cnc.base.PerfManager.getInstance().start(webfrontend.phe.cnc.base.Timer.PerfCntTrigger);
        ClientLib.Base.Timer.GetInstance().Step();
        this.fireEvent(t);
        n.stop()
    }
}

function onUITrigger() {
    var n = webfrontend.phe.cnc.base.PerfManager.getInstance().start(webfrontend.phe.cnc.base.Timer.PerfCntUITrigger);
    this.fireEvent(r);
    n.stop()
}

function onTimerTrigger() {
    this.fireEvent(t)
}
qx.event uiTimer.Timer[15180 - 0]