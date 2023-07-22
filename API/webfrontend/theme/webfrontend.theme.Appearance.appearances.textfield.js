function style(n) {
    return {
        decorator: n.focused ? gr : n.disabled ? pi : wt,
        padding: [2, 4, 1],
        textColor: n.disabled ? v : n.showingPlaceholder ? ri : w
    }
}