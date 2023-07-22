function getInnerDecorator anonymous(value) {
    if (this.$$runtime_innerDecorator !== undefined) return this.$$runtime_innerDecorator;
    if (this.$$user_innerDecorator !== undefined) return this.$$user_innerDecorator;
    else if (this.$$theme_innerDecorator !== undefined) return this.$$theme_innerDecorator;
    else return null;
}

function setInnerDecorator anonymous(value) {
    this.$$setInnerDecoratorImpl.apply(this, arguments);
    return value;
}

function resetInnerDecorator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initInnerDecorator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeInnerDecorator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeInnerDecorator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedInnerDecorator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedInnerDecorator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getChildrenContainer() {
    return this.__tA
}

function _getContentPaddingTarget() {
    return this.getChildrenContainer()
}

function _resetDomReady() {
    this.getLayoutParent() && this.getLayoutParent()._resetDomReady()
}

function isDomReady() {
    return this.__tz.isDomReady() && this.__tA.isDomReady()
}

function setLayout(n) {
    this.getChildrenContainer().setLayout(n)
}

function getLayout() {
    return this.getChildrenContainer().getLayout()
}

function add(n, t) {
    return this.__tl(i, n, t)
}

function remove(n) {
    return this.__tl(c, n)
}

function addAt(n, t, i) {
    this.__tl(f, n, t, i)
}

function addBefore(n, t, i) {
    this.__tl(r, n, t, i)
}

function addAfter(n, i, r) {
    this.__tl(t, n, i, r)
}

function removeAt(n) {
    return this.__tl(o, n)
}

function getContentPaddingTop anonymous() {
    this.getContentPaddingTop.$$install && this.getContentPaddingTop.$$install();
    return this.getContentPaddingTop.apply(this, arguments);
}

function setContentPaddingTop anonymous(value) {
    this.$$setContentPaddingTopImpl.apply(this, arguments);
    return value;
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

function setContentPaddingRight anonymous(value) {
    this.$$setContentPaddingRightImpl.apply(this, arguments);
    return value;
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

function setContentPaddingBottom anonymous(value) {
    this.$$setContentPaddingBottomImpl.apply(this, arguments);
    return value;
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

function setContentPaddingLeft anonymous(value) {
    this.$$setContentPaddingLeftImpl.apply(this, arguments);
    return value;
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