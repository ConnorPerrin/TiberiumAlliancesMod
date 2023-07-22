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

function getCategory anonymous() {
    this.getCategory.$$install && this.getCategory.$$install();
    return this.getCategory.apply(this, arguments);
}

function setCategory anonymous(value) {
    this.$$setCategoryImpl.apply(this, arguments);
    return value;
}

function resetCategory() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCategory() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCategory() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCategory() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getOperation anonymous() {
    this.getOperation.$$install && this.getOperation.$$install();
    return this.getOperation.apply(this, arguments);
}

function setOperation anonymous() {
    this.setOperation.$$install && this.setOperation.$$install.call(this);
    return this.setOperation.apply(this, arguments);
}

function resetOperation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initOperation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeOperation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeOperation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIdForum anonymous() {
    this.getIdForum.$$install && this.getIdForum.$$install();
    return this.getIdForum.apply(this, arguments);
}

function setIdForum anonymous() {
    this.setIdForum.$$install && this.setIdForum.$$install.call(this);
    return this.setIdForum.apply(this, arguments);
}

function resetIdForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIdForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIdForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIdForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getDataThread anonymous() {
    this.getDataThread.$$install && this.getDataThread.$$install();
    return this.getDataThread.apply(this, arguments);
}

function setDataThread anonymous() {
    this.setDataThread.$$install && this.setDataThread.$$install.call(this);
    return this.setDataThread.apply(this, arguments);
}

function resetDataThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initDataThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeDataThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDataThread() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getDataPost anonymous() {
    this.getDataPost.$$install && this.getDataPost.$$install();
    return this.getDataPost.apply(this, arguments);
}

function setDataPost anonymous() {
    this.setDataPost.$$install && this.setDataPost.$$install.call(this);
    return this.setDataPost.apply(this, arguments);
}

function resetDataPost() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeDataPost() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDataPost() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function open(t, i, r, u, f) {
    this.__LH || (this.__LH = webfrontend.phe.cnc.base.Timer.getInstance().addListener(y, this.__we, this));
    this.__LI = !1;
    this.__Iz.setEnabled(!0);
    this.setOperation(t);
    this.setIdForum(i);
    u && this.setDataThread(u);
    f && this.setDataPost(f);
    this.__LR();
    this.setVisibility(ut);
    this.__LB.setValue(!0);
    this.__LG = n;
    r && r.length > 0 && (this.__LG = t == webfrontend.gui.forum.ForumPostPage.REPLY ? ft + r + g : r, this.__Lw.setValue(this.__LG));
    switch (t) {
        case webfrontend.gui.forum.ForumPostPage.CREATE_THREAD:
        case webfrontend.gui.forum.ForumPostPage.CREATE_RECRUITMENT_THREAD:
        case webfrontend.gui.forum.ForumPostPage.CREATE_ACHIEVEMENT_THREAD:
            this.__Lu.focus();
            break;
        default:
            qx.ui.core.queue.Manager.flush();
            this.__Lw.focus();
            this.__Lw.getValue().length > 0 && this.__Lw.setTextSelection(this.__Lw.getValue().length)
    }
    this.__LP()
}

function close() {
    this.__LH && (webfrontend.phe.cnc.base.Timer.getInstance().removeListenerById(this.__LH), this.__LH = 0);
    this.setIdForum(-1);
    this.setDataThread(null);
    this.setDataPost(null);
    this.__Lw.setValue(n);
    this.__Lu.setValue(n);
    this.__LI = !1;
    this.__Iz.setEnabled(!0);
    this.setVisibility(yt)
}

function getIsUnsavedMessage() {
    var t = this.__Lw.getValue(),
        n = this.__Lu.getValue();
    return t != this.__LG || n && n.length > 0 ? {
        title: this.tr(b),
        text: this.tr(d),
        cancelText: this.tr(a)
    } : null
}

function doSaveClose() {
    this.close()
}

function undoSaveClose() {}