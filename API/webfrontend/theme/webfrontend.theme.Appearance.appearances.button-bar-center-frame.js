function style(i) {
    var r, u;
    return i.hovered ? (r = i.checked ? rc : fp, u = t) : i.checked ? (r = rc, u = t) : (r = rut, u = n), {
        decorator: r,
        textColor: u
    }
}