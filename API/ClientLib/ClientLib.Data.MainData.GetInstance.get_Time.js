function GetServerStep() {
    if (this.GDBVVM == null || this.GDBVVM.s == 0) return 0;
    var n = new Date,
        t = n.getTime() - this.GDBVVM.r - this.GDBVVM.d;
    return Math.floor(t / this.GDBVVM.s)
}

function GetJSStepTime(n) {
    if (this.GDBVVM == null || this.GDBVVM.s == 0) return new Date(0);
    var t = this.GDBVVM.r + this.GDBVVM.s * n + this.GDBVVM.d;
    return new Date(t)
}

function GetJSStepTimeGetTime(n) {
    return this.GetJSStepTime(n).getTime()
}

function GetStepTime(n) {
    if (this.GDBVVM == null || this.GDBVVM.s == 0) return 0;
    return this.GDBVVM.r + this.GDBVVM.s * n + this.GDBVVM.d
}

function GetTimespanString(n, t) {
    return webfrontend.phe.cnc.Util.getTimespanString(this.GAQUGD(Math.max(0, n - t)), !1)
}

function GetTimeSpan(n) {
    return this.GDBVVM != null ? n * this.GDBVVM.s / 1e3 : 0
}

function get_StepsPerHour() {
    return this.GDBVVM == null ? 0 : Math.floor(36e5 / this.GDBVVM.s)
}

function get_StepsPerSecond() {
    return this.GDBVVM == null ? 0 : Math.floor(1e3 / this.GDBVVM.s)
}

function get_ServerOffset() {
    return this.GDBVVM != null ? this.GDBVVM.o * 36e5 : 0
}

function get_StepTime() {
    return this.GDBVVM != null ? this.GDBVVM.s : 0
}

function get_Diff() {
    return this.GDBVVM != null ? this.GDBVVM.d : 0
}

function SetTimeData(n) {
    this.GDBVVM = n
}