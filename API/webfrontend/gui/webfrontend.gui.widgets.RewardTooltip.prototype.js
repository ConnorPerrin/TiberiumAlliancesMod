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

function getMaxLootText anonymous(value) {
    if (this.$$runtime_maxLootText !== undefined) return this.$$runtime_maxLootText;
    if (this.$$user_maxLootText !== undefined) return this.$$user_maxLootText;
    else return this.$$init_maxLootText;
}

function setMaxLootText anonymous() {
    this.setMaxLootText.$$install && this.setMaxLootText.$$install.call(this);
    return this.setMaxLootText.apply(this, arguments);
}

function resetMaxLootText() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initMaxLootText() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeMaxLootText() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeMaxLootText() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRewardAlternativeColor anonymous() {
    this.getRewardAlternativeColor.$$install && this.getRewardAlternativeColor.$$install();
    return this.getRewardAlternativeColor.apply(this, arguments);
}

function setRewardAlternativeColor anonymous() {
    this.setRewardAlternativeColor.$$install && this.setRewardAlternativeColor.$$install.call(this);
    return this.setRewardAlternativeColor.apply(this, arguments);
}

function resetRewardAlternativeColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRewardAlternativeColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRewardAlternativeColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRewardAlternativeColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRewardUnmodifiedColor anonymous(value) {
    if (this.$$runtime_rewardUnmodifiedColor !== undefined) return this.$$runtime_rewardUnmodifiedColor;
    if (this.$$user_rewardUnmodifiedColor !== undefined) return this.$$user_rewardUnmodifiedColor;
    else return this.$$init_rewardUnmodifiedColor;
}

function setRewardUnmodifiedColor anonymous() {
    this.setRewardUnmodifiedColor.$$install && this.setRewardUnmodifiedColor.$$install.call(this);
    return this.setRewardUnmodifiedColor.apply(this, arguments);
}

function resetRewardUnmodifiedColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRewardUnmodifiedColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRewardUnmodifiedColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRewardUnmodifiedColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRewardResearchPoint anonymous(value) {
    if (this.$$runtime_rewardResearchPoint !== undefined) return this.$$runtime_rewardResearchPoint;
    if (this.$$user_rewardResearchPoint !== undefined) return this.$$user_rewardResearchPoint;
    else return this.$$init_rewardResearchPoint;
}

function setRewardResearchPoint anonymous() {
    this.setRewardResearchPoint.$$install && this.setRewardResearchPoint.$$install.call(this);
    return this.setRewardResearchPoint.apply(this, arguments);
}

function resetRewardResearchPoint() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRewardResearchPoint() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRewardResearchPoint() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRewardResearchPoint() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRewardResearchPointUnmodified anonymous() {
    this.getRewardResearchPointUnmodified.$$install && this.getRewardResearchPointUnmodified.$$install();
    return this.getRewardResearchPointUnmodified.apply(this, arguments);
}

function setRewardResearchPointUnmodified anonymous() {
    this.setRewardResearchPointUnmodified.$$install && this.setRewardResearchPointUnmodified.$$install.call(this);
    return this.setRewardResearchPointUnmodified.apply(this, arguments);
}

function resetRewardResearchPointUnmodified() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRewardResearchPointUnmodified() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRewardResearchPointUnmodified() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRewardResearchPointUnmodified() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRewardTiberium anonymous(value) {
    if (this.$$runtime_rewardTiberium !== undefined) return this.$$runtime_rewardTiberium;
    if (this.$$user_rewardTiberium !== undefined) return this.$$user_rewardTiberium;
    else return this.$$init_rewardTiberium;
}

function setRewardTiberium anonymous() {
    this.setRewardTiberium.$$install && this.setRewardTiberium.$$install.call(this);
    return this.setRewardTiberium.apply(this, arguments);
}

function resetRewardTiberium() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRewardTiberium() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRewardTiberium() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRewardTiberium() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRewardVeteranPoint anonymous(value) {
    if (this.$$runtime_rewardVeteranPoint !== undefined) return this.$$runtime_rewardVeteranPoint;
    if (this.$$user_rewardVeteranPoint !== undefined) return this.$$user_rewardVeteranPoint;
    else return this.$$init_rewardVeteranPoint;
}

function setRewardVeteranPoint anonymous() {
    this.setRewardVeteranPoint.$$install && this.setRewardVeteranPoint.$$install.call(this);
    return this.setRewardVeteranPoint.apply(this, arguments);
}

function resetRewardVeteranPoint() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRewardVeteranPoint() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRewardVeteranPoint() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRewardVeteranPoint() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRewardCrystal anonymous(value) {
    if (this.$$runtime_rewardCrystal !== undefined) return this.$$runtime_rewardCrystal;
    if (this.$$user_rewardCrystal !== undefined) return this.$$user_rewardCrystal;
    else return this.$$init_rewardCrystal;
}

function setRewardCrystal anonymous() {
    this.setRewardCrystal.$$install && this.setRewardCrystal.$$install.call(this);
    return this.setRewardCrystal.apply(this, arguments);
}

function resetRewardCrystal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRewardCrystal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRewardCrystal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRewardCrystal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRewardPower anonymous(value) {
    if (this.$$runtime_rewardPower !== undefined) return this.$$runtime_rewardPower;
    if (this.$$user_rewardPower !== undefined) return this.$$user_rewardPower;
    else return this.$$init_rewardPower;
}

function setRewardPower anonymous() {
    this.setRewardPower.$$install && this.setRewardPower.$$install.call(this);
    return this.setRewardPower.apply(this, arguments);
}

function resetRewardPower() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRewardPower() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRewardPower() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRewardPower() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRewardCredits anonymous(value) {
    if (this.$$runtime_rewardCredits !== undefined) return this.$$runtime_rewardCredits;
    if (this.$$user_rewardCredits !== undefined) return this.$$user_rewardCredits;
    else return this.$$init_rewardCredits;
}

function setRewardCredits anonymous() {
    this.setRewardCredits.$$install && this.setRewardCredits.$$install.call(this);
    return this.setRewardCredits.apply(this, arguments);
}

function resetRewardCredits() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRewardCredits() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRewardCredits() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRewardCredits() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRewardCommandPoints anonymous(value) {
    if (this.$$runtime_rewardCommandPoints !== undefined) return this.$$runtime_rewardCommandPoints;
    if (this.$$user_rewardCommandPoints !== undefined) return this.$$user_rewardCommandPoints;
    else return this.$$init_rewardCommandPoints;
}

function setRewardCommandPoints anonymous() {
    this.setRewardCommandPoints.$$install && this.setRewardCommandPoints.$$install.call(this);
    return this.setRewardCommandPoints.apply(this, arguments);
}

function resetRewardCommandPoints() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRewardCommandPoints() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRewardCommandPoints() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRewardCommandPoints() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRewardRepairTimeAir anonymous() {
    this.getRewardRepairTimeAir.$$install && this.getRewardRepairTimeAir.$$install();
    return this.getRewardRepairTimeAir.apply(this, arguments);
}

function setRewardRepairTimeAir anonymous() {
    this.setRewardRepairTimeAir.$$install && this.setRewardRepairTimeAir.$$install.call(this);
    return this.setRewardRepairTimeAir.apply(this, arguments);
}

function resetRewardRepairTimeAir() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRewardRepairTimeAir() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRewardRepairTimeAir() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRewardRepairTimeAir() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRewardRepairTimeInf anonymous() {
    this.getRewardRepairTimeInf.$$install && this.getRewardRepairTimeInf.$$install();
    return this.getRewardRepairTimeInf.apply(this, arguments);
}

function setRewardRepairTimeInf anonymous() {
    this.setRewardRepairTimeInf.$$install && this.setRewardRepairTimeInf.$$install.call(this);
    return this.setRewardRepairTimeInf.apply(this, arguments);
}

function resetRewardRepairTimeInf() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRewardRepairTimeInf() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRewardRepairTimeInf() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRewardRepairTimeInf() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRewardRepairTimeVeh anonymous() {
    this.getRewardRepairTimeVeh.$$install && this.getRewardRepairTimeVeh.$$install();
    return this.getRewardRepairTimeVeh.apply(this, arguments);
}

function setRewardRepairTimeVeh anonymous() {
    this.setRewardRepairTimeVeh.$$install && this.setRewardRepairTimeVeh.$$install.call(this);
    return this.setRewardRepairTimeVeh.apply(this, arguments);
}

function resetRewardRepairTimeVeh() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRewardRepairTimeVeh() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRewardRepairTimeVeh() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRewardRepairTimeVeh() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRewardRepairTimeAll anonymous() {
    this.getRewardRepairTimeAll.$$install && this.getRewardRepairTimeAll.$$install();
    return this.getRewardRepairTimeAll.apply(this, arguments);
}

function setRewardRepairTimeAll anonymous() {
    this.setRewardRepairTimeAll.$$install && this.setRewardRepairTimeAll.$$install.call(this);
    return this.setRewardRepairTimeAll.apply(this, arguments);
}

function resetRewardRepairTimeAll() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRewardRepairTimeAll() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRewardRepairTimeAll() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRewardRepairTimeAll() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getPlunderResearchPoint anonymous(value) {
    if (this.$$runtime_plunderResearchPoint !== undefined) return this.$$runtime_plunderResearchPoint;
    if (this.$$user_plunderResearchPoint !== undefined) return this.$$user_plunderResearchPoint;
    else return this.$$init_plunderResearchPoint;
}

function setPlunderResearchPoint anonymous() {
    this.setPlunderResearchPoint.$$install && this.setPlunderResearchPoint.$$install.call(this);
    return this.setPlunderResearchPoint.apply(this, arguments);
}

function resetPlunderResearchPoint() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initPlunderResearchPoint() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimePlunderResearchPoint() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePlunderResearchPoint() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getPlunderTiberium anonymous(value) {
    if (this.$$runtime_plunderTiberium !== undefined) return this.$$runtime_plunderTiberium;
    if (this.$$user_plunderTiberium !== undefined) return this.$$user_plunderTiberium;
    else return this.$$init_plunderTiberium;
}

function setPlunderTiberium anonymous() {
    this.setPlunderTiberium.$$install && this.setPlunderTiberium.$$install.call(this);
    return this.setPlunderTiberium.apply(this, arguments);
}

function resetPlunderTiberium() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initPlunderTiberium() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimePlunderTiberium() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePlunderTiberium() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getPlunderCrystal anonymous(value) {
    if (this.$$runtime_plunderCrystal !== undefined) return this.$$runtime_plunderCrystal;
    if (this.$$user_plunderCrystal !== undefined) return this.$$user_plunderCrystal;
    else return this.$$init_plunderCrystal;
}

function setPlunderCrystal anonymous() {
    this.setPlunderCrystal.$$install && this.setPlunderCrystal.$$install.call(this);
    return this.setPlunderCrystal.apply(this, arguments);
}

function resetPlunderCrystal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initPlunderCrystal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimePlunderCrystal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePlunderCrystal() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getPlunderPower anonymous(value) {
    if (this.$$runtime_plunderPower !== undefined) return this.$$runtime_plunderPower;
    if (this.$$user_plunderPower !== undefined) return this.$$user_plunderPower;
    else return this.$$init_plunderPower;
}

function setPlunderPower anonymous() {
    this.setPlunderPower.$$install && this.setPlunderPower.$$install.call(this);
    return this.setPlunderPower.apply(this, arguments);
}

function resetPlunderPower() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initPlunderPower() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimePlunderPower() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePlunderPower() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getPlunderCredits anonymous(value) {
    if (this.$$runtime_plunderCredits !== undefined) return this.$$runtime_plunderCredits;
    if (this.$$user_plunderCredits !== undefined) return this.$$user_plunderCredits;
    else return this.$$init_plunderCredits;
}

function setPlunderCredits anonymous() {
    this.setPlunderCredits.$$install && this.setPlunderCredits.$$install.call(this);
    return this.setPlunderCredits.apply(this, arguments);
}

function resetPlunderCredits() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initPlunderCredits() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimePlunderCredits() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePlunderCredits() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getShowRepairCosts anonymous() {
    this.getShowRepairCosts.$$install && this.getShowRepairCosts.$$install();
    return this.getShowRepairCosts.apply(this, arguments);
}

function setShowRepairCosts anonymous() {
    this.setShowRepairCosts.$$install && this.setShowRepairCosts.$$install.call(this);
    return this.setShowRepairCosts.apply(this, arguments);
}

function resetShowRepairCosts() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initShowRepairCosts() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeShowRepairCosts() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeShowRepairCosts() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleShowRepairCosts anonymous() {
    return this.setShowRepairCosts(!this.getShowRepairCosts())
}

function isShowRepairCosts anonymous() {
    return this.getShowRepairCosts()
}

function getIsEventCampReport anonymous() {
    this.getIsEventCampReport.$$install && this.getIsEventCampReport.$$install();
    return this.getIsEventCampReport.apply(this, arguments);
}

function setIsEventCampReport anonymous() {
    this.setIsEventCampReport.$$install && this.setIsEventCampReport.$$install.call(this);
    return this.setIsEventCampReport.apply(this, arguments);
}

function resetIsEventCampReport() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIsEventCampReport() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIsEventCampReport() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIsEventCampReport() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleIsEventCampReport anonymous() {
    return this.setIsEventCampReport(!this.getIsEventCampReport())
}

function isIsEventCampReport anonymous() {
    return this.getIsEventCampReport()
}

function updateFromReport(n, t, i) {
    i && n.get_CombatResult() == ClientLib.Data.Reports.ECombatResult.CityDestroyed ? this.__EH.setValue(this.tr(it)) : this.__EH.setValue(this.tr(ft));
    this.setRewardResearchPoint(n.GetAttackerResourceReward(ClientLib.Base.EResourceType.ResearchPoints));
    this.setRewardResearchPointUnmodified(n.GetAttackerResourceRewardBeforeChallengeReward(ClientLib.Base.EResourceType.ResearchPoints));
    this.setRewardTiberium(n.GetAttackerResourceReward(ClientLib.Base.EResourceType.Tiberium));
    this.setRewardCrystal(n.GetAttackerResourceReward(ClientLib.Base.EResourceType.Crystal));
    this.setRewardPower(n.GetAttackerResourceReward(ClientLib.Base.EResourceType.Power));
    this.setRewardCredits(n.GetAttackerResourceReward(ClientLib.Base.EResourceType.Gold));
    this.setRewardVeteranPoint(n.GetAttackerResourceReward(ClientLib.Base.EResourceType.VeteranPoints));
    this.__EU.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(n.GetAttackerResourceReward(ClientLib.Base.EResourceType.Gold)).toString());
    this.__EM.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(n.GetAttackerResourceReward(ClientLib.Base.EResourceType.Tiberium)).toString());
    this.__EQ.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(n.GetAttackerResourceReward(ClientLib.Base.EResourceType.Crystal)).toString());
    this.__ES.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(n.GetAttackerResourceReward(ClientLib.Base.EResourceType.Power)).toString());
    this.__EJ.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(n.GetAttackerResourceReward(ClientLib.Base.EResourceType.ResearchPoints)).toString());
    this.__EO.setValue(webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(n.GetAttackerResourceReward(ClientLib.Base.EResourceType.VeteranPoints)).toString());
    i || (this.setRewardCommandPoints(n.GetAttackerTotalResourceReceived(ClientLib.Base.EResourceType.CommandPoints)), this.setRewardRepairTimeAir(n.GetAttackerTotalResourceReceived(ClientLib.Base.EResourceType.RepairChargeAir)), this.setRewardRepairTimeInf(n.GetAttackerTotalResourceReceived(ClientLib.Base.EResourceType.RepairChargeInf)), this.setRewardRepairTimeVeh(n.GetAttackerTotalResourceReceived(ClientLib.Base.EResourceType.RepairChargeVeh)), this.setRewardRepairTimeAll(n.GetAttackerTotalResourceReceived(ClientLib.Base.EResourceType.RepairChargeOffense_RewardsOnly)));
    this.setPlunderResearchPoint(n.GetAttackerResourcePlunder(ClientLib.Base.EResourceType.ResearchPoints));
    this.setPlunderTiberium(n.GetAttackerResourcePlunder(ClientLib.Base.EResourceType.Tiberium));
    this.setPlunderCrystal(n.GetAttackerResourcePlunder(ClientLib.Base.EResourceType.Crystal));
    this.setPlunderPower(n.GetAttackerResourcePlunder(ClientLib.Base.EResourceType.Power));
    this.setPlunderCredits(n.GetAttackerResourcePlunder(ClientLib.Base.EResourceType.Gold));
    i ? (this.__Fi.setValue(this.tr(gi)), this.__yY.setValue(this.tr(ti))) : (this.__Fi.setValue(this.tr(h)), n.get_Type() == ClientLib.Data.Reports.EReportType.NPCRaid && this.__yY.setValue(this.tr(yi)));
    this.setIsEventCampReport(parseInt(n.get_DefenderBaseName(), 10) == 10);
    this.setShowRepairCosts(t);
    t && this.__Fw.setValue(webfrontend.gui.reports.ReportsUtil.generateRepairCostToolTipText(n))
}