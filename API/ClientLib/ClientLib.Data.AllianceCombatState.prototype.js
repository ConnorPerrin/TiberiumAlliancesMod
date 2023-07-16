function GetCombatByBaseId(n) {
    var t = {},
        i;
    return (t.$r = this.PSYGBN.ZOXRAI(n, t), i = t.b, t.$r) ? i : null
}

function GetCombatByAttackerBaseId(n) {
    var t = {},
        i;
    return (t.$r = this.VSRAAX.ZOXRAI(n, t), i = t.b, t.$r) ? i : null
}

function GetLockStepForTarget(n) {
    var t = {},
        i;
    return (t.$r = this.VXKKTG.ZOXRAI(n, t), i = t.b, t.$r) && i >= $I.CVRAYR.VAMLQD().GRIWFQ().YDFDTG() ? i : -1
}