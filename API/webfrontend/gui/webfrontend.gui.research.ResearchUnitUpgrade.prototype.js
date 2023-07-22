function onUiTick() {
    var o;
    if (this._researchItem != null) {
        var t = ClientLib.Data.MainData.GetInstance().get_Cities(),
            r = !1,
            u = i,
            e = i,
            n = this._researchItem.get_NextLevelInfo_Obj();
        ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer() && (o = JSON.stringify(n), n = JSON.parse(o), n != null && n.rr != null && n.rr.length > 1 && (n.rr[1].c = n.rr[1].c * ClientLib.Data.MainData.GetInstance().get_Player().GetSeasonLegacyModifier()));
        n != null && (u = webfrontend.gui.UtilTech.generateResourceHtmlText(n.rr, t.get_CurrentOwnCity(), !1, !1, !1, !0, -4, null, !0).get(), e = webfrontend.gui.UtilTech.generateResourceHtmlText(n.rr, t.get_CurrentOwnCity(), !1, !1, !1, !0, -4, {
            valid: webfrontend.theme.Color.colors[nt],
            invalid: webfrontend.theme.Color.colors[b]
        }).get(), r = webfrontend.phe.cnc.Util.checkResources(n.rr));
        this._btnResearch != null && (this._btnResearch.setEnabled(this._canUpgrade == !0 && r == !0 && !this.__bax), this.__bax && this._btnResearch.setToolTipText(this.tr(f)));
        this._getShowResourceCosts() && this._lblResourceCost != null && (this._lblResourceCost.setValue(u), this._lblResourceCost.setToolTipText(e))
    }
}

function updateInfo(r) {
    var o, f, y;
    if (webfrontend.gui.research.ResearchUnit.prototype.updateInfo.call(this, r), r && this.isVisible()) {
        var u = a,
            l = n,
            v = this._researchGameData.dnuc ? this._researchGameData.dnuc : n,
            c = this._researchGameData.wei;
        this._canUpgrade = !0;
        f = this._researchItem.get_GameDataUnit_Obj();
        f == null && (f = this._techGamedata);
        o = r.get_ErrorCode();
        (o & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.ENoUpgradeAvailable) != 0 ? (this._canUpgrade = !1, u = t, c = this._researchGameData.wdi, v = n) : (o & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.ENotResearched) != 0 ? (u = i, c = this._researchGameData.wdi, f = this._researchItem.get_GameDataUnit_Obj(), f != null && (l = this.tr(s, f.dn ? f.dn : n))) : (o & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.EFullyUpgraded) != 0 ? (u = k, r.get_CurrentLevel() == 1 && (this._canUpgrade = !1, u = t, c = this._researchGameData.wdi, v = n)) : (o & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.EMissingRequirements) != 0 ? (this._canUpgrade = !1, u = i, c = this._researchGameData.wdi, l = this.tr(e)) : (o & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.EPlayerLvlToLow) != 0 && (this._canUpgrade = !1, y = this._researchItem.get_NextLevelInfo_Obj(), y != null && (l = this.tr(h, ClientLib.Base.Tech.GetPlayerLeverRequirementByOject(y))));
        this._lblTitle.setValue(v);
        this._lblDescription.setValue(this._researchGameData.ds ? this._researchGameData.ds : n);
        this._lblRequirements != null && this._lblRequirements.setValue(l);
        this._imgPlateBackground != null && this._imgPlateBackground.setSource(this.__baC[u]);
        this._imgResearchUnit.setSource(webfrontend.phe.cnc.config.Config.getInstance().getUIImagePath(c));
        this.__baG = u;
        this._showWidgetsByState(u);
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
    var r;
    if (this._researchItem != null && this._researchItem.get_MdbId() != -1) {
        var u = this._researchGameData.dn ? this._researchGameData.dn : n,
            f = this._researchGameData.ds ? this._researchGameData.ds : n,
            e = webfrontend.phe.cnc.config.Config.getInstance().getUIImagePath(this._researchGameData.wei),
            i = n,
            t = this._researchItem.get_NextLevelInfo_Obj();
        ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer() && (r = JSON.stringify(t), t = JSON.parse(r), t.rr[1].c = t.rr[1].c * ClientLib.Data.MainData.GetInstance().get_Player().GetSeasonLegacyModifier());
        t != null && (i = webfrontend.gui.UtilTech.generateResourceHtmlText(t.rr, null, !1, !1, !0, !0, -4).get());
        this._confirmationWidget.showResearchConfirmation(this, this._onResearchConfirmationResult, u, f, e, i)
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
    return this._researchItem.get_CurrentLevel() == 1
}

function getCurrentPlateState() {
    return this.__baG
}

function updateInfo(r) {
    var o, f, y;
    if (webfrontend.gui.research.ResearchUnit.prototype.updateInfo.call(this, r), r && this.isVisible()) {
        var u = a,
            l = n,
            v = this._researchGameData.dnuc ? this._researchGameData.dnuc : n,
            c = this._researchGameData.wei;
        this._canUpgrade = !0;
        f = this._researchItem.get_GameDataUnit_Obj();
        f == null && (f = this._techGamedata);
        o = r.get_ErrorCode();
        (o & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.ENoUpgradeAvailable) != 0 ? (this._canUpgrade = !1, u = t, c = this._researchGameData.wdi, v = n) : (o & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.ENotResearched) != 0 ? (u = i, c = this._researchGameData.wdi, f = this._researchItem.get_GameDataUnit_Obj(), f != null && (l = this.tr(s, f.dn ? f.dn : n))) : (o & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.EFullyUpgraded) != 0 ? (u = k, r.get_CurrentLevel() == 1 && (this._canUpgrade = !1, u = t, c = this._researchGameData.wdi, v = n)) : (o & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.EMissingRequirements) != 0 ? (this._canUpgrade = !1, u = i, c = this._researchGameData.wdi, l = this.tr(e)) : (o & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.EPlayerLvlToLow) != 0 && (this._canUpgrade = !1, y = this._researchItem.get_NextLevelInfo_Obj(), y != null && (l = this.tr(h, ClientLib.Base.Tech.GetPlayerLeverRequirementByOject(y))));
        this._lblTitle.setValue(v);
        this._lblDescription.setValue(this._researchGameData.ds ? this._researchGameData.ds : n);
        this._lblRequirements != null && this._lblRequirements.setValue(l);
        this._imgPlateBackground != null && this._imgPlateBackground.setSource(this.__baC[u]);
        this._imgResearchUnit.setSource(webfrontend.phe.cnc.config.Config.getInstance().getUIImagePath(c));
        this.__baG = u;
        this._showWidgetsByState(u);
        this.onUiTick()
    }
}

function _onClickResearch() {
    var r;
    if (this._researchItem != null && this._researchItem.get_MdbId() != -1) {
        var u = this._researchGameData.dn ? this._researchGameData.dn : n,
            f = this._researchGameData.ds ? this._researchGameData.ds : n,
            e = webfrontend.phe.cnc.config.Config.getInstance().getUIImagePath(this._researchGameData.wei),
            i = n,
            t = this._researchItem.get_NextLevelInfo_Obj();
        ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer() && (r = JSON.stringify(t), t = JSON.parse(r), t.rr[1].c = t.rr[1].c * ClientLib.Data.MainData.GetInstance().get_Player().GetSeasonLegacyModifier());
        t != null && (i = webfrontend.gui.UtilTech.generateResourceHtmlText(t.rr, null, !1, !1, !0, !0, -4).get());
        this._confirmationWidget.showResearchConfirmation(this, this._onResearchConfirmationResult, u, f, e, i)
    }
}

function _getShowResourceCosts() {
    return this._researchItem.get_CurrentLevel() == 1
}