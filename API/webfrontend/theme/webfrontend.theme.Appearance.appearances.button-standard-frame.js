function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = nk, u = n) : i.disabled ? (r = iot, u = n) : i.pressed || i.opened ? (r = nn, u = t) : i.checked ? (r = ug, u = n) : i.hovered ? (r = vht, u = t) : i.preselected && i.focused && !i.inner ? (r = on, u = t) : i.preselected ? (r = dit, u = t) : i.focused && !i.inner ? (r = sn, u = n) : (r = yft, u = n), {
        decorator: r,
        textColor: u,
        minHeight: 24,
        paddingBottom: 1
    }
}