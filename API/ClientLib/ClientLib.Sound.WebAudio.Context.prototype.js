function CreateInternalContext() {
    var n = new AudioContext;
    this.m_Context = n;
    this.m_HasOutputs = n.sampleRate > 0
}

function getDestination() {
    return this.m_Context.destination
}

function getCurrentTime() {
    return this.m_Context.currentTime
}

function createBufferSource() {
    return this.m_HasOutputs ? (new $I.CXDCEF).GWXSMK(this.ARYNIU()) : (new $I.FUFEHA).SLPWTI()
}

function createGainNode() {
    return this.m_HasOutputs ? (new $I.SIRUED).GWXSMK(this.AWAIPG()) : (new $I.TEAQIU).SLPWTI()
}

function decodeAudioData(n, t) {
    this.m_HasOutputs && this.m_Context.decodeAudioData(n, t)
}