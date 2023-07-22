function style(n) {
    var i, r;
    return n.checked && n.focused && !n.inner ? (i = aht, r = undefined) : n.disabled ? (i = uw, r = undefined) : n.pressed ? (i = oy, r = t) : n.checked ? (i = wu, r = undefined) : n.hovered ? (i = rg, r = t) : n.preselected && n.focused && !n.inner ? (i = wtt, r = t) : n.preselected ? (i = gp, r = t) : n.focused && !n.inner ? (i = bk, r = undefined) : (i = lw, r = undefined), {
        decorator: i,
        textColor: r
    }
}