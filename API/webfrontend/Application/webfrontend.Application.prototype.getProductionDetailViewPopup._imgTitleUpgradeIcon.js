function getSource anonymous(value) {
    if (this.$$runtime_source !== undefined) return this.$$runtime_source;
    if (this.$$user_source !== undefined) return this.$$user_source;
    else if (this.$$theme_source !== undefined) return this.$$theme_source;
    else return this.$$init_source;
}

function setSource anonymous(value) {
    this.$$setSourceImpl.apply(this, arguments);
    return value;
}

function resetSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getScale anonymous(value) {
    if (this.$$runtime_scale !== undefined) return this.$$runtime_scale;
    if (this.$$user_scale !== undefined) return this.$$user_scale;
    else if (this.$$theme_scale !== undefined) return this.$$theme_scale;
    else return this.$$init_scale;
}

function setScale anonymous(value) {
    this.$$setScaleImpl.apply(this, arguments);
    return value;
}

function resetScale() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initScale() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeScale() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeScale() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedScale() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedScale() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function toggleScale anonymous() {
    return this.setScale(!this.getScale())
}

function isScale anonymous() {
    return this.getScale()
}

function getForceRatio anonymous(value) {
    if (this.$$runtime_forceRatio !== undefined) return this.$$runtime_forceRatio;
    if (this.$$user_forceRatio !== undefined) return this.$$user_forceRatio;
    else return this.$$init_forceRatio;
}

function setForceRatio anonymous() {
    this.setForceRatio.$$install && this.setForceRatio.$$install.call(this);
    return this.setForceRatio.apply(this, arguments);
}

function resetForceRatio() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initForceRatio() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeForceRatio() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeForceRatio() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getAllowScaleUp anonymous(value) {
    if (this.$$runtime_allowScaleUp !== undefined) return this.$$runtime_allowScaleUp;
    if (this.$$user_allowScaleUp !== undefined) return this.$$user_allowScaleUp;
    else return this.$$init_allowScaleUp;
}

function setAllowScaleUp anonymous() {
    this.setAllowScaleUp.$$install && this.setAllowScaleUp.$$install.call(this);
    return this.setAllowScaleUp.apply(this, arguments);
}

function resetAllowScaleUp() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAllowScaleUp() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAllowScaleUp() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAllowScaleUp() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleAllowScaleUp anonymous() {
    return this.setAllowScaleUp(!this.getAllowScaleUp())
}

function isAllowScaleUp anonymous() {
    return this.getAllowScaleUp()
}

function _onChangeTheme() {
    qx.ui.core.Widget.prototype._onChangeTheme.call(this);
    this._styleSource()
}

function getContentElement() {
    return this.__lO()
}

function _createContentElement() {
    return this.__lO()
}

function _getContentHint() {
    return {
        width: this.__lF || 0,
        height: this.__lG || 0
    }
}

function _applyDecorator(n, t) {
    var i, r;
    qx.ui.core.Widget.prototype._applyDecorator.call(this, n, t);
    i = this.getSource();
    i = qx.util.AliasManager.getInstance().resolve(i);
    r = this.getContentElement();
    this.__lJ && (r = r.getChild(0));
    this.__lX(r, i)
}

function _applyTextColor(t) {
    if (this.__lM() === n) {
        var i = this.getContentElement();
        this.__lJ && (i = i.getChild(0));
        t ? i.setStyle(d, qx.theme.manager.Color.getInstance().resolve(t)) : i.removeStyle(d)
    }
}

function _applyPadding(n, t, i) {
    qx.ui.core.Widget.prototype._applyPadding.call(this, n, t, i);
    var r = this.getContentElement();
    this.__lJ ? r.getChild(0).setStyles({
        top: this.getPaddingTop() || 0,
        left: this.getPaddingLeft() || 0
    }) : this.__lM() === ni ? r.setStyles({
        top: this.getPaddingTop() || 0,
        left: this.getPaddingLeft() || 0
    }) : r.setPadding(this.getPaddingLeft() || 0, this.getPaddingTop() || 0)
}

function renderLayout(n, t, i, r) {
    qx.ui.core.Widget.prototype.renderLayout.call(this, n, t, i, r);
    var u = this.getContentElement();
    this.__lJ && u.getChild(0).setStyles({
        width: i - (this.getPaddingLeft() || 0) - (this.getPaddingRight() || 0),
        height: r - (this.getPaddingTop() || 0) - (this.getPaddingBottom() || 0),
        top: this.getPaddingTop() || 0,
        left: this.getPaddingLeft() || 0
    })
}

function _applyEnabled(n, t) {
    qx.ui.core.Widget.prototype._applyEnabled.call(this, n, t);
    this.getSource() && this._styleSource()
}

function _transformSource(n) {
    n = qx.util.AliasManager.getInstance().resolve(n);
    var t = !n || n.indexOf(r) < 0 ? n : n.substr(n.indexOf(r) + r.length);
    return typeof ClientLib != st && !!ClientLib.File.FileManager.GetInstance().GetPhysicalPath(t) ? ClientLib.File.FileManager.GetInstance().GetPhysicalPath(t) : n
}

function _applySource(n, t) {
    t && qx.io.ImageLoader.isLoading(t) && qx.io.ImageLoader.abort(t);
    this._styleSource()
}

function _applyScale() {
    this._styleSource()
}

function _styleSource() {
    var l = qx.util.AliasManager.getInstance(),
        t = qx.util.ResourceManager.getInstance(),
        n = l.resolve(this.getSource()),
        u = this.getContentElement(),
        h, r, e, f, o, s, c;
    if (this.__lJ && (u = u.getChild(0)), !n) {
        this.__lW(u);
        return
    }
    this.__lR(n);
    qx.core.Environment.get(ft) == yi && (parseInt(qx.core.Environment.get(lt), 10) < 9 || qx.core.Environment.get(ii) < 9) && (h = this.getScale() ? b : v, u.tagNameHint = qx.bom.element.Decoration.getTagName(h, n));
    r = this.__lQ();
    t.isFontUri(n) ? (this.__lT(r, n), e = this.getTextColor(), qx.lang.Type.isString(e) && this._applyTextColor(e, null)) : t.has(n) ? (f = t.findHighResolutionSource(n), f && (o = t.getImageWidth(n), s = t.getImageHeight(n), this.setWidth(o), this.setHeight(s), c = o + si + s + i, this.__lI.setStyle(vt, c), this.setSource(f), n = f), this.__lT(r, n), this.__lP()) : qx.io.ImageLoader.isLoaded(n) ? (this.__lU(r, n), this.__lP()) : this.__lV(r, n)
}

function _applyDimension() {
    var t, n, s;
    if (qx.ui.core.Widget.prototype._applyDimension.call(this), t = this.getSource() && qx.lang.String.startsWith(this.getSource(), f), t) {
        if (n = this.getContentElement(), n)
            if (this.getScale()) {
                var r = this.getSizeHint(),
                    u = this.getWidth() || r.width || 40,
                    e = this.getHeight() || r.height || 40;
                n.setStyle(o, (u > e ? e : u) + i)
            } else s = qx.theme.manager.Font.getInstance().resolve(this.getSource().match(/@([^/]+)/)[1]), n.setStyle(o, s.getSize() + i)
    } else this.__ma()
}

function _recalc(n, t) {
    var u = this.getMaxWidth(),
        e = this.getMaxHeight(),
        o = this.getMinWidth(),
        s = this.getMinHeight(),
        i = n,
        r = t,
        f = t / n;
    switch (this.getForceRatio()) {
        case gi:
            e !== null && r > e ? (r = e, i = r / f) : r < s && (r = s, i = r / f);
            r < e && this.isAllowScaleUp() && (r = e, i = r / f);
            break;
        case di:
            u !== null && i > u ? (i = u, r = i * f) : i < o && (i = o, r = i * f);
            i < u && this.isAllowScaleUp() && (i = u, r = i * f);
            break;
        case dt:
        case yt:
            u !== null && i > u ? (i = u, r = i * f) : i < o && (i = o, r = i * f);
            i < u && this.isAllowScaleUp() && (i = u, r = i * f);
            e !== null && r > e && (r = e, i = r / f)
    }
    return (i = Math.round(i), r = Math.round(r), i != this.__lF || r != this.__lG) ? (this.__lF = i, this.__lG = r, !0) : !1
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