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

function setActive(n) {
    this.active = n;
    this.mapBlocker.setVisibility(this.active ? v : b);
    var t = ClientLib.Vis.VisMain.GetInstance();
    this.active && this.mode == ClientLib.Vis.Mode.Region ? t.set_Mode(this.mode) : (this.closeCityInfo(), this.closeCityList())
}

function setView(n, t, i, r) {
    var h = ClientLib.Vis.VisMain.GetInstance(),
        c = ClientLib.Data.MainData.GetInstance(),
        f = null,
        e;
    if (n == ClientLib.Vis.Mode.Region) {
        f = ClientLib.Vis.VisMain.GetInstance().get_Region();
        var s = c.get_Cities().GetCity(t),
            u = ClientLib.Vis.VisMain.GetInstance().get_Region(),
            o = u.get_ZoomFactor();
        s != null ? (i = (s.get_PosX() + .5) * u.get_GridWidth() - Math.floor(u.get_ViewWidth() / o / 2), r = (s.get_PosY() + .5) * u.get_GridHeight() - Math.floor(u.get_ViewHeight() / o / 2)) : (i = (i + .5) * u.get_GridWidth() - Math.floor(u.get_ViewWidth() / o / 2), r = (r + .5) * u.get_GridHeight() - Math.floor(u.get_ViewHeight() / o / 2));
        this.active && h.set_Mode(n)
    }
    this.mode = n;
    i = Math.round(i);
    r = Math.round(r);
    f && (f.SetPosition(i, r), this.__bfB != null && this.__bfB.updatePosition());
    this.activeSceneView != f && (e = this.mapContainer.getContentElement().getDomElement(), this.activeSceneView && e && (this.activeSceneView.SetActive(!1), e.removeChild(this.activeSceneView.GetHtmlNode())), this.activeSceneView = f, this.activeSceneView && e && (e.appendChild(this.activeSceneView.GetHtmlNode()), this.activeSceneView.SetActive(!0)))
}

function _onMapAreaResize(n) {
    var t = n.getData().width,
        i = n.getData().height,
        r = ClientLib.Vis.VisMain.GetInstance();
    r.get_Region().SetViewSize(t, i)
}

function onHotKeyDown(n) {
    var e = ClientLib.Vis.VisMain.GetInstance(),
        f, u;
    if (!e.get_LockMove() && this.active) {
        f = n.getKeyIdentifier();
        u = !1;
        switch (f) {
            case r:
                this.__bfF = 1;
                u = !0;
                break;
            case i:
                this.__bfF = -1;
                u = !0;
                break;
            case t:
                this.__bfG = 1;
                u = !0;
                break;
            case c:
                this.__bfG = -1;
                u = !0
        }
        u && (this.closeCityInfo(), this.closeCityList())
    }
}

function onHotKeyUp(n) {
    var f = ClientLib.Vis.VisMain.GetInstance(),
        u;
    if (!f.get_LockMove() && this.active) {
        u = n.getKeyIdentifier();
        switch (u) {
            case r:
                this.__bfF == 1 && (this.__bfF = 0);
                break;
            case i:
                this.__bfF == -1 && (this.__bfF = 0);
                break;
            case t:
                this.__bfG == 1 && (this.__bfG = 0);
                break;
            case c:
                this.__bfG == -1 && (this.__bfG = 0)
        }
    }
}

function onHotKeyPress(n) {
    var t = ClientLib.Vis.VisMain.GetInstance(),
        u, i, r;
    if (!t.get_LockMove() && this.active) {
        u = n.getKeyIdentifier();
        i = !1;
        switch (u) {
            case webfrontend.gui.ShortkeyMapper.keys.zoomIn:
                r = t.get_Region().get_ZoomFactor() + .1;
                t.get_Region().set_ZoomFactor(Math.min(1, Math.max(.6, r)));
                i = !0;
                break;
            case webfrontend.gui.ShortkeyMapper.keys.zoomOut:
                r = t.get_Region().get_ZoomFactor() - .1;
                t.get_Region().set_ZoomFactor(Math.min(1, Math.max(.6, r)));
                i = !0
        }
        i && (this.closeCityInfo(), this.closeCityList())
    }
}

function _onMouseDown(n) {
    var t, i;
    n.getButton() == h && (this.mouseDown = !0, this.worldMoved = !1, this.worldMouseMove == !1 && (this.worldMouseMove = !0, this.mapContainer.capture()), this.mouseStartX = n.getScreenLeft(), this.mouseStartY = n.getScreenTop(), t = this.getContentLocation(), this.active && (i = ClientLib.Vis.VisMain.GetInstance(), i.MouseDown(n.getDocumentLeft() - t.left, n.getDocumentTop() - t.top)), this.closeCityInfo(), this.closeCityList())
}

function _onMouseUp(n) {
    var i = n.getButton(),
        t, r;
    i == h && (this.worldMouseMove == !0 && (this.worldMouseMove = !1, this.mapContainer.releaseCapture(), this.getContentElement().removeStyle(u)), this.mouseDown == !0 && this.worldMoved == !1 && (t = this.getContentLocation(), this.active && (r = ClientLib.Vis.VisMain.GetInstance(), r.MouseUp(n.getDocumentLeft() - t.left, n.getDocumentTop() - t.top, i))), this.mouseDown = !1)
}

function _onMouseMove(n) {
    var h = ClientLib.Vis.VisMain.GetInstance(),
        t, e, o, s;
    if (!h.get_LockMove()) {
        if (t = this.getContentLocation(), this.mousePosX = n.getDocumentLeft() - t.left, this.mousePosY = n.getDocumentTop() - t.top, this.__bfD != null) {
            var c = qx.core.Init.getApplication(),
                l = c.getMessagingTicker().getBounds().top,
                a = c.getBaseNavigationBar().getBounds().left,
                i = this.__bfD.getBounds(),
                r = this.mousePosX + 20,
                f = this.mousePosY + 20;
            r + i.width > a && (r = this.mousePosX - 20 - i.width);
            f + i.height > l && (f = this.mousePosY - 20 - i.height);
            this.__bfD.setDomLeft(r);
            this.__bfD.setDomTop(f)
        }
        this.worldMouseMove == !0 ? (e = n.getScreenLeft() - this.mouseStartX, o = n.getScreenTop() - this.mouseStartY, (this.worldMoved || Math.abs(e) >= 5 || Math.abs(o) >= 5) && (this.mouseStartX = n.getScreenLeft(), this.mouseStartY = n.getScreenTop(), this.activeSceneView != null && (s = this.activeSceneView.get_ZoomFactor(), this.activeSceneView.MovePosition(-(e / s), -(o / s)) && (this.getContentElement().setStyle(u, k), this.worldMoved = !0)))) : this.active && h.MouseMove(n.getDocumentLeft() - t.left, n.getDocumentTop() - t.top)
    }
}

function onMouseWheel(n) {
    this._onMouseWheel(n)
}

function _onMouseWheel(n) {
    var r = ClientLib.Vis.VisMain.GetInstance(),
        i, t;
    r.get_LockMove() || this.activeSceneView != null && (i = n.getWheelDelta(), t = this.activeSceneView.get_ZoomFactor(), t += -i * (t < .5 ? .025 : .1), t = Math.min(this.activeSceneView.get_MaxZoomFactor(), Math.max(this.activeSceneView.get_MinZoomFactor(), t)), this.activeSceneView.set_ZoomFactor(t), n.stop())
}

function _onTick() {
    var t, i, r, n;
    this.activeSceneView && (t = ClientLib.Vis.VisMain.GetInstance(), t.UpdateMouseTool(), this.active && (this.activeSceneView.VisUpdate(ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep()), (this.worldMoved || Math.abs(this.__bfF) != 0 || Math.abs(this.__bfG) != 0) && (i = this.__bfG * 15, r = this.__bfF * 15, this.activeSceneView != null && (n = this.activeSceneView.get_ZoomFactor(), this.activeSceneView.MovePosition(-(i / n), -(r / n)) && (this.worldMoved = !0)))), this.activeSceneView.ViewUpdate())
}

function _onUiTick() {
    this.active && this.activeSceneView && this.activeSceneView.UiUpdate(ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep())
}

function _onCurrentCityChange() {}

function _onSelectionChange(n, t) {
    var u;
    if (this.active && (this.__RG = t, this.closeCityInfo(), this.closeCityList(), this.__RG != null)) {
        var f = ClientLib.Vis.VisMain.GetInstance().WorldPosFromScreenPosX(this.mousePosX),
            e = ClientLib.Vis.VisMain.GetInstance().WorldPosFromScreenPosY(this.mousePosY),
            i = ClientLib.Vis.VisMain.GetInstance().GetAllSelectableObjectsFromPosition(f, e),
            r = !1;
        if (this.__RG.get_VisObjectType() == ClientLib.Vis.VisObject.EObjectType.RegionHubControl && (u = ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter(), u.get_State() == ClientLib.Data.EndGame.EHubState.Ruin && (r = !0)), i.l.length != 1 || r)(i.l.length > 1 || r) && this.openCityList(i);
        else switch (this.__RG.get_VisObjectType()) {
            case ClientLib.Vis.VisObject.EObjectType.RegionGhostCity:
            case ClientLib.Vis.VisObject.EObjectType.RegionNPCBase:
            case ClientLib.Vis.VisObject.EObjectType.RegionCityType:
            case ClientLib.Vis.VisObject.EObjectType.RegionNPCCamp:
            case ClientLib.Vis.VisObject.EObjectType.RegionRuin:
            case ClientLib.Vis.VisObject.EObjectType.RegionPointOfInterest:
            case ClientLib.Vis.VisObject.EObjectType.RegionNewPlayerSpot:
            case ClientLib.Vis.VisObject.EObjectType.RegionHubServer:
            case ClientLib.Vis.VisObject.EObjectType.RegionHubControl:
            case ClientLib.Vis.VisObject.EObjectType.RegionHubCenter:
            case ClientLib.Vis.VisObject.EObjectType.RegionAllianceMarker:
                this.openCityInfo(this.__RG);
                this.__RG.get_VisObjectType() == ClientLib.Vis.VisObject.EObjectType.RegionHubCenter && webfrontend.data.InfoTracker.getInstance().checkTrigger_WorldWin()
        }
    }
}

function openCityInfo(n, t) {
    if (t = t || 0, this.closeCityInfo(), this.__bfB != null) {
        switch (n.get_VisObjectType()) {
            case ClientLib.Vis.VisObject.EObjectType.RegionGhostCity:
            case ClientLib.Vis.VisObject.EObjectType.RegionNPCBase:
            case ClientLib.Vis.VisObject.EObjectType.RegionCityType:
            case ClientLib.Vis.VisObject.EObjectType.RegionNPCCamp:
            case ClientLib.Vis.VisObject.EObjectType.RegionHubCenter:
                ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(n.get_Id())
        }
        qx.core.Init.getApplication().getAllianceMarkerNavs().setDistanceToHome(n.get_RawX(), n.get_RawY());
        this.__bfB.setObject(n, t);
        this.__bfB.show();
        ClientLib.Vis.VisMain.GetInstance().PlayUISound(e)
    }
}

function closeCityInfo() {
    if (this.__bfB.isVisible()) {
        this.__bfB.Dispose();
        this.__bfB.exclude();
        qx.core.Init.getApplication().getAllianceMarkerNavs().resetDistanceToHome();
        var n = ClientLib.Data.MainData.GetInstance().get_Cities();
        n.set_CurrentCityId(0)
    }
}

function openCityList(n) {
    this.closeCityList();
    this.__bfC != null && this.__bfC.setObjects(n) && (this.__bfC.show(), ClientLib.Vis.VisMain.GetInstance().PlayUISound(e))
}

function closeCityList() {
    this.__bfC.isVisible() && (this.__bfC.Dispose(), this.__bfC.exclude())
}

function _onMouseToolChange() {
    var n = ClientLib.Vis.VisMain.GetInstance().get_ActiveMouseTool().GetMouseToolType();
    switch (n) {
        case ClientLib.Vis.MouseTool.EMouseTool.FoundBase:
            this.switchMouseToolTip(webfrontend.gui.region.RegionCityFoundInfo.getInstance());
            break;
        case ClientLib.Vis.MouseTool.EMouseTool.MoveBase:
            this.switchMouseToolTip(webfrontend.gui.region.RegionCityMoveInfo.getInstance());
            break;
        case ClientLib.Vis.MouseTool.EMouseTool.SelectSupport:
            this.switchMouseToolTip(webfrontend.gui.region.RegionCitySupportInfo.getInstance());
            break;
        case ClientLib.Vis.MouseTool.EMouseTool.MoveMarker:
            this.switchMouseToolTip(webfrontend.gui.region.RegionInfoAllianceMarkerTooltip.getInstance());
            break;
        default:
            this.switchMouseToolTip(null)
    }
}

function switchMouseToolTip(n) {
    this.__bfD && this.remove(this.__bfD);
    this.__bfD = n;
    this.__bfD && this.add(this.__bfD, {
        top: this.mousePosY,
        left: this.mousePosX
    })
}

function getAnonymousOverlayContainer() {
    return this.__bfA
}