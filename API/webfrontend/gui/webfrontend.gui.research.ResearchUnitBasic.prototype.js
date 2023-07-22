function onUiTick() {
    (webfrontend.gui.research.ResearchUnit.prototype.onUiTick.call(this), this.isVisible()) && this.__baA != null && this.__baA.onUiTick()
}

function updateInfo(n) {
    var f, h, i, t;
    if (webfrontend.gui.research.ResearchUnit.prototype.updateInfo.call(this, n), n && this.isVisible()) {
        var u = v,
            e = r,
            o = this._researchGameData.tei,
            c = this.__baE();
        this._canUpgrade = !0;
        f = n.get_ErrorCode();
        (f & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.EMissingRequirements) != 0 ? (u = l, o = this._researchGameData.tdi, i = this._researchItem.get_NextLevelInfo_Obj(), h = webfrontend.gui.UtilTech.generateRequiredTechsForGameDataHtmlSBuilders(i.lr, this.__baD.NextLevel.ReqTechIndexes), this._lblRequirements.setValue(h.longReq.get())) : (f & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.EPlayerLvlToLow) != 0 ? (i = this._researchItem.get_NextLevelInfo_Obj(), i != null && (e = this.tr(a, ClientLib.Base.Tech.GetPlayerLeverRequirementByOject(i))), this._canUpgrade = !1) : n.get_CurrentLevel() > 0 && (u = s);
        t = this._researchItem.get_GameDataUnit_Obj();
        t != null && (this._lblTitle.setValue(t.dnuc ? t.dnuc : r), this._lblDescription.setValue(t.ds ? t.ds : r));
        this._imgResearchUnit.setSource(webfrontend.phe.cnc.config.Config.getInstance().getUIImagePath(o));
        this._imgPlateBackground != null && this._imgPlateBackground.setSource(c[u]);
        this._lblRequirements != null && this._lblRequirements.setValue(e);
        this._showWidgetsByState(u);
        this._upgradeItemContainer != null && (this.__baA != null && this._upgradeItemContainer.remove(this.__baA), this.__baA = new webfrontend.gui.research.ResearchUnitUpgrade(n), this.__baA.updateInfo(n), this._upgradeItemContainer.add(this.__baA), this._imgStatusArrow.setSource(this.__baB[this.__baA.getCurrentPlateState()]));
        this.onUiTick()
    }
}

function _showWidgetsByState(i) {
    var u = !1,
        f = !1,
        o = !1,
        s, h;
    switch (i) {
        case r:
            f = !0;
            break;
        case v:
            f = !0;
            o = !0;
            break;
        case a:
            f = !0;
            break;
        case e:
            u = !0
    }
    s = !u && f ? t : n;
    this._lblDescription.setVisibility(s);
    this._lblResearchBonus != null && (this._lblResearchBonus.setVisibility(s), h = this._lblResearchBonus.getValue(), h && h.length != 0 || this._lblResearchBonus.setVisibility(n));
    this._getShowResourceCosts() && this._lblResourceCost != null && this._lblResourceCost.setVisibility(s);
    this._btnResearch != null && this._btnResearch.setVisibility(!u && o ? t : n);
    this._lblRequirements != null && this._lblRequirements.setVisibility(!u && !o ? t : n);
    this._imgLockedUnit != null && this._imgLockedUnit.setVisibility(u ? t : n);
    this._lblNotAvailable != null && this._lblNotAvailable.setVisibility(!u && !o ? n : t);
    this._imgChecked && this._imgChecked.setVisibility(i == r ? t : n)
}

function _onClickResearch() {
    var e;
    if (this._researchItem != null && this._researchItem.get_MdbId() != -1) {
        var r = i,
            u = i,
            t = this._researchItem.get_GameDataUnit_Obj() || this._researchItem.get_GameDataTech_Obj();
        t != null && (r = t.dnuc ? t.dnuc : i, u = t.ds ? t.ds : i);
        var o = webfrontend.phe.cnc.config.Config.getInstance().getUIImagePath(this._researchItem.get_GameDataTech_Obj().ci),
            f = i,
            n = this._researchItem.get_NextLevelInfo_Obj();
        ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer() && n != null && n.rr != null && n.rr.length > 1 && (e = JSON.stringify(n), n = JSON.parse(e), n.rr[1].c = n.rr[1].c * ClientLib.Data.MainData.GetInstance().get_Player().GetSeasonLegacyModifier());
        n != null && (f = webfrontend.gui.UtilTech.generateResourceHtmlText(n.rr, null, !1, !1, !0, !0, -4).get());
        this._confirmationWidget.showResearchConfirmation(this, this._onResearchConfirmationResult, r, u, o, f)
    }
}

function _onResearchConfirmationResult(n) {
    if (n) {
        var t = ClientLib.Data.MainData.GetInstance().get_Player().get_PlayerResearch();
        t.ResearchTech(this._researchItem.get_MdbId())
    }
    this._confirmationWidget.disable()
}

function _getShowResourceCosts() {
    return this._researchItem.get_CurrentLevel() == 0
}

function onUiTick() {
    (webfrontend.gui.research.ResearchUnit.prototype.onUiTick.call(this), this.isVisible()) && this.__baA != null && this.__baA.onUiTick()
}

function updateInfo(n) {
    var f, h, i, t;
    if (webfrontend.gui.research.ResearchUnit.prototype.updateInfo.call(this, n), n && this.isVisible()) {
        var u = v,
            e = r,
            o = this._researchGameData.tei,
            c = this.__baE();
        this._canUpgrade = !0;
        f = n.get_ErrorCode();
        (f & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.EMissingRequirements) != 0 ? (u = l, o = this._researchGameData.tdi, i = this._researchItem.get_NextLevelInfo_Obj(), h = webfrontend.gui.UtilTech.generateRequiredTechsForGameDataHtmlSBuilders(i.lr, this.__baD.NextLevel.ReqTechIndexes), this._lblRequirements.setValue(h.longReq.get())) : (f & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.EPlayerLvlToLow) != 0 ? (i = this._researchItem.get_NextLevelInfo_Obj(), i != null && (e = this.tr(a, ClientLib.Base.Tech.GetPlayerLeverRequirementByOject(i))), this._canUpgrade = !1) : n.get_CurrentLevel() > 0 && (u = s);
        t = this._researchItem.get_GameDataUnit_Obj();
        t != null && (this._lblTitle.setValue(t.dnuc ? t.dnuc : r), this._lblDescription.setValue(t.ds ? t.ds : r));
        this._imgResearchUnit.setSource(webfrontend.phe.cnc.config.Config.getInstance().getUIImagePath(o));
        this._imgPlateBackground != null && this._imgPlateBackground.setSource(c[u]);
        this._lblRequirements != null && this._lblRequirements.setValue(e);
        this._showWidgetsByState(u);
        this._upgradeItemContainer != null && (this.__baA != null && this._upgradeItemContainer.remove(this.__baA), this.__baA = new webfrontend.gui.research.ResearchUnitUpgrade(n), this.__baA.updateInfo(n), this._upgradeItemContainer.add(this.__baA), this._imgStatusArrow.setSource(this.__baB[this.__baA.getCurrentPlateState()]));
        this.onUiTick()
    }
}