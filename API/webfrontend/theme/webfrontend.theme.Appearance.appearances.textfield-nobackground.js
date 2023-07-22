function style(n) {
    return {
        decorator: n.focused ? tu : n.disabled ? tu : tu,
        padding: [2, 4, 1],
        textColor: n.disabled ? v : w
    }
}