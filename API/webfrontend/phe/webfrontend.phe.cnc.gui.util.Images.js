function getFactionIconWebPathFromType(t) {
    var r = n,
        e = parseInt(t, 10),
        f;
    switch (e) {
        case ClientLib.Base.EFactionType.GDIFaction:
            r = y;
            break;
        case ClientLib.Base.EFactionType.NODFaction:
            r = u;
            break;
        case ClientLib.Base.EFactionType.FORFaction:
        case ClientLib.Base.EFactionType.NPCBase:
        case ClientLib.Base.EFactionType.NPCCamp:
        case ClientLib.Base.EFactionType.NPCOutpost:
            r = i
    }
    return f = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(r), f != null ? f : n
}

function getFactionIcon(t) {
    var r = n,
        u;
    switch (t) {
        case ClientLib.Base.EFactionType.GDIFaction:
            r = o;
            break;
        case ClientLib.Base.EFactionType.NODFaction:
            r = c;
            break;
        case ClientLib.Base.EFactionType.FORFaction:
            r = i
    }
    return u = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(r), u != null ? u : n
}

function getFactionIconLarge(t) {
    var i = n,
        r;
    switch (t) {
        case ClientLib.Base.EFactionType.GDIFaction:
            i = a;
            break;
        case ClientLib.Base.EFactionType.NODFaction:
            i = h;
            break;
        case ClientLib.Base.EFactionType.FORFaction:
            i = v
    }
    return r = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(i), r != null ? r : n
}

function getFactionAvatarImage(i) {
    var r = n,
        u;
    switch (i) {
        case ClientLib.Base.EFactionType.GDIFaction:
            r = t;
            break;
        case ClientLib.Base.EFactionType.NODFaction:
            r = f;
            break;
        default:
            r = t
    }
    return u = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(r), u != null ? u : n
}

function getFactionBigAvatarImage(t) {
    var i = n,
        u;
    switch (t) {
        case ClientLib.Base.EFactionType.GDIFaction:
            i = r;
            break;
        case ClientLib.Base.EFactionType.NODFaction:
            i = e;
            break;
        default:
            i = r
    }
    return u = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(i), u != null ? u : n
}

function getFactionImage() {
    var r = ClientLib.Data.MainData.GetInstance().get_Player().get_Faction(),
        t = n,
        i;
    return r == ClientLib.Base.EFactionType.GDIFaction ? t = l : r == ClientLib.Base.EFactionType.NODFaction && (t = s), i = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(t), i != null ? i : n
}