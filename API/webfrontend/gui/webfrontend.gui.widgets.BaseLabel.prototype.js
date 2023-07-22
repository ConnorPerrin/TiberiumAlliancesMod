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

function getBaseId anonymous() {
    this.getBaseId.$$install && this.getBaseId.$$install();
    return this.getBaseId.apply(this, arguments);
}

function setBaseId anonymous(value) {
    this.$$setBaseIdImpl.apply(this, arguments);
    return value;
}

function resetBaseId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeBaseId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeBaseId() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setBase(n, f) {
    this.setValue(n);
    this.setBaseId(f);
    f > 0 ? (this.setCursor(i), this.setAppearance(u)) : (this.setCursor(t), this.setAppearance(r))
}

function _onClickBaseLabel(n) {
    this.getBaseId() > 0 && webfrontend.gui.info.BaseInfoWindow.getInstance().openWithBaseId(this.getBaseId());
    n.stopPropagation()
}