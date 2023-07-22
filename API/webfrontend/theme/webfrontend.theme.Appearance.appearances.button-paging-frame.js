function style(i) {
    var r, u, f;
    return i.checked && i.focused && !i.inner ? (r = wn, u = n, f = b) : i.disabled ? (r = ed, u = n, f = b) : i.pressed || i.opened ? (r = lht, u = n, f = sb) : i.checked ? (r = ln, u = n, f = b) : i.hovered ? (r = dv, u = t, f = b) : i.preselected && i.focused && !i.inner ? (r = uk, u = t, f = b) : i.preselected ? (r = put, u = t, f = b) : i.focused && !i.inner ? (r = ll, u = n, f = b) : (r = gut, u = n, f = b), {
        decorator: r,
        textColor: u,
        font: f
    }
}