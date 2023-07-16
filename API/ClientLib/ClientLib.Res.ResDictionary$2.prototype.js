function ContainsKey() {
    return this.hasOwnProperty(key)
}

function TryGetValue(n) {
    return this.hasOwnProperty(n) ? (out.b = this[n], !0) : !1
}

function get_Count() {
    return this.length
}

function get_Item(n) {
    return this[n]
}

function get_IsFixedSize() {
    return !0
}

function get_IsReadOnly() {
    return !0
}

function GetEnumerator() {
    return null
}