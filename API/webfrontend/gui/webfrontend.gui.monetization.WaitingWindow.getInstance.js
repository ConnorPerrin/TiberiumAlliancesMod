function openUseItem(t, r, u) {
    var f, s;
    if (this.__vD(), u = u || 1, this.__vz = t, f = ClientLib.Base.ItemCategories.GetItemById(this.__vz), f != null) {
        var e = webfrontend.gui.Util.generateItemInfos(f, u),
            o = e.dn,
            h = e.ds;
        this.__vK(new Array(f));
        this.__vm.setValue(o);
        this.__vn.setValue(o);
        this.__vo.setValue(h);
        this.__vr.exclude();
        this.__vs.show();
        this.__vt.setValue(this.tr(ft));
        this.__vq.exclude();
        this.__vu.exclude();
        this.show();
        this.setVisibility(i);
        new qx.util.DeferredCall(function() {
            this.setVisibility(n);
            this.centerPosition();
            this.bringToFront()
        }, this).schedule()
    }
    s = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(r);
    s != null && f != null ? (this.__vA = u, ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(ki, {
        cityId: r,
        productIds: [this.__vz],
        amounts: [u]
    }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this.__vF), null)) : this.__vF(null, {
        r: webfrontend.gui.monetization.WaitingWindow.useBlocker.Invalid
    })
}

function openQuickBuyItem(t, r) {
    var u, o, s, h;
    if (this.__vD(), this.__vz = t, u = ClientLib.Base.ItemCategories.GetItemById(this.__vz), u != null) {
        var f = webfrontend.gui.Util.generateItemInfos(u, r),
            e = f.dn,
            l = f.ds;
        this.__vK(new Array(u));
        this.__vm.setValue(e);
        this.__vn.setValue(e);
        this.__vo.setValue(l);
        this.__vr.exclude();
        this.__vs.show();
        this.__vt.setValue(this.tr(a));
        this.__vq.exclude();
        this.__vu.exclude();
        this.show();
        this.setVisibility(i);
        new qx.util.DeferredCall(function() {
            this.setVisibility(n);
            this.centerPosition();
            this.bringToFront()
        }, this).schedule()
    }
    if (u != null) {
        if (r == 0) {
            this.__vH(null, webfrontend.gui.monetization.WaitingWindow.buyBlocker.IllegalAmount);
            return
        }
        if (o = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().ProductIdFromItemById(this.__vz), o == c) {
            this.__vH(null, webfrontend.gui.monetization.WaitingWindow.buyBlocker.ProductIdNotFound);
            return
        }
        s = [this.__vz];
        h = [r];
        ClientLib.Data.MainData.GetInstance().get_Inventory().BuyItems(s, h, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this.__vH), null)
    } else this.__vH(null, webfrontend.gui.monetization.WaitingWindow.buyBlocker.GenericFail)
}

function openBuyItem(t, r) {
    var u, o, s, h;
    if (this.__vD(), this.__vz = t, u = ClientLib.Base.ItemCategories.GetItemById(this.__vz), u != null) {
        var f = webfrontend.gui.Util.generateItemInfos(u, r),
            e = f.dn,
            l = f.ds;
        this.__vK(new Array(u));
        this.__vm.setValue(e);
        this.__vn.setValue(e);
        this.__vo.setValue(l);
        this.__vr.exclude();
        this.__vs.show();
        this.__vt.setValue(this.tr(a));
        this.__vq.exclude();
        this.__vu.exclude();
        this.show();
        this.setVisibility(i);
        new qx.util.DeferredCall(function() {
            this.setVisibility(n);
            this.centerPosition();
            this.bringToFront()
        }, this).schedule()
    }
    if (u != null) {
        if (r == 0) {
            this.__vG(null, webfrontend.gui.monetization.WaitingWindow.buyBlocker.IllegalAmount);
            return
        }
        if (o = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().ProductIdFromItemById(this.__vz), o == c) {
            this.__vG(null, webfrontend.gui.monetization.WaitingWindow.buyBlocker.ProductIdNotFound);
            return
        }
        s = [this.__vz];
        h = [r];
        ClientLib.Data.MainData.GetInstance().get_Inventory().BuyItems(s, h, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this.__vG), null)
    } else this.__vG(null, webfrontend.gui.monetization.WaitingWindow.buyBlocker.GenericFail)
}

function openBuyProduct(t, r) {
    var e, s, u, h, o, f, y, p;
    if (this.__vD(), e = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetItemFromSingleItemProduct(t), e != null) {
        var l = webfrontend.gui.Util.generateItemInfos(e, r),
            v = l.dn,
            w = l.ds;
        this.__vK(new Array(e));
        this.__vm.setValue(v);
        this.__vn.setValue(v);
        this.__vo.setValue(w);
        this.__vr.exclude();
        this.__vs.show();
        this.__vt.setValue(this.tr(a))
    } else {
        s = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetBundleInfo(t);
        u = c;
        switch (s.Type) {
            case ClientLib.Data.BundleInfo.EBundleType.Resource:
                u = lt;
                break;
            case ClientLib.Data.BundleInfo.EBundleType.Capacity:
                u = ii;
                break;
            default:
                u = st
        }
        for (this.__vK(new Array({
                ic: u
            })), this.__vm.setValue(t.dn), this.__vn.setValue(t.dn), this.__vo.exclude(), this.__vr.exclude(), this.__vs.show(), this.__vt.setValue(this.tr(fi)), this.__vp.removeAll(), h = 5, o = webfrontend.gui.monetization.ShopBundle.getBundleItems(s, t, !0), f = 0; f < o.length && f < h; f++) this.__vp.add(o[f].cntItem);
        o.length > h && this.__vp.add(this.__vv);
        this.__vp.show()
    }
    if (this.__vq.exclude(), this.__vu.exclude(), this.show(), this.setVisibility(i), new qx.util.DeferredCall(function() {
            this.setVisibility(n);
            this.centerPosition();
            this.bringToFront()
        }, this).schedule(), r == 0) {
        this.__vG(null, webfrontend.gui.monetization.WaitingWindow.buyBlocker.IllegalAmount);
        return
    }
    y = [t.p[0].i];
    p = [r];
    ClientLib.Data.MainData.GetInstance().get_Inventory().BuyItemsOFB(y, p, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this.__vG), null)
}

function openClaimRewardItems(t, r, u) {
    var f, e, o;
    for (this.__vD(), f = [], e = 0; e < r.length; e++) o = ClientLib.Base.ItemCategories.GetItemById(r[e]), o != null && f.push(o);
    f.length > 0 && (this.__vK(f), this.__vm.setValue(this.tr(l)), this.__vn.setValue(this.tr(l)), this.__vo.setValue(this.tr(nr, f.length)), this.__vr.exclude(), this.__vs.show(), this.__vt.setValue(this.tr(l)), this.__vq.exclude(), this.__vu.exclude(), this.show(), this.setVisibility(i), new qx.util.DeferredCall(function() {
        this.setVisibility(n);
        this.centerPosition();
        this.bringToFront()
    }, this).schedule());
    f.length > 0 ? ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(tr, {
        s: t,
        c: u
    }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this.__vI), null) : this.__vI(null, {
        r: webfrontend.gui.monetization.WaitingWindow.claimBlocker.Invalid
    })
}

function initVisibility anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_visibility !== undefined) {
        old = this.$$runtime_visibility;
    } else if (this.$$user_visibility !== undefined) {
        old = this.$$user_visibility;
    } else if (this.$$useinit_visibility) {
        old = this.$$init_visibility;
    }
    var computed;
    if (this.$$runtime_visibility !== undefined) {
        computed = this.$$runtime_visibility;
    } else if (this.$$user_visibility !== undefined) {
        computed = this.$$user_visibility;
    } else if (this.$$useinit_visibility) {
        computed = this.$$init_visibility;
    } else {
        computed = this.$$init_visibility;
        this.$$useinit_visibility = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyVisibility(computed, old, "visibility", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeVisibility')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeVisibility', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeVisibilityAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeVisibilityAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
        });
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}