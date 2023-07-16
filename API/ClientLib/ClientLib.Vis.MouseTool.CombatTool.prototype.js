function GetMouseToolType() {
    return $I.PLIBEB.Combat
}

function Move(n, t) {
    return this.PMBREU.EZGUHK().LKWFBA(n, t), !0
}

function KeyDown() {}

function KeyUp() {}

function Down() {
    return !0
}

function Up() {
    return !0
}

function Activate() {}

function Deactivate() {}

function VisUpdate() {}

function TouchStart() {
    return !0
}

function TouchMove() {
    return !0
}

function TouchEnd(n) {
    var t, i, r;
    if (n.length > 0) {
        if (t = this.PMBREU.KIQLUA(n[0].X, n[0].Y), i = null, t.l.length > 0)
            for (i = t.l[0], r = 1; r < t.l.length; r++) t.l[r].VJTHAF() > i.VJTHAF() && (i = t.l[r]);
        this.PMBREU.EZGUHK().VCHVUT(i);
        this.GGGRKB != null && this.GGGRKB.BXOYLL(i)
    }
    return !0
}

function TouchCancel() {
    return !1
}

function add_OnHotspotObject(n) {
    var t = {},
        i, r = this.GGGRKB,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.GGGRKB, t.$r = $I.TSJVQL.JXWJWI($I.BFPEAD, u, i, t), this.GGGRKB = t.a, t.$r); while (r != i)
}

function remove_OnHotspotObject(n) {
    var t = {},
        i, r = this.GGGRKB,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.GGGRKB, t.$r = $I.TSJVQL.JXWJWI($I.BFPEAD, u, i, t), this.GGGRKB = t.a, t.$r); while (r != i)
}