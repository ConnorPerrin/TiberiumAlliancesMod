function PrintName(n) {
    console.log(n)
}

function PrintNameAndInt(n, t) {
    console.log(n + ": X:" + t)
}

function DeleteUpdate(n, t) {
    for (var i, f = t.l[0].d, r = (new $I.UCRMVA).SLPWTI(), e = (new $I.UCRMVA).SLPWTI(), u = 0; u < f.length; u++) {
        i = f[u];
        switch (i.t) {
            case 1:
                r.l.push(i.i);
                break;
            case 2:
                e.l.push(i.i)
        }
    }
    this.FNRKAJ(e);
    r.l.length > 0 ? this.VWLMJD(r) : this.HWIKOP != null && this.HWIKOP.FOWLVG()
}

function OnAllianceUpdate() {
    var n, t, i, u, r;
    if ($I.CVRAYR.VAMLQD().FMKUPK().UQGPFX() == 0) {
        for (n = (new $I.UCRMVA).SLPWTI(), t = 0; t < this.BBJXPZ().l.length; t++) n.l.push(this.BBJXPZ().l[t].Id);
        for (i = 0; i < this.UTGMTI().l.length; i++)
            for (u = this.UTGMTI().l[i], r = 0; r < u.l.length; r++) n.l.push(u.l[r].Id);
        this.VWLMJD(n);
        this.BBJXPZ().l = [];
        this.UTGMTI().l = [];
        $I.CVRAYR.VAMLQD().FMKUPK().XINIGF((new $I.IWNHMI).TFDQYD(this, this.ZKHUKF));
        this.VWIZWH = !1
    }
}

function OnForumsUpdate() {
    var n, t, i, r, f, u;
    for (this.JQNTAN = 0, n = null, t = 0; t < this.QZXCBV().l.length; t++) n = this.QZXCBV().l[t], n.SubscriptionState == 1 ? this.JQNTAN += n.UnreadRepliesCount + n.UnreadThreadsCount : n.SubscriptionState == 2 && (this.JQNTAN += n.UnreadSubscribedRepliesCount + n.UnreadSubscribedThreadsCount);
    for (i = 0; i < this.BBJXPZ().l.length; i++) n = this.BBJXPZ().l[i], this.JQNTAN += n.UnreadThreadsCount + n.UnreadRepliesCount;
    for (r = 0; r < this.UTGMTI().l.length; r++)
        for (f = this.UTGMTI().l[r], u = 0; u < f.l.length; u++) n = f.l[u], this.JQNTAN += n.UnreadThreadsCount + n.UnreadRepliesCount;
    this.HWIKOP != null && this.HWIKOP.FOWLVG()
}

function OnThreadsUpdate(n) {
    n.l.length > 0 && this.WRCTCU != null && this.WRCTCU.ZASZSL(n)
}

function CreateForum(n, t, i) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("CreateForum", {
        sharedAlliance: n,
        Title: t,
        Description: i
    }, (new $I.JNOYHJ).TFDQYD(this, this.LSOJSS), null)
}

function CreateThread(n, t, i, r) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("CreateForumThread", {
        forumID: n,
        threadTitle: t,
        firstPostMessage: i,
        subscribe: r
    }, (new $I.JNOYHJ).TFDQYD(this, this.EKFEXU), null)
}

function CreatePost(n, t, i) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("CreateForumPost", {
        forumID: n,
        threadID: t,
        postMessage: i
    }, (new $I.JNOYHJ).TFDQYD(this, this.LSSYLK), null)
}

function EditForum(n, t, i, r, u, f) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("EditForum", {
        forumID: n,
        newTitle: t,
        newDescription: i,
        roleIDs: r,
        readPermissions: u,
        writePermissions: f
    }, null, null)
}

function SetForcedThreadSubscriptions(n, t, i, r) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("SetForcedThreadSubscription", {
        forumID: n,
        threadIDs: t,
        roleIds: i,
        subscriptions: r
    }, null, null)
}

function EditThread(n, t, i, r, u) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("EditForumThread", {
        forumID: n,
        threadID: t,
        newTitle: i,
        isLocked: r,
        isSticky: u
    }, (new $I.JNOYHJ).TFDQYD(this, this.KBNNSD), null)
}

function EditPost(n, t, i, r) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("EditForumPost", {
        forumID: n,
        threadID: t,
        postID: i,
        newMessage: r
    }, (new $I.JNOYHJ).TFDQYD(this, this.EDMTPG), null)
}

function DeletePost(n, t, i) {
    var r = $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.NKXARS, 1), i);
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("DeleteForumPosts", {
        forumID: n,
        threadID: t,
        postIDs: r
    }, null, null)
}

function DeleteThread(n, t) {
    var i = $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.NKXARS, 1), t);
    this.POZFOB(n, i)
}

function DeleteThreads(n, t) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("DeleteForumThreads", {
        forumID: n,
        threadIDs: t
    }, (new $I.JNOYHJ).TFDQYD(this, this.VTWFNI), t.length)
}

function DeleteForums(n) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("DeleteForums", {
        forumIDs: n
    }, null, null)
}

function StartGetForumThreadCount(n) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("GetForumThreadCount", {
        forumId: n
    }, (new $I.JNOYHJ).TFDQYD(this, this.COFTVO), n)
}

function OnForumThreadCountReceived(n, t) {
    this.XGHFCA != null && this.XGHFCA.FPWMHM(n, t)
}

function StartGetForumThreadData(n, t, i) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("GetForumThreads", {
        forumId: n,
        skip: t,
        take: i
    }, (new $I.JNOYHJ).TFDQYD(this, this.UWOZDC), n)
}

function OnForumThreadDataReceived(n, t) {
    var r = t,
        i, u;
    if (this.ZFVDRT.l = [], r != null)
        for (i = 0; i < r.length; i++) u = (new $I.YOVHWA).SLPWTI(), u.AUUVIV(r[i]), this.ZFVDRT.l.push(u);
    this.JYOHEV != null && this.JYOHEV.QDGPPU(n)
}

function StartGetForumThreadDataOfInterest(n, t, i) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("GetForumThreadsOfInterest", {
        forumId: n,
        threadId: t,
        take: i
    }, (new $I.JNOYHJ).TFDQYD(this, this.VRMUWE), n)
}

function OnForumThreadDataOfInterestReceived(n, t) {
    var i = t,
        u, f, r, e;
    if (this.ZFVDRT.l = [], u = 0, f = 0, i != null)
        for (u = i.tc, f = i.pn, r = 0; r < i.t.length; r++) e = (new $I.YOVHWA).SLPWTI(), e.AUUVIV(i.t[r]), this.ZFVDRT.l.push(e);
    this.BQJVYH != null && this.BQJVYH.KMSFTH(n, u, f)
}

function StartGetForumPostCount(n, t, i, r) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("GetForumPostCount", {
        forumID: n,
        threadID: t,
        updateViewCount: i,
        filterFlags: r
    }, (new $I.JNOYHJ).TFDQYD(this, this.KVTKCT), t)
}

function OnForumPostCountReceived(n, t) {
    var i = t,
        r = 0,
        u = -1;
    i != null && (r = i.c, u = i.fu);
    this.UVZAXH != null && this.UVZAXH.KMSFTH(n, r, u)
}

function StartGetForumPostData(n, t, i, r, u, f, e) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("GetForumPostsData", {
        forumID: n,
        threadID: t,
        skip: i,
        take: r,
        sort: u,
        ascending: f,
        filterFlags: e
    }, (new $I.JNOYHJ).TFDQYD(this, this.IERBTY), t)
}

function OnForumPostDataReceived(n, t) {
    var r = t,
        i;
    if (this.EYRVPI.l = [], r != null)
        for (i = 0; i < r.length; i++) this.EYRVPI.l.push((new $I.GDYWHR).HSKZPF(r[i]));
    this.OHNFIH != null && this.OHNFIH.QDGPPU(n)
}

function SubscribeToForum(n, t) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("SetForumSubscription", {
        forumID: n,
        subscription: t
    }, (new $I.JNOYHJ).TFDQYD(this, this.XQJCBI), "SUBSCRIBE TO FORUM")
}

function SubscribeToThread(n, t, i) {
    var r = $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.NKXARS, 1), t);
    this.WHSQPI(n, r, i)
}

function SubscribeToThreads(n, t, i) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("SetThreadSubscription", {
        forumID: n,
        threadIDs: t,
        subscription: i
    }, null, null)
}

function SubscribeThreadForced(n, t, i, r) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("SetForcedThreadSubscription", {
        forumID: n,
        threadIDs: t,
        roleIds: i,
        subscriptions: r
    }, null, null)
}

function SubscribeForumForced(n, t, i) {
    var r = $I.UDAQKL.PDYBXI($I.UDAQKL.DNVCCU($I.NKXARS, 1), n);
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("SetForcedForumSubscription", {
        forumIDs: r,
        roleIds: t,
        subscriptions: i
    }, null, null)
}

function MarkForumsAsRead(n) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("SetForumsAsRead", {
        forumIDs: n
    }, (new $I.JNOYHJ).TFDQYD(this, this.NNMMUP), null)
}

function MarkThreadsAsRead(n, t) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("SetThreadsAsRead", {
        forumID: n,
        threadIDs: t
    }, null, null)
}

function OnDeleteThreads(n, t) {
    n != t && this.ZZSMVG != null && this.ZZSMVG.XOCOML(n - t)
}

function OnEditThread(n, t) {
    var i = t
}

function OnCreatePost(n, t) {
    var i = t;
    this.IUKBYY != null && this.IUKBYY.FOWLVG()
}

function OnCreateThread(n, t) {
    var i = t;
    this.FGCAGL != null && this.FGCAGL.FOWLVG()
}

function OnEditPost(n, t) {
    var i = t
}

function OnMarkForumsAsRead(n, t) {
    var i = t
}

function OnActionDone() {}

function IsOwnAllianceForum(n) {
    for (var t = 0; t < this.BBJXPZ().l.length; t++)
        if (this.BBJXPZ().l[t].Id == n) return !0;
    return !1
}

function IsSharedForum(n) {
    for (var r, t, i = 0; i < this.UTGMTI().l.length; i++)
        for (r = this.UTGMTI().l[i], t = 0; t < r.l.length; t++)
            if (r.l[t].Id == n) return !0;
    return !1
}

function GetForumIdByType(n) {
    var i, r, t;
    switch (n) {
        case $I.WKWDGR.WorldForumRecruitment:
        case $I.WKWDGR.WorldForumHelp:
            for (i = this.QZXCBV().l, t = 0; t < i.length; t++)
                if (r = i[t], r.eForumType == n) return r.Id;
            return 0
    }
    return 0
}

function get_Forums() {
    return this.KMVHZA
}

function get_ForumsWorld() {
    return this.UEPEBK
}

function get_ForumsAlliance() {
    return this.KFZRXH
}

function get_ForumsSharedLists() {
    return this.PAOEEQ
}

function get_ThreadPostInfos() {
    return this.EYRVPI
}

function get_ThreadInfos() {
    return this.ZFVDRT
}

function get_UnreadItems() {
    return this.JQNTAN
}

function add_Change(n) {
    var t = {},
        i, r = this.HWIKOP,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.HWIKOP, t.$r = $I.TSJVQL.JXWJWI($I.JWUEBK, u, i, t), this.HWIKOP = t.a, t.$r); while (r != i)
}

function remove_Change(n) {
    var t = {},
        i, r = this.HWIKOP,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.HWIKOP, t.$r = $I.TSJVQL.JXWJWI($I.JWUEBK, u, i, t), this.HWIKOP = t.a, t.$r); while (r != i)
}

function add_ThreadsChange(n) {
    var t = {},
        i, r = this.WRCTCU,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.WRCTCU, t.$r = $I.TSJVQL.JXWJWI($I.FCVVZG, u, i, t), this.WRCTCU = t.a, t.$r); while (r != i)
}

function remove_ThreadsChange(n) {
    var t = {},
        i, r = this.WRCTCU,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.WRCTCU, t.$r = $I.TSJVQL.JXWJWI($I.FCVVZG, u, i, t), this.WRCTCU = t.a, t.$r); while (r != i)
}

function add_ThreadCountFetched(n) {
    var t = {},
        i, r = this.XGHFCA,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.XGHFCA, t.$r = $I.TSJVQL.JXWJWI($I.TJXWZR, u, i, t), this.XGHFCA = t.a, t.$r); while (r != i)
}

function remove_ThreadCountFetched(n) {
    var t = {},
        i, r = this.XGHFCA,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.XGHFCA, t.$r = $I.TSJVQL.JXWJWI($I.TJXWZR, u, i, t), this.XGHFCA = t.a, t.$r); while (r != i)
}

function add_ThreadsFetched(n) {
    var t = {},
        i, r = this.JYOHEV,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.JYOHEV, t.$r = $I.TSJVQL.JXWJWI($I.SSYWXX, u, i, t), this.JYOHEV = t.a, t.$r); while (r != i)
}

function remove_ThreadsFetched(n) {
    var t = {},
        i, r = this.JYOHEV,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.JYOHEV, t.$r = $I.TSJVQL.JXWJWI($I.SSYWXX, u, i, t), this.JYOHEV = t.a, t.$r); while (r != i)
}

function add_ThreadPostsFetched(n) {
    var t = {},
        i, r = this.OHNFIH,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.OHNFIH, t.$r = $I.TSJVQL.JXWJWI($I.QFLJHN, u, i, t), this.OHNFIH = t.a, t.$r); while (r != i)
}

function remove_ThreadPostsFetched(n) {
    var t = {},
        i, r = this.OHNFIH,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.OHNFIH, t.$r = $I.TSJVQL.JXWJWI($I.QFLJHN, u, i, t), this.OHNFIH = t.a, t.$r); while (r != i)
}

function add_ThreadPostCountFetched(n) {
    var t = {},
        i, r = this.UVZAXH,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.UVZAXH, t.$r = $I.TSJVQL.JXWJWI($I.GNCHSY, u, i, t), this.UVZAXH = t.a, t.$r); while (r != i)
}

function remove_ThreadPostCountFetched(n) {
    var t = {},
        i, r = this.UVZAXH,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.UVZAXH, t.$r = $I.TSJVQL.JXWJWI($I.GNCHSY, u, i, t), this.UVZAXH = t.a, t.$r); while (r != i)
}

function add_ThreadPostCreated(n) {
    var t = {},
        i, r = this.IUKBYY,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.IUKBYY, t.$r = $I.TSJVQL.JXWJWI($I.JIIZZC, u, i, t), this.IUKBYY = t.a, t.$r); while (r != i)
}

function remove_ThreadPostCreated(n) {
    var t = {},
        i, r = this.IUKBYY,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.IUKBYY, t.$r = $I.TSJVQL.JXWJWI($I.JIIZZC, u, i, t), this.IUKBYY = t.a, t.$r); while (r != i)
}

function add_ThreadCreated(n) {
    var t = {},
        i, r = this.FGCAGL,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.FGCAGL, t.$r = $I.TSJVQL.JXWJWI($I.HXLZGV, u, i, t), this.FGCAGL = t.a, t.$r); while (r != i)
}

function remove_ThreadCreated(n) {
    var t = {},
        i, r = this.FGCAGL,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.FGCAGL, t.$r = $I.TSJVQL.JXWJWI($I.HXLZGV, u, i, t), this.FGCAGL = t.a, t.$r); while (r != i)
}

function add_ThreadsDeleted(n) {
    var t = {},
        i, r = this.LENMJB,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.LENMJB, t.$r = $I.TSJVQL.JXWJWI($I.KQABDT, u, i, t), this.LENMJB = t.a, t.$r); while (r != i)
}

function remove_ThreadsDeleted(n) {
    var t = {},
        i, r = this.LENMJB,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.LENMJB, t.$r = $I.TSJVQL.JXWJWI($I.KQABDT, u, i, t), this.LENMJB = t.a, t.$r); while (r != i)
}

function add_ThreadsDeletionError(n) {
    var t = {},
        i, r = this.ZZSMVG,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.ZZSMVG, t.$r = $I.TSJVQL.JXWJWI($I.GQARVY, u, i, t), this.ZZSMVG = t.a, t.$r); while (r != i)
}

function remove_ThreadsDeletionError(n) {
    var t = {},
        i, r = this.ZZSMVG,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.ZZSMVG, t.$r = $I.TSJVQL.JXWJWI($I.GQARVY, u, i, t), this.ZZSMVG = t.a, t.$r); while (r != i)
}

function add_ThreadsOfInterestFetched(n) {
    var t = {},
        i, r = this.BQJVYH,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.BQJVYH, t.$r = $I.TSJVQL.JXWJWI($I.NIDDPK, u, i, t), this.BQJVYH = t.a, t.$r); while (r != i)
}

function remove_ThreadsOfInterestFetched(n) {
    var t = {},
        i, r = this.BQJVYH,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.BQJVYH, t.$r = $I.TSJVQL.JXWJWI($I.NIDDPK, u, i, t), this.BQJVYH = t.a, t.$r); while (r != i)
}