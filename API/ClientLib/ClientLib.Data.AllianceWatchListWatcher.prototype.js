function GetWatcherName(n) {
    var r = null,
        f = $I.CVRAYR.VAMLQD().ONGTRQ().UQGPFX(),
        u = $I.CVRAYR.VAMLQD().FMKUPK(),
        t, i;
    if (u == null) return null;
    for (t = 0; t < this.FMKBTL.length; t++)
        if (this.FMKBTL[t].p != f && this.FMKBTL[t].b == n) {
            if (r != null) return "*";
            i = u.ULLWWE(this.FMKBTL[t].p);
            i != null && this.SQRJDQ(i) && (r = i.Name)
        } return r
}

function IsPlayerOnline(n) {
    return n.OnlineState == 1
}