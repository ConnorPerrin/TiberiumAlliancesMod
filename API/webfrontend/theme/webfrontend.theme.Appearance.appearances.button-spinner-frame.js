function style(n) {
    var i, r;
    return n.checked && n.focused && !n.inner ? (i = ea, r = s) : n.disabled ? (i = nht, r = undefined) : n.pressed ? (i = yit, r = t) : n.checked ? (i = ltt, r = s) : n.hovered ? (i = ib, r = t) : n.preselected && n.focused && !n.inner ? (i = aft, r = t) : n.preselected ? (i = yv, r = t) : n.focused && !n.inner ? (i = iy, r = s) : (i = lv, r = s), {
        decorator: i,
        textColor: r
    }
}