function style(n) {
    var t, i;
    return n.checked && n.focused && !n.inner ? (t = kd, i = si) : n.disabled ? (t = srt, i = si) : n.pressed || n.opened ? (t = ya, i = di) : n.checked ? (t = sot, i = si) : n.hovered ? (t = pl, i = di) : n.preselected && n.focused && !n.inner ? (t = hp, i = di) : n.preselected ? (t = hn, i = di) : n.focused && !n.inner ? (t = nit, i = si) : (t = lrt, i = si), {
        decorator: t,
        textColor: i
    }
}