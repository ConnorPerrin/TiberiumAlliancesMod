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

function open() {
    var n = qx.core.Init.getApplication();
    n.getCurrentMenuOverlay() !== this && this.toggle()
}

function close() {
    var n = qx.core.Init.getApplication();
    n.getCurrentMenuOverlay() === this && n.switchMenuOverlay(null)
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
    return this.__HO && this.__HO.getIsUnsavedMessage()
}

function doSaveClose() {
    return this.__HO.doSaveClose()
}

function undoSaveClose() {
    return this.__HO.undoSaveClose()
}

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

function getCanViewSharedAllianceForums anonymous() {
    this.getCanViewSharedAllianceForums.$$install && this.getCanViewSharedAllianceForums.$$install();
    return this.getCanViewSharedAllianceForums.apply(this, arguments);
}

function setCanViewSharedAllianceForums anonymous(value) {
    this.$$setCanViewSharedAllianceForumsImpl.apply(this, arguments);
    return value;
}

function resetCanViewSharedAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanViewSharedAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanViewSharedAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanViewSharedAllianceForums() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getHasAllianceForum anonymous(value) {
    if (this.$$runtime_hasAllianceForum !== undefined) return this.$$runtime_hasAllianceForum;
    if (this.$$user_hasAllianceForum !== undefined) return this.$$user_hasAllianceForum;
    else return this.$$init_hasAllianceForum;
}

function setHasAllianceForum anonymous(value) {
    this.$$setHasAllianceForumImpl.apply(this, arguments);
    return value;
}

function resetHasAllianceForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initHasAllianceForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeHasAllianceForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeHasAllianceForum() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function isDomReady() {
    return webfrontend.gui.MenuOverlayWidget.prototype.isDomReady.call(this) && !this.__HT && !this.__HU
}

function _activate() {
    if (this.__AV) {
        this.__HX();
        return
    }
    this.__HW()
}

function _deactivate() {
    this.__AV && (this.__AV = !1, webfrontend.data.AllianceEvents.getInstance().removeListener(f, this.__Ib, this), webfrontend.data.AllianceEvents.getInstance().removeListener(i, this.__Ic, this), webfrontend.data.AllianceEvents.getInstance().removeListener(r, this.__Id, this));
    this.__HO && this.__HO.close()
}

function openCurrentCategory() {
    var n = this.getIsUnsavedMessage();
    n && n.title && n.text ? (n.textRich = !0, n.executeOk = function() {
        this.undoSaveClose();
        this.__Ii()
    }, n.executeCancel = function() {}, n.callbackContext = this, webfrontend.gui.MessageBox.messageBox(n)) : (this.__HS = {
        idCategory: this.__HO.getForumType()
    }, this.__HX())
}

function openForum(n) {
    var t = this.getIsUnsavedMessage();
    t && t.title && t.text ? (t.textRich = !0, t.executeOk = function() {
        this.undoSaveClose();
        this.__Ij(n)
    }, t.executeCancel = function() {}, t.callbackContext = this, webfrontend.gui.MessageBox.messageBox(t)) : (this.__HS = {
        idForum: n
    }, this.__HX())
}

function openThread(n, t, i) {
    var r = this.getIsUnsavedMessage();
    r && r.title && r.text ? (r.textRich = !0, r.executeOk = function() {
        this.undoSaveClose();
        this.__Ik(n, t, i)
    }, r.executeCancel = function() {}, r.callbackContext = this, webfrontend.gui.MessageBox.messageBox(r)) : (this.__HS = {
        idForum: n,
        idThread: t,
        bGoLast: i
    }, this.__HX())
}

function showInsufficientRightsMessage() {
    this.__HR || (this.__HR = !0, webfrontend.gui.MessageBox.messageBox({
        title: this.tr(a),
        text: this.tr(y),
        buttons: 1,
        executeOk: function() {
            this.__HR = !1
        },
        callbackContext: this
    }))
}

function getIsUnsavedMessage() {
    return this.__HO && this.__HO.getIsUnsavedMessage()
}

function doSaveClose() {
    return this.__HO.doSaveClose()
}

function undoSaveClose() {
    return this.__HO.undoSaveClose()
}