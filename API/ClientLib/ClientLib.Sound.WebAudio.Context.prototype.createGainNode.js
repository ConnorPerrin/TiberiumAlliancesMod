[object m_GainNodeGainNode]
function connect(n) {
    this.m_GainNode != null && this.m_GainNode.connect(n)
}

function disconnect() {
    this.m_GainNode != null && this.m_GainNode.disconnect()
}

function getGain() {
    return this.m_GainNode == null ? (new $I.APCSAE).SLPWTI() : this.m_GainNode.gain
}

function getGainNode() {
    return this.m_GainNode
} [object m_GainNodeGainNode]