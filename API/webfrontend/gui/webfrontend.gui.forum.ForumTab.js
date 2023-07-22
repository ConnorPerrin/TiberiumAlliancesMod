webfront prototypeend.gui.forum.ForumTab[16714 - 0][object ForumTypesObject][object eColumnsObject][object urlsObject][object decosObject][object colorsObject][object eBreadcrumbsObject]
function buildBreadcrumbs(i) {
    var f = i && i >= webfrontend.gui.forum.ForumTab.eBreadcrumbs.category && i <= webfrontend.gui.forum.ForumTab.eBreadcrumbs.post ? i : webfrontend.gui.forum.ForumTab.eBreadcrumbs.post,
        r = {};
    return r.cont = new qx.ui.container.Composite(new qx.ui.layout.HBox(5).set({
        alignY: t
    })).set({
        allowGrowX: !0,
        decorator: hi,
        paddingLeft: 10,
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 15
    }), r.lblcategorytag = new qx.ui.basic.Label(ui).set({
        textColor: u
    }), r.lblcategory = new qx.ui.basic.Label(pi).set({
        textColor: u,
        minWidth: 30,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            rich: !0,
            maxWidth: 250
        }),
        textAlign: n,
        font: f == webfrontend.gui.forum.ForumTab.eBreadcrumbs.category ? h : l,
        cursor: f > webfrontend.gui.forum.ForumTab.eBreadcrumbs.category ? o : s
    }), r.cont.add(r.lblcategorytag), r.cont.add(r.lblcategory, {
        flex: 1
    }), f >= webfrontend.gui.forum.ForumTab.eBreadcrumbs.forum && (r.lblforumtag = new qx.ui.basic.Label(p).set({
        textColor: u
    }), r.lblforum = new qx.ui.basic.Label(gr).set({
        textColor: u,
        minWidth: 30,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            rich: !0,
            maxWidth: 250
        }),
        textAlign: n,
        font: f == webfrontend.gui.forum.ForumTab.eBreadcrumbs.forum ? h : l,
        cursor: f > webfrontend.gui.forum.ForumTab.eBreadcrumbs.forum ? o : s
    }), r.cont.add(r.lblforumtag), r.cont.add(r.lblforum, {
        flex: f == webfrontend.gui.forum.ForumTab.eBreadcrumbs.forum ? 10 : 1
    })), f >= webfrontend.gui.forum.ForumTab.eBreadcrumbs.thread && (r.lblthreadtag = new qx.ui.basic.Label(p).set({
        textColor: u
    }), r.lblthread = new qx.ui.basic.Label(wr).set({
        textColor: u,
        minWidth: 30,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            rich: !0,
            maxWidth: 250
        }),
        textAlign: n,
        font: f == webfrontend.gui.forum.ForumTab.eBreadcrumbs.thread ? h : l,
        cursor: f > webfrontend.gui.forum.ForumTab.eBreadcrumbs.thread ? o : s
    }), r.cont.add(r.lblthreadtag), r.cont.add(r.lblthread, {
        flex: f == webfrontend.gui.forum.ForumTab.eBreadcrumbs.thread ? 10 : 1
    })), f >= webfrontend.gui.forum.ForumTab.eBreadcrumbs.post && (r.lblposttag = new qx.ui.basic.Label(p).set({
        textColor: u
    }), r.lblpost = new qx.ui.basic.Label(gt).set({
        textColor: u,
        minWidth: 30,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            rich: !0,
            maxWidth: 250
        }),
        textAlign: n,
        font: f == webfrontend.gui.forum.ForumTab.eBreadcrumbs.post ? h : l,
        cursor: f > webfrontend.gui.forum.ForumTab.eBreadcrumbs.post ? o : s
    }), r.cont.add(r.lblposttag), r.cont.add(r.lblpost, {
        flex: f == webfrontend.gui.forum.ForumTab.eBreadcrumbs.post ? 10 : 1
    })), r
}