function get_AvailableSceneTypes() {
    return this.PIDBOD
}

function CreateScene(n, t) {
    var i = {},
        r;
    return (i.$r = this.TQVXDR.ZOXRAI(n, i), r = i.b, i.$r) ? r.CYBWDG(t) : null
}

function RegisterSceneType(n, t) {
    this.TQVXDR.GXVKTX(n, t)
}

function SoundCreated(n) {
    this.KVPXAA.l.push(n)
}

function SoundDisposed(n) {
    this.KVPXAA.WILRBK(n)
}

function get_AudioOn() {
    return this.DHAGOO
}

function set_AudioOn(n) {
    var u, i, t, r;
    if (this.DHAGOO != n) {
        if (this.DHAGOO = n, this.UQXIFJ())
            for (i = this.KVPXAA.l, r = 0; r < i.length; r++) t = i[r], t.PEVIQS() != "" && t.SFJFXM() && t.GWJFHU();
        else
            for (t = this.KVPXAA.l, i = 0; i < t.length; i++) u = t[i], u.KVOEIS();
        this.SEYBAB != null && this.SEYBAB.KQCFDF(this.DHAGOO)
    }
}

function add_AudioOnChanged(n) {
    var t = {},
        i, r = this.SEYBAB,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.SEYBAB, t.$r = $I.TSJVQL.JXWJWI($I.CMXLRT, u, i, t), this.SEYBAB = t.a, t.$r); while (r != i)
}

function remove_AudioOnChanged(n) {
    var t = {},
        i, r = this.SEYBAB,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.SEYBAB, t.$r = $I.TSJVQL.JXWJWI($I.CMXLRT, u, i, t), this.SEYBAB = t.a, t.$r); while (r != i)
}