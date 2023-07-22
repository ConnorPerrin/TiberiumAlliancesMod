function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = vw, u = n) : i.disabled ? (r = vut, u = n) : i.pressed ? (r = dp, u = st) : i.checked ? (r = ua, u = n) : i.hovered ? (r = kut, u = t) : i.preselected && i.focused && !i.inner ? (r = drt, u = t) : i.preselected ? (r = ia, u = t) : i.focused && !i.inner ? (r = tk, u = n) : i.checked && i.hovered ? (r = ak, u = n) : (r = yn, u = n), {
        decorator: r,
        textColor: u
    }
}