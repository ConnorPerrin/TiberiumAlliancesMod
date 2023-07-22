function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = bd, u = n) : i.disabled ? (r = prt, u = n) : i.pressed ? (r = crt, u = t) : i.checked ? (r = art, u = n) : i.hovered ? (r = gk, u = t) : i.preselected && i.focused && !i.inner ? (r = na, u = t) : i.preselected ? (r = irt, u = t) : i.focused && !i.inner ? (r = sft, u = n) : (r = tw, u = n), {
        decorator: r,
        textColor: u
    }
}