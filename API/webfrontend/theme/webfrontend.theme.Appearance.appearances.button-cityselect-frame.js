function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = kg, u = n) : i.disabled ? (r = cut, u = n) : i.pressed ? (r = yp, u = st) : i.checked ? (r = lp, u = n) : i.hovered ? (r = ld, u = t) : i.preselected && i.focused && !i.inner ? (r = iv, u = t) : i.preselected ? (r = kot, u = t) : i.focused && !i.inner ? (r = tht, u = n) : (r = eet, u = n), {
        decorator: r,
        textColor: u
    }
}