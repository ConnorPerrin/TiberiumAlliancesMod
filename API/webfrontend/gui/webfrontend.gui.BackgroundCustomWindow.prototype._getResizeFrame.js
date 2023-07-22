function getPaddingTop anonymous(value) {
    if (this.$$runtime_paddingTop !== undefined) return this.$$runtime_paddingTop;
    if (this.$$user_paddingTop !== undefined) return this.$$user_paddingTop;
    else if (this.$$theme_paddingTop !== undefined) return this.$$theme_paddingTop;
    else return this.$$init_paddingTop;
}

function setPaddingTop anonymous(value) {
    this.$$setPaddingTopImpl.apply(this, arguments);
    return value;
}

function resetPaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initPaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimePaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedPaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedPaddingTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getPaddingRight anonymous(value) {
    if (this.$$runtime_paddingRight !== undefined) return this.$$runtime_paddingRight;
    if (this.$$user_paddingRight !== undefined) return this.$$user_paddingRight;
    else if (this.$$theme_paddingRight !== undefined) return this.$$theme_paddingRight;
    else return this.$$init_paddingRight;
}

function setPaddingRight anonymous(value) {
    this.$$setPaddingRightImpl.apply(this, arguments);
    return value;
}

function resetPaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initPaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimePaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedPaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedPaddingRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getPaddingBottom anonymous(value) {
    if (this.$$runtime_paddingBottom !== undefined) return this.$$runtime_paddingBottom;
    if (this.$$user_paddingBottom !== undefined) return this.$$user_paddingBottom;
    else if (this.$$theme_paddingBottom !== undefined) return this.$$theme_paddingBottom;
    else return this.$$init_paddingBottom;
}

function setPaddingBottom anonymous(value) {
    this.$$setPaddingBottomImpl.apply(this, arguments);
    return value;
}

function resetPaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initPaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimePaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedPaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedPaddingBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getPaddingLeft anonymous(value) {
    if (this.$$runtime_paddingLeft !== undefined) return this.$$runtime_paddingLeft;
    if (this.$$user_paddingLeft !== undefined) return this.$$user_paddingLeft;
    else if (this.$$theme_paddingLeft !== undefined) return this.$$theme_paddingLeft;
    else return this.$$init_paddingLeft;
}

function setPaddingLeft anonymous(value) {
    this.$$setPaddingLeftImpl.apply(this, arguments);
    return value;
}

function resetPaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initPaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimePaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedPaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedPaddingLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function setPadding anonymous() {
    var a = arguments[0] instanceof Array ? arguments[0] : arguments;
    a = qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));
    this.setPaddingTop(a[0]);
    this.setPaddingRight(a[1]);
    this.setPaddingBottom(a[2]);
    this.setPaddingLeft(a[3]);
}

function resetPadding anonymous() {
    this.resetPaddingTop();
    this.resetPaddingRight();
    this.resetPaddingBottom();
    this.resetPaddingLeft();
}

function setThemedPadding anonymous() {
    var a = arguments[0] instanceof Array ? arguments[0] : arguments;
    a = qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));
    this.setThemedPaddingTop(a[0]);
    this.setThemedPaddingRight(a[1]);
    this.setThemedPaddingBottom(a[2]);
    this.setThemedPaddingLeft(a[3]);
}

function resetThemedPadding anonymous() {
    this.resetThemedPaddingTop();
    this.resetThemedPaddingRight();
    this.resetThemedPaddingBottom();
    this.resetThemedPaddingLeft();
}

function getZIndex anonymous(value) {
    if (this.$$runtime_zIndex !== undefined) return this.$$runtime_zIndex;
    if (this.$$user_zIndex !== undefined) return this.$$user_zIndex;
    else if (this.$$theme_zIndex !== undefined) return this.$$theme_zIndex;
    else return this.$$init_zIndex;
}

function setZIndex anonymous(value) {
    this.$$setZIndexImpl.apply(this, arguments);
    return value;
}

function resetZIndex() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initZIndex() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeZIndex() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeZIndex() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedZIndex() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedZIndex() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getDecorator anonymous(value) {
    if (this.$$runtime_decorator !== undefined) return this.$$runtime_decorator;
    if (this.$$user_decorator !== undefined) return this.$$user_decorator;
    else if (this.$$theme_decorator !== undefined) return this.$$theme_decorator;
    else return this.$$init_decorator;
}

function setDecorator anonymous(value) {
    this.$$setDecoratorImpl.apply(this, arguments);
    return value;
}

function resetDecorator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initDecorator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeDecorator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDecorator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedDecorator anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_decorator !== undefined) {
            old = this.$$runtime_decorator;
        } else if (this.$$user_decorator !== undefined) {
            old = this.$$user_decorator;
        } else if (this.$$theme_decorator !== undefined) {
            old = this.$$theme_decorator;
        } else if (this.$$useinit_decorator) {
            old = this.$$init_decorator;
        }
        if (equ.call(this, this.$$theme_decorator, value)) return value;
        var computed;
        if (this.$$runtime_decorator !== undefined) {
            computed = this.$$runtime_decorator;
            this.$$theme_decorator = value;
        } else if (this.$$user_decorator !== undefined) {
            computed = this.$$user_decorator;
            this.$$theme_decorator = value;
        } else if (this.$$theme_decorator !== undefined) {
            computed = this.$$theme_decorator = value;
        } else if (this.$$useinit_decorator) {
            delete this.$$useinit_decorator;
            computed = this.$$theme_decorator = value;
        } else {
            computed = this.$$theme_decorator = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_decorator;
        var self = this;
        var promise;
        promise = this._applyDecorator(computed, old, "decorator", "setThemed");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeDecorator')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeDecorator', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeDecoratorAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeDecoratorAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetThemedDecorator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getBackgroundColor anonymous(value) {
    if (this.$$runtime_backgroundColor !== undefined) return this.$$runtime_backgroundColor;
    if (this.$$user_backgroundColor !== undefined) return this.$$user_backgroundColor;
    else if (this.$$theme_backgroundColor !== undefined) return this.$$theme_backgroundColor;
    else return null;
}

function setBackgroundColor anonymous(value) {
    this.$$setBackgroundColorImpl.apply(this, arguments);
    return value;
}

function resetBackgroundColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initBackgroundColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeBackgroundColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeBackgroundColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedBackgroundColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedBackgroundColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getTextColor anonymous(value) {
    if (this.$$runtime_textColor !== undefined) return this.$$runtime_textColor;
    else if (this.$$inherit_textColor !== undefined) return this.$$inherit_textColor;
    else if (this.$$user_textColor !== undefined) return this.$$user_textColor;
    else if (this.$$theme_textColor !== undefined) return this.$$theme_textColor;
    else return null;
}

function setTextColor anonymous(value) {
    this.$$setTextColorImpl.apply(this, arguments);
    return value;
}

function resetTextColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initTextColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
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

function setRuntimeTextColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeTextColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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

function resetThemedTextColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getFont anonymous(value) {
    if (this.$$runtime_font !== undefined) return this.$$runtime_font;
    else if (this.$$inherit_font !== undefined) return this.$$inherit_font;
    else if (this.$$user_font !== undefined) return this.$$user_font;
    else if (this.$$theme_font !== undefined) return this.$$theme_font;
    else return null;
}

function setFont anonymous(value) {
    this.$$setFontImpl.apply(this, arguments);
    return value;
}

function resetFont() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initFont() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
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

function setRuntimeFont() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeFont() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedFont() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedFont() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getOpacity anonymous() {
    this.getOpacity.$$install && this.getOpacity.$$install();
    return this.getOpacity.apply(this, arguments);
}

function setOpacity anonymous(value) {
    this.$$setOpacityImpl.apply(this, arguments);
    return value;
}

function resetOpacity() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initOpacity() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeOpacity() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeOpacity() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedOpacity() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedOpacity() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getCursor anonymous(value) {
    if (this.$$runtime_cursor !== undefined) return this.$$runtime_cursor;
    else if (this.$$inherit_cursor !== undefined) return this.$$inherit_cursor;
    else if (this.$$user_cursor !== undefined) return this.$$user_cursor;
    else if (this.$$theme_cursor !== undefined) return this.$$theme_cursor;
    else var init = this.$$init_cursor;
    if (init == qx.core.Property.$$inherit) init = null;
    return init;
}

function setCursor anonymous(value) {
    this.$$setCursorImpl.apply(this, arguments);
    return value;
}

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

function initCursor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
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

function setRuntimeCursor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCursor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedCursor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedCursor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getToolTip anonymous(value) {
    if (this.$$runtime_toolTip !== undefined) return this.$$runtime_toolTip;
    if (this.$$user_toolTip !== undefined) return this.$$user_toolTip;
    else return null;
}

function setToolTip anonymous(value) {
    this.$$setToolTipImpl.apply(this, arguments);
    return value;
}

function resetToolTip() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeToolTip() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeToolTip() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getToolTipText anonymous(value) {
    if (this.$$runtime_toolTipText !== undefined) return this.$$runtime_toolTipText;
    if (this.$$user_toolTipText !== undefined) return this.$$user_toolTipText;
    else return null;
}

function setToolTipText anonymous(value) {
    this.$$setToolTipTextImpl.apply(this, arguments);
    return value;
}

function resetToolTipText() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initToolTipText() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeToolTipText() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeToolTipText() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getToolTipIcon anonymous(value) {
    if (this.$$runtime_toolTipIcon !== undefined) return this.$$runtime_toolTipIcon;
    if (this.$$user_toolTipIcon !== undefined) return this.$$user_toolTipIcon;
    else return null;
}

function setToolTipIcon anonymous() {
    this.setToolTipIcon.$$install && this.setToolTipIcon.$$install.call(this);
    return this.setToolTipIcon.apply(this, arguments);
}

function resetToolTipIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initToolTipIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeToolTipIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeToolTipIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getBlockToolTip anonymous(value) {
    if (this.$$runtime_blockToolTip !== undefined) return this.$$runtime_blockToolTip;
    if (this.$$user_blockToolTip !== undefined) return this.$$user_blockToolTip;
    else return this.$$init_blockToolTip;
}

function setBlockToolTip anonymous(value) {
    this.$$setBlockToolTipImpl.apply(this, arguments);
    return value;
}

function resetBlockToolTip() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeBlockToolTip() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeBlockToolTip() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleBlockToolTip anonymous() {
    return this.setBlockToolTip(!this.getBlockToolTip())
}

function isBlockToolTip anonymous() {
    return this.getBlockToolTip()
}

function getShowToolTipWhenDisabled anonymous() {
    this.getShowToolTipWhenDisabled.$$install && this.getShowToolTipWhenDisabled.$$install();
    return this.getShowToolTipWhenDisabled.apply(this, arguments);
}

function setShowToolTipWhenDisabled anonymous(value) {
    this.$$setShowToolTipWhenDisabledImpl.apply(this, arguments);
    return value;
}

function resetShowToolTipWhenDisabled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeShowToolTipWhenDisabled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeShowToolTipWhenDisabled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleShowToolTipWhenDisabled anonymous() {
    return this.setShowToolTipWhenDisabled(!this.getShowToolTipWhenDisabled())
}

function isShowToolTipWhenDisabled anonymous() {
    return this.getShowToolTipWhenDisabled()
}

function getVisibility anonymous(value) {
    if (this.$$runtime_visibility !== undefined) return this.$$runtime_visibility;
    if (this.$$user_visibility !== undefined) return this.$$user_visibility;
    else return this.$$init_visibility;
}

function setVisibility anonymous(value) {
    this.$$setVisibilityImpl.apply(this, arguments);
    return value;
}

function resetVisibility() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initVisibility() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeVisibility() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeVisibility() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getEnabled anonymous(value) {
    if (this.$$runtime_enabled !== undefined) return this.$$runtime_enabled;
    else if (this.$$inherit_enabled !== undefined) return this.$$inherit_enabled;
    else if (this.$$user_enabled !== undefined) return this.$$user_enabled;
    else var init = this.$$init_enabled;
    return init;
}

function setEnabled anonymous(value) {
    this.$$setEnabledImpl.apply(this, arguments);
    return value;
}

function resetEnabled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initEnabled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
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

function setRuntimeEnabled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeEnabled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleEnabled anonymous() {
    return this.setEnabled(!this.getEnabled())
}

function isEnabled anonymous() {
    return this.getEnabled()
}

function getAnonymous anonymous(value) {
    if (this.$$runtime_anonymous !== undefined) return this.$$runtime_anonymous;
    if (this.$$user_anonymous !== undefined) return this.$$user_anonymous;
    else return this.$$init_anonymous;
}

function setAnonymous anonymous(value) {
    this.$$setAnonymousImpl.apply(this, arguments);
    return value;
}

function resetAnonymous() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAnonymous() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAnonymous() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAnonymous() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleAnonymous anonymous() {
    return this.setAnonymous(!this.getAnonymous())
}

function isAnonymous anonymous() {
    return this.getAnonymous()
}

function getTabIndex anonymous(value) {
    if (this.$$runtime_tabIndex !== undefined) return this.$$runtime_tabIndex;
    if (this.$$user_tabIndex !== undefined) return this.$$user_tabIndex;
    else return null;
}

function setTabIndex anonymous(value) {
    this.$$setTabIndexImpl.apply(this, arguments);
    return value;
}

function resetTabIndex() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initTabIndex() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeTabIndex() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeTabIndex() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getFocusable anonymous(value) {
    if (this.$$runtime_focusable !== undefined) return this.$$runtime_focusable;
    if (this.$$user_focusable !== undefined) return this.$$user_focusable;
    else return this.$$init_focusable;
}

function setFocusable anonymous(value) {
    this.$$setFocusableImpl.apply(this, arguments);
    return value;
}

function resetFocusable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
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

function setRuntimeFocusable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeFocusable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleFocusable anonymous() {
    return this.setFocusable(!this.getFocusable())
}

function isFocusable anonymous() {
    return this.getFocusable()
}

function getKeepFocus anonymous() {
    this.getKeepFocus.$$install && this.getKeepFocus.$$install();
    return this.getKeepFocus.apply(this, arguments);
}

function setKeepFocus anonymous(value) {
    this.$$setKeepFocusImpl.apply(this, arguments);
    return value;
}

function resetKeepFocus() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initKeepFocus() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeKeepFocus() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeKeepFocus() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleKeepFocus anonymous() {
    return this.setKeepFocus(!this.getKeepFocus())
}

function isKeepFocus anonymous() {
    return this.getKeepFocus()
}

function getKeepActive anonymous() {
    this.getKeepActive.$$install && this.getKeepActive.$$install();
    return this.getKeepActive.apply(this, arguments);
}

function setKeepActive anonymous(value) {
    this.$$setKeepActiveImpl.apply(this, arguments);
    return value;
}

function resetKeepActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initKeepActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeKeepActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeKeepActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleKeepActive anonymous() {
    return this.setKeepActive(!this.getKeepActive())
}

function isKeepActive anonymous() {
    return this.getKeepActive()
}

function getDraggable anonymous(value) {
    if (this.$$runtime_draggable !== undefined) return this.$$runtime_draggable;
    if (this.$$user_draggable !== undefined) return this.$$user_draggable;
    else return this.$$init_draggable;
}

function setDraggable anonymous(value) {
    this.$$setDraggableImpl.apply(this, arguments);
    return value;
}

function resetDraggable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initDraggable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeDraggable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDraggable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleDraggable anonymous() {
    return this.setDraggable(!this.getDraggable())
}

function isDraggable anonymous() {
    return this.getDraggable()
}

function getDroppable anonymous(value) {
    if (this.$$runtime_droppable !== undefined) return this.$$runtime_droppable;
    if (this.$$user_droppable !== undefined) return this.$$user_droppable;
    else return this.$$init_droppable;
}

function setDroppable anonymous(value) {
    this.$$setDroppableImpl.apply(this, arguments);
    return value;
}

function resetDroppable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initDroppable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeDroppable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDroppable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleDroppable anonymous() {
    return this.setDroppable(!this.getDroppable())
}

function isDroppable anonymous() {
    return this.getDroppable()
}

function getSelectable anonymous(value) {
    if (this.$$runtime_selectable !== undefined) return this.$$runtime_selectable;
    if (this.$$user_selectable !== undefined) return this.$$user_selectable;
    else return this.$$init_selectable;
}

function setSelectable anonymous(value) {
    this.$$setSelectableImpl.apply(this, arguments);
    return value;
}

function resetSelectable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
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

function setRuntimeSelectable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSelectable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleSelectable anonymous() {
    return this.setSelectable(!this.getSelectable())
}

function isSelectable anonymous() {
    return this.getSelectable()
}

function getContextMenu anonymous(value) {
    if (this.$$runtime_contextMenu !== undefined) return this.$$runtime_contextMenu;
    if (this.$$user_contextMenu !== undefined) return this.$$user_contextMenu;
    else return null;
}

function setContextMenu anonymous() {
    this.setContextMenu.$$install && this.setContextMenu.$$install.call(this);
    return this.setContextMenu.apply(this, arguments);
}

function resetContextMenu() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initContextMenu() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeContextMenu() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeContextMenu() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getNativeContextMenu anonymous() {
    this.getNativeContextMenu.$$install && this.getNativeContextMenu.$$install();
    return this.getNativeContextMenu.apply(this, arguments);
}

function setNativeContextMenu anonymous() {
    this.setNativeContextMenu.$$install && this.setNativeContextMenu.$$install.call(this);
    return this.setNativeContextMenu.apply(this, arguments);
}

function resetNativeContextMenu() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
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

function setRuntimeNativeContextMenu() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeNativeContextMenu() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedNativeContextMenu() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedNativeContextMenu() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function toggleNativeContextMenu anonymous() {
    return this.setNativeContextMenu(!this.getNativeContextMenu())
}

function isNativeContextMenu anonymous() {
    return this.getNativeContextMenu()
}

function getAppearance anonymous(value) {
    if (this.$$runtime_appearance !== undefined) return this.$$runtime_appearance;
    if (this.$$user_appearance !== undefined) return this.$$user_appearance;
    else return this.$$init_appearance;
}

function setAppearance anonymous(value) {
    this.$$setAppearanceImpl.apply(this, arguments);
    return value;
}

function resetAppearance() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAppearance() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAppearance() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAppearance() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function _getLayout() {
    return this.__kJ
}

function _setLayout(n) {
    this.__kJ && this.__kJ.connectToWidget(null);
    n && n.connectToWidget(this);
    this.__kJ = n;
    qx.ui.core.queue.Layout.add(this)
}

function setLayoutParent(n) {
    if (this.$$parent !== n) {
        var t = this.getContentElement();
        this.$$parent && !this.$$parent.$$disposed && this.$$parent.getContentElement().remove(t);
        this.$$parent = n || null;
        n && !n.$$disposed && this.$$parent.getContentElement().add(t);
        this.$$refreshInheritables();
        qx.ui.core.queue.Visibility.add(this)
    }
}

function renderLayout(t, i, r, u) {
    var f = qx.ui.core.LayoutItem.prototype.renderLayout.call(this, t, i, r, u),
        a;
    if (!f || qx.lang.Object.isEmpty(f) && !this._updateInsets) return null;
    var v = this.getContentElement(),
        l = f.size || this._updateInsets,
        s = n,
        e = {};
    if (f.position && (e.left = t + s, e.top = i + s), (l || f.margin) && (e.width = r + s, e.height = u + s), Object.keys(e).length > 0 && v.setStyles(e), l || f.local || f.margin)
        if (this.__kJ && this.hasLayoutChildren()) {
            var h = this.getInsets(),
                y = r - h.left - h.right,
                p = u - h.top - h.bottom,
                c = this.getDecorator(),
                o = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                };
            c && (c = qx.theme.manager.Decoration.getInstance().resolve(c), o = c.getPadding());
            a = {
                top: this.getPaddingTop() + o.top,
                right: this.getPaddingRight() + o.right,
                bottom: this.getPaddingBottom() + o.bottom,
                left: this.getPaddingLeft() + o.left
            };
            this.__kJ.renderLayout(y, p, a)
        } else if (this.hasLayoutChildren()) throw new Error(yi + this._findTopControl() + ui);
    return f.position && this.hasListener(ot) && this.fireDataEvent(ot, this.getBounds()), f.size && this.hasListener(yt) && this.fireDataEvent(yt, this.getBounds()), delete this._updateInsets, f
}

function clearSeparators() {
    var n = this.__kK,
        r, u, i, t, f;
    if (n) {
        for (r = qx.ui.core.Widget.__kG, u = this.getContentElement(), t = 0, f = n.length; t < f; t++) i = n[t], r.poolObject(i), u.remove(i.getContentElement());
        n.length = 0
    }
}

function renderSeparator(t, i) {
    var f = qx.ui.core.Widget.__kG.getObject(qx.ui.core.Widget),
        u, r;
    f.set({
        decorator: t
    });
    u = f.getContentElement();
    this.getContentElement().add(u);
    r = u.getDomElement();
    r ? (r.style.top = i.top + n, r.style.left = i.left + n, r.style.width = i.width + n, r.style.height = i.height + n) : u.setStyles({
        left: i.left + n,
        top: i.top + n,
        width: i.width + n,
        height: i.height + n
    });
    this.__kK || (this.__kK = []);
    this.__kK.push(f)
}

function _computeSizeHint() {
    var e = this.getWidth(),
        t = this.getMinWidth(),
        i = this.getMaxWidth(),
        o = this.getHeight(),
        r = this.getMinHeight(),
        u = this.getMaxHeight(),
        n = this._getContentHint(),
        f = this.getInsets(),
        s = f.left + f.right,
        h = f.top + f.bottom;
    return e == null && (e = n.width + s), o == null && (o = n.height + h), t == null && (t = s, n.minWidth != null && (t += n.minWidth, t > i && i != null && (t = i))), r == null && (r = h, n.minHeight != null && (r += n.minHeight, r > u && u != null && (r = u))), i == null && (n.maxWidth == null ? i = Infinity : (i = n.maxWidth + s, i < t && t != null && (i = t))), u == null && (n.maxHeight == null ? u = Infinity : (u = n.maxHeight + h, u < r && r != null && (u = r))), {
        width: e,
        minWidth: t,
        maxWidth: i,
        height: o,
        minHeight: r,
        maxHeight: u
    }
}

function invalidateLayoutCache() {
    qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);
    this.__kJ && this.__kJ.invalidateLayoutCache()
}

function _getContentHint() {
    var n = this.__kJ;
    return n ? this.hasLayoutChildren() ? n.getSizeHint() : {
        width: 0,
        height: 0
    } : {
        width: 100,
        height: 50
    }
}

function _getHeightForWidth(n) {
    var t = this.getInsets(),
        f = t.left + t.right,
        e = t.top + t.bottom,
        r = n - f,
        u = 0,
        i = this._getLayout();
    return u = i && i.hasHeightForWidth() ? i.getHeightForWidth(r) : this._getContentHeightForWidth(r), u + e
}

function _getContentHeightForWidth() {
    throw new Error(rr);
}

function getInsets() {
    var t = this.getPaddingTop(),
        i = this.getPaddingRight(),
        r = this.getPaddingBottom(),
        u = this.getPaddingLeft(),
        f, n;
    return this.getDecorator() && (f = qx.theme.manager.Decoration.getInstance().resolve(this.getDecorator()), n = f.getInsets(), t += n.top, i += n.right, r += n.bottom, u += n.left), {
        top: t,
        right: i,
        bottom: r,
        left: u
    }
}

function getInnerSize() {
    var t = this.getBounds(),
        n;
    return t ? (n = this.getInsets(), {
        width: t.width - n.left - n.right,
        height: t.height - n.top - n.bottom
    }) : null
}

function fadeOut(n) {
    return this.getContentElement().fadeOut(n)
}

function fadeIn(n) {
    return this.getContentElement().fadeIn(n)
}

function _applyAnonymous(n) {
    n ? this.getContentElement().setAttribute(st, or) : this.getContentElement().removeAttribute(st)
}

function show() {
    this.setVisibility(u)
}

function hide() {
    this.setVisibility(y)
}

function exclude() {
    this.setVisibility(h)
}

function isVisible() {
    return this.getVisibility() === u
}

function isHidden() {
    return this.getVisibility() !== u
}

function isExcluded() {
    return this.getVisibility() === h
}

function isSeeable() {
    qx.ui.core.queue.Manager.flush();
    var n = this.getContentElement().getDomElement();
    return n ? n.offsetWidth > 0 : !1
}

function _createContentElement() {
    return new qx.html.Element(ri, {
        overflowX: y,
        overflowY: y
    })
}

function getContentElement() {
    return this.__kF
}

function getLayoutChildren() {
    var n = this.__kM,
        t, i, u, r;
    if (!n) return this.__kN;
    for (i = 0, u = n.length; i < u; i++) r = n[i], (r.hasUserBounds() || r.isExcluded()) && (t == null && (t = n.concat()), qx.lang.Array.remove(t, r));
    return t || n
}

function scheduleLayoutUpdate() {
    qx.ui.core.queue.Layout.add(this)
}

function invalidateLayoutChildren() {
    var n = this.__kJ;
    n && n.invalidateChildrenCache();
    qx.ui.core.queue.Layout.add(this)
}

function hasLayoutChildren() {
    var t = this.__kM,
        i, n, r;
    if (!t) return !1;
    for (n = 0, r = t.length; n < r; n++)
        if (i = t[n], !i.hasUserBounds() && !i.isExcluded()) return !0;
    return !1
}

function getChildrenContainer() {
    return this
}

function _getChildren() {
    return this.__kM || this.__kN
}

function _indexOf(n) {
    var t = this.__kM;
    return t ? t.indexOf(n) : -1
}

function _hasChildren() {
    var n = this.__kM;
    return n != null && !!n[0]
}

function addChildrenToQueue(n) {
    var i = this.__kM,
        r, t, u;
    if (i)
        for (t = 0, u = i.length; t < u; t++) r = i[t], n.push(r), r.addChildrenToQueue(n)
}

function _add(n, t) {
    n.getLayoutParent() == this && qx.lang.Array.remove(this.__kM, n);
    this.__kM ? this.__kM.push(n) : this.__kM = [n];
    this.__kO(n, t)
}

function _addAt(n, t, i) {
    this.__kM || (this.__kM = []);
    n.getLayoutParent() == this && qx.lang.Array.remove(this.__kM, n);
    var r = this.__kM[t];
    r === n && n.setLayoutProperties(i);
    r ? qx.lang.Array.insertBefore(this.__kM, n, r) : this.__kM.push(n);
    this.__kO(n, i)
}

function _addBefore(n, t, i) {
    n != t && (this.__kM || (this.__kM = []), n.getLayoutParent() == this && qx.lang.Array.remove(this.__kM, n), qx.lang.Array.insertBefore(this.__kM, n, t), this.__kO(n, i))
}

function _addAfter(n, t, i) {
    n != t && (this.__kM || (this.__kM = []), n.getLayoutParent() == this && qx.lang.Array.remove(this.__kM, n), qx.lang.Array.insertAfter(this.__kM, n, t), this.__kO(n, i))
}

function _remove(n) {
    if (!this.__kM) throw new Error(pt);
    qx.lang.Array.remove(this.__kM, n);
    this.__kP(n)
}

function _removeAt(n) {
    if (!this.__kM) throw new Error(pt);
    var t = this.__kM[n];
    return qx.lang.Array.removeAt(this.__kM, n), this.__kP(t), t
}

function _removeAll() {
    var n, t;
    if (!this.__kM) return [];
    for (n = this.__kM.concat(), this.__kM.length = 0, t = n.length - 1; t >= 0; t--) this.__kP(n[t]);
    return qx.ui.core.queue.Layout.add(this), n
}

function capture(n) {
    this.getContentElement().capture(n)
}

function releaseCapture() {
    this.getContentElement().releaseCapture()
}

function isCapturing() {
    var n = this.getContentElement().getDomElement(),
        t, i;
    return n ? (t = qx.event.Registration.getManager(n), i = t.getDispatcher(qx.event.dispatch.MouseCapture), n == i.getCaptureElement()) : !1
}

function _applyPadding(n, t, i) {
    this._updateInsets = !0;
    qx.ui.core.queue.Layout.add(this);
    this.__kQ(i, n)
}

function _applyDecorator(n, t) {
    var i = this.getContentElement();
    t && (t = qx.theme.manager.Decoration.getInstance().getCssClassName(t), i.removeClass(t));
    n && (n = qx.theme.manager.Decoration.getInstance().addCssClass(n), i.addClass(n));
    (n || t) && qx.ui.core.queue.Layout.add(this)
}

function _applyToolTipText() {
    if (qx.core.Environment.get(lt)) {
        if (this.__kI) return;
        var n = qx.locale.Manager.getInstance();
        this.__kI = n.addListener(vr, function() {
            var n = this.getToolTipText();
            n && n.translate && this.setToolTipText(n.translate())
        }, this)
    }
}

function _applyTextColor() {}

function _applyZIndex(n) {
    this.getContentElement().setStyle(wi, n == null ? 0 : n)
}

function _applyVisibility(n, t) {
    var r = this.getContentElement(),
        i;
    n === u ? r.show() : r.hide();
    i = this.$$parent;
    i && (t == null || n == null || t === h || n === h) && i.invalidateLayoutChildren();
    qx.ui.core.queue.Visibility.add(this)
}

function _applyOpacity(n) {
    this.getContentElement().setStyle(bi, n == 1 ? null : n)
}

function _applyCursor(n) {
    n != null || this.isSelectable() || (n = wt);
    this.getContentElement().setStyle(gi, n, qx.core.Environment.get(ur) == pr)
}

function _applyBackgroundColor() {
    var n = this.getBackgroundColor(),
        t = this.getContentElement(),
        i = qx.theme.manager.Color.getInstance().resolve(n);
    t.setStyle(ti, i)
}

function _applyFont() {}

function _onChangeTheme() {
    if (!this.isDisposed()) {
        qx.ui.core.LayoutItem.prototype._onChangeTheme.call(this);
        this.updateAppearance();
        var n = this.getDecorator();
        this._applyDecorator(null, n);
        this._applyDecorator(n);
        n = this.getFont();
        qx.lang.Type.isString(n) && this._applyFont(n, n);
        n = this.getTextColor();
        qx.lang.Type.isString(n) && this._applyTextColor(n, n);
        n = this.getBackgroundColor();
        qx.lang.Type.isString(n) && this._applyBackgroundColor(n, n)
    }
}

function hasState(n) {
    var t = this.__kR;
    return !!t && !!t[n]
}

function addState(n) {
    var i = this.__kR,
        r, t, f, u;
    if ((i || (i = this.__kR = {}), !i[n]) && (this.__kR[n] = !0, n === nt ? this.syncAppearance() : qx.ui.core.queue.Visibility.isVisible(this) ? qx.ui.core.queue.Appearance.add(this) : this.$$stateChanges = !0, r = this._forwardStates, t = this.__kU, r && r[n] && t))
        for (u in t) f = t[u], f instanceof qx.ui.core.Widget && t[u].addState(n)
}

function removeState(n) {
    var u = this.__kR,
        i, t, f, r;
    if (u && u[n] && (delete this.__kR[n], n === nt ? this.syncAppearance() : qx.ui.core.queue.Visibility.isVisible(this) ? qx.ui.core.queue.Appearance.add(this) : this.$$stateChanges = !0, i = this._forwardStates, t = this.__kU, i && i[n] && t))
        for (f in t) r = t[f], r instanceof qx.ui.core.Widget && r.removeState(n)
}

function replaceState(n, t) {
    var i = this.__kR,
        u, r, e, f;
    if (i || (i = this.__kR = {}), i[t] || (i[t] = !0), i[n] && delete i[n], qx.ui.core.queue.Visibility.isVisible(this) ? qx.ui.core.queue.Appearance.add(this) : this.$$stateChanges = !0, u = this._forwardStates, r = this.__kU, u && u[t] && r)
        for (e in r) f = r[e], f instanceof qx.ui.core.Widget && f.replaceState(n, t)
}

function syncAppearance() {
    var o = this.__kR,
        t = this.__kS,
        s = qx.theme.manager.Appearance.getInstance(),
        h = qx.core.Property.$$method.setThemed,
        f = qx.core.Property.$$method.resetThemed,
        r, u, e, i, n;
    if (this.__kT && (delete this.__kT, t && (r = s.styleFrom(t, o, null, this.getAppearance()), t = null)), !t) {
        u = this;
        e = [];
        do e.push(u.$$subcontrol || u.getAppearance()); while (u = u.$$subparent);
        t = e.reverse().join(sr).replace(/#[0-9]+/g, dt);
        this.__kS = t
    }
    if (i = s.styleFrom(t, o, null, this.getAppearance()), i) {
        if (r)
            for (n in r) i[n] === undefined && this[f[n]]();
        for (n in i) i[n] === undefined ? this[f[n]]() : this[h[n]](i[n])
    } else if (r)
        for (n in r) this[f[n]]();
    this.fireDataEvent(si, this.__kR)
}

function _applyAppearance() {
    this.updateAppearance()
}

function checkAppearanceNeeds() {
    this.__kH ? this.$$stateChanges && (qx.ui.core.queue.Appearance.add(this), delete this.$$stateChanges) : (qx.ui.core.queue.Appearance.add(this), this.__kH = !0)
}

function updateAppearance() {
    var n, t, i;
    if (this.__kT = !0, qx.ui.core.queue.Appearance.add(this), n = this.__kU, n)
        for (i in n) t = n[i], t instanceof qx.ui.core.Widget && t.updateAppearance()
}

function syncWidget() {}

function getEventTarget() {
    for (var n = this; n.getAnonymous();)
        if (n = n.getLayoutParent(), !n) return null;
    return n
}

function getFocusTarget() {
    var n = this;
    if (!n.getEnabled()) return null;
    while (n.getAnonymous() || !n.getFocusable())
        if (n = n.getLayoutParent(), !n || !n.getEnabled()) return null;
    return n
}

function getFocusElement() {
    return this.getContentElement()
}

function isTabable() {
    return !!this.getContentElement().getDomElement() && this.isFocusable()
}

function _applyFocusable(n, t) {
    var i = this.getFocusElement(),
        r;
    n ? (r = this.getTabIndex(), r == null && (r = 1), i.setAttribute(w, r), i.setStyle(ki, g)) : i.isNativelyFocusable() ? i.setAttribute(w, -1) : t && i.setAttribute(w, null)
}

function _applyKeepFocus(n) {
    var t = this.getFocusElement();
    t.setAttribute(yr, n ? v : null)
}

function _applyKeepActive(n) {
    var t = this.getContentElement();
    t.setAttribute(wr, n ? v : null)
}

function _applyTabIndex(n) {
    if (n == null) n = 1;
    else if (n < 1 || n > 32e3) throw new Error(di);
    this.getFocusable() && n != null && this.getFocusElement().setAttribute(w, n)
}

function _applySelectable(n, t) {
    t !== null && this._applyCursor(this.getCursor());
    this.getContentElement().setSelectable(n)
}

function _applyEnabled(n) {
    n === !1 ? (this.addState(et), this.removeState(nt), this.isFocusable() && (this.removeState(k), this._applyFocusable(!1, !0)), this.isDraggable() && this._applyDraggable(!1, !0), this.isDroppable() && this._applyDroppable(!1, !0)) : (this.removeState(et), this.isFocusable() && this._applyFocusable(!0, !1), this.isDraggable() && this._applyDraggable(!0, !1), this.isDroppable() && this._applyDroppable(!0, !1))
}

function _applyNativeContextMenu() {}

function _applyContextMenu(n, t) {
    t && (t.removeState(b), t.getOpener() == this && t.resetOpener(), n || (this.removeListener(b, this._onContextMenuOpen), this.removeListener(tt, this._onContextMenuOpen), t.removeListener(d, this._onBeforeContextMenuOpen, this)));
    n && (n.setOpener(this), n.addState(b), t || (this.addListener(b, this._onContextMenuOpen), this.addListener(tt, this._onContextMenuOpen), n.addListener(d, this._onBeforeContextMenuOpen, this)))
}

function _onContextMenuOpen(n) {
    (n.getType() != tt || n.getPointerType() === ii) && (this.getContextMenu().openAtPointer(n), n.stop())
}

function _onBeforeContextMenuOpen(n) {
    n.getData() == u && this.hasListener(ni) && this.fireDataEvent(ni, n)
}

function _onStopEvent(n) {
    n.stopPropagation()
}

function _getDragDropCursor() {
    return qx.ui.core.DragDropCursor.getInstance()
}

function _applyDraggable(n) {
    this.isEnabled() || n !== !0 || (n = !1);
    this._getDragDropCursor();
    n ? (this.addListener(ct, this._onDragStart), this.addListener(ft, this._onDrag), this.addListener(vt, this._onDragEnd), this.addListener(at, this._onDragChange)) : (this.removeListener(ct, this._onDragStart), this.removeListener(ft, this._onDrag), this.removeListener(vt, this._onDragEnd), this.removeListener(at, this._onDragChange));
    this.getContentElement().setAttribute(oi, n ? v : null)
}

function _applyDroppable(n) {
    this.isEnabled() || n !== !0 || (n = !1);
    this.getContentElement().setAttribute(nr, n ? v : null)
}

function _onDragStart(n) {
    this._getDragDropCursor().placeToPointer(n);
    this.getApplicationRoot().setGlobalCursor(wt)
}

function _onDrag(n) {
    this._getDragDropCursor().placeToPointer(n)
}

function _onDragEnd() {
    this._getDragDropCursor().moveTo(-1e3, -1e3);
    this.getApplicationRoot().resetGlobalCursor()
}

function _onDragChange(n) {
    var t = this._getDragDropCursor(),
        i = n.getCurrentAction();
    i ? t.setAction(i) : t.resetAction()
}

function visualizeFocus() {
    this.addState(k)
}

function visualizeBlur() {
    this.removeState(k)
}

function scrollChildIntoView(n, t, i, r) {
    r = typeof r == ar ? !0 : r;
    var f = qx.ui.core.queue.Layout,
        u;
    r && (r = !f.isScheduled(n), u = n.getLayoutParent(), r && u && (r = !f.isScheduled(u), r && u.getChildren().forEach(function(n) {
        r = r && !f.isScheduled(n)
    })));
    this.scrollChildIntoViewX(n, t, r);
    this.scrollChildIntoViewY(n, i, r)
}

function scrollChildIntoViewX(n, t, i) {
    this.getContentElement().scrollChildIntoViewX(n.getContentElement(), t, i)
}

function scrollChildIntoViewY(n, t, i) {
    this.getContentElement().scrollChildIntoViewY(n.getContentElement(), t, i)
}

function focus() {
    if (this.isFocusable()) this.getFocusElement().focus();
    else if (qx.ui.core.Widget.UNFOCUSABLE_WIDGET_FOCUS_BLUR_ERROR) throw new Error(kt);
}

function blur() {
    if (this.isFocusable()) this.getFocusElement().blur();
    else if (qx.ui.core.Widget.UNFOCUSABLE_WIDGET_FOCUS_BLUR_ERROR) throw new Error(kt);
}

function activate() {
    this.getContentElement().activate()
}

function deactivate() {
    this.getContentElement().deactivate()
}

function tabFocus() {
    this.getFocusElement().focus()
}

function hasChildControl(n) {
    return this.__kU ? !!this.__kU[n] : !1
}

function _getCreatedChildControls() {
    return this.__kU
}

function getChildControl(n, t) {
    if (!this.__kU) {
        if (t) return null;
        this.__kU = {}
    }
    var i = this.__kU[n];
    return i ? i : t === !0 ? null : this._createChildControl(n)
}

function _showChildControl(n) {
    var t = this.getChildControl(n);
    return t.show(), t
}

function _excludeChildControl(n) {
    var t = this.getChildControl(n, !0);
    t && t.exclude()
}

function _isChildControlVisible(n) {
    var t = this.getChildControl(n, !0);
    return t ? t.isVisible() : !1
}

function _releaseChildControl(n) {
    var t = this.getChildControl(n, !1),
        i, r, u;
    if (!t) throw new Error(ht + n);
    if (delete t.$$subcontrol, delete t.$$subparent, i = this.__kR, r = this._forwardStates, i && r && t instanceof qx.ui.core.Widget)
        for (u in i) r[u] && t.removeState(u);
    return delete this.__kU[n], t
}

function _createChildControl(n) {
    var i, t, u, f, e;
    if (this.__kU) {
        if (this.__kU[n]) throw new Error(ei + n + tr);
    } else this.__kU = {};
    i = n.indexOf(vi);
    try {
        t = i == -1 ? this._createChildControlImpl(n) : this._createChildControlImpl(n.substring(0, i), n.substring(i + 1, n.length))
    } catch (r) {
        r.message = fr + n + hi + this.toString() + ir + r.message;
        throw r;
    }
    if (!t) throw new Error(ht + n);
    if (t.$$subcontrol = n, t.$$subparent = this, u = this.__kR, f = this._forwardStates, u && f && t instanceof qx.ui.core.Widget)
        for (e in u) f[e] && t.addState(e);
    return t.$$resyncNeeded && (delete t.$$resyncNeeded, t.updateAppearance()), this.fireDataEvent(fi, t), this.__kU[n] = t
}

function _createChildControlImpl() {
    return null
}

function _disposeChildControls() {
    var t = this.__kU,
        i, r, n;
    if (t) {
        i = qx.ui.core.Widget;
        for (r in t) n = t[r], i.contains(this, n) ? n.dispose() : n.destroy();
        delete this.__kU
    }
}

function _findTopControl() {
    for (var n = this; n;) {
        if (!n.$$subparent) return n;
        n = n.$$subparent
    }
    return null
}

function getSubcontrolId() {
    return this.$$subcontrol || null
}

function getContentLocation(n) {
    var t = this.getContentElement().getDomElement();
    return t ? qx.bom.element.Location.get(t, n) : null
}

function setDomLeft(t) {
    var i = this.getContentElement().getDomElement();
    if (i) i.style.left = t + n;
    else throw new Error(rt);
}

function setDomTop(t) {
    var i = this.getContentElement().getDomElement();
    if (i) i.style.top = t + n;
    else throw new Error(rt);
}

function setDomPosition(t, i) {
    var r = this.getContentElement().getDomElement();
    if (r) r.style.left = t + n, r.style.top = i + n;
    else throw new Error(rt);
}

function destroy() {
    if (!this.$$disposed) {
        var n = this.$$parent;
        n && n._remove(this);
        qx.ui.core.queue.Dispose.add(this)
    }
}

function clone() {
    var i = qx.ui.core.LayoutItem.prototype.clone.call(this),
        t, n, r;
    if (this.getChildren)
        for (t = this.getChildren(), n = 0, r = t.length; n < r; n++) i.add(t[n].clone());
    return i
}

function tr() {
    var t = qx.locale.Manager;
    if (t) return t.tr.apply(t, arguments);
    throw new Error(n);
}

function trn() {
    var t = qx.locale.Manager;
    if (t) return t.trn.apply(t, arguments);
    throw new Error(n);
}

function trc() {
    var t = qx.locale.Manager;
    if (t) return t.trc.apply(t, arguments);
    throw new Error(n);
}

function trnc() {
    var t = qx.locale.Manager;
    if (t) return t.trnc.apply(t, arguments);
    throw new Error(n);
}

function marktr() {
    var t = qx.locale.Manager;
    if (t) return t.marktr.apply(t, arguments);
    throw new Error(n);
}

function getAnimation anonymous() {
    this.getAnimation.$$install && this.getAnimation.$$install();
    return this.getAnimation.apply(this, arguments);
}

function setAnimation anonymous() {
    this.setAnimation.$$install && this.setAnimation.$$install.call(this);
    return this.setAnimation.apply(this, arguments);
}

function resetAnimation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAnimation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAnimation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAnimation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedAnimation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedAnimation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getAnimationtoggled anonymous() {
    this.getAnimationtoggled.$$install && this.getAnimationtoggled.$$install();
    return this.getAnimationtoggled.apply(this, arguments);
}

function setAnimationtoggled anonymous() {
    this.setAnimationtoggled.$$install && this.setAnimationtoggled.$$install.call(this);
    return this.setAnimationtoggled.apply(this, arguments);
}

function resetAnimationtoggled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAnimationtoggled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAnimationtoggled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAnimationtoggled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedAnimationtoggled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedAnimationtoggled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function startAnimation(n) {
    var i, t;
    if (this.__kD(this.__kz), n && this.getChildren && this.getChildren())
        for (i = this.getChildren(), t = 0; t < i.length; ++t) i[t].startAnimation && i[t].startAnimation(n)
}

function stopAnimation() {
    this.__kA && this.__kA.stop();
    this.__kA = null
}

function getEdgeAnimationShow anonymous() {
    this.getEdgeAnimationShow.$$install && this.getEdgeAnimationShow.$$install();
    return this.getEdgeAnimationShow.apply(this, arguments);
}

function setEdgeAnimationShow anonymous() {
    this.setEdgeAnimationShow.$$install && this.setEdgeAnimationShow.$$install.call(this);
    return this.setEdgeAnimationShow.apply(this, arguments);
}

function resetEdgeAnimationShow() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initEdgeAnimationShow() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeEdgeAnimationShow() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeEdgeAnimationShow() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedEdgeAnimationShow() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedEdgeAnimationShow() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getEdgeAnimationHover anonymous() {
    this.getEdgeAnimationHover.$$install && this.getEdgeAnimationHover.$$install();
    return this.getEdgeAnimationHover.apply(this, arguments);
}

function setEdgeAnimationHover anonymous() {
    this.setEdgeAnimationHover.$$install && this.setEdgeAnimationHover.$$install.call(this);
    return this.setEdgeAnimationHover.apply(this, arguments);
}

function resetEdgeAnimationHover() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initEdgeAnimationHover() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeEdgeAnimationHover() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeEdgeAnimationHover() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedEdgeAnimationHover() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedEdgeAnimationHover() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getEdgeAnimationHide anonymous() {
    this.getEdgeAnimationHide.$$install && this.getEdgeAnimationHide.$$install();
    return this.getEdgeAnimationHide.apply(this, arguments);
}

function setEdgeAnimationHide anonymous() {
    this.setEdgeAnimationHide.$$install && this.setEdgeAnimationHide.$$install.call(this);
    return this.setEdgeAnimationHide.apply(this, arguments);
}

function resetEdgeAnimationHide() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initEdgeAnimationHide() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeEdgeAnimationHide() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeEdgeAnimationHide() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedEdgeAnimationHide() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedEdgeAnimationHide() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getEdgeAnimation anonymous() {
    this.getEdgeAnimation.$$install && this.getEdgeAnimation.$$install();
    return this.getEdgeAnimation.apply(this, arguments);
}

function setEdgeAnimation anonymous() {
    this.setEdgeAnimation.$$install && this.setEdgeAnimation.$$install.call(this);
    return this.setEdgeAnimation.apply(this, arguments);
}

function resetEdgeAnimation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initEdgeAnimation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeEdgeAnimation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeEdgeAnimation() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function startEdgeAnimation(n) {
    return this.__gs = n, n != t || !this.__go ? n != u || !this.__gp ? n != i || !this.__gq || this.__gB(this.__gq) : this.__gB(this.__gp) : (this.__gB(this.__go), !this.__gr || qx.bom.element.Style.setStyles(this.getContentElement().getDomElement(), {
        opacity: 0
    }, !0)), this.__gC(!1)
}

function stopEdgeAnimation() {
    this.__gr && this.__gr.stop();
    this.__gr = null
}

function getCssContent anonymous() {
    this.getCssContent.$$install && this.getCssContent.$$install();
    return this.getCssContent.apply(this, arguments);
}

function setCssContent anonymous() {
    this.setCssContent.$$install && this.setCssContent.$$install.call(this);
    return this.setCssContent.apply(this, arguments);
}

function resetCssContent() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCssContent() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCssContent() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCssContent() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function refreshCssContent() {
    this.__gR(this.getCssContent())
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

function resetThemedMinWidth anonymous(value) {
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
    if (this.$$theme_minWidth === undefined) return;
    var computed;
    if (this.$$runtime_minWidth !== undefined) {
        computed = this.$$runtime_minWidth;
        delete this.$$theme_minWidth;
    } else if (this.$$user_minWidth !== undefined) {
        computed = this.$$user_minWidth;
        delete this.$$theme_minWidth;
    } else if (this.$$theme_minWidth !== undefined) {
        delete this.$$theme_minWidth;
        if (this.$$init_minWidth !== undefined) {
            computed = this.$$init_minWidth;
            this.$$useinit_minWidth = true;
        }
    } else if (this.$$useinit_minWidth) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_minWidth;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "minWidth", "resetThemed");

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