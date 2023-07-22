[object knownCityNamesObject][object imageCacheObject]
function cacheImage(n) {
    if (this.imageCache == null && (this.imageCache = {}), !this.imageCache.hasOwnProperty(n)) {
        var t = document.createElement(r);
        t.src = n;
        this.imageCache[n] = t
    }
}

function addData(n) {
    qx.lang.Object.mergeWith(this, n)
}

function generateCityNames() {
    var h = qx.core.Init.getApplication(),
        l, c, r, a;
    this.knownCityNames = {};
    for (l in this.dungeons)
        for (c = this.dungeons[l], r = 1; r <= 10; r++) a = h.tr(o, c.dn, r), this.knownCityNames[c.n + f + r.toString()] = a;
    this.knownCityNames[e] = h.tr(t);
    this.knownCityNames[n] = h.tr(s);
    this.knownCityNames[u] = h.tr(i)
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
} [object ArchivesObject][object ImageAtlasObject] battlevi preloadew / neutral / groundtile_battle.jpg, ui / common / bgr_appointments_b.png, ui / common / bgr_appointments_scaler.png, ui / common / bgr_appointments_t.png, ui / common / bgr_appointment_item_small_scaler.png, ui / common / bgr_appointment_progbar.png, ui / common / bgr_basemode_b.png, ui / common / bgr_basemode_scaler.png, ui / common / bgr_basemode_t.png, ui / common / bgr_menu_bar_top.png, ui / common / bgr_messaging_b.png, ui / common / bgr_messaging_scaler.png, ui / common / bgr_messaging_t.png, ui / common / bgr_mission_tracker - b.png, ui / common / bgr_mission_tracker - c.png, ui / common / bgr_mission_tracker - t.png, ui / common / bgr_mission_tracker.png, ui / common / bgr_options_menu.png, ui / common / bgr_options_menu_scaler.png, ui / common / bgr_player_info.png, ui / common / bgr_player_info_logo.png, ui / common / bgr_region_world_select.png, ui / common / bgr_system_menu.png, ui / common / icn_build_slots.png, ui / common / icn_res_chrystal.png, ui / common / icn_res_command_points.png, ui / common / icn_res_dollar.png, ui / common / icn_res_power.png, ui / common / icn_res_research.png, ui / common / icn_res_tiberium.png, ui / common / msc_tutorial_guy.png, ui / common / msc_tutorial_tiberium.png, ui / icons / icon_mainui_base_active_button.png, ui / icons / icon_mainui_base_button.png, ui / icons / icon_mainui_defense_active_button.png, ui / icons / icon_mainui_defense_button.png, ui / icons / icon_mainui_recruit_active_button.png, ui / icons / icon_mainui_recruit_button.png, ui / icons / icon_mode_move.png, ui / icons / icon_mode_move_active.png, ui / icons / icon_mode_repair.png, ui / icons / icon_mode_repair_active.png, ui / icons / icon_mode_upgrade.png, ui / icons / icon_mode_upgrade_active.png, ui / icons / icon_step_left_button.png, ui / icons / icon_step_left_end_button.png, ui / icons / icon_step_right_button.png, ui / icons / icon_step_right_end_button.png, ui / icons / icon_tracker_minimise.png, ui / menues / main_ui / bgr_construction_overlay.png, ui / menues / main_ui / bgr_construction_slot.png, ui / menues / main_ui / bgr_construction_slot_disabled.png, ui / menues / main_ui / bgr_construction_slot_over.png, ui / menues / main_ui / bgr_construction_slot_selected.png, ui / menues / main_ui / bgr_construction_slot_selected_hovered.png, ui / menues / main_ui / bgr_modebuttons_bottom_sell.png, ui / menues / main_ui / bgr_modebuttons_scaler.png, ui / menues / main_ui / bgr_modebuttons_top.png[object citylayerObject][object regionlayerObject][object TechObject] 1, 2, 5, 10 gdiTechIds, 16, 17, 20, 21, 22, 23, 24, 25, 32, 34, 35, 36, 40, 42, 56, 80, 81, 8244, 45, 46 gdiTechResearchIds, 47, 48, 49, 50, 51, 52, 53, 54, 55, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 76, 83, 84, 120, 121, 13511, 12, 14 nodTechIds, 15, 18, 19, 26, 27, 28, 29, 30, 31, 33, 37, 38, 39, 41, 43, 57, 86, 87, 8885, 89, 90 nodTechResearchIds, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 118, 119, 12258, 72, 73 npcTechIds, 74, 75, 77, 78, 79, 116, 117, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 140, 141, 142, 143, 144, 145, 146, 147, 148149, 150, npcTechResearchIds151, 152, 153, 154, 155, 156, 157[object supportTechsObject][object linkTypesObject][object landTerrainObject][object seeTerrainObject][object worldcitiesObject][object worldpointsofinterestObject][object worldmapObject] 1, 1, 1, 1, poisbl1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 6, 10, 15, 25, 40, 65, 100, 150, 250, 400, 650, 1000, 1500, 2500, 4000, 6500, 10000, 15000, 25000, 40000, 65000, 100000, 150000, 250000, 400000, 650000, 1000000, 1500000, 2500000, 4000000, 6500000, 10000000, 15000000, 25000000, 40000000, 65000000, 100000000, 150000000, 250000000, 400000000, 650000000, 1000000000, 1500000000, 2500000000, 4000000000, 6500000000, 10000000000, 15000000000, 25000000000, 40000000000, 65000000000, 100000000000, 150000000000, 250000000000, 400000000000, 650000000000, 1000000000000, 1500000000000, 2500000000000, 4000000000000, 6500000000000, 10000000000000, 15000000000000, 25000000000000, 40000000000000, 65000000000000, 100000000000000, 150000000000000, 250000000000000, 400000000000000, 650000000000000, 1000000000000000, 1500000000000000, 2500000000000000, 4000000000000000, 6500000000000000, 10000000000000000, 15000000000000000, 25000000000000000, 40000000000000000, 65000000000000000, 100000000000000000, 150000000000000000, 250000000000000000, 400000000000000000, 650000000000000000[object poibbsObject], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object], [object Object][object poibmbrObject][object worldnpccitiesObject][object worldnpcterminalcitiesObject][object worldnpccampsObject][object resourcesObject][object modifierTypesObject][object modifierGroupsObject][object modifiersObject][object unitTypesObject][object attackTypesObject][object unitsObject][object BlockingGroupsObject][object UnitAmmoPoolObject][object UnitAmmoTypeImpactEffectObject][object UnitAmmoTypeObject] 81, 82, 83 gdiUnitIds, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 175, 200, 201, 202133, 134, nodUnitIds135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 176, 203, 204, 205177, 178, npcUnitIds179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 206, 207, 208, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289[object itemsObject][object effectsObject][object missionsObject][object missionCategoriesObject][object missionLinesObject][object missionTaskTypeObject][object missionStepObject][object surveysObject][object cursorObject][object superWeaponObject][object fontsObject][object BWTerrainObject][object CombatViewObject][object AudioObject][object NotificationCategoriesObject][object NotificationChannelsObject][object NotificationsObject][object PlayerTitlesObject][object ConfigObject][object NerfModifierObject][object SeasonLegacyTierObject][object imageCacheObject]