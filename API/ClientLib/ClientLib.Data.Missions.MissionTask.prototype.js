function get_MdbId() {
    return this.RKBLSI
}

function get_Description() {
    return this.CWYCTC == null ? "missing gamedata" : this.IBTKMJ() >= 1 && this.CWYCTC.fd != null && this.CWYCTC.fd != "" ? this.CWYCTC.fd : this.CWYCTC.d
}

function get_Priority() {
    return this.CWYCTC == null ? 0 : this.CWYCTC.pr
}

function set_FullCount(n) {
    this.MSTHJH = n
}

function get_FullCount() {
    return this.MSTHJH > 0 ? this.MSTHJH : this.CWYCTC == null ? -1 : this.CWYCTC.c
}

function get_Progress() {
    return this.KMZKEZ
}

function set_Progress(n) {
    this.KMZKEZ = n
}

function get_Params() {
    return this.ZUTJIU
}

function get_TypeId() {
    return this.TWHTFM
}