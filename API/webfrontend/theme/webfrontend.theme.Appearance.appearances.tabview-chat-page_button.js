function style(n) {
    var t, i = 0,
        f = 0,
        e = 0,
        r = 0,
        u = 0;
    return n.checked ? n.barTop ? (t = ab, r = n.firstTab ? 0 : -5, u = n.lastTab ? 0 : -5, i = [6, 14]) : n.barBottom ? (t = dt, r = n.firstTab ? 0 : -5, u = n.lastTab ? 0 : -5, i = [6, 14]) : n.barRight ? (t = li, e = n.lastTab ? 0 : -5, f = n.firstTab ? 0 : -5, i = [6, 13]) : (t = sit, e = n.lastTab ? 0 : 0, r = 9, u = 0, f = n.firstTab ? 0 : 0, i = [2, 2]) : n.barTop ? (t = fa, r = n.firstTab ? 5 : 1, u = 1, f = 4, i = [4, 10]) : n.barBottom ? (t = ni, e = 4, r = n.firstTab ? 5 : 1, u = 1, i = [4, 10]) : n.barRight ? (t = kt, e = 1, r = 1, u = 5, f = n.firstTab ? 5 : 1, i = [4, 10]) : (t = gc, e = 0, r = 7, u = 0, f = n.firstTab ? 0 : 0, i = [2, 2]), {
        decorator: t,
        marginBottom: e,
        marginLeft: r,
        marginRight: u,
        marginTop: f,
        padding: i,
        textColor: n.checked ? ui : ii,
        zIndex: n.checked ? 10 : 5
    }
}