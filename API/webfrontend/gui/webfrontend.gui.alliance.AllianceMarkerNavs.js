webfront prototypeend.gui.alliance.AllianceMarkerNavs[16496 - 0]
function getIconForType(n) {
    var e = null;
    switch (n) {
        case ClientLib.Data.Alliance.EAMT_Home:
            e = t;
            break;
        case ClientLib.Data.Alliance.EAMT_Reserve:
            e = b;
            break;
        case ClientLib.Data.Alliance.EAMT_Move:
            e = i;
            break;
        case ClientLib.Data.Alliance.EAMT_Conquer:
            e = f;
            break;
        case ClientLib.Data.Alliance.EAMT_Support:
            e = r;
            break;
        case ClientLib.Data.Alliance.EAMT_Watch:
        default:
            e = u
    }
    return e
}

function getIconForMyType(n) {
    var e = null;
    switch (n) {
        case ClientLib.Data.Alliance.EAMT_Home:
            e = t;
            break;
        case ClientLib.Data.Alliance.EAMT_Reserve:
            e = it;
            break;
        case ClientLib.Data.Alliance.EAMT_Move:
            e = i;
            break;
        case ClientLib.Data.Alliance.EAMT_Conquer:
            e = f;
            break;
        case ClientLib.Data.Alliance.EAMT_Support:
            e = r;
            break;
        case ClientLib.Data.Alliance.EAMT_Watch:
        default:
            e = u
    }
    return e
}

function getHomeMarker(n, t) {
    var r = ClientLib.Data.MainData.GetInstance().get_Player(),
        i = ClientLib.Data.MainData.GetInstance().get_Alliance().getSelectedHomeMarker(u),
        u;
    return i === null ? (u = {
        id: -1,
        ipc: r.get_Id(),
        ipe: r.get_Id(),
        npc: r.get_Name(),
        npe: r.get_Name(),
        tsc: Date.now(),
        tse: Date.now(),
        cx: n,
        cy: t,
        mt: ClientLib.Data.Alliance.EAMT_Home,
        de: y
    }, i = ClientLib.Data.MainData.GetInstance().get_Alliance().getEmptyMarker(u)) : (i.set_CoordX(n), i.set_CoordY(t)), i
}

function updateHomeMarker(n) {
    var t = this.getHomeMarker(n.get_PosX(), n.get_PosY());
    ClientLib.Data.MainData.GetInstance().get_Alliance().SetSelectedHomeMarker(t)
}