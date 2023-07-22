function style(n) {
    var t, i = 0,
        f = 0,
        e = 0,
        u = 0,
        r = 0;
    return n.checked ? n.barTop ? (t = gi, u = n.firstTab ? 0 : -5, r = n.lastTab ? 0 : -5, i = [6, 14]) : n.barBottom ? (t = dt, u = n.firstTab ? 0 : -5, r = n.lastTab ? 0 : -5, i = [6, 14]) : n.barRight ? (t = li, e = n.lastTab ? 0 : -5, f = n.firstTab ? 0 : -5, i = [6, 13]) : (t = rd, e = n.lastTab ? -5 : -5, r = 1, f = n.firstTab ? 3 : -5, i = [5, 5]) : n.barTop ? (t = yr, u = n.firstTab ? 5 : 1, r = 1, f = 4, i = [4, 10]) : n.barBottom ? (t = ni, e = 4, u = n.firstTab ? 5 : 1, r = 1, i = [4, 10]) : n.barRight ? (t = kt, e = 1, u = 1, r = 5, f = n.firstTab ? 5 : 1, i = [4, 10]) : (t = ub, e = 1, u = 5, r = 1, f = n.firstTab ? 5 : 1, i = [4, 4]), {
        decorator: t,
        marginBottom: e,
        marginLeft: u,
        marginRight: r,
        marginTop: f,
        padding: i,
        textColor: n.checked ? ui : ii,
        zIndex: n.checked ? 10 : 5
    }
}