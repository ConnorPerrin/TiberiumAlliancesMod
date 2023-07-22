function getLocalStorageKey anonymous(value) {
    if (this.$$runtime_localStorageKey !== undefined) return this.$$runtime_localStorageKey;
    if (this.$$user_localStorageKey !== undefined) return this.$$user_localStorageKey;
    else return this.$$init_localStorageKey;
}

function setLocalStorageKey anonymous(value) {
    this.$$setLocalStorageKeyImpl.apply(this, arguments);
    return value;
}

function resetLocalStorageKey anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_localStorageKey !== undefined) delete this.$$user_localStorageKey;
}

function setRuntimeLocalStorageKey anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_localStorageKey !== undefined) {
            old = this.$$runtime_localStorageKey;
        } else if (this.$$user_localStorageKey !== undefined) {
            old = this.$$user_localStorageKey;
        } else if (this.$$useinit_localStorageKey) {
            old = this.$$init_localStorageKey;
        }
        this.$$runtime_localStorageKey = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeLocalStorageKey anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_localStorageKey !== undefined) delete this.$$runtime_localStorageKey;
}

function getImageSource anonymous(value) {
    if (this.$$runtime_imageSource !== undefined) return this.$$runtime_imageSource;
    if (this.$$user_imageSource !== undefined) return this.$$user_imageSource;
    else return this.$$init_imageSource;
}

function setImageSource anonymous(value) {
    this.$$setImageSourceImpl.apply(this, arguments);
    return value;
}

function resetImageSource anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_imageSource !== undefined) delete this.$$user_imageSource;
}

function setRuntimeImageSource anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_imageSource !== undefined) {
            old = this.$$runtime_imageSource;
        } else if (this.$$user_imageSource !== undefined) {
            old = this.$$user_imageSource;
        } else if (this.$$useinit_imageSource) {
            old = this.$$init_imageSource;
        }
        this.$$runtime_imageSource = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeImageSource anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_imageSource !== undefined) delete this.$$runtime_imageSource;
}

function getUiImageSource anonymous(value) {
    if (this.$$runtime_uiImageSource !== undefined) return this.$$runtime_uiImageSource;
    if (this.$$user_uiImageSource !== undefined) return this.$$user_uiImageSource;
    else return this.$$init_uiImageSource;
}

function setUiImageSource anonymous(value) {
    this.$$setUiImageSourceImpl.apply(this, arguments);
    return value;
}

function resetUiImageSource anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_uiImageSource !== undefined) delete this.$$user_uiImageSource;
}

function setRuntimeUiImageSource anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_uiImageSource !== undefined) {
            old = this.$$runtime_uiImageSource;
        } else if (this.$$user_uiImageSource !== undefined) {
            old = this.$$user_uiImageSource;
        } else if (this.$$useinit_uiImageSource) {
            old = this.$$init_uiImageSource;
        }
        this.$$runtime_uiImageSource = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeUiImageSource anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_uiImageSource !== undefined) delete this.$$runtime_uiImageSource;
}

function getChat anonymous(value) {
    if (this.$$runtime_chat !== undefined) return this.$$runtime_chat;
    if (this.$$user_chat !== undefined) return this.$$user_chat;
    else throw new Error("Property chat of an instance of webfrontend.phe.cnc.config.Config is not (yet) ready!");
}

function setChat anonymous(value) {
    this.$$setChatImpl.apply(this, arguments);
    return value;
}

function resetChat anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_chat !== undefined) delete this.$$user_chat;
}

function setRuntimeChat anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_chat !== undefined) {
            old = this.$$runtime_chat;
        } else if (this.$$user_chat !== undefined) {
            old = this.$$user_chat;
        } else if (this.$$useinit_chat) {
            old = this.$$init_chat;
        }
        this.$$runtime_chat = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeChat anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_chat !== undefined) delete this.$$runtime_chat;
}

function getAudioOn anonymous(value) {
    if (this.$$runtime_audioOn !== undefined) return this.$$runtime_audioOn;
    if (this.$$user_audioOn !== undefined) return this.$$user_audioOn;
    else return this.$$init_audioOn;
}

function setAudioOn anonymous(value) {
    this.$$setAudioOnImpl.apply(this, arguments);
    return value;
}

function resetAudioOn anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_audioOn !== undefined) {
        old = this.$$runtime_audioOn;
    } else if (this.$$user_audioOn !== undefined) {
        old = this.$$user_audioOn;
    } else if (this.$$useinit_audioOn) {
        old = this.$$init_audioOn;
    }
    if (this.$$user_audioOn === undefined) return;
    var computed;
    if (this.$$runtime_audioOn !== undefined) {
        computed = this.$$runtime_audioOn;
        delete this.$$user_audioOn;
    } else if (this.$$user_audioOn !== undefined) {
        delete this.$$user_audioOn;
        if (this.$$runtime_audioOn !== undefined) computed = this.$$runtime_audioOn;
        if (this.$$theme_audioOn !== undefined) computed = this.$$theme_audioOn;
        else if (this.$$init_audioOn !== undefined) {
            computed = this.$$init_audioOn;
            this.$$useinit_audioOn = true;
        }
    } else if (this.$$useinit_audioOn) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_audioOn;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAudio')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAudio', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAudioAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAudioAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initAudioOn anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_audioOn !== undefined) {
        old = this.$$runtime_audioOn;
    } else if (this.$$user_audioOn !== undefined) {
        old = this.$$user_audioOn;
    } else if (this.$$useinit_audioOn) {
        old = this.$$init_audioOn;
    }
    var computed;
    if (this.$$runtime_audioOn !== undefined) {
        computed = this.$$runtime_audioOn;
    } else if (this.$$user_audioOn !== undefined) {
        computed = this.$$user_audioOn;
    } else if (this.$$useinit_audioOn) {
        computed = this.$$init_audioOn;
    } else {
        computed = this.$$init_audioOn;
        this.$$useinit_audioOn = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAudio')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAudio', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAudioAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAudioAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeAudioOn anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_audioOn !== undefined) {
            old = this.$$runtime_audioOn;
        } else if (this.$$user_audioOn !== undefined) {
            old = this.$$user_audioOn;
        } else if (this.$$useinit_audioOn) {
            old = this.$$init_audioOn;
        }
        if (equ.call(this, this.$$runtime_audioOn, value)) return value;
        var computed;
        if (this.$$runtime_audioOn !== undefined) {
            computed = this.$$runtime_audioOn = value;
        } else if (this.$$user_audioOn !== undefined) {
            computed = this.$$runtime_audioOn = value;
        } else if (this.$$useinit_audioOn) {
            delete this.$$useinit_audioOn;
            computed = this.$$runtime_audioOn = value;
        } else {
            computed = this.$$runtime_audioOn = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_audioOn;
        var self = this;
        var promise;

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeAudio')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAudio', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeAudioAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeAudioAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeAudioOn anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_audioOn !== undefined) {
        old = this.$$runtime_audioOn;
    } else if (this.$$user_audioOn !== undefined) {
        old = this.$$user_audioOn;
    } else if (this.$$useinit_audioOn) {
        old = this.$$init_audioOn;
    }
    if (this.$$runtime_audioOn === undefined) return;
    var computed;
    if (this.$$runtime_audioOn !== undefined) {
        delete this.$$runtime_audioOn;
        if (this.$$user_audioOn !== undefined) computed = this.$$user_audioOn;
        else if (this.$$theme_audioOn !== undefined) computed = this.$$theme_audioOn;
        else if (this.$$init_audioOn !== undefined) {
            computed = this.$$init_audioOn;
            this.$$useinit_audioOn = true;
        }
    } else if (this.$$user_audioOn !== undefined) {
        computed = this.$$user_audioOn;
    } else if (this.$$useinit_audioOn) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_audioOn;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAudio')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAudio', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAudioAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAudioAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function getAudioMusicLevel anonymous(value) {
    if (this.$$runtime_audioMusicLevel !== undefined) return this.$$runtime_audioMusicLevel;
    if (this.$$user_audioMusicLevel !== undefined) return this.$$user_audioMusicLevel;
    else return this.$$init_audioMusicLevel;
}

function setAudioMusicLevel anonymous(value) {
    this.$$setAudioMusicLevelImpl.apply(this, arguments);
    return value;
}

function resetAudioMusicLevel anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_audioMusicLevel !== undefined) {
        old = this.$$runtime_audioMusicLevel;
    } else if (this.$$user_audioMusicLevel !== undefined) {
        old = this.$$user_audioMusicLevel;
    } else if (this.$$useinit_audioMusicLevel) {
        old = this.$$init_audioMusicLevel;
    }
    if (this.$$user_audioMusicLevel === undefined) return;
    var computed;
    if (this.$$runtime_audioMusicLevel !== undefined) {
        computed = this.$$runtime_audioMusicLevel;
        delete this.$$user_audioMusicLevel;
    } else if (this.$$user_audioMusicLevel !== undefined) {
        delete this.$$user_audioMusicLevel;
        if (this.$$runtime_audioMusicLevel !== undefined) computed = this.$$runtime_audioMusicLevel;
        if (this.$$theme_audioMusicLevel !== undefined) computed = this.$$theme_audioMusicLevel;
        else if (this.$$init_audioMusicLevel !== undefined) {
            computed = this.$$init_audioMusicLevel;
            this.$$useinit_audioMusicLevel = true;
        }
    } else if (this.$$useinit_audioMusicLevel) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_audioMusicLevel;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAudio')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAudio', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAudioAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAudioAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initAudioMusicLevel anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_audioMusicLevel !== undefined) {
        old = this.$$runtime_audioMusicLevel;
    } else if (this.$$user_audioMusicLevel !== undefined) {
        old = this.$$user_audioMusicLevel;
    } else if (this.$$useinit_audioMusicLevel) {
        old = this.$$init_audioMusicLevel;
    }
    var computed;
    if (this.$$runtime_audioMusicLevel !== undefined) {
        computed = this.$$runtime_audioMusicLevel;
    } else if (this.$$user_audioMusicLevel !== undefined) {
        computed = this.$$user_audioMusicLevel;
    } else if (this.$$useinit_audioMusicLevel) {
        computed = this.$$init_audioMusicLevel;
    } else {
        computed = this.$$init_audioMusicLevel;
        this.$$useinit_audioMusicLevel = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAudio')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAudio', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAudioAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAudioAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeAudioMusicLevel anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_audioMusicLevel !== undefined) {
            old = this.$$runtime_audioMusicLevel;
        } else if (this.$$user_audioMusicLevel !== undefined) {
            old = this.$$user_audioMusicLevel;
        } else if (this.$$useinit_audioMusicLevel) {
            old = this.$$init_audioMusicLevel;
        }
        if (equ.call(this, this.$$runtime_audioMusicLevel, value)) return value;
        var computed;
        if (this.$$runtime_audioMusicLevel !== undefined) {
            computed = this.$$runtime_audioMusicLevel = value;
        } else if (this.$$user_audioMusicLevel !== undefined) {
            computed = this.$$runtime_audioMusicLevel = value;
        } else if (this.$$useinit_audioMusicLevel) {
            delete this.$$useinit_audioMusicLevel;
            computed = this.$$runtime_audioMusicLevel = value;
        } else {
            computed = this.$$runtime_audioMusicLevel = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_audioMusicLevel;
        var self = this;
        var promise;

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeAudio')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAudio', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeAudioAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeAudioAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeAudioMusicLevel anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_audioMusicLevel !== undefined) {
        old = this.$$runtime_audioMusicLevel;
    } else if (this.$$user_audioMusicLevel !== undefined) {
        old = this.$$user_audioMusicLevel;
    } else if (this.$$useinit_audioMusicLevel) {
        old = this.$$init_audioMusicLevel;
    }
    if (this.$$runtime_audioMusicLevel === undefined) return;
    var computed;
    if (this.$$runtime_audioMusicLevel !== undefined) {
        delete this.$$runtime_audioMusicLevel;
        if (this.$$user_audioMusicLevel !== undefined) computed = this.$$user_audioMusicLevel;
        else if (this.$$theme_audioMusicLevel !== undefined) computed = this.$$theme_audioMusicLevel;
        else if (this.$$init_audioMusicLevel !== undefined) {
            computed = this.$$init_audioMusicLevel;
            this.$$useinit_audioMusicLevel = true;
        }
    } else if (this.$$user_audioMusicLevel !== undefined) {
        computed = this.$$user_audioMusicLevel;
    } else if (this.$$useinit_audioMusicLevel) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_audioMusicLevel;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAudio')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAudio', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAudioAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAudioAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function getAudioAmbientLevel anonymous(value) {
    if (this.$$runtime_audioAmbientLevel !== undefined) return this.$$runtime_audioAmbientLevel;
    if (this.$$user_audioAmbientLevel !== undefined) return this.$$user_audioAmbientLevel;
    else return this.$$init_audioAmbientLevel;
}

function setAudioAmbientLevel anonymous(value) {
    this.$$setAudioAmbientLevelImpl.apply(this, arguments);
    return value;
}

function resetAudioAmbientLevel anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_audioAmbientLevel !== undefined) {
        old = this.$$runtime_audioAmbientLevel;
    } else if (this.$$user_audioAmbientLevel !== undefined) {
        old = this.$$user_audioAmbientLevel;
    } else if (this.$$useinit_audioAmbientLevel) {
        old = this.$$init_audioAmbientLevel;
    }
    if (this.$$user_audioAmbientLevel === undefined) return;
    var computed;
    if (this.$$runtime_audioAmbientLevel !== undefined) {
        computed = this.$$runtime_audioAmbientLevel;
        delete this.$$user_audioAmbientLevel;
    } else if (this.$$user_audioAmbientLevel !== undefined) {
        delete this.$$user_audioAmbientLevel;
        if (this.$$runtime_audioAmbientLevel !== undefined) computed = this.$$runtime_audioAmbientLevel;
        if (this.$$theme_audioAmbientLevel !== undefined) computed = this.$$theme_audioAmbientLevel;
        else if (this.$$init_audioAmbientLevel !== undefined) {
            computed = this.$$init_audioAmbientLevel;
            this.$$useinit_audioAmbientLevel = true;
        }
    } else if (this.$$useinit_audioAmbientLevel) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_audioAmbientLevel;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAudio')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAudio', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAudioAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAudioAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initAudioAmbientLevel anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_audioAmbientLevel !== undefined) {
        old = this.$$runtime_audioAmbientLevel;
    } else if (this.$$user_audioAmbientLevel !== undefined) {
        old = this.$$user_audioAmbientLevel;
    } else if (this.$$useinit_audioAmbientLevel) {
        old = this.$$init_audioAmbientLevel;
    }
    var computed;
    if (this.$$runtime_audioAmbientLevel !== undefined) {
        computed = this.$$runtime_audioAmbientLevel;
    } else if (this.$$user_audioAmbientLevel !== undefined) {
        computed = this.$$user_audioAmbientLevel;
    } else if (this.$$useinit_audioAmbientLevel) {
        computed = this.$$init_audioAmbientLevel;
    } else {
        computed = this.$$init_audioAmbientLevel;
        this.$$useinit_audioAmbientLevel = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAudio')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAudio', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAudioAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAudioAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeAudioAmbientLevel anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_audioAmbientLevel !== undefined) {
            old = this.$$runtime_audioAmbientLevel;
        } else if (this.$$user_audioAmbientLevel !== undefined) {
            old = this.$$user_audioAmbientLevel;
        } else if (this.$$useinit_audioAmbientLevel) {
            old = this.$$init_audioAmbientLevel;
        }
        if (equ.call(this, this.$$runtime_audioAmbientLevel, value)) return value;
        var computed;
        if (this.$$runtime_audioAmbientLevel !== undefined) {
            computed = this.$$runtime_audioAmbientLevel = value;
        } else if (this.$$user_audioAmbientLevel !== undefined) {
            computed = this.$$runtime_audioAmbientLevel = value;
        } else if (this.$$useinit_audioAmbientLevel) {
            delete this.$$useinit_audioAmbientLevel;
            computed = this.$$runtime_audioAmbientLevel = value;
        } else {
            computed = this.$$runtime_audioAmbientLevel = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_audioAmbientLevel;
        var self = this;
        var promise;

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeAudio')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAudio', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeAudioAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeAudioAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeAudioAmbientLevel anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_audioAmbientLevel !== undefined) {
        old = this.$$runtime_audioAmbientLevel;
    } else if (this.$$user_audioAmbientLevel !== undefined) {
        old = this.$$user_audioAmbientLevel;
    } else if (this.$$useinit_audioAmbientLevel) {
        old = this.$$init_audioAmbientLevel;
    }
    if (this.$$runtime_audioAmbientLevel === undefined) return;
    var computed;
    if (this.$$runtime_audioAmbientLevel !== undefined) {
        delete this.$$runtime_audioAmbientLevel;
        if (this.$$user_audioAmbientLevel !== undefined) computed = this.$$user_audioAmbientLevel;
        else if (this.$$theme_audioAmbientLevel !== undefined) computed = this.$$theme_audioAmbientLevel;
        else if (this.$$init_audioAmbientLevel !== undefined) {
            computed = this.$$init_audioAmbientLevel;
            this.$$useinit_audioAmbientLevel = true;
        }
    } else if (this.$$user_audioAmbientLevel !== undefined) {
        computed = this.$$user_audioAmbientLevel;
    } else if (this.$$useinit_audioAmbientLevel) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_audioAmbientLevel;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAudio')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAudio', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAudioAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAudioAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function getAudioUILevel anonymous(value) {
    if (this.$$runtime_audioUILevel !== undefined) return this.$$runtime_audioUILevel;
    if (this.$$user_audioUILevel !== undefined) return this.$$user_audioUILevel;
    else return this.$$init_audioUILevel;
}

function setAudioUILevel anonymous(value) {
    this.$$setAudioUILevelImpl.apply(this, arguments);
    return value;
}

function resetAudioUILevel anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_audioUILevel !== undefined) {
        old = this.$$runtime_audioUILevel;
    } else if (this.$$user_audioUILevel !== undefined) {
        old = this.$$user_audioUILevel;
    } else if (this.$$useinit_audioUILevel) {
        old = this.$$init_audioUILevel;
    }
    if (this.$$user_audioUILevel === undefined) return;
    var computed;
    if (this.$$runtime_audioUILevel !== undefined) {
        computed = this.$$runtime_audioUILevel;
        delete this.$$user_audioUILevel;
    } else if (this.$$user_audioUILevel !== undefined) {
        delete this.$$user_audioUILevel;
        if (this.$$runtime_audioUILevel !== undefined) computed = this.$$runtime_audioUILevel;
        if (this.$$theme_audioUILevel !== undefined) computed = this.$$theme_audioUILevel;
        else if (this.$$init_audioUILevel !== undefined) {
            computed = this.$$init_audioUILevel;
            this.$$useinit_audioUILevel = true;
        }
    } else if (this.$$useinit_audioUILevel) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_audioUILevel;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAudio')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAudio', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAudioAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAudioAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initAudioUILevel anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_audioUILevel !== undefined) {
        old = this.$$runtime_audioUILevel;
    } else if (this.$$user_audioUILevel !== undefined) {
        old = this.$$user_audioUILevel;
    } else if (this.$$useinit_audioUILevel) {
        old = this.$$init_audioUILevel;
    }
    var computed;
    if (this.$$runtime_audioUILevel !== undefined) {
        computed = this.$$runtime_audioUILevel;
    } else if (this.$$user_audioUILevel !== undefined) {
        computed = this.$$user_audioUILevel;
    } else if (this.$$useinit_audioUILevel) {
        computed = this.$$init_audioUILevel;
    } else {
        computed = this.$$init_audioUILevel;
        this.$$useinit_audioUILevel = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAudio')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAudio', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAudioAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAudioAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeAudioUILevel anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_audioUILevel !== undefined) {
            old = this.$$runtime_audioUILevel;
        } else if (this.$$user_audioUILevel !== undefined) {
            old = this.$$user_audioUILevel;
        } else if (this.$$useinit_audioUILevel) {
            old = this.$$init_audioUILevel;
        }
        if (equ.call(this, this.$$runtime_audioUILevel, value)) return value;
        var computed;
        if (this.$$runtime_audioUILevel !== undefined) {
            computed = this.$$runtime_audioUILevel = value;
        } else if (this.$$user_audioUILevel !== undefined) {
            computed = this.$$runtime_audioUILevel = value;
        } else if (this.$$useinit_audioUILevel) {
            delete this.$$useinit_audioUILevel;
            computed = this.$$runtime_audioUILevel = value;
        } else {
            computed = this.$$runtime_audioUILevel = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_audioUILevel;
        var self = this;
        var promise;

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'changeAudio')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAudio', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'changeAudioAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'changeAudioAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeAudioUILevel anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_audioUILevel !== undefined) {
        old = this.$$runtime_audioUILevel;
    } else if (this.$$user_audioUILevel !== undefined) {
        old = this.$$user_audioUILevel;
    } else if (this.$$useinit_audioUILevel) {
        old = this.$$init_audioUILevel;
    }
    if (this.$$runtime_audioUILevel === undefined) return;
    var computed;
    if (this.$$runtime_audioUILevel !== undefined) {
        delete this.$$runtime_audioUILevel;
        if (this.$$user_audioUILevel !== undefined) computed = this.$$user_audioUILevel;
        else if (this.$$theme_audioUILevel !== undefined) computed = this.$$theme_audioUILevel;
        else if (this.$$init_audioUILevel !== undefined) {
            computed = this.$$init_audioUILevel;
            this.$$useinit_audioUILevel = true;
        }
    } else if (this.$$user_audioUILevel !== undefined) {
        computed = this.$$user_audioUILevel;
    } else if (this.$$useinit_audioUILevel) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_audioUILevel;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeAudio')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeAudio', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeAudioAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeAudioAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function getSavedAudioOn anonymous(value) {
    if (this.$$runtime_savedAudioOn !== undefined) return this.$$runtime_savedAudioOn;
    if (this.$$user_savedAudioOn !== undefined) return this.$$user_savedAudioOn;
    else return this.$$init_savedAudioOn;
}

function setSavedAudioOn anonymous(value) {
    this.$$setSavedAudioOnImpl.apply(this, arguments);
    return value;
}

function resetSavedAudioOn anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_savedAudioOn !== undefined) delete this.$$user_savedAudioOn;
}

function setRuntimeSavedAudioOn anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_savedAudioOn !== undefined) {
            old = this.$$runtime_savedAudioOn;
        } else if (this.$$user_savedAudioOn !== undefined) {
            old = this.$$user_savedAudioOn;
        } else if (this.$$useinit_savedAudioOn) {
            old = this.$$init_savedAudioOn;
        }
        this.$$runtime_savedAudioOn = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeSavedAudioOn anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_savedAudioOn !== undefined) delete this.$$runtime_savedAudioOn;
}

function getSavedAudioMusicLevel anonymous(value) {
    if (this.$$runtime_savedAudioMusicLevel !== undefined) return this.$$runtime_savedAudioMusicLevel;
    if (this.$$user_savedAudioMusicLevel !== undefined) return this.$$user_savedAudioMusicLevel;
    else return this.$$init_savedAudioMusicLevel;
}

function setSavedAudioMusicLevel anonymous(value) {
    this.$$setSavedAudioMusicLevelImpl.apply(this, arguments);
    return value;
}

function resetSavedAudioMusicLevel anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_savedAudioMusicLevel !== undefined) delete this.$$user_savedAudioMusicLevel;
}

function setRuntimeSavedAudioMusicLevel anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_savedAudioMusicLevel !== undefined) {
            old = this.$$runtime_savedAudioMusicLevel;
        } else if (this.$$user_savedAudioMusicLevel !== undefined) {
            old = this.$$user_savedAudioMusicLevel;
        } else if (this.$$useinit_savedAudioMusicLevel) {
            old = this.$$init_savedAudioMusicLevel;
        }
        this.$$runtime_savedAudioMusicLevel = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeSavedAudioMusicLevel anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_savedAudioMusicLevel !== undefined) delete this.$$runtime_savedAudioMusicLevel;
}

function getSavedAudioAmbientLevel anonymous(value) {
    if (this.$$runtime_savedAudioAmbientLevel !== undefined) return this.$$runtime_savedAudioAmbientLevel;
    if (this.$$user_savedAudioAmbientLevel !== undefined) return this.$$user_savedAudioAmbientLevel;
    else return this.$$init_savedAudioAmbientLevel;
}

function setSavedAudioAmbientLevel anonymous(value) {
    this.$$setSavedAudioAmbientLevelImpl.apply(this, arguments);
    return value;
}

function resetSavedAudioAmbientLevel anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_savedAudioAmbientLevel !== undefined) delete this.$$user_savedAudioAmbientLevel;
}

function setRuntimeSavedAudioAmbientLevel anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_savedAudioAmbientLevel !== undefined) {
            old = this.$$runtime_savedAudioAmbientLevel;
        } else if (this.$$user_savedAudioAmbientLevel !== undefined) {
            old = this.$$user_savedAudioAmbientLevel;
        } else if (this.$$useinit_savedAudioAmbientLevel) {
            old = this.$$init_savedAudioAmbientLevel;
        }
        this.$$runtime_savedAudioAmbientLevel = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeSavedAudioAmbientLevel anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_savedAudioAmbientLevel !== undefined) delete this.$$runtime_savedAudioAmbientLevel;
}

function getSavedAudioUILevel anonymous(value) {
    if (this.$$runtime_savedAudioUILevel !== undefined) return this.$$runtime_savedAudioUILevel;
    if (this.$$user_savedAudioUILevel !== undefined) return this.$$user_savedAudioUILevel;
    else return this.$$init_savedAudioUILevel;
}

function setSavedAudioUILevel anonymous(value) {
    this.$$setSavedAudioUILevelImpl.apply(this, arguments);
    return value;
}

function resetSavedAudioUILevel anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_savedAudioUILevel !== undefined) delete this.$$user_savedAudioUILevel;
}

function setRuntimeSavedAudioUILevel anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_savedAudioUILevel !== undefined) {
            old = this.$$runtime_savedAudioUILevel;
        } else if (this.$$user_savedAudioUILevel !== undefined) {
            old = this.$$user_savedAudioUILevel;
        } else if (this.$$useinit_savedAudioUILevel) {
            old = this.$$init_savedAudioUILevel;
        }
        this.$$runtime_savedAudioUILevel = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeSavedAudioUILevel anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_savedAudioUILevel !== undefined) delete this.$$runtime_savedAudioUILevel;
}

function getImageSourceDefault anonymous(value) {
    if (this.$$runtime_imageSourceDefault !== undefined) return this.$$runtime_imageSourceDefault;
    if (this.$$user_imageSourceDefault !== undefined) return this.$$user_imageSourceDefault;
    else return this.$$init_imageSourceDefault;
}

function setImageSourceDefault anonymous(value) {
    this.$$setImageSourceDefaultImpl.apply(this, arguments);
    return value;
}

function resetImageSourceDefault anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_imageSourceDefault !== undefined) delete this.$$user_imageSourceDefault;
}

function setRuntimeImageSourceDefault anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_imageSourceDefault !== undefined) {
            old = this.$$runtime_imageSourceDefault;
        } else if (this.$$user_imageSourceDefault !== undefined) {
            old = this.$$user_imageSourceDefault;
        } else if (this.$$useinit_imageSourceDefault) {
            old = this.$$init_imageSourceDefault;
        }
        this.$$runtime_imageSourceDefault = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeImageSourceDefault anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_imageSourceDefault !== undefined) delete this.$$runtime_imageSourceDefault;
}

function getUiImageSourceDefault anonymous(value) {
    if (this.$$runtime_uiImageSourceDefault !== undefined) return this.$$runtime_uiImageSourceDefault;
    if (this.$$user_uiImageSourceDefault !== undefined) return this.$$user_uiImageSourceDefault;
    else return this.$$init_uiImageSourceDefault;
}

function setUiImageSourceDefault anonymous(value) {
    this.$$setUiImageSourceDefaultImpl.apply(this, arguments);
    return value;
}

function resetUiImageSourceDefault anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_uiImageSourceDefault !== undefined) delete this.$$user_uiImageSourceDefault;
}

function setRuntimeUiImageSourceDefault anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_uiImageSourceDefault !== undefined) {
            old = this.$$runtime_uiImageSourceDefault;
        } else if (this.$$user_uiImageSourceDefault !== undefined) {
            old = this.$$user_uiImageSourceDefault;
        } else if (this.$$useinit_uiImageSourceDefault) {
            old = this.$$init_uiImageSourceDefault;
        }
        this.$$runtime_uiImageSourceDefault = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeUiImageSourceDefault anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_uiImageSourceDefault !== undefined) delete this.$$runtime_uiImageSourceDefault;
}

function getAudioOnDefault anonymous(value) {
    if (this.$$runtime_audioOnDefault !== undefined) return this.$$runtime_audioOnDefault;
    if (this.$$user_audioOnDefault !== undefined) return this.$$user_audioOnDefault;
    else return this.$$init_audioOnDefault;
}

function setAudioOnDefault anonymous(value) {
    this.$$setAudioOnDefaultImpl.apply(this, arguments);
    return value;
}

function resetAudioOnDefault anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_audioOnDefault !== undefined) delete this.$$user_audioOnDefault;
}

function setRuntimeAudioOnDefault anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_audioOnDefault !== undefined) {
            old = this.$$runtime_audioOnDefault;
        } else if (this.$$user_audioOnDefault !== undefined) {
            old = this.$$user_audioOnDefault;
        } else if (this.$$useinit_audioOnDefault) {
            old = this.$$init_audioOnDefault;
        }
        this.$$runtime_audioOnDefault = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeAudioOnDefault anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_audioOnDefault !== undefined) delete this.$$runtime_audioOnDefault;
}

function getAudioMusicLevelDefault anonymous(value) {
    if (this.$$runtime_audioMusicLevelDefault !== undefined) return this.$$runtime_audioMusicLevelDefault;
    if (this.$$user_audioMusicLevelDefault !== undefined) return this.$$user_audioMusicLevelDefault;
    else return this.$$init_audioMusicLevelDefault;
}

function setAudioMusicLevelDefault anonymous(value) {
    this.$$setAudioMusicLevelDefaultImpl.apply(this, arguments);
    return value;
}

function resetAudioMusicLevelDefault anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_audioMusicLevelDefault !== undefined) delete this.$$user_audioMusicLevelDefault;
}

function setRuntimeAudioMusicLevelDefault anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_audioMusicLevelDefault !== undefined) {
            old = this.$$runtime_audioMusicLevelDefault;
        } else if (this.$$user_audioMusicLevelDefault !== undefined) {
            old = this.$$user_audioMusicLevelDefault;
        } else if (this.$$useinit_audioMusicLevelDefault) {
            old = this.$$init_audioMusicLevelDefault;
        }
        this.$$runtime_audioMusicLevelDefault = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeAudioMusicLevelDefault anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_audioMusicLevelDefault !== undefined) delete this.$$runtime_audioMusicLevelDefault;
}

function getAudioAmbientLevelDefault anonymous(value) {
    if (this.$$runtime_audioAmbientLevelDefault !== undefined) return this.$$runtime_audioAmbientLevelDefault;
    if (this.$$user_audioAmbientLevelDefault !== undefined) return this.$$user_audioAmbientLevelDefault;
    else return this.$$init_audioAmbientLevelDefault;
}

function setAudioAmbientLevelDefault anonymous(value) {
    this.$$setAudioAmbientLevelDefaultImpl.apply(this, arguments);
    return value;
}

function resetAudioAmbientLevelDefault anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_audioAmbientLevelDefault !== undefined) delete this.$$user_audioAmbientLevelDefault;
}

function setRuntimeAudioAmbientLevelDefault anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_audioAmbientLevelDefault !== undefined) {
            old = this.$$runtime_audioAmbientLevelDefault;
        } else if (this.$$user_audioAmbientLevelDefault !== undefined) {
            old = this.$$user_audioAmbientLevelDefault;
        } else if (this.$$useinit_audioAmbientLevelDefault) {
            old = this.$$init_audioAmbientLevelDefault;
        }
        this.$$runtime_audioAmbientLevelDefault = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeAudioAmbientLevelDefault anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_audioAmbientLevelDefault !== undefined) delete this.$$runtime_audioAmbientLevelDefault;
}

function getAudioUILevelDefault anonymous(value) {
    if (this.$$runtime_audioUILevelDefault !== undefined) return this.$$runtime_audioUILevelDefault;
    if (this.$$user_audioUILevelDefault !== undefined) return this.$$user_audioUILevelDefault;
    else return this.$$init_audioUILevelDefault;
}

function setAudioUILevelDefault anonymous(value) {
    this.$$setAudioUILevelDefaultImpl.apply(this, arguments);
    return value;
}

function resetAudioUILevelDefault anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_audioUILevelDefault !== undefined) delete this.$$user_audioUILevelDefault;
}

function setRuntimeAudioUILevelDefault anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_audioUILevelDefault !== undefined) {
            old = this.$$runtime_audioUILevelDefault;
        } else if (this.$$user_audioUILevelDefault !== undefined) {
            old = this.$$user_audioUILevelDefault;
        } else if (this.$$useinit_audioUILevelDefault) {
            old = this.$$init_audioUILevelDefault;
        }
        this.$$runtime_audioUILevelDefault = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeAudioUILevelDefault anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_audioUILevelDefault !== undefined) delete this.$$runtime_audioUILevelDefault;
}

function getWorldMergeShown anonymous(value) {
    if (this.$$runtime_worldMergeShown !== undefined) return this.$$runtime_worldMergeShown;
    if (this.$$user_worldMergeShown !== undefined) return this.$$user_worldMergeShown;
    else return this.$$init_worldMergeShown;
}

function setWorldMergeShown anonymous(value) {
    this.$$setWorldMergeShownImpl.apply(this, arguments);
    return value;
}

function resetWorldMergeShown anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_worldMergeShown !== undefined) delete this.$$user_worldMergeShown;
}

function setRuntimeWorldMergeShown anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_worldMergeShown !== undefined) {
            old = this.$$runtime_worldMergeShown;
        } else if (this.$$user_worldMergeShown !== undefined) {
            old = this.$$user_worldMergeShown;
        } else if (this.$$useinit_worldMergeShown) {
            old = this.$$init_worldMergeShown;
        }
        this.$$runtime_worldMergeShown = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeWorldMergeShown anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_worldMergeShown !== undefined) delete this.$$runtime_worldMergeShown;
}

function getIosLastCurrency anonymous(value) {
    if (this.$$runtime_iosLastCurrency !== undefined) return this.$$runtime_iosLastCurrency;
    if (this.$$user_iosLastCurrency !== undefined) return this.$$user_iosLastCurrency;
    else return this.$$init_iosLastCurrency;
}

function setIosLastCurrency anonymous(value) {
    this.$$setIosLastCurrencyImpl.apply(this, arguments);
    return value;
}

function resetIosLastCurrency anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_iosLastCurrency !== undefined) delete this.$$user_iosLastCurrency;
}

function setRuntimeIosLastCurrency anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_iosLastCurrency !== undefined) {
            old = this.$$runtime_iosLastCurrency;
        } else if (this.$$user_iosLastCurrency !== undefined) {
            old = this.$$user_iosLastCurrency;
        } else if (this.$$useinit_iosLastCurrency) {
            old = this.$$init_iosLastCurrency;
        }
        this.$$runtime_iosLastCurrency = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeIosLastCurrency anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_iosLastCurrency !== undefined) delete this.$$runtime_iosLastCurrency;
}

function getTradeTableSortOrderColumn anonymous(value) {
    if (this.$$runtime_tradeTableSortOrderColumn !== undefined) return this.$$runtime_tradeTableSortOrderColumn;
    if (this.$$user_tradeTableSortOrderColumn !== undefined) return this.$$user_tradeTableSortOrderColumn;
    else return this.$$init_tradeTableSortOrderColumn;
}

function setTradeTableSortOrderColumn anonymous(value) {
    this.$$setTradeTableSortOrderColumnImpl.apply(this, arguments);
    return value;
}

function resetTradeTableSortOrderColumn anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_tradeTableSortOrderColumn !== undefined) delete this.$$user_tradeTableSortOrderColumn;
}

function setRuntimeTradeTableSortOrderColumn anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_tradeTableSortOrderColumn !== undefined) {
            old = this.$$runtime_tradeTableSortOrderColumn;
        } else if (this.$$user_tradeTableSortOrderColumn !== undefined) {
            old = this.$$user_tradeTableSortOrderColumn;
        } else if (this.$$useinit_tradeTableSortOrderColumn) {
            old = this.$$init_tradeTableSortOrderColumn;
        }
        this.$$runtime_tradeTableSortOrderColumn = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeTradeTableSortOrderColumn anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_tradeTableSortOrderColumn !== undefined) delete this.$$runtime_tradeTableSortOrderColumn;
}

function getTradeTableSortOrderAsc anonymous(value) {
    if (this.$$runtime_tradeTableSortOrderAsc !== undefined) return this.$$runtime_tradeTableSortOrderAsc;
    if (this.$$user_tradeTableSortOrderAsc !== undefined) return this.$$user_tradeTableSortOrderAsc;
    else return this.$$init_tradeTableSortOrderAsc;
}

function setTradeTableSortOrderAsc anonymous(value) {
    this.$$setTradeTableSortOrderAscImpl.apply(this, arguments);
    return value;
}

function resetTradeTableSortOrderAsc anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_tradeTableSortOrderAsc !== undefined) delete this.$$user_tradeTableSortOrderAsc;
}

function setRuntimeTradeTableSortOrderAsc anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_tradeTableSortOrderAsc !== undefined) {
            old = this.$$runtime_tradeTableSortOrderAsc;
        } else if (this.$$user_tradeTableSortOrderAsc !== undefined) {
            old = this.$$user_tradeTableSortOrderAsc;
        } else if (this.$$useinit_tradeTableSortOrderAsc) {
            old = this.$$init_tradeTableSortOrderAsc;
        }
        this.$$runtime_tradeTableSortOrderAsc = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeTradeTableSortOrderAsc anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_tradeTableSortOrderAsc !== undefined) delete this.$$runtime_tradeTableSortOrderAsc;
}

function inDevelopment() {
    return !this.inProduction()
}

function inProduction() {
    return this.__rY && ClientLib.Data.MainData.GetInstance().get_Server().get_Production()
}

function getImagePath(n) {
    return this.getImageSource() + n
}

function getImageUrl(n) {
    return a + this.getImagePath(n) + v
}

function getUIImagePath(n) {
    return this.getUiImageSource() + n
}

function getTimeZone() {
    return parseInt(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_TIMEOFFSETTYPE), 10)
}

function getTimeZoneOffset() {
    return parseInt(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_TIMEOFFSETVALUE), 10) * 36e5
}

function revertToLastSavedOptions() {
    if (ClientLib.Base.LocalStorage.get_IsSupported()) {
        var n = ClientLib.Base.LocalStorage.GetItem(this.getLocalStorageKey() + t);
        n != null && (n.on != null && this.setAudioOn(n.on), n.music != null && this.setAudioMusicLevel(n.music), n.ambient != null && this.setAudioAmbientLevel(n.ambient), n.ui != null && this.setAudioUILevel(n.ui))
    }
}

function updateTradeTableSort(n, t) {
    this.setTradeTableSortOrderColumn(n);
    this.setTradeTableSortOrderAsc(t);
    this._applyTradeTableSortOrderColumn(n);
    this._applyTradeTableSortOrderAsc(t)
}

function _applyTradeTableSortOrderColumn() {
    ClientLib.Base.LocalStorage.get_IsSupported() && ClientLib.Base.LocalStorage.SetItem(this.getLocalStorageKey() + i, this.getTradeTableSortOrderColumn())
}

function _applyTradeTableSortOrderAsc() {
    ClientLib.Base.LocalStorage.get_IsSupported() && ClientLib.Base.LocalStorage.SetItem(this.getLocalStorageKey() + o, this.getTradeTableSortOrderAsc())
}

function _applyAudio() {
    ClientLib.Base.LocalStorage.get_IsSupported() && ClientLib.Base.LocalStorage.SetItem(this.getLocalStorageKey() + t, {
        on: this.getAudioOn(),
        music: this.getAudioMusicLevel(),
        ambient: this.getAudioAmbientLevel(),
        ui: this.getAudioUILevel(),
        savedon: this.getSavedAudioOn(),
        savedmusic: this.getSavedAudioMusicLevel(),
        savedambient: this.getSavedAudioAmbientLevel(),
        savedui: this.getSavedAudioUILevel()
    })
}

function applyIosLastCurrency() {
    ClientLib.Base.LocalStorage.get_IsSupported() && ClientLib.Base.LocalStorage.SetItem(this.getLocalStorageKey() + e, this.getIosLastCurrency())
}

function _applyServerMergeState() {
    ClientLib.Base.LocalStorage.get_IsSupported() && ClientLib.Base.LocalStorage.SetItem(this.getLocalStorageKey() + u, {
        didShowDialogue: this.getWorldMergeShown(),
        test_dummy: 5
    })
}

function updateLoaderAudio() {
    soundConfig.on != null && this.setAudioOn(soundConfig.on)
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