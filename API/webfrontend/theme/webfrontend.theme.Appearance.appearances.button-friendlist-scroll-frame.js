function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = ey, u = n) : i.disabled ? (r = sa, u = n) : i.pressed ? (r = ga, u = st) : i.checked ? (r = dl, u = n) : i.hovered ? (r = by, u = t) : i.preselected && i.focused && !i.inner ? (r = ow, u = t) : i.preselected ? (r = utt, u = t) : i.focused && !i.inner ? (r = ve, u = n) : (r = ve, u = n), {
        decorator: r,
        textColor: u
    }
}