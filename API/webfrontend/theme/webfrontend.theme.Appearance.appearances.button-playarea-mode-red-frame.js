function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = wr, u = n) : i.disabled ? (r = pg, u = n) : i.pressed ? (r = wr, u = st) : i.checked ? (r = wr, u = n) : i.hovered ? (r = bet, u = t) : i.preselected && i.focused && !i.inner ? (r = ip, u = t) : i.preselected ? (r = vg, u = t) : i.focused && !i.inner ? (r = ag, u = n) : i.checked && i.hovered ? (r = out, u = n) : (r = hft, u = n), {
        decorator: r,
        textColor: u
    }
}