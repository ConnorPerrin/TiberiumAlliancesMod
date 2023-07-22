function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = fet, u = n) : i.disabled ? (r = sl, u = n) : i.pressed ? (r = ty, u = t) : i.checked ? (r = eb, u = n) : i.hovered ? (r = pft, u = t) : i.preselected && i.focused && !i.inner ? (r = ftt, u = t) : i.preselected ? (r = het, u = t) : i.focused && !i.inner ? (r = vp, u = n) : (r = wa, u = n), {
        decorator: r,
        textColor: u
    }
}