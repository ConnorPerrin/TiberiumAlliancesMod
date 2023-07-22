function centerCityOnRegionViewWindow(n) {
    if (n > 0) {
        var t = qx.core.Init.getApplication();
        t.getBackgroundArea().closeCityInfo();
        t.getBackgroundArea().closeCityList();
        t.getBackgroundArea().setView(ClientLib.Vis.Mode.Region, n, -1, -1)
    }
}

function centerCoordinatesOnRegionViewWindow(n, t) {
    var i = qx.core.Init.getApplication();
    i.getBackgroundArea().closeCityInfo();
    i.getBackgroundArea().closeCityList();
    i.getBackgroundArea().setView(ClientLib.Vis.Mode.Region, -1, n, t);
    i.getMainOverlay().isVisible() && i.showMainOverlay(!1)
}

function selectAndCenterCityOnRegionViewWindow(n) {
    var t = ClientLib.Data.MainData.GetInstance().get_Cities();
    t.get_CurrentCityId() != n && t.set_CurrentCityId(n);
    webfrontend.gui.UtilView.centerCityOnRegionViewWindow(n)
}

function openCityInMainWindow(n, t) {
    webfrontend.gui.UtilView.openVisModeInMainWindow(ClientLib.Vis.Mode.City, n, t)
}

function openCurrentCityInWorldMap() {
    var n = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId();
    n > 0 && webfrontend.gui.UtilView.openVisModeInMainWindow(ClientLib.Data.PlayerAreaViewMode.pavmWorldMap, n, !1)
}

function openVisModeInMainWindow(n, t, i) {
    var u = qx.core.Init.getApplication(),
        f = u.getPlayArea(),
        r;
    f.setView(n, t, -1, -1);
    r = i == !0 ? !1 : ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_REGIONJUMPTOBASE);
    (r == !0 || r == 1) && webfrontend.gui.UtilView.centerCityOnRegionViewWindow(t)
}

function spectateCombat(n) {
    var u = ClientLib.Vis.VisMain.GetInstance(),
        f = u.get_Battleground(),
        t, r, i;
    f.set_Mode(ClientLib.Vis.Battleground.BattleMode.Live);
    t = ClientLib.Data.MainData.GetInstance().get_AllianceCombatState().GetCombatByBaseId(n);
    r = ClientLib.Data.MainData.GetInstance().get_Alliance().get_Id();
    t != null ? (ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(n), ClientLib.Data.MainData.GetInstance().get_Combat().set_Id(n), i = qx.core.Init.getApplication(), i.getBackgroundArea().closeCityInfo(), i.getPlayArea().setView(t.AttackerAllianceId == r ? ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker : ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender, n, 0, 0)) : webfrontend.gui.info.BaseInfoWindow.getInstance().openWithBaseId(n)
}

function jumpToRegionAndCenterOnFirstOwnCity() {
    var t = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId(),
        n, u;
    if (t <= 0) {
        var r = ClientLib.Data.MainData.GetInstance().get_Cities(),
            i = r.get_AllCities(),
            f = r.get_CurrentOwnCity();
        if (f != null && i.c > 0) {
            n = null;
            for (u in i.d)
                if ((n == null || n.get_IsGhostMode()) && (n = i.d[u]), n && !n.get_IsGhostMode()) break;
            n != null && (t = n.get_Id())
        }
    }
    t != -1 && (qx.core.Init.getApplication().showMainOverlay(!1), webfrontend.gui.UtilView.selectAndCenterCityOnRegionViewWindow(t))
}