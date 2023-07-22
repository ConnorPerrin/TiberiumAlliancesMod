function style(n) {
    var t = n.horizontal ? kw : rb;
    return n.disabled && (t += nr), {
        decorator: t,
        height: n.horizontal ? 18 : undefined,
        marginLeft: 2,
        width: n.horizontal ? undefined : 18,
        padding: 0
    }
}