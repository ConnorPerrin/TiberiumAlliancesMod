function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = pp, u = n) : i.disabled ? (r = yw, u = n) : i.pressed ? (r = bn, u = t) : i.checked ? (r = sp, u = n) : i.hovered ? (r = yy, u = t) : i.preselected && i.focused && !i.inner ? (r = hht, u = t) : i.preselected ? (r = aut, u = t) : i.focused && !i.inner ? (r = iit, u = n) : (r = itt, u = n), {
        decorator: r,
        textColor: u
    }
}