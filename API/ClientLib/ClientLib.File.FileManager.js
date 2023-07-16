[object prototypeObject]
function GetInstance() {
    return $I.QOKGWR.NMOGBS
}

function CleanWebfrontendPath(n) {
    return n != null && n.indexOf("webfrontend/") >= 0 && (n = n.substr(n.indexOf("webfrontend/") + 12)), n
}