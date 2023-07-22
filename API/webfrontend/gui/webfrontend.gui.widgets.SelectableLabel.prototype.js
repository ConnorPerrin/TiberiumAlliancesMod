function getRich anonymous(value) {
    if (this.$$runtime_rich !== undefined) return this.$$runtime_rich;
    if (this.$$user_rich !== undefined) return this.$$user_rich;
    else return this.$$init_rich;
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

function getWrap anonymous(value) {
    if (this.$$runtime_wrap !== undefined) return this.$$runtime_wrap;
    if (this.$$user_wrap !== undefined) return this.$$user_wrap;
    else return this.$$init_wrap;
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

function getBreakWithinWords anonymous(value) {
    if (this.$$runtime_breakWithinWords !== undefined) return this.$$runtime_breakWithinWords;
    if (this.$$user_breakWithinWords !== undefined) return this.$$user_breakWithinWords;
    else return this.$$init_breakWithinWords;
}

function setBreakWithinWords anonymous() {
    this.setBreakWithinWords.$$install && this.setBreakWithinWords.$$install.call(this);
    return this.setBreakWithinWords.apply(this, arguments);
}

function resetBreakWithinWords() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initBreakWithinWords() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeBreakWithinWords() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeBreakWithinWords() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleBreakWithinWords anonymous() {
    return this.setBreakWithinWords(!this.getBreakWithinWords())
}

function isBreakWithinWords anonymous() {
    return this.getBreakWithinWords()
}

function getValue anonymous(value) {
    if (this.$$runtime_value !== undefined) return this.$$runtime_value;
    if (this.$$user_value !== undefined) return this.$$user_value;
    else return null;
}

function setValue anonymous(value) {
    this.$$setValueImpl.apply(this, arguments);
    return value;
}

function resetValue anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_value !== undefined) {
        old = this.$$runtime_value;
    } else if (this.$$user_value !== undefined) {
        old = this.$$user_value;
    } else if (this.$$useinit_value) {
        old = this.$$init_value;
    }
    if (this.$$user_value === undefined) return;
    var computed;
    if (this.$$runtime_value !== undefined) {
        computed = this.$$runtime_value;
        delete this.$$user_value;
    } else if (this.$$user_value !== undefined) {
        delete this.$$user_value;
        if (this.$$runtime_value !== undefined) computed = this.$$runtime_value;
        if (this.$$theme_value !== undefined) computed = this.$$theme_value;
        else if (this.$$init_value !== undefined) {
            computed = this.$$init_value;
            this.$$useinit_value = true;
        }
    } else if (this.$$useinit_value) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyValue(computed, old, "value", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeValue')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeValue', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeValueAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeValueAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initValue() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeValue() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeValue() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getBuddy anonymous() {
    this.getBuddy.$$install && this.getBuddy.$$install();
    return this.getBuddy.apply(this, arguments);
}

function setBuddy anonymous() {
    this.setBuddy.$$install && this.setBuddy.$$install.call(this);
    return this.setBuddy.apply(this, arguments);
}

function resetBuddy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initBuddy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeBuddy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeBuddy() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getTextAlign anonymous() {
    this.getTextAlign.$$install && this.getTextAlign.$$install();
    return this.getTextAlign.apply(this, arguments);
}

function setTextAlign anonymous(value) {
    this.$$setTextAlignImpl.apply(this, arguments);
    return value;
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

function _getContentHint() {
    return this.__nP && (this.__nS = this.__nT(), delete this.__nP), {
        width: this.__nS.width,
        height: this.__nS.height
    }
}

function _hasHeightForWidth() {
    return this.getRich() && this.getWrap()
}

function _applySelectable(n) {
    (qx.core.Environment.get(p) || !qx.core.Environment.get(w) || !n || this.isRich()) && qx.ui.core.Widget.prototype._applySelectable.call(this, n)
}

function _getContentHeightForWidth(n) {
    return !this.getRich() && !this.getWrap() ? null : this.__nT(n).height
}

function _createContentElement() {
    return new qx.html.Label
}

function _applyTextAlign(n) {
    this.getContentElement().setStyle(d, n)
}

function _applyTextColor(n) {
    n ? this.getContentElement().setStyle(i, qx.theme.manager.Color.getInstance().resolve(n)) : this.getContentElement().removeStyle(i)
}

function _applyFont(n, t) {
    t && this.__nO && this.__nR && (this.__nO.removeListenerById(this.__nR), this.__nR = null);
    var r;
    n ? (this.__nO = qx.theme.manager.Font.getInstance().resolve(n), this.__nO instanceof qx.bom.webfonts.WebFont && (this.__nR = this.__nO.addListener(a, this._onWebFontStatusChange, this)), r = this.__nO.getStyles()) : (this.__nO = null, r = qx.bom.Font.getDefaultStyles());
    this.getTextColor() != null && delete r[i];
    this.getContentElement().setStyles(r);
    this.__nP = !0;
    qx.ui.core.queue.Layout.add(this)
}

function _applyBuddy(n, t) {
    t != null && (this.removeRelatedBindings(t), this.removeListenerById(this.__nQ), this.__nQ = null);
    n != null && (n.bind(u, this, u), this.__nQ = this.addListener(rt, function() {
        n.isFocusable() && n.focus.apply(n);
        b in n && typeof n.toggleValue === g && n.toggleValue()
    }, this))
}

function _applyRich(n) {
    this.getContentElement().setRich(n);
    this.__nP = !0;
    qx.ui.core.queue.Layout.add(this)
}

function _applyWrap(n) {
    if (n && !this.isRich(), this.isRich()) {
        var t = n ? e : l;
        this.getContentElement().setStyle(k, t)
    }
}

function _applyBreakWithinWords(n) {
    this.isRich() && this.getContentElement().setStyle(c, n ? r : e)
}

function _onChangeLocale() {
    var n = this.getValue();
    n && n.translate && this.setValue(n.translate())
}

function _onWebFontStatusChange(n) {
    n.getData().valid === !0 && (qx.core.Environment.get(v) == s && parseFloat(qx.core.Environment.get(tt)) >= 8 && window.setTimeout(function() {
        this.__nP = !0;
        qx.ui.core.queue.Layout.add(this)
    }.bind(this), 0), this.__nP = !0, qx.ui.core.queue.Layout.add(this))
}

function _applyValue(n) {
    n && n.translate ? this.getContentElement().setValue(n.translate()) : this.getContentElement().setValue(n);
    this.__nP = !0;
    qx.ui.core.queue.Layout.add(this)
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

function setThemedOpacity anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_opacity !== undefined) {
            old = this.$$runtime_opacity;
        } else if (this.$$user_opacity !== undefined) {
            old = this.$$user_opacity;
        } else if (this.$$theme_opacity !== undefined) {
            old = this.$$theme_opacity;
        } else if (this.$$useinit_opacity) {
            old = this.$$init_opacity;
        }
        if (equ.call(this, this.$$theme_opacity, value)) return value;
        var computed;
        if (this.$$runtime_opacity !== undefined) {
            computed = this.$$runtime_opacity;
            this.$$theme_opacity = value;
        } else if (this.$$user_opacity !== undefined) {
            computed = this.$$user_opacity;
            this.$$theme_opacity = value;
        } else if (this.$$theme_opacity !== undefined) {
            computed = this.$$theme_opacity = value;
        } else if (this.$$useinit_opacity) {
            delete this.$$useinit_opacity;
            computed = this.$$theme_opacity = value;
        } else {
            computed = this.$$theme_opacity = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_opacity;
        var self = this;
        var promise;
        promise = this._applyOpacity(computed, old, "opacity", "setThemed");

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

function resetThemedTextColor anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_textColor;
    if (this.$$runtime_textColor !== undefined) {
        old = this.$$runtime_textColor;
    }
    if (this.$$theme_textColor === undefined) return;
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_textColor !== undefined) {
        computed = this.$$runtime_textColor;
        delete this.$$theme_textColor;
    } else if (this.$$user_textColor !== undefined) {
        computed = this.$$user_textColor;
        delete this.$$theme_textColor;
    } else if (this.$$theme_textColor !== undefined) {
        delete this.$$theme_textColor;
        if (this.$$init_textColor !== undefined) {
            computed = this.$$init_textColor;
            this.$$useinit_textColor = true;
        }
    } else if (this.$$useinit_textColor) {}
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
    promise = this._applyTextColor(computed, old, "textColor", "resetThemed");

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