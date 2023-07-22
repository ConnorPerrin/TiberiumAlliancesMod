function fireTealiumTrackEvent() {
    var o = ClientLib.Data.MainData.GetInstance().get_Player().get_IdNucleus(),
        e = webfrontend.phe.cnc.data.Analytics.tag_url_tealium,
        f;
    o != 0 && typeof window[e] == u && window[e].length > 0 && (window.utag_data = {
        userid: o.toString(),
        intcmp: n,
        ab_test_var: n
    }, f = document.createElement(i), f.setAttribute(r, t), f.src = window[e], f.async = !0, document.body.appendChild(f))
}