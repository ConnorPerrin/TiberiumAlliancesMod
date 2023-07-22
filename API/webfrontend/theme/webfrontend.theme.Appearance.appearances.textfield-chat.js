function style(n) {
    return {
        decorator: n.focused ? vb : n.disabled ? pb : nd,
        padding: [2, 4, 1],
        textColor: n.focused ? w : n.disabled ? v : od
    }
}