function getCenterOnShow anonymous(value) {
    if (this.$$runtime_centerOnShow !== undefined) return this.$$runtime_centerOnShow;
    if (this.$$user_centerOnShow !== undefined) return this.$$user_centerOnShow;
    else return this.$$init_centerOnShow;
}

function setCenterOnShow anonymous(value) {
    this.$$setCenterOnShowImpl.apply(this, arguments);
    return value;
}

function resetCenterOnShow anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_centerOnShow !== undefined) delete this.$$user_centerOnShow;
}

function setRuntimeCenterOnShow anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_centerOnShow !== undefined) {
            old = this.$$runtime_centerOnShow;
        } else if (this.$$user_centerOnShow !== undefined) {
            old = this.$$user_centerOnShow;
        } else if (this.$$useinit_centerOnShow) {
            old = this.$$init_centerOnShow;
        }
        this.$$runtime_centerOnShow = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeCenterOnShow anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_centerOnShow !== undefined) delete this.$$runtime_centerOnShow;
}

function toggleCenterOnShow anonymous() {
    return this.setCenterOnShow(!this.getCenterOnShow())
}

function isCenterOnShow anonymous() {
    return this.getCenterOnShow()
}

function bringToFront() {
    qx.core.Init.getApplication().getRoot().getWindowManager().bringToFront(this)
}

function centerPosition() {
    var n = 0,
        t = 0,
        f = 0,
        e = 0,
        s = qx.core.Init.getApplication(),
        o = s.getMainOverlay(),
        i, r, u;
    return o != null ? (i = o.getBounds(), n = i.width, t = i.height, f = i.left, e = i.top) : (n = qx.bom.Viewport.getWidth(window), t = qx.bom.Viewport.getHeight(window)), r = this.getWidth(), r == null && this.getBounds() != null && (r = this.getBounds().width), u = this.getHeight(), u == null && this.getBounds() != null && (u = this.getBounds().height), n = f + Math.floor((n - r) / 2), t = e + Math.floor((t - u) / 2), this.moveTo(n, t), {
        x: n,
        y: t
    }
}

function fadeIn() {
    this.animate(qx.phe.AnimationManager.getInstance().getAnimation(u).getDescription())
}

function fadeOut() {
    this.animate(qx.phe.AnimationManager.getInstance().getAnimation(n).getDescription())
}

function _onClose() {
    webfrontend.gui.CustomWindow.prototype._onClose.call(this);
    webfrontend.gui.reports.ReportPopup.numWindowsOpen--;
    this._updateOnDisappear()
}

function _onCloseButtonTap() {
    ClientLib.Vis.VisMain.GetInstance().PlayUISound(webfrontend.ui.SoundButton.defaultFile);
    qx.ui.window.Window.prototype._onCloseButtonTap.call(this)
}

function _onDesktopResize() {
    var u = qx.core.Init.getApplication(),
        t = u.getDesktop().getBounds(),
        n = this.getBounds(),
        i, r;
    n !== null && t !== null && (i = n.left, r = n.top, n.left < t.left && (i = t.left), n.left + n.width > t.width && (i = t.width - n.width), n.top < t.top && (r = t.top), n.top + n.height > t.height && (r = t.height - n.height), this.moveTo(i, r))
}

function _deferredAppear() {
    var n, t, i;
    webfrontend.gui.CustomWindow.prototype._deferredAppear.call(this);
    webfrontend.gui.reports.ReportPopup.windowXPosStart < 0 || webfrontend.gui.reports.ReportPopup.windowYPosStart < 0 || webfrontend.gui.reports.ReportPopup.numWindowsOpen <= 0 ? (n = this.centerPosition(), this.moveTo(n.x, webfrontend.gui.reports.ReportPopup.windowYPosStart), webfrontend.gui.reports.ReportPopup.windowXPosStart = n.x) : (t = qx.bom.Viewport.getWidth(window), i = qx.bom.Viewport.getHeight(window), webfrontend.gui.reports.ReportPopup.windowXPosStart += 20, webfrontend.gui.reports.ReportPopup.windowYPosStart += 20, (webfrontend.gui.reports.ReportPopup.windowXPosStart + this.getWidth() > t || webfrontend.gui.reports.ReportPopup.windowYPosStart + this.getHeight() > i) && (webfrontend.gui.reports.ReportPopup.windowXPosStart = 0, webfrontend.gui.reports.ReportPopup.windowYPosStart = webfrontend.gui.reports.ReportPopup.windowYPosOriginalStart), this.moveTo(webfrontend.gui.reports.ReportPopup.windowXPosStart, webfrontend.gui.reports.ReportPopup.windowYPosStart));
    webfrontend.gui.reports.ReportPopup.numWindowsOpen++;
    this._updateOnAppear()
}

function _isActive() {
    return this.__vR
}

function close(t) {
    (this.__vR || t) && (this.fireNonBubblingEvent(r, qx.event.type.Event, [!1, !0]) || t) && (this.__vR = !1, t ? qx.ui.window.Window.prototype.close.call(this) : this.animate(qx.phe.AnimationManager.getInstance().getAnimation(n).getDescription(), null, function() {
        this.close(!0)
    }, this))
}

function show() {
    this.isVisible() ? this.bringToFront() : (this.__vS || (this.__vS = this.addListenerOnce(i, this._deferredAppear, this)), this.setCssContent(e), qx.ui.window.Window.prototype.show.call(this), this.__vR = !0)
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

function resetActive anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_active !== undefined) {
        old = this.$$runtime_active;
    } else if (this.$$user_active !== undefined) {
        old = this.$$user_active;
    } else if (this.$$useinit_active) {
        old = this.$$init_active;
    }
    if (this.$$user_active === undefined) return;
    var computed;
    if (this.$$runtime_active !== undefined) {
        computed = this.$$runtime_active;
        delete this.$$user_active;
    } else if (this.$$user_active !== undefined) {
        delete this.$$user_active;
        if (this.$$runtime_active !== undefined) computed = this.$$runtime_active;
        if (this.$$theme_active !== undefined) computed = this.$$theme_active;
        else if (this.$$init_active !== undefined) {
            computed = this.$$init_active;
            this.$$useinit_active = true;
        }
    } else if (this.$$useinit_active) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_active;
    var self = this;
    var promise;
    promise = this._applyActive(computed, old, "active", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeActive')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeActive', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeActiveAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeActiveAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initActive anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_active !== undefined) {
        old = this.$$runtime_active;
    } else if (this.$$user_active !== undefined) {
        old = this.$$user_active;
    } else if (this.$$useinit_active) {
        old = this.$$init_active;
    }
    var computed;
    if (this.$$runtime_active !== undefined) {
        computed = this.$$runtime_active;
    } else if (this.$$user_active !== undefined) {
        computed = this.$$user_active;
    } else if (this.$$useinit_active) {
        computed = this.$$init_active;
    } else {
        computed = this.$$init_active;
        this.$$useinit_active = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyActive(computed, old, "active", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeActive')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeActive', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeActiveAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeActiveAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeActive anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_active !== undefined) {
            old = this.$$runtime_active;
        } else if (this.$$user_active !== undefined) {
            old = this.$$user_active;
        } else if (this.$$useinit_active) {
            old = this.$$init_active;
        }
        if (equ.call(this, this.$$runtime_active, value)) return value;
        var computed;
        if (this.$$runtime_active !== undefined) {
            computed = this.$$runtime_active = value;
        } else if (this.$$user_active !== undefined) {
            computed = this.$$runtime_active = value;
        } else if (this.$$useinit_active) {
            delete this.$$useinit_active;
            computed = this.$$runtime_active = value;
        } else {
            computed = this.$$runtime_active = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_active;
        var self = this;
        var promise;
        promise = this._applyActive(computed, old, "active", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeActive')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeActive', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeActiveAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeActiveAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeActive anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_active !== undefined) {
        old = this.$$runtime_active;
    } else if (this.$$user_active !== undefined) {
        old = this.$$user_active;
    } else if (this.$$useinit_active) {
        old = this.$$init_active;
    }
    if (this.$$runtime_active === undefined) return;
    var computed;
    if (this.$$runtime_active !== undefined) {
        delete this.$$runtime_active;
        if (this.$$user_active !== undefined) computed = this.$$user_active;
        else if (this.$$theme_active !== undefined) computed = this.$$theme_active;
        else if (this.$$init_active !== undefined) {
            computed = this.$$init_active;
            this.$$useinit_active = true;
        }
    } else if (this.$$user_active !== undefined) {
        computed = this.$$user_active;
    } else if (this.$$useinit_active) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_active;
    var self = this;
    var promise;
    promise = this._applyActive(computed, old, "active", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeActive')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeActive', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeActiveAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeActiveAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetAlwaysOnTop anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_alwaysOnTop !== undefined) {
        old = this.$$runtime_alwaysOnTop;
    } else if (this.$$user_alwaysOnTop !== undefined) {
        old = this.$$user_alwaysOnTop;
    } else if (this.$$useinit_alwaysOnTop) {
        old = this.$$init_alwaysOnTop;
    }
    if (this.$$user_alwaysOnTop === undefined) return;
    var computed;
    if (this.$$runtime_alwaysOnTop !== undefined) {
        computed = this.$$runtime_alwaysOnTop;
        delete this.$$user_alwaysOnTop;
    } else if (this.$$user_alwaysOnTop !== undefined) {
        delete this.$$user_alwaysOnTop;
        if (this.$$runtime_alwaysOnTop !== undefined) computed = this.$$runtime_alwaysOnTop;
        if (this.$$theme_alwaysOnTop !== undefined) computed = this.$$theme_alwaysOnTop;
        else if (this.$$init_alwaysOnTop !== undefined) {
            computed = this.$$init_alwaysOnTop;
            this.$$useinit_alwaysOnTop = true;
        }
    } else if (this.$$useinit_alwaysOnTop) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_alwaysOnTop;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAlwaysOnTop')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAlwaysOnTop', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAlwaysOnTopAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAlwaysOnTopAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initAlwaysOnTop anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_alwaysOnTop !== undefined) {
        old = this.$$runtime_alwaysOnTop;
    } else if (this.$$user_alwaysOnTop !== undefined) {
        old = this.$$user_alwaysOnTop;
    } else if (this.$$useinit_alwaysOnTop) {
        old = this.$$init_alwaysOnTop;
    }
    var computed;
    if (this.$$runtime_alwaysOnTop !== undefined) {
        computed = this.$$runtime_alwaysOnTop;
    } else if (this.$$user_alwaysOnTop !== undefined) {
        computed = this.$$user_alwaysOnTop;
    } else if (this.$$useinit_alwaysOnTop) {
        computed = this.$$init_alwaysOnTop;
    } else {
        computed = this.$$init_alwaysOnTop;
        this.$$useinit_alwaysOnTop = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAlwaysOnTop')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAlwaysOnTop', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAlwaysOnTopAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAlwaysOnTopAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeAlwaysOnTop anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_alwaysOnTop !== undefined) {
            old = this.$$runtime_alwaysOnTop;
        } else if (this.$$user_alwaysOnTop !== undefined) {
            old = this.$$user_alwaysOnTop;
        } else if (this.$$useinit_alwaysOnTop) {
            old = this.$$init_alwaysOnTop;
        }
        if (equ.call(this, this.$$runtime_alwaysOnTop, value)) return value;
        var computed;
        if (this.$$runtime_alwaysOnTop !== undefined) {
            computed = this.$$runtime_alwaysOnTop = value;
        } else if (this.$$user_alwaysOnTop !== undefined) {
            computed = this.$$runtime_alwaysOnTop = value;
        } else if (this.$$useinit_alwaysOnTop) {
            delete this.$$useinit_alwaysOnTop;
            computed = this.$$runtime_alwaysOnTop = value;
        } else {
            computed = this.$$runtime_alwaysOnTop = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_alwaysOnTop;
        var self = this;
        var promise;

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeAlwaysOnTop')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAlwaysOnTop', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeAlwaysOnTopAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeAlwaysOnTopAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeAlwaysOnTop anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_alwaysOnTop !== undefined) {
        old = this.$$runtime_alwaysOnTop;
    } else if (this.$$user_alwaysOnTop !== undefined) {
        old = this.$$user_alwaysOnTop;
    } else if (this.$$useinit_alwaysOnTop) {
        old = this.$$init_alwaysOnTop;
    }
    if (this.$$runtime_alwaysOnTop === undefined) return;
    var computed;
    if (this.$$runtime_alwaysOnTop !== undefined) {
        delete this.$$runtime_alwaysOnTop;
        if (this.$$user_alwaysOnTop !== undefined) computed = this.$$user_alwaysOnTop;
        else if (this.$$theme_alwaysOnTop !== undefined) computed = this.$$theme_alwaysOnTop;
        else if (this.$$init_alwaysOnTop !== undefined) {
            computed = this.$$init_alwaysOnTop;
            this.$$useinit_alwaysOnTop = true;
        }
    } else if (this.$$user_alwaysOnTop !== undefined) {
        computed = this.$$user_alwaysOnTop;
    } else if (this.$$useinit_alwaysOnTop) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_alwaysOnTop;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAlwaysOnTop')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAlwaysOnTop', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAlwaysOnTopAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAlwaysOnTopAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetModal anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_modal !== undefined) {
        old = this.$$runtime_modal;
    } else if (this.$$user_modal !== undefined) {
        old = this.$$user_modal;
    } else if (this.$$useinit_modal) {
        old = this.$$init_modal;
    }
    if (this.$$user_modal === undefined) return;
    var computed;
    if (this.$$runtime_modal !== undefined) {
        computed = this.$$runtime_modal;
        delete this.$$user_modal;
    } else if (this.$$user_modal !== undefined) {
        delete this.$$user_modal;
        if (this.$$runtime_modal !== undefined) computed = this.$$runtime_modal;
        if (this.$$theme_modal !== undefined) computed = this.$$theme_modal;
        else if (this.$$init_modal !== undefined) {
            computed = this.$$init_modal;
            this.$$useinit_modal = true;
        }
    } else if (this.$$useinit_modal) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_modal;
    var self = this;
    var promise;
    promise = this._applyModal(computed, old, "modal", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeModal')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeModal', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeModalAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeModalAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initModal anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_modal !== undefined) {
        old = this.$$runtime_modal;
    } else if (this.$$user_modal !== undefined) {
        old = this.$$user_modal;
    } else if (this.$$useinit_modal) {
        old = this.$$init_modal;
    }
    var computed;
    if (this.$$runtime_modal !== undefined) {
        computed = this.$$runtime_modal;
    } else if (this.$$user_modal !== undefined) {
        computed = this.$$user_modal;
    } else if (this.$$useinit_modal) {
        computed = this.$$init_modal;
    } else {
        computed = this.$$init_modal;
        this.$$useinit_modal = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyModal(computed, old, "modal", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeModal')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeModal', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeModalAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeModalAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeModal anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_modal !== undefined) {
            old = this.$$runtime_modal;
        } else if (this.$$user_modal !== undefined) {
            old = this.$$user_modal;
        } else if (this.$$useinit_modal) {
            old = this.$$init_modal;
        }
        if (equ.call(this, this.$$runtime_modal, value)) return value;
        var computed;
        if (this.$$runtime_modal !== undefined) {
            computed = this.$$runtime_modal = value;
        } else if (this.$$user_modal !== undefined) {
            computed = this.$$runtime_modal = value;
        } else if (this.$$useinit_modal) {
            delete this.$$useinit_modal;
            computed = this.$$runtime_modal = value;
        } else {
            computed = this.$$runtime_modal = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_modal;
        var self = this;
        var promise;
        promise = this._applyModal(computed, old, "modal", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeModal')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeModal', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeModalAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeModalAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeModal anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_modal !== undefined) {
        old = this.$$runtime_modal;
    } else if (this.$$user_modal !== undefined) {
        old = this.$$user_modal;
    } else if (this.$$useinit_modal) {
        old = this.$$init_modal;
    }
    if (this.$$runtime_modal === undefined) return;
    var computed;
    if (this.$$runtime_modal !== undefined) {
        delete this.$$runtime_modal;
        if (this.$$user_modal !== undefined) computed = this.$$user_modal;
        else if (this.$$theme_modal !== undefined) computed = this.$$theme_modal;
        else if (this.$$init_modal !== undefined) {
            computed = this.$$init_modal;
            this.$$useinit_modal = true;
        }
    } else if (this.$$user_modal !== undefined) {
        computed = this.$$user_modal;
    } else if (this.$$useinit_modal) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_modal;
    var self = this;
    var promise;
    promise = this._applyModal(computed, old, "modal", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeModal')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeModal', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeModalAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeModalAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetCaption anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var old;
    if (this.$$runtime_caption !== undefined) {
        old = this.$$runtime_caption;
    } else if (this.$$user_caption !== undefined) {
        old = this.$$user_caption;
    } else if (this.$$useinit_caption) {
        old = this.$$init_caption;
    }
    if (this.$$user_caption === undefined) return;
    var computed;
    if (this.$$runtime_caption !== undefined) {
        computed = this.$$runtime_caption;
        delete this.$$user_caption;
    } else if (this.$$user_caption !== undefined) {
        delete this.$$user_caption;
        if (this.$$runtime_caption !== undefined) computed = this.$$runtime_caption;
        if (this.$$theme_caption !== undefined) computed = this.$$theme_caption;
        else if (this.$$init_caption !== undefined) {
            computed = this.$$init_caption;
            this.$$useinit_caption = true;
        }
    } else if (this.$$useinit_caption) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "caption", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeCaption')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeCaption', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeCaptionAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeCaptionAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initCaption anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var old;
        if (this.$$runtime_caption !== undefined) {
            old = this.$$runtime_caption;
        } else if (this.$$user_caption !== undefined) {
            old = this.$$user_caption;
        } else if (this.$$useinit_caption) {
            old = this.$$init_caption;
        }
        if (equ.call(this, this.$$init_caption, value)) return value;
        var computed;
        if (this.$$runtime_caption !== undefined) {
            computed = this.$$runtime_caption;
            this.$$init_caption = value;
        } else if (this.$$user_caption !== undefined) {
            computed = this.$$user_caption;
            this.$$init_caption = value;
        } else if (this.$$useinit_caption) {
            computed = this.$$init_caption = value;
        } else {
            computed = this.$$init_caption = value;
            this.$$useinit_caption = true;
        }
        if (computed === undefined) computed = null;
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyCaptionBarChange(computed, old, "caption", "init");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeCaption')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeCaption', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeCaptionAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeCaptionAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeCaption anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var old;
        if (this.$$runtime_caption !== undefined) {
            old = this.$$runtime_caption;
        } else if (this.$$user_caption !== undefined) {
            old = this.$$user_caption;
        } else if (this.$$useinit_caption) {
            old = this.$$init_caption;
        }
        if (equ.call(this, this.$$runtime_caption, value)) return value;
        var computed;
        if (this.$$runtime_caption !== undefined) {
            computed = this.$$runtime_caption = value;
        } else if (this.$$user_caption !== undefined) {
            computed = this.$$runtime_caption = value;
        } else if (this.$$useinit_caption) {
            delete this.$$useinit_caption;
            computed = this.$$runtime_caption = value;
        } else {
            computed = this.$$runtime_caption = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyCaptionBarChange(computed, old, "caption", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeCaption')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeCaption', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeCaptionAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeCaptionAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeCaption anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var old;
    if (this.$$runtime_caption !== undefined) {
        old = this.$$runtime_caption;
    } else if (this.$$user_caption !== undefined) {
        old = this.$$user_caption;
    } else if (this.$$useinit_caption) {
        old = this.$$init_caption;
    }
    if (this.$$runtime_caption === undefined) return;
    var computed;
    if (this.$$runtime_caption !== undefined) {
        delete this.$$runtime_caption;
        if (this.$$user_caption !== undefined) computed = this.$$user_caption;
        else if (this.$$theme_caption !== undefined) computed = this.$$theme_caption;
        else if (this.$$init_caption !== undefined) {
            computed = this.$$init_caption;
            this.$$useinit_caption = true;
        }
    } else if (this.$$user_caption !== undefined) {
        computed = this.$$user_caption;
    } else if (this.$$useinit_caption) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "caption", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeCaption')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeCaption', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeCaptionAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeCaptionAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetIcon anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_icon !== undefined) {
        old = this.$$runtime_icon;
    } else if (this.$$user_icon !== undefined) {
        old = this.$$user_icon;
    } else if (this.$$theme_icon !== undefined) {
        old = this.$$theme_icon;
    } else if (this.$$useinit_icon) {
        old = this.$$init_icon;
    }
    if (this.$$user_icon === undefined) return;
    var computed;
    if (this.$$runtime_icon !== undefined) {
        computed = this.$$runtime_icon;
        delete this.$$user_icon;
    } else if (this.$$user_icon !== undefined) {
        delete this.$$user_icon;
        if (this.$$runtime_icon !== undefined) computed = this.$$runtime_icon;
        if (this.$$theme_icon !== undefined) computed = this.$$theme_icon;
        else if (this.$$init_icon !== undefined) {
            computed = this.$$init_icon;
            this.$$useinit_icon = true;
        }
    } else if (this.$$theme_icon !== undefined) {} else if (this.$$useinit_icon) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "icon", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeIcon')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeIcon', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeIconAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeIconAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initIcon anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_icon !== undefined) {
            old = this.$$runtime_icon;
        } else if (this.$$user_icon !== undefined) {
            old = this.$$user_icon;
        } else if (this.$$theme_icon !== undefined) {
            old = this.$$theme_icon;
        } else if (this.$$useinit_icon) {
            old = this.$$init_icon;
        }
        if (equ.call(this, this.$$init_icon, value)) return value;
        var computed;
        if (this.$$runtime_icon !== undefined) {
            computed = this.$$runtime_icon;
            this.$$init_icon = value;
        } else if (this.$$user_icon !== undefined) {
            computed = this.$$user_icon;
            this.$$init_icon = value;
        } else if (this.$$theme_icon !== undefined) {
            this.$$init_icon = value;
            computed = this.$$theme_icon;
        } else if (this.$$useinit_icon) {
            computed = this.$$init_icon = value;
        } else {
            computed = this.$$init_icon = value;
            this.$$useinit_icon = true;
        }
        if (computed === undefined) computed = null;
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyCaptionBarChange(computed, old, "icon", "init");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeIcon')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeIcon', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeIconAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeIconAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeIcon anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_icon !== undefined) {
            old = this.$$runtime_icon;
        } else if (this.$$user_icon !== undefined) {
            old = this.$$user_icon;
        } else if (this.$$theme_icon !== undefined) {
            old = this.$$theme_icon;
        } else if (this.$$useinit_icon) {
            old = this.$$init_icon;
        }
        if (equ.call(this, this.$$runtime_icon, value)) return value;
        var computed;
        if (this.$$runtime_icon !== undefined) {
            computed = this.$$runtime_icon = value;
        } else if (this.$$user_icon !== undefined) {
            computed = this.$$runtime_icon = value;
        } else if (this.$$theme_icon !== undefined) {
            computed = this.$$runtime_icon = value;
        } else if (this.$$useinit_icon) {
            delete this.$$useinit_icon;
            computed = this.$$runtime_icon = value;
        } else {
            computed = this.$$runtime_icon = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyCaptionBarChange(computed, old, "icon", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeIcon')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeIcon', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeIconAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeIconAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeIcon anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_icon !== undefined) {
        old = this.$$runtime_icon;
    } else if (this.$$user_icon !== undefined) {
        old = this.$$user_icon;
    } else if (this.$$theme_icon !== undefined) {
        old = this.$$theme_icon;
    } else if (this.$$useinit_icon) {
        old = this.$$init_icon;
    }
    if (this.$$runtime_icon === undefined) return;
    var computed;
    if (this.$$runtime_icon !== undefined) {
        delete this.$$runtime_icon;
        if (this.$$user_icon !== undefined) computed = this.$$user_icon;
        else if (this.$$theme_icon !== undefined) computed = this.$$theme_icon;
        else if (this.$$init_icon !== undefined) {
            computed = this.$$init_icon;
            this.$$useinit_icon = true;
        }
    } else if (this.$$user_icon !== undefined) {
        computed = this.$$user_icon;
    } else if (this.$$theme_icon !== undefined) {} else if (this.$$useinit_icon) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "icon", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeIcon')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeIcon', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeIconAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeIconAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setThemedIcon anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_icon !== undefined) {
            old = this.$$runtime_icon;
        } else if (this.$$user_icon !== undefined) {
            old = this.$$user_icon;
        } else if (this.$$theme_icon !== undefined) {
            old = this.$$theme_icon;
        } else if (this.$$useinit_icon) {
            old = this.$$init_icon;
        }
        if (equ.call(this, this.$$theme_icon, value)) return value;
        var computed;
        if (this.$$runtime_icon !== undefined) {
            computed = this.$$runtime_icon;
            this.$$theme_icon = value;
        } else if (this.$$user_icon !== undefined) {
            computed = this.$$user_icon;
            this.$$theme_icon = value;
        } else if (this.$$theme_icon !== undefined) {
            computed = this.$$theme_icon = value;
        } else if (this.$$useinit_icon) {
            delete this.$$useinit_icon;
            computed = this.$$theme_icon = value;
        } else {
            computed = this.$$theme_icon = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyCaptionBarChange(computed, old, "icon", "setThemed");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeIcon')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeIcon', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeIconAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeIconAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetThemedIcon anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_icon !== undefined) {
        old = this.$$runtime_icon;
    } else if (this.$$user_icon !== undefined) {
        old = this.$$user_icon;
    } else if (this.$$theme_icon !== undefined) {
        old = this.$$theme_icon;
    } else if (this.$$useinit_icon) {
        old = this.$$init_icon;
    }
    if (this.$$theme_icon === undefined) return;
    var computed;
    if (this.$$runtime_icon !== undefined) {
        computed = this.$$runtime_icon;
        delete this.$$theme_icon;
    } else if (this.$$user_icon !== undefined) {
        computed = this.$$user_icon;
        delete this.$$theme_icon;
    } else if (this.$$theme_icon !== undefined) {
        delete this.$$theme_icon;
        if (this.$$init_icon !== undefined) {
            computed = this.$$init_icon;
            this.$$useinit_icon = true;
        }
    } else if (this.$$useinit_icon) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "icon", "resetThemed");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeIcon')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeIcon', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeIconAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeIconAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetStatus anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_status !== undefined) {
        old = this.$$runtime_status;
    } else if (this.$$user_status !== undefined) {
        old = this.$$user_status;
    } else if (this.$$useinit_status) {
        old = this.$$init_status;
    }
    if (this.$$user_status === undefined) return;
    var computed;
    if (this.$$runtime_status !== undefined) {
        computed = this.$$runtime_status;
        delete this.$$user_status;
    } else if (this.$$user_status !== undefined) {
        delete this.$$user_status;
        if (this.$$runtime_status !== undefined) computed = this.$$runtime_status;
        if (this.$$theme_status !== undefined) computed = this.$$theme_status;
        else if (this.$$init_status !== undefined) {
            computed = this.$$init_status;
            this.$$useinit_status = true;
        }
    } else if (this.$$useinit_status) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyStatus(computed, old, "status", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeStatus')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeStatus', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeStatusAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeStatusAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initStatus anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_status !== undefined) {
            old = this.$$runtime_status;
        } else if (this.$$user_status !== undefined) {
            old = this.$$user_status;
        } else if (this.$$useinit_status) {
            old = this.$$init_status;
        }
        if (equ.call(this, this.$$init_status, value)) return value;
        var computed;
        if (this.$$runtime_status !== undefined) {
            computed = this.$$runtime_status;
            this.$$init_status = value;
        } else if (this.$$user_status !== undefined) {
            computed = this.$$user_status;
            this.$$init_status = value;
        } else if (this.$$useinit_status) {
            computed = this.$$init_status = value;
        } else {
            computed = this.$$init_status = value;
            this.$$useinit_status = true;
        }
        if (computed === undefined) computed = null;
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyStatus(computed, old, "status", "init");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeStatus')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeStatus', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeStatusAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeStatusAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeStatus anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_status !== undefined) {
            old = this.$$runtime_status;
        } else if (this.$$user_status !== undefined) {
            old = this.$$user_status;
        } else if (this.$$useinit_status) {
            old = this.$$init_status;
        }
        if (equ.call(this, this.$$runtime_status, value)) return value;
        var computed;
        if (this.$$runtime_status !== undefined) {
            computed = this.$$runtime_status = value;
        } else if (this.$$user_status !== undefined) {
            computed = this.$$runtime_status = value;
        } else if (this.$$useinit_status) {
            delete this.$$useinit_status;
            computed = this.$$runtime_status = value;
        } else {
            computed = this.$$runtime_status = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyStatus(computed, old, "status", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeStatus')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeStatus', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeStatusAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeStatusAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeStatus anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_status !== undefined) {
        old = this.$$runtime_status;
    } else if (this.$$user_status !== undefined) {
        old = this.$$user_status;
    } else if (this.$$useinit_status) {
        old = this.$$init_status;
    }
    if (this.$$runtime_status === undefined) return;
    var computed;
    if (this.$$runtime_status !== undefined) {
        delete this.$$runtime_status;
        if (this.$$user_status !== undefined) computed = this.$$user_status;
        else if (this.$$theme_status !== undefined) computed = this.$$theme_status;
        else if (this.$$init_status !== undefined) {
            computed = this.$$init_status;
            this.$$useinit_status = true;
        }
    } else if (this.$$user_status !== undefined) {
        computed = this.$$user_status;
    } else if (this.$$useinit_status) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyStatus(computed, old, "status", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeStatus')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeStatus', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeStatusAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeStatusAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetShowClose anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showClose !== undefined) {
        old = this.$$runtime_showClose;
    } else if (this.$$user_showClose !== undefined) {
        old = this.$$user_showClose;
    } else if (this.$$theme_showClose !== undefined) {
        old = this.$$theme_showClose;
    } else if (this.$$useinit_showClose) {
        old = this.$$init_showClose;
    }
    if (this.$$user_showClose === undefined) return;
    var computed;
    if (this.$$runtime_showClose !== undefined) {
        computed = this.$$runtime_showClose;
        delete this.$$user_showClose;
    } else if (this.$$user_showClose !== undefined) {
        delete this.$$user_showClose;
        if (this.$$runtime_showClose !== undefined) computed = this.$$runtime_showClose;
        if (this.$$theme_showClose !== undefined) computed = this.$$theme_showClose;
        else if (this.$$init_showClose !== undefined) {
            computed = this.$$init_showClose;
            this.$$useinit_showClose = true;
        }
    } else if (this.$$theme_showClose !== undefined) {} else if (this.$$useinit_showClose) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_showClose;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "showClose", "reset");

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

function initShowClose anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showClose !== undefined) {
        old = this.$$runtime_showClose;
    } else if (this.$$user_showClose !== undefined) {
        old = this.$$user_showClose;
    } else if (this.$$theme_showClose !== undefined) {
        old = this.$$theme_showClose;
    } else if (this.$$useinit_showClose) {
        old = this.$$init_showClose;
    }
    var computed;
    if (this.$$runtime_showClose !== undefined) {
        computed = this.$$runtime_showClose;
    } else if (this.$$user_showClose !== undefined) {
        computed = this.$$user_showClose;
    } else if (this.$$theme_showClose !== undefined) {
        computed = this.$$theme_showClose;
    } else if (this.$$useinit_showClose) {
        computed = this.$$init_showClose;
    } else {
        computed = this.$$init_showClose;
        this.$$useinit_showClose = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "showClose", "init");

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

function setRuntimeShowClose anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_showClose !== undefined) {
            old = this.$$runtime_showClose;
        } else if (this.$$user_showClose !== undefined) {
            old = this.$$user_showClose;
        } else if (this.$$theme_showClose !== undefined) {
            old = this.$$theme_showClose;
        } else if (this.$$useinit_showClose) {
            old = this.$$init_showClose;
        }
        if (equ.call(this, this.$$runtime_showClose, value)) return value;
        var computed;
        if (this.$$runtime_showClose !== undefined) {
            computed = this.$$runtime_showClose = value;
        } else if (this.$$user_showClose !== undefined) {
            computed = this.$$runtime_showClose = value;
        } else if (this.$$theme_showClose !== undefined) {
            computed = this.$$runtime_showClose = value;
        } else if (this.$$useinit_showClose) {
            delete this.$$useinit_showClose;
            computed = this.$$runtime_showClose = value;
        } else {
            computed = this.$$runtime_showClose = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_showClose;
        var self = this;
        var promise;
        promise = this._applyCaptionBarChange(computed, old, "showClose", "setRuntime");

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

function resetRuntimeShowClose anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showClose !== undefined) {
        old = this.$$runtime_showClose;
    } else if (this.$$user_showClose !== undefined) {
        old = this.$$user_showClose;
    } else if (this.$$theme_showClose !== undefined) {
        old = this.$$theme_showClose;
    } else if (this.$$useinit_showClose) {
        old = this.$$init_showClose;
    }
    if (this.$$runtime_showClose === undefined) return;
    var computed;
    if (this.$$runtime_showClose !== undefined) {
        delete this.$$runtime_showClose;
        if (this.$$user_showClose !== undefined) computed = this.$$user_showClose;
        else if (this.$$theme_showClose !== undefined) computed = this.$$theme_showClose;
        else if (this.$$init_showClose !== undefined) {
            computed = this.$$init_showClose;
            this.$$useinit_showClose = true;
        }
    } else if (this.$$user_showClose !== undefined) {
        computed = this.$$user_showClose;
    } else if (this.$$theme_showClose !== undefined) {} else if (this.$$useinit_showClose) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_showClose;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "showClose", "resetRuntime");

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

function setThemedShowClose anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_showClose !== undefined) {
            old = this.$$runtime_showClose;
        } else if (this.$$user_showClose !== undefined) {
            old = this.$$user_showClose;
        } else if (this.$$theme_showClose !== undefined) {
            old = this.$$theme_showClose;
        } else if (this.$$useinit_showClose) {
            old = this.$$init_showClose;
        }
        if (equ.call(this, this.$$theme_showClose, value)) return value;
        var computed;
        if (this.$$runtime_showClose !== undefined) {
            computed = this.$$runtime_showClose;
            this.$$theme_showClose = value;
        } else if (this.$$user_showClose !== undefined) {
            computed = this.$$user_showClose;
            this.$$theme_showClose = value;
        } else if (this.$$theme_showClose !== undefined) {
            computed = this.$$theme_showClose = value;
        } else if (this.$$useinit_showClose) {
            delete this.$$useinit_showClose;
            computed = this.$$theme_showClose = value;
        } else {
            computed = this.$$theme_showClose = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_showClose;
        var self = this;
        var promise;
        promise = this._applyCaptionBarChange(computed, old, "showClose", "setThemed");

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

function resetThemedShowClose anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showClose !== undefined) {
        old = this.$$runtime_showClose;
    } else if (this.$$user_showClose !== undefined) {
        old = this.$$user_showClose;
    } else if (this.$$theme_showClose !== undefined) {
        old = this.$$theme_showClose;
    } else if (this.$$useinit_showClose) {
        old = this.$$init_showClose;
    }
    if (this.$$theme_showClose === undefined) return;
    var computed;
    if (this.$$runtime_showClose !== undefined) {
        computed = this.$$runtime_showClose;
        delete this.$$theme_showClose;
    } else if (this.$$user_showClose !== undefined) {
        computed = this.$$user_showClose;
        delete this.$$theme_showClose;
    } else if (this.$$theme_showClose !== undefined) {
        delete this.$$theme_showClose;
        if (this.$$init_showClose !== undefined) {
            computed = this.$$init_showClose;
            this.$$useinit_showClose = true;
        }
    } else if (this.$$useinit_showClose) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_showClose;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "showClose", "resetThemed");

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

function resetShowMaximize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showMaximize !== undefined) {
        old = this.$$runtime_showMaximize;
    } else if (this.$$user_showMaximize !== undefined) {
        old = this.$$user_showMaximize;
    } else if (this.$$theme_showMaximize !== undefined) {
        old = this.$$theme_showMaximize;
    } else if (this.$$useinit_showMaximize) {
        old = this.$$init_showMaximize;
    }
    if (this.$$user_showMaximize === undefined) return;
    var computed;
    if (this.$$runtime_showMaximize !== undefined) {
        computed = this.$$runtime_showMaximize;
        delete this.$$user_showMaximize;
    } else if (this.$$user_showMaximize !== undefined) {
        delete this.$$user_showMaximize;
        if (this.$$runtime_showMaximize !== undefined) computed = this.$$runtime_showMaximize;
        if (this.$$theme_showMaximize !== undefined) computed = this.$$theme_showMaximize;
        else if (this.$$init_showMaximize !== undefined) {
            computed = this.$$init_showMaximize;
            this.$$useinit_showMaximize = true;
        }
    } else if (this.$$theme_showMaximize !== undefined) {} else if (this.$$useinit_showMaximize) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_showMaximize;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "showMaximize", "reset");

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

function initShowMaximize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showMaximize !== undefined) {
        old = this.$$runtime_showMaximize;
    } else if (this.$$user_showMaximize !== undefined) {
        old = this.$$user_showMaximize;
    } else if (this.$$theme_showMaximize !== undefined) {
        old = this.$$theme_showMaximize;
    } else if (this.$$useinit_showMaximize) {
        old = this.$$init_showMaximize;
    }
    var computed;
    if (this.$$runtime_showMaximize !== undefined) {
        computed = this.$$runtime_showMaximize;
    } else if (this.$$user_showMaximize !== undefined) {
        computed = this.$$user_showMaximize;
    } else if (this.$$theme_showMaximize !== undefined) {
        computed = this.$$theme_showMaximize;
    } else if (this.$$useinit_showMaximize) {
        computed = this.$$init_showMaximize;
    } else {
        computed = this.$$init_showMaximize;
        this.$$useinit_showMaximize = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "showMaximize", "init");

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

function setRuntimeShowMaximize anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_showMaximize !== undefined) {
            old = this.$$runtime_showMaximize;
        } else if (this.$$user_showMaximize !== undefined) {
            old = this.$$user_showMaximize;
        } else if (this.$$theme_showMaximize !== undefined) {
            old = this.$$theme_showMaximize;
        } else if (this.$$useinit_showMaximize) {
            old = this.$$init_showMaximize;
        }
        if (equ.call(this, this.$$runtime_showMaximize, value)) return value;
        var computed;
        if (this.$$runtime_showMaximize !== undefined) {
            computed = this.$$runtime_showMaximize = value;
        } else if (this.$$user_showMaximize !== undefined) {
            computed = this.$$runtime_showMaximize = value;
        } else if (this.$$theme_showMaximize !== undefined) {
            computed = this.$$runtime_showMaximize = value;
        } else if (this.$$useinit_showMaximize) {
            delete this.$$useinit_showMaximize;
            computed = this.$$runtime_showMaximize = value;
        } else {
            computed = this.$$runtime_showMaximize = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_showMaximize;
        var self = this;
        var promise;
        promise = this._applyCaptionBarChange(computed, old, "showMaximize", "setRuntime");

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

function resetRuntimeShowMaximize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showMaximize !== undefined) {
        old = this.$$runtime_showMaximize;
    } else if (this.$$user_showMaximize !== undefined) {
        old = this.$$user_showMaximize;
    } else if (this.$$theme_showMaximize !== undefined) {
        old = this.$$theme_showMaximize;
    } else if (this.$$useinit_showMaximize) {
        old = this.$$init_showMaximize;
    }
    if (this.$$runtime_showMaximize === undefined) return;
    var computed;
    if (this.$$runtime_showMaximize !== undefined) {
        delete this.$$runtime_showMaximize;
        if (this.$$user_showMaximize !== undefined) computed = this.$$user_showMaximize;
        else if (this.$$theme_showMaximize !== undefined) computed = this.$$theme_showMaximize;
        else if (this.$$init_showMaximize !== undefined) {
            computed = this.$$init_showMaximize;
            this.$$useinit_showMaximize = true;
        }
    } else if (this.$$user_showMaximize !== undefined) {
        computed = this.$$user_showMaximize;
    } else if (this.$$theme_showMaximize !== undefined) {} else if (this.$$useinit_showMaximize) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_showMaximize;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "showMaximize", "resetRuntime");

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

function setThemedShowMaximize anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_showMaximize !== undefined) {
            old = this.$$runtime_showMaximize;
        } else if (this.$$user_showMaximize !== undefined) {
            old = this.$$user_showMaximize;
        } else if (this.$$theme_showMaximize !== undefined) {
            old = this.$$theme_showMaximize;
        } else if (this.$$useinit_showMaximize) {
            old = this.$$init_showMaximize;
        }
        if (equ.call(this, this.$$theme_showMaximize, value)) return value;
        var computed;
        if (this.$$runtime_showMaximize !== undefined) {
            computed = this.$$runtime_showMaximize;
            this.$$theme_showMaximize = value;
        } else if (this.$$user_showMaximize !== undefined) {
            computed = this.$$user_showMaximize;
            this.$$theme_showMaximize = value;
        } else if (this.$$theme_showMaximize !== undefined) {
            computed = this.$$theme_showMaximize = value;
        } else if (this.$$useinit_showMaximize) {
            delete this.$$useinit_showMaximize;
            computed = this.$$theme_showMaximize = value;
        } else {
            computed = this.$$theme_showMaximize = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_showMaximize;
        var self = this;
        var promise;
        promise = this._applyCaptionBarChange(computed, old, "showMaximize", "setThemed");

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

function resetThemedShowMaximize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showMaximize !== undefined) {
        old = this.$$runtime_showMaximize;
    } else if (this.$$user_showMaximize !== undefined) {
        old = this.$$user_showMaximize;
    } else if (this.$$theme_showMaximize !== undefined) {
        old = this.$$theme_showMaximize;
    } else if (this.$$useinit_showMaximize) {
        old = this.$$init_showMaximize;
    }
    if (this.$$theme_showMaximize === undefined) return;
    var computed;
    if (this.$$runtime_showMaximize !== undefined) {
        computed = this.$$runtime_showMaximize;
        delete this.$$theme_showMaximize;
    } else if (this.$$user_showMaximize !== undefined) {
        computed = this.$$user_showMaximize;
        delete this.$$theme_showMaximize;
    } else if (this.$$theme_showMaximize !== undefined) {
        delete this.$$theme_showMaximize;
        if (this.$$init_showMaximize !== undefined) {
            computed = this.$$init_showMaximize;
            this.$$useinit_showMaximize = true;
        }
    } else if (this.$$useinit_showMaximize) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_showMaximize;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "showMaximize", "resetThemed");

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

function resetShowMinimize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showMinimize !== undefined) {
        old = this.$$runtime_showMinimize;
    } else if (this.$$user_showMinimize !== undefined) {
        old = this.$$user_showMinimize;
    } else if (this.$$theme_showMinimize !== undefined) {
        old = this.$$theme_showMinimize;
    } else if (this.$$useinit_showMinimize) {
        old = this.$$init_showMinimize;
    }
    if (this.$$user_showMinimize === undefined) return;
    var computed;
    if (this.$$runtime_showMinimize !== undefined) {
        computed = this.$$runtime_showMinimize;
        delete this.$$user_showMinimize;
    } else if (this.$$user_showMinimize !== undefined) {
        delete this.$$user_showMinimize;
        if (this.$$runtime_showMinimize !== undefined) computed = this.$$runtime_showMinimize;
        if (this.$$theme_showMinimize !== undefined) computed = this.$$theme_showMinimize;
        else if (this.$$init_showMinimize !== undefined) {
            computed = this.$$init_showMinimize;
            this.$$useinit_showMinimize = true;
        }
    } else if (this.$$theme_showMinimize !== undefined) {} else if (this.$$useinit_showMinimize) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_showMinimize;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "showMinimize", "reset");

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

function initShowMinimize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showMinimize !== undefined) {
        old = this.$$runtime_showMinimize;
    } else if (this.$$user_showMinimize !== undefined) {
        old = this.$$user_showMinimize;
    } else if (this.$$theme_showMinimize !== undefined) {
        old = this.$$theme_showMinimize;
    } else if (this.$$useinit_showMinimize) {
        old = this.$$init_showMinimize;
    }
    var computed;
    if (this.$$runtime_showMinimize !== undefined) {
        computed = this.$$runtime_showMinimize;
    } else if (this.$$user_showMinimize !== undefined) {
        computed = this.$$user_showMinimize;
    } else if (this.$$theme_showMinimize !== undefined) {
        computed = this.$$theme_showMinimize;
    } else if (this.$$useinit_showMinimize) {
        computed = this.$$init_showMinimize;
    } else {
        computed = this.$$init_showMinimize;
        this.$$useinit_showMinimize = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "showMinimize", "init");

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

function setRuntimeShowMinimize anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_showMinimize !== undefined) {
            old = this.$$runtime_showMinimize;
        } else if (this.$$user_showMinimize !== undefined) {
            old = this.$$user_showMinimize;
        } else if (this.$$theme_showMinimize !== undefined) {
            old = this.$$theme_showMinimize;
        } else if (this.$$useinit_showMinimize) {
            old = this.$$init_showMinimize;
        }
        if (equ.call(this, this.$$runtime_showMinimize, value)) return value;
        var computed;
        if (this.$$runtime_showMinimize !== undefined) {
            computed = this.$$runtime_showMinimize = value;
        } else if (this.$$user_showMinimize !== undefined) {
            computed = this.$$runtime_showMinimize = value;
        } else if (this.$$theme_showMinimize !== undefined) {
            computed = this.$$runtime_showMinimize = value;
        } else if (this.$$useinit_showMinimize) {
            delete this.$$useinit_showMinimize;
            computed = this.$$runtime_showMinimize = value;
        } else {
            computed = this.$$runtime_showMinimize = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_showMinimize;
        var self = this;
        var promise;
        promise = this._applyCaptionBarChange(computed, old, "showMinimize", "setRuntime");

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

function resetRuntimeShowMinimize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showMinimize !== undefined) {
        old = this.$$runtime_showMinimize;
    } else if (this.$$user_showMinimize !== undefined) {
        old = this.$$user_showMinimize;
    } else if (this.$$theme_showMinimize !== undefined) {
        old = this.$$theme_showMinimize;
    } else if (this.$$useinit_showMinimize) {
        old = this.$$init_showMinimize;
    }
    if (this.$$runtime_showMinimize === undefined) return;
    var computed;
    if (this.$$runtime_showMinimize !== undefined) {
        delete this.$$runtime_showMinimize;
        if (this.$$user_showMinimize !== undefined) computed = this.$$user_showMinimize;
        else if (this.$$theme_showMinimize !== undefined) computed = this.$$theme_showMinimize;
        else if (this.$$init_showMinimize !== undefined) {
            computed = this.$$init_showMinimize;
            this.$$useinit_showMinimize = true;
        }
    } else if (this.$$user_showMinimize !== undefined) {
        computed = this.$$user_showMinimize;
    } else if (this.$$theme_showMinimize !== undefined) {} else if (this.$$useinit_showMinimize) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_showMinimize;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "showMinimize", "resetRuntime");

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

function setThemedShowMinimize anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_showMinimize !== undefined) {
            old = this.$$runtime_showMinimize;
        } else if (this.$$user_showMinimize !== undefined) {
            old = this.$$user_showMinimize;
        } else if (this.$$theme_showMinimize !== undefined) {
            old = this.$$theme_showMinimize;
        } else if (this.$$useinit_showMinimize) {
            old = this.$$init_showMinimize;
        }
        if (equ.call(this, this.$$theme_showMinimize, value)) return value;
        var computed;
        if (this.$$runtime_showMinimize !== undefined) {
            computed = this.$$runtime_showMinimize;
            this.$$theme_showMinimize = value;
        } else if (this.$$user_showMinimize !== undefined) {
            computed = this.$$user_showMinimize;
            this.$$theme_showMinimize = value;
        } else if (this.$$theme_showMinimize !== undefined) {
            computed = this.$$theme_showMinimize = value;
        } else if (this.$$useinit_showMinimize) {
            delete this.$$useinit_showMinimize;
            computed = this.$$theme_showMinimize = value;
        } else {
            computed = this.$$theme_showMinimize = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_showMinimize;
        var self = this;
        var promise;
        promise = this._applyCaptionBarChange(computed, old, "showMinimize", "setThemed");

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

function resetThemedShowMinimize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showMinimize !== undefined) {
        old = this.$$runtime_showMinimize;
    } else if (this.$$user_showMinimize !== undefined) {
        old = this.$$user_showMinimize;
    } else if (this.$$theme_showMinimize !== undefined) {
        old = this.$$theme_showMinimize;
    } else if (this.$$useinit_showMinimize) {
        old = this.$$init_showMinimize;
    }
    if (this.$$theme_showMinimize === undefined) return;
    var computed;
    if (this.$$runtime_showMinimize !== undefined) {
        computed = this.$$runtime_showMinimize;
        delete this.$$theme_showMinimize;
    } else if (this.$$user_showMinimize !== undefined) {
        computed = this.$$user_showMinimize;
        delete this.$$theme_showMinimize;
    } else if (this.$$theme_showMinimize !== undefined) {
        delete this.$$theme_showMinimize;
        if (this.$$init_showMinimize !== undefined) {
            computed = this.$$init_showMinimize;
            this.$$useinit_showMinimize = true;
        }
    } else if (this.$$useinit_showMinimize) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_showMinimize;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "showMinimize", "resetThemed");

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

function resetAllowClose anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_allowClose !== undefined) {
        old = this.$$runtime_allowClose;
    } else if (this.$$user_allowClose !== undefined) {
        old = this.$$user_allowClose;
    } else if (this.$$useinit_allowClose) {
        old = this.$$init_allowClose;
    }
    if (this.$$user_allowClose === undefined) return;
    var computed;
    if (this.$$runtime_allowClose !== undefined) {
        computed = this.$$runtime_allowClose;
        delete this.$$user_allowClose;
    } else if (this.$$user_allowClose !== undefined) {
        delete this.$$user_allowClose;
        if (this.$$runtime_allowClose !== undefined) computed = this.$$runtime_allowClose;
        if (this.$$theme_allowClose !== undefined) computed = this.$$theme_allowClose;
        else if (this.$$init_allowClose !== undefined) {
            computed = this.$$init_allowClose;
            this.$$useinit_allowClose = true;
        }
    } else if (this.$$useinit_allowClose) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_allowClose;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "allowClose", "reset");

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

function initAllowClose anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_allowClose !== undefined) {
        old = this.$$runtime_allowClose;
    } else if (this.$$user_allowClose !== undefined) {
        old = this.$$user_allowClose;
    } else if (this.$$useinit_allowClose) {
        old = this.$$init_allowClose;
    }
    var computed;
    if (this.$$runtime_allowClose !== undefined) {
        computed = this.$$runtime_allowClose;
    } else if (this.$$user_allowClose !== undefined) {
        computed = this.$$user_allowClose;
    } else if (this.$$useinit_allowClose) {
        computed = this.$$init_allowClose;
    } else {
        computed = this.$$init_allowClose;
        this.$$useinit_allowClose = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "allowClose", "init");

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

function setRuntimeAllowClose anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_allowClose !== undefined) {
            old = this.$$runtime_allowClose;
        } else if (this.$$user_allowClose !== undefined) {
            old = this.$$user_allowClose;
        } else if (this.$$useinit_allowClose) {
            old = this.$$init_allowClose;
        }
        if (equ.call(this, this.$$runtime_allowClose, value)) return value;
        var computed;
        if (this.$$runtime_allowClose !== undefined) {
            computed = this.$$runtime_allowClose = value;
        } else if (this.$$user_allowClose !== undefined) {
            computed = this.$$runtime_allowClose = value;
        } else if (this.$$useinit_allowClose) {
            delete this.$$useinit_allowClose;
            computed = this.$$runtime_allowClose = value;
        } else {
            computed = this.$$runtime_allowClose = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_allowClose;
        var self = this;
        var promise;
        promise = this._applyCaptionBarChange(computed, old, "allowClose", "setRuntime");

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

function resetRuntimeAllowClose anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_allowClose !== undefined) {
        old = this.$$runtime_allowClose;
    } else if (this.$$user_allowClose !== undefined) {
        old = this.$$user_allowClose;
    } else if (this.$$useinit_allowClose) {
        old = this.$$init_allowClose;
    }
    if (this.$$runtime_allowClose === undefined) return;
    var computed;
    if (this.$$runtime_allowClose !== undefined) {
        delete this.$$runtime_allowClose;
        if (this.$$user_allowClose !== undefined) computed = this.$$user_allowClose;
        else if (this.$$theme_allowClose !== undefined) computed = this.$$theme_allowClose;
        else if (this.$$init_allowClose !== undefined) {
            computed = this.$$init_allowClose;
            this.$$useinit_allowClose = true;
        }
    } else if (this.$$user_allowClose !== undefined) {
        computed = this.$$user_allowClose;
    } else if (this.$$useinit_allowClose) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_allowClose;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "allowClose", "resetRuntime");

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

function resetAllowMaximize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_allowMaximize !== undefined) {
        old = this.$$runtime_allowMaximize;
    } else if (this.$$user_allowMaximize !== undefined) {
        old = this.$$user_allowMaximize;
    } else if (this.$$useinit_allowMaximize) {
        old = this.$$init_allowMaximize;
    }
    if (this.$$user_allowMaximize === undefined) return;
    var computed;
    if (this.$$runtime_allowMaximize !== undefined) {
        computed = this.$$runtime_allowMaximize;
        delete this.$$user_allowMaximize;
    } else if (this.$$user_allowMaximize !== undefined) {
        delete this.$$user_allowMaximize;
        if (this.$$runtime_allowMaximize !== undefined) computed = this.$$runtime_allowMaximize;
        if (this.$$theme_allowMaximize !== undefined) computed = this.$$theme_allowMaximize;
        else if (this.$$init_allowMaximize !== undefined) {
            computed = this.$$init_allowMaximize;
            this.$$useinit_allowMaximize = true;
        }
    } else if (this.$$useinit_allowMaximize) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_allowMaximize;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "allowMaximize", "reset");

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

function initAllowMaximize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_allowMaximize !== undefined) {
        old = this.$$runtime_allowMaximize;
    } else if (this.$$user_allowMaximize !== undefined) {
        old = this.$$user_allowMaximize;
    } else if (this.$$useinit_allowMaximize) {
        old = this.$$init_allowMaximize;
    }
    var computed;
    if (this.$$runtime_allowMaximize !== undefined) {
        computed = this.$$runtime_allowMaximize;
    } else if (this.$$user_allowMaximize !== undefined) {
        computed = this.$$user_allowMaximize;
    } else if (this.$$useinit_allowMaximize) {
        computed = this.$$init_allowMaximize;
    } else {
        computed = this.$$init_allowMaximize;
        this.$$useinit_allowMaximize = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "allowMaximize", "init");

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

function setRuntimeAllowMaximize anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_allowMaximize !== undefined) {
            old = this.$$runtime_allowMaximize;
        } else if (this.$$user_allowMaximize !== undefined) {
            old = this.$$user_allowMaximize;
        } else if (this.$$useinit_allowMaximize) {
            old = this.$$init_allowMaximize;
        }
        if (equ.call(this, this.$$runtime_allowMaximize, value)) return value;
        var computed;
        if (this.$$runtime_allowMaximize !== undefined) {
            computed = this.$$runtime_allowMaximize = value;
        } else if (this.$$user_allowMaximize !== undefined) {
            computed = this.$$runtime_allowMaximize = value;
        } else if (this.$$useinit_allowMaximize) {
            delete this.$$useinit_allowMaximize;
            computed = this.$$runtime_allowMaximize = value;
        } else {
            computed = this.$$runtime_allowMaximize = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_allowMaximize;
        var self = this;
        var promise;
        promise = this._applyCaptionBarChange(computed, old, "allowMaximize", "setRuntime");

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

function resetRuntimeAllowMaximize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_allowMaximize !== undefined) {
        old = this.$$runtime_allowMaximize;
    } else if (this.$$user_allowMaximize !== undefined) {
        old = this.$$user_allowMaximize;
    } else if (this.$$useinit_allowMaximize) {
        old = this.$$init_allowMaximize;
    }
    if (this.$$runtime_allowMaximize === undefined) return;
    var computed;
    if (this.$$runtime_allowMaximize !== undefined) {
        delete this.$$runtime_allowMaximize;
        if (this.$$user_allowMaximize !== undefined) computed = this.$$user_allowMaximize;
        else if (this.$$theme_allowMaximize !== undefined) computed = this.$$theme_allowMaximize;
        else if (this.$$init_allowMaximize !== undefined) {
            computed = this.$$init_allowMaximize;
            this.$$useinit_allowMaximize = true;
        }
    } else if (this.$$user_allowMaximize !== undefined) {
        computed = this.$$user_allowMaximize;
    } else if (this.$$useinit_allowMaximize) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_allowMaximize;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "allowMaximize", "resetRuntime");

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

function resetAllowMinimize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_allowMinimize !== undefined) {
        old = this.$$runtime_allowMinimize;
    } else if (this.$$user_allowMinimize !== undefined) {
        old = this.$$user_allowMinimize;
    } else if (this.$$useinit_allowMinimize) {
        old = this.$$init_allowMinimize;
    }
    if (this.$$user_allowMinimize === undefined) return;
    var computed;
    if (this.$$runtime_allowMinimize !== undefined) {
        computed = this.$$runtime_allowMinimize;
        delete this.$$user_allowMinimize;
    } else if (this.$$user_allowMinimize !== undefined) {
        delete this.$$user_allowMinimize;
        if (this.$$runtime_allowMinimize !== undefined) computed = this.$$runtime_allowMinimize;
        if (this.$$theme_allowMinimize !== undefined) computed = this.$$theme_allowMinimize;
        else if (this.$$init_allowMinimize !== undefined) {
            computed = this.$$init_allowMinimize;
            this.$$useinit_allowMinimize = true;
        }
    } else if (this.$$useinit_allowMinimize) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_allowMinimize;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "allowMinimize", "reset");

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

function initAllowMinimize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_allowMinimize !== undefined) {
        old = this.$$runtime_allowMinimize;
    } else if (this.$$user_allowMinimize !== undefined) {
        old = this.$$user_allowMinimize;
    } else if (this.$$useinit_allowMinimize) {
        old = this.$$init_allowMinimize;
    }
    var computed;
    if (this.$$runtime_allowMinimize !== undefined) {
        computed = this.$$runtime_allowMinimize;
    } else if (this.$$user_allowMinimize !== undefined) {
        computed = this.$$user_allowMinimize;
    } else if (this.$$useinit_allowMinimize) {
        computed = this.$$init_allowMinimize;
    } else {
        computed = this.$$init_allowMinimize;
        this.$$useinit_allowMinimize = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "allowMinimize", "init");

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

function setRuntimeAllowMinimize anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_allowMinimize !== undefined) {
            old = this.$$runtime_allowMinimize;
        } else if (this.$$user_allowMinimize !== undefined) {
            old = this.$$user_allowMinimize;
        } else if (this.$$useinit_allowMinimize) {
            old = this.$$init_allowMinimize;
        }
        if (equ.call(this, this.$$runtime_allowMinimize, value)) return value;
        var computed;
        if (this.$$runtime_allowMinimize !== undefined) {
            computed = this.$$runtime_allowMinimize = value;
        } else if (this.$$user_allowMinimize !== undefined) {
            computed = this.$$runtime_allowMinimize = value;
        } else if (this.$$useinit_allowMinimize) {
            delete this.$$useinit_allowMinimize;
            computed = this.$$runtime_allowMinimize = value;
        } else {
            computed = this.$$runtime_allowMinimize = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_allowMinimize;
        var self = this;
        var promise;
        promise = this._applyCaptionBarChange(computed, old, "allowMinimize", "setRuntime");

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

function resetRuntimeAllowMinimize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_allowMinimize !== undefined) {
        old = this.$$runtime_allowMinimize;
    } else if (this.$$user_allowMinimize !== undefined) {
        old = this.$$user_allowMinimize;
    } else if (this.$$useinit_allowMinimize) {
        old = this.$$init_allowMinimize;
    }
    if (this.$$runtime_allowMinimize === undefined) return;
    var computed;
    if (this.$$runtime_allowMinimize !== undefined) {
        delete this.$$runtime_allowMinimize;
        if (this.$$user_allowMinimize !== undefined) computed = this.$$user_allowMinimize;
        else if (this.$$theme_allowMinimize !== undefined) computed = this.$$theme_allowMinimize;
        else if (this.$$init_allowMinimize !== undefined) {
            computed = this.$$init_allowMinimize;
            this.$$useinit_allowMinimize = true;
        }
    } else if (this.$$user_allowMinimize !== undefined) {
        computed = this.$$user_allowMinimize;
    } else if (this.$$useinit_allowMinimize) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_allowMinimize;
    var self = this;
    var promise;
    promise = this._applyCaptionBarChange(computed, old, "allowMinimize", "resetRuntime");

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

function resetShowStatusbar anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showStatusbar !== undefined) {
        old = this.$$runtime_showStatusbar;
    } else if (this.$$user_showStatusbar !== undefined) {
        old = this.$$user_showStatusbar;
    } else if (this.$$useinit_showStatusbar) {
        old = this.$$init_showStatusbar;
    }
    if (this.$$user_showStatusbar === undefined) return;
    var computed;
    if (this.$$runtime_showStatusbar !== undefined) {
        computed = this.$$runtime_showStatusbar;
        delete this.$$user_showStatusbar;
    } else if (this.$$user_showStatusbar !== undefined) {
        delete this.$$user_showStatusbar;
        if (this.$$runtime_showStatusbar !== undefined) computed = this.$$runtime_showStatusbar;
        if (this.$$theme_showStatusbar !== undefined) computed = this.$$theme_showStatusbar;
        else if (this.$$init_showStatusbar !== undefined) {
            computed = this.$$init_showStatusbar;
            this.$$useinit_showStatusbar = true;
        }
    } else if (this.$$useinit_showStatusbar) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_showStatusbar;
    var self = this;
    var promise;
    promise = this._applyShowStatusbar(computed, old, "showStatusbar", "reset");

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

function initShowStatusbar anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showStatusbar !== undefined) {
        old = this.$$runtime_showStatusbar;
    } else if (this.$$user_showStatusbar !== undefined) {
        old = this.$$user_showStatusbar;
    } else if (this.$$useinit_showStatusbar) {
        old = this.$$init_showStatusbar;
    }
    var computed;
    if (this.$$runtime_showStatusbar !== undefined) {
        computed = this.$$runtime_showStatusbar;
    } else if (this.$$user_showStatusbar !== undefined) {
        computed = this.$$user_showStatusbar;
    } else if (this.$$useinit_showStatusbar) {
        computed = this.$$init_showStatusbar;
    } else {
        computed = this.$$init_showStatusbar;
        this.$$useinit_showStatusbar = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyShowStatusbar(computed, old, "showStatusbar", "init");

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

function setRuntimeShowStatusbar anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_showStatusbar !== undefined) {
            old = this.$$runtime_showStatusbar;
        } else if (this.$$user_showStatusbar !== undefined) {
            old = this.$$user_showStatusbar;
        } else if (this.$$useinit_showStatusbar) {
            old = this.$$init_showStatusbar;
        }
        if (equ.call(this, this.$$runtime_showStatusbar, value)) return value;
        var computed;
        if (this.$$runtime_showStatusbar !== undefined) {
            computed = this.$$runtime_showStatusbar = value;
        } else if (this.$$user_showStatusbar !== undefined) {
            computed = this.$$runtime_showStatusbar = value;
        } else if (this.$$useinit_showStatusbar) {
            delete this.$$useinit_showStatusbar;
            computed = this.$$runtime_showStatusbar = value;
        } else {
            computed = this.$$runtime_showStatusbar = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_showStatusbar;
        var self = this;
        var promise;
        promise = this._applyShowStatusbar(computed, old, "showStatusbar", "setRuntime");

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

function resetRuntimeShowStatusbar anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showStatusbar !== undefined) {
        old = this.$$runtime_showStatusbar;
    } else if (this.$$user_showStatusbar !== undefined) {
        old = this.$$user_showStatusbar;
    } else if (this.$$useinit_showStatusbar) {
        old = this.$$init_showStatusbar;
    }
    if (this.$$runtime_showStatusbar === undefined) return;
    var computed;
    if (this.$$runtime_showStatusbar !== undefined) {
        delete this.$$runtime_showStatusbar;
        if (this.$$user_showStatusbar !== undefined) computed = this.$$user_showStatusbar;
        else if (this.$$theme_showStatusbar !== undefined) computed = this.$$theme_showStatusbar;
        else if (this.$$init_showStatusbar !== undefined) {
            computed = this.$$init_showStatusbar;
            this.$$useinit_showStatusbar = true;
        }
    } else if (this.$$user_showStatusbar !== undefined) {
        computed = this.$$user_showStatusbar;
    } else if (this.$$useinit_showStatusbar) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_showStatusbar;
    var self = this;
    var promise;
    promise = this._applyShowStatusbar(computed, old, "showStatusbar", "resetRuntime");

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

function resetCenterOnAppear anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_centerOnAppear !== undefined) {
        old = this.$$runtime_centerOnAppear;
    } else if (this.$$user_centerOnAppear !== undefined) {
        old = this.$$user_centerOnAppear;
    } else if (this.$$useinit_centerOnAppear) {
        old = this.$$init_centerOnAppear;
    }
    if (this.$$user_centerOnAppear === undefined) return;
    var computed;
    if (this.$$runtime_centerOnAppear !== undefined) {
        computed = this.$$runtime_centerOnAppear;
        delete this.$$user_centerOnAppear;
    } else if (this.$$user_centerOnAppear !== undefined) {
        delete this.$$user_centerOnAppear;
        if (this.$$runtime_centerOnAppear !== undefined) computed = this.$$runtime_centerOnAppear;
        if (this.$$theme_centerOnAppear !== undefined) computed = this.$$theme_centerOnAppear;
        else if (this.$$init_centerOnAppear !== undefined) {
            computed = this.$$init_centerOnAppear;
            this.$$useinit_centerOnAppear = true;
        }
    } else if (this.$$useinit_centerOnAppear) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_centerOnAppear;
    var self = this;
    var promise;
    promise = this._applyCenterOnAppear(computed, old, "centerOnAppear", "reset");

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

function initCenterOnAppear anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_centerOnAppear !== undefined) {
        old = this.$$runtime_centerOnAppear;
    } else if (this.$$user_centerOnAppear !== undefined) {
        old = this.$$user_centerOnAppear;
    } else if (this.$$useinit_centerOnAppear) {
        old = this.$$init_centerOnAppear;
    }
    var computed;
    if (this.$$runtime_centerOnAppear !== undefined) {
        computed = this.$$runtime_centerOnAppear;
    } else if (this.$$user_centerOnAppear !== undefined) {
        computed = this.$$user_centerOnAppear;
    } else if (this.$$useinit_centerOnAppear) {
        computed = this.$$init_centerOnAppear;
    } else {
        computed = this.$$init_centerOnAppear;
        this.$$useinit_centerOnAppear = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyCenterOnAppear(computed, old, "centerOnAppear", "init");

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

function setRuntimeCenterOnAppear anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_centerOnAppear !== undefined) {
            old = this.$$runtime_centerOnAppear;
        } else if (this.$$user_centerOnAppear !== undefined) {
            old = this.$$user_centerOnAppear;
        } else if (this.$$useinit_centerOnAppear) {
            old = this.$$init_centerOnAppear;
        }
        if (equ.call(this, this.$$runtime_centerOnAppear, value)) return value;
        var computed;
        if (this.$$runtime_centerOnAppear !== undefined) {
            computed = this.$$runtime_centerOnAppear = value;
        } else if (this.$$user_centerOnAppear !== undefined) {
            computed = this.$$runtime_centerOnAppear = value;
        } else if (this.$$useinit_centerOnAppear) {
            delete this.$$useinit_centerOnAppear;
            computed = this.$$runtime_centerOnAppear = value;
        } else {
            computed = this.$$runtime_centerOnAppear = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_centerOnAppear;
        var self = this;
        var promise;
        promise = this._applyCenterOnAppear(computed, old, "centerOnAppear", "setRuntime");

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

function resetRuntimeCenterOnAppear anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_centerOnAppear !== undefined) {
        old = this.$$runtime_centerOnAppear;
    } else if (this.$$user_centerOnAppear !== undefined) {
        old = this.$$user_centerOnAppear;
    } else if (this.$$useinit_centerOnAppear) {
        old = this.$$init_centerOnAppear;
    }
    if (this.$$runtime_centerOnAppear === undefined) return;
    var computed;
    if (this.$$runtime_centerOnAppear !== undefined) {
        delete this.$$runtime_centerOnAppear;
        if (this.$$user_centerOnAppear !== undefined) computed = this.$$user_centerOnAppear;
        else if (this.$$theme_centerOnAppear !== undefined) computed = this.$$theme_centerOnAppear;
        else if (this.$$init_centerOnAppear !== undefined) {
            computed = this.$$init_centerOnAppear;
            this.$$useinit_centerOnAppear = true;
        }
    } else if (this.$$user_centerOnAppear !== undefined) {
        computed = this.$$user_centerOnAppear;
    } else if (this.$$useinit_centerOnAppear) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_centerOnAppear;
    var self = this;
    var promise;
    promise = this._applyCenterOnAppear(computed, old, "centerOnAppear", "resetRuntime");

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

function resetCenterOnContainerResize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_centerOnContainerResize !== undefined) {
        old = this.$$runtime_centerOnContainerResize;
    } else if (this.$$user_centerOnContainerResize !== undefined) {
        old = this.$$user_centerOnContainerResize;
    } else if (this.$$useinit_centerOnContainerResize) {
        old = this.$$init_centerOnContainerResize;
    }
    if (this.$$user_centerOnContainerResize === undefined) return;
    var computed;
    if (this.$$runtime_centerOnContainerResize !== undefined) {
        computed = this.$$runtime_centerOnContainerResize;
        delete this.$$user_centerOnContainerResize;
    } else if (this.$$user_centerOnContainerResize !== undefined) {
        delete this.$$user_centerOnContainerResize;
        if (this.$$runtime_centerOnContainerResize !== undefined) computed = this.$$runtime_centerOnContainerResize;
        if (this.$$theme_centerOnContainerResize !== undefined) computed = this.$$theme_centerOnContainerResize;
        else if (this.$$init_centerOnContainerResize !== undefined) {
            computed = this.$$init_centerOnContainerResize;
            this.$$useinit_centerOnContainerResize = true;
        }
    } else if (this.$$useinit_centerOnContainerResize) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_centerOnContainerResize;
    var self = this;
    var promise;
    promise = this._applyCenterOnContainerResize(computed, old, "centerOnContainerResize", "reset");

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

function initCenterOnContainerResize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_centerOnContainerResize !== undefined) {
        old = this.$$runtime_centerOnContainerResize;
    } else if (this.$$user_centerOnContainerResize !== undefined) {
        old = this.$$user_centerOnContainerResize;
    } else if (this.$$useinit_centerOnContainerResize) {
        old = this.$$init_centerOnContainerResize;
    }
    var computed;
    if (this.$$runtime_centerOnContainerResize !== undefined) {
        computed = this.$$runtime_centerOnContainerResize;
    } else if (this.$$user_centerOnContainerResize !== undefined) {
        computed = this.$$user_centerOnContainerResize;
    } else if (this.$$useinit_centerOnContainerResize) {
        computed = this.$$init_centerOnContainerResize;
    } else {
        computed = this.$$init_centerOnContainerResize;
        this.$$useinit_centerOnContainerResize = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyCenterOnContainerResize(computed, old, "centerOnContainerResize", "init");

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

function setRuntimeCenterOnContainerResize anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_centerOnContainerResize !== undefined) {
            old = this.$$runtime_centerOnContainerResize;
        } else if (this.$$user_centerOnContainerResize !== undefined) {
            old = this.$$user_centerOnContainerResize;
        } else if (this.$$useinit_centerOnContainerResize) {
            old = this.$$init_centerOnContainerResize;
        }
        if (equ.call(this, this.$$runtime_centerOnContainerResize, value)) return value;
        var computed;
        if (this.$$runtime_centerOnContainerResize !== undefined) {
            computed = this.$$runtime_centerOnContainerResize = value;
        } else if (this.$$user_centerOnContainerResize !== undefined) {
            computed = this.$$runtime_centerOnContainerResize = value;
        } else if (this.$$useinit_centerOnContainerResize) {
            delete this.$$useinit_centerOnContainerResize;
            computed = this.$$runtime_centerOnContainerResize = value;
        } else {
            computed = this.$$runtime_centerOnContainerResize = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_centerOnContainerResize;
        var self = this;
        var promise;
        promise = this._applyCenterOnContainerResize(computed, old, "centerOnContainerResize", "setRuntime");

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

function resetRuntimeCenterOnContainerResize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_centerOnContainerResize !== undefined) {
        old = this.$$runtime_centerOnContainerResize;
    } else if (this.$$user_centerOnContainerResize !== undefined) {
        old = this.$$user_centerOnContainerResize;
    } else if (this.$$useinit_centerOnContainerResize) {
        old = this.$$init_centerOnContainerResize;
    }
    if (this.$$runtime_centerOnContainerResize === undefined) return;
    var computed;
    if (this.$$runtime_centerOnContainerResize !== undefined) {
        delete this.$$runtime_centerOnContainerResize;
        if (this.$$user_centerOnContainerResize !== undefined) computed = this.$$user_centerOnContainerResize;
        else if (this.$$theme_centerOnContainerResize !== undefined) computed = this.$$theme_centerOnContainerResize;
        else if (this.$$init_centerOnContainerResize !== undefined) {
            computed = this.$$init_centerOnContainerResize;
            this.$$useinit_centerOnContainerResize = true;
        }
    } else if (this.$$user_centerOnContainerResize !== undefined) {
        computed = this.$$user_centerOnContainerResize;
    } else if (this.$$useinit_centerOnContainerResize) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_centerOnContainerResize;
    var self = this;
    var promise;
    promise = this._applyCenterOnContainerResize(computed, old, "centerOnContainerResize", "resetRuntime");

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

function resetAutoDestroy anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_autoDestroy !== undefined) delete this.$$user_autoDestroy;
}

function setRuntimeAutoDestroy anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_autoDestroy !== undefined) {
            old = this.$$runtime_autoDestroy;
        } else if (this.$$user_autoDestroy !== undefined) {
            old = this.$$user_autoDestroy;
        } else if (this.$$useinit_autoDestroy) {
            old = this.$$init_autoDestroy;
        }
        this.$$runtime_autoDestroy = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeAutoDestroy anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_autoDestroy !== undefined) delete this.$$runtime_autoDestroy;
}

function resetResizableTop anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_resizableTop !== undefined) delete this.$$user_resizableTop;
}

function setRuntimeResizableTop anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_resizableTop !== undefined) {
            old = this.$$runtime_resizableTop;
        } else if (this.$$user_resizableTop !== undefined) {
            old = this.$$user_resizableTop;
        } else if (this.$$useinit_resizableTop) {
            old = this.$$init_resizableTop;
        }
        this.$$runtime_resizableTop = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeResizableTop anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_resizableTop !== undefined) delete this.$$runtime_resizableTop;
}

function resetResizableRight anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_resizableRight !== undefined) delete this.$$user_resizableRight;
}

function setRuntimeResizableRight anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_resizableRight !== undefined) {
            old = this.$$runtime_resizableRight;
        } else if (this.$$user_resizableRight !== undefined) {
            old = this.$$user_resizableRight;
        } else if (this.$$useinit_resizableRight) {
            old = this.$$init_resizableRight;
        }
        this.$$runtime_resizableRight = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeResizableRight anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_resizableRight !== undefined) delete this.$$runtime_resizableRight;
}

function resetResizableBottom anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_resizableBottom !== undefined) delete this.$$user_resizableBottom;
}

function setRuntimeResizableBottom anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_resizableBottom !== undefined) {
            old = this.$$runtime_resizableBottom;
        } else if (this.$$user_resizableBottom !== undefined) {
            old = this.$$user_resizableBottom;
        } else if (this.$$useinit_resizableBottom) {
            old = this.$$init_resizableBottom;
        }
        this.$$runtime_resizableBottom = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeResizableBottom anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_resizableBottom !== undefined) delete this.$$runtime_resizableBottom;
}

function resetResizableLeft anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_resizableLeft !== undefined) delete this.$$user_resizableLeft;
}

function setRuntimeResizableLeft anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_resizableLeft !== undefined) {
            old = this.$$runtime_resizableLeft;
        } else if (this.$$user_resizableLeft !== undefined) {
            old = this.$$user_resizableLeft;
        } else if (this.$$useinit_resizableLeft) {
            old = this.$$init_resizableLeft;
        }
        this.$$runtime_resizableLeft = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeResizableLeft anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_resizableLeft !== undefined) delete this.$$runtime_resizableLeft;
}

function resetResizeSensitivity anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_resizeSensitivity !== undefined) delete this.$$user_resizeSensitivity;
}

function setRuntimeResizeSensitivity anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_resizeSensitivity !== undefined) {
            old = this.$$runtime_resizeSensitivity;
        } else if (this.$$user_resizeSensitivity !== undefined) {
            old = this.$$user_resizeSensitivity;
        } else if (this.$$useinit_resizeSensitivity) {
            old = this.$$init_resizeSensitivity;
        }
        this.$$runtime_resizeSensitivity = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeResizeSensitivity anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_resizeSensitivity !== undefined) delete this.$$runtime_resizeSensitivity;
}

function resetUseResizeFrame anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_useResizeFrame !== undefined) delete this.$$user_useResizeFrame;
}

function setRuntimeUseResizeFrame anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_useResizeFrame !== undefined) {
            old = this.$$runtime_useResizeFrame;
        } else if (this.$$user_useResizeFrame !== undefined) {
            old = this.$$user_useResizeFrame;
        } else if (this.$$useinit_useResizeFrame) {
            old = this.$$init_useResizeFrame;
        }
        this.$$runtime_useResizeFrame = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeUseResizeFrame anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_useResizeFrame !== undefined) delete this.$$runtime_useResizeFrame;
}

function resetMovable anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_movable !== undefined) delete this.$$user_movable;
}

function setRuntimeMovable anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_movable !== undefined) {
            old = this.$$runtime_movable;
        } else if (this.$$user_movable !== undefined) {
            old = this.$$user_movable;
        } else if (this.$$useinit_movable) {
            old = this.$$init_movable;
        }
        this.$$runtime_movable = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeMovable anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_movable !== undefined) delete this.$$runtime_movable;
}

function resetUseMoveFrame anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_useMoveFrame !== undefined) delete this.$$user_useMoveFrame;
}

function setRuntimeUseMoveFrame anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_useMoveFrame !== undefined) {
            old = this.$$runtime_useMoveFrame;
        } else if (this.$$user_useMoveFrame !== undefined) {
            old = this.$$user_useMoveFrame;
        } else if (this.$$useinit_useMoveFrame) {
            old = this.$$init_useMoveFrame;
        }
        this.$$runtime_useMoveFrame = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeUseMoveFrame anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_useMoveFrame !== undefined) delete this.$$runtime_useMoveFrame;
}

function resetContentPaddingTop anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contentPaddingTop !== undefined) {
        old = this.$$runtime_contentPaddingTop;
    } else if (this.$$user_contentPaddingTop !== undefined) {
        old = this.$$user_contentPaddingTop;
    } else if (this.$$theme_contentPaddingTop !== undefined) {
        old = this.$$theme_contentPaddingTop;
    } else if (this.$$useinit_contentPaddingTop) {
        old = this.$$init_contentPaddingTop;
    }
    if (this.$$user_contentPaddingTop === undefined) return;
    var computed;
    if (this.$$runtime_contentPaddingTop !== undefined) {
        computed = this.$$runtime_contentPaddingTop;
        delete this.$$user_contentPaddingTop;
    } else if (this.$$user_contentPaddingTop !== undefined) {
        delete this.$$user_contentPaddingTop;
        if (this.$$runtime_contentPaddingTop !== undefined) computed = this.$$runtime_contentPaddingTop;
        if (this.$$theme_contentPaddingTop !== undefined) computed = this.$$theme_contentPaddingTop;
        else if (this.$$init_contentPaddingTop !== undefined) {
            computed = this.$$init_contentPaddingTop;
            this.$$useinit_contentPaddingTop = true;
        }
    } else if (this.$$theme_contentPaddingTop !== undefined) {} else if (this.$$useinit_contentPaddingTop) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_contentPaddingTop;
    var self = this;
    var promise;
    promise = this._applyContentPadding(computed, old, "contentPaddingTop", "reset");

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

function initContentPaddingTop anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contentPaddingTop !== undefined) {
        old = this.$$runtime_contentPaddingTop;
    } else if (this.$$user_contentPaddingTop !== undefined) {
        old = this.$$user_contentPaddingTop;
    } else if (this.$$theme_contentPaddingTop !== undefined) {
        old = this.$$theme_contentPaddingTop;
    } else if (this.$$useinit_contentPaddingTop) {
        old = this.$$init_contentPaddingTop;
    }
    var computed;
    if (this.$$runtime_contentPaddingTop !== undefined) {
        computed = this.$$runtime_contentPaddingTop;
    } else if (this.$$user_contentPaddingTop !== undefined) {
        computed = this.$$user_contentPaddingTop;
    } else if (this.$$theme_contentPaddingTop !== undefined) {
        computed = this.$$theme_contentPaddingTop;
    } else if (this.$$useinit_contentPaddingTop) {
        computed = this.$$init_contentPaddingTop;
    } else {
        computed = this.$$init_contentPaddingTop;
        this.$$useinit_contentPaddingTop = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyContentPadding(computed, old, "contentPaddingTop", "init");

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

function setRuntimeContentPaddingTop anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_contentPaddingTop !== undefined) {
            old = this.$$runtime_contentPaddingTop;
        } else if (this.$$user_contentPaddingTop !== undefined) {
            old = this.$$user_contentPaddingTop;
        } else if (this.$$theme_contentPaddingTop !== undefined) {
            old = this.$$theme_contentPaddingTop;
        } else if (this.$$useinit_contentPaddingTop) {
            old = this.$$init_contentPaddingTop;
        }
        if (equ.call(this, this.$$runtime_contentPaddingTop, value)) return value;
        var computed;
        if (this.$$runtime_contentPaddingTop !== undefined) {
            computed = this.$$runtime_contentPaddingTop = value;
        } else if (this.$$user_contentPaddingTop !== undefined) {
            computed = this.$$runtime_contentPaddingTop = value;
        } else if (this.$$theme_contentPaddingTop !== undefined) {
            computed = this.$$runtime_contentPaddingTop = value;
        } else if (this.$$useinit_contentPaddingTop) {
            delete this.$$useinit_contentPaddingTop;
            computed = this.$$runtime_contentPaddingTop = value;
        } else {
            computed = this.$$runtime_contentPaddingTop = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_contentPaddingTop;
        var self = this;
        var promise;
        promise = this._applyContentPadding(computed, old, "contentPaddingTop", "setRuntime");

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

function resetRuntimeContentPaddingTop anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contentPaddingTop !== undefined) {
        old = this.$$runtime_contentPaddingTop;
    } else if (this.$$user_contentPaddingTop !== undefined) {
        old = this.$$user_contentPaddingTop;
    } else if (this.$$theme_contentPaddingTop !== undefined) {
        old = this.$$theme_contentPaddingTop;
    } else if (this.$$useinit_contentPaddingTop) {
        old = this.$$init_contentPaddingTop;
    }
    if (this.$$runtime_contentPaddingTop === undefined) return;
    var computed;
    if (this.$$runtime_contentPaddingTop !== undefined) {
        delete this.$$runtime_contentPaddingTop;
        if (this.$$user_contentPaddingTop !== undefined) computed = this.$$user_contentPaddingTop;
        else if (this.$$theme_contentPaddingTop !== undefined) computed = this.$$theme_contentPaddingTop;
        else if (this.$$init_contentPaddingTop !== undefined) {
            computed = this.$$init_contentPaddingTop;
            this.$$useinit_contentPaddingTop = true;
        }
    } else if (this.$$user_contentPaddingTop !== undefined) {
        computed = this.$$user_contentPaddingTop;
    } else if (this.$$theme_contentPaddingTop !== undefined) {} else if (this.$$useinit_contentPaddingTop) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_contentPaddingTop;
    var self = this;
    var promise;
    promise = this._applyContentPadding(computed, old, "contentPaddingTop", "resetRuntime");

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

function setThemedContentPaddingTop anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_contentPaddingTop !== undefined) {
            old = this.$$runtime_contentPaddingTop;
        } else if (this.$$user_contentPaddingTop !== undefined) {
            old = this.$$user_contentPaddingTop;
        } else if (this.$$theme_contentPaddingTop !== undefined) {
            old = this.$$theme_contentPaddingTop;
        } else if (this.$$useinit_contentPaddingTop) {
            old = this.$$init_contentPaddingTop;
        }
        if (equ.call(this, this.$$theme_contentPaddingTop, value)) return value;
        var computed;
        if (this.$$runtime_contentPaddingTop !== undefined) {
            computed = this.$$runtime_contentPaddingTop;
            this.$$theme_contentPaddingTop = value;
        } else if (this.$$user_contentPaddingTop !== undefined) {
            computed = this.$$user_contentPaddingTop;
            this.$$theme_contentPaddingTop = value;
        } else if (this.$$theme_contentPaddingTop !== undefined) {
            computed = this.$$theme_contentPaddingTop = value;
        } else if (this.$$useinit_contentPaddingTop) {
            delete this.$$useinit_contentPaddingTop;
            computed = this.$$theme_contentPaddingTop = value;
        } else {
            computed = this.$$theme_contentPaddingTop = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_contentPaddingTop;
        var self = this;
        var promise;
        promise = this._applyContentPadding(computed, old, "contentPaddingTop", "setThemed");

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

function resetThemedContentPaddingTop anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contentPaddingTop !== undefined) {
        old = this.$$runtime_contentPaddingTop;
    } else if (this.$$user_contentPaddingTop !== undefined) {
        old = this.$$user_contentPaddingTop;
    } else if (this.$$theme_contentPaddingTop !== undefined) {
        old = this.$$theme_contentPaddingTop;
    } else if (this.$$useinit_contentPaddingTop) {
        old = this.$$init_contentPaddingTop;
    }
    if (this.$$theme_contentPaddingTop === undefined) return;
    var computed;
    if (this.$$runtime_contentPaddingTop !== undefined) {
        computed = this.$$runtime_contentPaddingTop;
        delete this.$$theme_contentPaddingTop;
    } else if (this.$$user_contentPaddingTop !== undefined) {
        computed = this.$$user_contentPaddingTop;
        delete this.$$theme_contentPaddingTop;
    } else if (this.$$theme_contentPaddingTop !== undefined) {
        delete this.$$theme_contentPaddingTop;
        if (this.$$init_contentPaddingTop !== undefined) {
            computed = this.$$init_contentPaddingTop;
            this.$$useinit_contentPaddingTop = true;
        }
    } else if (this.$$useinit_contentPaddingTop) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_contentPaddingTop;
    var self = this;
    var promise;
    promise = this._applyContentPadding(computed, old, "contentPaddingTop", "resetThemed");

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

function resetContentPaddingRight anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contentPaddingRight !== undefined) {
        old = this.$$runtime_contentPaddingRight;
    } else if (this.$$user_contentPaddingRight !== undefined) {
        old = this.$$user_contentPaddingRight;
    } else if (this.$$theme_contentPaddingRight !== undefined) {
        old = this.$$theme_contentPaddingRight;
    } else if (this.$$useinit_contentPaddingRight) {
        old = this.$$init_contentPaddingRight;
    }
    if (this.$$user_contentPaddingRight === undefined) return;
    var computed;
    if (this.$$runtime_contentPaddingRight !== undefined) {
        computed = this.$$runtime_contentPaddingRight;
        delete this.$$user_contentPaddingRight;
    } else if (this.$$user_contentPaddingRight !== undefined) {
        delete this.$$user_contentPaddingRight;
        if (this.$$runtime_contentPaddingRight !== undefined) computed = this.$$runtime_contentPaddingRight;
        if (this.$$theme_contentPaddingRight !== undefined) computed = this.$$theme_contentPaddingRight;
        else if (this.$$init_contentPaddingRight !== undefined) {
            computed = this.$$init_contentPaddingRight;
            this.$$useinit_contentPaddingRight = true;
        }
    } else if (this.$$theme_contentPaddingRight !== undefined) {} else if (this.$$useinit_contentPaddingRight) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_contentPaddingRight;
    var self = this;
    var promise;
    promise = this._applyContentPadding(computed, old, "contentPaddingRight", "reset");

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

function initContentPaddingRight anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contentPaddingRight !== undefined) {
        old = this.$$runtime_contentPaddingRight;
    } else if (this.$$user_contentPaddingRight !== undefined) {
        old = this.$$user_contentPaddingRight;
    } else if (this.$$theme_contentPaddingRight !== undefined) {
        old = this.$$theme_contentPaddingRight;
    } else if (this.$$useinit_contentPaddingRight) {
        old = this.$$init_contentPaddingRight;
    }
    var computed;
    if (this.$$runtime_contentPaddingRight !== undefined) {
        computed = this.$$runtime_contentPaddingRight;
    } else if (this.$$user_contentPaddingRight !== undefined) {
        computed = this.$$user_contentPaddingRight;
    } else if (this.$$theme_contentPaddingRight !== undefined) {
        computed = this.$$theme_contentPaddingRight;
    } else if (this.$$useinit_contentPaddingRight) {
        computed = this.$$init_contentPaddingRight;
    } else {
        computed = this.$$init_contentPaddingRight;
        this.$$useinit_contentPaddingRight = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyContentPadding(computed, old, "contentPaddingRight", "init");

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

function setRuntimeContentPaddingRight anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_contentPaddingRight !== undefined) {
            old = this.$$runtime_contentPaddingRight;
        } else if (this.$$user_contentPaddingRight !== undefined) {
            old = this.$$user_contentPaddingRight;
        } else if (this.$$theme_contentPaddingRight !== undefined) {
            old = this.$$theme_contentPaddingRight;
        } else if (this.$$useinit_contentPaddingRight) {
            old = this.$$init_contentPaddingRight;
        }
        if (equ.call(this, this.$$runtime_contentPaddingRight, value)) return value;
        var computed;
        if (this.$$runtime_contentPaddingRight !== undefined) {
            computed = this.$$runtime_contentPaddingRight = value;
        } else if (this.$$user_contentPaddingRight !== undefined) {
            computed = this.$$runtime_contentPaddingRight = value;
        } else if (this.$$theme_contentPaddingRight !== undefined) {
            computed = this.$$runtime_contentPaddingRight = value;
        } else if (this.$$useinit_contentPaddingRight) {
            delete this.$$useinit_contentPaddingRight;
            computed = this.$$runtime_contentPaddingRight = value;
        } else {
            computed = this.$$runtime_contentPaddingRight = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_contentPaddingRight;
        var self = this;
        var promise;
        promise = this._applyContentPadding(computed, old, "contentPaddingRight", "setRuntime");

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

function resetRuntimeContentPaddingRight anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contentPaddingRight !== undefined) {
        old = this.$$runtime_contentPaddingRight;
    } else if (this.$$user_contentPaddingRight !== undefined) {
        old = this.$$user_contentPaddingRight;
    } else if (this.$$theme_contentPaddingRight !== undefined) {
        old = this.$$theme_contentPaddingRight;
    } else if (this.$$useinit_contentPaddingRight) {
        old = this.$$init_contentPaddingRight;
    }
    if (this.$$runtime_contentPaddingRight === undefined) return;
    var computed;
    if (this.$$runtime_contentPaddingRight !== undefined) {
        delete this.$$runtime_contentPaddingRight;
        if (this.$$user_contentPaddingRight !== undefined) computed = this.$$user_contentPaddingRight;
        else if (this.$$theme_contentPaddingRight !== undefined) computed = this.$$theme_contentPaddingRight;
        else if (this.$$init_contentPaddingRight !== undefined) {
            computed = this.$$init_contentPaddingRight;
            this.$$useinit_contentPaddingRight = true;
        }
    } else if (this.$$user_contentPaddingRight !== undefined) {
        computed = this.$$user_contentPaddingRight;
    } else if (this.$$theme_contentPaddingRight !== undefined) {} else if (this.$$useinit_contentPaddingRight) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_contentPaddingRight;
    var self = this;
    var promise;
    promise = this._applyContentPadding(computed, old, "contentPaddingRight", "resetRuntime");

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

function setThemedContentPaddingRight anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_contentPaddingRight !== undefined) {
            old = this.$$runtime_contentPaddingRight;
        } else if (this.$$user_contentPaddingRight !== undefined) {
            old = this.$$user_contentPaddingRight;
        } else if (this.$$theme_contentPaddingRight !== undefined) {
            old = this.$$theme_contentPaddingRight;
        } else if (this.$$useinit_contentPaddingRight) {
            old = this.$$init_contentPaddingRight;
        }
        if (equ.call(this, this.$$theme_contentPaddingRight, value)) return value;
        var computed;
        if (this.$$runtime_contentPaddingRight !== undefined) {
            computed = this.$$runtime_contentPaddingRight;
            this.$$theme_contentPaddingRight = value;
        } else if (this.$$user_contentPaddingRight !== undefined) {
            computed = this.$$user_contentPaddingRight;
            this.$$theme_contentPaddingRight = value;
        } else if (this.$$theme_contentPaddingRight !== undefined) {
            computed = this.$$theme_contentPaddingRight = value;
        } else if (this.$$useinit_contentPaddingRight) {
            delete this.$$useinit_contentPaddingRight;
            computed = this.$$theme_contentPaddingRight = value;
        } else {
            computed = this.$$theme_contentPaddingRight = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_contentPaddingRight;
        var self = this;
        var promise;
        promise = this._applyContentPadding(computed, old, "contentPaddingRight", "setThemed");

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

function resetThemedContentPaddingRight anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contentPaddingRight !== undefined) {
        old = this.$$runtime_contentPaddingRight;
    } else if (this.$$user_contentPaddingRight !== undefined) {
        old = this.$$user_contentPaddingRight;
    } else if (this.$$theme_contentPaddingRight !== undefined) {
        old = this.$$theme_contentPaddingRight;
    } else if (this.$$useinit_contentPaddingRight) {
        old = this.$$init_contentPaddingRight;
    }
    if (this.$$theme_contentPaddingRight === undefined) return;
    var computed;
    if (this.$$runtime_contentPaddingRight !== undefined) {
        computed = this.$$runtime_contentPaddingRight;
        delete this.$$theme_contentPaddingRight;
    } else if (this.$$user_contentPaddingRight !== undefined) {
        computed = this.$$user_contentPaddingRight;
        delete this.$$theme_contentPaddingRight;
    } else if (this.$$theme_contentPaddingRight !== undefined) {
        delete this.$$theme_contentPaddingRight;
        if (this.$$init_contentPaddingRight !== undefined) {
            computed = this.$$init_contentPaddingRight;
            this.$$useinit_contentPaddingRight = true;
        }
    } else if (this.$$useinit_contentPaddingRight) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_contentPaddingRight;
    var self = this;
    var promise;
    promise = this._applyContentPadding(computed, old, "contentPaddingRight", "resetThemed");

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

function resetContentPaddingBottom anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contentPaddingBottom !== undefined) {
        old = this.$$runtime_contentPaddingBottom;
    } else if (this.$$user_contentPaddingBottom !== undefined) {
        old = this.$$user_contentPaddingBottom;
    } else if (this.$$theme_contentPaddingBottom !== undefined) {
        old = this.$$theme_contentPaddingBottom;
    } else if (this.$$useinit_contentPaddingBottom) {
        old = this.$$init_contentPaddingBottom;
    }
    if (this.$$user_contentPaddingBottom === undefined) return;
    var computed;
    if (this.$$runtime_contentPaddingBottom !== undefined) {
        computed = this.$$runtime_contentPaddingBottom;
        delete this.$$user_contentPaddingBottom;
    } else if (this.$$user_contentPaddingBottom !== undefined) {
        delete this.$$user_contentPaddingBottom;
        if (this.$$runtime_contentPaddingBottom !== undefined) computed = this.$$runtime_contentPaddingBottom;
        if (this.$$theme_contentPaddingBottom !== undefined) computed = this.$$theme_contentPaddingBottom;
        else if (this.$$init_contentPaddingBottom !== undefined) {
            computed = this.$$init_contentPaddingBottom;
            this.$$useinit_contentPaddingBottom = true;
        }
    } else if (this.$$theme_contentPaddingBottom !== undefined) {} else if (this.$$useinit_contentPaddingBottom) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_contentPaddingBottom;
    var self = this;
    var promise;
    promise = this._applyContentPadding(computed, old, "contentPaddingBottom", "reset");

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

function initContentPaddingBottom anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contentPaddingBottom !== undefined) {
        old = this.$$runtime_contentPaddingBottom;
    } else if (this.$$user_contentPaddingBottom !== undefined) {
        old = this.$$user_contentPaddingBottom;
    } else if (this.$$theme_contentPaddingBottom !== undefined) {
        old = this.$$theme_contentPaddingBottom;
    } else if (this.$$useinit_contentPaddingBottom) {
        old = this.$$init_contentPaddingBottom;
    }
    var computed;
    if (this.$$runtime_contentPaddingBottom !== undefined) {
        computed = this.$$runtime_contentPaddingBottom;
    } else if (this.$$user_contentPaddingBottom !== undefined) {
        computed = this.$$user_contentPaddingBottom;
    } else if (this.$$theme_contentPaddingBottom !== undefined) {
        computed = this.$$theme_contentPaddingBottom;
    } else if (this.$$useinit_contentPaddingBottom) {
        computed = this.$$init_contentPaddingBottom;
    } else {
        computed = this.$$init_contentPaddingBottom;
        this.$$useinit_contentPaddingBottom = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyContentPadding(computed, old, "contentPaddingBottom", "init");

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

function setRuntimeContentPaddingBottom anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_contentPaddingBottom !== undefined) {
            old = this.$$runtime_contentPaddingBottom;
        } else if (this.$$user_contentPaddingBottom !== undefined) {
            old = this.$$user_contentPaddingBottom;
        } else if (this.$$theme_contentPaddingBottom !== undefined) {
            old = this.$$theme_contentPaddingBottom;
        } else if (this.$$useinit_contentPaddingBottom) {
            old = this.$$init_contentPaddingBottom;
        }
        if (equ.call(this, this.$$runtime_contentPaddingBottom, value)) return value;
        var computed;
        if (this.$$runtime_contentPaddingBottom !== undefined) {
            computed = this.$$runtime_contentPaddingBottom = value;
        } else if (this.$$user_contentPaddingBottom !== undefined) {
            computed = this.$$runtime_contentPaddingBottom = value;
        } else if (this.$$theme_contentPaddingBottom !== undefined) {
            computed = this.$$runtime_contentPaddingBottom = value;
        } else if (this.$$useinit_contentPaddingBottom) {
            delete this.$$useinit_contentPaddingBottom;
            computed = this.$$runtime_contentPaddingBottom = value;
        } else {
            computed = this.$$runtime_contentPaddingBottom = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_contentPaddingBottom;
        var self = this;
        var promise;
        promise = this._applyContentPadding(computed, old, "contentPaddingBottom", "setRuntime");

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

function resetRuntimeContentPaddingBottom anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contentPaddingBottom !== undefined) {
        old = this.$$runtime_contentPaddingBottom;
    } else if (this.$$user_contentPaddingBottom !== undefined) {
        old = this.$$user_contentPaddingBottom;
    } else if (this.$$theme_contentPaddingBottom !== undefined) {
        old = this.$$theme_contentPaddingBottom;
    } else if (this.$$useinit_contentPaddingBottom) {
        old = this.$$init_contentPaddingBottom;
    }
    if (this.$$runtime_contentPaddingBottom === undefined) return;
    var computed;
    if (this.$$runtime_contentPaddingBottom !== undefined) {
        delete this.$$runtime_contentPaddingBottom;
        if (this.$$user_contentPaddingBottom !== undefined) computed = this.$$user_contentPaddingBottom;
        else if (this.$$theme_contentPaddingBottom !== undefined) computed = this.$$theme_contentPaddingBottom;
        else if (this.$$init_contentPaddingBottom !== undefined) {
            computed = this.$$init_contentPaddingBottom;
            this.$$useinit_contentPaddingBottom = true;
        }
    } else if (this.$$user_contentPaddingBottom !== undefined) {
        computed = this.$$user_contentPaddingBottom;
    } else if (this.$$theme_contentPaddingBottom !== undefined) {} else if (this.$$useinit_contentPaddingBottom) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_contentPaddingBottom;
    var self = this;
    var promise;
    promise = this._applyContentPadding(computed, old, "contentPaddingBottom", "resetRuntime");

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

function setThemedContentPaddingBottom anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_contentPaddingBottom !== undefined) {
            old = this.$$runtime_contentPaddingBottom;
        } else if (this.$$user_contentPaddingBottom !== undefined) {
            old = this.$$user_contentPaddingBottom;
        } else if (this.$$theme_contentPaddingBottom !== undefined) {
            old = this.$$theme_contentPaddingBottom;
        } else if (this.$$useinit_contentPaddingBottom) {
            old = this.$$init_contentPaddingBottom;
        }
        if (equ.call(this, this.$$theme_contentPaddingBottom, value)) return value;
        var computed;
        if (this.$$runtime_contentPaddingBottom !== undefined) {
            computed = this.$$runtime_contentPaddingBottom;
            this.$$theme_contentPaddingBottom = value;
        } else if (this.$$user_contentPaddingBottom !== undefined) {
            computed = this.$$user_contentPaddingBottom;
            this.$$theme_contentPaddingBottom = value;
        } else if (this.$$theme_contentPaddingBottom !== undefined) {
            computed = this.$$theme_contentPaddingBottom = value;
        } else if (this.$$useinit_contentPaddingBottom) {
            delete this.$$useinit_contentPaddingBottom;
            computed = this.$$theme_contentPaddingBottom = value;
        } else {
            computed = this.$$theme_contentPaddingBottom = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_contentPaddingBottom;
        var self = this;
        var promise;
        promise = this._applyContentPadding(computed, old, "contentPaddingBottom", "setThemed");

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

function resetThemedContentPaddingBottom anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contentPaddingBottom !== undefined) {
        old = this.$$runtime_contentPaddingBottom;
    } else if (this.$$user_contentPaddingBottom !== undefined) {
        old = this.$$user_contentPaddingBottom;
    } else if (this.$$theme_contentPaddingBottom !== undefined) {
        old = this.$$theme_contentPaddingBottom;
    } else if (this.$$useinit_contentPaddingBottom) {
        old = this.$$init_contentPaddingBottom;
    }
    if (this.$$theme_contentPaddingBottom === undefined) return;
    var computed;
    if (this.$$runtime_contentPaddingBottom !== undefined) {
        computed = this.$$runtime_contentPaddingBottom;
        delete this.$$theme_contentPaddingBottom;
    } else if (this.$$user_contentPaddingBottom !== undefined) {
        computed = this.$$user_contentPaddingBottom;
        delete this.$$theme_contentPaddingBottom;
    } else if (this.$$theme_contentPaddingBottom !== undefined) {
        delete this.$$theme_contentPaddingBottom;
        if (this.$$init_contentPaddingBottom !== undefined) {
            computed = this.$$init_contentPaddingBottom;
            this.$$useinit_contentPaddingBottom = true;
        }
    } else if (this.$$useinit_contentPaddingBottom) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_contentPaddingBottom;
    var self = this;
    var promise;
    promise = this._applyContentPadding(computed, old, "contentPaddingBottom", "resetThemed");

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

function resetContentPaddingLeft anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contentPaddingLeft !== undefined) {
        old = this.$$runtime_contentPaddingLeft;
    } else if (this.$$user_contentPaddingLeft !== undefined) {
        old = this.$$user_contentPaddingLeft;
    } else if (this.$$theme_contentPaddingLeft !== undefined) {
        old = this.$$theme_contentPaddingLeft;
    } else if (this.$$useinit_contentPaddingLeft) {
        old = this.$$init_contentPaddingLeft;
    }
    if (this.$$user_contentPaddingLeft === undefined) return;
    var computed;
    if (this.$$runtime_contentPaddingLeft !== undefined) {
        computed = this.$$runtime_contentPaddingLeft;
        delete this.$$user_contentPaddingLeft;
    } else if (this.$$user_contentPaddingLeft !== undefined) {
        delete this.$$user_contentPaddingLeft;
        if (this.$$runtime_contentPaddingLeft !== undefined) computed = this.$$runtime_contentPaddingLeft;
        if (this.$$theme_contentPaddingLeft !== undefined) computed = this.$$theme_contentPaddingLeft;
        else if (this.$$init_contentPaddingLeft !== undefined) {
            computed = this.$$init_contentPaddingLeft;
            this.$$useinit_contentPaddingLeft = true;
        }
    } else if (this.$$theme_contentPaddingLeft !== undefined) {} else if (this.$$useinit_contentPaddingLeft) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_contentPaddingLeft;
    var self = this;
    var promise;
    promise = this._applyContentPadding(computed, old, "contentPaddingLeft", "reset");

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

function initContentPaddingLeft anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contentPaddingLeft !== undefined) {
        old = this.$$runtime_contentPaddingLeft;
    } else if (this.$$user_contentPaddingLeft !== undefined) {
        old = this.$$user_contentPaddingLeft;
    } else if (this.$$theme_contentPaddingLeft !== undefined) {
        old = this.$$theme_contentPaddingLeft;
    } else if (this.$$useinit_contentPaddingLeft) {
        old = this.$$init_contentPaddingLeft;
    }
    var computed;
    if (this.$$runtime_contentPaddingLeft !== undefined) {
        computed = this.$$runtime_contentPaddingLeft;
    } else if (this.$$user_contentPaddingLeft !== undefined) {
        computed = this.$$user_contentPaddingLeft;
    } else if (this.$$theme_contentPaddingLeft !== undefined) {
        computed = this.$$theme_contentPaddingLeft;
    } else if (this.$$useinit_contentPaddingLeft) {
        computed = this.$$init_contentPaddingLeft;
    } else {
        computed = this.$$init_contentPaddingLeft;
        this.$$useinit_contentPaddingLeft = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyContentPadding(computed, old, "contentPaddingLeft", "init");

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

function setRuntimeContentPaddingLeft anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_contentPaddingLeft !== undefined) {
            old = this.$$runtime_contentPaddingLeft;
        } else if (this.$$user_contentPaddingLeft !== undefined) {
            old = this.$$user_contentPaddingLeft;
        } else if (this.$$theme_contentPaddingLeft !== undefined) {
            old = this.$$theme_contentPaddingLeft;
        } else if (this.$$useinit_contentPaddingLeft) {
            old = this.$$init_contentPaddingLeft;
        }
        if (equ.call(this, this.$$runtime_contentPaddingLeft, value)) return value;
        var computed;
        if (this.$$runtime_contentPaddingLeft !== undefined) {
            computed = this.$$runtime_contentPaddingLeft = value;
        } else if (this.$$user_contentPaddingLeft !== undefined) {
            computed = this.$$runtime_contentPaddingLeft = value;
        } else if (this.$$theme_contentPaddingLeft !== undefined) {
            computed = this.$$runtime_contentPaddingLeft = value;
        } else if (this.$$useinit_contentPaddingLeft) {
            delete this.$$useinit_contentPaddingLeft;
            computed = this.$$runtime_contentPaddingLeft = value;
        } else {
            computed = this.$$runtime_contentPaddingLeft = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_contentPaddingLeft;
        var self = this;
        var promise;
        promise = this._applyContentPadding(computed, old, "contentPaddingLeft", "setRuntime");

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

function resetRuntimeContentPaddingLeft anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contentPaddingLeft !== undefined) {
        old = this.$$runtime_contentPaddingLeft;
    } else if (this.$$user_contentPaddingLeft !== undefined) {
        old = this.$$user_contentPaddingLeft;
    } else if (this.$$theme_contentPaddingLeft !== undefined) {
        old = this.$$theme_contentPaddingLeft;
    } else if (this.$$useinit_contentPaddingLeft) {
        old = this.$$init_contentPaddingLeft;
    }
    if (this.$$runtime_contentPaddingLeft === undefined) return;
    var computed;
    if (this.$$runtime_contentPaddingLeft !== undefined) {
        delete this.$$runtime_contentPaddingLeft;
        if (this.$$user_contentPaddingLeft !== undefined) computed = this.$$user_contentPaddingLeft;
        else if (this.$$theme_contentPaddingLeft !== undefined) computed = this.$$theme_contentPaddingLeft;
        else if (this.$$init_contentPaddingLeft !== undefined) {
            computed = this.$$init_contentPaddingLeft;
            this.$$useinit_contentPaddingLeft = true;
        }
    } else if (this.$$user_contentPaddingLeft !== undefined) {
        computed = this.$$user_contentPaddingLeft;
    } else if (this.$$theme_contentPaddingLeft !== undefined) {} else if (this.$$useinit_contentPaddingLeft) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_contentPaddingLeft;
    var self = this;
    var promise;
    promise = this._applyContentPadding(computed, old, "contentPaddingLeft", "resetRuntime");

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

function setThemedContentPaddingLeft anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_contentPaddingLeft !== undefined) {
            old = this.$$runtime_contentPaddingLeft;
        } else if (this.$$user_contentPaddingLeft !== undefined) {
            old = this.$$user_contentPaddingLeft;
        } else if (this.$$theme_contentPaddingLeft !== undefined) {
            old = this.$$theme_contentPaddingLeft;
        } else if (this.$$useinit_contentPaddingLeft) {
            old = this.$$init_contentPaddingLeft;
        }
        if (equ.call(this, this.$$theme_contentPaddingLeft, value)) return value;
        var computed;
        if (this.$$runtime_contentPaddingLeft !== undefined) {
            computed = this.$$runtime_contentPaddingLeft;
            this.$$theme_contentPaddingLeft = value;
        } else if (this.$$user_contentPaddingLeft !== undefined) {
            computed = this.$$user_contentPaddingLeft;
            this.$$theme_contentPaddingLeft = value;
        } else if (this.$$theme_contentPaddingLeft !== undefined) {
            computed = this.$$theme_contentPaddingLeft = value;
        } else if (this.$$useinit_contentPaddingLeft) {
            delete this.$$useinit_contentPaddingLeft;
            computed = this.$$theme_contentPaddingLeft = value;
        } else {
            computed = this.$$theme_contentPaddingLeft = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_contentPaddingLeft;
        var self = this;
        var promise;
        promise = this._applyContentPadding(computed, old, "contentPaddingLeft", "setThemed");

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

function resetThemedContentPaddingLeft anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contentPaddingLeft !== undefined) {
        old = this.$$runtime_contentPaddingLeft;
    } else if (this.$$user_contentPaddingLeft !== undefined) {
        old = this.$$user_contentPaddingLeft;
    } else if (this.$$theme_contentPaddingLeft !== undefined) {
        old = this.$$theme_contentPaddingLeft;
    } else if (this.$$useinit_contentPaddingLeft) {
        old = this.$$init_contentPaddingLeft;
    }
    if (this.$$theme_contentPaddingLeft === undefined) return;
    var computed;
    if (this.$$runtime_contentPaddingLeft !== undefined) {
        computed = this.$$runtime_contentPaddingLeft;
        delete this.$$theme_contentPaddingLeft;
    } else if (this.$$user_contentPaddingLeft !== undefined) {
        computed = this.$$user_contentPaddingLeft;
        delete this.$$theme_contentPaddingLeft;
    } else if (this.$$theme_contentPaddingLeft !== undefined) {
        delete this.$$theme_contentPaddingLeft;
        if (this.$$init_contentPaddingLeft !== undefined) {
            computed = this.$$init_contentPaddingLeft;
            this.$$useinit_contentPaddingLeft = true;
        }
    } else if (this.$$useinit_contentPaddingLeft) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_contentPaddingLeft;
    var self = this;
    var promise;
    promise = this._applyContentPadding(computed, old, "contentPaddingLeft", "resetThemed");

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

function _requestData(n) {
    n ? (webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Reports(), t, ClientLib.Data.Reports.ReportDelivered, this, this.__CF), ClientLib.Data.MainData.GetInstance().get_Reports().RequestReportData(this.__CC)) : (this.__Al.show(), this.__CE.exclude())
}

function _deferredAppear() {
    var n, t, i;
    webfrontend.gui.CustomWindow.prototype._deferredAppear.call(this);
    webfrontend.gui.reports.ReportPopup.windowXPosStart < 0 || webfrontend.gui.reports.ReportPopup.windowYPosStart < 0 || webfrontend.gui.reports.ReportPopup.numWindowsOpen <= 0 ? (n = this.centerPosition(), this.moveTo(n.x, webfrontend.gui.reports.ReportPopup.windowYPosStart), webfrontend.gui.reports.ReportPopup.windowXPosStart = n.x) : (t = qx.bom.Viewport.getWidth(window), i = qx.bom.Viewport.getHeight(window), webfrontend.gui.reports.ReportPopup.windowXPosStart += 20, webfrontend.gui.reports.ReportPopup.windowYPosStart += 20, (webfrontend.gui.reports.ReportPopup.windowXPosStart + this.getWidth() > t || webfrontend.gui.reports.ReportPopup.windowYPosStart + this.getHeight() > i) && (webfrontend.gui.reports.ReportPopup.windowXPosStart = 0, webfrontend.gui.reports.ReportPopup.windowYPosStart = webfrontend.gui.reports.ReportPopup.windowYPosOriginalStart), this.moveTo(webfrontend.gui.reports.ReportPopup.windowXPosStart, webfrontend.gui.reports.ReportPopup.windowYPosStart));
    webfrontend.gui.reports.ReportPopup.numWindowsOpen++;
    this._updateOnAppear()
}

function _onClose() {
    webfrontend.gui.CustomWindow.prototype._onClose.call(this);
    webfrontend.gui.reports.ReportPopup.numWindowsOpen--;
    this._updateOnDisappear()
}

function _updateOnAppear() {}

function _updateOnDisappear() {}

function _setReportData() {}