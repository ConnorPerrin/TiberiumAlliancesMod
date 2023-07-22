function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = vv, u = n) : i.disabled ? (r = iht, u = n) : i.pressed ? (r = ra, u = st) : i.checked ? (r = iw, u = n) : i.hovered ? (r = hb, u = t) : i.preselected && i.focused && !i.inner ? (r = urt, u = t) : i.preselected ? (r = dot, u = t) : i.focused && !i.inner ? (r = trt, u = n) : i.checked && i.hovered ? (r = ret, u = n) : (r = pot, u = n), {
        decorator: r,
        textColor: u
    }
}