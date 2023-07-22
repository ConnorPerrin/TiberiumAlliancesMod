webfront prototypeend.phe.cnc.gui.RepairUtil[15180 - 0]
function getUnitGroupCityData(r) {
    var f = qx.core.Init.getApplication(),
        e = ClientLib.Data.MainData.GetInstance().get_Player().get_Faction(),
        u = new Object(3);
    return u[ClientLib.Data.EUnitGroup.Infantry] = {
        group: ClientLib.Data.EUnitGroup.Infantry,
        isBuilt: r.get_CityBuildingsData().IsBarrackPlaced(),
        bldgHitpointRatio: r.get_CityBuildingsData().GetBarrackHitpointsRatio(),
        lowestUnitDmgRatio: r.get_CityUnitsData().GetLowestHitpointRatioForUnitGroupTypes(ClientLib.Data.EUnitGroup.Infantry),
        unitTypeTxt: f.tr(i),
        buildingName: ClientLib.Base.Tech.GetProductionBuildingNameFromFaction(ClientLib.Base.ETechName.Barracks, e)
    }, u[ClientLib.Data.EUnitGroup.Vehicle] = {
        group: ClientLib.Data.EUnitGroup.Vehicle,
        isBuilt: r.get_CityBuildingsData().IsFactoryPlaced(),
        bldgHitpointRatio: r.get_CityBuildingsData().GetFactoryHitpointsRatio(),
        lowestUnitDmgRatio: r.get_CityUnitsData().GetLowestHitpointRatioForUnitGroupTypes(ClientLib.Data.EUnitGroup.Vehicle),
        unitTypeTxt: f.tr(n),
        buildingName: ClientLib.Base.Tech.GetProductionBuildingNameFromFaction(ClientLib.Base.ETechName.Factory, e)
    }, u[ClientLib.Data.EUnitGroup.Aircraft] = {
        group: ClientLib.Data.EUnitGroup.Aircraft,
        isBuilt: r.get_CityBuildingsData().IsAirportPlaced(),
        bldgHitpointRatio: r.get_CityBuildingsData().GetAirportHitpointsRatio(),
        lowestUnitDmgRatio: r.get_CityUnitsData().GetLowestHitpointRatioForUnitGroupTypes(ClientLib.Data.EUnitGroup.Aircraft),
        unitTypeTxt: f.tr(t),
        buildingName: ClientLib.Base.Tech.GetProductionBuildingNameFromFaction(ClientLib.Base.ETechName.Airport, e)
    }, u
}

function getEBuildingNameFromResType(n) {
    var t = 0;
    switch (n) {
        case ClientLib.Base.EResourceType.RepairChargeInf:
            t = ClientLib.Base.ETechName.Barracks;
            break;
        case ClientLib.Base.EResourceType.RepairChargeVeh:
            t = ClientLib.Base.ETechName.Factory;
            break;
        case ClientLib.Base.EResourceType.RepairChargeAir:
            t = ClientLib.Base.ETechName.Airport
    }
    return t
}

function getEUnitGroupFromResType(n) {
    var t = 0;
    switch (n) {
        case ClientLib.Base.EResourceType.RepairChargeInf:
            t = ClientLib.Data.EUnitGroup.Infantry;
            break;
        case ClientLib.Base.EResourceType.RepairChargeVeh:
            t = ClientLib.Data.EUnitGroup.Vehicle;
            break;
        case ClientLib.Base.EResourceType.RepairChargeAir:
            t = ClientLib.Data.EUnitGroup.Aircraft
    }
    return t
}

function getImagePathFromResType(n) {
    var t = null,
        i = ClientLib.Res.ResMain.GetInstance().GetResource(n);
    return i && (t = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(i.i), webfrontend.phe.cnc.res.Main.getInstance().cacheImage(t)), t
}