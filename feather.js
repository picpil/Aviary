/*!	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var avpw_swfobject = function () {
    function C() {
        if (b) return;
        try {
            var e = a.getElementsByTagName("body")[0].appendChild(U("span"));
            e.parentNode.removeChild(e)
        } catch (t) {
            return
        }
        b = !0;
        var n = c.length;
        for (var r = 0; r < n; r++) c[r]()
    }
    function k(e) {
        b ? e() : c[c.length] = e
    }
    function L(t) {
        if (typeof u.addEventListener != e) u.addEventListener("load", t, !1);
        else if (typeof a.addEventListener != e) a.addEventListener("load", t, !1);
        else if (typeof u.attachEvent != e) z(u, "onload", t);
        else if (typeof u.onload == "function") {
            var n = u.onload;
            u.onload = function () {
                n(), t()
            }
        } else u.onload = t
    }
    function A() {
        l ? O() : M()
    }
    function O() {
        var n = a.getElementsByTagName("body")[0],
            r = U(t);
        r.setAttribute("type", i);
        var s = n.appendChild(r);
        if (s) {
            var o = 0;
            (function () {
                if (typeof s.GetVariable != e) {
                    var t = s.GetVariable("$version");
                    t && (t = t.split(" ")[1].split(","), T.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)])
                } else if (o < 10) {
                    o++, setTimeout(arguments.callee, 10);
                    return
                }
                n.removeChild(r), s = null, M()
            })()
        } else M()
    }
    function M() {
        var t = h.length;
        if (t > 0) for (var n = 0; n < t; n++) {
            var r = h[n].id,
                i = h[n].callbackFn,
                s = {
                    success: !1,
                    id: r
                };
            if (T.pv[0] > 0) {
                var o = R(r);
                if (o) if (W(h[n].swfVersion) && !(T.wk && T.wk < 312)) V(r, !0), i && (s.success = !0, s.ref = _(r), i(s));
                else if (h[n].expressInstall && D()) {
                    var u = {};
                    u.data = h[n].expressInstall, u.width = o.getAttribute("width") || "0", u.height = o.getAttribute("height") || "0", o.getAttribute("class") && (u.styleclass = o.getAttribute("class")), o.getAttribute("align") && (u.align = o.getAttribute("align"));
                    var a = {}, f = o.getElementsByTagName("param"),
                        l = f.length;
                    for (var c = 0; c < l; c++) f[c].getAttribute("name").toLowerCase() != "movie" && (a[f[c].getAttribute("name")] = f[c].getAttribute("value"));
                    P(u, a, r, i)
                } else H(o), i && i(s)
            } else {
                V(r, !0);
                if (i) {
                    var p = _(r);
                    p && typeof p.SetVariable != e && (s.success = !0, s.ref = p), i(s)
                }
            }
        }
    }
    function _(n) {
        var r = null,
            i = R(n);
        if (i && i.nodeName == "OBJECT") if (typeof i.SetVariable != e) r = i;
        else {
            var s = i.getElementsByTagName(t)[0];
            s && (r = s)
        }
        return r
    }
    function D() {
        return !w && W("6.0.65") && (T.win || T.mac) && !(T.wk && T.wk < 312)
    }
    function P(t, n, r, i) {
        w = !0, g = i || null, y = {
            success: !1,
            id: r
        };
        var o = R(r);
        if (o) {
            o.nodeName == "OBJECT" ? (v = B(o), m = null) : (v = o, m = r), t.id = s;
            if (typeof t.width == e || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) t.width = "310";
            if (typeof t.height == e || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) t.height = "137";
            a.title = a.title.slice(0, 47) + " - Flash Player Installation";
            var u = T.ie && T.win ? "ActiveX" : "PlugIn",
                f = "MMredirectURL=" + encodeURI(window.location).toString().replace(/&/g, "%26") + "&MMplayerType=" + u + "&MMdoctitle=" + a.title;
            typeof n.flashvars != e ? n.flashvars += "&" + f : n.flashvars = f;
            if (T.ie && T.win && o.readyState != 4) {
                var l = U("div");
                r += "SWFObjectNew", l.setAttribute("id", r), o.parentNode.insertBefore(l, o), o.style.display = "none",
                function () {
                    o.readyState == 4 ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
                }()
            }
            j(t, n, r)
        }
    }
    function H(e) {
        if (T.ie && T.win && e.readyState != 4) {
            var t = U("div");
            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(B(e), t), e.style.display = "none",
            function () {
                e.readyState == 4 ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
            }()
        } else e.parentNode.replaceChild(B(e), e)
    }
    function B(e) {
        var n = U("div");
        if (T.win && T.ie) n.innerHTML = e.innerHTML;
        else {
            var r = e.getElementsByTagName(t)[0];
            if (r) {
                var i = r.childNodes;
                if (i) {
                    var s = i.length;
                    for (var o = 0; o < s; o++)(i[o].nodeType != 1 || i[o].nodeName != "PARAM") && i[o].nodeType != 8 && n.appendChild(i[o].cloneNode(!0))
                }
            }
        }
        return n
    }
    function j(n, r, s) {
        var o, u = R(s);
        if (T.wk && T.wk < 312) return o;
        if (u) {
            typeof n.id == e && (n.id = s);
            if (T.ie && T.win) {
                var a = "";
                for (var f in n) n[f] != Object.prototype[f] && (f.toLowerCase() == "data" ? r.movie = n[f] : f.toLowerCase() == "styleclass" ? a += ' class="' + n[f] + '"' : f.toLowerCase() != "classid" && (a += " " + f + '="' + n[f] + '"'));
                var l = "";
                for (var c in r) r[c] != Object.prototype[c] && (l += '<param name="' + c + '" value="' + r[c] + '" />');
                u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>", p[p.length] = n.id, o = R(n.id)
            } else {
                var h = U(t);
                h.setAttribute("type", i);
                for (var d in n) n[d] != Object.prototype[d] && (d.toLowerCase() == "styleclass" ? h.setAttribute("class", n[d]) : d.toLowerCase() != "classid" && h.setAttribute(d, n[d]));
                for (var v in r) r[v] != Object.prototype[v] && v.toLowerCase() != "movie" && F(h, v, r[v]);
                u.parentNode.replaceChild(h, u), o = h
            }
        }
        return o
    }
    function F(e, t, n) {
        var r = U("param");
        r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
    }
    function I(e) {
        var t = R(e);
        t && t.nodeName == "OBJECT" && (T.ie && T.win ? (t.style.display = "none", function () {
            t.readyState == 4 ? q(e) : setTimeout(arguments.callee, 10)
        }()) : t.parentNode.removeChild(t))
    }
    function q(e) {
        var t = R(e);
        if (t) {
            for (var n in t) typeof t[n] == "function" && (t[n] = null);
            t.parentNode.removeChild(t)
        }
    }
    function R(e) {
        var t = null;
        try {
            t = a.getElementById(e)
        } catch (n) {}
        return t
    }
    function U(e) {
        return a.createElement(e)
    }
    function z(e, t, n) {
        e.attachEvent(t, n), d[d.length] = [e, t, n]
    }
    function W(e) {
        var t = T.pv,
            n = e.split(".");
        return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
    }
    function X(n, r, i, s) {
        if (T.ie && T.mac) return;
        var o = a.getElementsByTagName("head")[0];
        if (!o) return;
        var u = i && typeof i == "string" ? i : "screen";
        s && (E = null, S = null);
        if (!E || S != u) {
            var f = U("style");
            f.setAttribute("type", "text/css"), f.setAttribute("media", u), E = o.appendChild(f), T.ie && T.win && typeof a.styleSheets != e && a.styleSheets.length > 0 && (E = a.styleSheets[a.styleSheets.length - 1]), S = u
        }
        T.ie && T.win ? E && typeof E.addRule == t && E.addRule(n, r) : E && typeof a.createTextNode != e && E.appendChild(a.createTextNode(n + " {" + r + "}"))
    }
    function V(e, t) {
        if (!x) return;
        var n = t ? "visible" : "hidden";
        b && R(e) ? R(e).style.visibility = n : X("#" + e, "visibility:" + n)
    }
    function $(t) {
        var n = /[\\\"<>\.;]/,
            r = n.exec(t) != null;
        return r && typeof encodeURIComponent != e ? encodeURIComponent(t) : t
    }
    var e = "undefined",
        t = "object",
        n = "Shockwave Flash",
        r = "ShockwaveFlash.ShockwaveFlash",
        i = "application/x-shockwave-flash",
        s = "SWFObjectExprInst",
        o = "onreadystatechange",
        u = window,
        a = document,
        f = navigator,
        l = !1,
        c = [A],
        h = [],
        p = [],
        d = [],
        v, m, g, y, b = !1,
        w = !1,
        E, S, x = !0,
        T = function () {
            var s = typeof a.getElementById != e && typeof a.getElementsByTagName != e && typeof a.createElement != e,
                o = f.userAgent.toLowerCase(),
                c = f.platform.toLowerCase(),
                h = c ? /win/.test(c) : /win/.test(o),
                p = c ? /mac/.test(c) : /mac/.test(o),
                d = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                v = !1,
                m = [0, 0, 0],
                g = null;
            if (typeof f.plugins != e && typeof f.plugins[n] == t) g = f.plugins[n].description, g && (typeof f.mimeTypes == e || !f.mimeTypes[i] || !! f.mimeTypes[i].enabledPlugin) && (l = !0, v = !1, g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10), m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10), m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof u.ActiveXObject != e) try {
                var y = new ActiveXObject(r);
                y && (g = y.GetVariable("$version"), g && (v = !0, g = g.split(" ")[1].split(","), m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)]))
            } catch (b) {}
            return {
                w3: s,
                pv: m,
                wk: d,
                ie: v,
                win: h,
                mac: p
            }
        }(),
        N = function () {
            if (!T.w3) return;
            (typeof a.readyState != e && a.readyState == "complete" || typeof a.readyState == e && (a.getElementsByTagName("body")[0] || a.body)) && C(), b || (typeof a.addEventListener != e && a.addEventListener("DOMContentLoaded", C, !1), T.ie && T.win && (a.attachEvent(o, function () {
                a.readyState == "complete" && (a.detachEvent(o, arguments.callee), C())
            }), u == top && function () {
                if (b) return;
                try {
                    a.documentElement.doScroll("left")
                } catch (e) {
                    setTimeout(arguments.callee, 0);
                    return
                }
                C()
            }()), T.wk && function () {
                if (b) return;
                if (!/loaded|complete/.test(a.readyState)) {
                    setTimeout(arguments.callee, 0);
                    return
                }
                C()
            }(), L(C))
        }(),
        J = function () {
            T.ie && T.win && window.attachEvent("onunload", function () {
                var e = d.length;
                for (var t = 0; t < e; t++) d[t][0].detachEvent(d[t][1], d[t][2]);
                var n = p.length;
                for (var r = 0; r < n; r++) I(p[r]);
                for (var i in T) T[i] = null;
                T = null;
                for (var s in avpw_swfobject) avpw_swfobject[s] = null;
                avpw_swfobject = null
            })
        }();
    return {
        registerObject: function (e, t, n, r) {
            if (T.w3 && e && t) {
                var i = {};
                i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = r, h[h.length] = i, V(e, !1)
            } else r && r({
                success: !1,
                id: e
            })
        },
        getObjectById: function (e) {
            if (T.w3) return _(e)
        },
        embedSWF: function (n, r, i, s, o, u, a, f, l, c) {
            var h = {
                success: !1,
                id: r
            };
            T.w3 && !(T.wk && T.wk < 312) && n && r && i && s && o ? (V(r, !1), k(function () {
                i += "", s += "";
                var p = {};
                if (l && typeof l === t) for (var d in l) p[d] = l[d];
                p.data = n, p.width = i, p.height = s;
                var v = {};
                if (f && typeof f === t) for (var m in f) v[m] = f[m];
                if (a && typeof a === t) for (var g in a) typeof v.flashvars != e ? v.flashvars += "&" + g + "=" + a[g] : v.flashvars = g + "=" + a[g];
                if (W(o)) {
                    var y = j(p, v, r);
                    p.id == r && V(r, !0), h.success = !0, h.ref = y
                } else {
                    if (u && D()) {
                        p.data = u, P(p, v, r, c);
                        return
                    }
                    V(r, !0)
                }
                c && c(h)
            })) : c && c(h)
        },
        switchOffAutoHideShow: function () {
            x = !1
        },
        ua: T,
        getFlashPlayerVersion: function () {
            return {
                major: T.pv[0],
                minor: T.pv[1],
                release: T.pv[2]
            }
        },
        hasFlashPlayerVersion: W,
        createSWF: function (e, t, n) {
            return T.w3 ? j(e, t, n) : undefined
        },
        showExpressInstall: function (e, t, n, r) {
            T.w3 && D() && P(e, t, n, r)
        },
        removeSWF: function (e) {
            T.w3 && I(e)
        },
        createCSS: function (e, t, n, r) {
            T.w3 && X(e, t, n, r)
        },
        addDomLoadEvent: k,
        addLoadEvent: L,
        getQueryParamValue: function (e) {
            var t = a.location.search || a.location.hash;
            if (t) {
                /\?/.test(t) && (t = t.split("?")[1]);
                if (e == null) return $(t);
                var n = t.split("&");
                for (var r = 0; r < n.length; r++) if (n[r].substring(0, n[r].indexOf("=")) == e) return $(n[r].substring(n[r].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function () {
            if (w) {
                var e = R(s);
                e && v && (e.parentNode.replaceChild(v, e), m && (V(m, !0), T.ie && T.win && (v.style.display = "block")), g && g(y)), w = !1
            }
        }
    }
}();
(function (AV, window, document) {

    // pretty much copied directly from Backbone.js
    // https://github.com/documentcloud/backbone/blob/master/backbone.js
    //
    //     Backbone.js 0.9.2
    //     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
    //     Backbone may be freely distributed under the MIT license.
    //     For all details and documentation:
    //     http://backbonejs.org
    //
    // Backbone.Events
    // -----------------
    // Regular expression used to split event strings
    var eventSplitter = /\s+/,
        Events = AV.Events = {
            on: function (e, t, n) {
                var r, i, s;
                if (!t) return this;
                e = e.split(eventSplitter), r = this._callbacks || (this._callbacks = {});
                while (i = e.shift()) s = r[i] || (r[i] = []), s.push(t, n);
                return this
            },
            off: function (e, t, n) {
                var r, i, s, o;
                if (!(i = this._callbacks)) return this;
                if (!(e || t || n)) return delete this._callbacks, this;
                e = e ? e.split(eventSplitter) : _.keys(i);
                while (r = e.shift()) {
                    if (!(s = i[r]) || !t && !n) {
                        delete i[r];
                        continue
                    }
                    for (o = s.length - 2; o >= 0; o -= 2) t && s[o] !== t || n && s[o + 1] !== n || s.splice(o, 2)
                }
                return this
            },
            trigger: function (e) {
                var t, n, r, i, s, o, u, a;
                if (!(n = this._callbacks)) return this;
                a = [], e = e.split(eventSplitter);
                for (i = 1, s = arguments.length; i < s; i++) a[i - 1] = arguments[i];
                while (t = e.shift()) {
                    if (u = n.all) u = u.slice();
                    if (r = n[t]) r = r.slice();
                    if (r) for (i = 0, s = r.length; i < s; i += 2) r[i].apply(r[i + 1] || this, a);
                    if (u) {
                        o = [t].concat(a);
                        for (i = 0, s = u.length; i < s; i += 2) u[i].apply(u[i + 1] || this, o)
                    }
                }
                return this
            }
        };

}(window['AV'] || (window['AV'] = {}), window, document));
(function (i) {
    i.build = {
        version: "2.4.2.126",
        closureCompiled: !0,
        bundled: !1,
        imgrecvServer: "",
        imgrecvServer_SSL: "",
        inAppPurchaseFrameURL: "",
        imgrecvBase: "",
        imgrecvBase_SSL: "",
        imgtrackServer: "",
        imgtrackServer_SSL: "",
        filterServer: "",
        filterServer_SSL: "",
        jsonp_imgserver: "http://featherservices.aviary.com/imgjsonpserver.aspx",
        jsonp_imgserver_SSL: "https://featherservices.aviary.com/imgjsonpserver.aspx",
        featherTargetAnnounce: "",
        featherTargetAnnounce_SSL: "",
        featherFilterAnnounce: "",
        featherFilterAnnounce_SSL: "",
        proxyServer: "",
        proxyServer_SSL: "",
        feather_baseURL: "http://feather.aviary.com/2.4.2.126/",
        feather_baseURL_SSL: "",
        feather_stickerURL: "",
        feather_stickerURL_SSL: "",
        googleTracker: "",
        MINIMUM_FLASH_PLAYER_VERSION: "",
    }
})(AV = window.AV || {});
"undefined" == typeof AV && (AV = {});
AV.validLanguages = {
    en: !0,
    android: !0,
    bg: !0,
    zh_hans: !0,
    zh_hant: !0,
    cs: !0,
    da: !0,
    nl: !0,
    fi: !0,
    fr: !0,
    de: !0,
    he: !0,
    hu: !0,
    id: !0,
    it: !0,
    ja: !0,
    ko: !0,
    no: !0,
    pl: !0,
    pt: !0,
    pt_br: !0,
    ru: !0,
    sk: !0,
    es: !0,
    sv: !0,
    vi: !0,
    lv: !0,
    lt: !0,
    ca: !0
};
(function (i, j, k) {
    i.util = {
        getX: function (a) {
            for (var f = 0; null != a;) f += a.offsetLeft, a = a.offsetParent;
            return f
        },
        getY: function (a) {
            for (var f = 0; null != a;) f += a.offsetTop, a = a.offsetParent;
            return f
        },
        getTouch: function (a) {
            a.originalEvent && (a = a.originalEvent);
            return a.changedTouches && 1 == a.changedTouches.length ? a.changedTouches[0] : a.touches && 1 == a.touches.length ? a.touches[0] : !1
        },
        getScaledDims: function (a, f, b, c) {
            var c = c || b,
                d = a,
                e = f,
                g = a / f;
            if (a > b || f > c) a - b > g * (f - c) ? (d = b, e = b * f / a + 0.5 | 0) : (d = c * g + 0.5 | 0, e = c);
            return {
                width: d,
                height: e
            }
        },
        nextFrame: function (a) {
            setTimeout(a, 1)
        },
        getDomain: function (a, f) {
            var b, c, d;
            b = "http://" == a.substr(0, 7) ? 7 : "https://" == a.substr(0, 8) ? 8 : "ftp://" == a.substr(0, 6) ? 6 : 0;
            c = a.indexOf("/", b); - 1 == c && (c = a.length);
            f || (d = a.lastIndexOf(":"), d = d > b ? a.substring(b, d) : a.substring(b, c), d.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/) || (d = a.lastIndexOf(".", c), d = a.lastIndexOf(".", d - 1), b = -1 == d ? b : d + 1));
            return a.substring(b, c)
        },
        extend: function () {
            var a, f, b, c, d, e = arguments[0] || {}, g = 1,
                h = arguments.length,
                l = !1;
            "boolean" === typeof e && (l = e,
            e = arguments[1] || {}, g = 2);
            "object" !== typeof e && !jQuery.isFunction(e) && (e = {});
            h === g && (e = this, --g);
            for (; g < h; g++) if (null != (a = arguments[g])) for (f in a) b = e[f], c = a[f], e !== c && (l && c && (jQuery.isPlainObject(c) || (d = jQuery.isArray(c))) ? (d ? (d = !1, b = b && jQuery.isArray(b) ? b : []) : b = b && jQuery.isPlainObject(b) ? b : {}, e[f] = jQuery.extend(l, b, c)) : void 0 !== c && (e[f] = c));
            return e
        },
        findItemByKeyValueFromArray: function (a, f, b) {
            var c, d;
            for (c = 0; c < b.length; c++) if (b[c] && b[c][a] && b[c][a] === f) {
                d = b[c];
                break
            }
            return d
        },
        loadFile: function () {
            var a,
            f, b = 0,
                c;
            a = function (a, b) {
                if (b) {
                    var c = function (a) {
                        (4 == this.readyState || "complete" == this.readyState || "loaded" == this.readyState) && b(a)
                    };
                    "Microsoft Internet Explorer" == navigator.appName ? a.onreadystatechange = c : a.onload = b
                }
            };
            return function (d, e, g) {
                var h;
                "js" == e ? (h = k.createElement("script"), h.setAttribute("type", "text/javascript"), a(h, g), h.setAttribute("src", d)) : "css" == e ? k.createStyleSheet ? k.createStyleSheet(d, b++) : (h = k.createElement("link"), h.setAttribute("rel", "stylesheet"), h.setAttribute("type", "text/css"),
                h.setAttribute("href", d)) : "img" == e && (h = k.createElement("img"), a(h, g), h.setAttribute("src", d));
                h && (f = f || k.getElementsByTagName("head")[0], "js" == e ? f.appendChild(h) : "css" == e && (c = c || k.createDocumentFragment(), c.appendChild(h), f.insertBefore(h, void 0)));
                return h
            }
        }(),
        getImageElem: function (a) {
            return "string" == typeof a ? k.getElementById(a) : a.length ? a[0] : a
        },
        getImageId: function (a) {
            return "string" == typeof a ? a : a.id
        },
        imgOnLoad: function (a, f) {
            var b = avpw$(a);
            b.load(f);
            (!0 == b[0].complete || 4 == b[0].readyState || "complete" == b[0].readyState || "loaded" == b[0].readyState) && b.trigger("load")
        },
        color_is_white: function (a) {
            a = a.toLowerCase();
            return "#fff" == a || "#ffffff" == a || "white" == a || "rgb(255,255,255)" == a || "rgb(255, 255, 255)" == a
        },
        color_is_light: function (a) {
            a = i.util.color_to_array(a);
            return 127.5 < 0.2 * a[0] + 0.7 * a[1] + 0.1 * a[2]
        },
        color_expand: function (a) {
            var f, b;
            4 == a.length && (f = a.charAt(1), b = a.charAt(2), a = a.charAt(3), a = "#" + f + f + b + b + a + a);
            return a
        },
        color_to_array: function (a) {
            var f, b, c;
            "#" == a.charAt(0) ? (a = i.util.color_expand(a), f = parseInt(a.substr(1,
            2), 16), b = parseInt(a.substr(3, 2), 16), c = parseInt(a.substr(5, 2), 16)) : "r" == a.charAt(0).toLowerCase() && (a = i.util.rgb_to_color(a), f = parseInt(a.substr(1, 2), 16), b = parseInt(a.substr(3, 2), 16), c = parseInt(a.substr(5, 2), 16));
            return a = [f, b, c, 1]
        },
        array_to_color: function (a) {
            a = i.util.array_to_rgb(a);
            return a = i.util.rgb_to_color(a)
        },
        array_to_rgb: function (a) {
            var f = "rgb(0,0,0)";
            a.join && (3 < a.length && (a = a.slice(0, 3)), f = "rgb(" + a.join(",") + ")");
            return f
        },
        color_to_rgb: function (a) {
            a = i.util.color_to_array(a);
            return a = i.util.array_to_rgb(a)
        },
        rgb_to_color: function (a) {
            var f, b;
            return (b = a.match(/\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/)) ? (a = parseInt(b[1]).toString(16), 1 == a.length && (a = "0" + a), f = parseInt(b[2]).toString(16), 1 == f.length && (f = "0" + f), b = parseInt(b[3]).toString(16), 1 == b.length && (b = "0" + b), "#" + a + f + b) : a
        },
        color_to_int: function (a) {
            a = i.util.color_expand(a);
            a = i.util.rgb_to_color(a);
            return parseInt(a.substr(1), 16)
        },
        loadImagesSync: function (a, f) {
            for (var b = 0, c = a.length, d = 0; d < c; d++) {
                var e = a[d].img,
                    g = a[d].src;
                e.onload = function () {
                    b++;
                    f && b == a.length && i.util.nextFrame(f)
                };
                e.src = g
            }
        }
    }
})(window.AV || (window.AV = {}), window, document);
"undefined" === typeof AV && (AV = {});
AV.FlashAPI = function () {
    var i = null,
        j = function () {
            return function (a, c, d, e, g) {
                var g = g || {}, h = {
                    quality: "high",
                    bgcolor: "#808080",
                    allowscriptaccess: "always",
                    allowfullscreen: "true"
                }, l = {};
                l.id = a;
                l.name = a;
                AV.msie && 9 > AV.msie && (l.align = "center");
                var f = a + "Content",
                    j = g,
                    g = {};
                if (l && "object" === typeof l) for (var k in l) g[k] = l[k];
                g.data = c || a + ".swf";
                g.width = (d || "100%") + "";
                g.height = (e || "100%") + "";
                a = {};
                if (h && "object" === typeof h) for (var o in h) a[o] = h[o];
                if (j && "object" === typeof j) for (var n in j) a.flashvars = "undefined" != typeof a.flashvars ? a.flashvars + ("&" + n + "=" + j[n]) : n + "=" + j[n];
                if (h = document.getElementById(f)) if ("undefined" == typeof g.id && (g.id = f), AV.msie) {
                    var m = "",
                        i;
                    for (i in g) g[i] != Object.prototype[i] && ("data" == i.toLowerCase() ? a.movie = g[i] : "styleclass" == i.toLowerCase() ? m += ' class="' + g[i] + '"' : "classid" != i.toLowerCase() && (m += " " + i + '="' + g[i] + '"'));
                    i = "";
                    for (var p in a) a[p] != Object.prototype[p] && (i += '<param name="' + p + '" value="' + a[p] + '" />');
                    h.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + m + ">" + i + "</object>";
                    "undefined" == typeof objIdArr && (objIdArr = []);
                    objIdArr[objIdArr.length] = g.id
                } else {
                    p = document.createElement("object");
                    p.setAttribute("type", "application/x-shockwave-flash");
                    for (var r in g) g[r] != Object.prototype[r] && ("styleclass" == r.toLowerCase() ? p.setAttribute("class", g[r]) : "classid" != r.toLowerCase() && p.setAttribute(r, g[r]));
                    for (m in a) a[m] != Object.prototype[m] && "movie" != m.toLowerCase() && (g = p, i = m, r = a[m], f = document.createElement("param"), f.setAttribute("name", i), f.setAttribute("value", r), g.appendChild(f));
                    h.parentNode.replaceChild(p, h)
                }
            }
        }(),
        k = function () {};
    k.prototype = function () {
        return {
            getPlugins: function () {
                return []
            },
            createCanvas: function () {
                this.initsize ? j("canvas", AV.build.feather_baseURL + "canvas.swf", this.initsize.width, this.initsize.height) : j("canvas", AV.build.feather_baseURL + "canvas.swf");
                j("avpw_flashThumb1", AV.build.feather_baseURL + "Thumb.swf", "64px", "64px", {
                    callback: "AV.FlashAPI.onThumbClick",
                    uid: "avpw_flashThumb1"
                });
                j("avpw_flashThumb2", AV.build.feather_baseURL + "Thumb.swf", "64px", "64px", {
                    callback: "AV.FlashAPI.onThumbClick",
                    uid: "avpw_flashThumb2"
                });
                j("avpw_flashThumb3", AV.build.feather_baseURL + "Thumb.swf", "64px", "64px", {
                    callback: "AV.FlashAPI.onThumbClick",
                    uid: "avpw_flashThumb3"
                });
                j("avpw_flashThumb4", AV.build.feather_baseURL + "Thumb.swf", "64px", "64px", {
                    callback: "AV.FlashAPI.onThumbClick",
                    uid: "avpw_flashThumb4"
                })
            },
            _onComponentLoaded: function (a) {
                switch (a) {
                    case "canvas":
                        a = document.getElementById(a), AV.FlashAPI._onCanvasLoaded(a)
                }
            },
            _onComponentReady: function (a) {
                var c = AV.paintWidgetInstance;
                "canvas" === a && c.canvasReadyCallback && c.canvasReadyCallback.resolve()
            }
        }
    }();
    var a = {
        listenerList: {},
        addListener: function (a, c) {
            this.listenerList.hasOwnProperty(a) || (this.listenerList[a] = []);
            this.listenerList[a].push(c)
        },
        removeAllListeners: function () {
            this.listenerList = {}
        },
        doCallbacks: function (a) {
            var c, d;
            if (this.listenerList.hasOwnProperty(a)) {
                d = this.listenerList[a];
                for (c = 0; c < d.length; c++) d[c](a)
            }
        },
        shutdown: function () {
            this.removeAllListeners()
        }
    }, f = function () {
        var a = [];
        return {
            init: function () {
                for (var c = 0; 256 > c; c++) a[c] = String.fromCharCode(c);
                a[0] = String.fromCharCode(1) + String.fromCharCode(1);
                a[1] = String.fromCharCode(1) + String.fromCharCode(2)
            },
            shutdown: function () {
                a = []
            },
            decode: function (a) {
                for (var b = [], e, g = 0, h = 0, l = [0, 0, 1]; h < a.length;) b[g++] = 1 != (e = a.charCodeAt(h++)) ? e : l[a.charCodeAt(h++)];
                return b
            },
            encode: function (c) {
                for (var d = "", e = 0; e < c.length; e += 4) d += a[c[e + 3]], d += a[c[e]], d += a[c[e + 1]], d += a[c[e + 2]];
                return d
            }
        }
    }();
    return function () {
        var b = !1,
            c = !1;
        return {
            mapToFlashToolName: function (a) {
                switch (a) {
                    case "rotate":
                        return "rotate90"
                }
                return a
            },
            mapFromFlashToolName: function (a) {
                switch (a) {
                    case "rotate90":
                        return "rotate"
                }
                return a
            },
            customBridge: function (a) {
                var b = function () {};
                b.prototype = new k;
                b.prototype.constructor = k;
                for (var c in a) b.prototype[c] = a[c];
                return b
            },
            activate: function (a) {
                this.bridge = a || new k;
                this.goldenEggCallback = null
            },
            setHiresSize: function (a, b) {
                this.canvas && this.canvas.setHiresSize(a, b)
            },
            hiresSizeChanged: function (a, b) {
                AV.paintWidgetInstance && AV.paintWidgetInstance.actions && AV.paintWidgetInstance.actions.setDims(a, b)
            },
            startEditing: function (a) {
                this.canvas = null;
                this.active_target = a;
                this.bridge.createCanvas()
            },
            restartEditing: function (a) {
                this.active_target = a;
                this._setupEditing()
            },
            close: function () {
                a.shutdown()
            },
            runGoldenEgg: function (a, b, c, h) {
                this.goldenEggCallback = h;
                this.canvas.renderGoldenEgg(a, b, c)
            },
            doCrop: function () {
                this.canvas.executeCrop()
            },
            activatePlugin: function (a) {
                this.canvas.activatePlugin(a)
            },
            deactivatePlugin: function (a) {
                this.canvas.deactivatePlugin(a)
            },
            changeProperty: function (a, b) {
                this.canvas.changeProperty(a, b)
            },
            applyPreviewFromPlugin: function (a) {
                this.canvas.applyPreviewFromPlugin(a)
            },
            commitChangesFromPlugin: function (a) {
                this.canvas.commitChangesFromPlugin(a)
            },
            discardChangesFromPlugin: function (a) {
                this.canvas.discardChangesFromPlugin(a)
            },
            resizeCanvas: function (a, b) {
                var c = this.canvas;
                c.width = a + "px";
                c.height = b + "px";
                AV.paintWidgetInstance && AV.paintWidgetInstance.setDimensions(a, b)
            },
            hideCanvas: function () {
                this.canvas && (this.canvas.style.visibility = "hidden")
            },
            showCanvas: function () {
                this.canvas && (this.canvas.style.visibility = "visible")
            },
            executePlugin: function () {
                this.canvas.executePlugin()
            },
            renderPreview: function (a, b) {
                this.canvas.renderPreview(a, b)
            },
            getDynamicPropertyDefaultValue: function (a) {
                return this.canvas.getDynamicPropertyDefaultValue(a)
            },
            syncProperty: function () {},
            syncPreview: function () {},
            setCanvasDataArray: function (a, b, c) {
                AV.canvasDataReceiver && AV.canvasDataReceiver.apply(this, [a, b, c])
            },
            onThumbClick: function (b) {
                a.doCallbacks(b)
            },
            addThumbClickListener: function (b, c) {
                a.addListener(b, c)
            },
            removeAllThumbClickListeners: function () {
                a.removeAllListeners()
            },
            setThumb: function (a, b) {
                var c = document.getElementById("avpw_flashThumb" + a);
                c && c.refreshThumb(b)
            },
            getHistory: function () {
                return this.canvas.getHistory()
            },
            getHiResStickerUrl: function (a) {
                return AV.paintWidgetInstance && AV.paintWidgetInstance.overlayRegistry ? AV.paintWidgetInstance.overlayRegistry.getHiRes(a) : null
            },
            getImageData: function (a, b) {
                b && "function" === typeof b && (i = b);
                this.canvas.commit({})
            },
            getMaxSize: function () {
                return AV.launchData.maxEditSize || AV.launchData.maxSize
            },
            getMaxBitmapSize: function () {
                var a = 0;
                "aviary" == AV.launchData.openType && (a = AV.launchData.maxSize);
                return a
            },
            _cropSelectionStarted: function () {},
            _onPreviewRendered: function () {},
            _onPluginLoaded: function (a) {
                var b = AV.paintWidgetInstance;
                b.moduleLoadedCallback && b.moduleLoadedCallback[a] && b.moduleLoadedCallback[a].resolve()
            },
            _onImageLoaded: function (a, b) {
                AV.paintWidgetLauncher_Flash_stage2 && AV.paintWidgetLauncher_Flash_stage2(a, b)
            },
            _onGoldenEggComplete: function () {
                this.goldenEggCallback && this.goldenEggCallback()
            },
            _onCanvasLoaded: function (a) {
                this.canvas = a;
                this._setupEditing(AV.launchData.url || null)
            },
            _onGetImageDataComplete: function (a) {
                i && (i.apply(this, [a]), i = null)
            },
            _setupEditing: function (a) {
                var b = this.bridge.getPlugins(),
                    a = a || this.active_target.src;
                this.canvas.setup(a,
                AV.build.proxyServer, b)
            },
            _canUndo: function () {
                return b
            },
            _onUndo: function () {
                this.canvas.undo()
            },
            _canRedo: function () {
                return c
            },
            _onRedo: function () {
                this.canvas.redo()
            },
            _onHistoryChange: function (a, e) {
                b = a;
                c = e;
                AV.controlsWidgetInstance && AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType, "updateUndoRedo", [a, e])
            },
            setCheckpoint: function (a) {
                this.canvas.setCheckpoint(a)
            },
            isACheckpoint: function (a) {
                return this.canvas.isACheckpoint(a)
            },
            undoToCheckpoint: function () {
                this.canvas.undoToCheckpoint()
            },
            redoToCheckpoint: function () {
                return this.canvas.redoToCheckpoint()
            },
            truncateActionList: function () {
                this.canvas.truncateActionList()
            },
            _onError: function (a, b) {
                "BAD_IMAGE" === a && (AV.paintWidgetCloser(!0), AV.launchData.url && (a = "BAD_URL"));
                AV.errorNotify(a, b)
            },
            init: function (a) {
                AV.FlashAPI.activate(function () {
                    if (!a) return new k;
                    if (a.plugins) {
                        for (var b = [], c = a.plugins, h = 0; h < c.length; ++h) {
                            var l = AV.FlashAPI.mapToFlashToolName(c[h]),
                                f = AV.toolDefaults[c[h]];
                            f && f.files && b.push({
                                id: l,
                                presets: f.presetsFlash,
                                files: f.files
                            })
                        }
                        0 < b.length && (a.getPlugins = function () {
                            return b
                        });
                        delete a.plugins
                    }
                    c = function () {};
                    c.prototype = new k;
                    c.prototype.constructor = k;
                    for (var j in a) c.prototype[j] = a[j];
                    return new c
                }());
                f.init()
            },
            pibeca: f
        }
    }()
}();
(function (i) {
    i.AV = i.AV || {};
    var j = i.AV;
    j.ImageSizeTracker = function () {
        var i = this;
        i.setImageScaledIndicator = function () {
            j.controlsWidgetInstance.layoutNotify(j.launchData.openType, "updateImageScaledIndicator")
        };
        i.setOrigSize = function (a, f, b) {
            var c;
            if (a.hiresWidth && a.hiresHeight) c = parseInt(a.hiresWidth, 10), a = parseInt(a.hiresHeight, 10);
            else if (a.hiresUrl) c = f.width, a = f.height;
            else if (a.displayImageSize) c = b.width, a = b.height;
            else return null;
            j.paintWidgetInstance.actions.setOrigSize(c, a);
            i.setImageScaledIndicator();
            return {
                width: c,
                height: a
            }
        };
        i.isDisplayingImageSize = function (a) {
            return a.hiresWidth || a.hiresHeight || a.displayImageSize
        };
        i.isUsingHiResDimensions = function (a) {
            return a.hiresWidth || a.hiresHeight || a.displayImageSize && a.hiresUrl
        }
    };
    return i
})(this, "undefined" !== typeof window ? window : {}, "undefined" !== typeof document ? document : {});
(function (i, j, k) {
    i.AV = i.AV || {};
    var a = i.AV,
        f = a.Events;
    a.ToolManager = function (b) {
        var c = null,
            d = function (a, c, d) {
                return b.objectNotify("tool", a, c, d)
            }, e = function (a) {
                null != a && (avpw$(".avpw_controlpanel").each(function () {
                    avpw$(this).hide()
                }), avpw$("#avpw_controlpanel_" + a).show())
            }, g = function () {
                var g, h = function (h) {
                    d(c, "panelWillClose");
                    d(h, "panelWillOpen");
                    b.resizeFlashThumbs(h);
                    f.trigger("canvas:activate", b.panelMode2WidgetMode(h));
                    e(h);
                    d(h, "resetUI");
                    j.setTimeout(function (a) {
                        return function () {
                            d(a, "panelDidClose");
                            c = h;
                            d(h, "panelDidOpen");
                            g = !1
                        }
                    }(c), 200);
                    c = h;
                    b.layoutNotify(a.launchData.openType, "disableZoomMode")
                };
                return function (a) {
                    g || (g = !0, h(a))
                }
            }(),
            h = function (c) {
                if (!b.paintWidget || !b.paintWidget.busy) {
                    b.layoutNotify(a.launchData.openType, "showView", ["editpanel"]);
                    g(c);
                    a.controlsWidgetInstance.onEggWaitThrobber.stop();
                    if ("mobile" == a.launchData.openType) {
                        var d;
                        if (d = k.getElementById("avpw_main_" + c)) if (d = d.getAttribute("data-header")) k.getElementById("avpw_control_toolname").innerHTML = d
                    }
                    a.usageTracker.addUsage(c)
                }
            },
            l = function () {
                f.on("tool:open", s);
                f.on("tool:close", i);
                f.on("tool:init", q);
                f.on("tool:shutdown", m);
                f.on("tool:commit", o);
                f.on("tool:cancel", n);
                f.on("tool:undo", u);
                f.on("tool:redo", p)
            }, i = function () {
                b.layoutNotify(a.launchData.openType, "showView", ["main"]);
                g(null)
            }, s = function (c, d) {
                var c = a.publicName2PanelMode(c),
                    e, g, l = b.activeTools,
                    i = !1;
                if (l) {
                    g = l.length;
                    for (e = 0; e < g; e++) if (l[e] === c) {
                        i = !0;
                        break
                    }
                }
                i || a.errorNotify("UNSUPPORTED_TOOL", [c]);
                i && (b.paintWidget && !b.paintWidget.moduleLoaded(c, h) && d) && (b.onEggWaitThrobber.stop(),
                b.onEggWaitThrobber.spin(avpw$(d).children(".avpw_icon_waiter")[0]));
                f.trigger("usage:tool", c, "opened");
                f.trigger("usage:firstclick", c)
            }, q = function (a) {
                d(a, "init", [b])
            }, o = function () {
                var a = c,
                    b = d(c, "commit");
                !1 !== b && (f.trigger("usage:tool", a, "applied", !0 !== b ? b : ""), f.trigger("tool:commitDone"))
            }, n = function () {
                d(c, "cancel");
                f.trigger("usage:tool", c, "canceled")
            }, m = function (a) {
                d(a, "shutdown")
            }, u = function () {
                b.paintWidget.actions.isACheckpoint() ? b.paintWidget.busy || !1 === d(c, "onUndo", [{
                    global: !0
                }]) || (b.paintWidget.actions.undoToCheckpoint(),
                d(c, "onUndoComplete", [{
                    global: !0
                }])) : b.paintWidget.busy || !1 === d(c, "onUndo") || (b.paintWidget.undo(), "mobile" != a.launchData.openType && "aviary" != a.launchData.openType && b.setMinWidth(b.paintWidget.width), d(c, "onUndoComplete"))
            }, p = function () {
                var e;
                b.paintWidget.busy || !1 === d(c, "onRedo", [{
                    global: !0
                }]) ? e = !1 : (e = b.paintWidget.actions.redoToCheckpoint()) && d(c, "onRedoComplete", [{
                    global: !0
                }]);
                e || b.paintWidget.busy || !1 === d(c, "onRedo") || (b.paintWidget.redo(), "mobile" != a.launchData.openType && "aviary" != a.launchData.openType && b.setMinWidth(b.paintWidget.width), d(c, "onRedoComplete"))
            };
        this.init = l;
        this.shutdown = function () {
            f.off("tool:open", s);
            f.off("tool:close", i);
            f.off("tool:init", q);
            f.off("tool:shutdown", m);
            f.off("tool:commit", o);
            f.off("tool:cancel", n);
            f.off("tool:undo", u);
            f.off("tool:redo", p)
        };
        this.notify = d;
        this.getActiveTool = function () {
            return c
        };
        l();
        return this
    };
    return i
})(this, "undefined" !== typeof window ? window : {}, "undefined" !== typeof document ? document : {});
(function (i, j, k) {
    i.AV = i.AV || {};
    var a = i.AV,
        f = a.Events;
    a.usageTracker = function () {
        var b = null,
            c = {}, d = [],
            e, g = !1,
            h = {}, l, i, s, q, o, n, m = function () {
                a.controlsWidgetInstance && h.submit("close")
            }, u = function () {
                j._gaq = j._gaq || [];
                if ("undefined" === typeof _gat) {
                    var b = k.createElement("script");
                    b.type = "text/javascript";
                    b.async = !0;
                    b.src = ("https:" == k.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
                    var c = k.getElementsByTagName("script")[0];
                    c.parentNode.insertBefore(b, c)
                }
                g || (_gaq.push(["Feather._setAccount",
                a.build.googleTracker]), _gaq.push(["Feather._setCustomVar", 1, "apikey", a.launchData.apiKey]), _gaq.push(["Feather._setCustomVar", 2, "featherversion", a.build.version]), _gaq.push(["Feather._setCustomVar", 3, "sessionid", this.getUUID()]), _gaq.push(["Feather._setCustomVar", 4, "language", a.launchData.language]), _gaq.push(["Feather._setCustomVar", 5, "apiversion", a.launchData.apiVersion + ""]), g = !0)
            }, p = function (a, b, c) {
                _gaq.push(["Feather._trackEvent", "tool", a + ":" + b, c ? c + "" : ""])
            }, r = function (a, b, c) {
                _gaq.push(["Feather._trackEvent",
                    "interaction", a + ":" + b, c ? c + "" : ""])
            }, v = function (a) {
                h.submit("firstclick", a);
                f.off("usage:firstclick")
            };
        h.setup = function () {
            avpw$(j).bind("unload", m);
            f.on("usage:submit", h.submit, h);
            f.on("usage:tool", p, h);
            f.on("usage:firstclick", v, h);
            f.on("usage:interact", h.interact, h)
        };
        h.shutdown = function () {
            avpw$(j).unbind("unload", m);
            f.off("usage:submit", h.submit);
            f.off("usage:tool", p);
            f.off("usage:firstclick", v);
            f.off("usage:interact", r)
        };
        h.clear = function () {
            b = null;
            c = {};
            d = []
        };
        h.getUUID = function () {
            return b ? b : b = Math.floor(4294967295 * Math.random()).toString(16) + Math.floor(4294967295 * Math.random()).toString(16)
        };
        h.addUsage = function (a, b) {
            b || (b = 1);
            c[a] = void 0 === c[a] ? b : c[a] + b
        };
        h.setPageCount = function (a) {
            var b;
            d = Array(a);
            for (b = 0; b < a; b++) d[b] = 0
        };
        h.addPageHit = function (a) {
            a !== e && d[a]++;
            e = a
        };
        h.submit = function (b, e) {
            var g = null;
            u.call(this);
            "launch" === b ? _gaq.push(["Feather._trackPageview"]) : _gaq.push(["Feather._trackEvent", "submit", b, e]);
            l || (l = avpw$("#avpw_track_form"), i = avpw$("#avpw_track_form_action"), s = avpw$("#avpw_track_form_sessionid"),
            q = avpw$("#avpw_track_form_apikey"), o = avpw$("#avpw_track_form_data"), n = avpw$("#avpw_img_track_target_holder"));
            if (a.build.imgtrackServer && a.JSON) {
                i.val(b);
                s.val(this.getUUID());
                q.val(a.launchData.apiKey);
                switch (b) {
                    case "close":
                        g = {
                            dataver: 1,
                            opentype: a.launchData.openType,
                            pagehits: d,
                            toolusage: c
                        };
                        o.val(a.JSON.stringify(g));
                        break;
                    case "firstclick":
                        g = {
                            toolusage: c
                        };
                        o.val(a.JSON.stringify(g));
                        break;
                    default:
                        o.val("")
                }
                n.html(a.buildHiddenFrame("avpw_img_track_target"));
                avpw$("#avpw_img_track_target").load(function () {
                    a.util.nextFrame(function () {
                        n && n.length && n.empty()
                    })
                });
                a.util.nextFrame(function () {
                    l && (l.length && n && n.length && n.children().length > 0) && l.submit()
                })
            }
        };
        return h
    }();
    a.PurchaseManager = function (b) {
        var c = {
            EFFECT: "effect",
            STICKER: "sticker",
            IMAGEBORDER: "imageborder"
        }, d = {}, e, g = function (b) {
            var c = b.resourceUrl;
            c && (-1 === c.indexOf("http") && (c = a.build.feather_baseURL + c), b.resourceUrl = c)
        }, h = function (b) {
            for (var c = 0; c < e.length; c++) for (var d = 0; d < b.length; d++) b[d].assetId === e[c].assetId && (e[c].purchased = !0, a.util.extend(e[c], b[d]), g(e[c]))
        }, l = function (a) {
            var b = [];
            if (a) for (var a = c[a], d = 0; d < e.length; d++) e[d].assetType === a && b.push(e[d]);
            else b = e.slice(0);
            return b
        }, f = function (a, b) {
            if (!e) return k.getAssets(a, function (c) {
                e = c;
                for (c = 0; c < e.length; c++) g(e[c]);
                k.getPurchasedAssets(a, b)
            }), !1;
            try {
                return j.avpw_purchase_frame.postMessage("getPurchasedAssets", "*"), d.getPurchasedAssets = function (c) {
                    h(c);
                    b && b.apply(this, [l(a)])
                }, !0
            } catch (c) {
                return !1
            }
        }, i = function (b, c) {
            e = [{
                needsPurchase: !1,
                assetId: "default",
                assetType: "effect",
                displayName: "Default",
                resourceUrl: "js/effects_default.js"
            }, {
                needsPurchase: !1,
                assetId: "original_effects",
                assetType: "effect",
                displayName: "Original",
                resourceUrl: "js/effects_original_effects.js"
            }, {
                needsPurchase: !1,
                assetId: "enhance",
                assetType: "effect",
                displayName: "Enhance",
                resourceUrl: "js/effects_enhance.js"
            }, {
                needsPurchase: !1,
                assetId: "original_stickers",
                assetType: "sticker",
                displayName: "Original",
                resourceUrl: "js/stickers_original_stickers.js"
            }, {
                needsPurchase: !1,
                assetId: "borders",
                assetType: "imageborder",
                displayName: "Default Image Borders",
                resourceUrl: "js/borders_original.js"
            }];
            c && a.util.nextFrame(function () {
                for (var a = 0; a < e.length; a++) g(e[a]);
                c.apply(this, [l(b)])
            });
            return !0
        }, k = this;
        k.getAssets = function (a, b) {
            j.setTimeout(function () {
                try {
                    return j.avpw_purchase_frame.postMessage("getAssets", "*"), d.getAssets = b, !0
                } catch (a) {
                    return !1
                }
            }, 2E3)
        };
        k.getPurchasedAssets = b ? f : i;
        k.getById = function (a) {
            for (var b = 0; b < e.length; b++) if (e[b].assetId === a) return e[b]
        };
        k.showAssetPurchaseView = function (b, c) {
            var e = {
                messageName: "showAssetPurchaseView",
                assetId: b
            }, e = a.JSON.stringify(e);
            try {
                return j.avpw_purchase_frame.postMessage(e,
                    "*"), d.showAssetPurchaseView = function () {
                    k.showAssetPurchasePopup(b, c)
                }, !0
            } catch (g) {
                return !1
            }
        };
        k.showAssetPurchasePopup = function (b, c) {
            avpw$("#avpw_purchase_frame").show();
            a.controlsWidgetInstance.messager.show("avpw_purchase_pack", !0);
            avpw$("#avpw_purchase_pack_close").bind("click", k.hideAssetPurchasePopup);
            d.getPurchasedAssets = function (a) {
                h(a);
                a = k.getById(b);
                c && ("function" === typeof c && a) && c.apply(this, [a]);
                k.hideAssetPurchasePopup()
            }
        };
        k.hideAssetPurchasePopup = function () {
            d.getPurchasedAssets = null;
            avpw$("#avpw_purchase_frame").hide();
            a.controlsWidgetInstance.messager.hide("avpw_purchase_pack");
            avpw$("#avpw_purchase_pack_close").unbind("click", k.hideAssetPurchasePopup)
        };
        k.messageHandler = function (a) {
            a.messageName && d[a.messageName] && d[a.messageName].apply(this, [a.data])
        };
        k.types = c;
        b && (j.avpw_purchase_frame || avpw$("#avpw_messaging").append(a.template[a.launchData.layout].inAppPurchaseFrame({
            src: a.build.inAppPurchaseFrameURL
        })));
        return k
    };
    a.getActiveTools = function (b, c) {
        var d = b;
        "string" === typeof b && (d = b.split(","));
        var e = [],
            g, h = {}, f;
        if (c) for (f = 0; f < c.length; f++) g = c[f], h[g] = !0;
        for (f = 0; f < d.length; f++) g = d[f], g = a.publicName2PanelMode(g), g in h || (e.push(g), h[g] = !0);
        return e
    };
    a.paintWidgetGetPopupEmbedDiv = function (a) {
        var c = avpw$("#avpw_canvas_embed_popup");
        if (a) {
            var d = avpw$(a),
                e, g, h = "top left bottom right margin-top margin-right margin-bottom margin-left border-top border-right border-bottom border-left padding-top padding-right padding-bottom padding-left".split(" "),
                f = {
                    position: "relative"
                };
            for (e = 0; e < h.length; e++) g = h[e], f[g] = d.css(g);
            d = avpw$(a).css("display");
            if ("" == d || "inline" == d) d = "inline-block";
            f.display = d;
            0 == c.length && (c = k.createElement("div"), c.id = "avpw_canvas_embed_popup");
            avpw$(c).hide().css(f).insertBefore(a)
        }
        return c
    };
    a.paintWidgetLauncher = function (b, c) {
        if (!a.paintWidgetInstance) return a.usageTracker.clear(), a.featherUseFlash ? a.paintWidgetLauncher_Flash(b, c) : a.paintWidgetLauncher_HTML(b, c)
    };
    a.paintWidgetLauncher_Flash = function (b, c) {
        function d() {
            avpw$(l).unbind("load", d);
            a.msie && 7 == a.msie && (avpw$("#avpw_controls").css("visibility", "hidden"), avpw$("#avpw_controls").show());
            a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "placeControls_Flash", [a.launchData.appendTo]);
            a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "enableControls");
            s = a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "getScaledImageDims_Flash", [l]);
            q = s.width;
            o = s.height;
            "aviary" == a.launchData.openType && (n = q > o ? q : o, a.launchData.maxEditSize = n);
            "mobile" != a.launchData.openType && "aviary" != a.launchData.openType && a.controlsWidgetInstance.setMinWidth(q);
            a.paintWidgetInstance = new a.PaintWidget(q, o, new a.Actions, new a.ModeManager, new a.FilterManager, new a.OverlayRegistry, new a.ImageBorderManager);
            a.paintWidgetInstance.setOrigSize(q, o);
            if ("aviary" == a.launchData.openType) var e = a.template[a.launchData.layout].flashCanvasBox({
                id: "canvasContent"
            });
            else e = k.createElement("div"), e.id = "canvasContent";
            avpw$(i).append(e);
            a.controlsWidgetInstance.initAllTools.call(a.controlsWidgetInstance);
            var h = {
                initsize: s,
                plugins: m,
                action: {
                    origUrl_: c ? c : g.src,
                    sessionID_: a.usageTracker.getUUID(),
                    referrerUrl_: j.location.href,
                    url: a.build.imgrecvServer,
                    name: "file"
                }
            };
            a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "hideOriginalImage", [g]);
            "aviary" == a.launchData.openType && a.util.nextFrame(function () {
                a.controlsWidgetInstance.setupScrollPanels()
            });
            "mobile" != a.launchData.openType && "aviary" != a.launchData.openType && (a.controlsWidgetInstance.filterEggs && a.controlsWidgetInstance.filterEggs.setup.call(a.controlsWidgetInstance),
            a.controlsWidgetInstance.populatePulldown("crop"), a.controlsWidgetInstance.populatePulldown("resize"), a.formFields && (a.formFields.checkbox_style_startup(), a.formFields.dropdown_style_startup()), a.controlsWidgetInstance.setupScrollPanels(), a.controlsWidgetInstance.setLastToolsPage("avpw_aviary_about"));
            a.setUpOstrich();
            a.msie && 7 == a.msie && (avpw$("#avpw_controls").hide(), avpw$("#avpw_controls").css("visibility", "visible"));
            avpw$("#avpw_controls").fadeIn(300);
            a.launchData.noCloseButton && avpw$("#avpw_control_cancel_pane").css("display",
                "none");
            setTimeout(function () {
                a.FlashAPI.init(h);
                a.FlashAPI.startEditing(b);
                a.controlsWidgetInstance.initWithPaintWidget(a.paintWidgetInstance);
                f.trigger("tool:close");
                a.controlsWidgetInstance.loaderPhase = 1
            }, 300)
        }
        function e() {
            a.util.imgOnLoad(l, d);
            avpw$(l).attr("src", c ? c : h)
        }
        var g = a.util.getImageElem(b),
            h = g.src,
            l, i, s, q, o, n, m;
        m = "aviary" == a.launchData.openType ? a.getActiveTools(a.launchData.tools, "whiten barrel bulge pinch warmth frames".split(" ")) : a.getActiveTools(a.launchData.tools, ["whiten", "barrel",
            "bulge", "pinch"]);
        a.controlsWidgetInstance = new a.ControlsWidget(null, b, m);
        a.controlsWidgetInstance.origURL = c ? c : avpw$(g).attr("src");
        avpw$(".avpw_isa_previewcanvas").hide();
        i = a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "getEmbedElement", [g]);
        avpw$(i).show();
        j.addEventListener ? j.addEventListener("message", a.controlsWidget_MessageHandler, !1) : j.attachEvent && j.attachEvent("onmessage", a.controlsWidget_MessageHandler);
        l = k.createElement("img");
        avpw$(l).css({
            display: "block",
            visibility: "hidden",
            position: "absolute"
        }).attr("src", c ? c : g.src);
        a.build.bundled ? e() : a.util.loadFile(a.build.feather_baseURL + "js/featherpaint_flash.js", "js", e)
    };
    a.paintWidgetLauncher_Flash_stage2 = function (b, c) {
        a.controlsWidgetInstance.loaderPhase = 2;
        a.controlsWidgetInstance.imageSizeTracker.setOrigSize(a.launchData, {
            width: b,
            height: c
        }, {
            width: a.paintWidgetInstance.width,
            height: a.paintWidgetInstance.height
        });
        a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "launchStage2_Flash");
        a.controlsWidgetInstance.showWaitThrobber(!1);
        avpw$(a.controlsWidgetInstance.onEggWaitThrobber).hide();
        a.controlsWidgetInstance.showFlashThumbs(null, !1);
        f.trigger("usage:submit", "launch");
        a.fireLaunchComplete()
    };
    a.paintWidgetLauncher_HTML = function (b, c) {
        var d = a.util.getImageElem(b),
            e, g, h, f;
        f = "mobile" == a.launchData.openType ? a.getActiveTools(a.launchData.tools, ["resize"]) : a.getActiveTools(a.launchData.tools);
        a.isRelaunched && "undefined" != typeof d.avpw_prevURL && (c = d.avpw_prevURL);
        a.controlsWidgetInstance = new a.ControlsWidget(null, b, f);
        a.controlsWidgetInstance.origURL = c ? c : avpw$(d).attr("src");
        a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "placeControls", [a.launchData.appendTo]);
        a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "enableControls");
        "mobile" != a.launchData.openType && "aviary" != a.launchData.openType && a.setUpOstrich();
        avpw$("#avpw_controls").fadeIn(300);
        ("mobile" == a.launchData.openType || "aviary" == a.launchData.openType) && a.util.nextFrame(function () {
            "mobile" == a.launchData.openType && a.setPageWidth(avpw$("#avpw_controls").width());
            a.controlsWidgetInstance.setupScrollPanels()
        });
        "mobile" != a.launchData.openType && "aviary" != a.launchData.openType && (a.controlsWidgetInstance.filterEggs && a.controlsWidgetInstance.filterEggs.setup.call(a.controlsWidgetInstance), a.controlsWidgetInstance.populatePulldown("crop"), a.controlsWidgetInstance.populatePulldown("resize"), a.formFields && (a.formFields.checkbox_style_startup(), a.formFields.dropdown_style_startup()), a.controlsWidgetInstance.setupScrollPanels(), a.controlsWidgetInstance.setLastToolsPage("avpw_aviary_about"));
        a.launchData.noCloseButton && avpw$("#avpw_control_cancel_pane").css("display", "none");
        if (d && "canvas" === d.nodeName.toLowerCase()) a.mockLauncher(d);
        else return j.addEventListener ? j.addEventListener("message", a.controlsWidget_MessageHandler, !1) : j.attachEvent && j.attachEvent("onmessage", a.controlsWidget_MessageHandler), g = a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "getEmbedElement", [d]), e = k.createElement("img"), e.id = "avpw_temp_loading_image", a.tempLoadingImageSrc = e.src, avpw$(e).load(function () {
            h = a.controlsWidgetInstance.getScaledDims(avpw$(d).width(),
            avpw$(d).height());
            e.width = h.width;
            e.height = h.height;
            a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "getScaledImageDims", [e]);
            avpw$(e).unbind();
            e.style.display = "block";
            avpw$(g).append(e);
            a.controlsWidgetInstance.showWaitThrobber(true);
            a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "hideOriginalImage", [d]);
            avpw$(g).show();
            a.util.nextFrame(function () {
                a.build.bundled ? a.paintWidgetLauncher_stage2(b, c) : a.util.loadFile(a.build.feather_baseURL + "js/featherpaint.js", "js", function () {
                    a.paintWidgetLauncher_stage2(b,
                    c)
                })
            })
        }).error(function () {
            a.paintWidgetCloser(true);
            a.errorNotify("BAD_IMAGE", [c])
        }), e.src = d.src, !1
    };
    a.mockLauncher = function (b) {
        var c = a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "getEmbedElement", [b]);
        a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "getScaledImageDims", [b]);
        avpw$(b).detach();
        avpw$(c).append(b);
        avpw$(c).show();
        a.controlsWidgetInstance.showWaitThrobber(!0);
        a.util.nextFrame(function () {
            var b = function () {};
            a.controlsWidgetInstance.initAllTools = function () {
                for (var a in this.activeTools) {
                    var b = this.activeTools[a];
                    this.tool.hasOwnProperty(b) && f.trigger("tool:init", b)
                }
            };
            a.controlsWidgetInstance.initWithPaintWidget = function (a) {
                this.paintWidget = a;
                this.initAllTools();
                this.bindControls();
                this.paintWidget.showWaitThrobber = this.showWaitThrobber.AV_bindInst(this)
            };
            a.controlsWidgetInstance.loaderPhase = 1;
            a.paintWidgetInstance = {
                moduleLoaded: function (a, b) {
                    return b.call(this)
                },
                setMode: b,
                setCurrentLayerByName: b,
                shutdown: b,
                actions: {
                    setCheckpoint: b
                }
            };
            a.controlsWidgetInstance.initWithPaintWidget(a.paintWidgetInstance);
            a.controlsWidgetInstance.showWaitThrobber(!1);
            a.controlsWidgetInstance.loaderPhase = 2;
            a.fireLaunchComplete()
        })
    };
    a.paintWidgetLauncher_stage2 = function (b, c) {
        var d = a.util.getImageElem(b),
            e, g, h = function (b) {
                a.controlsWidgetInstance && a.paintWidgetInstance && (e = new Image, avpw$(e).load(function () {
                    if (a.controlsWidgetInstance && a.paintWidgetInstance) {
                        g = a.controlsWidgetInstance.getScaledDims(e.width, e.height);
                        a.controlsWidgetInstance.imageSizeTracker.setOrigSize(a.launchData, e, g);
                        e.width = g.width;
                        e.height = g.height;
                        a.paintWidgetInstance.setDimensions(g.width, g.height);
                        if (!a.paintWidgetInstance.setBackground(e)) return a.paintWidgetCloser(!0), a.errorNotify("IMAGE_NOT_CLEAN", [c]), !1;
                        a.paintWidgetInstance.setOrigSize(g.width, g.height);
                        d.src !== c && a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "scaleCanvas");
                        avpw$(a.paintWidgetInstance.canvas).insertBefore("#avpw_temp_loading_image");
                        l.remove();
                        a.tempLoadingImageSrc = c;
                        a.controlsWidgetInstance.showWaitThrobber(!1);
                        a.controlsWidgetInstance.loaderPhase = 2;
                        a.launchData.actionListJSON && a.paintWidgetInstance.actions.importJSON(a.launchData.actionListJSON)
                    }
                }).attr("src", b))
            };
        g = a.controlsWidgetInstance.getScaledDims(avpw$(d).width(), avpw$(d).height());
        a.controlsWidgetInstance.loaderPhase = 1;
        "mobile" != a.launchData.openType && "aviary" != a.launchData.openType && a.controlsWidgetInstance.setMinWidth(g.width);
        a.paintWidgetInstance = new a.PaintWidget(g.width, g.height, new a.Actions, new a.ModeManager, new a.FilterManager, new a.OverlayRegistry, new a.ImageBorderManager);
        a.controlsWidgetInstance.canvasUI = new a.PaintUI(a.paintWidgetInstance.canvas, a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "getEmbedElement"));
        a.controlsWidgetInstance.initWithPaintWidget(a.paintWidgetInstance);
        a.paintWidgetInstance.setOrigSize(g.width, g.height);
        a.controlsWidgetInstance.imageSizeTracker.setOrigSize(a.launchData, d, g);
        var l = avpw$("#avpw_temp_loading_image");
        a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "scaleCanvas");
        if (null != c) - 1 === c.indexOf("data:") ? avpw$.ajax({
            type: "GET",
            dataType: "json",
            url: a.build.jsonp_imgserver + "?callback=?",
            data: {
                url: escape(c)
            },
            success: function (a) {
                h(a.data)
            },
            error: function (b, d) {
                200 === b.status && "parsererror" === d && a.controlsWidgetInstance && (a.controlsWidgetInstance.showWaitThrobber(!1), a.util.nextFrame(function () {
                    a.paintWidgetCloser(!0);
                    a.errorNotify("BAD_URL", [c])
                }))
            }
        }) : h(c);
        else {
            if (!a.paintWidgetInstance.setBackground(d)) return a.paintWidgetCloser(!0), a.errorNotify("IMAGE_NOT_CLEAN", [c]), !1;
            avpw$("#avpw_controls").insertAfter(a.paintWidgetInstance.canvas);
            avpw$(a.paintWidgetInstance.canvas).insertBefore(l);
            l.remove();
            a.tempLoadingImageSrc = d.src;
            a.controlsWidgetInstance.showWaitThrobber(!1);
            a.controlsWidgetInstance.loaderPhase = 2;
            a.launchData.actionListJSON && a.paintWidgetInstance.actions.importJSON(a.launchData.actionListJSON)
        }
        f.trigger("usage:submit", "launch");
        a.fireLaunchComplete();
        return !1
    };
    a.fireLaunchComplete = function () {
        var b = a.launchData.initTool;
        b && a.util.nextFrame(function () {
            f.trigger("tool:open", b)
        });
        if ("function" === typeof a.launchData.onReady) a.launchData.onReady()
    };
    a.paintWidgetShutdown = function () {
        f.trigger("usage:submit", "close");
        j.removeEventListener ? j.removeEventListener("message", a.controlsWidget_MessageHandler, !1) : j.detachEvent && j.detachEvent("onmessage", a.controlsWidget_MessageHandler);
        if ("function" === typeof a.launchData.onClose) a.launchData.onClose(a.paintWidgetInstance.dirty);
        a.paintWidgetInstance && a.paintWidgetInstance.shutdown();
        a.controlsWidgetInstance && a.controlsWidgetInstance.shutdown();
        a.featherUseFlash && a.FlashAPI.close();
        avpw$("#avpw_controls").hide();
        a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "onShutdown");
        a.paintWidgetInstance = null;
        a.controlsWidgetInstance = null;
        a.tempLoadingImageSrc = null
    };
    a.paintWidgetCloser = function (b) {
        a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "onClose", [b]);
        b ? (avpw$("#avpw_controls").hide(), a.paintWidgetShutdown()) : avpw$("#avpw_controls").fadeOut(300, function () {
            a.paintWidgetInstance && a.paintWidgetShutdown()
        })
    };
    a.controlsWidget_onImageSaved = function (b, c) {
        var d;
        "function" === typeof a.launchData.onSave && (d = a.launchData.onSave.apply(a.launchData, [a.util.getImageId(a.controlsWidgetInstance.paintImgIdElem), b, c]));
        a.controlsWidgetInstance && (a.util.getImageElem(a.controlsWidgetInstance.paintImgIdElem).avpw_prevURL = b, f.trigger("tool:close"), !1 !== d && ("mobile" == a.launchData.openType || "aviary" == a.launchData.openType ? a.controlsWidgetInstance.messager.show("avpw_aviary_beensaved", !0) : (a.controlsWidgetInstance.setLastToolsPage("avpw_aviary_beensaved"), setTimeout(function () {
            a.controlsWidgetInstance.didJumpToLastPage = !0;
            a.controlsWidgetInstance.goToToolsPage(a.controlsWidgetInstance.toolsPager.getLastPage())
        }, 5))), a.controlsWidgetInstance.paintWidget.dirty = !1, a.controlsWidgetInstance.saving = !1)
    };
    a.controlsWidget_SaveMessageParser = function (b) {
        var c, d;
        b.substr && "avpw:" == b.substr(0, 5) && (b = b.substr(5).split("---FEATHER-POSTMESSAGE---"), c = b[0], d = b[1], avpw$("#avpw_img_submit_target").unbind("load"), avpw$("#avpw_img_submit_target_holder").empty());
        c ? a.controlsWidget_onImageSaved(c, d) : a.errorNotify("ERROR_SAVING", [a.build.imgrecvServer])
    };
    a.controlsWidget_MessageHandler = function (b) {
        var c = b.data,
            d = !1,
            e, g, h, f = ["feather_baseURL", "feather_baseURL_SSL", "imgrecvBase", "imgrecvBase_SSL"];
        g = f.length;
        if (b = a.util.getDomain(b.origin)) for (e = 0; e < g; e++) if ((h = a.build[f[e]]) && b === a.util.getDomain(h)) {
            d = !0;
            break
        }
        if (d) if (c.substr && "avpw:" == c.substr(0, 5)) a.controlsWidget_SaveMessageParser(c);
        else try {
            (c = a.JSON.parse(c)) && c.messageName && a.controlsWidgetInstance.purchaseManager.messageHandler(c)
        } catch (i) {}
    };
    a.ControlsWidget = function (b, c, d) {
        this.maxHeight = this.maxWidth = parseInt(a.launchData.maxSize);
        this.saving = !1;
        this.origURL = null;
        this.activeTools = d;
        this.didJumpToLastPage = !1;
        this.quitCount = 0;
        a.usageTracker.setup();
        this.paintImgIdElem = c;
        if ("aviary" == a.launchData.openType || "mobile" == a.launchData.openType) this.purchaseManager = new a.PurchaseManager(a.launchData.allowInAppPurchase);
        f.on("layout:resize", this.setupScrollPanels, this);
        this.layoutNotify(a.launchData.openType, "showView", ["main"]);
        b && this.initWithPaintWidget(b);
        b = {
            id: "avpw_tool_spinner",
            lines: 12,
            length: 6,
            width: 2,
            radius: 6,
            color: "#fff",
            speed: 0.5,
            trail: 70
        };
        "mobile" != a.launchData.openType && (b.color = "#555", b.length = 4);
        this.waitThrobber = new a.Spinner({
            id: "avpw_canvas_spinner",
            lines: 12,
            length: 6,
            width: 2,
            radius: 6,
            color: "#fff",
            speed: 0.5,
            trail: 70
        });
        this.onEggWaitThrobber = new a.Spinner(b);
        this.toolManager = new a.ToolManager(this)
    };
    a.ControlsWidget.prototype.tool = {};
    a.ControlsWidget.prototype.layout = {};
    a.ControlsWidget.prototype.layoutNotify = function (a, c, d) {
        return this.objectNotify("layout", a, c, d)
    };
    a.ControlsWidget.prototype.objectNotify = function (a, c, d, e) {
        return "object" == typeof this[a][c] && (a = this[a][c], "function" == typeof a[d]) ? (d = a[d], e || (e = []), d.apply(a, e)) : !0
    };
    a.ControlsWidget.prototype.shutdown = function () {
        "mobile" != a.launchData.openType && "aviary" != a.launchData.openType && a.formFields && (a.formFields.checkbox_style_shutdown(), a.formFields.dropdown_style_shutdown());
        this.canvasUI && this.canvasUI.shutdown();
        this.messager && this.messager.hide();
        f.off("layout:resize", this.setupScrollPanels);
        this.shutdownAllTools();
        this.unbindControls();
        this.toolsPager && (this.toolsPager.shutdown(), this.toolsPager = null);
        this.paintWidget && (this.paintWidget.showWaitThrobber = null);
        a.usageTracker.shutdown();
        this.waitThrobber.stop();
        this.onEggWaitThrobber.stop();
        this.onEggWaitThrobber = this.waitThrobber = null;
        this.showPanel(null);
        this.toolManager.shutdown();
        this.toolManager = null
    };
    a.ControlsWidget.prototype.initAllTools = function () {
        a.paintWidgetInstance.filterManager.loadPack("tools");
        for (var b in this.activeTools) {
            var c = this.activeTools[b];
            this.tool.hasOwnProperty(c) && a.paintWidgetInstance.moduleLoaded(c, function (a) {
                f.trigger("tool:init", a)
            }.AV_bindInst(this))
        }
    };
    a.ControlsWidget.prototype.shutdownAllTools = function () {
        for (var a in this.activeTools) f.trigger("tool:shutdown", this.activeTools[a])
    };
    a.ControlsWidget.prototype.bindControls = function () {};
    a.ControlsWidget.prototype.unbindControls = function () {};
    a.ControlsWidget.prototype.initWithPaintWidget = function (b) {
        this.paintWidget = b;
        this.imageSizeTracker = new a.ImageSizeTracker(b.actions);
        a.featherUseFlash || this.initAllTools();
        this.bindControls();
        this.paintWidget.showWaitThrobber = this.showWaitThrobber.AV_bindInst(this)
    };
    a.ControlsWidget.prototype.setMinWidth = function (b) {
        a.msie && !(8 <= a.msie) && (b = parseInt(b) + 330, avpw$("#avpw_wrapper_1").css("min-width", b))
    };
    a.ControlsWidget.prototype.showWaitThrobber = function (b, c) {
        if (b) {
            var d = this.layoutNotify(a.launchData.openType, "getEmbedElement");
            d.is(":visible") && (this.waitThrobber.spin(d[0]), avpw$(this.waitThrobber).fadeIn(300))
        } else avpw$(this.waitThrobber.el).fadeOut(300, this.waitThrobber.stop);
        c && j.setTimeout(c, 5)
    };
    a.publicName2PanelMode = function (b) {
        "stickers" === b && (b = "overlay");
        "draw" === b && (b = "drawing");
        "aviary" == a.launchData.openType && "text" === b && !a.featherUseFlash && (b = "textwithfont");
        return b
    };
    a.ControlsWidget.prototype.panelMode2WidgetMode = function (a) {
        switch (a) {
            case "rotate":
                return "rotate90";
            case "greeneye":
                return "redeye";
            case "pinch":
                return "bulge"
        }
        return a
    };
    a.ControlsWidget.prototype.setupScrollPanels = function () {
        if (this.activeTools && this.activeTools.length) {
            var b, c, d = this,
                e, g = {}, h;
            "mobile" == a.launchData.openType ? (e = null, h = a.PAGE_WIDTH) : "aviary" == a.launchData.openType ? (h = this.layoutNotify(a.launchData.openType, "getDims").TOOLS_BROWSER_WIDTH, e = a.template[a.launchData.layout].aviaryScrollPanel, g = {
                panelWidth: h,
                panelClass: "avpw_scroll_page_complete"
            }) : (e = a.template[a.launchData.layout].aviaryScrollPanel, h = 248, avpw$("#avpw_control_main_scrolling_region").width(99999));
            e = {
                itemCount: this.activeTools.length,
                itemsPerPage: this.layoutNotify(a.launchData.openType, "getToolsPerPage"),
                pageWidth: h,
                leftArrow: avpw$("#avpw_lftArrow"),
                rightArrow: avpw$("#avpw_rghtArrow"),
                itemBuilder: function (e) {
                    b = d.activeTools[e];
                    c = b == "overlay" ? a.getLocalizedString("Stickers") : b == "barrel" ? a.getLocalizedString("Bulge") : b == "drawing" ? a.getLocalizedString("Draw") : b == "textwithfont" ? a.getLocalizedString("Text") : b.substr(0, 1).toUpperCase() + b.substr(1);
                    c = a.getLocalizedString(c);
                    return a.template[a.launchData.layout].eggIcon({
                        optionName: b,
                        capOptionName: c
                    })
                },
                pageTemplate: a.template[a.launchData.layout].genericScrollPanel,
                pipTemplate: a.template[a.launchData.layout].scrollPanelPip,
                lastPageTemplate: e,
                lastPageContents: g,
                pageContainer: avpw$("#avpw_control_main_scrolling_region"),
                pipContainer: avpw$("#avpw_tools_pager ul"),
                onPageLeft: function () {
                    d.didJumpToLastPage ? d.goToPreviousToolsPage.call(d) : d.toolsPager.pageLeft.call(this);
                    return false
                },
                onPageChange: function (b) {
                    a.usageTracker.addPageHit(b)
                }
            };
            this.toolsPager = new a.Pager(e);
            a.usageTracker.setPageCount(this.toolsPager.getPageCount());
            "aviary" == a.launchData.openType && avpw$("#avpw_control_main_scrolling_region").css("width",
            this.toolsPager.getPageCount() * h + "px");
            this.toolsPager.changePage()
        }
    };
    a.ControlsWidget.prototype.setLastToolsPage = function (a) {
        avpw$(".avpw_isa_last_panel").hide();
        avpw$("#" + a).show()
    };
    a.ControlsWidget.prototype.goToToolsPage = function (a, c, d) {
        this.toolsPager.setCurrentPage(parseInt(a));
        this.toolsPager.changePage(c, d)
    };
    a.ControlsWidget.prototype.goToPreviousToolsPage = function () {
        var a = this;
        this.didJumpToLastPage = !1;
        this.goToToolsPage(this.toolsPager.getPreviousPage(), !1, function () {
            a.setLastToolsPage("avpw_aviary_about")
        })
    };
    a.ControlsWidget.prototype.messager = function () {
        var b = {}, c, d, e;
        return {
            show: function (e, h, f) {
                c = c || avpw$("#avpw_messaging");
                d = d || avpw$("#avpw_messaging_inner");
                e = b[e] || (b[e] = avpw$("#" + e));
                d.append(e);
                c.show();
                h ? (c.data("needsConfirmation", !0), a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "disableControls")) : (c.data("needsConfirmation", !1), f || j.setTimeout(this.hide, 1E3))
            },
            hide: function (d, h) {
                c = c || avpw$("#avpw_messaging");
                e = e || avpw$("#avpw_messages");
                if (d) {
                    var f = b[d];
                    f && e.append(f)
                } else avpw$.each(b,

                function (a, b) {
                    e.append(b)
                });
                c.data("needsConfirmation") ? (j.setTimeout(function () {
                    h && h()
                }, 400), a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "enableControls")) : (c.hide(), h && h())
            },
            addMessage: function (a) {
                e = e || avpw$("#avpw_messages");
                a && (e[0].innerHTML += a)
            }
        }
    }();
    a.ControlsWidget.prototype.orientationChanged = function () {};
    a.ControlsWidget.prototype.windowResized = function () {
        var a = null;
        return function () {
            j.clearTimeout(a);
            a = j.setTimeout(function () {
                f.trigger("layout:resize");
                a = null
            }, 500)
        }
    }();
    a.ControlsWidget.prototype.Slider = function (a) {
        var c = !1,
            d = function (d, e) {
                !c && a.onstart && a.onstart.apply(this, [d, e])
            }, e = function (d, e) {
                !c && a.onchange && a.onchange.apply(this, [d, e])
            }, g = function (d, e) {
                !c && a.onslide && a.onslide.apply(this, [d, e])
            }, h = avpw$(a.element).slider({
                range: "min",
                max: a.max,
                min: a.min,
                value: a.defaultValue || a.max / 2,
                delay: a.delay
            });
        this.getValue = function () {
            return h.slider("value")
        };
        this.setValue = function (a) {
            return h.slider("value", a)
        };
        this.reset = function () {
            c = !0;
            this.setValue(a.defaultValue);
            c = !1
        };
        this.addListeners = function () {
            h.bind("slidestart",
            d).bind("slidechange", e).bind("slide", g)
        };
        this.removeListeners = function () {
            h.unbind("slidestart").unbind("slide").unbind("slidechange")
        };
        this.shutdown = function () {
            h.slider("destroy")
        };
        return this
    };
    a.ControlsWidget.prototype.Thumbs = function (b) {
        var c = b.elements,
            d = function (a, b) {
                var d = this;
                return function () {
                    a && a.apply(d, [c[b], b])
                }
            };
        this.addListeners = function () {
            for (var e = 0; e < c.length; e++) a.featherUseFlash ? a.FlashAPI.addThumbClickListener("avpw_flashThumb" + (e + 1), d(b.onclick, e)) : avpw$(c[e]).bind("click", d(b.onclick,
            e))
        };
        this.removeListeners = function () {
            a.featherUseFlash ? a.FlashAPI.removeAllThumbClickListeners() : avpw$(c).unbind("click")
        };
        this.reset = function () {
            for (var a = 0; a < c.length; a++) b.onreset && b.onreset.apply(this, [c[a], a])
        };
        return this
    };
    a.ControlsWidget.prototype._drawUICircle = function (b, c, d, e, g) {
        a.featherUseFlash ? this._drawUICircle_Flash(b, c, d, e, g) : this._drawUICircle_HTML(b, c, d, e, g)
    };
    a.ControlsWidget.prototype._drawUICircle_Flash = function (b, c, d, e) {
        c = parseInt(c);
        d = a.util.color_to_int(d);
        "transparent" == e ? (b = !0, e = 0) : (b = !1, e = e ? parseInt(e.slice(1), 16) : 16777215);
        a.getFlashMovie("avpw_flashThumb1").setBrushThumb(c, d, e, b)
    };
    a.ControlsWidget.prototype._drawUICircle_HTML = function (b, c, d, e, g) {
        var b = avpw$(b)[0],
            h = b.getContext("2d");
        h.clearRect(0, 0, b.width, b.height);
        g && "transparent" !== e && this._drawUIGrid(h, b.width, b.height);
        h.globalCompositeOperation = "source-over";
        null != d ? (h.strokeStyle = g && ("transparent" == d || a.util.color_is_white(d) || null == e) ? "#444" : d, d = 3) : (h.strokeStyle = "rgba(0,0,0,0)", d = 1);
        h.lineWidth = d;
        h.beginPath();
        h.arc(b.width / 2, b.height / 2, c, 0, 2 * Math.PI, !0);
        h.stroke();
        h.closePath();
        null != e && (h.save(), h.clip(), g && "transparent" == e ? this._drawUIGrid(h, b.width, b.height) : (h.fillStyle = e, h.fillRect(0, 0, b.width, b.height)), h.restore())
    };
    a.ControlsWidget.prototype._drawUIGrid = function (a, c, d, e) {
        var g;
        e || (e = 5);
        for (g = 0; g < d + e; g += e) for (c = 0; c < d + e; c += e) a.fillStyle = 1 == (c + g & 1) ? "#fff" : "#ddd", a.fillRect(c, g, e, e)
    };
    a.ControlsWidget.prototype.showPanel = function (a) {
        null != a && (avpw$(".avpw_controlpanel").each(function () {
            avpw$(this).hide()
        }),
        avpw$("#avpw_controlpanel_" + a).show())
    };
    a.ControlsWidget.prototype.showFlashThumbs = function (b, c) {
        if (a.featherUseFlash) {
            var d, e, g, h;
            d = b ? avpw$("#avpw_controlpanel_" + b + " .avpw_flashthumb_holder") : avpw$(".avpw_flashthumb_holder");
            c ? avpw$(d).each(function (b, c) {
                e = "avpw_flashThumb" + (b + 1);
                h = a.getFlashMovie(e);
                h.width = avpw$(c).width();
                h.height = avpw$(c).height();
                g = avpw$(c).offset();
                g.top += 1;
                g.left += 1;
                avpw$("#" + e).offset(g)
            }) : avpw$(d).each(function (a) {
                e = "avpw_flashThumb" + (a + 1);
                avpw$("#" + e).offset({
                    top: -9999,
                    left: -9999
                })
            })
        }
    };
    a.ControlsWidget.prototype.resizeFlashThumbs = function (b) {
        if (a.featherUseFlash) {
            var c, d, b = avpw$("#avpw_controlpanel_" + b + " .avpw_flashthumb_holder");
            avpw$(b).each(function (b, g) {
                c = "avpw_flashThumb" + (b + 1);
                d = a.getFlashMovie(c);
                var h = avpw$(g).prop("width"),
                    f = avpw$(g).prop("height");
                h || (h = avpw$(g).width());
                f || (f = avpw$(g).height());
                h && f && (d.width = h, d.height = f)
            })
        }
    };
    a.ControlsWidget.prototype.save = function () {
        var b = function (b) {
            a.simpleXHRPost(a.build.imgrecvServer, {
                postdata: a.launchData.postData,
                posturl: a.launchData.postUrl,
                apikey: a.launchData.apiKey,
                sessionid: a.usageTracker.getUUID(),
                actionlist: this.paintWidget.actions.exportJSON(!0),
                origurl: this.origURL,
                encodedas: "base64text",
                hiresurl: a.launchData.hiresUrl,
                contenttype: a.launchData.fileFormat,
                jpgquality: a.launchData.jpgQuality,
                debug: a.launchData.debug,
                asyncsave: a.launchData.asyncSave,
                signature: a.launchData.signature,
                timestamp: a.launchData.timestamp,
                usecustomfileexpiration: a.launchData.useCustomFileExpiration,
                file: b
            }, this.saveCallback_XHR.AV_bindInst(this)) || c.call(this)
        }, c = function (b) {
            var c = "avpw_img_submit_target_" + Math.floor(4294967295 * Math.random()).toString(16);
            avpw$("#avpw_img_submit_target_holder").html(a.buildHiddenFrame("avpw_img_submit_target", c));
            avpw$("#avpw_save_form").attr("target", c);
            avpw$("#avpw_img_submit_target").load(function () {
                this.saveCallback_form(c)
            }.AV_bindInst(this));
            avpw$("#avpw_save_form_data").val(b);
            avpw$("#avpw_save_form_postdata").val(a.launchData.postData);
            avpw$("#avpw_save_form_posturl").val(a.launchData.postUrl);
            avpw$("#avpw_save_form_apikey").val(a.launchData.apiKey);
            avpw$("#avpw_save_form_sessionid").val(a.usageTracker.getUUID());
            avpw$("#avpw_save_form_actionlist").val(this.paintWidget.actions.exportJSON(!0));
            avpw$("#avpw_save_form_origurl").val(this.origURL);
            avpw$("#avpw_save_form_hiresurl").val(a.launchData.hiresUrl);
            avpw$("#avpw_save_form_contenttype").val(a.launchData.fileFormat);
            avpw$("#avpw_save_form_jpgquality").val(a.launchData.jpgQuality);
            avpw$("#avpw_save_form_debug").val(a.launchData.debug);
            avpw$("#avpw_save_form_asyncsave").val(a.launchData.asyncSave);
            avpw$("#avpw_save_form_signature").val(a.launchData.signature);
            avpw$("#avpw_save_form_timestamp").val(a.launchData.timestamp);
            avpw$("#avpw_save_form_usecustomfileexpiration").val(a.launchData.useCustomFileExpiration);
            avpw$("#avpw_save_form").submit()
        }, d = function () {
            var d = !a.featherUseFlash;
            d && this.layoutNotify(a.launchData.openType, "disableControls");
            this.paintWidget.showWaitThrobber(d, function () {
                g.paintWidget.exportImage(null, function (d) {
                    var e = d.indexOf(";", 0),
                        f = d.indexOf(",", e);
                    d.slice(5, e);
                    d = d.slice(f + 1);
                    avpw$.support.cors && (!a.firefox || 4 <= a.firefox) ? b.call(g, d) : c.call(g, d)
                })
            });
            var g = this;
            return !1;
        };
        return function () {
            if (2 > a.controlsWidgetInstance.loaderPhase || this.saving) return !1;
            f.trigger("tool:commit");
            f.trigger("tool:close");
            this.saving = !0;
            a.prevActionList = this.paintWidget.actions.exportJSON(!0);
            a.launchData.postData && "string" !== typeof a.launchData.postData && (a.launchData.postData = a.JSON.stringify(a.launchData.postData));
            return d.call(this)
        }
    }();
    a.ControlsWidget.prototype.onSaveButtonClicked = function () {
    	f.trigger("usage:submit", "saveclicked");
        saveImage();
        f.trigger("tool:close");
    };
    a.ControlsWidget.prototype.saveCallback_form = function (b) {
        if (this.paintWidget) if (this.layoutNotify(a.launchData.openType, "enableControls", [!0]), this.paintWidget.showWaitThrobber(!1), j.postMessage) j.avpw_img_submit_target_announcer.postMessage("avpw_load:" + b, "*");
        else {
            var c, d = 0;
            a.controlsWidgetInstance.saveFrameLoad = function () {
                var b;
                try {
                    if ("about:blank" == c.contentWindow.location) return
                } catch (g) {}
                if (2 === d && (b = c.contentWindow.name)) d = 3, "avpw_img_submit_target_get_result" === b ? a.errorNotify("ERROR_SAVING", [a.build.imgrecvServer]) : a.controlsWidget_SaveMessageParser(b), avpw$(c).remove(), a.controlsWidgetInstance.saveFrameLoad = null;
                1 === d && (d = 2, c.contentWindow.location = "");
                d || (d = 1)
            };
            c = avpw$(a.buildHiddenFrame("avpw_img_submit_target_get_result", "avpw_img_submit_target_get_result",
            a.build.featherTargetAnnounce + "#" + b, "AV.controlsWidgetInstance.saveFrameLoad()"))[0];
            avpw$("body").append(avpw$(c))
        }
    };
    a.ControlsWidget.prototype.saveCallback_XHR = function (b) {
        var c, d, e = "",
            g = avpw$(b).find("error");
        this.layoutNotify(a.launchData.openType, "enableControls", [!0]);
        this.paintWidget.showWaitThrobber(!1);
        if (0 < g.length) e = g.text();
        else {
            if (g = avpw$(b).find("url")) c = g.text(), c = c.replace(/^\s+|\s+$/g, ""), avpw$(a.util.getImageElem(this.paintImgIdElem)).avpw_prevURL = c;
            if (b = avpw$(b).find("hiresurl")) d = b.text(), d = d.replace(/^\s+|\s+$/g, "")
        }
        c ? a.controlsWidget_onImageSaved(c, d) : a.errorNotify("ERROR_SAVING", [a.build.imgrecvServer, e])
    };
    a.ControlsWidget.prototype.showAreYouSure = function () {
        "mobile" == a.launchData.openType || "aviary" == a.launchData.openType ? this.messager.show("avpw_aviary_quitareyousure", !0) : (f.trigger("tool:close"), this.setLastToolsPage("avpw_aviary_quitareyousure"), a.util.nextFrame(function () {
            this.didJumpToLastPage = !0;
            this.goToToolsPage(this.toolsPager.getLastPage())
        }.AV_bindInst(this)))
    };
    a.ControlsWidget.prototype.cancel = function () {
        this.quitCount++;
        var b = 0 < this.quitCount && this.paintWidget && this.paintWidget.dirty;
        if ("function" === typeof a.launchData.onCloseButtonClicked && !1 === a.launchData.onCloseButtonClicked.apply(a.launchData, [b])) return !1;
        b ? this.showAreYouSure() : a.paintWidgetCloser();
        return !1
    };
    a.ControlsWidget.prototype.getScaledDims = function (b, c) {
        return a.util.getScaledDims(b, c, this.maxWidth, this.maxHeight)
    };
    a.TransformStyle = function (a) {
        var c = a || "";
        this.set = function (a) {
            if (c) for (var b in a) {
                var g = !1;
                c = c.replace(RegExp(b + "\\([^\\)]*"), function () {
                    g = !0;
                    return b + "(" + a[b]
                });
                g || (c += " " + b + "(" + a[b] + ")")
            } else for (b in a) c += " " + b + "(" + a[b] + ")"
        };
        this.serialize = function () {
            return c
        };
        return this
    };
    return i
})(this, "undefined" !== typeof window ? window : {}, "undefined" !== typeof document ? document : {});
(function (i) {
    i.AV = i.AV || {};
    var j = i.AV;
    j.errorNotify = function (i, a) {
        var f = {
            BAD_IMAGE: {
                code: 1,
                message: "There was a problem loading your image provided to the `image` config key. Either it's not actually an image file or it doesn't really exist. Or maybe YOU don't and this is all just a dream. WAKE UP!"
            },
            UNSUPPORTED: {
                code: 2,
                message: "It looks like you're using a browser that doesn't support the HTML canvas element (and also doesn't have Flash installed either). Please try accessing this page through a modern browser like Chrome, Firefox, Safari, or Internet Explorer (version 9 or higher). Your internets will thank you."
            },
            BAD_URL: {
                code: 3,
                message: "There was a problem loading your image provided by URI to the `url` config key. Either you typed the address wrong, it's not reachable by the public (and our service at " + (j.featherUseFlash ? j.build.proxyServer : j.build.imgrecvBase) + "), or it doesn't really exist. Or maybe YOU don't and this is all just a dream. WAKE UP!"
            },
            UNSUPPORTED_TOOL: {
                code: 4,
                message: "So sorry, but this tool is not available because it is not part of the set chosen with the `tools` config key. It's alternatively possible that your browser does not support this specific tool."
            },
            IMAGE_NOT_CLEAN: {
                code: 5,
                message: "Uh oh! We can't edit this image because the editor wasn't set up correctly to load external files via their address. You must either provide images from the same domain as the web page with the editor OR pass the external image address via the `url` config key in order for Aviary to be able to get permission from the browser to open it for editing. Sorry for the inconvenience!"
            },
            UNSUPPORTED_FONT: {
                code: 6,
                message: "So sorry, but this font looks to be unsupported by your browser or platform"
            },
            ERROR_SAVING: {
                code: 7,
                message: "There was a problem saving your photo. Please try again."
            },
            NO_APIKEY: {
                code: 8,
                message: "apiKey is required and not provided. See http://www.aviary.com/web-documentation#constructor-config-apikey."
            }
        }[i],
            b = f.message;
        "function" === typeof j.launchData.onError && (f.args = a, b = j.launchData.onError(f) || b);
        return b
    };
    return i
})(this, "undefined" !== typeof window ? window : {}, "undefined" !== typeof document ? document : {});
(function (i, j, k) {
    i.AV = i.AV || {};
    var a = i.AV,
        f = a.Events;
    i.Aviary = a;
    a.feather_loaded = !1;
    a.feather_loading = !1;
    a.build = a.build || {
        version: "",
        imgrecvServer: "imgrecvserver",
        flashGatewayServer: "",
        imgrecvBase: "",
        inAppPurchaseFrameURL: "",
        imgtrackServer: "imgtrackserver",
        filterServer: "",
        jsonp_imgserver: "",
        featherTargetAnnounce: "feather_target_announce_v2.html",
        proxyServer: "",
        feather_baseURL: "",
        feather_stickerURL: "",
        googleTracker: "",
        MINIMUM_FLASH_PLAYER_VERSION: "10.2.0"
    };
    a.defaultTools_legacy = "sharpen whiten rotate flip resize crop redeye blemish colors saturation blur brightness contrast drawing text overlay".split(" ");
    a.defaultTools = "enhance effects frames overlay orientation resize crop warmth brightness contrast saturation sharpness drawing text redeye whiten blemish".split(" ");
    a.defaultStickers = [
        [a.build.feather_stickerURL + "400x400/sombrero.png", a.build.feather_stickerURL + "100x100/sombrero.png", a.build.feather_stickerURL + "1000x1000/sombrero.png"],
        [a.build.feather_stickerURL + "400x400/helicopter.png", a.build.feather_stickerURL + "100x100/helicopter.png", a.build.feather_stickerURL + "1000x1000/helicopter.png"],
        [a.build.feather_stickerURL +
            "400x400/crown.png", a.build.feather_stickerURL + "100x100/crown.png", a.build.feather_stickerURL + "1000x1000/crown.png"],
        [a.build.feather_stickerURL + "400x400/fez.png", a.build.feather_stickerURL + "100x100/fez.png", a.build.feather_stickerURL + "1000x1000/fez.png"],
        [a.build.feather_stickerURL + "400x400/3d_glasses.png", a.build.feather_stickerURL + "100x100/3d_glasses.png", a.build.feather_stickerURL + "1000x1000/3d_glasses.png"],
        [a.build.feather_stickerURL + "400x400/hipster_glasses.png", a.build.feather_stickerURL +
            "100x100/hipster_glasses.png", a.build.feather_stickerURL + "1000x1000/hipster_glasses.png"],
        [a.build.feather_stickerURL + "400x400/disguise.png", a.build.feather_stickerURL + "100x100/disguise.png", a.build.feather_stickerURL + "1000x1000/disguise.png"],
        [a.build.feather_stickerURL + "400x400/aviators.png", a.build.feather_stickerURL + "100x100/aviators.png", a.build.feather_stickerURL + "1000x1000/aviators.png"],
        [a.build.feather_stickerURL + "400x400/eyepatch.png", a.build.feather_stickerURL + "100x100/eyepatch.png", a.build.feather_stickerURL +
            "1000x1000/eyepatch.png"],
        [a.build.feather_stickerURL + "400x400/bow_tie.png", a.build.feather_stickerURL + "100x100/bow_tie.png", a.build.feather_stickerURL + "1000x1000/bow_tie.png"],
        [a.build.feather_stickerURL + "400x400/tie.png", a.build.feather_stickerURL + "100x100/tie.png", a.build.feather_stickerURL + "1000x1000/tie.png"],
        [a.build.feather_stickerURL + "400x400/pipe.png", a.build.feather_stickerURL + "100x100/pipe.png", a.build.feather_stickerURL + "1000x1000/pipe.png"],
        [a.build.feather_stickerURL + "400x400/cigar.png",
        a.build.feather_stickerURL + "100x100/cigar.png", a.build.feather_stickerURL + "1000x1000/cigar.png"],
        [a.build.feather_stickerURL + "400x400/arrow.png", a.build.feather_stickerURL + "100x100/arrow.png", a.build.feather_stickerURL + "1000x1000/arrow.png"],
        [a.build.feather_stickerURL + "400x400/green_bubble.png", a.build.feather_stickerURL + "100x100/green_bubble.png", a.build.feather_stickerURL + "1000x1000/green_bubble.png"],
        [a.build.feather_stickerURL + "400x400/orange_bubble.png", a.build.feather_stickerURL + "100x100/orange_bubble.png",
        a.build.feather_stickerURL + "1000x1000/orange_bubble.png"],
        [a.build.feather_stickerURL + "400x400/blue_bubble.png", a.build.feather_stickerURL + "100x100/blue_bubble.png", a.build.feather_stickerURL + "1000x1000/blue_bubble.png"],
        [a.build.feather_stickerURL + "400x400/pink_bubble.png", a.build.feather_stickerURL + "100x100/pink_bubble.png", a.build.feather_stickerURL + "1000x1000/pink_bubble.png"],
        [a.build.feather_stickerURL + "400x400/star.png", a.build.feather_stickerURL + "100x100/star.png", a.build.feather_stickerURL +
            "1000x1000/star.png"],
        [a.build.feather_stickerURL + "400x400/heart.png", a.build.feather_stickerURL + "100x100/heart.png", a.build.feather_stickerURL + "1000x1000/heart.png"],
        [a.build.feather_stickerURL + "400x400/red_arrow.png", a.build.feather_stickerURL + "100x100/red_arrow.png", a.build.feather_stickerURL + "1000x1000/red_arrow.png"],
        [a.build.feather_stickerURL + "400x400/blue_arrow.png", a.build.feather_stickerURL + "100x100/blue_arrow.png", a.build.feather_stickerURL + "1000x1000/blue_arrow.png"],
        [a.build.feather_stickerURL +
            "400x400/green_circle.png", a.build.feather_stickerURL + "100x100/green_circle.png", a.build.feather_stickerURL + "1000x1000/green_circle.png"],
        [a.build.feather_stickerURL + "400x400/orange_square.png", a.build.feather_stickerURL + "100x100/orange_square.png", a.build.feather_stickerURL + "1000x1000/orange_square.png"]
    ];
    (function (b) {
        var c = function (b, c) {
            c = c || {};
            return {
                apiVersion: 1,
                theme: c.theme || b.Feather_Theme || "bluesky",
                minimumStyling: c.minimumStyling || !1,
                openType: c.openType || b.Feather_OpenType || "popup",
                layout: c.layout || "desktop_bluesky",
                language: c.language || b.Feather_Language || "en",
                forceFlash: c.forceFlash || b.Feather_ForceFlash,
                forceSupport: c.forceSupport || b.AV_Feather_ForceSupport,
                poweredByURL: c.poweredByURL || "http://www.aviary.com",
                giveFeedbackURL: c.giveFeedbackURL || "",
                getWidgetURL: c.getWidgetURL || "",
                onLoad: c.onLoad || b.Feather_OnLoad,
                onReady: b.Feather_OnLaunchComplete,
                onClose: b.Feather_OnClose,
                onSave: b.Feather_OnSave,
                onSaveButtonClicked: b.Feather_OnSaveButtonClicked,
                onError: b.Feather_OnError,
                image: null,
                url: null,
                appendTo: null,
                noCloseButton: b.Feather_NoCloseButton,
                maxSize: b.Feather_MaxSize || b.Feather_MaxDisplaySize || 985,
                maxEditSize: null,
                hiresMaxSize: 1E4,
                hiresWidth: null,
                hiresHeight: null,
                tools: b.Feather_EditOptions && "all" !== b.Feather_EditOptions && "All" !== b.Feather_EditOptions && "" !== b.Feather_EditOptions ? b.Feather_EditOptions : a.defaultTools_legacy,
                initTool: "",
                cropPresets: b.Feather_CropSizes || ["Original", "Custom", ["Square", "1:1"], "3:2", "3:5", "4:3", "4:5", "4:6", "5:7",
                    "8:10", "16:9"],
                cropPresetDefault: "Custom",
                cropPresetsStrict: !1,
                resizePresets: b.Feather_ResizeSizes || "320x240 640x480 800x600 1280x1024 1600x1200 240x320 480x640 600x800 1024x1280 1200x1600".split(" "),
                stickers: b.Feather_Stickers || a.defaultStickers,
                apiKey: b.Feather_APIKey,
                hiresUrl: b.Feather_HiResURL,
                postUrl: b.Feather_PostURL,
                postData: null,
                fileFormat: b.Feather_FileFormat || b.Feather_ContentType || "",
                jpgQuality: b.Feather_FileQuality || 100,
                debug: !1,
                asyncSave: !0,
                signature: b.Feather_Signature || null,
                timestamp: b.Feather_Timestamp || null,
                useCustomFileExpiration: !1,
                allowInAppPurchase: !1
            }
        };
        a.baseConfig = c(b);
        if ("https:" == b.location.protocol || "chrome-extension:" == b.location.protocol) {
            var d, e;
            for (e in a.build) d = e.split("_SSL"), 2 === d.length && a.build[e] && (d = d[0], a.build[d] = a.build[e])
        }(b.Feather_Theme || b.Feather_OpenType || b.Feather_APIKey) && b.setTimeout(function () {
            var d = new a.Feather;
            b.aviaryeditor = function (e, f, i, j) {
                a.launchData = c(b, a.baseConfig);
                e = a.util.extend(a.launchData, {
                    image: e,
                    url: f,
                    postData: i,
                    appendTo: j
                });
                d.launch(e)
            };
            b.aviaryeditor_close = d.close;
            b.aviaryeditor_relaunch = d.relaunch;
            b.aviaryeditor_activatetool = d.activateTool;
            b.aviarynewimage = d.replaceImage
        }, 0)
    })(j);
    a.getLocalizedString = function (b) {
        try {
            var c = a.lang[a.launchData.language][b];
            void 0 === c && (c = b);
            return c
        } catch (d) {}
        return b
    };
    Function.prototype.AV_bindInst = function (a) {
        var c = this;
        return function () {
            return c.apply(a, arguments)
        }
    };
    a.injectControls = function () {
        var b, c;
        "popup" == a.launchData.openType ? (b = "", c = a.template[a.launchData.layout].saveBlock()) : (b = a.template[a.launchData.layout].saveBlock(),
        c = "");
        if (a.criticalLayoutStyles && !a.feather_loaded) {
            var d = k.createElement("style");
            d.type = "text/css";
            var e = k.createTextNode(a.criticalLayoutStyles);
            d.styleSheet ? d.styleSheet.cssText = e.nodeValue : d.appendChild(e);
            k.getElementsByTagName("head")[0].appendChild(d)
        }
        b = a.template[a.launchData.layout].controls({
            internalSaveBlock: b,
            externalSaveBlock: c
        });
        c = k.createElement("div");
        c.id = "avpw_holder";
        d = "";
        a.featherUseFlash && (d = "avpw_flash ");
        a.msie && (d += "avpw_ie" + a.msie);
        d && (c.className = d);
        (d = k.getElementsByTagName("body")) && (d = d[0]);
        d || (d = k.documentElement);
        d.appendChild(c);
        c.innerHTML = b
    };
    a.setPopupPos = function (b) {
        var c = a.util.getX(b),
            d = a.util.getY(b),
            b = c + (b.width < a.launchData.maxSize ? b.width : a.launchData.maxSize) + 15,
            c = k.getElementById("avpw_controls");
        c.style.position = "absolute";
        c.style.left = b + "px";
        c.style.top = d + "px"
    };
    a.setLightboxPos = function () {
        var a;
        a = "pageYOffset" in j ? j.pageYOffset : (((t = k.documentElement) || (t = k.body.parentNode)) && "number" == typeof t.ScrollTop ? t : k.body).scrollTop;
        k.getElementById("avpw_controls").style.top = a + 30 + "px"
    };
    a.buildHiddenFrame = function (b, c, d, e) {
        d || (d = a.build.feather_baseURL + "blank.html");
        c || (c = b);
        return ['<iframe width="1" height="1" style="position:absolute;left:-9999px;" ', 'id="' + b + '" name="' + c + '" src="' + d + '"', e ? ' onload="' + e + '"' : "", "></iframe>"].join("")
    };
    a.simpleXHRPost = function (a, c, d) {
        function e() {
            d && 4 === i.readyState && d(i.responseXML)
        }
        function f(a) {
            var b = [];
            avpw$.each(a, function (a, c) {
                c && b.push("Content-Disposition: form-data; " + ('name="' + a + '"\r\n\r\n') + (c + "\r\n"))
            });
            a = "--" + h + "\r\n";
            a += b.join("--" + h + "\r\n");
            return a += "--" + h + "--\r\n"
        }
        var h = "FEATHER-AJAX---" + (new Date).getTime(),
            i = new XMLHttpRequest;
        try {
            var j = "multipart/form-data; charset=UTF-8; boundary=" + h;
            i.open("POST", a, !0);
            i.setRequestHeader("Content-Type", j);
            i.onreadystatechange = e;
            var k = f(c);
            i.send(k)
        } catch (q) {
            return !1
        }
        return !0
    };
    a.Feather = function (b) {
        var c = this,
            d = function () {
                a.injectControls();
                a.util.nextFrame(a.loadStageFinal)
            }, e = function () {
                "undefined" !== typeof avpw$ ? avpw$(k).ready(d) : d()
            }, g = !1;
        if (b && (b.apiVersion && 2 === parseInt(b.apiVersion) && (b.openType = "aviary"), !b.tools || "all" === b.tools || "All" === b.tools || "" === b.tools)) g = !0;
        b = b || {};
        a.launchData = a.util.extend(a.baseConfig, b);
        (function () {
            function b(c) {
                var c = a.build.feather_baseURL + "css/" + c,
                    d = a.launchData.theme;
                "mobile" == a.launchData.openType || "aviary" == a.launchData.openType ? a.util.loadFile(c + ".css", "css") : (a.msie && (8 === a.msie || 7 === a.msie) ? a.util.loadFile(c + "_ie" + a.msie + ".css", "css") : a.featherUseFlash ? a.util.loadFile(c + "_flash.css", "css") : a.util.loadFile(c + ".css", "css"), a.util.loadFile(c +
                    "-" + d + ".css", "css"))
            }
            a.featherUseFlash = !a.featherHtmlOk() && a.featherFlashOk();
            a.launchData.language = a.launchData.language.toLowerCase();
            "float" == a.launchData.openType && (a.launchData.openType = "popup");
            "integrated" == a.launchData.openType && (a.launchData.openType = "lightbox");
            "inline" == a.launchData.openType && (a.launchData.openType = "inject");
            a.featherUseFlash && "popup" == a.launchData.openType && (a.launchData.openType = "lightbox");
            g && (a.launchData.tools = "aviary" === a.launchData.openType ? a.defaultTools : a.defaultTools_legacy,
                "mobile" == a.launchData.openType && a.launchData.tools.unshift("effects"));
            if (!a.feather_loaded && !a.feather_loading) {
                a.feather_loading = !0;
                var c = a.launchData.language || "en",
                    d = "js/feathercontrols_desktop_bluesky";
                "mobile" == a.launchData.openType ? (d = "js/feathercontrols_mobile", a.launchData.layout = "mobile_default") : "aviary" == a.launchData.openType && (d = "js/feathercontrols_desktop", a.launchData.layout = "desktop");
                d = a.validLanguages && a.validLanguages[c] ? d + ("_" + c + ".js") : d + "_en.js";
                "mobile" == a.launchData.openType ? b("feather_mobile") : "aviary" == a.launchData.openType ? a.launchData.minimumStyling ? b("feather_core") : b("feather_theme_aviary") : "popup" == a.launchData.openType ? b("feather") : b("feather_hd");
                "aviary" == a.launchData.openType ? a.util.loadFile(a.build.feather_baseURL + "images/aviary_atlas.png", "img") : a.util.loadFile(a.build.feather_baseURL + "images/atlas-" + a.launchData.theme + ".png", "img");
                a.build.bundled ? e() : a.util.loadFile(a.build.feather_baseURL + d, "js", e)
            }
        })();
        var h = function () {
            if (a.paintWidgetInstance) return !1;
            var b = a.util.getImageElem(a.launchData.image);
            "popup" == a.launchData.openType ? a.setPopupPos(b) : "lightbox" == a.launchData.openType && a.setLightboxPos(b);
            a.paintWidgetLauncher(b, a.launchData.url)
        };
        c.launch = function (b) {
            if (!a.feather_loaded) return !1;
            var d = k.getElementById("avpw_holder");
            d || a.injectControls();
            if (a.paintWidgetInstance) {
                if (d) return !1;
                c.close(!0)
            }
            delete b.language;
            a.launchData = b ? a.util.extend(a.launchData, b) : a.launchData;
            if (!a.launchData.image) return a.errorNotify("BAD_IMAGE"), !1;
            a.launchData.image = a.util.getImageElem(a.launchData.image);
            if (a.featherUseFlash) h();
            else {
                if (!a.featherSupported()) return a.errorNotify("UNSUPPORTED") && "aviary" == a.launchData.openType && (a.controlsWidgetInstance = new a.ControlsWidget, a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "placeControls", [a.launchData.appendTo]), a.controlsWidgetInstance.bindControls(), k.getElementById("avpw_controls").style.display = "block", a.controlsWidgetInstance.messager.show("avpw_aviary_unsupported", !0)), !0;
                a.util.nextFrame(h)
            }
            return !0
        };
        c.save = function () {
            return !a.paintWidgetInstance ? !1 : a.controlsWidgetInstance.save()
        };
        c.close = function (b) {
            if (!a.paintWidgetInstance) return !1;
            a.paintWidgetCloser(b)
        };
        c.relaunch = function () {
            a.isRelaunched = !0;
            if (a.launchData) c.launch(a.launchData);
            else return !1
        };
        c.activateTool = function (b) {
            f.trigger("tool:open", b, a.controlsWidgetInstance)
        };
        c.replaceImage = function (b) {
            if (a.launchData) c.close(!0), a.util.nextFrame(function () {
                a.launchData.url = b;
                c.launch(a.launchData)
            });
            else return !1
        };
        c.updateConfig = function (b,
        c) {
            if (a.launchData && b && "string" === typeof b) a.launchData[b] = c;
            else return !1
        };
        c.getIsDirty = function () {
            return a.paintWidgetInstance ? a.paintWidgetInstance.dirty : !1
        };
        c.getImageData = function (b, d, e) {
            var g = a.controlsWidgetInstance,
                h = !a.featherUseFlash;
            return a.paintWidgetInstance && 2 === g.loaderPhase ? (f.trigger("tool:commit"), a.paintWidgetInstance.showWaitThrobber(h, function () {
                a.paintWidgetInstance.exportImage(e, function (e) {
                    d && a.util.nextFrame(function () {
                        a.controlsWidget_onImageSaved(g.origURL)
                    });
                    b && "function" === typeof b && b.apply(c, [e]);
                    a.paintWidgetInstance.showWaitThrobber(!1)
                })
            }), !0) : !1
        };
        c.getActionList = function () {
            if (a.paintWidgetInstance) return f.trigger("tool:commit"), a.paintWidgetInstance.actions.exportJSON(!0)
        };
        c.disableControls = function () {
            a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "disableControls")
        };
        c.enableControls = function () {
            a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "enableControls")
        };
        c.getImageDimensions = function () {
            var b = null;
            if (a.paintWidgetInstance && (b = a.paintWidgetInstance.getScaledSize(), !a.launchData.hiresUrl || !a.launchData.hiresWidth || !a.launchData.hiresHeight)) delete b.hiresWidth, delete b.hiresHeight;
            return b
        };
        return c
    };
    a.setUpOstrich = function () {
        avpw_swfobject.embedSWF(a.build.feather_baseURL + "ostrich/OstrichFeather.swf", "avpw_OstrichFeather", "1", "1", a.build.MINIMUM_FLASH_PLAYER_VERSION, "ostrich/playerProductInstall.swf", {
            initializedCallback: "engineReady",
            allowDomains: "*",
            completeCallback: "AV.module_flashfilter_onFilterComplete"
        }, {
            quality: "high",
            bgcolor: "#ffffff",
            allowscriptaccess: "always",
            allowfullscreen: "true",
            hasPriority: "true"
        }, {
            id: "avpw_OstrichFeather",
            name: "avpw_OstrichFeather",
            align: "middle"
        })
    };
    a.loadStageFinal = function () {
        a.feather_loaded = !0;
        if ("function" === typeof a.launchData.onLoad) a.launchData.onLoad()
    };
    a.featherSupported = function () {
        return a.featherHtmlOk() || a.featherFlashOk() || a.launchData.forceSupport
    };
    a.featherFlashOk = function () {
        return a.launchData.forceFlash ? !0 : avpw_swfobject && avpw_swfobject.hasFlashPlayerVersion(a.build.MINIMUM_FLASH_PLAYER_VERSION)
    };
    a.featherHtmlOk = function () {
        if (a.launchData.forceFlash) return !1;
        var b = !! k.createElement("canvas").getContext,
            c = "function" === typeof j.postMessage;
        return b && c
    };
    a.getFlashMovie = function (a) {
        return j[a] || k[a]
    };
    a.msie = function () {
        for (var a = 3, c = k.createElement("div"), d = c.getElementsByTagName("i"); c.innerHTML = "<\!--[if gt IE " + ++a + "]><i></i><![endif]--\>", d[0];);
        return 4 < a ? a : void 0
    }();
    a.firefox = function () {
        var a;
        "Gecko" === j.navigator.product && (a = navigator.userAgent.split("Firefox/")[1], a = parseInt(a, 10));
        return a
    }();
    a.PAGE_WIDTH = 360;
    a.setPageWidth = function (b) {
        a.PAGE_WIDTH = b
    };
    return i
})(this, "undefined" !== typeof window ? window : {}, "undefined" !== typeof document ? document : {});
(function (i, j, k) {
    i.support = function (a) {
        var f = a.navigator.userAgent,
            b = a.screen.width,
            a = {
                "0": /Android/i,
                1: /webOS/i,
                2: /iPhone/i,
                3: /iPod/i,
                4: /BlackBerry/i,
                5: /iPad/i
            }, c, d = 0,
            e = 0,
            g = 0,
            h;
        for (h in a) f.match(a[h]) && (c = parseInt(h));
        f.match(/AppleWebKit/i) && (d = 1);
        0 === c && (e = 1);
        1 === e && (f = f.match(/Android [0-9].[0-9]/).toString()) && (g = parseFloat(f.split("Android ")[1]));
        f = {
            isAppleWebkit: function () {
                return d === 1
            },
            isMobileWebkit: function () {
                return d === 1 && b && (b <= 480 || g > 0 && g <= 2.3)
            },
            isIPhoneOrIPod: function () {
                return c === 2 || c === 3
            },
            isAndroid: function () {
                return e === 1
            },
            getAndroidVersion: function () {
                return g
            }
        };
        f.getVendorProperty = function () {
            var a = {};
            return function (b) {
                var c;
                if (!(c = a[b])) {
                    var d;
                    a: {
                        var e = k.createElement("div");
                        c = b;
                        var f = ["webkit", "ms", "Moz", "O"],
                            g, h = e.style;
                        if (h[c] !== void 0) d = c;
                        else {
                            c = c.charAt(0).toUpperCase() + c.slice(1);
                            for (g = 0; g < f.length; g++) {
                                e = f[g] + c;
                                if (h[e] !== void 0) {
                                    d = e;
                                    break a
                                }
                            }
                        }
                    }
                    c = a[b] = d
                }
                return c
            }
        }();
        return f
    }(j)
})(window.AV || (window.AV = {}), window, document);