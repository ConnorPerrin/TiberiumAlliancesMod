function _createRootWidget() {
    return new qx.ui.root.Application(document)
}

function getSessionid anonymous(value) {
    if (this.$$runtime_sessionid !== undefined) return this.$$runtime_sessionid;
    if (this.$$user_sessionid !== undefined) return this.$$user_sessionid;
    else return null;
}

function setSessionid anonymous(value) {
    this.$$setSessionidImpl.apply(this, arguments);
    return value;
}

function resetSessionid anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var old;
    if (this.$$runtime_sessionid !== undefined) {
        old = this.$$runtime_sessionid;
    } else if (this.$$user_sessionid !== undefined) {
        old = this.$$user_sessionid;
    } else if (this.$$useinit_sessionid) {
        old = this.$$init_sessionid;
    }
    if (this.$$user_sessionid === undefined) return;
    var computed;
    if (this.$$runtime_sessionid !== undefined) {
        computed = this.$$runtime_sessionid;
        delete this.$$user_sessionid;
    } else if (this.$$user_sessionid !== undefined) {
        delete this.$$user_sessionid;
        if (this.$$runtime_sessionid !== undefined) computed = this.$$runtime_sessionid;
        if (this.$$theme_sessionid !== undefined) computed = this.$$theme_sessionid;
        else if (this.$$init_sessionid !== undefined) {
            computed = this.$$init_sessionid;
            this.$$useinit_sessionid = true;
        }
    } else if (this.$$useinit_sessionid) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this.__qv(computed, old, "sessionid", "reset");

    function fire() {
        var tracker = {};
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}

function initSessionid anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var old;
        if (this.$$runtime_sessionid !== undefined) {
            old = this.$$runtime_sessionid;
        } else if (this.$$user_sessionid !== undefined) {
            old = this.$$user_sessionid;
        } else if (this.$$useinit_sessionid) {
            old = this.$$init_sessionid;
        }
        if (equ.call(this, this.$$init_sessionid, value)) return value;
        var computed;
        if (this.$$runtime_sessionid !== undefined) {
            computed = this.$$runtime_sessionid;
            this.$$init_sessionid = value;
        } else if (this.$$user_sessionid !== undefined) {
            computed = this.$$user_sessionid;
            this.$$init_sessionid = value;
        } else if (this.$$useinit_sessionid) {
            computed = this.$$init_sessionid = value;
        } else {
            computed = this.$$init_sessionid = value;
            this.$$useinit_sessionid = true;
        }
        if (computed === undefined) computed = null;
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this.__qv(computed, old, "sessionid", "init");

        function fire() {
            var tracker = {};
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

function setRuntimeSessionid anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var old;
        if (this.$$runtime_sessionid !== undefined) {
            old = this.$$runtime_sessionid;
        } else if (this.$$user_sessionid !== undefined) {
            old = this.$$user_sessionid;
        } else if (this.$$useinit_sessionid) {
            old = this.$$init_sessionid;
        }
        if (equ.call(this, this.$$runtime_sessionid, value)) return value;
        var computed;
        if (this.$$runtime_sessionid !== undefined) {
            computed = this.$$runtime_sessionid = value;
        } else if (this.$$user_sessionid !== undefined) {
            computed = this.$$runtime_sessionid = value;
        } else if (this.$$useinit_sessionid) {
            delete this.$$useinit_sessionid;
            computed = this.$$runtime_sessionid = value;
        } else {
            computed = this.$$runtime_sessionid = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = null;
        var self = this;
        var promise;
        promise = this.__qv(computed, old, "sessionid", "setRuntime");

        function fire() {
            var tracker = {};
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

function resetRuntimeSessionid anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var old;
    if (this.$$runtime_sessionid !== undefined) {
        old = this.$$runtime_sessionid;
    } else if (this.$$user_sessionid !== undefined) {
        old = this.$$user_sessionid;
    } else if (this.$$useinit_sessionid) {
        old = this.$$init_sessionid;
    }
    if (this.$$runtime_sessionid === undefined) return;
    var computed;
    if (this.$$runtime_sessionid !== undefined) {
        delete this.$$runtime_sessionid;
        if (this.$$user_sessionid !== undefined) computed = this.$$user_sessionid;
        else if (this.$$theme_sessionid !== undefined) computed = this.$$theme_sessionid;
        else if (this.$$init_sessionid !== undefined) {
            computed = this.$$init_sessionid;
            this.$$useinit_sessionid = true;
        }
    } else if (this.$$user_sessionid !== undefined) {
        computed = this.$$user_sessionid;
    } else if (this.$$useinit_sessionid) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this.__qv(computed, old, "sessionid", "resetRuntime");

    function fire() {
        var tracker = {};
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}

function getShowUnloadWarning anonymous(value) {
    if (this.$$runtime_showUnloadWarning !== undefined) return this.$$runtime_showUnloadWarning;
    if (this.$$user_showUnloadWarning !== undefined) return this.$$user_showUnloadWarning;
    else return this.$$init_showUnloadWarning;
}

function setShowUnloadWarning anonymous(value) {
    this.$$setShowUnloadWarningImpl.apply(this, arguments);
    return value;
}

function resetShowUnloadWarning anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_showUnloadWarning !== undefined) delete this.$$user_showUnloadWarning;
}

function setRuntimeShowUnloadWarning anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_showUnloadWarning !== undefined) {
            old = this.$$runtime_showUnloadWarning;
        } else if (this.$$user_showUnloadWarning !== undefined) {
            old = this.$$user_showUnloadWarning;
        } else if (this.$$useinit_showUnloadWarning) {
            old = this.$$init_showUnloadWarning;
        }
        this.$$runtime_showUnloadWarning = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeShowUnloadWarning anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_showUnloadWarning !== undefined) delete this.$$runtime_showUnloadWarning;
}

function getAccountInfo anonymous(value) {
    if (this.$$runtime_AccountInfo !== undefined) return this.$$runtime_AccountInfo;
    if (this.$$user_AccountInfo !== undefined) return this.$$user_AccountInfo;
    else return this.$$init_AccountInfo;
}

function setAccountInfo anonymous(value) {
    this.$$setAccountInfoImpl.apply(this, arguments);
    return value;
}

function resetAccountInfo anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var old;
    if (this.$$runtime_AccountInfo !== undefined) {
        old = this.$$runtime_AccountInfo;
    } else if (this.$$user_AccountInfo !== undefined) {
        old = this.$$user_AccountInfo;
    } else if (this.$$useinit_AccountInfo) {
        old = this.$$init_AccountInfo;
    }
    if (this.$$user_AccountInfo === undefined) return;
    var computed;
    if (this.$$runtime_AccountInfo !== undefined) {
        computed = this.$$runtime_AccountInfo;
        delete this.$$user_AccountInfo;
    } else if (this.$$user_AccountInfo !== undefined) {
        delete this.$$user_AccountInfo;
        if (this.$$runtime_AccountInfo !== undefined) computed = this.$$runtime_AccountInfo;
        if (this.$$theme_AccountInfo !== undefined) computed = this.$$theme_AccountInfo;
        else if (this.$$init_AccountInfo !== undefined) {
            computed = this.$$init_AccountInfo;
            this.$$useinit_AccountInfo = true;
        }
    } else if (this.$$useinit_AccountInfo) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_AccountInfo;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'ChangeAccountInfo')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'ChangeAccountInfo', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'ChangeAccountInfoAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'ChangeAccountInfoAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initAccountInfo anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var old;
    if (this.$$runtime_AccountInfo !== undefined) {
        old = this.$$runtime_AccountInfo;
    } else if (this.$$user_AccountInfo !== undefined) {
        old = this.$$user_AccountInfo;
    } else if (this.$$useinit_AccountInfo) {
        old = this.$$init_AccountInfo;
    }
    var computed;
    if (this.$$runtime_AccountInfo !== undefined) {
        computed = this.$$runtime_AccountInfo;
    } else if (this.$$user_AccountInfo !== undefined) {
        computed = this.$$user_AccountInfo;
    } else if (this.$$useinit_AccountInfo) {
        computed = this.$$init_AccountInfo;
    } else {
        computed = this.$$init_AccountInfo;
        this.$$useinit_AccountInfo = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'ChangeAccountInfo')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'ChangeAccountInfo', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'ChangeAccountInfoAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'ChangeAccountInfoAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeAccountInfo anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var old;
        if (this.$$runtime_AccountInfo !== undefined) {
            old = this.$$runtime_AccountInfo;
        } else if (this.$$user_AccountInfo !== undefined) {
            old = this.$$user_AccountInfo;
        } else if (this.$$useinit_AccountInfo) {
            old = this.$$init_AccountInfo;
        }
        if (equ.call(this, this.$$runtime_AccountInfo, value)) return value;
        var computed;
        if (this.$$runtime_AccountInfo !== undefined) {
            computed = this.$$runtime_AccountInfo = value;
        } else if (this.$$user_AccountInfo !== undefined) {
            computed = this.$$runtime_AccountInfo = value;
        } else if (this.$$useinit_AccountInfo) {
            delete this.$$useinit_AccountInfo;
            computed = this.$$runtime_AccountInfo = value;
        } else {
            computed = this.$$runtime_AccountInfo = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_AccountInfo;
        var self = this;
        var promise;

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'ChangeAccountInfo')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'ChangeAccountInfo', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'ChangeAccountInfoAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'ChangeAccountInfoAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeAccountInfo anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var old;
    if (this.$$runtime_AccountInfo !== undefined) {
        old = this.$$runtime_AccountInfo;
    } else if (this.$$user_AccountInfo !== undefined) {
        old = this.$$user_AccountInfo;
    } else if (this.$$useinit_AccountInfo) {
        old = this.$$init_AccountInfo;
    }
    if (this.$$runtime_AccountInfo === undefined) return;
    var computed;
    if (this.$$runtime_AccountInfo !== undefined) {
        delete this.$$runtime_AccountInfo;
        if (this.$$user_AccountInfo !== undefined) computed = this.$$user_AccountInfo;
        else if (this.$$theme_AccountInfo !== undefined) computed = this.$$theme_AccountInfo;
        else if (this.$$init_AccountInfo !== undefined) {
            computed = this.$$init_AccountInfo;
            this.$$useinit_AccountInfo = true;
        }
    } else if (this.$$user_AccountInfo !== undefined) {
        computed = this.$$user_AccountInfo;
    } else if (this.$$useinit_AccountInfo) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_AccountInfo;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'ChangeAccountInfo')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'ChangeAccountInfo', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'ChangeAccountInfoAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'ChangeAccountInfoAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function main() {
    var t, i, r, u, s;
    if (frontend = webfrontend, frontendBaseFolder = ut, this.LoadNotReferencedFiles(), this.initDone = !1, webfrontend.phe.cnc.res.Main.getInstance().addData(GAMEDATA), ClientLib.Res.ResMain.GetInstance().SetGamedata(GAMEDATA), ClientLib.File.FileManager.GetInstance().RegisterArchive((new ClientLib.File.WebServerArchive).$ctor(eo, GAMEDATA.Archives[0].F)), ClientLib.File.FileManager.GetInstance().RegisterAtlas(GAMEDATA.ImageAtlas), this.__oF = tr, this.__oG = yi, t = webfrontend.phe.cnc.config.Config.getInstance(), i = !0, typeof ScriptErrorHandler === n && ScriptErrorHandler != e ? i = !0 : ScriptErrorHandler = du, typeof LandingPageURL === n && LandingPageURL != e ? i = !0 : LandingPageURL = vt, LandingPageURL = LandingPageURL.replace(a, document.location.protocol), typeof ForumURL === n && ForumURL != e ? (Language == ff || Language == af || Language == ft) && (ForumURL = ForumURL.replace(fe, vr)) : ForumURL = vt, ForumURL = ForumURL.replace(a, document.location.protocol), this.__pR = ti, i = !1, i && qx.event.GlobalError.setErrorHandler(this.handleError, this), r = ClientLib.Draw.Html.ImageCache.GetInstance(), typeof ResStore === n ? r.set_PreloadChannels(qx.core.Environment.get(bt) * 4) : r.set_PreloadChannels(Math.floor(qx.core.Environment.get(bt) / 2)), typeof ResStore === n ? ClientLib.File.FileManager.GetInstance().SetStorageData(ResStore + lf, nt) : ClientLib.File.FileManager.GetInstance().SetStorageData(nt, nt), webfrontend.Application.__oD = qx.util.ResourceManager.getInstance().toUri, qx.util.ResourceManager.getInstance().toUri = this.ResourceManager_toUri, ClientLib.Vis.Battleground.Battleground.InitBattleUnitTypes(), qx.application.Standalone.prototype.main.call(this), this.getRoot().setBackgroundColor(ki), typeof SessionId == n) {
        if (SessionId == e) {
            this.reauthenticatePlayer();
            return
        }
        this.setSessionid(SessionId)
    }
    this.overlayPositions = [];
    this.overlaySizes = [];
    this.mentorPositions = [];
    this.__oH = 0;
    this.__oI = 0;
    qx.log.appender.Native;
    qx.log.appender.Console;
    qx.core.Environment.get(o) == ct && (ClientLib.Draw.DrawMain.CANVAS_IMAGE_PATTERNWELDING_FACTOR = .5);
    t.inProduction() && qx.log.appender.Console.dispose();
    typeof ChatEnabled == v && (this.__oE = !0);
    Language = typeof Language != n ? fi : webfrontend.phe.cnc.Util.getSupportedLocale(Language);
    Language == wu ? qx.locale.Manager.getInstance().setLocale(or) : qx.locale.Manager.getInstance().setLocale(Language);
    webfrontend.gui.ShortkeyMapper.keys = webfrontend.gui.ShortkeyMapper.latin_keys;
    (Language == de || Language == ci) && (webfrontend.gui.ShortkeyMapper.keys = webfrontend.gui.ShortkeyMapper.arabic_keys);
    t.inDevelopment() || (qx.core.Environment.invalidateCacheKey(y), delete qx.core.Environment.getChecks()[y], qx.core.Environment.add(y, function() {
        return !1
    }));
    typeof PerforceChangelistNew == v && PerforceChangelistNew != ef && (document.title = document.title + c + PerforceChangelistNew + f);
    t.addListener(uu, this.__qq, this);
    this.loadFonts();
    u = qx.bom.Viewport.getWidth(window);
    s = qx.bom.Viewport.getHeight(window);
    webfrontend.ui.OverlayWindowManager.getInstance();
    this.__oJ = (new qx.ui.container.Scroll).set({
        width: u,
        height: s
    });
    this.__oK = new qx.ui.container.Composite(new qx.ui.layout.Canvas).set({
        minWidth: 768,
        minHeight: 658
    });
    this.__oK.setFocusable(!0);
    this.__oJ.add(this.__oK);
    this.getRoot().add(this.__oJ, {
        top: 0
    });
    this.__oK.addListener(kt, this.__qr, this);
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        this.__qb = new AudioContext
    } catch (h) {}
    t.inDevelopment() && webfrontend.gui.layout.Loader.getInstance().prepareLayouts();
    webfrontend.gui.widgets.popup.PopupChain.getInstance().addListener(te, this.__qk, this);
    webfrontend.gui.widgets.popup.PopupChain.getInstance().addListener(pu, this.__ql, this);
    webfrontend.gui.widgets.popup.PopupChain.getInstance().addListener(ai, this.__qm, this)
}

function startPreload() {
    var n = ClientLib.Draw.Html.ImageCache.GetInstance(),
        t = 0,
        i;
    for (n.AddImageForPreload(pe), n.AddImageForPreload(fo), n.AddImageForPreload(gf), t += 3, i = 0; i < GAMEDATA.preload.length; i++) n.AddImageForPreload(GAMEDATA.preload[i]), t++;
    this.__pC = t;
    t > 0 && this.updatePreload()
}

function startCombatPreload(n) {
    for (var i = n == 1 ? [81, 87, 94, 82, 185, 184, 188, 192, 178, 180, 58, 78, 79, 74, 75, 73, 72] : [133, 139, 146, 137, 185, 184, 188, 192, 178, 180, 58, 78, 79, 74, 75, 73, 72], t = 0; t < i.length; t++) ClientLib.Vis.Battleground.Battleground.PreCacheUnit(i[t])
}

function updatePreload() {
    var i = ClientLib.Draw.Html.ImageCache.GetInstance(),
        n = qx.core.Init.getApplication(),
        t, r;
    i.Update();
    t = i.get_OutstandingFiles();
    r = (n.__pC - t) / n.__pC;
    n.__qt(r * (1 - TOD_ScriptPercent) + TOD_ScriptPercent);
    t > 0 && window.setTimeout(n.updatePreload, 100)
}

function loadFonts() {
    var i = this,
        n, t;
    WebFontConfig = {
        google: {
            families: webfrontend.theme.Font.fonts[li].family
        },
        active: function() {
            i.initUI()
        },
        inactive: function() {
            i.initUI()
        }
    };
    n = document.createElement(wt);
    n.src = (se == document.location.protocol ? oo : lr) + bu;
    n.type = cr;
    n.async = ir;
    t = document.getElementsByTagName(wt)[0];
    t.parentNode.insertBefore(n, t)
}

function initUI() {
    if (this.startPreload(), ClientLib.Net.CommunicationManager.GetInstance().RegisterDataReceiver(ae, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.UpdateData, this, this._onSysMsg)), ClientLib.Net.CommunicationManager.GetInstance().RegisterDataReceiver(ro, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.UpdateData, this, this._onVersionMsg)), ClientLib.Net.CommunicationManager.GetInstance().set_PlatformId(1), typeof GAME_Item == kf && ClientLib.Data.MainData.GetInstance().get_Gift().Register(GAME_Item), typeof SessionId == n) this.setSessionid(SessionId), this.loadLoca();
    else {
        this.setShowUnloadWarning(!1);
        this.reauthenticatePlayer();
        return
    }
    this.connectHosts()
}

function close() {
    if (this.getShowUnloadWarning()) return this.__pi != null && this.__pi.isActive() ? void 0 : yu
}

function terminate() {
    this.__oF = null
}

function connectHosts() {
    var i, r, t, u;
    if (typeof Networks == n)
        for (i = Networks.split(hi), r = ClientLib.Host.Main.GetInstance(), t = 0; t < i.length; t++) u = r.AddHostByName(i[t]), t == 0 && r.set_PrimaryHost(u)
}

function getDesktop() {
    return this.__oK
}

function getMainContainer() {
    return this.__oJ
}

function getChat() {
    return this.__pc
}

function getQuickBuyConfirmation() {
    return this.__pd
}

function getMarkerManager() {
    return this.__pB
}

function loadLoca() {
    qx.io.PartLoader.require([qx.locale.Manager.getInstance().getLocale()], this.loadLocaDone, this)
}

function loadLocaDone(n) {
    if (n[0] == sf) {
        this.__oF = this.tr(ke);
        this.checkWarningScreen();
        return
    }
}

function openSession() {
    this.fetchDataRetryCounter == null && (this.fetchDataRetryCounter = 0);
    ClientLib.Net.CommunicationManager.GetInstance().set_SessionId(this.getSessionid());
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleSessionCommand(sr, {
        reset: !0,
        refId: ClientLib.Net.CommunicationManager.GetInstance().get_ReferenceId(),
        version: ClientLib.Net.CommunicationManager.GetInstance().get_ClientVersion(),
        platformId: ClientLib.Net.CommunicationManager.GetInstance().get_PlatformId()
    }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, function(n, t) {
        if (t == null) {
            if (this.fetchDataRetryCounter < 10) {
                this.fetchDataRetryCounter++;
                qx.util.TimerManager.getInstance().start(this.openSession, null, this, null, 1e3);
                return
            }
            this._executeSysMsg(tt);
            return
        }
        if (t.r < 0) {
            if (this.fetchDataRetryCounter < 10) {
                this.fetchDataRetryCounter++;
                qx.util.TimerManager.getInstance().start(this.openSession, null, this, null, 1e3);
                return
            }
            switch (t.r) {
                case -30:
                    this._executeSysMsg(gt);
                    break;
                case -130:
                    window.alert(this.tr(g));
                    this.reauthenticatePlayer();
                    break;
                default:
                    this.reauthenticatePlayer()
            }
            this.fetchDataRetryCounter = null;
            return
        }
        qx.bom.Cookie.set(l, 0, -1, p, window.location.hostname, !0);
        this.fetchDataRetryCounter = null;
        var i = ClientLib.Net.CommunicationManager.GetInstance();
        i.set_InstanceId(t.i);
        i.set_ReferenceId(t.ri);
        webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Gift(), dr, ClientLib.Data.NewGift, this, this._onNewGift);
        ClientLib.Host.Main.GetInstance().AttachNetworks();
        this.getServerData()
    }), null)
}

function getServerData() {
    this.fetchDataRetryCounter == null && (this.fetchDataRetryCounter = 0);
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(hr, null, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, function(n, t) {
        if (t == null) {
            if (this.fetchDataRetryCounter < 10) {
                this.fetchDataRetryCounter++;
                qx.util.TimerManager.getInstance().start(this.getServerData, null, this, null, 1e3);
                return
            }
            this.redirectBrowser(LandingPageURL)
        }
        if (t.s > 0) {
            if (this.fetchDataRetryCounter < 10) {
                this.fetchDataRetryCounter++;
                qx.util.TimerManager.getInstance().start(this.getServerData, null, this, null, 1e3);
                return
            }
            this._executeSysMsg(ri);
            this.fetchDataRetryCounter = null;
            return
        }
        this.fetchDataRetryCounter = null;
        ClientLib.Data.MainData.GetInstance().get_Server().setData(t);
        ClientLib.Res.ResMain.GetInstance().ApplyResourceModifiers();
        ClientLib.Data.MainData.GetInstance().get_World().Init();
        document.title = document.title + c + t.pv + f + c + t.sv + f + fu + GAMEDATA.creator + f;
        this.getPlayerData(t)
    }), null)
}

function getPlayerData(n) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(ru, null, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, function(t, i) {
        if (i == null) {
            this.reauthenticatePlayer();
            return
        }
        if (i.Id < 0) {
            this.createNewPlayer(i.Name, n);
            webfrontend.phe.cnc.base.Timer.getInstance().startFrameGeneration();
            this.__pV == null && (this.__pV = new qx.event.Timer(6e4), this.__pV.addListener(ye, this.__qo, this), this.__pV.start(), this.__qo());
            return
        }
        if (i.Name == null || i.WorldStartX == -1) {
            this.getPlayerData();
            return
        }
        if (qx.bom.Cookie.set(l, 0, -1, p, window.location.hostname, !0), ClientLib.Config.Main.GetInstance().SetServerConfig(i.c), ClientLib.Data.MainData.GetInstance().get_Mail().Init(), ClientLib.Data.MainData.GetInstance().get_Reports().Init(), ClientLib.Data.MainData.GetInstance().get_Notifications().Init(), ClientLib.Data.MainData.GetInstance().get_Player().Init(i.f), ClientLib.Data.MainData.GetInstance().get_Cities().Init(), ClientLib.Data.MainData.GetInstance().get_Player().get_ServerSideType() == ClientLib.Base.EFactionType.GDIFaction ? (qx.util.AliasManager.getInstance().add(yt, ue), qx.util.AliasManager.getInstance().add(et, ee), qx.util.AliasManager.getInstance().add(ht, nu), qx.theme.manager.Meta.getInstance().setTheme(webfrontend.theme.gdi.Theme)) : (qx.util.AliasManager.getInstance().add(yt, bi), qx.util.AliasManager.getInstance().add(et, yr), qx.util.AliasManager.getInstance().add(ht, rr), qx.theme.manager.Meta.getInstance().setTheme(webfrontend.theme.nod.Theme)), i.hasOwnProperty(to) && ClientLib.Data.MainData.GetInstance().get_Player().set_IsSubstituted(i.s), i.hasOwnProperty(yf) && (i.st.hasOwnProperty(nr) && ClientLib.Data.MainData.GetInstance().get_Player().set_SubstituteDayCount(i.st.sd), i.st.hasOwnProperty(vu) && ClientLib.Data.MainData.GetInstance().get_Player().set_SubstituteLastLogout(i.st.ll)), ClientLib.Data.MainData.GetInstance().get_Player().get_IsSubstituted() && i.hasOwnProperty(bf)) {
            if (i.sl == !1) {
                this.startGameTransfer();
                this.showEndSubstitutionWidget();
                return
            }
            ClientLib.Data.MainData.GetInstance().get_Player().set_IsSubstituteLogin(i.sl)
        }
        this.onPlayerDataLoaded()
    }), null)
}

function onPlayerDataLoaded() {
    this.getMissionsBar().gotPlayerInfo();
    qx.core.Init.getApplication().initDesktop();
    webfrontend.gui.forum.ForumOverlay.getInstance();
    webfrontend.gui.mail.MailOverlay.getInstance();
    webfrontend.gui.reports.ReportsOverlay.getInstance();
    webfrontend.gui.alliance.AllianceOverlay.getInstance();
    webfrontend.gui.research.ResearchOverlay.getInstance();
    webfrontend.gui.monetization.ShopOverlay.getInstance();
    webfrontend.gui.ranking.RankingOverlay.getInstance();
    this.getAllianceMarkerNavs().setContainer(this.__oL.getAnonymousOverlayContainer())
}

function checkWarningScreen() {
    this.checkBrowserSupport()
}

function checkBrowserSupport() {
    var n = webfrontend.gui.BadBrowserWindow.EBadBrowserMode.EBBM_SUPPORT_PART,
        t = parseFloat(qx.core.Environment.get(ou)),
        i = parseFloat(qx.core.Environment.get(ne));
    switch (qx.core.Environment.get(o)) {
        case ct:
            t < 3.6 && (n = webfrontend.gui.BadBrowserWindow.EBadBrowserMode.EBBM_SUPPORT_NONE);
            t >= 4 && (n = webfrontend.gui.BadBrowserWindow.EBadBrowserMode.EBBM_SUPPORT_OK);
            break;
        case pt:
            (t <= 9 || i <= 9) && (n = webfrontend.gui.BadBrowserWindow.EBadBrowserMode.EBBM_SUPPORT_NONE);
            t >= 10 && (n = webfrontend.gui.BadBrowserWindow.EBadBrowserMode.EBBM_SUPPORT_OK);
            break;
        case wr:
            n = t < 14 ? webfrontend.gui.BadBrowserWindow.EBadBrowserMode.EBBM_SUPPORT_NONE : webfrontend.gui.BadBrowserWindow.EBadBrowserMode.EBBM_SUPPORT_OK;
            break;
        case iu:
            n = t < 4 ? webfrontend.gui.BadBrowserWindow.EBadBrowserMode.EBBM_SUPPORT_NONE : webfrontend.gui.BadBrowserWindow.EBadBrowserMode.EBBM_SUPPORT_OK;
            break;
        case uo:
            n = webfrontend.gui.BadBrowserWindow.EBadBrowserMode.EBBM_SUPPORT_OK
    }
    if (n == webfrontend.gui.BadBrowserWindow.EBadBrowserMode.EBBM_SUPPORT_OK && ClientLib.Draw.WebGL.SceneFactory.CheckWebGL() == -1 && (n = webfrontend.gui.BadBrowserWindow.EBadBrowserMode.EBBM_SUPPORT_NOGFX), n == webfrontend.gui.BadBrowserWindow.EBadBrowserMode.EBBM_SUPPORT_OK) {
        this.waitForAssetPreload();
        return
    }(new webfrontend.gui.BadBrowserWindow).set({
        BrowserMode: n
    }).show()
}

function checkStartingScreens() {
    webfrontend.data.missions.MissionEvents.getInstance();
    webfrontend.data.InfoTracker.getInstance();
    webfrontend.data.ItemEvents.getInstance();
    var h = ClientLib.Data.MainData.GetInstance().get_Cities(),
        n = h.get_CurrentOwnCity(),
        f = this.getPlayArea(),
        c = webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SHOWCHEATSERVERWARNING),
        u = webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SHOWWELCOME),
        l = webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SHOW_20YCNC),
        a = webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_SHOW_10YCCTA),
        e = webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_FIRSTTUTORIALCANCELLED),
        i = ClientLib.Data.MainData.GetInstance(),
        r = ClientLib.Data.Missions.EMissionStepDBIDs,
        o = i.get_Player().get_Faction() == ClientLib.Base.EFactionType.GDIFaction ? i.get_Missions().GetMissionStep(r.ProgressTutorial_BuildTwoHarvesters) || i.get_Missions().GetMissionStep(r.ProgressTutorial_BuildTwoHarvesters_B) : i.get_Missions().GetMissionStep(r.Nod_ProgressTutorial_BuildTwoHarvesters) || i.get_Missions().GetMissionStep(r.Nod_ProgressTutorial_BuildTwoHarvesters_B),
        s = o != null,
        t = !1;
    switch (f.getViewMode()) {
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase:
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense:
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense:
            n && n.get_IsGhostMode() ? (t = !0, this.showMainOverlay(!1), webfrontend.gui.widgets.confirmationWidgets.GhostedConfirmationWidget.getInstance().showGhostedInformation(n)) : u || !e && s ? (this.showMainOverlay(!1), u && (t = !0, ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer() ? this.showAcceptServerTerms() : this.showWelcomeScreen())) : webfrontend.gui.UtilView.openVisModeInMainWindow(f.getViewMode(), n.get_Id(), !1);
            webfrontend.gui.UtilView.centerCityOnRegionViewWindow(n.get_Id())
    }!n || n.get_IsGhostMode() || u || e || !s || (t = !0, webfrontend.data.missions.MissionScriptParser.getInstance().startMissionStep(o.get_MdbId()));
    c && ClientLib.Data.MainData.GetInstance().get_Server().get_IsPublicTestEnvironment() && (t = !0, (new webfrontend.gui.widgets.confirmationWidgets.CheatServerConfirmationWidget).showCheatServerWarning());
    l && !t && (new webfrontend.gui.info.Y20CncPopup).show();
    a && !t && (new webfrontend.gui.info.Y10CCTAPopup).show();
    webfrontend.data.AllianceEvents.getInstance().startListening();
    webfrontend.data.ChallengeEvents.getInstance().startListening();
    webfrontend.gui.alliance.AllianceMarkerNavs.updateHomeMarker(n)
}

function showWelcomeScreen() {
    this.showTutorialWidget();
    this.getTutorialWidget().startWelcomizer()
}

function showAcceptServerTerms() {
    this.showSesonsServerTerms()
}

function createNewPlayer(n, t) {
    this.__pU = new webfrontend.gui.NewPlayerWidget(n, t);
    this.getRoot().add(this.__pU);
    this.__qs()
}

function removeNewPlayerCreationPages() {
    this.__pU && (this.getRoot().remove(this.__pU), this.getPlayerData(), this.__pU.dispose(), this.__pU = null);
    this.__pV && (this.__pV.dispose(), this.__pV = null)
}

function waitForAssetPreload() {
    var n = ClientLib.Draw.Html.ImageCache.GetInstance();
    if (n.Update(), n.get_OutstandingFiles() == 0) {
        qx.core.Init.getApplication().openSession();
        return
    }
    window.setTimeout(qx.core.Init.getApplication().waitForAssetPreload, 0)
}

function startGameTransfer() {
    ClientLib.Net.CommunicationManager.GetInstance().set_PollActive(!0);
    webfrontend.gui.notifications.SingleNotificationPopupManager.getInstance()
}

function stopGameTransfer() {
    ClientLib.Net.CommunicationManager.GetInstance().set_PollActive(!1)
}

function initDesktop() {
    var v, y, l, p, i, n, e, a;
    this.__pM && (this.__pM = !1, ClientLib.Vis.VisMain.CreateInstance(), ClientLib.Vis.VisMain.GetInstance().Init(qx.core.Environment.get(o)), document.title = document.title + c + ClientLib.Draw.DrawMain.GetInstance().get_AvailableSceneTypes()[0] + f, webfrontend.phe.cnc.base.Timer.getInstance().addListener(ar, ClientLib.Vis.VisMain.GetInstance().SoundUpdate, ClientLib.Vis.VisMain.GetInstance()), this.__qq(), ClientLib.Vis.VisMain.GetInstance().PlayVoiceSound(su), this.__qs(), v = webfrontend.phe.cnc.base.Timer.getInstance(), v.startFrameGeneration(), y = this.getRoot(), y.setBackgroundColor(cu), this.__pB = new webfrontend.gui.MarkerManager(this.__oK), webfrontend.gui.PreloadObserverGui.getInstance(), qx.event.Registration.addListener(qx.dom.Node.getWindow(this.getRoot()), b, this._onResize, this), this.__oK.addListener(b, this._onDesktopResize, this), qx.bom.Element.addListener(window.document.body, no, this.onHotKeyUp, this), qx.bom.Element.addListener(window.document.body, ei, this.onHotKeyDown, this), qx.bom.Element.addListener(window.document.body, ei, this.onHotKeyPress, this), this.allowHotKey = !0, qx.bom.Element.addListener(this.__oK, kr, this.onGlobalMouseMove, this), l = 30, p = 764, this.__oL = new webfrontend.gui.BackgroundArea, this.__pd = new webfrontend.gui.widgets.confirmationWidgets.QuickBuyConfirmationWidget, this.__oM = new webfrontend.gui.MainOverlay, this.__pT = new qx.util.DeferredCall(this.triggerDesktopResize, this), this.registerConsoleCommand(pr, function() {
        var n = qx.core.Init.getApplication();
        n.getMarkerManager().setHighlight(n.__oM);
        n.getMarkerManager().addMarker(n.__oM, vf, tf)
    }), this.__oS = new webfrontend.gui.bars.PlayerBar, this.__oU = new webfrontend.gui.bars.NotificationBar, this.__pc = new webfrontend.gui.chat.ChatWindow, this.__pb = new webfrontend.gui.chat.ChatButtonWidget, this.__oO = new webfrontend.gui.bars.ServerBarWidget, this.__oP = new webfrontend.gui.bars.OptionsBar, i = new qx.ui.container.Composite((new qx.ui.layout.VBox).set({
        alignX: tu
    })), i.add(this.__oP), i.add(this.__oO), this.__oQ = new webfrontend.gui.bars.MenuBar, this.__oQ.setHeight(l), this.__oQ.setWidth(p), this.__oR = ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer() ? new webfrontend.gui.bars.SeasonServerEventBar : new webfrontend.gui.bars.ServerEventBar, this.__oR.set({
        width: this.__oQ.getWidth() - 20,
        maxWidth: this.__oQ.getWidth() - 20
    }), this.__pl = {
        left: 0,
        bottom: 0
    }, this.__pm = {
        left: 0,
        bottom: 0
    }, this.__po = webfrontend.Application.legacySocWidth, this.__pn = webfrontend.Application.legacySocHeight, this.__pp = new qx.ui.basic.Image(uf).set({
        visibility: ni,
        allowGrowX: !0,
        scale: !0
    }), this.__oV = new webfrontend.gui.bars.SystemMessageBar, this.__oW = new webfrontend.gui.notifications.Ticker, this.__oW.setWidth(webfrontend.Application.legacySocWidth), this.__pr = {
        left: 0,
        bottom: this.__pn
    }, this.__pq = new webfrontend.gui.production.ProductionMenuDetailPopup, this.__oY = new webfrontend.gui.bars.ArmySetupAttackBar, this.__oY.setWidth(this.__po), this.__pa = new webfrontend.gui.preArmySetup.ArmyUnitTooltipOverlay, this.__ph = new webfrontend.gui.bars.GlobalBaseTimerBar, this.__pe = new webfrontend.gui.bars.BaseNavigationBar, this.__pf = new webfrontend.gui.bars.SimulationResultBar, this.__pg = new webfrontend.gui.info.SimulationResultWindow, this.getMissionsBar().addListener(b, this.__qf, this), this.__pE = webfrontend.gui.MaintenanceWindow.getInstance(), webfrontend.gui.info.NewPlayerTitleWindow.getInstance(), this.__pG = new webfrontend.gui.widgets.ShowMenuButton(webfrontend.gui.widgets.ShowMenuButton.left), this.__pH = new webfrontend.gui.widgets.ShowMenuButton(webfrontend.gui.widgets.ShowMenuButton.right), this.__pK = new webfrontend.gui.bars.LeftBarsGroup, this.getMissionsBar().setParentBar(this.__pK), this.__oS.getContentElement().setStyle(u, r), this.getMissionsBar().getContentElement().setStyle(u, r), this.__oU.getContentElement().setStyle(u, r), this.__pK.add(this.__oS, {
        left: 0,
        top: 0
    }), this.__pK.add(this.getMissionsBar(), {
        left: 0,
        top: this.__oS.getHeight()
    }), this.__pK.add(this.__oU, {
        left: 0,
        top: this.__oS.getHeight() + this.getMissionsBar().getSizeHint().height,
        bottom: 0
    }), i.getContentElement().setStyle(u, r), this.__ph.getContentElement().setStyle(u, r), this.__pe.getContentElement().setStyle(u, r), this.__pL = new webfrontend.gui.bars.RightBarsGroup, this.__pL.add(i, {
        right: 0,
        bottom: 0
    }), this.__pL.add(this.__ph, {
        right: 0,
        top: 0
    }), this.__pL.add(this.__pe, {
        right: 0,
        top: this.__ph.getHeight()
    }), this.__pQ = new qx.ui.container.Composite(new qx.ui.layout.Canvas), this.__oK.add(this.__oL, {
        left: 0,
        bottom: 0,
        right: 0,
        top: 0
    }), this.__oK.add(this.__oR, {
        left: 0,
        top: this.__oQ.getHeight()
    }), this.__oK.add(this.__oM, {
        left: 0,
        bottom: 0
    }), this.__oK.add(this.__oQ, {
        left: 0,
        top: 0
    }), this.__oK.add(this.__oV, {
        top: l,
        left: 0
    }), this.__oK.add(this.__oW, {
        left: 0,
        bottom: webfrontend.Application.legacySocHeight
    }), this.__oK.add(this.__pq, this.__pr), this.__oK.add(this.__oY, {
        left: 0,
        bottom: 0
    }), this.__oK.add(this.__pa, {
        left: 0,
        bottom: 0
    }), this.__oK.add(this.__pQ, this.__pl), this.__oK.add(this.__pK, {
        left: 0,
        top: 0,
        bottom: 0
    }), this.__oK.add(this.__pL, {
        right: 0,
        top: 0,
        bottom: 0
    }), this.__oK.add(this.getMissionsBar().getWidgetDetails().set({
        minHeight: this.getMissionsBar().getHeight()
    }), {
        left: Math.max(125, this.getMissionsBar().getWidth()),
        top: this.__oS.getHeight()
    }), this.__oK.add(this.__pG, {
        left: 0,
        top: 146
    }), this.__oK.add(this.__pH, {
        right: 0,
        top: 146
    }), this.__oK.add(this.__pb, {
        left: 0,
        bottom: 0
    }), this.__oK.add(webfrontend.gui.reports.WorldWinPopup.getInstance(), {
        left: 0,
        bottom: 0,
        right: 0,
        top: 0
    }), this.__oK.add(webfrontend.gui.reports.CombatVictoryPopup.getInstance(), {
        left: 0,
        bottom: 0,
        right: 0,
        top: 0
    }), webfrontend.gui.reports.WorldWinPopup.getInstance().exclude(), webfrontend.gui.reports.CombatVictoryPopup.getInstance().exclude(), this.__ps = new webfrontend.gui.production.OverlayTechPlacement, this.__pt = new webfrontend.gui.production.OverlayUnitRecruitment, this.__pu = new webfrontend.gui.UseGiftOverlay, this.__pv = new webfrontend.gui.reports.ReportReplayOverlay, (!webfrontend.phe.cnc.config.Config.getInstance().inProduction() || this.__oE) && (n = new qx.ui.command.Command(vi), n.addListener(s, function() {
        this.toggleChat()
    }, this)), webfrontend.phe.cnc.config.Config.getInstance().inDevelopment() && (typeof webfrontend.gui.layout.editor !== t && typeof webfrontend.gui.layout.editor.Viewer !== t && (n = new qx.ui.command.Command(ce), n.addListener(s, function() {
        webfrontend.gui.layout.editor.Viewer.getInstance().show()
    }, this)), typeof webfrontend.gui.experimental !== t && typeof webfrontend.gui.experimental.CombatBuilder !== t && (n = new qx.ui.command.Command(gi), n.addListener(s, function() {
        webfrontend.gui.experimental.CombatBuilder.getInstance().show()
    }, this))), n = new qx.ui.command.Command(io), n.addListener(s, this.__qn, this), ClientLib.Vis.VisMain.GetInstance().InitViews(), ClientLib.Vis.VisMain.GetInstance().get_Region().set_UseCachedBackgroundPlates(qx.core.Environment.get(o) != pt), this._onResize(), this._onDesktopResize(), qx.ui.core.queue.Manager.flush(), this.initDone = !0, e = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId(), this.__oM.playArea.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase, e, -1, -1), e >= 0 && this.__oL.setView(ClientLib.Vis.Mode.World, e, 0, 0), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance(), be, ClientLib.Data.CommandError, this, this._onCommandError), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Combat(), ve, ClientLib.Data.CombatReport, this, this._onCombatReport), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), h, ClientLib.Data.CitiesChange, this, this.__qg), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), gu, ClientLib.Data.CurrentOwnCityChange, this, this.__qh), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), ur, ClientLib.Data.GhostModeChanged, this, this.__qi), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_EndGame(), h, ClientLib.Data.Change, this, this._onRequestSideBarNotifications), this.startGameTransfer(), this.__qe(), this.toggleChat(!0), a = ClientLib.Data.MainData.GetInstance().get_Server().get_ServerCheats(), (webfrontend.phe.cnc.config.Config.getInstance().inDevelopment() || a != null && a.length > 0) && typeof webfrontend.DebugCommands !== t && webfrontend.DebugCommands.getInstance())
}

function _onResize() {
    var n = qx.bom.Viewport.getWidth(window),
        i = qx.bom.Viewport.getHeight(window),
        t = i;
    this.__oJ.setWidth(n);
    this.__oJ.setHeight(t);
    this.__oL.setMaxWidth(n);
    this.__oL.setMaxHeight(t)
}

function triggerDesktopResize() {
    this._onDesktopResize()
}

function _onDesktopResize(n) {
    var v = this.__oK.getBounds(),
        r = v.width,
        y = v.height,
        b = r,
        t, c, u, i, h, a, p, w;
    this.__oQ.setLayoutProperties({
        left: Math.floor((r - this.__oQ.getWidth()) / 2),
        top: 0
    });
    this.__oR.setLayoutProperties({
        left: Math.floor((r - this.__oR.getWidth()) / 2),
        top: this.__oQ.getHeight()
    });
    t = webfrontend.Application.legacySocWidth;
    c = this.getPlayArea();
    c.isActive() && c.getViewMode() === ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense && (t = webfrontend.Application.legacySocWidthDefense);
    this.getCurrentBottomOverlay() ? this.__oW.setLayoutProperties({
        left: Math.floor((r - t) / 2),
        bottom: webfrontend.Application.legacySocHeight
    }) : this.__oW.setLayoutProperties({
        left: Math.floor((r - t) / 2),
        bottom: 0
    });
    this.__oW.setWidth(t);
    this.__pl = {
        left: Math.floor((r - t) / 2),
        bottom: 0
    };
    this.__pQ.setLayoutProperties(this.__pl);
    this.__pm = {
        left: Math.floor((r - t) / 2) - 18,
        bottom: 0
    };
    this.__pp.setLayoutProperties(this.__pm);
    this.__pr = {
        left: this.__pl.left,
        bottom: this.__pn
    };
    this.__pq.setLayoutProperties(this.__pr);
    this.__oU.setLayoutProperties({
        bottom: 3 + (this.__pc.isVisible() ? this.__pc.getDocked() ? webfrontend.gui.chat.ChatWindow.dimension.dock_height : 0 : webfrontend.gui.chat.ChatButtonWidget.dimensionsFull.height)
    });
    var k = ClientLib.Vis.VisMain.GetInstance(),
        e = k.get_City(),
        o = e.get_MaxYPosition() - e.get_MinYPosition(),
        l = e.get_MaxXPosition() - e.get_MinXPosition(),
        s = y - webfrontend.Application.legacySocHeight - this.__oQ.getHeight() - 8,
        f = b - webfrontend.gui.bars.NotificationBar.MaxNotificationWidth - webfrontend.gui.bars.SimulationResultBar.MaxWidth - 12;
    if (f <= webfrontend.gui.MenuOverlayWidget.OverlayWidth ? (this.__pG.show(), this.__pH.show(), this.__pI ? (this.__pG.setDirection(webfrontend.gui.widgets.ShowMenuButton.left), this.__pc.isVisible() || this.__pb.setState(webfrontend.gui.chat.ChatButtonWidget.state.full)) : (this.__pG.setDirection(webfrontend.gui.widgets.ShowMenuButton.right, this.__pK, !1), this.__pb.setState(webfrontend.gui.chat.ChatButtonWidget.state.hidden)), this.__pJ ? this.__pH.setDirection(webfrontend.gui.widgets.ShowMenuButton.right) : this.__pH.setDirection(webfrontend.gui.widgets.ShowMenuButton.left, this.__pL, !1), this.__pf.isVisible() && this.__pg.isVisible() && this.__pg.getDocked() && (this.__pg.close(), this.__pf.setDocked(!0)), this.__pG.scheduleAppear(), this.__pH.scheduleAppear(), f += webfrontend.gui.bars.NotificationBar.MaxNotificationWidth + webfrontend.gui.bars.SimulationResultBar.MaxWidth) : (this.__pK.setActive(!0), this.__pL.setActive(!0), this.__pG.setMenuActivationStatus(!0), this.__pH.setMenuActivationStatus(!0), this.__pG.exclude(), this.__pH.exclude(), this.__pI = !1, this.__pJ = !1, this.__pf.isVisible() && !this.__pg.isVisible() && (this.__pg.open(), this.__pf.setDocked(!1)), this.__pc.isVisible() || this.__pb.setState(webfrontend.gui.chat.ChatButtonWidget.state.full)), s > o && f > l ? (u = o, i = l) : (h = l / o, s > o ? (i = f, u = Math.floor(f / h)) : (u = s, i = Math.floor(s * h)), i > f && (i = f, u = Math.floor(i / h))), i += 6, u += 6, this.__oM.set({
            width: i,
            maxWidth: i,
            height: u,
            maxHeight: u
        }), this.__oM.setLayoutProperties({
            left: Math.floor((r - i) / 2),
            bottom: webfrontend.Application.legacySocHeight
        }), i < t && (t = i), this.__pl = {
            left: Math.floor((r - t) / 2),
            bottom: 0
        }, this.__pQ.set({
            width: t,
            maxWidth: t
        }), this.__pQ.setLayoutProperties(this.__pl), this.__pm = {
            left: Math.floor((r - t) / 2) - 18,
            bottom: 0
        }, this.__pp.set({
            width: t + 32,
            maxWidth: t + 32
        }), this.__pp.setLayoutProperties(this.__pm), this.__oW.setLayoutProperties({
            left: Math.floor((r - t) / 2 + 4)
        }), this.__oW.set({
            width: t - 8,
            maxWidth: t - 8
        }), this.__pf.isVisible() && !this.__pf.getDocked() && this.__pg.isVisible())
        if (this.__pg.getDocked()) a = Math.min(this.__pf.getSizeHint().height + 37, webfrontend.Application.legacySocHeight + u), this.__pg.set({
            height: a,
            maxHeight: a
        }), this.__pg.setLayoutProperties({
            left: Math.floor((r + i) / 2),
            top: y - webfrontend.Application.legacySocHeight - u
        });
        else this.__pg.onDesktopResize(n);
    this.__pc.setWidthAvailable(this.__oM.getLayoutProperties().left);
    this.__oV.setLayoutProperties({
        top: this.__oQ.getHeight(),
        left: Math.floor((r - this.__oV.getWidth()) / 2)
    });
    this.__oY.setWidth(i);
    this.__oY.setLayoutProperties({
        left: Math.floor((r - Math.max(i, this.__oY.getMinWidth())) / 2),
        bottom: 0
    });
    this.__pj != null && (p = Math.floor((r - i) / 2) + Math.floor((i - webfrontend.gui.MenuOverlayWidget.OverlayWidth) / 2), w = this.__oQ.getHeight(), this.__pj.setLayoutProperties({
        left: p,
        top: w,
        bottom: webfrontend.Application.legacySocHeight + webfrontend.gui.notifications.Ticker.TickerHeight
    }));
    this.getTutorialWidget().onDesktopResize(n);
    this.getInfoTrackerWidget().onDesktopResize(n);
    this.getChat().onDesktopResize(n);
    this.__qf()
}

function _onCommandError(n, t) {
    n == df && (t & ClientLib.Data.EMoveBlocker.NPCUnderAttack) != 0 ? webfrontend.gui.MessageBox.messageBox({
        title: this.tr(er),
        text: this.tr(le),
        width: 400,
        textRich: !0,
        buttons: 1
    }) : this.__oV.showMessage(au, ie + n + wi + qx.lang.Json.stringify(t))
}

function _onRequestSideBarNotifications() {
    ClientLib.Data.MainData.GetInstance().get_Notifications().ReRequestSideBarNotifications();
    webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_EndGame(), h, ClientLib.Data.Change, this, this._onRequestSideBarNotifications)
}

function _onCombatReport() {
    var r = this.getPlayArea(),
        t, n, i;
    if (r.isActive()) {
        t = ClientLib.Data.MainData.GetInstance().get_Combat();
        n = t.GetReport();
        switch (r.getViewMode()) {
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker:
                n.m_DefenderFaction != ClientLib.Base.EFactionType.GDIFaction && n.m_DefenderFaction != ClientLib.Base.EFactionType.NODFaction && n.m_DefenderConYardPercent <= 0 && (i = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(), i != null && i.get_CityArmyFormationsManager().set_CurrentTargetBaseId(-1));
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender:
                if (ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter().get_CombatId() == t.DefenderBaseId && t.get_CombatResult() == ClientLib.Data.Reports.ECombatResult.CityDestroyed) break;
                webfrontend.gui.reports.CombatVictoryPopup.shouldShow() && (webfrontend.gui.reports.CombatVictoryPopup.getInstance().setLiveCombatData(n), webfrontend.gui.reports.CombatVictoryPopup.getInstance().show())
        }
    }
}

function showSystemMessageError(n, t) {
    this.__oV.showMessage(n, t)
}

function showExternal(n) {
    window.open(n)
}

function switchBottomOverlay(n, t) {
    this.__pk && (this.__pk.activateOverlay(!1, t), this.__pQ.remove(this.__pk), this.__oK.focus());
    this.__pk = n;
    this.__pk ? (this.__pQ.setWidth(this.__po), this.__pQ.setHeight(this.__pn), this.__pQ.setLayoutProperties(this.__pl), this.__pQ.add(this.__pk, {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
    }), this.__pk.activateOverlay(!0, t), this.__oW.setLayoutProperties({
        bottom: webfrontend.Application.legacySocHeight
    }), this.__pQ.show()) : (this.__oW.setLayoutProperties({
        bottom: 0
    }), this.__pQ.exclude());
    this.fireEvent(ge)
}

function getCurrentBottomOverlay() {
    return this.__pk
}

function getBottomOverlayPosition() {
    return this.__pl
}

function showBottomOverlayLockdownImg(n) {
    var t = this.__pp.isVisible();
    !n && t ? (this.__oK.remove(this.__pp), this.__oK.focus(), this.__pp.exclude()) : n && !t && (this.__oK.add(this.__pp, this.__pm), this.__pp.show())
}

function switchMenuOverlay(n) {
    var t = this.__pj ? this.__pj.getIsUnsavedMessage() : null;
    t && t.title && t.text ? (t.textRich = !0, t.executeOk = function() {
        this.__pj.undoSaveClose();
        this.__pj._deactivate();
        this.__qj(n)
    }, t.executeCancel = function() {
        n && n != this.__pj && n._deactivate();
        this.__pj._activate()
    }, t.callbackContext = this, webfrontend.gui.MessageBox.messageBox(t)) : this.__qj(n)
}

function getOverlayByType(n) {
    switch (n) {
        case ClientLib.Data.Missions.GameOverlay.Reports:
            return webfrontend.gui.reports.ReportsOverlay.getInstance();
        case ClientLib.Data.Missions.GameOverlay.Messages:
            return webfrontend.gui.mail.MailOverlay.getInstance();
        case ClientLib.Data.Missions.GameOverlay.Alliance:
            return webfrontend.gui.alliance.AllianceOverlay.getInstance();
        case ClientLib.Data.Missions.GameOverlay.Overviews:
            return null;
        case ClientLib.Data.Missions.GameOverlay.Forum:
            return webfrontend.gui.forum.ForumOverlay.getInstance();
        case ClientLib.Data.Missions.GameOverlay.Research:
            return webfrontend.gui.research.ResearchOverlay.getInstance();
        case ClientLib.Data.Missions.GameOverlay.Inventory:
            return webfrontend.gui.monetization.ShopOverlay.getInstance();
        case ClientLib.Data.Missions.GameOverlay.Rankings:
            return webfrontend.gui.ranking.RankingOverlay.getInstance()
    }
    return null
}

function isCurrentOverlay(n) {
    return this.__pj == this.getOverlayByType(n)
}

function set_CurrentOverlay(n) {
    this.switchMenuOverlay(this.getOverlayByType(n))
}

function showArmySetupAttack(n) {
    this.__oY.activate(n)
}

function getArmySetupAttackBar() {
    return this.__oY
}

function getCurrentMenuOverlay() {
    return this.__pj
}

function getUnitRecruitmentOverlay() {
    return this.__pt
}

function getTechPlacementOverlay() {
    return this.__ps
}

function getReportReplayOverlay() {
    return this.__pv
}

function getProductionDetailViewPopup() {
    return this.__pq
}

function getArmyUnitTooltipOverlay() {
    return this.__pa
}

function getMainOverlay() {
    return this.__oM
}

function getMaintenenceWindow() {
    return this.__pE
}

function getPlayArea() {
    return this.__oM != null ? this.__oM.playArea : null
}

function getBackgroundArea() {
    return this.__oL
}

function getLeftBarsButton() {
    return this.__pG
}

function getRightBarsButton() {
    return this.__pH
}

function getMenuBar() {
    return this.__oQ
}

function getEventBar() {
    return this.__oR
}

function getBaseNavigationBar() {
    return this.__pe
}

function getBarSimResult() {
    return this.__pf
}

function getWndSimResult() {
    return this.__pg
}

function getGlobalBaseTimerBar() {
    return this.__ph
}

function getPlayerBar() {
    return this.__oS
}

function getNavigationBar() {
    return this.__pS
}

function getAppointmentsBar() {
    return this.__pY
}

function getMessagingTicker() {
    return this.__oW
}

function getServerBar() {
    return this.__oO
}

function getOptionsBar() {
    return this.__oP
}

function getMissionsBar() {
    return this.__oT || (this.__oT = new webfrontend.gui.missions.MissionsBar), this.__oT
}

function getNotificationBar() {
    return this.__oU
}

function getMessageDialogBox() {
    return this.__qa == null && (this.__qa = new webfrontend.gui.MessageDialogBox), this.__qa
}

function shouldUseGiftOverlay() {
    return this.__pu
}

function onHotKeyDown(n) {
    if (this.allowHotKey && !webfrontend.phe.cnc.Util.isEventTargetInputField(n)) {
        this.getBackgroundArea().onHotKeyDown(n);
        this.getPlayArea().onHotKeyDown(n);
        ClientLib.Vis.VisMain.GetInstance().KeyDown(n.getKeyIdentifier())
    }
    qx.core.Environment.get(i) !== w || n.getKeyIdentifier() != d || webfrontend.phe.cnc.Util.isEventTargetInputField(n) || n.stop()
}

function onHotKeyUp(n) {
    if (this.allowHotKey && !webfrontend.phe.cnc.Util.isEventTargetInputField(n)) {
        ClientLib.Net.CommunicationManager.GetInstance().UserAction();
        this.getBackgroundArea().onHotKeyUp(n);
        this.getPlayArea().onHotKeyUp(n);
        ClientLib.Vis.VisMain.GetInstance().KeyUp(n.getKeyIdentifier())
    }
    qx.core.Environment.get(i) !== w || n.getKeyIdentifier() != d || webfrontend.phe.cnc.Util.isEventTargetInputField(n) || n.stop()
}

function onHotKeyPress(n) {
    if (this.allowHotKey && !webfrontend.phe.cnc.Util.isEventTargetInputField(n)) {
        ClientLib.Net.CommunicationManager.GetInstance().UserAction();
        this.getBackgroundArea().onHotKeyPress(n);
        this.getPlayArea().onHotKeyPress(n);
        switch (n.getKeyIdentifier()) {
            case webfrontend.gui.ShortkeyMapper.keys.toggleChat:
                this.toggleChat(!0);
                this.getChat().getChatWidget().focusInput();
                qx.core.Environment.get(i) === rt && n.stop();
                break;
            case webfrontend.gui.ShortkeyMapper.keys.chatReply:
                this.toggleChat(!0);
                var t = this.getChat().getChatWidget();
                t.setTab(webfrontend.gui.chat.ChatWidget.channel.all);
                t.getEditable().setValue(eu);
                t.setCursorEnd();
                t.focusInput();
                qx.core.Environment.get(i) === rt && n.stop();
                break;
            default:
                this.getChat().GetFocusStatus() == !0 && (this.toggleChat(!0), this.getChat().getChatWidget().focusInput(), qx.core.Environment.get(i) === rt && n.stop())
        }
    }
    qx.core.Environment.get(i) !== w || n.getKeyIdentifier() !== d || webfrontend.phe.cnc.Util.isEventTargetInputField(n) || n.stop()
}

function doReloadApplication() {
    window.location.reload()
}

function enableTextAreaMouseWheel(n) {
    n.addListener(hf, function(n) {
        n.stopPropagation()
    })
}

function onGlobalMouseMove(n) {
    (Math.abs(n.getScreenLeft() - this.__oH) >= 5 || Math.abs(n.getScreenTop() - this.__oI) >= 5) && (ClientLib.Net.CommunicationManager.GetInstance().UserAction(), this.__oH = n.getScreenLeft(), this.__oI = n.getScreenTop())
}

function _onNewGift(n) {
    webfrontend.gui.SocialNetworkHelper.showGift(n)
}

function _onVersionMsg(n, t) {
    var r, i;
    if (typeof PerforceChangelistNew == v && PerforceChangelistNew != 0)
        for (r = 0; r < t.l.length; r++) {
            if (i = t.l[r], i == null) return;
            if (i.v != 0) {
                if (PerforceChangelistNew == i.v) return;
                PerforceChangelistNew = 0;
                window.alert(this.tr(g));
                this.reauthenticatePlayer();
                return
            }
            if (this.__pD == null) this.__pD = i.t;
            else if (this.__pD != i.t) {
                PerforceChangelistNew = 0;
                window.alert(this.tr(ku));
                this.reauthenticatePlayer();
                return
            }
        }
}

function _onSysMsg(n, t) {
    if (t != null && t.l != null)
        for (var i = 0; i < t.l.length; i++) this._executeSysMsg(t.l[i])
}

function _executeSysMsg(n) {
    var t, i;
    if (n == wf) {
        window.alert(this.tr(g));
        this.reauthenticatePlayer();
        return
    }
    if (this.__pi != null && this.__pi.getMessage() != n && this.__pi.isActive() && (this.__pi.disable(), this.__oK.remove(this.__pi), this.__oK.focus()), n == fr) {
        if (this.__pi == null || !this.__pi.isActive()) return;
        this.__pi.disable();
        this.__pi.setMessage(n);
        this.__oK.remove(this.__pi);
        this.__oK.focus();
        return
    }
    if (t = n.split(pi), t.length > 0) {
        if (t[0] == tt || t[0] == st || t[0] == ii || t[0] == ui) {
            i = 0;
            switch (t[0]) {
                case tt:
                    i = 1;
                    break;
                case st:
                    i = 2;
                    break;
                case ii:
                    i = 3;
                    break;
                case ui:
                    i = 4
            }
            if (this.__pi == null && (this.__pi = new webfrontend.gui.SystemMessageWidget), this.__pi.setMessage(n), this.__pi.isActive()) return;
            this.__pi.showOffline(i);
            this.__oK.add(this.__pi, {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            });
            return
        }
        if (t[0] == ri || t[0] == br) {
            if (this.__pi == null && (this.__pi = new webfrontend.gui.SystemMessageWidget), this.__pi.isActive()) return;
            this.__pi.setMessage(n);
            this.__pi.showLogout();
            this.__oK.add(this.__pi, {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            });
            return
        }
        if (t[0] == gt) {
            if (this.__pi == null && (this.__pi = new webfrontend.gui.SystemMessageWidget), this.__pi.isActive()) return;
            this.__pi.setMessage(n);
            this.__pi.showNoBeta();
            this.__oK.add(this.__pi, {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            });
            return
        }
    }
}

function showOptionsPage(n) {
    this.__px == null && (this.__px = new webfrontend.gui.options.OptionsWidget);
    n = n || this.__oM.playArea.getActivePopup() == this.__px;
    this.__oM.playArea.setActivePopup(n ? null : this.__px)
}

function showSubstitutionOptionsPage(n) {
    this.__px == null && (this.__px = new webfrontend.gui.options.OptionsWidget);
    this.__px.setSelectedTab(webfrontend.gui.options.OptionsWidget.SubstitutionPage);
    n = n || this.__oM.playArea.getActivePopup() == this.__px;
    this.__oM.playArea.setActivePopup(n ? null : this.__px)
}

function prepareForTutorialScript() {
    this.__oM.playArea.setActivePopup(null);
    this.switchMenuOverlay(null);
    webfrontend.gui.reports.CombatVictoryPopup.getInstance().exclude()
}

function unprepareForTutorialScript() {}

function showTutorialWidget() {
    this.__oM.playArea.setActivePopup(null);
    this.getTutorialWidget().show();
    var n = webfrontend.gui.widgets.popup.PopupChain.getInstance().getCurrentPopup();
    n && qx.core.Init.getApplication().getRoot().getWindowManager().bringToFront(n)
}

function getTutorialWidget() {
    return this.__py == null && (this.__py = new webfrontend.gui.missions.TutorialOverlay(webfrontend.gui.missions.TutorialOverlay.eMode.tutorial)), this.__py
}

function showSesonsServerTerms() {
    (new webfrontend.gui.notifications.SeasonServerTerms).show()
}

function getServerMessageChoiceWidget() {
    return this.__pz == null && (this.__pz = new webfrontend.gui.info.ServerMessageChoiceWindow), this.__pz
}

function showServerMessageChoiceWidget(n) {
    var i = this.getServerMessageChoiceWidget(),
        t;
    this.__oM.playArea.setActivePopup(null);
    i.populateData(n);
    i.show();
    t = webfrontend.gui.widgets.popup.PopupChain.getInstance().getCurrentPopup();
    t && qx.core.Init.getApplication().getRoot().getWindowManager().bringToFront(t)
}

function showInfoTrackerWidget() {
    this.__oM.playArea.setActivePopup(null);
    this.getInfoTrackerWidget().show();
    var n = webfrontend.gui.widgets.popup.PopupChain.getInstance().getCurrentPopup();
    n && qx.core.Init.getApplication().getRoot().getWindowManager().bringToFront(n)
}

function getInfoTrackerWidget() {
    return this.__pA == null && (this.__pA = new webfrontend.gui.missions.TutorialOverlay(webfrontend.gui.missions.TutorialOverlay.eMode.infotracker)), this.__pA
}

function showEndSubstitutionWidget(n) {
    n = n || !1;
    this.__pF = new webfrontend.gui.EndSubstitutionWidget(n)
}

function getSeasonLegacyModifier() {
    var n = 1,
        t = ClientLib.Res.ResMain.GetInstance().GetGamedata();
    for (var i in t.SeasonLegacyTier) i <= ClientLib.Data.MainData.GetInstance().get_Player().get_LegacyPoints() && (n = 1 - t.SeasonLegacyTier[i] * .01);
    return n
}

function handleError(n) {
    var t, i, u, r;
    if (this.__oF != null) {
        t = e;
        try {
            if (t += n.toString(), i = n.getSourceException(), i) {
                t += it;
                for (u in i) t += u, t += pf, t += i[u].toString(), t += it
            }
        } catch (f) {}
        if (ScriptErrorHandler == ot ? (qx.log.Logger.error(this, t), r = confirm(this.__oF + it + t)) : r = confirm(this.__oF), r) try {
            t = qx.lang.Json.stringify(t);
            webfrontend.phe.cnc.Util.sendPost(lu, cf, so + t + we, this, function() {}, function() {})
        } catch (f) {}(ScriptErrorHandler != ot || r) && (qx.event.GlobalError.setErrorHandler(null, null), this.redirectBrowser(this.__pR))
    }
}

function redirectBrowser(n) {
    window.location.href = n
}

function reauthenticatePlayer() {
    var n = qx.bom.Cookie.get(l);
    if (n != null) {
        if (n = parseInt(n), n > this.__qc) {
            this.redirectBrowser(ti);
            return
        }
        qx.bom.Cookie.del(at);
        qx.bom.Cookie.del(dt)
    } else n = 1;
    n++;
    qx.bom.Cookie.set(l, n, null, p, window.location.hostname, !0);
    this.redirectBrowser(SSOLoginUrl)
}

function toggleChat(n) {
    var t = n == undefined ? !this.__pc.isVisible() : !!n;
    t ? (this.__pc.isVisible() || (this.__pc.show(), this.__pc.focusLine()), this.__pb.setState(webfrontend.gui.chat.ChatButtonWidget.state.hidden)) : (this.__pc.isVisible() && this.__pc.close(), this.__pb.setState(webfrontend.gui.chat.ChatButtonWidget.state.full))
}

function toggleArsenalWindowVisibility() {
    var n = webfrontend.gui.arsenal.ArsenalMainWindow.getInstance();
    n.isVisible() ? n.close() : n.open()
}

function getRightBar() {
    return this.__pL
}

function getLeftBar() {
    return this.__pK
}

function showLeftBars(n) {
    typeof n !== oi ? this.__pI = n : (n = !this.__pI, this.__pI = n);
    this.__pI ? this.__pG.setDirection(webfrontend.gui.widgets.ShowMenuButton.left, this.__pK, !0) : this.__pG.setDirection(webfrontend.gui.widgets.ShowMenuButton.right, this.__pK, !1);
    n ? this.__pc.isVisible() || this.__pb.setState(webfrontend.gui.chat.ChatButtonWidget.state.full) : this.__pb.setState(webfrontend.gui.chat.ChatButtonWidget.state.hidden)
}

function showRightBars(n) {
    this.__pJ = typeof n !== oi ? n : !this.__pJ;
    this.__pJ ? this.__pH.setDirection(webfrontend.gui.widgets.ShowMenuButton.right, this.__pL, !0) : this.__pH.setDirection(webfrontend.gui.widgets.ShowMenuButton.left, this.__pL, !1)
}

function _onMainOverlayAppearFake() {
    this.triggerDesktopResize()
}

function showMainOverlay(n) {
    this.__oM.setVisibility(n ? k : ni);
    n ? this.__pT.schedule() : this.triggerDesktopResize();
    this.__oL.setActive(!n);
    this.__oM.playArea.setActive(n);
    n == !1 && this.__oM.playArea.setView(ClientLib.Data.PlayerAreaViewMode.pavmNone, -1, 0, 0)
}

function showReportAbuseWindow(n, t, i, r, u) {
    this.__pw == null && (this.__pw = new webfrontend.gui.ReportAbuseWindow);
    this.__pw.setup(n, t, i, r, u);
    this.__pw.show()
}

function getUIBounds() {
    var n = 0,
        t = 0;
    this.getDesktop().getBounds() != null && (n = this.getDesktop().getBounds().width, t = this.getDesktop().getBounds().height);
    var i = t - this.getMessagingTicker().getBounds().height,
        r = this.getMenuBar().getBounds().top + this.getMenuBar().getBounds().height,
        u = this.getNotificationBar().getVisibility() == k ? this.getNotificationBar().getBounds().width : 0,
        f = n - (this.getServerBar().getVisibility() == k ? this.getServerBar().getBounds().width : 0);
    return {
        top: r,
        left: u,
        bottom: i,
        right: f
    }
}

function addOffset(n) {
    var i, r, t;
    return n ? (i = this.__oK.getContentElement() ? this.__oK.getContentElement().getDomElement() : null, r = this.getPlayArea().getLayoutParent().getContentElement() ? this.getPlayArea().getLayoutParent().getContentElement().getDomElement() : null, i && r && (t = qx.bom.element.Location.getRelative(r, i), n.top += t.top, n.bottom += t.top, n.left += t.left, n.right += t.left), n) : n
}

function getAllianceMarkerNavs() {
    return this.__pP || (this.__pP = new webfrontend.gui.alliance.AllianceMarkerNavs), this.__pP
}

function getBoundsArrayOfObstructingUI() {
    var u = [],
        n = this.getChat(),
        f, r, t, i;
    if (n && n.isVisible() && n.getDocked() && n.getActive() && n.getBounds() && u.push(n.getBounds()), n = null, n = this.getLeftBar(), n && n.isVisible() && n.getActive() && n.getBounds())
        for (f = n.getBounds(), r = 0; r < n.getChildren().length; ++r) t = n.getChildren()[r], t && t.isVisible() && (!t.getActive || t.getActive()) && t.getBounds() && (i = t.getBounds(), u.push({
            top: f.top + i.top,
            left: f.left + i.left,
            width: i.width,
            height: i.height
        }));
    if (n = null, n = this.getRightBar(), n && n.isVisible() && n.getActive() && n.getBounds())
        for (f = n.getBounds(), r = 0; r < n.getChildren().length; ++r) t = n.getChildren()[r], t && t.isVisible() && (!t.getActive || t.getActive()) && t.getBounds() && (i = t.getBounds(), u.push({
            top: f.top + i.top,
            left: f.left + i.left,
            width: i.width,
            height: i.height
        }));
    return n = null, n = this.getMessagingTicker(), n && n.isVisible() && n.getBounds() && u.push(n.getBounds()), n = null, n = this.getMenuBar(), n && n.isVisible() && n.getBounds() && u.push(n.getBounds()), n = null, n = this.getEventBar(), n && n.isVisible() && n.getBounds() && u.push(n.getBounds()), n = null, u
}

function getUIItem(n, t, i) {
    var u, f, e, r;
    switch (n) {
        case ClientLib.Data.Missions.PATH.MGR_APPLICATION:
            return this;
        case ClientLib.Data.Missions.PATH.BAR_MENU:
            return this.getMenuBar();
        case ClientLib.Data.Missions.PATH.BAR_NAVIGATION:
            return this.getBaseNavigationBar();
        case ClientLib.Data.Missions.PATH.BAR_HUD:
            return this.getPlayArea().getUIItem(n);
        case ClientLib.Data.Missions.PATH.BAR_BUILDING:
            return this.getTechPlacementOverlay();
        case ClientLib.Data.Missions.PATH.BAR_RECRUITING:
            return this.getUnitRecruitmentOverlay();
        case ClientLib.Data.Missions.PATH.BAR_ATTACKSETUP:
            return i ? this.__oY : this.__oY.getMainContainer();
        case ClientLib.Data.Missions.PATH.OVL_MAIN:
            return this.getMainOverlay();
        case ClientLib.Data.Missions.PATH.OVL_TUTORIAL:
            return this.getTutorialWidget();
        case ClientLib.Data.Missions.PATH.OVL_INFOTRACKER:
            return this.getInfoTrackerWidget();
        case ClientLib.Data.Missions.PATH.OVL_MISSIONS:
            return null;
        case ClientLib.Data.Missions.PATH.OVL_RESEARCH:
            return webfrontend.gui.research.ResearchOverlay.getInstance();
        case ClientLib.Data.Missions.PATH.OVL_SHOP:
            return webfrontend.gui.monetization.ShopOverlay.getInstance();
        case ClientLib.Data.Missions.PATH.OVL_MISSIONTRACKER:
            return this.getMissionsBar();
        case ClientLib.Data.Missions.PATH.OVL_REPORTS:
            return webfrontend.gui.reports.ReportsOverlay.getInstance();
        case ClientLib.Data.Missions.PATH.BAR_NOTIFICATIONS:
            return this.getNotificationBar();
        case ClientLib.Data.Missions.PATH.BAR_TICKER:
            return this.getMessagingTicker();
        case ClientLib.Data.Missions.PATH.OVL_ALLIANCE:
            return webfrontend.gui.alliance.AllianceOverlay.getInstance();
        case ClientLib.Data.Missions.PATH.BAR_PLAYER:
            return this.__oS;
        case ClientLib.Data.Missions.PATH.OVL_PLAYAREA:
            return this.getPlayArea();
        case ClientLib.Data.Missions.PATH.OVL_REGION:
            return this.getRegionArea();
        case ClientLib.Data.Missions.PATH.BAR_APPOINTMENTS:
            return this.getAppointmentsBar();
        case ClientLib.Data.Missions.PATH.VIS_CONSTRUCTIONYARD:
            if (u = ClientLib.Vis.VisMain.GetInstance().GetActiveView().GetAllBuildingsFromType ? ClientLib.Vis.VisMain.GetInstance().GetActiveView().GetAllBuildingsFromType(ClientLib.Base.ETechName.Construction_Yard, ClientLib.Base.EResourceType.None) : null, u != null) return this.addOffset(u.l[0]);
            break;
        case ClientLib.Data.Missions.PATH.VIS_SILO:
            if (f = ClientLib.Vis.VisMain.GetInstance().GetActiveView().GetAllBuildingsFromType ? ClientLib.Vis.VisMain.GetInstance().GetActiveView().GetAllBuildingsFromType(ClientLib.Base.ETechName.Silo, ClientLib.Base.EResourceType.None) : null, f != null) return this.addOffset(f.l[0]);
            break;
        case ClientLib.Data.Missions.PATH.VIS_HARVESTER_CRYSTAL:
            if (e = ClientLib.Vis.VisMain.GetInstance().GetActiveView().GetAllBuildingsFromType ? ClientLib.Vis.VisMain.GetInstance().GetActiveView().GetAllBuildingsFromType(ClientLib.Base.ETechName.Harvester, ClientLib.Base.EResourceType.Crystal) : null, e != null) return this.addOffset(e.l[0]);
            break;
        case ClientLib.Data.Missions.PATH.VIS_CURRENTCITY:
            if (r = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(), r) return webfrontend.gui.UtilView.centerCityOnRegionViewWindow(r.get_Id()), ClientLib.Vis.VisMain.GetInstance().get_Region().GetRectCity(r);
            break;
        case ClientLib.Data.Missions.PATH.VIS_CURRENTGHOSTEDCITY:
            if (r = ClientLib.Data.MainData.GetInstance().get_Cities().GetGhostedCity(), r) return webfrontend.gui.UtilView.centerCityOnRegionViewWindow(r.get_Id()), ClientLib.Vis.VisMain.GetInstance().get_Region().GetRectCity(r);
            break;
        case ClientLib.Data.Missions.PATH.VIS_CURRENTDAMAGEDCITY:
            if (r = ClientLib.Data.MainData.GetInstance().get_Cities().GetDamagedCity(), r) return webfrontend.gui.UtilView.centerCityOnRegionViewWindow(r.get_Id()), ClientLib.Vis.VisMain.GetInstance().get_Region().GetRectCity(r);
            break;
        case ClientLib.Data.Missions.PATH.VIS_MAIN:
            return ClientLib.Vis.VisMain.GetInstance();
        case ClientLib.Data.Missions.PATH.OVL_VICTORYSCREEN:
            return webfrontend.gui.reports.CombatVictoryPopup.getInstance();
        case ClientLib.Data.Missions.PATH.CTR_ALLIANCEEVENTS:
            return webfrontend.data.AllianceEvents.getInstance()
    }
    return null
}

function registerConsoleCommand(n, t) {
    for (var r = n.split(hu), u = window, i = 0; i < r.length; i++) i < r.length - 1 ? u = u.hasOwnProperty(r[i]) ? u[r[i]] : u[r[i]] = {} : u[r[i]] = t;
    return !0
}

function isDebug() {
    return !1
}

function ResourceManager_toUri(n) {
    if (n == null) return null;
    if (n.indexOf(ut) == 0) {
        var i = n.substr(12),
            t = ClientLib.File.FileManager.GetInstance().GetPhysicalPath(i);
        if (t) return t
    }
    return webfrontend.Application.__oD.call(this, n)
}

function LoadNotReferencedFiles() {
    webfrontend.phe.cnc.ClientLibTNF.translate(he)
}

function requestAccountInfo() {
    this.getSessionid() ? webfrontend.phe.cnc.Util.sendPost(rf, re, ho + this.getSessionid() + gr, this, function(n) {
        this.setAccountInfo(n)
    }, function() {}) : this.setAccountInfo(null)
}

function switchServer(n) {
    if (n && n.Online && this.getAccountInfo()) {
        var t = n.SSOUrl.replace(a, document.location.protocol);
        window.location.href = t
    }
}
overlayPositions overlaySizes mentorPositions