"use strict";
window.g_aRz = class {
    constructor(e, a) {
        this.g_aqU = e, this.g_aRA = a, this.g_aRB = !1, this.g_aRC = () => this.g_KM()
    }
    g_aRD() {}
    g_aRE(e, a, g, _) {
        this.g_aqU.g_aRF(this.g_aRA, e, a, g, _)
    }
    g_aRG(e, a, g, _) {
        return this.g_aqU.g_aRH(this.g_aRA, e, a, g, _)
    }
    g_aRI(e, a, g) {
        this.g_aqU.g_aRJ() ? this.g_aRE(e, a, g) : this.g_aqU.g_aRK()._OnMessageFromDOM({
            type: "event",
            component: this.g_aRA,
            handler: e,
            dispatchOpts: g || null,
            data: a,
            responseId: null
        })
    }
    g_aRL(e, a) {
        this.g_aqU.g_aRM(this.g_aRA, e, a)
    }
    g_aRN(e) {
        for (const [a, g] of e) this.g_aRL(a, g)
    }
    g_aRO() {
        return this.g_aqU
    }
    g_aRP() {
        return this.g_aRA
    }
    g_adZ() {
        this.g_aRB || (this.g_aqU.g_aRQ(this.g_aRC), this.g_aRB = !0)
    }
    g_adK() {
        this.g_aRB && (this.g_aqU.g_aRR(this.g_aRC), this.g_aRB = !1)
    }
    g_KM() {}
}, window.g_mM = class {
    constructor(e, a) {
        this.g_lv = e, this.g_mN = a, this.g_mP = -1, this.g_mQ = -Infinity, this.g_mR = () => this.g_mS(), this.g_mT = !1, this.g_mU = !1
    }
    g_mW(e) {
        this.g_mU = !!e
    }
    g_m_() {
        if (-1 === this.g_mP) {
            const e = Date.now(),
                a = e - this.g_mQ,
                g = this.g_mN;
            a >= g && this.g_mU ? (this.g_mQ = e, this.g_m$()) : this.g_mP = self.setTimeout(this.g_mR, Math.max(g - a, 4))
        }
    }
    g_m$() {
        this.g_mT = !0, this.g_lv(), this.g_mT = !1
    }
    g_lz() {
        this.g_mT || (this.g_na(), this.g_mQ = Date.now())
    }
    g_mS() {
        this.g_mP = -1, this.g_mQ = Date.now(), this.g_m$()
    }
    g_na() {
        -1 !== this.g_mP && (self.clearTimeout(this.g_mP), this.g_mP = -1)
    }
    g_ek() {
        this.g_na(), this.g_lv = null, this.g_mR = null
    }
}, "use strict", window.g_aRS = class extends g_aRz {
    constructor(e, a) {
        super(e, a), this.g_aRT = new Map, this.g_aRU = !0, this.g_aRL("create", e => this.g_aRV(e)), this.g_aRL("destroy", e => this.g_aRW(e)), this.g_aRL("set-visible", e => this.g_aRX(e)), this.g_aRL("update-position", e => this.g_aRY(e)), this.g_aRL("update-state", e => this.g_axA(e)), this.g_aRL("focus", e => this.g_aRZ(e)), this.g_aRL("set-css-style", e => this.g_aR_(e))
    }
    g_aR$(e) {
        this.g_aRU = !!e
    }
    g_aSa(e, g) {
        this.g_aRL(e, e => {
            const a = e.elementId,
                _ = this.g_aRT.get(a);
            return g(_, e)
        })
    }
    g_aRV(e) {
        const a = e.elementId,
            g = this.g_aex(a, e);
        this.g_aRT.set(a, g), e.isVisible || (g.style.display = "none"), this.g_aRU && document.body.appendChild(g)
    }
    g_aex() {
        throw new Error("required override")
    }
    g_aSb() {}
    g_aRW(e) {
        const a = e.elementId,
            g = this.g_aRT.get(a);
        this.g_aSb(g), this.g_aRU && g.parentElement.removeChild(g), this.g_aRT.delete(a)
    }
    g_aSc(e, a, g) {
        g || (g = {}), g.elementId = a, this.g_aRE(e, g)
    }
    g_aSd(e, a, g) {
        g || (g = {}), g.elementId = a, this.g_aRI(e, g)
    }
    g_aRX(e) {
        if (this.g_aRU) {
            const a = this.g_aRT.get(e.elementId);
            a.style.display = e.isVisible ? "" : "none"
        }
    }
    g_aRY(e) {
        if (this.g_aRU) {
            const a = this.g_aRT.get(e.elementId);
            a.style.left = e.left + "px", a.style.top = e.top + "px", a.style.width = e.width + "px", a.style.height = e.height + "px";
            const g = e.fontSize;
            null !== g && (a.style.fontSize = g + "em")
        }
    }
    g_axA(e) {
        const a = this.g_aRT.get(e.elementId);
        this.g_aSe(a, e)
    }
    g_aSe() {
        throw new Error("required override")
    }
    g_aRZ(e) {
        const a = this.g_aRT.get(e.elementId);
        e.focus ? a.focus() : a.blur()
    }
    g_aR_(e) {
        const a = this.g_aRT.get(e.elementId);
        a.style[e.prop] = e.val
    }
    g_aSf(e) {
        return this.g_aRT.get(e)
    }
}, "use strict"; {
    function _(e) {
        if (e.g_aSg) {
            const a = document.createElement("script");
            a.async = !1, a.textContent = e.g_C, document.head.appendChild(a)
        } else return new Promise((a, g) => {
            const _ = document.createElement("script");
            _.onload = a, _.onerror = g, _.async = !1, _.src = e, document.head.appendChild(_)
        })
    }
    async function t(e) {
        const a = await r(e),
            g = new TextDecoder("utf-8");
        return g.decode(a)
    }

    function r(e) {
        return new Promise((g, _) => {
            const a = new FileReader;
            a.onload = e => g(e.target.result), a.onerror = e => _(e), a.readAsArrayBuffer(e)
        })
    }

    function s(e) {
        return n.has(e)
    }
    const a = /(iphone|ipod|ipad)/i.test(navigator.userAgent);
    let e = new Audio;
    const d = {
        "audio/webm; codecs=opus": !!e.canPlayType("audio/webm; codecs=opus"),
        "audio/ogg; codecs=opus": !!e.canPlayType("audio/ogg; codecs=opus"),
        "audio/webm; codecs=vorbis": !!e.canPlayType("audio/webm; codecs=vorbis"),
        "audio/ogg; codecs=vorbis": !!e.canPlayType("audio/ogg; codecs=vorbis"),
        "audio/mp4": !!e.canPlayType("audio/mp4"),
        "audio/mpeg": !!e.canPlayType("audio/mpeg")
    };
    e = null;
    const g = [];
    let u = 0;
    window.RealFile = window.File;
    const i = [],
        p = new Map,
        X = new Map;
    let l = 0;
    const m = [];
    self.g_aSh = function(e) {
        if ("function" != typeof e) throw new Error("runOnStartup called without a function");
        m.push(e)
    };
    const n = new Set(["cordova", "playable-ad", "instant-games"]);
    window.g_aSi = class e {
        constructor(e) {
            this.g_aSj = e.g_aSk, this.g_aSl = null, this.g_aoP = "", this.g_aSm = e.g_aSn, this.g_aSo = {}, this.g_aSp = null, this.g_aSq = null, this.g_aSr = [], this.g_aSs = null, this.g_amQ = null, this.g_aqO = null, this.g_anx = -1, this.g_aSt = () => this.g_aSu(), this.g_aSv = [], this.g_aoU = e.g_aSw, s(this.g_aoU) && this.g_aSj && (console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."), this.g_aSj = !1), this.g_aSx = !1, this.g_aSy = null, this.g_aSz = null, ("html5" === this.g_aoU || "playable-ad" === this.g_aoU) && "file" === location.protocol.substr(0, 4) && alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"), this.g_aRM("runtime", "cordova-fetch-local-file", e => this.g_aSA(e)), this.g_aRM("runtime", "create-job-worker", e => this.g_aSB(e)), "cordova" === this.g_aoU ? document.addEventListener("deviceready", () => this.g_acN(e)) : this.g_acN(e)
        }
        g_ek() {
            this.g_arL(), this.g_aSl && (this.g_aSl.onmessage = null, this.g_aSl = null), this.g_aSp && (this.g_aSp.terminate(), this.g_aSp = null), this.g_aSq && (this.g_aSq.g_ek(), this.g_aSq = null), this.g_amQ && (this.g_amQ.parentElement.removeChild(this.g_amQ), this.g_amQ = null)
        }
        g_aSC() {
            return this.g_amQ
        }
        g_fe() {
            return this.g_aoP
        }
        g_aRJ() {
            return this.g_aSj
        }
        g_asy() {
            return this.g_aoU
        }
        g_arl() {
            return a && "cordova" === this.g_aoU
        }
        g_asz() {
            return a && s(this.g_aoU)
        }
        async g_acN(e) {
            if ("playable-ad" === this.g_aoU) {
                this.g_aSy = self.c3_base64files, this.g_aSz = {}, await this.g_aSD();
                for (let a = 0, g = e.g_aSE.length; a < g; ++a) {
                    const g = e.g_aSE[a].toLowerCase();
                    this.g_aSz.hasOwnProperty(g) ? e.g_aSE[a] = {
                        g_aSg: !0,
                        g_C: this.g_aSz[g]
                    } : this.g_aSy.hasOwnProperty(g) && (e.g_aSE[a] = URL.createObjectURL(this.g_aSy[g]))
                }
            }
            if (e.g_aSF) this.g_aoP = e.g_aSF;
            else {
                const e = location.origin;
                this.g_aoP = ("null" === e ? "file:///" : e) + location.pathname;
                const a = this.g_aoP.lastIndexOf("/"); - 1 !== a && (this.g_aoP = this.g_aoP.substr(0, a + 1))
            }
            if (e.g_aSG)
                for (const [a, g] of Object.entries(e.g_aSG)) this.g_aSo[a] = URL.createObjectURL(g);
            const a = new MessageChannel;
            this.g_aSl = a.port1, this.g_aSl.onmessage = e => this._OnMessageFromRuntime(e.data), window.c3_addPortMessageHandler && window.c3_addPortMessageHandler(e => this.g_aSH(e)), this.g_aqO = new self.g_aSI(this), await this.g_aqO.g_ajY(), this.g_aSJ(), "object" == typeof window.StatusBar && window.StatusBar.hide(), "object" == typeof window.AndroidFullScreen && window.AndroidFullScreen.immersiveMode(), await this.g_aSK(), this.g_aSj ? await this.g_aSL(e, a.port2) : await this.g_aSM(e, a.port2)
        }
        g_aSN(e) {
            return this.g_aSo.hasOwnProperty(e) ? this.g_aSo[e] : e.endsWith("/workermain.js") && this.g_aSo.hasOwnProperty("workermain.js") ? this.g_aSo["workermain.js"] : "playable-ad" === this.g_aoU && this.g_aSy.hasOwnProperty(e.toLowerCase()) ? URL.createObjectURL(this.g_aSy[e.toLowerCase()]) : e
        }
        async g_aSO(g, a, _) {
            if (g.startsWith("blob:")) return new Worker(g, _);
            if (this.g_arl()) {
                const a = await this.g_BK(this.g_aSm + g),
                    e = new Blob([a], {
                        type: "application/javascript"
                    });
                return new Worker(URL.createObjectURL(e), _)
            }
            const t = new URL(g, a),
                n = location.origin !== t.origin;
            if (n) {
                const e = await fetch(t);
                if (!e.ok) throw new Error("failed to fetch worker script");
                const a = await e.blob();
                return new Worker(URL.createObjectURL(a), _)
            }
            return new Worker(t, _)
        }
        g_aSJ() {
            if (this.g_asz()) {
                const g = document.documentElement.style,
                    a = document.body.style,
                    _ = window.innerWidth < window.innerHeight,
                    t = _ ? window.screen.width : window.screen.height,
                    n = _ ? window.screen.height : window.screen.width;
                a.height = g.height = n + "px", a.width = g.width = t + "px"
            }
        }
        g_aSP(g) {
            return {
                baseUrl: this.g_aoP,
                windowInnerWidth: window.innerWidth,
                windowInnerHeight: window.innerHeight,
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: e.g_aoa(),
                projectData: g.g_aSQ,
                previewImageBlobs: window.cr_previewImageBlobs || this.g_aSy,
                previewProjectFileBlobs: window.cr_previewProjectFileBlobs,
                exportType: g.g_aSw,
                isDebug: -1 < self.location.search.indexOf("debug"),
                ife: !!self.g_aSR,
                jobScheduler: this.g_aqO.g_aSS(),
                supportedAudioFormats: d,
                opusWasmScriptUrl: window.cr_opusWasmScriptUrl || this.g_aSm + "opus.wasm.js",
                opusWasmBinaryUrl: window.cr_opusWasmBinaryUrl || this.g_aSm + "opus.wasm.wasm",
                isiOSCordova: this.g_arl(),
                isiOSWebView: this.g_asz(),
                isFBInstantAvailable: "undefined" != typeof self.FBInstant
            }
        }
        async g_aSL(e, a) {
            const g = this.g_aSN(e.g_aST);
            this.g_aSp = await this.g_aSO(g, this.g_aoP, {
                name: "Runtime"
            }), this.g_amQ = document.createElement("canvas"), this.g_amQ.style.display = "none";
            const _ = this.g_amQ.transferControlToOffscreen();
            document.body.appendChild(this.g_amQ), window.c3canvas = this.g_amQ, this.g_aSp.postMessage(Object.assign(this.g_aSP(e), {
                type: "init-runtime",
                isInWorker: !0,
                messagePort: a,
                canvas: _,
                workerDependencyScripts: e.g_aSU || [],
                engineScripts: e.g_aSE,
                projectScripts: window.g_aSV,
                projectScriptsStatus: self.C3_ProjectScriptsStatus
            }), [a, _, ...this.g_aqO.g_aSW()]), this.g_aSr = i.map(e => new e(this)), this.g_aSX(), self.c3_callFunction = (e, a) => this.g_aSs.g_Vd(e, a), "preview" === this.g_aoU && (self.goToLastErrorScript = () => this.g_aRF("runtime", "go-to-last-error-script"))
        }
        async g_aSM(a, g) {
            this.g_amQ = document.createElement("canvas"), this.g_amQ.style.display = "none", document.body.appendChild(this.g_amQ), window.c3canvas = this.g_amQ, this.g_aSr = i.map(e => new e(this)), this.g_aSX();
            const t = a.g_aSE.map(e => "string" == typeof e ? new URL(e, this.g_aoP).toString() : e);
            if (Array.isArray(a.g_aSU) && t.unshift(...a.g_aSU), await Promise.all(t.map(a => _(a))), a.g_aSY && 0 < a.g_aSY.length) {
                const e = self.C3_ProjectScriptsStatus;
                try {
                    if (await Promise.all(a.g_aSY.map(a => _(a[1]))), Object.values(e).some(e => !e)) return void self.setTimeout(() => this.g_aSZ(e), 100)
                } catch (g) {
                    return console.error("[Preview] Error loading project scripts: ", g), void self.setTimeout(() => this.g_aSZ(e), 100)
                }
            }
            if ("preview" === this.g_aoU && "object" != typeof self.g_aO.g_aRy) return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."), void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");
            const n = Object.assign(this.g_aSP(a), {
                isInWorker: !1,
                messagePort: g,
                canvas: this.g_amQ,
                runOnStartupFunctions: m
            });
            this.g_aSq = self.C3_CreateRuntime(n), await self.C3_InitRuntime(this.g_aSq, n)
        }
        g_aSZ(e) {
            const a = Object.entries(e).filter(e => !e[1]).map(e => e[0]),
                g = `Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;
            console.error("[Preview] " + g), alert(g)
        }
        async g_aSB() {
            const e = await this.g_aqO.g_aS_();
            return {
                outputPort: e,
                transferables: [e]
            }
        }
        g_aRK() {
            if (this.g_aSj) throw new Error("not available in worker mode");
            return this.g_aSq
        }
        g_aRF(g, a, _, t, n) {
            this.g_aSl.postMessage({
                type: "event",
                component: g,
                handler: a,
                dispatchOpts: t || null,
                data: _,
                responseId: null
            }, this.g_aSx ? void 0 : n)
        }
        g_aRH(_, a, t, n, i) {
            const e = l++,
                o = new Promise((g, a) => {
                    X.set(e, {
                        resolve: g,
                        reject: a
                    })
                });
            return this.g_aSl.postMessage({
                type: "event",
                component: _,
                handler: a,
                dispatchOpts: n || null,
                data: t,
                responseId: e
            }, this.g_aSx ? void 0 : i), o
        }["_OnMessageFromRuntime"](e) {
            const a = e.type;
            if ("event" === a) this.g_aS$(e);
            else if ("result" === a) this.g_aTa(e);
            else if ("runtime-ready" === a) this.g_aTb();
            else if ("alert" === a) alert(e.message);
            else throw new Error(`unknown message '${a}'`)
        }
        g_aS$(_) {
            const t = _.component,
                n = _.handler,
                a = _.data,
                i = _.responseId,
                e = p.get(t);
            if (!e) return void console.warn(`[DOM] No event handlers for component '${t}'`);
            const o = e.get(n);
            if (!o) return void console.warn(`[DOM] No handler '${n}' for component '${t}'`);
            let g = null;
            try {
                g = o(a)
            } catch (e) {
                return console.error(`Exception in '${t}' handler '${n}':`, e), void(null !== i && this.g_aTc(i, !1, e.toString()))
            }
            null !== i && (g && g.then ? g.then(e => this.g_aTc(i, !0, e)).catch(e => {
                console.error(`Rejection from '${t}' handler '${n}':`, e), this.g_aTc(i, !1, e.toString())
            }) : this.g_aTc(i, !0, g))
        }
        g_aTc(e, a, g) {
            let _;
            g && g.transferables && (_ = g.transferables), this.g_aSl.postMessage({
                type: "result",
                responseId: e,
                isOk: a,
                result: g
            }, _)
        }
        g_aTa(g) {
            const a = g.responseId,
                _ = g.isOk,
                t = g.result,
                n = X.get(a);
            _ ? n.resolve(t) : n.reject(t), X.delete(a)
        }
        g_aRM(e, a, g) {
            let _ = p.get(e);
            if (_ || (_ = new Map, p.set(e, _)), _.has(a)) throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);
            _.set(a, g)
        }
        static g_aTd(e) {
            if (i.includes(e)) throw new Error("DOM handler already added");
            i.push(e)
        }
        g_aSX() {
            for (const e of this.g_aSr)
                if ("runtime" === e.g_aRP()) return void(this.g_aSs = e);
            throw new Error("cannot find runtime DOM handler")
        }
        g_aSH(e) {
            this.g_aRF("debugger", "message", e)
        }
        g_aTb() {
            for (const e of this.g_aSr) e.g_aRD()
        }
        static g_aoa() {
            return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement)
        }
        async g_aTe() {
            return await this.g_aRH("runtime", "get-remote-preview-status-info")
        }
        g_aRQ(e) {
            this.g_aSv.push(e), this.g_arK()
        }
        g_aRR(e) {
            const a = this.g_aSv.indexOf(e);
            if (-1 === a) throw new Error("invalid callback");
            this.g_aSv.splice(a, 1), this.g_aSv.length || this.g_arL()
        }
        g_arK() {
            -1 === this.g_anx && this.g_aSv.length && (this.g_anx = requestAnimationFrame(this.g_aSt))
        }
        g_arL() {
            -1 !== this.g_anx && (cancelAnimationFrame(this.g_anx), this.g_anx = -1)
        }
        g_aSu() {
            this.g_anx = -1;
            for (const e of this.g_aSv) e();
            this.g_arK()
        }
        g_aTf(e) {
            this.g_aSs.g_aTf(e)
        }
        g_aTg(e) {
            this.g_aSs.g_aTg(e)
        }
        g_aTh() {
            this.g_aSs.g_aTh()
        }
        g_aym(e) {
            this.g_aSs.g_aym(e)
        }
        g_Cf(e) {
            return !!d[e]
        }
        async g_afT(e) {
            const a = await this.g_aRH("runtime", "opus-decode", {
                arrayBuffer: e
            }, null, [e]);
            return new Float32Array(a)
        }
        g_fW(e) {
            return /^(?:[a-z]+:)?\/\//.test(e) || "data:" === e.substr(0, 5) || "blob:" === e.substr(0, 5)
        }
        g_fX(e) {
            return !this.g_fW(e)
        }
        async g_aSA(e) {
            const a = e.filename;
            switch (e.as) {
                case "text":
                    return await this.g_BL(a);
                case "buffer":
                    return await this.g_BK(a);
                default:
                    throw new Error("unsupported type");
            }
        }
        g_aTi() {
            const e = window.cordova && window.cordova.plugins && window.cordova.plugins.permissions;
            if ("object" != typeof e) throw new Error("Permission API is not loaded");
            return e
        }
        g_aTj(e, a) {
            const g = e[a];
            if ("string" != typeof g) throw new Error("Invalid permission name");
            return g
        }
        g_aTk(e) {
            const a = this.g_aTi();
            return new Promise((g, _) => a.checkPermission(this.g_aTj(a, e), e => g(!!e.hasPermission), _))
        }
        g_aAM(e) {
            const a = this.g_aTi();
            return new Promise((g, _) => a.requestPermission(this.g_aTj(a, e), e => g(!!e.hasPermission), _))
        }
        async g_aTl(e) {
            if ("cordova" !== this.g_asy()) return !0;
            if (this.g_arl()) return !0;
            for (const g of e) {
                const e = await this.g_aTk(g);
                if (e) continue;
                const a = await this.g_aAM(g);
                if (!1 === a) return !1
            }
            return !0
        }
        async g_aTm(...e) {
            if (!1 === (await this.g_aTl(e))) throw new Error("Permission not granted")
        }
        g_aTn(e) {
            const g = window.cordova.file.applicationDirectory + "www/" + e.toLowerCase();
            return new Promise((e, a) => {
                window.resolveLocalFileSystemURL(g, g => {
                    g.file(e, a)
                }, a)
            })
        }
        async g_BL(e) {
            const a = await this.g_aTn(e);
            return await t(a)
        }
        g_aTo() {
            if (g.length && !(8 <= u)) {
                u++;
                const e = g.shift();
                this.g_aTp(e.filename, e.g_aTq, e.g_aTr)
            }
        }
        g_BK(e) {
            return new Promise((_, t) => {
                g.push({
                    filename: e,
                    g_aTq: e => {
                        u--, this.g_aTo(), _(e)
                    },
                    g_aTr: e => {
                        u--, this.g_aTo(), t(e)
                    }
                }), this.g_aTo()
            })
        }
        async g_aTp(g, a, e) {
            try {
                const _ = await this.g_aTn(g),
                    t = await r(_);
                a(t)
            } catch (g) {
                e(g)
            }
        }
        async g_aSD() {
            const e = [];
            for (const [a, g] of Object.entries(this.g_aSy)) e.push(this.g_aTs(a, g));
            await Promise.all(e)
        }
        async g_aTs(e, a) {
            if ("object" == typeof a) this.g_aSy[e] = new Blob([a.str], {
                type: a.type
            }), this.g_aSz[e] = a.str;
            else {
                let g = await this.g_aTt(a);
                g || (g = this.g_aTu(a)), this.g_aSy[e] = g
            }
        }
        async g_aTt(e) {
            try {
                const a = await fetch(e);
                return await a.blob()
            } catch (e) {
                return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.", e), null
            }
        }
        g_aTu(e) {
            const a = this.g_aTv(e);
            return this.g_aTw(a.data, a.g_gn)
        }
        g_aTv(_) {
            const a = _.indexOf(",");
            if (0 > a) throw new URIError("expected comma in data: uri");
            const t = _.substring(5, a),
                n = _.substring(a + 1),
                o = t.split(";"),
                e = o[0] || "",
                r = o[1],
                g = o[2];
            let s;
            return s = "base64" === r || "base64" === g ? atob(n) : decodeURIComponent(n), {
                g_gn: e,
                data: s
            }
        }
        g_aTw(_, a) {
            let t, n, i = _.length,
                e = i >> 2,
                o = new Uint8Array(i),
                g = new Uint32Array(o.buffer, 0, e);
            for (t = 0, n = 0; t < e; ++t) g[t] = _.charCodeAt(n++) | _.charCodeAt(n++) << 8 | _.charCodeAt(n++) << 16 | _.charCodeAt(n++) << 24;
            for (let e = 3 & i; e--;) o[n] = _.charCodeAt(n), ++n;
            return new Blob([o], {
                type: a
            })
        }
        g_aSK() {
            let e = null;
            const g = new Promise(a => e = a),
                _ = new ArrayBuffer(1),
                t = new MessageChannel;
            return t.port2.onmessage = a => {
                a.data && a.data.arrayBuffer || (this.g_aSx = !0, console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")), e()
            }, t.port1.postMessage({
                arrayBuffer: _
            }, [_]), g
        }
    }
} {
    function _(e) {
        return e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || e.originalEvent && e.originalEvent.sourceCapabilities && e.originalEvent.sourceCapabilities.firesTouchEvents
    }

    function t(e) {
        return new Promise((a, g) => {
            const _ = document.createElement("link");
            _.onload = () => a(_), _.onerror = e => g(e), _.rel = "stylesheet", _.href = e, document.head.appendChild(_)
        })
    }

    function a(e) {
        return new Promise((a, g) => {
            const _ = new Image;
            _.onload = () => a(_), _.onerror = e => g(e), _.src = e
        })
    }
    async function s(e) {
        const g = URL.createObjectURL(e);
        try {
            return await a(g)
        } finally {
            URL.revokeObjectURL(g)
        }
    }

    function d(e) {
        return new Promise((g, _) => {
            let a = new FileReader;
            a.onload = e => g(e.target.result), a.onerror = e => _(e), a.readAsText(e)
        })
    }
    async function u(e, _, t) {
        if (!/firefox/i.test(navigator.userAgent)) return await s(e);
        let n = await d(e);
        const o = new DOMParser,
            g = o.parseFromString(n, "image/svg+xml"),
            r = g.documentElement;
        if (r.hasAttribute("width") && r.hasAttribute("height")) {
            const a = r.getAttribute("width"),
                g = r.getAttribute("height");
            if (!a.includes("%") && !g.includes("%")) return await s(e)
        }
        r.setAttribute("width", _ + "px"), r.setAttribute("height", t + "px");
        const i = new XMLSerializer;
        return n = i.serializeToString(g), e = new Blob([n], {
            type: "image/svg+xml"
        }), await s(e)
    }

    function e(e) {
        do {
            if (e.parentNode && e.hasAttribute("contenteditable")) return !0;
            e = e.parentNode
        } while (e);
        return !1
    }

    function g(e) {
        const a = e.target.tagName.toLowerCase();
        o.has(a) && e.preventDefault()
    }

    function X(e) {
        (e.metaKey || e.ctrlKey) && e.preventDefault()
    }

    function i() {
        try {
            return window.parent && window.parent.document.hasFocus()
        } catch (e) {
            return !1
        }
    }

    function c() {
        const g = document.activeElement;
        if (!g) return !1;
        const a = g.tagName.toLowerCase(),
            _ = new Set(["email", "number", "password", "search", "tel", "text", "url"]);
        return "textarea" === a || ("input" === a ? _.has(g.type.toLowerCase() || "text") : e(g))
    }
    const v = new Map([
            ["OSLeft", "MetaLeft"],
            ["OSRight", "MetaRight"]
        ]),
        l = {
            dispatchRuntimeEvent: !0,
            dispatchUserScriptEvent: !0
        },
        m = {
            dispatchUserScriptEvent: !0
        },
        n = {
            dispatchRuntimeEvent: !0
        },
        o = new Set(["canvas", "body", "html"]);
    self.C3_GetSvgImageSize = async function(e) {
        const g = await s(e);
        if (0 < g.width && 0 < g.height) return [g.width, g.height];
        else {
            g.style.position = "absolute", g.style.left = "0px", g.style.top = "0px", g.style.visibility = "hidden", document.body.appendChild(g);
            const e = g.getBoundingClientRect();
            return document.body.removeChild(g), [e.width, e.height]
        }
    }, self.C3_RasterSvgImageBlob = async function(_, a, t, n, o) {
        const e = await u(_, a, t),
            g = document.createElement("canvas");
        g.width = n, g.height = o;
        const r = g.getContext("2d");
        return r.drawImage(e, 0, 0, a, t), g
    };
    let p = !1;
    document.addEventListener("pause", () => p = !0), document.addEventListener("resume", () => p = !1);
    const f = class extends g_aRz {
        constructor(_) {
            super(_, "runtime"), this.g_aTx = !0, this.g_aTy = -1, this.g_aTz = "any", this.g_aTA = !1, this.g_aTB = !1, this.g_aTC = null, this.g_aTD = null, this.g_aTE = null, _.g_aRM("canvas", "update-size", e => this.g_aTF(e)), _.g_aRM("runtime", "invoke-download", e => this.g_aTG(e)), _.g_aRM("runtime", "raster-svg-image", e => this.g_aTH(e)), _.g_aRM("runtime", "get-svg-image-size", e => this.g_aTI(e)), _.g_aRM("runtime", "set-target-orientation", e => this.g_aTJ(e)), _.g_aRM("runtime", "register-sw", () => this.g_aTK()), _.g_aRM("runtime", "post-to-debugger", e => this.g_aTL(e)), _.g_aRM("runtime", "go-to-script", e => this.g_aTL(e)), _.g_aRM("runtime", "before-start-ticking", () => this.g_aTM()), _.g_aRM("runtime", "debug-highlight", e => this.g_aTN(e)), _.g_aRM("runtime", "enable-device-orientation", () => this.g_aTO()), _.g_aRM("runtime", "enable-device-motion", () => this.g_aTP()), _.g_aRM("runtime", "add-stylesheet", e => this.g_aTQ(e));
            const t = new Set(["input", "textarea", "datalist"]);
            window.addEventListener("contextmenu", g => {
                const a = g.target,
                    _ = a.tagName.toLowerCase();
                t.has(_) || e(a) || g.preventDefault()
            });
            const a = _.g_aSC();
            window.addEventListener("selectstart", g), window.addEventListener("gesturehold", g), a.addEventListener("selectstart", g), a.addEventListener("gesturehold", g), window.addEventListener("touchstart", g, {
                passive: !1
            }), "undefined" == typeof PointerEvent ? a.addEventListener("touchstart", g) : (window.addEventListener("pointerdown", g, {
                passive: !1
            }), a.addEventListener("pointerdown", g)), this.g_aTR = 0, window.addEventListener("mousedown", e => {
                1 === e.button && e.preventDefault()
            }), window.addEventListener("mousewheel", X, {
                passive: !1
            }), window.addEventListener("wheel", X, {
                passive: !1
            }), window.addEventListener("resize", () => this.g_anO()), _.g_asz() && window.addEventListener("focusout", () => {
                c() || (document.scrollingElement.scrollTop = 0)
            }), this.g_aTS = new Set, this.g_aTT = new WeakSet, this.g_axs = !1
        }
        g_aTM() {
            return "cordova" === this.g_aqU.g_asy() ? (document.addEventListener("pause", () => this.g_aqQ(!0)), document.addEventListener("resume", () => this.g_aqQ(!1))) : document.addEventListener("visibilitychange", () => this.g_aqQ(document.hidden)), {
                isSuspended: !!(document.hidden || p)
            }
        }
        g_aRD() {
            window.addEventListener("focus", () => this.g_aTU("window-focus")), window.addEventListener("blur", () => {
                this.g_aTU("window-blur", {
                    parentHasFocus: i()
                }), this.g_aTR = 0
            }), window.addEventListener("fullscreenchange", () => this.g_anP()), window.addEventListener("webkitfullscreenchange", () => this.g_anP()), window.addEventListener("mozfullscreenchange", () => this.g_anP()), window.addEventListener("fullscreenerror", e => this.g_anQ(e)), window.addEventListener("webkitfullscreenerror", e => this.g_anQ(e)), window.addEventListener("mozfullscreenerror", e => this.g_anQ(e)), window.addEventListener("keydown", e => this.g_aTV("keydown", e)), window.addEventListener("keyup", e => this.g_aTV("keyup", e)), window.addEventListener("dblclick", e => this.g_aTW("dblclick", e, l)), window.addEventListener("wheel", e => this.g_aTX("wheel", e)), "undefined" == typeof PointerEvent ? (window.addEventListener("mousedown", e => this.g_aTY("pointerdown", e)), window.addEventListener("mousemove", e => this.g_aTY("pointermove", e)), window.addEventListener("mouseup", e => this.g_aTY("pointerup", e)), window.addEventListener("touchstart", e => this.g_aTZ("pointerdown", e)), window.addEventListener("touchmove", e => this.g_aTZ("pointermove", e)), window.addEventListener("touchend", e => this.g_aTZ("pointerup", e)), window.addEventListener("touchcancel", e => this.g_aTZ("pointercancel", e))) : (window.addEventListener("pointerdown", e => this.g_aT_("pointerdown", e)), this.g_aqU.g_aRJ() && "undefined" != typeof window.onpointerrawupdate ? (this.g_aTD = new g_mM(() => this.g_aT$(), 5), this.g_aTD.g_mW(!0), window.addEventListener("pointerrawupdate", e => this.g_aUa(e))) : window.addEventListener("pointermove", e => this.g_aT_("pointermove", e)), window.addEventListener("pointerup", e => this.g_aT_("pointerup", e)), window.addEventListener("pointercancel", e => this.g_aT_("pointercancel", e)));
            const e = () => this.g_aTh();
            window.addEventListener("pointerup", e, !0), window.addEventListener("touchend", e, !0), window.addEventListener("click", e, !0), window.addEventListener("keydown", e, !0), window.addEventListener("gamepadconnected", e, !0)
        }
        g_aTU(e, a) {
            this.g_aRE(e, a || null, n)
        }
        g_aUb() {
            return Math.max(window.innerWidth, 1)
        }
        g_aUc() {
            return Math.max(window.innerHeight, 1)
        }
        g_anO() {
            const e = this.g_aUb(),
                a = this.g_aUc();
            this.g_aTU("window-resize", {
                innerWidth: e,
                innerHeight: a,
                devicePixelRatio: window.devicePixelRatio
            }), this.g_aqU.g_asz() && (-1 !== this.g_aTy && clearTimeout(this.g_aTy), this.g_aUd(e, a, 0))
        }
        g_aUe(e, a, g) {
            -1 !== this.g_aTy && clearTimeout(this.g_aTy), this.g_aTy = setTimeout(() => this.g_aUd(e, a, g), 48)
        }
        g_aUd(g, a, _) {
            const t = this.g_aUb(),
                n = this.g_aUc();
            this.g_aTy = -1, t != g || n != a ? this.g_aTU("window-resize", {
                innerWidth: t,
                innerHeight: n,
                devicePixelRatio: window.devicePixelRatio
            }) : 10 > _ && this.g_aUe(t, n, _ + 1)
        }
        g_aTJ(e) {
            this.g_aTz = e.targetOrientation
        }
        g_aUf() {
            const e = this.g_aTz;
            if (screen.orientation && screen.orientation.lock) screen.orientation.lock(e).catch(e => console.warn("[Construct 3] Failed to lock orientation: ", e));
            else try {
                let a = !1;
                screen.lockOrientation ? a = screen.lockOrientation(e) : screen.webkitLockOrientation ? a = screen.webkitLockOrientation(e) : screen.mozLockOrientation ? a = screen.mozLockOrientation(e) : screen.msLockOrientation && (a = screen.msLockOrientation(e)), a || console.warn("[Construct 3] Failed to lock orientation")
            } catch (e) {
                console.warn("[Construct 3] Failed to lock orientation: ", e)
            }
        }
        g_anP() {
            const e = g_aSi.g_aoa();
            e && "any" !== this.g_aTz && this.g_aUf(), this.g_aRE("fullscreenchange", {
                isFullscreen: e,
                innerWidth: this.g_aUb(),
                innerHeight: this.g_aUc()
            })
        }
        g_anQ(e) {
            console.warn("[Construct 3] Fullscreen request failed: ", e), this.g_aRE("fullscreenerror", {
                isFullscreen: g_aSi.g_aoa(),
                innerWidth: this.g_aUb(),
                innerHeight: this.g_aUc()
            })
        }
        g_aqQ(e) {
            e ? this.g_aqU.g_arL() : this.g_aqU.g_arK(), this.g_aRE("visibilitychange", {
                hidden: e
            })
        }
        g_aTV(e, a) {
            "Backspace" === a.key && g(a);
            const _ = v.get(a.code) || a.code;
            this.g_aRI(e, {
                code: _,
                key: a.key,
                which: a.which,
                repeat: a.repeat,
                altKey: a.altKey,
                ctrlKey: a.ctrlKey,
                metaKey: a.metaKey,
                shiftKey: a.shiftKey,
                timeStamp: a.timeStamp
            }, l)
        }
        g_aTX(e, a) {
            this.g_aRE(e, {
                clientX: a.clientX,
                clientY: a.clientY,
                deltaX: a.deltaX,
                deltaY: a.deltaY,
                deltaZ: a.deltaZ,
                deltaMode: a.deltaMode,
                timeStamp: a.timeStamp
            }, l)
        }
        g_aTW(a, e, g) {
            _(e) || ("mousedown" === a && window !== window.top && window.focus(), this.g_aRI(a, {
                button: e.button,
                buttons: e.buttons,
                clientX: e.clientX,
                clientY: e.clientY,
                timeStamp: e.timeStamp
            }, g))
        }
        g_aTY(a, e) {
            if (!_(e)) {
                "pointerdown" === a && window !== window.top && window.focus();
                const g = this.g_aTR;
                "pointerdown" === a && 0 !== g ? a = "pointermove" : "pointerup" == a && 0 !== e.buttons && (a = "pointermove"), this.g_aRI(a, {
                    pointerId: 1,
                    pointerType: "mouse",
                    button: e.button,
                    buttons: e.buttons,
                    lastButtons: g,
                    clientX: e.clientX,
                    clientY: e.clientY,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    timeStamp: e.timeStamp
                }, l), this.g_aTR = e.buttons, this.g_aTW(e.type, e, m)
            }
        }
        g_aT_(e, a) {
            "pointerdown" === e && window !== window.top && window.focus(), this.g_aTD && "pointermove" !== e && this.g_aTD.g_lz();
            let g = 0;
            if ("mouse" === a.pointerType && (g = this.g_aTR), this.g_aRI(e, {
                    pointerId: a.pointerId,
                    pointerType: a.pointerType,
                    button: a.button,
                    buttons: a.buttons,
                    lastButtons: g,
                    clientX: a.clientX,
                    clientY: a.clientY,
                    width: a.width || 0,
                    height: a.height || 0,
                    pressure: a.pressure || 0,
                    tangentialPressure: a.tangentialPressure || 0,
                    tiltX: a.tiltX || 0,
                    tiltY: a.tiltY || 0,
                    twist: a.twist || 0,
                    timeStamp: a.timeStamp
                }, l), "mouse" === a.pointerType) {
                let g = "mousemove";
                "pointerdown" === e ? g = "mousedown" : "pointerup" == e && (g = "pointerup"), this.g_aTW(g, a, m), this.g_aTR = a.buttons
            }
        }
        g_aUa(e) {
            this.g_aTE = e, this.g_aTD.g_m_()
        }
        g_aT$() {
            this.g_aT_("pointermove", this.g_aTE), this.g_aTE = null
        }
        g_aTZ(e, a) {
            "pointerdown" === e && window !== window.top && window.focus();
            for (let g = 0, _ = a.changedTouches.length; g < _; ++g) {
                const _ = a.changedTouches[g];
                this.g_aRI(e, {
                    pointerId: _.identifier,
                    pointerType: "touch",
                    button: 0,
                    buttons: 0,
                    lastButtons: 0,
                    clientX: _.clientX,
                    clientY: _.clientY,
                    width: 2 * (_.radiusX || _.webkitRadiusX || 0),
                    height: 2 * (_.radiusY || _.webkitRadiusY || 0),
                    pressure: _.force || _.webkitForce || 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: _.rotationAngle || 0,
                    timeStamp: a.timeStamp
                }, l)
            }
        }
        g_aTO() {
            this.g_aTA || (this.g_aTA = !0, window.addEventListener("deviceorientation", e => this.g_aBi(e)))
        }
        g_aTP() {
            this.g_aTB || (this.g_aTB = !0, window.addEventListener("devicemotion", e => this.g_aBj(e)))
        }
        g_aBi(e) {
            this.g_aRE("deviceorientation", {
                alpha: e.alpha || 0,
                beta: e.beta || 0,
                gamma: e.gamma || 0,
                timeStamp: e.timeStamp
            }, l)
        }
        g_aBj(_) {
            let a = null;
            const t = _.acceleration;
            t && (a = {
                x: t.x || 0,
                y: t.y || 0,
                z: t.z || 0
            });
            let n = null;
            const i = _.accelerationIncludingGravity;
            i && (n = {
                x: i.x || 0,
                y: i.y || 0,
                z: i.z || 0
            });
            let e = null;
            const o = _.rotationRate;
            o && (e = {
                alpha: o.alpha || 0,
                beta: o.beta || 0,
                gamma: o.gamma || 0
            }), this.g_aRE("devicemotion", {
                acceleration: a,
                accelerationIncludingGravity: n,
                rotationRate: e,
                interval: _.interval,
                timeStamp: _.timeStamp
            }, l)
        }
        g_aTF(e) {
            const a = this.g_aRO(),
                g = a.g_aSC();
            g.style.width = e.styleWidth + "px", g.style.height = e.styleHeight + "px", g.style.marginLeft = e.marginLeft + "px", g.style.marginTop = e.marginTop + "px", a.g_aSJ(), this.g_aTx && (g.style.display = "", this.g_aTx = !1)
        }
        g_aTG(g) {
            const _ = g.url,
                t = g.filename,
                n = document.createElement("a"),
                e = document.body;
            n.textContent = t, n.href = _, n.download = t, e.appendChild(n), n.click(), e.removeChild(n)
        }
        async g_aTH(_) {
            const a = _.blob,
                t = _.imageWidth,
                n = _.imageHeight,
                o = _.surfaceWidth,
                e = _.surfaceHeight,
                r = _.imageBitmapOpts,
                g = await self.C3_RasterSvgImageBlob(a, t, n, o, e);
            let s;
            return s = r ? await createImageBitmap(g, r) : await createImageBitmap(g), {
                imageBitmap: s,
                transferables: [s]
            }
        }
        async g_aTI(e) {
            return await self.C3_GetSvgImageSize(e.blob)
        }
        async g_aTQ(e) {
            await t(e.url)
        }
        g_aTh() {
            const e = [...this.g_aTS];
            if (this.g_aTS.clear(), !this.g_axs)
                for (const g of e) {
                    const e = g.play();
                    e && e.catch(() => {
                        this.g_aTT.has(g) || this.g_aTS.add(g)
                    })
                }
        }
        g_aTf(e) {
            if ("function" != typeof e.play) throw new Error("missing play function");
            this.g_aTT.delete(e);
            let a;
            try {
                a = e.play()
            } catch (a) {
                return void this.g_aTS.add(e)
            }
            a && a.catch(() => {
                this.g_aTT.has(e) || this.g_aTS.add(e)
            })
        }
        g_aTg(e) {
            this.g_aTS.delete(e), this.g_aTT.add(e)
        }
        g_aym(e) {
            this.g_axs = !!e
        }
        g_aTN(e) {
            const a = e.show;
            if (!a) return void(this.g_aTC && (this.g_aTC.style.display = "none"));
            this.g_aTC || (this.g_aTC = document.createElement("div"), this.g_aTC.id = "inspectOutline", document.body.appendChild(this.g_aTC));
            const g = this.g_aTC;
            g.style.display = "", g.style.left = e.left - 1 + "px", g.style.top = e.top - 1 + "px", g.style.width = e.width + 2 + "px", g.style.height = e.height + 2 + "px", g.textContent = e.name
        }
        g_aTK() {
            window.C3_RegisterSW && window.C3_RegisterSW()
        }
        g_aTL(e) {
            window.c3_postToMessagePort && (e.from = "runtime", window.c3_postToMessagePort(e))
        }
        g_Vd(e, a) {
            return this.g_aRG("js-invoke-function", {
                name: e,
                params: a
            })
        }
    };
    g_aSi.g_aTd(f)
} {
    const e = document.currentScript.src;
    self.g_aSI = class {
        constructor(a) {
            this.g_aUg = a, this.g_aoP = e ? e.substr(0, e.lastIndexOf("/") + 1) : a.g_fe(), this.g_atf = Math.min(navigator.hardwareConcurrency || 2, 16), this.g_aUh = null, this.g_aUi = [], this.g_atd = null, this.g_aUj = null
        }
        async g_ajY() {
            if (this.g_aUk) throw new Error("already initialised");
            this.g_aUk = !0;
            const e = this.g_aUg.g_aSN("dispatchworker.js");
            this.g_aUh = await this.g_aUg.g_aSO(e, this.g_aoP, {
                name: "DispatchWorker"
            });
            const a = new MessageChannel;
            this.g_atd = a.port1, this.g_aUh.postMessage({
                type: "_init",
                "in-port": a.port2
            }, [a.port2]), this.g_aUj = await this.g_aS_()
        }
        async g_aS_() {
            const g = this.g_aUi.length,
                a = this.g_aUg.g_aSN("jobworker.js"),
                _ = await this.g_aUg.g_aSO(a, this.g_aoP, {
                    name: "JobWorker" + g
                }),
                t = new MessageChannel,
                n = new MessageChannel;
            return this.g_aUh.postMessage({
                type: "_addJobWorker",
                port: t.port1
            }, [t.port1]), _.postMessage({
                type: "init",
                number: g,
                "dispatch-port": t.port2,
                "output-port": n.port2
            }, [t.port2, n.port2]), this.g_aUi.push(_), n.port1
        }
        g_aSS() {
            return {
                inputPort: this.g_atd,
                outputPort: this.g_aUj,
                maxNumWorkers: this.g_atf
            }
        }
        g_aSW() {
            return [this.g_atd, this.g_aUj]
        }
    }
}
if ("use strict", window.C3_IsSupported) {
    "undefined" != typeof OffscreenCanvas;
    window.c3_runtimeInterface = new g_aSi({
        g_aSk: !1,
        g_aST: "workermain.js",
        g_aSE: ["scripts/c3runtime.js"],
        g_aSn: "scripts/",
        g_aSU: [],
        g_aSw: "html5"
    })
} {
    function e(e, g) {
        return e.length === g.length && (e === g || e.toLowerCase() === g.toLowerCase())
    }
    const a = class extends g_aRz {
        constructor(e) {
            super(e, "audio"), this.g_aUl = null, this.g_aUm = null, this.g_aUn = !1, this.g_aUo = () => this.g_aUp(), this.g_aUq = [], this.g_aUr = [], this.g_aUs = null, this.g_aUt = "", this.g_aUu = -1, this.g_aUv = new Map, this.g_axr = 1, this.g_axs = !1, this.g_axe = 0, this.g_ajU = 1, this.g_aqn = 0, this.g_axh = "HRTF", this.g_axi = "inverse", this.g_aUw = 600, this.g_axn = 1e4, this.g_axo = 1, this.g_aUx = !1, this.g_aUy = !1, this.g_aUz = this.g_aqU.g_Cf("audio/webm; codecs=opus"), this.g_aUA = new Map, this.g_aUB = new Set, this.g_aUC = !1, this.g_aUD = "", this.g_aUE = null, self.C3Audio_OnMicrophoneStream = (e, a) => this.g_aUF(e, a), this.g_aUG = null, self.C3Audio_GetOutputStream = () => this.g_aUH(), self.C3Audio_DOMInterface = this, this.g_aRN([
                ["create-audio-context", e => this.g_aUI(e)],
                ["play", e => this.g_aUJ(e)],
                ["stop", e => this.g_aUK(e)],
                ["stop-all", () => this.g_aUL()],
                ["set-paused", e => this.g_aUM(e)],
                ["set-volume", e => this.g_aUN(e)],
                ["fade-volume", e => this.g_aUO(e)],
                ["set-master-volume", e => this.g_aUP(e)],
                ["set-muted", e => this.g_aUQ(e)],
                ["set-silent", e => this.g_aUR(e)],
                ["set-looping", e => this.g_aUS(e)],
                ["set-playback-rate", e => this.g_aUT(e)],
                ["seek", e => this.g_aUU(e)],
                ["preload", e => this.g_aUV(e)],
                ["unload", e => this.g_Hs(e)],
                ["unload-all", () => this.g_aUW()],
                ["set-suspended", e => this.g_aUX(e)],
                ["add-effect", e => this.g_aUY(e)],
                ["set-effect-param", e => this.g_aUZ(e)],
                ["remove-effects", e => this.g_aU_(e)],
                ["tick", e => this.g_JK(e)],
                ["load-state", e => this.g_aU$(e)]
            ])
        }
        async g_aUI(e) {
            e.isiOSCordova && (this.g_aUx = !0), this.g_axe = e.timeScaleMode, this.g_axh = ["equalpower", "HRTF", "soundfield"][e.panningModel], this.g_axi = ["linear", "inverse", "exponential"][e.distanceModel], this.g_aUw = e.refDistance, this.g_axn = e.maxDistance, this.g_axo = e.rolloffFactor;
            const a = {
                latencyHint: e.latencyHint
            };
            if ("undefined" != typeof AudioContext) this.g_aUl = new AudioContext(a);
            else if ("undefined" != typeof webkitAudioContext) this.g_aUl = new webkitAudioContext(a);
            else throw new Error("Web Audio API not supported");
            this.g_aUm = this.g_aUl.createGain(), this.g_aUm.connect(this.g_aUl.destination);
            const g = e.listenerPos;
            this.g_aUl.listener.setPosition(g[0], g[1], g[2]), this.g_aUl.listener.setOrientation(0, 0, 1, 0, -1, 0), window.addEventListener("pointerup", this.g_aUo, !0), window.addEventListener("touchend", this.g_aUo, !0), window.addEventListener("click", this.g_aUo, !0), window.addEventListener("keydown", this.g_aUo, !0), self.C3_GetAudioContextCurrentTime = () => this.g_aVa();
            try {
                await Promise.all(e.preloadList.map(e => this.g_aVb(e.originalUrl, e.url, e.type, !1)))
            } catch (e) {
                console.error("[Construct 3] Preloading sounds failed: ", e)
            }
            return {
                sampleRate: this.g_aUl.sampleRate
            }
        }
        g_aUp() {
            if (!this.g_aUn) {
                const e = this.g_aUl;
                "suspended" === e.state && e.resume && e.resume();
                const a = e.createBuffer(1, 220, 22050),
                    g = e.createBufferSource();
                g.buffer = a, g.connect(e.destination), g.start(0), "running" === e.state && (this.g_aUn = !0, window.removeEventListener("pointerup", this.g_aUo, !0), window.removeEventListener("touchend", this.g_aUo, !0), window.removeEventListener("click", this.g_aUo, !0), window.removeEventListener("keydown", this.g_aUo, !0), this.g_aUo = null)
            }
        }
        g_aw$() {
            return this.g_aUl
        }
        g_aVa() {
            return this.g_aUl.currentTime
        }
        g_axb() {
            return this.g_aUm
        }
        g_aVc(e) {
            const a = this.g_aUA.get(e.toLowerCase());
            return a ? a[0].g_aVd() : this.g_axb()
        }
        g_aVe(e, g) {
            e = e.toLowerCase();
            let _ = this.g_aUA.get(e);
            _ || (_ = [], this.g_aUA.set(e, _)), g.g_alA(_.length), g.g_aVf(e), _.push(g), this.g_aVg(e)
        }
        g_aVg(e) {
            let a = this.g_axb();
            const g = this.g_aUA.get(e);
            if (g && g.length) {
                a = g[0].g_aVd();
                for (let e = 0, a = g.length; e < a; ++e) {
                    const _ = g[e];
                    e + 1 === a ? _.g_aVh(this.g_axb()) : _.g_aVh(g[e + 1].g_aVd())
                }
            }
            for (const g of this.g_aVi(e)) g.g_aVj(a);
            this.g_aUE && this.g_aUD === e && (this.g_aUE.disconnect(), this.g_aUE.connect(a))
        }
        g_aVk() {
            return this.g_axr
        }
        g_axX() {
            return this.g_axs
        }
        g_aVl() {
            return this.g_axe
        }
        g_KK() {
            return this.g_ajU
        }
        g_Gb() {
            return this.g_aqn
        }
        g_aVm() {
            return this.g_aUx
        }
        g_aVn() {
            return this.g_aUz
        }
        g_aVo() {
            this.g_aUy = !0
        }
        g_aVp() {
            return this.g_axh
        }
        g_aVq() {
            return this.g_axi
        }
        g_aVr() {
            return this.g_aUw
        }
        g_aVs() {
            return this.g_axn
        }
        g_aVt() {
            return this.g_axo
        }
        g_aVu(e, a) {
            return a ? this.g_aqU.g_afT(e).then(e => {
                const a = this.g_aUl.createBuffer(1, e.length, 48e3),
                    g = a.getChannelData(0);
                return g.set(e), a
            }) : new Promise((a, g) => {
                this.g_aUl.decodeAudioData(e, a, g)
            })
        }
        g_aTf(e) {
            this.g_aqU.g_aTf(e)
        }
        g_aTg(e) {
            this.g_aqU.g_aTg(e)
        }
        g_aVv(a) {
            let g = 0;
            for (let _ = 0, e = this.g_aUr.length; _ < e; ++_) {
                const t = this.g_aUr[_];
                this.g_aUr[g] = t, t.g_aVw() === a ? t.g_ek() : ++g
            }
            this.g_aUr.length = g
        }
        g_aVx() {
            let e = 0;
            for (let a = 0, g = this.g_aUq.length; a < g; ++a) {
                const g = this.g_aUq[a];
                this.g_aUq[e] = g, g.g_aVy() ? g.g_ek() : ++e
            }
            this.g_aUq.length = e
        }* g_aVi(a) {
            if (a)
                for (const g of this.g_aUr) e(g.g_aVz(), a) && (yield g);
            else this.g_aUs && !this.g_aUs.g_aVA() && (yield this.g_aUs)
        }
        async g_aVb(g, a, _, t, n) {
            for (const e of this.g_aUq)
                if (e.g_aVB() === a) return await e.g_BW(), e;
            if (n) return null;
            t && (this.g_aUx || this.g_aUy) && this.g_aVx();
            const e = g_aVC.g_qS(this, g, a, _, t);
            return this.g_aUq.push(e), await e.g_BW(), e
        }
        async g_aVD(_, a, t, n, i) {
            for (const e of this.g_aUr)
                if (e.g_aVB() === a && (e.g_aVE() || i)) return e.g_aVF(n), e;
            const e = await this.g_aVb(_, a, t, i),
                o = e.g_agg(n);
            return this.g_aUr.push(o), o
        }
        g_aVG(e) {
            let a = this.g_aUv.get(e);
            if (!a) {
                let g = null;
                const _ = new Promise(e => g = e);
                a = {
                    g_aVH: 0,
                    promise: _,
                    resolve: g
                }, this.g_aUv.set(e, a)
            }
            a.g_aVH++
        }
        g_aVI(e) {
            const a = this.g_aUv.get(e);
            if (!a) throw new Error("expected pending tag");
            a.g_aVH--, 0 === a.g_aVH && (a.resolve(), this.g_aUv.delete(e))
        }
        g_aVJ(e) {
            e || (e = this.g_aUt);
            const g = this.g_aUv.get(e);
            return g ? g.promise : Promise.resolve()
        }
        g_aVK() {
            if (0 < this.g_aUB.size) return void this.g_adZ();
            for (const e of this.g_aUr)
                if (e.g_XR()) return void this.g_adZ()
        }
        g_KM() {
            for (const a of this.g_aUB) a.g_KM();
            const e = this.g_aVa();
            for (const a of this.g_aUr) a.g_KM(e);
            const a = this.g_aUr.filter(a => a.g_XR()).map(a => a.g_aVL());
            this.g_aRE("state", {
                tickCount: this.g_aUu,
                audioInstances: a,
                analysers: [...this.g_aUB].map(a => a.g_aVM())
            }), 0 === a.length && 0 === this.g_aUB.size && this.g_adK()
        }
        g_aVN(e, a) {
            this.g_aRE("trigger", {
                type: e,
                tag: a
            })
        }
        async g_aUJ(_) {
            const a = _.originalUrl,
                t = _.url,
                n = _.type,
                o = _.isMusic,
                e = _.tag,
                r = _.isLooping,
                g = _.vol,
                s = _.pos,
                i = _.panning;
            let d = _.off;
            if (0 < d && !_.trueClock)
                if (this.g_aUl.getOutputTimestamp) {
                    const e = this.g_aUl.getOutputTimestamp();
                    d = d - e.performanceTime / 1e3 + e.contextTime
                } else d = d - performance.now() / 1e3 + this.g_aUl.currentTime;
            this.g_aUt = e, this.g_aVG(e);
            try {
                this.g_aUs = await this.g_aVD(a, t, n, e, o), i ? (this.g_aUs.g_aVO(!0), this.g_aUs.g_aVP(i.x, i.y, i.angle, i.innerAngle, i.outerAngle, i.outerGain), i.hasOwnProperty("uid") && this.g_aUs.g_aVQ(i.uid)) : this.g_aUs.g_aVO(!1), this.g_aUs.g_MJ(r, g, s, d)
            } catch (e) {
                return void console.error("[Construct 3] Audio: error starting playback: ", e)
            } finally {
                this.g_aVI(e)
            }
            this.g_adZ()
        }
        g_aUK(e) {
            const a = e.tag;
            for (const g of this.g_aVi(a)) g.g_JV()
        }
        g_aUL() {
            for (const e of this.g_aUr) e.g_JV()
        }
        g_aUM(e) {
            const a = e.tag,
                g = e.paused;
            for (const _ of this.g_aVi(a)) g ? _.g_aVR() : _.g_MI();
            this.g_aVK()
        }
        g_aUN(e) {
            const a = e.tag,
                g = e.vol;
            for (const _ of this.g_aVi(a)) _.g_ayf(g)
        }
        async g_aUO(g) {
            const a = g.tag,
                _ = g.vol,
                t = g.duration,
                n = g.stopOnEnd;
            await this.g_aVJ(a);
            for (const e of this.g_aVi(a)) e.g_ayg(_, t, n);
            this.g_aVK()
        }
        g_aUP(e) {
            this.g_axr = e.vol;
            for (const a of this.g_aUr) a.g_aVS()
        }
        g_aUQ(e) {
            const a = e.tag,
                g = e.isMuted;
            for (const _ of this.g_aVi(a)) _.g_aye(g)
        }
        g_aUR(e) {
            this.g_axs = e.isSilent, this.g_aqU.g_aym(this.g_axs);
            for (const a of this.g_aUr) a.g_aVT()
        }
        g_aUS(e) {
            const a = e.tag,
                g = e.isLooping;
            for (const _ of this.g_aVi(a)) _.g_ayd(g)
        }
        async g_aUT(e) {
            const a = e.tag,
                g = e.rate;
            await this.g_aVJ(a);
            for (const _ of this.g_aVi(a)) _.g_LY(g)
        }
        async g_aUU(e) {
            const a = e.tag,
                g = e.pos;
            await this.g_aVJ(a);
            for (const _ of this.g_aVi(a)) _.g_ayl(g)
        }
        async g_aUV(g) {
            const a = g.originalUrl,
                _ = g.url,
                t = g.type,
                n = g.isMusic;
            try {
                await this.g_aVD(a, _, t, "", n)
            } catch (e) {
                console.error("[Construct 3] Audio: error preloading: ", e)
            }
        }
        async g_Hs(g) {
            const a = g.url,
                _ = g.type,
                t = g.isMusic,
                n = await this.g_aVb("", a, _, t, !0);
            if (n) {
                n.g_ek();
                const e = this.g_aUq.indexOf(n); - 1 !== e && this.g_aUq.splice(e, 1)
            }
        }
        g_aUW() {
            for (const e of this.g_aUq) e.g_ek();
            this.g_aUq.length = 0
        }
        g_aUX(e) {
            const a = e.isSuspended;
            !a && this.g_aUl.resume && this.g_aUl.resume();
            for (const g of this.g_aUr) g.g_arJ(a);
            a && this.g_aUl.suspend && this.g_aUl.suspend()
        }
        g_JK(e) {
            if (this.g_ajU = e.timeScale, this.g_aqn = e.gameTime, this.g_aUu = e.tickCount, 0 !== this.g_axe)
                for (const e of this.g_aUr) e.g_aVU();
            const a = e.listenerPos;
            a && this.g_aUl.listener.setPosition(a[0], a[1], a[2]);
            for (const g of e.instPans) {
                const e = g.uid;
                for (const a of this.g_aUr) a.g_D$() === e && a.g_aVV(g.x, g.y, g.angle)
            }
        }
        async g_aUY(g) {
            const a = g.type,
                _ = g.tag,
                t = g.params;
            let n;
            if ("filter" === a) n = new g_aVW(this, ...t);
            else if ("delay" === a) n = new g_aVX(this, ...t);
            else if ("convolution" === a) {
                let a = null;
                try {
                    a = await this.g_aVb(g.bufferOriginalUrl, g.bufferUrl, g.bufferType, !1)
                } catch (e) {
                    return void console.log("[Construct 3] Audio: error loading convolution: ", e)
                }
                n = new g_aVY(this, a.g_aVZ(), ...t), n.g_aV_(g.bufferOriginalUrl, g.bufferUrl, g.bufferType)
            } else if ("flanger" === a) n = new g_aV$(this, ...t);
            else if ("phaser" === a) n = new g_aWa(this, ...t);
            else if ("gain" === a) n = new g_aWb(this, ...t);
            else if ("tremolo" === a) n = new g_aWc(this, ...t);
            else if ("ringmod" === a) n = new g_aWd(this, ...t);
            else if ("distortion" === a) n = new g_aWe(this, ...t);
            else if ("compressor" === a) n = new g_aWf(this, ...t);
            else if ("analyser" === a) n = new g_aWg(this, ...t);
            else throw new Error("invalid effect type");
            this.g_aVe(_, n), this.g_aWh()
        }
        g_aUZ(_) {
            const a = _.tag,
                t = _.index,
                n = _.param,
                i = _.value,
                e = _.ramp,
                o = _.time,
                g = this.g_aUA.get(a);
            !g || 0 > t || t >= g.length || (g[t].g_aWi(n, i, e, o), this.g_aWh())
        }
        g_aU_(e) {
            const a = e.tag.toLowerCase(),
                g = this.g_aUA.get(a);
            if (g && g.length) {
                for (const e of g) e.g_ek();
                this.g_aUA.delete(a), this.g_aVg(a)
            }
        }
        g_aWj(e) {
            this.g_aUB.add(e), this.g_aVK()
        }
        g_aWk(e) {
            this.g_aUB.delete(e)
        }
        g_aWh() {
            this.g_aUC || (this.g_aUC = !0, Promise.resolve().then(() => this.g_aWl()))
        }
        g_aWl() {
            const e = {};
            for (const [a, g] of this.g_aUA) e[a] = g.map(e => e.g_aVL());
            this.g_aRE("fxstate", {
                fxstate: e
            }), this.g_aUC = !1
        }
        async g_aU$(e) {
            const g = e.saveLoadMode;
            if (3 !== g)
                for (const e of this.g_aUr) e.g_aVy() && 1 === g || !e.g_aVy() && 2 === g || e.g_JV();
            for (const g of this.g_aUA.values())
                for (const e of g) e.g_ek();
            this.g_aUA.clear(), this.g_ajU = e.timeScale, this.g_aqn = e.gameTime;
            const a = e.listenerPos;
            this.g_aUl.listener.setPosition(a[0], a[1], a[2]), this.g_axs = e.isSilent, this.g_aqU.g_aym(this.g_axs), this.g_axr = e.masterVolume;
            const _ = [];
            for (const a of Object.values(e.effects)) _.push(Promise.all(a.map(e => this.g_aUY(e))));
            await Promise.all(_), await Promise.all(e.playing.map(e => this.g_aWm(e, g))), this.g_aVK()
        }
        async g_aWm(_, a) {
            if (3 === a) return;
            const t = _.bufferOriginalUrl,
                n = _.bufferUrl,
                o = _.bufferType,
                e = _.isMusic,
                r = _.tag,
                g = _.isLooping,
                s = _.volume,
                i = _.playbackTime;
            if (e && 1 === a) return;
            if (!e && 2 === a) return;
            let d = null;
            try {
                d = await this.g_aVD(t, n, o, r, e)
            } catch (e) {
                return void console.error("[Construct 3] Audio: error loading audio state: ", e)
            }
            d.g_aWn(_.pan), d.g_MJ(g, s, i, 0), _.isPlaying || d.g_aVR(), d.g_aWo(_)
        }
        g_aUF(e, a) {
            this.g_aUE && this.g_aUE.disconnect(), this.g_aUD = a.toLowerCase(), this.g_aUE = this.g_aUl.createMediaStreamSource(e), this.g_aUE.connect(this.g_aVc(this.g_aUD))
        }
        g_aUH() {
            return this.g_aUG || (this.g_aUG = this.g_aUl.createMediaStreamDestination(), this.g_aUm.connect(this.g_aUG)), this.g_aUG.stream
        }
    };
    g_aSi.g_aTd(a)
}
"use strict", self.g_aVC = class {
    constructor(g, a, _, t, n) {
        this.g_aWp = g, this.g_aWq = a, this.g_Cv = _, this.g_kI = t, this.g_aWr = n, this.g_aWs = "", this.g_aWt = "not-loaded", this.g_CA = null
    }
    g_ek() {
        this.g_aWt = "not-loaded", this.g_aWp = null, this.g_CA = null
    }
    static g_qS(g, a, _, t, n) {
        const e = "audio/webm; codecs=opus" === t && !g.g_aVn();
        return n && e && g.g_aVo(), !n || g.g_aVm() || e ? new g_aWu(g, a, _, t, n, e) : new g_aWv(g, a, _, t, n)
    }
    g_agg(e) {
        return "html5" === this.g_aWs ? new g_aWw(this.g_aWp, this, e) : new g_aWx(this.g_aWp, this, e)
    }
    g_Hm() {}
    g_BW() {
        return this.g_CA || (this.g_CA = this.g_Hm()), this.g_CA
    }
    g_CB() {}
    g_aWy() {}
    g_aWz() {
        return "failed" === this.g_aWt
    }
    g_aw$() {
        return this.g_aWp.g_aw$()
    }
    g_aWA() {
        return this.g_aWs
    }
    g_aWB() {
        return this.g_aWq
    }
    g_aVB() {
        return this.g_Cv
    }
    g_aWC() {
        return this.g_kI
    }
    g_aVy() {
        return this.g_aWr
    }
    g_ahQ() {}
}, "use strict", self.g_aWv = class extends g_aVC {
    constructor(g, a, _, t, n) {
        super(g, a, _, t, n), this.g_aWs = "html5", this.g_aWD = new Audio, this.g_aWD.crossOrigin = "anonymous", this.g_aWD.autoplay = !1, this.g_aWD.preload = "auto", this.g_aWE = null, this.g_aWF = null, this.g_aWG = !1, this.g_aWD.addEventListener("canplaythrough", () => this.g_aWG = !0), this.g_aWH = this.g_aw$().createGain(), this.g_aWI = null, this.g_aWD.addEventListener("canplay", () => {
            this.g_aWE && (this.g_aWt = "loaded", this.g_aWE(), this.g_aWE = null, this.g_aWF = null), this.g_aWI || !this.g_aWD || (this.g_aWI = this.g_aw$().createMediaElementSource(this.g_aWD), this.g_aWI.connect(this.g_aWH))
        }), this.onended = null, this.g_aWD.addEventListener("ended", () => {
            this.onended && this.onended()
        }), this.g_aWD.addEventListener("error", e => this.g_aEv(e))
    }
    g_ek() {
        this.g_aWp.g_aVv(this), this.g_aWH.disconnect(), this.g_aWH = null, this.g_aWI.disconnect(), this.g_aWI = null, this.g_aWD && !this.g_aWD.paused && this.g_aWD.pause(), this.onended = null, this.g_aWD = null, super.g_ek()
    }
    g_Hm() {
        return this.g_aWt = "loading", new Promise((e, a) => {
            this.g_aWE = e, this.g_aWF = a, this.g_aWD.src = this.g_Cv
        })
    }
    g_aEv(e) {
        console.error(`[Construct 3] Audio '${this.g_Cv}' error: `, e), this.g_aWF && (this.g_aWt = "failed", this.g_aWF(e), this.g_aWE = null, this.g_aWF = null)
    }
    g_CB() {
        const e = 4 <= this.g_aWD.readyState;
        return e && (this.g_aWG = !0), e || this.g_aWG
    }
    g_aWy() {
        return this.g_CB()
    }
    g_aWJ() {
        return this.g_aWD
    }
    g_aWK() {
        return this.g_aWH
    }
    g_ahQ() {
        return this.g_aWD.duration
    }
}, "use strict", self.g_aWu = class extends g_aVC {
    constructor(g, a, _, t, n, e) {
        super(g, a, _, t, n), this.g_aWs = "webaudio", this.g_aWL = null, this.g_aWM = null, this.g_aWN = !!e
    }
    g_ek() {
        this.g_aWp.g_aVv(this), this.g_aWL = null, this.g_aWM = null, super.g_ek()
    }
    async g_aWO() {
        if (this.g_aWL) return this.g_aWL;
        const e = this.g_aWp.g_aRO();
        if ("cordova" === e.g_asy() && e.g_fX(this.g_Cv)) this.g_aWL = await e.g_BK(this.g_Cv);
        else {
            const e = await fetch(this.g_Cv);
            if (!e.ok) throw new Error(`error fetching audio data: ${e.status} ${e.statusText}`);
            this.g_aWL = await e.arrayBuffer()
        }
    }
    async g_aWP() {
        return this.g_aWM ? this.g_aWM : void(this.g_aWM = await this.g_aWp.g_aVu(this.g_aWL, this.g_aWN), this.g_aWL = null)
    }
    async g_Hm() {
        try {
            this.g_aWt = "loading", await this.g_aWO(), await this.g_aWP(), this.g_aWt = "loaded"
        } catch (e) {
            this.g_aWt = "failed", console.error(`[Construct 3] Failed to load audio '${this.g_Cv}': `, e)
        }
    }
    g_CB() {
        return !!(this.g_aWL || this.g_aWM)
    }
    g_aWy() {
        return !!this.g_aWM
    }
    g_aVZ() {
        return this.g_aWM
    }
    g_ahQ() {
        return this.g_aWM ? this.g_aWM.duration : 0
    }
}, "use strict"; {
    function _(g) {
        return g * e
    }
    const e = 180 / Math.PI;
    self.g_aWQ = class {
        constructor(e, a, g) {
            this.g_aWp = e, this.g_wy = a, this.g_aWR = g, this.g_aWS = this.g_aw$().createGain(), this.g_aWS.connect(this.g_axb()), this.g_aWT = null, this.g_aWU = !1, this.g_UA = !0, this.g_aWV = !1, this.g_aWW = !1, this.g_$R = !1, this.g_aWX = 1, this.g_aWY = !1, this.g_Lm = 1;
            const _ = this.g_aWp.g_aVl();
            this.g_aWZ = 1 === _ && !this.g_aVy() || 2 === _, this.g_aW_ = -1, this.g_aW$ = -1, this.g_aXa = !1
        }
        g_ek() {
            this.g_aWp = null, this.g_wy = null, this.g_aWT && (this.g_aWT.disconnect(), this.g_aWT = null), this.g_aWS.disconnect(), this.g_aWS = null
        }
        g_aw$() {
            return this.g_aWp.g_aw$()
        }
        g_axb() {
            return this.g_aWp.g_aVc(this.g_aWR)
        }
        g_aVk() {
            return this.g_aWp.g_aVk()
        }
        g_aXb() {
            return this.g_aWZ ? this.g_aWp.g_Gb() : performance.now() / 1e3
        }
        g_aWB() {
            return this.g_wy.g_aWB()
        }
        g_aVB() {
            return this.g_wy.g_aVB()
        }
        g_aWC() {
            return this.g_wy.g_aWC()
        }
        g_aVw() {
            return this.g_wy
        }
        g_aVy() {
            return this.g_wy.g_aVy()
        }
        g_aVF(e) {
            this.g_aWR = e
        }
        g_aVz() {
            return this.g_aWR
        }
        g_aVA() {}
        g_aVE() {}
        g_L$() {
            return !this.g_UA && !this.g_aWV && !this.g_aVA()
        }
        g_XR() {
            return !this.g_UA && !this.g_aVA()
        }
        g_aXc() {}
        g_ahQ(e) {
            let a = this.g_wy.g_ahQ();
            return e && (a /= this.g_Lm || .001), a
        }
        g_MJ() {}
        g_JV() {}
        g_aVR() {}
        g_aXd() {
            return this.g_aWV
        }
        g_MI() {}
        g_ayf(e) {
            this.g_aWX = e, this.g_aWS.gain.cancelScheduledValues(0), this.g_aW$ = -1, this.g_aWS.gain.value = this.g_aXe()
        }
        g_ayg(g, _, t) {
            if (!this.g_aXf()) {
                g *= this.g_aVk();
                const a = this.g_aWS.gain;
                a.cancelScheduledValues(0);
                const n = this.g_aWp.g_aVa(),
                    e = n + _;
                a.setValueAtTime(a.value, n), a.linearRampToValueAtTime(g, e), this.g_aWX = g, this.g_aW$ = e, this.g_aXa = t
            }
        }
        g_aVS() {
            this.g_ayf(this.g_aWX)
        }
        g_KM(e) {
            -1 !== this.g_aW$ && e >= this.g_aW$ && (this.g_aW$ = -1, this.g_aXa && this.g_JV(), this.g_aWp.g_aVN("fade-ended", this.g_aWR))
        }
        g_aXe() {
            const e = this.g_aWX * this.g_aVk();
            return isFinite(e) ? e : 0
        }
        g_aye(e) {
            e = !!e, this.g_aWY === e || (this.g_aWY = e, this.g_aVT())
        }
        g_aXf() {
            return this.g_aWY
        }
        g_axX() {
            return this.g_aWp.g_axX()
        }
        g_aVT() {}
        g_ayd() {}
        g_Zy() {
            return this.g_$R
        }
        g_LY(e) {
            this.g_Lm === e || (this.g_Lm = e, this.g_aVU())
        }
        g_aVU() {}
        g_LZ() {
            return this.g_Lm
        }
        g_ayl() {}
        g_arJ() {}
        g_aVO(e) {
            e = !!e, this.g_aWU === e || (this.g_aWU = e, this.g_aWU ? (!this.g_aWT && (this.g_aWT = this.g_aw$().createPanner(), this.g_aWT.panningModel = this.g_aWp.g_aVp(), this.g_aWT.distanceModel = this.g_aWp.g_aVq(), this.g_aWT.refDistance = this.g_aWp.g_aVr(), this.g_aWT.maxDistance = this.g_aWp.g_aVs(), this.g_aWT.rolloffFactor = this.g_aWp.g_aVt()), this.g_aWS.disconnect(), this.g_aWS.connect(this.g_aWT), this.g_aWT.connect(this.g_axb())) : (this.g_aWT.disconnect(), this.g_aWS.disconnect(), this.g_aWS.connect(this.g_axb())))
        }
        g_aVP(a, t, n, i, e, o) {
            this.g_aWU && (this.g_aVV(a, t, n), this.g_aWT.coneInnerAngle = _(i), this.g_aWT.coneOuterAngle = _(e), this.g_aWT.coneOuterGain = o)
        }
        g_aVV(e, a, g) {
            this.g_aWU && (this.g_aWT.setPosition(e, a, 0), this.g_aWT.setOrientation(Math.cos(g), Math.sin(g), 0))
        }
        g_aVQ(e) {
            this.g_aW_ = e
        }
        g_D$() {
            return this.g_aW_
        }
        g_aXg() {}
        g_aVj(e) {
            const a = this.g_aWT || this.g_aWS;
            a.disconnect(), a.connect(e)
        }
        g_aVL() {
            return {
                tag: this.g_aWR,
                duration: this.g_ahQ(),
                volume: this.g_aWX,
                isPlaying: this.g_L$(),
                playbackTime: this.g_aXc(),
                playbackRate: this.g_LZ(),
                uid: this.g_aW_,
                bufferOriginalUrl: this.g_aWB(),
                bufferUrl: "",
                bufferType: this.g_aWC(),
                isMusic: this.g_aVy(),
                isLooping: this.g_Zy(),
                isMuted: this.g_aXf(),
                resumePosition: this.g_aXg(),
                pan: this.g_aXh()
            }
        }
        g_aWo(e) {
            this.g_LY(e.playbackRate), this.g_aye(e.isMuted)
        }
        g_aXh() {
            if (!this.g_aWT) return null;
            const e = this.g_aWT;
            return {
                pos: [e.positionX.value, e.positionY.value, e.positionZ.value],
                orient: [e.orientationX.value, e.orientationY.value, e.orientationZ.value],
                cia: e.coneInnerAngle,
                coa: e.coneOuterAngle,
                cog: e.coneOuterGain,
                uid: this.g_aW_
            }
        }
        g_aWn(e) {
            if (!e) return void this.g_aVO(!1);
            this.g_aVO(!0);
            const a = this.g_aWT;
            a.setPosition(...a.pos), a.setOrientation(...a.orient), a.coneInnerAngle = a.cia, a.coneOuterAngle = a.coa, a.coneOuterGain = a.cog, this.g_aW_ = a.uid
        }
    }
}
"use strict", self.g_aWw = class extends g_aWQ {
    constructor(e, a, g) {
        super(e, a, g), this.g_wy.g_aWK().connect(this.g_aWS), this.g_wy.onended = () => this.g_aXi()
    }
    g_ek() {
        this.g_JV(), this.g_wy.g_aWK().disconnect(), super.g_ek()
    }
    g_aWJ() {
        return this.g_wy.g_aWJ()
    }
    g_aXi() {
        this.g_UA = !0, this.g_aW_ = -1, this.g_aWp.g_aVN("ended", this.g_aWR)
    }
    g_aVA() {
        return this.g_aWJ().ended
    }
    g_aVE() {
        return !!this.g_UA || this.g_aVA()
    }
    g_aXc(e) {
        let a = this.g_aWJ().currentTime;
        return e && (a *= this.g_Lm), this.g_$R || (a = Math.min(a, this.g_ahQ())), a
    }
    g_MJ(e, a, g) {
        const _ = this.g_aWJ();
        if (1 !== _.playbackRate && (_.playbackRate = 1), _.loop !== e && (_.loop = e), this.g_ayf(a), _.muted && (_.muted = !1), _.currentTime !== g) try {
            _.currentTime = g
        } catch (e) {
            console.warn(`[Construct 3] Exception seeking audio '${this.g_wy.g_aVB()}' to position '${g}': `, e)
        }
        this.g_aWp.g_aTf(_), this.g_UA = !1, this.g_aWV = !1, this.g_$R = e, this.g_Lm = 1
    }
    g_JV() {
        const e = this.g_aWJ();
        e.paused || e.pause(), this.g_aWp.g_aTg(e), this.g_UA = !0, this.g_aWV = !1, this.g_aW_ = -1
    }
    g_aVR() {
        if (!(this.g_aWV || this.g_UA || this.g_aVA())) {
            const e = this.g_aWJ();
            e.paused || e.pause(), this.g_aWp.g_aTg(e), this.g_aWV = !0
        }
    }
    g_MI() {
        !this.g_aWV || this.g_UA || this.g_aVA() || (this.g_aWp.g_aTf(this.g_aWJ()), this.g_aWV = !1)
    }
    g_aVT() {
        this.g_aWJ().muted = this.g_aWY || this.g_axX()
    }
    g_ayd(e) {
        e = !!e, this.g_$R === e || (this.g_$R = e, this.g_aWJ().loop = e)
    }
    g_aVU() {
        let e = this.g_Lm;
        this.g_aWZ && (e *= this.g_aWp.g_KK());
        try {
            this.g_aWJ().playbackRate = e
        } catch (a) {
            console.warn(`[Construct 3] Unable to set playback rate '${e}':`, a)
        }
    }
    g_ayl(e) {
        if (!(this.g_UA || this.g_aVA())) try {
            this.g_aWJ().currentTime = e
        } catch (a) {
            console.warn(`[Construct 3] Error seeking audio to '${e}': `, a)
        }
    }
    g_aXg() {
        return this.g_aXc()
    }
    g_arJ(e) {
        e ? this.g_L$() ? (this.g_aWJ().pause(), this.g_aWW = !0) : this.g_aWW = !1 : this.g_aWW && (this.g_aWp.g_aTf(this.g_aWJ()), this.g_aWW = !1)
    }
}, "use strict", self.g_aWx = class extends g_aWQ {
    constructor(e, a, g) {
        super(e, a, g), this.g_aXj = null, this.g_aXk = e => this.g_aXi(e), this.g_aXl = !0, this.g_aXm = null, this.g_aqi = 0, this.g_aXn = 0, this.g_aXo = 1
    }
    g_ek() {
        this.g_JV(), this.g_aXp(), this.g_aXk = null, super.g_ek()
    }
    g_aXp() {
        this.g_aXj && this.g_aXj.disconnect(), this.g_aXj = null, this.g_aXm = null
    }
    g_aXi(e) {
        this.g_aWV || this.g_aWW || e.target !== this.g_aXm || (this.g_aXl = !0, this.g_UA = !0, this.g_aW_ = -1, this.g_aXp(), this.g_aWp.g_aVN("ended", this.g_aWR))
    }
    g_aVA() {
        return !(!this.g_UA && this.g_aXj && this.g_aXj.loop) && !this.g_aWV && this.g_aXl
    }
    g_aVE() {
        return !this.g_aXj || this.g_UA || this.g_aVA()
    }
    g_aXc(e) {
        let a = 0;
        return a = this.g_aWV ? this.g_aXn : this.g_aXb() - this.g_aqi, e && (a *= this.g_Lm), this.g_$R || (a = Math.min(a, this.g_ahQ())), a
    }
    g_MJ(e, a, g, _) {
        this.g_aXo = 1, this.g_ayf(a), this.g_aXp(), this.g_aXj = this.g_aw$().createBufferSource(), this.g_aXj.buffer = this.g_wy.g_aVZ(), this.g_aXj.connect(this.g_aWS), this.g_aXm = this.g_aXj, this.g_aXj.onended = this.g_aXk, this.g_aXj.loop = e, this.g_aXj.start(_, g), this.g_aXl = !1, this.g_UA = !1, this.g_aWV = !1, this.g_$R = e, this.g_Lm = 1, this.g_aqi = this.g_aXb() - g
    }
    g_JV() {
        this.g_aXj && this.g_aXj.stop(0), this.g_UA = !0, this.g_aWV = !1, this.g_aW_ = -1
    }
    g_aVR() {
        this.g_aWV || this.g_UA || this.g_aVA() || (this.g_aXn = this.g_aXc(!0), this.g_$R && (this.g_aXn %= this.g_ahQ()), this.g_aWV = !0, this.g_aXj.stop(0))
    }
    g_MI() {
        !this.g_aWV || this.g_UA || this.g_aVA() || (this.g_aXp(), this.g_aXj = this.g_aw$().createBufferSource(), this.g_aXj.buffer = this.g_wy.g_aVZ(), this.g_aXj.connect(this.g_aWS), this.g_aXm = this.g_aXj, this.g_aXj.onended = this.g_aXk, this.g_aXj.loop = this.g_$R, this.g_aVS(), this.g_aVU(), this.g_aqi = this.g_aXb() - this.g_aXn / (this.g_Lm || .001), this.g_aXj.start(0, this.g_aXn), this.g_aWV = !1)
    }
    g_aXe() {
        return super.g_aXe() * this.g_aXo
    }
    g_aVT() {
        this.g_aXo = this.g_aWY || this.g_axX() ? 0 : 1, this.g_aVS()
    }
    g_ayd(e) {
        e = !!e, this.g_$R === e || (this.g_$R = e, this.g_aXj && (this.g_aXj.loop = e))
    }
    g_aVU() {
        let e = this.g_Lm;
        this.g_aWZ && (e *= this.g_aWp.g_KK()), this.g_aXj && (this.g_aXj.playbackRate.value = e)
    }
    g_ayl(e) {
        this.g_UA || this.g_aVA() || (this.g_aWV ? this.g_aXn = e : (this.g_aVR(), this.g_aXn = e, this.g_MI()))
    }
    g_aXg() {
        return this.g_aXn
    }
    g_arJ(e) {
        e ? this.g_L$() ? (this.g_aWW = !0, this.g_aXn = this.g_aXc(!0), this.g_$R && (this.g_aXn %= this.g_ahQ()), this.g_aXj.stop(0)) : this.g_aWW = !1 : this.g_aWW && (this.g_aXp(), this.g_aXj = this.g_aw$().createBufferSource(), this.g_aXj.buffer = this.g_wy.g_aVZ(), this.g_aXj.connect(this.g_aWS), this.g_aXm = this.g_aXj, this.g_aXj.onended = this.g_aXk, this.g_aXj.loop = this.g_$R, this.g_aVS(), this.g_aVU(), this.g_aqi = this.g_aXb() - this.g_aXn / (this.g_Lm || .001), this.g_aXj.start(0, this.g_aXn), this.g_aWW = !1)
    }
    g_aWo(e) {
        super.g_aWo(e), this.g_aXn = e.resumePosition
    }
}, "use strict"; {
    function g(e) {
        return Math.pow(10, e / 20)
    }

    function _(a) {
        return Math.max(Math.min(g(a), 1), 0)
    }

    function t(e) {
        return 20 * (Math.log(e) / 2.302585092994046)
    }

    function n(e) {
        return t(Math.max(Math.min(e, 1), 0))
    }

    function i(e, a) {
        return 1 - Math.exp(-a * e)
    }
    class a {
        constructor(e) {
            this.g_aWp = e, this.g_aUl = e.g_aw$(), this.g_Di = -1, this.g_aWR = "", this.g_kI = "", this.g_aXq = null
        }
        g_ek() {
            this.g_aUl = null
        }
        g_alA(e) {
            this.g_Di = e
        }
        g_ED() {
            return this.g_Di
        }
        g_aVf(e) {
            this.g_aWR = e
        }
        g_aVz() {
            return this.g_aWR
        }
        g_aXr() {
            return this.g_aUl.createGain()
        }
        g_aVd() {}
        g_aVh() {}
        g_aXs(g, a, _, t) {
            if (g.cancelScheduledValues(0), 0 === t) return void(g.value = a);
            const n = this.g_aUl.currentTime;
            t += n, 0 === _ ? g.setValueAtTime(a, t) : 1 === _ ? (g.setValueAtTime(g.value, n), g.linearRampToValueAtTime(a, t)) : 2 === _ ? (g.setValueAtTime(g.value, n), g.exponentialRampToValueAtTime(a, t)) : void 0
        }
        g_aVL() {
            return {
                type: this.g_kI,
                tag: this.g_aWR,
                params: this.g_aXq
            }
        }
    }
    self.g_aVW = class extends a {
        constructor(_, a, t, n, i, e, o) {
            super(_), this.g_kI = "filter", this.g_aXq = [a, t, n, i, e, o], this.g_aXt = this.g_aXr(), this.g_aXu = this.g_aXr(), this.g_aXu.gain.value = o, this.g_aXv = this.g_aXr(), this.g_aXv.gain.value = 1 - o, this.g_aXw = this.g_aUl.createBiquadFilter(), this.g_aXw.type = a, this.g_aXw.frequency.value = t, this.g_aXw.detune.value = n, this.g_aXw.Q.value = i, this.g_aXw.gain.vlaue = e, this.g_aXt.connect(this.g_aXw), this.g_aXt.connect(this.g_aXv), this.g_aXw.connect(this.g_aXu)
        }
        g_ek() {
            this.g_aXt.disconnect(), this.g_aXw.disconnect(), this.g_aXu.disconnect(), this.g_aXv.disconnect(), super.g_ek()
        }
        g_aVh(e) {
            this.g_aXu.disconnect(), this.g_aXu.connect(e), this.g_aXv.disconnect(), this.g_aXv.connect(e)
        }
        g_aVd() {
            return this.g_aXt
        }
        g_aWi(e, a, g, _) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_aXq[5] = a, this.g_aXs(this.g_aXu.gain, a, g, _), this.g_aXs(this.g_aXv.gain, 1 - a, g, _)) : 1 === e ? (this.g_aXq[1] = a, this.g_aXs(this.g_aXw.frequency, a, g, _)) : 2 === e ? (this.g_aXq[2] = a, this.g_aXs(this.g_aXw.detune, a, g, _)) : 3 === e ? (this.g_aXq[3] = a, this.g_aXs(this.g_aXw.Q, a, g, _)) : 4 === e ? (this.g_aXq[4] = a, this.g_aXs(this.g_aXw.gain, a, g, _)) : void 0
        }
    }, self.g_aVX = class extends a {
        constructor(e, a, g, _) {
            super(e), this.g_kI = "delay", this.g_aXq = [a, g, _], this.g_aXt = this.g_aXr(), this.g_aXu = this.g_aXr(), this.g_aXu.gain.value = _, this.g_aXv = this.g_aXr(), this.g_aXv.gain.value = 1 - _, this.g_aXx = this.g_aXr(), this.g_aXy = this.g_aUl.createDelay(a), this.g_aXy.delayTime.value = a, this.g_aXz = this.g_aXr(), this.g_aXz.gain.value = g, this.g_aXt.connect(this.g_aXx), this.g_aXt.connect(this.g_aXv), this.g_aXx.connect(this.g_aXu), this.g_aXx.connect(this.g_aXy), this.g_aXy.connect(this.g_aXz), this.g_aXz.connect(this.g_aXx)
        }
        g_ek() {
            this.g_aXt.disconnect(), this.g_aXu.disconnect(), this.g_aXv.disconnect(), this.g_aXx.disconnect(), this.g_aXy.disconnect(), this.g_aXz.disconnect(), super.g_ek()
        }
        g_aVh(e) {
            this.g_aXu.disconnect(), this.g_aXu.connect(e), this.g_aXv.disconnect(), this.g_aXv.connect(e)
        }
        g_aVd() {
            return this.g_aXt
        }
        g_aWi(g, a, t, n) {
            0 === g ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_aXq[2] = a, this.g_aXs(this.g_aXu.gain, a, t, n), this.g_aXs(this.g_aXv.gain, 1 - a, t, n)) : 4 === g ? (this.g_aXq[1] = _(a), this.g_aXs(this.g_aXz.gain, _(a), t, n)) : 5 === g ? (this.g_aXq[0] = a, this.g_aXs(this.g_aXy.delayTime, a, t, n)) : void 0
        }
    }, self.g_aVY = class extends a {
        constructor(e, a, g, _) {
            super(e), this.g_kI = "convolution", this.g_aXq = [g, _], this.g_aXA = "", this.g_aXB = "", this.g_aXC = "", this.g_aXt = this.g_aXr(), this.g_aXu = this.g_aXr(), this.g_aXu.gain.value = _, this.g_aXv = this.g_aXr(), this.g_aXv.gain.value = 1 - _, this.g_aXD = this.g_aUl.createConvolver(), this.g_aXD.normalize = g, this.g_aXD.buffer = a, this.g_aXt.connect(this.g_aXD), this.g_aXt.connect(this.g_aXv), this.g_aXD.connect(this.g_aXu)
        }
        g_ek() {
            this.g_aXt.disconnect(), this.g_aXD.disconnect(), this.g_aXu.disconnect(), this.g_aXv.disconnect(), super.g_ek()
        }
        g_aVh(e) {
            this.g_aXu.disconnect(), this.g_aXu.connect(e), this.g_aXv.disconnect(), this.g_aXv.connect(e)
        }
        g_aVd() {
            return this.g_aXt
        }
        g_aWi(e, a, g, _) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_aXq[1] = a, this.g_aXs(this.g_aXu.gain, a, g, _), this.g_aXs(this.g_aXv.gain, 1 - a, g, _)) : void 0
        }
        g_aV_(e, a, g) {
            this.g_aXA = e, this.g_aXB = a, this.g_aXC = g
        }
        g_aVL() {
            const e = super.g_aVL();
            return e.bufferOriginalUrl = this.g_aXA, e.bufferUrl = "", e.bufferType = this.g_aXC, e
        }
    }, self.g_aV$ = class extends a {
        constructor(g, a, _, t, n, e) {
            super(g), this.g_kI = "flanger", this.g_aXq = [a, _, t, n, e], this.g_aXt = this.g_aXr(), this.g_aXv = this.g_aXr(), this.g_aXv.gain.value = 1 - e / 2, this.g_aXu = this.g_aXr(), this.g_aXu.gain.value = e / 2, this.g_aXE = this.g_aXr(), this.g_aXE.gain.value = n, this.g_aXy = this.g_aUl.createDelay(a + _), this.g_aXy.delayTime.value = a, this.g_aXF = this.g_aUl.createOscillator(), this.g_aXF.frequency.value = t, this.g_aXG = this.g_aXr(), this.g_aXG.gain.value = _, this.g_aXt.connect(this.g_aXy), this.g_aXt.connect(this.g_aXv), this.g_aXy.connect(this.g_aXu), this.g_aXy.connect(this.g_aXE), this.g_aXE.connect(this.g_aXy), this.g_aXF.connect(this.g_aXG), this.g_aXG.connect(this.g_aXy.delayTime), this.g_aXF.start(0)
        }
        g_ek() {
            this.g_aXF.stop(0), this.g_aXt.disconnect(), this.g_aXy.disconnect(), this.g_aXF.disconnect(), this.g_aXG.disconnect(), this.g_aXv.disconnect(), this.g_aXu.disconnect(), this.g_aXE.disconnect(), super.g_ek()
        }
        g_aVh(e) {
            this.g_aXu.disconnect(), this.g_aXu.connect(e), this.g_aXv.disconnect(), this.g_aXv.connect(e)
        }
        g_aVd() {
            return this.g_aXt
        }
        g_aWi(e, a, g, _) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_aXq[4] = a, this.g_aXs(this.g_aXu.gain, a / 2, g, _), this.g_aXs(this.g_aXv.gain, 1 - a / 2, g, _)) : 6 === e ? (this.g_aXq[1] = a / 1e3, this.g_aXs(this.g_aXG.gain, a / 1e3, g, _)) : 7 === e ? (this.g_aXq[2] = a, this.g_aXs(this.g_aXF.frequency, a, g, _)) : 8 === e ? (this.g_aXq[3] = a / 100, this.g_aXs(this.g_aXE.gain, a / 100, g, _)) : void 0
        }
    }, self.g_aWa = class extends a {
        constructor(_, a, t, n, i, e, o) {
            super(_), this.g_kI = "phaser", this.g_aXq = [a, t, n, i, e, o], this.g_aXt = this.g_aXr(), this.g_aXv = this.g_aXr(), this.g_aXv.gain.value = 1 - o / 2, this.g_aXu = this.g_aXr(), this.g_aXu.gain.value = o / 2, this.g_aXw = this.g_aUl.createBiquadFilter(), this.g_aXw.type = "allpass", this.g_aXw.frequency.value = a, this.g_aXw.detune.value = t, this.g_aXw.Q.value = n, this.g_aXF = this.g_aUl.createOscillator(), this.g_aXF.frequency.value = e, this.g_aXG = this.g_aXr(), this.g_aXG.gain.value = i, this.g_aXt.connect(this.g_aXw), this.g_aXt.connect(this.g_aXv), this.g_aXw.connect(this.g_aXu), this.g_aXF.connect(this.g_aXG), this.g_aXG.connect(this.g_aXw.frequency), this.g_aXF.start(0)
        }
        g_ek() {
            this.g_aXF.stop(0), this.g_aXt.disconnect(), this.g_aXw.disconnect(), this.g_aXF.disconnect(), this.g_aXG.disconnect(), this.g_aXv.disconnect(), this.g_aXu.disconnect(), super.g_ek()
        }
        g_aVh(e) {
            this.g_aXu.disconnect(), this.g_aXu.connect(e), this.g_aXv.disconnect(), this.g_aXv.connect(e)
        }
        g_aVd() {
            return this.g_aXt
        }
        g_aWi(e, a, g, _) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_aXq[5] = a, this.g_aXs(this.g_aXu.gain, a / 2, g, _), this.g_aXs(this.g_aXv.gain, 1 - a / 2, g, _)) : 1 === e ? (this.g_aXq[0] = a, this.g_aXs(this.g_aXw.frequency, a, g, _)) : 2 === e ? (this.g_aXq[1] = a, this.g_aXs(this.g_aXw.detune, a, g, _)) : 3 === e ? (this.g_aXq[2] = a, this.g_aXs(this.g_aXw.Q, a, g, _)) : 6 === e ? (this.g_aXq[3] = a, this.g_aXs(this.g_aXG.gain, a, g, _)) : 7 === e ? (this.g_aXq[4] = a, this.g_aXs(this.g_aXF.frequency, a, g, _)) : void 0
        }
    }, self.g_aWb = class extends a {
        constructor(e, a) {
            super(e), this.g_kI = "gain", this.g_aXq = [a], this.g_aXH = this.g_aXr(), this.g_aXH.gain.value = a
        }
        g_ek() {
            this.g_aXH.disconnect(), super.g_ek()
        }
        g_aVh(e) {
            this.g_aXH.disconnect(), this.g_aXH.connect(e)
        }
        g_aVd() {
            return this.g_aXH
        }
        g_aWi(g, a, t, n) {
            4 === g ? (this.g_aXq[0] = _(a), this.g_aXs(this.g_aXH.gain, _(a), t, n)) : void 0
        }
    }, self.g_aWc = class extends a {
        constructor(e, a, g) {
            super(e), this.g_kI = "tremolo", this.g_aXq = [a, g], this.g_aXH = this.g_aXr(), this.g_aXH.gain.value = 1 - g / 2, this.g_aXF = this.g_aUl.createOscillator(), this.g_aXF.frequency.value = a, this.g_aXG = this.g_aXr(), this.g_aXG.gain.value = g / 2, this.g_aXF.connect(this.g_aXG), this.g_aXG.connect(this.g_aXH.gain), this.g_aXF.start(0)
        }
        g_ek() {
            this.g_aXF.stop(0), this.g_aXF.disconnect(), this.g_aXG.disconnect(), this.g_aXH.disconnect(), super.g_ek()
        }
        g_aVh(e) {
            this.g_aXH.disconnect(), this.g_aXH.connect(e)
        }
        g_aVd() {
            return this.g_aXH
        }
        g_aWi(e, a, g, _) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_aXq[1] = a, this.g_aXs(this.g_aXH.gain.value, 1 - a / 2, g, _), this.g_aXs(this.g_aXG.gain.value, a / 2, g, _)) : 7 === e ? (this.g_aXq[0] = a, this.g_aXs(this.g_aXF.frequency, a, g, _)) : void 0
        }
    }, self.g_aWd = class extends a {
        constructor(e, a, g) {
            super(e), this.g_kI = "ringmod", this.g_aXq = [a, g], this.g_aXt = this.g_aXr(), this.g_aXu = this.g_aXr(), this.g_aXu.gain.value = g, this.g_aXv = this.g_aXr(), this.g_aXv.gain.value = 1 - g, this.g_aXI = this.g_aXr(), this.g_aXI.gain.value = 0, this.g_aXF = this.g_aUl.createOscillator(), this.g_aXF.frequency.value = a, this.g_aXF.connect(this.g_aXI.gain), this.g_aXF.start(0), this.g_aXt.connect(this.g_aXI), this.g_aXt.connect(this.g_aXv), this.g_aXI.connect(this.g_aXu)
        }
        g_ek() {
            this.g_aXF.stop(0), this.g_aXF.disconnect(), this.g_aXI.disconnect(), this.g_aXt.disconnect(), this.g_aXu.disconnect(), this.g_aXv.disconnect(), super.g_ek()
        }
        g_aVh(e) {
            this.g_aXu.disconnect(), this.g_aXu.connect(e), this.g_aXv.disconnect(), this.g_aXv.connect(e)
        }
        g_aVd() {
            return this.g_aXt
        }
        g_aWi(e, a, g, _) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_aXq[1] = a, this.g_aXs(this.g_aXu.gain, a, g, _), this.g_aXs(this.g_aXv.gain, 1 - a, g, _)) : 7 === e ? (this.g_aXq[0] = a, this.g_aXs(this.g_aXF.frequency, a, g, _)) : void 0
        }
    }, self.g_aWe = class extends a {
        constructor(g, a, _, t, n, e) {
            super(g), this.g_kI = "distortion", this.g_aXq = [a, _, t, n, e], this.g_aXt = this.g_aXr(), this.g_aXJ = this.g_aXr(), this.g_aXK = this.g_aXr(), this.g_aXL(t, n), this.g_aXu = this.g_aXr(), this.g_aXu.gain.value = e, this.g_aXv = this.g_aXr(), this.g_aXv.gain.value = 1 - e, this.g_aXM = this.g_aUl.createWaveShaper(), this.g_aXN = new Float32Array(65536), this.g_aXO(a, _), this.g_aXM.curve = this.g_aXN, this.g_aXt.connect(this.g_aXJ), this.g_aXt.connect(this.g_aXv), this.g_aXJ.connect(this.g_aXM), this.g_aXM.connect(this.g_aXK), this.g_aXK.connect(this.g_aXu)
        }
        g_ek() {
            this.g_aXt.disconnect(), this.g_aXJ.disconnect(), this.g_aXM.disconnect(), this.g_aXK.disconnect(), this.g_aXu.disconnect(), this.g_aXv.disconnect(), super.g_ek()
        }
        g_aXL(e, g) {
            .01 > e && (e = .01), this.g_aXJ.gain.value = e, this.g_aXK.gain.value = Math.pow(1 / e, .6) * g
        }
        g_aXO(e, a) {
            for (let g, _ = 0; 32768 > _; ++_) g = _ / 32768, g = this.g_aXP(g, e, a), this.g_aXN[32768 + _] = g, this.g_aXN[32768 - _ - 1] = -g
        }
        g_aXP(e, a, _) {
            const t = 1.05 * _ * a - a,
                n = 0 > e ? -1 : 1,
                o = 0 > e ? -e : e;
            let g = o < a ? o : a + t * i(o - a, 1 / t);
            return g *= n, g
        }
        g_aVh(e) {
            this.g_aXu.disconnect(), this.g_aXu.connect(e), this.g_aXv.disconnect(), this.g_aXv.connect(e)
        }
        g_aVd() {
            return this.g_aXt
        }
        g_aWi(e, a, g, _) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_aXq[4] = a, this.g_aXs(this.g_aXu.gain, a, g, _), this.g_aXs(this.g_aXv.gain, 1 - a, g, _)) : void 0
        }
    }, self.g_aWf = class extends a {
        constructor(g, a, _, t, n, e) {
            super(g), this.g_kI = "compressor", this.g_aXq = [a, _, t, n, e], this.g_aXH = this.g_aUl.createDynamicsCompressor(), this.g_aXH.threshold.value = a, this.g_aXH.knee.value = _, this.g_aXH.ratio.value = t, this.g_aXH.attack.value = n, this.g_aXH.release.value = e
        }
        g_ek() {
            this.g_aXH.disconnect(), super.g_ek()
        }
        g_aVh(e) {
            this.g_aXH.disconnect(), this.g_aXH.connect(e)
        }
        g_aVd() {
            return this.g_aXH
        }
        g_aWi() {}
    }, self.g_aWg = class extends a {
        constructor(e, a, g) {
            super(e), this.g_kI = "analyser", this.g_aXq = [a, g], this.g_aXH = this.g_aUl.createAnalyser(), this.g_aXH.fftSize = a, this.g_aXH.smoothingTimeConstant = g, this.g_aXQ = new Float32Array(this.g_aXH.frequencyBinCount), this.g_aXR = new Uint8Array(a), this.g_aXS = 0, this.g_aXT = 0, this.g_aWp.g_aWj(this)
        }
        g_ek() {
            this.g_aWp.g_aWk(this), this.g_aXH.disconnect(), super.g_ek()
        }
        g_KM() {
            this.g_aXH.getFloatFrequencyData(this.g_aXQ), this.g_aXH.getByteTimeDomainData(this.g_aXR);
            const e = this.g_aXH.fftSize;
            this.g_aXS = 0;
            let a = 0;
            for (let g, _ = 0; _ < e; ++_) g = (this.g_aXR[_] - 128) / 128, 0 > g && (g = -g), this.g_aXS < g && (this.g_aXS = g), a += g * g;
            this.g_aXS = n(this.g_aXS), this.g_aXT = n(Math.sqrt(a / e))
        }
        g_aVh(e) {
            this.g_aXH.disconnect(), this.g_aXH.connect(e)
        }
        g_aVd() {
            return this.g_aXH
        }
        g_aWi() {}
        g_aVM() {
            return {
                tag: this.g_aVz(),
                index: this.g_ED(),
                peak: this.g_aXS,
                rms: this.g_aXT,
                binCount: this.g_aXH.frequencyBinCount,
                freqBins: this.g_aXQ
            }
        }
    }
} {
    const e = class extends g_aRz {
        constructor(e) {
            super(e, "touch"), this.g_aRL("request-permission", e => this.g_aXU(e))
        }
        async g_aXU(e) {
            const a = e.type;
            let g = !0;
            0 === a ? g = await this.g_aXV() : 1 === a && (g = await this.g_aXW()), this.g_aRE("permission-result", {
                type: a,
                result: g
            })
        }
        async g_aXV() {
            if (!self.DeviceOrientationEvent || !self.DeviceOrientationEvent.requestPermission) return !0;
            try {
                const e = await self.DeviceOrientationEvent.requestPermission();
                return "granted" === e
            } catch (e) {
                return console.warn("[Touch] Failed to request orientation permission: ", e), !1
            }
        }
        async g_aXW() {
            if (!self.DeviceMotionEvent || !self.DeviceMotionEvent.requestPermission) return !0;
            try {
                const e = await self.DeviceMotionEvent.requestPermission();
                return "granted" === e
            } catch (e) {
                return console.warn("[Touch] Failed to request motion permission: ", e), !1
            }
        }
    };
    g_aSi.g_aTd(e)
} {
    const e = class extends g_aRz {
        constructor(e) {
            super(e, "browser"), this.g_aoU = "", this.g_aRL("get-initial-state", e => this.g_aXX(e)), this.g_aRL("ready-for-sw-messages", () => this.g_aXY()), this.g_aRL("alert", e => this.g_aXZ(e)), this.g_aRL("close", () => this.g_aX_()), this.g_aRL("set-focus", e => this.g_aRZ(e)), this.g_aRL("vibrate", e => this.g_aX$(e)), this.g_aRL("lock-orientation", e => this.g_aYa(e)), this.g_aRL("unlock-orientation", () => this.g_aYb()), this.g_aRL("navigate", e => this.g_aYc(e)), this.g_aRL("request-fullscreen", e => this.g_aYd(e)), this.g_aRL("exit-fullscreen", () => this.g_aYe()), window.addEventListener("online", () => this.g_aJT(!0)), window.addEventListener("offline", () => this.g_aJT(!1)), document.addEventListener("backbutton", () => this.g_aYf()), "undefined" != typeof Windows && Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", e => this.g_aYg(e))
        }
        g_aXX(e) {
            return this.g_aoU = e.exportType, {
                location: location.toString(),
                isOnline: !!navigator.onLine,
                referrer: document.referrer,
                title: document.title,
                isCookieEnabled: !!navigator.cookieEnabled,
                screenWidth: screen.width,
                screenHeight: screen.height,
                windowOuterWidth: window.outerWidth,
                windowOuterHeight: window.outerHeight,
                isScirraArcade: "undefined" != typeof window.is_scirra_arcade
            }
        }
        g_aXY() {
            window.C3_RegisterSW && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(e => this.g_aRE("sw-message", e.data))
        }
        g_aJT(e) {
            this.g_aRE("online-state", {
                isOnline: e
            })
        }
        g_aYf() {
            this.g_aRE("backbutton")
        }
        g_aYg(e) {
            e.handled = !0, this.g_aRE("backbutton")
        }
        g_aYh() {
            return "nwjs" === this.g_aoU ? nw.Window.get() : null
        }
        g_aXZ(e) {
            alert(e.message)
        }
        g_aX_() {
            navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : window.close()
        }
        g_aRZ(e) {
            const g = e.isFocus;
            if ("nwjs" === this.g_aoU) {
                const e = this.g_aYh();
                g ? e.focus() : e.blur()
            } else g ? window.focus() : window.blur()
        }
        g_aX$(e) {
            navigator.vibrate && navigator.vibrate(e.pattern)
        }
        g_aYa(e) {
            const g = e.orientation;
            if (screen.orientation && screen.orientation.lock) screen.orientation.lock(g).catch(e => console.warn("[Construct 3] Failed to lock orientation: ", e));
            else try {
                let e = !1;
                screen.lockOrientation ? e = screen.lockOrientation(g) : screen.webkitLockOrientation ? e = screen.webkitLockOrientation(g) : screen.mozLockOrientation ? e = screen.mozLockOrientation(g) : screen.msLockOrientation && (e = screen.msLockOrientation(g)), e || console.warn("[Construct 3] Failed to lock orientation")
            } catch (e) {
                console.warn("[Construct 3] Failed to lock orientation: ", e)
            }
        }
        g_aYb() {
            try {
                screen.orientation && screen.orientation.unlock ? screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
            } catch (e) {}
        }
        g_aYc(e) {
            const a = e.type;
            if ("back" === a) navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : window.back();
            else if ("forward" === a) window.forward();
            else if ("home" === a) window.g_aYi();
            else if ("reload" === a) location.reload();
            else if ("url" === a) {
                const a = e.url,
                    g = e.target,
                    _ = e.exportType;
                "windows-uwp" === _ && "undefined" != typeof Windows ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)) : "cordova" === _ ? window.open(a, "_system") : "preview" === _ ? window.open(a, "_blank") : !this.g_aJS && (2 === g ? window.top.location = a : 1 === g ? window.parent.location = a : window.location = a)
            } else if ("new-window" === a) {
                const a = e.url,
                    g = e.tag,
                    _ = e.exportType;
                "windows-uwp" === _ && "undefined" != typeof Windows ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)) : "cordova" === _ ? window.open(a, "_system") : window.open(a, g)
            }
        }
        g_aYd(e) {
            const a = {
                    navigationUI: "auto"
                },
                g = e.navUI;
            1 === g ? a.navigationUI = "hide" : 2 === g && (a.navigationUI = "show");
            const _ = document.documentElement;
            _.requestFullscreen ? _.requestFullscreen(a) : _.mozRequestFullScreen ? _.mozRequestFullScreen(a) : _.msRequestFullscreen ? _.msRequestFullscreen(a) : _.webkitRequestFullScreen && ("undefined" == typeof Element.ALLOW_KEYBOARD_INPUT ? _.webkitRequestFullScreen() : _.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT))
        }
        g_aYe() {
            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
        }
    };
    g_aSi.g_aTd(e)
}