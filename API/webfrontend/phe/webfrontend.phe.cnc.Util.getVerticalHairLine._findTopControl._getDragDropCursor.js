function getAction anonymous(value) {
    if (this.$$runtime_action !== undefined) return this.$$runtime_action;
    if (this.$$user_action !== undefined) return this.$$user_action;
    else return null;
}

function setAction anonymous(value) {
    this.$$setActionImpl.apply(this, arguments);
    return value;
}

function resetAction anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_action !== undefined) {
        old = this.$$runtime_action;
    } else if (this.$$user_action !== undefined) {
        old = this.$$user_action;
    } else if (this.$$useinit_action) {
        old = this.$$init_action;
    }
    if (this.$$user_action === undefined) return;
    var computed;
    if (this.$$runtime_action !== undefined) {
        computed = this.$$runtime_action;
        delete this.$$user_action;
    } else if (this.$$user_action !== undefined) {
        delete this.$$user_action;
        if (this.$$runtime_action !== undefined) computed = this.$$runtime_action;
        if (this.$$theme_action !== undefined) computed = this.$$theme_action;
        else if (this.$$init_action !== undefined) {
            computed = this.$$init_action;
            this.$$useinit_action = true;
        }
    } else if (this.$$useinit_action) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyAction(computed, old, "action", "reset");

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

function initAction anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_action !== undefined) {
            old = this.$$runtime_action;
        } else if (this.$$user_action !== undefined) {
            old = this.$$user_action;
        } else if (this.$$useinit_action) {
            old = this.$$init_action;
        }
        if (equ.call(this, this.$$init_action, value)) return value;
        var computed;
        if (this.$$runtime_action !== undefined) {
            computed = this.$$runtime_action;
            this.$$init_action = value;
        } else if (this.$$user_action !== undefined) {
            computed = this.$$user_action;
            this.$$init_action = value;
        } else if (this.$$useinit_action) {
            computed = this.$$init_action = value;
        } else {
            computed = this.$$init_action = value;
            this.$$useinit_action = true;
        }
        if (computed === undefined) computed = null;
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyAction(computed, old, "action", "init");

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

function setRuntimeAction anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_action !== undefined) {
            old = this.$$runtime_action;
        } else if (this.$$user_action !== undefined) {
            old = this.$$user_action;
        } else if (this.$$useinit_action) {
            old = this.$$init_action;
        }
        if (equ.call(this, this.$$runtime_action, value)) return value;
        var computed;
        if (this.$$runtime_action !== undefined) {
            computed = this.$$runtime_action = value;
        } else if (this.$$user_action !== undefined) {
            computed = this.$$runtime_action = value;
        } else if (this.$$useinit_action) {
            delete this.$$useinit_action;
            computed = this.$$runtime_action = value;
        } else {
            computed = this.$$runtime_action = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyAction(computed, old, "action", "setRuntime");

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

function resetRuntimeAction anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_action !== undefined) {
        old = this.$$runtime_action;
    } else if (this.$$user_action !== undefined) {
        old = this.$$user_action;
    } else if (this.$$useinit_action) {
        old = this.$$init_action;
    }
    if (this.$$runtime_action === undefined) return;
    var computed;
    if (this.$$runtime_action !== undefined) {
        delete this.$$runtime_action;
        if (this.$$user_action !== undefined) computed = this.$$user_action;
        else if (this.$$theme_action !== undefined) computed = this.$$theme_action;
        else if (this.$$init_action !== undefined) {
            computed = this.$$init_action;
            this.$$useinit_action = true;
        }
    } else if (this.$$user_action !== undefined) {
        computed = this.$$user_action;
    } else if (this.$$useinit_action) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyAction(computed, old, "action", "resetRuntime");

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

function _applyAction(n, t) {
    t && this.removeState(t);
    n && this.addState(n)
}

function getPosition anonymous(value) {
    if (this.$$runtime_position !== undefined) return this.$$runtime_position;
    if (this.$$user_position !== undefined) return this.$$user_position;
    else if (this.$$theme_position !== undefined) return this.$$theme_position;
    else return this.$$init_position;
}

function setPosition anonymous(value) {
    this.$$setPositionImpl.apply(this, arguments);
    return value;
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

function getPlaceMethod anonymous(value) {
    if (this.$$runtime_placeMethod !== undefined) return this.$$runtime_placeMethod;
    if (this.$$user_placeMethod !== undefined) return this.$$user_placeMethod;
    else if (this.$$theme_placeMethod !== undefined) return this.$$theme_placeMethod;
    else return this.$$init_placeMethod;
}

function setPlaceMethod anonymous(value) {
    this.$$setPlaceMethodImpl.apply(this, arguments);
    return value;
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

function getDomMove anonymous(value) {
    if (this.$$runtime_domMove !== undefined) return this.$$runtime_domMove;
    if (this.$$user_domMove !== undefined) return this.$$user_domMove;
    else return this.$$init_domMove;
}

function setDomMove anonymous(value) {
    this.$$setDomMoveImpl.apply(this, arguments);
    return value;
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

function toggleDomMove anonymous() {
    return this.setDomMove(!this.getDomMove())
}

function isDomMove anonymous() {
    return this.getDomMove()
}

function getPlacementModeX anonymous(value) {
    if (this.$$runtime_placementModeX !== undefined) return this.$$runtime_placementModeX;
    if (this.$$user_placementModeX !== undefined) return this.$$user_placementModeX;
    else if (this.$$theme_placementModeX !== undefined) return this.$$theme_placementModeX;
    else return this.$$init_placementModeX;
}

function setPlacementModeX anonymous(value) {
    this.$$setPlacementModeXImpl.apply(this, arguments);
    return value;
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

function getPlacementModeY anonymous(value) {
    if (this.$$runtime_placementModeY !== undefined) return this.$$runtime_placementModeY;
    if (this.$$user_placementModeY !== undefined) return this.$$user_placementModeY;
    else if (this.$$theme_placementModeY !== undefined) return this.$$theme_placementModeY;
    else return this.$$init_placementModeY;
}

function setPlacementModeY anonymous(value) {
    this.$$setPlacementModeYImpl.apply(this, arguments);
    return value;
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

function getOffsetLeft anonymous(value) {
    if (this.$$runtime_offsetLeft !== undefined) return this.$$runtime_offsetLeft;
    if (this.$$user_offsetLeft !== undefined) return this.$$user_offsetLeft;
    else if (this.$$theme_offsetLeft !== undefined) return this.$$theme_offsetLeft;
    else return this.$$init_offsetLeft;
}

function setOffsetLeft anonymous(value) {
    this.$$setOffsetLeftImpl.apply(this, arguments);
    return value;
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

function getOffsetTop anonymous(value) {
    if (this.$$runtime_offsetTop !== undefined) return this.$$runtime_offsetTop;
    if (this.$$user_offsetTop !== undefined) return this.$$user_offsetTop;
    else if (this.$$theme_offsetTop !== undefined) return this.$$theme_offsetTop;
    else return this.$$init_offsetTop;
}

function setOffsetTop anonymous(value) {
    this.$$setOffsetTopImpl.apply(this, arguments);
    return value;
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

function getOffsetRight anonymous(value) {
    if (this.$$runtime_offsetRight !== undefined) return this.$$runtime_offsetRight;
    if (this.$$user_offsetRight !== undefined) return this.$$user_offsetRight;
    else if (this.$$theme_offsetRight !== undefined) return this.$$theme_offsetRight;
    else return this.$$init_offsetRight;
}

function setOffsetRight anonymous(value) {
    this.$$setOffsetRightImpl.apply(this, arguments);
    return value;
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

function getOffsetBottom anonymous(value) {
    if (this.$$runtime_offsetBottom !== undefined) return this.$$runtime_offsetBottom;
    if (this.$$user_offsetBottom !== undefined) return this.$$user_offsetBottom;
    else if (this.$$theme_offsetBottom !== undefined) return this.$$theme_offsetBottom;
    else return this.$$init_offsetBottom;
}

function setOffsetBottom anonymous(value) {
    this.$$setOffsetBottomImpl.apply(this, arguments);
    return value;
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