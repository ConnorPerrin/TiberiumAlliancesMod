function style(i) {
    var r, u;
    return i.hovered ? (r = i.checked ? pa : ww, u = t) : i.disabled ? (r = i.checked ? ew : rv, u = n) : i.checked ? (r = nrt, u = t) : (r = wut, u = n), {
        decorator: r,
        textColor: u
    }
}