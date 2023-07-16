function get_X() {
    return this.EVTRHX
}

function set_X(n) {
    this.EVTRHX = n
}

function get_Y() {
    return this.FCLTOQ
}

function set_Y(n) {
    this.FCLTOQ = n
}

function Equals(n, t) {
    return this.EVTRHX == n && this.FCLTOQ == t
}

function get_CoordId() {
    return $I.NZIFZB.XKYIRQ(this.EVTRHX, this.FCLTOQ)
}