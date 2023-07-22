function style(n) {
    return {
        decorator: ik,
        marginBottom: n.barBottom ? -1 : 0,
        marginLeft: n.barLeft ? -1 : 0,
        marginRight: n.barRight ? -1 : 0,
        marginTop: n.barTop ? -1 : 0,
        minHeight: 20
    }
}