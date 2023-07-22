function getRich anonymous(value) {
    if (this.$$runtime_rich !== undefined) return this.$$runtime_rich;
    if (this.$$user_rich !== undefined) return this.$$user_rich;
    else return this.$$init_rich;
}

function setRich anonymous(value) {
    this.$$setRichImpl.apply(this, arguments);
    return value;
}

function resetRich anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_rich !== undefined) {
        old = this.$$runtime_rich;
    } else if (this.$$user_rich !== undefined) {
        old = this.$$user_rich;
    } else if (this.$$useinit_rich) {
        old = this.$$init_rich;
    }
    if (this.$$user_rich === undefined) return;
    var computed;
    if (this.$$runtime_rich !== undefined) {
        computed = this.$$runtime_rich;
        delete this.$$user_rich;
    } else if (this.$$user_rich !== undefined) {
        delete this.$$user_rich;
        if (this.$$runtime_rich !== undefined) computed = this.$$runtime_rich;
        if (this.$$theme_rich !== undefined) computed = this.$$theme_rich;
        else if (this.$$init_rich !== undefined) {
            computed = this.$$init_rich;
            this.$$useinit_rich = true;
        }
    } else if (this.$$useinit_rich) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_rich;
    var self = this;
    var promise;
    promise = this._applyRich(computed, old, "rich", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeRich')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeRich', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeRichAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeRichAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initRich anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_rich !== undefined) {
        old = this.$$runtime_rich;
    } else if (this.$$user_rich !== undefined) {
        old = this.$$user_rich;
    } else if (this.$$useinit_rich) {
        old = this.$$init_rich;
    }
    var computed;
    if (this.$$runtime_rich !== undefined) {
        computed = this.$$runtime_rich;
    } else if (this.$$user_rich !== undefined) {
        computed = this.$$user_rich;
    } else if (this.$$useinit_rich) {
        computed = this.$$init_rich;
    } else {
        computed = this.$$init_rich;
        this.$$useinit_rich = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyRich(computed, old, "rich", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeRich')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeRich', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeRichAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeRichAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeRich anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_rich !== undefined) {
            old = this.$$runtime_rich;
        } else if (this.$$user_rich !== undefined) {
            old = this.$$user_rich;
        } else if (this.$$useinit_rich) {
            old = this.$$init_rich;
        }
        if (equ.call(this, this.$$runtime_rich, value)) return value;
        var computed;
        if (this.$$runtime_rich !== undefined) {
            computed = this.$$runtime_rich = value;
        } else if (this.$$user_rich !== undefined) {
            computed = this.$$runtime_rich = value;
        } else if (this.$$useinit_rich) {
            delete this.$$useinit_rich;
            computed = this.$$runtime_rich = value;
        } else {
            computed = this.$$runtime_rich = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_rich;
        var self = this;
        var promise;
        promise = this._applyRich(computed, old, "rich", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeRich')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeRich', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeRichAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeRichAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeRich anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_rich !== undefined) {
        old = this.$$runtime_rich;
    } else if (this.$$user_rich !== undefined) {
        old = this.$$user_rich;
    } else if (this.$$useinit_rich) {
        old = this.$$init_rich;
    }
    if (this.$$runtime_rich === undefined) return;
    var computed;
    if (this.$$runtime_rich !== undefined) {
        delete this.$$runtime_rich;
        if (this.$$user_rich !== undefined) computed = this.$$user_rich;
        else if (this.$$theme_rich !== undefined) computed = this.$$theme_rich;
        else if (this.$$init_rich !== undefined) {
            computed = this.$$init_rich;
            this.$$useinit_rich = true;
        }
    } else if (this.$$user_rich !== undefined) {
        computed = this.$$user_rich;
    } else if (this.$$useinit_rich) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_rich;
    var self = this;
    var promise;
    promise = this._applyRich(computed, old, "rich", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeRich')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeRich', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeRichAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeRichAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function toggleRich anonymous() {
    return this.setRich(!this.getRich())
}

function isRich anonymous() {
    return this.getRich()
}

function getWrap anonymous(value) {
    if (this.$$runtime_wrap !== undefined) return this.$$runtime_wrap;
    if (this.$$user_wrap !== undefined) return this.$$user_wrap;
    else return this.$$init_wrap;
}

function setWrap anonymous(value) {
    this.$$setWrapImpl.apply(this, arguments);
    return value;
}

function resetWrap anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_wrap !== undefined) {
        old = this.$$runtime_wrap;
    } else if (this.$$user_wrap !== undefined) {
        old = this.$$user_wrap;
    } else if (this.$$useinit_wrap) {
        old = this.$$init_wrap;
    }
    if (this.$$user_wrap === undefined) return;
    var computed;
    if (this.$$runtime_wrap !== undefined) {
        computed = this.$$runtime_wrap;
        delete this.$$user_wrap;
    } else if (this.$$user_wrap !== undefined) {
        delete this.$$user_wrap;
        if (this.$$runtime_wrap !== undefined) computed = this.$$runtime_wrap;
        if (this.$$theme_wrap !== undefined) computed = this.$$theme_wrap;
        else if (this.$$init_wrap !== undefined) {
            computed = this.$$init_wrap;
            this.$$useinit_wrap = true;
        }
    } else if (this.$$useinit_wrap) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_wrap;
    var self = this;
    var promise;
    promise = this._applyWrap(computed, old, "wrap", "reset");

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

function initWrap anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_wrap !== undefined) {
        old = this.$$runtime_wrap;
    } else if (this.$$user_wrap !== undefined) {
        old = this.$$user_wrap;
    } else if (this.$$useinit_wrap) {
        old = this.$$init_wrap;
    }
    var computed;
    if (this.$$runtime_wrap !== undefined) {
        computed = this.$$runtime_wrap;
    } else if (this.$$user_wrap !== undefined) {
        computed = this.$$user_wrap;
    } else if (this.$$useinit_wrap) {
        computed = this.$$init_wrap;
    } else {
        computed = this.$$init_wrap;
        this.$$useinit_wrap = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyWrap(computed, old, "wrap", "init");

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

function setRuntimeWrap anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_wrap !== undefined) {
            old = this.$$runtime_wrap;
        } else if (this.$$user_wrap !== undefined) {
            old = this.$$user_wrap;
        } else if (this.$$useinit_wrap) {
            old = this.$$init_wrap;
        }
        if (equ.call(this, this.$$runtime_wrap, value)) return value;
        var computed;
        if (this.$$runtime_wrap !== undefined) {
            computed = this.$$runtime_wrap = value;
        } else if (this.$$user_wrap !== undefined) {
            computed = this.$$runtime_wrap = value;
        } else if (this.$$useinit_wrap) {
            delete this.$$useinit_wrap;
            computed = this.$$runtime_wrap = value;
        } else {
            computed = this.$$runtime_wrap = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_wrap;
        var self = this;
        var promise;
        promise = this._applyWrap(computed, old, "wrap", "setRuntime");

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

function resetRuntimeWrap anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_wrap !== undefined) {
        old = this.$$runtime_wrap;
    } else if (this.$$user_wrap !== undefined) {
        old = this.$$user_wrap;
    } else if (this.$$useinit_wrap) {
        old = this.$$init_wrap;
    }
    if (this.$$runtime_wrap === undefined) return;
    var computed;
    if (this.$$runtime_wrap !== undefined) {
        delete this.$$runtime_wrap;
        if (this.$$user_wrap !== undefined) computed = this.$$user_wrap;
        else if (this.$$theme_wrap !== undefined) computed = this.$$theme_wrap;
        else if (this.$$init_wrap !== undefined) {
            computed = this.$$init_wrap;
            this.$$useinit_wrap = true;
        }
    } else if (this.$$user_wrap !== undefined) {
        computed = this.$$user_wrap;
    } else if (this.$$useinit_wrap) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_wrap;
    var self = this;
    var promise;
    promise = this._applyWrap(computed, old, "wrap", "resetRuntime");

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

function toggleWrap anonymous() {
    return this.setWrap(!this.getWrap())
}

function isWrap anonymous() {
    return this.getWrap()
}

function getFixedContentSize anonymous(value) {
    if (this.$$runtime_fixedContentSize !== undefined) return this.$$runtime_fixedContentSize;
    if (this.$$user_fixedContentSize !== undefined) return this.$$user_fixedContentSize;
    else return this.$$init_fixedContentSize;
}

function setFixedContentSize anonymous(value) {
    this.$$setFixedContentSizeImpl.apply(this, arguments);
    return value;
}

function resetFixedContentSize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_fixedContentSize !== undefined) delete this.$$user_fixedContentSize;
}

function setRuntimeFixedContentSize anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_fixedContentSize !== undefined) {
            old = this.$$runtime_fixedContentSize;
        } else if (this.$$user_fixedContentSize !== undefined) {
            old = this.$$user_fixedContentSize;
        } else if (this.$$useinit_fixedContentSize) {
            old = this.$$init_fixedContentSize;
        }
        this.$$runtime_fixedContentSize = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeFixedContentSize anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_fixedContentSize !== undefined) delete this.$$runtime_fixedContentSize;
}

function toggleFixedContentSize anonymous() {
    return this.setFixedContentSize(!this.getFixedContentSize())
}

function isFixedContentSize anonymous() {
    return this.getFixedContentSize()
}

function getBreakWithinWords anonymous(value) {
    if (this.$$runtime_breakWithinWords !== undefined) return this.$$runtime_breakWithinWords;
    if (this.$$user_breakWithinWords !== undefined) return this.$$user_breakWithinWords;
    else return this.$$init_breakWithinWords;
}

function setBreakWithinWords anonymous(value) {
    this.$$setBreakWithinWordsImpl.apply(this, arguments);
    return value;
}

function resetBreakWithinWords anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_breakWithinWords !== undefined) {
        old = this.$$runtime_breakWithinWords;
    } else if (this.$$user_breakWithinWords !== undefined) {
        old = this.$$user_breakWithinWords;
    } else if (this.$$useinit_breakWithinWords) {
        old = this.$$init_breakWithinWords;
    }
    if (this.$$user_breakWithinWords === undefined) return;
    var computed;
    if (this.$$runtime_breakWithinWords !== undefined) {
        computed = this.$$runtime_breakWithinWords;
        delete this.$$user_breakWithinWords;
    } else if (this.$$user_breakWithinWords !== undefined) {
        delete this.$$user_breakWithinWords;
        if (this.$$runtime_breakWithinWords !== undefined) computed = this.$$runtime_breakWithinWords;
        if (this.$$theme_breakWithinWords !== undefined) computed = this.$$theme_breakWithinWords;
        else if (this.$$init_breakWithinWords !== undefined) {
            computed = this.$$init_breakWithinWords;
            this.$$useinit_breakWithinWords = true;
        }
    } else if (this.$$useinit_breakWithinWords) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_breakWithinWords;
    var self = this;
    var promise;
    promise = this._applyBreakWithinWords(computed, old, "breakWithinWords", "reset");

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

function initBreakWithinWords anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_breakWithinWords !== undefined) {
        old = this.$$runtime_breakWithinWords;
    } else if (this.$$user_breakWithinWords !== undefined) {
        old = this.$$user_breakWithinWords;
    } else if (this.$$useinit_breakWithinWords) {
        old = this.$$init_breakWithinWords;
    }
    var computed;
    if (this.$$runtime_breakWithinWords !== undefined) {
        computed = this.$$runtime_breakWithinWords;
    } else if (this.$$user_breakWithinWords !== undefined) {
        computed = this.$$user_breakWithinWords;
    } else if (this.$$useinit_breakWithinWords) {
        computed = this.$$init_breakWithinWords;
    } else {
        computed = this.$$init_breakWithinWords;
        this.$$useinit_breakWithinWords = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyBreakWithinWords(computed, old, "breakWithinWords", "init");

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

function setRuntimeBreakWithinWords anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_breakWithinWords !== undefined) {
            old = this.$$runtime_breakWithinWords;
        } else if (this.$$user_breakWithinWords !== undefined) {
            old = this.$$user_breakWithinWords;
        } else if (this.$$useinit_breakWithinWords) {
            old = this.$$init_breakWithinWords;
        }
        if (equ.call(this, this.$$runtime_breakWithinWords, value)) return value;
        var computed;
        if (this.$$runtime_breakWithinWords !== undefined) {
            computed = this.$$runtime_breakWithinWords = value;
        } else if (this.$$user_breakWithinWords !== undefined) {
            computed = this.$$runtime_breakWithinWords = value;
        } else if (this.$$useinit_breakWithinWords) {
            delete this.$$useinit_breakWithinWords;
            computed = this.$$runtime_breakWithinWords = value;
        } else {
            computed = this.$$runtime_breakWithinWords = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_breakWithinWords;
        var self = this;
        var promise;
        promise = this._applyBreakWithinWords(computed, old, "breakWithinWords", "setRuntime");

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

function resetRuntimeBreakWithinWords anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_breakWithinWords !== undefined) {
        old = this.$$runtime_breakWithinWords;
    } else if (this.$$user_breakWithinWords !== undefined) {
        old = this.$$user_breakWithinWords;
    } else if (this.$$useinit_breakWithinWords) {
        old = this.$$init_breakWithinWords;
    }
    if (this.$$runtime_breakWithinWords === undefined) return;
    var computed;
    if (this.$$runtime_breakWithinWords !== undefined) {
        delete this.$$runtime_breakWithinWords;
        if (this.$$user_breakWithinWords !== undefined) computed = this.$$user_breakWithinWords;
        else if (this.$$theme_breakWithinWords !== undefined) computed = this.$$theme_breakWithinWords;
        else if (this.$$init_breakWithinWords !== undefined) {
            computed = this.$$init_breakWithinWords;
            this.$$useinit_breakWithinWords = true;
        }
    } else if (this.$$user_breakWithinWords !== undefined) {
        computed = this.$$user_breakWithinWords;
    } else if (this.$$useinit_breakWithinWords) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_breakWithinWords;
    var self = this;
    var promise;
    promise = this._applyBreakWithinWords(computed, old, "breakWithinWords", "resetRuntime");

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

function toggleBreakWithinWords anonymous() {
    return this.setBreakWithinWords(!this.getBreakWithinWords())
}

function isBreakWithinWords anonymous() {
    return this.getBreakWithinWords()
}

function getValue anonymous(value) {
    if (this.$$runtime_value !== undefined) return this.$$runtime_value;
    if (this.$$user_value !== undefined) return this.$$user_value;
    else return null;
}

function setValue anonymous(value) {
    this.$$setValueImpl.apply(this, arguments);
    return value;
}

function resetValue anonymous(value) {
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
    if (this.$$user_value === undefined) return;
    var computed;
    if (this.$$runtime_value !== undefined) {
        computed = this.$$runtime_value;
        delete this.$$user_value;
    } else if (this.$$user_value !== undefined) {
        delete this.$$user_value;
        if (this.$$runtime_value !== undefined) computed = this.$$runtime_value;
        if (this.$$theme_value !== undefined) computed = this.$$theme_value;
        else if (this.$$init_value !== undefined) {
            computed = this.$$init_value;
            this.$$useinit_value = true;
        }
    } else if (this.$$useinit_value) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyValue(computed, old, "value", "reset");

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

function initValue anonymous(value) {
    function set(value) {
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
        if (equ.call(this, this.$$init_value, value)) return value;
        var computed;
        if (this.$$runtime_value !== undefined) {
            computed = this.$$runtime_value;
            this.$$init_value = value;
        } else if (this.$$user_value !== undefined) {
            computed = this.$$user_value;
            this.$$init_value = value;
        } else if (this.$$useinit_value) {
            computed = this.$$init_value = value;
        } else {
            computed = this.$$init_value = value;
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
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function setRuntimeValue anonymous(value) {
    function set(value) {
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
        if (equ.call(this, this.$$runtime_value, value)) return value;
        var computed;
        if (this.$$runtime_value !== undefined) {
            computed = this.$$runtime_value = value;
        } else if (this.$$user_value !== undefined) {
            computed = this.$$runtime_value = value;
        } else if (this.$$useinit_value) {
            delete this.$$useinit_value;
            computed = this.$$runtime_value = value;
        } else {
            computed = this.$$runtime_value = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyValue(computed, old, "value", "setRuntime");

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
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeValue anonymous(value) {
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
    if (this.$$runtime_value === undefined) return;
    var computed;
    if (this.$$runtime_value !== undefined) {
        delete this.$$runtime_value;
        if (this.$$user_value !== undefined) computed = this.$$user_value;
        else if (this.$$theme_value !== undefined) computed = this.$$theme_value;
        else if (this.$$init_value !== undefined) {
            computed = this.$$init_value;
            this.$$useinit_value = true;
        }
    } else if (this.$$user_value !== undefined) {
        computed = this.$$user_value;
    } else if (this.$$useinit_value) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyValue(computed, old, "value", "resetRuntime");

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

function getBuddy anonymous(value) {
    if (this.$$runtime_buddy !== undefined) return this.$$runtime_buddy;
    if (this.$$user_buddy !== undefined) return this.$$user_buddy;
    else return this.$$init_buddy;
}

function setBuddy anonymous(value) {
    this.$$setBuddyImpl.apply(this, arguments);
    return value;
}

function resetBuddy anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_buddy !== undefined) {
        old = this.$$runtime_buddy;
    } else if (this.$$user_buddy !== undefined) {
        old = this.$$user_buddy;
    } else if (this.$$useinit_buddy) {
        old = this.$$init_buddy;
    }
    if (this.$$user_buddy === undefined) return;
    var computed;
    if (this.$$runtime_buddy !== undefined) {
        computed = this.$$runtime_buddy;
        delete this.$$user_buddy;
    } else if (this.$$user_buddy !== undefined) {
        delete this.$$user_buddy;
        if (this.$$runtime_buddy !== undefined) computed = this.$$runtime_buddy;
        if (this.$$theme_buddy !== undefined) computed = this.$$theme_buddy;
        else if (this.$$init_buddy !== undefined) {
            computed = this.$$init_buddy;
            this.$$useinit_buddy = true;
        }
    } else if (this.$$useinit_buddy) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_buddy;
    var self = this;
    var promise;
    promise = this._applyBuddy(computed, old, "buddy", "reset");

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

function initBuddy anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_buddy !== undefined) {
        old = this.$$runtime_buddy;
    } else if (this.$$user_buddy !== undefined) {
        old = this.$$user_buddy;
    } else if (this.$$useinit_buddy) {
        old = this.$$init_buddy;
    }
    var computed;
    if (this.$$runtime_buddy !== undefined) {
        computed = this.$$runtime_buddy;
    } else if (this.$$user_buddy !== undefined) {
        computed = this.$$user_buddy;
    } else if (this.$$useinit_buddy) {
        computed = this.$$init_buddy;
    } else {
        computed = this.$$init_buddy;
        this.$$useinit_buddy = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyBuddy(computed, old, "buddy", "init");

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

function setRuntimeBuddy anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_buddy !== undefined) {
            old = this.$$runtime_buddy;
        } else if (this.$$user_buddy !== undefined) {
            old = this.$$user_buddy;
        } else if (this.$$useinit_buddy) {
            old = this.$$init_buddy;
        }
        if (equ.call(this, this.$$runtime_buddy, value)) return value;
        var computed;
        if (this.$$runtime_buddy !== undefined) {
            computed = this.$$runtime_buddy = value;
        } else if (this.$$user_buddy !== undefined) {
            computed = this.$$runtime_buddy = value;
        } else if (this.$$useinit_buddy) {
            delete this.$$useinit_buddy;
            computed = this.$$runtime_buddy = value;
        } else {
            computed = this.$$runtime_buddy = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_buddy;
        var self = this;
        var promise;
        promise = this._applyBuddy(computed, old, "buddy", "setRuntime");

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

function resetRuntimeBuddy anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_buddy !== undefined) {
        old = this.$$runtime_buddy;
    } else if (this.$$user_buddy !== undefined) {
        old = this.$$user_buddy;
    } else if (this.$$useinit_buddy) {
        old = this.$$init_buddy;
    }
    if (this.$$runtime_buddy === undefined) return;
    var computed;
    if (this.$$runtime_buddy !== undefined) {
        delete this.$$runtime_buddy;
        if (this.$$user_buddy !== undefined) computed = this.$$user_buddy;
        else if (this.$$theme_buddy !== undefined) computed = this.$$theme_buddy;
        else if (this.$$init_buddy !== undefined) {
            computed = this.$$init_buddy;
            this.$$useinit_buddy = true;
        }
    } else if (this.$$user_buddy !== undefined) {
        computed = this.$$user_buddy;
    } else if (this.$$useinit_buddy) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_buddy;
    var self = this;
    var promise;
    promise = this._applyBuddy(computed, old, "buddy", "resetRuntime");

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

function getTextAlign anonymous(value) {
    if (this.$$runtime_textAlign !== undefined) return this.$$runtime_textAlign;
    if (this.$$user_textAlign !== undefined) return this.$$user_textAlign;
    else if (this.$$theme_textAlign !== undefined) return this.$$theme_textAlign;
    else return null;
}

function setTextAlign anonymous(value) {
    this.$$setTextAlignImpl.apply(this, arguments);
    return value;
}

function resetTextAlign anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_textAlign !== undefined) {
        old = this.$$runtime_textAlign;
    } else if (this.$$user_textAlign !== undefined) {
        old = this.$$user_textAlign;
    } else if (this.$$theme_textAlign !== undefined) {
        old = this.$$theme_textAlign;
    } else if (this.$$useinit_textAlign) {
        old = this.$$init_textAlign;
    }
    if (this.$$user_textAlign === undefined) return;
    var computed;
    if (this.$$runtime_textAlign !== undefined) {
        computed = this.$$runtime_textAlign;
        delete this.$$user_textAlign;
    } else if (this.$$user_textAlign !== undefined) {
        delete this.$$user_textAlign;
        if (this.$$runtime_textAlign !== undefined) computed = this.$$runtime_textAlign;
        if (this.$$theme_textAlign !== undefined) computed = this.$$theme_textAlign;
        else if (this.$$init_textAlign !== undefined) {
            computed = this.$$init_textAlign;
            this.$$useinit_textAlign = true;
        }
    } else if (this.$$theme_textAlign !== undefined) {} else if (this.$$useinit_textAlign) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyTextAlign(computed, old, "textAlign", "reset");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeTextAlign')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeTextAlign', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeTextAlignAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeTextAlignAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initTextAlign anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_textAlign !== undefined) {
            old = this.$$runtime_textAlign;
        } else if (this.$$user_textAlign !== undefined) {
            old = this.$$user_textAlign;
        } else if (this.$$theme_textAlign !== undefined) {
            old = this.$$theme_textAlign;
        } else if (this.$$useinit_textAlign) {
            old = this.$$init_textAlign;
        }
        if (equ.call(this, this.$$init_textAlign, value)) return value;
        var computed;
        if (this.$$runtime_textAlign !== undefined) {
            computed = this.$$runtime_textAlign;
            this.$$init_textAlign = value;
        } else if (this.$$user_textAlign !== undefined) {
            computed = this.$$user_textAlign;
            this.$$init_textAlign = value;
        } else if (this.$$theme_textAlign !== undefined) {
            this.$$init_textAlign = value;
            computed = this.$$theme_textAlign;
        } else if (this.$$useinit_textAlign) {
            computed = this.$$init_textAlign = value;
        } else {
            computed = this.$$init_textAlign = value;
            this.$$useinit_textAlign = true;
        }
        if (computed === undefined) computed = null;
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyTextAlign(computed, old, "textAlign", "init");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeTextAlign')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeTextAlign', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeTextAlignAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeTextAlignAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeTextAlign anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_textAlign !== undefined) {
            old = this.$$runtime_textAlign;
        } else if (this.$$user_textAlign !== undefined) {
            old = this.$$user_textAlign;
        } else if (this.$$theme_textAlign !== undefined) {
            old = this.$$theme_textAlign;
        } else if (this.$$useinit_textAlign) {
            old = this.$$init_textAlign;
        }
        if (equ.call(this, this.$$runtime_textAlign, value)) return value;
        var computed;
        if (this.$$runtime_textAlign !== undefined) {
            computed = this.$$runtime_textAlign = value;
        } else if (this.$$user_textAlign !== undefined) {
            computed = this.$$runtime_textAlign = value;
        } else if (this.$$theme_textAlign !== undefined) {
            computed = this.$$runtime_textAlign = value;
        } else if (this.$$useinit_textAlign) {
            delete this.$$useinit_textAlign;
            computed = this.$$runtime_textAlign = value;
        } else {
            computed = this.$$runtime_textAlign = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyTextAlign(computed, old, "textAlign", "setRuntime");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeTextAlign')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeTextAlign', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeTextAlignAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeTextAlignAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeTextAlign anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_textAlign !== undefined) {
        old = this.$$runtime_textAlign;
    } else if (this.$$user_textAlign !== undefined) {
        old = this.$$user_textAlign;
    } else if (this.$$theme_textAlign !== undefined) {
        old = this.$$theme_textAlign;
    } else if (this.$$useinit_textAlign) {
        old = this.$$init_textAlign;
    }
    if (this.$$runtime_textAlign === undefined) return;
    var computed;
    if (this.$$runtime_textAlign !== undefined) {
        delete this.$$runtime_textAlign;
        if (this.$$user_textAlign !== undefined) computed = this.$$user_textAlign;
        else if (this.$$theme_textAlign !== undefined) computed = this.$$theme_textAlign;
        else if (this.$$init_textAlign !== undefined) {
            computed = this.$$init_textAlign;
            this.$$useinit_textAlign = true;
        }
    } else if (this.$$user_textAlign !== undefined) {
        computed = this.$$user_textAlign;
    } else if (this.$$theme_textAlign !== undefined) {} else if (this.$$useinit_textAlign) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyTextAlign(computed, old, "textAlign", "resetRuntime");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeTextAlign')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeTextAlign', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeTextAlignAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeTextAlignAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setThemedTextAlign anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_textAlign !== undefined) {
            old = this.$$runtime_textAlign;
        } else if (this.$$user_textAlign !== undefined) {
            old = this.$$user_textAlign;
        } else if (this.$$theme_textAlign !== undefined) {
            old = this.$$theme_textAlign;
        } else if (this.$$useinit_textAlign) {
            old = this.$$init_textAlign;
        }
        if (equ.call(this, this.$$theme_textAlign, value)) return value;
        var computed;
        if (this.$$runtime_textAlign !== undefined) {
            computed = this.$$runtime_textAlign;
            this.$$theme_textAlign = value;
        } else if (this.$$user_textAlign !== undefined) {
            computed = this.$$user_textAlign;
            this.$$theme_textAlign = value;
        } else if (this.$$theme_textAlign !== undefined) {
            computed = this.$$theme_textAlign = value;
        } else if (this.$$useinit_textAlign) {
            delete this.$$useinit_textAlign;
            computed = this.$$theme_textAlign = value;
        } else {
            computed = this.$$theme_textAlign = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyTextAlign(computed, old, "textAlign", "setThemed");

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeTextAlign')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeTextAlign', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeTextAlignAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeTextAlignAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetThemedTextAlign anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_textAlign !== undefined) {
        old = this.$$runtime_textAlign;
    } else if (this.$$user_textAlign !== undefined) {
        old = this.$$user_textAlign;
    } else if (this.$$theme_textAlign !== undefined) {
        old = this.$$theme_textAlign;
    } else if (this.$$useinit_textAlign) {
        old = this.$$init_textAlign;
    }
    if (this.$$theme_textAlign === undefined) return;
    var computed;
    if (this.$$runtime_textAlign !== undefined) {
        computed = this.$$runtime_textAlign;
        delete this.$$theme_textAlign;
    } else if (this.$$user_textAlign !== undefined) {
        computed = this.$$user_textAlign;
        delete this.$$theme_textAlign;
    } else if (this.$$theme_textAlign !== undefined) {
        delete this.$$theme_textAlign;
        if (this.$$init_textAlign !== undefined) {
            computed = this.$$init_textAlign;
            this.$$useinit_textAlign = true;
        }
    } else if (this.$$useinit_textAlign) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyTextAlign(computed, old, "textAlign", "resetThemed");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeTextAlign')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeTextAlign', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeTextAlignAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeTextAlignAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function _getContentHint() {
    return this.__nP && (this.__nS = this.__nT(), delete this.__nP), {
        width: this.__nS.width,
        height: this.__nS.height
    }
}

function _hasHeightForWidth() {
    return this.getRich() && this.getWrap()
}

function _applySelectable(n) {
    (qx.core.Environment.get(p) || !qx.core.Environment.get(w) || !n || this.isRich()) && qx.ui.core.Widget.prototype._applySelectable.call(this, n)
}

function _getContentHeightForWidth(n) {
    return !this.getRich() && !this.getWrap() ? null : this.__nT(n).height
}

function _createContentElement() {
    return new qx.html.Label
}

function _applyTextAlign(n) {
    this.getContentElement().setStyle(d, n)
}

function _applyTextColor(n) {
    n ? this.getContentElement().setStyle(i, qx.theme.manager.Color.getInstance().resolve(n)) : this.getContentElement().removeStyle(i)
}

function _applyFont(n, t) {
    t && this.__nO && this.__nR && (this.__nO.removeListenerById(this.__nR), this.__nR = null);
    var r;
    n ? (this.__nO = qx.theme.manager.Font.getInstance().resolve(n), this.__nO instanceof qx.bom.webfonts.WebFont && (this.__nR = this.__nO.addListener(a, this._onWebFontStatusChange, this)), r = this.__nO.getStyles()) : (this.__nO = null, r = qx.bom.Font.getDefaultStyles());
    this.getTextColor() != null && delete r[i];
    this.getContentElement().setStyles(r);
    this.__nP = !0;
    qx.ui.core.queue.Layout.add(this)
}

function _applyBuddy(n, t) {
    t != null && (this.removeRelatedBindings(t), this.removeListenerById(this.__nQ), this.__nQ = null);
    n != null && (n.bind(u, this, u), this.__nQ = this.addListener(rt, function() {
        n.isFocusable() && n.focus.apply(n);
        b in n && typeof n.toggleValue === g && n.toggleValue()
    }, this))
}

function _applyRich(n) {
    this.getContentElement().setRich(n);
    this.__nP = !0;
    qx.ui.core.queue.Layout.add(this)
}

function _applyWrap(n) {
    if (n && !this.isRich(), this.isRich()) {
        var t = n ? e : l;
        this.getContentElement().setStyle(k, t)
    }
}

function _applyBreakWithinWords(n) {
    this.isRich() && this.getContentElement().setStyle(c, n ? r : e)
}

function _onChangeLocale() {
    var n = this.getValue();
    n && n.translate && this.setValue(n.translate())
}

function _onWebFontStatusChange(n) {
    n.getData().valid === !0 && (qx.core.Environment.get(v) == s && parseFloat(qx.core.Environment.get(tt)) >= 8 && window.setTimeout(function() {
        this.__nP = !0;
        qx.ui.core.queue.Layout.add(this)
    }.bind(this), 0), this.__nP = !0, qx.ui.core.queue.Layout.add(this))
}

function _applyValue(n) {
    n && n.translate ? this.getContentElement().setValue(n.translate()) : this.getContentElement().setValue(n);
    this.__nP = !0;
    qx.ui.core.queue.Layout.add(this)
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

function setThemedAlignY anonymous(value) {
    function set(value) {
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
        if (equ.call(this, this.$$theme_alignY, value)) return value;
        var computed;
        if (this.$$runtime_alignY !== undefined) {
            computed = this.$$runtime_alignY;
            this.$$theme_alignY = value;
        } else if (this.$$user_alignY !== undefined) {
            computed = this.$$user_alignY;
            this.$$theme_alignY = value;
        } else if (this.$$theme_alignY !== undefined) {
            computed = this.$$theme_alignY = value;
        } else if (this.$$useinit_alignY) {
            delete this.$$useinit_alignY;
            computed = this.$$theme_alignY = value;
        } else {
            computed = this.$$theme_alignY = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this._applyAlign(computed, old, "alignY", "setThemed");

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

function setThemedMarginLeft anonymous(value) {
    function set(value) {
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
        if (equ.call(this, this.$$theme_marginLeft, value)) return value;
        var computed;
        if (this.$$runtime_marginLeft !== undefined) {
            computed = this.$$runtime_marginLeft;
            this.$$theme_marginLeft = value;
        } else if (this.$$user_marginLeft !== undefined) {
            computed = this.$$user_marginLeft;
            this.$$theme_marginLeft = value;
        } else if (this.$$theme_marginLeft !== undefined) {
            computed = this.$$theme_marginLeft = value;
        } else if (this.$$useinit_marginLeft) {
            delete this.$$useinit_marginLeft;
            computed = this.$$theme_marginLeft = value;
        } else {
            computed = this.$$theme_marginLeft = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_marginLeft;
        var self = this;
        var promise;
        promise = this._applyMargin(computed, old, "marginLeft", "setThemed");

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

function setThemedMarginRight anonymous(value) {
    function set(value) {
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
        if (equ.call(this, this.$$theme_marginRight, value)) return value;
        var computed;
        if (this.$$runtime_marginRight !== undefined) {
            computed = this.$$runtime_marginRight;
            this.$$theme_marginRight = value;
        } else if (this.$$user_marginRight !== undefined) {
            computed = this.$$user_marginRight;
            this.$$theme_marginRight = value;
        } else if (this.$$theme_marginRight !== undefined) {
            computed = this.$$theme_marginRight = value;
        } else if (this.$$useinit_marginRight) {
            delete this.$$useinit_marginRight;
            computed = this.$$theme_marginRight = value;
        } else {
            computed = this.$$theme_marginRight = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_marginRight;
        var self = this;
        var promise;
        promise = this._applyMargin(computed, old, "marginRight", "setThemed");

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