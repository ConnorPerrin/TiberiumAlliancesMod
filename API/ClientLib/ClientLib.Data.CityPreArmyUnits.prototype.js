function get_OffenceUnitsPerRowCounter() {
    return this.CNUUNT
}

function get_ArmyUnits() {
    return this.ZVRONF
}

function GetUnitByCoord(n, t) {
    var i;
    if (this.ZVRONF != null)
        for (i = 0; i < this.ZVRONF.l.length; i++)
            if (!this.ZVRONF.l[i].JGWFOH() && this.ZVRONF.l[i].EZVHOT() == n && this.ZVRONF.l[i].JXTDIO() == t) return this.ZVRONF.l[i];
    return null
}

function IsAttackSetupValid() {
    for (var n = 0; n < this.CNUUNT.length; n++)
        if (this.CNUUNT[n] > $I.GGTBLR.RIREVA()) return !1;
    return !0
}

function IsAbleToAttack() {
    var i, n, t;
    if (this.ZVRONF != null)
        for (i = this.ZVRONF.l, t = 0; t < i.length; t++)
            if (n = i[t], n.OYXZWI() && n.OCYOUI() > 0 && n.TOIJBS().MSLFMA()) return !0;
    return !1
}

function UpdateFormation(n) {
    var i = !0,
        r, t;
    if (n && this.ZVRONF != null && (r = this.WMHGWF.SGRQBS().LQZHUJ(), this.ZVRONF.l.length == r.c))
        for (i = !1, t = 0; t < this.ZVRONF.l.length; t++)
            if (this.ZVRONF.l[t].TOIJBS() == null) {
                i = !0;
                break
            } i && this.QWKUDY()
}

function ShiftAllUnits(n) {
    var f = this.ADIBAL.hasOwnProperty("$d") ? this.ADIBAL.$d[0] : this.ADIBAL.length,
        e = this.ADIBAL.hasOwnProperty("$d") ? this.ADIBAL.$d[1] : this.ADIBAL.length,
        t, i, r, u;
    switch (n) {
        case $I.DMSTTC.ESD_LEFT:
        case $I.DMSTTC.ESD_RIGHT:
            for (t = 0; this.ZVRONF != null && t < this.ZVRONF.l.length; t++) this.ZVRONF.l[t].SJYCCX((f + this.ZVRONF.l[t].EZVHOT() + (n == $I.DMSTTC.ESD_RIGHT ? 1 : -1)) % f);
            break;
        case $I.DMSTTC.ESD_UP:
        case $I.DMSTTC.ESD_DOWN:
            for (i = 0; this.ZVRONF != null && i < this.ZVRONF.l.length; i++) this.ZVRONF.l[i].ULQAQC((e + this.ZVRONF.l[i].JXTDIO() + (n == $I.DMSTTC.ESD_DOWN ? 1 : -1)) % e);
            break;
        case $I.DMSTTC.ESD_FLIPH:
            for (r = 0; this.ZVRONF != null && r < this.ZVRONF.l.length; r++) this.ZVRONF.l[r].SJYCCX(f - this.ZVRONF.l[r].EZVHOT() - 1);
            break;
        case $I.DMSTTC.ESD_FLIPV:
            for (u = 0; this.ZVRONF != null && u < this.ZVRONF.l.length; u++) this.ZVRONF.l[u].ULQAQC(e - this.ZVRONF.l[u].JXTDIO() - 1)
    }
    this.OOXISB()
}

function ShiftUnitColumnV(n, t) {
    for (var r = this.ADIBAL.hasOwnProperty("$d") ? this.ADIBAL.$d[1] : this.ADIBAL.length, i = 0; this.ZVRONF != null && i < this.ZVRONF.l.length; i++) this.ZVRONF.l[i].EZVHOT() == n && this.ZVRONF.l[i].ULQAQC((r + this.ZVRONF.l[i].JXTDIO() + (t == $I.DMSTTC.ESD_DOWN ? 1 : -1)) % r);
    this.OOXISB()
}

function ShiftUnitColumnH(n, t) {
    for (var i, r = this.ADIBAL.hasOwnProperty("$d") ? this.ADIBAL.$d[0] : this.ADIBAL.length, f = !1, u = 0; this.ZVRONF != null && u < this.ZVRONF.l.length; u++)
        if (this.ZVRONF.l[u].EZVHOT() == n) {
            f = !0;
            break
        } if (f) {
        for (i = 0; this.ZVRONF != null && i < this.ZVRONF.l.length; i++) this.ZVRONF.l[i].EZVHOT() == (r + n + (t == $I.DMSTTC.ESD_RIGHT ? 1 : -1)) % r ? this.ZVRONF.l[i].SJYCCX(n) : this.ZVRONF.l[i].EZVHOT() == n && this.ZVRONF.l[i].SJYCCX((r + this.ZVRONF.l[i].EZVHOT() + (t == $I.DMSTTC.ESD_RIGHT ? 1 : -1)) % r);
        this.OOXISB()
    }
}

function add_ArmyChanged(n) {
    var t = {},
        i, r = this.OSEGZI,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.OSEGZI, t.$r = $I.TSJVQL.JXWJWI($I.BULBNO, u, i, t), this.OSEGZI = t.a, t.$r); while (r != i)
}

function remove_ArmyChanged(n) {
    var t = {},
        i, r = this.OSEGZI,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.OSEGZI, t.$r = $I.TSJVQL.JXWJWI($I.BULBNO, u, i, t), this.OSEGZI = t.a, t.$r); while (r != i)
}