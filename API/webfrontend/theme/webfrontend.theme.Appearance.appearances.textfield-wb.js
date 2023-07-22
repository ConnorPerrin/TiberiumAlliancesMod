function style(n) {
    return {
        decorator: n.focused ? no : n.disabled ? lo : rp,
        minHeight: 23,
        padding: [4, 6],
        textColor: n.disabled ? v : n.showingPlaceholder ? ri : bt
    }
}