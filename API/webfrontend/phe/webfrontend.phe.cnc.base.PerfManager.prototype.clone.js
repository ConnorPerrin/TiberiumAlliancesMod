function getRuntimeInformation() {
    return {
        fps: this.__vX,
        tickT: this.__wa,
        uiTickT: this.__wb
    }
}

function start(n) {
    this.__vW.hasOwnProperty(n) || this.__wc(n);
    var t = this.__vW[n];
    return t.lastStart = (new Date).getTime(), t
}

function stop(n) {
    if (this.__vW.hasOwnProperty(n)) {
        var t = this.__vW[n];
        t.hits++;
        t.lastDelta = (new Date).getTime() - t.lastStart;
        t.totalTime += t.lastDelta;
        t.lastStart = -1
    }
}

function dumpToConsole() {
    var i, n;
    for (i in this.__vW) n = this.__vW[i], console.log(i + u + n.hits + t + n.totalTime + f + n.getAvg())
}

function getCounter(n) {
    return this.__vW[n]
}

function clear() {
    for (var n in this.__vW) delete this.__vW[n]
}