[object prototypeObject]
function GetNPCBaseNameFromType(n) {
    var t;
    switch (n) {
        case $I.YZQBXV.Beginner:
            return "tnf:mutants camp";
        case $I.YZQBXV.Random:
            return "tnf:mutants camp";
        case $I.YZQBXV.Cluster:
            return "tnf:mutants outpost";
        case $I.YZQBXV.Base:
            return "tnf:mutants base";
        case $I.YZQBXV.Fortress:
            return "tnf:centerhub short";
        case $I.YZQBXV.Event:
            return "tnf:event camp"
    }
    return t = n, "error: missing camp type " + t.toString()
}