webfront prototypeend.gui.region.RegionCityStatusInfo[16867 - 0]
function buildMaxLootStringForCity(n) {
    return webfrontend.gui.region.RegionCityStatusInfo.buildMaxLootString(ClientLib.Data.MainData.GetInstance().get_Server().GetLootCapsForPvpAttack(n))
}

function buildMaxLootString(n) {
    for (var o, t, f = i, e = n === null ? null : n.hasOwnProperty(k) ? n[k] : n, u = [ClientLib.Base.EResourceType.ResearchPoints, ClientLib.Base.EResourceType.Tiberium, ClientLib.Base.EResourceType.Crystal, ClientLib.Base.EResourceType.Gold], r = 0; r < u.length && e; ++r)
        if (o = e.hasOwnProperty(u[r]) ? e[u[r]] : 0, o > 0) {
            t = null;
            switch (u[r]) {
                case ClientLib.Base.EResourceType.Tiberium:
                    t = si;
                    break;
                case ClientLib.Base.EResourceType.Crystal:
                    t = pr;
                    break;
                case ClientLib.Base.EResourceType.Power:
                    t = dt;
                    break;
                case ClientLib.Base.EResourceType.Gold:
                    t = iu;
                    break;
                case ClientLib.Base.EResourceType.ResearchPoints:
                    t = ke
            }
            f += (r > 0 ? ai : i) + (t ? re + ClientLib.File.FileManager.GetInstance().GetPhysicalPath(t) + go : i) + webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(o).toString()
        } return f.length > 0 ? f : null
}