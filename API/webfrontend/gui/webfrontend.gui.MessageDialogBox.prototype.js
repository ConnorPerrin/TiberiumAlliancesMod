function getCanClose anonymous(value) {
    if (this.$$runtime_canClose !== undefined) return this.$$runtime_canClose;
    if (this.$$user_canClose !== undefined) return this.$$user_canClose;
    else return this.$$init_canClose;
}

function setCanClose anonymous(value) {
    this.$$setCanCloseImpl.apply(this, arguments);
    return value;
}

function resetCanClose anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_canClose !== undefined) {
        old = this.$$runtime_canClose;
    } else if (this.$$user_canClose !== undefined) {
        old = this.$$user_canClose;
    } else if (this.$$useinit_canClose) {
        old = this.$$init_canClose;
    }
    if (this.$$user_canClose === undefined) return;
    var computed;
    if (this.$$runtime_canClose !== undefined) {
        computed = this.$$runtime_canClose;
        delete this.$$user_canClose;
    } else if (this.$$user_canClose !== undefined) {
        delete this.$$user_canClose;
        if (this.$$runtime_canClose !== undefined) computed = this.$$runtime_canClose;
        if (this.$$theme_canClose !== undefined) computed = this.$$theme_canClose;
        else if (this.$$init_canClose !== undefined) {
            computed = this.$$init_canClose;
            this.$$useinit_canClose = true;
        }
    } else if (this.$$useinit_canClose) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_canClose;
    var self = this;
    var promise;
    promise = this.__JS(computed, old, "canClose", "reset");

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

function initCanClose anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_canClose !== undefined) {
        old = this.$$runtime_canClose;
    } else if (this.$$user_canClose !== undefined) {
        old = this.$$user_canClose;
    } else if (this.$$useinit_canClose) {
        old = this.$$init_canClose;
    }
    var computed;
    if (this.$$runtime_canClose !== undefined) {
        computed = this.$$runtime_canClose;
    } else if (this.$$user_canClose !== undefined) {
        computed = this.$$user_canClose;
    } else if (this.$$useinit_canClose) {
        computed = this.$$init_canClose;
    } else {
        computed = this.$$init_canClose;
        this.$$useinit_canClose = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this.__JS(computed, old, "canClose", "init");

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

function setRuntimeCanClose anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_canClose !== undefined) {
            old = this.$$runtime_canClose;
        } else if (this.$$user_canClose !== undefined) {
            old = this.$$user_canClose;
        } else if (this.$$useinit_canClose) {
            old = this.$$init_canClose;
        }
        if (equ.call(this, this.$$runtime_canClose, value)) return value;
        var computed;
        if (this.$$runtime_canClose !== undefined) {
            computed = this.$$runtime_canClose = value;
        } else if (this.$$user_canClose !== undefined) {
            computed = this.$$runtime_canClose = value;
        } else if (this.$$useinit_canClose) {
            delete this.$$useinit_canClose;
            computed = this.$$runtime_canClose = value;
        } else {
            computed = this.$$runtime_canClose = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_canClose;
        var self = this;
        var promise;
        promise = this.__JS(computed, old, "canClose", "setRuntime");

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

function resetRuntimeCanClose anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_canClose !== undefined) {
        old = this.$$runtime_canClose;
    } else if (this.$$user_canClose !== undefined) {
        old = this.$$user_canClose;
    } else if (this.$$useinit_canClose) {
        old = this.$$init_canClose;
    }
    if (this.$$runtime_canClose === undefined) return;
    var computed;
    if (this.$$runtime_canClose !== undefined) {
        delete this.$$runtime_canClose;
        if (this.$$user_canClose !== undefined) computed = this.$$user_canClose;
        else if (this.$$theme_canClose !== undefined) computed = this.$$theme_canClose;
        else if (this.$$init_canClose !== undefined) {
            computed = this.$$init_canClose;
            this.$$useinit_canClose = true;
        }
    } else if (this.$$user_canClose !== undefined) {
        computed = this.$$user_canClose;
    } else if (this.$$useinit_canClose) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_canClose;
    var self = this;
    var promise;
    promise = this.__JS(computed, old, "canClose", "resetRuntime");

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

function centerPosition() {
    var i = qx.core.Init.getApplication(),
        r = i.getMainOverlay().getBounds(),
        n = i.getPlayArea().getBounds(),
        t = this.getBounds(),
        u, f;
    t != null && (u = r.left + n.left + Math.floor((n.width - t.width) / 2), f = r.top + n.top + Math.floor((n.height - t.height) / 2), this.moveTo(u, f))
}

function deactivate() {}

function setTitle(n) {
    this.title.setValue(n)
}

function close(n) {
    n ? (this.__JR = !1, this.exclude(), this.deactivate(), this.fireEvent(y)) : this.__JR || (this.__JR = !0, this.animate(qx.phe.AnimationManager.getInstance().getAnimation(r).getDescription(), null, function() {
        this.close(!0)
    }, this))
}

function _applyVisibility(n, t) {
    n == rt && this.animate(qx.phe.AnimationManager.getInstance().getAnimation(h).getDescription());
    qx.ui.popup.Popup.prototype._applyVisibility.call(this, n, t)
}

function onResize() {
    this.centerPosition()
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

function resetAutoHide anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_autoHide !== undefined) delete this.$$user_autoHide;
}

function setRuntimeAutoHide anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_autoHide !== undefined) {
            old = this.$$runtime_autoHide;
        } else if (this.$$user_autoHide !== undefined) {
            old = this.$$user_autoHide;
        } else if (this.$$useinit_autoHide) {
            old = this.$$init_autoHide;
        }
        this.$$runtime_autoHide = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeAutoHide anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_autoHide !== undefined) delete this.$$runtime_autoHide;
}

function resetConsumeOutsideClicks anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_consumeOutsideClicks !== undefined) delete this.$$user_consumeOutsideClicks;
}

function setRuntimeConsumeOutsideClicks anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_consumeOutsideClicks !== undefined) {
            old = this.$$runtime_consumeOutsideClicks;
        } else if (this.$$user_consumeOutsideClicks !== undefined) {
            old = this.$$user_consumeOutsideClicks;
        } else if (this.$$useinit_consumeOutsideClicks) {
            old = this.$$init_consumeOutsideClicks;
        }
        this.$$runtime_consumeOutsideClicks = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeConsumeOutsideClicks anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_consumeOutsideClicks !== undefined) delete this.$$runtime_consumeOutsideClicks;
}

function resetPosition anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_position !== undefined) delete this.$$user_position;
}

function setRuntimePosition anonymous(value) {
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
        this.$$runtime_position = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimePosition anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_position !== undefined) delete this.$$runtime_position;
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

function resetThemedPosition anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$theme_position !== undefined) delete this.$$theme_position;
}

function resetPlaceMethod anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_placeMethod !== undefined) delete this.$$user_placeMethod;
}

function setRuntimePlaceMethod anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_placeMethod !== undefined) {
            old = this.$$runtime_placeMethod;
        } else if (this.$$user_placeMethod !== undefined) {
            old = this.$$user_placeMethod;
        } else if (this.$$theme_placeMethod !== undefined) {
            old = this.$$theme_placeMethod;
        } else if (this.$$useinit_placeMethod) {
            old = this.$$init_placeMethod;
        }
        this.$$runtime_placeMethod = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimePlaceMethod anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_placeMethod !== undefined) delete this.$$runtime_placeMethod;
}

function setThemedPlaceMethod anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_placeMethod !== undefined) {
            old = this.$$runtime_placeMethod;
        } else if (this.$$user_placeMethod !== undefined) {
            old = this.$$user_placeMethod;
        } else if (this.$$theme_placeMethod !== undefined) {
            old = this.$$theme_placeMethod;
        } else if (this.$$useinit_placeMethod) {
            old = this.$$init_placeMethod;
        }
        this.$$theme_placeMethod = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetThemedPlaceMethod anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$theme_placeMethod !== undefined) delete this.$$theme_placeMethod;
}

function resetDomMove anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_domMove !== undefined) delete this.$$user_domMove;
}

function setRuntimeDomMove anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_domMove !== undefined) {
            old = this.$$runtime_domMove;
        } else if (this.$$user_domMove !== undefined) {
            old = this.$$user_domMove;
        } else if (this.$$useinit_domMove) {
            old = this.$$init_domMove;
        }
        this.$$runtime_domMove = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeDomMove anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_domMove !== undefined) delete this.$$runtime_domMove;
}

function resetPlacementModeX anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_placementModeX !== undefined) delete this.$$user_placementModeX;
}

function setRuntimePlacementModeX anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_placementModeX !== undefined) {
            old = this.$$runtime_placementModeX;
        } else if (this.$$user_placementModeX !== undefined) {
            old = this.$$user_placementModeX;
        } else if (this.$$theme_placementModeX !== undefined) {
            old = this.$$theme_placementModeX;
        } else if (this.$$useinit_placementModeX) {
            old = this.$$init_placementModeX;
        }
        this.$$runtime_placementModeX = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimePlacementModeX anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_placementModeX !== undefined) delete this.$$runtime_placementModeX;
}

function setThemedPlacementModeX anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_placementModeX !== undefined) {
            old = this.$$runtime_placementModeX;
        } else if (this.$$user_placementModeX !== undefined) {
            old = this.$$user_placementModeX;
        } else if (this.$$theme_placementModeX !== undefined) {
            old = this.$$theme_placementModeX;
        } else if (this.$$useinit_placementModeX) {
            old = this.$$init_placementModeX;
        }
        this.$$theme_placementModeX = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetThemedPlacementModeX anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$theme_placementModeX !== undefined) delete this.$$theme_placementModeX;
}

function resetPlacementModeY anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_placementModeY !== undefined) delete this.$$user_placementModeY;
}

function setRuntimePlacementModeY anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_placementModeY !== undefined) {
            old = this.$$runtime_placementModeY;
        } else if (this.$$user_placementModeY !== undefined) {
            old = this.$$user_placementModeY;
        } else if (this.$$theme_placementModeY !== undefined) {
            old = this.$$theme_placementModeY;
        } else if (this.$$useinit_placementModeY) {
            old = this.$$init_placementModeY;
        }
        this.$$runtime_placementModeY = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimePlacementModeY anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_placementModeY !== undefined) delete this.$$runtime_placementModeY;
}

function setThemedPlacementModeY anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_placementModeY !== undefined) {
            old = this.$$runtime_placementModeY;
        } else if (this.$$user_placementModeY !== undefined) {
            old = this.$$user_placementModeY;
        } else if (this.$$theme_placementModeY !== undefined) {
            old = this.$$theme_placementModeY;
        } else if (this.$$useinit_placementModeY) {
            old = this.$$init_placementModeY;
        }
        this.$$theme_placementModeY = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetThemedPlacementModeY anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$theme_placementModeY !== undefined) delete this.$$theme_placementModeY;
}

function resetOffsetLeft anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_offsetLeft !== undefined) delete this.$$user_offsetLeft;
}

function setRuntimeOffsetLeft anonymous(value) {
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
        this.$$runtime_offsetLeft = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeOffsetLeft anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_offsetLeft !== undefined) delete this.$$runtime_offsetLeft;
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

function resetThemedOffsetLeft anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$theme_offsetLeft !== undefined) delete this.$$theme_offsetLeft;
}

function resetOffsetTop anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_offsetTop !== undefined) delete this.$$user_offsetTop;
}

function setRuntimeOffsetTop anonymous(value) {
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
        this.$$runtime_offsetTop = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeOffsetTop anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_offsetTop !== undefined) delete this.$$runtime_offsetTop;
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

function resetThemedOffsetTop anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$theme_offsetTop !== undefined) delete this.$$theme_offsetTop;
}

function resetOffsetRight anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_offsetRight !== undefined) delete this.$$user_offsetRight;
}

function setRuntimeOffsetRight anonymous(value) {
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
        this.$$runtime_offsetRight = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeOffsetRight anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_offsetRight !== undefined) delete this.$$runtime_offsetRight;
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

function resetThemedOffsetRight anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$theme_offsetRight !== undefined) delete this.$$theme_offsetRight;
}

function resetOffsetBottom anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_offsetBottom !== undefined) delete this.$$user_offsetBottom;
}

function setRuntimeOffsetBottom anonymous(value) {
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
        this.$$runtime_offsetBottom = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeOffsetBottom anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_offsetBottom !== undefined) delete this.$$runtime_offsetBottom;
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

function resetThemedOffsetBottom anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$theme_offsetBottom !== undefined) delete this.$$theme_offsetBottom;
}

function activateDialog(r) {
    this.__bEO = r.callbackContext;
    this.__bEP = r.callbackFunc;
    r.title != null ? this.setTitle(r.title) : this.setTitle(this.tr(f));
    this.__RN.setRich(r.textRich == !0);
    r.text != null ? this.__RN.setValue(r.text) : this.__RN.setValue(i);
    var u = 3;
    r.buttons != null && (u = r.buttons);
    this.__bEM.setVisibility(t);
    this.__bEN.setVisibility(t);
    this.__bEL.setVisibility(t);
    u & 2 && (r.cancelText != null ? this.__bEN.setLabel(r.cancelText) : this.__bEN.setLabel(this.tr(e)), this.__bEN.setVisibility(n));
    u & 1 && (r.okText != null ? this.__bEM.setLabel(r.okText) : this.__bEM.setLabel(this.tr(h)), this.__bEM.setVisibility(n));
    u == 3 && this.__bEL.setVisibility(n);
    this.show();
    this.centerPosition()
}

function updateDialogTexts(n) {
    n != null ? this.__RN.setValue(n) : this.__RN.setValue(i)
}