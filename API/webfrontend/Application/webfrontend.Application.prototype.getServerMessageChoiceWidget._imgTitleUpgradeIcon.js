function getSource anonymous(value) {
    if (this.$$runtime_source !== undefined) return this.$$runtime_source;
    if (this.$$user_source !== undefined) return this.$$user_source;
    else if (this.$$theme_source !== undefined) return this.$$theme_source;
    else return this.$$init_source;
}

function setSource anonymous(value) {
    this.$$setSourceImpl.apply(this, arguments);
    return value;
}

function resetSource anonymous(value) {
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
    if (this.$$user_source === undefined) return;
    var computed;
    if (this.$$runtime_source !== undefined) {
        computed = this.$$runtime_source;
        delete this.$$user_source;
    } else if (this.$$user_source !== undefined) {
        delete this.$$user_source;
        if (this.$$runtime_source !== undefined) computed = this.$$runtime_source;
        if (this.$$theme_source !== undefined) computed = this.$$theme_source;
        else if (this.$$init_source !== undefined) {
            computed = this.$$init_source;
            this.$$useinit_source = true;
        }
    } else if (this.$$theme_source !== undefined) {} else if (this.$$useinit_source) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_source;
    var self = this;
    var promise;
    promise = this._applySource(computed, old, "source", "reset");

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

function initSource anonymous(value) {
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
    var computed;
    if (this.$$runtime_source !== undefined) {
        computed = this.$$runtime_source;
    } else if (this.$$user_source !== undefined) {
        computed = this.$$user_source;
    } else if (this.$$theme_source !== undefined) {
        computed = this.$$theme_source;
    } else if (this.$$useinit_source) {
        computed = this.$$init_source;
    } else {
        computed = this.$$init_source;
        this.$$useinit_source = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applySource(computed, old, "source", "init");

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

function setRuntimeSource anonymous(value) {
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
        if (equ.call(this, this.$$runtime_source, value)) return value;
        var computed;
        if (this.$$runtime_source !== undefined) {
            computed = this.$$runtime_source = value;
        } else if (this.$$user_source !== undefined) {
            computed = this.$$runtime_source = value;
        } else if (this.$$theme_source !== undefined) {
            computed = this.$$runtime_source = value;
        } else if (this.$$useinit_source) {
            delete this.$$useinit_source;
            computed = this.$$runtime_source = value;
        } else {
            computed = this.$$runtime_source = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_source;
        var self = this;
        var promise;
        promise = this._applySource(computed, old, "source", "setRuntime");

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

function resetRuntimeSource anonymous(value) {
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
    if (this.$$runtime_source === undefined) return;
    var computed;
    if (this.$$runtime_source !== undefined) {
        delete this.$$runtime_source;
        if (this.$$user_source !== undefined) computed = this.$$user_source;
        else if (this.$$theme_source !== undefined) computed = this.$$theme_source;
        else if (this.$$init_source !== undefined) {
            computed = this.$$init_source;
            this.$$useinit_source = true;
        }
    } else if (this.$$user_source !== undefined) {
        computed = this.$$user_source;
    } else if (this.$$theme_source !== undefined) {} else if (this.$$useinit_source) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_source;
    var self = this;
    var promise;
    promise = this._applySource(computed, old, "source", "resetRuntime");

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

function resetThemedSource anonymous(value) {
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
    if (this.$$theme_source === undefined) return;
    var computed;
    if (this.$$runtime_source !== undefined) {
        computed = this.$$runtime_source;
        delete this.$$theme_source;
    } else if (this.$$user_source !== undefined) {
        computed = this.$$user_source;
        delete this.$$theme_source;
    } else if (this.$$theme_source !== undefined) {
        delete this.$$theme_source;
        if (this.$$init_source !== undefined) {
            computed = this.$$init_source;
            this.$$useinit_source = true;
        }
    } else if (this.$$useinit_source) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_source;
    var self = this;
    var promise;
    promise = this._applySource(computed, old, "source", "resetThemed");

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

function getScale anonymous(value) {
    if (this.$$runtime_scale !== undefined) return this.$$runtime_scale;
    if (this.$$user_scale !== undefined) return this.$$user_scale;
    else if (this.$$theme_scale !== undefined) return this.$$theme_scale;
    else return this.$$init_scale;
}

function setScale anonymous(value) {
    this.$$setScaleImpl.apply(this, arguments);
    return value;
}

function resetScale anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_scale !== undefined) {
        old = this.$$runtime_scale;
    } else if (this.$$user_scale !== undefined) {
        old = this.$$user_scale;
    } else if (this.$$theme_scale !== undefined) {
        old = this.$$theme_scale;
    } else if (this.$$useinit_scale) {
        old = this.$$init_scale;
    }
    if (this.$$user_scale === undefined) return;
    var computed;
    if (this.$$runtime_scale !== undefined) {
        computed = this.$$runtime_scale;
        delete this.$$user_scale;
    } else if (this.$$user_scale !== undefined) {
        delete this.$$user_scale;
        if (this.$$runtime_scale !== undefined) computed = this.$$runtime_scale;
        if (this.$$theme_scale !== undefined) computed = this.$$theme_scale;
        else if (this.$$init_scale !== undefined) {
            computed = this.$$init_scale;
            this.$$useinit_scale = true;
        }
    } else if (this.$$theme_scale !== undefined) {} else if (this.$$useinit_scale) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_scale;
    var self = this;
    var promise;
    promise = this._applyScale(computed, old, "scale", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeScale')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeScale', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeScaleAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeScaleAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initScale anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_scale !== undefined) {
        old = this.$$runtime_scale;
    } else if (this.$$user_scale !== undefined) {
        old = this.$$user_scale;
    } else if (this.$$theme_scale !== undefined) {
        old = this.$$theme_scale;
    } else if (this.$$useinit_scale) {
        old = this.$$init_scale;
    }
    var computed;
    if (this.$$runtime_scale !== undefined) {
        computed = this.$$runtime_scale;
    } else if (this.$$user_scale !== undefined) {
        computed = this.$$user_scale;
    } else if (this.$$theme_scale !== undefined) {
        computed = this.$$theme_scale;
    } else if (this.$$useinit_scale) {
        computed = this.$$init_scale;
    } else {
        computed = this.$$init_scale;
        this.$$useinit_scale = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyScale(computed, old, "scale", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeScale')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeScale', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeScaleAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeScaleAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeScale anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_scale !== undefined) {
            old = this.$$runtime_scale;
        } else if (this.$$user_scale !== undefined) {
            old = this.$$user_scale;
        } else if (this.$$theme_scale !== undefined) {
            old = this.$$theme_scale;
        } else if (this.$$useinit_scale) {
            old = this.$$init_scale;
        }
        if (equ.call(this, this.$$runtime_scale, value)) return value;
        var computed;
        if (this.$$runtime_scale !== undefined) {
            computed = this.$$runtime_scale = value;
        } else if (this.$$user_scale !== undefined) {
            computed = this.$$runtime_scale = value;
        } else if (this.$$theme_scale !== undefined) {
            computed = this.$$runtime_scale = value;
        } else if (this.$$useinit_scale) {
            delete this.$$useinit_scale;
            computed = this.$$runtime_scale = value;
        } else {
            computed = this.$$runtime_scale = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_scale;
        var self = this;
        var promise;
        promise = this._applyScale(computed, old, "scale", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeScale')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeScale', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeScaleAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeScaleAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeScale anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_scale !== undefined) {
        old = this.$$runtime_scale;
    } else if (this.$$user_scale !== undefined) {
        old = this.$$user_scale;
    } else if (this.$$theme_scale !== undefined) {
        old = this.$$theme_scale;
    } else if (this.$$useinit_scale) {
        old = this.$$init_scale;
    }
    if (this.$$runtime_scale === undefined) return;
    var computed;
    if (this.$$runtime_scale !== undefined) {
        delete this.$$runtime_scale;
        if (this.$$user_scale !== undefined) computed = this.$$user_scale;
        else if (this.$$theme_scale !== undefined) computed = this.$$theme_scale;
        else if (this.$$init_scale !== undefined) {
            computed = this.$$init_scale;
            this.$$useinit_scale = true;
        }
    } else if (this.$$user_scale !== undefined) {
        computed = this.$$user_scale;
    } else if (this.$$theme_scale !== undefined) {} else if (this.$$useinit_scale) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_scale;
    var self = this;
    var promise;
    promise = this._applyScale(computed, old, "scale", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeScale')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeScale', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeScaleAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeScaleAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setThemedScale anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_scale !== undefined) {
            old = this.$$runtime_scale;
        } else if (this.$$user_scale !== undefined) {
            old = this.$$user_scale;
        } else if (this.$$theme_scale !== undefined) {
            old = this.$$theme_scale;
        } else if (this.$$useinit_scale) {
            old = this.$$init_scale;
        }
        if (equ.call(this, this.$$theme_scale, value)) return value;
        var computed;
        if (this.$$runtime_scale !== undefined) {
            computed = this.$$runtime_scale;
            this.$$theme_scale = value;
        } else if (this.$$user_scale !== undefined) {
            computed = this.$$user_scale;
            this.$$theme_scale = value;
        } else if (this.$$theme_scale !== undefined) {
            computed = this.$$theme_scale = value;
        } else if (this.$$useinit_scale) {
            delete this.$$useinit_scale;
            computed = this.$$theme_scale = value;
        } else {
            computed = this.$$theme_scale = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_scale;
        var self = this;
        var promise;
        promise = this._applyScale(computed, old, "scale", "setThemed");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeScale')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeScale', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeScaleAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeScaleAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetThemedScale anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_scale !== undefined) {
        old = this.$$runtime_scale;
    } else if (this.$$user_scale !== undefined) {
        old = this.$$user_scale;
    } else if (this.$$theme_scale !== undefined) {
        old = this.$$theme_scale;
    } else if (this.$$useinit_scale) {
        old = this.$$init_scale;
    }
    if (this.$$theme_scale === undefined) return;
    var computed;
    if (this.$$runtime_scale !== undefined) {
        computed = this.$$runtime_scale;
        delete this.$$theme_scale;
    } else if (this.$$user_scale !== undefined) {
        computed = this.$$user_scale;
        delete this.$$theme_scale;
    } else if (this.$$theme_scale !== undefined) {
        delete this.$$theme_scale;
        if (this.$$init_scale !== undefined) {
            computed = this.$$init_scale;
            this.$$useinit_scale = true;
        }
    } else if (this.$$useinit_scale) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_scale;
    var self = this;
    var promise;
    promise = this._applyScale(computed, old, "scale", "resetThemed");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeScale')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeScale', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeScaleAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeScaleAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function toggleScale anonymous() {
    return this.setScale(!this.getScale())
}

function isScale anonymous() {
    return this.getScale()
}

function getForceRatio anonymous(value) {
    if (this.$$runtime_forceRatio !== undefined) return this.$$runtime_forceRatio;
    if (this.$$user_forceRatio !== undefined) return this.$$user_forceRatio;
    else return this.$$init_forceRatio;
}

function setForceRatio anonymous(value) {
    this.$$setForceRatioImpl.apply(this, arguments);
    return value;
}

function resetForceRatio anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_forceRatio !== undefined) {
        old = this.$$runtime_forceRatio;
    } else if (this.$$user_forceRatio !== undefined) {
        old = this.$$user_forceRatio;
    } else if (this.$$useinit_forceRatio) {
        old = this.$$init_forceRatio;
    }
    if (this.$$user_forceRatio === undefined) return;
    var computed;
    if (this.$$runtime_forceRatio !== undefined) {
        computed = this.$$runtime_forceRatio;
        delete this.$$user_forceRatio;
    } else if (this.$$user_forceRatio !== undefined) {
        delete this.$$user_forceRatio;
        if (this.$$runtime_forceRatio !== undefined) computed = this.$$runtime_forceRatio;
        if (this.$$theme_forceRatio !== undefined) computed = this.$$theme_forceRatio;
        else if (this.$$init_forceRatio !== undefined) {
            computed = this.$$init_forceRatio;
            this.$$useinit_forceRatio = true;
        }
    } else if (this.$$useinit_forceRatio) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_forceRatio;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "forceRatio", "reset");

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

function initForceRatio anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_forceRatio !== undefined) {
        old = this.$$runtime_forceRatio;
    } else if (this.$$user_forceRatio !== undefined) {
        old = this.$$user_forceRatio;
    } else if (this.$$useinit_forceRatio) {
        old = this.$$init_forceRatio;
    }
    var computed;
    if (this.$$runtime_forceRatio !== undefined) {
        computed = this.$$runtime_forceRatio;
    } else if (this.$$user_forceRatio !== undefined) {
        computed = this.$$user_forceRatio;
    } else if (this.$$useinit_forceRatio) {
        computed = this.$$init_forceRatio;
    } else {
        computed = this.$$init_forceRatio;
        this.$$useinit_forceRatio = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "forceRatio", "init");

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

function setRuntimeForceRatio anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_forceRatio !== undefined) {
            old = this.$$runtime_forceRatio;
        } else if (this.$$user_forceRatio !== undefined) {
            old = this.$$user_forceRatio;
        } else if (this.$$useinit_forceRatio) {
            old = this.$$init_forceRatio;
        }
        if (equ.call(this, this.$$runtime_forceRatio, value)) return value;
        var computed;
        if (this.$$runtime_forceRatio !== undefined) {
            computed = this.$$runtime_forceRatio = value;
        } else if (this.$$user_forceRatio !== undefined) {
            computed = this.$$runtime_forceRatio = value;
        } else if (this.$$useinit_forceRatio) {
            delete this.$$useinit_forceRatio;
            computed = this.$$runtime_forceRatio = value;
        } else {
            computed = this.$$runtime_forceRatio = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_forceRatio;
        var self = this;
        var promise;
        promise = this._applyDimension(computed, old, "forceRatio", "setRuntime");

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

function resetRuntimeForceRatio anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_forceRatio !== undefined) {
        old = this.$$runtime_forceRatio;
    } else if (this.$$user_forceRatio !== undefined) {
        old = this.$$user_forceRatio;
    } else if (this.$$useinit_forceRatio) {
        old = this.$$init_forceRatio;
    }
    if (this.$$runtime_forceRatio === undefined) return;
    var computed;
    if (this.$$runtime_forceRatio !== undefined) {
        delete this.$$runtime_forceRatio;
        if (this.$$user_forceRatio !== undefined) computed = this.$$user_forceRatio;
        else if (this.$$theme_forceRatio !== undefined) computed = this.$$theme_forceRatio;
        else if (this.$$init_forceRatio !== undefined) {
            computed = this.$$init_forceRatio;
            this.$$useinit_forceRatio = true;
        }
    } else if (this.$$user_forceRatio !== undefined) {
        computed = this.$$user_forceRatio;
    } else if (this.$$useinit_forceRatio) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_forceRatio;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "forceRatio", "resetRuntime");

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

function getAllowScaleUp anonymous(value) {
    if (this.$$runtime_allowScaleUp !== undefined) return this.$$runtime_allowScaleUp;
    if (this.$$user_allowScaleUp !== undefined) return this.$$user_allowScaleUp;
    else return this.$$init_allowScaleUp;
}

function setAllowScaleUp anonymous(value) {
    this.$$setAllowScaleUpImpl.apply(this, arguments);
    return value;
}

function resetAllowScaleUp anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_allowScaleUp !== undefined) {
        old = this.$$runtime_allowScaleUp;
    } else if (this.$$user_allowScaleUp !== undefined) {
        old = this.$$user_allowScaleUp;
    } else if (this.$$useinit_allowScaleUp) {
        old = this.$$init_allowScaleUp;
    }
    if (this.$$user_allowScaleUp === undefined) return;
    var computed;
    if (this.$$runtime_allowScaleUp !== undefined) {
        computed = this.$$runtime_allowScaleUp;
        delete this.$$user_allowScaleUp;
    } else if (this.$$user_allowScaleUp !== undefined) {
        delete this.$$user_allowScaleUp;
        if (this.$$runtime_allowScaleUp !== undefined) computed = this.$$runtime_allowScaleUp;
        if (this.$$theme_allowScaleUp !== undefined) computed = this.$$theme_allowScaleUp;
        else if (this.$$init_allowScaleUp !== undefined) {
            computed = this.$$init_allowScaleUp;
            this.$$useinit_allowScaleUp = true;
        }
    } else if (this.$$useinit_allowScaleUp) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_allowScaleUp;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "allowScaleUp", "reset");

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

function initAllowScaleUp anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_allowScaleUp !== undefined) {
        old = this.$$runtime_allowScaleUp;
    } else if (this.$$user_allowScaleUp !== undefined) {
        old = this.$$user_allowScaleUp;
    } else if (this.$$useinit_allowScaleUp) {
        old = this.$$init_allowScaleUp;
    }
    var computed;
    if (this.$$runtime_allowScaleUp !== undefined) {
        computed = this.$$runtime_allowScaleUp;
    } else if (this.$$user_allowScaleUp !== undefined) {
        computed = this.$$user_allowScaleUp;
    } else if (this.$$useinit_allowScaleUp) {
        computed = this.$$init_allowScaleUp;
    } else {
        computed = this.$$init_allowScaleUp;
        this.$$useinit_allowScaleUp = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "allowScaleUp", "init");

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

function setRuntimeAllowScaleUp anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_allowScaleUp !== undefined) {
            old = this.$$runtime_allowScaleUp;
        } else if (this.$$user_allowScaleUp !== undefined) {
            old = this.$$user_allowScaleUp;
        } else if (this.$$useinit_allowScaleUp) {
            old = this.$$init_allowScaleUp;
        }
        if (equ.call(this, this.$$runtime_allowScaleUp, value)) return value;
        var computed;
        if (this.$$runtime_allowScaleUp !== undefined) {
            computed = this.$$runtime_allowScaleUp = value;
        } else if (this.$$user_allowScaleUp !== undefined) {
            computed = this.$$runtime_allowScaleUp = value;
        } else if (this.$$useinit_allowScaleUp) {
            delete this.$$useinit_allowScaleUp;
            computed = this.$$runtime_allowScaleUp = value;
        } else {
            computed = this.$$runtime_allowScaleUp = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_allowScaleUp;
        var self = this;
        var promise;
        promise = this._applyDimension(computed, old, "allowScaleUp", "setRuntime");

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

function resetRuntimeAllowScaleUp anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_allowScaleUp !== undefined) {
        old = this.$$runtime_allowScaleUp;
    } else if (this.$$user_allowScaleUp !== undefined) {
        old = this.$$user_allowScaleUp;
    } else if (this.$$useinit_allowScaleUp) {
        old = this.$$init_allowScaleUp;
    }
    if (this.$$runtime_allowScaleUp === undefined) return;
    var computed;
    if (this.$$runtime_allowScaleUp !== undefined) {
        delete this.$$runtime_allowScaleUp;
        if (this.$$user_allowScaleUp !== undefined) computed = this.$$user_allowScaleUp;
        else if (this.$$theme_allowScaleUp !== undefined) computed = this.$$theme_allowScaleUp;
        else if (this.$$init_allowScaleUp !== undefined) {
            computed = this.$$init_allowScaleUp;
            this.$$useinit_allowScaleUp = true;
        }
    } else if (this.$$user_allowScaleUp !== undefined) {
        computed = this.$$user_allowScaleUp;
    } else if (this.$$useinit_allowScaleUp) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_allowScaleUp;
    var self = this;
    var promise;
    promise = this._applyDimension(computed, old, "allowScaleUp", "resetRuntime");

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

function toggleAllowScaleUp anonymous() {
    return this.setAllowScaleUp(!this.getAllowScaleUp())
}

function isAllowScaleUp anonymous() {
    return this.getAllowScaleUp()
}

function _onChangeTheme() {
    qx.ui.core.Widget.prototype._onChangeTheme.call(this);
    this._styleSource()
}

function getContentElement() {
    return this.__lO()
}

function _createContentElement() {
    return this.__lO()
}

function _getContentHint() {
    return {
        width: this.__lF || 0,
        height: this.__lG || 0
    }
}

function _applyDecorator(n, t) {
    var i, r;
    qx.ui.core.Widget.prototype._applyDecorator.call(this, n, t);
    i = this.getSource();
    i = qx.util.AliasManager.getInstance().resolve(i);
    r = this.getContentElement();
    this.__lJ && (r = r.getChild(0));
    this.__lX(r, i)
}

function _applyTextColor(t) {
    if (this.__lM() === n) {
        var i = this.getContentElement();
        this.__lJ && (i = i.getChild(0));
        t ? i.setStyle(d, qx.theme.manager.Color.getInstance().resolve(t)) : i.removeStyle(d)
    }
}

function _applyPadding(n, t, i) {
    qx.ui.core.Widget.prototype._applyPadding.call(this, n, t, i);
    var r = this.getContentElement();
    this.__lJ ? r.getChild(0).setStyles({
        top: this.getPaddingTop() || 0,
        left: this.getPaddingLeft() || 0
    }) : this.__lM() === ni ? r.setStyles({
        top: this.getPaddingTop() || 0,
        left: this.getPaddingLeft() || 0
    }) : r.setPadding(this.getPaddingLeft() || 0, this.getPaddingTop() || 0)
}

function renderLayout(n, t, i, r) {
    qx.ui.core.Widget.prototype.renderLayout.call(this, n, t, i, r);
    var u = this.getContentElement();
    this.__lJ && u.getChild(0).setStyles({
        width: i - (this.getPaddingLeft() || 0) - (this.getPaddingRight() || 0),
        height: r - (this.getPaddingTop() || 0) - (this.getPaddingBottom() || 0),
        top: this.getPaddingTop() || 0,
        left: this.getPaddingLeft() || 0
    })
}

function _applyEnabled(n, t) {
    qx.ui.core.Widget.prototype._applyEnabled.call(this, n, t);
    this.getSource() && this._styleSource()
}

function _transformSource(n) {
    n = qx.util.AliasManager.getInstance().resolve(n);
    var t = !n || n.indexOf(r) < 0 ? n : n.substr(n.indexOf(r) + r.length);
    return typeof ClientLib != st && !!ClientLib.File.FileManager.GetInstance().GetPhysicalPath(t) ? ClientLib.File.FileManager.GetInstance().GetPhysicalPath(t) : n
}

function _applySource(n, t) {
    t && qx.io.ImageLoader.isLoading(t) && qx.io.ImageLoader.abort(t);
    this._styleSource()
}

function _applyScale() {
    this._styleSource()
}

function _styleSource() {
    var l = qx.util.AliasManager.getInstance(),
        t = qx.util.ResourceManager.getInstance(),
        n = l.resolve(this.getSource()),
        u = this.getContentElement(),
        h, r, e, f, o, s, c;
    if (this.__lJ && (u = u.getChild(0)), !n) {
        this.__lW(u);
        return
    }
    this.__lR(n);
    qx.core.Environment.get(ft) == yi && (parseInt(qx.core.Environment.get(lt), 10) < 9 || qx.core.Environment.get(ii) < 9) && (h = this.getScale() ? b : v, u.tagNameHint = qx.bom.element.Decoration.getTagName(h, n));
    r = this.__lQ();
    t.isFontUri(n) ? (this.__lT(r, n), e = this.getTextColor(), qx.lang.Type.isString(e) && this._applyTextColor(e, null)) : t.has(n) ? (f = t.findHighResolutionSource(n), f && (o = t.getImageWidth(n), s = t.getImageHeight(n), this.setWidth(o), this.setHeight(s), c = o + si + s + i, this.__lI.setStyle(vt, c), this.setSource(f), n = f), this.__lT(r, n), this.__lP()) : qx.io.ImageLoader.isLoaded(n) ? (this.__lU(r, n), this.__lP()) : this.__lV(r, n)
}

function _applyDimension() {
    var t, n, s;
    if (qx.ui.core.Widget.prototype._applyDimension.call(this), t = this.getSource() && qx.lang.String.startsWith(this.getSource(), f), t) {
        if (n = this.getContentElement(), n)
            if (this.getScale()) {
                var r = this.getSizeHint(),
                    u = this.getWidth() || r.width || 40,
                    e = this.getHeight() || r.height || 40;
                n.setStyle(o, (u > e ? e : u) + i)
            } else s = qx.theme.manager.Font.getInstance().resolve(this.getSource().match(/@([^/]+)/)[1]), n.setStyle(o, s.getSize() + i)
    } else this.__ma()
}

function _recalc(n, t) {
    var u = this.getMaxWidth(),
        e = this.getMaxHeight(),
        o = this.getMinWidth(),
        s = this.getMinHeight(),
        i = n,
        r = t,
        f = t / n;
    switch (this.getForceRatio()) {
        case gi:
            e !== null && r > e ? (r = e, i = r / f) : r < s && (r = s, i = r / f);
            r < e && this.isAllowScaleUp() && (r = e, i = r / f);
            break;
        case di:
            u !== null && i > u ? (i = u, r = i * f) : i < o && (i = o, r = i * f);
            i < u && this.isAllowScaleUp() && (i = u, r = i * f);
            break;
        case dt:
        case yt:
            u !== null && i > u ? (i = u, r = i * f) : i < o && (i = o, r = i * f);
            i < u && this.isAllowScaleUp() && (i = u, r = i * f);
            e !== null && r > e && (r = e, i = r / f)
    }
    return (i = Math.round(i), r = Math.round(r), i != this.__lF || r != this.__lG) ? (this.__lF = i, this.__lG = r, !0) : !1
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