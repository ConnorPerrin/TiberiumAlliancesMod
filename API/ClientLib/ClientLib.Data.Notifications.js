[object prototypeObject]
function GetCategoryIdByMdbId(n) {
    var i = $I.BUEVKL.QGLUJV(),
        r = -1,
        u = i.HDOMUD(n),
        t;
    return u != null && (t = i.ORUZND(u.chid), t != null && (r = t.ctid)), r
}