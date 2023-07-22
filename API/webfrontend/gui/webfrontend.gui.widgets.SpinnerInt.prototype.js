function getSingleStep anonymous() {
    this.getSingleStep.$$install && this.getSingleStep.$$install();
    return this.getSingleStep.apply(this, arguments);
}

function setSingleStep anonymous() {
    this.setSingleStep.$$install && this.setSingleStep.$$install.call(this);
    return this.setSingleStep.apply(this, arguments);
}

function resetSingleStep() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeSingleStep() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSingleStep() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getPageStep anonymous() {
    this.getPageStep.$$install && this.getPageStep.$$install();
    return this.getPageStep.apply(this, arguments);
}

function setPageStep anonymous() {
    this.setPageStep.$$install && this.setPageStep.$$install.call(this);
    return this.setPageStep.apply(this, arguments);
}

function resetPageStep() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimePageStep() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePageStep() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getMinimum anonymous(value) {
    if (this.$$runtime_minimum !== undefined) return this.$$runtime_minimum;
    if (this.$$user_minimum !== undefined) return this.$$user_minimum;
    else return this.$$init_minimum;
}

function setMinimum anonymous(value) {
    this.$$setMinimumImpl.apply(this, arguments);
    return value;
}

function resetMinimum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initMinimum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeMinimum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeMinimum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getValue anonymous(value) {
    if (this.$$runtime_value !== undefined) return this.$$runtime_value;
    if (this.$$user_value !== undefined) return this.$$user_value;
    else return this.$$init_value;
}

function setValue anonymous(value) {
    this.$$setValueImpl.apply(this, arguments);
    return value;
}

function resetValue() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initValue anonymous(value) {
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
    var computed;
    if (this.$$runtime_value !== undefined) {
        computed = this.$$runtime_value;
    } else if (this.$$user_value !== undefined) {
        computed = this.$$user_value;
    } else if (this.$$useinit_value) {
        computed = this.$$init_value;
    } else {
        computed = this.$$init_value;
        this.$$useinit_value = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyValue(computed, old, "value", "init");

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

function setRuntimeValue() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeValue() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getMaximum anonymous(value) {
    if (this.$$runtime_maximum !== undefined) return this.$$runtime_maximum;
    if (this.$$user_maximum !== undefined) return this.$$user_maximum;
    else return this.$$init_maximum;
}

function setMaximum anonymous(value) {
    this.$$setMaximumImpl.apply(this, arguments);
    return value;
}

function resetMaximum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initMaximum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeMaximum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeMaximum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getWrap anonymous(value) {
    if (this.$$runtime_wrap !== undefined) return this.$$runtime_wrap;
    if (this.$$user_wrap !== undefined) return this.$$user_wrap;
    else return this.$$init_wrap;
}

function setWrap anonymous() {
    this.setWrap.$$install && this.setWrap.$$install.call(this);
    return this.setWrap.apply(this, arguments);
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

function getEditable anonymous() {
    this.getEditable.$$install && this.getEditable.$$install();
    return this.getEditable.apply(this, arguments);
}

function setEditable anonymous() {
    this.setEditable.$$install && this.setEditable.$$install.call(this);
    return this.setEditable.apply(this, arguments);
}

function resetEditable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initEditable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeEditable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeEditable() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleEditable anonymous() {
    return this.setEditable(!this.getEditable())
}

function isEditable anonymous() {
    return this.getEditable()
}

function getNumberFormat anonymous(value) {
    if (this.$$runtime_numberFormat !== undefined) return this.$$runtime_numberFormat;
    if (this.$$user_numberFormat !== undefined) return this.$$user_numberFormat;
    else return null;
}

function setNumberFormat anonymous() {
    this.setNumberFormat.$$install && this.setNumberFormat.$$install.call(this);
    return this.setNumberFormat.apply(this, arguments);
}

function resetNumberFormat() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initNumberFormat() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeNumberFormat() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeNumberFormat() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function _createChildControlImpl(u) {
    var f;
    switch (u) {
        case n:
            f = new qx.ui.form.TextField;
            f.setFilter(this._getFilterRegExp());
            f.addState(e);
            f.setWidth(40);
            f.setFocusable(!1);
            f.addListener(r, this._onTextChange, this);
            this._add(f, {
                column: 0,
                row: 0,
                rowSpan: 2
            });
            break;
        case i:
            f = new qx.ui.form.RepeatButton;
            f.addState(e);
            f.setFocusable(!1);
            f.addListener(l, this._countUp, this);
            this._add(f, {
                column: 1,
                row: 0
            });
            break;
        case t:
            f = new qx.ui.form.RepeatButton;
            f.addState(e);
            f.setFocusable(!1);
            f.addListener(l, this._countDown, this);
            this._add(f, {
                column: 1,
                row: 1
            })
    }
    return f || qx.ui.core.Widget.prototype._createChildControlImpl.call(this, u)
}

function _getFilterRegExp() {
    return new RegExp(n)
} [object _forwardStatesObject]
function tabFocus() {
    var t = this.getChildControl(n);
    t.getFocusElement().focus();
    t.selectAllText()
}

function _applyMinimum(n) {
    this.getMaximum() < n && this.setMaximum(n);
    this.getValue() < n ? this.setValue(n) : this._updateButtons()
}

function _applyMaximum(n) {
    this.getMinimum() > n && this.setMinimum(n);
    this.getValue() > n ? this.setValue(n) : this._updateButtons()
}

function _applyEnabled(n, t) {
    qx.ui.core.Widget.prototype._applyEnabled.call(this, n, t);
    this._updateButtons()
}

function _checkValue(n) {
    return typeof n === nt && n >= this.getMinimum() && n <= this.getMaximum()
}

function _applyValue(t) {
    var i = this.getChildControl(n);
    this._updateButtons();
    this.__tB = t;
    t !== null ? this.getNumberFormat() ? i.setValue(this.getNumberFormat().format(t)) : i.setValue(t + u) : i.setValue(u)
}

function _applyEditable(t) {
    var i = this.getChildControl(n);
    i && i.setReadOnly(!t)
}

function _applyWrap() {
    this._updateButtons()
}

function _applyNumberFormat(t, i) {
    var u = this.getChildControl(n),
        r;
    u.setFilter(this._getFilterRegExp());
    i && i.removeListener(o, this._onChangeNumberFormat, this);
    r = this.getNumberFormat();
    r !== null && r.addListener(o, this._onChangeNumberFormat, this);
    this._applyValue(this.__tB, undefined)
}

function _getContentPaddingTarget() {
    return this.getChildControl(n)
}

function _updateButtons() {
    var n = this.getChildControl(i),
        r = this.getChildControl(t),
        u = this.getValue();
    this.getEnabled() ? this.getWrap() ? (n.setEnabled(!0), r.setEnabled(!0)) : (u !== null && u < this.getMaximum() ? n.setEnabled(!0) : n.setEnabled(!1), u !== null && u > this.getMinimum() ? r.setEnabled(!0) : r.setEnabled(!1)) : (n.setEnabled(!1), r.setEnabled(!1))
}

function _onKeyDown(u) {
    switch (u.getKeyIdentifier()) {
        case s:
            this.__tC = !0;
            this.getChildControl(n).fireNonBubblingEvent(r, qx.event.type.Data);
            this.getChildControl(i).press();
            break;
        case y:
            this.getChildControl(n).fireNonBubblingEvent(r, qx.event.type.Data);
            this.getChildControl(i).press();
            break;
        case a:
            this.__tD = !0;
            this.getChildControl(n).fireNonBubblingEvent(r, qx.event.type.Data);
            this.getChildControl(t).press();
            break;
        case c:
            this.getChildControl(n).fireNonBubblingEvent(r, qx.event.type.Data);
            this.getChildControl(t).press();
            break;
        default:
            return
    }
    u.stopPropagation();
    u.preventDefault()
}

function _onKeyUp(n) {
    switch (n.getKeyIdentifier()) {
        case s:
            this.getChildControl(i).release();
            this.__tC = !1;
            break;
        case y:
            this.getChildControl(i).release();
            break;
        case a:
            this.getChildControl(t).release();
            this.__tD = !1;
            break;
        case c:
            this.getChildControl(t).release()
    }
}

function _onRoll(n) {
    if (n.getPointerType() == rt) {
        var t = n.getDelta().y;
        t < 0 ? this._countUp() : t > 0 && this._countDown();
        n.stop()
    }
}

function _onTextChange() {
    var i = this.getChildControl(n),
        t;
    if (this.getNumberFormat()) try {
        t = this.getNumberFormat().parse(i.getValue())
    } catch (r) {}
    t === undefined && (t = parseFloat(i.getValue()));
    isNaN(t) ? this._applyValue(this.__tB, undefined) : (t > this.getMaximum() ? t = this.getMaximum() : t < this.getMinimum() && (t = this.getMinimum()), t === this.__tB ? this._applyValue(this.__tB) : this.setValue(t))
}

function _onChangeLocale() {
    if (this.getNumberFormat() !== null) {
        this.setNumberFormat(this.getNumberFormat());
        var t = this.getChildControl(n);
        t.setFilter(this._getFilterRegExp());
        t.setValue(this.getNumberFormat().format(this.getValue()))
    }
}

function _onChangeNumberFormat() {
    var t = this.getChildControl(n);
    t.setFilter(this._getFilterRegExp());
    t.setValue(this.getNumberFormat().format(this.getValue()))
}

function _countUp() {
    var n, t;
    n = this.__tC ? this.getValue() + this.getPageStep() : this.getValue() + this.getSingleStep();
    this.getWrap() && n > this.getMaximum() && (t = this.getMaximum() - n, n = this.getMinimum() - t - 1);
    this.gotoValue(n)
}

function _countDown() {
    var n, t;
    n = this.__tD ? this.getValue() - this.getPageStep() : this.getValue() - this.getSingleStep();
    this.getWrap() && n < this.getMinimum() && (t = this.getMinimum() + n, n = this.getMaximum() + t + 1);
    this.gotoValue(n)
}

function gotoValue(n) {
    return this.setValue(Math.min(this.getMaximum(), Math.max(this.getMinimum(), n)))
}

function focus() {
    qx.ui.core.Widget.prototype.focus.call(this);
    this.getChildControl(n).getFocusElement().focus()
}

function getContentPaddingTop anonymous() {
    this.getContentPaddingTop.$$install && this.getContentPaddingTop.$$install();
    return this.getContentPaddingTop.apply(this, arguments);
}

function setContentPaddingTop anonymous() {
    this.setContentPaddingTop.$$install && this.setContentPaddingTop.$$install.call(this);
    return this.setContentPaddingTop.apply(this, arguments);
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

function setContentPaddingRight anonymous() {
    this.setContentPaddingRight.$$install && this.setContentPaddingRight.$$install.call(this);
    return this.setContentPaddingRight.apply(this, arguments);
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

function setContentPaddingBottom anonymous() {
    this.setContentPaddingBottom.$$install && this.setContentPaddingBottom.$$install.call(this);
    return this.setContentPaddingBottom.apply(this, arguments);
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

function setContentPaddingLeft anonymous() {
    this.setContentPaddingLeft.$$install && this.setContentPaddingLeft.$$install.call(this);
    return this.setContentPaddingLeft.apply(this, arguments);
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

function getValid anonymous() {
    this.getValid.$$install && this.getValid.$$install();
    return this.getValid.apply(this, arguments);
}

function setValid anonymous() {
    this.setValid.$$install && this.setValid.$$install.call(this);
    return this.setValid.apply(this, arguments);
}

function resetValid() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initValid() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeValid() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeValid() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleValid anonymous() {
    return this.setValid(!this.getValid())
}

function isValid anonymous() {
    return this.getValid()
}

function getRequired anonymous() {
    this.getRequired.$$install && this.getRequired.$$install();
    return this.getRequired.apply(this, arguments);
}

function setRequired anonymous() {
    this.setRequired.$$install && this.setRequired.$$install.call(this);
    return this.setRequired.apply(this, arguments);
}

function resetRequired() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRequired() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRequired() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRequired() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleRequired anonymous() {
    return this.setRequired(!this.getRequired())
}

function isRequired anonymous() {
    return this.getRequired()
}

function getInvalidMessage anonymous() {
    this.getInvalidMessage.$$install && this.getInvalidMessage.$$install();
    return this.getInvalidMessage.apply(this, arguments);
}

function setInvalidMessage anonymous() {
    this.setInvalidMessage.$$install && this.setInvalidMessage.$$install.call(this);
    return this.setInvalidMessage.apply(this, arguments);
}

function resetInvalidMessage() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initInvalidMessage() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeInvalidMessage() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeInvalidMessage() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRequiredInvalidMessage anonymous() {
    this.getRequiredInvalidMessage.$$install && this.getRequiredInvalidMessage.$$install();
    return this.getRequiredInvalidMessage.apply(this, arguments);
}

function setRequiredInvalidMessage anonymous() {
    this.setRequiredInvalidMessage.$$install && this.setRequiredInvalidMessage.$$install.call(this);
    return this.setRequiredInvalidMessage.apply(this, arguments);
}

function resetRequiredInvalidMessage() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRequiredInvalidMessage() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRequiredInvalidMessage() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRequiredInvalidMessage() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function _applyValid(n) {
    n ? this.removeState(f) : this.addState(f)
}

function _getFilterRegExp() {
    return new RegExp(n)
}

function initValue anonymous(value) {
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
    var computed;
    if (this.$$runtime_value !== undefined) {
        computed = this.$$runtime_value;
    } else if (this.$$user_value !== undefined) {
        computed = this.$$user_value;
    } else if (this.$$useinit_value) {
        computed = this.$$init_value;
    } else {
        computed = this.$$init_value;
        this.$$useinit_value = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyValue(computed, old, "value", "init");

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