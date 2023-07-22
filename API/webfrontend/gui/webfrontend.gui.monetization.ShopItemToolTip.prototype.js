function getShowTimeout anonymous(value) {
    if (this.$$runtime_showTimeout !== undefined) return this.$$runtime_showTimeout;
    if (this.$$user_showTimeout !== undefined) return this.$$user_showTimeout;
    else if (this.$$theme_showTimeout !== undefined) return this.$$theme_showTimeout;
    else return this.$$init_showTimeout;
}

function setShowTimeout anonymous() {
    this.setShowTimeout.$$install && this.setShowTimeout.$$install.call(this);
    return this.setShowTimeout.apply(this, arguments);
}

function resetShowTimeout() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeShowTimeout() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeShowTimeout() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedShowTimeout() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedShowTimeout() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getHideTimeout anonymous(value) {
    if (this.$$runtime_hideTimeout !== undefined) return this.$$runtime_hideTimeout;
    if (this.$$user_hideTimeout !== undefined) return this.$$user_hideTimeout;
    else if (this.$$theme_hideTimeout !== undefined) return this.$$theme_hideTimeout;
    else return this.$$init_hideTimeout;
}

function setHideTimeout anonymous() {
    this.setHideTimeout.$$install && this.setHideTimeout.$$install.call(this);
    return this.setHideTimeout.apply(this, arguments);
}

function resetHideTimeout() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeHideTimeout() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeHideTimeout() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedHideTimeout anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_hideTimeout !== undefined) {
            old = this.$$runtime_hideTimeout;
        } else if (this.$$user_hideTimeout !== undefined) {
            old = this.$$user_hideTimeout;
        } else if (this.$$theme_hideTimeout !== undefined) {
            old = this.$$theme_hideTimeout;
        } else if (this.$$useinit_hideTimeout) {
            old = this.$$init_hideTimeout;
        }
        this.$$theme_hideTimeout = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetThemedHideTimeout() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getLabel anonymous(value) {
    if (this.$$runtime_label !== undefined) return this.$$runtime_label;
    if (this.$$user_label !== undefined) return this.$$user_label;
    else return null;
}

function setLabel anonymous(value) {
    this.$$setLabelImpl.apply(this, arguments);
    return value;
}

function resetLabel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initLabel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeLabel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeLabel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIcon anonymous() {
    this.getIcon.$$install && this.getIcon.$$install();
    return this.getIcon.apply(this, arguments);
}

function setIcon anonymous(value) {
    this.$$setIconImpl.apply(this, arguments);
    return value;
}

function resetIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
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

function getOpener anonymous() {
    this.getOpener.$$install && this.getOpener.$$install();
    return this.getOpener.apply(this, arguments);
}

function setOpener anonymous(value) {
    this.$$setOpenerImpl.apply(this, arguments);
    return value;
}

function resetOpener() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeOpener() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeOpener() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getArrowPosition anonymous() {
    this.getArrowPosition.$$install && this.getArrowPosition.$$install();
    return this.getArrowPosition.apply(this, arguments);
}

function setArrowPosition anonymous() {
    this.setArrowPosition.$$install && this.setArrowPosition.$$install.call(this);
    return this.setArrowPosition.apply(this, arguments);
}

function resetArrowPosition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initArrowPosition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeArrowPosition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeArrowPosition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedArrowPosition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedArrowPosition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
} [object _forwardStatesObject]
function _createChildControlImpl(t) {
    var r;
    switch (t) {
        case n:
            r = new qx.ui.basic.Atom;
            this._add(r, {
                flex: 1
            });
            break;
        case i:
            r = new qx.ui.basic.Image;
            this._add(r)
    }
    return r || qx.ui.popup.Popup.prototype._createChildControlImpl.call(this, t)
}

function _onPointerOver() {}

function _applyIcon(t) {
    var i = this.getChildControl(n);
    t == null ? i.resetIcon() : i.setIcon(t)
}

function _applyLabel(t) {
    var i = this.getChildControl(n);
    t == null ? i.resetLabel() : i.setLabel(t)
}

function _applyRich(t) {
    var i = this.getChildControl(n);
    i.setRich(t)
}

function _applyArrowPosition(n) {
    this._getLayout().setReversed(n == t)
}

function initVisibility anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_visibility !== undefined) {
        old = this.$$runtime_visibility;
    } else if (this.$$user_visibility !== undefined) {
        old = this.$$user_visibility;
    } else if (this.$$useinit_visibility) {
        old = this.$$init_visibility;
    }
    var computed;
    if (this.$$runtime_visibility !== undefined) {
        computed = this.$$runtime_visibility;
    } else if (this.$$user_visibility !== undefined) {
        computed = this.$$user_visibility;
    } else if (this.$$useinit_visibility) {
        computed = this.$$init_visibility;
    } else {
        computed = this.$$init_visibility;
        this.$$useinit_visibility = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyVisibility(computed, old, "visibility", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeVisibility')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeVisibility', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeVisibilityAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeVisibilityAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setThemedBackgroundColor anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_backgroundColor !== undefined) {
            old = this.$$runtime_backgroundColor;
        } else if (this.$$user_backgroundColor !== undefined) {
            old = this.$$user_backgroundColor;
        } else if (this.$$theme_backgroundColor !== undefined) {
            old = this.$$theme_backgroundColor;
        } else if (this.$$useinit_backgroundColor) {
            old = this.$$init_backgroundColor;
        }
        if (equ.call(this, this.$$theme_backgroundColor, value)) return value;
        var computed;
        if (this.$$runtime_backgroundColor !== undefined) {
            computed = this.$$runtime_backgroundColor;
            this.$$theme_backgroundColor = value;
        } else if (this.$$user_backgroundColor !== undefined) {
            computed = this.$$user_backgroundColor;
            this.$$theme_backgroundColor = value;
        } else if (this.$$theme_backgroundColor !== undefined) {
            computed = this.$$theme_backgroundColor = value;
        } else if (this.$$useinit_backgroundColor) {
            delete this.$$useinit_backgroundColor;
            computed = this.$$theme_backgroundColor = value;
        } else {
            computed = this.$$theme_backgroundColor = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyBackgroundColor(computed, old, "backgroundColor", "setThemed");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeBackgroundColor')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeBackgroundColor', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeBackgroundColorAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeBackgroundColorAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setThemedOffsetTop anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_offsetTop !== undefined) {
            old = this.$$runtime_offsetTop;
        } else if (this.$$user_offsetTop !== undefined) {
            old = this.$$user_offsetTop;
        } else if (this.$$theme_offsetTop !== undefined) {
            old = this.$$theme_offsetTop;
        } else if (this.$$useinit_offsetTop) {
            old = this.$$init_offsetTop;
        }
        this.$$theme_offsetTop = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function setThemedOffsetRight anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_offsetRight !== undefined) {
            old = this.$$runtime_offsetRight;
        } else if (this.$$user_offsetRight !== undefined) {
            old = this.$$user_offsetRight;
        } else if (this.$$theme_offsetRight !== undefined) {
            old = this.$$theme_offsetRight;
        } else if (this.$$useinit_offsetRight) {
            old = this.$$init_offsetRight;
        }
        this.$$theme_offsetRight = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function setThemedOffsetBottom anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_offsetBottom !== undefined) {
            old = this.$$runtime_offsetBottom;
        } else if (this.$$user_offsetBottom !== undefined) {
            old = this.$$user_offsetBottom;
        } else if (this.$$theme_offsetBottom !== undefined) {
            old = this.$$theme_offsetBottom;
        } else if (this.$$useinit_offsetBottom) {
            old = this.$$init_offsetBottom;
        }
        this.$$theme_offsetBottom = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function setThemedOffsetLeft anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_offsetLeft !== undefined) {
            old = this.$$runtime_offsetLeft;
        } else if (this.$$user_offsetLeft !== undefined) {
            old = this.$$user_offsetLeft;
        } else if (this.$$theme_offsetLeft !== undefined) {
            old = this.$$theme_offsetLeft;
        } else if (this.$$useinit_offsetLeft) {
            old = this.$$init_offsetLeft;
        }
        this.$$theme_offsetLeft = value;
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

function update(a, p) {
    var nt, b, k, rt, d, w, tt, g, st, ht, ft, ct;
    this._currentObject = a;
    this._currentCityId = p;
    nt = webfrontend.gui.Util.generateItemInfos(a);
    this._lblTitle.setValue(nt.bn);
    b = r;
    k = r;
    switch (a.c) {
        case ClientLib.Base.EItemCategory.TiberiumGain:
            w = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(p);
            w != null && (d = Math.floor(w.GetResourceCount(ClientLib.Base.EResourceType.Tiberium)), b = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(d), k = this.tr(i, b, w.get_Name()));
            break;
        case ClientLib.Base.EItemCategory.CrystalGain:
            w = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(p);
            w != null && (d = Math.floor(w.GetResourceCount(ClientLib.Base.EResourceType.Crystal)), b = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(d), k = this.tr(i, b, w.get_Name()));
            break;
        case ClientLib.Base.EItemCategory.PowerGain:
            w = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(p);
            w != null && (d = Math.floor(w.GetResourceCount(ClientLib.Base.EResourceType.Power)), b = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(d), k = this.tr(i, b, w.get_Name()));
            break;
        case ClientLib.Base.EItemCategory.CreditGain:
            rt = ClientLib.Data.MainData.GetInstance().get_Player();
            d = rt.GetCreditsCount();
            b = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(d);
            k = this.tr(h, b);
            break;
        case ClientLib.Base.EItemCategory.CommandPointGain:
            var rt = ClientLib.Data.MainData.GetInstance().get_Player(),
                d = rt.GetCommandPointCount(),
                b = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(d);
            k = this.tr(h, b);
            break;
        case ClientLib.Base.EItemCategory.ArmyRepairTime:
            if (w = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(p), w != null) {
                tt = w.get_RepairOffenseResources();
                g = null;
                tt != null && (g = tt.get_RepairChargeOffense());
                var lt = g != null ? g.Type : 0,
                    ut = ClientLib.Data.MainData.GetInstance().get_Time(),
                    ot = ut.GetServerStep(),
                    d = Math.floor(w.GetResourceCount(lt));
                b = webfrontend.phe.cnc.Util.getTimespanString(ut.GetTimeSpan(d));
                k = this.tr(i, b, w.get_Name())
            }
            break;
        case ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity:
            if (w = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(p), w != null) {
                tt = w.get_RepairOffenseResources();
                g = null;
                tt != null && (g = tt.get_RepairChargeOffense());
                var lt = g != null ? g.Type : 0,
                    ut = ClientLib.Data.MainData.GetInstance().get_Time(),
                    ot = ut.GetServerStep(),
                    at = Math.floor(w.GetResourceMaxStorage(lt)),
                    b = webfrontend.phe.cnc.Util.getTimespanString(ut.GetTimeSpan(at)),
                    it = ClientLib.Data.MainData.GetInstance().get_Player().GetNextEffectEndStepByCategory(a.c),
                    ot = ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep();
                k = it > -1 ? this.tr(f, b, webfrontend.phe.cnc.Util.getShortTimespanString(it - ot, !0)) : this.tr(e, b)
            }
            break;
        case ClientLib.Base.EItemCategory.BonusPackageStorage:
            var b = ClientLib.Data.MainData.GetInstance().get_Player().get_PackageCount().toString(),
                it = ClientLib.Data.MainData.GetInstance().get_Player().GetNextEffectEndStepByCategory(a.c),
                ot = ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep();
            k = it > -1 ? this.tr(f, b, webfrontend.phe.cnc.Util.getShortTimespanString(it - ot, !0)) : this.tr(e, b);
            break;
        case ClientLib.Base.EItemCategory.CommandPointCapacityBuff:
            var ut = ClientLib.Data.MainData.GetInstance().get_Time(),
                ot = ut.GetServerStep(),
                rt = ClientLib.Data.MainData.GetInstance().get_Player(),
                vt = rt.GetCommandPointMaxStorage(),
                b = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(vt, !0),
                it = rt.GetNextEffectEndStepByCategory(a.c),
                ot = ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep();
            k = it > -1 ? this.tr(f, b, webfrontend.phe.cnc.Util.getShortTimespanString(it - ot, !0)) : this.tr(e, b)
    }
    this.__bbg.removeAll();
    st = new qx.ui.container.Composite((new qx.ui.layout.HBox).set({
        alignY: t,
        alignX: n
    })).set({
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: c,
        height: 25
    });
    st.add(new qx.ui.basic.Label(this.tr(y)).set({
        font: s
    }));
    this.__bbg.add(st, {
        row: 0,
        column: 0
    });
    nt.requiredImage != null && (ht = new qx.ui.container.Composite((new qx.ui.layout.HBox).set({
        alignY: t,
        alignX: n
    })).set({
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: c,
        height: 25
    }), ht.add(new qx.ui.basic.Label(this.tr(v, r)).set({
        font: s
    })), this.__bbg.add(ht, {
        row: 0,
        column: 1
    }));
    ft = new qx.ui.container.Composite((new qx.ui.layout.VBox).set({
        alignY: u,
        alignX: n
    })).set({
        allowGrowX: !0,
        allowGrowY: !0,
        padding: 5,
        height: 28,
        maxWidth: 250
    });
    ft.add(new qx.ui.basic.Label(nt.ds).set({
        rich: !0,
        wrap: !0,
        textColor: o
    }));
    var yt = new qx.ui.basic.Image(nt.resourceIcon),
        pt = new qx.ui.basic.Label(this.tr(l)).set({
            textColor: o
        }),
        wt = new qx.ui.basic.Label(k).set({
            textColor: o
        }),
        et = new qx.ui.container.Composite(new qx.ui.layout.HBox(2).set({
            alignY: t,
            alignX: n
        })).set({
            paddingTop: 5
        });
    et.add(pt);
    et.add(yt);
    et.add(wt);
    ft.add(et);
    this.__bbg.add(ft, {
        row: 1,
        column: 0
    });
    nt.requiredImage != null && (ct = new qx.ui.container.Composite((new qx.ui.layout.VBox).set({
        alignY: t,
        alignX: n
    })).set({
        allowGrowX: !0,
        allowGrowY: !0,
        height: 28
    }), ct.add(nt.requiredImage), this.__bbg.add(ct, {
        row: 1,
        column: 1
    }))
}

function _createLayout() {
    var t = new qx.ui.layout.Grid(0, 0);
    t.setColumnMaxWidth(0, 100);
    t.setColumnAlign(0, p, u);
    t.setColumnAlign(1, n, u);
    this.__bbg = new qx.ui.container.Composite(t);
    this._cntContent.add(this.__bbg)
}

function _onUITick() {
    this._currentObject != null && this.isVisible() && this.update(this._currentObject, this._currentCityId)
}