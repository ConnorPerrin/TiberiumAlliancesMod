function invitePlayerToAlliance(n, t, i) {
    var r = ClientLib.Data.MainData.GetInstance().get_Alliance(),
        u = r.get_Name();
    return n && n.length > 0 && r.get_Exists() ? (ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(e, {
        inviteeName: n
    }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, {
        playerName: n,
        showOkayMsg: t,
        allianceName: u,
        label: i
    }, webfrontend.gui.alliance.AllianceUtil.onAllianceInvite), null), !0) : !1
}

function onAllianceInvite(n, r) {
    var e = qx.core.Init.getApplication(),
        o, v;
    if (r != null) {
        if (v = !1, r != 0) {
            o = qx.lang.String.format(e.tr(f), [this.playerName, this.allianceName]) + ht;
            switch (r) {
                case ClientLib.Base.EErrorCode.Fail:
                    o += e.tr(h);
                    break;
                case ClientLib.Base.EErrorCode.InvalidArguments:
                    o += e.tr(a);
                    break;
                case ClientLib.Base.EErrorCode.DuplicateName:
                    o += e.tr(y);
                    break;
                case ClientLib.Base.EErrorCode.InvalidName:
                    o += e.tr(ot);
                    break;
                case ClientLib.Base.EErrorCode.InsufficientRights:
                    o += e.tr(nt);
                    break;
                case ClientLib.Base.EErrorCode.AllianceInvitationLimitExceeded:
                    o += e.tr(s);
                    break;
                case ClientLib.Base.EErrorCode.AllianceMemberLimitExceeded:
                    o += e.tr(et);
                    break;
                case ClientLib.Base.EErrorCode.DuplicateInvitation:
                    o += e.tr(c);
                    break;
                case ClientLib.Base.EErrorCode.PlayerAlreadyInAlliance:
                    o += e.tr(u);
                    break;
                case ClientLib.Base.EErrorCode.NotSameFaction:
                    o += e.tr(l);
                    break;
                default:
                    o += e.tr(st) + r.toString()
            }
        } else v = !0;
        v ? (this.label != null && this.label.setValue(t), this.showOkayMsg && webfrontend.gui.MessageBox.messageBox({
            title: e.tr(i),
            text: qx.lang.String.format(e.tr(tt), [this.playerName, this.allianceName]),
            buttons: 1
        })) : webfrontend.gui.MessageBox.messageBox({
            title: e.tr(i),
            text: o,
            width: 400,
            textRich: !0,
            buttons: 1
        })
    }
}

function getAllianceRoleTranslation(i) {
    var u = webfrontend.gui.alliance.AllianceUtil.__zK,
        f;
    return u == null && (f = qx.core.Init.getApplication(), u = {}, u[p] = f.tr(n), u[r] = f.tr(n), u[b] = f.tr(rt), u[v] = f.tr(o), u[ct] = f.tr(lt), u[w] = f.tr(at), u[d] = f.tr(ut), u[g] = f.tr(k), webfrontend.gui.alliance.AllianceUtil.__zK = u), u.hasOwnProperty(i) ? u[i] : t
}

function openLostRightsPopup() {
    var n = qx.core.Init.getApplication();
    webfrontend.gui.MessageBox.messageBox({
        title: n.tr(it),
        text: n.tr(ft),
        buttons: 1
    })
}