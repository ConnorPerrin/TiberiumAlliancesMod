function getAction anonymous() {
    this.getAction.$$install && this.getAction.$$install();
    return this.getAction.apply(this, arguments);
}

function setAction anonymous() {
    this.setAction.$$install && this.setAction.$$install.call(this);
    return this.setAction.apply(this, arguments);
}

function resetAction() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAction() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAction() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAction() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function _applyAction(n, t) {
    t && this.removeState(t);
    n && this.addState(n)
}

function getPosition anonymous() {
    this.getPosition.$$install && this.getPosition.$$install();
    return this.getPosition.apply(this, arguments);
}

function setPosition anonymous() {
    this.setPosition.$$install && this.setPosition.$$install.call(this);
    return this.setPosition.apply(this, arguments);
}

function resetPosition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimePosition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePosition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedPosition anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_position !== undefined) {
            old = this.$$runtime_position;
        } else if (this.$$user_position !== undefined) {
            old = this.$$user_position;
        } else if (this.$$theme_position !== undefined) {
            old = this.$$theme_position;
        } else if (this.$$useinit_position) {
            old = this.$$init_position;
        }
        this.$$theme_position = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetThemedPosition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getPlaceMethod anonymous() {
    this.getPlaceMethod.$$install && this.getPlaceMethod.$$install();
    return this.getPlaceMethod.apply(this, arguments);
}

function setPlaceMethod anonymous() {
    this.setPlaceMethod.$$install && this.setPlaceMethod.$$install.call(this);
    return this.setPlaceMethod.apply(this, arguments);
}

function resetPlaceMethod() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimePlaceMethod() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePlaceMethod() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedPlaceMethod() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedPlaceMethod() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getDomMove anonymous(value) {
    if (this.$$runtime_domMove !== undefined) return this.$$runtime_domMove;
    if (this.$$user_domMove !== undefined) return this.$$user_domMove;
    else return this.$$init_domMove;
}

function setDomMove anonymous(value) {
    this.$$setDomMoveImpl.apply(this, arguments);
    return value;
}

function resetDomMove() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeDomMove() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDomMove() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleDomMove anonymous() {
    return this.setDomMove(!this.getDomMove())
}

function isDomMove anonymous() {
    return this.getDomMove()
}

function getPlacementModeX anonymous() {
    this.getPlacementModeX.$$install && this.getPlacementModeX.$$install();
    return this.getPlacementModeX.apply(this, arguments);
}

function setPlacementModeX anonymous() {
    this.setPlacementModeX.$$install && this.setPlacementModeX.$$install.call(this);
    return this.setPlacementModeX.apply(this, arguments);
}

function resetPlacementModeX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimePlacementModeX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePlacementModeX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedPlacementModeX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedPlacementModeX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getPlacementModeY anonymous() {
    this.getPlacementModeY.$$install && this.getPlacementModeY.$$install();
    return this.getPlacementModeY.apply(this, arguments);
}

function setPlacementModeY anonymous() {
    this.setPlacementModeY.$$install && this.setPlacementModeY.$$install.call(this);
    return this.setPlacementModeY.apply(this, arguments);
}

function resetPlacementModeY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimePlacementModeY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePlacementModeY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedPlacementModeY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedPlacementModeY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getOffsetLeft anonymous() {
    this.getOffsetLeft.$$install && this.getOffsetLeft.$$install();
    return this.getOffsetLeft.apply(this, arguments);
}

function setOffsetLeft anonymous() {
    this.setOffsetLeft.$$install && this.setOffsetLeft.$$install.call(this);
    return this.setOffsetLeft.apply(this, arguments);
}

function resetOffsetLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeOffsetLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeOffsetLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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

function resetThemedOffsetLeft() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getOffsetTop anonymous() {
    this.getOffsetTop.$$install && this.getOffsetTop.$$install();
    return this.getOffsetTop.apply(this, arguments);
}

function setOffsetTop anonymous() {
    this.setOffsetTop.$$install && this.setOffsetTop.$$install.call(this);
    return this.setOffsetTop.apply(this, arguments);
}

function resetOffsetTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeOffsetTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeOffsetTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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

function resetThemedOffsetTop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getOffsetRight anonymous() {
    this.getOffsetRight.$$install && this.getOffsetRight.$$install();
    return this.getOffsetRight.apply(this, arguments);
}

function setOffsetRight anonymous() {
    this.setOffsetRight.$$install && this.setOffsetRight.$$install.call(this);
    return this.setOffsetRight.apply(this, arguments);
}

function resetOffsetRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeOffsetRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeOffsetRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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

function resetThemedOffsetRight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getOffsetBottom anonymous() {
    this.getOffsetBottom.$$install && this.getOffsetBottom.$$install();
    return this.getOffsetBottom.apply(this, arguments);
}

function setOffsetBottom anonymous() {
    this.setOffsetBottom.$$install && this.setOffsetBottom.$$install.call(this);
    return this.setOffsetBottom.apply(this, arguments);
}

function resetOffsetBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeOffsetBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeOffsetBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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

function resetThemedOffsetBottom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function setOffset anonymous() {
    var a = arguments[0] instanceof Array ? arguments[0] : arguments;
    a = qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));
    this.setOffsetTop(a[0]);
    this.setOffsetRight(a[1]);
    this.setOffsetBottom(a[2]);
    this.setOffsetLeft(a[3]);
}

function resetOffset anonymous() {
    this.resetOffsetTop();
    this.resetOffsetRight();
    this.resetOffsetBottom();
    this.resetOffsetLeft();
}

function setThemedOffset anonymous() {
    var a = arguments[0] instanceof Array ? arguments[0] : arguments;
    a = qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));
    this.setThemedOffsetTop(a[0]);
    this.setThemedOffsetRight(a[1]);
    this.setThemedOffsetBottom(a[2]);
    this.setThemedOffsetLeft(a[3]);
}

function resetThemedOffset anonymous() {
    this.resetThemedOffsetTop();
    this.resetThemedOffsetRight();
    this.resetThemedOffsetBottom();
    this.resetThemedOffsetLeft();
}

function getLayoutLocation(n) {
    var f, t, i, r, e, u;
    if (t = n.getBounds(), !t) return null;
    for (i = t.left, r = t.top, e = t, n = n.getLayoutParent(); n && !n.isRootWidget();) t = n.getBounds(), i += t.left, r += t.top, f = n.getInsets(), i += f.left, r += f.top, n = n.getLayoutParent();
    return n && n.isRootWidget() && (u = n.getContentLocation(), u && (i += u.left, r += u.top)), {
        left: i,
        top: r,
        right: i + e.width,
        bottom: r + e.height
    }
}

function moveTo(n, t) {
    var f = qx.ui.core.MPlacement.getVisibleElement(),
        r, i, e, o, s;
    f && (r = this.getBounds(), i = f.getContentLocation(), r && i && (e = t + r.height, o = n + r.width, o > i.left && n < i.right && e > i.top && t < i.bottom && (s = qx.ui.core.MPlacement.getMoveDirection(), s === u ? n = Math.max(i.left - r.width, 0) : t = Math.max(i.top - r.height, 0))));
    this.getDomMove() ? this.setDomPosition(n, t) : this.setLayoutProperties({
        left: n,
        top: t
    })
}

function placeToWidget(n, i) {
    i && (this.__ls(), this.__lp = qx.lang.Function.bind(this.placeToWidget, this, n, !1), qx.event.Idle.getInstance().addListener(t, this.__lp), this.__lr = function() {
        this.__ls()
    }, this.addListener(r, this.__lr, this));
    var u = n.getContentLocation() || this.getLayoutLocation(n);
    return u != null ? (this._place(u), !0) : !1
}

function placeToPointer(n) {
    var t = Math.round(n.getDocumentLeft()),
        i = Math.round(n.getDocumentTop()),
        r = {
            left: t,
            top: i,
            right: t,
            bottom: i
        };
    this._place(r)
}

function placeToElement(n, i) {
    var u = qx.bom.element.Location.get(n),
        f = {
            left: u.left,
            top: u.top,
            right: u.left + n.offsetWidth,
            bottom: u.top + n.offsetHeight
        };
    i && (this.__lp = qx.lang.Function.bind(this.placeToElement, this, n, !1), qx.event.Idle.getInstance().addListener(t, this.__lp), this.addListener(r, function() {
        this.__lp && (qx.event.Idle.getInstance().removeListener(t, this.__lp), this.__lp = null)
    }, this));
    this._place(f)
}

function placeToPoint(n) {
    var t = {
        left: n.left,
        top: n.top,
        right: n.left,
        bottom: n.top
    };
    this._place(t)
}

function _getPlacementOffsets() {
    return {
        left: this.getOffsetLeft(),
        top: this.getOffsetTop(),
        right: this.getOffsetRight(),
        bottom: this.getOffsetBottom()
    }
}

function _place(n) {
    this.__lt(function(t) {
        var i = qx.util.placement.Placement.compute(t, this.getLayoutParent().getBounds(), n, this._getPlacementOffsets(), this.getPosition(), this.getPlacementModeX(), this.getPlacementModeY());
        this.removeState(o);
        this.removeState(e);
        this.addState(n.left < i.left ? e : o);
        this.moveTo(i.left, i.top)
    })
}

function setThemedSource anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_source !== undefined) {
            old = this.$$runtime_source;
        } else if (this.$$user_source !== undefined) {
            old = this.$$user_source;
        } else if (this.$$theme_source !== undefined) {
            old = this.$$theme_source;
        } else if (this.$$useinit_source) {
            old = this.$$init_source;
        }
        value = this._transformSource(value, old);
        if (equ.call(this, this.$$theme_source, value)) return value;
        var computed;
        if (this.$$runtime_source !== undefined) {
            computed = this.$$runtime_source;
            this.$$theme_source = value;
        } else if (this.$$user_source !== undefined) {
            computed = this.$$user_source;
            this.$$theme_source = value;
        } else if (this.$$theme_source !== undefined) {
            computed = this.$$theme_source = value;
        } else if (this.$$useinit_source) {
            delete this.$$useinit_source;
            computed = this.$$theme_source = value;
        } else {
            computed = this.$$theme_source = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_source;
        var self = this;
        var promise;
        promise = this._applySource(computed, old, "source", "setThemed");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeSource')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeSource', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeSourceAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeSourceAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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