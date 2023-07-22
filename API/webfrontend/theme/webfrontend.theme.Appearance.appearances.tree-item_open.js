function style(n) {
    var t;
    return t = n.selected && n.opened ? gb : n.selected && !n.opened ? hg : n.opened ? vs : fc, {
        padding: [0, 5, 0, 2],
        source: t
    }
}