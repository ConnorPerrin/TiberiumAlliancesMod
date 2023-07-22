function checkUse() {}

function resetSpinner() {
    this._spinAmountBuy != null && this._spinAmountBuy.setValue(1);
    this._spinAmountUse != null && this._spinAmountUse.setValue(1);
    var n = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetItemFromSingleItemProduct(this._currentProduct);
    this._lblSupplyPointsSum != null && this._lblSupplyPointsSum.setValue(r + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(n.m));
    this._lblFundsSum != null && this._lblFundsSum.setValue(r + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(ClientLib.Data.MainData.GetInstance().get_ShopCatalog().PriceFromItemById(n.i)))
}

function checkAdd() {
    var n = ClientLib.Data.MainData.GetInstance().get_Inventory().get_SpendableFunds(),
        t = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetBundleInfo(this._currentProduct),
        i = t.Price <= n,
        u = ClientLib.Data.MainData.GetInstance().get_Player().get_IsSubstituted(),
        f = webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SUBSTITUTIONALLOWUSEFUNDS);
    i ? (this._lblFunds.resetTextColor(), this._btnAdd.setEnabled(!0), this._btnAdd.setToolTipText(this.tr(r))) : (this._lblFunds.setTextColor(kt), this._btnAdd.setEnabled(!1), this._btnAdd.setToolTipText(this.tr(pt)));
    u && !f && (this._lblFunds.resetTextColor(), this._btnAdd.setEnabled(!1), this._btnAdd.setToolTipText(this.tr(l)))
}

function updateContent(t) {
    var f, r, o;
    if (this._currentProduct != t) {
        this._currentProduct = t;
        f = ClientLib.Data.MainData.GetInstance().get_ShopCatalog();
        this._lblName.setValue(t.dn);
        r = f.GetBundleInfo(t);
        this._contValues.removeAll();
        this.__bbn.length = 0;
        this.__bbn = webfrontend.gui.monetization.ShopBundle.getBundleItems(r, t, !1);
        this.__bbp();
        this._lblFunds.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(r.Price, !0, !1));
        this.__bbr.setValue(tt + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(r.OldPrice, !0, !1) + vt);
        this._cntSupplyPoints.setVisibility(n);
        var s = ClientLib.Data.MainData.GetInstance().get_Time().GetJSStepTimeGetTime(ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep()),
            c = r.ExpirationDate - s,
            e = c / 1e3,
            u = !0;
        if (r.SpecialOfferSaving > 0 && r.ExpirationDate > 0 ? this._lblSale.setValue(this.tr(ii, r.SpecialOfferSaving, webfrontend.phe.cnc.Util.getShortTimespanString(e, !0, !1, !0))) : r.ExpirationDate > 0 ? this._lblSale.setValue(this.tr(ht, webfrontend.phe.cnc.Util.getShortTimespanString(e, !0, !1, !0))) : r.SpecialOfferSaving > 0 ? this._lblSale.setValue(this.tr(ft, r.SpecialOfferSaving)) : u = !1, u) {
            o = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetCustomizationColorTagFromProduct(t);
            switch (o) {
                case ClientLib.Data.EShopProductCustomizationColorTag.None:
                    this._contHeadline.setDecorator(ri);
                    break;
                case ClientLib.Data.EShopProductCustomizationColorTag.Timelimited:
                    this._contHeadline.setDecorator(d);
                    break;
                case ClientLib.Data.EShopProductCustomizationColorTag.TopSeller:
                    this._contHeadline.setDecorator(fi);
                    break;
                case ClientLib.Data.EShopProductCustomizationColorTag.BestValue:
                    this._contHeadline.setDecorator(it);
                    break;
                case ClientLib.Data.EShopProductCustomizationColorTag.SpecialOffer:
                    this._contHeadline.setDecorator(ui)
            }
        }
        this._imgClock.setVisibility(u ? i : n);
        this._lblSale.setVisibility(u ? i : n);
        switch (r.Type) {
            case ClientLib.Data.BundleInfo.EBundleType.Resource:
                this._imgResource.setSource(p);
                break;
            case ClientLib.Data.BundleInfo.EBundleType.Capacity:
                this._imgResource.setSource(h);
                break;
            default:
                this._imgResource.setSource(k)
        }
        this.checkUse();
        this.checkAdd()
    }
}

function _showUseSection(i) {
    this._btnUse.setVisibility(i ? n : t);
    this._spinAmountUse.setVisibility(i ? n : t);
    this._lblSupplyPoints.setVisibility(i ? n : t);
    this._lblXUse.setVisibility(i ? n : t);
    this._iconUseSupplyPoints.setVisibility(i ? n : t)
}

function _onTick() {
    this.checkUse()
}

function _onPlayerLevelChange() {
    this.checkUse()
}

function _onInventoryChange() {
    this.checkUse();
    this.checkAdd()
}

function _createLayout() {
    var n = webfrontend.gui.layout.Loader.getInstance(),
        t = n.getLayout(ct, this),
        u = dt,
        e;
    this._contHeadline = n.getElement(t, u, nt);
    this._contHeadline.setDecorator(ut);
    this._contHeadline.setVisibility(i);
    this._imgClock = n.getElement(t, u, b);
    this._contValues = n.getElement(t, u, c);
    this._lblSale = n.getElement(t, u, v);
    this._lblName = n.getElement(t, u, rt);
    this._lblFunds = n.getElement(t, u, w);
    this.__bbr = n.getElement(t, u, st);
    this._cntSupplyPoints = n.getElement(t, u, y);
    this._lblSupplyPoints = n.getElement(t, u, g);
    e = n.getElement(t, u, gt);
    this._imgResource = n.getElement(t, u, at);
    this._btnAdd = n.getElement(t, u, s);
    this._btnAdd.setLabel(this.tr(r));
    this._btnAdd.setToolTipText(this.tr(r));
    e.setToolTip(this._toolTip);
    e.addListener(o, this._onInfoIconMouseOver, this);
    this._btnAdd.addListener(yt, this._onClickAdd, this);
    this.__vv = new qx.ui.container.Composite((new qx.ui.layout.HBox).set({
        alignX: ot,
        alignY: f
    })).set({
        allowGrowX: !0,
        allowGrowY: !0
    });
    this.__vv.add(new qx.ui.basic.Image(a));
    this.__vv.addListener(o, this._onInfoIconMouseOver, this);
    this.__vv.setToolTip(this._toolTip)
}

function _onClickAdd() {
    var t = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetBundleInfo(this._currentProduct),
        i = ClientLib.Data.MainData.GetInstance().get_Inventory().get_SpendableFunds(),
        n;
    i < t.Price ? webfrontend.phe.cnc.Util.openOfferWall() : (n = parseInt(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_QUICKBUYWARNINGTHRESHOLD), 10), n != -1 && t.Price > n ? this._confirmationWidget.showQuickBuyWarning(this, this._onWarningResult, this._currentProduct.dn, -1, t.Price, Math.abs(n)) : this._buyItem())
}

function _onClickUse() {
    var n = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetItemFromSingleItemProduct(this._currentProduct),
        t;
    if (n.c != ClientLib.Base.EItemCategory.CommandPointGain && n.t < ClientLib.Data.MainData.GetInstance().get_Player().get_Level() && (t = webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SHOWLOWERRANKWARNING), t)) {
        this.__wg == null && (this.__wg = new webfrontend.gui.widgets.confirmationWidgets.LowerRankItemConfirmationWidget);
        this.__wg.showLowerRankItemWarning(this, this._useItem, n);
        return
    }
    this._useItem(n)
}

function _useItem() {}

function _buyItem() {
    var r = !0,
        t, e, i;
    if (webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SHOWP4FWARNING)) {
        t = 1;
        this._spinAmountBuy != null && (t = Math.max(1, parseInt(this._spinAmountBuy.getValue())));
        var u = ClientLib.Data.MainData.GetInstance(),
            o = u.get_Inventory(),
            s = u.get_ShopCatalog(),
            f = -1,
            n = s.GetPriceFromProduct(this._currentProduct);
        n = t * n;
        n && (f = o.FundsTypesUsedByCost(n));
        f == ClientLib.Data.Inventory.EFundsTypesUsed.EP4FFunds && (r = !1, e = new webfrontend.gui.CurrencyChangeInfoPopup(this.__wh, this), e.enable(), i = ClientLib.Config.Main.GetInstance(), i.SetConfig(ClientLib.Config.Main.CONFIG_SHOWP4FWARNING, !1), i.SaveToDB())
    }
    r && this.__wh.call(this)
}

function _onWarningResult(n) {
    n && this._buyItem()
}

function _onInfoIconMouseOver() {
    this._toolTip.update(this._currentProduct, this._parentTab.getCurrentCityId())
}

function _onSpinAmountBuyChange() {
    var n = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetItemFromSingleItemProduct(this._currentProduct),
        t = Math.max(1, parseInt(this._spinAmountBuy.getValue())),
        i = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().PriceFromItemById(n.i),
        u = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(i * t);
    this._lblFundsSum.setValue(r + u)
}

function _onSpinAmountUseChange() {
    var n = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetItemFromSingleItemProduct(this._currentProduct),
        t = Math.max(1, parseInt(this._spinAmountUse.getValue())),
        i = n.m,
        u = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(t * i);
    this._lblSupplyPointsSum.setValue(r + u)
}

function checkUse() {}

function checkAdd() {
    var n = ClientLib.Data.MainData.GetInstance().get_Inventory().get_SpendableFunds(),
        t = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetBundleInfo(this._currentProduct),
        i = t.Price <= n,
        u = ClientLib.Data.MainData.GetInstance().get_Player().get_IsSubstituted(),
        f = webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SUBSTITUTIONALLOWUSEFUNDS);
    i ? (this._lblFunds.resetTextColor(), this._btnAdd.setEnabled(!0), this._btnAdd.setToolTipText(this.tr(r))) : (this._lblFunds.setTextColor(kt), this._btnAdd.setEnabled(!1), this._btnAdd.setToolTipText(this.tr(pt)));
    u && !f && (this._lblFunds.resetTextColor(), this._btnAdd.setEnabled(!1), this._btnAdd.setToolTipText(this.tr(l)))
}

function updateContent(t) {
    var f, r, o;
    if (this._currentProduct != t) {
        this._currentProduct = t;
        f = ClientLib.Data.MainData.GetInstance().get_ShopCatalog();
        this._lblName.setValue(t.dn);
        r = f.GetBundleInfo(t);
        this._contValues.removeAll();
        this.__bbn.length = 0;
        this.__bbn = webfrontend.gui.monetization.ShopBundle.getBundleItems(r, t, !1);
        this.__bbp();
        this._lblFunds.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(r.Price, !0, !1));
        this.__bbr.setValue(tt + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(r.OldPrice, !0, !1) + vt);
        this._cntSupplyPoints.setVisibility(n);
        var s = ClientLib.Data.MainData.GetInstance().get_Time().GetJSStepTimeGetTime(ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep()),
            c = r.ExpirationDate - s,
            e = c / 1e3,
            u = !0;
        if (r.SpecialOfferSaving > 0 && r.ExpirationDate > 0 ? this._lblSale.setValue(this.tr(ii, r.SpecialOfferSaving, webfrontend.phe.cnc.Util.getShortTimespanString(e, !0, !1, !0))) : r.ExpirationDate > 0 ? this._lblSale.setValue(this.tr(ht, webfrontend.phe.cnc.Util.getShortTimespanString(e, !0, !1, !0))) : r.SpecialOfferSaving > 0 ? this._lblSale.setValue(this.tr(ft, r.SpecialOfferSaving)) : u = !1, u) {
            o = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetCustomizationColorTagFromProduct(t);
            switch (o) {
                case ClientLib.Data.EShopProductCustomizationColorTag.None:
                    this._contHeadline.setDecorator(ri);
                    break;
                case ClientLib.Data.EShopProductCustomizationColorTag.Timelimited:
                    this._contHeadline.setDecorator(d);
                    break;
                case ClientLib.Data.EShopProductCustomizationColorTag.TopSeller:
                    this._contHeadline.setDecorator(fi);
                    break;
                case ClientLib.Data.EShopProductCustomizationColorTag.BestValue:
                    this._contHeadline.setDecorator(it);
                    break;
                case ClientLib.Data.EShopProductCustomizationColorTag.SpecialOffer:
                    this._contHeadline.setDecorator(ui)
            }
        }
        this._imgClock.setVisibility(u ? i : n);
        this._lblSale.setVisibility(u ? i : n);
        switch (r.Type) {
            case ClientLib.Data.BundleInfo.EBundleType.Resource:
                this._imgResource.setSource(p);
                break;
            case ClientLib.Data.BundleInfo.EBundleType.Capacity:
                this._imgResource.setSource(h);
                break;
            default:
                this._imgResource.setSource(k)
        }
        this.checkUse();
        this.checkAdd()
    }
}

function _createLayout() {
    var n = webfrontend.gui.layout.Loader.getInstance(),
        t = n.getLayout(ct, this),
        u = dt,
        e;
    this._contHeadline = n.getElement(t, u, nt);
    this._contHeadline.setDecorator(ut);
    this._contHeadline.setVisibility(i);
    this._imgClock = n.getElement(t, u, b);
    this._contValues = n.getElement(t, u, c);
    this._lblSale = n.getElement(t, u, v);
    this._lblName = n.getElement(t, u, rt);
    this._lblFunds = n.getElement(t, u, w);
    this.__bbr = n.getElement(t, u, st);
    this._cntSupplyPoints = n.getElement(t, u, y);
    this._lblSupplyPoints = n.getElement(t, u, g);
    e = n.getElement(t, u, gt);
    this._imgResource = n.getElement(t, u, at);
    this._btnAdd = n.getElement(t, u, s);
    this._btnAdd.setLabel(this.tr(r));
    this._btnAdd.setToolTipText(this.tr(r));
    e.setToolTip(this._toolTip);
    e.addListener(o, this._onInfoIconMouseOver, this);
    this._btnAdd.addListener(yt, this._onClickAdd, this);
    this.__vv = new qx.ui.container.Composite((new qx.ui.layout.HBox).set({
        alignX: ot,
        alignY: f
    })).set({
        allowGrowX: !0,
        allowGrowY: !0
    });
    this.__vv.add(new qx.ui.basic.Image(a));
    this.__vv.addListener(o, this._onInfoIconMouseOver, this);
    this.__vv.setToolTip(this._toolTip)
}

function _onInfoIconMouseOver() {
    this._toolTip.update(this._currentProduct, this._parentTab.getCurrentCityId())
}

function _onClickAdd() {
    var t = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetBundleInfo(this._currentProduct),
        i = ClientLib.Data.MainData.GetInstance().get_Inventory().get_SpendableFunds(),
        n;
    i < t.Price ? webfrontend.phe.cnc.Util.openOfferWall() : (n = parseInt(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_QUICKBUYWARNINGTHRESHOLD), 10), n != -1 && t.Price > n ? this._confirmationWidget.showQuickBuyWarning(this, this._onWarningResult, this._currentProduct.dn, -1, t.Price, Math.abs(n)) : this._buyItem())
}

function _useItem() {}