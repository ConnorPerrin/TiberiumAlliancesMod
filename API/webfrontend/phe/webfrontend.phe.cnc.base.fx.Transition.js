function get(n) {
    return webfrontend.phe.cnc.base.fx.Transition[n] || !1
}

function linear(n) {
    return n
}

function easeInQuad(n) {
    return Math.pow(2, 10 * (n - 1))
}

function easeOutQuad(n) {
    return -Math.pow(2, -10 * n) + 1
}

function sinodial(n) {
    return -Math.cos(n * Math.PI) / 2 + .5
}

function flicker(n) {
    var n = -Math.cos(n * Math.PI) / 4 + .75 + Math.random() / 4;
    return n > 1 ? 1 : n
}

function wobble(n) {
    return -Math.cos(n * Math.PI * 9 * n) / 2 + .5
}

function pulse(t, i) {
    return i = typeof i == n ? i : 5, Math.round(t % (1 / i) * i) == 0 ? Math.floor(t * i * 2 - t * i * 2) : 1 - Math.floor(t * i * 2 - t * i * 2)
}

function spring(n) {
    return 1 - Math.cos(n * 4.5 * Math.PI) * Math.exp(-n * 6)
}

function none() {
    return 0
}

function full() {
    return 1
}