function style(n) {
    var i, r;
    return n.checked && n.focused && !n.inner ? (i = us, r = undefined) : n.disabled ? (i = uet, r = undefined) : n.pressed ? (i = hc, r = t) : n.checked ? (i = wu, r = undefined) : n.hovered ? (i = be, r = t) : n.preselected && n.focused && !n.inner ? (i = uo, r = t) : n.preselected ? (i = lh, r = t) : n.focused && !n.inner ? (i = ae, r = undefined) : (i = to, r = undefined), {
        decorator: i,
        textColor: r
    }
}