function style(n) {
    var t, i = 0,
        f = 0,
        e = 0,
        r = 0,
        u = 0;
    return n.checked ? n.barTop ? (t = gi, r = n.firstTab ? 0 : -5, u = n.lastTab ? 0 : -5, i = [3, 7, 3, 6]) : n.barBottom ? (t = dt, r = n.firstTab ? 0 : -5, u = n.lastTab ? 0 : -5, i = [5, 10, 6, 9]) : n.barRight ? (t = li, e = n.lastTab ? 0 : -5, f = n.firstTab ? 0 : -5, i = [3, 6]) : (t = hf, e = n.lastTab ? 0 : -5, f = n.firstTab ? 0 : -5, i = [3, 6]) : n.barTop ? (t = yr, r = n.firstTab ? 5 : 1, u = 1, f = 5, i = [2, 7, 2, 5]) : n.barBottom ? (t = ni, e = 4, r = n.firstTab ? 5 : 1, u = 1, i = [3, 7, 3, 6]) : n.barRight ? (t = kt, e = 1, r = 1, u = 5, f = n.firstTab ? 5 : 1, i = [2, 5]) : (t = fu, e = 1, r = 5, u = 1, f = n.firstTab ? 5 : 1, i = [2, 5]), {
        decorator: t,
        font: n.disabled ? p : it,
        marginBottom: e,
        marginLeft: r,
        marginRight: u,
        marginTop: f,
        padding: i,
        textColor: n.disabled ? ii : ui,
        zIndex: n.checked ? 10 : 5
    }
}