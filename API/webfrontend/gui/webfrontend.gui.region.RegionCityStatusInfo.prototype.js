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

function setThemedPaddingRight anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_paddingRight !== undefined) {
            old = this.$$runtime_paddingRight;
        } else if (this.$$user_paddingRight !== undefined) {
            old = this.$$user_paddingRight;
        } else if (this.$$theme_paddingRight !== undefined) {
            old = this.$$theme_paddingRight;
        } else if (this.$$useinit_paddingRight) {
            old = this.$$init_paddingRight;
        }
        if (equ.call(this, this.$$theme_paddingRight, value)) return value;
        var computed;
        if (this.$$runtime_paddingRight !== undefined) {
            computed = this.$$runtime_paddingRight;
            this.$$theme_paddingRight = value;
        } else if (this.$$user_paddingRight !== undefined) {
            computed = this.$$user_paddingRight;
            this.$$theme_paddingRight = value;
        } else if (this.$$theme_paddingRight !== undefined) {
            computed = this.$$theme_paddingRight = value;
        } else if (this.$$useinit_paddingRight) {
            delete this.$$useinit_paddingRight;
            computed = this.$$theme_paddingRight = value;
        } else {
            computed = this.$$theme_paddingRight = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_paddingRight;
        var self = this;
        var promise;
        promise = this._applyPadding(computed, old, "paddingRight", "setThemed");

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
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function setObject(n) {
    this._selectedObject = n;
    this._cntEndgameRevengeWarning.setVisibility(this._selectedObject.get_VisObjectType() === ClientLib.Vis.VisObject.EObjectType.RegionCityType && this._selectedObject.get_IsEndgameRevengeTarget() ? uf : nu);
    this.onCitiesChange();
    this.onTick()
}

function _setAttackCosts() {
    var p = ClientLib.Data.MainData.GetInstance().get_Player(),
        r = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(),
        i = this._selectedObject.get_PlayerFaction(),
        d = Math.floor(p.GetCommandPointCount()),
        u = this._selectedObject.get_RawX(),
        f = this._selectedObject.get_RawY(),
        l, v;
    this._selectedObject.get_VisObjectType() === ClientLib.Vis.VisObject.EObjectType.RegionHubCenter && (l = this._selectedObject.GetClosestAttackField(r.get_X(), r.get_Y()), u = l[0], f = l[1]);
    var e = Math.floor(r.CalculateAttackCommandPointCostToCoord(u, f, this._selectedObject.get_PlayerFaction() === ClientLib.Base.EFactionType.GDIFaction || this._selectedObject.get_PlayerFaction() === ClientLib.Base.EFactionType.NODFaction, !1)),
        w = Math.floor(r.CalculateAttackCommandPointCostToCoord(u, f, this._selectedObject.get_PlayerFaction() === ClientLib.Base.EFactionType.GDIFaction || this._selectedObject.get_PlayerFaction() === ClientLib.Base.EFactionType.NODFaction, !0)),
        a = ClientLib.Data.MainData.GetInstance().get_World().CheckAttackBaseRegion(u, f);
    if (a === ClientLib.Data.EAttackBaseResult.FailInsufficientCommandPoints) {
        if (v = p.PredictCommandPointStepAtValue(e), v > 0) {
            var b = ClientLib.Data.MainData.GetInstance().get_Time(),
                g = Math.max(0, b.GetTimeSpan(v) - b.GetServerStep()),
                nt = webfrontend.phe.cnc.Util.getTimespanString(g, !1);
            this._lblAttackDescription.setValue(this.tr(tt, r.get_Name(), nt))
        } else this._lblAttackDescription.setValue(this.tr(ne, r.get_Name()));
        this._lblAttackDescription.setTextColor(o);
        this._lblCommandPointsCurrent.setTextColor(o)
    } else this._lblAttackDescription.setValue(is + webfrontend.phe.cnc.gui.region.Messages.getAttackMessage(a, r) + c), this._lblCommandPointsCurrent.setTextColor(s), this._lblAttackDescription.setTextColor(s);
    this._lblCommandPointsCosts.setValue(w === e ? webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(e).toString() : te + webfrontend.theme.Color.colors[li] + lu + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(w).toString() + cr + ns + webfrontend.theme.Color.colors[fu] + cu + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(e).toString() + ce);
    this._lblCommandPointsCurrent.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(d).toString());
    var k = 0,
        y = 0,
        h = ClientLib.Data.MainData.GetInstance().get_Server().get_UsesRebalancingI(),
        it = ClientLib.Data.MainData.GetInstance().get_World().GetTerritoryTypeByCoordinates(u, f);
    k = h && (i === ClientLib.Base.EFactionType.GDIFaction || i === ClientLib.Base.EFactionType.NODFaction) ? ClientLib.Data.MainData.GetInstance().get_Server().get_PvPCombatCostMinimum() : ClientLib.Data.MainData.GetInstance().get_Server().get_CombatCostMinimum();
    switch (it) {
        case ClientLib.Data.ETerritoryType.Alliance:
        case ClientLib.Data.ETerritoryType.Own:
            this._lblAttackDescriptionType.setValue(this.tr(oi));
            y = h && (i === ClientLib.Base.EFactionType.GDIFaction || i === ClientLib.Base.EFactionType.NODFaction) ? ClientLib.Data.MainData.GetInstance().get_Server().get_PvPCombatCostPerField() : ClientLib.Data.MainData.GetInstance().get_Server().get_CombatCostPerField();
            break;
        default:
            this._lblAttackDescriptionType.setValue(this.tr(to));
            y = h && (i === ClientLib.Base.EFactionType.GDIFaction || i === ClientLib.Base.EFactionType.NODFaction) ? ClientLib.Data.MainData.GetInstance().get_Server().get_PvPCombatCostPerFieldOutsideTerritory() : ClientLib.Data.MainData.GetInstance().get_Server().get_CombatCostPerFieldOutsideTerritory()
    }
    h && (i === ClientLib.Base.EFactionType.GDIFaction || i === ClientLib.Base.EFactionType.NODFaction) && this._lblAttackDescriptionType.setValue(this.tr(su));
    this._lblAttackDescriptionCosts.setValue(this.tr(hr, t + k + n, t + y + n));
    a === ClientLib.Data.EAttackBaseResult.OK ? this._lblAttackDescription.setTextColor(s) : this._lblAttackDescription.setTextColor(o)
}

function _setSupportContainer() {
    var o = this._selectedObject.get_SupportData(),
        i = this._selectedObject.get_SupportWeapon(),
        tt, p;
    if (o !== null && i !== null) {
        var r = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(),
            b = i.i[v],
            s = !1;
        if (!r.get_IsGhostMode() && !r.get_isProtected()) {
            s = !0;
            var u = this._selectedObject.get_SupportWeaponStatus(),
                c = r.get_isAlerted(),
                k = !((u.Status & ClientLib.Vis.Region.ESupportWeaponStatus.OutOfRange) === ClientLib.Vis.Region.ESupportWeaponStatus.OutOfRange),
                a = (u.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Destroyed) === ClientLib.Vis.Region.ESupportWeaponStatus.Destroyed,
                f = (u.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Dedicated) === ClientLib.Vis.Region.ESupportWeaponStatus.Dedicated,
                nt = !0;
            (c || f) && k && !a && (u.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Calibrating) === ClientLib.Vis.Region.ESupportWeaponStatus.Calibrating && (nt = !1);
            this._selectedObject.IsOwnBase() || c || f || (s = !1);
            b = k && !a ? nt ? f ? i.i[d] : c ? i.i[d] : i.i[v] : i.i[ki] : a ? i.i[kt] : i.i[w];
            u.Status === ClientLib.Vis.Region.ESupportWeaponStatus.Fail ? this._lblSupportStatus.setValue(this.tr(et, t + r.get_Name() + n)) : (u.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Destroyed) === ClientLib.Vis.Region.ESupportWeaponStatus.Destroyed ? this._lblSupportStatus.setValue(this.tr(ht, t + r.get_Name() + n)) : (u.Status & ClientLib.Vis.Region.ESupportWeaponStatus.OutOfRange) === ClientLib.Vis.Region.ESupportWeaponStatus.OutOfRange ? this._lblSupportStatus.setValue(this.tr(pt, t + r.get_Name() + n)) : (u.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Calibrating) === ClientLib.Vis.Region.ESupportWeaponStatus.Calibrating ? (tt = ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep(), p = webfrontend.phe.cnc.Util.getTimespanString(ClientLib.Data.MainData.GetInstance().get_Time().GetTimeSpan(Math.max(0, u.CalibrationEndStep) - tt), !1), f ? this._lblSupportStatus.setValue(this.tr(g, t + r.get_SupportDedicatedBaseName() + n, t + p + n)) : this._lblSupportStatus.setValue(this.tr(g, t + r.get_Name() + n, t + p + n))) : (u.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Ready) === ClientLib.Vis.Region.ESupportWeaponStatus.Ready && (f ? this._lblSupportStatus.setValue(this.tr(y, t + r.get_SupportDedicatedBaseName() + n)) : this._lblSupportStatus.setValue(this.tr(y, t + r.get_Name() + n)))
        }
        this._lblSupportStatus.setVisibility(s ? l : h);
        this._iconSupport.setSource(wo + b + ti);
        this._lblSupportBuilding.setValue(this.tr(we, t + i.dn + n, t + o.get_Level() + n, t + o.get_Magnitude() + n));
        this._lblSupportDamageInf.setValue(t + i.pi.toString() + e);
        this._lblSupportDamageTank.setValue(t + i.pv.toString() + e);
        this._lblSupportDamageAir.setValue(t + i.pa.toString() + e)
    } else this._cntSupportWeapon.exclude()
}

function _setIncomingSupportContainer() {
    var a, i, r;
    this._dedicatedWeapons = ClientLib.Data.MainData.GetInstance().get_CitiesSupport().GetSupportWeaponCount(this._selectedObject.get_Id());
    this._allianceWeapons = ClientLib.Data.MainData.GetInstance().get_AllianceSupportState().GetSupportWeaponCount();
    var u = 0,
        f = 0,
        e = 0,
        o = 0,
        s = 0,
        h = 0,
        l = this._selectedObject.get_SupportWeaponStatus(),
        c = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
    if (!c.get_IsGhostMode() && !c.get_isAlerted() && !c.get_isProtected) {
        var v = (l.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Destroyed) === ClientLib.Vis.Region.ESupportWeaponStatus.Destroyed,
            y = (l.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Dedicated) === ClientLib.Vis.Region.ESupportWeaponStatus.Dedicated,
            p = !((l.Status & ClientLib.Vis.Region.ESupportWeaponStatus.Calibrating) === ClientLib.Vis.Region.ESupportWeaponStatus.Calibrating);
        if (!v && y && c.get_SupportDedicatedBaseId() === 0)
            if (a = this._selectedObject.get_SupportData(), p) switch (a.get_Type()) {
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.GDIFaction):
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.NODFaction):
                    u++;
                    break;
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.GDIFaction):
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.NODFaction):
                    e++;
                    break;
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.GDIFaction):
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.NODFaction):
                    f++
            } else switch (a.get_Type()) {
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.GDIFaction):
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.NODFaction):
                    o++;
                    break;
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.GDIFaction):
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.NODFaction):
                    h++;
                    break;
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.GDIFaction):
                case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.NODFaction):
                    s++
            }
    }
    for (i in this._dedicatedWeapons.d) switch (i) {
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.GDIFaction).toString():
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.NODFaction).toString():
            u += this._dedicatedWeapons.d[i][0];
            o += this._dedicatedWeapons.d[i][1];
            break;
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.GDIFaction).toString():
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.NODFaction).toString():
            f += this._dedicatedWeapons.d[i][0];
            s += this._dedicatedWeapons.d[i][1];
            break;
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.GDIFaction).toString():
        case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.NODFaction).toString():
            e += this._dedicatedWeapons.d[i][0];
            h += this._dedicatedWeapons.d[i][1]
    }
    if (this._selectedObject.get_isAlerted())
        for (r in this._allianceWeapons.d) switch (r) {
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.GDIFaction).toString():
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Air, ClientLib.Base.EFactionType.NODFaction).toString():
                u = u + this._allianceWeapons.d[r][0];
                o = o + this._allianceWeapons.d[r][1];
                break;
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.GDIFaction).toString():
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Ion, ClientLib.Base.EFactionType.NODFaction).toString():
                f = f + this._allianceWeapons.d[r][0];
                s = s + this._allianceWeapons.d[r][1];
                break;
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.GDIFaction).toString():
            case ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Support_Art, ClientLib.Base.EFactionType.NODFaction).toString():
                e = e + this._allianceWeapons.d[r][0];
                h = h + this._allianceWeapons.d[r][1]
        }
    this._lblIncomingSupport.setValue(this.tr(vi, this._selectedObject.get_Name()));
    this._lblIncomingSupportType1.setValue(this.tr(yu, t + u.toString() + n, t + o.toString() + n));
    this._lblIncomingSupportType2.setValue(this.tr(ko, t + f.toString() + n, t + s.toString() + n));
    this._lblIncomingSupportType3.setValue(this.tr(kf, t + e.toString() + n, t + h.toString() + n))
}

function _setAttackContainerInfo(i) {
    var o = this.tr(pe),
        s = ClientLib.Data.MainData.GetInstance().get_Alliance().get_Id(),
        e, h, c;
    s > 0 ? i.get_AllianceId() > 0 && i.get_AllianceId() === s && (o = i.IsOwnBase() ? this.tr(a) : this.tr(vo)) : i.get_VisObjectType() === ClientLib.Vis.VisObject.EObjectType.RegionCityType && i.IsOwnBase() && (o = this.tr(a));
    e = ClientLib.Data.MainData.GetInstance().get_AllianceCombatState().GetCombatByBaseId(i.get_Id());
    e === null || e.IsFinished ? this._cntAttackerInfo.exclude() : (h = e.AttackerId === 0, h ? this._valAttackerPlayerName.setPlayer(t + this.tr(e.AttackerName) + n, 0, !0) : this._valAttackerPlayerName.setPlayer(r + webfrontend.theme.Color.colors[f] + u + e.AttackerName + n, e.AttackerId), e.AttackerAllianceId > 0 ? this._valAttackerAllianceName.setAlliance(r + webfrontend.theme.Color.colors[f] + u + e.AttackerAllianceName + n, e.AttackerAllianceId) : h ? (this._valAttackerAllianceName.setNoAlliance(), this._lblAttackerAllianceLabel.exclude()) : this._valAttackerAllianceName.setNoAlliance(), h ? this._lblAttackerBaseName.setBase(t + this.tr(e.AttackerBaseName) + n, 0) : this._lblAttackerBaseName.setBase(r + webfrontend.theme.Color.colors[f] + u + e.AttackerBaseName + n, e.AttackerBaseId), this._lblAttackerBaseLevel.setValue(this.tr(sr, t + e.AttackerLevel + n)), this._valAttackerBaseCoordinats.setCoordinates(e.AttackerPosX, e.AttackerPosY, r + webfrontend.theme.Color.colors[f] + u + webfrontend.phe.cnc.gui.util.Numbers.formatCoordinates(e.AttackerPosX, e.AttackerPosY) + n), c = ClientLib.Data.MainData.GetInstance().get_Player().get_Id(), s > 0 ? e.AttackerAllianceId > 0 && e.AttackerAllianceId === s && (o = e.AttackerId !== c ? this.tr(eu) : this.tr(p)) : e.AttackerId === c && (o = this.tr(p)), this._cntAttackerInfo.show());
    this._lblUnderAttackTitle.setValue(o)
}

function _setMoveState(i) {
    var f = ClientLib.Data.MainData.GetInstance().get_Time(),
        r = f.GetServerStep(),
        e = !1,
        o, u;
    if (this._lblMoveCooldown !== null && (o = i.get_MoveCooldownEndStep(), o - r > 0 ? (u = webfrontend.phe.cnc.Util.getTimespanString(f.GetTimeSpan(Math.max(0, o - r)), !1), this._lblMoveCooldown.setValue(this.tr(no, t + u + n)), this._lblMoveCooldown.show()) : (this._lblMoveCooldown.exclude(), e = !0)), this._lblMoveRestriction !== null) {
        var s = i.get_MoveRestrictionEndStep(),
            h = i.get_MoveRestrictionCoord(),
            c = h & 65535,
            l = h >> 16 & 65535;
        s - r > 0 ? (u = webfrontend.phe.cnc.Util.getTimespanString(f.GetTimeSpan(Math.max(0, s - r)), !1), this._lblMoveRestriction.setValue(this.tr(bo, t + webfrontend.phe.cnc.gui.util.Numbers.formatCoordinates(l, c) + n, t + u + n)), this._lblMoveRestriction.show()) : (this._lblMoveRestriction.exclude(), e = !0)
    }
    e && this.onCitiesChange()
}

function _setAlertedState(n) {
    n.get_isAlerted() || this._cntBaseAlerted.setVisibility(h)
}

function _setImpactTimer(i) {
    var s = ClientLib.Data.MainData.GetInstance().get_EndGame(),
        o = !1,
        r = null,
        f = null,
        e = null,
        u = s.GetServer(i.get_RawX(), i.get_RawY());
    u !== null && (o = !0, u.get_ServerState() === ClientLib.Data.EndGame.EHubState.Impact ? (this._lblImpactTimerDesc.setValue(this.tr(rf)), this._lblImpactTimerPreText.setValue(this.tr(ir)), r = ClientLib.Data.MainData.GetInstance().get_Time(), f = r.GetServerStep(), e = webfrontend.phe.cnc.Util.getTimespanString(r.GetTimeSpan(Math.max(0, u.get_EndStep() - f)), !0, !0), this._lblImpactTimer.setValue(t + e + n)) : u.get_ServerState() === ClientLib.Data.EndGame.EHubState.Crater ? (this._lblImpactTimerDesc.setValue(this.tr(ef)), this._lblImpactTimerPreText.setValue(this.tr(ru)), r = ClientLib.Data.MainData.GetInstance().get_Time(), f = r.GetServerStep(), e = webfrontend.phe.cnc.Util.getTimespanString(r.GetTimeSpan(Math.max(0, u.get_EndStep() - f)), !0, !0), this._lblImpactTimer.setValue(t + e + n)) : u.get_ServerState() === ClientLib.Data.EndGame.EHubState.Claim && (this._lblImpactTimerDesc.setValue(this.tr(ie)), this._lblImpactTimerPreText.setValue(this.tr(ao)), r = ClientLib.Data.MainData.GetInstance().get_Time(), f = r.GetServerStep(), e = webfrontend.phe.cnc.Util.getTimespanString(r.GetTimeSpan(Math.max(0, u.get_EndStep() - f)), !0, !0), this._lblImpactTimer.setValue(t + e + n)));
    this._cntImpactTimer.setVisibility(o ? l : h)
}

function _setCombatState(r, u) {
    var o = ClientLib.Data.MainData.GetInstance().get_Time(),
        f = o.GetServerStep(),
        l = !1,
        e, y;
    this._lblUnderAttackTitle.setTextColor(w);
    var s = r.get_LockdownEndStep(),
        h = s - ClientLib.Data.MainData.GetInstance().get_Server().get_PostCombatBlockedForAllSteps(),
        a = s - ClientLib.Data.MainData.GetInstance().get_Server().get_PostCombatBlockedForNonAllianceSteps(),
        p = ClientLib.Data.MainData.GetInstance().get_AllianceCombatState().GetLockStepForTarget(r.get_Id()),
        k = s === p,
        v = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(r.get_Id()),
        c = !1;
    v !== null && (c = v.IsOwnBase());
    f <= h ? (e = i, r.get_VisObjectType() === ClientLib.Vis.VisObject.EObjectType.RegionNPCCamp ? (y = r.get_CombatStartStep(), e = webfrontend.phe.cnc.Util.getTimespanString(o.GetTimeSpan(Math.max(0, 120 - (f - y)), !1))) : e = webfrontend.phe.cnc.Util.getTimespanString(o.GetTimeSpan(Math.max(0, h - f), !1)), u ? this._lblCombatLockdownText.setValue(this.tr(wf, i)) : this._lblCombatLockdownText.setValue(this.tr(it, i)), this._lblCombatLockdownTimer.setValue(t + e + n)) : !c && f > h && f <= a ? (e = webfrontend.phe.cnc.Util.getTimespanString(o.GetTimeSpan(Math.max(0, a - f)), !1), k && ClientLib.Data.MainData.GetInstance().get_Alliance().get_Id() > 0 ? (this._lblUnderAttackTitle.setValue(this.tr(gu)), this._lblUnderAttackTitle.setTextColor(sf), this._lblCombatLockdownText.setValue(this.tr(nt, i))) : (this._lblUnderAttackTitle.setValue(this.tr(tr)), this._lblCombatLockdownText.setValue(this.tr(b, i))), this._lblCombatLockdownTimer.setValue(t + e + n)) : c && f > h && f <= s ? (this._lblUnderAttackTitle.setValue(this.tr(tu)), e = webfrontend.phe.cnc.Util.getTimespanString(o.GetTimeSpan(Math.max(0, s - f)), !1), this._lblCombatLockdownText.setValue(this.tr(b, i)), this._lblCombatLockdownTimer.setValue(t + e + n)) : (this._cntAttackerInfo.isVisible() || this._cntUnderAttack.isVisible()) && (l = !0);
    l && this.onCitiesChange()
}