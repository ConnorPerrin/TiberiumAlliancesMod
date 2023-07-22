function style(n) {
    var t, i;
    return n.checked && n.focused && !n.inner ? (t = kc, i = bt) : n.disabled ? (t = fst, i = g) : n.pressed || n.opened ? (t = iet, i = bt) : n.checked ? (t = ost, i = bt) : n.hovered ? (t = oit, i = g) : n.preselected && n.focused && !n.inner ? (t = py, i = g) : n.preselected ? (t = vk, i = g) : n.focused && !n.inner ? (t = fw, i = g) : (t = vl, i = g), {
        decorator: t,
        textColor: i
    }
}