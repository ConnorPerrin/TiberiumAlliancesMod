function style(n) {
    var t = gtt;
    return t += n.left ? ko : n.right ? cs : n.up ? vo : cc, n.left || n.right ? {
        height: 18,
        icon: t,
        padding: [0, 0, 2, 4],
        width: 18
    } : {
        height: 18,
        icon: t,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingTop: 0,
        width: 18
    }
}