function get_TechMdbId() {
    return this.WOVWJG
}

function get_Name() {
    return this.NMPIPL
}

function get_Description() {
    return this.YEKRRC
}

function get_SmallPreviewImagePath() {
    return this.ZONQXH
}

function get_IsUpgradeAble() {
    return this.YSIUBW
}

function get_ResourceCosts() {
    return this.ZVGXVH
}

function get_ResourceUpgradeCosts() {
    return this.YGXCWM
}

function get_TargetText() {
    return this.IUZJBD
}

function get_InterruptedByText() {
    return this.YAXYSY
}

function get_DurationText() {
    return this.JPJGWP
}

function get_ShieldHitpoints() {
    return this.PUDNOC
}

function get_MaxRange() {
    return this.NUERCV
}

function get_MinRange() {
    return this.CFWSNO
}

function get_Duration() {
    return this.GDLLJO
}

function get_Speed() {
    return this.OAWOGI
}

function get_TechType() {
    return this.BRBUZS.t
}

function UpdateLevelData(n) {
    var t, i;
    if (this.YSIUBW = !1, this.YGXCWM = $I.UDAQKL.DNVCCU($I.DBJKAB, 0), t = this.BRBUZS.r.length, this.WOVWJG == 45 || this.WOVWJG == 85) i = Math.max(1, Math.min(n, t - 1)), this.ZVGXVH = $I.XOJOCY.LWBPHO(i, this.BRBUZS);
    else {
        t >= 2 && (this.ZVGXVH = $I.XOJOCY.LWBPHO(1, this.BRBUZS));
        switch (this.BRBUZS.t) {
            case $I.XNXEQA.TechDefense:
            case $I.XNXEQA.TechOffense:
                this.YSIUBW = t >= 3;
                this.YSIUBW && (this.YGXCWM = $I.XOJOCY.LWBPHO(2, this.BRBUZS))
        }
    }
}