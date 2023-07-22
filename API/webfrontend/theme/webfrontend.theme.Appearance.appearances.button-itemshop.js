function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = gt, u = n) : i.disabled ? (r = kk, u = n) : i.pressed ? (r = pht, u = t) : i.checked ? (r = gt, u = n) : i.hovered ? (r = gt, u = t) : i.preselected && i.focused && !i.inner ? (r = gt, u = t) : i.preselected ? (r = po, u = t) : i.focused && !i.inner ? (r = gt, u = n) : (r = po, u = n), {
        decorator: r,
        gap: 0,
        height: 58,
        minHeight: 58,
        width: 246,
        textColor: u
    }
}