[object prototypeObject]
function base() {
    this.getIsPopup() ? (qx.core.Init.getApplication().getPlayArea().getActivePopup() == null && this.close(!0), qx.core.Init.getApplication().getPlayArea().setActivePopup(null)) : this.close(!0)
} [Class w selfebfrontend.gui.missions.TutorialOverlay]