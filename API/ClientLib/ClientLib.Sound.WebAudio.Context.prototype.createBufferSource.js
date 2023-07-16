[object m_BufferSourceAudioBufferSourceNode]
function get_loop() {
    return this.m_BufferSource.loop
}

function set_loop(n) {
    this.m_BufferSource.loop = n
}

function get_buffer() {
    return this.m_BufferSource.buffer
}

function set_buffer(n) {
    this.m_BufferSource.buffer = n
}

function connect(n) {
    this.m_BufferSource.connect(n.SEBCIK())
}

function start(n) {
    this.m_BufferSource.start(n)
}

function stop(n) {
    this.m_BufferSource.stop(n)
}

function disconnect() {
    this.m_BufferSource.disconnect()
}

function getPlaybackState() {
    return this.m_BufferSource.playbackState
} [object m_BufferSourceAudioBufferSourceNode]