function add(t) {
    this.getChildControl(n).add(t)
}

function remove(t) {
    this.getChildControl(n).remove(t)
}

function _getContentPaddingTarget() {
    return this.getChildControl(n)
}

function getContentPaddingTop anonymous() {
    this.getContentPaddingTop.$$install && this.getContentPaddingTop.$$install();
    return this.getContentPaddingTop.apply(this, arguments);
}

function setContentPaddingTop anonymous() {
    this.setContentPaddingTop.$$install && this.setContentPaddingTop.$$install.call(this);
    return this.setContentPaddingTop.apply(this, arguments);
}

function resetContentPaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initContentPaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeContentPaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeContentPaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedContentPaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedContentPaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getContentPaddingRight anonymous() {
    this.getContentPaddingRight.$$install && this.getContentPaddingRight.$$install();
    return this.getContentPaddingRight.apply(this, arguments);
}

function setContentPaddingRight anonymous() {
    this.setContentPaddingRight.$$install && this.setContentPaddingRight.$$install.call(this);
    return this.setContentPaddingRight.apply(this, arguments);
}

function resetContentPaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initContentPaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeContentPaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeContentPaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedContentPaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedContentPaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getContentPaddingBottom anonymous() {
    this.getContentPaddingBottom.$$install && this.getContentPaddingBottom.$$install();
    return this.getContentPaddingBottom.apply(this, arguments);
}

function setContentPaddingBottom anonymous() {
    this.setContentPaddingBottom.$$install && this.setContentPaddingBottom.$$install.call(this);
    return this.setContentPaddingBottom.apply(this, arguments);
}

function resetContentPaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initContentPaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeContentPaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeContentPaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedContentPaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedContentPaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getContentPaddingLeft anonymous() {
    this.getContentPaddingLeft.$$install && this.getContentPaddingLeft.$$install();
    return this.getContentPaddingLeft.apply(this, arguments);
}

function setContentPaddingLeft anonymous() {
    this.setContentPaddingLeft.$$install && this.setContentPaddingLeft.$$install.call(this);
    return this.setContentPaddingLeft.apply(this, arguments);
}

function resetContentPaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initContentPaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeContentPaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeContentPaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedContentPaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedContentPaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function setContentPadding anonymous() {
    var a = arguments[0] instanceof Array ? arguments[0] : arguments;
    a = qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));
    this.setContentPaddingTop(a[0]);
    this.setContentPaddingRight(a[1]);
    this.setContentPaddingBottom(a[2]);
    this.setContentPaddingLeft(a[3]);
}

function resetContentPadding anonymous() {
    this.resetContentPaddingTop();
    this.resetContentPaddingRight();
    this.resetContentPaddingBottom();
    this.resetContentPaddingLeft();
}

function setThemedContentPadding anonymous() {
    var a = arguments[0] instanceof Array ? arguments[0] : arguments;
    a = qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));
    this.setThemedContentPaddingTop(a[0]);
    this.setThemedContentPaddingRight(a[1]);
    this.setThemedContentPaddingBottom(a[2]);
    this.setThemedContentPaddingLeft(a[3]);
}

function resetThemedContentPadding anonymous() {
    this.resetThemedContentPaddingTop();
    this.resetThemedContentPaddingRight();
    this.resetThemedContentPaddingBottom();
    this.resetThemedContentPaddingLeft();
}

function _applyContentPadding(n, t, u, f) {
    var o = this._getContentPaddingTarget(),
        s, e;
    n == null ? (s = this.__rX[u], o[s]()) : f == r || f == i ? (e = this.__rW[u], o[e](n)) : (e = this.__rV[u], o[e](n))
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

function setThemedMinHeight anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_minHeight !== undefined) {
            old = this.$$runtime_minHeight;
        } else if (this.$$user_minHeight !== undefined) {
            old = this.$$user_minHeight;
        } else if (this.$$theme_minHeight !== undefined) {
            old = this.$$theme_minHeight;
        } else if (this.$$useinit_minHeight) {
            old = this.$$init_minHeight;
        }
        if (equ.call(this, this.$$theme_minHeight, value)) return value;
        var computed;
        if (this.$$runtime_minHeight !== undefined) {
            computed = this.$$runtime_minHeight;
            this.$$theme_minHeight = value;
        } else if (this.$$user_minHeight !== undefined) {
            computed = this.$$user_minHeight;
            this.$$theme_minHeight = value;
        } else if (this.$$theme_minHeight !== undefined) {
            computed = this.$$theme_minHeight = value;
        } else if (this.$$useinit_minHeight) {
            delete this.$$useinit_minHeight;
            computed = this.$$theme_minHeight = value;
        } else {
            computed = this.$$theme_minHeight = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_minHeight;
        var self = this;
        var promise;
        promise = this._applyDimension(computed, old, "minHeight", "setThemed");

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

function setThemedMinWidth anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_minWidth !== undefined) {
            old = this.$$runtime_minWidth;
        } else if (this.$$user_minWidth !== undefined) {
            old = this.$$user_minWidth;
        } else if (this.$$theme_minWidth !== undefined) {
            old = this.$$theme_minWidth;
        } else if (this.$$useinit_minWidth) {
            old = this.$$init_minWidth;
        }
        if (equ.call(this, this.$$theme_minWidth, value)) return value;
        var computed;
        if (this.$$runtime_minWidth !== undefined) {
            computed = this.$$runtime_minWidth;
            this.$$theme_minWidth = value;
        } else if (this.$$user_minWidth !== undefined) {
            computed = this.$$user_minWidth;
            this.$$theme_minWidth = value;
        } else if (this.$$theme_minWidth !== undefined) {
            computed = this.$$theme_minWidth = value;
        } else if (this.$$useinit_minWidth) {
            delete this.$$useinit_minWidth;
            computed = this.$$theme_minWidth = value;
        } else {
            computed = this.$$theme_minWidth = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_minWidth;
        var self = this;
        var promise;
        promise = this._applyDimension(computed, old, "minWidth", "setThemed");

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