!function() {
    "use strict";
    function e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function t(t) {
        for (var n = 1; n < arguments.length; n++) {
            var i = null != arguments[n] ? arguments[n] : {};
            n % 2 ? e(Object(i), !0).forEach((function(e) {
                r(t, e, i[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }
            ))
        }
        return t
    }
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function a(e, t, n) {
        return t && o(e.prototype, t),
        n && o(e, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function s(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        t && l(e, t)
    }
    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function l(e, t) {
        return (l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function p(e, t) {
        if (null == e)
            return {};
        var n, i, o = function(e, t) {
            if (null == e)
                return {};
            var n, i, o = {}, a = Object.keys(e);
            for (i = 0; i < a.length; i++)
                n = a[i],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (i = 0; i < a.length; i++)
                n = a[i],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function u(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t))
            return t;
        if (void 0 !== t)
            throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e)
    }
    function d(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, i = c(e);
            if (t) {
                var o = c(this).constructor;
                n = Reflect.construct(i, arguments, o)
            } else
                n = i.apply(this, arguments);
            return u(this, n)
        }
    }
    function h(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n)
                return;
            var i, o, a = [], r = !0, s = !1;
            try {
                for (n = n.call(e); !(r = (i = n.next()).done) && (a.push(i.value),
                !t || a.length !== t); r = !0)
                    ;
            } catch (e) {
                s = !0,
                o = e
            } finally {
                try {
                    r || null == n.return || n.return()
                } finally {
                    if (s)
                        throw o
                }
            }
            return a
        }(e, t) || b(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function f(e) {
        return function(e) {
            if (Array.isArray(e))
                return m(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || b(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function b(e, t) {
        if (e) {
            if ("string" == typeof e)
                return m(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(e, t) : void 0
        }
    }
    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++)
            i[n] = e[n];
        return i
    }
    function g(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = b(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var i = 0
                  , o = function() {};
                return {
                    s: o,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, r = !0, s = !1;
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next();
                return r = e.done,
                e
            },
            e: function(e) {
                s = !0,
                a = e
            },
            f: function() {
                try {
                    r || null == n.return || n.return()
                } finally {
                    if (s)
                        throw a
                }
            }
        }
    }
    window._iub = window._iub || {};
    var v = function(e) {
        return null == e ? [] : Array.isArray(e) ? e : [e]
    }
      , y = function(e, t) {
        if (!e || !t)
            return !1;
        if (e.length !== t.length)
            return !1;
        var n = e.slice().sort()
          , i = t.slice().sort();
        return JSON.stringify(n) === JSON.stringify(i)
    }
      , k = function(e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === {}.toString.call(e)
    }
      , w = function e(t, i, o, a) {
        var r, s = t || {}, c = i || {};
        return o ? r = s : (r = k(s) ? [] : {},
        Object.keys(s).forEach((function(e) {
            r[e] = s[e]
        }
        ))),
        a ? Object.keys(c).forEach((function(t) {
            "object" !== n(c[t]) || null === c[t] || c[t]instanceof HTMLElement ? r[t] = c[t] : ("object" !== n(r[t]) && (r[t] = k(c[t]) ? [] : {}),
            r[t] = e(r[t], c[t], o, !0))
        }
        )) : Object.keys(c).forEach((function(e) {
            r[e] = c[e]
        }
        )),
        r
    }
      , C = function(e, t) {
        return w(e, t, !1, !1)
    }
      , x = function(e, t) {
        return w(e, t, !1, !0)
    }
      , P = function(e, t) {
        return w(e, t, !0, !0)
    }
      , _ = function(e, t) {
        return w({}, e, !0, t)
    }
      , S = function e(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          , o = Object.keys(t)
          , a = [];
        return o.forEach((function(o) {
            if ("object" === n(t[o]) && t[o]) {
                var r = e(t[o], [].concat(f(i), [o]));
                a = a.concat(r)
            } else {
                var s = [].concat(f(i), [o]).join(".");
                a.push(s)
            }
        }
        )),
        a
    }
      , A = function() {
        return "template" === _iub.cs.options.googleConsentMode ? (_iub.gtmDataLayer = _iub.gtmDataLayer || [],
        _iub.gtmDataLayer.pushCommand = _iub.gtmDataLayer.pushCommand || _iub.gtmDataLayer.push,
        _iub.gtmDataLayer) : window.dataLayer
    }
      , B = function() {
        for (var e = A(), t = arguments.length, n = new Array(t), i = 0; i < t; i++)
            n[i] = arguments[i];
        if ("template" === _iub.cs.options.googleConsentMode)
            e.pushCommand(n);
        else if ("function" == typeof window.gtag) {
            var o;
            (o = window).gtag.apply(o, n)
        } else
            void 0 !== e && e.push(n)
    }
      , O = !0
      , I = {
        analytics_storage: 4,
        ad_storage: 5,
        functionality_storage: 2,
        personalization_storage: 3,
        security_storage: 2
    }
      , T = !1
      , L = !1
      , E = function(e) {
        if (T)
            T = !1;
        else {
            L = !0;
            var t = {};
            Object.keys(I).forEach((function(n) {
                var i = I[n];
                e ? e.purposes ? t[n] = e.purposes[i] : t[n] = e.consent : t[n] = !0
            }
            )),
            function(e) {
                var t = _iub.cs.options.googleConsentMode;
                if (!1 !== t)
                    if ("template" !== t) {
                        var n = function(e) {
                            if (!e || !e.length)
                                return null;
                            for (var t = 0; t < e.length; t++) {
                                var n = e[t];
                                if (n && "consent" === n[0] && "default" === n[1])
                                    return n[2]
                            }
                            return null
                        }(A())
                          , i = !O
                          , o = {};
                        Object.keys(e).forEach((function(t) {
                            var a = e[t];
                            if ("undefined" !== a)
                                if (a)
                                    o[t] = "granted";
                                else if (i) {
                                    var r;
                                    o[t] = null !== (r = n && n[t]) && void 0 !== r ? r : "denied"
                                }
                        }
                        )),
                        0 !== Object.keys(o).length && (B("consent", "update", o),
                        O = !1)
                    } else
                        B("updateConsent", e)
            }(t),
            _iub.cs.options.emitGtmEvents && window.dataLayer && window.dataLayer.push({
                event: "iubenda_gtm_consent_event"
            })
        }
    }
      , N = function() {
        L || (_iub.cs.state.needsConsent ? E(_iub.cs.consent) : E(),
        T = !0)
    }
      , D = {
        start: function() {
            !0 === _iub.cs.options.googleConsentMode && (window.dataLayer = window.dataLayer || []),
            "template" !== this.cs.options.googleConsentMode && B("set", "developer_id.dZTJkMz", !0),
            this.cs.on("callback.before.onPreferenceExpressedOrNotNeeded", E),
            this.cs.once("before-activation", N)
        }
    };
    function F(e, t) {
        return ([].slice.call(new Uint8Array(t)).join("") + e).slice(-t)
    }
    function V(e, t, n) {
        (n || "boolean" == typeof n) && (e[t] = n)
    }
    var z = function() {
        function e(t) {
            var n = t.sendConsent
              , o = t.getBannerHtml
              , a = t.getPageUrl
              , r = t.ConsStorage;
            i(this, e),
            this.sendConsent = n,
            this.getBannerHtml = o,
            this.getPageUrl = a,
            this.ConsStorage = r,
            this.config = {
                cookiePolicyId: void 0,
                enableCcpa: void 0
            }
        }
        return a(e, [{
            key: "start",
            value: function() {
                this.storage = new this.ConsStorage("_iub_cs_cons-".concat(this.config.cookiePolicyId)),
                this.cs.on("callback.before.onReady", this.onReady.bind(this)),
                this.cs.on("callback.before.onPreferenceFirstExpressed", this.onPreferenceFirstExpressed.bind(this))
            }
        }, {
            key: "sendPreferences",
            value: function(e, t) {
                var n = this
                  , i = e.scoped_id;
                this.sendConsent(this.cs.options.consApiKey, e, (function(e, o) {
                    e ? n.logger.error(e || "failed to send data to ConS server") : (o !== i && n.logger.error("ConS id mismatch. expected ".concat(i, " but received ").concat(o)),
                    null == t || t.call(null, o))
                }
                ))
            }
        }, {
            key: "getCurrentPreferences",
            value: function() {
                var e, t = this.cs.consent, n = t.consent, i = t.purposes, o = {}, a = this.cs.usPurposes ? this.cs.usPurposes.getPreferences() : null;
                return V(o, "consent", n),
                V(o, "purposes", i),
                V(o, "tcfv2", this.cs.state.tcfv2String),
                V(o, "uspr", a),
                V(o, "gac", null === (e = this.cs.customPreferences) || void 0 === e ? void 0 : e.gac),
                V(o, "ccpa", this.config.enableCcpa ? this.cs.getUspString() : void 0),
                o
            }
        }, {
            key: "getCurrentProofs",
            value: function() {
                var e = this
                  , t = {};
                return Object.keys(this.cs.consent).forEach((function(n) {
                    "cons" !== n && (t[n] = e.cs.consent[n])
                }
                )),
                [{
                    content: JSON.stringify(t),
                    form: this.bannerHTML
                }]
            }
        }, {
            key: "makePayload",
            value: function() {
                var e, t = this.cs.consent, n = t.timestamp, i = t.cons, o = (void 0 === i ? {} : i).rand;
                return {
                    scoped_id: function(e, t) {
                        var n = new Date(e)
                          , i = F(n.getUTCFullYear(), 4)
                          , o = F(n.getUTCMonth() + 1, 2)
                          , a = F(n.getUTCDate(), 2)
                          , r = F(n.getUTCHours(), 2)
                          , s = F(n.getUTCMinutes(), 2)
                          , c = F(n.getSeconds(), 2)
                          , l = F(n.getMilliseconds(), 3);
                        return "".concat(i, "/").concat(o, "/").concat(a, "/").concat(r, "/").concat(s, "/").concat(c, "/").concat(l, "/").concat(t)
                    }(n, void 0 === o ? (e = window.crypto || window.msCrypto,
                    [].slice.call(e.getRandomValues(new Uint8Array(3))).map((function(e) {
                        return F(e.toString(16), 2)
                    }
                    )).join("")) : o),
                    legal_notices: [{
                        identifier: "cookie_policy"
                    }],
                    preferences: this.getCurrentPreferences(),
                    proofs: this.getCurrentProofs(),
                    page_url: this.getPageUrl()
                }
            }
        }, {
            key: "updateState",
            value: function(e) {
                var t = e.id
                  , n = e.saving
                  , i = e.returnedId
                  , o = {
                    rand: t.match(/\/([A-Fa-f0-9]+)$/)[1]
                };
                void 0 !== n && (o.saving = n),
                t !== i && (o.returnedId = i),
                this.cs.consent.cons = o,
                this.cs.cookie.storeConsent()
            }
        }, {
            key: "handleSuccessfulSend",
            value: function(e, t, n) {
                var i = t.storage
                  , o = t.cookie;
                i && this.storage.remove(e),
                o && this.updateState({
                    id: e,
                    returnedId: n
                }),
                this.cs.fireCallback("onCplSaved")
            }
        }, {
            key: "retrySending",
            value: function() {
                var e, t, n = this, i = this.storage.items.map((function(e) {
                    return {
                        payload: e,
                        cb: function() {
                            return n.handleSuccessfulSend(e.scoped_id, {
                                storage: !0
                            })
                        }
                    }
                }
                ));
                if (null === (e = this.cs.consent) || void 0 === e || null === (t = e.cons) || void 0 === t ? void 0 : t.saving) {
                    var o = this.makePayload()
                      , a = o.scoped_id
                      , r = i.find((function(e) {
                        return e.payload.scoped_id === a
                    }
                    ));
                    r ? r.cb = function(e) {
                        return n.handleSuccessfulSend(a, {
                            storage: !0,
                            cookie: !0
                        }, e)
                    }
                    : i.push({
                        payload: o,
                        cb: function(e) {
                            return n.handleSuccessfulSend(a, {
                                cookie: !0
                            }, e)
                        }
                    })
                }
                i.forEach((function(e) {
                    var t = e.payload
                      , i = e.cb;
                    return n.sendPreferences(t, i)
                }
                ))
            }
        }, {
            key: "onReady",
            value: function() {
                this.cs.options.consApiKey && (this.bannerHTML = this.getBannerHtml(),
                this.retrySending())
            }
        }, {
            key: "onPreferenceFirstExpressed",
            value: function() {
                var e = this;
                if (this.cs.options.consApiKey && !this.cs.options.previewMode) {
                    var t = this.makePayload()
                      , n = t.scoped_id;
                    this.updateState({
                        id: n,
                        saving: !0
                    }),
                    this.storage.add(t),
                    this.sendPreferences(t, (function(t) {
                        e.handleSuccessfulSend(n, {
                            storage: !0,
                            cookie: !0
                        }, t)
                    }
                    ))
                }
            }
        }]),
        e
    }();
    function R(e, t) {
        for (var n = 0; n < e.length; ++n)
            if (t(e[n]))
                return n;
        return -1
    }
    var j = function() {
        function e(t) {
            i(this, e),
            this.storageKey = t
        }
        return a(e, [{
            key: "add",
            value: function(e) {
                var t = this.items
                  , n = R(t, (function(t) {
                    return t.scoped_id === e.scoped_id
                }
                ));
                -1 !== n ? t[n] = e : t.push(e),
                this.items = t
            }
        }, {
            key: "remove",
            value: function(e) {
                var t = this.items
                  , n = R(t, (function(t) {
                    return t.scoped_id === e
                }
                ));
                -1 !== n && t.splice(n, 1),
                this.items = t
            }
        }, {
            key: "items",
            get: function() {
                var e;
                try {
                    e = JSON.parse(localStorage.getItem(this.storageKey))
                } catch (e) {}
                return e || []
            },
            set: function(e) {
                try {
                    0 === e.length ? localStorage.removeItem(this.storageKey) : localStorage.setItem(this.storageKey, JSON.stringify(e))
                } catch (e) {}
            }
        }]),
        e
    }()
      , M = function() {
        function e() {
            i(this, e),
            this.userAgent = navigator.userAgent,
            this.versionSearchString = "",
            this.dataBrowser = [{
                string: this.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            }, {
                string: this.userAgent,
                subString: "MSIE",
                identity: "Explorer"
            }, {
                string: this.userAgent,
                subString: "Trident",
                identity: "Explorer"
            }, {
                string: this.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            }, {
                string: this.userAgent,
                subString: "Safari",
                identity: "Safari"
            }, {
                string: this.userAgent,
                subString: "Opera",
                identity: "Opera"
            }],
            this.browser = this.searchString(this.dataBrowser) || "Other",
            this.version = this.searchVersion(this.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown"
        }
        return a(e, [{
            key: "searchString",
            value: function(e) {
                var t = e.filter((function(e) {
                    return -1 !== e.string.indexOf(e.subString)
                }
                ))
                  , n = null;
                return t.length && (this.versionSearchString = t[0].subString,
                n = t[0].identity),
                n
            }
        }, {
            key: "searchVersion",
            value: function(e) {
                var t = e.indexOf(this.versionSearchString);
                if (-1 === t)
                    return null;
                var n = e.indexOf("rv:");
                return "Trident" === this.versionSearchString && -1 !== n ? parseFloat(e.substring(n + 3)) : parseFloat(e.substring(t + this.versionSearchString.length + 1))
            }
        }, {
            key: "isBotAndShouldSkipBots",
            value: function() {
                return this.isBot() && !this.shouldNotSkipBots()
            }
        }, {
            key: "shouldNotSkipBots",
            value: function() {
                return /(^\?|&)iub_do_not_skip_bots=true(&|$)/i.test(location.search)
            }
        }, {
            key: "isBot",
            value: function() {
                return new RegExp("(360Spider|A6-Indexer|Aboundex|acoonbot|AddThis|AdIdxBot|ADmantX|AdvBot|ahrefsbot|aihitbot|AISearchBot|antibot|Applebot|arabot|archive.org_bot|backlinkcrawler|baiduspider|bibnum.bnf|biglotron|Bingbot|BingPreview|binlar|blekkobot|blexbot|bnf.fr_bot|brainobot|BUbiNG|buzzbot|careerbot|CC Metadata Scaper|ccbot|changedetection|Chrome-Lighthouse|citeseerxbot|coccoc|Commons-HttpClient|content crawler spider|convera|crawler4j|CrystalSemanticsBot|curl|cXensebot|CyberPatrol|discobot|Domain Re-Animator Bot|domaincrawler|dotbot|drupact|DuckDuckBot|ec2linkfinder|edisterbot|elisabot|europarchive.org|exabot|ezooms|facebookexternalhit|Facebot|FAST Enterprise Crawler|FAST-WebCrawler|findlink|findthatfile|findxbot|fluffy|fr-crawler|g00g1e.net|gigablast|GingerCrawler|gnam gnam spider|Google favicon|Google-InspectionTool|Googlebot|Googlebot-Image|Googlebot-Mobile|Googlebot-News|Googlebot-Video|googlebot/|GoogleOther|grapeshot|GrapeshotCrawler|grub.org|gslfbot|heritrix|hotjar|httpunit|httrack|ia_archiver|ichiro|integromedb|intelium_bot|InterfaxScanBot|IOI|ip-web-crawler.com|ips-agent|it2media-domain-crawler|java|jyxobot|lb-spider|libwww|Linguee Bot|linkdex|lipperhey|Lipperhey SEO Service|Livelapbot|lssbot|lssrocketcrawler|ltx71|Mail.RU_Bot|MauiBot|Mediapartners-Google|MegaIndex|memorybot|MicrosoftPreview|MJ12bot|mlbot|msnbot|msrbot|NerdByNature.Bot|nerdybot|netresearchserver|ngbot|niki-bot|nutch|openindexspider|OrangeBot|page2rss|panscient|phpcrawl|postrank|proximic|psbot|purebot|Python-urllib|Qwantify|RetrevoPageAnalyzer|rogerbot|scribdbot|seekbot|SemanticScholarBot|SemrushBot|seokicks-robot|seznambot|SimpleCrawler|sistrix crawler|sitebot|siteexplorer.info|slurp|smtbot|sogou|spbot|speedy|Storebot-Google|summify|tagoobot|teoma|toplistbot|turnitinbot|TweetmemeBot|twengabot|Twitterbot|urlappendbot|UsineNouvelleCrawler|voilabot|Voyager|wbsearchbot|web-archive-net.com.bot|webcompanycrawler|webcrawler|webmon|WeSEE:Search|wget|wocbot|woriobot|wotbox|xovibot|y!j-asr|yacybot|yahoo|yandex|yandexbot|yanga|yeti|yoozBot)","i").test(this.userAgent)
            }
        }, {
            key: "isMobile",
            value: function() {
                var e = new RegExp("(android|bbd+|meego).+mobile|avantgo|bada/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)/|plucker|pocket|psp|series(4|6)0|symbian|treo|up.(browser|link)|vodafone|wap|windows ce|xda|xiino","i")
                  , t = new RegExp("1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-","i")
                  , n = this.userAgent || navigator.vendor || window.opera;
                return e.test(n) || t.test(n.substr(0, 4))
            }
        }]),
        e
    }()
      , U = new M;
    var W = new z({
        sendConsent: function(e, t, n) {
            if (U.isBotAndShouldSkipBots())
                n("Send consent denied: bot detected");
            else {
                var i = "".concat("https://consent.iubenda.com/big_data/consent", "?apikey=").concat(e)
                  , o = JSON.stringify(t);
                "function" == typeof window.fetch ? function(e, t, n) {
                    var i;
                    fetch(e, {
                        method: "POST",
                        headers: {
                            "Content-Type": "text/plain"
                        },
                        body: t,
                        keepalive: !0
                    }).then((function(e) {
                        return i = e.status,
                        e.text()
                    }
                    )).then((function(e) {
                        return n({
                            response: e,
                            status: i
                        })
                    }
                    )).catch((function(e) {
                        return n({
                            err: e.toString()
                        })
                    }
                    ))
                }(i, o, a) : function(e, t, n) {
                    var i = new XMLHttpRequest;
                    i.onload = function() {
                        return n({
                            response: i.responseText,
                            status: i.status
                        })
                    }
                    ,
                    i.onerror = function() {
                        return n({
                            err: "Failed to send data to ConS server"
                        })
                    }
                    ,
                    i.open("POST", e),
                    i.setRequestHeader("Content-Type", "text/plain"),
                    i.send(t)
                }(i, o, a)
            }
            function a(e) {
                var t = e.err
                  , i = e.response
                  , o = e.status;
                if (t)
                    n(t);
                else if (o < 200 || o > 299)
                    try {
                        var a = JSON.parse(i).message;
                        n(a)
                    } catch (e) {
                        n("Failed to decode the response from ConS server")
                    }
                else
                    n(null, i)
            }
        },
        getBannerHtml: function() {
            var e, t;
            return null !== (e = null === (t = document.getElementById("iubenda-cs-banner")) || void 0 === t ? void 0 : t.innerHTML) && void 0 !== e ? e : "Couldn't retrieve banner HTML"
        },
        getPageUrl: function() {
            return location.href
        },
        ConsStorage: j
    })
      , H = function() {}
      , G = new (function() {
        function e() {
            i(this, e),
            this._registry = {},
            this._instances = {}
        }
        return a(e, [{
            key: "register",
            value: function(e, t) {
                t.install = t.install || H,
                this._registry[e] = t
            }
        }, {
            key: "createPluginInstance",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , i = arguments.length > 3 ? arguments[3] : void 0
                  , o = this._registry
                  , a = o[e];
                if (!a)
                    return null;
                var r = {};
                P(r, a),
                Object.setPrototypeOf(r, Object.getPrototypeOf(a)),
                r.cs = t,
                r.logger = i,
                r.config = r.config || {};
                var s = {};
                return Object.keys(n).forEach((function(e) {
                    r.config.hasOwnProperty(e) && (s[e] = n[e])
                }
                )),
                P(r.config, s),
                r
            }
        }, {
            key: "install",
            value: function(e, t, n) {
                var i = this
                  , o = this._registry
                  , a = this._instances;
                Object.keys(o).forEach((function(o) {
                    var r = i.createPluginInstance(o, e, t, n);
                    a[o] = r,
                    r.start()
                }
                ))
            }
        }, {
            key: "get",
            value: function(e) {
                return this._registry[e]
            }
        }]),
        e
    }());
    G.register("googleConsentMode", D),
    G.register("ConS_integration", W);
    var q = {
        cookie_policy: "iubenda-cs-cookie-policy-lnk",
        privacy_policy: "iubenda-privacy-policy-link",
        vendors: "iubenda-vendor-list-link",
        adv_pref: "iubenda-advertising-preferences-link",
        do_not_sell: "iubenda-ccpa-opt-out iubenda-do-not-sell-link",
        second_layer: "iubenda-cs-preferences-link"
    }
      , Y = {
        iab_tcf: "https://iabeurope.eu/transparency-consent-framework/"
    }
      , J = ["iab_tcf"]
      , K = [{
        start: /\[or (.+?)\]/,
        end: "",
        exec: function(e, t, n) {
            return ne(e, n) ? "[or]" : ""
        }
    }, {
        start: /\[= (.+?)\]/,
        end: "",
        exec: function(e, t, n) {
            return $(n, e.split("."))
        }
    }, {
        start: /\[list (.+?)\]/,
        end: /\[\/list\]/,
        exec: function(e, t, n) {
            return ie(t, e)
        }
    }, {
        start: /\[if (.+?)\]/,
        end: /\[\/if\]/,
        exec: function(e, t, n) {
            return ne(e, n) ? t : ""
        }
    }, {
        start: /\[tip (.+?)\]/,
        end: /\[\/tip\]/,
        exec: function(e, t) {
            return '<a href="javascript:void();" class="iub-popover-trigger" data-iub-popover="' + e + '">' + t + "</a>"
        }
    }, {
        start: /\[link (.+?)\]/,
        end: /\[\/link\]/,
        exec: function(e, t) {
            var n, i, o = q[e] || "", a = _iub.cs, r = "";
            (null === (n = a.options) || void 0 === n || null === (i = n.banner) || void 0 === i ? void 0 : i.linksColor) && -1 === J.indexOf(e) && (r = "style=color:" + a.options.banner.linksColor.replace(/\s+/g, "") + "!important;");
            var s = t
              , c = o ? "javascript:void(0)" : Y[e] || e;
            if ("cookie_policy" === e) {
                var l = a.options.banner.cookiePolicyLinkCaption;
                c = a.ui.getCookiePolicyHref(),
                l && (s = l)
            }
            return "<a " + r + ' href="' + c + '" class="' + o + '"' + (/^http/i.test(c) ? ' target="_blank" rel="noopener"' : "") + ">" + s + "</a>"
        }
    }]
      , X = function e(t, n) {
        for (var i, o = Number.MAX_VALUE, a = 0; a < K.length; a++) {
            var r = K[a]
              , s = t.match(r.start);
            s && s.index < o && (i = {
                tag: r,
                match: s
            },
            o = s.index)
        }
        if (!i)
            return t;
        var c = t.substr(0, i.match.index)
          , l = i.match.index + i.match[0].length
          , p = e(t.substr(l), n)
          , u = p.match(i.tag.end);
        if (!u)
            return c + i.match[0] + p;
        var d = p.substr(0, u.index)
          , h = p.substr(u.index + u[0].length);
        return c + i.tag.exec(i.match[1], d, n) + h
    }
      , $ = function(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = e || {}, i = 0; i < t.length; i++) {
            if (!(n[t[i]]instanceof Object))
                return i + 1 < t.length && t[i + 1] ? null : n[t[i]];
            n = n[t[i]]
        }
        return n
    }
      , Z = function(e) {
        var t = e;
        return "true" === e ? t = !0 : "false" === e && (t = !1),
        t
    }
      , Q = function(e, t) {
        var n = e.match(/(not)?\s*(.*)/i)
          , i = !!n[1]
          , o = n[2]
          , a = Z(o);
        return "string" == typeof a && (a = $(t, o.split("."))),
        i ? !a : a
    }
      , ee = function(e, t) {
        for (var n = e.split(/\s+and\s+/i), i = 0; i < n.length; i++)
            if (!Q(n[i], t))
                return !1;
        return !0
    }
      , te = function(e, t) {
        for (var n = e.split(/\s+or\s+/i), i = 0; i < n.length; i++)
            if (ee(n[i], t))
                return !0;
        return !1
    }
      , ne = function e(t, n) {
        var i = /\((.+)\)/;
        if (!t.match(i))
            return te(t, n);
        var o = t.replace(i, (function(t, i) {
            return e(i, n)
        }
        ));
        return te(o, n)
    }
      , ie = function(e, t) {
        var n = e.split("[or]")
          , i = e
          , o = "";
        if (o = t && -1 !== t.indexOf("[no-space]") ? t ? t.replace("[no-space]", "") : "," : t ? " " + t : ",",
        n.length <= 1)
            return i;
        var a = n.pop();
        return n.join(",") + o + a
    }
      , oe = function(e, t) {
        return X(e, t)
    }
      , ae = function(e) {
        return Array.prototype.concat.apply([], document.querySelectorAll(e))
    }
      , re = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          , n = document.querySelectorAll(e)
          , i = f(n);
        return t.forEach((function(e) {
            f(document.querySelectorAll(e)).forEach((function(e) {
                i.forEach((function(t, n) {
                    e.contains(t) && i.splice(n, 1)
                }
                ))
            }
            ))
        }
        )),
        i
    }
      , se = function(e, t) {
        return e && e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
    }
      , ce = function(e, t) {
        var n = (t || document).getElementsByClassName(e);
        return Array.prototype.concat.apply([], n)
    }
      , le = function(e) {
        return e && e.length ? ae("." + e.join(", .")) : []
    }
      , pe = function(e, t) {
        for (var n = t.parentNode; null != n; ) {
            if (n === e)
                return !0;
            n = n.parentNode
        }
        return !1
    }
      , ue = function(e) {
        return document.createElement(e.toUpperCase())
    }
      , de = function(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }
      , he = function(e, t) {
        var n = e.nextSibling
          , i = e.parentNode;
        de(e),
        i.insertBefore(t, n)
    }
      , fe = function(e, t) {
        return e.parentNode.insertBefore(t, e.nextSibling)
    }
      , be = function(e) {
        var t = []
          , n = 0;
        function i(e) {
            t.push(["enter", e]);
            for (var n = 0; n < e.childNodes.length; ++n)
                i(e.childNodes[n]);
            t.push(["exit", e])
        }
        return {
            reiterate: function() {
                t = [],
                i(e)
            },
            next: function() {
                return n >= t.length ? {
                    done: !0
                } : {
                    value: t[n++],
                    done: !1
                }
            }
        }
    }
      , me = function(e) {
        var t = e.nodeName.toLowerCase()
          , n = e.getAttribute("type")
          , i = e.hasAttribute("data-iub-script");
        return "script" === t && (!n || i || "application/javascript" === n || "text/javascript" === n || "module" === n)
    }
      , ge = function(e) {
        e.hasAttribute("data-iub-type") ? (e.setAttribute("type", e.getAttribute("data-iub-type")),
        e.removeAttribute("data-iub-type")) : e.removeAttribute("type"),
        e.removeAttribute("data-iub-script")
    }
      , ve = function(e, t) {
        return t && function(e, t) {
            Object.keys(t).forEach((function(n) {
                void 0 !== t[n] && null !== t[n] && e.setAttribute(n, t[n])
            }
            ))
        }(e, t),
        function(e) {
            for (var t = Array.prototype.concat.apply([], e.attributes), n = {}, i = 0; i < t.length; i++) {
                var o = t[i]
                  , a = o.name
                  , r = o.value;
                null != r && "null" !== r && "" !== r && (n[a] = r)
            }
            return n
        }(e)
    }
      , ye = function(e, t) {
        if (t ? "loading" !== document.readyState : "complete" === document.readyState)
            e();
        else if (t) {
            document.addEventListener("readystatechange", (function t() {
                document.removeEventListener("readystatechange", t),
                e()
            }
            ))
        } else {
            window.addEventListener("load", (function t() {
                window.removeEventListener("load", t),
                e()
            }
            ))
        }
    }
      , ke = function(e) {
        var t = document.createElement("script");
        t.setAttribute("type", "text/javascript"),
        t.setAttribute("src", e),
        document.getElementsByTagName("head")[0].appendChild(t)
    }
      , we = function(e, t) {
        e.classList.add(t)
    }
      , Ce = function(e, t) {
        e.classList.remove(t)
    }
      , xe = function(e, t) {
        return e.classList.contains(t)
    }
      , Pe = function(e, t, n) {
        if ("function" == typeof window[e])
            return new window[e](t,n);
        var i = (null == n ? void 0 : n.bubbles) || !1
          , o = (null == n ? void 0 : n.cancelable) || !1
          , a = document.createEvent(e);
        return a.initEvent(t, i, o),
        a
    }
      , _e = null;
    function Se(e) {
        var t = Object.keys(e).reduce((function(t, n) {
            var i = e[n];
            return t + (i ? n + ":" + i + "!important;" : "")
        }
        ), "");
        return t ? ' style="' + t + '"' : ""
    }
    var Ae = function(e, t, i, o) {
        var a, r = t;
        "msPointerEnabled"in window.navigator && ("touchstart" === r ? r = "MSPointerDown" : "touchmove" === r ? r = "MSPointerMove" : "touchend" === r && (r = "MSPointerUp")),
        a = "object" === n(o) ? function() {
            if (null !== _e)
                return _e;
            try {
                var e = {};
                Object.defineProperty(e, "capture", {
                    get: function() {
                        return _e = !0,
                        !1
                    }
                }),
                window.addEventListener("test", null, e),
                window.removeEventListener("test", null, e)
            } catch (e) {
                _e = !1
            }
            return _e
        }() ? o : !!o.capture : !!o,
        e.addEventListener(r, i, a)
    }
      , Be = function(e, t, n, i) {
        e.removeEventListener(t, n, i || !1)
    }
      , Oe = function(e, t) {
        var n = document.createElement("style");
        n.type = "text/css",
        n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)),
        t.appendChild(n)
    }
      , Ie = function e(t) {
        document.body ? t() : setTimeout((function() {
            e(t)
        }
        ), 1)
    }
      , Te = function(e, t) {
        e.setAttribute("style", t)
    }
      , Le = function e(t) {
        if ("function" == typeof t) {
            var n = e();
            return t(n.resolve.bind(n)),
            n
        }
        return {
            _data: null,
            _isResolved: !1,
            _successCallbacks: [],
            then: function(e) {
                !1 === this._isResolved ? this._successCallbacks.push(e) : e.call(window, this._data)
            },
            resolve: function(e) {
                if (this._isResolved)
                    console && console.log("The promise cannot be resolved more than once");
                else {
                    this._isResolved = !0,
                    this._data = e;
                    for (var t = 0, n = this._successCallbacks.length; t < n; t++)
                        this._successCallbacks[t].call(window, e)
                }
                return this
            }
        }
    }
      , Ee = function(e) {
        var t = Le()
          , n = []
          , i = 0;
        return e.forEach((function(o, a) {
            o.then((function(o) {
                return function(o, a) {
                    n[a] = o,
                    i++,
                    e.length === i && t.resolve(n)
                }(o, a)
            }
            ))
        }
        )),
        t
    }
      , Ne = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3,
        fatal: 4,
        nolog: 5
    }
      , De = function(e, t, n) {
        var i = [t].concat(n);
        console[e].apply ? console[e].apply(console, i) : console[e](i.join(" "))
    }
      , Fe = {
        configure: function() {},
        log: function(e, t) {
            try {
                if ("console"in window && "log"in console && "warn"in console && "error"in console) {
                    var n = "[IUBCS|" + e.toUpperCase() + "]:";
                    Ve.LOG_LEVELS[e] < Ve.WARN ? De("log", n, t) : Ve.LOG_LEVELS[e] === Ve.WARN ? De("warn", n, t) : De("error", n, t)
                }
            } catch (e) {}
        }
    }
      , Ve = new (function() {
        function e() {
            i(this, e),
            this.DEBUG = 0,
            this.INFO = 1,
            this.WARN = 2,
            this.ERROR = 3,
            this.FATAL = 4,
            this.NOLOG = 5,
            this.LOG_LEVELS = Ne,
            this.silence = !1,
            this.strategies = {},
            this.uses = [],
            this.level = 1,
            this.slice = [].slice
        }
        return a(e, [{
            key: "silence",
            value: function() {
                return this.silence = !0,
                this
            }
        }, {
            key: "wake",
            value: function() {
                return this.silence = !1,
                this
            }
        }, {
            key: "registerStrategy",
            value: function(e, t) {
                return this.strategies[e] = t,
                this
            }
        }, {
            key: "configure",
            value: function(e, t) {
                var n = this.strategies[e];
                return n && "configure"in n && n.configure(t),
                this
            }
        }, {
            key: "setLevel",
            value: function(e) {
                var t = e.toLowerCase();
                return t in Ne && (this.level = Ne[t]),
                this
            }
        }, {
            key: "log",
            value: function(e, t) {
                var n = this;
                if (this.silence)
                    return null;
                var i = v(t)
                  , o = e.toLowerCase();
                return o in Ne && Ne[o] >= this.level && this.uses.forEach((function(e) {
                    "function" == typeof e ? e(o, i) : e in n.strategies && n.strategies[e].log(o, i)
                }
                )),
                this
            }
        }, {
            key: "use",
            value: function(e) {
                return e && (this.uses = v(e)),
                this
            }
        }, {
            key: "debug",
            value: function() {
                this.log("debug", this.slice.call(arguments))
            }
        }, {
            key: "info",
            value: function() {
                this.log("info", this.slice.call(arguments))
            }
        }, {
            key: "warn",
            value: function() {
                this.log("warn", this.slice.call(arguments))
            }
        }, {
            key: "error",
            value: function() {
                this.log("error", this.slice.call(arguments))
            }
        }, {
            key: "fatal",
            value: function() {
                this.log("fatal", this.slice.call(arguments))
            }
        }]),
        e
    }());
    Ve.registerStrategy("console", Fe);
    var ze = {
        version: "1.51.0",
        cmpVersion: 308,
        tracker: {
            url: "https://hits.iubenda.com/piwik.php"
        },
        timeoutOnRemoteGet: 1e3,
        timeoutBeforeReload: 1e3,
        timeoutBeforeReloadWithCmp: 3e4,
        keepLocalCookiesN: 10,
        urlForRemoteConf: "https://cs.iubenda.com/cookie-solution/confs/js/%{cookie_policy_id}.js",
        TCF_V2_CONSENT_COOKIE: "euconsent-v2",
        GOOGLE_ADS_PERSONALIZED_ID: "googleAdsPersonalized",
        USPRIVACY_COOKIE: "usprivacy",
        consentCookieNameBase: "_iub_cs-",
        MAX_TCF2_COOKIE_DURATION: 360,
        TCF2_2_DATE: [2023, 10, 6, 8]
    }
      , Re = [2024, 0, 31, 8]
      , je = {};
    void 0 !== window._iub && !1 === _iub.csConfigLegacy && (je = {
        inlineDelay: 500,
        startOnDomReady: !0,
        safeTimeout: 0
    });
    var Me, Ue, We, He, Ge, qe, Ye, Je = t(t({
        logger: "console",
        logLevel: "nolog",
        raiseOnException: !1,
        cookiePolicyId: null,
        siteId: null,
        cookiePolicyUrl: null,
        cookiePolicyInOtherWindow: !1,
        skipSaveConsent: !1,
        lang: "it",
        startOnDomReady: !1,
        countryDetection: !1,
        askConsentAtCookiePolicyUpdate: !1,
        invalidateConsentBefore: null,
        invalidateConsentWithoutLog: Date.UTC(2023, 0, 15) <= Date.now(),
        banner: {
            content: null,
            cookiePolicyLinkCaption: null,
            zIndex: 99999998,
            backgroundColor: "#000",
            textColor: "#fff",
            linksColor: "",
            fontSize: null,
            fontSizeCloseButton: "20px",
            fontSizeBody: "14px",
            applyStyles: !0,
            html: null,
            slideDown: !0,
            prependOnBody: !1,
            position: "top",
            backgroundOverlay: !1,
            acceptButtonDisplay: !1,
            acceptButtonCaption: null,
            acceptButtonColor: null,
            acceptButtonCaptionColor: null,
            customizeButtonDisplay: !1,
            customizeButtonCaption: null,
            customizeButtonColor: null,
            customizeButtonCaptionColor: null,
            rejectButtonDisplay: !1,
            rejectButtonCaption: null,
            rejectButtonColor: null,
            rejectButtonCaptionColor: null,
            continueWithoutAcceptingButtonDisplay: !1,
            continueWithoutAcceptingButtonCaption: null,
            continueWithoutAcceptingButtonColor: null,
            continueWithoutAcceptingButtonCaptionColor: null,
            closeButtonDisplay: !0,
            closeButtonCaption: "&times;",
            closeButtonRejects: !1,
            logo: "",
            brandBackgroundColor: "#000",
            brandTextColor: "#fff",
            listPurposes: !1,
            explicitWithdrawal: !1,
            useThirdParties: !0,
            showPurposesToggles: !1
        },
        rebuildIframe: !0,
        footer: {
            message: null,
            btnCaption: null
        },
        callback: {
            onBeforePreload: null,
            onReady: null,
            onStartupFailed: null,
            onError: null,
            onFatalError: null,
            onBannerShown: null,
            onBannerClosed: null,
            onCookiePolicyShown: null,
            onConsentFirstGiven: null,
            onConsentGiven: null,
            onConsentRead: null,
            onActivationDone: null,
            onPreferenceNotNeeded: null,
            onConsentFirstRejected: null,
            onConsentRejected: null,
            onPreferenceFirstExpressed: null,
            onPreferenceExpressed: null,
            onPreferenceExpressedOrNotNeeded: null,
            onCcpaAcknowledged: null,
            onCcpaOptOut: null,
            onCcpaFirstAcknowledged: null,
            onCcpaFirstOptOut: null,
            on2ndLayerShown: null,
            on2ndLayerClosed: null,
            onCplSaved: null
        },
        preferenceCookie: {
            expireAfter: 365,
            tcfV2Name: "euconsent-v2"
        },
        enableRemoteConsent: !1,
        loopbackServer: {
            iframeBridge: {
                host: "cdn.iubenda.com",
                iframePath: "/cs/bridge/iframe_bridge-1.5.0.html"
            },
            callback: {
                host: "www.iubenda.com",
                setRemoteCookiePath: "/cookie-consent/cookies/set",
                resetRemoteCookiePath: "/cookie-consent/cookies/reset",
                getRemoteCookiePath: "/cookie-consent/cookies/get"
            }
        },
        hideInIframe: !1,
        reloadOnConsent: !1,
        localConsentDomain: null,
        localConsentDomainExact: !1,
        localConsentPath: "/",
        inlineDelay: 1e3,
        safeTimeout: 5e3,
        forceSafeActivation: !1,
        enableGpp: !1,
        enableTcf: !1,
        gppVersion: Date.UTC.apply(window, Re) <= Date.now() ? 1.1 : 1,
        tcfVersion: Date.UTC.apply(window, ze.TCF2_2_DATE) <= Date.now() ? 2.2 : 2,
        askConsentIfCMPNotFound: !0,
        gdprApplies: void 0,
        gdprAppliesGlobally: !0,
        googleAdsPreferenceManagement: !1,
        googleAdditionalConsentMode: !1,
        newConsentAtVendorListUpdate: null,
        i18n: {},
        whitelabel: !0,
        perPurposeConsent: !1,
        showPurposesCollapsed: !0,
        promptToAcceptOnBlockedElements: !1,
        purposes: null,
        adPersonalization: !0,
        dynamicBannerText: !0,
        maxCookieSize: 4096,
        maxCookieChunks: 5,
        enableGdpr: !0,
        enableCcpa: !1,
        ccpaAppliesToEntireUSA: !1,
        ccpaApplies: void 0,
        ccpaAcknowledgeOnDisplay: !1,
        ccpaAcknowledgeOnLoad: !1,
        ccpaNoticeDisplay: !0,
        ccpaLspa: void 0,
        ccpaCookie: {
            expireAfter: 365
        },
        privacyPolicyUrl: void 0,
        enableUspr: !1,
        usprApplies: void 0,
        showBannerForUS: !1,
        usprPurposes: null,
        usprPreferenceWidget: null,
        hasSensitiveData: !1,
        noticeAtCollectionUrl: "",
        enableFadp: !1,
        fadpApplies: void 0,
        showBannerForCH: !1,
        enableLgpd: !1,
        lgpdApplies: void 0,
        lgpdAppliesGlobally: !0,
        applyGdprForCH: !0,
        floatingPreferencesButtonDisplay: !1,
        floatingPreferencesButtonForceDisplay: !1,
        floatingPreferencesButtonCaption: !1,
        floatingPreferencesButtonColor: "",
        floatingPreferencesButtonCaptionColor: "",
        floatingPreferencesButtonHover: !1,
        floatingPreferencesButtonIcon: !0,
        floatingPreferencesButtonRound: !1,
        usPreferencesWidgetDisplay: void 0,
        tcfPurposes: {
            1: !0,
            2: !0,
            3: !0,
            4: !0,
            5: !0,
            6: !0,
            7: !0,
            8: !0,
            9: !0,
            10: !0
        },
        acceptTcfSpecialFeaturesWithAcceptBtn: !0,
        LIRestricted: !1,
        tcfPublisherCC: null,
        skipTcfValidation: !1,
        googleConsentMode: void 0,
        emitGtmEvents: !1,
        consApiKey: void 0,
        hasCookiePolicy: void 0,
        hasPrivacyPolicy: void 0,
        floatingPreferencesButtonZIndex: 2147483647
    }, je), {}, {
        previewMode: !1,
        previewRemoteConfigurationUrl: void 0,
        storage: {
            type: "cookie",
            items: {
                core: {
                    type: void 0
                },
                uspr: {
                    type: void 0
                },
                tcf: {
                    type: void 0
                },
                usprivacy: {
                    type: void 0
                },
                granular: {
                    type: void 0
                }
            }
        }
    }), Ke = Ve, Xe = {
        loggerName: (null === (Me = window._iub) || void 0 === Me || null === (Ue = Me.csConfiguration) || void 0 === Ue ? void 0 : Ue.logger) || Je.logger,
        logLevel: (null === (We = window._iub) || void 0 === We || null === (He = We.csConfiguration) || void 0 === He ? void 0 : He.logLevel) || Je.logLevel
    }, $e = Xe.loggerName, Ze = Xe.logLevel;
    function Qe() {
        return -1 !== ["localhost"].indexOf(window.location.hostname) || null !== window.location.hostname.match(/.iubenda.com$/)
    }
    function et(e, t, n) {
        var i = "Something went wrong within loading remote configuration.";
        e.cookiePolicyId ? (Ke.info("Loading remote configurations."),
        Ke.info("Loading configuration through javascript file."),
        function(e, t) {
            var n = document.createElement("script");
            n.async = !0,
            n.onload = function() {
                return t({
                    success: !0
                })
            }
            ,
            n.onerror = function() {
                return t({
                    success: !1
                })
            }
            ,
            n.src = e;
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(n, i)
        }(function(e) {
            return !0 === (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) ? e.previewRemoteConfigurationUrl : ze.urlForRemoteConf.replace("%{cookie_policy_id}", e.cookiePolicyId)
        }(e, function(e) {
            return Qe() && !0 === e.previewMode && !!e.previewRemoteConfigurationUrl
        }(e)), (function(e) {
            e.success ? (Ke.info("Remote configuration correctly loaded."),
            Ke.info("Merging remote configuration with default."),
            null == n || n.call()) : t(i)
        }
        ))) : t(i)
    }
    Ke.use($e),
    Ke.setLevel(Ze);
    var tt = {
        en: {
            brand: {
                linkTitle: "iubenda - Cookie Policy and Cookie Compliance Management"
            },
            "2nd_layer": {
                widget_intro: "In this panel you can express some preferences related to the processing of your personal information.<br>You may review and change expressed choices at any time by resurfacing this panel via the provided link.[if gdprApplies or lgpdApplies]<br>To deny your consent to[if usprApplies], or where applicable opt out of,[/if] the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.[/if][if fadpApplies and not gdprApplies and not lgpdApplies]<br>To opt out of[if hasSensitiveData], or where applicable deny consent to,[/if] the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.[/if]",
                widget_title: "Your Privacy Choices"
            },
            banner: {
                accept_button_caption: "Accept[if banner.showPurposesToggles] all[/if]",
                advertising_preferences_caption: "advertising preferences panel",
                continue_acception_button_caption: "Continue without accepting &rarr;",
                cookie_policy_caption: "cookie policy",
                customize_button_caption: "Learn more[if (perPurposeConsent or (enableTcf and gdprApplies) or usprApplies) and not banner.showPurposesToggles] and customize[/if]",
                do_not_sell_caption: "Do Not Sell My Personal Information",
                dynamic: {
                    and: "and",
                    body: 'We[if banner.useThirdParties] and selected third parties[/if] [if usprApplies or ccpaApplies]collect personal information[if usprApplies and hasPrivacyPolicy] as specified in the %{privacy_policy}[/if][/if][if not gdprApplies and not lgpdApplies and not fadpApplies and (usprApplies or ccpaApplies)].[/if][if gdprApplies or lgpdApplies or fadpApplies][if usprApplies or ccpaApplies] and [/if][/if][if gdprApplies or lgpdApplies or fadpApplies]use cookies or similar technologies for technical purposes and[if not fadpApplies], with your consent,[/if] for[if not banner.listPurposes] other purposes[/if][if banner.listPurposes] %{purposes}[/if][if hasCookiePolicy] as specified in the [link cookie_policy]cookie policy[/link][/if]. [if not fadpApplies]Denying consent may make related features unavailable.[/if][if enableTcf and gdprApplies]\nWith respect to advertising, we and [if tcfV2_2]%{total_number_of_ads_vendors} [/if] selected [link vendors]third parties[/link], may use <em>precise geolocation data, and identification through device scanning</em> in order to <em>store and/or access information on a device</em> and process personal data like your usage data for the following [link adv_pref]advertising purposes[/link]: <em>[if tcfV2_2]personalised advertising and content, advertising and content measurement, audience research and services development.[/if][if not tcfV2_2]personalized ads and content, ad and content measurement, audience insights and product development.[/if]</em>[/if][if gdprApplies or lgpdApplies][if banner.explicitWithdrawal]\nYou can freely give, deny, or withdraw your consent at any time[if enableTcf and gdprApplies] by accessing the preferences panel[/if].[/if][/if][/if][if ccpaApplies and not usprApplies]\nIn case of sale of your personal information, you may opt out by using the link "%{do_not_sell}".\n[if hasPrivacyPolicy]\nTo find out more about the categories of personal information collected and the purposes for which such information will be used, please refer to our %{privacy_policy}.[/if][/if]\n[if gdprApplies or lgpdApplies][if banner.acceptButtonDisplay][list or][if banner.acceptButtonDisplay]\nUse the “[= banner.acceptButtonCaption]” button[/if][if banner.closeButtonDisplay and not banner.closeButtonRejects and not banner.continueWithoutAcceptingButtonDisplay][or] close this notice[/if][/list] to consent. [/if][if not banner.acceptButtonDisplay and banner.closeButtonDisplay and not banner.closeButtonRejects]Close this notice to consent.[/if][if banner.rejectButtonDisplay][list or][if banner.rejectButtonDisplay]Use the “[= banner.rejectButtonCaption]” button[/if][if (banner.closeButtonDisplay and banner.closeButtonRejects) or banner.continueWithoutAcceptingButtonDisplay][or] close this notice[/if][/list][if banner.rejectButtonDisplay] to continue without accepting.[/if][/if][if not banner.rejectButtonDisplay and ((banner.closeButtonDisplay and banner.closeButtonRejects) or banner.continueWithoutAcceptingButtonDisplay)]Close this notice to continue without accepting.[/if][/if][if fadpApplies and not gdprApplies and not lgpdApplies]You have the right to opt out of the use of cookies and similar technologies at any time.[/if][if usprApplies and hasSensitiveData][if gdprApplies or lgpdApplies or fadpApplies]\n<b>Note for users residing in the United States</b>: y[/if][if not gdprApplies and not lgpdApplies and not fadpApplies]\nY[/if]ou can provide or deny your consent to the processing of your sensitive personal information at any time via the “[= banner.acceptButtonCaption]” and “[= banner.rejectButtonCaption]” buttons or in a more granular way inside the [link second_layer]privacy choices panel[/link].[/if]',
                    endQuote: "”",
                    or: "or",
                    startQuote: "“"
                },
                page_counter_caption: "Press again to continue",
                paragraph_1: "This website or its third-party tools use cookies, which are necessary to its functioning and required to achieve the purposes illustrated in the cookie policy. If you want to know more or withdraw your consent to all or some of the cookies, please refer to the %{cookie_policy_link}.",
                paragraph_2: "By closing this banner, scrolling this page, clicking a link or continuing to browse otherwise, you agree to the use of cookies.",
                privacy_policy_caption: "privacy policy",
                reject_button_caption: "Reject[if banner.showPurposesToggles] all[/if]",
                title: "Notice",
                vendor_list_caption: "third-parties"
            },
            blocked_overlay: {
                accept_button: "Update",
                paragraph: "You denied the use of cookies or similar technologies for the purpose of %{purposes}. To view this content, please update your consent preferences.",
                title: "Content is blocked"
            },
            ccpa: {
                opt_out_cancel: "Cancel",
                opt_out_confirm: "Confirm",
                opt_out_prompt: "Do you really wish to opt out?"
            },
            floating_preferences_button: {
                caption: "Privacy preferences"
            },
            footer: {
                btnCaption: "Save and continue",
                message: "By continuing to browse or by otherwise closing this window, you accept the current cookie settings."
            },
            google_additional_consent: {
                gac_widget: {
                    description: "Google’s Ad Tech Providers listed below use tracking technology for advertising purposes. To learn more, please refer to their respective privacy policies. You can customize your consent preferences for each of them or manage your consent for all of them at once using the provided controls.",
                    title: "Your Google-related preferences"
                },
                per_purpose_widget: {
                    customize: "Customize Google-related preferences",
                    description: "Google’s Ad Tech Providers use tracking technology for advertising purposes. You can customize your preferences for each of them.",
                    title: "Personalized advertising by Google’s Ad Tech Providers"
                },
                tcf_widget: {
                    description: "Google’s Ad Tech Providers listed below do not adhere to the IAB Transparency and Consent Framework. You can customize your advertising tracking preferences for each of them. To learn more, please refer to their respective privacy policies.",
                    manage_preferences: "Manage preferences for each of Google’s Ad Tech Providers",
                    title: "Personalized advertising by Google’s Ad Tech Providers not adhering to the TCF"
                }
            },
            modal: {
                back: "Back",
                cookie_policy: "Cookie Policy",
                privacy_policy: "Privacy Policy",
                save_and_go_back: "Save and go back",
                see_full_cookie_policy: "See full Cookie Policy",
                see_full_privacy_policy: "See full Privacy Policy"
            },
            per_purpose: {
                adopts_tcf: "Adopts the IAB Transparency and Consent Framework",
                approve_all: "Accept all",
                customize_advertising_tracking: "Customize TCF-related preferences",
                general_advertising_services: "Other Marketing services",
                hide_description: "Hide description",
                not_necessary: {
                    description: "Some tracking technologies are strictly necessary to operate or deliver the service you requested from us. This option allows you to provide or deny consent to technologies that are <b>not</b> strictly necessary.",
                    name: "Cookies and other tracking technologies that are not strictly necessary"
                },
                purposes: {
                    1: {
                        bannerName: "necessary",
                        description: "These trackers are used for activities that are strictly necessary to operate or deliver the service you requested from us[if not fadpApplies] and, therefore, do not require you to consent[/if].",
                        name: "Necessary"
                    },
                    2: {
                        bannerName: "functionality",
                        description: "These trackers enable basic interactions and functionalities that allow you to access selected features of our service and facilitate your communication with us.",
                        name: "Functionality"
                    },
                    3: {
                        bannerName: "experience",
                        description: "These trackers help us to improve the quality of your user experience and enable interactions with external content, networks and platforms.",
                        name: "Experience"
                    },
                    4: {
                        bannerName: "measurement",
                        description: "These trackers help us to measure traffic and analyze your behavior to improve our service.",
                        name: "Measurement"
                    },
                    5: {
                        bannerName: "marketing[if adPersonalization] (personalized ads)[/if]",
                        description: "These trackers help us to deliver[if adPersonalization] personalized[/if] ads or marketing content to you, and to measure their performance.",
                        name: "Marketing"
                    },
                    googleAdsPersonalized: {
                        description: 'Google and its partner ad technology providers use trackers for personalization and measurement purposes. You can customize your consent preferences for both Google and its partners. To learn more, please refer to the <a target="_blank" rel="noopener" href=\'https://support.google.com/admanager/answer/9012903?hl=en\'>privacy policies of the respective services</a>.',
                        name: "Personalized advertising by Google and its partners"
                    }
                },
                reject_all: "Reject all",
                see_description: "See description",
                see_description_customize: "See description and customize",
                tcf_adhering_services: "IAB Transparency and Consent Framework adhering services",
                tcf_adhering_services_description: 'These services adhere to the <a target="_blank" rel="noopener" href="https://iabeurope.eu/transparency-consent-framework/">IAB Transparency and Consent Framework</a> (TCF). The TCF is an industry-wide initiative that facilitates responsible privacy practices across the digital advertising industry - providing you with enhanced transparency and control over your advertising tracking preferences.',
                widget_intro: 'The options provided in this section allow you to customize your[if not fadpApplies] consent[/if] preferences for any tracking technology used for the purposes described below.[if hasCookiePolicy] To learn more about how these trackers help us and how they work, refer to the <button style="cursor: pointer; text-decoration: underline !important;" class="open-cp">cookie policy</button>.[/if][if not fadpApplies] Please be aware that denying consent for a particular purpose may make related features unavailable.[/if]',
                widget_title: "Your[if not fadpApplies] consent[/if] preferences for tracking technologies",
                without_purposes: "The option provided in this section allows you to freely provide or deny consent to our use of cookies and other tracking technologies that are not strictly necessary to operate or deliver the service you requested from us. [if hasCookiePolicy]<b>To learn more about how these trackers help us and how they work, refer to the [link cookie_policy]cookie policy[/link].</b>[/if]"
            },
            tcf_v2: {
                activate_all_purposes_button: "Accept all",
                deactivate_all_purposes_button: "Reject all",
                features: {
                    1: {
                        description: "[if not tcfV2_2]Data from offline data sources can be combined with your online activity in support of one or more purposes[/if][if tcfV2_2]Information about your activity on this service may be matched and combined with other information relating to you and originating from various sources (for instance your activity on a separate online service, your use of a loyalty card in-store, or your answers to a survey), in support of the purposes explained in this notice.[/if]",
                        descriptionLegal: "[if not tcfV2_2]Vendors can: Combine data obtained offline with data collected online in support of one or more Purposes or Special Purposes.[/if]",
                        name: "[if not tcfV2_2]Match and combine offline data sources[/if][if tcfV2_2]Match and combine data from other data sources[/if]"
                    },
                    2: {
                        description: "[if not tcfV2_2]Different devices can be determined as belonging to you or your household in support of one or more of purposes.[/if][if tcfV2_2]In support of the purposes explained in this notice, your device might be considered as likely linked to other devices that belong to you or your household (for instance because you are logged in to the same service on both your phone and your computer, or because you may use the same Internet connection on both devices).[/if]",
                        descriptionLegal: "[if not tcfV2_2]Vendors can:<br/><br/>- Deterministically determine that two or more devices belong to the same user or household<br/>- Probabilistically determine that two or more devices belong to the same user or household<br/>- Actively scan device characteristics for identification for probabilistic identification if users have allowed vendors to actively scan device characteristics for identification (Special Feature 2)[/if]",
                        name: "Link different devices"
                    },
                    3: {
                        description: "[if not tcfV2_2]Your device might be distinguished from other devices based on information it automatically sends, such as IP address or browser type.[/if][if tcfV2_2]Your device might be distinguished from other devices based on information it automatically sends when accessing the Internet (for instance, the IP address of your Internet connection or the type of browser you are using) in support of the purposes exposed in this notice.[/if]",
                        descriptionLegal: "[if not tcfV2_2]Vendors can:<br/><br/>- Create an identifier using data collected automatically from a device for specific characteristics, e.g. IP address, user-agent string.<br/>- Use such an identifier to attempt to re-identify a device.<br/><br/>Vendors cannot:<br/><br/>- Create an identifier using data collected via actively scanning a device for specific characteristics, e.g. installed font or screen resolution without users’ separate opt-in to actively scanning device characteristics for identification.<br/>- Use such an identifier to re-identify a device.[/if][if tcfV2_2][/if]",
                        name: "[if not tcfV2_2]Receive and use automatically-sent device characteristics for identification[/if][if tcfV2_2]Identify devices based on information transmitted automatically[/if]"
                    }
                },
                features_label: "Features:",
                hide_tracking_button: "Save and return to cookie policy",
                learn_more: "Learn more",
                vendors: "vendors",
                leg_int_purpose_label: "Allow the processing of your data based on a [tip pref_legitimate_interest]legitimate interest[/tip] for this purpose.",
                leg_int_vendor_label: "Allow this service to process your data based on a [tip pref_legitimate_interest]legitimate interest[/tip].",
                legit_purposes_label: "Purposes (legitimate interest):",
                privacy_policy: "Privacy Policy",
                leg_int_information: "Legitimate interest information",
                purposes: {
                    1: {
                        description: "[if not tcfV2_2]Cookies, device identifiers, or other information can be stored or accessed on your device for the purposes presented to you.[/if][if tcfV2_2]Cookies, device or similar online identifiers (e.g. login-based identifiers, randomly assigned identifiers, network based identifiers) together with other information (e.g. browser type and information, language, screen size, supported technologies etc.) can be stored or read on your device to recognise it each time it connects to an app or to a website, for one or several of the purposes presented here.[/if]",
                        descriptionLegal: "[if not tcfV2_2]Vendors can: Store and access information on the device such as cookies and device identifiers presented to a user.[/if][if tcfV2_2]Most purposes explained in this notice rely on the storage or accessing of information from your device when you use an app or visit a website. For example, a vendor or publisher might need to store a cookie on your device during your first visit on a website, to be able to recognise your device during your next visits (by accessing this cookie each time).[/if]",
                        name: "Store and/or access information on a device"
                    },
                    2: {
                        description: "[if not tcfV2_2]Ads can be shown to you based on the content you’re viewing, the app you’re using, your approximate location, or your device type.[/if][if tcfV2_2]Advertising presented to you on this service can be based on limited data, such as the website or app you are using, your non-precise location, your device type or which content you are (or have been) interacting with (for example, to limit the number of times an ad is presented to you).[/if]",
                        descriptionLegal: "[if not tcfV2_2]To do basic ad selection vendors can:<br/><br/>- Use real-time information about the context in which the ad will be shown, to show the ad, including information about the content and the device, such as: device type and capabilities, user agent, URL, IP address<br/>- Use a user’s non-precise geolocation data<br/>- Control the frequency of ads shown to a user.<br/>- Sequence the order in which ads are shown to a user.<br/>- Prevent an ad from serving in an unsuitable editorial (brand-unsafe) context<br/>Vendors cannot:<br/>- Create a personalized ads profile using this information for the selection of future ads.<br/><br/>N.B. Non-precise means only an approximate location involving at least a radius of 500 meters is permitted.[/if][if tcfV2_2]A car manufacturer wants to promote its electric vehicles to environmentally conscious users living in the city after office hours. The advertising is presented on a page with related content (such as an article on climate change actions) after 6:30 p.m. to users whose non-precise location suggests that they are in an urban zone.<br /><br />A large producer of watercolour paints wants to carry out an online advertising campaign for its latest watercolour range, diversifying its audience to reach as many amateur and professional artists as possible and avoiding showing the ad next to mismatched content (for instance, articles about how to paint your house). The number of times that the ad has been presented to you is detected and limited, to avoid presenting it too often.[/if]",
                        name: "[if not tcfV2_2]Select basic ads[/if][if tcfV2_2]Use limited data to select advertising[/if]"
                    },
                    3: {
                        description: "[if not tcfV2_2]A profile can be built about you and your interests to show you personalized ads that are relevant to you.[/if][if tcfV2_2]Information about your activity on this service (such as forms you submit, content you look at) can be stored and combined with other information about you (for example, information from your previous activity on this service and other websites or apps) or similar users. This is then used to build or improve a profile about you (that might include possible interests and personal aspects). Your profile can be used (also later) to present advertising that appears more relevant based on your possible interests by this and other entities.[/if]",
                        descriptionLegal: "[if not tcfV2_2]To create a personalized ads profile vendors can:<br/><br/>- Collect information about a user, including a user's activity, interests, demographic information, or location, to create or edit a user profile for use in personalized advertising.<br/>- Combine this information with other information previously collected, including from across websites and apps, to create or edit a user profile for use in personalized advertising.[/if][if tcfV2_2]If you read several articles about the best bike accessories to buy, this information could be used to create a profile about your interest in bike accessories. Such a profile may be used or improved later on, on the same or a different website or app to present you with advertising for a particular bike accessory brand. If you also look at a configurator for a vehicle on a luxury car manufacturer website, this information could be combined with your interest in bikes to refine your profile and make an assumption that you are interested in luxury cycling gear.<br /><br />An apparel company wishes to promote its new line of high-end baby clothes. It gets in touch with an agency that has a network of clients with high income customers (such as high-end supermarkets) and asks the agency to create profiles of young parents or couples who can be assumed to be wealthy and to have a new child, so that these can later be used to present advertising within partner apps based on those profiles.[/if]",
                        name: "[if not tcfV2_2]Create a personalized ads profile[/if][if tcfV2_2]Create profiles for personalised advertising [/if]"
                    },
                    4: {
                        description: "[if not tcfV2_2]Personalized ads can be shown to you based on a profile about you.[/if][if tcfV2_2]Advertising presented to you on this service can be based on your advertising profiles, which can reflect your activity on this service or other websites or apps (like the forms you submit, content you look at), possible interests and personal aspects.[/if]",
                        descriptionLegal: "[if not tcfV2_2]To select personalized ads vendors can: Select personalized ads based on a user profile or other historical user data, including a user’s prior activity, interests, visits to sites or apps, location, or demographic information.[/if][if tcfV2_2]An online retailer wants to advertise a limited sale on running shoes. It wants to target advertising to users who previously looked at running shoes on its mobile app. Tracking technologies might be used to recognise that you have previously used the mobile app to consult running shoes, in order to present you with the corresponding advertisement on the app.<br /><br />A profile created for personalised advertising in relation to a person having searched for bike accessories on a website can be used to present the relevant advertisement for bike accessories on a mobile app of another organisation.[/if]",
                        name: "[if not tcfV2_2]Select personalized ads[/if][if tcfV2_2]Use profiles to select personalised advertising[/if]"
                    },
                    5: {
                        description: "[if not tcfV2_2]A profile can be built about you and your interests to show you personalized content that is relevant to you.[/if][if tcfV2_2]Information about your activity on this service (for instance, forms you submit, non-advertising content you look at) can be stored and combined with other information about you (such as your previous activity on this service or other websites or apps) or similar users. This is then used to build or improve a profile about you (which might for example include possible interests and personal aspects). Your profile can be used (also later) to present content that appears more relevant based on your possible interests, such as by adapting the order in which content is shown to you, so that it is even easier for you to find content that matches your interests.[/if]",
                        descriptionLegal: "[if not tcfV2_2]To create a personalized content profile vendors can: <br/><br/>- Collect information about a user, including a user's activity, interests, visits to sites or apps, demographic information, or location, to create or edit a user profile for personalizing content.<br/>- Combine this information with other information previously collected, including from across websites and apps, to create or edit a user profile for use in personalizing content.[/if][if tcfV2_2]You read several articles on how to build a treehouse on a social media platform. This information might be added to a profile to mark your interest in content related to outdoors as well as do-it-yourself guides (with the objective of allowing the personalisation of content, so that for example you are presented with more blog posts and articles on treehouses and wood cabins in the future).<br /><br />You have viewed three videos on space exploration across different TV apps. An unrelated news platform with which you have had no contact builds a profile based on that viewing behaviour, marking space exploration as a topic of possible interest for other videos.[/if]",
                        name: "[if not tcfV2_2]Create a personalized content profile[/if][if tcfV2_2]Create profiles to personalise content[/if]"
                    },
                    6: {
                        description: "[if not tcfV2_2]Personalized content can be shown to you based on a profile about you.[/if][if tcfV2_2]Content presented to you on this service can be based on your content personalisation profiles, which can reflect your activity on this or other services (for instance, the forms you submit, content you look at), possible interests and personal aspects, such as by adapting the order in which content is shown to you, so that it is even easier for you to find (non-advertising) content that matches your interests.[/if]",
                        descriptionLegal: "[if not tcfV2_2]To select personalized content vendors can: Select personalized content based on a user profile or other historical user data, including a user’s prior activity, interests, visits to sites or apps, location, or demographic information.[/if][if tcfV2_2]You read articles on vegetarian food on a social media platform and then use the cooking app of an unrelated company. The profile built about you on the social media platform will be used to present you vegetarian recipes on the welcome screen of the cooking app.<br /><br />You have viewed three videos about rowing across different websites. An unrelated video sharing platform will recommend five other videos on rowing that may be of interest to you when you use your TV app, based on a profile built about you when you visited those different websites to watch online videos.[/if]",
                        name: "[if not tcfV2_2]Select personalized content[/if][if tcfV2_2]Use profiles to select personalised content[/if]"
                    },
                    7: {
                        description: "[if not tcfV2_2]The performance and effectiveness of ads that you see or interact with can be measured.[/if][if tcfV2_2]Information regarding which advertising is presented to you and how you interact with it can be used to determine how well an advert has worked for you or other users and whether the goals of the advertising were reached. For instance, whether you saw an ad, whether you clicked on it, whether it led you to buy a product or visit a website, etc. This is very helpful to understand the relevance of advertising campaigns.[/if]",
                        descriptionLegal: "[if not tcfV2_2]To measure ad performance vendors can:<br/><br/>- Measure whether and how ads were delivered to and interacted with by a user<br/>- Provide reporting about ads including their effectiveness and performance<br/>- Provide reporting about users who interacted with ads using data observed during the course of the user's interaction with that ad<br/>- Provide reporting to publishers about the ads displayed on their property<br/>- Measure whether an ad is serving in a suitable editorial environment (brand-safe) context<br/>- Determine the percentage of the ad that had the opportunity to be seen and the duration of that opportunity<br/>- Combine this information with other information previously collected, including from across websites and apps<br/><br/>Vendors cannot:<br/><br/>- Apply panel or similarly-derived audience insights data to ad measurement data without a Legal Basis to apply market research to generate audience insights (Purpose 9)[/if][if tcfV2_2]You have clicked on an advertisement about a “black Friday” discount by an online shop on the website of a publisher and purchased a product. Your click will be linked to this purchase. Your interaction and that of other users will be measured to know how many clicks on the ad led to a purchase.<br /><br />You are one of very few to have clicked on an advertisement about an “international appreciation day” discount by an online gift shop within the app of a publisher. The publisher wants to have reports to understand how often a specific ad placement within the app, and notably the “international appreciation day” ad, has been viewed or clicked by you and other users, in order to help the publisher and its partners (such as agencies) optimise ad placements.[/if]",
                        name: "[if not tcfV2_2]Measure ad performance[/if][if tcfV2_2]Measure advertising performance[/if]"
                    },
                    8: {
                        description: "[if not tcfV2_2]The performance and effectiveness of content that you see or interact with can be measured.[/if][if tcfV2_2]Information regarding which content is presented to you and how you interact with it can be used to determine whether the (non-advertising) content e.g. reached its intended audience and matched your interests. For instance, whether you read an article, watch a video, listen to a podcast or look at a product description, how long you spent on this service and the web pages you visit etc. This is very helpful to understand the relevance of (non-advertising) content that is shown to you.[/if]",
                        descriptionLegal: "[if not tcfV2_2]To measure content performance vendors can:<br/><br/>- Measure and report on how content was delivered to and interacted with by users.<br/>- Provide reporting, using directly measurable or known information, about users who interacted with the content<br/>- Combine this information with other information previously collected, including from across websites and apps.<br/><br/>Vendors cannot:<br/><br/>- Measure whether and how ads (including native ads) were delivered to and interacted with by a user.<br/>- Apply panel- or similarly derived audience insights data to ad measurement data without a Legal Basis to apply market research to generate audience insights (Purpose 9)[/if][if tcfV2_2]You have read a blog post about hiking on a mobile app of a publisher and followed a link to a recommended and related post. Your interactions will be recorded as showing that the initial hiking post was useful to you and that it was successful in interesting you in the related post. This will be measured to know whether to produce more posts on hiking in the future and where to place them on the home screen of the mobile app. You were presented a video on fashion trends, but you and several other users stopped watching after 30 seconds. This information is then used to evaluate the right length of future videos on fashion trends.[/if]",
                        name: "Measure content performance"
                    },
                    9: {
                        description: "[if not tcfV2_2]Market research can be used to learn more about the audiences who visit sites/apps and view ads.[/if][if tcfV2_2]Reports can be generated based on the combination of data sets (like user profiles, statistics, market research, analytics data) regarding your interactions and those of other users with advertising or (non-advertising) content to identify common characteristics (for instance, to determine which target audiences are more receptive to an ad campaign or to certain contents).[/if]",
                        descriptionLegal: "[if not tcfV2_2]To apply market research to generate audience insights vendors can:<br/><br/>- Provide aggregate reporting to advertisers or their representatives about the audiences reached by their ads, through panel-based and similarly derived insights.<br/>- Provide aggregate reporting to publishers about the audiences that were served or interacted with content and/or ads on their property by applying panel-based and similarly derived insights.<br/>- Associate offline data with an online user for the purposes of market research to generate audience insights if vendors have declared to match and combine offline data sources (Feature 1)<br/>- Combine this information with other information previously collected including from across websites and apps. <br/><br/>Vendors cannot:<br/><br/>- Measure the performance and effectiveness of ads that a specific user was served or interacted with, without a Legal Basis to measure ad performance.<br/>- Measure which content a specific user was served and how they interacted with it, without a Legal Basis to measure content performance.[/if][if tcfV2_2]The owner of an online bookstore wants commercial reporting showing the proportion of visitors who consulted and left its site without buying, or consulted and bought the last celebrity autobiography of the month, as well as the average age and the male/female distribution of each category. Data relating to your navigation on its site and to your personal characteristics is then used and combined with other such data to produce these statistics.<br /><br />An advertiser wants to better understand the type of audience interacting with its adverts. It calls upon a research institute to compare the characteristics of users who interacted with the ad with typical attributes of users of similar platforms, across different devices. This comparison reveals to the advertiser that its ad audience is mainly accessing the adverts through mobile devices and is likely in the 45-60 age range.[/if]",
                        name: "[if not tcfV2_2]Apply market research to generate audience insights[/if][if tcfV2_2]Understand audiences through statistics or combinations of data from different sources[/if]"
                    },
                    10: {
                        description: "[if not tcfV2_2]Your data can be used to improve existing systems and software, and to develop new products[/if][if tcfV2_2]Information about your activity on this service, such as your interaction with ads or content, can be very helpful to improve products and services and to build new products and services based on user interactions, the type of audience, etc. This specific purpose does not include the development or improvement of user profiles and identifiers.[/if]",
                        descriptionLegal: "[if not tcfV2_2]To develop new products and improve products vendors can:<br/><br/>- Use information to improve their existing products with new features and to develop new products<br/>- Create new models and algorithms through machine learning<br/><br/>Vendors cannot: Conduct any other data processing operation allowed under a different purpose under this purpose[/if][if tcfV2_2]A technology platform working with a social media provider notices a growth in mobile app users, and sees based on their profiles that many of them are connecting through mobile connections. It uses a new technology to deliver ads that are formatted for mobile devices and that are low-bandwidth, to improve their performance.<br /><br />An advertiser is looking for a way to display ads on a new type of consumer device. It collects information regarding the way users interact with this new kind of device to determine whether it can build a new mechanism for displaying advertising on this type of device.[/if]",
                        name: "[if not tcfV2_2]Develop and improve products[/if][if tcfV2_2]Develop and improve services[/if]"
                    },
                    11: {
                        description: "Content presented to you on this service can be based on limited data, such as the website or app you are using, your non-precise location, your device type, or which content you are (or have been) interacting with (for example, to limit the number of times a video or an article is presented to you).",
                        descriptionLegal: "A travel magazine has published an article on its website about the new online courses proposed by a language school, to improve travelling experiences abroad. The school’s blog posts are inserted directly at the bottom of the page, and selected on the basis of your non-precise location (for instance, blog posts explaining the course curriculum for different languages than the language of the country you are situated in).<br /><br />A sports news mobile app has started a new section of articles covering the most recent football games. Each article includes videos hosted by a separate streaming platform showcasing the highlights of each match. If you fast-forward a video, this information may be used to select a shorter video to play next.",
                        name: "Use limited data to select content"
                    }
                },
                purposes_label: "Purposes:",
                retention_label: "retention period",
                show_tracking_button: "Customize advertising tracking",
                specialFeatures: {
                    1: {
                        description: "[if not tcfV2_2]Your precise geolocation data can be used in support of one or more purposes. This means your location can be accurate to within several meters.[/if][if tcfV2_2]With your acceptance, your precise location (within a radius of less than 500 metres) may be used in support of the purposes explained in this notice.[/if]",
                        descriptionLegal: "[if not tcfV2_2]Vendors can: Collect and process precise geolocation data in support of one or more purposes.<br/><br/>N.B. Precise geolocation means that there are no restrictions on the precision of a user’s location; this can be accurate to within several meters.[/if]",
                        name: "Use precise geolocation data"
                    },
                    2: {
                        description: "[if not tcfV2_2]Your device can be identified based on a scan of your device's unique combination of characteristics.[/if][if tcfV2_2]With your acceptance, certain characteristics specific to your device might be requested and used to distinguish it from other devices (such as the installed fonts or plugins, the resolution of your screen) in support of the purposes explained in this notice.[/if]",
                        descriptionLegal: "[if not tcfV2_2]Vendors can:<br/><br/>- Create an identifier using data collected via actively scanning a device for specific characteristics, e.g. installed fonts or screen resolution.<br/>- Use such an identifier to re-identify a device.[/if]",
                        name: "Actively scan device characteristics for identification"
                    }
                },
                specialPurposes: {
                    1: {
                        description: "[if not tcfV2_2]Your data can be used to monitor for and prevent fraudulent activity, and ensure systems and processes work properly and securely.[/if][if tcfV2_2]Your data can be used to monitor for and prevent unusual and possibly fraudulent activity (for example, regarding advertising, ad clicks by bots), and ensure systems and processes work properly and securely. It can also be used to correct any problems you, the publisher or the advertiser may encounter in the delivery of content and ads and in your interaction with them.[/if]",
                        descriptionLegal: "[if not tcfV2_2]To ensure security, prevent fraud and debug vendors can:<br/><br/>- Ensure data are securely transmitted<br/>- Detect and prevent malicious, fraudulent, invalid, or illegal activity.<br/>- Ensure correct and efficient operation of systems and processes, including to monitor and enhance the performance of systems and processes engaged in permitted purposes<br/><br/>Vendors cannot: Conduct any other data processing operation allowed under a different purpose under this purpose.[/if][if tcfV2_2]An advertising intermediary delivers ads from various advertisers to its network of partnering websites. It notices a large increase in clicks on ads relating to one advertiser, and uses data regarding the source of the clicks to determine that 80% of the clicks come from bots rather than humans.[/if]",
                        name: "[if not tcfV2_2]Ensure security, prevent fraud, and debug[/if][if tcfV2_2]Ensure security, prevent and detect fraud, and fix errors[/if]"
                    },
                    2: {
                        description: "[if not tcfV2_2]Your device can receive and send information that allows you to see and interact with ads and content.[/if][if tcfV2_2]Certain information (like an IP address or device capabilities) is used to ensure the technical compatibility of the content or advertising, and to facilitate the transmission of the content or ad to your device.[/if]",
                        descriptionLegal: "[if not tcfV2_2]To deliver information and respond to technical requests vendors can:<br/><br/>- Use a user’s IP address to deliver an ad over the internet<br/>- Respond to a user’s interaction with an ad by sending the user to a landing page<br/>- Use a user’s IP address to deliver content over the internet<br/>- Respond to a user’s interaction with content by sending the user to a landing page<br/>- Use information about the device type and capabilities for delivering ads or content, for example, to deliver the right size ad creative or video file in a format supported by the device<br/><br/>Vendors cannot: Conduct any other data processing operation allowed under a different purpose under this purpose.[/if][if tcfV2_2]Clicking on a link in an article might normally send you to another page or part of the article. To achieve this, 1°) your browser sends a request to a server linked to the website, 2°) the server answers back (“here is the article you asked for”), using technical information automatically included in the request sent by your device, to properly display the information / images that are part of the article you asked for. Technically, such exchange of information is necessary to deliver the content that appears on your screen.[/if]",
                        name: "[if not tcfV2_2]Technically deliver ads or content[/if][if tcfV2_2]Deliver and present advertising and content[/if]"
                    }
                },
                data_declaration_label: "Categories of personal data collected and/or processed",
                dataCategories: {
                    1: {
                        id: 1,
                        name: "IP addresses",
                        description: "Your IP address is a number assigned by your Internet Service Provider to any Internet connection. It is not always specific to your device and is not always a stable identifier.\nIt is used to route information on the Internet and display online content (including ads) on your connected device."
                    },
                    2: {
                        id: 2,
                        name: "Device characteristics",
                        description: "Technical characteristics about the device you are using that are not unique to you, such as the language, the time zone or the operating system."
                    },
                    3: {
                        id: 3,
                        name: "Device identifiers",
                        description: "A device identifier is a unique string of characters assigned to your device or browser by means of a cookie or other storage technologies. \nIt may be created or accessed to recognise your device e.g. across web pages from the same site or across multiple sites or apps."
                    },
                    4: {
                        id: 4,
                        name: "Probabilistic identifiers",
                        description: 'A probabilistic identifier can be created by combining characteristics associated with your device (the type of browser or operating system used) and the IP address of the Internet connection. If you give your agreement, additional characteristics (e.g. the installed font or screen resolution) can also be combined to improve precision of the probabilistic identifier.\nSuch an identifier is considered "probabilistic" because several devices can share the same characteristics and Internet connection. It may be used to recognise your device across e.g. web pages from the same site or across multiple sites or apps.'
                    },
                    5: {
                        id: 5,
                        name: "Authentication-derived identifiers",
                        description: "Where an identifier is created on the basis of authentication data, such as contact details associated with online accounts you have created on websites or apps (e.g. e-mail address, phone number) or customer identifiers (e.g. identifier provided by your telecom operator), that identifier may be used to recognise you across websites, apps and devices when you are logged-in with the same contact details."
                    },
                    6: {
                        id: 6,
                        name: "Browsing and interaction data",
                        description: "Your online activity such as the websites you visit, apps you are using, the content you search for on this service,  or your interactions with content or ads, such as the number of times you have seen a specific content or ad or whether you clicked on it.\n"
                    },
                    7: {
                        id: 7,
                        name: "User-provided data",
                        description: "The information you may have provided by way of declaration via a form (e.g. feedback, a comment) or when creating an account (e.g. your age, your occupation)."
                    },
                    8: {
                        id: 8,
                        name: "Non-precise location data",
                        description: "An approximation of your location, expressed as an area with a radius of at least 500 meters. Your approximate location can be deduced from e.g. the IP address of your connection."
                    },
                    9: {
                        id: 9,
                        name: "Precise location data",
                        description: "Your precise location within a radius of less than 500 meters based on your GPS coordinates. It may be used only with your acceptance."
                    },
                    10: {
                        id: 10,
                        name: "Users’ profiles",
                        description: "Certain characteristics (e.g. your possible interests, your purchase intentions, your consumer profile) may be inferred or modeled from your previous online activity (e.g. the content you viewed or the service you used, your time spent on various online content and services) or the information you have provided (e.g. your age, your occupation)."
                    },
                    11: {
                        id: 11,
                        name: "Privacy choices",
                        description: "Your preferences regarding the processing of your data, based on the information you have received."
                    }
                },
                special_features_label: "Special features:",
                special_purposes_label: "Special purposes:",
                storage_info: {
                    detailed: {
                        domain: "Domain:",
                        duration: "Lifetime:",
                        identifier: "Identifier:",
                        method_title: "Method of storage or access:",
                        purposes: "Purposes:",
                        type: {
                            app: "device storage",
                            cookie: "cookie",
                            web: "browser storage"
                        }
                    },
                    heading: "Information on device storage and access",
                    intro: {
                        cookie_refresh: "since your last interaction",
                        day: "day",
                        days: "days",
                        hour: "hour",
                        hours: "hours",
                        indefinite: "indefinite",
                        session: "duration of the session",
                        up_to: "up to",
                        less_than_day: "less than 1 day"
                    },
                    label: "Maximum storage duration:",
                    learn_label: "More information"
                },
                vendors_section_title: "Manage preferences for each advertising service",
                widget_features_intro: "In order to pursue one or more of these purposes, some services may also use the following features and special features.",
                widget_features_title: "Features",
                widget_iab_title: "Manage preferences for each purpose",
                widget_intro: "The advertising services listed below - also referred to as vendors - adhere to the [link iab_tcf]IAB Transparency and Consent Framework[/link] and allow you to customize your advertising tracking preferences. [if not LIRestricted]Some of them [/if][if LIRestricted]They [/if]only process your personal data with your [tip consent]consent[/tip][if not LIRestricted], while others rely on a [tip legitimate_interest]legitimate interest[/tip][/if]. Please be aware that denying consent for a particular purpose may make related features unavailable.<br/><br/>You can express your preferences for all purposes and services at once via the controls provided below.<br/>These preferences are captured in a digital signal (via the so-called TC String) to ensure and demonstrate that you have validly consented to [if not LIRestricted]or not objected to [/if]advertising purposes. This digital signal is limited to data strictly necessary to achieve such a purpose.",
                widget_other_providers: "Other providers",
                widget_purposes_title: "Purposes",
                widget_special_features_intro: "The following features allow you to exercise your choice separately from the purpose-related controls. Please note that special features may be used, regardless of the choice indicated, if those features are needed for ensuring security, preventing fraud or debugging.",
                widget_special_features_title: "Special features",
                widget_special_purposes_title: "Special purposes",
                widget_title: "Your TCF-related preferences"
            },
            tooltips: {
                advertising_related_purposes: {
                    body: "<p>We and selected [link vendors]third parties[/link], may <em>match and combine offline data sources; link different devices; receive and use automatically-sent device characteristics for identification; use precise geolocation data; actively scan device characteristics for identification</em> in order to <em>store and/or access information on a device</em> and process personal data (e.g. browsing data, IP addresses, usage data or unique identifiers) for the following purposes: <em>select basic ads; create a personalized ads profile; select personalized ads; create a personalized content profile; select personalized content; measure ad performance; measure content performance; apply market research to generate audience insights; develop and improve products; ensure security, prevent fraud, and debug; technically deliver ads or content.</em>.</p><p>You can change your ad-related choices at any time, without incurring major limitations, by accessing the [link adv_pref]advertising preferences panel[/link].</p>",
                    title: "Advertising-related purposes and features"
                },
                consent: {
                    body: "<p>Services that choose to rely on your consent may not process your personal data unless you freely give your consent. You have the right to deny or withdraw your consent without incurring major limitations and to review your choices at any time. By enabling any advertising purpose or individual service, you consent to such processing of your data.</p>",
                    title: "Processing on the basis of consent"
                },
                legitimate_interest: {
                    body: "<p>The processing of your personal data (e.g. browsing data, IP addresses, usage data or unique identifiers) by a service may be justified by the presence of a specific interest considered as “legitimate” by the applicable legislation. Therefore, whenever a service chooses to rely on such a legitimate interest your consent is not necessary. To find out more about the specific legitimate interests pursued by each service, please refer to the respective privacy policy and legitimate interest information available in the “Manage preferences for each advertising service” section of this panel.</p><p><strong>You have the right to object to any processing based on legitimate interest without incurring major limitations and you may exercise this right at any time directly within this panel by deselecting the respective checkboxes on a per-purpose or per-service basis.</strong></p>",
                    title: "Processing on the basis of a legitimate interest"
                },
                pref_legitimate_interest: {
                    body: '<p>A "legitimate interest" is an interest that, according to applicable legislation, justifies the processing of personal data. To find out more about the specific legitimate interests pursued by each service, please refer to the respective privacy policy and legitimate interest information.<br/>Services that choose to rely on a legitimate interest may process your data, unless you object to such processing.</p><p><strong>By deselecting this checkbox, you exercise your right to object.</strong></p>',
                    title: "Legitimate interest"
                },
                your_rights: {
                    body: "<h3>Your right to withdraw</h3><p>Where the processing of your data is based on consent, you can freely give, deny, or withdraw your consent without incurring major limitations. With respect to advertising-related purposes, you can change your choices at any time by accessing the [link adv_pref]advertising preferences panel[/link].</p>[if not legitimateInterestRestricted]<h3>Your right to object</h3><p>Where we, or selected third parties, rely on a legitimate interest to process your personal data (rather than on your consent), you have the right to object to such processing. More information on “legitimate interest” and on how to exercise your right to object with respect to advertising-related purposes can be found inside the [link adv_pref]advertising preferences panel[/link].</p>[/if]",
                    title: "Your rights"
                }
            },
            uspr: {
                gpc_signal: "Your opt-out preference signal (GPC) has been honored. Use your device settings to modify it.",
                preference_widget: {
                    notice_caption: "Notice at collection",
                    preference_caption: "Your Privacy Choices",
                    preference_img_alt: "California Consumer Privacy Act (CCPA) Opt-Out Icon"
                },
                privacy_policy: "privacy policy",
                purposes: {
                    adv: "Processing of my personal information for <b>targeted advertising</b>",
                    s: "<b>Sale</b> of my personal information",
                    sd5: "Processing of my <b>citizenship or immigration status</b>",
                    sd8: "Processing of my <b>precise geolocation data</b>",
                    sd9: "Processing of my <b>social security, driver's license, state identification card, or passport number</b>",
                    sh: "<b>Sharing</b> of my personal information"
                },
                widget_intro: "The options provided in this section unify and simplify the exercise of some of <b>your privacy rights as a user residing in the United States.</b><br>To learn more about your privacy rights and how to exercise them, consult our %{privacy_policy}.",
                widget_title: "Your privacy rights under US state privacy laws"
            }
        }
    };
    if (2 == (Date.UTC.apply(window, ze.TCF2_2_DATE) <= Date.now() ? 2.2 : 2) && "2.2" !== (null === (Ge = _iub) || void 0 === Ge || null === (qe = Ge.csConfiguration) || void 0 === qe || null === (Ye = qe.tcfVersion) || void 0 === Ye ? void 0 : Ye.toString())) {
        var nt = Object.keys(tt)[0];
        delete tt[nt].tcf_v2.purposes[11]
    }
    window._iub.i18nForBanner = tt;
    var it = function() {
        function e(t) {
            i(this, e),
            this.object = t || {},
            this.listenersMap = {},
            this.object.__iubJlibEmitterListeners__ = this.listenersMap,
            this.object.on = this.on.bind(this),
            this.object.once = this.once.bind(this),
            this.object.off = this.off.bind(this),
            this.object.emit = this.emit.bind(this)
        }
        return a(e, [{
            key: "getListeners",
            value: function(e) {
                return this.listenersMap[e] = this.listenersMap[e] || [],
                this.listenersMap[e]
            }
        }, {
            key: "addListener",
            value: function(e, t, n) {
                this.getListeners(e).unshift({
                    fn: t,
                    once: !!n
                })
            }
        }, {
            key: "on",
            value: function(e, t) {
                return this.addListener(e, t),
                this.object
            }
        }, {
            key: "once",
            value: function(e, t) {
                return this.addListener(e, t, !0),
                this.object
            }
        }, {
            key: "off",
            value: function(e, t) {
                for (var n = this.getListeners(e), i = n.length - 1; i >= 0; i--)
                    n[i].fn === t && n.splice(i, 1);
                return this.object
            }
        }, {
            key: "emit",
            value: function(e) {
                for (var t = this.getListeners(e), n = t.length - 1; n >= 0; n--) {
                    var i = t[n]
                      , o = Array.prototype.slice.call(arguments, 1);
                    i.once && t.splice(n, 1),
                    i.fn.apply(null, o)
                }
            }
        }]),
        e
    }()
      , ot = function(e) {
        return new it(e)
    }
      , at = function(e) {
        var t = !e.hasAttribute("disabled")
          , n = !e.getAttribute("aria-hidden");
        return t && n && !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
      , rt = 'a[href]:not([tabindex="-1"]),button:not([disabled]):not([tabindex="-1"]),[tabindex]:not([tabindex="-1"]),input:not([disabled]):not([type="hidden"]):not([tabindex="-1"]),select:not([disabled]):not([tabindex="-1"]),textarea:not([disabled]):not([tabindex="-1"]),[contenteditable]:not([tabindex="-1"])'
      , st = null
      , ct = !1
      , lt = []
      , pt = !1
      , ut = !1
      , dt = !1
      , ht = function(e) {
        if (pt || null === e.relatedTarget && !dt) {
            pt = !1;
            var t = e.target;
            if (st) {
                var n = document.querySelector(st);
                if (!n.contains(t))
                    (function(e, t) {
                        var n = e.querySelectorAll(rt)
                          , i = 0
                          , o = 1;
                        t && (i = n.length - 1,
                        o = -1);
                        for (var a = n[i]; a && !at(a); )
                            a = n[i += o];
                        return a
                    }
                    )(n, ut).focus()
            }
        }
    }
      , ft = function(e) {
        var t = e.code || e.key;
        pt = "Tab" === t,
        ut = event.shiftKey && pt
    }
      , bt = function() {
        dt = !0
    }
      , mt = function() {
        dt = !1
    }
      , gt = function(e) {
        if (ct || (ct = !0,
        Ae(document.body, "focusin", ht),
        Ae(window, "keydown", ft),
        Ae(document, "mousedown", bt),
        Ae(document, "mouseup", mt)),
        e)
            lt.push({
                selector: st,
                lastActive: document.activeElement
            }),
            st = e;
        else {
            var t = lt.pop();
            t && (st = t.selector,
            t.lastActive.focus())
        }
    }
      , vt = function(e) {
        var t = e instanceof HTMLElement ? e : document.querySelector(e);
        if (t) {
            var n = t.querySelectorAll(rt);
            Array.prototype.slice.call(n).forEach((function(e) {
                var t = e.getAttribute("tabIndex");
                e.setAttribute("data-tabenableindex", t || ""),
                e.setAttribute("tabIndex", -1)
            }
            ))
        }
    }
      , yt = !1
      , kt = !1
      , wt = !1
      , Ct = function() {
        if (!yt) {
            var e = document.getElementsByTagName("head")[0];
            Oe(".iubenda-alert{position:fixed!important;top:0!important;left:0!important;width:100%!important;height:100%!important;z-index:2147483647!important;background-color:rgba(0,0,0,.5)!important;font-family:\"Helvetica Neue\",-apple-system,sans-serif!important;display:flex!important;align-items:center!important;justify-content:center!important;font-size:16px!important}.iubenda-alert *{font-size:100%!important;width:auto!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;background:0 0!important;box-sizing:border-box!important;-webkit-tap-highlight-color:transparent!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important;font-family:-apple-system,sans-serif!important;text-decoration:none!important;color:currentColor!important;background-attachment:scroll!important;background-color:transparent!important;background-image:none!important;background-position:0 0!important;background-repeat:repeat!important;border:0!important;border-color:#000!important;border-color:currentColor!important;border-radius:0!important;border-style:none!important;border-width:medium!important;bottom:auto!important;clear:none!important;clip:auto!important;counter-increment:none!important;counter-reset:none!important;direction:inherit!important;float:none!important;font-style:inherit!important;font-variant:normal!important;font-weight:inherit!important;height:auto!important;left:auto!important;letter-spacing:normal!important;line-height:inherit!important;list-style-type:inherit!important;list-style-position:outside!important;list-style-image:none!important;margin:0!important;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:1;overflow:visible!important;padding:0!important;position:static!important;quotes:\"\" \"\"!important;right:auto!important;table-layout:auto!important;text-align:left!important;text-indent:0!important;text-transform:none!important;top:auto!important;unicode-bidi:normal!important;vertical-align:baseline!important;visibility:inherit!important;white-space:normal!important;width:auto!important;word-spacing:normal!important;z-index:auto!important;background-origin:padding-box!important;background-origin:padding-box!important;background-clip:border-box!important;background-size:auto!important;-o-border-image:none!important;border-image:none!important;border-radius:0!important;border-radius:0!important;box-shadow:none!important;-moz-column-count:auto!important;column-count:auto!important;-moz-column-gap:normal!important;column-gap:normal!important;-moz-column-rule:medium none #000!important;column-rule:medium none #000!important;-moz-column-span:none!important;column-span:none!important;-moz-column-width:auto!important;column-width:auto!important;font-feature-settings:normal!important;overflow-x:visible!important;overflow-y:visible!important;-webkit-hyphens:manual!important;hyphens:manual!important;perspective:none!important;perspective-origin:50% 50%!important;text-shadow:none!important;transition:all 0s ease 0s!important;transform:none!important;transform-origin:50% 50%!important;transform-style:flat!important;word-break:normal!important}.iubenda-alert .iubenda-alert-dialog{margin:16px!important;width:100%!important;border-radius:6px!important;background-color:#111!important;color:#f4f4f4!important}@media (min-width:320px){.iubenda-alert .iubenda-alert-dialog{width:320px!important}}.iubenda-alert .iubenda-alert-dialog .iubenda-alert-dialog-content{padding:24px 24px 0!important}.iubenda-alert .iubenda-alert-dialog .iubenda-alert-dialog-buttons{padding:24px!important;display:flex!important}.iubenda-alert .iubenda-alert-dialog .iubenda-alert-dialog-buttons button{flex:1!important}.iubenda-alert button{flex:1!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;margin:4px!important;padding:8px 16px!important;border-radius:64px!important;cursor:pointer!important;font-weight:700!important;font-size:100%!important;border:1px solid transparent!important;color:#fff;text-align:center!important}.iubenda-alert button:hover{border-color:currentColor!important}.iubenda-alert button.iubenda-button-confirm{background-color:#0073ce!important}.iubenda-alert button.iubenda-button-cancel{background-color:rgba(255,255,255,.1)!important}#iubenda-cs-banner .iub-toggle-checkbox,#iubenda-iframe .iub-toggle-checkbox{flex-shrink:0!important;display:flex!important;align-items:center!important;margin-left:24px!important}#iubenda-cs-banner .iub-toggle-checkbox input,#iubenda-iframe .iub-toggle-checkbox input{-moz-appearance:none!important;appearance:none!important;-webkit-appearance:none!important;padding:0!important;border:0!important;margin:0!important}#iubenda-cs-banner .iub-toggle-checkbox input::-ms-check,#iubenda-iframe .iub-toggle-checkbox input::-ms-check{visibility:hidden}#iubenda-cs-banner .iub-toggle-checkbox input.style1,#iubenda-iframe .iub-toggle-checkbox input.style1{width:64px!important;height:32px!important;border-radius:32px!important;transition:background-position .4s ease,background-color .4s ease!important;background-color:#ccc!important;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' d='M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zM5.729 5.033a.5.5 0 0 0-.638.058l-.058.07a.5.5 0 0 0 .058.637l3.201 3.201-3.201 3.203a.5.5 0 0 0 .707.707l3.201-3.203 3.203 3.203.07.058a.5.5 0 0 0 .637-.058l.058-.07a.5.5 0 0 0-.058-.637L9.706 8.999l3.203-3.201a.5.5 0 0 0-.707-.707L8.999 8.292 5.798 5.091z'/%3E%3C/svg%3E\")!important;background-repeat:no-repeat!important;background-position:top 4px left 4px!important;background-size:24px 24px!important}#iubenda-cs-banner .iub-toggle-checkbox input.style1:checked,#iubenda-iframe .iub-toggle-checkbox input.style1:checked{background-color:#1cc691!important;background-position:top 4px left 36px!important;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' d='M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zm4.646 5.646l-6.198 6.2-3.1-3a.5.5 0 1 0-.696.718l3.454 3.342a.5.5 0 0 0 .701-.006l6.547-6.546a.5.5 0 1 0-.708-.708z'/%3E%3C/svg%3E\")!important}#iubenda-cs-banner .iub-toggle-checkbox input.style1:checked.sm,#iubenda-iframe .iub-toggle-checkbox input.style1:checked.sm{background-position:top 3px left 27px!important}#iubenda-cs-banner .iub-toggle-checkbox input.style1:checked.half,#iubenda-cs-banner .iub-toggle-checkbox input.style1:checked[value=partial],#iubenda-iframe .iub-toggle-checkbox input.style1:checked.half,#iubenda-iframe .iub-toggle-checkbox input.style1:checked[value=partial]{background-color:#ffd24d!important;background-position:top 4px left 20px!important;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' d='M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zm4 8.5H5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z'/%3E%3C/svg%3E\")!important}#iubenda-cs-banner .iub-toggle-checkbox input.style1:checked.half.sm,#iubenda-cs-banner .iub-toggle-checkbox input.style1:checked[value=partial].sm,#iubenda-iframe .iub-toggle-checkbox input.style1:checked.half.sm,#iubenda-iframe .iub-toggle-checkbox input.style1:checked[value=partial].sm{background-position:top 3px left 15px!important}#iubenda-cs-banner .iub-toggle-checkbox input.style1.sm,#iubenda-iframe .iub-toggle-checkbox input.style1.sm{width:48px!important;height:24px!important;border-radius:24px!important;background-size:18px 18px!important;background-position:top 3px left 3px!important}#iubenda-cs-banner .iub-toggle-checkbox input::-ms-check,#iubenda-iframe .iub-toggle-checkbox input::-ms-check{visibility:hidden!important}#iubenda-cs-banner .iub-toggle-checkbox input:not([disabled]),#iubenda-iframe .iub-toggle-checkbox input:not([disabled]){cursor:pointer!important}#iubenda-cs-banner .iub-toggle-checkbox input[disabled],#iubenda-iframe .iub-toggle-checkbox input[disabled]{opacity:.35}#iubenda-cs-banner .iub-toggle-checkbox .iub-caption,#iubenda-iframe .iub-toggle-checkbox .iub-caption{display:none!important}#iubenda-iframe .iub-consent-buttons{position:-webkit-sticky!important;position:sticky!important;top:0!important;background-color:#fff!important;z-index:3!important;border-bottom:1px solid rgba(0,0,0,.075)!important;padding:24px 16px!important;display:flex!important;justify-content:flex-end!important;align-items:center!important}@media (max-width:799px){#iubenda-iframe .iub-consent-buttons{padding:16px 12px!important}}@media (max-width:799px){#iubenda-iframe .iub-consent-buttons{justify-content:center!important}#iubenda-iframe .iub-consent-buttons>div{display:flex!important;flex:1!important}#iubenda-iframe .iub-consent-buttons>div button{flex:1!important}}#iubenda-iframe .iub-btn{font-size:14px!important;font-weight:700!important;display:inline-flex;justify-content:center!important;align-items:center!important;padding:8px 16px!important;color:#404040!important;background-color:rgba(0,0,0,.07)!important;border-radius:6px!important;text-decoration:none!important;background-size:21px!important;background-position:center left 10px!important;background-repeat:no-repeat!important;cursor:pointer!important;border:1px solid transparent!important}#iubenda-iframe .iub-btn:hover{background-color:transparent!important;border-color:currentColor!important}#iubenda-iframe .iub-btn svg{margin-right:4px!important;width:20px!important;height:20px!important}#iubenda-iframe .iub-btn.iub-btn-cp{max-width:100%!important}#iubenda-iframe .iub-btn.iub-btn-cp span{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}#iubenda-iframe .iub-btn.iub-btn-back{padding:8px!important}#iubenda-iframe .iub-btn.iub-btn-back svg{margin:0!important}#iubenda-iframe .iub-btn-config{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='none' fill-rule='evenodd' stroke='%23535353' d='M9.803 2.5v.77h0c.499.199.958.478 1.363.822l.642-.364a.5.5 0 0 1 .686.197l1.273 2.35a.5.5 0 0 1-.193.673l-.659.373h0a5.244 5.244 0 0 1 0 1.358l.659.373a.5.5 0 0 1 .193.673l-1.273 2.35a.5.5 0 0 1-.686.197l-.642-.364h0a4.932 4.932 0 0 1-1.362.823v.769a.5.5 0 0 1-.5.5H6.696a.5.5 0 0 1-.5-.5l-.001-.77h0a4.932 4.932 0 0 1-1.362-.822l-.642.364a.5.5 0 0 1-.686-.197l-1.273-2.35a.5.5 0 0 1 .193-.673l.659-.373h0a5.244 5.244 0 0 1 0-1.359l-.658-.372a.5.5 0 0 1-.193-.674l1.272-2.349a.5.5 0 0 1 .686-.197l.642.364h0a4.932 4.932 0 0 1 1.362-.823V2.5a.5.5 0 0 1 .5-.5h2.607a.5.5 0 0 1 .5.5zM8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'/%3E%3C/svg%3E\")!important;padding-left:40px!important}#iubenda-iframe .iub-btn-primary{background-color:#0073ce!important;color:#fff!important}#iubenda-iframe .iub-btn-stroked{background-color:transparent!important;border:1px solid rgba(0,0,0,.25)!important}#iubenda-iframe .iub-btn-stroked:hover{background-color:transparent!important;border-color:rgba(0,0,0,.65)!important}@media (max-width:799px){#iubenda-iframe .iub-btn.iub-desktop{display:none!important}}@media (min-width:800px){#iubenda-iframe .iub-btn.iub-mobile{display:none!important}}#iubenda-iframe .iub-btn-consent{margin:0 4px!important;border-radius:32px!important;box-shadow:0 4px 8px -6px rgba(0,0,0,.2)!important;padding:8px 20px!important;background-color:#ededed!important;text-align:center!important;color:#3c3c3c!important;background-repeat:no-repeat!important;background-position:center left 16px!important;padding-left:38px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;position:relative!important}#iubenda-iframe .iub-btn-consent:active{box-shadow:0 2px 4px -6px rgba(0,0,0,.5)!important;top:1px!important}#iubenda-iframe .iub-btn-consent.iub-btn-accept{color:#06281f!important;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 515.556 515.556' height='512px' viewBox='0 0 515.556 515.556' width='512px' class=''%3E%3Cg%3E%3Cpath d='m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z' data-original='%23000000' class='active-path' data-old_color='%23000000' fill='%2306281F'/%3E%3C/g%3E%3C/svg%3E%0A\")!important;background-size:16px!important}#iubenda-iframe .iub-btn-consent.iub-btn-reject{background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 386.667 386.667' height='512px' viewBox='0 0 386.667 386.667' width='512px' class=''%3E%3Cg%3E%3Cpath d='m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z' data-original='%23000000' class='active-path' data-old_color='%23000000' fill='%233c3c3c'/%3E%3C/g%3E%3C/svg%3E%0A\")!important;background-size:14px!important}#iubenda-iframe .iub-btn-consent:focus{background-color:#fff!important}@media (max-width:799px){#iubenda-iframe .iub-btn-consent{padding:8px 10px!important;padding-left:32px!important;background-position:center left 12px!important;margin:0 4px!important}}#iubenda-iframe{background-color:rgba(0,0,0,.8)!important;transition:opacity .4s ease,visibility .4s ease!important;font-size:16px!important;position:fixed!important;z-index:100000000!important;top:0!important;left:0!important;width:100%!important;height:100%!important;border:0!important;margin:0!important;padding:0!important;line-height:1.5!important;align-items:unset!important;align-content:unset!important;flex-wrap:unset!important;align-items:center!important;justify-content:center!important;display:none!important}#iubenda-iframe *{align-items:unset!important;align-content:unset!important;flex-wrap:unset!important;font-size:100%!important;width:auto!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;background:0 0!important;box-sizing:border-box!important;-webkit-tap-highlight-color:transparent!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important;font-family:-apple-system,sans-serif!important;text-decoration:none!important;color:currentColor!important;background-attachment:scroll!important;background-color:transparent!important;background-image:none!important;background-position:0 0!important;background-repeat:repeat!important;border:0!important;border-color:#000!important;border-color:currentColor!important;border-radius:0!important;border-style:none!important;border-width:medium!important;bottom:auto!important;clear:none!important;clip:auto!important;counter-increment:none!important;counter-reset:none!important;direction:inherit!important;float:none!important;font-style:inherit!important;font-variant:normal!important;font-weight:inherit!important;height:auto!important;left:auto!important;letter-spacing:normal!important;line-height:inherit!important;list-style-type:inherit!important;list-style-position:outside!important;list-style-image:none!important;margin:0!important;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:1;overflow:visible!important;padding:0!important;position:static!important;quotes:\"\" \"\"!important;right:auto!important;table-layout:auto!important;text-align:left!important;text-indent:0!important;text-transform:none!important;top:auto!important;unicode-bidi:normal!important;vertical-align:baseline!important;visibility:inherit!important;white-space:normal!important;width:auto!important;word-spacing:normal!important;z-index:auto!important;background-origin:padding-box!important;background-origin:padding-box!important;background-clip:border-box!important;background-size:auto!important;-o-border-image:none!important;border-image:none!important;border-radius:0!important;border-radius:0!important;box-shadow:none!important;-moz-column-count:auto!important;column-count:auto!important;-moz-column-gap:normal!important;column-gap:normal!important;-moz-column-rule:medium none #000!important;column-rule:medium none #000!important;-moz-column-span:none!important;column-span:none!important;-moz-column-width:auto!important;column-width:auto!important;font-feature-settings:normal!important;overflow-x:visible!important;overflow-y:visible!important;-webkit-hyphens:manual!important;hyphens:manual!important;perspective:none!important;perspective-origin:50% 50%!important;text-shadow:none!important;transition:all 0s ease 0s!important;transform:none!important;transform-origin:50% 50%!important;transform-style:flat!important;word-break:normal!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}#iubenda-iframe.iubenda-iframe-visible{display:flex!important}#iubenda-iframe input[type=checkbox]:before{display:none!important}#iubenda-iframe .iub-popover-trigger{display:inline-block!important;text-decoration:underline!important;-webkit-text-decoration-style:dashed!important;text-decoration-style:dashed!important;position:relative!important;margin-right:16px!important;cursor:pointer!important;line-height:1.25!important;font-weight:inherit!important;color:inherit!important}#iubenda-iframe .iub-popover-trigger:after,#iubenda-iframe .iub-popover-trigger:before{content:\"\";display:inline-block;width:14px;height:14px;border-radius:12px;vertical-align:middle;background-size:4px;position:absolute;left:calc(100% + 2px);top:3px}#iubenda-iframe .iub-popover-trigger:before{background-color:currentColor;opacity:.35}#iubenda-iframe .iub-popover-trigger:after{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7' height='13' viewBox='0 0 7 13'%3E%3Cg fill='%23FFF' fill-rule='evenodd'%3E%3Cpath d='M2.779 1.288a1.287 1.287 0 112.574 0 1.287 1.287 0 01-2.574 0zM5.467 10.422l.903 1.851-.7.341a2.496 2.496 0 01-3.545-2.717l.818-3.252a.42.42 0 00-.178-.382.422.422 0 00-.452-.041l-.844.412-.902-1.852.843-.412a2.491 2.491 0 012.576.233 2.49 2.49 0 01.989 2.389 1.105 1.105 0 01-.02.095l-.817 3.253a.42.42 0 00.178.382c.08.059.244.142.451.041l.7-.341z'/%3E%3C/g%3E%3C/svg%3E\");background-position:center;background-repeat:no-repeat}#iubenda-iframe .iub-popover{position:absolute!important;top:24px!important;bottom:0!important;left:0!important;right:0!important;border-radius:4px!important;background-color:#fff!important;color:#222!important;z-index:2!important;box-shadow:0 0 32px rgba(0,0,0,.1)!important;opacity:0!important;visibility:hidden!important;transform:translateY(24px)!important;transition:opacity .3s ease,visibility .3s ease,transform .3s ease!important;display:flex!important;flex-direction:column!important;z-index:99!important;pointer-events:none!important;overflow:hidden!important}#iubenda-iframe .iub-popover-header{flex-shrink:0!important;display:flex!important;justify-content:space-between!important;z-index:1!important;box-shadow:0 16px 16px #fff!important}#iubenda-iframe .iub-popover-header>*{padding:24px!important;padding-bottom:0!important}#iubenda-iframe .iub-popover-header-title{font-size:18px!important;font-weight:700!important}#iubenda-iframe .iub-popover-header-close{font-size:24px!important;font-weight:300!important;cursor:pointer!important;line-height:1!important;position:relative!important;top:-2px!important}#iubenda-iframe .iub-popover-content{font-size:14px!important;flex:1!important;font-weight:300!important;line-height:1.5!important;position:relative!important}#iubenda-iframe .iub-popover-content>div{padding:0 24px!important;overflow-y:auto!important;height:100%!important}#iubenda-iframe .iub-popover-content>div:after,#iubenda-iframe .iub-popover-content>div:before{content:\"\";display:block;height:24px}#iubenda-iframe .iub-popover-content>div .storage-info-field:not(:last-of-type){margin-bottom:0!important}#iubenda-iframe .iub-popover-content>div .storage-info-field>.storage-info-field-title{font-weight:700!important}#iubenda-iframe .iub-popover-content h3{margin-bottom:16px!important;font-weight:700!important}#iubenda-iframe .iub-popover-content p:not(:last-of-type){margin-bottom:16px!important}#iubenda-iframe .iub-popover-content a{text-decoration:underline!important;cursor:pointer!important;opacity:.8!important}#iubenda-iframe .iub-popover-content b,#iubenda-iframe .iub-popover-content strong{font-weight:700!important}#iubenda-iframe .iub-popover-content em,#iubenda-iframe .iub-popover-content i{font-style:italic!important}#iubenda-iframe .iub-popover-content:after{position:absolute;content:\"\";display:block;height:24px;pointer-events:none;left:0;right:0;bottom:0;background:linear-gradient(180deg,rgba(255,255,255,0) 0,#fff 100%)}#iubenda-iframe .iub-popover{top:25%!important}#iubenda-iframe.iub-popover-visible .iub-popover{opacity:1!important;visibility:visible!important;transform:translateY(0)!important;pointer-events:auto!important}#iubenda-iframe.iub-popover-visible #iubenda-iframe-popup:before{opacity:1;visibility:visible;pointer-events:auto}@-webkit-keyframes iubenda-iframe-spinner{from{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes iubenda-iframe-spinner{from{transform:rotate(0)}to{transform:rotate(359deg)}}#iubenda-iframe .iubenda-iframe-spinner{position:absolute!important;top:50%!important;left:50%!important;transform:translate(-50%,-50%)!important}#iubenda-iframe .iubenda-iframe-spinner:after{content:\"\"!important;border:solid 2px transparent!important;border-top-color:currentColor!important;border-left-color:currentColor!important;-webkit-animation:iubenda-iframe-spinner .8s linear infinite!important;animation:iubenda-iframe-spinner .8s linear infinite!important;width:48px!important;height:48px!important;border-radius:48px!important;display:inline-block!important;vertical-align:middle!important;color:#fff!important}#iubenda-iframe #iubenda-iframe-popup.iubenda-showing-popup .iubenda-iframe-spinner:after,#iubenda-iframe #iubenda-iframe-popup.iubenda-showing-popup~.iubenda-iframe-spinner:after{color:#000!important}#iubenda-iframe .iub-legitimate-interest-checkbox{padding:16px!important;border-radius:4px!important;background-color:rgba(0,0,0,.02)!important;display:flex!important;justify-content:space-between!important;align-items:center!important;margin-top:10px!important}#iubenda-iframe .iub-legitimate-interest-checkbox label{margin-right:8px!important;flex:1!important;font-weight:400!important}#iubenda-iframe .iub-legitimate-interest-checkbox input[type=checkbox]{-moz-appearance:none!important;appearance:none!important;-webkit-appearance:none!important;border:0!important;margin:0!important;width:24px!important;height:24px!important;border-radius:4px!important;box-shadow:inset 0 0 0 2px rgba(0,0,0,.35)!important;background-color:#fff!important;flex-shrink:0!important;cursor:pointer!important}#iubenda-iframe .iub-legitimate-interest-checkbox input[type=checkbox]:checked{box-shadow:none!important;background-color:#1cc691!important;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' id='Capa_1' enable-background='new 0 0 515.556 515.556' height='512px' viewBox='0 0 515.556 515.556' width='512px' class=''%3E%3Cg%3E%3Cpath d='m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z' data-original='%23000000' class='active-path' data-old_color='%23000000' fill='%23FFFFFF'/%3E%3C/g%3E%3C/svg%3E%0A\")!important;background-position:center!important;background-repeat:no-repeat!important;background-size:14px!important}#iubenda-iframe #iubenda-iframe-popup{position:relative!important;width:800px!important;height:650px!important;box-shadow:0 0 16px rgba(0,0,0,.02)!important;border-radius:4px!important;overflow:hidden!important}#iubenda-iframe #iubenda-iframe-popup:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:98;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .3s ease,visibility .3s ease}@media (max-height:649px){#iubenda-iframe #iubenda-iframe-popup{height:calc(100% - 32px)!important}}@media (max-width:799px){#iubenda-iframe #iubenda-iframe-popup{width:calc(100% - 32px)!important}}#iubenda-iframe .iubenda-iframe-close-btn{cursor:pointer!important;width:24px!important;height:24px!important;border-radius:24px!important;display:flex!important;justify-content:center!important;align-items:center!important;font-weight:300!important;background-color:#fff!important;position:absolute!important;top:0!important;right:0!important;transform:translate(50%,-50%)!important;transition:transform .4s ease!important;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21' viewBox='0 0 21 21'%3E%3Cpath fill='%23000' fill-rule='nonzero' d='M18.5.379L20.621 2.5l-8 8 8 8-2.121 2.121-8-8-8 8L.379 18.5l8-8-8-8L2.5.379l8 8z'/%3E%3C/svg%3E\")!important;background-size:8px 8px!important;background-repeat:no-repeat!important;background-position:center!important;box-shadow:0 0 32px rgba(0,0,0,.3)!important}#iubenda-iframe .iubenda-iframe-close-btn:hover{transform:translate(50%,-50%) scale(1.15)!important}@media (max-width:799px){#iubenda-iframe .iubenda-iframe-close-btn{width:36px!important;height:36px!important;border-radius:36px!important;transform:translate(25%,-25%)!important;transition:none!important}#iubenda-iframe .iubenda-iframe-close-btn:hover{transform:translate(25%,-25%)!important}}#iubenda-iframe iframe{width:100%!important;height:100%!important}#iubenda-iframe #iubenda-iframe-content{height:100%!important;display:flex!important;flex-direction:column!important}#iubenda-iframe .iubenda-modal-navigation{position:relative!important;z-index:3!important}#iubenda-iframe .iubenda-modal-navigation:not(.iubenda-modal-navigation-brand){color:#555!important;box-shadow:0 18px 10px -8px #fff!important}@media (max-width:799px){#iubenda-iframe .iubenda-modal-navigation:not(.iubenda-modal-navigation-brand){box-shadow:0 28px 12px -8px #fff!important}}#iubenda-iframe .iubenda-modal-navigation.iubenda-modal-navigation-brand{position:relative;box-shadow:0 1px 0 rgba(0,0,0,.075)!important}#iubenda-iframe .iubenda-modal-navigation.iubenda-modal-navigation-brand .iubenda-modal-navigation-logo{display:flex;flex-shrink:0!important;flex:1!important;margin-right:16px!important}#iubenda-iframe .iubenda-modal-navigation.iubenda-modal-navigation-brand .iubenda-modal-navigation-logo img{max-width:192px!important;max-height:56px!important;min-width:auto!important;min-height:auto!important}@media (max-width:799px){#iubenda-iframe .iubenda-modal-navigation.iubenda-modal-navigation-brand .iubenda-modal-navigation-logo img{max-width:75%!important}}#iubenda-iframe .iubenda-modal-navigation.iubenda-modal-navigation-brand .purposes-header{align-items:center!important}#iubenda-iframe .iubenda-iframe-top-container{flex:1!important;background-color:#fff!important;overflow:hidden!important}#iubenda-iframe .iubenda-iframe-footer{background-color:#fff!important;color:#555!important;font-size:16px!important;position:relative!important;z-index:10!important;box-shadow:0 -18px 10px -8px #fff!important;border-bottom-left-radius:4px!important;border-bottom-right-radius:4px!important}#iubenda-iframe .iubenda-iframe-footer .iub-btn-back{padding:8px 16px!important}#iubenda-iframe .iubenda-iframe-footer:not(.iubenda-iframe-footer-absolute):before{content:\"\";height:48px;display:block;width:100%;flex:0 0 100%;background:linear-gradient(to bottom,rgba(255,255,255,0) 0,#fff 100%);position:absolute;bottom:100%;pointer-events:none}@media (min-width:800px){#iubenda-iframe .iubenda-iframe-footer:not(.iubenda-iframe-footer-absolute)>*{margin-top:8px!important}}#iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute{pointer-events:none!important}#iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute>*{pointer-events:auto!important}@media (min-width:800px){#iubenda-iframe .iubenda-iframe-footer{display:flex;align-items:center!important;justify-content:space-between!important}#iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute #iubFooterIabBtnContainer{opacity:0!important;pointer-events:none!important;transform:translateY(16px)!important}}@media (max-width:799px){#iubenda-iframe .iubenda-iframe-footer{text-align:center!important}#iubenda-iframe .iubenda-iframe-footer #iubFooterIabBtnContainer{position:absolute!important;bottom:6px!important;left:50%!important;transform:translateX(-50%)!important;margin:0!important;width:100%!important}#iubenda-iframe .iubenda-iframe-footer #iubFooterIabBtnContainer+#iubFooterBtnContainer{transform:translateY(-22px)!important}#iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute{display:flex;flex-direction:column!important;padding:0!important;text-align:center!important}#iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute #iubFooterBtnContainer,#iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute #iubFooterIabBtnContainer{order:1}#iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute #iubBackBtn{border:0!important;order:2;margin-top:0!important;padding-top:0!important;margin-top:-4px!important}#iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute #iubFooterIabBtnContainer{opacity:0!important;pointer-events:none!important;transform:translate(-50%,16px)!important}#iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute #iubFooterIabBtnContainer+#iubFooterBtnContainer{transform:translateY(0)!important}}#iubenda-iframe .iubenda-iframe-footer>*{transition:opacity .4s ease,transform .4s ease!important;margin:24px 20px!important}@media (max-width:799px){#iubenda-iframe .iubenda-iframe-footer>*{margin:16px 12px!important}}#iubenda-iframe #iubFooterBtnIab{-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;display:block!important;width:100%!important;font-size:12px!important;text-decoration:underline!important;color:currentColor!important;text-align:center!important;cursor:pointer!important}#iubenda-iframe #iubFooterBtnIab:hover{opacity:.6!important}#iubenda-iframe #iubFooterBtnContainer button{flex:1!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;margin:4px!important;padding:8px 24px!important;border-radius:64px!important;cursor:pointer!important;font-weight:700!important;font-size:100%!important;background-color:#0073ce!important;color:#fff!important;border:1px solid transparent!important;text-align:center!important;border-color:transparent!important}#iubenda-iframe #iubFooterBtnContainer button:focus,#iubenda-iframe #iubFooterBtnContainer button:hover{box-shadow:0 0 0 999px inset rgba(0,0,0,.1)!important}@media (min-width:800px){#iubenda-iframe #iubFooterBtnContainer{align-self:end!important;margin-left:auto!important}}@media (max-width:799px){#iubenda-iframe #iubFooterBtnContainer{display:flex!important}#iubenda-iframe #iubFooterBtnContainer button{flex:1!important}}#iubenda-iframe .purposes-header-right{display:flex!important;position:relative!important;text-align:right!important;justify-content:flex-end!important;max-width:50%!important}#iubenda-iframe .purposes-header-right>*{flex-shrink:0!important}#iubenda-iframe .purposes-header-right .iub-iframe-brand-button{order:2!important}#iubenda-iframe .purposes-header-right .iub-iframe-brand-button.hover{width:154px!important}#iubenda-iframe .purposes-header-right .iub-iframe-brand-button.hover svg{margin-left:-30px!important}@media (max-width:799px){#iubenda-iframe .purposes-header-right .iub-iframe-brand-button.hover~.purposes-btn-cp{pointer-events:none!important;opacity:0!important}}#iubenda-iframe .iub-iframe-brand-button{width:42px!important;height:38px!important;margin-left:8px!important;margin-right:-24px!important;color:currentColor!important;display:inline-block!important;background-color:rgba(0,0,0,.075)!important;overflow:hidden!important;border-top-left-radius:32px!important;border-bottom-left-radius:32px!important;cursor:pointer!important;transition:transform .4s ease,width .4s ease!important}#iubenda-iframe .iub-iframe-brand-button svg{transition:margin .4s ease!important;height:38px!important;width:174px!important;margin-left:4px!important}@media (max-width:799px){#iubenda-iframe .iub-iframe-brand-button{margin-right:-16px!important}}#iubenda-iframe #iubenda-iframe-content.cookie-policy-no-logo #purposes-container .iubenda-modal-navigation-logo{display:none}#iubenda-iframe #iubenda-iframe-content.cookie-policy-no-logo .iubenda-iframe-footer #iubBackBtn{display:none!important}#iubenda-iframe #iubenda-iframe-content:not(.cookie-policy-no-logo) #purposes-container .purposes-btn-back{display:none}#iubenda-iframe #iubenda-iframe-content:not(.cookie-policy-no-logo) .iubenda-modal-navigation-brand .purposes-header>div{flex:1!important}#iubenda-iframe [tabindex]:not([tabindex=\"-1\"]):focus,#iubenda-iframe a[href]:focus,#iubenda-iframe button:focus,#iubenda-iframe details:focus,#iubenda-iframe input:focus,#iubenda-iframe select:focus,#iubenda-iframe textarea:focus{outline-width:2px!important;outline-style:solid!important;outline-color:#005fcc!important;outline-offset:2px!important}#iab-container .iab-top-container{padding:24px!important;font-size:16px!important;font-family:Helvetica,Helvetica Neue,Arial,sans-serif!important;background-color:#fff!important;border-radius:0!important;border-top-left-radius:5px!important;border-top-right-radius:5px!important;flex-shrink:0!important;display:flex!important;justify-content:space-between!important}#iab-container .iab-top-container button{font-size:14px!important;font-weight:700!important;color:rgba(0,0,0,.65)!important;display:inline-block!important;padding:8px 16px!important;background-color:rgba(0,0,0,.07)!important;border-radius:6px!important;text-decoration:none!important;background-size:21px!important;background-position:center left 10px!important;background-repeat:no-repeat!important;cursor:pointer!important}#iab-container .iab-top-container button:before{content:attr(data-str-desktop)}@media (max-width:799px){#iab-container .iab-top-container button:before{content:attr(data-str-mobile)}}#iab-container .iab-top-container button:hover{opacity:.8!important}#iab-container .iab-top-container button.cp-button{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23535353'%3E%3Cpath d='M3 2h5c1.773 0 5 2.634 5 5v7H3V2z'/%3E%3Cpath d='M13 7H8V2h0'/%3E%3C/g%3E%3C/svg%3E\")!important;padding-left:40px!important}#iab-container .iab-top-container button.back-button{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23535353' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6.72 12.243L2.477 8h0L6.72 3.757M3 8h10.548'/%3E%3C/g%3E%3C/svg%3E\")!important;padding-left:40px!important}#iab-container .iab-top-container button.stroked-button{background-color:transparent!important;border:1px solid rgba(0,0,0,.25)!important}#iab-container .iab-top-container button.stroked-button:hover{background-color:transparent!important;border-color:rgba(0,0,0,.45)!important}#purposes-container .purposes-header{padding:24px!important;position:relative!important;z-index:2!important;display:flex!important;justify-content:space-between!important;align-items:center!important}@media (max-width:799px){#purposes-container .purposes-header{padding:16px!important}}#iubenda-iframe.iubenda-iframe-branded .purposes-header .iub-btn-back,#iubenda-iframe.iubenda-iframe-branded .purposes-header .iub-btn-cp{border-color:currentColor!important}#purposes-content-container{display:flex!important;flex-direction:column!important;line-height:1.5!important}#purposes-content-container a{color:rgba(0,0,0,.7)!important;text-decoration:underline!important}#purposes-content-container a.trigger-link{font-weight:700!important;background-color:#eaeaea!important;padding:8px 16px!important;color:rgba(0,0,0,.75)!important;border-radius:6px!important;display:inline-block!important;text-decoration:none!important;white-space:nowrap!important}#purposes-content-container button{position:relative!important}#purposes-content-container .purposes-content{flex:1!important;overflow-y:scroll!important}#purposes-content-container .purposes-header{flex-shrink:0!important;padding:24px!important}@media (max-width:799px){#purposes-content-container .purposes-header{padding:16px 16px 0!important}}#purposes-content-container .purposes-header .purposes-header-title{font-weight:700!important;font-size:48px!important;margin-bottom:8px!important}@media (max-width:799px){#purposes-content-container .purposes-header .purposes-header-title{font-size:24px!important}}#purposes-content-container .purposes-header .purposes-header-text{font-size:15px!important;font-weight:300!important}#purposes-content-container .purposes-items{border-radius:4px!important;background-color:#fff!important}#purposes-content-container .purposes-items-notice{color:#eb392c!important;padding:0 0 18px!important}#purposes-content-container .purposes-section{padding:24px 24px 0!important}#purposes-content-container .purposes-section-header{padding:0 0 18px!important;border-bottom:1px solid rgba(0,0,0,.075)!important}#purposes-content-container .purposes-section-header-title{font-weight:700!important;font-size:22px!important;margin-bottom:8px!important}#purposes-content-container .purposes-section-header-text{font-size:15px!important;font-weight:300!important}#purposes-content-container .purposes-section-header b{font-weight:700!important}#purposes-content-container .purposes-section-body{padding:0 0 18px!important}#purposes-content-container .purposes-section-body-text{font-size:15px!important;font-weight:300!important}#purposes-content-container .purposes-section-body-title{font-weight:700!important;font-size:20px!important;margin-top:16px!important;margin-bottom:8px!important}#purposes-content-container .purposes-section-body.no-forced-bold .purposes-item-title label{font-weight:inherit!important}#purposes-content-container .purposes-section-body.no-forced-bold .purposes-item-title label b{font-weight:700!important}#purposes-content-container .purposes-badge{display:inline-block!important;padding:2px 16px!important;border-radius:32px!important;font-size:10px!important;font-weight:700!important;text-align:center!important;margin:6px 0!important}@media (max-width:799px){#purposes-content-container .purposes-badge{margin:6px 0!important}}#purposes-content-container .purposes-badge.purposes-badge-primary{color:#25a247!important;text-align:left!important;padding:0!important;display:flex!important;align-items:center!important}#purposes-content-container .purposes-badge.purposes-badge-primary:before{content:\"\";width:24px!important;height:24px!important;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='16' viewBox='0 0 14 16'%3E%3Cpath fill='%2325a247' fill-rule='evenodd' d='M6.592 0L0 2.783v6.611C0 12.502 6.222 15.902 6.588 16c.366-.098 6.588-3.735 6.588-6.258V2.783L6.592 0z'/%3E%3C/svg%3E\")!important;background-repeat:no-repeat!important;background-position:center!important;background-size:12px 12px!important;display:inline-block!important;background-color:#47c51e21!important;vertical-align:middle!important;border-radius:32px!important;margin-right:6px!important;border-top-left-radius:8px!important;flex-shrink:0}#purposes-content-container .purposes-first{box-shadow:0 1px 0 rgba(0,0,0,.1),inset 0 4px 0 rgba(0,0,0,.04),0 4px 4px rgba(0,0,0,.05)!important;position:sticky!important;position:-webkit-sticky!important;top:0!important;background-color:#f8f8f8!important;z-index:2!important;padding:16px 24px!important;display:flex!important;justify-content:space-between!important;align-items:center!important;display:none!important}#purposes-content-container .purposes-first>:first-child{text-transform:uppercase!important;text-align:right!important;font-weight:700!important;font-size:12px!important;letter-spacing:1.25px!important;color:rgba(0,0,0,.75)!important;flex:1}@media (max-width:799px){#purposes-content-container .purposes-first>:first-child{font-size:10px!important}}@media (max-width:799px){#purposes-content-container .purposes-first{padding:16px 16px!important}}#purposes-content-container .purposes-item{position:relative!important;display:flex!important;flex-direction:column!important;border-bottom:1px solid rgba(0,0,0,.075)!important}@media (max-width:799px){#purposes-content-container .purposes-item{margin:0 20px!important}}#purposes-content-container .purposes-item.purposes-item-5 .purposes-item-header{position:-webkit-sticky!important;position:sticky!important;top:86px!important}#purposes-content-container .purposes-item:last-child{border-bottom:none!important}#purposes-content-container .purposes-item.purposes-item-shown .purposes-item-body{max-height:1000px!important;padding:0 0 24px!important}@media (max-width:799px){#purposes-content-container .purposes-item.purposes-item-shown .purposes-item-body{padding:0 0 16px!important}}#purposes-content-container .purposes-item.purposes-item-shown .purposes-item-title-btn:after{transform:rotate(180deg)!important}#purposes-content-container .purposes-item .purposes-item-header{background:linear-gradient(0deg,rgba(255,255,255,0) 0,#fff 15%)!important;z-index:1!important;display:flex!important;padding:24px 0!important}@media (max-width:799px){#purposes-content-container .purposes-item .purposes-item-header{top:65px!important}}#purposes-content-container .purposes-item .purposes-item-title{display:flex!important;flex:1!important;justify-content:space-between!important}#purposes-content-container .purposes-item .purposes-item-title>div:first-of-type{display:flex!important}@media (min-width:800px){#purposes-content-container .purposes-item .purposes-item-title>div:first-of-type{align-items:center!important}}@media (max-width:799px){#purposes-content-container .purposes-item .purposes-item-title>div:first-of-type{flex-direction:column!important}}@media (max-width:799px){#purposes-content-container .purposes-item .purposes-item-title{flex-direction:column!important}}#purposes-content-container .purposes-item .purposes-item-title label{font-weight:700!important;font-size:16px!important}@media (max-width:799px){#purposes-content-container .purposes-item .purposes-item-title label{font-size:14px!important}}#purposes-content-container .purposes-item .purposes-item-title .purposes-item-title-btn{-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;font-size:12px!important;color:rgba(0,0,0,.75)!important;font-weight:300!important;display:flex!important;align-items:center!important;cursor:pointer!important}#purposes-content-container .purposes-item .purposes-item-title .purposes-item-title-btn:after{content:\"\";width:10px!important;height:10px!important;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='5' viewBox='0 0 10 5'%3E%3Cpath fill='none' fill-rule='evenodd' stroke='%23979797' stroke-linecap='round' stroke-linejoin='round' d='M9.243 0L5 4.243h0L.757 0'/%3E%3C/svg%3E\")!important;opacity:.5!important;background-position:center!important;background-repeat:no-repeat!important;display:inline-block!important;margin:8px 6px!important}#purposes-content-container .purposes-item .purposes-item-body{max-height:0!important;overflow:hidden!important;transition:max-height .4s ease,padding .4s ease!important;font-size:14px!important;font-weight:300!important;color:rgba(0,0,0,.75)!important}@media (max-width:799px){#purposes-content-container .purposes-item .purposes-item-body{font-size:12px!important}}#purposes-content-container .purposes-item .purposes-item-body p:not(:last-of-type){margin-bottom:8px!important}#purposes-content-container .purposes-sub-container{color:#5f5f5f!important}#purposes-content-container .purposes-sub-container:not(:last-of-type){padding-bottom:32px!important}#purposes-content-container .purposes-sub-container>div:first-of-type{display:flex;align-items:center;margin-bottom:8px!important}#purposes-content-container .purposes-sub-container>div:first-of-type>div:first-of-type{flex:1}#purposes-content-container .purposes-sub-container label{font-weight:700!important}#purposes-content-container .purposes-sub-container p:not(:last-of-type){margin-bottom:16px!important}#iubenda-iframe{flex-direction:column}#iubenda-iframe .iubenda-cs-brand-badge{flex-shrink:0!important;margin:16px!important;padding:6px 34px 6px 10px!important;background:#fff!important;display:inline-flex;border-radius:6px!important;border:1px solid rgba(0,0,0,.2)!important;box-shadow:0 0 16px rgba(0,0,0,.1)!important;align-self:flex-end;background-image:url(\"data:image/svg+xml,%3Csvg fill='none' height='19' viewBox='0 0 9 19' width='9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m4.1555.211426c.81725.000101 1.61499.249693 2.28656.715401.67157.465713 1.18496 1.125343 1.47153 1.890693.28657.76536.33266 1.59996.13211 2.39221-.20055.79226-.63818 1.50441-1.25438 2.04124l.87593 11.02083h-7.023493l.875933-11.02083c-.616206-.53683-1.053841-1.24898-1.254391-2.04124-.2005501-.79225-.154458-1.62685.132114-2.39221.286572-.76535.799967-1.42498 1.471537-1.890693.67157-.465708 1.46931-.7153 2.28655-.715401z' fill='%231cc691' fill-rule='evenodd'/%3E%3C/svg%3E\")!important;background-position:center right 12px!important;background-repeat:no-repeat!important;color:#222!important;font-weight:400!important;font-size:14px!important;pointer-events:auto!important}#iubenda-iframe .iubenda-cs-brand-badge:hover{border:1px solid rgba(0,0,0,.4)!important}#iubenda-iframe .iubenda-cs-brand-badge>span{border-right:1px solid rgba(0,0,0,.1)!important;padding-right:12px!important}#iubenda-iframe .iubenda-cs-brand-badge>span>span{text-decoration:underline!important}#iubenda-iframe .iubenda-cs-brand-badge-text{font-size:11px!important;font-weight:700!important;text-align:right!important;margin:-4px 16px 12px!important}#iubenda-iframe .iubenda-cs-brand-badge-text a{color:inherit}#iubenda-iframe .iubenda-iframe-spinner~.iubenda-iframe-badge-container .iubenda-cs-brand-badge{display:none!important}#iubenda-iframe .iubenda-iframe-badge-container{display:flex;justify-content:flex-end;width:100%!important;max-width:800px!important}@media (min-width:800px){#iubenda-iframe .iubenda-iframe-badge-container .iubenda-cs-brand-badge{margin:16px 0!important}}#iubenda-iframe .iubenda-iframe-badge-footer{background-color:#fff!important;color:#555!important;z-index:10!important;margin-top:-5px!important;box-shadow:0 -18px 10px -8px #fff!important;border-bottom-left-radius:4px!important;border-bottom-right-radius:4px!important}#iubenda-iframe .iubenda-iframe-badge-footer a{text-decoration:underline!important}", e),
            yt = !0
        }
    }
      , xt = function() {
        if (!kt) {
            var e = document.getElementsByTagName("head")[0];
            Oe("#iubenda-cs-banner{font-size:15px!important;background:0 0!important;line-height:1.4!important;position:fixed!important;z-index:99999998!important;top:0!important;left:0!important;width:100%!important;height:100%!important;border:0!important;margin:0!important;padding:0!important;overflow:hidden!important;display:flex!important;will-change:opacity;opacity:0!important;pointer-events:none!important;transition:opacity .4s ease!important}#iubenda-cs-banner #iubenda-cs-banner .iub-toggle-checkbox,#iubenda-cs-banner #iubenda-iframe .iub-toggle-checkbox{flex-shrink:0!important;display:flex!important;align-items:center!important;margin-left:24px!important}#iubenda-cs-banner #iubenda-cs-banner .iub-toggle-checkbox input,#iubenda-cs-banner #iubenda-iframe .iub-toggle-checkbox input{-moz-appearance:none!important;appearance:none!important;-webkit-appearance:none!important;padding:0!important;border:0!important;margin:0!important}#iubenda-cs-banner #iubenda-cs-banner .iub-toggle-checkbox input::-ms-check,#iubenda-cs-banner #iubenda-iframe .iub-toggle-checkbox input::-ms-check{visibility:hidden}#iubenda-cs-banner #iubenda-cs-banner .iub-toggle-checkbox input.style1,#iubenda-cs-banner #iubenda-iframe .iub-toggle-checkbox input.style1{width:64px!important;height:32px!important;border-radius:32px!important;transition:background-position .4s ease,background-color .4s ease!important;background-color:#ccc!important;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' d='M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zM5.729 5.033a.5.5 0 0 0-.638.058l-.058.07a.5.5 0 0 0 .058.637l3.201 3.201-3.201 3.203a.5.5 0 0 0 .707.707l3.201-3.203 3.203 3.203.07.058a.5.5 0 0 0 .637-.058l.058-.07a.5.5 0 0 0-.058-.637L9.706 8.999l3.203-3.201a.5.5 0 0 0-.707-.707L8.999 8.292 5.798 5.091z'/%3E%3C/svg%3E\")!important;background-repeat:no-repeat!important;background-position:top 4px left 4px!important;background-size:24px 24px!important}#iubenda-cs-banner #iubenda-cs-banner .iub-toggle-checkbox input.style1:checked,#iubenda-cs-banner #iubenda-iframe .iub-toggle-checkbox input.style1:checked{background-color:#1cc691!important;background-position:top 4px left 36px!important;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' d='M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zm4.646 5.646l-6.198 6.2-3.1-3a.5.5 0 1 0-.696.718l3.454 3.342a.5.5 0 0 0 .701-.006l6.547-6.546a.5.5 0 1 0-.708-.708z'/%3E%3C/svg%3E\")!important}#iubenda-cs-banner #iubenda-cs-banner .iub-toggle-checkbox input.style1:checked.sm,#iubenda-cs-banner #iubenda-iframe .iub-toggle-checkbox input.style1:checked.sm{background-position:top 3px left 27px!important}#iubenda-cs-banner #iubenda-cs-banner .iub-toggle-checkbox input.style1:checked.half,#iubenda-cs-banner #iubenda-cs-banner .iub-toggle-checkbox input.style1:checked[value=partial],#iubenda-cs-banner #iubenda-iframe .iub-toggle-checkbox input.style1:checked.half,#iubenda-cs-banner #iubenda-iframe .iub-toggle-checkbox input.style1:checked[value=partial]{background-color:#ffd24d!important;background-position:top 4px left 20px!important;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' d='M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zm4 8.5H5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z'/%3E%3C/svg%3E\")!important}#iubenda-cs-banner #iubenda-cs-banner .iub-toggle-checkbox input.style1:checked.half.sm,#iubenda-cs-banner #iubenda-cs-banner .iub-toggle-checkbox input.style1:checked[value=partial].sm,#iubenda-cs-banner #iubenda-iframe .iub-toggle-checkbox input.style1:checked.half.sm,#iubenda-cs-banner #iubenda-iframe .iub-toggle-checkbox input.style1:checked[value=partial].sm{background-position:top 3px left 15px!important}#iubenda-cs-banner #iubenda-cs-banner .iub-toggle-checkbox input.style1.sm,#iubenda-cs-banner #iubenda-iframe .iub-toggle-checkbox input.style1.sm{width:48px!important;height:24px!important;border-radius:24px!important;background-size:18px 18px!important;background-position:top 3px left 3px!important}#iubenda-cs-banner #iubenda-cs-banner .iub-toggle-checkbox input::-ms-check,#iubenda-cs-banner #iubenda-iframe .iub-toggle-checkbox input::-ms-check{visibility:hidden!important}#iubenda-cs-banner #iubenda-cs-banner .iub-toggle-checkbox input:not([disabled]),#iubenda-cs-banner #iubenda-iframe .iub-toggle-checkbox input:not([disabled]){cursor:pointer!important}#iubenda-cs-banner #iubenda-cs-banner .iub-toggle-checkbox input[disabled],#iubenda-cs-banner #iubenda-iframe .iub-toggle-checkbox input[disabled]{opacity:.35}#iubenda-cs-banner #iubenda-cs-banner .iub-toggle-checkbox .iub-caption,#iubenda-cs-banner #iubenda-iframe .iub-toggle-checkbox .iub-caption{display:none!important}#iubenda-cs-banner .iubenda-banner-content:not(.iubenda-custom-content) *,#iubenda-cs-banner [class*=\" iub\"],#iubenda-cs-banner [class^=iub]{font-size:100%!important;width:auto!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;background:0 0!important;box-sizing:border-box!important;-webkit-tap-highlight-color:transparent!important;font-family:-apple-system,sans-serif!important;text-decoration:none!important;color:currentColor!important;background-attachment:scroll!important;background-color:transparent!important;background-image:none!important;background-position:0 0!important;background-repeat:repeat!important;border:0!important;border-color:#000!important;border-color:currentColor!important;border-radius:0!important;border-style:none!important;border-width:medium!important;bottom:auto!important;clear:none!important;clip:auto!important;counter-increment:none!important;counter-reset:none!important;direction:inherit!important;float:none!important;font-style:inherit!important;font-variant:normal!important;font-weight:inherit!important;height:auto!important;left:auto!important;letter-spacing:normal!important;line-height:inherit!important;list-style-type:inherit!important;list-style-position:outside!important;list-style-image:none!important;margin:0!important;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:1;overflow:visible!important;padding:0!important;position:static!important;quotes:\"\" \"\"!important;right:auto!important;table-layout:auto!important;text-align:left!important;text-indent:0!important;text-transform:none!important;top:auto!important;unicode-bidi:normal!important;vertical-align:baseline!important;white-space:normal!important;width:auto!important;word-spacing:normal!important;z-index:auto!important;background-origin:padding-box!important;background-origin:padding-box!important;background-clip:border-box!important;background-size:auto!important;-o-border-image:none!important;border-image:none!important;border-radius:0!important;border-radius:0!important;box-shadow:none!important;-moz-column-count:auto!important;column-count:auto!important;-moz-column-gap:normal!important;column-gap:normal!important;-moz-column-rule:medium none #000!important;column-rule:medium none #000!important;-moz-column-span:none!important;column-span:none!important;-moz-column-width:auto!important;column-width:auto!important;font-feature-settings:normal!important;overflow-x:visible!important;overflow-y:visible!important;-webkit-hyphens:manual!important;hyphens:manual!important;perspective:none!important;perspective-origin:50% 50%!important;text-shadow:none!important;transition:all 0s ease 0s!important;transform:none!important;transform-origin:50% 50%!important;transform-style:flat!important;word-break:normal!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}#iubenda-cs-banner.iubenda-cs-overlay:before{content:\"\"!important;position:fixed!important;top:0!important;left:0!important;width:100%!important;height:100%!important;background-color:rgba(0,0,0,.5)!important;z-index:1!important;pointer-events:auto!important}#iubenda-cs-banner.iubenda-cs-center{align-items:center!important;justify-content:center!important}#iubenda-cs-banner.iubenda-cs-top{align-items:flex-start!important}#iubenda-cs-banner.iubenda-cs-bottom{align-items:flex-end!important}#iubenda-cs-banner.iubenda-cs-left{justify-content:flex-start!important}#iubenda-cs-banner.iubenda-cs-right{justify-content:flex-end!important}#iubenda-cs-banner.iubenda-cs-visible{opacity:1!important}#iubenda-cs-banner.iubenda-cs-visible>*{pointer-events:auto!important}#iubenda-cs-banner.iubenda-cs-slidein .iubenda-cs-container{transition:transform .4s ease!important}#iubenda-cs-banner.iubenda-cs-slidein.iubenda-cs-top .iubenda-cs-container{transform:translateY(-48px)!important}#iubenda-cs-banner.iubenda-cs-slidein.iubenda-cs-bottom .iubenda-cs-container{transform:translateY(48px)!important}#iubenda-cs-banner.iubenda-cs-slidein.iubenda-cs-visible .iubenda-cs-container{transform:translateY(0)!important}#iubenda-cs-banner .iubenda-cs-container{position:relative!important;z-index:2!important}#iubenda-cs-banner .iubenda-cs-container.iubenda-cs-themed{display:flex;flex-direction:column}#iubenda-cs-banner .iubenda-cs-brand{display:flex!important;padding:16px!important;flex-shrink:0!important}#iubenda-cs-banner .iubenda-cs-brand>div{display:flex!important;justify-content:flex-start!important}#iubenda-cs-banner .iubenda-cs-brand img{max-width:192px!important;max-height:32px!important}#iubenda-cs-banner .iubenda-cs-content{position:relative!important;z-index:1!important;overflow:hidden!important;transition:transform .4s ease!important;background-color:#000!important;color:#fff!important;font-size:14px!important;display:flex;flex-direction:column}#iubenda-cs-banner .iubenda-cs-rationale{position:relative!important;display:flex!important;flex-direction:column!important;flex:1 1 auto}#iubenda-cs-banner .iubenda-cs-close-btn{z-index:1!important;top:6px!important;right:0!important;margin:10px!important;min-width:32px!important;height:32px!important;padding:6px!important;font-size:24px!important;line-height:0!important;font-weight:lighter!important;cursor:pointer!important;text-align:center!important;border:1px solid transparent!important;border-radius:4px!important;opacity:.7!important;align-self:flex-end!important}#iubenda-cs-banner .iubenda-cs-close-btn:hover{opacity:1!important}#iubenda-cs-banner .iubenda-banner-content{font-weight:300!important;padding:16px!important;flex:1 1 auto!important;overflow-y:auto!important}#iubenda-cs-banner .iubenda-banner-content a{cursor:pointer!important;color:currentColor!important;opacity:.7!important;text-decoration:underline!important}#iubenda-cs-banner .iubenda-banner-content a:hover{opacity:1!important}#iubenda-cs-banner #iubenda-cs-title{margin-bottom:16px!important;margin-top:8px!important;font-weight:700!important}#iubenda-cs-banner .iubenda-cs-counter{text-align:center!important;position:relative!important;z-index:1!important;display:none;pointer-events:none;flex-shrink:0;padding:8px!important;font-size:13px!important;font-weight:700!important}#iubenda-cs-banner .iubenda-cs-cwa-button{font-weight:700!important;font-size:13px!important;background:rgba(255,255,255,.1)!important;color:#fff!important;padding:8px 14px!important;flex-shrink:0;border-radius:4px!important;text-align:center!important;z-index:1!important;margin:16px!important;margin-bottom:0!important;cursor:pointer!important}#iubenda-cs-banner .iubenda-cs-cwa-button:focus,#iubenda-cs-banner .iubenda-cs-cwa-button:hover{box-shadow:0 0 0 999px inset rgba(0,0,0,.1)!important}@media (max-width:639px){#iubenda-cs-banner .iubenda-cs-cwa-button{box-shadow:0 8px 16px 4px rgba(0,0,0,.2)!important}}@media (min-width:640px){#iubenda-cs-banner .iubenda-cs-cwa-button{align-self:flex-end}}#iubenda-cs-banner .iubenda-cs-opt-group{z-index:1!important;display:flex!important;margin-top:0!important;flex-shrink:0!important;color:#000!important;margin:16px!important;margin-top:0!important}#iubenda-cs-banner .iubenda-cs-opt-group>div{display:flex!important}@media (min-width:640px){#iubenda-cs-banner .iubenda-cs-opt-group{align-items:center!important;justify-content:space-between!important}#iubenda-cs-banner .iubenda-cs-opt-group-custom{margin-right:auto!important;align-self:start!important;justify-content:flex-start!important}#iubenda-cs-banner .iubenda-cs-opt-group-consent{margin-left:auto!important;align-self:end!important;justify-content:flex-end!important}}@media (max-width:639px){#iubenda-cs-banner .iubenda-cs-opt-group{flex-direction:column!important}#iubenda-cs-banner .iubenda-cs-opt-group-custom:not(.iubenda-cs-opt-group-granular){order:2}#iubenda-cs-banner .iubenda-cs-opt-group-consent{order:1}}#iubenda-cs-banner .iubenda-cs-opt-group button{-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;padding:8px 32px!important;border-radius:64px!important;cursor:pointer!important;font-weight:700!important;font-size:100%!important;margin-top:4px!important;margin-bottom:4px!important;text-align:center!important;border:0!important;background-color:#1a1a1a!important;color:#fff!important}#iubenda-cs-banner .iubenda-cs-opt-group button.focus,#iubenda-cs-banner .iubenda-cs-opt-group button.hover{box-shadow:0 0 0 999px inset rgba(0,0,0,.1)!important}@media (min-width:640px){#iubenda-cs-banner .iubenda-cs-opt-group button:not(:last-of-type){margin-right:8px!important}}@media (max-width:639px){#iubenda-cs-banner .iubenda-cs-opt-group button{padding:8px 24px!important;width:100%!important;display:block;text-align:center!important;margin:6px 3px!important;flex:1}}#iubenda-cs-banner .iubenda-cs-opt-group button.iubenda-cs-accept-btn,#iubenda-cs-banner .iubenda-cs-opt-group button.iubenda-cs-btn-primary{background-color:#0073ce!important;color:#fff!important}#iubenda-cs-banner .iubenda-cs-opt-group button.iubenda-cs-reject-btn{background-color:#0073ce!important;color:#fff!important}#iubenda-cs-banner.iubenda-cs-padded:not(.iubenda-cs-branded) .iubenda-banner-content{padding-right:48px!important}#iubenda-cs-banner.iubenda-cs-padded .iubenda-cs-close-btn{position:absolute!important}@media (min-width:640px){#iubenda-cs-banner:not(.iubenda-cs-padded).iubenda-cs-branded .iubenda-cs-cwa-button{position:absolute!important}}@media (min-width:640px){#iubenda-cs-banner:not(.iubenda-cs-branded):not(.iubenda-cs-no-heading) .iubenda-cs-cwa-button{position:absolute!important;top:-4px!important;right:-4px!important;padding:5px 10px!important}}@media (min-width:640px){#iubenda-cs-banner.iubenda-cs-branded:not(.iubenda-cs-default-floating).iubenda-cs-bottom .iubenda-cs-brand,#iubenda-cs-banner.iubenda-cs-branded:not(.iubenda-cs-default-floating).iubenda-cs-top .iubenda-cs-brand{border-radius:8px!important}}@media (min-width:640px){#iubenda-cs-banner.iubenda-cs-branded .iubenda-cs-cwa-button{margin:15px!important}}#iubenda-cs-banner.iubenda-cs-branded .iubenda-cs-close-btn{height:32px!important;min-width:32px!important}#iubenda-cs-banner.iubenda-cs-default .iubenda-cs-brand-badge-outer,#iubenda-cs-banner.iubenda-cs-default-floating .iubenda-cs-brand-badge-outer{height:0!important}#iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-left) .iubenda-cs-brand-badge-outer,#iubenda-cs-banner.iubenda-cs-default:not(.iubenda-cs-left) .iubenda-cs-brand-badge-outer{margin-left:auto!important;margin-right:0!important;float:right!important}#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-bottom .iubenda-cs-brand-badge-outer,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-bottom .iubenda-cs-brand-badge-outer{order:-1!important;display:inline-flex!important}#iubenda-cs-banner.iubenda-cs-default .iubenda-cs-brand{margin:0 -8px 0!important}@media (max-width:991px){#iubenda-cs-banner.iubenda-cs-default .iubenda-cs-brand{margin:-8px -8px 0!important}}@media (min-width:992px){#iubenda-cs-banner.iubenda-cs-default .iubenda-cs-brand div{margin:0 auto!important;width:calc(992px - 32px)!important}}@media (max-width:991px){#iubenda-cs-banner.iubenda-cs-default .iubenda-cs-brand div{margin:0 8px!important}}#iubenda-cs-banner.iubenda-cs-default .iubenda-cs-container{width:100%!important}@media (min-width:992px){#iubenda-cs-banner.iubenda-cs-default .iubenda-cs-rationale{width:992px!important;margin:16px auto!important}}@media (min-width:992px){#iubenda-cs-banner.iubenda-cs-default-floating .iubenda-cs-brand-badge{margin:0 16px!important}}@media (min-width:992px){#iubenda-cs-banner.iubenda-cs-default-floating .iubenda-cs-container{width:992px!important}}@media (max-width:991px){#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-bottom .iubenda-cs-container,#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-top .iubenda-cs-container{width:100%!important}}@media (min-width:640px){#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center:not(.iubenda-cs-top):not(.iubenda-cs-bottom) .iubenda-cs-container,#iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-bottom):not(.iubenda-cs-center) .iubenda-cs-container,#iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-top):not(.iubenda-cs-center) .iubenda-cs-container{width:480px!important}}#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center:not(.iubenda-cs-top):not(.iubenda-cs-bottom) .iubenda-cs-opt-group,#iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-bottom):not(.iubenda-cs-center) .iubenda-cs-opt-group,#iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-top):not(.iubenda-cs-center) .iubenda-cs-opt-group{flex-direction:column!important}#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center:not(.iubenda-cs-top):not(.iubenda-cs-bottom) .iubenda-cs-opt-group>div,#iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-bottom):not(.iubenda-cs-center) .iubenda-cs-opt-group>div,#iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-top):not(.iubenda-cs-center) .iubenda-cs-opt-group>div{width:100%!important}#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center:not(.iubenda-cs-top):not(.iubenda-cs-bottom) .iubenda-cs-opt-group button,#iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-bottom):not(.iubenda-cs-center) .iubenda-cs-opt-group button,#iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-top):not(.iubenda-cs-center) .iubenda-cs-opt-group button{display:block!important;width:100%!important;text-align:center!important}#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center:not(.iubenda-cs-top):not(.iubenda-cs-bottom) .iubenda-cs-opt-group-custom,#iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-bottom):not(.iubenda-cs-center) .iubenda-cs-opt-group-custom,#iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-top):not(.iubenda-cs-center) .iubenda-cs-opt-group-custom{order:2}#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center:not(.iubenda-cs-top):not(.iubenda-cs-bottom) .iubenda-cs-opt-group-consent,#iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-bottom):not(.iubenda-cs-center) .iubenda-cs-opt-group-consent,#iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-top):not(.iubenda-cs-center) .iubenda-cs-opt-group-consent{order:1}#iubenda-cs-banner.iubenda-cs-default-floating .iubenda-cs-content{box-shadow:0 8px 48px rgba(0,0,0,.15)!important;max-width:100%!important}@media (min-width:992px){#iubenda-cs-banner.iubenda-cs-default-floating .iubenda-cs-content{border-radius:4px!important;margin:16px!important}}#iubenda-cs-banner.iubenda-cs-scrollable .iubenda-banner-content{mask-image:linear-gradient(to top,rgba(0,0,0,0) 0%,black 16px)!important;-webkit-mask-image:linear-gradient(to top,rgba(0,0,0,0) 0%,black 16px)!important}#iubenda-cs-banner.iubenda-cs-fix-height .iubenda-cs-container,#iubenda-cs-banner.iubenda-cs-fix-height .iubenda-cs-content,#iubenda-cs-banner.iubenda-cs-fix-height .iubenda-cs-rationale{height:100%!important}@media (min-width:992px){#iubenda-cs-banner.iubenda-cs-fix-height.iubenda-cs-default-floating .iubenda-cs-content{height:calc(100% - 32px)!important}}#iubenda-cs-banner.iubenda-cs-fix-height .iubenda-cs-brand img{max-width:75%!important}#iubenda-cs-banner [tabindex]:not([tabindex=\"-1\"]):focus,#iubenda-cs-banner a[href]:focus,#iubenda-cs-banner button:focus,#iubenda-cs-banner details:focus,#iubenda-cs-banner input:focus,#iubenda-cs-banner select:focus,#iubenda-cs-banner textarea:focus{outline-width:2px!important;outline-style:solid!important;outline-color:#005fcc!important;outline-offset:2px!important}#iubenda-cs-banner .iubenda-cs-brand-badge{flex-shrink:0!important;margin:16px!important;padding:6px 34px 6px 10px!important;background:#fff!important;display:inline-flex;border-radius:6px!important;border:1px solid rgba(0,0,0,.2)!important;box-shadow:0 0 16px rgba(0,0,0,.1)!important;align-self:flex-end;background-image:url(\"data:image/svg+xml,%3Csvg fill='none' height='19' viewBox='0 0 9 19' width='9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m4.1555.211426c.81725.000101 1.61499.249693 2.28656.715401.67157.465713 1.18496 1.125343 1.47153 1.890693.28657.76536.33266 1.59996.13211 2.39221-.20055.79226-.63818 1.50441-1.25438 2.04124l.87593 11.02083h-7.023493l.875933-11.02083c-.616206-.53683-1.053841-1.24898-1.254391-2.04124-.2005501-.79225-.154458-1.62685.132114-2.39221.286572-.76535.799967-1.42498 1.471537-1.890693.67157-.465708 1.46931-.7153 2.28655-.715401z' fill='%231cc691' fill-rule='evenodd'/%3E%3C/svg%3E\")!important;background-position:center right 12px!important;background-repeat:no-repeat!important;color:#222!important;font-weight:400!important;font-size:14px!important;pointer-events:auto!important}#iubenda-cs-banner .iubenda-cs-brand-badge:hover{border:1px solid rgba(0,0,0,.4)!important}#iubenda-cs-banner .iubenda-cs-brand-badge>span{border-right:1px solid rgba(0,0,0,.1)!important;padding-right:12px!important}#iubenda-cs-banner .iubenda-cs-brand-badge>span>span{text-decoration:underline!important}#iubenda-cs-banner .iubenda-cs-brand-badge-text{font-size:11px!important;font-weight:700!important;text-align:right!important;margin:-4px 16px 12px!important}#iubenda-cs-banner .iubenda-cs-brand-badge-text a{color:inherit}#iubenda-cs-banner .iubenda-iframe-spinner~.iubenda-iframe-badge-container .iubenda-cs-brand-badge{display:none!important}#iubenda-cs-banner .iubenda-granular-controls-container{--iub-granular-background:rgba(0, 0, 0, .02);--iub-granular-border:rgba(0, 0, 0, 0.08);--iub-granular-toggle-background:rgba(0, 0, 0, 0.2);display:flex;flex-wrap:wrap;flex-shrink:0;margin-bottom:16px!important;border-top:1px solid var(--iub-granular-border)!important}#iubenda-cs-banner .iubenda-granular-controls-container .granular-control-checkbox{flex-basis:100%;display:flex!important;gap:10px!important;padding-left:16px!important;padding-right:16px!important;padding-bottom:14px!important;background-color:var(--iub-granular-background)!important;margin:0!important}#iubenda-cs-banner .iubenda-granular-controls-container .granular-control-checkbox input.style1{width:48px!important;height:24px!important;background-position:top 3px left 3px!important;background-size:18px 18px!important;background-color:var(--iub-granular-toggle-background)!important}#iubenda-cs-banner .iubenda-granular-controls-container .granular-control-checkbox input.style1,#iubenda-cs-banner .iubenda-granular-controls-container .granular-control-checkbox input.style1:checked{background-image:url(\"data:image/svg+xml,%3Csvg height='20' viewBox='0 0 20 20' width='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' fill='%23fff' fill-rule='evenodd' r='10'/%3E%3C/svg%3E\")!important}#iubenda-cs-banner .iubenda-granular-controls-container .granular-control-checkbox input.style1:checked{background-position:top 3px left 27px!important;background-color:#1cc691!important}#iubenda-cs-banner .iubenda-granular-controls-container .granular-control-checkbox input.style1:checked[value=partial]{background-position:top 3px left 15px!important;background-color:#ffd24d!important}#iubenda-cs-banner .iubenda-granular-controls-container .granular-control-checkbox:nth-child(2){padding-top:16px!important}#iubenda-cs-banner .iubenda-granular-controls-container .granular-control-checkbox:last-child{padding-bottom:16px!important;border-bottom:1px solid var(--iub-granular-border)!important}#iubenda-cs-banner .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd),#iubenda-cs-banner .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd)~.granular-control-checkbox{flex-basis:50%;flex-direction:column-reverse;padding:14px 10px!important;border:1px solid var(--iub-granular-border)!important;border-right:0!important;border-top:0!important}#iubenda-cs-banner .iubenda-granular-controls-container .granular-control-checkbox--disabled{display:none!important}@media (max-width:991px){#iubenda-cs-banner .iubenda-granular-controls-container .granular-control-checkbox{min-width:0!important}#iubenda-cs-banner .iubenda-granular-controls-container .granular-control-checkbox label{max-width:100%}#iubenda-cs-banner .iubenda-granular-controls-container .granular-control-checkbox label span{display:block;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}#iubenda-cs-banner .iubenda-granular-controls-container .granular-control-checkbox--mobile-hidden{display:none!important}}#iubenda-cs-banner.iubenda-cs-black .iubenda-granular-controls-container{--iub-granular-background:rgba(255, 255, 255, .02);--iub-granular-border:rgba(255, 255, 255, 0.08);--iub-granular-toggle-background:rgba(255, 255, 255, 0.2)}@media (min-width:640px){#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox,#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox{flex:1!important;flex-direction:column-reverse!important;padding:14px 10px!important;border:1px solid var(--iub-granular-border)!important;border-right:0!important;border-top:0!important;padding-top:16px!important}}@media (min-width:992px){#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-bottom .iubenda-granular-controls-container,#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-top .iubenda-granular-controls-container,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-bottom .iubenda-granular-controls-container,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-top .iubenda-granular-controls-container{grid-gap:24px!important;padding:16px 16px 32px!important;border-top:0!important;margin-bottom:0!important}#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox--disabled,#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox--disabled,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox--disabled,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox--disabled{display:flex!important}#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:first-child,#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:first-child,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:first-child,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:first-child{padding-left:16px!important}#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:last-child,#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:last-child,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:last-child,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:last-child{padding-right:16px!important}#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox,#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:first-child,#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd),#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd)~.granular-control-checkbox,#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd)~.granular-control-checkbox:last-child,#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd)~.granular-control-checkbox:nth-last-child(2),#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:last-child,#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:nth-child(2),#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox,#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:first-child,#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd),#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd)~.granular-control-checkbox,#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd)~.granular-control-checkbox:last-child,#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd)~.granular-control-checkbox:nth-last-child(2),#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:last-child,#iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:nth-child(2),#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:first-child,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd),#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd)~.granular-control-checkbox,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd)~.granular-control-checkbox:last-child,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd)~.granular-control-checkbox:nth-last-child(2),#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:last-child,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-bottom .iubenda-granular-controls-container .granular-control-checkbox:nth-child(2),#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:first-child,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd),#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd)~.granular-control-checkbox,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd)~.granular-control-checkbox:last-child,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:first-child:nth-last-child(odd)~.granular-control-checkbox:nth-last-child(2),#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:last-child,#iubenda-cs-banner.iubenda-cs-default.iubenda-cs-top .iubenda-granular-controls-container .granular-control-checkbox:nth-child(2){flex:0 1 auto!important;flex-direction:row!important;background-color:transparent!important;padding:0!important;border:none!important;margin:0!important}}.iubenda-tp-alert-btn *,.iubenda-tp-alert-btn:not([data-tp-nostyle]),.iubenda-tp-btn *,.iubenda-tp-btn:not([data-tp-nostyle]),.iubenda-uspr-btn *,.iubenda-uspr-btn:not([data-tp-nostyle]){font-size:100%!important;width:auto!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;background:0 0!important;box-sizing:border-box!important;-webkit-tap-highlight-color:transparent!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important;font-family:-apple-system,sans-serif!important;text-decoration:none!important;color:currentColor!important;background-attachment:scroll!important;background-color:transparent!important;background-image:none!important;background-position:0 0!important;background-repeat:repeat!important;border:0!important;border-color:#000!important;border-color:currentColor!important;border-radius:0!important;border-style:none!important;border-width:medium!important;bottom:auto!important;clear:none!important;clip:auto!important;counter-increment:none!important;counter-reset:none!important;cursor:auto!important;direction:inherit!important;float:none!important;font-style:inherit!important;font-variant:normal!important;font-weight:inherit!important;height:auto!important;left:auto!important;letter-spacing:normal!important;line-height:inherit!important;list-style-type:inherit!important;list-style-position:outside!important;list-style-image:none!important;margin:0!important;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:1;outline:0!important;overflow:visible!important;padding:0!important;position:static!important;quotes:\"\" \"\"!important;right:auto!important;table-layout:auto!important;text-align:left!important;text-indent:0!important;text-transform:none!important;top:auto!important;unicode-bidi:normal!important;vertical-align:baseline!important;visibility:inherit!important;white-space:normal!important;width:auto!important;word-spacing:normal!important;z-index:auto!important;background-origin:padding-box!important;background-origin:padding-box!important;background-clip:border-box!important;background-size:auto!important;-o-border-image:none!important;border-image:none!important;border-radius:0!important;border-radius:0!important;box-shadow:none!important;-moz-column-count:auto!important;column-count:auto!important;-moz-column-gap:normal!important;column-gap:normal!important;-moz-column-rule:medium none #000!important;column-rule:medium none #000!important;-moz-column-span:none!important;column-span:none!important;-moz-column-width:auto!important;column-width:auto!important;font-feature-settings:normal!important;overflow-x:visible!important;overflow-y:visible!important;-webkit-hyphens:manual!important;hyphens:manual!important;perspective:none!important;perspective-origin:50% 50%!important;text-shadow:none!important;transition:all 0s ease 0s!important;transform:none!important;transform-origin:50% 50%!important;transform-style:flat!important;word-break:normal!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}.iubenda-tp-alert-btn:not([data-tp-nostyle]),.iubenda-tp-btn:not([data-tp-nostyle]),.iubenda-uspr-btn:not([data-tp-nostyle]){-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;line-height:34px!important;height:34px!important;min-width:34px!important;border-radius:4px!important;cursor:pointer!important;font-weight:700!important;font-size:14px!important;box-shadow:0 0 0 1px rgba(0,0,0,.15)!important;color:rgba(0,0,0,.65)!important;background-color:#fff!important;display:inline-block!important;vertical-align:middle!important}.iubenda-tp-alert-btn.iubenda-tp-btn--warning,.iubenda-tp-btn.iubenda-tp-btn--warning,.iubenda-uspr-btn.iubenda-tp-btn--warning{z-index:2147483647!important}.iubenda-tp-alert-btn.iubenda-tp-btn--warning:before,.iubenda-tp-btn.iubenda-tp-btn--warning:before,.iubenda-uspr-btn.iubenda-tp-btn--warning:before{content:\"\";background-image:url(\"data:image/svg+xml,%3Csvg fill='none' height='17' viewBox='0 0 17 17' width='17' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m6.79042 2.81577c.7788-1.28272 2.64036-1.28272 3.41918 0l5.9459 9.79333c.8093 1.3328-.1503 3.038-1.7095 3.038h-11.89195c-1.55927 0-2.5188026-1.7052-1.709576-3.038z' fill='%23fb6666'/%3E%3Cpath d='m14.446 15.1471h-11.89195c-1.16945 0-1.889102-1.2789-1.28218-2.2785l5.94595-9.79334c.5841-.96204 1.98026-.96204 2.56436 0l5.94592 9.79334c.607.9996-.1127 2.2785-1.2821 2.2785z' stroke='%23000' stroke-opacity='.1'/%3E%3Cg fill='%23fff'%3E%3Crect height='4.97619' rx='.497619' width='.995238' x='8' y='6'/%3E%3Cpath d='m8 12.5c0-.2761.22386-.5.5-.5.27614 0 .5.2239.5.5 0 .2761-.22386.5-.5.5-.27614 0-.5-.2239-.5-.5z'/%3E%3C/g%3E%3C/svg%3E\");background-position:center;background-size:24px 24px;background-repeat:no-repeat;position:absolute;top:-16px;right:-16px;width:32px;height:32px}.iubenda-tp-alert-btn[data-tp-icon],.iubenda-tp-btn[data-tp-icon],.iubenda-uspr-btn[data-tp-icon]{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%231CC691' fill-rule='evenodd' d='M16 7a4 4 0 0 1 2.627 7.016L19.5 25h-7l.873-10.984A4 4 0 0 1 16 7z'/%3E%3C/svg%3E\")!important;background-repeat:no-repeat!important;background-size:32px 32px!important;background-position:top .5px left 1px!important}.iubenda-tp-alert-btn[data-tp-circle],.iubenda-tp-btn[data-tp-circle],.iubenda-uspr-btn[data-tp-circle]{border-radius:32px!important}.iubenda-tp-alert-btn[data-tp-label]:after,.iubenda-tp-btn[data-tp-label]:after,.iubenda-uspr-btn[data-tp-label]:after{content:attr(data-tp-label)!important;padding:0 16px!important;white-space:nowrap!important}.iubenda-tp-alert-btn[data-tp-label][data-tp-icon]:after,.iubenda-tp-btn[data-tp-label][data-tp-icon]:after,.iubenda-uspr-btn[data-tp-label][data-tp-icon]:after{padding-left:calc(16px + 8px + 8px)!important}.iubenda-tp-alert-btn[data-tp-float],.iubenda-tp-btn[data-tp-float],.iubenda-uspr-btn[data-tp-float]{position:fixed!important}.iubenda-tp-alert-btn[data-tp-float]:not([data-tp-anchored]),.iubenda-tp-btn[data-tp-float]:not([data-tp-anchored]),.iubenda-uspr-btn[data-tp-float]:not([data-tp-anchored]){margin:16px!important}.iubenda-tp-alert-btn[data-tp-float]:focus,.iubenda-tp-btn[data-tp-float]:focus,.iubenda-uspr-btn[data-tp-float]:focus{outline:2px solid -webkit-focus-ring-color!important}.iubenda-tp-alert-btn[data-tp-float][data-tp-anchored],.iubenda-tp-btn[data-tp-float][data-tp-anchored],.iubenda-uspr-btn[data-tp-float][data-tp-anchored]{margin:0 16px!important;border-radius:6px!important}.iubenda-tp-alert-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-left],.iubenda-tp-alert-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-right],.iubenda-tp-alert-btn[data-tp-float][data-tp-anchored][data-tp-hover][data-tp-float=center-left],.iubenda-tp-alert-btn[data-tp-float][data-tp-anchored][data-tp-hover][data-tp-float=center-right],.iubenda-tp-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-left],.iubenda-tp-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-right],.iubenda-tp-btn[data-tp-float][data-tp-anchored][data-tp-hover][data-tp-float=center-left],.iubenda-tp-btn[data-tp-float][data-tp-anchored][data-tp-hover][data-tp-float=center-right],.iubenda-uspr-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-left],.iubenda-uspr-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-right],.iubenda-uspr-btn[data-tp-float][data-tp-anchored][data-tp-hover][data-tp-float=center-left],.iubenda-uspr-btn[data-tp-float][data-tp-anchored][data-tp-hover][data-tp-float=center-right]{margin:0!important;top:75%!important;transform:translateY(-50%)!important}.iubenda-tp-alert-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-left],.iubenda-tp-alert-btn[data-tp-float][data-tp-anchored][data-tp-hover][data-tp-float=center-left],.iubenda-tp-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-left],.iubenda-tp-btn[data-tp-float][data-tp-anchored][data-tp-hover][data-tp-float=center-left],.iubenda-uspr-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-left],.iubenda-uspr-btn[data-tp-float][data-tp-anchored][data-tp-hover][data-tp-float=center-left]{left:0!important;border-top-left-radius:0!important;border-bottom-left-radius:0!important;border-left:0!important}.iubenda-tp-alert-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-right],.iubenda-tp-alert-btn[data-tp-float][data-tp-anchored][data-tp-hover][data-tp-float=center-right],.iubenda-tp-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-right],.iubenda-tp-btn[data-tp-float][data-tp-anchored][data-tp-hover][data-tp-float=center-right],.iubenda-uspr-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-right],.iubenda-uspr-btn[data-tp-float][data-tp-anchored][data-tp-hover][data-tp-float=center-right]{right:0!important;border-top-right-radius:0!important;border-bottom-right-radius:0!important;border-right:0!important}.iubenda-tp-alert-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover])[data-tp-label][data-tp-float=center-left],.iubenda-tp-alert-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover])[data-tp-label][data-tp-float=center-right],.iubenda-tp-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover])[data-tp-label][data-tp-float=center-left],.iubenda-tp-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover])[data-tp-label][data-tp-float=center-right],.iubenda-uspr-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover])[data-tp-label][data-tp-float=center-left],.iubenda-uspr-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover])[data-tp-label][data-tp-float=center-right]{margin:0!important;top:50%!important;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;border-bottom:0!important;transform-origin:bottom!important}.iubenda-tp-alert-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover])[data-tp-label][data-tp-float=center-left],.iubenda-tp-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover])[data-tp-label][data-tp-float=center-left],.iubenda-uspr-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover])[data-tp-label][data-tp-float=center-left]{left:0!important;transform:translateY(-50%) rotate(90deg)!important;transform-origin:left bottom!important}.iubenda-tp-alert-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover])[data-tp-label][data-tp-float=center-right],.iubenda-tp-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover])[data-tp-label][data-tp-float=center-right],.iubenda-uspr-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover])[data-tp-label][data-tp-float=center-right]{right:0!important;transform:translateY(-50%) rotate(-90deg)!important;transform-origin:right bottom!important}.iubenda-tp-alert-btn[data-tp-float][data-tp-float=bottom-left],.iubenda-tp-alert-btn[data-tp-float][data-tp-float=bottom-right],.iubenda-tp-btn[data-tp-float][data-tp-float=bottom-left],.iubenda-tp-btn[data-tp-float][data-tp-float=bottom-right],.iubenda-uspr-btn[data-tp-float][data-tp-float=bottom-left],.iubenda-uspr-btn[data-tp-float][data-tp-float=bottom-right]{bottom:0!important}.iubenda-tp-alert-btn[data-tp-float][data-tp-float=bottom-left][data-tp-anchored],.iubenda-tp-alert-btn[data-tp-float][data-tp-float=bottom-right][data-tp-anchored],.iubenda-tp-btn[data-tp-float][data-tp-float=bottom-left][data-tp-anchored],.iubenda-tp-btn[data-tp-float][data-tp-float=bottom-right][data-tp-anchored],.iubenda-uspr-btn[data-tp-float][data-tp-float=bottom-left][data-tp-anchored],.iubenda-uspr-btn[data-tp-float][data-tp-float=bottom-right][data-tp-anchored]{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;border-bottom:0!important}.iubenda-tp-alert-btn[data-tp-float][data-tp-float=top-left],.iubenda-tp-alert-btn[data-tp-float][data-tp-float=top-right],.iubenda-tp-btn[data-tp-float][data-tp-float=top-left],.iubenda-tp-btn[data-tp-float][data-tp-float=top-right],.iubenda-uspr-btn[data-tp-float][data-tp-float=top-left],.iubenda-uspr-btn[data-tp-float][data-tp-float=top-right]{top:0!important}.iubenda-tp-alert-btn[data-tp-float][data-tp-float=top-left][data-tp-anchored],.iubenda-tp-alert-btn[data-tp-float][data-tp-float=top-right][data-tp-anchored],.iubenda-tp-btn[data-tp-float][data-tp-float=top-left][data-tp-anchored],.iubenda-tp-btn[data-tp-float][data-tp-float=top-right][data-tp-anchored],.iubenda-uspr-btn[data-tp-float][data-tp-float=top-left][data-tp-anchored],.iubenda-uspr-btn[data-tp-float][data-tp-float=top-right][data-tp-anchored]{border-top-left-radius:0!important;border-top-right-radius:0!important;border-top:0!important}.iubenda-tp-alert-btn[data-tp-float][data-tp-float=bottom-left],.iubenda-tp-alert-btn[data-tp-float][data-tp-float=top-left],.iubenda-tp-btn[data-tp-float][data-tp-float=bottom-left],.iubenda-tp-btn[data-tp-float][data-tp-float=top-left],.iubenda-uspr-btn[data-tp-float][data-tp-float=bottom-left],.iubenda-uspr-btn[data-tp-float][data-tp-float=top-left]{left:0!important}.iubenda-tp-alert-btn[data-tp-float][data-tp-float=bottom-right],.iubenda-tp-alert-btn[data-tp-float][data-tp-float=top-right],.iubenda-tp-btn[data-tp-float][data-tp-float=bottom-right],.iubenda-tp-btn[data-tp-float][data-tp-float=top-right],.iubenda-uspr-btn[data-tp-float][data-tp-float=bottom-right],.iubenda-uspr-btn[data-tp-float][data-tp-float=top-right]{right:0!important}.iubenda-tp-alert-btn[data-tp-float][data-tp-hover][data-tp-label]:after,.iubenda-tp-btn[data-tp-float][data-tp-hover][data-tp-label]:after,.iubenda-uspr-btn[data-tp-float][data-tp-hover][data-tp-label]:after{max-width:0!important;overflow:hidden!important;display:block!important;padding:0!important;opacity:0!important;transition:max-width .6s ease,padding .6s ease,opacity .6s ease!important}.iubenda-tp-alert-btn[data-tp-float][data-tp-hover][data-tp-label]:hover:after,.iubenda-tp-btn[data-tp-float][data-tp-hover][data-tp-label]:hover:after,.iubenda-uspr-btn[data-tp-float][data-tp-hover][data-tp-label]:hover:after{max-width:192px!important;padding-left:calc(16px + 8px + 8px)!important;padding-right:10px!important;opacity:1!important}.iubenda-tp-alert-btn:focus,.iubenda-tp-btn:focus,.iubenda-uspr-btn:focus{outline-width:2px!important;outline-style:solid!important;outline-color:#005fcc!important;outline-offset:2px!important}.iubenda-uspr-btn{border:1px solid rgba(0,0,0,.2)!important;box-shadow:0 .25rem 1rem rgba(0,0,0,.1)!important;border-radius:.5rem!important;font-family:sans-serif!important;font-weight:700!important;overflow:hidden!important;display:inline-flex!important;flex-wrap:wrap!important;background:#fff!important;color:#280404!important}.iubenda-uspr-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-left],.iubenda-uspr-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-right]{border-radius:0!important;border-bottom-left-radius:6px!important;border-bottom-right-radius:6px!important;top:auto!important;bottom:32px!important;flex-wrap:nowrap!important}.iubenda-uspr-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-left] *,.iubenda-uspr-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-right] *{white-space:nowrap!important}.iubenda-uspr-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-left]{left:0!important;transform:translateX(46px) rotate(-90deg)!important;transform-origin:left bottom!important}.iubenda-uspr-btn[data-tp-float][data-tp-anchored]:not([data-tp-hover]):not([data-tp-label])[data-tp-float=center-right]{right:0!important;transform:translateX(-46px) rotate(90deg)!important;transform-origin:right bottom!important}@media (min-width:480px){.iubenda-uspr-btn[data-tp-float=bottom-right],.iubenda-uspr-btn[data-tp-float=bottom-right] .iubenda-cs-preferences-link,.iubenda-uspr-btn[data-tp-float=top-right],.iubenda-uspr-btn[data-tp-float=top-right] .iubenda-cs-preferences-link{flex-direction:row-reverse!important}}.iubenda-uspr-btn a{padding:.75rem!important;cursor:pointer!important;flex:1 1 auto!important;display:inline-flex!important;align-items:center!important;grid-gap:0.5rem!important}.iubenda-uspr-btn a img{width:2.5rem!important;flex-shrink:0!important}.iubenda-uspr-btn a:hover{background-color:rgba(0,0,0,.025)!important}.iubenda-uspr-btn a:first-of-type{box-shadow:0 0 0 1px rgba(0,0,0,.2)!important}.iub__us-widget{color:#595959;margin:0;padding:.5em;display:flex;justify-content:center;align-items:center;font-family:-apple-system,sans-serif!important;font-size:1rem;font-weight:700}.iub__us-widget.left{justify-content:flex-start}.iub__us-widget.right{justify-content:flex-end}.iub__us-widget__wrapper{background-color:#fff;border:1px solid currentColor;border-radius:5px;overflow:hidden;display:flex}.iub__us-widget__wrapper[data-tp-circle]{border-radius:32px}.iub__us-widget__link{display:flex;justify-content:center;align-items:center;padding:.5em 1em;line-height:1;text-decoration:none;transition:background-color .3s ease;cursor:pointer}.iub__us-widget__link--privacy-choices{border-left:1px solid currentColor}.iub__us-widget__link--privacy-choices::after{content:url(\"data:image/svg+xml,%3Csvg width='40' height='18' viewBox='0 0 40 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='39' height='17' rx='8.5' fill='white' stroke='%232569F6'/%3E%3Cpath d='M22.5 0H31C35.9706 0 40 4.02944 40 9C40 13.9706 35.9706 18 31 18H18L22.5 0Z' fill='%232569F6'/%3E%3Cpath d='M8 9.5L10.5 12L16.5 6' stroke='%232569F6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M25.5 6L31.5 12' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M31.5 6L25.5 12' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A\");height:18px;margin-left:.8em}.iub__us-widget__link:hover{background-color:#e4e6e8}@media screen and (max-width:480px){.iub__us-widget{justify-content:start}.iub__us-widget__wrapper{flex-direction:column-reverse}.iub__us-widget__link{justify-content:flex-start}.iub__us-widget__link--privacy-choices{flex-direction:row-reverse;border-left:none;border-bottom:1px solid currentColor;margin-left:0;margin-right:.8em}}", e),
            kt = !0
        }
    }
      , Pt = function(e) {
        if (!wt && !0 === e.banner.applyStyles) {
            var t = {
                backgroundColor: e.banner.backgroundColor,
                textColor: e.banner.textColor,
                rejectButtonCaptionColor: e.banner.rejectButtonCaptionColor,
                rejectButtonColor: e.banner.rejectButtonColor,
                acceptButtonCaptionColor: e.banner.acceptButtonCaptionColor,
                acceptButtonColor: e.banner.acceptButtonColor,
                buttonTextColor: e.banner.customizeButtonCaptionColor,
                buttonBackgroundColor: e.banner.customizeButtonColor,
                brandBackgroundColor: e.banner.logo && e.banner.brandBackgroundColor,
                brandTextColor: e.banner.logo && e.banner.brandTextColor,
                fontSizeBody: e.banner.fontSize || e.banner.fontSizeBody,
                buttonExitFontSize: e.banner.fontSize || e.banner.fontSizeCloseButton,
                buttonExitTextColor: e.banner.logo && e.banner.brandTextColor,
                buttonExitBackgroundColor: !e.banner.logo && e.banner.backgroundColor,
                continueWithoutAcceptingButtonColor: e.banner.continueWithoutAcceptingButtonColor,
                continueWithoutAcceptingButtonCaptionColor: e.banner.continueWithoutAcceptingButtonCaptionColor
            }
              , n = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = "";
                return e.forEach((function(e) {
                    var i = e.selector || e.selectors.join(", ")
                      , o = "";
                    for (var a in e.properties)
                        e.properties[a] && (o += "".concat(a, ": ").concat(e.properties[a]).concat(t ? "!important" : "", ";"));
                    o && (n += "".concat(i, " { ").concat(o, " }"))
                }
                )),
                n
            }([{
                selectors: ["#iubenda-iframe.iubenda-iframe-branded .iubenda-modal-navigation-brand", "#iubenda-iframe.iubenda-iframe-branded .purposes-header", "#iubenda-iframe.iubenda-iframe-branded .purposes-header .iub-btn-cp", "#iubenda-iframe.iubenda-iframe-branded .purposes-header .iub-btn-back", "#iubenda-iframe.iubenda-iframe-branded .iub-cmp-header", "#purposes-content-container .purposes-header", "#iubenda-cs-banner .iubenda-cs-brand"],
                properties: {
                    "background-color": t.brandBackgroundColor,
                    color: t.brandTextColor
                }
            }, {
                selector: "#iubenda-cs-banner .iub-toggle .iub-toggle-label",
                properties: {
                    color: t.brandTextColor
                }
            }, {
                selector: ["#iubenda-iframe.iubenda-iframe-branded .purposes-header .iub-btn-cp:hover", "#iubenda-iframe.iubenda-iframe-branded .purposes-header .iub-btn-back:hover"],
                properties: {
                    "background-color": t.brandTextColor,
                    color: t.brandBackgroundColor
                }
            }, {
                selector: "#iubenda-cs-banner .iubenda-cs-content",
                properties: {
                    "background-color": t.backgroundColor,
                    color: t.textColor,
                    "font-size": t.fontSizeBody
                }
            }, {
                selector: "#iubenda-cs-banner .iubenda-cs-close-btn",
                properties: {
                    "font-size": t.buttonExitFontSize,
                    color: t.buttonExitTextColor,
                    "background-color": t.buttonExitBackgroundColor
                }
            }, {
                selector: "#iubenda-cs-banner .iubenda-cs-opt-group",
                properties: {
                    color: t.backgroundColor
                }
            }, {
                selector: ["#iubenda-cs-banner .iubenda-cs-opt-group button", ".iubenda-alert button.iubenda-button-cancel"],
                properties: {
                    "background-color": t.buttonBackgroundColor,
                    color: t.buttonTextColor
                }
            }, {
                selectors: ["#iubenda-cs-banner .iubenda-cs-opt-group button.iubenda-cs-accept-btn", "#iubenda-cs-banner .iubenda-cs-opt-group button.iubenda-cs-btn-primary", ".iubenda-alert button.iubenda-button-confirm"],
                properties: {
                    "background-color": t.acceptButtonColor,
                    color: t.acceptButtonCaptionColor
                }
            }, {
                selector: "#iubenda-cs-banner .iubenda-cs-opt-group button.iubenda-cs-reject-btn",
                properties: {
                    "background-color": t.rejectButtonColor,
                    color: t.rejectButtonCaptionColor
                }
            }, {
                selector: "#iubenda-cs-banner button.iubenda-cs-cwa-button",
                properties: {
                    "background-color": t.continueWithoutAcceptingButtonColor,
                    color: t.continueWithoutAcceptingButtonCaptionColor
                }
            }], !0)
              , i = document.head || document.getElementsByTagName("head")[0];
            Oe(n, i),
            wt = !0
        }
    };
    function _t() {
        var e = "iubenda-cs__overlay-style";
        if (!!!document.querySelector(".".concat(e))) {
            var t = document.createElement("style");
            t.className = e,
            t.innerHTML = ".iubenda-cs__overlay{width:100%;height:100%;display:flex;overflow:auto;padding:1rem;background-color:rgba(0,0,0,.1);font-family:sans-serif;box-sizing:border-box}.iubenda-cs__dialog{max-width:320px;border-radius:.5rem;box-shadow:0 0 2rem rgba(0,0,0,.25),0 0 0 1px rgba(0,0,0,.05);margin:auto;overflow:hidden;padding:1.5rem;display:flex;flex-direction:column;grid-gap:1.5rem;background:#fff;color:#222;box-sizing:border-box}.iubenda-cs__body h1{font-size:1.25rem;margin:0 0 .5rem 0}.iubenda-cs__body p{margin:0;font-weight:300}.iubenda-cs__button{font-size:100%;border-radius:4rem;padding:.5rem 1rem;font-weight:700;background-color:#0073ce!important;color:#fff!important;border:0;width:100%;cursor:pointer}.iubenda-cs__button:hover{background-color:#005aa0!important}@media (max-height:320px) and (max-width:240px){.iubenda-cs__overlay{padding:0}}@media (max-height:320px) and (min-width:480px){.iubenda-cs__dialog{flex-direction:row;max-width:100%;align-items:center}.iubenda-cs__button{padding:1rem 3rem}}",
            document.body.appendChild(t)
        }
    }
    var St = function() {
        var e = document.getElementsByClassName("iubenda-advertising-preferences-link");
        Ct();
        for (var t = 0; t < e.length; t++)
            At(e[t])
    }
      , At = function(e) {
        e.addEventListener("click", (function(e) {
            e.stopPropagation(),
            e.preventDefault(),
            _iub.cs.ui.showCP(!1, !0)
        }
        ))
    }
      , Bt = "en"
      , Ot = Bt
      , It = function(e, t) {
        for (var n = e, i = 0; n && i < t.length; i++) {
            var o = t[i];
            if (!(o in n))
                return null;
            n = n[o]
        }
        return n
    }
      , Tt = function(e, t) {
        var n, i, o, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = e.split("."), s = It(tt[Ot], r) || t || e;
        return void 0 === s && Ot !== Bt && (s = It(tt.en, r)),
        oe(s = s || t || e, null !== (n = null === (i = _iub) || void 0 === i || null === (o = i.cs) || void 0 === o ? void 0 : o.options) && void 0 !== n ? n : a)
    };
    Tt.setLang = function(e) {
        Ot = e
    }
    ;
    var Lt = Tt
      , Et = function(e) {
        return -1 !== ["en", "it", "de", "es", "fr", "pt-BR", "nl", "da"].indexOf(e) ? e.toLowerCase() : "en"
    };
    function Nt(e) {
        var t = null != e ? e : "en";
        return {
            brandLink: "https://www.iubenda.com/" + Et(t) + "/cookie-solution?utm_source=cs&utm_medium=web&utm_campaign=csbr1",
            brandLinkTitle: tt[t].brand.linkTitle
        }
    }
    window._iub.csTranslate = Lt;
    var Dt, Ft, Vt, zt, Rt = function() {
        function e(t, n, o) {
            i(this, e),
            this.rootNode = window.document.createElement("div"),
            this.buttonNode = window.document.createElement("button"),
            this.buttonNode.className = o,
            this.buttonNode.innerHTML = t,
            this.onClick = n,
            this.bindHTML(),
            this.bindEvents()
        }
        return a(e, [{
            key: "bindHTML",
            value: function() {
                this.rootNode.innerHTML = "",
                this.rootNode.appendChild(this.buttonNode)
            }
        }, {
            key: "bindEvents",
            value: function() {
                var e = this;
                this.buttonNode.addEventListener("click", (function(t) {
                    e.onClick(self, t)
                }
                ))
            }
        }, {
            key: "getRootNode",
            value: function() {
                return this.rootNode
            }
        }, {
            key: "getButtonNode",
            value: function() {
                return this.buttonNode
            }
        }]),
        e
    }(), jt = function() {
        function e(t, n, o, a, r, s) {
            var c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {};
            for (var l in i(this, e),
            this.id = n,
            this.rootNode = window.document.createElement("div"),
            this.rootNode.className = "purposes-item purpose-item-" + this.id,
            s && we(this.rootNode, "purposes-item-shown"),
            this.optionNode = window.document.createElement("input"),
            this.optionNode.type = "checkbox",
            this.optionNode.name = n,
            this.optionNode.id = "purpose-" + n,
            this.optionNode.checked = o,
            this.parent = t,
            this.description = a,
            this.disableCollapse = s,
            this.onChange = r,
            this.i18nLabels = {
                name: "per_purpose.purposes.".concat(this.id, ".name")
            },
            c)
                Object.prototype.hasOwnProperty.call(c, l) && (this.i18nLabels[l] = c[l]);
            this.bindHTML(),
            this.bindEvents()
        }
        return a(e, [{
            key: "bindHTML",
            value: function() {
                var e = this.description ? '\n      <div class="purposes-item-body">\n        '.concat(Lt("per_purpose.purposes.".concat(this.id, ".description")), "\n      </div>\n    ") : "";
                this.rootNode.innerHTML = '<div class="purposes-item-header">\n  <div class="purposes-item-title">\n    <div>\n      <label for="purpose-'.concat(this.id, '">').concat(Lt(this.i18nLabels.name), '</label>\n    </div>\n    <button\n      class="purposes-item-title-btn"\n      data-str-off="').concat(Lt("per_purpose.see_description"), '"\n      data-str-on="').concat(Lt("per_purpose.hide_description"), '"\n      ').concat(this.disableCollapse ? 'style="display: none !important"' : "", "\n    >\n      ").concat(Lt("per_purpose.see_description"), '\n    </button>\n  </div>\n  <div class="iub-toggle-checkbox purposes-checkbox"></div>\n</div>\n').concat(e, "\n"),
                this.rootNode.getElementsByClassName("purposes-checkbox")[0].appendChild(this.optionNode),
                this.optionNode.className = "style1"
            }
        }, {
            key: "bindEvents",
            value: function() {
                var e = this;
                this.optionNode.addEventListener("change", (function(t) {
                    e.onChange(e, t)
                }
                ));
                var t = this.rootNode.getElementsByClassName("purposes-item-title-btn")[0];
                t.onclick = function() {
                    e.toggleDescription(t)
                }
            }
        }, {
            key: "showDescription",
            value: function(e) {
                var t = this;
                we(this.rootNode, "purposes-item-shown"),
                e.innerHTML = e.getAttribute("data-str-on"),
                setTimeout((function() {
                    return t.rootNode.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    })
                }
                ), 200)
            }
        }, {
            key: "hideDescription",
            value: function(e) {
                Ce(this.rootNode, "purposes-item-shown"),
                e.innerHTML = e.getAttribute("data-str-off")
            }
        }, {
            key: "isDescriptionHidden",
            value: function() {
                return !xe(this.rootNode, "purposes-item-shown")
            }
        }, {
            key: "toggleDescription",
            value: function(e) {
                this.isDescriptionHidden() ? this.showDescription(e) : this.hideDescription(e)
            }
        }, {
            key: "disable",
            value: function() {
                this.optionNode.classList.add("locked"),
                this.optionNode.disabled = !0
            }
        }, {
            key: "setValue",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.optionNode.checked = e,
                t || this.onChange(this, null)
            }
        }, {
            key: "setNotice",
            value: function(e) {
                var t = window.document.createElement("div");
                t.className = "purposes-items-notice",
                t.innerHTML = e,
                this.rootNode.appendChild(t)
            }
        }, {
            key: "getRootNode",
            value: function() {
                return this.rootNode
            }
        }, {
            key: "getOptionNode",
            value: function() {
                return this.optionNode
            }
        }]),
        e
    }(), Mt = function() {
        function e(t, n) {
            i(this, e),
            this.rootNode = window.document.createElement("div"),
            this.rootNode.className = "purposes-item purposes-item-5",
            n && this.isTcfEnabled(t.cookieSolution) && we(this.rootNode, "purposes-item-shown"),
            this.parent = t,
            this.disableCollapse = n,
            this.cookieSolution = t.cookieSolution,
            this.bindHTML(),
            this.bindEvents(),
            this.rootToggleFocusNode = this.rootNode.querySelectorAll(".purposes-item-body")[1]
        }
        return a(e, [{
            key: "bindHTML",
            value: function() {
                var e = "";
                this.isTcfEnabled(this.cookieSolution) && (e = '        <div class="purposes-sub-container generic-ads-container" style="display: none !important">        <div>          <div>            <label for="purpose-5">' + Lt("per_purpose.general_advertising_services") + '</label>          </div>          <div class="iub-toggle-checkbox purposes-checkbox generic-ads-option-container">          </div>        </div>      </div>'),
                this.rootNode.innerHTML = '<div class="purposes-item-header" style="display: none !important;">      <div class="purposes-item-title">        <div style="flex-direction: column;align-items: flex-start!important;justify-content: flex-start!important;">          <label for="iub-checkbox4">' + Lt("per_purpose.purposes.5.name") + '</label>          <span class="purposes-badge purposes-badge-primary" style="display: none !important">' + Lt("per_purpose.adopts_tcf") + '</span>        </div>        <button class="purposes-item-title-btn" data-str-off="' + Lt("per_purpose.see_description_customize") + '" data-str-on="' + Lt("per_purpose.hide_description") + '"' + (this.disableCollapse ? ' style="display: none !important"' : "") + ">" + Lt("per_purpose.see_description_customize") + '</button>      </div>      <div class="iub-toggle-checkbox purposes-checkbox">        <input class="style1 primary-option" id="iub-checkbox4" type="checkbox"/>      </div>    </div>    <div class="purposes-item-body">      <div>        <p>' + Lt("per_purpose.purposes.5.description") + '</p>      </div>    </div>    <div class="purposes-item-body">      <div class="purposes-sub-container tcf-container" style="display: none !important">        <div>          <div>            <label for="iub-checkbox5">' + Lt("per_purpose.tcf_adhering_services") + '</label>          </div>          <div class="iub-toggle-checkbox purposes-checkbox">            <input class="style1 sm tcf-option" id="iub-checkbox5" type="checkbox"/>          </div>        </div>        <div>          <p>' + Lt("per_purpose.tcf_adhering_services_description") + '</p>          <p><button class="iub-btn iub-btn-config purposes-btn purposes-btn-tcf purposes-btn-config">' + Lt("per_purpose.customize_advertising_tracking") + '</button></p>        </div>      </div>      <div class="purposes-sub-container google-ads-container" style="display: none !important">        <div>          <div>            <label>' + Lt("per_purpose.purposes.googleAdsPersonalized.name") + '</label>          </div>          <div class="iub-toggle-checkbox purposes-checkbox google-option-container">          </div>        </div>        <div>          <p>' + Lt("per_purpose.purposes.googleAdsPersonalized.description") + '</p>        </div>      </div>      <div class="purposes-sub-container google-additional-consent-container" style="display: none !important">        <div>          <div>            <label for="iub-checkbox6">' + Lt("google_additional_consent.per_purpose_widget.title") + '</label>          </div>          <div class="iub-toggle-checkbox purposes-checkbox google-additional-consent-option-container">            <input class="style1 sm google-additional-consent-option" id="iub-checkbox6" type="checkbox"/>          </div>        </div>        <div>          <p>' + Lt("google_additional_consent.per_purpose_widget.description") + '</p>          <p><button class="iub-btn iub-btn-config purposes-btn google-additional-consent-btn purposes-btn-config">' + Lt("google_additional_consent.per_purpose_widget.customize") + "</button></p>        </div>      </div>" + e + "</div>",
                this.isTcfEnabled(this.cookieSolution) && (this.rootNode.querySelector(".purposes-badge-primary").style.display = "",
                this.rootNode.querySelector(".tcf-container").style.display = "",
                this.rootNode.querySelector(".purposes-item-header").style.display = "",
                this.googleAdditionalConsentOptionNode = this.rootNode.querySelector(".google-additional-consent-option")),
                this.primaryOptionNode = this.rootNode.querySelector(".primary-option"),
                this.tcfOptionNode = this.rootNode.querySelector(".tcf-option")
            }
        }, {
            key: "isTcfEnabled",
            value: function(e) {
                return e.options.enableTcf && e.options.gdprApplies
            }
        }, {
            key: "setupGenericAdsPurpose",
            value: function() {
                var e = this
                  , t = this.cookieSolution.options;
                if (this.isTcfEnabled(this.cookieSolution) && t.perPurposeConsent) {
                    var n = this.parent.getOptionNodeByID(5);
                    n && (de(n.parentNode.parentNode.parentNode),
                    this.rootNode.getElementsByClassName("generic-ads-option-container")[0].appendChild(n),
                    n.className = "style1 sm",
                    this.rootNode.getElementsByClassName("generic-ads-container")[0].style.display = "",
                    this.genericAdsOption = n,
                    this.genericAdsOption && this.genericAdsOption.addEventListener("change", (function() {
                        e.updateAdsSectionUI()
                    }
                    )),
                    vt(this.rootToggleFocusNode))
                }
            }
        }, {
            key: "setupGoogleAdditionalConsentOption",
            value: function() {
                var e = this.cookieSolution.options;
                e.googleAdditionalConsentMode && e.enableTcf && (this.rootNode.getElementsByClassName("google-additional-consent-container")[0].style.display = "")
            }
        }, {
            key: "setupTCFGoogleAdsOption",
            value: function() {
                if (this.cookieSolution.options.googleAdsPreferenceManagement && this.isTcfEnabled(this.cookieSolution)) {
                    var e = this.getTCFGoogleOption()
                      , t = e._checkbox;
                    this.rootNode.getElementsByClassName("google-ads-container")[0].style.display = "",
                    this.rootNode.getElementsByClassName("google-option-container")[0].appendChild(t),
                    e._root.remove(),
                    t.className = "style1 sm",
                    this.tcfGoogleOption = t
                }
            }
        }, {
            key: "getTCFGoogleOption",
            value: function() {
                if (!this.isTcfEnabled(this.cookieSolution) || !this.cookieSolution.ui.cmpWidget._customPurposeListView)
                    return null;
                for (var e = this.cookieSolution.ui.cmpWidget._customPurposeListView._purposeViews, t = 0; t < e.length; ++t)
                    if ("googleAdsPersonalized" === e[t]._id)
                        return e[t];
                return null
            }
        }, {
            key: "bindEvents",
            value: function() {
                var e = this
                  , t = this.rootNode.getElementsByClassName("purposes-item-title-btn")[0];
                t.onclick = function() {
                    e.toggle(t)
                }
                ,
                this.rootNode.getElementsByClassName("purposes-btn-tcf")[0].onclick = function() {
                    e.parent.fireEvent("open-tcf")
                }
                ,
                this.rootNode.getElementsByClassName("google-additional-consent-btn")[0].onclick = function() {
                    e.parent.fireEvent("open-google-additional-consent")
                }
                ,
                this.primaryOptionNode.addEventListener("change", (function() {
                    var t = e.primaryOptionNode.checked;
                    e.unsetMiddlePrimaryOption(),
                    e.genericAdsOption && (e.unsetMiddleOption(e.genericAdsOption),
                    e.genericAdsOption.checked = t,
                    e.genericAdsOption.dispatchEvent(Pe("Event", "change")),
                    e.cookieSolution.purposesPreference.setPreference(e.genericAdsOption.name, t)),
                    e.tcfOptionNode && (e.unsetMiddleOption(e.tcfOptionNode),
                    e.tcfOptionNode.checked = t,
                    e.tcfOptionNode.dispatchEvent(Pe("Event", "change"))),
                    e.tcfGoogleOption && (e.unsetMiddleOption(e.tcfGoogleOption),
                    e.tcfGoogleOption.checked = t),
                    e.googleAdditionalConsentOptionNode && (e.unsetMiddleOption(e.googleAdditionalConsentOptionNode),
                    e.googleAdditionalConsentOptionNode.checked = t,
                    e.googleAdditionalConsentOptionNode.dispatchEvent(Pe("Event", "change"))),
                    e.updateAdsSectionUI()
                }
                ))
            }
        }, {
            key: "setMktPreferenceState",
            value: function(e) {
                var t = {
                    mkt: e
                };
                this.cookieSolution.ui.preferenceState.processState(t)
            }
        }, {
            key: "populateByState",
            value: function() {
                if (this.cookieSolution.options.banner.showPurposesToggles && this.isTcfEnabled(this.cookieSolution)) {
                    var e = this.cookieSolution.ui.preferenceState.getFullState()
                      , t = e.purposes
                      , n = null;
                    void 0 !== e.mkt ? n = e.mkt : t && t[5] && "boolean" == typeof t[5].value && (n = t[5].value),
                    "boolean" == typeof n && (this.unsetMiddlePrimaryOption(),
                    this.primaryOptionNode.checked = n,
                    this.primaryOptionNode.dispatchEvent(Pe("Event", "change")))
                }
            }
        }, {
            key: "updateAdsSectionUI",
            value: function() {
                var e, t, n = 0;
                n += this.genericAdsOption ? 1 : 0,
                n += this.tcfOptionNode ? 1 : 0,
                n += this.googleAdditionalConsentOptionNode ? 1 : 0;
                var i = 0;
                return i += +(null === (e = this.genericAdsOption) || void 0 === e ? void 0 : e.checked) || 0,
                i += +(null === (t = this.tcfOptionNode) || void 0 === t ? void 0 : t.checked) || 0,
                0 === (i += +this.googleAdditionalConsentOptionNode.checked || 0) ? (this.unsetMiddlePrimaryOption(),
                this.primaryOptionNode.checked = !1,
                void this.setMktPreferenceState(!1)) : i < n || this.isPartialConsentOnAdsSection() ? (this.setMiddlePrimaryOption(),
                this.primaryOptionNode.checked = !0,
                void this.setMktPreferenceState("partial")) : i === n ? (this.unsetMiddlePrimaryOption(),
                this.primaryOptionNode.checked = !0,
                void this.setMktPreferenceState(!0)) : void 0
            }
        }, {
            key: "isPartialConsentOnAdsSection",
            value: function() {
                var e = !!this.tcfOptionNode && xe(this.tcfOptionNode, "half")
                  , t = !!this.genericAdsOption && xe(this.genericAdsOption, "half")
                  , n = !!this.googleAdditionalConsentOptionNode && xe(this.googleAdditionalConsentOptionNode, "half");
                return e || t || n
            }
        }, {
            key: "saveEdits",
            value: function() {
                this.genericAdsOption && this.cookieSolution.purposesPreference.setPreference(5, this.genericAdsOption.checked),
                this.tcfOptionNode && this.tcfOptionNode.dispatchEvent(Pe("Event", "save-button-clicked")),
                this.tcfGoogleOption && this.tcfGoogleOption.dispatchEvent(Pe("Event", "save-button-clicked")),
                this.googleAdditionalConsentOptionNode && this.googleAdditionalConsentOptionNode.dispatchEvent(Pe("Event", "save-button-clicked")),
                this.cookieSolution.ui.CPiFrame.updatePerPurposeWidget()
            }
        }, {
            key: "expand",
            value: function(e) {
                var t = this;
                we(this.rootNode, "purposes-item-shown"),
                e.innerHTML = e.getAttribute("data-str-on"),
                function(e) {
                    var t = e instanceof HTMLElement ? e : document.querySelector(e);
                    if (t) {
                        var n = t.querySelectorAll("[data-tabenableindex]");
                        Array.prototype.slice.call(n).forEach((function(e) {
                            var t = e.getAttribute("data-tabenableindex");
                            t ? e.setAttribute("tabIndex", t) : e.removeAttribute("tabIndex"),
                            e.removeAttribute("data-tabenableindex")
                        }
                        ))
                    }
                }(this.rootToggleFocusNode),
                setTimeout((function() {
                    return t.rootNode.children[1].scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })
                }
                ), 200)
            }
        }, {
            key: "collapse",
            value: function(e) {
                Ce(this.rootNode, "purposes-item-shown"),
                e.innerHTML = e.getAttribute("data-str-off"),
                vt(this.rootToggleFocusNode)
            }
        }, {
            key: "isCollapsed",
            value: function() {
                return !xe(this.rootNode, "purposes-item-shown")
            }
        }, {
            key: "toggle",
            value: function(e) {
                this.isCollapsed() ? this.expand(e) : this.collapse(e)
            }
        }, {
            key: "getRootNode",
            value: function() {
                return this.rootNode
            }
        }, {
            key: "setMiddlePrimaryOption",
            value: function() {
                xe(this.primaryOptionNode, "half") || we(this.primaryOptionNode, "half")
            }
        }, {
            key: "unsetMiddlePrimaryOption",
            value: function() {
                Ce(this.primaryOptionNode, "half")
            }
        }, {
            key: "unsetMiddleOption",
            value: function(e) {
                xe(e, "half") && Ce(e, "half")
            }
        }]),
        e
    }(), Ut = function() {
        function e(t) {
            i(this, e),
            this.option = {},
            this.rootNode = null,
            this.cs = t.cookieSolution,
            this.cs.usPurposes && (this.rootNode = window.document.createElement("div"),
            this.rootNode.className = "purposes-section uspr-section",
            this.bindHTML(),
            this.bindLinks())
        }
        return a(e, [{
            key: "bindHTML",
            value: function() {
                this.rootNode.innerHTML = this.getSectionHeader(),
                this.getSectionBody()
            }
        }, {
            key: "bindLinks",
            value: function() {
                var e = this;
                f(this.rootNode.querySelectorAll(".iubenda-privacy-policy-link")).forEach((function(t) {
                    e.cs.handleBannerPPClick(t)
                }
                ))
            }
        }, {
            key: "getSectionHeader",
            value: function() {
                return this.replaceCustomStrings('\n      <div class="purposes-section-header">\n        <h3 class="purposes-section-header-title">'.concat(Lt("uspr.widget_title"), '</h3>\n        <p class="purposes-section-header-text">\n          ').concat(Lt("uspr.widget_intro"), '\n        </p>\n      </div>\n      <div class="purposes-section-body no-forced-bold"></div>\n    '))
            }
        }, {
            key: "replaceCustomStrings",
            value: function(e) {
                var t = e
                  , n = '<a  href="javascript:void(0)" class="iubenda-privacy-policy-link">' + Lt("uspr.privacy_policy") + "</a>";
                return t = t.replace("%{privacy_policy}", n)
            }
        }, {
            key: "forEachPurpose",
            value: function(e) {
                var t = this.cs.usPurposes.getPreferences();
                Object.keys(t).forEach((function(n) {
                    var i = t[n];
                    e(n, i)
                }
                ))
            }
        }, {
            key: "applyGPCSignal",
            value: function() {
                var e = this
                  , t = navigator.globalPrivacyControl;
                this.cs.usPurposes.getGPCSignalPurposes().forEach((function(n) {
                    var i = e.option[n];
                    i && (i.disable(),
                    i.setValue(!t, !0),
                    i.setNotice(Lt("uspr.gpc_signal")))
                }
                ))
            }
        }, {
            key: "getSectionBody",
            value: function() {
                var e = this;
                this.option = {};
                var t = this.rootNode.getElementsByClassName("purposes-section-body")[0];
                this.forEachPurpose((function(n, i) {
                    var o = new jt(e,n,i,null,e.onOptionChange.bind(e),!0,{
                        name: "uspr.purposes.".concat(n)
                    });
                    t.appendChild(o.getRootNode()),
                    e.option[n] = o
                }
                )),
                this.applyGPCSignal()
            }
        }, {
            key: "updateOptionsState",
            value: function() {
                var e = this;
                this.forEachPurpose((function(t, n) {
                    e.option[t].setValue(n, !0)
                }
                ))
            }
        }, {
            key: "onOptionChange",
            value: function(e) {
                var t = e.optionNode.name;
                this.cs.usPurposes.setPreferences(r({}, t, e.optionNode.checked))
            }
        }, {
            key: "getRootNode",
            value: function() {
                return this.rootNode
            }
        }]),
        e
    }(), Wt = function(e) {
        var t = e || window.event;
        t.stopPropagation && t.stopPropagation(),
        null !== t.cancelBubble && (t.cancelBubble = !0)
    }, Ht = function() {
        function e(t) {
            var n = this;
            i(this, e),
            this.rootNode = window.document.createElement("div"),
            this.rootNode.className = "iubenda purposes-widget",
            this.cookieSolution = t,
            this.disablePurposesCollapse = !t.options.showPurposesCollapsed,
            this.rejectAllButton = new Rt(Lt("per_purpose.reject_all"),(function() {
                n.expressForAllOptions(!1)
            }
            ),"iub-btn iub-btn-consent iub-btn-reject purposes-btn purposes-btn-reject"),
            this.approveAllButton = new Rt(Lt("per_purpose.approve_all"),(function() {
                n.expressForAllOptions(!0)
            }
            ),"iub-btn iub-btn-consent iub-btn-accept purposes-btn purposes-btn-accept"),
            this.adsSection = new Mt(this,this.disablePurposesCollapse),
            this.usprSection = new Ut(this),
            this.options = [],
            this.events = {},
            this.bindHTML(),
            this.bindEvents(),
            this.adsSection.setupGenericAdsPurpose()
        }
        return a(e, [{
            key: "bindHTML",
            value: function() {
                this.rootNode.innerHTML = '\n      <div class="purposes-content">\n        <div class="purposes-header">\n          <h1 class="purposes-header-title">'.concat(Lt("2nd_layer.widget_title"), '</h1>\n          <p class="purposes-header-text">').concat(Lt("2nd_layer.widget_intro"), '</p>\n        </div>\n        <div class="iub-consent-buttons purposes-buttons"></div>\n        <div class="purposes-body"></div>\n      </div>\n    ');
                var e = this.rootNode.getElementsByClassName("purposes-buttons")[0]
                  , t = this.rootNode.getElementsByClassName("purposes-body")[0];
                e.appendChild(this.rejectAllButton.getRootNode()),
                e.appendChild(this.approveAllButton.getRootNode()),
                this.usprSection.getRootNode() && t.appendChild(this.usprSection.getRootNode());
                var n = this.cookieSolution.options;
                if (n.perPurposeConsent && (n.gdprApplies || n.lgpdApplies || n.fadpApplies)) {
                    t.appendChild(this.getOptionsSection());
                    var i = this.getOptionNodeByID(1);
                    i.className = "style1 locked",
                    i.disabled = !0,
                    this.strictlyNecessaryPurposeOption = i
                }
            }
        }, {
            key: "bindEvents",
            value: function() {
                var e = this;
                this.rootNode.addEventListener("click", (function(e) {
                    Wt(e)
                }
                ));
                for (var t = this.rootNode.getElementsByClassName("open-cp"), n = 0; n < t.length; ++n)
                    t[n].addEventListener("click", (function(t) {
                        Wt(t),
                        e.fireEvent("open-cookie-policy")
                    }
                    ))
            }
        }, {
            key: "getOptionsSection",
            value: function() {
                var e = window.document.createElement("div");
                e.className = "purposes-section",
                e.innerHTML = '\n      <div class="purposes-section-header">\n        <h3 class="purposes-section-header-title">'.concat(Lt("per_purpose.widget_title"), '</h3>\n        <p class="purposes-section-header-text">\n          ').concat(Lt("per_purpose.widget_intro"), '\n        </p>\n      </div>\n      <div class="purposes-section-body purposes-items"></div>\n    ');
                var t = e.getElementsByClassName("purposes-section-body")[0];
                this.populateOptions();
                for (var n = 0; n < this.options.length; ++n)
                    t.appendChild(this.options[n].getRootNode());
                return t.appendChild(this.adsSection.getRootNode()),
                e
            }
        }, {
            key: "populateOptions",
            value: function() {
                for (var e = this, t = this.cookieSolution.purposes.toIDArray(), n = this.cookieSolution.ui.preferenceState.state.purposes, i = 0; i < t.length; ++i) {
                    var o = t[i]
                      , a = n && n[o] && "boolean" == typeof n[o].value ? n[o].value : null
                      , r = a || (this.cookieSolution.purposesPreference.getPreferenceByPurposeID(o) || !1)
                      , s = new jt(this,o,r,"Description",(function(t, n) {
                        e.onOptionChange(t, n)
                    }
                    ),this.disablePurposesCollapse);
                    s.optionNode.id = "purpose-" + o,
                    this.options.push(s)
                }
            }
        }, {
            key: "expressForAllOptions",
            value: function(e) {
                this.cookieSolution.usPurposes && (this.cookieSolution.usPurposes.setAllPurposesValue(e),
                this.usprSection.updateOptionsState());
                for (var t = 0; t < this.options.length; ++t)
                    "purpose-1" !== this.options[t].optionNode.id && this.options[t].setValue(e);
                var n = this.cookieSolution.options;
                n.enableTcf && (n.gdprApplies || n.lgpdApplies) && (this.adsSection.unsetMiddlePrimaryOption(),
                this.adsSection.primaryOptionNode.checked = e,
                this.adsSection.primaryOptionNode.dispatchEvent(Pe("Event", "change")))
            }
        }, {
            key: "onOptionChange",
            value: function(e) {
                var t = e.optionNode.name
                  , n = e.optionNode.checked;
                this.cookieSolution.ui.preferenceState.processState({
                    purposes: r({}, t, {
                        value: n
                    })
                }),
                this.cookieSolution.purposesPreference.setPreference(t, e.optionNode.checked)
            }
        }, {
            key: "hide",
            value: function() {
                this.rootNode.style.setProperty("display", "none", "important"),
                this.fireEvent("on-hide")
            }
        }, {
            key: "getOptionNodeByID",
            value: function(e) {
                return this.rootNode.getElementsByClassName("purposes-items")[0].querySelector("#purpose-" + e)
            }
        }, {
            key: "show",
            value: function() {
                this.rootNode.style.removeProperty("display"),
                this.fireEvent("on-show")
            }
        }, {
            key: "getRootNode",
            value: function() {
                return this.rootNode
            }
        }, {
            key: "addEventListener",
            value: function(e, t) {
                this.events[e] || (this.events[e] = []),
                this.events[e].push(t)
            }
        }, {
            key: "fireEvent",
            value: function(e, t) {
                var n = this.events[e];
                if (n && 0 !== n.length)
                    for (var i = 0; i < n.length; ++i)
                        n[i](t)
            }
        }]),
        e
    }(), Gt = function(e, t, n) {
        var i = "?"
          , o = e;
        /\?.+/.test(e) ? i = "&" : o = o.replace("?", "");
        var a = o.split("#")
          , r = "";
        return a[1] && (r = "#" + a[1]),
        o.split("#")[0] + i + t + "=" + n + r
    }, qt = function(e, t, n) {
        return e + (-1 !== e.indexOf("?") ? "&" : "?") + t + "=" + n
    }, Yt = "iub-popover", Jt = "iub-popover-header-title", Kt = "iub-popover-content-body", Xt = "iub-popover-header-close", $t = "iub-popover-visible", Zt = function(e) {
        var t = e.target;
        if (xe(t, "iub-popover-trigger")) {
            var n = t.getAttribute("data-iub-popover")
              , i = t.getAttribute("data-iub-popover-title") || Lt("tooltips." + n + ".title", "")
              , o = t.getAttribute("data-iub-popover-body") || Lt("tooltips." + n + ".body", "");
            Qt(t, i, o),
            e.preventDefault()
        }
    }, Qt = function(e, t, n) {
        var i = _iub.cs.ui
          , o = function(e, t) {
            for (var n = e.parentNode; null != n; ) {
                if (!0 === t(n))
                    return n;
                n = n.parentNode
            }
            return null
        }(e, (function(e) {
            var t = "iubenda-iframe-popup" === e.id;
            return t && !e._iubPopupInit && (Ae(e, "click", nn),
            e._iubPopupInit = 1),
            t || xe(e, "iubenda-cs-container")
        }
        ));
        en(o),
        Ft.innerHTML = t,
        Vt.innerHTML = n,
        i.bindOpenCmpBtns(Dt),
        i.bindVendorListBtns(Dt),
        Dt.offsetWidth,
        we(o.parentNode, $t),
        gt(".".concat(Yt))
    }, en = function(e) {
        Dt || ((Dt = document.createElement("div")).className = Yt,
        Dt.setAttribute("role", "dialog"),
        Dt.setAttribute("aria-labelledby", "iub-popover-title"),
        Dt.setAttribute("aria-describedby", "iub-popover-content"),
        Dt.innerHTML = ['<div class="iub-popover-header">', '<h2 class="' + Jt + '" id="iub-popover-title">[POPOVER TITLE]</h2>', '<button class="' + Xt + '">&times</button>', "</div>", '<div class="iub-popover-content" id="iub-popover-content">', '<div class="' + Kt + '">[POPOVER CONTENT]</div>', "</div>"].join(""),
        Ae(Dt, "click", tn)),
        e.appendChild(Dt),
        Ft || (Ft = on(Jt)),
        Vt || (Vt = on(Kt)),
        zt || (zt = on(Xt))
    }, tn = function(e) {
        xe(e.target, Xt) && sn()
    }, nn = function(e) {
        var t = e.target;
        t === Dt || pe(Dt, t) || sn(),
        e.stopPropagation()
    }, on = function(e) {
        return ce(e)[0]
    }, an = function(e) {
        Ae(e, "click", Zt)
    }, rn = function() {
        return !!on($t)
    }, sn = function() {
        if (Dt && Dt.parentNode) {
            var e = on($t);
            e && (gt(),
            Ce(e, $t),
            setTimeout((function() {
                Dt.parentNode.removeChild(Dt)
            }
            ), 300))
        }
    }, cn = function() {
        function e(t) {
            i(this, e),
            this.options = t,
            this.isActive = this.setActive();
            var n, o, a = (n = t.lang,
            {
                brandLink: "https://www.iubenda.com/" + Et(o = null != n ? n : "en") + "/cookie-solution?utm_source=cs&utm_medium=web&utm_campaign=csbr2",
                brandLinkTitle: tt[o].brand.linkTitle
            });
            this.link = a.brandLink,
            this.linkTitle = a.brandLinkTitle
        }
        return a(e, [{
            key: "setActive",
            value: function() {
                var e = this.options.cookieSolutionWhiteLabeling;
                return !(!this.options.banner.theme && !1 === e) && !(e >= 1)
            }
        }, {
            key: "getBadgeButton",
            value: function() {
                var e = document.createElement("a");
                e.className = "iubenda-cs-brand-badge",
                e.href = this.link,
                e.setAttribute("target", "_blank"),
                e.setAttribute("rel", "noopener"),
                e.setAttribute("title", this.linkTitle),
                e.innerHTML = "<span>Created with <span>iubenda</span></span>";
                var t = document.createElement("div");
                return t.className = "iubenda-cs-brand-badge-outer",
                t.appendChild(e),
                t
            }
        }, {
            key: "getBadgeText",
            value: function() {
                var e = document.createElement("div");
                return e.className = "iubenda-cs-brand-badge-text",
                e.innerHTML = 'Created with\n        <a href="'.concat(this.link, '" target="_blank" rel="noopener" title="').concat(this.linkTitle, '">\n            iubenda\n        </a>'),
                e
            }
        }, {
            key: "getBadge",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!this.isActive)
                    return e ? "" : null;
                var t = "inside"
                  , n = null;
                return 0 === this.options.cookieSolutionWhiteLabeling || !1 === this.options.cookieSolutionWhiteLabeling ? (t = "outside",
                n = this.getBadgeButton()) : n = this.getBadgeText(),
                {
                    position: t,
                    element: e ? n.outerHTML : n
                }
            }
        }]),
        e
    }(), ln = function() {
        function e() {
            i(this, e)
        }
        return a(e, [{
            key: "createMainElements",
            value: function() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.document_, i = t.cssClass_, o = n.createElement("div"), a = n.createElement("div"), r = n.createElement("div"), s = n.createElement("div"), c = n.createElement("div"), l = n.createElement("div");
                o.id = "iubenda-iframe",
                o.className = "iubenda-iframe-visible",
                o.setAttribute("role", "dialog"),
                o.setAttribute("aria-modal", "true"),
                _iub.cs.options.banner.logo && o.classList.add("iubenda-iframe-branded"),
                "string" == typeof i && (o.className = o.className + " " + i),
                a.id = "iubenda-iframe-popup",
                a.setAttribute("style", "position: fixed!important; bottom: 1000%!important;"),
                o.appendChild(a),
                r.className = "iubenda-iframe-spinner",
                o.appendChild(r),
                s.id = "iubenda-iframe-content",
                a.appendChild(s),
                l.className = "iubenda-iframe-top-container",
                s.appendChild(l);
                var p = new cn(_iub.cs.options);
                if (this.brandBadge = p.getBadge(),
                "outside" === (null === (e = this.brandBadge) || void 0 === e ? void 0 : e.position) && !1 !== _iub.cs.options.cookieSolutionWhiteLabeling) {
                    var u = document.createElement("div");
                    u.className = "iubenda-iframe-badge-container",
                    u.appendChild(this.brandBadge.element),
                    o.appendChild(u)
                }
                return c.id = "iubenda-iframe-overlay",
                o.onclick = function(e) {
                    e.stopPropagation(),
                    rn() && sn()
                }
                ,
                {
                    cOver: c,
                    iPPC: s,
                    spinner: r,
                    iframePopup: a,
                    mainC: o,
                    iframeContainer: l,
                    showIframe: function() {
                        a.className += " iubenda-showing-popup",
                        a.removeAttribute("style")
                    }
                }
            }
        }, {
            key: "createPolicyIframe",
            value: function(e, t, n) {
                var i = e.createElement("IFRAME");
                return i.setAttribute("src", t),
                i.setAttribute("scrolling", "yes"),
                i.setAttribute("frameBorder", "0"),
                i.setAttribute("allowtransparency", "true"),
                i.setAttribute("title", n),
                i
            }
        }, {
            key: "createFooterElements",
            value: function(e, t, n) {
                var i, o, a = (o = n,
                document.createTextNode(o || "")), r = _iub.cs.options, s = r.lang, c = tt[s].banner, l = r.banner.acceptButtonCaption || c.accept_button_caption, p = r.banner.rejectButtonCaption || c.reject_button_caption, u = ue("div");
                u.className = "iubenda-iframe-footer";
                var d = r.banner.logo
                  , h = null;
                if (d) {
                    (h = ue("button")).setAttribute("class", "iub-btn iub-btn-back iub-btn-stroked"),
                    h.id = "iubBackBtn",
                    h.innerHTML = '<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 4-8 8 8 8" stroke="currentColor" stroke-width="3"/></svg>' + Lt("modal.back"),
                    h.setAttribute("aria-label", Lt("modal.back"))
                }
                var f = ue("div");
                f.id = "iubFooterIabBtnContainer";
                var b = ue("div");
                b.id = "iubFooterBtnContainer";
                var m = ue("button");
                m.setAttribute("id", "iubFooterBtn");
                var g = null;
                if (r.banner.acceptButtonDisplay ? (m.innerHTML = l,
                !r.perPurposeConsent && r.banner.acceptButtonColor && m.style.setProperty("background-color", r.banner.acceptButtonColor, "important"),
                !r.perPurposeConsent && r.banner.acceptButtonCaptionColor && m.style.setProperty("color", r.banner.acceptButtonCaptionColor, "important")) : m.appendChild(a),
                r.banner.rejectButtonDisplay && ((g = ue("button")).setAttribute("id", "iubRejectBtn"),
                g.innerHTML = p,
                !r.perPurposeConsent && r.banner.rejectButtonColor && g.style.setProperty("background-color", r.banner.rejectButtonColor, "important"),
                !r.perPurposeConsent && r.banner.rejectButtonCaptionColor && g.style.setProperty("color", r.banner.rejectButtonCaptionColor, "important"),
                b.appendChild(g)),
                n && b.appendChild(m),
                d && u.appendChild(h),
                u.appendChild(f),
                u.appendChild(b),
                e.appendChild(u),
                "inside" === (null === (i = this.brandBadge) || void 0 === i ? void 0 : i.position) && !1 !== r.cookieSolutionWhiteLabeling) {
                    var v = document.createElement("div");
                    v.className = "iubenda-iframe-badge-footer",
                    v.appendChild(this.brandBadge.element),
                    e.appendChild(v)
                }
                return u.onclick = function(e) {
                    e.stopPropagation()
                }
                ,
                {
                    footer: u,
                    footerBtn: m,
                    footerRejectBtn: g,
                    iabBtnContainer: f,
                    backButton: h
                }
            }
        }]),
        e
    }();
    _iub.ifr_cc = _iub.ifr_cc || [];
    var pn = "cookie-policy"
      , un = "privacy-policy"
      , dn = "per-purpose"
      , hn = "tcf"
      , fn = "google-additional-consent"
      , bn = new M
      , mn = new ln
      , gn = '<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 4-8 8 8 8" stroke="currentColor" stroke-width="3"/></svg>';
    function vn(e) {
        return e.options.enableTcf && e.options.gdprApplies
    }
    var yn = function() {
        function e() {
            var t = this
              , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , o = arguments.length > 1 ? arguments[1] : void 0;
            i(this, e),
            this.linkA = n.linkA,
            this.embedP = n.embedP,
            this.iFrUrl = n.iFrUrl;
            var a = Nt(n.lang || "en");
            this.brandLink = a.brandLink,
            this.brandLinkTitle = a.brandLinkTitle,
            this.inParent = n.inParent,
            this.closeBtnUrl = n.closeBtnUrl,
            this.straightShow = n.straightShow,
            this.onLoad = n.onLoad,
            this.onClose = n.onClose,
            this.onReject = n.onReject,
            this.onBack = n.onBack,
            this.closeOn = n.closeOn,
            this.shortHeightBy = n.shortHeightBy,
            this.addClass = n.addClass,
            this.disableESC = n.disableESC,
            this.baseZIndex = n.baseZIndex || 1e4,
            this.scrolling = n.scrolling || !1,
            this.footer = n.footer,
            this.footerBtnCaption = "",
            this.footerAcceptBtnCaption = "",
            this.mainDoc = null,
            this.mainC = null,
            this.iPPC = null,
            this.cOver = null,
            this.spinner = null,
            this.iframePopup = null,
            this.iFr = null,
            this.iframeLoadCounter = 0,
            this.iFrW = 800,
            this.iFrH = 800,
            this.heightReduction = 0,
            this.scrollX = null,
            this.scrollY = null,
            this.mainL = null,
            this.mainT = null,
            this.footerHeight = 150,
            this.rsTimeout = null,
            this.cmpWidget = o,
            this.closureTriggeredByFooterButton = !1,
            this.toggleCmpWidget = this.showAndHideIabContainer,
            this.isMobile = bn.isMobile(),
            this.loaded = !1,
            this.currentView = null,
            this.viewsHistory = [],
            this.showCcpa = n.showCcpa,
            this.frameTitle = n.frameTitle,
            this.embedP || (this.embedP = this.linkA),
            this.iFrUrl || (this.iFrUrl = this.linkA.href),
            this.onBackButtonClicked = function(e) {
                e.stopPropagation(),
                t.showPreviousView(),
                t.updateGranularToggles(),
                t.updateGranularState()
            }
            ,
            "number" == typeof this.shortHeightBy && (this.heightReduction += this.shortHeightBy),
            this.footer && (this.heightReduction += this.footerHeight),
            this.straightShow ? this.showDocument(n.widgetToShow) : this.bindAll()
        }
        return a(e, [{
            key: "updateGranularToggles",
            value: function() {
                var e = this;
                if (_iub.cs.options.banner.showPurposesToggles) {
                    var t = _iub.cs.ui.preferenceState.getFullState();
                    if (t.purposes)
                        Object.keys(t.purposes).forEach((function(n) {
                            var i = t.purposes[n].value;
                            e.updateGranularToggleItem(n, i)
                        }
                        ));
                    void 0 !== t.mkt && this.updateGranularToggleItem("mkt", t.mkt)
                }
            }
        }, {
            key: "updateGranularToggleItem",
            value: function(e, t) {
                var n = document.querySelector("#iubenda-cs-banner .iub-toggle-id-".concat(e));
                if (n) {
                    var i = n.querySelector("input");
                    i.value !== t.toString() && (i.checked = !!t,
                    i.value = t,
                    i.dispatchEvent(Pe("Event", "change")))
                }
            }
        }, {
            key: "updateGranularState",
            value: function() {
                if (_iub.cs.options.banner.showPurposesToggles && this.cmpWidget) {
                    var e = this.cmpWidget.getCustomPreferences()
                      , t = {
                        tcfv2: this.cmpWidget.getPreferenceString(),
                        gac: e.gac
                    };
                    _iub.cs.ui.preferenceState.processState(t)
                }
            }
        }, {
            key: "showDocument",
            value: function(e) {
                var t = this;
                this.disableESC || Ae(document, "onkeydown", (function(e) {
                    t.keyPressed(e)
                }
                )),
                this.mainDoc = this.inParent ? parent.document : document,
                this.wipeOut(),
                _iub.cs.ui.disablePageScrolling("iframe", this.mainDoc),
                this.setSizeAndPosition(),
                _iub.cs.ui.hideFloatingPreferencesButton(),
                this.isMobile && (clearTimeout(this.rsTimeout),
                this.rsTimeout = setTimeout((function() {
                    var e = t.inParent ? parent.window : window
                      , n = function() {
                        t.setSizeAndPosition(),
                        t.applySizeAndPosition()
                    };
                    Ae(e, "resize", n),
                    Ae(e, "scroll", n, {
                        passive: !0
                    })
                }
                ), 50));
                var n = mn.createMainElements.call(this, {
                    document_: this.mainDoc,
                    cssClass_: this.addClass
                });
                this.cOver = n.cOver,
                this.iPPC = n.iPPC,
                this.spinner = n.spinner,
                this.iframePopup = n.iframePopup,
                this.mainC = n.mainC,
                this.iframeContainer = n.iframeContainer,
                this.mainContainer = this.iframeContainer.parentNode.getElementsByClassName("iubenda-iframe-top-container")[0],
                Ae(this.spinner, "click", (function(e) {
                    e.stopPropagation()
                }
                )),
                this.contentLoadedCallback = function() {
                    t.setLoaded((function() {
                        n.showIframe(),
                        t.applySizeAndPosition()
                    }
                    ))
                }
                ;
                var i = this.iframeContainer.parentNode;
                if (i.insertBefore(this.createNavigationBar(), i.childNodes[0]),
                this.embedP.appendChild(this.mainC),
                this.mainC.parentNode.insertBefore(this.cOver, this.mainC.nextSibling),
                this.footer && "string" == typeof this.footer.message && "string" == typeof this.footer.btnCaption) {
                    var o = mn.createFooterElements.call(this, this.iPPC, this.footer.message, this.footer.btnCaption);
                    o.footerBtn.onclick = function(e) {
                        var n = _iub.cs.state.currentView;
                        vn(_iub.cs) && n === dn && (t.showCcpa || (_iub.cs.ui.previousTCFPreferences = {
                            cmpCookie: t.cmpWidget.getPreferenceString(),
                            customPreferences: t.cmpWidget.getCustomPreferences()
                        }),
                        t.perPurposeWidget.adsSection.saveEdits()),
                        t.closeIFrame(e, "accept"),
                        t.footer.onClick && t.footer.onClick()
                    }
                    ,
                    o.footerRejectBtn && (o.footerRejectBtn.onclick = function(e) {
                        t.closeIFrame(e, "reject"),
                        t.footer.onClick && t.footer.onClick()
                    }
                    ,
                    this.footerRejectBtn = o.footerRejectBtn),
                    o.backButton && o.backButton.addEventListener("click", this.onBackButtonClicked),
                    this.footerBtnCaption = this.footer.btnCaption,
                    this.footerBtn = o.footerBtn,
                    this.acceptCaption = this.footerBtn.innerText,
                    this.footer = o.footer,
                    (_iub.cs.options.perPurposeConsent || _iub.cs.options.usprApplies) && e !== _iub.cs.ui.WIDGET_POLICY && this.createPerPurposeWidget(),
                    !this.showCcpa && vn(_iub.cs) && this.getReadyForIAB(o.iabBtnContainer, e)
                }
                this.applySizeAndPosition(),
                this.resetStyles(),
                this.viewsHistory = [],
                Pt(_iub.cs.options)
            }
        }, {
            key: "hideNavigationBarCookiePolicyButton",
            value: function() {
                if (this.navigationBar)
                    for (var e = this.navigationBar.getElementsByClassName("purposes-btn-cp"), t = 0; t < e.length; ++t)
                        e[t].setAttribute("style", "display:none!important")
            }
        }, {
            key: "showNavigationBarCookiePolicyButton",
            value: function() {
                for (var e = this.navigationBar.getElementsByClassName("purposes-btn-cp"), t = 0; t < e.length; ++t)
                    e[t].style.display = "flex"
            }
        }, {
            key: "handleIubendaLinkForMobile",
            value: function(e) {
                var t;
                Ae(e, "blur", (function() {
                    Ce(e, "hover")
                }
                )),
                Ae(e, "click", (function(n) {
                    xe(e, "hover") ? Ce(e, "hover") : (we(e, "hover"),
                    n.preventDefault(),
                    t && clearTimeout(t),
                    t = setTimeout((function() {
                        t = null,
                        Ce(e, "hover")
                    }
                    ), 4e3))
                }
                ))
            }
        }, {
            key: "createNavigationBar",
            value: function() {
                var e = this;
                if (this.navigationBar)
                    return this.navigationBar;
                var t, n, i = window.document.createElement("div"), o = _iub.cs.options, a = o.banner.logo, r = a ? '<div class="iubenda-modal-navigation-logo"><img class="iubenda-iframe-brand-img" src="' + o.banner.logo + '" alt="logo" /></div>' : "", s = '<button class="iub-btn iub-btn-back iub-btn-stroked iub-desktop purposes-btn purposes-btn-back purposes-btn-stroked purposes-desktop" aria-label="' + Lt("modal.back") + '">' + gn + '</button>      <button class="iub-btn iub-btn-back iub-btn-stroked iub-mobile purposes-btn purposes-btn-back purposes-btn-stroked purposes-mobile" aria-label="' + Lt("modal.back") + '">' + gn + "</button>", c = a ? '<svg xmlns="http://www.w3.org/2000/svg" width="181" height="40" viewBox="0 0 181 40"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M51.498 17.28c.872 0 1.533.194 1.982.581.449.394.673.916.673 1.568 0 .645-.224 1.168-.673 1.568-.443.393-1.103.59-1.982.59h-1.57v2.43H49V17.28h2.498zm-.126 3.485c.624 0 1.086-.117 1.386-.349.299-.232.448-.561.448-.987 0-.42-.15-.745-.448-.977-.3-.233-.762-.349-1.386-.349h-1.445v2.662h1.445zm6.012 3.387c-.475 0-.892-.11-1.25-.33a2.323 2.323 0 0 1-.849-.919 2.912 2.912 0 0 1-.312-1.364c0-.51.104-.965.312-1.365.202-.387.485-.693.85-.92.357-.219.774-.328 1.249-.328.481 0 .9.11 1.259.329.364.226.647.532.849.92.201.393.302.848.302 1.364 0 .516-.1.97-.302 1.364a2.323 2.323 0 0 1-.85.92c-.357.219-.777.329-1.258.329zm0-.794c.455 0 .823-.168 1.102-.503.28-.323.42-.761.42-1.316 0-.562-.14-1.004-.42-1.326a1.395 1.395 0 0 0-1.102-.494c-.443 0-.807.165-1.093.494-.287.335-.43.777-.43 1.326 0 .542.143.98.43 1.316.28.335.644.503 1.093.503zm3.904-4.297l1.151 3.755 1.084-3.735h.79l1.122 3.745 1.133-3.765h.888l-1.62 4.955h-.8l-1.113-3.706-1.123 3.706H62l-1.61-4.955h.898zm9.174 5.09c-.488 0-.914-.106-1.279-.319-.37-.22-.65-.522-.84-.91-.194-.4-.292-.864-.292-1.393 0-.503.098-.952.293-1.345.189-.394.462-.7.82-.92.358-.225.78-.338 1.268-.338.475 0 .876.103 1.2.31.333.219.58.51.743.87.169.388.253.823.253 1.307v.406h-3.68c.053.516.206.9.46 1.152.266.27.621.406 1.063.406.3 0 .55-.051.752-.154.202-.097.335-.226.4-.388h.898a1.715 1.715 0 0 1-.732.959c-.364.238-.807.358-1.327.358zm-.04-4.451c-.41 0-.738.123-.985.368-.254.251-.41.597-.469 1.035h2.782c-.02-.42-.137-.758-.351-1.016-.222-.258-.547-.387-.976-.387zm3.378 4.316v-4.955h.849v.88c.156-.283.36-.509.615-.676.253-.155.536-.233.849-.233h.156v.833h-.176a1.33 1.33 0 0 0-1.22.735c-.137.239-.205.542-.205.91v2.506H73.8zm5.563.136c-.488 0-.915-.107-1.279-.32-.37-.22-.65-.522-.84-.91-.194-.4-.292-.864-.292-1.393 0-.503.098-.952.293-1.345.188-.394.462-.7.82-.92.357-.225.78-.338 1.268-.338.475 0 .875.103 1.2.31.333.219.58.51.743.87.169.388.253.823.253 1.307v.406h-3.68c.053.516.206.9.46 1.152.266.27.62.406 1.063.406.3 0 .55-.051.752-.154.202-.097.335-.226.4-.388h.898a1.715 1.715 0 0 1-.732.959c-.364.238-.807.358-1.327.358zm-.04-4.452c-.41 0-.738.123-.985.368-.254.251-.41.597-.469 1.035h2.782c-.02-.42-.137-.758-.351-1.016-.222-.258-.547-.387-.976-.387zm5.3 4.452c-.442 0-.83-.113-1.161-.34a2.187 2.187 0 0 1-.79-.918 3.179 3.179 0 0 1-.284-1.355 3.2 3.2 0 0 1 .283-1.365 2.2 2.2 0 0 1 .79-.92c.34-.219.726-.328 1.162-.328.358 0 .677.08.957.242.28.161.507.384.683.667V17h.868v7.016h-.849v-.803c-.182.297-.41.526-.683.687a1.894 1.894 0 0 1-.976.252zm.156-.794c.456 0 .823-.168 1.103-.503.28-.336.42-.774.42-1.316s-.14-.98-.42-1.316c-.28-.336-.647-.504-1.103-.504-.436 0-.797.165-1.083.494-.28.335-.42.777-.42 1.326 0 .555.14.993.42 1.316.28.335.64.503 1.083.503zM91.738 17v2.835a1.93 1.93 0 0 1 .683-.667 1.88 1.88 0 0 1 .957-.242c.442 0 .832.11 1.17.329.333.226.593.532.782.92.188.406.283.86.283 1.364 0 .496-.095.948-.283 1.355a2.212 2.212 0 0 1-.781.919c-.332.226-.722.339-1.171.339a1.89 1.89 0 0 1-.976-.252 1.983 1.983 0 0 1-.684-.687v.803h-.849V17h.869zm1.483 6.358c.443 0 .804-.168 1.084-.503.28-.323.42-.761.42-1.316 0-.549-.14-.99-.42-1.326a1.375 1.375 0 0 0-1.084-.494c-.448 0-.813.168-1.093.504-.286.342-.43.78-.43 1.316 0 .535.144.974.43 1.316.28.335.645.503 1.093.503zm2.938-4.297h.986L98.609 23l1.444-3.939H101L98.238 26h-.927l.83-1.984-1.982-4.955z"/><path d="M111.5 10c2.486 0 4.5 1.977 4.5 4.418 0 1.087-.4 2.081-1.064 2.851L115.89 30h-8.543l.926-12.508A4.35 4.35 0 0 1 107 14.418c0-2.441 2.014-4.418 4.5-4.418zm.854 9.268l-1.48 1.484v5.745h1.48v-7.229zm-.854-5.991c-.598 0-1.082.48-1.082 1.073s.484 1.074 1.082 1.074c.598 0 1.082-.48 1.082-1.074 0-.593-.484-1.073-1.082-1.073zm20.776 1.785a.32.32 0 0 1 .31.25l.008.075-.002 3.857c.645-.904 1.342-1.355 2.09-1.355.684 0 1.281.294 1.791.882.51.589.765 1.393.765 2.413 0 1.192-.394 2.151-1.18 2.879-.675.625-1.427.937-2.258.937-.388 0-.782-.07-1.183-.212a5.217 5.217 0 0 1-1.046-.519.392.392 0 0 1-.181-.332l-.001-7.805c0-.071 0-.383-.191-.479l-.035-.015-.041-.012a.119.119 0 0 1-.089-.115l-.002-.33a.12.12 0 0 1 .116-.12h1.129zM156.333 15c.17 0 .308.14.308.314v8.298c0 .07 0 .374.184.467.02.01.045.02.074.027.052.013.088.06.088.115l.002.316c0 .066-.051.12-.116.12h-1.087a.31.31 0 0 1-.308-.313v-.308c-.318.345-.627.59-.928.74-.302.15-.627.224-.976.224-.706 0-1.324-.307-1.851-.922-.528-.615-.792-1.404-.792-2.369 0-.965.292-1.848.877-2.648.584-.801 1.335-1.201 2.254-1.201.57 0 1.041.188 1.413.565v-2.352c0-.071 0-.383-.184-.48a.368.368 0 0 0-.065-.025.119.119 0 0 1-.084-.114l-.002-.334c0-.066.052-.12.116-.12h1.077zm-15.347 2.857c.792 0 1.396.276 1.795.82.373.507.561 1.233.561 2.158l-.005.2-.015.268a.235.235 0 0 1-.233.222h-4.06a.067.067 0 0 0-.067.07c.014.759.251 1.401.685 1.856.427.448 1.013.684 1.693.684.508 0 1.173-.136 1.687-.295a.136.136 0 0 1 .171.093.15.15 0 0 1 .002.076l-.07.27a.349.349 0 0 1-.182.227c-.507.252-1.267.494-2.047.494-.948 0-1.762-.235-2.32-.882-.528-.61-.802-1.586-.802-2.554 0-1.022.312-1.956.877-2.632.59-.703 1.395-1.075 2.33-1.075zm-15.437.246c.183 0 .331.15.331.337v3.926c0 .653.11 1.08.334 1.285.224.204.494.306.81.306.217 0 .462-.07.736-.207.273-.137.728-.4 1.105-.786l.005-3.749c0-.074 0-.397-.196-.497a.515.515 0 0 0-.156-.036.118.118 0 0 1-.103-.118l-.002-.342a.12.12 0 0 1 .07-.11l.046-.01h1.252c.18 0 .327.15.327.334v4.978h-.001l.003.275c.007.136.039.355.186.43.03.015.082.027.157.036a.118.118 0 0 1 .104.117l.002.343c0 .066-.052.12-.116.12h-1.256a.329.329 0 0 1-.318-.257l-.01-.077.004-.984c-.592.65-1.173 1.06-1.484 1.228a2.05 2.05 0 0 1-.987.252c-.387 0-.723-.113-1.007-.34a1.76 1.76 0 0 1-.592-.876c-.11-.357-.165-.861-.165-1.514v-2.952c0-.074 0-.397-.198-.497a.353.353 0 0 0-.092-.026l-.07-.01a.118.118 0 0 1-.103-.118l-.002-.342a.12.12 0 0 1 .07-.11l.046-.01h1.27zm35.187-.23c1.079.074 1.507.51 1.726 1.18l.073.25c.051.183.097.392.097.933l-.002 2.594c0 .09 0 .179-.002.266l.003.535c.014.203.077.333.187.39l.04.015.048.014c.053.011.092.06.092.115l.002.331c0 .066-.052.12-.116.12h-1.137a.32.32 0 0 1-.317-.323v-.631l-.466.363c-.418.32-.693.513-.824.576a1.932 1.932 0 0 1-.838.187c-.46 0-.841-.162-1.14-.485-.298-.323-.448-.748-.448-1.275 0-.333.073-.622.219-.866.199-.338.498-.724 1.038-.954.54-.23 1.002-.283 2.458-.62v-.601c-.005-.638-.106-1.289-1.143-1.225a3.85 3.85 0 0 0-1.774.553l-.232.15a.115.115 0 0 1-.162-.031.12.12 0 0 1-.02-.067v-.39c0-.205.039-.34.116-.403.429-.352 1.488-.772 2.522-.701zm-38.446.222c.231 0 .419.193.419.43v5.296c0 .11.049.212.13.279l.066.043a.36.36 0 0 1 .197.322v.095a.2.2 0 0 1-.197.202h-1.71a.197.197 0 0 1-.195-.2v-.1a.36.36 0 0 1 .129-.276l.066-.043a.357.357 0 0 0 .194-.32v-5.012a.13.13 0 0 0-.086-.123l-.04-.006a.128.128 0 0 1-.126-.13v-.164a.29.29 0 0 1 .285-.293h.868zm25.995-.146c.363 0 .675.09.937.27.261.18.47.477.624.89.094.252.146.622.158 1.11l.002.216.002 3.252c.003.113.027.356.19.439l.044.016.058.013.04.013a.119.119 0 0 1 .052.062l.007.042.002.328-.008.046a.117.117 0 0 1-.106.074l-.28.003h-.884a.314.314 0 0 1-.046-.003l-.43-.002a.274.274 0 0 1-.269-.28c0-.118.062-.225.158-.284l.085-.04c.135-.07.173-.25.184-.376v-1.046h.003V20.55c0-.6-.079-1.036-.236-1.308-.158-.271-.423-.407-.796-.407-.524 0-1.252.258-1.81.774l-.161.163v3.855c0 .073 0 .39.19.488l.023.01c.13.046.219.172.22.314a.274.274 0 0 1-.269.279h-1.682a.117.117 0 0 1-.107-.074l-.01-.046.003-.325a.12.12 0 0 1 .062-.104l.04-.013.06-.01a.322.322 0 0 0 .082-.024c.162-.083.185-.325.189-.437v-2.883l.01-.772-.002-.877c0-.071 0-.382-.188-.478l-.072-.026-.035-.016a.119.119 0 0 1-.045-.06l-.006-.039-.003-.33a.12.12 0 0 1 .071-.11l.045-.01h1.109c.149 0 .274.106.306.248l.009.074v.734c0 .043.034.078.076.078l.031-.007.03-.023c.732-.828 1.678-1.24 2.343-1.24zm-14.179.98a1.68 1.68 0 0 0-.772.198c-.17.085-.382.246-.635.482a.342.342 0 0 0-.107.25v3.718c0 .098.04.19.112.255.212.192.431.34.656.447.264.124.535.186.812.186.442 0 .853-.244 1.234-.732s.572-1.199.572-2.131c0-.86-.19-1.52-.572-1.981-.38-.461-.814-.692-1.3-.692zm19.871-.23c-.414 0-.792.182-1.13.536-.373.39-.622.914-.622 1.894 0 .989.207 1.747.621 2.273.415.527.877.79 1.385.79.364 0 .717-.16 1.06-.48a.584.584 0 0 0 .184-.427v-2.923c0-.597-.31-1.15-.816-1.453a1.32 1.32 0 0 0-.682-.21zm7.452 4.236V21.1l-.723.154c-.41.09-.675.151-.795.187l-.039.012c-.502.171-.901.367-.934 1.224-.014.358.105.655.313.891.21.237.45.355.722.355.337 0 .772-.26 1.305-.677a.395.395 0 0 0 .151-.311zm-20.709-4.192c-1.015 0-1.69 1.022-1.803 1.902a.06.06 0 0 0 .018.049.07.07 0 0 0 .05.02h3.26a.067.067 0 0 0 .067-.058l.015-.196c.013-.36-.048-.872-.47-1.319-.252-.264-.555-.398-1.137-.398zm-18.669-3.624c.452 0 .817.373.817.833 0 .46-.365.834-.817.834a.826.826 0 0 1-.817-.834c0-.46.366-.833.817-.833zM18 11a4 4 0 0 1 2.627 7.016L21.5 29h-7l.873-10.984A4 4 0 0 1 18 11z"/></g></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="181" height="40" viewBox="0 0 181 40"><g fill="none" fill-rule="evenodd"><path fill="#737373" fill-rule="nonzero" d="M51.498 17.28c.872 0 1.533.194 1.982.581.449.394.673.916.673 1.568 0 .645-.224 1.168-.673 1.568-.443.393-1.103.59-1.982.59h-1.57v2.43H49V17.28h2.498zm-.126 3.485c.624 0 1.086-.117 1.386-.349.299-.232.448-.561.448-.987 0-.42-.15-.745-.448-.977-.3-.233-.762-.349-1.386-.349h-1.445v2.662h1.445zm6.012 3.387c-.475 0-.892-.11-1.25-.33a2.323 2.323 0 0 1-.849-.919 2.912 2.912 0 0 1-.312-1.364c0-.51.104-.965.312-1.365.202-.387.485-.693.85-.92.357-.219.774-.328 1.249-.328.481 0 .9.11 1.259.329.364.226.647.532.849.92.201.393.302.848.302 1.364 0 .516-.1.97-.302 1.364a2.323 2.323 0 0 1-.85.92c-.357.219-.777.329-1.258.329zm0-.794c.455 0 .823-.168 1.102-.503.28-.323.42-.761.42-1.316 0-.562-.14-1.004-.42-1.326a1.395 1.395 0 0 0-1.102-.494c-.443 0-.807.165-1.093.494-.287.335-.43.777-.43 1.326 0 .542.143.98.43 1.316.28.335.644.503 1.093.503zm3.904-4.297l1.151 3.755 1.084-3.735h.79l1.122 3.745 1.133-3.765h.888l-1.62 4.955h-.8l-1.113-3.706-1.123 3.706H62l-1.61-4.955h.898zm9.174 5.09c-.488 0-.914-.106-1.279-.319-.37-.22-.65-.522-.84-.91-.194-.4-.292-.864-.292-1.393 0-.503.098-.952.293-1.345.189-.394.462-.7.82-.92.358-.225.78-.338 1.268-.338.475 0 .876.103 1.2.31.333.219.58.51.743.87.169.388.253.823.253 1.307v.406h-3.68c.053.516.206.9.46 1.152.266.27.621.406 1.063.406.3 0 .55-.051.752-.154.202-.097.335-.226.4-.388h.898a1.715 1.715 0 0 1-.732.959c-.364.238-.807.358-1.327.358zm-.04-4.451c-.41 0-.738.123-.985.368-.254.251-.41.597-.469 1.035h2.782c-.02-.42-.137-.758-.351-1.016-.222-.258-.547-.387-.976-.387zm3.378 4.316v-4.955h.849v.88c.156-.283.36-.509.615-.676.253-.155.536-.233.849-.233h.156v.833h-.176a1.33 1.33 0 0 0-1.22.735c-.137.239-.205.542-.205.91v2.506H73.8zm5.563.136c-.488 0-.915-.107-1.279-.32-.37-.22-.65-.522-.84-.91-.194-.4-.292-.864-.292-1.393 0-.503.098-.952.293-1.345.188-.394.462-.7.82-.92.357-.225.78-.338 1.268-.338.475 0 .875.103 1.2.31.333.219.58.51.743.87.169.388.253.823.253 1.307v.406h-3.68c.053.516.206.9.46 1.152.266.27.62.406 1.063.406.3 0 .55-.051.752-.154.202-.097.335-.226.4-.388h.898a1.715 1.715 0 0 1-.732.959c-.364.238-.807.358-1.327.358zm-.04-4.452c-.41 0-.738.123-.985.368-.254.251-.41.597-.469 1.035h2.782c-.02-.42-.137-.758-.351-1.016-.222-.258-.547-.387-.976-.387zm5.3 4.452c-.442 0-.83-.113-1.161-.34a2.187 2.187 0 0 1-.79-.918 3.179 3.179 0 0 1-.284-1.355 3.2 3.2 0 0 1 .283-1.365 2.2 2.2 0 0 1 .79-.92c.34-.219.726-.328 1.162-.328.358 0 .677.08.957.242.28.161.507.384.683.667V17h.868v7.016h-.849v-.803c-.182.297-.41.526-.683.687a1.894 1.894 0 0 1-.976.252zm.156-.794c.456 0 .823-.168 1.103-.503.28-.336.42-.774.42-1.316s-.14-.98-.42-1.316c-.28-.336-.647-.504-1.103-.504-.436 0-.797.165-1.083.494-.28.335-.42.777-.42 1.326 0 .555.14.993.42 1.316.28.335.64.503 1.083.503zM91.738 17v2.835a1.93 1.93 0 0 1 .683-.667 1.88 1.88 0 0 1 .957-.242c.442 0 .832.11 1.17.329.333.226.593.532.782.92.188.406.283.86.283 1.364 0 .496-.095.948-.283 1.355a2.212 2.212 0 0 1-.781.919c-.332.226-.722.339-1.171.339a1.89 1.89 0 0 1-.976-.252 1.983 1.983 0 0 1-.684-.687v.803h-.849V17h.869zm1.483 6.358c.443 0 .804-.168 1.084-.503.28-.323.42-.761.42-1.316 0-.549-.14-.99-.42-1.326a1.375 1.375 0 0 0-1.084-.494c-.448 0-.813.168-1.093.504-.286.342-.43.78-.43 1.316 0 .535.144.974.43 1.316.28.335.645.503 1.093.503zm2.938-4.297h.986L98.609 23l1.444-3.939H101L98.238 26h-.927l.83-1.984-1.982-4.955z"/><path fill="#1CC691" d="M111.5 10c2.486 0 4.5 1.977 4.5 4.418 0 1.087-.4 2.081-1.064 2.851L115.89 30h-8.543l.926-12.508A4.35 4.35 0 0 1 107 14.418c0-2.441 2.014-4.418 4.5-4.418zm.854 9.268l-1.48 1.484v5.745h1.48v-7.229zm-.854-5.991c-.598 0-1.082.48-1.082 1.073s.484 1.074 1.082 1.074c.598 0 1.082-.48 1.082-1.074 0-.593-.484-1.073-1.082-1.073z"/><path fill="#636363" d="M132.276 15.062a.32.32 0 0 1 .31.25l.008.075-.002 3.857c.645-.904 1.342-1.355 2.09-1.355.684 0 1.281.294 1.791.882.51.589.765 1.393.765 2.413 0 1.192-.394 2.151-1.18 2.879-.675.625-1.427.937-2.258.937-.388 0-.782-.07-1.183-.212a5.217 5.217 0 0 1-1.046-.519.392.392 0 0 1-.181-.332l-.001-7.805c0-.071 0-.383-.191-.479l-.035-.015-.041-.012a.119.119 0 0 1-.089-.115l-.002-.33a.12.12 0 0 1 .116-.12h1.129zM156.333 15c.17 0 .308.14.308.314v8.298c0 .07 0 .374.184.467.02.01.045.02.074.027.052.013.088.06.088.115l.002.316c0 .066-.051.12-.116.12h-1.087a.31.31 0 0 1-.308-.313v-.308c-.318.345-.627.59-.928.74-.302.15-.627.224-.976.224-.706 0-1.324-.307-1.851-.922-.528-.615-.792-1.404-.792-2.369 0-.965.292-1.848.877-2.648.584-.801 1.335-1.201 2.254-1.201.57 0 1.041.188 1.413.565v-2.352c0-.071 0-.383-.184-.48a.368.368 0 0 0-.065-.025.119.119 0 0 1-.084-.114l-.002-.334c0-.066.052-.12.116-.12h1.077zm-15.347 2.857c.792 0 1.396.276 1.795.82.373.507.561 1.233.561 2.158l-.005.2-.015.268a.235.235 0 0 1-.233.222h-4.06a.067.067 0 0 0-.067.07c.014.759.251 1.401.685 1.856.427.448 1.013.684 1.693.684.508 0 1.173-.136 1.687-.295a.136.136 0 0 1 .171.093.15.15 0 0 1 .002.076l-.07.27a.349.349 0 0 1-.182.227c-.507.252-1.267.494-2.047.494-.948 0-1.762-.235-2.32-.882-.528-.61-.802-1.586-.802-2.554 0-1.022.312-1.956.877-2.632.59-.703 1.395-1.075 2.33-1.075zm-15.437.246c.183 0 .331.15.331.337v3.926c0 .653.11 1.08.334 1.285.224.204.494.306.81.306.217 0 .462-.07.736-.207.273-.137.728-.4 1.105-.786l.005-3.749c0-.074 0-.397-.196-.497a.515.515 0 0 0-.156-.036.118.118 0 0 1-.103-.118l-.002-.342a.12.12 0 0 1 .07-.11l.046-.01h1.252c.18 0 .327.15.327.334v4.978h-.001l.003.275c.007.136.039.355.186.43.03.015.082.027.157.036a.118.118 0 0 1 .104.117l.002.343c0 .066-.052.12-.116.12h-1.256a.329.329 0 0 1-.318-.257l-.01-.077.004-.984c-.592.65-1.173 1.06-1.484 1.228a2.05 2.05 0 0 1-.987.252c-.387 0-.723-.113-1.007-.34a1.76 1.76 0 0 1-.592-.876c-.11-.357-.165-.861-.165-1.514v-2.952c0-.074 0-.397-.198-.497a.353.353 0 0 0-.092-.026l-.07-.01a.118.118 0 0 1-.103-.118l-.002-.342a.12.12 0 0 1 .07-.11l.046-.01h1.27zm35.187-.23c1.079.074 1.507.51 1.726 1.18l.073.25c.051.183.097.392.097.933l-.002 2.594c0 .09 0 .179-.002.266l.003.535c.014.203.077.333.187.39l.04.015.048.014c.053.011.092.06.092.115l.002.331c0 .066-.052.12-.116.12h-1.137a.32.32 0 0 1-.317-.323v-.631l-.466.363c-.418.32-.693.513-.824.576a1.932 1.932 0 0 1-.838.187c-.46 0-.841-.162-1.14-.485-.298-.323-.448-.748-.448-1.275 0-.333.073-.622.219-.866.199-.338.498-.724 1.038-.954.54-.23 1.002-.283 2.458-.62v-.601c-.005-.638-.106-1.289-1.143-1.225a3.85 3.85 0 0 0-1.774.553l-.232.15a.115.115 0 0 1-.162-.031.12.12 0 0 1-.02-.067v-.39c0-.205.039-.34.116-.403.429-.352 1.488-.772 2.522-.701zm-38.446.222c.231 0 .419.193.419.43v5.296c0 .11.049.212.13.279l.066.043a.36.36 0 0 1 .197.322v.095a.2.2 0 0 1-.197.202h-1.71a.197.197 0 0 1-.195-.2v-.1a.36.36 0 0 1 .129-.276l.066-.043a.357.357 0 0 0 .194-.32v-5.012a.13.13 0 0 0-.086-.123l-.04-.006a.128.128 0 0 1-.126-.13v-.164a.29.29 0 0 1 .285-.293h.868zm25.995-.146c.363 0 .675.09.937.27.261.18.47.477.624.89.094.252.146.622.158 1.11l.002.216.002 3.252c.003.113.027.356.19.439l.044.016.058.013.04.013a.119.119 0 0 1 .052.062l.007.042.002.328-.008.046a.117.117 0 0 1-.106.074l-.28.003h-.884a.314.314 0 0 1-.046-.003l-.43-.002a.274.274 0 0 1-.269-.28c0-.118.062-.225.158-.284l.085-.04c.135-.07.173-.25.184-.376v-1.046h.003V20.55c0-.6-.079-1.036-.236-1.308-.158-.271-.423-.407-.796-.407-.524 0-1.252.258-1.81.774l-.161.163v3.855c0 .073 0 .39.19.488l.023.01c.13.046.219.172.22.314a.274.274 0 0 1-.269.279h-1.682a.117.117 0 0 1-.107-.074l-.01-.046.003-.325a.12.12 0 0 1 .062-.104l.04-.013.06-.01a.322.322 0 0 0 .082-.024c.162-.083.185-.325.189-.437v-2.883l.01-.772-.002-.877c0-.071 0-.382-.188-.478l-.072-.026-.035-.016a.119.119 0 0 1-.045-.06l-.006-.039-.003-.33a.12.12 0 0 1 .071-.11l.045-.01h1.109c.149 0 .274.106.306.248l.009.074v.734c0 .043.034.078.076.078l.031-.007.03-.023c.732-.828 1.678-1.24 2.343-1.24zm-14.179.98a1.68 1.68 0 0 0-.772.198c-.17.085-.382.246-.635.482a.342.342 0 0 0-.107.25v3.718c0 .098.04.19.112.255.212.192.431.34.656.447.264.124.535.186.812.186.442 0 .853-.244 1.234-.732s.572-1.199.572-2.131c0-.86-.19-1.52-.572-1.981-.38-.461-.814-.692-1.3-.692zm19.871-.23c-.414 0-.792.182-1.13.536-.373.39-.622.914-.622 1.894 0 .989.207 1.747.621 2.273.415.527.877.79 1.385.79.364 0 .717-.16 1.06-.48a.584.584 0 0 0 .184-.427v-2.923c0-.597-.31-1.15-.816-1.453a1.32 1.32 0 0 0-.682-.21zm7.452 4.236V21.1l-.723.154c-.41.09-.675.151-.795.187l-.039.012c-.502.171-.901.367-.934 1.224-.014.358.105.655.313.891.21.237.45.355.722.355.337 0 .772-.26 1.305-.677a.395.395 0 0 0 .151-.311zm-20.709-4.192c-1.015 0-1.69 1.022-1.803 1.902a.06.06 0 0 0 .018.049.07.07 0 0 0 .05.02h3.26a.067.067 0 0 0 .067-.058l.015-.196c.013-.36-.048-.872-.47-1.319-.252-.264-.555-.398-1.137-.398zm-18.669-3.624c.452 0 .817.373.817.833 0 .46-.365.834-.817.834a.826.826 0 0 1-.817-.834c0-.46.366-.833.817-.833z"/><path fill="#1CC691" d="M18 11a4 4 0 0 1 2.627 7.016L21.5 29h-7l.873-10.984A4 4 0 0 1 18 11z"/></g></svg>', l = _iub.cs.options.whitelabel ? "" : '<a class="iub-iframe-brand-button" href="' + this.brandLink + '" target="_blank" rel="noopener" aria-label="iubenda brand" title="' + this.brandLinkTitle + '">' + c + "</a>";
                i.innerHTML = '<div class="purposes-header"><div class="purposes-header-left">' + r + s + '</div><div class="purposes-header-right">' + l + (t = o.hasCookiePolicy,
                n = o.usprApplies,
                (t ? '<button class="iub-btn iub-btn-cp iub-desktop purposes-btn purposes-btn-cp purposes-desktop"><span>' + Lt(n ? "modal.see_full_privacy_policy" : "modal.see_full_cookie_policy") + '</span></button><button class="iub-btn iub-btn-cp iub-mobile purposes-btn purposes-btn-cp purposes-mobile"><span>' + Lt(n ? "modal.privacy_policy" : "modal.cookie_policy") + "</span></button>" : "") + "</div></div>"),
                i.id = "purposes-container",
                i.className = "iubenda-modal-navigation",
                a ? (i.classList.add("iubenda-modal-navigation-brand"),
                i.setAttribute("style", "border-radius: 4px 4px 0 0 !important;")) : i.setAttribute("style", "background-color: #FFF !important; border-radius: 4px 4px 0 0 !important;");
                for (var p = i.getElementsByClassName("purposes-btn-back"), u = 0; u < p.length; ++u)
                    Ae(p[u], "click", this.onBackButtonClicked);
                for (var d = i.getElementsByClassName("purposes-btn-cp"), h = 0; h < d.length; ++h)
                    d[h].addEventListener("click", (function(t) {
                        t.stopPropagation(),
                        _iub.cs.options.usprApplies ? _iub.cs.options.cookiePolicyInOtherWindow ? _iub.cs.ui.showPPCcpaSection(_iub.cs.options.cookiePolicyInOtherWindow) : e.showView(un) : _iub.cs.options.cookiePolicyInOtherWindow ? _iub.cs.ui.showCP(!0) : e.showView(pn)
                    }
                    ));
                var f = ce("iub-iframe-brand-button", i)[0];
                return f && (this.isMobile ? this.handleIubendaLinkForMobile(f) : (Ae(f, "mouseover", (function() {
                    we(f, "hover")
                }
                )),
                Ae(f, "mouseout", (function() {
                    Ce(f, "hover")
                }
                )))),
                i.addEventListener("click", (function(e) {
                    e.stopPropagation()
                }
                )),
                this.navigationBar = i,
                this.navigationBar
            }
        }, {
            key: "waitForVendorlist",
            value: function(e) {
                vn(_iub.cs) ? this.cmpWidget.getVendorList(e) : e()
            }
        }, {
            key: "showHideLogoBackButton",
            value: function(e) {
                var t = "cookie-policy-no-logo";
                _iub.cs.options.banner.logo && e !== pn && e !== un ? Ce(this.iPPC, t) : xe(this.iPPC, t) || we(this.iPPC, t)
            }
        }, {
            key: "showHideBackButton",
            value: function(e, t) {
                for (var n, i = !((null === (n = _iub.cs.ui.banner) || void 0 === n ? void 0 : n.getBanner()) || e === pn || e === dn || !1 !== t && this.currentView || this.viewsHistory.length), o = Array.prototype.slice.apply(document.getElementsByClassName("purposes-btn-back")).concat(document.getElementById("iubBackBtn") || []), a = 0; a < o.length; ++a) {
                    var r = o[a];
                    i ? r.style.setProperty("display", "none", "important") : r.style.removeProperty("display")
                }
            }
        }, {
            key: "createPolicyIframe",
            value: function(e) {
                var t = this;
                this.setSizeAndPosition();
                var n = e;
                /\#[^\?]+/.test(n) || (n = Gt(n, "ifr", "true")),
                n = Gt(n, "height", this.iFrH),
                !0 === this.showCcpa && (n += "#donotsell");
                var i = this.iFr = mn.createPolicyIframe(this.mainDoc, n, this.frameTitle);
                Ae(i, "load", (function() {
                    t.iframeLoadCounter++,
                    t.removeSpinner(),
                    t.contentLoadedCallback()
                }
                )),
                this.iframeContainer.insertAdjacentElement("afterbegin", i)
            }
        }, {
            key: "resetStyles",
            value: function() {
                this.footer && (this.footer.className = "iubenda-iframe-footer iubenda-iframe-footer-absolute",
                this.footer.style.display = ""),
                this.footerBtn && (this.footerAcceptBtnCaption = this.footerBtn.innerText,
                this.footerBtn.innerText = this.footerBtnCaption,
                !_iub.cs.options.perPurposeConsent && _iub.cs.options.banner.acceptButtonColor && (this.footerBtn.style.setProperty("background-color", "", "important"),
                this.footerBtn.style.setProperty("color", "", "important"))),
                this.footerRejectBtn && (this.footerRejectBtn.style.display = "none"),
                this.mainContainer.className = "iubenda-iframe-top-container bottom-border-radius",
                window.document.getElementsByClassName("purposes-btn-back")[0].innerHTML = gn
            }
        }, {
            key: "setPolicyIframeConfig",
            value: function() {
                var e = _iub.cs.options
                  , t = _iub.cs.options.banner;
                this.iFr.style.display = "block",
                this.footer && (this.footer.className = "iubenda-iframe-footer",
                e.perPurposeConsent && (this.footer.style.display = "none")),
                this.footerBtn && (this.footerBtn.innerText = this.acceptCaption,
                !e.perPurposeConsent && t.acceptButtonColor && this.footerBtn.style.setProperty("background-color", t.acceptButtonColor, "important"),
                !e.perPurposeConsent && t.acceptButtonCaptionColor && this.footerBtn.style.setProperty("color", t.acceptButtonCaptionColor, "important")),
                this.footerRejectBtn && (this.footerRejectBtn.style.display = ""),
                this.navigationBar && (this.navigationBar.getElementsByClassName("purposes-btn-back")[0].innerHTML = gn + Lt("modal.back")),
                this.mainContainer.className = "iubenda-iframe-top-container bottom-border-radius",
                this.hideNavigationBarCookiePolicyButton()
            }
        }, {
            key: "showView",
            value: function(e, t, n) {
                var i = this;
                if (this.currentView !== e) {
                    switch (null !== this.currentView ? this.hideView(this.currentView) : gt("#iubenda-iframe"),
                    this.showHideLogoBackButton(e),
                    this.showHideBackButton(e, t),
                    _iub.cs.setCurrentView(e),
                    e) {
                    case un:
                        this.createPolicyIframe(_iub.cs.options.privacyPolicyUrl),
                        this.mainC && this.spinner && !this.spinner.parentNode && this.mainC.appendChild(this.spinner),
                        this.setPolicyIframeConfig();
                        break;
                    case pn:
                        this.iFr || (this.createPolicyIframe(this.iFrUrl),
                        this.mainC && this.spinner && !this.spinner.parentNode && this.mainC.appendChild(this.spinner)),
                        this.setPolicyIframeConfig();
                        break;
                    case dn:
                        _iub.cs.updateTcfApi(!0),
                        this.perPurposeWidget.show(),
                        this.waitForVendorlist((function() {
                            i.cmpWidget && i.cmpWidget.setDisplayed(!0),
                            i.updatePerPurposeWidget(!1, n),
                            i.removeSpinner(),
                            i.contentLoadedCallback()
                        }
                        ));
                        break;
                    case hn:
                        _iub.cs.updateTcfApi(!0),
                        this.cmpWidget.setDisplayed(!0),
                        this.iabContainer.style.display = "flex";
                        break;
                    case fn:
                        this.hideNavigationBarCookiePolicyButton(),
                        this.cmpWidget.acBuildUi(!0),
                        this.iabContainer.style.display = "flex"
                    }
                    !1 !== t && this.currentView && this.viewsHistory.push(this.currentView),
                    this.currentView = e
                }
            }
        }, {
            key: "isInTcfView",
            value: function() {
                return this.currentView === hn
            }
        }, {
            key: "updatePerPurposeWidget",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (vn(_iub.cs)) {
                    var n = _iub.cs.options
                      , i = this.perPurposeWidget.adsSection
                      , o = this.hasCMPApprovedAll()
                      , a = this.hasCMPDisapprovedAll();
                    i.tcfOptionNode.checked = !a;
                    var r = o || a ? Ce : we;
                    r(i.tcfOptionNode, "half");
                    var s = n.googleAdditionalConsentMode;
                    if (s) {
                        var c = this.cmpWidget.acAreAllAllowed()
                          , l = this.cmpWidget.acAreAllDisallowed()
                          , p = c || l ? Ce : we;
                        i.googleAdditionalConsentOptionNode.checked = !l,
                        p(i.googleAdditionalConsentOptionNode, "half"),
                        o = o && c,
                        a = a && l
                    }
                    var u = i.genericAdsOption
                      , d = i.tcfGoogleOption
                      , h = i.googleAdditionalConsentOptionNode
                      , f = u ? u.checked : null
                      , b = d ? d.checked : null
                      , m = s && h ? h.checked : null;
                    o = o && !1 !== f && !1 !== b && !1 !== m,
                    (a = a && !f && !b && !m) || o ? (t && i.setMktPreferenceState(o),
                    i.unsetMiddlePrimaryOption(),
                    this.setPrimaryOptionNodeFast(e, o)) : (t && i.setMktPreferenceState("partial"),
                    i.setMiddlePrimaryOption(),
                    this.setPrimaryOptionNodeFast(e, !0))
                }
            }
        }, {
            key: "setPrimaryOptionNodeFast",
            value: function(e, t) {
                var n = this.perPurposeWidget.adsSection.primaryOptionNode;
                e ? (n.style.setProperty("transition", "none 0s", "important"),
                n.checked = t,
                n.offsetHeight,
                n.style.removeProperty("transition")) : n.checked = t
            }
        }, {
            key: "showPreviousView",
            value: function() {
                var e = this.viewsHistory.pop();
                e ? this.showView(e, !1, !0) : (_iub.cs.options.banner.showPurposesToggles || (_iub.cs.purposesPreference.goBackToSavedState(),
                this.goBackToSavedState()),
                this.closeIFrame(!1, "back"))
            }
        }, {
            key: "goBackToSavedState",
            value: function() {
                if (vn(_iub.cs) && !this.showCcpa) {
                    var e = _iub.cs.ui.cmpWidget;
                    e.purposesListView.goBackToSavedState(),
                    e.specialFeaturesListView.goBackToSavedState(),
                    e.goBackToSavedVendorsState(),
                    e.goBackToSavedAcState()
                }
                this.currentView === dn && _iub.cs.ui.CPiFrame.updatePerPurposeWidget()
            }
        }, {
            key: "hideView",
            value: function(e) {
                switch (e) {
                case un:
                case pn:
                    this.iframeLoadCounter > 1 && (this.iframeLoadCounter = 0,
                    this.iFr.setAttribute("src", this.iFr.getAttribute("src"))),
                    this.iFr.style.display = "none",
                    this.resetStyles(),
                    this.showNavigationBarCookiePolicyButton(),
                    de(this.iFr),
                    this.iFr = null;
                    break;
                case dn:
                    this.perPurposeWidget.hide();
                    break;
                case hn:
                    this.iabContainer.style.display = "none";
                    break;
                case fn:
                    this.cmpWidget.acHide(),
                    this.iabContainer.style.display = "none",
                    this.showNavigationBarCookiePolicyButton()
                }
            }
        }, {
            key: "createPerPurposeWidget",
            value: function() {
                var e, t, n = this;
                if (this.perPurposeWidget)
                    return this.perPurposeWidget;
                _iub.cs.options.fadpApplies ? _iub.cs.purposesPreference.approveUnexpressedPreferences(_iub.cs.purposes.toIDArray()) : _iub.cs.purposesPreference.disapproveUnexpressedPreferences(_iub.cs.purposes.toIDArray()),
                !1 === (null === (e = _iub.cs.ui) || void 0 === e || null === (t = e.preferenceState) || void 0 === t ? void 0 : t.initialized) && _iub.cs.ui.preferenceState.setInitialState(_iub.cs);
                var i = new Ht(_iub.cs)
                  , o = i.getRootNode();
                o.setAttribute("id", "purposes-content-container"),
                o.setAttribute("style", "\n      min-height: 35px!important;\n      background-color: #FFFFFF!important;\n      height: 100%!important;\n      margin-bottom: 2px!important;\n      -webkit-overflow-scrolling: touch!important;\n      border-top-left-radius: 5px!important;\n      border-top-right-radius: 5px!important;\n      width: auto!important;\n      color: rgb(0, 0, 0)!important;\n      "),
                o.style.setProperty("display", "none", "important"),
                this.iframeContainer.insertAdjacentElement("afterbegin", o),
                i.addEventListener("open-cookie-policy", (function() {
                    _iub.cs.options.cookiePolicyInOtherWindow ? _iub.cs.ui.showCP(!0) : n.showView(pn)
                }
                )),
                i.addEventListener("open-tcf", (function() {
                    n.showView(hn)
                }
                )),
                i.addEventListener("open-google-additional-consent", (function() {
                    n.showView(fn)
                }
                )),
                i.addEventListener("on-show", (function() {
                    _iub.cs.purposesPreference.disapproveUnexpressedPreferences(_iub.cs.purposes.toIDArray())
                }
                ));
                var a = i.adsSection.tcfOptionNode
                  , r = i.adsSection.googleAdditionalConsentOptionNode;
                a.addEventListener("save-button-clicked", (function() {
                    var e = !xe(r, "half");
                    xe(a, "half") || n.expressForAllCMPOptions(a.checked, e)
                }
                )),
                a.addEventListener("change", (function() {
                    var e = a.checked;
                    xe(a, "half") && Ce(a, "half"),
                    n.expressForAllCMPOptions(a.checked),
                    r && (xe(r, "half") && Ce(r, "half"),
                    r.checked = e),
                    i.adsSection.updateAdsSectionUI()
                }
                ));
                var s = this.cmpWidget;
                return r && (r.addEventListener("save-button-clicked", (function() {
                    var e = _iub.cs.options;
                    xe(r, "half") || e.googleAdditionalConsentMode && e.perPurposeConsent && s.acEnableEntities(r.checked)
                }
                )),
                r.addEventListener("change", (function() {
                    var e = _iub.cs.options;
                    xe(r, "half") && Ce(r, "half"),
                    e.googleAdditionalConsentMode && e.perPurposeConsent && s.acEnableEntities(r.checked),
                    i.adsSection.updateAdsSectionUI()
                }
                ))),
                this.perPurposeWidget = i,
                null
            }
        }, {
            key: "getReadyForIAB",
            value: function(e, t) {
                var n = this;
                this.captionShowTrackingButton = this.cmpWidget.getI18n().show_tracking_button,
                this.captionHideTrackingButton = this.cmpWidget.getI18n().hide_tracking_button;
                var i = document.createElement("div");
                i.setAttribute("id", "iab-container"),
                i.setAttribute("style", "min-height: 35px!important;background-color:#FFFFFF;height: 100%!important;margin-bottom: 2px!important;border-top-left-radius: 5px!important; border-top-right-radius: 5px!important;width: auto!important; color: rgb(0, 0, 0)!important;flex-direction: column!important;"),
                i.style.display = "none";
                var o = !1
                  , a = !1
                  , r = function() {
                    o && a && (n.iframeContainer.insertAdjacentElement("afterbegin", i),
                    _iub.cs.options.perPurposeConsent && t !== _iub.cs.ui.WIDGET_POLICY && (n.perPurposeWidget.adsSection.setupTCFGoogleAdsOption(),
                    n.perPurposeWidget.adsSection.setupGoogleAdditionalConsentOption(),
                    n.updatePerPurposeWidget(!0)),
                    setTimeout((function() {
                        n.tcfWidgetLoadedCallback && n.tcfWidgetLoadedCallback(),
                        n.contentLoadedCallback(),
                        n.currentView !== hn && n.currentView !== fn || n.removeSpinner()
                    }
                    )))
                };
                if (_iub.cs.state.isCmpCssLoaded)
                    o = !0,
                    r();
                else {
                    var s = document.createElement("link");
                    s.rel = "stylesheet",
                    s.type = "text/css",
                    s.href = "https://cdn.iubenda.com/cs/tcf/versions/tcf-v2-0.22.2.css",
                    s.onload = function() {
                        o = !0,
                        r()
                    }
                    ,
                    document.getElementsByTagName("head")[0].appendChild(s),
                    _iub.cs.state.isCmpCssLoaded += 1
                }
                this.cmpWidget.render((function(e) {
                    i.appendChild(e),
                    a = !0,
                    r()
                }
                ));
                var c = document.createElement("div");
                c.id = "iubFooterBtnIab",
                c.innerHTML = this.captionShowTrackingButton,
                c.onclick = function(e) {
                    e.stopPropagation(),
                    0 !== n.viewsHistory.length ? n.showPreviousView() : n.showView(hn)
                }
                ,
                this.footerBtnIab = c,
                _iub.cs.options.perPurposeConsent || e.appendChild(c),
                this.iabContainer = i
            }
        }, {
            key: "showPolicy",
            value: function() {
                this.showView(pn)
            }
        }, {
            key: "showPerPurposeWidget",
            value: function() {
                this.showView(dn, !1)
            }
        }, {
            key: "showTCFWidget",
            value: function(e) {
                var t = this;
                this.showView(hn, !1),
                e && this.cmpWidget.openVendorsList ? (this.cmpWidget.openVendorsList(),
                this.tcfWidgetLoadedCallback = function() {
                    t.scrollTcfToVendorsList()
                }
                ) : this.tcfWidgetLoadedCallback = function() {
                    t.scrollTcfToTop()
                }
            }
        }, {
            key: "showAndHideIabContainer",
            value: function(e, t) {
                this.currentView !== hn ? this.showTCFWidget(t) : this.showView(pn)
            }
        }, {
            key: "getViewPortSize",
            value: function() {
                this.isMobile ? (this.vpWidth = (this.inParent ? parent.window.innerWidth : window.innerWidth) || this.mainDoc.documentElement.clientWidth,
                this.vpHeight = (this.inParent ? parent.window.innerHeight : window.innerHeight) || this.mainDoc.documentElement.clientHeight) : (this.vpWidth = Math.max(this.mainDoc.documentElement.clientWidth, window.innerWidth || 0),
                this.vpHeight = Math.max(this.mainDoc.documentElement.clientHeight, window.innerHeight || 0))
            }
        }, {
            key: "setSizeAndPosition",
            value: function() {
                var e = _iub.cs.ui.getViewportSize(this.mainDoc)
                  , t = e.width
                  , n = e.height
                  , i = 25;
                t > 768 ? i = 80 : t > 480 && (i = 50),
                this.iFrW = Math.min(t - i, 800),
                this.iFrH = Math.min(n - i, 800),
                this.heightReduction > 0 && (this.iFrH = this.iFrH - this.heightReduction);
                var o = this.mainDoc.documentElement
                  , a = this.inParent ? parent.window : window;
                this.scrollX = a.pageXOffset || o.scrollLeft,
                this.scrollY = a.pageYOffset || o.scrollTop,
                this.isMobile ? (this.mainL = (t - this.iFrW) / 2 + this.scrollX,
                this.mainT = i / 2 + this.scrollY) : (this.mainL = (t - this.iFrW) / 2 + this.scrollX,
                this.mainT = 50)
            }
        }, {
            key: "applySizeAndPosition",
            value: function() {
                null !== this.mainC && Te(this.mainC, "top:" + this.mainT + "px; left:" + this.mainL + "px; position:fixed; z-index:" + (this.baseZIndex + 1) + " !important;"),
                null !== this.iFr && (this.iFr.style.width = this.iFrW + "px",
                this.iFr.style.height = this.iFrH + "px",
                this.iPPC.style.width = this.iFrW + "px",
                this.iPPC.style.height = this.iFrH + "px")
            }
        }, {
            key: "getIFrameContainer",
            value: function() {
                return this.iframePopup
            }
        }, {
            key: "closeIFrame",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "accept";
                gt(),
                this.closureTriggeredByFooterButton = e.target === this.footerBtn || e.target === this.footerRejectBtn,
                this.embedP.removeChild(this.mainC),
                this.embedP.removeChild(this.cOver),
                _iub.cs.ui.restorePageScrolling("iframe", this.mainDoc),
                _iub.cs.ui.showFloatingPreferencesButton();
                var n = e || window.event;
                n && (n.stopPropagation(),
                n.preventDefault(),
                "accept" === t && "function" == typeof this.onClose ? this.onClose() : "reject" === t && "function" == typeof this.onReject ? this.onReject() : "back" === t && "function" == typeof this.onBack && this.onBack())
            }
        }, {
            key: "wipeOut",
            value: function() {
                var e;
                this.mainDoc && (this.mainDoc.getElementById("iubenda-iframe") && (e = this.mainDoc.getElementById("iubenda-iframe")).parentNode.removeChild(e),
                this.mainDoc.getElementById("iubenda-iframe-overlay") && (e = this.mainDoc.getElementById("iubenda-iframe-overlay")).parentNode.removeChild(e))
            }
        }, {
            key: "getCMPOptions",
            value: function() {
                if (this.cmpOptions)
                    return this.cmpOptions;
                var e = window.document.getElementById("iub-cmp-widget")
                  , t = [];
                if (!e)
                    return t;
                for (var n = e.querySelectorAll('.iub-cmp-purpose input[type="checkbox"]'), i = e.querySelectorAll('.iub-cmp-vendor input[type="checkbox"]'), o = 0; o < n.length; ++o)
                    t.push(n[o]);
                for (var a = 0; a < i.length; ++a)
                    t.push(i[a]);
                return this.cmpOptions = t,
                t
            }
        }, {
            key: "hasCMPApprovedAll",
            value: function() {
                var e = this.cmpWidget;
                if ("function" == typeof e.areAllAllowed)
                    return e.areAllAllowed();
                for (var t = this.getCMPOptions(), n = 0; n < t.length; ++n)
                    if (!t[n].checked)
                        return !1;
                return !0
            }
        }, {
            key: "hasCMPDisapprovedAll",
            value: function() {
                var e = this.cmpWidget;
                if ("function" == typeof e.areAllDisallowed)
                    return e.areAllDisallowed();
                for (var t = this.getCMPOptions(), n = 0; n < t.length; ++n)
                    if (t[n].checked)
                        return !1;
                return !0
            }
        }, {
            key: "expressForAllCMPOptions",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , n = this.cmpWidget;
                e ? (n.enableAllPurposesAndAllVendors(),
                t && n.enableAllCustomPurposes()) : (n.disableAllPurposesAndAllVendors(),
                t && n.disableAllCustomPurposes())
            }
        }, {
            key: "removeSpinner",
            value: function() {
                this.spinner && this.spinner.parentNode && this.spinner.parentNode.removeChild(this.spinner)
            }
        }, {
            key: "setLoaded",
            value: function(e) {
                this.loaded || ("function" == typeof e && e(),
                "function" == typeof this.onLoad && this.onLoad(),
                this.loaded = !0)
            }
        }, {
            key: "keyPressed",
            value: function(e) {
                27 === function(e) {
                    var t = e || window.event;
                    return t ? "number" == typeof t.keyCode ? t.keyCode : "number" == typeof t.which ? t.which : "number" == typeof t.charCode ? t.charCode : null : null
                }(e) && this.closeIFrame(e, "accept")
            }
        }, {
            key: "getDocHeight",
            value: function() {
                var e = this.mainDoc;
                return Math.max(Math.max(e.body.scrollHeight, e.documentElement.scrollHeight), Math.max(e.body.offsetHeight, e.documentElement.offsetHeight), Math.max(e.body.clientHeight, e.documentElement.clientHeight))
            }
        }, {
            key: "bindAll",
            value: function() {
                var e = this;
                this.linkA.onclick = function(t) {
                    var n = t;
                    void 0 === n && (n = window.event),
                    n.ctrlKey || void 0 !== n.metaKey && n.metaKey || (n.target || (n.target = n.srcElement),
                    n.preventDefault(),
                    e.showDocument())
                }
            }
        }, {
            key: "scrollTcfToVendorsList",
            value: function() {
                var e = window.document.getElementById("iub-cmp-widget")
                  , t = document.getElementById("collapse-element") || document.getElementById("iub-cmp-collapse")
                  , n = document.querySelector(".iub-cmp-toggle-buttons");
                0 !== t.offsetTop && (e.scrollTop = t.offsetTop - n.getBoundingClientRect().height)
            }
        }, {
            key: "scrollTcfToTop",
            value: function() {
                var e = this.iabContainer;
                e.scrollTop = 1,
                e.scrollTop > 0 && (e.scrollTop = 0)
            }
        }]),
        e
    }()
      , kn = function() {
        function e() {
            i(this, e),
            this.savedState = null,
            this.state = {},
            this.initialized = !1
        }
        return a(e, [{
            key: "setInitialState",
            value: function(e) {
                this.initialized = !0,
                this.csObject = e;
                var t = e.options
                  , n = {
                    granularOptionsActive: !1,
                    purposes: {}
                };
                if ((t.gdprApplies || t.lgpdApplies || t.fdpaApplies) && t.perPurposeConsent && (n.purposes = this.getInitialPurposes()),
                t.gdprApplies && t.enableTcf) {
                    var i = this.getInitialTCF();
                    n.tcfv2 = i.tcfv2,
                    t.googleAdditionalConsentMode && (n.gac = i.gac)
                }
                this.setState(n)
            }
        }, {
            key: "getInitialPurposes",
            value: function() {
                var e = this
                  , t = {}
                  , n = ["1"];
                return this.csObject.purposes.toIDArray().forEach((function(i) {
                    t[i] = {
                        value: !!e.csObject.purposesPreference.getPreferenceByPurposeID(i)
                    },
                    n.indexOf(i) >= 0 && (t[i].block = !0)
                }
                )),
                t
            }
        }, {
            key: "getInitialTCF",
            value: function() {
                return {
                    tcfv2: {
                        all: !1
                    },
                    gac: {
                        all: !1
                    }
                }
            }
        }, {
            key: "setState",
            value: function(e) {
                var t = x(this.state, e);
                this.state = t
            }
        }, {
            key: "processState",
            value: function(e) {
                this.setState(e)
            }
        }, {
            key: "getFullState",
            value: function() {
                return this.state
            }
        }, {
            key: "getProperty",
            value: function(e) {
                return this.state[e]
            }
        }, {
            key: "getState",
            value: function() {
                var e = this
                  , t = {};
                void 0 !== this.state.purposes && (t.purposes = {},
                Object.keys(this.state.purposes).forEach((function(n) {
                    t.purposes[n] = e.state.purposes[n].value
                }
                )));
                return void 0 !== this.state.tcfv2 && (t.tcfv2 = this.state.tcfv2),
                void 0 !== this.state.gac && (t.gac = this.state.gac),
                t
            }
        }, {
            key: "saveState",
            value: function() {
                this.savedState = t({}, this.state)
            }
        }, {
            key: "recoveryState",
            value: function() {
                this.state = t({}, this.savedState),
                this.savedState = null
            }
        }]),
        e
    }()
      , wn = function() {
        var e = document.getElementsByClassName("iubenda-cs-preferences-link");
        Ct();
        for (var t = 0, n = e.length; t < n; t++)
            Cn(e[t])
    }
      , Cn = function(e) {
        e.getAttribute("data-iub-enabled") || (e.addEventListener("click", (function(t) {
            t.stopPropagation(),
            t.preventDefault();
            var n = e.getAttribute("data-accept-purposes")
              , i = null;
            n && (i = n.split(",")),
            _iub.cs.ui.openPreferences({
                event: t,
                acceptPurposes: i
            })
        }
        )),
        e.setAttribute("data-iub-enabled", 1))
    }
      , xn = function() {
        function e(n) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
              , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            i(this, e);
            var r = a.value
              , s = p(a, ["value"]);
            this.options = t({
                disabled: !1
            }, s),
            this.label = n,
            this.callback = o,
            this.value = r || !1,
            this.content = document.createElement("div"),
            this.toggleId = n;
            var c = "iub-toggle-checkbox granular-control-checkbox";
            a.id && (this.toggleId = "iub-toggle-id-" + a.id,
            c += " " + this.toggleId),
            this.content.className = c,
            this.createToggle()
        }
        return a(e, [{
            key: "createToggle",
            value: function() {
                var e = this
                  , t = document.createElement("input");
                t.id = this.toggleId,
                t.name = this.label,
                t.className = "style1",
                t.type = "checkbox",
                t.checked = this.value,
                t.value = this.value,
                t.disabled = this.options.disabled,
                this.options.disabled && this.content.classList.add("granular-control-checkbox--disabled"),
                t.addEventListener("change", (function(t) {
                    var n = t.target;
                    t.isTrusted && (n.value = n.checked),
                    e.callback(e.options, Z(n.value))
                }
                )),
                this.content.appendChild(t);
                var n = document.createElement("label");
                n.setAttribute("for", this.toggleId);
                var i = document.createElement("span");
                i.innerHTML = this.label,
                n.appendChild(i),
                this.content.appendChild(n)
            }
        }, {
            key: "getNode",
            value: function() {
                return this.content
            }
        }]),
        e
    }()
      , Pn = {
        top: ["iubenda-cs-default", "iubenda-cs-top"],
        bottom: ["iubenda-cs-default", "iubenda-cs-bottom"],
        "float-top-left": ["iubenda-cs-default-floating", "iubenda-cs-top", "iubenda-cs-left"],
        "float-top-right": ["iubenda-cs-default-floating", "iubenda-cs-top", "iubenda-cs-right"],
        "float-bottom-left": ["iubenda-cs-default-floating", "iubenda-cs-bottom", "iubenda-cs-left"],
        "float-bottom-right": ["iubenda-cs-default-floating", "iubenda-cs-bottom", "iubenda-cs-right"],
        "float-top-center": ["iubenda-cs-default-floating", "iubenda-cs-top", "iubenda-cs-center"],
        "float-bottom-center": ["iubenda-cs-default-floating", "iubenda-cs-bottom", "iubenda-cs-center"],
        "float-center": ["iubenda-cs-default-floating", "iubenda-cs-center"]
    };
    function _n(e) {
        var t, n = this, i = this.cs.options, o = tt[i.lang].banner, a = "", s = "";
        (null == i || null === (t = i.banner) || void 0 === t ? void 0 : t.linksColor) && (s = "style=color:" + i.banner.linksColor.replace(/\s+/g, "") + "!important;"),
        this.banner = document.createElement("div"),
        this.banner.id = "iubenda-cs-banner",
        !0 === i.banner.applyStyles && (xt(),
        i.banner.zIndex && Te(this.banner, "z-index:" + i.banner.zIndex + " !important;"),
        i.banner.backgroundColor && (a += "background-color: " + i.banner.backgroundColor + " !important;"),
        i.banner.textColor && (a += "color: " + i.banner.textColor + " !important;"),
        i.banner.fontSize ? a += "font-size: " + i.banner.fontSize + " !important;" : i.banner.fontSizeBody && (a += "font-size: " + i.banner.fontSizeBody + " !important;")),
        i.banner.backgroundColor && "#000" === i.banner.backgroundColor && this.banner.classList.add("iubenda-cs-black"),
        Ct();
        var c = Pn[i.banner.position];
        c || (c = Pn.top);
        for (var l = 0, p = c.length; l < p; l++)
            this.banner.classList.add(c[l]);
        !0 === i.banner.backgroundOverlay && this.banner.classList.add("iubenda-cs-overlay"),
        i.banner.slideDown && this.banner.classList.add("iubenda-cs-slidein"),
        this.banner.setAttribute("role", "alertdialog"),
        this.banner.setAttribute("aria-labelledby", "iubenda-cs-title"),
        this.banner.setAttribute("aria-describedby", "iubenda-cs-paragraph");
        var u = i.banner.content
          , d = !!u;
        if (d)
            we(this.banner, "iubenda-cs-no-heading");
        else {
            var h = Sn.call(this, o, i);
            u = (o.title ? '<div id="iubenda-cs-title">' + o.title + "</div>" : "") + '<div id="iubenda-cs-paragraph">' + h + "</div>"
        }
        var f, b = "<a " + s + ' href="' + e + '" class="iubenda-cs-cookie-policy-lnk" target="_blank" rel="noopener">' + (i.banner.cookiePolicyLinkCaption || o.cookie_policy_caption) + "</a>", m = "<a " + s + 'href="javascript:void(0)" class="iubenda-advertising-preferences-link">' + o.advertising_preferences_caption + "</a>", g = "<a " + s + ' href="javascript:void(0)" class="iubenda-vendor-list-link">' + o.vendor_list_caption + "</a>", v = "<a " + s + ' href="javascript:void(0)" class="iubenda-privacy-policy-link">' + o.privacy_policy_caption + "</a>", y = "<a " + s + ' href="javascript:void(0)" class="iubenda-ccpa-opt-out iubenda-do-not-sell-link">' + o.do_not_sell_caption + "</a>";
        i.tcfVersion >= 2.2 ? u = u.replace("%{total_number_of_ads_vendors}", (null === (f = this.cs.options.tcfVendors) || void 0 === f ? void 0 : f.length) || window._iub.vendorsCountGVL3 || 0) : u = u.replace("%{total_number_of_ads_vendors}", "");
        u = (u = (u = (u = (u = (u = u.replace("%{cookie_policy_link}", b)).replace("%{advertising_preferences_link}", m)).replace("%{vendor_list_link}", g)).replace("%{privacy_policy}", v)).replace("%{do_not_sell}", y)).replace("%{purposes}", (function() {
            return function(e, t) {
                if (!t)
                    return "";
                var n = Object.keys(t).filter((function(e) {
                    return 1 != +e
                }
                ));
                e.enableTcf && -1 === n.indexOf("5") && n.push("5");
                return On(e.lang, n)
            }(i, n.cs.purposes && n.cs.purposes.purposes)
        }
        ));
        var k = i.banner.html
          , w = "";
        if (i.banner.logo && (w = '<div class="iubenda-cs-brand"><img src="' + i.banner.logo + '" alt="logo" /></div>',
        we(this.banner, "iubenda-cs-branded")),
        !i.banner.continueWithoutAcceptingButtonDisplay && i.banner.closeButtonDisplay && we(this.banner, "iubenda-cs-padded"),
        null === k) {
            var C = new cn(i).getBadge(!0)
              , x = C ? " iubenda-cs-themed" : "";
            this.banner.innerHTML = '<div class="iubenda-cs-container' + x + '"><div class="iubenda-cs-content" style="' + a + '"><div class="iubenda-cs-rationale">' + w + function(e) {
                if (e.banner.continueWithoutAcceptingButtonDisplay)
                    return '<button class="iubenda-cs-cwa-button" tabindex="0" role="button" aria-pressed="false">' + e.banner.continueWithoutAcceptingButtonCaption + "</button>";
                return '<button type="button" class="iubenda-cs-close-btn" tabindex="0" role="button" aria-pressed="false"' + Se({
                    display: e.banner.closeButtonDisplay ? "" : "none"
                }) + ">" + e.banner.closeButtonCaption + "</button>"
            }(i) + '<div class="iubenda-banner-content iubenda-custom-content' + (i.banner.closeButtonDisplay ? " iubenda-banner-content-padded" : "") + '" role="document">' + u + "</div>" + (i.banner.showPurposesToggles ? '<div class="iubenda-granular-controls-container"></div>' : "") + '<div class="iubenda-cs-counter"></div>' + function(e, t) {
                var n = function(e, t) {
                    if (!e.banner.customizeButtonDisplay)
                        return "";
                    return '<button class="iubenda-cs-customize-btn" tabindex="0" role="button" aria-pressed="false">' + (e.banner.customizeButtonCaption || oe(t.customize_button_caption, e)) + "</button>"
                }(e, t)
                  , i = "iubenda-cs-opt-group-custom";
                e.banner.showPurposesToggles && (i += " iubenda-cs-opt-group-granular");
                n && (n = '<div class="' + i + '">' + n + "</div>");
                var o = function(e, t) {
                    if (!e.banner.rejectButtonDisplay)
                        return "";
                    return '<button class="iubenda-cs-reject-btn iubenda-cs-btn-primary" tabindex="0" role="button" aria-pressed="false">' + (e.banner.rejectButtonCaption || t.reject_button_caption) + "</button>"
                }(e, t) + function(e, t) {
                    var n = e.banner.acceptButtonCaption || t.accept_button_caption;
                    if (!e.banner.acceptButtonDisplay)
                        return "";
                    return '<button class="iubenda-cs-accept-btn iubenda-cs-btn-primary" tabindex="0" role="button" aria-pressed="false">' + n + "</button>"
                }(e, t);
                o && (o = '<div class="iubenda-cs-opt-group-consent">' + o + "</div>");
                var a = n + o;
                if (!a)
                    return "";
                return '<div class="iubenda-cs-opt-group"' + Se({
                    color: e.banner.backgroundColor
                }) + ">" + a + "</div>"
            }(i, o) + ("inside" === (null == C ? void 0 : C.position) ? C.element : "") + "</div></div>" + ("outside" === (null == C ? void 0 : C.position) ? C.element : "") + "</div>",
            function(e, t) {
                var n = e.options;
                if (!n.banner.showPurposesToggles || !t)
                    return;
                var i = 0
                  , o = function(t) {
                    if (!t.ui.preferenceState.getProperty("granularOptionsActive")) {
                        e.ui.preferenceState.processState({
                            granularOptionsActive: !0
                        });
                        var n = document.querySelector("#iubenda-cs-banner .iubenda-cs-accept-btn")
                          , i = document.querySelector("#iubenda-cs-banner .iubenda-cs-reject-btn");
                        n && (n.innerHTML = Lt("footer.btnCaption")),
                        i && i.style.setProperty("display", "none", "important")
                    }
                }
                  , a = e.ui.preferenceState.getFullState();
                if (Object.keys(a.purposes).forEach((function(n) {
                    if (void 0 === a.tcfv2 || "5" !== n) {
                        i++;
                        var s = a.purposes[n]
                          , c = Lt("per_purpose.purposes.".concat(n, ".name"))
                          , l = function(t, n) {
                            var i = {
                                purposes: r({}, t.id, {
                                    value: n
                                })
                            };
                            e.ui.preferenceState.processState(i),
                            o(e)
                        }
                          , p = {
                            value: s.value || !1,
                            disabled: !!s.block,
                            id: n
                        }
                          , u = new xn(c,l,p);
                        t.appendChild(u.getNode())
                    }
                }
                )),
                void 0 !== a.tcfv2) {
                    i++;
                    var s = Lt("per_purpose.purposes.5.name")
                      , c = new xn(s,(function(t, i) {
                        var s = r({}, t.id, i);
                        a.purposes && a.purposes[5] && "boolean" == typeof i && (s.purposes = {
                            5: {
                                value: i
                            }
                        }),
                        n.enableTcf && (s.tcfv2 = {
                            all: i
                        },
                        n.googleAdditionalConsentMode && (s.gac = {
                            all: i
                        })),
                        e.ui.preferenceState.processState(s),
                        o(e)
                    }
                    ),{
                        value: !1,
                        id: "mkt"
                    });
                    t.appendChild(c.getNode())
                }
                i % 2 || t.classList.add("grid")
            }(this.cs, this.banner.querySelector(".iubenda-granular-controls-container"))
        } else
            -1 !== k.indexOf("%{banner_content}") && (k = k.replace("%{banner_content}", u)),
            this.banner.innerHTML = k;
        if (d) {
            var P = ce("iubenda-banner-content", this.banner)[0];
            P && we(P, "iubenda-custom-content")
        }
        var _ = !1
          , S = null
          , A = 0
          , B = "iubenda-cs-fix-height"
          , O = function() {
            if (n.banner) {
                var e = window.innerHeight;
                _ && e > A && (n.banner.classList.remove(B),
                S.style.removeProperty("height"),
                _ = !1);
                var t = S.clientHeight
                  , o = S.querySelector(".iubenda-cs-brand-badge")
                  , a = 0;
                if (o) {
                    var r = getComputedStyle(o);
                    t += a = o.offsetHeight + parseInt(r.marginTop, 10) + parseInt(r.marginBottom, 10)
                }
                A = e,
                t >= e && !_ ? (n.banner.classList.add(B),
                a && S.style.setProperty("height", "calc(100% - ".concat(a, "px)"), "important"),
                _ = !0) : t < e && _ && (n.banner.classList.remove(B),
                S.style.removeProperty("height"),
                _ = !1),
                Nn.call(n, i)
            }
        };
        i.banner.prependOnBody ? document.body.insertBefore(this.banner, document.body.firstChild) : document.body.appendChild(this.banner),
        i.banner.backgroundOverlay && gt("#iubenda-cs-banner"),
        An.call(this),
        Ae(this.banner, "click", (function(e) {
            n.cs.ui.emit("banner-click", e)
        }
        ), !1),
        an(this.banner),
        this.destroyBanner = function() {
            Be(window, "resize", O)
        }
        ,
        setTimeout((function() {
            var e = n.banner;
            e && (e.classList.add("iubenda-cs-visible"),
            n.bannerShown = !0,
            (S = ce("iubenda-cs-container", e)[0]) && (O(),
            Ln.call(n),
            Ae(window, "resize", O)),
            Nn.call(n, i),
            setTimeout((function() {
                n.cs.ui.emit("banner-shown")
            }
            ), 100))
        }
        ), 10),
        Pt(i)
    }
    function Sn(e, t) {
        return t.dynamicBannerText && this.isDynamicBannerTextApplicable() ? e.dynamic.paragraph_1 || e.dynamic.paragraph_2 ? this.createLegacyDynamicBannerText(e) : this.createDynamicBannerText(e) : e.paragraph_1 + e.paragraph_2
    }
    function An() {
        this.bannerContent = this.banner.querySelector(".iubenda-banner-content"),
        this.bannerContainer = this.banner.querySelector(".iubenda-cs-content"),
        this.bannerTitle = this.banner.querySelector("#iubenda-cs-title"),
        this.pageCounter = this.banner.querySelector(".iubenda-cs-counter"),
        this.buttonsGroup = this.banner.querySelector(".iubenda-cs-opt-group"),
        this.acceptButton = this.banner.querySelector(".iubenda-cs-accept-btn.iubenda-cs-btn-primary"),
        this.closeButton = this.banner.querySelector(".iubenda-cs-close-btn")
    }
    function Bn(e) {
        return e.map((function(e) {
            return function(e) {
                var t = Lt("banner.dynamic.startQuote")
                  , n = Lt("banner.dynamic.endQuote");
                return isNaN(e) ? t + Lt("uspr.purposes." + e) + n : Lt("per_purpose.purposes." + e + ".bannerName")
            }(e)
        }
        ))
    }
    function On(e, t) {
        var n = Lt("banner.dynamic.and");
        return "es" === e && (n = function(e) {
            return "i" === Lt("per_purpose.purposes." + e[e.length - 1] + ".bannerName")[0] ? "e" : "y"
        }(t)),
        ie(Bn(t).join("[or] "), n)
    }
    function In(e) {
        e.addEventListener("mouseenter", (function() {
            e.classList.add("hover")
        }
        )),
        e.addEventListener("mouseleave", (function() {
            e.classList.remove("hover")
        }
        ))
    }
    function Tn(e) {
        e.addEventListener("focus", (function() {
            e.classList.add("focus")
        }
        )),
        e.addEventListener("blur", (function() {
            e.classList.remove("focus")
        }
        ))
    }
    function Ln() {
        this.bannerBtns = this.bannerBtns || this.banner.querySelectorAll(".iubenda-cs-opt-group button");
        var e, t = g(this.bannerBtns);
        try {
            for (t.s(); !(e = t.n()).done; ) {
                var n = e.value;
                In(n),
                Tn(n)
            }
        } catch (e) {
            t.e(e)
        } finally {
            t.f()
        }
    }
    function En(e) {
        this.banner.classList.remove("iubenda-cs-scrollable"),
        e.banner.html ? this.updateHasTheUserScrolledToBottom() : this.hidePageCounter(e),
        e.banner.acceptButtonDisplay || e.banner.closeButtonDisplay || (this.closeButton.style.display = "none")
    }
    function Nn(e) {
        return e.banner.applyStyles ? e.banner.html ? En.call(this, e) : this.isBannerScrollable.call(this) ? (!this.closeButton || e.banner.acceptButtonDisplay || e.banner.closeButtonDisplay || this.closeButton.style.removeProperty("display"),
        this.banner.classList.add("iubenda-cs-scrollable"),
        this.updateNumberOfPages.call(this),
        null) : En.call(this, e) : En.call(this, e)
    }
    var Dn = "bannerAcceptClicked";
    function Fn(e, t) {
        return e ? e.split("\n").map((function(e) {
            return t ? '<p class="iub-p">' + e + "</p>" : e
        }
        )).join(t ? "" : "<br/>") : ""
    }
    var Vn = function() {
        function e(t, n) {
            i(this, e),
            this.banner = null,
            this.cs = t,
            this.bannerShown = !1,
            this.hasTheUserScrolledToBottom = !1,
            this.numberOfPages = 1,
            this.singlePageHeight = 0,
            this.bannerSetup = _n.bind(this, n)
        }
        return a(e, [{
            key: "showBanner",
            value: function() {
                var e = this;
                this.cs.ui.on("banner-shown", (function() {
                    e.cs.fireCallback("onBannerShown"),
                    e.cs.options.banner.backgroundOverlay && e.cs.ui.disablePageScrolling("banner")
                }
                )),
                this.cs.ui.on("banner-click", (function(t) {
                    setTimeout((function() {
                        e.bannerClicked(t)
                    }
                    ), 0)
                }
                )),
                this.bannerSetup(),
                this.cs.options.banner.html || this.bindBannerContentScroll()
            }
        }, {
            key: "bindBannerContentScroll",
            value: function() {
                var e = this
                  , t = null;
                Ae(this.bannerContent, "scroll", (function() {
                    null !== t && clearTimeout(t),
                    t = setTimeout((function() {
                        e.isBannerScrolledToTop() && e.hidePageCounter(),
                        e.updateNumberOfPages()
                    }
                    ), 150)
                }
                ), {
                    passive: !0
                })
            }
        }, {
            key: "isBannerScrolledToTop",
            value: function() {
                return 0 === this.bannerContent.scrollTop
            }
        }, {
            key: "bannerClicked",
            value: function(e) {
                this.cs.debug("banner clicked");
                for (var t = e.target; t && t instanceof Element; ) {
                    if (xe(t, "iubenda-cs-accept-btn")) {
                        this.bannerAcceptBtnClicked(e);
                        break
                    }
                    if (xe(t, "iubenda-cs-customize-btn")) {
                        (_iub.cs.options.perPurposeConsent || _iub.cs.options.usprApplies) && (this.cs.ui.mustShowPerPurposeView = !0),
                        !_iub.cs.options.enableTcf || _iub.cs.options.perPurposeConsent || _iub.cs.options.usprApplies || _iub.cs.ui.showCP(!1, !0),
                        this.cs.ui.bannerCookiePolicyClicked({
                            event: e
                        });
                        break
                    }
                    if (xe(t, "iubenda-cs-reject-btn")) {
                        this.cs.ui.onRejectButtonClick(e);
                        break
                    }
                    if (t === e.currentTarget)
                        break;
                    t = t.parentNode
                }
                e.stopPropagation()
            }
        }, {
            key: "bannerAcceptBtnClicked",
            value: function(e) {
                this.cs.debug("banner Accept clicked"),
                this.scrollBannerIfNeeded.call(this, this.acceptConsent.bind(this), e)
            }
        }, {
            key: "scrollBannerIfNeeded",
            value: function(e, t, n) {
                null == t || t.stopPropagation(),
                this.hasTheUserReadTheFullBanner() ? e(n) : this.scrollBannerByOnePage(t)
            }
        }, {
            key: "scrollBannerByOnePage",
            value: function(e) {
                this.cs.debug("cannot give consent while banner text isn't scrolled to bottom"),
                this.cs.debug("scrolling banner by one page..."),
                this.cs.debug("displaying page counter on the banner..."),
                this.pageCounter.style.display = "block",
                this.calculateSinglePageHeight(),
                this.updateNumberOfPages(),
                e.target.classList.remove("hover"),
                e.target.classList.remove("focus"),
                this.bannerContent && (this.bannerContent.scrollTop += this.singlePageHeight)
            }
        }, {
            key: "acceptConsent",
            value: function() {
                if (this.cs.options.banner.showPurposesToggles && this.cs.ui.preferenceState.getProperty("granularOptionsActive")) {
                    var e = t({
                        consent: !0,
                        ccpa: !0,
                        uspr: {
                            sd5: !0,
                            sd8: !0,
                            sd9: !0
                        }
                    }, this.cs.ui.preferenceState.getState());
                    this.cs.setGeneralPreference(e, Dn)
                } else
                    this.cs.ui.acceptAllPreferenceStatePurposes(),
                    this.cs.acceptAll(Dn);
                this.cs.ui.consentAccepted = !0,
                this.removeBanner()
            }
        }, {
            key: "isDynamicBannerTextApplicable",
            value: function() {
                return ["da", "de", "en", "en-GB", "es", "fr", "it", "nl", "pl", "pt", "pt-BR", "ru", "sv"].indexOf(this.cs.options.lang) > -1
            }
        }, {
            key: "createLegacyDynamicBannerText",
            value: function(e) {
                var t = e.dynamic
                  , n = this.cs.options.banner.applyStyles
                  , i = t.paragraph_1 ? oe(t.paragraph_1, this.cs.options) : ""
                  , o = t.paragraph_2 ? oe(function(e) {
                    return e.by_scrolling || e.by_clicking_on_links || e.by_browsing ? "[if gdprApplies][if not banner.acceptButtonDisplay or not banner.rejectButtonDisplay]\n".concat(e.paragraph_2, ".[/if][/if]") : null == e ? void 0 : e.paragraph_2
                }(t), this.cs.options) : "";
                return Fn(i, n) + Fn(o, n)
            }
        }, {
            key: "createDynamicBannerText",
            value: function(e) {
                var t = e.dynamic
                  , n = this.cs.options.banner.applyStyles;
                return Fn(oe(t.body, this.cs.options), n)
            }
        }, {
            key: "getBanner",
            value: function() {
                return this.banner
            }
        }, {
            key: "isBannerScrolledToBottom",
            value: function() {
                if (!this.banner)
                    return !0;
                if (!this.bannerContent)
                    return !0;
                var e = this.bannerContent.scrollHeight
                  , t = this.bannerContent.scrollTop + this.bannerContent.clientHeight
                  , n = Math.abs(e - t);
                return this.bannerContent && n <= 10
            }
        }, {
            key: "isBannerScrollable",
            value: function() {
                return !!this.calculateSinglePageHeight() && this.bannerContent.scrollHeight > this.singlePageHeight
            }
        }, {
            key: "calculateSinglePageHeight",
            value: function() {
                if (!this.bannerContainer || !this.bannerContent)
                    return 0;
                var e = parseInt(window.getComputedStyle(this.bannerContainer).paddingTop[0])
                  , t = parseInt(window.getComputedStyle(this.bannerContainer).paddingBottom[0]) + e
                  , n = this.bannerContainer.scrollHeight;
                return n -= t,
                this.buttonsGroup && (n -= this.buttonsGroup.scrollHeight),
                this.bannerTitle && (n -= this.bannerTitle.scrollHeight),
                "none" !== this.pageCounter.style.display && (n -= parseInt(window.getComputedStyle(this.pageCounter).marginTop[0]),
                n -= this.pageCounter.scrollHeight),
                this.singlePageHeight = n,
                n
            }
        }, {
            key: "updateNumberOfPages",
            value: function() {
                var e = Math.ceil(this.bannerContent.scrollHeight / this.singlePageHeight)
                  , t = Math.ceil(this.bannerContent.scrollTop / this.singlePageHeight);
                this.numberOfPages = e,
                this.updateHasTheUserScrolledToBottom(),
                this.pageCounter.innerText = Lt("banner.page_counter_caption") + " " + t + "/" + e
            }
        }, {
            key: "updateHasTheUserScrolledToBottom",
            value: function() {
                this.isBannerScrolledToBottom() && (this.hasTheUserScrolledToBottom = !0)
            }
        }, {
            key: "removeBanner",
            value: function() {
                var e;
                this.banner && (this.cs.debug("closing banner ..."),
                ct && (ct = !1,
                Be(document.body, "focusin", ht),
                Be(window, "keydown", ft),
                Be(document, "mousedown", bt),
                Be(document, "mouseup", mt)),
                st = null,
                de((e = "iubenda-cs-banner",
                document.getElementById(e))),
                this.cs.ui.restorePageScrolling("banner"),
                this.cs.fireCallback("onBannerClosed"),
                "function" == typeof this.destroyBanner && this.destroyBanner(),
                this.banner = null,
                this.cs.ui.previousTCFPreferences = null)
            }
        }, {
            key: "isVisible",
            value: function() {
                return !!this.banner
            }
        }, {
            key: "hidePageCounter",
            value: function() {
                this.pageCounter.style.display = "none",
                this.calculateSinglePageHeight(),
                this.updateNumberOfPages()
            }
        }, {
            key: "hasTheUserReadTheFullBanner",
            value: function() {
                return this.hasTheUserScrolledToBottom
            }
        }, {
            key: "shown",
            get: function() {
                return this.bannerShown
            }
        }]),
        e
    }()
      , zn = ["top-left", "top-right", "bottom-left", "bottom-right", "center-left", "center-right"]
      , Rn = [].concat(zn, ["inline-center", "inline-left", "inline-right"])
      , jn = "bottom-right"
      , Mn = function(e) {
        s(n, e);
        var t = d(n);
        function n(e, o) {
            var a;
            return i(this, n),
            (a = t.call(this)).link = e,
            a.html = '\n      <a\n        href="'.concat(a.link, '"\n        class="iubenda-tp-alert-btn iubenda-tp-btn--warning"\n        target="_blank"\n        data-tp-icon="data-tp-icon"\n        data-tp-float="').concat(a.getPosition(o), '"\n      >\n      </a>\n    '),
            a.content = document.createElement("div"),
            a.render(),
            a
        }
        return a(n, [{
            key: "render",
            value: function() {
                this.content.className = "iubenda-tp-btn-container",
                this.content.style.position = "relative",
                this.content.innerHTML = this.html
            }
        }, {
            key: "getNode",
            value: function() {
                return this.content
            }
        }, {
            key: "ensureVisibility",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e4
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500
                  , n = null
                  , i = this
                  , o = i.getNode();
                setTimeout((function() {
                    null !== n && (clearInterval(n),
                    n = null)
                }
                ), e),
                n = setInterval((function() {
                    null !== o && document.body.children[document.body.children.length - 1] !== o && o.parentElement && (o.parentElement.removeChild(o),
                    document.body.appendChild(i.getNode()))
                }
                ), t)
            }
        }]),
        n
    }(function() {
        function e() {
            i(this, e)
        }
        return a(e, [{
            key: "getPosition",
            value: function(e) {
                return -1 !== zn.indexOf(e) ? e : jn
            }
        }]),
        e
    }())
      , Un = new M
      , Wn = "rejectButtonClick"
      , Hn = "bannerXClose";
    function Gn() {
        var e = {};
        this.cs.options.ccpaApplies && (e.ccpa = !0),
        this.cs.options.usprApplies && (e.consent = !0,
        e.uspr = {
            sd5: !0,
            sd8: !0,
            sd9: !0
        }),
        (this.cs.options.gdprApplies || this.cs.options.lgpdApplies) && (e.consent = !0,
        e.purposes = {
            all: !0
        },
        e.tcfv2 = {
            all: !0
        },
        e.gac = {
            all: !0
        }),
        this.cs.setGeneralPreference(e, Hn),
        this.banner.removeBanner()
    }
    function qn() {
        this.cs.rejectAll(Wn),
        this.consentRejected = !0,
        this.banner.removeBanner()
    }
    var Yn = function() {
        function e(t) {
            i(this, e),
            ot(this),
            this.cs = t,
            this.document = document,
            this.mainC = null,
            this.overlay = null,
            this.CPiFrame = null,
            this.preferenceState = new kn,
            this.isMobile = Un.isMobile(),
            this.consentRejected = !1,
            this.consentAccepted = !1,
            this.freezed = !1,
            this.showingCookiePolicy = !1,
            this.iFrameCloseBtnUrl = "http://localhost.cs.origin:3010/cookie_solution/close.png",
            this.documentHead = this.document.head || this.document.getElementsByTagName("head")[0],
            this.pageCounter,
            this.buttonsGroup,
            this.bannerTitle,
            this.bannerContainer,
            this.acceptButton,
            this.bannerBtns,
            this.originalHtmlOverflow = [],
            this.WIDGET_PER_PURPOSE = "per-purpose",
            this.WIDGET_TCF = "tcf",
            this.WIDGET_POLICY = "policy";
            var n = this.getCookiePolicyHref();
            this.banner = new Vn(t,n)
        }
        return a(e, [{
            key: "start",
            value: function(e, t) {
                this.cs.debug("starting UI (if needed) ..."),
                this.preferenceState.setInitialState(this.cs),
                this.setCmpWidget(e, t),
                this.cs.shouldShowBanner() && this.banner.showBanner(),
                this.bindButtons(),
                this.cs.debug("invoking callback.onReady (after starting UI) ..."),
                this.cs.csReady()
            }
        }, {
            key: "setCmpWidget",
            value: function(e, t) {
                _iub.cs.options.enableTcf ? this.cmpWidget || this.createCmp(e, t) : this.cmpWidget = null
            }
        }, {
            key: "bindButtons",
            value: function() {
                this.cs.debug("binding button of cookie policy link and close banner ..."),
                this.bindOpenCPBtns(),
                this.bindCloseBannerBtns(),
                this.bindOpenCmpBtns(this.banner.getBanner()),
                this.bindCcpaBtns(),
                this.bindVendorListBtns()
            }
        }, {
            key: "bindOpenCPBtns",
            value: function() {
                var e = this;
                ce("iubenda-cs-cookie-policy-lnk").forEach((function(t) {
                    Ae(t, "click", (function(t) {
                        e.bannerCookiePolicyClicked({
                            event: t,
                            isCookiePolicyLink: !0
                        })
                    }
                    ), !0)
                }
                ))
            }
        }, {
            key: "bindCloseBannerBtns",
            value: function() {
                var e = this
                  , t = ce("iubenda-cs-close-btn")
                  , n = ce("iubenda-cs-cwa-button");
                t.concat(n).forEach((function(t) {
                    Ae(t, "click", (function(t) {
                        e.bannerCloseBtnClicked(t)
                    }
                    ), !0)
                }
                ))
            }
        }, {
            key: "bindOpenCmpBtns",
            value: function(e) {
                for (var t = ce("iubenda-advertising-preferences-link", e), n = 0; n < t.length; n++)
                    At(t[n]);
                for (var i = ce("iubenda-cs-preferences-link", this.banner.getBanner()), o = 0; o < i.length; o++)
                    Cn(i[o])
            }
        }, {
            key: "bindCcpaBtns",
            value: function() {
                var e = this.banner.getBanner();
                if (e)
                    for (var t = e.querySelectorAll(".iubenda-ccpa-opt-out"), n = 0; n < t.length; n++)
                        this.cs.handleAskOptOutClick(t[n])
            }
        }, {
            key: "showTcfVendors",
            value: function() {
                this.showCP(!1, !0, !0)
            }
        }, {
            key: "bindVendorListBtns",
            value: function() {
                for (var e = this, t = le(["iubenda-vendor-list-link", "iubenda-vendors-list-link"]), n = 0; n < t.length; n++)
                    t[n].getAttribute("data-iub-enabled") || (Ae(t[n], "click", (function(t) {
                        t.stopPropagation(),
                        t.preventDefault(),
                        e.showTcfVendors()
                    }
                    )),
                    t[n].setAttribute("data-iub-enabled", 1))
            }
        }, {
            key: "acceptAllPreferenceStatePurposes",
            value: function() {
                var e, t = null === (e = this.preferenceState.getState()) || void 0 === e ? void 0 : e.purposes;
                if (t) {
                    var n = _(t, !0);
                    Object.keys(n).forEach((function(e) {
                        n[e] = !0
                    }
                    )),
                    this.preferenceState.setState({
                        purposes: n
                    })
                }
            }
        }, {
            key: "createCmp",
            value: function(e, t) {
                this.previousTCFPreferences && (e = this.previousTCFPreferences.cmpCookie,
                t = this.previousTCFPreferences.customPreferences);
                var n = _iub.cs.options.lang;
                _iub.cs.options.tcfVersion;
                var i = tt[n];
                i || (i = tt.en);
                var o = i.tcf_v2 || tt.en.tcf_v2
                  , a = _iub.cs.getCustomPurposes();
                this.cmpWidget = new _iub.cmp.Widget(e,n,o,a,t,{
                    popoverListen: an,
                    promiseCreate: Le
                })
            }
        }, {
            key: "scrollBannerByOnePage",
            value: function(e) {
                var t = this.banner.getBanner();
                this.cs.debug("cannot give consent while banner text isn't scrolled to bottom"),
                this.cs.debug("scrolling banner by one page..."),
                this.cs.debug("displaying page counter on the banner..."),
                this.banner.pageCounter.style.display = "block",
                t.calculateSinglePageHeight(),
                this.banner.updateNumberOfPages(),
                e.target.classList.remove("hover"),
                e.target.classList.remove("focus"),
                this.banner.bannerContent && (this.banner.bannerContent.scrollTop += this.singlePageHeight)
            }
        }, {
            key: "getArrayOfElements",
            value: function(e) {
                if (e && "string" == typeof e) {
                    var t = function(e) {
                        try {
                            return ae(e)
                        } catch (e) {
                            return []
                        }
                    }(e);
                    return t.length > 0 ? t : null
                }
                return e instanceof HTMLElement ? [e] : null
            }
        }, {
            key: "openPreferences",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.cs.options.perPurposeConsent && (this.cs.options.gdprApplies || this.cs.options.lgpdApplies || this.cs.options.fadpApplies) || this.cs.options.usprApplies ? this.mustShowPerPurposeView = !0 : this.cs.options.enableTcf && (this.mustShowTCFView = !0),
                this.bannerCookiePolicyClicked(e)
            }
        }, {
            key: "bannerCookiePolicyClicked",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.event
                  , n = e.isCookiePolicyLink
                  , i = e.acceptPurposes;
                if (this.cs.debug("banner's cookie policy link clicked"),
                !this.cs.isCpOpen()) {
                    this.cs.options.cookiePolicyInOtherWindow || (this.showingCookiePolicy = !0),
                    t && (t.preventDefault(),
                    t.stopPropagation());
                    var o = this.cs.options.cookiePolicyInOtherWindow && n
                      , a = this.cs.options.cookiePolicyInOtherWindow && !this.cs.options.enableTcf && !this.cs.options.perPurposeConsent
                      , r = this.cs.options.cookiePolicyInOtherWindow && this.cs.options.enableTcf && !this.cs.options.perPurposeConsent
                      , s = o || a || r;
                    this.showCP(s, !1, !1, !1, i)
                }
            }
        }, {
            key: "getSavedPreferences",
            value: function() {
                var e = _iub.cs.getSavedPreferences();
                if (!e.cmpCookie) {
                    var t = this.preferenceState.getProperty("tcfv2");
                    "string" == typeof t && (e.cmpCookie = t)
                }
                if (!e.customPreferences) {
                    var n = this.preferenceState.getProperty("gac");
                    "string" == typeof n && (e.customPreferences = {
                        gac: n
                    })
                }
                return e
            }
        }, {
            key: "preSelectPurposes",
            value: function(e) {
                var t, n = this;
                if (!this.cs.options.isRejectionRecoveryDisabled()) {
                    var i = null !== (t = null == e ? void 0 : e.reduce((function(e, t) {
                        var i = n.CPiFrame.mainC.querySelector("#purpose-" + t);
                        if (5 == t) {
                            var o = n.CPiFrame.mainC.querySelector("#iub-checkbox4");
                            i = o.offsetParent ? o : i
                        }
                        return !i || i.checked && !i.classList.contains("half") || e.push({
                            toggle: i,
                            purpose: t
                        }),
                        e
                    }
                    ), [])) && void 0 !== t ? t : [];
                    if (null == i ? void 0 : i.length) {
                        var o = i[0].purpose;
                        this.scrollWidgetToPurpose(o, (function() {
                            i.forEach((function(e) {
                                var t = e.toggle;
                                t.classList.contains("half") && t.click(),
                                t.click()
                            }
                            ))
                        }
                        ))
                    }
                }
            }
        }, {
            key: "showCP",
            value: function(e, t, n, i, o) {
                var a = this
                  , r = null
                  , s = this.getCookiePolicyHref()
                  , c = Lt("banner.cookie_policy_caption");
                if (i && (!0 === i ? s = this.cs.options.privacyPolicyUrl : "uspr" === i && (s = this.cs.options.noticeAtCollectionUrl),
                c = Lt("banner.privacy_policy_caption")),
                sn(),
                this.consentRejected = !1,
                this.consentAccepted = !1,
                e)
                    window.open(s, "_blank");
                else {
                    i || (r = {
                        message: "string" == typeof this.cs.options.footer.message ? this.cs.options.footer.message : tt[this.cs.options.lang].footer.message,
                        btnCaption: "string" == typeof this.cs.options.footer.btnCaption ? this.cs.options.footer.btnCaption : tt[this.cs.options.lang].footer.btnCaption
                    });
                    var l, p = this.getSavedPreferences();
                    switch (_iub.cs.options.enableTcf && this.createCmp(p.cmpCookie, p.customPreferences),
                    (_iub.cs.options.perPurposeConsent || _iub.cs.options.usprApplies) && this.mustShowPerPurposeView ? (this.mustShowPerPurposeView = !1,
                    l = this.WIDGET_PER_PURPOSE) : _iub.cs.options.enableTcf && _iub.cs.options.gdprApplies && (this.mustShowTCFView || t) ? (this.mustShowTCFView = !1,
                    l = this.WIDGET_TCF) : l = this.WIDGET_POLICY,
                    l === this.WIDGET_PER_PURPOSE && (_iub.cs.purposesPreference.saveCurrentPreferencesState(),
                    _iub.cs.usPurposes && _iub.cs.usPurposes.savePreferenceState()),
                    l !== this.WIDGET_POLICY && this.cs.updateGppApi(!0, !1, "initial"),
                    this.CPiFrame = new yn({
                        iFrUrl: s,
                        inParent: !1,
                        straightShow: !0,
                        closeBtnUrl: this.iFrameCloseBtnUrl,
                        embedP: document.getElementsByTagName("body")[0],
                        disableESC: !0,
                        baseZIndex: this.cs.options.banner.zIndex + 1,
                        scrolling: null != this.cs.options.cookiePolicyUrl,
                        showCcpa: i,
                        footer: r,
                        widgetToShow: l,
                        frameTitle: c,
                        lang: _iub.cs.options.lang,
                        onLoad: function() {
                            var e, t;
                            a.preferenceState.saveState(),
                            l === a.WIDGET_PER_PURPOSE && a.preSelectPurposes(o),
                            a.cookiePolicyLoaded(),
                            (null === (e = a.CPiFrame) || void 0 === e || null === (t = e.perPurposeWidget) || void 0 === t ? void 0 : t.adsSection) && a.CPiFrame.perPurposeWidget.adsSection.populateByState()
                        },
                        onClose: function() {
                            _iub.cs.usPurposes && _iub.cs.usPurposes.clearPreferenceState(),
                            _iub.cs.purposesPreference.clearCurrentPreferencesState(),
                            a.cookiePolicyClosed({
                                eventName: "cookiePolicyClosed"
                            })
                        },
                        onReject: function() {
                            a.cookiePolicyClosed({
                                eventName: Wn
                            })
                        },
                        onBack: function() {
                            _iub.cs.usPurposes && _iub.cs.usPurposes.recoveryPreferenceState(),
                            a.cs.options.banner.showPurposesToggles || a.preferenceState.recoveryState(),
                            a.banner.isVisible() || a.cs.updateGppApi(!1, !1, "processed"),
                            a.cookiePolicyClosed({
                                eventName: "backButtonClick"
                            })
                        }
                    },this.cmpWidget),
                    l) {
                    case this.WIDGET_PER_PURPOSE:
                        this.CPiFrame.showPerPurposeWidget();
                        break;
                    case this.WIDGET_TCF:
                        this.CPiFrame.showTCFWidget(n);
                        break;
                    default:
                        this.CPiFrame.showPolicy()
                    }
                    this.cs.setCpOpen(!0)
                }
            }
        }, {
            key: "scrollWidgetToPurpose",
            value: function(e, t) {
                var n, i, o, a = this.CPiFrame.mainC.querySelector(".purposes-content"), r = this.CPiFrame.mainC.querySelector(".iub-consent-buttons.purposes-buttons"), s = a.querySelector(".purposes-header"), c = this.CPiFrame.mainC.querySelector("*[class*='purpose-item-".concat(e, "'], *[class*='purposes-item-").concat(e, "']"));
                a && c && r && s && (n = a.scrollTop,
                i = c.offsetTop - r.clientHeight - s.offsetTop - n,
                o = Date.now(),
                0 === i ? t() : requestAnimationFrame((function e() {
                    var r = Math.min((Date.now() - o) / 250, 1);
                    a.scrollTop = n + i * r,
                    1 === r ? t() : requestAnimationFrame(e)
                }
                )))
            }
        }, {
            key: "showCcpaOptOutConfirmBox",
            value: function() {
                var e = this;
                if (!this.cs.state.ccpaOptOutConfirmationOpen) {
                    this.cs.state.ccpaOptOutConfirmationOpen = !0;
                    var t = document.createElement("div");
                    t.className = "iubenda-alert",
                    t.id = "iubenda-alert",
                    t.setAttribute("role", "dialog"),
                    t.setAttribute("aria-labelledby", "iubenda-alert-dialog-content"),
                    t.setAttribute("aria-modal", "true");
                    var n = document.createElement("div");
                    n.className = "iubenda-alert-dialog";
                    var i = document.createElement("div");
                    i.className = "iubenda-alert-dialog-content",
                    i.id = "iubenda-alert-dialog-content",
                    i.innerText = Lt("ccpa.opt_out_prompt");
                    var o = document.createElement("div");
                    o.className = "iubenda-alert-dialog-buttons";
                    var a = function(n) {
                        gt(),
                        "confirm" == n && e.cs.optOutCcpa(),
                        document.body.removeChild(t),
                        e.cs.state.ccpaOptOutConfirmationOpen = !1
                    }
                      , r = document.createElement("button");
                    r.className = "iubenda-button-cancel",
                    r.innerText = Lt("ccpa.opt_out_cancel"),
                    r.addEventListener("click", (function() {
                        return a("cancel")
                    }
                    ));
                    var s = document.createElement("button");
                    s.className = "iubenda-button-confirm",
                    s.innerText = Lt("ccpa.opt_out_confirm"),
                    s.addEventListener("click", (function() {
                        return a("confirm")
                    }
                    )),
                    t.appendChild(n),
                    n.appendChild(i),
                    n.appendChild(o),
                    o.appendChild(r),
                    o.appendChild(s),
                    document.body.appendChild(t),
                    gt("#".concat(t.id))
                }
            }
        }, {
            key: "checkUsprFloatingPreferences",
            value: function() {
                if (this.cs.options.usprApplies) {
                    var e = ["#iubenda-cs-banner", "#iubenda-iframe"]
                      , t = re(".iubenda-cs-preferences-link", e)
                      , n = re(".iubenda-cs-uspr-link", e);
                    t.length && n.length || (void 0 === _iub.csConfiguration.floatingPreferencesButtonDisplay && (this.forcedFloatingPreferencesButtonDisplay = !0),
                    this.cs.options.usprPreferenceWidget = {
                        preference: !t.length,
                        uspr: !n.length
                    })
                }
            }
        }, {
            key: "createPreferencesWidgets",
            value: function() {
                var t;
                (this.checkUsprFloatingPreferences(),
                this.cs.options.enableTcf && !this.cs.options.skipTcfValidation && void 0 === _iub.csConfiguration.floatingPreferencesButtonDisplay) && (0 === document.querySelectorAll(".iubenda-advertising-preferences-link").length && (this.forcedFloatingPreferencesButtonDisplay = !0));
                this.cs.options.fadpApplies && void 0 === _iub.csConfiguration.floatingPreferencesButtonDisplay && 0 === document.querySelectorAll(".iubenda-cs-preferences-link").length && (this.forcedFloatingPreferencesButtonDisplay = !0);
                var n = [];
                if (!document.querySelector(".iubenda-uspr-btn,.iub__us-widget") && this.shouldHaveUsprWidget()) {
                    var i = e.parseWidgetPosition({
                        position: this.cs.options.usPreferencesWidgetDisplay,
                        validPositions: Rn,
                        defaultPosition: "inline-center"
                    })
                      , o = i.position
                      , a = i.isAnchored
                      , r = this.createUsprPreferenceWidget(this.cs.options.usprPreferenceWidget, o)
                      , s = r.widget
                      , c = r.container;
                    n.push({
                        widget: s,
                        container: c,
                        isAnchored: a
                    })
                }
                var l = null !== (t = this.forcedFloatingPreferencesButtonDisplay) && void 0 !== t ? t : this.cs.options.floatingPreferencesButtonDisplay;
                if (!document.querySelector(".iubenda-tp-btn.iubenda-cs-preferences-link") && this.shouldHaveGdprWidget(l)) {
                    var p = e.parseWidgetPosition({
                        position: l,
                        validPositions: zn,
                        defaultPosition: jn
                    })
                      , u = p.position
                      , d = p.isAnchored
                      , h = e.createGdprPreferenceWidget(this.cs.options, u);
                    n.push({
                        widget: h,
                        container: h,
                        isAnchored: d
                    })
                }
                if (0 === n.length)
                    return n;
                !0 === this.cs.options.banner.applyStyles && xt();
                for (var f = 0, b = n; f < b.length; f++) {
                    var m = b[f]
                      , g = m.widget
                      , v = m.container;
                    m.isAnchored && g.setAttribute("data-tp-anchored", "data-tp-anchored"),
                    this.cs.options.floatingPreferencesButtonRound && g.setAttribute("data-tp-circle", "data-tp-circle"),
                    this.cs.options.floatingPreferencesButtonColor && g.style.setProperty("background-color", this.cs.options.floatingPreferencesButtonColor, "important"),
                    this.cs.options.floatingPreferencesButtonCaptionColor && g.style.setProperty("color", this.cs.options.floatingPreferencesButtonCaptionColor, "important"),
                    document.body.appendChild(v)
                }
                return n.map((function(e) {
                    return e.widget
                }
                ))
            }
        }, {
            key: "shouldHaveUsprWidget",
            value: function() {
                return !!this.cs.options.usprApplies && (!!this.cs.options.usprPreferenceWidget && (!(!this.cs.isPreferenceExpressed() && this.cs.state.needsConsent) && !!this.cs.options.usPreferencesWidgetDisplay))
            }
        }, {
            key: "shouldHaveGdprWidget",
            value: function(e) {
                var t = e && this.cs.isPreferenceExpressed()
                  , n = this.cs.options.floatingPreferencesButtonForceDisplay;
                return !(!t && !n) && !(this.cs.options.showBannerForCH && !this.cs.consent.timestamp)
            }
        }, {
            key: "createUsprPreferenceWidget",
            value: function(e, t) {
                return "boolean" == typeof t || "string" == typeof t && 0 === t.indexOf("inline-") ? this.createUsprInlinePreferenceWidget(e, t) : this.createUsprFloatingPreferenceWidget(e, t)
            }
        }, {
            key: "createUsprInlinePreferenceWidget",
            value: function(e, t) {
                var n = document.querySelector(".iub__us-widget");
                switch (n || (n = document.createElement("div")),
                n.className = "iub__us-widget",
                t) {
                case "inline-left":
                    n.className += " left";
                    break;
                case "inline-right":
                    n.className += " right"
                }
                var i = "";
                e.uspr && (i += '\n        <a class="iub__us-widget__link iubenda-cs-uspr-link" title="'.concat(Lt("uspr.preference_widget.notice_caption"), '">').concat(Lt("uspr.preference_widget.notice_caption"), "</a>\n      ")),
                e.preference && (i += '\n        <a class="iub__us-widget__link iub__us-widget__link--privacy-choices iubenda-cs-preferences-link" title="'.concat(Lt("uspr.preference_widget.preference_caption"), '">\n          ').concat(Lt("uspr.preference_widget.preference_caption"), "\n        </a>\n      ")),
                n.innerHTML = '<div class="iub__us-widget__wrapper">'.concat(i, "</div>");
                var o = n.querySelector(".iubenda-cs-uspr-link");
                return o && this.cs.handleUsprPPClick(o),
                {
                    container: n,
                    widget: n.querySelector(".iub__us-widget__wrapper")
                }
            }
        }, {
            key: "createUsprFloatingPreferenceWidget",
            value: function(e, t) {
                var n = document.querySelector(".iubenda-uspr-btn");
                n || (n = document.createElement("div")),
                n.className = "iubenda-uspr-btn",
                n.setAttribute("data-tp-nostyle", !0);
                var i = "";
                if (e.preference) {
                    i += '\n        <a class="iubenda-cs-preferences-link" title="'.concat(Lt("uspr.preference_widget.preference_caption"), '">\n          <img\n            src="').concat("data:image/svg+xml;charset=UTF-8,%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 30 14' style='enable-background:new 0 0 30 14;' xml:space='preserve'%3e%3cstyle type='text/css'%3e .st0%7bfill-rule:evenodd;clip-rule:evenodd;fill:%23FFFFFF;%7d .st1%7bfill-rule:evenodd;clip-rule:evenodd;fill:%230066FF;%7d .st2%7bfill:%23FFFFFF;%7d .st3%7bfill:%230066FF;%7d %3c/style%3e%3cg%3e%3cg id='final---dec.11-2020_1_'%3e%3cg id='_x30_208-our-toggle_2_' transform='translate(-1275.000000, -200.000000)'%3e%3cg id='Final-Copy-2_2_' transform='translate(1275.000000, 200.000000)'%3e%3cpath class='st0' d='M7.4,12.8h6.8l3.1-11.6H7.4C4.2,1.2,1.6,3.8,1.6,7S4.2,12.8,7.4,12.8z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg id='final---dec.11-2020'%3e%3cg id='_x30_208-our-toggle' transform='translate(-1275.000000, -200.000000)'%3e%3cg id='Final-Copy-2' transform='translate(1275.000000, 200.000000)'%3e%3cpath class='st1' d='M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8 h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z'/%3e%3cpath id='x' class='st2' d='M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0 l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8 c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z'/%3e%3cpath id='y' class='st3' d='M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0 L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e ", '"\n            alt="').concat(Lt("uspr.preference_widget.preference_img_alt"), '"\n          />\n          ').concat(Lt("uspr.preference_widget.preference_caption"), "\n        </a>\n      ")
                }
                e.uspr && (i += '\n        <a class="iubenda-cs-uspr-link" title="'.concat(Lt("uspr.preference_widget.notice_caption"), '">').concat(Lt("uspr.preference_widget.notice_caption"), "</a>\n      ")),
                n.innerHTML = i;
                var o = n.querySelector(".iubenda-cs-uspr-link");
                return o && this.cs.handleUsprPPClick(o),
                n.style.setProperty("z-index", e.floatingPreferencesButtonZIndex, "important"),
                n.setAttribute("data-tp-float", t),
                {
                    widget: n,
                    container: n
                }
            }
        }, {
            key: "hideFloatingPreferencesButton",
            value: function() {
                var e = document.querySelector(".iubenda-tp-btn.iubenda-cs-preferences-link");
                if (e)
                    e.style.setProperty("display", "none", "important");
                else {
                    var t = document.querySelector(".iubenda-uspr-btn");
                    t && t.style.setProperty("display", "none", "important")
                }
            }
        }, {
            key: "showFloatingPreferencesButton",
            value: function() {
                var e = document.querySelector(".iubenda-tp-btn.iubenda-cs-preferences-link");
                if (e)
                    e.style.setProperty("display", "inline-block", "important");
                else {
                    var t = document.querySelector(".iubenda-uspr-btn");
                    t && t.style.setProperty("display", "inline-flex", "important")
                }
            }
        }, {
            key: "generateFloatingPreferencesButton",
            value: function() {
                var e = this;
                ye((function() {
                    var t, n = g(e.createPreferencesWidgets());
                    try {
                        for (n.s(); !(t = n.n()).done; ) {
                            var i = t.value;
                            Cn(i)
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                }
                ), !0)
            }
        }, {
            key: "generateWarningButton",
            value: function(e, t) {
                var n = new Mn(e,t,{
                    checkVisibility: !0
                });
                document.body.appendChild(n.getNode()),
                n.ensureVisibility()
            }
        }, {
            key: "getCookiePolicyHref",
            value: function() {
                return this.cs.options.cookiePolicyUrl || "https://www.iubenda.com/privacy-policy/" + this.cs.options.cookiePolicyId + "/cookie-policy?an=no&s_ck=false&newmarkup=yes"
            }
        }, {
            key: "cookiePolicyLoaded",
            value: function() {
                this.cs.debug("cookie policy shown"),
                this.showingCookiePolicy = !0,
                _iub.cs.fireCallback("onCookiePolicyShown")
            }
        }, {
            key: "registerEvent",
            value: function(e) {
                switch (e) {
                case "documentClicked":
                    this.consentAccepted = !0;
                    break;
                case Wn:
                    this.consentRejected = !0;
                    break;
                case "bannerAcceptClicked":
                case Hn:
                    this.consentAccepted = !0
                }
            }
        }, {
            key: "getPreferenceObject",
            value: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = {};
                if (this.cmpWidget) {
                    var o = this.cmpWidget.getCustomPreferences();
                    i.tcfv2 = this.cmpWidget.getPreferenceString() || {},
                    i.gac = o.gac
                }
                this.preferenceState.processState(i);
                var a = this.preferenceState.getState()
                  , r = this.cs.checkConsentGiven(e)
                  , s = t(t({
                    consent: r,
                    ccpa: r
                }, a), n);
                return this.cs.usPurposes && (s.uspr = this.cs.usPurposes.getPreferences()),
                s
            }
        }, {
            key: "cookiePolicyClosed",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.eventName || "cookiePolicyClosed";
                if (this.cs.debug("cookie policy closed"),
                this.showingCookiePolicy = !1,
                "backButtonClick" !== t && this.CPiFrame.closureTriggeredByFooterButton) {
                    this.registerEvent(t);
                    var n = this.getPreferenceObject(t);
                    this.cs.setGeneralPreference(n, t, !0),
                    this.banner.removeBanner(),
                    this.emit("try-consent-given")
                }
                this.cs.setCpOpen(!1)
            }
        }, {
            key: "showPPCcpaSection",
            value: function(e) {
                this.showCP(e, !1, !1, !0)
            }
        }, {
            key: "showPPUsprSection",
            value: function(e) {
                this.showCP(e, !1, !1, "uspr")
            }
        }, {
            key: "bannerCloseBtnClicked",
            value: function(e) {
                this.cs.debug("banner X clicked"),
                this.cs.options.banner.closeButtonRejects ? this.onRejectButtonClick(e) : this.banner.scrollBannerIfNeeded(Gn.bind(this), e)
            }
        }, {
            key: "onRejectButtonClick",
            value: function(e) {
                this.cs.debug("banner Reject clicked"),
                this.banner.scrollBannerIfNeeded(qn.bind(this), e)
            }
        }, {
            key: "getViewportSize",
            value: function(e) {
                var t = e || document;
                if (this.isMobile) {
                    var n = this.inParent ? parent.window : window;
                    return {
                        width: n.innerWidth || t.clientWidth,
                        height: n.innerHeight || t.clientHeight
                    }
                }
                return {
                    width: Math.max(t.clientWidth || 0, window.innerWidth || 0),
                    height: Math.max(t.clientHeight || 0, window.innerHeight || 0)
                }
            }
        }, {
            key: "disablePageScrolling",
            value: function(e, t) {
                var n = (t || document).getElementsByTagName("html")[0].style
                  , i = this.originalHtmlOverflow[this.originalHtmlOverflow.length - 1];
                i && i.callerName === e || (this.originalHtmlOverflow.push({
                    callerName: e,
                    general: n.overflow,
                    x: n.overflowX,
                    y: n.overflowY
                }),
                n.removeProperty("overflow"),
                n.overflowX = n.overflowY = "hidden")
            }
        }, {
            key: "restorePageScrolling",
            value: function(e, t) {
                var n = this.originalHtmlOverflow[this.originalHtmlOverflow.length - 1];
                if (n && n.callerName === e) {
                    var i = (t || document).getElementsByTagName("html")[0].style;
                    i.overflow = n.general,
                    i.overflowX = n.x,
                    i.overflowY = n.y,
                    this.originalHtmlOverflow.pop()
                }
            }
        }, {
            key: "isOnlyCcpaConsentGiven",
            value: function() {
                return !(!this.cs.options.ccpaApplies || this.cs.options.gdprApplies || this.cs.options.lgpdApplies || this.cs.options.showBannerForUS) && "" !== this.cs.usPrivacyCookie
            }
        }, {
            key: "getDocHeight",
            value: function() {
                var e = window.document;
                return Math.max(Math.max(e.body.scrollHeight, e.documentElement.scrollHeight), Math.max(e.body.offsetHeight, e.documentElement.offsetHeight), Math.max(e.body.clientHeight, e.documentElement.clientHeight))
            }
        }, {
            key: "closeCPiFrame",
            value: function() {
                this.CPiFrame && this.CPiFrame.closeIFrame(!1)
            }
        }], [{
            key: "parseWidgetPosition",
            value: function(e) {
                var t = e.position
                  , n = e.validPositions
                  , i = e.defaultPosition
                  , o = !1;
                return "string" == typeof t && /^anchored\-/.test(t) && (t = t.replace(/^anchored\-/, ""),
                o = !0),
                -1 === n.indexOf(t) && (t = i,
                o = !1),
                {
                    position: t,
                    isAnchored: o
                }
            }
        }, {
            key: "createGdprPreferenceWidget",
            value: function(e, t) {
                var n, i = document.createElement("a");
                return i.className = "iubenda-tp-btn iubenda-cs-preferences-link",
                i.setAttribute("href", "javascript:void();"),
                i.setAttribute("title", Lt("per_purpose.widget_title")),
                (e.floatingPreferencesButtonIcon || !e.floatingPreferencesButtonCaption || e.floatingPreferencesButtonHover) && i.setAttribute("data-tp-icon", "data-tp-icon"),
                e.floatingPreferencesButtonHover && i.setAttribute("data-tp-hover", "data-tp-hover"),
                "string" == typeof e.floatingPreferencesButtonCaption ? n = e.floatingPreferencesButtonCaption : !0 === e.floatingPreferencesButtonCaption && (n = Lt("floating_preferences_button.caption")),
                n && i.setAttribute("data-tp-label", n),
                i.style.setProperty("z-index", e.floatingPreferencesButtonZIndex, "important"),
                i.setAttribute("data-tp-float", t),
                i
            }
        }]),
        e
    }();
    window._iub.setStyle = Te,
    window._iub.onLoadCall = function(e, t) {
        e.onload = t
    }
    ;
    var Jn, Kn, Xn, $n, Zn = function e(t, n, i) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        o >= n.length ? i && i() : t(n[o], (function() {
            e(t, n, i, o + 1)
        }
        ))
    }, Qn = {
        s: !0,
        sh: !0,
        adv: !0,
        sd5: !1,
        sd8: !1,
        sd9: !1
    }, ei = ["s", "sh", "adv"], ti = function(e) {
        return e ? e.filter((function(e) {
            return void 0 !== Qn[e.toString().trim()]
        }
        )) : []
    }, ni = function() {
        function e(t) {
            i(this, e),
            this.purposes = {},
            this.preferenceState = {},
            this.GPCSignalPurposes = null,
            this.userConsentGiven = !1,
            this.hasSensitiveData = !1,
            this.setActivePurposes(t || ei)
        }
        return a(e, [{
            key: "getGPCSignalPurposes",
            value: function() {
                if (null !== this.GPCSignalPurposes)
                    return this.GPCSignalPurposes;
                var e = navigator.globalPrivacyControl;
                return this.GPCSignalPurposes = void 0 !== e ? ["s", "sh"] : [],
                this.GPCSignalPurposes
            }
        }, {
            key: "validatePurposes",
            value: function(e) {
                var t = e;
                "string" == typeof e && (t = e.split(",").map((function(e) {
                    return e.trim()
                }
                )));
                var n = Object.keys(Qn);
                return t && (n = n.filter((function(e) {
                    return t.indexOf(e) >= 0
                }
                ))),
                n
            }
        }, {
            key: "setAllPurposesValue",
            value: function(e) {
                var t = this
                  , n = Object.keys(this.purposes)
                  , i = this.getGPCSignalPurposes();
                n.forEach((function(n) {
                    i.indexOf(n) < 0 && (t.purposes[n] = e)
                }
                ))
            }
        }, {
            key: "setPurposesValue",
            value: function(e, t) {
                var n = {};
                e.forEach((function(e) {
                    n[e] = t
                }
                )),
                this.purposes = n
            }
        }, {
            key: "setPurposesDefaultValue",
            value: function(e) {
                var t = {}
                  , n = this.getGPCSignalPurposes();
                e.forEach((function(e) {
                    var i = Qn[e];
                    n.indexOf(e) >= 0 && (i = 0 === navigator.globalPrivacyControl);
                    t[e] = i
                }
                )),
                this.purposes = t
            }
        }, {
            key: "setActivePurposes",
            value: function(e) {
                var t = this.validatePurposes(e);
                this.setPurposesDefaultValue(t),
                this.setHasSensitiveData()
            }
        }, {
            key: "overwriteActivePurposes",
            value: function(e) {
                var t = this.validatePurposes(e);
                t.length && (this.setPurposesDefaultValue(t),
                this.setHasSensitiveData())
            }
        }, {
            key: "setHasSensitiveData",
            value: function() {
                var e = Object.keys(this.purposes);
                this.hasSensitiveData = this.itHasSensitiveData(e)
            }
        }, {
            key: "itHasSensitiveData",
            value: function(e) {
                return e.some((function(e) {
                    return /^sd\d+/.test(e)
                }
                ))
            }
        }, {
            key: "setPreferences",
            value: function(e) {
                var t = this
                  , n = e.all
                  , i = p(e, ["all"])
                  , o = Object.keys(i);
                this.userConsentGiven = !0,
                "boolean" == typeof n && this.setPurposesValue(Object.keys(this.purposes), n),
                o.forEach((function(n) {
                    "boolean" == typeof e[n] && void 0 !== t.purposes[n] && (t.purposes[n] = e[n])
                }
                ))
            }
        }, {
            key: "checkPurposes",
            value: function(e) {
                var t = this
                  , n = this.validatePurposes(e);
                if (!n.length)
                    return null;
                if (!this.userConsentGiven && this.hasSensitiveData)
                    return !1;
                var i = n.filter((function(e) {
                    return !!t.purposes[e]
                }
                ));
                return y(i, n)
            }
        }, {
            key: "savePreferenceState",
            value: function() {
                this.preferenceState = t({}, this.purposes)
            }
        }, {
            key: "clearPreferenceState",
            value: function() {
                this.preferenceState = {}
            }
        }, {
            key: "recoveryPreferenceState",
            value: function() {
                Object.keys(this.preferenceState).length && (this.purposes = t({}, this.preferenceState),
                this.clearPreferenceState())
            }
        }, {
            key: "getPreferences",
            value: function() {
                return this.purposes
            }
        }, {
            key: "filterUsprPurpose",
            value: function(e) {
                return ti(e)
            }
        }]),
        e
    }(), ii = function() {
        function e(t) {
            i(this, e),
            this.purposes = t
        }
        return a(e, [{
            key: "size",
            value: function() {
                return Object.keys(this.purposes).length
            }
        }, {
            key: "hasPurpose",
            value: function(e) {
                return void 0 !== this.purposes[e]
            }
        }, {
            key: "getPurposeIDByName",
            value: function(e) {
                var t = this;
                return Object.keys(this.purposes).filter((function(n) {
                    return t.purposes[n] === e
                }
                ))[0] || null
            }
        }, {
            key: "getPurposeNameByID",
            value: function(e) {
                return this.purposes[e] || null
            }
        }, {
            key: "toIDArray",
            value: function() {
                return Object.keys(this.purposes)
            }
        }]),
        e
    }(), oi = new ii({
        1: "necessary",
        2: "basic",
        3: "enhancement",
        4: "analytics",
        5: "advertising"
    });
    ii.fromList = function(e) {
        for (var t = e.split(","), n = {}, i = 0, o = t.length; i < o; ++i) {
            var a = t[i].trim()
              , r = parseInt(a, 10);
            if (a)
                if (isNaN(r)) {
                    var s = oi.getPurposeIDByName(a);
                    s && (n[s] = a)
                } else {
                    oi.getPurposeNameByID(r) && (n[r] = oi.getPurposeNameByID(r))
                }
        }
        return new ii(n)
    }
    ,
    ii.allPurposes = oi;
    var ai = null !== (Jn = null === (Kn = _iub.csConfiguration) || void 0 === Kn ? void 0 : Kn.rebuildIframe) && void 0 !== Jn ? Jn : Je.rebuildIframe
      , ri = null !== (Xn = null === ($n = _iub.csConfiguration) || void 0 === $n ? void 0 : $n.inlineDelay) && void 0 !== Xn ? Xn : Je.inlineDelay
      , si = ["_iub_cs_activate-inline", "_iub_cs_activate", "_iub_cs_activate_iframe", "_iub_cs_activate_notused", "_iub_cs_prompt"]
      , ci = "_iub_cs_activate-activated"
      , li = "_iub_cs_activate-overlay"
      , pi = "_iub_cs_prompt"
      , ui = "data-iub-purposes"
      , di = document.write
      , hi = document.writeln;
    function fi(e, t) {
        var n = t.addRef
          , i = t.removeRef
          , o = e.parentNode
          , a = e.nextSibling
          , r = ""
          , s = o
          , c = null
          , l = function() {
            var e = document.implementation.createHTMLDocument("");
            return e.open(),
            e.write("<html><head></head><body>"),
            e
        }()
          , p = be(l.body);
        p.reiterate(),
        p.next();
        var u = l.body;
        function d(e) {
            var t = /(\<[\n\s]*\/[\n\s]*script[\n\s]*>)/gi
              , d = r + e
              , f = [];
            t.lastIndex = r.length;
            for (var b = t.lastIndex; t.exec(d); ) {
                var m = t.lastIndex;
                f.push({
                    chunk: d.substring(b, m),
                    lastNodeIsScript: !0
                }),
                b = m
            }
            var g = d.substring(b);
            g && f.push({
                chunk: g,
                lastNodeIsScript: !1
            }),
            f.forEach((function(e) {
                var t = e.chunk
                  , d = e.lastNodeIsScript;
                r += t,
                function(e, t) {
                    l.write(e),
                    p.reiterate();
                    var r, d = function(e) {
                        for (var t = e; t.childNodes.length; )
                            t = t.childNodes[t.childNodes.length - 1];
                        return t
                    }(l.body);
                    if (c && (c.nodeValue = u.nodeValue),
                    d !== u || t)
                        for (u = d; ; ) {
                            var f = h(p.next().value, 2)
                              , b = f[0]
                              , m = f[1];
                            if (m)
                                if ("enter" === b) {
                                    var g = m.cloneNode(!1);
                                    g.nodeType === Node.ELEMENT_NODE && me(g) && ((r = g).hasAttribute("type") && r.setAttribute("data-iub-type", r.getAttribute("type")),
                                    r.setAttribute("type", "text/plain"),
                                    r.setAttribute("data-iub-script", "true"));
                                    var v = s === o ? a : null;
                                    if (s.insertBefore(g, v),
                                    g.nodeType === Node.ELEMENT_NODE && (s = g),
                                    c = g.nodeType === Node.TEXT_NODE ? g : null,
                                    !t && m === d)
                                        break
                                } else if (c = null,
                                m.nodeType === Node.ELEMENT_NODE) {
                                    if (me(s)) {
                                        var y = s
                                          , k = document.createElement("script");
                                        ve(k, ve(y)),
                                        ge(k),
                                        k.appendChild(document.createTextNode(y.innerHTML)),
                                        k.hasAttribute("src") && (k.async = !1,
                                        k.addEventListener("load", (function() {
                                            return i()
                                        }
                                        )),
                                        k.addEventListener("error", (function() {
                                            return i()
                                        }
                                        )),
                                        n()),
                                        s = y.parentNode,
                                        y.parentNode.replaceChild(k, y);
                                        break
                                    }
                                    s = s.parentNode
                                }
                        }
                }(t, d)
            }
            ))
        }
        document.write = d,
        document.writeln = function(e) {
            return d(e + "\n")
        }
    }
    function bi(e) {
        return e.getAttribute("data-suppressedsrc") || e.getAttribute("suppressedsrc") || e.getAttribute("src")
    }
    function mi(e, t) {
        return e.getAttribute("data-suppressed" + t) || e.getAttribute("suppressed" + t) || e.getAttribute(t)
    }
    function gi(e, t) {
        if (!e.src)
            return t(null, e);
        var n = "onreadystatechange"
          , i = e.onload
          , o = e.onerror
          , a = e.onreadystatechange;
        function r(n, r) {
            if (e.onload = i,
            e.onerror = o,
            e.onreadystatechange = a,
            e[n])
                try {
                    e[n].apply(e, r)
                } catch (e) {
                    console.error(e)
                }
            !e.readyState || /^c|loade/.test(e.readyState) ? t(null, e) : s()
        }
        function s() {
            e.onload = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                r("onload", t)
            }
            ,
            e.onerror = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                r("onerror", t)
            }
            ,
            e.onreadystatechange = function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                r(n, t)
            }
        }
        s()
    }
    var vi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , yi = function(e) {
        return new Error("Error on loading tag " + e.nodeName + " with id " + e.id + " and class " + e.className)
    }
      , ki = function e(t, n) {
        var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        i && t.removeEventListener("load", e),
        xi(n, null, t)
    }
      , wi = function(e, t) {
        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        n && e.removeEventListener("error", ki);
        var i = yi(e);
        "function" == typeof t && t(i, e)
    }
      , Ci = function(e, t) {
        e.removeAttribute("data-suppressed" + t),
        e.removeAttribute("suppressed" + t)
    }
      , xi = function(e, t, n) {
        "function" == typeof e && e(t, n)
    }
      , Pi = function(e, t) {
        e.addEventListener("load", ki.bind(null, e, t)),
        e.addEventListener("error", wi.bind(null, e, t)),
        e.setAttribute("href", mi(e, "href")),
        Ci(e, "href"),
        we(e, ci)
    }
      , _i = function(e, t) {
        var n = bi(e)
          , i = mi(e, "poster");
        i && (e.setAttribute("poster", i),
        Ci(e, "poster"));
        n && Ei(e, t),
        e.querySelectorAll("source").forEach((function(e) {
            Ei(e)
        }
        )),
        e.querySelectorAll("track").forEach((function(e) {
            Ei(e)
        }
        )),
        e.addEventListener("loadedmetadata", (function n() {
            xi(t, null, e),
            e.removeEventListener("loadedmetadata", n)
        }
        )),
        e.addEventListener("error", (function n() {
            xi(t, yi(e), e),
            e.removeEventListener("error", n)
        }
        )),
        e.load(),
        we(e, ci)
    }
      , Si = _i;
    function Ai(e, t) {
        var n = bi(e)
          , i = e.text || e.textContent || e.innerHTML || "";
        i = i.replace(vi, "");
        var o = ve(e)
          , a = o.suppressedtype || o["data-iub-type"] || "text/javascript";
        delete o["data-suppressedsrc"],
        delete o.suppressedsrc,
        delete o.type,
        delete o.src,
        delete o.suppressedtype,
        delete o["data-iub-type"],
        o.async = !1;
        var r = function(e, t) {
            var n = document.createElement("script");
            return n.setAttribute("type", "text/javascript"),
            e && n.setAttribute("src", e),
            "string" == typeof t && (n.text = t),
            n
        }(n, i);
        if (r.setAttribute("type", a),
        ve(r, o),
        we(r, ci),
        gi(r, t),
        pe(document, e)) {
            var s = ue("div");
            fe(e, s),
            de(e),
            he(s, r)
        } else
            document.body.appendChild(r)
    }
    function Bi(e, t) {
        var n = e.getAttribute(ui);
        return null !== n ? ii.fromList(n).toIDArray() : _iub.cs && _iub.cs.purposes ? _iub.cs.purposes.toIDArray() : t ? t.toIDArray() : []
    }
    function Oi(e, t) {
        var n = bi(e)
          , i = e.text || e.textContent || e.innerHTML || "";
        i = i.replace(vi, "");
        var o = ve(e);
        delete o["data-suppressedsrc"],
        delete o.suppressedsrc,
        delete o.type,
        delete o.src,
        o.async = !1;
        var a = ue("div");
        fe(e, a),
        de(e);
        var r = function(e, t) {
            var n = document.createElement("iframe");
            return e && n.setAttribute("src", e),
            "string" == typeof t && (n.text = t),
            n
        }(n, i);
        ve(r, o),
        gi(r, t),
        we(r, ci),
        he(a, r)
    }
    var Ii = function(e, t, n) {
        var i, o, a = function() {
            s += 1
        }, r = function() {
            (s -= 1) <= 0 && (document.write = di,
            document.writeln = hi,
            o && Ke.error("Snippet activation failed", o, i || e),
            t && t(!o && i),
            t = c = e = null)
        }, s = 0;
        a(),
        fi(e, {
            addRef: a,
            removeRef: r
        });
        var c = function(e) {
            return !!e.className.match(/\b_iub_cs_activate-inline\b/)
        }(e) ? ri : 0;
        n((function(e, t) {
            setTimeout((function() {
                o = e,
                i = t,
                r()
            }
            ), c)
        }
        ))
    }
      , Ti = function(e, t) {
        var n = e.getAttribute("data-iub-cs-wait-for");
        if (n)
            var i = setInterval((function() {
                (function(e) {
                    try {
                        return eval.call(window, e)
                    } catch (e) {
                        return !1
                    }
                }
                )(n) && (clearInterval(i),
                t())
            }
            ), 100);
        else
            t()
    }
      , Li = function(e, t) {
        e[t] = mi(e, t),
        e.removeAttribute("suppressed" + t),
        e.removeAttribute("data-suppressed" + t)
    }
      , Ei = function(e, t) {
        Li(e, "src"),
        e.removeAttribute("type"),
        xi(t, null, e)
    }
      , Ni = function(e, t) {
        Li(e, "srcset"),
        xi(t, null, e)
    }
      , Di = function(e, t) {
        try {
            se(e, "script") ? Ai(e, t) : se(e, "iframe") && ai ? Oi(e, t) : se(e, "link") ? Pi(e, t) : se(e, "video") ? _i(e, t) : se(e, "audio") ? Si(e, t) : se(e, "object") ? function(e, t) {
                var n = mi(e, "data");
                n ? (e.setAttribute("data", n),
                Ci(e, "data"),
                xi(t, null, e)) : xi(t, yi(e), e),
                we(e, ci)
            }(e, t) : se(e, "picture") ? function(e, t) {
                var n = e.querySelector("img");
                if (n) {
                    var i = bi(n);
                    n.setAttribute("src", i),
                    Ci(n, "src")
                }
                e.querySelectorAll("source").forEach((function(e) {
                    Ni(e)
                }
                )),
                xi(t, null, e),
                we(e, ci)
            }(e, t) : e.getAttribute("suppressedcontent") ? function(e, t) {
                var n = ve(e).suppressedcontent;
                e.innerHTML = n,
                xi(t, null, e),
                we(e, ci)
            }(e, t) : (Ei(e, t),
            we(e, ci))
        } catch (e) {
            t(e)
        }
    }
      , Fi = 0
      , Vi = 1
      , zi = 2
      , Ri = function() {
        function e() {
            i(this, e),
            this.lastActivationParams = {},
            ot(this)
        }
        return a(e, [{
            key: "activateSnippet",
            value: function(e, t) {
                var n = this;
                Ii(e, t, (function(t) {
                    Ti(e, (function() {
                        Di(e, (function(e, i) {
                            !n.activateSuppressedContent ? (n.emit("snippet-activated", i),
                            t(e, i)) : n.activateSuppressedContent(e, i, (function(e, i) {
                                n.emit("snippet-activated", i),
                                t(e, i)
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ))
            }
        }, {
            key: "activateSuppressedContent",
            value: function(e, t, n) {
                var i = this;
                t ? !t.getAttribute("suppressedcontent") || e ? n(e, t) : ae("._iub_cs_activate-inline,._iub_cs_activate").forEach((function(e) {
                    i.getElementActivationStatus(e, i.lastActivationParams.options, i.lastActivationParams.preference, i.lastActivationParams.isCcpaOptedOut) === Vi && Di(e, n)
                }
                )) : n(e, t)
            }
        }, {
            key: "insertOverlay",
            value: function(e, t, n, i) {
                var o = this
                  , a = function(e, t) {
                    if (!t)
                        return [];
                    var n = e.getAttribute(ui);
                    return t.validatePurposes(n)
                }(n, t.usPurposesPreference)
                  , r = Bi(n, t.purposesPreference)
                  , s = [].concat(f(a), f(r));
                if ("IFRAME" !== n.nodeName)
                    return n.classList.add(li),
                    n.setAttribute("suppressedcontent", n.innerHTML),
                    n.innerHTML = e(_iub.cs.options.lang, s, !0),
                    n.querySelector(".iubenda-cs__preferences-link").addEventListener("click", (function() {
                        _iub.cs.api.openPreferences({
                            acceptPurposes: s
                        })
                    }
                    )),
                    void i();
                var c = function t() {
                    "about:blank" === n.src && (n.removeEventListener("load", t),
                    n.contentDocument.open(),
                    n.contentDocument.write(e(_iub.cs.options.lang, s)),
                    n.contentDocument.close(),
                    n.contentDocument.querySelector(".iubenda-cs__preferences-link").addEventListener("click", (function() {
                        _iub.cs.api.openPreferences({
                            acceptPurposes: s
                        })
                    }
                    )),
                    o.emit("overlay-inserted", n),
                    i())
                };
                if ("about:blank" !== n.src) {
                    if (ai) {
                        var l = document.createElement("iframe");
                        ve(l, ve(n)),
                        n.parentNode.replaceChild(l, n),
                        n = l
                    }
                    return n.classList.add(li),
                    n.addEventListener("load", c),
                    void (n.src = "about:blank")
                }
                c()
            }
        }, {
            key: "activateSnippets",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
                ;
                this.emit("before-activate-snippets", e),
                Ke.debug("Running activateSnippets on", e.length, "elems"),
                Zn(this.activateSnippet.bind(this), e, t)
            }
        }, {
            key: "insertOverlays",
            value: function(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {}
                ;
                e ? (Ke.debug("Running insertOverlays on", n.length, "elems"),
                Zn(this.insertOverlay.bind(this, e, t), n, i)) : i()
            }
        }, {
            key: "activateAllSnippets",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = arguments.length > 2 ? arguments[2] : void 0
                  , o = arguments.length > 3 ? arguments[3] : void 0;
                this.lastActivationParams = {
                    options: n,
                    preference: i,
                    isCcpaOptedOut: o
                },
                Ke.debug("Running activateAllSnippets");
                var a = le(si)
                  , r = []
                  , s = []
                  , c = []
                  , l = n.promptToAcceptOnBlockedElements && (n.perPurposeConsent || n.usprApplies);
                a.forEach((function(e) {
                    var a = t.getElementActivationStatus(e, n, i, o);
                    a !== Vi ? a === zi && !e.classList.contains(li) && l && ("IFRAME" === e.nodeName ? s.push(e) : e.classList.contains(pi) && c.push(e)) : r.push(e)
                }
                ));
                var p = function(e, t, i) {
                    return i && _t(),
                    n.renderOverlay(e, t, {
                        styleOptions: n.banner
                    }, i)
                }
                  , u = n.renderOverlay ? p : null;
                this.activateSnippets(r, (function() {
                    var n = [].concat(s, c);
                    t.insertOverlays(u, i, n, (function() {
                        Ke.debug("activateAllSnippets done, calling done callback..."),
                        t.emit("all-snippets-activated"),
                        e && e()
                    }
                    ))
                }
                ))
            }
        }, {
            key: "activateOnDomReady",
            value: function(e, t, n, i) {
                var o = this;
                ye((function() {
                    o.activateAllSnippets(e, t, n, i)
                }
                ), !0)
            }
        }, {
            key: "hasAllUSPurposeApproved",
            value: function(e, t) {
                var n = e.getAttribute(ui);
                return t && n ? t.checkPurposes(n) : null
            }
        }, {
            key: "hasOnlyUSPurposes",
            value: function(e) {
                var t = e.getAttribute(ui);
                if (!t)
                    return null;
                var n = t.split(",").map((function(e) {
                    return e.trim()
                }
                ));
                return y(n, ti(n))
            }
        }, {
            key: "getElementActivationStatus",
            value: function(e, t, n, i) {
                if (xe(e, ci))
                    return Fi;
                if (this.isNecessaryPurpose(e))
                    return Vi;
                if (i && this.shouldElementBeBlockedForCcpa(e))
                    return zi;
                if (!1 === this.hasAllUSPurposeApproved(e, n.usPurposesPreference))
                    return zi;
                if (!1 === t.gdprApplies && !1 === t.lgpdApplies && !1 === t.fadpApplies)
                    return Vi;
                var o = this.purposesPreferenceIsNotEmpty(n.purposesPreference) && function(e, t) {
                    var n = Bi(e, t);
                    return !n.length || t.hasApproved(n)
                }(e, n.purposesPreference);
                if (t.perPurposeConsent && !o)
                    return zi;
                var a = this.hasOnlyUSPurposes(e);
                return t.perPurposeConsent || n.consent || a ? !1 === this.purposesPreferenceIsValid(e, n.purposesPreference, t) && !a ? zi : Vi : zi
            }
        }, {
            key: "shouldElementBeBlockedForCcpa",
            value: function(e) {
                var t = e.getAttribute("data-iub-blockifccpaoptout");
                return null !== t && "false" !== t.toLowerCase()
            }
        }, {
            key: "purposesPreferenceIsNotEmpty",
            value: function(e) {
                return !(!e || !Object.keys(e.preferences).length)
            }
        }, {
            key: "purposesPreferenceIsValid",
            value: function(e, t, n) {
                var i = e.getAttribute(ui)
                  , o = i ? ii.fromList(i).size() : 0;
                if (!t || "string" != typeof n.purposes || !o)
                    return null;
                var a = ii.fromList(n.purposes).toIDArray();
                return t.hasExpressed(a)
            }
        }, {
            key: "isNecessaryPurpose",
            value: function(e) {
                return 1 === Number(e.getAttribute(ui)) || "neccessary" === e.getAttribute(ui)
            }
        }]),
        e
    }();
    _iub.csActivator = new Ri;
    var ji = function(e) {
        var t = new Date(e);
        return Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())
    }
      , Mi = function() {
        function e() {
            i(this, e),
            this.preferences = {},
            this.savedPreferencesState = {}
        }
        return a(e, [{
            key: "size",
            value: function() {
                return Object.keys(this.preferences).length
            }
        }, {
            key: "setPreference",
            value: function(e, t) {
                this.preferences[e] = t
            }
        }, {
            key: "getPreferenceByPurposeID",
            value: function(e) {
                return this.preferences[e] || null
            }
        }, {
            key: "hasGivenPreference",
            value: function(e) {
                var t = this;
                return !e.filter((function(e) {
                    return void 0 === t.preferences[e]
                }
                ))[0]
            }
        }, {
            key: "approveUnexpressedPreferences",
            value: function(e) {
                var t = this
                  , n = e.filter((function(e) {
                    return void 0 === t.preferences[e]
                }
                ));
                this.express(n, !0)
            }
        }, {
            key: "disapproveUnexpressedPreferences",
            value: function(e) {
                var t = this
                  , n = e.filter((function(e) {
                    return void 0 === t.preferences[e]
                }
                ));
                this.express(n, !1)
            }
        }, {
            key: "hasExpressed",
            value: function(e) {
                if (0 === e.length)
                    return !1;
                for (var t = 0, n = e.length; t < n; ++t) {
                    var i = e[t];
                    if (void 0 === this.preferences[i])
                        return !1
                }
                return !0
            }
        }, {
            key: "hasApproved",
            value: function(e) {
                if (0 === e.length)
                    return !1;
                for (var t = 0, n = e.length; t < n; ++t) {
                    var i = e[t];
                    if (!0 !== this.preferences[i])
                        return !1
                }
                return !0
            }
        }, {
            key: "hasDisapproved",
            value: function(e) {
                if (0 === e.length)
                    return !1;
                for (var t = 0, n = e.length; t < n; ++t) {
                    var i = e[t];
                    if (!1 !== this.preferences[i])
                        return !1
                }
                return !0
            }
        }, {
            key: "express",
            value: function(e, t) {
                for (var n = 0, i = e.length; n < i; ++n) {
                    var o = e[n];
                    this.preferences[o] = t
                }
            }
        }, {
            key: "saveCurrentPreferencesState",
            value: function() {
                this.savedPreferencesState = t({}, this.preferences)
            }
        }, {
            key: "clearCurrentPreferencesState",
            value: function() {
                this.savedPreferencesState = {}
            }
        }, {
            key: "goBackToSavedState",
            value: function() {
                Object.keys(this.savedPreferencesState).length && (this.preferences = t({}, this.savedPreferencesState))
            }
        }, {
            key: "getPreferences",
            value: function() {
                return Object.assign({}, this.preferences)
            }
        }, {
            key: "toJSON",
            value: function() {
                return JSON.stringify(this.preferences)
            }
        }, {
            key: "toIDArray",
            value: function() {
                return Object.keys(this.preferences)
            }
        }]),
        e
    }();
    function Ui(e, t, n, i) {
        var o = i
          , a = n;
        "function" == typeof a && (o = a,
        a = {}),
        o = o || function() {}
        ;
        var r, s = ((a = a || {}).method || "GET").toUpperCase(), c = !1 !== a.async, l = a.xhr || new XMLHttpRequest, p = a.headers || {};
        "GET" !== s && "form" !== a.type || (r = function(e) {
            return Object.keys(e).map((function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
            }
            )).join("&")
        }(t));
        var u, d = e;
        return "GET" === s && (d += r.length ? "?" + r : ""),
        l.open(s, d, c),
        l.onreadystatechange = function() {
            if (4 === l.readyState)
                if (200 === l.status || 304 === l.status) {
                    var e = (l.getResponseHeader("Content-Type") || "").match(/^application\/json\s*(;|$)/);
                    o(null, e ? JSON.parse(l.responseText || "") : l.responseText)
                } else
                    o(l)
        }
        ,
        "GET" !== s && ("json" === a.type ? (l.setRequestHeader("Content-Type", "application/json"),
        u = JSON.stringify(t)) : "form" === a.type ? (l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        u = r) : u = "" + t),
        Object.keys(p).forEach((function(e) {
            l.setRequestHeader(e, p[e])
        }
        )),
        l.send(u),
        l
    }
    var Wi = function() {
        function e(t) {
            var n;
            i(this, e),
            this.cs = t,
            this.browserDetect = new M,
            this.settings = {
                inDelay: 100,
                influx: {
                    serverUrl: "https://hits-i.iubenda.com",
                    dbName: "hits1"
                }
            },
            this.state = {
                enabled: !(!0 === (null === (n = this.cs.state) || void 0 === n ? void 0 : n.fromSDK))
            }
        }
        return a(e, [{
            key: "start",
            value: function(e) {
                var t = this;
                setTimeout((function() {
                    t.track("pageview", {
                        e_c: t.cs.options.cookiePolicyId,
                        e_a: e ? "page_view_consent" : "page_view_no_consent"
                    })
                }
                ), this.settings.inDelay)
            }
        }, {
            key: "track",
            value: function(e, t) {
                var n = this;
                if (this.unsupported() || !this.state.enabled)
                    return !0;
                try {
                    var i = "hits,cp=" + t.e_c;
                    "pageview" === e ? i += this.addPriorConsentValue(t.e_a) + ",sf=1" : "consent_given" === e && (i += ",cg=1" + this.addPerPurposeAnalyticsToString() + "," + this.addConsentTypeTag(t.e_n) + "=1"),
                    i += " value=1",
                    Ui(this.settings.influx.serverUrl + "/write?db=" + this.settings.influx.dbName, i, {
                        method: "POST",
                        async: !0
                    }, (function(e, t) {
                        n.cs.debug(e || t)
                    }
                    ))
                } catch (n) {
                    this.cs.debug("Exception while hitting (I) for " + e + ", parameters: (see below), exception : " + (n.message || n)),
                    this.cs.debug(t)
                }
                return !1
            }
        }, {
            key: "unsupported",
            value: function() {
                return "Explorer" === this.browserDetect.browser && this.browserDetect.version < 10 || (!!this.browserDetect.isBotAndShouldSkipBots() || !navigator.cookieEnabled)
            }
        }, {
            key: "addPriorConsentValue",
            value: function(e) {
                var t = ""
                  , n = _iub.csEnabled && (this.cs.isPriorConsent() || this.cs.options.usprApplies);
                return "page_view_consent" === e ? (t += n ? ",pv_cs=1" : ",pv_cs=1,pv_cs_nopc=1",
                t += this.addPerPurposeAnalyticsToString()) : "page_view_no_consent" === e && (t += n ? ",pv_nocs=1" : ",pv_nocs=1,pv_nocs_nopc=1"),
                t
            }
        }, {
            key: "addPerPurposeAnalyticsToString",
            value: function() {
                var e = "";
                this.cs.isConsentGiven() ? e += ",cg_a=1" : this.cs.isConsentRejected() ? e += ",cg_r=1" : e += ",cg_p=1";
                var t = this.getAcceptedPurposes();
                return t && (e += "," + t),
                e
            }
        }, {
            key: "getAcceptedPurposes",
            value: function() {
                if (!this.cs.options.perPurposeConsent)
                    return "";
                var e = this.cs.consent.purposes;
                return Object.keys(e).map((function(t) {
                    return "p" + t + "=" + (e[t] ? 1 : 0)
                }
                )).join(",")
            }
        }, {
            key: "addConsentTypeTag",
            value: function(e) {
                var t;
                switch (e) {
                case "bannerXClose":
                    t = "cg_bx";
                    break;
                case "rejectButtonClick":
                    t = "cg_br";
                    break;
                case "bannerAcceptClicked":
                    t = "cg_ba";
                    break;
                case "documentClicked":
                    t = "cg_dc";
                    break;
                case "cookiePolicyClosed":
                    t = "cg_cpc";
                    break;
                default:
                    t = "cg_na"
                }
                return t
            }
        }, {
            key: "consentGiven",
            value: function(e) {
                this.track("consent_given", {
                    e_c: this.cs.options.cookiePolicyId,
                    e_a: "consent_given",
                    e_n: e
                })
            }
        }]),
        e
    }()
      , Hi = {
        code: 0,
        message: "Not recognized"
    }
      , Gi = {
        code: 1,
        message: "Invalid type"
    }
      , qi = {
        code: 2,
        message: "Invalid format"
    }
      , Yi = {
        code: 3,
        message: "Mismatch"
    }
      , Ji = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
              , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            i(this, e),
            this.invalidType = t,
            this.errorType = a,
            this.propertyName = n,
            this.propertyValue = o
        }
        return a(e, null, [{
            key: "fromProperty",
            value: function(t, n, i, o) {
                return new e(i,t,n,o)
            }
        }, {
            key: "fromPropertyName",
            value: function(t, n, i) {
                return new e(n,t,null,i)
            }
        }, {
            key: "fromInvalidType",
            value: function(t, n) {
                return new e(t,null,null,n)
            }
        }]),
        e
    }()
      , Ki = 0
      , Xi = function e(t, i) {
        for (var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ki, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "", r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [], s = r || [], c = 0, l = Object.keys(t); c < l.length; c++) {
            var p = l[c]
              , u = "" !== a ? "".concat(a, ".").concat(p) : p;
            if (t.hasOwnProperty(p) && !i.hasOwnProperty(p))
                s.push(Ji.fromPropertyName(u, Hi, o));
            else if ("object" === n(t[p]) && null !== t[p] && "object" === n(i[p]) && null !== i[p])
                return e(t[p], i[p], o, u, s)
        }
        return s
    }
      , $i = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ki
          , i = [];
        return Object.keys(e).forEach((function(o) {
            e.hasOwnProperty(o) && !t.hasOwnProperty(o) && i.push(Ji.fromProperty(o, e[o], Hi, n))
        }
        )),
        i
    };
    function Zi(e) {
        var t = n(e);
        return "string" !== t || "string" === t && null === e.match(/^[a-z]{2}$|^[a-z]{2}-[a-z]{2}$/i)
    }
    function Qi(e, t) {
        return e[t].callback && "string" != typeof e[t].callback
    }
    function eo(e, t, n) {
        return e[n]instanceof HTMLElement && !(void 0 !== t[n])
    }
    function to(e, t, i) {
        return "i18n" !== i && "object" === n(e[i]) && null !== e[i] && "object" === n(t[i]) && Object.keys(e[i]).length > 1
    }
    var no = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            i(this, e);
            var o = _(Je, !0);
            if (this.i18nForBanner = tt,
            this.RENAMED_OPTIONS = {
                enableCMP: "enableTcf",
                "banner.usesThirdParties": "banner.useThirdParties",
                "banner.innerHtmlCloseBtn": "banner.closeButtonCaption"
            },
            this._remoteConfig = n || {},
            Object.freeze(this.remoteConfig),
            this.userConfig = {
                showBannerForUS: t.showBannerForUS,
                floatingPreferencesButtonDisplay: t.floatingPreferencesButtonDisplay
            },
            t.lang && !this.isLanguageSupported(t.lang) && (t.i18n && t.i18n[t.lang] && P(this.i18nForBanner.en, t.i18n[t.lang]),
            t.lang = "en"),
            delete t.skipTcfValidation,
            delete t.consApiKey,
            P(this, o),
            P(this, t),
            P(this, this._remoteConfig.csRC || {}),
            P(this, this.getRenamedOptions(t, this.RENAMED_OPTIONS)),
            this.prepareGetters(),
            this.storeOriginalI18nValues(),
            this.setConfiguredI18n(),
            this.logDeprecatedOptionWarning(t, this.RENAMED_OPTIONS),
            this.forceAcceptButtonDisplayIfNeeded(),
            this.setContinueWithoutAccepting(),
            this.setTranslationLanguage(),
            this.setGdprApplies(),
            this.setLgpdApplies(),
            this.setTcfOptions(),
            this.setGoogleAdditionalConsentMode(),
            this.setUsprApplies(),
            this.setCcpaApplies(),
            this.setExplicitWithdrawal(),
            this.setEnableGpp(),
            this.setShowBannerForUS(),
            this.setHasCookiePolicy(),
            this.setHasPrivacyPolicy(),
            this.hasPrivacyPolicy && !this.privacyPolicyUrl && (this.privacyPolicyUrl = "https://www.iubenda.com/privacy-policy/" + this.cookiePolicyId + "/legal?an=no&s_ck=false&newmarkup=yes"),
            !this.noticeAtCollectionUrl) {
                var a = this.privacyPolicyUrl;
                a || (a = "https://www.iubenda.com/privacy-policy/" + this.cookiePolicyId + "/legal"),
                this.noticeAtCollectionUrl = a + "#notice_at_collection"
            }
            this.ccpaCookie && this.ccpaCookie.expireAfter && this.ccpaCookie.expireAfter < 365 && (this.ccpaCookie.expireAfter = 365),
            this.disableGdprOptionsIfNeeded(),
            this.setShowPurposesToggles(),
            this.setShowPurposesCollapsed(),
            this.isFullCustomizationDisabled() && P(this.i18nForBanner[this.lang], this.originalI18n),
            this.forceCustomizeButtonDisplayIfNeeded(),
            this.forceAcceptButtonDisplayIfNeeded(),
            this.forceRejectButtonDisplayIfNeeded(),
            this.forceCloseButtonDisplayIfNeeded(),
            this.setInvalidateConsentBefore(),
            this.merge(o, t),
            this.validationErrors = this.validate(o, t),
            this.validationErrors.map((function(e) {
                e.errorType === Ki && Ke.warn("Configuration ".concat(e.propertyName).concat(e.propertyValue ? " [" + e.propertyValue + "]" : "", ": ").concat(e.invalidType.message))
            }
            ))
        }
        return a(e, [{
            key: "setHasCookiePolicy",
            value: function() {
                void 0 === this.hasCookiePolicy && (this.hasCookiePolicy = !!this.cookiePolicyUrl || !!_iub.cpUpd)
            }
        }, {
            key: "setHasPrivacyPolicy",
            value: function() {
                void 0 === this.hasPrivacyPolicy && (this.hasPrivacyPolicy = !!this.privacyPolicyUrl || !!_iub.ppUpd || !!_iub.cpUpd)
            }
        }, {
            key: "setShowPurposesToggles",
            value: function() {
                !1 !== this.perPurposeConsent && (!0 !== this.usprApplies || !0 !== this.hasSensitiveData) || (this.banner.showPurposesToggles = !1)
            }
        }, {
            key: "setInvalidateConsentBefore",
            value: function() {
                if (this.invalidateConsentBefore && (this.invalidateConsentBefore = new Date(this.invalidateConsentBefore).getTime()),
                this.askConsentAtCookiePolicyUpdate && void 0 !== _iub.cpUpd) {
                    var e = new Date(1e3 * _iub.cpUpd).getTime();
                    this.invalidateConsentBefore = Math.max(this.invalidateConsentBefore || 0, e)
                }
            }
        }, {
            key: "setTcfOptions",
            value: function() {
                if (this.enableTcf) {
                    this.googleAdsPreferenceManagement = !1,
                    this.setTcfValidationOptions(),
                    this.enableTcf = !0;
                    var t = this.tcfPurposes
                      , n = !1;
                    e.tcfDefaultPurposes().forEach((function(e) {
                        e in t ? "1" === e || "li_only" !== t[e] && !0 !== t[e] || (n = !0) : t[e] = !0
                    }
                    )),
                    this.LIRestricted = !n
                }
            }
        }, {
            key: "isBannerHtmlValid",
            value: function(e) {
                if (!e)
                    return !1;
                var t = document.createElement("div");
                t.innerHTML = e;
                var n = /\%\{banner_content\}/.test(t.textContent)
                  , i = t.querySelectorAll(".iubenda-cs-accept-btn").length > 0
                  , o = t.querySelectorAll(".iubenda-cs-customize-btn").length > 0;
                return n && i && o
            }
        }, {
            key: "setTcfValidationOptions",
            value: function() {
                this.skipTcfValidation || (tt[this.lang].banner.dynamic.body = this.originalI18n.banner.dynamic.body,
                this.banner.acceptButtonDisplay = !0,
                this.banner.customizeButtonDisplay = !0)
            }
        }, {
            key: "setGoogleAdditionalConsentMode",
            value: function() {
                this.enableTcf || (this.googleAdditionalConsentMode = !1)
            }
        }, {
            key: "forceCustomizeButtonDisplayIfNeeded",
            value: function() {
                (this.perPurposeConsent && (this.gdprApplies || this.lgpdApplies) || this.usprApplies) && this.banner && (this.banner.customizeButtonDisplay = !0),
                this.fadpApplies && (this.banner.customizeButtonDisplay = this.usprApplies && this.hasUsprPurposesSensitiveData())
            }
        }, {
            key: "forceCloseButtonDisplayIfNeeded",
            value: function() {
                var e = this.banner
                  , t = e.acceptButtonDisplay
                  , n = e.rejectButtonDisplay
                  , i = e.closeButtonRejects
                  , o = e.continueWithoutAcceptingButtonDisplay;
                this.fadpApplies ? this.banner.closeButtonDisplay = !0 : (t && n && !i || o) && (this.banner.closeButtonDisplay = !1)
            }
        }, {
            key: "forceAcceptButtonDisplayIfNeeded",
            value: function() {
                (this.hasUsprPurposesSensitiveData() || this.banner.showPurposesToggles) && (this.banner.acceptButtonDisplay = !0),
                this.banner.acceptButtonDisplay || this.banner.closeButtonDisplay || (this.banner.acceptButtonDisplay = !0),
                this.fadpApplies && (this.banner.acceptButtonDisplay = this.usprApplies && this.hasUsprPurposesSensitiveData())
            }
        }, {
            key: "forceRejectButtonDisplayIfNeeded",
            value: function() {
                this.hasUsprPurposesSensitiveData() && (this.banner.rejectButtonDisplay = !0),
                this.fadpApplies && (this.banner.rejectButtonDisplay = this.usprApplies && this.hasUsprPurposesSensitiveData())
            }
        }, {
            key: "setTranslationLanguage",
            value: function() {
                this.lang && Lt.setLang(this.lang)
            }
        }, {
            key: "setGdprApplies",
            value: function() {
                if (!this.enableGdpr)
                    return this.gdprAppliesGlobally = !1,
                    void (this.gdprApplies = !1);
                if (this.gdprAppliesGlobally)
                    return Ke.info("Setting gdprApplies=true since gdprAppliesGlobally is true"),
                    void (this.gdprApplies = !0);
                if (void 0 === this.gdprApplies) {
                    if (this.countryDetection && "CH" === _iub.cc && this.applyGdprForCH)
                        return Ke.info("Setting gdprApplies=true since applyGdprForCH is true and user is detected from Switzerland"),
                        void (this.gdprApplies = !0);
                    if (!this.gdprAppliesGlobally && this.countryDetection && "EU" !== _iub.cc)
                        return Ke.info("Setting gdprApplies=false since countryDetection is true and user is detected from outside EU (" + _iub.cc + ")."),
                        void (this.gdprApplies = !1);
                    Ke.info("Setting gdprApplies=true by default"),
                    this.gdprApplies = !0
                }
            }
        }, {
            key: "setLgpdApplies",
            value: function() {
                if (!this.enableLgpd)
                    return this.lgpdAppliesGlobally = !1,
                    void (this.lgpdApplies = !1);
                if (void 0 === this.lgpdApplies) {
                    if (!this.lgpdAppliesGlobally && this.countryDetection && "BR" !== _iub.cc)
                        return Ke.info("Setting lgpdApplies=false since countryDetection is true and user is detected from outside BR (" + _iub.cc + ")."),
                        void (this.lgpdApplies = !1);
                    Ke.info("Setting lgpdApplies=true by default"),
                    this.lgpdApplies = !0
                }
            }
        }, {
            key: "setCcpaApplies",
            value: function() {
                if (this.usprApplies)
                    return this.enableCcpa = !0,
                    void (this.ccpaApplies = !0);
                this.enableCcpa && void 0 === this.ccpaApplies && (this.countryDetection && "US-CA" !== _iub.cc ? this.ccpaAppliesToEntireUSA && /^US/.test(_iub.cc) && (this.ccpaApplies = !0) : this.ccpaApplies = !0)
            }
        }, {
            key: "setUsprApplies",
            value: function() {
                !1 !== this.enableUspr ? void 0 === this.usprApplies && (!1 !== this.countryDetection ? this.enableUspr && this.countryDetection && /^US/.test(_iub.cc) ? this.usprApplies = !0 : this.usprApplies = !1 : this.usprApplies = !0) : this.usprApplies = !1
            }
        }, {
            key: "setShowBannerForUS",
            value: function() {
                if (!1 !== this.usprApplies) {
                    if (!0 !== this.userConfig.showBannerForUS) {
                        var e = this.hasUsprPurposesSensitiveData();
                        this.ccpaNoticeDisplay = e,
                        this.showBannerForUS = e
                    }
                } else
                    this.showBannerForUS = !1
            }
        }, {
            key: "hasUsprPurposesSensitiveData",
            value: function() {
                if (!this.usprPurposes && !this.usprApplies)
                    return !1;
                var e = this.usprPurposes ? this.usprPurposes.split(",") : _iub.csPurposes
                  , t = ti(e);
                if (!t.length && !0 === this.usprApplies)
                    return this.hasSensitiveData = !1,
                    !1;
                var n = t.some((function(e) {
                    return /^sd\d+/.test(e.toString().trim())
                }
                ));
                return this.hasSensitiveData = n,
                n
            }
        }, {
            key: "setExplicitWithdrawal",
            value: function() {
                this.enableTcf && (this.banner.explicitWithdrawal = !0)
            }
        }, {
            key: "setEnableGpp",
            value: function() {
                this.usprApplies && (this.enableGpp = !0)
            }
        }, {
            key: "setShowPurposesCollapsed",
            value: function() {
                (this.banner.showPurposesToggles || this.lgpdApplies) && (this.showPurposesCollapsed = !1)
            }
        }, {
            key: "setContinueWithoutAccepting",
            value: function() {
                this.banner.continueWithoutAcceptingButtonDisplay && (this.banner.closeButtonRejects = !0)
            }
        }, {
            key: "disableGdprOptionsIfNeeded",
            value: function() {
                this.gdprApplies || this.lgpdApplies || !this.banner || (this.banner.acceptButtonDisplay = !1,
                this.banner.rejectButtonDisplay = !1,
                this.banner.customizeButtonDisplay = !1,
                this.banner.closeButtonDisplay = !0,
                this.banner.closeButtonRejects = !1)
            }
        }, {
            key: "storeOriginalI18nValues",
            value: function() {
                this.i18n && tt[this.lang] && (this.originalI18n = _(tt[this.lang], !0))
            }
        }, {
            key: "setConfiguredI18n",
            value: function() {
                this.i18n && P(this.i18nForBanner, this.i18n)
            }
        }, {
            key: "isLanguageSupported",
            value: function(e) {
                return "string" == typeof e && this.i18nForBanner.hasOwnProperty(e)
            }
        }, {
            key: "get",
            value: function(e, t) {
                return function(e, t, i) {
                    if (!t)
                        return e;
                    for (var o, a = t.split("."), r = e, s = 0; s < a.length; s++) {
                        var c = a[s];
                        if (s === a.length - 1) {
                            o = r[c];
                            break
                        }
                        if ("object" !== n(r[c]) || !r[c]) {
                            o = void 0;
                            break
                        }
                        r = r[c]
                    }
                    return o || !1 === o ? o : i
                }(this, e, t)
            }
        }, {
            key: "validate",
            value: function(e, t) {
                var i = -1 !== [0, 2, 3, 4].indexOf(Ke.level)
                  , o = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , i = $i(e, t);
                    return !0 !== n || Object.keys(e).forEach((function(n) {
                        eo(e, t, n) ? i.push(Ji.fromPropertyName(n, Hi, Ki)) : to(e, t, n) && (i = i.concat(Xi(e[n], t[n], Ki, n)))
                    }
                    )),
                    i
                }(t, e, i)
                  , a = function(e, t, i) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (void 0 === e)
                        return [];
                    var a = [];
                    if ("object" !== n(e) || null === e)
                        return a.push(Ji.fromPropertyName("i18n", Yi, Ki)),
                        a;
                    "object" === n(t) && "object" === n(e) || a.push(Ji.fromInvalidType(Gi, Ki));
                    var r = Object.keys(e).reduce((function(t, r) {
                        var s = [];
                        return "object" !== n(e[r]) ? a.push(Ji.fromProperty("lang", r, Yi, Ki)) : (Zi(r) && a.push(Ji.fromProperty("lang", r, qi, Ki)),
                        Qi(e, r) && a.push(new Ji(Yi,"".concat(r, ".callback"),null,Ki)),
                        i && i.en && !0 === o && (s = Xi(e[r], i.en, Ki, r))),
                        t.concat(s)
                    }
                    ), []);
                    return a.concat(r)
                }(t.i18n, e.i18n, this.i18nForBanner, i);
                return [].concat(f(o), f(a))
            }
        }, {
            key: "merge",
            value: function(e, t) {
                var i = this;
                Object.keys(t).forEach((function(o) {
                    t[o]instanceof HTMLElement ? void 0 !== e[o] && (e[o] = t[o]) : "object" === n(t[o]) || void 0 === t[o] ? "object" === n(e[o]) ? "object" === n(t[o]) && null !== t[o] && Object.keys(t[o]).length > 1 ? Object.keys(t[o]).forEach((function(n) {
                        void 0 === e[o][n] && void 0 === i.RENAMED_OPTIONS["".concat(o, ".").concat(n)] || (e[o][n] = t[o][n])
                    }
                    )) : e[o] = t[o] : void 0 === e[o] && (e[o] = t[o]) : null !== e[o] && "object" === n(e[o]) || void 0 === e[o] && void 0 === i.RENAMED_OPTIONS[o] || (e[o] = t[o])
                }
                ))
            }
        }, {
            key: "getObjValueByPath",
            value: function(e, t) {
                for (var n, i = e, o = t.split("."), a = 0; a < o.length; a++) {
                    var r = o[a];
                    if (a === o.length - 1)
                        i && void 0 !== i[r] && (n = i[r]);
                    else {
                        if (!i[r])
                            break;
                        i = i[r]
                    }
                }
                return n
            }
        }, {
            key: "setObjValueByPath",
            value: function(e, t, n) {
                var i = e
                  , o = t.split(".");
                return o.forEach((function(e, t) {
                    t === o.length - 1 ? i[e] = n : (i[e] || (i[e] = {}),
                    i = i[e])
                }
                )),
                i
            }
        }, {
            key: "getRenamedOptions",
            value: function(e, t) {
                var n = this;
                return Object.keys(t).reduce((function(i, o) {
                    var a = t[o]
                      , r = n.getObjValueByPath(e, a)
                      , s = n.getObjValueByPath(e, o)
                      , c = void 0 !== r ? r : s;
                    return void 0 === c || (n.setObjValueByPath(i, a, c),
                    n.setObjValueByPath(i, o, c)),
                    i
                }
                ), {})
            }
        }, {
            key: "logDeprecatedOptionWarning",
            value: function(e, t) {
                var n = this;
                Object.keys(t).forEach((function(i) {
                    var o = t[i];
                    n.getObjValueByPath(e, i) && Ke.warn("deprecated parameter [" + i + "], use [" + o + "] instead")
                }
                ))
            }
        }, {
            key: "isUsingNewPricing",
            value: function() {
                return !!this.remoteConfig.csFeatures
            }
        }, {
            key: "isFullCustomizationDisabled",
            value: function() {
                return !!this.isUsingNewPricing() && !this.remoteConfig.csFeatures.full_customization
            }
        }, {
            key: "getCSWhiteLabeling",
            value: function() {
                if (this.isUsingNewPricing() && void 0 !== this.remoteConfig.csFeatures.cookie_solution_white_labeling) {
                    var e = this.remoteConfig.csFeatures.cookie_solution_white_labeling;
                    return "boolean" == typeof e ? e : Number(e)
                }
                return !1
            }
        }, {
            key: "isGeolocationDisabled",
            value: function() {
                return !!this.isUsingNewPricing() && !this.remoteConfig.csFeatures.geolocation_setting
            }
        }, {
            key: "isRejectionRecoveryDisabled",
            value: function() {
                return !!this.isUsingNewPricing() && !this.remoteConfig.csFeatures.rejection_recovery
            }
        }, {
            key: "prepareGetters",
            value: function() {
                var t = this;
                this.mergedOptions = {},
                Object.keys(e.getters).forEach((function(n) {
                    for (var i, o = n.split("."), a = t, r = 0; r < o.length - 1; ++r)
                        a = a[o[r]];
                    var s = o[o.length - 1];
                    (null === (i = Object.getOwnPropertyDescriptor(a, s)) || void 0 === i ? void 0 : i.get) || (t.setObjValueByPath(t.mergedOptions, n, a[s]),
                    delete a[s],
                    Object.defineProperty(a, s, {
                        get: e.getters[n].bind(t),
                        enumerable: !0,
                        configurable: !1
                    }))
                }
                ))
            }
        }, {
            key: "remoteConfig",
            get: function() {
                return this._remoteConfig
            }
        }], [{
            key: "tcfDefaultPurposes",
            value: function() {
                return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
            }
        }]),
        e
    }();
    function io(e, t) {
        var n = document.createElement("canvas").getContext("2d");
        return n.fillStyle = e,
        n.fillRect(0, 0, 1, 1),
        n.fillStyle = t,
        n.fillRect(1, 0, 1, 1),
        n.getImageData(0, 0, 1, 1).data.join(",") === n.getImageData(1, 0, 1, 1).data.join(",")
    }
    no.getters = {
        "banner.content": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.content : this.enableTcf && !this.skipTcfValidation ? null : this.mergedOptions.banner.content
        },
        "banner.html": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.html : !this.enableTcf || this.skipTcfValidation || this.isBannerHtmlValid(this.mergedOptions.banner.html) ? this.mergedOptions.banner.html : (Ke.log("warn", "banner.html changed to default since it doesn't respect the TCF requirements"),
            null)
        },
        floatingPreferencesButtonDisplay: function() {
            return !(!this.isFullCustomizationDisabled() || this.mergedOptions.floatingPreferencesButtonDisplay) || this.mergedOptions.floatingPreferencesButtonDisplay
        },
        usPreferencesWidgetDisplay: function() {
            return void 0 === this.mergedOptions.usPreferencesWidgetDisplay ? !1 !== this.userConfig.floatingPreferencesButtonDisplay && "inline-center" : this.mergedOptions.usPreferencesWidgetDisplay
        },
        floatingPreferencesButtonCaption: function() {
            return this.isFullCustomizationDisabled() ? Je.floatingPreferencesButtonCaption : this.mergedOptions.floatingPreferencesButtonCaption
        },
        floatingPreferencesButtonColor: function() {
            return this.isFullCustomizationDisabled() ? Je.floatingPreferencesButtonColor : this.mergedOptions.floatingPreferencesButtonColor
        },
        floatingPreferencesButtonCaptionColor: function() {
            return this.isFullCustomizationDisabled() ? Je.floatingPreferencesButtonCaptionColor : this.mergedOptions.floatingPreferencesButtonCaptionColor
        },
        floatingPreferencesButtonIcon: function() {
            return this.isFullCustomizationDisabled() ? Je.floatingPreferencesButtonIcon : this.mergedOptions.floatingPreferencesButtonIcon
        },
        "banner.fontSize": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.fontSize : this.mergedOptions.banner.fontSize
        },
        "banner.fontSizeBody": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.fontSizeBody : this.mergedOptions.banner.fontSizeBody
        },
        "banner.slideDown": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.slideDown : this.mergedOptions.banner.slideDown
        },
        "banner.fontSizeCloseButton": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.fontSizeCloseButton : this.mergedOptions.banner.fontSizeCloseButton
        },
        "banner.prependOnBody": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.prependOnBody : this.mergedOptions.banner.prependOnBody
        },
        reloadOnConsent: function() {
            return this.isFullCustomizationDisabled() ? Je.reloadOnConsent : this.mergedOptions.reloadOnConsent
        },
        askConsentAtCookiePolicyUpdate: function() {
            return !!this.isFullCustomizationDisabled() || this.mergedOptions.askConsentAtCookiePolicyUpdate
        },
        enableRemoteConsent: function() {
            return !this.previewMode && (this.isFullCustomizationDisabled() ? Je.enableRemoteConsent : this.mergedOptions.enableRemoteConsent)
        },
        "preferenceCookie.expireAfter": function() {
            return this.isFullCustomizationDisabled() ? Je.preferenceCookie.expireAfter : this.mergedOptions.preferenceCookie.expireAfter
        },
        inlineDelay: function() {
            return this.isFullCustomizationDisabled() ? Je.inlineDelay : this.mergedOptions.inlineDelay
        },
        logLevel: function() {
            return this.isFullCustomizationDisabled() ? Je.logLevel : this.mergedOptions.logLevel
        },
        rebuildIframe: function() {
            return this.isFullCustomizationDisabled() ? Je.rebuildIframe : this.mergedOptions.rebuildIframe
        },
        skipSaveConsent: function() {
            return !!this.previewMode || (this.isFullCustomizationDisabled() ? Je.skipSaveConsent : this.mergedOptions.skipSaveConsent)
        },
        "banner.cookiePolicyLinkCaption": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.cookiePolicyLinkCaption : this.mergedOptions.banner.cookiePolicyLinkCaption
        },
        "banner.acceptButtonCaption": function() {
            return this.isFullCustomizationDisabled() || !this.mergedOptions.banner.acceptButtonCaption ? Lt("banner.accept_button_caption", null, this) : this.mergedOptions.banner.acceptButtonCaption
        },
        "banner.customizeButtonCaption": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.customizeButtonCaption : this.mergedOptions.banner.customizeButtonCaption
        },
        "banner.rejectButtonCaption": function() {
            return this.isFullCustomizationDisabled() || !this.mergedOptions.banner.rejectButtonCaption ? Lt("banner.reject_button_caption", null, this) : this.mergedOptions.banner.rejectButtonCaption
        },
        "banner.continueWithoutAcceptingButtonCaption": function() {
            return this.isFullCustomizationDisabled() || !this.mergedOptions.banner.continueWithoutAcceptingButtonCaption ? Lt("banner.continue_acception_button_caption") : this.mergedOptions.banner.continueWithoutAcceptingButtonCaption
        },
        "banner.closeButtonCaption": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.closeButtonCaption : this.gdprApplies || this.lgpdApplies || !this.banner ? this.mergedOptions.banner.closeButtonCaption : "&times;"
        },
        "banner.backgroundColor": function() {
            return this.isFullCustomizationDisabled() && !io(this.mergedOptions.banner.backgroundColor, "white") ? Je.banner.backgroundColor : this.mergedOptions.banner.backgroundColor
        },
        "banner.textColor": function() {
            return this.isFullCustomizationDisabled() && !io(this.mergedOptions.banner.textColor, "black") ? Je.banner.textColor : this.mergedOptions.banner.textColor
        },
        "banner.linksColor": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.linksColor : this.mergedOptions.banner.linksColor
        },
        "banner.acceptButtonColor": function() {
            return this.isFullCustomizationDisabled() && !io(this.mergedOptions.banner.acceptButtonColor, "#0073CE") ? Je.banner.acceptButtonColor : this.mergedOptions.banner.acceptButtonColor
        },
        "banner.acceptButtonCaptionColor": function() {
            return this.isFullCustomizationDisabled() && !io(this.mergedOptions.banner.acceptButtonCaptionColor, "white") ? Je.banner.acceptButtonCaptionColor : this.mergedOptions.banner.acceptButtonCaptionColor
        },
        "banner.customizeButtonColor": function() {
            return this.isFullCustomizationDisabled() && !io(this.mergedOptions.banner.customizeButtonColor, "#DADADA") ? Je.banner.customizeButtonColor : this.mergedOptions.banner.customizeButtonColor
        },
        "banner.customizeButtonCaptionColor": function() {
            return this.isFullCustomizationDisabled() && !io(this.mergedOptions.banner.customizeButtonCaptionColor, "#4D4D4D") ? Je.banner.customizeButtonCaptionColor : this.mergedOptions.banner.customizeButtonCaptionColor
        },
        "banner.rejectButtonColor": function() {
            return this.isFullCustomizationDisabled() && !io(this.mergedOptions.banner.rejectButtonColor, "#0073CE") ? Je.banner.rejectButtonColor : this.mergedOptions.banner.rejectButtonColor
        },
        "banner.rejectButtonCaptionColor": function() {
            return this.isFullCustomizationDisabled() && !io(this.mergedOptions.banner.rejectButtonCaptionColor, "white") ? Je.banner.rejectButtonCaptionColor : this.mergedOptions.banner.rejectButtonCaptionColor
        },
        "banner.continueWithoutAcceptingButtonColor": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.continueWithoutAcceptingButtonColor : this.mergedOptions.banner.continueWithoutAcceptingButtonColor
        },
        "banner.continueWithoutAcceptingButtonCaptionColor": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.continueWithoutAcceptingButtonCaptionColor : this.mergedOptions.banner.continueWithoutAcceptingButtonCaptionColor
        },
        "banner.brandBackgroundColor": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.brandBackgroundColor : this.mergedOptions.banner.brandBackgroundColor
        },
        "banner.brandTextColor": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.brandTextColor : this.mergedOptions.banner.brandTextColor
        },
        "banner.logo": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.logo : this.mergedOptions.banner.logo
        },
        whitelabel: function() {
            var e = this.getCSWhiteLabeling();
            return !(this.isFullCustomizationDisabled() || 2 !== e && !1 !== e) && this.mergedOptions.whitelabel
        },
        "banner.applyStyles": function() {
            return this.isFullCustomizationDisabled() ? Je.banner.applyStyles : this.mergedOptions.banner.applyStyles
        },
        countryDetection: function() {
            return this.isGeolocationDisabled() ? Je.countryDetection : this.mergedOptions.countryDetection
        },
        promptToAcceptOnBlockedElements: function() {
            return this.isRejectionRecoveryDisabled() ? Je.promptToAcceptOnBlockedElements : this.mergedOptions.promptToAcceptOnBlockedElements
        },
        previewMode: function() {
            return this.mergedOptions.previewMode && Qe()
        },
        previewRemoteConfigurationUrl: function() {
            return this.mergedOptions.previewRemoteConfigurationUrl
        },
        cookieSolutionWhiteLabeling: function() {
            return this.getCSWhiteLabeling()
        },
        skipTcfValidation: function() {
            var e;
            return (null === (e = this._remoteConfig.csRC) || void 0 === e ? void 0 : e.skipTcfValidation) || !1
        },
        acceptTcfSpecialFeaturesWithAcceptBtn: function() {
            return this.mergedOptions.acceptTcfSpecialFeaturesWithAcceptBtn
        },
        fadpApplies: function() {
            return !1 !== this.mergedOptions.fadpApplies && (!!this.mergedOptions.enableFadp && (!this.gdprApplies && !this.lgpdApplies && (this.mergedOptions.countryDetection ? "CH" === _iub.cc : this.mergedOptions.enableFadp)))
        },
        enableFadp: function() {
            return this.mergedOptions.enableFadp
        },
        showBannerForCH: function() {
            return !!this.fadpApplies && this.mergedOptions.showBannerForCH
        },
        perPurposeConsent: function() {
            return !this.hasCookiePolicy || (!(!this.fadpApplies || this.gdprApplies || this.lgpdApplies) || this.mergedOptions.perPurposeConsent)
        },
        storage: function() {
            return this.mergedOptions.storage
        },
        tcfVendors: function() {
            var e = this.mergedOptions.tcfVendors || this.vendors || _iub.tcfV;
            return "string" == typeof e ? e.split(",").map((function(e) {
                return parseInt(e, 10)
            }
            )) : e
        },
        gppVersion: function() {
            switch (this.mergedOptions.gppVersion.toString()) {
            case "1.1":
                return 1.1;
            case "1":
            default:
                return 1
            }
        },
        tcfVersion: function() {
            switch (this.mergedOptions.tcfVersion.toString()) {
            case "2.2":
                return 2.2;
            case "2":
            default:
                return 2
            }
        },
        tcfV2_2: function() {
            return 2.2 === this.tcfVersion
        }
    };
    var oo = function() {
        function e(t) {
            i(this, e),
            this.cs = t,
            this.logger = Ke,
            this.ui = t.ui,
            window.addEventListener("message", this._onMessageEventHandler.bind(this))
        }
        return a(e, [{
            key: "consentGiven",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.force || !1;
                if (this.ui.banner.shown || t) {
                    var n = e.eventName || "cookiePolicyClosed";
                    switch (this.ui.registerEvent(n),
                    n) {
                    case "rejectButtonClick":
                        this.cs.rejectAll(n);
                        break;
                    case "bannerXClose":
                        this.cs.options.banner.closeButtonRejects ? this.cs.rejectAll(n) : this.cs.acceptAll(n);
                        break;
                    default:
                        this.cs.acceptAll(n)
                    }
                    this.ui.banner.removeBanner()
                }
            }
        }, {
            key: "showTcfVendors",
            value: function() {
                this.ui.showTcfVendors()
            }
        }, {
            key: "showCP",
            value: function() {
                var e = new MouseEvent("click",{
                    bubbles: !0,
                    cancelable: !1
                });
                this.ui.bannerCookiePolicyClicked({
                    event: e
                })
            }
        }, {
            key: "openPreferences",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.acceptPurposes;
                this.ui.openPreferences({
                    acceptPurposes: t
                })
            }
        }, {
            key: "printErrors",
            value: function() {
                var e = this
                  , t = this.cs.state.errors;
                t.length || this.logger.log("info", "No errors", "info", !1),
                Object.keys(t).forEach((function(n) {
                    e.logger.log("info", t[n], "error", !1)
                }
                ))
            }
        }, {
            key: "isConsentGiven",
            value: function() {
                return this.cs.isConsentGiven()
            }
        }, {
            key: "isCcpaAcknowledged",
            value: function() {
                return this.cs.state.ccpaAcknowledged
            }
        }, {
            key: "isCcpaOptedOut",
            value: function() {
                return this.cs.state.ccpaOptedOut
            }
        }, {
            key: "ccpaApplies",
            value: function() {
                return this.cs.options.ccpaApplies
            }
        }, {
            key: "gdprApplies",
            value: function() {
                return this.cs.options.gdprApplies
            }
        }, {
            key: "lgpdApplies",
            value: function() {
                return this.cs.options.lgpdApplies
            }
        }, {
            key: "askCcpaOptOut",
            value: function() {
                this.cs.askCcpaOptOut()
            }
        }, {
            key: "isPreferenceExpressed",
            value: function() {
                return this.cs.isPreferenceExpressed()
            }
        }, {
            key: "storeConsent",
            value: function(e) {
                var t = this.cs.consent;
                this.cs.consent = {
                    timestamp: (new Date).toISOString(),
                    version: this.cs.settings.version
                };
                var i, o = null == e || e, a = !1;
                if ("boolean" == typeof o)
                    i = o;
                else if ("object" === n(o)) {
                    if ("tcfv2"in o && (this.cs.state.tcfv2String = o.tcfv2 || ""),
                    "consent"in o && (i = !1 !== o.consent),
                    "purposes"in o) {
                        var r = _(o.purposes);
                        r[1] = !0,
                        this.cs.consent.purposes = r,
                        a = !0
                    }
                    "timestamp"in o && (this.cs.consent.timestamp = o.timestamp),
                    this.cs.consent.cons = "cons"in o ? o.cons : {
                        rand: "123456"
                    }
                }
                "boolean" == typeof i && (this.cs.consent.consent = i,
                a = !0),
                a && this.cs.cookie.storeConsent(),
                this.cs.consent = t
            }
        }, {
            key: "activateSnippets",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.cs.firstActivationCompletedPromise.then((function() {
                    e.cs.startActivation(t.runOnActivationDoneCallback, !0)
                }
                ))
            }
        }, {
            key: "setConsentOnScrollOnElement",
            value: function() {}
        }, {
            key: "isGoogleNonPersonalizedAds",
            value: function() {
                return !0
            }
        }, {
            key: "getGoogleAdditionalConsent",
            value: function() {
                if (this.cs.options.googleAdditionalConsentMode && this.cs.customPreferences)
                    return this.cs.customPreferences.gac
            }
        }, {
            key: "resetCookies",
            value: function() {
                this.cs.storage.reset({
                    local: !0,
                    remote: this.cs.options.enableRemoteConsent
                })
            }
        }, {
            key: "_callAPIFunction",
            value: function(t, n, i) {
                this.logger.debug({
                    command: t,
                    params: n,
                    callback: i
                });
                var o = n || [];
                if ("_onMessageEventHandler" === t || "_callAPIFunction" === t || !e.prototype.hasOwnProperty(t) || "function" != typeof this[t])
                    return this.logger.error("iub CS API called with undefined command: ", t),
                    void i(null, !1);
                i(this[t].apply(this, o), !0)
            }
        }, {
            key: "_onMessageEventHandler",
            value: function(t) {
                try {
                    var n = "string" == typeof t.data ? e._parseJson(t.data) : t.data
                      , i = n ? n.__iubCsCall : null;
                    if (!i)
                        return;
                    var o = i.command
                      , a = i.parameters
                      , r = i.callId;
                    this._callAPIFunction(o, a, (function(e, n) {
                        var i = {
                            __iubCsReturn: {
                                returnValue: e,
                                success: n,
                                callId: r
                            }
                        };
                        t.source.frames.postMessage(JSON.stringify(i), t.origin)
                    }
                    ))
                } catch (e) {
                    this.logger.error("Error: " + e)
                }
            }
        }, {
            key: "getSupportedOptions",
            value: function() {
                return S(Je)
            }
        }, {
            key: "acceptAll",
            value: function() {
                this.cs.acceptAllUltimate("cookiePolicyClosed")
            }
        }, {
            key: "rejectAll",
            value: function() {
                this.cs.rejectAll("rejectButtonClick")
            }
        }, {
            key: "showBanner",
            value: function() {
                this.cs.ui.banner.removeBanner(),
                this.cs.ui.banner.showBanner(),
                this.cs.ui.bindButtons(),
                this.cs.enablePrivacyPolicyLinks()
            }
        }], [{
            key: "_parseJson",
            value: function(e) {
                try {
                    return JSON.parse(e)
                } catch (e) {}
                return null
            }
        }]),
        e
    }()
      , ao = "body{margin:0;font-family:sans-serif}*{box-sizing:border-box}.iubenda-cs__overlay{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;overflow:auto;padding:1rem;background-color:rgba(0,0,0,.1)}.iubenda-cs__dialog{max-width:320px;border-radius:.5rem;box-shadow:0 0 2rem rgba(0,0,0,.25),0 0 0 1px rgba(0,0,0,.05);margin:auto;overflow:hidden;padding:1.5rem;display:flex;flex-direction:column;grid-gap:1.5rem;background:#fff;color:#222}.iubenda-cs__body h1{font-size:1.25rem;margin:0 0 .5rem 0}.iubenda-cs__body p{margin:0;font-weight:300}.iubenda-cs__button{font-size:100%;border-radius:4rem;padding:.5rem 1rem;font-weight:700;background-color:#0073ce;color:#fff;border:0;width:100%;cursor:pointer}.iubenda-cs__button:hover{background-color:#005aa0}@media (max-height:320px) and (max-width:240px){.iubenda-cs__overlay{padding:0}}@media (max-height:320px) and (min-width:480px){.iubenda-cs__dialog{flex-direction:row;max-width:100%;align-items:center}.iubenda-cs__button{padding:1rem 3rem}}";
    function ro(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          , i = n.styleOptions
          , o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
          , a = On(e, t)
          , r = t.join(",")
          , s = Lt("blocked_overlay.title")
          , c = Lt("blocked_overlay.paragraph").replace("%{purposes}", a)
          , l = Lt("blocked_overlay.accept_button")
          , p = Se({
            "background-color": null == i ? void 0 : i.backgroundColor,
            color: null == i ? void 0 : i.textColor
        })
          , u = Se({
            "background-color": null == i ? void 0 : i.acceptButtonColor,
            color: null == i ? void 0 : i.acceptButtonCaptionColor
        })
          , d = '\n    <div class="iubenda-cs__overlay">\n      <div class="iubenda-cs__dialog" '.concat(p, '>\n        <div class="iubenda-cs__body">\n          <h1>').concat(s, "</h1>\n          <p>").concat(c, '</p>\n        </div>\n        <div class="iubenda-cs__footer">\n          <button\n            class="iubenda-cs__button iubenda-cs__preferences-link"\n            ').concat(u, '\n            data-accept-purposes="').concat(r, '"\n          >\n            ').concat(l, "\n          </button>\n        </div>\n      </div>\n    </div>\n  ");
        return o ? d : '\n    <!DOCTYPE html>\n    <html lang="en">\n      <head>\n        <meta charset="UTF-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>'.concat(s, "</title>\n        <style>").concat(ao, "</style>\n      </head>\n      <body>\n        ").concat(d, "\n      </body>\n    </html>\n  ")
    }
    function so(e) {
        var t, n, i, o = null == e || null === (t = e.preferenceCookie) || void 0 === t || null === (n = t.tcfV2Name) || void 0 === n ? void 0 : n.trim();
        return "string" == typeof o && o ? o.trim().replace(/%\{cookie_policy_id\}/g, null !== (i = null == e ? void 0 : e.cookiePolicyId) && void 0 !== i ? i : "") : "euconsent-v2"
    }
    var co = "loading"
      , lo = "loaded"
      , po = "visible"
      , uo = "hidden"
      , ho = "ready"
      , fo = "not ready"
      , bo = "initial"
      , mo = "processing"
      , go = "processed"
      , vo = function() {
        function e(t, n) {
            i(this, e);
            var o = {
                cmpId: t,
                cmpStatus: co,
                cmpDisplayStatus: uo,
                supportedAPIs: [],
                supportedAPIs_1_1: [],
                sectionList: [],
                applicableSections: [],
                gppVersion: n || "1.0",
                signalStatus: fo,
                gppString: "",
                gppUpdatedSectionIds: {},
                parsedSections: {}
            };
            this.data = o,
            this.fireEvent = function() {}
        }
        return a(e, [{
            key: "setFireEvent",
            value: function(e) {
                this.fireEvent = e
            }
        }, {
            key: "updateData",
            value: function(e) {
                this.data = x(this.data, e)
            }
        }, {
            key: "getModelStructure",
            value: function(e) {
                return "1.1" === e ? ["gppVersion", "cmpStatus", "cmpDisplayStatus", "signalStatus", "supportedAPIs", "cmpId", "sectionList", "applicableSections", "gppString", "parsedSections"] : ["gppVersion", "cmpStatus", "cmpDisplayStatus", "supportedAPIs", "cmpId"]
            }
        }, {
            key: "getItemValue",
            value: function(e, t) {
                switch (t) {
                case "sectionList":
                    return Object.keys(this.data.gppUpdatedSectionIds).map(Number);
                case "supportedAPIs":
                    return this.data["1.1" === e ? "supportedAPIs_1_1" : "supportedAPIs"];
                default:
                    return this.data[t]
                }
            }
        }, {
            key: "getPingData",
            value: function(e) {
                var t = this
                  , n = this.getModelStructure(e.toString())
                  , i = {};
                return n.forEach((function(n) {
                    i[n] = t.getItemValue(e, n)
                }
                )),
                i
            }
        }]),
        e
    }();
    function yo(e) {
        if ("string" != typeof e)
            return {
                section: null,
                data: null
            };
        var t = e.split(".");
        return {
            section: t[0],
            data: t.slice(1).join(".")
        }
    }
    function ko(e) {
        if (!e)
            return e;
        var t = e;
        return "string" == typeof e && (t = Number(e)),
        t.toString()
    }
    var wo = [1.1, 1]
      , Co = function() {
        function e(t, n) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            i(this, e),
            this.model = t,
            this.pluginManager = n,
            this.gppVersion = o;
            try {
                this.callQueue = window.__gpp.queue
            } catch (e) {
                this.callQueue = []
            }
            try {
                this.events = window.__gpp.events
            } catch (e) {
                this.events = []
            }
            try {
                this.lastId = window.__gpp.lastId
            } catch (e) {
                this.lastId = 0
            }
            for (window.__gpp = this.apiCall.bind(this); this.callQueue.length; ) {
                var a = this.callQueue.shift();
                this.apiCall.apply(this, f(a))
            }
        }
        return a(e, [{
            key: "registerListener",
            value: function(e, t, n) {
                var i = 0
                  , o = !1;
                return "function" == typeof e && (o = !0,
                i = ++this.lastId,
                this.events.push({
                    id: i,
                    callback: e,
                    parameter: t,
                    version: n
                })),
                {
                    eventName: "listenerRegistered",
                    listenerId: i,
                    data: o
                }
            }
        }, {
            key: "unregisterListener",
            value: function(e) {
                for (var t = !1, n = 0; n < this.events.length; ++n)
                    if (this.events[n].id === e) {
                        this.events.splice(n, 1),
                        t = !0;
                        break
                    }
                return {
                    eventName: "listenerRemoved",
                    listenerId: e,
                    data: t
                }
            }
        }, {
            key: "getCustomCommand",
            value: function(e) {
                var t = yo(e)
                  , n = t.section
                  , i = t.data
                  , o = this.pluginManager.get(n);
                if (o) {
                    var a = o.customCommands()[i];
                    if (a)
                        return a
                }
            }
        }, {
            key: "apiCall",
            value: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = t[0]
                  , o = t[1]
                  , a = t[2]
                  , r = t[3]
                  , s = void 0 === r ? this.gppVersion : r
                  , c = ko(s);
                return "1" === c ? this.apiCall_1_0(i, o, a, c) : this.apiCall_1_1(i, o, a, c)
            }
        }, {
            key: "apiCall_1_0",
            value: function(e, t, n, i) {
                if ("1" === i && "string" == typeof e) {
                    var o = Number(i);
                    switch (e) {
                    case "addEventListener":
                        var a = this.registerListener(t, n, i);
                        return {
                            eventName: a.eventName,
                            listenerId: a.listenerId,
                            data: a.data
                        };
                    case "removeEventListener":
                        var r = this.unregisterListener(n);
                        return {
                            eventName: r.eventName,
                            listenerId: r.listenerId,
                            data: r.data
                        };
                    case "ping":
                        return this.model.getPingData(i);
                    case "hasSection":
                        return !!this.pluginManager.get(n);
                    case "getSection":
                        var s;
                        return null === (s = this.pluginManager.get(n)) || void 0 === s ? void 0 : s.getSection(o);
                    case "getField":
                        var c, l = yo(n), p = l.section, u = l.data;
                        return null === (c = this.pluginManager.get(p)) || void 0 === c ? void 0 : c.getField(o, u);
                    case "getGPPData":
                        var d = Object.keys(this.model.data.gppUpdatedSectionIds).map(Number)
                          , h = this.model.data.applicableSections.filter((function(e) {
                            return -1 !== d.indexOf(e)
                        }
                        ));
                        return {
                            sectionId: 3,
                            gppVersion: 3,
                            sectionList: d,
                            applicableSections: h.length ? h : -1,
                            gppString: this.model.data.gppString,
                            pingData: this.model.getPingData(i)
                        };
                    default:
                        var f = this.getCustomCommand(e);
                        if (f)
                            return f(t, n, i)
                    }
                }
            }
        }, {
            key: "apiCall_1_1",
            value: function(t, n, i, o) {
                if ("1.1" === o && "string" == typeof t && "function" == typeof n) {
                    var a = Number(o);
                    switch (t) {
                    case "addEventListener":
                        var r = this.registerListener(n, i, o)
                          , s = {
                            eventName: r.eventName,
                            listenerId: r.listenerId,
                            data: r.data,
                            pingData: this.model.getPingData(o)
                        };
                        this.events.forEach((function(t) {
                            e.callCallback(t.callback, s, !0)
                        }
                        ));
                        break;
                    case "removeEventListener":
                        var c = this.unregisterListener(i)
                          , l = c.eventName
                          , p = c.listenerId
                          , u = c.data;
                        e.callCallback(n, u, !0);
                        var d = {
                            eventName: l,
                            listenerId: p,
                            data: u,
                            pingData: this.model.getPingData(o)
                        };
                        this.events.forEach((function(t) {
                            e.callCallback(t.callback, d, !0)
                        }
                        ));
                        break;
                    case "ping":
                        var h = this.model.getPingData(o);
                        e.callCallback(n, h, !0);
                        break;
                    case "hasSection":
                        var f = !!this.pluginManager.get(i);
                        e.callCallback(n, f, !0);
                        break;
                    case "getSection":
                        var b = this.pluginManager.get(i);
                        if (b) {
                            var m = b.getSection(a);
                            e.callCallback(n, m, !0)
                        } else
                            e.callCallback(n, null, !1);
                        break;
                    case "getField":
                        var g = yo(i)
                          , v = g.section
                          , y = g.data
                          , k = this.pluginManager.get(v);
                        if (k && y) {
                            var w = k.getField(a, y);
                            e.callCallback(n, w, !0)
                        } else
                            e.callCallback(n, null, !1);
                        break;
                    default:
                        var C = this.getCustomCommand(t);
                        C ? C(n, i, o) : e.callCallback(n, null, !1)
                    }
                } else
                    "function" == typeof n && e.callCallback(n, null, !1)
            }
        }], [{
            key: "callCallback",
            value: function(e) {
                try {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                        n[i - 1] = arguments[i];
                    e.apply(void 0, n)
                } catch (e) {}
            }
        }]),
        e
    }();
    function xo() {
        this.ncache = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233],
        this.ecache = [],
        this.maxfibo = 30,
        this.fibo = function(e) {
            if (e in this.ncache)
                return this.ncache[e];
            var t = e - 1
              , n = e - 2;
            if (t in this.ncache && n in this.ncache)
                return this.ncache[e] = this.ncache[t] + this.ncache[n],
                this.ncache[e];
            for (var i = 0, o = 1, a = 0, r = 0; r < e; r++)
                a = i,
                i = o,
                o += a;
            return this.ncache[e] = i,
            i
        }
        ,
        this.largeOrEqual = function(e) {
            for (var t = 0, n = 1; n < this.maxfibo && this.fibo(n) <= e; n++)
                t = n;
            return t
        }
        ,
        this.encode = function(e) {
            if (e <= 0)
                return "";
            if (e in this.ecache)
                return this.ecache[e];
            for (var t = e, n = this.largeOrEqual(e), i = [], o = 0; o < n + 3; o++)
                i[o] = 0;
            o = n;
            for (var a = 0; e > 0 && a <= this.maxfibo && o >= 0; )
                for (a++,
                i[o] = "1",
                e -= this.fibo(o),
                o--; o >= 0 && this.ncache[o] > e; )
                    i[o] = "0",
                    o--;
            return i[n + 1] = "1",
            i = i.slice(0, n + 2),
            this.ecache[t] = i.join(""),
            this.ecache[t]
        }
        ,
        this.decode = function(e) {
            if ("" == e)
                return 0;
            for (var t = (e = e.substring(0, e.length - 1)).length, n = 0, i = 0; i < t; i++)
                "1" == e.substring(i, i + 1) && (n += this.fibo(i));
            return n
        }
    }
    function Po(e, t) {
        this.rpl = function(e, t, n) {
            return e.split(t).join(n)
        }
        ,
        this.repeat = function(e) {
            for (var t = "", n = 0; n < e; n++)
                t += "0";
            return t
        }
        ,
        this.padLeft = function(e, t) {
            return this.repeat(Math.max(0, t)) + e
        }
        ,
        this.base64toBits = function(e) {
            for (e = this.rpl(e, "%2B", "+"),
            e = this.rpl(e, "%2F", "/"),
            e = this.rpl(e, "-", "+"),
            e = this.rpl(e, "_", "/"),
            e = this.rpl(e, " ", "+"),
            e = this.rpl(e, "%2B", "+"); e.length % 4 != 0; )
                e += "=";
            var t;
            try {
                t = window.atob2(e)
            } catch (n) {
                try {
                    t = window.atob(e)
                } catch (e) {
                    t = ""
                }
            }
            for (var n = "", i = 0; i < t.length; i++) {
                var o = t.charCodeAt(i).toString(2);
                n += this.padLeft(o, 8 - o.length)
            }
            return n
        }
        ,
        this.read = function(e) {
            var t = this.cs.substring(0, e);
            return this.cs = this.cs.substring(e, 99999999),
            t
        }
        ,
        this.readInt = function(e) {
            return parseInt(this.read(e), 2)
        }
        ,
        this.readIntFibo = function() {
            var e = this.cs.substring(0, this.cs.indexOf("11") + 2);
            return "" != e ? (this.cs = this.cs.substring(e.length),
            this.fibo.decode(e)) : ""
        }
        ,
        this.readDate = function() {
            return new Date(100 * this.readInt(36))
        }
        ,
        this.readLang = function() {
            return this.readString(2).toLowerCase()
        }
        ,
        this.readString = function(e) {
            for (var t = "", n = 0; n < e; n++)
                t += String.fromCharCode(this.readInt(6) + 65);
            return t
        }
        ,
        this.readBool = function() {
            return 1 === parseInt(this.read(1), 2)
        }
        ,
        this.readBitField = function(e) {
            var t = this.read(e);
            if ("" === t)
                return [];
            t = t.split("");
            for (var n = [], i = 0; i < e; i++)
                1 === parseInt(t[i]) && -1 === n.indexOf(i + 1) && n.push(i + 1);
            return n
        }
        ,
        this.readNBitField = function(e, t) {
            for (var n = [], i = 1; i <= e; i++)
                n.push(this.readInt(t));
            return n
        }
        ,
        this.readVarBitField = function() {
            var e = this.readInt(16);
            return this.readBitField(e)
        }
        ,
        this.readRange = function() {
            for (var e = this.readInt(12), t = [], n = 0, i = 0, o = 0; o < e; o++) {
                this.readBool() ? (n = this.readInt(16),
                i = this.readInt(16)) : i = n = this.readInt(16);
                for (var a = n; a <= i; a++)
                    a < 1 || t.push(a)
            }
            return t
        }
        ,
        this.readRangeFibo = function() {
            for (var e = this.readInt(12), t = [], n = 0, i = 0, o = 0, a = 0; a < e; a++) {
                o = i = this.readBool() ? (n = this.readIntFibo() + o) + this.readIntFibo() : n = this.readIntFibo() + o;
                for (var r = n; r <= i; r++)
                    r < 1 || t.push(r)
            }
            return t
        }
        ,
        this.readOptimizedRange = function() {
            return !0 === this.readBool() ? this.readRangeFibo() : this.readVarBitField()
        }
        ,
        this.readOptimizedIntRange = function() {
            var e = this.readInt(16);
            return !0 === this.readBool() ? this.readRange() : this.readBitField(e)
        }
        ,
        this.cs = "string" == typeof t && "" !== t ? t : this.base64toBits(e),
        this.fibo = new xo
    }
    function _o() {
        this.cs = "",
        this.fibo = new xo,
        this.clear = function() {
            this.cs = ""
        }
        ,
        this.getCS = function() {
            return this.cs
        }
        ,
        this.setCS = function(e) {
            this.cs = e
        }
        ,
        this.getBase64CS = function() {
            return this.bitsToBase64(this.cs)
        }
        ,
        this.rpl = function(e, t, n) {
            return e.split(t).join(n)
        }
        ,
        this.repeat = function(e) {
            for (var t = "", n = 0; n < e; n++)
                t += "0";
            return t
        }
        ,
        this.padRight = function(e, t) {
            return e + this.repeat(Math.max(0, t))
        }
        ,
        this.bitsToBase64 = function(e) {
            if (e) {
                e = this.padRight(e, 7 - (e.length + 7) % 8);
                for (var t = "", n = 0; n < e.length; n += 8)
                    t += String.fromCharCode(parseInt(e.substring(n, n + 8), 2));
                var i = t;
                try {
                    t = window.btoa2(i)
                } catch (e) {
                    try {
                        t = window.btoa(i)
                    } catch (e) {
                        t = ""
                    }
                }
                return t = this.rpl(t, "+", "-"),
                t = this.rpl(t, "/", "_"),
                t = (t = this.rpl(t, " ", "+")).replace(/=+$/, "")
            }
            return null
        }
        ,
        this.padLeft = function(e, t) {
            return this.repeat(Math.max(0, t)) + e
        }
        ,
        this.repeat = function(e) {
            for (var t = "", n = 0; n < e; n++)
                t += "0";
            return t
        }
        ,
        this.getMaxId = function(e) {
            for (var t = 0, n = 0; n < e.length; n++)
                t < e[n] && (t = e[n]);
            return t
        }
        ,
        this.write = function(e) {
            this.cs += e
        }
        ,
        this.writeBool = function(e) {
            this.writeInt(!0 === e || 1 === e ? 1 : 0, 1)
        }
        ,
        this.writeInt = function(e, t) {
            var n;
            t >= (n = parseInt(e, 10).toString(2)).length && (n = this.padLeft(n, t - n.length)),
            n.length > t && (n = n.substring(0, t)),
            this.write(n)
        }
        ,
        this.writeDate = function(e) {
            e instanceof Date ? this.writeInt(e.getTime() / 100, 36) : this.writeInt(e, 36)
        }
        ,
        this.writeString = function(e, t) {
            for (e = e.substring(e, t); e.length < t; )
                e += " ";
            for (var n = 0; n < e.length; n++)
                this.writeInt(e.substring(n, n + 1).toUpperCase().charCodeAt(0) - 65, 6)
        }
        ,
        this.writeLang = function(e) {
            this.writeString(e.substring(0, 2), 2)
        }
        ,
        this.writeBitField = function(e, t) {
            for (var n = 1; n <= t; n++)
                this.writeBool(-1 !== cmp_fnd(e, n))
        }
        ,
        this.writeNBitField = function(e, t, n) {
            for (var i = 0; i < t; i++)
                this.writeInt(i in e ? parseInt(e[i]) : 0, n)
        }
        ,
        this.writeVarBitField = function(e) {
            var t = this.getMaxId(e);
            this.writeInt(t, 16),
            this.writeBitField(e, t)
        }
        ,
        this.ids2range = function(e) {
            for (e.sort((function(e, t) {
                return parseInt(e) < parseInt(t) ? -1 : parseInt(e) > parseInt(t) ? 1 : 0
            }
            )); e.length > 0 && 0 === e[0]; )
                e.shift();
            for (var t = [], n = 0, i = 0, o = 0, a = 0, r = 0; r < e.length; r++)
                o = parseInt(e[r]),
                0 === r && (n = o,
                i = o),
                i < o - 1 && (a = i,
                t.push({
                    s: n,
                    e: i
                }),
                n = o),
                i = o;
            return n > 0 && a != i && t.push({
                s: n,
                e: i
            }),
            t
        }
        ,
        this.writeRange = function(e) {
            var t = this.ids2range(e);
            this.writeInt(t.length, 12);
            for (var n = 0; n < t.length; n++)
                t[n].s < t[n].e ? (this.writeBool(!0),
                this.writeInt(t[n].s, 16),
                this.writeInt(t[n].e, 16)) : (this.writeBool(!1),
                this.writeInt(t[n].s, 16))
        }
        ,
        this.writeBitFieldOrRange = function(e) {
            var t = this.getMaxId(e);
            this.writeInt(t, 16);
            var n = this.cs;
            this.cs = "",
            this.writeBool(!1),
            this.writeBitField(e, t);
            var i = this.cs;
            this.cs = "",
            this.writeBool(!0),
            this.writeRange(e);
            var o = this.cs;
            i.length > o.length ? n += o : n += i,
            this.cs = n
        }
        ,
        this.writeIntFibo = function(e) {
            this.cs += this.fibo.encode(e)
        }
        ,
        this.writeRangeFibo = function(e) {
            var t = this.ids2range(e)
              , n = t.length;
            this.writeInt(n, 12);
            for (var i = 0, o = 0; o < n; o++)
                t[o].s < t[o].e ? (this.writeBool(!0),
                this.writeIntFibo(t[o].s - i),
                this.writeIntFibo(t[o].e - t[o].s),
                i = t[o].e) : (this.writeBool(!1),
                this.writeIntFibo(t[o].s - i),
                i = t[o].s)
        }
        ,
        this.writeOptimizedRange = function(e) {
            var t = this.cs;
            this.cs = t,
            this.writeBool(0),
            this.writeVarBitField(e);
            var n = this.cs;
            this.cs = t,
            this.writeBool(1),
            this.writeRangeFibo(e);
            var i = this.cs;
            this.cs = n.length <= i.length ? n : i
        }
        ,
        this.writeOptimizedIntRange = function(e) {
            var t = this.getMaxId(e)
              , n = this.cs;
            this.cs = n,
            this.writeInt(t, 16),
            this.writeBool(0),
            this.writeBitField(e, t);
            var i = this.cs;
            this.cs = n,
            this.writeInt(t, 16),
            this.writeBool(1),
            this.writeRange(e);
            var o = this.cs;
            this.cs = i.length <= o.length ? i : o
        }
    }
    function So(e, t, n) {
        "boolean" != typeof n && (n = !1),
        this.sectionID = e,
        this.apiPrefix = t,
        this.isCustomFormat = n,
        this.segmentDelimiter = ".",
        this.fieldDefintion = [],
        this.input = "",
        this.fieldTypes = {
            bool: {
                read: "readBool",
                write: "writeBool",
                jstype: "boolean"
            },
            int: {
                read: "readInt",
                write: "writeInt",
                jstype: "number",
                requireLength: !0
            },
            fibo: {
                read: "readIntFibo",
                write: "writeIntFibo",
                jstype: "number"
            },
            date: {
                read: "readDate",
                write: "writeDate",
                jstype: "Date"
            },
            datetime: {
                read: "readDate",
                write: "writeDate",
                jstype: "Date"
            },
            lang: {
                read: "readLang",
                write: "writeLang",
                jstype: "string"
            },
            string: {
                read: "readString",
                write: "writeString",
                jstype: "string",
                requireLength: !0
            },
            bits: {
                read: "readBitField",
                write: "writeBitField",
                jstype: "number[]",
                requireLength: !0
            },
            varbits: {
                read: "readVarBitField",
                write: "writeVarBitField",
                jstype: "number[]"
            },
            nbits: {
                read: "readNBitField",
                write: "writeNBitField",
                jstype: "number[]",
                requireLength: !0,
                requireSize: !0
            },
            range: {
                read: "readRange",
                write: "writeRange",
                jstype: "number[]"
            },
            rangefibo: {
                read: "readRangeFibo",
                write: "writeRangeFibo",
                jstype: "number[]"
            },
            optimizedrange: {
                read: "readOptimizedRange",
                write: "writeOptimizedRange",
                jstype: "number[]"
            },
            optimizedintrange: {
                read: "readOptimizedIntRange",
                write: "writeOptimizedIntRange",
                jstype: "number[]"
            }
        },
        this.clone = function() {
            var e = new So(this.sectionID,this.apiPrefix,this.isCustomFormat);
            return e.fieldDefintion = JSON.parse(JSON.stringify(this.fieldDefintion)),
            e.input = this.input,
            e
        }
        ,
        this.addField = function(e, t, n, i, o, a, r) {
            return "number" != typeof n && (n = 0),
            "number" != typeof i && (i = 0),
            "number" != typeof o && (o = 0),
            "boolean" != typeof a && (a = !1),
            null != r && a || (r = !1),
            t in this.fieldTypes && this.fieldDefintion.push({
                name: e,
                definitiontype: t,
                length: n,
                size: o,
                segment: i,
                value: null,
                hasfixedvalue: a,
                fixedvalue: r
            }),
            this
        }
        ,
        this.read = function(e) {
            if (this.input = e,
            this.isCustomFormat)
                return !1;
            for (var t = e.split(this.segmentDelimiter), n = 0; n < t.length; n++)
                for (var i = new Po(t[n]), o = 0; o < this.fieldDefintion.length; o++)
                    if (this.fieldDefintion[o].segment == n) {
                        var a = this.fieldTypes[this.fieldDefintion[o].definitiontype];
                        this.fieldDefintion[o].value = this.sanitizeType(i[a.read](this.fieldDefintion[o].length, this.fieldDefintion[o].size), a.jstype)
                    }
        }
        ,
        this.write = function() {
            if (this.isCustomFormat)
                return this.input;
            for (var e = [], t = 0; t < this.fieldDefintion.length; t++) {
                this.fieldDefintion[t].segment in e || (e[this.fieldDefintion[t].segment] = new _o);
                var n = this.fieldTypes[this.fieldDefintion[t].definitiontype]
                  , i = this.fieldDefintion[t].value;
                this.fieldDefintion[t].hasfixedvalue && (i = this.fieldDefintion[t].fixedvalue);
                var o = this.fieldDefintion[t].length
                  , a = this.fieldDefintion[t].size;
                e[this.fieldDefintion[t].segment][n.write](this.sanitizeType(i, n.jstype), o, a)
            }
            for (var r = 0; r < e.length; r++)
                e[r] = e[r].getBase64CS();
            return this.input = e.join(this.segmentDelimiter),
            this.input
        }
        ,
        this.sanitizeType = function(e, t) {
            if ("[]" == t.substring(t.length - 2)) {
                t = t.substring(0, t.length - 2),
                Array.isArray(e) || (e = []);
                for (var n = 0; n < e.length; n++)
                    e[n] = this.sanitizeType(e[n], t);
                return e
            }
            switch (t) {
            case "boolean":
            case "bool":
                return !0 === e || 1 === e;
            case "number":
            case "int":
                return isNaN(parseInt(e)) ? 0 : parseInt(e);
            case "float":
                return isNaN(parseFloat(e)) ? 0 : parseFloat(e);
            case "string":
                return "string" == typeof e ? e : "number" == typeof e ? e + "" : "";
            case "Date":
            case "date":
            case "datetime":
                return e instanceof Date && !isNaN(e) ? e : "number" == typeof e ? new Date(e) : new Date
            }
            return null
        }
        ,
        this.setValue = function(e, t) {
            for (var n = !1, i = 0; i < this.fieldDefintion.length; i++)
                if (this.fieldDefintion[i].name == e) {
                    var o = this.fieldTypes[this.fieldDefintion[i].definitiontype];
                    this.fieldDefintion[i].value = this.sanitizeType(t, o.jstype),
                    n = !0;
                    break
                }
            return n
        }
        ,
        this.getValue = function(e) {
            for (var t = 0; t < this.fieldDefintion.length; t++)
                if (this.fieldDefintion[t].name == e) {
                    var n = this.fieldTypes[this.fieldDefintion[t].definitiontype]
                      , i = this.fieldDefintion[t].value;
                    return this.fieldDefintion[t].hasfixedvalue && (i = this.fieldDefintion[t].fixedvalue),
                    this.sanitizeType(i, n.jstype)
                }
            return null
        }
        ,
        this.toObject = function() {
            for (var e = {}, t = 0; t < this.fieldDefintion.length; t++) {
                var n = this.fieldTypes[this.fieldDefintion[t].definitiontype];
                e[this.fieldDefintion[t].name] = this.sanitizeType(this.fieldDefintion[t].value, n.jstype)
            }
            return e
        }
    }
    var Ao = new So(2,"tcfeuv2").addField("Version", "int", 6).addField("Created", "datetime").addField("LastUpdated", "datetime").addField("CmpId", "int", 12).addField("CmpVersion", "int", 12).addField("ConsentScreen", "int", 6).addField("ConsentLanguage", "string", 2).addField("VendorListVersion", "int", 12).addField("TcfPolicyVersion", "int", 6).addField("IsServiceSpecific", "bool").addField("UseNonStandardStacks", "bool").addField("SpecialFeatureOptIns", "bits", 12).addField("PurposeConsent", "bits", 24).addField("PurposesLITransparency", "bits", 24).addField("PurposeOneTreatment", "bool").addField("PublisherCC", "string", 2).addField("VendorConsent", "optimizedintrange").addField("VendorLegitimateInterest", "optimizedintrange").addField("NumPubRestrictions", "int", 12)
      , Bo = new So(7,"usnat").addField("Version", "int", 6).addField("SharingNotice", "int", 2).addField("SaleOptOutNotice", "int", 2).addField("SharingOptOutNotice", "int", 2).addField("TargetedAdvertisingOptOutNotice", "int", 2).addField("SensitiveDataProcessingOptOutNotice", "int", 2).addField("SensitiveDataLimitUseNotice", "int", 2).addField("SaleOptOut", "int", 2).addField("SharingOptOut", "int", 2).addField("TargetedAdvertisingOptOut", "int", 2).addField("SensitiveDataProcessing", "nbits", 12, 0, 2).addField("KnownChildSensitiveDataConsents", "nbits", 2, 0, 2).addField("PersonalDataConsents", "int", 2).addField("MspaCoveredTransaction", "int", 2).addField("MspaOptOutOptionMode", "int", 2).addField("MspaServiceProviderMode", "int", 2).addField("SubsectionType", "int", 2, 1, 0, !0, 1).addField("Gpc", "bool", 1, 1);
    function Oo(e) {
        this.Version = 1,
        this.SubVersions = [],
        this.Created = "cmp_debug_overridetime"in window ? window.cmp_debug_overridetime : new Date(1),
        this.LastUpdated = "cmp_debug_overridetime"in window ? window.cmp_debug_overridetime : new Date(1),
        this.CmpId = 0,
        this.CmpVersion = 0,
        this.ConsentScreen = 0,
        this.ConsentLanguage = "en",
        this.VendorListVersion = 0,
        this.PurposesAllowed = [],
        this.VendorsAllowed = [],
        this.TcfPolicyVersion = 2,
        this.IsServiceSpecific = 1,
        this.UseNonStandardStacks = 0,
        this.SpecialFeatureOptIns = [],
        this.PurposesLI = [],
        this.PurposeOneTreatment = 0,
        this.PublisherCC = "",
        this.VendorsLI = [],
        this.PublisherRestrictions = [],
        this.hasDisclosedVendors = !1,
        this.DisclosedVendors = [],
        this.hasAllowedVendors = !1,
        this.AllowedVendors = [],
        this.hasPublisherTC = !1,
        this.PubPurposesConsent = [],
        this.PubPurposesLI = [],
        this.CustomPurposesConsent = [],
        this.CustomPurposesLI = [],
        this.hasUserChoice = !1,
        this.CustomVendorsAllowed = [],
        this.gppManifests = [Ao, Bo],
        this.gppVersion = 1,
        this.gppSectionIds = [],
        this.gppSections = [],
        this.newFromManifest = function(e) {
            for (var t = 0; t < this.gppManifests.length; t++)
                if (this.gppManifests[t].sectionID == e)
                    return this.gppManifests[t].clone()
        }
        ,
        this.fromString = function(e) {
            if ("B" == e.substring(0, 1)) {
                var t = new Po(e);
                this.Version = t.readInt(6),
                this.SubVersions = [1],
                this.Created = t.readDate(),
                this.LastUpdated = t.readDate(),
                this.CmpId = t.readInt(12),
                this.CmpVersion = t.readInt(12),
                this.ConsentScreen = t.readInt(6),
                this.ConsentLanguage = t.readLang(),
                this.VendorListVersion = t.readInt(12),
                this.PurposesAllowed = t.readBitField(24);
                var n = t.readInt(16);
                t.readBool() ? (t.readBool(),
                this.VendorsAllowed = t.readRange()) : this.VendorsAllowed = t.readBitField(n)
            } else if ("C" == e.substring(0, 1)) {
                var i = e.split(".");
                t = new Po(e = i[0]);
                this.Version = t.readInt(6),
                this.SubVersions = [2],
                this.Created = t.readDate(),
                this.LastUpdated = t.readDate(),
                this.CmpId = t.readInt(12),
                this.CmpVersion = t.readInt(12),
                this.ConsentScreen = t.readInt(6),
                this.ConsentLanguage = t.readLang(),
                this.VendorListVersion = t.readInt(12),
                this.TcfPolicyVersion = t.readInt(6),
                this.IsServiceSpecific = t.readBool(),
                this.UseNonStandardStacks = t.readBool(),
                this.SpecialFeatureOptIns = t.readBitField(12),
                this.PurposesAllowed = t.readBitField(24),
                this.PurposesLI = t.readBitField(24),
                this.PurposeOneTreatment = t.readBool(),
                this.PublisherCC = t.readLang();
                n = t.readInt(16);
                t.readBool() ? this.VendorsAllowed = t.readRange() : this.VendorsAllowed = t.readBitField(n);
                n = t.readInt(16);
                if (t.readBool() ? this.VendorsLI = t.readRange() : this.VendorsLI = t.readBitField(n),
                this.IsServiceSpecific) {
                    this.PublisherRestrictions = [];
                    for (var o = t.readInt(12), a = 0; a < o; a++) {
                        var r = t.readInt(6)
                          , s = t.readInt(2)
                          , c = t.readRange();
                        this.PublisherRestrictions.push({
                            purposeID: r,
                            type: s,
                            vendors: c
                        })
                    }
                }
                this.hasDisclosedVendors = !1,
                this.hasAllowedVendors = !1,
                this.hasPublisherTC = !1;
                for (a = 1; a < i.length; a++) {
                    var l = (t = new Po(i[a])).readInt(3);
                    if (1 == l) {
                        this.hasDisclosedVendors = !0;
                        n = t.readInt(16);
                        t.readBool() ? this.DisclosedVendors = t.readRange() : this.DisclosedVendors = t.readBitField(n)
                    } else if (2 == l) {
                        this.hasAllowedVendors = !0;
                        n = t.readInt(16);
                        t.readBool() ? this.AllowedVendors = t.readRange() : this.AllowedVendors = t.readBitField(n)
                    } else if (3 == l) {
                        this.hasPublisherTC = !0,
                        this.PubPurposesConsent = t.readBitField(24),
                        this.PubPurposesLI = t.readBitField(24);
                        var p = t.readInt(6);
                        this.CustomPurposesConsent = t.readBitField(p),
                        this.CustomPurposesLI = t.readBitField(p)
                    }
                }
            } else if ("D" == e.substring(0, 1)) {
                var u = (i = e.split("~"))[0];
                t = new Po("",this.fromB64ws(u));
                this.Version = t.readInt(6),
                this.SubVersions = [],
                this.gppVersion = t.readInt(6),
                this.gppSectionIds = t.readRangeFibo(),
                this.gppSections = [];
                for (a = 1; a < i.length; a++) {
                    for (var d = this.gppSectionIds.length >= a ? this.gppSectionIds[a - 1] : 0, h = i[a], f = null, b = 0; b < this.gppManifests.length; b++)
                        if (this.gppManifests[b].sectionID == d) {
                            f = this.gppManifests[b].clone();
                            break
                        }
                    if (null == f && (f = new So(d,"",!0)),
                    f.read(h),
                    2 == d) {
                        var m = new Oo(h);
                        this.SubVersions.push(2),
                        this.Created = m.Created,
                        this.LastUpdated = m.LastUpdated,
                        this.CmpId = m.CmpId,
                        this.CmpVersion = m.CmpVersion,
                        this.ConsentScreen = m.ConsentScreen,
                        this.ConsentLanguage = m.ConsentLanguage,
                        this.VendorListVersion = m.VendorListVersion,
                        this.PurposesAllowed = m.PurposesAllowed,
                        this.VendorsAllowed = m.VendorsAllowed,
                        this.TcfPolicyVersion = m.TcfPolicyVersion,
                        this.IsServiceSpecific = m.IsServiceSpecific,
                        this.UseNonStandardStacks = m.UseNonStandardStacks,
                        this.SpecialFeatureOptIns = m.SpecialFeatureOptIns,
                        this.PurposesLI = m.PurposesLI,
                        this.PurposeOneTreatment = m.PurposeOneTreatment,
                        this.PublisherCC = m.PublisherCC,
                        this.VendorsLI = m.VendorsLI,
                        this.PublisherRestrictions = m.PublisherRestrictions
                    } else
                        5 == d && (this.SubVersions.push(5),
                        this.Created = f.getValue("Created"),
                        this.LastUpdated = f.getValue("LastUpdated"),
                        this.CmpId = f.getValue("CmpId"),
                        this.CmpVersion = f.getValue("CmpVersion"),
                        this.ConsentScreen = f.getValue("ConsentScreen"),
                        this.ConsentLanguage = f.getValue("ConsentLanguage"),
                        this.VendorListVersion = f.getValue("VendorListVersion"),
                        this.PurposesAllowed = f.getValue("PurposesExpressConsent"),
                        this.VendorsAllowed = f.getValue("VendorExpressConsent"),
                        this.TcfPolicyVersion = f.getValue("TcfPolicyVersion"),
                        this.UseNonStandardStacks = f.getValue("UseNonStandardStacks"),
                        this.SpecialFeatureOptIns = f.getValue("SpecialFeatureExpressConsent"),
                        this.PurposesLI = f.getValue("PurposesImpliedConsent"),
                        this.VendorsLI = f.getValue("VendorImpliedConsent"));
                    this.gppSections.push(f)
                }
            } else if ("a" == e.substring(0, 1)) {
                (t = new Po(e)).readInt(6),
                this.Version = t.readInt(6),
                this.SubVersions = [99],
                1 == this.Version && (this.Created = t.readDate(),
                this.hasUserChoice = t.readBool(),
                this.PurposesAllowed = t.readRange(),
                this.VendorsAllowed = t.readRange(),
                this.CustomVendorsAllowed = t.readRange())
            }
        }
        ,
        this.toString = function(e) {
            if ("boolean" != typeof e && (e = !0),
            e) {
                if (this.Version <= 1) {
                    for (var t = 0, n = 0; n < this.VendorsAllowed.length; n++)
                        t < this.VendorsAllowed[n] && (t = this.VendorsAllowed[n]);
                    (g = new _o).writeInt(1, 6),
                    g.writeDate("cmp_debug_overridetime"in window ? window.cmp_debug_overridetime : this.Created),
                    g.writeDate("cmp_debug_overridetime"in window ? window.cmp_debug_overridetime : this.LastUpdated),
                    g.writeInt(this.CmpId, 12),
                    g.writeInt(this.CmpVersion, 12),
                    g.writeInt(this.ConsentScreen, 6),
                    g.writeLang(this.ConsentLanguage),
                    g.writeInt(this.VendorListVersion, 12),
                    g.writeBitField(this.PurposesAllowed, 24),
                    g.writeInt(t, 16);
                    var i = g.getCS();
                    g.clear(),
                    g.writeBool(!1),
                    g.writeBitField(this.VendorsAllowed, t);
                    var o = i + g.getCS();
                    g.clear(),
                    g.writeBool(!0),
                    g.writeBool(!1),
                    g.writeRange(this.VendorsAllowed);
                    var a = i + g.getCS();
                    return o.length > a.length ? g.setCS(a) : g.setCS(o),
                    g.getBase64CS()
                }
                if (2 == this.Version) {
                    if ((g = new _o).writeInt(2, 6),
                    this.LastUpdated.setHours(0),
                    this.LastUpdated.setMinutes(0),
                    this.LastUpdated.setSeconds(0),
                    this.LastUpdated.setMilliseconds(0),
                    g.writeDate("cmp_debug_overridetime"in window ? window.cmp_debug_overridetime : this.LastUpdated),
                    g.writeDate("cmp_debug_overridetime"in window ? window.cmp_debug_overridetime : this.LastUpdated),
                    g.writeInt(this.CmpId, 12),
                    g.writeInt(this.CmpVersion, 12),
                    g.writeInt(this.ConsentScreen, 6),
                    g.writeLang(this.ConsentLanguage),
                    g.writeInt("cmp_debug_gvlversion"in window ? window.cmp_debug_gvlversion : this.VendorListVersion, 12),
                    g.writeInt(this.TcfPolicyVersion, 6),
                    g.writeBool(!0),
                    g.writeBool(this.UseNonStandardStacks),
                    g.writeBitField(this.SpecialFeatureOptIns, 12),
                    g.writeBitField(this.PurposesAllowed, 24),
                    g.writeBitField(this.PurposesLI, 24),
                    g.writeBool(this.PurposeOneTreatment),
                    2 != this.PublisherCC.length && (this.PublisherCC = "EU"),
                    g.writeLang(this.PublisherCC),
                    g.writeBitFieldOrRange(this.VendorsAllowed),
                    g.writeBitFieldOrRange(this.VendorsLI),
                    this.IsServiceSpecific) {
                        g.writeInt(this.PublisherRestrictions.length, 12);
                        for (n = 0; n < this.PublisherRestrictions.length; n++) {
                            var r = this.PublisherRestrictions[n];
                            g.writeInt(r.purposeID, 6),
                            g.writeInt(r.type, 2),
                            g.writeRange(r.vendors)
                        }
                    } else
                        g.writeInt(0, 12);
                    var s = g.getBase64CS()
                      , c = ""
                      , l = ""
                      , p = "";
                    if (this.hasDisclosedVendors && ((g = new _o).writeInt(1, 3),
                    g.writeBitFieldOrRange(this.DisclosedVendors),
                    c = g.getBase64CS()),
                    this.hasAllowedVendors && ((g = new _o).writeInt(2, 3),
                    g.writeBitFieldOrRange(this.AllowedVendors),
                    l = g.getBase64CS()),
                    this.hasPublisherTC) {
                        (g = new _o).writeInt(3, 3),
                        g.writeBitField(this.PubPurposesConsent, 24),
                        g.writeBitField(this.PubPurposesLI, 24);
                        var u = 0;
                        for (n = 0; n < this.CustomPurposesConsent.length; n++)
                            this.CustomPurposesConsent[n] > u && (u = this.CustomPurposesConsent[n]);
                        for (n = 0; n < this.CustomPurposesLI.length; n++)
                            this.CustomPurposesLI[n] > u && (u = this.CustomPurposesLI[n]);
                        g.writeInt(u, 6),
                        g.writeBitField(this.CustomPurposesConsent, u),
                        g.writeBitField(this.CustomPurposesLI, u),
                        p = g.getBase64CS()
                    }
                    return s + (c.length > 0 ? "." : "") + c + (l.length > 0 ? "." : "") + l + (p.length > 0 ? "." : "") + p
                }
                if (3 == this.Version) {
                    for (n = 0; n < this.SubVersions.length; n++)
                        if (2 == this.SubVersions[n]) {
                            var d = new Oo("");
                            d.Version = 2,
                            d.Created = this.Created,
                            d.LastUpdated = this.LastUpdated,
                            d.CmpId = this.CmpId,
                            d.CmpVersion = this.CmpVersion,
                            d.ConsentScreen = this.ConsentScreen,
                            d.ConsentLanguage = this.ConsentLanguage,
                            d.VendorListVersion = this.VendorListVersion,
                            d.PurposesAllowed = this.PurposesAllowed,
                            d.VendorsAllowed = this.VendorsAllowed,
                            d.TcfPolicyVersion = this.TcfPolicyVersion,
                            d.IsServiceSpecific = this.IsServiceSpecific,
                            d.UseNonStandardStacks = this.UseNonStandardStacks,
                            d.SpecialFeatureOptIns = this.SpecialFeatureOptIns,
                            d.PurposesLI = this.PurposesLI,
                            d.PurposeOneTreatment = this.PurposeOneTreatment,
                            d.PublisherCC = this.PublisherCC,
                            d.VendorsLI = this.VendorsLI,
                            d.PublisherRestrictions = this.PublisherRestrictions;
                            var h = d.toString();
                            (f = this.newFromManifest(2)).isCustomFormat = !0,
                            f.read(h),
                            -1 == this.gppSectionIds.indexOf(2) ? (this.gppSections.push(f),
                            this.gppSectionIds.push(2)) : this.gppSections[this.gppSectionIds.indexOf(2)] = f
                        } else if (5 == this.SubVersions[n]) {
                            var f;
                            (f = this.newFromManifest(5)).setValue("Version", 1),
                            f.setValue("Created", this.Created),
                            f.setValue("LastUpdated", this.LastUpdated),
                            f.setValue("CmpId", this.CmpId),
                            f.setValue("CmpVersion", this.CmpVersion),
                            f.setValue("ConsentScreen", this.ConsentScreen),
                            f.setValue("ConsentLanguage", this.ConsentLanguage),
                            f.setValue("VendorListVersion", this.VendorListVersion),
                            f.setValue("PurposesExpressConsent", this.PurposesAllowed),
                            f.setValue("VendorExpressConsent", this.VendorsAllowed),
                            f.setValue("TcfPolicyVersion", this.TcfPolicyVersion),
                            f.setValue("UseNonStandardStacks", this.UseNonStandardStacks),
                            f.setValue("SpecialFeatureExpressConsent", this.SpecialFeatureOptIns),
                            f.setValue("PurposesImpliedConsent", this.PurposesLI),
                            f.setValue("VendorImpliedConsent", this.VendorsLI),
                            -1 == this.gppSectionIds.indexOf(5) ? (this.gppSections.push(f),
                            this.gppSectionIds.push(5)) : this.gppSections[this.gppSectionIds.indexOf(5)] = f
                        }
                    (g = new _o).writeInt(3, 6),
                    g.writeInt(this.gppVersion, 6);
                    var b = []
                      , m = [];
                    this.gppSections.sort((function(e, t) {
                        return parseInt(e.sectionID) < parseInt(t.sectionID) ? -1 : parseInt(e.sectionID) > parseInt(t.sectionID) ? 1 : 0
                    }
                    ));
                    for (n = 0; n < this.gppSections.length; n++)
                        -1 == b.indexOf(this.gppSections[n].sectionID) && (b.push(this.gppSections[n].sectionID),
                        m.push(this.gppSections[n].write()));
                    return this.gppSectionIds = b,
                    g.writeRangeFibo(b),
                    m.unshift(this.toB64ws(g.getCS())),
                    m.join("~")
                }
            } else {
                var g;
                if (this.Version <= 1)
                    return (g = new _o).writeInt(26, 6),
                    g.writeInt(1, 6),
                    g.writeDate("cmp_debug_overridetime"in window ? window.cmp_debug_overridetime : this.Created),
                    g.writeBool(this.hasUserChoice),
                    g.writeRange(this.PurposesAllowed),
                    g.writeRange(this.VendorsAllowed),
                    g.writeRange(this.CustomVendorsAllowed),
                    g.getBase64CS()
            }
        }
        ,
        this.setGppField = function(e, t, n) {
            for (var i = -1, o = 0; o < this.gppSections.length; o++)
                this.gppSections[o].apiPrefix == e && (i = o);
            if (-1 == i)
                for (o = 0; o < this.gppManifests.length; o++)
                    if (this.gppManifests[o].apiPrefix == e) {
                        this.gppSections.push(this.gppManifests[o].clone()),
                        i = this.gppSections.length - 1;
                        break
                    }
            return !!this.gppSections[i] && this.gppSections[i].setValue(t, n)
        }
        ,
        this.getGppField = function(e, t) {
            for (var n = -1, i = 0; i < this.gppSections.length; i++)
                this.gppSections[i].apiPrefix == e && (n = i);
            return this.gppSections[n] ? this.gppSections[n].getValue(t) : null
        }
        ,
        this.hasGppField = function(e, t) {
            return null === this.getGppField(e, t)
        }
        ,
        this.b64wschars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        this.toB64ws = function(e) {
            for (var t = ""; e.length % 6 != 0; )
                e += "0";
            for (var n = 0; n < e.length; n += 6) {
                var i = e.substring(n, n + 6)
                  , o = parseInt(i, 2);
                t += this.b64wschars.substring(o, o + 1)
            }
            return t
        }
        ,
        this.fromB64ws = function(e) {
            for (var t = "", n = 0; n < e.length; n++) {
                var i = e.charAt(n)
                  , o = this.b64wschars.indexOf(i);
                if (-1 == o)
                    break;
                for (var a = o.toString(2); a.length < 6; )
                    a = "0" + a;
                t += a
            }
            return t
        }
        ,
        "string" == typeof e && "" != e && this.fromString(e)
    }
    var Io = function() {
        function e(t, n) {
            i(this, e),
            this.manager = t,
            this.model = n
        }
        return a(e, [{
            key: "sectionId",
            value: function() {
                throw new Error("Not implemented")
            }
        }, {
            key: "update",
            value: function() {
                throw new Error("Not implemented")
            }
        }, {
            key: "getString",
            value: function() {
                throw new Error("Not implemented")
            }
        }, {
            key: "getSection",
            value: function() {
                throw new Error("Not implemented")
            }
        }, {
            key: "getField",
            value: function() {
                throw new Error("Not implemented")
            }
        }, {
            key: "customCommands",
            value: function() {
                return {}
            }
        }], [{
            key: "sectionName",
            value: function() {
                throw new Error("Not implemented")
            }
        }]),
        e
    }()
      , To = function() {
        function e(t) {
            i(this, e),
            this.model = t,
            this.plugins = {}
        }
        return a(e, [{
            key: "register",
            value: function(e) {
                if (!((null == e ? void 0 : e.prototype)instanceof Io) || (null == e ? void 0 : e.prototype) === Io.prototype)
                    throw new TypeError("plugin is not valid");
                var t = e.sectionName();
                t in this.plugins ? console.warn("A plugin for section ".concat(t, " already exists")) : this.plugins[t] = new e(this,this.model)
            }
        }, {
            key: "get",
            value: function(e) {
                return this.plugins[e]
            }
        }, {
            key: "sectionNames",
            value: function() {
                return Object.keys(this.plugins)
            }
        }, {
            key: "sectionIds",
            value: function() {
                var e = this;
                return this.sectionNames().map((function(t) {
                    return e.plugins[t].sectionId()
                }
                ))
            }
        }]),
        e
    }()
      , Lo = function() {
        function e(t, n) {
            var o = this
              , a = t.cmpId
              , r = t.plugins
              , s = t.applicableApis;
            i(this, e),
            this.model = new vo(a,n),
            this.model.setFireEvent(this.fireEvent.bind(this));
            var c = new To(this.model.data);
            this.pluginManager = c,
            r.forEach((function(e) {
                return c.register(e)
            }
            )),
            this.model.data.supportedAPIs = c.sectionNames(),
            this.model.data.supportedAPIs_1_1 = c.sectionNames().map((function(e) {
                return "".concat(c.get(e).sectionId(), ":").concat(e)
            }
            )),
            this.model.data.applicableSections = s.filter((function(e) {
                return -1 !== o.model.data.supportedAPIs.indexOf(e)
            }
            )).map((function(e) {
                return c.get(e).sectionId()
            }
            )),
            this.callResponder = new Co(this.model,c,n),
            this.fireEvent("cmpStatus", this.model.data.cmpStatus)
        }
        return a(e, [{
            key: "fireEvent",
            value: function(e, t) {
                var n = this
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , o = wo.reduce((function(e, t) {
                    return e[t] = n.model.getPingData(t),
                    e
                }
                ), {})
                  , a = ko(i);
                this.callResponder.events.forEach((function(n) {
                    var i = n.id
                      , r = n.callback
                      , s = n.version
                      , c = ko(void 0 === s ? 1 : s);
                    try {
                        a && a !== c || r({
                            eventName: e,
                            listenerId: i,
                            data: t,
                            pingData: o[c]
                        })
                    } catch (t) {
                        console.error("Error occured in while handling event '".concat(e, "' by listener ").concat(i, ":"), t)
                    }
                }
                ))
            }
        }, {
            key: "setParsedSections",
            value: function(e) {
                var t = this;
                this.model.data.parsedSections = {},
                e.forEach((function(e) {
                    var n = null == e ? void 0 : e.parsedSection
                      , i = null == n ? void 0 : n.apiPrefix;
                    t.model.data.parsedSections[i] = null == n ? void 0 : n.toObject()
                }
                ))
            }
        }, {
            key: "update",
            value: function(e, t) {
                var n, i, o = this, a = e.updatedSections, s = e.displayStatus, c = [];
                if (this.model.data.cmpStatus === co && (this.model.data.cmpStatus = lo,
                c.push(["cmpStatus", lo])),
                s && s !== this.model.data.cmpDisplayStatus && (this.model.data.cmpDisplayStatus = s,
                c.push(["cmpDisplayStatus", s])),
                a) {
                    Object.keys(a).forEach((function(e) {
                        var t = o.pluginManager.get(e);
                        t && (t.update(a[e]) && (o.model.data.gppUpdatedSectionIds[t.sectionId()] = !0,
                        c.push(["sectionChange", e])))
                    }
                    ));
                    var l = this.pluginManager.sectionNames().map((function(e) {
                        return o.pluginManager.get(e)
                    }
                    )).filter((function(e) {
                        return e.sectionId()in o.model.data.gppUpdatedSectionIds
                    }
                    ));
                    this.setParsedSections(l),
                    this.model.data.gppString = (n = l,
                    (i = new Oo).Version = 3,
                    i.gppSections = n.map((function(e) {
                        return {
                            sectionID: e.sectionId(),
                            write: function() {
                                return e.getString()
                            }
                        }
                    }
                    )),
                    i.toString())
                }
                if (t !== mo) {
                    var p, u = (r(p = {}, bo, fo),
                    r(p, go, ho),
                    p);
                    if (this.model.data.signalStatus !== u[t])
                        switch (this.model.data.signalStatus = u[t],
                        t) {
                        case bo:
                            c.unshift(["signalStatus", this.model.data.signalStatus, "1.1"]);
                            break;
                        case go:
                            c.push(["signalStatus", this.model.data.signalStatus, "1.1"])
                        }
                }
                c.forEach((function(e) {
                    return o.fireEvent.apply(o, f(e))
                }
                ))
            }
        }]),
        e
    }();
    function Eo() {
        this.ncache = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233],
        this.ecache = [],
        this.maxfibo = 30,
        this.fibo = function(e) {
            if (e in this.ncache)
                return this.ncache[e];
            var t = e - 1
              , n = e - 2;
            if (t in this.ncache && n in this.ncache)
                return this.ncache[e] = this.ncache[t] + this.ncache[n],
                this.ncache[e];
            for (var i = 0, o = 1, a = 0, r = 0; r < e; r++)
                a = i,
                i = o,
                o += a;
            return this.ncache[e] = i,
            i
        }
        ,
        this.largeOrEqual = function(e) {
            for (var t = 0, n = 1; n < this.maxfibo && this.fibo(n) <= e; n++)
                t = n;
            return t
        }
        ,
        this.encode = function(e) {
            if (e <= 0)
                return "";
            if (e in this.ecache)
                return this.ecache[e];
            for (var t = e, n = this.largeOrEqual(e), i = [], o = 0; o < n + 3; o++)
                i[o] = 0;
            o = n;
            for (var a = 0; e > 0 && a <= this.maxfibo && o >= 0; )
                for (a++,
                i[o] = "1",
                e -= this.fibo(o),
                o--; o >= 0 && this.ncache[o] > e; )
                    i[o] = "0",
                    o--;
            return i[n + 1] = "1",
            i = i.slice(0, n + 2),
            this.ecache[t] = i.join(""),
            this.ecache[t]
        }
        ,
        this.decode = function(e) {
            if ("" == e)
                return 0;
            for (var t = (e = e.substring(0, e.length - 1)).length, n = 0, i = 0; i < t; i++)
                "1" == e.substring(i, i + 1) && (n += this.fibo(i));
            return n
        }
    }
    function No(e, t) {
        this.rpl = function(e, t, n) {
            return e.split(t).join(n)
        }
        ,
        this.repeat = function(e) {
            for (var t = "", n = 0; n < e; n++)
                t += "0";
            return t
        }
        ,
        this.padLeft = function(e, t) {
            return this.repeat(Math.max(0, t)) + e
        }
        ,
        this.base64toBits = function(e) {
            for (e = this.rpl(e, "%2B", "+"),
            e = this.rpl(e, "%2F", "/"),
            e = this.rpl(e, "-", "+"),
            e = this.rpl(e, "_", "/"),
            e = this.rpl(e, " ", "+"),
            e = this.rpl(e, "%2B", "+"); e.length % 4 != 0; )
                e += "=";
            var t;
            try {
                t = window.atob2(e)
            } catch (n) {
                try {
                    t = window.atob(e)
                } catch (e) {
                    t = ""
                }
            }
            for (var n = "", i = 0; i < t.length; i++) {
                var o = t.charCodeAt(i).toString(2);
                n += this.padLeft(o, 8 - o.length)
            }
            return n
        }
        ,
        this.read = function(e) {
            var t = this.cs.substring(0, e);
            return this.cs = this.cs.substring(e, 99999999),
            t
        }
        ,
        this.readInt = function(e) {
            return parseInt(this.read(e), 2)
        }
        ,
        this.readIntFibo = function() {
            var e = this.cs.substring(0, this.cs.indexOf("11") + 2);
            return "" != e ? (this.cs = this.cs.substring(e.length),
            this.fibo.decode(e)) : ""
        }
        ,
        this.readDate = function() {
            return new Date(100 * this.readInt(36))
        }
        ,
        this.readLang = function() {
            return this.readString(2).toLowerCase()
        }
        ,
        this.readString = function(e) {
            for (var t = "", n = 0; n < e; n++)
                t += String.fromCharCode(this.readInt(6) + 65);
            return t
        }
        ,
        this.readBool = function() {
            return 1 === parseInt(this.read(1), 2)
        }
        ,
        this.readBitField = function(e) {
            var t = this.read(e);
            if ("" === t)
                return [];
            t = t.split("");
            for (var n = [], i = 0; i < e; i++)
                1 === parseInt(t[i]) && -1 === n.indexOf(i + 1) && n.push(i + 1);
            return n
        }
        ,
        this.readNBitField = function(e, t) {
            for (var n = [], i = 1; i <= e; i++)
                n.push(this.readInt(t));
            return n
        }
        ,
        this.readVarBitField = function() {
            var e = this.readInt(16);
            return this.readBitField(e)
        }
        ,
        this.readRange = function() {
            for (var e = this.readInt(12), t = [], n = 0, i = 0, o = 0; o < e; o++) {
                this.readBool() ? (n = this.readInt(16),
                i = this.readInt(16)) : i = n = this.readInt(16);
                for (var a = n; a <= i; a++)
                    a < 1 || t.push(a)
            }
            return t
        }
        ,
        this.readRangeFibo = function() {
            for (var e = this.readInt(12), t = [], n = 0, i = 0, o = 0, a = 0; a < e; a++) {
                o = i = this.readBool() ? (n = this.readIntFibo() + o) + this.readIntFibo() : n = this.readIntFibo() + o;
                for (var r = n; r <= i; r++)
                    r < 1 || t.push(r)
            }
            return t
        }
        ,
        this.readOptimizedRange = function() {
            return !0 === this.readBool() ? this.readRangeFibo() : this.readVarBitField()
        }
        ,
        this.readOptimizedIntRange = function() {
            var e = this.readInt(16);
            return !0 === this.readBool() ? this.readRange() : this.readBitField(e)
        }
        ,
        this.cs = "string" == typeof t && "" !== t ? t : this.base64toBits(e),
        this.fibo = new Eo
    }
    function Do() {
        this.cs = "",
        this.fibo = new Eo,
        this.clear = function() {
            this.cs = ""
        }
        ,
        this.getCS = function() {
            return this.cs
        }
        ,
        this.setCS = function(e) {
            this.cs = e
        }
        ,
        this.getBase64CS = function() {
            return this.bitsToBase64(this.cs)
        }
        ,
        this.rpl = function(e, t, n) {
            return e.split(t).join(n)
        }
        ,
        this.repeat = function(e) {
            for (var t = "", n = 0; n < e; n++)
                t += "0";
            return t
        }
        ,
        this.padRight = function(e, t) {
            return e + this.repeat(Math.max(0, t))
        }
        ,
        this.bitsToBase64 = function(e) {
            if (e) {
                e = this.padRight(e, 7 - (e.length + 7) % 8);
                for (var t = "", n = 0; n < e.length; n += 8)
                    t += String.fromCharCode(parseInt(e.substring(n, n + 8), 2));
                var i = t;
                try {
                    t = window.btoa2(i)
                } catch (e) {
                    try {
                        t = window.btoa(i)
                    } catch (e) {
                        t = ""
                    }
                }
                return t = this.rpl(t, "+", "-"),
                t = this.rpl(t, "/", "_"),
                t = (t = this.rpl(t, " ", "+")).replace(/=+$/, "")
            }
            return null
        }
        ,
        this.padLeft = function(e, t) {
            return this.repeat(Math.max(0, t)) + e
        }
        ,
        this.repeat = function(e) {
            for (var t = "", n = 0; n < e; n++)
                t += "0";
            return t
        }
        ,
        this.getMaxId = function(e) {
            for (var t = 0, n = 0; n < e.length; n++)
                t < e[n] && (t = e[n]);
            return t
        }
        ,
        this.write = function(e) {
            this.cs += e
        }
        ,
        this.writeBool = function(e) {
            this.writeInt(!0 === e || 1 === e ? 1 : 0, 1)
        }
        ,
        this.writeInt = function(e, t) {
            var n;
            t >= (n = parseInt(e, 10).toString(2)).length && (n = this.padLeft(n, t - n.length)),
            n.length > t && (n = n.substring(0, t)),
            this.write(n)
        }
        ,
        this.writeDate = function(e) {
            e instanceof Date ? this.writeInt(e.getTime() / 100, 36) : this.writeInt(e, 36)
        }
        ,
        this.writeString = function(e, t) {
            for (e = e.substring(e, t); e.length < t; )
                e += " ";
            for (var n = 0; n < e.length; n++)
                this.writeInt(e.substring(n, n + 1).toUpperCase().charCodeAt(0) - 65, 6)
        }
        ,
        this.writeLang = function(e) {
            this.writeString(e.substring(0, 2), 2)
        }
        ,
        this.writeBitField = function(e, t) {
            for (var n = 1; n <= t; n++)
                this.writeBool(-1 !== cmp_fnd(e, n))
        }
        ,
        this.writeNBitField = function(e, t, n) {
            for (var i = 0; i < t; i++)
                this.writeInt(i in e ? parseInt(e[i]) : 0, n)
        }
        ,
        this.writeVarBitField = function(e) {
            var t = this.getMaxId(e);
            this.writeInt(t, 16),
            this.writeBitField(e, t)
        }
        ,
        this.ids2range = function(e) {
            for (e.sort((function(e, t) {
                return parseInt(e) < parseInt(t) ? -1 : parseInt(e) > parseInt(t) ? 1 : 0
            }
            )); e.length > 0 && 0 === e[0]; )
                e.shift();
            for (var t = [], n = 0, i = 0, o = 0, a = 0, r = 0; r < e.length; r++)
                o = parseInt(e[r]),
                0 === r && (n = o,
                i = o),
                i < o - 1 && (a = i,
                t.push({
                    s: n,
                    e: i
                }),
                n = o),
                i = o;
            return n > 0 && a != i && t.push({
                s: n,
                e: i
            }),
            t
        }
        ,
        this.writeRange = function(e) {
            var t = this.ids2range(e);
            this.writeInt(t.length, 12);
            for (var n = 0; n < t.length; n++)
                t[n].s < t[n].e ? (this.writeBool(!0),
                this.writeInt(t[n].s, 16),
                this.writeInt(t[n].e, 16)) : (this.writeBool(!1),
                this.writeInt(t[n].s, 16))
        }
        ,
        this.writeBitFieldOrRange = function(e) {
            var t = this.getMaxId(e);
            this.writeInt(t, 16);
            var n = this.cs;
            this.cs = "",
            this.writeBool(!1),
            this.writeBitField(e, t);
            var i = this.cs;
            this.cs = "",
            this.writeBool(!0),
            this.writeRange(e);
            var o = this.cs;
            i.length > o.length ? n += o : n += i,
            this.cs = n
        }
        ,
        this.writeIntFibo = function(e) {
            this.cs += this.fibo.encode(e)
        }
        ,
        this.writeRangeFibo = function(e) {
            var t = this.ids2range(e)
              , n = t.length;
            this.writeInt(n, 12);
            for (var i = 0, o = 0; o < n; o++)
                t[o].s < t[o].e ? (this.writeBool(!0),
                this.writeIntFibo(t[o].s - i),
                this.writeIntFibo(t[o].e - t[o].s),
                i = t[o].e) : (this.writeBool(!1),
                this.writeIntFibo(t[o].s - i),
                i = t[o].s)
        }
        ,
        this.writeOptimizedRange = function(e) {
            var t = this.cs;
            this.cs = t,
            this.writeBool(0),
            this.writeVarBitField(e);
            var n = this.cs;
            this.cs = t,
            this.writeBool(1),
            this.writeRangeFibo(e);
            var i = this.cs;
            this.cs = n.length <= i.length ? n : i
        }
        ,
        this.writeOptimizedIntRange = function(e) {
            var t = this.getMaxId(e)
              , n = this.cs;
            this.cs = n,
            this.writeInt(t, 16),
            this.writeBool(0),
            this.writeBitField(e, t);
            var i = this.cs;
            this.cs = n,
            this.writeInt(t, 16),
            this.writeBool(1),
            this.writeRange(e);
            var o = this.cs;
            this.cs = i.length <= o.length ? i : o
        }
    }
    function Fo(e, t, n) {
        "boolean" != typeof n && (n = !1),
        this.sectionID = e,
        this.apiPrefix = t,
        this.isCustomFormat = n,
        this.subsectionDelimiter = ".",
        this.fieldDefinition = [],
        this.input = "",
        this.disabledCommands = [],
        this.fieldTypes = {
            bool: {
                read: "readBool",
                write: "writeBool",
                jstype: "boolean"
            },
            int: {
                read: "readInt",
                write: "writeInt",
                jstype: "number",
                requireLength: !0
            },
            fibo: {
                read: "readIntFibo",
                write: "writeIntFibo",
                jstype: "number"
            },
            date: {
                read: "readDate",
                write: "writeDate",
                jstype: "Date"
            },
            datetime: {
                read: "readDate",
                write: "writeDate",
                jstype: "Date"
            },
            lang: {
                read: "readLang",
                write: "writeLang",
                jstype: "string"
            },
            string: {
                read: "readString",
                write: "writeString",
                jstype: "string",
                requireLength: !0
            },
            bits: {
                read: "readBitField",
                write: "writeBitField",
                jstype: "number[]",
                requireLength: !0
            },
            varbits: {
                read: "readVarBitField",
                write: "writeVarBitField",
                jstype: "number[]"
            },
            nbits: {
                read: "readNBitField",
                write: "writeNBitField",
                jstype: "number[]",
                requireLength: !0,
                requireSize: !0
            },
            range: {
                read: "readRange",
                write: "writeRange",
                jstype: "number[]"
            },
            rangefibo: {
                read: "readRangeFibo",
                write: "writeRangeFibo",
                jstype: "number[]"
            },
            optimizedrange: {
                read: "readOptimizedRange",
                write: "writeOptimizedRange",
                jstype: "number[]"
            },
            optimizedintrange: {
                read: "readOptimizedIntRange",
                write: "writeOptimizedIntRange",
                jstype: "number[]"
            }
        },
        this.clone = function() {
            var e = new Fo(this.sectionID,this.apiPrefix,this.isCustomFormat);
            return e.fieldDefinition = JSON.parse(JSON.stringify(this.fieldDefinition)),
            e.input = this.input,
            e.disabledCommands = JSON.parse(JSON.stringify(this.disabledCommands)),
            e
        }
        ,
        this.addField = function(e, t, n, i, o, a, r) {
            return "number" != typeof n && (n = 0),
            "number" != typeof i && (i = 0),
            "number" != typeof o && (o = 0),
            "boolean" != typeof a && (a = !1),
            null != r && a || (r = !1),
            t in this.fieldTypes && this.fieldDefinition.push({
                name: e,
                definitiontype: t,
                length: n,
                size: o,
                subsectionIndex: i,
                value: null,
                hasfixedvalue: a,
                fixedvalue: r,
                read: this.fieldTypes[t].read,
                write: this.fieldTypes[t].write,
                jstype: this.fieldTypes[t].jstype
            }),
            this
        }
        ,
        this.disableAPICommand = function(e) {
            return this.disabledCommands.push(e),
            this
        }
        ,
        this.read = function(e) {
            if (this.input = e,
            this.isCustomFormat)
                return !1;
            for (var t = e.split(this.subsectionDelimiter), n = 0; n < t.length; n++)
                for (var i = new No(t[n]), o = 0; o < this.fieldDefinition.length; o++)
                    if (this.fieldDefinition[o].subsectionIndex == n) {
                        var a = this.fieldTypes[this.fieldDefinition[o].definitiontype];
                        this.fieldDefinition[o].value = this.sanitizeType(i[a.read](this.fieldDefinition[o].length, this.fieldDefinition[o].size), a.jstype)
                    }
        }
        ,
        this.write = function() {
            if (this.isCustomFormat)
                return this.input;
            for (var e = [], t = 0; t < this.fieldDefinition.length; t++) {
                this.fieldDefinition[t].subsectionIndex in e || (e[this.fieldDefinition[t].subsectionIndex] = new Do);
                var n = this.fieldTypes[this.fieldDefinition[t].definitiontype]
                  , i = this.fieldDefinition[t].value;
                this.fieldDefinition[t].hasfixedvalue && (i = this.fieldDefinition[t].fixedvalue);
                var o = this.fieldDefinition[t].length
                  , a = this.fieldDefinition[t].size;
                e[this.fieldDefinition[t].subsectionIndex][n.write](this.sanitizeType(i, n.jstype), o, a)
            }
            for (var r = 0; r < e.length; r++)
                e[r] = e[r].getBase64CS();
            return this.input = e.join(this.subsectionDelimiter),
            this.input
        }
        ,
        this.sanitizeType = function(e, t) {
            if ("[]" == t.substring(t.length - 2)) {
                t = t.substring(0, t.length - 2),
                Array.isArray(e) || (e = []);
                for (var n = 0; n < e.length; n++)
                    e[n] = this.sanitizeType(e[n], t);
                return e
            }
            switch (t) {
            case "boolean":
            case "bool":
                return !0 === e || 1 === e;
            case "number":
            case "int":
                return isNaN(parseInt(e)) ? 0 : parseInt(e);
            case "float":
                return isNaN(parseFloat(e)) ? 0 : parseFloat(e);
            case "string":
                return "string" == typeof e ? e : "number" == typeof e ? e + "" : "";
            case "Date":
            case "date":
            case "datetime":
                return e instanceof Date && !isNaN(e) ? e : "number" == typeof e ? new Date(e) : new Date
            }
            return null
        }
        ,
        this.setValue = function(e, t) {
            for (var n = !1, i = 0; i < this.fieldDefinition.length; i++)
                if (this.fieldDefinition[i].name == e) {
                    var o = this.fieldTypes[this.fieldDefinition[i].definitiontype];
                    this.fieldDefinition[i].value = this.sanitizeType(t, o.jstype),
                    n = !0;
                    break
                }
            return n
        }
        ,
        this.getValue = function(e) {
            for (var t = 0; t < this.fieldDefinition.length; t++)
                if (this.fieldDefinition[t].name == e) {
                    var n = this.fieldTypes[this.fieldDefinition[t].definitiontype]
                      , i = this.fieldDefinition[t].value;
                    return this.fieldDefinition[t].hasfixedvalue && (i = this.fieldDefinition[t].fixedvalue),
                    this.sanitizeType(i, n.jstype)
                }
            return null
        }
        ,
        this.toObject = function() {
            for (var e = [], t = 0, n = {}, i = !0, o = 0; o < this.fieldDefinition.length; o++) {
                var a = this.fieldTypes[this.fieldDefinition[o].definitiontype];
                this.fieldDefinition[o].subsectionIndex != t && (i || e.push(n),
                n = {},
                i = !0,
                t = this.fieldDefinition[o].subsectionIndex);
                var r = this.fieldDefinition[o].value;
                this.fieldDefinition[o].hasfixedvalue && (r = this.fieldDefinition[o].fixedvalue),
                n[this.fieldDefinition[o].name] = this.sanitizeType(r, a.jstype),
                i = !1
            }
            return i || e.push(n),
            e
        }
    }
    var Vo = new Fo(2,"tcfeuv2").addField("Version", "int", 6).addField("Created", "datetime").addField("LastUpdated", "datetime").addField("CmpId", "int", 12).addField("CmpVersion", "int", 12).addField("ConsentScreen", "int", 6).addField("ConsentLanguage", "string", 2).addField("VendorListVersion", "int", 12).addField("TcfPolicyVersion", "int", 6).addField("IsServiceSpecific", "bool").addField("UseNonStandardStacks", "bool").addField("SpecialFeatureOptIns", "bits", 12).addField("PurposeConsent", "bits", 24).addField("PurposesLITransparency", "bits", 24).addField("PurposeOneTreatment", "bool").addField("PublisherCC", "string", 2).addField("VendorConsent", "optimizedintrange").addField("VendorLegitimateInterest", "optimizedintrange").addField("NumPubRestrictions", "int", 12).disableAPICommand("getSection")
      , zo = function(e) {
        s(n, e);
        var t = d(n);
        function n(e, o) {
            var a, r, s;
            return i(this, n),
            s = t.call(this, e, o),
            null === (a = (r = window).__tcfapi) || void 0 === a || a.call(r, "addEventListener", 2, (function(e, t) {
                t && o.fireEvent(n.sectionName(), e)
            }
            )),
            s
        }
        return a(n, [{
            key: "sectionId",
            value: function() {
                return 2
            }
        }, {
            key: "update",
            value: function(e) {
                if (!e || e === this.tcString)
                    return !1;
                var t = Ao.clone();
                t.isCustomFormat = !1,
                t.read(e);
                var n = Vo.clone();
                return n.isCustomFormat = !1,
                n.read(e),
                this.parsedSection = t,
                this.parsedSection_1_1 = n,
                this.tcString = e,
                !0
            }
        }, {
            key: "getString",
            value: function() {
                var e;
                return null !== (e = this.tcString) && void 0 !== e ? e : ""
            }
        }, {
            key: "getSection",
            value: function(e) {
                var t, n, i, o;
                return 1 === e ? null !== (i = null === (o = this.parsedSection) || void 0 === o ? void 0 : o.toObject()) && void 0 !== i ? i : null : null !== (t = null === (n = this.parsedSection_1_1) || void 0 === n ? void 0 : n.toObject()) && void 0 !== t ? t : null
            }
        }, {
            key: "getField",
            value: function(e, t) {
                var n, i, o, a;
                return 1 === e ? null !== (o = null === (a = this.parsedSection) || void 0 === a ? void 0 : a.getValue(t)) && void 0 !== o ? o : void 0 : null !== (n = null === (i = this.parsedSection_1_1) || void 0 === i ? void 0 : i.getValue(t)) && void 0 !== n ? n : void 0
            }
        }, {
            key: "customCommands",
            value: function() {
                return {
                    getTCData: n.getTCData
                }
            }
        }], [{
            key: "sectionName",
            value: function() {
                return "tcfeuv2"
            }
        }, {
            key: "getTCData",
            value: function(e) {
                var t, n;
                null === (t = (n = window).__tcfapi) || void 0 === t || t.call(n, "addEventListener", 2, (function(t, n) {
                    var i;
                    null === (i = window.__tcfapi) || void 0 === i || i.__tcfapi("removeEventListener", 2, (function() {}
                    ), t.listenerId),
                    e(t, n)
                }
                ))
            }
        }]),
        n
    }(Io)
      , Ro = new Fo(7,"usnat").addField("Version", "int", 6).addField("SharingNotice", "int", 2).addField("SaleOptOutNotice", "int", 2).addField("SharingOptOutNotice", "int", 2).addField("TargetedAdvertisingOptOutNotice", "int", 2).addField("SensitiveDataProcessingOptOutNotice", "int", 2).addField("SensitiveDataLimitUseNotice", "int", 2).addField("SaleOptOut", "int", 2).addField("SharingOptOut", "int", 2).addField("TargetedAdvertisingOptOut", "int", 2).addField("SensitiveDataProcessing", "nbits", 12, 0, 2).addField("KnownChildSensitiveDataConsents", "nbits", 2, 0, 2).addField("PersonalDataConsents", "int", 2).addField("MspaCoveredTransaction", "int", 2).addField("MspaOptOutOptionMode", "int", 2).addField("MspaServiceProviderMode", "int", 2).addField("SubsectionType", "int", 2, 1, 0, !0, 1).addField("Gpc", "bool", 1, 1)
      , jo = function(e) {
        s(n, e);
        var t = d(n);
        function n(e, o) {
            return i(this, n),
            t.call(this, e, o)
        }
        return a(n, [{
            key: "sectionId",
            value: function() {
                return 7
            }
        }, {
            key: "update",
            value: function(e) {
                if (!e || e === this.usnatString)
                    return !1;
                var t = Bo.clone();
                t.isCustomFormat = !1,
                t.read(e);
                var n = Ro.clone();
                return n.isCustomFormat = !1,
                n.read(e),
                this.parsedSection = t,
                this.parsedSection_1_1 = n,
                this.usnatString = e,
                !0
            }
        }, {
            key: "getString",
            value: function() {
                var e;
                return null !== (e = this.usnatString) && void 0 !== e ? e : ""
            }
        }, {
            key: "getSection",
            value: function(e) {
                var t, n, i, o;
                return 1 === e ? null !== (i = null === (o = this.parsedSection) || void 0 === o ? void 0 : o.toObject()) && void 0 !== i ? i : null : null !== (t = null === (n = this.parsedSection_1_1) || void 0 === n ? void 0 : n.toObject()) && void 0 !== t ? t : null
            }
        }, {
            key: "getField",
            value: function(e, t) {
                var n, i, o, a;
                return 1 === e ? null !== (o = null === (a = this.parsedSection) || void 0 === a ? void 0 : a.getValue(t)) && void 0 !== o ? o : void 0 : null !== (n = null === (i = this.parsedSection_1_1) || void 0 === i ? void 0 : i.getValue(t)) && void 0 !== n ? n : void 0
            }
        }, {
            key: "customCommands",
            value: function() {
                return {}
            }
        }], [{
            key: "sectionName",
            value: function() {
                return "usnat"
            }
        }]),
        n
    }(Io);
    function Mo(e, t) {
        return "boolean" == typeof e ? t ? e ? 2 : 1 : e ? 1 : 2 : 0
    }
    var Uo = function() {
        function e() {
            i(this, e)
        }
        return a(e, [{
            key: "encode",
            value: function(e) {
                var t, n = e.noticeShown, i = e.preferences, o = i.hasSensetiveData, a = i.purposes, r = Bo.clone();
                return r.isCustomFormat = !1,
                r.setValue("Version", 1),
                r.setValue("SharingNotice", Mo("sh"in a ? n : null)),
                r.setValue("SaleOptOutNotice", Mo("s"in a ? n : null)),
                r.setValue("SaleOptOut", Mo(a.s, !0)),
                r.setValue("SharingOptOutNotice", Mo("sh"in a ? n : null)),
                r.setValue("SharingOptOut", Mo(a.sh, !0)),
                r.setValue("TargetedAdvertisingOptOutNotice", Mo("adv"in a ? n : null)),
                r.setValue("TargetedAdvertisingOptOut", Mo(a.adv, !0)),
                r.setValue("SensitiveDataProcessingOptOutNotice", 0),
                r.setValue("SensitiveDataLimitUseNotice", Mo(o ? n : null)),
                r.setValue("SensitiveDataProcessing", Array.apply(null, {
                    length: 12
                }).map((function(e, t) {
                    return Mo(a["sd".concat(t + 1)], !0)
                }
                ))),
                r.setValue("KnownChildSensitiveDataConsents", [0, 0]),
                r.setValue("PersonalDataConsents", 0),
                r.setValue("MspaCoveredTransaction", 0),
                r.setValue("MspaOptOutOptionMode", 0),
                r.setValue("MspaServiceProviderMode", 0),
                r.setValue("SubsectionType", 1),
                r.setValue("Gpc", "1" === (null === (t = navigator.globalPrivacyControl) || void 0 === t ? void 0 : t.toString())),
                r.write()
            }
        }]),
        e
    }();
    function Wo(e) {
        var t = [];
        return e.enableTcf && e.gdprApplies && t.push(zo.sectionName()),
        e.usprApplies && t.push(jo.sectionName()),
        t
    }
    var Ho = function() {
        function e(t) {
            var n;
            i(this, e),
            this.options = t,
            this.cmpApi = new Lo({
                cmpId: 123,
                plugins: [zo, jo],
                applicableApis: Wo(t)
            },null === (n = t.gppVersion) || void 0 === n ? void 0 : n.toString())
        }
        return a(e, [{
            key: "update",
            value: function(e, t, n) {
                var i = t.tcString
                  , o = t.usPurposes
                  , a = e ? po : uo
                  , r = {};
                if (i && (r[zo.sectionName()] = i),
                o) {
                    var s = e || o.hasSensitiveData || this.options.ccpaNoticeDisplay || this.options.showBannerForUS || !1
                      , c = new Uo;
                    r[jo.sectionName()] = c.encode({
                        noticeShown: s,
                        preferences: o
                    })
                }
                this.cmpApi.update({
                    displayStatus: a,
                    updatedSections: r
                }, n)
            }
        }]),
        e
    }()
      , Go = function() {
        function e(t, n) {
            i(this, e),
            this.cs = t,
            this.configuration = n,
            this.state = {
                available: !0,
                remoteCookieSet: !1,
                remote: {
                    method: "iframe",
                    get: {
                        acknowledged: !1,
                        timeoutOccurred: !1
                    }
                }
            },
            this.getRemoteConsentPromise = null,
            this.testStorageAvailability()
        }
        return a(e, [{
            key: "oneYearFromDate",
            value: function(e) {
                var t = 864e5;
                return (31536e6 - ((new Date).getTime() - e.getTime())) / t
            }
        }, {
            key: "getExpireDate",
            value: function() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.expireAfter || this.cs.options.preferenceCookie.expireAfter;
                if ("string" == typeof n) {
                    var i = new Date(n.replace("Z365", "Z"));
                    n = isNaN(i.getDate()) ? 365 : this.oneYearFromDate(i)
                }
                var o = null !== (e = t.format) && void 0 !== e ? e : "utc"
                  , a = new Date;
                a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3);
                var r = "";
                switch (o) {
                case "timestamp":
                    r = "".concat(a.getTime());
                    break;
                default:
                    r = a.toUTCString()
                }
                return r
            }
        }, {
            key: "testStorageAvailability",
            value: function() {
                try {
                    this.setLocal("iub_storage_available", "1"),
                    this.resetLocal("iub_storage_available")
                } catch (e) {
                    this.state.available = !1
                }
            }
        }, {
            key: "getLocal",
            value: function(e, t) {}
        }, {
            key: "setLocal",
            value: function(e, t, n) {}
        }, {
            key: "compactLocal",
            value: function() {}
        }, {
            key: "reset",
            value: function(e) {}
        }, {
            key: "resetLocal",
            value: function() {}
        }, {
            key: "setLocalCMP",
            value: function(e, t, n) {}
        }, {
            key: "getLocalCMP",
            value: function(e) {}
        }, {
            key: "resetRemote",
            value: function() {}
        }, {
            key: "getRemote",
            value: function() {}
        }, {
            key: "compactRemote",
            value: function() {}
        }, {
            key: "storeConsent",
            value: function(e) {
                this.storeConsentLocal(e),
                this.storeConsentRemote(e)
            }
        }, {
            key: "storeConsentLocal",
            value: function(e) {}
        }, {
            key: "storeConsentRemote",
            value: function(e) {}
        }, {
            key: "loadConsentLocal",
            value: function() {}
        }, {
            key: "resetRemote",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.resetRemoteCookie(e, t)
            }
        }, {
            key: "resetRemoteCookie",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                switch (this.state.remote.method) {
                case "callback":
                    this.resetRemoteCookiesViaCallback();
                    break;
                default:
                    this.resetRemoteCookieViaIframe(e, t)
                }
            }
        }, {
            key: "getRemote",
            value: function() {
                return this.getRemoteCookies()
            }
        }, {
            key: "getRemoteCookies",
            value: function() {
                var e = this;
                switch (this.getRemoteConsentPromise = Le(),
                this.state.remote.method) {
                case "callback":
                    this.getRemoteCookiesViaCallback();
                    break;
                default:
                    this.getRemoteCookiesViaIframe()
                }
                return setTimeout((function() {
                    e.timeoutGetRemote()
                }
                ), this.cs.settings.timeoutOnRemoteGet),
                this.getRemoteConsentPromise
            }
        }, {
            key: "timeoutGetRemote",
            value: function() {
                this.cs.debug("Callback on getting remote fired"),
                this.state.remote.get.acknowledged || this.state.remote.get.timeoutOccurred || (this.state.remote.get.timeoutOccurred = !0,
                this.cs.warn("Getting from remote failed"),
                this.cs.info("Remote prefs NOT found!"),
                this.getRemoteConsentPromise && this.getRemoteConsentPromise.resolve())
            }
        }, {
            key: "compactRemote",
            value: function() {
                return this.compactRemoteCookies()
            }
        }, {
            key: "compactRemoteCookies",
            value: function() {
                switch (this.state.remote.method) {
                case "callback":
                    this.cs.debug("skipping compact remote cookie since in 'callback' remote method");
                    break;
                default:
                    this.cs.debug("compacting remote cookies ..."),
                    this.createCSIframeBridge({
                        meth: "compact"
                    })
                }
            }
        }, {
            key: "remoteCookiesSet",
            value: function(e) {
                e ? this.cs.checkIfReloadAfterRemoteSet() : this.cs.error("remote cookies setting failed.")
            }
        }, {
            key: "pickUpRemoteCookie",
            value: function(e) {
                if (this.state.remote.get.timeoutOccurred)
                    this.cs.warn("Remote callback received too late");
                else {
                    this.state.remote.get.acknowledged = !0;
                    var t = null;
                    try {
                        t = JSON.parse(e[this.configuration.consentNameRemote])
                    } catch (e) {
                        if (this.cs.options.raiseOnException)
                            throw e;
                        t = null
                    }
                    this.loadConsentRemoteCallback(t)
                }
            }
        }, {
            key: "storeConsentRemote",
            value: function() {
                this.cs.options.enableRemoteConsent ? (this.cs.info("store consent prefs into remote cookie ..."),
                this.setRemoteCookie(this.configuration.consentNameRemote, this.cs.consent),
                this.cs.options.ccpaApplies && this.setRemoteCookie(this.configuration.ccpaNameRemote, this.cs.usPrivacyCookie)) : this.cs.warn("skip saving remote consent since enableRemoteConsent option is provided FALSE")
            }
        }, {
            key: "loadConsentRemote",
            value: function() {
                var e = this
                  , t = Le();
                return this.cs.options.enableRemoteConsent && !this.cs.state.invalidatingConsent ? this.getRemote().then((function(n) {
                    e.compactRemoteCookies(),
                    t.resolve(n)
                }
                )) : (this.cs.info("skip loading remote consent since " + (this.cs.state.invalidatingConsent ? "consent has been invalidated to resurface the banner" : "enableRemoteConsent option is provided FALSE")),
                t.resolve()),
                t
            }
        }, {
            key: "setRemoteCookieViaCallback",
            value: function(e, t) {
                var n = this.buildLoopbackServerUrl() + this.cs.options.loopbackServer.callback.setRemoteCookiePath;
                n = qt(n, e, encodeURIComponent(JSON.stringify(t))),
                this.cs.debug("setting cross site cookies via callback at url: " + n),
                ke(n)
            }
        }, {
            key: "buildLoopbackServerUrl",
            value: function() {
                var e = "https://";
                return "iframe" === this.state.remote.method ? e += this.cs.options.loopbackServer.iframeBridge.host : e += this.cs.options.loopbackServer.callback.host,
                e
            }
        }, {
            key: "setRemoteCookieViaIframe",
            value: function(e, t) {
                this.createCSIframeBridge({
                    cookieValue: t,
                    c_name: e,
                    meth: "set"
                })
            }
        }, {
            key: "getRemoteCookiesViaCallback",
            value: function() {
                var e = this.buildLoopbackServerUrl() + this.cs.options.loopbackServer.callback.getRemoteCookiePath;
                this.cs.debug("getting cross site cookies via callback at url: " + e),
                ke(e)
            }
        }, {
            key: "getRemoteCookiesViaIframe",
            value: function() {
                this.cs.options.gdprApplies && this.createCSIframeBridge({
                    meth: "get",
                    c_name: this.configuration.consentNameRemote
                }),
                this.cs.options.ccpaApplies && this.createCSIframeBridge({
                    meth: "get",
                    c_name: this.configuration.ccpaNameRemote
                })
            }
        }, {
            key: "setRemote",
            value: function(e, t) {
                return this.setRemoteCookie(e, t)
            }
        }, {
            key: "setRemoteCookie",
            value: function(e, t) {
                switch (this.state.remote.method) {
                case "callback":
                    this.setRemoteCookieViaCallback(e, t);
                    break;
                default:
                    this.setRemoteCookieViaIframe(e, t)
                }
            }
        }, {
            key: "createIframeBridge",
            value: function(e, t) {
                var n, i = document.createElement("IFRAME"), o = [location.protocol, "//", location.host, location.pathname].join(""), a = this.buildLoopbackServerUrl() + this.cs.options.loopbackServer.iframeBridge.iframePath;
                n = qt(a, "origin", encodeURIComponent(o)),
                Object.keys(e).forEach((function(t) {
                    n = qt(n, t, encodeURIComponent(JSON.stringify(e[t])))
                }
                )),
                i.setAttribute("src", n),
                i.setAttribute("aria-hidden", "true"),
                i.setAttribute("title", "Iframe bridge"),
                i.setAttribute("style", "width:0px; height:0px; display:none; visibility:hidden"),
                ye((function() {
                    document.body.appendChild(i)
                }
                ), !0)
            }
        }, {
            key: "createCSIframeBridge",
            value: function(e) {
                this.createIframeBridge(e, this.cs.options.loopbackServer.iframeBridge)
            }
        }, {
            key: "resetRemoteCookieViaIframe",
            value: function(e, t) {
                this.createCSIframeBridge({
                    options: t,
                    c_name: e,
                    meth: "reset"
                })
            }
        }, {
            key: "resetRemoteCookiesViaCallback",
            value: function() {
                var e = this.buildLoopbackServerUrl() + this.options.loopbackServer.callback.resetRemoteCookiePath;
                this.debug("reset cross site cookies via callback at url: " + e),
                this.insertScript(e)
            }
        }]),
        e
    }()
      , qo = function() {
        function e() {
            i(this, e)
        }
        return a(e, null, [{
            key: "generateCookieExpression",
            value: function(e, t, n) {
                var i = e + "=" + t
                  , o = n || {};
                return o.expireDate && (i += "; expires=" + o.expireDate),
                o.path && (i += "; path=" + o.path),
                o.domain && (i += "; domain=" + o.domain),
                o.samesite && (i += ";" + o.samesite),
                i
            }
        }, {
            key: "setItem",
            value: function(t, n, i) {
                var o = e.generateCookieExpression(t, n, i)
                  , a = i || {};
                if (a.maxCookieSize && o.length > a.maxCookieSize)
                    throw new Error("Unable to save cookie ".concat(t, ": maxCookieSize ").concat(a.maxCookieSize, " exeeded"));
                document.cookie = o
            }
        }, {
            key: "getItem",
            value: function(e, t) {
                for (var n = [], i = document.cookie.split(/\s*;\s*/), o = 0; o < i.length; o++) {
                    var a = i[o].split("=")
                      , r = a[0]
                      , s = a[1]
                      , c = r.match(new RegExp("^" + e + "(-(\\d+))?$"));
                    if (c)
                        n[parseInt(c[2], 10) || 0] = s
                }
                if (!n.length)
                    return "";
                var l = n.join("");
                if (!0 === t)
                    return l;
                try {
                    return JSON.parse(l)
                } catch (e) {
                    return JSON.parse(decodeURIComponent(l))
                }
            }
        }, {
            key: "removeItem",
            value: function(e, t) {
                for (var n, i = new RegExp("(^|;)\\s*(" + e + "(-(\\d+))?)=","g"), o = document.cookie, a = ""; n = i.exec(o); ) {
                    a = n[2] + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=" + t.path + "; domain=" + t.domain + ";" + t.samesite,
                    document.cookie = a
                }
                return a
            }
        }, {
            key: "all",
            value: function() {
                for (var e = document.cookie ? document.cookie.split(/\s*;\s*/) : [], t = [], n = 0, i = e.length; n < i; n += 1) {
                    var o = e[n].split("=");
                    2 === o.length && t.push({
                        name: o[0],
                        value: o[1]
                    })
                }
                return t
            }
        }, {
            key: "defaultSamesiteAttributes",
            get: function() {
                return "https:" === window.location.protocol ? "samesite=none; secure" : "samesite=lax"
            }
        }]),
        e
    }()
      , Yo = function(e) {
        s(n, e);
        var t = d(n);
        function n(e, o) {
            return i(this, n),
            t.call(this, e, o)
        }
        return a(n, [{
            key: "testStorageAvailability",
            value: function() {
                try {
                    this.setLocal("iub_storage_available", "1"),
                    this.state.available = -1 != document.cookie.indexOf("iub_storage_available="),
                    this.resetLocal("iub_storage_available")
                } catch (e) {
                    this.state.available = !1
                }
            }
        }, {
            key: "getLocal",
            value: function(e, t) {
                return this.getLocalCookie(e, t)
            }
        }, {
            key: "getLocalCookie",
            value: function(e, t) {
                this.cs.debug("reading cookie from local domain: " + e);
                for (var n = [], i = qo.all(), o = 0; o < i.length; o++) {
                    var a = i[o].name.match(new RegExp("^" + e + "(-(\\d+))?$"));
                    if (a)
                        n[parseInt(a[2], 10) || 0] = i[o].value
                }
                if (!n.length)
                    return "";
                var r = n.join("");
                if (!0 === t)
                    return r;
                try {
                    return JSON.parse(r)
                } catch (e) {
                    return JSON.parse(decodeURIComponent(r))
                }
            }
        }, {
            key: "setLocal",
            value: function(e, t, n) {
                return this.setLocalCookie(e, t, n)
            }
        }, {
            key: "setLocalCookie",
            value: function(e, t, n) {
                n = n || {},
                this.resetLocalCookie(e);
                var i = this.cs.options
                  , o = this.getExpireDate(n)
                  , a = n.path || i.localConsentPath
                  , r = "string" == typeof t ? t : encodeURIComponent(JSON.stringify(t))
                  , s = this.getCookieLocalDomain(location.hostname)
                  , c = {
                    expireDate: o,
                    path: a,
                    domain: this._getLocalConsentDomain(i, s),
                    samesite: qo.defaultSamesiteAttributes,
                    maxCookieSize: i.maxCookieSize
                }
                  , l = qo.generateCookieExpression(e, r, c);
                try {
                    this.cs.debug("setting cookie on local domain : " + s + " -> " + l),
                    qo.setItem(e, r, c)
                } catch (t) {
                    this._setLocalCookieInChunks({
                        name: e,
                        valueToSave: r,
                        cookieExpression: l,
                        maxCookieSize: i.maxCookieSize,
                        maxCookieChunks: i.maxCookieChunks,
                        setCookieOptions: n
                    })
                }
            }
        }, {
            key: "_setLocalCookieInChunks",
            value: function(e) {
                var t = e.name
                  , n = e.valueToSave
                  , i = e.cookieExpression
                  , o = e.maxCookieSize
                  , a = e.maxCookieChunks
                  , r = e.setCookieOptions
                  , s = function(e, t) {
                    return e.match(new RegExp(".{1," + t + "}","g")) || []
                }(n, o - (i.length - n.length) - 2);
                if (s.length > a)
                    return this.cs.error("cookie `" + t + "` should be split into " + s.length + " cookies, more than the allowed " + a + " chunks, aborting."),
                    void this.cs.debug("was trying to save: " + i);
                for (var c = 0; c < s.length; c++) {
                    var l = 0 === c ? t : t + "-" + c;
                    this.setLocalCookie(l, s[c], r)
                }
            }
        }, {
            key: "compactLocal",
            value: function() {
                return this.compactLocalCookie()
            }
        }, {
            key: "compactLocalCookie",
            value: function() {
                this.cs.debug("compact remote cookies (keep " + this.cs.settings.keepLocalCookiesN + ")");
                for (var e = document.cookie.split(";"), t = [], n = 0; n < e.length; n++) {
                    for (var i = e[n]; " " === i.charAt(0); )
                        i = i.substring(1);
                    var o = i.split("=")[0];
                    -1 !== o.indexOf("_iub_cs") && o !== this.configuration.consentNameLocal && t.push({
                        cName: o,
                        cValue: JSON.parse(decodeURIComponent(i.split("=")[1]))
                    })
                }
                t.sort((function(e, t) {
                    return e.cValue.timestamp < t.cValue.timestamp ? 1 : -1
                }
                )),
                t.splice(0, this.cs.settings.keepLocalCookiesN);
                for (var a = 0; a < t.length; a++)
                    qo.setItem(t[a].cName, "", {
                        expireDate: "Thu, 01 Jan 1970 00:00:01 GMT",
                        path: this.cs.options.localConsentPath,
                        domain: this.getCookieLocalDomain(location.hostname),
                        samesite: qo.defaultSamesiteAttributes
                    })
            }
        }, {
            key: "resetLocal",
            value: function(e) {
                return this.resetLocalCookie(e)
            }
        }, {
            key: "resetLocalCookie",
            value: function(e) {
                var t = this.getCookieLocalDomain(location.hostname)
                  , n = qo.removeItem(e, {
                    domain: this._getLocalConsentDomain(this.cs.options, t),
                    path: this.cs.options.localConsentPath,
                    samesite: qo.defaultSamesiteAttributes
                });
                this.cs.debug("resetting cookie on local domain : " + n)
            }
        }, {
            key: "updateLocalExpireAfter",
            value: function(e, t) {
                return this.updateLocalCookieExpireAfter(e, t)
            }
        }, {
            key: "updateLocalCookieExpireAfter",
            value: function(e, t) {
                var n = t || this.cs.options.preferenceCookie.expireAfter
                  , i = this.getLocal(e);
                this.setLocal(e, i, {
                    expireAfter: n
                })
            }
        }, {
            key: "setLocalCMP",
            value: function(e, t, n) {
                return this.setLocalCMPCookie(e, t, n)
            }
        }, {
            key: "setLocalCMPCookie",
            value: function(e, t, n) {
                (n = n || {}).expireAfter = n.expireAfter || this.cs.settings.MAX_TCF2_COOKIE_DURATION,
                this.setLocalCookie(e, t, n)
            }
        }, {
            key: "getLocalCMP",
            value: function(e) {
                return this.getLocalCMPCookie(e)
            }
        }, {
            key: "getLocalCMPCookie",
            value: function(e) {
                return this.getLocalCookie(e, !0)
            }
        }, {
            key: "storeConsentLocal",
            value: function(e) {
                this.cs.info("store consent prefs into local cookie ...");
                var t = this.cs.consent;
                t.id = this.cs.options.cookiePolicyId;
                try {
                    this.setLocal(this.configuration.consentNameLocal, t, e)
                } catch (e) {
                    this.cs.error("store_consent_loc: " + (e.message || e.toSource()))
                }
            }
        }, {
            key: "loadConsentLocal",
            value: function() {
                this.cs.debug("loading local stored consent");
                var e = this.getLocalCookie(this.configuration.consentNameLocal);
                if (!e) {
                    var t = this.getLocalCookie(this.configuration.consentNameLocalOld);
                    "" !== t && (this.cs.debug("legacy consent found"),
                    t.id === this.cs.options.cookiePolicyId && (this.cs.debug("legacy consent match"),
                    e = t))
                }
                try {
                    this.compactLocalCookie()
                } catch (e) {
                    this.cs.debug("compacting local cookies failed, go on ...")
                }
                return e
            }
        }, {
            key: "reset",
            value: function(e) {
                return this.resetCookies(e)
            }
        }, {
            key: "resetCookies",
            value: function(e) {
                var t = e || {}
                  , n = !1 !== t.local
                  , i = !1 !== t.remote;
                if (n && (this.resetLocalCookie(this.configuration.consentNameLocal),
                this.resetLocalCookie(this.configuration.consentUsprNameLocal),
                this.cs.options.ccpaApplies && this.resetLocalCookie(this.configuration.ccpaNameLocal)),
                i) {
                    var o = this.cs.options.cookiePolicyId;
                    this.resetRemoteCookie(this.configuration.consentNameRemote, {
                        cookiePolicyId: o
                    }),
                    this.resetRemoteCookie(this.configuration.consentUsprNameLocal),
                    this.cs.options.ccpaApplies && this.resetRemoteCookie(this.configuration.ccpaNameRemote)
                }
            }
        }, {
            key: "getCookieLocalDomain",
            value: function(e) {
                var t, n = 2, i = "localhost" === e;
                i || 0 !== e.indexOf("www.") && (e = "www." + e);
                var o = e.split(".")
                  , a = /^[0-9]+$/.test(e.split(":")[0].split(".").join(""))
                  , r = o[o.length - 2];
                return this.cs.options.localConsentDomain ? t = "." + this.cs.options.localConsentDomain : i ? t = "" : a || (o.length > 3 && r.length < 4 && (n = 3),
                t = "." + e.split(".").reverse().slice(0, n).reverse().join(".")),
                t
            }
        }, {
            key: "_getLocalConsentDomain",
            value: function(e, t) {
                return e.localConsentDomainExact ? "" : t
            }
        }, {
            key: "_getCookieLocalDomain",
            value: function() {
                this.getCookieLocalDomain.apply(this, arguments)
            }
        }]),
        n
    }(Go)
      , Jo = function(e) {
        s(o, e);
        var t = d(o);
        function o(e, n) {
            return i(this, o),
            t.call(this, e, n)
        }
        return a(o, [{
            key: "getLocal",
            value: function(e, t) {
                if (!this.state.available)
                    return "";
                var n = window.localStorage.getItem(e);
                return null === n ? "" : t ? n : JSON.parse(n)
            }
        }, {
            key: "setLocal",
            value: function(e, t, i) {
                if (!this.state.available)
                    return "";
                var o = t;
                return "object" === n(t) && null !== t && (o = JSON.stringify(C(t, {
                    expireAfter: this.getExpireDate(i)
                }))),
                window.localStorage.setItem(e, o),
                this.getLocal(e)
            }
        }, {
            key: "reset",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = !1 !== e.local
                  , n = !1 !== e.remote;
                if (t && this.state.available && (window.localStorage.removeItem(this.configuration.consentNameLocal),
                window.localStorage.removeItem(this.configuration.consentUsprNameLocal),
                this.cs.options.ccpaApplies && window.localStorage.removeItem(this.configuration.ccpaNameLocal)),
                n) {
                    var i = this.cs.options.cookiePolicyId;
                    this.resetRemote(this.configuration.consentNameRemote, {
                        cookiePolicyId: i
                    }),
                    this.resetRemote(this.configuration.consentUsprNameLocal),
                    this.cs.options.ccpaApplies && this.resetRemote(this.configuration.ccpaNameRemote)
                }
            }
        }, {
            key: "resetLocal",
            value: function(e) {
                this.state.available && (window.localStorage.removeItem(e),
                this.cs.debug("resetting local storage: ", e))
            }
        }, {
            key: "setLocalCMP",
            value: function(e, t, n) {
                this.state.available && window.localStorage.setItem(e, t)
            }
        }, {
            key: "getLocalCMP",
            value: function(e) {
                return this.cs.info("getLocalCMP: " + e),
                this.getLocal(e, !0)
            }
        }, {
            key: "storeConsentLocal",
            value: function(e) {
                this.cs.info("store consent prefs into local cookie ...");
                var t = this.cs.consent;
                t.id = this.cs.options.cookiePolicyId;
                try {
                    this.setLocal(this.configuration.consentNameLocal, t, e)
                } catch (e) {
                    this.cs.error("store_consent_loc: " + (e.message || e.toSource()))
                }
            }
        }, {
            key: "loadConsentLocal",
            value: function() {
                return this.getLocal(this.configuration.consentNameLocal)
            }
        }]),
        o
    }(Go)
      , Ko = {
        COOKIE: "cookieStorage",
        LOCAL_STORAGE: "localStorage",
        ALL: "all"
    }
      , Xo = function() {
        function e(t) {
            i(this, e),
            this.cs = t
        }
        return a(e, [{
            key: "consentNameRemote",
            get: function() {
                return this.consentNameLocal
            }
        }, {
            key: "consentNameLocal",
            get: function() {
                return this.cs.settings.consentCookieNameBase + this.cs.options.cookiePolicyId
            }
        }, {
            key: "consentUsprNameLocal",
            get: function() {
                return this.cs.settings.consentCookieNameBase + this.cs.options.cookiePolicyId + "-uspr"
            }
        }, {
            key: "consentUsprNameRemote",
            get: function() {
                return this.consentUsprNameLocal
            }
        }, {
            key: "consentGranularNameLocal",
            get: function() {
                return this.cs.settings.consentCookieNameBase + this.cs.options.cookiePolicyId + "-granular"
            }
        }, {
            key: "consentGranularNameRemote",
            get: function() {
                return this.consentGranularNameLocal
            }
        }, {
            key: "consentNameLocalOld",
            get: function() {
                return this.cs.settings.consentCookieNameBase + "local"
            }
        }, {
            key: "ccpaNameRemote",
            get: function() {
                return this.cs.settings.USPRIVACY_COOKIE + "-" + this.cs.options.cookiePolicyId
            }
        }, {
            key: "ccpaNameLocal",
            get: function() {
                return this.cs.settings.USPRIVACY_COOKIE
            }
        }]),
        e
    }()
      , $o = function() {
        function e(t) {
            if (i(this, e),
            !t)
                throw new Error("Storage: no options passed");
            if (!t.cs)
                throw new Error("Storage: options.cs required");
            var n = t.cs.options || {};
            this.options = n,
            this.cs = t.cs,
            this.configuration = new Xo(this.cs),
            this.setupStorageDrivers(),
            this.setupStorageTypes(),
            window.addEventListener("message", this.receiveMessageFromBridge.bind(this), !1)
        }
        return a(e, [{
            key: "setupStorageDrivers",
            value: function() {
                var e, t = Ko.COOKIE, n = Ko.LOCAL_STORAGE;
                this[t] = new Yo(this.cs,this.configuration),
                this[n] = new Jo(this.cs,this.configuration),
                this.storageDrivers = (r(e = {}, t, this[t]),
                r(e, n, this[n]),
                e)
            }
        }, {
            key: "setupStorageTypes",
            value: function() {
                var e, t, n, i, o, a, r, s, c, l, p, u, d, h, f, b, m;
                this.storageDefault = null !== (e = null === (t = this.options.storage) || void 0 === t ? void 0 : t.type) && void 0 !== e ? e : "cookie",
                this.storageDefault = this.storageDefault.toUpperCase(),
                this.storageType = Ko[this.storageDefault],
                this.usprivacyStorageType = (null === (n = this.options.storage) || void 0 === n || null === (i = n.items) || void 0 === i || null === (o = i.usprivacy) || void 0 === o ? void 0 : o.type) ? Ko[this.options.storage.items.usprivacy.type.toUpperCase()] : this.storageType,
                this.usprStorageType = (null === (a = this.options.storage) || void 0 === a || null === (r = a.items) || void 0 === r || null === (s = r.uspr) || void 0 === s ? void 0 : s.type) ? Ko[this.options.storage.items.uspr.type.toUpperCase()] : this.storageType,
                this.tcfStorageType = (null === (c = this.options.storage) || void 0 === c || null === (l = c.items) || void 0 === l || null === (p = l.tcf) || void 0 === p ? void 0 : p.type) ? Ko[this.options.storage.items.tcf.type.toUpperCase()] : this.storageType,
                this.coreStorageType = (null === (u = this.options.storage) || void 0 === u || null === (d = u.items) || void 0 === d || null === (h = d.core) || void 0 === h ? void 0 : h.type) ? Ko[this.options.storage.items.core.type.toUpperCase()] : this.storageType,
                this.granularStorageType = (null === (f = this.options.storage) || void 0 === f || null === (b = f.items) || void 0 === b || null === (m = b.granular) || void 0 === m ? void 0 : m.type) ? Ko[this.options.storage.items.granular.type.toUpperCase()] : this.storageType
            }
        }, {
            key: "getStorageType",
            value: function(e) {
                var t, n = Ko.COOKIE;
                switch (e.replace(/^_iub_cs-(([\d]{3,}_[\d]{3,})|[\d]*)/, "_iub_cs")) {
                case "usprivacy":
                    n = this.usprivacyStorageType;
                    break;
                case "euconsent-v2":
                    n = this.tcfStorageType;
                    break;
                case "_iub_cs-uspr":
                    n = this.usprStorageType;
                    break;
                case "_iub_cs-granular":
                    n = this.granularStorageType;
                    break;
                case "_iub_cs":
                    n = this.coreStorageType;
                    break;
                case null === (t = this.cs.options.preferenceCookie) || void 0 === t ? void 0 : t.tcfV2Name:
                    n = this.tcfStorageType
                }
                return n
            }
        }, {
            key: "setLocalCookie",
            value: function(e, t, n) {
                return this.setLocal(e, t, n)
            }
        }, {
            key: "setLocal",
            value: function(e, t, n) {
                var i = "";
                switch (this.getStorageType(e)) {
                case Ko.LOCAL_STORAGE:
                    i = this.localStorage.setLocal(e, t, n);
                    break;
                case Ko.ALL:
                    i = this.cookieStorage.setLocal(e, t, n),
                    this.localStorage.setLocal(e, t, n);
                    break;
                default:
                    i = this.cookieStorage.setLocal(e, t, n)
                }
                return i
            }
        }, {
            key: "setLocalCMP",
            value: function(e, t, n) {
                var i = "";
                switch (this.getStorageType(e)) {
                case Ko.LOCAL_STORAGE:
                    i = this.localStorage.setLocalCMP(e, t, n);
                    break;
                case Ko.ALL:
                    i = this.cookieStorage.setLocalCMP(e, t, n),
                    this.localStorage.setLocalCMP(e, t, n);
                    break;
                default:
                    i = this.cookieStorage.setLocalCMP(e, t, n)
                }
                return i
            }
        }, {
            key: "setRemote",
            value: function(e, t) {
                return this[this.getStorageType(e)].setRemote(e, t)
            }
        }, {
            key: "compactRemote",
            value: function() {
                return this[this.storageType].compactRemote()
            }
        }, {
            key: "getLocalCookie",
            value: function(e, t) {
                return this.getLocal(e, t)
            }
        }, {
            key: "getLocal",
            value: function(e, t) {
                return this[this.getStorageType(e)].getLocal(e, t)
            }
        }, {
            key: "getLocalCMPCookie",
            value: function(e) {
                return this.getLocalCMP(e)
            }
        }, {
            key: "getLocalCMP",
            value: function(e) {
                return this[this.getStorageType(e)].getLocalCMP(e)
            }
        }, {
            key: "resetLocalCookie",
            value: function(e) {
                return this[this.getStorageType(e)].resetLocal(e)
            }
        }, {
            key: "loadConsentLocal",
            value: function() {
                return this[this.getStorageType("_iub_cs")].loadConsentLocal()
            }
        }, {
            key: "loadConsentRemote",
            value: function() {
                return this[this.getStorageType("_iub_cs")].loadConsentRemote()
            }
        }, {
            key: "storeConsent",
            value: function(e) {
                this.options.skipSaveConsent ? this.cs.info("NOT saving consent in cookie since options.skipSaveConsent is provided TRUE") : this[this.getStorageType(this.configuration.consentNameLocal)].storeConsent(e)
            }
        }, {
            key: "storeConsentLocal",
            value: function(e) {
                return this.storeConsent(e)
            }
        }, {
            key: "reset",
            value: function(e) {
                for (var t in this.storageDrivers)
                    Object.prototype.hasOwnProperty.call(this.storageDrivers, t) && this.storageDrivers[t].reset(e)
            }
        }, {
            key: "resetCookies",
            value: function(e) {
                return this.reset(e)
            }
        }, {
            key: "pickUpRemoteCookie",
            value: function(e) {
                this.cookieStorage.pickUpRemoteCookie(e)
            }
        }, {
            key: "receiveMessageFromBridge",
            value: function(e) {
                if (-1 === e.origin.indexOf(this.cs.options.loopbackServer.iframeBridge.host))
                    return null;
                var t = "";
                try {
                    t = JSON.parse(e.data)
                } catch (e) {
                    if (this.cs.options.raiseOnException)
                        throw e;
                    this.cs.error("Exception while decoding message from iFrame bridge: " + (e.message || e))
                }
                if (t && t.action)
                    switch (t.action) {
                    case "pickUpRemoteCookie":
                        this[this.getStorageType(this.configuration.consentNameLocal)].state.remote.get.timeoutOccurred ? this.cs.warn("Remote callback received too late") : this.loadConsentRemoteCallback(t.cName, t.data);
                        break;
                    case "remoteCookieSet":
                        this.cs.checkIfReloadAfterRemoteSet();
                        break;
                    case "remoteCookiesCompact":
                        this.cs.debug("remote cookies compact");
                        break;
                    default:
                        this.cs.error("Unrecognized message from iFrame bridge: " + JSON.stringify(t))
                    }
                else
                    this.cs.error("Unrecognized message from iFrame bridge: " + JSON.stringify(t));
                return t
            }
        }, {
            key: "loadConsentRemoteCallback",
            value: function(e, t) {
                if (t) {
                    this.cs.info("Remote prefs found!"),
                    this.cs.debug(t);
                    var n = this.getStorageType(this.configuration.consentNameLocal)
                      , i = this.getStorageType(this.configuration.ccpaNameLocal);
                    switch (e) {
                    case this.configuration.consentNameRemote:
                        this.cs.consent = t,
                        this[n].setLocal(this.configuration.consentNameLocal, t),
                        this[n].state.remote.get.acknowledged = !0,
                        this[n].getRemoteConsentPromise && this[n].getRemoteConsentPromise.resolve(t);
                        break;
                    case this.configuration.ccpaNameRemote:
                        this.cs.usPrivacyCookie = t,
                        this[i].setLocal(this.configuration.ccpaNameLocal, t),
                        this[i].state.remote.get.acknowledged = !0,
                        this[i].getRemoteConsentPromise && this[i].getRemoteConsentPromise.resolve(t)
                    }
                    this.cs.options.reloadOnConsent && (this.cs.info("page will be reloaded (reloadOnConsent==true) once local prefs are set"),
                    this.cs.state.reloadAfterLocaleSet = !0)
                } else
                    this.cs.info("Remote prefs NOT found!")
            }
        }]),
        e
    }();
    function Zo(e, t) {
        var n = 864e5;
        return (t * n - Date.now() + new Date(e).getTime()) / n
    }
    function Qo(e) {
        var t = e ? function(e) {
            for (var t = atob(e), n = new Array(8 * t.length), i = 0; i < t.length; i++)
                for (var o = t.charCodeAt(i), a = 7; a >= 0; a--) {
                    var r = o & 1 << a ? 1 : 0;
                    n[8 * i + (7 - a)] = r
                }
            return n
        }(function(e) {
            var t = e.split(".")[0].replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
            case 0:
                break;
            case 2:
                t += "==";
                break;
            case 3:
                t += "=";
                break;
            default:
                throw new Exception("Illegal base64url string!")
            }
            return t
        }(e)) : [];
        return {
            getTcfVersion: function() {
                return ta(t.slice(0, 6))
            },
            getPurposeOneTreatment: function() {
                return ta(t.slice(200, 201))
            },
            getIsServiceSpecific: function() {
                return ta(t.slice(138, 139))
            },
            getVendorListVersion: function() {
                return ta(t.slice(120, 132))
            },
            getLastUpdate: function() {
                return na(t.slice(42, 78))
            },
            getCreationDate: function() {
                return na(t.slice(7, 42))
            }
        }
    }
    function ea(e) {
        var t = []
          , n = 0
          , i = !1
          , o = (e || "").split("~")
          , a = o[0]
          , r = o[1];
        if (a && r) {
            for (var s = r.split(".").map((function(e) {
                return +e
            }
            )).sort((function(e, t) {
                return e - t
            }
            )), c = Math.max.apply(null, s), l = 1; l <= c; l++) {
                var p = -1 !== s.indexOf(l);
                p !== i && (t.push(n),
                i = p,
                n = 0),
                n++
            }
            n && t.push(n)
        }
        var u = a + "~" + String.fromCharCode.apply(null, new Int16Array(t));
        return btoa(unescape(encodeURIComponent(u)))
    }
    function ta(e) {
        return parseInt(e.join(""), 2)
    }
    function na(e) {
        return 100 * ta(e)
    }
    function ia(e) {
        return "1~" === (e || "").substring(0, 2) ? function(e) {
            var t = (e || "").split("~")
              , n = t[0]
              , i = t[1] || ""
              , o = [];
            if (n) {
                if (i) {
                    var a = decodeURIComponent(escape(atob(i)));
                    o = new Int16Array(a.split("").map((function(e) {
                        return e.charCodeAt(0)
                    }
                    )))
                }
                return n + "~" + o.join(".")
            }
            return ""
        }(e) : function(e) {
            var t = decodeURIComponent(escape(atob(e))).split("~")
              , n = t[0]
              , i = t[1] || ""
              , o = [];
            if (n) {
                if (i)
                    for (var a = 1, r = new Int16Array(i.split("").map((function(e) {
                        return e.charCodeAt(0)
                    }
                    ))), s = 0; s < r.length; s++) {
                        var c = r[s];
                        if (s % 2 != 0)
                            for (var l = 0; l < c; l++)
                                o.push(a + l);
                        a += c
                    }
                return n + "~" + o.join(".")
            }
            return ""
        }(e)
    }
    var oa = function() {
        function e(t, n) {
            i(this, e),
            ot(this),
            this.settings = ze,
            this.VERSION = this.settings.version,
            this.state = {
                enabled: !0,
                preLoaded: !1,
                errors: [],
                fatalError: !1,
                inlineUniqId: 0,
                invalidatingConsent: !1,
                inIframe: !1,
                consentFoundOnLoad: !1,
                reloadAfterRemoteSet: !1,
                reloadAfterLocaleSet: !1,
                activatingNoPriorConsent: !1,
                needsConsent: !0,
                tcfv2String: null,
                cpOpen: !1,
                isCmpCssLoaded: 0,
                uspString: "1---",
                ccpaAcknowledged: !1,
                ccpaOptedOut: !1,
                ccpaUspVersion: 1,
                ccpaUspStateFound: !1,
                ccpaOptOutConfirmationOpen: !1,
                currentView: "",
                fromSDK: !1
            },
            this.setConfiguration(t),
            this.activator = new Ri,
            this.crossSiteConsent = {},
            this.consent = this.getInitialConsent(),
            this.checkIfInIframe(),
            this.ui = new Yn(this),
            this.tracker = new Wi(this),
            !0 === this.options.previewMode && (this.tracker.state.enabled = !1),
            this.storage = new $o({
                cs: this
            }),
            this.cookie = this.storage,
            this.usPrivacyCookie = this.storage.getLocal(this.settings.USPRIVACY_COOKIE),
            this.browserDetect = new M,
            this.api = new oo(this),
            this.cmpLibraryPromise = n,
            this.storeCMPChoicePromise = Le(),
            this.getCustomPreferencesResult = this.fetchCustomPreferences(),
            this.savedPreferences = {},
            this.customPurposes = null,
            this.firstActivationCompletedPromise = Le()
        }
        return a(e, [{
            key: "getInitialConsent",
            value: function() {
                return {
                    consent: void 0,
                    timestamp: void 0,
                    version: void 0
                }
            }
        }, {
            key: "checkIfInIframe",
            value: function() {
                try {
                    this.state.inIframe = window.self !== window.top
                } catch (e) {}
            }
        }, {
            key: "setCurrentView",
            value: function(e) {
                this.state.currentView = e
            }
        }, {
            key: "fetchCustomPreferences",
            value: function() {
                var e = this.storage.getLocal(this.storage.configuration.consentGranularNameLocal)
                  , t = this.decodeCustomPreferences(e);
                return this.isGoogleAdditionalConsentValid() || delete t.gac,
                t
            }
        }, {
            key: "decodeCustomPreferences",
            value: function(e) {
                return e && Object.prototype.hasOwnProperty.call(e, "gac") ? x(e, {
                    gac: ia(e.gac)
                }) : e
            }
        }, {
            key: "renewCookies",
            value: function() {
                if (this.state.needsConsent && this.isPreferenceExpressed()) {
                    var e = Zo(this.consent.timestamp, this.options.preferenceCookie.expireAfter);
                    this.storage.storeConsentLocal({
                        expireAfter: e
                    })
                }
                if (this.options.enableTcf && this.state.tcfv2String) {
                    var t = {
                        expireAfter: Zo(Qo(this.state.tcfv2String).getLastUpdate(), this.settings.MAX_TCF2_COOKIE_DURATION)
                    };
                    this.storeCMPPreference(this.state.tcfv2String, t)
                }
                if (this.storeCustomPreferences(this.getCustomPreferencesResult, !0),
                this.usPrivacyCookie) {
                    var n = (this.usPrivacyCookie.optOutDate ? this.usPrivacyCookie.optOutDate : 0) + (this.options.ccpaCookie.expireAfter ? this.options.ccpaCookie.expireAfter : 0);
                    this.storage.setLocal(this.settings.USPRIVACY_COOKIE, this.usPrivacyCookie, {
                        expireAfter: n
                    })
                }
            }
        }, {
            key: "isPreferenceExpressed",
            value: function() {
                var e = this.options
                  , t = e.gdprApplies
                  , n = e.lgpdApplies
                  , i = e.usprApplies
                  , o = e.fadpApplies
                  , a = e.perPurposeConsent;
                if (t || n || o) {
                    var r;
                    if (a && !this.purposesPreference.hasGivenPreference(this.purposes.toIDArray()))
                        return !1;
                    if (!(a || this.consent && void 0 !== (null === (r = this.consent) || void 0 === r ? void 0 : r.consent)))
                        return !1
                }
                return !(i && !this.usPurposes.userConsentGiven) && (t || n || i || o)
            }
        }, {
            key: "getPreferencesExpressed",
            value: function() {
                var e = t({}, this.consent);
                return this.usPurposes && (e.uspr = this.usPurposes.getPreferences()),
                e
            }
        }, {
            key: "storeCMPPreference",
            value: function(e, t) {
                var n = so(this.options);
                this.storage.setLocalCMP(n, e, t),
                this.checkIfReloadAfterRemoteSet()
            }
        }, {
            key: "checkIfReloadAfterRemoteSet",
            value: function() {
                this.debug("remote cookies successfully set."),
                "number" == typeof this.state.reloadAfterRemoteSet && (this.state.reloadAfterRemoteSet--,
                this.state.reloadAfterRemoteSet <= 0 && this.reloadPage())
            }
        }, {
            key: "reloadPage",
            value: function() {
                this.info("Reloading page at consent given ..."),
                location.reload(!0)
            }
        }, {
            key: "storeCustomPreferences",
            value: function(e, t) {
                if (this._acknowledgeCustomPreferences(e),
                e) {
                    (t ? this.isGoogleAdditionalConsentValid() : this.options.googleAdditionalConsentMode) || delete e.gac;
                    var n = this.encodeCustomPreferences(e);
                    this.storage.setLocal(this.storage.configuration.consentGranularNameLocal, n)
                }
            }
        }, {
            key: "_acknowledgeCustomPreferences",
            value: function(e) {
                this.customPreferences = x(this.customPreferences || {}, e)
            }
        }, {
            key: "encodeCustomPreferences",
            value: function(e) {
                return e && e.gac ? x(e, {
                    gac: ea(e.gac)
                }) : e
            }
        }, {
            key: "preLoad",
            value: function() {
                return this.debug("executing preLoad()..."),
                this.state.preLoaded ? (this.debug("already preloaded, skipping ..."),
                !0) : (this.options.cookiePolicyId || this.fatal("Cannot start IubendaCookieSolution: cookiePolicyId NOT PROVIDED."),
                !!this.skipUnsupported() || (this.browserDetect.isBotAndShouldSkipBots() ? (this.info("BOT detected: activating snippets and avoid banner rendering."),
                this.options.enableGpp && (this.gppCmpApi = new Ho(this.options)),
                this.fetchPurposes(),
                this.acceptAll(),
                this.applyConsent(!0),
                this.state.reloadAfterRemoteSet = !1,
                this.state.reloadAfterLocaleSet = !1,
                null) : this.state.enabled ? (this.startCs(),
                null) : (xt(),
                this.ui.generateWarningButton("https://www.iubenda.com/help/120399-why-does-my-website-show-this-icon?utm_source=cs&utm_medium=web&utm_campaign=csalrt1"),
                this.tracker.start(!1),
                this.debug("IubendaCookieSolution is disabled, skipping ..."),
                !0)))
            }
        }, {
            key: "startCs",
            value: function() {
                var e = this;
                return this.fireCallback("onBeforePreload"),
                this.usPrivacyCookie && this.setUspString(this.usPrivacyCookie.uspString),
                this.options.enableRemoteConsent && !this.options.skipSaveConsent || !this.options.ccpaApplies || this.state.ccpaAcknowledged || this.deleteConsent(),
                this.fetchPurposes(),
                this.loadTCFConsent().then((function() {
                    e.loadConsent().then((function(t) {
                        var n = t.doConsentRewrite;
                        e.state.preLoaded = !0,
                        e.start({
                            doConsentRewrite: n
                        })
                    }
                    ))
                }
                )),
                null
            }
        }, {
            key: "deleteConsent",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e.skipResetCookies = e.skipResetCookies || !1,
                e.skipResetRemoteCookies = e.skipResetRemoteCookies || !1,
                this.consent = this.getInitialConsent(),
                this.state.invalidatingConsent = !0,
                e.skipResetCookies || this.storage.reset({
                    local: !0,
                    remote: this.options.enableRemoteConsent && !e.skipResetRemoteCookies
                })
            }
        }, {
            key: "fetchPurposes",
            value: function() {
                if (this.options.usprApplies) {
                    this.usPurposes = new ni(this.options.usprPurposes),
                    !this.options.usprPurposes && _iub.csPurposes && this.usPurposes.overwriteActivePurposes(_iub.csPurposes);
                    var e = this.storage.getLocal(this.storage.configuration.consentUsprNameLocal);
                    e && this.usPurposes.setPreferences(e)
                }
                if (this.options.purposes)
                    this.purposes = ii.fromList(this.options.purposes);
                else if (_iub.csPurposes && 0 !== _iub.csPurposes.length)
                    this.purposes = ii.fromList(_iub.csPurposes.join(","));
                else {
                    var t = this.storage.getLocal(this.settings.consentCookieNameBase + this.options.cookiePolicyId);
                    t && "object" === n(t) && t.purposes && (this.purposes = ii.fromList(Object.keys(t.purposes).join(",")))
                }
                this.purposes && 0 !== this.purposes.size() || (this.purposes = ii.allPurposes),
                this.purposesPreference = new Mi,
                this.purposes.purposes[1] = ii.allPurposes.purposes[1],
                this.options.fadpApplies ? this.purposesPreference.approveUnexpressedPreferences(this.purposes.toIDArray()) : this.purposesPreference.setPreference(1, !0)
            }
        }, {
            key: "loadTCFConsent",
            value: function() {
                var e = this
                  , t = Le()
                  , n = this.options
                  , i = so(n);
                return n.enableTcf ? (this.cmpLibraryPromise.then((function() {
                    var o = e.fetchCMPCookie()
                      , a = e.getCustomPreferencesResult
                      , r = e.getMissingCustomPreferences(a).length > 0
                      , s = (n.askConsentIfCMPNotFound || 1 !== e.state.tcfConsentStatus) && (!o || r) && n.gdprApplies;
                    if (o) {
                        var c = o.split(".");
                        c.length > 1 && (e.state.tcfv2String = c[0],
                        e.storage.setLocalCMP(i, c[0]))
                    }
                    !n.skipSaveConsent && s && e.deleteConsent(),
                    t.resolve()
                }
                )),
                t) : t.resolve()
            }
        }, {
            key: "fetchCMPCookie",
            value: function() {
                var e = so(this.options);
                if (!this.options.enableTcf)
                    return null;
                var t = this.state.tcfv2String;
                if (t)
                    return this.isTcfConsentValid(t) || (t = null,
                    this.state.tcfv2String = ""),
                    t;
                var n = this.storage.getLocalCMP(e);
                return n || (n = this.storage.getLocalCMP(this.settings.TCF_V2_CONSENT_COOKIE)),
                this.isTcfConsentValid(n) || (n = null),
                this.state.tcfv2String = n || "",
                n
            }
        }, {
            key: "isTcfConsentValid",
            value: function(e) {
                var t = this.getTcfConsentStatus(e);
                return this.state.tcfConsentStatus = t,
                0 === t
            }
        }, {
            key: "getTcfConsentStatus",
            value: function(e) {
                var t = Qo(e);
                return (e ? this.needsConsentOnVendorListUpdate(t) && 2 : 1) || this.isTcfConsentCreatedBefore(t, _iub.invTcfC || null) && 3 || this.isTcfConsentUpdatedBefore(t, Math.max(_iub.invTcfU || 0, this.options.invalidateConsentBefore || 0)) && 4 || this.isNotServiceSpecific(t) && 5 || this.didntConsentNewVendors(t) && 6 || 0
            }
        }, {
            key: "isGoogleAdditionalConsentValid",
            value: function() {
                var e = !0;
                null !== this.state.tcfv2String && (e = 0 === this.getTcfConsentStatus(this.state.tcfv2String));
                return this.options.googleAdditionalConsentMode && e
            }
        }, {
            key: "getCurrentGVLVersion",
            value: function(e) {
                var t = 0;
                switch (e.toString()) {
                case "2.2":
                    t = _iub.GVL3;
                    break;
                case "2":
                default:
                    t = _iub.GVL2
                }
                return t
            }
        }, {
            key: "needsConsentOnVendorListUpdate",
            value: function(e) {
                var t = this.getCurrentGVLVersion(e.getTcfVersion());
                if (e.getVendorListVersion() < t) {
                    var n = ((new Date).getTime() - e.getLastUpdate()) / 864e5
                      , i = this.options.newConsentAtVendorListUpdate;
                    if (null != i)
                        return n > i
                }
                return !1
            }
        }, {
            key: "isTcfConsentCreatedBefore",
            value: function(e, t) {
                var n = t
                  , i = new Date;
                i.setDate(i.getDate() - this.settings.MAX_TCF2_COOKIE_DURATION),
                (!n && this.settings.MAX_TCF2_COOKIE_DURATION || n < i) && (n = i);
                var o = new Date(n).getTime();
                return n && e.getCreationDate() < o
            }
        }, {
            key: "isTcfConsentUpdatedBefore",
            value: function(e, t) {
                return t && e.getLastUpdate() < ji(t)
            }
        }, {
            key: "isNotServiceSpecific",
            value: function(e) {
                return !e.getIsServiceSpecific()
            }
        }, {
            key: "didntConsentNewVendors",
            value: function(e) {
                var t = e.getCreationDate()
                  , n = e.getLastUpdate()
                  , i = Date.UTC(2020, 7, 18, 21);
                return t < i && n < i && n - t > 36e5
            }
        }, {
            key: "getMissingCustomPreferences",
            value: function(e) {
                for (var t = [], n = this.getCustomPurposes(), i = 0; i < n.length; i++) {
                    var o = n[i];
                    e.hasOwnProperty(o.id) || t.push(o.id)
                }
                return t
            }
        }, {
            key: "getCustomPurposes",
            value: function() {
                return this.customPurposes || (this.customPurposes = [],
                this.options.googleAdsPreferenceManagement && this.customPurposes.push({
                    id: this.settings.GOOGLE_ADS_PERSONALIZED_ID,
                    name: "Personalized advertising from Google and its partners",
                    description: "Google and its partner ad technology providers use cookies for personalization and measurement purposes. Users can customize their consent preferences for both Google and its partners. To learn more, please refer to the <a target='_blank' rel='noopener' href='https://support.google.com/admanager/answer/9012903'>privacy policies of the respective services</a>."
                }),
                this.options.googleAdditionalConsentMode && this.customPurposes.push({
                    id: "gac",
                    name: "",
                    description: ""
                })),
                this.customPurposes
            }
        }, {
            key: "loadConsent",
            value: function() {
                var e = this
                  , t = {
                    consent: null,
                    doConsentRewrite: null
                }
                  , n = Le()
                  , i = this.storage.loadConsentLocal();
                return i ? (this.info("local stored consent found:"),
                Object.keys(i).forEach((function(t) {
                    e.consent[t] = i[t]
                }
                )),
                t.doConsentRewrite = !1,
                this.options.enableRemoteConsent && this.storage.compactRemote(),
                t.consent = i,
                n.resolve(t)) : (this.info("local stored consent NOT found"),
                this.storage.loadConsentRemote().then((function(e) {
                    t.consent = e,
                    n.resolve(t)
                }
                ))),
                n
            }
        }, {
            key: "fireCallback",
            value: function(e, t) {
                var n = this.options.callback[e]
                  , i = t;
                switch (this.emit("callback.before." + e, i),
                e) {
                case "onReady":
                    i = this.consent.consent;
                    break;
                case "onPreferenceExpressed":
                case "onPreferenceNotNeeded":
                    this.fireCallback("onPreferenceExpressedOrNotNeeded", i);
                    break;
                case "onConsentRead":
                    !n && this.isConsentGiven() && (n = this.options.callback.onConsentGiven);
                    break;
                case "onCcpaFirstAcknowledged":
                    n = this.options.callback.onCcpaFirstAcknowledged;
                    break;
                case "onCcpaFirstOptOut":
                    n = this.options.callback.onCcpaFirstOptOut
                }
                if (n)
                    try {
                        this.debug("activating callback: " + n),
                        n(i)
                    } catch (t) {
                        if (this.options.raiseOnException)
                            throw t;
                        "onError" !== e ? this.error("Exception while invoking callback " + e + ": " + (t.message || t)) : this.log("Exception while invoking callback " + e + ": " + (t.message || t), "error")
                    }
            }
        }, {
            key: "isConsentGiven",
            value: function() {
                if (!this.consent)
                    return !1;
                var e = !0
                  , t = this.options.perPurposeConsent && (this.options.gdprApplies || this.options.lgpdApplies || this.options.fadpApplies);
                return t && e && (this.consent.purposes || (e = !1),
                e = this.purposesPreference.hasApproved(this.purposes.toIDArray())),
                this.usPurposes && e && (e = this.usPurposes.userConsentGiven),
                t || this.options.usprApplies ? e : !0 === this.consent.consent
            }
        }, {
            key: "start",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.debug("executing start() ...");
                var n = this.options
                  , i = !1 !== t.doConsentRewrite;
                if (this.state.fatalError)
                    return this.error("exiting start() since in fatalError ..."),
                    !1;
                if (this.setup()) {
                    this.info("IubendaCookieSolution setup OK! Starting ..."),
                    this.emit("start"),
                    this.tracker.start(this.isPreferenceExpressed()),
                    n.enableGpp && (this.gppCmpApi = new Ho(n)),
                    ye((function() {
                        if (e.options.enableTcf && St(),
                        e.ui.createPreferencesWidgets(),
                        wn(),
                        e.ui.bindVendorListBtns(),
                        n.enableCcpa && n.ccpaApplies)
                            for (var t = document.querySelectorAll(".iubenda-ccpa-opt-out"), i = 0; i < t.length; i++)
                                e.handleAskOptOutClick(t[i])
                    }
                    ), !0),
                    this.renewCookies(),
                    this.state.needsConsent && this.isPreferenceExpressed() ? (this.options.showBannerForCH && !this.consent.timestamp && this.startCsUi(),
                    this.isConsentGiven() ? (this.state.consentFoundOnLoad = !0,
                    i && this.storage.storeConsentLocal(),
                    this.fireCallback("onPreferenceExpressed", this.getPreferencesExpressed())) : (this.options.callback.onConsentRead ? this.fireCallback("onConsentRead") : this.isConsentRejected() && this.fireCallback("onConsentRejected"),
                    this.fireCallback("onPreferenceExpressed", this.getPreferencesExpressed())),
                    this.updateTcfApi(!1),
                    this.updateGppApi(!1),
                    this.ui.bindButtons(),
                    this.csReady()) : this.state.needsConsent && !this.isPreferenceExpressed() ? (this.updateTcfApi(!0),
                    this.updateGppApi(!0),
                    this.startCsUi(),
                    this.isPriorConsent() || (this.state.activatingNoPriorConsent = !0,
                    this.fireCallback("onPreferenceNotNeeded"))) : (this.updateTcfApi(!1),
                    this.updateGppApi(!1),
                    this.ui.bindButtons(),
                    this.csReady());
                    var o = !this.state.needsConsent;
                    this.applyConsent(o),
                    this.state.reloadAfterLocaleSet && this.reloadPage(),
                    n.enableCcpa && (window.__uspapi = function(t, n, i) {
                        "function" == typeof i && 1 === n && "getUSPData" === t && i({
                            version: n,
                            uspString: e.getUspString()
                        }, !0)
                    }
                    ,
                    n.ccpaApplies && this.shouldAcknowledgeCcpaOnLoad() && this.acknowledgeCcpa()),
                    this.enablePrivacyPolicyLinks(),
                    this.storeFadpConsent(),
                    this.options.hasSensitiveData || !0 !== this.options.usprApplies || this.storeUSPurposeCookie()
                } else
                    this.fatal("Cannot start IubendaCookieSolution");
                n.ccpaApplies && Ct();
                var a = ae(".iubenda-cs-uspr-link");
                return a.forEach((function(t) {
                    e.handleUsprPPClick(t)
                }
                )),
                null
            }
        }, {
            key: "setup",
            value: function() {
                var e, t = this;
                if (this.debug("executing setup() ..."),
                this.state.fatalError)
                    return this.error("exiting setup() since in fatalError ..."),
                    !1;
                if (this.invalidateConsentIfNecessary(),
                this.options.perPurposeConsent && (null === (e = this.consent) || void 0 === e ? void 0 : e.purposes) && Object.keys(this.consent.purposes).forEach((function(e) {
                    t.purposesPreference.setPreference(e, t.consent.purposes[e])
                }
                )),
                !this.options.gdprApplies && !this.options.lgpdApplies) {
                    if (this.options.ccpaApplies && this.options.ccpaNoticeDisplay && !this.state.ccpaAcknowledged)
                        return this.state.needsConsent = !0,
                        !0;
                    if (this.options.showBannerForUS || this.options.showBannerForCH)
                        return this.state.needsConsent = !0,
                        !0;
                    this.info("Setting state.needsConsent = false since gdprApplies is false, scripts will be activated and banner will not be shown."),
                    this.state.needsConsent = !1
                }
                return this.migratePurposesPreferences(),
                !0
            }
        }, {
            key: "enablePrivacyPolicyLinks",
            value: function() {
                for (var e = ae("#iubenda-cs-banner .iubenda-privacy-policy-link"), t = 0; t < e.length; t++)
                    this.handleBannerPPClick(e[t])
            }
        }, {
            key: "invalidateConsentIfNecessary",
            value: function() {
                this.isPreferenceValid() || this.deleteConsent({
                    skipResetCookies: this.options.skipSaveConsent,
                    skipResetRemoteCookies: !this.options.enableRemoteConsent
                })
            }
        }, {
            key: "isPreferenceValid",
            value: function() {
                var e, t, n = ji(this.consent.timestamp || 0), i = ji(this.options.invalidateConsentBefore);
                if (i && n > 0 && n < i)
                    return !1;
                if (this.options.consApiKey && !(null === (e = this.consent) || void 0 === e || null === (t = e.cons) || void 0 === t ? void 0 : t.rand)) {
                    var o = this.options.invalidateConsentWithoutLog
                      , a = "string" == typeof o || "number" == typeof o
                      , r = a ? new Date(o).getTime() : null;
                    if (!0 === o || a && r > n)
                        return !1
                }
                var s = this.storage.getLocal(this.storage.configuration.consentUsprNameLocal);
                return !(this.options.usprApplies && !s && this.consent.timestamp)
            }
        }, {
            key: "migratePurposesPreferences",
            value: function() {
                var e = this;
                if (this.options.perPurposeConsent && !this.isPreferenceExpressed() && this.consent && void 0 !== this.consent.consent) {
                    this.debug("switching from no per-purpose to per-purpose");
                    var t, n = this.purposes.toIDArray();
                    for (t = 0; t < n.length; ++t) {
                        var i = +n[t]
                          , o = 1 === i || this.consent.consent;
                        this.purposesPreference.setPreference(i, o)
                    }
                    this.consent.purposes = this.purposesPreference.getPreferences()
                } else if (!this.options.perPurposeConsent && void 0 === this.consent.consent && void 0 !== this.consent.purposes) {
                    this.debug("switching from per-purpose to no per-purpose");
                    var a = Object.keys(this.consent.purposes).filter((function(e) {
                        return 1 != +e
                    }
                    )).map((function(t) {
                        return e.consent.purposes[t]
                    }
                    ));
                    a.length && (a.every(Boolean) ? this.consent.consent = !0 : a.some(Boolean) || (this.consent.consent = !1))
                }
            }
        }, {
            key: "handleAskOptOutClick",
            value: function(e) {
                var t = this;
                Ae(e, "click", (function(e) {
                    e.stopPropagation(),
                    t.askCcpaOptOut()
                }
                ))
            }
        }, {
            key: "askCcpaOptOut",
            value: function() {
                this.ui.showCcpaOptOutConfirmBox()
            }
        }, {
            key: "updateTcfApi",
            value: function(e, t) {
                var n = this.options;
                if (n.enableTcf && _iub.cmp && _iub.cmp.exposeCmpGlobalFunction) {
                    if (this.state.lastCmpUiVisibleState === !!e)
                        return;
                    this.state.lastCmpUiVisibleState = !!e,
                    this.info("Going to expose global API, reading data ...");
                    var i = this.fetchCustomPreferences();
                    this.info("Updating consent data via CMP API ..."),
                    _iub.cmp.exposeCmpGlobalFunction(t || this.state.tcfv2String, n.gdprAppliesGlobally, n.gdprApplies, !1, i, e)
                }
            }
        }, {
            key: "updateGppApi",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "processing";
                if (this.options.enableGpp) {
                    var i = t ? {
                        tcString: this.state.tcfv2String,
                        usPurposes: this.usPurposes
                    } : {};
                    this.gppCmpApi.update(e, i, n)
                }
            }
        }, {
            key: "csReady",
            value: function() {
                _iub.csReady = !0,
                this.state.ccpaAcknowledged && this.fireCallback("onCcpaAcknowledged"),
                this.state.ccpaOptedOut && this.fireCallback("onCcpaOptOut"),
                this.fireCallback("onReady")
            }
        }, {
            key: "startCsUi",
            value: function() {
                var e = this;
                this.options.hideInIframe && this.state.inIframe || this.startCmpWidget().then((function() {
                    e.ui.start()
                }
                ))
            }
        }, {
            key: "startCmpWidget",
            value: function() {
                var e = this
                  , t = Le();
                return this.options.enableTcf ? this.cmpLibraryPromise.then((function() {
                    e.ui.setCmpWidget(e.state.tcfv2String, e.getCustomPreferencesResult),
                    t.resolve()
                }
                )) : t.resolve(),
                t
            }
        }, {
            key: "isPriorConsent",
            value: function() {
                return this.state.enabled ? this.state.needsConsent ? !!(this.options.gdprApplies || this.options.lgpdApplies || this.options.showBannerForUS) : (this.info("Prior consent is not needed for the current user."),
                !1) : (this.info("Cookie policy NOT ENABLED, starting in priorConsent false mode."),
                !1)
            }
        }, {
            key: "startActivation",
            value: function(e, t) {
                var n = this
                  , i = this.options;
                if (!_iub.csActivationViaSafeMode || t) {
                    if (!_iub.csActivationInProgress) {
                        _iub.csActivationInProgress = !0,
                        _iub.csActivationDone = !1;
                        var o = null;
                        e && (o = this.options.get("callback.onActivationDone"));
                        var a = this.firstActivationCompletedPromise;
                        this.emit("before-activation");
                        var r = this.purposesPreference;
                        !this.state.enabled && i.perPurposeConsent && ((r = new Mi).preferences = _(this.purposesPreference.preferences),
                        r.approveUnexpressedPreferences(this.purposes.toIDArray()));
                        var s = {
                            usPurposesPreference: this.usPurposes,
                            purposesPreference: this.purposesPreference,
                            consent: this.consent.consent
                        };
                        this.startActivator(s, (function() {
                            _iub.csActivationInProgress = !1,
                            _iub.csActivationDone = !0,
                            n.emit("activation-done"),
                            a && !a._isResolved && a.resolve(),
                            o && o()
                        }
                        ))
                    }
                } else
                    Ke.debug("activation already done or in progress by SAFEMODE activator. Yielding."),
                    this.firstActivationCompletedPromise.resolve()
            }
        }, {
            key: "handleBannerPPClick",
            value: function(e) {
                var t = this;
                Ae(e, "click", (function(e) {
                    e.stopPropagation(),
                    t.ui.showPPCcpaSection(t.options.cookiePolicyInOtherWindow)
                }
                ))
            }
        }, {
            key: "handleUsprPPClick",
            value: function(e) {
                var t = this;
                Ae(e, "click", (function(e) {
                    e.stopPropagation(),
                    t.ui.showPPUsprSection(t.options.cookiePolicyInOtherWindow)
                }
                ))
            }
        }, {
            key: "skipUnsupported",
            value: function() {
                return !this.browserDetect.isMobile() && "Explorer" === this.browserDetect.browser && this.browserDetect.version < 11
            }
        }, {
            key: "isTcfConsentCreatedBefore",
            value: function(e, t) {
                var n = t
                  , i = new Date;
                i.setDate(i.getDate() - this.settings.MAX_TCF2_COOKIE_DURATION),
                (!n && this.settings.MAX_TCF2_COOKIE_DURATION || n < i) && (n = i);
                var o = new Date(n).getTime();
                return n && e.getCreationDate() < o
            }
        }, {
            key: "setUspString",
            value: function(e) {
                null === e ? this.state.ccpaUspStateFound = !1 : (this.state.ccpaUspStateFound = !0,
                this.state.ccpaAcknowledged = "Y" === e[1],
                this.state.ccpaOptedOut = "Y" === e[2])
            }
        }, {
            key: "applyConsent",
            value: function(e) {
                var t = !!e;
                if (this.debug("applying current consent [with force option: " + t + "] ..."),
                t || this.isPreferenceExpressed())
                    this.info("consent has been given ..."),
                    this.state.activatingNoPriorConsent ? this.info("snippets already activated ...") : (this.updateTcfApi(!1),
                    this.updateGppApi(!1, !0, "processed"),
                    this.startActivation(!0)),
                    this.fireCallback(this.state.needsConsent ? "onConsentRead" : "onPreferenceNotNeeded");
                else {
                    this.info("consent NOT given");
                    var n = {
                        usPurposesPreference: this.usPurposes,
                        purposesPreference: this.purposesPreference
                    };
                    this.startActivator(n)
                }
            }
        }, {
            key: "startActivator",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , n = {
                    perPurposeConsent: this.options.perPurposeConsent,
                    skipPurposeCheck: !this.state.enabled,
                    gdprApplies: this.options.gdprApplies,
                    lgpdApplies: this.options.lgpdApplies,
                    usprApplies: this.options.usprApplies,
                    fadpApplies: this.options.fadpApplies,
                    promptToAcceptOnBlockedElements: this.options.promptToAcceptOnBlockedElements,
                    banner: this.options.banner,
                    purposes: this.options.purposes,
                    renderOverlay: ro
                };
                this.activator.activateOnDomReady(t, n, e, this.state.ccpaOptedOut)
            }
        }, {
            key: "consentGiven",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = t.eventName
                  , i = this.checkConsentGiven(n);
                if (this.options.perPurposeConsent && (i ? this.purposesPreference.approveUnexpressedPreferences(this.purposes.toIDArray()) : this.purposesPreference.express(this.purposes.toIDArray(), !1),
                this.purposesPreference.setPreference(1, !0)),
                this.options.usprApplies && (this.usPurposes.userConsentGiven = !0),
                this.options.enableTcf && !this.options.perPurposeConsent)
                    try {
                        var o = this.ui.cmpWidget.getEnabledPurposeIds();
                        -1 === o.indexOf(1) && this.ui.CPiFrame.isInTcfView() && (i = !1)
                    } catch (e) {}
                this.consent = this.getConsentObj(i),
                this.options.reloadOnConsent && !this.state.consentFoundOnLoad && (this.state.reloadAfterRemoteSet = (this.options.enableRemoteConsent ? 1 : 0) + (this.options.enableTcf ? 1 : 0));
                var a = [Le((function(e) {
                    return e()
                }
                ))];
                this.storage.storeConsent(),
                this.storeUSPurposeCookie(),
                this.options.enableTcf && (this.options.gdprApplies || this.options.lgpdApplies) && !this.options.skipSaveConsent && a.push(Le((function(t) {
                    e.storeCmpChoice().then((function(n) {
                        e.updateTcfApi(!1, n),
                        t()
                    }
                    ))
                }
                ))),
                Ee(a).then((function() {
                    e.updateGppApi(!1, !0, "processed"),
                    e.fireConsentCallbacks(n)
                }
                )),
                this.tracker.consentGiven(n)
            }
        }, {
            key: "isCpOpen",
            value: function() {
                return this.state.cpOpen
            }
        }, {
            key: "isConsentRejected",
            value: function() {
                if (!this.isPreferenceExpressed())
                    return !1;
                if (this.options.perPurposeConsent) {
                    if (!this.consent.purposes)
                        return !1;
                    var e = this.purposes.toIDArray().filter((function(e) {
                        return "1" !== e
                    }
                    ));
                    return this.purposesPreference.hasDisapproved(e)
                }
                return !1 === this.consent.consent
            }
        }, {
            key: "getConsentObj",
            value: function(e) {
                var t = {
                    timestamp: (new Date).toISOString(),
                    version: this.settings.version
                };
                return this.options.perPurposeConsent && (this.options.gdprApplies || this.options.lgpdApplies || this.options.fadpApplies) ? t.purposes = this.purposesPreference.preferences : t.consent = e,
                t
            }
        }, {
            key: "storeCmpChoice",
            value: function() {
                var e = this
                  , t = this.ui
                  , n = t.cmpWidget
                  , i = this.state.tcfv2String
                  , o = Le()
                  , a = this.getCustomPreferencesResult;
                return this._waitForCmpWidgetRender().then((function() {
                    e._fetchVendorIdsToEnable(n, i).then((function(r) {
                        t.consentRejected ? (n.disableAllPurposesAndAllVendors(),
                        (e.options.googleAdsPreferenceManagement || e.options.googleAdditionalConsentMode) && n.disableAllCustomPurposes()) : !i && t.consentAccepted ? (n.enableAllPurposesAndAllVendors(),
                        n.enableAllCustomPurposes(),
                        (e.options.googleAdsPreferenceManagement || e.options.googleAdditionalConsentMode) && n.enableMissingCustomPreferences(a)) : r.length && (n.enableVendors(r),
                        n.enableLegIntVendors && n.enableLegIntVendors(r)),
                        e.storeCustomPreferences(n.getCustomPreferences());
                        var s = n.getPreferenceString();
                        e.storeCMPPreference(s),
                        e.state.tcfv2String = s,
                        e.storeCustomPreferences(n.getCustomPreferences()),
                        e.storeCMPChoicePromise.resolve(s),
                        o.resolve(s)
                    }
                    ))
                }
                )),
                o
            }
        }, {
            key: "_waitForCmpWidgetRender",
            value: function() {
                var e = Le();
                return this.ui.cmpWidget.hasBeenRendered() ? e.resolve() : this.ui.cmpWidget.render((function() {
                    e.resolve()
                }
                )),
                e
            }
        }, {
            key: "_fetchVendorIdsToEnable",
            value: function(e, t) {
                var n = Le();
                if (!t)
                    return n.resolve([]),
                    n;
                if (e.hasBeenDisplayed())
                    return n.resolve([]),
                    n;
                var i = e._vendorsJSON
                  , o = Qo(t).getVendorListVersion();
                return o >= i.vendorListVersion ? (n.resolve([]),
                n) : (e.getVendorList(o, (function(e) {
                    for (var t = {}, o = 0; o < i.vendors.length; o++)
                        t[i.vendors[o].id] = !0;
                    for (var a = 0; a < e.vendors.length; a++)
                        delete t[e.vendors[a].id];
                    var r = Object.keys(t).map((function(e) {
                        return +e
                    }
                    ));
                    n.resolve(r)
                }
                ), (function() {
                    n.resolve([])
                }
                )),
                n)
            }
        }, {
            key: "fireConsentCallbacks",
            value: function(e) {
                var t = this;
                this.emit("on-consent-first-given"),
                this.fireCallback("onConsentFirstGiven", e),
                "rejectButtonClick" === e && (this.fireCallback("onConsentFirstRejected"),
                this.fireCallback("onConsentRejected"));
                var n = this.getPreferencesExpressed();
                this.fireCallback("onPreferenceFirstExpressed", n),
                this.fireCallback("onPreferenceExpressed", n),
                this.options.reloadOnConsent && !this.state.consentFoundOnLoad ? this.options.enableTcf ? this.storeCMPChoicePromise.then((function() {
                    t.reloadOrWaitForTimeOut()
                }
                )) : this.reloadOrWaitForTimeOut() : this.applyConsent()
            }
        }, {
            key: "reloadOrWaitForTimeOut",
            value: function() {
                var e = this;
                if (this.state.reloadAfterRemoteSet > 0) {
                    var t = this.options.enableTcf ? this.settings.timeoutBeforeReloadWithCmp : this.settings.timeoutBeforeReload;
                    setTimeout((function() {
                        e.reloadPage()
                    }
                    ), t)
                } else
                    this.reloadPage()
            }
        }, {
            key: "handleMultipleLanguages",
            value: function() {
                _iub.csFeatures && "string" == typeof _iub.csFeatures.multiple_languages && _iub.csConfiguration.lang && _iub.csFeatures.multiple_languages !== _iub.csConfiguration.lang && (_iub.csEnabled = !1,
                this.state.enabled = !1)
            }
        }, {
            key: "enableCsOnPreviewMode",
            value: function(e) {
                e.previewMode && (_iub.csEnabled = !0,
                this.state.enabled = !0)
            }
        }, {
            key: "checkDataAfterRequest",
            value: function() {
                void 0 === _iub.csEnabled ? (Ke.warn("Remote configuration NOT correctly loaded: Iubenda Cookie Solution enabled without Priorconsent."),
                _iub.csEnabled = this.state.enabled = !1) : this.state.enabled = _iub.csEnabled
            }
        }, {
            key: "checkMobileLicensing",
            value: function() {
                var e;
                if ("iubenda_sdk"in window) {
                    this.state.fromSDK = !0;
                    var t = !0;
                    void 0 !== (null === (e = _iub.csFeatures) || void 0 === e ? void 0 : e.mobile_app_integration) && (t = !_iub.csFeatures || !!_iub.csFeatures.mobile_app_integration),
                    t || (_iub.csEnabled = !1,
                    this.state.enabled = !1,
                    window.iubenda_sdk.emit("cserror", {
                        message: "The mobile integration is not enabled."
                    }))
                }
            }
        }, {
            key: "setConfiguration",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!this.state.preLoaded) {
                    this.checkDataAfterRequest(),
                    this.handleMultipleLanguages(),
                    this.checkMobileLicensing(),
                    this.enableCsOnPreviewMode(e);
                    var t = {
                        csRC: _iub.csRC,
                        csEnabled: _iub.csEnabled,
                        csPurposes: _iub.csPurposes,
                        csT: _iub.csT,
                        csFeatures: _iub.csFeatures
                    };
                    this.options = new no(e,t)
                }
            }
        }, {
            key: "shouldShowBanner",
            value: function() {
                return this.isPreferenceExpressed() && !this.options.showBannerForCH || this.ui && this.ui.isOnlyCcpaConsentGiven() ? (this.info("consent given, no banner to show"),
                !1) : (this.debug("consent NOT given, setting up UI"),
                !0)
            }
        }, {
            key: "setCpOpen",
            value: function(e) {
                this.state.cpOpen !== e && (this.state.cpOpen = e,
                e ? this.fireCallback("on2ndLayerShown") : this.fireCallback("on2ndLayerClosed"))
            }
        }, {
            key: "version",
            value: function() {
                return Ke.warn("[Deprecation] _iub.cs.version() is deprecated, please use _iub.cs.VERSION instead"),
                this.settings.version
            }
        }, {
            key: "remoteCookiesSet",
            value: function(e) {
                this.storage.remoteCookiesSet(e)
            }
        }, {
            key: "pickUpRemoteCookie",
            value: function(e) {
                this.storage.pickUpRemoteCookie(e)
            }
        }, {
            key: "log",
            value: function(e, t) {
                var n = t.toLowerCase();
                Ke.log(n, e),
                "error" !== n && "fatal" !== n || ("fatal" === n && (this.state.fatalError = !0),
                null != e && this.state.errors.push(e))
            }
        }, {
            key: "closeCP",
            value: function() {
                this.ui.closeCPiFrame()
            }
        }, {
            key: "stringEndsWith",
            value: function(e, t) {
                return -1 !== e.indexOf(t, e.length - t.length)
            }
        }, {
            key: "getSavedPreferences",
            value: function() {
                var e = this.fetchCustomPreferences();
                return this.savedPreferences.cmpCookie = this.state.tcfv2String,
                this.savedPreferences.customPreferences = e,
                this.savedPreferences
            }
        }, {
            key: "debug",
            value: function(e) {
                this.log(e, "debug")
            }
        }, {
            key: "warn",
            value: function(e) {
                this.log(e, "warn")
            }
        }, {
            key: "error",
            value: function(e) {
                this.log(e, "error"),
                this.fireCallback("onError", e)
            }
        }, {
            key: "fatal",
            value: function(e) {
                this.log(e, "fatal"),
                this.fireCallback("onFatalError", e)
            }
        }, {
            key: "info",
            value: function(e) {
                this.log(e, "info")
            }
        }, {
            key: "shouldAcknowledgeCcpaOnLoad",
            value: function() {
                return !this.state.ccpaAcknowledged && (!(this.options.ccpaNoticeDisplay && !this.options.ccpaAcknowledgeOnDisplay) || !!this.options.ccpaAcknowledgeOnLoad)
            }
        }, {
            key: "acknowledgeCcpa",
            value: function(e) {
                var t = this.state.ccpaAcknowledged;
                this.state.ccpaUspStateFound = !0,
                this.state.ccpaAcknowledged = !0,
                e && (this.usPrivacyCookie = null,
                this.state.ccpaOptedOut = !1),
                this.setCcpaCookie(),
                t || this.fireCallback("onCcpaFirstAcknowledged"),
                this.fireCallback("onCcpaAcknowledged")
            }
        }, {
            key: "generateCcpaCookie",
            value: function() {
                var e, t;
                return {
                    uspString: this.getUspString(),
                    firstAcknowledgeDate: (null === (e = this.usPrivacyCookie) || void 0 === e ? void 0 : e.firstAcknowledgeDate) || (this.state.ccpaAcknowledged ? new Date : null),
                    optOutDate: (null === (t = this.usPrivacyCookie) || void 0 === t ? void 0 : t.optOutDate) || (this.state.ccpaOptedOut ? new Date : null)
                }
            }
        }, {
            key: "setCcpaCookie",
            value: function() {
                if (!this.options.skipSaveConsent) {
                    var e = this.generateCcpaCookie();
                    this.storage.setLocal(this.settings.USPRIVACY_COOKIE, e),
                    this.options.enableRemoteConsent && this.storage.setRemote(this.storage.configuration.ccpaNameRemote, e),
                    this.usPrivacyCookie = e
                }
            }
        }, {
            key: "getUspString",
            value: function() {
                return this.options.ccpaApplies ? this.state.ccpaUspVersion + (this.state.ccpaAcknowledged ? "Y" : "N") + (this.state.ccpaOptedOut ? "Y" : "N") + this.getLspaValue() : "1---"
            }
        }, {
            key: "getLspaValue",
            value: function() {
                switch (this.options.ccpaLspa) {
                case !0:
                case "Y":
                case "y":
                    return "Y";
                case !1:
                case "N":
                case "n":
                    return "N";
                default:
                    return "-"
                }
            }
        }, {
            key: "optOutCcpa",
            value: function() {
                var e = this.state.ccpaOptedOut;
                this.state.ccpaUspStateFound = !0,
                this.state.ccpaAcknowledged = !0,
                this.state.ccpaOptedOut = !0,
                this.setCcpaCookie(),
                e || this.fireCallback("onCcpaFirstOptOut"),
                this.fireCallback("onCcpaOptOut")
            }
        }, {
            key: "acceptAllUSPurposeConsent",
            value: function(e) {
                this.usPurposes.setPreferences(e),
                this.storeUSPurposeCookie()
            }
        }, {
            key: "storeUSPurposeCookie",
            value: function() {
                if (this.options.skipSaveConsent)
                    this.info("NOT saving consent in cookie since options.skipSaveConsent is provided TRUE");
                else if (this.usPurposes) {
                    var e = this.usPurposes.getPreferences();
                    this.storage.setLocal(this.storage.configuration.consentUsprNameLocal, e),
                    this.options.enableRemoteConsent && this.storage.setRemote(this.storage.configuration.consentUsprNameRemote, e)
                }
            }
        }, {
            key: "storeFadpConsent",
            value: function() {
                this.options.fadpApplies && (this.consent = this.getConsentObj(!1),
                this.storage.storeConsent())
            }
        }, {
            key: "setPurposesPreference",
            value: function(e) {
                var t = this;
                if ((this.options.gdprApplies || this.options.lgpdApplies || this.options.fadpApplies) && this.options.perPurposeConsent) {
                    var n = e.all
                      , i = p(e, ["all"])
                      , o = Object.keys(i);
                    void 0 !== n && this.purposesPreference.express(this.purposes.toIDArray(), n),
                    o.length && o.forEach((function(n) {
                        var i = e[n];
                        t.purposesPreference.setPreference(n, i)
                    }
                    )),
                    this.purposesPreference.setPreference(1, !0)
                }
            }
        }, {
            key: "checkConsentGiven",
            value: function(e) {
                var t = !(!this.isCpOpen() && this.isConsentRejected()) && !("rejectButtonClick" === e);
                if (this.options.enableTcf && !this.options.perPurposeConsent)
                    try {
                        -1 === this.ui.cmpWidget.getEnabledPurposeIds().indexOf(1) && this.ui.CPiFrame.isInTcfView() && (t = !1)
                    } catch (e) {}
                return t
            }
        }, {
            key: "setTcfPreference",
            value: function(e, t) {
                return "string" == typeof e.tcfv2 ? this.setTcfString(e) : void 0 !== e.tcfv2 ? e.tcfv2.all ? this.acceptAllTcf(t) : this.rejectAllTcf() : Le((function(e) {
                    return e()
                }
                ))
            }
        }, {
            key: "setTcfString",
            value: function(e) {
                var t = this
                  , n = Le();
                return !this.options.enableTcf || this.options.skipSaveConsent ? n.resolve() : (this.updateTcfApi(!0, e.tcfv2),
                Ee([this.startCmpWidget(), this._waitForCmpWidgetRender()]).then((function() {
                    e.gac && t.storeCustomPreferences({
                        gac: e.gac
                    }),
                    t.storeCMPPreference(e.tcfv2),
                    t.state.tcfv2String = e.tcfv2,
                    t.updateTcfApi(!1, t.state.tcfv2String),
                    n.resolve(e.tcfv2)
                }
                )),
                n)
            }
        }, {
            key: "acceptAllTcf",
            value: function(e) {
                var t = this
                  , n = Le();
                return !this.options.enableTcf || this.options.skipSaveConsent ? n.resolve() : (this.updateTcfApi(!0, this.state.tcfv2String),
                Ee([this.startCmpWidget(), this._waitForCmpWidgetRender()]).then((function() {
                    var i = t.ui.cmpWidget;
                    (!t.state.tcfv2String || e) && (t.options.acceptTcfSpecialFeaturesWithAcceptBtn ? i.enableAllPurposesAndAllVendors() : i.enableAllEntitiesBasedOnSpecialFeatures(),
                    i.enableAllCustomPurposes(),
                    t.options.googleAdditionalConsentMode && t.options.perPurposeConsent && i.acEnableEntities(!0)),
                    t.storeCustomPreferences(i.getCustomPreferences());
                    var o = i.getPreferenceString();
                    t.storeCMPPreference(o),
                    t.state.tcfv2String = o,
                    t.updateTcfApi(!1, t.state.tcfv2String),
                    n.resolve(o)
                }
                )),
                n)
            }
        }, {
            key: "rejectAllTcf",
            value: function() {
                var e = this
                  , t = Le();
                return !this.options.enableTcf || this.options.skipSaveConsent ? t.resolve() : (this.updateTcfApi(!0, this.state.tcfv2String),
                Ee([this.startCmpWidget(), this._waitForCmpWidgetRender()]).then((function() {
                    var n = e.ui.cmpWidget;
                    n.disableAllPurposesAndAllVendors();
                    var i = e.options;
                    (i.googleAdsPreferenceManagement || i.googleAdditionalConsentMode) && n.disableAllCustomPurposes(),
                    e.storeCustomPreferences(n.getCustomPreferences());
                    var o = n.getPreferenceString();
                    e.storeCMPPreference(o),
                    e.state.tcfv2String = o,
                    e.updateTcfApi(!1, e.state.tcfv2String),
                    t.resolve(o)
                }
                )),
                t)
            }
        }, {
            key: "setGeneralPreference",
            value: function(e, t, n) {
                var i = this
                  , o = !1;
                this.options.reloadOnConsent && !this.state.consentFoundOnLoad && (this.state.reloadAfterRemoteSet = (this.options.enableRemoteConsent ? 1 : 0) + (this.options.enableTcf ? 1 : 0));
                var a = Le();
                if (this.options.ccpaApplies && void 0 !== e.ccpa && (!0 === e.ccpa ? this.acknowledgeCcpa() : (this.debug("CCPA Opt Out"),
                this.optOutCcpa())),
                this.options.usprApplies && void 0 !== e.uspr && (o = !0,
                this.acceptAllUSPurposeConsent(e.uspr)),
                void 0 !== e.purposes && (o = !0,
                this.setPurposesPreference(e.purposes)),
                void 0 !== e.consent && (o = !0,
                this.consent = this.getConsentObj(e.consent),
                this.storage.storeConsent()),
                (this.options.gdprApplies || this.options.lgpdApplies) && void 0 !== e.tcfv2) {
                    o = !0;
                    var r = {
                        tcfv2: e.tcfv2,
                        gac: e.gac
                    };
                    this.setTcfPreference(r, n).then((function() {
                        return a.resolve()
                    }
                    ))
                } else
                    a.resolve();
                a.then((function() {
                    i.updateGppApi(!1, !0, "processed"),
                    o && i.fireConsentCallbacks(t),
                    i.tracker.consentGiven(t),
                    i.ui.generateFloatingPreferencesButton()
                }
                ))
            }
        }, {
            key: "acceptAllUltimate",
            value: function(e) {
                this.options.isRejectionRecoveryDisabled() || this.acceptAll(e)
            }
        }, {
            key: "acceptAll",
            value: function(e) {
                this.setGeneralPreference({
                    consent: !0,
                    ccpa: !0,
                    uspr: {
                        sd5: !0,
                        sd8: !0,
                        sd9: !0
                    },
                    purposes: {
                        all: !0
                    },
                    tcfv2: {
                        all: !0
                    },
                    gac: {
                        all: !0
                    }
                }, e, !0)
            }
        }, {
            key: "rejectAll",
            value: function(e) {
                var t = {
                    consent: !1,
                    ccpa: !1,
                    uspr: {
                        sd5: !1,
                        sd8: !1,
                        sd9: !1
                    },
                    tcfv2: {
                        all: !1
                    },
                    gac: {
                        all: !1
                    }
                };
                this.options.fadpApplies || (t.purposes = {
                    all: !1
                }),
                this.setGeneralPreference(t, e, !0)
            }
        }]),
        e
    }();
    function aa() {
        var e = "https://cdn.iubenda.com/cs/tcf/versions/tcf-v2-0.22.2.js";
        return "Symbol"in window && "assign"in Object && "values"in Object && "entries"in Object && "isInteger"in Number || (e = e.replace(/(.*)\/tcf-v2(.*?\.js)/, "$1/tcf-v2-polyfilled$2")),
        e
    }
    function ra(e) {
        var t = Le()
          , n = document.createElement("script");
        return n.src = e,
        n.setAttribute("charset", "UTF-8"),
        n.onload = function() {
            t.resolve()
        }
        ,
        document.head.appendChild(n),
        t
    }
    function sa() {
        var e = Le().resolve();
        return function() {
            try {
                return "consentState"in JSON.parse(window.name)
            } catch (e) {
                return !1
            }
        }() && (e = ra("https://cdn.iubenda.com/cookie_solution/versions/cs_amp-1.4.1.js")),
        e
    }
    new (function() {
        function e(t) {
            i(this, e),
            this.csPremergedConfig = function(e) {
                return C(Je, e)
            }(t),
            this.csConfiguration = t,
            _iub.csLoaded || (_iub.csLoaded = !0,
            this.init())
        }
        return a(e, [{
            key: "init",
            value: function() {
                var e = this;
                sa().then((function() {
                    _iub.jlib = _iub.jlib || {},
                    _iub.jlib.promise = _iub.jlib.promise || {
                        create: Le
                    };
                    try {
                        !function() {
                            if (!tt.en) {
                                var e = Object.keys(tt)[0]
                                  , t = tt[e];
                                _iub.csConfiguration && _iub.csConfiguration.i18n && _iub.csConfiguration.i18n.en && (t = x({}, t)),
                                tt.en = t
                            }
                        }(),
                        e.getRemoteConfig().then((function() {
                            e.cmpLibraryPromise = e.getCmpLibraryPromise(),
                            e.createInstance(),
                            e.preLoadCS()
                        }
                        ))
                    } catch (t) {
                        e.handleStartupFailure(t)
                    }
                }
                ))
            }
        }, {
            key: "addAnalyticsPurposeIfNeeded",
            value: function(e) {
                var t = -1 === e.indexOf(4)
                  , n = -1 !== e.indexOf(6)
                  , i = -1 !== e.indexOf(7);
                t && (n || i) && e.push(4)
            }
        }, {
            key: "getRemoteConfig",
            value: function() {
                var e = this
                  , t = Le();
                return et(_iub.csConfiguration, (function(n) {
                    e.handleStartupFailure(n),
                    t.resolve()
                }
                ), (function() {
                    _iub.csPurposes = _iub.csPurposes || [],
                    e.addAnalyticsPurposeIfNeeded(_iub.csPurposes),
                    t.resolve()
                }
                )),
                t
            }
        }, {
            key: "getCmpLibraryPromise",
            value: function() {
                var e = Le().resolve();
                this.isConfigurationTcfEnabled() && (e = ra(aa()));
                return e
            }
        }, {
            key: "isConfigurationTcfEnabled",
            value: function() {
                return !(!this.csPremergedConfig.enableTcf && !this.csPremergedConfig.enableCMP)
            }
        }, {
            key: "loadDom",
            value: function() {
                var e = Le();
                return _iub.cs.options.startOnDomReady ? Ie((function() {
                    return e.resolve()
                }
                )) : ye((function() {
                    return e.resolve()
                }
                ), !1),
                e
            }
        }, {
            key: "preLoadCS",
            value: function() {
                var e = this;
                this.cmpLibraryPromise.then((function() {
                    e.loadDom().then((function() {
                        try {
                            _iub.cs.preLoad()
                        } catch (t) {
                            e.handleStartupFailure(t)
                        }
                    }
                    ))
                }
                ))
            }
        }, {
            key: "createInstance",
            value: function() {
                _iub.cs = new oa(this.csConfiguration,this.cmpLibraryPromise),
                G.install(_iub.cs, _iub.cs.options, Ke)
            }
        }, {
            key: "handleStartupFailure",
            value: function(e) {
                var t, n, i;
                null === (t = this.csPremergedConfig) || void 0 === t || null === (n = t.callback) || void 0 === n || null === (i = n.onStartupFailed) || void 0 === i || i.call(n, e.message || e),
                Ke.error("Cookie Solution startup failed", e)
            }
        }]),
        e
    }())(_iub.csConfiguration)
}();
