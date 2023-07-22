function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = yk, u = n) : i.disabled ? (r = cd, u = n) : i.pressed || i.opened ? (r = dy, u = t) : i.checked ? (r = ytt, u = n) : i.hovered ? (r = ap, u = t) : i.preselected && i.focused && !i.inner ? (r = id, u = t) : i.preselected ? (r = hv, u = t) : i.focused && !i.inner ? (r = bw, u = n) : (r = wst, u = n), {
        decorator: r,
        textColor: u
    }
}