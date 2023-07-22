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

function getActivePopup anonymous() {
    this.getActivePopup.$$install && this.getActivePopup.$$install();
    return this.getActivePopup.apply(this, arguments);
}

function setActivePopup anonymous(value) {
    this.$$setActivePopupImpl.apply(this, arguments);
    return value;
}

function resetActivePopup() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initActivePopup() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeActivePopup() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeActivePopup() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getActivePopupClosedBy anonymous() {
    this.getActivePopupClosedBy.$$install && this.getActivePopupClosedBy.$$install();
    return this.getActivePopupClosedBy.apply(this, arguments);
}

function setActivePopupClosedBy anonymous() {
    this.setActivePopupClosedBy.$$install && this.setActivePopupClosedBy.$$install.call(this);
    return this.setActivePopupClosedBy.apply(this, arguments);
}

function resetActivePopupClosedBy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeActivePopupClosedBy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeActivePopupClosedBy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getSavedLastViewMode anonymous(value) {
    if (this.$$runtime_SavedLastViewMode !== undefined) return this.$$runtime_SavedLastViewMode;
    if (this.$$user_SavedLastViewMode !== undefined) return this.$$user_SavedLastViewMode;
    else return this.$$init_SavedLastViewMode;
}

function setSavedLastViewMode anonymous(value) {
    this.$$setSavedLastViewModeImpl.apply(this, arguments);
    return value;
}

function resetSavedLastViewMode() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initSavedLastViewMode() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeSavedLastViewMode() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSavedLastViewMode() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getViewMode() {
    return this.viewMode
}

function getViewCity() {
    return this.cityId
}

function setActive(n) {
    if (this.__vR != n && (this.__vR = n, this.resetSavedView(), this.__vR && this.viewMode > 0)) {
        var t = ClientLib.Vis.VisMain.GetInstance(),
            i = this.getVisMode(this.viewMode);
        t.set_Mode(i.vis)
    }
}

function isActive() {
    return this.__vR
}

function getUnitPopup() {
    return this.unitPopup == null && (this.unitPopup = new webfrontend.gui.details.OverlayEntityPopupUnit), this.unitPopup
}

function saveCurrentView() {
    this.setSavedLastViewMode(this.viewMode);
    this.__bjx = this.cityId
}

function resetSavedView() {
    this.setSavedLastViewMode(null);
    this.__bjx = null
}

function gotoLastView() {
    this.getSavedLastViewMode() != null && this.setView(this.getSavedLastViewMode(), this.__bjx, 0, 0, 0)
}

function setView(r, u, f, o, s) {
    var p, w, c, b, g, l, y;
    r != ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay && r != ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase && r != ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense && r != ClientLib.Data.PlayerAreaViewMode.pavmCombatSimulation && r != ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase && r != ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense && this.resetSavedView();
    s == null && (s = 0);
    f = Math.round(f);
    o = Math.round(o);
    var h = null,
        a = ClientLib.Vis.VisMain.GetInstance(),
        v = ClientLib.Data.MainData.GetInstance().get_Cities();
    if (this.__bju.show(), this.cityId != u && (p = v.GetCity(this.cityId), p != null && webfrontend.phe.cnc.Util.detachNetEvent(p, i, ClientLib.Data.CityChange, this, this._onCityChange), w = v.GetCity(u), w != null && webfrontend.phe.cnc.Util.attachNetEvent(w, i, ClientLib.Data.CityChange, this, this._onCityChange)), this.cityId = u, this.transitionSource = a.GetActiveView(), this.viewMode = r, v.set_CurrentCityId(this.cityId), this._validateMode()) {
        if (c = this.getVisMode(r), c) switch (c.vis) {
            case ClientLib.Vis.Mode.City:
                h = ClientLib.Vis.VisMain.GetInstance().get_City();
                h.get_OwnerId() === ClientLib.Data.MainData.GetInstance().get_Player().get_Id() && v.get_CurrentOwnCity() != null && webfrontend.gui.alliance.AllianceMarkerNavs.updateHomeMarker(v.get_CurrentOwnCity());
                h != null && c.mode != undefined && h.set_Mode(c.mode);
                (f != -1 || o != -1) && (f = 0, o = 0);
                break;
            case ClientLib.Vis.Mode.Region:
                h = ClientLib.Vis.VisMain.GetInstance().get_Region();
                h != null && c.mode != undefined && h.set_Mode(c.mode);
                break;
            case ClientLib.Vis.Mode.World:
                h = ClientLib.Vis.VisMain.GetInstance().get_World();
                h != null && c.mode != undefined && h.set_Mode(c.mode);
                this.__bju.exclude();
                break;
            case ClientLib.Vis.Mode.Battleground:
                h = ClientLib.Vis.VisMain.GetInstance().get_Battleground();
                this.autoScroll == 0 && (this.autoScroll = 1);
                this.autoScrollTimeout = 0;
                f = 0;
                o = h.get_MaxYPosition();
                h != null && c.mode != undefined && h.set_Mode(c.mode);
                break;
            case ClientLib.Vis.Mode.ArmySetup:
                h = a.get_ArmySetup();
                h != null && c.mode != undefined && h.set_Mode(c.mode);
                break;
            case ClientLib.Vis.Mode.DefenseSetup:
                h = a.get_DefenseSetup();
                h != null && c.mode != undefined && h.set_Mode(c.mode);
                break;
            case ClientLib.Vis.Mode.CombatSetup:
                h = a.get_CombatSetup();
                h.set_MaxYPosition(h.get_MinYPosition() + 19 * h.get_GridHeight());
                o <= 0 && (o = this.getHUD().getCombatSetupOffset(c.mode));
                h != null && c.mode != undefined && h.set_Mode(c.mode)
        }
        if (this.transitionStartTime != null) {
            if (this.transitionStartTime = null, b = this.transitionTarget.GetHtmlNode(), g = this.transitionSource.GetHtmlNode(), qx.bom.element.Style.reset(g, n), qx.bom.element.Style.reset(b, n), this.transitionTarget.ActivateFog(!0), this.transitionSource.ActivateFog(!0), l = this.mapContainer.getContentElement().getDomElement(), this.activeSceneView && l) try {
                l.removeChild(this.activeSceneView)
            } catch (nt) {}
            this.activeSceneView = b
        }
        if (l = this.mapContainer.getContentElement().getDomElement(), h != null) {
            if (this.activeSceneView != h.GetHtmlNode())
                if (s == 0) {
                    if (this.__vR && a.set_Mode(c.vis), f == -1 && o == -1 ? (h.set_ZoomFactor(a.get_MinZoomFactor()), h.CenterGridPosition(4, 3)) : (h.set_ZoomFactor(a.get_MinZoomFactor()), h.SetPosition(f, o)), this.activeSceneView && l) try {
                        l.removeChild(this.activeSceneView)
                    } catch (nt) {}
                    this.activeSceneView = h.GetHtmlNode();
                    this.activeSceneView && l && (qx.bom.element.Style.reset(this.activeSceneView, n), l.appendChild(this.activeSceneView))
                } else {
                    this.transitionVisData = {
                        mode: c.vis,
                        x: f,
                        y: o,
                        zoom: a.get_ZoomFactor()
                    };
                    this.transitionStartTime = (new Date).getTime();
                    this.transitionTarget = h;
                    this.transitionMode = s;
                    this.transitionTarget.ActivateFog(!1);
                    this.transitionSource.ActivateFog(!1);
                    this.transitionSource.ViewUpdate();
                    var k = h.GetHtmlNode(),
                        d = 0;
                    switch (s) {
                        case 1:
                            d = a.get_ViewHeight();
                            break;
                        case 2:
                            d = -a.get_ViewHeight()
                    }
                    k && l && (l.appendChild(k), qx.bom.element.Style.setStyles(k, {
                        position: e,
                        top: d.toString() + t
                    }));
                    this.activeSceneView && qx.bom.element.Style.setStyles(this.activeSceneView, {
                        position: e,
                        top: 0..toString() + t
                    })
                }
        } else {
            if (this.activeSceneView && l) try {
                l.removeChild(this.activeSceneView)
            } catch (nt) {}
            this.activeSceneView = null
        }
        this.setActivePopup(null);
        this.__bjv.setViewMode(r);
        this.__bjv.resetToggleMode();
        this.__bjv.updateUI(this.viewMode, ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(u));
        y = qx.core.Init.getApplication();
        this.viewMode != ClientLib.Data.PlayerAreaViewMode.pavmNone && (y.getMainOverlay().isVisible() || y.showMainOverlay(!0));
        this.viewMode == ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay && y.getBarSimResult().setBarHidden(!0)
    }
}

function getVisMode(n) {
    switch (n) {
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase:
            return {
                vis: ClientLib.Vis.Mode.City, mode: undefined
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense:
            return {
                vis: ClientLib.Vis.Mode.DefenseSetup, mode: undefined
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense:
            return {
                vis: ClientLib.Vis.Mode.ArmySetup, mode: ClientLib.Vis.ArmySetup.ArmySetupViewMode.Default
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase:
            return {
                vis: ClientLib.Vis.Mode.CombatSetup, mode: ClientLib.Vis.CombatSetup.CombatSetupViewMode.Base
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense:
            return {
                vis: ClientLib.Vis.Mode.CombatSetup, mode: ClientLib.Vis.CombatSetup.CombatSetupViewMode.Defense
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker:
            return {
                vis: ClientLib.Vis.Mode.Battleground, mode: ClientLib.Vis.Battleground.BattleMode.Live
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender:
            return {
                vis: ClientLib.Vis.Mode.Battleground, mode: ClientLib.Vis.Battleground.BattleMode.Live
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker:
            return {
                vis: ClientLib.Vis.Mode.Battleground, mode: ClientLib.Vis.Battleground.BattleMode.Live
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender:
            return {
                vis: ClientLib.Vis.Mode.Battleground, mode: ClientLib.Vis.Battleground.BattleMode.Live
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay:
            return {
                vis: ClientLib.Vis.Mode.Battleground, mode: ClientLib.Vis.Battleground.BattleMode.Replay
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSimulation:
            return {
                vis: ClientLib.Vis.Mode.Battleground, mode: ClientLib.Vis.Battleground.BattleMode.Replay
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmWorldMap:
            return {
                vis: ClientLib.Vis.Mode.World, mode: ClientLib.Vis.World.WorldViewMode.Default
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase:
            return {
                vis: ClientLib.Vis.Mode.CombatSetup, mode: ClientLib.Vis.CombatSetup.CombatSetupViewMode.AllianceBase
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense:
            return {
                vis: ClientLib.Vis.Mode.CombatSetup, mode: ClientLib.Vis.CombatSetup.CombatSetupViewMode.AllianceBaseDefense
            }
    }
    return null
}

function _onCityChange() {
    this._onUITick()
}

function _onMapAreaResize(n) {
    var i = n.getData().width,
        r = n.getData().height,
        t = ClientLib.Vis.VisMain.GetInstance(),
        u = t.GetActiveView(),
        e, f;
    u == null && (u = t.get_City());
    u != null && (e = u.get_MaxXPosition() - u.get_MinXPosition(), f = Math.min(1, i / e), u.set_ZoomFactor(f), this.__vR && t.set_MinZoomFactor(f), t.get_City().set_ZoomFactor(f), t.get_ArmySetup().set_ZoomFactor(f), t.get_DefenseSetup().set_ZoomFactor(f));
    t.get_City().SetViewSize(i, r);
    t.get_Battleground().SetViewSize(i, r);
    t.get_ArmySetup().SetViewSize(i, r);
    t.get_DefenseSetup().SetViewSize(i, r);
    t.get_CombatSetup().SetViewSize(i, r);
    t.get_World().SetViewSize(i, r);
    t.ViewUpdate()
}

function _onMouseDown(n) {
    var i, t;
    n.getButton() == f && (this.autoScroll = 0, this.autoScrollTimeout = 0, this.mouseDown = !0, this.worldMoved = !1, i = ClientLib.Vis.VisMain.GetInstance(), this.worldMouseMove == !1 && (this.worldMouseMove = !0, this.mapContainer.capture()), this.mouseStartX = n.getScreenLeft(), this.mouseStartY = n.getScreenTop(), t = this.getContentLocation(), this.__vR && i.MouseDown(n.getDocumentLeft() - t.left, n.getDocumentTop() - t.top))
}

function _onMouseUp(n) {
    var e = n.getTarget() && this.getActivePopupClosedBy() == n.getTarget().toHashCode(),
        t, r, i;
    (this.setActivePopupClosedBy(0), t = n.getButton(), t == f) && (this.worldMouseMove == !0 && (this.worldMouseMove = !1, this.mapContainer.releaseCapture(), this.getContentElement().removeStyle(u)), !e && this.worldMoved == !1 && this.__vR && (this.getActivePopup() != null && this.getActivePopup().getAutoHide() ? this.setActivePopup(null) : (r = ClientLib.Vis.VisMain.GetInstance(), i = this.getContentLocation(), r.MouseUp(n.getDocumentLeft() - i.left, n.getDocumentTop() - i.top, t))), this.autoScrollTimeout = (new Date).getTime())
}

function _onMouseMove(n) {
    var i, r, f, t, e;
    this.worldMouseMove == !0 ? (i = n.getScreenLeft() - this.mouseStartX, r = n.getScreenTop() - this.mouseStartY, (this.worldMoved || Math.abs(i) >= 5 || Math.abs(r) >= 5) && (this.mouseStartX = n.getScreenLeft(), this.mouseStartY = n.getScreenTop(), t = ClientLib.Vis.VisMain.GetInstance(), f = t.get_ZoomFactor(), t.MovePosition(-(i / f), -(r / f)) && (this.getContentElement().setStyle(u, w), this.worldMoved = !0, (this.getViewMode() == ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense || this.getViewMode() == ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase) && this.getHUD().updateCombatSetupButton()))) : (t = ClientLib.Vis.VisMain.GetInstance(), e = this.getContentLocation(), this.__vR && t.MouseMove(n.getDocumentLeft() - e.left, n.getDocumentTop() - e.top))
}

function _onMouseWheel(n) {
    var t = ClientLib.Vis.VisMain.GetInstance(),
        r, i;
    if (!t.GetActiveView().get_IsZoomable()) {
        n.stop();
        return
    }
    r = n.getWheelDelta();
    i = t.get_ZoomFactor();
    i += r > 0 ? -.1 : .1;
    i = Math.min(t.GetActiveView().get_MaxZoomFactor(), Math.max(t.get_MinZoomFactor(), i));
    this.__vR && t.set_ZoomFactor(i);
    n.stop()
}

function _onTick() {
    var i = !1,
        t, u, n;
    if (this._viewTransition(), t = ClientLib.Vis.VisMain.GetInstance(), this.__vR) {
        t.UpdateMouseTool();
        t.Update();
        u = !1;
        switch (this.viewMode) {
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker:
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender:
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker:
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender:
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay:
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatSimulation:
                u = !0
        }
        if (u)
            if (n = ClientLib.Vis.VisMain.GetInstance().get_Battleground(), i = this.viewMode == ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker && n.get_Mode() == ClientLib.Vis.Battleground.BattleMode.Live && n.get_CombatComplete(), i) {
                var e = n.get_LastFrameTime(),
                    o = t.get_PositionY(),
                    f = Math.floor(o + this.autoScrollSpeed / 1e3 * e);
                f <= n.get_MinYPosition() && (this.autoScrollSpeed = 100);
                f >= n.get_MaxYPosition() - n.get_ViewHeight() / n.get_ZoomFactor() && (this.autoScrollSpeed = -100);
                t.SetPosition(0, f)
            } else this.getPlayerAutoScrollPreference() && (n.UpdateAutoCam(this.autoScroll) || this.autoScrollTimeout != 0 && (new Date).getTime() >= this.autoScrollTimeout + 3e3 && (this.autoScroll = 1, this.autoScrollTimeout = 0))
    }
    t.ViewUpdate();
    this.mapBlocker.setVisibility(i ? y : r)
}

function _onUITick() {
    if (this._validateMode()) {
        var n = ClientLib.Vis.VisMain.GetInstance();
        this.isActive() && n.GetActiveView() && n.UiUpdate(ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep());
        this.__bjv.updateUI(this.viewMode, ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.cityId))
    }
}

function _validateMode() {
    var t = qx.core.Init.getApplication(),
        n = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.cityId),
        r, u, i, f;
    if (n == null) {
        switch (this.viewMode) {
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense:
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase:
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender:
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker:
            case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase:
            case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense:
                return t.getMainOverlay().isVisible() && t.showMainOverlay(!1), !1
        }
        return !0
    }
    if (r = this.viewMode == ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker, u = this.viewMode == ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase || this.viewMode == ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense, !r && t.getMainOverlay().isVisible() && (!n.get_Valid() || n.get_IsGhostMode() && this.viewMode != ClientLib.Data.PlayerAreaViewMode.pavmWorldMap)) return t.showMainOverlay(!1), webfrontend.gui.widgets.confirmationWidgets.GhostedConfirmationWidget.getInstance().showGhostedInformation(n), !1;
    if (t.getMainOverlay().isVisible() && (n.get_OutOfRange() || n.get_OutOfRangeGhostBase()) && !u && this.viewMode != ClientLib.Data.PlayerAreaViewMode.pavmWorldMap) return t.showMainOverlay(!1), webfrontend.gui.widgets.confirmationWidgets.SpyMessageConfirmationWidget.getInstance().showMessage(n), !1;
    switch (this.viewMode) {
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase:
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense:
            if (n.get_HasIncommingAttack() && ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep() < n.get_LockdownEndStep()) return ClientLib.Data.MainData.GetInstance().get_Combat().set_Id(this.cityId), this.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender, this.cityId, 0, 0), !1;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase:
            if (n.get_HasIncommingAttack() && !n.IsOwnBase() && (i = ClientLib.Data.MainData.GetInstance().get_AllianceCombatState().GetCombatByBaseId(this.cityId), i != null)) return f = ClientLib.Data.MainData.GetInstance().get_Combat(), f.get_Id() != this.cityId && ClientLib.Data.MainData.GetInstance().get_Combat().set_Id(this.cityId), i.AttackerId == ClientLib.Data.MainData.GetInstance().get_Player().get_Id() ? this.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker, this.cityId, 0, 0) : i.AttackerAllianceId == ClientLib.Data.MainData.GetInstance().get_Alliance().get_Id() ? this.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker, this.cityId, 0, 0) : this.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender, this.cityId, 0, 0), !1;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker:
            if (!n.get_HasIncommingAttack() && (ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_CombatComplete() || ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_IsInvalidCombat())) return n.IsOwnBase() ? this.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense, this.cityId, 0, 0) : this.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense, this.cityId, 0, 0), !1;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender:
            if (ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep() > n.get_LockdownEndStep()) return this.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase, this.cityId, 0, 0), !1
    }
    return !0
}

function closeGhostedConfirmation() {
    webfrontend.gui.widgets.confirmationWidgets.GhostedConfirmationWidget.getInstance().closeForced()
}

function _viewTransition() {
    var i, e, o, h;
    if (this.transitionStartTime != null) {
        if (i = ClientLib.Vis.VisMain.GetInstance(), this.transitionVisData != null) {
            if (this.transitionSource.get_IsZoomable() && i.get_ZoomFactor() > i.get_MinZoomFactor())
                if (e = (new Date).getTime() - this.transitionStartTime, o = this.transitionVisData.zoom - .4 * e / 250, o < i.get_MinZoomFactor()) i.set_ZoomFactor(i.get_MinZoomFactor()), i.Update();
                else {
                    i.set_ZoomFactor(o);
                    return
                } i.set_Mode(this.transitionVisData.mode);
            this.transitionVisData.x == -1 && this.transitionVisData.y == -1 ? (i.set_ZoomFactor(i.get_MinZoomFactor()), i.CenterGridPosition(4, 3)) : (i.set_ZoomFactor(i.get_MinZoomFactor()), i.SetPosition(this.transitionVisData.x, this.transitionVisData.y));
            this.transitionVisData = null;
            this.transitionStartTime = (new Date).getTime()
        }
        var e = (new Date).getTime() - this.transitionStartTime,
            u = this.transitionTarget.GetHtmlNode(),
            s = this.transitionSource.GetHtmlNode(),
            f = i.get_ViewHeight(),
            r = Math.floor(e * (f / 500));
        if (r >= f) {
            if (qx.bom.element.Style.reset(s, n), qx.bom.element.Style.reset(u, n), this.transitionTarget.ActivateFog(!0), this.transitionSource.ActivateFog(!0), h = this.mapContainer.getContentElement().getDomElement(), this.activeSceneView && h) try {
                h.removeChild(this.activeSceneView)
            } catch (c) {}
            this.activeSceneView = u;
            this.transitionStartTime = null
        } else switch (this.transitionMode) {
            case 1:
                qx.bom.element.Style.set(s, n, (-r).toString() + t);
                qx.bom.element.Style.set(u, n, (f - r).toString() + t);
                break;
            case 2:
                qx.bom.element.Style.set(s, n, r.toString() + t);
                qx.bom.element.Style.set(u, n, (r - f).toString() + t)
        }
    }
}

function _onPlayerVersionChange() {}

function _onCurrentOwnCityChange(n) {
    n != null && this.__bjv.updateOwnCity(n)
}

function _onSelectionChange(n, t) {
    if (t != null) {
        var i = this.onSelectCallback[t.get_VisObjectType()];
        i == undefined ? this._onSelectedClickUnknown(this, t) : i.call(this, t)
    }
}

function _onSelectedClickUnknown() {}

function _showSellBuildingConfirm(n) {
    var i = n.get_BuildingDetails();
    this._confirmSaleWindow || (this._confirmSaleWindow = new webfrontend.gui.widgets.confirmationWidgets.SellItemConfirmationWidget);
    var t = this._getResourceRefunds(i),
        r = Object.keys(t.d).map(function(n) {
            return {
                t: +n,
                c: t.d[n]
            }
        }),
        u = webfrontend.gui.UtilTech.generateResourceHtmlText(r, null, !1, !1, !1, !0, -4, void 0, !1, !0).get(),
        f = n.get_BuildingName() + v + n.get_BuildingLevel() + s;
    this._confirmSaleWindow.showSellItemConfirmation(this, this._onDidShowSaleAlert(n), f, n.get_ImageSource(), u)
}

function _getResourceRefunds(n) {
    var t = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
    return t.get_CityBuildingsData().GetDemolishResourceRefund(n)
}

function _shouldShowSellBuildingConfirm(n) {
    var i = ClientLib.Vis.VisMain.GetInstance().get_MouseMode() == webfrontend.gui.PlayArea.PlayAreaHUD.EModeSell,
        u = ClientLib.Data.MainData.GetInstance().get_Server().get_PlunderExploitFixesEnabled(),
        f = n.CanDemolish(),
        t, r;
    if ([34, 42, 40, 36, 39, 37, 43, 41, 35, 38, 30, 24].indexOf(n.get_Type()) != -1 && i) return !0;
    if (u && i && f) {
        t = this._getResourceRefunds(n);
        for (r in t.d)
            if (t.d[r] < 0) return !0
    }
    return !1
}

function _selectedBuildingClick(n) {
    var i = this.getVisMode(this.viewMode),
        t = n.get_BuildingDetails();
    n != null && (i.vis != ClientLib.Vis.Mode.CombatSetup || t != null && t.get_IsAlive()) ? this._shouldShowSellBuildingConfirm(t) ? this._showSellBuildingConfirm(n) : n.ExecutePrimaryFunction() || (this.buildingPopup == null && (this.buildingPopup = new webfrontend.gui.details.OverlayBuildingDetailView), this.setActivePopup(this.buildingPopup), this.buildingPopup.activate(n)) : this.buildingPopup && this.buildingPopup.close(!0)
}

function _onDidShowSaleAlert(n) {
    return function(t) {
        (t && n.ExecutePrimaryFunction(), this._confirmSaleWindow) && this._confirmSaleWindow.disable()
    }
}

function _selectedResourceClick(n) {
    var t = this.getVisMode(this.viewMode);
    n != null && t != null && t.vis != ClientLib.Vis.Mode.CombatSetup ? n.ExecutePrimaryFunction() || (this.resourcePopup == null && (this.resourcePopup = new webfrontend.gui.ResourcePopup), this.setActivePopup(this.resourcePopup), this.resourcePopup.activate(n)) : this.resourcePopup && this.resourcePopup.close()
}

function _selectedUnitClick(n) {
    var i = this.getVisMode(this.viewMode),
        t;
    n != null && i.vis != ClientLib.Vis.Mode.CombatSetup | (n.get_UnitDetails() != null && n.get_UnitDetails().get_IsAlive()) ? n.ExecutePrimaryFunction() || (t = this.getUnitPopup(), this.setActivePopup(t), this.unitPopup.activate(n)) : this.unitPopup && this.unitPopup.close()
}

function setAutocam(n) {
    this.autoScroll = n;
    n == 2 && (this.autoScrollInfo = arguments[1]);
    n == 3 && (this.autoScrollInfo = arguments[1])
}

function getHUD() {
    return this.__bjv
}

function setTutorialMode(n) {
    this.getHUD().setTutorialMode(n);
    this.__bjt != n && (this.__bjt = n)
}

function getUIItem(n) {
    switch (n) {
        case ClientLib.Data.Missions.PATH.BAR_HUD:
            return this.getHUD()
    }
    return null
}

function onHotKeyDown(n) {
    if (this.isActive()) this.getHUD().onHotKeyDown(n)
}

function onHotKeyUp(n) {
    if (this.isActive()) this.getHUD().onHotKeyUp(n)
}

function onHotKeyPress(n) {
    if (this.isActive()) this.getHUD().onHotKeyPress(n)
}

function getPlayerAutoScrollPreference() {
    return parseInt(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_COMBATAUTOSCROLL), 10) == 1
}