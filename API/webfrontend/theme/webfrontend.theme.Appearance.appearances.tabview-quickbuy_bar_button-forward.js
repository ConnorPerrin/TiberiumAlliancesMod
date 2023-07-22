function style(n) {
    return n.barTop || n.barBottom ? {
        marginBottom: 2,
        marginTop: 2
    } : {
        marginLeft: 2,
        marginRight: 2
    }
}