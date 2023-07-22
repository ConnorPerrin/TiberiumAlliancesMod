function getActivePopup anonymous(value) {
    if (this.$$runtime_ActivePopup !== undefined) return this.$$runtime_ActivePopup;
    if (this.$$user_ActivePopup !== undefined) return this.$$user_ActivePopup;
    else return this.$$init_ActivePopup;
}

function setActivePopup anonymous(value) {
    this.$$setActivePopupImpl.apply(this, arguments);
    return value;
}

function resetActivePopup anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var old;
    if (this.$$runtime_ActivePopup !== undefined) {
        old = this.$$runtime_ActivePopup;
    } else if (this.$$user_ActivePopup !== undefined) {
        old = this.$$user_ActivePopup;
    } else if (this.$$useinit_ActivePopup) {
        old = this.$$init_ActivePopup;
    }
    if (this.$$user_ActivePopup === undefined) return;
    var computed;
    if (this.$$runtime_ActivePopup !== undefined) {
        computed = this.$$runtime_ActivePopup;
        delete this.$$user_ActivePopup;
    } else if (this.$$user_ActivePopup !== undefined) {
        delete this.$$user_ActivePopup;
        if (this.$$runtime_ActivePopup !== undefined) computed = this.$$runtime_ActivePopup;
        if (this.$$theme_ActivePopup !== undefined) computed = this.$$theme_ActivePopup;
        else if (this.$$init_ActivePopup !== undefined) {
            computed = this.$$init_ActivePopup;
            this.$$useinit_ActivePopup = true;
        }
    } else if (this.$$useinit_ActivePopup) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_ActivePopup;
    var self = this;
    var promise;
    promise = this.__bjy(computed, old, "ActivePopup", "reset");

    function fire() {
        var tracker = {};
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}

function initActivePopup anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var old;
    if (this.$$runtime_ActivePopup !== undefined) {
        old = this.$$runtime_ActivePopup;
    } else if (this.$$user_ActivePopup !== undefined) {
        old = this.$$user_ActivePopup;
    } else if (this.$$useinit_ActivePopup) {
        old = this.$$init_ActivePopup;
    }
    var computed;
    if (this.$$runtime_ActivePopup !== undefined) {
        computed = this.$$runtime_ActivePopup;
    } else if (this.$$user_ActivePopup !== undefined) {
        computed = this.$$user_ActivePopup;
    } else if (this.$$useinit_ActivePopup) {
        computed = this.$$init_ActivePopup;
    } else {
        computed = this.$$init_ActivePopup;
        this.$$useinit_ActivePopup = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this.__bjy(computed, old, "ActivePopup", "init");

    function fire() {
        var tracker = {};
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}

function setRuntimeActivePopup anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var old;
        if (this.$$runtime_ActivePopup !== undefined) {
            old = this.$$runtime_ActivePopup;
        } else if (this.$$user_ActivePopup !== undefined) {
            old = this.$$user_ActivePopup;
        } else if (this.$$useinit_ActivePopup) {
            old = this.$$init_ActivePopup;
        }
        if (equ.call(this, this.$$runtime_ActivePopup, value)) return value;
        var computed;
        if (this.$$runtime_ActivePopup !== undefined) {
            computed = this.$$runtime_ActivePopup = value;
        } else if (this.$$user_ActivePopup !== undefined) {
            computed = this.$$runtime_ActivePopup = value;
        } else if (this.$$useinit_ActivePopup) {
            delete this.$$useinit_ActivePopup;
            computed = this.$$runtime_ActivePopup = value;
        } else {
            computed = this.$$runtime_ActivePopup = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_ActivePopup;
        var self = this;
        var promise;
        promise = this.__bjy(computed, old, "ActivePopup", "setRuntime");

        function fire() {
            var tracker = {};
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

function resetRuntimeActivePopup anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var old;
    if (this.$$runtime_ActivePopup !== undefined) {
        old = this.$$runtime_ActivePopup;
    } else if (this.$$user_ActivePopup !== undefined) {
        old = this.$$user_ActivePopup;
    } else if (this.$$useinit_ActivePopup) {
        old = this.$$init_ActivePopup;
    }
    if (this.$$runtime_ActivePopup === undefined) return;
    var computed;
    if (this.$$runtime_ActivePopup !== undefined) {
        delete this.$$runtime_ActivePopup;
        if (this.$$user_ActivePopup !== undefined) computed = this.$$user_ActivePopup;
        else if (this.$$theme_ActivePopup !== undefined) computed = this.$$theme_ActivePopup;
        else if (this.$$init_ActivePopup !== undefined) {
            computed = this.$$init_ActivePopup;
            this.$$useinit_ActivePopup = true;
        }
    } else if (this.$$user_ActivePopup !== undefined) {
        computed = this.$$user_ActivePopup;
    } else if (this.$$useinit_ActivePopup) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_ActivePopup;
    var self = this;
    var promise;
    promise = this.__bjy(computed, old, "ActivePopup", "resetRuntime");

    function fire() {
        var tracker = {};
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}

function getActivePopupClosedBy anonymous(value) {
    if (this.$$runtime_ActivePopupClosedBy !== undefined) return this.$$runtime_ActivePopupClosedBy;
    if (this.$$user_ActivePopupClosedBy !== undefined) return this.$$user_ActivePopupClosedBy;
    else return this.$$init_ActivePopupClosedBy;
}

function setActivePopupClosedBy anonymous(value) {
    this.$$setActivePopupClosedByImpl.apply(this, arguments);
    return value;
}

function resetActivePopupClosedBy anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_ActivePopupClosedBy !== undefined) delete this.$$user_ActivePopupClosedBy;
}

function setRuntimeActivePopupClosedBy anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_ActivePopupClosedBy !== undefined) {
            old = this.$$runtime_ActivePopupClosedBy;
        } else if (this.$$user_ActivePopupClosedBy !== undefined) {
            old = this.$$user_ActivePopupClosedBy;
        } else if (this.$$useinit_ActivePopupClosedBy) {
            old = this.$$init_ActivePopupClosedBy;
        }
        this.$$runtime_ActivePopupClosedBy = value;
    }
    var promise;
    if (value instanceof qx.Promise || value instanceof Promise) promise = value.then(set.bind(this));
    else promise = set.apply(this, arguments);
    return value;
}

function resetRuntimeActivePopupClosedBy anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$runtime_ActivePopupClosedBy !== undefined) delete this.$$runtime_ActivePopupClosedBy;
}

function getSavedLastViewMode anonymous(value) {
    if (this.$$runtime_SavedLastViewMode !== undefined) return this.$$runtime_SavedLastViewMode;
    if (this.$$user_SavedLastViewMode !== undefined) return this.$$user_SavedLastViewMode;
    else return this.$$init_SavedLastViewMode;
}

function setSavedLastViewMode anonymous(value) {
    this.$$setSavedLastViewModeImpl.apply(this, arguments);
    return value;
}

function resetSavedLastViewMode anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_SavedLastViewMode !== undefined) {
        old = this.$$runtime_SavedLastViewMode;
    } else if (this.$$user_SavedLastViewMode !== undefined) {
        old = this.$$user_SavedLastViewMode;
    } else if (this.$$useinit_SavedLastViewMode) {
        old = this.$$init_SavedLastViewMode;
    }
    if (this.$$user_SavedLastViewMode === undefined) return;
    var computed;
    if (this.$$runtime_SavedLastViewMode !== undefined) {
        computed = this.$$runtime_SavedLastViewMode;
        delete this.$$user_SavedLastViewMode;
    } else if (this.$$user_SavedLastViewMode !== undefined) {
        delete this.$$user_SavedLastViewMode;
        if (this.$$runtime_SavedLastViewMode !== undefined) computed = this.$$runtime_SavedLastViewMode;
        if (this.$$theme_SavedLastViewMode !== undefined) computed = this.$$theme_SavedLastViewMode;
        else if (this.$$init_SavedLastViewMode !== undefined) {
            computed = this.$$init_SavedLastViewMode;
            this.$$useinit_SavedLastViewMode = true;
        }
    } else if (this.$$useinit_SavedLastViewMode) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_SavedLastViewMode;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'SavedLastViewMode')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'SavedLastViewMode', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'SavedLastViewModeAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'SavedLastViewModeAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function initSavedLastViewMode anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_SavedLastViewMode !== undefined) {
        old = this.$$runtime_SavedLastViewMode;
    } else if (this.$$user_SavedLastViewMode !== undefined) {
        old = this.$$user_SavedLastViewMode;
    } else if (this.$$useinit_SavedLastViewMode) {
        old = this.$$init_SavedLastViewMode;
    }
    var computed;
    if (this.$$runtime_SavedLastViewMode !== undefined) {
        computed = this.$$runtime_SavedLastViewMode;
    } else if (this.$$user_SavedLastViewMode !== undefined) {
        computed = this.$$user_SavedLastViewMode;
    } else if (this.$$useinit_SavedLastViewMode) {
        computed = this.$$init_SavedLastViewMode;
    } else {
        computed = this.$$init_SavedLastViewMode;
        this.$$useinit_SavedLastViewMode = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'SavedLastViewMode')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'SavedLastViewMode', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'SavedLastViewModeAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'SavedLastViewModeAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function setRuntimeSavedLastViewMode anonymous(value) {
    function set(value) {
        var equ = function(a, b) {
            return a === b;
        };
        var prop = qx.core.Property;
        var old;
        if (this.$$runtime_SavedLastViewMode !== undefined) {
            old = this.$$runtime_SavedLastViewMode;
        } else if (this.$$user_SavedLastViewMode !== undefined) {
            old = this.$$user_SavedLastViewMode;
        } else if (this.$$useinit_SavedLastViewMode) {
            old = this.$$init_SavedLastViewMode;
        }
        if (equ.call(this, this.$$runtime_SavedLastViewMode, value)) return value;
        var computed;
        if (this.$$runtime_SavedLastViewMode !== undefined) {
            computed = this.$$runtime_SavedLastViewMode = value;
        } else if (this.$$user_SavedLastViewMode !== undefined) {
            computed = this.$$runtime_SavedLastViewMode = value;
        } else if (this.$$useinit_SavedLastViewMode) {
            delete this.$$useinit_SavedLastViewMode;
            computed = this.$$runtime_SavedLastViewMode = value;
        } else {
            computed = this.$$runtime_SavedLastViewMode = value;
        }
        if (equ.call(this, old, computed)) return value;
        if (old === undefined) old = this.$$init_SavedLastViewMode;
        var self = this;
        var promise;

        function fire() {
            var tracker = {};
            var reg = qx.event.Registration;
            if (reg.hasListener(self, 'SavedLastViewMode')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'SavedLastViewMode', qx.event.type.Data, [computed, old]));
            if (reg.hasListener(self, 'SavedLastViewModeAsync')) qx.event.Utils.then(tracker, function() {
                return reg.fireEventAsync(self, 'SavedLastViewModeAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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

function resetRuntimeSavedLastViewMode anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_SavedLastViewMode !== undefined) {
        old = this.$$runtime_SavedLastViewMode;
    } else if (this.$$user_SavedLastViewMode !== undefined) {
        old = this.$$user_SavedLastViewMode;
    } else if (this.$$useinit_SavedLastViewMode) {
        old = this.$$init_SavedLastViewMode;
    }
    if (this.$$runtime_SavedLastViewMode === undefined) return;
    var computed;
    if (this.$$runtime_SavedLastViewMode !== undefined) {
        delete this.$$runtime_SavedLastViewMode;
        if (this.$$user_SavedLastViewMode !== undefined) computed = this.$$user_SavedLastViewMode;
        else if (this.$$theme_SavedLastViewMode !== undefined) computed = this.$$theme_SavedLastViewMode;
        else if (this.$$init_SavedLastViewMode !== undefined) {
            computed = this.$$init_SavedLastViewMode;
            this.$$useinit_SavedLastViewMode = true;
        }
    } else if (this.$$user_SavedLastViewMode !== undefined) {
        computed = this.$$user_SavedLastViewMode;
    } else if (this.$$useinit_SavedLastViewMode) {}
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = this.$$init_SavedLastViewMode;
    var self = this;
    var promise;

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'SavedLastViewMode')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'SavedLastViewMode', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'SavedLastViewModeAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'SavedLastViewModeAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
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
qx.ui.co mapContainerntainer.Composite[15139 - 0] qx.ui.co mapBlockerntainer.Composite[15140 - 0] citiesfunction onSelectCallback() {},
    function(n) {
        var i = this.getVisMode(this.viewMode),
            t = n.get_BuildingDetails();
        n != null && (i.vis != ClientLib.Vis.Mode.CombatSetup || t != null && t.get_IsAlive()) ? this._shouldShowSellBuildingConfirm(t) ? this._showSellBuildingConfirm(n) : n.ExecutePrimaryFunction() || (this.buildingPopup == null && (this.buildingPopup = new webfrontend.gui.details.OverlayBuildingDetailView), this.setActivePopup(this.buildingPopup), this.buildingPopup.activate(n)) : this.buildingPopup && this.buildingPopup.close(!0)
    },
    function(n) {
        var t = this.getVisMode(this.viewMode);
        n != null && t != null && t.vis != ClientLib.Vis.Mode.CombatSetup ? n.ExecutePrimaryFunction() || (this.resourcePopup == null && (this.resourcePopup = new webfrontend.gui.ResourcePopup), this.setActivePopup(this.resourcePopup), this.resourcePopup.activate(n)) : this.resourcePopup && this.resourcePopup.close()
    },
    function() {},
    function() {},
    function() {},
    function() {},
    function() {},
    function(n) {
        var i = this.getVisMode(this.viewMode),
            t;
        n != null && i.vis != ClientLib.Vis.Mode.CombatSetup | (n.get_UnitDetails() != null && n.get_UnitDetails().get_IsAlive()) ? n.ExecutePrimaryFunction() || (t = this.getUnitPopup(), this.setActivePopup(t), this.unitPopup.activate(n)) : this.unitPopup && this.unitPopup.close()
    },
    function() {},
    function(n) {
        var i = this.getVisMode(this.viewMode),
            t;
        n != null && i.vis != ClientLib.Vis.Mode.CombatSetup | (n.get_UnitDetails() != null && n.get_UnitDetails().get_IsAlive()) ? n.ExecutePrimaryFunction() || (t = this.getUnitPopup(), this.setActivePopup(t), this.unitPopup.activate(n)) : this.unitPopup && this.unitPopup.close()
    },
    function() {},
    function() {}

function getViewMode() {
    return this.viewMode
}

function getViewCity() {
    return this.cityId
}

function setActive(n) {
    if (this.__vR != n && (this.__vR = n, this.resetSavedView(), this.__vR && this.viewMode > 0)) {
        var t = ClientLib.Vis.VisMain.GetInstance(),
            i = this.getVisMode(this.viewMode);
        t.set_Mode(i.vis)
    }
}

function isActive() {
    return this.__vR
}

function getUnitPopup() {
    return this.unitPopup == null && (this.unitPopup = new webfrontend.gui.details.OverlayEntityPopupUnit), this.unitPopup
}

function saveCurrentView() {
    this.setSavedLastViewMode(this.viewMode);
    this.__bjx = this.cityId
}

function resetSavedView() {
    this.setSavedLastViewMode(null);
    this.__bjx = null
}

function gotoLastView() {
    this.getSavedLastViewMode() != null && this.setView(this.getSavedLastViewMode(), this.__bjx, 0, 0, 0)
}

function setView(r, u, f, o, s) {
    var p, w, c, b, g, l, y;
    r != ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay && r != ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase && r != ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense && r != ClientLib.Data.PlayerAreaViewMode.pavmCombatSimulation && r != ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase && r != ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense && this.resetSavedView();
    s == null && (s = 0);
    f = Math.round(f);
    o = Math.round(o);
    var h = null,
        a = ClientLib.Vis.VisMain.GetInstance(),
        v = ClientLib.Data.MainData.GetInstance().get_Cities();
    if (this.__bju.show(), this.cityId != u && (p = v.GetCity(this.cityId), p != null && webfrontend.phe.cnc.Util.detachNetEvent(p, i, ClientLib.Data.CityChange, this, this._onCityChange), w = v.GetCity(u), w != null && webfrontend.phe.cnc.Util.attachNetEvent(w, i, ClientLib.Data.CityChange, this, this._onCityChange)), this.cityId = u, this.transitionSource = a.GetActiveView(), this.viewMode = r, v.set_CurrentCityId(this.cityId), this._validateMode()) {
        if (c = this.getVisMode(r), c) switch (c.vis) {
            case ClientLib.Vis.Mode.City:
                h = ClientLib.Vis.VisMain.GetInstance().get_City();
                h.get_OwnerId() === ClientLib.Data.MainData.GetInstance().get_Player().get_Id() && v.get_CurrentOwnCity() != null && webfrontend.gui.alliance.AllianceMarkerNavs.updateHomeMarker(v.get_CurrentOwnCity());
                h != null && c.mode != undefined && h.set_Mode(c.mode);
                (f != -1 || o != -1) && (f = 0, o = 0);
                break;
            case ClientLib.Vis.Mode.Region:
                h = ClientLib.Vis.VisMain.GetInstance().get_Region();
                h != null && c.mode != undefined && h.set_Mode(c.mode);
                break;
            case ClientLib.Vis.Mode.World:
                h = ClientLib.Vis.VisMain.GetInstance().get_World();
                h != null && c.mode != undefined && h.set_Mode(c.mode);
                this.__bju.exclude();
                break;
            case ClientLib.Vis.Mode.Battleground:
                h = ClientLib.Vis.VisMain.GetInstance().get_Battleground();
                this.autoScroll == 0 && (this.autoScroll = 1);
                this.autoScrollTimeout = 0;
                f = 0;
                o = h.get_MaxYPosition();
                h != null && c.mode != undefined && h.set_Mode(c.mode);
                break;
            case ClientLib.Vis.Mode.ArmySetup:
                h = a.get_ArmySetup();
                h != null && c.mode != undefined && h.set_Mode(c.mode);
                break;
            case ClientLib.Vis.Mode.DefenseSetup:
                h = a.get_DefenseSetup();
                h != null && c.mode != undefined && h.set_Mode(c.mode);
                break;
            case ClientLib.Vis.Mode.CombatSetup:
                h = a.get_CombatSetup();
                h.set_MaxYPosition(h.get_MinYPosition() + 19 * h.get_GridHeight());
                o <= 0 && (o = this.getHUD().getCombatSetupOffset(c.mode));
                h != null && c.mode != undefined && h.set_Mode(c.mode)
        }
        if (this.transitionStartTime != null) {
            if (this.transitionStartTime = null, b = this.transitionTarget.GetHtmlNode(), g = this.transitionSource.GetHtmlNode(), qx.bom.element.Style.reset(g, n), qx.bom.element.Style.reset(b, n), this.transitionTarget.ActivateFog(!0), this.transitionSource.ActivateFog(!0), l = this.mapContainer.getContentElement().getDomElement(), this.activeSceneView && l) try {
                l.removeChild(this.activeSceneView)
            } catch (nt) {}
            this.activeSceneView = b
        }
        if (l = this.mapContainer.getContentElement().getDomElement(), h != null) {
            if (this.activeSceneView != h.GetHtmlNode())
                if (s == 0) {
                    if (this.__vR && a.set_Mode(c.vis), f == -1 && o == -1 ? (h.set_ZoomFactor(a.get_MinZoomFactor()), h.CenterGridPosition(4, 3)) : (h.set_ZoomFactor(a.get_MinZoomFactor()), h.SetPosition(f, o)), this.activeSceneView && l) try {
                        l.removeChild(this.activeSceneView)
                    } catch (nt) {}
                    this.activeSceneView = h.GetHtmlNode();
                    this.activeSceneView && l && (qx.bom.element.Style.reset(this.activeSceneView, n), l.appendChild(this.activeSceneView))
                } else {
                    this.transitionVisData = {
                        mode: c.vis,
                        x: f,
                        y: o,
                        zoom: a.get_ZoomFactor()
                    };
                    this.transitionStartTime = (new Date).getTime();
                    this.transitionTarget = h;
                    this.transitionMode = s;
                    this.transitionTarget.ActivateFog(!1);
                    this.transitionSource.ActivateFog(!1);
                    this.transitionSource.ViewUpdate();
                    var k = h.GetHtmlNode(),
                        d = 0;
                    switch (s) {
                        case 1:
                            d = a.get_ViewHeight();
                            break;
                        case 2:
                            d = -a.get_ViewHeight()
                    }
                    k && l && (l.appendChild(k), qx.bom.element.Style.setStyles(k, {
                        position: e,
                        top: d.toString() + t
                    }));
                    this.activeSceneView && qx.bom.element.Style.setStyles(this.activeSceneView, {
                        position: e,
                        top: 0..toString() + t
                    })
                }
        } else {
            if (this.activeSceneView && l) try {
                l.removeChild(this.activeSceneView)
            } catch (nt) {}
            this.activeSceneView = null
        }
        this.setActivePopup(null);
        this.__bjv.setViewMode(r);
        this.__bjv.resetToggleMode();
        this.__bjv.updateUI(this.viewMode, ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(u));
        y = qx.core.Init.getApplication();
        this.viewMode != ClientLib.Data.PlayerAreaViewMode.pavmNone && (y.getMainOverlay().isVisible() || y.showMainOverlay(!0));
        this.viewMode == ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay && y.getBarSimResult().setBarHidden(!0)
    }
}

function getVisMode(n) {
    switch (n) {
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase:
            return {
                vis: ClientLib.Vis.Mode.City, mode: undefined
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense:
            return {
                vis: ClientLib.Vis.Mode.DefenseSetup, mode: undefined
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense:
            return {
                vis: ClientLib.Vis.Mode.ArmySetup, mode: ClientLib.Vis.ArmySetup.ArmySetupViewMode.Default
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase:
            return {
                vis: ClientLib.Vis.Mode.CombatSetup, mode: ClientLib.Vis.CombatSetup.CombatSetupViewMode.Base
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense:
            return {
                vis: ClientLib.Vis.Mode.CombatSetup, mode: ClientLib.Vis.CombatSetup.CombatSetupViewMode.Defense
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker:
            return {
                vis: ClientLib.Vis.Mode.Battleground, mode: ClientLib.Vis.Battleground.BattleMode.Live
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender:
            return {
                vis: ClientLib.Vis.Mode.Battleground, mode: ClientLib.Vis.Battleground.BattleMode.Live
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker:
            return {
                vis: ClientLib.Vis.Mode.Battleground, mode: ClientLib.Vis.Battleground.BattleMode.Live
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender:
            return {
                vis: ClientLib.Vis.Mode.Battleground, mode: ClientLib.Vis.Battleground.BattleMode.Live
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay:
            return {
                vis: ClientLib.Vis.Mode.Battleground, mode: ClientLib.Vis.Battleground.BattleMode.Replay
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSimulation:
            return {
                vis: ClientLib.Vis.Mode.Battleground, mode: ClientLib.Vis.Battleground.BattleMode.Replay
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmWorldMap:
            return {
                vis: ClientLib.Vis.Mode.World, mode: ClientLib.Vis.World.WorldViewMode.Default
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase:
            return {
                vis: ClientLib.Vis.Mode.CombatSetup, mode: ClientLib.Vis.CombatSetup.CombatSetupViewMode.AllianceBase
            };
        case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense:
            return {
                vis: ClientLib.Vis.Mode.CombatSetup, mode: ClientLib.Vis.CombatSetup.CombatSetupViewMode.AllianceBaseDefense
            }
    }
    return null
}

function _onCityChange() {
    this._onUITick()
}

function _onMapAreaResize(n) {
    var i = n.getData().width,
        r = n.getData().height,
        t = ClientLib.Vis.VisMain.GetInstance(),
        u = t.GetActiveView(),
        e, f;
    u == null && (u = t.get_City());
    u != null && (e = u.get_MaxXPosition() - u.get_MinXPosition(), f = Math.min(1, i / e), u.set_ZoomFactor(f), this.__vR && t.set_MinZoomFactor(f), t.get_City().set_ZoomFactor(f), t.get_ArmySetup().set_ZoomFactor(f), t.get_DefenseSetup().set_ZoomFactor(f));
    t.get_City().SetViewSize(i, r);
    t.get_Battleground().SetViewSize(i, r);
    t.get_ArmySetup().SetViewSize(i, r);
    t.get_DefenseSetup().SetViewSize(i, r);
    t.get_CombatSetup().SetViewSize(i, r);
    t.get_World().SetViewSize(i, r);
    t.ViewUpdate()
}

function _onMouseDown(n) {
    var i, t;
    n.getButton() == f && (this.autoScroll = 0, this.autoScrollTimeout = 0, this.mouseDown = !0, this.worldMoved = !1, i = ClientLib.Vis.VisMain.GetInstance(), this.worldMouseMove == !1 && (this.worldMouseMove = !0, this.mapContainer.capture()), this.mouseStartX = n.getScreenLeft(), this.mouseStartY = n.getScreenTop(), t = this.getContentLocation(), this.__vR && i.MouseDown(n.getDocumentLeft() - t.left, n.getDocumentTop() - t.top))
}

function _onMouseUp(n) {
    var e = n.getTarget() && this.getActivePopupClosedBy() == n.getTarget().toHashCode(),
        t, r, i;
    (this.setActivePopupClosedBy(0), t = n.getButton(), t == f) && (this.worldMouseMove == !0 && (this.worldMouseMove = !1, this.mapContainer.releaseCapture(), this.getContentElement().removeStyle(u)), !e && this.worldMoved == !1 && this.__vR && (this.getActivePopup() != null && this.getActivePopup().getAutoHide() ? this.setActivePopup(null) : (r = ClientLib.Vis.VisMain.GetInstance(), i = this.getContentLocation(), r.MouseUp(n.getDocumentLeft() - i.left, n.getDocumentTop() - i.top, t))), this.autoScrollTimeout = (new Date).getTime())
}

function _onMouseMove(n) {
    var i, r, f, t, e;
    this.worldMouseMove == !0 ? (i = n.getScreenLeft() - this.mouseStartX, r = n.getScreenTop() - this.mouseStartY, (this.worldMoved || Math.abs(i) >= 5 || Math.abs(r) >= 5) && (this.mouseStartX = n.getScreenLeft(), this.mouseStartY = n.getScreenTop(), t = ClientLib.Vis.VisMain.GetInstance(), f = t.get_ZoomFactor(), t.MovePosition(-(i / f), -(r / f)) && (this.getContentElement().setStyle(u, w), this.worldMoved = !0, (this.getViewMode() == ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense || this.getViewMode() == ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase) && this.getHUD().updateCombatSetupButton()))) : (t = ClientLib.Vis.VisMain.GetInstance(), e = this.getContentLocation(), this.__vR && t.MouseMove(n.getDocumentLeft() - e.left, n.getDocumentTop() - e.top))
}

function _onMouseWheel(n) {
    var t = ClientLib.Vis.VisMain.GetInstance(),
        r, i;
    if (!t.GetActiveView().get_IsZoomable()) {
        n.stop();
        return
    }
    r = n.getWheelDelta();
    i = t.get_ZoomFactor();
    i += r > 0 ? -.1 : .1;
    i = Math.min(t.GetActiveView().get_MaxZoomFactor(), Math.max(t.get_MinZoomFactor(), i));
    this.__vR && t.set_ZoomFactor(i);
    n.stop()
}

function _onTick() {
    var i = !1,
        t, u, n;
    if (this._viewTransition(), t = ClientLib.Vis.VisMain.GetInstance(), this.__vR) {
        t.UpdateMouseTool();
        t.Update();
        u = !1;
        switch (this.viewMode) {
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker:
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender:
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker:
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender:
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay:
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatSimulation:
                u = !0
        }
        if (u)
            if (n = ClientLib.Vis.VisMain.GetInstance().get_Battleground(), i = this.viewMode == ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker && n.get_Mode() == ClientLib.Vis.Battleground.BattleMode.Live && n.get_CombatComplete(), i) {
                var e = n.get_LastFrameTime(),
                    o = t.get_PositionY(),
                    f = Math.floor(o + this.autoScrollSpeed / 1e3 * e);
                f <= n.get_MinYPosition() && (this.autoScrollSpeed = 100);
                f >= n.get_MaxYPosition() - n.get_ViewHeight() / n.get_ZoomFactor() && (this.autoScrollSpeed = -100);
                t.SetPosition(0, f)
            } else this.getPlayerAutoScrollPreference() && (n.UpdateAutoCam(this.autoScroll) || this.autoScrollTimeout != 0 && (new Date).getTime() >= this.autoScrollTimeout + 3e3 && (this.autoScroll = 1, this.autoScrollTimeout = 0))
    }
    t.ViewUpdate();
    this.mapBlocker.setVisibility(i ? y : r)
}

function _onUITick() {
    if (this._validateMode()) {
        var n = ClientLib.Vis.VisMain.GetInstance();
        this.isActive() && n.GetActiveView() && n.UiUpdate(ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep());
        this.__bjv.updateUI(this.viewMode, ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.cityId))
    }
}

function _validateMode() {
    var t = qx.core.Init.getApplication(),
        n = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.cityId),
        r, u, i, f;
    if (n == null) {
        switch (this.viewMode) {
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense:
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase:
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender:
            case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker:
            case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase:
            case ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense:
                return t.getMainOverlay().isVisible() && t.showMainOverlay(!1), !1
        }
        return !0
    }
    if (r = this.viewMode == ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker, u = this.viewMode == ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase || this.viewMode == ClientLib.Data.PlayerAreaViewMode.pavmAllianceBaseDefense, !r && t.getMainOverlay().isVisible() && (!n.get_Valid() || n.get_IsGhostMode() && this.viewMode != ClientLib.Data.PlayerAreaViewMode.pavmWorldMap)) return t.showMainOverlay(!1), webfrontend.gui.widgets.confirmationWidgets.GhostedConfirmationWidget.getInstance().showGhostedInformation(n), !1;
    if (t.getMainOverlay().isVisible() && (n.get_OutOfRange() || n.get_OutOfRangeGhostBase()) && !u && this.viewMode != ClientLib.Data.PlayerAreaViewMode.pavmWorldMap) return t.showMainOverlay(!1), webfrontend.gui.widgets.confirmationWidgets.SpyMessageConfirmationWidget.getInstance().showMessage(n), !1;
    switch (this.viewMode) {
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase:
        case ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense:
            if (n.get_HasIncommingAttack() && ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep() < n.get_LockdownEndStep()) return ClientLib.Data.MainData.GetInstance().get_Combat().set_Id(this.cityId), this.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender, this.cityId, 0, 0), !1;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupBase:
            if (n.get_HasIncommingAttack() && !n.IsOwnBase() && (i = ClientLib.Data.MainData.GetInstance().get_AllianceCombatState().GetCombatByBaseId(this.cityId), i != null)) return f = ClientLib.Data.MainData.GetInstance().get_Combat(), f.get_Id() != this.cityId && ClientLib.Data.MainData.GetInstance().get_Combat().set_Id(this.cityId), i.AttackerId == ClientLib.Data.MainData.GetInstance().get_Player().get_Id() ? this.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker, this.cityId, 0, 0) : i.AttackerAllianceId == ClientLib.Data.MainData.GetInstance().get_Alliance().get_Id() ? this.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker, this.cityId, 0, 0) : this.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender, this.cityId, 0, 0), !1;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerDefender:
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatViewerAttacker:
            if (!n.get_HasIncommingAttack() && (ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_CombatComplete() || ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_IsInvalidCombat())) return n.IsOwnBase() ? this.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerDefense, this.cityId, 0, 0) : this.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense, this.cityId, 0, 0), !1;
            break;
        case ClientLib.Data.PlayerAreaViewMode.pavmCombatDefender:
            if (ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep() > n.get_LockdownEndStep()) return this.setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase, this.cityId, 0, 0), !1
    }
    return !0
}

function closeGhostedConfirmation() {
    webfrontend.gui.widgets.confirmationWidgets.GhostedConfirmationWidget.getInstance().closeForced()
}

function _viewTransition() {
    var i, e, o, h;
    if (this.transitionStartTime != null) {
        if (i = ClientLib.Vis.VisMain.GetInstance(), this.transitionVisData != null) {
            if (this.transitionSource.get_IsZoomable() && i.get_ZoomFactor() > i.get_MinZoomFactor())
                if (e = (new Date).getTime() - this.transitionStartTime, o = this.transitionVisData.zoom - .4 * e / 250, o < i.get_MinZoomFactor()) i.set_ZoomFactor(i.get_MinZoomFactor()), i.Update();
                else {
                    i.set_ZoomFactor(o);
                    return
                } i.set_Mode(this.transitionVisData.mode);
            this.transitionVisData.x == -1 && this.transitionVisData.y == -1 ? (i.set_ZoomFactor(i.get_MinZoomFactor()), i.CenterGridPosition(4, 3)) : (i.set_ZoomFactor(i.get_MinZoomFactor()), i.SetPosition(this.transitionVisData.x, this.transitionVisData.y));
            this.transitionVisData = null;
            this.transitionStartTime = (new Date).getTime()
        }
        var e = (new Date).getTime() - this.transitionStartTime,
            u = this.transitionTarget.GetHtmlNode(),
            s = this.transitionSource.GetHtmlNode(),
            f = i.get_ViewHeight(),
            r = Math.floor(e * (f / 500));
        if (r >= f) {
            if (qx.bom.element.Style.reset(s, n), qx.bom.element.Style.reset(u, n), this.transitionTarget.ActivateFog(!0), this.transitionSource.ActivateFog(!0), h = this.mapContainer.getContentElement().getDomElement(), this.activeSceneView && h) try {
                h.removeChild(this.activeSceneView)
            } catch (c) {}
            this.activeSceneView = u;
            this.transitionStartTime = null
        } else switch (this.transitionMode) {
            case 1:
                qx.bom.element.Style.set(s, n, (-r).toString() + t);
                qx.bom.element.Style.set(u, n, (f - r).toString() + t);
                break;
            case 2:
                qx.bom.element.Style.set(s, n, r.toString() + t);
                qx.bom.element.Style.set(u, n, (r - f).toString() + t)
        }
    }
}

function _onPlayerVersionChange() {}

function _onCurrentOwnCityChange(n) {
    n != null && this.__bjv.updateOwnCity(n)
}

function _onSelectionChange(n, t) {
    if (t != null) {
        var i = this.onSelectCallback[t.get_VisObjectType()];
        i == undefined ? this._onSelectedClickUnknown(this, t) : i.call(this, t)
    }
}

function _onSelectedClickUnknown() {}

function _showSellBuildingConfirm(n) {
    var i = n.get_BuildingDetails();
    this._confirmSaleWindow || (this._confirmSaleWindow = new webfrontend.gui.widgets.confirmationWidgets.SellItemConfirmationWidget);
    var t = this._getResourceRefunds(i),
        r = Object.keys(t.d).map(function(n) {
            return {
                t: +n,
                c: t.d[n]
            }
        }),
        u = webfrontend.gui.UtilTech.generateResourceHtmlText(r, null, !1, !1, !1, !0, -4, void 0, !1, !0).get(),
        f = n.get_BuildingName() + v + n.get_BuildingLevel() + s;
    this._confirmSaleWindow.showSellItemConfirmation(this, this._onDidShowSaleAlert(n), f, n.get_ImageSource(), u)
}

function _getResourceRefunds(n) {
    var t = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
    return t.get_CityBuildingsData().GetDemolishResourceRefund(n)
}

function _shouldShowSellBuildingConfirm(n) {
    var i = ClientLib.Vis.VisMain.GetInstance().get_MouseMode() == webfrontend.gui.PlayArea.PlayAreaHUD.EModeSell,
        u = ClientLib.Data.MainData.GetInstance().get_Server().get_PlunderExploitFixesEnabled(),
        f = n.CanDemolish(),
        t, r;
    if ([34, 42, 40, 36, 39, 37, 43, 41, 35, 38, 30, 24].indexOf(n.get_Type()) != -1 && i) return !0;
    if (u && i && f) {
        t = this._getResourceRefunds(n);
        for (r in t.d)
            if (t.d[r] < 0) return !0
    }
    return !1
}

function _selectedBuildingClick(n) {
    var i = this.getVisMode(this.viewMode),
        t = n.get_BuildingDetails();
    n != null && (i.vis != ClientLib.Vis.Mode.CombatSetup || t != null && t.get_IsAlive()) ? this._shouldShowSellBuildingConfirm(t) ? this._showSellBuildingConfirm(n) : n.ExecutePrimaryFunction() || (this.buildingPopup == null && (this.buildingPopup = new webfrontend.gui.details.OverlayBuildingDetailView), this.setActivePopup(this.buildingPopup), this.buildingPopup.activate(n)) : this.buildingPopup && this.buildingPopup.close(!0)
}

function _onDidShowSaleAlert(n) {
    return function(t) {
        (t && n.ExecutePrimaryFunction(), this._confirmSaleWindow) && this._confirmSaleWindow.disable()
    }
}

function _selectedResourceClick(n) {
    var t = this.getVisMode(this.viewMode);
    n != null && t != null && t.vis != ClientLib.Vis.Mode.CombatSetup ? n.ExecutePrimaryFunction() || (this.resourcePopup == null && (this.resourcePopup = new webfrontend.gui.ResourcePopup), this.setActivePopup(this.resourcePopup), this.resourcePopup.activate(n)) : this.resourcePopup && this.resourcePopup.close()
}

function _selectedUnitClick(n) {
    var i = this.getVisMode(this.viewMode),
        t;
    n != null && i.vis != ClientLib.Vis.Mode.CombatSetup | (n.get_UnitDetails() != null && n.get_UnitDetails().get_IsAlive()) ? n.ExecutePrimaryFunction() || (t = this.getUnitPopup(), this.setActivePopup(t), this.unitPopup.activate(n)) : this.unitPopup && this.unitPopup.close()
}

function setAutocam(n) {
    this.autoScroll = n;
    n == 2 && (this.autoScrollInfo = arguments[1]);
    n == 3 && (this.autoScrollInfo = arguments[1])
}

function getHUD() {
    return this.__bjv
}

function setTutorialMode(n) {
    this.getHUD().setTutorialMode(n);
    this.__bjt != n && (this.__bjt = n)
}

function getUIItem(n) {
    switch (n) {
        case ClientLib.Data.Missions.PATH.BAR_HUD:
            return this.getHUD()
    }
    return null
}

function onHotKeyDown(n) {
    if (this.isActive()) this.getHUD().onHotKeyDown(n)
}

function onHotKeyUp(n) {
    if (this.isActive()) this.getHUD().onHotKeyUp(n)
}

function onHotKeyPress(n) {
    if (this.isActive()) this.getHUD().onHotKeyPress(n)
}

function getPlayerAutoScrollPreference() {
    return parseInt(ClientLib.Config.Main.GetInstance().GetConfig(ClientLib.Config.Main.CONFIG_COMBATAUTOSCROLL), 10) == 1
}
citiesfunction onSelectCallback() {},
    function(n) {
        var i = this.getVisMode(this.viewMode),
            t = n.get_BuildingDetails();
        n != null && (i.vis != ClientLib.Vis.Mode.CombatSetup || t != null && t.get_IsAlive()) ? this._shouldShowSellBuildingConfirm(t) ? this._showSellBuildingConfirm(n) : n.ExecutePrimaryFunction() || (this.buildingPopup == null && (this.buildingPopup = new webfrontend.gui.details.OverlayBuildingDetailView), this.setActivePopup(this.buildingPopup), this.buildingPopup.activate(n)) : this.buildingPopup && this.buildingPopup.close(!0)
    },
    function(n) {
        var t = this.getVisMode(this.viewMode);
        n != null && t != null && t.vis != ClientLib.Vis.Mode.CombatSetup ? n.ExecutePrimaryFunction() || (this.resourcePopup == null && (this.resourcePopup = new webfrontend.gui.ResourcePopup), this.setActivePopup(this.resourcePopup), this.resourcePopup.activate(n)) : this.resourcePopup && this.resourcePopup.close()
    },
    function() {},
    function() {},
    function() {},
    function() {},
    function() {},
    function(n) {
        var i = this.getVisMode(this.viewMode),
            t;
        n != null && i.vis != ClientLib.Vis.Mode.CombatSetup | (n.get_UnitDetails() != null && n.get_UnitDetails().get_IsAlive()) ? n.ExecutePrimaryFunction() || (t = this.getUnitPopup(), this.setActivePopup(t), this.unitPopup.activate(n)) : this.unitPopup && this.unitPopup.close()
    },
    function() {},
    function(n) {
        var i = this.getVisMode(this.viewMode),
            t;
        n != null && i.vis != ClientLib.Vis.Mode.CombatSetup | (n.get_UnitDetails() != null && n.get_UnitDetails().get_IsAlive()) ? n.ExecutePrimaryFunction() || (t = this.getUnitPopup(), this.setActivePopup(t), this.unitPopup.activate(n)) : this.unitPopup && this.unitPopup.close()
    },
    function() {},
    function() {}
qx.ui.co mapContainerntainer.Composite[15139 - 0] qx.ui.co mapBlockerntainer.Composite[15140 - 0]