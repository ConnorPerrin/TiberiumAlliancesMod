[object prototypeObject]
function validateForumName(n) {
    return n != null && n.length > 0 && n.length <= $I.GJAGFO.MAXLEN_FORUMTITLE
}

function validateForumDescription(n) {
    return n != null && n.length <= $I.GJAGFO.MAXLEN_FORUMDESCRIPTION
}

function validateThreadName(n) {
    return n != null && n.length > 0 && n.length <= $I.GJAGFO.MAXLEN_THREADTITLE
}

function validatePost(n) {
    return n != null && n.length > 0 && n.length <= $I.GJAGFO.MAXLEN_POST
}

function GetThreadById(n, t) {
    for (var i = 0; i < t.l.length; i++)
        if (t.l[i].Id == n) return t.l[i];
    return null
}

function CleanString(n) {
    return webfrontend.phe.cnc.gui.util.Text.cleanString(n)
}

function EForumSubscription() {}

function EForumPostFilterFlags() {}

function ForumInfo() {}

function ThreadInfo() {}