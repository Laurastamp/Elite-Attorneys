!function(e) {
    "use strict";
    let t = 0;
    function o() {
        let e;
        e = "https://cdn.iubenda.com/cookie_solution/iubenda_cs/1.51.0/core-" + _iub.csConfiguration.lang + ".js";
        let i = document.querySelector('script[src="' + e + '"]');
        if (!i) {
            i = document.createElement("script");
            const n = document.querySelector("script");
            i.src = e,
            i.setAttribute("charset", "UTF-8"),
            i.addEventListener("error", (function() {
                ++t,
                t < 5 && (i.parentNode.removeChild(i),
                setTimeout(o, 10))
            }
            )),
            n.parentNode.insertBefore(i, n)
        }
    }
    _iub.invTcfC = Date.now() - 31104e6;
    _iub.csConfigLegacy = !1,
    _iub.GVL2 = _iub.GVL2 || 218,
    _iub.GVL3 = _iub.GVL3 || 21,
    _iub.vendorsCountGVL3 = _iub.vendorsCountGVL3 || 716,
    o(),
    e.loadCore = o,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}({});
