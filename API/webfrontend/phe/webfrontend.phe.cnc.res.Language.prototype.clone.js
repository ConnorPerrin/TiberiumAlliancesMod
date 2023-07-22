function getLanguageCodeByName(n) {
    for (var t in this.__bBP)
        if (this.__bBP[t] == n) return t;
    return null
}

function getLanguageNameByCode(n) {
    return this.__bBP.hasOwnProperty(n) ? this.__bBP[n] : null
}

function getLanguageCodes() {
    var n = [];
    for (var t in this.__bBP) n.push(t);
    return n.sort()
}

function getLanguageNames() {
    var n = [];
    for (var t in this.__bBP) n.push(this.__bBP[t]);
    return n.sort()
}