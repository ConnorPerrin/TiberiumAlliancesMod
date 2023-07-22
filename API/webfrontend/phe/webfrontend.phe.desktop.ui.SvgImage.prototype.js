function getPaddingTop anonymous(value) {
    if (this.$$runtime_paddingTop !== undefined) return this.$$runtime_paddingTop;
    if (this.$$user_paddingTop !== undefined) return this.$$user_paddingTop;
    else if (this.$$theme_paddingTop !== undefined) return this.$$theme_paddingTop;
    else return this.$$init_paddingTop;
}

function setPaddingTop anonymous(value) {
    this.$$setPaddingTopImpl.apply(this, arguments);
    return value;
}

function resetPaddingTop anonymous(value) {
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
    if (this.$$user_paddingTop === undefined) return;
    var computed;
    if (this.$$runtime_paddingTop !== undefined) {
        computed = this.$$runtime_paddingTop;
        delete this.$$user_paddingTop;
    } else if (this.$$user_paddingTop !== undefined) {
        delete this.$$user_paddingTop;
        if (this.$$runtime_paddingTop !== undefined) computed = this.$$runtime_paddingTop;
        if (this.$$theme_paddingTop !== undefined) computed = this.$$theme_paddingTop;
        else if (this.$$init_paddingTop !== undefined) {
            computed = this.$$init_paddingTop;
            this.$$useinit_paddingTop = true;
        }
    } else if (this.$$theme_paddingTop !== undefined) {} else if (this.$$useinit_paddingTop) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_paddingTop;
    var self = this;
    var promise;
    promise = this._applyPadding(computed, old, "paddingTop", "reset");

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

function initPaddingTop anonymous(value) {
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
    var computed;
    if (this.$$runtime_paddingTop !== undefined) {
        computed = this.$$runtime_paddingTop;
    } else if (this.$$user_paddingTop !== undefined) {
        computed = this.$$user_paddingTop;
    } else if (this.$$theme_paddingTop !== undefined) {
        computed = this.$$theme_paddingTop;
    } else if (this.$$useinit_paddingTop) {
        computed = this.$$init_paddingTop;
    } else {
        computed = this.$$init_paddingTop;
        this.$$useinit_paddingTop = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyPadding(computed, old, "paddingTop", "init");

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

function setRuntimePaddingTop anonymous(value) {
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
        if (equ.call(this, this.$$runtime_paddingTop, value)) return value;
        var computed;
        if (this.$$runtime_paddingTop !== undefined) {
            computed = this.$$runtime_paddingTop = value;
        } else if (this.$$user_paddingTop !== undefined) {
            computed = this.$$runtime_paddingTop = value;
        } else if (this.$$theme_paddingTop !== undefined) {
            computed = this.$$runtime_paddingTop = value;
        } else if (this.$$useinit_paddingTop) {
            delete this.$$useinit_paddingTop;
            computed = this.$$runtime_paddingTop = value;
        } else {
            computed = this.$$runtime_paddingTop = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_paddingTop;
        var self = this;
        var promise;
        promise = this._applyPadding(computed, old, "paddingTop", "setRuntime");

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

function resetRuntimePaddingTop anonymous(value) {
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
    if (this.$$runtime_paddingTop === undefined) return;
    var computed;
    if (this.$$runtime_paddingTop !== undefined) {
        delete this.$$runtime_paddingTop;
        if (this.$$user_paddingTop !== undefined) computed = this.$$user_paddingTop;
        else if (this.$$theme_paddingTop !== undefined) computed = this.$$theme_paddingTop;
        else if (this.$$init_paddingTop !== undefined) {
            computed = this.$$init_paddingTop;
            this.$$useinit_paddingTop = true;
        }
    } else if (this.$$user_paddingTop !== undefined) {
        computed = this.$$user_paddingTop;
    } else if (this.$$theme_paddingTop !== undefined) {} else if (this.$$useinit_paddingTop) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_paddingTop;
    var self = this;
    var promise;
    promise = this._applyPadding(computed, old, "paddingTop", "resetRuntime");

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

function resetThemedPaddingTop anonymous(value) {
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
    if (this.$$theme_paddingTop === undefined) return;
    var computed;
    if (this.$$runtime_paddingTop !== undefined) {
        computed = this.$$runtime_paddingTop;
        delete this.$$theme_paddingTop;
    } else if (this.$$user_paddingTop !== undefined) {
        computed = this.$$user_paddingTop;
        delete this.$$theme_paddingTop;
    } else if (this.$$theme_paddingTop !== undefined) {
        delete this.$$theme_paddingTop;
        if (this.$$init_paddingTop !== undefined) {
            computed = this.$$init_paddingTop;
            this.$$useinit_paddingTop = true;
        }
    } else if (this.$$useinit_paddingTop) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_paddingTop;
    var self = this;
    var promise;
    promise = this._applyPadding(computed, old, "paddingTop", "resetThemed");

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

function getPaddingRight anonymous(value) {
    if (this.$$runtime_paddingRight !== undefined) return this.$$runtime_paddingRight;
    if (this.$$user_paddingRight !== undefined) return this.$$user_paddingRight;
    else if (this.$$theme_paddingRight !== undefined) return this.$$theme_paddingRight;
    else return this.$$init_paddingRight;
}

function setPaddingRight anonymous(value) {
    this.$$setPaddingRightImpl.apply(this, arguments);
    return value;
}

function resetPaddingRight anonymous(value) {
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
    if (this.$$user_paddingRight === undefined) return;
    var computed;
    if (this.$$runtime_paddingRight !== undefined) {
        computed = this.$$runtime_paddingRight;
        delete this.$$user_paddingRight;
    } else if (this.$$user_paddingRight !== undefined) {
        delete this.$$user_paddingRight;
        if (this.$$runtime_paddingRight !== undefined) computed = this.$$runtime_paddingRight;
        if (this.$$theme_paddingRight !== undefined) computed = this.$$theme_paddingRight;
        else if (this.$$init_paddingRight !== undefined) {
            computed = this.$$init_paddingRight;
            this.$$useinit_paddingRight = true;
        }
    } else if (this.$$theme_paddingRight !== undefined) {} else if (this.$$useinit_paddingRight) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_paddingRight;
    var self = this;
    var promise;
    promise = this._applyPadding(computed, old, "paddingRight", "reset");

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

function initPaddingRight anonymous(value) {
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
    var computed;
    if (this.$$runtime_paddingRight !== undefined) {
        computed = this.$$runtime_paddingRight;
    } else if (this.$$user_paddingRight !== undefined) {
        computed = this.$$user_paddingRight;
    } else if (this.$$theme_paddingRight !== undefined) {
        computed = this.$$theme_paddingRight;
    } else if (this.$$useinit_paddingRight) {
        computed = this.$$init_paddingRight;
    } else {
        computed = this.$$init_paddingRight;
        this.$$useinit_paddingRight = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyPadding(computed, old, "paddingRight", "init");

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

function setRuntimePaddingRight anonymous(value) {
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
        if (equ.call(this, this.$$runtime_paddingRight, value)) return value;
        var computed;
        if (this.$$runtime_paddingRight !== undefined) {
            computed = this.$$runtime_paddingRight = value;
        } else if (this.$$user_paddingRight !== undefined) {
            computed = this.$$runtime_paddingRight = value;
        } else if (this.$$theme_paddingRight !== undefined) {
            computed = this.$$runtime_paddingRight = value;
        } else if (this.$$useinit_paddingRight) {
            delete this.$$useinit_paddingRight;
            computed = this.$$runtime_paddingRight = value;
        } else {
            computed = this.$$runtime_paddingRight = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_paddingRight;
        var self = this;
        var promise;
        promise = this._applyPadding(computed, old, "paddingRight", "setRuntime");

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

function resetRuntimePaddingRight anonymous(value) {
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
    if (this.$$runtime_paddingRight === undefined) return;
    var computed;
    if (this.$$runtime_paddingRight !== undefined) {
        delete this.$$runtime_paddingRight;
        if (this.$$user_paddingRight !== undefined) computed = this.$$user_paddingRight;
        else if (this.$$theme_paddingRight !== undefined) computed = this.$$theme_paddingRight;
        else if (this.$$init_paddingRight !== undefined) {
            computed = this.$$init_paddingRight;
            this.$$useinit_paddingRight = true;
        }
    } else if (this.$$user_paddingRight !== undefined) {
        computed = this.$$user_paddingRight;
    } else if (this.$$theme_paddingRight !== undefined) {} else if (this.$$useinit_paddingRight) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_paddingRight;
    var self = this;
    var promise;
    promise = this._applyPadding(computed, old, "paddingRight", "resetRuntime");

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

function resetThemedPaddingRight anonymous(value) {
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
    if (this.$$theme_paddingRight === undefined) return;
    var computed;
    if (this.$$runtime_paddingRight !== undefined) {
        computed = this.$$runtime_paddingRight;
        delete this.$$theme_paddingRight;
    } else if (this.$$user_paddingRight !== undefined) {
        computed = this.$$user_paddingRight;
        delete this.$$theme_paddingRight;
    } else if (this.$$theme_paddingRight !== undefined) {
        delete this.$$theme_paddingRight;
        if (this.$$init_paddingRight !== undefined) {
            computed = this.$$init_paddingRight;
            this.$$useinit_paddingRight = true;
        }
    } else if (this.$$useinit_paddingRight) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_paddingRight;
    var self = this;
    var promise;
    promise = this._applyPadding(computed, old, "paddingRight", "resetThemed");

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

function getPaddingBottom anonymous(value) {
    if (this.$$runtime_paddingBottom !== undefined) return this.$$runtime_paddingBottom;
    if (this.$$user_paddingBottom !== undefined) return this.$$user_paddingBottom;
    else if (this.$$theme_paddingBottom !== undefined) return this.$$theme_paddingBottom;
    else return this.$$init_paddingBottom;
}

function setPaddingBottom anonymous(value) {
    this.$$setPaddingBottomImpl.apply(this, arguments);
    return value;
}

function resetPaddingBottom anonymous(value) {
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
    if (this.$$user_paddingBottom === undefined) return;
    var computed;
    if (this.$$runtime_paddingBottom !== undefined) {
        computed = this.$$runtime_paddingBottom;
        delete this.$$user_paddingBottom;
    } else if (this.$$user_paddingBottom !== undefined) {
        delete this.$$user_paddingBottom;
        if (this.$$runtime_paddingBottom !== undefined) computed = this.$$runtime_paddingBottom;
        if (this.$$theme_paddingBottom !== undefined) computed = this.$$theme_paddingBottom;
        else if (this.$$init_paddingBottom !== undefined) {
            computed = this.$$init_paddingBottom;
            this.$$useinit_paddingBottom = true;
        }
    } else if (this.$$theme_paddingBottom !== undefined) {} else if (this.$$useinit_paddingBottom) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_paddingBottom;
    var self = this;
    var promise;
    promise = this._applyPadding(computed, old, "paddingBottom", "reset");

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

function initPaddingBottom anonymous(value) {
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
    var computed;
    if (this.$$runtime_paddingBottom !== undefined) {
        computed = this.$$runtime_paddingBottom;
    } else if (this.$$user_paddingBottom !== undefined) {
        computed = this.$$user_paddingBottom;
    } else if (this.$$theme_paddingBottom !== undefined) {
        computed = this.$$theme_paddingBottom;
    } else if (this.$$useinit_paddingBottom) {
        computed = this.$$init_paddingBottom;
    } else {
        computed = this.$$init_paddingBottom;
        this.$$useinit_paddingBottom = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyPadding(computed, old, "paddingBottom", "init");

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

function setRuntimePaddingBottom anonymous(value) {
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
        if (equ.call(this, this.$$runtime_paddingBottom, value)) return value;
        var computed;
        if (this.$$runtime_paddingBottom !== undefined) {
            computed = this.$$runtime_paddingBottom = value;
        } else if (this.$$user_paddingBottom !== undefined) {
            computed = this.$$runtime_paddingBottom = value;
        } else if (this.$$theme_paddingBottom !== undefined) {
            computed = this.$$runtime_paddingBottom = value;
        } else if (this.$$useinit_paddingBottom) {
            delete this.$$useinit_paddingBottom;
            computed = this.$$runtime_paddingBottom = value;
        } else {
            computed = this.$$runtime_paddingBottom = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_paddingBottom;
        var self = this;
        var promise;
        promise = this._applyPadding(computed, old, "paddingBottom", "setRuntime");

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

function resetRuntimePaddingBottom anonymous(value) {
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
    if (this.$$runtime_paddingBottom === undefined) return;
    var computed;
    if (this.$$runtime_paddingBottom !== undefined) {
        delete this.$$runtime_paddingBottom;
        if (this.$$user_paddingBottom !== undefined) computed = this.$$user_paddingBottom;
        else if (this.$$theme_paddingBottom !== undefined) computed = this.$$theme_paddingBottom;
        else if (this.$$init_paddingBottom !== undefined) {
            computed = this.$$init_paddingBottom;
            this.$$useinit_paddingBottom = true;
        }
    } else if (this.$$user_paddingBottom !== undefined) {
        computed = this.$$user_paddingBottom;
    } else if (this.$$theme_paddingBottom !== undefined) {} else if (this.$$useinit_paddingBottom) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_paddingBottom;
    var self = this;
    var promise;
    promise = this._applyPadding(computed, old, "paddingBottom", "resetRuntime");

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

function resetThemedPaddingBottom anonymous(value) {
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
    if (this.$$theme_paddingBottom === undefined) return;
    var computed;
    if (this.$$runtime_paddingBottom !== undefined) {
        computed = this.$$runtime_paddingBottom;
        delete this.$$theme_paddingBottom;
    } else if (this.$$user_paddingBottom !== undefined) {
        computed = this.$$user_paddingBottom;
        delete this.$$theme_paddingBottom;
    } else if (this.$$theme_paddingBottom !== undefined) {
        delete this.$$theme_paddingBottom;
        if (this.$$init_paddingBottom !== undefined) {
            computed = this.$$init_paddingBottom;
            this.$$useinit_paddingBottom = true;
        }
    } else if (this.$$useinit_paddingBottom) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_paddingBottom;
    var self = this;
    var promise;
    promise = this._applyPadding(computed, old, "paddingBottom", "resetThemed");

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

function getPaddingLeft anonymous(value) {
    if (this.$$runtime_paddingLeft !== undefined) return this.$$runtime_paddingLeft;
    if (this.$$user_paddingLeft !== undefined) return this.$$user_paddingLeft;
    else if (this.$$theme_paddingLeft !== undefined) return this.$$theme_paddingLeft;
    else return this.$$init_paddingLeft;
}

function setPaddingLeft anonymous(value) {
    this.$$setPaddingLeftImpl.apply(this, arguments);
    return value;
}

function resetPaddingLeft anonymous(value) {
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
    if (this.$$user_paddingLeft === undefined) return;
    var computed;
    if (this.$$runtime_paddingLeft !== undefined) {
        computed = this.$$runtime_paddingLeft;
        delete this.$$user_paddingLeft;
    } else if (this.$$user_paddingLeft !== undefined) {
        delete this.$$user_paddingLeft;
        if (this.$$runtime_paddingLeft !== undefined) computed = this.$$runtime_paddingLeft;
        if (this.$$theme_paddingLeft !== undefined) computed = this.$$theme_paddingLeft;
        else if (this.$$init_paddingLeft !== undefined) {
            computed = this.$$init_paddingLeft;
            this.$$useinit_paddingLeft = true;
        }
    } else if (this.$$theme_paddingLeft !== undefined) {} else if (this.$$useinit_paddingLeft) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_paddingLeft;
    var self = this;
    var promise;
    promise = this._applyPadding(computed, old, "paddingLeft", "reset");

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

function initPaddingLeft anonymous(value) {
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
    var computed;
    if (this.$$runtime_paddingLeft !== undefined) {
        computed = this.$$runtime_paddingLeft;
    } else if (this.$$user_paddingLeft !== undefined) {
        computed = this.$$user_paddingLeft;
    } else if (this.$$theme_paddingLeft !== undefined) {
        computed = this.$$theme_paddingLeft;
    } else if (this.$$useinit_paddingLeft) {
        computed = this.$$init_paddingLeft;
    } else {
        computed = this.$$init_paddingLeft;
        this.$$useinit_paddingLeft = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyPadding(computed, old, "paddingLeft", "init");

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

function setRuntimePaddingLeft anonymous(value) {
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
        if (equ.call(this, this.$$runtime_paddingLeft, value)) return value;
        var computed;
        if (this.$$runtime_paddingLeft !== undefined) {
            computed = this.$$runtime_paddingLeft = value;
        } else if (this.$$user_paddingLeft !== undefined) {
            computed = this.$$runtime_paddingLeft = value;
        } else if (this.$$theme_paddingLeft !== undefined) {
            computed = this.$$runtime_paddingLeft = value;
        } else if (this.$$useinit_paddingLeft) {
            delete this.$$useinit_paddingLeft;
            computed = this.$$runtime_paddingLeft = value;
        } else {
            computed = this.$$runtime_paddingLeft = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_paddingLeft;
        var self = this;
        var promise;
        promise = this._applyPadding(computed, old, "paddingLeft", "setRuntime");

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

function resetRuntimePaddingLeft anonymous(value) {
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
    if (this.$$runtime_paddingLeft === undefined) return;
    var computed;
    if (this.$$runtime_paddingLeft !== undefined) {
        delete this.$$runtime_paddingLeft;
        if (this.$$user_paddingLeft !== undefined) computed = this.$$user_paddingLeft;
        else if (this.$$theme_paddingLeft !== undefined) computed = this.$$theme_paddingLeft;
        else if (this.$$init_paddingLeft !== undefined) {
            computed = this.$$init_paddingLeft;
            this.$$useinit_paddingLeft = true;
        }
    } else if (this.$$user_paddingLeft !== undefined) {
        computed = this.$$user_paddingLeft;
    } else if (this.$$theme_paddingLeft !== undefined) {} else if (this.$$useinit_paddingLeft) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_paddingLeft;
    var self = this;
    var promise;
    promise = this._applyPadding(computed, old, "paddingLeft", "resetRuntime");

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

function resetThemedPaddingLeft anonymous(value) {
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
    if (this.$$theme_paddingLeft === undefined) return;
    var computed;
    if (this.$$runtime_paddingLeft !== undefined) {
        computed = this.$$runtime_paddingLeft;
        delete this.$$theme_paddingLeft;
    } else if (this.$$user_paddingLeft !== undefined) {
        computed = this.$$user_paddingLeft;
        delete this.$$theme_paddingLeft;
    } else if (this.$$theme_paddingLeft !== undefined) {
        delete this.$$theme_paddingLeft;
        if (this.$$init_paddingLeft !== undefined) {
            computed = this.$$init_paddingLeft;
            this.$$useinit_paddingLeft = true;
        }
    } else if (this.$$useinit_paddingLeft) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_paddingLeft;
    var self = this;
    var promise;
    promise = this._applyPadding(computed, old, "paddingLeft", "resetThemed");

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

function setPadding anonymous() {
    var a = arguments[0] instanceof Array ? arguments[0] : arguments;
    a = qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));
    this.setPaddingTop(a[0]);
    this.setPaddingRight(a[1]);
    this.setPaddingBottom(a[2]);
    this.setPaddingLeft(a[3]);
}

function resetPadding anonymous() {
    this.resetPaddingTop();
    this.resetPaddingRight();
    this.resetPaddingBottom();
    this.resetPaddingLeft();
}

function setThemedPadding anonymous() {
    var a = arguments[0] instanceof Array ? arguments[0] : arguments;
    a = qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));
    this.setThemedPaddingTop(a[0]);
    this.setThemedPaddingRight(a[1]);
    this.setThemedPaddingBottom(a[2]);
    this.setThemedPaddingLeft(a[3]);
}

function resetThemedPadding anonymous() {
    this.resetThemedPaddingTop();
    this.resetThemedPaddingRight();
    this.resetThemedPaddingBottom();
    this.resetThemedPaddingLeft();
}

function getZIndex anonymous(value) {
    if (this.$$runtime_zIndex !== undefined) return this.$$runtime_zIndex;
    if (this.$$user_zIndex !== undefined) return this.$$user_zIndex;
    else if (this.$$theme_zIndex !== undefined) return this.$$theme_zIndex;
    else return this.$$init_zIndex;
}

function setZIndex anonymous(value) {
    this.$$setZIndexImpl.apply(this, arguments);
    return value;
}

function resetZIndex anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_zIndex !== undefined) {
        old = this.$$runtime_zIndex;
    } else if (this.$$user_zIndex !== undefined) {
        old = this.$$user_zIndex;
    } else if (this.$$theme_zIndex !== undefined) {
        old = this.$$theme_zIndex;
    } else if (this.$$useinit_zIndex) {
        old = this.$$init_zIndex;
    }
    if (this.$$user_zIndex === undefined) return;
    var computed;
    if (this.$$runtime_zIndex !== undefined) {
        computed = this.$$runtime_zIndex;
        delete this.$$user_zIndex;
    } else if (this.$$user_zIndex !== undefined) {
        delete this.$$user_zIndex;
        if (this.$$runtime_zIndex !== undefined) computed = this.$$runtime_zIndex;
        if (this.$$theme_zIndex !== undefined) computed = this.$$theme_zIndex;
        else if (this.$$init_zIndex !== undefined) {
            computed = this.$$init_zIndex;
            this.$$useinit_zIndex = true;
        }
    } else if (this.$$theme_zIndex !== undefined) {} else if (this.$$useinit_zIndex) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_zIndex;
    var self = this;
    var promise;
    promise = this._applyZIndex(computed, old, "zIndex", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeZIndex')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeZIndex', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeZIndexAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeZIndexAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initZIndex anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_zIndex !== undefined) {
        old = this.$$runtime_zIndex;
    } else if (this.$$user_zIndex !== undefined) {
        old = this.$$user_zIndex;
    } else if (this.$$theme_zIndex !== undefined) {
        old = this.$$theme_zIndex;
    } else if (this.$$useinit_zIndex) {
        old = this.$$init_zIndex;
    }
    var computed;
    if (this.$$runtime_zIndex !== undefined) {
        computed = this.$$runtime_zIndex;
    } else if (this.$$user_zIndex !== undefined) {
        computed = this.$$user_zIndex;
    } else if (this.$$theme_zIndex !== undefined) {
        computed = this.$$theme_zIndex;
    } else if (this.$$useinit_zIndex) {
        computed = this.$$init_zIndex;
    } else {
        computed = this.$$init_zIndex;
        this.$$useinit_zIndex = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyZIndex(computed, old, "zIndex", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeZIndex')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeZIndex', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeZIndexAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeZIndexAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeZIndex anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_zIndex !== undefined) {
            old = this.$$runtime_zIndex;
        } else if (this.$$user_zIndex !== undefined) {
            old = this.$$user_zIndex;
        } else if (this.$$theme_zIndex !== undefined) {
            old = this.$$theme_zIndex;
        } else if (this.$$useinit_zIndex) {
            old = this.$$init_zIndex;
        }
        if (equ.call(this, this.$$runtime_zIndex, value)) return value;
        var computed;
        if (this.$$runtime_zIndex !== undefined) {
            computed = this.$$runtime_zIndex = value;
        } else if (this.$$user_zIndex !== undefined) {
            computed = this.$$runtime_zIndex = value;
        } else if (this.$$theme_zIndex !== undefined) {
            computed = this.$$runtime_zIndex = value;
        } else if (this.$$useinit_zIndex) {
            delete this.$$useinit_zIndex;
            computed = this.$$runtime_zIndex = value;
        } else {
            computed = this.$$runtime_zIndex = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_zIndex;
        var self = this;
        var promise;
        promise = this._applyZIndex(computed, old, "zIndex", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeZIndex')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeZIndex', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeZIndexAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeZIndexAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeZIndex anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_zIndex !== undefined) {
        old = this.$$runtime_zIndex;
    } else if (this.$$user_zIndex !== undefined) {
        old = this.$$user_zIndex;
    } else if (this.$$theme_zIndex !== undefined) {
        old = this.$$theme_zIndex;
    } else if (this.$$useinit_zIndex) {
        old = this.$$init_zIndex;
    }
    if (this.$$runtime_zIndex === undefined) return;
    var computed;
    if (this.$$runtime_zIndex !== undefined) {
        delete this.$$runtime_zIndex;
        if (this.$$user_zIndex !== undefined) computed = this.$$user_zIndex;
        else if (this.$$theme_zIndex !== undefined) computed = this.$$theme_zIndex;
        else if (this.$$init_zIndex !== undefined) {
            computed = this.$$init_zIndex;
            this.$$useinit_zIndex = true;
        }
    } else if (this.$$user_zIndex !== undefined) {
        computed = this.$$user_zIndex;
    } else if (this.$$theme_zIndex !== undefined) {} else if (this.$$useinit_zIndex) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_zIndex;
    var self = this;
    var promise;
    promise = this._applyZIndex(computed, old, "zIndex", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeZIndex')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeZIndex', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeZIndexAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeZIndexAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setThemedZIndex anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_zIndex !== undefined) {
            old = this.$$runtime_zIndex;
        } else if (this.$$user_zIndex !== undefined) {
            old = this.$$user_zIndex;
        } else if (this.$$theme_zIndex !== undefined) {
            old = this.$$theme_zIndex;
        } else if (this.$$useinit_zIndex) {
            old = this.$$init_zIndex;
        }
        if (equ.call(this, this.$$theme_zIndex, value)) return value;
        var computed;
        if (this.$$runtime_zIndex !== undefined) {
            computed = this.$$runtime_zIndex;
            this.$$theme_zIndex = value;
        } else if (this.$$user_zIndex !== undefined) {
            computed = this.$$user_zIndex;
            this.$$theme_zIndex = value;
        } else if (this.$$theme_zIndex !== undefined) {
            computed = this.$$theme_zIndex = value;
        } else if (this.$$useinit_zIndex) {
            delete this.$$useinit_zIndex;
            computed = this.$$theme_zIndex = value;
        } else {
            computed = this.$$theme_zIndex = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_zIndex;
        var self = this;
        var promise;
        promise = this._applyZIndex(computed, old, "zIndex", "setThemed");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeZIndex')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeZIndex', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeZIndexAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeZIndexAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetThemedZIndex anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_zIndex !== undefined) {
        old = this.$$runtime_zIndex;
    } else if (this.$$user_zIndex !== undefined) {
        old = this.$$user_zIndex;
    } else if (this.$$theme_zIndex !== undefined) {
        old = this.$$theme_zIndex;
    } else if (this.$$useinit_zIndex) {
        old = this.$$init_zIndex;
    }
    if (this.$$theme_zIndex === undefined) return;
    var computed;
    if (this.$$runtime_zIndex !== undefined) {
        computed = this.$$runtime_zIndex;
        delete this.$$theme_zIndex;
    } else if (this.$$user_zIndex !== undefined) {
        computed = this.$$user_zIndex;
        delete this.$$theme_zIndex;
    } else if (this.$$theme_zIndex !== undefined) {
        delete this.$$theme_zIndex;
        if (this.$$init_zIndex !== undefined) {
            computed = this.$$init_zIndex;
            this.$$useinit_zIndex = true;
        }
    } else if (this.$$useinit_zIndex) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_zIndex;
    var self = this;
    var promise;
    promise = this._applyZIndex(computed, old, "zIndex", "resetThemed");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeZIndex')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeZIndex', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeZIndexAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeZIndexAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function getDecorator anonymous(value) {
    if (this.$$runtime_decorator !== undefined) return this.$$runtime_decorator;
    if (this.$$user_decorator !== undefined) return this.$$user_decorator;
    else if (this.$$theme_decorator !== undefined) return this.$$theme_decorator;
    else return this.$$init_decorator;
}

function setDecorator anonymous(value) {
    this.$$setDecoratorImpl.apply(this, arguments);
    return value;
}

function resetDecorator anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_decorator !== undefined) {
        old = this.$$runtime_decorator;
    } else if (this.$$user_decorator !== undefined) {
        old = this.$$user_decorator;
    } else if (this.$$theme_decorator !== undefined) {
        old = this.$$theme_decorator;
    } else if (this.$$useinit_decorator) {
        old = this.$$init_decorator;
    }
    if (this.$$user_decorator === undefined) return;
    var computed;
    if (this.$$runtime_decorator !== undefined) {
        computed = this.$$runtime_decorator;
        delete this.$$user_decorator;
    } else if (this.$$user_decorator !== undefined) {
        delete this.$$user_decorator;
        if (this.$$runtime_decorator !== undefined) computed = this.$$runtime_decorator;
        if (this.$$theme_decorator !== undefined) computed = this.$$theme_decorator;
        else if (this.$$init_decorator !== undefined) {
            computed = this.$$init_decorator;
            this.$$useinit_decorator = true;
        }
    } else if (this.$$theme_decorator !== undefined) {} else if (this.$$useinit_decorator) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_decorator;
    var self = this;
    var promise;
    promise = this._applyDecorator(computed, old, "decorator", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeDecorator')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeDecorator', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeDecoratorAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeDecoratorAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initDecorator anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_decorator !== undefined) {
        old = this.$$runtime_decorator;
    } else if (this.$$user_decorator !== undefined) {
        old = this.$$user_decorator;
    } else if (this.$$theme_decorator !== undefined) {
        old = this.$$theme_decorator;
    } else if (this.$$useinit_decorator) {
        old = this.$$init_decorator;
    }
    var computed;
    if (this.$$runtime_decorator !== undefined) {
        computed = this.$$runtime_decorator;
    } else if (this.$$user_decorator !== undefined) {
        computed = this.$$user_decorator;
    } else if (this.$$theme_decorator !== undefined) {
        computed = this.$$theme_decorator;
    } else if (this.$$useinit_decorator) {
        computed = this.$$init_decorator;
    } else {
        computed = this.$$init_decorator;
        this.$$useinit_decorator = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyDecorator(computed, old, "decorator", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeDecorator')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeDecorator', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeDecoratorAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeDecoratorAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeDecorator anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_decorator !== undefined) {
            old = this.$$runtime_decorator;
        } else if (this.$$user_decorator !== undefined) {
            old = this.$$user_decorator;
        } else if (this.$$theme_decorator !== undefined) {
            old = this.$$theme_decorator;
        } else if (this.$$useinit_decorator) {
            old = this.$$init_decorator;
        }
        if (equ.call(this, this.$$runtime_decorator, value)) return value;
        var computed;
        if (this.$$runtime_decorator !== undefined) {
            computed = this.$$runtime_decorator = value;
        } else if (this.$$user_decorator !== undefined) {
            computed = this.$$runtime_decorator = value;
        } else if (this.$$theme_decorator !== undefined) {
            computed = this.$$runtime_decorator = value;
        } else if (this.$$useinit_decorator) {
            delete this.$$useinit_decorator;
            computed = this.$$runtime_decorator = value;
        } else {
            computed = this.$$runtime_decorator = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_decorator;
        var self = this;
        var promise;
        promise = this._applyDecorator(computed, old, "decorator", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeDecorator')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeDecorator', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeDecoratorAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeDecoratorAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeDecorator anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_decorator !== undefined) {
        old = this.$$runtime_decorator;
    } else if (this.$$user_decorator !== undefined) {
        old = this.$$user_decorator;
    } else if (this.$$theme_decorator !== undefined) {
        old = this.$$theme_decorator;
    } else if (this.$$useinit_decorator) {
        old = this.$$init_decorator;
    }
    if (this.$$runtime_decorator === undefined) return;
    var computed;
    if (this.$$runtime_decorator !== undefined) {
        delete this.$$runtime_decorator;
        if (this.$$user_decorator !== undefined) computed = this.$$user_decorator;
        else if (this.$$theme_decorator !== undefined) computed = this.$$theme_decorator;
        else if (this.$$init_decorator !== undefined) {
            computed = this.$$init_decorator;
            this.$$useinit_decorator = true;
        }
    } else if (this.$$user_decorator !== undefined) {
        computed = this.$$user_decorator;
    } else if (this.$$theme_decorator !== undefined) {} else if (this.$$useinit_decorator) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_decorator;
    var self = this;
    var promise;
    promise = this._applyDecorator(computed, old, "decorator", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeDecorator')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeDecorator', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeDecoratorAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeDecoratorAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setThemedDecorator anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_decorator !== undefined) {
            old = this.$$runtime_decorator;
        } else if (this.$$user_decorator !== undefined) {
            old = this.$$user_decorator;
        } else if (this.$$theme_decorator !== undefined) {
            old = this.$$theme_decorator;
        } else if (this.$$useinit_decorator) {
            old = this.$$init_decorator;
        }
        if (equ.call(this, this.$$theme_decorator, value)) return value;
        var computed;
        if (this.$$runtime_decorator !== undefined) {
            computed = this.$$runtime_decorator;
            this.$$theme_decorator = value;
        } else if (this.$$user_decorator !== undefined) {
            computed = this.$$user_decorator;
            this.$$theme_decorator = value;
        } else if (this.$$theme_decorator !== undefined) {
            computed = this.$$theme_decorator = value;
        } else if (this.$$useinit_decorator) {
            delete this.$$useinit_decorator;
            computed = this.$$theme_decorator = value;
        } else {
            computed = this.$$theme_decorator = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_decorator;
        var self = this;
        var promise;
        promise = this._applyDecorator(computed, old, "decorator", "setThemed");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeDecorator')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeDecorator', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeDecoratorAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeDecoratorAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetThemedDecorator anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_decorator !== undefined) {
        old = this.$$runtime_decorator;
    } else if (this.$$user_decorator !== undefined) {
        old = this.$$user_decorator;
    } else if (this.$$theme_decorator !== undefined) {
        old = this.$$theme_decorator;
    } else if (this.$$useinit_decorator) {
        old = this.$$init_decorator;
    }
    if (this.$$theme_decorator === undefined) return;
    var computed;
    if (this.$$runtime_decorator !== undefined) {
        computed = this.$$runtime_decorator;
        delete this.$$theme_decorator;
    } else if (this.$$user_decorator !== undefined) {
        computed = this.$$user_decorator;
        delete this.$$theme_decorator;
    } else if (this.$$theme_decorator !== undefined) {
        delete this.$$theme_decorator;
        if (this.$$init_decorator !== undefined) {
            computed = this.$$init_decorator;
            this.$$useinit_decorator = true;
        }
    } else if (this.$$useinit_decorator) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_decorator;
    var self = this;
    var promise;
    promise = this._applyDecorator(computed, old, "decorator", "resetThemed");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeDecorator')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeDecorator', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeDecoratorAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeDecoratorAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function getBackgroundColor anonymous(value) {
    if (this.$$runtime_backgroundColor !== undefined) return this.$$runtime_backgroundColor;
    if (this.$$user_backgroundColor !== undefined) return this.$$user_backgroundColor;
    else if (this.$$theme_backgroundColor !== undefined) return this.$$theme_backgroundColor;
    else return null;
}

function setBackgroundColor anonymous(value) {
    this.$$setBackgroundColorImpl.apply(this, arguments);
    return value;
}

function resetBackgroundColor anonymous(value) {
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
    if (this.$$user_backgroundColor === undefined) return;
    var computed;
    if (this.$$runtime_backgroundColor !== undefined) {
        computed = this.$$runtime_backgroundColor;
        delete this.$$user_backgroundColor;
    } else if (this.$$user_backgroundColor !== undefined) {
        delete this.$$user_backgroundColor;
        if (this.$$runtime_backgroundColor !== undefined) computed = this.$$runtime_backgroundColor;
        if (this.$$theme_backgroundColor !== undefined) computed = this.$$theme_backgroundColor;
        else if (this.$$init_backgroundColor !== undefined) {
            computed = this.$$init_backgroundColor;
            this.$$useinit_backgroundColor = true;
        }
    } else if (this.$$theme_backgroundColor !== undefined) {} else if (this.$$useinit_backgroundColor) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyBackgroundColor(computed, old, "backgroundColor", "reset");

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

function initBackgroundColor anonymous(value) {
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
        if (equ.call(this, this.$$init_backgroundColor, value)) return value;
        var computed;
        if (this.$$runtime_backgroundColor !== undefined) {
            computed = this.$$runtime_backgroundColor;
            this.$$init_backgroundColor = value;
        } else if (this.$$user_backgroundColor !== undefined) {
            computed = this.$$user_backgroundColor;
            this.$$init_backgroundColor = value;
        } else if (this.$$theme_backgroundColor !== undefined) {
            this.$$init_backgroundColor = value;
            computed = this.$$theme_backgroundColor;
        } else if (this.$$useinit_backgroundColor) {
            computed = this.$$init_backgroundColor = value;
        } else {
            computed = this.$$init_backgroundColor = value;
            this.$$useinit_backgroundColor = true;
        }
        if (computed === undefined) computed = null;
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyBackgroundColor(computed, old, "backgroundColor", "init");

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

function setRuntimeBackgroundColor anonymous(value) {
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
        if (equ.call(this, this.$$runtime_backgroundColor, value)) return value;
        var computed;
        if (this.$$runtime_backgroundColor !== undefined) {
            computed = this.$$runtime_backgroundColor = value;
        } else if (this.$$user_backgroundColor !== undefined) {
            computed = this.$$runtime_backgroundColor = value;
        } else if (this.$$theme_backgroundColor !== undefined) {
            computed = this.$$runtime_backgroundColor = value;
        } else if (this.$$useinit_backgroundColor) {
            delete this.$$useinit_backgroundColor;
            computed = this.$$runtime_backgroundColor = value;
        } else {
            computed = this.$$runtime_backgroundColor = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyBackgroundColor(computed, old, "backgroundColor", "setRuntime");

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

function resetRuntimeBackgroundColor anonymous(value) {
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
    if (this.$$runtime_backgroundColor === undefined) return;
    var computed;
    if (this.$$runtime_backgroundColor !== undefined) {
        delete this.$$runtime_backgroundColor;
        if (this.$$user_backgroundColor !== undefined) computed = this.$$user_backgroundColor;
        else if (this.$$theme_backgroundColor !== undefined) computed = this.$$theme_backgroundColor;
        else if (this.$$init_backgroundColor !== undefined) {
            computed = this.$$init_backgroundColor;
            this.$$useinit_backgroundColor = true;
        }
    } else if (this.$$user_backgroundColor !== undefined) {
        computed = this.$$user_backgroundColor;
    } else if (this.$$theme_backgroundColor !== undefined) {} else if (this.$$useinit_backgroundColor) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyBackgroundColor(computed, old, "backgroundColor", "resetRuntime");

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

function resetThemedBackgroundColor anonymous(value) {
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
    if (this.$$theme_backgroundColor === undefined) return;
    var computed;
    if (this.$$runtime_backgroundColor !== undefined) {
        computed = this.$$runtime_backgroundColor;
        delete this.$$theme_backgroundColor;
    } else if (this.$$user_backgroundColor !== undefined) {
        computed = this.$$user_backgroundColor;
        delete this.$$theme_backgroundColor;
    } else if (this.$$theme_backgroundColor !== undefined) {
        delete this.$$theme_backgroundColor;
        if (this.$$init_backgroundColor !== undefined) {
            computed = this.$$init_backgroundColor;
            this.$$useinit_backgroundColor = true;
        }
    } else if (this.$$useinit_backgroundColor) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyBackgroundColor(computed, old, "backgroundColor", "resetThemed");

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

function getTextColor anonymous(value) {
    if (this.$$runtime_textColor !== undefined) return this.$$runtime_textColor;
    else if (this.$$inherit_textColor !== undefined) return this.$$inherit_textColor;
    else if (this.$$user_textColor !== undefined) return this.$$user_textColor;
    else if (this.$$theme_textColor !== undefined) return this.$$theme_textColor;
    else return null;
}

function setTextColor anonymous(value) {
    this.$$setTextColorImpl.apply(this, arguments);
    return value;
}

function resetTextColor anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_textColor;
    if (this.$$runtime_textColor !== undefined) {
        old = this.$$runtime_textColor;
    }
    if (this.$$user_textColor === undefined) return;
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_textColor !== undefined) {
        computed = this.$$runtime_textColor;
        delete this.$$user_textColor;
    } else if (this.$$user_textColor !== undefined) {
        delete this.$$user_textColor;
        if (this.$$runtime_textColor !== undefined) computed = this.$$runtime_textColor;
        if (this.$$theme_textColor !== undefined) computed = this.$$theme_textColor;
        else if (this.$$init_textColor !== undefined) {
            computed = this.$$init_textColor;
            this.$$useinit_textColor = true;
        }
    } else if (this.$$theme_textColor !== undefined) {} else if (this.$$useinit_textColor) {}
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
    promise = this._applyTextColor(computed, old, "textColor", "reset");

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

function initTextColor anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old = this.$$inherit_textColor;
        if (this.$$runtime_textColor !== undefined) {
            old = this.$$runtime_textColor;
        }
        if (equ.call(this, this.$$init_textColor, value)) return value;
        var inherit = prop.$$inherit;
        var computed;
        if (this.$$runtime_textColor !== undefined) {
            computed = this.$$runtime_textColor;
            this.$$init_textColor = value;
        } else if (this.$$user_textColor !== undefined) {
            computed = this.$$user_textColor;
            this.$$init_textColor = value;
        } else if (this.$$theme_textColor !== undefined) {
            this.$$init_textColor = value;
            computed = this.$$theme_textColor;
        } else if (this.$$useinit_textColor) {
            computed = this.$$init_textColor = value;
        } else {
            computed = this.$$init_textColor = value;
            this.$$useinit_textColor = true;
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
        promise = this._applyTextColor(computed, old, "textColor", "init");

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

function refreshTextColor anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_textColor;
    if (this.$$runtime_textColor !== undefined) {
        old = this.$$runtime_textColor;
    }
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_textColor !== undefined) {
        computed = this.$$runtime_textColor;
    } else if (this.$$user_textColor !== undefined) {
        computed = this.$$user_textColor;
    } else if (this.$$theme_textColor !== undefined) {
        computed = this.$$theme_textColor;
    } else if (this.$$useinit_textColor) {
        delete this.$$useinit_textColor;
        computed = this.$$init_textColor;
    }
    if (computed === undefined || computed === inherit) {
        computed = value;
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
    promise = this._applyTextColor(computed, old, "textColor", "refresh");

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

function setRuntimeTextColor anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old = this.$$inherit_textColor;
        if (this.$$runtime_textColor !== undefined) {
            old = this.$$runtime_textColor;
        }
        if (equ.call(this, this.$$runtime_textColor, value)) return value;
        var inherit = prop.$$inherit;
        var computed;
        if (this.$$runtime_textColor !== undefined) {
            computed = this.$$runtime_textColor = value;
        } else if (this.$$user_textColor !== undefined) {
            computed = this.$$runtime_textColor = value;
        } else if (this.$$theme_textColor !== undefined) {
            computed = this.$$runtime_textColor = value;
        } else if (this.$$useinit_textColor) {
            delete this.$$useinit_textColor;
            computed = this.$$runtime_textColor = value;
        } else {
            computed = this.$$runtime_textColor = value;
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
        promise = this._applyTextColor(computed, old, "textColor", "setRuntime");

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

function resetRuntimeTextColor anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_textColor;
    if (this.$$runtime_textColor !== undefined) {
        old = this.$$runtime_textColor;
    }
    if (this.$$runtime_textColor === undefined) return;
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_textColor !== undefined) {
        delete this.$$runtime_textColor;
        if (this.$$user_textColor !== undefined) computed = this.$$user_textColor;
        else if (this.$$theme_textColor !== undefined) computed = this.$$theme_textColor;
        else if (this.$$init_textColor !== undefined) {
            computed = this.$$init_textColor;
            this.$$useinit_textColor = true;
        }
    } else if (this.$$user_textColor !== undefined) {
        computed = this.$$user_textColor;
    } else if (this.$$theme_textColor !== undefined) {} else if (this.$$useinit_textColor) {}
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
    promise = this._applyTextColor(computed, old, "textColor", "resetRuntime");

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

function resetThemedTextColor anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_textColor;
    if (this.$$runtime_textColor !== undefined) {
        old = this.$$runtime_textColor;
    }
    if (this.$$theme_textColor === undefined) return;
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_textColor !== undefined) {
        computed = this.$$runtime_textColor;
        delete this.$$theme_textColor;
    } else if (this.$$user_textColor !== undefined) {
        computed = this.$$user_textColor;
        delete this.$$theme_textColor;
    } else if (this.$$theme_textColor !== undefined) {
        delete this.$$theme_textColor;
        if (this.$$init_textColor !== undefined) {
            computed = this.$$init_textColor;
            this.$$useinit_textColor = true;
        }
    } else if (this.$$useinit_textColor) {}
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
    promise = this._applyTextColor(computed, old, "textColor", "resetThemed");

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

function getFont anonymous(value) {
    if (this.$$runtime_font !== undefined) return this.$$runtime_font;
    else if (this.$$inherit_font !== undefined) return this.$$inherit_font;
    else if (this.$$user_font !== undefined) return this.$$user_font;
    else if (this.$$theme_font !== undefined) return this.$$theme_font;
    else return null;
}

function setFont anonymous(value) {
    this.$$setFontImpl.apply(this, arguments);
    return value;
}

function resetFont anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_font;
    if (this.$$runtime_font !== undefined) {
        old = this.$$runtime_font;
    }
    if (this.$$user_font === undefined) return;
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_font !== undefined) {
        computed = this.$$runtime_font;
        delete this.$$user_font;
    } else if (this.$$user_font !== undefined) {
        delete this.$$user_font;
        if (this.$$runtime_font !== undefined) computed = this.$$runtime_font;
        if (this.$$theme_font !== undefined) computed = this.$$theme_font;
        else if (this.$$init_font !== undefined) {
            computed = this.$$init_font;
            this.$$useinit_font = true;
        }
    } else if (this.$$theme_font !== undefined) {} else if (this.$$useinit_font) {}
    if (computed === undefined || computed === inherit) {
        var pa = this.getLayoutParent();
        if (pa) computed = pa.$$inherit_font;
        if ((computed === undefined || computed === inherit) && this.$$init_font !== undefined && this.$$init_font !== inherit) {
            computed = this.$$init_font;
            this.$$useinit_font = true;
        } else {
            delete this.$$useinit_font;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_font;
    } else if (computed === undefined) delete this.$$inherit_font;
    else this.$$inherit_font = computed;
    var backup = computed;
    if (old === undefined) old = null;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyFont(computed, old, "font", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeFont')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeFont', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeFontAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeFontAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
        });
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshFont) a[i].refreshFont(backup);
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

function initFont anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old = this.$$inherit_font;
        if (this.$$runtime_font !== undefined) {
            old = this.$$runtime_font;
        }
        if (equ.call(this, this.$$init_font, value)) return value;
        var inherit = prop.$$inherit;
        var computed;
        if (this.$$runtime_font !== undefined) {
            computed = this.$$runtime_font;
            this.$$init_font = value;
        } else if (this.$$user_font !== undefined) {
            computed = this.$$user_font;
            this.$$init_font = value;
        } else if (this.$$theme_font !== undefined) {
            this.$$init_font = value;
            computed = this.$$theme_font;
        } else if (this.$$useinit_font) {
            computed = this.$$init_font = value;
        } else {
            computed = this.$$init_font = value;
            this.$$useinit_font = true;
        }
        if (computed === undefined || computed === inherit) {
            var pa = this.getLayoutParent();
            if (pa) computed = pa.$$inherit_font;
            if ((computed === undefined || computed === inherit) && this.$$init_font !== undefined && this.$$init_font !== inherit) {
                computed = this.$$init_font;
                this.$$useinit_font = true;
            } else {
                delete this.$$useinit_font;
            }
        }
        if (equ.call(this, old, computed)) return value;
        if (computed === inherit) {
            computed = undefined;
            delete this.$$inherit_font;
        } else if (computed === undefined) delete this.$$inherit_font;
        else this.$$inherit_font = computed;
        var backup = computed;
        if (old === undefined) old = null;
        if (computed === undefined || computed == inherit) computed = null;
        var self = this;
        var promise;
        promise = this._applyFont(computed, old, "font", "init");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeFont')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeFont', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeFontAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeFontAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
            });
            var a = self._getChildren();
            if (a)
                for (var i = 0, l = a.length; i < l; i++) {
                    if (a[i].refreshFont) a[i].refreshFont(backup);
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

function refreshFont anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_font;
    if (this.$$runtime_font !== undefined) {
        old = this.$$runtime_font;
    }
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_font !== undefined) {
        computed = this.$$runtime_font;
    } else if (this.$$user_font !== undefined) {
        computed = this.$$user_font;
    } else if (this.$$theme_font !== undefined) {
        computed = this.$$theme_font;
    } else if (this.$$useinit_font) {
        delete this.$$useinit_font;
        computed = this.$$init_font;
    }
    if (computed === undefined || computed === inherit) {
        computed = value;
        if ((computed === undefined || computed === inherit) && this.$$init_font !== undefined && this.$$init_font !== inherit) {
            computed = this.$$init_font;
            this.$$useinit_font = true;
        } else {
            delete this.$$useinit_font;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_font;
    } else if (computed === undefined) delete this.$$inherit_font;
    else this.$$inherit_font = computed;
    var backup = computed;
    if (old === undefined) old = null;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyFont(computed, old, "font", "refresh");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeFont')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeFont', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeFontAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeFontAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
        });
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshFont) a[i].refreshFont(backup);
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

function setRuntimeFont anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old = this.$$inherit_font;
        if (this.$$runtime_font !== undefined) {
            old = this.$$runtime_font;
        }
        if (equ.call(this, this.$$runtime_font, value)) return value;
        var inherit = prop.$$inherit;
        var computed;
        if (this.$$runtime_font !== undefined) {
            computed = this.$$runtime_font = value;
        } else if (this.$$user_font !== undefined) {
            computed = this.$$runtime_font = value;
        } else if (this.$$theme_font !== undefined) {
            computed = this.$$runtime_font = value;
        } else if (this.$$useinit_font) {
            delete this.$$useinit_font;
            computed = this.$$runtime_font = value;
        } else {
            computed = this.$$runtime_font = value;
        }
        if (computed === undefined || computed === inherit) {
            var pa = this.getLayoutParent();
            if (pa) computed = pa.$$inherit_font;
            if ((computed === undefined || computed === inherit) && this.$$init_font !== undefined && this.$$init_font !== inherit) {
                computed = this.$$init_font;
                this.$$useinit_font = true;
            } else {
                delete this.$$useinit_font;
            }
        }
        if (equ.call(this, old, computed)) return value;
        if (computed === inherit) {
            computed = undefined;
            delete this.$$inherit_font;
        } else if (computed === undefined) delete this.$$inherit_font;
        else this.$$inherit_font = computed;
        var backup = computed;
        if (old === undefined) old = null;
        if (computed === undefined || computed == inherit) computed = null;
        var self = this;
        var promise;
        promise = this._applyFont(computed, old, "font", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeFont')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeFont', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeFontAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeFontAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
            });
            var a = self._getChildren();
            if (a)
                for (var i = 0, l = a.length; i < l; i++) {
                    if (a[i].refreshFont) a[i].refreshFont(backup);
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

function resetRuntimeFont anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_font;
    if (this.$$runtime_font !== undefined) {
        old = this.$$runtime_font;
    }
    if (this.$$runtime_font === undefined) return;
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_font !== undefined) {
        delete this.$$runtime_font;
        if (this.$$user_font !== undefined) computed = this.$$user_font;
        else if (this.$$theme_font !== undefined) computed = this.$$theme_font;
        else if (this.$$init_font !== undefined) {
            computed = this.$$init_font;
            this.$$useinit_font = true;
        }
    } else if (this.$$user_font !== undefined) {
        computed = this.$$user_font;
    } else if (this.$$theme_font !== undefined) {} else if (this.$$useinit_font) {}
    if (computed === undefined || computed === inherit) {
        var pa = this.getLayoutParent();
        if (pa) computed = pa.$$inherit_font;
        if ((computed === undefined || computed === inherit) && this.$$init_font !== undefined && this.$$init_font !== inherit) {
            computed = this.$$init_font;
            this.$$useinit_font = true;
        } else {
            delete this.$$useinit_font;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_font;
    } else if (computed === undefined) delete this.$$inherit_font;
    else this.$$inherit_font = computed;
    var backup = computed;
    if (old === undefined) old = null;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyFont(computed, old, "font", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeFont')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeFont', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeFontAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeFontAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
        });
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshFont) a[i].refreshFont(backup);
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

function setThemedFont anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old = this.$$inherit_font;
        if (this.$$runtime_font !== undefined) {
            old = this.$$runtime_font;
        }
        if (equ.call(this, this.$$theme_font, value)) return value;
        var inherit = prop.$$inherit;
        var computed;
        if (this.$$runtime_font !== undefined) {
            computed = this.$$runtime_font;
            this.$$theme_font = value;
        } else if (this.$$user_font !== undefined) {
            computed = this.$$user_font;
            this.$$theme_font = value;
        } else if (this.$$theme_font !== undefined) {
            computed = this.$$theme_font = value;
        } else if (this.$$useinit_font) {
            delete this.$$useinit_font;
            computed = this.$$theme_font = value;
        } else {
            computed = this.$$theme_font = value;
        }
        if (computed === undefined || computed === inherit) {
            var pa = this.getLayoutParent();
            if (pa) computed = pa.$$inherit_font;
            if ((computed === undefined || computed === inherit) && this.$$init_font !== undefined && this.$$init_font !== inherit) {
                computed = this.$$init_font;
                this.$$useinit_font = true;
            } else {
                delete this.$$useinit_font;
            }
        }
        if (equ.call(this, old, computed)) return value;
        if (computed === inherit) {
            computed = undefined;
            delete this.$$inherit_font;
        } else if (computed === undefined) delete this.$$inherit_font;
        else this.$$inherit_font = computed;
        var backup = computed;
        if (old === undefined) old = null;
        if (computed === undefined || computed == inherit) computed = null;
        var self = this;
        var promise;
        promise = this._applyFont(computed, old, "font", "setThemed");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeFont')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeFont', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeFontAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeFontAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
            });
            var a = self._getChildren();
            if (a)
                for (var i = 0, l = a.length; i < l; i++) {
                    if (a[i].refreshFont) a[i].refreshFont(backup);
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

function resetThemedFont anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_font;
    if (this.$$runtime_font !== undefined) {
        old = this.$$runtime_font;
    }
    if (this.$$theme_font === undefined) return;
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_font !== undefined) {
        computed = this.$$runtime_font;
        delete this.$$theme_font;
    } else if (this.$$user_font !== undefined) {
        computed = this.$$user_font;
        delete this.$$theme_font;
    } else if (this.$$theme_font !== undefined) {
        delete this.$$theme_font;
        if (this.$$init_font !== undefined) {
            computed = this.$$init_font;
            this.$$useinit_font = true;
        }
    } else if (this.$$useinit_font) {}
    if (computed === undefined || computed === inherit) {
        var pa = this.getLayoutParent();
        if (pa) computed = pa.$$inherit_font;
        if ((computed === undefined || computed === inherit) && this.$$init_font !== undefined && this.$$init_font !== inherit) {
            computed = this.$$init_font;
            this.$$useinit_font = true;
        } else {
            delete this.$$useinit_font;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_font;
    } else if (computed === undefined) delete this.$$inherit_font;
    else this.$$inherit_font = computed;
    var backup = computed;
    if (old === undefined) old = null;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyFont(computed, old, "font", "resetThemed");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeFont')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeFont', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeFontAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeFontAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
        });
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshFont) a[i].refreshFont(backup);
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

function getOpacity anonymous(value) {
    if (this.$$runtime_opacity !== undefined) return this.$$runtime_opacity;
    if (this.$$user_opacity !== undefined) return this.$$user_opacity;
    else if (this.$$theme_opacity !== undefined) return this.$$theme_opacity;
    else return this.$$init_opacity;
}

function setOpacity anonymous(value) {
    this.$$setOpacityImpl.apply(this, arguments);
    return value;
}

function resetOpacity anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_opacity !== undefined) {
        old = this.$$runtime_opacity;
    } else if (this.$$user_opacity !== undefined) {
        old = this.$$user_opacity;
    } else if (this.$$theme_opacity !== undefined) {
        old = this.$$theme_opacity;
    } else if (this.$$useinit_opacity) {
        old = this.$$init_opacity;
    }
    if (this.$$user_opacity === undefined) return;
    var computed;
    if (this.$$runtime_opacity !== undefined) {
        computed = this.$$runtime_opacity;
        delete this.$$user_opacity;
    } else if (this.$$user_opacity !== undefined) {
        delete this.$$user_opacity;
        if (this.$$runtime_opacity !== undefined) computed = this.$$runtime_opacity;
        if (this.$$theme_opacity !== undefined) computed = this.$$theme_opacity;
        else if (this.$$init_opacity !== undefined) {
            computed = this.$$init_opacity;
            this.$$useinit_opacity = true;
        }
    } else if (this.$$theme_opacity !== undefined) {} else if (this.$$useinit_opacity) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_opacity;
    var self = this;
    var promise;
    promise = this._applyOpacity(computed, old, "opacity", "reset");

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

function initOpacity anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_opacity !== undefined) {
        old = this.$$runtime_opacity;
    } else if (this.$$user_opacity !== undefined) {
        old = this.$$user_opacity;
    } else if (this.$$theme_opacity !== undefined) {
        old = this.$$theme_opacity;
    } else if (this.$$useinit_opacity) {
        old = this.$$init_opacity;
    }
    var computed;
    if (this.$$runtime_opacity !== undefined) {
        computed = this.$$runtime_opacity;
    } else if (this.$$user_opacity !== undefined) {
        computed = this.$$user_opacity;
    } else if (this.$$theme_opacity !== undefined) {
        computed = this.$$theme_opacity;
    } else if (this.$$useinit_opacity) {
        computed = this.$$init_opacity;
    } else {
        computed = this.$$init_opacity;
        this.$$useinit_opacity = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyOpacity(computed, old, "opacity", "init");

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

function setRuntimeOpacity anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_opacity !== undefined) {
            old = this.$$runtime_opacity;
        } else if (this.$$user_opacity !== undefined) {
            old = this.$$user_opacity;
        } else if (this.$$theme_opacity !== undefined) {
            old = this.$$theme_opacity;
        } else if (this.$$useinit_opacity) {
            old = this.$$init_opacity;
        }
        if (equ.call(this, this.$$runtime_opacity, value)) return value;
        var computed;
        if (this.$$runtime_opacity !== undefined) {
            computed = this.$$runtime_opacity = value;
        } else if (this.$$user_opacity !== undefined) {
            computed = this.$$runtime_opacity = value;
        } else if (this.$$theme_opacity !== undefined) {
            computed = this.$$runtime_opacity = value;
        } else if (this.$$useinit_opacity) {
            delete this.$$useinit_opacity;
            computed = this.$$runtime_opacity = value;
        } else {
            computed = this.$$runtime_opacity = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_opacity;
        var self = this;
        var promise;
        promise = this._applyOpacity(computed, old, "opacity", "setRuntime");

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

function resetRuntimeOpacity anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_opacity !== undefined) {
        old = this.$$runtime_opacity;
    } else if (this.$$user_opacity !== undefined) {
        old = this.$$user_opacity;
    } else if (this.$$theme_opacity !== undefined) {
        old = this.$$theme_opacity;
    } else if (this.$$useinit_opacity) {
        old = this.$$init_opacity;
    }
    if (this.$$runtime_opacity === undefined) return;
    var computed;
    if (this.$$runtime_opacity !== undefined) {
        delete this.$$runtime_opacity;
        if (this.$$user_opacity !== undefined) computed = this.$$user_opacity;
        else if (this.$$theme_opacity !== undefined) computed = this.$$theme_opacity;
        else if (this.$$init_opacity !== undefined) {
            computed = this.$$init_opacity;
            this.$$useinit_opacity = true;
        }
    } else if (this.$$user_opacity !== undefined) {
        computed = this.$$user_opacity;
    } else if (this.$$theme_opacity !== undefined) {} else if (this.$$useinit_opacity) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_opacity;
    var self = this;
    var promise;
    promise = this._applyOpacity(computed, old, "opacity", "resetRuntime");

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

function setThemedOpacity anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_opacity !== undefined) {
            old = this.$$runtime_opacity;
        } else if (this.$$user_opacity !== undefined) {
            old = this.$$user_opacity;
        } else if (this.$$theme_opacity !== undefined) {
            old = this.$$theme_opacity;
        } else if (this.$$useinit_opacity) {
            old = this.$$init_opacity;
        }
        if (equ.call(this, this.$$theme_opacity, value)) return value;
        var computed;
        if (this.$$runtime_opacity !== undefined) {
            computed = this.$$runtime_opacity;
            this.$$theme_opacity = value;
        } else if (this.$$user_opacity !== undefined) {
            computed = this.$$user_opacity;
            this.$$theme_opacity = value;
        } else if (this.$$theme_opacity !== undefined) {
            computed = this.$$theme_opacity = value;
        } else if (this.$$useinit_opacity) {
            delete this.$$useinit_opacity;
            computed = this.$$theme_opacity = value;
        } else {
            computed = this.$$theme_opacity = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_opacity;
        var self = this;
        var promise;
        promise = this._applyOpacity(computed, old, "opacity", "setThemed");

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

function resetThemedOpacity anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_opacity !== undefined) {
        old = this.$$runtime_opacity;
    } else if (this.$$user_opacity !== undefined) {
        old = this.$$user_opacity;
    } else if (this.$$theme_opacity !== undefined) {
        old = this.$$theme_opacity;
    } else if (this.$$useinit_opacity) {
        old = this.$$init_opacity;
    }
    if (this.$$theme_opacity === undefined) return;
    var computed;
    if (this.$$runtime_opacity !== undefined) {
        computed = this.$$runtime_opacity;
        delete this.$$theme_opacity;
    } else if (this.$$user_opacity !== undefined) {
        computed = this.$$user_opacity;
        delete this.$$theme_opacity;
    } else if (this.$$theme_opacity !== undefined) {
        delete this.$$theme_opacity;
        if (this.$$init_opacity !== undefined) {
            computed = this.$$init_opacity;
            this.$$useinit_opacity = true;
        }
    } else if (this.$$useinit_opacity) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_opacity;
    var self = this;
    var promise;
    promise = this._applyOpacity(computed, old, "opacity", "resetThemed");

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

function getCursor anonymous(value) {
    if (this.$$runtime_cursor !== undefined) return this.$$runtime_cursor;
    else if (this.$$inherit_cursor !== undefined) return this.$$inherit_cursor;
    else if (this.$$user_cursor !== undefined) return this.$$user_cursor;
    else if (this.$$theme_cursor !== undefined) return this.$$theme_cursor;
    else var init = this.$$init_cursor;
    if (init == qx.core.Property.$$inherit) init = null;
    return init;
}

function setCursor anonymous(value) {
    this.$$setCursorImpl.apply(this, arguments);
    return value;
}

function resetCursor anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_cursor;
    if (this.$$runtime_cursor !== undefined) {
        old = this.$$runtime_cursor;
    }
    if (this.$$user_cursor === undefined) return;
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_cursor !== undefined) {
        computed = this.$$runtime_cursor;
        delete this.$$user_cursor;
    } else if (this.$$user_cursor !== undefined) {
        delete this.$$user_cursor;
        if (this.$$runtime_cursor !== undefined) computed = this.$$runtime_cursor;
        if (this.$$theme_cursor !== undefined) computed = this.$$theme_cursor;
        else if (this.$$init_cursor !== undefined) {
            computed = this.$$init_cursor;
            this.$$useinit_cursor = true;
        }
    } else if (this.$$theme_cursor !== undefined) {} else if (this.$$useinit_cursor) {}
    if (computed === undefined || computed === inherit) {
        var pa = this.getLayoutParent();
        if (pa) computed = pa.$$inherit_cursor;
        if ((computed === undefined || computed === inherit) && this.$$init_cursor !== undefined && this.$$init_cursor !== inherit) {
            computed = this.$$init_cursor;
            this.$$useinit_cursor = true;
        } else {
            delete this.$$useinit_cursor;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_cursor;
    } else if (computed === undefined) delete this.$$inherit_cursor;
    else this.$$inherit_cursor = computed;
    var backup = computed;
    if (old === undefined) old = this.$$init_cursor;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyCursor(computed, old, "cursor", "reset");

    function fire() {
        var tracker = {};
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshCursor) a[i].refreshCursor(backup);
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

function initCursor anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_cursor;
    if (this.$$runtime_cursor !== undefined) {
        old = this.$$runtime_cursor;
    }
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_cursor !== undefined) {
        computed = this.$$runtime_cursor;
    } else if (this.$$user_cursor !== undefined) {
        computed = this.$$user_cursor;
    } else if (this.$$theme_cursor !== undefined) {
        computed = this.$$theme_cursor;
    } else if (this.$$useinit_cursor) {
        computed = this.$$init_cursor;
    } else {
        computed = this.$$init_cursor;
        this.$$useinit_cursor = true;
    }
    if (computed === undefined || computed === inherit) {
        var pa = this.getLayoutParent();
        if (pa) computed = pa.$$inherit_cursor;
        if ((computed === undefined || computed === inherit) && this.$$init_cursor !== undefined && this.$$init_cursor !== inherit) {
            computed = this.$$init_cursor;
            this.$$useinit_cursor = true;
        } else {
            delete this.$$useinit_cursor;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_cursor;
    } else if (computed === undefined) delete this.$$inherit_cursor;
    else this.$$inherit_cursor = computed;
    var backup = computed;
    if (old === undefined) old = null;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyCursor(computed, old, "cursor", "init");

    function fire() {
        var tracker = {};
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshCursor) a[i].refreshCursor(backup);
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

function refreshCursor anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_cursor;
    if (this.$$runtime_cursor !== undefined) {
        old = this.$$runtime_cursor;
    }
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_cursor !== undefined) {
        computed = this.$$runtime_cursor;
    } else if (this.$$user_cursor !== undefined) {
        computed = this.$$user_cursor;
    } else if (this.$$theme_cursor !== undefined) {
        computed = this.$$theme_cursor;
    } else if (this.$$useinit_cursor) {
        delete this.$$useinit_cursor;
        computed = this.$$init_cursor;
    }
    if (computed === undefined || computed === inherit) {
        computed = value;
        if ((computed === undefined || computed === inherit) && this.$$init_cursor !== undefined && this.$$init_cursor !== inherit) {
            computed = this.$$init_cursor;
            this.$$useinit_cursor = true;
        } else {
            delete this.$$useinit_cursor;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_cursor;
    } else if (computed === undefined) delete this.$$inherit_cursor;
    else this.$$inherit_cursor = computed;
    var backup = computed;
    if (old === undefined) old = this.$$init_cursor;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyCursor(computed, old, "cursor", "refresh");

    function fire() {
        var tracker = {};
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshCursor) a[i].refreshCursor(backup);
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

function setRuntimeCursor anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old = this.$$inherit_cursor;
        if (this.$$runtime_cursor !== undefined) {
            old = this.$$runtime_cursor;
        }
        if (equ.call(this, this.$$runtime_cursor, value)) return value;
        var inherit = prop.$$inherit;
        var computed;
        if (this.$$runtime_cursor !== undefined) {
            computed = this.$$runtime_cursor = value;
        } else if (this.$$user_cursor !== undefined) {
            computed = this.$$runtime_cursor = value;
        } else if (this.$$theme_cursor !== undefined) {
            computed = this.$$runtime_cursor = value;
        } else if (this.$$useinit_cursor) {
            delete this.$$useinit_cursor;
            computed = this.$$runtime_cursor = value;
        } else {
            computed = this.$$runtime_cursor = value;
        }
        if (computed === undefined || computed === inherit) {
            var pa = this.getLayoutParent();
            if (pa) computed = pa.$$inherit_cursor;
            if ((computed === undefined || computed === inherit) && this.$$init_cursor !== undefined && this.$$init_cursor !== inherit) {
                computed = this.$$init_cursor;
                this.$$useinit_cursor = true;
            } else {
                delete this.$$useinit_cursor;
            }
        }
        if (equ.call(this, old, computed)) return value;
        if (computed === inherit) {
            computed = undefined;
            delete this.$$inherit_cursor;
        } else if (computed === undefined) delete this.$$inherit_cursor;
        else this.$$inherit_cursor = computed;
        var backup = computed;
        if (old === undefined) old = this.$$init_cursor;
        if (computed === undefined || computed == inherit) computed = null;
        var self = this;
        var promise;
        promise = this._applyCursor(computed, old, "cursor", "setRuntime");

        function fire() {
            var tracker = {};
            var a = self._getChildren();
            if (a)
                for (var i = 0, l = a.length; i < l; i++) {
                    if (a[i].refreshCursor) a[i].refreshCursor(backup);
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

function resetRuntimeCursor anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_cursor;
    if (this.$$runtime_cursor !== undefined) {
        old = this.$$runtime_cursor;
    }
    if (this.$$runtime_cursor === undefined) return;
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_cursor !== undefined) {
        delete this.$$runtime_cursor;
        if (this.$$user_cursor !== undefined) computed = this.$$user_cursor;
        else if (this.$$theme_cursor !== undefined) computed = this.$$theme_cursor;
        else if (this.$$init_cursor !== undefined) {
            computed = this.$$init_cursor;
            this.$$useinit_cursor = true;
        }
    } else if (this.$$user_cursor !== undefined) {
        computed = this.$$user_cursor;
    } else if (this.$$theme_cursor !== undefined) {} else if (this.$$useinit_cursor) {}
    if (computed === undefined || computed === inherit) {
        var pa = this.getLayoutParent();
        if (pa) computed = pa.$$inherit_cursor;
        if ((computed === undefined || computed === inherit) && this.$$init_cursor !== undefined && this.$$init_cursor !== inherit) {
            computed = this.$$init_cursor;
            this.$$useinit_cursor = true;
        } else {
            delete this.$$useinit_cursor;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_cursor;
    } else if (computed === undefined) delete this.$$inherit_cursor;
    else this.$$inherit_cursor = computed;
    var backup = computed;
    if (old === undefined) old = this.$$init_cursor;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyCursor(computed, old, "cursor", "resetRuntime");

    function fire() {
        var tracker = {};
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshCursor) a[i].refreshCursor(backup);
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

function setThemedCursor anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old = this.$$inherit_cursor;
        if (this.$$runtime_cursor !== undefined) {
            old = this.$$runtime_cursor;
        }
        if (equ.call(this, this.$$theme_cursor, value)) return value;
        var inherit = prop.$$inherit;
        var computed;
        if (this.$$runtime_cursor !== undefined) {
            computed = this.$$runtime_cursor;
            this.$$theme_cursor = value;
        } else if (this.$$user_cursor !== undefined) {
            computed = this.$$user_cursor;
            this.$$theme_cursor = value;
        } else if (this.$$theme_cursor !== undefined) {
            computed = this.$$theme_cursor = value;
        } else if (this.$$useinit_cursor) {
            delete this.$$useinit_cursor;
            computed = this.$$theme_cursor = value;
        } else {
            computed = this.$$theme_cursor = value;
        }
        if (computed === undefined || computed === inherit) {
            var pa = this.getLayoutParent();
            if (pa) computed = pa.$$inherit_cursor;
            if ((computed === undefined || computed === inherit) && this.$$init_cursor !== undefined && this.$$init_cursor !== inherit) {
                computed = this.$$init_cursor;
                this.$$useinit_cursor = true;
            } else {
                delete this.$$useinit_cursor;
            }
        }
        if (equ.call(this, old, computed)) return value;
        if (computed === inherit) {
            computed = undefined;
            delete this.$$inherit_cursor;
        } else if (computed === undefined) delete this.$$inherit_cursor;
        else this.$$inherit_cursor = computed;
        var backup = computed;
        if (old === undefined) old = this.$$init_cursor;
        if (computed === undefined || computed == inherit) computed = null;
        var self = this;
        var promise;
        promise = this._applyCursor(computed, old, "cursor", "setThemed");

        function fire() {
            var tracker = {};
            var a = self._getChildren();
            if (a)
                for (var i = 0, l = a.length; i < l; i++) {
                    if (a[i].refreshCursor) a[i].refreshCursor(backup);
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

function resetThemedCursor anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_cursor;
    if (this.$$runtime_cursor !== undefined) {
        old = this.$$runtime_cursor;
    }
    if (this.$$theme_cursor === undefined) return;
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_cursor !== undefined) {
        computed = this.$$runtime_cursor;
        delete this.$$theme_cursor;
    } else if (this.$$user_cursor !== undefined) {
        computed = this.$$user_cursor;
        delete this.$$theme_cursor;
    } else if (this.$$theme_cursor !== undefined) {
        delete this.$$theme_cursor;
        if (this.$$init_cursor !== undefined) {
            computed = this.$$init_cursor;
            this.$$useinit_cursor = true;
        }
    } else if (this.$$useinit_cursor) {}
    if (computed === undefined || computed === inherit) {
        var pa = this.getLayoutParent();
        if (pa) computed = pa.$$inherit_cursor;
        if ((computed === undefined || computed === inherit) && this.$$init_cursor !== undefined && this.$$init_cursor !== inherit) {
            computed = this.$$init_cursor;
            this.$$useinit_cursor = true;
        } else {
            delete this.$$useinit_cursor;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_cursor;
    } else if (computed === undefined) delete this.$$inherit_cursor;
    else this.$$inherit_cursor = computed;
    var backup = computed;
    if (old === undefined) old = this.$$init_cursor;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyCursor(computed, old, "cursor", "resetThemed");

    function fire() {
        var tracker = {};
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshCursor) a[i].refreshCursor(backup);
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

function getToolTip anonymous(value) {
    if (this.$$runtime_toolTip !== undefined) return this.$$runtime_toolTip;
    if (this.$$user_toolTip !== undefined) return this.$$user_toolTip;
    else return null;
}

function setToolTip anonymous(value) {
    this.$$setToolTipImpl.apply(this, arguments);
    return value;
}

function resetToolTip anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_toolTip !== undefined) delete this.$$user_toolTip;
}

function setRuntimeToolTip anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_toolTip !== undefined) {
            old = this.$$runtime_toolTip;
        } else if (this.$$user_toolTip !== undefined) {
            old = this.$$user_toolTip;
        } else if (this.$$useinit_toolTip) {
            old = this.$$init_toolTip;
        }
        this.$$runtime_toolTip = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeToolTip anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_toolTip !== undefined) delete this.$$runtime_toolTip;
}

function getToolTipText anonymous(value) {
    if (this.$$runtime_toolTipText !== undefined) return this.$$runtime_toolTipText;
    if (this.$$user_toolTipText !== undefined) return this.$$user_toolTipText;
    else return null;
}

function setToolTipText anonymous(value) {
    this.$$setToolTipTextImpl.apply(this, arguments);
    return value;
}

function resetToolTipText anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_toolTipText !== undefined) {
        old = this.$$runtime_toolTipText;
    } else if (this.$$user_toolTipText !== undefined) {
        old = this.$$user_toolTipText;
    } else if (this.$$useinit_toolTipText) {
        old = this.$$init_toolTipText;
    }
    if (this.$$user_toolTipText === undefined) return;
    var computed;
    if (this.$$runtime_toolTipText !== undefined) {
        computed = this.$$runtime_toolTipText;
        delete this.$$user_toolTipText;
    } else if (this.$$user_toolTipText !== undefined) {
        delete this.$$user_toolTipText;
        if (this.$$runtime_toolTipText !== undefined) computed = this.$$runtime_toolTipText;
        if (this.$$theme_toolTipText !== undefined) computed = this.$$theme_toolTipText;
        else if (this.$$init_toolTipText !== undefined) {
            computed = this.$$init_toolTipText;
            this.$$useinit_toolTipText = true;
        }
    } else if (this.$$useinit_toolTipText) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyToolTipText(computed, old, "toolTipText", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeToolTipText')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeToolTipText', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeToolTipTextAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeToolTipTextAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initToolTipText anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_toolTipText !== undefined) {
            old = this.$$runtime_toolTipText;
        } else if (this.$$user_toolTipText !== undefined) {
            old = this.$$user_toolTipText;
        } else if (this.$$useinit_toolTipText) {
            old = this.$$init_toolTipText;
        }
        if (equ.call(this, this.$$init_toolTipText, value)) return value;
        var computed;
        if (this.$$runtime_toolTipText !== undefined) {
            computed = this.$$runtime_toolTipText;
            this.$$init_toolTipText = value;
        } else if (this.$$user_toolTipText !== undefined) {
            computed = this.$$user_toolTipText;
            this.$$init_toolTipText = value;
        } else if (this.$$useinit_toolTipText) {
            computed = this.$$init_toolTipText = value;
        } else {
            computed = this.$$init_toolTipText = value;
            this.$$useinit_toolTipText = true;
        }
        if (computed === undefined) computed = null;
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyToolTipText(computed, old, "toolTipText", "init");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeToolTipText')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeToolTipText', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeToolTipTextAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeToolTipTextAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeToolTipText anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_toolTipText !== undefined) {
            old = this.$$runtime_toolTipText;
        } else if (this.$$user_toolTipText !== undefined) {
            old = this.$$user_toolTipText;
        } else if (this.$$useinit_toolTipText) {
            old = this.$$init_toolTipText;
        }
        if (equ.call(this, this.$$runtime_toolTipText, value)) return value;
        var computed;
        if (this.$$runtime_toolTipText !== undefined) {
            computed = this.$$runtime_toolTipText = value;
        } else if (this.$$user_toolTipText !== undefined) {
            computed = this.$$runtime_toolTipText = value;
        } else if (this.$$useinit_toolTipText) {
            delete this.$$useinit_toolTipText;
            computed = this.$$runtime_toolTipText = value;
        } else {
            computed = this.$$runtime_toolTipText = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyToolTipText(computed, old, "toolTipText", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeToolTipText')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeToolTipText', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeToolTipTextAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeToolTipTextAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeToolTipText anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_toolTipText !== undefined) {
        old = this.$$runtime_toolTipText;
    } else if (this.$$user_toolTipText !== undefined) {
        old = this.$$user_toolTipText;
    } else if (this.$$useinit_toolTipText) {
        old = this.$$init_toolTipText;
    }
    if (this.$$runtime_toolTipText === undefined) return;
    var computed;
    if (this.$$runtime_toolTipText !== undefined) {
        delete this.$$runtime_toolTipText;
        if (this.$$user_toolTipText !== undefined) computed = this.$$user_toolTipText;
        else if (this.$$theme_toolTipText !== undefined) computed = this.$$theme_toolTipText;
        else if (this.$$init_toolTipText !== undefined) {
            computed = this.$$init_toolTipText;
            this.$$useinit_toolTipText = true;
        }
    } else if (this.$$user_toolTipText !== undefined) {
        computed = this.$$user_toolTipText;
    } else if (this.$$useinit_toolTipText) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyToolTipText(computed, old, "toolTipText", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeToolTipText')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeToolTipText', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeToolTipTextAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeToolTipTextAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function getToolTipIcon anonymous(value) {
    if (this.$$runtime_toolTipIcon !== undefined) return this.$$runtime_toolTipIcon;
    if (this.$$user_toolTipIcon !== undefined) return this.$$user_toolTipIcon;
    else return null;
}

function setToolTipIcon anonymous(value) {
    this.$$setToolTipIconImpl.apply(this, arguments);
    return value;
}

function resetToolTipIcon anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_toolTipIcon !== undefined) {
        old = this.$$runtime_toolTipIcon;
    } else if (this.$$user_toolTipIcon !== undefined) {
        old = this.$$user_toolTipIcon;
    } else if (this.$$useinit_toolTipIcon) {
        old = this.$$init_toolTipIcon;
    }
    if (this.$$user_toolTipIcon === undefined) return;
    var computed;
    if (this.$$runtime_toolTipIcon !== undefined) {
        computed = this.$$runtime_toolTipIcon;
        delete this.$$user_toolTipIcon;
    } else if (this.$$user_toolTipIcon !== undefined) {
        delete this.$$user_toolTipIcon;
        if (this.$$runtime_toolTipIcon !== undefined) computed = this.$$runtime_toolTipIcon;
        if (this.$$theme_toolTipIcon !== undefined) computed = this.$$theme_toolTipIcon;
        else if (this.$$init_toolTipIcon !== undefined) {
            computed = this.$$init_toolTipIcon;
            this.$$useinit_toolTipIcon = true;
        }
    } else if (this.$$useinit_toolTipIcon) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeToolTipText')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeToolTipText', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeToolTipTextAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeToolTipTextAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initToolTipIcon anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_toolTipIcon !== undefined) {
            old = this.$$runtime_toolTipIcon;
        } else if (this.$$user_toolTipIcon !== undefined) {
            old = this.$$user_toolTipIcon;
        } else if (this.$$useinit_toolTipIcon) {
            old = this.$$init_toolTipIcon;
        }
        if (equ.call(this, this.$$init_toolTipIcon, value)) return value;
        var computed;
        if (this.$$runtime_toolTipIcon !== undefined) {
            computed = this.$$runtime_toolTipIcon;
            this.$$init_toolTipIcon = value;
        } else if (this.$$user_toolTipIcon !== undefined) {
            computed = this.$$user_toolTipIcon;
            this.$$init_toolTipIcon = value;
        } else if (this.$$useinit_toolTipIcon) {
            computed = this.$$init_toolTipIcon = value;
        } else {
            computed = this.$$init_toolTipIcon = value;
            this.$$useinit_toolTipIcon = true;
        }
        if (computed === undefined) computed = null;
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeToolTipText')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeToolTipText', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeToolTipTextAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeToolTipTextAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeToolTipIcon anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_toolTipIcon !== undefined) {
            old = this.$$runtime_toolTipIcon;
        } else if (this.$$user_toolTipIcon !== undefined) {
            old = this.$$user_toolTipIcon;
        } else if (this.$$useinit_toolTipIcon) {
            old = this.$$init_toolTipIcon;
        }
        if (equ.call(this, this.$$runtime_toolTipIcon, value)) return value;
        var computed;
        if (this.$$runtime_toolTipIcon !== undefined) {
            computed = this.$$runtime_toolTipIcon = value;
        } else if (this.$$user_toolTipIcon !== undefined) {
            computed = this.$$runtime_toolTipIcon = value;
        } else if (this.$$useinit_toolTipIcon) {
            delete this.$$useinit_toolTipIcon;
            computed = this.$$runtime_toolTipIcon = value;
        } else {
            computed = this.$$runtime_toolTipIcon = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeToolTipText')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeToolTipText', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeToolTipTextAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeToolTipTextAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeToolTipIcon anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_toolTipIcon !== undefined) {
        old = this.$$runtime_toolTipIcon;
    } else if (this.$$user_toolTipIcon !== undefined) {
        old = this.$$user_toolTipIcon;
    } else if (this.$$useinit_toolTipIcon) {
        old = this.$$init_toolTipIcon;
    }
    if (this.$$runtime_toolTipIcon === undefined) return;
    var computed;
    if (this.$$runtime_toolTipIcon !== undefined) {
        delete this.$$runtime_toolTipIcon;
        if (this.$$user_toolTipIcon !== undefined) computed = this.$$user_toolTipIcon;
        else if (this.$$theme_toolTipIcon !== undefined) computed = this.$$theme_toolTipIcon;
        else if (this.$$init_toolTipIcon !== undefined) {
            computed = this.$$init_toolTipIcon;
            this.$$useinit_toolTipIcon = true;
        }
    } else if (this.$$user_toolTipIcon !== undefined) {
        computed = this.$$user_toolTipIcon;
    } else if (this.$$useinit_toolTipIcon) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeToolTipText')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeToolTipText', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeToolTipTextAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeToolTipTextAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function getBlockToolTip anonymous(value) {
    if (this.$$runtime_blockToolTip !== undefined) return this.$$runtime_blockToolTip;
    if (this.$$user_blockToolTip !== undefined) return this.$$user_blockToolTip;
    else return this.$$init_blockToolTip;
}

function setBlockToolTip anonymous(value) {
    this.$$setBlockToolTipImpl.apply(this, arguments);
    return value;
}

function resetBlockToolTip anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_blockToolTip !== undefined) delete this.$$user_blockToolTip;
}

function setRuntimeBlockToolTip anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_blockToolTip !== undefined) {
            old = this.$$runtime_blockToolTip;
        } else if (this.$$user_blockToolTip !== undefined) {
            old = this.$$user_blockToolTip;
        } else if (this.$$useinit_blockToolTip) {
            old = this.$$init_blockToolTip;
        }
        this.$$runtime_blockToolTip = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeBlockToolTip anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_blockToolTip !== undefined) delete this.$$runtime_blockToolTip;
}

function toggleBlockToolTip anonymous() {
    return this.setBlockToolTip(!this.getBlockToolTip())
}

function isBlockToolTip anonymous() {
    return this.getBlockToolTip()
}

function getShowToolTipWhenDisabled anonymous(value) {
    if (this.$$runtime_showToolTipWhenDisabled !== undefined) return this.$$runtime_showToolTipWhenDisabled;
    if (this.$$user_showToolTipWhenDisabled !== undefined) return this.$$user_showToolTipWhenDisabled;
    else return this.$$init_showToolTipWhenDisabled;
}

function setShowToolTipWhenDisabled anonymous(value) {
    this.$$setShowToolTipWhenDisabledImpl.apply(this, arguments);
    return value;
}

function resetShowToolTipWhenDisabled anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_showToolTipWhenDisabled !== undefined) delete this.$$user_showToolTipWhenDisabled;
}

function setRuntimeShowToolTipWhenDisabled anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_showToolTipWhenDisabled !== undefined) {
            old = this.$$runtime_showToolTipWhenDisabled;
        } else if (this.$$user_showToolTipWhenDisabled !== undefined) {
            old = this.$$user_showToolTipWhenDisabled;
        } else if (this.$$useinit_showToolTipWhenDisabled) {
            old = this.$$init_showToolTipWhenDisabled;
        }
        this.$$runtime_showToolTipWhenDisabled = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeShowToolTipWhenDisabled anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_showToolTipWhenDisabled !== undefined) delete this.$$runtime_showToolTipWhenDisabled;
}

function toggleShowToolTipWhenDisabled anonymous() {
    return this.setShowToolTipWhenDisabled(!this.getShowToolTipWhenDisabled())
}

function isShowToolTipWhenDisabled anonymous() {
    return this.getShowToolTipWhenDisabled()
}

function getVisibility anonymous(value) {
    if (this.$$runtime_visibility !== undefined) return this.$$runtime_visibility;
    if (this.$$user_visibility !== undefined) return this.$$user_visibility;
    else return this.$$init_visibility;
}

function setVisibility anonymous(value) {
    this.$$setVisibilityImpl.apply(this, arguments);
    return value;
}

function resetVisibility anonymous(value) {
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
    if (this.$$user_visibility === undefined) return;
    var computed;
    if (this.$$runtime_visibility !== undefined) {
        computed = this.$$runtime_visibility;
        delete this.$$user_visibility;
    } else if (this.$$user_visibility !== undefined) {
        delete this.$$user_visibility;
        if (this.$$runtime_visibility !== undefined) computed = this.$$runtime_visibility;
        if (this.$$theme_visibility !== undefined) computed = this.$$theme_visibility;
        else if (this.$$init_visibility !== undefined) {
            computed = this.$$init_visibility;
            this.$$useinit_visibility = true;
        }
    } else if (this.$$useinit_visibility) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_visibility;
    var self = this;
    var promise;
    promise = this._applyVisibility(computed, old, "visibility", "reset");

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

function setRuntimeVisibility anonymous(value) {
    function set(value) {
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
        if (equ.call(this, this.$$runtime_visibility, value)) return value;
        var computed;
        if (this.$$runtime_visibility !== undefined) {
            computed = this.$$runtime_visibility = value;
        } else if (this.$$user_visibility !== undefined) {
            computed = this.$$runtime_visibility = value;
        } else if (this.$$useinit_visibility) {
            delete this.$$useinit_visibility;
            computed = this.$$runtime_visibility = value;
        } else {
            computed = this.$$runtime_visibility = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_visibility;
        var self = this;
        var promise;
        promise = this._applyVisibility(computed, old, "visibility", "setRuntime");

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
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeVisibility anonymous(value) {
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
    if (this.$$runtime_visibility === undefined) return;
    var computed;
    if (this.$$runtime_visibility !== undefined) {
        delete this.$$runtime_visibility;
        if (this.$$user_visibility !== undefined) computed = this.$$user_visibility;
        else if (this.$$theme_visibility !== undefined) computed = this.$$theme_visibility;
        else if (this.$$init_visibility !== undefined) {
            computed = this.$$init_visibility;
            this.$$useinit_visibility = true;
        }
    } else if (this.$$user_visibility !== undefined) {
        computed = this.$$user_visibility;
    } else if (this.$$useinit_visibility) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_visibility;
    var self = this;
    var promise;
    promise = this._applyVisibility(computed, old, "visibility", "resetRuntime");

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

function getEnabled anonymous(value) {
    if (this.$$runtime_enabled !== undefined) return this.$$runtime_enabled;
    else if (this.$$inherit_enabled !== undefined) return this.$$inherit_enabled;
    else if (this.$$user_enabled !== undefined) return this.$$user_enabled;
    else var init = this.$$init_enabled;
    return init;
}

function setEnabled anonymous(value) {
    this.$$setEnabledImpl.apply(this, arguments);
    return value;
}

function resetEnabled anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_enabled;
    if (this.$$runtime_enabled !== undefined) {
        old = this.$$runtime_enabled;
    }
    if (this.$$user_enabled === undefined) return;
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_enabled !== undefined) {
        computed = this.$$runtime_enabled;
        delete this.$$user_enabled;
    } else if (this.$$user_enabled !== undefined) {
        delete this.$$user_enabled;
        if (this.$$runtime_enabled !== undefined) computed = this.$$runtime_enabled;
        if (this.$$theme_enabled !== undefined) computed = this.$$theme_enabled;
        else if (this.$$init_enabled !== undefined) {
            computed = this.$$init_enabled;
            this.$$useinit_enabled = true;
        }
    } else if (this.$$useinit_enabled) {}
    if (computed === undefined || computed === inherit) {
        var pa = this.getLayoutParent();
        if (pa) computed = pa.$$inherit_enabled;
        if ((computed === undefined || computed === inherit) && this.$$init_enabled !== undefined && this.$$init_enabled !== inherit) {
            computed = this.$$init_enabled;
            this.$$useinit_enabled = true;
        } else {
            delete this.$$useinit_enabled;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_enabled;
    } else if (computed === undefined) delete this.$$inherit_enabled;
    else this.$$inherit_enabled = computed;
    var backup = computed;
    if (old === undefined) old = this.$$init_enabled;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyEnabled(computed, old, "enabled", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeEnabled')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeEnabled', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeEnabledAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeEnabledAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
        });
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshEnabled) a[i].refreshEnabled(backup);
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

function initEnabled anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_enabled;
    if (this.$$runtime_enabled !== undefined) {
        old = this.$$runtime_enabled;
    }
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_enabled !== undefined) {
        computed = this.$$runtime_enabled;
    } else if (this.$$user_enabled !== undefined) {
        computed = this.$$user_enabled;
    } else if (this.$$useinit_enabled) {
        computed = this.$$init_enabled;
    } else {
        computed = this.$$init_enabled;
        this.$$useinit_enabled = true;
    }
    if (computed === undefined || computed === inherit) {
        var pa = this.getLayoutParent();
        if (pa) computed = pa.$$inherit_enabled;
        if ((computed === undefined || computed === inherit) && this.$$init_enabled !== undefined && this.$$init_enabled !== inherit) {
            computed = this.$$init_enabled;
            this.$$useinit_enabled = true;
        } else {
            delete this.$$useinit_enabled;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_enabled;
    } else if (computed === undefined) delete this.$$inherit_enabled;
    else this.$$inherit_enabled = computed;
    var backup = computed;
    if (old === undefined) old = null;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyEnabled(computed, old, "enabled", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeEnabled')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeEnabled', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeEnabledAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeEnabledAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
        });
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshEnabled) a[i].refreshEnabled(backup);
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

function refreshEnabled anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_enabled;
    if (this.$$runtime_enabled !== undefined) {
        old = this.$$runtime_enabled;
    }
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_enabled !== undefined) {
        computed = this.$$runtime_enabled;
    } else if (this.$$user_enabled !== undefined) {
        computed = this.$$user_enabled;
    } else if (this.$$useinit_enabled) {
        delete this.$$useinit_enabled;
        computed = this.$$init_enabled;
    }
    if (computed === undefined || computed === inherit) {
        computed = value;
        if ((computed === undefined || computed === inherit) && this.$$init_enabled !== undefined && this.$$init_enabled !== inherit) {
            computed = this.$$init_enabled;
            this.$$useinit_enabled = true;
        } else {
            delete this.$$useinit_enabled;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_enabled;
    } else if (computed === undefined) delete this.$$inherit_enabled;
    else this.$$inherit_enabled = computed;
    var backup = computed;
    if (old === undefined) old = this.$$init_enabled;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyEnabled(computed, old, "enabled", "refresh");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeEnabled')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeEnabled', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeEnabledAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeEnabledAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
        });
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshEnabled) a[i].refreshEnabled(backup);
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

function setRuntimeEnabled anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old = this.$$inherit_enabled;
        if (this.$$runtime_enabled !== undefined) {
            old = this.$$runtime_enabled;
        }
        if (equ.call(this, this.$$runtime_enabled, value)) return value;
        var inherit = prop.$$inherit;
        var computed;
        if (this.$$runtime_enabled !== undefined) {
            computed = this.$$runtime_enabled = value;
        } else if (this.$$user_enabled !== undefined) {
            computed = this.$$runtime_enabled = value;
        } else if (this.$$useinit_enabled) {
            delete this.$$useinit_enabled;
            computed = this.$$runtime_enabled = value;
        } else {
            computed = this.$$runtime_enabled = value;
        }
        if (computed === undefined || computed === inherit) {
            var pa = this.getLayoutParent();
            if (pa) computed = pa.$$inherit_enabled;
            if ((computed === undefined || computed === inherit) && this.$$init_enabled !== undefined && this.$$init_enabled !== inherit) {
                computed = this.$$init_enabled;
                this.$$useinit_enabled = true;
            } else {
                delete this.$$useinit_enabled;
            }
        }
        if (equ.call(this, old, computed)) return value;
        if (computed === inherit) {
            computed = undefined;
            delete this.$$inherit_enabled;
        } else if (computed === undefined) delete this.$$inherit_enabled;
        else this.$$inherit_enabled = computed;
        var backup = computed;
        if (old === undefined) old = this.$$init_enabled;
        if (computed === undefined || computed == inherit) computed = null;
        var self = this;
        var promise;
        promise = this._applyEnabled(computed, old, "enabled", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeEnabled')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeEnabled', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeEnabledAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeEnabledAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
            });
            var a = self._getChildren();
            if (a)
                for (var i = 0, l = a.length; i < l; i++) {
                    if (a[i].refreshEnabled) a[i].refreshEnabled(backup);
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

function resetRuntimeEnabled anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old = this.$$inherit_enabled;
    if (this.$$runtime_enabled !== undefined) {
        old = this.$$runtime_enabled;
    }
    if (this.$$runtime_enabled === undefined) return;
    var inherit = prop.$$inherit;
    var computed;
    if (this.$$runtime_enabled !== undefined) {
        delete this.$$runtime_enabled;
        if (this.$$user_enabled !== undefined) computed = this.$$user_enabled;
        else if (this.$$theme_enabled !== undefined) computed = this.$$theme_enabled;
        else if (this.$$init_enabled !== undefined) {
            computed = this.$$init_enabled;
            this.$$useinit_enabled = true;
        }
    } else if (this.$$user_enabled !== undefined) {
        computed = this.$$user_enabled;
    } else if (this.$$useinit_enabled) {}
    if (computed === undefined || computed === inherit) {
        var pa = this.getLayoutParent();
        if (pa) computed = pa.$$inherit_enabled;
        if ((computed === undefined || computed === inherit) && this.$$init_enabled !== undefined && this.$$init_enabled !== inherit) {
            computed = this.$$init_enabled;
            this.$$useinit_enabled = true;
        } else {
            delete this.$$useinit_enabled;
        }
    }
    if (equ.call(this, old, computed)) return value;
    if (computed === inherit) {
        computed = undefined;
        delete this.$$inherit_enabled;
    } else if (computed === undefined) delete this.$$inherit_enabled;
    else this.$$inherit_enabled = computed;
    var backup = computed;
    if (old === undefined) old = this.$$init_enabled;
    if (computed === undefined || computed == inherit) computed = null;
    var self = this;
    var promise;
    promise = this._applyEnabled(computed, old, "enabled", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeEnabled')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeEnabled', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeEnabledAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeEnabledAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
        });
        var a = self._getChildren();
        if (a)
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i].refreshEnabled) a[i].refreshEnabled(backup);
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

function toggleEnabled anonymous() {
    return this.setEnabled(!this.getEnabled())
}

function isEnabled anonymous() {
    return this.getEnabled()
}

function getAnonymous anonymous(value) {
    if (this.$$runtime_anonymous !== undefined) return this.$$runtime_anonymous;
    if (this.$$user_anonymous !== undefined) return this.$$user_anonymous;
    else return this.$$init_anonymous;
}

function setAnonymous anonymous(value) {
    this.$$setAnonymousImpl.apply(this, arguments);
    return value;
}

function resetAnonymous anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_anonymous !== undefined) {
        old = this.$$runtime_anonymous;
    } else if (this.$$user_anonymous !== undefined) {
        old = this.$$user_anonymous;
    } else if (this.$$useinit_anonymous) {
        old = this.$$init_anonymous;
    }
    if (this.$$user_anonymous === undefined) return;
    var computed;
    if (this.$$runtime_anonymous !== undefined) {
        computed = this.$$runtime_anonymous;
        delete this.$$user_anonymous;
    } else if (this.$$user_anonymous !== undefined) {
        delete this.$$user_anonymous;
        if (this.$$runtime_anonymous !== undefined) computed = this.$$runtime_anonymous;
        if (this.$$theme_anonymous !== undefined) computed = this.$$theme_anonymous;
        else if (this.$$init_anonymous !== undefined) {
            computed = this.$$init_anonymous;
            this.$$useinit_anonymous = true;
        }
    } else if (this.$$useinit_anonymous) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_anonymous;
    var self = this;
    var promise;
    promise = this._applyAnonymous(computed, old, "anonymous", "reset");

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

function initAnonymous anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_anonymous !== undefined) {
        old = this.$$runtime_anonymous;
    } else if (this.$$user_anonymous !== undefined) {
        old = this.$$user_anonymous;
    } else if (this.$$useinit_anonymous) {
        old = this.$$init_anonymous;
    }
    var computed;
    if (this.$$runtime_anonymous !== undefined) {
        computed = this.$$runtime_anonymous;
    } else if (this.$$user_anonymous !== undefined) {
        computed = this.$$user_anonymous;
    } else if (this.$$useinit_anonymous) {
        computed = this.$$init_anonymous;
    } else {
        computed = this.$$init_anonymous;
        this.$$useinit_anonymous = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyAnonymous(computed, old, "anonymous", "init");

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

function setRuntimeAnonymous anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_anonymous !== undefined) {
            old = this.$$runtime_anonymous;
        } else if (this.$$user_anonymous !== undefined) {
            old = this.$$user_anonymous;
        } else if (this.$$useinit_anonymous) {
            old = this.$$init_anonymous;
        }
        if (equ.call(this, this.$$runtime_anonymous, value)) return value;
        var computed;
        if (this.$$runtime_anonymous !== undefined) {
            computed = this.$$runtime_anonymous = value;
        } else if (this.$$user_anonymous !== undefined) {
            computed = this.$$runtime_anonymous = value;
        } else if (this.$$useinit_anonymous) {
            delete this.$$useinit_anonymous;
            computed = this.$$runtime_anonymous = value;
        } else {
            computed = this.$$runtime_anonymous = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_anonymous;
        var self = this;
        var promise;
        promise = this._applyAnonymous(computed, old, "anonymous", "setRuntime");

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

function resetRuntimeAnonymous anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_anonymous !== undefined) {
        old = this.$$runtime_anonymous;
    } else if (this.$$user_anonymous !== undefined) {
        old = this.$$user_anonymous;
    } else if (this.$$useinit_anonymous) {
        old = this.$$init_anonymous;
    }
    if (this.$$runtime_anonymous === undefined) return;
    var computed;
    if (this.$$runtime_anonymous !== undefined) {
        delete this.$$runtime_anonymous;
        if (this.$$user_anonymous !== undefined) computed = this.$$user_anonymous;
        else if (this.$$theme_anonymous !== undefined) computed = this.$$theme_anonymous;
        else if (this.$$init_anonymous !== undefined) {
            computed = this.$$init_anonymous;
            this.$$useinit_anonymous = true;
        }
    } else if (this.$$user_anonymous !== undefined) {
        computed = this.$$user_anonymous;
    } else if (this.$$useinit_anonymous) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_anonymous;
    var self = this;
    var promise;
    promise = this._applyAnonymous(computed, old, "anonymous", "resetRuntime");

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

function toggleAnonymous anonymous() {
    return this.setAnonymous(!this.getAnonymous())
}

function isAnonymous anonymous() {
    return this.getAnonymous()
}

function getTabIndex anonymous(value) {
    if (this.$$runtime_tabIndex !== undefined) return this.$$runtime_tabIndex;
    if (this.$$user_tabIndex !== undefined) return this.$$user_tabIndex;
    else return null;
}

function setTabIndex anonymous(value) {
    this.$$setTabIndexImpl.apply(this, arguments);
    return value;
}

function resetTabIndex anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_tabIndex !== undefined) {
        old = this.$$runtime_tabIndex;
    } else if (this.$$user_tabIndex !== undefined) {
        old = this.$$user_tabIndex;
    } else if (this.$$useinit_tabIndex) {
        old = this.$$init_tabIndex;
    }
    if (this.$$user_tabIndex === undefined) return;
    var computed;
    if (this.$$runtime_tabIndex !== undefined) {
        computed = this.$$runtime_tabIndex;
        delete this.$$user_tabIndex;
    } else if (this.$$user_tabIndex !== undefined) {
        delete this.$$user_tabIndex;
        if (this.$$runtime_tabIndex !== undefined) computed = this.$$runtime_tabIndex;
        if (this.$$theme_tabIndex !== undefined) computed = this.$$theme_tabIndex;
        else if (this.$$init_tabIndex !== undefined) {
            computed = this.$$init_tabIndex;
            this.$$useinit_tabIndex = true;
        }
    } else if (this.$$useinit_tabIndex) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyTabIndex(computed, old, "tabIndex", "reset");

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

function initTabIndex anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_tabIndex !== undefined) {
            old = this.$$runtime_tabIndex;
        } else if (this.$$user_tabIndex !== undefined) {
            old = this.$$user_tabIndex;
        } else if (this.$$useinit_tabIndex) {
            old = this.$$init_tabIndex;
        }
        if (equ.call(this, this.$$init_tabIndex, value)) return value;
        var computed;
        if (this.$$runtime_tabIndex !== undefined) {
            computed = this.$$runtime_tabIndex;
            this.$$init_tabIndex = value;
        } else if (this.$$user_tabIndex !== undefined) {
            computed = this.$$user_tabIndex;
            this.$$init_tabIndex = value;
        } else if (this.$$useinit_tabIndex) {
            computed = this.$$init_tabIndex = value;
        } else {
            computed = this.$$init_tabIndex = value;
            this.$$useinit_tabIndex = true;
        }
        if (computed === undefined) computed = null;
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyTabIndex(computed, old, "tabIndex", "init");

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

function setRuntimeTabIndex anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_tabIndex !== undefined) {
            old = this.$$runtime_tabIndex;
        } else if (this.$$user_tabIndex !== undefined) {
            old = this.$$user_tabIndex;
        } else if (this.$$useinit_tabIndex) {
            old = this.$$init_tabIndex;
        }
        if (equ.call(this, this.$$runtime_tabIndex, value)) return value;
        var computed;
        if (this.$$runtime_tabIndex !== undefined) {
            computed = this.$$runtime_tabIndex = value;
        } else if (this.$$user_tabIndex !== undefined) {
            computed = this.$$runtime_tabIndex = value;
        } else if (this.$$useinit_tabIndex) {
            delete this.$$useinit_tabIndex;
            computed = this.$$runtime_tabIndex = value;
        } else {
            computed = this.$$runtime_tabIndex = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyTabIndex(computed, old, "tabIndex", "setRuntime");

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

function resetRuntimeTabIndex anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_tabIndex !== undefined) {
        old = this.$$runtime_tabIndex;
    } else if (this.$$user_tabIndex !== undefined) {
        old = this.$$user_tabIndex;
    } else if (this.$$useinit_tabIndex) {
        old = this.$$init_tabIndex;
    }
    if (this.$$runtime_tabIndex === undefined) return;
    var computed;
    if (this.$$runtime_tabIndex !== undefined) {
        delete this.$$runtime_tabIndex;
        if (this.$$user_tabIndex !== undefined) computed = this.$$user_tabIndex;
        else if (this.$$theme_tabIndex !== undefined) computed = this.$$theme_tabIndex;
        else if (this.$$init_tabIndex !== undefined) {
            computed = this.$$init_tabIndex;
            this.$$useinit_tabIndex = true;
        }
    } else if (this.$$user_tabIndex !== undefined) {
        computed = this.$$user_tabIndex;
    } else if (this.$$useinit_tabIndex) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyTabIndex(computed, old, "tabIndex", "resetRuntime");

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

function getFocusable anonymous(value) {
    if (this.$$runtime_focusable !== undefined) return this.$$runtime_focusable;
    if (this.$$user_focusable !== undefined) return this.$$user_focusable;
    else return this.$$init_focusable;
}

function setFocusable anonymous(value) {
    this.$$setFocusableImpl.apply(this, arguments);
    return value;
}

function resetFocusable anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_focusable !== undefined) {
        old = this.$$runtime_focusable;
    } else if (this.$$user_focusable !== undefined) {
        old = this.$$user_focusable;
    } else if (this.$$useinit_focusable) {
        old = this.$$init_focusable;
    }
    if (this.$$user_focusable === undefined) return;
    var computed;
    if (this.$$runtime_focusable !== undefined) {
        computed = this.$$runtime_focusable;
        delete this.$$user_focusable;
    } else if (this.$$user_focusable !== undefined) {
        delete this.$$user_focusable;
        if (this.$$runtime_focusable !== undefined) computed = this.$$runtime_focusable;
        if (this.$$theme_focusable !== undefined) computed = this.$$theme_focusable;
        else if (this.$$init_focusable !== undefined) {
            computed = this.$$init_focusable;
            this.$$useinit_focusable = true;
        }
    } else if (this.$$useinit_focusable) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_focusable;
    var self = this;
    var promise;
    promise = this._applyFocusable(computed, old, "focusable", "reset");

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

function initFocusable anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_focusable !== undefined) {
        old = this.$$runtime_focusable;
    } else if (this.$$user_focusable !== undefined) {
        old = this.$$user_focusable;
    } else if (this.$$useinit_focusable) {
        old = this.$$init_focusable;
    }
    var computed;
    if (this.$$runtime_focusable !== undefined) {
        computed = this.$$runtime_focusable;
    } else if (this.$$user_focusable !== undefined) {
        computed = this.$$user_focusable;
    } else if (this.$$useinit_focusable) {
        computed = this.$$init_focusable;
    } else {
        computed = this.$$init_focusable;
        this.$$useinit_focusable = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyFocusable(computed, old, "focusable", "init");

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

function setRuntimeFocusable anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_focusable !== undefined) {
            old = this.$$runtime_focusable;
        } else if (this.$$user_focusable !== undefined) {
            old = this.$$user_focusable;
        } else if (this.$$useinit_focusable) {
            old = this.$$init_focusable;
        }
        if (equ.call(this, this.$$runtime_focusable, value)) return value;
        var computed;
        if (this.$$runtime_focusable !== undefined) {
            computed = this.$$runtime_focusable = value;
        } else if (this.$$user_focusable !== undefined) {
            computed = this.$$runtime_focusable = value;
        } else if (this.$$useinit_focusable) {
            delete this.$$useinit_focusable;
            computed = this.$$runtime_focusable = value;
        } else {
            computed = this.$$runtime_focusable = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_focusable;
        var self = this;
        var promise;
        promise = this._applyFocusable(computed, old, "focusable", "setRuntime");

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

function resetRuntimeFocusable anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_focusable !== undefined) {
        old = this.$$runtime_focusable;
    } else if (this.$$user_focusable !== undefined) {
        old = this.$$user_focusable;
    } else if (this.$$useinit_focusable) {
        old = this.$$init_focusable;
    }
    if (this.$$runtime_focusable === undefined) return;
    var computed;
    if (this.$$runtime_focusable !== undefined) {
        delete this.$$runtime_focusable;
        if (this.$$user_focusable !== undefined) computed = this.$$user_focusable;
        else if (this.$$theme_focusable !== undefined) computed = this.$$theme_focusable;
        else if (this.$$init_focusable !== undefined) {
            computed = this.$$init_focusable;
            this.$$useinit_focusable = true;
        }
    } else if (this.$$user_focusable !== undefined) {
        computed = this.$$user_focusable;
    } else if (this.$$useinit_focusable) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_focusable;
    var self = this;
    var promise;
    promise = this._applyFocusable(computed, old, "focusable", "resetRuntime");

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

function toggleFocusable anonymous() {
    return this.setFocusable(!this.getFocusable())
}

function isFocusable anonymous() {
    return this.getFocusable()
}

function getKeepFocus anonymous(value) {
    if (this.$$runtime_keepFocus !== undefined) return this.$$runtime_keepFocus;
    if (this.$$user_keepFocus !== undefined) return this.$$user_keepFocus;
    else return this.$$init_keepFocus;
}

function setKeepFocus anonymous(value) {
    this.$$setKeepFocusImpl.apply(this, arguments);
    return value;
}

function resetKeepFocus anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_keepFocus !== undefined) {
        old = this.$$runtime_keepFocus;
    } else if (this.$$user_keepFocus !== undefined) {
        old = this.$$user_keepFocus;
    } else if (this.$$useinit_keepFocus) {
        old = this.$$init_keepFocus;
    }
    if (this.$$user_keepFocus === undefined) return;
    var computed;
    if (this.$$runtime_keepFocus !== undefined) {
        computed = this.$$runtime_keepFocus;
        delete this.$$user_keepFocus;
    } else if (this.$$user_keepFocus !== undefined) {
        delete this.$$user_keepFocus;
        if (this.$$runtime_keepFocus !== undefined) computed = this.$$runtime_keepFocus;
        if (this.$$theme_keepFocus !== undefined) computed = this.$$theme_keepFocus;
        else if (this.$$init_keepFocus !== undefined) {
            computed = this.$$init_keepFocus;
            this.$$useinit_keepFocus = true;
        }
    } else if (this.$$useinit_keepFocus) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_keepFocus;
    var self = this;
    var promise;
    promise = this._applyKeepFocus(computed, old, "keepFocus", "reset");

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

function initKeepFocus anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_keepFocus !== undefined) {
        old = this.$$runtime_keepFocus;
    } else if (this.$$user_keepFocus !== undefined) {
        old = this.$$user_keepFocus;
    } else if (this.$$useinit_keepFocus) {
        old = this.$$init_keepFocus;
    }
    var computed;
    if (this.$$runtime_keepFocus !== undefined) {
        computed = this.$$runtime_keepFocus;
    } else if (this.$$user_keepFocus !== undefined) {
        computed = this.$$user_keepFocus;
    } else if (this.$$useinit_keepFocus) {
        computed = this.$$init_keepFocus;
    } else {
        computed = this.$$init_keepFocus;
        this.$$useinit_keepFocus = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyKeepFocus(computed, old, "keepFocus", "init");

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

function setRuntimeKeepFocus anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_keepFocus !== undefined) {
            old = this.$$runtime_keepFocus;
        } else if (this.$$user_keepFocus !== undefined) {
            old = this.$$user_keepFocus;
        } else if (this.$$useinit_keepFocus) {
            old = this.$$init_keepFocus;
        }
        if (equ.call(this, this.$$runtime_keepFocus, value)) return value;
        var computed;
        if (this.$$runtime_keepFocus !== undefined) {
            computed = this.$$runtime_keepFocus = value;
        } else if (this.$$user_keepFocus !== undefined) {
            computed = this.$$runtime_keepFocus = value;
        } else if (this.$$useinit_keepFocus) {
            delete this.$$useinit_keepFocus;
            computed = this.$$runtime_keepFocus = value;
        } else {
            computed = this.$$runtime_keepFocus = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_keepFocus;
        var self = this;
        var promise;
        promise = this._applyKeepFocus(computed, old, "keepFocus", "setRuntime");

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

function resetRuntimeKeepFocus anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_keepFocus !== undefined) {
        old = this.$$runtime_keepFocus;
    } else if (this.$$user_keepFocus !== undefined) {
        old = this.$$user_keepFocus;
    } else if (this.$$useinit_keepFocus) {
        old = this.$$init_keepFocus;
    }
    if (this.$$runtime_keepFocus === undefined) return;
    var computed;
    if (this.$$runtime_keepFocus !== undefined) {
        delete this.$$runtime_keepFocus;
        if (this.$$user_keepFocus !== undefined) computed = this.$$user_keepFocus;
        else if (this.$$theme_keepFocus !== undefined) computed = this.$$theme_keepFocus;
        else if (this.$$init_keepFocus !== undefined) {
            computed = this.$$init_keepFocus;
            this.$$useinit_keepFocus = true;
        }
    } else if (this.$$user_keepFocus !== undefined) {
        computed = this.$$user_keepFocus;
    } else if (this.$$useinit_keepFocus) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_keepFocus;
    var self = this;
    var promise;
    promise = this._applyKeepFocus(computed, old, "keepFocus", "resetRuntime");

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

function toggleKeepFocus anonymous() {
    return this.setKeepFocus(!this.getKeepFocus())
}

function isKeepFocus anonymous() {
    return this.getKeepFocus()
}

function getKeepActive anonymous(value) {
    if (this.$$runtime_keepActive !== undefined) return this.$$runtime_keepActive;
    if (this.$$user_keepActive !== undefined) return this.$$user_keepActive;
    else return this.$$init_keepActive;
}

function setKeepActive anonymous(value) {
    this.$$setKeepActiveImpl.apply(this, arguments);
    return value;
}

function resetKeepActive anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_keepActive !== undefined) {
        old = this.$$runtime_keepActive;
    } else if (this.$$user_keepActive !== undefined) {
        old = this.$$user_keepActive;
    } else if (this.$$useinit_keepActive) {
        old = this.$$init_keepActive;
    }
    if (this.$$user_keepActive === undefined) return;
    var computed;
    if (this.$$runtime_keepActive !== undefined) {
        computed = this.$$runtime_keepActive;
        delete this.$$user_keepActive;
    } else if (this.$$user_keepActive !== undefined) {
        delete this.$$user_keepActive;
        if (this.$$runtime_keepActive !== undefined) computed = this.$$runtime_keepActive;
        if (this.$$theme_keepActive !== undefined) computed = this.$$theme_keepActive;
        else if (this.$$init_keepActive !== undefined) {
            computed = this.$$init_keepActive;
            this.$$useinit_keepActive = true;
        }
    } else if (this.$$useinit_keepActive) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_keepActive;
    var self = this;
    var promise;
    promise = this._applyKeepActive(computed, old, "keepActive", "reset");

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

function initKeepActive anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_keepActive !== undefined) {
        old = this.$$runtime_keepActive;
    } else if (this.$$user_keepActive !== undefined) {
        old = this.$$user_keepActive;
    } else if (this.$$useinit_keepActive) {
        old = this.$$init_keepActive;
    }
    var computed;
    if (this.$$runtime_keepActive !== undefined) {
        computed = this.$$runtime_keepActive;
    } else if (this.$$user_keepActive !== undefined) {
        computed = this.$$user_keepActive;
    } else if (this.$$useinit_keepActive) {
        computed = this.$$init_keepActive;
    } else {
        computed = this.$$init_keepActive;
        this.$$useinit_keepActive = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyKeepActive(computed, old, "keepActive", "init");

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

function setRuntimeKeepActive anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_keepActive !== undefined) {
            old = this.$$runtime_keepActive;
        } else if (this.$$user_keepActive !== undefined) {
            old = this.$$user_keepActive;
        } else if (this.$$useinit_keepActive) {
            old = this.$$init_keepActive;
        }
        if (equ.call(this, this.$$runtime_keepActive, value)) return value;
        var computed;
        if (this.$$runtime_keepActive !== undefined) {
            computed = this.$$runtime_keepActive = value;
        } else if (this.$$user_keepActive !== undefined) {
            computed = this.$$runtime_keepActive = value;
        } else if (this.$$useinit_keepActive) {
            delete this.$$useinit_keepActive;
            computed = this.$$runtime_keepActive = value;
        } else {
            computed = this.$$runtime_keepActive = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_keepActive;
        var self = this;
        var promise;
        promise = this._applyKeepActive(computed, old, "keepActive", "setRuntime");

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

function resetRuntimeKeepActive anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_keepActive !== undefined) {
        old = this.$$runtime_keepActive;
    } else if (this.$$user_keepActive !== undefined) {
        old = this.$$user_keepActive;
    } else if (this.$$useinit_keepActive) {
        old = this.$$init_keepActive;
    }
    if (this.$$runtime_keepActive === undefined) return;
    var computed;
    if (this.$$runtime_keepActive !== undefined) {
        delete this.$$runtime_keepActive;
        if (this.$$user_keepActive !== undefined) computed = this.$$user_keepActive;
        else if (this.$$theme_keepActive !== undefined) computed = this.$$theme_keepActive;
        else if (this.$$init_keepActive !== undefined) {
            computed = this.$$init_keepActive;
            this.$$useinit_keepActive = true;
        }
    } else if (this.$$user_keepActive !== undefined) {
        computed = this.$$user_keepActive;
    } else if (this.$$useinit_keepActive) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_keepActive;
    var self = this;
    var promise;
    promise = this._applyKeepActive(computed, old, "keepActive", "resetRuntime");

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

function toggleKeepActive anonymous() {
    return this.setKeepActive(!this.getKeepActive())
}

function isKeepActive anonymous() {
    return this.getKeepActive()
}

function getDraggable anonymous(value) {
    if (this.$$runtime_draggable !== undefined) return this.$$runtime_draggable;
    if (this.$$user_draggable !== undefined) return this.$$user_draggable;
    else return this.$$init_draggable;
}

function setDraggable anonymous(value) {
    this.$$setDraggableImpl.apply(this, arguments);
    return value;
}

function resetDraggable anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_draggable !== undefined) {
        old = this.$$runtime_draggable;
    } else if (this.$$user_draggable !== undefined) {
        old = this.$$user_draggable;
    } else if (this.$$useinit_draggable) {
        old = this.$$init_draggable;
    }
    if (this.$$user_draggable === undefined) return;
    var computed;
    if (this.$$runtime_draggable !== undefined) {
        computed = this.$$runtime_draggable;
        delete this.$$user_draggable;
    } else if (this.$$user_draggable !== undefined) {
        delete this.$$user_draggable;
        if (this.$$runtime_draggable !== undefined) computed = this.$$runtime_draggable;
        if (this.$$theme_draggable !== undefined) computed = this.$$theme_draggable;
        else if (this.$$init_draggable !== undefined) {
            computed = this.$$init_draggable;
            this.$$useinit_draggable = true;
        }
    } else if (this.$$useinit_draggable) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_draggable;
    var self = this;
    var promise;
    promise = this._applyDraggable(computed, old, "draggable", "reset");

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

function initDraggable anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_draggable !== undefined) {
        old = this.$$runtime_draggable;
    } else if (this.$$user_draggable !== undefined) {
        old = this.$$user_draggable;
    } else if (this.$$useinit_draggable) {
        old = this.$$init_draggable;
    }
    var computed;
    if (this.$$runtime_draggable !== undefined) {
        computed = this.$$runtime_draggable;
    } else if (this.$$user_draggable !== undefined) {
        computed = this.$$user_draggable;
    } else if (this.$$useinit_draggable) {
        computed = this.$$init_draggable;
    } else {
        computed = this.$$init_draggable;
        this.$$useinit_draggable = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyDraggable(computed, old, "draggable", "init");

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

function setRuntimeDraggable anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_draggable !== undefined) {
            old = this.$$runtime_draggable;
        } else if (this.$$user_draggable !== undefined) {
            old = this.$$user_draggable;
        } else if (this.$$useinit_draggable) {
            old = this.$$init_draggable;
        }
        if (equ.call(this, this.$$runtime_draggable, value)) return value;
        var computed;
        if (this.$$runtime_draggable !== undefined) {
            computed = this.$$runtime_draggable = value;
        } else if (this.$$user_draggable !== undefined) {
            computed = this.$$runtime_draggable = value;
        } else if (this.$$useinit_draggable) {
            delete this.$$useinit_draggable;
            computed = this.$$runtime_draggable = value;
        } else {
            computed = this.$$runtime_draggable = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_draggable;
        var self = this;
        var promise;
        promise = this._applyDraggable(computed, old, "draggable", "setRuntime");

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

function resetRuntimeDraggable anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_draggable !== undefined) {
        old = this.$$runtime_draggable;
    } else if (this.$$user_draggable !== undefined) {
        old = this.$$user_draggable;
    } else if (this.$$useinit_draggable) {
        old = this.$$init_draggable;
    }
    if (this.$$runtime_draggable === undefined) return;
    var computed;
    if (this.$$runtime_draggable !== undefined) {
        delete this.$$runtime_draggable;
        if (this.$$user_draggable !== undefined) computed = this.$$user_draggable;
        else if (this.$$theme_draggable !== undefined) computed = this.$$theme_draggable;
        else if (this.$$init_draggable !== undefined) {
            computed = this.$$init_draggable;
            this.$$useinit_draggable = true;
        }
    } else if (this.$$user_draggable !== undefined) {
        computed = this.$$user_draggable;
    } else if (this.$$useinit_draggable) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_draggable;
    var self = this;
    var promise;
    promise = this._applyDraggable(computed, old, "draggable", "resetRuntime");

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

function toggleDraggable anonymous() {
    return this.setDraggable(!this.getDraggable())
}

function isDraggable anonymous() {
    return this.getDraggable()
}

function getDroppable anonymous(value) {
    if (this.$$runtime_droppable !== undefined) return this.$$runtime_droppable;
    if (this.$$user_droppable !== undefined) return this.$$user_droppable;
    else return this.$$init_droppable;
}

function setDroppable anonymous(value) {
    this.$$setDroppableImpl.apply(this, arguments);
    return value;
}

function resetDroppable anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_droppable !== undefined) {
        old = this.$$runtime_droppable;
    } else if (this.$$user_droppable !== undefined) {
        old = this.$$user_droppable;
    } else if (this.$$useinit_droppable) {
        old = this.$$init_droppable;
    }
    if (this.$$user_droppable === undefined) return;
    var computed;
    if (this.$$runtime_droppable !== undefined) {
        computed = this.$$runtime_droppable;
        delete this.$$user_droppable;
    } else if (this.$$user_droppable !== undefined) {
        delete this.$$user_droppable;
        if (this.$$runtime_droppable !== undefined) computed = this.$$runtime_droppable;
        if (this.$$theme_droppable !== undefined) computed = this.$$theme_droppable;
        else if (this.$$init_droppable !== undefined) {
            computed = this.$$init_droppable;
            this.$$useinit_droppable = true;
        }
    } else if (this.$$useinit_droppable) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_droppable;
    var self = this;
    var promise;
    promise = this._applyDroppable(computed, old, "droppable", "reset");

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

function initDroppable anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_droppable !== undefined) {
        old = this.$$runtime_droppable;
    } else if (this.$$user_droppable !== undefined) {
        old = this.$$user_droppable;
    } else if (this.$$useinit_droppable) {
        old = this.$$init_droppable;
    }
    var computed;
    if (this.$$runtime_droppable !== undefined) {
        computed = this.$$runtime_droppable;
    } else if (this.$$user_droppable !== undefined) {
        computed = this.$$user_droppable;
    } else if (this.$$useinit_droppable) {
        computed = this.$$init_droppable;
    } else {
        computed = this.$$init_droppable;
        this.$$useinit_droppable = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyDroppable(computed, old, "droppable", "init");

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

function setRuntimeDroppable anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_droppable !== undefined) {
            old = this.$$runtime_droppable;
        } else if (this.$$user_droppable !== undefined) {
            old = this.$$user_droppable;
        } else if (this.$$useinit_droppable) {
            old = this.$$init_droppable;
        }
        if (equ.call(this, this.$$runtime_droppable, value)) return value;
        var computed;
        if (this.$$runtime_droppable !== undefined) {
            computed = this.$$runtime_droppable = value;
        } else if (this.$$user_droppable !== undefined) {
            computed = this.$$runtime_droppable = value;
        } else if (this.$$useinit_droppable) {
            delete this.$$useinit_droppable;
            computed = this.$$runtime_droppable = value;
        } else {
            computed = this.$$runtime_droppable = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_droppable;
        var self = this;
        var promise;
        promise = this._applyDroppable(computed, old, "droppable", "setRuntime");

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

function resetRuntimeDroppable anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_droppable !== undefined) {
        old = this.$$runtime_droppable;
    } else if (this.$$user_droppable !== undefined) {
        old = this.$$user_droppable;
    } else if (this.$$useinit_droppable) {
        old = this.$$init_droppable;
    }
    if (this.$$runtime_droppable === undefined) return;
    var computed;
    if (this.$$runtime_droppable !== undefined) {
        delete this.$$runtime_droppable;
        if (this.$$user_droppable !== undefined) computed = this.$$user_droppable;
        else if (this.$$theme_droppable !== undefined) computed = this.$$theme_droppable;
        else if (this.$$init_droppable !== undefined) {
            computed = this.$$init_droppable;
            this.$$useinit_droppable = true;
        }
    } else if (this.$$user_droppable !== undefined) {
        computed = this.$$user_droppable;
    } else if (this.$$useinit_droppable) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_droppable;
    var self = this;
    var promise;
    promise = this._applyDroppable(computed, old, "droppable", "resetRuntime");

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

function toggleDroppable anonymous() {
    return this.setDroppable(!this.getDroppable())
}

function isDroppable anonymous() {
    return this.getDroppable()
}

function getSelectable anonymous(value) {
    if (this.$$runtime_selectable !== undefined) return this.$$runtime_selectable;
    if (this.$$user_selectable !== undefined) return this.$$user_selectable;
    else return this.$$init_selectable;
}

function setSelectable anonymous(value) {
    this.$$setSelectableImpl.apply(this, arguments);
    return value;
}

function resetSelectable anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_selectable !== undefined) {
        old = this.$$runtime_selectable;
    } else if (this.$$user_selectable !== undefined) {
        old = this.$$user_selectable;
    } else if (this.$$useinit_selectable) {
        old = this.$$init_selectable;
    }
    if (this.$$user_selectable === undefined) return;
    var computed;
    if (this.$$runtime_selectable !== undefined) {
        computed = this.$$runtime_selectable;
        delete this.$$user_selectable;
    } else if (this.$$user_selectable !== undefined) {
        delete this.$$user_selectable;
        if (this.$$runtime_selectable !== undefined) computed = this.$$runtime_selectable;
        if (this.$$theme_selectable !== undefined) computed = this.$$theme_selectable;
        else if (this.$$init_selectable !== undefined) {
            computed = this.$$init_selectable;
            this.$$useinit_selectable = true;
        }
    } else if (this.$$useinit_selectable) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_selectable;
    var self = this;
    var promise;
    promise = this._applySelectable(computed, old, "selectable", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeSelectable')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeSelectable', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeSelectableAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeSelectableAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initSelectable anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_selectable !== undefined) {
        old = this.$$runtime_selectable;
    } else if (this.$$user_selectable !== undefined) {
        old = this.$$user_selectable;
    } else if (this.$$useinit_selectable) {
        old = this.$$init_selectable;
    }
    var computed;
    if (this.$$runtime_selectable !== undefined) {
        computed = this.$$runtime_selectable;
    } else if (this.$$user_selectable !== undefined) {
        computed = this.$$user_selectable;
    } else if (this.$$useinit_selectable) {
        computed = this.$$init_selectable;
    } else {
        computed = this.$$init_selectable;
        this.$$useinit_selectable = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applySelectable(computed, old, "selectable", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeSelectable')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeSelectable', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeSelectableAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeSelectableAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeSelectable anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_selectable !== undefined) {
            old = this.$$runtime_selectable;
        } else if (this.$$user_selectable !== undefined) {
            old = this.$$user_selectable;
        } else if (this.$$useinit_selectable) {
            old = this.$$init_selectable;
        }
        if (equ.call(this, this.$$runtime_selectable, value)) return value;
        var computed;
        if (this.$$runtime_selectable !== undefined) {
            computed = this.$$runtime_selectable = value;
        } else if (this.$$user_selectable !== undefined) {
            computed = this.$$runtime_selectable = value;
        } else if (this.$$useinit_selectable) {
            delete this.$$useinit_selectable;
            computed = this.$$runtime_selectable = value;
        } else {
            computed = this.$$runtime_selectable = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_selectable;
        var self = this;
        var promise;
        promise = this._applySelectable(computed, old, "selectable", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeSelectable')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeSelectable', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeSelectableAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeSelectableAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeSelectable anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_selectable !== undefined) {
        old = this.$$runtime_selectable;
    } else if (this.$$user_selectable !== undefined) {
        old = this.$$user_selectable;
    } else if (this.$$useinit_selectable) {
        old = this.$$init_selectable;
    }
    if (this.$$runtime_selectable === undefined) return;
    var computed;
    if (this.$$runtime_selectable !== undefined) {
        delete this.$$runtime_selectable;
        if (this.$$user_selectable !== undefined) computed = this.$$user_selectable;
        else if (this.$$theme_selectable !== undefined) computed = this.$$theme_selectable;
        else if (this.$$init_selectable !== undefined) {
            computed = this.$$init_selectable;
            this.$$useinit_selectable = true;
        }
    } else if (this.$$user_selectable !== undefined) {
        computed = this.$$user_selectable;
    } else if (this.$$useinit_selectable) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_selectable;
    var self = this;
    var promise;
    promise = this._applySelectable(computed, old, "selectable", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeSelectable')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeSelectable', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeSelectableAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeSelectableAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function toggleSelectable anonymous() {
    return this.setSelectable(!this.getSelectable())
}

function isSelectable anonymous() {
    return this.getSelectable()
}

function getContextMenu anonymous(value) {
    if (this.$$runtime_contextMenu !== undefined) return this.$$runtime_contextMenu;
    if (this.$$user_contextMenu !== undefined) return this.$$user_contextMenu;
    else return null;
}

function setContextMenu anonymous(value) {
    this.$$setContextMenuImpl.apply(this, arguments);
    return value;
}

function resetContextMenu anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contextMenu !== undefined) {
        old = this.$$runtime_contextMenu;
    } else if (this.$$user_contextMenu !== undefined) {
        old = this.$$user_contextMenu;
    } else if (this.$$useinit_contextMenu) {
        old = this.$$init_contextMenu;
    }
    if (this.$$user_contextMenu === undefined) return;
    var computed;
    if (this.$$runtime_contextMenu !== undefined) {
        computed = this.$$runtime_contextMenu;
        delete this.$$user_contextMenu;
    } else if (this.$$user_contextMenu !== undefined) {
        delete this.$$user_contextMenu;
        if (this.$$runtime_contextMenu !== undefined) computed = this.$$runtime_contextMenu;
        if (this.$$theme_contextMenu !== undefined) computed = this.$$theme_contextMenu;
        else if (this.$$init_contextMenu !== undefined) {
            computed = this.$$init_contextMenu;
            this.$$useinit_contextMenu = true;
        }
    } else if (this.$$useinit_contextMenu) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyContextMenu(computed, old, "contextMenu", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeContextMenu')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeContextMenu', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeContextMenuAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeContextMenuAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initContextMenu anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_contextMenu !== undefined) {
            old = this.$$runtime_contextMenu;
        } else if (this.$$user_contextMenu !== undefined) {
            old = this.$$user_contextMenu;
        } else if (this.$$useinit_contextMenu) {
            old = this.$$init_contextMenu;
        }
        if (equ.call(this, this.$$init_contextMenu, value)) return value;
        var computed;
        if (this.$$runtime_contextMenu !== undefined) {
            computed = this.$$runtime_contextMenu;
            this.$$init_contextMenu = value;
        } else if (this.$$user_contextMenu !== undefined) {
            computed = this.$$user_contextMenu;
            this.$$init_contextMenu = value;
        } else if (this.$$useinit_contextMenu) {
            computed = this.$$init_contextMenu = value;
        } else {
            computed = this.$$init_contextMenu = value;
            this.$$useinit_contextMenu = true;
        }
        if (computed === undefined) computed = null;
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyContextMenu(computed, old, "contextMenu", "init");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeContextMenu')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeContextMenu', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeContextMenuAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeContextMenuAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeContextMenu anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_contextMenu !== undefined) {
            old = this.$$runtime_contextMenu;
        } else if (this.$$user_contextMenu !== undefined) {
            old = this.$$user_contextMenu;
        } else if (this.$$useinit_contextMenu) {
            old = this.$$init_contextMenu;
        }
        if (equ.call(this, this.$$runtime_contextMenu, value)) return value;
        var computed;
        if (this.$$runtime_contextMenu !== undefined) {
            computed = this.$$runtime_contextMenu = value;
        } else if (this.$$user_contextMenu !== undefined) {
            computed = this.$$runtime_contextMenu = value;
        } else if (this.$$useinit_contextMenu) {
            delete this.$$useinit_contextMenu;
            computed = this.$$runtime_contextMenu = value;
        } else {
            computed = this.$$runtime_contextMenu = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyContextMenu(computed, old, "contextMenu", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeContextMenu')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeContextMenu', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeContextMenuAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeContextMenuAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeContextMenu anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_contextMenu !== undefined) {
        old = this.$$runtime_contextMenu;
    } else if (this.$$user_contextMenu !== undefined) {
        old = this.$$user_contextMenu;
    } else if (this.$$useinit_contextMenu) {
        old = this.$$init_contextMenu;
    }
    if (this.$$runtime_contextMenu === undefined) return;
    var computed;
    if (this.$$runtime_contextMenu !== undefined) {
        delete this.$$runtime_contextMenu;
        if (this.$$user_contextMenu !== undefined) computed = this.$$user_contextMenu;
        else if (this.$$theme_contextMenu !== undefined) computed = this.$$theme_contextMenu;
        else if (this.$$init_contextMenu !== undefined) {
            computed = this.$$init_contextMenu;
            this.$$useinit_contextMenu = true;
        }
    } else if (this.$$user_contextMenu !== undefined) {
        computed = this.$$user_contextMenu;
    } else if (this.$$useinit_contextMenu) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyContextMenu(computed, old, "contextMenu", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeContextMenu')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeContextMenu', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeContextMenuAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeContextMenuAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function getNativeContextMenu anonymous(value) {
    if (this.$$runtime_nativeContextMenu !== undefined) return this.$$runtime_nativeContextMenu;
    if (this.$$user_nativeContextMenu !== undefined) return this.$$user_nativeContextMenu;
    else if (this.$$theme_nativeContextMenu !== undefined) return this.$$theme_nativeContextMenu;
    else return this.$$init_nativeContextMenu;
}

function setNativeContextMenu anonymous(value) {
    this.$$setNativeContextMenuImpl.apply(this, arguments);
    return value;
}

function resetNativeContextMenu anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_nativeContextMenu !== undefined) {
        old = this.$$runtime_nativeContextMenu;
    } else if (this.$$user_nativeContextMenu !== undefined) {
        old = this.$$user_nativeContextMenu;
    } else if (this.$$theme_nativeContextMenu !== undefined) {
        old = this.$$theme_nativeContextMenu;
    } else if (this.$$useinit_nativeContextMenu) {
        old = this.$$init_nativeContextMenu;
    }
    if (this.$$user_nativeContextMenu === undefined) return;
    var computed;
    if (this.$$runtime_nativeContextMenu !== undefined) {
        computed = this.$$runtime_nativeContextMenu;
        delete this.$$user_nativeContextMenu;
    } else if (this.$$user_nativeContextMenu !== undefined) {
        delete this.$$user_nativeContextMenu;
        if (this.$$runtime_nativeContextMenu !== undefined) computed = this.$$runtime_nativeContextMenu;
        if (this.$$theme_nativeContextMenu !== undefined) computed = this.$$theme_nativeContextMenu;
        else if (this.$$init_nativeContextMenu !== undefined) {
            computed = this.$$init_nativeContextMenu;
            this.$$useinit_nativeContextMenu = true;
        }
    } else if (this.$$theme_nativeContextMenu !== undefined) {} else if (this.$$useinit_nativeContextMenu) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_nativeContextMenu;
    var self = this;
    var promise;
    promise = this._applyNativeContextMenu(computed, old, "nativeContextMenu", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeNativeContextMenu')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeNativeContextMenu', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeNativeContextMenuAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeNativeContextMenuAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initNativeContextMenu anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_nativeContextMenu !== undefined) {
        old = this.$$runtime_nativeContextMenu;
    } else if (this.$$user_nativeContextMenu !== undefined) {
        old = this.$$user_nativeContextMenu;
    } else if (this.$$theme_nativeContextMenu !== undefined) {
        old = this.$$theme_nativeContextMenu;
    } else if (this.$$useinit_nativeContextMenu) {
        old = this.$$init_nativeContextMenu;
    }
    var computed;
    if (this.$$runtime_nativeContextMenu !== undefined) {
        computed = this.$$runtime_nativeContextMenu;
    } else if (this.$$user_nativeContextMenu !== undefined) {
        computed = this.$$user_nativeContextMenu;
    } else if (this.$$theme_nativeContextMenu !== undefined) {
        computed = this.$$theme_nativeContextMenu;
    } else if (this.$$useinit_nativeContextMenu) {
        computed = this.$$init_nativeContextMenu;
    } else {
        computed = this.$$init_nativeContextMenu;
        this.$$useinit_nativeContextMenu = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyNativeContextMenu(computed, old, "nativeContextMenu", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeNativeContextMenu')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeNativeContextMenu', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeNativeContextMenuAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeNativeContextMenuAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeNativeContextMenu anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_nativeContextMenu !== undefined) {
            old = this.$$runtime_nativeContextMenu;
        } else if (this.$$user_nativeContextMenu !== undefined) {
            old = this.$$user_nativeContextMenu;
        } else if (this.$$theme_nativeContextMenu !== undefined) {
            old = this.$$theme_nativeContextMenu;
        } else if (this.$$useinit_nativeContextMenu) {
            old = this.$$init_nativeContextMenu;
        }
        if (equ.call(this, this.$$runtime_nativeContextMenu, value)) return value;
        var computed;
        if (this.$$runtime_nativeContextMenu !== undefined) {
            computed = this.$$runtime_nativeContextMenu = value;
        } else if (this.$$user_nativeContextMenu !== undefined) {
            computed = this.$$runtime_nativeContextMenu = value;
        } else if (this.$$theme_nativeContextMenu !== undefined) {
            computed = this.$$runtime_nativeContextMenu = value;
        } else if (this.$$useinit_nativeContextMenu) {
            delete this.$$useinit_nativeContextMenu;
            computed = this.$$runtime_nativeContextMenu = value;
        } else {
            computed = this.$$runtime_nativeContextMenu = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_nativeContextMenu;
        var self = this;
        var promise;
        promise = this._applyNativeContextMenu(computed, old, "nativeContextMenu", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeNativeContextMenu')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeNativeContextMenu', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeNativeContextMenuAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeNativeContextMenuAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeNativeContextMenu anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_nativeContextMenu !== undefined) {
        old = this.$$runtime_nativeContextMenu;
    } else if (this.$$user_nativeContextMenu !== undefined) {
        old = this.$$user_nativeContextMenu;
    } else if (this.$$theme_nativeContextMenu !== undefined) {
        old = this.$$theme_nativeContextMenu;
    } else if (this.$$useinit_nativeContextMenu) {
        old = this.$$init_nativeContextMenu;
    }
    if (this.$$runtime_nativeContextMenu === undefined) return;
    var computed;
    if (this.$$runtime_nativeContextMenu !== undefined) {
        delete this.$$runtime_nativeContextMenu;
        if (this.$$user_nativeContextMenu !== undefined) computed = this.$$user_nativeContextMenu;
        else if (this.$$theme_nativeContextMenu !== undefined) computed = this.$$theme_nativeContextMenu;
        else if (this.$$init_nativeContextMenu !== undefined) {
            computed = this.$$init_nativeContextMenu;
            this.$$useinit_nativeContextMenu = true;
        }
    } else if (this.$$user_nativeContextMenu !== undefined) {
        computed = this.$$user_nativeContextMenu;
    } else if (this.$$theme_nativeContextMenu !== undefined) {} else if (this.$$useinit_nativeContextMenu) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_nativeContextMenu;
    var self = this;
    var promise;
    promise = this._applyNativeContextMenu(computed, old, "nativeContextMenu", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeNativeContextMenu')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeNativeContextMenu', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeNativeContextMenuAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeNativeContextMenuAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setThemedNativeContextMenu anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_nativeContextMenu !== undefined) {
            old = this.$$runtime_nativeContextMenu;
        } else if (this.$$user_nativeContextMenu !== undefined) {
            old = this.$$user_nativeContextMenu;
        } else if (this.$$theme_nativeContextMenu !== undefined) {
            old = this.$$theme_nativeContextMenu;
        } else if (this.$$useinit_nativeContextMenu) {
            old = this.$$init_nativeContextMenu;
        }
        if (equ.call(this, this.$$theme_nativeContextMenu, value)) return value;
        var computed;
        if (this.$$runtime_nativeContextMenu !== undefined) {
            computed = this.$$runtime_nativeContextMenu;
            this.$$theme_nativeContextMenu = value;
        } else if (this.$$user_nativeContextMenu !== undefined) {
            computed = this.$$user_nativeContextMenu;
            this.$$theme_nativeContextMenu = value;
        } else if (this.$$theme_nativeContextMenu !== undefined) {
            computed = this.$$theme_nativeContextMenu = value;
        } else if (this.$$useinit_nativeContextMenu) {
            delete this.$$useinit_nativeContextMenu;
            computed = this.$$theme_nativeContextMenu = value;
        } else {
            computed = this.$$theme_nativeContextMenu = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_nativeContextMenu;
        var self = this;
        var promise;
        promise = this._applyNativeContextMenu(computed, old, "nativeContextMenu", "setThemed");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeNativeContextMenu')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeNativeContextMenu', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeNativeContextMenuAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeNativeContextMenuAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetThemedNativeContextMenu anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_nativeContextMenu !== undefined) {
        old = this.$$runtime_nativeContextMenu;
    } else if (this.$$user_nativeContextMenu !== undefined) {
        old = this.$$user_nativeContextMenu;
    } else if (this.$$theme_nativeContextMenu !== undefined) {
        old = this.$$theme_nativeContextMenu;
    } else if (this.$$useinit_nativeContextMenu) {
        old = this.$$init_nativeContextMenu;
    }
    if (this.$$theme_nativeContextMenu === undefined) return;
    var computed;
    if (this.$$runtime_nativeContextMenu !== undefined) {
        computed = this.$$runtime_nativeContextMenu;
        delete this.$$theme_nativeContextMenu;
    } else if (this.$$user_nativeContextMenu !== undefined) {
        computed = this.$$user_nativeContextMenu;
        delete this.$$theme_nativeContextMenu;
    } else if (this.$$theme_nativeContextMenu !== undefined) {
        delete this.$$theme_nativeContextMenu;
        if (this.$$init_nativeContextMenu !== undefined) {
            computed = this.$$init_nativeContextMenu;
            this.$$useinit_nativeContextMenu = true;
        }
    } else if (this.$$useinit_nativeContextMenu) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_nativeContextMenu;
    var self = this;
    var promise;
    promise = this._applyNativeContextMenu(computed, old, "nativeContextMenu", "resetThemed");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeNativeContextMenu')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeNativeContextMenu', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeNativeContextMenuAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeNativeContextMenuAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function toggleNativeContextMenu anonymous() {
    return this.setNativeContextMenu(!this.getNativeContextMenu())
}

function isNativeContextMenu anonymous() {
    return this.getNativeContextMenu()
}

function getAppearance anonymous(value) {
    if (this.$$runtime_appearance !== undefined) return this.$$runtime_appearance;
    if (this.$$user_appearance !== undefined) return this.$$user_appearance;
    else return this.$$init_appearance;
}

function setAppearance anonymous(value) {
    this.$$setAppearanceImpl.apply(this, arguments);
    return value;
}

function resetAppearance anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_appearance !== undefined) {
        old = this.$$runtime_appearance;
    } else if (this.$$user_appearance !== undefined) {
        old = this.$$user_appearance;
    } else if (this.$$useinit_appearance) {
        old = this.$$init_appearance;
    }
    if (this.$$user_appearance === undefined) return;
    var computed;
    if (this.$$runtime_appearance !== undefined) {
        computed = this.$$runtime_appearance;
        delete this.$$user_appearance;
    } else if (this.$$user_appearance !== undefined) {
        delete this.$$user_appearance;
        if (this.$$runtime_appearance !== undefined) computed = this.$$runtime_appearance;
        if (this.$$theme_appearance !== undefined) computed = this.$$theme_appearance;
        else if (this.$$init_appearance !== undefined) {
            computed = this.$$init_appearance;
            this.$$useinit_appearance = true;
        }
    } else if (this.$$useinit_appearance) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_appearance;
    var self = this;
    var promise;
    promise = this._applyAppearance(computed, old, "appearance", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAppearance')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAppearance', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAppearanceAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAppearanceAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initAppearance anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_appearance !== undefined) {
        old = this.$$runtime_appearance;
    } else if (this.$$user_appearance !== undefined) {
        old = this.$$user_appearance;
    } else if (this.$$useinit_appearance) {
        old = this.$$init_appearance;
    }
    var computed;
    if (this.$$runtime_appearance !== undefined) {
        computed = this.$$runtime_appearance;
    } else if (this.$$user_appearance !== undefined) {
        computed = this.$$user_appearance;
    } else if (this.$$useinit_appearance) {
        computed = this.$$init_appearance;
    } else {
        computed = this.$$init_appearance;
        this.$$useinit_appearance = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyAppearance(computed, old, "appearance", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAppearance')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAppearance', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAppearanceAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAppearanceAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeAppearance anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_appearance !== undefined) {
            old = this.$$runtime_appearance;
        } else if (this.$$user_appearance !== undefined) {
            old = this.$$user_appearance;
        } else if (this.$$useinit_appearance) {
            old = this.$$init_appearance;
        }
        if (equ.call(this, this.$$runtime_appearance, value)) return value;
        var computed;
        if (this.$$runtime_appearance !== undefined) {
            computed = this.$$runtime_appearance = value;
        } else if (this.$$user_appearance !== undefined) {
            computed = this.$$runtime_appearance = value;
        } else if (this.$$useinit_appearance) {
            delete this.$$useinit_appearance;
            computed = this.$$runtime_appearance = value;
        } else {
            computed = this.$$runtime_appearance = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_appearance;
        var self = this;
        var promise;
        promise = this._applyAppearance(computed, old, "appearance", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeAppearance')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAppearance', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeAppearanceAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeAppearanceAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeAppearance anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_appearance !== undefined) {
        old = this.$$runtime_appearance;
    } else if (this.$$user_appearance !== undefined) {
        old = this.$$user_appearance;
    } else if (this.$$useinit_appearance) {
        old = this.$$init_appearance;
    }
    if (this.$$runtime_appearance === undefined) return;
    var computed;
    if (this.$$runtime_appearance !== undefined) {
        delete this.$$runtime_appearance;
        if (this.$$user_appearance !== undefined) computed = this.$$user_appearance;
        else if (this.$$theme_appearance !== undefined) computed = this.$$theme_appearance;
        else if (this.$$init_appearance !== undefined) {
            computed = this.$$init_appearance;
            this.$$useinit_appearance = true;
        }
    } else if (this.$$user_appearance !== undefined) {
        computed = this.$$user_appearance;
    } else if (this.$$useinit_appearance) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_appearance;
    var self = this;
    var promise;
    promise = this._applyAppearance(computed, old, "appearance", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAppearance')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAppearance', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAppearanceAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAppearanceAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function _getLayout() {
    return this.__kJ
}

function _setLayout(n) {
    this.__kJ && this.__kJ.connectToWidget(null);
    n && n.connectToWidget(this);
    this.__kJ = n;
    qx.ui.core.queue.Layout.add(this)
}

function setLayoutParent(n) {
    if (this.$$parent !== n) {
        var t = this.getContentElement();
        this.$$parent && !this.$$parent.$$disposed && this.$$parent.getContentElement().remove(t);
        this.$$parent = n || null;
        n && !n.$$disposed && this.$$parent.getContentElement().add(t);
        this.$$refreshInheritables();
        qx.ui.core.queue.Visibility.add(this)
    }
}

function renderLayout(t, i, r, u) {
    var f = qx.ui.core.LayoutItem.prototype.renderLayout.call(this, t, i, r, u),
        a;
    if (!f || qx.lang.Object.isEmpty(f) && !this._updateInsets) return null;
    var v = this.getContentElement(),
        l = f.size || this._updateInsets,
        s = n,
        e = {};
    if (f.position && (e.left = t + s, e.top = i + s), (l || f.margin) && (e.width = r + s, e.height = u + s), Object.keys(e).length > 0 && v.setStyles(e), l || f.local || f.margin)
        if (this.__kJ && this.hasLayoutChildren()) {
            var h = this.getInsets(),
                y = r - h.left - h.right,
                p = u - h.top - h.bottom,
                c = this.getDecorator(),
                o = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                };
            c && (c = qx.theme.manager.Decoration.getInstance().resolve(c), o = c.getPadding());
            a = {
                top: this.getPaddingTop() + o.top,
                right: this.getPaddingRight() + o.right,
                bottom: this.getPaddingBottom() + o.bottom,
                left: this.getPaddingLeft() + o.left
            };
            this.__kJ.renderLayout(y, p, a)
        } else if (this.hasLayoutChildren()) throw new Error(yi + this._findTopControl() + ui);
    return f.position && this.hasListener(ot) && this.fireDataEvent(ot, this.getBounds()), f.size && this.hasListener(yt) && this.fireDataEvent(yt, this.getBounds()), delete this._updateInsets, f
}

function clearSeparators() {
    var n = this.__kK,
        r, u, i, t, f;
    if (n) {
        for (r = qx.ui.core.Widget.__kG, u = this.getContentElement(), t = 0, f = n.length; t < f; t++) i = n[t], r.poolObject(i), u.remove(i.getContentElement());
        n.length = 0
    }
}

function renderSeparator(t, i) {
    var f = qx.ui.core.Widget.__kG.getObject(qx.ui.core.Widget),
        u, r;
    f.set({
        decorator: t
    });
    u = f.getContentElement();
    this.getContentElement().add(u);
    r = u.getDomElement();
    r ? (r.style.top = i.top + n, r.style.left = i.left + n, r.style.width = i.width + n, r.style.height = i.height + n) : u.setStyles({
        left: i.left + n,
        top: i.top + n,
        width: i.width + n,
        height: i.height + n
    });
    this.__kK || (this.__kK = []);
    this.__kK.push(f)
}

function _computeSizeHint() {
    var e = this.getWidth(),
        t = this.getMinWidth(),
        i = this.getMaxWidth(),
        o = this.getHeight(),
        r = this.getMinHeight(),
        u = this.getMaxHeight(),
        n = this._getContentHint(),
        f = this.getInsets(),
        s = f.left + f.right,
        h = f.top + f.bottom;
    return e == null && (e = n.width + s), o == null && (o = n.height + h), t == null && (t = s, n.minWidth != null && (t += n.minWidth, t > i && i != null && (t = i))), r == null && (r = h, n.minHeight != null && (r += n.minHeight, r > u && u != null && (r = u))), i == null && (n.maxWidth == null ? i = Infinity : (i = n.maxWidth + s, i < t && t != null && (i = t))), u == null && (n.maxHeight == null ? u = Infinity : (u = n.maxHeight + h, u < r && r != null && (u = r))), {
        width: e,
        minWidth: t,
        maxWidth: i,
        height: o,
        minHeight: r,
        maxHeight: u
    }
}

function invalidateLayoutCache() {
    qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);
    this.__kJ && this.__kJ.invalidateLayoutCache()
}

function _getContentHint() {
    var n = this.__kJ;
    return n ? this.hasLayoutChildren() ? n.getSizeHint() : {
        width: 0,
        height: 0
    } : {
        width: 100,
        height: 50
    }
}

function _getHeightForWidth(n) {
    var t = this.getInsets(),
        f = t.left + t.right,
        e = t.top + t.bottom,
        r = n - f,
        u = 0,
        i = this._getLayout();
    return u = i && i.hasHeightForWidth() ? i.getHeightForWidth(r) : this._getContentHeightForWidth(r), u + e
}

function _getContentHeightForWidth() {
    throw new Error(rr);
}

function getInsets() {
    var t = this.getPaddingTop(),
        i = this.getPaddingRight(),
        r = this.getPaddingBottom(),
        u = this.getPaddingLeft(),
        f, n;
    return this.getDecorator() && (f = qx.theme.manager.Decoration.getInstance().resolve(this.getDecorator()), n = f.getInsets(), t += n.top, i += n.right, r += n.bottom, u += n.left), {
        top: t,
        right: i,
        bottom: r,
        left: u
    }
}

function getInnerSize() {
    var t = this.getBounds(),
        n;
    return t ? (n = this.getInsets(), {
        width: t.width - n.left - n.right,
        height: t.height - n.top - n.bottom
    }) : null
}

function fadeOut(n) {
    return this.getContentElement().fadeOut(n)
}

function fadeIn(n) {
    return this.getContentElement().fadeIn(n)
}

function _applyAnonymous(n) {
    n ? this.getContentElement().setAttribute(st, or) : this.getContentElement().removeAttribute(st)
}

function show() {
    this.setVisibility(u)
}

function hide() {
    this.setVisibility(y)
}

function exclude() {
    this.setVisibility(h)
}

function isVisible() {
    return this.getVisibility() === u
}

function isHidden() {
    return this.getVisibility() !== u
}

function isExcluded() {
    return this.getVisibility() === h
}

function isSeeable() {
    qx.ui.core.queue.Manager.flush();
    var n = this.getContentElement().getDomElement();
    return n ? n.offsetWidth > 0 : !1
}

function _createContentElement() {
    var rt = qx.ui.core.Widget.prototype._createContentElement.call(this),
        g, nt, tt, d, it;
    return this.__bdE = p + Math.random(), this.__bdF = document.createElementNS(t, w), this.__bdF.style[i] = n, this.__bdF.setAttributeNS(null, h, r), this.__bdF.setAttributeNS(null, e, r), g = document.createElementNS(t, o), g.style[i] = n, g.setAttributeNS(null, s, n), g.setAttributeNS(null, b, this.__bdE), g.appendChild(this.__bdF), nt = document.createElementNS(t, k), nt.style[i] = n, nt.appendChild(g), tt = document.createElementNS(t, v), tt.style[i] = n, tt.setAttributeNS(f, u, y + this.__bdE), d = document.createElementNS(t, o), d.style[i] = n, d.setAttributeNS(a, c, f), d.setAttributeNS(null, h, r), d.setAttributeNS(null, e, r), d.setAttributeNS(null, s, n), d.appendChild(nt), d.appendChild(tt), it = document.createElement(l), it.appendChild(d), rt.useElement(it), rt
}

function getContentElement() {
    return this.__kF
}

function getLayoutChildren() {
    var n = this.__kM,
        t, i, u, r;
    if (!n) return this.__kN;
    for (i = 0, u = n.length; i < u; i++) r = n[i], (r.hasUserBounds() || r.isExcluded()) && (t == null && (t = n.concat()), qx.lang.Array.remove(t, r));
    return t || n
}

function scheduleLayoutUpdate() {
    qx.ui.core.queue.Layout.add(this)
}

function invalidateLayoutChildren() {
    var n = this.__kJ;
    n && n.invalidateChildrenCache();
    qx.ui.core.queue.Layout.add(this)
}

function hasLayoutChildren() {
    var t = this.__kM,
        i, n, r;
    if (!t) return !1;
    for (n = 0, r = t.length; n < r; n++)
        if (i = t[n], !i.hasUserBounds() && !i.isExcluded()) return !0;
    return !1
}

function getChildrenContainer() {
    return this
}

function _getChildren() {
    return this.__kM || this.__kN
}

function _indexOf(n) {
    var t = this.__kM;
    return t ? t.indexOf(n) : -1
}

function _hasChildren() {
    var n = this.__kM;
    return n != null && !!n[0]
}

function addChildrenToQueue(n) {
    var i = this.__kM,
        r, t, u;
    if (i)
        for (t = 0, u = i.length; t < u; t++) r = i[t], n.push(r), r.addChildrenToQueue(n)
}

function _add(n, t) {
    n.getLayoutParent() == this && qx.lang.Array.remove(this.__kM, n);
    this.__kM ? this.__kM.push(n) : this.__kM = [n];
    this.__kO(n, t)
}

function _addAt(n, t, i) {
    this.__kM || (this.__kM = []);
    n.getLayoutParent() == this && qx.lang.Array.remove(this.__kM, n);
    var r = this.__kM[t];
    r === n && n.setLayoutProperties(i);
    r ? qx.lang.Array.insertBefore(this.__kM, n, r) : this.__kM.push(n);
    this.__kO(n, i)
}

function _addBefore(n, t, i) {
    n != t && (this.__kM || (this.__kM = []), n.getLayoutParent() == this && qx.lang.Array.remove(this.__kM, n), qx.lang.Array.insertBefore(this.__kM, n, t), this.__kO(n, i))
}

function _addAfter(n, t, i) {
    n != t && (this.__kM || (this.__kM = []), n.getLayoutParent() == this && qx.lang.Array.remove(this.__kM, n), qx.lang.Array.insertAfter(this.__kM, n, t), this.__kO(n, i))
}

function _remove(n) {
    if (!this.__kM) throw new Error(pt);
    qx.lang.Array.remove(this.__kM, n);
    this.__kP(n)
}

function _removeAt(n) {
    if (!this.__kM) throw new Error(pt);
    var t = this.__kM[n];
    return qx.lang.Array.removeAt(this.__kM, n), this.__kP(t), t
}

function _removeAll() {
    var n, t;
    if (!this.__kM) return [];
    for (n = this.__kM.concat(), this.__kM.length = 0, t = n.length - 1; t >= 0; t--) this.__kP(n[t]);
    return qx.ui.core.queue.Layout.add(this), n
}

function capture(n) {
    this.getContentElement().capture(n)
}

function releaseCapture() {
    this.getContentElement().releaseCapture()
}

function isCapturing() {
    var n = this.getContentElement().getDomElement(),
        t, i;
    return n ? (t = qx.event.Registration.getManager(n), i = t.getDispatcher(qx.event.dispatch.MouseCapture), n == i.getCaptureElement()) : !1
}

function _applyPadding(n, t, i) {
    this._updateInsets = !0;
    qx.ui.core.queue.Layout.add(this);
    this.__kQ(i, n)
}

function _applyDecorator(n, t) {
    var i = this.getContentElement();
    t && (t = qx.theme.manager.Decoration.getInstance().getCssClassName(t), i.removeClass(t));
    n && (n = qx.theme.manager.Decoration.getInstance().addCssClass(n), i.addClass(n));
    (n || t) && qx.ui.core.queue.Layout.add(this)
}

function _applyToolTipText() {
    if (qx.core.Environment.get(lt)) {
        if (this.__kI) return;
        var n = qx.locale.Manager.getInstance();
        this.__kI = n.addListener(vr, function() {
            var n = this.getToolTipText();
            n && n.translate && this.setToolTipText(n.translate())
        }, this)
    }
}

function _applyTextColor() {}

function _applyZIndex(n) {
    this.getContentElement().setStyle(wi, n == null ? 0 : n)
}

function _applyVisibility(n, t) {
    var r = this.getContentElement(),
        i;
    n === u ? r.show() : r.hide();
    i = this.$$parent;
    i && (t == null || n == null || t === h || n === h) && i.invalidateLayoutChildren();
    qx.ui.core.queue.Visibility.add(this)
}

function _applyOpacity(n) {
    this.getContentElement().setStyle(bi, n == 1 ? null : n)
}

function _applyCursor(n) {
    n != null || this.isSelectable() || (n = wt);
    this.getContentElement().setStyle(gi, n, qx.core.Environment.get(ur) == pr)
}

function _applyBackgroundColor() {
    var n = this.getBackgroundColor(),
        t = this.getContentElement(),
        i = qx.theme.manager.Color.getInstance().resolve(n);
    t.setStyle(ti, i)
}

function _applyFont() {}

function _onChangeTheme() {
    if (!this.isDisposed()) {
        qx.ui.core.LayoutItem.prototype._onChangeTheme.call(this);
        this.updateAppearance();
        var n = this.getDecorator();
        this._applyDecorator(null, n);
        this._applyDecorator(n);
        n = this.getFont();
        qx.lang.Type.isString(n) && this._applyFont(n, n);
        n = this.getTextColor();
        qx.lang.Type.isString(n) && this._applyTextColor(n, n);
        n = this.getBackgroundColor();
        qx.lang.Type.isString(n) && this._applyBackgroundColor(n, n)
    }
}

function hasState(n) {
    var t = this.__kR;
    return !!t && !!t[n]
}

function addState(n) {
    var i = this.__kR,
        r, t, f, u;
    if ((i || (i = this.__kR = {}), !i[n]) && (this.__kR[n] = !0, n === nt ? this.syncAppearance() : qx.ui.core.queue.Visibility.isVisible(this) ? qx.ui.core.queue.Appearance.add(this) : this.$$stateChanges = !0, r = this._forwardStates, t = this.__kU, r && r[n] && t))
        for (u in t) f = t[u], f instanceof qx.ui.core.Widget && t[u].addState(n)
}

function removeState(n) {
    var u = this.__kR,
        i, t, f, r;
    if (u && u[n] && (delete this.__kR[n], n === nt ? this.syncAppearance() : qx.ui.core.queue.Visibility.isVisible(this) ? qx.ui.core.queue.Appearance.add(this) : this.$$stateChanges = !0, i = this._forwardStates, t = this.__kU, i && i[n] && t))
        for (f in t) r = t[f], r instanceof qx.ui.core.Widget && r.removeState(n)
}

function replaceState(n, t) {
    var i = this.__kR,
        u, r, e, f;
    if (i || (i = this.__kR = {}), i[t] || (i[t] = !0), i[n] && delete i[n], qx.ui.core.queue.Visibility.isVisible(this) ? qx.ui.core.queue.Appearance.add(this) : this.$$stateChanges = !0, u = this._forwardStates, r = this.__kU, u && u[t] && r)
        for (e in r) f = r[e], f instanceof qx.ui.core.Widget && f.replaceState(n, t)
}

function syncAppearance() {
    var o = this.__kR,
        t = this.__kS,
        s = qx.theme.manager.Appearance.getInstance(),
        h = qx.core.Property.$$method.setThemed,
        f = qx.core.Property.$$method.resetThemed,
        r, u, e, i, n;
    if (this.__kT && (delete this.__kT, t && (r = s.styleFrom(t, o, null, this.getAppearance()), t = null)), !t) {
        u = this;
        e = [];
        do e.push(u.$$subcontrol || u.getAppearance()); while (u = u.$$subparent);
        t = e.reverse().join(sr).replace(/#[0-9]+/g, dt);
        this.__kS = t
    }
    if (i = s.styleFrom(t, o, null, this.getAppearance()), i) {
        if (r)
            for (n in r) i[n] === undefined && this[f[n]]();
        for (n in i) i[n] === undefined ? this[f[n]]() : this[h[n]](i[n])
    } else if (r)
        for (n in r) this[f[n]]();
    this.fireDataEvent(si, this.__kR)
}

function _applyAppearance() {
    this.updateAppearance()
}

function checkAppearanceNeeds() {
    this.__kH ? this.$$stateChanges && (qx.ui.core.queue.Appearance.add(this), delete this.$$stateChanges) : (qx.ui.core.queue.Appearance.add(this), this.__kH = !0)
}

function updateAppearance() {
    var n, t, i;
    if (this.__kT = !0, qx.ui.core.queue.Appearance.add(this), n = this.__kU, n)
        for (i in n) t = n[i], t instanceof qx.ui.core.Widget && t.updateAppearance()
}

function syncWidget() {}

function getEventTarget() {
    for (var n = this; n.getAnonymous();)
        if (n = n.getLayoutParent(), !n) return null;
    return n
}

function getFocusTarget() {
    var n = this;
    if (!n.getEnabled()) return null;
    while (n.getAnonymous() || !n.getFocusable())
        if (n = n.getLayoutParent(), !n || !n.getEnabled()) return null;
    return n
}

function getFocusElement() {
    return this.getContentElement()
}

function isTabable() {
    return !!this.getContentElement().getDomElement() && this.isFocusable()
}

function _applyFocusable(n, t) {
    var i = this.getFocusElement(),
        r;
    n ? (r = this.getTabIndex(), r == null && (r = 1), i.setAttribute(w, r), i.setStyle(ki, g)) : i.isNativelyFocusable() ? i.setAttribute(w, -1) : t && i.setAttribute(w, null)
}

function _applyKeepFocus(n) {
    var t = this.getFocusElement();
    t.setAttribute(yr, n ? v : null)
}

function _applyKeepActive(n) {
    var t = this.getContentElement();
    t.setAttribute(wr, n ? v : null)
}

function _applyTabIndex(n) {
    if (n == null) n = 1;
    else if (n < 1 || n > 32e3) throw new Error(di);
    this.getFocusable() && n != null && this.getFocusElement().setAttribute(w, n)
}

function _applySelectable(n, t) {
    t !== null && this._applyCursor(this.getCursor());
    this.getContentElement().setSelectable(n)
}

function _applyEnabled(n) {
    n === !1 ? (this.addState(et), this.removeState(nt), this.isFocusable() && (this.removeState(k), this._applyFocusable(!1, !0)), this.isDraggable() && this._applyDraggable(!1, !0), this.isDroppable() && this._applyDroppable(!1, !0)) : (this.removeState(et), this.isFocusable() && this._applyFocusable(!0, !1), this.isDraggable() && this._applyDraggable(!0, !1), this.isDroppable() && this._applyDroppable(!0, !1))
}

function _applyNativeContextMenu() {}

function _applyContextMenu(n, t) {
    t && (t.removeState(b), t.getOpener() == this && t.resetOpener(), n || (this.removeListener(b, this._onContextMenuOpen), this.removeListener(tt, this._onContextMenuOpen), t.removeListener(d, this._onBeforeContextMenuOpen, this)));
    n && (n.setOpener(this), n.addState(b), t || (this.addListener(b, this._onContextMenuOpen), this.addListener(tt, this._onContextMenuOpen), n.addListener(d, this._onBeforeContextMenuOpen, this)))
}

function _onContextMenuOpen(n) {
    (n.getType() != tt || n.getPointerType() === ii) && (this.getContextMenu().openAtPointer(n), n.stop())
}

function _onBeforeContextMenuOpen(n) {
    n.getData() == u && this.hasListener(ni) && this.fireDataEvent(ni, n)
}

function _onStopEvent(n) {
    n.stopPropagation()
}

function _getDragDropCursor() {
    return qx.ui.core.DragDropCursor.getInstance()
}

function _applyDraggable(n) {
    this.isEnabled() || n !== !0 || (n = !1);
    this._getDragDropCursor();
    n ? (this.addListener(ct, this._onDragStart), this.addListener(ft, this._onDrag), this.addListener(vt, this._onDragEnd), this.addListener(at, this._onDragChange)) : (this.removeListener(ct, this._onDragStart), this.removeListener(ft, this._onDrag), this.removeListener(vt, this._onDragEnd), this.removeListener(at, this._onDragChange));
    this.getContentElement().setAttribute(oi, n ? v : null)
}

function _applyDroppable(n) {
    this.isEnabled() || n !== !0 || (n = !1);
    this.getContentElement().setAttribute(nr, n ? v : null)
}

function _onDragStart(n) {
    this._getDragDropCursor().placeToPointer(n);
    this.getApplicationRoot().setGlobalCursor(wt)
}

function _onDrag(n) {
    this._getDragDropCursor().placeToPointer(n)
}

function _onDragEnd() {
    this._getDragDropCursor().moveTo(-1e3, -1e3);
    this.getApplicationRoot().resetGlobalCursor()
}

function _onDragChange(n) {
    var t = this._getDragDropCursor(),
        i = n.getCurrentAction();
    i ? t.setAction(i) : t.resetAction()
}

function visualizeFocus() {
    this.addState(k)
}

function visualizeBlur() {
    this.removeState(k)
}

function scrollChildIntoView(n, t, i, r) {
    r = typeof r == ar ? !0 : r;
    var f = qx.ui.core.queue.Layout,
        u;
    r && (r = !f.isScheduled(n), u = n.getLayoutParent(), r && u && (r = !f.isScheduled(u), r && u.getChildren().forEach(function(n) {
        r = r && !f.isScheduled(n)
    })));
    this.scrollChildIntoViewX(n, t, r);
    this.scrollChildIntoViewY(n, i, r)
}

function scrollChildIntoViewX(n, t, i) {
    this.getContentElement().scrollChildIntoViewX(n.getContentElement(), t, i)
}

function scrollChildIntoViewY(n, t, i) {
    this.getContentElement().scrollChildIntoViewY(n.getContentElement(), t, i)
}

function focus() {
    if (this.isFocusable()) this.getFocusElement().focus();
    else if (qx.ui.core.Widget.UNFOCUSABLE_WIDGET_FOCUS_BLUR_ERROR) throw new Error(kt);
}

function blur() {
    if (this.isFocusable()) this.getFocusElement().blur();
    else if (qx.ui.core.Widget.UNFOCUSABLE_WIDGET_FOCUS_BLUR_ERROR) throw new Error(kt);
}

function activate() {
    this.getContentElement().activate()
}

function deactivate() {
    this.getContentElement().deactivate()
}

function tabFocus() {
    this.getFocusElement().focus()
}

function hasChildControl(n) {
    return this.__kU ? !!this.__kU[n] : !1
}

function _getCreatedChildControls() {
    return this.__kU
}

function getChildControl(n, t) {
    if (!this.__kU) {
        if (t) return null;
        this.__kU = {}
    }
    var i = this.__kU[n];
    return i ? i : t === !0 ? null : this._createChildControl(n)
}

function _showChildControl(n) {
    var t = this.getChildControl(n);
    return t.show(), t
}

function _excludeChildControl(n) {
    var t = this.getChildControl(n, !0);
    t && t.exclude()
}

function _isChildControlVisible(n) {
    var t = this.getChildControl(n, !0);
    return t ? t.isVisible() : !1
}

function _releaseChildControl(n) {
    var t = this.getChildControl(n, !1),
        i, r, u;
    if (!t) throw new Error(ht + n);
    if (delete t.$$subcontrol, delete t.$$subparent, i = this.__kR, r = this._forwardStates, i && r && t instanceof qx.ui.core.Widget)
        for (u in i) r[u] && t.removeState(u);
    return delete this.__kU[n], t
}

function _createChildControl(n) {
    var i, t, u, f, e;
    if (this.__kU) {
        if (this.__kU[n]) throw new Error(ei + n + tr);
    } else this.__kU = {};
    i = n.indexOf(vi);
    try {
        t = i == -1 ? this._createChildControlImpl(n) : this._createChildControlImpl(n.substring(0, i), n.substring(i + 1, n.length))
    } catch (r) {
        r.message = fr + n + hi + this.toString() + ir + r.message;
        throw r;
    }
    if (!t) throw new Error(ht + n);
    if (t.$$subcontrol = n, t.$$subparent = this, u = this.__kR, f = this._forwardStates, u && f && t instanceof qx.ui.core.Widget)
        for (e in u) f[e] && t.addState(e);
    return t.$$resyncNeeded && (delete t.$$resyncNeeded, t.updateAppearance()), this.fireDataEvent(fi, t), this.__kU[n] = t
}

function _createChildControlImpl() {
    return null
}

function _disposeChildControls() {
    var t = this.__kU,
        i, r, n;
    if (t) {
        i = qx.ui.core.Widget;
        for (r in t) n = t[r], i.contains(this, n) ? n.dispose() : n.destroy();
        delete this.__kU
    }
}

function _findTopControl() {
    for (var n = this; n;) {
        if (!n.$$subparent) return n;
        n = n.$$subparent
    }
    return null
}

function getSubcontrolId() {
    return this.$$subcontrol || null
}

function getContentLocation(n) {
    var t = this.getContentElement().getDomElement();
    return t ? qx.bom.element.Location.get(t, n) : null
}

function setDomLeft(t) {
    var i = this.getContentElement().getDomElement();
    if (i) i.style.left = t + n;
    else throw new Error(rt);
}

function setDomTop(t) {
    var i = this.getContentElement().getDomElement();
    if (i) i.style.top = t + n;
    else throw new Error(rt);
}

function setDomPosition(t, i) {
    var r = this.getContentElement().getDomElement();
    if (r) r.style.left = t + n, r.style.top = i + n;
    else throw new Error(rt);
}

function destroy() {
    if (!this.$$disposed) {
        var n = this.$$parent;
        n && n._remove(this);
        qx.ui.core.queue.Dispose.add(this)
    }
}

function clone() {
    var i = qx.ui.core.LayoutItem.prototype.clone.call(this),
        t, n, r;
    if (this.getChildren)
        for (t = this.getChildren(), n = 0, r = t.length; n < r; n++) i.add(t[n].clone());
    return i
}

function tr() {
    var t = qx.locale.Manager;
    if (t) return t.tr.apply(t, arguments);
    throw new Error(n);
}

function trn() {
    var t = qx.locale.Manager;
    if (t) return t.trn.apply(t, arguments);
    throw new Error(n);
}

function trc() {
    var t = qx.locale.Manager;
    if (t) return t.trc.apply(t, arguments);
    throw new Error(n);
}

function trnc() {
    var t = qx.locale.Manager;
    if (t) return t.trnc.apply(t, arguments);
    throw new Error(n);
}

function marktr() {
    var t = qx.locale.Manager;
    if (t) return t.marktr.apply(t, arguments);
    throw new Error(n);
}

function getAnimation anonymous(value) {
    if (this.$$runtime_animation !== undefined) return this.$$runtime_animation;
    if (this.$$user_animation !== undefined) return this.$$user_animation;
    else if (this.$$theme_animation !== undefined) return this.$$theme_animation;
    else return this.$$init_animation;
}

function setAnimation anonymous(value) {
    this.$$setAnimationImpl.apply(this, arguments);
    return value;
}

function resetAnimation anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_animation !== undefined) {
        old = this.$$runtime_animation;
    } else if (this.$$user_animation !== undefined) {
        old = this.$$user_animation;
    } else if (this.$$theme_animation !== undefined) {
        old = this.$$theme_animation;
    } else if (this.$$useinit_animation) {
        old = this.$$init_animation;
    }
    if (this.$$user_animation === undefined) return;
    var computed;
    if (this.$$runtime_animation !== undefined) {
        computed = this.$$runtime_animation;
        delete this.$$user_animation;
    } else if (this.$$user_animation !== undefined) {
        delete this.$$user_animation;
        if (this.$$runtime_animation !== undefined) computed = this.$$runtime_animation;
        if (this.$$theme_animation !== undefined) computed = this.$$theme_animation;
        else if (this.$$init_animation !== undefined) {
            computed = this.$$init_animation;
            this.$$useinit_animation = true;
        }
    } else if (this.$$theme_animation !== undefined) {} else if (this.$$useinit_animation) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_animation;
    var self = this;
    var promise;
    promise = this.__kB(computed, old, "animation", "reset");

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

function initAnimation anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_animation !== undefined) {
        old = this.$$runtime_animation;
    } else if (this.$$user_animation !== undefined) {
        old = this.$$user_animation;
    } else if (this.$$theme_animation !== undefined) {
        old = this.$$theme_animation;
    } else if (this.$$useinit_animation) {
        old = this.$$init_animation;
    }
    var computed;
    if (this.$$runtime_animation !== undefined) {
        computed = this.$$runtime_animation;
    } else if (this.$$user_animation !== undefined) {
        computed = this.$$user_animation;
    } else if (this.$$theme_animation !== undefined) {
        computed = this.$$theme_animation;
    } else if (this.$$useinit_animation) {
        computed = this.$$init_animation;
    } else {
        computed = this.$$init_animation;
        this.$$useinit_animation = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this.__kB(computed, old, "animation", "init");

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

function setRuntimeAnimation anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_animation !== undefined) {
            old = this.$$runtime_animation;
        } else if (this.$$user_animation !== undefined) {
            old = this.$$user_animation;
        } else if (this.$$theme_animation !== undefined) {
            old = this.$$theme_animation;
        } else if (this.$$useinit_animation) {
            old = this.$$init_animation;
        }
        if (equ.call(this, this.$$runtime_animation, value)) return value;
        var computed;
        if (this.$$runtime_animation !== undefined) {
            computed = this.$$runtime_animation = value;
        } else if (this.$$user_animation !== undefined) {
            computed = this.$$runtime_animation = value;
        } else if (this.$$theme_animation !== undefined) {
            computed = this.$$runtime_animation = value;
        } else if (this.$$useinit_animation) {
            delete this.$$useinit_animation;
            computed = this.$$runtime_animation = value;
        } else {
            computed = this.$$runtime_animation = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_animation;
        var self = this;
        var promise;
        promise = this.__kB(computed, old, "animation", "setRuntime");

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

function resetRuntimeAnimation anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_animation !== undefined) {
        old = this.$$runtime_animation;
    } else if (this.$$user_animation !== undefined) {
        old = this.$$user_animation;
    } else if (this.$$theme_animation !== undefined) {
        old = this.$$theme_animation;
    } else if (this.$$useinit_animation) {
        old = this.$$init_animation;
    }
    if (this.$$runtime_animation === undefined) return;
    var computed;
    if (this.$$runtime_animation !== undefined) {
        delete this.$$runtime_animation;
        if (this.$$user_animation !== undefined) computed = this.$$user_animation;
        else if (this.$$theme_animation !== undefined) computed = this.$$theme_animation;
        else if (this.$$init_animation !== undefined) {
            computed = this.$$init_animation;
            this.$$useinit_animation = true;
        }
    } else if (this.$$user_animation !== undefined) {
        computed = this.$$user_animation;
    } else if (this.$$theme_animation !== undefined) {} else if (this.$$useinit_animation) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_animation;
    var self = this;
    var promise;
    promise = this.__kB(computed, old, "animation", "resetRuntime");

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

function setThemedAnimation anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_animation !== undefined) {
            old = this.$$runtime_animation;
        } else if (this.$$user_animation !== undefined) {
            old = this.$$user_animation;
        } else if (this.$$theme_animation !== undefined) {
            old = this.$$theme_animation;
        } else if (this.$$useinit_animation) {
            old = this.$$init_animation;
        }
        if (equ.call(this, this.$$theme_animation, value)) return value;
        var computed;
        if (this.$$runtime_animation !== undefined) {
            computed = this.$$runtime_animation;
            this.$$theme_animation = value;
        } else if (this.$$user_animation !== undefined) {
            computed = this.$$user_animation;
            this.$$theme_animation = value;
        } else if (this.$$theme_animation !== undefined) {
            computed = this.$$theme_animation = value;
        } else if (this.$$useinit_animation) {
            delete this.$$useinit_animation;
            computed = this.$$theme_animation = value;
        } else {
            computed = this.$$theme_animation = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_animation;
        var self = this;
        var promise;
        promise = this.__kB(computed, old, "animation", "setThemed");

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

function resetThemedAnimation anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_animation !== undefined) {
        old = this.$$runtime_animation;
    } else if (this.$$user_animation !== undefined) {
        old = this.$$user_animation;
    } else if (this.$$theme_animation !== undefined) {
        old = this.$$theme_animation;
    } else if (this.$$useinit_animation) {
        old = this.$$init_animation;
    }
    if (this.$$theme_animation === undefined) return;
    var computed;
    if (this.$$runtime_animation !== undefined) {
        computed = this.$$runtime_animation;
        delete this.$$theme_animation;
    } else if (this.$$user_animation !== undefined) {
        computed = this.$$user_animation;
        delete this.$$theme_animation;
    } else if (this.$$theme_animation !== undefined) {
        delete this.$$theme_animation;
        if (this.$$init_animation !== undefined) {
            computed = this.$$init_animation;
            this.$$useinit_animation = true;
        }
    } else if (this.$$useinit_animation) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_animation;
    var self = this;
    var promise;
    promise = this.__kB(computed, old, "animation", "resetThemed");

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

function getAnimationtoggled anonymous(value) {
    if (this.$$runtime_animationtoggled !== undefined) return this.$$runtime_animationtoggled;
    if (this.$$user_animationtoggled !== undefined) return this.$$user_animationtoggled;
    else if (this.$$theme_animationtoggled !== undefined) return this.$$theme_animationtoggled;
    else return this.$$init_animationtoggled;
}

function setAnimationtoggled anonymous(value) {
    this.$$setAnimationtoggledImpl.apply(this, arguments);
    return value;
}

function resetAnimationtoggled anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_animationtoggled !== undefined) {
        old = this.$$runtime_animationtoggled;
    } else if (this.$$user_animationtoggled !== undefined) {
        old = this.$$user_animationtoggled;
    } else if (this.$$theme_animationtoggled !== undefined) {
        old = this.$$theme_animationtoggled;
    } else if (this.$$useinit_animationtoggled) {
        old = this.$$init_animationtoggled;
    }
    if (this.$$user_animationtoggled === undefined) return;
    var computed;
    if (this.$$runtime_animationtoggled !== undefined) {
        computed = this.$$runtime_animationtoggled;
        delete this.$$user_animationtoggled;
    } else if (this.$$user_animationtoggled !== undefined) {
        delete this.$$user_animationtoggled;
        if (this.$$runtime_animationtoggled !== undefined) computed = this.$$runtime_animationtoggled;
        if (this.$$theme_animationtoggled !== undefined) computed = this.$$theme_animationtoggled;
        else if (this.$$init_animationtoggled !== undefined) {
            computed = this.$$init_animationtoggled;
            this.$$useinit_animationtoggled = true;
        }
    } else if (this.$$theme_animationtoggled !== undefined) {} else if (this.$$useinit_animationtoggled) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_animationtoggled;
    var self = this;
    var promise;
    promise = this.__kC(computed, old, "animationtoggled", "reset");

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

function initAnimationtoggled anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_animationtoggled !== undefined) {
        old = this.$$runtime_animationtoggled;
    } else if (this.$$user_animationtoggled !== undefined) {
        old = this.$$user_animationtoggled;
    } else if (this.$$theme_animationtoggled !== undefined) {
        old = this.$$theme_animationtoggled;
    } else if (this.$$useinit_animationtoggled) {
        old = this.$$init_animationtoggled;
    }
    var computed;
    if (this.$$runtime_animationtoggled !== undefined) {
        computed = this.$$runtime_animationtoggled;
    } else if (this.$$user_animationtoggled !== undefined) {
        computed = this.$$user_animationtoggled;
    } else if (this.$$theme_animationtoggled !== undefined) {
        computed = this.$$theme_animationtoggled;
    } else if (this.$$useinit_animationtoggled) {
        computed = this.$$init_animationtoggled;
    } else {
        computed = this.$$init_animationtoggled;
        this.$$useinit_animationtoggled = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this.__kC(computed, old, "animationtoggled", "init");

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

function setRuntimeAnimationtoggled anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_animationtoggled !== undefined) {
            old = this.$$runtime_animationtoggled;
        } else if (this.$$user_animationtoggled !== undefined) {
            old = this.$$user_animationtoggled;
        } else if (this.$$theme_animationtoggled !== undefined) {
            old = this.$$theme_animationtoggled;
        } else if (this.$$useinit_animationtoggled) {
            old = this.$$init_animationtoggled;
        }
        if (equ.call(this, this.$$runtime_animationtoggled, value)) return value;
        var computed;
        if (this.$$runtime_animationtoggled !== undefined) {
            computed = this.$$runtime_animationtoggled = value;
        } else if (this.$$user_animationtoggled !== undefined) {
            computed = this.$$runtime_animationtoggled = value;
        } else if (this.$$theme_animationtoggled !== undefined) {
            computed = this.$$runtime_animationtoggled = value;
        } else if (this.$$useinit_animationtoggled) {
            delete this.$$useinit_animationtoggled;
            computed = this.$$runtime_animationtoggled = value;
        } else {
            computed = this.$$runtime_animationtoggled = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_animationtoggled;
        var self = this;
        var promise;
        promise = this.__kC(computed, old, "animationtoggled", "setRuntime");

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

function resetRuntimeAnimationtoggled anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_animationtoggled !== undefined) {
        old = this.$$runtime_animationtoggled;
    } else if (this.$$user_animationtoggled !== undefined) {
        old = this.$$user_animationtoggled;
    } else if (this.$$theme_animationtoggled !== undefined) {
        old = this.$$theme_animationtoggled;
    } else if (this.$$useinit_animationtoggled) {
        old = this.$$init_animationtoggled;
    }
    if (this.$$runtime_animationtoggled === undefined) return;
    var computed;
    if (this.$$runtime_animationtoggled !== undefined) {
        delete this.$$runtime_animationtoggled;
        if (this.$$user_animationtoggled !== undefined) computed = this.$$user_animationtoggled;
        else if (this.$$theme_animationtoggled !== undefined) computed = this.$$theme_animationtoggled;
        else if (this.$$init_animationtoggled !== undefined) {
            computed = this.$$init_animationtoggled;
            this.$$useinit_animationtoggled = true;
        }
    } else if (this.$$user_animationtoggled !== undefined) {
        computed = this.$$user_animationtoggled;
    } else if (this.$$theme_animationtoggled !== undefined) {} else if (this.$$useinit_animationtoggled) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_animationtoggled;
    var self = this;
    var promise;
    promise = this.__kC(computed, old, "animationtoggled", "resetRuntime");

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

function setThemedAnimationtoggled anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_animationtoggled !== undefined) {
            old = this.$$runtime_animationtoggled;
        } else if (this.$$user_animationtoggled !== undefined) {
            old = this.$$user_animationtoggled;
        } else if (this.$$theme_animationtoggled !== undefined) {
            old = this.$$theme_animationtoggled;
        } else if (this.$$useinit_animationtoggled) {
            old = this.$$init_animationtoggled;
        }
        if (equ.call(this, this.$$theme_animationtoggled, value)) return value;
        var computed;
        if (this.$$runtime_animationtoggled !== undefined) {
            computed = this.$$runtime_animationtoggled;
            this.$$theme_animationtoggled = value;
        } else if (this.$$user_animationtoggled !== undefined) {
            computed = this.$$user_animationtoggled;
            this.$$theme_animationtoggled = value;
        } else if (this.$$theme_animationtoggled !== undefined) {
            computed = this.$$theme_animationtoggled = value;
        } else if (this.$$useinit_animationtoggled) {
            delete this.$$useinit_animationtoggled;
            computed = this.$$theme_animationtoggled = value;
        } else {
            computed = this.$$theme_animationtoggled = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_animationtoggled;
        var self = this;
        var promise;
        promise = this.__kC(computed, old, "animationtoggled", "setThemed");

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

function resetThemedAnimationtoggled anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_animationtoggled !== undefined) {
        old = this.$$runtime_animationtoggled;
    } else if (this.$$user_animationtoggled !== undefined) {
        old = this.$$user_animationtoggled;
    } else if (this.$$theme_animationtoggled !== undefined) {
        old = this.$$theme_animationtoggled;
    } else if (this.$$useinit_animationtoggled) {
        old = this.$$init_animationtoggled;
    }
    if (this.$$theme_animationtoggled === undefined) return;
    var computed;
    if (this.$$runtime_animationtoggled !== undefined) {
        computed = this.$$runtime_animationtoggled;
        delete this.$$theme_animationtoggled;
    } else if (this.$$user_animationtoggled !== undefined) {
        computed = this.$$user_animationtoggled;
        delete this.$$theme_animationtoggled;
    } else if (this.$$theme_animationtoggled !== undefined) {
        delete this.$$theme_animationtoggled;
        if (this.$$init_animationtoggled !== undefined) {
            computed = this.$$init_animationtoggled;
            this.$$useinit_animationtoggled = true;
        }
    } else if (this.$$useinit_animationtoggled) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_animationtoggled;
    var self = this;
    var promise;
    promise = this.__kC(computed, old, "animationtoggled", "resetThemed");

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

function startAnimation(n) {
    var i, t;
    if (this.__kD(this.__kz), n && this.getChildren && this.getChildren())
        for (i = this.getChildren(), t = 0; t < i.length; ++t) i[t].startAnimation && i[t].startAnimation(n)
}

function stopAnimation() {
    this.__kA && this.__kA.stop();
    this.__kA = null
}

function getEdgeAnimationShow anonymous(value) {
    if (this.$$runtime_edgeAnimationShow !== undefined) return this.$$runtime_edgeAnimationShow;
    if (this.$$user_edgeAnimationShow !== undefined) return this.$$user_edgeAnimationShow;
    else if (this.$$theme_edgeAnimationShow !== undefined) return this.$$theme_edgeAnimationShow;
    else return this.$$init_edgeAnimationShow;
}

function setEdgeAnimationShow anonymous(value) {
    this.$$setEdgeAnimationShowImpl.apply(this, arguments);
    return value;
}

function resetEdgeAnimationShow anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_edgeAnimationShow !== undefined) {
        old = this.$$runtime_edgeAnimationShow;
    } else if (this.$$user_edgeAnimationShow !== undefined) {
        old = this.$$user_edgeAnimationShow;
    } else if (this.$$theme_edgeAnimationShow !== undefined) {
        old = this.$$theme_edgeAnimationShow;
    } else if (this.$$useinit_edgeAnimationShow) {
        old = this.$$init_edgeAnimationShow;
    }
    if (this.$$user_edgeAnimationShow === undefined) return;
    var computed;
    if (this.$$runtime_edgeAnimationShow !== undefined) {
        computed = this.$$runtime_edgeAnimationShow;
        delete this.$$user_edgeAnimationShow;
    } else if (this.$$user_edgeAnimationShow !== undefined) {
        delete this.$$user_edgeAnimationShow;
        if (this.$$runtime_edgeAnimationShow !== undefined) computed = this.$$runtime_edgeAnimationShow;
        if (this.$$theme_edgeAnimationShow !== undefined) computed = this.$$theme_edgeAnimationShow;
        else if (this.$$init_edgeAnimationShow !== undefined) {
            computed = this.$$init_edgeAnimationShow;
            this.$$useinit_edgeAnimationShow = true;
        }
    } else if (this.$$theme_edgeAnimationShow !== undefined) {} else if (this.$$useinit_edgeAnimationShow) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_edgeAnimationShow;
    var self = this;
    var promise;
    promise = this.__gt(computed, old, "edgeAnimationShow", "reset");

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

function initEdgeAnimationShow anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_edgeAnimationShow !== undefined) {
        old = this.$$runtime_edgeAnimationShow;
    } else if (this.$$user_edgeAnimationShow !== undefined) {
        old = this.$$user_edgeAnimationShow;
    } else if (this.$$theme_edgeAnimationShow !== undefined) {
        old = this.$$theme_edgeAnimationShow;
    } else if (this.$$useinit_edgeAnimationShow) {
        old = this.$$init_edgeAnimationShow;
    }
    var computed;
    if (this.$$runtime_edgeAnimationShow !== undefined) {
        computed = this.$$runtime_edgeAnimationShow;
    } else if (this.$$user_edgeAnimationShow !== undefined) {
        computed = this.$$user_edgeAnimationShow;
    } else if (this.$$theme_edgeAnimationShow !== undefined) {
        computed = this.$$theme_edgeAnimationShow;
    } else if (this.$$useinit_edgeAnimationShow) {
        computed = this.$$init_edgeAnimationShow;
    } else {
        computed = this.$$init_edgeAnimationShow;
        this.$$useinit_edgeAnimationShow = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this.__gt(computed, old, "edgeAnimationShow", "init");

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

function setRuntimeEdgeAnimationShow anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_edgeAnimationShow !== undefined) {
            old = this.$$runtime_edgeAnimationShow;
        } else if (this.$$user_edgeAnimationShow !== undefined) {
            old = this.$$user_edgeAnimationShow;
        } else if (this.$$theme_edgeAnimationShow !== undefined) {
            old = this.$$theme_edgeAnimationShow;
        } else if (this.$$useinit_edgeAnimationShow) {
            old = this.$$init_edgeAnimationShow;
        }
        if (equ.call(this, this.$$runtime_edgeAnimationShow, value)) return value;
        var computed;
        if (this.$$runtime_edgeAnimationShow !== undefined) {
            computed = this.$$runtime_edgeAnimationShow = value;
        } else if (this.$$user_edgeAnimationShow !== undefined) {
            computed = this.$$runtime_edgeAnimationShow = value;
        } else if (this.$$theme_edgeAnimationShow !== undefined) {
            computed = this.$$runtime_edgeAnimationShow = value;
        } else if (this.$$useinit_edgeAnimationShow) {
            delete this.$$useinit_edgeAnimationShow;
            computed = this.$$runtime_edgeAnimationShow = value;
        } else {
            computed = this.$$runtime_edgeAnimationShow = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_edgeAnimationShow;
        var self = this;
        var promise;
        promise = this.__gt(computed, old, "edgeAnimationShow", "setRuntime");

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

function resetRuntimeEdgeAnimationShow anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_edgeAnimationShow !== undefined) {
        old = this.$$runtime_edgeAnimationShow;
    } else if (this.$$user_edgeAnimationShow !== undefined) {
        old = this.$$user_edgeAnimationShow;
    } else if (this.$$theme_edgeAnimationShow !== undefined) {
        old = this.$$theme_edgeAnimationShow;
    } else if (this.$$useinit_edgeAnimationShow) {
        old = this.$$init_edgeAnimationShow;
    }
    if (this.$$runtime_edgeAnimationShow === undefined) return;
    var computed;
    if (this.$$runtime_edgeAnimationShow !== undefined) {
        delete this.$$runtime_edgeAnimationShow;
        if (this.$$user_edgeAnimationShow !== undefined) computed = this.$$user_edgeAnimationShow;
        else if (this.$$theme_edgeAnimationShow !== undefined) computed = this.$$theme_edgeAnimationShow;
        else if (this.$$init_edgeAnimationShow !== undefined) {
            computed = this.$$init_edgeAnimationShow;
            this.$$useinit_edgeAnimationShow = true;
        }
    } else if (this.$$user_edgeAnimationShow !== undefined) {
        computed = this.$$user_edgeAnimationShow;
    } else if (this.$$theme_edgeAnimationShow !== undefined) {} else if (this.$$useinit_edgeAnimationShow) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_edgeAnimationShow;
    var self = this;
    var promise;
    promise = this.__gt(computed, old, "edgeAnimationShow", "resetRuntime");

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

function setThemedEdgeAnimationShow anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_edgeAnimationShow !== undefined) {
            old = this.$$runtime_edgeAnimationShow;
        } else if (this.$$user_edgeAnimationShow !== undefined) {
            old = this.$$user_edgeAnimationShow;
        } else if (this.$$theme_edgeAnimationShow !== undefined) {
            old = this.$$theme_edgeAnimationShow;
        } else if (this.$$useinit_edgeAnimationShow) {
            old = this.$$init_edgeAnimationShow;
        }
        if (equ.call(this, this.$$theme_edgeAnimationShow, value)) return value;
        var computed;
        if (this.$$runtime_edgeAnimationShow !== undefined) {
            computed = this.$$runtime_edgeAnimationShow;
            this.$$theme_edgeAnimationShow = value;
        } else if (this.$$user_edgeAnimationShow !== undefined) {
            computed = this.$$user_edgeAnimationShow;
            this.$$theme_edgeAnimationShow = value;
        } else if (this.$$theme_edgeAnimationShow !== undefined) {
            computed = this.$$theme_edgeAnimationShow = value;
        } else if (this.$$useinit_edgeAnimationShow) {
            delete this.$$useinit_edgeAnimationShow;
            computed = this.$$theme_edgeAnimationShow = value;
        } else {
            computed = this.$$theme_edgeAnimationShow = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_edgeAnimationShow;
        var self = this;
        var promise;
        promise = this.__gt(computed, old, "edgeAnimationShow", "setThemed");

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

function resetThemedEdgeAnimationShow anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_edgeAnimationShow !== undefined) {
        old = this.$$runtime_edgeAnimationShow;
    } else if (this.$$user_edgeAnimationShow !== undefined) {
        old = this.$$user_edgeAnimationShow;
    } else if (this.$$theme_edgeAnimationShow !== undefined) {
        old = this.$$theme_edgeAnimationShow;
    } else if (this.$$useinit_edgeAnimationShow) {
        old = this.$$init_edgeAnimationShow;
    }
    if (this.$$theme_edgeAnimationShow === undefined) return;
    var computed;
    if (this.$$runtime_edgeAnimationShow !== undefined) {
        computed = this.$$runtime_edgeAnimationShow;
        delete this.$$theme_edgeAnimationShow;
    } else if (this.$$user_edgeAnimationShow !== undefined) {
        computed = this.$$user_edgeAnimationShow;
        delete this.$$theme_edgeAnimationShow;
    } else if (this.$$theme_edgeAnimationShow !== undefined) {
        delete this.$$theme_edgeAnimationShow;
        if (this.$$init_edgeAnimationShow !== undefined) {
            computed = this.$$init_edgeAnimationShow;
            this.$$useinit_edgeAnimationShow = true;
        }
    } else if (this.$$useinit_edgeAnimationShow) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_edgeAnimationShow;
    var self = this;
    var promise;
    promise = this.__gt(computed, old, "edgeAnimationShow", "resetThemed");

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

function getEdgeAnimationHover anonymous(value) {
    if (this.$$runtime_edgeAnimationHover !== undefined) return this.$$runtime_edgeAnimationHover;
    if (this.$$user_edgeAnimationHover !== undefined) return this.$$user_edgeAnimationHover;
    else if (this.$$theme_edgeAnimationHover !== undefined) return this.$$theme_edgeAnimationHover;
    else return this.$$init_edgeAnimationHover;
}

function setEdgeAnimationHover anonymous(value) {
    this.$$setEdgeAnimationHoverImpl.apply(this, arguments);
    return value;
}

function resetEdgeAnimationHover anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_edgeAnimationHover !== undefined) {
        old = this.$$runtime_edgeAnimationHover;
    } else if (this.$$user_edgeAnimationHover !== undefined) {
        old = this.$$user_edgeAnimationHover;
    } else if (this.$$theme_edgeAnimationHover !== undefined) {
        old = this.$$theme_edgeAnimationHover;
    } else if (this.$$useinit_edgeAnimationHover) {
        old = this.$$init_edgeAnimationHover;
    }
    if (this.$$user_edgeAnimationHover === undefined) return;
    var computed;
    if (this.$$runtime_edgeAnimationHover !== undefined) {
        computed = this.$$runtime_edgeAnimationHover;
        delete this.$$user_edgeAnimationHover;
    } else if (this.$$user_edgeAnimationHover !== undefined) {
        delete this.$$user_edgeAnimationHover;
        if (this.$$runtime_edgeAnimationHover !== undefined) computed = this.$$runtime_edgeAnimationHover;
        if (this.$$theme_edgeAnimationHover !== undefined) computed = this.$$theme_edgeAnimationHover;
        else if (this.$$init_edgeAnimationHover !== undefined) {
            computed = this.$$init_edgeAnimationHover;
            this.$$useinit_edgeAnimationHover = true;
        }
    } else if (this.$$theme_edgeAnimationHover !== undefined) {} else if (this.$$useinit_edgeAnimationHover) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_edgeAnimationHover;
    var self = this;
    var promise;
    promise = this.__gu(computed, old, "edgeAnimationHover", "reset");

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

function initEdgeAnimationHover anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_edgeAnimationHover !== undefined) {
        old = this.$$runtime_edgeAnimationHover;
    } else if (this.$$user_edgeAnimationHover !== undefined) {
        old = this.$$user_edgeAnimationHover;
    } else if (this.$$theme_edgeAnimationHover !== undefined) {
        old = this.$$theme_edgeAnimationHover;
    } else if (this.$$useinit_edgeAnimationHover) {
        old = this.$$init_edgeAnimationHover;
    }
    var computed;
    if (this.$$runtime_edgeAnimationHover !== undefined) {
        computed = this.$$runtime_edgeAnimationHover;
    } else if (this.$$user_edgeAnimationHover !== undefined) {
        computed = this.$$user_edgeAnimationHover;
    } else if (this.$$theme_edgeAnimationHover !== undefined) {
        computed = this.$$theme_edgeAnimationHover;
    } else if (this.$$useinit_edgeAnimationHover) {
        computed = this.$$init_edgeAnimationHover;
    } else {
        computed = this.$$init_edgeAnimationHover;
        this.$$useinit_edgeAnimationHover = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this.__gu(computed, old, "edgeAnimationHover", "init");

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

function setRuntimeEdgeAnimationHover anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_edgeAnimationHover !== undefined) {
            old = this.$$runtime_edgeAnimationHover;
        } else if (this.$$user_edgeAnimationHover !== undefined) {
            old = this.$$user_edgeAnimationHover;
        } else if (this.$$theme_edgeAnimationHover !== undefined) {
            old = this.$$theme_edgeAnimationHover;
        } else if (this.$$useinit_edgeAnimationHover) {
            old = this.$$init_edgeAnimationHover;
        }
        if (equ.call(this, this.$$runtime_edgeAnimationHover, value)) return value;
        var computed;
        if (this.$$runtime_edgeAnimationHover !== undefined) {
            computed = this.$$runtime_edgeAnimationHover = value;
        } else if (this.$$user_edgeAnimationHover !== undefined) {
            computed = this.$$runtime_edgeAnimationHover = value;
        } else if (this.$$theme_edgeAnimationHover !== undefined) {
            computed = this.$$runtime_edgeAnimationHover = value;
        } else if (this.$$useinit_edgeAnimationHover) {
            delete this.$$useinit_edgeAnimationHover;
            computed = this.$$runtime_edgeAnimationHover = value;
        } else {
            computed = this.$$runtime_edgeAnimationHover = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_edgeAnimationHover;
        var self = this;
        var promise;
        promise = this.__gu(computed, old, "edgeAnimationHover", "setRuntime");

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

function resetRuntimeEdgeAnimationHover anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_edgeAnimationHover !== undefined) {
        old = this.$$runtime_edgeAnimationHover;
    } else if (this.$$user_edgeAnimationHover !== undefined) {
        old = this.$$user_edgeAnimationHover;
    } else if (this.$$theme_edgeAnimationHover !== undefined) {
        old = this.$$theme_edgeAnimationHover;
    } else if (this.$$useinit_edgeAnimationHover) {
        old = this.$$init_edgeAnimationHover;
    }
    if (this.$$runtime_edgeAnimationHover === undefined) return;
    var computed;
    if (this.$$runtime_edgeAnimationHover !== undefined) {
        delete this.$$runtime_edgeAnimationHover;
        if (this.$$user_edgeAnimationHover !== undefined) computed = this.$$user_edgeAnimationHover;
        else if (this.$$theme_edgeAnimationHover !== undefined) computed = this.$$theme_edgeAnimationHover;
        else if (this.$$init_edgeAnimationHover !== undefined) {
            computed = this.$$init_edgeAnimationHover;
            this.$$useinit_edgeAnimationHover = true;
        }
    } else if (this.$$user_edgeAnimationHover !== undefined) {
        computed = this.$$user_edgeAnimationHover;
    } else if (this.$$theme_edgeAnimationHover !== undefined) {} else if (this.$$useinit_edgeAnimationHover) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_edgeAnimationHover;
    var self = this;
    var promise;
    promise = this.__gu(computed, old, "edgeAnimationHover", "resetRuntime");

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

function setThemedEdgeAnimationHover anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_edgeAnimationHover !== undefined) {
            old = this.$$runtime_edgeAnimationHover;
        } else if (this.$$user_edgeAnimationHover !== undefined) {
            old = this.$$user_edgeAnimationHover;
        } else if (this.$$theme_edgeAnimationHover !== undefined) {
            old = this.$$theme_edgeAnimationHover;
        } else if (this.$$useinit_edgeAnimationHover) {
            old = this.$$init_edgeAnimationHover;
        }
        if (equ.call(this, this.$$theme_edgeAnimationHover, value)) return value;
        var computed;
        if (this.$$runtime_edgeAnimationHover !== undefined) {
            computed = this.$$runtime_edgeAnimationHover;
            this.$$theme_edgeAnimationHover = value;
        } else if (this.$$user_edgeAnimationHover !== undefined) {
            computed = this.$$user_edgeAnimationHover;
            this.$$theme_edgeAnimationHover = value;
        } else if (this.$$theme_edgeAnimationHover !== undefined) {
            computed = this.$$theme_edgeAnimationHover = value;
        } else if (this.$$useinit_edgeAnimationHover) {
            delete this.$$useinit_edgeAnimationHover;
            computed = this.$$theme_edgeAnimationHover = value;
        } else {
            computed = this.$$theme_edgeAnimationHover = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_edgeAnimationHover;
        var self = this;
        var promise;
        promise = this.__gu(computed, old, "edgeAnimationHover", "setThemed");

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

function resetThemedEdgeAnimationHover anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_edgeAnimationHover !== undefined) {
        old = this.$$runtime_edgeAnimationHover;
    } else if (this.$$user_edgeAnimationHover !== undefined) {
        old = this.$$user_edgeAnimationHover;
    } else if (this.$$theme_edgeAnimationHover !== undefined) {
        old = this.$$theme_edgeAnimationHover;
    } else if (this.$$useinit_edgeAnimationHover) {
        old = this.$$init_edgeAnimationHover;
    }
    if (this.$$theme_edgeAnimationHover === undefined) return;
    var computed;
    if (this.$$runtime_edgeAnimationHover !== undefined) {
        computed = this.$$runtime_edgeAnimationHover;
        delete this.$$theme_edgeAnimationHover;
    } else if (this.$$user_edgeAnimationHover !== undefined) {
        computed = this.$$user_edgeAnimationHover;
        delete this.$$theme_edgeAnimationHover;
    } else if (this.$$theme_edgeAnimationHover !== undefined) {
        delete this.$$theme_edgeAnimationHover;
        if (this.$$init_edgeAnimationHover !== undefined) {
            computed = this.$$init_edgeAnimationHover;
            this.$$useinit_edgeAnimationHover = true;
        }
    } else if (this.$$useinit_edgeAnimationHover) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_edgeAnimationHover;
    var self = this;
    var promise;
    promise = this.__gu(computed, old, "edgeAnimationHover", "resetThemed");

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

function getEdgeAnimationHide anonymous(value) {
    if (this.$$runtime_edgeAnimationHide !== undefined) return this.$$runtime_edgeAnimationHide;
    if (this.$$user_edgeAnimationHide !== undefined) return this.$$user_edgeAnimationHide;
    else if (this.$$theme_edgeAnimationHide !== undefined) return this.$$theme_edgeAnimationHide;
    else return this.$$init_edgeAnimationHide;
}

function setEdgeAnimationHide anonymous(value) {
    this.$$setEdgeAnimationHideImpl.apply(this, arguments);
    return value;
}

function resetEdgeAnimationHide anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_edgeAnimationHide !== undefined) {
        old = this.$$runtime_edgeAnimationHide;
    } else if (this.$$user_edgeAnimationHide !== undefined) {
        old = this.$$user_edgeAnimationHide;
    } else if (this.$$theme_edgeAnimationHide !== undefined) {
        old = this.$$theme_edgeAnimationHide;
    } else if (this.$$useinit_edgeAnimationHide) {
        old = this.$$init_edgeAnimationHide;
    }
    if (this.$$user_edgeAnimationHide === undefined) return;
    var computed;
    if (this.$$runtime_edgeAnimationHide !== undefined) {
        computed = this.$$runtime_edgeAnimationHide;
        delete this.$$user_edgeAnimationHide;
    } else if (this.$$user_edgeAnimationHide !== undefined) {
        delete this.$$user_edgeAnimationHide;
        if (this.$$runtime_edgeAnimationHide !== undefined) computed = this.$$runtime_edgeAnimationHide;
        if (this.$$theme_edgeAnimationHide !== undefined) computed = this.$$theme_edgeAnimationHide;
        else if (this.$$init_edgeAnimationHide !== undefined) {
            computed = this.$$init_edgeAnimationHide;
            this.$$useinit_edgeAnimationHide = true;
        }
    } else if (this.$$theme_edgeAnimationHide !== undefined) {} else if (this.$$useinit_edgeAnimationHide) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_edgeAnimationHide;
    var self = this;
    var promise;
    promise = this.__gv(computed, old, "edgeAnimationHide", "reset");

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

function initEdgeAnimationHide anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_edgeAnimationHide !== undefined) {
        old = this.$$runtime_edgeAnimationHide;
    } else if (this.$$user_edgeAnimationHide !== undefined) {
        old = this.$$user_edgeAnimationHide;
    } else if (this.$$theme_edgeAnimationHide !== undefined) {
        old = this.$$theme_edgeAnimationHide;
    } else if (this.$$useinit_edgeAnimationHide) {
        old = this.$$init_edgeAnimationHide;
    }
    var computed;
    if (this.$$runtime_edgeAnimationHide !== undefined) {
        computed = this.$$runtime_edgeAnimationHide;
    } else if (this.$$user_edgeAnimationHide !== undefined) {
        computed = this.$$user_edgeAnimationHide;
    } else if (this.$$theme_edgeAnimationHide !== undefined) {
        computed = this.$$theme_edgeAnimationHide;
    } else if (this.$$useinit_edgeAnimationHide) {
        computed = this.$$init_edgeAnimationHide;
    } else {
        computed = this.$$init_edgeAnimationHide;
        this.$$useinit_edgeAnimationHide = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this.__gv(computed, old, "edgeAnimationHide", "init");

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

function setRuntimeEdgeAnimationHide anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_edgeAnimationHide !== undefined) {
            old = this.$$runtime_edgeAnimationHide;
        } else if (this.$$user_edgeAnimationHide !== undefined) {
            old = this.$$user_edgeAnimationHide;
        } else if (this.$$theme_edgeAnimationHide !== undefined) {
            old = this.$$theme_edgeAnimationHide;
        } else if (this.$$useinit_edgeAnimationHide) {
            old = this.$$init_edgeAnimationHide;
        }
        if (equ.call(this, this.$$runtime_edgeAnimationHide, value)) return value;
        var computed;
        if (this.$$runtime_edgeAnimationHide !== undefined) {
            computed = this.$$runtime_edgeAnimationHide = value;
        } else if (this.$$user_edgeAnimationHide !== undefined) {
            computed = this.$$runtime_edgeAnimationHide = value;
        } else if (this.$$theme_edgeAnimationHide !== undefined) {
            computed = this.$$runtime_edgeAnimationHide = value;
        } else if (this.$$useinit_edgeAnimationHide) {
            delete this.$$useinit_edgeAnimationHide;
            computed = this.$$runtime_edgeAnimationHide = value;
        } else {
            computed = this.$$runtime_edgeAnimationHide = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_edgeAnimationHide;
        var self = this;
        var promise;
        promise = this.__gv(computed, old, "edgeAnimationHide", "setRuntime");

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

function resetRuntimeEdgeAnimationHide anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_edgeAnimationHide !== undefined) {
        old = this.$$runtime_edgeAnimationHide;
    } else if (this.$$user_edgeAnimationHide !== undefined) {
        old = this.$$user_edgeAnimationHide;
    } else if (this.$$theme_edgeAnimationHide !== undefined) {
        old = this.$$theme_edgeAnimationHide;
    } else if (this.$$useinit_edgeAnimationHide) {
        old = this.$$init_edgeAnimationHide;
    }
    if (this.$$runtime_edgeAnimationHide === undefined) return;
    var computed;
    if (this.$$runtime_edgeAnimationHide !== undefined) {
        delete this.$$runtime_edgeAnimationHide;
        if (this.$$user_edgeAnimationHide !== undefined) computed = this.$$user_edgeAnimationHide;
        else if (this.$$theme_edgeAnimationHide !== undefined) computed = this.$$theme_edgeAnimationHide;
        else if (this.$$init_edgeAnimationHide !== undefined) {
            computed = this.$$init_edgeAnimationHide;
            this.$$useinit_edgeAnimationHide = true;
        }
    } else if (this.$$user_edgeAnimationHide !== undefined) {
        computed = this.$$user_edgeAnimationHide;
    } else if (this.$$theme_edgeAnimationHide !== undefined) {} else if (this.$$useinit_edgeAnimationHide) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_edgeAnimationHide;
    var self = this;
    var promise;
    promise = this.__gv(computed, old, "edgeAnimationHide", "resetRuntime");

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

function setThemedEdgeAnimationHide anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_edgeAnimationHide !== undefined) {
            old = this.$$runtime_edgeAnimationHide;
        } else if (this.$$user_edgeAnimationHide !== undefined) {
            old = this.$$user_edgeAnimationHide;
        } else if (this.$$theme_edgeAnimationHide !== undefined) {
            old = this.$$theme_edgeAnimationHide;
        } else if (this.$$useinit_edgeAnimationHide) {
            old = this.$$init_edgeAnimationHide;
        }
        if (equ.call(this, this.$$theme_edgeAnimationHide, value)) return value;
        var computed;
        if (this.$$runtime_edgeAnimationHide !== undefined) {
            computed = this.$$runtime_edgeAnimationHide;
            this.$$theme_edgeAnimationHide = value;
        } else if (this.$$user_edgeAnimationHide !== undefined) {
            computed = this.$$user_edgeAnimationHide;
            this.$$theme_edgeAnimationHide = value;
        } else if (this.$$theme_edgeAnimationHide !== undefined) {
            computed = this.$$theme_edgeAnimationHide = value;
        } else if (this.$$useinit_edgeAnimationHide) {
            delete this.$$useinit_edgeAnimationHide;
            computed = this.$$theme_edgeAnimationHide = value;
        } else {
            computed = this.$$theme_edgeAnimationHide = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_edgeAnimationHide;
        var self = this;
        var promise;
        promise = this.__gv(computed, old, "edgeAnimationHide", "setThemed");

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

function resetThemedEdgeAnimationHide anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_edgeAnimationHide !== undefined) {
        old = this.$$runtime_edgeAnimationHide;
    } else if (this.$$user_edgeAnimationHide !== undefined) {
        old = this.$$user_edgeAnimationHide;
    } else if (this.$$theme_edgeAnimationHide !== undefined) {
        old = this.$$theme_edgeAnimationHide;
    } else if (this.$$useinit_edgeAnimationHide) {
        old = this.$$init_edgeAnimationHide;
    }
    if (this.$$theme_edgeAnimationHide === undefined) return;
    var computed;
    if (this.$$runtime_edgeAnimationHide !== undefined) {
        computed = this.$$runtime_edgeAnimationHide;
        delete this.$$theme_edgeAnimationHide;
    } else if (this.$$user_edgeAnimationHide !== undefined) {
        computed = this.$$user_edgeAnimationHide;
        delete this.$$theme_edgeAnimationHide;
    } else if (this.$$theme_edgeAnimationHide !== undefined) {
        delete this.$$theme_edgeAnimationHide;
        if (this.$$init_edgeAnimationHide !== undefined) {
            computed = this.$$init_edgeAnimationHide;
            this.$$useinit_edgeAnimationHide = true;
        }
    } else if (this.$$useinit_edgeAnimationHide) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_edgeAnimationHide;
    var self = this;
    var promise;
    promise = this.__gv(computed, old, "edgeAnimationHide", "resetThemed");

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

function getEdgeAnimation anonymous(value) {
    if (this.$$runtime_edgeAnimation !== undefined) return this.$$runtime_edgeAnimation;
    if (this.$$user_edgeAnimation !== undefined) return this.$$user_edgeAnimation;
    else return this.$$init_edgeAnimation;
}

function setEdgeAnimation anonymous(value) {
    this.$$setEdgeAnimationImpl.apply(this, arguments);
    return value;
}

function resetEdgeAnimation anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var old;
    if (this.$$runtime_edgeAnimation !== undefined) {
        old = this.$$runtime_edgeAnimation;
    } else if (this.$$user_edgeAnimation !== undefined) {
        old = this.$$user_edgeAnimation;
    } else if (this.$$useinit_edgeAnimation) {
        old = this.$$init_edgeAnimation;
    }
    if (this.$$user_edgeAnimation === undefined) return;
    var computed;
    if (this.$$runtime_edgeAnimation !== undefined) {
        computed = this.$$runtime_edgeAnimation;
        delete this.$$user_edgeAnimation;
    } else if (this.$$user_edgeAnimation !== undefined) {
        delete this.$$user_edgeAnimation;
        if (this.$$runtime_edgeAnimation !== undefined) computed = this.$$runtime_edgeAnimation;
        if (this.$$theme_edgeAnimation !== undefined) computed = this.$$theme_edgeAnimation;
        else if (this.$$init_edgeAnimation !== undefined) {
            computed = this.$$init_edgeAnimation;
            this.$$useinit_edgeAnimation = true;
        }
    } else if (this.$$useinit_edgeAnimation) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_edgeAnimation;
    var self = this;
    var promise;
    promise = this.__gz(computed, old, "edgeAnimation", "reset");

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

function initEdgeAnimation anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var old;
    if (this.$$runtime_edgeAnimation !== undefined) {
        old = this.$$runtime_edgeAnimation;
    } else if (this.$$user_edgeAnimation !== undefined) {
        old = this.$$user_edgeAnimation;
    } else if (this.$$useinit_edgeAnimation) {
        old = this.$$init_edgeAnimation;
    }
    var computed;
    if (this.$$runtime_edgeAnimation !== undefined) {
        computed = this.$$runtime_edgeAnimation;
    } else if (this.$$user_edgeAnimation !== undefined) {
        computed = this.$$user_edgeAnimation;
    } else if (this.$$useinit_edgeAnimation) {
        computed = this.$$init_edgeAnimation;
    } else {
        computed = this.$$init_edgeAnimation;
        this.$$useinit_edgeAnimation = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this.__gz(computed, old, "edgeAnimation", "init");

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

function setRuntimeEdgeAnimation anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var old;
        if (this.$$runtime_edgeAnimation !== undefined) {
            old = this.$$runtime_edgeAnimation;
        } else if (this.$$user_edgeAnimation !== undefined) {
            old = this.$$user_edgeAnimation;
        } else if (this.$$useinit_edgeAnimation) {
            old = this.$$init_edgeAnimation;
        }
        if (equ.call(this, this.$$runtime_edgeAnimation, value)) return value;
        var computed;
        if (this.$$runtime_edgeAnimation !== undefined) {
            computed = this.$$runtime_edgeAnimation = value;
        } else if (this.$$user_edgeAnimation !== undefined) {
            computed = this.$$runtime_edgeAnimation = value;
        } else if (this.$$useinit_edgeAnimation) {
            delete this.$$useinit_edgeAnimation;
            computed = this.$$runtime_edgeAnimation = value;
        } else {
            computed = this.$$runtime_edgeAnimation = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_edgeAnimation;
        var self = this;
        var promise;
        promise = this.__gz(computed, old, "edgeAnimation", "setRuntime");

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

function resetRuntimeEdgeAnimation anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var old;
    if (this.$$runtime_edgeAnimation !== undefined) {
        old = this.$$runtime_edgeAnimation;
    } else if (this.$$user_edgeAnimation !== undefined) {
        old = this.$$user_edgeAnimation;
    } else if (this.$$useinit_edgeAnimation) {
        old = this.$$init_edgeAnimation;
    }
    if (this.$$runtime_edgeAnimation === undefined) return;
    var computed;
    if (this.$$runtime_edgeAnimation !== undefined) {
        delete this.$$runtime_edgeAnimation;
        if (this.$$user_edgeAnimation !== undefined) computed = this.$$user_edgeAnimation;
        else if (this.$$theme_edgeAnimation !== undefined) computed = this.$$theme_edgeAnimation;
        else if (this.$$init_edgeAnimation !== undefined) {
            computed = this.$$init_edgeAnimation;
            this.$$useinit_edgeAnimation = true;
        }
    } else if (this.$$user_edgeAnimation !== undefined) {
        computed = this.$$user_edgeAnimation;
    } else if (this.$$useinit_edgeAnimation) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_edgeAnimation;
    var self = this;
    var promise;
    promise = this.__gz(computed, old, "edgeAnimation", "resetRuntime");

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

function startEdgeAnimation(n) {
    return this.__gs = n, n != t || !this.__go ? n != u || !this.__gp ? n != i || !this.__gq || this.__gB(this.__gq) : this.__gB(this.__gp) : (this.__gB(this.__go), !this.__gr || qx.bom.element.Style.setStyles(this.getContentElement().getDomElement(), {
        opacity: 0
    }, !0)), this.__gC(!1)
}

function stopEdgeAnimation() {
    this.__gr && this.__gr.stop();
    this.__gr = null
}

function getCssContent anonymous(value) {
    if (this.$$runtime_cssContent !== undefined) return this.$$runtime_cssContent;
    if (this.$$user_cssContent !== undefined) return this.$$user_cssContent;
    else return this.$$init_cssContent;
}

function setCssContent anonymous(value) {
    this.$$setCssContentImpl.apply(this, arguments);
    return value;
}

function resetCssContent anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_cssContent !== undefined) {
        old = this.$$runtime_cssContent;
    } else if (this.$$user_cssContent !== undefined) {
        old = this.$$user_cssContent;
    } else if (this.$$useinit_cssContent) {
        old = this.$$init_cssContent;
    }
    if (this.$$user_cssContent === undefined) return;
    var computed;
    if (this.$$runtime_cssContent !== undefined) {
        computed = this.$$runtime_cssContent;
        delete this.$$user_cssContent;
    } else if (this.$$user_cssContent !== undefined) {
        delete this.$$user_cssContent;
        if (this.$$runtime_cssContent !== undefined) computed = this.$$runtime_cssContent;
        if (this.$$theme_cssContent !== undefined) computed = this.$$theme_cssContent;
        else if (this.$$init_cssContent !== undefined) {
            computed = this.$$init_cssContent;
            this.$$useinit_cssContent = true;
        }
    } else if (this.$$useinit_cssContent) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_cssContent;
    var self = this;
    var promise;
    promise = this.__gR(computed, old, "cssContent", "reset");

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

function initCssContent anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_cssContent !== undefined) {
        old = this.$$runtime_cssContent;
    } else if (this.$$user_cssContent !== undefined) {
        old = this.$$user_cssContent;
    } else if (this.$$useinit_cssContent) {
        old = this.$$init_cssContent;
    }
    var computed;
    if (this.$$runtime_cssContent !== undefined) {
        computed = this.$$runtime_cssContent;
    } else if (this.$$user_cssContent !== undefined) {
        computed = this.$$user_cssContent;
    } else if (this.$$useinit_cssContent) {
        computed = this.$$init_cssContent;
    } else {
        computed = this.$$init_cssContent;
        this.$$useinit_cssContent = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this.__gR(computed, old, "cssContent", "init");

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

function setRuntimeCssContent anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_cssContent !== undefined) {
            old = this.$$runtime_cssContent;
        } else if (this.$$user_cssContent !== undefined) {
            old = this.$$user_cssContent;
        } else if (this.$$useinit_cssContent) {
            old = this.$$init_cssContent;
        }
        if (equ.call(this, this.$$runtime_cssContent, value)) return value;
        var computed;
        if (this.$$runtime_cssContent !== undefined) {
            computed = this.$$runtime_cssContent = value;
        } else if (this.$$user_cssContent !== undefined) {
            computed = this.$$runtime_cssContent = value;
        } else if (this.$$useinit_cssContent) {
            delete this.$$useinit_cssContent;
            computed = this.$$runtime_cssContent = value;
        } else {
            computed = this.$$runtime_cssContent = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_cssContent;
        var self = this;
        var promise;
        promise = this.__gR(computed, old, "cssContent", "setRuntime");

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

function resetRuntimeCssContent anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_cssContent !== undefined) {
        old = this.$$runtime_cssContent;
    } else if (this.$$user_cssContent !== undefined) {
        old = this.$$user_cssContent;
    } else if (this.$$useinit_cssContent) {
        old = this.$$init_cssContent;
    }
    if (this.$$runtime_cssContent === undefined) return;
    var computed;
    if (this.$$runtime_cssContent !== undefined) {
        delete this.$$runtime_cssContent;
        if (this.$$user_cssContent !== undefined) computed = this.$$user_cssContent;
        else if (this.$$theme_cssContent !== undefined) computed = this.$$theme_cssContent;
        else if (this.$$init_cssContent !== undefined) {
            computed = this.$$init_cssContent;
            this.$$useinit_cssContent = true;
        }
    } else if (this.$$user_cssContent !== undefined) {
        computed = this.$$user_cssContent;
    } else if (this.$$useinit_cssContent) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_cssContent;
    var self = this;
    var promise;
    promise = this.__gR(computed, old, "cssContent", "resetRuntime");

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

function refreshCssContent() {
    this.__gR(this.getCssContent())
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

function resetThemedMinWidth anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_minWidth !== undefined) {
        old = this.$$runtime_minWidth;
    } else if (this.$$user_minWidth !== undefined) {
        old = this.$$user_minWidth;
    } else if (this.$$theme_minWidth !== undefined) {
        old = this.$$theme_minWidth;
    } else if (this.$$useinit_minWidth) {
        old = this.$$init_minWidth;
    }
    if (this.$$theme_minWidth === undefined) return;
    var computed;
    if (this.$$runtime_minWidth !== undefined) {
        computed = this.$$runtime_minWidth;
        delete this.$$theme_minWidth;
    } else if (this.$$user_minWidth !== undefined) {
        computed = this.$$user_minWidth;
        delete this.$$theme_minWidth;
    } else if (this.$$theme_minWidth !== undefined) {
        delete this.$$theme_minWidth;
        if (this.$$init_minWidth !== undefined) {
            computed = this.$$init_minWidth;
            this.$$useinit_minWidth = true;
        }
    } else if (this.$$useinit_minWidth) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_minWidth;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "minWidth", "resetThemed");

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

function resetThemedWidth anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_width !== undefined) {
        old = this.$$runtime_width;
    } else if (this.$$user_width !== undefined) {
        old = this.$$user_width;
    } else if (this.$$theme_width !== undefined) {
        old = this.$$theme_width;
    } else if (this.$$useinit_width) {
        old = this.$$init_width;
    }
    if (this.$$theme_width === undefined) return;
    var computed;
    if (this.$$runtime_width !== undefined) {
        computed = this.$$runtime_width;
        delete this.$$theme_width;
    } else if (this.$$user_width !== undefined) {
        computed = this.$$user_width;
        delete this.$$theme_width;
    } else if (this.$$theme_width !== undefined) {
        delete this.$$theme_width;
        if (this.$$init_width !== undefined) {
            computed = this.$$init_width;
            this.$$useinit_width = true;
        }
    } else if (this.$$useinit_width) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_width;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "width", "resetThemed");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeWidth')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeWidth', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeWidthAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeWidthAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetThemedMaxWidth anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_maxWidth !== undefined) {
        old = this.$$runtime_maxWidth;
    } else if (this.$$user_maxWidth !== undefined) {
        old = this.$$user_maxWidth;
    } else if (this.$$theme_maxWidth !== undefined) {
        old = this.$$theme_maxWidth;
    } else if (this.$$useinit_maxWidth) {
        old = this.$$init_maxWidth;
    }
    if (this.$$theme_maxWidth === undefined) return;
    var computed;
    if (this.$$runtime_maxWidth !== undefined) {
        computed = this.$$runtime_maxWidth;
        delete this.$$theme_maxWidth;
    } else if (this.$$user_maxWidth !== undefined) {
        computed = this.$$user_maxWidth;
        delete this.$$theme_maxWidth;
    } else if (this.$$theme_maxWidth !== undefined) {
        delete this.$$theme_maxWidth;
        if (this.$$init_maxWidth !== undefined) {
            computed = this.$$init_maxWidth;
            this.$$useinit_maxWidth = true;
        }
    } else if (this.$$useinit_maxWidth) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_maxWidth;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "maxWidth", "resetThemed");

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

function resetThemedMinHeight anonymous(value) {
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
    if (this.$$theme_minHeight === undefined) return;
    var computed;
    if (this.$$runtime_minHeight !== undefined) {
        computed = this.$$runtime_minHeight;
        delete this.$$theme_minHeight;
    } else if (this.$$user_minHeight !== undefined) {
        computed = this.$$user_minHeight;
        delete this.$$theme_minHeight;
    } else if (this.$$theme_minHeight !== undefined) {
        delete this.$$theme_minHeight;
        if (this.$$init_minHeight !== undefined) {
            computed = this.$$init_minHeight;
            this.$$useinit_minHeight = true;
        }
    } else if (this.$$useinit_minHeight) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_minHeight;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "minHeight", "resetThemed");

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

function resetThemedMaxHeight anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_maxHeight !== undefined) {
        old = this.$$runtime_maxHeight;
    } else if (this.$$user_maxHeight !== undefined) {
        old = this.$$user_maxHeight;
    } else if (this.$$theme_maxHeight !== undefined) {
        old = this.$$theme_maxHeight;
    } else if (this.$$useinit_maxHeight) {
        old = this.$$init_maxHeight;
    }
    if (this.$$theme_maxHeight === undefined) return;
    var computed;
    if (this.$$runtime_maxHeight !== undefined) {
        computed = this.$$runtime_maxHeight;
        delete this.$$theme_maxHeight;
    } else if (this.$$user_maxHeight !== undefined) {
        computed = this.$$user_maxHeight;
        delete this.$$theme_maxHeight;
    } else if (this.$$theme_maxHeight !== undefined) {
        delete this.$$theme_maxHeight;
        if (this.$$init_maxHeight !== undefined) {
            computed = this.$$init_maxHeight;
            this.$$useinit_maxHeight = true;
        }
    } else if (this.$$useinit_maxHeight) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_maxHeight;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "maxHeight", "resetThemed");

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

function resetThemedAllowGrowX anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_allowGrowX !== undefined) {
        old = this.$$runtime_allowGrowX;
    } else if (this.$$user_allowGrowX !== undefined) {
        old = this.$$user_allowGrowX;
    } else if (this.$$theme_allowGrowX !== undefined) {
        old = this.$$theme_allowGrowX;
    } else if (this.$$useinit_allowGrowX) {
        old = this.$$init_allowGrowX;
    }
    if (this.$$theme_allowGrowX === undefined) return;
    var computed;
    if (this.$$runtime_allowGrowX !== undefined) {
        computed = this.$$runtime_allowGrowX;
        delete this.$$theme_allowGrowX;
    } else if (this.$$user_allowGrowX !== undefined) {
        computed = this.$$user_allowGrowX;
        delete this.$$theme_allowGrowX;
    } else if (this.$$theme_allowGrowX !== undefined) {
        delete this.$$theme_allowGrowX;
        if (this.$$init_allowGrowX !== undefined) {
            computed = this.$$init_allowGrowX;
            this.$$useinit_allowGrowX = true;
        }
    } else if (this.$$useinit_allowGrowX) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_allowGrowX;
    var self = this;
    var promise;
    promise = this._applyStretching(computed, old, "allowGrowX", "resetThemed");

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

function resetThemedAllowShrinkX anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_allowShrinkX !== undefined) {
        old = this.$$runtime_allowShrinkX;
    } else if (this.$$user_allowShrinkX !== undefined) {
        old = this.$$user_allowShrinkX;
    } else if (this.$$theme_allowShrinkX !== undefined) {
        old = this.$$theme_allowShrinkX;
    } else if (this.$$useinit_allowShrinkX) {
        old = this.$$init_allowShrinkX;
    }
    if (this.$$theme_allowShrinkX === undefined) return;
    var computed;
    if (this.$$runtime_allowShrinkX !== undefined) {
        computed = this.$$runtime_allowShrinkX;
        delete this.$$theme_allowShrinkX;
    } else if (this.$$user_allowShrinkX !== undefined) {
        computed = this.$$user_allowShrinkX;
        delete this.$$theme_allowShrinkX;
    } else if (this.$$theme_allowShrinkX !== undefined) {
        delete this.$$theme_allowShrinkX;
        if (this.$$init_allowShrinkX !== undefined) {
            computed = this.$$init_allowShrinkX;
            this.$$useinit_allowShrinkX = true;
        }
    } else if (this.$$useinit_allowShrinkX) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_allowShrinkX;
    var self = this;
    var promise;
    promise = this._applyStretching(computed, old, "allowShrinkX", "resetThemed");

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

function resetThemedAllowGrowY anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_allowGrowY !== undefined) {
        old = this.$$runtime_allowGrowY;
    } else if (this.$$user_allowGrowY !== undefined) {
        old = this.$$user_allowGrowY;
    } else if (this.$$theme_allowGrowY !== undefined) {
        old = this.$$theme_allowGrowY;
    } else if (this.$$useinit_allowGrowY) {
        old = this.$$init_allowGrowY;
    }
    if (this.$$theme_allowGrowY === undefined) return;
    var computed;
    if (this.$$runtime_allowGrowY !== undefined) {
        computed = this.$$runtime_allowGrowY;
        delete this.$$theme_allowGrowY;
    } else if (this.$$user_allowGrowY !== undefined) {
        computed = this.$$user_allowGrowY;
        delete this.$$theme_allowGrowY;
    } else if (this.$$theme_allowGrowY !== undefined) {
        delete this.$$theme_allowGrowY;
        if (this.$$init_allowGrowY !== undefined) {
            computed = this.$$init_allowGrowY;
            this.$$useinit_allowGrowY = true;
        }
    } else if (this.$$useinit_allowGrowY) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_allowGrowY;
    var self = this;
    var promise;
    promise = this._applyStretching(computed, old, "allowGrowY", "resetThemed");

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

function resetThemedAllowShrinkY anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_allowShrinkY !== undefined) {
        old = this.$$runtime_allowShrinkY;
    } else if (this.$$user_allowShrinkY !== undefined) {
        old = this.$$user_allowShrinkY;
    } else if (this.$$theme_allowShrinkY !== undefined) {
        old = this.$$theme_allowShrinkY;
    } else if (this.$$useinit_allowShrinkY) {
        old = this.$$init_allowShrinkY;
    }
    if (this.$$theme_allowShrinkY === undefined) return;
    var computed;
    if (this.$$runtime_allowShrinkY !== undefined) {
        computed = this.$$runtime_allowShrinkY;
        delete this.$$theme_allowShrinkY;
    } else if (this.$$user_allowShrinkY !== undefined) {
        computed = this.$$user_allowShrinkY;
        delete this.$$theme_allowShrinkY;
    } else if (this.$$theme_allowShrinkY !== undefined) {
        delete this.$$theme_allowShrinkY;
        if (this.$$init_allowShrinkY !== undefined) {
            computed = this.$$init_allowShrinkY;
            this.$$useinit_allowShrinkY = true;
        }
    } else if (this.$$useinit_allowShrinkY) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_allowShrinkY;
    var self = this;
    var promise;
    promise = this._applyStretching(computed, old, "allowShrinkY", "resetThemed");

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

function resetThemedMarginTop anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_marginTop !== undefined) {
        old = this.$$runtime_marginTop;
    } else if (this.$$user_marginTop !== undefined) {
        old = this.$$user_marginTop;
    } else if (this.$$theme_marginTop !== undefined) {
        old = this.$$theme_marginTop;
    } else if (this.$$useinit_marginTop) {
        old = this.$$init_marginTop;
    }
    if (this.$$theme_marginTop === undefined) return;
    var computed;
    if (this.$$runtime_marginTop !== undefined) {
        computed = this.$$runtime_marginTop;
        delete this.$$theme_marginTop;
    } else if (this.$$user_marginTop !== undefined) {
        computed = this.$$user_marginTop;
        delete this.$$theme_marginTop;
    } else if (this.$$theme_marginTop !== undefined) {
        delete this.$$theme_marginTop;
        if (this.$$init_marginTop !== undefined) {
            computed = this.$$init_marginTop;
            this.$$useinit_marginTop = true;
        }
    } else if (this.$$useinit_marginTop) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_marginTop;
    var self = this;
    var promise;
    promise = this._applyMargin(computed, old, "marginTop", "resetThemed");

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

function resetThemedMarginRight anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_marginRight !== undefined) {
        old = this.$$runtime_marginRight;
    } else if (this.$$user_marginRight !== undefined) {
        old = this.$$user_marginRight;
    } else if (this.$$theme_marginRight !== undefined) {
        old = this.$$theme_marginRight;
    } else if (this.$$useinit_marginRight) {
        old = this.$$init_marginRight;
    }
    if (this.$$theme_marginRight === undefined) return;
    var computed;
    if (this.$$runtime_marginRight !== undefined) {
        computed = this.$$runtime_marginRight;
        delete this.$$theme_marginRight;
    } else if (this.$$user_marginRight !== undefined) {
        computed = this.$$user_marginRight;
        delete this.$$theme_marginRight;
    } else if (this.$$theme_marginRight !== undefined) {
        delete this.$$theme_marginRight;
        if (this.$$init_marginRight !== undefined) {
            computed = this.$$init_marginRight;
            this.$$useinit_marginRight = true;
        }
    } else if (this.$$useinit_marginRight) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_marginRight;
    var self = this;
    var promise;
    promise = this._applyMargin(computed, old, "marginRight", "resetThemed");

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

function resetThemedMarginBottom anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_marginBottom !== undefined) {
        old = this.$$runtime_marginBottom;
    } else if (this.$$user_marginBottom !== undefined) {
        old = this.$$user_marginBottom;
    } else if (this.$$theme_marginBottom !== undefined) {
        old = this.$$theme_marginBottom;
    } else if (this.$$useinit_marginBottom) {
        old = this.$$init_marginBottom;
    }
    if (this.$$theme_marginBottom === undefined) return;
    var computed;
    if (this.$$runtime_marginBottom !== undefined) {
        computed = this.$$runtime_marginBottom;
        delete this.$$theme_marginBottom;
    } else if (this.$$user_marginBottom !== undefined) {
        computed = this.$$user_marginBottom;
        delete this.$$theme_marginBottom;
    } else if (this.$$theme_marginBottom !== undefined) {
        delete this.$$theme_marginBottom;
        if (this.$$init_marginBottom !== undefined) {
            computed = this.$$init_marginBottom;
            this.$$useinit_marginBottom = true;
        }
    } else if (this.$$useinit_marginBottom) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_marginBottom;
    var self = this;
    var promise;
    promise = this._applyMargin(computed, old, "marginBottom", "resetThemed");

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

function resetThemedMarginLeft anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_marginLeft !== undefined) {
        old = this.$$runtime_marginLeft;
    } else if (this.$$user_marginLeft !== undefined) {
        old = this.$$user_marginLeft;
    } else if (this.$$theme_marginLeft !== undefined) {
        old = this.$$theme_marginLeft;
    } else if (this.$$useinit_marginLeft) {
        old = this.$$init_marginLeft;
    }
    if (this.$$theme_marginLeft === undefined) return;
    var computed;
    if (this.$$runtime_marginLeft !== undefined) {
        computed = this.$$runtime_marginLeft;
        delete this.$$theme_marginLeft;
    } else if (this.$$user_marginLeft !== undefined) {
        computed = this.$$user_marginLeft;
        delete this.$$theme_marginLeft;
    } else if (this.$$theme_marginLeft !== undefined) {
        delete this.$$theme_marginLeft;
        if (this.$$init_marginLeft !== undefined) {
            computed = this.$$init_marginLeft;
            this.$$useinit_marginLeft = true;
        }
    } else if (this.$$useinit_marginLeft) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_marginLeft;
    var self = this;
    var promise;
    promise = this._applyMargin(computed, old, "marginLeft", "resetThemed");

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

function resetThemedAlignX anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_alignX !== undefined) {
        old = this.$$runtime_alignX;
    } else if (this.$$user_alignX !== undefined) {
        old = this.$$user_alignX;
    } else if (this.$$theme_alignX !== undefined) {
        old = this.$$theme_alignX;
    } else if (this.$$useinit_alignX) {
        old = this.$$init_alignX;
    }
    if (this.$$theme_alignX === undefined) return;
    var computed;
    if (this.$$runtime_alignX !== undefined) {
        computed = this.$$runtime_alignX;
        delete this.$$theme_alignX;
    } else if (this.$$user_alignX !== undefined) {
        computed = this.$$user_alignX;
        delete this.$$theme_alignX;
    } else if (this.$$theme_alignX !== undefined) {
        delete this.$$theme_alignX;
        if (this.$$init_alignX !== undefined) {
            computed = this.$$init_alignX;
            this.$$useinit_alignX = true;
        }
    } else if (this.$$useinit_alignX) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyAlign(computed, old, "alignX", "resetThemed");

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

function resetThemedAlignY anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_alignY !== undefined) {
        old = this.$$runtime_alignY;
    } else if (this.$$user_alignY !== undefined) {
        old = this.$$user_alignY;
    } else if (this.$$theme_alignY !== undefined) {
        old = this.$$theme_alignY;
    } else if (this.$$useinit_alignY) {
        old = this.$$init_alignY;
    }
    if (this.$$theme_alignY === undefined) return;
    var computed;
    if (this.$$runtime_alignY !== undefined) {
        computed = this.$$runtime_alignY;
        delete this.$$theme_alignY;
    } else if (this.$$user_alignY !== undefined) {
        computed = this.$$user_alignY;
        delete this.$$theme_alignY;
    } else if (this.$$theme_alignY !== undefined) {
        delete this.$$theme_alignY;
        if (this.$$init_alignY !== undefined) {
            computed = this.$$init_alignY;
            this.$$useinit_alignY = true;
        }
    } else if (this.$$useinit_alignY) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyAlign(computed, old, "alignY", "resetThemed");

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

function resetThemedHeight anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_height !== undefined) {
        old = this.$$runtime_height;
    } else if (this.$$user_height !== undefined) {
        old = this.$$user_height;
    } else if (this.$$theme_height !== undefined) {
        old = this.$$theme_height;
    } else if (this.$$useinit_height) {
        old = this.$$init_height;
    }
    if (this.$$theme_height === undefined) return;
    var computed;
    if (this.$$runtime_height !== undefined) {
        computed = this.$$runtime_height;
        delete this.$$theme_height;
    } else if (this.$$user_height !== undefined) {
        computed = this.$$user_height;
        delete this.$$theme_height;
    } else if (this.$$theme_height !== undefined) {
        delete this.$$theme_height;
        if (this.$$init_height !== undefined) {
            computed = this.$$init_height;
            this.$$useinit_height = true;
        }
    } else if (this.$$useinit_height) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_height;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "height", "resetThemed");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeHeight')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeHeight', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeHeightAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeHeightAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function getSource anonymous() {
    this.getSource.$$install && this.getSource.$$install();
    return this.getSource.apply(this, arguments);
}

function setSource anonymous(value) {
    this.$$setSourceImpl.apply(this, arguments);
    return value;
}

function resetSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function _createContentElement() {
    var rt = qx.ui.core.Widget.prototype._createContentElement.call(this),
        g, nt, tt, d, it;
    return this.__bdE = p + Math.random(), this.__bdF = document.createElementNS(t, w), this.__bdF.style[i] = n, this.__bdF.setAttributeNS(null, h, r), this.__bdF.setAttributeNS(null, e, r), g = document.createElementNS(t, o), g.style[i] = n, g.setAttributeNS(null, s, n), g.setAttributeNS(null, b, this.__bdE), g.appendChild(this.__bdF), nt = document.createElementNS(t, k), nt.style[i] = n, nt.appendChild(g), tt = document.createElementNS(t, v), tt.style[i] = n, tt.setAttributeNS(f, u, y + this.__bdE), d = document.createElementNS(t, o), d.style[i] = n, d.setAttributeNS(a, c, f), d.setAttributeNS(null, h, r), d.setAttributeNS(null, e, r), d.setAttributeNS(null, s, n), d.appendChild(nt), d.appendChild(tt), it = document.createElement(l), it.appendChild(d), rt.useElement(it), rt
}