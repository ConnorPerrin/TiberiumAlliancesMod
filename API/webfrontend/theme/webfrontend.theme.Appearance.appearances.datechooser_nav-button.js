function style(n) {
    var t = {
        padding: [2, 4]
    };
    return n.lastYear ? (t.icon = pk, t.marginRight = 1) : n.lastMonth ? t.icon = nf : n.nextYear ? (t.icon = btt, t.marginLeft = 1) : n.nextMonth && (t.icon = rr), t
}