function getLocalStorageKey anonymous(value) {
    if (this.$$runtime_localStorageKey !== undefined) return this.$$runtime_localStorageKey;
    if (this.$$user_localStorageKey !== undefined) return this.$$user_localStorageKey;
    else return this.$$init_localStorageKey;
}

function setLocalStorageKey anonymous() {
    this.setLocalStorageKey.$$install && this.setLocalStorageKey.$$install.call(this);
    return this.setLocalStorageKey.apply(this, arguments);
}

function resetLocalStorageKey() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeLocalStorageKey() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeLocalStorageKey() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getImageSource anonymous() {
    this.getImageSource.$$install && this.getImageSource.$$install();
    return this.getImageSource.apply(this, arguments);
}

function setImageSource anonymous() {
    this.setImageSource.$$install && this.setImageSource.$$install.call(this);
    return this.setImageSource.apply(this, arguments);
}

function resetImageSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeImageSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeImageSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getUiImageSource anonymous(value) {
    if (this.$$runtime_uiImageSource !== undefined) return this.$$runtime_uiImageSource;
    if (this.$$user_uiImageSource !== undefined) return this.$$user_uiImageSource;
    else return this.$$init_uiImageSource;
}

function setUiImageSource anonymous() {
    this.setUiImageSource.$$install && this.setUiImageSource.$$install.call(this);
    return this.setUiImageSource.apply(this, arguments);
}

function resetUiImageSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeUiImageSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeUiImageSource() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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

function resetChat() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeChat() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeChat() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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

function resetAudioOn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAudioOn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAudioOn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAudioOn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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

function resetAudioMusicLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAudioMusicLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAudioMusicLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAudioMusicLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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

function resetAudioAmbientLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAudioAmbientLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAudioAmbientLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAudioAmbientLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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

function resetAudioUILevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAudioUILevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAudioUILevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAudioUILevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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

function resetSavedAudioOn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeSavedAudioOn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSavedAudioOn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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

function resetSavedAudioMusicLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeSavedAudioMusicLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSavedAudioMusicLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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

function resetSavedAudioAmbientLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeSavedAudioAmbientLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSavedAudioAmbientLevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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

function resetSavedAudioUILevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeSavedAudioUILevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSavedAudioUILevel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getImageSourceDefault anonymous() {
    this.getImageSourceDefault.$$install && this.getImageSourceDefault.$$install();
    return this.getImageSourceDefault.apply(this, arguments);
}

function setImageSourceDefault anonymous() {
    this.setImageSourceDefault.$$install && this.setImageSourceDefault.$$install.call(this);
    return this.setImageSourceDefault.apply(this, arguments);
}

function resetImageSourceDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeImageSourceDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeImageSourceDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getUiImageSourceDefault anonymous() {
    this.getUiImageSourceDefault.$$install && this.getUiImageSourceDefault.$$install();
    return this.getUiImageSourceDefault.apply(this, arguments);
}

function setUiImageSourceDefault anonymous() {
    this.setUiImageSourceDefault.$$install && this.setUiImageSourceDefault.$$install.call(this);
    return this.setUiImageSourceDefault.apply(this, arguments);
}

function resetUiImageSourceDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeUiImageSourceDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeUiImageSourceDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getAudioOnDefault anonymous() {
    this.getAudioOnDefault.$$install && this.getAudioOnDefault.$$install();
    return this.getAudioOnDefault.apply(this, arguments);
}

function setAudioOnDefault anonymous() {
    this.setAudioOnDefault.$$install && this.setAudioOnDefault.$$install.call(this);
    return this.setAudioOnDefault.apply(this, arguments);
}

function resetAudioOnDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeAudioOnDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAudioOnDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getAudioMusicLevelDefault anonymous() {
    this.getAudioMusicLevelDefault.$$install && this.getAudioMusicLevelDefault.$$install();
    return this.getAudioMusicLevelDefault.apply(this, arguments);
}

function setAudioMusicLevelDefault anonymous() {
    this.setAudioMusicLevelDefault.$$install && this.setAudioMusicLevelDefault.$$install.call(this);
    return this.setAudioMusicLevelDefault.apply(this, arguments);
}

function resetAudioMusicLevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeAudioMusicLevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAudioMusicLevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getAudioAmbientLevelDefault anonymous() {
    this.getAudioAmbientLevelDefault.$$install && this.getAudioAmbientLevelDefault.$$install();
    return this.getAudioAmbientLevelDefault.apply(this, arguments);
}

function setAudioAmbientLevelDefault anonymous() {
    this.setAudioAmbientLevelDefault.$$install && this.setAudioAmbientLevelDefault.$$install.call(this);
    return this.setAudioAmbientLevelDefault.apply(this, arguments);
}

function resetAudioAmbientLevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeAudioAmbientLevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAudioAmbientLevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getAudioUILevelDefault anonymous() {
    this.getAudioUILevelDefault.$$install && this.getAudioUILevelDefault.$$install();
    return this.getAudioUILevelDefault.apply(this, arguments);
}

function setAudioUILevelDefault anonymous() {
    this.setAudioUILevelDefault.$$install && this.setAudioUILevelDefault.$$install.call(this);
    return this.setAudioUILevelDefault.apply(this, arguments);
}

function resetAudioUILevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeAudioUILevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAudioUILevelDefault() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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

function resetWorldMergeShown() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeWorldMergeShown() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeWorldMergeShown() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIosLastCurrency anonymous() {
    this.getIosLastCurrency.$$install && this.getIosLastCurrency.$$install();
    return this.getIosLastCurrency.apply(this, arguments);
}

function setIosLastCurrency anonymous(value) {
    this.$$setIosLastCurrencyImpl.apply(this, arguments);
    return value;
}

function resetIosLastCurrency() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeIosLastCurrency() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIosLastCurrency() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getTradeTableSortOrderColumn anonymous() {
    this.getTradeTableSortOrderColumn.$$install && this.getTradeTableSortOrderColumn.$$install();
    return this.getTradeTableSortOrderColumn.apply(this, arguments);
}

function setTradeTableSortOrderColumn anonymous(value) {
    this.$$setTradeTableSortOrderColumnImpl.apply(this, arguments);
    return value;
}

function resetTradeTableSortOrderColumn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeTradeTableSortOrderColumn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeTradeTableSortOrderColumn() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getTradeTableSortOrderAsc anonymous() {
    this.getTradeTableSortOrderAsc.$$install && this.getTradeTableSortOrderAsc.$$install();
    return this.getTradeTableSortOrderAsc.apply(this, arguments);
}

function setTradeTableSortOrderAsc anonymous(value) {
    this.$$setTradeTableSortOrderAscImpl.apply(this, arguments);
    return value;
}

function resetTradeTableSortOrderAsc() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeTradeTableSortOrderAsc() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeTradeTableSortOrderAsc() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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