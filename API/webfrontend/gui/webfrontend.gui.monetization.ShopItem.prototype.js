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
    var h = ClientLib.Data.MainData.GetInstance().get_Inventory(),
        n = h.GetItemCount(this._currentObject.i),
        r = ClientLib.Data.MainData.GetInstance().get_Player().GetSupplyPointCount(),
        t, i, e;
    if (this._lblOwn.isVisible() && this._lblOwn.setValue(this.tr(u, n)), t = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this._parentTab.getCurrentCityId()), t != null && t.get_IsGhostMode()) {
        this._btnUse.setEnabled(!1);
        this._spinAmountUse.setEnabled(!1);
        this._btnUse.setToolTipText(this.tr(ti));
        return
    }
    if (i = this._currentObject.m <= r, this._lblSupplyPoints.setTextColor(i ? c : o), n > 0)
        if (e = ClientLib.Data.MainData.GetInstance().get_Player().get_Level(), e >= this._currentObject.t) i ? (this._btnUse.setEnabled(!0), this._spinAmountUse.setEnabled(!0), this._spinAmountUse.setMinimum(1), this._spinAmountUse.setMaximum(Math.min(n, Math.floor(r / this._currentObject.m))), this._btnUse.setToolTipText(this.tr(et))) : (this._btnUse.setEnabled(!1), this._spinAmountUse.setEnabled(!1), this._btnUse.setToolTipText(this.tr(w)));
        else {
            var l = ClientLib.Data.MainData.GetInstance().get_Player().get_Faction(),
                s = ClientLib.Res.ResMain.GetInstance().GetPlayerTitleByLevel(l, this._currentObject.t),
                a = s != null ? s.dn : f;
            this._btnUse.setEnabled(!1);
            this._spinAmountUse.setEnabled(!1);
            this._btnUse.setToolTipText(this.tr(fi, a, this._currentObject.t))
        }
    else this._btnUse.setEnabled(!1), this._spinAmountUse.setEnabled(!1), this._btnUse.setToolTipText(this.tr(st))
}

function resetSpinner() {
    this._spinAmountBuy != null && this._spinAmountBuy.setValue(1);
    this._spinAmountUse != null && this._spinAmountUse.setValue(1);
    this._lblSupplyPointsSum != null && this._lblSupplyPointsSum.setValue(i + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(this._currentObject.m));
    this._lblFundsSum != null && this._lblFundsSum.setValue(i + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(ClientLib.Data.MainData.GetInstance().get_ShopCatalog().PriceFromItemById(this._currentObject.i)))
}

function checkAdd() {
    var t = ClientLib.Data.MainData.GetInstance().get_Inventory().get_SpendableFunds(),
        n = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().PriceFromItemById(this._currentObject.i),
        u = n <= t,
        e = ClientLib.Data.MainData.GetInstance().get_Player().get_IsSubstituted(),
        s = webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SUBSTITUTIONALLOWUSEFUNDS),
        i;
    if (n < 0) this._btnAdd.setEnabled(!1), this._spinAmountBuy.setEnabled(!1), this._btnAdd.setToolTipText(this.tr(tt)), this._showAddSection(!1, !0), this._imgRank.hide();
    else {
        if (this._showAddSection(!0), this._imgRank.show(), u)
            if (i = ClientLib.Data.MainData.GetInstance().get_Player().get_Level(), i >= this._currentObject.t) this._lblFunds.resetTextColor(), this._btnAdd.setEnabled(!0), this._spinAmountBuy.setMinimum(1), this._spinAmountBuy.setMaximum(Math.floor(t / n)), this._spinAmountBuy.setEnabled(!0), this._btnAdd.setToolTipText(this.tr(ri));
            else {
                var h = ClientLib.Data.MainData.GetInstance().get_Player().get_Faction(),
                    r = ClientLib.Res.ResMain.GetInstance().GetPlayerTitleByLevel(h, this._currentObject.t),
                    c = r != null ? r.dn : f;
                this._lblFunds.resetTextColor();
                this._btnAdd.setEnabled(!1);
                this._spinAmountBuy.setEnabled(!1);
                this._btnAdd.setToolTipText(this.tr(it, c, this._currentObject.t))
            }
        else this._lblFunds.setTextColor(o), this._btnAdd.setEnabled(!1), this._spinAmountBuy.setEnabled(!1), this._btnAdd.setToolTipText(this.tr(bt));
        e && !s && (this._lblFunds.resetTextColor(), this._btnAdd.setEnabled(!1), this._spinAmountBuy.setEnabled(!1), this._btnAdd.setToolTipText(this.tr(y)))
    }
}

function setActive(n) {
    this.setEnabled(n);
    n ? this.resetToolTipText() : this.setToolTipText(this.tr(g));
    this._btnUse.setEnabled(n);
    this._btnAdd.setEnabled(n);
    this._spinAmountBuy.setEnabled(n);
    this._spinAmountUse.setEnabled(n);
    n && (this.checkAdd(), this.checkUse())
}

function updateContent(t) {
    var f, e, o, r;
    if (this._currentObject != t) {
        this._currentObject = t;
        var h = ClientLib.Data.MainData.GetInstance().get_Inventory(),
            c = h.GetItemCount(t.i),
            a = webfrontend.gui.Util.getIconToolTip(t.c),
            i = webfrontend.gui.Util.generateItemInfos(t);
        this._lblName.setValue(i.bn);
        this._lblAmount.setValue(l + i.value);
        this._imgResourceIcon.setSource(i.resourceIcon);
        this._imgResourceIcon.setToolTipText(a);
        this._imgResource.setSource(s + t.ic);
        this._lblSupplyPoints.setValue(t.m.toString());
        this._showUseSection(t.m > 0 ? !0 : !1);
        this._lblOwn.setValue(this.tr(u, c));
        this.resetSpinner();
        f = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().PriceFromItemById(t.i);
        this._lblFunds.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(f, !0, !1));
        e = this._currentObject.c != ClientLib.Base.EItemCategory.CommandPointGain && this._currentObject.c != ClientLib.Base.EItemCategory.CommandPointCapacityBuff && this._currentObject.c != ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity && this._currentObject.c != ClientLib.Base.EItemCategory.BonusPackageStorage;
        e ? (this._imgRank.isVisible() || this._imgRank.show(), o = ClientLib.Res.ResMain.GetInstance().GetPlayerTitleByLevel(ClientLib.Data.MainData.GetInstance().get_Player().get_Faction(), t.t), this._imgRank.setSource(s + o.ic)) : this._imgRank.exclude();
        this._contHeadline.setVisibility(n);
        r = !0;
        switch (t.c) {
            case ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity:
            case ClientLib.Base.EItemCategory.CommandPointCapacityBuff:
            case ClientLib.Base.EItemCategory.BonusPackageStorage:
                this._lblAmount.setValue(this.tr(k, i.value, i.duration));
                this._lblOwn.exclude();
                r = !1;
                break;
            default:
                this._lblAmount.setValue(this.tr(kt, i.value))
        }
        this._showUseSection(r);
        this.checkUse();
        this.checkAdd()
    }
}

function _showUseSection(i) {
    this._btnUse.setVisibility(i ? t : n);
    this._spinAmountUse.setVisibility(i ? t : n);
    this._lblSupplyPoints.setVisibility(i ? t : n);
    this._lblXUse.setVisibility(i ? t : n);
    this._iconUseSupplyPoints.setVisibility(i ? t : n);
    this._lblSupplyPointsSum.setVisibility(i ? t : n)
}

function _showAddSection(i, r) {
    r = r || !1;
    r || this._btnAdd.setVisibility(i ? t : n);
    this._spinAmountBuy.setVisibility(i ? t : n);
    this._lblFunds.setVisibility(i ? t : n);
    this._lblXBuy.setVisibility(i ? t : n);
    this._iconFunds.setVisibility(i ? t : n);
    this._lblFundsSum.setVisibility(i ? t : n)
}

function _onTick() {
    this.checkUse()
}

function _onPlayerLevelChange() {
    this.checkUse();
    this.checkAdd()
}

function _onInventoryChange() {
    this.checkUse();
    this.checkAdd()
}

function _createLayout() {
    var n = webfrontend.gui.layout.Loader.getInstance(),
        t = n.getLayout(ht, this),
        i = h,
        u;
    this._contHeadline = n.getElement(t, i, ft);
    this._imgResource = n.getElement(t, i, vt);
    this._imgRank = n.getElement(t, i, ui);
    u = n.getElement(t, i, dt);
    this._imgResourceIcon = n.getElement(t, i, p);
    this._iconFunds = n.getElement(t, i, at);
    this._iconUseSupplyPoints = n.getElement(t, i, wt);
    this._btnAdd = n.getElement(t, i, a);
    this._btnUse = n.getElement(t, i, gt);
    this._lblFunds = n.getElement(t, i, nt);
    this._lblName = n.getElement(t, i, ot);
    this._lblAmount = n.getElement(t, i, d);
    this._lblOwn = n.getElement(t, i, rt);
    this._lblXBuy = n.getElement(t, i, yt);
    this._lblXUse = n.getElement(t, i, ii);
    this._lblSupplyPoints = n.getElement(t, i, pt);
    this._lblSupplyPointsSum = n.getElement(t, i, v);
    this._lblFundsSum = n.getElement(t, i, lt);
    this._spinAmountBuy = n.getElement(t, i, b);
    this._spinAmountUse = n.getElement(t, i, ni);
    u.setToolTip(this._toolTip);
    u.addListener(ct, this._onInfoIconMouseOver, this);
    this._btnAdd.addListener(e, this._onClickAdd, this);
    this._btnUse.addListener(e, this._onClickUse, this);
    this._spinAmountBuy.addListener(r, this._onSpinAmountBuyChange, this);
    this._spinAmountUse.addListener(r, this._onSpinAmountUseChange, this)
}

function _onClickAdd() {
    var e = ClientLib.Data.MainData.GetInstance().get_Inventory().get_SpendableFunds(),
        i = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().PriceFromItemById(this._currentObject.i),
        n = Math.max(1, parseInt(this._spinAmountBuy.getValue())),
        t, r, u, f;
    if (e < i * n) webfrontend.phe.cnc.Util.openOfferWall();
    else {
        if (t = parseInt(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_QUICKBUYWARNINGTHRESHOLD), 10), r = this._currentObject.c == ClientLib.Base.EItemCategory.CommandPointGain || this._currentObject.c == ClientLib.Base.EItemCategory.CommandPointCapacityBuff || this._currentObject.c == ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity || this._currentObject.c == ClientLib.Base.EItemCategory.BonusPackageStorage, !r && this._currentObject.t < ClientLib.Data.MainData.GetInstance().get_Player().get_Level()) {
            u = new webfrontend.gui.widgets.confirmationWidgets.BuyLowerRankItemConfirmationWidget;
            u.showLowerRankItemWarning(this, this._buyItem, this._currentObject.i);
            return
        }
        if (t != -1 && i * n > t) {
            f = webfrontend.gui.Util.generateItemInfos(this._currentObject);
            this._confirmationWidget.showQuickBuyWarning(this, this._onWarningResult, f.dn, this._currentObject.i, i * n, Math.abs(t), n);
            return
        }
        this._buyItem(this._currentObject.i, n)
    }
}

function _onClickUse() {
    var n, t;
    if (this._currentObject.c != ClientLib.Base.EItemCategory.CommandPointGain && this._currentObject.t < ClientLib.Data.MainData.GetInstance().get_Player().get_Level() && (n = webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SHOWLOWERRANKWARNING), n)) {
        t = new webfrontend.gui.widgets.confirmationWidgets.LowerRankItemConfirmationWidget;
        t.showLowerRankItemWarning(this, this._useItem, this._currentObject);
        return
    }
    this._useItem(this._currentObject)
}

function _useItem(n) {
    var t = Math.max(1, parseInt(this._spinAmountUse.getValue()));
    this._waitingWindow.openUseItem(n.i, this._parentTab.getCurrentCityId(), t)
}

function _buyItem(n) {
    var u = !0,
        i = Math.max(1, parseInt(this._spinAmountBuy.getValue())),
        o, r;
    if (webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SHOWP4FWARNING)) {
        var f = ClientLib.Data.MainData.GetInstance(),
            s = f.get_Inventory(),
            h = f.get_ShopCatalog(),
            e = -1,
            t = h.PriceFromItemById(n);
        t = t * i;
        t && (e = s.FundsTypesUsedByCost(t));
        e == ClientLib.Data.Inventory.EFundsTypesUsed.EP4FFunds && (u = !1, o = new webfrontend.gui.CurrencyChangeInfoPopup(this.__wh, {
            form: this,
            itemId: n,
            amount: i
        }), o.enable(), r = ClientLib.Config.Main.GetInstance(), r.SetConfig(ClientLib.Config.Main.CONFIG_SHOWP4FWARNING, !1), r.SaveToDB())
    }
    u && this.__wh.call({
        form: this,
        itemId: n,
        amount: i
    })
}

function _onWarningResult(n, t) {
    n && this._buyItem(t)
}

function _onInfoIconMouseOver() {
    this._toolTip.update(this._currentObject, this._parentTab.getCurrentCityId())
}

function _onSpinAmountBuyChange() {
    var n = Math.max(1, parseInt(this._spinAmountBuy.getValue())),
        t = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().PriceFromItemById(this._currentObject.i),
        r = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(t * n);
    this._lblFundsSum.setValue(i + r)
}

function _onSpinAmountUseChange() {
    var n = Math.max(1, parseInt(this._spinAmountUse.getValue())),
        t = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(n * this._currentObject.m);
    this._lblSupplyPointsSum.setValue(i + t)
}