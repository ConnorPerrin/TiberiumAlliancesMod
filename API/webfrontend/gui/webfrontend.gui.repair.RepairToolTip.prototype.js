function getShowTimeout anonymous(value) {
    if (this.$$runtime_showTimeout !== undefined) return this.$$runtime_showTimeout;
    if (this.$$user_showTimeout !== undefined) return this.$$user_showTimeout;
    else if (this.$$theme_showTimeout !== undefined) return this.$$theme_showTimeout;
    else return this.$$init_showTimeout;
}

function setShowTimeout anonymous(value) {
    this.$$setShowTimeoutImpl.apply(this, arguments);
    return value;
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

function setHideTimeout anonymous(value) {
    this.$$setHideTimeoutImpl.apply(this, arguments);
    return value;
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

function getIcon anonymous(value) {
    if (this.$$runtime_icon !== undefined) return this.$$runtime_icon;
    if (this.$$user_icon !== undefined) return this.$$user_icon;
    else if (this.$$theme_icon !== undefined) return this.$$theme_icon;
    else return null;
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

function getOpener anonymous(value) {
    if (this.$$runtime_opener !== undefined) return this.$$runtime_opener;
    if (this.$$user_opener !== undefined) return this.$$user_opener;
    else return null;
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

function getArrowPosition anonymous(value) {
    if (this.$$runtime_arrowPosition !== undefined) return this.$$runtime_arrowPosition;
    if (this.$$user_arrowPosition !== undefined) return this.$$user_arrowPosition;
    else if (this.$$theme_arrowPosition !== undefined) return this.$$theme_arrowPosition;
    else return this.$$init_arrowPosition;
}

function setArrowPosition anonymous(value) {
    this.$$setArrowPositionImpl.apply(this, arguments);
    return value;
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

function updateRepairData(n, f) {
    var d = this.__bnW == null,
        o, a, p, c, s, e, y, l, h;
    if (this.__bnW = n, this.__bnX = f, this.isVisible() || d) {
        if (o = 0, a = !1, this.__bnQ.show(), this.__bnT.exclude(), !(n.get_HasOutgoingAttack() && (f == ClientLib.Vis.Mode.ArmySetup || f == ClientLib.Vis.Mode.CombatSetup)) && this.__boh(n, f)) {
            p = ClientLib.Res.ResMain.GetInstance();
            c = n.get_CityRepairData().get_CachedFullRepairAllCost();
            a = f == ClientLib.Vis.Mode.ArmySetup;
            a && (s = this.__bog(n, c), s[0] != -1 && s[1] != -1 && s[2] != -1 && (this.__bof(n, this.__boe[o], s[0], s[1], s[2], ct), o++));
            this.__bnV == !1 && (n.UpdateStepsRequiredForResourcesCachedPredictions(c), this.__bnV = !0);
            for (e in c.d)
                if (e == ClientLib.Base.EResourceType.Tiberium || e == ClientLib.Base.EResourceType.Crystal || e == ClientLib.Base.EResourceType.Power || e == ClientLib.Base.EResourceType.RepairChargeBase) {
                    var v = c.d[e],
                        g = f == ClientLib.Vis.Mode.ArmySetup && e == ClientLib.Base.EResourceType.Crystal ? webfrontend.data.ChallengeEvents.getInstance().applyCurrentRewards(v, ClientLib.Data.Challenge.Challenge.ECRT_Modify_RepairCrystal_Offense) : v,
                        b = p.GetResource(e);
                    b && (y = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(b.i), webfrontend.phe.cnc.res.Main.getInstance().cacheImage(y), this.__bof(n, this.__boe[o], e, v, g, y), o++)
                }
        }
        for (o == 0 ? (l = t, l = (f == ClientLib.Vis.Mode.ArmySetup || f == ClientLib.Vis.Mode.CombatSetup) && n.get_HasOutgoingAttack() ? this.tr(lt) : this.__boi(n, f), this.__Ol.setValue(l), this.__Ol.setVisibility(l.length > 0 ? r : i), this.__RO.setValue(l.length > 0 ? this.tr(gt) : this.tr(ii)), this.__RO.setFont(u)) : (this.__Ol.setVisibility(i), this.__RO.setValue(this.tr(k)), this.__RO.setFont(w)), this.__bnS.setVisibility(a ? r : i), h = o; h < this.__boe.length; h++) this.__boe[h].img.exclude(), this.__boe[h].lvlCost.exclude(), this.__boe[h].lblAvailIn.exclude()
    }
}