function get_CurrentTargetBaseId() {
    return this.LVLHHB
}

function set_CurrentTargetBaseId(n) {
    var t, i;
    this.LVLHHB != n && (t = $I.CVRAYR.VAMLQD().ZBVLXL().WEDXOB(n), t != null && t.ZMTALL((new $I.VYKQUV).TFDQYD(this, this.NBJCVJ)), i = this.LVLHHB, this.LVLHHB = n, this.SAIXFK == null && (this.SAIXFK = (new $I.UDBZSB).SLPWTI()), this.LVLHHB > 0 && !this.SAIXFK.XOHVCR(this.LVLHHB) && (this.SAIXFK.UHNVSA(this.LVLHHB, this.UZQRYT), this.UZQRYT = (new $I.DAVHXA).VIZEXT(this.HAHEHR)), this.VSNPGU != null && this.VSNPGU.ZZUCDU(i, this.LVLHHB))
}

function GetFormationByTargetBaseId(n) {
    var t;
    return this.LVLHHB <= 0 && this.ETSCMP(n), t = this.UZQRYT, this.SAIXFK != null && this.SAIXFK.XOHVCR(n) && (t = this.SAIXFK.d[n]), t
}

function GetUpdatedFormationByTargetBaseId(n) {
    var i, t;
    return this.LVLHHB <= 0 && this.ETSCMP(n), i = !1, t = this.UZQRYT, this.SAIXFK != null && this.SAIXFK.XOHVCR(n) && (t = this.SAIXFK.d[n], i = !0), t.PTWLXJ(i), t
}

function add_CurrentTargetChange(n) {
    var t = {},
        i, r = this.VSNPGU,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.VSNPGU, t.$r = $I.TSJVQL.JXWJWI($I.VSDYHZ, u, i, t), this.VSNPGU = t.a, t.$r); while (r != i)
}

function remove_CurrentTargetChange(n) {
    var t = {},
        i, r = this.VSNPGU,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.VSNPGU, t.$r = $I.TSJVQL.JXWJWI($I.VSDYHZ, u, i, t), this.VSNPGU = t.a, t.$r); while (r != i)
}