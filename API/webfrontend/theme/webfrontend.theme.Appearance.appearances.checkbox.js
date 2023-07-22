function style(n) {
    var t;
    return t = n.checked && n.focused ? tf : n.checked && n.disabled ? ku : n.checked && n.pressed ? bu : n.checked && n.hovered ? hu : n.checked ? ef : n.disabled ? ou : n.focused ? lu : n.pressed ? rf : n.hovered ? uu : ei, {
        gap: 6,
        icon: ob + t + ct
    }
}