function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = db, u = n) : i.disabled ? (r = get, u = n) : i.pressed ? (r = lft, u = t) : i.checked ? (r = eot, u = n) : i.hovered ? (r = cl, u = t) : i.preselected && i.focused && !i.inner ? (r = wet, u = t) : i.preselected ? (r = da, u = t) : i.focused && !i.inner ? (r = gf, u = n) : (r = c, u = n), {
        decorator: r,
        textColor: u
    }
}