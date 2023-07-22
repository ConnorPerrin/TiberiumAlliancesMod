function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = fit, u = n) : i.disabled ? (r = but, u = n) : i.pressed ? (r = co, u = t) : i.checked ? (r = co, u = n) : i.hovered ? (r = fut, u = t) : i.preselected && i.focused && !i.inner ? (r = ait, u = t) : i.preselected ? (r = iut, u = t) : i.focused && !i.inner ? (r = ol, u = n) : (r = rht, u = n), {
        decorator: r,
        textColor: u
    }
}