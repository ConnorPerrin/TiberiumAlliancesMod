function style(n) {
    return {
        decorator: n.focused ? aw : n.disabled ? dk : np,
        padding: [2, 3, 1],
        textColor: n.disabled ? v : n.showingPlaceholder ? ri : w
    }
}