function getActive anonymous(value) {
    if (this.$$runtime_Active !== undefined) return this.$$runtime_Active;
    if (this.$$user_Active !== undefined) return this.$$user_Active;
    else return this.$$init_Active;
}

function setActive anonymous(value) {
    this.$$setActiveImpl.apply(this, arguments);
    return value;
}

function resetActive anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_Active !== undefined) {
        old = this.$$runtime_Active;
    } else if (this.$$user_Active !== undefined) {
        old = this.$$user_Active;
    } else if (this.$$useinit_Active) {
        old = this.$$init_Active;
    }
    if (this.$$user_Active === undefined) return;
    var computed;
    if (this.$$runtime_Active !== undefined) {
        computed = this.$$runtime_Active;
        delete this.$$user_Active;
    } else if (this.$$user_Active !== undefined) {
        delete this.$$user_Active;
        if (this.$$runtime_Active !== undefined) computed = this.$$runtime_Active;
        if (this.$$theme_Active !== undefined) computed = this.$$theme_Active;
        else if (this.$$init_Active !== undefined) {
            computed = this.$$init_Active;
            this.$$useinit_Active = true;
        }
    } else if (this.$$useinit_Active) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_Active;
    var self = this;
    var promise;
    promise = this.__xY(computed, old, "Active", "reset");

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

function initActive anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_Active !== undefined) {
        old = this.$$runtime_Active;
    } else if (this.$$user_Active !== undefined) {
        old = this.$$user_Active;
    } else if (this.$$useinit_Active) {
        old = this.$$init_Active;
    }
    var computed;
    if (this.$$runtime_Active !== undefined) {
        computed = this.$$runtime_Active;
    } else if (this.$$user_Active !== undefined) {
        computed = this.$$user_Active;
    } else if (this.$$useinit_Active) {
        computed = this.$$init_Active;
    } else {
        computed = this.$$init_Active;
        this.$$useinit_Active = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this.__xY(computed, old, "Active", "init");

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

function setRuntimeActive anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_Active !== undefined) {
            old = this.$$runtime_Active;
        } else if (this.$$user_Active !== undefined) {
            old = this.$$user_Active;
        } else if (this.$$useinit_Active) {
            old = this.$$init_Active;
        }
        if (equ.call(this, this.$$runtime_Active, value)) return value;
        var computed;
        if (this.$$runtime_Active !== undefined) {
            computed = this.$$runtime_Active = value;
        } else if (this.$$user_Active !== undefined) {
            computed = this.$$runtime_Active = value;
        } else if (this.$$useinit_Active) {
            delete this.$$useinit_Active;
            computed = this.$$runtime_Active = value;
        } else {
            computed = this.$$runtime_Active = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_Active;
        var self = this;
        var promise;
        promise = this.__xY(computed, old, "Active", "setRuntime");

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

function resetRuntimeActive anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_Active !== undefined) {
        old = this.$$runtime_Active;
    } else if (this.$$user_Active !== undefined) {
        old = this.$$user_Active;
    } else if (this.$$useinit_Active) {
        old = this.$$init_Active;
    }
    if (this.$$runtime_Active === undefined) return;
    var computed;
    if (this.$$runtime_Active !== undefined) {
        delete this.$$runtime_Active;
        if (this.$$user_Active !== undefined) computed = this.$$user_Active;
        else if (this.$$theme_Active !== undefined) computed = this.$$theme_Active;
        else if (this.$$init_Active !== undefined) {
            computed = this.$$init_Active;
            this.$$useinit_Active = true;
        }
    } else if (this.$$user_Active !== undefined) {
        computed = this.$$user_Active;
    } else if (this.$$useinit_Active) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_Active;
    var self = this;
    var promise;
    promise = this.__xY(computed, old, "Active", "resetRuntime");

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

function getIsFading anonymous(value) {
    if (this.$$runtime_IsFading !== undefined) return this.$$runtime_IsFading;
    if (this.$$user_IsFading !== undefined) return this.$$user_IsFading;
    else return this.$$init_IsFading;
}

function setIsFading anonymous(value) {
    this.$$setIsFadingImpl.apply(this, arguments);
    return value;
}

function resetIsFading anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_IsFading !== undefined) delete this.$$user_IsFading;
}

function setRuntimeIsFading anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_IsFading !== undefined) {
            old = this.$$runtime_IsFading;
        } else if (this.$$user_IsFading !== undefined) {
            old = this.$$user_IsFading;
        } else if (this.$$useinit_IsFading) {
            old = this.$$init_IsFading;
        }
        this.$$runtime_IsFading = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeIsFading anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_IsFading !== undefined) delete this.$$runtime_IsFading;
}

function show() {
    qx.ui.container.Composite.prototype.show.call(this);
    this.setActive(!0)
}

function hide() {
    qx.ui.container.Composite.prototype.hide.call(this);
    this.setActive(!1)
}

function open(n, t, i, r) {
    webfrontend.gui.MenuOverlayWidget.prototype.open.call(this);
    this.__Xe = n;
    this.__dS = r ? r : ClientLib.Data.MainData.GetInstance().get_Mail().GetMailById(t);
    this.__Yd = i;
    this.__WW.removeAll();
    this.setMailType(this.__dS.Type);
    this.__VX.setValue(webfrontend.phe.cnc.gui.util.Text.cleanString(this.__dS.From));
    this.__dS.FromId > 0 ? this.__VX.set({
        appearance: s,
        cursor: f
    }) : (this.__VX.resetAppearance(), this.__VX.setCursor(k), this.getMailType() == ClientLib.Data.Mail.EMailType.Play4Free && (this.__VX.setValue(this.tr(p)), this.__VX.setTextColor(dt)));
    this.__XP.setValue(webfrontend.phe.cnc.gui.util.Text.cleanString(this.__dS.Subject));
    this.__Wi.setTime(this.__dS.Date);
    var o = webfrontend.phe.cnc.Util.getDateTimeString(this.__Wi);
    this.__XQ.setValue(o);
    switch (this.getMailType()) {
        case ClientLib.Data.Mail.EMailType.SystemAlliInvite:
            this.__Yi();
            break;
        case ClientLib.Data.Mail.EMailType.SubstitutionInvite:
            this.__Yj();
            break;
        case ClientLib.Data.Mail.EMailType.Play4Free:
            this.__Yk();
            break;
        case ClientLib.Data.Mail.EMailType.System:
            this.__Yl();
            break;
        case ClientLib.Data.Mail.EMailType.Standard:
        default:
            this.__Yh(this.__dS.Text)
    }
    this.__Yf();
    this.__XT.setVisibility(this.__dS.From == ClientLib.Data.MainData.GetInstance().get_Player().get_Name() || this.getMailType() != ClientLib.Data.Mail.EMailType.Standard ? e : u);
    this.__XV.setVisibility(!this.__dS.To || this.__dS.To.length < 2 || this.getMailType() != ClientLib.Data.Mail.EMailType.Standard ? e : u)
}

function close() {
    this.__Xe.toggle();
    this.__Xe._activate()
}

function toggle() {
    var n = qx.core.Init.getApplication();
    n.getCurrentMenuOverlay() === this ? n.switchMenuOverlay(null) : n.switchMenuOverlay(this);
    this._closeButton.reset()
}

function centerPosition() {
    var n = qx.core.Init.getApplication(),
        u = n.getDesktop().getBounds(),
        f = n.getMenuBar().getBounds(),
        t = n.getCurrentBottomOverlay(),
        i = Math.floor((u.width - webfrontend.gui.MenuOverlayWidget.OverlayWidth) / 2),
        r = f.height;
    t && t.isVisible() ? this.setLayoutProperties({
        left: i,
        top: r,
        bottom: webfrontend.Application.legacySocHeight + webfrontend.gui.notifications.Ticker.TickerHeight
    }) : this.setLayoutProperties({
        left: i,
        top: r,
        bottom: webfrontend.gui.notifications.Ticker.TickerHeight
    })
}

function onClose() {
    this.close()
}

function fadeIn() {
    this.animate(qx.phe.AnimationManager.getInstance().getAnimation(l).getDescription(), null, this.__hG, this)
}

function fadeOut() {
    this.animate(qx.phe.AnimationManager.getInstance().getAnimation(c).getDescription(), null, this.__hG, this)
}

function getIsUnsavedMessage() {
    return null
}

function doSaveClose() {}

function undoSaveClose() {}

function animate(t, i, r, u) {
    qx.html.Element.flush();
    this.stopAnimation();
    this.__vP(t.keyFrames);
    var f = this;
    this.__vO(function() {
        for (var e in t.keyFrames) {
            f.__vQ(f.getContentElement(), t.keyFrames[e]);
            break
        }
        r && f.addListenerOnce(n, r, u);
        f._animateImpl(t, i)
    }, function() {
        var e = null;
        for (var i in frames) e = t.keyFrames[i];
        f.__vQ(f.getContentElement(), t.keyFrames[i]);
        r && f.addListenerOnce(n, r, u)
    }, 5)
}

function stopAnimation() {
    this.__vN != null && this.__vN.cancel();
    this.__vN = null;
    this.__vM && this.__vM.isValid() && this.__vM.stop();
    this.__vM = null
}

function _animateImpl(i, r) {
    this.__vM = qx.bom.element.Animation.animate(this.getContentElement().getDomElement(), i, r);
    this.__vM.on(t, function() {
        this.fireEvent(n)
    }, this)
}

function getMailType anonymous() {
    this.getMailType.$$install && this.getMailType.$$install();
    return this.getMailType.apply(this, arguments);
}

function setMailType anonymous() {
    this.setMailType.$$install && this.setMailType.$$install.call(this);
    return this.setMailType.apply(this, arguments);
}

function resetMailType() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initMailType() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeMailType() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeMailType() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function _activate() {
    webfrontend.gui.mail.MailOverlay.getInstance().setOpenedDisplay(!0)
}

function _deactivate() {
    webfrontend.gui.mail.MailOverlay.getInstance().setOpenedDisplay(!1)
}

function open(n, t, i, r) {
    webfrontend.gui.MenuOverlayWidget.prototype.open.call(this);
    this.__Xe = n;
    this.__dS = r ? r : ClientLib.Data.MainData.GetInstance().get_Mail().GetMailById(t);
    this.__Yd = i;
    this.__WW.removeAll();
    this.setMailType(this.__dS.Type);
    this.__VX.setValue(webfrontend.phe.cnc.gui.util.Text.cleanString(this.__dS.From));
    this.__dS.FromId > 0 ? this.__VX.set({
        appearance: s,
        cursor: f
    }) : (this.__VX.resetAppearance(), this.__VX.setCursor(k), this.getMailType() == ClientLib.Data.Mail.EMailType.Play4Free && (this.__VX.setValue(this.tr(p)), this.__VX.setTextColor(dt)));
    this.__XP.setValue(webfrontend.phe.cnc.gui.util.Text.cleanString(this.__dS.Subject));
    this.__Wi.setTime(this.__dS.Date);
    var o = webfrontend.phe.cnc.Util.getDateTimeString(this.__Wi);
    this.__XQ.setValue(o);
    switch (this.getMailType()) {
        case ClientLib.Data.Mail.EMailType.SystemAlliInvite:
            this.__Yi();
            break;
        case ClientLib.Data.Mail.EMailType.SubstitutionInvite:
            this.__Yj();
            break;
        case ClientLib.Data.Mail.EMailType.Play4Free:
            this.__Yk();
            break;
        case ClientLib.Data.Mail.EMailType.System:
            this.__Yl();
            break;
        case ClientLib.Data.Mail.EMailType.Standard:
        default:
            this.__Yh(this.__dS.Text)
    }
    this.__Yf();
    this.__XT.setVisibility(this.__dS.From == ClientLib.Data.MainData.GetInstance().get_Player().get_Name() || this.getMailType() != ClientLib.Data.Mail.EMailType.Standard ? e : u);
    this.__XV.setVisibility(!this.__dS.To || this.__dS.To.length < 2 || this.getMailType() != ClientLib.Data.Mail.EMailType.Standard ? e : u)
}

function close() {
    this.__Xe.toggle();
    this.__Xe._activate()
}