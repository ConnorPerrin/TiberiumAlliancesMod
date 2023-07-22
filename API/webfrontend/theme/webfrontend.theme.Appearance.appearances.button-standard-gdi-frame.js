function style(n) {
    var t, i;
    return n.checked && n.focused && !n.inner ? (t = yet, i = oi) : n.disabled ? (t = vft, i = oi) : n.pressed || n.opened ? (t = cn, i = ar) : n.checked ? (t = yl, i = oi) : n.hovered ? (t = fv, i = ar) : n.preselected && n.focused && !n.inner ? (t = up, i = ar) : n.preselected ? (t = an, i = ar) : n.focused && !n.inner ? (t = yht, i = oi) : (t = ek, i = oi), {
        decorator: t,
        textColor: i
    }
}