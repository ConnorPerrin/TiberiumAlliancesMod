function style(n) {
    var t = {
        marginBottom: n.barTop ? -1 : 0,
        marginLeft: n.barRight ? -3 : 0,
        marginRight: n.barLeft ? -4 : 0,
        marginTop: n.barBottom ? -4 : 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0
    };
    return n.barTop || n.barBottom ? (t.paddingLeft = 0, t.paddingRight = 0) : (t.paddingBottom = 0, t.paddingTop = 0), t
}