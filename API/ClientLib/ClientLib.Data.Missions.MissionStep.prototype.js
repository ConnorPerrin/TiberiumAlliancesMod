function get_MdbId() {
    return this.UQDYTP
}

function get_Name() {
    return this.TNEABK == null ? "missing gamedata" : this.TNEABK.n
}

function get_Description() {
    return this.TNEABK == null ? "missing gamedata" : this.TNEABK.d
}

function get_Icon() {
    return this.TNEABK == null ? "null" : this.TNEABK.img
}

function get_AutoTrack() {
    return this.TNEABK == null ? !1 : this.TNEABK.a
}

function get_ScriptId() {
    return this.TNEABK == null ? 0 : this.TNEABK.si
}

function get_IsMilestone() {
    return this.CGTXYK
}

function set_IsMilestone() {
    this.CGTXYK = !0
}

function get_Completed() {
    return this.QVMWXM
}

function Complete() {
    this.QVMWXM = !0
}

function get_MissionId() {
    return this.TNEABK == null ? -1 : this.TNEABK.m
}

function get_Tasks() {
    return this.CVVNZA
}

function get_Rewards() {
    return this.RZRSMC
}

function get_NumRandomRewards() {
    return this.HDKTRZ
}

function CanCollectRewards() {
    var n = !this.QVMWXM,
        i = this.CVVNZA.d,
        t = {
            k: null,
            v: null
        };
    for (var r in i) t.k = r, t.v = i[r], n = n && t.v.IBTKMJ() == 1;
    return n
}