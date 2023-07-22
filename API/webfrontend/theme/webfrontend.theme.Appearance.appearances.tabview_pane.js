function style(n) {
    return {
        decorator: ao,
        marginBottom: n.barBottom ? -1 : 0,
        marginLeft: n.barLeft ? -1 : 0,
        marginRight: n.barRight ? 3 : 4,
        marginTop: n.barTop ? -1 : 0,
        minHeight: 100
    }
}