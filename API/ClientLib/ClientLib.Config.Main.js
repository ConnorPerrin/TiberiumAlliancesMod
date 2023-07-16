[object prototypeObject]
function GetNotificationCategoryChar(n) {
    switch (n) {
        case $I.JPQZSW.Alliance:
            return "A";
        case $I.JPQZSW.Base:
            return "B";
        case $I.JPQZSW.Combat:
            return "C";
        case $I.JPQZSW.Forum:
            return "F";
        case $I.JPQZSW.Player:
            return "P";
        case $I.JPQZSW.POI:
            return "I";
        case $I.JPQZSW.System:
            return "S";
        case $I.JPQZSW.EndGame:
            return "E"
    }
    return " "
}

function GetInstance() {
    return $I.UQGIGO.XPJGZF == null && ($I.UQGIGO.XPJGZF = (new $I.UQGIGO).SLPWTI()), $I.UQGIGO.XPJGZF
}

function ETimeOffsetType() {}

function ETimeFormat() {}

function EReportSharingFlag() {}

function ENotificationCategory() {}

function EHints() {}