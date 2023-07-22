webfront prototypeend.phe.cnc.base.Timer[15180 - 0]
function getInstance() {
    if (this.$$instance === null) throw new Error(lt + this + w);
    return this.$$instance || (this.$$allowconstruct = !0, this.$$instance = null, this.$$instance = new this, delete this.$$allowconstruct), this.$$instance
}

function nextFrame() {
    webfrontend.phe.cnc.base.Timer.getInstance().onTrigger();
    window.requestAnimFrame(webfrontend.phe.cnc.base.Timer.nextFrame)
}

function nextAppFrame() {
    var n;
    webfrontend.phe.cnc.base.Timer.getInstance().onTrigger();
    n = ClientLib.Draw.NativeApp.CommandBuffer.GetBuffer(i);
    window.requestAnimFrame(webfrontend.phe.cnc.base.Timer.nextAppFrame)
}