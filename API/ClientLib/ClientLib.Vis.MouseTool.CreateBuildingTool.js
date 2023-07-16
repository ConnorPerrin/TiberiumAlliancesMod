[object prototypeObject]
function MoveBuilding(n, t, i) {
    var f, e, o;
    if (i != null) {
        var r = $I.ILHIOR.GILABD(),
            u = r.VKUOKS(),
            s = i.BOXICG(n, t);
        s ? (f = $I.BUEVKL.QGLUJV().VXAMCA().citylayer.be, r.VROCEG("audio/ui/Build_place"), f >= 0 && u.UWUJTK() && (e = u.BPLSSC(f, (n + 1) * u.VVGOEM(), (t + 1) * u.MWRYXH(), null), e != null && e.TYDVYV(55))) : r.RYKGLY("FactionSound/CantDeploHere");
        o = r.VHVMDT(9);
        o.ASNIVQ();
        r.WHYMSW() && !s || o.UJJRVA() || r.CWOVDH(-1, null)
    }
}