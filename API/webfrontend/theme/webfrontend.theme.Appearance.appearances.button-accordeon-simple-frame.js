function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = wc, u = n) : i.disabled ? (r = kp, u = n) : i.pressed || i.opened ? (r = vn, u = t) : i.checked ? (r = pst, u = n) : i.hovered ? (r = gd, u = t) : i.preselected && i.focused && !i.inner ? (r = aet, u = t) : i.preselected ? (r = fy, u = t) : i.focused && !i.inner ? (r = bft, u = n) : (r = dc, u = n), {
        decorator: r,
        textColor: u,
        minHeight: 24,
        paddingBottom: 1
    }
}