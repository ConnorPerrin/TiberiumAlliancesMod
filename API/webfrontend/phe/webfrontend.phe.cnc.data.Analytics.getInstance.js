function fireTealiumTrackEvent() {
    var o = ClientLib.Data.MainData.GetInstance().get_Player().get_IdNucleus(),
        e = webfrontend.phe.cnc.data.Analytics.tag_url_tealium,
        f;
    o != 0 && typeof window[e] == u && window[e].length > 0 && (window.utag_data = {
        userid: o.toString(),
        intcmp: n,
        ab_test_var: n
    }, f = document.createElement(i), f.setAttribute(r, t), f.src = window[e], f.async = !0, document.body.appendChild(f))
}

function resetQxOwner anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_qxOwner !== undefined) {
        old = this.$$runtime_qxOwner;
    } else if (this.$$user_qxOwner !== undefined) {
        old = this.$$user_qxOwner;
    } else if (this.$$useinit_qxOwner) {
        old = this.$$init_qxOwner;
    }
    if (this.$$user_qxOwner === undefined) return;
    var computed;
    if (this.$$runtime_qxOwner !== undefined) {
        computed = this.$$runtime_qxOwner;
        delete this.$$user_qxOwner;
    } else if (this.$$user_qxOwner !== undefined) {
        delete this.$$user_qxOwner;
        if (this.$$runtime_qxOwner !== undefined) computed = this.$$runtime_qxOwner;
        if (this.$$theme_qxOwner !== undefined) computed = this.$$theme_qxOwner;
        else if (this.$$init_qxOwner !== undefined) {
            computed = this.$$init_qxOwner;
            this.$$useinit_qxOwner = true;
        }
    } else if (this.$$useinit_qxOwner) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_qxOwner;
    var self = this;
    var promise;
    promise = this._applyQxOwner(computed, old, "qxOwner", "reset");

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

function initQxOwner anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_qxOwner !== undefined) {
        old = this.$$runtime_qxOwner;
    } else if (this.$$user_qxOwner !== undefined) {
        old = this.$$user_qxOwner;
    } else if (this.$$useinit_qxOwner) {
        old = this.$$init_qxOwner;
    }
    var computed;
    if (this.$$runtime_qxOwner !== undefined) {
        computed = this.$$runtime_qxOwner;
    } else if (this.$$user_qxOwner !== undefined) {
        computed = this.$$user_qxOwner;
    } else if (this.$$useinit_qxOwner) {
        computed = this.$$init_qxOwner;
    } else {
        computed = this.$$init_qxOwner;
        this.$$useinit_qxOwner = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyQxOwner(computed, old, "qxOwner", "init");

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

function setRuntimeQxOwner anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_qxOwner !== undefined) {
            old = this.$$runtime_qxOwner;
        } else if (this.$$user_qxOwner !== undefined) {
            old = this.$$user_qxOwner;
        } else if (this.$$useinit_qxOwner) {
            old = this.$$init_qxOwner;
        }
        if (equ.call(this, this.$$runtime_qxOwner, value)) return value;
        var computed;
        if (this.$$runtime_qxOwner !== undefined) {
            computed = this.$$runtime_qxOwner = value;
        } else if (this.$$user_qxOwner !== undefined) {
            computed = this.$$runtime_qxOwner = value;
        } else if (this.$$useinit_qxOwner) {
            delete this.$$useinit_qxOwner;
            computed = this.$$runtime_qxOwner = value;
        } else {
            computed = this.$$runtime_qxOwner = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_qxOwner;
        var self = this;
        var promise;
        promise = this._applyQxOwner(computed, old, "qxOwner", "setRuntime");

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

function resetRuntimeQxOwner anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_qxOwner !== undefined) {
        old = this.$$runtime_qxOwner;
    } else if (this.$$user_qxOwner !== undefined) {
        old = this.$$user_qxOwner;
    } else if (this.$$useinit_qxOwner) {
        old = this.$$init_qxOwner;
    }
    if (this.$$runtime_qxOwner === undefined) return;
    var computed;
    if (this.$$runtime_qxOwner !== undefined) {
        delete this.$$runtime_qxOwner;
        if (this.$$user_qxOwner !== undefined) computed = this.$$user_qxOwner;
        else if (this.$$theme_qxOwner !== undefined) computed = this.$$theme_qxOwner;
        else if (this.$$init_qxOwner !== undefined) {
            computed = this.$$init_qxOwner;
            this.$$useinit_qxOwner = true;
        }
    } else if (this.$$user_qxOwner !== undefined) {
        computed = this.$$user_qxOwner;
    } else if (this.$$useinit_qxOwner) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_qxOwner;
    var self = this;
    var promise;
    promise = this._applyQxOwner(computed, old, "qxOwner", "resetRuntime");

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

function resetQxObjectId anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_qxObjectId !== undefined) {
        old = this.$$runtime_qxObjectId;
    } else if (this.$$user_qxObjectId !== undefined) {
        old = this.$$user_qxObjectId;
    } else if (this.$$useinit_qxObjectId) {
        old = this.$$init_qxObjectId;
    }
    if (this.$$user_qxObjectId === undefined) return;
    var computed;
    if (this.$$runtime_qxObjectId !== undefined) {
        computed = this.$$runtime_qxObjectId;
        delete this.$$user_qxObjectId;
    } else if (this.$$user_qxObjectId !== undefined) {
        delete this.$$user_qxObjectId;
        if (this.$$runtime_qxObjectId !== undefined) computed = this.$$runtime_qxObjectId;
        if (this.$$theme_qxObjectId !== undefined) computed = this.$$theme_qxObjectId;
        else if (this.$$init_qxObjectId !== undefined) {
            computed = this.$$init_qxObjectId;
            this.$$useinit_qxObjectId = true;
        }
    } else if (this.$$useinit_qxObjectId) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_qxObjectId;
    var self = this;
    var promise;
    promise = this._applyQxObjectId(computed, old, "qxObjectId", "reset");

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

function initQxObjectId anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_qxObjectId !== undefined) {
        old = this.$$runtime_qxObjectId;
    } else if (this.$$user_qxObjectId !== undefined) {
        old = this.$$user_qxObjectId;
    } else if (this.$$useinit_qxObjectId) {
        old = this.$$init_qxObjectId;
    }
    var computed;
    if (this.$$runtime_qxObjectId !== undefined) {
        computed = this.$$runtime_qxObjectId;
    } else if (this.$$user_qxObjectId !== undefined) {
        computed = this.$$user_qxObjectId;
    } else if (this.$$useinit_qxObjectId) {
        computed = this.$$init_qxObjectId;
    } else {
        computed = this.$$init_qxObjectId;
        this.$$useinit_qxObjectId = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyQxObjectId(computed, old, "qxObjectId", "init");

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

function setRuntimeQxObjectId anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_qxObjectId !== undefined) {
            old = this.$$runtime_qxObjectId;
        } else if (this.$$user_qxObjectId !== undefined) {
            old = this.$$user_qxObjectId;
        } else if (this.$$useinit_qxObjectId) {
            old = this.$$init_qxObjectId;
        }
        if (equ.call(this, this.$$runtime_qxObjectId, value)) return value;
        var computed;
        if (this.$$runtime_qxObjectId !== undefined) {
            computed = this.$$runtime_qxObjectId = value;
        } else if (this.$$user_qxObjectId !== undefined) {
            computed = this.$$runtime_qxObjectId = value;
        } else if (this.$$useinit_qxObjectId) {
            delete this.$$useinit_qxObjectId;
            computed = this.$$runtime_qxObjectId = value;
        } else {
            computed = this.$$runtime_qxObjectId = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_qxObjectId;
        var self = this;
        var promise;
        promise = this._applyQxObjectId(computed, old, "qxObjectId", "setRuntime");

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

function resetRuntimeQxObjectId anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_qxObjectId !== undefined) {
        old = this.$$runtime_qxObjectId;
    } else if (this.$$user_qxObjectId !== undefined) {
        old = this.$$user_qxObjectId;
    } else if (this.$$useinit_qxObjectId) {
        old = this.$$init_qxObjectId;
    }
    if (this.$$runtime_qxObjectId === undefined) return;
    var computed;
    if (this.$$runtime_qxObjectId !== undefined) {
        delete this.$$runtime_qxObjectId;
        if (this.$$user_qxObjectId !== undefined) computed = this.$$user_qxObjectId;
        else if (this.$$theme_qxObjectId !== undefined) computed = this.$$theme_qxObjectId;
        else if (this.$$init_qxObjectId !== undefined) {
            computed = this.$$init_qxObjectId;
            this.$$useinit_qxObjectId = true;
        }
    } else if (this.$$user_qxObjectId !== undefined) {
        computed = this.$$user_qxObjectId;
    } else if (this.$$useinit_qxObjectId) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_qxObjectId;
    var self = this;
    var promise;
    promise = this._applyQxObjectId(computed, old, "qxObjectId", "resetRuntime");

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