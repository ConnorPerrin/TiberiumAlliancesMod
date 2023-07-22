function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = rit, u = n) : i.disabled ? (r = hrt, u = n) : i.pressed || i.opened ? (r = ptt, u = t) : i.checked ? (r = yb, u = n) : i.hovered ? (r = vst, u = t) : i.preselected && i.focused && !i.inner ? (r = ad, u = t) : i.preselected ? (r = el, u = t) : i.focused && !i.inner ? (r = ud, u = n) : (r = rk, u = n), {
        decorator: r,
        textColor: u,
        minHeight: 26
    }
}