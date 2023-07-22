function _afterAddChild(n) {
    this.fireNonBubblingEvent(t, qx.event.type.Data, [n])
}

function _afterRemoveChild(n) {
    this.fireNonBubblingEvent(i, qx.event.type.Data, [n])
}

function add(n, t) {
    n.getLayoutParent() == this && qx.lang.Array.remove(this.__kM, n);
    this.__kM ? this.__kM.push(n) : this.__kM = [n];
    this.__kO(n, t)
}

function addAt(n, t, i) {
    this.__kM || (this.__kM = []);
    n.getLayoutParent() == this && qx.lang.Array.remove(this.__kM, n);
    var r = this.__kM[t];
    r === n && n.setLayoutProperties(i);
    r ? qx.lang.Array.insertBefore(this.__kM, n, r) : this.__kM.push(n);
    this.__kO(n, i)
}

function addBefore(n, t, i) {
    n != t && (this.__kM || (this.__kM = []), n.getLayoutParent() == this && qx.lang.Array.remove(this.__kM, n), qx.lang.Array.insertBefore(this.__kM, n, t), this.__kO(n, i))
}

function addAfter(n, t, i) {
    n != t && (this.__kM || (this.__kM = []), n.getLayoutParent() == this && qx.lang.Array.remove(this.__kM, n), qx.lang.Array.insertAfter(this.__kM, n, t), this.__kO(n, i))
}

function remove(n) {
    if (!this.__kM) throw new Error(pt);
    qx.lang.Array.remove(this.__kM, n);
    this.__kP(n)
}

function removeAt(n) {
    if (!this.__kM) throw new Error(pt);
    var t = this.__kM[n];
    return qx.lang.Array.removeAt(this.__kM, n), this.__kP(t), t
}

function setLayout(n) {
    this.__kJ && this.__kJ.connectToWidget(null);
    n && n.connectToWidget(this);
    this.__kJ = n;
    qx.ui.core.queue.Layout.add(this)
}

function getLayout() {
    return this.__kJ
}

function initFocusable anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_focusable !== undefined) {
        old = this.$$runtime_focusable;
    } else if (this.$$user_focusable !== undefined) {
        old = this.$$user_focusable;
    } else if (this.$$useinit_focusable) {
        old = this.$$init_focusable;
    }
    var computed;
    if (this.$$runtime_focusable !== undefined) {
        computed = this.$$runtime_focusable;
    } else if (this.$$user_focusable !== undefined) {
        computed = this.$$user_focusable;
    } else if (this.$$useinit_focusable) {
        computed = this.$$init_focusable;
    } else {
        computed = this.$$init_focusable;
        this.$$useinit_focusable = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyFocusable(computed, old, "focusable", "init");

    function fire() {
        var tracker = {};
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}

function initSelectable anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_selectable !== undefined) {
        old = this.$$runtime_selectable;
    } else if (this.$$user_selectable !== undefined) {
        old = this.$$user_selectable;
    } else if (this.$$useinit_selectable) {
        old = this.$$init_selectable;
    }
    var computed;
    if (this.$$runtime_selectable !== undefined) {
        computed = this.$$runtime_selectable;
    } else if (this.$$user_selectable !== undefined) {
        computed = this.$$user_selectable;
    } else if (this.$$useinit_selectable) {
        computed = this.$$init_selectable;
    } else {
        computed = this.$$init_selectable;
        this.$$useinit_selectable = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applySelectable(computed, old, "selectable", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeSelectable')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeSelectable', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeSelectableAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeSelectableAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initNativeContextMenu anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_nativeContextMenu !== undefined) {
        old = this.$$runtime_nativeContextMenu;
    } else if (this.$$user_nativeContextMenu !== undefined) {
        old = this.$$user_nativeContextMenu;
    } else if (this.$$theme_nativeContextMenu !== undefined) {
        old = this.$$theme_nativeContextMenu;
    } else if (this.$$useinit_nativeContextMenu) {
        old = this.$$init_nativeContextMenu;
    }
    var computed;
    if (this.$$runtime_nativeContextMenu !== undefined) {
        computed = this.$$runtime_nativeContextMenu;
    } else if (this.$$user_nativeContextMenu !== undefined) {
        computed = this.$$user_nativeContextMenu;
    } else if (this.$$theme_nativeContextMenu !== undefined) {
        computed = this.$$theme_nativeContextMenu;
    } else if (this.$$useinit_nativeContextMenu) {
        computed = this.$$init_nativeContextMenu;
    } else {
        computed = this.$$init_nativeContextMenu;
        this.$$useinit_nativeContextMenu = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyNativeContextMenu(computed, old, "nativeContextMenu", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeNativeContextMenu')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeNativeContextMenu', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeNativeContextMenuAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeNativeContextMenuAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function refreshTextColor anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_textColor;
    if (this.$$runtime_textColor !== undefined) {
        old = this.$$runtime_textColor;
    }
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_textColor !== undefined) {
        computed = this.$$runtime_textColor;
    } else if (this.$$user_textColor !== undefined) {
        computed = this.$$user_textColor;
    } else if (this.$$theme_textColor !== undefined) {
        computed = this.$$theme_textColor;
    } else if (this.$$useinit_textColor) {
        delete this.$$useinit_textColor;
        computed = this.$$init_textColor;
    }
    if (computed === undefined || computed === inherit) {
        computed = value;
        if ((computed === undefined || computed === inherit) && this.$$init_textColor !== undefined && this.$$init_textColor !== inherit) {
            computed = this.$$init_textColor;
            this.$$useinit_textColor = true;
        } else {
            delete this.$$useinit_textColor;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_textColor;
    } else if (computed === undefined) delete this.$$inherit_textColor;
    else this.$$inherit_textColor = computed;
    var backup = computed;
    if (old === undefined) old = null;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyTextColor(computed, old, "textColor", "refresh");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeTextColor')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeTextColor', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeTextColorAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeTextColorAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
        });
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshTextColor) a[i].refreshTextColor(backup);
            }
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}

function refreshFont anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_font;
    if (this.$$runtime_font !== undefined) {
        old = this.$$runtime_font;
    }
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_font !== undefined) {
        computed = this.$$runtime_font;
    } else if (this.$$user_font !== undefined) {
        computed = this.$$user_font;
    } else if (this.$$theme_font !== undefined) {
        computed = this.$$theme_font;
    } else if (this.$$useinit_font) {
        delete this.$$useinit_font;
        computed = this.$$init_font;
    }
    if (computed === undefined || computed === inherit) {
        computed = value;
        if ((computed === undefined || computed === inherit) && this.$$init_font !== undefined && this.$$init_font !== inherit) {
            computed = this.$$init_font;
            this.$$useinit_font = true;
        } else {
            delete this.$$useinit_font;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_font;
    } else if (computed === undefined) delete this.$$inherit_font;
    else this.$$inherit_font = computed;
    var backup = computed;
    if (old === undefined) old = null;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyFont(computed, old, "font", "refresh");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeFont')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeFont', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeFontAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeFontAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
        });
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshFont) a[i].refreshFont(backup);
            }
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}

function refreshCursor anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_cursor;
    if (this.$$runtime_cursor !== undefined) {
        old = this.$$runtime_cursor;
    }
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_cursor !== undefined) {
        computed = this.$$runtime_cursor;
    } else if (this.$$user_cursor !== undefined) {
        computed = this.$$user_cursor;
    } else if (this.$$theme_cursor !== undefined) {
        computed = this.$$theme_cursor;
    } else if (this.$$useinit_cursor) {
        delete this.$$useinit_cursor;
        computed = this.$$init_cursor;
    }
    if (computed === undefined || computed === inherit) {
        computed = value;
        if ((computed === undefined || computed === inherit) && this.$$init_cursor !== undefined && this.$$init_cursor !== inherit) {
            computed = this.$$init_cursor;
            this.$$useinit_cursor = true;
        } else {
            delete this.$$useinit_cursor;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_cursor;
    } else if (computed === undefined) delete this.$$inherit_cursor;
    else this.$$inherit_cursor = computed;
    var backup = computed;
    if (old === undefined) old = this.$$init_cursor;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyCursor(computed, old, "cursor", "refresh");

    function fire() {
        var tracker = {};
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshCursor) a[i].refreshCursor(backup);
            }
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}

function refreshEnabled anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_enabled;
    if (this.$$runtime_enabled !== undefined) {
        old = this.$$runtime_enabled;
    }
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_enabled !== undefined) {
        computed = this.$$runtime_enabled;
    } else if (this.$$user_enabled !== undefined) {
        computed = this.$$user_enabled;
    } else if (this.$$useinit_enabled) {
        delete this.$$useinit_enabled;
        computed = this.$$init_enabled;
    }
    if (computed === undefined || computed === inherit) {
        computed = value;
        if ((computed === undefined || computed === inherit) && this.$$init_enabled !== undefined && this.$$init_enabled !== inherit) {
            computed = this.$$init_enabled;
            this.$$useinit_enabled = true;
        } else {
            delete this.$$useinit_enabled;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_enabled;
    } else if (computed === undefined) delete this.$$inherit_enabled;
    else this.$$inherit_enabled = computed;
    var backup = computed;
    if (old === undefined) old = this.$$init_enabled;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyEnabled(computed, old, "enabled", "refresh");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeEnabled')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeEnabled', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeEnabledAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeEnabledAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
        });
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshEnabled) a[i].refreshEnabled(backup);
            }
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}

function resetWidth anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_width !== undefined) {
        old = this.$$runtime_width;
    } else if (this.$$user_width !== undefined) {
        old = this.$$user_width;
    } else if (this.$$theme_width !== undefined) {
        old = this.$$theme_width;
    } else if (this.$$useinit_width) {
        old = this.$$init_width;
    }
    if (this.$$user_width === undefined) return;
    var computed;
    if (this.$$runtime_width !== undefined) {
        computed = this.$$runtime_width;
        delete this.$$user_width;
    } else if (this.$$user_width !== undefined) {
        delete this.$$user_width;
        if (this.$$runtime_width !== undefined) computed = this.$$runtime_width;
        if (this.$$theme_width !== undefined) computed = this.$$theme_width;
        else if (this.$$init_width !== undefined) {
            computed = this.$$init_width;
            this.$$useinit_width = true;
        }
    } else if (this.$$theme_width !== undefined) {} else if (this.$$useinit_width) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_width;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "width", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeWidth')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeWidth', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeWidthAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeWidthAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetHeight anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_height !== undefined) {
        old = this.$$runtime_height;
    } else if (this.$$user_height !== undefined) {
        old = this.$$user_height;
    } else if (this.$$theme_height !== undefined) {
        old = this.$$theme_height;
    } else if (this.$$useinit_height) {
        old = this.$$init_height;
    }
    if (this.$$user_height === undefined) return;
    var computed;
    if (this.$$runtime_height !== undefined) {
        computed = this.$$runtime_height;
        delete this.$$user_height;
    } else if (this.$$user_height !== undefined) {
        delete this.$$user_height;
        if (this.$$runtime_height !== undefined) computed = this.$$runtime_height;
        if (this.$$theme_height !== undefined) computed = this.$$theme_height;
        else if (this.$$init_height !== undefined) {
            computed = this.$$init_height;
            this.$$useinit_height = true;
        }
    } else if (this.$$theme_height !== undefined) {} else if (this.$$useinit_height) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_height;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "height", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeHeight')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeHeight', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeHeightAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeHeightAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function checkUse() {
    var n = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetItemFromSingleItemProduct(this._currentProduct),
        f = ClientLib.Data.MainData.GetInstance().get_Player().GetSupplyPointCount(),
        e, t, r, u, s;
    if (n != null) {
        if (e = ClientLib.Data.MainData.GetInstance().get_Inventory(), t = e.GetItemCount(n.i), this._lblOwn.isVisible() && this._lblOwn.setValue(this.tr(o, t)), r = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this._parentTab.getCurrentCityId()), r != null && r.get_IsGhostMode()) {
            this._btnUse.setEnabled(!1);
            this._spinAmountUse.setEnabled(!1);
            this._btnUse.setToolTipText(this.tr(oi));
            return
        }
        if (u = n.m <= f, this._lblSupplyPoints.setTextColor(u ? y : c), t > 0)
            if (s = ClientLib.Data.MainData.GetInstance().get_Player().get_Level(), s >= n.t) u ? (this._btnUse.setEnabled(!0), this._btnUse.setToolTipText(this.tr(ht)), this._spinAmountUse.setEnabled(!0), this._spinAmountUse.setMinimum(1), this._spinAmountUse.setMaximum(Math.min(t, Math.floor(f / n.m)))) : (this._btnUse.setEnabled(!1), this._btnUse.setToolTipText(this.tr(k)), this._spinAmountUse.setEnabled(!1));
            else {
                var l = ClientLib.Data.MainData.GetInstance().get_Player().get_Faction(),
                    h = ClientLib.Res.ResMain.GetInstance().GetPlayerTitleByLevel(l, n.t),
                    a = h != null ? h.dn : i;
                this._btnUse.setEnabled(!1);
                this._btnUse.setToolTipText(this.tr(fi, a, n.t));
                this._spinAmountUse.setEnabled(!1)
            }
        else this._btnUse.setEnabled(!1), this._btnUse.setToolTipText(this.tr(lt)), this._spinAmountUse.setEnabled(!1)
    }
}

function resetSpinner() {
    this._spinAmountBuy != null && this._spinAmountBuy.setValue(1);
    this._spinAmountUse != null && this._spinAmountUse.setValue(1);
    var n = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetItemFromSingleItemProduct(this._currentProduct);
    this._lblSupplyPointsSum != null && this._lblSupplyPointsSum.setValue(r + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(n.m));
    this._lblFundsSum != null && this._lblFundsSum.setValue(r + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(ClientLib.Data.MainData.GetInstance().get_ShopCatalog().PriceFromItemById(n.i)))
}

function checkAdd() {
    var n = ClientLib.Data.MainData.GetInstance().get_Inventory().get_SpendableFunds(),
        t = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetPriceFromProduct(this._currentProduct),
        r = ClientLib.Data.MainData.GetInstance().get_Player().get_IsSubstituted(),
        u = webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SUBSTITUTIONALLOWUSEFUNDS),
        f = t <= n;
    f ? (this._lblFunds.resetTextColor(), this._btnAdd.setEnabled(!0), this._btnAdd.resetToolTipText(), this._btnAdd.setToolTipText(this.tr(hi)), this._spinAmountBuy.setMinimum(1), this._spinAmountBuy.setMaximum(Math.floor(n / t)), this._spinAmountBuy.setEnabled(!0)) : (this._lblFunds.setTextColor(c), this._btnAdd.setEnabled(!1), this._btnAdd.setToolTipText(this.tr(ti)), this._spinAmountBuy.setEnabled(!1));
    r && !u && (this._lblFunds.resetTextColor(), this._btnAdd.setEnabled(!1), this._btnAdd.setToolTipText(this.tr(b)), this._spinAmountBuy.setEnabled(!1));
    var e = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetItemFromSingleItemProduct(this._currentProduct),
        i = ClientLib.Data.MainData.GetInstance().get_Player(),
        o = i.get_Level(),
        s = i.get_NextTitle();
    e.c == ClientLib.Base.EItemCategory.CommandPointGain && o == 1 && (this._btnAdd.setEnabled(!1), this._btnAdd.setToolTipText(this.tr(wt, s.dn)), this._spinAmountBuy.setEnabled(!1))
}

function updateContent(r) {
    var p, v;
    if (this._currentProduct != r) {
        this._currentProduct = r;
        var u = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetItemFromSingleItemProduct(r),
            w = ClientLib.Data.MainData.GetInstance().get_Inventory(),
            b = w.GetItemCount(u.i),
            k = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().PriceFromItemById(u.i),
            s = webfrontend.gui.Util.generateItemInfos(u, 1),
            d = webfrontend.gui.Util.getIconToolTip(u.c);
        this._lblFunds.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(k, !0, !1));
        this._lblName.setValue(s.bn);
        this._imgResourceIcon.setSource(s.resourceIcon);
        this._imgResourceIcon.setToolTipText(d);
        this._lblOwn.setValue(this.tr(o, b.toString()));
        this._lblSupplyPoints.setValue(u.m.toString());
        this._showUseSection(u.m > 0 ? !0 : !1);
        this.resetSpinner();
        this._imgResource.setSource(ri + u.ic);
        var nt = ClientLib.Data.MainData.GetInstance().get_Time().GetJSStepTimeGetTime(ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep()),
            y = r.ExpirationDate - nt,
            c = !0;
        if (r.SpecialOfferSaving > 0 && r.ExpirationDate > 0 ? this._lblHeadline.setValue(this.tr(gt, r.SpecialOfferSaving, webfrontend.phe.cnc.Util.getShortTimespanString(y, !0, !1, !0))) : r.ExpirationDate > 0 ? this._lblHeadline.setValue(this.tr(a, webfrontend.phe.cnc.Util.getShortTimespanString(y, !0, !1, !0))) : r.SpecialOfferSaving > 0 ? this._lblHeadline.setValue(this.tr(g, r.SpecialOfferSaving)) : c = !1, c) {
            p = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetCustomizationColorTagFromProduct(r);
            switch (p) {
                case ClientLib.Data.EShopProductCustomizationColorTag.Timelimited:
                    this._contHeadline.setDecorator(f);
                    break;
                case ClientLib.Data.EShopProductCustomizationColorTag.TopSeller:
                    this._contHeadline.setDecorator(l);
                    break;
                case ClientLib.Data.EShopProductCustomizationColorTag.BestValue:
                    this._contHeadline.setDecorator(e);
                    break;
                case ClientLib.Data.EShopProductCustomizationColorTag.SpecialOffer:
                    this._contHeadline.setDecorator(h)
            }
        }
        this._contHeadline.setVisibility(c ? n : t);
        v = !0;
        switch (u.c) {
            case ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity:
            case ClientLib.Base.EItemCategory.CommandPointCapacityBuff:
            case ClientLib.Base.EItemCategory.BonusPackageStorage:
                this._lblOwn.exclude();
                this._lblAmount.setValue(this.tr(tt, s.value, s.duration));
                v = !1;
                break;
            default:
                this._lblAmount.setValue(this.tr(ut, s.value))
        }
        this._showUseSection(v);
        switch (r.cct) {
            case i:
                this._contHeadline.setDecorator(f);
                break;
            case i:
                this._contHeadline.setDecorator(l);
                break;
            case i:
                this._contHeadline.setDecorator(e);
                break;
            case i:
                this._contHeadline.setDecorator(h)
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
        t = n.getLayout(at, this),
        i = ii,
        r;
    this._contHeadline = n.getElement(t, i, st);
    this._imgResource = n.getElement(t, i, bt);
    r = n.getElement(t, i, ui);
    this._iconFunds = n.getElement(t, i, pt);
    this._imgResourceIcon = n.getElement(t, i, v);
    this._iconUseSupplyPoints = n.getElement(t, i, ni);
    this._btnAdd = n.getElement(t, i, p);
    this._btnUse = n.getElement(t, i, nt);
    this._lblHeadline = n.getElement(t, i, ft);
    this._lblFunds = n.getElement(t, i, rt);
    this._lblName = n.getElement(t, i, ct);
    this._lblAmount = n.getElement(t, i, it);
    this._lblOwn = n.getElement(t, i, et);
    this._lblSupplyPoints = n.getElement(t, i, dt);
    this._lblXBuy = n.getElement(t, i, kt);
    this._lblXUse = n.getElement(t, i, si);
    this._lblSupplyPointsSum = n.getElement(t, i, w);
    this._lblFundsSum = n.getElement(t, i, yt);
    this._spinAmountBuy = n.getElement(t, i, d);
    this._spinAmountUse = n.getElement(t, i, ei);
    r.setToolTip(this._toolTip);
    r.addListener(vt, this._onInfoIconMouseOver, this);
    this._btnAdd.addListener(s, this._onClickAdd, this);
    this._btnUse.addListener(s, this._onClickUse, this);
    this._spinAmountBuy.addListener(u, this._onSpinAmountBuyChange, this);
    this._spinAmountUse.addListener(u, this._onSpinAmountUseChange, this)
}

function _onClickAdd() {
    var r = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetItemFromSingleItemProduct(this._currentProduct),
        n = 1,
        u, t, i, f;
    this._spinAmountBuy != null && (n = Math.max(1, parseInt(this._spinAmountBuy.getValue())));
    u = ClientLib.Data.MainData.GetInstance().get_Inventory().get_SpendableFunds();
    t = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().PriceFromItemById(r.i);
    u < t * n ? webfrontend.phe.cnc.Util.openOfferWall() : (i = parseInt(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_QUICKBUYWARNINGTHRESHOLD), 10), i != -1 && t * n > i ? (f = webfrontend.gui.Util.generateItemInfos(r, 1), this._confirmationWidget.showQuickBuyWarning(this, this._onWarningResult, f.dn, r.i, t * n, Math.abs(i), n)) : this._buyItem())
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

function _useItem(n) {
    var t = Math.max(1, parseInt(this._spinAmountUse.getValue()));
    this._waitingWindow.openUseItem(n.i, this._parentTab.getCurrentCityId(), t)
}

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
    var n = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetItemFromSingleItemProduct(this._currentProduct);
    this._toolTip.update(n, this._parentTab.getCurrentCityId())
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