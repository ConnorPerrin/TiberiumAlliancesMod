function _onAppear() {
    var t, i, h;
    if (this.__wm != null && !this.__bvF && (t = this.getBounds(), i = this.__wm.getBounds(), t != null && i != null)) {
        var r = 36,
            n = qx.core.Init.getApplication(),
            u = n.getBottomOverlayPosition().left,
            f = n.getCurrentBottomOverlay().getBounds(),
            o = i.left + i.width / 2,
            c = t.width / 2,
            s = n.getDesktop().getBounds().width - t.width,
            l = Math.floor(Math.min(Math.max(0, u + o - c), s));
        this.setLayoutProperties({
            left: l,
            bottom: f.height + 21
        });
        n.getDesktop().remove(this.__bvL);
        h = Math.floor(u + (o - r / 2));
        s = n.getDesktop().getBounds().width - r;
        n.getDesktop().add(this.__bvL, {
            left: h,
            bottom: f.height
        });
        this.__bvL.setVisibility(e)
    }
}

function activate(n, t, i, r, u, f, o, s) {
    var h;
    n && u && !this.__bvF && (this.__bpD = n, this.__wm = t, this._lblTitle.setValue(u.dn), this.__bvM = r, this.__bvN = i, this.__bvO = f, this.__bvP = u, this.__bvR = o, this.__bvS = s, this.__bvN == webfrontend.gui.production.ProductionMenuDetailPopup.type.ETech ? (h = ClientLib.Data.MainData.GetInstance().get_Server().get_CityMinLevelBuilding(), this.__bpH = [], h < 1 && (this.__bpH = ClientLib.Base.Util.GetTechLevelResourceRequirements_Obj(1, this.__bvP)), this.__bvQ = ClientLib.Base.Util.GetTechLevelRequirements_Obj(1, this.__bvP)) : this.__bvN == webfrontend.gui.production.ProductionMenuDetailPopup.type.EUnit && (h = 0, this.__bvP.t == ClientLib.Base.ETechType.Defense ? h = ClientLib.Data.MainData.GetInstance().get_Server().get_CityMinLevelDefense() : this.__bvP.t == ClientLib.Base.ETechType.Offense && (h = ClientLib.Data.MainData.GetInstance().get_Server().get_CityMinLevelOffense()), this.__bpH = [], h < 1 && (this.__bpH = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj(1, this.__bvP)), this.__bvQ = ClientLib.Base.Util.GetUnitLevelRequirements_Obj(1, this.__bvP)), this.updateElements(), webfrontend.phe.cnc.base.Timer.getInstance().addListener(y, this.__bae, this), this.addListenerOnce(st, this._onAppear, this), this.setVisibility(e))
}

function deactivate() {
    webfrontend.phe.cnc.base.Timer.getInstance().removeListener(y, this.__bae, this);
    this.__wm = null;
    this.__bpD = null;
    this.__bvN = 0;
    this.__bvO = null;
    this.__bvP = null;
    this.__bpH = null;
    this.__bvR = null;
    this.setVisibility(i);
    this.__bvL && this.__bvL.setVisibility(i)
}

function toggleDisableMode() {
    this.__bvF = !this.__bvF
}

function _onAppear() {
    var t, i, h;
    if (this.__wm != null && !this.__bvF && (t = this.getBounds(), i = this.__wm.getBounds(), t != null && i != null)) {
        var r = 36,
            n = qx.core.Init.getApplication(),
            u = n.getBottomOverlayPosition().left,
            f = n.getCurrentBottomOverlay().getBounds(),
            o = i.left + i.width / 2,
            c = t.width / 2,
            s = n.getDesktop().getBounds().width - t.width,
            l = Math.floor(Math.min(Math.max(0, u + o - c), s));
        this.setLayoutProperties({
            left: l,
            bottom: f.height + 21
        });
        n.getDesktop().remove(this.__bvL);
        h = Math.floor(u + (o - r / 2));
        s = n.getDesktop().getBounds().width - r;
        n.getDesktop().add(this.__bvL, {
            left: h,
            bottom: f.height
        });
        this.__bvL.setVisibility(e)
    }
}

function activate(n, t, i, r, u, f, o, s) {
    var h;
    n && u && !this.__bvF && (this.__bpD = n, this.__wm = t, this._lblTitle.setValue(u.dn), this.__bvM = r, this.__bvN = i, this.__bvO = f, this.__bvP = u, this.__bvR = o, this.__bvS = s, this.__bvN == webfrontend.gui.production.ProductionMenuDetailPopup.type.ETech ? (h = ClientLib.Data.MainData.GetInstance().get_Server().get_CityMinLevelBuilding(), this.__bpH = [], h < 1 && (this.__bpH = ClientLib.Base.Util.GetTechLevelResourceRequirements_Obj(1, this.__bvP)), this.__bvQ = ClientLib.Base.Util.GetTechLevelRequirements_Obj(1, this.__bvP)) : this.__bvN == webfrontend.gui.production.ProductionMenuDetailPopup.type.EUnit && (h = 0, this.__bvP.t == ClientLib.Base.ETechType.Defense ? h = ClientLib.Data.MainData.GetInstance().get_Server().get_CityMinLevelDefense() : this.__bvP.t == ClientLib.Base.ETechType.Offense && (h = ClientLib.Data.MainData.GetInstance().get_Server().get_CityMinLevelOffense()), this.__bpH = [], h < 1 && (this.__bpH = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj(1, this.__bvP)), this.__bvQ = ClientLib.Base.Util.GetUnitLevelRequirements_Obj(1, this.__bvP)), this.updateElements(), webfrontend.phe.cnc.base.Timer.getInstance().addListener(y, this.__bae, this), this.addListenerOnce(st, this._onAppear, this), this.setVisibility(e))
}

function deactivate() {
    webfrontend.phe.cnc.base.Timer.getInstance().removeListener(y, this.__bae, this);
    this.__wm = null;
    this.__bpD = null;
    this.__bvN = 0;
    this.__bvO = null;
    this.__bvP = null;
    this.__bpH = null;
    this.__bvR = null;
    this.setVisibility(i);
    this.__bvL && this.__bvL.setVisibility(i)
}

function updateElements() {
    var r, h, l, a, v, y, s, p, w, o;
    this.__bvP && (r = new qx.util.StringBuilder(1024), this.__bvH.setValue(u), h = this.__bpH, h && h.Length > 0 ? (this.__bvG.setVisibility(e), this.__bvH.setVisibility(e), this.__bvH.setValue(webfrontend.gui.UtilTech.generateResourceHtmlText(h, this.__bpD, !0).get())) : (this.__bvG.setVisibility(i), this.__bvH.setVisibility(i)), r.clear(), l = !1, a = !1, this.__bvN == webfrontend.gui.production.ProductionMenuDetailPopup.type.ETech ? l = (this.__bvS & 1 << ClientLib.Data.BuildErrorType.MissingReserachRequirements) != 0 : this.__bvN == webfrontend.gui.production.ProductionMenuDetailPopup.type.EUnit && (l = (this.__bvS & 1 << ClientLib.Data.UnitRecruitmentErrorType.MissingReseachRequirements) != 0, a = (this.__bvS & 1 << ClientLib.Data.UnitRecruitmentErrorType.MainProductionBuildingDamaged) != 0), l ? (r.clear(), r.add(c, webfrontend.theme.Color.colors[f], t), r.add(this.tr(tt), n), this.__bvI.setValue(r.get())) : this.__bvT(), v = u, a && (y = u, this.__bpD && (y = this.__bpD.get_CityUnitsData().GetMainProductionBuildingName(this.__bvP.pt, this.__bvP.f)), r.clear(), r.add(c, webfrontend.theme.Color.colors[f], t), r.add(this.tr(ut, y), n), v = r.get()), this.__Ol.setValue(v), s = this.__bvP.ds == null ? u : this.__bvP.ds, this.__bvJ.setValue(u), this.__bvN == webfrontend.gui.production.ProductionMenuDetailPopup.type.ETech && (this.__bvP.hasOwnProperty(d) && this.__bvP.t == ClientLib.Base.ETechType.Resource && this.__bvP.sds != null ? s = this.__bvP.sds : ClientLib.Base.Tech.GetTechNameFromTechId(this.__bvM, this.__bvP.f) == ClientLib.Base.ETechName.Command_Center && (p = this.__bpD.GetResourceMaxStorage(ClientLib.Base.EResourceType.RepairChargeInf), w = webfrontend.phe.cnc.Util.getTimespanString(ClientLib.Data.MainData.GetInstance().get_Time().GetTimeSpan(p, !0)), s = qx.lang.String.format(s, [w]))), this.__bpx.exclude(), this._imgTitleUpgradeIcon.exclude(), this.__bvN == webfrontend.gui.production.ProductionMenuDetailPopup.type.EUnit && (o = ClientLib.Base.Unit.GetUpgrade(this.__bvM), o != null && o.get_CurrentLevel() > 1 && (this.__bpy.setValue(this.tr(it, o.get_GameDataTech_Obj().tr.dn)), this.__bpz.setValue(o.get_GameDataTech_Obj().tr.uds == null ? u : o.get_GameDataTech_Obj().tr.uds), this._imgTitleUpgradeIcon.show(), this.__bpx.show())), this.__yY.setValue(s))
}