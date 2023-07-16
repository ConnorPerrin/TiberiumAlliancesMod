function UpdateFunds(n) {
    ClientLib.Net.CommunicationManager.GetInstance().SendCommand("UpdateFunds", {
        force: n
    }, (new $I.JNOYHJ).TFDQYD(this, this.PYISAI), null, !0)
}

function FundsTypesUsedByCost(n) {
    var t = $I.LDXCCB.EMixedFunds;
    return n < this.FKHMGD() ? $I.LDXCCB.EP4FFunds : (n < this.KWYBEJ() && (t = $I.LDXCCB.ECnCFunds), t)
}

function BuyItems(n, t, i, r) {
    for (var f = $I.UDAQKL.DNVCCU($I.EUNQAF, n.length), u = 0; u < n.length; u++) f[u] = $I.CVRAYR.VAMLQD().TVYHJP().HSRSKK(n[u]);
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommandTimeout("BuyProduct", {
        productIds: f,
        amounts: t
    }, 6e4, i, r)
}

function BuyItemsOFB(n, t, i, r) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommandTimeout("BuyProduct", {
        productIds: n,
        amounts: t
    }, 6e4, i, r)
}

function UseItems(n, t, i, r) {
    for (var f, e, o, u = 0; u < n.length; u++) f = n[u], this.FMYOHE.XOHVCR(f) && (e = this.FMYOHE.d[f], e < t[u] ? this.FMYOHE.XUDPAL(f) : e <= t[u] ? this.FMYOHE.XUDPAL(f) : this.FMYOHE.UHNVSA(f, e - t[u]));
    o = r;
    o == null && (o = (new $I.JNOYHJ).TFDQYD(this, this.ZNYOIO));
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("UseProduct", {
        cityId: i,
        productIds: n,
        amounts: t
    }, o, null)
}

function HasItem(n) {
    return this.FMYOHE.XOHVCR(n)
}

function GetItemCount(n) {
    var t = {},
        i;
    return (t.$r = this.FMYOHE.ZOXRAI(n, t), i = t.b, t.$r) ? i : 0
}

function get_PlayerFunds() {
    return this.OJABBL
}

function set_PlayerFunds(n) {
    this.OJABBL != n && (this.OJABBL = n, this.WJVSTE != null && this.WJVSTE.FOWLVG())
}

function get_AlternativePlayerFunds() {
    return this.BVPWFT
}

function set_AlternativePlayerFunds(n) {
    this.BVPWFT != n && (this.BVPWFT = n)
}

function get_AlternativePlayerFundsLimit() {
    return this.JQGXTM
}

function set_AlternativePlayerFundsLimit(n) {
    this.JQGXTM != n && (this.JQGXTM = n, this.WJVSTE != null && this.WJVSTE.FOWLVG())
}

function get_SpendableFunds() {
    return this.KWYBEJ() + this.FKHMGD()
}

function get_FirstUpdateDone() {
    return !this.GIQYPD
}

function get_Items() {
    return this.FMYOHE
}

function set_Items(n) {
    this.FMYOHE = n
}

function add_OnInventoryChange(n) {
    var t = {},
        i, r = this.MTFKGO,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.MTFKGO, t.$r = $I.TSJVQL.JXWJWI($I.FYWFCQ, u, i, t), this.MTFKGO = t.a, t.$r); while (r != i)
}

function remove_OnInventoryChange(n) {
    var t = {},
        i, r = this.MTFKGO,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.MTFKGO, t.$r = $I.TSJVQL.JXWJWI($I.FYWFCQ, u, i, t), this.MTFKGO = t.a, t.$r); while (r != i)
}

function add_OnPlayerFundsChange(n) {
    var t = {},
        i, r = this.WJVSTE,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.WJVSTE, t.$r = $I.TSJVQL.JXWJWI($I.FYWFCQ, u, i, t), this.WJVSTE = t.a, t.$r); while (r != i)
}

function remove_OnPlayerFundsChange(n) {
    var t = {},
        i, r = this.WJVSTE,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.WJVSTE, t.$r = $I.TSJVQL.JXWJWI($I.FYWFCQ, u, i, t), this.WJVSTE = t.a, t.$r); while (r != i)
}