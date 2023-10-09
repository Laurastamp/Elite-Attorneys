!function e(t, r, n) {
    function i(o, a) {
        if (!r[o]) {
            if (!t[o]) {
                var u = "function" == typeof require && require;
                if (!a && u)
                    return u(o, !0);
                if (s)
                    return s(o, !0);
                var c = new Error("Cannot find module '" + o + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            var l = r[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, (function(e) {
                return i(t[o][1][e] || e)
            }
            ), l, l.exports, e, t, r, n)
        }
        return r[o].exports
    }
    for (var s = "function" == typeof require && require, o = 0; o < n.length; o++)
        i(n[o]);
    return i
}({
    1: [function(e, t, r) {
        (function(t) {
            (function() {
                "use strict";
                var r = o(e("loglevel"))
                  , n = e("@metamask/post-message-stream")
                  , i = e("@metamask/providers/dist/initializeInpageProvider")
                  , s = o(e("../../shared/modules/provider-injection"));
                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                let a;
                (()=>{
                    a = t.define;
                    try {
                        t.define = void 0
                    } catch (e) {
                        console.warn("MetaMask - global.define could not be deleted.")
                    }
                }
                )();
                if ((()=>{
                    try {
                        t.define = a
                    } catch (e) {
                        console.warn("MetaMask - global.define could not be overwritten.")
                    }
                }
                )(),
                r.default.setDefaultLevel("warn"),
                (0,
                s.default)()) {
                    const e = new n.WindowPostMessageStream({
                        name: "metamask-inpage",
                        target: "metamask-contentscript"
                    });
                    (0,
                    i.initializeProvider)({
                        connectionStream: e,
                        logger: r.default,
                        shouldShimWeb3: !0
                    })
                }
            }
            ).call(this)
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "../../shared/modules/provider-injection": 152,
        "@metamask/post-message-stream": 8,
        "@metamask/providers/dist/initializeInpageProvider": 28,
        loglevel: 85
    }],
    2: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.ObjectMultiplex = void 0;
        const i = e("readable-stream")
          , s = n(e("end-of-stream"))
          , o = n(e("once"))
          , a = e("./Substream")
          , u = Symbol("IGNORE_SUBSTREAM");
        class c extends i.Duplex {
            constructor(e={}) {
                super(Object.assign(Object.assign({}, e), {
                    objectMode: !0
                })),
                this._substreams = {}
            }
            createStream(e) {
                if (this.destroyed)
                    throw new Error(`ObjectMultiplex - parent stream for name "${e}" already destroyed`);
                if (this._readableState.ended || this._writableState.ended)
                    throw new Error(`ObjectMultiplex - parent stream for name "${e}" already ended`);
                if (!e)
                    throw new Error("ObjectMultiplex - name must not be empty");
                if (this._substreams[e])
                    throw new Error(`ObjectMultiplex - Substream for name "${e}" already exists`);
                const t = new a.Substream({
                    parent: this,
                    name: e
                });
                return this._substreams[e] = t,
                function(e, t) {
                    const r = o.default(t);
                    s.default(e, {
                        readable: !1
                    }, r),
                    s.default(e, {
                        writable: !1
                    }, r)
                }(this, (e=>t.destroy(e || void 0))),
                t
            }
            ignoreStream(e) {
                if (!e)
                    throw new Error("ObjectMultiplex - name must not be empty");
                if (this._substreams[e])
                    throw new Error(`ObjectMultiplex - Substream for name "${e}" already exists`);
                this._substreams[e] = u
            }
            _read() {}
            _write(e, t, r) {
                const {name: n, data: i} = e;
                if (!n)
                    return console.warn(`ObjectMultiplex - malformed chunk without name "${e}"`),
                    r();
                const s = this._substreams[n];
                return s ? (s !== u && s.push(i),
                r()) : (console.warn(`ObjectMultiplex - orphaned data for stream "${n}"`),
                r())
            }
        }
        r.ObjectMultiplex = c
    }
    , {
        "./Substream": 3,
        "end-of-stream": 63,
        once: 87,
        "readable-stream": 101
    }],
    3: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.Substream = void 0;
        const n = e("readable-stream");
        class i extends n.Duplex {
            constructor({parent: e, name: t}) {
                super({
                    objectMode: !0
                }),
                this._parent = e,
                this._name = t
            }
            _read() {}
            _write(e, t, r) {
                this._parent.push({
                    name: this._name,
                    data: e
                }),
                r()
            }
        }
        r.Substream = i
    }
    , {
        "readable-stream": 101
    }],
    4: [function(e, t, r) {
        "use strict";
        const n = e("./ObjectMultiplex");
        t.exports = n.ObjectMultiplex
    }
    , {
        "./ObjectMultiplex": 2
    }],
    5: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.BasePostMessageStream = void 0;
        const n = e("readable-stream")
          , i = ()=>{}
          , s = "ACK";
        class o extends n.Duplex {
            constructor() {
                super({
                    objectMode: !0
                }),
                this._init = !1,
                this._haveSyn = !1
            }
            _handshake() {
                this._write("SYN", null, i),
                this.cork()
            }
            _onData(e) {
                if (this._init)
                    try {
                        this.push(e)
                    } catch (e) {
                        this.emit("error", e)
                    }
                else
                    "SYN" === e ? (this._haveSyn = !0,
                    this._write(s, null, i)) : e === s && (this._init = !0,
                    this._haveSyn || this._write(s, null, i),
                    this.uncork())
            }
            _read() {}
            _write(e, t, r) {
                this._postMessage(e),
                r()
            }
        }
        r.BasePostMessageStream = o
    }
    , {
        "readable-stream": 21
    }],
    6: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.WebWorkerParentPostMessageStream = void 0;
        const n = e("../BasePostMessageStream")
          , i = e("../utils");
        class s extends n.BasePostMessageStream {
            constructor({worker: e}) {
                super(),
                this._target = i.DEDICATED_WORKER_NAME,
                this._worker = e,
                this._worker.onmessage = this._onMessage.bind(this),
                this._handshake()
            }
            _postMessage(e) {
                this._worker.postMessage({
                    target: this._target,
                    data: e
                })
            }
            _onMessage(e) {
                const t = e.data;
                (0,
                i.isValidStreamMessage)(t) && this._onData(t.data)
            }
            _destroy() {
                this._worker.onmessage = null,
                this._worker = null
            }
        }
        r.WebWorkerParentPostMessageStream = s
    }
    , {
        "../BasePostMessageStream": 5,
        "../utils": 10
    }],
    7: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.WebWorkerPostMessageStream = void 0;
        const n = e("../BasePostMessageStream")
          , i = e("../utils");
        class s extends n.BasePostMessageStream {
            constructor() {
                if ("undefined" == typeof self || "undefined" == typeof WorkerGlobalScope)
                    throw new Error("WorkerGlobalScope not found. This class should only be instantiated in a WebWorker.");
                super(),
                this._name = i.DEDICATED_WORKER_NAME,
                self.addEventListener("message", this._onMessage.bind(this)),
                this._handshake()
            }
            _postMessage(e) {
                self.postMessage({
                    data: e
                })
            }
            _onMessage(e) {
                const t = e.data;
                (0,
                i.isValidStreamMessage)(t) && t.target === this._name && this._onData(t.data)
            }
            _destroy() {}
        }
        r.WebWorkerPostMessageStream = s
    }
    , {
        "../BasePostMessageStream": 5,
        "../utils": 10
    }],
    8: [function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r),
            Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, n) {
            void 0 === n && (n = r),
            e[n] = t[r]
        }
        )
          , i = this && this.__exportStar || function(e, t) {
            for (var r in e)
                "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        i(e("./window/WindowPostMessageStream"), r),
        i(e("./WebWorker/WebWorkerPostMessageStream"), r),
        i(e("./WebWorker/WebWorkerParentPostMessageStream"), r),
        i(e("./runtime/BrowserRuntimePostMessageStream"), r),
        i(e("./BasePostMessageStream"), r)
    }
    , {
        "./BasePostMessageStream": 5,
        "./WebWorker/WebWorkerParentPostMessageStream": 6,
        "./WebWorker/WebWorkerPostMessageStream": 7,
        "./runtime/BrowserRuntimePostMessageStream": 9,
        "./window/WindowPostMessageStream": 11
    }],
    9: [function(e, t, r) {
        "use strict";
        var n, i, s = this && this.__classPrivateFieldSet || function(e, t, r, n, i) {
            if ("m" === n)
                throw new TypeError("Private method is not writable");
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
            r
        }
        , o = this && this.__classPrivateFieldGet || function(e, t, r, n) {
            if ("a" === r && !n)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.BrowserRuntimePostMessageStream = void 0;
        const a = e("../BasePostMessageStream")
          , u = e("../utils");
        class c extends a.BasePostMessageStream {
            constructor({name: e, target: t}) {
                super(),
                n.set(this, void 0),
                i.set(this, void 0),
                s(this, n, e, "f"),
                s(this, i, t, "f"),
                this._onMessage = this._onMessage.bind(this),
                this._getRuntime().onMessage.addListener(this._onMessage),
                this._handshake()
            }
            _postMessage(e) {
                this._getRuntime().sendMessage({
                    target: o(this, i, "f"),
                    data: e
                })
            }
            _onMessage(e) {
                (0,
                u.isValidStreamMessage)(e) && e.target === o(this, n, "f") && this._onData(e.data)
            }
            _getRuntime() {
                var e, t;
                if ("chrome"in globalThis && "function" == typeof (null === (e = null === chrome || void 0 === chrome ? void 0 : chrome.runtime) || void 0 === e ? void 0 : e.sendMessage))
                    return chrome.runtime;
                if ("browser"in globalThis && "function" == typeof (null === (t = null === browser || void 0 === browser ? void 0 : browser.runtime) || void 0 === t ? void 0 : t.sendMessage))
                    return browser.runtime;
                throw new Error("browser.runtime.sendMessage is not a function. This class should only be instantiated in a web extension.")
            }
            _destroy() {
                this._getRuntime().onMessage.removeListener(this._onMessage)
            }
        }
        r.BrowserRuntimePostMessageStream = c,
        n = new WeakMap,
        i = new WeakMap
    }
    , {
        "../BasePostMessageStream": 5,
        "../utils": 10
    }],
    10: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.isValidStreamMessage = r.DEDICATED_WORKER_NAME = void 0;
        const n = e("@metamask/utils");
        r.DEDICATED_WORKER_NAME = "dedicatedWorker",
        r.isValidStreamMessage = function(e) {
            return (0,
            n.isObject)(e) && Boolean(e.data) && ("number" == typeof e.data || "object" == typeof e.data || "string" == typeof e.data)
        }
    }
    , {
        "@metamask/utils": 45
    }],
    11: [function(e, t, r) {
        "use strict";
        var n, i;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.WindowPostMessageStream = void 0;
        const s = e("@metamask/utils")
          , o = e("../BasePostMessageStream")
          , a = e("../utils")
          , u = null === (n = Object.getOwnPropertyDescriptor(MessageEvent.prototype, "source")) || void 0 === n ? void 0 : n.get;
        (0,
        s.assert)(u, "MessageEvent.prototype.source getter is not defined.");
        const c = null === (i = Object.getOwnPropertyDescriptor(MessageEvent.prototype, "origin")) || void 0 === i ? void 0 : i.get;
        (0,
        s.assert)(c, "MessageEvent.prototype.origin getter is not defined.");
        class l extends o.BasePostMessageStream {
            constructor({name: e, target: t, targetOrigin: r=location.origin, targetWindow: n=window}) {
                if (super(),
                "undefined" == typeof window || "function" != typeof window.postMessage)
                    throw new Error("window.postMessage is not a function. This class should only be instantiated in a Window.");
                this._name = e,
                this._target = t,
                this._targetOrigin = r,
                this._targetWindow = n,
                this._onMessage = this._onMessage.bind(this),
                window.addEventListener("message", this._onMessage, !1),
                this._handshake()
            }
            _postMessage(e) {
                this._targetWindow.postMessage({
                    target: this._target,
                    data: e
                }, this._targetOrigin)
            }
            _onMessage(e) {
                const t = e.data;
                "*" !== this._targetOrigin && c.call(e) !== this._targetOrigin || u.call(e) !== this._targetWindow || !(0,
                a.isValidStreamMessage)(t) || t.target !== this._name || this._onData(t.data)
            }
            _destroy() {
                window.removeEventListener("message", this._onMessage, !1)
            }
        }
        r.WindowPostMessageStream = l
    }
    , {
        "../BasePostMessageStream": 5,
        "../utils": 10,
        "@metamask/utils": 45
    }],
    12: [function(e, t, r) {
        (function(e) {
            (function() {
                "use strict";
                !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = function(t, r, n, i) {
                    if ("function" != typeof t)
                        throw new TypeError('"callback" argument must be a function');
                    var s, o, a = arguments.length;
                    switch (a) {
                    case 0:
                    case 1:
                        return e.nextTick(t);
                    case 2:
                        return e.nextTick((function() {
                            t.call(null, r)
                        }
                        ));
                    case 3:
                        return e.nextTick((function() {
                            t.call(null, r, n)
                        }
                        ));
                    case 4:
                        return e.nextTick((function() {
                            t.call(null, r, n, i)
                        }
                        ));
                    default:
                        for (s = new Array(a - 1),
                        o = 0; o < s.length; )
                            s[o++] = arguments[o];
                        return e.nextTick((function() {
                            t.apply(null, s)
                        }
                        ))
                    }
                }
                : t.exports = e.nextTick
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        _process: 89
    }],
    13: [function(e, t, r) {
        "use strict";
        var n = e("process-nextick-args")
          , i = Object.keys || function(e) {
            var t = [];
            for (var r in e)
                t.push(r);
            return t
        }
        ;
        t.exports = f;
        var s = e("core-util-is");
        s.inherits = e("inherits");
        var o = e("./_stream_readable")
          , a = e("./_stream_writable");
        s.inherits(f, o);
        for (var u = i(a.prototype), c = 0; c < u.length; c++) {
            var l = u[c];
            f.prototype[l] || (f.prototype[l] = a.prototype[l])
        }
        function f(e) {
            if (!(this instanceof f))
                return new f(e);
            o.call(this, e),
            a.call(this, e),
            e && !1 === e.readable && (this.readable = !1),
            e && !1 === e.writable && (this.writable = !1),
            this.allowHalfOpen = !0,
            e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
            this.once("end", h)
        }
        function h() {
            this.allowHalfOpen || this._writableState.ended || n(d, this)
        }
        function d(e) {
            e.end()
        }
        Object.defineProperty(f.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
            },
            set: function(e) {
                void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e,
                this._writableState.destroyed = e)
            }
        }),
        f.prototype._destroy = function(e, t) {
            this.push(null),
            this.end(),
            n(t, e)
        }
    }
    , {
        "./_stream_readable": 15,
        "./_stream_writable": 17,
        "core-util-is": 59,
        inherits: 71,
        "process-nextick-args": 12
    }],
    14: [function(e, t, r) {
        "use strict";
        t.exports = s;
        var n = e("./_stream_transform")
          , i = e("core-util-is");
        function s(e) {
            if (!(this instanceof s))
                return new s(e);
            n.call(this, e)
        }
        i.inherits = e("inherits"),
        i.inherits(s, n),
        s.prototype._transform = function(e, t, r) {
            r(null, e)
        }
    }
    , {
        "./_stream_transform": 16,
        "core-util-is": 59,
        inherits: 71
    }],
    15: [function(e, t, r) {
        (function(r, n) {
            (function() {
                "use strict";
                var i = e("process-nextick-args");
                t.exports = b;
                var s, o = e("isarray");
                b.ReadableState = v;
                e("events").EventEmitter;
                var a = function(e, t) {
                    return e.listeners(t).length
                }
                  , u = e("./internal/streams/stream")
                  , c = e("safe-buffer").Buffer
                  , l = n.Uint8Array || function() {}
                ;
                var f = e("core-util-is");
                f.inherits = e("inherits");
                var h = e("util")
                  , d = void 0;
                d = h && h.debuglog ? h.debuglog("stream") : function() {}
                ;
                var p, g = e("./internal/streams/BufferList"), m = e("./internal/streams/destroy");
                f.inherits(b, u);
                var y = ["error", "close", "destroy", "pause", "resume"];
                function v(t, r) {
                    s = s || e("./_stream_duplex"),
                    t = t || {},
                    this.objectMode = !!t.objectMode,
                    r instanceof s && (this.objectMode = this.objectMode || !!t.readableObjectMode);
                    var n = t.highWaterMark
                      , i = this.objectMode ? 16 : 16384;
                    this.highWaterMark = n || 0 === n ? n : i,
                    this.highWaterMark = Math.floor(this.highWaterMark),
                    this.buffer = new g,
                    this.length = 0,
                    this.pipes = null,
                    this.pipesCount = 0,
                    this.flowing = null,
                    this.ended = !1,
                    this.endEmitted = !1,
                    this.reading = !1,
                    this.sync = !0,
                    this.needReadable = !1,
                    this.emittedReadable = !1,
                    this.readableListening = !1,
                    this.resumeScheduled = !1,
                    this.destroyed = !1,
                    this.defaultEncoding = t.defaultEncoding || "utf8",
                    this.awaitDrain = 0,
                    this.readingMore = !1,
                    this.decoder = null,
                    this.encoding = null,
                    t.encoding && (p || (p = e("string_decoder/").StringDecoder),
                    this.decoder = new p(t.encoding),
                    this.encoding = t.encoding)
                }
                function b(t) {
                    if (s = s || e("./_stream_duplex"),
                    !(this instanceof b))
                        return new b(t);
                    this._readableState = new v(t,this),
                    this.readable = !0,
                    t && ("function" == typeof t.read && (this._read = t.read),
                    "function" == typeof t.destroy && (this._destroy = t.destroy)),
                    u.call(this)
                }
                function w(e, t, r, n, i) {
                    var s, o = e._readableState;
                    null === t ? (o.reading = !1,
                    function(e, t) {
                        if (t.ended)
                            return;
                        if (t.decoder) {
                            var r = t.decoder.end();
                            r && r.length && (t.buffer.push(r),
                            t.length += t.objectMode ? 1 : r.length)
                        }
                        t.ended = !0,
                        R(e)
                    }(e, o)) : (i || (s = function(e, t) {
                        var r;
                        n = t,
                        c.isBuffer(n) || n instanceof l || "string" == typeof t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk"));
                        var n;
                        return r
                    }(o, t)),
                    s ? e.emit("error", s) : o.objectMode || t && t.length > 0 ? ("string" == typeof t || o.objectMode || Object.getPrototypeOf(t) === c.prototype || (t = function(e) {
                        return c.from(e)
                    }(t)),
                    n ? o.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : _(e, o, t, !0) : o.ended ? e.emit("error", new Error("stream.push() after EOF")) : (o.reading = !1,
                    o.decoder && !r ? (t = o.decoder.write(t),
                    o.objectMode || 0 !== t.length ? _(e, o, t, !1) : x(e, o)) : _(e, o, t, !1))) : n || (o.reading = !1));
                    return function(e) {
                        return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
                    }(o)
                }
                function _(e, t, r, n) {
                    t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r),
                    e.read(0)) : (t.length += t.objectMode ? 1 : r.length,
                    n ? t.buffer.unshift(r) : t.buffer.push(r),
                    t.needReadable && R(e)),
                    x(e, t)
                }
                Object.defineProperty(b.prototype, "destroyed", {
                    get: function() {
                        return void 0 !== this._readableState && this._readableState.destroyed
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.destroyed = e)
                    }
                }),
                b.prototype.destroy = m.destroy,
                b.prototype._undestroy = m.undestroy,
                b.prototype._destroy = function(e, t) {
                    this.push(null),
                    t(e)
                }
                ,
                b.prototype.push = function(e, t) {
                    var r, n = this._readableState;
                    return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = c.from(e, t),
                    t = ""),
                    r = !0),
                    w(this, e, t, !1, r)
                }
                ,
                b.prototype.unshift = function(e) {
                    return w(this, e, null, !0, !1)
                }
                ,
                b.prototype.isPaused = function() {
                    return !1 === this._readableState.flowing
                }
                ,
                b.prototype.setEncoding = function(t) {
                    return p || (p = e("string_decoder/").StringDecoder),
                    this._readableState.decoder = new p(t),
                    this._readableState.encoding = t,
                    this
                }
                ;
                var E = 8388608;
                function S(e, t) {
                    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                        return e >= E ? e = E : (e--,
                        e |= e >>> 1,
                        e |= e >>> 2,
                        e |= e >>> 4,
                        e |= e >>> 8,
                        e |= e >>> 16,
                        e++),
                        e
                    }(e)),
                    e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
                    0))
                }
                function R(e) {
                    var t = e._readableState;
                    t.needReadable = !1,
                    t.emittedReadable || (d("emitReadable", t.flowing),
                    t.emittedReadable = !0,
                    t.sync ? i(M, e) : M(e))
                }
                function M(e) {
                    d("emit readable"),
                    e.emit("readable"),
                    I(e)
                }
                function x(e, t) {
                    t.readingMore || (t.readingMore = !0,
                    i(C, e, t))
                }
                function C(e, t) {
                    for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (d("maybeReadMore read 0"),
                    e.read(0),
                    r !== t.length); )
                        r = t.length;
                    t.readingMore = !1
                }
                function k(e) {
                    d("readable nexttick read 0"),
                    e.read(0)
                }
                function O(e, t) {
                    t.reading || (d("resume read 0"),
                    e.read(0)),
                    t.resumeScheduled = !1,
                    t.awaitDrain = 0,
                    e.emit("resume"),
                    I(e),
                    t.flowing && !t.reading && e.read(0)
                }
                function I(e) {
                    var t = e._readableState;
                    for (d("flow", t.flowing); t.flowing && null !== e.read(); )
                        ;
                }
                function j(e, t) {
                    return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length),
                    t.buffer.clear()) : r = function(e, t, r) {
                        var n;
                        e < t.head.data.length ? (n = t.head.data.slice(0, e),
                        t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? function(e, t) {
                            var r = t.head
                              , n = 1
                              , i = r.data;
                            e -= i.length;
                            for (; r = r.next; ) {
                                var s = r.data
                                  , o = e > s.length ? s.length : e;
                                if (o === s.length ? i += s : i += s.slice(0, e),
                                0 === (e -= o)) {
                                    o === s.length ? (++n,
                                    r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r,
                                    r.data = s.slice(o));
                                    break
                                }
                                ++n
                            }
                            return t.length -= n,
                            i
                        }(e, t) : function(e, t) {
                            var r = c.allocUnsafe(e)
                              , n = t.head
                              , i = 1;
                            n.data.copy(r),
                            e -= n.data.length;
                            for (; n = n.next; ) {
                                var s = n.data
                                  , o = e > s.length ? s.length : e;
                                if (s.copy(r, r.length - e, 0, o),
                                0 === (e -= o)) {
                                    o === s.length ? (++i,
                                    n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n,
                                    n.data = s.slice(o));
                                    break
                                }
                                ++i
                            }
                            return t.length -= i,
                            r
                        }(e, t);
                        return n
                    }(e, t.buffer, t.decoder),
                    r);
                    var r
                }
                function A(e) {
                    var t = e._readableState;
                    if (t.length > 0)
                        throw new Error('"endReadable()" called on non-empty stream');
                    t.endEmitted || (t.ended = !0,
                    i(T, t, e))
                }
                function T(e, t) {
                    e.endEmitted || 0 !== e.length || (e.endEmitted = !0,
                    t.readable = !1,
                    t.emit("end"))
                }
                function P(e, t) {
                    for (var r = 0, n = e.length; r < n; r++)
                        if (e[r] === t)
                            return r;
                    return -1
                }
                b.prototype.read = function(e) {
                    d("read", e),
                    e = parseInt(e, 10);
                    var t = this._readableState
                      , r = e;
                    if (0 !== e && (t.emittedReadable = !1),
                    0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
                        return d("read: emitReadable", t.length, t.ended),
                        0 === t.length && t.ended ? A(this) : R(this),
                        null;
                    if (0 === (e = S(e, t)) && t.ended)
                        return 0 === t.length && A(this),
                        null;
                    var n, i = t.needReadable;
                    return d("need readable", i),
                    (0 === t.length || t.length - e < t.highWaterMark) && d("length less than watermark", i = !0),
                    t.ended || t.reading ? d("reading or ended", i = !1) : i && (d("do read"),
                    t.reading = !0,
                    t.sync = !0,
                    0 === t.length && (t.needReadable = !0),
                    this._read(t.highWaterMark),
                    t.sync = !1,
                    t.reading || (e = S(r, t))),
                    null === (n = e > 0 ? j(e, t) : null) ? (t.needReadable = !0,
                    e = 0) : t.length -= e,
                    0 === t.length && (t.ended || (t.needReadable = !0),
                    r !== e && t.ended && A(this)),
                    null !== n && this.emit("data", n),
                    n
                }
                ,
                b.prototype._read = function(e) {
                    this.emit("error", new Error("_read() is not implemented"))
                }
                ,
                b.prototype.pipe = function(e, t) {
                    var n = this
                      , s = this._readableState;
                    switch (s.pipesCount) {
                    case 0:
                        s.pipes = e;
                        break;
                    case 1:
                        s.pipes = [s.pipes, e];
                        break;
                    default:
                        s.pipes.push(e)
                    }
                    s.pipesCount += 1,
                    d("pipe count=%d opts=%j", s.pipesCount, t);
                    var u = (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? l : b;
                    function c(t, r) {
                        d("onunpipe"),
                        t === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0,
                        d("cleanup"),
                        e.removeListener("close", y),
                        e.removeListener("finish", v),
                        e.removeListener("drain", f),
                        e.removeListener("error", m),
                        e.removeListener("unpipe", c),
                        n.removeListener("end", l),
                        n.removeListener("end", b),
                        n.removeListener("data", g),
                        h = !0,
                        !s.awaitDrain || e._writableState && !e._writableState.needDrain || f())
                    }
                    function l() {
                        d("onend"),
                        e.end()
                    }
                    s.endEmitted ? i(u) : n.once("end", u),
                    e.on("unpipe", c);
                    var f = function(e) {
                        return function() {
                            var t = e._readableState;
                            d("pipeOnDrain", t.awaitDrain),
                            t.awaitDrain && t.awaitDrain--,
                            0 === t.awaitDrain && a(e, "data") && (t.flowing = !0,
                            I(e))
                        }
                    }(n);
                    e.on("drain", f);
                    var h = !1;
                    var p = !1;
                    function g(t) {
                        d("ondata"),
                        p = !1,
                        !1 !== e.write(t) || p || ((1 === s.pipesCount && s.pipes === e || s.pipesCount > 1 && -1 !== P(s.pipes, e)) && !h && (d("false write response, pause", n._readableState.awaitDrain),
                        n._readableState.awaitDrain++,
                        p = !0),
                        n.pause())
                    }
                    function m(t) {
                        d("onerror", t),
                        b(),
                        e.removeListener("error", m),
                        0 === a(e, "error") && e.emit("error", t)
                    }
                    function y() {
                        e.removeListener("finish", v),
                        b()
                    }
                    function v() {
                        d("onfinish"),
                        e.removeListener("close", y),
                        b()
                    }
                    function b() {
                        d("unpipe"),
                        n.unpipe(e)
                    }
                    return n.on("data", g),
                    function(e, t, r) {
                        if ("function" == typeof e.prependListener)
                            return e.prependListener(t, r);
                        e._events && e._events[t] ? o(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                    }(e, "error", m),
                    e.once("close", y),
                    e.once("finish", v),
                    e.emit("pipe", n),
                    s.flowing || (d("pipe resume"),
                    n.resume()),
                    e
                }
                ,
                b.prototype.unpipe = function(e) {
                    var t = this._readableState
                      , r = {
                        hasUnpiped: !1
                    };
                    if (0 === t.pipesCount)
                        return this;
                    if (1 === t.pipesCount)
                        return e && e !== t.pipes || (e || (e = t.pipes),
                        t.pipes = null,
                        t.pipesCount = 0,
                        t.flowing = !1,
                        e && e.emit("unpipe", this, r)),
                        this;
                    if (!e) {
                        var n = t.pipes
                          , i = t.pipesCount;
                        t.pipes = null,
                        t.pipesCount = 0,
                        t.flowing = !1;
                        for (var s = 0; s < i; s++)
                            n[s].emit("unpipe", this, r);
                        return this
                    }
                    var o = P(t.pipes, e);
                    return -1 === o || (t.pipes.splice(o, 1),
                    t.pipesCount -= 1,
                    1 === t.pipesCount && (t.pipes = t.pipes[0]),
                    e.emit("unpipe", this, r)),
                    this
                }
                ,
                b.prototype.on = function(e, t) {
                    var r = u.prototype.on.call(this, e, t);
                    if ("data" === e)
                        !1 !== this._readableState.flowing && this.resume();
                    else if ("readable" === e) {
                        var n = this._readableState;
                        n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0,
                        n.emittedReadable = !1,
                        n.reading ? n.length && R(this) : i(k, this))
                    }
                    return r
                }
                ,
                b.prototype.addListener = b.prototype.on,
                b.prototype.resume = function() {
                    var e = this._readableState;
                    return e.flowing || (d("resume"),
                    e.flowing = !0,
                    function(e, t) {
                        t.resumeScheduled || (t.resumeScheduled = !0,
                        i(O, e, t))
                    }(this, e)),
                    this
                }
                ,
                b.prototype.pause = function() {
                    return d("call pause flowing=%j", this._readableState.flowing),
                    !1 !== this._readableState.flowing && (d("pause"),
                    this._readableState.flowing = !1,
                    this.emit("pause")),
                    this
                }
                ,
                b.prototype.wrap = function(e) {
                    var t = this._readableState
                      , r = !1
                      , n = this;
                    for (var i in e.on("end", (function() {
                        if (d("wrapped end"),
                        t.decoder && !t.ended) {
                            var e = t.decoder.end();
                            e && e.length && n.push(e)
                        }
                        n.push(null)
                    }
                    )),
                    e.on("data", (function(i) {
                        (d("wrapped data"),
                        t.decoder && (i = t.decoder.write(i)),
                        t.objectMode && null == i) || (t.objectMode || i && i.length) && (n.push(i) || (r = !0,
                        e.pause()))
                    }
                    )),
                    e)
                        void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                            return function() {
                                return e[t].apply(e, arguments)
                            }
                        }(i));
                    for (var s = 0; s < y.length; s++)
                        e.on(y[s], n.emit.bind(n, y[s]));
                    return n._read = function(t) {
                        d("wrapped _read", t),
                        r && (r = !1,
                        e.resume())
                    }
                    ,
                    n
                }
                ,
                b._fromList = j
            }
            ).call(this)
        }
        ).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "./_stream_duplex": 13,
        "./internal/streams/BufferList": 18,
        "./internal/streams/destroy": 19,
        "./internal/streams/stream": 20,
        _process: 89,
        "core-util-is": 59,
        events: 58,
        inherits: 71,
        isarray: 74,
        "process-nextick-args": 12,
        "safe-buffer": 22,
        "string_decoder/": 23,
        util: 56
    }],
    16: [function(e, t, r) {
        "use strict";
        t.exports = o;
        var n = e("./_stream_duplex")
          , i = e("core-util-is");
        function s(e) {
            this.afterTransform = function(t, r) {
                return function(e, t, r) {
                    var n = e._transformState;
                    n.transforming = !1;
                    var i = n.writecb;
                    if (!i)
                        return e.emit("error", new Error("write callback called multiple times"));
                    n.writechunk = null,
                    n.writecb = null,
                    null != r && e.push(r);
                    i(t);
                    var s = e._readableState;
                    s.reading = !1,
                    (s.needReadable || s.length < s.highWaterMark) && e._read(s.highWaterMark)
                }(e, t, r)
            }
            ,
            this.needTransform = !1,
            this.transforming = !1,
            this.writecb = null,
            this.writechunk = null,
            this.writeencoding = null
        }
        function o(e) {
            if (!(this instanceof o))
                return new o(e);
            n.call(this, e),
            this._transformState = new s(this);
            var t = this;
            this._readableState.needReadable = !0,
            this._readableState.sync = !1,
            e && ("function" == typeof e.transform && (this._transform = e.transform),
            "function" == typeof e.flush && (this._flush = e.flush)),
            this.once("prefinish", (function() {
                "function" == typeof this._flush ? this._flush((function(e, r) {
                    a(t, e, r)
                }
                )) : a(t)
            }
            ))
        }
        function a(e, t, r) {
            if (t)
                return e.emit("error", t);
            null != r && e.push(r);
            var n = e._writableState
              , i = e._transformState;
            if (n.length)
                throw new Error("Calling transform done when ws.length != 0");
            if (i.transforming)
                throw new Error("Calling transform done when still transforming");
            return e.push(null)
        }
        i.inherits = e("inherits"),
        i.inherits(o, n),
        o.prototype.push = function(e, t) {
            return this._transformState.needTransform = !1,
            n.prototype.push.call(this, e, t)
        }
        ,
        o.prototype._transform = function(e, t, r) {
            throw new Error("_transform() is not implemented")
        }
        ,
        o.prototype._write = function(e, t, r) {
            var n = this._transformState;
            if (n.writecb = r,
            n.writechunk = e,
            n.writeencoding = t,
            !n.transforming) {
                var i = this._readableState;
                (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }
        ,
        o.prototype._read = function(e) {
            var t = this._transformState;
            null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0,
            this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
        }
        ,
        o.prototype._destroy = function(e, t) {
            var r = this;
            n.prototype._destroy.call(this, e, (function(e) {
                t(e),
                r.emit("close")
            }
            ))
        }
    }
    , {
        "./_stream_duplex": 13,
        "core-util-is": 59,
        inherits: 71
    }],
    17: [function(e, t, r) {
        (function(r, n, i) {
            (function() {
                "use strict";
                var s = e("process-nextick-args");
                function o(e) {
                    var t = this;
                    this.next = null,
                    this.entry = null,
                    this.finish = function() {
                        !function(e, t, r) {
                            var n = e.entry;
                            e.entry = null;
                            for (; n; ) {
                                var i = n.callback;
                                t.pendingcb--,
                                i(r),
                                n = n.next
                            }
                            t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
                        }(t, e)
                    }
                }
                t.exports = v;
                var a, u = !r.browser && ["v0.10", "v0.9."].indexOf(r.version.slice(0, 5)) > -1 ? i : s;
                v.WritableState = y;
                var c = e("core-util-is");
                c.inherits = e("inherits");
                var l = {
                    deprecate: e("util-deprecate")
                }
                  , f = e("./internal/streams/stream")
                  , h = e("safe-buffer").Buffer
                  , d = n.Uint8Array || function() {}
                ;
                var p, g = e("./internal/streams/destroy");
                function m() {}
                function y(t, r) {
                    a = a || e("./_stream_duplex"),
                    t = t || {},
                    this.objectMode = !!t.objectMode,
                    r instanceof a && (this.objectMode = this.objectMode || !!t.writableObjectMode);
                    var n = t.highWaterMark
                      , i = this.objectMode ? 16 : 16384;
                    this.highWaterMark = n || 0 === n ? n : i,
                    this.highWaterMark = Math.floor(this.highWaterMark),
                    this.finalCalled = !1,
                    this.needDrain = !1,
                    this.ending = !1,
                    this.ended = !1,
                    this.finished = !1,
                    this.destroyed = !1;
                    var c = !1 === t.decodeStrings;
                    this.decodeStrings = !c,
                    this.defaultEncoding = t.defaultEncoding || "utf8",
                    this.length = 0,
                    this.writing = !1,
                    this.corked = 0,
                    this.sync = !0,
                    this.bufferProcessing = !1,
                    this.onwrite = function(e) {
                        !function(e, t) {
                            var r = e._writableState
                              , n = r.sync
                              , i = r.writecb;
                            if (function(e) {
                                e.writing = !1,
                                e.writecb = null,
                                e.length -= e.writelen,
                                e.writelen = 0
                            }(r),
                            t)
                                !function(e, t, r, n, i) {
                                    --t.pendingcb,
                                    r ? (s(i, n),
                                    s(R, e, t),
                                    e._writableState.errorEmitted = !0,
                                    e.emit("error", n)) : (i(n),
                                    e._writableState.errorEmitted = !0,
                                    e.emit("error", n),
                                    R(e, t))
                                }(e, r, n, t, i);
                            else {
                                var o = E(r);
                                o || r.corked || r.bufferProcessing || !r.bufferedRequest || _(e, r),
                                n ? u(w, e, r, o, i) : w(e, r, o, i)
                            }
                        }(r, e)
                    }
                    ,
                    this.writecb = null,
                    this.writelen = 0,
                    this.bufferedRequest = null,
                    this.lastBufferedRequest = null,
                    this.pendingcb = 0,
                    this.prefinished = !1,
                    this.errorEmitted = !1,
                    this.bufferedRequestCount = 0,
                    this.corkedRequestsFree = new o(this)
                }
                function v(t) {
                    if (a = a || e("./_stream_duplex"),
                    !(p.call(v, this) || this instanceof a))
                        return new v(t);
                    this._writableState = new y(t,this),
                    this.writable = !0,
                    t && ("function" == typeof t.write && (this._write = t.write),
                    "function" == typeof t.writev && (this._writev = t.writev),
                    "function" == typeof t.destroy && (this._destroy = t.destroy),
                    "function" == typeof t.final && (this._final = t.final)),
                    f.call(this)
                }
                function b(e, t, r, n, i, s, o) {
                    t.writelen = n,
                    t.writecb = o,
                    t.writing = !0,
                    t.sync = !0,
                    r ? e._writev(i, t.onwrite) : e._write(i, s, t.onwrite),
                    t.sync = !1
                }
                function w(e, t, r, n) {
                    r || function(e, t) {
                        0 === t.length && t.needDrain && (t.needDrain = !1,
                        e.emit("drain"))
                    }(e, t),
                    t.pendingcb--,
                    n(),
                    R(e, t)
                }
                function _(e, t) {
                    t.bufferProcessing = !0;
                    var r = t.bufferedRequest;
                    if (e._writev && r && r.next) {
                        var n = t.bufferedRequestCount
                          , i = new Array(n)
                          , s = t.corkedRequestsFree;
                        s.entry = r;
                        for (var a = 0, u = !0; r; )
                            i[a] = r,
                            r.isBuf || (u = !1),
                            r = r.next,
                            a += 1;
                        i.allBuffers = u,
                        b(e, t, !0, t.length, i, "", s.finish),
                        t.pendingcb++,
                        t.lastBufferedRequest = null,
                        s.next ? (t.corkedRequestsFree = s.next,
                        s.next = null) : t.corkedRequestsFree = new o(t)
                    } else {
                        for (; r; ) {
                            var c = r.chunk
                              , l = r.encoding
                              , f = r.callback;
                            if (b(e, t, !1, t.objectMode ? 1 : c.length, c, l, f),
                            r = r.next,
                            t.writing)
                                break
                        }
                        null === r && (t.lastBufferedRequest = null)
                    }
                    t.bufferedRequestCount = 0,
                    t.bufferedRequest = r,
                    t.bufferProcessing = !1
                }
                function E(e) {
                    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                }
                function S(e, t) {
                    e._final((function(r) {
                        t.pendingcb--,
                        r && e.emit("error", r),
                        t.prefinished = !0,
                        e.emit("prefinish"),
                        R(e, t)
                    }
                    ))
                }
                function R(e, t) {
                    var r = E(t);
                    return r && (!function(e, t) {
                        t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++,
                        t.finalCalled = !0,
                        s(S, e, t)) : (t.prefinished = !0,
                        e.emit("prefinish")))
                    }(e, t),
                    0 === t.pendingcb && (t.finished = !0,
                    e.emit("finish"))),
                    r
                }
                c.inherits(v, f),
                y.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e; )
                        t.push(e),
                        e = e.next;
                    return t
                }
                ,
                function() {
                    try {
                        Object.defineProperty(y.prototype, "buffer", {
                            get: l.deprecate((function() {
                                return this.getBuffer()
                            }
                            ), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(),
                "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (p = Function.prototype[Symbol.hasInstance],
                Object.defineProperty(v, Symbol.hasInstance, {
                    value: function(e) {
                        return !!p.call(this, e) || e && e._writableState instanceof y
                    }
                })) : p = function(e) {
                    return e instanceof this
                }
                ,
                v.prototype.pipe = function() {
                    this.emit("error", new Error("Cannot pipe, not readable"))
                }
                ,
                v.prototype.write = function(e, t, r) {
                    var n, i = this._writableState, o = !1, a = (n = e,
                    (h.isBuffer(n) || n instanceof d) && !i.objectMode);
                    return a && !h.isBuffer(e) && (e = function(e) {
                        return h.from(e)
                    }(e)),
                    "function" == typeof t && (r = t,
                    t = null),
                    a ? t = "buffer" : t || (t = i.defaultEncoding),
                    "function" != typeof r && (r = m),
                    i.ended ? function(e, t) {
                        var r = new Error("write after end");
                        e.emit("error", r),
                        s(t, r)
                    }(this, r) : (a || function(e, t, r, n) {
                        var i = !0
                          , o = !1;
                        return null === r ? o = new TypeError("May not write null values to stream") : "string" == typeof r || void 0 === r || t.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")),
                        o && (e.emit("error", o),
                        s(n, o),
                        i = !1),
                        i
                    }(this, i, e, r)) && (i.pendingcb++,
                    o = function(e, t, r, n, i, s) {
                        if (!r) {
                            var o = function(e, t, r) {
                                e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = h.from(t, r));
                                return t
                            }(t, n, i);
                            n !== o && (r = !0,
                            i = "buffer",
                            n = o)
                        }
                        var a = t.objectMode ? 1 : n.length;
                        t.length += a;
                        var u = t.length < t.highWaterMark;
                        u || (t.needDrain = !0);
                        if (t.writing || t.corked) {
                            var c = t.lastBufferedRequest;
                            t.lastBufferedRequest = {
                                chunk: n,
                                encoding: i,
                                isBuf: r,
                                callback: s,
                                next: null
                            },
                            c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                            t.bufferedRequestCount += 1
                        } else
                            b(e, t, !1, a, n, i, s);
                        return u
                    }(this, i, a, e, t, r)),
                    o
                }
                ,
                v.prototype.cork = function() {
                    this._writableState.corked++
                }
                ,
                v.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--,
                    e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || _(this, e))
                }
                ,
                v.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()),
                    !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                        throw new TypeError("Unknown encoding: " + e);
                    return this._writableState.defaultEncoding = e,
                    this
                }
                ,
                v.prototype._write = function(e, t, r) {
                    r(new Error("_write() is not implemented"))
                }
                ,
                v.prototype._writev = null,
                v.prototype.end = function(e, t, r) {
                    var n = this._writableState;
                    "function" == typeof e ? (r = e,
                    e = null,
                    t = null) : "function" == typeof t && (r = t,
                    t = null),
                    null != e && this.write(e, t),
                    n.corked && (n.corked = 1,
                    this.uncork()),
                    n.ending || n.finished || function(e, t, r) {
                        t.ending = !0,
                        R(e, t),
                        r && (t.finished ? s(r) : e.once("finish", r));
                        t.ended = !0,
                        e.writable = !1
                    }(this, n, r)
                }
                ,
                Object.defineProperty(v.prototype, "destroyed", {
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }),
                v.prototype.destroy = g.destroy,
                v.prototype._undestroy = g.undestroy,
                v.prototype._destroy = function(e, t) {
                    this.end(),
                    t(e)
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("timers").setImmediate)
    }
    , {
        "./_stream_duplex": 13,
        "./internal/streams/destroy": 19,
        "./internal/streams/stream": 20,
        _process: 89,
        "core-util-is": 59,
        inherits: 71,
        "process-nextick-args": 12,
        "safe-buffer": 22,
        timers: 147,
        "util-deprecate": 148
    }],
    18: [function(e, t, r) {
        "use strict";
        var n = e("safe-buffer").Buffer;
        t.exports = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.head = null,
                this.tail = null,
                this.length = 0
            }
            return e.prototype.push = function(e) {
                var t = {
                    data: e,
                    next: null
                };
                this.length > 0 ? this.tail.next = t : this.head = t,
                this.tail = t,
                ++this.length
            }
            ,
            e.prototype.unshift = function(e) {
                var t = {
                    data: e,
                    next: this.head
                };
                0 === this.length && (this.tail = t),
                this.head = t,
                ++this.length
            }
            ,
            e.prototype.shift = function() {
                if (0 !== this.length) {
                    var e = this.head.data;
                    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                    --this.length,
                    e
                }
            }
            ,
            e.prototype.clear = function() {
                this.head = this.tail = null,
                this.length = 0
            }
            ,
            e.prototype.join = function(e) {
                if (0 === this.length)
                    return "";
                for (var t = this.head, r = "" + t.data; t = t.next; )
                    r += e + t.data;
                return r
            }
            ,
            e.prototype.concat = function(e) {
                if (0 === this.length)
                    return n.alloc(0);
                if (1 === this.length)
                    return this.head.data;
                for (var t, r, i, s = n.allocUnsafe(e >>> 0), o = this.head, a = 0; o; )
                    t = o.data,
                    r = s,
                    i = a,
                    t.copy(r, i),
                    a += o.data.length,
                    o = o.next;
                return s
            }
            ,
            e
        }()
    }
    , {
        "safe-buffer": 22
    }],
    19: [function(e, t, r) {
        "use strict";
        var n = e("process-nextick-args");
        function i(e, t) {
            e.emit("error", t)
        }
        t.exports = {
            destroy: function(e, t) {
                var r = this
                  , s = this._readableState && this._readableState.destroyed
                  , o = this._writableState && this._writableState.destroyed;
                s || o ? t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || n(i, this, e) : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(e || null, (function(e) {
                    !t && e ? (n(i, r, e),
                    r._writableState && (r._writableState.errorEmitted = !0)) : t && t(e)
                }
                )))
            },
            undestroy: function() {
                this._readableState && (this._readableState.destroyed = !1,
                this._readableState.reading = !1,
                this._readableState.ended = !1,
                this._readableState.endEmitted = !1),
                this._writableState && (this._writableState.destroyed = !1,
                this._writableState.ended = !1,
                this._writableState.ending = !1,
                this._writableState.finished = !1,
                this._writableState.errorEmitted = !1)
            }
        }
    }
    , {
        "process-nextick-args": 12
    }],
    20: [function(e, t, r) {
        t.exports = e("events").EventEmitter
    }
    , {
        events: 58
    }],
    21: [function(e, t, r) {
        (r = t.exports = e("./lib/_stream_readable.js")).Stream = r,
        r.Readable = r,
        r.Writable = e("./lib/_stream_writable.js"),
        r.Duplex = e("./lib/_stream_duplex.js"),
        r.Transform = e("./lib/_stream_transform.js"),
        r.PassThrough = e("./lib/_stream_passthrough.js")
    }
    , {
        "./lib/_stream_duplex.js": 13,
        "./lib/_stream_passthrough.js": 14,
        "./lib/_stream_readable.js": 15,
        "./lib/_stream_transform.js": 16,
        "./lib/_stream_writable.js": 17
    }],
    22: [function(e, t, r) {
        var n = e("buffer")
          , i = n.Buffer;
        function s(e, t) {
            for (var r in e)
                t[r] = e[r]
        }
        function o(e, t, r) {
            return i(e, t, r)
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (s(n, r),
        r.Buffer = o),
        s(i, o),
        o.from = function(e, t, r) {
            if ("number" == typeof e)
                throw new TypeError("Argument must not be a number");
            return i(e, t, r)
        }
        ,
        o.alloc = function(e, t, r) {
            if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
            var n = i(e);
            return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0),
            n
        }
        ,
        o.allocUnsafe = function(e) {
            if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
            return i(e)
        }
        ,
        o.allocUnsafeSlow = function(e) {
            if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
            return n.SlowBuffer(e)
        }
    }
    , {
        buffer: 57
    }],
    23: [function(e, t, r) {
        "use strict";
        var n = e("safe-buffer").Buffer
          , i = n.isEncoding || function(e) {
            switch ((e = "" + e) && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
                return !0;
            default:
                return !1
            }
        }
        ;
        function s(e) {
            var t;
            switch (this.encoding = function(e) {
                var t = function(e) {
                    if (!e)
                        return "utf8";
                    for (var t; ; )
                        switch (e) {
                        case "utf8":
                        case "utf-8":
                            return "utf8";
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return "utf16le";
                        case "latin1":
                        case "binary":
                            return "latin1";
                        case "base64":
                        case "ascii":
                        case "hex":
                            return e;
                        default:
                            if (t)
                                return;
                            e = ("" + e).toLowerCase(),
                            t = !0
                        }
                }(e);
                if ("string" != typeof t && (n.isEncoding === i || !i(e)))
                    throw new Error("Unknown encoding: " + e);
                return t || e
            }(e),
            this.encoding) {
            case "utf16le":
                this.text = u,
                this.end = c,
                t = 4;
                break;
            case "utf8":
                this.fillLast = a,
                t = 4;
                break;
            case "base64":
                this.text = l,
                this.end = f,
                t = 3;
                break;
            default:
                return this.write = h,
                void (this.end = d)
            }
            this.lastNeed = 0,
            this.lastTotal = 0,
            this.lastChar = n.allocUnsafe(t)
        }
        function o(e) {
            return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : -1
        }
        function a(e) {
            var t = this.lastTotal - this.lastNeed
              , r = function(e, t, r) {
                if (128 != (192 & t[0]))
                    return e.lastNeed = 0,
                    "�".repeat(r);
                if (e.lastNeed > 1 && t.length > 1) {
                    if (128 != (192 & t[1]))
                        return e.lastNeed = 1,
                        "�".repeat(r + 1);
                    if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                        return e.lastNeed = 2,
                        "�".repeat(r + 2)
                }
            }(this, e, t);
            return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length),
            void (this.lastNeed -= e.length))
        }
        function u(e, t) {
            if ((e.length - t) % 2 == 0) {
                var r = e.toString("utf16le", t);
                if (r) {
                    var n = r.charCodeAt(r.length - 1);
                    if (n >= 55296 && n <= 56319)
                        return this.lastNeed = 2,
                        this.lastTotal = 4,
                        this.lastChar[0] = e[e.length - 2],
                        this.lastChar[1] = e[e.length - 1],
                        r.slice(0, -1)
                }
                return r
            }
            return this.lastNeed = 1,
            this.lastTotal = 2,
            this.lastChar[0] = e[e.length - 1],
            e.toString("utf16le", t, e.length - 1)
        }
        function c(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
                var r = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, r)
            }
            return t
        }
        function l(e, t) {
            var r = (e.length - t) % 3;
            return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r,
            this.lastTotal = 3,
            1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2],
            this.lastChar[1] = e[e.length - 1]),
            e.toString("base64", t, e.length - r))
        }
        function f(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
        }
        function h(e) {
            return e.toString(this.encoding)
        }
        function d(e) {
            return e && e.length ? this.write(e) : ""
        }
        r.StringDecoder = s,
        s.prototype.write = function(e) {
            if (0 === e.length)
                return "";
            var t, r;
            if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e)))
                    return "";
                r = this.lastNeed,
                this.lastNeed = 0
            } else
                r = 0;
            return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
        }
        ,
        s.prototype.end = function(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "�".repeat(this.lastTotal - this.lastNeed) : t
        }
        ,
        s.prototype.text = function(e, t) {
            var r = function(e, t, r) {
                var n = t.length - 1;
                if (n < r)
                    return 0;
                var i = o(t[n]);
                if (i >= 0)
                    return i > 0 && (e.lastNeed = i - 1),
                    i;
                if (--n < r)
                    return 0;
                if (i = o(t[n]),
                i >= 0)
                    return i > 0 && (e.lastNeed = i - 2),
                    i;
                if (--n < r)
                    return 0;
                if (i = o(t[n]),
                i >= 0)
                    return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3),
                    i;
                return 0
            }(this, e, t);
            if (!this.lastNeed)
                return e.toString("utf8", t);
            this.lastTotal = r;
            var n = e.length - (r - this.lastNeed);
            return e.copy(this.lastChar, 0, n),
            e.toString("utf8", t, n)
        }
        ,
        s.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length)
                return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
            this.lastNeed -= e.length
        }
    }
    , {
        "safe-buffer": 22
    }],
    24: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.BaseProvider = void 0;
        const i = n(e("@metamask/safe-event-emitter"))
          , s = e("eth-rpc-errors")
          , o = n(e("fast-deep-equal"))
          , a = e("json-rpc-engine")
          , u = n(e("./messages"))
          , c = e("./utils");
        class l extends i.default {
            constructor({logger: e=console, maxEventListeners: t=100, rpcMiddleware: r=[]}={}) {
                super(),
                this._log = e,
                this.setMaxListeners(t),
                this._state = {
                    ...l._defaultState
                },
                this.selectedAddress = null,
                this.chainId = null,
                this._handleAccountsChanged = this._handleAccountsChanged.bind(this),
                this._handleConnect = this._handleConnect.bind(this),
                this._handleChainChanged = this._handleChainChanged.bind(this),
                this._handleDisconnect = this._handleDisconnect.bind(this),
                this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this),
                this._rpcRequest = this._rpcRequest.bind(this),
                this.request = this.request.bind(this);
                const n = new a.JsonRpcEngine;
                r.forEach((e=>n.push(e))),
                this._rpcEngine = n
            }
            isConnected() {
                return this._state.isConnected
            }
            async request(e) {
                if (!e || "object" != typeof e || Array.isArray(e))
                    throw s.ethErrors.rpc.invalidRequest({
                        message: u.default.errors.invalidRequestArgs(),
                        data: e
                    });
                const {method: t, params: r} = e;
                if ("string" != typeof t || 0 === t.length)
                    throw s.ethErrors.rpc.invalidRequest({
                        message: u.default.errors.invalidRequestMethod(),
                        data: e
                    });
                if (void 0 !== r && !Array.isArray(r) && ("object" != typeof r || null === r))
                    throw s.ethErrors.rpc.invalidRequest({
                        message: u.default.errors.invalidRequestParams(),
                        data: e
                    });
                return new Promise(((e,n)=>{
                    this._rpcRequest({
                        method: t,
                        params: r
                    }, (0,
                    c.getRpcPromiseCallback)(e, n))
                }
                ))
            }
            _initializeState(e) {
                if (this._state.initialized)
                    throw new Error("Provider already initialized.");
                if (e) {
                    const {accounts: t, chainId: r, isUnlocked: n, networkVersion: i} = e;
                    this._handleConnect(r),
                    this._handleChainChanged({
                        chainId: r,
                        networkVersion: i
                    }),
                    this._handleUnlockStateChanged({
                        accounts: t,
                        isUnlocked: n
                    }),
                    this._handleAccountsChanged(t)
                }
                this._state.initialized = !0,
                this.emit("_initialized")
            }
            _rpcRequest(e, t) {
                let r = t;
                return Array.isArray(e) || (e.jsonrpc || (e.jsonrpc = "2.0"),
                "eth_accounts" !== e.method && "eth_requestAccounts" !== e.method || (r = (r,n)=>{
                    this._handleAccountsChanged(n.result ?? [], "eth_accounts" === e.method),
                    t(r, n)
                }
                )),
                this._rpcEngine.handle(e, r)
            }
            _handleConnect(e) {
                this._state.isConnected || (this._state.isConnected = !0,
                this.emit("connect", {
                    chainId: e
                }),
                this._log.debug(u.default.info.connected(e)))
            }
            _handleDisconnect(e, t) {
                if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !e) {
                    let r;
                    this._state.isConnected = !1,
                    e ? (r = new s.EthereumRpcError(1013,t ?? u.default.errors.disconnected()),
                    this._log.debug(r)) : (r = new s.EthereumRpcError(1011,t ?? u.default.errors.permanentlyDisconnected()),
                    this._log.error(r),
                    this.chainId = null,
                    this._state.accounts = null,
                    this.selectedAddress = null,
                    this._state.isUnlocked = !1,
                    this._state.isPermanentlyDisconnected = !0),
                    this.emit("disconnect", r)
                }
            }
            _handleChainChanged({chainId: e}={}) {
                (0,
                c.isValidChainId)(e) ? (this._handleConnect(e),
                e !== this.chainId && (this.chainId = e,
                this._state.initialized && this.emit("chainChanged", this.chainId))) : this._log.error(u.default.errors.invalidNetworkParams(), {
                    chainId: e
                })
            }
            _handleAccountsChanged(e, t=!1) {
                let r = e;
                Array.isArray(e) || (this._log.error("MetaMask: Received invalid accounts parameter. Please report this bug.", e),
                r = []);
                for (const t of e)
                    if ("string" != typeof t) {
                        this._log.error("MetaMask: Received non-string account. Please report this bug.", e),
                        r = [];
                        break
                    }
                if (!(0,
                o.default)(this._state.accounts, r) && (t && null !== this._state.accounts && this._log.error("MetaMask: 'eth_accounts' unexpectedly updated accounts. Please report this bug.", r),
                this._state.accounts = r,
                this.selectedAddress !== r[0] && (this.selectedAddress = r[0] || null),
                this._state.initialized)) {
                    const e = [...r];
                    this.emit("accountsChanged", e)
                }
            }
            _handleUnlockStateChanged({accounts: e, isUnlocked: t}={}) {
                "boolean" == typeof t ? t !== this._state.isUnlocked && (this._state.isUnlocked = t,
                this._handleAccountsChanged(e ?? [])) : this._log.error("MetaMask: Received invalid isUnlocked parameter. Please report this bug.")
            }
        }
        r.BaseProvider = l,
        l._defaultState = {
            accounts: null,
            isConnected: !1,
            isUnlocked: !1,
            initialized: !1,
            isPermanentlyDisconnected: !1
        }
    }
    , {
        "./messages": 29,
        "./utils": 33,
        "@metamask/safe-event-emitter": 34,
        "eth-rpc-errors": 67,
        "fast-deep-equal": 35,
        "json-rpc-engine": 80
    }],
    25: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.MetaMaskInpageProvider = r.MetaMaskInpageProviderStreamName = void 0;
        const i = e("eth-rpc-errors")
          , s = n(e("./messages"))
          , o = e("./siteMetadata")
          , a = e("./StreamProvider")
          , u = e("./utils");
        r.MetaMaskInpageProviderStreamName = "metamask-provider";
        class c extends a.AbstractStreamProvider {
            constructor(e, {jsonRpcStreamName: t=r.MetaMaskInpageProviderStreamName, logger: n=console, maxEventListeners: i=100, shouldSendMetadata: s}={}) {
                if (super(e, {
                    jsonRpcStreamName: t,
                    logger: n,
                    maxEventListeners: i,
                    rpcMiddleware: (0,
                    u.getDefaultExternalMiddleware)(n)
                }),
                this._sentWarnings = {
                    enable: !1,
                    experimentalMethods: !1,
                    send: !1,
                    events: {
                        close: !1,
                        data: !1,
                        networkChanged: !1,
                        notification: !1
                    }
                },
                this._initializeStateAsync(),
                this.networkVersion = null,
                this.isMetaMask = !0,
                this._sendSync = this._sendSync.bind(this),
                this.enable = this.enable.bind(this),
                this.send = this.send.bind(this),
                this.sendAsync = this.sendAsync.bind(this),
                this._warnOfDeprecation = this._warnOfDeprecation.bind(this),
                this._metamask = this._getExperimentalApi(),
                this._jsonRpcConnection.events.on("notification", (e=>{
                    const {method: t} = e;
                    u.EMITTED_NOTIFICATIONS.includes(t) && (this.emit("data", e),
                    this.emit("notification", e.params.result))
                }
                )),
                s)
                    if ("complete" === document.readyState)
                        (0,
                        o.sendSiteMetadata)(this._rpcEngine, this._log);
                    else {
                        const e = ()=>{
                            (0,
                            o.sendSiteMetadata)(this._rpcEngine, this._log),
                            window.removeEventListener("DOMContentLoaded", e)
                        }
                        ;
                        window.addEventListener("DOMContentLoaded", e)
                    }
            }
            sendAsync(e, t) {
                this._rpcRequest(e, t)
            }
            addListener(e, t) {
                return this._warnOfDeprecation(e),
                super.addListener(e, t)
            }
            on(e, t) {
                return this._warnOfDeprecation(e),
                super.on(e, t)
            }
            once(e, t) {
                return this._warnOfDeprecation(e),
                super.once(e, t)
            }
            prependListener(e, t) {
                return this._warnOfDeprecation(e),
                super.prependListener(e, t)
            }
            prependOnceListener(e, t) {
                return this._warnOfDeprecation(e),
                super.prependOnceListener(e, t)
            }
            _handleDisconnect(e, t) {
                super._handleDisconnect(e, t),
                this.networkVersion && !e && (this.networkVersion = null)
            }
            _warnOfDeprecation(e) {
                !1 === this._sentWarnings?.events[e] && (this._log.warn(s.default.warnings.events[e]),
                this._sentWarnings.events[e] = !0)
            }
            async enable() {
                return this._sentWarnings.enable || (this._log.warn(s.default.warnings.enableDeprecation),
                this._sentWarnings.enable = !0),
                new Promise(((e,t)=>{
                    try {
                        this._rpcRequest({
                            method: "eth_requestAccounts",
                            params: []
                        }, (0,
                        u.getRpcPromiseCallback)(e, t))
                    } catch (e) {
                        t(e)
                    }
                }
                ))
            }
            send(e, t) {
                return this._sentWarnings.send || (this._log.warn(s.default.warnings.sendDeprecation),
                this._sentWarnings.send = !0),
                "string" != typeof e || t && !Array.isArray(t) ? e && "object" == typeof e && "function" == typeof t ? this._rpcRequest(e, t) : this._sendSync(e) : new Promise(((r,n)=>{
                    try {
                        this._rpcRequest({
                            method: e,
                            params: t
                        }, (0,
                        u.getRpcPromiseCallback)(r, n, !1))
                    } catch (e) {
                        n(e)
                    }
                }
                ))
            }
            _sendSync(e) {
                let t;
                switch (e.method) {
                case "eth_accounts":
                    t = this.selectedAddress ? [this.selectedAddress] : [];
                    break;
                case "eth_coinbase":
                    t = this.selectedAddress ?? null;
                    break;
                case "eth_uninstallFilter":
                    this._rpcRequest(e, u.NOOP),
                    t = !0;
                    break;
                case "net_version":
                    t = this.networkVersion ?? null;
                    break;
                default:
                    throw new Error(s.default.errors.unsupportedSync(e.method))
                }
                return {
                    id: e.id,
                    jsonrpc: e.jsonrpc,
                    result: t
                }
            }
            _getExperimentalApi() {
                return new Proxy({
                    isUnlocked: async()=>(this._state.initialized || await new Promise((e=>{
                        this.on("_initialized", (()=>e()))
                    }
                    )),
                    this._state.isUnlocked),
                    requestBatch: async e=>{
                        if (!Array.isArray(e))
                            throw i.ethErrors.rpc.invalidRequest({
                                message: "Batch requests must be made with an array of request objects.",
                                data: e
                            });
                        return new Promise(((t,r)=>{
                            this._rpcRequest(e, (0,
                            u.getRpcPromiseCallback)(t, r))
                        }
                        ))
                    }
                },{
                    get: (e,t,...r)=>(this._sentWarnings.experimentalMethods || (this._log.warn(s.default.warnings.experimentalMethods),
                    this._sentWarnings.experimentalMethods = !0),
                    Reflect.get(e, t, ...r))
                })
            }
            _handleChainChanged({chainId: e, networkVersion: t}={}) {
                super._handleChainChanged({
                    chainId: e,
                    networkVersion: t
                }),
                this._state.isConnected && t !== this.networkVersion && (this.networkVersion = t,
                this._state.initialized && this.emit("networkChanged", this.networkVersion))
            }
        }
        r.MetaMaskInpageProvider = c
    }
    , {
        "./StreamProvider": 26,
        "./messages": 29,
        "./siteMetadata": 32,
        "./utils": 33,
        "eth-rpc-errors": 67
    }],
    26: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.StreamProvider = r.AbstractStreamProvider = void 0;
        const i = n(e("@metamask/object-multiplex"))
          , s = e("is-stream")
          , o = e("json-rpc-middleware-stream")
          , a = n(e("pump"))
          , u = e("./BaseProvider")
          , c = n(e("./messages"))
          , l = e("./utils");
        class f extends u.BaseProvider {
            constructor(e, {jsonRpcStreamName: t, logger: r=console, maxEventListeners: n=100, rpcMiddleware: u=[]}) {
                if (super({
                    logger: r,
                    maxEventListeners: n,
                    rpcMiddleware: u
                }),
                !(0,
                s.duplex)(e))
                    throw new Error(c.default.errors.invalidDuplexStream());
                this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this);
                const f = new i.default;
                (0,
                a.default)(e, f, e, this._handleStreamDisconnect.bind(this, "MetaMask")),
                this._jsonRpcConnection = (0,
                o.createStreamMiddleware)({
                    retryOnMessage: "METAMASK_EXTENSION_CONNECT_CAN_RETRY"
                }),
                (0,
                a.default)(this._jsonRpcConnection.stream, f.createStream(t), this._jsonRpcConnection.stream, this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider")),
                this._rpcEngine.push(this._jsonRpcConnection.middleware),
                this._jsonRpcConnection.events.on("notification", (t=>{
                    const {method: r, params: n} = t;
                    "metamask_accountsChanged" === r ? this._handleAccountsChanged(n) : "metamask_unlockStateChanged" === r ? this._handleUnlockStateChanged(n) : "metamask_chainChanged" === r ? this._handleChainChanged(n) : l.EMITTED_NOTIFICATIONS.includes(r) ? this.emit("message", {
                        type: r,
                        data: n
                    }) : "METAMASK_STREAM_FAILURE" === r && e.destroy(new Error(c.default.errors.permanentlyDisconnected()))
                }
                ))
            }
            async _initializeStateAsync() {
                let e;
                try {
                    e = await this.request({
                        method: "metamask_getProviderState"
                    })
                } catch (e) {
                    this._log.error("MetaMask: Failed to get initial state. Please report this bug.", e)
                }
                this._initializeState(e)
            }
            _handleStreamDisconnect(e, t) {
                let r = `MetaMask: Lost connection to "${e}".`;
                t?.stack && (r += `\n ${t.stack}`),
                this._log.warn(r),
                this.listenerCount("error") > 0 && this.emit("error", r),
                this._handleDisconnect(!1, t ? t.message : void 0)
            }
            _handleChainChanged({chainId: e, networkVersion: t}={}) {
                (0,
                l.isValidChainId)(e) && (0,
                l.isValidNetworkVersion)(t) ? "loading" === t ? this._handleDisconnect(!0) : super._handleChainChanged({
                    chainId: e
                }) : this._log.error(c.default.errors.invalidNetworkParams(), {
                    chainId: e,
                    networkVersion: t
                })
            }
        }
        r.AbstractStreamProvider = f;
        r.StreamProvider = class extends f {
            async initialize() {
                return this._initializeStateAsync()
            }
        }
    }
    , {
        "./BaseProvider": 24,
        "./messages": 29,
        "./utils": 33,
        "@metamask/object-multiplex": 4,
        "is-stream": 73,
        "json-rpc-middleware-stream": 84,
        pump: 90
    }],
    27: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.ERC20 = r.ERC1155 = r.ERC721 = void 0,
        r.ERC721 = "ERC721",
        r.ERC1155 = "ERC1155",
        r.ERC20 = "ERC20"
    }
    , {}],
    28: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.setGlobalProvider = r.initializeProvider = void 0;
        const n = e("./MetaMaskInpageProvider")
          , i = e("./shimWeb3");
        function s(e) {
            window.ethereum = e,
            window.dispatchEvent(new Event("ethereum#initialized"))
        }
        r.initializeProvider = function({connectionStream: e, jsonRpcStreamName: t, logger: r=console, maxEventListeners: o=100, shouldSendMetadata: a=!0, shouldSetOnWindow: u=!0, shouldShimWeb3: c=!1}) {
            const l = new n.MetaMaskInpageProvider(e,{
                jsonRpcStreamName: t,
                logger: r,
                maxEventListeners: o,
                shouldSendMetadata: a
            })
              , f = new Proxy(l,{
                deleteProperty: ()=>!0
            });
            return u && s(f),
            c && (0,
            i.shimWeb3)(f, r),
            f
        }
        ,
        r.setGlobalProvider = s
    }
    , {
        "./MetaMaskInpageProvider": 25,
        "./shimWeb3": 31
    }],
    29: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const n = {
            errors: {
                disconnected: ()=>"MetaMask: Disconnected from chain. Attempting to connect.",
                permanentlyDisconnected: ()=>"MetaMask: Disconnected from MetaMask background. Page reload required.",
                sendSiteMetadata: ()=>"MetaMask: Failed to send site metadata. This is an internal error, please report this bug.",
                unsupportedSync: e=>`MetaMask: The MetaMask Ethereum provider does not support synchronous methods like ${e} without a callback parameter.`,
                invalidDuplexStream: ()=>"Must provide a Node.js-style duplex stream.",
                invalidNetworkParams: ()=>"MetaMask: Received invalid network parameters. Please report this bug.",
                invalidRequestArgs: ()=>"Expected a single, non-array, object argument.",
                invalidRequestMethod: ()=>"'args.method' must be a non-empty string.",
                invalidRequestParams: ()=>"'args.params' must be an object or array if provided.",
                invalidLoggerObject: ()=>"'args.logger' must be an object if provided.",
                invalidLoggerMethod: e=>`'args.logger' must include required method '${e}'.`
            },
            info: {
                connected: e=>`MetaMask: Connected to chain with ID "${e}".`
            },
            warnings: {
                enableDeprecation: "MetaMask: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1102",
                sendDeprecation: "MetaMask: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193",
                events: {
                    close: "MetaMask: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#disconnect",
                    data: "MetaMask: The event 'data' is deprecated and will be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message",
                    networkChanged: "MetaMask: The event 'networkChanged' is deprecated and may be removed in the future. Use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#chainchanged",
                    notification: "MetaMask: The event 'notification' is deprecated and may be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message"
                },
                rpc: {
                    ethDecryptDeprecation: "MetaMask: The RPC method 'eth_decrypt' is deprecated and may be removed in the future.\nFor more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686",
                    ethGetEncryptionPublicKeyDeprecation: "MetaMask: The RPC method 'eth_getEncryptionPublicKey' is deprecated and may be removed in the future.\nFor more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686",
                    walletWatchAssetNFTExperimental: "MetaMask: The RPC method 'wallet_watchAsset' is experimental for ERC721/ERC1155 assets and may change in the future.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-1.md and https://github.com/MetaMask/metamask-improvement-proposals/blob/main/PROCESS-GUIDE.md#proposal-lifecycle"
                },
                experimentalMethods: "MetaMask: 'ethereum._metamask' exposes non-standard, experimental methods. They may be removed or changed without warning."
            }
        };
        r.default = n
    }
    , {}],
    30: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createRpcWarningMiddleware = void 0;
        const i = e("../constants")
          , s = n(e("../messages"));
        r.createRpcWarningMiddleware = function(e) {
            const t = {
                ethDecryptDeprecation: !1,
                ethGetEncryptionPublicKeyDeprecation: !1,
                walletWatchAssetNFTExperimental: !1
            };
            return (r,n,o)=>{
                t.ethDecryptDeprecation || "eth_decrypt" !== r.method ? t.ethGetEncryptionPublicKeyDeprecation || "eth_getEncryptionPublicKey" !== r.method ? !t.walletWatchAssetNFTExperimental && "wallet_watchAsset" === r.method && [i.ERC721, i.ERC1155].includes(r.params?.type || "") && (e.warn(s.default.warnings.rpc.walletWatchAssetNFTExperimental),
                t.walletWatchAssetNFTExperimental = !0) : (e.warn(s.default.warnings.rpc.ethGetEncryptionPublicKeyDeprecation),
                t.ethGetEncryptionPublicKeyDeprecation = !0) : (e.warn(s.default.warnings.rpc.ethDecryptDeprecation),
                t.ethDecryptDeprecation = !0),
                o()
            }
        }
    }
    , {
        "../constants": 27,
        "../messages": 29
    }],
    31: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.shimWeb3 = void 0,
        r.shimWeb3 = function(e, t=console) {
            let r = !1
              , n = !1;
            if (!window.web3) {
                const i = "__isMetaMaskShim__";
                let s = {
                    currentProvider: e
                };
                Object.defineProperty(s, i, {
                    value: !0,
                    enumerable: !0,
                    configurable: !1,
                    writable: !1
                }),
                s = new Proxy(s,{
                    get: (s,o,...a)=>("currentProvider" !== o || r ? "currentProvider" === o || o === i || n || (n = !0,
                    t.error("MetaMask no longer injects web3. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"),
                    e.request({
                        method: "metamask_logWeb3ShimUsage"
                    }).catch((e=>{
                        t.debug("MetaMask: Failed to log web3 shim usage.", e)
                    }
                    ))) : (r = !0,
                    t.warn("You are accessing the MetaMask window.web3.currentProvider shim. This property is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3")),
                    Reflect.get(s, o, ...a)),
                    set: (...e)=>(t.warn("You are accessing the MetaMask window.web3 shim. This object is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"),
                    Reflect.set(...e))
                }),
                Object.defineProperty(window, "web3", {
                    value: s,
                    enumerable: !1,
                    configurable: !0,
                    writable: !0
                })
            }
        }
    }
    , {}],
    32: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.sendSiteMetadata = void 0;
        const i = n(e("./messages"))
          , s = e("./utils");
        function o(e) {
            const {document: t} = e
              , r = t.querySelector('head > meta[property="og:site_name"]');
            if (r)
                return r.content;
            const n = t.querySelector('head > meta[name="title"]');
            return n ? n.content : t.title && t.title.length > 0 ? t.title : window.location.hostname
        }
        async function a(e) {
            const {document: t} = e
              , r = t.querySelectorAll('head > link[rel~="icon"]');
            for (const e of Array.from(r))
                if (e && await u(e.href))
                    return e.href;
            return null
        }
        async function u(e) {
            return new Promise(((t,r)=>{
                try {
                    const r = document.createElement("img");
                    r.onload = ()=>t(!0),
                    r.onerror = ()=>t(!1),
                    r.src = e
                } catch (e) {
                    r(e)
                }
            }
            ))
        }
        r.sendSiteMetadata = async function(e, t) {
            try {
                const t = await async function() {
                    return {
                        name: o(window),
                        icon: await a(window)
                    }
                }();
                e.handle({
                    jsonrpc: "2.0",
                    id: 1,
                    method: "metamask_sendDomainMetadata",
                    params: t
                }, s.NOOP)
            } catch (e) {
                t.error({
                    message: i.default.errors.sendSiteMetadata(),
                    originalError: e
                })
            }
        }
    }
    , {
        "./messages": 29,
        "./utils": 33
    }],
    33: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.NOOP = r.isValidNetworkVersion = r.isValidChainId = r.getRpcPromiseCallback = r.getDefaultExternalMiddleware = r.EMITTED_NOTIFICATIONS = void 0;
        const n = e("eth-rpc-errors")
          , i = e("json-rpc-engine")
          , s = e("./middleware/createRpcWarningMiddleware");
        r.EMITTED_NOTIFICATIONS = Object.freeze(["eth_subscription"]);
        r.getDefaultExternalMiddleware = (e=console)=>{
            return [(0,
            i.createIdRemapMiddleware)(), (t = e,
            (e,r,i)=>{
                "string" == typeof e.method && e.method || (r.error = n.ethErrors.rpc.invalidRequest({
                    message: "The request 'method' must be a non-empty string.",
                    data: e
                })),
                i((e=>{
                    const {error: n} = r;
                    return n ? (t.error(`MetaMask - RPC Error: ${n.message}`, n),
                    e()) : e()
                }
                ))
            }
            ), (0,
            s.createRpcWarningMiddleware)(e)];
            var t
        }
        ;
        r.getRpcPromiseCallback = (e,t,r=!0)=>(n,i)=>{
            n || i.error ? t(n || i.error) : !r || Array.isArray(i) ? e(i) : e(i.result)
        }
        ;
        r.isValidChainId = e=>Boolean(e) && "string" == typeof e && e.startsWith("0x");
        r.isValidNetworkVersion = e=>Boolean(e) && "string" == typeof e;
        r.NOOP = ()=>{}
    }
    , {
        "./middleware/createRpcWarningMiddleware": 30,
        "eth-rpc-errors": 67,
        "json-rpc-engine": 80
    }],
    34: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const n = e("events");
        function i(e, t, r) {
            try {
                Reflect.apply(e, t, r)
            } catch (e) {
                setTimeout((()=>{
                    throw e
                }
                ))
            }
        }
        class s extends n.EventEmitter {
            emit(e, ...t) {
                let r = "error" === e;
                const n = this._events;
                if (void 0 !== n)
                    r = r && void 0 === n.error;
                else if (!r)
                    return !1;
                if (r) {
                    let e;
                    if (t.length > 0 && ([e] = t),
                    e instanceof Error)
                        throw e;
                    const r = new Error("Unhandled error." + (e ? ` (${e.message})` : ""));
                    throw r.context = e,
                    r
                }
                const s = n[e];
                if (void 0 === s)
                    return !1;
                if ("function" == typeof s)
                    i(s, this, t);
                else {
                    const e = s.length
                      , r = function(e) {
                        const t = e.length
                          , r = new Array(t);
                        for (let n = 0; n < t; n += 1)
                            r[n] = e[n];
                        return r
                    }(s);
                    for (let n = 0; n < e; n += 1)
                        i(r[n], this, t)
                }
                return !0
            }
        }
        r.default = s
    }
    , {
        events: 58
    }],
    35: [function(e, t, r) {
        "use strict";
        var n = Array.isArray
          , i = Object.keys
          , s = Object.prototype.hasOwnProperty;
        t.exports = function e(t, r) {
            if (t === r)
                return !0;
            if (t && r && "object" == typeof t && "object" == typeof r) {
                var o, a, u, c = n(t), l = n(r);
                if (c && l) {
                    if ((a = t.length) != r.length)
                        return !1;
                    for (o = a; 0 != o--; )
                        if (!e(t[o], r[o]))
                            return !1;
                    return !0
                }
                if (c != l)
                    return !1;
                var f = t instanceof Date
                  , h = r instanceof Date;
                if (f != h)
                    return !1;
                if (f && h)
                    return t.getTime() == r.getTime();
                var d = t instanceof RegExp
                  , p = r instanceof RegExp;
                if (d != p)
                    return !1;
                if (d && p)
                    return t.toString() == r.toString();
                var g = i(t);
                if ((a = g.length) !== i(r).length)
                    return !1;
                for (o = a; 0 != o--; )
                    if (!s.call(r, g[o]))
                        return !1;
                for (o = a; 0 != o--; )
                    if (!e(t[u = g[o]], r[u]))
                        return !1;
                return !0
            }
            return t != t && r != r
        }
    }
    , {}],
    36: [function(e, t, r) {
        arguments[4][34][0].apply(r, arguments)
    }
    , {
        dup: 34,
        events: 58
    }],
    37: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.assertExhaustive = r.assertStruct = r.assert = r.AssertionError = void 0;
        const n = e("superstruct");
        function i(e, t) {
            return r = e,
            Boolean("string" == typeof (null === (i = null === (n = null == r ? void 0 : r.prototype) || void 0 === n ? void 0 : n.constructor) || void 0 === i ? void 0 : i.name)) ? new e({
                message: t
            }) : e({
                message: t
            });
            var r, n, i
        }
        class s extends Error {
            constructor(e) {
                super(e.message),
                this.code = "ERR_ASSERTION"
            }
        }
        r.AssertionError = s,
        r.assert = function(e, t="Assertion failed.", r=s) {
            if (!e) {
                if (t instanceof Error)
                    throw t;
                throw i(r, t)
            }
        }
        ,
        r.assertStruct = function(e, t, r="Assertion failed", o=s) {
            try {
                (0,
                n.assert)(e, t)
            } catch (e) {
                throw i(o, `${r}: ${function(e) {
                    const t = function(e) {
                        return "object" == typeof e && null !== e && "message"in e
                    }(e) ? e.message : String(e);
                    return t.endsWith(".") ? t.slice(0, -1) : t
                }(e)}.`)
            }
        }
        ,
        r.assertExhaustive = function(e) {
            throw new Error("Invalid branch reached. Should be detected during compilation.")
        }
    }
    , {
        superstruct: 146
    }],
    38: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.base64 = void 0;
        const n = e("superstruct")
          , i = e("./assert");
        r.base64 = (e,t={})=>{
            var r, s;
            const o = null !== (r = t.paddingRequired) && void 0 !== r && r
              , a = null !== (s = t.characterSet) && void 0 !== s ? s : "base64";
            let u, c;
            return "base64" === a ? u = String.raw`[A-Za-z0-9+\/]` : ((0,
            i.assert)("base64url" === a),
            u = String.raw`[-_A-Za-z0-9]`),
            c = o ? new RegExp(`^(?:${u}{4})*(?:${u}{3}=|${u}{2}==)?$`,"u") : new RegExp(`^(?:${u}{4})*(?:${u}{2,3}|${u}{3}=|${u}{2}==)?$`,"u"),
            (0,
            n.pattern)(e, c)
        }
    }
    , {
        "./assert": 37,
        superstruct: 146
    }],
    39: [function(e, t, r) {
        (function(t) {
            (function() {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }),
                r.createDataView = r.concatBytes = r.valueToBytes = r.stringToBytes = r.numberToBytes = r.signedBigIntToBytes = r.bigIntToBytes = r.hexToBytes = r.bytesToString = r.bytesToNumber = r.bytesToSignedBigInt = r.bytesToBigInt = r.bytesToHex = r.assertIsBytes = r.isBytes = void 0;
                const n = e("./assert")
                  , i = e("./hex")
                  , s = 48
                  , o = 58
                  , a = 87;
                const u = function() {
                    const e = [];
                    return ()=>{
                        if (0 === e.length)
                            for (let t = 0; t < 256; t++)
                                e.push(t.toString(16).padStart(2, "0"));
                        return e
                    }
                }();
                function c(e) {
                    return e instanceof Uint8Array
                }
                function l(e) {
                    (0,
                    n.assert)(c(e), "Value must be a Uint8Array.")
                }
                function f(e) {
                    if (l(e),
                    0 === e.length)
                        return "0x";
                    const t = u()
                      , r = new Array(e.length);
                    for (let n = 0; n < e.length; n++)
                        r[n] = t[e[n]];
                    return (0,
                    i.add0x)(r.join(""))
                }
                function h(e) {
                    l(e);
                    const t = f(e);
                    return BigInt(t)
                }
                function d(e) {
                    var t;
                    if ("0x" === (null === (t = null == e ? void 0 : e.toLowerCase) || void 0 === t ? void 0 : t.call(e)))
                        return new Uint8Array;
                    (0,
                    i.assertIsHexString)(e);
                    const r = (0,
                    i.remove0x)(e).toLowerCase()
                      , n = r.length % 2 == 0 ? r : `0 ${r}`
                      , u = new Uint8Array(n.length / 2);
                    for (let e = 0; e < u.length; e++) {
                        const t = n.charCodeAt(2 * e)
                          , r = n.charCodeAt(2 * e + 1)
                          , i = t - (t < o ? s : a)
                          , c = r - (r < o ? s : a);
                        u[e] = 16 * i + c
                    }
                    return u
                }
                function p(e) {
                    (0,
                    n.assert)("bigint" == typeof e, "Value must be a bigint."),
                    (0,
                    n.assert)(e >= BigInt(0), "Value must be a non-negative bigint.");
                    return d(e.toString(16))
                }
                function g(e) {
                    (0,
                    n.assert)("number" == typeof e, "Value must be a number."),
                    (0,
                    n.assert)(e >= 0, "Value must be a non-negative number."),
                    (0,
                    n.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToBytes` instead.");
                    return d(e.toString(16))
                }
                function m(e) {
                    return (0,
                    n.assert)("string" == typeof e, "Value must be a string."),
                    (new TextEncoder).encode(e)
                }
                function y(e) {
                    if ("bigint" == typeof e)
                        return p(e);
                    if ("number" == typeof e)
                        return g(e);
                    if ("string" == typeof e)
                        return e.startsWith("0x") ? d(e) : m(e);
                    if (c(e))
                        return e;
                    throw new TypeError(`Unsupported value type: "${typeof e}".`)
                }
                r.isBytes = c,
                r.assertIsBytes = l,
                r.bytesToHex = f,
                r.bytesToBigInt = h,
                r.bytesToSignedBigInt = function(e) {
                    l(e);
                    let t = BigInt(0);
                    for (const r of e)
                        t = (t << BigInt(8)) + BigInt(r);
                    return BigInt.asIntN(8 * e.length, t)
                }
                ,
                r.bytesToNumber = function(e) {
                    l(e);
                    const t = h(e);
                    return (0,
                    n.assert)(t <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."),
                    Number(t)
                }
                ,
                r.bytesToString = function(e) {
                    return l(e),
                    (new TextDecoder).decode(e)
                }
                ,
                r.hexToBytes = d,
                r.bigIntToBytes = p,
                r.signedBigIntToBytes = function(e, t) {
                    (0,
                    n.assert)("bigint" == typeof e, "Value must be a bigint."),
                    (0,
                    n.assert)("number" == typeof t, "Byte length must be a number."),
                    (0,
                    n.assert)(t > 0, "Byte length must be greater than 0."),
                    (0,
                    n.assert)(function(e, t) {
                        (0,
                        n.assert)(t > 0);
                        const r = e >> BigInt(31);
                        return !((~e & r) + (e & ~r) >> BigInt(8 * t - 1))
                    }(e, t), "Byte length is too small to represent the given value.");
                    let r = e;
                    const i = new Uint8Array(t);
                    for (let e = 0; e < i.length; e++)
                        i[e] = Number(BigInt.asUintN(8, r)),
                        r >>= BigInt(8);
                    return i.reverse()
                }
                ,
                r.numberToBytes = g,
                r.stringToBytes = m,
                r.valueToBytes = y,
                r.concatBytes = function(e) {
                    const t = new Array(e.length);
                    let r = 0;
                    for (let n = 0; n < e.length; n++) {
                        const i = y(e[n]);
                        t[n] = i,
                        r += i.length
                    }
                    const n = new Uint8Array(r);
                    for (let e = 0, r = 0; e < t.length; e++)
                        n.set(t[e], r),
                        r += t[e].length;
                    return n
                }
                ,
                r.createDataView = function(e) {
                    if (void 0 !== t && e instanceof t) {
                        const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                        return new DataView(t)
                    }
                    return new DataView(e.buffer,e.byteOffset,e.byteLength)
                }
            }
            ).call(this)
        }
        ).call(this, e("buffer").Buffer)
    }
    , {
        "./assert": 37,
        "./hex": 44,
        buffer: 57
    }],
    40: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.ChecksumStruct = void 0;
        const n = e("superstruct")
          , i = e("./base64");
        r.ChecksumStruct = (0,
        n.size)((0,
        i.base64)((0,
        n.string)(), {
            paddingRequired: !0
        }), 44, 44)
    }
    , {
        "./base64": 38,
        superstruct: 146
    }],
    41: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createHex = r.createBytes = r.createBigInt = r.createNumber = void 0;
        const n = e("superstruct")
          , i = e("./assert")
          , s = e("./bytes")
          , o = e("./hex")
          , a = (0,
        n.union)([(0,
        n.number)(), (0,
        n.bigint)(), (0,
        n.string)(), o.StrictHexStruct])
          , u = (0,
        n.coerce)((0,
        n.number)(), a, Number)
          , c = (0,
        n.coerce)((0,
        n.bigint)(), a, BigInt)
          , l = ((0,
        n.union)([o.StrictHexStruct, (0,
        n.instance)(Uint8Array)]),
        (0,
        n.coerce)((0,
        n.instance)(Uint8Array), (0,
        n.union)([o.StrictHexStruct]), s.hexToBytes))
          , f = (0,
        n.coerce)(o.StrictHexStruct, (0,
        n.instance)(Uint8Array), s.bytesToHex);
        r.createNumber = function(e) {
            try {
                const t = (0,
                n.create)(e, u);
                return (0,
                i.assert)(Number.isFinite(t), `Expected a number-like value, got "${e}".`),
                t
            } catch (t) {
                if (t instanceof n.StructError)
                    throw new Error(`Expected a number-like value, got "${e}".`);
                throw t
            }
        }
        ,
        r.createBigInt = function(e) {
            try {
                return (0,
                n.create)(e, c)
            } catch (e) {
                if (e instanceof n.StructError)
                    throw new Error(`Expected a number-like value, got "${String(e.value)}".`);
                throw e
            }
        }
        ,
        r.createBytes = function(e) {
            if ("string" == typeof e && "0x" === e.toLowerCase())
                return new Uint8Array;
            try {
                return (0,
                n.create)(e, l)
            } catch (e) {
                if (e instanceof n.StructError)
                    throw new Error(`Expected a bytes-like value, got "${String(e.value)}".`);
                throw e
            }
        }
        ,
        r.createHex = function(e) {
            if (e instanceof Uint8Array && 0 === e.length || "string" == typeof e && "0x" === e.toLowerCase())
                return "0x";
            try {
                return (0,
                n.create)(e, f)
            } catch (e) {
                if (e instanceof n.StructError)
                    throw new Error(`Expected a bytes-like value, got "${String(e.value)}".`);
                throw e
            }
        }
    }
    , {
        "./assert": 37,
        "./bytes": 39,
        "./hex": 44,
        superstruct: 146
    }],
    42: [function(e, t, r) {
        "use strict";
        var n, i, s = this && this.__classPrivateFieldSet || function(e, t, r, n, i) {
            if ("m" === n)
                throw new TypeError("Private method is not writable");
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
            r
        }
        , o = this && this.__classPrivateFieldGet || function(e, t, r, n) {
            if ("a" === r && !n)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.FrozenSet = r.FrozenMap = void 0;
        class a {
            constructor(e) {
                n.set(this, void 0),
                s(this, n, new Map(e), "f"),
                Object.freeze(this)
            }
            get size() {
                return o(this, n, "f").size
            }
            [(n = new WeakMap,
            Symbol.iterator)]() {
                return o(this, n, "f")[Symbol.iterator]()
            }
            entries() {
                return o(this, n, "f").entries()
            }
            forEach(e, t) {
                return o(this, n, "f").forEach(((r,n,i)=>e.call(t, r, n, this)))
            }
            get(e) {
                return o(this, n, "f").get(e)
            }
            has(e) {
                return o(this, n, "f").has(e)
            }
            keys() {
                return o(this, n, "f").keys()
            }
            values() {
                return o(this, n, "f").values()
            }
            toString() {
                return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map((([e,t])=>`${String(e)} => ${String(t)}`)).join(", ")} ` : ""}}`
            }
        }
        r.FrozenMap = a;
        class u {
            constructor(e) {
                i.set(this, void 0),
                s(this, i, new Set(e), "f"),
                Object.freeze(this)
            }
            get size() {
                return o(this, i, "f").size
            }
            [(i = new WeakMap,
            Symbol.iterator)]() {
                return o(this, i, "f")[Symbol.iterator]()
            }
            entries() {
                return o(this, i, "f").entries()
            }
            forEach(e, t) {
                return o(this, i, "f").forEach(((r,n,i)=>e.call(t, r, n, this)))
            }
            has(e) {
                return o(this, i, "f").has(e)
            }
            keys() {
                return o(this, i, "f").keys()
            }
            values() {
                return o(this, i, "f").values()
            }
            toString() {
                return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map((e=>String(e))).join(", ")} ` : ""}}`
            }
        }
        r.FrozenSet = u,
        Object.freeze(a),
        Object.freeze(a.prototype),
        Object.freeze(u),
        Object.freeze(u.prototype)
    }
    , {}],
    43: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }
    , {}],
    44: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.remove0x = r.add0x = r.assertIsStrictHexString = r.assertIsHexString = r.isStrictHexString = r.isHexString = r.StrictHexStruct = r.HexStruct = void 0;
        const n = e("superstruct")
          , i = e("./assert");
        function s(e) {
            return (0,
            n.is)(e, r.HexStruct)
        }
        function o(e) {
            return (0,
            n.is)(e, r.StrictHexStruct)
        }
        r.HexStruct = (0,
        n.pattern)((0,
        n.string)(), /^(?:0x)?[0-9a-f]+$/iu),
        r.StrictHexStruct = (0,
        n.pattern)((0,
        n.string)(), /^0x[0-9a-f]+$/iu),
        r.isHexString = s,
        r.isStrictHexString = o,
        r.assertIsHexString = function(e) {
            (0,
            i.assert)(s(e), "Value must be a hexadecimal string.")
        }
        ,
        r.assertIsStrictHexString = function(e) {
            (0,
            i.assert)(o(e), 'Value must be a hexadecimal string, starting with "0x".')
        }
        ,
        r.add0x = function(e) {
            return e.startsWith("0x") ? e : e.startsWith("0X") ? `0x ${e.substring(2)}` : `0x ${e}`
        }
        ,
        r.remove0x = function(e) {
            return e.startsWith("0x") || e.startsWith("0X") ? e.substring(2) : e
        }
    }
    , {
        "./assert": 37,
        superstruct: 146
    }],
    45: [function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r);
            var i = Object.getOwnPropertyDescriptor(t, r);
            i && !("get"in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            }),
            Object.defineProperty(e, n, i)
        }
        : function(e, t, r, n) {
            void 0 === n && (n = r),
            e[n] = t[r]
        }
        )
          , i = this && this.__exportStar || function(e, t) {
            for (var r in e)
                "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        i(e("./assert"), r),
        i(e("./base64"), r),
        i(e("./bytes"), r),
        i(e("./checksum"), r),
        i(e("./coercers"), r),
        i(e("./collections"), r),
        i(e("./encryption-types"), r),
        i(e("./hex"), r),
        i(e("./json"), r),
        i(e("./keyring"), r),
        i(e("./logging"), r),
        i(e("./misc"), r),
        i(e("./number"), r),
        i(e("./opaque"), r),
        i(e("./time"), r),
        i(e("./transaction-types"), r),
        i(e("./versions"), r)
    }
    , {
        "./assert": 37,
        "./base64": 38,
        "./bytes": 39,
        "./checksum": 40,
        "./coercers": 41,
        "./collections": 42,
        "./encryption-types": 43,
        "./hex": 44,
        "./json": 46,
        "./keyring": 47,
        "./logging": 48,
        "./misc": 49,
        "./number": 50,
        "./opaque": 51,
        "./time": 52,
        "./transaction-types": 53,
        "./versions": 54
    }],
    46: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.getJsonRpcIdValidator = r.assertIsJsonRpcError = r.isJsonRpcError = r.assertIsJsonRpcFailure = r.isJsonRpcFailure = r.assertIsJsonRpcSuccess = r.isJsonRpcSuccess = r.assertIsJsonRpcResponse = r.isJsonRpcResponse = r.assertIsPendingJsonRpcResponse = r.isPendingJsonRpcResponse = r.JsonRpcResponseStruct = r.JsonRpcFailureStruct = r.JsonRpcSuccessStruct = r.PendingJsonRpcResponseStruct = r.assertIsJsonRpcRequest = r.isJsonRpcRequest = r.assertIsJsonRpcNotification = r.isJsonRpcNotification = r.JsonRpcNotificationStruct = r.JsonRpcRequestStruct = r.JsonRpcParamsStruct = r.JsonRpcErrorStruct = r.JsonRpcIdStruct = r.JsonRpcVersionStruct = r.jsonrpc2 = r.getJsonSize = r.isValidJson = r.JsonStruct = r.UnsafeJsonStruct = void 0;
        const n = e("superstruct")
          , i = e("./assert");
        r.UnsafeJsonStruct = (0,
        n.union)([(0,
        n.literal)(null), (0,
        n.boolean)(), (0,
        n.define)("finite number", (e=>(0,
        n.is)(e, (0,
        n.number)()) && Number.isFinite(e))), (0,
        n.string)(), (0,
        n.array)((0,
        n.lazy)((()=>r.UnsafeJsonStruct))), (0,
        n.record)((0,
        n.string)(), (0,
        n.lazy)((()=>r.UnsafeJsonStruct)))]),
        r.JsonStruct = (0,
        n.define)("Json", ((e,t)=>{
            function n(e, r) {
                const n = [...r.validator(e, t)];
                return !(n.length > 0) || n
            }
            try {
                const t = n(e, r.UnsafeJsonStruct);
                return !0 !== t ? t : n(JSON.parse(JSON.stringify(e)), r.UnsafeJsonStruct)
            } catch (e) {
                return e instanceof RangeError && "Circular reference detected"
            }
        }
        )),
        r.isValidJson = function(e) {
            return (0,
            n.is)(e, r.JsonStruct)
        }
        ,
        r.getJsonSize = function(e) {
            (0,
            i.assertStruct)(e, r.JsonStruct, "Invalid JSON value");
            const t = JSON.stringify(e);
            return (new TextEncoder).encode(t).byteLength
        }
        ,
        r.jsonrpc2 = "2.0",
        r.JsonRpcVersionStruct = (0,
        n.literal)(r.jsonrpc2),
        r.JsonRpcIdStruct = (0,
        n.nullable)((0,
        n.union)([(0,
        n.number)(), (0,
        n.string)()])),
        r.JsonRpcErrorStruct = (0,
        n.object)({
            code: (0,
            n.integer)(),
            message: (0,
            n.string)(),
            data: (0,
            n.optional)(r.JsonStruct),
            stack: (0,
            n.optional)((0,
            n.string)())
        }),
        r.JsonRpcParamsStruct = (0,
        n.optional)((0,
        n.union)([(0,
        n.record)((0,
        n.string)(), r.JsonStruct), (0,
        n.array)(r.JsonStruct)])),
        r.JsonRpcRequestStruct = (0,
        n.object)({
            id: r.JsonRpcIdStruct,
            jsonrpc: r.JsonRpcVersionStruct,
            method: (0,
            n.string)(),
            params: r.JsonRpcParamsStruct
        }),
        r.JsonRpcNotificationStruct = (0,
        n.omit)(r.JsonRpcRequestStruct, ["id"]),
        r.isJsonRpcNotification = function(e) {
            return (0,
            n.is)(e, r.JsonRpcNotificationStruct)
        }
        ,
        r.assertIsJsonRpcNotification = function(e, t) {
            (0,
            i.assertStruct)(e, r.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", t)
        }
        ,
        r.isJsonRpcRequest = function(e) {
            return (0,
            n.is)(e, r.JsonRpcRequestStruct)
        }
        ,
        r.assertIsJsonRpcRequest = function(e, t) {
            (0,
            i.assertStruct)(e, r.JsonRpcRequestStruct, "Invalid JSON-RPC request", t)
        }
        ,
        r.PendingJsonRpcResponseStruct = (0,
        n.object)({
            id: r.JsonRpcIdStruct,
            jsonrpc: r.JsonRpcVersionStruct,
            result: (0,
            n.optional)((0,
            n.unknown)()),
            error: (0,
            n.optional)(r.JsonRpcErrorStruct)
        }),
        r.JsonRpcSuccessStruct = (0,
        n.object)({
            id: r.JsonRpcIdStruct,
            jsonrpc: r.JsonRpcVersionStruct,
            result: r.JsonStruct
        }),
        r.JsonRpcFailureStruct = (0,
        n.object)({
            id: r.JsonRpcIdStruct,
            jsonrpc: r.JsonRpcVersionStruct,
            error: r.JsonRpcErrorStruct
        }),
        r.JsonRpcResponseStruct = (0,
        n.union)([r.JsonRpcSuccessStruct, r.JsonRpcFailureStruct]),
        r.isPendingJsonRpcResponse = function(e) {
            return (0,
            n.is)(e, r.PendingJsonRpcResponseStruct)
        }
        ,
        r.assertIsPendingJsonRpcResponse = function(e, t) {
            (0,
            i.assertStruct)(e, r.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", t)
        }
        ,
        r.isJsonRpcResponse = function(e) {
            return (0,
            n.is)(e, r.JsonRpcResponseStruct)
        }
        ,
        r.assertIsJsonRpcResponse = function(e, t) {
            (0,
            i.assertStruct)(e, r.JsonRpcResponseStruct, "Invalid JSON-RPC response", t)
        }
        ,
        r.isJsonRpcSuccess = function(e) {
            return (0,
            n.is)(e, r.JsonRpcSuccessStruct)
        }
        ,
        r.assertIsJsonRpcSuccess = function(e, t) {
            (0,
            i.assertStruct)(e, r.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", t)
        }
        ,
        r.isJsonRpcFailure = function(e) {
            return (0,
            n.is)(e, r.JsonRpcFailureStruct)
        }
        ,
        r.assertIsJsonRpcFailure = function(e, t) {
            (0,
            i.assertStruct)(e, r.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", t)
        }
        ,
        r.isJsonRpcError = function(e) {
            return (0,
            n.is)(e, r.JsonRpcErrorStruct)
        }
        ,
        r.assertIsJsonRpcError = function(e, t) {
            (0,
            i.assertStruct)(e, r.JsonRpcErrorStruct, "Invalid JSON-RPC error", t)
        }
        ,
        r.getJsonRpcIdValidator = function(e) {
            const {permitEmptyString: t, permitFractions: r, permitNull: n} = Object.assign({
                permitEmptyString: !0,
                permitFractions: !1,
                permitNull: !0
            }, e);
            return e=>Boolean("number" == typeof e && (r || Number.isInteger(e)) || "string" == typeof e && (t || e.length > 0) || n && null === e)
        }
    }
    , {
        "./assert": 37,
        superstruct: 146
    }],
    47: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }
    , {}],
    48: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createModuleLogger = r.createProjectLogger = void 0;
        const i = (0,
        n(e("debug")).default)("metamask");
        r.createProjectLogger = function(e) {
            return i.extend(e)
        }
        ,
        r.createModuleLogger = function(e, t) {
            return e.extend(t)
        }
    }
    , {
        debug: 61
    }],
    49: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.calculateNumberSize = r.calculateStringSize = r.isASCII = r.isPlainObject = r.ESCAPE_CHARACTERS_REGEXP = r.JsonSize = r.hasProperty = r.isObject = r.isNullOrUndefined = r.isNonEmptyArray = void 0,
        r.isNonEmptyArray = function(e) {
            return Array.isArray(e) && e.length > 0
        }
        ,
        r.isNullOrUndefined = function(e) {
            return null == e
        }
        ,
        r.isObject = function(e) {
            return Boolean(e) && "object" == typeof e && !Array.isArray(e)
        }
        ;
        function n(e) {
            return e.charCodeAt(0) <= 127
        }
        r.hasProperty = (e,t)=>Object.hasOwnProperty.call(e, t),
        function(e) {
            e[e.Null = 4] = "Null",
            e[e.Comma = 1] = "Comma",
            e[e.Wrapper = 1] = "Wrapper",
            e[e.True = 4] = "True",
            e[e.False = 5] = "False",
            e[e.Quote = 1] = "Quote",
            e[e.Colon = 1] = "Colon",
            e[e.Date = 24] = "Date"
        }(r.JsonSize || (r.JsonSize = {})),
        r.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu,
        r.isPlainObject = function(e) {
            if ("object" != typeof e || null === e)
                return !1;
            try {
                let t = e;
                for (; null !== Object.getPrototypeOf(t); )
                    t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            } catch (e) {
                return !1
            }
        }
        ,
        r.isASCII = n,
        r.calculateStringSize = function(e) {
            var t;
            return e.split("").reduce(((e,t)=>n(t) ? e + 1 : e + 2), 0) + (null !== (t = e.match(r.ESCAPE_CHARACTERS_REGEXP)) && void 0 !== t ? t : []).length
        }
        ,
        r.calculateNumberSize = function(e) {
            return e.toString().length
        }
    }
    , {}],
    50: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.hexToBigInt = r.hexToNumber = r.bigIntToHex = r.numberToHex = void 0;
        const n = e("./assert")
          , i = e("./hex");
        r.numberToHex = e=>((0,
        n.assert)("number" == typeof e, "Value must be a number."),
        (0,
        n.assert)(e >= 0, "Value must be a non-negative number."),
        (0,
        n.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToHex` instead."),
        (0,
        i.add0x)(e.toString(16)));
        r.bigIntToHex = e=>((0,
        n.assert)("bigint" == typeof e, "Value must be a bigint."),
        (0,
        n.assert)(e >= 0, "Value must be a non-negative bigint."),
        (0,
        i.add0x)(e.toString(16)));
        r.hexToNumber = e=>{
            (0,
            i.assertIsHexString)(e);
            const t = parseInt(e, 16);
            return (0,
            n.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `hexToBigInt` instead."),
            t
        }
        ;
        r.hexToBigInt = e=>((0,
        i.assertIsHexString)(e),
        BigInt((0,
        i.add0x)(e)))
    }
    , {
        "./assert": 37,
        "./hex": 44
    }],
    51: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }
    , {}],
    52: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.timeSince = r.inMilliseconds = r.Duration = void 0,
        function(e) {
            e[e.Millisecond = 1] = "Millisecond",
            e[e.Second = 1e3] = "Second",
            e[e.Minute = 6e4] = "Minute",
            e[e.Hour = 36e5] = "Hour",
            e[e.Day = 864e5] = "Day",
            e[e.Week = 6048e5] = "Week",
            e[e.Year = 31536e6] = "Year"
        }(r.Duration || (r.Duration = {}));
        const n = (e,t)=>{
            if (!(e=>Number.isInteger(e) && e >= 0)(e))
                throw new Error(`"${t}" must be a non-negative integer. Received: "${e}".`)
        }
        ;
        r.inMilliseconds = function(e, t) {
            return n(e, "count"),
            e * t
        }
        ,
        r.timeSince = function(e) {
            return n(e, "timestamp"),
            Date.now() - e
        }
    }
    , {}],
    53: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }
    , {}],
    54: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.satisfiesVersionRange = r.gtRange = r.gtVersion = r.assertIsSemVerRange = r.assertIsSemVerVersion = r.isValidSemVerRange = r.isValidSemVerVersion = r.VersionRangeStruct = r.VersionStruct = void 0;
        const n = e("semver")
          , i = e("superstruct")
          , s = e("./assert");
        r.VersionStruct = (0,
        i.refine)((0,
        i.string)(), "Version", (e=>null !== (0,
        n.valid)(e) || `Expected SemVer version, got "${e}"`)),
        r.VersionRangeStruct = (0,
        i.refine)((0,
        i.string)(), "Version range", (e=>null !== (0,
        n.validRange)(e) || `Expected SemVer range, got "${e}"`)),
        r.isValidSemVerVersion = function(e) {
            return (0,
            i.is)(e, r.VersionStruct)
        }
        ,
        r.isValidSemVerRange = function(e) {
            return (0,
            i.is)(e, r.VersionRangeStruct)
        }
        ,
        r.assertIsSemVerVersion = function(e) {
            (0,
            s.assertStruct)(e, r.VersionStruct)
        }
        ,
        r.assertIsSemVerRange = function(e) {
            (0,
            s.assertStruct)(e, r.VersionRangeStruct)
        }
        ,
        r.gtVersion = function(e, t) {
            return (0,
            n.gt)(e, t)
        }
        ,
        r.gtRange = function(e, t) {
            return (0,
            n.gtr)(e, t)
        }
        ,
        r.satisfiesVersionRange = function(e, t) {
            return (0,
            n.satisfies)(e, t, {
                includePrerelease: !0
            })
        }
    }
    , {
        "./assert": 37,
        semver: 129,
        superstruct: 146
    }],
    55: [function(e, t, r) {
        "use strict";
        r.byteLength = function(e) {
            var t = u(e)
              , r = t[0]
              , n = t[1];
            return 3 * (r + n) / 4 - n
        }
        ,
        r.toByteArray = function(e) {
            var t, r, n = u(e), o = n[0], a = n[1], c = new s(function(e, t, r) {
                return 3 * (t + r) / 4 - r
            }(0, o, a)), l = 0, f = a > 0 ? o - 4 : o;
            for (r = 0; r < f; r += 4)
                t = i[e.charCodeAt(r)] << 18 | i[e.charCodeAt(r + 1)] << 12 | i[e.charCodeAt(r + 2)] << 6 | i[e.charCodeAt(r + 3)],
                c[l++] = t >> 16 & 255,
                c[l++] = t >> 8 & 255,
                c[l++] = 255 & t;
            2 === a && (t = i[e.charCodeAt(r)] << 2 | i[e.charCodeAt(r + 1)] >> 4,
            c[l++] = 255 & t);
            1 === a && (t = i[e.charCodeAt(r)] << 10 | i[e.charCodeAt(r + 1)] << 4 | i[e.charCodeAt(r + 2)] >> 2,
            c[l++] = t >> 8 & 255,
            c[l++] = 255 & t);
            return c
        }
        ,
        r.fromByteArray = function(e) {
            for (var t, r = e.length, i = r % 3, s = [], o = 16383, a = 0, u = r - i; a < u; a += o)
                s.push(c(e, a, a + o > u ? u : a + o));
            1 === i ? (t = e[r - 1],
            s.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1],
            s.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
            return s.join("")
        }
        ;
        for (var n = [], i = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0; a < 64; ++a)
            n[a] = o[a],
            i[o.charCodeAt(a)] = a;
        function u(e) {
            var t = e.length;
            if (t % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("=");
            return -1 === r && (r = t),
            [r, r === t ? 0 : 4 - r % 4]
        }
        function c(e, t, r) {
            for (var i, s, o = [], a = t; a < r; a += 3)
                i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]),
                o.push(n[(s = i) >> 18 & 63] + n[s >> 12 & 63] + n[s >> 6 & 63] + n[63 & s]);
            return o.join("")
        }
        i["-".charCodeAt(0)] = 62,
        i["_".charCodeAt(0)] = 63
    }
    , {}],
    56: [function(e, t, r) {}
    , {}],
    57: [function(e, t, r) {
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
        "use strict";
        var n = e("base64-js")
          , i = e("ieee754");
        r.Buffer = a,
        r.SlowBuffer = function(e) {
            +e != e && (e = 0);
            return a.alloc(+e)
        }
        ,
        r.INSPECT_MAX_BYTES = 50;
        var s = 2147483647;
        function o(e) {
            if (e > s)
                throw new RangeError('The value "' + e + '" is invalid for option "size"');
            var t = new Uint8Array(e);
            return t.__proto__ = a.prototype,
            t
        }
        function a(e, t, r) {
            if ("number" == typeof e) {
                if ("string" == typeof t)
                    throw new TypeError('The "string" argument must be of type string. Received type number');
                return l(e)
            }
            return u(e, t, r)
        }
        function u(e, t, r) {
            if ("string" == typeof e)
                return function(e, t) {
                    "string" == typeof t && "" !== t || (t = "utf8");
                    if (!a.isEncoding(t))
                        throw new TypeError("Unknown encoding: " + t);
                    var r = 0 | d(e, t)
                      , n = o(r)
                      , i = n.write(e, t);
                    i !== r && (n = n.slice(0, i));
                    return n
                }(e, t);
            if (ArrayBuffer.isView(e))
                return f(e);
            if (null == e)
                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
            if (U(e, ArrayBuffer) || e && U(e.buffer, ArrayBuffer))
                return function(e, t, r) {
                    if (t < 0 || e.byteLength < t)
                        throw new RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (r || 0))
                        throw new RangeError('"length" is outside of buffer bounds');
                    var n;
                    n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e,t) : new Uint8Array(e,t,r);
                    return n.__proto__ = a.prototype,
                    n
                }(e, t, r);
            if ("number" == typeof e)
                throw new TypeError('The "value" argument must not be of type number. Received type number');
            var n = e.valueOf && e.valueOf();
            if (null != n && n !== e)
                return a.from(n, t, r);
            var i = function(e) {
                if (a.isBuffer(e)) {
                    var t = 0 | h(e.length)
                      , r = o(t);
                    return 0 === r.length || e.copy(r, 0, 0, t),
                    r
                }
                if (void 0 !== e.length)
                    return "number" != typeof e.length || q(e.length) ? o(0) : f(e);
                if ("Buffer" === e.type && Array.isArray(e.data))
                    return f(e.data)
            }(e);
            if (i)
                return i;
            if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive])
                return a.from(e[Symbol.toPrimitive]("string"), t, r);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
        }
        function c(e) {
            if ("number" != typeof e)
                throw new TypeError('"size" argument must be of type number');
            if (e < 0)
                throw new RangeError('The value "' + e + '" is invalid for option "size"')
        }
        function l(e) {
            return c(e),
            o(e < 0 ? 0 : 0 | h(e))
        }
        function f(e) {
            for (var t = e.length < 0 ? 0 : 0 | h(e.length), r = o(t), n = 0; n < t; n += 1)
                r[n] = 255 & e[n];
            return r
        }
        function h(e) {
            if (e >= s)
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
            return 0 | e
        }
        function d(e, t) {
            if (a.isBuffer(e))
                return e.length;
            if (ArrayBuffer.isView(e) || U(e, ArrayBuffer))
                return e.byteLength;
            if ("string" != typeof e)
                throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
            var r = e.length
              , n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === r)
                return 0;
            for (var i = !1; ; )
                switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                    return F(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return D(e).length;
                default:
                    if (i)
                        return n ? -1 : F(e).length;
                    t = ("" + t).toLowerCase(),
                    i = !0
                }
        }
        function p(e, t, r) {
            var n = !1;
            if ((void 0 === t || t < 0) && (t = 0),
            t > this.length)
                return "";
            if ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0)
                return "";
            if ((r >>>= 0) <= (t >>>= 0))
                return "";
            for (e || (e = "utf8"); ; )
                switch (e) {
                case "hex":
                    return O(this, t, r);
                case "utf8":
                case "utf-8":
                    return M(this, t, r);
                case "ascii":
                    return C(this, t, r);
                case "latin1":
                case "binary":
                    return k(this, t, r);
                case "base64":
                    return R(this, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return I(this, t, r);
                default:
                    if (n)
                        throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(),
                    n = !0
                }
        }
        function g(e, t, r) {
            var n = e[t];
            e[t] = e[r],
            e[r] = n
        }
        function m(e, t, r, n, i) {
            if (0 === e.length)
                return -1;
            if ("string" == typeof r ? (n = r,
            r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
            q(r = +r) && (r = i ? 0 : e.length - 1),
            r < 0 && (r = e.length + r),
            r >= e.length) {
                if (i)
                    return -1;
                r = e.length - 1
            } else if (r < 0) {
                if (!i)
                    return -1;
                r = 0
            }
            if ("string" == typeof t && (t = a.from(t, n)),
            a.isBuffer(t))
                return 0 === t.length ? -1 : y(e, t, r, n, i);
            if ("number" == typeof t)
                return t &= 255,
                "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : y(e, [t], r, n, i);
            throw new TypeError("val must be string, number or Buffer")
        }
        function y(e, t, r, n, i) {
            var s, o = 1, a = e.length, u = t.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (e.length < 2 || t.length < 2)
                    return -1;
                o = 2,
                a /= 2,
                u /= 2,
                r /= 2
            }
            function c(e, t) {
                return 1 === o ? e[t] : e.readUInt16BE(t * o)
            }
            if (i) {
                var l = -1;
                for (s = r; s < a; s++)
                    if (c(e, s) === c(t, -1 === l ? 0 : s - l)) {
                        if (-1 === l && (l = s),
                        s - l + 1 === u)
                            return l * o
                    } else
                        -1 !== l && (s -= s - l),
                        l = -1
            } else
                for (r + u > a && (r = a - u),
                s = r; s >= 0; s--) {
                    for (var f = !0, h = 0; h < u; h++)
                        if (c(e, s + h) !== c(t, h)) {
                            f = !1;
                            break
                        }
                    if (f)
                        return s
                }
            return -1
        }
        function v(e, t, r, n) {
            r = Number(r) || 0;
            var i = e.length - r;
            n ? (n = Number(n)) > i && (n = i) : n = i;
            var s = t.length;
            n > s / 2 && (n = s / 2);
            for (var o = 0; o < n; ++o) {
                var a = parseInt(t.substr(2 * o, 2), 16);
                if (q(a))
                    return o;
                e[r + o] = a
            }
            return o
        }
        function b(e, t, r, n) {
            return B(F(t, e.length - r), e, r, n)
        }
        function w(e, t, r, n) {
            return B(function(e) {
                for (var t = [], r = 0; r < e.length; ++r)
                    t.push(255 & e.charCodeAt(r));
                return t
            }(t), e, r, n)
        }
        function _(e, t, r, n) {
            return w(e, t, r, n)
        }
        function E(e, t, r, n) {
            return B(D(t), e, r, n)
        }
        function S(e, t, r, n) {
            return B(function(e, t) {
                for (var r, n, i, s = [], o = 0; o < e.length && !((t -= 2) < 0); ++o)
                    n = (r = e.charCodeAt(o)) >> 8,
                    i = r % 256,
                    s.push(i),
                    s.push(n);
                return s
            }(t, e.length - r), e, r, n)
        }
        function R(e, t, r) {
            return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
        }
        function M(e, t, r) {
            r = Math.min(e.length, r);
            for (var n = [], i = t; i < r; ) {
                var s, o, a, u, c = e[i], l = null, f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                if (i + f <= r)
                    switch (f) {
                    case 1:
                        c < 128 && (l = c);
                        break;
                    case 2:
                        128 == (192 & (s = e[i + 1])) && (u = (31 & c) << 6 | 63 & s) > 127 && (l = u);
                        break;
                    case 3:
                        s = e[i + 1],
                        o = e[i + 2],
                        128 == (192 & s) && 128 == (192 & o) && (u = (15 & c) << 12 | (63 & s) << 6 | 63 & o) > 2047 && (u < 55296 || u > 57343) && (l = u);
                        break;
                    case 4:
                        s = e[i + 1],
                        o = e[i + 2],
                        a = e[i + 3],
                        128 == (192 & s) && 128 == (192 & o) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u)
                    }
                null === l ? (l = 65533,
                f = 1) : l > 65535 && (l -= 65536,
                n.push(l >>> 10 & 1023 | 55296),
                l = 56320 | 1023 & l),
                n.push(l),
                i += f
            }
            return function(e) {
                var t = e.length;
                if (t <= x)
                    return String.fromCharCode.apply(String, e);
                var r = ""
                  , n = 0;
                for (; n < t; )
                    r += String.fromCharCode.apply(String, e.slice(n, n += x));
                return r
            }(n)
        }
        r.kMaxLength = s,
        a.TYPED_ARRAY_SUPPORT = function() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                },
                42 === e.foo()
            } catch (e) {
                return !1
            }
        }(),
        a.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
        Object.defineProperty(a.prototype, "parent", {
            enumerable: !0,
            get: function() {
                if (a.isBuffer(this))
                    return this.buffer
            }
        }),
        Object.defineProperty(a.prototype, "offset", {
            enumerable: !0,
            get: function() {
                if (a.isBuffer(this))
                    return this.byteOffset
            }
        }),
        "undefined" != typeof Symbol && null != Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1
        }),
        a.poolSize = 8192,
        a.from = function(e, t, r) {
            return u(e, t, r)
        }
        ,
        a.prototype.__proto__ = Uint8Array.prototype,
        a.__proto__ = Uint8Array,
        a.alloc = function(e, t, r) {
            return function(e, t, r) {
                return c(e),
                e <= 0 ? o(e) : void 0 !== t ? "string" == typeof r ? o(e).fill(t, r) : o(e).fill(t) : o(e)
            }(e, t, r)
        }
        ,
        a.allocUnsafe = function(e) {
            return l(e)
        }
        ,
        a.allocUnsafeSlow = function(e) {
            return l(e)
        }
        ,
        a.isBuffer = function(e) {
            return null != e && !0 === e._isBuffer && e !== a.prototype
        }
        ,
        a.compare = function(e, t) {
            if (U(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            U(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            !a.isBuffer(e) || !a.isBuffer(t))
                throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (e === t)
                return 0;
            for (var r = e.length, n = t.length, i = 0, s = Math.min(r, n); i < s; ++i)
                if (e[i] !== t[i]) {
                    r = e[i],
                    n = t[i];
                    break
                }
            return r < n ? -1 : n < r ? 1 : 0
        }
        ,
        a.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        a.concat = function(e, t) {
            if (!Array.isArray(e))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length)
                return a.alloc(0);
            var r;
            if (void 0 === t)
                for (t = 0,
                r = 0; r < e.length; ++r)
                    t += e[r].length;
            var n = a.allocUnsafe(t)
              , i = 0;
            for (r = 0; r < e.length; ++r) {
                var s = e[r];
                if (U(s, Uint8Array) && (s = a.from(s)),
                !a.isBuffer(s))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(n, i),
                i += s.length
            }
            return n
        }
        ,
        a.byteLength = d,
        a.prototype._isBuffer = !0,
        a.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2)
                g(this, t, t + 1);
            return this
        }
        ,
        a.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
                g(this, t, t + 3),
                g(this, t + 1, t + 2);
            return this
        }
        ,
        a.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
                g(this, t, t + 7),
                g(this, t + 1, t + 6),
                g(this, t + 2, t + 5),
                g(this, t + 3, t + 4);
            return this
        }
        ,
        a.prototype.toString = function() {
            var e = this.length;
            return 0 === e ? "" : 0 === arguments.length ? M(this, 0, e) : p.apply(this, arguments)
        }
        ,
        a.prototype.toLocaleString = a.prototype.toString,
        a.prototype.equals = function(e) {
            if (!a.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === a.compare(this, e)
        }
        ,
        a.prototype.inspect = function() {
            var e = ""
              , t = r.INSPECT_MAX_BYTES;
            return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(),
            this.length > t && (e += " ... "),
            "<Buffer " + e + ">"
        }
        ,
        a.prototype.compare = function(e, t, r, n, i) {
            if (U(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            !a.isBuffer(e))
                throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
            if (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            t < 0 || r > e.length || n < 0 || i > this.length)
                throw new RangeError("out of range index");
            if (n >= i && t >= r)
                return 0;
            if (n >= i)
                return -1;
            if (t >= r)
                return 1;
            if (this === e)
                return 0;
            for (var s = (i >>>= 0) - (n >>>= 0), o = (r >>>= 0) - (t >>>= 0), u = Math.min(s, o), c = this.slice(n, i), l = e.slice(t, r), f = 0; f < u; ++f)
                if (c[f] !== l[f]) {
                    s = c[f],
                    o = l[f];
                    break
                }
            return s < o ? -1 : o < s ? 1 : 0
        }
        ,
        a.prototype.includes = function(e, t, r) {
            return -1 !== this.indexOf(e, t, r)
        }
        ,
        a.prototype.indexOf = function(e, t, r) {
            return m(this, e, t, r, !0)
        }
        ,
        a.prototype.lastIndexOf = function(e, t, r) {
            return m(this, e, t, r, !1)
        }
        ,
        a.prototype.write = function(e, t, r, n) {
            if (void 0 === t)
                n = "utf8",
                r = this.length,
                t = 0;
            else if (void 0 === r && "string" == typeof t)
                n = t,
                r = this.length,
                t = 0;
            else {
                if (!isFinite(t))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t >>>= 0,
                isFinite(r) ? (r >>>= 0,
                void 0 === n && (n = "utf8")) : (n = r,
                r = void 0)
            }
            var i = this.length - t;
            if ((void 0 === r || r > i) && (r = i),
            e.length > 0 && (r < 0 || t < 0) || t > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var s = !1; ; )
                switch (n) {
                case "hex":
                    return v(this, e, t, r);
                case "utf8":
                case "utf-8":
                    return b(this, e, t, r);
                case "ascii":
                    return w(this, e, t, r);
                case "latin1":
                case "binary":
                    return _(this, e, t, r);
                case "base64":
                    return E(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return S(this, e, t, r);
                default:
                    if (s)
                        throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(),
                    s = !0
                }
        }
        ,
        a.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        var x = 4096;
        function C(e, t, r) {
            var n = "";
            r = Math.min(e.length, r);
            for (var i = t; i < r; ++i)
                n += String.fromCharCode(127 & e[i]);
            return n
        }
        function k(e, t, r) {
            var n = "";
            r = Math.min(e.length, r);
            for (var i = t; i < r; ++i)
                n += String.fromCharCode(e[i]);
            return n
        }
        function O(e, t, r) {
            var n = e.length;
            (!t || t < 0) && (t = 0),
            (!r || r < 0 || r > n) && (r = n);
            for (var i = "", s = t; s < r; ++s)
                i += $(e[s]);
            return i
        }
        function I(e, t, r) {
            for (var n = e.slice(t, r), i = "", s = 0; s < n.length; s += 2)
                i += String.fromCharCode(n[s] + 256 * n[s + 1]);
            return i
        }
        function j(e, t, r) {
            if (e % 1 != 0 || e < 0)
                throw new RangeError("offset is not uint");
            if (e + t > r)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function A(e, t, r, n, i, s) {
            if (!a.isBuffer(e))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > i || t < s)
                throw new RangeError('"value" argument is out of bounds');
            if (r + n > e.length)
                throw new RangeError("Index out of range")
        }
        function T(e, t, r, n, i, s) {
            if (r + n > e.length)
                throw new RangeError("Index out of range");
            if (r < 0)
                throw new RangeError("Index out of range")
        }
        function P(e, t, r, n, s) {
            return t = +t,
            r >>>= 0,
            s || T(e, 0, r, 4),
            i.write(e, t, r, n, 23, 4),
            r + 4
        }
        function N(e, t, r, n, s) {
            return t = +t,
            r >>>= 0,
            s || T(e, 0, r, 8),
            i.write(e, t, r, n, 52, 8),
            r + 8
        }
        a.prototype.slice = function(e, t) {
            var r = this.length;
            (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            t < e && (t = e);
            var n = this.subarray(e, t);
            return n.__proto__ = a.prototype,
            n
        }
        ,
        a.prototype.readUIntLE = function(e, t, r) {
            e >>>= 0,
            t >>>= 0,
            r || j(e, t, this.length);
            for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
                n += this[e + s] * i;
            return n
        }
        ,
        a.prototype.readUIntBE = function(e, t, r) {
            e >>>= 0,
            t >>>= 0,
            r || j(e, t, this.length);
            for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
                n += this[e + --t] * i;
            return n
        }
        ,
        a.prototype.readUInt8 = function(e, t) {
            return e >>>= 0,
            t || j(e, 1, this.length),
            this[e]
        }
        ,
        a.prototype.readUInt16LE = function(e, t) {
            return e >>>= 0,
            t || j(e, 2, this.length),
            this[e] | this[e + 1] << 8
        }
        ,
        a.prototype.readUInt16BE = function(e, t) {
            return e >>>= 0,
            t || j(e, 2, this.length),
            this[e] << 8 | this[e + 1]
        }
        ,
        a.prototype.readUInt32LE = function(e, t) {
            return e >>>= 0,
            t || j(e, 4, this.length),
            (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }
        ,
        a.prototype.readUInt32BE = function(e, t) {
            return e >>>= 0,
            t || j(e, 4, this.length),
            16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }
        ,
        a.prototype.readIntLE = function(e, t, r) {
            e >>>= 0,
            t >>>= 0,
            r || j(e, t, this.length);
            for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
                n += this[e + s] * i;
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)),
            n
        }
        ,
        a.prototype.readIntBE = function(e, t, r) {
            e >>>= 0,
            t >>>= 0,
            r || j(e, t, this.length);
            for (var n = t, i = 1, s = this[e + --n]; n > 0 && (i *= 256); )
                s += this[e + --n] * i;
            return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)),
            s
        }
        ,
        a.prototype.readInt8 = function(e, t) {
            return e >>>= 0,
            t || j(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }
        ,
        a.prototype.readInt16LE = function(e, t) {
            e >>>= 0,
            t || j(e, 2, this.length);
            var r = this[e] | this[e + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        a.prototype.readInt16BE = function(e, t) {
            e >>>= 0,
            t || j(e, 2, this.length);
            var r = this[e + 1] | this[e] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        a.prototype.readInt32LE = function(e, t) {
            return e >>>= 0,
            t || j(e, 4, this.length),
            this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }
        ,
        a.prototype.readInt32BE = function(e, t) {
            return e >>>= 0,
            t || j(e, 4, this.length),
            this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }
        ,
        a.prototype.readFloatLE = function(e, t) {
            return e >>>= 0,
            t || j(e, 4, this.length),
            i.read(this, e, !0, 23, 4)
        }
        ,
        a.prototype.readFloatBE = function(e, t) {
            return e >>>= 0,
            t || j(e, 4, this.length),
            i.read(this, e, !1, 23, 4)
        }
        ,
        a.prototype.readDoubleLE = function(e, t) {
            return e >>>= 0,
            t || j(e, 8, this.length),
            i.read(this, e, !0, 52, 8)
        }
        ,
        a.prototype.readDoubleBE = function(e, t) {
            return e >>>= 0,
            t || j(e, 8, this.length),
            i.read(this, e, !1, 52, 8)
        }
        ,
        a.prototype.writeUIntLE = function(e, t, r, n) {
            (e = +e,
            t >>>= 0,
            r >>>= 0,
            n) || A(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1
              , s = 0;
            for (this[t] = 255 & e; ++s < r && (i *= 256); )
                this[t + s] = e / i & 255;
            return t + r
        }
        ,
        a.prototype.writeUIntBE = function(e, t, r, n) {
            (e = +e,
            t >>>= 0,
            r >>>= 0,
            n) || A(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1
              , s = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
                this[t + i] = e / s & 255;
            return t + r
        }
        ,
        a.prototype.writeUInt8 = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 1, 255, 0),
            this[t] = 255 & e,
            t + 1
        }
        ,
        a.prototype.writeUInt16LE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 2, 65535, 0),
            this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            t + 2
        }
        ,
        a.prototype.writeUInt16BE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 2, 65535, 0),
            this[t] = e >>> 8,
            this[t + 1] = 255 & e,
            t + 2
        }
        ,
        a.prototype.writeUInt32LE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 4, 4294967295, 0),
            this[t + 3] = e >>> 24,
            this[t + 2] = e >>> 16,
            this[t + 1] = e >>> 8,
            this[t] = 255 & e,
            t + 4
        }
        ,
        a.prototype.writeUInt32BE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 4, 4294967295, 0),
            this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e,
            t + 4
        }
        ,
        a.prototype.writeIntLE = function(e, t, r, n) {
            if (e = +e,
            t >>>= 0,
            !n) {
                var i = Math.pow(2, 8 * r - 1);
                A(this, e, t, r, i - 1, -i)
            }
            var s = 0
              , o = 1
              , a = 0;
            for (this[t] = 255 & e; ++s < r && (o *= 256); )
                e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1),
                this[t + s] = (e / o >> 0) - a & 255;
            return t + r
        }
        ,
        a.prototype.writeIntBE = function(e, t, r, n) {
            if (e = +e,
            t >>>= 0,
            !n) {
                var i = Math.pow(2, 8 * r - 1);
                A(this, e, t, r, i - 1, -i)
            }
            var s = r - 1
              , o = 1
              , a = 0;
            for (this[t + s] = 255 & e; --s >= 0 && (o *= 256); )
                e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1),
                this[t + s] = (e / o >> 0) - a & 255;
            return t + r
        }
        ,
        a.prototype.writeInt8 = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            this[t] = 255 & e,
            t + 1
        }
        ,
        a.prototype.writeInt16LE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 2, 32767, -32768),
            this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            t + 2
        }
        ,
        a.prototype.writeInt16BE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 2, 32767, -32768),
            this[t] = e >>> 8,
            this[t + 1] = 255 & e,
            t + 2
        }
        ,
        a.prototype.writeInt32LE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 4, 2147483647, -2147483648),
            this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            this[t + 2] = e >>> 16,
            this[t + 3] = e >>> 24,
            t + 4
        }
        ,
        a.prototype.writeInt32BE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e,
            t + 4
        }
        ,
        a.prototype.writeFloatLE = function(e, t, r) {
            return P(this, e, t, !0, r)
        }
        ,
        a.prototype.writeFloatBE = function(e, t, r) {
            return P(this, e, t, !1, r)
        }
        ,
        a.prototype.writeDoubleLE = function(e, t, r) {
            return N(this, e, t, !0, r)
        }
        ,
        a.prototype.writeDoubleBE = function(e, t, r) {
            return N(this, e, t, !1, r)
        }
        ,
        a.prototype.copy = function(e, t, r, n) {
            if (!a.isBuffer(e))
                throw new TypeError("argument should be a Buffer");
            if (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r)
                return 0;
            if (0 === e.length || 0 === this.length)
                return 0;
            if (t < 0)
                throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
                throw new RangeError("Index out of range");
            if (n < 0)
                throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
            var i = n - r;
            if (this === e && "function" == typeof Uint8Array.prototype.copyWithin)
                this.copyWithin(t, r, n);
            else if (this === e && r < t && t < n)
                for (var s = i - 1; s >= 0; --s)
                    e[s + t] = this[s + r];
            else
                Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
            return i
        }
        ,
        a.prototype.fill = function(e, t, r, n) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (n = t,
                t = 0,
                r = this.length) : "string" == typeof r && (n = r,
                r = this.length),
                void 0 !== n && "string" != typeof n)
                    throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !a.isEncoding(n))
                    throw new TypeError("Unknown encoding: " + n);
                if (1 === e.length) {
                    var i = e.charCodeAt(0);
                    ("utf8" === n && i < 128 || "latin1" === n) && (e = i)
                }
            } else
                "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r)
                throw new RangeError("Out of range index");
            if (r <= t)
                return this;
            var s;
            if (t >>>= 0,
            r = void 0 === r ? this.length : r >>> 0,
            e || (e = 0),
            "number" == typeof e)
                for (s = t; s < r; ++s)
                    this[s] = e;
            else {
                var o = a.isBuffer(e) ? e : a.from(e, n)
                  , u = o.length;
                if (0 === u)
                    throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                for (s = 0; s < r - t; ++s)
                    this[s + t] = o[s % u]
            }
            return this
        }
        ;
        var L = /[^+/0-9A-Za-z-_]/g;
        function $(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }
        function F(e, t) {
            var r;
            t = t || 1 / 0;
            for (var n = e.length, i = null, s = [], o = 0; o < n; ++o) {
                if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
                    if (!i) {
                        if (r > 56319) {
                            (t -= 3) > -1 && s.push(239, 191, 189);
                            continue
                        }
                        if (o + 1 === n) {
                            (t -= 3) > -1 && s.push(239, 191, 189);
                            continue
                        }
                        i = r;
                        continue
                    }
                    if (r < 56320) {
                        (t -= 3) > -1 && s.push(239, 191, 189),
                        i = r;
                        continue
                    }
                    r = 65536 + (i - 55296 << 10 | r - 56320)
                } else
                    i && (t -= 3) > -1 && s.push(239, 191, 189);
                if (i = null,
                r < 128) {
                    if ((t -= 1) < 0)
                        break;
                    s.push(r)
                } else if (r < 2048) {
                    if ((t -= 2) < 0)
                        break;
                    s.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((t -= 3) < 0)
                        break;
                    s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112))
                        throw new Error("Invalid code point");
                    if ((t -= 4) < 0)
                        break;
                    s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return s
        }
        function D(e) {
            return n.toByteArray(function(e) {
                if ((e = (e = e.split("=")[0]).trim().replace(L, "")).length < 2)
                    return "";
                for (; e.length % 4 != 0; )
                    e += "=";
                return e
            }(e))
        }
        function B(e, t, r, n) {
            for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
                t[i + r] = e[i];
            return i
        }
        function U(e, t) {
            return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
        }
        function q(e) {
            return e != e
        }
    }
    , {
        "base64-js": 55,
        ieee754: 70
    }],
    58: [function(e, t, r) {
        var n = Object.create || function(e) {
            var t = function() {};
            return t.prototype = e,
            new t
        }
          , i = Object.keys || function(e) {
            var t = [];
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
            return r
        }
          , s = Function.prototype.bind || function(e) {
            var t = this;
            return function() {
                return t.apply(e, arguments)
            }
        }
        ;
        function o() {
            this._events && Object.prototype.hasOwnProperty.call(this, "_events") || (this._events = n(null),
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        t.exports = o,
        o.EventEmitter = o,
        o.prototype._events = void 0,
        o.prototype._maxListeners = void 0;
        var a, u = 10;
        try {
            var c = {};
            Object.defineProperty && Object.defineProperty(c, "x", {
                value: 0
            }),
            a = 0 === c.x
        } catch (e) {
            a = !1
        }
        function l(e) {
            return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners
        }
        function f(e, t, r, i) {
            var s, o, a;
            if ("function" != typeof r)
                throw new TypeError('"listener" argument must be a function');
            if ((o = e._events) ? (o.newListener && (e.emit("newListener", t, r.listener ? r.listener : r),
            o = e._events),
            a = o[t]) : (o = e._events = n(null),
            e._eventsCount = 0),
            a) {
                if ("function" == typeof a ? a = o[t] = i ? [r, a] : [a, r] : i ? a.unshift(r) : a.push(r),
                !a.warned && (s = l(e)) && s > 0 && a.length > s) {
                    a.warned = !0;
                    var u = new Error("Possible EventEmitter memory leak detected. " + a.length + ' "' + String(t) + '" listeners added. Use emitter.setMaxListeners() to increase limit.');
                    u.name = "MaxListenersExceededWarning",
                    u.emitter = e,
                    u.type = t,
                    u.count = a.length,
                    "object" == typeof console && console.warn && console.warn("%s: %s", u.name, u.message)
                }
            } else
                a = o[t] = r,
                ++e._eventsCount;
            return e
        }
        function h() {
            if (!this.fired)
                switch (this.target.removeListener(this.type, this.wrapFn),
                this.fired = !0,
                arguments.length) {
                case 0:
                    return this.listener.call(this.target);
                case 1:
                    return this.listener.call(this.target, arguments[0]);
                case 2:
                    return this.listener.call(this.target, arguments[0], arguments[1]);
                case 3:
                    return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);
                default:
                    for (var e = new Array(arguments.length), t = 0; t < e.length; ++t)
                        e[t] = arguments[t];
                    this.listener.apply(this.target, e)
                }
        }
        function d(e, t, r) {
            var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            }
              , i = s.call(h, n);
            return i.listener = r,
            n.wrapFn = i,
            i
        }
        function p(e, t, r) {
            var n = e._events;
            if (!n)
                return [];
            var i = n[t];
            return i ? "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function(e) {
                for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                    t[r] = e[r].listener || e[r];
                return t
            }(i) : m(i, i.length) : []
        }
        function g(e) {
            var t = this._events;
            if (t) {
                var r = t[e];
                if ("function" == typeof r)
                    return 1;
                if (r)
                    return r.length
            }
            return 0
        }
        function m(e, t) {
            for (var r = new Array(t), n = 0; n < t; ++n)
                r[n] = e[n];
            return r
        }
        a ? Object.defineProperty(o, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return u
            },
            set: function(e) {
                if ("number" != typeof e || e < 0 || e != e)
                    throw new TypeError('"defaultMaxListeners" must be a positive number');
                u = e
            }
        }) : o.defaultMaxListeners = u,
        o.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || isNaN(e))
                throw new TypeError('"n" argument must be a positive number');
            return this._maxListeners = e,
            this
        }
        ,
        o.prototype.getMaxListeners = function() {
            return l(this)
        }
        ,
        o.prototype.emit = function(e) {
            var t, r, n, i, s, o, a = "error" === e;
            if (o = this._events)
                a = a && null == o.error;
            else if (!a)
                return !1;
            if (a) {
                if (arguments.length > 1 && (t = arguments[1]),
                t instanceof Error)
                    throw t;
                var u = new Error('Unhandled "error" event. (' + t + ")");
                throw u.context = t,
                u
            }
            if (!(r = o[e]))
                return !1;
            var c = "function" == typeof r;
            switch (n = arguments.length) {
            case 1:
                !function(e, t, r) {
                    if (t)
                        e.call(r);
                    else
                        for (var n = e.length, i = m(e, n), s = 0; s < n; ++s)
                            i[s].call(r)
                }(r, c, this);
                break;
            case 2:
                !function(e, t, r, n) {
                    if (t)
                        e.call(r, n);
                    else
                        for (var i = e.length, s = m(e, i), o = 0; o < i; ++o)
                            s[o].call(r, n)
                }(r, c, this, arguments[1]);
                break;
            case 3:
                !function(e, t, r, n, i) {
                    if (t)
                        e.call(r, n, i);
                    else
                        for (var s = e.length, o = m(e, s), a = 0; a < s; ++a)
                            o[a].call(r, n, i)
                }(r, c, this, arguments[1], arguments[2]);
                break;
            case 4:
                !function(e, t, r, n, i, s) {
                    if (t)
                        e.call(r, n, i, s);
                    else
                        for (var o = e.length, a = m(e, o), u = 0; u < o; ++u)
                            a[u].call(r, n, i, s)
                }(r, c, this, arguments[1], arguments[2], arguments[3]);
                break;
            default:
                for (i = new Array(n - 1),
                s = 1; s < n; s++)
                    i[s - 1] = arguments[s];
                !function(e, t, r, n) {
                    if (t)
                        e.apply(r, n);
                    else
                        for (var i = e.length, s = m(e, i), o = 0; o < i; ++o)
                            s[o].apply(r, n)
                }(r, c, this, i)
            }
            return !0
        }
        ,
        o.prototype.addListener = function(e, t) {
            return f(this, e, t, !1)
        }
        ,
        o.prototype.on = o.prototype.addListener,
        o.prototype.prependListener = function(e, t) {
            return f(this, e, t, !0)
        }
        ,
        o.prototype.once = function(e, t) {
            if ("function" != typeof t)
                throw new TypeError('"listener" argument must be a function');
            return this.on(e, d(this, e, t)),
            this
        }
        ,
        o.prototype.prependOnceListener = function(e, t) {
            if ("function" != typeof t)
                throw new TypeError('"listener" argument must be a function');
            return this.prependListener(e, d(this, e, t)),
            this
        }
        ,
        o.prototype.removeListener = function(e, t) {
            var r, i, s, o, a;
            if ("function" != typeof t)
                throw new TypeError('"listener" argument must be a function');
            if (!(i = this._events))
                return this;
            if (!(r = i[e]))
                return this;
            if (r === t || r.listener === t)
                0 == --this._eventsCount ? this._events = n(null) : (delete i[e],
                i.removeListener && this.emit("removeListener", e, r.listener || t));
            else if ("function" != typeof r) {
                for (s = -1,
                o = r.length - 1; o >= 0; o--)
                    if (r[o] === t || r[o].listener === t) {
                        a = r[o].listener,
                        s = o;
                        break
                    }
                if (s < 0)
                    return this;
                0 === s ? r.shift() : function(e, t) {
                    for (var r = t, n = r + 1, i = e.length; n < i; r += 1,
                    n += 1)
                        e[r] = e[n];
                    e.pop()
                }(r, s),
                1 === r.length && (i[e] = r[0]),
                i.removeListener && this.emit("removeListener", e, a || t)
            }
            return this
        }
        ,
        o.prototype.removeAllListeners = function(e) {
            var t, r, s;
            if (!(r = this._events))
                return this;
            if (!r.removeListener)
                return 0 === arguments.length ? (this._events = n(null),
                this._eventsCount = 0) : r[e] && (0 == --this._eventsCount ? this._events = n(null) : delete r[e]),
                this;
            if (0 === arguments.length) {
                var o, a = i(r);
                for (s = 0; s < a.length; ++s)
                    "removeListener" !== (o = a[s]) && this.removeAllListeners(o);
                return this.removeAllListeners("removeListener"),
                this._events = n(null),
                this._eventsCount = 0,
                this
            }
            if ("function" == typeof (t = r[e]))
                this.removeListener(e, t);
            else if (t)
                for (s = t.length - 1; s >= 0; s--)
                    this.removeListener(e, t[s]);
            return this
        }
        ,
        o.prototype.listeners = function(e) {
            return p(this, e, !0)
        }
        ,
        o.prototype.rawListeners = function(e) {
            return p(this, e, !1)
        }
        ,
        o.listenerCount = function(e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : g.call(e, t)
        }
        ,
        o.prototype.listenerCount = g,
        o.prototype.eventNames = function() {
            return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []
        }
    }
    , {}],
    59: [function(e, t, r) {
        (function(e) {
            (function() {
                function t(e) {
                    return Object.prototype.toString.call(e)
                }
                r.isArray = function(e) {
                    return Array.isArray ? Array.isArray(e) : "[object Array]" === t(e)
                }
                ,
                r.isBoolean = function(e) {
                    return "boolean" == typeof e
                }
                ,
                r.isNull = function(e) {
                    return null === e
                }
                ,
                r.isNullOrUndefined = function(e) {
                    return null == e
                }
                ,
                r.isNumber = function(e) {
                    return "number" == typeof e
                }
                ,
                r.isString = function(e) {
                    return "string" == typeof e
                }
                ,
                r.isSymbol = function(e) {
                    return "symbol" == typeof e
                }
                ,
                r.isUndefined = function(e) {
                    return void 0 === e
                }
                ,
                r.isRegExp = function(e) {
                    return "[object RegExp]" === t(e)
                }
                ,
                r.isObject = function(e) {
                    return "object" == typeof e && null !== e
                }
                ,
                r.isDate = function(e) {
                    return "[object Date]" === t(e)
                }
                ,
                r.isError = function(e) {
                    return "[object Error]" === t(e) || e instanceof Error
                }
                ,
                r.isFunction = function(e) {
                    return "function" == typeof e
                }
                ,
                r.isPrimitive = function(e) {
                    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
                }
                ,
                r.isBuffer = e.isBuffer
            }
            ).call(this)
        }
        ).call(this, {
            isBuffer: e("../../is-buffer/index.js")
        })
    }
    , {
        "../../is-buffer/index.js": 72
    }],
    60: [function(e, t, r) {
        var n = 1e3
          , i = 60 * n
          , s = 60 * i
          , o = 24 * s
          , a = 7 * o
          , u = 365.25 * o;
        function c(e, t, r, n) {
            var i = t >= 1.5 * r;
            return Math.round(e / r) + " " + n + (i ? "s" : "")
        }
        t.exports = function(e, t) {
            t = t || {};
            var r = typeof e;
            if ("string" === r && e.length > 0)
                return function(e) {
                    if ((e = String(e)).length > 100)
                        return;
                    var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                    if (!t)
                        return;
                    var r = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return r * u;
                    case "weeks":
                    case "week":
                    case "w":
                        return r * a;
                    case "days":
                    case "day":
                    case "d":
                        return r * o;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return r * s;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return r * i;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return r * n;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return r;
                    default:
                        return
                    }
                }(e);
            if ("number" === r && isFinite(e))
                return t.long ? function(e) {
                    var t = Math.abs(e);
                    if (t >= o)
                        return c(e, t, o, "day");
                    if (t >= s)
                        return c(e, t, s, "hour");
                    if (t >= i)
                        return c(e, t, i, "minute");
                    if (t >= n)
                        return c(e, t, n, "second");
                    return e + " ms"
                }(e) : function(e) {
                    var t = Math.abs(e);
                    if (t >= o)
                        return Math.round(e / o) + "d";
                    if (t >= s)
                        return Math.round(e / s) + "h";
                    if (t >= i)
                        return Math.round(e / i) + "m";
                    if (t >= n)
                        return Math.round(e / n) + "s";
                    return e + "ms"
                }(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    }
    , {}],
    61: [function(e, t, r) {
        (function(n) {
            (function() {
                r.formatArgs = function(e) {
                    if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff),
                    !this.useColors)
                        return;
                    const r = "color: " + this.color;
                    e.splice(1, 0, r, "color: inherit");
                    let n = 0
                      , i = 0;
                    e[0].replace(/%[a-zA-Z%]/g, (e=>{
                        "%%" !== e && (n++,
                        "%c" === e && (i = n))
                    }
                    )),
                    e.splice(i, 0, r)
                }
                ,
                r.save = function(e) {
                    try {
                        e ? r.storage.setItem("debug", e) : r.storage.removeItem("debug")
                    } catch (e) {}
                }
                ,
                r.load = function() {
                    let e;
                    try {
                        e = r.storage.getItem("debug")
                    } catch (e) {}
                    !e && void 0 !== n && "env"in n && (e = null);
                    return e
                }
                ,
                r.useColors = function() {
                    if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs))
                        return !0;
                    if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
                        return !1;
                    return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                }
                ,
                r.storage = function() {
                    try {
                        return localStorage
                    } catch (e) {}
                }(),
                r.destroy = (()=>{
                    let e = !1;
                    return ()=>{
                        e || (e = !0,
                        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                    }
                }
                )(),
                r.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
                r.log = console.debug || console.log || (()=>{}
                ),
                t.exports = e("./common")(r);
                const {formatters: i} = t.exports;
                i.j = function(e) {
                    try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return "[UnexpectedJSONParseError]: " + e.message
                    }
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        "./common": 62,
        _process: 89
    }],
    62: [function(e, t, r) {
        t.exports = function(t) {
            function r(e) {
                let t, i, s, o = null;
                function a(...e) {
                    if (!a.enabled)
                        return;
                    const n = a
                      , i = Number(new Date)
                      , s = i - (t || i);
                    n.diff = s,
                    n.prev = t,
                    n.curr = i,
                    t = i,
                    e[0] = r.coerce(e[0]),
                    "string" != typeof e[0] && e.unshift("%O");
                    let o = 0;
                    e[0] = e[0].replace(/%([a-zA-Z%])/g, ((t,i)=>{
                        if ("%%" === t)
                            return "%";
                        o++;
                        const s = r.formatters[i];
                        if ("function" == typeof s) {
                            const r = e[o];
                            t = s.call(n, r),
                            e.splice(o, 1),
                            o--
                        }
                        return t
                    }
                    )),
                    r.formatArgs.call(n, e);
                    (n.log || r.log).apply(n, e)
                }
                return a.namespace = e,
                a.useColors = r.useColors(),
                a.color = r.selectColor(e),
                a.extend = n,
                a.destroy = r.destroy,
                Object.defineProperty(a, "enabled", {
                    enumerable: !0,
                    configurable: !1,
                    get: ()=>null !== o ? o : (i !== r.namespaces && (i = r.namespaces,
                    s = r.enabled(e)),
                    s),
                    set: e=>{
                        o = e
                    }
                }),
                "function" == typeof r.init && r.init(a),
                a
            }
            function n(e, t) {
                const n = r(this.namespace + (void 0 === t ? ":" : t) + e);
                return n.log = this.log,
                n
            }
            function i(e) {
                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
            }
            return r.debug = r,
            r.default = r,
            r.coerce = function(e) {
                if (e instanceof Error)
                    return e.stack || e.message;
                return e
            }
            ,
            r.disable = function() {
                const e = [...r.names.map(i), ...r.skips.map(i).map((e=>"-" + e))].join(",");
                return r.enable(""),
                e
            }
            ,
            r.enable = function(e) {
                let t;
                r.save(e),
                r.namespaces = e,
                r.names = [],
                r.skips = [];
                const n = ("string" == typeof e ? e : "").split(/[\s,]+/)
                  , i = n.length;
                for (t = 0; t < i; t++)
                    n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + e.slice(1) + "$")) : r.names.push(new RegExp("^" + e + "$")))
            }
            ,
            r.enabled = function(e) {
                if ("*" === e[e.length - 1])
                    return !0;
                let t, n;
                for (t = 0,
                n = r.skips.length; t < n; t++)
                    if (r.skips[t].test(e))
                        return !1;
                for (t = 0,
                n = r.names.length; t < n; t++)
                    if (r.names[t].test(e))
                        return !0;
                return !1
            }
            ,
            r.humanize = e("ms"),
            r.destroy = function() {
                console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
            }
            ,
            Object.keys(t).forEach((e=>{
                r[e] = t[e]
            }
            )),
            r.names = [],
            r.skips = [],
            r.formatters = {},
            r.selectColor = function(e) {
                let t = 0;
                for (let r = 0; r < e.length; r++)
                    t = (t << 5) - t + e.charCodeAt(r),
                    t |= 0;
                return r.colors[Math.abs(t) % r.colors.length]
            }
            ,
            r.enable(r.load()),
            r
        }
    }
    , {
        ms: 60
    }],
    63: [function(e, t, r) {
        (function(r) {
            (function() {
                var n = e("once")
                  , i = function() {}
                  , s = function(e, t, o) {
                    if ("function" == typeof t)
                        return s(e, null, t);
                    t || (t = {}),
                    o = n(o || i);
                    var a = e._writableState
                      , u = e._readableState
                      , c = t.readable || !1 !== t.readable && e.readable
                      , l = t.writable || !1 !== t.writable && e.writable
                      , f = !1
                      , h = function() {
                        e.writable || d()
                    }
                      , d = function() {
                        l = !1,
                        c || o.call(e)
                    }
                      , p = function() {
                        c = !1,
                        l || o.call(e)
                    }
                      , g = function(t) {
                        o.call(e, t ? new Error("exited with error code: " + t) : null)
                    }
                      , m = function(t) {
                        o.call(e, t)
                    }
                      , y = function() {
                        r.nextTick(v)
                    }
                      , v = function() {
                        if (!f)
                            return (!c || u && u.ended && !u.destroyed) && (!l || a && a.ended && !a.destroyed) ? void 0 : o.call(e, new Error("premature close"))
                    }
                      , b = function() {
                        e.req.on("finish", d)
                    };
                    return !function(e) {
                        return e.setHeader && "function" == typeof e.abort
                    }(e) ? l && !a && (e.on("end", h),
                    e.on("close", h)) : (e.on("complete", d),
                    e.on("abort", y),
                    e.req ? b() : e.on("request", b)),
                    function(e) {
                        return e.stdio && Array.isArray(e.stdio) && 3 === e.stdio.length
                    }(e) && e.on("exit", g),
                    e.on("end", p),
                    e.on("finish", d),
                    !1 !== t.error && e.on("error", m),
                    e.on("close", y),
                    function() {
                        f = !0,
                        e.removeListener("complete", d),
                        e.removeListener("abort", y),
                        e.removeListener("request", b),
                        e.req && e.req.removeListener("finish", d),
                        e.removeListener("end", h),
                        e.removeListener("close", h),
                        e.removeListener("finish", d),
                        e.removeListener("exit", g),
                        e.removeListener("end", p),
                        e.removeListener("error", m),
                        e.removeListener("close", y)
                    }
                };
                t.exports = s
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        _process: 89,
        once: 87
    }],
    64: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.EthereumProviderError = r.EthereumRpcError = void 0;
        const n = e("fast-safe-stringify");
        class i extends Error {
            constructor(e, t, r) {
                if (!Number.isInteger(e))
                    throw new Error('"code" must be an integer.');
                if (!t || "string" != typeof t)
                    throw new Error('"message" must be a nonempty string.');
                super(t),
                this.code = e,
                void 0 !== r && (this.data = r)
            }
            serialize() {
                const e = {
                    code: this.code,
                    message: this.message
                };
                return void 0 !== this.data && (e.data = this.data),
                this.stack && (e.stack = this.stack),
                e
            }
            toString() {
                return n.default(this.serialize(), s, 2)
            }
        }
        r.EthereumRpcError = i;
        function s(e, t) {
            if ("[Circular]" !== t)
                return t
        }
        r.EthereumProviderError = class extends i {
            constructor(e, t, r) {
                if (!function(e) {
                    return Number.isInteger(e) && e >= 1e3 && e <= 4999
                }(e))
                    throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
                super(e, t, r)
            }
        }
    }
    , {
        "fast-safe-stringify": 69
    }],
    65: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.errorValues = r.errorCodes = void 0,
        r.errorCodes = {
            rpc: {
                invalidInput: -32e3,
                resourceNotFound: -32001,
                resourceUnavailable: -32002,
                transactionRejected: -32003,
                methodNotSupported: -32004,
                limitExceeded: -32005,
                parse: -32700,
                invalidRequest: -32600,
                methodNotFound: -32601,
                invalidParams: -32602,
                internal: -32603
            },
            provider: {
                userRejectedRequest: 4001,
                unauthorized: 4100,
                unsupportedMethod: 4200,
                disconnected: 4900,
                chainDisconnected: 4901
            }
        },
        r.errorValues = {
            "-32700": {
                standard: "JSON RPC 2.0",
                message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
            },
            "-32600": {
                standard: "JSON RPC 2.0",
                message: "The JSON sent is not a valid Request object."
            },
            "-32601": {
                standard: "JSON RPC 2.0",
                message: "The method does not exist / is not available."
            },
            "-32602": {
                standard: "JSON RPC 2.0",
                message: "Invalid method parameter(s)."
            },
            "-32603": {
                standard: "JSON RPC 2.0",
                message: "Internal JSON-RPC error."
            },
            "-32000": {
                standard: "EIP-1474",
                message: "Invalid input."
            },
            "-32001": {
                standard: "EIP-1474",
                message: "Resource not found."
            },
            "-32002": {
                standard: "EIP-1474",
                message: "Resource unavailable."
            },
            "-32003": {
                standard: "EIP-1474",
                message: "Transaction rejected."
            },
            "-32004": {
                standard: "EIP-1474",
                message: "Method not supported."
            },
            "-32005": {
                standard: "EIP-1474",
                message: "Request limit exceeded."
            },
            4001: {
                standard: "EIP-1193",
                message: "User rejected the request."
            },
            4100: {
                standard: "EIP-1193",
                message: "The requested account and/or method has not been authorized by the user."
            },
            4200: {
                standard: "EIP-1193",
                message: "The requested method is not supported by this Ethereum provider."
            },
            4900: {
                standard: "EIP-1193",
                message: "The provider is disconnected from all chains."
            },
            4901: {
                standard: "EIP-1193",
                message: "The provider is disconnected from the specified chain."
            }
        }
    }
    , {}],
    66: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.ethErrors = void 0;
        const n = e("./classes")
          , i = e("./utils")
          , s = e("./error-constants");
        function o(e, t) {
            const [r,s] = u(t);
            return new n.EthereumRpcError(e,r || i.getMessageFromCode(e),s)
        }
        function a(e, t) {
            const [r,s] = u(t);
            return new n.EthereumProviderError(e,r || i.getMessageFromCode(e),s)
        }
        function u(e) {
            if (e) {
                if ("string" == typeof e)
                    return [e];
                if ("object" == typeof e && !Array.isArray(e)) {
                    const {message: t, data: r} = e;
                    if (t && "string" != typeof t)
                        throw new Error("Must specify string message.");
                    return [t || void 0, r]
                }
            }
            return []
        }
        r.ethErrors = {
            rpc: {
                parse: e=>o(s.errorCodes.rpc.parse, e),
                invalidRequest: e=>o(s.errorCodes.rpc.invalidRequest, e),
                invalidParams: e=>o(s.errorCodes.rpc.invalidParams, e),
                methodNotFound: e=>o(s.errorCodes.rpc.methodNotFound, e),
                internal: e=>o(s.errorCodes.rpc.internal, e),
                server: e=>{
                    if (!e || "object" != typeof e || Array.isArray(e))
                        throw new Error("Ethereum RPC Server errors must provide single object argument.");
                    const {code: t} = e;
                    if (!Number.isInteger(t) || t > -32005 || t < -32099)
                        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
                    return o(t, e)
                }
                ,
                invalidInput: e=>o(s.errorCodes.rpc.invalidInput, e),
                resourceNotFound: e=>o(s.errorCodes.rpc.resourceNotFound, e),
                resourceUnavailable: e=>o(s.errorCodes.rpc.resourceUnavailable, e),
                transactionRejected: e=>o(s.errorCodes.rpc.transactionRejected, e),
                methodNotSupported: e=>o(s.errorCodes.rpc.methodNotSupported, e),
                limitExceeded: e=>o(s.errorCodes.rpc.limitExceeded, e)
            },
            provider: {
                userRejectedRequest: e=>a(s.errorCodes.provider.userRejectedRequest, e),
                unauthorized: e=>a(s.errorCodes.provider.unauthorized, e),
                unsupportedMethod: e=>a(s.errorCodes.provider.unsupportedMethod, e),
                disconnected: e=>a(s.errorCodes.provider.disconnected, e),
                chainDisconnected: e=>a(s.errorCodes.provider.chainDisconnected, e),
                custom: e=>{
                    if (!e || "object" != typeof e || Array.isArray(e))
                        throw new Error("Ethereum Provider custom errors must provide single object argument.");
                    const {code: t, message: r, data: i} = e;
                    if (!r || "string" != typeof r)
                        throw new Error('"message" must be a nonempty string');
                    return new n.EthereumProviderError(t,r,i)
                }
            }
        }
    }
    , {
        "./classes": 64,
        "./error-constants": 65,
        "./utils": 68
    }],
    67: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.getMessageFromCode = r.serializeError = r.EthereumProviderError = r.EthereumRpcError = r.ethErrors = r.errorCodes = void 0;
        const n = e("./classes");
        Object.defineProperty(r, "EthereumRpcError", {
            enumerable: !0,
            get: function() {
                return n.EthereumRpcError
            }
        }),
        Object.defineProperty(r, "EthereumProviderError", {
            enumerable: !0,
            get: function() {
                return n.EthereumProviderError
            }
        });
        const i = e("./utils");
        Object.defineProperty(r, "serializeError", {
            enumerable: !0,
            get: function() {
                return i.serializeError
            }
        }),
        Object.defineProperty(r, "getMessageFromCode", {
            enumerable: !0,
            get: function() {
                return i.getMessageFromCode
            }
        });
        const s = e("./errors");
        Object.defineProperty(r, "ethErrors", {
            enumerable: !0,
            get: function() {
                return s.ethErrors
            }
        });
        const o = e("./error-constants");
        Object.defineProperty(r, "errorCodes", {
            enumerable: !0,
            get: function() {
                return o.errorCodes
            }
        })
    }
    , {
        "./classes": 64,
        "./error-constants": 65,
        "./errors": 66,
        "./utils": 68
    }],
    68: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.serializeError = r.isValidCode = r.getMessageFromCode = r.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
        const n = e("./error-constants")
          , i = e("./classes")
          , s = n.errorCodes.rpc.internal
          , o = "Unspecified error message. This is a bug, please report it."
          , a = {
            code: s,
            message: u(s)
        };
        function u(e, t=o) {
            if (Number.isInteger(e)) {
                const t = e.toString();
                if (h(n.errorValues, t))
                    return n.errorValues[t].message;
                if (l(e))
                    return r.JSON_RPC_SERVER_ERROR_MESSAGE
            }
            return t
        }
        function c(e) {
            if (!Number.isInteger(e))
                return !1;
            const t = e.toString();
            return !!n.errorValues[t] || !!l(e)
        }
        function l(e) {
            return e >= -32099 && e <= -32e3
        }
        function f(e) {
            return e && "object" == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e
        }
        function h(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        r.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.",
        r.getMessageFromCode = u,
        r.isValidCode = c,
        r.serializeError = function(e, {fallbackError: t=a, shouldIncludeStack: r=!1}={}) {
            var n, s;
            if (!t || !Number.isInteger(t.code) || "string" != typeof t.message)
                throw new Error("Must provide fallback error with integer number code and string message.");
            if (e instanceof i.EthereumRpcError)
                return e.serialize();
            const o = {};
            if (e && "object" == typeof e && !Array.isArray(e) && h(e, "code") && c(e.code)) {
                const t = e;
                o.code = t.code,
                t.message && "string" == typeof t.message ? (o.message = t.message,
                h(t, "data") && (o.data = t.data)) : (o.message = u(o.code),
                o.data = {
                    originalError: f(e)
                })
            } else {
                o.code = t.code;
                const r = null === (n = e) || void 0 === n ? void 0 : n.message;
                o.message = r && "string" == typeof r ? r : t.message,
                o.data = {
                    originalError: f(e)
                }
            }
            const l = null === (s = e) || void 0 === s ? void 0 : s.stack;
            return r && e && l && "string" == typeof l && (o.stack = l),
            o
        }
    }
    , {
        "./classes": 64,
        "./error-constants": 65
    }],
    69: [function(e, t, r) {
        t.exports = u,
        u.default = u,
        u.stable = h,
        u.stableStringify = h;
        var n = "[...]"
          , i = "[Circular]"
          , s = []
          , o = [];
        function a() {
            return {
                depthLimit: Number.MAX_SAFE_INTEGER,
                edgesLimit: Number.MAX_SAFE_INTEGER
            }
        }
        function u(e, t, r, n) {
            var i;
            void 0 === n && (n = a()),
            l(e, "", 0, [], void 0, 0, n);
            try {
                i = 0 === o.length ? JSON.stringify(e, t, r) : JSON.stringify(e, p(t), r)
            } catch (e) {
                return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
            } finally {
                for (; 0 !== s.length; ) {
                    var u = s.pop();
                    4 === u.length ? Object.defineProperty(u[0], u[1], u[3]) : u[0][u[1]] = u[2]
                }
            }
            return i
        }
        function c(e, t, r, n) {
            var i = Object.getOwnPropertyDescriptor(n, r);
            void 0 !== i.get ? i.configurable ? (Object.defineProperty(n, r, {
                value: e
            }),
            s.push([n, r, t, i])) : o.push([t, r, e]) : (n[r] = e,
            s.push([n, r, t]))
        }
        function l(e, t, r, s, o, a, u) {
            var f;
            if (a += 1,
            "object" == typeof e && null !== e) {
                for (f = 0; f < s.length; f++)
                    if (s[f] === e)
                        return void c(i, e, t, o);
                if (void 0 !== u.depthLimit && a > u.depthLimit)
                    return void c(n, e, t, o);
                if (void 0 !== u.edgesLimit && r + 1 > u.edgesLimit)
                    return void c(n, e, t, o);
                if (s.push(e),
                Array.isArray(e))
                    for (f = 0; f < e.length; f++)
                        l(e[f], f, f, s, e, a, u);
                else {
                    var h = Object.keys(e);
                    for (f = 0; f < h.length; f++) {
                        var d = h[f];
                        l(e[d], d, f, s, e, a, u)
                    }
                }
                s.pop()
            }
        }
        function f(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }
        function h(e, t, r, n) {
            void 0 === n && (n = a());
            var i, u = d(e, "", 0, [], void 0, 0, n) || e;
            try {
                i = 0 === o.length ? JSON.stringify(u, t, r) : JSON.stringify(u, p(t), r)
            } catch (e) {
                return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
            } finally {
                for (; 0 !== s.length; ) {
                    var c = s.pop();
                    4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : c[0][c[1]] = c[2]
                }
            }
            return i
        }
        function d(e, t, r, o, a, u, l) {
            var h;
            if (u += 1,
            "object" == typeof e && null !== e) {
                for (h = 0; h < o.length; h++)
                    if (o[h] === e)
                        return void c(i, e, t, a);
                try {
                    if ("function" == typeof e.toJSON)
                        return
                } catch (e) {
                    return
                }
                if (void 0 !== l.depthLimit && u > l.depthLimit)
                    return void c(n, e, t, a);
                if (void 0 !== l.edgesLimit && r + 1 > l.edgesLimit)
                    return void c(n, e, t, a);
                if (o.push(e),
                Array.isArray(e))
                    for (h = 0; h < e.length; h++)
                        d(e[h], h, h, o, e, u, l);
                else {
                    var p = {}
                      , g = Object.keys(e).sort(f);
                    for (h = 0; h < g.length; h++) {
                        var m = g[h];
                        d(e[m], m, h, o, e, u, l),
                        p[m] = e[m]
                    }
                    if (void 0 === a)
                        return p;
                    s.push([a, t, e]),
                    a[t] = p
                }
                o.pop()
            }
        }
        function p(e) {
            return e = void 0 !== e ? e : function(e, t) {
                return t
            }
            ,
            function(t, r) {
                if (o.length > 0)
                    for (var n = 0; n < o.length; n++) {
                        var i = o[n];
                        if (i[1] === t && i[0] === r) {
                            r = i[2],
                            o.splice(n, 1);
                            break
                        }
                    }
                return e.call(this, t, r)
            }
        }
    }
    , {}],
    70: [function(e, t, r) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
        r.read = function(e, t, r, n, i) {
            var s, o, a = 8 * i - n - 1, u = (1 << a) - 1, c = u >> 1, l = -7, f = r ? i - 1 : 0, h = r ? -1 : 1, d = e[t + f];
            for (f += h,
            s = d & (1 << -l) - 1,
            d >>= -l,
            l += a; l > 0; s = 256 * s + e[t + f],
            f += h,
            l -= 8)
                ;
            for (o = s & (1 << -l) - 1,
            s >>= -l,
            l += n; l > 0; o = 256 * o + e[t + f],
            f += h,
            l -= 8)
                ;
            if (0 === s)
                s = 1 - c;
            else {
                if (s === u)
                    return o ? NaN : 1 / 0 * (d ? -1 : 1);
                o += Math.pow(2, n),
                s -= c
            }
            return (d ? -1 : 1) * o * Math.pow(2, s - n)
        }
        ,
        r.write = function(e, t, r, n, i, s) {
            var o, a, u, c = 8 * s - i - 1, l = (1 << c) - 1, f = l >> 1, h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = n ? 0 : s - 1, p = n ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t),
            isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0,
            o = l) : (o = Math.floor(Math.log(t) / Math.LN2),
            t * (u = Math.pow(2, -o)) < 1 && (o--,
            u *= 2),
            (t += o + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 && (o++,
            u /= 2),
            o + f >= l ? (a = 0,
            o = l) : o + f >= 1 ? (a = (t * u - 1) * Math.pow(2, i),
            o += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, i),
            o = 0)); i >= 8; e[r + d] = 255 & a,
            d += p,
            a /= 256,
            i -= 8)
                ;
            for (o = o << i | a,
            c += i; c > 0; e[r + d] = 255 & o,
            d += p,
            o /= 256,
            c -= 8)
                ;
            e[r + d - p] |= 128 * g
        }
    }
    , {}],
    71: [function(e, t, r) {
        "function" == typeof Object.create ? t.exports = function(e, t) {
            t && (e.super_ = t,
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        }
        : t.exports = function(e, t) {
            if (t) {
                e.super_ = t;
                var r = function() {};
                r.prototype = t.prototype,
                e.prototype = new r,
                e.prototype.constructor = e
            }
        }
    }
    , {}],
    72: [function(e, t, r) {
        function n(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
        /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
        t.exports = function(e) {
            return null != e && (n(e) || function(e) {
                return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
            }(e) || !!e._isBuffer)
        }
    }
    , {}],
    73: [function(e, t, r) {
        "use strict";
        const n = e=>null !== e && "object" == typeof e && "function" == typeof e.pipe;
        n.writable = e=>n(e) && !1 !== e.writable && "function" == typeof e._write && "object" == typeof e._writableState,
        n.readable = e=>n(e) && !1 !== e.readable && "function" == typeof e._read && "object" == typeof e._readableState,
        n.duplex = e=>n.writable(e) && n.readable(e),
        n.transform = e=>n.duplex(e) && "function" == typeof e._transform && "object" == typeof e._transformState,
        t.exports = n
    }
    , {}],
    74: [function(e, t, r) {
        var n = {}.toString;
        t.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    }
    , {}],
    75: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.JsonRpcEngine = void 0;
        const i = n(e("@metamask/safe-event-emitter"))
          , s = e("eth-rpc-errors");
        class o extends i.default {
            constructor() {
                super(),
                this._middleware = []
            }
            push(e) {
                this._middleware.push(e)
            }
            handle(e, t) {
                if (t && "function" != typeof t)
                    throw new Error('"callback" must be a function if provided.');
                return Array.isArray(e) ? t ? this._handleBatch(e, t) : this._handleBatch(e) : t ? this._handle(e, t) : this._promiseHandle(e)
            }
            asMiddleware() {
                return async(e,t,r,n)=>{
                    try {
                        const [i,s,a] = await o._runAllMiddleware(e, t, this._middleware);
                        return s ? (await o._runReturnHandlers(a),
                        n(i)) : r((async e=>{
                            try {
                                await o._runReturnHandlers(a)
                            } catch (t) {
                                return e(t)
                            }
                            return e()
                        }
                        ))
                    } catch (e) {
                        return n(e)
                    }
                }
            }
            async _handleBatch(e, t) {
                try {
                    const r = await Promise.all(e.map(this._promiseHandle.bind(this)));
                    return t ? t(null, r) : r
                } catch (e) {
                    if (t)
                        return t(e);
                    throw e
                }
            }
            _promiseHandle(e) {
                return new Promise((t=>{
                    this._handle(e, ((e,r)=>{
                        t(r)
                    }
                    ))
                }
                ))
            }
            async _handle(e, t) {
                if (!e || Array.isArray(e) || "object" != typeof e) {
                    const r = new s.EthereumRpcError(s.errorCodes.rpc.invalidRequest,"Requests must be plain objects. Received: " + typeof e,{
                        request: e
                    });
                    return t(r, {
                        id: void 0,
                        jsonrpc: "2.0",
                        error: r
                    })
                }
                if ("string" != typeof e.method) {
                    const r = new s.EthereumRpcError(s.errorCodes.rpc.invalidRequest,"Must specify a string method. Received: " + typeof e.method,{
                        request: e
                    });
                    return t(r, {
                        id: e.id,
                        jsonrpc: "2.0",
                        error: r
                    })
                }
                const r = Object.assign({}, e)
                  , n = {
                    id: r.id,
                    jsonrpc: r.jsonrpc
                };
                let i = null;
                try {
                    await this._processRequest(r, n)
                } catch (e) {
                    i = e
                }
                return i && (delete n.result,
                n.error || (n.error = s.serializeError(i))),
                t(i, n)
            }
            async _processRequest(e, t) {
                const [r,n,i] = await o._runAllMiddleware(e, t, this._middleware);
                if (o._checkForCompletion(e, t, n),
                await o._runReturnHandlers(i),
                r)
                    throw r
            }
            static async _runAllMiddleware(e, t, r) {
                const n = [];
                let i = null
                  , s = !1;
                for (const a of r)
                    if ([i,s] = await o._runMiddleware(e, t, a, n),
                    s)
                        break;
                return [i, s, n.reverse()]
            }
            static _runMiddleware(e, t, r, n) {
                return new Promise((i=>{
                    const o = e=>{
                        const r = e || t.error;
                        r && (t.error = s.serializeError(r)),
                        i([r, !0])
                    }
                      , u = r=>{
                        t.error ? o(t.error) : (r && ("function" != typeof r && o(new s.EthereumRpcError(s.errorCodes.rpc.internal,`JsonRpcEngine: "next" return handlers must be functions. Received "${typeof r}" for request:\n ${a(e)}`,{
                            request: e
                        })),
                        n.push(r)),
                        i([null, !1]))
                    }
                    ;
                    try {
                        r(e, t, u, o)
                    } catch (e) {
                        o(e)
                    }
                }
                ))
            }
            static async _runReturnHandlers(e) {
                for (const t of e)
                    await new Promise(((e,r)=>{
                        t((t=>t ? r(t) : e()))
                    }
                    ))
            }
            static _checkForCompletion(e, t, r) {
                if (!("result"in t) && !("error"in t))
                    throw new s.EthereumRpcError(s.errorCodes.rpc.internal,`JsonRpcEngine: Response has no error or result for request:\n ${a(e)}`,{
                        request: e
                    });
                if (!r)
                    throw new s.EthereumRpcError(s.errorCodes.rpc.internal,`JsonRpcEngine: Nothing ended request:\n ${a(e)}`,{
                        request: e
                    })
            }
        }
        function a(e) {
            return JSON.stringify(e, null, 2)
        }
        r.JsonRpcEngine = o
    }
    , {
        "@metamask/safe-event-emitter": 36,
        "eth-rpc-errors": 67
    }],
    76: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createAsyncMiddleware = void 0,
        r.createAsyncMiddleware = function(e) {
            return async(t,r,n,i)=>{
                let s;
                const o = new Promise((e=>{
                    s = e
                }
                ));
                let a = null
                  , u = !1;
                const c = async()=>{
                    u = !0,
                    n((e=>{
                        a = e,
                        s()
                    }
                    )),
                    await o
                }
                ;
                try {
                    await e(t, r, c),
                    u ? (await o,
                    a(null)) : i(null)
                } catch (e) {
                    a ? a(e) : i(e)
                }
            }
        }
    }
    , {}],
    77: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createScaffoldMiddleware = void 0,
        r.createScaffoldMiddleware = function(e) {
            return (t,r,n,i)=>{
                const s = e[t.method];
                return void 0 === s ? n() : "function" == typeof s ? s(t, r, n, i) : (r.result = s,
                i())
            }
        }
    }
    , {}],
    78: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.getUniqueId = void 0;
        const n = 4294967295;
        let i = Math.floor(Math.random() * n);
        r.getUniqueId = function() {
            return i = (i + 1) % n,
            i
        }
    }
    , {}],
    79: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createIdRemapMiddleware = void 0;
        const n = e("./getUniqueId");
        r.createIdRemapMiddleware = function() {
            return (e,t,r,i)=>{
                const s = e.id
                  , o = n.getUniqueId();
                e.id = o,
                t.id = o,
                r((r=>{
                    e.id = s,
                    t.id = s,
                    r()
                }
                ))
            }
        }
    }
    , {
        "./getUniqueId": 78
    }],
    80: [function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r),
            Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, n) {
            void 0 === n && (n = r),
            e[n] = t[r]
        }
        )
          , i = this && this.__exportStar || function(e, t) {
            for (var r in e)
                "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        i(e("./idRemapMiddleware"), r),
        i(e("./createAsyncMiddleware"), r),
        i(e("./createScaffoldMiddleware"), r),
        i(e("./getUniqueId"), r),
        i(e("./JsonRpcEngine"), r),
        i(e("./mergeMiddleware"), r)
    }
    , {
        "./JsonRpcEngine": 75,
        "./createAsyncMiddleware": 76,
        "./createScaffoldMiddleware": 77,
        "./getUniqueId": 78,
        "./idRemapMiddleware": 79,
        "./mergeMiddleware": 81
    }],
    81: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.mergeMiddleware = void 0;
        const n = e("./JsonRpcEngine");
        r.mergeMiddleware = function(e) {
            const t = new n.JsonRpcEngine;
            return e.forEach((e=>t.push(e))),
            t.asMiddleware()
        }
    }
    , {
        "./JsonRpcEngine": 75
    }],
    82: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const n = e("readable-stream");
        r.default = function(e) {
            if (!e || !e.engine)
                throw new Error("Missing engine parameter!");
            const {engine: t} = e
              , r = new n.Duplex({
                objectMode: !0,
                read: ()=>{}
                ,
                write: function(e, n, i) {
                    t.handle(e, ((e,t)=>{
                        r.push(t)
                    }
                    )),
                    i()
                }
            });
            return t.on && t.on("notification", (e=>{
                r.push(e)
            }
            )),
            r
        }
    }
    , {
        "readable-stream": 101
    }],
    83: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const i = n(e("@metamask/safe-event-emitter"))
          , s = e("readable-stream");
        r.default = function(e={}) {
            const t = {}
              , r = new s.Duplex({
                objectMode: !0,
                read: ()=>{}
                ,
                write: function(r, i, s) {
                    let a = null;
                    try {
                        !r.id ? function(r) {
                            (null == e ? void 0 : e.retryOnMessage) && r.method === e.retryOnMessage && Object.values(t).forEach((({req: e, retryCount: r=0})=>{
                                if (e.id) {
                                    if (r >= 3)
                                        throw new Error(`StreamMiddleware - Retry limit exceeded for request id "${e.id}"`);
                                    t[e.id].retryCount = r + 1,
                                    o(e)
                                }
                            }
                            ));
                            n.emit("notification", r)
                        }(r) : function(e) {
                            const r = t[e.id];
                            if (!r)
                                return void console.warn(`StreamMiddleware - Unknown response id "${e.id}"`);
                            delete t[e.id],
                            Object.assign(r.res, e),
                            setTimeout(r.end)
                        }(r)
                    } catch (e) {
                        a = e
                    }
                    s(a)
                }
            })
              , n = new i.default;
            return {
                events: n,
                middleware: (e,r,n,i)=>{
                    o(e),
                    t[e.id] = {
                        req: e,
                        res: r,
                        next: n,
                        end: i
                    }
                }
                ,
                stream: r
            };
            function o(e) {
                r.push(e)
            }
        }
    }
    , {
        "@metamask/safe-event-emitter": 36,
        "readable-stream": 101
    }],
    84: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createStreamMiddleware = r.createEngineStream = void 0;
        const i = n(e("./createEngineStream"));
        r.createEngineStream = i.default;
        const s = n(e("./createStreamMiddleware"));
        r.createStreamMiddleware = s.default
    }
    , {
        "./createEngineStream": 82,
        "./createStreamMiddleware": 83
    }],
    85: [function(e, t, r) {
        !function(e, r) {
            "use strict";
            "function" == typeof define && define.amd ? define(r) : "object" == typeof t && t.exports ? t.exports = r() : e.log = r()
        }(this, (function() {
            "use strict";
            var e = function() {}
              , t = "undefined"
              , r = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent)
              , n = ["trace", "debug", "info", "warn", "error"];
            function i(e, t) {
                var r = e[t];
                if ("function" == typeof r.bind)
                    return r.bind(e);
                try {
                    return Function.prototype.bind.call(r, e)
                } catch (t) {
                    return function() {
                        return Function.prototype.apply.apply(r, [e, arguments])
                    }
                }
            }
            function s() {
                console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])),
                console.trace && console.trace()
            }
            function o(t, r) {
                for (var i = 0; i < n.length; i++) {
                    var s = n[i];
                    this[s] = i < t ? e : this.methodFactory(s, t, r)
                }
                this.log = this.debug
            }
            function a(e, r, n) {
                return function() {
                    typeof console !== t && (o.call(this, r, n),
                    this[e].apply(this, arguments))
                }
            }
            function u(n, o, u) {
                return function(n) {
                    return "debug" === n && (n = "log"),
                    typeof console !== t && ("trace" === n && r ? s : void 0 !== console[n] ? i(console, n) : void 0 !== console.log ? i(console, "log") : e)
                }(n) || a.apply(this, arguments)
            }
            function c(e, r, i) {
                var s, a = this;
                r = null == r ? "WARN" : r;
                var c = "loglevel";
                function l() {
                    var e;
                    if (typeof window !== t && c) {
                        try {
                            e = window.localStorage[c]
                        } catch (e) {}
                        if (typeof e === t)
                            try {
                                var r = window.document.cookie
                                  , n = r.indexOf(encodeURIComponent(c) + "=");
                                -1 !== n && (e = /^([^;]+)/.exec(r.slice(n))[1])
                            } catch (e) {}
                        return void 0 === a.levels[e] && (e = void 0),
                        e
                    }
                }
                "string" == typeof e ? c += ":" + e : "symbol" == typeof e && (c = void 0),
                a.name = e,
                a.levels = {
                    TRACE: 0,
                    DEBUG: 1,
                    INFO: 2,
                    WARN: 3,
                    ERROR: 4,
                    SILENT: 5
                },
                a.methodFactory = i || u,
                a.getLevel = function() {
                    return s
                }
                ,
                a.setLevel = function(r, i) {
                    if ("string" == typeof r && void 0 !== a.levels[r.toUpperCase()] && (r = a.levels[r.toUpperCase()]),
                    !("number" == typeof r && r >= 0 && r <= a.levels.SILENT))
                        throw "log.setLevel() called with invalid level: " + r;
                    if (s = r,
                    !1 !== i && function(e) {
                        var r = (n[e] || "silent").toUpperCase();
                        if (typeof window !== t && c) {
                            try {
                                return void (window.localStorage[c] = r)
                            } catch (e) {}
                            try {
                                window.document.cookie = encodeURIComponent(c) + "=" + r + ";"
                            } catch (e) {}
                        }
                    }(r),
                    o.call(a, r, e),
                    typeof console === t && r < a.levels.SILENT)
                        return "No console available for logging"
                }
                ,
                a.setDefaultLevel = function(e) {
                    r = e,
                    l() || a.setLevel(e, !1)
                }
                ,
                a.resetLevel = function() {
                    a.setLevel(r, !1),
                    function() {
                        if (typeof window !== t && c) {
                            try {
                                return void window.localStorage.removeItem(c)
                            } catch (e) {}
                            try {
                                window.document.cookie = encodeURIComponent(c) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                            } catch (e) {}
                        }
                    }()
                }
                ,
                a.enableAll = function(e) {
                    a.setLevel(a.levels.TRACE, e)
                }
                ,
                a.disableAll = function(e) {
                    a.setLevel(a.levels.SILENT, e)
                }
                ;
                var f = l();
                null == f && (f = r),
                a.setLevel(f, !1)
            }
            var l = new c
              , f = {};
            l.getLogger = function(e) {
                if ("symbol" != typeof e && "string" != typeof e || "" === e)
                    throw new TypeError("You must supply a name when creating a logger.");
                var t = f[e];
                return t || (t = f[e] = new c(e,l.getLevel(),l.methodFactory)),
                t
            }
            ;
            var h = typeof window !== t ? window.log : void 0;
            return l.noConflict = function() {
                return typeof window !== t && window.log === l && (window.log = h),
                l
            }
            ,
            l.getLoggers = function() {
                return f
            }
            ,
            l.default = l,
            l
        }
        ))
    }
    , {}],
    86: [function(e, t, r) {
        "use strict";
        const n = e("yallist")
          , i = Symbol("max")
          , s = Symbol("length")
          , o = Symbol("lengthCalculator")
          , a = Symbol("allowStale")
          , u = Symbol("maxAge")
          , c = Symbol("dispose")
          , l = Symbol("noDisposeOnSet")
          , f = Symbol("lruList")
          , h = Symbol("cache")
          , d = Symbol("updateAgeOnGet")
          , p = ()=>1;
        const g = (e,t,r)=>{
            const n = e[h].get(t);
            if (n) {
                const t = n.value;
                if (m(e, t)) {
                    if (v(e, n),
                    !e[a])
                        return
                } else
                    r && (e[d] && (n.value.now = Date.now()),
                    e[f].unshiftNode(n));
                return t.value
            }
        }
          , m = (e,t)=>{
            if (!t || !t.maxAge && !e[u])
                return !1;
            const r = Date.now() - t.now;
            return t.maxAge ? r > t.maxAge : e[u] && r > e[u]
        }
          , y = e=>{
            if (e[s] > e[i])
                for (let t = e[f].tail; e[s] > e[i] && null !== t; ) {
                    const r = t.prev;
                    v(e, t),
                    t = r
                }
        }
          , v = (e,t)=>{
            if (t) {
                const r = t.value;
                e[c] && e[c](r.key, r.value),
                e[s] -= r.length,
                e[h].delete(r.key),
                e[f].removeNode(t)
            }
        }
        ;
        class b {
            constructor(e, t, r, n, i) {
                this.key = e,
                this.value = t,
                this.length = r,
                this.now = n,
                this.maxAge = i || 0
            }
        }
        const w = (e,t,r,n)=>{
            let i = r.value;
            m(e, i) && (v(e, r),
            e[a] || (i = void 0)),
            i && t.call(n, i.value, i.key, e)
        }
        ;
        t.exports = class {
            constructor(e) {
                if ("number" == typeof e && (e = {
                    max: e
                }),
                e || (e = {}),
                e.max && ("number" != typeof e.max || e.max < 0))
                    throw new TypeError("max must be a non-negative number");
                this[i] = e.max || 1 / 0;
                const t = e.length || p;
                if (this[o] = "function" != typeof t ? p : t,
                this[a] = e.stale || !1,
                e.maxAge && "number" != typeof e.maxAge)
                    throw new TypeError("maxAge must be a number");
                this[u] = e.maxAge || 0,
                this[c] = e.dispose,
                this[l] = e.noDisposeOnSet || !1,
                this[d] = e.updateAgeOnGet || !1,
                this.reset()
            }
            set max(e) {
                if ("number" != typeof e || e < 0)
                    throw new TypeError("max must be a non-negative number");
                this[i] = e || 1 / 0,
                y(this)
            }
            get max() {
                return this[i]
            }
            set allowStale(e) {
                this[a] = !!e
            }
            get allowStale() {
                return this[a]
            }
            set maxAge(e) {
                if ("number" != typeof e)
                    throw new TypeError("maxAge must be a non-negative number");
                this[u] = e,
                y(this)
            }
            get maxAge() {
                return this[u]
            }
            set lengthCalculator(e) {
                "function" != typeof e && (e = p),
                e !== this[o] && (this[o] = e,
                this[s] = 0,
                this[f].forEach((e=>{
                    e.length = this[o](e.value, e.key),
                    this[s] += e.length
                }
                ))),
                y(this)
            }
            get lengthCalculator() {
                return this[o]
            }
            get length() {
                return this[s]
            }
            get itemCount() {
                return this[f].length
            }
            rforEach(e, t) {
                t = t || this;
                for (let r = this[f].tail; null !== r; ) {
                    const n = r.prev;
                    w(this, e, r, t),
                    r = n
                }
            }
            forEach(e, t) {
                t = t || this;
                for (let r = this[f].head; null !== r; ) {
                    const n = r.next;
                    w(this, e, r, t),
                    r = n
                }
            }
            keys() {
                return this[f].toArray().map((e=>e.key))
            }
            values() {
                return this[f].toArray().map((e=>e.value))
            }
            reset() {
                this[c] && this[f] && this[f].length && this[f].forEach((e=>this[c](e.key, e.value))),
                this[h] = new Map,
                this[f] = new n,
                this[s] = 0
            }
            dump() {
                return this[f].map((e=>!m(this, e) && {
                    k: e.key,
                    v: e.value,
                    e: e.now + (e.maxAge || 0)
                })).toArray().filter((e=>e))
            }
            dumpLru() {
                return this[f]
            }
            set(e, t, r) {
                if ((r = r || this[u]) && "number" != typeof r)
                    throw new TypeError("maxAge must be a number");
                const n = r ? Date.now() : 0
                  , a = this[o](t, e);
                if (this[h].has(e)) {
                    if (a > this[i])
                        return v(this, this[h].get(e)),
                        !1;
                    const o = this[h].get(e).value;
                    return this[c] && (this[l] || this[c](e, o.value)),
                    o.now = n,
                    o.maxAge = r,
                    o.value = t,
                    this[s] += a - o.length,
                    o.length = a,
                    this.get(e),
                    y(this),
                    !0
                }
                const d = new b(e,t,a,n,r);
                return d.length > this[i] ? (this[c] && this[c](e, t),
                !1) : (this[s] += d.length,
                this[f].unshift(d),
                this[h].set(e, this[f].head),
                y(this),
                !0)
            }
            has(e) {
                if (!this[h].has(e))
                    return !1;
                const t = this[h].get(e).value;
                return !m(this, t)
            }
            get(e) {
                return g(this, e, !0)
            }
            peek(e) {
                return g(this, e, !1)
            }
            pop() {
                const e = this[f].tail;
                return e ? (v(this, e),
                e.value) : null
            }
            del(e) {
                v(this, this[h].get(e))
            }
            load(e) {
                this.reset();
                const t = Date.now();
                for (let r = e.length - 1; r >= 0; r--) {
                    const n = e[r]
                      , i = n.e || 0;
                    if (0 === i)
                        this.set(n.k, n.v);
                    else {
                        const e = i - t;
                        e > 0 && this.set(n.k, n.v, e)
                    }
                }
            }
            prune() {
                this[h].forEach(((e,t)=>g(this, t, !1)))
            }
        }
    }
    , {
        yallist: 151
    }],
    87: [function(e, t, r) {
        var n = e("wrappy");
        function i(e) {
            var t = function() {
                return t.called ? t.value : (t.called = !0,
                t.value = e.apply(this, arguments))
            };
            return t.called = !1,
            t
        }
        function s(e) {
            var t = function() {
                if (t.called)
                    throw new Error(t.onceError);
                return t.called = !0,
                t.value = e.apply(this, arguments)
            }
              , r = e.name || "Function wrapped with `once`";
            return t.onceError = r + " shouldn't be called more than once",
            t.called = !1,
            t
        }
        t.exports = n(i),
        t.exports.strict = n(s),
        i.proto = i((function() {
            Object.defineProperty(Function.prototype, "once", {
                value: function() {
                    return i(this)
                },
                configurable: !0
            }),
            Object.defineProperty(Function.prototype, "onceStrict", {
                value: function() {
                    return s(this)
                },
                configurable: !0
            })
        }
        ))
    }
    , {
        wrappy: 149
    }],
    88: [function(e, t, r) {
        (function(e) {
            (function() {
                "use strict";
                void 0 === e || !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = {
                    nextTick: function(t, r, n, i) {
                        if ("function" != typeof t)
                            throw new TypeError('"callback" argument must be a function');
                        var s, o, a = arguments.length;
                        switch (a) {
                        case 0:
                        case 1:
                            return e.nextTick(t);
                        case 2:
                            return e.nextTick((function() {
                                t.call(null, r)
                            }
                            ));
                        case 3:
                            return e.nextTick((function() {
                                t.call(null, r, n)
                            }
                            ));
                        case 4:
                            return e.nextTick((function() {
                                t.call(null, r, n, i)
                            }
                            ));
                        default:
                            for (s = new Array(a - 1),
                            o = 0; o < s.length; )
                                s[o++] = arguments[o];
                            return e.nextTick((function() {
                                t.apply(null, s)
                            }
                            ))
                        }
                    }
                } : t.exports = e
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        _process: 89
    }],
    89: [function(e, t, r) {
        var n, i, s = t.exports = {};
        function o() {
            throw new Error("setTimeout has not been defined")
        }
        function a() {
            throw new Error("clearTimeout has not been defined")
        }
        function u(e) {
            if (n === setTimeout)
                return setTimeout(e, 0);
            if ((n === o || !n) && setTimeout)
                return n = setTimeout,
                setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                n = o
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                i = a
            }
        }();
        var c, l = [], f = !1, h = -1;
        function d() {
            f && c && (f = !1,
            c.length ? l = c.concat(l) : h = -1,
            l.length && p())
        }
        function p() {
            if (!f) {
                var e = u(d);
                f = !0;
                for (var t = l.length; t; ) {
                    for (c = l,
                    l = []; ++h < t; )
                        c && c[h].run();
                    h = -1,
                    t = l.length
                }
                c = null,
                f = !1,
                function(e) {
                    if (i === clearTimeout)
                        return clearTimeout(e);
                    if ((i === a || !i) && clearTimeout)
                        return i = clearTimeout,
                        clearTimeout(e);
                    try {
                        return i(e)
                    } catch (t) {
                        try {
                            return i.call(null, e)
                        } catch (t) {
                            return i.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function g(e, t) {
            this.fun = e,
            this.array = t
        }
        function m() {}
        s.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
            l.push(new g(e,t)),
            1 !== l.length || f || u(p)
        }
        ,
        g.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        s.title = "browser",
        s.browser = !0,
        s.env = {},
        s.argv = [],
        s.version = "",
        s.versions = {},
        s.on = m,
        s.addListener = m,
        s.once = m,
        s.off = m,
        s.removeListener = m,
        s.removeAllListeners = m,
        s.emit = m,
        s.prependListener = m,
        s.prependOnceListener = m,
        s.listeners = function(e) {
            return []
        }
        ,
        s.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        s.cwd = function() {
            return "/"
        }
        ,
        s.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        s.umask = function() {
            return 0
        }
    }
    , {}],
    90: [function(e, t, r) {
        (function(r) {
            (function() {
                var n = e("once")
                  , i = e("end-of-stream")
                  , s = e("fs")
                  , o = function() {}
                  , a = /^v?\.0/.test(r.version)
                  , u = function(e) {
                    return "function" == typeof e
                }
                  , c = function(e, t, r, c) {
                    c = n(c);
                    var l = !1;
                    e.on("close", (function() {
                        l = !0
                    }
                    )),
                    i(e, {
                        readable: t,
                        writable: r
                    }, (function(e) {
                        if (e)
                            return c(e);
                        l = !0,
                        c()
                    }
                    ));
                    var f = !1;
                    return function(t) {
                        if (!l && !f)
                            return f = !0,
                            function(e) {
                                return !!a && !!s && (e instanceof (s.ReadStream || o) || e instanceof (s.WriteStream || o)) && u(e.close)
                            }(e) ? e.close(o) : function(e) {
                                return e.setHeader && u(e.abort)
                            }(e) ? e.abort() : u(e.destroy) ? e.destroy() : void c(t || new Error("stream was destroyed"))
                    }
                }
                  , l = function(e) {
                    e()
                }
                  , f = function(e, t) {
                    return e.pipe(t)
                };
                t.exports = function() {
                    var e, t = Array.prototype.slice.call(arguments), r = u(t[t.length - 1] || o) && t.pop() || o;
                    if (Array.isArray(t[0]) && (t = t[0]),
                    t.length < 2)
                        throw new Error("pump requires two streams per minimum");
                    var n = t.map((function(i, s) {
                        var o = s < t.length - 1;
                        return c(i, o, s > 0, (function(t) {
                            e || (e = t),
                            t && n.forEach(l),
                            o || (n.forEach(l),
                            r(e))
                        }
                        ))
                    }
                    ));
                    return t.reduce(f)
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        _process: 89,
        "end-of-stream": 63,
        fs: 56,
        once: 87
    }],
    91: [function(e, t, r) {
        "use strict";
        var n = e("process-nextick-args")
          , i = Object.keys || function(e) {
            var t = [];
            for (var r in e)
                t.push(r);
            return t
        }
        ;
        t.exports = f;
        var s = Object.create(e("core-util-is"));
        s.inherits = e("inherits");
        var o = e("./_stream_readable")
          , a = e("./_stream_writable");
        s.inherits(f, o);
        for (var u = i(a.prototype), c = 0; c < u.length; c++) {
            var l = u[c];
            f.prototype[l] || (f.prototype[l] = a.prototype[l])
        }
        function f(e) {
            if (!(this instanceof f))
                return new f(e);
            o.call(this, e),
            a.call(this, e),
            e && !1 === e.readable && (this.readable = !1),
            e && !1 === e.writable && (this.writable = !1),
            this.allowHalfOpen = !0,
            e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
            this.once("end", h)
        }
        function h() {
            this.allowHalfOpen || this._writableState.ended || n.nextTick(d, this)
        }
        function d(e) {
            e.end()
        }
        Object.defineProperty(f.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }),
        Object.defineProperty(f.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
            },
            set: function(e) {
                void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e,
                this._writableState.destroyed = e)
            }
        }),
        f.prototype._destroy = function(e, t) {
            this.push(null),
            this.end(),
            n.nextTick(t, e)
        }
    }
    , {
        "./_stream_readable": 93,
        "./_stream_writable": 95,
        "core-util-is": 59,
        inherits: 71,
        "process-nextick-args": 88
    }],
    92: [function(e, t, r) {
        "use strict";
        t.exports = s;
        var n = e("./_stream_transform")
          , i = Object.create(e("core-util-is"));
        function s(e) {
            if (!(this instanceof s))
                return new s(e);
            n.call(this, e)
        }
        i.inherits = e("inherits"),
        i.inherits(s, n),
        s.prototype._transform = function(e, t, r) {
            r(null, e)
        }
    }
    , {
        "./_stream_transform": 94,
        "core-util-is": 59,
        inherits: 71
    }],
    93: [function(e, t, r) {
        (function(r, n) {
            (function() {
                "use strict";
                var i = e("process-nextick-args");
                t.exports = b;
                var s, o = e("isarray");
                b.ReadableState = v;
                e("events").EventEmitter;
                var a = function(e, t) {
                    return e.listeners(t).length
                }
                  , u = e("./internal/streams/stream")
                  , c = e("safe-buffer").Buffer
                  , l = n.Uint8Array || function() {}
                ;
                var f = Object.create(e("core-util-is"));
                f.inherits = e("inherits");
                var h = e("util")
                  , d = void 0;
                d = h && h.debuglog ? h.debuglog("stream") : function() {}
                ;
                var p, g = e("./internal/streams/BufferList"), m = e("./internal/streams/destroy");
                f.inherits(b, u);
                var y = ["error", "close", "destroy", "pause", "resume"];
                function v(t, r) {
                    t = t || {};
                    var n = r instanceof (s = s || e("./_stream_duplex"));
                    this.objectMode = !!t.objectMode,
                    n && (this.objectMode = this.objectMode || !!t.readableObjectMode);
                    var i = t.highWaterMark
                      , o = t.readableHighWaterMark
                      , a = this.objectMode ? 16 : 16384;
                    this.highWaterMark = i || 0 === i ? i : n && (o || 0 === o) ? o : a,
                    this.highWaterMark = Math.floor(this.highWaterMark),
                    this.buffer = new g,
                    this.length = 0,
                    this.pipes = null,
                    this.pipesCount = 0,
                    this.flowing = null,
                    this.ended = !1,
                    this.endEmitted = !1,
                    this.reading = !1,
                    this.sync = !0,
                    this.needReadable = !1,
                    this.emittedReadable = !1,
                    this.readableListening = !1,
                    this.resumeScheduled = !1,
                    this.destroyed = !1,
                    this.defaultEncoding = t.defaultEncoding || "utf8",
                    this.awaitDrain = 0,
                    this.readingMore = !1,
                    this.decoder = null,
                    this.encoding = null,
                    t.encoding && (p || (p = e("string_decoder/").StringDecoder),
                    this.decoder = new p(t.encoding),
                    this.encoding = t.encoding)
                }
                function b(t) {
                    if (s = s || e("./_stream_duplex"),
                    !(this instanceof b))
                        return new b(t);
                    this._readableState = new v(t,this),
                    this.readable = !0,
                    t && ("function" == typeof t.read && (this._read = t.read),
                    "function" == typeof t.destroy && (this._destroy = t.destroy)),
                    u.call(this)
                }
                function w(e, t, r, n, i) {
                    var s, o = e._readableState;
                    null === t ? (o.reading = !1,
                    function(e, t) {
                        if (t.ended)
                            return;
                        if (t.decoder) {
                            var r = t.decoder.end();
                            r && r.length && (t.buffer.push(r),
                            t.length += t.objectMode ? 1 : r.length)
                        }
                        t.ended = !0,
                        R(e)
                    }(e, o)) : (i || (s = function(e, t) {
                        var r;
                        n = t,
                        c.isBuffer(n) || n instanceof l || "string" == typeof t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk"));
                        var n;
                        return r
                    }(o, t)),
                    s ? e.emit("error", s) : o.objectMode || t && t.length > 0 ? ("string" == typeof t || o.objectMode || Object.getPrototypeOf(t) === c.prototype || (t = function(e) {
                        return c.from(e)
                    }(t)),
                    n ? o.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : _(e, o, t, !0) : o.ended ? e.emit("error", new Error("stream.push() after EOF")) : (o.reading = !1,
                    o.decoder && !r ? (t = o.decoder.write(t),
                    o.objectMode || 0 !== t.length ? _(e, o, t, !1) : x(e, o)) : _(e, o, t, !1))) : n || (o.reading = !1));
                    return function(e) {
                        return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
                    }(o)
                }
                function _(e, t, r, n) {
                    t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r),
                    e.read(0)) : (t.length += t.objectMode ? 1 : r.length,
                    n ? t.buffer.unshift(r) : t.buffer.push(r),
                    t.needReadable && R(e)),
                    x(e, t)
                }
                Object.defineProperty(b.prototype, "destroyed", {
                    get: function() {
                        return void 0 !== this._readableState && this._readableState.destroyed
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.destroyed = e)
                    }
                }),
                b.prototype.destroy = m.destroy,
                b.prototype._undestroy = m.undestroy,
                b.prototype._destroy = function(e, t) {
                    this.push(null),
                    t(e)
                }
                ,
                b.prototype.push = function(e, t) {
                    var r, n = this._readableState;
                    return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = c.from(e, t),
                    t = ""),
                    r = !0),
                    w(this, e, t, !1, r)
                }
                ,
                b.prototype.unshift = function(e) {
                    return w(this, e, null, !0, !1)
                }
                ,
                b.prototype.isPaused = function() {
                    return !1 === this._readableState.flowing
                }
                ,
                b.prototype.setEncoding = function(t) {
                    return p || (p = e("string_decoder/").StringDecoder),
                    this._readableState.decoder = new p(t),
                    this._readableState.encoding = t,
                    this
                }
                ;
                var E = 8388608;
                function S(e, t) {
                    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                        return e >= E ? e = E : (e--,
                        e |= e >>> 1,
                        e |= e >>> 2,
                        e |= e >>> 4,
                        e |= e >>> 8,
                        e |= e >>> 16,
                        e++),
                        e
                    }(e)),
                    e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
                    0))
                }
                function R(e) {
                    var t = e._readableState;
                    t.needReadable = !1,
                    t.emittedReadable || (d("emitReadable", t.flowing),
                    t.emittedReadable = !0,
                    t.sync ? i.nextTick(M, e) : M(e))
                }
                function M(e) {
                    d("emit readable"),
                    e.emit("readable"),
                    I(e)
                }
                function x(e, t) {
                    t.readingMore || (t.readingMore = !0,
                    i.nextTick(C, e, t))
                }
                function C(e, t) {
                    for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (d("maybeReadMore read 0"),
                    e.read(0),
                    r !== t.length); )
                        r = t.length;
                    t.readingMore = !1
                }
                function k(e) {
                    d("readable nexttick read 0"),
                    e.read(0)
                }
                function O(e, t) {
                    t.reading || (d("resume read 0"),
                    e.read(0)),
                    t.resumeScheduled = !1,
                    t.awaitDrain = 0,
                    e.emit("resume"),
                    I(e),
                    t.flowing && !t.reading && e.read(0)
                }
                function I(e) {
                    var t = e._readableState;
                    for (d("flow", t.flowing); t.flowing && null !== e.read(); )
                        ;
                }
                function j(e, t) {
                    return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length),
                    t.buffer.clear()) : r = function(e, t, r) {
                        var n;
                        e < t.head.data.length ? (n = t.head.data.slice(0, e),
                        t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? function(e, t) {
                            var r = t.head
                              , n = 1
                              , i = r.data;
                            e -= i.length;
                            for (; r = r.next; ) {
                                var s = r.data
                                  , o = e > s.length ? s.length : e;
                                if (o === s.length ? i += s : i += s.slice(0, e),
                                0 === (e -= o)) {
                                    o === s.length ? (++n,
                                    r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r,
                                    r.data = s.slice(o));
                                    break
                                }
                                ++n
                            }
                            return t.length -= n,
                            i
                        }(e, t) : function(e, t) {
                            var r = c.allocUnsafe(e)
                              , n = t.head
                              , i = 1;
                            n.data.copy(r),
                            e -= n.data.length;
                            for (; n = n.next; ) {
                                var s = n.data
                                  , o = e > s.length ? s.length : e;
                                if (s.copy(r, r.length - e, 0, o),
                                0 === (e -= o)) {
                                    o === s.length ? (++i,
                                    n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n,
                                    n.data = s.slice(o));
                                    break
                                }
                                ++i
                            }
                            return t.length -= i,
                            r
                        }(e, t);
                        return n
                    }(e, t.buffer, t.decoder),
                    r);
                    var r
                }
                function A(e) {
                    var t = e._readableState;
                    if (t.length > 0)
                        throw new Error('"endReadable()" called on non-empty stream');
                    t.endEmitted || (t.ended = !0,
                    i.nextTick(T, t, e))
                }
                function T(e, t) {
                    e.endEmitted || 0 !== e.length || (e.endEmitted = !0,
                    t.readable = !1,
                    t.emit("end"))
                }
                function P(e, t) {
                    for (var r = 0, n = e.length; r < n; r++)
                        if (e[r] === t)
                            return r;
                    return -1
                }
                b.prototype.read = function(e) {
                    d("read", e),
                    e = parseInt(e, 10);
                    var t = this._readableState
                      , r = e;
                    if (0 !== e && (t.emittedReadable = !1),
                    0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
                        return d("read: emitReadable", t.length, t.ended),
                        0 === t.length && t.ended ? A(this) : R(this),
                        null;
                    if (0 === (e = S(e, t)) && t.ended)
                        return 0 === t.length && A(this),
                        null;
                    var n, i = t.needReadable;
                    return d("need readable", i),
                    (0 === t.length || t.length - e < t.highWaterMark) && d("length less than watermark", i = !0),
                    t.ended || t.reading ? d("reading or ended", i = !1) : i && (d("do read"),
                    t.reading = !0,
                    t.sync = !0,
                    0 === t.length && (t.needReadable = !0),
                    this._read(t.highWaterMark),
                    t.sync = !1,
                    t.reading || (e = S(r, t))),
                    null === (n = e > 0 ? j(e, t) : null) ? (t.needReadable = !0,
                    e = 0) : t.length -= e,
                    0 === t.length && (t.ended || (t.needReadable = !0),
                    r !== e && t.ended && A(this)),
                    null !== n && this.emit("data", n),
                    n
                }
                ,
                b.prototype._read = function(e) {
                    this.emit("error", new Error("_read() is not implemented"))
                }
                ,
                b.prototype.pipe = function(e, t) {
                    var n = this
                      , s = this._readableState;
                    switch (s.pipesCount) {
                    case 0:
                        s.pipes = e;
                        break;
                    case 1:
                        s.pipes = [s.pipes, e];
                        break;
                    default:
                        s.pipes.push(e)
                    }
                    s.pipesCount += 1,
                    d("pipe count=%d opts=%j", s.pipesCount, t);
                    var u = (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? l : b;
                    function c(t, r) {
                        d("onunpipe"),
                        t === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0,
                        d("cleanup"),
                        e.removeListener("close", y),
                        e.removeListener("finish", v),
                        e.removeListener("drain", f),
                        e.removeListener("error", m),
                        e.removeListener("unpipe", c),
                        n.removeListener("end", l),
                        n.removeListener("end", b),
                        n.removeListener("data", g),
                        h = !0,
                        !s.awaitDrain || e._writableState && !e._writableState.needDrain || f())
                    }
                    function l() {
                        d("onend"),
                        e.end()
                    }
                    s.endEmitted ? i.nextTick(u) : n.once("end", u),
                    e.on("unpipe", c);
                    var f = function(e) {
                        return function() {
                            var t = e._readableState;
                            d("pipeOnDrain", t.awaitDrain),
                            t.awaitDrain && t.awaitDrain--,
                            0 === t.awaitDrain && a(e, "data") && (t.flowing = !0,
                            I(e))
                        }
                    }(n);
                    e.on("drain", f);
                    var h = !1;
                    var p = !1;
                    function g(t) {
                        d("ondata"),
                        p = !1,
                        !1 !== e.write(t) || p || ((1 === s.pipesCount && s.pipes === e || s.pipesCount > 1 && -1 !== P(s.pipes, e)) && !h && (d("false write response, pause", n._readableState.awaitDrain),
                        n._readableState.awaitDrain++,
                        p = !0),
                        n.pause())
                    }
                    function m(t) {
                        d("onerror", t),
                        b(),
                        e.removeListener("error", m),
                        0 === a(e, "error") && e.emit("error", t)
                    }
                    function y() {
                        e.removeListener("finish", v),
                        b()
                    }
                    function v() {
                        d("onfinish"),
                        e.removeListener("close", y),
                        b()
                    }
                    function b() {
                        d("unpipe"),
                        n.unpipe(e)
                    }
                    return n.on("data", g),
                    function(e, t, r) {
                        if ("function" == typeof e.prependListener)
                            return e.prependListener(t, r);
                        e._events && e._events[t] ? o(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                    }(e, "error", m),
                    e.once("close", y),
                    e.once("finish", v),
                    e.emit("pipe", n),
                    s.flowing || (d("pipe resume"),
                    n.resume()),
                    e
                }
                ,
                b.prototype.unpipe = function(e) {
                    var t = this._readableState
                      , r = {
                        hasUnpiped: !1
                    };
                    if (0 === t.pipesCount)
                        return this;
                    if (1 === t.pipesCount)
                        return e && e !== t.pipes || (e || (e = t.pipes),
                        t.pipes = null,
                        t.pipesCount = 0,
                        t.flowing = !1,
                        e && e.emit("unpipe", this, r)),
                        this;
                    if (!e) {
                        var n = t.pipes
                          , i = t.pipesCount;
                        t.pipes = null,
                        t.pipesCount = 0,
                        t.flowing = !1;
                        for (var s = 0; s < i; s++)
                            n[s].emit("unpipe", this, r);
                        return this
                    }
                    var o = P(t.pipes, e);
                    return -1 === o || (t.pipes.splice(o, 1),
                    t.pipesCount -= 1,
                    1 === t.pipesCount && (t.pipes = t.pipes[0]),
                    e.emit("unpipe", this, r)),
                    this
                }
                ,
                b.prototype.on = function(e, t) {
                    var r = u.prototype.on.call(this, e, t);
                    if ("data" === e)
                        !1 !== this._readableState.flowing && this.resume();
                    else if ("readable" === e) {
                        var n = this._readableState;
                        n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0,
                        n.emittedReadable = !1,
                        n.reading ? n.length && R(this) : i.nextTick(k, this))
                    }
                    return r
                }
                ,
                b.prototype.addListener = b.prototype.on,
                b.prototype.resume = function() {
                    var e = this._readableState;
                    return e.flowing || (d("resume"),
                    e.flowing = !0,
                    function(e, t) {
                        t.resumeScheduled || (t.resumeScheduled = !0,
                        i.nextTick(O, e, t))
                    }(this, e)),
                    this
                }
                ,
                b.prototype.pause = function() {
                    return d("call pause flowing=%j", this._readableState.flowing),
                    !1 !== this._readableState.flowing && (d("pause"),
                    this._readableState.flowing = !1,
                    this.emit("pause")),
                    this
                }
                ,
                b.prototype.wrap = function(e) {
                    var t = this
                      , r = this._readableState
                      , n = !1;
                    for (var i in e.on("end", (function() {
                        if (d("wrapped end"),
                        r.decoder && !r.ended) {
                            var e = r.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    }
                    )),
                    e.on("data", (function(i) {
                        (d("wrapped data"),
                        r.decoder && (i = r.decoder.write(i)),
                        r.objectMode && null == i) || (r.objectMode || i && i.length) && (t.push(i) || (n = !0,
                        e.pause()))
                    }
                    )),
                    e)
                        void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                            return function() {
                                return e[t].apply(e, arguments)
                            }
                        }(i));
                    for (var s = 0; s < y.length; s++)
                        e.on(y[s], this.emit.bind(this, y[s]));
                    return this._read = function(t) {
                        d("wrapped _read", t),
                        n && (n = !1,
                        e.resume())
                    }
                    ,
                    this
                }
                ,
                Object.defineProperty(b.prototype, "readableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.highWaterMark
                    }
                }),
                b._fromList = j
            }
            ).call(this)
        }
        ).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "./_stream_duplex": 91,
        "./internal/streams/BufferList": 96,
        "./internal/streams/destroy": 97,
        "./internal/streams/stream": 98,
        _process: 89,
        "core-util-is": 59,
        events: 58,
        inherits: 71,
        isarray: 74,
        "process-nextick-args": 88,
        "safe-buffer": 99,
        "string_decoder/": 100,
        util: 56
    }],
    94: [function(e, t, r) {
        "use strict";
        t.exports = o;
        var n = e("./_stream_duplex")
          , i = Object.create(e("core-util-is"));
        function s(e, t) {
            var r = this._transformState;
            r.transforming = !1;
            var n = r.writecb;
            if (!n)
                return this.emit("error", new Error("write callback called multiple times"));
            r.writechunk = null,
            r.writecb = null,
            null != t && this.push(t),
            n(e);
            var i = this._readableState;
            i.reading = !1,
            (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }
        function o(e) {
            if (!(this instanceof o))
                return new o(e);
            n.call(this, e),
            this._transformState = {
                afterTransform: s.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            },
            this._readableState.needReadable = !0,
            this._readableState.sync = !1,
            e && ("function" == typeof e.transform && (this._transform = e.transform),
            "function" == typeof e.flush && (this._flush = e.flush)),
            this.on("prefinish", a)
        }
        function a() {
            var e = this;
            "function" == typeof this._flush ? this._flush((function(t, r) {
                u(e, t, r)
            }
            )) : u(this, null, null)
        }
        function u(e, t, r) {
            if (t)
                return e.emit("error", t);
            if (null != r && e.push(r),
            e._writableState.length)
                throw new Error("Calling transform done when ws.length != 0");
            if (e._transformState.transforming)
                throw new Error("Calling transform done when still transforming");
            return e.push(null)
        }
        i.inherits = e("inherits"),
        i.inherits(o, n),
        o.prototype.push = function(e, t) {
            return this._transformState.needTransform = !1,
            n.prototype.push.call(this, e, t)
        }
        ,
        o.prototype._transform = function(e, t, r) {
            throw new Error("_transform() is not implemented")
        }
        ,
        o.prototype._write = function(e, t, r) {
            var n = this._transformState;
            if (n.writecb = r,
            n.writechunk = e,
            n.writeencoding = t,
            !n.transforming) {
                var i = this._readableState;
                (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }
        ,
        o.prototype._read = function(e) {
            var t = this._transformState;
            null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0,
            this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
        }
        ,
        o.prototype._destroy = function(e, t) {
            var r = this;
            n.prototype._destroy.call(this, e, (function(e) {
                t(e),
                r.emit("close")
            }
            ))
        }
    }
    , {
        "./_stream_duplex": 91,
        "core-util-is": 59,
        inherits: 71
    }],
    95: [function(e, t, r) {
        (function(r, n, i) {
            (function() {
                "use strict";
                var s = e("process-nextick-args");
                function o(e) {
                    var t = this;
                    this.next = null,
                    this.entry = null,
                    this.finish = function() {
                        !function(e, t, r) {
                            var n = e.entry;
                            e.entry = null;
                            for (; n; ) {
                                var i = n.callback;
                                t.pendingcb--,
                                i(r),
                                n = n.next
                            }
                            t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
                        }(t, e)
                    }
                }
                t.exports = v;
                var a, u = !r.browser && ["v0.10", "v0.9."].indexOf(r.version.slice(0, 5)) > -1 ? i : s.nextTick;
                v.WritableState = y;
                var c = Object.create(e("core-util-is"));
                c.inherits = e("inherits");
                var l = {
                    deprecate: e("util-deprecate")
                }
                  , f = e("./internal/streams/stream")
                  , h = e("safe-buffer").Buffer
                  , d = n.Uint8Array || function() {}
                ;
                var p, g = e("./internal/streams/destroy");
                function m() {}
                function y(t, r) {
                    a = a || e("./_stream_duplex"),
                    t = t || {};
                    var n = r instanceof a;
                    this.objectMode = !!t.objectMode,
                    n && (this.objectMode = this.objectMode || !!t.writableObjectMode);
                    var i = t.highWaterMark
                      , c = t.writableHighWaterMark
                      , l = this.objectMode ? 16 : 16384;
                    this.highWaterMark = i || 0 === i ? i : n && (c || 0 === c) ? c : l,
                    this.highWaterMark = Math.floor(this.highWaterMark),
                    this.finalCalled = !1,
                    this.needDrain = !1,
                    this.ending = !1,
                    this.ended = !1,
                    this.finished = !1,
                    this.destroyed = !1;
                    var f = !1 === t.decodeStrings;
                    this.decodeStrings = !f,
                    this.defaultEncoding = t.defaultEncoding || "utf8",
                    this.length = 0,
                    this.writing = !1,
                    this.corked = 0,
                    this.sync = !0,
                    this.bufferProcessing = !1,
                    this.onwrite = function(e) {
                        !function(e, t) {
                            var r = e._writableState
                              , n = r.sync
                              , i = r.writecb;
                            if (function(e) {
                                e.writing = !1,
                                e.writecb = null,
                                e.length -= e.writelen,
                                e.writelen = 0
                            }(r),
                            t)
                                !function(e, t, r, n, i) {
                                    --t.pendingcb,
                                    r ? (s.nextTick(i, n),
                                    s.nextTick(R, e, t),
                                    e._writableState.errorEmitted = !0,
                                    e.emit("error", n)) : (i(n),
                                    e._writableState.errorEmitted = !0,
                                    e.emit("error", n),
                                    R(e, t))
                                }(e, r, n, t, i);
                            else {
                                var o = E(r);
                                o || r.corked || r.bufferProcessing || !r.bufferedRequest || _(e, r),
                                n ? u(w, e, r, o, i) : w(e, r, o, i)
                            }
                        }(r, e)
                    }
                    ,
                    this.writecb = null,
                    this.writelen = 0,
                    this.bufferedRequest = null,
                    this.lastBufferedRequest = null,
                    this.pendingcb = 0,
                    this.prefinished = !1,
                    this.errorEmitted = !1,
                    this.bufferedRequestCount = 0,
                    this.corkedRequestsFree = new o(this)
                }
                function v(t) {
                    if (a = a || e("./_stream_duplex"),
                    !(p.call(v, this) || this instanceof a))
                        return new v(t);
                    this._writableState = new y(t,this),
                    this.writable = !0,
                    t && ("function" == typeof t.write && (this._write = t.write),
                    "function" == typeof t.writev && (this._writev = t.writev),
                    "function" == typeof t.destroy && (this._destroy = t.destroy),
                    "function" == typeof t.final && (this._final = t.final)),
                    f.call(this)
                }
                function b(e, t, r, n, i, s, o) {
                    t.writelen = n,
                    t.writecb = o,
                    t.writing = !0,
                    t.sync = !0,
                    r ? e._writev(i, t.onwrite) : e._write(i, s, t.onwrite),
                    t.sync = !1
                }
                function w(e, t, r, n) {
                    r || function(e, t) {
                        0 === t.length && t.needDrain && (t.needDrain = !1,
                        e.emit("drain"))
                    }(e, t),
                    t.pendingcb--,
                    n(),
                    R(e, t)
                }
                function _(e, t) {
                    t.bufferProcessing = !0;
                    var r = t.bufferedRequest;
                    if (e._writev && r && r.next) {
                        var n = t.bufferedRequestCount
                          , i = new Array(n)
                          , s = t.corkedRequestsFree;
                        s.entry = r;
                        for (var a = 0, u = !0; r; )
                            i[a] = r,
                            r.isBuf || (u = !1),
                            r = r.next,
                            a += 1;
                        i.allBuffers = u,
                        b(e, t, !0, t.length, i, "", s.finish),
                        t.pendingcb++,
                        t.lastBufferedRequest = null,
                        s.next ? (t.corkedRequestsFree = s.next,
                        s.next = null) : t.corkedRequestsFree = new o(t),
                        t.bufferedRequestCount = 0
                    } else {
                        for (; r; ) {
                            var c = r.chunk
                              , l = r.encoding
                              , f = r.callback;
                            if (b(e, t, !1, t.objectMode ? 1 : c.length, c, l, f),
                            r = r.next,
                            t.bufferedRequestCount--,
                            t.writing)
                                break
                        }
                        null === r && (t.lastBufferedRequest = null)
                    }
                    t.bufferedRequest = r,
                    t.bufferProcessing = !1
                }
                function E(e) {
                    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                }
                function S(e, t) {
                    e._final((function(r) {
                        t.pendingcb--,
                        r && e.emit("error", r),
                        t.prefinished = !0,
                        e.emit("prefinish"),
                        R(e, t)
                    }
                    ))
                }
                function R(e, t) {
                    var r = E(t);
                    return r && (!function(e, t) {
                        t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++,
                        t.finalCalled = !0,
                        s.nextTick(S, e, t)) : (t.prefinished = !0,
                        e.emit("prefinish")))
                    }(e, t),
                    0 === t.pendingcb && (t.finished = !0,
                    e.emit("finish"))),
                    r
                }
                c.inherits(v, f),
                y.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e; )
                        t.push(e),
                        e = e.next;
                    return t
                }
                ,
                function() {
                    try {
                        Object.defineProperty(y.prototype, "buffer", {
                            get: l.deprecate((function() {
                                return this.getBuffer()
                            }
                            ), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(),
                "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (p = Function.prototype[Symbol.hasInstance],
                Object.defineProperty(v, Symbol.hasInstance, {
                    value: function(e) {
                        return !!p.call(this, e) || this === v && (e && e._writableState instanceof y)
                    }
                })) : p = function(e) {
                    return e instanceof this
                }
                ,
                v.prototype.pipe = function() {
                    this.emit("error", new Error("Cannot pipe, not readable"))
                }
                ,
                v.prototype.write = function(e, t, r) {
                    var n, i = this._writableState, o = !1, a = !i.objectMode && (n = e,
                    h.isBuffer(n) || n instanceof d);
                    return a && !h.isBuffer(e) && (e = function(e) {
                        return h.from(e)
                    }(e)),
                    "function" == typeof t && (r = t,
                    t = null),
                    a ? t = "buffer" : t || (t = i.defaultEncoding),
                    "function" != typeof r && (r = m),
                    i.ended ? function(e, t) {
                        var r = new Error("write after end");
                        e.emit("error", r),
                        s.nextTick(t, r)
                    }(this, r) : (a || function(e, t, r, n) {
                        var i = !0
                          , o = !1;
                        return null === r ? o = new TypeError("May not write null values to stream") : "string" == typeof r || void 0 === r || t.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")),
                        o && (e.emit("error", o),
                        s.nextTick(n, o),
                        i = !1),
                        i
                    }(this, i, e, r)) && (i.pendingcb++,
                    o = function(e, t, r, n, i, s) {
                        if (!r) {
                            var o = function(e, t, r) {
                                e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = h.from(t, r));
                                return t
                            }(t, n, i);
                            n !== o && (r = !0,
                            i = "buffer",
                            n = o)
                        }
                        var a = t.objectMode ? 1 : n.length;
                        t.length += a;
                        var u = t.length < t.highWaterMark;
                        u || (t.needDrain = !0);
                        if (t.writing || t.corked) {
                            var c = t.lastBufferedRequest;
                            t.lastBufferedRequest = {
                                chunk: n,
                                encoding: i,
                                isBuf: r,
                                callback: s,
                                next: null
                            },
                            c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                            t.bufferedRequestCount += 1
                        } else
                            b(e, t, !1, a, n, i, s);
                        return u
                    }(this, i, a, e, t, r)),
                    o
                }
                ,
                v.prototype.cork = function() {
                    this._writableState.corked++
                }
                ,
                v.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--,
                    e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || _(this, e))
                }
                ,
                v.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()),
                    !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                        throw new TypeError("Unknown encoding: " + e);
                    return this._writableState.defaultEncoding = e,
                    this
                }
                ,
                Object.defineProperty(v.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }),
                v.prototype._write = function(e, t, r) {
                    r(new Error("_write() is not implemented"))
                }
                ,
                v.prototype._writev = null,
                v.prototype.end = function(e, t, r) {
                    var n = this._writableState;
                    "function" == typeof e ? (r = e,
                    e = null,
                    t = null) : "function" == typeof t && (r = t,
                    t = null),
                    null != e && this.write(e, t),
                    n.corked && (n.corked = 1,
                    this.uncork()),
                    n.ending || n.finished || function(e, t, r) {
                        t.ending = !0,
                        R(e, t),
                        r && (t.finished ? s.nextTick(r) : e.once("finish", r));
                        t.ended = !0,
                        e.writable = !1
                    }(this, n, r)
                }
                ,
                Object.defineProperty(v.prototype, "destroyed", {
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }),
                v.prototype.destroy = g.destroy,
                v.prototype._undestroy = g.undestroy,
                v.prototype._destroy = function(e, t) {
                    this.end(),
                    t(e)
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("timers").setImmediate)
    }
    , {
        "./_stream_duplex": 91,
        "./internal/streams/destroy": 97,
        "./internal/streams/stream": 98,
        _process: 89,
        "core-util-is": 59,
        inherits: 71,
        "process-nextick-args": 88,
        "safe-buffer": 99,
        timers: 147,
        "util-deprecate": 148
    }],
    96: [function(e, t, r) {
        "use strict";
        var n = e("safe-buffer").Buffer
          , i = e("util");
        t.exports = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.head = null,
                this.tail = null,
                this.length = 0
            }
            return e.prototype.push = function(e) {
                var t = {
                    data: e,
                    next: null
                };
                this.length > 0 ? this.tail.next = t : this.head = t,
                this.tail = t,
                ++this.length
            }
            ,
            e.prototype.unshift = function(e) {
                var t = {
                    data: e,
                    next: this.head
                };
                0 === this.length && (this.tail = t),
                this.head = t,
                ++this.length
            }
            ,
            e.prototype.shift = function() {
                if (0 !== this.length) {
                    var e = this.head.data;
                    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                    --this.length,
                    e
                }
            }
            ,
            e.prototype.clear = function() {
                this.head = this.tail = null,
                this.length = 0
            }
            ,
            e.prototype.join = function(e) {
                if (0 === this.length)
                    return "";
                for (var t = this.head, r = "" + t.data; t = t.next; )
                    r += e + t.data;
                return r
            }
            ,
            e.prototype.concat = function(e) {
                if (0 === this.length)
                    return n.alloc(0);
                if (1 === this.length)
                    return this.head.data;
                for (var t, r, i, s = n.allocUnsafe(e >>> 0), o = this.head, a = 0; o; )
                    t = o.data,
                    r = s,
                    i = a,
                    t.copy(r, i),
                    a += o.data.length,
                    o = o.next;
                return s
            }
            ,
            e
        }(),
        i && i.inspect && i.inspect.custom && (t.exports.prototype[i.inspect.custom] = function() {
            var e = i.inspect({
                length: this.length
            });
            return this.constructor.name + " " + e
        }
        )
    }
    , {
        "safe-buffer": 99,
        util: 56
    }],
    97: [function(e, t, r) {
        "use strict";
        var n = e("process-nextick-args");
        function i(e, t) {
            e.emit("error", t)
        }
        t.exports = {
            destroy: function(e, t) {
                var r = this
                  , s = this._readableState && this._readableState.destroyed
                  , o = this._writableState && this._writableState.destroyed;
                return s || o ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || n.nextTick(i, this, e),
                this) : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(e || null, (function(e) {
                    !t && e ? (n.nextTick(i, r, e),
                    r._writableState && (r._writableState.errorEmitted = !0)) : t && t(e)
                }
                )),
                this)
            },
            undestroy: function() {
                this._readableState && (this._readableState.destroyed = !1,
                this._readableState.reading = !1,
                this._readableState.ended = !1,
                this._readableState.endEmitted = !1),
                this._writableState && (this._writableState.destroyed = !1,
                this._writableState.ended = !1,
                this._writableState.ending = !1,
                this._writableState.finished = !1,
                this._writableState.errorEmitted = !1)
            }
        }
    }
    , {
        "process-nextick-args": 88
    }],
    98: [function(e, t, r) {
        arguments[4][20][0].apply(r, arguments)
    }
    , {
        dup: 20,
        events: 58
    }],
    99: [function(e, t, r) {
        arguments[4][22][0].apply(r, arguments)
    }
    , {
        buffer: 57,
        dup: 22
    }],
    100: [function(e, t, r) {
        "use strict";
        var n = e("safe-buffer").Buffer
          , i = n.isEncoding || function(e) {
            switch ((e = "" + e) && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
                return !0;
            default:
                return !1
            }
        }
        ;
        function s(e) {
            var t;
            switch (this.encoding = function(e) {
                var t = function(e) {
                    if (!e)
                        return "utf8";
                    for (var t; ; )
                        switch (e) {
                        case "utf8":
                        case "utf-8":
                            return "utf8";
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return "utf16le";
                        case "latin1":
                        case "binary":
                            return "latin1";
                        case "base64":
                        case "ascii":
                        case "hex":
                            return e;
                        default:
                            if (t)
                                return;
                            e = ("" + e).toLowerCase(),
                            t = !0
                        }
                }(e);
                if ("string" != typeof t && (n.isEncoding === i || !i(e)))
                    throw new Error("Unknown encoding: " + e);
                return t || e
            }(e),
            this.encoding) {
            case "utf16le":
                this.text = u,
                this.end = c,
                t = 4;
                break;
            case "utf8":
                this.fillLast = a,
                t = 4;
                break;
            case "base64":
                this.text = l,
                this.end = f,
                t = 3;
                break;
            default:
                return this.write = h,
                void (this.end = d)
            }
            this.lastNeed = 0,
            this.lastTotal = 0,
            this.lastChar = n.allocUnsafe(t)
        }
        function o(e) {
            return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
        }
        function a(e) {
            var t = this.lastTotal - this.lastNeed
              , r = function(e, t, r) {
                if (128 != (192 & t[0]))
                    return e.lastNeed = 0,
                    "�";
                if (e.lastNeed > 1 && t.length > 1) {
                    if (128 != (192 & t[1]))
                        return e.lastNeed = 1,
                        "�";
                    if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                        return e.lastNeed = 2,
                        "�"
                }
            }(this, e);
            return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length),
            void (this.lastNeed -= e.length))
        }
        function u(e, t) {
            if ((e.length - t) % 2 == 0) {
                var r = e.toString("utf16le", t);
                if (r) {
                    var n = r.charCodeAt(r.length - 1);
                    if (n >= 55296 && n <= 56319)
                        return this.lastNeed = 2,
                        this.lastTotal = 4,
                        this.lastChar[0] = e[e.length - 2],
                        this.lastChar[1] = e[e.length - 1],
                        r.slice(0, -1)
                }
                return r
            }
            return this.lastNeed = 1,
            this.lastTotal = 2,
            this.lastChar[0] = e[e.length - 1],
            e.toString("utf16le", t, e.length - 1)
        }
        function c(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
                var r = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, r)
            }
            return t
        }
        function l(e, t) {
            var r = (e.length - t) % 3;
            return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r,
            this.lastTotal = 3,
            1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2],
            this.lastChar[1] = e[e.length - 1]),
            e.toString("base64", t, e.length - r))
        }
        function f(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
        }
        function h(e) {
            return e.toString(this.encoding)
        }
        function d(e) {
            return e && e.length ? this.write(e) : ""
        }
        r.StringDecoder = s,
        s.prototype.write = function(e) {
            if (0 === e.length)
                return "";
            var t, r;
            if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e)))
                    return "";
                r = this.lastNeed,
                this.lastNeed = 0
            } else
                r = 0;
            return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
        }
        ,
        s.prototype.end = function(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "�" : t
        }
        ,
        s.prototype.text = function(e, t) {
            var r = function(e, t, r) {
                var n = t.length - 1;
                if (n < r)
                    return 0;
                var i = o(t[n]);
                if (i >= 0)
                    return i > 0 && (e.lastNeed = i - 1),
                    i;
                if (--n < r || -2 === i)
                    return 0;
                if (i = o(t[n]),
                i >= 0)
                    return i > 0 && (e.lastNeed = i - 2),
                    i;
                if (--n < r || -2 === i)
                    return 0;
                if (i = o(t[n]),
                i >= 0)
                    return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3),
                    i;
                return 0
            }(this, e, t);
            if (!this.lastNeed)
                return e.toString("utf8", t);
            this.lastTotal = r;
            var n = e.length - (r - this.lastNeed);
            return e.copy(this.lastChar, 0, n),
            e.toString("utf8", t, n)
        }
        ,
        s.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length)
                return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
            this.lastNeed -= e.length
        }
    }
    , {
        "safe-buffer": 99
    }],
    101: [function(e, t, r) {
        arguments[4][21][0].apply(r, arguments)
    }
    , {
        "./lib/_stream_duplex.js": 91,
        "./lib/_stream_passthrough.js": 92,
        "./lib/_stream_readable.js": 93,
        "./lib/_stream_transform.js": 94,
        "./lib/_stream_writable.js": 95,
        dup: 21
    }],
    102: [function(e, t, r) {
        const n = Symbol("SemVer ANY");
        class i {
            static get ANY() {
                return n
            }
            constructor(e, t) {
                if (t = s(t),
                e instanceof i) {
                    if (e.loose === !!t.loose)
                        return e;
                    e = e.value
                }
                e = e.trim().split(/\s+/).join(" "),
                c("comparator", e, t),
                this.options = t,
                this.loose = !!t.loose,
                this.parse(e),
                this.semver === n ? this.value = "" : this.value = this.operator + this.semver.version,
                c("comp", this)
            }
            parse(e) {
                const t = this.options.loose ? o[a.COMPARATORLOOSE] : o[a.COMPARATOR]
                  , r = e.match(t);
                if (!r)
                    throw new TypeError(`Invalid comparator: ${e}`);
                this.operator = void 0 !== r[1] ? r[1] : "",
                "=" === this.operator && (this.operator = ""),
                r[2] ? this.semver = new l(r[2],this.options.loose) : this.semver = n
            }
            toString() {
                return this.value
            }
            test(e) {
                if (c("Comparator.test", e, this.options.loose),
                this.semver === n || e === n)
                    return !0;
                if ("string" == typeof e)
                    try {
                        e = new l(e,this.options)
                    } catch (e) {
                        return !1
                    }
                return u(e, this.operator, this.semver, this.options)
            }
            intersects(e, t) {
                if (!(e instanceof i))
                    throw new TypeError("a Comparator is required");
                return "" === this.operator ? "" === this.value || new f(e.value,t).test(this.value) : "" === e.operator ? "" === e.value || new f(this.value,t).test(e.semver) : (!(t = s(t)).includePrerelease || "<0.0.0-0" !== this.value && "<0.0.0-0" !== e.value) && (!(!t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))) && (!(!this.operator.startsWith(">") || !e.operator.startsWith(">")) || (!(!this.operator.startsWith("<") || !e.operator.startsWith("<")) || (!(this.semver.version !== e.semver.version || !this.operator.includes("=") || !e.operator.includes("=")) || (!!(u(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<")) || !!(u(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">")))))))
            }
        }
        t.exports = i;
        const s = e("../internal/parse-options")
          , {safeRe: o, t: a} = e("../internal/re")
          , u = e("../functions/cmp")
          , c = e("../internal/debug")
          , l = e("./semver")
          , f = e("./range")
    }
    , {
        "../functions/cmp": 106,
        "../internal/debug": 131,
        "../internal/parse-options": 133,
        "../internal/re": 134,
        "./range": 103,
        "./semver": 104
    }],
    103: [function(e, t, r) {
        class n {
            constructor(e, t) {
                if (t = s(t),
                e instanceof n)
                    return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new n(e.raw,t);
                if (e instanceof o)
                    return this.raw = e.value,
                    this.set = [[e]],
                    this.format(),
                    this;
                if (this.options = t,
                this.loose = !!t.loose,
                this.includePrerelease = !!t.includePrerelease,
                this.raw = e.trim().split(/\s+/).join(" "),
                this.set = this.raw.split("||").map((e=>this.parseRange(e.trim()))).filter((e=>e.length)),
                !this.set.length)
                    throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
                if (this.set.length > 1) {
                    const e = this.set[0];
                    if (this.set = this.set.filter((e=>!m(e[0]))),
                    0 === this.set.length)
                        this.set = [e];
                    else if (this.set.length > 1)
                        for (const e of this.set)
                            if (1 === e.length && y(e[0])) {
                                this.set = [e];
                                break
                            }
                }
                this.format()
            }
            format() {
                return this.range = this.set.map((e=>e.join(" ").trim())).join("||").trim(),
                this.range
            }
            toString() {
                return this.range
            }
            parseRange(e) {
                const t = ((this.options.includePrerelease && p) | (this.options.loose && g)) + ":" + e
                  , r = i.get(t);
                if (r)
                    return r;
                const n = this.options.loose
                  , s = n ? c[l.HYPHENRANGELOOSE] : c[l.HYPHENRANGE];
                e = e.replace(s, O(this.options.includePrerelease)),
                a("hyphen replace", e),
                e = e.replace(c[l.COMPARATORTRIM], f),
                a("comparator trim", e),
                e = e.replace(c[l.TILDETRIM], h),
                a("tilde trim", e),
                e = e.replace(c[l.CARETTRIM], d),
                a("caret trim", e);
                let u = e.split(" ").map((e=>b(e, this.options))).join(" ").split(/\s+/).map((e=>k(e, this.options)));
                n && (u = u.filter((e=>(a("loose invalid filter", e, this.options),
                !!e.match(c[l.COMPARATORLOOSE]))))),
                a("range list", u);
                const y = new Map
                  , v = u.map((e=>new o(e,this.options)));
                for (const e of v) {
                    if (m(e))
                        return [e];
                    y.set(e.value, e)
                }
                y.size > 1 && y.has("") && y.delete("");
                const w = [...y.values()];
                return i.set(t, w),
                w
            }
            intersects(e, t) {
                if (!(e instanceof n))
                    throw new TypeError("a Range is required");
                return this.set.some((r=>v(r, t) && e.set.some((e=>v(e, t) && r.every((r=>e.every((e=>r.intersects(e, t)))))))))
            }
            test(e) {
                if (!e)
                    return !1;
                if ("string" == typeof e)
                    try {
                        e = new u(e,this.options)
                    } catch (e) {
                        return !1
                    }
                for (let t = 0; t < this.set.length; t++)
                    if (I(this.set[t], e, this.options))
                        return !0;
                return !1
            }
        }
        t.exports = n;
        const i = new (e("lru-cache"))({
            max: 1e3
        })
          , s = e("../internal/parse-options")
          , o = e("./comparator")
          , a = e("../internal/debug")
          , u = e("./semver")
          , {safeRe: c, t: l, comparatorTrimReplace: f, tildeTrimReplace: h, caretTrimReplace: d} = e("../internal/re")
          , {FLAG_INCLUDE_PRERELEASE: p, FLAG_LOOSE: g} = e("../internal/constants")
          , m = e=>"<0.0.0-0" === e.value
          , y = e=>"" === e.value
          , v = (e,t)=>{
            let r = !0;
            const n = e.slice();
            let i = n.pop();
            for (; r && n.length; )
                r = n.every((e=>i.intersects(e, t))),
                i = n.pop();
            return r
        }
          , b = (e,t)=>(a("comp", e, t),
        e = S(e, t),
        a("caret", e),
        e = _(e, t),
        a("tildes", e),
        e = M(e, t),
        a("xrange", e),
        e = C(e, t),
        a("stars", e),
        e)
          , w = e=>!e || "x" === e.toLowerCase() || "*" === e
          , _ = (e,t)=>e.trim().split(/\s+/).map((e=>E(e, t))).join(" ")
          , E = (e,t)=>{
            const r = t.loose ? c[l.TILDELOOSE] : c[l.TILDE];
            return e.replace(r, ((t,r,n,i,s)=>{
                let o;
                return a("tilde", e, t, r, n, i, s),
                w(r) ? o = "" : w(n) ? o = `>=${r}.0.0 <${+r + 1}.0.0-0` : w(i) ? o = `>=${r}.${n}.0 <${r}.${+n + 1}.0-0` : s ? (a("replaceTilde pr", s),
                o = `>=${r}.${n}.${i}-${s} <${r}.${+n + 1}.0-0`) : o = `>=${r}.${n}.${i} <${r}.${+n + 1}.0-0`,
                a("tilde return", o),
                o
            }
            ))
        }
          , S = (e,t)=>e.trim().split(/\s+/).map((e=>R(e, t))).join(" ")
          , R = (e,t)=>{
            a("caret", e, t);
            const r = t.loose ? c[l.CARETLOOSE] : c[l.CARET]
              , n = t.includePrerelease ? "-0" : "";
            return e.replace(r, ((t,r,i,s,o)=>{
                let u;
                return a("caret", e, t, r, i, s, o),
                w(r) ? u = "" : w(i) ? u = `>=${r}.0.0 ${n} <${+r + 1}.0.0-0` : w(s) ? u = "0" === r ? `>=${r}.${i}.0 ${n} <${r}.${+i + 1}.0-0` : `>=${r}.${i}.0 ${n} <${+r + 1}.0.0-0` : o ? (a("replaceCaret pr", o),
                u = "0" === r ? "0" === i ? `>=${r}.${i}.${s}-${o} <${r}.${i}.${+s + 1}-0` : `>=${r}.${i}.${s}-${o} <${r}.${+i + 1}.0-0` : `>=${r}.${i}.${s}-${o} <${+r + 1}.0.0-0`) : (a("no pr"),
                u = "0" === r ? "0" === i ? `>=${r}.${i}.${s}${n} <${r}.${i}.${+s + 1}-0` : `>=${r}.${i}.${s}${n} <${r}.${+i + 1}.0-0` : `>=${r}.${i}.${s} <${+r + 1}.0.0-0`),
                a("caret return", u),
                u
            }
            ))
        }
          , M = (e,t)=>(a("replaceXRanges", e, t),
        e.split(/\s+/).map((e=>x(e, t))).join(" "))
          , x = (e,t)=>{
            e = e.trim();
            const r = t.loose ? c[l.XRANGELOOSE] : c[l.XRANGE];
            return e.replace(r, ((r,n,i,s,o,u)=>{
                a("xRange", e, r, n, i, s, o, u);
                const c = w(i)
                  , l = c || w(s)
                  , f = l || w(o)
                  , h = f;
                return "=" === n && h && (n = ""),
                u = t.includePrerelease ? "-0" : "",
                c ? r = ">" === n || "<" === n ? "<0.0.0-0" : "*" : n && h ? (l && (s = 0),
                o = 0,
                ">" === n ? (n = ">=",
                l ? (i = +i + 1,
                s = 0,
                o = 0) : (s = +s + 1,
                o = 0)) : "<=" === n && (n = "<",
                l ? i = +i + 1 : s = +s + 1),
                "<" === n && (u = "-0"),
                r = `${n + i}.${s}.${o}${u}`) : l ? r = `>=${i}.0.0 ${u} <${+i + 1}.0.0-0` : f && (r = `>=${i}.${s}.0 ${u} <${i}.${+s + 1}.0-0`),
                a("xRange return", r),
                r
            }
            ))
        }
          , C = (e,t)=>(a("replaceStars", e, t),
        e.trim().replace(c[l.STAR], ""))
          , k = (e,t)=>(a("replaceGTE0", e, t),
        e.trim().replace(c[t.includePrerelease ? l.GTE0PRE : l.GTE0], ""))
          , O = e=>(t,r,n,i,s,o,a,u,c,l,f,h,d)=>`${r = w(n) ? "" : w(i) ? `>=${n}.0.0 ${e ? "-0" : ""}` : w(s) ? `>=${n}.${i}.0 ${e ? "-0" : ""}` : o ? `>=${r}` : `>=${r}${e ? "-0" : ""}`} ${u = w(c) ? "" : w(l) ? `<${+c + 1}.0.0-0` : w(f) ? `<${c}.${+l + 1}.0-0` : h ? `<=${c}.${l}.${f}-${h}` : e ? `<${c}.${l}.${+f + 1}-0` : `<=${u}`}`.trim()
          , I = (e,t,r)=>{
            for (let r = 0; r < e.length; r++)
                if (!e[r].test(t))
                    return !1;
            if (t.prerelease.length && !r.includePrerelease) {
                for (let r = 0; r < e.length; r++)
                    if (a(e[r].semver),
                    e[r].semver !== o.ANY && e[r].semver.prerelease.length > 0) {
                        const n = e[r].semver;
                        if (n.major === t.major && n.minor === t.minor && n.patch === t.patch)
                            return !0
                    }
                return !1
            }
            return !0
        }
    }
    , {
        "../internal/constants": 130,
        "../internal/debug": 131,
        "../internal/parse-options": 133,
        "../internal/re": 134,
        "./comparator": 102,
        "./semver": 104,
        "lru-cache": 86
    }],
    104: [function(e, t, r) {
        const n = e("../internal/debug")
          , {MAX_LENGTH: i, MAX_SAFE_INTEGER: s} = e("../internal/constants")
          , {safeRe: o, t: a} = e("../internal/re")
          , u = e("../internal/parse-options")
          , {compareIdentifiers: c} = e("../internal/identifiers");
        class l {
            constructor(e, t) {
                if (t = u(t),
                e instanceof l) {
                    if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease)
                        return e;
                    e = e.version
                } else if ("string" != typeof e)
                    throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
                if (e.length > i)
                    throw new TypeError(`version is longer than ${i} characters`);
                n("SemVer", e, t),
                this.options = t,
                this.loose = !!t.loose,
                this.includePrerelease = !!t.includePrerelease;
                const r = e.trim().match(t.loose ? o[a.LOOSE] : o[a.FULL]);
                if (!r)
                    throw new TypeError(`Invalid Version: ${e}`);
                if (this.raw = e,
                this.major = +r[1],
                this.minor = +r[2],
                this.patch = +r[3],
                this.major > s || this.major < 0)
                    throw new TypeError("Invalid major version");
                if (this.minor > s || this.minor < 0)
                    throw new TypeError("Invalid minor version");
                if (this.patch > s || this.patch < 0)
                    throw new TypeError("Invalid patch version");
                r[4] ? this.prerelease = r[4].split(".").map((e=>{
                    if (/^[0-9]+$/.test(e)) {
                        const t = +e;
                        if (t >= 0 && t < s)
                            return t
                    }
                    return e
                }
                )) : this.prerelease = [],
                this.build = r[5] ? r[5].split(".") : [],
                this.format()
            }
            format() {
                return this.version = `${this.major}.${this.minor}.${this.patch}`,
                this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`),
                this.version
            }
            toString() {
                return this.version
            }
            compare(e) {
                if (n("SemVer.compare", this.version, this.options, e),
                !(e instanceof l)) {
                    if ("string" == typeof e && e === this.version)
                        return 0;
                    e = new l(e,this.options)
                }
                return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
            }
            compareMain(e) {
                return e instanceof l || (e = new l(e,this.options)),
                c(this.major, e.major) || c(this.minor, e.minor) || c(this.patch, e.patch)
            }
            comparePre(e) {
                if (e instanceof l || (e = new l(e,this.options)),
                this.prerelease.length && !e.prerelease.length)
                    return -1;
                if (!this.prerelease.length && e.prerelease.length)
                    return 1;
                if (!this.prerelease.length && !e.prerelease.length)
                    return 0;
                let t = 0;
                do {
                    const r = this.prerelease[t]
                      , i = e.prerelease[t];
                    if (n("prerelease compare", t, r, i),
                    void 0 === r && void 0 === i)
                        return 0;
                    if (void 0 === i)
                        return 1;
                    if (void 0 === r)
                        return -1;
                    if (r !== i)
                        return c(r, i)
                } while (++t)
            }
            compareBuild(e) {
                e instanceof l || (e = new l(e,this.options));
                let t = 0;
                do {
                    const r = this.build[t]
                      , i = e.build[t];
                    if (n("prerelease compare", t, r, i),
                    void 0 === r && void 0 === i)
                        return 0;
                    if (void 0 === i)
                        return 1;
                    if (void 0 === r)
                        return -1;
                    if (r !== i)
                        return c(r, i)
                } while (++t)
            }
            inc(e, t, r) {
                switch (e) {
                case "premajor":
                    this.prerelease.length = 0,
                    this.patch = 0,
                    this.minor = 0,
                    this.major++,
                    this.inc("pre", t, r);
                    break;
                case "preminor":
                    this.prerelease.length = 0,
                    this.patch = 0,
                    this.minor++,
                    this.inc("pre", t, r);
                    break;
                case "prepatch":
                    this.prerelease.length = 0,
                    this.inc("patch", t, r),
                    this.inc("pre", t, r);
                    break;
                case "prerelease":
                    0 === this.prerelease.length && this.inc("patch", t, r),
                    this.inc("pre", t, r);
                    break;
                case "major":
                    0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++,
                    this.minor = 0,
                    this.patch = 0,
                    this.prerelease = [];
                    break;
                case "minor":
                    0 === this.patch && 0 !== this.prerelease.length || this.minor++,
                    this.patch = 0,
                    this.prerelease = [];
                    break;
                case "patch":
                    0 === this.prerelease.length && this.patch++,
                    this.prerelease = [];
                    break;
                case "pre":
                    {
                        const e = Number(r) ? 1 : 0;
                        if (!t && !1 === r)
                            throw new Error("invalid increment argument: identifier is empty");
                        if (0 === this.prerelease.length)
                            this.prerelease = [e];
                        else {
                            let n = this.prerelease.length;
                            for (; --n >= 0; )
                                "number" == typeof this.prerelease[n] && (this.prerelease[n]++,
                                n = -2);
                            if (-1 === n) {
                                if (t === this.prerelease.join(".") && !1 === r)
                                    throw new Error("invalid increment argument: identifier already exists");
                                this.prerelease.push(e)
                            }
                        }
                        if (t) {
                            let n = [t, e];
                            !1 === r && (n = [t]),
                            0 === c(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = n) : this.prerelease = n
                        }
                        break
                    }
                default:
                    throw new Error(`invalid increment argument: ${e}`)
                }
                return this.raw = this.format(),
                this.build.length && (this.raw += `+${this.build.join(".")}`),
                this
            }
        }
        t.exports = l
    }
    , {
        "../internal/constants": 130,
        "../internal/debug": 131,
        "../internal/identifiers": 132,
        "../internal/parse-options": 133,
        "../internal/re": 134
    }],
    105: [function(e, t, r) {
        const n = e("./parse");
        t.exports = (e,t)=>{
            const r = n(e.trim().replace(/^[=v]+/, ""), t);
            return r ? r.version : null
        }
    }
    , {
        "./parse": 121
    }],
    106: [function(e, t, r) {
        const n = e("./eq")
          , i = e("./neq")
          , s = e("./gt")
          , o = e("./gte")
          , a = e("./lt")
          , u = e("./lte");
        t.exports = (e,t,r,c)=>{
            switch (t) {
            case "===":
                return "object" == typeof e && (e = e.version),
                "object" == typeof r && (r = r.version),
                e === r;
            case "!==":
                return "object" == typeof e && (e = e.version),
                "object" == typeof r && (r = r.version),
                e !== r;
            case "":
            case "=":
            case "==":
                return n(e, r, c);
            case "!=":
                return i(e, r, c);
            case ">":
                return s(e, r, c);
            case ">=":
                return o(e, r, c);
            case "<":
                return a(e, r, c);
            case "<=":
                return u(e, r, c);
            default:
                throw new TypeError(`Invalid operator: ${t}`)
            }
        }
    }
    , {
        "./eq": 112,
        "./gt": 113,
        "./gte": 114,
        "./lt": 116,
        "./lte": 117,
        "./neq": 120
    }],
    107: [function(e, t, r) {
        const n = e("../classes/semver")
          , i = e("./parse")
          , {safeRe: s, t: o} = e("../internal/re");
        t.exports = (e,t)=>{
            if (e instanceof n)
                return e;
            if ("number" == typeof e && (e = String(e)),
            "string" != typeof e)
                return null;
            let r = null;
            if ((t = t || {}).rtl) {
                let t;
                for (; (t = s[o.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length); )
                    r && t.index + t[0].length === r.index + r[0].length || (r = t),
                    s[o.COERCERTL].lastIndex = t.index + t[1].length + t[2].length;
                s[o.COERCERTL].lastIndex = -1
            } else
                r = e.match(s[o.COERCE]);
            return null === r ? null : i(`${r[2]}.${r[3] || "0"}.${r[4] || "0"}`, t)
        }
    }
    , {
        "../classes/semver": 104,
        "../internal/re": 134,
        "./parse": 121
    }],
    108: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e,t,r)=>{
            const i = new n(e,r)
              , s = new n(t,r);
            return i.compare(s) || i.compareBuild(s)
        }
    }
    , {
        "../classes/semver": 104
    }],
    109: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e,t)=>n(e, t, !0)
    }
    , {
        "./compare": 110
    }],
    110: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e,t,r)=>new n(e,r).compare(new n(t,r))
    }
    , {
        "../classes/semver": 104
    }],
    111: [function(e, t, r) {
        const n = e("./parse.js");
        t.exports = (e,t)=>{
            const r = n(e, null, !0)
              , i = n(t, null, !0)
              , s = r.compare(i);
            if (0 === s)
                return null;
            const o = s > 0
              , a = o ? r : i
              , u = o ? i : r
              , c = !!a.prerelease.length;
            if (!!u.prerelease.length && !c)
                return u.patch || u.minor ? a.patch ? "patch" : a.minor ? "minor" : "major" : "major";
            const l = c ? "pre" : "";
            return r.major !== i.major ? l + "major" : r.minor !== i.minor ? l + "minor" : r.patch !== i.patch ? l + "patch" : "prerelease"
        }
    }
    , {
        "./parse.js": 121
    }],
    112: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e,t,r)=>0 === n(e, t, r)
    }
    , {
        "./compare": 110
    }],
    113: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e,t,r)=>n(e, t, r) > 0
    }
    , {
        "./compare": 110
    }],
    114: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e,t,r)=>n(e, t, r) >= 0
    }
    , {
        "./compare": 110
    }],
    115: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e,t,r,i,s)=>{
            "string" == typeof r && (s = i,
            i = r,
            r = void 0);
            try {
                return new n(e instanceof n ? e.version : e,r).inc(t, i, s).version
            } catch (e) {
                return null
            }
        }
    }
    , {
        "../classes/semver": 104
    }],
    116: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e,t,r)=>n(e, t, r) < 0
    }
    , {
        "./compare": 110
    }],
    117: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e,t,r)=>n(e, t, r) <= 0
    }
    , {
        "./compare": 110
    }],
    118: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e,t)=>new n(e,t).major
    }
    , {
        "../classes/semver": 104
    }],
    119: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e,t)=>new n(e,t).minor
    }
    , {
        "../classes/semver": 104
    }],
    120: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e,t,r)=>0 !== n(e, t, r)
    }
    , {
        "./compare": 110
    }],
    121: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e,t,r=!1)=>{
            if (e instanceof n)
                return e;
            try {
                return new n(e,t)
            } catch (e) {
                if (!r)
                    return null;
                throw e
            }
        }
    }
    , {
        "../classes/semver": 104
    }],
    122: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e,t)=>new n(e,t).patch
    }
    , {
        "../classes/semver": 104
    }],
    123: [function(e, t, r) {
        const n = e("./parse");
        t.exports = (e,t)=>{
            const r = n(e, t);
            return r && r.prerelease.length ? r.prerelease : null
        }
    }
    , {
        "./parse": 121
    }],
    124: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e,t,r)=>n(t, e, r)
    }
    , {
        "./compare": 110
    }],
    125: [function(e, t, r) {
        const n = e("./compare-build");
        t.exports = (e,t)=>e.sort(((e,r)=>n(r, e, t)))
    }
    , {
        "./compare-build": 108
    }],
    126: [function(e, t, r) {
        const n = e("../classes/range");
        t.exports = (e,t,r)=>{
            try {
                t = new n(t,r)
            } catch (e) {
                return !1
            }
            return t.test(e)
        }
    }
    , {
        "../classes/range": 103
    }],
    127: [function(e, t, r) {
        const n = e("./compare-build");
        t.exports = (e,t)=>e.sort(((e,r)=>n(e, r, t)))
    }
    , {
        "./compare-build": 108
    }],
    128: [function(e, t, r) {
        const n = e("./parse");
        t.exports = (e,t)=>{
            const r = n(e, t);
            return r ? r.version : null
        }
    }
    , {
        "./parse": 121
    }],
    129: [function(e, t, r) {
        const n = e("./internal/re")
          , i = e("./internal/constants")
          , s = e("./classes/semver")
          , o = e("./internal/identifiers")
          , a = e("./functions/parse")
          , u = e("./functions/valid")
          , c = e("./functions/clean")
          , l = e("./functions/inc")
          , f = e("./functions/diff")
          , h = e("./functions/major")
          , d = e("./functions/minor")
          , p = e("./functions/patch")
          , g = e("./functions/prerelease")
          , m = e("./functions/compare")
          , y = e("./functions/rcompare")
          , v = e("./functions/compare-loose")
          , b = e("./functions/compare-build")
          , w = e("./functions/sort")
          , _ = e("./functions/rsort")
          , E = e("./functions/gt")
          , S = e("./functions/lt")
          , R = e("./functions/eq")
          , M = e("./functions/neq")
          , x = e("./functions/gte")
          , C = e("./functions/lte")
          , k = e("./functions/cmp")
          , O = e("./functions/coerce")
          , I = e("./classes/comparator")
          , j = e("./classes/range")
          , A = e("./functions/satisfies")
          , T = e("./ranges/to-comparators")
          , P = e("./ranges/max-satisfying")
          , N = e("./ranges/min-satisfying")
          , L = e("./ranges/min-version")
          , $ = e("./ranges/valid")
          , F = e("./ranges/outside")
          , D = e("./ranges/gtr")
          , B = e("./ranges/ltr")
          , U = e("./ranges/intersects")
          , q = e("./ranges/simplify")
          , W = e("./ranges/subset");
        t.exports = {
            parse: a,
            valid: u,
            clean: c,
            inc: l,
            diff: f,
            major: h,
            minor: d,
            patch: p,
            prerelease: g,
            compare: m,
            rcompare: y,
            compareLoose: v,
            compareBuild: b,
            sort: w,
            rsort: _,
            gt: E,
            lt: S,
            eq: R,
            neq: M,
            gte: x,
            lte: C,
            cmp: k,
            coerce: O,
            Comparator: I,
            Range: j,
            satisfies: A,
            toComparators: T,
            maxSatisfying: P,
            minSatisfying: N,
            minVersion: L,
            validRange: $,
            outside: F,
            gtr: D,
            ltr: B,
            intersects: U,
            simplifyRange: q,
            subset: W,
            SemVer: s,
            re: n.re,
            src: n.src,
            tokens: n.t,
            SEMVER_SPEC_VERSION: i.SEMVER_SPEC_VERSION,
            RELEASE_TYPES: i.RELEASE_TYPES,
            compareIdentifiers: o.compareIdentifiers,
            rcompareIdentifiers: o.rcompareIdentifiers
        }
    }
    , {
        "./classes/comparator": 102,
        "./classes/range": 103,
        "./classes/semver": 104,
        "./functions/clean": 105,
        "./functions/cmp": 106,
        "./functions/coerce": 107,
        "./functions/compare": 110,
        "./functions/compare-build": 108,
        "./functions/compare-loose": 109,
        "./functions/diff": 111,
        "./functions/eq": 112,
        "./functions/gt": 113,
        "./functions/gte": 114,
        "./functions/inc": 115,
        "./functions/lt": 116,
        "./functions/lte": 117,
        "./functions/major": 118,
        "./functions/minor": 119,
        "./functions/neq": 120,
        "./functions/parse": 121,
        "./functions/patch": 122,
        "./functions/prerelease": 123,
        "./functions/rcompare": 124,
        "./functions/rsort": 125,
        "./functions/satisfies": 126,
        "./functions/sort": 127,
        "./functions/valid": 128,
        "./internal/constants": 130,
        "./internal/identifiers": 132,
        "./internal/re": 134,
        "./ranges/gtr": 135,
        "./ranges/intersects": 136,
        "./ranges/ltr": 137,
        "./ranges/max-satisfying": 138,
        "./ranges/min-satisfying": 139,
        "./ranges/min-version": 140,
        "./ranges/outside": 141,
        "./ranges/simplify": 142,
        "./ranges/subset": 143,
        "./ranges/to-comparators": 144,
        "./ranges/valid": 145
    }],
    130: [function(e, t, r) {
        const n = Number.MAX_SAFE_INTEGER || 9007199254740991;
        t.exports = {
            MAX_LENGTH: 256,
            MAX_SAFE_COMPONENT_LENGTH: 16,
            MAX_SAFE_BUILD_LENGTH: 250,
            MAX_SAFE_INTEGER: n,
            RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"],
            SEMVER_SPEC_VERSION: "2.0.0",
            FLAG_INCLUDE_PRERELEASE: 1,
            FLAG_LOOSE: 2
        }
    }
    , {}],
    131: [function(e, t, r) {
        (function(e) {
            (function() {
                const r = ("object" == typeof e && e.env,
                ()=>{}
                );
                t.exports = r
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        _process: 89
    }],
    132: [function(e, t, r) {
        const n = /^[0-9]+$/
          , i = (e,t)=>{
            const r = n.test(e)
              , i = n.test(t);
            return r && i && (e = +e,
            t = +t),
            e === t ? 0 : r && !i ? -1 : i && !r ? 1 : e < t ? -1 : 1
        }
        ;
        t.exports = {
            compareIdentifiers: i,
            rcompareIdentifiers: (e,t)=>i(t, e)
        }
    }
    , {}],
    133: [function(e, t, r) {
        const n = Object.freeze({
            loose: !0
        })
          , i = Object.freeze({});
        t.exports = e=>e ? "object" != typeof e ? n : e : i
    }
    , {}],
    134: [function(e, t, r) {
        const {MAX_SAFE_COMPONENT_LENGTH: n, MAX_SAFE_BUILD_LENGTH: i, MAX_LENGTH: s} = e("./constants")
          , o = e("./debug")
          , a = (r = t.exports = {}).re = []
          , u = r.safeRe = []
          , c = r.src = []
          , l = r.t = {};
        let f = 0;
        const h = "[a-zA-Z0-9-]"
          , d = [["\\s", 1], ["\\d", s], [h, i]]
          , p = (e,t,r)=>{
            const n = (e=>{
                for (const [t,r] of d)
                    e = e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);
                return e
            }
            )(t)
              , i = f++;
            o(e, i, t),
            l[e] = i,
            c[i] = t,
            a[i] = new RegExp(t,r ? "g" : void 0),
            u[i] = new RegExp(n,r ? "g" : void 0)
        }
        ;
        p("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
        p("NUMERICIDENTIFIERLOOSE", "\\d+"),
        p("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${h}*`),
        p("MAINVERSION", `(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})`),
        p("MAINVERSIONLOOSE", `(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})`),
        p("PRERELEASEIDENTIFIER", `(?:${c[l.NUMERICIDENTIFIER]}|${c[l.NONNUMERICIDENTIFIER]})`),
        p("PRERELEASEIDENTIFIERLOOSE", `(?:${c[l.NUMERICIDENTIFIERLOOSE]}|${c[l.NONNUMERICIDENTIFIER]})`),
        p("PRERELEASE", `(?:-(${c[l.PRERELEASEIDENTIFIER]}(?:\\.${c[l.PRERELEASEIDENTIFIER]})*))`),
        p("PRERELEASELOOSE", `(?:-?(${c[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[l.PRERELEASEIDENTIFIERLOOSE]})*))`),
        p("BUILDIDENTIFIER", `${h}+`),
        p("BUILD", `(?:\\+(${c[l.BUILDIDENTIFIER]}(?:\\.${c[l.BUILDIDENTIFIER]})*))`),
        p("FULLPLAIN", `v?${c[l.MAINVERSION]}${c[l.PRERELEASE]}?${c[l.BUILD]}?`),
        p("FULL", `^${c[l.FULLPLAIN]}$`),
        p("LOOSEPLAIN", `[v=\\s]*${c[l.MAINVERSIONLOOSE]}${c[l.PRERELEASELOOSE]}?${c[l.BUILD]}?`),
        p("LOOSE", `^${c[l.LOOSEPLAIN]}$`),
        p("GTLT", "((?:<|>)?=?)"),
        p("XRANGEIDENTIFIERLOOSE", `${c[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
        p("XRANGEIDENTIFIER", `${c[l.NUMERICIDENTIFIER]}|x|X|\\*`),
        p("XRANGEPLAIN", `[v=\\s]*(${c[l.XRANGEIDENTIFIER]})(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:${c[l.PRERELEASE]})?${c[l.BUILD]}?)?)?`),
        p("XRANGEPLAINLOOSE", `[v=\\s]*(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:${c[l.PRERELEASELOOSE]})?${c[l.BUILD]}?)?)?`),
        p("XRANGE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAIN]}$`),
        p("XRANGELOOSE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAINLOOSE]}$`),
        p("COERCE", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),
        p("COERCERTL", c[l.COERCE], !0),
        p("LONETILDE", "(?:~>?)"),
        p("TILDETRIM", `(\\s*)${c[l.LONETILDE]}\\s+`, !0),
        r.tildeTrimReplace = "$1~",
        p("TILDE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAIN]}$`),
        p("TILDELOOSE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAINLOOSE]}$`),
        p("LONECARET", "(?:\\^)"),
        p("CARETTRIM", `(\\s*)${c[l.LONECARET]}\\s+`, !0),
        r.caretTrimReplace = "$1^",
        p("CARET", `^${c[l.LONECARET]}${c[l.XRANGEPLAIN]}$`),
        p("CARETLOOSE", `^${c[l.LONECARET]}${c[l.XRANGEPLAINLOOSE]}$`),
        p("COMPARATORLOOSE", `^${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]})$|^$`),
        p("COMPARATOR", `^${c[l.GTLT]}\\s*(${c[l.FULLPLAIN]})$|^$`),
        p("COMPARATORTRIM", `(\\s*)${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]}|${c[l.XRANGEPLAIN]})`, !0),
        r.comparatorTrimReplace = "$1$2$3",
        p("HYPHENRANGE", `^\\s*(${c[l.XRANGEPLAIN]})\\s+-\\s+(${c[l.XRANGEPLAIN]})\\s*$`),
        p("HYPHENRANGELOOSE", `^\\s*(${c[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[l.XRANGEPLAINLOOSE]})\\s*$`),
        p("STAR", "(<|>)?=?\\s*\\*"),
        p("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
        p("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
    }
    , {
        "./constants": 130,
        "./debug": 131
    }],
    135: [function(e, t, r) {
        const n = e("./outside");
        t.exports = (e,t,r)=>n(e, t, ">", r)
    }
    , {
        "./outside": 141
    }],
    136: [function(e, t, r) {
        const n = e("../classes/range");
        t.exports = (e,t,r)=>(e = new n(e,r),
        t = new n(t,r),
        e.intersects(t, r))
    }
    , {
        "../classes/range": 103
    }],
    137: [function(e, t, r) {
        const n = e("./outside");
        t.exports = (e,t,r)=>n(e, t, "<", r)
    }
    , {
        "./outside": 141
    }],
    138: [function(e, t, r) {
        const n = e("../classes/semver")
          , i = e("../classes/range");
        t.exports = (e,t,r)=>{
            let s = null
              , o = null
              , a = null;
            try {
                a = new i(t,r)
            } catch (e) {
                return null
            }
            return e.forEach((e=>{
                a.test(e) && (s && -1 !== o.compare(e) || (s = e,
                o = new n(s,r)))
            }
            )),
            s
        }
    }
    , {
        "../classes/range": 103,
        "../classes/semver": 104
    }],
    139: [function(e, t, r) {
        const n = e("../classes/semver")
          , i = e("../classes/range");
        t.exports = (e,t,r)=>{
            let s = null
              , o = null
              , a = null;
            try {
                a = new i(t,r)
            } catch (e) {
                return null
            }
            return e.forEach((e=>{
                a.test(e) && (s && 1 !== o.compare(e) || (s = e,
                o = new n(s,r)))
            }
            )),
            s
        }
    }
    , {
        "../classes/range": 103,
        "../classes/semver": 104
    }],
    140: [function(e, t, r) {
        const n = e("../classes/semver")
          , i = e("../classes/range")
          , s = e("../functions/gt");
        t.exports = (e,t)=>{
            e = new i(e,t);
            let r = new n("0.0.0");
            if (e.test(r))
                return r;
            if (r = new n("0.0.0-0"),
            e.test(r))
                return r;
            r = null;
            for (let t = 0; t < e.set.length; ++t) {
                const i = e.set[t];
                let o = null;
                i.forEach((e=>{
                    const t = new n(e.semver.version);
                    switch (e.operator) {
                    case ">":
                        0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0),
                        t.raw = t.format();
                    case "":
                    case ">=":
                        o && !s(t, o) || (o = t);
                        break;
                    case "<":
                    case "<=":
                        break;
                    default:
                        throw new Error(`Unexpected operation: ${e.operator}`)
                    }
                }
                )),
                !o || r && !s(r, o) || (r = o)
            }
            return r && e.test(r) ? r : null
        }
    }
    , {
        "../classes/range": 103,
        "../classes/semver": 104,
        "../functions/gt": 113
    }],
    141: [function(e, t, r) {
        const n = e("../classes/semver")
          , i = e("../classes/comparator")
          , {ANY: s} = i
          , o = e("../classes/range")
          , a = e("../functions/satisfies")
          , u = e("../functions/gt")
          , c = e("../functions/lt")
          , l = e("../functions/lte")
          , f = e("../functions/gte");
        t.exports = (e,t,r,h)=>{
            let d, p, g, m, y;
            switch (e = new n(e,h),
            t = new o(t,h),
            r) {
            case ">":
                d = u,
                p = l,
                g = c,
                m = ">",
                y = ">=";
                break;
            case "<":
                d = c,
                p = f,
                g = u,
                m = "<",
                y = "<=";
                break;
            default:
                throw new TypeError('Must provide a hilo val of "<" or ">"')
            }
            if (a(e, t, h))
                return !1;
            for (let r = 0; r < t.set.length; ++r) {
                const n = t.set[r];
                let o = null
                  , a = null;
                if (n.forEach((e=>{
                    e.semver === s && (e = new i(">=0.0.0")),
                    o = o || e,
                    a = a || e,
                    d(e.semver, o.semver, h) ? o = e : g(e.semver, a.semver, h) && (a = e)
                }
                )),
                o.operator === m || o.operator === y)
                    return !1;
                if ((!a.operator || a.operator === m) && p(e, a.semver))
                    return !1;
                if (a.operator === y && g(e, a.semver))
                    return !1
            }
            return !0
        }
    }
    , {
        "../classes/comparator": 102,
        "../classes/range": 103,
        "../classes/semver": 104,
        "../functions/gt": 113,
        "../functions/gte": 114,
        "../functions/lt": 116,
        "../functions/lte": 117,
        "../functions/satisfies": 126
    }],
    142: [function(e, t, r) {
        const n = e("../functions/satisfies.js")
          , i = e("../functions/compare.js");
        t.exports = (e,t,r)=>{
            const s = [];
            let o = null
              , a = null;
            const u = e.sort(((e,t)=>i(e, t, r)));
            for (const e of u) {
                n(e, t, r) ? (a = e,
                o || (o = e)) : (a && s.push([o, a]),
                a = null,
                o = null)
            }
            o && s.push([o, null]);
            const c = [];
            for (const [e,t] of s)
                e === t ? c.push(e) : t || e !== u[0] ? t ? e === u[0] ? c.push(`<=${t}`) : c.push(`${e} - ${t}`) : c.push(`>=${e}`) : c.push("*");
            const l = c.join(" || ")
              , f = "string" == typeof t.raw ? t.raw : String(t);
            return l.length < f.length ? l : t
        }
    }
    , {
        "../functions/compare.js": 110,
        "../functions/satisfies.js": 126
    }],
    143: [function(e, t, r) {
        const n = e("../classes/range.js")
          , i = e("../classes/comparator.js")
          , {ANY: s} = i
          , o = e("../functions/satisfies.js")
          , a = e("../functions/compare.js")
          , u = [new i(">=0.0.0-0")]
          , c = [new i(">=0.0.0")]
          , l = (e,t,r)=>{
            if (e === t)
                return !0;
            if (1 === e.length && e[0].semver === s) {
                if (1 === t.length && t[0].semver === s)
                    return !0;
                e = r.includePrerelease ? u : c
            }
            if (1 === t.length && t[0].semver === s) {
                if (r.includePrerelease)
                    return !0;
                t = c
            }
            const n = new Set;
            let i, l, d, p, g, m, y;
            for (const t of e)
                ">" === t.operator || ">=" === t.operator ? i = f(i, t, r) : "<" === t.operator || "<=" === t.operator ? l = h(l, t, r) : n.add(t.semver);
            if (n.size > 1)
                return null;
            if (i && l) {
                if (d = a(i.semver, l.semver, r),
                d > 0)
                    return null;
                if (0 === d && (">=" !== i.operator || "<=" !== l.operator))
                    return null
            }
            for (const e of n) {
                if (i && !o(e, String(i), r))
                    return null;
                if (l && !o(e, String(l), r))
                    return null;
                for (const n of t)
                    if (!o(e, String(n), r))
                        return !1;
                return !0
            }
            let v = !(!l || r.includePrerelease || !l.semver.prerelease.length) && l.semver
              , b = !(!i || r.includePrerelease || !i.semver.prerelease.length) && i.semver;
            v && 1 === v.prerelease.length && "<" === l.operator && 0 === v.prerelease[0] && (v = !1);
            for (const e of t) {
                if (y = y || ">" === e.operator || ">=" === e.operator,
                m = m || "<" === e.operator || "<=" === e.operator,
                i)
                    if (b && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === b.major && e.semver.minor === b.minor && e.semver.patch === b.patch && (b = !1),
                    ">" === e.operator || ">=" === e.operator) {
                        if (p = f(i, e, r),
                        p === e && p !== i)
                            return !1
                    } else if (">=" === i.operator && !o(i.semver, String(e), r))
                        return !1;
                if (l)
                    if (v && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === v.major && e.semver.minor === v.minor && e.semver.patch === v.patch && (v = !1),
                    "<" === e.operator || "<=" === e.operator) {
                        if (g = h(l, e, r),
                        g === e && g !== l)
                            return !1
                    } else if ("<=" === l.operator && !o(l.semver, String(e), r))
                        return !1;
                if (!e.operator && (l || i) && 0 !== d)
                    return !1
            }
            return !(i && m && !l && 0 !== d) && (!(l && y && !i && 0 !== d) && (!b && !v))
        }
          , f = (e,t,r)=>{
            if (!e)
                return t;
            const n = a(e.semver, t.semver, r);
            return n > 0 ? e : n < 0 || ">" === t.operator && ">=" === e.operator ? t : e
        }
          , h = (e,t,r)=>{
            if (!e)
                return t;
            const n = a(e.semver, t.semver, r);
            return n < 0 ? e : n > 0 || "<" === t.operator && "<=" === e.operator ? t : e
        }
        ;
        t.exports = (e,t,r={})=>{
            if (e === t)
                return !0;
            e = new n(e,r),
            t = new n(t,r);
            let i = !1;
            e: for (const n of e.set) {
                for (const e of t.set) {
                    const t = l(n, e, r);
                    if (i = i || null !== t,
                    t)
                        continue e
                }
                if (i)
                    return !1
            }
            return !0
        }
    }
    , {
        "../classes/comparator.js": 102,
        "../classes/range.js": 103,
        "../functions/compare.js": 110,
        "../functions/satisfies.js": 126
    }],
    144: [function(e, t, r) {
        const n = e("../classes/range");
        t.exports = (e,t)=>new n(e,t).set.map((e=>e.map((e=>e.value)).join(" ").trim().split(" ")))
    }
    , {
        "../classes/range": 103
    }],
    145: [function(e, t, r) {
        const n = e("../classes/range");
        t.exports = (e,t)=>{
            try {
                return new n(e,t).range || "*"
            } catch (e) {
                return null
            }
        }
    }
    , {
        "../classes/range": 103
    }],
    146: [function(e, t, r) {
        !function(e, n) {
            "object" == typeof r && void 0 !== t ? n(r) : "function" == typeof define && define.amd ? define(["exports"], n) : n((e = "undefined" != typeof globalThis ? globalThis : e || self).Superstruct = {})
        }(this, (function(e) {
            "use strict";
            class t extends TypeError {
                constructor(e, t) {
                    let r;
                    const {message: n, explanation: i, ...s} = e
                      , {path: o} = e
                      , a = 0 === o.length ? n : `At path: ${o.join(".")} -- ${n}`;
                    super(i ?? a),
                    null != i && (this.cause = a),
                    Object.assign(this, s),
                    this.name = this.constructor.name,
                    this.failures = ()=>r ?? (r = [e, ...t()])
                }
            }
            function r(e) {
                return "object" == typeof e && null != e
            }
            function n(e) {
                if ("[object Object]" !== Object.prototype.toString.call(e))
                    return !1;
                const t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }
            function i(e) {
                return "symbol" == typeof e ? e.toString() : "string" == typeof e ? JSON.stringify(e) : `${e}`
            }
            function s(e, t, r, n) {
                if (!0 === e)
                    return;
                !1 === e ? e = {} : "string" == typeof e && (e = {
                    message: e
                });
                const {path: s, branch: o} = t
                  , {type: a} = r
                  , {refinement: u, message: c=`Expected a value of type \`${a}\`${u ? ` with refinement \`${u}\`` : ""}, but received: \`${i(n)}\``} = e;
                return {
                    value: n,
                    type: a,
                    refinement: u,
                    key: s[s.length - 1],
                    path: s,
                    branch: o,
                    ...e,
                    message: c
                }
            }
            function *o(e, t, n, i) {
                var o;
                r(o = e) && "function" == typeof o[Symbol.iterator] || (e = [e]);
                for (const r of e) {
                    const e = s(r, t, n, i);
                    e && (yield e)
                }
            }
            function *a(e, t, n={}) {
                const {path: i=[], branch: s=[e], coerce: o=!1, mask: u=!1} = n
                  , c = {
                    path: i,
                    branch: s
                };
                if (o && (e = t.coercer(e, c),
                u && "type" !== t.type && r(t.schema) && r(e) && !Array.isArray(e)))
                    for (const r in e)
                        void 0 === t.schema[r] && delete e[r];
                let l = "valid";
                for (const r of t.validator(e, c))
                    r.explanation = n.message,
                    l = "not_valid",
                    yield[r, void 0];
                for (let[f,h,d] of t.entries(e, c)) {
                    const t = a(h, d, {
                        path: void 0 === f ? i : [...i, f],
                        branch: void 0 === f ? s : [...s, h],
                        coerce: o,
                        mask: u,
                        message: n.message
                    });
                    for (const n of t)
                        n[0] ? (l = null != n[0].refinement ? "not_refined" : "not_valid",
                        yield[n[0], void 0]) : o && (h = n[1],
                        void 0 === f ? e = h : e instanceof Map ? e.set(f, h) : e instanceof Set ? e.add(h) : r(e) && (void 0 !== h || f in e) && (e[f] = h))
                }
                if ("not_valid" !== l)
                    for (const r of t.refiner(e, c))
                        r.explanation = n.message,
                        l = "not_refined",
                        yield[r, void 0];
                "valid" === l && (yield[void 0, e])
            }
            class u {
                constructor(e) {
                    const {type: t, schema: r, validator: n, refiner: i, coercer: s=(e=>e), entries: a=function*() {}
                    } = e;
                    this.type = t,
                    this.schema = r,
                    this.entries = a,
                    this.coercer = s,
                    this.validator = n ? (e,t)=>o(n(e, t), t, this, e) : ()=>[],
                    this.refiner = i ? (e,t)=>o(i(e, t), t, this, e) : ()=>[]
                }
                assert(e, t) {
                    return c(e, this, t)
                }
                create(e, t) {
                    return l(e, this, t)
                }
                is(e) {
                    return h(e, this)
                }
                mask(e, t) {
                    return f(e, this, t)
                }
                validate(e, t={}) {
                    return d(e, this, t)
                }
            }
            function c(e, t, r) {
                const n = d(e, t, {
                    message: r
                });
                if (n[0])
                    throw n[0]
            }
            function l(e, t, r) {
                const n = d(e, t, {
                    coerce: !0,
                    message: r
                });
                if (n[0])
                    throw n[0];
                return n[1]
            }
            function f(e, t, r) {
                const n = d(e, t, {
                    coerce: !0,
                    mask: !0,
                    message: r
                });
                if (n[0])
                    throw n[0];
                return n[1]
            }
            function h(e, t) {
                return !d(e, t)[0]
            }
            function d(e, r, n={}) {
                const i = a(e, r, n)
                  , s = function(e) {
                    const {done: t, value: r} = e.next();
                    return t ? void 0 : r
                }(i);
                if (s[0]) {
                    return [new t(s[0],(function*() {
                        for (const e of i)
                            e[0] && (yield e[0])
                    }
                    )), void 0]
                }
                return [void 0, s[1]]
            }
            function p(e, t) {
                return new u({
                    type: e,
                    schema: null,
                    validator: t
                })
            }
            function g() {
                return p("never", (()=>!1))
            }
            function m(e) {
                const t = e ? Object.keys(e) : []
                  , n = g();
                return new u({
                    type: "object",
                    schema: e || null,
                    *entries(i) {
                        if (e && r(i)) {
                            const r = new Set(Object.keys(i));
                            for (const n of t)
                                r.delete(n),
                                yield[n, i[n], e[n]];
                            for (const e of r)
                                yield[e, i[e], n]
                        }
                    },
                    validator: e=>r(e) || `Expected an object, but received: ${i(e)}`,
                    coercer: e=>r(e) ? {
                        ...e
                    } : e
                })
            }
            function y(e) {
                return new u({
                    ...e,
                    validator: (t,r)=>void 0 === t || e.validator(t, r),
                    refiner: (t,r)=>void 0 === t || e.refiner(t, r)
                })
            }
            function v() {
                return p("string", (e=>"string" == typeof e || `Expected a string, but received: ${i(e)}`))
            }
            function b(e) {
                const t = Object.keys(e);
                return new u({
                    type: "type",
                    schema: e,
                    *entries(n) {
                        if (r(n))
                            for (const r of t)
                                yield[r, n[r], e[r]]
                    },
                    validator: e=>r(e) || `Expected an object, but received: ${i(e)}`,
                    coercer: e=>r(e) ? {
                        ...e
                    } : e
                })
            }
            function w() {
                return p("unknown", (()=>!0))
            }
            function _(e, t, r) {
                return new u({
                    ...e,
                    coercer: (n,i)=>h(n, t) ? e.coercer(r(n, i), i) : e.coercer(n, i)
                })
            }
            function E(e) {
                return e instanceof Map || e instanceof Set ? e.size : e.length
            }
            function S(e, t, r) {
                return new u({
                    ...e,
                    *refiner(n, i) {
                        yield*e.refiner(n, i);
                        const s = o(r(n, i), i, e, n);
                        for (const e of s)
                            yield{
                                ...e,
                                refinement: t
                            }
                    }
                })
            }
            e.Struct = u,
            e.StructError = t,
            e.any = function() {
                return p("any", (()=>!0))
            }
            ,
            e.array = function(e) {
                return new u({
                    type: "array",
                    schema: e,
                    *entries(t) {
                        if (e && Array.isArray(t))
                            for (const [r,n] of t.entries())
                                yield[r, n, e]
                    },
                    coercer: e=>Array.isArray(e) ? e.slice() : e,
                    validator: e=>Array.isArray(e) || `Expected an array value, but received: ${i(e)}`
                })
            }
            ,
            e.assert = c,
            e.assign = function(...e) {
                const t = "type" === e[0].type
                  , r = e.map((e=>e.schema))
                  , n = Object.assign({}, ...r);
                return t ? b(n) : m(n)
            }
            ,
            e.bigint = function() {
                return p("bigint", (e=>"bigint" == typeof e))
            }
            ,
            e.boolean = function() {
                return p("boolean", (e=>"boolean" == typeof e))
            }
            ,
            e.coerce = _,
            e.create = l,
            e.date = function() {
                return p("date", (e=>e instanceof Date && !isNaN(e.getTime()) || `Expected a valid \`Date\` object, but received: ${i(e)}`))
            }
            ,
            e.defaulted = function(e, t, r={}) {
                return _(e, w(), (e=>{
                    const i = "function" == typeof t ? t() : t;
                    if (void 0 === e)
                        return i;
                    if (!r.strict && n(e) && n(i)) {
                        const t = {
                            ...e
                        };
                        let r = !1;
                        for (const e in i)
                            void 0 === t[e] && (t[e] = i[e],
                            r = !0);
                        if (r)
                            return t
                    }
                    return e
                }
                ))
            }
            ,
            e.define = p,
            e.deprecated = function(e, t) {
                return new u({
                    ...e,
                    refiner: (t,r)=>void 0 === t || e.refiner(t, r),
                    validator: (r,n)=>void 0 === r || (t(r, n),
                    e.validator(r, n))
                })
            }
            ,
            e.dynamic = function(e) {
                return new u({
                    type: "dynamic",
                    schema: null,
                    *entries(t, r) {
                        const n = e(t, r);
                        yield*n.entries(t, r)
                    },
                    validator: (t,r)=>e(t, r).validator(t, r),
                    coercer: (t,r)=>e(t, r).coercer(t, r),
                    refiner: (t,r)=>e(t, r).refiner(t, r)
                })
            }
            ,
            e.empty = function(e) {
                return S(e, "empty", (t=>{
                    const r = E(t);
                    return 0 === r || `Expected an empty ${e.type} but received one with a size of \`${r}\``
                }
                ))
            }
            ,
            e.enums = function(e) {
                const t = {}
                  , r = e.map((e=>i(e))).join();
                for (const r of e)
                    t[r] = r;
                return new u({
                    type: "enums",
                    schema: t,
                    validator: t=>e.includes(t) || `Expected one of \`${r}\`, but received: ${i(t)}`
                })
            }
            ,
            e.func = function() {
                return p("func", (e=>"function" == typeof e || `Expected a function, but received: ${i(e)}`))
            }
            ,
            e.instance = function(e) {
                return p("instance", (t=>t instanceof e || `Expected a \`${e.name}\` instance, but received: ${i(t)}`))
            }
            ,
            e.integer = function() {
                return p("integer", (e=>"number" == typeof e && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${i(e)}`))
            }
            ,
            e.intersection = function(e) {
                return new u({
                    type: "intersection",
                    schema: null,
                    *entries(t, r) {
                        for (const n of e)
                            yield*n.entries(t, r)
                    },
                    *validator(t, r) {
                        for (const n of e)
                            yield*n.validator(t, r)
                    },
                    *refiner(t, r) {
                        for (const n of e)
                            yield*n.refiner(t, r)
                    }
                })
            }
            ,
            e.is = h,
            e.lazy = function(e) {
                let t;
                return new u({
                    type: "lazy",
                    schema: null,
                    *entries(r, n) {
                        t ?? (t = e()),
                        yield*t.entries(r, n)
                    },
                    validator: (r,n)=>(t ?? (t = e()),
                    t.validator(r, n)),
                    coercer: (r,n)=>(t ?? (t = e()),
                    t.coercer(r, n)),
                    refiner: (r,n)=>(t ?? (t = e()),
                    t.refiner(r, n))
                })
            }
            ,
            e.literal = function(e) {
                const t = i(e)
                  , r = typeof e;
                return new u({
                    type: "literal",
                    schema: "string" === r || "number" === r || "boolean" === r ? e : null,
                    validator: r=>r === e || `Expected the literal \`${t}\`, but received: ${i(r)}`
                })
            }
            ,
            e.map = function(e, t) {
                return new u({
                    type: "map",
                    schema: null,
                    *entries(r) {
                        if (e && t && r instanceof Map)
                            for (const [n,i] of r.entries())
                                yield[n, n, e],
                                yield[n, i, t]
                    },
                    coercer: e=>e instanceof Map ? new Map(e) : e,
                    validator: e=>e instanceof Map || `Expected a \`Map\` object, but received: ${i(e)}`
                })
            }
            ,
            e.mask = f,
            e.max = function(e, t, r={}) {
                const {exclusive: n} = r;
                return S(e, "max", (r=>n ? r < t : r <= t || `Expected a ${e.type} less than ${n ? "" : "or equal to "}${t} but received \`${r}\``))
            }
            ,
            e.min = function(e, t, r={}) {
                const {exclusive: n} = r;
                return S(e, "min", (r=>n ? r > t : r >= t || `Expected a ${e.type} greater than ${n ? "" : "or equal to "}${t} but received \`${r}\``))
            }
            ,
            e.never = g,
            e.nonempty = function(e) {
                return S(e, "nonempty", (t=>E(t) > 0 || `Expected a nonempty ${e.type} but received an empty one`))
            }
            ,
            e.nullable = function(e) {
                return new u({
                    ...e,
                    validator: (t,r)=>null === t || e.validator(t, r),
                    refiner: (t,r)=>null === t || e.refiner(t, r)
                })
            }
            ,
            e.number = function() {
                return p("number", (e=>"number" == typeof e && !isNaN(e) || `Expected a number, but received: ${i(e)}`))
            }
            ,
            e.object = m,
            e.omit = function(e, t) {
                const {schema: r} = e
                  , n = {
                    ...r
                };
                for (const e of t)
                    delete n[e];
                return "type" === e.type ? b(n) : m(n)
            }
            ,
            e.optional = y,
            e.partial = function(e) {
                const t = e instanceof u ? {
                    ...e.schema
                } : {
                    ...e
                };
                for (const e in t)
                    t[e] = y(t[e]);
                return m(t)
            }
            ,
            e.pattern = function(e, t) {
                return S(e, "pattern", (r=>t.test(r) || `Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`))
            }
            ,
            e.pick = function(e, t) {
                const {schema: r} = e
                  , n = {};
                for (const e of t)
                    n[e] = r[e];
                return m(n)
            }
            ,
            e.record = function(e, t) {
                return new u({
                    type: "record",
                    schema: null,
                    *entries(n) {
                        if (r(n))
                            for (const r in n) {
                                const i = n[r];
                                yield[r, r, e],
                                yield[r, i, t]
                            }
                    },
                    validator: e=>r(e) || `Expected an object, but received: ${i(e)}`
                })
            }
            ,
            e.refine = S,
            e.regexp = function() {
                return p("regexp", (e=>e instanceof RegExp))
            }
            ,
            e.set = function(e) {
                return new u({
                    type: "set",
                    schema: null,
                    *entries(t) {
                        if (e && t instanceof Set)
                            for (const r of t)
                                yield[r, r, e]
                    },
                    coercer: e=>e instanceof Set ? new Set(e) : e,
                    validator: e=>e instanceof Set || `Expected a \`Set\` object, but received: ${i(e)}`
                })
            }
            ,
            e.size = function(e, t, r=t) {
                const n = `Expected a ${e.type}`
                  , i = t === r ? `of \`${t}\`` : `between \`${t}\` and \`${r}\``;
                return S(e, "size", (e=>{
                    if ("number" == typeof e || e instanceof Date)
                        return t <= e && e <= r || `${n} ${i} but received \`${e}\``;
                    if (e instanceof Map || e instanceof Set) {
                        const {size: s} = e;
                        return t <= s && s <= r || `${n} with a size ${i} but received one with a size of \`${s}\``
                    }
                    {
                        const {length: s} = e;
                        return t <= s && s <= r || `${n} with a length ${i} but received one with a length of \`${s}\``
                    }
                }
                ))
            }
            ,
            e.string = v,
            e.struct = function(e, t) {
                return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."),
                p(e, t)
            }
            ,
            e.trimmed = function(e) {
                return _(e, v(), (e=>e.trim()))
            }
            ,
            e.tuple = function(e) {
                const t = g();
                return new u({
                    type: "tuple",
                    schema: null,
                    *entries(r) {
                        if (Array.isArray(r)) {
                            const n = Math.max(e.length, r.length);
                            for (let i = 0; i < n; i++)
                                yield[i, r[i], e[i] || t]
                        }
                    },
                    validator: e=>Array.isArray(e) || `Expected an array, but received: ${i(e)}`
                })
            }
            ,
            e.type = b,
            e.union = function(e) {
                const t = e.map((e=>e.type)).join(" | ");
                return new u({
                    type: "union",
                    schema: null,
                    coercer(t) {
                        for (const r of e) {
                            const [e,n] = r.validate(t, {
                                coerce: !0
                            });
                            if (!e)
                                return n
                        }
                        return t
                    },
                    validator(r, n) {
                        const s = [];
                        for (const t of e) {
                            const [...e] = a(r, t, n)
                              , [i] = e;
                            if (!i[0])
                                return [];
                            for (const [t] of e)
                                t && s.push(t)
                        }
                        return [`Expected the value to satisfy a union of \`${t}\`, but received: ${i(r)}`, ...s]
                    }
                })
            }
            ,
            e.unknown = w,
            e.validate = d
        }
        ))
    }
    , {}],
    147: [function(e, t, r) {
        (function(t, n) {
            (function() {
                var i = e("process/browser.js").nextTick
                  , s = Function.prototype.apply
                  , o = Array.prototype.slice
                  , a = {}
                  , u = 0;
                function c(e, t) {
                    this._id = e,
                    this._clearFn = t
                }
                r.setTimeout = function() {
                    return new c(s.call(setTimeout, window, arguments),clearTimeout)
                }
                ,
                r.setInterval = function() {
                    return new c(s.call(setInterval, window, arguments),clearInterval)
                }
                ,
                r.clearTimeout = r.clearInterval = function(e) {
                    e.close()
                }
                ,
                c.prototype.unref = c.prototype.ref = function() {}
                ,
                c.prototype.close = function() {
                    this._clearFn.call(window, this._id)
                }
                ,
                r.enroll = function(e, t) {
                    clearTimeout(e._idleTimeoutId),
                    e._idleTimeout = t
                }
                ,
                r.unenroll = function(e) {
                    clearTimeout(e._idleTimeoutId),
                    e._idleTimeout = -1
                }
                ,
                r._unrefActive = r.active = function(e) {
                    clearTimeout(e._idleTimeoutId);
                    var t = e._idleTimeout;
                    t >= 0 && (e._idleTimeoutId = setTimeout((function() {
                        e._onTimeout && e._onTimeout()
                    }
                    ), t))
                }
                ,
                r.setImmediate = "function" == typeof t ? t : function(e) {
                    var t = u++
                      , n = !(arguments.length < 2) && o.call(arguments, 1);
                    return a[t] = !0,
                    i((function() {
                        a[t] && (n ? e.apply(null, n) : e.call(null),
                        r.clearImmediate(t))
                    }
                    )),
                    t
                }
                ,
                r.clearImmediate = "function" == typeof n ? n : function(e) {
                    delete a[e]
                }
            }
            ).call(this)
        }
        ).call(this, e("timers").setImmediate, e("timers").clearImmediate)
    }
    , {
        "process/browser.js": 89,
        timers: 147
    }],
    148: [function(e, t, r) {
        (function(e) {
            (function() {
                function r(t) {
                    try {
                        if (!e.localStorage)
                            return !1
                    } catch (e) {
                        return !1
                    }
                    var r = e.localStorage[t];
                    return null != r && "true" === String(r).toLowerCase()
                }
                t.exports = function(e, t) {
                    if (r("noDeprecation"))
                        return e;
                    var n = !1;
                    return function() {
                        if (!n) {
                            if (r("throwDeprecation"))
                                throw new Error(t);
                            r("traceDeprecation") ? console.trace(t) : console.warn(t),
                            n = !0
                        }
                        return e.apply(this, arguments)
                    }
                }
            }
            ).call(this)
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    149: [function(e, t, r) {
        t.exports = function e(t, r) {
            if (t && r)
                return e(t)(r);
            if ("function" != typeof t)
                throw new TypeError("need wrapper function");
            return Object.keys(t).forEach((function(e) {
                n[e] = t[e]
            }
            )),
            n;
            function n() {
                for (var e = new Array(arguments.length), r = 0; r < e.length; r++)
                    e[r] = arguments[r];
                var n = t.apply(this, e)
                  , i = e[e.length - 1];
                return "function" == typeof n && n !== i && Object.keys(i).forEach((function(e) {
                    n[e] = i[e]
                }
                )),
                n
            }
        }
    }
    , {}],
    150: [function(e, t, r) {
        "use strict";
        t.exports = function(e) {
            e.prototype[Symbol.iterator] = function*() {
                for (let e = this.head; e; e = e.next)
                    yield e.value
            }
        }
    }
    , {}],
    151: [function(e, t, r) {
        "use strict";
        function n(e) {
            var t = this;
            if (t instanceof n || (t = new n),
            t.tail = null,
            t.head = null,
            t.length = 0,
            e && "function" == typeof e.forEach)
                e.forEach((function(e) {
                    t.push(e)
                }
                ));
            else if (arguments.length > 0)
                for (var r = 0, i = arguments.length; r < i; r++)
                    t.push(arguments[r]);
            return t
        }
        function i(e, t, r) {
            var n = t === e.head ? new a(r,null,t,e) : new a(r,t,t.next,e);
            return null === n.next && (e.tail = n),
            null === n.prev && (e.head = n),
            e.length++,
            n
        }
        function s(e, t) {
            e.tail = new a(t,e.tail,null,e),
            e.head || (e.head = e.tail),
            e.length++
        }
        function o(e, t) {
            e.head = new a(t,null,e.head,e),
            e.tail || (e.tail = e.head),
            e.length++
        }
        function a(e, t, r, n) {
            if (!(this instanceof a))
                return new a(e,t,r,n);
            this.list = n,
            this.value = e,
            t ? (t.next = this,
            this.prev = t) : this.prev = null,
            r ? (r.prev = this,
            this.next = r) : this.next = null
        }
        t.exports = n,
        n.Node = a,
        n.create = n,
        n.prototype.removeNode = function(e) {
            if (e.list !== this)
                throw new Error("removing node which does not belong to this list");
            var t = e.next
              , r = e.prev;
            return t && (t.prev = r),
            r && (r.next = t),
            e === this.head && (this.head = t),
            e === this.tail && (this.tail = r),
            e.list.length--,
            e.next = null,
            e.prev = null,
            e.list = null,
            t
        }
        ,
        n.prototype.unshiftNode = function(e) {
            if (e !== this.head) {
                e.list && e.list.removeNode(e);
                var t = this.head;
                e.list = this,
                e.next = t,
                t && (t.prev = e),
                this.head = e,
                this.tail || (this.tail = e),
                this.length++
            }
        }
        ,
        n.prototype.pushNode = function(e) {
            if (e !== this.tail) {
                e.list && e.list.removeNode(e);
                var t = this.tail;
                e.list = this,
                e.prev = t,
                t && (t.next = e),
                this.tail = e,
                this.head || (this.head = e),
                this.length++
            }
        }
        ,
        n.prototype.push = function() {
            for (var e = 0, t = arguments.length; e < t; e++)
                s(this, arguments[e]);
            return this.length
        }
        ,
        n.prototype.unshift = function() {
            for (var e = 0, t = arguments.length; e < t; e++)
                o(this, arguments[e]);
            return this.length
        }
        ,
        n.prototype.pop = function() {
            if (this.tail) {
                var e = this.tail.value;
                return this.tail = this.tail.prev,
                this.tail ? this.tail.next = null : this.head = null,
                this.length--,
                e
            }
        }
        ,
        n.prototype.shift = function() {
            if (this.head) {
                var e = this.head.value;
                return this.head = this.head.next,
                this.head ? this.head.prev = null : this.tail = null,
                this.length--,
                e
            }
        }
        ,
        n.prototype.forEach = function(e, t) {
            t = t || this;
            for (var r = this.head, n = 0; null !== r; n++)
                e.call(t, r.value, n, this),
                r = r.next
        }
        ,
        n.prototype.forEachReverse = function(e, t) {
            t = t || this;
            for (var r = this.tail, n = this.length - 1; null !== r; n--)
                e.call(t, r.value, n, this),
                r = r.prev
        }
        ,
        n.prototype.get = function(e) {
            for (var t = 0, r = this.head; null !== r && t < e; t++)
                r = r.next;
            if (t === e && null !== r)
                return r.value
        }
        ,
        n.prototype.getReverse = function(e) {
            for (var t = 0, r = this.tail; null !== r && t < e; t++)
                r = r.prev;
            if (t === e && null !== r)
                return r.value
        }
        ,
        n.prototype.map = function(e, t) {
            t = t || this;
            for (var r = new n, i = this.head; null !== i; )
                r.push(e.call(t, i.value, this)),
                i = i.next;
            return r
        }
        ,
        n.prototype.mapReverse = function(e, t) {
            t = t || this;
            for (var r = new n, i = this.tail; null !== i; )
                r.push(e.call(t, i.value, this)),
                i = i.prev;
            return r
        }
        ,
        n.prototype.reduce = function(e, t) {
            var r, n = this.head;
            if (arguments.length > 1)
                r = t;
            else {
                if (!this.head)
                    throw new TypeError("Reduce of empty list with no initial value");
                n = this.head.next,
                r = this.head.value
            }
            for (var i = 0; null !== n; i++)
                r = e(r, n.value, i),
                n = n.next;
            return r
        }
        ,
        n.prototype.reduceReverse = function(e, t) {
            var r, n = this.tail;
            if (arguments.length > 1)
                r = t;
            else {
                if (!this.tail)
                    throw new TypeError("Reduce of empty list with no initial value");
                n = this.tail.prev,
                r = this.tail.value
            }
            for (var i = this.length - 1; null !== n; i--)
                r = e(r, n.value, i),
                n = n.prev;
            return r
        }
        ,
        n.prototype.toArray = function() {
            for (var e = new Array(this.length), t = 0, r = this.head; null !== r; t++)
                e[t] = r.value,
                r = r.next;
            return e
        }
        ,
        n.prototype.toArrayReverse = function() {
            for (var e = new Array(this.length), t = 0, r = this.tail; null !== r; t++)
                e[t] = r.value,
                r = r.prev;
            return e
        }
        ,
        n.prototype.slice = function(e, t) {
            (t = t || this.length) < 0 && (t += this.length),
            (e = e || 0) < 0 && (e += this.length);
            var r = new n;
            if (t < e || t < 0)
                return r;
            e < 0 && (e = 0),
            t > this.length && (t = this.length);
            for (var i = 0, s = this.head; null !== s && i < e; i++)
                s = s.next;
            for (; null !== s && i < t; i++,
            s = s.next)
                r.push(s.value);
            return r
        }
        ,
        n.prototype.sliceReverse = function(e, t) {
            (t = t || this.length) < 0 && (t += this.length),
            (e = e || 0) < 0 && (e += this.length);
            var r = new n;
            if (t < e || t < 0)
                return r;
            e < 0 && (e = 0),
            t > this.length && (t = this.length);
            for (var i = this.length, s = this.tail; null !== s && i > t; i--)
                s = s.prev;
            for (; null !== s && i > e; i--,
            s = s.prev)
                r.push(s.value);
            return r
        }
        ,
        n.prototype.splice = function(e, t, ...r) {
            e > this.length && (e = this.length - 1),
            e < 0 && (e = this.length + e);
            for (var n = 0, s = this.head; null !== s && n < e; n++)
                s = s.next;
            var o = [];
            for (n = 0; s && n < t; n++)
                o.push(s.value),
                s = this.removeNode(s);
            null === s && (s = this.tail),
            s !== this.head && s !== this.tail && (s = s.prev);
            for (n = 0; n < r.length; n++)
                s = i(this, s, r[n]);
            return o
        }
        ,
        n.prototype.reverse = function() {
            for (var e = this.head, t = this.tail, r = e; null !== r; r = r.prev) {
                var n = r.prev;
                r.prev = r.next,
                r.next = n
            }
            return this.head = t,
            this.tail = e,
            this
        }
        ;
        try {
            e("./iterator.js")(n)
        } catch (e) {}
    }
    , {
        "./iterator.js": 150
    }],
    152: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = function() {
            return function() {
                const {doctype: e} = window.document;
                if (e)
                    return "html" === e.name;
                return !0
            }() && function() {
                const e = [/\.xml$/u, /\.pdf$/u]
                  , t = window.location.pathname;
                for (let r = 0; r < e.length; r++)
                    if (e[r].test(t))
                        return !1;
                return !0
            }() && function() {
                const e = document.documentElement.nodeName;
                if (e)
                    return "html" === e.toLowerCase();
                return !0
            }() && !function() {
                const e = ["execution.consensys.io", "execution.metamask.io", "uscourts.gov", "dropbox.com", "webbyawards.com", "cdn.shopify.com/s/javascripts/tricorder/xtld-read-only-frame.html", "adyen.com", "gravityforms.com", "harbourair.com", "ani.gamer.com.tw", "blueskybooking.com", "sharefile.com"]
                  , t = window.location.href;
                let r;
                for (let n = 0; n < e.length; n++) {
                    const i = e[n].replace(".", "\\.");
                    if (r = new RegExp(`(?:https?:\\/\\/)(?:(?!${i}).)*$`,"u"),
                    !r.test(t))
                        return !0
                }
                return !1
            }()
        }
    }
    , {}]
}, {}, [1]);
//# sourceURL=chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/inpage.js
