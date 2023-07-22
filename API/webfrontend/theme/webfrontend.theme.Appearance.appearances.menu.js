function style(n) {
    var t = {
        arrowColumnWidth: 4,
        decorator: eg,
        iconColumnWidth: 16,
        spacingX: 6,
        spacingY: 1
    };
    return n.submenu && (t.offset = [-2, -3], t.position = ws), t
}