function style(n) {
    return {
        decorator: n.hovered ? ke : ke,
        minHeight: 20,
        minWidth: 13,
        padding: n.hovered ? [3, 4, 2, 4] : [3, 4],
        sortIcon: n.sorted ? n.sortedAscending ? dw : gg : undefined
    }
}