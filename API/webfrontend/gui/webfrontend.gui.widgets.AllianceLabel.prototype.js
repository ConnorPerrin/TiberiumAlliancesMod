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

function getAllianceId anonymous(value) {
    if (this.$$runtime_allianceId !== undefined) return this.$$runtime_allianceId;
    if (this.$$user_allianceId !== undefined) return this.$$user_allianceId;
    else return this.$$init_allianceId;
}

function setAllianceId anonymous(value) {
    this.$$setAllianceIdImpl.apply(this, arguments);
    return value;
}

function resetAllianceId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeAllianceId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAllianceId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRich anonymous() {
    this.getRich.$$install && this.getRich.$$install();
    return this.getRich.apply(this, arguments);
}

function setRich anonymous(value) {
    this.$$setRichImpl.apply(this, arguments);
    return value;
}

function resetRich() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRich() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRich() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRich() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleRich anonymous() {
    return this.setRich(!this.getRich())
}

function isRich anonymous() {
    return this.getRich()
}

function getWrap anonymous() {
    this.getWrap.$$install && this.getWrap.$$install();
    return this.getWrap.apply(this, arguments);
}

function setWrap anonymous(value) {
    this.$$setWrapImpl.apply(this, arguments);
    return value;
}

function resetWrap() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initWrap() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeWrap() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeWrap() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleWrap anonymous() {
    return this.setWrap(!this.getWrap())
}

function isWrap anonymous() {
    return this.getWrap()
}

function getFixedContentSize anonymous() {
    this.getFixedContentSize.$$install && this.getFixedContentSize.$$install();
    return this.getFixedContentSize.apply(this, arguments);
}

function setFixedContentSize anonymous(value) {
    this.$$setFixedContentSizeImpl.apply(this, arguments);
    return value;
}

function resetFixedContentSize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initFixedContentSize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeFixedContentSize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeFixedContentSize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleFixedContentSize anonymous() {
    return this.setFixedContentSize(!this.getFixedContentSize())
}

function isFixedContentSize anonymous() {
    return this.getFixedContentSize()
}

function getValue anonymous() {
    this.getValue.$$install && this.getValue.$$install();
    return this.getValue.apply(this, arguments);
}

function setValue anonymous(value) {
    this.$$setValueImpl.apply(this, arguments);
    return value;
}

function resetValue() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initValue() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeValue() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeValue() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getLabelWidth anonymous() {
    this.getLabelWidth.$$install && this.getLabelWidth.$$install();
    return this.getLabelWidth.apply(this, arguments);
}

function setLabelWidth anonymous() {
    this.setLabelWidth.$$install && this.setLabelWidth.$$install.call(this);
    return this.setLabelWidth.apply(this, arguments);
}

function resetLabelWidth() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initLabelWidth() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeLabelWidth() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeLabelWidth() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getTextAlign anonymous() {
    this.getTextAlign.$$install && this.getTextAlign.$$install();
    return this.getTextAlign.apply(this, arguments);
}

function setTextAlign anonymous() {
    this.setTextAlign.$$install && this.setTextAlign.$$install.call(this);
    return this.setTextAlign.apply(this, arguments);
}

function resetTextAlign() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initTextAlign() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeTextAlign() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeTextAlign() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedTextAlign() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedTextAlign() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function setAlliance(t, r) {
    var u = !1;
    r > 0 && ClientLib.Data.MainData.GetInstance().get_EndGame().HasAllianceWon(r) && (u = !0);
    this.__Ov.setVisibility(u ? i : n);
    this.__yS.setValue(t);
    r ? this.setAllianceId(r) : this.setAllianceId(webfrontend.gui.widgets.AllianceLabel.ESpecialNoAllianceName);
    this.getAllianceId() > 0 || t.length > 0 || this.getAllianceId() == webfrontend.gui.widgets.AllianceLabel.ESpecialAllianceIdMutants ? (this.setCursor(e), this.__yS.setAppearance(l)) : (this.resetCursor(), this.__yS.setAppearance(webfrontend.gui.widgets.AllianceLabel.AppearanceNoLink))
}

function setDefaultText() {
    this.__yS.setAppearance(webfrontend.gui.widgets.AllianceLabel.AppearanceNoLink)
}

function setNoAlliance() {
    this.__Ov.setVisibility(n);
    this.__yS.setValue(c);
    this.setAllianceId(webfrontend.gui.widgets.AllianceLabel.ESpecialNoLink);
    this.resetCursor();
    this.__yS.setAppearance(webfrontend.gui.widgets.AllianceLabel.AppearanceNoLink)
}

function setAdditionalFlexIcon(t, r) {
    this.__Ow != null && this.__Ow != t && (this.remove(this.__Ow), this.__Ow = null);
    this.__Ov.getVisibility() == n && this.getChildren().indexOf(t) > 0 && (this.remove(this.__Ow), this.__Ow = null);
    this.__Ov.getVisibility() == i && this.getChildren().indexOf(t) == 0 && (this.remove(this.__Ow), this.__Ow = null);
    this.getChildren().indexOf(t) == -1 && (this.__Ow = t, this.__Ov.getVisibility() == i ? this.add(this.__Ow) : this.addBefore(this.__Ow, this.__Ov), this.__Ow.setVisibility(r))
}

function _applyTextAlign(n) {
    this.__yS.setTextAlign(n)
}

function _applyRich(n) {
    this.__yS.setRich(n)
}

function _applyWrap(n) {
    this.__yS.setWrap(n)
}

function _applyValue(n) {
    this.__yS.setValue(n)
}

function _applyLabelWidth(n) {
    this.__yS.setWidth(n)
}

function _applyFixedContentSize() {}

function resetCursor anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_cursor;
    if (this.$$runtime_cursor !== undefined) {
        old = this.$$runtime_cursor;
    }
    if (this.$$user_cursor === undefined) return;
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_cursor !== undefined) {
        computed = this.$$runtime_cursor;
        delete this.$$user_cursor;
    } else if (this.$$user_cursor !== undefined) {
        delete this.$$user_cursor;
        if (this.$$runtime_cursor !== undefined) computed = this.$$runtime_cursor;
        if (this.$$theme_cursor !== undefined) computed = this.$$theme_cursor;
        else if (this.$$init_cursor !== undefined) {
            computed = this.$$init_cursor;
            this.$$useinit_cursor = true;
        }
    } else if (this.$$theme_cursor !== undefined) {} else if (this.$$useinit_cursor) {}
    if (computed === undefined || computed === inherit) {
        var pa = this.getLayoutParent();
        if (pa) computed = pa.$$inherit_cursor;
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
    promise = this._applyCursor(computed, old, "cursor", "reset");

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

function setThemedFont anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old = this.$$inherit_font;
        if (this.$$runtime_font !== undefined) {
            old = this.$$runtime_font;
        }
        if (equ.call(this, this.$$theme_font, value)) return value;
        var inherit = prop.$$inherit;
        var computed;
        if (this.$$runtime_font !== undefined) {
            computed = this.$$runtime_font;
            this.$$theme_font = value;
        } else if (this.$$user_font !== undefined) {
            computed = this.$$user_font;
            this.$$theme_font = value;
        } else if (this.$$theme_font !== undefined) {
            computed = this.$$theme_font = value;
        } else if (this.$$useinit_font) {
            delete this.$$useinit_font;
            computed = this.$$theme_font = value;
        } else {
            computed = this.$$theme_font = value;
        }
        if (computed === undefined || computed === inherit) {
            var pa = this.getLayoutParent();
            if (pa) computed = pa.$$inherit_font;
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
        promise = this._applyFont(computed, old, "font", "setThemed");

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
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function setThemedTextColor anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old = this.$$inherit_textColor;
        if (this.$$runtime_textColor !== undefined) {
            old = this.$$runtime_textColor;
        }
        if (equ.call(this, this.$$theme_textColor, value)) return value;
        var inherit = prop.$$inherit;
        var computed;
        if (this.$$runtime_textColor !== undefined) {
            computed = this.$$runtime_textColor;
            this.$$theme_textColor = value;
        } else if (this.$$user_textColor !== undefined) {
            computed = this.$$user_textColor;
            this.$$theme_textColor = value;
        } else if (this.$$theme_textColor !== undefined) {
            computed = this.$$theme_textColor = value;
        } else if (this.$$useinit_textColor) {
            delete this.$$useinit_textColor;
            computed = this.$$theme_textColor = value;
        } else {
            computed = this.$$theme_textColor = value;
        }
        if (computed === undefined || computed === inherit) {
            var pa = this.getLayoutParent();
            if (pa) computed = pa.$$inherit_textColor;
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
        promise = this._applyTextColor(computed, old, "textColor", "setThemed");

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
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}