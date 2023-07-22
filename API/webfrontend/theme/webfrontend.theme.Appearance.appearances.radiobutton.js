function style(n) {
    var t;
    return t = n.checked && n.focused ? ry : n.checked && n.disabled ? hd : n.checked && n.pressed ? dst : n.checked && n.hovered ? gv : n.checked ? nb : n.disabled ? bg : n.focused ? sd : n.pressed ? gst : n.hovered ? pc : pr, {
        gap: 6,
        icon: yrt + t + ct
    }
}