function getSound anonymous(value) {
    if (this.$$runtime_sound !== undefined) return this.$$runtime_sound;
    if (this.$$user_sound !== undefined) return this.$$user_sound;
    else if (this.$$theme_sound !== undefined) return this.$$theme_sound;
    else return this.$$init_sound;
}

function setSound anonymous() {
    this.setSound.$$install && this.setSound.$$install.call(this);
    return this.setSound.apply(this, arguments);
}

function resetSound() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeSound() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSound() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedSound() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedSound() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function execute() {
    var n = this.getSound();
    n != null && ClientLib.Vis.VisMain.GetInstance() && ClientLib.Vis.VisMain.GetInstance().PlayUISound(n);
    qx.ui.form.Button.prototype.execute.call(this)
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

function setThemedCenter anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_center !== undefined) {
            old = this.$$runtime_center;
        } else if (this.$$user_center !== undefined) {
            old = this.$$user_center;
        } else if (this.$$theme_center !== undefined) {
            old = this.$$theme_center;
        } else if (this.$$useinit_center) {
            old = this.$$init_center;
        }
        if (equ.call(this, this.$$theme_center, value)) return value;
        var computed;
        if (this.$$runtime_center !== undefined) {
            computed = this.$$runtime_center;
            this.$$theme_center = value;
        } else if (this.$$user_center !== undefined) {
            computed = this.$$user_center;
            this.$$theme_center = value;
        } else if (this.$$theme_center !== undefined) {
            computed = this.$$theme_center = value;
        } else if (this.$$useinit_center) {
            delete this.$$useinit_center;
            computed = this.$$theme_center = value;
        } else {
            computed = this.$$theme_center = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_center;
        var self = this;
        var promise;
        promise = this._applyCenter(computed, old, "center", "setThemed");

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

function setThemedPaddingTop anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_paddingTop !== undefined) {
            old = this.$$runtime_paddingTop;
        } else if (this.$$user_paddingTop !== undefined) {
            old = this.$$user_paddingTop;
        } else if (this.$$theme_paddingTop !== undefined) {
            old = this.$$theme_paddingTop;
        } else if (this.$$useinit_paddingTop) {
            old = this.$$init_paddingTop;
        }
        if (equ.call(this, this.$$theme_paddingTop, value)) return value;
        var computed;
        if (this.$$runtime_paddingTop !== undefined) {
            computed = this.$$runtime_paddingTop;
            this.$$theme_paddingTop = value;
        } else if (this.$$user_paddingTop !== undefined) {
            computed = this.$$user_paddingTop;
            this.$$theme_paddingTop = value;
        } else if (this.$$theme_paddingTop !== undefined) {
            computed = this.$$theme_paddingTop = value;
        } else if (this.$$useinit_paddingTop) {
            delete this.$$useinit_paddingTop;
            computed = this.$$theme_paddingTop = value;
        } else {
            computed = this.$$theme_paddingTop = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_paddingTop;
        var self = this;
        var promise;
        promise = this._applyPadding(computed, old, "paddingTop", "setThemed");

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

function setThemedPaddingBottom anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_paddingBottom !== undefined) {
            old = this.$$runtime_paddingBottom;
        } else if (this.$$user_paddingBottom !== undefined) {
            old = this.$$user_paddingBottom;
        } else if (this.$$theme_paddingBottom !== undefined) {
            old = this.$$theme_paddingBottom;
        } else if (this.$$useinit_paddingBottom) {
            old = this.$$init_paddingBottom;
        }
        if (equ.call(this, this.$$theme_paddingBottom, value)) return value;
        var computed;
        if (this.$$runtime_paddingBottom !== undefined) {
            computed = this.$$runtime_paddingBottom;
            this.$$theme_paddingBottom = value;
        } else if (this.$$user_paddingBottom !== undefined) {
            computed = this.$$user_paddingBottom;
            this.$$theme_paddingBottom = value;
        } else if (this.$$theme_paddingBottom !== undefined) {
            computed = this.$$theme_paddingBottom = value;
        } else if (this.$$useinit_paddingBottom) {
            delete this.$$useinit_paddingBottom;
            computed = this.$$theme_paddingBottom = value;
        } else {
            computed = this.$$theme_paddingBottom = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_paddingBottom;
        var self = this;
        var promise;
        promise = this._applyPadding(computed, old, "paddingBottom", "setThemed");

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

function setThemedPaddingLeft anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_paddingLeft !== undefined) {
            old = this.$$runtime_paddingLeft;
        } else if (this.$$user_paddingLeft !== undefined) {
            old = this.$$user_paddingLeft;
        } else if (this.$$theme_paddingLeft !== undefined) {
            old = this.$$theme_paddingLeft;
        } else if (this.$$useinit_paddingLeft) {
            old = this.$$init_paddingLeft;
        }
        if (equ.call(this, this.$$theme_paddingLeft, value)) return value;
        var computed;
        if (this.$$runtime_paddingLeft !== undefined) {
            computed = this.$$runtime_paddingLeft;
            this.$$theme_paddingLeft = value;
        } else if (this.$$user_paddingLeft !== undefined) {
            computed = this.$$user_paddingLeft;
            this.$$theme_paddingLeft = value;
        } else if (this.$$theme_paddingLeft !== undefined) {
            computed = this.$$theme_paddingLeft = value;
        } else if (this.$$useinit_paddingLeft) {
            delete this.$$useinit_paddingLeft;
            computed = this.$$theme_paddingLeft = value;
        } else {
            computed = this.$$theme_paddingLeft = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_paddingLeft;
        var self = this;
        var promise;
        promise = this._applyPadding(computed, old, "paddingLeft", "setThemed");

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

function _createChildControlImpl(u) {
    var f = null,
        e;
    return u == t ? (f = new qx.ui.container.Composite(new qx.ui.layout.Canvas).set({
        anonymous: !0
    }), this._add(f)) : (u == n || u.substring(0, 3) == r) && (f = new qx.ui.basic.Image(i).set({
        anonymous: !0,
        scale: !0
    }), e = this.getChildControl(t, !1), e.add(f, {
        left: 0,
        top: 0
    })), f || webfrontend.ui.SoundButton.prototype._createChildControlImpl.call(this, u)
}

function _applyIcon(t) {
    var i = this.getChildControl(n, !1);
    i != null && i.setSource(t);
    this._handleIcon()
}

function setIconSize(t, i) {
    var r = this.getChildControl(n, !1);
    r && r.set({
        width: t,
        height: i
    })
}

function setIndicatorIcon(t, i, r, f) {
    var e = this.getChildControl(n, !1);
    !e || !t || t.length <= 0 || (this.__byw.hasOwnProperty(t) || (this.__byw[t] = this.getChildControl(u + t, !1)), e = this.__byw[t], i && e.setSource(i), f && e.setLayoutProperties(f), r && e.set(r))
}