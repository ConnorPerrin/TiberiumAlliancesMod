function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = ev, u = n) : i.disabled ? (r = hst, u = n) : i.pressed ? (r = fb, u = t) : i.checked ? (r = sg, u = n) : i.hovered ? (r = ott, u = t) : i.preselected && i.focused && !i.inner ? (r = wrt, u = t) : i.preselected ? (r = ett, u = t) : i.focused && !i.inner ? (r = det, u = n) : (r = rst, u = n), {
        decorator: r,
        textColor: u
    }
}